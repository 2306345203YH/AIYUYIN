from fastapi import FastAPI
from ollama import Client
import soundfile as sf
import vosk, TTS

app = FastAPI()
client = Client()

# 初始化模型
asr_model = vosk.Model("vosk-model")
tts_engine = TTS.init("model/mb_istft_vits")

@app.post("/stt")
async def speech_to_txt(audio: bytes):
    # 将ESP32的音频转为文本
    wav_data = convert_esp32_audio(audio)
    text = asr_model.transcribe(wav_data)
    return {"text": text}

@app.post("/generate")
async def generate_response(prompt: str):
    # 使用Ollama生成回复
    response = client.generate(
        model="deepseek-r1",
        prompt=f"User: {prompt}\nAssistant:",
        max_tokens=200
    )
    return {"response": response}

@app.post("/tts")
async def text_to_speech(text: str):
    # 生成语音并返回音频数据
    audio = tts_engine.synthesize(text)
    return {"audio": audio}