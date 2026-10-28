import sys, os, json
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/dump_instagramerka.js.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

c_counts = {}
for item in data:
    c = item['c']
    c_counts[c] = c_counts.get(c, 0) + 1

print(f"Total items: {len(data)}, Unique correct texts: {len(c_counts)}")
for c, cnt in c_counts.items():
    print(f"[{cnt}x] (len={len(c)}): {c[:60]}...")
