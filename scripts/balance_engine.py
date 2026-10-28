import sys, re

def create_balancer():
    # Long custom expansions for specific complex questions
    CUSTOM_EXPANSIONS = {
        "inv_ep4_4": {
            "Wyrazy pokrewne i synonimy to dokładnie to samo": "Wyrazy pokrewne i synonimy to dokładnie to samo pojęcie językowe (np. szkoła – szkolny to identyczne wyrazy bliskoznaczne)",
            "Synonimy muszą rymować się ze sobą": "Synonimy to wyrazy, które koniecznie muszą rymować się ze sobą na końcu kolejnych wersów w wierszu (np. szkoła – koła)"
        },
        "t_ep4_1": {
            "Zawsze piszemy trzy litery iii": "We wszystkich wyrazach zapożyczonych i rodzimych zawsze i bez wyjątku piszemy trzy litery iii na końcu wyrazu",
            "Zawsze piszemy samo y": "W zakończeniach dopełniacza rzeczowników miękkotematycznych zawsze piszemy samo pojedyncze y w każdym wyrazie"
        },
        "t_ep5_3": {
            "Zawsze stawiamy kropkę po każdym skrócie": "Zawsze i bezwzględnie stawiamy kropkę po każdym skrócie wyrazu, niezależnie od tego, jaką literą się kończy",
            "Nigdy nie stawiamy kropki w skrótach": "Nigdy i w żadnym wypadku nie stawiamy kropki po skrótach wyrazów w oficjalnych pismach i podręcznikach szkolnych"
        },
        "wi_ep5_3": {
            "Róża oznacza po prostu roślinę z kolcami do sprzedania w kwiaciarni": "Róża w powieści oznacza po prostu zwykłą roślinę z kolcami przeznaczoną do szybkiego sprzedania w kwiaciarni",
            "Róża to symbol nowej rakiety kosmicznej": "Róża to symbol nowoczesnej rakiety kosmicznej służącej bohaterowi do podróży między odległymi asteroidami"
        }
    }

    PHRASES = [
        # Quotes
        ("„", "”", [
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
            ", powtórzmy to jeszcze raz od początku!",
            ", zaraz zaczyna się ważny sprawdzian w klasie!"
        ]),
        ("«", "»", [
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
            ", powtórzmy to jeszcze raz od początku!"
        ])
    ]

    ADDITIONS_G = [
        " (np. szybki, zwinny, waleczny rycerz)",
        " (np. biega, walczy, trenuje na sali)",
        " (np. tarcza, zbroja, hełm, miecz bojowy)",
        " (np. jeden, dwa, dziesięć, sto punktów)",
        " (np. pierwszy, drugi, trzeci, dziesiąty)",
        " (np. wesoło, szybko, dokładnie, pewnie)",
        " (np. pod, nad, za, przed, obok zamku)",
        " (np. dom, szkoła, uczeń, klasa, książka)",
        " (np. czytać, pisać, rysować, trenować)",
        " (np. czerwony, duży, mądry, szlachetny)",
        " w każdym zdaniu pojedynczym i złożonym",
        " we wszystkich formach fleksyjnych wyrazu",
        " na początku i na końcu wypowiedzi pisemnej",
        " w języku polskim bez żadnych wyjątków",
        " jako stały i niezmienny element mowy",
        " w liczbie pojedynczej oraz liczbie mnogiej",
        " w mianowniku i pozostałych przypadkach",
        " w wypowiedziach pisemnych i ustnych w szkole",
        " w oficjalnym stylu urzędowym i naukowym",
        " zgodnie z regułami poprawnej polszczyzny"
    ]

    ADDITIONS_S = [
        " i wracasz prosto do domu po lekcjach",
        " w trakcie codziennych zajęć w klasie",
        " podczas długiej przerwy obiadowej w szkole",
        " w czytelni biblioteki po skończonych lekcjach",
        " w szatni szkolnej przed rozpoczęciem zajęć",
        " na korytarzu w trakcie trwania dużej przerwy",
        " w drodze powrotnej ze szkoły prosto do domu",
        " w swoim pokoju po całym dniu nauki w szkole",
        " podczas porannej zbiórki przed rozpoczęciem lekcji",
        " w trakcie wspólnej pracy w ławkach szkolnych",
        " przed samym wejściem do sali lekcyjnej w szkole",
        " podczas przygotowań do trudnego sprawdzianu z polskiego",
        " w obecności nauczyciela i całej grupy uczniów",
        " w trakcie rozwiązywania trudnych ćwiczeń w zeszycie",
        " bez pośpiechu i z zachowaniem pełnego skupienia",
        " podczas uroczystego apelu w auli szkolnej",
        " w trakcie rozmowy z dyrekcją szkoły w gabinecie",
        " z uśmiechem, życzliwością i szacunkiem dla innych",
        " w skupieniu, ciszy i pełnym zaangażowaniu na zajęciach",
        " na boisku szkolnym podczas turnieju drużynowego"
    ]

    def expand(sid, w, L):
        w_clean = w.strip()
        diff = L - len(w_clean)
        if abs(diff) <= 6:
            return w_clean

        # Check custom expansions
        if sid in CUSTOM_EXPANSIONS and w_clean in CUSTOM_EXPANSIONS[sid]:
            return CUSTOM_EXPANSIONS[sid][w_clean]

        candidates = []

        # Quotes
        for q1, q2, phrases in PHRASES:
            if w_clean.startswith(q1) and w_clean.endswith(q2):
                inner = w_clean[1:-1].rstrip('.!? ')
                for p in phrases:
                    candidates.append(f"{q1}{inner}{p}{q2}")

        # Grammar
        is_grammar = any(k in w_clean.lower() for k in ['odpowiada', 'wskazuje', 'określa', 'nazywa', 'oznacza', 'zmienia', 'zastępuje', 'cząstka', 'słowo', 'wyraz', 'forma', 'czasownik', 'rzeczownik', 'przymiotnik', 'liczebnik', 'przysłówek', 'zaimek', 'spójnik', 'litera', 'piszemy', 'kończy', 'skrót'])
        base = w_clean.rstrip('. ')
        if is_grammar:
            for p in ADDITIONS_G:
                candidates.append(base + p)
                if diff > 45:
                    for p2 in [" w klasie", " w zdaniu", " na lekcji", " w tekście"]:
                        candidates.append(base + p + p2)

        # Situational
        for p in ADDITIONS_S:
            candidates.append(base + p)
            if diff > 45:
                for p2 in [" w klasie", " w szkole", " po dzwonku", " na przerwie", " przed lekcją", " po zajęciach"]:
                    candidates.append(base + p + p2)

        if not candidates:
            return w_clean

        best = min(candidates, key=lambda c: abs(len(c) - L))
        return best

    return expand

print("Balancer factory created.")
