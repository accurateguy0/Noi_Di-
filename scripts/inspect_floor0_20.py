import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

scenario_re = re.compile(r'\{\s*id:\s*[\x27\x22]([^\x27\x22]+)[\x27\x22].*?options:\s*\[(.*?)\]\s*,\s*correct:\s*(\d+)', re.DOTALL)
for m in scenario_re.finditer(content):
    sid = m.group(1)
    opts_raw = m.group(2)
    correct_idx = int(m.group(3))
    opts = [opt.strip()[1:-1] for opt in re.findall(r'[\x27\x22]((?:\\.|[^\x27\x22\\])*)[\x27\x22]', opts_raw)]
    if not opts or correct_idx >= len(opts):
        continue
    c_len = len(opts[correct_idx])
    w_lens = [len(opt) for i, opt in enumerate(opts) if i != correct_idx]
    avg_w = sum(w_lens) / len(w_lens) if w_lens else 0
    diff = abs(c_len - avg_w)
    ratio = c_len / avg_w if avg_w > 0 else 1.0
    if diff > 15 or ratio > 1.35 or ratio < 0.65:
        print(f'{sid}: C({c_len})="{opts[correct_idx]}"')
        for i, opt in enumerate(opts):
            mark = "CORRECT" if i == correct_idx else "WRONG"
            print(f'   [{mark}] ({len(opt)}): "{opt}"')
