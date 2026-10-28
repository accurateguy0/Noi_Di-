import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r"id:\s*'inv_ep4_4'.*?options:\s*\[(.*?)\]", text, re.DOTALL)
if m:
    print(m.group(0))
