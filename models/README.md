# models/ 模型目录说明

本目录存放 AIyuyin 使用的所有模型权重。**模型文件体积大，不进入 git 仓库**；克隆本仓库后请按 [`docs/model_guide.md`](../docs/model_guide.md) 的清单下载并放到对应位置。

```text
models/
├─ voices/                     # 各角色的 GPT-SoVITS 训练成果（自训练，私有）
│  ├─ aiyafala/
│  │  ├─ aiyafala.ckpt         # GPT（AR 模型）权重，约 0.1GB
│  │  └─ aiyafala.pth          # SoVITS（VITS 声码器）权重，约 0.1GB
│  └─ changli/
│     ├─ changli.ckpt
│     └─ changli.pth
├─ gpt_sovits/                 # GPT-SoVITS 公开基础模型（推理必需）
│  ├─ chinese-roberta-wwm-ext-large/   # 文本 BERT，约 1.3GB
│  ├─ chinese-hubert-base/             # 语音 CN-HuBERT，约 0.4GB
│  ├─ gsv-v2final-pretrained/          # v2 版预训练底模（s1 ckpt + s2G pth）
│  ├─ s1bert25hz-2kh-longer-epoch=68e-step=50232.ckpt   # v1 底模
│  ├─ s2G488k.pth / s2D488k.pth
│  └─ (目录内存放的 .gitignore 为历史遗留，可忽略)
└─ asr/                        # 语音识别模型
   ├─ vosk_zh_small/           # 中文小模型：网页短语音输入默认，约 40MB
   ├─ vosk_zh_large/           # 中文大模型：按键录音助手默认，约 1.3GB
   ├─ vosk_en_small/           # 英文小模型（备用）
   └─ whisper/medium.pt        # Whisper medium：视频数据集制备引擎，约 1.5GB
```

除本 README 外，`models/` 下的所有内容均被 `.gitignore` 排除（`*.ckpt`、`*.pth`、`*.pt`、`*.onnx` 等模式作为兜底）。

另外一处必需的模型文件位于源码树内：

- `src/gpt_sovits/text/G2PWModel/g2pW.onnx`（约 635MB）：中文多音字消歧模型，GPT-SoVITS 前端处理依赖；同目录的字典和配置文件已随源码入库，只需单独补这一个文件。
