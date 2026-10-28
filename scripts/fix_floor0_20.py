import sys, re
sys.stdout.reconfigure(encoding='utf-8')

REPLACEMENTS = {
    'w_ep1_3': [
        ("Pełna koncentracja przed nowym poleceniem nauczyciela", True),
        ("Żegnasz się serdecznie z kolegami przed wyjściem ze szkoły", False),
        ("Rozmawiasz cicho ze znajomymi pod kołdrą późnym wieczorem", False)
    ],
    'w_ep2_1': [
        ("Odpowiada na pytania Kto? Co? (np. tarcza, rycerz)", True),
        ("Wskazuje cechę Jaki? Jaka? (np. szybki, odważny wojak)", False),
        ("Określa czynność Co robi? (np. dzielnie biega, walczy)", False)
    ],
    'w_ep2_3': [
        ("Określa cechę: nieustraszony, żelazny, honorowy", True),
        ("Mówi dokładnie, ile jest mieczy w całej zbrojowni", False),
        ("To dokładnie to samo co czasownik w bezokoliczniku", False)
    ],
    'w_ep3_4': [
        ("Pierwszy, drugi, setny (wskazuje miejsce w szyku)", True),
        ("Jeden, dwa, sto (wskazuje dokładną liczbę sztuk)", False),
        ("Dzielny, waleczny, twardy (wskazuje stałą cechę)", False)
    ],
    'w_ep3_5': [
        ("Stopień równy, wyższy i najwyższy przysłówka", True),
        ("Odmiana wyrazów przez przypadki i liczby", False),
        ("Dopisywanie końcówki bezosobowej -no i -to", False)
    ],
    'w_ep4_2': [
        ("Przed spójnikami: ale, lecz, jednak, a zawsze stawiamy przecinek", True),
        ("Nigdy i w żadnym wypadku nie stawiamy przecinka przed spójnikami", False),
        ("Przecinek stawiamy wyłącznie i tylko na samym końcu całego zdania", False)
    ],
    'w_ep5_2': [
        ("Zdobyty zamek = zamek, który został przez nas zdobyty", True),
        ("Zamek warowny, który samodzielnie zdobywa inne twierdze", False),
        ("Czasownik oznaczający przyszłe działania obronne załogi", False)
    ],
    'w_ep5_3': [
        ("Atakując wroga, zachował pełny spokój (ten sam podmiot!)", True),
        ("Każda z wymienionych czynności ma zupełnie innego sprawcę", False),
        ("Wypowiedź dotyczy wyłącznie legend sprzed tysiąca lat", False)
    ],
    'w_ep5_5': [
        ("Zdanie podrzędne przydawkowe po przecinku określa rycerza", True),
        ("Pod żadnym pozorem nie wolno stawiać przecinka przed który", False),
        ("To pojedynczy wyraz występujący zupełnie bez orzeczenia", False)
    ],
    't_ep1_3': [
        ("Dyskretna wiedza o trudnych zasadach gramatycznych", True),
        ("Głośne plotkowanie na lekcji o ocenach ze sprawdzianu", False),
        ("Śpiewanie piosenek na korytarzu podczas krótkiej pauzy", False)
    ],
    't_ep1_5': [
        ("Zdobycie maksymalnej liczby punktów z testu", True),
        ("Dostanie nieprzyjemnej uwagi w dzienniczku", False),
        ("Ucieczka przed nauczycielem podczas przerwy", False)
    ],
    't_ep2_4': [
        ("Piórnik – pióro – pierze (ó wymienia się na e)", True),
        ("Piórnik piszemy przez u zwykłe w każdym tekście", False),
        ("Litera ó w wyrazie wymienia się na spółgłoskę k", False)
    ],
    'r_ep1_2': [
        ("Każde słowo w zdaniu zapisujemy oddzielnie z odstępem (spacją)", True),
        ("Piszemy wszystkie słowa w jednej długiej linii zupełnie razem", False),
        ("Stawiamy znak kropki po każdej pojedynczej zapisanej literze", False)
    ],
    'r_ep2_5': [
        ("Podmiot i orzeczenie tworzą najważniejszy związek główny każdego zdania", True),
        ("Podmiot i orzeczenie nigdy pod żadnym pozorem nie występują w zdaniu", False),
        ("Związek główny w zdaniu to wyłącznie połączenie dwóch przymiotników", False)
    ],
    'r_ep3_4': [
        ("Podmiot wraz z określającymi go przydawkami tworzy grupę podmiotu", True),
        ("Grupa podmiotu w zdaniu składa się tylko z pojedynczych spójników", False),
        ("Grupa podmiotu występuje zawsze na samym końcu zdania po kropce", False)
    ],
    'r_ep6_1': [
        ("Nauczyciel powiedział: „Otwórzcie podręczniki na stronie dziesiątej”.", True),
        ("Nauczyciel powiedział «otwórzcie podręczniki szkolne bez cudzysłowu»", False),
        ("Nauczyciel powiedział że: Otwórzcie podręczniki w okrągłym nawiasie", False)
    ],
    'r_ep7_1': [
        ("Lis tłumaczy, że to czas poświęcony róży czyni ją tak ważną i jedyną na świecie", True),
        ("Lis twierdzi stanowczo, że róże są bezużyteczne i należy je natychmiast zerwać", False),
        ("Mały Książę kupuje nową piękną różę w miejskim sklepie z zabawkami dla dzieci", False)
    ],
    'inv_ep1_3': [
        ("Zachowanie marginesów i czytelne pismo ułatwiają czytanie i dają wyższą ocenę", True),
        ("Pisz po samych brzegach kartki i zamazuj błędy grubą warstwą białego korektora", False),
        ("Zeszyt powinien być pomięty i brudny, bo to świadczy o intensywnej nauce ucznia", False)
    ],
    'wi_ep2_2': [
        ("«Dzielny jak lew» – zestawia męstwo bohatera z powszechnie znaną odwagą lwa", True),
        ("Oznacza, że człowiek dosłownie zamienił się w prawdziwe dzikie zwierzę w lesie", False),
        ("To rażący błąd językowy, którego pod żadnym pozorem nie wolno w tekście używać", False)
    ],
    'wi_ep3_5': [
        ("Oznacza, że ktoś jest niezwykle dobry, szlachetny i pomocny dla innych ludzi", True),
        ("Oznacza, że ktoś posiada serce zrobione z prawdziwego szczerego złota w klatce", False),
        ("To dosadne określenie człowieka bardzo chciwego, złośliwego oraz podstępnego", False)
    ]
}

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

for sid, opts in REPLACEMENTS.items():
    # Find block for this scenario
    # Pattern: id: 'sid' ... options: [ ... ]
    m = re.search(r"(id:\s*['\"]" + sid + r"['\"].*?options:\s*\[)([^\]]+)(\])", content, re.DOTALL)
    if not m:
        print(f"NOT FOUND: {sid}")
        continue
    prefix = m.group(1)
    suffix = m.group(3)
    opts_str = "\n" + ",\n".join(
        f"            {{ textPl: '{opt_text}', correct: {'true' if corr else 'false'} }}"
        for opt_text, corr in opts
    ) + "\n          "
    new_sub = prefix + opts_str + suffix
    content = content[:m.start()] + new_sub + content[m.end():]
    print(f"Updated {sid}")

with open('src/data/floor0EpisodesData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved floor0EpisodesData.js successfully!")
