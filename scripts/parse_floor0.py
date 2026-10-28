import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect options regex matching
pattern = r'(\{\s*textPl:\s*[\'"]([^\'"]+)[\'"]\s*,\s*correct:\s*(true|false)\s*\})'
matches = re.findall(pattern, text)
print(f'Total textPl options found: {len(matches)}')
