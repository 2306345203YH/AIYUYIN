import os

import ffmpeg
import numpy as np
import imageio_ffmpeg

from tools.i18n.i18n import I18nAuto

i18n = I18nAuto(language=os.environ.get("language", "Auto"))


def clean_path(path_str: str):
    return path_str.strip(" '\n\"\u202a").replace("/", os.sep).replace("\\", os.sep)


def load_audio(file, sr):
    file = clean_path(file)
    if not os.path.exists(file):
        raise RuntimeError(f"audio file does not exist: {file}")
    try:
        ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
        out, _ = (
            ffmpeg.input(file, threads=0)
            .output("-", format="f32le", acodec="pcm_f32le", ac=1, ar=sr)
            .run(cmd=[ffmpeg_exe, "-nostdin"], capture_stdout=True, capture_stderr=True)
        )
    except Exception as exc:
        raise RuntimeError(i18n("音频加载失败")) from exc
    return np.frombuffer(out, np.float32).flatten()
