import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Let's inspect the distribution of target lengths
# Target lengths are len(correct)
# We can create a smart sentence padder/elaborator:
# Given a wrong answer W and a target length L:
# We categorize W:
# 1. situational / action: "Gdy...", "Kiedy...", "Mówisz...", "Pytasz...", "Uciekasz...", "Kupujesz..."
# 2. grammatical term / definition: "Wskazuje...", "Określa...", "Odpowiada na...", "Nazywa...", "Zmienia...", "Cząstka..."
# 3. quote / utterance: "«...»", "„...”"
# 4. rule / explanation: "Piszemy...", "Bo...", "Zawsze...", "Nigdy..."
# 5. short phrase / noun phrase
