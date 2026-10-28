import sys, re
sys.stdout.reconfigure(encoding='utf-8')

for path in ['src/data/gadulaDialogSteps.js', 'src/data/characters/pielegniarka.js', 'src/data/characters/instagramerka.js']:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    print(f"=== {path} ===")
    matches = list(re.finditer(r'options\s*:\s*\[([^\]]+)\]', text))
    print(f"Total options blocks: {len(matches)}")
    if matches:
        sample = matches[0].group(0)
        print(sample[:300])
