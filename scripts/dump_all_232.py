import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r"\{\s*id:\s*'([a-z0-9_]+)'.*?options:\s*\[(.*?)\]\s*\}", re.DOTALL)

scenarios = []
for m in pattern.finditer(content):
    sid = m.group(1)
    opts_raw = m.group(2)
    # find all { textPl: '...', correct: ... }
    opt_matches = re.findall(r"\{\s*textPl:\s*'([^']*)',\s*correct:\s*(true|false)\s*\}", opts_raw)
    if not opt_matches:
        opt_matches = re.findall(r'\{\s*textPl:\s*"([^"]*)",\s*correct:\s*(true|false)\s*\}', opts_raw)
    
    correct = [t for t, c in opt_matches if c == 'true']
    wrong = [t for t, c in opt_matches if c == 'false']
    scenarios.append({
        'id': sid,
        'correct': correct[0] if correct else '',
        'wrong': wrong,
        'full_match': m.group(0),
        'opts_raw': opts_raw
    })

print(f"Parsed {len(scenarios)} scenarios.")
with open('scripts/all_232_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(scenarios, f, ensure_ascii=False, indent=2)
print("Saved to scripts/all_232_scenarios.json")
