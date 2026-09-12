# 历史工程归档

此目录保存旧实验和训练资产，不是当前日常运行入口。当前入口位于项目根目录的 `app`，运行方法见根目录 `README.md`。

## 内容

- `sovits4`：旧 SoVITS4 工程；
- `coqui_tts`：Coqui TTS 0.14.3 源码快照；
- `scripts`：原有多版本实验脚本，已按用途和版本重命名；
- `datasets/changli_processing`：长离数据处理的历史阶段；
- `requirements`：旧入口或数据处理所需的补充依赖。

## 使用原则

1. 不要把旧依赖直接装进根目录 `.venv`，避免破坏已验证的 GPT-SoVITS 环境。
2. 旧脚本中的部分路径来自整理前的目录结构。运行前先根据 `docs/cleanup_report.md` 的映射修改输入、输出与模型路径。
3. 如需继续开发某一旧实验，应先把它提升为 `app` 入口或 `src` 模块，再补充配置和文档；不要直接新建 `main4.py`。

## 已删除的旧训练工程

`legacy/vits` 及依赖它的 `legacy_vits_inference.py` 已按用户要求永久删除。以后训练将使用其他训练工程；角色数据、原始素材和当前 GPT-SoVITS 音色模型仍保留在规范目录中。
