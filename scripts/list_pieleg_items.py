import sys, os, json
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/dump_pielegniarka.js.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total items in pielegniarka.js: {len(data)}")
for i, item in enumerate(data):
    print(f"[{i+1}] L{item['line']} (C={item['c_len']}): {item['c']}")
