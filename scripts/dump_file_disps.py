import sys, os, re, json
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.audit_all_files import audit_file

def dump_file(p):
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    disps = audit_file(p)
    print(f"File {p}: {len(disps)} disparities")
    out = []
    for d in disps:
        # Find the question prompt around that line
        line_idx = d['line']
        lines = content.splitlines()
        q_text = ""
        for k in range(max(0, line_idx - 10), line_idx):
            line = lines[k]
            m = re.search(r'(?:question|promptPl|prompt)\s*:\s*([\'"`])(.*?)\1', line)
            if m:
                q_text = m.group(2)
        out.append({
            'line': d['line'],
            'prompt': q_text,
            'c': d['correct'],
            'c_len': d['c_len'],
            'w': d['wrong'],
            'w_lens': d['w_lens']
        })
    return out

if __name__ == '__main__':
    target = sys.argv[1]
    res = dump_file(target)
    out_path = f"scripts/dump_{os.path.basename(target)}.json"
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(res, f, ensure_ascii=False, indent=2)
    print(f"Dumped to {out_path}")
