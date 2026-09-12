# 项目精简报告

日期：2026-08-21

## 保留的功能

- GPT-SoVITS 指定音色推理；
- `aiyafala`、`changli` 两个现成音色配置；
- Vosk 中文麦克风识别；
- Ollama/Flask 本地对话接口；
- Windows 系统语音朗读；
- SoVITS4、Coqui TTS 和数据预处理实验资产；
- 原始视频、现有语音数据和当前 GPT-SoVITS 音色模型。

## 主要迁移

| 原位置/名称 | 新位置/名称 | 说明 |
|---|---|---|
| `gpt-tts_11.py` | `app/voice_clone.py` | 当前指定音色入口 |
| `ai_service.py` | `app/llm_service.py` | 当前 Ollama HTTP 服务 |
| `main3.py` | `app/voice_assistant.py` | 当前按键录音助手 |
| `AR`、`module`、`text`、`TTS_infer_pack` | `src/gpt_sovits` | GPT-SoVITS 核心代码 |
| `models_mx` | `models/voices` | 角色音色权重 |
| `pretrained_models` | `models/gpt_sovits` | 基础模型 |
| `model-cn` | `models/asr/vosk_zh_large` | 大型中文 Vosk 模型 |
| `vosk-model-cn` | `models/asr/vosk_zh_small` | 小型中文 Vosk 模型 |
| `vosk-model-en` | `models/asr/vosk_en_small` | 小型英文 Vosk 模型 |
| `model` | `models/asr/whisper` | Whisper 模型 |
| `output4`、`output5`、`output6` | `data/voices/<voice_name>` | 当前角色语音数据 |
| `mp4flie` | `data/raw/videos` | 原始视频 |
| `vits-main` | `legacy/vits` | 整理时归档，后按用户要求删除 |
| `sovits4` | `legacy/sovits4` | 历史 SoVITS4 工程 |
| `TTS` | `legacy/coqui_tts` | Coqui TTS 源码快照 |
| `output`～`output3` | `legacy/datasets/changli_processing` | 历史处理阶段 |
| 多版 `gpt-tts*`、`main*`、`shipztxt*` | `legacy/scripts` | 语义化归档 |

## 已删除内容

以下内容使用永久删除，未进入回收站：

- `AI_yuyin`：其中 Vosk 模型与保留的 `models/asr/vosk_zh_large` 逐文件 SHA-256 完全一致，重复脚本也已迁移；
- `pretrained`：整理时确认 `G_1600.pth` 与旧 VITS 工程内副本 SHA-256 完全一致；
- `TTS-0.14.3.tar`：解包源码与 `legacy/coqui_tts` 全部 263 个文件完全一致；
- 根目录重复的 `commons.py`、`models.py`；
- 空目录 `GPT_SoVITS`；
- Python 缓存 `__pycache__`；
- `changli.wav`、`preprocessed_audio.wav`、`temp_audio.wav` 等可由 `data/raw/videos` 重新生成的中间音频；
- 一次性测试输出 `outputs/generated/smoke_test.wav`；
- 无实际内容的草稿 `yinsemx.py`；
- `.DS_Store` 等系统元数据文件。

- `legacy/vits` 整套旧 VITS 训练工程，以及依赖它的 `legacy/scripts/legacy_vits_inference.py`；此项按用户后续要求永久删除，释放约 1.62 GB。

累计释放空间约 4.47 GB。重复内容仍有规范位置中的完整副本；中间音频可从保留的原始视频重新生成。旧 VITS 训练工程没有保留副本，以后训练改用其他工程。

## 去重原则

只删除满足下列条件之一的内容：

1. 全文件 SHA-256 比对完全一致且已有规范位置副本；
2. 明确属于 Python 缓存；
3. 明确属于一次性输出或可从保留原始素材重建的中间产物；
4. 空目录或空草稿。

不完全相同的数据集、原始视频和其余实验脚本仍保留；旧 VITS 训练工程是用户明确要求删除的例外。
