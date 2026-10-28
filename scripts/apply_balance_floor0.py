import sys, re
sys.stdout.reconfigure(encoding='utf-8')
from balance_engine import create_balancer

expand_fn = create_balancer()

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(
    r"(\{\s*id:\s*'([a-z0-9_]+)'.*?options:\s*\[\s*)"
    r"(\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*,\s*"
    r"\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*,\s*"
    r"\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*)"
    r"(\]\s*\})",
    re.DOTALL
)

def replacer(m):
    prefix = m.group(1)
    sid = m.group(2)
    suffix = m.group(10)
    
    opts = [
        {'text': m.group(4), 'correct': m.group(5) == 'true'},
        {'text': m.group(6), 'correct': m.group(7) == 'true'},
        {'text': m.group(8), 'correct': m.group(9) == 'true'}
    ]
    
    c_opts = [o['text'] for o in opts if o['correct']]
    if not c_opts:
        return m.group(0)
    
    target_len = len(c_opts[0])
    
    new_opts = []
    for o in opts:
        if o['correct']:
            new_opts.append(f"{{ textPl: '{o['text']}', correct: true }}")
        else:
            new_text = expand_fn(sid, o['text'], target_len)
            new_opts.append(f"{{ textPl: '{new_text}', correct: false }}")
            
    opts_str = ",\n            ".join(new_opts)
    return f"{prefix}{opts_str}\n          {suffix}"

new_content = pattern.sub(replacer, content)

with open('src/data/floor0EpisodesData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("floor0EpisodesData.js successfully rebalanced and written!")
