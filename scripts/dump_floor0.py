import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all options blocks
pattern = re.compile(r"\{\s*id:\s*'([^']+)'(?:(?!options:).)*?options:\s*\[\s*\{\s*textPl:\s*'([^']*)',\s*correct:\s*(true|false)\s*\},\s*\{\s*textPl:\s*'([^']*)',\s*correct:\s*(true|false)\s*\},\s*\{\s*textPl:\s*'([^']*)',\s*correct:\s*(true|false)\s*\}\s*\]", re.DOTALL)

matches = pattern.findall(text)
print(f'Matched {len(matches)} scenarios with 3 options')

with open('scripts/floor0_scenarios_dump.json', 'w', encoding='utf-8') as f:
    dump = []
    for m in matches:
        sid, o1, c1, o2, c2, o3, c3 = m
        opts = [
            {'text': o1, 'correct': c1 == 'true'},
            {'text': o2, 'correct': c2 == 'true'},
            {'text': o3, 'correct': c3 == 'true'}
        ]
        dump.append({'id': sid, 'options': opts})
    json.dump(dump, f, ensure_ascii=False, indent=2)

print('Dumped successfully.')
