# MMD 舞台功能设计方案：对话驱动的角色模型动作

目标：在网页语音聊天中显示角色的 MMD 模型（.pmx），对话时有对应的行为动作（手势、表情、待机呼吸）和口型同步，功能**可控开启**（全局开关 + 角色级绑定）。

## 1. 总体架构

```text
消息流: LLM 回复文本 ──► 后端情绪判定 ──► motion 指令随消息下发
音频流: TTS WAV ──► 前端 WebAudio 实时分析 ──► 口型 morph 驱动

前端(浏览器)                          后端(FastAPI)
┌─────────────────────────┐          ┌──────────────────────────┐
│ MMDStage (three.js)      │          │ GET /api/mmd/models      │
│  ├ PMX 模型渲染          │  HTTP    │  扫描 data/mmd/models/    │
│  ├ VMD 动作状态机         │ ◄──────► │ GET /api/mmd/motions     │
│  ├ 口型(实时能量→morph)   │          │ characters 表 +3 字段     │
│  └ 眨眼/呼吸 idle 循环    │          │ 消息 API 附带 motion 字段 │
└─────────────────────────┘          └──────────────────────────┘
```

渲染完全在浏览器端完成（three.js + MMDLoader），**不需要 GPU 服务器**；后端只提供模型/动作清单和情绪判定。

## 2. 资源管理

```text
data/mmd/                    # 不入 git（模型版权+体积）
├─ models/<model_name>/      # 一个模型一个目录
│  ├ model.pmx               # 主模型（含 .pmd 兼容）
│  ├ *.png / *.sph / *.tga   # 贴图，保持相对路径结构
│  └ thumb.jpg               # 角色档案选择用的缩略图（可选）
└─ motions/                  # 通用动作库（跨模型可复用，同名骨骼标准）
   ├ idle.vmd  greet.vmd  nod.vmd  shake.vmd
   ├ happy.vmd  sad.vmd  angry.vmd  thinking.vmd
   └ ...
```

- 后端 `StaticFiles` 挂载 `/mmd/ → data/mmd/`，浏览器直接拉取；
- `GET /api/mmd/models` 扫描目录返回 `{id, name, thumb, file}` 清单；`motions` 同理；
- MMD 模型几乎都有作者使用规约（多数仅限个人展示），README 注明"用户自行放置模型并遵守原作规约"，仓库不分发任何模型。

## 3. 数据库与设置（可控开关的三层设计）

`characters` 表新增字段（ALTER TABLE，沿用现有迁移模式）：

| 字段 | 类型/默认 | 说明 |
|---|---|---|
| `mmd_model` | TEXT DEFAULT '' | 绑定的模型目录名；**空 = 未绑定 = 该角色不显示模型**（第一层：角色级开关） |
| `mmd_scale` | REAL DEFAULT 0.08 | 模型缩放（PMX 单位差异大） |
| `mmd_motion_map` | TEXT DEFAULT '' | JSON：`{"happy":"happy","sad":"sad",...}` 动作映射，空则用默认映射 |

- **第二层（全局开关）**：设置页新增「MMD 舞台」开关，存 localStorage（纯前端偏好，不动数据库）；关闭时不加载 three.js，不请求模型；
- **第三层（会话内显隐）**：聊天区舞台角落一个眼睛按钮，临时隐藏/显示，不销毁 WebGL 上下文。
- `/api/characters` 的 POST/PUT 扩展这三个字段；角色档案页新增「舞台模型」下拉框（列出 `/api/mmd/models`）。

## 4. 前端：MMDStage 组件

新增 `web/src/MMDStage.tsx`，与 `main.tsx` 解耦：

- **懒加载**：three.js（约 600KB gzip）用 `import()` 动态加载，仅在功能开启时下载，不影响现有页面首屏和未开启用户的流量；固定 three 版本（MMDLoader 对 three 版本敏感，锁 `three@0.1xx` 记入 package.json）；
- **布局**：聊天区右侧成员区在开启时从头像列表切换为 3D 舞台（可折叠）；移动端置于消息区顶部横条；
- **只渲染当前说话的角色**：多人模式（依次对话）时按音频播放顺序切换显示，切换做淡入淡出。

### 4.1 渲染循环与状态机

```text
IDLE（待机循环: idle.vmd + 眨眼定时器(2-6s随机) + 呼吸 morph）
  │ 消息开始播放（该角色）
  ▼
SPEAKING（口型实时驱动 + 情绪手势: motion_map[emotion].vmd 播一次后接 idle 混合）
  │ 播放结束
  ▼
回 IDLE
```

- 骨骼动画（VMD）与面部 morph（口型/眨眼）**分层驱动、互不干扰**；
- VMD 之间无自带混合，手写 0.3s 姿态线性插值过渡（记录切换前一帧各骨骼四元数，向目标动作首帧 lerp），避免动作硬切。

### 4.2 口型同步（两期实现）

- **M1 实时方案（零后端改动）**：播放 WAV 用 WebAudio `AnalyserNode`，每帧取频谱能量与共振峰粗判（a/e/i/o/u 五个频段），映射到 PMX 口型 morph（あa、いi、うu、えe、おo）+ 张嘴度（あ2 类 morph 按能量缩放）。延迟极低，效果够聊天场景使用；
- **M3 离线对齐（精修）**：后端合成 WAV 时用 librosa 提取共振峰时间轴生成 viseme 轨道 JSON，随消息接口下发，前端按时间轴精确驱动。适合做高质量录制/展示场景。

## 5. 情绪判定（决定触发哪个动作）

递进三级，MVP 用第 1 级：

1. **规则版（M1）**：回复文本关键词/标点匹配（"哈哈/呵呵→happy"、"抱歉/对不起→sad"、问号多→thinking，默认 idle）——零成本、无延迟；
2. **LLM 标注版（M2）**：角色 system prompt 追加"回复末尾以 `[emotion:xx]` 结尾"，后端解析后从展示文本中剥离，情绪标签存入 messages 表新字段 `emotion`；
3. **本地分类版（备选）**：Ollama qwen3:8b 单独发一次 5 token 以内的分类请求——仅当 1、2 效果不佳时启用（多一次 LLM 往返，延迟敏感）。

情绪标签同时驱动动作（motion_map）和可选的 TTS 情绪参数（为将来 IndexTTS2/CosyVoice3 情绪接口预留）。

## 6. 后端改动清单

- `web_app.py`：
  - 挂载 `/mmd` 静态目录（`data/mmd`），启动时自动建目录；
  - `GET /api/mmd/models`、`GET /api/mmd/motions`（扫描返回清单）；
  - characters 表迁移 +3 字段；`/api/characters` 读写扩展；
  - messages 表加 `emotion TEXT DEFAULT ''`（M2 启用，M1 可先建列）；
  - 发消息响应/`GET messages` 附带 emotion 字段。
- `data/mmd/`、`data/mmd/**` 加入 `.gitignore`（`data/raw` 同款模式 + .gitkeep）。

## 7. 分期实施

| 阶段 | 内容 | 验收标准 |
|---|---|---|
| **M1（MVP）** | three.js 集成、加载用户放置的 1 个 PMX、IDLE+眨眼+实时口型、三层开关、角色绑定模型 | 开启后对话有呼吸/眨眼/口型；关闭后与现在完全一致、首屏无 three.js 加载 |
| **M2** | 8 个内置 VMD 动作库、规则情绪判定、动作 crossfade、说话角色切换 | 不同情绪的回复触发不同手势，动作衔接无跳变 |
| **M3** | LLM 情绪标注、离线口型对齐、动作映射编辑（角色档案里拖拽分配） | 长文本情绪起伏时动作随之变化；口型与语音逐词对齐 |

## 8. 风险与对策

- **three 版本兼容**：MMDLoader 位于 examples addons，API 随版本变动，package.json 锁死版本；
- **PMX 贴图路径大小写/中文**：Windows 开发正常、部署到其他系统会断链——加载器内做路径规范化；中文模型名统一转拼音/英文目录名（沿用项目命名规范）；
- **性能**：中等精度 PMX（5–15 万面）在集显浏览器可 60fps；同屏只渲染 1 个模型；低端设备可全局关掉（开关设计的初衷之一）；
- **物理演算**（裙摆/头发）：three 的 MMD 物理支持有限，选择模型时优先带刚体物理简单的，或在 M2 后评估 ammo.js 集成；
- **版权**：所有 PMX/VMD 由用户自行导入，界面和 README 提示遵守模型作者规约。
