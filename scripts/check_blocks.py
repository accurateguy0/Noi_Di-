import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all options: [ ... ] in floor0EpisodesData.js
options_matches = list(re.finditer(r'options\s*:\s*\[([^\]]+)\]', text))
print(f'Total options: [...] blocks in floor0EpisodesData.js: {len(options_matches)}')
