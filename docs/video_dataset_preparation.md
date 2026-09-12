# 视频语音识别与数据切分

正式入口为 `app/prepare_voice_dataset.py`，快捷启动脚本为 `scripts/run_dataset_preparation.ps1`。它取代了 `legacy/scripts` 中的多版实验代码。

## 处理流程

```text
MP4/其他视频
→ FFmpeg 提取 16kHz 单声道 PCM
→ Whisper 或 Vosk 中文识别
→ 合并过短的相邻语句
→ 按时间戳切割 WAV
→ 繁体转简体和文本清理
→ filelist.txt + timeline.txt + manifest.json
```

程序会优先查找系统 `PATH`，其次查找 WinGet Links，最后使用 Python 环境内 `imageio-ffmpeg` 的后备程序。因此复制项目后，只要重新安装 Python 依赖，基础处理链路仍可发现 FFmpeg。

## Whisper 与 Vosk

| 引擎 | 优点 | 适合场景 |
|---|---|---|
| Whisper | 中文准确度较高，切分时间戳更细 | 正式制作训练数据，推荐 |
| Vosk | CPU 速度快、占用低、完全离线 | 快速预览、粗切分、低配置电脑 |

本项目默认使用本地 `models/asr/whisper/medium.pt`，不会重新下载 Whisper 模型。Vosk 默认使用 `models/asr/vosk_zh_small`。

## 常用命令

完整处理：

```powershell
.\scripts\run_dataset_preparation.ps1 data/raw/videos/aiyafala.mp4 `
  --engine whisper `
  --speaker aiyafala `
  --output-dir data/processed/aiyafala_whisper
```

仅处理视频中从第 60 秒开始的 30 秒：

```powershell
.\scripts\run_dataset_preparation.ps1 data/raw/videos/aiyafala.mp4 `
  --engine whisper `
  --speaker aiyafala `
  --start-seconds 60 `
  --duration-seconds 30 `
  --output-dir data/processed/aiyafala_preview
```

使用大型 Vosk 模型：

```powershell
.\scripts\run_dataset_preparation.ps1 data/raw/videos/changli.mp4 `
  --engine vosk `
  --model models/asr/vosk_zh_large `
  --speaker changli `
  --output-dir data/processed/changli_vosk_large
```

## 关键参数

- `--engine whisper|vosk`：识别引擎；
- `--speaker`：稳定的角色英文标识；
- `--prefix`：WAV 文件名前缀，默认与 speaker 相同；
- `--device auto|cpu|cuda`：Whisper 计算设备；
- `--min-duration`：默认 1 秒，低于该值时尝试与相邻语句合并；
- `--max-duration`：默认 15 秒，超出的片段不会丢弃，但会在 JSON 中标记；
- `--max-gap`：短片段合并允许的最大停顿，默认 0.35 秒；
- `--padding`：切片前后保留时间，默认 0.12 秒；
- `--start-seconds`、`--duration-seconds`：只处理视频的一部分；
- `--overwrite`：删除同一输出目录原有 `clips` 后重新生成；
- `--keep-work-audio`：保留标准化后的完整 WAV，便于排查问题。

## 输出与校对

自动识别不是最终标注。训练前应执行以下检查：

1. 听取每个 `clips/*.wav`，确认没有背景音乐过强、多人串音或截断；
2. 校对 `filelist.txt` 的文字，特别是角色名、专有名词和同音字；
3. 查看 `manifest.json` 中 `too_short`、`overlong` 为 `true` 的片段；
4. 删除无声、重复和明显识别错误的片段；
5. 校对完成后再把精选数据合并到 `data/voices/<speaker>` 或交给新的训练工程。

## 性能说明

当前环境已安装 PyTorch 2.13.0 CUDA 12.6 版并识别 RTX 2080 Ti。真实测试中，同一 10 秒视频片段的 Whisper Medium 核心解码耗时从 CPU 约 19 秒降到 GPU 约 11 秒；Vosk 处理 30 秒约耗时 10 秒（包含模型加载）。程序默认 `--device auto`，有可用 CUDA 时自动使用显卡，否则回退 CPU。
