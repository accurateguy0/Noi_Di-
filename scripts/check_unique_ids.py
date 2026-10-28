import sys, re
sys.stdout.reconfigure(encoding='utf-8')
with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()
ids = re.findall(r"id:\s*'([^']+)'", text)
print(f'Total IDs found: {len(ids)}, Unique IDs: {len(set(ids))}')
