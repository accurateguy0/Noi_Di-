import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/dump_wuefista.js.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"wuefista.js has {len(data)} disparities:")
for item in data[:5]:
    print(f"L{item['line']}: C({item['c_len']}) = '{item['c']}'")
    for w in item['w']:
        print(f"       W({len(w)}) = '{w}'")
