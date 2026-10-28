import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/generateIsometricFloor.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'kolezanka' in l.lower() or 'rank' in l.lower():
        print(f"Line {i+1}: {l.strip()[:100]}")
