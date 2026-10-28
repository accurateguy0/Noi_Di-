import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

for match in re.finditer(r'id:\s*[\'"]([^\'"]+)[\'"].*?options\s*:\s*\[([^\]]+)\]', content, re.DOTALL):
    sid = match.group(1)
    block = match.group(2)
    items = re.findall(r'\{\s*(?:text|textPl)\s*:\s*([\'"`])(.*?)\1\s*,\s*correct\s*:\s*(true|false)', block)
    if not items:
        continue
    correct_opts = [it[1] for it in items if it[2] == 'true']
    wrong_opts = [it[1] for it in items if it[2] == 'false']
    if not correct_opts or not wrong_opts:
        continue
    c = correct_opts[0]
    c_len = len(c)
    w_lens = [len(w) for w in wrong_opts]
    avg_w = sum(w_lens) / len(w_lens)
    diff = abs(c_len - avg_w)
    ratio = c_len / avg_w if avg_w > 0 else 1.0
    if diff > 15 or ratio > 1.35 or ratio < 0.65:
        print(f"{sid} (diff={diff:.1f}, ratio={ratio:.2f}):")
        print(f"  C ({c_len}): '{c}'")
        for w in wrong_opts:
            print(f"  W ({len(w)}): '{w}'")
