import os
import torch
import numpy as np
import librosa
from text.LangSegmenter import LangSegmenter
from transformers import AutoTokenizer, AutoModelForMaskedLM
from module.models import SynthesizerTrn
from AR.models.t2s_lightning_module import Text2SemanticLightningModule
from text import cleaned_text_to_sequence
from text.cleaner import clean_text
from feature_extractor import cnhubert
import soundfile
import pygame
from module.mel_processing import spectrogram_torch
import yaml
from typing import Union
from scipy.signal import butter, lfilter

# 全局变量
device = "cuda" if torch.cuda.is_available() else "cpu"
is_half = False
hps = None
t2s_model = None
vq_model = None
bert_model = None
ssl_model = None
tokenizer = None

class TTS_Config:
    default_configs = {
        "default": {
            "device": "cpu",
            "is_half": False,
            "version": "v1",
            "t2s_weights_path": "pretrained_models/s1bert25hz-2kh-longer-epoch=68e-step=50232.ckpt",
            "vits_weights_path": "pretrained_models/s2G488k.pth",
            "cnhuhbert_base_path": "pretrained_models/chinese-hubert-base",
            "bert_base_path": "pretrained_models/chinese-roberta-wwm-ext-large",
        },
        "default_v2": {
            "device": "cpu",
            "is_half": False,
            "version": "v2",
            "t2s_weights_path": "pretrained_models/gsv-v2final-pretrained/s1bert25hz-5kh-longer-epoch=12-step=369668.ckpt",
            "vits_weights_path": "pretrained_models/gsv-v2final-pretrained/s2G2333k.pth",
            "cnhuhbert_base_path": "pretrained_models/chinese-hubert-base",
            "bert_base_path": "pretrained_models/chinese-roberta-wwm-ext-large",
        },
    }

    def __init__(self, configs: Union[dict, str] = None):
        configs_base_path = "configs/"
        os.makedirs(configs_base_path, exist_ok=True)
        self.configs_path = os.path.join(configs_base_path, "tts_infer.yaml")

        if configs in ["", None]:
            if not os.path.exists(self.configs_path):
                self.save_configs()
                print(f"Create default config file at {self.configs_path}")
            configs = self.default_configs

        if isinstance(configs, str):
            self.configs_path = configs
            with open(self.configs_path, 'r') as f:
                configs = yaml.load(f, Loader=yaml.FullLoader)

        assert isinstance(configs, dict)
        version = configs.get("version", "v2").lower()
        assert version in ["v1", "v2"]
        default_config_key = "default" if version == "v1" else "default_v2"
        self.configs = configs.get("custom", self.default_configs[default_config_key])

        self.device = self.configs.get("device", device)
        self.is_half = self.configs.get("is_half", is_half)
        self.t2s_weights_path = self.configs.get("t2s_weights_path")
        self.vits_weights_path = self.configs.get("vits_weights_path")
        self.bert_base_path = self.configs.get("bert_base_path")
        self.cnhuhbert_base_path = self.configs.get("cnhuhbert_base_path")

    def save_configs(self):
        configs = self.default_configs
        if self.configs is not None:
            configs["custom"] = {
                "device": str(self.device),
                "is_half": self.is_half,
                "version": "v2",
                "t2s_weights_path": self.t2s_weights_path,
                "vits_weights_path": self.vits_weights_path,
                "bert_base_path": self.bert_base_path,
                "cnhuhbert_base_path": self.cnhuhbert_base_path,
            }
        with open(self.configs_path, 'w') as f:
            yaml.dump(configs, f)

def load_models(gpt_path, sovits_path, bert_path, cnhubert_path):
    global t2s_model, vq_model, bert_model, ssl_model, hps, tokenizer
    
    config = TTS_Config()
    config.t2s_weights_path = gpt_path
    config.vits_weights_path = sovits_path
    config.bert_base_path = bert_path
    config.cnhuhbert_base_path = cnhubert_path
    config.device = device
    config.is_half = is_half

    dict_s1 = torch.load(config.t2s_weights_path, map_location="cpu")
    t2s_config = dict_s1["config"]
    t2s_model = Text2SemanticLightningModule(t2s_config, "****", is_train=False)
    t2s_model.load_state_dict(dict_s1["weight"])
    if config.is_half:
        t2s_model = t2s_model.half()
    t2s_model = t2s_model.to(config.device).eval()

    dict_s2 = torch.load(config.vits_weights_path, map_location="cpu")
    hps = dict_s2["config"]
    vq_model = SynthesizerTrn(
        hps["data"]["filter_length"] // 2 + 1,
        hps["train"]["segment_size"] // hps["data"]["hop_length"],
        n_speakers=hps["data"]["n_speakers"],
        **hps["model"]
    )
    if config.is_half:
        vq_model = vq_model.half()
    vq_model = vq_model.to(config.device).eval()
    vq_model.load_state_dict(dict_s2["weight"], strict=False)

    tokenizer = AutoTokenizer.from_pretrained(config.bert_base_path)
    bert_model = AutoModelForMaskedLM.from_pretrained(config.bert_base_path)
    if config.is_half:
        bert_model = bert_model.half()
    bert_model = bert_model.to(config.device).eval()

    cnhubert.cnhubert_base_path = config.cnhuhbert_base_path
    ssl_model = cnhubert.get_model()
    if config.is_half:
        ssl_model = ssl_model.half()
    ssl_model = ssl_model.to(config.device).eval()

def get_bert_feature(text, word2ph):
    with torch.no_grad():
        inputs = tokenizer(text, return_tensors="pt")
        for i in inputs:
            inputs[i] = inputs[i].to(device)
        res = bert_model(**inputs, output_hidden_states=True)
        res = torch.cat(res["hidden_states"][-3:-2], -1)[0].cpu()[1:-1]
    phone_level_feature = []
    for i in range(len(word2ph)):
        repeat_feature = res[i].repeat(word2ph[i], 1)
        phone_level_feature.append(repeat_feature)
    return torch.cat(phone_level_feature, dim=0).T

def clean_text_inf(text, language):
    phones, word2ph, norm_text = clean_text(text, language, "v2")
    phones = cleaned_text_to_sequence(phones, "v2")
    return phones, word2ph, norm_text

def get_phones_and_bert(text, language):
    phones, word2ph, norm_text = clean_text_inf(text, language)
    bert = get_bert_feature(norm_text, word2ph).to(device)
    print(f"Norm text: {norm_text}")
    return phones, bert, norm_text

def get_spectrogram(audio, sr):
    audio_tensor = torch.from_numpy(audio).float().to(device)
    if audio_tensor.ndim == 1:
        audio_tensor = audio_tensor.unsqueeze(0)
    spec = spectrogram_torch(
        audio_tensor,
        hps["data"]["filter_length"],
        hps["data"]["sampling_rate"],
        hps["data"]["hop_length"],
        hps["data"]["win_length"],
        center=False
    )
    # 归一化频谱图幅度
    spec = spec / torch.max(torch.abs(spec)) * 0.9
    if is_half:
        spec = spec.half()
    return spec

def butter_bandpass(lowcut, highcut, fs, order=5):
    """设计带通滤波器"""
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return b, a

def bandpass_filter(data, lowcut, highcut, fs, order=5):
    """应用带通滤波器去噪"""
    b, a = butter_bandpass(lowcut, highcut, fs, order=order)
    y = lfilter(b, a, data)
    return y

def text_to_speech(ref_wav_path, prompt_text, text, prompt_language="zh", text_language="zh"):
    # 加载参考音频
    wav, sr = librosa.load(ref_wav_path, sr=hps["data"]["sampling_rate"])
    print(f"Reference audio shape: {wav.shape}, sample rate: {sr}")
    wav = torch.from_numpy(wav)
    if is_half:
        wav = wav.half()
    wav = wav.to(device)

    # 获取参考音频的语义特征（仅用于音色）
    with torch.no_grad():
        ssl_content = ssl_model.model(wav.unsqueeze(0))["last_hidden_state"].transpose(1, 2)
        codes = vq_model.extract_latent(ssl_content)
        prompt_semantic = codes[0, 0].unsqueeze(0).to(device)

    # 处理目标文本
    phones, bert, norm_text = get_phones_and_bert(text, text_language)
    bert = bert.unsqueeze(0).to(device)
    all_phoneme_ids = torch.LongTensor(phones).to(device).unsqueeze(0)
    all_phoneme_len = torch.tensor([all_phoneme_ids.shape[-1]]).to(device)

    # 生成语义特征（优化参数）
    with torch.no_grad():
        pred_semantic, _ = t2s_model.model.infer_panel(
            all_phoneme_ids,
            all_phoneme_len,
            None,
            bert,
            top_k=30,  # 进一步增加 top_k
            top_p=1.0,
            temperature=0.7  # 进一步降低 temperature
        )
    print(f"Predicted semantic shape: {pred_semantic.shape}")

    # 处理参考音频为STFT频谱图（已归一化）
    ref_audio, sr = librosa.load(ref_wav_path, sr=hps["data"]["sampling_rate"])
    if ref_audio.ndim > 1:
        ref_audio = ref_audio.mean(axis=0)
    ref_spectrogram = get_spectrogram(ref_audio, sr)
    print(f"Reference spectrogram shape: {ref_spectrogram.shape}, dtype: {ref_spectrogram.dtype}")

    # 生成音频
    with torch.no_grad():
        audio = vq_model.decode(
            pred_semantic.unsqueeze(0),
            torch.LongTensor(phones).to(device).unsqueeze(0),
            [ref_spectrogram]
        )[0][0]
    print(f"Generated audio shape: {audio.shape}")

    # 转换为 numpy 并进行后处理
    audio_np = audio.cpu().numpy()
    print(f"Audio max before processing: {audio_np.max()}, min: {audio_np.min()}")

    # 保存未处理的音频用于调试
    soundfile.write("output_raw.wav", audio_np * 32767, sr, subtype='PCM_16')

    # 应用带通滤波器（300 Hz - 8000 Hz）
    audio_np = bandpass_filter(audio_np, lowcut=500, highcut=6000, fs=hps["data"]["sampling_rate"], order=6)

    # 归一化
    audio_np = audio_np / np.max(np.abs(audio_np)) * 0.9
    
    return audio_np, hps["data"]["sampling_rate"]

def play_audio(audio_path):
    try:
        pygame.mixer.init()
        pygame.mixer.music.load(audio_path)
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            pygame.time.Clock().tick(10)
        print("音频播放完成")
    except Exception as e:
        print(f"播放音频时出错: {e}")

if __name__ == "__main__":
    # 配置参数
    gpt_path = "models_mx/aiyafala/aiyafala.ckpt"
    sovits_path = "models_mx/aiyafala/aiyafala.pth"
    bert_path = "pretrained_models/chinese-roberta-wwm-ext-large"
    cnhubert_path = "pretrained_models/chinese-hubert-base"
    
    ref_wav_path = "output6/aiyafala_021.wav"
    prompt_text = "野餐就要开始啦。"
    text = "大家好，今天天气很好。要来一起吃饭吗？"
    output_path = "output.wav"

    # 加载模型
    print("正在加载模型...")
    load_models(gpt_path, sovits_path, bert_path, cnhubert_path)
    print("模型加载完成")
    print(f"Model sampling rate: {hps['data']['sampling_rate']}")

    # 执行文本转语音
    print("正在生成音频...")
    audio, sr = text_to_speech(ref_wav_path, prompt_text, text)
    
    # 保存音频
    soundfile.write(output_path, audio * 32767, sr, subtype='PCM_16')
    print(f"音频已保存到: {output_path}")

    # 播放音频
    print("开始播放音频...")
    play_audio(output_path)