// Tabele poziomów (Levels 1–6), Limit Break oraz mechaniki klasowe wzorowane na Dicey Dungeons:
// - Wspólna krzywa Max HP (wszystkie 6 postaci): 24 → 28 → 32 → 36 → 40 → 44
// - Wspólny Limit Break HP: 8 → 9 → 10 → 12 → 13 → 13
// - Wymagany EXP na kolejny poziom: 2 → 4 → 7 → 14 → 18 → MAX
// - Progresja DMG i nagród za poziom:
//   * Warrior, Thief, Inventor, Jester (wspólna tabela progresu):
//     DMG: 2 → 3 → 3 → 4 → 4 → 5
//     Nagrody za poziom (Additional Level-Up Reward):
//       Lvl 1→2: Extra DMG (2 → 3)
//       Lvl 2→3: ekwipunek
//       Lvl 3→4: Extra DMG (3 → 4)
//       Lvl 4→5: ekwipunek
//       Lvl 5→6: Extra DMG (4 → 5)
//   * Witch (własna tabela progresu):
//     DMG: 3 → 3 → 3 → 3 → 4 → 5
//     Nagrody: Zaklęcia (Burning Light, Electric Shock, Ice Shard, Sonic Wave), Upgraded/Prepared Spell Slot, ekwipunek
//   * Robot (własna tabela progresu CPU):
//     CPU: 9 → 11 → 11 → 13 → 13 → 15 (DMG bazowe: 2 → 3 → 3 → 4 → 4 → 5)
//     Nagrody: na zmianę +2 CPU oraz ekwipunek

export const LEVEL_HP_TABLE = {
  1: 24,
  2: 28,
  3: 32,
  4: 36,
  5: 40,
  6: 44
};

export const LEVEL_LIMIT_BREAK_HP = {
  1: 8,
  2: 9,
  3: 10,
  4: 12,
  5: 13,
  6: 13
};

export const EXP_TO_NEXT_LEVEL = {
  1: 2,
  2: 4,
  3: 7,
  4: 14,
  5: 18,
  6: 999
};

// Wspólna tabela DMG dla: Warrior, Thief, Inventor, Jester (oraz bazowego ataku Robota)
export const STANDARD_DMG_BY_LEVEL = {
  1: 2,
  2: 3,
  3: 3,
  4: 4,
  5: 4,
  6: 5
};

// Alias dla zachowania kompatybilności
export const THIEF_INVENTOR_DMG_BY_LEVEL = STANDARD_DMG_BY_LEVEL;

export const ROBOT_CPU_BY_LEVEL = {
  1: 9,
  2: 11,
  3: 11,
  4: 13,
  5: 13,
  6: 15
};

export const WITCH_DMG_BY_LEVEL = {
  1: 3,
  2: 3,
  3: 3,
  4: 3,
  5: 4,
  6: 5
};

export const WITCH_SPELLS = [
  {
    id: 'burning_light',
    name: 'Płonący Blask (Burning Light)',
    icon: '🔥',
    color: '#f97316',
    desc: '+2 obrażeń od ognia przy poprawnej odpowiedzi'
  },
  {
    id: 'electric_shock',
    name: 'Wstrząs Elektryczny (Electric Shock)',
    icon: '⚡',
    color: '#eab308',
    desc: 'Porażenie: +3 obrażeń przy szybkim trafieniu'
  },
  {
    id: 'ice_shard',
    name: 'Lodowy Odłamek (Ice Shard)',
    icon: '❄️',
    color: '#38bdf8',
    desc: 'Zamrożenie zegara: +4s czasu w następnej turze'
  },
  {
    id: 'sonic_wave',
    name: 'Fala Dźwiękowa (Sonic Wave)',
    icon: '🌊',
    color: '#a855f7',
    desc: 'Ogłuszenie: zmniejsza obrażenia bossa o 1 HP'
  }
];

export const ROBOT_JACKPOT_BONUSES = [
  {
    id: 'lucky_shot',
    name: 'Szczęśliwy strzał!',
    icon: '🎯',
    desc: '+5 dodatkowych obrażeń dla wroga!'
  },
  {
    id: 'regenerate',
    name: 'Zregeneruj!',
    icon: '💚',
    desc: 'Regenerujesz +3 HP!'
  },
  {
    id: 'extra_gear',
    name: 'Dodatkowe akcesorium!',
    icon: '⚙️',
    desc: '+1 DMG do końca tej walki!'
  }
];

export function getHeroLevelStats(characterClass = 'Warrior', level = 1) {
  const lvl = Math.max(1, Math.min(6, Number(level) || 1));
  const cls = (characterClass || 'Warrior').toLowerCase();
  const maxHp = LEVEL_HP_TABLE[lvl] || 24;
  const limitBreakHp = LEVEL_LIMIT_BREAK_HP[lvl] || 8;
  const xpToNext = EXP_TO_NEXT_LEVEL[lvl] || 2;

  let baseDamage = STANDARD_DMG_BY_LEVEL[lvl] || 2; // 2 → 3 → 3 → 4 → 4 → 5
  let maxCpu = null;
  let bonusTimeSec = 0;

  if (cls.includes('witch')) {
    baseDamage = WITCH_DMG_BY_LEVEL[lvl] || 3; // 3 → 3 → 3 → 3 → 4 → 5
  } else if (cls.includes('robot')) {
    baseDamage = STANDARD_DMG_BY_LEVEL[lvl] || 2;
    maxCpu = ROBOT_CPU_BY_LEVEL[lvl] || 9; // 9 → 11 → 11 → 13 → 13 → 15
  } else if (cls.includes('inventor')) {
    baseDamage = STANDARD_DMG_BY_LEVEL[lvl] || 2;
    bonusTimeSec = 5; // Umiejętność Wynalazczyni: +5s w grach czasowych!
  } else {
    // Warrior, Thief, Jester -> dokładna progresja DMG jak Thief: 2 → 3 → 3 → 4 → 4 → 5
    baseDamage = STANDARD_DMG_BY_LEVEL[lvl] || 2;
  }

  return {
    level: lvl,
    maxHp,
    limitBreakHp,
    xpToNext,
    baseDamage,
    maxCpu,
    bonusTimeSec
  };
}
