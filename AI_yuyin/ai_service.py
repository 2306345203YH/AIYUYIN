from flask import Flask, request, jsonify
from ollama import Client

app = Flask(__name__)
client = Client()

@app.route('/generate', methods=['POST'])
def generate_response():
    try:
        data = request.json
        prompt = data['prompt']
        max_tokens = data.get('max_tokens', 400)
        
        response = client.generate(
            model="deepseek-r1:7b",
            prompt=prompt,
            stream=True,
            options={
                "num_predict": max_tokens,
                "temperature": 0.7,
                "top_p": 0.9
            }
        )
        
        full_response = ""
        in_think_block = False
        
        for chunk in response:
            text = str(chunk['response'])
            if text == '<think>':
                in_think_block = True
                continue
            elif text == '</think>':
                in_think_block = False
                continue
                
            if not in_think_block:
                full_response += text
        
        return jsonify({
            "status": "success",
            "response": full_response.strip()
        })
        
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)