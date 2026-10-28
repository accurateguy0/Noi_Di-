import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's inspect length distribution of correct options
c_lens = [len([o['text'] for o in sc['options'] if o['correct']][0]) for sc in scenarios]
print(f"Min correct len: {min(c_lens)}, Max: {max(c_lens)}, Avg: {sum(c_lens)/len(c_lens):.1f}")
