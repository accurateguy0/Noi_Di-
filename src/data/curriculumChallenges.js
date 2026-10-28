// Zadania z podstawy programowej (Klasa 4 „Zamieńmy słowo” → Klasa 8 Egzamin Ósmoklasisty CKE):
// - 7 nowych typów minigier edukacyjnych:
//   1. 'cloze' (Złodziej Końcówek – końcówki fleksyjne przypadków i ortografia ó/u, rz/ż, ch/h)
//   2. 'sentence_algo' (Algorytm Zdania – wskazywanie Podmiotu, Orzeczenia oraz przecinka przed spójnikiem)
//   3. 'word_magnets' (Word Magnets – układanie rozsypanych słów w poprawne zdanie)
//   4. 'text_architect' (Architekt Tekstu – budowanie bloków Dedykacji, Zaproszenia, Ogłoszenia, Opowiadania i Rozprawki)
//   5. 'reading_tf' (Detektyw Lektur CKE – praca z cytatem/afiszem + 2 zdania Prawda/Fałsz + pytanie o motyw)
//   6. 'swipe' (Tinder / Swipe: Fakt czy Opinia? – przesuwanie w lewo/prawo z wyjaśnieniem)
//   7. 'sorting' (Group Sort – sortowanie elementów do grup gramatycznych i literackich)
// - Każdy zestaw posiada pole `theory` („📖 Dokładne omówienie tematu / Ściąga Mistrza”), które można rozwinąć w trakcie gry!

// ─────────────── 1. ZŁODZIEJ KOŃCÓWEK & WORD MAGNETS & GROUP SORT (Fleksja, Ortografia i Szyk Zdania) ───────────────
export const FLEKSJA_I_MAGNESY_CHALLENGES = [
  {
    type: 'cloze',
    title: 'ZŁODZIEJ KOŃCÓWEK • BIERNIK I NARZĘDNIK',
    theory: {
      title: 'Karta Teorii: Biernik (kogo? co?) vs Narzędnik (z kim? z czym?)',
      body: 'W języku wietnamskim rzeczowniki nie zmieniają końcówek, natomiast w polskim końcówka zależy od czasownika:\n• Po czasownikach „mam, widzę, lubię, poproszę” używamy BIERNIKA (kogo? co?): rzeczowniki żeńskie na -a zmieniają końcówkę na -ę (np. bułka → poproszę bułkę, książka → czytam książkę).\n• Po przyimku „z” oraz gdy mówimy o środku transportu lub narzędziu („płacę…, jadę…, piszę…”) używamy NARZĘDNIKA (z kim? czym?): końcówka żeńska to -ą, a męska -em (np. płacę kartą, piszę długopisem).'
    },
    prompt: 'Uzupełnij skradzione końcówki w zdaniu: „W szkolnym sklepiku Minh poprosił o śwież___ bułk___ i zapłacił zbliżeniowo kart___.”',
    sentenceParts: [
      'W szkolnym sklepiku Minh poprosił o śwież',
      { blank: true, answer: 'ą', options: ['ą', 'a', 'ej', 'om'] },
      ' bułk',
      { blank: true, answer: 'ę', options: ['ę', 'a', 'ą', 'i'] },
      ' i zapłacił zbliżeniowo kart',
      { blank: true, answer: 'ą', options: ['ą', 'ę', 'a', 'om'] },
      '.'
    ],
    hint: 'Poproszę (kogo? co? – Biernik) świeżą bułkę; zapłacił (czym? – Narzędnik) kartą.'
  },
  {
    type: 'cloze',
    title: 'ZŁODZIEJ KOŃCÓWEK • ORTOGRAFIA (Ó/U, RZ/Ż)',
    theory: {
      title: 'Karta Teorii: Kiedy piszemy „ó” oraz „rz”?',
      body: '• „Ó” piszemy, gdy w innych formach wyrazu wymienia się na „o”, „e” lub „a” (np. król – królowie, przyjaciół – przyjaciele, siódmy – siedem) oraz w końcówkach -ów (np. uczniów, kolegów).\n• „RZ” piszemy po spółgłoskach: p, b, t, d, k, g, ch, j, w (np. przygoda, drzewo, książka → wyjątek: kształt, pszczoła) oraz gdy wymienia się na „r” (np. morze – morski).'
    },
    prompt: 'Wstaw brakujące litery ortograficzne w zdaniu o lekturze:',
    sentenceParts: [
      'Mały Książę opuścił swoj',
      { blank: true, answer: 'ą', options: ['ą', 'om', 'ę'] },
      ' planetę, ponieważ troszczył się o wyjątkow',
      { blank: true, answer: 'ą', options: ['ą', 'om', 'ąm'] },
      ' r',
      { blank: true, answer: 'óż', options: ['óż', 'uż', 'órz'] },
      'ę pod szklanym kloszem.'
    ],
    hint: 'Wyraz „róża” ma tradycyjne „ó” i „ż”, a w bierniku liczby pojedynczej końcówka przymiotnika to zawsze „-ą” (nigdy „-om”!).'
  },
  {
    type: 'word_magnets',
    title: 'WORD MAGNETS • SZYK ZDANIA ZŁOŻONEGO',
    theory: {
      title: 'Karta Teorii: Jak budować naturalne zdanie po polsku?',
      body: 'W języku polskim zdanie zaczynamy zazwyczaj od okolicznika czasu lub podmiotu (kto?), następnie stawiamy orzeczenie (co zrobił?) i dopełnienie. Przed spójnikami „ponieważ”, „dlatego że”, „aby” zawsze stawiamy przecinek!'
    },
    prompt: 'Ułóż z magnesów słownych poprawne zdanie z podręcznika „Zamieńmy słowo”:',
    words: ['Minh', 'otworzył', 'zeszyt,', 'ponieważ', 'nauczycielka', 'zapisała', 'temat', 'na', 'tablicy.'],
    hint: 'Zacznij od „Minh otworzył zeszyt,”, a po przecinku wstaw spójnik „ponieważ”.'
  },
  {
    type: 'word_magnets',
    title: 'WORD MAGNETS • CYTAT Z LEKTURY OBOWIĄZKOWEJ',
    theory: {
      title: 'Karta Teorii: Złota myśl Lisa z „Małego Księcia”',
      body: 'Jednym z najważniejszych cytatów na egzaminie ósmoklasisty są słowa Lisa skierowane do Małego Księcia: „Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.” Oznaczają one, że prawdziwej przyjaźni i miłości nie da się kupić ani ocenić powierzchownie.'
    },
    prompt: 'Ułóż z magnesów słynne zdanie Lisa z „Małego Księcia”:',
    words: ['Dobrze', 'widzi', 'się', 'tylko', 'sercem.'],
    hint: 'Pierwsze słowo to „Dobrze”, a ostatnie „sercem.”.'
  }
];

// ─────────────── 2. ALGORYTM ZDANIA (Składnia: Podmiot, Orzeczenie, Przecinki w zdaniach złożonych) ───────────────
export const ALGORYTM_ZDANIA_CHALLENGES = [
  {
    type: 'sentence_algo',
    title: 'ALGORYTM ZDANIA • PODMIOT, ORZECZENIE I PRZECINEK',
    theory: {
      title: 'Karta Teorii: Algorytm analizy zdania polskiego (3 kroki)',
      body: 'Krok 1 (ORZECZENIE): Znajdź czasownik w formie osobowej (co robi? co się z nim dzieje?), np. „odpowiedział”, „biegnie”. To serce zdania!\nKrok 2 (PODMIOT): Zapytaj „kto? co?” wykonuje tę czynność (w Mianowniku), np. „uczeń”, „Balladyna”.\nKrok 3 (PRZECINEK): W zdaniu złożonym postaw przecinek PRZED spójnikami podrzędnymi i przeciwstawnymi: „że, który, ponieważ, bo, ale, lecz, więc, aby”.'
    },
    prompt: 'Przeprowadź Algorytm Zdania: wskaż ORZECZENIE, PODMIOT oraz miejsce, przed którym należy postawić PRZECINEK:',
    sentence: 'Odważny Rudy wytrzymał przesłuchanie ponieważ kochał swoich przyjaciół.',
    steps: [
      {
        question: 'KROK 1/3: Które słowo jest głównym ORZECZENIEM (co zrobił?) w pierwszym zdaniu składowym?',
        options: ['wytrzymał', 'Odważny', 'Rudy', 'przyjaciół'],
        correct: 'wytrzymał'
      },
      {
        question: 'KROK 2/3: Które słowo jest PODMIOTEM (kto wytrzymał?)',
        options: ['Rudy', 'przesłuchanie', 'Odważny', 'ponieważ'],
        correct: 'Rudy'
      },
      {
        question: 'KROK 3/3: Przed którym spójnikiem MUSIMY postawić przecinek?',
        options: ['przed „ponieważ”', 'przed „wytrzymał”', 'przed „swoich”', 'nie stawiamy przecinka'],
        correct: 'przed „ponieważ”'
      }
    ],
    hint: 'Orzeczenie to czasownik „wytrzymał”, podmiot to „Rudy”, a przecinek stawiamy przed spójnikiem „ponieważ”.'
  },
  {
    type: 'sentence_algo',
    title: 'ALGORYTM ZDANIA • ZDANIE ZŁOŻONE Z „KTÓRY”',
    theory: {
      title: 'Karta Teorii: Przecinek przed „który / która / które” i „że”',
      body: 'Zasada 100% pewna na sprawdzianie i egzaminie CKE: przed słowami „że”, „który”, „która”, „które”, „którzy” ZAWSZE stawiamy przecinek otwierający zdanie podrzędne!'
    },
    prompt: 'Przeprowadź Algorytm Zdania dla zdania o „Opowieści wigilijnej”:',
    sentence: 'Stary Scrooge zrozumiał swój błąd który popełniał przez wiele lat.',
    steps: [
      {
        question: 'KROK 1/3: Wskaż ORZECZENIE głównego zdania (co zrobił Scrooge?):',
        options: ['zrozumiał', 'Stary', 'błąd', 'wiele'],
        correct: 'zrozumiał'
      },
      {
        question: 'KROK 2/3: Wskaż PODMIOT głównego zdania (kto zrozumiał?):',
        options: ['Scrooge', 'błąd', 'lat', 'Stary'],
        correct: 'Scrooge'
      },
      {
        question: 'KROK 3/3: Gdzie w tym zdaniu należy wstawić brakujący przecinek?',
        options: ['przed zaimkiem „który”', 'przed słowem „błąd”', 'przed słowem „przez”', 'po słowie „Stary”'],
        correct: 'przed zaimkiem „który”'
      }
    ],
    hint: 'Co zrobił? – „zrozumiał”. Kto? – „Scrooge”. Przecinek stawiamy przed „który”.'
  }
];

// ─────────────── 3. TINDER / SWIPE: FAKT CZY OPINIA? (Redagowanie i czytanie ze zrozumieniem) ───────────────
export const SWIPE_FAKT_OPINIA_CHALLENGES = [
  {
    type: 'swipe',
    title: 'SWIPE • FAKT CZY OPINIA? (PODSTAWA PROGRAMOWA KL. 4–8)',
    theory: {
      title: 'Karta Teorii: Jak odróżnić FAKT od OPINII w 3 sekundy?',
      body: '• FAKT (Przesuń w LEWO ⬅️): Informacja obiektywna, którą można sprawdzić i udowodnić (daty, miejsca, wydarzenia z fabuły, dane naukowe). Nie zawiera słów oceniających.\n• OPINIA (Przesuń w PRAWO ➡️): Subiektywny sąd, ocena lub wrażenie autora. Zawiera przymiotniki i przysłówki wartościujące: „najlepszy, nudny, wspaniały, moim zdaniem, uważam, że, najciekawszy”.'
    },
    prompt: 'Oceń kolejne wypowiedzi! Wybierz: FAKT (sprawdzalna prawda) czy OPINIA (subiektywna ocena)?',
    leftLabel: '⬅️ FAKT (Obiektywny)',
    rightLabel: 'OPINIA (Ocena) ➡️',
    cards: [
      {
        text: '„Akcja pod Arsenałem odbyła się 26 marca 1943 roku w Warszawie.”',
        correctSide: 'left',
        explanation: 'To FAKT historyczny i literacki – zawiera dokładną datę oraz miejsce wydarzenia.'
      },
      {
        text: '„Moim zdaniem »Kamienie na szaniec« to najbardziej wzruszająca książka w całej szkole.”',
        correctSide: 'right',
        explanation: 'To OPINIA – zwrot „moim zdaniem” oraz ocena „najbardziej wzruszająca” wyrażają osobiste odczucie.'
      },
      {
        text: '„Dramat »Balladyna« został napisany przez Juliusza Słowackiego.”',
        correctSide: 'left',
        explanation: 'To FAKT – autorstwo utworu jest informacją w 100% weryfikowalną.'
      },
      {
        text: '„Uważam, że zachowanie Zosi z »Dziadów cz. II« było bardzo lekkomyślne i egoistyczne.”',
        correctSide: 'right',
        explanation: 'To OPINIA – zawiera czasownik „uważam” oraz przymiotniki oceniające („lekkomyślne, egoistyczne”).'
      }
    ]
  }
];

// ─────────────── 4. FORMY WYPOWIEDZI: Ogłoszenie, Zaproszenie, Dedykacja, Opowiadanie, Rozprawka ───────────────
export const FORMY_WYPOWIEDZI_KL4_CHALLENGES = [
  {
    type: 'text_architect',
    title: 'ARCHITEKT TEKSTU • DEDYKACJA („ZAMIEŃMY SŁOWO 4”)',
    theory: {
      title: 'Karta Teorii: Jak napisać wzorową DEDYKACJĘ?',
      body: 'Dedykacja to krótki, osobisty wpis na pierwszej stronie darowanej książki lub na rysunku/pamiątce. Musi odpowiadać na 4 pytania:\n1. KOMU darujemy? (w Celowniku: komu? czemu? np. „Drogiemu Olkowi”, „Kochanej Mamie”)\n2. Z JAKIEJ OKAZJI i Z JAKIM ŻYCZENIEM? (np. „z okazji urodzin, z życzeniami wielu przygód”)\n3. KTO daruje? (podpis w Mianowniku, np. „Minh”)\n4. GDZIE i KIEDY? (miejscowość i data w lewym dolnym lub górnym rogu, np. „Warszawa, 12 V 2026 r.”)'
    },
    prompt: 'Zbuduj wzorową DEDYKACJĘ w książce dla kolegi z ławki, układając jej 4 elementy we właściwej kolejności:',
    blocks: [
      { id: 'b1', label: '1. ZWROT DO ADRESATA (Komu?)', text: 'Drogiemu Olkowi – najlepszemu koledze z klasy 4b,' },
      { id: 'b2', label: '2. OKAZJA I ŻYCZENIA (Dlaczego?)', text: 'na pamiątkę wspólnej nauki języka polskiego, z życzeniami samych szóstek' },
      { id: 'b3', label: '3. PODPIS OFIARODAWCY (Od kogo?)', text: 'tę książkę ofiarowuje przyjaciel Minh' },
      { id: 'b4', label: '4. MIEJSCOWOŚĆ I DATA (Gdzie i kiedy?)', text: 'Warszawa, 15 czerwca 2026 r.' }
    ],
    correctOrder: ['b1', 'b2', 'b3', 'b4'],
    hint: 'Zacznij od adresata („Drogiemu Olkowi…”), potem podaj okazję i życzenia, następnie podpis ofiarodawcy, a na dole miejscowość i datę.'
  },
  {
    type: 'text_architect',
    title: 'ARCHITEKT TEKSTU • ZAPROSZENIE (5 KROKÓW CKE)',
    theory: {
      title: 'Karta Teorii: 5 obowiązkowych pytań w ZAPROSZENIU',
      body: 'Na sprawdzianie i egzaminie za zaproszenie otrzymujesz komplet punktów tylko wtedy, gdy odpowiesz na 5 pytań:\n1. KTO zaprasza? (np. Samorząd Uczniowski)\n2. KOGO zaprasza? (np. wszystkich uczniów klas 4–8)\n3. NA CO zaprasza? (np. na Szkolny Turniej Gier Planszowych)\n4. KIEDY się odbędzie? (dokładna data I godzina!)\n5. GDZIE się odbędzie? (np. w sali gimnastycznej szkoły).'
    },
    prompt: 'Ułóż we właściwej kolejności elementy oficjalnego ZAPROSZENIA szkolnego:',
    blocks: [
      { id: 'z1', label: 'NAGŁÓWEK', text: 'ZAPROSZENIE' },
      { id: 'z2', label: 'KTO, KOGO I NA CO ZAPRASZA?', text: 'Samorząd Uczniowski Szkoły Podstawowej nr 12 serdecznie zaprasza wszystkich uczniów klas 4–8 na Szkolny Dzień Kultury Wietnamskiej i Polskiej.' },
      { id: 'z3', label: 'KIEDY I GDZIE? (Data, godzina, miejsce)', text: 'Wydarzenie odbędzie się w piątek, 22 maja 2026 r., o godzinie 14:00 w dużej sali gimnastycznej.' },
      { id: 'z4', label: 'ZACHĘTA I PODPIS', text: 'Gwarantujemy pyszne przekąski i quiz z nagrodami! Do zobaczenia! — Przewodniczący Samorządu' }
    ],
    correctOrder: ['z1', 'z2', 'z3', 'z4'],
    hint: 'Kolejność: Nagłówek → Kto/Kogo/Na co → Kiedy i gdzie → Zachęta i podpis.'
  },
  {
    type: 'quiz',
    theory: {
      title: 'Karta Teorii: Czym różni się Dedykacja, Zaproszenie i Ogłoszenie?',
      body: '• DEDYKACJA – wpis w prezencie/książce dla konkretnej osoby.\n• ZAPROSZENIE – prośba o przybycie na wydarzenie w przyszłości (musi mieć datę, godzinę i miejsce).\n• OGŁOSZENIE – komunikat dla szerokiej grupy odbiorców (np. o konkursie, zbiórce lub zagubionym przedmiocie).'
    },
    prompt: 'Wpisujesz na pierwszej stronie książki życzenia dla przyjaciela z okazji urodzin. Jak nazywa się ta krótka forma wypowiedzi?',
    options: [
      { text: 'Dedykacja', correct: true },
      { text: 'Ogłoszenie', correct: false },
      { text: 'Sprawozdanie', correct: false },
      { text: 'Rozprawka', correct: false }
    ],
    hint: 'Dedykacja odpowiada na pytania: komu? z jakiej okazji? kto daruje książkę?'
  },
  {
    type: 'matchup',
    prompt: 'Połącz krótką formę użytkową z „Zamieńmy słowo 4” z jej obowiązkowym elementem:',
    pairs: [
      { left: 'Zaproszenie', right: 'Kogo? Na co? Kiedy? Gdzie? + zwrot grzecznościowy' },
      { left: 'Ogłoszenie', right: 'Informacja dla wielu osób (np. o zagubionym psie lub konkursie)' },
      { left: 'Dedykacja', right: 'Osobisty wpis w darowanej książce (komu, od kogo, z jakiej okazji)' },
      { left: 'Instrukcja', right: 'Kolejne kroki działania w trybie rozkazującym lub bezokoliczniku' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz fragment tekstu do właściwej formy: ZAPROSZENIE czy DEDYKACJA?',
    categories: ['ZAPROSZENIE', 'DEDYKACJA'],
    items: [
      { text: '„Serdecznie zapraszam kolegów z klasy 4b na mecz w piątek o 15:00 na boisku szkolnym.”', category: 'ZAPROSZENIE' },
      { text: '„Drogiemu Olkowi na pamiątkę wspólnej nauki języka polskiego – ofiarowuje Minh.”', category: 'DEDYKACJA' },
      { text: '„Będzie nam bardzo miło gościć Panią Dyrektor podczas szkolnego przedstawienia.”', category: 'ZAPROSZENIE' },
      { text: '„Niech ta książka przypomina Ci o naszych przygodach w czwartej klasie!”', category: 'DEDYKACJA' }
    ]
  }
];

export const FORMY_EGZAMINACYJNE_KL8_CHALLENGES = [
  {
    type: 'text_architect',
    title: 'ARCHITEKT TEKSTU • ROZPRAWKA EGZAMINACYJNA (KLASA 8)',
    theory: {
      title: 'Karta Teorii: Budowa Rozprawki na Egzaminie Ósmoklasisty (min. 200 słów)',
      body: 'Rozprawka ma sztywną, logiczną strukturę:\n1. WSTĘP + TEZA: Wprowadzenie w temat i jasne postawienie TEZY (np. „Uważam, że przyjaźń pomaga przetrwać najtrudniejsze chwile”).\n2. ARGUMENT 1 (z lektury obowiązkowej): Uzasadnienie + konkretny przykład z lektury CKE (np. Rudy, Alek i Zośka w „Kamieniach na szaniec”).\n3. ARGUMENT 2 (z wybranej książki): Drugi argument poparty przykładem (np. Mały Książę i Lis).\n4. ZAKOŃCZENIE (Podsumowanie): Potwierdzenie tezy innymi słowami („Podsumowując przytoczone argumenty…”).'
    },
    prompt: 'Ułóż akapity ROZPRAWKI na temat: „Czy przyjaźń zmienia człowieka na lepsze?” we właściwej kolejności:',
    blocks: [
      { id: 'r1', label: '1. WSTĘP I TEZA', text: 'Przyjaźń od wieków stanowi jedną z najważniejszych wartości w życiu człowieka. Uważam, że prawdziwy przyjaciel potrafi zmienić nas na lepsze i nauczyć odpowiedzialności.' },
      { id: 'r2', label: '2. ARGUMENT I + PRZYKŁAD Z LEKTURY OBOWIĄZKOWEJ', text: 'Po pierwsze, przyjaciel uczy nas troski o drugą istotę. Doskonałym przykładem jest „Mały Książę”, w którym Lis tłumaczy bohaterowi, czym jest oswajanie i odpowiedzialność za Różę.' },
      { id: 'r3', label: '3. ARGUMENT II + DRUGA LEKTURA', text: 'Kolejnym argumentem jest fakt, że przyjaźń daje odwagę w obliczu niebezpieczeństwa. W „Kamieniach na szaniec” Zośka i Alek ryzykują życie pod Arsenałem, by uratować katowanego Rudego.' },
      { id: 'r4', label: '4. ZAKOŃCZENIE / WNIOSKI', text: 'Podsumowując powyższe rozważania, przytoczone przykłady jednoznacznie potwierdzają słuszność mojej tezy: przyjaźń uszlachetnia człowieka.' }
    ],
    correctOrder: ['r1', 'r2', 'r3', 'r4'],
    hint: 'Kolejność: Wstęp z tezą → Po pierwsze (Argument 1) → Kolejnym argumentem (Argument 2) → Podsumowując (Zakończenie).'
  },
  {
    type: 'text_architect',
    title: 'ARCHITEKT TEKSTU • OPOWIADANIE TWÓRCZE (KLASA 8)',
    theory: {
      title: 'Karta Teorii: Jak zdobyć maksimum punktów za OPOWIADANIE TWÓRCZE?',
      body: 'W opowiadaniu egzaminacyjnym musisz wykazać znajomość lektury obowiązkowej ORAZ zastosować przynajmniej 6 elementów twórczych: czasowniki w 1. lub 3. osobie, opis miejsca/przeżyć wewnętrznych, DIALOG z myślnikami, zwrot akcji, punkt kulminacyjny oraz puentę (morał na końcu).'
    },
    prompt: 'Ułóż plan wydarzeń OPOWIADANIA TWÓRCZEGO o spotkaniu z Ebenezerem Scrooge’em:',
    blocks: [
      { id: 'o1', label: '1. ZAWIĄZANIE AKCJI I OPIS MIEJSCA', text: 'W mroźny wigilijny wieczór szedłem zaśnieżoną ulicą Londynu, gdy nagle zauważyłem uchylone drzwi kantoru Ebenezera Scrooge’a.' },
      { id: 'o2', label: '2. ROZWINIĘCIE I DIALOG Z BOHATEREM', text: '– Dlaczego liczysz monety w tak piękny wieczór, zamiast spędzić go z bliskimi? – zapytałem cicho starca.' },
      { id: 'o3', label: '3. PUNKT KULMINACYJNY (PRZEŁOM)', text: 'Nagle w kominku błysnął niebieski płomień i rozległ się brzęk ciężkich łańcuchów Jakuba Marleya. Przerażony Scrooge upuścił księgę rachunkową i ukrył twarz w dłoniach.' },
      { id: 'o4', label: '4. ROZWIĄZANIE AKCJI I PUENTA', text: 'O świcie odmieniony kupiec wybiegł na ulicę z uśmiechem, udowadniając, że nigdy nie jest za późno na otwarcie swojego serca.' }
    ],
    correctOrder: ['o1', 'o2', 'o3', 'o4'],
    hint: 'Kolejność: Zawiązanie akcji (wieczór w Londynie) → Dialog → Punkt kulminacyjny (pojawienie się ducha) → Puenta o świcie.'
  },
  {
    type: 'sorting',
    prompt: 'Na egzaminie ósmoklasisty wybierasz ROZPRAWKĘ lub OPOWIADANIE. Przypisz elementy do właściwej formy!',
    categories: ['ROZPRAWKA', 'OPOWIADANIE TWÓRCZE'],
    items: [
      { text: 'Teza lub hipoteza oraz minimum dwa argumenty z przykładami z lektur', category: 'ROZPRAWKA' },
      { text: 'Fabuła, zwrot akcji, punkt kulminacyjny oraz dialog z myślnikami', category: 'OPOWIADANIE TWÓRCZE' },
      { text: 'Słownictwo oceniające i spójniki: „Po pierwsze…”, „Kolejnym argumentem jest…”', category: 'ROZPRAWKA' },
      { text: 'Opisy przeżyć wewnętrznych bohatera, krajobrazu i dynamika wydarzeń', category: 'OPOWIADANIE TWÓRCZE' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Piszesz opowiadanie twórcze o spotkaniu z bohaterem lektury obowiązkowej. Który zapis dialogu jest poprawny interpunkcyjnie?',
    options: [
      { text: '– Dobrze widzi się tylko sercem – powiedział cicho Mały Książę.', correct: true },
      { text: 'Dobrze widzi się tylko sercem powiedział Mały Książę.', correct: false },
      { text: '„Dobrze widzi się tylko sercem”: Mały Książę.', correct: false },
      { text: '- Dobrze widzi się tylko sercem. – Powiedział Mały Książę', correct: false }
    ],
    hint: 'W dialogu nową wypowiedź zaczynamy od myślnika, a przed czasownikiem „powiedział” stawiamy drugi myślnik.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz część kompozycyjną ROZPRAWKI i OPOWIADANIA z jej rolą w wypracowaniu:',
    pairs: [
      { left: 'Teza w rozprawce', right: 'Zdecydowane twierdzenie, które udowadniasz w dalszej części pracy' },
      { left: 'Punkt kulminacyjny w opowiadaniu', right: 'Moment najwyższego napięcia i przełomowe wydarzenie fabuły' },
      { left: 'Argument z przykładem', right: 'Uzasadnienie tezy poparte konkretną sytuacją z lektury obowiązkowej' },
      { left: 'Puenta / zakończenie', right: 'Wniosek końcowy lub refleksja zamykająca wypracowanie' }
    ]
  }
];

// ─────────────── 5. KANON LEKTUR OBOWIĄZKOWYCH CKE – CZĘŚĆ 1: Bohaterowie, fabuła i cytaty ───────────────
export const LEKTURY_CKE_CZESC_1_CHALLENGES = [
  {
    type: 'reading_tf',
    title: 'DETEKTYW LEKTUR CKE • „DZIADY CZ. II” ADAMA MICKIEWICZA',
    theory: {
      title: 'Karta Teorii: Trzy kategorie duchów w „Dziadach cz. II”',
      body: 'Obrzęd dziadów prowadzi Guślarz w kaplicy o północy. Przybywają 3 rodzaje duchów:\n1. DUCHY LEKKIE (Józio i Rózia): dzieci, które nigdy nie zaznały cierpienia. Proszą o dwa ziarnka gorczycy.\n2. DUCH CIĘŻKI (Widmo Złego Pana): okrutny dziedzic, przez którego zamarzła matka z dzieckiem, a sługa został wychłostany za zerwanie jabłek. Ptaki (Kruk i Sowa) wyrywają mu jedzenie.\n3. DUCH POŚREDNI (Pasterka Zosia): piękna dziewczyna, która odrzucała zalotników i żyła w próżności.'
    },
    excerptTitle: 'Adam Mickiewicz, „Dziady cz. II” (fragment)',
    excerptText: '„Słuchajcie i zważcie u siebie, / Że według Bożego rozkazu: / Kto nie doznał goryczy ni razu, / Ten nie dozna słodyczy w niebie.”',
    statements: [
      {
        text: '1. Przytoczone słowa wypowiadają Józio i Rózia (duchy lekkie), prosząc o dwa ziarnka gorczycy.',
        isTrue: true
      },
      {
        text: '2. Słowa te oznaczają, że do zbawienia potrzebna jest pełnia ludzkiego doświadczenia, obejmująca również trud i cierpienie.',
        isTrue: true
      }
    ],
    motifQuestion: {
      prompt: 'Który duch w „Dziadach cz. II” wypowiada przestrogę: „Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże”?',
      options: [
        { text: 'Widmo Złego Pana (duch ciężki)', correct: true },
        { text: 'Pasterka Zosia (duch pośredni)', correct: false },
        { text: 'Guślarz prowadzący obrzęd', correct: false }
      ]
    },
    hint: 'Józio i Rózia mówią o goryczy, a Widmo Złego Pana ostrzega przed nieludzkim okrucieństwem.'
  },
  {
    type: 'reading_tf',
    title: 'DETEKTYW LEKTUR CKE • „BALLADYNA” JULIUSZA SŁOWACKIEGO',
    theory: {
      title: 'Karta Teorii: „Balladyna” – droga od zbrodni do kary',
      body: 'Książę Kirkor trafia do chaty ubogiej Wdowy za radą Pustelnika (zdetronizowanego króla Popiela III). Skrzat Skierka (sługa Goplany) sprawia, że Kirkor zakochuje się jednocześnie w obu siostrach: dobrej Alinie i żądnej władzy Balladynie. W lesie podczas zbierania malin Balladyna zabija Alinę nożem, a na jej czole pojawia się niezatarta krwawa plama. Na końcu dramatu Balladyna jako królowa musi wydać wyrok na mordercę Aliny (czyli na samą siebie) – wtedy zabija ją piorun.'
    },
    excerptTitle: 'Juliusz Słowacki, „Balladyna” (Akt II)',
    excerptText: '„ALINA: Siostro, pełny dzbanek! [...] / BALLADYNA: Daj mi ten dzbanek... / ALINA: Siostro?... / BALLADYNA: Rzuć maliny! / ALINA: Siostro droga! co to znaczy? / Błagam cię... ten nóż...”',
    statements: [
      {
        text: '1. Alina chciała oddać swój dzban malin Balladynie dobrowolnie, gdyby siostra szczerze ją o to poprosiła.',
        isTrue: true
      },
      {
        text: '2. Krwawa plama na czole Balladyny zniknęła natychmiast po umyciu twarzy w jeziorze Gopło.',
        isTrue: false
      }
    ],
    motifQuestion: {
      prompt: 'Co w dramacie „Balladyna” symbolizuje krwawa plama na czole głównej bohaterki?',
      options: [
        { text: 'Niezatarte piętno zbrodni bratobójstwa oraz wyrzuty sumienia, których nie da się ukryć', correct: true },
        { text: 'Dumnie noszone królewskie pochodzenie z pradawnego rodu Popielidów na tronie', correct: false },
        { text: 'Cudowne błogosławieństwo opiekuńczej nimfy wodnej Goplany znad jeziora Gopło', correct: false }
      ]
    },
    hint: 'Plamy na czole Balladyny nie dało się zmyć żadną wodą – to symbol zbrodni (jak znamię Kaina i plama Lady Makbet).'
  },
  {
    type: 'matchup',
    prompt: 'Połącz słynny cytat z lekturą obowiązkową z kanonu egzaminacyjnego:',
    pairs: [
      { left: '„Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie.”', right: '„Dziady cz. II” – Adam Mickiewicz' },
      { left: '„Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.”', right: '„Mały Książę” – A. de Saint-Exupéry' },
      { left: '„Litwo! Ojczyzno moja! ty jesteś jak zdrowie…”', right: '„Pan Tadeusz” – Adam Mickiewicz' },
      { left: '„Polska zwyciężyła! […] Kamienie przez Boga rzucane na szaniec!”', right: '„Kamienie na szaniec” – Aleksander Kamiński' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'W dramacie „Balladyna” Juliusza Słowackiego Wdowa wypowiada słowa, że jej córki pójdą do lasu zbierać owoce. Ten, kto pierwszy zbierze pełny dzban, zostanie żoną księcia Kirkora. O jakie owoce chodziło?',
    options: [
      { text: 'O maliny', correct: true },
      { text: 'O jagody', correct: false },
      { text: 'O poziomki', correct: false },
      { text: 'O jabłka', correct: false }
    ],
    hint: 'Dzban malin oraz krwawa plama na czole Balladyny to główne symbole tego dramatu.'
  },
  {
    type: 'quiz',
    prompt: 'Którego z bohaterów „Kamieni na szaniec” Aleksandra Kamińskiego przyjaciele odbili z rąk Gestapo podczas słynnej Akcji pod Arsenałem?',
    options: [
      { text: 'Jana Bytnara „Rudego”', correct: true },
      { text: 'Tadeusza Zawadzkiego „Zośkę”', correct: false },
      { text: 'Macieja Aleksego Dawidowskiego „Alka”', correct: false },
      { text: 'Jacka Soplicę', correct: false }
    ],
    hint: 'Akcja pod Arsenałem (26 marca 1943 r.) miała na celu uwolnienie katowanego w śledztwie „Rudego”.'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj duchy z „Dziadów cz. II” Adama Mickiewicza do ich winy oraz przestrogi moralnej:',
    pairs: [
      { left: 'Józio i Rózia (duchy lekkie)', right: 'Żyli bez cierpienia i trosk – proszą o dwa ziarnka gorczycy' },
      { left: 'Widmo Złego Pana (duch ciężki)', right: 'Był okrutny dla poddanych – szarpany przez kruki i sowy' },
      { left: 'Pasterka Zosia (duch pośredni)', right: 'Igrała z uczuciami zalotników, żyła w próżności między ziemią a niebem' },
      { left: 'Guślarz', right: 'Przewodzi obrzędowi dziadów w kaplicy o północy' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'W „Opowieści wigilijnej” Charlesa Dickensa Ebenezer Scrooge przechodzi głęboką przemianę wewnętrzną. Kto przychodzi do niego jako pierwszy, ostrzegając go przed czterema duchami?',
    options: [
      { text: 'Duch jego zmarłego wspólnika, Jakuba Marleya, skuty łańcuchem z kasetek', correct: true },
      { text: 'Jego skromny kancelista Bob Cratchit z chorym synkiem Małym Timem u boku', correct: false },
      { text: 'Uśmiechnięty siostrzeniec Fred serdecznie zapraszający go na obiad w święta', correct: false },
      { text: 'Mroczny Duch Przyszłych Wigilii milcząco wskazujący zarośnięty nagrobek', correct: false }
    ],
    hint: 'Jakub Marley nosi łańcuch, który sam wykuł za życia przez chciwość i obojętność na bliźnich.'
  },
  {
    type: 'quiz',
    prompt: 'Jaką tajemnicę ukrywa skromny bernardyn Ksiądz Robak w epopei „Pan Tadeusz” Adama Mickiewicza?',
    options: [
      { text: 'To Jacek Soplica, ojciec Tadeusza, który odkupuje dawne winy służbą dla ojczyzny', correct: true },
      { text: 'To wierny i mściwy dawny klucznik rodu Horeszków, szlachcic Gerwazy Rębajło', correct: false },
      { text: 'To podstępny rosyjski oficer major Płut ukrywający się w przebraniu mnicha', correct: false },
      { text: 'To rodzony brat pięknej Telimeny przybyły niedawno wprost z Petersburga', correct: false }
    ],
    hint: 'Jacek Soplica przyjął imię „Robak” na znak pokory i przemiany z dumnego szlachcica w pokutnika i emisariusza.'
  }
];

// ─────────────── 6. KANON LEKTUR OBOWIĄZKOWYCH CKE – CZĘŚĆ 2: Motywy, symbole, plakaty i czytanie ze zrozumieniem ───────────────
export const LEKTURY_CKE_CZESC_2_CHALLENGES = [
  {
    type: 'reading_tf',
    title: 'DETEKTYW LEKTUR CKE • „PAN TADEUSZ” (PRZEMIANA JACKA SOPLICY)',
    theory: {
      title: 'Karta Teorii: Bohater dynamiczny – Jacek Soplica (Ksiądz Robak) i Ebenezer Scrooge',
      body: 'Bohater dynamiczny to postać, która zmienia swoje postępowanie w trakcie utworu:\n• Jacek Soplica („Pan Tadeusz”): w młodości porywczy warchoł i zabójca Stolnika Horeszki → przywdziewa habit bernardyna jako Ksiądz Robak, zostaje tajnym emisariuszem, ratuje życie Gerwazemu i Tadeusza, a po śmierci zostaje zrehabilitowany.\n• Ebenezer Scrooge („Opowieść wigilijna”): bezduszny skąpiec → po wizycie Marleya i trzech Duchów Wigilijnych staje się hojnym i troskliwym człowiekiem.'
    },
    excerptTitle: 'Adam Mickiewicz, „Pan Tadeusz” (Księga X – Spowiedź Jacka Soplicy)',
    excerptText: '„Ja to strzeliłem wówczas do Stolnika! [...] / Odtąd jakżem cierpiał! / Przyjąłem habit mnicha, a imię Robaka, / Bo jak robak w prochu czołgałem się cicho, / Pracując dla Ojczyzny i spłacając pychę.”',
    statements: [
      {
        text: '1. Jacek Soplica wyznaje swoje winy przed śmiercią Gerwazemu (dawnemu słudze Horeszków) i otrzymuje od niego znak przebaczenia.',
        isTrue: true
      },
      {
        text: '2. Jacek Soplica przyjął przydomek „Robak”, ponieważ chciał obnosić się ze swoją dumą szlachecką i bogactwem.',
        isTrue: false
      }
    ],
    motifQuestion: {
      prompt: 'Z jakim bohaterem z innej lektury obowiązkowej najlepiej zestawić Jacka Soplicę w rozprawce o MOTYWIE WINY I ODKUPIENIA (PRZEMIANY)?',
      options: [
        { text: 'Z Ebenezerem Scrooge’em z „Opowieści wigilijnej” Charlesa Dickensa', correct: true },
        { text: 'Z władczym Królem z pierwszej odwiedzonej planety w „Małym Księciu”', correct: false },
        { text: 'Z psotnymi leśnymi duszkami Skierką i Chochlikiem z „Balladyny”', correct: false }
      ]
    },
    hint: 'Zarówno Jacek Soplica, jak i Ebenezer Scrooge przechodzą głęboką przemianę moralną i naprawiają swoje błędy.'
  },
  {
    type: 'reading_tf',
    title: 'DETEKTYW LEKTUR CKE • „KAMIENIE NA SZANIEC” (PATRIOTYZM I BRATERSTWO)',
    theory: {
      title: 'Karta Teorii: Rudy, Alek i Zośka – „życie jak kamienie rzucane na szaniec”',
      body: 'Trzej harcerze Szarych Szeregów z warszawskiej drużyny „Buki”:\n• Jan Bytnar „Rudy” – rudowłosy intelektualista, mistrz Małego Sabotażu (rysował żółwie i kotwice Polski Walczącej), odbity w Akcji pod Arsenałem, zmarł z powodu ran zadanych przez Gestapo.\n• Maciej Aleksy Dawidowski „Alek” – wysoki, zawsze uśmiechnięty optymista („Dryblas”), zdjął niemiecką tablicę z pomnika Kopernika, został śmiertelnie ranny podczas Akcji pod Arsenałem (zmarł tego samego dnia co Rudy).\n• Tadeusz Zawadzki „Zośka” – urodzony przywódca o delikatnej urodzie, dowodził grupą „Atak” pod Arsenałem, zginął w akcji pod Sieczychami.'
    },
    excerptTitle: 'Aleksander Kamiński, „Kamienie na szaniec”',
    excerptText: '„Rudy ścisnął dłoń Zośki i wyszeptał słowa wiersza Juliusza Słowackiego: »Lecz zaklinam – niech żywi nie tracą nadziei... A kiedy trzeba, na śmierć idą po kolei, jak kamienie przez Boga rzucane na szaniec!«”',
    statements: [
      {
        text: '1. Tytuł książki „Kamienie na szaniec” pochodzi z wiersza „Testament mój” Juliusza Słowackiego.',
        isTrue: true
      },
      {
        text: '2. Bohaterowie książki zajmowali się wyłącznie walką zbrojną, całkowicie rezygnując z nauki i samokształcenia.',
        isTrue: false
      }
    ],
    motifQuestion: {
      prompt: 'Co w „Kamieniach na szaniec” oznaczał rysowany przez harcerzy na murach symbol ŻÓŁWIA?',
      options: [
        { text: 'Wezwanie Polaków do powolnej pracy w zakładach kontrolowanych przez niemieckiego okupanta', correct: true },
        { text: 'Zabawną reklamę znanego przedwojennego ogrodu zoologicznego na warszawskiej Pradze', correct: false },
        { text: 'Oficjalny wojskowy rozkaz natychmiastowej ewakuacji i ucieczki ludności z miasta', correct: false }
      ]
    },
    hint: 'Rysunek żółwia w ramach Małego Sabotażu oznaczał hasło: „Pracuj powoli!” dla dobra ruchu oporu.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz rekwizyt lub symbol (częste zadanie z plakatem na egzaminie CKE!) z lekturą i jego znaczeniem:',
    pairs: [
      { left: 'Krwawa plama na czole i dzban malin', right: '„Balladyna” – symbol niezatartej zbrodni, winy i sumienia' },
      { left: 'Róża pod kloszem i oswojony Lis', right: '„Mały Książę” – symbol miłości, przyjaźni i odpowiedzialności' },
      { left: 'Ciężki łańcuch z kasetek i ksiąg rachunkowych', right: '„Opowieść wigilijna” – symbol chciwości i egoizmu skąpca' },
      { left: 'Rysunek żółwia na murze i kotwica Polski Walczącej', right: '„Kamienie na szaniec” – symbol Małego Sabotażu i oporu' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Przypisz parę bohaterów i sytuację do odpowiedniego MOTYWU LITERACKIEGO na rozprawkę:',
    categories: ['MOTYW PRZEMIANY WEWNĘTRZNEJ', 'MOTYW PRZYJAŹNI I BRATERSTWA'],
    items: [
      { text: 'Ebenezer Scrooge w „Opowieści wigilijnej” (ze skąpca w człowieka hojnego i wrażliwego)', category: 'MOTYW PRZEMIANY WEWNĘTRZNEJ' },
      { text: 'Jacek Soplica → Ksiądz Robak w „Panu Tadeuszu” (od warchoła do cichego bohatera narodowego)', category: 'MOTYW PRZEMIANY WEWNĘTRZNEJ' },
      { text: 'Rudy, Alek i Zośka w „Kamieniach na szaniec” (gotowość oddania życia za przyjaciela)', category: 'MOTYW PRZYJAŹNI I BRATERSTWA' },
      { text: 'Mały Książę i Lis (oswajanie, budowanie więzi i wzajemnej odpowiedzialności)', category: 'MOTYW PRZYJAŹNI I BRATERSTWA' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Zadanie z plakatem teatralnym (typ CKE): Na plakacie spektaklu widnieje złota korona, z której zamiast klejnotów skapują czerwone maliny, a w tle przecina niebo błyskawica. Do której lektury nawiązuje ten plakat?',
    options: [
      { text: 'Do „Balladyny” Juliusza Słowackiego – korona oznacza żądzę władzy, maliny zbrodnię na Alinie, a błyskawica sprawiedliwą karę', correct: true },
      { text: 'Do „Pana Tadeusza” Adama Mickiewicza – złota korona królewska, gwałtowna burza w Soplicowie i leśne grzybobranie szlachty', correct: false },
      { text: 'Do „Małego Księcia” Antoine de Saint-Exupéry’ego – pyszna korona Króla na małej asteroidzie oraz zerwane róże na pustyni', correct: false },
      { text: 'Do „Dziadów cz. II” Adama Mickiewicza – lekki wianek pasterki Zosi, uciekający baranek oraz chleb i ziarna dla ptaków nocy', correct: false }
    ],
    hint: 'Trzy elementy graficzne: korona (władza) + maliny (bratobójstwo) + piorun (wyrok losu) = „Balladyna”.'
  },
  {
    type: 'quiz',
    prompt: 'Która para lektur najlepiej pasuje do udowodnienia tezy w rozprawce: „Każda wina i zło wyrządzone drugiemu człowiekowi prędzej czy później spotykają się z karą”?',
    options: [
      { text: '„Balladyna” Juliusza Słowackiego oraz „Dziady cz. II” Adama Mickiewicza (Widmo Złego Pana)', correct: true },
      { text: '„Mały Książę” Antoine de Saint-Exupéry’ego oraz „Akademia Pana Kleksa” Jana Brzechwy', correct: false },
      { text: '„Kamienie na szaniec” Aleksandra Kamińskiego oraz nowela „Latarnik” Henryka Sienkiewicza', correct: false },
      { text: 'Komiks „Kajko i Kokosz” Janusza Christy oraz powieść „Chłopcy z Placu Broni” Ferenca Molnára', correct: false }
    ],
    hint: 'Zarówno w „Balladynie”, jak i w „Dziadach cz. II” główną osią moralną jest nieuchronność kary za zbrodnię i brak ludzkich uczuć.'
  }
];

// Pełny pakiet prezentujący wszystkie 7 nowych minigier + karty teorii
export const NEW_MINIGAMES_SHOWCASE_CHALLENGES = [
  ...FLEKSJA_I_MAGNESY_CHALLENGES,
  ...ALGORYTM_ZDANIA_CHALLENGES,
  ...SWIPE_FAKT_OPINIA_CHALLENGES,
  FORMY_WYPOWIEDZI_KL4_CHALLENGES[0],
  FORMY_EGZAMINACYJNE_KL8_CHALLENGES[0],
  LEKTURY_CKE_CZESC_1_CHALLENGES[0],
  LEKTURY_CKE_CZESC_2_CHALLENGES[0]
];
