// Zając - Postać Sytuacyjna (Wordsearch)
// 13 HP, bije po 1 HP. Bank 20 słów tematycznych w wykreślance (2 zestawy na każde piętro).

import { HERO_ZAJAC_SETS } from '../heroCurriculumEncounters.js';

export const ZAJAC_SETS_BY_FLOOR = {
  "1": [
    {
      "titlePl": "Zając: Powitania i Zwroty",
      "subtitlePl": "Zając na korytarzu",
      "descriptionPl": "Odszukaj 4 ukryte słowa grzecznościowe w wykreślance (35s, +5s za słowo).",
      "words": [
        "PROSZĘ",
        "DZIĘKUJĘ",
        "CZEŚĆ",
        "DZIEŃ",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    },
    {
      "titlePl": "Zając: Klasa i Biurko",
      "subtitlePl": "Słowa z pierwszej ławki",
      "descriptionPl": "Odszukaj 4 nazwy przedmiotów w klasie.",
      "words": [
        "ŁAWKA",
        "TABLICA",
        "ZESZYT",
        "KREDA",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "PUCHAR",
        "MEDAL"
      ]
    }
  ],
  "2": [
    {
      "titlePl": "Zając: Kolory i Piórnik",
      "subtitlePl": "Kolorowy zając",
      "descriptionPl": "Odszukaj 4 kolory i przybory szkolne.",
      "words": [
        "CZERWONY",
        "ZIELONY",
        "ŻÓŁTY",
        "OŁÓWEK",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR",
        "MEDAL"
      ]
    },
    {
      "titlePl": "Zając: Piórnik w Akcji",
      "subtitlePl": "Narzędzia ucznia",
      "descriptionPl": "Odszukaj 4 przybory z piórnika.",
      "words": [
        "GUMKA",
        "LINIJKA",
        "DŁUGOPIS",
        "KREDKI",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR",
        "MEDAL",
        "PUNKT"
      ]
    }
  ],
  "3": [
    {
      "titlePl": "Zając: Zdrowie i Ciało",
      "subtitlePl": "Gabinet medyczny",
      "descriptionPl": "Odszukaj 4 części ciała i pojęcia medyczne.",
      "words": [
        "BRZUCH",
        "GŁOWA",
        "NOGA",
        "SERCE",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    },
    {
      "titlePl": "Zając: Pięć Zmysłów",
      "subtitlePl": "Zmysły zająca",
      "descriptionPl": "Odszukaj 4 zmysły i narządy.",
      "words": [
        "OCZY",
        "USZY",
        "SŁUCH",
        "WZROK",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    }
  ],
  "4": [
    {
      "titlePl": "Zając: Stołówka Szkolna",
      "subtitlePl": "Smakołyki zająca",
      "descriptionPl": "Odszukaj 4 słowa związane z posiłkiem.",
      "words": [
        "OBIAD",
        "ZUPA",
        "CHLEB",
        "WODA",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    },
    {
      "titlePl": "Zając: Drugie Śniadanie",
      "subtitlePl": "Zdrowa przekąska",
      "descriptionPl": "Odszukaj 4 zdrowe przekąski na przerwę.",
      "words": [
        "JABŁKO",
        "KANAPKA",
        "SOK",
        "OWOC",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    }
  ],
  "5": [
    {
      "titlePl": "Zając: Dni i Czas",
      "subtitlePl": "Kalendarz turnieju",
      "descriptionPl": "Odszukaj 4 dni tygodnia i pojęcia czasu.",
      "words": [
        "PIĄTEK",
        "ŚRODA",
        "SOBOTA",
        "CZAS",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    },
    {
      "titlePl": "Zając: Mecz Finałowy",
      "subtitlePl": "Boisko szkolne",
      "descriptionPl": "Odszukaj 4 pojęcia sportowe.",
      "words": [
        "BOISKO",
        "PIŁKA",
        "BRAMKA",
        "FINAŁ",
        "SZKOŁA",
        "KLASA",
        "UCZEŃ",
        "KSIĄŻKA",
        "GUMKA",
        "OŁÓWEK",
        "PIÓRNIK",
        "LINIJKA",
        "PLECAK",
        "DZWONEK",
        "PRZERWA",
        "DYREKTOR",
        "LEKTURA",
        "WIERSZ",
        "TABLICA",
        "PUCHAR"
      ]
    }
  ]
};

export function getZajacEncounter(floor = 1, variant = null, heroId = null) {
  const hid = heroId ? String(heroId).toLowerCase() : null;
  if (hid && HERO_ZAJAC_SETS[hid]) {
    const sets = Array.isArray(HERO_ZAJAC_SETS[hid]) ? HERO_ZAJAC_SETS[hid] : [HERO_ZAJAC_SETS[hid]];
    const selectedIdx = (variant !== null && variant >= 0 && variant < sets.length)
      ? variant
      : Math.floor(Math.random() * sets.length);
    const data = sets[selectedIdx];
    return {
      type: 'hare_wordsearch',
      titlePl: data.titlePl,
      subtitlePl: data.subtitlePl,
      icon: './assets/Postacie/Zajac.png',
      enemyName: 'Zając',
      enemyMaxHp: 20,
      enemyDamage: 2,
      descriptionPl: data.descriptionPl,
      words: [...data.words]
    };
  }
  const f = Math.max(1, Math.min(5, Number(floor) || 1));
  const pool = ZAJAC_SETS_BY_FLOOR[f] || ZAJAC_SETS_BY_FLOOR[1];
  const idx = (variant !== null && variant >= 0 && variant < pool.length)
    ? variant
    : Math.floor(Math.random() * pool.length);
  const data = pool[idx];
  return {
    type: 'hare_wordsearch',
    titlePl: data.titlePl,
    subtitlePl: data.subtitlePl,
    icon: './assets/Postacie/Zajac.png',
    enemyName: 'Zając',
    enemyMaxHp: 20,
    enemyDamage: 2,
    descriptionPl: data.descriptionPl,
    words: [...data.words]
  };
}

export const ZAJAC_FLOOR_ENCOUNTERS = {
  1: getZajacEncounter(1, 0),
  2: getZajacEncounter(2, 0),
  3: getZajacEncounter(3, 0),
  4: getZajacEncounter(4, 0),
  5: getZajacEncounter(5, 0)
};
