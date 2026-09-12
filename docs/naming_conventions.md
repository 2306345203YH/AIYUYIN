# 文件与目录命名规范

本规范适用于今后新增或修改的文件。目标是让名称能直接说明用途，避免再次出现 `main2.py`、`cs.py`、`output4` 这类无法判断内容的名字。

## 通用规则

1. 代码、目录和配置键统一使用英文小写 `snake_case`。
2. 名称应表达“对象 + 用途”，例如 `voice_clone.py`、`tts_runtime.yaml`。
3. 不使用空格、中文、拼音缩写和无含义缩写。
4. 当前文件不在名称中添加版本号；历史归档才使用两位版本号 `v01`、`v02`。
5. 不把日期作为源码名称；生成结果需要追踪时可用 `YYYYMMDD_HHMMSS`。
6. 模型、数据和配置中的同一音色必须使用完全相同的稳定标识。

## 各类文件

| 类型 | 规则 | 示例 |
|---|---|---|
| Python 模块 | 小写蛇形，说明职责 | `voice_assistant.py` |
| PowerShell 脚本 | 动词开头或 `run_` 开头 | `run_voice_clone.ps1` |
| YAML/JSON 配置 | 说明配置对象 | `voices.yaml`、`tts_runtime.yaml` |
| 音色目录 | 稳定英文标识 | `models/voices/changli` |
| 参考音频 | `<voice_name>_<序号>.wav` | `changli_004.wav` |
| 生成音频 | `<voice_name>_<用途>.wav` | `aiyafala_demo.wav` |
| 数据清单 | 固定为 `filelist.txt` | `data/voices/changli/filelist.txt` |
| 历史脚本 | `<用途>_vNN_<方法>.py` | `prepare_dataset_v05_whisper.py` |
| 文档 | 小写蛇形 Markdown | `cleanup_report.md` |

## 目录职责

- `app`：用户直接运行的入口，不放实验草稿。
- `src`：入口依赖的可复用核心代码。
- `config`：可修改的运行参数，不放模型文件。
- `models`：模型和权重，不放训练数据。
- `data/raw`：不可替代的原始素材。
- `data/processed`：由视频自动识别和切分、等待人工校对的数据集。
- `data/voices`：按音色整理的参考音频与标注。
- `outputs/generated`：可安全重新生成的输出。
- `examples`：需要长期保留的少量示例。
- `legacy`：历史代码、训练工程和旧版中间数据。
- `docs`：当前文档；过时文档进入 `docs/legacy`。

## 音色命名的一致性

新增 `voice_name` 时，应同时建立：

```text
models/voices/<voice_name>/
data/voices/<voice_name>/
config/voices.yaml -> voices.<voice_name>
```

不要在一个位置使用中文名、另一个位置使用拼音，也不要随意改变已经发布的音色标识。

## 禁止继续使用的名称

- `main.py`、`main2.py`、`cs.py`：无法表达职责；
- `new.py`、`final.py`、`final2.py`：很快会失去含义；
- `output1`、`output2`：无法判断来源和阶段；
- `test.py`：容易与测试框架冲突，应写明测试对象；
- 带空格或中文的源码文件名：会增加命令行和跨平台处理成本。
