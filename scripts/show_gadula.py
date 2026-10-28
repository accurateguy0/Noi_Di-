import sys, os
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.audit_all_files import audit_file

disps = audit_file('src/data/gadulaDialogSteps.js')
print(f"Total in gadulaDialogSteps.js: {len(disps)}")
for i, d in enumerate(disps):
    print(f"=== #{i+1} L{d['line']} ===")
    print(f"C ({d['c_len']}): \"{d['correct']}\"")
    for w in d['wrong']:
        print(f"W ({len(w)}): \"{w}\"")
