import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We will load all 232 scenarios from all_232_scenarios.json
with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

print(f"Loaded {len(scenarios)} scenarios.")

# Let's inspect the scenarios and build an automated balancer
# Each scenario has: sid, correct, wrong (2 items)
# We want to replace each wrong option with an expanded/balanced option matching len(correct) +- 5 chars.
