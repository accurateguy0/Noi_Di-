// Pula wyzwań dla Bossów modułowych (Piłkarz, Cwaniak, Nauczycielka, Lekarz, Instagramerka)
// Szczegółowa podstawa programowa z języka polskiego Klas 4–8 CKE (bez infantylnych odpowiedzi ani oczywistych podpowiedzi).

// ============================================================================
// 1. BOSS PIŁKARZ — BOISKO, CZĘŚCI MOWY, TRYBY I LICZEBNIKI (KLASA 4–5 CKE)
// ============================================================================
export const BOSS_FOOTBALLER_QUESTIONS = [
  {
    type: 'quiz',
    promptPl: 'Wskaż zdanie, w którym wyróżniony wyraz jest CZASOWNIKIEM W TRYBIE ROZKAZUJĄCYM:',
    options: [
      { text: '„Podaj piłkę do niepilnowanego skrzydłowego!”', correct: true },
      { text: '„Zawodnik podaje piłkę do skrzydłowego.”', correct: false },
      { text: '„Podanie skrzydłowego otworzyło drogę do bramki.”', correct: false },
      { text: '„Gdyby podał piłkę wcześniej, padłby gol.”', correct: false }
    ],
    hint: 'Tryb rozkazujący wyraża bezpośrednie polecenie lub prośbę (np. podaj, strzelaj).'
  },
  {
    type: 'quiz',
    promptPl: 'Które z poniższych zdań zawiera poprawny pod względem fleksyjnym LICZEBNIK ZBIOROWY:',
    options: [
      { text: 'Na boisko wbiegło dwoje młodych sędziów technicznych.', correct: true },
      { text: 'Na boisko wbiegło dwa młodych sędziów technicznych.', correct: false },
      { text: 'Na boisko wbiegło dwóch sędziami technicznymi.', correct: false },
      { text: 'Na boisko wbiegło dwojga sędziów technicznych.', correct: false }
    ],
    hint: 'Liczebniki zbiorowe (dwoje, troje) łączą się z rzeczownikami oznaczającymi osoby różnej płci lub istoty niedorosłe.'
  },
  {
    type: 'quiz',
    promptPl: 'Wskaż szereg, w którym poprawnie podano stopień wyższy i najwyższy przysłówka «celnie»:',
    options: [
      { text: 'celnie – celniej – najcelniej', correct: true },
      { text: 'celnie – bardziej celnie – najbardziej celno', correct: false },
      { text: 'celnie – celniejszy – najcelniejszy', correct: false },
      { text: 'celnie – celniawo – najcelniawiej', correct: false }
    ],
    hint: 'Przysłówek (jak?) stopniuje się z końcówkami: -iej, naj-...-iej.'
  },
  {
    type: 'quiz',
    promptPl: 'W którym momencie meczu piłkarskiego sędzia odgwizduje POZYCJĘ SPALONĄ zawodnika?',
    options: [
      { text: 'Gdy w momencie podania gracz ataku znajduje się bliżej linii bramkowej niż przedostatni zawodnik drużyny broniącej.', correct: true },
      { text: 'Gdy zawodnik fauluje obrońcę w strefie pola bramkowego podczas bezpośredniej walki o dośrodkowaną piłkę.', correct: false },
      { text: 'Gdy piłka całym obwodem opuszcza linię końcową boiska po wcześniejszym kontakcie z graczem drużyny broniącej.', correct: false },
      { text: 'Gdy bramkarz przetrzymuje piłkę w dłoniach w polu karnym dłużej niż sześć sekund przed wykonaniem wykopu.', correct: false }
    ],
    hint: 'Spalony dotyczy pozycji atakującego względem przedostatniego rywala w chwili podania.'
  },
  {
    type: 'quiz',
    promptPl: 'Wskaż zdanie, w którym przymiotnik z partykułą «nie» zapisano w pełni POPRAWNIE:',
    options: [
      { text: 'To był niełatwy mecz, ale drużyna zachowała pełną dyscyplinę taktyczną.', correct: true },
      { text: 'To był nie łatwy mecz, ale drużyna zachowała pełną dyscyplinę taktyczną.', correct: false },
      { text: 'Trener przygotował nieprzepisowe, niesportowe i niefair zagrania.', correct: false },
      { text: 'Bramkarz wykonał nie dokładny wykop z pola karnego.', correct: false }
    ],
    hint: '«Nie» z przymiotnikami w stopniu równym piszemy zasadniczo łącznie (niełatwy, niedokładny).'
  },
  {
    type: 'quiz',
    promptPl: 'Wskaż zdanie, w którym występuje CZASOWNIK NIEDOKONANY w czasie przeszłym:',
    options: [
      { text: 'Pomocnik trenował rzuty wolne przez dwie godziny po każdym meczu.', correct: true },
      { text: 'Pomocnik strzelił decydującego gola w doliczonym czasie gry.', correct: false },
      { text: 'Sędzia odgwizdał rzut rożny na korzyść gospodarzy.', correct: false },
      { text: 'Obrona wybiła piłkę daleko poza pole karne.', correct: false }
    ],
    hint: 'Czasownik niedokonany wyraża czynność trwającą lub powtarzającą się, która nie została zamknięta (trenował).'
  },
  {
    type: 'quiz',
    promptPl: 'Który zwrot frazeologiczny oznacza zachowanie pełnej czujności i kontrolowanie sytuacji na boisku?',
    options: [
      { text: 'Trzymać rękę na pulsie', correct: true },
      { text: 'Rzucać grochem o ścianę', correct: false },
      { text: 'Porywać się z motyką na słońce', correct: false },
      { text: 'Siedzieć z założonymi rękami', correct: false }
    ],
    hint: 'Czujna kontrola to trzymanie ręki na pulsie wydarzeń.'
  },
  {
    type: 'quiz',
    promptPl: 'Jaką karę indywidualną nakłada sędzia na zawodnika za brutalny, złośliwy faul taktyczny zagrażający zdrowiu rywala?',
    options: [
      { text: 'Czerwoną kartkę oznaczającą natychmiastowe wykluczenie z gry i osłabienie drużyny.', correct: true },
      { text: 'Żółtą kartkę będącą jedynie wstępnym ostrzeżeniem gracza bez osłabienia składu.', correct: false },
      { text: 'Dwie minuty kary na ławce rezerwowych poza boiskiem niczym w meczu hokejowym.', correct: false },
      { text: 'Zwykły rzut wolny pośredni na połowie rywali bez prawa ukarania żadną kartką.', correct: false }
    ],
    hint: 'Brutalny faul skutkuje bezpośrednią czerwoną kartką.'
  },
{
    "prompt": "W którym momencie zawodnik ataku znajduje się na pozycji spalonej w myśl przepisów PZPN i FIFA?",
    "options": [
      {
        "text": "Gdy w chwili podania piłki jest bliżej linii bramkowej niż piłka i przedostatni zawodnik rywali.",
        "correct": true
      },
      {
        "text": "Gdy biegnie szybciej niż obrońca rywali po linii bocznej boiska.",
        "correct": false
      },
      {
        "text": "Gdy dotknie piłki obiema rękami na własnej połowie boiska.",
        "correct": false
      },
      {
        "text": "Gdy strzeli gola głową po dośrodkowaniu z rzutu rożnego.",
        "correct": false
      }
    ],
    "hint": "Spalony oceniany jest w momencie zagrania piłki przez partnera."
  },
  {
    "prompt": "W jakiej odległości od linii bramkowej znajduje się punkt karny na standardowym boisku piłkarskim?",
    "options": [
      {
        "text": "Dokładnie 11 metrów (jedenastka)",
        "correct": true
      },
      {
        "text": "7 metrów",
        "correct": false
      },
      {
        "text": "16 metrów i 50 centymetrów",
        "correct": false
      },
      {
        "text": "9 metrów i 15 centymetrów",
        "correct": false
      }
    ],
    "hint": "Dlatego rzut karny popularnie nazywany jest «jedenastką»."
  },
  {
    "prompt": "Co oznacza czerwona kartka pokazana przez sędziego w trakcie meczu piłkarskiego?",
    "options": [
      {
        "text": "Natychmiastowe wykluczenie zawodnika z gry, a drużyna kontynuuje mecz w osłabieniu (w dziesiątkę)",
        "correct": true
      },
      {
        "text": "Ostrzeżenie słowne bez żadnych konsekwencji sportowych",
        "correct": false
      },
      {
        "text": "Konieczność wykonania natychmiastowej zmiany na zawodnika rezerwowego",
        "correct": false
      },
      {
        "text": "Przyznanie dodatkowego rzutu rożnego dla drużyny faulującej",
        "correct": false
      }
    ],
    "hint": "Czerwona kartka oznacza opuszczenie boiska bez prawa powrotu i gry w osłabieniu."
  },
  {
    "prompt": "Wskaż zdanie ze wzorcowym użyciem czasowników dynamicznych typowych dla relacji sprawozdawcy sportowego:",
    "options": [
      {
        "text": "Napastnik dynamicznie dośrodkował w pole karne, a skrzydłowy uderzył z woleja pod poprzeczkę!",
        "correct": true
      },
      {
        "text": "Piłkarze powoli spacerowali po zielonej trawie i myśleli o obiedzie.",
        "correct": false
      },
      {
        "text": "Sędzia siedział na ławce i czytał gazetę sportową z zeszłego tygodnia.",
        "correct": false
      },
      {
        "text": "Bramka stała nieruchomo na swoim miejscu w rogu boiska.",
        "correct": false
      }
    ],
    "hint": "Sprawozdanie sportowe cechuje nagromadzenie czasowników wyrażających gwałtowny ruch."
  },
  {
    "prompt": "Wskaż bezbłędne stopniowanie przymiotnika «dobry» w języku polskim:",
    "options": [
      {
        "text": "Dobry – lepszy – najlepszy (stopniowanie nieregularne)",
        "correct": true
      },
      {
        "text": "Dobry – dobrszy – najdobrszy",
        "correct": false
      },
      {
        "text": "Dobry – bardziej dobry – najbardziej dobry",
        "correct": false
      },
      {
        "text": "Dobry – doborowy – najdoborowszy",
        "correct": false
      }
    ],
    "hint": "Przymiotnik «dobry» tworzy stopień wyższy z zupełnie innego rdzenia (lepszy)."
  },
  {
    "prompt": "Wskaż zdanie o nienagannej poprawności składniowej z czasownikiem zaprzeczonym «nie wygrać»:",
    "options": [
      {
        "text": "Nasza drużyna nie wygrała dzisiejszego meczu z rywalami.",
        "correct": true
      },
      {
        "text": "Nasza drużyna nie wygrała dzisiejszy mecz z rywalami.",
        "correct": false
      },
      {
        "text": "Nie wygraliśmy ten turniej w ubiegłym tygodniu.",
        "correct": false
      },
      {
        "text": "Trener nie widział ten karny na boisku.",
        "correct": false
      }
    ],
    "hint": "Negacja orzeczenia wymaga dopełniacza (kogo? czego? -> meczu), a nie biernika (mecz)."
  },
  {
    "prompt": "Które minerały (elektrolity) tracone z potem podczas meczu są kluczowe w zapobieganiu bolesnym skurczom mięśni?",
    "options": [
      {
        "text": "Sód, potas oraz magnez",
        "correct": true
      },
      {
        "text": "Ołów, rtęć i arsen",
        "correct": false
      },
      {
        "text": "Czyste złoto i srebro",
        "correct": false
      },
      {
        "text": "Krzem i węgiel kamienny",
        "correct": false
      }
    ],
    "hint": "Elektrolity (sód, potas, magnez) odpowiadają za prawidłowe przewodnictwo nerwowo-mięśniowe."
  },
  {
    "prompt": "Co w języku ogólnym oznacza przenośny związek frazeologiczny «strzelić sobie samobója»?",
    "options": [
      {
        "text": "Zaszkodzić samemu sobie przez własną nieuwagę, błąd lub niefortunne działanie",
        "correct": true
      },
      {
        "text": "Zdobyć pięknego, widowiskowego gola do bramki rywala",
        "correct": false
      },
      {
        "text": "Kupić nowe buty piłkarskie w sklepie sportowym",
        "correct": false
      },
      {
        "text": "Podać piłkę bramkarzowi przed wznowieniem gry",
        "correct": false
      }
    ],
    "hint": "Samobój oznacza działanie na własną niekorzyść."
  },
  {
    "prompt": "Jaka jest kluczowa różnica między rozgrzewką dynamiczną (przed meczem) a statycznym rozciąganiem (po meczu)?",
    "options": [
      {
        "text": "Rozgrzewka dynamiczna pobudza układ nerwowy i mięśnie ruchami, a stretching statyczny wycisza i rozluźnia po wysiłku",
        "correct": true
      },
      {
        "text": "Przed meczem zawodnicy powinni wyłącznie leżeć na murawie i nie ruszać się",
        "correct": false
      },
      {
        "text": "Rozgrzewka dynamiczna polega na spaniu w szatni przez 20 minut",
        "correct": false
      },
      {
        "text": "Po meczu należy biegać sprinty na maksymalnej prędkości przez godzinę",
        "correct": false
      }
    ],
    "hint": "Przed meczem podnosimy tętno ruchami dynamicznymi, po meczu rozluźniamy mięśnie statycznie."
  },
  {
    "prompt": "Wskaż zestaw wyrazów będących synonimami słowa «mecz»:",
    "options": [
      {
        "text": "Pojedynek, spotkanie, starcie, konfrontacja",
        "correct": true
      },
      {
        "text": "Piłka, bramka, gwizdek, chorągiewka",
        "correct": false
      },
      {
        "text": "Bieganie, skakanie, pływanie, rzucanie",
        "correct": false
      },
      {
        "text": "Szatnia, trybuna, tablica, ławka",
        "correct": false
      }
    ],
    "hint": "Synonimy to wyrazy bliskoznaczne oznaczające zawody/rywalizację."
  },
  {
    "prompt": "Co oznacza w przepisach piłkarskich gest sędziego polegający na uniesieniu jednej ręki pionowo w górę?",
    "options": [
      {
        "text": "Rzut wolny pośredni (z którego bramkę można zdobyć tylko po dotknięciu piłki przez drugiego gracza)",
        "correct": true
      },
      {
        "text": "Natychmiastowe zakończenie całego meczu i walkower",
        "correct": false
      },
      {
        "text": "Konieczność zmiany obuwia przez bramkarza",
        "correct": false
      },
      {
        "text": "Przerwę na żądanie trenera jak w koszykówce",
        "correct": false
      }
    ],
    "hint": "Uniesiona ręka sędziego to sygnalizacja rzutu wolnego pośredniego."
  },
  {
    "prompt": "Wskaż zdanie, w którym poprawnie użyto wyrazu «kapitan» w mianowniku liczby mnogiej:",
    "options": [
      {
        "text": "Przed rozpoczęciem wielkiego finału kapitanowie obu drużyn uścisnęli sobie dłonie.",
        "correct": true
      },
      {
        "text": "Przed rozpoczęciem finału kapitanzy wymienili się proporczykami.",
        "correct": false
      },
      {
        "text": "Na murawę wyszli dwaj kapitani z uśmiechem na twarzy.",
        "correct": false
      },
      {
        "text": "Kapitany obu drużyn rozmawiali z głównym arbitrem.",
        "correct": false
      }
    ],
    "hint": "Poprawna forma mianownika l. mn. to: kapitanowie (z końcówką -owie dla osób)."
  }
];

// ============================================================================
// 2. BOSS CWANIAK — FRAZEOLOGIA, PLEONAZMY, REJESTRY I SPÓJNIKI (KLASA 6–7 CKE)
// ============================================================================
export const CWANIAK_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Wskaż sformułowanie będące błędem logiczno-językowym (PLEONAZMEM, tzw. masłem maślanym):',
    options: [
      { text: '„W miesiącu lipcu nastąpi przerwa wakacyjna.” (zamiast: „W lipcu”)', correct: true },
      { text: '„W minionym tygodniu powtórzyliśmy materiał ze składni.”', correct: false },
      { text: '„Główna wygrana w turnieju przypadła kapitanowi.”', correct: false },
      { text: '„Decyzja sędziego była w pełni uzasadniona i sprawiedliwa.”', correct: false }
    ],
    hint: 'Lipiec z definicji jest miesiącem – dodawanie członu «w miesiącu» jest błędem.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz błędny potoczny zwrot z jego poprawnym literackim odpowiednikiem:',
    pairs: [
      { left: 'W każdym bądź razie (błąd)', right: 'W każdym razie LUB bądź co bądź (poprawne)' },
      { left: 'Odegrać znaczenie (błąd)', right: 'Odegrać rolę LUB mieć znaczenie (poprawne)' },
      { left: 'Po linii najmniejszego oporu (błąd)', right: 'Po linii najmniejszego oporu -> Po linii najmniejszego oporu (iść po linii najmniejszego oporu)' },
      { left: 'Pod rząd (błąd)', right: 'Z rzędu LUB kolejno (np. trzy razy z rzędu)' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Rozdziel wypowiedzi na należące do STYLU POTOCZNEGO oraz STYLU OFICJALNEGO:',
    categories: ['STYL POTOCZNY (RÓWIEŚNICZY)', 'STYL OFICJALNY (PUBLICZNY)'],
    items: [
      { text: '„Ale przypał, zapomniałem kluczyków od szatni!”', category: 'STYL POTOCZNY (RÓWIEŚNICZY)' },
      { text: '„Niniejszym przedkładam sprawozdanie z przebiegu obrad samorządu.”', category: 'STYL OFICJALNY (PUBLICZNY)' },
      { text: '„Ten sprawdzian z gramatyki był totalnym sztosem.”', category: 'STYL POTOCZNY (RÓWIEŚNICZY)' },
      { text: '„Zwracam się z uprzejmą prośbą o wyjaśnienie kryteriów oceniania.”', category: 'STYL OFICJALNY (PUBLICZNY)' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym poprawnie użyto imiesłowu przymiotnikowego biernego:',
    options: [
      { text: 'Protokół zebrania został sporządzony i podpisany przez sekretarza.', correct: true },
      { text: 'Protokół zebrania został sporządzający przez sekretarza.', correct: false },
      { text: 'Sporządziwszy protokół, sekretarz został podpisany przez dyrektora.', correct: false },
      { text: 'Protokół sporządzając, sekretarz wyszedł na korytarz.', correct: false }
    ],
    hint: 'Imiesłów przymiotnikowy bierny ma końcówki -ny, -ty, -ony (np. sporządzony, podpisany).'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj miejski frazeologizm do jego precyzyjnego znaczenia słownikowego:',
    pairs: [
      { left: 'Nabić w butelkę', right: 'Oszukać kogoś, wykorzystując jego naiwność i brak wiedzy' },
      { left: 'Wyprowadzić w pole', right: 'Przechytrzyć przeciwnika poprzez sprytnie zastawioną pułapkę' },
      { left: 'Grać w otwarte karty', right: 'Postępować uczciwie, jawnie i bez ukrywania intencji' },
      { left: 'Mieć muchy w nosie', right: 'Być w kapryśnym, dąsającym się humorze bez wyraźnego powodu' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz sformułowania do wyrażeń poprawnych lub zawierających błąd leksykalny:',
    categories: ['SFORMUŁOWANIA W PEŁNI POPRAWNE', 'BŁĘDY JĘZYKOWE I KONTA MINACJE'],
    items: [
      { text: 'Sprawiać kłopot (lub robić problem)', category: 'SFORMUŁOWANIA W PEŁNI POPRAWNE' },
      { text: 'Spadać w dół (pleonazm)', category: 'BŁĘDY JĘZYKOWE I KONTA MINACJE' },
      { text: 'Trzy godziny z rzędu', category: 'SFORMUŁOWANIA W PEŁNI POPRAWNE' },
      { text: 'Darmowy prezent (pleonazm)', category: 'BŁĘDY JĘZYKOWE I KONTA MINACJE' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym zaimek wskazujący «tą» lub «tę» został użyty z nienaganną poprawnością:',
    options: [
      { text: 'Przeczytałem tę fascynującą książkę w ciągu jednego wieczoru.', correct: true },
      { text: 'Przeczytałem tą fascynującą książkę w ciągu jednego wieczoru.', correct: false },
      { text: 'Napisałem list tą piórem, które pożyczyłem od kolegi.', correct: false },
      { text: 'Rozmawiałem z tę koleżanką przed wejściem do gabinetu.', correct: false }
    ],
    hint: 'W bierniku (kogo? co?) używamy formy «tę» książkę; w narzędniku (z kim? z czym?) formy «tą» książką.'
  },
  {
    type: 'quiz',
    prompt: 'Co oznacza przysłowie: «Lepszy wróbel w garści niż gołąb na dachu»?',
    options: [
      { text: 'Lepiej zadowolić się pewną, choć mniejszą korzyścią, niż ryzykować utratę wszystkiego dla niepewnych zysków.', correct: true },
      { text: 'Wszystkie małe wróble siedzące na dachach potrafią latać znacznie szybciej i zwinniej niż gołębie miejskie.', correct: false },
      { text: 'Należy zawsze i za wszelką cenę bez wahania ryzykować cały posiadany majątek w każdej życiowej sytuacji.', correct: false },
      { text: 'Każde dzikie ptaki żyjące w mieście wymagają obfitego dokarmiania świeżym ziarnem w czasie mroźnej zimy.', correct: false }
    ],
    hint: 'Przysłowie przestrzega przed rezygnacją z pewnego dobra na rzecz ułudnych marzeń.'
  },
{
    "type": "sorting",
    "title": "MIEJSKI SLANG A JĘZYK STANDARDOWY",
    "prompt": "Przypisz wyrażenia do slangu młodzieżowego lub oficjalnego języka standardowego:",
    "categories": [
      "SLANG MŁODZIEŻOWY",
      "JĘZYK OGÓLNY (STANDARDOWY)"
    ],
    "items": [
      {
        "text": "Ale cringe i totalny przypał!",
        "category": "SLANG MŁODZIEŻOWY"
      },
      {
        "text": "Sytuacja była niezwykle niezręczna i zawstydzająca.",
        "category": "JĘZYK OGÓLNY (STANDARDOWY)"
      },
      {
        "text": "Ten projekt to po prostu absolutny sztos!",
        "category": "SLANG MŁODZIEŻOWY"
      },
      {
        "text": "Praca została wykonana na najwyższym poziomie.",
        "category": "JĘZYK OGÓLNY (STANDARDOWY)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "MANIPULACJA JĘZYKOWA • PERSWAZJA A MANIPULACJA",
    "prompt": "Na czym polega nieuczciwa MANIPULACJA językowa w wypowiedziach na podwórku lub w reklamie?",
    "options": [
      {
        "text": "Na celowym ukrywaniu prawdy, przeinaczaniu faktów i graniu na emocjach odbiorcy dla własnej korzyści",
        "correct": true
      },
      {
        "text": "Na podawaniu sprawdzonych, rzetelnych danych statystycznych ze źródłem",
        "correct": false
      },
      {
        "text": "Na jawnym i uczciwym przedstawieniu własnego stanowiska w dyskusji",
        "correct": false
      },
      {
        "text": "Na zadawaniu pytań o godzinę odjazdu autobusu miejskiego",
        "correct": false
      }
    ],
    "hint": "Manipulacja działa w ukryciu i zniekształca obraz rzeczywistości."
  },
  {
    "type": "matchup",
    "title": "FRAZEOLOGIA SPRYTU I CWANIACTWA",
    "prompt": "Dopasuj podwórkowy frazeologizm do jego rzeczywistego znaczenia:",
    "pairs": [
      {
        "left": "Wyprowadzić w pole",
        "right": "Przechytrzyć kogoś, oszukać i wprowadzić w błąd"
      },
      {
        "left": "Owinąć wokół palca",
        "right": "Całkowicie podporządkować sobie kogoś swoim urokiem lub sprytem"
      },
      {
        "left": "Zbijać bąki",
        "right": "Leniuchować i marnować czas bezproduktywnie na ławce"
      },
      {
        "left": "Zrobić w konia",
        "right": "Zrobić z kogoś naiwniaka i nabrać na nieprawdę"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "CYBERBEZPIECZEŃSTWO • PRAWDA CZY PRZEKRĘT",
    "prompt": "Przypisz sytuacje w sieci do bezpiecznych lub podejrzanych (phishing / oszustwo):",
    "categories": [
      "BEZPIECZNE SYTUACJE",
      "PODEJRZANY PRZEKRĘT (PHISHING)"
    ],
    "items": [
      {
        "text": "Logowanie przez oficjalną stronę z kłódką HTTPS",
        "category": "BEZPIECZNE SYTUACJE"
      },
      {
        "text": "Wiadomość SMS z linkiem: «Dopłać 1 zł za paczkę albo zostanie zniszczona»",
        "category": "PODEJRZANY PRZEKRĘT (PHISHING)"
      },
      {
        "text": "Instalacja gier z oficjalnego, autoryzowanego sklepu",
        "category": "BEZPIECZNE SYTUACJE"
      },
      {
        "text": "Nieznajomy na czacie żądający hasła do konta w zamian za darmowe skórki",
        "category": "PODEJRZANY PRZEKRĘT (PHISHING)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "STYLISTYKA • ROZPOZNAWANIE EUFEMIZMÓW",
    "prompt": "Które z poniższych zdań zawiera eufemizm (wyrażenie łagodzące przykrą lub niestosowną treść)?",
    "options": [
      {
        "text": "Świadek minął się z prawdą w swoich zeznaniach (zamiast: bezczelnie skłamał).",
        "correct": true
      },
      {
        "text": "Kłamca łże jak pies w żywe oczy!",
        "correct": false
      },
      {
        "text": "Powiedział absolutną, niepodważalną prawdę.",
        "correct": false
      },
      {
        "text": "Krzyczał na całe gardło na środku ulicy.",
        "correct": false
      }
    ],
    "hint": "Eufemizm zastępuje dosadne określenie zwrotem delikatniejszym i bardziej taktownym."
  },
  {
    "type": "matchup",
    "title": "ASERTYWNOŚĆ • OBRONA WŁASNYCH GRANIC",
    "prompt": "Połącz presję rówieśniczą z asertywną, pewną odpowiedzią:",
    "pairs": [
      {
        "left": "«Nie bądź tchórzem, przejdź na czerwonym świetle!»",
        "right": "«Nie mam zamiaru ryzykować zdrowia pod kołami auta, poczekam na zielone.»"
      },
      {
        "left": "«Daj odpisać całą pracę domową, bo cię nie lubimy!»",
        "right": "«Mogę ci wytłumaczyć zadanie, ale pracy za ciebie nie przepiszę.»"
      },
      {
        "left": "«Spróbuj tego napoju energetycznego, wszyscy piją!»",
        "right": "«Dzięki, ale wolę pić wodę, nie potrzebuję sztucznych pobudzaczy.»"
      },
      {
        "left": "«Pośmiejmy się z nowego kolegi z klasy!»",
        "right": "«Nie bawi mnie wyśmiewanie innych, to słabe zachowanie.»"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "FLEKSJA MIEJSKA • BIERNIK RZECZOWNIKÓW",
    "prompt": "Przypisz zdania do poprawnych lub zawierających błąd końcówki w bierniku:",
    "categories": [
      "POPRAWNA POLSZCZYZNA",
      "BŁĄD POTOCZNY"
    ],
    "items": [
      {
        "text": "Skasowałem w tramwaju ważny bilet jednorazowy.",
        "category": "POPRAWNA POLSZCZYZNA"
      },
      {
        "text": "Kupiłem wczoraj nowego smartfona i bileta.",
        "category": "BŁĄD POTOCZNY"
      },
      {
        "text": "Zjadłem pyszny obiad w barze mlecznym.",
        "category": "POPRAWNA POLSZCZYZNA"
      },
      {
        "text": "Włączyłem komputer i laptopa do kontaktu.",
        "category": "BŁĄD POTOCZNY"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "ANALIZA MEDIÓW • ZJAWISKO CLICKBAITU",
    "prompt": "Czym charakteryzuje się nagłówek typu «clickbait» w portalach internetowych?",
    "options": [
      {
        "text": "Szokującym, wyolbrzymionym tytułem budzącym ciekawość, którego treść artykułu wcale nie potwierdza",
        "correct": true
      },
      {
        "text": "Spokojnym, rzeczowym streszczeniem faktów popartym statystykami naukowymi",
        "correct": false
      },
      {
        "text": "Podaniem pełnego nazwiska autora i bibliografii naukowej",
        "correct": false
      },
      {
        "text": "Brak jakichkolwiek zdjęć i nagłówków na stronie internetowej",
        "correct": false
      }
    ],
    "hint": "Clickbait to «przynęta na kliknięcia» żerująca na sensacji i niedopowiedzeniu."
  },
  {
    "type": "matchup",
    "title": "MĄDROŚĆ PODWÓRKOWA • PRZYSŁOWIA",
    "prompt": "Dokończ przysłowie ostrzegające przed nieszczerością i chciwością:",
    "pairs": [
      {
        "left": "Kłamstwo ma...",
        "right": "krótkie nogi i szybko wychodzi na jaw"
      },
      {
        "left": "Gdzie dwóch się bije...",
        "right": "tam trzeci korzysta z zamieszania"
      },
      {
        "left": "Kto pod kim dołki kopie...",
        "right": "sam w nie prędzej czy później wpadnie"
      },
      {
        "left": "Chytry dwa razy...",
        "right": "traci na pozornych oszczędnościach"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "ETYKA KOMUNIKACJI • ZWROTY",
    "prompt": "Przypisz wypowiedzi do zwrotów budujących szacunek lub niszczących relację:",
    "categories": [
      "KOMUNIKACJA SZACUNKU",
      "POGARDA I TOKSYCZNOŚĆ"
    ],
    "items": [
      {
        "text": "Rozumiem twój punkt widzenia, choć się z nim nie zgadzam.",
        "category": "KOMUNIKACJA SZACUNKU"
      },
      {
        "text": "Zamknij się, twoje zdanie w ogóle nikogo nie obchodzi!",
        "category": "POGARDA I TOKSYCZNOŚĆ"
      },
      {
        "text": "Dziękuję, że poświęciłeś czas, by mi pomóc w trudnej sytuacji.",
        "category": "KOMUNIKACJA SZACUNKU"
      },
      {
        "text": "Jesteś totalnym zerem i nic w życiu nie osiągniesz.",
        "category": "POGARDA I TOKSYCZNOŚĆ"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "MIASTO NOCĄ • ZASADY BEZPIECZEŃSTWA",
    "prompt": "Jaka jest najważniejsza zasada pieszego poruszającego się po zmroku poza terenem zabudowanym lub słabo oświetlonym?",
    "options": [
      {
        "text": "Obowiązkowe noszenie elementów odblaskowych w widocznym dla kierowców miejscu",
        "correct": true
      },
      {
        "text": "Ubieranie się w całości na czarno bez żadnych świateł",
        "correct": false
      },
      {
        "text": "Słuchanie głośnej muzyki w słuchawkach na przejściu dla pieszych",
        "correct": false
      },
      {
        "text": "Bieganie środkiem jezdni tyłem do nadjeżdżających samochodów",
        "correct": false
      }
    ],
    "hint": "Odblask pozwala kierowcy dostrzec pieszego ze 150 metrów zamiast z 20 metrów."
  },
  {
    "type": "matchup",
    "title": "ZWROTY GRZECZNOŚCIOWE W MIEŚCIE",
    "prompt": "Połącz sytuację miejską z odpowiednią reakcją kulturalnego człowieka:",
    "pairs": [
      {
        "left": "Potrącenie kogoś na zatłoczonym chodniku",
        "right": "«Przepraszam najmocniej, nic się Pani nie stało?»"
      },
      {
        "left": "Wejście starszej osoby o kulach do autobusu",
        "right": "Ustąpienie miejsca siedzącego z życzliwym uśmiechem"
      },
      {
        "left": "Zapytanie przechodnia o drogę do dworca",
        "right": "«Dzień dobry, czy mógłby mi Pan wskazać drogę?»"
      },
      {
        "left": "Otrzymanie reszty od kasjera w sklepie",
        "right": "«Dziękuję bardzo, miłego dnia życzę!»"
      }
    ]
  }
];

// ============================================================================
// 3. BOSS NAUCZYCIELKA — CZĘŚCI MOWY, SKŁADNIA I FORMY UŻYTKOWE (KLASA 4–6 CKE)
// ============================================================================
export const MODULE_3_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym wyróżniony wyraz jest NIEODMIENNĄ CZĘŚCIĄ MOWY (przysłówek, przyimek lub spójnik):',
    options: [
      { text: 'Uczniowie słuchali poleceń nauczycielki niezwykle uważnie.', correct: true },
      { text: 'Uczniowie słuchali poleceń nauczycielki w wielkim skupieniu.', correct: false },
      { text: 'Uważny uczeń zawsze zapisuje pracę domową do zeszytu.', correct: false },
      { text: 'Dobre wyniki w nauce wymagają systematycznej pracy.', correct: false }
    ],
    hint: 'Przysłówek «uważnie» odpowiada na pytanie jak? i nie odmienia się przez przypadki ani osoby.'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj część zdania pojedynczego do pytania, na które odpowiada:',
    pairs: [
      { left: 'Podmiot gramatyczny', right: 'Kto? Co? (np. Uczeń rozwiązuje zadanie)' },
      { left: 'Orzeczenie czasownikowe', right: 'Co robi? Co się z nim dzieje? (np. Pisze, słucha)' },
      { left: 'Przydawka', right: 'Jaki? Jaka? Czyj? Ile? (np. Zdolny uczeń, dwie książki)' },
      { left: 'Okolicznik miejsca i czasu', right: 'Gdzie? Kiedy? Dokąd? (np. W sali, przed dzwonkiem)' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz części mowy do grupy wyrazów odmiennych lub nieodmiennych:',
    categories: ['CZĘŚCI MOWY ODMIENNE (PRZEZ PRZYPADKI, OSOBY, LICZBY)', 'CZĘŚCI MOWY NIEODMIENNE'],
    items: [
      { text: 'Rzeczownik, czasownik, przymiotnik, liczebnik', category: 'CZĘŚCI MOWY ODMIENNE (PRZEZ PRZYPADKI, OSOBY, LICZBY)' },
      { text: 'Przysłówek, przyimek, spójnik, wykrzyknik, partykuła', category: 'CZĘŚCI MOWY NIEODMIENNE' },
      { text: 'Zaimki rzeczowne, przymiotne i liczebne', category: 'CZĘŚCI MOWY ODMIENNE (PRZEZ PRZYPADKI, OSOBY, LICZBY)' },
      { text: 'Spójniki podrzędne i współrzędne (oraz, lecz, bo)', category: 'CZĘŚCI MOWY NIEODMIENNE' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Który zestaw zawiera wszystkie 5 OBOWIĄZKOWYCH ELEMENTÓW formalnego ZAPROSZENIA egzaminacyjnego CKE?',
    options: [
      { text: 'Kto zaprasza, kogo zaprasza, na jakie wydarzenie, kiedy (data i godzina) oraz gdzie (dokładne miejsce).', correct: true },
      { text: 'Kto zaprasza gości, dokładny koszt biletu wstępu, wybrane menu obiadowe oraz podpis obojga rodziców.', correct: false },
      { text: 'Data wydarzenia szkolnego, pełna lista nieobecnych na apelu uczniów i aktualny spis lektur szkolnych.', correct: false },
      { text: 'Tylko ogólna nazwa szkoły oraz okrągła pieczątka sekretariatu zupełnie bez podania daty ani godziny.', correct: false }
    ],
    hint: 'Zasada 5 palców zaproszenia: Kto? Kogo? Na co? Kiedy? Gdzie?'
  },
  {
    type: 'matchup',
    prompt: 'Połącz gatunek formy użytkowej z jego wymogiem konstrukcyjnym:',
    pairs: [
      { left: 'Ogłoszenie szkolne', right: 'Musi zawierać informację o przedmiocie sprawy, terminie i dane kontaktowe' },
      { left: 'Dedykacja w książce', right: 'Wskazuje dla kogo, z jakiej okazji, od kogo, miejscowość i datę wręczenia' },
      { left: 'Przepis kulinarny', right: 'Dzieli się na wykaz składników z miarami oraz chronologiczne kroki przygotowania' },
      { left: 'Notatka syntetyzująca', right: 'Krótko, rzeczowo i własnymi słowami podsumowuje kluczowe myśli z dwóch tekstów' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz zdania do kategorii zdań pojedynczych rozwiniętych lub nierozwiniętych:',
    categories: ['ZDANIE POJEDYNCZE NIEROZWINIĘTE (TYLKO PODMIOT I ORZECZENIE)', 'ZDANIE POJEDYNCZE ROZWINIĘTE (Z OKREŚLENIAMI)'],
    items: [
      { text: 'Dzwonek zadzwonił.', category: 'ZDANIE POJEDYNCZE NIEROZWINIĘTE (TYLKO PODMIOT I ORZECZENIE)' },
      { text: 'Głośny szkolny dzwonek zadzwonił na długą przerwę.', category: 'ZDANIE POJEDYNCZE ROZWINIĘTE (Z OKREŚLENIAMI)' },
      { text: 'Uczniowie piszą.', category: 'ZDANIE POJEDYNCZE NIEROZWINIĘTE (TYLKO PODMIOT I ORZECZENIE)' },
      { text: 'Pilni ósmoklasiści piszą próbny arkusz egzaminacyjny.', category: 'ZDANIE POJEDYNCZE ROZWINIĘTE (Z OKREŚLENIAMI)' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym poprawnie postawiono PRZECINEK przed spójnikiem:',
    options: [
      { text: 'Pani Nauczycielka wyjaśniła polecenie, ponieważ wielu uczniów miało wątpliwości.', correct: true },
      { text: 'Pani Nauczycielka wyjaśniła polecenie ponieważ, wielu uczniów miało wątpliwości.', correct: false },
      { text: 'Pani Nauczycielka, wyjaśniła polecenie i rozdała arkusze sprawdzianu.', correct: false },
      { text: 'Uczniowie pisali w ciszy oraz, sprawdzali swoje odpowiedzi.', correct: false }
    ],
    hint: 'Przed spójnikiem podrzędnym «ponieważ» zawsze stawiamy przecinek oddzielający zdania składowe.'
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie zawierające PODMIOT LOGICZNY w dopełniaczu (wyrażający brak lub ubytek):',
    options: [
      { text: 'W szkolnej bibliotece zabrakło egzemplarzy lektury dla całej klasy.', correct: true },
      { text: 'Uczniowie wypożyczyli wszystkie dostępne tomy wierszy z biblioteki.', correct: false },
      { text: 'Wszystkie nowe podręczniki leżały ułożone na biurku nauczycielki.', correct: false },
      { text: 'Wypożyczona gruba książka została przeczytana od deski do deski.', correct: false }
    ],
    hint: 'Konstrukcja braku: «zabrakło kogo? czego? egzemplarzy» – rzeczownik w dopełniaczu pełni rolę podmiotu logicznego.'
  },
{
    "type": "matchup",
    "title": "SKŁADNIA • ZWIĄZKI WYRAZÓW W ZDANIU",
    "prompt": "Dopasuj typ związku składniowego do jego charakterystyki i przykładu:",
    "pairs": [
      {
        "left": "Związek zgody",
        "right": "Wyrazy zgadzają się w rodzaju, liczbie i przypadku: «mądry uczeń», «pilna klasa»"
      },
      {
        "left": "Związek rządu",
        "right": "Wyraz nadrzędny narzuca podrzędnemu konkretny przypadek: «czytam książkę» (kogo? co? B.)"
      },
      {
        "left": "Związek przynależności",
        "right": "Wyraz podrzędny to przysłówek lub przyimek łączący się luźno: «biega szybko», «mieszka w mieście»"
      },
      {
        "left": "Szereg współrzędny",
        "right": "Dwa człony pełnią tę samą funkcję składniową: «Olek i Ania czytają lektury»"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "FLEKSJA • PRZYPADKI DEKLINACJI",
    "prompt": "Przypisz pytania przypadków do właściwego przypadku języka polskiego:",
    "categories": [
      "MIANOWNIK I DOPEŁNIACZ",
      "CELOWNIK I NARZĘDNIK"
    ],
    "items": [
      {
        "text": "Kto? Co? (np. uczeń pisze sprawdzian)",
        "category": "MIANOWNIK I DOPEŁNIACZ"
      },
      {
        "text": "Komu? Czemu? (np. przyglądam się wystawie)",
        "category": "CELOWNIK I NARZĘDNIK"
      },
      {
        "text": "Kogo? Czego? (np. nie ma zeszytu w plecaku)",
        "category": "MIANOWNIK I DOPEŁNIACZ"
      },
      {
        "text": "Z kim? Z czym? (np. spaceruję z przyjacielem)",
        "category": "CELOWNIK I NARZĘDNIK"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "CZĘŚCI ZDANIA • PRZYDAWKA",
    "prompt": "Na jakie pytania odpowiada przydawka określająca rzeczownik w zdaniu pojedynczym?",
    "options": [
      {
        "text": "Jaki? Jaka? Jakie? Który? Która? Które? Czyj? Czyja? Czyje? Ile? Czego?",
        "correct": true
      },
      {
        "text": "Co robi? Co się z nim dzieje? W jakim jest stanie?",
        "correct": false
      },
      {
        "text": "Gdzie? Kiedy? Jak? Dlaczego? Po co? W jakim celu?",
        "correct": false
      },
      {
        "text": "Kto to jest? Czym jest przedmiot?",
        "correct": false
      }
    ],
    "hint": "Przydawka zawsze określa rzeczownik (np. ciekawa książka, dom z cegły, drugi tom)."
  },
  {
    "type": "matchup",
    "title": "CZĘŚCI ZDANIA • FUNKCJE W ZDANIU",
    "prompt": "Połącz część zdania z jej rolą gramatyczną:",
    "pairs": [
      {
        "left": "Podmiot",
        "right": "Główny wykonawca czynności lub nosiciel cechy w Mianowniku"
      },
      {
        "left": "Orzeczenie",
        "right": "Główny człon zdania informujący o czynności lub stanie podmiotu"
      },
      {
        "left": "Dopełnienie",
        "right": "Określa czasownik i odpowiada na pytania przypadków zależnych (oprócz M.)"
      },
      {
        "left": "Okolicznik",
        "right": "Określa okoliczności czynności: czas, miejsce, sposób, cel, przyczynę"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "ORTOGRAFIA • PISOWNIA «Ó» WYMIENNEGO",
    "prompt": "Przypisz wyrazy z «ó» do kategorii wymiennych na o, e, a lub niewymiennych:",
    "categories": [
      "«Ó» WYMIENNE (NA O, E, A)",
      "«Ó» NIEWYMIENNE (DO ZAPAMIĘTANIA)"
    ],
    "items": [
      {
        "text": "mróz (bo: mrozy)",
        "category": "«Ó» WYMIENNE (NA O, E, A)"
      },
      {
        "text": "córka, góra, jaskółka",
        "category": "«Ó» NIEWYMIENNE (DO ZAPAMIĘTANIA)"
      },
      {
        "text": "noga – nóg, wozić – wóz",
        "category": "«Ó» WYMIENNE (NA O, E, A)"
      },
      {
        "text": "król, ołówek, żółw",
        "category": "«Ó» NIEWYMIENNE (DO ZAPAMIĘTANIA)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "ORTOGRAFIA • PISOWNIA «RZ» PO SPÓŁGŁOSKACH",
    "prompt": "Po których spółgłoskach w języku polskim piszemy tradycyjnie dwuznak «rz»?",
    "options": [
      {
        "text": "Po: p, b, t, d, k, g, ch, j, w (np. brzeg, drzewo, krzak, wrzos)",
        "correct": true
      },
      {
        "text": "Wyłącznie po samogłoskach a, e, i, o, u",
        "correct": false
      },
      {
        "text": "Po literach: s, z, c, dz na początku słowa",
        "correct": false
      },
      {
        "text": "Tylko w wyrazach zapożyczonych z języka angielskiego",
        "correct": false
      }
    ],
    "hint": "Reguła szkolna: piszemy «rz» po p, b, t, d, k, g, ch, j, w (z wyjątkami jak pszczoła, kształt)."
  },
  {
    "type": "matchup",
    "title": "RODZAJE ZDAŃ ZE WZGLĘDU NA CEL",
    "prompt": "Dopasuj zdanie do jego typu komunikacyjnego i intonacyjnego:",
    "pairs": [
      {
        "left": "Zdanie oznajmujące",
        "right": "Przekazuje neutralną informację o faktach: «Dzwonek oznajmił przerwę»"
      },
      {
        "left": "Zdanie pytające",
        "right": "Domaga się udzielenia odpowiedzi: «Czy przeczytałeś zadaną lekturę?»"
      },
      {
        "left": "Zdanie rozkazujące",
        "right": "Wyraża nakaz, zakaz, prośbę lub polecenie: «Otwórzcie zeszyty na stronie 40!»"
      },
      {
        "left": "Zdanie wykrzyknikowe",
        "right": "Wyraża silne emocje, podziw lub gniew: «Jak wspaniale zdaliście ten egzamin!»"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "ZDANIA POJEDYNCZE • ROZWINIĘTE CZY NIE",
    "prompt": "Przypisz zdania do nierozwiniętych (sam podmiot i orzeczenie) lub rozwiniętych:",
    "categories": [
      "ZDANIE NIEROZWINIĘTE",
      "ZDANIE ROZWINIĘTE"
    ],
    "items": [
      {
        "text": "Uczeń pisze.",
        "category": "ZDANIE NIEROZWINIĘTE"
      },
      {
        "text": "Pilny uczeń klasy siódmej pisze trudny sprawdzian.",
        "category": "ZDANIE ROZWINIĘTE"
      },
      {
        "text": "Dzwonek zadzwonił.",
        "category": "ZDANIE NIEROZWINIĘTE"
      },
      {
        "text": "Głośny dzwonek zadzwonił niespodziewanie na przerwę obiadową.",
        "category": "ZDANIE ROZWINIĘTE"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "SKŁADNIA • RÓWNOWAŻNIK ZDANIA",
    "prompt": "Czym różni się równoważnik zdania od pełnego zdania w języku polskim?",
    "options": [
      {
        "text": "Równoważnik zdania nie posiada formy osobowej czasownika (orzeczenia)",
        "correct": true
      },
      {
        "text": "Równoważnik zdania musi zawsze posiadać co najmniej dwa orzeczenia",
        "correct": false
      },
      {
        "text": "Równoważnik zdania nie ma żadnego znaczenia logicznego dla odbiorcy",
        "correct": false
      },
      {
        "text": "Równoważnik zdania można pisać tylko w języku łacińskim",
        "correct": false
      }
    ],
    "hint": "Zdanie zawiera formę osobową czasownika (np. «Idę do szkoły»), a równoważnik jej nie ma («Droga do szkoły»)."
  },
  {
    "type": "matchup",
    "title": "LICZEBNIKI • PODZIAŁ I FUNKCJA",
    "prompt": "Dopasuj typ liczebnika do podanego przykładu gramatycznego:",
    "pairs": [
      {
        "left": "Liczebnik główny",
        "right": "Określa liczbę osób lub przedmiotów: «pięć», «dziesięć», «sto»"
      },
      {
        "left": "Liczebnik porządkowy",
        "right": "Określa kolejność w szeregu: «pierwszy», «siódmy», «dwudziesty»"
      },
      {
        "left": "Liczebnik zbiorowy",
        "right": "Łączy się z istotami niedorosłymi lub rzeczownikami plurale tantum: «troje szczeniąt», «dwoje drzwi»"
      },
      {
        "left": "Liczebnik ułamkowy",
        "right": "Oznacza niecałkowitą część wielkości: «pół», «ćwierć», «półtora»"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "INTERPUNKCJA • PRZECINEK PRZED SPÓJNIKAMI",
    "prompt": "Przypisz spójniki do grupy wymagających obowiązkowego przecinka lub niewymagających:",
    "categories": [
      "OBOWIĄZKOWY PRZECINEK (ALE, ŻE, KTÓRY)",
      "BRAK PRZECINKA (I, ORAZ, LUB, ALBO)"
    ],
    "items": [
      {
        "text": "ale, lecz, jednak, a więc, ponieważ, że",
        "category": "OBOWIĄZKOWY PRZECINEK (ALE, ŻE, KTÓRY)"
      },
      {
        "text": "i, oraz, lub, albo, czy, ani (w użyciu pojedynczym)",
        "category": "BRAK PRZECINKA (I, ORAZ, LUB, ALBO)"
      },
      {
        "text": "który, gdy, żeby, chociaż, dlatego że",
        "category": "OBOWIĄZKOWY PRZECINEK (ALE, ŻE, KTÓRY)"
      },
      {
        "text": "bądź, tudzież (łączące współrzędne człony zdania)",
        "category": "BRAK PRZECINKA (I, ORAZ, LUB, ALBO)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "GRAMATYKA • STRONA CZASOWNIKA",
    "prompt": "Przekształć zdanie w stronie czynnej: «Nauczycielka sprawdza kartkówki» na poprawną stronę bierną:",
    "options": [
      {
        "text": "«Kartkówki są sprawdzane przez nauczycielkę»",
        "correct": true
      },
      {
        "text": "«Nauczycielka była sprawdzana przez kartkówki»",
        "correct": false
      },
      {
        "text": "«Kartkówki sprawdziły się same w gabinecie»",
        "correct": false
      },
      {
        "text": "«Nauczycielka będzie sprawdzać jutro sprawdziany»",
        "correct": false
      }
    ],
    "hint": "Strona bierna: dopełnienie staje się podmiotem, a orzeczenie tworzy forma być/zostać + imiesłów bierny."
  }
];

// ============================================================================
// 4. BOSS LEKARZ — MEDYCYNA, DIALOGI LEKARSKIE, RKO I FLEKSJA (KLASA 5–6 CKE)
// ============================================================================
export const MODULE_4_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie o nienagannej poprawności składniowej przy opisie dolegliwości chorobowych w gabinecie:',
    options: [
      { text: '„Od trzech dni boli mnie gardło, mam wysoką gorączkę i męczy mnie suchy kaszel.”', correct: true },
      { text: '„Od trzech dni bolę gardło, mam wysoką gorączkę i męczę bardzo suchy kaszel.”', correct: false },
      { text: '„Boli mi gardło, mam wysoką gorączkę i czuję gardło bolejące przy przełykaniu.”', correct: false },
      { text: '„Gardło mnie mocno boli od trzech dniach z gorączkami i z wielkimi kaszlami.”', correct: false }
    ],
    hint: 'Orzeczenie nieosobowe: «Boli mnie + Mianownik».'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj procedurę pierwszej pomocy do stanu poszkodowanego na boisku:',
    pairs: [
      { left: 'Resuscytacja krążeniowo-oddechowa (RKO)', right: '30 uciśnięć klatki piersiowej na głębokość 5 cm na zmianę z 2 oddechami' },
      { left: 'Pozycja boczna ustalona (bezpieczna)', right: 'Dla osoby nieprzytomnej, która samodzielnie i miarowo oddycha' },
      { left: 'Opatrunek uciskowy z jałowej gazy', right: 'Do zatamowania silnego krwawienia tętniczego lub żylnego z rany' },
      { left: 'Unieruchomienie dwóch sąsiednich stawów', right: 'Zasada Potta stosowana przy podejrzeniu złamania kości długiej' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz pojęcia medyczne do kategorii infekcji wirusowej lub profilaktyki zdrowotnej:',
    categories: ['OBJAWY I TERAPIA INFEKCJI', 'PROFILAKTYKA I OCHRONA ZDROWIA'],
    items: [
      { text: 'Gorączka, dreszcze i zapalenie gardła', category: 'OBJAWY I TERAPIA INFEKCJI' },
      { text: 'Regularne szczepienia ochronne i higiena rąk', category: 'PROFILAKTYKA I OCHRONA ZDROWIA' },
      { text: 'Antybiotykoterapia stosowana wyłącznie na bakterie', category: 'OBJAWY I TERAPIA INFEKCJI' },
      { text: 'Zbilansowana dieta bogata w witaminy i 8h snu', category: 'PROFILAKTYKA I OCHRONA ZDROWIA' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Jaka jest podstawowa i kardynalna różnica w działaniu ANTYBIOTYKÓW, o której poucza lekarz?',
    options: [
      { text: 'Antybiotyki niszczą wyłącznie bakterie i są całkowicie nieskuteczne w walce z wirusami (np. grypą).', correct: true },
      { text: 'Antybiotyki leczą bez wyjątku każdą chorobę przeziębieniową oraz katar w ciągu dwunastu godzin.', correct: false },
      { text: 'Antybiotyki można brać zupełnie dowolnie bez konsultacji i przerywać całą kurację po jednym dniu.', correct: false },
      { text: 'Antybiotyki działają wyłącznie przeciwbólowo na organizm pacjenta i zastępują witaminę C w diecie.', correct: false }
    ],
    hint: 'Wirusy nie mają budowy komórkowej – antybiotyk niszczy wyłącznie ściany i metabolizm bakterii.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz specjalizację lekarską z narządami, którymi się zajmuje:',
    pairs: [
      { left: 'Kardiolog', right: 'Diagnozuje i leczy choroby mięśnia sercowego oraz układu krążenia' },
      { left: 'Ortopeda', right: 'Zajmuje się leczeniem urazów kości, stawów, więzadeł i kręgosłupa' },
      { left: 'Laryngolog', right: 'Bada i leczy narządy słuchu, nosa, gardła oraz krtani' },
      { left: 'Okulista (oftalmolog)', right: 'Diagnozuje wady wzroku, rogówkę, siatkówkę i ciśnienie w oku' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz informacje podawane dyspozytorowi pod numerem 112 do właściwej kolejności meldunku:',
    categories: ['POCZĄTEK ZGŁOSZENIA (KLUCZOWE DANE)', 'DALSZA CZĘŚĆ (SZCZEGÓŁY I DANE ZGŁASZAJĄCEGO)'],
    items: [
      { text: 'Dokładne miejsce zdarzenia (adres, piętro, punkt orientacyjny)', category: 'POCZĄTEK ZGŁOSZENIA (KLUCZOWE DANE)' },
      { text: 'Co się stało i w jakim stanie jest poszkodowany (czy oddycha)', category: 'POCZĄTEK ZGŁOSZENIA (KLUCZOWE DANE)' },
      { text: 'Liczba poszkodowanych osób oraz widoczne urazy', category: 'DALSZA CZĘŚĆ (SZCZEGÓŁY I DANE ZGŁASZAJĄCEGO)' },
      { text: 'Imię i nazwisko osoby zgłaszającej wypadek (nie odkładać słuchawki!)', category: 'DALSZA CZĘŚĆ (SZCZEGÓŁY I DANE ZGŁASZAJĄCEGO)' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym poprawnie użyto formy dopełniacza po zaprzeczeniu czasownika w rozmowie z lekarzem:',
    options: [
      { text: '„Od rana pacjent nie przyjmował żadnego leku przeciwgorączkowego.”', correct: true },
      { text: '„Od rana pacjent nie przyjmował wcale żaden lek przeciwgorączkowy.”', correct: false },
      { text: '„Nie czułem zupełnie żaden ból w klatce podczas badania stetoskopem.”', correct: false },
      { text: '„Lekarz na wizycie nie przepisał ten bardzo silny syrop wykrztuśny.”', correct: false }
    ],
    hint: 'Zaprzeczenie czasownika wymaga dopełniacza: nie przyjmował (kogo? czego?) żadnego leku.'
  },
  {
    type: 'quiz',
    prompt: 'Jaki jest prawidłowy zakres tętna spoczynkowego u zdrowego nastolatka w wieku szkolnym?',
    options: [
      { text: 'Około 70–85 uderzeń serca na minutę.', correct: true },
      { text: 'Poniżej 30 uderzeń serca na minutę.', correct: false },
      { text: 'Około 180–220 uderzeń serca w stanie pełnego spoczynku.', correct: false },
      { text: 'Tętno wynosi zawsze dokładnie 1 uderzenie na sekundę.', correct: false }
    ],
    hint: 'Prawidłowe tętno spoczynkowe młodzieży mieści się w granicach 70–85 bpm.'
  },
{
    "type": "quiz",
    "title": "FARMAKOLOGIA I MIKROBIOLOGIA • ANTYBIOTYKI",
    "prompt": "Dlaczego lekarz nie przepisuje antybiotyków na zwykłe przeziębienie lub grypę sezonową?",
    "options": [
      {
        "text": "Ponieważ antybiotyki niszczą wyłącznie komórki bakterii, a na wirusy wywołujące grypę nie mają żadnego wpływu",
        "correct": true
      },
      {
        "text": "Ponieważ antybiotyki działają tylko na złamane kości nóg",
        "correct": false
      },
      {
        "text": "Ponieważ wirusy leczy się wyłącznie zastrzykami z czystego tlenu",
        "correct": false
      },
      {
        "text": "Ponieważ antybiotyki są lekami przeznaczonymi tylko dla zwierząt leśnych",
        "correct": false
      }
    ],
    "hint": "Przeziębienie i grypa to infekcje wirusowe – antybiotykoterapia bez zakażenia bakteryjnego jest błędem."
  },
  {
    "type": "matchup",
    "title": "PIERWSZA POMOC • STANY NAGŁE",
    "prompt": "Połącz nagły przypadek z właściwą procedurą ratowniczą przedmedyczną:",
    "pairs": [
      {
        "left": "Krwotok z nosa",
        "right": "Pochylić głowę lekko do przodu, ucisnąć skrzydełka nosa i położyć zimny okład na kark"
      },
      {
        "left": "Oparzenie termiczne skóry",
        "right": "Chłodzić czystą, bieżącą, letnią wodą przez minimum 10–15 minut bez zrywania odzieży"
      },
      {
        "left": "Użądlenie osy w jamie ustnej",
        "right": "Podać poszkodowanemu kostkę lodu do ssania i natychmiast wezwać pogotowie 112"
      },
      {
        "left": "Odmrożenie palców dłoni",
        "right": "Ogrzewać stopniowo ciepłą (nie gorącą!) wodą i założyć jałowy suchy opatrunek"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "DIETETYKA • ROZPUSZCZALNOŚĆ WITAMIN",
    "prompt": "Przypisz witaminy do rozpuszczalnych w tłuszczach lub w wodzie:",
    "categories": [
      "ROZPUSZCZALNE W TŁUSZCZACH (A, D, E, K)",
      "ROZPUSZCZALNE W WODZIE (C, GRUPA B)"
    ],
    "items": [
      {
        "text": "Witamina A (wzrok) i witamina D (kości i zęby)",
        "category": "ROZPUSZCZALNE W TŁUSZCZACH (A, D, E, K)"
      },
      {
        "text": "Witamina C (kwas askorbinowy - odporność)",
        "category": "ROZPUSZCZALNE W WODZIE (C, GRUPA B)"
      },
      {
        "text": "Witamina E (antyoksydant) i witamina K (krzepnięcie krwi)",
        "category": "ROZPUSZCZALNE W TŁUSZCZACH (A, D, E, K)"
      },
      {
        "text": "Witaminy B1, B6, B12 oraz kwas foliowy",
        "category": "ROZPUSZCZALNE W WODZIE (C, GRUPA B)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "NEUROLOGIA • ROZPOZNAWANIE UDARU MÓZGU (TEST FAST)",
    "prompt": "Co oznacza międzynarodowy skrót testu FAST stosowany przy podejrzeniu udaru mózgu?",
    "options": [
      {
        "text": "Face (opadający kącik ust), Arm (niedowład ręki), Speech (bełkotliwa mowa), Time (natychmiastowy czas reakcji pod 112)",
        "correct": true
      },
      {
        "text": "Food (jedzenie), Air (powietrze), Sleep (sen), Training (trening)",
        "correct": false
      },
      {
        "text": "Fast (szybki bieg), Alert (czujność), Stop (zatrzymanie), Temperature (temperatura)",
        "correct": false
      },
      {
        "text": "Fever (gorączka), Ache (ból zęba), Skin (skóra), Teeth (zęby)",
        "correct": false
      }
    ],
    "hint": "FAST to prosty test ratujący życie przy udarze: asymetria twarzy, opadające ramię, zaburzenia mowy, natychmiastowy czas."
  },
  {
    "type": "matchup",
    "title": "UKŁAD DOKREWNY • HORMONY I GRUCZOŁY",
    "prompt": "Połącz hormon z wytwarzającym go gruczołem dokrewnym w ciele człowieka:",
    "pairs": [
      {
        "left": "Insulina",
        "right": "Trzustka – reguluje stężenie glukozy we krwi i magazynowanie glikogenu"
      },
      {
        "left": "Adrenalina",
        "right": "Nadnercza – mobilizuje organizm w sytuacji nagłego stresu i zagrożenia"
      },
      {
        "left": "Tyroksyna",
        "right": "Tarczyca – steruje tempem przemiany materii i rozwojem komórek"
      },
      {
        "left": "Hormon wzrostu (somatotropina)",
        "right": "Przysadka mózgowa – stymuluje wzrost kości i regenerację tkanek"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "APTECZKA PIERWSZEJ POMOCY • WYPOSAŻENIE",
    "prompt": "Przypisz przedmioty do obowiązkowego wyposażenia apteczki szkolnej lub artykułów zabronionych:",
    "categories": [
      "OBOWIĄZKOWY MATERIAŁ OPATRUNKOWY",
      "ZABRONIONE W SZKOLNEJ APTECZCE"
    ],
    "items": [
      {
        "text": "Rękawiczki jednorazowe nitrylowe i maseczka do RKO",
        "category": "OBOWIĄZKOWY MATERIAŁ OPATRUNKOWY"
      },
      {
        "text": "Silne leki nasenne i przeciwbólowe na receptę",
        "category": "ZABRONIONE W SZKOLNEJ APTECZCE"
      },
      {
        "text": "Jałowe kompresy gazowe, opaski elastyczne i plaster z opatrunkiem",
        "category": "OBOWIĄZKOWY MATERIAŁ OPATRUNKOWY"
      },
      {
        "text": "Przeterminowane tabletki bez ulotki i opakowania",
        "category": "ZABRONIONE W SZKOLNEJ APTECZCE"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "KARDIOLOGIA • CIŚNIENIE TĘTNICZE KRWI",
    "prompt": "Jaka wartość ciśnienia tętniczego krwi jest uznawana za wzorcowe ciśnienie skurczowe i rozkurczowe u zdrowego młodego człowieka?",
    "options": [
      {
        "text": "Około 120 / 80 mm Hg (milimetrów słupa rtęci)",
        "correct": true
      },
      {
        "text": "250 / 180 mm Hg",
        "correct": false
      },
      {
        "text": "40 / 20 mm Hg",
        "correct": false
      },
      {
        "text": "1000 / 500 mm Hg",
        "correct": false
      }
    ],
    "hint": "Kanon medyczny ciśnienia to 120 mm Hg (skurczowe) na 80 mm Hg (rozkurczowe)."
  },
  {
    "type": "matchup",
    "title": "HIGIENA UKŁADU NERWOWEGO • REGENERACJA",
    "prompt": "Połącz czynnik higieny psychicznej z jego dobroczynnym wpływem na mózg:",
    "pairs": [
      {
        "left": "Sen 8–9 godzin na dobę",
        "right": "Umożliwia konsolidację pamięci, oczyszczenie mózgu z toksyn i odpoczynek neuronów"
      },
      {
        "left": "Ograniczenie ekranów przed snem",
        "right": "Niebieskie światło blokuje wydzielanie melatoniny i zaburza zasypianie"
      },
      {
        "left": "Aktywność fizyczna na świeżym powietrzu",
        "right": "Zwiększa dotlenienie kory mózgowej i stymuluje wydzielanie endorfin"
      },
      {
        "left": "Zbilansowana dieta z kwasami Omega-3",
        "right": "Buduje osłonki mielinowe neuronów i wspiera koncentrację w nauce"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "FIZJOLOGIA • OBJAWY ODWODNIENIA",
    "prompt": "Przypisz objawy do symptomów postępującego odwodnienia lub stanu pełnego nawodnienia:",
    "categories": [
      "OBJAWY ODWODNIENIA ORGANIZMU",
      "STAN PRAWIDŁOWEGO NAWODNIENIA"
    ],
    "items": [
      {
        "text": "Spierzchnięte usta, suchość w gardle, ciemny mocz i ból głowy",
        "category": "OBJAWY ODWODNIENIA ORGANIZMU"
      },
      {
        "text": "Jasnosłomkowy mocz, wysoka energia, gładka i elastyczna skóra",
        "category": "STAN PRAWIDŁOWEGO NAWODNIENIA"
      },
      {
        "text": "Zawroty głowy, ospałość, obniżenie koncentracji i brak sił",
        "category": "OBJAWY ODWODNIENIA ORGANIZMU"
      },
      {
        "text": "Stabilne ciśnienie krwi i prawidłowe wydzielanie śliny",
        "category": "STAN PRAWIDŁOWEGO NAWODNIENIA"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "TRAUMATOLOGIA • RÓŻNICA MIĘDZY SKRĘCENIEM A ZWICHNIĘCIEM",
    "prompt": "Na czym polega medyczna różnica pomiędzy SKRĘCENIEM a ZWICHNIĘCIEM stawu?",
    "options": [
      {
        "text": "Skręcenie to naciągnięcie torebki i więzadeł bez przemieszczenia kości, a zwichnięcie to trwałe przemieszczenie powierzchni stawowych",
        "correct": true
      },
      {
        "text": "Skręcenie dotyczy tylko kości czaszki, a zwichnięcie zębów trzonowych",
        "correct": false
      },
      {
        "text": "Zwichnięcie to zwykłe zadrapanie naskórka, a skręcenie wymaga amputacji",
        "correct": false
      },
      {
        "text": "Nie ma żadnej różnicy, to dwa synonimy oznaczające to samo",
        "correct": false
      }
    ],
    "hint": "Zwichnięcie to ciężki uraz, w którym głowa kości całkowicie opuszcza panewkę stawową."
  },
  {
    "type": "matchup",
    "title": "ZMYSŁY • BUDOWA OKA I WZROK",
    "prompt": "Dopasuj element gałki ocznej do jego funkcji fizjologicznej:",
    "pairs": [
      {
        "left": "Rogówka",
        "right": "Przezroczysta zewnętrzna warstwa załamująca światło i chroniąca przednią komorę oka"
      },
      {
        "left": "Tęczówka ze źrenicą",
        "right": "Reguluje ilość światła wpadającego do wnętrza gałki ocznej (zwęża się w jasności)"
      },
      {
        "left": "Soczewka",
        "right": "Odpowiada za akomodację, czyli ostre widzenie przedmiotów bliskich i dalekich"
      },
      {
        "left": "Siatkówka",
        "right": "Zawiera fotoreceptory (czopki i pręciki) zamieniające fotony na impulsy nerwowe"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "RATOWNICTWO MEDYCZNE • WEZWANIE POGOTOWIA 112 / 999",
    "prompt": "Jaka jest prawidłowa kolejność podawania informacji dyspozytorowi medycznemu numeru alarmowego 112?",
    "options": [
      {
        "text": "Gdzie się stało (dokładny adres/miejsce), co się stało, ile osób poszkodowanych i w jakim są stanie, kto wzywa pomoc",
        "correct": true
      },
      {
        "text": "Najpierw przedstawić się i odłożyć słuchawkę bez podawania adresu",
        "correct": false
      },
      {
        "text": "Podać kolor ubrania poszkodowanego i zapytać o prognozę pogody",
        "correct": false
      },
      {
        "text": "Zażądać helikoptera ratunkowego bez wyjaśnienia sytuacji",
        "correct": false
      }
    ],
    "hint": "Miejsce zdarzenia podajemy jako pierwsze, aby pomoc mogła wyruszyć natychmiast nawet w razie zerwania połączenia."
  }
];

// ============================================================================
// 5. BOSS INSTAGRAMERKA — FAKT A OPINIA, NETYKIETA, PERSWAZJA I CKE (KLASA 7–8)
// ============================================================================
export const MODULE_5_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie będące obiektywnym, weryfikowalnym FAKTEM (a nie subiektywną opinią):',
    options: [
      { text: 'Egzamin ósmoklasisty z języka polskiego trwa 120 minut i zawiera zadania zamknięte oraz otwarte.', correct: true },
      { text: 'Wypracowanie o «Kamieniach na szaniec» to bez wątpienia najciekawsza forma wypowiedzi na teście.', correct: false },
      { text: 'Instagramerzy w sieci prowadzą znacznie bardziej ekscytujące życie niż dawni autorzy lektur.', correct: false },
      { text: 'Żółte jaskrawe tło na profilu społecznościowym każdego ucznia wygląda zdecydowanie najlepiej.', correct: false }
    ],
    hint: 'Fakt to informacja obiektywna, którą można zweryfikować w oficjalnych przepisach CKE.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz mechanizm manipulacji internetowej z jego definicją lingwistyczną:',
    pairs: [
      { left: 'Clickbait', right: 'Sensacyjny, przejaskrawiony nagłówek mający wymusić kliknięcie' },
      { left: 'Argument ad personam', right: 'Atakowanie cech osobistych oponenta zamiast merytorycznej dyskusji z tezą' },
      { left: 'Wyrwanie z kontekstu', right: 'Zacytowanie fragmentu cudzej wypowiedzi ze zmianą jej pierwotnego sensu' },
      { left: 'Fake news', right: 'Celowo spreparowana, fałszywa informacja imitująca rzetelny artykuł prasowy' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Rozdziel zdania na stwierdzenia będące FAKTEM lub OPINIĄ:',
    categories: ['FAKT (DANE OBIEKTYWNE I SPRAWDZALNE)', 'OPINIA (SĄD WARTOŚCIUJĄCY I SUBIEKTYWNY)'],
    items: [
      { text: 'Dramat «Balladyna» został napisany przez Juliusza Słowackiego w 1834 roku.', category: 'FAKT (DANE OBIEKTYWNE I SPRAWDZALNE)' },
      { text: 'Postać Aliny jest zbyt naiwna, by budzić współczucie czytelnika.', category: 'OPINIA (SĄD WARTOŚCIUJĄCY I SUBIEKTYWNY)' },
      { text: 'Powieść «Quo vadis» Henryka Sienkiewicza została uhonorowana Nagrodą Nobla.', category: 'FAKT (DANE OBIEKTYWNE I SPRAWDZALNE)' },
      { text: 'Książki historyczne są nudniejsze od nowoczesnych gier komputerowych.', category: 'OPINIA (SĄD WARTOŚCIUJĄCY I SUBIEKTYWNY)' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Która zasada prawa autorskiego reguluje publikację cudzego zdjęcia lub grafiki w mediach społecznościowych?',
    options: [
      { text: 'Publikacja wymaga zgody autora lub skorzystania z otwartej licencji (np. Creative Commons) z podaniem źródła.', correct: true },
      { text: 'Wszystkie obrazy widoczne w wyszukiwarkach można zupełnie bez ograniczeń pobierać i podpisywać jako własne.', correct: false },
      { text: 'Wystarczy jedynie dopisać pod kradzionym zdjęciem «znalezione w sieci», by uniknąć naruszenia praw majątku.', correct: false },
      { text: 'Autorskie prawa majątkowe do fotografii wygasają automatycznie już po 24 godzinach od publikacji posta.', correct: false }
    ],
    hint: 'Cudzy utwór chroniony jest prawem autorskim – legalne użycie wymaga zgody twórcy lub licencji CC.'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj pojęcie z zakresu cyberbezpieczeństwa do właściwego zalecenia:',
    pairs: [
      { left: 'Weryfikacja dwuetapowa (2FA)', right: 'Wymaga dodatkowego kodu SMS lub aplikacji uwierzytelniającej przy logowaniu' },
      { left: 'Ochrona wizerunku', right: 'Zakaz publikowania zdjęć kolegów z klasy bez ich wyraźnej zgody' },
      { left: 'Ślad cyfrowy', right: 'Trwałe dane pozostawiane w sieci po każdej aktywności i wizycie na stronach' },
      { left: 'Phishing', right: 'Oszukańcze e-maile podszywające się pod bank lub szkołę w celu wyłudzenia haseł' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz zachowania w sieci do netykiety (kultury) lub cyberprzemocy (hejtu):',
    categories: ['NETYKIETA I KULTURA DYSKUSJI', 'CYBERPRZEMOC I DZIAŁANIA SZKODLIWE'],
    items: [
      { text: 'Kulturalna wymiana odmiennych poglądów z uzasadnieniem argumentami', category: 'NETYKIETA I KULTURA DYSKUSJI' },
      { text: 'Tworzenie złośliwych memów ośmieszających kolegę z klasy i wykluczanie z grup', category: 'CYBERPRZEMOC I DZIAŁANIA SZKODLIWE' },
      { text: 'Zgłaszanie mowy nienawiści i blokowanie internetowych trolli', category: 'NETYKIETA I KULTURA DYSKUSJI' },
      { text: 'Podszywanie się pod cudze konto i wysyłanie kompromitujących wiadomości', category: 'CYBERPRZEMOC I DZIAŁANIA SZKODLIWE' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Wskaż zdanie, w którym wyraz «także» (w znaczeniu «również») zapisano POPRAWNIE:',
    options: [
      { text: 'Podczas prezentacji omówiłem zalety netykiety, a także przedstawiłem zasady ochrony haseł.', correct: true },
      { text: 'Podczas prezentacji omówiłem zalety netykiety, a tak że przedstawiłem zasady ochrony haseł.', correct: false },
      { text: 'Prelegent mówił tak że nikt z obecnych na dużej sali nie zrozumiał jego prawdziwych intencji.', correct: false },
      { text: 'Zrobiłem to zadanie także, jak kazał mi doświadczony administrator szkolnej sieci cyfrowej.', correct: false }
    ],
    hint: '«Także» pisane łącznie oznacza «również / oraz». «Tak że» rozdzielnie oznacza «więc / skutkiem tego».'
  },
  {
    type: 'quiz',
    prompt: 'Na czym polega PARAFRAZA tekstu literackiego lub naukowego wymagana na egzaminie ósmoklasisty?',
    options: [
      { text: 'Na swobodnym przerobieniu cudzego tekstu własnymi słowami z zachowaniem jego pierwotnego sensu.', correct: true },
      { text: 'Na dosłownym przepisaniu każdego zdania z zachowaniem oryginalnej interpunkcji w cudzysłowie.', correct: false },
      { text: 'Na skasowaniu wszystkich czasowników ze zdania i zastąpieniu ich emotikonami.', correct: false },
      { text: 'Na zmyśleniu zupełnie nowej fabuły niemającej żadnego związku z pierwowzorem.', correct: false }
    ],
    hint: 'Parafraza to oddanie myśli autora własnym językiem i stylem bez zniekształcania znaczenia.'
  },
{
    "type": "matchup",
    "title": "KULTURA SIECI • NETYKIETA I TOKSYCZNOŚĆ",
    "prompt": "Dopasuj zjawisko w komunikacji internetowej do jego definicji:",
    "pairs": [
      {
        "left": "Konstruktywna krytyka",
        "right": "Kulturalna ocena dzieła z podaniem rzeczowych argumentów i propozycji poprawy"
      },
      {
        "left": "Hejt (hate speech)",
        "right": "Agresywny, wulgarny atak mający na celu poniżenie, obrażenie i zaszczucie drugiego człowieka"
      },
      {
        "left": "Trolling",
        "right": "Celowe prowokowanie kłótni i zamieszania na forum przez absurdalne, zaczepne komentarze"
      },
      {
        "left": "Flamewar (wojna na słowa)",
        "right": "Gwałtowna wymiana wyzwisk i obelg między użytkownikami odchodząca od meritum tematu"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "PRAWO AUTORSKIE • LICENCJE W SIECI",
    "prompt": "Przypisz materiały do wolnodostępnych (Creative Commons / Domena publiczna) lub ściśle chronionych prawem:",
    "categories": [
      "WOLNE ZASOBY (CC / DOMENA PUBLICZNA)",
      "MATERIAŁY CHRONIONE PRAWEM AUTORSKIM"
    ],
    "items": [
      {
        "text": "Zdjęcia z darmowych banków zdjęć na licencji CC0 (bezpłatne użycie)",
        "category": "WOLNE ZASOBY (CC / DOMENA PUBLICZNA)"
      },
      {
        "text": "Zrzut ekranu z kinowego filmu chronionego prawem autorskim dystrybutora",
        "category": "MATERIAŁY CHRONIONE PRAWEM AUTORSKIM"
      },
      {
        "text": "Teksty i obrazy w Domenie Publicznej (minęło ponad 70 lat od śmierci autora)",
        "category": "WOLNE ZASOBY (CC / DOMENA PUBLICZNA)"
      },
      {
        "text": "Cała płatna płyta muzyczna artysty wstawiona bez zgody na własny kanał",
        "category": "MATERIAŁY CHRONIONE PRAWEM AUTORSKIM"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "ALGORYTMY SOCIAL MEDIA • BAŃKA INFORMACYJNA",
    "prompt": "Na czym polega zjawisko tzw. «bańki informacyjnej» (echo chamber) tworzonej przez algorytmy mediów społecznościowych?",
    "options": [
      {
        "text": "Algorytmy podsuwają użytkownikowi tylko takie treści, które potwierdzają jego dotychczasowe poglądy, odcinając go od innych perspektyw",
        "correct": true
      },
      {
        "text": "Algorytm automatycznie wyłącza telefon po 30 minutach oglądania rolek",
        "correct": false
      },
      {
        "text": "Każdy użytkownik w sieci widzi dokładnie te same informacje w identycznej kolejności",
        "correct": false
      },
      {
        "text": "To fizyczna bańka mydlana stawiana na monitorze komputera",
        "correct": false
      }
    ],
    "hint": "Algorytmy maksymalizują czas uwagi, serwując treści, z którymi się zgadzasz i które wzbudzają emocje."
  },
  {
    "type": "matchup",
    "title": "BEZPIECZEŃSTWO KONT SPOŁECZNOŚCIOWYCH",
    "prompt": "Połącz pojęcie cyberbezpieczeństwa z najlepszą praktyką ochrony profilu:",
    "pairs": [
      {
        "left": "Weryfikacja dwuetapowa (2FA)",
        "right": "Wymóg potwierdzenia logowania kodem SMS lub aplikacją uwierzytelniającą na telefonie"
      },
      {
        "left": "Silne unikalne hasło",
        "right": "Kombinacja dużych i małych liter, cyfr i znaków specjalnych, różna dla każdego serwisu"
      },
      {
        "left": "Phishing",
        "right": "Podrobiona strona logowania wyłudzająca login i hasło pod pozorem alertu bezpieczeństwa"
      },
      {
        "left": "Menedżer haseł",
        "right": "Bezpieczna, szyfrowana aplikacja generująca i przechowująca skomplikowane hasła"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "PRYWATNOŚĆ W SIECI • DANE WRAŻLIWE",
    "prompt": "Przypisz informacje do bezpiecznych do udostępnienia w sieci lub poufnych danych podlegających ścisłej ochronie:",
    "categories": [
      "BEZPIECZNE TREŚCI PUBLICZNE",
      "POUFNE DANE PRYWATNE (NIE UDOSTĘPNIAĆ!)"
    ],
    "items": [
      {
        "text": "Zdjęcie własnoręcznie upieczonego ciasta lub rysunku krajobrazu",
        "category": "BEZPIECZNE TREŚCI PUBLICZNE"
      },
      {
        "text": "Zdjęcie legitymacji szkolnej z widocznym numerem PESEL i adresem zamieszkania",
        "category": "POUFNE DANE PRYWATNE (NIE UDOSTĘPNIAĆ!)"
      },
      {
        "text": "Recenzja przeczytanej książki lub polecanej gry planszowej",
        "category": "BEZPIECZNE TREŚCI PUBLICZNE"
      },
      {
        "text": "Zdjęcie karty płatniczej rodziców z widocznym kodem CVV/CVC na odwrocie",
        "category": "POUFNE DANE PRYWATNE (NIE UDOSTĘPNIAĆ!)"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "PRAWO CYWILNE • OCHRONA WIZERUNKU W INTERNECIE",
    "prompt": "Kiedy wolno zgodnie z prawem opublikować w internecie zdjęcie przedstawiające twarz kolegi z klasy?",
    "options": [
      {
        "text": "Tylko wtedy, gdy kolega (lub jego rodzic w przypadku osób małoletnich) wyraził na to wyraźną, świadomą zgodę",
        "correct": true
      },
      {
        "text": "Zawsze, bez pytania nikogo o zdanie, jeśli zdjęcie zostało zrobione telefonem",
        "correct": false
      },
      {
        "text": "Wystarczy, że pod zdjęciem dodamy śmieszny podpis i oznaczymy 5 znajomych",
        "correct": false
      },
      {
        "text": "Jeśli kolega na zdjęciu ma zamknięte oczy, zgoda nigdy nie jest wymagana",
        "correct": false
      }
    ],
    "hint": "Wizerunek podlega ochronie dóbr osobistych – publikacja twarzy wymaga bezwzględnej zgody."
  },
  {
    "type": "matchup",
    "title": "FORMATY TWÓRCZOŚCI W SOCIAL MEDIACH",
    "prompt": "Połącz format internetowy z jego specyfiką medialną:",
    "pairs": [
      {
        "left": "Podcast",
        "right": "Audycja dźwiękowa w odcinkach, dostępna do odsłuchania na żądanie w streamingu"
      },
      {
        "left": "Rolka / Reel",
        "right": "Krótki, dynamiczny pionowy materiał wideo z podkładem muzycznym i napisami"
      },
      {
        "left": "Vlog",
        "right": "Wideo-pamiętnik dokumentujący codzienne życie, podróże lub pasje twórcy"
      },
      {
        "left": "Live stream",
        "right": "Transmisja na żywo w czasie rzeczywistym z możliwością interakcji na czacie"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "WERYFIKACJA ŹRÓDEŁ • FAKE CZY FACT",
    "prompt": "Przypisz źródła informacji do rzetelnych i wiarygodnych lub podejrzanych witryn manipulacyjnych:",
    "categories": [
      "ŹRÓDŁA WIARYGODNE I SPRAWDZONE",
      "PODEJRZANE ŹRÓDŁA MANIPULACYJNE"
    ],
    "items": [
      {
        "text": "Oficjalny komunikat Ministerstwa Zdrowia lub Polskiej Akademii Nauk",
        "category": "ŹRÓDŁA WIARYGODNE I SPRAWDZONE"
      },
      {
        "text": "Anonimowy profil bez imienia i nazwiska wstawiający sensacyjne wykresy bez źródeł",
        "category": "PODEJRZANE ŹRÓDŁA MANIPULACYJNE"
      },
      {
        "text": "Encyklopedia PWN i recenzowane czasopisma naukowe z bibliografią",
        "category": "ŹRÓDŁA WIARYGODNE I SPRAWDZONE"
      },
      {
        "text": "Strona pełna wyskakujących reklam krzycząca: «Naukowcy są w szoku! Ukrywają to przed tobą!»",
        "category": "PODEJRZANE ŹRÓDŁA MANIPULACYJNE"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "SZCZTUCZNA INTELIGENCJA • DEEPFAKE I MANIPULACJA WIDEO",
    "prompt": "Czym jest zjawisko «deepfake» i dlaczego stanowi poważne wyzwanie dla współczesnego społeczeństwa?",
    "options": [
      {
        "text": "To tworzenie fałszywych nagrań wideo lub audio przy pomocy sztucznej inteligencji, na których ludzie mówią lub robią rzeczy, których w rzeczywistości nigdy nie zrobili",
        "correct": true
      },
      {
        "text": "To rodzaj bardzo drogiego aparatu fotograficznego używanego przez profesjonalistów",
        "correct": false
      },
      {
        "text": "To oficjalna nazwa nowego filtra upiększającego twarz na Instagramie",
        "correct": false
      },
      {
        "text": "To technologia pozwalająca naprawiać pęknięte ekrany smartfonów przez internet",
        "correct": false
      }
    ],
    "hint": "Deepfake potrafi syntetyzować twarz i głos dowolnej osoby, co bywa wykorzystywane do dezinformacji i szantażu."
  },
  {
    "type": "matchup",
    "title": "PSYCHOLOGIA MEDIÓW • CYFROWY DOBROSTAN (DIGITAL WELLBEING)",
    "prompt": "Połącz zjawisko psychologiczne z mechanizmem obronnym chroniącym zdrowie psychiczne:",
    "pairs": [
      {
        "left": "FOMO (lęk przed odłączeniem od sieci)",
        "right": "Świadome wyznaczanie stref bez telefonu (np. podczas posiłków i 1h przed snem)"
      },
      {
        "left": "Porównywanie się z wyidealizowanymi zdjęciami",
        "right": "Pamiętanie, że w sieci ludzie pokazują tylko wyselekcjonowane, przefiltrowane chwile"
      },
      {
        "left": "Fonoholizm (uzależnienie od smartfona)",
        "right": "Wyłączenie zbędnych powiadomień i zastąpienie scrollowania realnym hobby"
      },
      {
        "left": "Przeciążenie informacyjne (infobesity)",
        "right": "Świadoma selekcja śledzonych profili i ograniczenie czasu w social mediach"
      }
    ]
  },
  {
    "type": "sorting",
    "title": "CYFROWY ŚLAD (DIGITAL FOOTPRINT)",
    "prompt": "Przypisz konsekwencje do cech cyfrowego śladu człowieka w sieci:",
    "categories": [
      "TRWAŁOŚĆ CYFROWEGO ŚLADU",
      "KORZYŚCI Z ODPOWIEDZIALNEGO PROFILU"
    ],
    "items": [
      {
        "text": "Raz wrzucone do sieci kompromitujące zdjęcie może zostać pobrane i nigdy nie zniknąć",
        "category": "TRWAŁOŚĆ CYFROWEGO ŚLADU"
      },
      {
        "text": "Publikowanie wartościowych projektów i pasji buduje pozytywny wizerunek w przyszłej rekrutacji",
        "category": "KORZYŚCI Z ODPOWIEDZIALNEGO PROFILU"
      },
      {
        "text": "Agresywne wpisy sprzed lat mogą uniemożliwić zdobycie wymarzonej pracy lub stypendium",
        "category": "TRWAŁOŚĆ CYFROWEGO ŚLADU"
      },
      {
        "text": "Udział w internetowych kołach naukowych rozwija kompetencje i ułatwia kontakty",
        "category": "KORZYŚCI Z ODPOWIEDZIALNEGO PROFILU"
      }
    ]
  },
  {
    "type": "quiz",
    "title": "ETYKA TWÓRCY INTERNETOWEGO • SPONSORING I LOKOWANIE",
    "prompt": "Jaki prawny obowiązek spoczywa na influencerze prezentującym w mediach społecznościowych produkt, za który otrzymał wynagrodzenie?",
    "options": [
      {
        "text": "Musi jasno, czytelnie i jednoznacznie oznaczyć materiał jako płatną reklamę lub współpracę komercyjną (np. #reklama)",
        "correct": true
      },
      {
        "text": "Powinien udawać, że kupił ten produkt za własne kieszonkowe w sklepie",
        "correct": false
      },
      {
        "text": "Nie musi nic oznaczać, prawo dotyczy tylko tradycyjnej telewizji",
        "correct": false
      },
      {
        "text": "Musi skasować komentarze wszystkich osób, które pytają o cenę produktu",
        "correct": false
      }
    ],
    "hint": "Zgodnie z wytycznymi UOKiK ukrywanie płatnej współpracy to nielegalna kryptoreklama wprowadzająca w błąd."
  }
];
