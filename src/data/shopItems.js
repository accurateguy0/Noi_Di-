// Definicje przedmiotów szkolnych i kramików
// Cennik zgodnie z wytycznymi:
// breloczek - 13, drozdzowka - 2, energetyk - 4, kebab - 10, piornik - 6,
// plaster - 1, powerbank - 15, sluchawki gamingowe - 14, sneaker - 16,
// szalik - 8, woda - 2, zeszyt - 5
// W grze istnieją WYŁĄCZNIE: Życie (HP/Max HP), Obrażenia (DMG) oraz Ilość Podpowiedzi (?)

export const ALL_ITEMS_CATALOG = {
  plaster: {
    id: 'plaster',
    namePl: 'PLASTER',
    price: 1,
    icon: './assets/itemki/plaster.png',
    badgePl: '+3 HP',
    descPl: 'Szybki opatrunek na stres! Natychmiast regeneruje +3 HP.',
    color: '#ef4444',
    healAmount: 3
  },
  drozdzowka: {
    id: 'drozdzowka',
    namePl: 'DROŻDŻÓWKA',
    price: 2,
    icon: './assets/itemki/drozdzowka.png',
    badgePl: '+6 HP',
    descPl: 'Świeża drożdżówka ze szkolnego sklepiku! Przywraca +6 HP.',
    color: '#f59e0b',
    healAmount: 6
  },
  woda: {
    id: 'woda',
    namePl: 'WODA',
    price: 2,
    icon: './assets/itemki/woda.jpg',
    badgePl: '+5 HP',
    descPl: 'Chłodna woda mineralna! Gasi pragnienie i przywraca +5 HP.',
    color: '#06b6d4',
    healAmount: 5
  },
  energetyk: {
    id: 'energetyk',
    namePl: 'ENERGETYK',
    price: 4,
    icon: './assets/itemki/energetyk.png',
    badgePl: '+1 PODPOWIEDŹ',
    descPl: 'Zastrzyk energii! Dodaje +1 użycie podpowiedzi (?) do trudnych pytań.',
    color: '#00b4d8',
    hintsBonus: 1
  },
  zeszyt: {
    id: 'zeszyt',
    namePl: 'ZESZYT',
    price: 5,
    icon: './assets/itemki/zeszyt.png',
    badgePl: 'ATAK +1',
    descPl: 'Czysty zeszyt w kratkę! Zwiększa Twoją wiedzę i siłę ataku o +1 DMG.',
    color: '#10b981',
    damageBonus: 1
  },
  piornik: {
    id: 'piornik',
    namePl: 'PIÓRNIK',
    price: 6,
    icon: './assets/itemki/piornik.png',
    badgePl: 'ATAK +1',
    descPl: 'Praktyczny piórnik ze wszystkimi przyborami! Dodaje +1 DMG do twoich ciosów.',
    color: '#2563eb',
    damageBonus: 1
  },
  szalik: {
    id: 'szalik',
    namePl: 'SZALIK',
    price: 8,
    icon: './assets/itemki/szalik.png',
    badgePl: 'MAX HP +3',
    descPl: 'Ciepły szalik chroniący przed chłodem! Na stałe zwiększa Max HP o +3 (i leczy +3 HP).',
    color: '#8b5cf6',
    maxHpBonus: 3,
    healAmount: 3
  },
  kebab: {
    id: 'kebab',
    namePl: 'KEBAB',
    price: 10,
    icon: './assets/itemki/kebab.png',
    badgePl: '+10 HP & MAX +2',
    descPl: 'Pyszny, ciepły kebab! Regeneruje +10 HP oraz zwiększa maksymalne zdrowie o +2 Max HP.',
    color: '#f77f00',
    healAmount: 10,
    maxHpBonus: 2
  },
  breloczek: {
    id: 'breloczek',
    namePl: 'BRELOCZEK',
    price: 13,
    icon: './assets/itemki/breloczek.png',
    badgePl: '+2 PODPOWIEDZI',
    descPl: 'Szczęśliwy breloczek do plecaka! Daje +2 dodatkowe użycia podpowiedzi (?).',
    color: '#ec4899',
    hintsBonus: 2
  },
  sluchawki: {
    id: 'sluchawki',
    namePl: 'SŁUCHAWKI',
    price: 14,
    icon: './assets/itemki/sluchawki_gamingowe.png',
    badgePl: 'ATAK +2',
    descPl: 'Słuchawki gamingowe z redukcją szumów! Zwiększają siłę ataku bohatera o +2 DMG.',
    color: '#6366f1',
    damageBonus: 2
  },
  powerbank: {
    id: 'powerbank',
    namePl: 'POWERBANK',
    price: 15,
    icon: './assets/itemki/powerbank.png',
    badgePl: '+3 PODPOWIEDZI',
    descPl: 'Pojemny powerbank! Dodaje aż +3 dodatkowe ładunki podpowiedzi (?).',
    color: '#eab308',
    hintsBonus: 3
  },
  sneakers: {
    id: 'sneakers',
    namePl: 'SNEAKERSY',
    price: 16,
    icon: './assets/itemki/sneaker.png',
    badgePl: 'MAX HP +6',
    descPl: 'Wygodne szkolne buty! Na stałe zwiększają maksymalne życie o +6 Max HP (i leczą +6 HP).',
    color: '#8338ec',
    maxHpBonus: 6,
    healAmount: 6
  }
};

// Kramik w Module 1 (np. na Planszy 3) - 3 przedmioty na ladzie w stylu Dicey Dungeons
export const SHOP_ITEMS = [
  ALL_ITEMS_CATALOG.drozdzowka,
  ALL_ITEMS_CATALOG.energetyk,
  ALL_ITEMS_CATALOG.piornik
];

// Kramik w Module 3
export const MODULE_3_SHOP_ITEMS = [
  ALL_ITEMS_CATALOG.zeszyt,
  ALL_ITEMS_CATALOG.piornik,
  ALL_ITEMS_CATALOG.drozdzowka
];

// Kramik w Module 4
export const MODULE_4_SHOP_ITEMS = [
  ALL_ITEMS_CATALOG.plaster,
  ALL_ITEMS_CATALOG.szalik,
  ALL_ITEMS_CATALOG.woda
];

// Kramik w Module 5
export const MODULE_5_SHOP_ITEMS = [
  ALL_ITEMS_CATALOG.breloczek,
  ALL_ITEMS_CATALOG.sluchawki,
  ALL_ITEMS_CATALOG.powerbank
];
