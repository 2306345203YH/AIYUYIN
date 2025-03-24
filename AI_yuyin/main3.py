import pyaudio
import keyboard
import pyttsx3
import threading
import requests
import time
from vosk import Model, KaldiRecognizer
from queue import Queue

class VoiceAssistant:
    def __init__(self):
        # 初始化语音模型
        self.model = Model("model-cn")
        self.rec = KaldiRecognizer(self.model, 16000)
        
        # 初始化API配置
        self.api_url = "http://localhost:5000/generate"
        
        # 初始化TTS引擎（不再在初始化时创建）
        self.engine_properties = {
            'rate': 150,
            'volume': 1
        }
        
        # 音频流配置
        self.mic = pyaudio.PyAudio()
        self.stream = None
        self.is_recording = False
        self.audio_queue = Queue()
        
        # 对话历史记录
        self.dialog_history = []
        
        # 线程控制
        self.processing = False
        self.max_record_time = 10  # 最大录音时长（秒）
        self.record_start_time = 0

    def _play_beep(self, frequency):
        import winsound
        winsound.Beep(frequency, 200)
    
    def start(self):
        """启动语音助手"""
        print("按空格键开始/结束录音...")
        keyboard.on_press_key('space', self._toggle_recording)
        keyboard.wait()

    def _check_timeout(self):
        """检查录音超时"""
        while self.is_recording:
            if time.time() - self.record_start_time > self.max_record_time:
                self._toggle_recording(None)
                print("\n录音超时自动结束")
                break
            time.sleep(0.1)

    def _toggle_recording(self, _):
        """切换录音状态"""
        if self.processing:
            print("系统正在处理中，请稍后...")
            return
        
        if not self.is_recording:
            # 开始录音
            self._play_beep(1000)
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
            self.record_start_time = time.time()
            threading.Thread(target=self._check_timeout).start()
        else:
            # 停止录音
            self._play_beep(800)
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
                    print(f"\n转换的文本：{text}")
                    threading.Thread(target=self._process_query, args=(text,)).start()
                else:
                    print("未检测到有效语音")
                    self.processing = False
            else:
                print("录音数据为空")
                self.processing = False

    def _audio_callback(self, in_data, frame_count, time_info, status):
        """音频输入回调函数"""
        if self.is_recording:
            self.audio_queue.put(in_data)
            if self.rec.AcceptWaveform(in_data):
                result = eval(self.rec.Result())
                print(f"\r实时转写: {result['text']}", end="")
        return (in_data, pyaudio.paContinue)

    def _speech_to_text(self, audio_data):
        """语音转文字"""
        if self.rec.AcceptWaveform(audio_data):
            result = self.rec.Result()
            return eval(result)['text']
        return None

    def _process_query(self, query):
        """处理用户查询"""
        try:
            print(f"\n用户：{query}")
            self.dialog_history.append(f"<|User|>{query}")
            
            # 生成回复
            response = self._generate_response(query)
            print(f"助理：{response}")
            
            # 语音输出
            self._text_to_speech(response)
        except Exception as e:
            print(f"处理异常: {str(e)}")
        finally:
            self.processing = False  # 确保状态重置

    def _generate_response(self, query):
        """调用API生成回复"""
        try:
            prompt = "\n".join(self.dialog_history[-5:]) + "<|Assistant|> [直接回答，无需思考过程]"
            
            response = requests.post(
                self.api_url,
                json={
                    "prompt": prompt,
                    "max_tokens": 400
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                ai_response = result['response']
                self.dialog_history.append(f"<|Assistant|>{ai_response}")
                return ai_response
            else:
                return "服务暂时不可用，请稍后再试"
                
        except requests.exceptions.RequestException as e:
            print(f"API请求失败: {str(e)}")
            return "连接服务器失败，请检查网络"
        except Exception as e:
            print(f"解析错误: {str(e)}")
            return "响应解析失败"

    def _text_to_speech(self, text):
        """文字转语音"""
        try:
            # 每次创建新的独立引擎实例
            engine = pyttsx3.init()
            engine.setProperty('rate', self.engine_properties['rate'])
            engine.setProperty('volume', self.engine_properties['volume'])
            engine.say(text)
            engine.runAndWait()
            engine.stop()  # 显式停止引擎
            del engine     # 释放资源
        except Exception as e:
            print(f"语音输出异常: {str(e)}")

if __name__ == "__main__":
    assistant = VoiceAssistant()
    assistant.start()