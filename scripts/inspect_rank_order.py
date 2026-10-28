import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/heroCurriculumEncounters.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'Stres przed finałowym biegiem' in l:
        print(f"Line {i+1}:")
        for j in range(max(0, i-5), min(len(lines), i+45)):
            print(lines[j], end='')
        print('='*50)
