import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_ids = {
    'w_ep1_3', 'w_ep2_1', 'w_ep2_3', 'w_ep3_4', 'w_ep3_5', 'w_ep4_2', 'w_ep5_2', 'w_ep5_3', 'w_ep5_5',
    't_ep1_3', 't_ep1_5', 't_ep2_4', 'r_ep1_2', 'r_ep2_5', 'r_ep3_4', 'r_ep6_1', 'r_ep7_1',
    'inv_ep1_3', 'wi_ep2_2', 'wi_ep3_5'
}

for i, line in enumerate(lines):
    for tid in target_ids:
        if f"id: '{tid}'" in line:
            print(f"=== {tid} (around line {i+1}) ===")
            for j in range(i, min(i+10, len(lines))):
                print(lines[j], end='')
