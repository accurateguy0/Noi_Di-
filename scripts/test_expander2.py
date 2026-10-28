import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

def expand_distractor(w, target_len):
    w = w.strip()
    diff = target_len - len(w)
    if abs(diff) <= 6:
        return w
    
    # If it's already longer, we don't need to expand
    if diff < -6:
        return w
    
    # We need to add approximately diff characters
    # Look at patterns in w:
    
    # Pattern A: starts with "Gdy " or "Kiedy "
    if w.startswith("Gdy ") or w.startswith("Kiedy "):
        suffixes = [
            f"{w} po zakończeniu wszystkich zajęć w szkole",
            f"{w} w trakcie przerwy obiadowej na korytarzu",
            f"{w} podczas porannej zbiórki przed lekcjami",
            f"{w} w trakcie codziennych zajęć lekcyjnych",
            f"{w} podczas wspólnej zabawy na boisku",
            f"{w} w sali lekcyjnej podczas przerwy",
            f"{w} przed wyjściem ze szkoły do domu",
            f"{w} w szkolnej bibliotece po lekcjach",
            f"{w} w szatni przed rozpoczęciem zajęć",
            f"{w} w pokoju po całym dniu nauki"
        ]
        # pick closest to target_len
        best = min(suffixes, key=lambda s: abs(len(s) - target_len))
        if abs(len(best) - target_len) < abs(len(w) - target_len):
            return best

    # Pattern B: starts with a verb or noun phrase
    context_suffixes = [
        " w trakcie codziennych zajęć lekcyjnych w klasie",
        " podczas długiej przerwy na korytarzu szkolnym",
        " po zakończeniu wszystkich lekcji w szkole",
        " w rozmowie z kolegami z klasy przed lekcją",
        " podczas wspólnego treningu na sali gimnastycznej",
        " w trakcie przygotowań do sprawdzianu z polskiego",
        " w bibliotece szkolnej podczas cichej nauki",
        " w szatni szkolnej przed rozpoczęciem lekcji",
        " w stołówce szkolnej podczas przerwy obiadowej",
        " na boisku szkolnym podczas zawodów sportowych",
        " w zeszycie przedmiotowym na lekcji w klasie",
        " w podręczniku szkolnym na wybranej stronie",
        " w rozmowie z nauczycielem przy tablicy szkolnej",
        " przed wyjściem ze szkoły do domu po zajęciach",
        " podczas porannej zbiórki całej drużyny w szkole"
    ]
    
    grammar_suffixes = [
        " (np. szybki, zwinny, waleczny, honorowy)",
        " (np. biega, skacze, trenuje, walczy na sali)",
        " (np. tarcza, zbroja, miecz, hełm rycerski)",
        " (np. jeden, dwa, dziesięć, sto punktów)",
        " (np. pierwszy, drugi, trzeci, dziesiąty)",
        " w każdym zdaniu pojedynczym i złożonym",
        " bez względu na formę gramatyczną wyrazu",
        " jako stała i niezmienna reguła językowa",
        " na początku i na końcu każdego zdania",
        " we wszystkich przypadkach liczby pojedynczej"
    ]
    
    candidates = []
    # If contains np. or grammar terms
    if any(k in w.lower() for k in ['np.', 'kto?', 'co?', 'jaki?', 'cech', 'czynnoś', 'część', 'rzeczownik', 'czasownik', 'przymiotnik', 'liczebnik', 'przysłówek', 'zaimek', 'spójnik']):
        for s in grammar_suffixes:
            candidates.append(w.rstrip('.') + s)
    
    for s in context_suffixes:
        candidates.append(w.rstrip('.') + s)
        
    best = min(candidates, key=lambda s: abs(len(s) - target_len))
    if abs(len(best) - target_len) < abs(len(w) - target_len):
        return best
    return w

# Let's test on the first 10 scenarios
for s in scenarios[:10]:
    c = s['correct']
    L = len(c)
    print(f"\n{s['id']} (Target L={L}):")
    print(f"  C ({len(c)}): {c}")
    for w in s['wrong']:
        exp = expand_distractor(w, L)
        print(f"  W: '{w}' ({len(w)}) -> '{exp}' ({len(exp)}, diff={len(exp)-L})")
