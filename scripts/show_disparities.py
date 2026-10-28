import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

for match in list(re.finditer(r'options\s*:\s*\[([^\]]+)\]', text))[:20]:
    block = match.group(1)
    items = re.findall(r'textPl:\s*[\'"]([^\'"]+)[\'"]\s*,\s*correct:\s*(true|false)', block)
    if items:
        correct = [t for t, c in items if c == 'true']
        wrong = [t for t, c in items if c == 'false']
        if correct and wrong:
            c = correct[0]
            print(f"C ({len(c)}): {c}")
            for w in wrong:
                print(f"  W ({len(w)}): {w}")
            print('-'*40)
