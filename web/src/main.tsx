import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Character = {
  id: string;
  name: string;
  avatar: string;
  color: string;
  system_prompt: string;
  llm_connection_id: string;
  llm_connection_name: string;
  llm_kind: string;
  llm_default_model: string;
  llm_model: string;
  voice_profile_id: string;
  voice_name: string;
  voice_provider: string;
  voice_key: string;
  default_emotion: string;
  has_api_key: boolean;
};

type Connection = {
  id: string;
  name: string;
  kind: string;
  base_url: string;
  model: string;
  api_key_last4: string;
  has_api_key: boolean;
  temperature: number;
  max_tokens: number;
};

type VoiceProfile = {
  id: string;
  name: string;
  provider: string;
  voice_key: string;
};

type Conversation = {
  id: string;
  title: string;
  mode: string;
  updated_at: string;
};

type Message = {
  id: string;
  conversation_id: string;
  role: "user" | "assistant";
  character_id?: string | null;
  character_name?: string | null;
  avatar?: string | null;
  color?: string | null;
  content: string;
  status: string;
  source: string;
  audio_url?: string;
  speech_mode?: "audio" | "browser";
  error_message?: string;
};

type Schedule = {
  id: string;
  name: string;
  conversation_id: string;
  character_id: string;
  trigger_type: string;
  trigger_value: string;
  prompt: string;
  action_mode: string;
  enabled: number;
  auto_tts: number;
  last_run_at: string;
  last_error: string;
};

type Tab = "characters" | "connections" | "schedules";

const emotionOptions = ["auto", "平静", "开心", "悲伤", "愤怒", "惊讶", "温柔", "严肃"];
const freeLlmPresets = [
  { name: "OpenRouter 免费模型", base_url: "https://openrouter.ai/api/v1", model: "openrouter/free" },
  { name: "Groq 免费层", base_url: "https://api.groq.com/openai/v1", model: "qwen/qwen3.6-27b" },
  { name: "Gemini 免费层", base_url: "https://generativelanguage.googleapis.com/v1beta/openai/", model: "gemini-3.7-flash" },
];

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  if (!response.ok) {
    const body = await response.text();
    try {
      const parsed = JSON.parse(body) as { detail?: string };
      throw new Error(parsed.detail || body || `请求失败：${response.status}`);
    } catch (error) {
      if (error instanceof SyntaxError) throw new Error(body || `请求失败：${response.status}`);
      throw error;
    }
  }
  return response.json() as Promise<T>;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [voices, setVoices] = useState<VoiceProfile[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [conversationId, setConversationId] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("specified");
  const [selectedCharacterIds, setSelectedCharacterIds] = useState<string[]>(["aiyafala"]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("characters");
  const [generating, setGenerating] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordingBusy, setRecordingBusy] = useState(false);
  const [notice, setNotice] = useState("欢迎来到角色会客厅");
  const [autoPlay, setAutoPlay] = useState(true);
  const [audioLoading, setAudioLoading] = useState<string[]>([]);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const endRef = useRef<HTMLDivElement | null>(null);
  const playbackQueueRef = useRef<Promise<void>>(Promise.resolve());

  const refreshMessages = useCallback(async (id: string) => {
    if (!id) return;
    const data = await requestJson<Message[]>(`/api/conversations/${id}/messages`);
    setMessages(data);
  }, []);

  const refreshBootstrap = useCallback(async () => {
    const data = await requestJson<{
      characters: Character[];
      connections: Connection[];
      voices: VoiceProfile[];
      conversations: Conversation[];
      schedules: Schedule[];
      default_conversation_id: string;
    }>("/api/bootstrap");
    setCharacters(data.characters);
    setConnections(data.connections);
    setVoices(data.voices);
    setConversations(data.conversations);
    setSchedules(data.schedules);
    setConversationId((current) => current || data.default_conversation_id);
  }, []);

  useEffect(() => {
    refreshBootstrap().catch((error) => setNotice(`初始化失败：${error.message}`));
  }, [refreshBootstrap]);

  useEffect(() => {
    if (conversationId) refreshMessages(conversationId).catch((error) => setNotice(error.message));
  }, [conversationId, refreshMessages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, generating]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!generating && conversationId) refreshMessages(conversationId).catch(() => undefined);
      refreshBootstrap().catch(() => undefined);
    }, 15000);
    return () => window.clearInterval(timer);
  }, [conversationId, generating, refreshBootstrap, refreshMessages]);

  const activeConversation = conversations.find((item) => item.id === conversationId);
  const activeCharacters = useMemo(
    () => characters.filter((character) => selectedCharacterIds.includes(character.id)),
    [characters, selectedCharacterIds],
  );

  function toggleCharacter(id: string) {
    setSelectedCharacterIds((current) => {
      if (mode === "specified") return [id];
      if (current.includes(id)) return current.filter((item) => item !== id);
      return [...current, id];
    });
  }

  function enqueuePlayback(play: () => Promise<void>) {
    playbackQueueRef.current = playbackQueueRef.current
      .catch(() => undefined)
      .then(play);
  }

  function playAudioInOrder(url: string) {
    enqueuePlayback(() => new Promise<void>((resolve) => {
      const audio = new Audio(url);
      audio.addEventListener("ended", () => resolve(), { once: true });
      audio.addEventListener("error", () => resolve(), { once: true });
      audio.play().catch(() => {
        setNotice("浏览器阻止了自动播放，请点击消息上的播放按钮。");
        resolve();
      });
    }));
  }

  function speakInOrder(text: string, lang: string) {
    enqueuePlayback(() => new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang || "zh-CN";
      const matchingVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith(utterance.lang.toLowerCase().slice(0, 2)));
      if (matchingVoice) utterance.voice = matchingVoice;
      utterance.addEventListener("end", () => resolve(), { once: true });
      utterance.addEventListener("error", () => resolve(), { once: true });
      window.speechSynthesis.speak(utterance);
    }));
  }

  async function createConversation() {
    try {
      const title = `新会话 · ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
      const created = await requestJson<Conversation>("/api/conversations", {
        method: "POST",
        body: JSON.stringify({ title, character_ids: characters.map((item) => item.id), mode }),
      });
      setConversations((current) => [created, ...current]);
      setConversationId(created.id);
      setMessages([]);
      setNotice("已创建新会话");
    } catch (error) {
      setNotice(`创建会话失败：${(error as Error).message}`);
    }
  }

  async function synthesize(messageId: string, shouldPlay = autoPlay) {
    setAudioLoading((current) => [...current, messageId]);
    try {
      const result = await requestJson<{ mode: "audio" | "browser"; audio_url?: string; text?: string; lang?: string }>(`/api/messages/${messageId}/synthesize`, { method: "POST" });
      if (result.mode === "browser") {
        setMessages((current) => current.map((message) => (message.id === messageId ? { ...message, speech_mode: "browser", status: "ready", error_message: "" } : message)));
        if (shouldPlay && result.text) {
          speakInOrder(result.text, result.lang || "zh-CN");
        }
      } else if (result.audio_url) {
        setMessages((current) => current.map((message) => (message.id === messageId ? { ...message, audio_url: result.audio_url, speech_mode: "audio", status: "ready", error_message: "" } : message)));
      }
      if (shouldPlay && result.mode === "audio" && result.audio_url) {
        playAudioInOrder(result.audio_url);
      }
    } catch (error) {
      const message = (error as Error).message;
      setMessages((current) => current.map((item) => (item.id === messageId ? { ...item, status: "audio_error", error_message: message } : item)));
      setNotice(`语音合成失败：${message}`);
    } finally {
      setAudioLoading((current) => current.filter((id) => id !== messageId));
    }
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || !conversationId || generating) return;
    setInput("");
    setGenerating(true);
    setNotice("角色正在思考并准备语音…");
    let failed = false;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversation_id: conversationId, text, character_ids: selectedCharacterIds, mode }),
      });
      if (!response.ok || !response.body) throw new Error(await response.text());
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const blocks = buffer.split("\n\n");
        buffer = blocks.pop() || "";
        for (const block of blocks) {
          const eventLine = block.split("\n").find((line) => line.startsWith("event:"));
          const dataLine = block.split("\n").find((line) => line.startsWith("data:"));
          if (!eventLine || !dataLine) continue;
          const eventName = eventLine.slice(6).trim();
          const payload = JSON.parse(dataLine.slice(5).trim()) as Record<string, string>;
          if (eventName === "user") {
            setMessages((current) => [...current, { ...payload, role: "user", status: "ready", source: "manual" } as Message]);
          } else if (eventName === "character_start") {
            const character = characters.find((item) => item.id === payload.character_id);
            setMessages((current) => [
              ...current,
              {
                id: payload.id,
                conversation_id: conversationId,
                role: "assistant",
                character_id: payload.character_id,
                character_name: character?.name || payload.name,
                avatar: character?.avatar,
                color: character?.color,
                content: "",
                status: "generating",
                source: "manual",
              },
            ]);
          } else if (eventName === "token") {
            setMessages((current) => current.map((message) => (message.id === payload.id ? { ...message, content: `${message.content}${payload.content}` } : message)));
          } else if (eventName === "character_done") {
            setMessages((current) => current.map((message) => (message.id === payload.id ? { ...message, content: payload.content, status: "ready" } : message)));
            void synthesize(payload.id, autoPlay);
          } else if (eventName === "error") {
            failed = true;
            setNotice(payload.message || "模型处理失败");
          }
        }
        if (done) break;
      }
    } catch (error) {
      failed = true;
      setNotice(`对话失败：${(error as Error).message}`);
    } finally {
      setGenerating(false);
      if (!failed) setNotice("对话完成");
    }
  }

  async function startRecording() {
    if (recordingBusy) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        const form = new FormData();
        form.append("file", blob, "browser-recording.webm");
        setRecordingBusy(true);
        setNotice("正在识别语音…");
        try {
          const response = await fetch("/api/asr", { method: "POST", body: form });
          const result = (await response.json()) as { text?: string; detail?: string };
          if (!response.ok) throw new Error(result.detail || "识别失败");
          setInput((current) => `${current}${result.text || ""}`);
          setNotice(result.text ? "识别完成，可以修改后发送" : "没有识别到清晰语音");
        } catch (error) {
          setNotice(`语音识别失败：${(error as Error).message}`);
        } finally {
          setRecordingBusy(false);
        }
      };
      recorderRef.current = recorder;
      recorder.start();
      setRecording(true);
      setNotice("正在录音，再次点击结束");
    } catch (error) {
      setNotice(`无法使用麦克风：${(error as Error).message}`);
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    setRecording(false);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark">✦</div>
          <div>
            <div className="eyebrow">AIYUYIN / VOICE LOUNGE</div>
            <h1>角色会客厅</h1>
          </div>
        </div>
        <div className="topbar-actions">
          <span className="connection-dot"><i /> 本地服务在线</span>
          <button className="icon-button" title="打开设置" onClick={() => setSettingsOpen((current) => !current)}>⚙</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="conversation-sidebar">
          <div className="sidebar-heading">
            <span>会话</span>
            <button className="text-button" onClick={createConversation}>＋ 新建</button>
          </div>
          <div className="conversation-list">
            {conversations.map((conversation) => (
              <button key={conversation.id} className={`conversation-item ${conversation.id === conversationId ? "active" : ""}`} onClick={() => setConversationId(conversation.id)}>
                <span className="conversation-icon">◌</span>
                <span>
                  <strong>{conversation.title}</strong>
                  <small>{conversation.id === conversationId ? "正在使用" : "本地保存"}</small>
                </span>
              </button>
            ))}
          </div>
          <div className="sidebar-footer">
            <div className="storage-note"><span className="mini-pulse" /> SQLite 会话已保存</div>
            <button className="settings-link" onClick={() => { setSettingsOpen(true); setActiveTab("schedules"); }}>◷ 定时任务</button>
          </div>
        </aside>

        <main className="chat-panel">
          <div className="chat-header">
            <div>
              <div className="eyebrow">{activeConversation?.title || "LOCAL CONVERSATION"}</div>
              <h2>今天想和谁聊聊？</h2>
            </div>
            <div className="active-character-stack">
              {activeCharacters.map((character) => <span key={character.id} className="mini-avatar" style={{ background: character.color }}>{character.avatar}</span>)}
              <span className="active-count">{activeCharacters.length || 0} 位角色</span>
            </div>
          </div>

          <div className="message-scroller">
            {messages.length === 0 && (
              <div className="welcome-card">
                <div className="welcome-orbit"><span>艾</span><span>长</span><span>AI</span></div>
                <div className="eyebrow">A QUIET PLACE FOR MANY VOICES</div>
                <h3>让不同的角色，拥有自己的声音。</h3>
                <p>选择角色后输入文字或使用麦克风。第一版默认使用演示对话，可在右侧设置中绑定网页大模型 API。</p>
                <div className="welcome-actions">
                  <button className="soft-button" onClick={() => { setSettingsOpen(true); setActiveTab("characters"); }}>配置角色</button>
                  <button className="soft-button muted" onClick={() => setInput("请用一句话介绍一下你自己。")}>填入示例</button>
                </div>
              </div>
            )}
            {messages.map((message) => <MessageBubble key={message.id} message={message} character={characters.find((item) => item.id === message.character_id)} loading={audioLoading.includes(message.id)} onSynthesize={() => synthesize(message.id, true)} />)}
            <div ref={endRef} />
          </div>

          <div className="composer-area">
            <div className="composer-toolbar">
              <div className="character-picker">
                {characters.map((character) => (
                  <button key={character.id} className={`character-chip ${selectedCharacterIds.includes(character.id) ? "selected" : ""}`} onClick={() => toggleCharacter(character.id)}>
                    <span className="chip-avatar" style={{ background: character.color }}>{character.avatar}</span>{character.name}
                  </button>
                ))}
              </div>
              <select value={mode} onChange={(event) => { const nextMode = event.target.value; setMode(nextMode); if (nextMode === "specified") setSelectedCharacterIds((current) => [current[0] || characters[0]?.id].filter(Boolean)); else setSelectedCharacterIds(characters.map((character) => character.id)); }}>
                <option value="specified">指定角色</option>
                <option value="round_robin">依次对话</option>
                <option value="independent">独立回答</option>
              </select>
            </div>
            <div className="composer-box">
              <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void sendMessage(); } }} placeholder="输入消息，或点击麦克风说话…" rows={2} />
              <div className="composer-actions">
                <button className={`record-button ${recording ? "recording" : ""}`} onClick={recording ? stopRecording : startRecording} disabled={recordingBusy} title="录音">{recording ? "■ 结束录音" : recordingBusy ? "识别中…" : "◉ 语音输入"}</button>
                <div className="send-group">
                  <label className="autoplay-toggle"><input type="checkbox" checked={autoPlay} onChange={(event) => setAutoPlay(event.target.checked)} /><span />自动播放</label>
                  <button className="send-button" onClick={() => void sendMessage()} disabled={!input.trim() || generating}>{generating ? "生成中…" : "发送  ↗"}</button>
                </div>
              </div>
            </div>
            <div className="composer-hint"><span>{notice}</span><span>Enter 发送 · Shift + Enter 换行</span></div>
          </div>
        </main>

        <aside className="role-rail">
          <div className="rail-heading"><span>本次会话角色</span><button className="icon-button small" onClick={() => { setSettingsOpen(true); setActiveTab("characters"); }}>＋</button></div>
          <div className="role-list">
            {characters.map((character) => <RoleCard key={character.id} character={character} active={selectedCharacterIds.includes(character.id)} onClick={() => toggleCharacter(character.id)} />)}
          </div>
          <div className="rail-tip"><span className="tip-icon">⌁</span><p>每个角色可以绑定不同的网页模型和自己的音色。</p></div>
        </aside>
      </div>

      {settingsOpen && <SettingsPanel tab={activeTab} setTab={setActiveTab} characters={characters} setCharacters={setCharacters} connections={connections} setConnections={setConnections} voices={voices} schedules={schedules} setSchedules={setSchedules} conversations={conversations} onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}

function RoleCard({ character, active, onClick }: { character: Character; active: boolean; onClick: () => void }) {
  return <button className={`role-card ${active ? "active" : ""}`} onClick={onClick}>
    <span className="role-avatar" style={{ background: character.color }}>{character.avatar}</span>
    <span className="role-copy"><strong>{character.name}</strong><small>{character.voice_name}</small></span>
    <span className={`role-status ${active ? "online" : ""}`} />
  </button>;
}

function MessageBubble({ message, character, loading, onSynthesize }: { message: Message; character?: Character; loading: boolean; onSynthesize: () => void }) {
  const isUser = message.role === "user";
  const displayName = isUser ? "你" : message.character_name || character?.name || "AI";
  return <article className={`message-row ${isUser ? "user" : "assistant"}`}>
    {!isUser && <span className="message-avatar" style={{ background: message.color || character?.color || "#8c7ad8" }}>{message.avatar || character?.avatar || "AI"}</span>}
    <div className="message-content-wrap">
      <div className="message-meta"><span>{displayName}</span><time>{message.source === "schedule" ? "定时消息" : "刚刚"}</time></div>
      <div className={`message-bubble ${message.status === "error" ? "error" : ""}`}>
        {message.content || <span className="typing-dots"><i /><i /><i /></span>}
      </div>
      {!isUser && ["ready", "audio_error"].includes(message.status) && <div className="message-actions">
        {message.audio_url ? <audio controls preload="none" src={message.audio_url} /> : <button className="message-action" onClick={onSynthesize} disabled={loading}>{loading ? "合成中…" : message.speech_mode === "browser" ? "↻ 重新朗读" : character?.voice_provider === "browser" ? "▶ 免费浏览器朗读" : "♫ 生成语音"}</button>}
        {message.audio_url && <button className="message-action" onClick={onSynthesize} disabled={loading}>{loading ? "重新合成中…" : "↻ 重播/重合成"}</button>}
        {message.status === "audio_error" && <span className="audio-error">合成失败，可点击重试</span>}
      </div>}
    </div>
  </article>;
}

function SettingsPanel({ tab, setTab, characters, setCharacters, connections, setConnections, voices, schedules, setSchedules, conversations, onClose }: {
  tab: Tab;
  setTab: (tab: Tab) => void;
  characters: Character[];
  setCharacters: (value: Character[]) => void;
  connections: Connection[];
  setConnections: (value: Connection[]) => void;
  voices: VoiceProfile[];
  schedules: Schedule[];
  setSchedules: (value: Schedule[]) => void;
  conversations: Conversation[];
  onClose: () => void;
}) {
  return <div className="settings-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <aside className="settings-panel">
      <div className="settings-header"><div><div className="eyebrow">CONTROL ROOM</div><h2>设置</h2></div><button className="icon-button" onClick={onClose}>×</button></div>
      <nav className="settings-tabs">
        <button className={tab === "characters" ? "active" : ""} onClick={() => setTab("characters")}>角色档案</button>
        <button className={tab === "connections" ? "active" : ""} onClick={() => setTab("connections")}>AI 服务</button>
        <button className={tab === "schedules" ? "active" : ""} onClick={() => setTab("schedules")}>定时任务</button>
      </nav>
      <div className="settings-content">
        {tab === "characters" && <CharacterSettings characters={characters} setCharacters={setCharacters} connections={connections} voices={voices} />}
        {tab === "connections" && <ConnectionSettings connections={connections} setConnections={setConnections} />}
        {tab === "schedules" && <ScheduleSettings schedules={schedules} setSchedules={setSchedules} characters={characters} conversations={conversations} />}
      </div>
    </aside>
  </div>;
}

function CharacterSettings({ characters, setCharacters, connections, voices }: { characters: Character[]; setCharacters: (value: Character[]) => void; connections: Connection[]; voices: VoiceProfile[] }) {
  const [selectedId, setSelectedId] = useState(characters[0]?.id || "");
  const selected = characters.find((item) => item.id === selectedId) || characters[0];
  const [form, setForm] = useState({ name: "", avatar: "AI", color: "#b987f5", system_prompt: "", llm_connection_id: "demo", llm_model: "", voice_profile_id: "aiyafala", default_emotion: "auto" });
  useEffect(() => {
    if (selected) setForm({ name: selected.name, avatar: selected.avatar, color: selected.color, system_prompt: selected.system_prompt, llm_connection_id: selected.llm_connection_id, llm_model: selected.llm_model, voice_profile_id: selected.voice_profile_id, default_emotion: selected.default_emotion });
  }, [selected?.id]);
  if (!selected) return <EmptyState text="还没有角色" />;
  async function save() {
    try {
      const updated = await requestJson<Character>(`/api/characters/${selected.id}`, { method: "PUT", body: JSON.stringify(form) });
      setCharacters(characters.map((item) => item.id === updated.id ? updated : item));
    } catch (error) { window.alert(`保存角色失败：${(error as Error).message}`); }
  }
  return <div className="settings-section">
    <div className="section-intro"><div><h3>角色档案</h3><p>每个角色独立绑定“人格 + 对话模型 + 音色”。</p></div><button className="tiny-button" onClick={() => window.alert("第一版先编辑已有角色；新增角色接口已预留。")}>＋ 新角色</button></div>
    <div className="settings-character-list">{characters.map((character) => <button key={character.id} className={`settings-character ${character.id === selected.id ? "active" : ""}`} onClick={() => setSelectedId(character.id)}><span className="chip-avatar" style={{ background: character.color }}>{character.avatar}</span><span>{character.name}</span><small>{character.voice_name}</small></button>)}</div>
    <label>显示名称<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
    <div className="form-grid"><label>头像文字<input maxLength={4} value={form.avatar} onChange={(event) => setForm({ ...form, avatar: event.target.value })} /></label><label>主题色<input type="color" value={form.color} onChange={(event) => setForm({ ...form, color: event.target.value })} /></label></div>
    <label>绑定对话服务<select value={form.llm_connection_id} onChange={(event) => setForm({ ...form, llm_connection_id: event.target.value })}>{connections.map((connection) => <option key={connection.id} value={connection.id}>{connection.name}{connection.has_api_key ? " · 已配置 Key" : ""}</option>)}</select></label>
    <label>模型名（留空使用服务默认）<input value={form.llm_model} onChange={(event) => setForm({ ...form, llm_model: event.target.value })} placeholder="例如 deepseek-chat" /></label>
    <label>绑定音色<select value={form.voice_profile_id} onChange={(event) => setForm({ ...form, voice_profile_id: event.target.value })}>{voices.map((voice) => <option key={voice.id} value={voice.id}>{voice.name}</option>)}</select></label>
    <label>默认情绪<select value={form.default_emotion} onChange={(event) => setForm({ ...form, default_emotion: event.target.value })}>{emotionOptions.map((emotion) => <option key={emotion} value={emotion}>{emotion === "auto" ? "自动" : emotion}</option>)}</select></label>
    <label>人物设定<textarea rows={5} value={form.system_prompt} onChange={(event) => setForm({ ...form, system_prompt: event.target.value })} /></label>
    <button className="primary-wide" onClick={() => void save()}>保存角色配置</button>
  </div>;
}

function ConnectionSettings({ connections, setConnections }: { connections: Connection[]; setConnections: (value: Connection[]) => void }) {
  const [selectedId, setSelectedId] = useState(connections[0]?.id || "");
  const selected = connections.find((item) => item.id === selectedId);
  const [form, setForm] = useState({ name: "", kind: "openai", base_url: "", model: "", api_key: "", temperature: 0.7, max_tokens: 600 });
  useEffect(() => {
    if (selected) setForm({ name: selected.name, kind: selected.kind, base_url: selected.base_url, model: selected.model, api_key: "", temperature: selected.temperature, max_tokens: selected.max_tokens });
  }, [selected?.id]);
  async function save() {
    try {
      const url = selected ? `/api/connections/${selected.id}` : "/api/connections";
      const method = selected ? "PUT" : "POST";
      const saved = await requestJson<Connection>(url, { method, body: JSON.stringify(form) });
      setConnections(selected ? connections.map((item) => item.id === saved.id ? saved : item) : [...connections, saved]);
      setSelectedId(saved.id);
      setForm({ ...form, api_key: "" });
    } catch (error) { window.alert(`保存 AI 服务失败：${(error as Error).message}`); }
  }
  function applyFreePreset(preset: (typeof freeLlmPresets)[number]) {
    setSelectedId("");
    setForm({ name: preset.name, kind: "openai", base_url: preset.base_url, model: preset.model, api_key: "", temperature: 0.7, max_tokens: 1000 });
  }
  return <div className="settings-section">
    <div className="section-intro"><div><h3>AI 服务连接</h3><p>API Key 只提交到本地后端，不返回到网页。</p></div><button className="tiny-button" onClick={() => { setSelectedId(""); setForm({ name: "新服务", kind: "openai", base_url: "https://api.openai.com/v1", model: "", api_key: "", temperature: 0.7, max_tokens: 600 }); }}>＋ 新服务</button></div>
    <div className="free-presets"><div><strong>免费模型模板</strong><small>仍需到对应官网注册自己的免费 Key</small></div><div className="preset-buttons">{freeLlmPresets.map((preset) => <button key={preset.name} type="button" onClick={() => applyFreePreset(preset)}>{preset.name}</button>)}</div></div>
    <div className="settings-character-list connection-list">{connections.map((connection) => <button key={connection.id} className={`settings-character ${connection.id === selectedId ? "active" : ""}`} onClick={() => setSelectedId(connection.id)}><span className="service-icon">⌁</span><span>{connection.name}</span><small>{connection.has_api_key ? `Key ···${connection.api_key_last4}` : connection.kind === "mock" ? "演示" : "未配置 Key"}</small></button>)}</div>
    <label>服务名称<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
    <label>API Base URL<input value={form.base_url} onChange={(event) => setForm({ ...form, base_url: event.target.value })} placeholder="https://api.example.com/v1" /></label>
    <label>模型 ID（必须是服务实际提供的名称）<input value={form.model} onChange={(event) => setForm({ ...form, model: event.target.value })} placeholder="例如 grok-4.6 / deepseek-chat" /></label>
    <label>API Key（留空保持原 Key）<input type="password" value={form.api_key} onChange={(event) => setForm({ ...form, api_key: event.target.value })} placeholder={selected?.has_api_key ? "已配置，输入新 Key 可替换" : "sk-…"} /></label>
    <div className="form-grid"><label>温度<input type="number" min="0" max="2" step="0.1" value={form.temperature} onChange={(event) => setForm({ ...form, temperature: Number(event.target.value) })} /></label><label>最大 Tokens<input type="number" min="1" max="8192" value={form.max_tokens} onChange={(event) => setForm({ ...form, max_tokens: Number(event.target.value) })} /></label></div>
    <button className="primary-wide" onClick={() => void save()}>保存服务连接</button>
    <div className="security-note">本地服务默认只监听 127.0.0.1。不要把 API Key 写进前端代码、聊天记录或普通配置文件。</div>
  </div>;
}

function ScheduleSettings({ schedules, setSchedules, characters, conversations }: { schedules: Schedule[]; setSchedules: (value: Schedule[]) => void; characters: Character[]; conversations: Conversation[] }) {
  const [form, setForm] = useState({ name: "每日问候", conversation_id: conversations[0]?.id || "", character_id: characters[0]?.id || "aiyafala", trigger_type: "daily", trigger_value: "09:00", prompt: "请自然地和我打个招呼。", action_mode: "llm", auto_tts: true });
  useEffect(() => { if (!form.conversation_id && conversations[0]) setForm((current) => ({ ...current, conversation_id: conversations[0].id })); }, [conversations, form.conversation_id]);
  async function create() {
    try {
      const result = await requestJson<Schedule>("/api/schedules", { method: "POST", body: JSON.stringify({ ...form, enabled: true, auto_play: false }) });
      setSchedules([result, ...schedules]);
    } catch (error) { window.alert(`创建任务失败：${(error as Error).message}`); }
  }
  async function remove(id: string) {
    await requestJson(`/api/schedules/${id}`, { method: "DELETE" });
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  }
  return <div className="settings-section">
    <div className="section-intro"><div><h3>定时任务</h3><p>后端在线时自动生成消息和角色语音。</p></div></div>
    <label>任务名称<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
    <label>目标会话<select value={form.conversation_id} onChange={(event) => setForm({ ...form, conversation_id: event.target.value })}>{conversations.map((conversation) => <option key={conversation.id} value={conversation.id}>{conversation.title}</option>)}</select></label>
    <label>发送角色<select value={form.character_id} onChange={(event) => setForm({ ...form, character_id: event.target.value })}>{characters.map((character) => <option key={character.id} value={character.id}>{character.name}</option>)}</select></label>
    <div className="form-grid"><label>计划类型<select value={form.trigger_type} onChange={(event) => setForm({ ...form, trigger_type: event.target.value, trigger_value: event.target.value === "daily" ? "09:00" : event.target.value === "interval" ? "3600" : new Date(Date.now() + 3600000).toISOString() })}><option value="daily">每天</option><option value="interval">间隔秒数</option><option value="once">一次性</option></select></label><label>计划值<input value={form.trigger_value} onChange={(event) => setForm({ ...form, trigger_value: event.target.value })} placeholder="09:00 / 3600" /></label></div>
    <label>任务内容<textarea rows={4} value={form.prompt} onChange={(event) => setForm({ ...form, prompt: event.target.value })} /></label>
    <label className="checkbox-line"><input type="checkbox" checked={form.action_mode === "fixed"} onChange={(event) => setForm({ ...form, action_mode: event.target.checked ? "fixed" : "llm" })} />直接发送固定文字（不调用 LLM）</label>
    <label className="checkbox-line"><input type="checkbox" checked={form.auto_tts} onChange={(event) => setForm({ ...form, auto_tts: event.target.checked })} />自动生成角色语音</label>
    <button className="primary-wide" onClick={() => void create()}>添加定时任务</button>
    <div className="schedule-list">{schedules.map((schedule) => <div className="schedule-item" key={schedule.id}><div><strong>{schedule.name}</strong><small>{characters.find((character) => character.id === schedule.character_id)?.name || "角色"} · {schedule.trigger_type} {schedule.trigger_value}</small>{schedule.last_error && <em>{schedule.last_error}</em>}</div><button className="delete-button" onClick={() => void remove(schedule.id)}>删除</button></div>)}</div>
  </div>;
}

function EmptyState({ text }: { text: string }) { return <div className="empty-state">{text}</div>; }

createRoot(document.getElementById("root")!).render(<App />);
