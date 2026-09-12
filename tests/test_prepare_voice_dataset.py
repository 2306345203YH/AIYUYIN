import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path

import numpy as np
import opencc
import soundfile as sf

MODULE_PATH = Path(__file__).resolve().parents[1] / "app" / "prepare_voice_dataset.py"
SPEC = importlib.util.spec_from_file_location("prepare_voice_dataset", MODULE_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = MODULE
SPEC.loader.exec_module(MODULE)


class PrepareVoiceDatasetTests(unittest.TestCase):
    def test_merge_short_adjacent_segments(self):
        items = [
            MODULE.SpeechSegment(0.0, 0.4, "第一句"),
            MODULE.SpeechSegment(0.5, 1.4, "第二句"),
            MODULE.SpeechSegment(2.0, 4.0, "第三句"),
        ]
        merged = MODULE.merge_short_segments(items, 1.0, 15.0, 0.35)
        self.assertEqual(len(merged), 2)
        self.assertEqual(merged[0].text, "第一句第二句")
        self.assertAlmostEqual(merged[0].end, 1.4)

    def test_text_normalization_protects_filelist_separator(self):
        converter = opencc.OpenCC("t2s")
        text = MODULE.normalize_text("測試 | 文 本", converter)
        self.assertEqual(text, "测试 ｜ 文本")

    def test_writer_clamps_timestamps_to_audio_duration(self):
        converter = opencc.OpenCC("t2s")
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            source = root / "source.wav"
            sf.write(source, np.zeros(16000, dtype=np.int16), 16000, subtype="PCM_16")
            records = MODULE.write_dataset(
                source,
                root / "dataset",
                [MODULE.SpeechSegment(0.8, 1.4, "測試")],
                "speaker",
                converter,
                0.12,
                10.0,
            )
            self.assertEqual(len(records), 1)
            self.assertEqual(records[0]["end"], 11.0)
            self.assertEqual(records[0]["duration"], 0.2)
            info = sf.info(root / "dataset" / "clips" / "speaker_0001.wav")
            self.assertEqual(info.samplerate, 16000)
            self.assertEqual(info.channels, 1)


if __name__ == "__main__":
    unittest.main()

