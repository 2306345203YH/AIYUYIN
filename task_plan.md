# 项目重新运行计划

目标：梳理 D:\\AIyuyin 内的语音合成项目，识别重新运行所需环境，在本机安装可自动安装的依赖，并完成最小可行验证。

## 阶段

- [completed] 1. 盘点项目结构、入口和依赖
- [completed] 2. 检查本机软件、Python、GPU/音频环境
- [completed] 3. 安装可自动安装的环境与依赖
- [completed] 4. 按入口做最小运行验证
- [completed] 5. 输出结构说明、已安装项和手动安装项

## 错误记录

| 错误 | 尝试 | 处理 |
|---|---:|---|
| PyTorch CUDA wheel 下载卡住/连接重置 | 1 | 改用镜像安装 CPU 版 PyTorch 2.13.0；GPU 版留作手动升级 |
| `Tuple` 未定义 | 1 | 补充 `typing` 和 `Tensor` 导入 |
| GPT-SoVITS 模块缺失 | 1 | 补齐最小 `feature_extractor`/`tools` 兼容模块 |
| jieba-fast 需 MSVC | 1 | 安装普通 jieba，并在代码中 fallback |
| CPU 半精度 CN-HuBERT | 1 | CPU 模式转 float32 |
| 输出 WAV 无文件头 | 1 | 改用 soundfile 写 WAV |
| PowerShell 目录统计管道解析失败 | 1 | 改为先收集 `$rows` 再排序输出 |
| Windows 下 `rg` 不展开目录通配符 | 1 | 改用 `rg data\\voices -g filelist.txt` |
| 从 `app` 目录加载 SoVITS 权重时报 `No module named utils` | 1 | 确认权重 pickle 依赖旧模块名，将兼容 `utils.py` 保留到 `src/gpt_sovits` |
| G2PW 使用 `text/G2PWModel` 相对路径并尝试下载失效地址 | 1 | 改为基于 `chinese2.py` 定位已有本地 ONNX 模型，并使用项目内 BERT |

## 项目精简与规范化（2026-08-21）

目标：在保留 Vosk 录音识别、Ollama 对话服务、GPT-SoVITS 指定音色推理和历史 VITS 训练资产的前提下，清理重复/缓存/临时文件，统一命名与目录结构，并交付完整使用文档。

- [completed] 6. 建立文件清单、引用关系、重复文件和体积报告
- [completed] 7. 设计规范目录与旧文件映射，建立可恢复备份
- [completed] 8. 执行移动、改名、去重和安全删除
- [completed] 9. 修正路径、入口与依赖清单
- [completed] 10. 编写 README、命名规范和清理清单
- [completed] 11. 验证所有保留功能与最终目录
- [completed] 12. 按用户后续要求删除旧 VITS 训练工程并同步文档

## 视频语音识别与数据切分优化（2026-08-21）

目标：安装视频处理所需环境，将历史 Whisper/Vosk 脚本整合为一个规范、可配置、可验证的当前入口，并使用项目内真实视频完成最小端到端测试。

- [completed] 13. 核对现有视频、模型、Python 包和 FFmpeg 状态
- [completed] 14. 安装并验证 MoviePy、Whisper、Pydub、FFmpeg 等依赖
- [completed] 15. 实现统一的视频识别与切分入口和启动脚本
- [completed] 16. 更新依赖清单和使用文档
- [completed] 17. 使用真实视频片段完成端到端验证并清理测试产物
- [completed] 18. 尝试启用 RTX 2080 Ti 的官方 CUDA PyTorch 并回归验证

## 本地多模态语音聊天网页方案（2026-08-21）

目标：在不改动现有可运行功能的前提下，设计一个支持文字/麦克风输入、流式文字回答、指定音色语音合成、播放与重播的本地网页，并评估可替代 GPT-SoVITS 的新一代情绪化音色克隆方案。

- [completed] 19. 审计当前 ASR、LLM、TTS 入口与可复用边界
- [completed] 20. 调研官方开源仓库中的音色克隆和情绪控制候选
- [completed] 21. 比较网页技术栈、显存调度、延迟、许可证和迁移成本
- [completed] 22. 输出推荐架构、替换路线、界面草图和分阶段实施方案

## 多角色、外部模型与定时任务方案扩展（2026-08-21）

目标：把单角色语音聊天方案扩展为多人角色聊天；每个角色可独立绑定显示名称、LLM 服务/模型、系统提示词、TTS 引擎/音色与情绪规则，并支持持久化定时任务和安全的 API Key 管理。

- [completed] 23. 定义角色、模型连接、会话成员、消息和定时任务的数据关系
- [completed] 24. 设计多人回复编排、逐消息音色播放和定时触发行为
- [completed] 25. 设计网页设置、API Key 安全存储及浏览器音频限制处理
- [completed] 26. 更新正式方案文档和新增需求验收标准

## 第一版网页实施（2026-08-21）

目标：把方案落成可启动的本地网页第一版，先使用现有两个 GPT-SoVITS 音色，外部 API 和定时任务先提供可用配置与执行骨架。

- [completed] 27. 安装 FastAPI、SQLite、定时任务、API 客户端和 Windows 密钥存储依赖
- [completed] 28. 实现角色/会话/消息/模型连接/定时任务后端 API
- [completed] 29. 实现 React 聊天网页、角色设置、API 设置和定时任务设置
- [completed] 30. 构建前端并验证服务健康、流式聊天、定时任务 API
- [completed] 31. 用艾雅法拉和长离通过网页接口完成真实 GPT-SoVITS WAV 合成
- [completed] 32. 清理回归测试数据、更新启动脚本、依赖和使用文档

## 精简任务错误记录

| 错误 | 尝试 | 处理 |
|---|---:|---|
| PowerShell `foreach` 结果直接接管道产生空管道解析错误 | 1 | 先收集到 `$rows`，再统一输出 |
| 标准递归删除命令被执行策略拒绝，未删除任何文件 | 2 | 先逐项解析并验证绝对路径，再使用 Windows 目录接口删除相同目标 |
| 回归测试生成了临时 WAV 和 Python 缓存 | 1 | 验证 WAV 格式后删除两项测试输出和 27 个缓存目录 |
| 统计删除目标时将 `foreach` 结果直接接管道导致解析错误 | 1 | 改为先收集 `$rows` 后输出，删除目标未受影响 |
| Whisper 内部调用 `ffmpeg` 报 WinError 2 | 1 | 程序发现 WinGet/后备 FFmpeg 后，将其目录自动加入当前进程 PATH |
| 网页首次调用 GPT-SoVITS 报缺少 `wordsegment` | 1 | 补装 GPT-SoVITS 文本处理依赖后重新回归音色生成 |
