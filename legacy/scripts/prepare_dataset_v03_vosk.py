import os
import wave
import json
import numpy as np
from moviepy.editor import VideoFileClip
from vosk import Model, KaldiRecognizer
from scipy.io import wavfile
import soundfile as sf

def extract_audio(video_path, output_wav="temp_audio.wav"):
    """提取视频音频并转换为22050Hz采样率的WAV文件"""
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(output_wav, fps=22050)
    return output_wav

def split_audio(audio_path, output_dir="output"):
    """使用Vosk进行语音分割和识别"""
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 初始化Vosk模型（需先下载中文模型）
    # model = Model(lang="cn")
    model = Model("model-cn")
    recognizer = KaldiRecognizer(model, 22050)
    
    # 读取音频数据
    samplerate, data = wavfile.read(audio_path)
    if data.dtype != np.int16:
        data = data.astype(np.int16)

    # 语音分割参数
    silence_threshold = 500  # 静音阈值
    min_silence_duration = 1.0  # 最小静音持续时间（秒）
    current_segment = []
    in_speech = False
    speech_start = 0
    file_index = 1
    file_list = []

    # 处理音频数据
    for i in range(0, len(data), 16000):
        chunk = data[i:i+16000].tobytes()
        
        if recognizer.AcceptWaveform(chunk):
            result = json.loads(recognizer.Result())
            if 'text' in result and len(result['text']) > 0:
                # 保存当前片段
                output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
                sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
                
                # 记录到文件列表
                file_list.append(f"{os.path.basename(output_path)}|{result['text']}")
                
                # 重置参数
                file_index += 1
                current_segment = []
        
        # 检测静音
        rms = np.sqrt(np.mean(np.square(data[i:i+16000])))
        if rms < silence_threshold:
            if not in_speech:
                in_speech = False
                if (i - speech_start) / samplerate > min_silence_duration:
                    # 保存当前片段
                    if len(current_segment) > 0:
                        output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
                        sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
                        file_list.append(f"{os.path.basename(output_path)}|{result['text']}")
                        file_index += 1
                        current_segment = []
        else:
            if not in_speech:
                in_speech = True
                speech_start = i
        
        current_segment.extend(data[i:i+16000])

    # 保存剩余片段
    if len(current_segment) > 0:
        output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
        sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
        file_list.append(f"{os.path.basename(output_path)}|{result['text']}")

    # 保存文件列表
    with open(os.path.join(output_dir, "filelist.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(file_list))

    return file_list

if __name__ == "__main__":
    # 使用示例
    video_path = "data/raw/videos/changli.mp4"  # 替换为你的视频路径
    
    # 步骤1：提取音频
    audio_path = extract_audio(video_path)
    
    # 步骤2：分割音频并生成文件列表
    split_audio(audio_path)
    
    print("处理完成！分割后的音频和文件列表已保存在output目录")
