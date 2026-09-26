# -*- coding: utf-8 -*-
"""Register the freshly trained game voice (alterego) into AIyuyin's voices.yaml."""
import json
from pathlib import Path

import yaml

AIYUYIN_ROOT = Path(__file__).resolve().parents[1]
PKG_ROOT = AIYUYIN_ROOT / "third_party" / "GPT-SoVITS-v2pro" / "GPT-SoVITS-v2pro-20250604"
DATASET_JSON = AIYUYIN_ROOT / "data" / "voices" / "game_girl" / "transcribed" / "dataset.json"
VOICE = "alterego"


def main() -> None:
    sovits = sorted((PKG_ROOT / "SoVITS_weights_v2").glob(f"{VOICE}_*.pth"))
    gpt = sorted((PKG_ROOT / "GPT_weights_v2").glob(f"{VOICE}*.ckpt"))
    if not sovits or not gpt:
        raise SystemExit(f"weights not found: {len(sovits)} sovits, {len(gpt)} gpt")
    sovits_path = (sovits[-1]).relative_to(AIYUYIN_ROOT).as_posix()
    gpt_path = (gpt[-1]).relative_to(AIYUYIN_ROOT).as_posix()

    data = json.loads(DATASET_JSON.read_text(encoding="utf-8"))
    ref = next(item for item in data if item["file"] == "Voice_AlterEgo_1_001.wav")
    prompt_text = ref["text"].strip()
    ref_rel = f"data/voices/game_girl/raw/{ref['file']}"

    config_path = AIYUYIN_ROOT / "config" / "voices.yaml"
    config = yaml.safe_load(config_path.read_text(encoding="utf-8"))
    config.setdefault("voices", {})[VOICE] = {
        "gpt_model": gpt_path,
        "sovits_model": sovits_path,
        "bert_model": "models/gpt_sovits/chinese-roberta-wwm-ext-large",
        "cnhubert_model": "models/gpt_sovits/chinese-hubert-base",
        "reference_audio": ref_rel,
        "prompt_text": prompt_text,
        "text_lang": "all_zh",
        "prompt_lang": "ja",
    }
    config_path.write_text(yaml.dump(config, allow_unicode=True, sort_keys=False), encoding="utf-8")
    print(f"registered '{VOICE}':\n  gpt={gpt_path}\n  sovits={sovits_path}\n  ref={ref_rel}\n  prompt={prompt_text}")


if __name__ == "__main__":
    main()
