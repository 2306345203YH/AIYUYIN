# -*- coding: utf-8 -*-
"""Extract sprites/textures/audio from Chill with You Lo-Fi Story for UI reference."""
import sys
from pathlib import Path

import UnityPy

GAME = Path(r"D:\dowen\Chill.with.You.Lo-Fi.Story.v1.14.0\Chill with You Lo-Fi Story\Chill With You_Data")
OUT = Path(r"D:\AIyuyin\outputs\game_ref")
(OUT / "sprites").mkdir(parents=True, exist_ok=True)
(OUT / "audio").mkdir(parents=True, exist_ok=True)

TARGETS = [
    GAME / "sharedassets1.assets",
    GAME / "sharedassets3.assets",
    GAME / "resources.assets",
    GAME / "globalgamemanagers.assets",
]

saved = 0
for target in TARGETS:
    if not target.exists():
        continue
    env = UnityPy.load(str(target))
    for obj in env.objects:
        data = None
        if obj.type.name in ("Texture2D", "Sprite"):
            try:
                data = obj.read()
                img = data.image
                if img and img.width >= 64 and img.height >= 64:
                    name = f"{target.stem}_{data.m_Name[:60]}_{obj.type.name}_{obj.path_id}"
                    img.convert("RGBA").save(OUT / "sprites" / f"{name}.png")
                    saved += 1
            except Exception:
                continue
        elif obj.type.name == "AudioClip":
            try:
                data = obj.read()
                for i, sample in enumerate(data.samples.values()):
                    name = f"{data.m_Name[:60]}_{i}.wav"
                    (OUT / "audio" / name).write_bytes(sample)
                    saved += 1
                    if i >= 2:
                        break
            except Exception:
                continue
    print(f"{target.name}: done, cumulative saved={saved}")

print(f"TOTAL saved: {saved}")
