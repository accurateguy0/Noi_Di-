// Węzły i krawędzie plansz (Poziom 0 Szatnia – unikalne słownictwo i zadania dla każdego bohatera i epizodu!)
import { generateIsometric19NodeFloor } from './generateIsometricFloor.js';
import { getHeroFloor0Config } from './floor0EpisodesData.js';

/**
 * Zwraca kompletną, unikalną planszę Poziomu 0 (Szatnia) dopasowaną do bohatera i epizodu
 * @param {string} heroId - 'warrior', 'thief', 'robot', 'inventor', 'witch', 'jester'
 * @param {number} episodePip - 1 do 8
 */
export function getHeroFloor0Data(heroId = 'warrior', episodePip = 1) {
  const hid = String(heroId || 'warrior').toLowerCase();
  const pip = Math.max(1, Math.min(8, Number(episodePip) || 1));
  const config = getHeroFloor0Config(hid, pip);

  const prefixMap = {
    warrior: 'w',
    thief: 't',
    robot: 'r',
    inventor: 'inv',
    witch: 'wi',
    jester: 'j'
  };
  const pfx = prefixMap[hid] || 'w';

  const heroLabels = {
    warrior: 'Wojownika',
    thief: 'Złodzieja',
    robot: 'Robota',
    inventor: 'Wynalazczyni',
    witch: 'Czarownicy',
    jester: 'Błazna'
  };
  const heroName = heroLabels[hid] || 'Bohatera';

  const nodes = [
    {
      id: `${pfx}_node_chest`,
      x: 18, y: 46,
      type: 'chest',
      titlePl: `Szafka: ${heroName}`,
      subtitlePl: `Epizod ${pip}: Nowe Słownictwo`,
      icon: './assets/skrzynka.png',
      completed: false,
      descriptionPl: `Otwórz szafkę i poznaj 4 kluczowe pojęcia z programu Epizodu ${pip}!`,
      customWords: config.chestWords
    },
    {
      id: `${pfx}_node_start`,
      x: 34, y: 59,
      type: 'start',
      titlePl: `Wejście do Szatni`,
      subtitlePl: `Prolog Epizodu ${pip}`,
      icon: null,
      completed: true,
      descriptionPl: `Bohater zmienia obuwie i przygotowuje się do wyzwań Epizodu ${pip}.`
    },
    {
      id: `${pfx}_node_cat`,
      x: 52, y: 44,
      type: 'cat_wheel',
      titlePl: 'Kotek Pomocnik',
      subtitlePl: `Koło Zwrotów: Epizod ${pip}`,
      actionLabel: 'ZAKRĘĆ (A)',
      icon: './assets/Kotek_Pomoc.png',
      completed: false,
      blocksEdgesTo: [`${pfx}_node_exit`],
      descriptionPl: `Kotek Pomocnik sprawdza twoją wiedzę z Epizodu ${pip} przed wejściem na I Piętro!`,
      scenarios: config.catScenarios
    },
    {
      id: `${pfx}_node_apple`,
      x: 68, y: 64,
      type: 'apple',
      titlePl: 'Drugie Śniadanie',
      subtitlePl: 'Regeneracja (+8 HP)',
      healAmount: 8,
      icon: './assets/apple.png',
      completed: false,
      descriptionPl: 'Chrupiące jabłko dodaje sił przed wejściem na I Piętro (+8 HP)!'
    },
    {
      id: `${pfx}_node_exit`,
      x: 82, y: 48,
      type: 'next_board',
      titlePl: 'Schody na Piętro 1',
      subtitlePl: `I Piętro – Epizod ${pip}`,
      actionLabel: 'WEJDŹ NA PIĘTRO 1',
      icon: './assets/schody.png',
      completed: false,
      descriptionPl: `Wkraczasz na I Piętro szkoły w Epizodzie ${pip}!`
    }
  ];

  const edges = [
    [`${pfx}_node_chest`, `${pfx}_node_start`],
    [`${pfx}_node_start`, `${pfx}_node_cat`],
    [`${pfx}_node_cat`, `${pfx}_node_apple`],
    [`${pfx}_node_cat`, `${pfx}_node_exit`],
    [`${pfx}_node_apple`, `${pfx}_node_exit`]
  ];

  return {
    badgeText: config.badgeText,
    startNodeId: `${pfx}_node_start`,
    nodes,
    edges
  };
}

// Kompatybilność wsteczna:
export const HERO_FLOOR_0_DATA = {
  warrior: getHeroFloor0Data('warrior', 1),
  thief: getHeroFloor0Data('thief', 1),
  robot: getHeroFloor0Data('robot', 1),
  inventor: getHeroFloor0Data('inventor', 1),
  witch: getHeroFloor0Data('witch', 1),
  jester: getHeroFloor0Data('jester', 1)
};

export const INITIAL_BOARD_NODES = HERO_FLOOR_0_DATA.warrior.nodes;
export const BOARD_EDGES = HERO_FLOOR_0_DATA.warrior.edges;

// ==================== GENERATOR PLANSZ SZKOLNYCH (PLANSZE 1 - 5) ====================
// Układ diamentowo-izometryczny w stylu Dicey Dungeons (losowo 11–19 pól, powiązany z epizodem)
export const generateRandomizedFloorData = (floorNumber, episodePip = 1, heroId = 'warrior') =>
  generateIsometric19NodeFloor(floorNumber, episodePip, heroId);

// Domyślne instancje plansz 1-5
export const BOARD_1_NODES = generateRandomizedFloorData(1).nodes;
export const BOARD_1_EDGES = generateRandomizedFloorData(1).edges;
export const BOARD_2_NODES = generateRandomizedFloorData(2).nodes;
export const BOARD_2_EDGES = generateRandomizedFloorData(2).edges;
export const BOARD_3_NODES = generateRandomizedFloorData(3).nodes;
export const BOARD_3_EDGES = generateRandomizedFloorData(3).edges;
export const BOARD_4_NODES = generateRandomizedFloorData(4).nodes;
export const BOARD_4_EDGES = generateRandomizedFloorData(4).edges;
export const BOARD_5_NODES = generateRandomizedFloorData(5).nodes;
export const BOARD_5_EDGES = generateRandomizedFloorData(5).edges;

export const BOARD_6_NODES = [
  {
    id: 'b6_node_1',
    x: 12,
    y: 50,
    type: 'start',
    titlePl: 'Wejście na Arenę',
    icon: null,
    completed: true,
    descriptionPl: 'Finałowe piętro szkoły. Idziesz prosto w stronę środka sali.'
  },
  {
    id: 'b6_node_2',
    x: 30,
    y: 50,
    type: 'waypoint',
    titlePl: 'Parkiet',
    icon: null,
    completed: true,
    descriptionPl: 'Pusta przestrzeń parkietu.'
  },
  {
    id: 'b6_node_3',
    x: 48,
    y: 50,
    type: 'waypoint',
    titlePl: 'Środek sali',
    icon: null,
    completed: true,
    descriptionPl: 'Środek sali sportowej.'
  },
  {
    id: 'b6_node_4',
    x: 66,
    y: 50,
    type: 'waypoint',
    titlePl: 'Pole bramkowe',
    icon: null,
    completed: true,
    descriptionPl: 'Tuż przed bramką. Przed Tobą stoi Boss Epizodu!'
  },
  {
    id: 'b6_node_5',
    x: 84,
    y: 50,
    type: 'boss_footballer',
    titlePl: 'Boss Epizodu',
    subtitlePl: 'Wielki Finał Piętra',
    icon: './assets/Postacie/Pilkarz.png',
    completed: false,
    descriptionPl: 'Finałowy Boss wybranego Epizodu!'
  }
];

export const BOARD_6_EDGES = [
  ['b6_node_1', 'b6_node_2'],
  ['b6_node_2', 'b6_node_3'],
  ['b6_node_3', 'b6_node_4'],
  ['b6_node_4', 'b6_node_5']
];
