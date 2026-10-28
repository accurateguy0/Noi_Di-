import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

warrior_scenarios = [s for s in scenarios if s['id'].startswith('w_')]
print(f"Warrior scenarios: {len(warrior_scenarios)}")
for s in warrior_scenarios:
    print(f"ID: {s['id']} | C: '{s['correct']}' ({len(s['correct'])})")
    for w in s['wrong']:
        print(f"    W: '{w}' ({len(w)})")
