"""HTTP bridge between the voice assistant and a local Ollama model."""

import os
import re

from flask import Flask, jsonify, request
from ollama import Client

app = Flask(__name__)
client = Client(host=os.environ.get("OLLAMA_HOST", "http://127.0.0.1:11434"))
MODEL_NAME = os.environ.get("OLLAMA_MODEL", "deepseek-r1:7b")


@app.get("/health")
def health():
    return jsonify({"status": "ok", "model": MODEL_NAME})


@app.post("/generate")
def generate_response():
    try:
        data = request.get_json(silent=True) or {}
        prompt = data.get("prompt", "").strip()
        if not prompt:
            return jsonify({"status": "error", "message": "prompt 不能为空"}), 400

        response = client.generate(
            model=MODEL_NAME,
            prompt=prompt,
            stream=True,
            options={
                "num_predict": int(data.get("max_tokens", 400)),
                "temperature": 0.7,
                "top_p": 0.9,
            },
        )
        full_response = "".join(str(chunk["response"]) for chunk in response)
        full_response = re.sub(r"<think>.*?</think>", "", full_response, flags=re.DOTALL)
        return jsonify({"status": "success", "response": full_response.strip()})
    except Exception as exc:
        return jsonify({"status": "error", "message": str(exc)}), 500


if __name__ == "__main__":
    app.run(
        host=os.environ.get("AIYUYIN_HOST", "127.0.0.1"),
        port=int(os.environ.get("AIYUYIN_PORT", "5000")),
    )
