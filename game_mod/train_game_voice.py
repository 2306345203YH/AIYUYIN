# -*- coding: utf-8 -*-
"""Headless GPT-SoVITS v2Pro fine-tuning driver for the Chill with You game voice.

Trains a SoVITS + GPT pair on the extracted game voice lines using the official
integrated package (third_party/GPT-SoVITS-v2pro), mirroring the exact pipeline
its WebUI runs: 1a text -> 1b hubert/wav32k (+sv) -> 1c semantic -> s2 -> s1.

Usage (run with any python; subprocesses use the package runtime):
    python train_game_voice.py [--epochs-s2 10] [--epochs-s1 12] [--batch-s2 8] [--batch-s1 8]
"""
import argparse
import json
import os
import subprocess
import sys
import time
from pathlib import Path

AIYUYIN_ROOT = Path(__file__).resolve().parents[1]
PKG_ROOT = AIYUYIN_ROOT / "third_party" / "GPT-SoVITS-v2pro" / "GPT-SoVITS-v2pro-20250604"
DATASET_JSON = AIYUYIN_ROOT / "data" / "voices" / "game_girl" / "transcribed" / "dataset.json"
EXP_NAME = "alterego"
SPEAKER = "alterego"
LANG = "ja"
VERSION = "v2"

PRETRAINED = PKG_ROOT / "GPT_SoVITS" / "pretrained_models"
BERT_DIR = PRETRAINED / "chinese-roberta-wwm-ext-large"
CNHUBERT_DIR = PRETRAINED / "chinese-hubert-base"
SV_CKPT = PRETRAINED / "sv" / "pretrained_eres2netv2w24s4ep4.ckpt"
S2G_PRETRAINED = PRETRAINED / "gsv-v2final-pretrained" / "s2G2333k.pth"
S2D_PRETRAINED = PRETRAINED / "gsv-v2final-pretrained" / "s2D2333k.pth"
S1_PRETRAINED = PRETRAINED / "gsv-v2final-pretrained" / "s1bert25hz-5kh-longer-epoch=12-step=369668.ckpt"
PYTHON = PKG_ROOT / "runtime" / "python.exe"


def build_filelist() -> tuple[Path, Path]:
    data = json.loads(DATASET_JSON.read_text(encoding="utf-8"))
    lines = []
    for item in data:
        wav = (AIYUYIN_ROOT / "data" / "voices" / "game_girl" / "raw" / item["file"]).resolve()
        text = item["text"].strip().replace("|", "，")
        if not text or len(text) < 2:
            continue
        lines.append(f"{wav}|{SPEAKER}|{LANG}|{text}")
    lines = sorted(set(lines))
    split = int(len(lines) * 0.97)
    train_path = AIYUYIN_ROOT / "data" / "voices" / "game_girl" / "filelist.train"
    val_path = AIYUYIN_ROOT / "data" / "voices" / "game_girl" / "filelist.val"
    train_path.write_text("\n".join(lines[:split]) + "\n", encoding="utf-8")
    val_path.write_text("\n".join(lines[split:]) + "\n", encoding="utf-8")
    print(f"filelist: train={split} val={len(lines) - split}")
    return train_path, val_path


def run_stage(name: str, cmd_args: list[str], env: dict, cwd: Path) -> None:
    print(f"=== {name} ===", flush=True)
    started = time.time()
    process = subprocess.run(cmd_args, env=env, cwd=str(cwd), shell=False)
    elapsed = (time.time() - started) / 60
    if process.returncode != 0:
        raise SystemExit(f"{name} failed with exit code {process.returncode} after {elapsed:.1f} min")
    print(f"=== {name} done in {elapsed:.1f} min ===", flush=True)


def base_env(inp_text: Path, inp_wav_dir: str, opt_dir: Path) -> dict:
    env = os.environ.copy()
    env.update(
        {
            "inp_text": str(inp_text),
            "inp_wav_dir": inp_wav_dir,
            "exp_name": EXP_NAME,
            "opt_dir": str(opt_dir),
            "is_half": "True",
            "i_part": "0",
            "all_parts": "1",
            "_CUDA_VISIBLE_DEVICES": "0",
        }
    )
    return env


def merge_parts(opt_dir: Path, part_pattern: str, merged_name: str) -> None:
    """The official webui merges per-GPU part outputs after each stage; mirror that."""
    parts = sorted(opt_dir.glob(part_pattern))
    lines: list[str] = []
    for part in parts:
        text = part.read_text(encoding="utf-8", errors="ignore").strip("\n")
        if text:
            lines.extend(text.split("\n"))
        part.unlink()
    (opt_dir / merged_name).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"merged {len(parts)} part files -> {merged_name} ({len(lines)} lines)")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--epochs-s2", type=int, default=10)
    parser.add_argument("--epochs-s1", type=int, default=12)
    parser.add_argument("--batch-s2", type=int, default=8)
    parser.add_argument("--batch-s1", type=int, default=8)
    args = parser.parse_args()

    if not DATASET_JSON.exists():
        raise SystemExit(f"missing {DATASET_JSON}; finish Whisper transcription first")
    for path in (BERT_DIR, CNHUBERT_DIR, SV_CKPT, S2G_PRETRAINED, S2D_PRETRAINED, S1_PRETRAINED):
        if not path.exists():
            raise SystemExit(f"missing pretrained asset: {path}")

    inp_text, _ = build_filelist()
    opt_dir = PKG_ROOT / "logs" / EXP_NAME
    opt_dir.mkdir(parents=True, exist_ok=True)
    prep_done = (opt_dir / "2-name2text.txt").exists() and (opt_dir / "6-name2semantic.tsv").exists()
    if prep_done:
        print("preprocessing outputs already present, skipping 1a/1b/1c")
    tmp_dir = PKG_ROOT / "TEMP"
    tmp_dir.mkdir(exist_ok=True)
    prepared = {"inp_text": str(inp_text), "inp_wav_dir": "", "exp_name": EXP_NAME, "opt_dir": str(opt_dir)}

    if not prep_done:
        # 1a: phonemes + BERT features
        env = base_env(inp_text, "", opt_dir)
        env["bert_pretrained_dir"] = str(BERT_DIR)
        run_stage("1a get-text", [str(PYTHON), "-s", "GPT_SoVITS/prepare_datasets/1-get-text.py"], env, PKG_ROOT)
        merge_parts(opt_dir, "2-name2text-*.txt", "2-name2text.txt")

        # 1b: CN-HuBERT features + 32k wavs
        env = base_env(inp_text, "", opt_dir)
        env["cnhubert_base_dir"] = str(CNHUBERT_DIR)
        env["sv_path"] = str(SV_CKPT)
        run_stage("1b hubert+wav32k", [str(PYTHON), "-s", "GPT_SoVITS/prepare_datasets/2-get-hubert-wav32k.py"], env, PKG_ROOT)

        # (2-get-sv.py is only required for v2Pro/Plus; plain v2 skips it.)

        # 1c: semantic tokens
        env = base_env(inp_text, "", opt_dir)
        env["s2config_path"] = str(PKG_ROOT / "GPT_SoVITS" / "configs" / "s2.json")
        env["pretrained_s2G"] = str(S2G_PRETRAINED)
        run_stage("1c semantic", [str(PYTHON), "-s", "GPT_SoVITS/prepare_datasets/3-get-semantic.py"], env, PKG_ROOT)
        merge_parts(opt_dir, "6-name2semantic-*.tsv", "6-name2semantic.tsv")

    # 2: SoVITS (s2) fine-tune
    with (PKG_ROOT / "GPT_SoVITS" / "configs" / "s2.json").open(encoding="utf-8") as handle:
        s2_config = json.load(handle)
    s2_config["train"].update(
        {
            "batch_size": args.batch_s2,
            "epochs": args.epochs_s2,
            "text_low_lr_rate": 0.4,
            "pretrained_s2G": str(S2G_PRETRAINED),
            "pretrained_s2D": str(S2D_PRETRAINED),
            "if_save_latest": True,
            "if_save_every_weights": True,
            "save_every_epoch": 5,
            "gpu_numbers": "0",
            "grad_ckpt": True,
        }
    )
    s2_config["model"]["version"] = VERSION
    s2_config["data"]["exp_dir"] = s2_config["s2_ckpt_dir"] = str(opt_dir)
    s2_config["save_weight_dir"] = "SoVITS_weights_v2"
    s2_config["name"] = EXP_NAME
    s2_config["version"] = VERSION
    (opt_dir / f"logs_s2_{VERSION}").mkdir(parents=True, exist_ok=True)
    s2_tmp = tmp_dir / "tmp_s2_alterego.json"
    s2_tmp.write_text(json.dumps(s2_config), encoding="utf-8")
    run_stage("2 s2 SoVITS train", [str(PYTHON), "-s", "GPT_SoVITS/s2_train.py", "--config", str(s2_tmp)], os.environ.copy(), PKG_ROOT)

    # 3: GPT (s1) fine-tune
    import yaml

    with (PKG_ROOT / "GPT_SoVITS" / "configs" / "s1longer-v2.yaml").open(encoding="utf-8") as handle:
        s1_config = yaml.load(handle, Loader=yaml.FullLoader)
    s1_config["train"].update(
        {
            "batch_size": args.batch_s1,
            "epochs": args.epochs_s1,
            "save_every_n_epoch": 2,
            "if_save_every_weights": True,
            "if_save_latest": True,
            "if_dpo": False,
            "half_weights_save_dir": "GPT_weights_v2",
            "exp_name": EXP_NAME,
        }
    )
    s1_config["pretrained_s1"] = str(S1_PRETRAINED)
    s1_config["train_semantic_path"] = str(opt_dir / "6-name2semantic.tsv")
    s1_config["train_phoneme_path"] = str(opt_dir / "2-name2text.txt")
    s1_config["output_dir"] = str(opt_dir / "logs_s1_v2")
    (opt_dir / "logs_s1_v2").mkdir(parents=True, exist_ok=True)
    s1_tmp = tmp_dir / "tmp_s1_alterego.yaml"
    s1_tmp.write_text(yaml.dump(s1_config, default_flow_style=False, allow_unicode=True), encoding="utf-8")
    env = os.environ.copy()
    env["_CUDA_VISIBLE_DEVICES"] = "0"
    env["hz"] = "25hz"
    run_stage("3 s1 GPT train", [str(PYTHON), "-s", "GPT_SoVITS/s1_train.py", "--config_file", str(s1_tmp)], env, PKG_ROOT)

    print("TRAINING COMPLETE", flush=True)


if __name__ == "__main__":
    main()
