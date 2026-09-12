import json
import locale
import os

I18N_JSON_DIR = os.path.join(os.path.dirname(__file__), "locale")


def scan_language_list():
    return [
        name[:-5]
        for name in os.listdir(I18N_JSON_DIR)
        if name.endswith(".json")
    ]


class I18nAuto:
    def __init__(self, language=None):
        language = language or locale.getdefaultlocale()[0] or "en_US"
        if language not in scan_language_list():
            language = "en_US"
        with open(os.path.join(I18N_JSON_DIR, language + ".json"), encoding="utf-8") as f:
            self.language_map = json.load(f)
        self.language = language

    def __call__(self, key):
        return self.language_map.get(key, key)

    def __repr__(self):
        return "Use Language: " + self.language
