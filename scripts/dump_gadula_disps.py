import sys, os, re
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.audit_all_files import audit_file

with open('src/data/gadulaDialogSteps.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find each step with question and options
steps = re.findall(r'\{\s*question:\s*([\'"`])(.*?)\1\s*,\s*options:\s*\[(.*?)\]\s*\}', content, re.DOTALL)
print(f"Total steps found: {len(steps)}")

out_f = open('scripts/gadula_disps.txt', 'w', encoding='utf-8')

for i, (q_quote, q_text, opt_block) in enumerate(steps):
    # parse options
    objs = re.findall(r'\{\s*text:\s*([\'"`])(.*?)\1\s*,\s*correct:\s*(true|false)\s*\}', opt_block)
    if not objs:
        continue
    c_list = [t for q, t, c in objs if c == 'true']
    w_list = [t for q, t, c in objs if c == 'false']
    if not c_list or not w_list:
        continue
    c = c_list[0]
    c_len = len(c)
    w_lens = [len(w) for w in w_list]
    avg_w = sum(w_lens) / len(w_lens)
    diff = abs(c_len - avg_w)
    ratio = c_len / avg_w if avg_w > 0 else 1.0
    if diff > 15 or ratio > 1.35 or ratio < 0.65:
        out_f.write(f"STEP #{i+1} [Q: {q_text[:50]}...]\n")
        out_f.write(f"  C ({c_len}): {c}\n")
        for w in w_list:
            out_f.write(f"  W ({len(w)}): {w}\n")
        out_f.write("\n")

out_f.close()
print("Saved gadula_disps.txt successfully!")
