// ChillChat - in-game AI voice companion overlay for "Chill with You Lo-Fi Story".
// BepInEx 5 plugin: press F9 in game to open the chat, replies come from any
// OpenAI-compatible endpoint (Ollama local or an API-key service) and are spoken
// with AIyuyin's GPT-SoVITS voices via GET /api/tts.
//
// NOTE: the game ships an anti-tamper module that destroys foreign components
// living on the BepInEx chainloader object. All work therefore runs on our own
// DontDestroyOnLoad GameObject with a watchdog that re-creates the driver if it
// ever disappears.
using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using BepInEx;
using BepInEx.Configuration;
using BepInEx.Logging;
using UnityEngine;

namespace ChillChat
{
    [BepInPlugin(PluginGuid, PluginName, PluginVersion)]
    public class ChillChatPlugin : BaseUnityPlugin
    {
        public const string PluginGuid = "aiyuyin.chillchat";
        public const string PluginName = "ChillChat";
        public const string PluginVersion = "1.0.1";

        private void Awake()
        {
            var settings = new ChillSettings(Config);
            var host = new GameObject("ChillChatDriver");
            UnityEngine.Object.DontDestroyOnLoad(host);
            host.hideFlags = HideFlags.HideAndDontSave;
            var driver = host.AddComponent<ChillChatDriver>();
            driver.Initialize(settings, Logger);
            Logger.LogInfo("ChillChat loaded. F9 toggles the chat overlay. LLM=" + settings.LlmBaseUrl.Value + " model=" + settings.LlmModel.Value);
        }
    }

    /// <summary>Typed view over the BepInEx config file.</summary>
    public class ChillSettings
    {
        public ConfigEntry<string> LlmBaseUrl;
        public ConfigEntry<string> LlmModel;
        public ConfigEntry<string> LlmApiKey;
        public ConfigEntry<string> SystemPrompt;
        public ConfigEntry<float> Temperature;
        public ConfigEntry<int> MaxTokens;
        public ConfigEntry<int> HistoryTurns;
        public ConfigEntry<bool> TtsEnabled;
        public ConfigEntry<string> TtsBaseUrl;
        public ConfigEntry<string> TtsVoice;
        public ConfigEntry<bool> VisibleOnStart;

        public ConfigEntry<string> CharacterName;

        public ChillSettings(ConfigFile file)
        {
            LlmBaseUrl = file.Bind("LLM", "BaseUrl", "http://127.0.0.1:11434/v1", "OpenAI 兼容 API 根地址，Ollama 填 http://127.0.0.1:11434/v1");
            LlmModel = file.Bind("LLM", "Model", "qwen3:8b", "模型 ID，例如 qwen3:8b / deepseek-chat / grok-4.6");
            LlmApiKey = file.Bind("LLM", "ApiKey", "", "API Key，本地 Ollama 留空");
            SystemPrompt = file.Bind("LLM", "SystemPrompt",
                "你是游戏里陪伴玩家的邻家女孩，性格温柔慵懒，喜欢 lo-fi 音乐、月亮和窗外的城市夜景。用轻松的口语聊天，回复保持简短自然，一般不超过三句话。/no_think",
                "角色人设（qwen3 系列建议结尾保留 /no_think 以跳过思考加速回复）");
            Temperature = file.Bind("LLM", "Temperature", 0.8f, "采样温度");
            MaxTokens = file.Bind("LLM", "MaxTokens", 500, "单次回复最大 token");
            HistoryTurns = file.Bind("LLM", "HistoryTurns", 10, "携带的历史对话轮数");
            TtsEnabled = file.Bind("TTS", "Enabled", true, "是否用 AIyuyin GPT-SoVITS 音色朗读回复");
            TtsBaseUrl = file.Bind("TTS", "BaseUrl", "http://127.0.0.1:8000", "AIyuyin 网页服务地址（run_web_chat.bat 启动）");
            TtsVoice = file.Bind("TTS", "Voice", "alterego", "config/voices.yaml 中的音色名：alterego（游戏角色）/ aiyafala / changli");
            VisibleOnStart = file.Bind("UI", "VisibleOnStart", true, "游戏启动后自动显示聊天窗口");
            CharacterName = file.Bind("UI", "CharacterName", "Alter Ego", "对话框上的角色名牌文字");
        }
    }

    /// <summary>Runs the actual overlay; lives on its own hidden GameObject.</summary>
    public class ChillChatDriver : MonoBehaviour
    {
        private ChillSettings _settings;
        private ManualLogSource _log;
        private readonly List<string[]> _history = new List<string[]>(); // [role, text]
        private readonly ConcurrentQueue<Action> _mainThread = new ConcurrentQueue<Action>();
        private string _input = "";
        private string _status = "按 Enter 发送 · F9 开关窗口";
        private bool _busy;
        private bool _visible = true;
        private Vector2 _scroll;
        private bool _logOpen;
        private AudioSource _voiceSource;
        private float _lastToggleAt;
        private bool _loggedFirstUpdate;

        public void Initialize(ChillSettings settings, ManualLogSource log)
        {
            _settings = settings;
            _log = log;
            _visible = settings.VisibleOnStart.Value;
        }

        private void Awake()
        {
            var go = new GameObject("ChillChatVoiceSource");
            if (transform.parent != null) go.transform.SetParent(transform, false);
            UnityEngine.Object.DontDestroyOnLoad(go);
            _voiceSource = go.AddComponent<AudioSource>();
            _voiceSource.playOnAwake = false;
        }

        private IEnumerator Start()
        {
            _log.LogInfo("ChillChat driver alive. Screen=" + Screen.width + "x" + Screen.height);
            // Some titles pause the player when unfocused; keep our overlay ticking.
            Application.runInBackground = true;
            yield break;
        }

        private void Update()
        {
            if (!_loggedFirstUpdate)
            {
                _loggedFirstUpdate = true;
                _log.LogInfo("ChillChat driver Update running.");
            }
            try
            {
                if (Input.GetKeyDown(KeyCode.F9) && Time.unscaledTime - _lastToggleAt > 0.3f)
                {
                    _lastToggleAt = Time.unscaledTime;
                    Toggle();
                }
            }
            catch (Exception exc)
            {
                _log.LogWarning("ChillChat legacy Input unavailable: " + exc.Message);
            }
            while (_mainThread.TryDequeue(out var action)) action();
        }

        private void OnGUI()
        {
            var ev = Event.current;
            if (ev != null && ev.type == EventType.KeyDown && ev.keyCode == KeyCode.F9
                && Time.unscaledTime - _lastToggleAt > 0.3f)
            {
                _lastToggleAt = Time.unscaledTime;
                Toggle();
                ev.Use();
            }
            if (!_visible) return;
            DrawDialogueBox();
            if (_logOpen) DrawLogWindow();
        }

        private void Toggle()
        {
            _visible = !_visible;
            _log.LogInfo("ChillChat F9 toggled, visible=" + _visible);
        }

        /// <summary>VN-style bottom dialogue box that blends with the game's own UI.</summary>
        private void DrawDialogueBox()
        {
            var width = Mathf.Min(Screen.width * 0.86f, 900f);
            var height = _logOpen ? 150f : 190f;
            var box = new Rect((Screen.width - width) / 2f, Screen.height - height - 18f, width, height);
            var panel = new GUIStyle(GUI.skin.box);
            panel.normal.background = SolidTex(new Color(0.07f, 0.08f, 0.13f, 0.9f));
            GUI.Box(box, GUIContent.none, panel);

            // Name plate
            var plateRect = new Rect(box.x + 14f, box.y - 15f, 150f, 30f);
            var plate = new GUIStyle(GUI.skin.box);
            plate.normal.background = SolidTex(new Color(0.97f, 0.68f, 0.48f, 0.95f));
            GUI.Box(plateRect, GUIContent.none, plate);
            var plateLabel = new GUIStyle(GUI.skin.label)
            {
                alignment = TextAnchor.MiddleCenter,
                fontSize = 14,
                fontStyle = UnityEngine.FontStyle.Bold,
            };
            plateLabel.normal.textColor = new Color(0.16f, 0.12f, 0.1f);
            GUI.Label(new Rect(plateRect.x, plateRect.y + 2f, plateRect.width, plateRect.height), _settings.CharacterName.Value, plateLabel);

            GUILayout.BeginArea(new Rect(box.x + 14f, box.y + 22f, box.width - 28f, box.height - 36f));

            // Latest dialogue line (or typing indicator)
            var lineStyle = new GUIStyle(GUI.skin.label) { wordWrap = true, richText = true, fontSize = 15 };
            lineStyle.normal.textColor = new Color(0.94f, 0.94f, 0.98f);
            var lastReply = FindLast(_history, t => t[0] == "assistant");
            var lastUser = FindLast(_history, t => t[0] == "user");
            if (_busy)
            {
                GUILayout.Label("…" + _status, lineStyle, GUILayout.Height(66f));
            }
            else if (lastReply != null)
            {
                GUILayout.Label(lastReply[1], lineStyle, GUILayout.Height(66f));
            }
            else
            {
                var hint = new GUIStyle(lineStyle);
                hint.normal.textColor = new Color(0.62f, 0.66f, 0.78f);
                GUILayout.Label("（在这里和她说说话。F9 关闭窗口）", hint, GUILayout.Height(66f));
            }

            GUILayout.Space(4);
            GUILayout.BeginHorizontal();
            GUI.SetNextControlName("ChillChatInput");
            _input = GUILayout.TextField(_input, GUILayout.Height(30f));
            GUI.FocusControl("ChillChatInput");
            var sendStyle = new GUIStyle(GUI.skin.button) { fontSize = 13, fontStyle = UnityEngine.FontStyle.Bold };
            if (GUILayout.Button(_busy ? "…" : "发送", sendStyle, GUILayout.Width(72f), GUILayout.Height(30f)))
            {
                SendCurrent();
            }
            if (GUILayout.Button(_logOpen ? "收起" : "记录", new GUIStyle(GUI.skin.button) { fontSize = 11 }, GUILayout.Width(52f), GUILayout.Height(30f)))
            {
                _logOpen = !_logOpen;
            }
            GUILayout.EndHorizontal();
            GUILayout.EndArea();

            if (lastUser != null && lastReply != null && ReferenceEquals(lastUser, FindLast(_history, t => t[0] == "user")))
            {
                // keep the player's own line visible as a subtle status under the name plate
                var who = new GUIStyle(GUI.skin.label) { fontSize = 10 };
                who.normal.textColor = new Color(0.6f, 0.64f, 0.76f);
                GUI.Label(new Rect(box.x + box.width - 320f, box.y - 14f, 300f, 18f), "你：" + Shorten(lastUser[1], 36), who);
            }
        }

        /// <summary>Scrollable history window, positioned above the dialogue box.</summary>
        private void DrawLogWindow()
        {
            var width = Mathf.Min(Screen.width * 0.86f, 900f);
            var rect = new Rect((Screen.width - width) / 2f, Screen.height - 150f - 18f - 240f, width, 240f);
            var panel = new GUIStyle(GUI.skin.box);
            panel.normal.background = SolidTex(new Color(0.07f, 0.08f, 0.13f, 0.88f));
            GUI.Box(rect, GUIContent.none, panel);
            GUILayout.BeginArea(new Rect(rect.x + 12f, rect.y + 10f, rect.width - 24f, rect.height - 20f));
            _scroll = GUILayout.BeginScrollView(_scroll);
            foreach (var turn in _history)
            {
                var style = new GUIStyle(GUI.skin.label) { wordWrap = true, richText = true, fontSize = 12 };
                var name = turn[0] == "user" ? "<color=#f7ad7b>你</color>" : "<color=#8fd8c8>" + _settings.CharacterName.Value + "</color>";
                GUILayout.Label(name + "  " + turn[1].Replace("\n", " "), style);
            }
            GUILayout.EndScrollView();
            GUILayout.EndArea();
        }

        private static string[] FindLast(List<string[]> history, Func<string[], bool> match)
        {
            for (var i = history.Count - 1; i >= 0; i--)
            {
                if (match(history[i])) return history[i];
            }
            return null;
        }

        private static Texture2D _solidTex;

        private static Texture2D SolidTex(Color color)
        {
            if (_solidTex == null)
            {
                _solidTex = new Texture2D(4, 4, TextureFormat.RGBA32, false);
                var pixels = new Color[16];
                for (var i = 0; i < pixels.Length; i++) pixels[i] = Color.white;
                _solidTex.SetPixels(pixels);
                _solidTex.Apply();
            }
            var tex = new Texture2D(4, 4, TextureFormat.RGBA32, false);
            var px = new Color[16];
            for (var i = 0; i < px.Length; i++) px[i] = color;
            tex.SetPixels(px);
            tex.Apply();
            return tex;
        }

        private void SendCurrent()
        {
            var text = (_input ?? "").Trim();
            if (text.Length == 0 || _busy) return;
            _input = "";
            _history.Add(new[] { "user", text });
            _busy = true;
            _status = "正在思考…";
            var turns = SnapshotTurns();
            ThreadPool.QueueUserWorkItem(_ =>
            {
                var reply = RequestLlm(turns);
                _mainThread.Enqueue(() =>
                {
                    _busy = false;
                    if (reply.error != null)
                    {
                        _status = reply.error;
                        _history.Add(new[] { "assistant", "[出错了] " + reply.error });
                        return;
                    }
                    _history.Add(new[] { "assistant", reply.text });
                    _status = _settings.TtsEnabled.Value ? "正在说话…" : "按 Enter 发送";
                    if (_settings.TtsEnabled.Value)
                    {
                        StartCoroutine(PlayTts(reply.text));
                    }
                });
            });
        }

        private List<string[]> SnapshotTurns()
        {
            var turns = new List<string[]>();
            var skip = Math.Max(0, _history.Count - _settings.HistoryTurns.Value * 2);
            for (var i = skip; i < _history.Count; i++) turns.Add(_history[i]);
            return turns;
        }

        private sealed class LlmReply
        {
            public string text;
            public string error;
        }

        private LlmReply RequestLlm(List<string[]> turns)
        {
            try
            {
                var sb = new StringBuilder();
                sb.Append("{\"model\":\"").Append(EscapeJson(_settings.LlmModel.Value)).Append("\",\"stream\":false");
                sb.Append(",\"temperature\":").Append(_settings.Temperature.Value.ToString("0.0", System.Globalization.CultureInfo.InvariantCulture));
                sb.Append(",\"max_tokens\":").Append(_settings.MaxTokens.Value);
                sb.Append(",\"messages\":[");
                sb.Append("{\"role\":\"system\",\"content\":\"").Append(EscapeJson(_settings.SystemPrompt.Value)).Append("\"}");
                foreach (var turn in turns)
                {
                    sb.Append(",{\"role\":\"").Append(turn[0]).Append("\",\"content\":\"").Append(EscapeJson(turn[1])).Append("\"}");
                }
                sb.Append("]}");
                var body = Encoding.UTF8.GetBytes(sb.ToString());

                var url = _settings.LlmBaseUrl.Value.TrimEnd('/') + "/chat/completions";
                var request = (HttpWebRequest)WebRequest.Create(url);
                request.Method = "POST";
                request.ContentType = "application/json";
                request.Timeout = 300000;
                request.ReadWriteTimeout = 300000;
                if (!string.IsNullOrEmpty(_settings.LlmApiKey.Value))
                {
                    request.Headers["Authorization"] = "Bearer " + _settings.LlmApiKey.Value;
                }
                using (var stream = request.GetRequestStream())
                {
                    stream.Write(body, 0, body.Length);
                }
                using (var response = request.GetResponse())
                using (var reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8))
                {
                    var json = reader.ReadToEnd();
                    var content = ExtractLastString(json, "content");
                    if (string.IsNullOrEmpty(content)) return new LlmReply { error = "回复为空" };
                    return new LlmReply { text = content.Trim() };
                }
            }
            catch (WebException exc)
            {
                var message = exc.Message;
                try
                {
                    using (var reader = new StreamReader(exc.Response.GetResponseStream(), Encoding.UTF8))
                    {
                        message = reader.ReadToEnd();
                    }
                }
                catch
                {
                    // keep exception message
                }
                return new LlmReply { error = "LLM 请求失败: " + Shorten(message, 220) };
            }
            catch (Exception exc)
            {
                return new LlmReply { error = "LLM 请求失败: " + exc.Message };
            }
        }

        private IEnumerator PlayTts(string text)
        {
            var url = _settings.TtsBaseUrl.Value.TrimEnd('/') + "/api/tts?voice=" + Uri.EscapeDataString(_settings.TtsVoice.Value)
                      + "&text=" + Uri.EscapeDataString(Shorten(text, 480));
            using (var web = UnityEngine.Networking.UnityWebRequestMultimedia.GetAudioClip(url, AudioType.WAV))
            {
                web.timeout = 300;
                yield return web.SendWebRequest();
                if (web.result != UnityEngine.Networking.UnityWebRequest.Result.Success)
                {
                    _status = "语音失败: " + web.error;
                    _log.LogWarning("TTS failed: " + web.error + " " + web.downloadHandler.text);
                    yield break;
                }
                var clip = UnityEngine.Networking.DownloadHandlerAudioClip.GetContent(web);
                if (clip == null)
                {
                    _status = "语音解码失败";
                    yield break;
                }
                _voiceSource.Stop();
                _voiceSource.clip = clip;
                _voiceSource.Play();
                _status = "♪ 正在说话";
            }
        }

        private static string Shorten(string value, int max)
        {
            if (string.IsNullOrEmpty(value)) return "";
            value = value.Replace("\n", " ");
            return value.Length <= max ? value : value.Substring(0, max) + "…";
        }

        private static string EscapeJson(string value)
        {
            var sb = new StringBuilder(value.Length + 16);
            foreach (var c in value)
            {
                switch (c)
                {
                    case '\\': sb.Append("\\\\"); break;
                    case '"': sb.Append("\\\""); break;
                    case '\n': sb.Append("\\n"); break;
                    case '\r': sb.Append("\\r"); break;
                    case '\t': sb.Append("\\t"); break;
                    default:
                        if (c < ' ') sb.Append("\\u").Append(((int)c).ToString("x4"));
                        else sb.Append(c);
                        break;
                }
            }
            return sb.ToString();
        }

        /// <summary>Escape-aware scan for the value of the last "key" string in a JSON document.</summary>
        private static string ExtractLastString(string json, string key)
        {
            if (string.IsNullOrEmpty(json)) return null;
            var needle = "\"" + key + "\"";
            var at = json.LastIndexOf(needle, StringComparison.Ordinal);
            if (at < 0) return null;
            var i = at + needle.Length;
            while (i < json.Length && (json[i] == ' ' || json[i] == ':')) i++;
            if (i >= json.Length || json[i] != '"') return null;
            i++;
            var sb = new StringBuilder();
            while (i < json.Length)
            {
                var c = json[i];
                if (c == '\\')
                {
                    i++;
                    if (i >= json.Length) break;
                    var esc = json[i];
                    switch (esc)
                    {
                        case 'n': sb.Append('\n'); break;
                        case 't': sb.Append('\t'); break;
                        case 'r': sb.Append('\r'); break;
                        case 'u':
                            if (i + 4 < json.Length)
                            {
                                sb.Append((char)Convert.ToInt32(json.Substring(i + 1, 4), 16));
                                i += 4;
                            }
                            break;
                        default: sb.Append(esc); break;
                    }
                }
                else if (c == '"')
                {
                    return sb.ToString();
                }
                else
                {
                    sb.Append(c);
                }
                i++;
            }
            return sb.ToString();
        }
    }
}
