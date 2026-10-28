import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

print(f"Total scenarios in dump: {len(scenarios)}")
# Print first 5
for s in scenarios[:5]:
    c = [o['text'] for o in s['options'] if o['correct']][0]
    w = [o['text'] for o in s['options'] if not o['correct']]
    print(f"ID: {s['id']}")
    print(f"  C ({len(c)}): {c}")
    for idx, x in enumerate(w):
        print(f"  W{idx+1} ({len(x)}): {x}")
