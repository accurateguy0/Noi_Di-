# -*- coding: utf-8 -*-
"""
Szczeniak - 6 zestawów na każdego z 6 bohaterów (łącznie 36 zestawów po 20 pytań = 720 pytań).
Wszystkie opcje odpowiedzi są starannie zbalansowane pod kątem długości i realizmu wypowiedzi.
Szczeniak ma stałe 13 HP (nie 40 HP).
"""
import random

BALANCED_PUPPY_QUESTIONS_POOL = [
    {
        "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
        "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
        "distractors": [
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
        ]
    },
    {
        "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
        "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
        "distractors": [
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
        ]
    },
    {
        "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
        "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
        "distractors": [
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
        ]
    },
    {
        "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
        "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
        "distractors": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”."
        ]
    },
    {
        "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
        "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
        "distractors": [
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela."
        ]
    },
    {
        "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
        "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
        "distractors": [
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
        ]
    },
    {
        "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
        "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
        "distractors": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
        ]
    },
    {
        "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
        "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
        "distractors": [
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
        ]
    },
    {
        "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
        "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
        "distractors": [
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku."
        ]
    },
    {
        "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
        "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
        "distractors": [
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”."
        ]
    },
    {
        "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
        "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
        "distractors": [
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego."
        ]
    },
    {
        "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
        "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
        "distractors": [
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”."
        ]
    },
    {
        "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
        "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
        "distractors": [
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”."
        ]
    },
    {
        "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
        "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
        "distractors": [
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy."
        ]
    },
    {
        "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
        "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
        "distractors": [
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy."
        ]
    },
    {
        "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
        "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
        "distractors": [
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”"
        ]
    },
    {
        "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
        "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
        "distractors": [
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
        ]
    },
    {
        "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
        "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
        "distractors": [
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci."
        ]
    },
    {
        "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
        "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
        "distractors": [
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela."
        ]
    },
    {
        "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
        "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
        "distractors": [
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich."
        ]
    }
]

def get_szczeniak_data():
    heroes = ['warrior', 'thief', 'robot', 'inventor', 'witch', 'jester']
    result = {}

    for h in heroes:
        result[h] = []
        for i in range(1, 7):
            t_name = f'Szczeniak [{h.capitalize()}]: Sytuacje i Etykieta {i}'
            t_sub = f'Sprawdzian reakcji i kultury języka ({i}/6) - 20 pytań'
            
            # 20 unikalnych pytań z przetasowanymi opcjami o idealnie zrównoważonej długości
            seed_val = hash(h) + i * 1013
            random.seed(seed_val)
            shuffled_pool = list(BALANCED_PUPPY_QUESTIONS_POOL)
            random.shuffle(shuffled_pool)

            questions = []
            for q_idx, item in enumerate(shuffled_pool[:20]):
                correct = item['correctWord']
                opts = [correct] + list(item['distractors'])
                random.shuffle(opts)
                questions.append({
                    'id': f'sz_{h}_s{i}_q{q_idx + 1}',
                    'promptPl': item['promptPl'],
                    'correctWord': correct,
                    'options': opts
                })

            result[h].append({
                'titlePl': t_name,
                'subtitlePl': t_sub,
                'enemyName': 'Szczeniak',
                'enemyMaxHp': 13,
                'enemyDamage': 2,
                'descriptionPl': 'Szczeniak bada twoje zachowanie w sytuacjach szkolnych! Wybierz trafną reakcję (20 pytań).',
                'questions': questions
            })

    return result
