import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_232_scenarios.json', 'r', encoding='utf-8') as f:
    scenarios = json.load(f)

# Comprehensive phrase library for natural Polish padding / contextualization
def expand_option(w, target_len):
    w = w.strip()
    diff = target_len - len(w)
    if abs(diff) <= 4:
        return w
    
    # If W is already too long
    if diff < -4:
        # trim if feasible
        return w

    # Candidates list
    candidates = []

    # 1. Quoted speech
    if (w.startswith('„') and w.endswith('”')) or (w.startswith('«') and w.endswith('»')) or (w.startswith('"') and w.endswith('"')):
        q1 = w[0]
        q2 = w[-1]
        inner = w[1:-1].rstrip('.!? ')
        phrases = [
            ", bo bardzo mi na tym zależy!",
            ", to dla nas niezwykle ważne zadanie!",
            ", zrobimy to wspólnie po lekcjach!",
            ", na pewno świetnie sobie poradzimy!",
            ", dziękuję serdecznie za pomoc i radę!",
            ", musimy o tym spokojnie porozmawiać!",
            ", to naprawdę ciekawa sprawa do zbadania!",
            ", sprawdźmy to razem w podręczniku szkolnym!",
            ", to świetny pomysł na dzisiejszy dzień!",
            ", zapytajmy o to nauczyciela na lekcji!",
            ", nie wolno nam się poddawać bez walki!",
            ", zrobimy to dokładnie krok po kroku!",
            ", to najlepsze możliwe rozwiązanie zadania!",
            ", cieszę się z twojego wspaniałego sukcesu!",
            ", to dla mnie wielki zaszczyt i radość!",
            ", uważaj na błędy ortograficzne w tekście!",
            ", powtórzmy to jeszcze raz od początku!",
            ", zaraz zaczyna się ważny sprawdzian w klasie!"
        ]
        for p in phrases:
            candidates.append(f"{q1}{inner}{p}{q2}")

    # 2. Starts with Gdy / Kiedy / Ponieważ / Jeśli
    elif any(w.startswith(k) for k in ['Gdy ', 'Kiedy ', 'Jeśli ', 'Ponieważ ', 'Dopóki ']):
        base = w.rstrip('. ')
        phrases = [
            " w szkolnej sali lekcyjnej",
            " podczas przerwy obiadowej w szkole",
            " w czytelni biblioteki po lekcjach",
            " w szatni przed rozpoczęciem zajęć",
            " na korytarzu w trakcie długiej przerwy",
            " w drodze powrotnej ze szkoły do domu",
            " w swoim pokoju po całym dniu nauki",
            " podczas porannej zbiórki przed lekcjami",
            " w trakcie wspólnej pracy w ławkach",
            " przed samym wejściem do sali lekcyjnej",
            " i wracasz spokojnie do domu",
            " i rozmawiasz z kolegami z klasy",
            " i odpoczywasz w swoim pokoju domowym",
            " i szukasz wolnego miejsca w sali szkolnej",
            " i czekasz na rozpoczęcie ważnych zajęć",
            " podczas przygotowań do trudnego sprawdzianu",
            " w obecności nauczyciela i całej klasy",
            " w trakcie rozwiązywania trudnych ćwiczeń",
            " bez pośpiechu i z pełnym skupieniem",
            " podczas uroczystego apelu w auli szkoły"
        ]
        for p in phrases:
            candidates.append(base + p)
            # also double additions
            for p2 in [" na lekcji", " w szkole", " po dzwonku"]:
                candidates.append(base + p + p2)

    # 3. Grammatical / Linguistic definitions
    elif any(k in w.lower() for k in ['odpowiada', 'wskazuje', 'określa', 'nazywa', 'oznacza', 'zmienia', 'zastępuje', 'cząstka', 'słowo', 'wyraz', 'forma', 'czasownik', 'rzeczownik', 'przymiotnik', 'liczebnik', 'przysłówek', 'zaimek', 'spójnik', 'litera', 'piszemy', 'kończy']):
        base = w.rstrip('. ')
        phrases = [
            " (np. szybki, zwinny, waleczny)",
            " (np. biega, walczy, trenuje na sali)",
            " (np. tarcza, zbroja, hełm, miecz)",
            " (np. jeden, dwa, dziesięć, sto)",
            " (np. pierwszy, drugi, trzeci, setny)",
            " (np. wesoło, szybko, dokładnie)",
            " (np. pod, nad, za, przed, obok)",
            " (np. dom, szkoła, uczeń, książka)",
            " (np. czytać, pisać, rysować, uczyć się)",
            " (np. czerwony, duży, mądry, wesoły)",
            " w każdym zdaniu pojedynczym i złożonym",
            " we wszystkich formach fleksyjnych wyrazu",
            " na początku i na końcu wypowiedzi pisemnej",
            " w języku polskim bez żadnych wyjątków",
            " jako stały i niezmienny element mowy",
            " w liczbie pojedynczej oraz liczbie mnogiej",
            " w mianowniku i pozostałych przypadkach",
            " w wypowiedziach pisemnych i ustnych",
            " w oficjalnym stylu urzędowym i naukowym",
            " zgodnie z zasadami poprawnej polszczyzny"
        ]
        for p in phrases:
            candidates.append(base + p)

    # 4. General sentences / situational actions
    base = w.rstrip('. ')
    general_phrases = [
        " i wracasz do domu",
        " w trakcie przerwy",
        " podczas lekcji w klasie",
        " w szkolnej bibliotece",
        " przed rozpoczęciem zajęć",
        " na korytarzu szkolnym",
        " w trakcie codziennych lekcji",
        " podczas wspólnego treningu na sali",
        " po zakończeniu wszystkich lekcji w szkole",
        " w rozmowie z kolegami z ławki szkolnej",
        " w trakcie przygotowań do sprawdzianu z polskiego",
        " przed wyjściem ze szkoły prosto do domu",
        " podczas cichej pracy na lekcji w klasie",
        " w sali gimnastycznej przed ćwiczeniami fizycznymi",
        " w szkolnej szatni przed pierwszym dzwonkiem",
        " w zeszycie przedmiotowym z języka polskiego",
        " bez konsultacji z nauczycielem w sali lekcyjnej",
        " w porozumieniu ze wszystkimi uczniami w grupie",
        " z zachowaniem pełnej kultury osobistej i taktu",
        " przed przystąpieniem do rozwiązywania trudnych zadań",
        " podczas porannej zbiórki całej drużyny szkolnej",
        " w podręczniku szkolnym na wyznaczonej stronie",
        " na tablicy w sali lekcyjnej przed całą klasą",
        " w rozmowie z dyrekcją szkoły podczas spotkania",
        " z uśmiechem, życzliwością i szacunkiem dla innych",
        " w skupieniu, ciszy i pełnym zaangażowaniu na lekcji",
        " w trakcie uroczystego apelu na rozpoczęcie roku",
        " podczas wycieczki klasowej do muzeum narodowego",
        " w trakcie dyskusji na forum całej grupy uczniów",
        " z myślą o dobru całej społeczności szkolnej"
    ]
    for p in general_phrases:
        candidates.append(base + p)
        # combined phrases for longer targets
        if diff > 50:
            for p2 in [" w klasie", " w szkole", " po dzwonku", " na przerwie", " przed lekcją", " po zajęciach"]:
                candidates.append(base + p + p2)

    if not candidates:
        return w

    # Choose candidate with minimum absolute difference to target_len
    best = min(candidates, key=lambda c: abs(len(c) - target_len))
    return best

# Test on all scenarios
diffs = []
for s in scenarios:
    L = len(s['correct'])
    for w in s['wrong']:
        exp = expand_option(w, L)
        d = abs(len(exp) - L)
        diffs.append((d, s['id'], L, len(exp), w, exp))

diff_vals = [d[0] for d in diffs]
print(f"Max diff: {max(diff_vals)}")
print(f"Average diff: {sum(diff_vals)/len(diff_vals):.2f}")
print(f"Diffs <= 5: {sum(1 for d in diff_vals if d <= 5)} / {len(diff_vals)} ({sum(1 for d in diff_vals if d <= 5)/len(diff_vals)*100:.1f}%)")
print(f"Diffs <= 8: {sum(1 for d in diff_vals if d <= 8)} / {len(diff_vals)} ({sum(1 for d in diff_vals if d <= 8)/len(diff_vals)*100:.1f}%)")

# Print the top 5 worst differences
diffs.sort(key=lambda x: x[0], reverse=True)
print("\nTop 5 worst diffs:")
for d, sid, L, explen, w, exp in diffs[:5]:
    print(f"  {sid}: Target={L}, Got={explen} (diff={d}) | W='{w}' -> '{exp}'")
