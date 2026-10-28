import sys, json
from collections import Counter
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

prefixes = Counter([s['id'].split('_')[0] for s in scenarios])
print("Prefixes count:", prefixes)
