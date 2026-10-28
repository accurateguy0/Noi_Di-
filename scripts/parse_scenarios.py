import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

scenarios = re.findall(r'(\{\s*id:\s*[\'"][^\'"]+[\'"].*?options:\s*\[\s*\{[^\}]+\}\s*,\s*\{[^\}]+\}\s*,\s*\{[^\}]+\}\s*\]\s*\})', text, re.DOTALL)
print(f'Total scenarios matched: {len(scenarios)}')
for sc in scenarios[:3]:
    print(sc)
    print('='*50)
