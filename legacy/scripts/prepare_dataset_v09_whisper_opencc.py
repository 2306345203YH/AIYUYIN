import os
import numpy as np
from moviepy.editor import VideoFileClip
from scipy.io import wavfile
import soundfile as sf
import whisper
import opencc
from pydub import AudioSegment
from pydub.effects import normalize

def extract_audio(video_path, output_wav="temp_audio.wav"):
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(output_wav, fps=22050)
    return output_wav

def preprocess_audio(input_path, output_path):
    """预处理音频：增益归一化"""
    audio = AudioSegment.from_wav(input_path)
    audio = normalize(audio)  # 增益归一化
    audio.export(output_path, format="wav")
    return output_path

def split_audio(audio_path, output_dir="output2", model_path="./model/medium.pt"):
    os.makedirs(output_dir, exist_ok=True)
    model = whisper.load_model(model_path)
    converter = opencc.OpenCC('t2s')

    # 预处理音频
    preprocessed_path = "preprocessed_audio.wav"
    preprocess_audio(audio_path, preprocessed_path)
    samplerate, data = wavfile.read(preprocessed_path)
    if data.dtype != np.int16:
        data = data.astype(np.int16)

    silence_threshold = 600  # 提高阈值
    min_silence_duration = 1.0
    min_segment_duration = 2.5  # 增加最小长度
    current_segment = []
    in_speech = False
    speech_start = 0
    file_index = 1
    file_list = []

    print("开始处理音频分割和识别...")

    for i in range(0, len(data), 16000):
        chunk = data[i:i+16000]
        rms = np.sqrt(np.mean(np.square(chunk)))
        if rms < silence_threshold:
            if in_speech and (i - speech_start) / samplerate > min_silence_duration:
                if len(current_segment) / 22050 >= min_segment_duration:
                    output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
                    sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
                    result = model.transcribe(output_path, language="zh", verbose=True)  # 添加verbose调试
                    text = result["text"]
                    simplified_text = converter.convert(text)
                    print(f"片段 {file_index:03d} ({os.path.basename(output_path)}): {simplified_text}")
                    file_list.append(f"{os.path.basename(output_path)}|{simplified_text}")
                    file_index += 1
                    current_segment = []
                in_speech = False
        else:
            if not in_speech:
                in_speech = True
                speech_start = i
        current_segment.extend(chunk)

    if len(current_segment) / 22050 >= min_segment_duration:
        output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
        sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
        result = model.transcribe(output_path, language="zh", verbose=True)
        text = result["text"]
        simplified_text = converter.convert(text)
        print(f"片段 {file_index:03d} ({os.path.basename(output_path)}): {simplified_text}")
        output_path = "data/changli/"+output_path
        file_list.append(f"{os.path.basename(output_path)}|{simplified_text}")

    with open(os.path.join(output_dir, "filelist.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(file_list))

    return file_list

if __name__ == "__main__":
    video_path = "data/raw/videos/changli2_1.mp4"
    audio_path = extract_audio(video_path)
    split_audio(audio_path, model_path="./model/medium.pt")
    print("处理完成！分割后的音频和文件列表已保存在output2目录")
