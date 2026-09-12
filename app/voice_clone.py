"""Generate speech with a configured GPT-SoVITS voice profile."""

from __future__ import annotations

import argparse
import gc
import os
import sys
import threading
from pathlib import Path

import soundfile as sf
import numpy as np
import yaml

PROJECT_ROOT = Path(__file__).resolve().parents[1]
CORE_ROOT = PROJECT_ROOT / "src" / "gpt_sovits"
sys.path.insert(0, str(CORE_ROOT))
os.environ.setdefault("AIYUYIN_PROJECT_ROOT", str(PROJECT_ROOT))

DEFAULT_CONFIG = PROJECT_ROOT / "config" / "voices.yaml"
_RUNTIME_LOCK = threading.RLock()
_RUNTIME: "VoiceTTSRuntime | None" = None


def _project_path(value: str | Path) -> Path:
    path = Path(value)
    return path if path.is_absolute() else PROJECT_ROOT / path


def load_voice_profile(name: str, config_path: Path = DEFAULT_CONFIG) -> dict:
    with config_path.open("r", encoding="utf-8") as handle:
        config = yaml.safe_load(handle)
    try:
        profile = config["voices"][name]
    except KeyError as exc:
        available = ", ".join(sorted(config.get("voices", {})))
        raise ValueError(f"未知音色 {name!r}，可用音色：{available}") from exc
    return profile


class VoiceTTSRuntime:
    """Keep shared GPT-SoVITS models resident and switch only voice weights."""

    def __init__(self, paths: dict[str, Path], device: str):
        import torch
        from TTS_infer_pack.TTS import TTS

        self.torch = torch
        self.device = device
        self.gpt_path = paths["gpt"]
        self.sovits_path = paths["sovits"]
        configs = {
            "version": "v2",
            "custom": {
                "device": device,
                "is_half": device == "cuda",
                "t2s_weights_path": str(self.gpt_path),
                "vits_weights_path": str(self.sovits_path),
                "bert_base_path": str(paths["bert"]),
                "cnhuhbert_base_path": str(paths["cnhubert"]),
            },
        }
        self.tts = TTS(configs)

    def switch_voice(self, paths: dict[str, Path]) -> None:
        if paths["gpt"] == self.gpt_path and paths["sovits"] == self.sovits_path:
            return

        # Loading new weights while the old voice is still on the GPU creates a
        # large temporary memory peak on 11 GB cards. Release only the two
        # voice-specific models; BERT and HuBERT remain resident.
        self.tts.t2s_model = None
        self.tts.vits_model = None
        self.tts.prompt_cache = {
            "ref_audio_path": None,
            "prompt_semantic": None,
            "refer_spec": [],
            "prompt_text": None,
            "prompt_lang": None,
            "phones": None,
            "bert_features": None,
            "norm_text": None,
            "aux_ref_audio_paths": [],
        }
        gc.collect()
        if self.device == "cuda":
            self.torch.cuda.empty_cache()

        self.tts.init_t2s_weights(str(paths["gpt"]))
        self.tts.init_vits_weights(str(paths["sovits"]))
        self.gpt_path = paths["gpt"]
        self.sovits_path = paths["sovits"]

    def run(self, paths: dict[str, Path], prompt_text: str, text: str):
        from TTS_infer_pack.text_segmentation_method import get_method

        self.switch_voice(paths)
        self.tts.set_ref_audio(str(paths["reference"]))
        chunks = get_method("cut_safe")(text).splitlines()
        if not chunks:
            raise ValueError("没有可合成的文本片段")

        inputs = {
            "text": "",
            "text_lang": "all_zh",
            "prompt_lang": "all_zh",
            "ref_audio_path": str(paths["reference"]),
            "prompt_text": prompt_text,
            "text_split_method": "cut0",
            "return_fragment": False,
            "batch_size": 1,
            "split_bucket": False,
            "fragment_interval": 0.4,
            "speed_factor": 1.0,
            "parallel_infer": False,
            "serial_vits": True,
        }
        sampling_rate = 0
        audio_fragments = []
        for chunk in chunks:
            inputs["text"] = chunk
            sampling_rate, fragment = next(self.tts.run(inputs))
            audio_fragments.append(fragment)
        return sampling_rate, np.concatenate(audio_fragments)


def _get_runtime(paths: dict[str, Path], device: str) -> VoiceTTSRuntime:
    global _RUNTIME
    if _RUNTIME is None or _RUNTIME.device != device:
        _RUNTIME = VoiceTTSRuntime(paths, device)
    return _RUNTIME


def generate_tts_audio(
    gpt_path: str | Path,
    sovits_path: str | Path,
    bert_path: str | Path,
    cnhubert_path: str | Path,
    ref_wav_path: str | Path,
    prompt_text: str,
    text: str,
    output_path: str | Path,
    device: str = "auto",
) -> Path:
    """Generate one WAV while reusing the resident GPT-SoVITS runtime."""
    import torch

    selected_device = "cuda" if device == "auto" and torch.cuda.is_available() else device
    if selected_device == "auto":
        selected_device = "cpu"
    if selected_device == "cuda" and not torch.cuda.is_available():
        raise RuntimeError("当前 PyTorch 不支持 CUDA，请改用 --device cpu 或安装 CUDA 版 PyTorch。")

    paths = {
        "gpt": _project_path(gpt_path),
        "sovits": _project_path(sovits_path),
        "bert": _project_path(bert_path),
        "cnhubert": _project_path(cnhubert_path),
        "reference": _project_path(ref_wav_path),
    }
    missing = [str(path) for path in paths.values() if not path.exists()]
    if missing:
        raise FileNotFoundError("缺少模型或参考音频：\n" + "\n".join(missing))

    with _RUNTIME_LOCK:
        runtime = _get_runtime(paths, selected_device)
        sampling_rate, audio_data = runtime.run(paths, prompt_text, text)

    resolved_output = _project_path(output_path)
    resolved_output.parent.mkdir(parents=True, exist_ok=True)
    sf.write(resolved_output, audio_data, sampling_rate)
    print(f"音频已生成：{resolved_output}")
    return resolved_output


def main() -> None:
    parser = argparse.ArgumentParser(description="使用本地 GPT-SoVITS 音色生成中文语音")
    parser.add_argument("--voice", default="aiyafala", help="config/voices.yaml 中的音色名称")
    parser.add_argument("--text", default="大家好，今天天气很好。要来一起吃饭吗？")
    parser.add_argument("--output", default="outputs/generated/voice_clone.wav")
    parser.add_argument("--device", choices=("auto", "cpu", "cuda"), default="auto")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    args = parser.parse_args()

    profile = load_voice_profile(args.voice, _project_path(args.config))
    generate_tts_audio(
        profile["gpt_model"],
        profile["sovits_model"],
        profile["bert_model"],
        profile["cnhubert_model"],
        profile["reference_audio"],
        profile["prompt_text"],
        args.text,
        args.output,
        args.device,
    )


if __name__ == "__main__":
    main()
