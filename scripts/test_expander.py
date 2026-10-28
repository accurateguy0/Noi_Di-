import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/floor0_scenarios_dump.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

def balance_wrong_option(wrong_text, target_len):
    w = wrong_text.strip()
    if abs(len(w) - target_len) <= 7:
        return w
    
    diff = target_len - len(w)
    if diff > 7:
        # Need to expand
        # Let's see what w starts with or contains
        pass
    return w
