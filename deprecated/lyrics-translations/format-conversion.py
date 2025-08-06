import yaml

def format_explanations(expls, lang):
    if not expls:
        return "<empty>"
    parts = []
    for item in expls:
        text  = item.get("text", "")
        sense = item.get("sense") or "-"
        parts.append(f"{text}|{lang}|{sense}")
    return ",".join(parts)

def main():
    # Load your single YAML file
    with open("lyrics.yml", encoding="utf-8") as f:
        data = yaml.safe_load(f)

    # Prepare the five parallel lists
    orig_lines, roma_lines, eng_lines, lang_lines, expl_lines = [], [], [], [], []

    for stanza in data:
        # Divider stanza
        if stanza.get("divider"):
            tag = "<divider>"
            for lst in (orig_lines, roma_lines, eng_lines, lang_lines, expl_lines):
                lst.append(tag)
            continue

        lang = stanza.get("lang")
        if lang == "jp":
            orig = stanza.get("kanji", "<empty>")
            roma = stanza.get("romaji", "<empty>")
            eng  = stanza.get("english", "<empty>")
            expl = format_explanations(stanza.get("explanation", []), "jp")
        elif lang == "en":
            orig = "<empty>"
            roma = "<empty>"
            eng  = stanza.get("english", "<empty>")
            expl = "<empty>"
        else:
            # any other language—you can tweak this if needed
            orig = stanza.get("kanji") or stanza.get("english") or "<empty>"
            roma = orig
            eng  = stanza.get("english", "<empty>")
            expl = "<empty>"

        orig_lines.append(orig)
        roma_lines.append(roma)
        eng_lines.append(eng)
        lang_lines.append(lang)
        expl_lines.append(expl)

    # Write out each list to its own file
    mapping = {
        "original_lines.txt":    orig_lines,
        "romanized_lines.txt":   roma_lines,
        "english_lines.txt":     eng_lines,
        "lang_lines.txt":        lang_lines,
        "explanation_lines.txt": expl_lines,
    }

    for filename, lines in mapping.items():
        with open(filename, "w", encoding="utf-8") as out:
            for line in lines:
                out.write(line + "\n")
        print(f"Wrote {filename}")

if __name__ == "__main__":
    main()