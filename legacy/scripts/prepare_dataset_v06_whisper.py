import os
import numpy as np
from moviepy.editor import VideoFileClip
from scipy.io import wavfile
import soundfile as sf
import whisper

def extract_audio(video_path, output_wav="temp_audio.wav"):
    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(output_wav, fps=22050)
    return output_wav

def split_audio(audio_path, output_dir="output1", model_path="./model/medium.pt"):
    os.makedirs(output_dir, exist_ok=True)
    model = whisper.load_model(model_path)
    samplerate, data = wavfile.read(audio_path)
    if data.dtype != np.int16:
        data = data.astype(np.int16)

    silence_threshold = 300
    min_silence_duration = 0.8
    min_segment_duration = 1.0
    current_segment = []
    in_speech = False
    speech_start = 0
    file_index = 1
    file_list = []

    for i in range(0, len(data), 16000):
        chunk = data[i:i+16000]
        rms = np.sqrt(np.mean(np.square(chunk)))
        if rms < silence_threshold:
            if in_speech and (i - speech_start) / samplerate > min_silence_duration:
                if len(current_segment) / 22050 >= min_segment_duration:
                    output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
                    sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
                    result = model.transcribe(output_path, language="zh")
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

    if len(current_segment) / 22050 >= min_segment_duration:
        output_path = os.path.join(output_dir, f"changli_{file_index:03d}.wav")
        sf.write(output_path, np.array(current_segment), 22050, subtype='PCM_16')
        result = model.transcribe(output_path, language="zh")
        text = result["text"]
        file_list.append(f"{os.path.basename(output_path)}|{text}")

    with open(os.path.join(output_dir, "filelist.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(file_list))

    return file_list

if __name__ == "__main__":
    video_path = "data/raw/videos/changli2_1.mp4"
    audio_path = extract_audio(video_path)
    split_audio(audio_path, model_path="./model/medium.pt")
    print("处理完成！分割后的音频和文件列表已保存在output目录")
