import os
from moviepy import VideoFileClip
import whisper
import opencc
from pydub import AudioSegment

def extract_audio(video_path, output_wav="temp_audio.wav"):
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(output_wav, fps=22050)
    return output_wav

def split_audio(audio_path, 
                output_dir="output4", 
                model_path="./model/medium.pt", 
                audio_prefix="changli", 
                path_prefix="data/changli/"):
    
    # 确保路径前缀以斜杠结尾
    path_prefix = path_prefix.rstrip("/") + "/"
    os.makedirs(output_dir, exist_ok=True)
    model = whisper.load_model(model_path)
    converter = opencc.OpenCC('t2s')

    # 完整音频识别
    result = model.transcribe(audio_path, language="zh", verbose=True)
    segments = result["segments"]

    # 加载音频用于裁剪
    audio = AudioSegment.from_wav(audio_path)
    file_list = []
    file_index = 1

    print("开始处理音频分割和识别...")

    for segment in segments:
        start = segment["start"] * 1000  # 转换为毫秒
        end = segment["end"] * 1000
        text = segment["text"]
        simplified_text = converter.convert(text)
        
        # 检查片段长度是否满足要求
        duration = (end - start) / 1000  # 转换为秒
        if duration >= 1.0:  # 最小长度1秒
            output_filename = f"{audio_prefix}_{file_index:03d}.wav"
            output_path = os.path.join(output_dir, output_filename)
            segment_audio = audio[start:end]
            segment_audio.export(output_path, format="wav")
            print(f"片段 {file_index:03d} ({os.path.basename(output_path)}): {simplified_text}")
            formatted_path = f"{path_prefix}{output_filename}"
            file_list.append(f"{formatted_path}|{simplified_text}")
            file_index += 1

    with open(os.path.join(output_dir, "filelist.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(file_list))

    return file_list

if __name__ == "__main__":
    # ====================== 自定义参数区域 ======================
    video_path = "data/raw/videos/aiyafala.mp4"    # 源视频路径
    model_path = "./model/medium.pt"         # Whisper模型路径
    output_dir = "output6"                   # 输出目录路径
    audio_prefix = "aiyafala"                 # 音频文件名前缀
    path_prefix = "data/aiyafala/"            # filelist中的路径前缀
    # ==========================================================

    audio_path = extract_audio(video_path)
    split_audio(
        audio_path,
        output_dir=output_dir,
        model_path=model_path,
        audio_prefix=audio_prefix,
        path_prefix=path_prefix
    )
    print(f"处理完成！分割后的音频和文件列表已保存在 {output_dir}")
