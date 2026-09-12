# AIyuyin 模型说明与详细使用文档

本文是项目的完整模型清单和使用手册。快速上手见根目录 [README.md](../README.md)；本文回答两个问题：

1. 项目用了哪些模型、放在哪里、从哪里获取（第 2–4 节）；
2. 每个功能怎么用（第 5 节）。

---

## 1. 项目能做什么

AIyuyin 是一套完全本地运行的中文语音项目，核心能力：

| 能力 | 使用的模型 | 是否需要显卡 |
|---|---|---|
| 网页语音聊天（多角色、流式文字+语音） | GPT-SoVITS 音色 + 在线/本地 LLM | 需（本地音色）/ 不需（浏览器音色） |
| 指定音色生成 WAV（语音克隆推理） | GPT-SoVITS | 需 NVIDIA 显卡 |
| 网页麦克风短语音输入 | Vosk 中文小模型 | 不需 |
| 按键录音语音助手 | Vosk 大模型 + Ollama + 系统 TTS | 不需 |
| 从视频识别并切分训练音频 | Whisper（或 Vosk） | Whisper 建议显卡 |

所有语音模型离线运行；LLM 可接任何 OpenAI 兼容 API（在线）或本地 Ollama（离线）。

## 2. 模型清单

### 2.1 GPT-SoVITS 基础模型（推理必需，公开下载）

GPT-SoVITS 是音色克隆的底层引擎，由四个部分组成，缺一不可：

| 模型 | 默认路径 | 体积约 | 获取来源 |
|---|---|---|---|
| 文本 BERT `chinese-roberta-wwm-ext-large` | `models/gpt_sovits/chinese-roberta-wwm-ext-large/` | 1.3GB | HuggingFace `hfl/chinese-roberta-wwm-ext-large`，或 GPT-SoVITS 官方整合包内同名目录 |
| 语音 CN-HuBERT `chinese-hubert-base` | `models/gpt_sovits/chinese-hubert-base/` | 0.4GB | HuggingFace `TencentGameMate/chinese-hubert-base`（base 档） |
| G2PW 多音字消歧 `g2pW.onnx` | `src/gpt_sovits/text/G2PWModel/g2pW.onnx` | 635MB | GPT-SoVITS 官方仓库自带同名文件 |
| 预训练底模（v1/v2） | `models/gpt_sovits/gsv-v2final-pretrained/` 及根目录 `s1bert25hz-*.ckpt`、`s2G488k.pth`、`s2D488k.pth` | 1–2GB | GPT-SoVITS 官方发布（github.com/RVC-Boss/GPT-SoVITS 的 pretrained 资源，或 HuggingFace `lj1995/GPT-SoVITS`） |

> 官方渠道汇总：GPT-SoVITS 的 README「Pretrained Models」小节列出了全部基础模型的网盘与 HuggingFace 链接，按目录名对号入座放入 `models/gpt_sovits/` 即可。同目录的字典等小文件已随本仓库源码提供，无需重复下载。

### 2.2 角色音色权重（私有，自训练）

每个角色一组 GPT-SoVITS 训练成果，**属于个人训练数据，不入库**：

| 角色 | 权重位置 | 参考音频 | 参考文本 |
|---|---|---|---|
| `aiyafala`（艾雅法拉） | `models/voices/aiyafala/{aiyafala.ckpt, aiyafala.pth}` | `data/voices/aiyafala/aiyafala_021.wav` | 野餐就要开始啦。 |
| `changli`（长离） | `models/voices/changli/{changli.ckpt, changli.pth}` | `data/voices/changli/changli_004.wav` | 而我只是一个有幸接过游丝的引路人…… |

绑定关系在 `config/voices.yaml` 中维护；新增音色见 5.2 节。

### 2.3 语音识别模型（按功能选配）

| 模型 | 默认路径 | 体积约 | 用途 | 获取来源 |
|---|---|---|---|---|
| Vosk 中文小模型 | `models/asr/vosk_zh_small/` | 40MB | 网页麦克风短语音输入（`app/web_app.py` 默认） | alphacephei.com/vosk/models（`vosk-model-small-cn-0.22`，解压后把内容放入该目录） |
| Vosk 中文大模型 | `models/asr/vosk_zh_large/` | 1.3GB | 按键录音助手默认 | 同上（`vosk-model-cn-0.22`） |
| Vosk 英文小模型 | `models/asr/vosk_en_small/` | 备用 | 同上（英文） | 同上 |
| Whisper medium | `models/asr/whisper/medium.pt` | 1.5GB | 视频数据集制备（`--engine whisper`） | 首次运行自动从 OpenAI 官方源下载，也可手动放置 |

### 2.4 零模型方案

低配置电脑可不放任何模型：网页聊天选择「浏览器中文语音 · 免费免 Key」音色（系统 TTS），LLM 接在线 API，Vosk 小模型仅 40MB 可选装。此时整个项目不需要 NVIDIA 显卡。

## 3. 克隆仓库后的准备清单

按想用的功能对号入座，从上往下累加：

1. **只要网页文字聊天**：什么都不用放。启动 `run_web_chat.bat`，设置里接 OpenAI 兼容 API，音色选「浏览器中文语音」。
2. **加网页麦克风输入**：补 Vosk 小模型（40MB）到 `models/asr/vosk_zh_small/`。
3. **加本地克隆音色（艾雅法拉/长离）**：补 2.1 节全部基础模型 + 2.2 节角色权重和参考音频。需要 NVIDIA 显卡（驱动即可，无需 CUDA Toolkit——CUDA 运行库已随便携包内置；若用 `.venv` 开发方式则执行 `pip install -r requirements-cuda.txt`）。
4. **加视频数据集制备**：补 Whisper `medium.pt`（或只用 Vosk，准确度较低）。
5. **加本地离线对话**：安装 Ollama 并 `ollama pull deepseek-r1:7b`（外部程序，不属于本仓库）。

放置完成后目录自检：`models/README.md` 里有一张对照表，逐项核对即可。

## 4. 两种运行环境

### 4.1 便携运行包（推荐，免安装）

根目录 `runtime/` 内置完整 Python 3.13 + 全部依赖 + CUDA 版 PyTorch + FFmpeg（约 6GB，**不入库，需在原电脑上已存在或从原电脑整体拷贝**）。双击 `启动菜单.bat` 或各 `run_*.bat` 即可。目标电脑只需 NVIDIA 显卡驱动。

> 因此，通过 git 获得本仓库的电脑如果拿不到 `runtime/`，请改用 4.2 的开发方式安装依赖；代码与功能完全一致。

### 4.2 开发者方式（pip 安装）

```powershell
py -3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
# NVIDIA 显卡另装 CUDA 版 PyTorch：
.\.venv\Scripts\python.exe -m pip install -r requirements-cuda.txt
# GPT-SoVITS 英文文本支持（一次性，需联网）：
.\.venv\Scripts\python.exe -c "import nltk; nltk.download('averaged_perceptron_tagger_eng')"
```

另需手动安装 FFmpeg（`winget install --id Gyan.FFmpeg --exact`）。此后用 `scripts/run_*.ps1` 启动各功能。

## 5. 功能详细使用

### 5.1 网页语音聊天

启动：双击 `run_web_chat.bat`（便携包）或 `.\scripts\run_web_chat.ps1`（开发方式），浏览器自动打开 `http://127.0.0.1:8000`。

首次配置（设置入口在右上角）：

1. **AI 服务**：新建服务，填 OpenAI 兼容的 `API Base URL`、模型 ID 和 API Key。内置 OpenRouter / Groq / Gemini 免费层模板，需自行注册获取 Key。Key 只提交给本机后端并存入 Windows 凭据库，不写入代码、浏览器存储或聊天记录。
2. **角色档案**：为艾雅法拉 / 长离选择 AI 服务、模型和绑定音色。绑定「浏览器中文语音」则不需要显卡和本地模型。
3. **对话模式**：`指定角色` 单人回答；`依次对话` 全员排队、后者承接前者内容；`独立回答` 全员互不参考。
4. **语音输入**：允许浏览器麦克风权限后按住说话，识别用本地 Vosk 小模型，不占显卡。
5. **定时任务**：把角色绑定到会话，支持每日 / 固定间隔 / 一次性触发。

本地音色引擎常驻显存；长回复按句群分段合成再拼接，依次对话的音频按角色顺序播放不重叠。合成失败的消息有重试按钮。会话历史存于本地 SQLite（`data/chat/chat.db`，含个人对话，不入库）。

### 5.2 指定音色生成 WAV

```bat
run_voice_clone.bat --voice aiyafala --text "野餐就要开始啦。" --output outputs\generated\demo.wav
run_voice_clone.bat --voice changli --text "欢迎回来。"
```

参数：`--voice` 取 `config/voices.yaml` 中的键名；`--output` 默认在 `outputs/generated/`；`--device auto|cpu|cuda` 默认自动。

**添加新音色**：

1. 训练得到 `.ckpt`（GPT）和 `.pth`（SoVITS），放入 `models/voices/<新名>/`；
2. 参考音频 WAV 放入 `data/voices/<新名>/`；
3. 在 `config/voices.yaml` 照抄现有条目并改路径；
4. `prompt_text` 必须与参考音频实际说出的内容完全一致；
5. 先用短句测试，再生成长文本。

### 5.3 从视频制备训练数据

```bat
run_dataset_preparation.bat data\raw\videos\changli.mp4 --engine whisper --speaker changli --output-dir data\processed\changli_whisper
```

建议先加 `--duration-seconds 30` 试前 30 秒。产物：`clips/*.wav`（16kHz 单声道切片）、`filelist.txt`（路径|文本）、`timeline.txt`（时间轴）、`manifest.json`（参数与质量标记）。默认不覆盖已有数据，确认重做加 `--overwrite`。CPU 快速处理可 `--engine vosk`。

### 5.4 Ollama 对话服务与按键语音助手

```powershell
ollama pull deepseek-r1:7b     # 外部安装 Ollama 后拉取模型
```

先开 `run_llm_service.bat`（健康检查 `http://127.0.0.1:5000/health`），再开 `run_voice_assistant.bat`：空格键开始/结束录音，Ctrl+C 退出，回答用 Windows 系统音色朗读。换模型/端口设环境变量 `OLLAMA_MODEL`、`AIYUYIN_PORT`。

## 6. 仓库内容与体积策略（.gitignore 摘要）

| 内容 | 是否入库 | 原因 |
|---|---|---|
| `app/ src/(代码) scripts/ config/ tests/ docs/ web/src web/dist` | 是 | 代码与已构建前端，合计仅数 MB |
| `examples/` | 是 | 约 300KB 可播放生成示例 |
| `models/`（全部权重）、`src/**/g2pW.onnx` | 否 | 模型文件，体积大且部分私有 |
| `data/raw data/voices data/processed data/chat` | 否 | 原始视频、音频数据集与个人聊天库 |
| `runtime/ .venv/` | 否 | 约 6GB 的便携运行时，整体拷贝分发 |
| `legacy/datasets` | 否 | 历史数据集音频；`legacy/` 其余源码入库 |
| `outputs/` | 否 | 本机生成产物 |

## 7. 常见问题

- **提示缺少模型/参考音频**：按第 3 节清单补齐；`config/voices.yaml` 的相对路径从项目根目录解析。
- **PyTorch 提示不支持 CUDA**：开发方式需装 `requirements-cuda.txt`；便携包已内置。只需显卡驱动，无需安装 CUDA Toolkit。
- **中文分词/G2PW 尝试联网**：代码已优先使用项目内 G2PW/BERT/CN-HuBERT，请勿移动 `src/gpt_sovits/text/G2PWModel`（字典）与 `models/gpt_sovits`。
- **英文合成报 NLTK 数据缺失**：执行 4.2 节最后一条命令下载一次分词器（便携包已把下载位置定向到 `runtime/nltk_data`）。
- **麦克风无声音/检测不到**：检查 Windows 隐私设置的麦克风权限与默认输入设备。
- **迁移到新电脑**：便携包方式直接复制整个文件夹（约 20GB）；纯 git 克隆方式按第 3、4.2 节重建。
