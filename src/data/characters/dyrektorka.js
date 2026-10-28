// Dyrektorka – Boss: 70 HP, bije 5 | Zwykła: 35 HP, bije 3
// Egzamin z języka oficjalnego i form użytkowych (Klasy 6–8 CKE):
// struktura podania, petycja, sprawozdanie, protokół,
// etykieta korespondencji urzędowej (savoir-vivre), regulamin szkolny i styl kancelaryjny.

export const DYREKTORKA_CHALLENGES = [
  {
    type: 'quiz',
    title: 'PISMA UŻYTKOWE • STRUKTURA PODANIA',
    prompt: 'Który zwrot stanowi wzorcową, oficjalną formułę rozpoczynającą treść właściwą podania do dyrekcji szkoły?',
    options: [
      { text: '„Zwracam się z uprzejmą prośbą o wydanie duplikatu legitymacji szkolnej...”', correct: true },
      { text: '„Chciałbym poinformować, że zgubiłem legitymację i proszę o nową...”', correct: false },
      { text: '„Piszę to pismo, bo muszę mieć nową legitymację na jutro...”', correct: false },
      { text: '„Dzień dobry, proszę natychmiast wyrobić mi dokument...”', correct: false }
    ],
    hint: 'W podaniu stosuje się utrwaloną formułę kancelaryjną: «Zwracam się z uprzejmą prośbą o...».'
  },
  {
    type: 'matchup',
    title: 'KORESPONDENCJA FORMALNA • ELEMENTY PODANIA',
    prompt: 'Dopasuj element podania do jego wymaganego położenia na arkuszu formatu A4:',
    pairs: [
      { left: 'Miejscowość i data', right: 'Prawy górny róg arkusza (np. Warszawa, 15 października 2024 r.)' },
      { left: 'Dane wnioskodawcy (ucznia)', right: 'Lewy górny róg (imię, nazwisko, klasa, adres)' },
      { left: 'Dane adresata z pełnym tytułem', right: 'Prawa strona poniżej daty (np. Szanowna Dyrekcja...)' },
      { left: 'Podpis wnioskodawcy', right: 'Prawa strona na samym dole pod uzasadnieniem prośby' }
    ]
  },
  {
    type: 'sorting',
    title: 'ETYKIETA E-MAIL • FORMALNE A NIEFORMALNE',
    prompt: 'Rozdziel formy powitań i zwrotów do oficjalnego e-maila szkolnego od korespondencji prywatnej:',
    categories: ['OFICJALNY E-MAIL DO DYREKTORA / NAUCZYCIELA', 'NIEFORMALNA WIADOMOŚĆ DO KOLEGI Z ŁAWKI'],
    items: [
      { text: 'Szanowna Pani Dyrektor, / Z poważaniem', category: 'OFICJALNY E-MAIL DO DYREKTORA / NAUCZYCIELA' },
      { text: 'Siemanko, co tam na sprawdzianie? / Nara!', category: 'NIEFORMALNA WIADOMOŚĆ DO KOLEGI Z ŁAWKI' },
      { text: 'Zwracam się z zapytaniem o termin egzaminu poprawkowego...', category: 'OFICJALNY E-MAIL DO DYREKTORA / NAUCZYCIELA' },
      { text: 'Elo ziom, pożycz zeszyt na jutro!', category: 'NIEFORMALNA WIADOMOŚĆ DO KOLEGI Z ŁAWKI' }
    ]
  },
  {
    type: 'quiz',
    title: 'SAVOIR-VIVRE JĘZYKOWY • BŁĘDNE POWITANIE',
    prompt: 'Dlaczego według reguł polskiej grzeczności językowej NIE należy rozpoczynać oficjalnego e-maila do dyrektora słowem „Witam!”?',
    options: [
      { text: 'Słowo «Witam» stawia nadawcę w pozycji gospodarza przyjmującego gości i narusza hierarchię urzędową.', correct: true },
      { text: 'Słowo «Witam» jest ordynarnym wulgaryzmem całkowicie zakazanym we wszystkich słownikach języka polskiego.', correct: false },
      { text: 'Ponieważ w oficjalnej korespondencji wolno stosować wyłącznie formuły powitalne w języku angielskim.', correct: false },
      { text: 'Bo słowo «Witam» według zasad ortografii wolno zapisać wyłącznie małą literą bez żadnego wykrzyknika.', correct: false }
    ],
    hint: 'Gospodarz wita gości w swoim domu – uczeń do dyrektora pisze: «Szanowna Pani Dyrektor» lub «Dzień dobry».'
  },
  {
    type: 'matchup',
    title: 'GATUNKI UŻYTKOWE • DEFINICJE',
    prompt: 'Połącz nazwę pisma użytkowego z jego przeznaczeniem:',
    pairs: [
      { left: 'Protokół', right: 'Oficjalny dokument relacjonujący dokładny przebieg zebrania i podjęte uchwały' },
      { left: 'Sprawozdanie', right: 'Opis zorganizowanego wydarzenia szkolnego (np. wycieczki, akademii, turnieju)' },
      { left: 'Petycja', right: 'Zbiorowy wniosek obywateli lub uczniów skierowany do władz w ważnej sprawie publicznej' },
      { left: 'Regulamin', right: 'Zbiór przepisów i norm postępowania obowiązujących w danej instytucji' }
    ]
  },
  {
    type: 'sorting',
    title: 'REGULAMIN SZKOŁY • PRAWA A OBOWIĄZKI UCZNIA',
    prompt: 'Przypisz punkty statutu szkolnego do kategorii praw lub obowiązków ucznia:',
    categories: ['PRAWA UCZNIA W SZKOLE', 'OBOWIĄZKI UCZNIA W SZKOLE'],
    items: [
      { text: 'Prawo do znajomości kryteriów oceniania i jawności ocen', category: 'PRAWA UCZNIA W SZKOLE' },
      { text: 'Obowiązek punktualnego i systematycznego przychodzenia na lekcje', category: 'OBOWIĄZKI UCZNIA W SZKOLE' },
      { text: 'Prawo do odpoczynku w czasie ferii bez zadawania prac domowych', category: 'PRAWA UCZNIA W SZKOLE' },
      { text: 'Obowiązek dbania o mienie szkoły i przestrzegania zasad bezpieczeństwa', category: 'OBOWIĄZKI UCZNIA W SZKOLE' }
    ]
  },
  {
    type: 'quiz',
    title: 'ORTOGRAFIA I WIELKA LITERA • ZAIMKI GRZECZNOŚCIOWE',
    prompt: 'Wskaż zdanie, w którym poprawnie zastosowano wielką literę ze względów grzecznościowych w oficjalnym liście:',
    options: [
      { text: 'Będę niezwykle wdzięczny, jeśli zechce Pani rozpatrzyć mój wniosek pozytywnie.', correct: true },
      { text: 'Będę niezwykle wdzięczny, jeśli zechce pani rozpatrzyć mój wniosek pozytywnie.', correct: false },
      { text: 'Będę niezwykle wdzięczny, Jeśli zechce PANI rozpatrzyć Mój wniosek.', correct: false },
      { text: 'Będę Niezwykle Wdzięczny, jeśli Zechce pani Rozpatrzyć wniosek.', correct: false }
    ],
    hint: 'Zaimki odnoszące się do adresata (Pani, Panu, Państwu, Cię, Twój) piszemy w listach wielką literą.'
  },
  {
    type: 'quiz',
    title: 'STYL URZĘDOWY • PRECYZJA SŁOWNICTWA',
    prompt: 'Wskaż zdanie reprezentujące wzorcowy styl urzędowo-kancelaryjny wolny od potoczności:',
    options: [
      { text: 'W załączeniu przedkładam wymagane zaświadczenie lekarskie potwierdzające powrót do zdrowia.', correct: true },
      { text: 'Dorzucam do papierów szkolnych kwit od lekarza, że choroba już mi minęła i mogę normalnie biegać.', correct: false },
      { text: 'Załączam podarty papierek od doktora, bo pani w sekretariacie szkoły koniecznie kazała przynieść.', correct: false },
      { text: 'Mam tu zwolnienie z lekcji, proszę natychmiast wpisać w dziennik i nie stawiać mi nieobecności.', correct: false }
    ],
    hint: 'Zwrot kancelaryjny: «W załączeniu przedkładam zaświadczenie...».'
  },
  {
    type: 'matchup',
    title: 'FORMY UŻYTKOWE CKE • ELEMENTY KLUCZOWE',
    prompt: 'Dopasuj formę wypowiedzi do jej nieodzownego elementu konstrukcyjnego:',
    pairs: [
      { left: 'Zaproszenie', right: 'Kto zaprasza, kogo, na co, kiedy (dokładna data i godzina) oraz gdzie (miejsce)' },
      { left: 'Ogłoszenie', right: 'Co się wydarzyło lub zgubiło, data i miejsce zdarzenia oraz kontakt do ogłoszeniodawcy' },
      { left: 'Dedykacja', right: 'Dla kogo, z jakiej okazji, ciepła myśl lub życzenia, podpis ofiarodawcy i data' },
      { left: 'Podziękowanie', right: 'Wyrażenie wdzięczności konkretnej osobie za określony czyn lub wsparcie' }
    ]
  },
  {
    type: 'sorting',
    title: 'OGŁOSZENIE SZKOLNE • 5 ZŁOTYCH PYTAŃ',
    prompt: 'Przypisz elementy ogłoszenia do kategorii faktów głównych lub danych kontaktowych:',
    categories: ['FAKTY GŁÓWNE (KTO, CO, KIEDY, GDZIE)', 'DANE KONTAKTOWE I NAGRODA'],
    items: [
      { text: 'W auli szkolnej w piątek 12 maja o godz. 10:00', category: 'FAKTY GŁÓWNE (KTO, CO, KIEDY, GDZIE)' },
      { text: 'Osoby zainteresowane proszone są o kontakt pod nr tel. 500-100-200', category: 'DANE KONTAKTOWE I NAGRODA' },
      { text: 'Odbędzie się kiermasz książek używanych Samorządu', category: 'FAKTY GŁÓWNE (KTO, CO, KIEDY, GDZIE)' },
      { text: 'Dla znalazcy zgubionego piórnika przewidziano skromną nagrodę', category: 'DANE KONTAKTOWE I NAGRODA' }
    ]
  },
  {
    type: 'quiz',
    title: 'PRAWO AUTORSKIE • PLAGIAT I CYTAT',
    prompt: 'Jak uczeń powinien postąpić, aby wykorzystać fragment cudzego tekstu w swoim referacie bez popełnienia plagiatu?',
    options: [
      { text: 'Ująć dosłowny cytat w cudzysłów i podać pełne źródło (autora, tytuł dzieła, stronę lub link)', correct: true },
      { text: 'Zmienić w skopiowanym zdaniu dwa wyrazy na synonimy i podpisać cały tekst własnym imieniem', correct: false },
      { text: 'Skopiować cały akapit z internetowej Wikipedii zupełnie bez podawania jakiegokolwiek adresu', correct: false },
      { text: 'Poprosić kolegę z ławki o szybkie przepisanie cudzego tekstu odręcznie do swojego zeszytu', correct: false }
    ],
    hint: 'Cytowanie wymaga cudzysłowu i precyzyjnego podania autora oraz źródła publikacji.'
  },
  {
    type: 'matchup',
    title: 'ORGANY SZKOŁY • KOMPETENCJE USTAWOWE',
    prompt: 'Połącz organ szkoły z jego głównym zadaniem określonym w prawie oświatowym:',
    pairs: [
      { left: 'Dyrektor szkoły', right: 'Kieruje bieżącą działalnością placówki i reprezentuje ją na zewnątrz' },
      { left: 'Rada Pedagogiczna', right: 'Zatwierdza wyniki klasyfikacji uczniów i uchwala statut szkoły' },
      { left: 'Rada Rodziców', right: 'Reprezentuje ogół rodziców i uchwala program wychowawczo-profilaktyczny' },
      { left: 'Samorząd Uczniowski', right: 'Reprezentuje interesy wszystkich uczniów wobec nauczycieli i dyrekcji' }
    ]
  },
  {
    type: 'sorting',
    title: 'DOKUMENTACJA SZKOLNA • TYPY PISM',
    prompt: 'Przypisz dokumenty do pism o charakterze sprawozdawczym lub normatywnym:',
    categories: ['PISMA SPRAWOZDAWCZE', 'PISMA NORMATYWNE (ZASADY)'],
    items: [
      { text: 'Protokół z zebrania komisji egzaminacyjnej', category: 'PISMA SPRAWOZDAWCZE' },
      { text: 'Statut Szkoły określający prawa i obowiązki', category: 'PISMA NORMATYWNE (ZASADY)' },
      { text: 'Sprawozdanie dyrektora z realizacji budżetu', category: 'PISMA SPRAWOZDAWCZE' },
      { text: 'Regulamin korzystania ze szkolnej pracowni komputerowej', category: 'PISMA NORMATYWNE (ZASADY)' }
    ]
  },
  {
    type: 'quiz',
    title: 'KORESPONDENCJA • PODANIE O PRZEŁOŻENIE SPRAWDZIANU',
    prompt: 'Która formuła uzasadnienia w podaniu Samorządu Uczniowskiego do Pani Dyrektor brzmi najbardziej rzeczowo i kulturalnie?',
    options: [
      { text: '«Prośbę naszą motywujemy faktem, iż w tym samym dniu wyznaczono już dwa inne sprawdziany pisemne»', correct: true },
      { text: '«Nie zamierzamy pisać tego sprawdzianu, ponieważ nikomu z naszej klasy nie chciało się wczoraj uczyć»', correct: false },
      { text: '«Nauczyciel ewidentnie się na nas uwziął, więc kategorycznie żądamy anulowania dzisiejszej kartkówki»', correct: false },
      { text: '«Uprzejmie proszę przełożyć sprawdzian z chemii, bo w piątek mamy wspólne plany na wyjście na pizzę»', correct: false }
    ],
    hint: 'Uzasadnienie podania musi odwoływać się do obiektywnych faktów (np. limitu sprawdzianów w statucie).'
  },
  {
    type: 'matchup',
    title: 'ZWROTY GRZECZNOŚCIOWE W DOKUMENTACH',
    prompt: 'Dopasuj zwrot grzecznościowy do odpowiedniego miejsca w piśmie urzędowym:',
    pairs: [
      { left: 'Szanowna Pani Dyrektor,', right: 'Nagłówek rozpoczynający oficjalne pismo do dyrekcji' },
      { left: 'Z wyrazami szacunku,', right: 'Formuła kończąca list oficjalny, umieszczana przed podpisem' },
      { left: 'W załączeniu przedkładam...', right: 'Zwrot informujący o dołączonych dokumentach i dowodach' },
      { left: 'Zwracam się z uprzejmą prośbą o...', right: 'Kanon formułowania intencji w pierwszym akapicie podania' }
    ]
  },
  {
    type: 'sorting',
    title: 'PROCEDURY SZKOLNE • BEZPIECZEŃSTWO',
    prompt: 'Przypisz zachowania podczas alarmu ewakuacyjnego do prawidłowych lub zakazanych:',
    categories: ['ZACHOWANIA WZOROWE I NAKAZANE', 'ZACHOWANIA SKRAJNIE NIEBEZPIECZNE (ZAKAZANE)'],
    items: [
      { text: 'Spokojne opuszczenie sali pod opieką nauczyciela bez paniki', category: 'ZACHOWANIA WZOROWE I NAKAZANE' },
      { text: 'Korzystanie z windy w trakcie pożaru lub alarmu dymowego', category: 'ZACHOWANIA SKRAJNIE NIEBEZPIECZNE (ZAKAZANE)' },
      { text: 'Zbiórka na wyznaczonym placu apelowym w celu sprawdzenia obecności', category: 'ZACHOWANIA WZOROWE I NAKAZANE' },
      { text: 'Samowolne wracanie do szatni po plecak lub telefon komórkowy', category: 'ZACHOWANIA SKRAJNIE NIEBEZPIECZNE (ZAKAZANE)' }
    ]
  },
  {
    type: 'quiz',
    title: 'DYSKUSJA I DEBATA • ZASADY KULTURY SŁOWA',
    prompt: 'Jaka zasada obowiązuje uczestnika kulturalnej dyskusji podczas zebrania Samorządu Uczniowskiego?',
    options: [
      { text: 'Odnoszenie się do argumentów merytorycznych rozmówcy bez atakowania jego osoby (argumentum ad rem)', correct: true },
      { text: 'Głośne przekrzykiwanie innych mówców i złośliwe atakowanie ich cech (argumentum ad personam)', correct: false },
      { text: 'Bezczelne przerywanie oficjalnej wypowiedzi dyrekcji szkoły w połowie ważnego zdania na apelu', correct: false },
      { text: 'Wychodzenie ze szkolnej auli demonstracyjnie trzaskając drzwiami, gdy ktoś ma odmienne zdanie', correct: false }
    ],
    hint: 'Kultura debaty polega na zwalczaniu argumentów przeciwnika (ad rem), a nie obrażaniu człowieka (ad personam).'
  },
  {
    type: 'matchup',
    title: 'STRUKTURA CV (ŻYCIORYSU ZAWODOWEGO)',
    prompt: 'Połącz sekcję życiorysu z zawartymi w niej informacjami:',
    pairs: [
      { left: 'Dane personalne i kontaktowe', right: 'Imię, nazwisko, numer telefonu, adres e-mail i miejscowość zamieszkania' },
      { left: 'Wykształcenie', right: 'Ukończone szkoły w układzie odwróconej chronologii (od najnowszej)' },
      { left: 'Umiejętności', right: 'Znajomość języków obcych, obsługa oprogramowania i prawo jazdy' },
      { left: 'Klauzula zgody RODO', right: 'Prawna zgoda na przetwarzanie danych osobowych do celów rekrutacji' }
    ]
  },
  {
    type: 'quiz',
    title: 'SEKRETARIAT • OBIEG DOKUMENTÓW',
    prompt: 'Jaki dowód powinien otrzymać uczeń lub rodzic składający ważne pismo urzędowe w sekretariacie szkoły?',
    options: [
      { text: 'Pieczątkę wpływu z datą dzienną i podpisem sekretarza na kopii pisma (potwierdzenie odbioru)', correct: true },
      { text: 'Niejasną słowną obietnicę, że pan dyrektor przeczyta pismo w wolnej chwili w gabinecie', correct: false },
      { text: 'Zapisany na skrawku kartki prywatny numer telefonu komórkowego do woźnego szkolnego szkoły', correct: false },
      { text: 'Żadnego urzędowego dowodu, gdyż sekretariat w ogóle nie ewidencjonuje pism wpływających', correct: false }
    ],
    hint: 'Pieczęć wpływu z datą na kopii stanowi jedyny prawny dowód terminowego złożenia wniosku.'
  },
  {
    type: 'matchup',
    title: 'TERMINY I PROCEDURY ADMINISTRACYJNE',
    prompt: 'Dopasuj procedurę Kodeksu Postępowania Administracyjnego do terminu jej realizacji:',
    pairs: [
      { left: 'Sprawa załatwiana niezwłocznie', right: 'Wydanie zaświadczenia na podstawie dostępnej dokumentacji szkolnej' },
      { left: 'Termin miesięczny (30 dni)', right: 'Maksymalny czas na rozpatrzenie skomplikowanego podania lub wniosku' },
      { left: 'Termin odwoławczy (14 dni)', right: 'Czas na wniesienie odwołania od decyzji dyrektora do kuratora oświaty' },
      { left: 'Termin 7 dni', right: 'Czas na uzupełnienie braków formalnych podania po wezwaniu sekretariatu' }
    ]
  }
];

export const DYREKTORKA_ENCOUNTER = {
  type: 'dyrektorka_office',
  titlePl: 'Pani Dyrektor (70 HP)',
  subtitlePl: 'BOSS: GABINET DYREKTORA SZKOŁY',
  icon: './assets/Postacie/dyrektorka.png',
  fallbackAvatar: './assets/Postacie/Nauczycielka.png',
  enemyName: 'dyrektorka',
  enemyMaxHp: 70,
  enemyDamage: 5,
  descriptionPl: 'Pani Dyrektor wymaga najwyższej kultury słowa, etykiety urzędowej oraz nienagannej znajomości pism formalnych i regulaminu! Każdy nietakt to 5 obrażeń!',
  challenges: DYREKTORKA_CHALLENGES
};
