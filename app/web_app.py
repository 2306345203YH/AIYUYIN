"""First-version local multi-character voice chat web application."""

from __future__ import annotations

import asyncio
import json
import os
import re
import shutil
import sqlite3
import subprocess
import sys
import tempfile
import uuid
import wave
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, AsyncIterator
from zoneinfo import ZoneInfo

import httpx
import keyring
import yaml
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from apscheduler.triggers.date import DateTrigger
from apscheduler.triggers.interval import IntervalTrigger
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_ROOT = PROJECT_ROOT / "data" / "chat"
OUTPUT_ROOT = PROJECT_ROOT / "outputs"
CHAT_OUTPUT_ROOT = OUTPUT_ROOT / "chat"
DB_PATH = DATA_ROOT / "chat.db"
VOICE_CONFIG_PATH = PROJECT_ROOT / "config" / "voices.yaml"
WEB_DIST = PROJECT_ROOT / "web" / "dist"
DEFAULT_ASR_MODEL = PROJECT_ROOT / "models" / "asr" / "vosk_zh_small"
KEYRING_SERVICE = "aiyuyin.web_chat"
SHANGHAI = ZoneInfo("Asia/Shanghai")

DATA_ROOT.mkdir(parents=True, exist_ok=True)
CHAT_OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)

tts_lock = asyncio.Lock()
vosk_lock = asyncio.Lock()
vosk_model: Any = None
scheduler = AsyncIOScheduler(timezone=SHANGHAI)


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def db_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def rows_as_dict(rows: list[sqlite3.Row]) -> list[dict[str, Any]]:
    return [dict(row) for row in rows]


def load_voice_config() -> dict[str, dict[str, Any]]:
    with VOICE_CONFIG_PATH.open("r", encoding="utf-8") as handle:
        return (yaml.safe_load(handle) or {}).get("voices", {})


def init_database() -> None:
    connection = db_connection()
    connection.executescript(
        """
        CREATE TABLE IF NOT EXISTS llm_connections (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            kind TEXT NOT NULL DEFAULT 'openai',
            base_url TEXT NOT NULL DEFAULT '',
            model TEXT NOT NULL DEFAULT '',
            api_key_ref TEXT NOT NULL DEFAULT '',
            api_key_last4 TEXT NOT NULL DEFAULT '',
            temperature REAL NOT NULL DEFAULT 0.7,
            max_tokens INTEGER NOT NULL DEFAULT 600,
            enabled INTEGER NOT NULL DEFAULT 1,
            created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS voice_profiles (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            provider TEXT NOT NULL,
            voice_key TEXT NOT NULL,
            default_emotion TEXT NOT NULL DEFAULT 'auto',
            enabled INTEGER NOT NULL DEFAULT 1,
            created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS characters (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            avatar TEXT NOT NULL DEFAULT 'AI',
            color TEXT NOT NULL DEFAULT '#b987f5',
            system_prompt TEXT NOT NULL DEFAULT '',
            llm_connection_id TEXT NOT NULL,
            llm_model TEXT NOT NULL DEFAULT '',
            voice_profile_id TEXT NOT NULL,
            default_emotion TEXT NOT NULL DEFAULT 'auto',
            enabled INTEGER NOT NULL DEFAULT 1,
            created_at TEXT NOT NULL,
            FOREIGN KEY (llm_connection_id) REFERENCES llm_connections(id),
            FOREIGN KEY (voice_profile_id) REFERENCES voice_profiles(id)
        );

        CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            mode TEXT NOT NULL DEFAULT 'specified',
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS conversation_members (
            conversation_id TEXT NOT NULL,
            character_id TEXT NOT NULL,
            position INTEGER NOT NULL DEFAULT 0,
            muted INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY (conversation_id, character_id),
            FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
            FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS messages (
            id TEXT PRIMARY KEY,
            conversation_id TEXT NOT NULL,
            role TEXT NOT NULL,
            character_id TEXT,
            content TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'ready',
            source TEXT NOT NULL DEFAULT 'manual',
            audio_path TEXT NOT NULL DEFAULT '',
            voice_snapshot TEXT NOT NULL DEFAULT '',
            error_message TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL,
            FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
            FOREIGN KEY (character_id) REFERENCES characters(id)
        );

        CREATE TABLE IF NOT EXISTS schedules (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            conversation_id TEXT NOT NULL,
            character_id TEXT NOT NULL,
            trigger_type TEXT NOT NULL,
            trigger_value TEXT NOT NULL,
            prompt TEXT NOT NULL,
            action_mode TEXT NOT NULL DEFAULT 'llm',
            enabled INTEGER NOT NULL DEFAULT 1,
            auto_tts INTEGER NOT NULL DEFAULT 1,
            auto_play INTEGER NOT NULL DEFAULT 0,
            last_run_at TEXT NOT NULL DEFAULT '',
            last_error TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL,
            FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
            FOREIGN KEY (character_id) REFERENCES characters(id)
        );

        CREATE TABLE IF NOT EXISTS schedule_runs (
            id TEXT PRIMARY KEY,
            schedule_id TEXT NOT NULL,
            status TEXT NOT NULL,
            message_id TEXT NOT NULL DEFAULT '',
            error TEXT NOT NULL DEFAULT '',
            started_at TEXT NOT NULL,
            finished_at TEXT NOT NULL DEFAULT '',
            FOREIGN KEY (schedule_id) REFERENCES schedules(id) ON DELETE CASCADE
        );
        """
    )
    message_columns = {
        str(row["name"])
        for row in connection.execute("PRAGMA table_info(messages)").fetchall()
    }
    if "error_message" not in message_columns:
        connection.execute(
            "ALTER TABLE messages ADD COLUMN error_message TEXT NOT NULL DEFAULT ''"
        )
    seed_defaults(connection)
    # The seeded demo connection can be edited from the UI. If it now has a
    # real Base URL, migrate it to an OpenAI-compatible connection instead of
    # keeping the old mock flag and silently returning demo replies.
    connection.execute(
        "UPDATE llm_connections SET kind = 'openai' WHERE kind = 'mock' AND TRIM(base_url) <> ''"
    )
    connection.commit()
    connection.close()


def seed_defaults(connection: sqlite3.Connection) -> None:
    now = utc_now()
    voices = load_voice_config()
    voice_labels = {"aiyafala": ("艾雅法拉", "艾", "#d5a357"), "changli": ("长离", "长", "#d77c92")}

    connection.execute(
        """
        INSERT OR IGNORE INTO llm_connections
        (id, name, kind, base_url, model, api_key_ref, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        ("demo", "演示模式（无需 API Key）", "mock", "", "demo", "", now),
    )
    connection.execute(
        """
        INSERT OR IGNORE INTO llm_connections
        (id, name, kind, base_url, model, api_key_ref, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        (
            "llama-local",
            "本地 llama.cpp",
            "openai",
            "http://127.0.0.1:8080/v1",
            "local-model",
            "",
            now,
        ),
    )

    for voice_key, profile in voices.items():
        label, avatar, color = voice_labels.get(voice_key, (voice_key, voice_key[:1].upper(), "#8aa4d6"))
        connection.execute(
            """
            INSERT OR IGNORE INTO voice_profiles
            (id, name, provider, voice_key, default_emotion, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (voice_key, f"GPT-SoVITS · {label}", "gpt_sovits", voice_key, "auto", now),
        )
        default_prompt = {
            "aiyafala": "你是艾雅法拉，温柔、聪明、略带谨慎的角色。回答简洁自然，保持陪伴感。",
            "changli": "你是长离，沉稳、温和、富有洞察力。回答有分寸，偶尔带一点诗意。",
        }.get(voice_key, f"你是{label}，请自然地与用户对话。")
        connection.execute(
            """
            INSERT OR IGNORE INTO characters
            (id, name, avatar, color, system_prompt, llm_connection_id,
             llm_model, voice_profile_id, default_emotion, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                voice_key,
                label,
                avatar,
                color,
                default_prompt,
                "demo",
                "",
                voice_key,
                "auto",
                now,
            ),
        )

    connection.execute(
        """
        INSERT OR IGNORE INTO voice_profiles
        (id, name, provider, voice_key, default_emotion, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        ("browser-zh", "浏览器中文语音 · 免费免 Key", "browser", "zh-CN", "auto", now),
    )

    conversation_id = "default-lounge"
    connection.execute(
        """
        INSERT OR IGNORE INTO conversations
        (id, title, mode, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?)
        """,
        (conversation_id, "角色会客厅", "specified", now, now),
    )
    for position, character_id in enumerate(("aiyafala", "changli")):
        if connection.execute("SELECT 1 FROM characters WHERE id = ?", (character_id,)).fetchone():
            connection.execute(
                """
                INSERT OR IGNORE INTO conversation_members
                (conversation_id, character_id, position)
                VALUES (?, ?, ?)
                """,
                (conversation_id, character_id, position),
            )


def credential_ref(connection_id: str) -> str:
    return f"llm:{connection_id}"


def read_api_key(connection_row: sqlite3.Row | dict[str, Any]) -> str:
    ref = str(connection_row["api_key_ref"] or "")
    if not ref:
        return ""
    return keyring.get_password(KEYRING_SERVICE, ref) or ""


def safe_connection(row: sqlite3.Row | dict[str, Any]) -> dict[str, Any]:
    item = dict(row)
    item["enabled"] = bool(item["enabled"])
    item["has_api_key"] = bool(item.get("api_key_last4"))
    item.pop("api_key_ref", None)
    return item


def fetch_character(character_id: str) -> sqlite3.Row | None:
    connection = db_connection()
    row = connection.execute(
        """
        SELECT c.*, l.name AS llm_connection_name, l.kind AS llm_kind,
               l.base_url AS llm_base_url, l.model AS llm_default_model,
               l.api_key_ref, l.api_key_last4, l.temperature, l.max_tokens,
               v.name AS voice_name, v.provider AS voice_provider,
               v.voice_key
        FROM characters c
        JOIN llm_connections l ON l.id = c.llm_connection_id
        JOIN voice_profiles v ON v.id = c.voice_profile_id
        WHERE c.id = ?
        """,
        (character_id,),
    ).fetchone()
    connection.close()
    return row


def safe_character(row: sqlite3.Row) -> dict[str, Any]:
    item = dict(row)
    item["enabled"] = bool(item["enabled"])
    item["has_api_key"] = bool(item.get("api_key_last4"))
    item.pop("api_key_ref", None)
    return item


def fetch_message(message_id: str) -> sqlite3.Row | None:
    connection = db_connection()
    row = connection.execute("SELECT * FROM messages WHERE id = ?", (message_id,)).fetchone()
    connection.close()
    return row


def fetch_history(
    conversation_id: str,
    current_character_id: str = "",
    limit: int = 24,
    excluded_message_ids: set[str] | None = None,
) -> list[dict[str, str]]:
    connection = db_connection()
    rows = connection.execute(
        """
        SELECT m.id, m.role, m.character_id, m.content, c.name AS character_name
        FROM messages m
        LEFT JOIN characters c ON c.id = m.character_id
        WHERE m.conversation_id = ? AND m.status != 'generating'
        ORDER BY m.created_at DESC
        LIMIT ?
        """,
        (conversation_id, limit),
    ).fetchall()
    connection.close()
    result: list[dict[str, str]] = []
    for row in reversed(rows):
        if excluded_message_ids and row["id"] in excluded_message_ids:
            continue
        if row["role"] == "user":
            result.append({"role": "user", "content": row["content"]})
        else:
            name = row["character_name"] or "AI"
            if current_character_id and row["character_id"] == current_character_id:
                result.append({"role": "assistant", "content": row["content"]})
            else:
                result.append({"role": "user", "content": f"【{name}】说：{row['content']}"})
    return result


def insert_message(
    conversation_id: str,
    role: str,
    content: str,
    character_id: str | None = None,
    status: str = "ready",
    source: str = "manual",
) -> str:
    message_id = uuid.uuid4().hex
    connection = db_connection()
    now = utc_now()
    connection.execute(
        """
        INSERT INTO messages
        (id, conversation_id, role, character_id, content, status, source, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (message_id, conversation_id, role, character_id, content, status, source, now),
    )
    connection.execute("UPDATE conversations SET updated_at = ? WHERE id = ?", (now, conversation_id))
    connection.commit()
    connection.close()
    return message_id


def update_message(message_id: str, **values: Any) -> None:
    if not values:
        return
    columns = ", ".join(f"{key} = ?" for key in values)
    connection = db_connection()
    connection.execute(f"UPDATE messages SET {columns} WHERE id = ?", (*values.values(), message_id))
    connection.commit()
    connection.close()


def sse_event(event: str, payload: dict[str, Any]) -> str:
    return f"event: {event}\ndata: {json.dumps(payload, ensure_ascii=False)}\n\n"


def api_url(base_url: str) -> str:
    normalized = base_url.rstrip("/")
    if normalized.endswith("/chat/completions"):
        return normalized
    if not normalized.endswith(("/v1", "/v1beta/openai")):
        normalized += "/v1"
    return f"{normalized}/chat/completions"


def extract_delta(data: dict[str, Any]) -> str:
    choices = data.get("choices") or []
    if not choices:
        return ""
    delta = choices[0].get("delta") or choices[0].get("message") or {}
    value = delta.get("content") or ""
    return str(value)


def voice_chat_system_prompt(character: sqlite3.Row, mode: str) -> str:
    """Add output constraints that keep each message usable as one voice turn."""
    name = str(character["name"])
    mode_hint = {
        "round_robin": "这是依次对话；你可以回应前面角色刚说的内容，但只能替自己发言。",
        "independent": "这是独立回答；只回答用户的问题，不替其他角色作答。",
    }.get(mode, "你正在单独回复用户。")
    return (
        f"{character['system_prompt']}\n\n"
        f"{mode_hint}\n"
        f"当前发言角色只能是{name}。直接输出{name}本人要说的话："
        "不要输出角色名标签，不要写其他角色的台词，不要写旁白、动作、场景描写或 Markdown 标题。"
        "默认使用适合朗读的自然口语，控制在 2 到 4 句、约 160 个汉字以内；"
        "只有用户明确要求详细解释时才可以更长。"
    )


def prepare_tts_text(text: str, character_name: str = "") -> str:
    """Remove visual-only markup while preserving all spoken content."""
    cleaned = re.sub(r"```[\s\S]*?```", "", text)
    cleaned = re.sub(r"`([^`]*)`", r"\1", cleaned)
    cleaned = re.sub(r"(?m)^\s{0,3}[#>]+\s*", "", cleaned)
    if character_name:
        escaped = re.escape(character_name)
        cleaned = re.sub(
            rf"(?im)^\s*(?:\[|【|（|\()?\s*{escaped}\s*(?:\]|】|）|\))?\s*[:：]?\s*",
            "",
            cleaned,
        )
    cleaned = cleaned.replace("**", "").replace("__", "")
    cleaned = re.sub(r"(?m)^\s*[-*+]\s+", "", cleaned)
    cleaned = re.sub(r"[\r\n]+", "。", cleaned)
    cleaned = re.sub(r"(?:。\s*){2,}", "。", cleaned)
    cleaned = re.sub(r"[，,；;：:]\s*。", "。", cleaned)
    cleaned = re.sub(r"([。？！!?…])\s*。", r"\1", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    if not cleaned:
        raise ValueError("清理格式后没有可朗读的文字")
    if cleaned[-1] not in "。？！!?…":
        cleaned += "。"
    return cleaned


async def stream_llm_reply(
    character: sqlite3.Row,
    conversation_id: str,
    excluded_message_ids: set[str] | None = None,
    reply_mode: str = "specified",
) -> AsyncIterator[str]:
    connection = db_connection()
    llm = connection.execute("SELECT * FROM llm_connections WHERE id = ?", (character["llm_connection_id"],)).fetchone()
    connection.close()
    if llm is None:
        raise RuntimeError("角色未绑定有效的 LLM 连接")

    messages = [
        {"role": "system", "content": voice_chat_system_prompt(character, reply_mode)}
    ]
    history = fetch_history(
        conversation_id,
        current_character_id=str(character["id"]),
        excluded_message_ids=excluded_message_ids,
    )
    messages.extend(history)

    if llm["kind"] == "mock" and not str(llm["base_url"] or "").strip():
        latest = next((item["content"] for item in reversed(history) if item["role"] == "user"), "")
        reply = (
            f"（演示模式）{character['name']}已经收到你的消息：“{latest}”。\n\n"
            "请在右侧设置中绑定网页大模型或本地 llama.cpp，即可切换为真实 AI 对话。"
        )
        for chunk in re.findall(r".{1,12}", reply, flags=re.DOTALL):
            await asyncio.sleep(0.015)
            yield chunk
        return

    base_url = str(llm["base_url"] or "").strip()
    model = str(character["llm_model"] or llm["model"] or "").strip()
    if not base_url or not model:
        raise RuntimeError("请先在设置中填写 API Base URL 和模型名称")

    headers = {"Content-Type": "application/json"}
    api_key = read_api_key(llm)
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    payload = {
        "model": model,
        "messages": messages,
        "stream": True,
        "temperature": float(llm["temperature"] or 0.7),
        "max_tokens": int(llm["max_tokens"] or 600),
    }

    timeout = httpx.Timeout(120.0, connect=20.0)
    async with httpx.AsyncClient(timeout=timeout) as client:
        async with client.stream("POST", api_url(base_url), headers=headers, json=payload) as response:
            if response.status_code >= 400:
                body = (await response.aread()).decode("utf-8", errors="replace")[:500]
                raise RuntimeError(f"模型服务返回 HTTP {response.status_code}: {body}")
            async for line in response.aiter_lines():
                if not line or not line.startswith("data:"):
                    continue
                raw = line[5:].strip()
                if raw == "[DONE]":
                    break
                try:
                    delta = extract_delta(json.loads(raw))
                except json.JSONDecodeError:
                    continue
                if delta:
                    yield delta


async def generate_message_text(character: sqlite3.Row, conversation_id: str) -> tuple[str, str]:
    parts: list[str] = []
    async for token in stream_llm_reply(character, conversation_id):
        parts.append(token)
    return "".join(parts).strip(), str(character["llm_model"] or character["llm_default_model"] or "")


def find_ffmpeg() -> str:
    bundled_path = PROJECT_ROOT / "runtime" / "ffmpeg" / "bin" / "ffmpeg.exe"
    if bundled_path.exists():
        return str(bundled_path)
    found = shutil.which("ffmpeg")
    if found:
        return found
    local_app_data = os.environ.get("LOCALAPPDATA", "")
    winget_path = Path(local_app_data) / "Microsoft" / "WinGet" / "Links" / "ffmpeg.exe"
    if winget_path.exists():
        return str(winget_path)
    try:
        import imageio_ffmpeg

        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception as exc:
        raise FileNotFoundError("找不到 FFmpeg，无法处理浏览器录音。") from exc


def transcribe_vosk_file(audio_path: Path) -> str:
    global vosk_model
    sys.path.insert(0, str(PROJECT_ROOT / "src"))
    from vosk import KaldiRecognizer, Model, SetLogLevel

    if not DEFAULT_ASR_MODEL.exists():
        raise FileNotFoundError(f"Vosk 中文模型不存在：{DEFAULT_ASR_MODEL}")
    if vosk_model is None:
        vosk_model = Model(str(DEFAULT_ASR_MODEL))
    SetLogLevel(-1)
    recognizer = KaldiRecognizer(vosk_model, 16000)
    with wave.open(str(audio_path), "rb") as source:
        if source.getnchannels() != 1 or source.getsampwidth() != 2:
            raise ValueError("识别音频必须是单声道 16-bit PCM WAV。")
        while True:
            data = source.readframes(4000)
            if not data:
                break
            recognizer.AcceptWaveform(data)
    result = json.loads(recognizer.FinalResult())
    return str(result.get("text", "")).strip()


def synthesize_with_gpt_sovits(
    message_id: str,
    text: str,
    voice_key: str,
    character_name: str = "",
) -> tuple[Path, str]:
    from app.voice_clone import generate_tts_audio, load_voice_profile

    profile = load_voice_profile(voice_key)
    output_path = CHAT_OUTPUT_ROOT / f"{message_id}_{voice_key}.wav"
    spoken_text = prepare_tts_text(text, character_name)
    generate_tts_audio(
        profile["gpt_model"],
        profile["sovits_model"],
        profile["bert_model"],
        profile["cnhubert_model"],
        profile["reference_audio"],
        profile["prompt_text"],
        spoken_text,
        output_path,
        os.environ.get("AIYUYIN_TTS_DEVICE", "auto"),
    )
    return output_path, voice_key


async def execute_scheduled_task(schedule_id: str) -> None:
    connection = db_connection()
    schedule = connection.execute("SELECT * FROM schedules WHERE id = ?", (schedule_id,)).fetchone()
    connection.close()
    if schedule is None or not schedule["enabled"]:
        return

    run_id = uuid.uuid4().hex
    started_at = utc_now()
    connection = db_connection()
    connection.execute(
        "INSERT INTO schedule_runs (id, schedule_id, status, started_at) VALUES (?, ?, ?, ?)",
        (run_id, schedule_id, "running", started_at),
    )
    connection.commit()
    connection.close()

    message_id = ""
    try:
        character = fetch_character(schedule["character_id"])
        if character is None:
            raise RuntimeError("定时任务绑定的角色不存在")
        if schedule["action_mode"] == "fixed":
            message_id = insert_message(
                schedule["conversation_id"],
                "assistant",
                schedule["prompt"],
                schedule["character_id"],
                source="schedule",
            )
        else:
            insert_message(
                schedule["conversation_id"],
                "user",
                f"[定时任务] {schedule['prompt']}",
                source="schedule",
            )
            message_id = insert_message(
                schedule["conversation_id"],
                "assistant",
                "",
                schedule["character_id"],
                status="generating",
                source="schedule",
            )
            text, _ = await generate_message_text(character, schedule["conversation_id"])
            update_message(message_id, content=text, status="ready")

        if schedule["auto_tts"] and message_id:
            if character["voice_provider"] == "browser":
                update_message(
                    message_id,
                    voice_snapshot=json.dumps(
                        {"provider": "browser", "lang": character["voice_key"]},
                        ensure_ascii=False,
                    ),
                )
            else:
                async with tts_lock:
                    voice_path, voice_key = await asyncio.to_thread(
                        synthesize_with_gpt_sovits,
                        message_id,
                        str(fetch_message(message_id)["content"]),
                        str(character["voice_key"]),
                        str(character["name"]),
                    )
                update_message(
                    message_id,
                    audio_path=str(voice_path.relative_to(OUTPUT_ROOT)).replace("\\", "/"),
                    voice_snapshot=json.dumps({"voice_key": voice_key}, ensure_ascii=False),
                )

        finished_at = utc_now()
        connection = db_connection()
        connection.execute(
            "UPDATE schedule_runs SET status = ?, message_id = ?, finished_at = ? WHERE id = ?",
            ("success", message_id, finished_at, run_id),
        )
        connection.execute(
            "UPDATE schedules SET last_run_at = ?, last_error = '' WHERE id = ?",
            (finished_at, schedule_id),
        )
        connection.commit()
        connection.close()
    except Exception as exc:
        finished_at = utc_now()
        connection = db_connection()
        connection.execute(
            "UPDATE schedule_runs SET status = ?, message_id = ?, error = ?, finished_at = ? WHERE id = ?",
            ("error", message_id, str(exc), finished_at, run_id),
        )
        connection.execute(
            "UPDATE schedules SET last_run_at = ?, last_error = ? WHERE id = ?",
            (finished_at, str(exc), schedule_id),
        )
        connection.commit()
        connection.close()


def schedule_trigger(row: sqlite3.Row):
    trigger_type = row["trigger_type"]
    value = str(row["trigger_value"])
    if trigger_type == "once":
        run_date = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return DateTrigger(run_date=run_date)
    if trigger_type == "interval":
        return IntervalTrigger(seconds=max(10, int(value)))
    if trigger_type == "daily":
        hour, minute = (int(part) for part in value.split(":", 1))
        return CronTrigger(hour=hour, minute=minute, timezone=SHANGHAI)
    raise ValueError(f"不支持的定时类型：{trigger_type}")


def install_schedule_job(row: sqlite3.Row) -> None:
    job_id = f"schedule:{row['id']}"
    try:
        scheduler.add_job(
            execute_scheduled_task,
            trigger=schedule_trigger(row),
            args=[row["id"]],
            id=job_id,
            replace_existing=True,
            coalesce=True,
            max_instances=1,
            misfire_grace_time=3600,
        )
    except Exception:
        scheduler.remove_job(job_id) if scheduler.get_job(job_id) else None
        raise


def reload_schedule_jobs() -> None:
    for job in scheduler.get_jobs():
        if job.id.startswith("schedule:"):
            scheduler.remove_job(job.id)
    connection = db_connection()
    rows = connection.execute("SELECT * FROM schedules WHERE enabled = 1").fetchall()
    connection.close()
    for row in rows:
        install_schedule_job(row)


class ConnectionInput(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    kind: str = "openai"
    base_url: str = ""
    model: str = ""
    api_key: str = ""
    temperature: float = Field(default=0.7, ge=0, le=2)
    max_tokens: int = Field(default=600, ge=1, le=8192)


class CharacterInput(BaseModel):
    name: str = Field(min_length=1, max_length=40)
    avatar: str = Field(default="AI", max_length=4)
    color: str = "#b987f5"
    system_prompt: str = "你是一个自然、友好的 AI 角色。"
    llm_connection_id: str = "demo"
    llm_model: str = ""
    voice_profile_id: str = "aiyafala"
    default_emotion: str = "auto"


class ConversationInput(BaseModel):
    title: str = Field(default="新会话", min_length=1, max_length=80)
    character_ids: list[str] = Field(default_factory=list)
    mode: str = "specified"


class ChatInput(BaseModel):
    conversation_id: str
    text: str = Field(min_length=1, max_length=12000)
    character_ids: list[str] = Field(default_factory=list)
    mode: str = "specified"


def conversation_member_ids(conversation_id: str) -> list[str]:
    connection = db_connection()
    rows = connection.execute(
        """
        SELECT cm.character_id
        FROM conversation_members cm
        JOIN characters c ON c.id = cm.character_id
        WHERE cm.conversation_id = ? AND cm.muted = 0 AND c.enabled = 1
        ORDER BY cm.position
        """,
        (conversation_id,),
    ).fetchall()
    connection.close()
    return [str(row["character_id"]) for row in rows]


def resolve_reply_character_ids(
    conversation_id: str,
    requested_ids: list[str],
    mode: str,
) -> list[str]:
    requested = list(dict.fromkeys(requested_ids))
    members = conversation_member_ids(conversation_id)
    if mode == "specified":
        return (requested or members)[:1]
    if mode in {"round_robin", "independent"} and len(requested) < 2:
        return members
    return requested or members


class ScheduleInput(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    conversation_id: str
    character_id: str
    trigger_type: str = "interval"
    trigger_value: str = "3600"
    prompt: str = Field(min_length=1, max_length=4000)
    action_mode: str = "llm"
    enabled: bool = True
    auto_tts: bool = True
    auto_play: bool = False


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_database()
    scheduler.start()
    reload_schedule_jobs()
    yield
    scheduler.shutdown(wait=False)


app = FastAPI(title="AIyuyin Voice Chat", version="0.1.0", lifespan=lifespan)
app.mount("/media", StaticFiles(directory=str(OUTPUT_ROOT)), name="media")


@app.get("/api/health")
async def health() -> dict[str, Any]:
    return {"status": "ok", "service": "aiyuyin-web-chat", "database": str(DB_PATH)}


@app.get("/api/bootstrap")
async def bootstrap() -> dict[str, Any]:
    connection = db_connection()
    connections = rows_as_dict(connection.execute("SELECT * FROM llm_connections ORDER BY created_at").fetchall())
    voices = rows_as_dict(connection.execute("SELECT * FROM voice_profiles WHERE enabled = 1 ORDER BY created_at").fetchall())
    characters = [safe_character(row) for row in connection.execute(
        """
        SELECT c.*, l.name AS llm_connection_name, l.kind AS llm_kind,
               l.base_url AS llm_base_url, l.model AS llm_default_model,
               l.api_key_ref, l.api_key_last4, l.temperature, l.max_tokens,
               v.name AS voice_name, v.provider AS voice_provider, v.voice_key
        FROM characters c
        JOIN llm_connections l ON l.id = c.llm_connection_id
        JOIN voice_profiles v ON v.id = c.voice_profile_id
        ORDER BY c.created_at
        """
    ).fetchall()]
    conversations = rows_as_dict(connection.execute(
        "SELECT id, title, mode, created_at, updated_at FROM conversations ORDER BY updated_at DESC"
    ).fetchall())
    schedules = rows_as_dict(connection.execute(
        "SELECT * FROM schedules ORDER BY created_at DESC"
    ).fetchall())
    connection.close()
    return {
        "connections": [safe_connection(row) for row in connections],
        "voices": voices,
        "characters": characters,
        "conversations": conversations,
        "schedules": schedules,
        "default_conversation_id": conversations[0]["id"] if conversations else "",
    }

@app.get("/api/conversations/{conversation_id}/messages")
async def conversation_messages(conversation_id: str) -> list[dict[str, Any]]:
    connection = db_connection()
    rows = connection.execute(
        """
        SELECT m.*, c.name AS character_name, c.avatar, c.color
        FROM messages m
        LEFT JOIN characters c ON c.id = m.character_id
        WHERE m.conversation_id = ?
        ORDER BY m.created_at ASC
        """,
        (conversation_id,),
    ).fetchall()
    connection.close()
    result = []
    for row in rows:
        item = dict(row)
        item["audio_url"] = f"/media/{item['audio_path']}" if item["audio_path"] else ""
        result.append(item)
    return result


@app.post("/api/conversations")
async def create_conversation(payload: ConversationInput) -> dict[str, Any]:
    conversation_id = uuid.uuid4().hex
    character_ids = payload.character_ids or ["aiyafala", "changli"]
    now = utc_now()
    connection = db_connection()
    connection.execute(
        "INSERT INTO conversations (id, title, mode, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
        (conversation_id, payload.title, payload.mode, now, now),
    )
    for position, character_id in enumerate(character_ids):
        connection.execute(
            "INSERT OR IGNORE INTO conversation_members (conversation_id, character_id, position) VALUES (?, ?, ?)",
            (conversation_id, character_id, position),
        )
    connection.commit()
    connection.close()
    return {"id": conversation_id, "title": payload.title, "mode": payload.mode}


@app.delete("/api/conversations/{conversation_id}/messages")
async def clear_conversation_messages(conversation_id: str) -> dict[str, Any]:
    """Clear one conversation and remove only audio files referenced by it."""
    connection = db_connection()
    rows = connection.execute(
        "SELECT audio_path FROM messages WHERE conversation_id = ? AND audio_path != ''",
        (conversation_id,),
    ).fetchall()
    connection.execute("DELETE FROM messages WHERE conversation_id = ?", (conversation_id,))
    connection.execute("UPDATE conversations SET updated_at = ? WHERE id = ?", (utc_now(), conversation_id))
    connection.commit()
    connection.close()

    removed_audio = 0
    for row in rows:
        relative = Path(str(row["audio_path"]))
        if relative.is_absolute() or ".." in relative.parts:
            continue
        audio_path = (OUTPUT_ROOT / relative).resolve()
        if audio_path.is_file() and str(audio_path).startswith(str(OUTPUT_ROOT.resolve())):
            try:
                audio_path.unlink()
                removed_audio += 1
            except OSError:
                pass
    return {"status": "cleared", "removed_audio": removed_audio}


@app.post("/api/connections")
async def create_connection(payload: ConnectionInput) -> dict[str, Any]:
    connection_id = uuid.uuid4().hex
    ref = credential_ref(connection_id)
    last4 = payload.api_key[-4:] if payload.api_key else ""
    connection_kind = "openai" if payload.base_url.strip() else payload.kind
    connection = db_connection()
    connection.execute(
        """
        INSERT INTO llm_connections
        (id, name, kind, base_url, model, api_key_ref, api_key_last4, temperature, max_tokens, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (connection_id, payload.name, connection_kind, payload.base_url, payload.model, ref if payload.api_key else "", last4, payload.temperature, payload.max_tokens, utc_now()),
    )
    connection.commit()
    connection.close()
    if payload.api_key:
        keyring.set_password(KEYRING_SERVICE, ref, payload.api_key)
    row = db_connection().execute("SELECT * FROM llm_connections WHERE id = ?", (connection_id,)).fetchone()
    return safe_connection(row)


@app.put("/api/connections/{connection_id}")
async def update_connection(connection_id: str, payload: ConnectionInput) -> dict[str, Any]:
    existing_connection = db_connection()
    row = existing_connection.execute("SELECT * FROM llm_connections WHERE id = ?", (connection_id,)).fetchone()
    existing_connection.close()
    if row is None:
        raise HTTPException(404, "模型连接不存在")
    ref = row["api_key_ref"] or (credential_ref(connection_id) if payload.api_key else "")
    last4 = payload.api_key[-4:] if payload.api_key else row["api_key_last4"]
    connection_kind = "openai" if payload.base_url.strip() else payload.kind
    connection = db_connection()
    connection.execute(
        """
        UPDATE llm_connections SET name = ?, kind = ?, base_url = ?, model = ?,
        api_key_ref = ?, api_key_last4 = ?, temperature = ?, max_tokens = ?
        WHERE id = ?
        """,
        (payload.name, connection_kind, payload.base_url, payload.model, ref, last4, payload.temperature, payload.max_tokens, connection_id),
    )
    connection.commit()
    connection.close()
    if payload.api_key:
        keyring.set_password(KEYRING_SERVICE, ref, payload.api_key)
    updated = db_connection().execute("SELECT * FROM llm_connections WHERE id = ?", (connection_id,)).fetchone()
    return safe_connection(updated)


@app.post("/api/characters")
async def create_character(payload: CharacterInput) -> dict[str, Any]:
    character_id = uuid.uuid4().hex
    now = utc_now()
    connection = db_connection()
    if connection.execute("SELECT 1 FROM llm_connections WHERE id = ?", (payload.llm_connection_id,)).fetchone() is None:
        connection.close()
        raise HTTPException(400, "LLM 连接不存在")
    if connection.execute("SELECT 1 FROM voice_profiles WHERE id = ?", (payload.voice_profile_id,)).fetchone() is None:
        connection.close()
        raise HTTPException(400, "音色配置不存在")
    connection.execute(
        """
        INSERT INTO characters
        (id, name, avatar, color, system_prompt, llm_connection_id, llm_model,
         voice_profile_id, default_emotion, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (character_id, payload.name, payload.avatar, payload.color, payload.system_prompt, payload.llm_connection_id, payload.llm_model, payload.voice_profile_id, payload.default_emotion, now),
    )
    connection.commit()
    connection.close()
    return safe_character(fetch_character(character_id))


@app.put("/api/characters/{character_id}")
async def update_character(character_id: str, payload: CharacterInput) -> dict[str, Any]:
    if fetch_character(character_id) is None:
        raise HTTPException(404, "角色不存在")
    connection = db_connection()
    connection.execute(
        """
        UPDATE characters SET name = ?, avatar = ?, color = ?, system_prompt = ?,
        llm_connection_id = ?, llm_model = ?, voice_profile_id = ?, default_emotion = ?
        WHERE id = ?
        """,
        (payload.name, payload.avatar, payload.color, payload.system_prompt, payload.llm_connection_id, payload.llm_model, payload.voice_profile_id, payload.default_emotion, character_id),
    )
    connection.commit()
    connection.close()
    return safe_character(fetch_character(character_id))


@app.post("/api/chat")
async def chat(payload: ChatInput) -> StreamingResponse:
    async def event_stream() -> AsyncIterator[str]:
        text = payload.text.strip()
        user_id = insert_message(payload.conversation_id, "user", text)
        yield sse_event("user", {"id": user_id, "content": text})

        selected_ids = resolve_reply_character_ids(
            payload.conversation_id,
            payload.character_ids,
            payload.mode,
        )
        if not selected_ids:
            yield sse_event("error", {"message": "当前会话还没有启用角色"})
            yield sse_event("done", {})
            return

        current_batch_ids: set[str] = set()
        for character_id in selected_ids:
            character = fetch_character(character_id)
            if character is None:
                yield sse_event("error", {"message": f"角色不存在：{character_id}"})
                continue
            message_id = insert_message(
                payload.conversation_id,
                "assistant",
                "",
                character_id,
                status="generating",
            )
            current_batch_ids.add(message_id)
            yield sse_event(
                "character_start",
                {"id": message_id, "character_id": character_id, "name": character["name"]},
            )
            parts: list[str] = []
            try:
                excluded_ids = current_batch_ids if payload.mode == "independent" else None
                async for token in stream_llm_reply(
                    character,
                    payload.conversation_id,
                    excluded_message_ids=excluded_ids,
                    reply_mode=payload.mode,
                ):
                    parts.append(token)
                    yield sse_event("token", {"id": message_id, "character_id": character_id, "content": token})
                content = "".join(parts).strip()
                if not content:
                    raise RuntimeError("模型没有返回文字")
                update_message(message_id, content=content, status="ready", error_message="")
                yield sse_event(
                    "character_done",
                    {
                        "id": message_id,
                        "character_id": character_id,
                        "content": content,
                        "voice_profile_id": character["voice_profile_id"],
                    },
                )
            except Exception as exc:
                update_message(message_id, content="", status="error", error_message=str(exc))
                yield sse_event("error", {"id": message_id, "character_id": character_id, "message": str(exc)})
        yield sse_event("done", {})

    return StreamingResponse(event_stream(), media_type="text/event-stream", headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})


@app.post("/api/messages/{message_id}/synthesize")
async def synthesize_message(message_id: str) -> dict[str, Any]:
    message = fetch_message(message_id)
    if message is None or message["role"] != "assistant":
        raise HTTPException(404, "语音消息不存在")
    if message["status"] not in {"ready", "audio_error"} or not message["content"].strip():
        raise HTTPException(400, "消息尚未生成完成")
    character = fetch_character(message["character_id"])
    if character is None:
        raise HTTPException(400, "消息所属角色不存在")

    if character["voice_provider"] == "browser":
        update_message(
            message_id,
            voice_snapshot=json.dumps(
                {"provider": "browser", "lang": character["voice_key"]},
                ensure_ascii=False,
            ),
            status="ready",
        )
        return {
            "message_id": message_id,
            "mode": "browser",
            "text": message["content"],
            "lang": character["voice_key"] or "zh-CN",
        }

    async with tts_lock:
        try:
            path, voice_key = await asyncio.to_thread(
                synthesize_with_gpt_sovits,
                message_id,
                message["content"],
                character["voice_key"],
                character["name"],
            )
        except Exception as exc:
            update_message(message_id, status="audio_error", error_message=str(exc))
            raise HTTPException(500, f"音色合成失败：{exc}") from exc
    relative = str(path.relative_to(OUTPUT_ROOT)).replace("\\", "/")
    update_message(
        message_id,
        audio_path=relative,
        voice_snapshot=json.dumps({"voice_key": voice_key}, ensure_ascii=False),
        status="ready",
        error_message="",
    )
    return {
        "message_id": message_id,
        "mode": "audio",
        "audio_url": f"/media/{relative}",
        "voice_key": voice_key,
    }


@app.post("/api/asr")
async def asr(file: UploadFile = File(...)) -> dict[str, Any]:
    suffix = Path(file.filename or "recording.webm").suffix or ".webm"
    temp_dir = DATA_ROOT / "temp"
    temp_dir.mkdir(parents=True, exist_ok=True)
    source_path = temp_dir / f"{uuid.uuid4().hex}{suffix}"
    normalized_path = source_path.with_suffix(".wav")
    try:
        with source_path.open("wb") as output:
            shutil.copyfileobj(file.file, output)
        subprocess.run(
            [find_ffmpeg(), "-hide_banner", "-loglevel", "error", "-y", "-i", str(source_path), "-ac", "1", "-ar", "16000", "-c:a", "pcm_s16le", str(normalized_path)],
            check=True,
            capture_output=True,
        )
        async with vosk_lock:
            text = await asyncio.to_thread(transcribe_vosk_file, normalized_path)
        return {"text": text, "engine": "vosk"}
    except subprocess.CalledProcessError as exc:
        detail = exc.stderr.decode("utf-8", errors="replace") if exc.stderr else str(exc)
        raise HTTPException(400, f"录音格式转换失败：{detail[:400]}") from exc
    except Exception as exc:
        raise HTTPException(500, f"语音识别失败：{exc}") from exc
    finally:
        for path in (source_path, normalized_path):
            path.unlink(missing_ok=True)


@app.post("/api/schedules")
async def create_schedule(payload: ScheduleInput) -> dict[str, Any]:
    if fetch_character(payload.character_id) is None:
        raise HTTPException(400, "角色不存在")
    schedule_id = uuid.uuid4().hex
    now = utc_now()
    connection = db_connection()
    connection.execute(
        """
        INSERT INTO schedules
        (id, name, conversation_id, character_id, trigger_type, trigger_value,
         prompt, action_mode, enabled, auto_tts, auto_play, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (schedule_id, payload.name, payload.conversation_id, payload.character_id, payload.trigger_type, payload.trigger_value, payload.prompt, payload.action_mode, int(payload.enabled), int(payload.auto_tts), int(payload.auto_play), now),
    )
    connection.commit()
    row = connection.execute("SELECT * FROM schedules WHERE id = ?", (schedule_id,)).fetchone()
    connection.close()
    if payload.enabled:
        try:
            install_schedule_job(row)
        except Exception as exc:
            raise HTTPException(400, f"定时规则无效：{exc}") from exc
    return dict(row)


@app.delete("/api/schedules/{schedule_id}")
async def delete_schedule(schedule_id: str) -> dict[str, str]:
    job_id = f"schedule:{schedule_id}"
    if scheduler.get_job(job_id):
        scheduler.remove_job(job_id)
    connection = db_connection()
    connection.execute("DELETE FROM schedules WHERE id = ?", (schedule_id,))
    connection.commit()
    connection.close()
    return {"status": "deleted"}


if WEB_DIST.exists():
    app.mount("/assets", StaticFiles(directory=str(WEB_DIST / "assets")), name="assets")


@app.get("/{path:path}")
async def frontend(path: str):
    if path.startswith(("api/", "media/", "assets/")):
        return JSONResponse({"detail": "Not found"}, status_code=404)
    index_path = WEB_DIST / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    return JSONResponse({"detail": "前端尚未构建，请执行 web\n目录中的 npm install 和 npm run build"}, status_code=503)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.web_app:app", host=os.environ.get("AIYUYIN_HOST", "127.0.0.1"), port=int(os.environ.get("AIYUYIN_WEB_PORT", "8000")), reload=False)
