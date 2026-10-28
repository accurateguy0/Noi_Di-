import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's count unique correct texts
unique_correct = set(s['correct'] for s in scenarios)
print(f"Total scenarios: {len(scenarios)}, Unique correct texts: {len(unique_correct)}")
