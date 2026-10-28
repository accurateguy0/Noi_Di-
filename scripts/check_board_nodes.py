import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/boardNodes.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function getHeroFloor0Data', text)
if m:
    print(text[m.start():m.start()+1000])
