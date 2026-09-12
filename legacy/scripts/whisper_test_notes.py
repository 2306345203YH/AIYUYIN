# import whisper
# model = whisper.load_model("./model/medium.pt")
# print(whisper.available_models())
# import whisper
# model = whisper.load_model("./model/medium.pt")
# result = model.transcribe("output2/changli_004.wav", language="zh", verbose=True)
# print(result["text"])
# from g2pM import G2pM
# g2p = G2pM()
# print(g2p("你好，我是长离。"))
# 检测 TensorFlow 是否能调用 GPU
import tensorflow as tf
 
print("TensorFlow 版本：", tf.__version__)
print("TensorFlow 是否支持 GPU：", tf.test.is_built_with_cuda())
print("TensorFlow 可用的 GPU：", tf.config.list_physical_devices('GPU'))
 
# 检测 PyTorch 是否能调用 GPU
import torch
#PyTorch 版本： 1.11.0+cpu
print("\nPyTorch 版本：", torch.__version__)
print("PyTorch 是否支持 GPU：", torch.cuda.is_available())
print("PyTorch 可用的 GPU 数量：", torch.cuda.device_count())
print("PyTorch 当前 GPU 名称：", torch.cuda.get_device_name(0))
print("PyTorch 当前 GPU 内存：", torch.cuda.get_device_properties(0).total_memory / (1024.0 ** 3), "GB")