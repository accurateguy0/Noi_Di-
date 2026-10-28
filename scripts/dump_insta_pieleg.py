import sys, os, json
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

for name in ['instagramerka', 'pielegniarka']:
    with open(f'scripts/dump_{name}.js.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    with open(f'scripts/{name}_items.txt', 'w', encoding='utf-8') as out_f:
        for i, item in enumerate(data):
            out_f.write(f"// #{i+1} L{item['line']} (C={item['c_len']})\n")
            out_f.write(f"'{item['c']}': [\n")
            for w in item['w']:
                out_f.write(f"    '{w}', // len={len(w)}\n")
            out_f.write("],\n")
print("Dumped instagramerka and pielegniarka items!")
