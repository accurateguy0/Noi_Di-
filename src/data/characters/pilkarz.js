// Piłkarz - Mistrz boiska i sali gimnastycznej
// Boss: 61 HP, bije po 5 HP | Zwykły: 30 HP, bije po 2 HP
// Czas: 10s na start, poprawna odpowiedź daje +5s!
// Minigry: Matching pairs, Quiz, Anagram, Match up.
// Tło: Sala Gimnastyczna / Boisko.

export const PILKARZ_ENCOUNTERS = {
  regular: {
    type: 'footballer_regular',
    titlePl: 'Piłkarz (30 HP, 2 dmg)',
    subtitlePl: 'Mecz i zwinność: Czas 10s (+5s za dobrą odp.)',
    icon: './assets/Postacie/Pilkarz.png',
    enemyName: 'Piłkarz',
    enemyMaxHp: 30,
    enemyDamage: 2,
    baseTime: 10,
    bonusPerCorrect: 5,
    descriptionPl: 'Piłkarz sprawdza twoją zwinność na orliku! Czas 10s, każda poprawna odp. dodaje +5s!'
  },
  boss: {
    type: 'boss_footballer',
    titlePl: 'BOSS: Piłkarz (61 HP, 5 dmg)',
    subtitlePl: 'Wielki Finał Sali Gimnastycznej: Egzamin Mistrza',
    icon: './assets/Postacie/Pilkarz.png',
    enemyName: 'Piłkarz',
    enemyMaxHp: 61,
    enemyDamage: 5,
    baseTime: 10,
    bonusPerCorrect: 5,
    descriptionPl: 'Finałowy Boss Szkoły! 61 HP, 5 obrażeń, 10s na odpowiedź (+5s za celny cios)!'
  }
};
