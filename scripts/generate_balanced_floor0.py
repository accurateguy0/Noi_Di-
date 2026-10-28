import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's inspect the first 20 scenarios and define custom balanced options
print(f"Loaded {len(scenarios)} scenarios.")
