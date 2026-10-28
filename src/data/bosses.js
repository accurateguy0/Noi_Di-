// Rejestr wszystkich bossów gry (statystyki ustalone przez autora gry).
// Każdy boss walczy na 6. piętrze epizodu – który boss, zależy od bohatera i epizodu (storyData.js).

import {
  CWANIAK_CHALLENGES,
  MODULE_3_BOSS_CHALLENGES,
  MODULE_4_BOSS_CHALLENGES,
  MODULE_5_BOSS_CHALLENGES
} from './dialogSteps.js';
import { SMOK_CHALLENGES } from './characters/smok.js';
import { SZKIELETON_BOSS_CHALLENGES } from './characters/szkieleton.js';
import { SILACZKA_CHALLENGES } from './characters/silaczka.js';
import { DYREKTORKA_CHALLENGES } from './characters/dyrektorka.js';
import { PROFESOR_CHALLENGES } from './characters/profesor.js';

// game: 'footballer' = BossFootballerGame, 'generic' = BossCwaniakGame (quiz / match up / sorting)
export const BOSSES = {
  szkieleton: {
    id: 'szkieleton', name: 'Szkieleton', hp: 50, dmg: 3, game: 'generic',
    avatar: './assets/Postacie/szkieleton.png', arenaClass: 'szkieleton-arena', arena: 2,
    title: 'BOSS: SZKIELETON (SALA BIOLOGICZNA)', challenges: SZKIELETON_BOSS_CHALLENGES
  },
  profesor: {
    id: 'profesor', name: 'Profesor', hp: 56, dmg: 2, game: 'generic',
    avatar: './assets/Postacie/Profesor.png', arenaClass: 'profesor-arena', arena: 2,
    title: 'BOSS: PROFESOR (WIEDZA TAJEMNA)', challenges: PROFESOR_CHALLENGES
  },
  pilkarz: {
    id: 'pilkarz', name: 'Piłkarz', hp: 61, dmg: 5, game: 'footballer',
    avatar: './assets/Postacie/Pilkarz.png', arena: 1,
    title: 'BOSS: PIŁKARZ (WIELKI MECZ)'
  },
  lekarz: {
    id: 'lekarz', name: 'Lekarz', hp: 62, dmg: 4, game: 'generic',
    avatar: './assets/Postacie/Lekarz.png', arenaClass: 'lekarz-arena', arena: 4,
    title: 'BOSS: DOKTOR LEKARZ (CENTRUM ZDROWIA)', challenges: MODULE_4_BOSS_CHALLENGES
  },
  smok: {
    id: 'smok', name: 'Smok', hp: 68, dmg: 4, game: 'generic',
    avatar: './assets/Postacie/smok.png', arenaClass: 'smok-arena', arena: 5,
    title: 'BOSS: SMOK (JEDYNY SMOK W GRZE)', challenges: SMOK_CHALLENGES
  },
  nauczycielka: {
    id: 'nauczycielka', name: 'Nauczycielka', hp: 70, dmg: 2, game: 'generic',
    avatar: './assets/Postacie/Nauczycielka.png', arenaClass: 'nauczycielka-arena', arena: 3,
    title: 'BOSS: NAUCZYCIELKA (EGZAMIN SZKOLNY)', challenges: MODULE_3_BOSS_CHALLENGES
  },
  cwaniak: {
    id: 'cwaniak', name: 'Cwaniak', hp: 70, dmg: 3, game: 'generic',
    avatar: './assets/Postacie/Cwaniak.png', arenaClass: 'cwaniak-arena', arena: 2,
    title: 'BOSS: CWANIAK (MISTRZ MIASTA)', challenges: CWANIAK_CHALLENGES
  },
  dyrektorka: {
    id: 'dyrektorka', name: 'Dyrektorka', hp: 70, dmg: 5, game: 'generic',
    avatar: './assets/Postacie/dyrektorka.png', fallbackAvatar: './assets/Postacie/Nauczycielka.png',
    arenaClass: 'dyrektorka-arena', arena: 3,
    title: 'BOSS: DYREKTORKA (GABINET DYREKTORA)', challenges: DYREKTORKA_CHALLENGES
  },
  silaczka: {
    id: 'silaczka', name: 'Siłaczka', hp: 74, dmg: 4, game: 'generic',
    avatar: './assets/Postacie/Silaczka.png', arenaClass: 'silaczka-arena', arena: 1,
    title: 'BOSS: SIŁACZKA (SZKOLNA SIŁOWNIA)', challenges: SILACZKA_CHALLENGES
  },
  instagramerka: {
    id: 'instagramerka', name: 'Instagramerka', hp: 77, dmg: 5, game: 'generic',
    avatar: './assets/Postacie/Instagramerka.png', arenaClass: 'instagramerka-arena', arena: 5,
    title: 'BOSS: INSTAGRAMERKA (CZARODZIEJKA TRENDÓW)', challenges: MODULE_5_BOSS_CHALLENGES
  }
};

export function getBoss(bossId) {
  return BOSSES[bossId] || BOSSES.pilkarz;
}

// Niektóre starsze zestawy pytań używają pola `promptPl` zamiast `prompt`
export function normalizeChallenges(list = []) {
  return list.map((c) => ({ ...c, prompt: c.prompt || c.promptPl || '' }));
}
