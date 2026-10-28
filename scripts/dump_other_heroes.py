import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

for hero_pfx in ['t_', 'r_', 'inv_', 'wi_', 'j_']:
    hero_sc = [s for s in scenarios if s['id'].startswith(hero_pfx)]
    print(f"=== {hero_pfx} ({len(hero_sc)}) ===")
    for s in hero_sc[:3]:
        print(f"  {s['id']}: C({len(s['correct'])}): {s['correct'][:50]}... | W1({len(s['wrong'][0])}), W2({len(s['wrong'][1])})")
