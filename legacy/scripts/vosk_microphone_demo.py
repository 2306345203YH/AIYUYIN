import pyaudio
from vosk import Model, KaldiRecognizer

# 加载模型
model_path = "models/asr/vosk_zh_large"
model = Model(model_path)
rec = KaldiRecognizer(model, 16000)

# 初始化音频流
mic = pyaudio.PyAudio()
stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8000)
stream.start_stream()

print("Listening...")
while True:
    data = stream.read(4000)
    if rec.AcceptWaveform(data):
        result = rec.Result()
        print(result)
    else:
        partial_result = rec.PartialResult()
        print(partial_result)
