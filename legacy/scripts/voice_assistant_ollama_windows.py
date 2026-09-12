import pyaudio
import keyboard
import pyttsx3
import threading
from vosk import Model, KaldiRecognizer
from ollama import Client
from queue import Queue

class VoiceAssistant:
    def __init__(self):
        # 初始化语音模型
        self.model = Model("models/asr/vosk_zh_large")
        self.rec = KaldiRecognizer(self.model, 16000)
        
        # 初始化Ollama客户端
        self.client = Client()
        self.dialog_history = []
        
        # 初始化TTS引擎
        self.engine = pyttsx3.init()
        self.engine.setProperty('rate', 150)
        self.engine.setProperty('volume', 1)
        
        # 音频流配置
        self.mic = pyaudio.PyAudio()
        self.stream = None
        self.is_recording = False
        self.audio_queue = Queue()
        
        # 线程控制
        self.processing = False

    def start(self):
        """启动语音助手"""
        print("按住空格键开始说话...")
        keyboard.on_press_key('space', self._start_recording)
        keyboard.on_release_key('space', self._stop_recording)
        keyboard.wait()

    def _start_recording(self, _):
        """开始录音"""
        if self.processing: return
        
        self.is_recording = True
        self.stream = self.mic.open(
            format=pyaudio.paInt16,
            channels=1,
            rate=16000,
            input=True,
            frames_per_buffer=8000,
            stream_callback=self._audio_callback
        )
        self.stream.start_stream()
        print("\n录音中...")

    def _stop_recording(self, _):
        """停止录音并处理音频"""
        if not self.is_recording or self.processing: return
        
        self.is_recording = False
        self.stream.stop_stream()
        self.stream.close()
        self.processing = True
        
        # 处理音频数据
        audio_data = b''.join(list(self.audio_queue.queue))
        self.audio_queue.queue.clear()
        
        if len(audio_data) > 0:
            text = self._speech_to_text(audio_data)
            if text:
                threading.Thread(target=self._process_query, args=(text,)).start()
            else:
                self.processing = False
        else:
            self.processing = False

    def _audio_callback(self, in_data, frame_count, time_info, status):
        """音频输入回调函数"""
        if self.is_recording:
            self.audio_queue.put(in_data)
        return (in_data, pyaudio.paContinue)

    def _speech_to_text(self, audio_data):
        """语音转文字"""
        if self.rec.AcceptWaveform(audio_data):
            result = self.rec.Result()
            return eval(result)['text']
        return None

    def _process_query(self, query):
        """处理用户查询"""
        print(f"\n用户：{query}")
        self.dialog_history.append(f"<|User|>{query}")
        
        # 生成回复
        response = self._generate_response()
        print(f"助理：{response}")
        
        # 语音输出
        self._text_to_speech(response)
        self.processing = False

    def _generate_response(self):
        """生成AI回复"""
        prompt = "\n".join(self.dialog_history[-5:]) + "<|Assistant|> [直接回答，无需思考过程]"
        
        try:
            response = self.client.generate(
                model="deepseek-r1:7b",
                prompt=prompt,
                stream=True,
                options={
                    "num_predict": 400,
                    "temperature": 0.7,
                    "top_p": 0.9
                }
            )
            
            full_response = ""
            for chunk in response:
                text = chunk['response'].strip()
                if text not in ['<think>', '</think>']:
                    full_response += text
            
            self.dialog_history.append(f"<|Assistant|>{full_response}")
            return full_response
            
        except Exception as e:
            return "抱歉，生成回答时出现问题"

    def _text_to_speech(self, text):
        """文字转语音"""
        self.engine.say(text)
        self.engine.runAndWait()

if __name__ == "__main__":
    assistant = VoiceAssistant()
    assistant.start()
