import os
import wave
import json
import numpy as np
from moviepy.editor import VideoFileClip
from scipy.io import wavfile
import soundfile as sf
import whisper  # 使用Whisper替代Vosk

def extract_audio(video_path, output_wav="temp_audio.wav"):
    """提取视频音频并转换为22050Hz采样率的WAV文件"""
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(output_wav, fps=22050)
    return output_wav

def split_audio(audio_path, output_dir="output1", model_path="./model/medium.pt"):
    """使用Whisper进行语音分割和识别"""
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 加载本地Whisper模型
    model = whisper.load_model(model_path)  # 直接指定本地模型路径
    
    # 读取音频数据
    samplerate, data = wavfile.read(audio_path)
    if data.dtype != np.int16:
        data = data.astype(np.int16)

    # 语音分割参数
    silence_threshold = 300  # 静音阈值
    min_silence_duration = 0.8  # 最小静音持续时间（秒）
    min_segment_duration = 1.0  # 最小片段长度（秒）
    current_segment = []
    in_speech = False
    speech_start = 0
    file_index = 1
    file_list = []

    # 处理音频数据
    for i in range(0, len(data), 16000):
        chunk = data[i:i+16000]
        
        # 检测静音
        rms = np.sqrt(np.mean(np.square(chunk)))
        if rms < silence_threshold:
            if in_speech and (i - speech_start) / samplerate > min_silence_duration:
                if len(current_segment) / 22050 >= min_segment_duration:
                    output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
                    sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
                    # 使用Whisper识别该片段
                    result = model.transcribe(output_path, language="zh")  # 指定中文识别
                    text = result["text"]
                    file_list.append(f"{os.path.basename(output_path)}|{text}")
                    file_index += 1
                    current_segment = []
                in_speech = False
        else:
            if not in_speech:
                in_speech = True
                speech_start = i
        
        current_segment.extend(chunk)

    # 保存剩余片段
    if len(current_segment) / 22050 >= min_segment_duration:
        output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
        sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
        result = model.transcribe(output_path, language="zh")
        text = result["text"]
        file_list.append(f"{os.path.basename(output_path)}|{text}")

    # 保存文件列表
    with open(os.path.join(output_dir, "filelist.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(file_list))

    return file_list

if __name__ == "__main__":
    # 使用示例
    video_path = "data/raw/videos/changli2_1.mp4"  # 替换为你的视频路径
    
    # 步骤1：提取音频
    audio_path = extract_audio(video_path)
    
    # 步骤2：分割音频并生成文件列表，使用本地模型
    split_audio(audio_path, model_path="./model/medium.pt")  # 指定本地模型路径
    
    print("处理完成！分割后的音频和文件列表已保存在output目录")
