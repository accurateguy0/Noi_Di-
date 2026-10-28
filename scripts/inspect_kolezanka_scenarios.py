import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/characters/kolezanka.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Let's find encounters
print("=== KOLEZANKA.JS ===")
for m in re.finditer(r'titlePl["\']?\s*:\s*["\']([^"\']+)["\']', c):
    print(m.group(1))

with open('src/data/heroCurriculumEncounters.js', 'r', encoding='utf-8') as f:
    c2 = f.read()

print("=== HERO CURRICULUM ENCOUNTERS (KOLEZANKA / RANK ORDER) ===")
for m in re.finditer(r'titlePl["\']?\s*:\s*["\']([^"\']+)["\']', c2):
    if 'Koleżanka' in m.group(1) or 'Kasjerka' in m.group(1):
        print(m.group(1))
