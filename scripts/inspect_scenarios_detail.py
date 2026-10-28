import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's inspect some of the scenarios and their questions
for i, s in enumerate(scenarios[:10]):
    print(f"[{i+1}] {s['id']}: C({len(s['correct'])}): {s['correct']}")
    for w in s['wrong']:
        print(f"      W({len(w)}): {w}")
