"""Extract, transcribe, and segment speech from a video into a training dataset."""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import wave
from dataclasses import asdict, dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

import soundfile as sf

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_WHISPER_MODEL = PROJECT_ROOT / "models" / "asr" / "whisper" / "medium.pt"
DEFAULT_VOSK_MODEL = PROJECT_ROOT / "models" / "asr" / "vosk_zh_small"


@dataclass
class SpeechSegment:
    start: float
    end: float
    text: str

    @property
    def duration(self) -> float:
        return max(0.0, self.end - self.start)


def project_path(value: str | Path) -> Path:
    path = Path(value).expanduser()
    return path.resolve() if path.is_absolute() else (PROJECT_ROOT / path).resolve()


def find_executable(name: str) -> Path:
    """Find FFmpeg tools in the bundled runtime, PATH, WinGet links, or the Python fallback bundle."""
    bundled = PROJECT_ROOT / "runtime" / "ffmpeg" / "bin" / f"{name}.exe"
    if bundled.exists():
        return bundled.resolve()

    found = shutil.which(name)
    if found:
        return Path(found).resolve()

    local_app_data = os.environ.get("LOCALAPPDATA")
    if local_app_data:
        winget_link = Path(local_app_data) / "Microsoft" / "WinGet" / "Links" / f"{name}.exe"
        if winget_link.exists():
            return winget_link.resolve()

    if name == "ffmpeg":
        try:
            import imageio_ffmpeg

            bundled = Path(imageio_ffmpeg.get_ffmpeg_exe())
            if bundled.exists():
                return bundled.resolve()
        except (ImportError, RuntimeError):
            pass

    raise FileNotFoundError(
        f"找不到 {name}。请重新打开 PowerShell，或执行：winget install --id Gyan.FFmpeg --exact"
    )


def activate_executable(executable: Path) -> None:
    """Expose a discovered executable to libraries that invoke it by command name."""
    executable_dir = str(executable.parent)
    path_entries = os.environ.get("PATH", "").split(os.pathsep)
    if executable_dir.casefold() not in {entry.casefold() for entry in path_entries if entry}:
        os.environ["PATH"] = executable_dir + os.pathsep + os.environ.get("PATH", "")


def extract_normalized_audio(
    video_path: Path,
    audio_path: Path,
    ffmpeg_path: Path,
    sample_rate: int,
    start_seconds: float,
    duration_seconds: float | None,
) -> None:
    """Extract mono PCM audio at a stable sample rate for both ASR engines."""
    audio_path.parent.mkdir(parents=True, exist_ok=True)
    command = [str(ffmpeg_path), "-hide_banner", "-loglevel", "error", "-y"]
    if start_seconds > 0:
        command.extend(["-ss", f"{start_seconds:.3f}"])
    command.extend(["-i", str(video_path)])
    if duration_seconds is not None:
        command.extend(["-t", f"{duration_seconds:.3f}"])
    command.extend(
        [
            "-vn",
            "-ac",
            "1",
            "-ar",
            str(sample_rate),
            "-c:a",
            "pcm_s16le",
            str(audio_path),
        ]
    )
    subprocess.run(command, check=True)


def normalize_text(text: str, converter) -> str:
    text = converter.convert(text or "")
    text = text.replace("|", "｜")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(?<=[\u3400-\u9fff]) (?=[\u3400-\u9fff])", "", text)
    return text


def transcribe_whisper(
    audio_path: Path,
    model_path: Path,
    device: str,
    language: str | None,
    verbose: bool,
) -> tuple[list[SpeechSegment], str]:
    import torch
    import whisper

    selected_device = "cuda" if device == "auto" and torch.cuda.is_available() else device
    if selected_device == "auto":
        selected_device = "cpu"
    if selected_device == "cuda" and not torch.cuda.is_available():
        raise RuntimeError("当前 PyTorch 不支持 CUDA，请使用 --device cpu 或安装 CUDA 版 PyTorch。")

    print(f"加载 Whisper 模型：{model_path}（{selected_device}）")
    model = whisper.load_model(str(model_path), device=selected_device)
    result = model.transcribe(
        str(audio_path),
        language=language,
        task="transcribe",
        fp16=selected_device == "cuda",
        verbose=verbose,
        temperature=0.0,
        condition_on_previous_text=False,
    )
    segments = [
        SpeechSegment(float(item["start"]), float(item["end"]), str(item["text"]))
        for item in result.get("segments", [])
        if float(item["end"]) > float(item["start"])
    ]
    return segments, selected_device


def transcribe_vosk(audio_path: Path, model_path: Path) -> tuple[list[SpeechSegment], str]:
    sys.path.insert(0, str(PROJECT_ROOT / "src"))
    from vosk import KaldiRecognizer, Model, SetLogLevel

    SetLogLevel(-1)
    print(f"加载 Vosk 模型：{model_path}（cpu）")
    model = Model(str(model_path))
    segments: list[SpeechSegment] = []
    with wave.open(str(audio_path), "rb") as source:
        if source.getnchannels() != 1 or source.getsampwidth() != 2:
            raise ValueError("Vosk 输入必须是单声道 16-bit PCM WAV。")
        recognizer = KaldiRecognizer(model, source.getframerate())
        recognizer.SetWords(True)
        while chunk := source.readframes(8000):
            if recognizer.AcceptWaveform(chunk):
                _append_vosk_result(segments, json.loads(recognizer.Result()))
        _append_vosk_result(segments, json.loads(recognizer.FinalResult()))
    return segments, "cpu"


def _append_vosk_result(segments: list[SpeechSegment], result: dict) -> None:
    words = result.get("result") or []
    text = str(result.get("text", "")).strip()
    if words and text:
        segments.append(SpeechSegment(float(words[0]["start"]), float(words[-1]["end"]), text))


def merge_short_segments(
    segments: Iterable[SpeechSegment],
    min_duration: float,
    max_duration: float,
    max_gap: float,
) -> list[SpeechSegment]:
    """Merge short adjacent ASR segments without discarding overlong speech."""
    merged: list[SpeechSegment] = []
    current: SpeechSegment | None = None

    for segment in segments:
        if not segment.text.strip() or segment.duration <= 0:
            continue
        if current is None:
            current = SpeechSegment(segment.start, segment.end, segment.text)
            continue

        gap = max(0.0, segment.start - current.end)
        combined_duration = segment.end - current.start
        should_merge = (
            current.duration < min_duration
            and gap <= max_gap
            and combined_duration <= max_duration
        )
        if should_merge:
            current.end = segment.end
            current.text = f"{current.text}{segment.text}"
        else:
            merged.append(current)
            current = SpeechSegment(segment.start, segment.end, segment.text)

    if current is not None:
        if (
            current.duration < min_duration
            and merged
            and current.start - merged[-1].end <= max_gap
            and current.end - merged[-1].start <= max_duration
        ):
            merged[-1].end = current.end
            merged[-1].text = f"{merged[-1].text}{current.text}"
        else:
            merged.append(current)
    return merged


def write_dataset(
    audio_path: Path,
    output_dir: Path,
    segments: list[SpeechSegment],
    prefix: str,
    converter,
    padding: float,
    source_offset: float,
) -> list[dict]:
    clips_dir = output_dir / "clips"
    clips_dir.mkdir(parents=True, exist_ok=True)
    info = sf.info(audio_path)
    audio_duration = info.frames / info.samplerate
    records: list[dict] = []

    with sf.SoundFile(audio_path) as source:
        for index, segment in enumerate(segments, start=1):
            text = normalize_text(segment.text, converter)
            if not text:
                continue
            logical_start = max(0.0, min(audio_duration, segment.start))
            logical_end = max(logical_start, min(audio_duration, segment.end))
            if logical_end <= logical_start:
                continue
            logical_duration = logical_end - logical_start
            clip_start = max(0.0, logical_start - padding)
            clip_end = min(audio_duration, logical_end + padding)
            start_frame = int(round(clip_start * info.samplerate))
            end_frame = int(round(clip_end * info.samplerate))
            if end_frame <= start_frame:
                continue

            filename = f"{prefix}_{index:04d}.wav"
            output_path = clips_dir / filename
            source.seek(start_frame)
            audio = source.read(end_frame - start_frame, dtype="int16")
            sf.write(output_path, audio, info.samplerate, subtype="PCM_16")
            try:
                manifest_path = output_path.relative_to(PROJECT_ROOT).as_posix()
            except ValueError:
                manifest_path = output_path.as_posix()
            records.append(
                {
                    "path": manifest_path,
                    "text": text,
                    "start": round(logical_start + source_offset, 3),
                    "end": round(logical_end + source_offset, 3),
                    "duration": round(logical_duration, 3),
                    "too_short": False,
                    "overlong": False,
                }
            )
    return records


def ensure_clean_output(output_dir: Path, overwrite: bool) -> None:
    markers = [output_dir / "filelist.txt", output_dir / "manifest.json"]
    if not overwrite and any(path.exists() for path in markers):
        raise FileExistsError(f"输出目录已有数据：{output_dir}。确认覆盖时请添加 --overwrite。")
    if overwrite and (output_dir / "clips").exists():
        resolved = (output_dir / "clips").resolve()
        if output_dir.resolve() not in resolved.parents:
            raise RuntimeError(f"拒绝清理输出目录之外的路径：{resolved}")
        shutil.rmtree(resolved)
    output_dir.mkdir(parents=True, exist_ok=True)


def prepare_dataset(args: argparse.Namespace) -> dict:
    input_path = project_path(args.input)
    if not input_path.is_file():
        raise FileNotFoundError(f"输入视频不存在：{input_path}")

    output_dir = project_path(args.output_dir or f"data/processed/{input_path.stem}")
    ensure_clean_output(output_dir, args.overwrite)
    work_audio = output_dir / ".work" / "source_mono.wav"
    ffmpeg_path = find_executable("ffmpeg")
    activate_executable(ffmpeg_path)
    extract_normalized_audio(
        input_path,
        work_audio,
        ffmpeg_path,
        args.sample_rate,
        args.start_seconds,
        args.duration_seconds,
    )

    model_path = project_path(
        args.model
        or (DEFAULT_WHISPER_MODEL if args.engine == "whisper" else DEFAULT_VOSK_MODEL)
    )
    if not model_path.exists():
        raise FileNotFoundError(f"识别模型不存在：{model_path}")

    if args.engine == "whisper":
        raw_segments, selected_device = transcribe_whisper(
            work_audio, model_path, args.device, args.language, args.verbose
        )
    else:
        raw_segments, selected_device = transcribe_vosk(work_audio, model_path)

    import opencc

    converter = opencc.OpenCC("t2s")
    normalized_segments = [
        SpeechSegment(segment.start, segment.end, normalize_text(segment.text, converter))
        for segment in raw_segments
    ]
    merged_segments = merge_short_segments(
        normalized_segments, args.min_duration, args.max_duration, args.max_gap
    )
    records = write_dataset(
        work_audio,
        output_dir,
        merged_segments,
        args.prefix or args.speaker,
        converter,
        args.padding,
        args.start_seconds,
    )
    for record in records:
        record["too_short"] = record["duration"] < args.min_duration
        record["overlong"] = record["duration"] > args.max_duration

    (output_dir / "filelist.txt").write_text(
        "\n".join(f"{record['path']}|{record['text']}" for record in records),
        encoding="utf-8",
    )
    (output_dir / "timeline.txt").write_text(
        "\n".join(
            f"[{record['start']:9.3f} - {record['end']:9.3f}] {record['text']}"
            for record in records
        ),
        encoding="utf-8",
    )
    manifest = {
        "created_at": datetime.now().astimezone().isoformat(timespec="seconds"),
        "input": str(input_path),
        "engine": args.engine,
        "model": str(model_path),
        "device": selected_device,
        "speaker": args.speaker,
        "language": args.language if args.engine == "whisper" else "model-defined",
        "sample_rate": args.sample_rate,
        "source_start_seconds": args.start_seconds,
        "source_duration_seconds": args.duration_seconds,
        "parameters": {
            "min_duration": args.min_duration,
            "max_duration": args.max_duration,
            "max_gap": args.max_gap,
            "padding": args.padding,
        },
        "raw_segments": [asdict(segment) for segment in normalized_segments],
        "clips": records,
    }
    (output_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    if not args.keep_work_audio:
        shutil.rmtree(work_audio.parent)
    print(f"处理完成：{len(records)} 个片段")
    print(f"输出目录：{output_dir}")
    return manifest


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="从视频提取语音、识别中文、切分训练音频并生成 filelist"
    )
    parser.add_argument("input", help="输入视频路径；相对路径从项目根目录解析")
    parser.add_argument("--output-dir", help="默认 data/processed/<视频名>")
    parser.add_argument("--speaker", default="speaker", help="说话人稳定标识")
    parser.add_argument("--prefix", help="输出 WAV 前缀，默认与 speaker 相同")
    parser.add_argument("--engine", choices=("whisper", "vosk"), default="whisper")
    parser.add_argument("--model", help="本地 Whisper 权重或 Vosk 模型目录")
    parser.add_argument("--device", choices=("auto", "cpu", "cuda"), default="auto")
    parser.add_argument("--language", default="zh", help="Whisper 语言代码；留空可自动检测")
    parser.add_argument("--sample-rate", type=int, default=16000)
    parser.add_argument("--min-duration", type=float, default=1.0, help="过短相邻片段合并阈值")
    parser.add_argument("--max-duration", type=float, default=15.0, help="训练片段建议上限；超长片段保留并标记")
    parser.add_argument("--max-gap", type=float, default=0.35, help="允许合并的最大停顿秒数")
    parser.add_argument("--padding", type=float, default=0.12, help="片段首尾保留秒数")
    parser.add_argument("--start-seconds", type=float, default=0.0, help="从视频指定时间开始")
    parser.add_argument("--duration-seconds", type=float, help="仅处理指定时长，适合测试")
    parser.add_argument("--overwrite", action="store_true", help="覆盖同一输出目录的现有结果")
    parser.add_argument("--keep-work-audio", action="store_true", help="保留标准化后的完整 WAV")
    parser.add_argument("--verbose", action="store_true", help="显示 Whisper 逐段识别过程")
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    if args.start_seconds < 0:
        parser.error("--start-seconds 不能小于 0")
    if args.duration_seconds is not None and args.duration_seconds <= 0:
        parser.error("--duration-seconds 必须大于 0")
    if not 0 <= args.padding <= 2:
        parser.error("--padding 必须在 0 到 2 秒之间")
    if args.min_duration <= 0 or args.max_duration < args.min_duration:
        parser.error("时长参数无效：max-duration 必须不小于 min-duration")
    if args.language == "":
        args.language = None
    prepare_dataset(args)


if __name__ == "__main__":
    main()
