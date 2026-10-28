import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

long_scenarios = [s for s in scenarios if len(s['correct']) > 80]
print(f"Total scenarios with L > 80: {len(long_scenarios)}")
for s in long_scenarios[:10]:
    print(f"\n{s['id']} (L={len(s['correct'])}):")
    print(f"  C: {s['correct']}")
    for w in s['wrong']:
        print(f"  W ({len(w)}): {w}")
