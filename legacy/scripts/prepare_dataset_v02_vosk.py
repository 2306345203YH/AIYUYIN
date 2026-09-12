from moviepy.editor import VideoFileClip
from pydub import AudioSegment
import os
import json
from vosk import Model, KaldiRecognizer
import wave
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]

def extract_audio_from_video(video_path, audio_path):
    """
    从视频中提取音频并保存为 WAV 文件，确保音频格式为单声道、16000 Hz、16-bit PCM。

    :param video_path: 视频文件路径
    :param audio_path: 输出音频文件路径
    """
    video = VideoFileClip(video_path)
    audio = video.audio
    audio_segment = AudioSegment.from_mono_audio_segment(audio)
    
    # 转换为单声道，采样率 16000 Hz，16-bit PCM
    audio_segment = audio_segment.set_channels(1).set_frame_rate(16000).set_sample_width(2)
    audio_segment.export(audio_path, format="wav")

def speech_segmentation(audio_path, model_path, segment_folder):
    """
    使用 vosk 进行语音分割，并保存每句话的音频文件。

    :param audio_path: 输入音频文件路径
    :param model_path: vosk 模型路径
    :param segment_folder: 输出音频片段文件夹
    """
    # 加载模型
    model = Model(model_path)
    rec = KaldiRecognizer(model, 16000)  # 音频采样率为 16000 Hz

    # 读取音频文件
    wf = wave.open(audio_path, "rb")
    if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE":
        print("音频文件格式不支持！")
        exit(1)

    # 创建输出文件夹
    if not os.path.exists(segment_folder):
        os.makedirs(segment_folder)

    segment_index = 0
    current_segment = []
    segment_start = None
    segment_end = None

    # 逐帧处理音频数据
    while True:
        data = wf.readframes(4000)
        if len(data) == 0:
            break
        if rec.AcceptWaveform(data):
            result = json.loads(rec.Result())
            if 'result' in result and len(result['result']) > 0:
                words = result['result']
                # 获取当前段落的开始和结束时间
                if not segment_start:
                    segment_start = words[0]['start']
                segment_end = words[-1]['end']
                current_segment.extend(words)
            else:
                # 如果没有语音，保存当前段落
                if current_segment:
                    # 保存音频片段
                    save_segment(audio_path, segment_start, segment_end, segment_folder, segment_index)
                    segment_index += 1
                    current_segment = []
                    segment_start = None
                    segment_end = None
        else:
            partial_result = json.loads(rec.PartialResult())
            if partial_result:
                # 如果有语音，但未完成
                pass

    # 保存最后一段
    if current_segment:
        save_segment(audio_path, segment_start, segment_end, segment_folder, segment_index)

def save_segment(audio_path, start_time, end_time, output_folder, index, sample_rate=22050):
    """
    从音频文件中提取指定时间范围的音频并保存为 WAV 文件。

    :param audio_path: 输入音频文件路径
    :param start_time: 开始时间（秒）
    :param end_time: 结束时间（秒）
    :param output_folder: 输出文件夹
    :param index: 序号
    """
    # 加载音频
    audio = AudioSegment.from_wav(audio_path)
    # 转换为指定采样率
    audio = audio.set_frame_rate(sample_rate)
    # 切割音频
    start_ms = start_time * 1000
    end_ms = end_time * 1000
    segment = audio[start_ms:end_ms]
    # 保存音频片段
    output_path = os.path.join(output_folder, f"segment_{index}.wav")
    segment.export(output_path, format="wav")
    print(f"保存音频片段：{output_path}")

# 示例用法
video_path = PROJECT_ROOT / "data/raw/videos/changli.mp4"
audio_path = PROJECT_ROOT / "outputs/generated/changli_source.wav"
model_path = PROJECT_ROOT / "models/asr/vosk_zh_small"
segment_folder = PROJECT_ROOT / "data/voices/changli/vosk_segments_v02"

# 提取音频
extract_audio_from_video(video_path, audio_path)

# 语音分割
speech_segmentation(audio_path, model_path, segment_folder)
