import unittest
import importlib.util
from pathlib import Path

from app.web_app import prepare_tts_text, voice_chat_system_prompt

_SEGMENTATION_PATH = (
    Path(__file__).resolve().parents[1]
    / "src"
    / "gpt_sovits"
    / "TTS_infer_pack"
    / "text_segmentation_method.py"
)
_SEGMENTATION_SPEC = importlib.util.spec_from_file_location(
    "aiyuyin_text_segmentation", _SEGMENTATION_PATH
)
assert _SEGMENTATION_SPEC and _SEGMENTATION_SPEC.loader
_SEGMENTATION_MODULE = importlib.util.module_from_spec(_SEGMENTATION_SPEC)
_SEGMENTATION_SPEC.loader.exec_module(_SEGMENTATION_MODULE)
cut_safe = _SEGMENTATION_MODULE.cut_safe


class CharacterRow(dict):
    pass


class WebChatHelpersTests(unittest.TestCase):
    def test_prepare_tts_text_removes_character_label_and_markdown(self):
        text = "[长离]\n\n## 回答\n**我们在安静地守望。**\n\n请放心。"
        self.assertEqual(
            prepare_tts_text(text, "长离"),
            "回答。我们在安静地守望。请放心。",
        )

    def test_safe_tts_split_keeps_final_sentence_separate(self):
        text = "前面的内容很长。" * 15 + "最后一句要完整说完。"
        chunks = cut_safe(text).splitlines()
        self.assertTrue(all(len(chunk) <= 38 for chunk in chunks))
        self.assertTrue(all(chunk[-1] in "。？！!?…" for chunk in chunks))
        self.assertTrue(chunks[-1].endswith("最后一句要完整说完。"))

    def test_round_robin_prompt_forbids_speaking_for_other_roles(self):
        prompt = voice_chat_system_prompt(
            CharacterRow(name="艾雅法拉", system_prompt="保持温柔。"),
            "round_robin",
        )
        self.assertIn("只能替自己发言", prompt)
        self.assertIn("不要输出角色名标签", prompt)
        self.assertIn("约 160 个汉字以内", prompt)


if __name__ == "__main__":
    unittest.main()
