# AIyuyin 本地语音项目

本项目提供三条可直接使用的本地能力：

1. 使用 GPT-SoVITS 和指定音色生成中文 WAV 音频；
2. 使用 Vosk、Ollama 和系统语音组成按键录音语音助手；
3. 保留 SoVITS4、Coqui TTS、数据预处理脚本和相关历史素材，便于后续迁移到新的训练工程。

项目已按“入口、核心代码、配置、模型、数据、输出、历史归档”重新整理。日常运行只需要关注 `app`、`config`、`scripts` 和 `outputs`。

> **模型说明与详细使用文档**：各模型的用途、路径、体积、下载来源和每个功能的完整操作步骤见 [docs/model_guide.md](docs/model_guide.md)。模型与数据文件不进入 git 仓库，克隆后按该文档补齐。

## 便携运行包（整合包方式，推荐）

参照 ComfyUI 秋叶整合包的做法，项目根目录内置了免安装运行时：

```text
AIyuyin/
├─ runtime/
│  ├─ python/               # 完整便携 Python 3.13 + 全部依赖（含 CUDA 版 PyTorch）
│  ├─ ffmpeg/bin/           # 便携 FFmpeg 9.0（ffmpeg.exe、ffprobe.exe）
│  ├─ nltk_data/            # NLTK 数据下载位置（保持包内，不污染用户目录）
│  └─ cache/huggingface/    # HuggingFace 缓存重定向（保持包内）
├─ start_menu.bat           # 英文启动菜单
├─ 启动菜单.bat              # 同上，中文入口
├─ run_web_chat.bat         # 网页语音聊天（自动打开浏览器）
├─ run_voice_clone.bat      # 指定音色生成 WAV
├─ run_llm_service.bat      # Ollama 对话服务
├─ run_voice_assistant.bat  # 按键录音语音助手
└─ run_dataset_preparation.bat  # 视频识别切分训练数据
```

`.bat` 启动器全部使用 `%~dp0` 相对路径定位包内 Python 和 FFmpeg，并设置 `PYTHONNOUSERSITE`、`NLTK_DATA`、`HF_HOME`，不会加载目标电脑的用户级 Python 包，缓存也留在包内。

**迁移到其他电脑只需两步：**

1. 把整个 `AIyuyin` 文件夹复制过去（约 20GB，runtime 约 6GB）；
2. 双击 `启动菜单.bat`（或对应的 `run_*.bat`）。

其他电脑**不需要安装** Python、CUDA Toolkit、FFmpeg。GPT-SoVITS 依赖的 CUDA 运行库（cudart、cuBLAS、cuDNN 等）已经随 CUDA 版 PyTorch 打包在 `runtime/python/Lib/site-packages/torch/lib` 中，唯一的前提是目标电脑装有 NVIDIA 显卡驱动。

仍然属于外部依赖、按需处理的项：

- **Ollama**：只有 `run_llm_service.bat` 和 `run_voice_assistant.bat` 需要；网页聊天可改用在线 OpenAI 兼容 API，完全不需要 Ollama。
- **麦克风**：语音助手和网页语音输入需要 Windows 麦克风权限。
- **NLTK 英文分词器**：首次合成英文文本时 g2p-en 需要联网下载一次 `averaged_perceptron_tagger_eng`（约 250KB，下载到 `runtime/nltk_data`）；纯中文使用不受影响。
- **Node.js**：仅修改网页前端源码后重新构建时需要；`web/dist` 已构建好随包分发，运行时不依赖 node。

`scripts/*.ps1` 仍保留给本机开发者使用（走 `.venv`）；`.bat` 是便携包的正式入口。

## 目录结构

```text
AIyuyin/
├─ app/                    # 当前可运行入口
│  ├─ voice_clone.py       # GPT-SoVITS 指定音色生成
│  ├─ llm_service.py       # Ollama 的本地 HTTP 服务
│  └─ voice_assistant.py   # Vosk 按键录音语音助手
├─ config/                 # 音色与 GPT-SoVITS 配置
├─ data/
│  ├─ raw/videos/          # 原始视频，始终保留
│  ├─ processed/           # 新识别、切分的数据集
│  └─ voices/              # 参考音频、标注和精选训练数据
├─ models/
│  ├─ voices/              # 各角色的 GPT/SoVITS 权重
│  ├─ gpt_sovits/          # BERT、CN-HuBERT 等基础模型
│  └─ asr/                 # Vosk 与 Whisper 识别模型
├─ src/                    # 当前运行所需的核心库
├─ scripts/                # PowerShell 快捷启动脚本
├─ outputs/generated/      # 新生成的音频
├─ examples/               # 可播放的生成示例
├─ legacy/                 # 旧实验、训练工程和历史数据
├─ docs/                   # 命名规范、清理报告和旧文档
├─ requirements.txt        # 当前入口的 Python 依赖
└─ .venv/                  # 本机已配置的 Python 环境
```

## 当前电脑上的状态

- 已建立 `.venv`，Python 版本为 3.13.13。
- 已安装项目当前入口所需的 Python 包。
- 已安装 PyTorch 2.13.0 CUDA 12.6 版，RTX 2080 Ti 可用于 Whisper 和 GPT-SoVITS。
- 已安装 FFmpeg/FFprobe 9.0、MoviePy、OpenAI Whisper 和 Pydub。
- 指定音色生成、Vosk 模型加载和 Flask 健康检查均可离线验证。
- Ollama 服务与麦克风交互需要在实际使用时启动或接入设备。

## 5. 第一版网页语音聊天

第一版网页已经整合：

- 聊天式文字输入和浏览器麦克风输入；
- 艾雅法拉、长离两个本地 GPT-SoVITS 音色；
- 不需要显卡和 API-Key 的浏览器中文语音备用音色；
- 每个角色独立的名字、人物设定、对话模型和音色绑定；
- 流式文字回答、语音合成、播放和重播；
- OpenAI 兼容 API 配置，可分别为不同角色绑定不同模型；
- SQLite 会话保存；
- 每日、间隔、一次性定时任务。

启动网页（便携包方式，双击或命令行均可）：

```bat
run_web_chat.bat
```

或使用本机开发方式：

```powershell
cd D:\AIyuyin
.\scripts\run_web_chat.ps1
```

然后打开启动窗口提示的地址（默认 `http://127.0.0.1:8000`，端口被占用时自动顺延）。如果网页代码发生变化，需要强制重新构建时执行：

```powershell
.\scripts\run_web_chat.ps1 -Build
```

第一次打开默认使用“演示模式”，它用于检查网页流程，不是真实大模型。要接入网页大模型：

1. 打开右上角设置 → `AI 服务`；
2. 新建服务，填写兼容 OpenAI 协议的 `API Base URL`、实际模型 ID 和 API Key；模型 ID 不是服务名称，例如 GORK 服务当前应填写 `grok-4.6`；
3. 进入 `角色档案`，为艾雅法拉或长离选择该服务和模型；
4. 保存后重新发送消息。

API Key 只提交给本机后端，并保存到 Windows 凭据库；不会写入网页代码、浏览器存储或聊天文字。默认本地服务只监听 `127.0.0.1`。

设置 → `AI 服务` 提供 OpenRouter、Groq 和 Gemini 的免费层模板。模板只负责填写兼容地址和模型 ID，仍需到对应官网注册并创建自己的免费 API Key；项目不提供、收集或使用网上共享/泄露的 Key。免费额度和模型可用性由服务商调整，不适合依赖高稳定性的生产用途。

低配置电脑不能运行 GPT-SoVITS 时，可在设置 → `角色档案` → `绑定音色` 中选择 `浏览器中文语音 · 免费免 Key`。该模式使用操作系统/浏览器语音，不需要 GPU，也不会生成持久化 WAV；音色自然度和角色还原度低于本地克隆模型。

对话模式说明：`指定角色` 只让一个角色回答；`依次对话` 自动启用当前会话全部角色，后一位能承接前一位的内容；`独立回答` 也启用全部角色，但每个角色不参考本轮其他角色的回答。

本地音色引擎会常驻显存；长回复按完整句群逐段可靠合成后拼接，避免 GPT-SoVITS 批处理偶发吞句或截断句尾。依次对话的音频会按角色顺序排队播放，不会重叠。第一次生成以及切换到另一套 GPT-SoVITS 权重时仍需要加载模型，会比同音色连续生成慢。合成失败的消息会显示重试入口，不必重新提问。

设置 → `定时任务` 可以把一个角色绑定到会话，按每天、间隔秒数或一次性时间触发。后端运行时任务会自动执行；如果浏览器阻止后台自动播放，文字和音频仍会保存到会话中。

网页短语音输入第一版使用项目内 Vosk 中文小模型，不占用 GPU。首次使用浏览器麦克风时，需要允许当前网页访问麦克风。

GPT-SoVITS 还需要 NLTK 的英文分词资源。迁移到新电脑后执行一次：

```powershell
.\.venv\Scripts\python.exe -c "import nltk; nltk.download('averaged_perceptron_tagger_eng')"
```

网页完整设计、角色数据关系和替换 CosyVoice3/IndexTTS2 的路线见 [docs/web_voice_chat_plan.md](docs/web_voice_chat_plan.md)。游戏内 AI 语音对话（《Chill with You Lo-Fi Story》BepInEx 插件）见 [docs/game_mod.md](docs/game_mod.md)。

## 首次安装或迁移到另一台电脑

普通使用直接用上文“便携运行包”方式复制整个文件夹即可，无需本节内容。以下仅面向要从零重建环境的开发者：

```powershell
cd D:\AIyuyin
py -3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

新电脑有 NVIDIA 显卡时，再安装项目验证过的 CUDA 版本：

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements-cuda.txt
```

还需要安装：

- FFmpeg：用于音频与视频处理。Windows 可执行 `winget install --id Gyan.FFmpeg --exact`。
- Ollama：只有运行对话服务和语音助手时需要。安装后执行 `ollama pull deepseek-r1:7b`。
- 麦克风及 Windows 麦克风权限：只有运行按键录音助手时需要。
- NVIDIA 显卡驱动和 CUDA 版 PyTorch：可选；本项目的 `requirements-cuda.txt` 使用官方 CUDA 12.6 wheel。

验证 FFmpeg 和 Ollama：

```powershell
ffmpeg -version
ollama --version
```

## 1. 使用指定音色生成语音

项目已配置两个音色：`aiyafala` 和 `changli`。

```powershell
cd D:\AIyuyin
.\scripts\run_voice_clone.ps1 --voice aiyafala --text "野餐就要开始啦。" --output outputs/generated/aiyafala_demo.wav
```

```powershell
.\scripts\run_voice_clone.ps1 --voice changli --text "欢迎回来。" --output outputs/generated/changli_demo.wav
```

可选参数：

- `--voice`：`config/voices.yaml` 中的音色名称；
- `--text`：需要生成的中文文本；
- `--output`：输出 WAV 路径，默认位于 `outputs/generated`；
- `--device auto|cpu|cuda`：默认为自动选择。

### 添加新音色

1. 在 `models/voices/<voice_name>/` 放入 `.ckpt` 和 `.pth` 权重；
2. 在 `data/voices/<voice_name>/` 放入参考 WAV；
3. 在 `config/voices.yaml` 增加同名配置；
4. `prompt_text` 必须与参考音频中实际说出的内容一致；
5. 用短句先做一次测试，再生成长文本。

## 2. 启动 Ollama 对话服务

先确保 Ollama 已运行且模型存在：

```powershell
ollama list
ollama pull deepseek-r1:7b
```

然后启动项目服务：

```powershell
cd D:\AIyuyin
.\scripts\run_llm_service.ps1
```

健康检查地址为 `http://127.0.0.1:5000/health`。如需更换模型或端口：

```powershell
$env:OLLAMA_MODEL = "qwen2.5:7b"
$env:AIYUYIN_PORT = "5001"
.\scripts\run_llm_service.ps1
```

## 3. 启动按键录音语音助手

保持上一节的对话服务运行，再打开一个 PowerShell：

```powershell
cd D:\AIyuyin
.\scripts\run_voice_assistant.ps1
```

按空格开始录音，再按一次空格结束；按 `Ctrl+C` 退出。默认使用大型中文 Vosk 模型，也可以改用小模型：

```powershell
.\scripts\run_voice_assistant.ps1 --model models/asr/vosk_zh_small
```

注意：当前助手的回答使用 Windows 系统音色朗读；指定角色音色生成是独立入口 `voice_clone.py`。两者后续可以再整合为实时角色语音助手。

## 4. 从视频识别并切分训练音频

推荐使用 Whisper，准确度较高：

```powershell
cd D:\AIyuyin
.\scripts\run_dataset_preparation.ps1 data/raw/videos/changli.mp4 `
  --engine whisper `
  --speaker changli `
  --output-dir data/processed/changli_whisper
```

CPU 快速处理可使用 Vosk：

```powershell
.\scripts\run_dataset_preparation.ps1 data/raw/videos/changli.mp4 `
  --engine vosk `
  --speaker changli `
  --output-dir data/processed/changli_vosk
```

先测试视频前 30 秒：

```powershell
.\scripts\run_dataset_preparation.ps1 data/raw/videos/changli.mp4 `
  --engine whisper `
  --speaker changli `
  --duration-seconds 30 `
  --output-dir data/processed/changli_test
```

每次处理会生成：

- `clips/*.wav`：16kHz、单声道、16-bit PCM 切片；
- `filelist.txt`：`音频路径|识别文本`；
- `timeline.txt`：原视频中的开始/结束时间和文本；
- `manifest.json`：模型、参数、设备、原始片段及质量标记。

默认不会覆盖已有数据。确认重做时添加 `--overwrite`。完整参数和筛选建议见 `docs/video_dataset_preparation.md`。

## 历史训练与数据处理

历史文件统一放在 `legacy`，不会被当前入口自动加载：

- `legacy/sovits4`：旧 SoVITS4 工程；
- `legacy/coqui_tts`：旧 Coqui TTS 0.14.3 源码快照；
- `legacy/scripts`：按版本保留的数据处理、语音助手和推理实验；
- `legacy/datasets`：长离数据处理的中间版本。

旧 VITS 训练工程已经删除。以后需要训练时，请选用新的训练工程，并复用 `data/voices`、`data/raw/videos` 和 `models/voices` 中保留的数据与现有音色模型。

## 常见问题

### 提示缺少模型或参考音频

检查 `config/voices.yaml` 中的路径。所有相对路径都从项目根目录 `D:\AIyuyin` 解析。

### 使用 CUDA 时提示当前 PyTorch 不支持 CUDA

先执行 `.\.venv\Scripts\python.exe -m pip install -r requirements-cuda.txt`，然后检查：

```powershell
.\.venv\Scripts\python.exe -c "import torch; print(torch.cuda.is_available(), torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'CPU')"
```

### 对话服务返回 500

确认 Ollama 正在运行、`OLLAMA_MODEL` 指定的模型已下载，并用 `ollama list` 检查模型名称。

### 语音助手检测不到麦克风

检查 Windows“隐私和安全性 → 麦克风”权限、默认输入设备，以及是否有其他程序独占设备。

### 中文分词或 G2PW 尝试联网

当前代码已经改为优先使用项目内的 G2PW、BERT 和 CN-HuBERT 模型。请不要移动 `src/gpt_sovits/text/G2PWModel` 与 `models/gpt_sovits`。

## 文件命名规则

当前代码统一使用英文小写蛇形命名，例如 `voice_clone.py`、`run_llm_service.ps1`。角色目录使用稳定的英文标识，例如 `aiyafala`。只有归档脚本允许 `v01`、`v02` 这样的历史版本号。完整规则见 `docs/naming_conventions.md`。
