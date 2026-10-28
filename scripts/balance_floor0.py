import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Let's inspect all 232 scenarios and create rules / templates for balancing them
with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

print(f"Loaded {len(scenarios)} scenarios.")
