import sys, os, subprocess
sys.stdout.reconfigure(encoding='utf-8')

targets = [
    'src/data/characters/pielegniarka.js',
    'src/data/characters/instagramerka.js',
    'src/data/characters/lekarz.js',
    'src/data/characters/wuefista.js',
    'src/data/characters/szkieleton.js',
    'src/data/characters/dyrektorka.js',
    'src/data/characters/profesor.js',
    'src/data/characters/silaczka.js',
    'src/data/characters/smok.js',
    'src/data/bossChallengesData.js',
    'src/data/curriculumChallenges.js'
]

for t in targets:
    subprocess.run(['python', 'scripts/dump_file_disps.py', t], check=True)

print("All dumped successfully!")
