import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/board/FloorManager.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'.{0,50}(?:catScenarios|FLOOR_0_EPISODES|floor0).{0,50}', text)
for line in m:
    print(line)
