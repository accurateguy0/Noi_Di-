import json, sys
sys.stdout.reconfigure(encoding='utf-8')

for name in ['szkieleton.js', 'dyrektorka.js', 'profesor.js', 'silaczka.js', 'smok.js']:
    p = f"scripts/dump_{name}.json"
    with open(p, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"=== {name} ({len(data)} items) ===")
    for item in data:
        print(f"L{item['line']}: C({item['c_len']}) = '{item['c']}'")
        for w in item['w']:
            print(f"       W({len(w)}) = '{w}'")
    print()
