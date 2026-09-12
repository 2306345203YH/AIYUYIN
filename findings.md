# 项目调查记录

## 项目范围

- 工作区根目录包含多个历史版本脚本、模型目录、音频样本和若干子项目。

## 已确认结构

- 对话助手入口：`main.py`、`main2.py`、`main3.py`；服务端：`AI_yuyin/ai_service.py`；内置 Vosk DLL/模型存在。
- 特定音色 TTS 入口候选：`gpt-tts_11.py`，调用 `TTS_infer_pack.TTS`；GPT/SoVITS 权重存在于 `models_mx/aiyafala` 和 `models_mx/changli`。
- TTS 还依赖 `feature_extractor.cnhubert`、`tools.i18n.i18n`、`tools.my_utils`，但当前工作区未发现 `feature_extractor` 或 `tools` 目录；这不是单纯 pip 依赖，属于缺失的 GPT-SoVITS 源码组件。
- `configs/tts_infer.yaml` 仍使用 `GPT_SoVITS/...`、`GPT_weights_v2/...` 等旧路径，与当前目录布局不一致；`gpt-tts_11.py` 使用相对路径且硬编码 CUDA/半精度。
- 本机只有可用的 Python 3.13.13；项目文档测试 Python 3.8–3.9。GPU 为 RTX 2080 Ti 11GB，驱动报告 CUDA 13.0。

## 依赖风险

- `AI_yuyin/requirements.txt` 是对话链路的直接依赖，但项目内自带 Vosk 源码/DLL；PyAudio 在 Windows 上可能需匹配 Python 版本的 wheel。
- GPT-SoVITS 链路需要 PyTorch、Transformers、librosa、soundfile、PyYAML、ffmpeg-python、pytorch-lightning 等，且当前代码缺少若干本地模块。
- `vits-main/requirements.txt` 锁定了 Python 3.6 时代的 `torch==1.6.0`、`numpy==1.18.5` 等版本，不建议直接装进当前 Python 3.13。

## 最终验证

- 已创建 `D:\\AIyuyin\\.venv`，使用 Python 3.13.13。
- 已安装对话链路依赖、现代 PyTorch CPU 版 2.13.0、PyTorch Lightning 2.6.5，以及 GPT-SoVITS 推理所需的音频/文本依赖。
- 已补齐最小 GPT-SoVITS 兼容模块 `feature_extractor`、`tools/i18n`、`tools/my_utils`；官方 GPT-SoVITS 当前代码也采用这些模块路径（官方仓库推理代码可见 `feature_extractor` 与 `tools` 导入）。
- 已修复明确的本地兼容问题：缺失类型导入、可选 F5-TTS 导入、jieba-fast fallback、CPU CN-HuBERT dtype、TTS 类导入、配置键、中文语言参数、空输出目录、WAV 文件头。
- `gpt-tts_11.py` 已成功加载 aiyafala GPT/SoVITS、BERT、CN-HuBERT 并生成可读取的 `output.wav`（32000 Hz，soundfile 验证通过）。
- Ollama 服务未运行（127.0.0.1:11434 拒绝连接）；PyAudio 检测到 0 个输入通道的设备，当前没有可用麦克风输入。

## 精简调查（2026-08-21）

- 最大目录：`AI_yuyin` 2095.8MB、`model-cn` 2044.2MB、`vits-main` 1619.8MB、`pretrained_models` 1478MB、`mp4flie` 1465.8MB、`model/medium.pt` 1457.2MB。
- `AI_yuyin/model-cn` 与根目录 `model-cn` 的 22 个文件经过 SHA-256 全量比对，全部完全相同；可安全移除一份，节省约 2.0GB。
- 根目录 `ai_service.py` 与 `AI_yuyin/ai_service.py` 完全相同。
- `pretrained/G_1600.pth` 与 `vits-main/pretrained/G_1600.pth` 完全相同，重复约 599MB。
- 根目录 `commons.py`、`models.py`、`utils.py` 与 `vits-main` 内对应文件完全相同。
- 根目录脚本存在明显版本堆叠：`main.py/main2.py/main3.py` 相似度 93%–99%；`gpt-tts*.py` 多组相似度 82%–98%；`shipztxt*.py` 多组相似度 70%–95%。这些版本不能仅凭相似度删除，当前稳定入口保留，实验版归档。
- `output`–`output6` 是音频切片数据集，不是普通临时输出；其中 `output4`（changli）和 `output6`（aiyafala）仍被特定音色推理脚本引用，必须保留并改为语义化目录名。
- `output3` 与 `output4` 并非全量重复：119 个同名 WAV 中 69 个哈希相同、50 个不同；因此旧处理批次已归档到 `legacy/datasets`，没有直接删除。
- `TTS-0.14.3.tar` 解包目录内含两份文件数和总字节数都与根目录 `TTS` 相同的源码树；保留一份到 `legacy/coqui_tts` 后，解包副本可删除。
- 规范结构已落地：`app`（入口）、`src`（核心库）、`models`（模型）、`data`（原始/参考数据）、`config`（配置）、`scripts`（启动脚本）、`legacy`（历史代码/数据）、`docs`（文档）、`outputs`（新生成物）。
- SoVITS 权重 pickle 会动态导入顶层 `utils.HParams`；根目录 `utils.py` 虽与旧 VITS 文件相同，但对当前权重加载仍是运行时依赖，已保留到 `src/gpt_sovits/utils.py`，不能删除。
- 已永久删除 `AI_yuyin`、`pretrained`、`TTS-0.14.3.tar`、空目录、根目录重复模块、可重建中间音频和缓存，释放约 2.85GB；规范位置中的模型和源码副本仍完整保留。
- 最终回归：aiyafala WAV 为 32000Hz/1.26s，changli WAV 为 32000Hz/3.30s；两者均被 soundfile 正常读取。
- Vosk 中文小模型从 `models/asr/vosk_zh_small` 完整加载；Flask 健康检查返回 200 和 `deepseek-r1:7b` 配置。
- 当前 `app`/`src` 与归档 `legacy/vits` 均通过 `compileall`。旧 VITS 的两个字符串路径仅有 Python 3.13 `SyntaxWarning`，历史运行应使用独立 Python 3.8 环境。
- `config/gpt_sovits/tts_infer.yaml` 的旧 `GPT_SoVITS` 路径已改为规范目录，`TTS_Config` 会将相对模型路径按项目根目录解析；四项路径均已验证存在。
- 用户明确不再保留旧 VITS 训练工程。`legacy/vits`（约 1619.7MB）及其旧推理脚本已永久删除；当前 GPT-SoVITS 推理核心位于 `src/gpt_sovits`，模型位于 `models`，不受此次删除影响。

## 视频处理环境调查（2026-08-21）

- 当前 `.venv` 为 Python 3.13.13，已有 PyTorch、OpenCC、SoundFile 和 `imageio-ffmpeg`，但没有 MoviePy、OpenAI Whisper、Pydub。
- 系统 `PATH` 中没有 `ffmpeg` 和 `ffprobe`；WinGet 可安装 `Gyan.FFmpeg 9.0`。
- Python 环境内已有 `imageio-ffmpeg` 自带的 FFmpeg 7.1 可执行文件，可作为代码级后备方案。
- 本地 Whisper Medium 权重完整存在于 `models/asr/whisper/medium.pt`，约 1457.2MB，无需重新下载模型。
- WinGet 已成功安装 `Gyan.FFmpeg 9.0`，FFmpeg 与 FFprobe 命令别名位于用户 WinGet Links 目录；当前 Codex 进程未刷新 PATH，因此代码仍需自动发现该位置。
- `.venv` 已安装 `moviepy 2.2.1`、`openai-whisper 20250625`、`pydub 0.25.1`、`tiktoken 0.14.0` 等依赖。
- PyTorch 官方当前 Windows CUDA 安装需要选择匹配的 CUDA wheel；本机 RTX 2080 Ti/驱动 581.29 可用，但当前稳定项目环境为 `torch 2.13.0+cpu`。为避免降级或大体积下载再次破坏已验证的 TTS 环境，本轮代码采用 CUDA 自动检测和 CPU 回退，不强制替换 PyTorch。
- 当前角色 `filelist.txt` 使用通用两字段格式：`音频路径|文本`。新入口应默认保持该格式，同时额外保存结构化 JSON 便于接入其他训练工程。
- PyTorch 官方 CUDA 12.6 索引提供与当前 Python 3.13 匹配的 `torch 2.13.0+cu126` Windows wheel；已安装并在 RTX 2080 Ti 上完成实际矩阵计算。
- 新视频入口在 Whisper GPU 测试中写入 `device=cuda`，10 秒片段生成 8 个 16kHz 单声道 PCM WAV；时间戳被正确限制在原视频截取区间内。
- CUDA PyTorch 安装后，现有 aiyafala GPT-SoVITS 推理仍成功，说明视频加速升级没有破坏当前音色功能。

## 本地语音聊天网页架构审计（2026-08-21）

- 当前能力是四个彼此独立的脚本：Flask/Ollama 文本服务、命令行 GPT-SoVITS、Windows 麦克风/Vosk 助手、视频数据准备；没有网页静态资源、会话存储、浏览器录音接口或统一任务编排。
- `llm_service.py` 直接依赖 Ollama Python 客户端，且等待完整回答后一次性返回；网页重构应抽象为 LLM Provider，并优先使用 llama.cpp 的 OpenAI 兼容流式接口。
- `voice_clone.py` 每次调用都会重新加载 GPT、SoVITS、BERT、CN-HuBERT，网页连续对话时延会过高；重构后 TTS Provider 应在服务启动时缓存两个音色实例，按 GPU 显存策略串行调度。
- `voice_assistant.py` 使用桌面级 PyAudio/keyboard/pyttsx3，不适合网页；浏览器应使用 `MediaRecorder` 采集音频并上传，后端复用 Whisper/Vosk，回答音频由网页原生 `<audio>` 播放和重播。
- 当前 `config/voices.yaml` 已能作为网页音色下拉框的数据源；aiyafala/changli 模型、参考音频和提示文本均可继续用于第一阶段兼容测试。
- RTX 2080 Ti 只有 11GB 显存，LLM、Whisper Medium 和 TTS 同时常驻存在显存竞争；方案必须支持模型分时加载、LLM 部分 GPU offload，或将 ASR 改为更小模型。

## 新一代音色克隆候选（官方资料初筛）

- 官方 `index-tts/index-tts` 的 IndexTTS2 原生支持零样本音色克隆、音色与情绪解耦、情绪参考音频、情绪描述文本以及 8 维情绪向量（高兴/愤怒/悲伤/害怕/厌恶/忧郁/惊讶/平静），并支持 FP16；功能上最贴合“角色音色 + 对话情绪”。
- IndexTTS2 模型使用自定义许可证，不是 MIT；包含分发、衍生模型和用其改进其他 AI 模型方面的额外限制，若未来商业化必须单独审查。
- 官方 `resemble-ai/chatterbox` 最新多语言 V3 为约 500M，支持中文、零样本克隆、情绪强度控制，MIT 许可；仓库对 Python 3.13 有依赖分支，但固定 Torch 版本与本项目当前 Torch 2.13 不一致，适合独立 TTS 环境/进程。
- Chatterbox 的通用情绪接口偏向单一 `exaggeration` 强度，使用简单、适合实时对话；精细指定“悲伤/愤怒/平静”等类型的能力不如 IndexTTS2 的多模态情绪接口直接。
- 官方 GPT-SoVITS 仍在活跃更新并采用 MIT 许可；本项目现有两个已训练音色可作为第一阶段基线，但当前接入没有显式情绪类型/强度控制，且每次请求重载模型导致网页时延偏高。
- 官方 Fun-CosyVoice3-0.5B 同时提供零样本/跨语言克隆、`inference_instruct2` 参考音色指令控制、文字输入与音频输出双流式能力；支持情绪、方言、语速和音量指令，Apache-2.0，是当前最适合网页实时对话的首选替换候选。
- 官方 Qwen3-TTS 于 2026-01 发布 0.6B/1.7B 系列，支持 3 秒音色克隆、流式输出和 10 种语言；但仓库模型表中 Base 克隆模型未标注 Instruction Control，显式情绪控制主要位于 CustomVoice/VoiceDesign，因此暂列后续观察候选。
- Fish Audio S2 Pro 的自由情绪标签和多说话人能力很强，但模型为 4B，并采用 Fish Audio Research License；在 RTX 2080 Ti 11GB 上还要与本地 LLM 共存，不适合作为当前默认引擎。
- F5-TTS 约 0.3B，代码 MIT，但官方预训练模型为 CC-BY-NC，且情绪主要依赖参考音频；不作为首选。
- faster-whisper 官方实现相对原版 Whisper 可更快且更省内存，并支持 CPU/GPU INT8 与 VAD；网页短句默认建议使用 CPU INT8，把显存优先留给 LLM 和 TTS。

## 网页重构方案结论

- 前端采用 React + Vite + TypeScript，后端采用 FastAPI；Gradio 只用于模型试验，不作为最终聊天界面。
- 对话模型通过 llama.cpp `llama-server` 的 OpenAI 兼容流式接口接入，避免继续绑定 Ollama。
- 以 `LLMProvider`、`ASRProvider`、`TTSProvider` 隔离模型实现；现有 GPT-SoVITS 先封装并常驻加载两个音色，再平行接入 CosyVoice3 和 IndexTTS2。
- 单机使用 SQLite、文件系统和一个 `asyncio` GPU 队列即可，不引入 Redis/Celery；各 TTS 候选使用独立 Python 环境和进程，避免破坏现有依赖。
- 完整方案已写入 `docs/web_voice_chat_plan.md`。

## 多角色与定时任务新增需求（2026-08-21）

- 新核心实体应为“角色档案”，而不是单独的音色：一个角色同时绑定显示名、头像、LLM 连接、模型名、系统提示词、TTS Provider、音色 ID 和默认情绪规则。
- 外部 API 统一优先按 OpenAI 兼容协议接入，配置 `base_url`、`model` 和 `api_key_ref`；OpenAI 官方异步客户端支持自定义 `base_url` 与 API Key，因此可覆盖 OpenAI 及多数兼容服务，本地 llama.cpp 也走同一接口。
- API Key 不能进入 React 打包产物、浏览器 localStorage、聊天导出或 SQLite 明文字段；Windows 本机应使用 Python `keyring` 保存到 Windows Credential Locker，SQLite 只保存不可逆的凭据引用名和末尾掩码。
- APScheduler 支持一次性、延后和循环调度；要让任务与应用重启后仍存在，必须使用持久化数据存储。项目将调度定义保存在 SQLite，由后端执行，而不是依赖浏览器计时器。
- 浏览器通常会阻止没有用户交互的有声自动播放，后台标签页也可能延后播放；定时任务应保证生成并保存消息/音频，自动播放仅作为尽力行为，失败时显示通知和待播放状态。
- 多人回复第一版确定为三种有限模式：指定角色、选中角色依次回答、选中角色独立回答；每个用户输入建立有限回复轮次，禁止角色无边界互相触发。
- 每条消息保存角色、LLM、TTS、音色和情绪快照；角色配置改变后，历史音频及生成来源仍可追溯。
- 定时任务支持固定文本、调用单角色 LLM、多个角色依次回答；任务保存运行历史、错过策略、并发限制和 API 费用/次数上限。
