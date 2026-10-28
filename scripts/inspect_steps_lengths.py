import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

for path in ['src/data/characters/kolezanka.js', 'src/data/heroCurriculumEncounters.js']:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    print(f"=== {path} ===")
    for m in re.finditer(r'titlePl["\']?\s*:\s*["\']([^"\']+)["\'].*?steps["\']?\s*:\s*\[(.*?)\]', c, re.DOTALL):
        title = m.group(1)
        steps_raw = m.group(2)
        steps = re.findall(r'["\']([^"\']+)["\']', steps_raw)
        print(f"  {title}: {len(steps)} steps")
        if len(steps) > 0:
            print(f"     First: {steps[0]}")
            print(f"     Last : {steps[-1]}")
