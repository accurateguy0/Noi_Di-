// Przedmioty w Kramikach / Sklepikach w poszczególnych modułach gry

// Przedmioty w Kramiku / Sklepiku na Planszy 3 (Pole 3)
export const SHOP_ITEMS = [
  {
    id: 'sneakers',
    namePl: 'SNEAKERSY',
    price: 6,
    icon: './assets/sneaker.png',
    badgePl: 'MAX HP +4',
    descPl: 'Wygodne szkolne buty! Na stałe zwiększają Twoje maksymalne życie o +4 HP (i leczą +4 HP).',
    oneTimePurchase: true,
    color: '#8338ec',
    bigStat: '+4',
    statEmoji: '👟',
    subStatText: 'Dodaj +4 do Max HP'
  },
  {
    id: 'energy_drink',
    namePl: 'ENERGETYK',
    price: 2,
    icon: './assets/energetyk.jpg',
    badgePl: 'CZAS +1s',
    descPl: 'Dodaje energii! Zwiększa czas na odpowiedź o +1 sekundę w minigrach czasowych.',
    oneTimePurchase: true,
    color: '#00b4d8',
    bigStat: '+1s',
    statEmoji: '⚡',
    subStatText: 'Czas w minigrach +1s'
  },
  {
    id: 'kebab',
    namePl: 'KEBAB',
    price: 4,
    icon: './assets/kebab.jpg',
    badgePl: '+10 HP (1x)',
    descPl: 'Ciepły kebab! Przedmiot jednorazowego użytku — regeneruje +10 HP życia.',
    oneTimePurchase: true,
    color: '#f77f00',
    bigStat: '+10',
    statEmoji: '🥙',
    subStatText: 'Ulecz natychmiast +10 HP'
  }
];

// Kramik Szkolny w Module 3: Przetrwanie na lekcjach
export const MODULE_3_SHOP_ITEMS = [
  {
    id: 'piornik',
    namePl: 'PIÓRNIK',
    price: 4,
    icon: './assets/itemki/piornik.png',
    badgePl: 'ATAK +1',
    descPl: 'Praktyczny piórnik ze wszystkimi przyborami! Zwiększa siłę ataku o +1 w walkach i quizach.',
    oneTimePurchase: true,
    color: '#2563eb',
    bigStat: '+1',
    statEmoji: '✏️',
    subStatText: 'Dodaje +1 do obrażeń Tan'
  },
  {
    id: 'zeszyt',
    namePl: 'ZESZYT',
    price: 4,
    icon: './assets/itemki/zeszyt.png',
    badgePl: 'CZAS +1s',
    descPl: 'Czysty zeszyt w kratkę! Zwiększa limit czasu o +1 sekundę w wyzwaniach na czas.',
    oneTimePurchase: true,
    color: '#10b981',
    bigStat: '+1s',
    statEmoji: '📓',
    subStatText: '+1s do czasu na odpowiedź'
  },
  {
    id: 'drozdzowka',
    namePl: 'DROŻDŻÓWKA',
    price: 2,
    icon: './assets/itemki/drozdzowka.png',
    badgePl: '+6 HP',
    descPl: 'Świeża drożdżówka ze szkolnego sklepiku! Natychmiast regeneruje +6 HP życia.',
    oneTimePurchase: true,
    color: '#f59e0b',
    bigStat: '+6',
    statEmoji: '🥐',
    subStatText: 'Ulecz natychmiast +6 HP'
  }
];

// Kramik Apteczny w Module 4: Ciało, samopoczucie i potrzeby
export const MODULE_4_SHOP_ITEMS = [
  {
    id: 'plaster',
    namePl: 'PLASTER',
    price: 7,
    icon: './assets/itemki/plaster.png',
    badgePl: '+12 HP & MAX +2',
    descPl: 'Plaster opatrunkowy z apteczki! Regeneruje natychmiast +12 HP i zwiększa Max HP o +2.',
    oneTimePurchase: true,
    color: '#ef4444',
    bigStat: '+12',
    statEmoji: '🩹',
    subStatText: '+12 HP oraz +2 Max HP'
  },
  {
    id: 'szalik',
    namePl: 'SZALIK',
    price: 5,
    icon: './assets/itemki/szalik.png',
    badgePl: 'MAX HP +4',
    descPl: 'Ciepły szalik chroniący przed przeziębieniem! Na stałe zwiększa maksymalne życie o +4 HP.',
    oneTimePurchase: true,
    color: '#8b5cf6',
    bigStat: '+4',
    statEmoji: '🧣',
    subStatText: 'Dodaje +4 do Max HP'
  },
  {
    id: 'woda',
    namePl: 'WODA',
    price: 3,
    icon: './assets/itemki/woda.jpg',
    badgePl: '+8 HP',
    descPl: 'Butelka chłodnej wody niegazowanej! Błyskawicznie gasi pragnienie i przywraca +8 HP.',
    oneTimePurchase: true,
    color: '#06b6d4',
    bigStat: '+8',
    statEmoji: '💧',
    subStatText: 'Ulecz natychmiast +8 HP'
  }
];

// Kramik Technologiczny w Module 5: Pasje, technologia i tożsamość
export const MODULE_5_SHOP_ITEMS = [
  {
    id: 'sluchawki',
    namePl: 'SŁUCHAWKI',
    price: 12,
    icon: './assets/itemki/sluchawki_gamingowe.png',
    badgePl: 'ATAK +2',
    descPl: 'Słuchawki gamingowe z redukcją szumów! Zwiększają siłę ataku o +2 we wszystkich starciach.',
    oneTimePurchase: true,
    color: '#6366f1',
    bigStat: '+2',
    statEmoji: '🎧',
    subStatText: 'Dodaje +2 do obrażeń Tan'
  },
  {
    id: 'powerbank',
    namePl: 'POWERBANK',
    price: 10,
    icon: './assets/itemki/powerbank.png',
    badgePl: 'CZAS +2s',
    descPl: 'Pojemny powerbank z szybkim ładowaniem! Daje dodatkowe +2 sekundy w zadaniach na czas.',
    oneTimePurchase: true,
    color: '#eab308',
    bigStat: '+2s',
    statEmoji: '🔋',
    subStatText: '+2s w minigrach czasowych'
  },
  {
    id: 'breloczek',
    namePl: 'BRELOCZEK',
    price: 13,
    icon: './assets/itemki/breloczek.png',
    badgePl: 'PERFECT +1 🪙',
    descPl: 'Szczęśliwy breloczek do plecaka! Daje dodatkową monetę (+1 🪙) za każde starcie bez utraty HP!',
    oneTimePurchase: true,
    color: '#ec4899',
    bigStat: '+1🪙',
    statEmoji: '🔑',
    subStatText: '+1 moneta za walkę bez strat'
  }
];
