import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

thief_scenarios = [s for s in scenarios if s['id'].startswith('t_')]
print(f"Thief scenarios: {len(thief_scenarios)}")
for s in thief_scenarios:
    print(f"ID: {s['id']} | C: '{s['correct']}' ({len(s['correct'])})")
    for w in s['wrong']:
        print(f"    W: '{w}' ({len(w)})")
