import pyttsx3

# 初始化 TTS 引擎
engine = pyttsx3.init()

# 设置语速（默认为 200，可调节）
engine.setProperty('rate', 150)

# 设置音量（0.0 到 1.0 之间）
engine.setProperty('volume', 1)

# 获取系统中可用的语音列表
voices = engine.getProperty('voices')
# print(voices)
# 选择语音（例如选择女性语音）
engine.setProperty('voice', voices[0].id)

# 输入文本并生成语音
text = "你好我是长离"
engine.say(text)
engine.save_to_file(text, 'output.wav')
engine.runAndWait()
# 播放语音
engine.runAndWait()