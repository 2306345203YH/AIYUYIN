import pyaudio
import keyboard
import pyttsx3
import threading
from vosk import Model, KaldiRecognizer
from ollama import Client
from queue import Queue
import time
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
        while self.is_recording:
            if time.time() - self.record_start_time > self.max_record_time:
                self._toggle_recording(None)
                print("\n录音超时自动结束")
                break
            time.sleep(0.1)

    def _toggle_recording(self, _):
        """切换录音状态"""
        if self.processing:
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
            # 启动超时检查线程
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
                    self.processing = False
            else:
                self.processing = False

    def _audio_callback(self, in_data, frame_count, time_info, status):
        """音频输入回调函数"""
        # if self.is_recording:
        #     self.audio_queue.put(in_data)
        # return (in_data, pyaudio.paContinue)
        if self.is_recording:
            self.audio_queue.put(in_data)
            # 实时转写预览
            if self.rec.AcceptWaveform(in_data):
                result = eval(self.rec.Result())
                print(f"\r实时转写: {result['text']}", end="")
        # self.audio_queue.queue.clear()

        return (in_data, pyaudio.paContinue)

    def _speech_to_text(self, audio_data):
        """语音转文字"""
        if self.rec.AcceptWaveform(audio_data):
            result = self.rec.Result()
            return eval(result)['text']
        return None

    def _process_query(self, query):
        """处理用户查询"""
        # print(f"\n用户：{query}")
        # self.dialog_history.append(f"<|User|>{query}")
        
        # # 生成回复
        # response = self._generate_response()
        # print(f"助理：{response}")
        
        # # 语音输出
        # self._text_to_speech(response)
        # self.processing = False
        try:
            print(f"\n用户：{query}")
            self.dialog_history.append(f"<|User|>{query}")
            print('----------')
            # 生成回复
            response = self._generate_response()
            print(f"助理：{response}")
            
            # 语音输出
            self._text_to_speech(response)
        except Exception as e:
            print(f"处理异常: {str(e)}")
        finally:
            self.processing = False  # 确保始终重置状态

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
            log = 0
            full_response = ""
            in_think_block = False  # 新增状态标记
            for chunk in response:
                text = str(chunk['response'])
                # if text in ['<think>', '</think>']:
                #     log += 1
                # if log == 2:
                #     full_response += text
                if text == '<think>':
                    in_think_block = True
                    continue
                elif text == '</think>':
                    in_think_block = False
                    continue
                if not in_think_block:  # 只收集非思考内容
                    full_response += text
            
            self.dialog_history.append(f"<|Assistant|>{full_response.strip()}")
            return full_response.strip()
            
        except Exception as e:
            print(f"生成错误: {str(e)}")
            return "抱歉，生成回答时出现问题"

    def _text_to_speech(self, text):
        """文字转语音"""
        self.engine.say(text)
        self.engine.runAndWait()

if __name__ == "__main__":
    assistant = VoiceAssistant()
    assistant.start()    
