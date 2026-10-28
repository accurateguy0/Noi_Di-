import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')
from glob import glob

for path in glob('src/data/characters/*.js'):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    types = re.findall(r'type:\s*[\'"]([^\'"]+)[\'"]', text)
    if types:
        print(f'{os.path.basename(path)}: {set(types)}')
