from ollama import Client
# from fastapi import FastAPI
client = Client()
def generate_response(prompt: str):
    # 使用Ollama生成回复
    response = client.generate(
        model="deepseek-r1:7b",
        prompt=f"<|User|>{prompt}<|Assistant|> [直接回答，无需思考过程]",
        stream=True,
        # max_length=200,
        # temperature=0.7
        options={
        "num_predict": 400,  # 相当于 max_tokens
        "temperature": 0.7,  # 控制随机性
        "top_p": 0.9,  # 核采样参数
        # "stop": ["\n", "User:"],  # 停止生成的条件
        }
    )
    log = 0
    zongjie = ''
    for chunk in response:
        huid = str(chunk['response'])
        # print(huid)
        # print(chunk['response'], end="", flush=True)
        if huid == '<think>' or huid == '</think>':
            log += 1
        # print(log)
        if log == 2:
            zongjie += huid
    print(zongjie[10:])
    return {"response": zongjie[10:]}

txt = '什么是python'
# print(dir(client))  # 查看 client 对象的所有方法和属性
# print(client.generate.__doc__)  # 查看 generate 方法的文档
data =  generate_response(txt)

print(data)