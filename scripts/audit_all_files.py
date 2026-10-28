import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

def audit_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find arrays of options
    # We look for options: [ ... ] or questions with options
    # Let's use regex to find options blocks
    disparities = []
    
    # Pattern: extract each option object inside options: [ ... ]
    for match in re.finditer(r'options\s*:\s*\[([^\]]+)\]', content):
        block = match.group(1)
        # Find all objects in block
        obj_matches = re.finditer(r'\{([^{}]+)\}', block)
        items = []
        for om in obj_matches:
            obj_str = om.group(1)
            t_m = re.search(r'(?:text|textPl)\s*:\s*([\'"`])((?:\\.|(?!\1).)*)\1', obj_str)
            c_m = re.search(r'\bcorrect\s*:\s*(true|false)', obj_str)
            if t_m and c_m:
                items.append((t_m.group(2), c_m.group(1)))
        
        if items and len(items) >= 2:
            correct_opts = [it[0] for it in items if it[1] == 'true']
            wrong_opts = [it[0] for it in items if it[1] == 'false']
            if correct_opts and wrong_opts:
                c_len = len(correct_opts[0])
                w_lens = [len(w) for w in wrong_opts]
                max_w = max(w_lens)
                min_w = min(w_lens)
                avg_w = sum(w_lens) / len(w_lens)
                diff = abs(c_len - avg_w)
                ratio = c_len / avg_w if avg_w > 0 else 1.0
                if diff > 15 or ratio > 1.35 or ratio < 0.65:
                    disparities.append({
                        'line': content[:match.start()].count('\n') + 1,
                        'correct': correct_opts[0],
                        'c_len': c_len,
                        'wrong': wrong_opts,
                        'w_lens': w_lens,
                        'diff': diff,
                        'ratio': ratio
                    })
    return disparities

all_files = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.js'):
            p = os.path.join(root, f)
            disps = audit_file(p)
            if disps:
                print(f'{p}: {len(disps)} disparities')
                for d in disps[:3]:
                    print(f"  L{d['line']}: C({d['c_len']})='{d['correct']}' vs W{d['w_lens']} (diff={d['diff']:.1f}, ratio={d['ratio']:.2f})")
                if len(disps) > 3:
                    print(f"  ... and {len(disps)-3} more in this file.")
                print('-'*60)
