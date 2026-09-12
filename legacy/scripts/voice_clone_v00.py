import os
import torch
import numpy as np
import librosa
from text.LangSegmenter import LangSegmenter
from transformers import AutoTokenizer, AutoModelForMaskedLM
from GPT_SoVITS.module.models import SynthesizerTrn
from AR.models.t2s_lightning_module import Text2SemanticLightningModule
from text import cleaned_text_to_sequence
from text.cleaner import clean_text
from feature_extractor import cnhubert
import soundfile
from playsound import playsound  # 添加播放音频的库

# 全局变量
device = "cuda" if torch.cuda.is_available() else "cpu"
is_half = torch.cuda.is_available()  # 根据GPU可用性决定是否用半精度

def load_models(gpt_path, sovits_path, bert_path, cnhubert_path):
    """加载所有必要的模型"""
    global t2s_model, vq_model, bert_model, ssl_model
    
    # 加载GPT模型
    dict_s1 = torch.load(gpt_path, map_location="cpu")
    config = dict_s1["config"]
    t2s_model = Text2SemanticLightningModule(config, "****", is_train=False)
    t2s_model.load_state_dict(dict_s1["weight"])
    if is_half:
        t2s_model = t2s_model.half()
    t2s_model = t2s_model.to(device).eval()

    # 加载SoVITS模型
    dict_s2 = torch.load(sovits_path, map_location="cpu")
    hps = dict_s2["config"]
    vq_model = SynthesizerTrn(
        hps["data"]["filter_length"] // 2 + 1,
        hps["train"]["segment_size"] // hps["data"]["hop_length"],
        n_speakers=hps["data"]["n_speakers"],
        **hps["model"]
    )
    if is_half:
        vq_model = vq_model.half()
    vq_model = vq_model.to(device).eval()
    vq_model.load_state_dict(dict_s2["weight"], strict=False)

    # 加载BERT模型
    global tokenizer
    tokenizer = AutoTokenizer.from_pretrained(bert_path)
    bert_model = AutoModelForMaskedLM.from_pretrained(bert_path)
    if is_half:
        bert_model = bert_model.half()
    bert_model = bert_model.to(device)

    # 加载CN-HuBERT模型
    cnhubert.cnhubert_base_path = cnhubert_path
    ssl_model = cnhubert.get_model()
    if is_half:
        ssl_model = ssl_model.half()
    ssl_model = ssl_model.to(device)

def get_bert_feature(text, word2ph):
    """获取BERT特征"""
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
    """清洗文本并转换为音素序列"""
    phones, word2ph, norm_text = clean_text(text, language, "v2")
    phones = cleaned_text_to_sequence(phones, "v2")
    return phones, word2ph, norm_text

def get_phones_and_bert(text, language):
    """获取音素和BERT特征"""
    phones, word2ph, norm_text = clean_text_inf(text, language)
    bert = get_bert_feature(norm_text, word2ph).to(device)
    return phones, bert, norm_text

def text_to_speech(ref_wav_path, prompt_text, text, prompt_language="zh", text_language="zh"):
    """文本转语音主函数"""
    # 加载参考音频
    wav16k, sr = librosa.load(ref_wav_path, sr=16000)
    wav16k = torch.from_numpy(wav16k)
    if is_half:
        wav16k = wav16k.half()
    wav16k = wav16k.to(device)

    # 获取参考音频特征
    with torch.no_grad():
        ssl_content = ssl_model.model(wav16k.unsqueeze(0))["last_hidden_state"].transpose(1, 2)
        codes = vq_model.extract_latent(ssl_content)
        prompt_semantic = codes[0, 0].unsqueeze(0).to(device)

    # 处理输入文本
    phones, bert, norm_text = get_phones_and_bert(text, text_language)
    bert = bert.unsqueeze(0).to(device)
    all_phoneme_ids = torch.LongTensor(phones).to(device).unsqueeze(0)
    all_phoneme_len = torch.tensor([all_phoneme_ids.shape[-1]]).to(device)

    # 生成语义特征
    with torch.no_grad():
        pred_semantic, _ = t2s_model.model.infer_panel(
            all_phoneme_ids,
            all_phoneme_len,
            prompt_semantic,
            bert,
            top_k=15,
            top_p=1.0,
            temperature=1.0
        )

    # 生成音频
    audio = vq_model.decode(
        pred_semantic.unsqueeze(0),
        torch.LongTensor(phones).to(device).unsqueeze(0),
        [torch.FloatTensor(librosa.load(ref_wav_path, sr=16000)[0]).to(device)]
    )[0][0]

    # 归一化音频
    max_audio = torch.abs(audio).max()
    if max_audio > 1:
        audio /= max_audio
    
    return audio.cpu().numpy(), 16000

def play_audio(audio_path):
    """播放音频文件"""
    try:
        playsound(audio_path)
        print("音频播放完成")
    except Exception as e:
        print(f"播放音频时出错: {e}")

if __name__ == "__main__":
    # 配置参数
    gpt_path = "models_mx/changli/changli.ckpt"  # GPT模型路径
    sovits_path = "models_mx/changli/changli.pth"   # SoVITS模型路径
    bert_path = "pretrained_models/chinese-roberta-wwm-ext-large"  # BERT模型路径
    cnhubert_path = "pretrained_models/chinese-hubert-base"       # CN-HuBERT模型路径
    
    ref_wav_path = "output4/changli_001.wav"    # 参考音频路径
    prompt_text = "难得你有闲下来我这里,我正巧处理完事务,若是不急著走,便来与我手谈一局吧。"             # 参考文本
    text = "大家好，今天天气很好。"              # 需要转换的文本
    output_path = "output.wav"                   # 输出音频路径

    # 加载模型
    print("正在加载模型...")
    load_models(gpt_path, sovits_path, bert_path, cnhubert_path)
    print("模型加载完成")

    # 执行文本转语音
    print("正在生成音频...")
    audio, sr = text_to_speech(ref_wav_path, prompt_text, text)
    
    # 保存音频
    soundfile.write(output_path, audio * 32767, sr, subtype='PCM_16')
    print(f"音频已保存到: {output_path}")

    # 播放音频
    print("开始播放音频...")
    play_audio(output_path)