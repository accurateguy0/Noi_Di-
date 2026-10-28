import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's inspect options and write an intelligent balancing function
# We can create expansion strategies based on the content of wrong options
# Let's see some patterns of wrong options:
print(f"Total scenarios to balance: {len(scenarios)}")
