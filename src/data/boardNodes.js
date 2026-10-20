// Węzły i krawędzie plansz (Plansze 1-7, Miasto 1-3 + Boss, Moduły 3-5)

// Definicja 5 węzłów na pierwszej planszy Szatni (w stylu Dicey Dungeons)
export const INITIAL_BOARD_NODES = [
  {
    id: 'node_1',
    x: 18,
    y: 46,
    type: 'chest',
    titlePl: 'Skrzynia Slangów',
    icon: './assets/skrzynka.png',
    completed: false,
    descriptionPl: 'Otwórz skrzynkę i wysłuchaj wymowy słów, aby zapisać je w Księdze Słów!'
  },
  {
    id: 'node_2',
    x: 34,
    y: 59,
    type: 'start',
    titlePl: 'Start',
    icon: null,
    completed: true,
    descriptionPl: 'Tutaj zaczyna Tan! Kliknij sąsiednie pole, aby przejść.'
  },
  {
    id: 'node_3',
    x: 52,
    y: 44,
    type: 'cat_matching',
    titlePl: 'Kotek Pomocnik',
    subtitlePl: 'Matching Pairs: Dopasuj pary',
    actionLabel: 'ĆWICZ (A)',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['node_4', 'node_5'],
    descriptionPl: 'Ćwicz z Kotkiem w formie Matching Pairs — odkrywaj po 2 kafelki, aby znaleźć pary!'
  },
  {
    id: 'node_4',
    x: 64,
    y: 66,
    type: 'apple',
    titlePl: 'Drugie Śniadanie',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Soczyste jabłko! Dodaje +8 punktów pewności siebie (HP).'
  },
  {
    id: 'node_5',
    x: 81,
    y: 51,
    type: 'next_board',
    titlePl: 'Pójdź dalej',
    actionLabel: 'PÓJDŹ DALEJ ➡',
    icon: './assets/schody.png',
    completed: false,
    descriptionPl: 'Pójdź dalej — przejdź i zresetuj planszę!'
  }
];

export const BOARD_EDGES = [
  ['node_1', 'node_2'],
  ['node_2', 'node_3'],
  ['node_3', 'node_4'],
  ['node_3', 'node_5'],
  ['node_4', 'node_5']
];

// ==================== PLANSZA 2: KORYTARZ – MIJANKA Z OLKIEM ====================
export const BOARD_2_NODES = [
  {
    id: 'b2_node_1',
    x: 18,
    y: 51,
    type: 'cat_anagram',
    titlePl: 'Kot Bolo (Odprawa)',
    subtitlePl: 'Anagram: Ułóż słowa z liter',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['b2_node_2'],
    descriptionPl: 'Krótka rozgrzewka z Kotem Bolo (Anagram) — przeciągnij litery na właściwe miejsca!'
  },
  {
    id: 'b2_node_2',
    x: 38,
    y: 40,
    type: 'olek_quiz_1',
    titlePl: 'Mijanka (Olek)',
    subtitlePl: 'Quiz: Spotkanie 1 (5 HP)',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b2_node_3', 'b2_node_4'],
    descriptionPl: 'Pierwszy kontakt z Gejmerem Olkiem w marszu! Olek rzuca „Elo!” — odpowiedz mu!'
  },
  {
    id: 'b2_node_3',
    x: 52,
    y: 65,
    type: 'apple',
    titlePl: 'Przekąska',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Regeneracja zdrowia (+8 HP) po pierwszym stresie związanym z odpowiedzią koledze!'
  },
  {
    id: 'b2_node_4',
    x: 66,
    y: 42,
    type: 'olek_quiz_2',
    titlePl: 'Dzwonek szkolny (Olek)',
    subtitlePl: 'Quiz: Spotkanie 2 (10 HP)',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b2_node_5'],
    descriptionPl: 'Zaczepka w biegu! Olek pyta „Co tam?”, a po dzwonku rzuca „Dobra, nara!”.'
  },
  {
    id: 'b2_node_5',
    x: 82,
    y: 53,
    type: 'next_board',
    titlePl: 'Schody na Piętro 3',
    actionLabel: 'PIĘTRO 3 🚪',
    icon: './assets/schody.png',
    completed: false,
    descriptionPl: 'Schody na Piętro 3 🚪 — odblokowane po zaliczeniu obu mijanek z Olkiem!'
  }
];

export const BOARD_2_EDGES = [
  ['b2_node_1', 'b2_node_2'],
  ['b2_node_2', 'b2_node_3'],
  ['b2_node_2', 'b2_node_4'],
  ['b2_node_3', 'b2_node_4'],
  ['b2_node_4', 'b2_node_5']
];

// Układ 6 pól dla Planszy 3
export const BOARD_3_NODES = [
  {
    id: 'b3_node_1',
    x: 13,
    y: 53,
    type: 'start',
    titlePl: 'Start (Piętro 3)',
    icon: null,
    completed: true,
    descriptionPl: 'Punkt startowy po wejściu po schodach z Piętra 2!'
  },
  {
    id: 'b3_node_2',
    x: 29,
    y: 42,
    type: 'cat_wheel',
    titlePl: 'Kotek Pomocnik',
    subtitlePl: 'Spin the Wheel: Nowe słowa',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['b3_node_3', 'b3_node_4'],
    descriptionPl: 'Zakręć kołem fortuny z Kotkiem Pomocnikiem i przećwicz 3 nowe zwroty o grach!'
  },
  {
    id: 'b3_node_3',
    x: 47,
    y: 35,
    type: 'shop',
    titlePl: 'Kramik / Sklepik 🛒',
    subtitlePl: 'Zakupy za monety 🪙',
    icon: './assets/kramik.png',
    completed: false,
    descriptionPl: 'Sklepik szkolny! Kup Sneakersy (6 🪙), Napój energetyczny (2 🪙) lub Kebab (4 🪙).'
  },
  {
    id: 'b3_node_4',
    x: 49,
    y: 67,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Soczyste jabłko! Regeneruje +8 HP przed rozmową z Olkiem.'
  },
  {
    id: 'b3_node_5',
    x: 68,
    y: 48,
    type: 'olek_spell_word',
    titlePl: 'Olek – Test Nowych Słów',
    subtitlePl: 'Spell the Word: Rozmowa o grach',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b3_node_6'],
    descriptionPl: 'Olek siedzi i gra na telefonie! Użyj nowo poznanych zwrotów w minigrze Spell the Word.'
  },
  {
    id: 'b3_node_6',
    x: 86,
    y: 53,
    type: 'next_board',
    titlePl: 'Drzwi na Planszę 4',
    actionLabel: 'PLANSZA 4 🚪',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące na Planszę 4! Odblokowują się po rozmowie z Olkiem.'
  }
];

export const BOARD_3_EDGES = [
  ['b3_node_1', 'b3_node_2'],
  ['b3_node_2', 'b3_node_3'],
  ['b3_node_2', 'b3_node_4'],
  ['b3_node_3', 'b3_node_4'],
  ['b3_node_3', 'b3_node_5'],
  ['b3_node_4', 'b3_node_5'],
  ['b3_node_5', 'b3_node_6']
];

// ==================== PLANSZA 4: EMOCJE I SLANG (JEŻYK, SZCZENIAK, OLEK, ZAJĄC) ====================

// Układ 9 pól dla Planszy 4
export const BOARD_4_NODES = [
  {
    id: 'b4_node_1',
    x: 8,
    y: 52,
    type: 'start',
    titlePl: 'Start (Piętro 4)',
    icon: null,
    completed: true,
    descriptionPl: 'Punkt startowy po wejściu po schodach z Piętra 3!'
  },
  {
    id: 'b4_node_2',
    x: 20,
    y: 44,
    type: 'hedgehog_matchup',
    titlePl: 'Jeżyk (40 HP)',
    subtitlePl: 'Match up: Połącz słowa z definicją',
    icon: './assets/Postacie/Jez.png',
    completed: false,
    blocksEdgesTo: ['b4_node_3'],
    descriptionPl: 'Jeżyk (40 HP, bije po 2 HP)! Przeciągnij słowa do odpowiednich definicji.'
  },
  {
    id: 'b4_node_3',
    x: 32,
    y: 52,
    type: 'waypoint',
    titlePl: 'Rozdroże korytarza',
    icon: null,
    completed: true,
    descriptionPl: 'Rozdroże korytarza — możesz wybrać drogę górą przez Jabłko lub dołem przez Szczeniaczka!'
  },
  {
    id: 'b4_node_4',
    x: 44,
    y: 33,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Soczyste jabłko! Regeneruje +8 HP.'
  },
  {
    id: 'b4_node_5',
    x: 44,
    y: 69,
    type: 'puppy_find_match',
    titlePl: 'Szczeniaczek (50 HP)',
    subtitlePl: 'Find the Match: Wybierz pasujące w 10s',
    icon: './assets/Postacie/Szczeniak.png',
    completed: false,
    blocksEdgesTo: ['b4_node_6'],
    descriptionPl: 'Szczeniaczek (50 HP, bije po 1 HP)! Szybko wybierz pasujące słowo (10s).'
  },
  {
    id: 'b4_node_6',
    x: 58,
    y: 50,
    type: 'olek_quiz_3',
    titlePl: 'Olek Gejmer (30 HP)',
    subtitlePl: 'Quiz: Slang i Emocje',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b4_node_7'],
    descriptionPl: 'Olek Gejmer (30 HP, bije po 7 HP)! Odpowiedz poprawnie w quizie.'
  },
  {
    id: 'b4_node_7',
    x: 71,
    y: 42,
    type: 'rabbit_wordsearch',
    titlePl: 'Zając (20 HP)',
    subtitlePl: 'Wordsearch: Wykreślanka (10s)',
    icon: './assets/Postacie/Zajac.png',
    completed: false,
    blocksEdgesTo: ['b4_node_8', 'b4_node_9'],
    descriptionPl: 'Szybki Zając (20 HP, bije po 10 HP)! Znajdź 4 ukryte słowa w tabeli liter.'
  },
  {
    id: 'b4_node_8',
    x: 82,
    y: 66,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Regeneracja +8 HP przed drzwiami!'
  },
  {
    id: 'b4_node_9',
    x: 91,
    y: 48,
    type: 'next_board',
    titlePl: 'Drzwi na Planszę 5',
    actionLabel: 'PLANSZA 5 🚪',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące na kolejny poziom!'
  }
];

export const BOARD_4_EDGES = [
  ['b4_node_1', 'b4_node_2'],
  ['b4_node_2', 'b4_node_3'],
  ['b4_node_3', 'b4_node_4'],
  ['b4_node_3', 'b4_node_5'],
  ['b4_node_4', 'b4_node_6'],
  ['b4_node_5', 'b4_node_6'],
  ['b4_node_6', 'b4_node_7'],
  ['b4_node_7', 'b4_node_8'],
  ['b4_node_7', 'b4_node_9'],
  ['b4_node_8', 'b4_node_9']
];

// ==================== WĘZŁY I ŚCIEŻKI PLANSZY 5 (KLASA) ====================
export const BOARD_5_NODES = [
  {
    id: 'b5_node_1',
    x: 8,
    y: 52,
    type: 'start',
    titlePl: 'Start (Klasa)',
    icon: null,
    completed: true,
    descriptionPl: 'Wejście do sali lekcyjnej! Tan siada w ławce obok Olka.'
  },
  {
    id: 'b5_node_2',
    x: 24,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Drugie śniadanie przed rozpoczęciem lekcji (+8 HP).'
  },
  {
    id: 'b5_node_3',
    x: 40,
    y: 50,
    type: 'olek_quiz_5',
    titlePl: 'Olek w ławce (35 HP)',
    subtitlePl: 'Quiz: Rozmowa w ławce',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b5_node_4', 'b5_node_5'],
    descriptionPl: 'Olek siedzi obok Ciebie w ławce! Użyj nowych zwrotów, aby z nim współpracować na lekcji.'
  },
  {
    id: 'b5_node_4',
    x: 58,
    y: 34,
    type: 'cat_wheel',
    titlePl: 'Kot Bolo (Koło słów)',
    subtitlePl: 'Spin the wheel: Szkolne zwroty',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['b5_node_6'],
    descriptionPl: 'Kot Bolo pomaga przećwiczyć wymowę i zwroty szkolne!'
  },
  {
    id: 'b5_node_5',
    x: 60,
    y: 66,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Przekąska dodająca energii (+8 HP).'
  },
  {
    id: 'b5_node_6',
    x: 77,
    y: 48,
    type: 'teacher_quiz_5',
    titlePl: 'Nauczycielka (40 HP)',
    subtitlePl: 'Sprawdzian wiedzy z lekcji',
    icon: './assets/Postacie/Nauczycielka.png',
    completed: false,
    blocksEdgesTo: ['b5_node_7'],
    descriptionPl: 'Nauczycielka sprawdza, jak radzisz sobie z pracą na lekcji!'
  },
  {
    id: 'b5_node_7',
    x: 91,
    y: 50,
    type: 'next_board',
    titlePl: 'Dzwonek na przerwę 🚪',
    actionLabel: 'PRZERWA 🚪',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Dzwonek na przerwę! Czas wyjść z klasy.'
  }
];

export const BOARD_5_EDGES = [
  ['b5_node_1', 'b5_node_2'],
  ['b5_node_1', 'b5_node_3'],
  ['b5_node_2', 'b5_node_3'],
  ['b5_node_3', 'b5_node_4'],
  ['b5_node_3', 'b5_node_5'],
  ['b5_node_4', 'b5_node_6'],
  ['b5_node_5', 'b5_node_6'],
  ['b5_node_6', 'b5_node_7']
];

export const BOARD_6_NODES = [
  {
    id: 'b6_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Przerwa)',
    icon: null,
    completed: true,
    descriptionPl: 'Dzwonek na przerwę! Tan rozmawia ze znajomymi o tym, co lubi i czego nie znosi.'
  },
  {
    id: 'b6_node_2',
    x: 25,
    y: 35,
    type: 'b6_hedgehog_matchup',
    titlePl: 'Jeżyk (42 HP)',
    subtitlePl: 'Match up z obrazkami',
    icon: './assets/Postacie/Jez.png',
    completed: false,
    blocksEdgesTo: ['b6_node_3'],
    descriptionPl: 'Jeżyk (42 HP, 2 dmg) sprawdza znajomość słówek z obrazkami! Przeciągnij słowa do obrazków.'
  },
  {
    id: 'b6_node_3',
    x: 43,
    y: 52,
    type: 'b6_thoughts_opinion',
    titlePl: 'Myśli (Twoje Gusta)',
    subtitlePl: 'Co o tym sądzisz?',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['b6_node_4'],
    descriptionPl: 'Asset Myśli! Wyraź swoje opinie: Mega, Fajne, Słabe lub Nudne. Nie ma złej odpowiedzi!'
  },
  {
    id: 'b6_node_4',
    x: 60,
    y: 36,
    type: 'b6_olek_quiz',
    titlePl: 'Olek (30 HP)',
    subtitlePl: 'Quiz słowny: „Lubię...”',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['b6_node_5'],
    descriptionPl: 'Olek (30 HP, 7 dmg) podaje zdania „Lubię...”. Dopasuj pasującą reakcję!'
  },
  {
    id: 'b6_node_5',
    x: 75,
    y: 55,
    type: 'b6_thoughts_fight',
    titlePl: 'Myśli: Lajk czy Hejt? (42 HP)',
    subtitlePl: 'Walka upodobań (5 dmg)',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['b6_node_6'],
    descriptionPl: 'Walka z Myślami (42 HP, 5 dmg)! Rozpoznaj, co polubiłeś (Lajk), a co odrzuciłeś (Hejt)!'
  },
  {
    id: 'b6_node_6',
    x: 86,
    y: 36,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Soczyste jabłko dodające +8 HP przed wejściem na salę gimnastyczną!'
  },
  {
    id: 'b6_node_7',
    x: 93,
    y: 50,
    type: 'next_board',
    titlePl: 'Przejście na boisko 🚪',
    actionLabel: 'NA BOISKO ⚽',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi na salę gimnastyczną i boisko szkolne, gdzie czeka Boss Piłkarz!'
  }
];

export const BOARD_6_EDGES = [
  ['b6_node_1', 'b6_node_2'],
  ['b6_node_2', 'b6_node_3'],
  ['b6_node_3', 'b6_node_4'],
  ['b6_node_4', 'b6_node_5'],
  ['b6_node_5', 'b6_node_6'],
  ['b6_node_6', 'b6_node_7']
];

// ==================== PLANSZA 7: BOSS PIŁKARZ (WIELKI TEST MATERIAŁU) ====================

export const BOARD_7_NODES = [
  {
    id: 'b7_node_1',
    x: 10,
    y: 50,
    type: 'start',
    titlePl: 'Start (Boisko szkolne)',
    icon: null,
    completed: true,
    descriptionPl: 'Wkroczyłeś na wielkie boisko szkolne! Na środku murawy czeka Boss Piłkarz!'
  },
  {
    id: 'b7_node_2',
    x: 30,
    y: 36,
    type: 'apple',
    titlePl: 'Jabłko sportowe',
    icon: './assets/apple.png',
    healAmount: 10,
    completed: false,
    descriptionPl: 'Wzmacniająca przekąska (+10 HP) przed meczem z Bossem!'
  },
  {
    id: 'b7_node_3',
    x: 52,
    y: 50,
    type: 'boss_footballer',
    titlePl: 'Boss Piłkarz (66 HP)',
    subtitlePl: 'Mecz finałowy (5 dmg)',
    icon: './assets/Postacie/Pilkarz.png',
    completed: false,
    blocksEdgesTo: ['b7_node_4'],
    descriptionPl: 'Finałowy Boss szkoły: Piłkarz (66 HP, 5 dmg)! 10s na ruch, +5s za dobrą odpowiedź!'
  },
  {
    id: 'b7_node_4',
    x: 74,
    y: 36,
    type: 'apple',
    titlePl: 'Złote Jabłko',
    icon: './assets/apple.png',
    healAmount: 15,
    completed: false,
    descriptionPl: 'Złote jabłko mistrza (+15 HP) po wygranym meczu!'
  },
  {
    id: 'b7_node_5',
    x: 91,
    y: 50,
    type: 'next_board',
    titlePl: 'Brama do Miasta 🏙️',
    actionLabel: 'DO MIASTA 🏙️',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Brama wyjściowa ze szkoły prowadząca prosto do Miasta!'
  }
];

export const BOARD_7_EDGES = [
  ['b7_node_1', 'b7_node_2'],
  ['b7_node_2', 'b7_node_3'],
  ['b7_node_3', 'b7_node_4'],
  ['b7_node_4', 'b7_node_5']
];

// Węzły i ścieżki Planszy 1 w Mieście (Żabka / Biedronka)
export const CITY_1_NODES = [
  {
    id: 'c1_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Sklep w Mieście)',
    icon: null,
    completed: true,
    descriptionPl: 'Wkroczyłeś do Żabki / Biedronki na mieście! Przed Tobą zakupy przy kasie.'
  },
  {
    id: 'c1_node_2',
    x: 24,
    y: 35,
    type: 'city_cat_wheel',
    titlePl: 'Kot Bolo (Koło zakupów)',
    subtitlePl: 'Zakręć kołem i poznaj zwroty',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['c1_node_3'],
    descriptionPl: 'Kot Bolo pomaga przećwiczyć zwroty przy kasie: reklamówka, bułkę, wodę, czipsy, kartą, gotówką!'
  },
  {
    id: 'c1_node_3',
    x: 42,
    y: 52,
    type: 'city_thoughts_shop',
    titlePl: 'Myśli (Wybory przed kasą)',
    subtitlePl: 'Decyzje: produkty, torba, płatność',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['c1_node_4'],
    descriptionPl: 'Asset Myśli! Zdecyduj co kupujesz, czy chcesz torbę i jak płacisz. To zadecyduje o rozmowie z Kasjerką!'
  },
  {
    id: 'c1_node_4',
    x: 58,
    y: 36,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Zdrowa przekąska dodająca +8 HP przed podejściem do kasy.'
  },
  {
    id: 'c1_node_5',
    x: 73,
    y: 52,
    type: 'city_cashier_box',
    titlePl: 'Kasjerka (20 HP, 10 dmg)',
    subtitlePl: 'Open The Box (Czas 5s!)',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    completed: false,
    blocksEdgesTo: ['c1_node_6'],
    descriptionPl: 'Kasjerka (20 HP, 10 dmg)! Otwórz pudełko i w 5 sekund dopasuj obraz do słowa!'
  },
  {
    id: 'c1_node_6',
    x: 87,
    y: 36,
    type: 'city_cashier_rank',
    titlePl: 'Kasjerka (20 HP, 5 dmg)',
    subtitlePl: 'Rank Order: Dialog przy kasie',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    completed: false,
    blocksEdgesTo: ['c1_node_7'],
    descriptionPl: 'Kasjerka (20 HP, 5 dmg)! Uporządkuj kwestie dialogu w prawidłowej kolejności (wykorzystaj swoje wybory)!'
  },
  {
    id: 'c1_node_7',
    x: 94,
    y: 50,
    type: 'next_board',
    titlePl: 'Wyjście ze sklepu 🚪',
    actionLabel: 'NA MIASTO 🏙️',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi wyjściowe z siatką pełną udanych zakupów na ulice Miasta!'
  }
];

export const CITY_1_EDGES = [
  ['c1_node_1', 'c1_node_2'],
  ['c1_node_2', 'c1_node_3'],
  ['c1_node_3', 'c1_node_4'],
  ['c1_node_4', 'c1_node_5'],
  ['c1_node_5', 'c1_node_6'],
  ['c1_node_6', 'c1_node_7']
];

// ==============================================================================
// PLANSZA 2 W MIEŚCIE (ZAMAWIANIE JEDZENIA: KEBAB, BURGER, PIZZA, SOSY, ROZMIARY)
// ==============================================================================

// Węzły i ścieżki Planszy 2 w Mieście (Gastronomia: Kebab, Burger, Pizza)
export const CITY_2_NODES = [
  {
    id: 'c2_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Aleja Smaków)',
    icon: null,
    completed: true,
    descriptionPl: 'Aleja Gastronomii w Mieście! Pora zamówić ciepły posiłek: kebab, burger lub pizzę.'
  },
  {
    id: 'c2_node_2',
    x: 24,
    y: 35,
    type: 'city2_cat_wheel',
    titlePl: 'Kot pomocnik (50 HP, 0 dmg)',
    subtitlePl: 'Spinner: Tłumaczenia PL ➡ VN',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['c2_node_3'],
    descriptionPl: 'Kot pomocnik (50 HP, 0 dmg) kręci spinnerem i uczy tłumaczeń z polskiego na wietnamski!'
  },
  {
    id: 'c2_node_3',
    x: 42,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Świeże jabłko dodające +8 HP przed dalszą wędrówką.'
  },
  {
    id: 'c2_node_4',
    x: 58,
    y: 36,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Kolejne soczyste jabłko dodające +8 HP przed zamówieniem.'
  },
  {
    id: 'c2_node_5',
    x: 73,
    y: 52,
    type: 'city2_thoughts_food',
    titlePl: 'Myśli (Twoje upodobania)',
    subtitlePl: 'Wybór obrazkowy: sos, rozmiar, sposób',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['c2_node_6'],
    descriptionPl: 'Asset Myśli! Wybierz obrazkowo sos (czosnkowy/ostry), rozmiar (S–XXL) i formę podania (na miejscu/na wynos)!'
  },
  {
    id: 'c2_node_6',
    x: 87,
    y: 36,
    type: 'city2_kebab_master',
    titlePl: 'Mistrz Kebaba (30 HP, 3 dmg)',
    subtitlePl: 'Zamawianie jedzenia przy ladzie',
    icon: './assets/Postacie/Mistrz_Kebaba.png',
    completed: false,
    blocksEdgesTo: ['c2_node_7'],
    descriptionPl: 'Mistrz Kebaba (30 HP, 3 dmg)! Złóż zamówienie, wybierz sos, podziękuj i poczekaj na pyszny posiłek!'
  },
  {
    id: 'c2_node_7',
    x: 94,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi: Liczby i Pieniądze 🚪',
    actionLabel: 'PLANSZA 3: LICZBY 💰',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące na kolejną planszę: Liczby i pieniądze (1–100): Rozumienie cen, reszty i operowanie numerem telefonu!'
  }
];

export const CITY_2_EDGES = [
  ['c2_node_1', 'c2_node_2'],
  ['c2_node_2', 'c2_node_3'],
  ['c2_node_3', 'c2_node_4'],
  ['c2_node_4', 'c2_node_5'],
  ['c2_node_5', 'c2_node_6'],
  ['c2_node_6', 'c2_node_7']
];

// ==============================================================================
// PLANSZA 3 W MIEŚCIE: KOMUNIKACJA, BILETOMAT, INSPEKTOR BILETU (KANAR)
// ==============================================================================

export const CITY_3_NODES = [
  {
    id: 'c3_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Przystanek Miejski)',
    icon: null,
    completed: true,
    descriptionPl: 'Wkroczyłeś na przystanek komunikacji miejskiej! Pora kupić bilet i ruszyć dalej.'
  },
  {
    id: 'c3_node_2',
    x: 24,
    y: 35,
    type: 'city3_cat_wheel',
    titlePl: 'Kot pomocnik (50 HP, 0 dmg)',
    subtitlePl: 'Pytanie o drogę i komunikacja',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['c3_node_3'],
    descriptionPl: 'Kot pomocnik uczy pytać o drogę oraz wyjaśnia zasady przystanków i biletów ulgowych!'
  },
  {
    id: 'c3_node_3',
    x: 42,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko i Sakiewka Monet 🪙',
    icon: './assets/apple.png',
    healAmount: 8,
    coinsGain: 6,
    completed: false,
    descriptionPl: 'Soczyste jabłko (+8 HP) oraz znaleziona sakiewka z monetami (+6 monet na biletomat)!'
  },
  {
    id: 'c3_node_4',
    x: 58,
    y: 36,
    type: 'city3_biletomat',
    titlePl: 'Biletomat (1 dmg za brak monet)',
    subtitlePl: 'Zakup biletu (20/75/90 min, ulgowy)',
    icon: './assets/Postacie/Biletomat.png',
    completed: false,
    blocksEdgesTo: ['c3_node_5'],
    descriptionPl: 'Biletomat miejski! Wybierz język, czas biletu i rodzaj (ulgowy/normalny). Pamiętaj o monetach!'
  },
  {
    id: 'c3_node_5',
    x: 73,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Przekąska dodająca +8 HP przed wejściem do tramwaju.'
  },
  {
    id: 'c3_node_6',
    x: 87,
    y: 36,
    type: 'city3_inspector',
    titlePl: 'Inspektor Biletu (Kanar)',
    subtitlePl: '„Legitymację poproszę” (Type the answer)',
    icon: './assets/Postacie/Inspektor_Biletu.png',
    completed: false,
    blocksEdgesTo: ['c3_node_7'],
    descriptionPl: 'Kontrola biletów! Jeśli masz bilet ulgowy, Inspektor poprosi o legitymację — wpisz odpowiedź z klawiatury!'
  },
  {
    id: 'c3_node_7',
    x: 94,
    y: 50,
    type: 'next_board',
    titlePl: 'Wejście do Zaułka Bossa 🚪',
    actionLabel: 'DO ARENY BOSSA ⚔️',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące do finałowej ścieżki i starcia z Bossem: Cwaniak!'
  }
];

export const CITY_3_EDGES = [
  ['c3_node_1', 'c3_node_2'],
  ['c3_node_2', 'c3_node_3'],
  ['c3_node_3', 'c3_node_4'],
  ['c3_node_4', 'c3_node_5'],
  ['c3_node_5', 'c3_node_6'],
  ['c3_node_6', 'c3_node_7']
];

// ==============================================================================
// FINAŁOWA PLANSZA BOSSA: 5 PUSTYCH PÓL DO BOSSA CWANIAKA (68 HP, 5 DMG)
// ==============================================================================

export const CITY_BOSS_NODES = [
  {
    id: 'cb_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Wejście do Zaułka)',
    icon: null,
    completed: true,
    descriptionPl: 'Początek drogi przez miejski zaułek prowadzącej do ostatecznego starcia z Cwaniakiem!'
  },
  {
    id: 'cb_node_2',
    x: 23,
    y: 38,
    type: 'step',
    titlePl: 'Krok 1 (Zaułek)',
    completed: false,
    descriptionPl: 'Puste pole ścieżki — idziesz pewnym krokiem w głąb zaułka.'
  },
  {
    id: 'cb_node_3',
    x: 39,
    y: 52,
    type: 'step',
    titlePl: 'Krok 2 (Zaułek)',
    completed: false,
    descriptionPl: 'Puste pole ścieżki — zbliżasz się do celu.'
  },
  {
    id: 'cb_node_4',
    x: 55,
    y: 38,
    type: 'step',
    titlePl: 'Krok 3 (Zaułek)',
    completed: false,
    descriptionPl: 'Puste pole ścieżki — słychać kroki przeciwnika.'
  },
  {
    id: 'cb_node_5',
    x: 71,
    y: 52,
    type: 'step',
    titlePl: 'Krok 4 (Przed Areną)',
    completed: false,
    descriptionPl: 'Ostatnie puste pole przed wielką bramą bossa!'
  },
  {
    id: 'cb_node_6',
    x: 87,
    y: 38,
    type: 'city_boss_cwaniak',
    titlePl: 'Boss: Cwaniak (68 HP, 5 dmg)',
    subtitlePl: 'Czas 10s (+5s) • Match up • Sorting • Quiz',
    icon: './assets/Postacie/Cwaniak.png',
    completed: false,
    blocksEdgesTo: ['cb_node_7'],
    descriptionPl: 'Ostateczny Boss: Cwaniak (68 HP, 5 dmg)! Egzamin z całego materiału: czas 10s, +5s za poprawną odpowiedź!'
  },
  {
    id: 'cb_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Wielki Finał Gry 🏆',
    actionLabel: 'UKOŃCZENIE GRY 🌟',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Wrota mistrzów! Pokonałeś Cwaniaka i opanowałeś język polski w szkole i na mieście!'
  }
];

export const CITY_BOSS_EDGES = [
  ['cb_node_1', 'cb_node_2'],
  ['cb_node_2', 'cb_node_3'],
  ['cb_node_3', 'cb_node_4'],
  ['cb_node_4', 'cb_node_5'],
  ['cb_node_5', 'cb_node_6'],
  ['cb_node_6', 'cb_node_7']
];

// Węzły i ścieżki dla Modułu 3 Plansza 1: Zwroty ratunkowe
export const MODULE_3_1_NODES = [
  {
    id: 'm3_1_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Szkolny Korytarz)',
    icon: null,
    completed: true,
    descriptionPl: 'Wchodzisz do szkoły! Czas opanować zwroty ratunkowe w kontakcie z nauczycielami.'
  },
  {
    id: 'm3_1_node_2',
    x: 23,
    y: 35,
    type: 'm3_cat_wheel',
    titlePl: 'Kot Bolo (Koło Zwrotów Ratunkowych)',
    subtitlePl: 'Zakręć kołem i poznaj wymowę',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m3_1_node_3'],
    descriptionPl: 'Kot Bolo pomaga przećwiczyć ratunkowe zwroty: „Nie rozumiem”, „Proszę powtórzyć”, „Wolniej”!'
  },
  {
    id: 'm3_1_node_3',
    x: 38,
    y: 52,
    type: 'shop',
    titlePl: 'Kramik Szkolny',
    subtitlePl: 'Piórnik (4 🪙), Zeszyt (4 🪙), Drożdżówka (2 🪙)',
    icon: './assets/kramik.png',
    completed: true,
    descriptionPl: 'Szkolny sklepik! Kup piórnik (+1 Atak), zeszyt (+1s Czasu) lub pyszną drożdżówkę (+6 HP)!'
  },
  {
    id: 'm3_1_node_4',
    x: 53,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 6,
    completed: false,
    descriptionPl: 'Chrupiące jabłko leczące +6 HP przed trudnymi lekcjami.'
  },
  {
    id: 'm3_1_node_5',
    x: 68,
    y: 52,
    type: 'm3_thoughts',
    titlePl: 'Myśli (Reakcje na Lekcji)',
    subtitlePl: 'Wybierz ratunkową reakcję',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['m3_1_node_6'],
    descriptionPl: 'Myśli Tan w klasie: Nauczyciel mówi za szybko albo masz pilną potrzebę – co wybierasz?'
  },
  {
    id: 'm3_1_node_6',
    x: 83,
    y: 35,
    type: 'm3_matchup',
    titlePl: 'Zwroty Ratunkowe (Match Up)',
    subtitlePl: 'Połącz zwroty z sytuacjami',
    icon: './assets/Postacie/Jez.png',
    completed: false,
    blocksEdgesTo: ['m3_1_node_7'],
    descriptionPl: 'Jeżyk sprawdza Twoje opanowanie zwrotów ratunkowych w klasie!'
  },
  {
    id: 'm3_1_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Planszy 2 (Przybory)',
    actionLabel: 'PRZEJDŹ DO PLANSZY 2',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi do gabinetu i sali lekcyjnej – temat: Przybory i brak zadań!'
  }
];

export const MODULE_3_1_EDGES = [
  ['m3_1_node_1', 'm3_1_node_2'],
  ['m3_1_node_2', 'm3_1_node_3'],
  ['m3_1_node_3', 'm3_1_node_4'],
  ['m3_1_node_4', 'm3_1_node_5'],
  ['m3_1_node_5', 'm3_1_node_6'],
  ['m3_1_node_6', 'm3_1_node_7']
];

// Węzły i ścieżki dla Modułu 3 Plansza 2: Przybory i brak zadań
export const MODULE_3_2_NODES = [
  {
    id: 'm3_2_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Przybory i Brak Zadań)',
    icon: null,
    completed: true,
    descriptionPl: 'Rozpoczynasz lekcję! Uczysz się jak kulturalnie pożyczać przybory i zgłaszać brak zeszytu.'
  },
  {
    id: 'm3_2_node_2',
    x: 23,
    y: 35,
    type: 'm3_2_cat_wheel',
    titlePl: 'Kot Bolo (Koło Przyborów)',
    subtitlePl: 'Długopis, gumka, linijka i zeszyt',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m3_2_node_3'],
    descriptionPl: 'Kot Bolo uczy nazw szkolnych akcesoriów piórnikowych!'
  },
  {
    id: 'm3_2_node_3',
    x: 38,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 6,
    completed: false,
    descriptionPl: 'Soczyste jabłko przywracające +6 HP energii.'
  },
  {
    id: 'm3_2_node_4',
    x: 53,
    y: 35,
    type: 'm3_olek_quiz',
    titlePl: 'Olek (30 HP, 7 dmg)',
    subtitlePl: 'Quiz: Pożyczanie przyborów w ławce',
    icon: './assets/Postacie/Szczeniak.png',
    completed: false,
    blocksEdgesTo: ['m3_2_node_5'],
    descriptionPl: 'Olek siedzi obok w ławce! Odpowiedz na jego pytania o brakujące przybory.'
  },
  {
    id: 'm3_2_node_5',
    x: 68,
    y: 52,
    type: 'm3_rank_dialog',
    titlePl: 'Rozmowa z Nauczycielem (Rank Order)',
    subtitlePl: 'Ułóż dialog zgłoszenia braku zadania',
    icon: './assets/Postacie/Nauczycielka.png',
    completed: false,
    blocksEdgesTo: ['m3_2_node_6'],
    descriptionPl: 'Ułóż kulturalny dialog z nauczycielem w odpowiedniej kolejności!'
  },
  {
    id: 'm3_2_node_6',
    x: 83,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 6,
    completed: false,
    descriptionPl: 'Drugie jabłko regenerujące +6 HP zdrowia przed lekcją WF-u.'
  },
  {
    id: 'm3_2_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Planszy 3 (Plan lekcji & WF)',
    actionLabel: 'PRZEJDŹ DO PLANSZY 3',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące na korytarz sportowy i salę gimnastyczną!'
  }
];

export const MODULE_3_2_EDGES = [
  ['m3_2_node_1', 'm3_2_node_2'],
  ['m3_2_node_2', 'm3_2_node_3'],
  ['m3_2_node_3', 'm3_2_node_4'],
  ['m3_2_node_4', 'm3_2_node_5'],
  ['m3_2_node_5', 'm3_2_node_6'],
  ['m3_2_node_6', 'm3_2_node_7']
];

// Węzły i ścieżki dla Modułu 3 Plansza 3: Plan lekcji & Wuefista
export const MODULE_3_3_NODES = [
  {
    id: 'm3_3_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Przed Salą Gimnastyczną)',
    icon: null,
    completed: true,
    descriptionPl: 'Czas na plan lekcji! Na korytarzu czeka energiczny nauczyciel WF-u.'
  },
  {
    id: 'm3_3_node_2',
    x: 23,
    y: 35,
    type: 'm3_wuefista',
    titlePl: 'Wuefista (30 HP, 3 dmg)',
    subtitlePl: 'Pyta wyłącznie o lekcje WF i sport',
    icon: './assets/Postacie/Wuefista.png',
    completed: false,
    blocksEdgesTo: ['m3_3_node_3'],
    descriptionPl: 'Wuefista pyta o strój sportowy, rozgrzewkę i gry zespołowe na WF-ie!'
  },
  {
    id: 'm3_3_node_3',
    x: 38,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 6,
    completed: false,
    descriptionPl: 'Świeże jabłko dodające +6 HP po intensywnym treningu.'
  },
  {
    id: 'm3_3_node_4',
    x: 53,
    y: 35,
    type: 'm3_3_cat_wheel',
    titlePl: 'Kot Bolo (Dni Tygodnia i Przedmioty)',
    subtitlePl: 'Poniedziałek, środa, piątek, matma, plastyka',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m3_3_node_5'],
    descriptionPl: 'Koło fortuny ze szkolnym planem lekcji i dniami tygodnia!'
  },
  {
    id: 'm3_3_node_5',
    x: 68,
    y: 52,
    type: 'm3_schedule_thoughts',
    titlePl: 'Myśli (Ulubione Przedmioty)',
    subtitlePl: 'Co lubisz w szkolnym planie?',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['m3_3_node_6'],
    descriptionPl: 'Wskaż swoje preferencje szkolne – który dzień jest najlżejszy?'
  },
  {
    id: 'm3_3_node_6',
    x: 83,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 6,
    completed: false,
    descriptionPl: 'Ostatnie jabłko regenerujące +6 HP przed egzaminem z Nauczycielką.'
  },
  {
    id: 'm3_3_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Bossa (Nauczycielka)',
    actionLabel: 'STAŃ DO EGZAMINU',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Wejście do sali głównej na ostateczny egzamin Modułu 3 z Nauczycielką!'
  }
];

export const MODULE_3_3_EDGES = [
  ['m3_3_node_1', 'm3_3_node_2'],
  ['m3_3_node_2', 'm3_3_node_3'],
  ['m3_3_node_3', 'm3_3_node_4'],
  ['m3_3_node_4', 'm3_3_node_5'],
  ['m3_3_node_5', 'm3_3_node_6'],
  ['m3_3_node_6', 'm3_3_node_7']
];

// Węzły Bossa Modułu 3: Nauczycielka (68 HP, 5 dmg)
export const MODULE_3_BOSS_NODES = [
  {
    id: 'm3_b_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Wejście do Klasy Egzaminacyjnej',
    icon: null,
    completed: true,
    descriptionPl: 'Przed Tobą korytarz prowadzący do biurka Nauczycielki!'
  },
  {
    id: 'm3_b_node_2',
    x: 24,
    y: 38,
    type: 'step',
    titlePl: 'Krok 1 (Klasa)',
    completed: false,
    descriptionPl: 'Idziesz pewnym krokiem w stronę tablicy.'
  },
  {
    id: 'm3_b_node_3',
    x: 40,
    y: 52,
    type: 'step',
    titlePl: 'Krok 2 (Klasa)',
    completed: false,
    descriptionPl: 'Mijasz szkolne ławki pełne podręczników.'
  },
  {
    id: 'm3_b_node_4',
    x: 58,
    y: 38,
    type: 'step',
    titlePl: 'Krok 3 (Klasa)',
    completed: false,
    descriptionPl: 'Otwierasz zeszyt i jesteś gotowy do odpowiedzi.'
  },
  {
    id: 'm3_b_node_5',
    x: 74,
    y: 52,
    type: 'step',
    titlePl: 'Krok 4 (Klasa)',
    completed: false,
    descriptionPl: 'Ostatni krok przed biurkiem Nauczycielki!'
  },
  {
    id: 'm3_b_node_6',
    x: 88,
    y: 38,
    type: 'm3_boss_nauczycielka',
    titlePl: 'Boss: Nauczycielka (68 HP, 5 dmg)',
    subtitlePl: 'Czas 10s (+5s) • Egzamin ze szkoły',
    icon: './assets/Postacie/Nauczycielka.png',
    completed: false,
    blocksEdgesTo: ['m3_b_node_7'],
    descriptionPl: 'Pani Nauczycielka (68 HP, 5 dmg)! Egzamin ze zwrotów ratunkowych, przyborów i planu lekcji!'
  },
  {
    id: 'm3_b_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Przejście do Modułu 4',
    actionLabel: 'IDŹ DO MODUŁU 4 (ZDROWIE)',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Ukończyłeś szkołę! Przejdź do Modułu 4: Ciało, samopoczucie i bezpieczeństwo.'
  }
];

export const MODULE_3_BOSS_EDGES = [
  ['m3_b_node_1', 'm3_b_node_2'],
  ['m3_b_node_2', 'm3_b_node_3'],
  ['m3_b_node_3', 'm3_b_node_4'],
  ['m3_b_node_4', 'm3_b_node_5'],
  ['m3_b_node_5', 'm3_b_node_6'],
  ['m3_b_node_6', 'm3_b_node_7']
];

// Węzły i ścieżki dla Modułu 4 Plansza 1: Stany fizyczne
export const MODULE_4_1_NODES = [
  {
    id: 'm4_1_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Ciało i Potrzeby)',
    icon: null,
    completed: true,
    descriptionPl: 'Rozpoczynasz Moduł 4: Nauka mówienia o swoich potrzebach fizycznych i zdrowiu!'
  },
  {
    id: 'm4_1_node_2',
    x: 23,
    y: 35,
    type: 'm4_cat_wheel',
    titlePl: 'Kot Bolo (Koło Potrzeb Ciała)',
    subtitlePl: 'Głodny, pragnienie, zimno, gorąco',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m4_1_node_3'],
    descriptionPl: 'Kot Bolo uczy jak komunikować głód, pragnienie, zimno i potrzebę odpoczynku.'
  },
  {
    id: 'm4_1_node_3',
    x: 38,
    y: 52,
    type: 'shop',
    titlePl: 'Kramik Apteczny',
    subtitlePl: 'Plaster (7 🪙), Szalik (5 🪙), Woda (3 🪙)',
    icon: './assets/kramik.png',
    completed: true,
    descriptionPl: 'Apteczny kramik! Kup plaster (+12 HP & +2 Max), szalik (+4 Max HP) lub orzeźwiającą wodę (+8 HP)!'
  },
  {
    id: 'm4_1_node_4',
    x: 53,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 7,
    completed: false,
    descriptionPl: 'Dobre jabłko wzmacniające odporność (+7 HP).'
  },
  {
    id: 'm4_1_node_5',
    x: 68,
    y: 52,
    type: 'm4_physical_thoughts',
    titlePl: 'Myśli (Co czuje Twoje ciało?)',
    subtitlePl: 'Reakcje na sygnały organizmu',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['m4_1_node_6'],
    descriptionPl: 'Asset Myśli: Rozpoznaj, co mówi Twoje ciało po męczącym dniu w szkole.'
  },
  {
    id: 'm4_1_node_6',
    x: 83,
    y: 35,
    type: 'm4_matchup',
    titlePl: 'Stany Fizyczne (Match Up)',
    subtitlePl: 'Dopasuj sygnał do potrzeby',
    icon: './assets/Postacie/Jez.png',
    completed: false,
    blocksEdgesTo: ['m4_1_node_7'],
    descriptionPl: 'Jeżyk sprawdza Twoją wiedzę o radzeniu sobie z głodem, zimnem i pragnieniem.'
  },
  {
    id: 'm4_1_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Gabinetu Pielęgniarki',
    actionLabel: 'PRZEJDŹ DO PLANSZY 2',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi prowadzące do szkolnego gabinetu zdrowia (Plansza 2: Ból i dolegliwości)!'
  }
];

export const MODULE_4_1_EDGES = [
  ['m4_1_node_1', 'm4_1_node_2'],
  ['m4_1_node_2', 'm4_1_node_3'],
  ['m4_1_node_3', 'm4_1_node_4'],
  ['m4_1_node_4', 'm4_1_node_5'],
  ['m4_1_node_5', 'm4_1_node_6'],
  ['m4_1_node_6', 'm4_1_node_7']
];

// Węzły Modułu 4 Plansza 2: Zdrowie i ból
export const MODULE_4_2_NODES = [
  {
    id: 'm4_2_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Przed Gabinetem Zdrowia)',
    icon: null,
    completed: true,
    descriptionPl: 'Uczysz się precyzyjnie zgłaszać ból głowy, brzucha i gorączkę.'
  },
  {
    id: 'm4_2_node_2',
    x: 23,
    y: 35,
    type: 'm4_pielegniarka',
    titlePl: 'Pielęgniarka (30 HP, 3 dmg)',
    subtitlePl: 'Rozmowa o dolegliwościach w gabinecie',
    icon: './assets/Postacie/Pielegniarka.png',
    completed: false,
    blocksEdgesTo: ['m4_2_node_3'],
    descriptionPl: 'Pielęgniarka pyta co Ci dolega, mierzy temperaturę i podaje szklankę wody!'
  },
  {
    id: 'm4_2_node_3',
    x: 38,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 7,
    completed: false,
    descriptionPl: 'Lecznicze jabłko przywracające +7 HP.'
  },
  {
    id: 'm4_2_node_4',
    x: 53,
    y: 35,
    type: 'm4_2_cat_wheel',
    titlePl: 'Kot Bolo (Nazwy Dolegliwości)',
    subtitlePl: 'Głowa, brzuch, gardło, gorączka',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m4_2_node_5'],
    descriptionPl: 'Kot Bolo pomaga przećwiczyć trudniejsze zwroty o bólu i lekarstwach.'
  },
  {
    id: 'm4_2_node_5',
    x: 68,
    y: 52,
    type: 'm4_open_box',
    titlePl: 'Apteczka (Open The Box)',
    subtitlePl: 'Dopasuj objaw w 5 sekund!',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    completed: false,
    blocksEdgesTo: ['m4_2_node_6'],
    descriptionPl: 'Szybkie dopasowanie objawów i pierwszej pomocy w gabinecie pielęgniarki!'
  },
  {
    id: 'm4_2_node_6',
    x: 83,
    y: 35,
    type: 'm4_pielegniarka_kontrola',
    titlePl: 'Pielęgniarka (Kontrola 30 HP)',
    subtitlePl: 'Sprawdzenie temperatury po odpoczynku',
    icon: './assets/Postacie/Pielegniarka.png',
    completed: false,
    blocksEdgesTo: ['m4_2_node_7'],
    descriptionPl: 'Pielęgniarka sprawdza jak się czujesz po odpoczynku i szklance wody!'
  },
  {
    id: 'm4_2_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Planszy 3 (Emocje)',
    actionLabel: 'PRZEJDŹ DO PLANSZY 3',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi do sali relaksu – temat: Emocje, złość, zmęczenie i radość!'
  }
];

export const MODULE_4_2_EDGES = [
  ['m4_2_node_1', 'm4_2_node_2'],
  ['m4_2_node_2', 'm4_2_node_3'],
  ['m4_2_node_3', 'm4_2_node_4'],
  ['m4_2_node_4', 'm4_2_node_5'],
  ['m4_2_node_5', 'm4_2_node_6'],
  ['m4_2_node_6', 'm4_2_node_7']
];

// Węzły Modułu 4 Plansza 3: Emocje i energia
export const MODULE_4_3_NODES = [
  {
    id: 'm4_3_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Świat Emocji)',
    icon: null,
    completed: true,
    descriptionPl: 'Poznaj swoje emocje: jak nazwać zmęczenie, złość czy spokój.'
  },
  {
    id: 'm4_3_node_2',
    x: 23,
    y: 35,
    type: 'm4_3_cat_wheel',
    titlePl: 'Kot Bolo (Koło Emocji)',
    subtitlePl: 'Zmęczony, nudzę się, zły, okej',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m4_3_node_3'],
    descriptionPl: 'Kot Bolo uczy jak bez wstydu mówić o swoich uczuciach i potrzebie spokoju.'
  },
  {
    id: 'm4_3_node_3',
    x: 38,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 7,
    completed: false,
    descriptionPl: 'Spokojna chwila z jabłkiem (+7 HP).'
  },
  {
    id: 'm4_3_node_4',
    x: 53,
    y: 35,
    type: 'm4_emotions_rank',
    titlePl: 'Dialog o Emocjach (Rank Order)',
    subtitlePl: 'Ułóż rozmowę z przyjacielem',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['m4_3_node_5'],
    descriptionPl: 'Ułóż dialog, w którym tłumaczysz koledze, że masz gorszy dzień i potrzebujesz chwili odpoczynku.'
  },
  {
    id: 'm4_3_node_5',
    x: 68,
    y: 52,
    type: 'm4_emotion_thoughts',
    titlePl: 'Myśli (Wyciszenie i Relaks)',
    subtitlePl: 'Jak radzisz sobie ze złością?',
    icon: './assets/Postacie/Mysli.png',
    completed: false,
    blocksEdgesTo: ['m4_3_node_6'],
    descriptionPl: 'Wybierz zdrowe sposoby na rozładowanie szkolnego stresu.'
  },
  {
    id: 'm4_3_node_6',
    x: 83,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 7,
    completed: false,
    descriptionPl: 'Ostatnie jabłko przed wizytą u Doktora Lekarza (+7 HP).'
  },
  {
    id: 'm4_3_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Bossa (Lekarz)',
    actionLabel: 'WEJDŹ DO GABINETU LEKARZA',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Drzwi do gabinetu lekarskiego – Boss Lekarz (70 HP, 5 dmg)!'
  }
];

export const MODULE_4_3_EDGES = [
  ['m4_3_node_1', 'm4_3_node_2'],
  ['m4_3_node_2', 'm4_3_node_3'],
  ['m4_3_node_3', 'm4_3_node_4'],
  ['m4_3_node_4', 'm4_3_node_5'],
  ['m4_3_node_5', 'm4_3_node_6'],
  ['m4_3_node_6', 'm4_3_node_7']
];

// Węzły Bossa Modułu 4: Lekarz (70 HP, 5 dmg)
export const MODULE_4_BOSS_NODES = [
  {
    id: 'm4_b_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Korytarz Przychodni Zdrowia',
    icon: null,
    completed: true,
    descriptionPl: 'Korytarz medyczny prowadzący prosto do gabinetu Lekarza!'
  },
  {
    id: 'm4_b_node_2',
    x: 24,
    y: 38,
    type: 'step',
    titlePl: 'Krok 1 (Przychodnia)',
    completed: false,
    descriptionPl: 'Idziesz po lśniącej podłodze przychodni.'
  },
  {
    id: 'm4_b_node_3',
    x: 40,
    y: 52,
    type: 'step',
    titlePl: 'Krok 2 (Przychodnia)',
    completed: false,
    descriptionPl: 'Mijasz tablice informacyjne o zdrowym odżywianiu.'
  },
  {
    id: 'm4_b_node_4',
    x: 58,
    y: 38,
    type: 'm4_pielegniarka_rejestracja',
    titlePl: 'Pielęgniarka (Rejestracja 30 HP)',
    subtitlePl: 'Wywiad medyczny i tętno przed Lekarzem',
    icon: './assets/Postacie/Pielegniarka.png',
    completed: false,
    blocksEdgesTo: ['m4_b_node_5'],
    descriptionPl: 'Pielęgniarka w przychodni mierzy ciśnienie i tętno przed wejściem do gabinetu Doktora Lekarza!'
  },
  {
    id: 'm4_b_node_5',
    x: 74,
    y: 52,
    type: 'step',
    titlePl: 'Krok 4 (Przychodnia)',
    completed: false,
    descriptionPl: 'Drzwi gabinetu uchylają się – wkraczasz do środka!'
  },
  {
    id: 'm4_b_node_6',
    x: 88,
    y: 38,
    type: 'm4_boss_lekarz',
    titlePl: 'Boss: Lekarz (70 HP, 5 dmg)',
    subtitlePl: 'Czas 10s (+5s) • Egzamin ze Zdrowia',
    icon: './assets/Postacie/Lekarz.png',
    completed: false,
    blocksEdgesTo: ['m4_b_node_7'],
    descriptionPl: 'Doktor Lekarz (70 HP, 5 dmg)! Egzamin ze stanów fizycznych, dolegliwości i pierwszej pomocy!'
  },
  {
    id: 'm4_b_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Przejście do Modułu 5',
    actionLabel: 'IDŹ DO MODUŁU 5 (PASJE & TECH)',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Zaliczyłeś egzamin ze zdrowia! Wkraczasz do Modułu 5: Pasje, technologia i tożsamość.'
  }
];

export const MODULE_4_BOSS_EDGES = [
  ['m4_b_node_1', 'm4_b_node_2'],
  ['m4_b_node_2', 'm4_b_node_3'],
  ['m4_b_node_3', 'm4_b_node_4'],
  ['m4_b_node_4', 'm4_b_node_5'],
  ['m4_b_node_5', 'm4_b_node_6'],
  ['m4_b_node_6', 'm4_b_node_7']
];

// Węzły i ścieżki dla Modułu 5 Plansza 1: Autoprezentacja, Mój pokój i technologia
export const MODULE_5_1_NODES = [
  {
    id: 'm5_1_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Mój Pokój i Tożsamość)',
    icon: null,
    completed: true,
    descriptionPl: 'Wkraczasz do Modułu 5! Uczysz się pewnie mówić o sobie, Wietnamie, wieku i technologii.'
  },
  {
    id: 'm5_1_node_2',
    x: 23,
    y: 35,
    type: 'm5_cat_wheel',
    titlePl: 'Kot Bolo (Autoprezentacja & Pokój)',
    subtitlePl: 'Wietnam, Polska, wiek, komputer, Wi-Fi',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m5_1_node_3'],
    descriptionPl: 'Kot Bolo uczy jak opowiedzieć o sobie w klasie i pokazać swój pokój!'
  },
  {
    id: 'm5_1_node_3',
    x: 38,
    y: 52,
    type: 'shop',
    titlePl: 'Kramik Technologiczny',
    subtitlePl: 'Słuchawki (12 🪙), Powerbank (10 🪙), Breloczek (13 🪙)',
    icon: './assets/kramik.png',
    completed: true,
    descriptionPl: 'Tech-Kramik! Słuchawki (+2 Atak), Powerbank (+2s Czasu) oraz Szczęśliwy Breloczek (+1 moneta za walkę bez strat)!'
  },
  {
    id: 'm5_1_node_4',
    x: 53,
    y: 35,
    type: 'm5_gejmer',
    titlePl: 'Gejmer (30 HP, 3 dmg)',
    subtitlePl: 'Pogawędka o sprzęcie, Wi-Fi i grach',
    icon: './assets/Postacie/Gejmer.png',
    completed: false,
    blocksEdgesTo: ['m5_1_node_5'],
    descriptionPl: 'Gejmer pyta o Twój komputer, słuchawki gamingowe i ulubione tytuły!'
  },
  {
    id: 'm5_1_node_5',
    x: 68,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Energetyczne jabłko gracza (+8 HP).'
  },
  {
    id: 'm5_1_node_6',
    x: 83,
    y: 35,
    type: 'm5_matchup',
    titlePl: 'Sprzęt & Autoprezentacja (Match Up)',
    subtitlePl: 'Dopasuj opis do urządzenia',
    icon: './assets/Postacie/Jez.png',
    completed: false,
    blocksEdgesTo: ['m5_1_node_7'],
    descriptionPl: 'Jeżyk testuje Twoją znajomość technologii, sprzętu i autoprezentacji!'
  },
  {
    id: 'm5_1_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Planszy 2 (Piłka Nożna & Social Media)',
    actionLabel: 'PRZEJDŹ DO PLANSZY 2',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Przejście na boisko i do strefy trendów (Plansza 2: Piłka nożna, memy i anime)!'
  }
];

export const MODULE_5_1_EDGES = [
  ['m5_1_node_1', 'm5_1_node_2'],
  ['m5_1_node_2', 'm5_1_node_3'],
  ['m5_1_node_3', 'm5_1_node_4'],
  ['m5_1_node_4', 'm5_1_node_5'],
  ['m5_1_node_5', 'm5_1_node_6'],
  ['m5_1_node_6', 'm5_1_node_7']
];

// Węzły Modułu 5 Plansza 2: Piłka nożna, social media & trendy
export const MODULE_5_2_NODES = [
  {
    id: 'm5_2_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Start (Strefa Sportu i Popkultury)',
    icon: null,
    completed: true,
    descriptionPl: 'Spotykasz na orliku i placu trzech znanych chłopaków: Piłkarza i Cwaniaka!'
  },
  {
    id: 'm5_2_node_2',
    x: 23,
    y: 35,
    type: 'm5_pilkarz',
    titlePl: 'Piłkarz (35 HP, 4 dmg)',
    subtitlePl: 'Rozmowa o meczach, Ronaldo i dryblingu',
    icon: './assets/Postacie/Pilkarz.png',
    completed: false,
    blocksEdgesTo: ['m5_2_node_3'],
    descriptionPl: 'Piłkarz sprawdza Twoją wiedzę o futbolu, szybkich zawodnikach i turniejach!'
  },
  {
    id: 'm5_2_node_3',
    x: 38,
    y: 52,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Złote jabłko mistrza orlika (+8 HP).'
  },
  {
    id: 'm5_2_node_4',
    x: 53,
    y: 35,
    type: 'm5_cwaniak',
    titlePl: 'Cwaniak (35 HP, 4 dmg)',
    subtitlePl: 'Pogawędka o memach, viralach i anime',
    icon: './assets/Postacie/Cwaniak.png',
    completed: false,
    blocksEdgesTo: ['m5_2_node_5'],
    descriptionPl: 'Cwaniak testuje czy jesteś na bieżąco z trendami, anime Doraemon i viralami!'
  },
  {
    id: 'm5_2_node_5',
    x: 68,
    y: 52,
    type: 'm5_2_cat_wheel',
    titlePl: 'Kot Bolo (Koło Trendów i Popkultury)',
    subtitlePl: 'Mecz, trendy, memy, anime',
    icon: './assets/Kotek_Pomoc.png',
    completed: false,
    blocksEdgesTo: ['m5_2_node_6'],
    descriptionPl: 'Kot Bolo uczy jak opowiadać kolegom o ulubionych anime, serialach i filmikach.'
  },
  {
    id: 'm5_2_node_6',
    x: 83,
    y: 35,
    type: 'apple',
    titlePl: 'Jabłko',
    icon: './assets/apple.png',
    healAmount: 8,
    completed: false,
    descriptionPl: 'Ostatnie jabłko witaminowe (+8 HP) przed wejściem na arenę Instagramerki.'
  },
  {
    id: 'm5_2_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Drzwi do Bossa (Instagramerka)',
    actionLabel: 'WEJDŹ NA SCENĘ INSTAGRAMERKI',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Wielka arena ostatecznego Bossa gry – Królowa Trendów: Instagramerka!'
  }
];

export const MODULE_5_2_EDGES = [
  ['m5_2_node_1', 'm5_2_node_2'],
  ['m5_2_node_2', 'm5_2_node_3'],
  ['m5_2_node_3', 'm5_2_node_4'],
  ['m5_2_node_4', 'm5_2_node_5'],
  ['m5_2_node_5', 'm5_2_node_6'],
  ['m5_2_node_6', 'm5_2_node_7']
];

// Węzły Bossa Modułu 5: Instagramerka (70 HP, 5 dmg)
export const MODULE_5_BOSS_NODES = [
  {
    id: 'm5_b_node_1',
    x: 8,
    y: 50,
    type: 'start',
    titlePl: 'Czerwony Dywan Trendów',
    icon: null,
    completed: true,
    descriptionPl: 'Scena rozbłyska światłami neonów! Przed Tobą Instagramerka.'
  },
  {
    id: 'm5_b_node_2',
    x: 24,
    y: 38,
    type: 'step',
    titlePl: 'Krok 1 (Studio Nagrań)',
    completed: false,
    descriptionPl: 'Mijasz profesjonalne lampy pierścieniowe i mikrofony.'
  },
  {
    id: 'm5_b_node_3',
    x: 40,
    y: 52,
    type: 'step',
    titlePl: 'Krok 2 (Studio Nagrań)',
    completed: false,
    descriptionPl: 'Muzyka gra w tle, tłum obserwuje transmisję na żywo.'
  },
  {
    id: 'm5_b_node_4',
    x: 58,
    y: 38,
    type: 'step',
    titlePl: 'Krok 3 (Studio Nagrań)',
    completed: false,
    descriptionPl: 'Tan staje przed obiektywem kamery pełen wiary w siebie.'
  },
  {
    id: 'm5_b_node_5',
    x: 74,
    y: 52,
    type: 'step',
    titlePl: 'Krok 4 (Studio Nagrań)',
    completed: false,
    descriptionPl: 'Ostatnie spojrzenie na publiczność – czas na wielki finał!'
  },
  {
    id: 'm5_b_node_6',
    x: 88,
    y: 38,
    type: 'm5_boss_instagramerka',
    titlePl: 'Boss: Instagramerka (70 HP, 5 dmg)',
    subtitlePl: 'Czas 10s (+5s) • Wielki Finał Pasji i Trendów',
    icon: './assets/Postacie/Instagramerka.png',
    completed: false,
    blocksEdgesTo: ['m5_b_node_7'],
    descriptionPl: 'Instagramerka (70 HP, 5 dmg)! Ostateczny egzamin z tożsamości, technologii, futbolu i popkultury!'
  },
  {
    id: 'm5_b_node_7',
    x: 95,
    y: 50,
    type: 'next_board',
    titlePl: 'Wielki Puchar Gry Nói Đi!',
    actionLabel: 'ODBIERZ ZŁOTY PUCHAR',
    icon: './assets/drzwi.png',
    completed: false,
    descriptionPl: 'Ukończenie całej gry! Jesteś prawdziwym mistrzem języka polskiego!'
  }
];

export const MODULE_5_BOSS_EDGES = [
  ['m5_b_node_1', 'm5_b_node_2'],
  ['m5_b_node_2', 'm5_b_node_3'],
  ['m5_b_node_3', 'm5_b_node_4'],
  ['m5_b_node_4', 'm5_b_node_5'],
  ['m5_b_node_5', 'm5_b_node_6'],
  ['m5_b_node_6', 'm5_b_node_7']
];
