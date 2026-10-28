import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

all_ids = re.findall(r"id:\s*'([a-z]_ep\d+_\d+)'", text)
print(f'Total scenario IDs: {len(all_ids)}')
