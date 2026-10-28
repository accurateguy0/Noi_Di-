import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Natural Polish clause extenders of varying lengths:
# We categorize by type of sentence:
# A. Verb/action (present/imperative): "robi...", "mówi...", "idzie..."
# B. "Gdy / Kiedy..." clauses
# C. Noun phrase (e.g. "Nazwa...", "Wyraz...", "Cząstka...")
# D. Grammar rules / definitions
# E. Direct speech quotes: "„...”", "«...»"

def get_candidates(w, L):
    diff = L - len(w)
    if abs(diff) <= 3:
        return [w]
    
    candidates = []
    
    # If w is in quotes:
    if (w.startswith('„') and w.endswith('”')) or (w.startswith('«') and w.endswith('»')):
        quote_char = '„' if w.startswith('„') else '«'
        end_char = '”' if w.startswith('„') else '»'
        inner = w[1:-1].rstrip('.!?')
        
        # Extensions inside quote
        insides = [
            f"{inner}, bo bardzo mi na tym zależy!",
            f"{inner}, to dla mnie niezwykle ważne!",
            f"{inner}, zrobimy to razem po lekcjach!",
            f"{inner}, na pewno sobie z tym poradzimy!",
            f"{inner}, dziękuję za pomoc i życzliwość!",
            f"{inner}, musimy o tym porozmawiać!",
            f"{inner}, to naprawdę ciekawa sprawa!",
            f"{inner}, sprawdźmy to w podręczniku!",
            f"{inner}, to świetny pomysł na dziś!",
            f"{inner}, zapytajmy o to nauczyciela!"
        ]
        for ins in insides:
            candidates.append(f"{quote_char}{ins}{end_char}")
            
    # If starts with Gdy or Kiedy
    elif w.startswith('Gdy ') or w.startswith('Kiedy '):
        base = w.rstrip('.')
        additions = [
            " w szkolnej sali lekcyjnej",
            " podczas przerwy obiadowej",
            " w bibliotece po lekcjach",
            " w szatni przed rozpoczęciem zajęć",
            " na korytarzu w trakcie długiej przerwy",
            " w drodze powrotnej ze szkoły do domu",
            " w pokoju po całym dniu nauki i zabawy",
            " podczas porannej zbiórki przed lekcjami",
            " w trakcie wspólnej pracy w ławkach",
            " przed samym wejściem do sali lekcyjnej",
            " i wracasz prosto do domu",
            " i rozmawiasz z kolegami",
            " i odpoczywasz w swoim pokoju",
            " i szukasz wolnego miejsca w sali",
            " i czekasz na rozpoczęcie zajęć"
        ]
        for add in additions:
            candidates.append(base + add)
            
    # If grammar definition
    elif any(k in w.lower() for k in ['odpowiada', 'wskazuje', 'określa', 'nazywa', 'oznacza', 'zmienia', 'zastępuje', 'cząstka', 'słowo', 'wyraz', 'forma', 'czasownik', 'rzeczownik', 'przymiotnik', 'liczebnik', 'przysłówek', 'zaimek', 'spójnik']):
        base = w.rstrip('.')
        examples = [
            " (np. szybki, zwinny, waleczny)",
            " (np. biega, walczy, trenuje na sali)",
            " (np. tarcza, zbroja, hełm, miecz)",
            " (np. jeden, dwa, dziesięć, sto)",
            " (np. pierwszy, drugi, trzeci, setny)",
            " (np. wesoło, szybko, dokładnie)",
            " (np. pod, nad, za, przed, obok)",
            " w każdym zdaniu pojedynczym",
            " we wszystkich formach fleksyjnych",
            " na początku i na końcu wypowiedzi",
            " w języku polskim bez żadnych wyjątków",
            " jako stały element wypowiedzenia",
            " w liczbie pojedynczej i mnogiej",
            " w mianowniku i pozostałych przypadkach"
        ]
        for ex in examples:
            candidates.append(base + ex)
            
    # General verb / noun phrases
    base = w.rstrip('.')
    general_additions = [
        " i wracasz do domu",
        " w trakcie przerwy",
        " podczas lekcji w klasie",
        " w szkolnej bibliotece",
        " przed rozpoczęciem zajęć",
        " na korytarzu szkolnym",
        " w trakcie codziennych lekcji",
        " podczas wspólnego treningu",
        " po zakończeniu wszystkich lekcji",
        " w rozmowie z kolegami z ławki",
        " w trakcie przygotowań do sprawdzianu",
        " przed wyjściem ze szkoły do domu",
        " podczas cichej pracy na lekcji",
        " w sali gimnastycznej przed ćwiczeniami",
        " w szkolnej szatni przed dzwonkiem",
        " w zeszycie przedmiotowym z polskiego",
        " bez konsultacji z nauczycielem w klasie",
        " w porozumieniu z całą grupą uczniów",
        " z zachowaniem pełnej kultury osobistej",
        " przed przystąpieniem do rozwiązywania zadań",
        " podczas porannej zbiórki całej klasy",
        " w podręczniku szkolnym na wybranej stronie",
        " na tablicy w sali lekcyjnej",
        " w rozmowie z dyrekcją szkoły",
        " z uśmiechem i życzliwością",
        " w skupieniu i ciszy na lekcji"
    ]
    for gen in general_additions:
        candidates.append(base + gen)

    # Filter candidates: pick closest to L
    if not candidates:
        return [w]
    return candidates

# Let's test on all scenarios
max_diffs = []
for s in scenarios:
    L = len(s['correct'])
    for w in s['wrong']:
        cands = get_candidates(w, L)
        best = min(cands, key=lambda c: abs(len(c) - L))
        max_diffs.append(abs(len(best) - L))

print(f"Tested on {len(scenarios)} scenarios ({len(max_diffs)} wrong options).")
print(f"Max difference: {max(max_diffs)}, Average difference: {sum(max_diffs)/len(max_diffs):.2f}")
over_5 = sum(1 for d in max_diffs if d > 5)
print(f"Options with diff > 5: {over_5} of {len(max_diffs)}")
