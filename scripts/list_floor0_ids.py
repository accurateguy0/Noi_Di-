import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

ids = [s['id'] for s in scenarios]
print(f"Total scenario count: {len(ids)}")
print("Sample IDs:", ids[:15])
