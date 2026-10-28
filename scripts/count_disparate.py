import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

disparate_scenarios = []
for sc in scenarios:
    correct = [o['text'] for o in sc['options'] if o['correct']]
    wrong = [o['text'] for o in sc['options'] if not o['correct']]
    if correct and wrong:
        clen = len(correct[0])
        wlens = [len(w) for w in wrong]
        diffs = [abs(clen - wl) for wl in wlens]
        if max(diffs) > 10:
            disparate_scenarios.append({
                'id': sc['id'],
                'correct': correct[0],
                'wrong': wrong
            })

print(f"Total disparate scenarios in floor0: {len(disparate_scenarios)}")
