"""Push-to-talk Vosk + Ollama voice assistant for Windows."""

from __future__ import annotations

import argparse
import json
import sys
import threading
import time
from pathlib import Path
from queue import Queue

import keyboard
import pyaudio
import pyttsx3
import requests

PROJECT_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT_ROOT / "src"))

from vosk import KaldiRecognizer, Model  # noqa: E402


class VoiceAssistant:
    def __init__(self, model_path: Path, api_url: str, max_record_time: int = 10):
        if not model_path.exists():
            raise FileNotFoundError(f"Vosk 模型不存在：{model_path}")
        self.model = Model(str(model_path))
        self.recognizer = KaldiRecognizer(self.model, 16000)
        self.api_url = api_url
        self.engine_properties = {"rate": 150, "volume": 1}
        self.microphone = pyaudio.PyAudio()
        self.stream = None
        self.is_recording = False
        self.audio_queue = Queue()
        self.dialog_history = []
        self.processing = False
        self.max_record_time = max_record_time
        self.record_start_time = 0.0

    def _has_input_device(self) -> bool:
        return any(
            self.microphone.get_device_info_by_index(index).get("maxInputChannels", 0) > 0
            for index in range(self.microphone.get_device_count())
        )

    @staticmethod
    def _play_beep(frequency: int):
        import winsound

        winsound.Beep(frequency, 200)

    def start(self):
        if not self._has_input_device():
            raise RuntimeError("未检测到麦克风输入设备，请连接麦克风并开启 Windows 麦克风权限。")
        print("按空格键开始/结束录音，按 Ctrl+C 退出。")
        keyboard.on_press_key("space", self._toggle_recording)
        keyboard.wait()

    def _check_timeout(self):
        while self.is_recording:
            if time.time() - self.record_start_time > self.max_record_time:
                self._toggle_recording(None)
                print("\n录音超时自动结束")
                break
            time.sleep(0.1)

    def _toggle_recording(self, _):
        if self.processing:
            print("系统正在处理中，请稍后……")
            return
        if not self.is_recording:
            self._play_beep(1000)
            self.is_recording = True
            self.stream = self.microphone.open(
                format=pyaudio.paInt16,
                channels=1,
                rate=16000,
                input=True,
                frames_per_buffer=8000,
                stream_callback=self._audio_callback,
            )
            self.stream.start_stream()
            self.record_start_time = time.time()
            print("\n录音中……")
            threading.Thread(target=self._check_timeout, daemon=True).start()
            return

        self._play_beep(800)
        self.is_recording = False
        self.stream.stop_stream()
        self.stream.close()
        self.processing = True
        audio_data = b"".join(list(self.audio_queue.queue))
        self.audio_queue.queue.clear()
        text = self._speech_to_text(audio_data) if audio_data else ""
        if text:
            print(f"\n转换的文本：{text}")
            threading.Thread(target=self._process_query, args=(text,), daemon=True).start()
        else:
            print("未检测到有效语音")
            self.processing = False

    def _audio_callback(self, in_data, frame_count, time_info, status):
        if self.is_recording:
            self.audio_queue.put(in_data)
            if self.recognizer.AcceptWaveform(in_data):
                result = json.loads(self.recognizer.Result())
                print(f"\r实时转写：{result.get('text', '')}", end="")
        return in_data, pyaudio.paContinue

    def _speech_to_text(self, audio_data: bytes) -> str:
        self.recognizer.AcceptWaveform(audio_data)
        return json.loads(self.recognizer.FinalResult()).get("text", "")

    def _process_query(self, query: str):
        try:
            print(f"\n用户：{query}")
            self.dialog_history.append(f"<|User|>{query}")
            response = self._generate_response(query)
            print(f"助理：{response}")
            self._text_to_speech(response)
        except Exception as exc:
            print(f"处理异常：{exc}")
        finally:
            self.processing = False

    def _generate_response(self, query: str) -> str:
        prompt = "\n".join(self.dialog_history[-5:]) + "<|Assistant|> [直接回答，无需思考过程]"
        try:
            response = requests.post(
                self.api_url,
                json={"prompt": prompt, "max_tokens": 400},
                timeout=60,
            )
            response.raise_for_status()
            result = response.json()
            if result.get("status") != "success":
                return result.get("message", "服务返回错误")
            answer = result["response"]
            self.dialog_history.append(f"<|Assistant|>{answer}")
            return answer
        except requests.RequestException as exc:
            print(f"API 请求失败：{exc}")
            return "连接服务器失败，请确认 Ollama 和语言服务已经启动。"

    def _text_to_speech(self, text: str):
        engine = pyttsx3.init()
        try:
            engine.setProperty("rate", self.engine_properties["rate"])
            engine.setProperty("volume", self.engine_properties["volume"])
            engine.say(text)
            engine.runAndWait()
        finally:
            engine.stop()


def main():
    parser = argparse.ArgumentParser(description="本地按键录音语音助手")
    parser.add_argument(
        "--model",
        type=Path,
        default=PROJECT_ROOT / "models" / "asr" / "vosk_zh_large",
    )
    parser.add_argument("--api-url", default="http://127.0.0.1:5000/generate")
    parser.add_argument("--max-record-time", type=int, default=10)
    args = parser.parse_args()
    VoiceAssistant(args.model, args.api_url, args.max_record_time).start()


if __name__ == "__main__":
    main()
