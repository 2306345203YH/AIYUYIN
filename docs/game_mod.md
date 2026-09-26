# ChillChat：给《Chill with You Lo-Fi Story》接入 AI 语音对话

通过 BepInEx 插件在游戏内叠加一个聊天窗口，直接和游戏角色对话。**大脑**走 OpenAI 兼容 API（本地 Ollama 或任意 API Key 服务），**声音**走 AIyuyin 的 GPT-SoVITS 音色（`/api/tts` 接口）。全部本地运行。

## 已安装内容

游戏根目录（`D:\dowen\Chill.with.You.Lo-Fi.Story.v1.14.0\Chill with You Lo-Fi Story\`）：

- `winhttp.dll`、`doorstop_config.ini`、`BepInEx/`：BepInEx 5.4.23.2 x64 框架
- `BepInEx/plugins/ChillChat.dll`：聊天插件（源码在本仓库 `game_mod/ChillChat/`）

## 使用方法

1. 启动 AIyuyin 网页服务（提供音色）：`D:\AIyuyin\run_web_chat.bat`（用默认端口 8000 时插件无需改配置）；
2. 确保 Ollama 在运行（`ollama list` 有 `qwen3:8b`）；
3. 启动游戏，按 **F9** 打开/关闭聊天窗口；
4. 输入消息回车发送，角色文字回复后自动用绑定的音色朗读。

## 配置（`BepInEx/config/aiyuyin.chillchat.cfg`）

| 配置项 | 默认值 | 说明 |
|---|---|---|
| LLM/BaseUrl | `http://127.0.0.1:11434/v1` | OpenAI 兼容根地址；换在线服务填对应 URL |
| LLM/Model | `qwen3:8b` | 模型 ID |
| LLM/ApiKey | 空 | 本地 Ollama 留空；在线服务填 Key |
| LLM/SystemPrompt | 温柔邻家女孩人设 | 角色人设；qwen3 系列建议保留 `/no_think` 加速回复 |
| TTS/Enabled | `true` | 是否朗读 |
| TTS/BaseUrl | `http://127.0.0.1:8000` | AIyuyin 服务地址；端口顺延后需同步修改 |
| TTS/Voice | `aiyafala` | 音色名，可换 `changli`（config/voices.yaml 中定义） |

改完配置重启游戏生效。

## 从源码构建

```powershell
cd D:\AIyuyin\game_mod\ChillChat
dotnet build -c Release -p:GameDir="游戏根目录路径"
# 产物 bin\Release\ChillChat.dll 复制到 BepInEx\plugins\
```

## 工作原理

```text
F9 聊天窗(Unity IMGUI)
  └─ POST {LLM BaseUrl}/chat/completions   ← OpenAI 兼容（Ollama / 在线 Key 均可）
       └─ 回复文字
            └─ GET {AIyuyin}/api/tts?voice=…&text=…   ← GPT-SoVITS 合成 WAV
                 └─ UnityWebRequest 拉取 AudioClip → AudioSource 播放
```

插件加载日志位于 `BepInEx/LogOutput.log`（搜 `ChillChat`）。TTS 失败（例如 AIyuyin 未启动）只影响朗读，聊天不受影响。

## 移除

删除游戏目录下 `winhttp.dll`、`doorstop_config.ini`、`.doorstop_version`、`changelog.txt` 和 `BepInEx/` 即可完全还原原版游戏。
