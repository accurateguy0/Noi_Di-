// Generator plansz gry Nói Đi! (w stylu Dicey Dungeons / Slay the Spire)
// Dynamiczny, zróżnicowany układ 11-19 pól z proceduralnymi odgałęzieniami (losowy wybór liczby pól i tras)
// Zero powtórzeń tematycznych: zawartość węzłów, skrzynie wiedzy i zadania przeciwników
// są ściśle powiązane z wybranym EPIZODEM (1–8) i PIĘTREM (1–5).

import { SZCZENIAK_FLOOR_ENCOUNTERS, getSzczeniakEncounter } from './characters/szczeniak.js';
import { JEZ_FLOOR_ENCOUNTERS, getJezEncounter } from './characters/jez.js';
import { ZAJAC_FLOOR_ENCOUNTERS, getZajacEncounter } from './characters/zajac.js';
import { ZABA_FLOOR_ENCOUNTERS, getZabaEncounter } from './characters/zaba.js';
import { KOT_FLOOR_WARMUPS, getCatWarmup } from './characters/kot.js';
import { OLEK_FLOOR_ENCOUNTERS } from './characters/olek.js';
import { NAUCZYCIELKA_FLOOR_ENCOUNTERS } from './characters/nauczycielka.js';
import { PIELEGNIARKA_ENCOUNTER, getPielegniarkaEncounter } from './characters/pielegniarka.js';
import { LEKARZ_ENCOUNTERS } from './characters/lekarz.js';
import { WUEFISTA_ENCOUNTER } from './characters/wuefista.js';
import { MYSLI_ENCOUNTERS, getMysliEncounter } from './characters/mysli.js';
import { KOLEZANKA_ENCOUNTERS, getKolezankaEncounter } from './characters/kolezanka.js';
import { MALA_KALAMARNICA_ENCOUNTERS, getMalaKalamarnicaEncounter } from './characters/mala_kalamarnica.js';
import { GLOSNY_PTAK_ENCOUNTERS, getGlosnyPtakEncounter } from './characters/glosny_ptak.js';
import { SPIEWACZKA_ENCOUNTERS, getSpiewaczkaEncounter } from './characters/spiewaczka.js';
import { SZKIELETON_ENCOUNTERS, getSzkieletonEncounter } from './characters/szkieleton.js';
import { getFloorChestCards } from './curriculumFloorData.js';
import { getCandidateBossEncounters } from './heroCurriculumEncounters.js';
import { getStoryEpisode } from './storyData.js';

/**
 * Generuje zróżnicowaną planszę szkolną o losowej liczbie 11-19 pól w układzie izometrycznym
 * @param {number} floorNumber - Numer piętra (1-5)
 * @param {number} episodePip - Numer epizodu (1-8)
 * @param {string} heroId - Identyfikator bohatera (warrior, thief, robot, inventor, witch, jester)
 */
export function generateIsometric19NodeFloor(floorNumber, episodePip = 1, heroId = 'warrior') {
  const f = Math.max(1, Math.min(5, Number(floorNumber) || 1));
  const pip = Math.max(1, Math.min(8, Number(episodePip) || 1));

  const shuffle = (arr) => {
    const res = [...arr];
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }
    return res;
  };

  // 1. Nazwy i motywy pięter w zależności od epizodu:
  const episodeFloorTitles = {
    1: {
      1: 'Korytarz i Klasa (Powitania)',
      2: 'Ławka Szkolna (Piórnik i Liczby)',
      3: 'Gabinet Medyczny (Samopoczucie)',
      4: 'Stołówka Szkolna (Posiłki)',
      5: 'Boisko Szkolne (Czas i WF)'
    },
    2: {
      1: 'Klasa 4: Części Mowy (Rzeczownik i Czasownik)',
      2: 'Klasa 4: Ławka Ortograficzna (Ó/U, Rz/Ż, Ch/H)',
      3: 'Klasa 4: Gabinet Przypadków (Biernik i Narzędnik)',
      4: 'Klasa 4: Aula (Krótkie Formy Użytkowe)',
      5: 'Klasa 4: Boisko (Liczba Mnoga i Rodzaje)'
    },
    3: {
      1: 'Klasa 5: Korytarz (Przysłówek i Liczebnik)',
      2: 'Klasa 5: Klasa (Składnia: Podmiot i Orzeczenie)',
      3: 'Klasa 5: Gabinet (Przydawka i Okoliczniki)',
      4: 'Klasa 5: Biblioteka (Plan Wydarzeń i Opis)',
      5: 'Klasa 5: Sala Gimnastyczna (Mity i Legendy)'
    },
    4: {
      1: 'Klasa 6: Korytarz (Zaimki i Spójniki)',
      2: 'Klasa 6: Pracownia Słowotwórstwa (Formanty i Rdzeń)',
      3: 'Klasa 6: Gabinet Badań (Rodzina Wyrazów i Oboczności)',
      4: 'Klasa 6: Aula (Pisownia NIE z częściami mowy)',
      5: 'Klasa 6: Sala Turniejowa (Gatunki Literackie)'
    },
    5: {
      1: 'Klasa 7: Korytarz (Imiesłowy Przymiotnikowe)',
      2: 'Klasa 7: Sala Poetycka (Metafory i Personifikacje)',
      3: 'Klasa 7: Gabinet (Zdania Złożone Podrzędnie)',
      4: 'Klasa 7: Aula (Środki Stylistyczne i Apostrofa)',
      5: 'Klasa 7: Sala Debat (Przemówienie i Argumentacja)'
    },
    6: {
      1: 'Klasa 8: Korytarz CKE (Mowa Zależna i Niezależna)',
      2: 'Klasa 8: Pracownia Błędów (Pleonazmy i Zapożyczenia)',
      3: 'Klasa 8: Gabinet Analityczny (Style Językowe)',
      4: 'Klasa 8: Biblioteka CKE (Parafraza i Streszczenie)',
      5: 'Klasa 8: Sala Finałowa CKE (Arkusz i Trening Czasu)'
    },
    7: {
      1: 'Lektury CKE: Puszcza Balladyny (Zbrodnia i Maliny)',
      2: 'Lektury CKE: Kaplica Cmentarna (Dziady cz. II)',
      3: 'Lektury CKE: Asteroida B-612 (Mały Książę i Lis)',
      4: 'Lektury CKE: Barykady Warszawy (Kamienie na szaniec)',
      5: 'Lektury CKE: Londyn w Noc Wigilijną (Scrooge i Duchy)'
    },
    8: {
      1: 'Formy Wypowiedzi: Architekt Rozprawki (Teza i Wstęp)',
      2: 'Formy Wypowiedzi: Kuźnia Argumentów z Lektur',
      3: 'Formy Wypowiedzi: Warsztat Opowiadania (Zwrot Akcji)',
      4: 'Formy Wypowiedzi: Scena Dialogowa (Pauzy Myślników)',
      5: 'Formy Wypowiedzi: Finałowa Mowa i Świadectwo Sukcesu'
    }
  };

  const themeName = episodeFloorTitles[pip]?.[f] || `Plansza ${f} (Epizod ${pip})`;

  // 2. Dobór przeciwników i postaci fabularnych dla danego piętra i epizodu:
  let hubMain = null;
  let hubSecondary = null;
  let realEnemyPool = [];
  let catWarmup = null;

  // Dedykowany węzeł Kotka Pomocnika na każdym piętrze 1–5 (trening profilowany pod wybranego bohatera)
  catWarmup = getCatWarmup(f, heroId);

  // Dedykowany zestaw wrogów z praktycznymi pytaniami dopasowanymi do charakteru bohatera (Wojownik, Złodziej, Robot, Wynalazca, Wiedźma, Błazen)
  const heroEnemies = [
    getKolezankaEncounter(null, heroId),
    getMysliEncounter(null, heroId),
    getGlosnyPtakEncounter(null, heroId),
    getSzczeniakEncounter(f, null, heroId),
    getJezEncounter(f, null, heroId),
    getZajacEncounter(f, null, heroId),
    getMalaKalamarnicaEncounter(null, heroId),
    getZabaEncounter(f, null, heroId)
  ];

  let generalPool = [];

  if (f === 1) {
    hubMain = NAUCZYCIELKA_FLOOR_ENCOUNTERS[1] || NAUCZYCIELKA_FLOOR_ENCOUNTERS.default;
    hubSecondary = OLEK_FLOOR_ENCOUNTERS[1] || OLEK_FLOOR_ENCOUNTERS.default;
    generalPool = [
      getKolezankaEncounter(0),
      getKolezankaEncounter(1),
      ...(SZCZENIAK_FLOOR_ENCOUNTERS[1] || []),
      ...(JEZ_FLOOR_ENCOUNTERS[1] || []),
      getZajacEncounter(1, 0),
      getZajacEncounter(1, 1),
      getMalaKalamarnicaEncounter(0),
      getMalaKalamarnicaEncounter(1),
      getZabaEncounter(1, 0),
      getGlosnyPtakEncounter(0),
      getGlosnyPtakEncounter(1),
      getMysliEncounter(0)
    ];
  } else if (f === 2) {
    hubMain = OLEK_FLOOR_ENCOUNTERS[2] || OLEK_FLOOR_ENCOUNTERS[1];
    hubSecondary = NAUCZYCIELKA_FLOOR_ENCOUNTERS[2] || NAUCZYCIELKA_FLOOR_ENCOUNTERS.default;
    generalPool = [
      getKolezankaEncounter(1),
      getKolezankaEncounter(2),
      getSzkieletonEncounter(0),
      getSzkieletonEncounter(1),
      getGlosnyPtakEncounter(1),
      getGlosnyPtakEncounter(2),
      ...(SZCZENIAK_FLOOR_ENCOUNTERS[2] || []),
      ...(JEZ_FLOOR_ENCOUNTERS[2] || []),
      getZajacEncounter(2, 0),
      getZajacEncounter(2, 1),
      getMalaKalamarnicaEncounter(1),
      getZabaEncounter(2, 0),
      getMysliEncounter(1)
    ];
  } else if (f === 3) {
    hubMain = getPielegniarkaEncounter();
    hubSecondary = LEKARZ_ENCOUNTERS.default;
    generalPool = [
      getMysliEncounter(2),
      getMysliEncounter(3),
      getSzkieletonEncounter(1),
      getSzkieletonEncounter(2),
      ...(JEZ_FLOOR_ENCOUNTERS[3] || []),
      ...(SZCZENIAK_FLOOR_ENCOUNTERS[3] || []),
      getZajacEncounter(3, 0),
      getZajacEncounter(3, 1),
      getKolezankaEncounter(3),
      getKolezankaEncounter(4),
      getGlosnyPtakEncounter(3),
      getZabaEncounter(3, 0),
      getMalaKalamarnicaEncounter(2)
    ];
  } else if (f === 4) {
    hubMain = getSpiewaczkaEncounter(0);
    hubSecondary = OLEK_FLOOR_ENCOUNTERS[4] || OLEK_FLOOR_ENCOUNTERS.default;
    generalPool = [
      getKolezankaEncounter(4),
      getKolezankaEncounter(5),
      getGlosnyPtakEncounter(4),
      getGlosnyPtakEncounter(5),
      getMalaKalamarnicaEncounter(3),
      getMalaKalamarnicaEncounter(4),
      getSpiewaczkaEncounter(1),
      getSpiewaczkaEncounter(2),
      ...(SZCZENIAK_FLOOR_ENCOUNTERS[4] || []),
      ...(JEZ_FLOOR_ENCOUNTERS[4] || []),
      getZajacEncounter(4, 0),
      getZajacEncounter(4, 1),
      getZabaEncounter(4, 0),
      getMysliEncounter(4),
      getMysliEncounter(5)
    ];
  } else {
    hubMain = WUEFISTA_ENCOUNTER;
    hubSecondary = OLEK_FLOOR_ENCOUNTERS[5] || OLEK_FLOOR_ENCOUNTERS.default;
    generalPool = [
      getMysliEncounter(6),
      getMysliEncounter(7),
      getZabaEncounter(5, 0),
      getZajacEncounter(5, 0),
      getZajacEncounter(5, 1),
      ...(SZCZENIAK_FLOOR_ENCOUNTERS[5] || []),
      ...(JEZ_FLOOR_ENCOUNTERS[5] || []),
      getSzkieletonEncounter(2),
      getSzkieletonEncounter(3),
      getGlosnyPtakEncounter(6),
      getGlosnyPtakEncounter(7),
      getSpiewaczkaEncounter(2),
      getSpiewaczkaEncounter(3),
      getKolezankaEncounter(6),
      getKolezankaEncounter(7)
    ];
  }

  // Ustalamy bossa bieżącego epizodu, aby wykluczyć go z puli zwykłych wrogów na planszach 1–5:
  const storyEp = getStoryEpisode(heroId, pip);
  const currentEpisodeBossId = storyEp?.bossId || null;
  const allowedRegularBosses = getCandidateBossEncounters(currentEpisodeBossId);

  // Gwarantujemy 2-3 wrogów z dedykowanymi praktycznymi pytaniami postaci,
  // a pozostałe miejsca wypełniamy ogólną podstawą programową piętra oraz dopuszczonymi bossami z nieelitarnymi statystykami:
  const guaranteedHero = shuffle(heroEnemies).slice(0, 3);
  const remainingHero = heroEnemies.filter(e => !guaranteedHero.includes(e));
  const otherEnemies = shuffle([...remainingHero, ...generalPool, ...allowedRegularBosses]);
  const shuffledPool = [...guaranteedHero, ...otherEnemies];

  // 3. LICZBA PRZECIWNIKÓW I ROZMIAR PLANSZY (13–17 pól):
  // Dokładna liczba PRAWDZIWYCH przeciwników na piętrach 1–5: [7, 8, 9, 10, 11] = 45 przeciwników łącznie!
  // Kotek Pomocnik (Kotka Bolo) NIE daje żadnego EXP (xp = 0).
  // Dlatego gdy na planszy jest kotek, dodajemy DEDYKOWANE pole dla kotka (+1 węzeł),
  // dzięki czemu liczba prawdziwych wrogów dających po 1 EXP wynosi dokładnie [7, 8, 9, 10, 11].
  // Bez skalowania EXP (dokładnie 1 EXP za wroga) pokonanie wszystkich przeciwników
  // daje 45 EXP, czyli dokładnie tyle, ile potrzeba do wbicia Poziomu 6 (2 + 4 + 7 + 14 + 18 = 45 EXP).
  const realEnemiesByFloor = [7, 8, 9, 10, 11];
  const realEnemyCount = realEnemiesByFloor[f - 1] || 9;
  const hasCat = Boolean(catWarmup);
  const catCount = hasCat ? 1 : 0;
  const utilityCount = 5; // 5 pól niebędących wrogami: start, skrzynia, kramik, jabłko, schody
  const targetCount = realEnemyCount + catCount + utilityCount;

  // Ustalenie liczby kolumn pośrednich w zależności od targetCount:
  // targetCount 11-12: 4 kolumny pośrednie
  // targetCount 13-15: 5 kolumn pośrednich
  // targetCount 16-19: 6 kolumn pośrednich
  const numMidCols = targetCount <= 12 ? 4 : (targetCount <= 15 ? 5 : 6);
  let remaining = targetCount - 2; // odejmujemy węzeł startowy i wyjściowy

  // Inicjalizujemy kolumny pośrednie po 2 węzły każda
  const midCols = [];
  for (let i = 0; i < numMidCols; i++) midCols.push(2);
  remaining -= numMidCols * 2;

  // Rozdzielamy pozostałe węzły (dodajemy do 3 węzłów w kolumnie)
  let distIdx = 0;
  while (remaining > 0) {
    const colIdx = distIdx % numMidCols;
    if (midCols[colIdx] < 3) {
      midCols[colIdx]++;
      remaining--;
    }
    distIdx++;
    if (distIdx > 100) break; // bezpiecznik
  }

  const colCounts = [1, ...midCols, 1];
  const numCols = colCounts.length;

  // 4. Współrzędne węzłów z łagodnym jitterem izometrycznym
  const coords = [];
  const colNodes = [];
  let nodeCounter = 1;

  for (let c = 0; c < numCols; c++) {
    const count = colCounts[c];
    const nodesInThisCol = [];
    const xBase = 9 + (c / (numCols - 1)) * 82;
    const xJitter = (c === 0 || c === numCols - 1) ? 0 : Math.round((Math.random() - 0.5) * 3 * 10) / 10;
    const x = Math.round((xBase + xJitter) * 10) / 10;

    let yPositions = [];
    if (count === 1) {
      yPositions = [50 + Math.round((Math.random() - 0.5) * 4)];
    } else if (count === 2) {
      yPositions = [
        Math.round(31 + (Math.random() - 0.5) * 5),
        Math.round(69 + (Math.random() - 0.5) * 5)
      ];
    } else if (count === 3) {
      yPositions = [
        Math.round(23 + (Math.random() - 0.5) * 4),
        Math.round(50 + (Math.random() - 0.5) * 4),
        Math.round(77 + (Math.random() - 0.5) * 4)
      ];
    }

    for (let i = 0; i < count; i++) {
      const id = `b${f}_node_${nodeCounter++}`;
      const pt = { id, x, y: yPositions[i], col: c, rank: i };
      coords.push(pt);
      nodesInThisCol.push(pt);
    }
    colNodes.push(nodesInThisCol);
  }

  // 5. Generowanie krawędzi (pełna spójność grafu, brak wiszących węzłów)
  const edges = [];
  for (let c = 0; c < numCols - 1; c++) {
    const froms = colNodes[c];
    const tos = colNodes[c + 1];

    if (froms.length === 1) {
      froms.forEach(from => tos.forEach(to => edges.push([from.id, to.id])));
    } else if (tos.length === 1) {
      froms.forEach(from => tos.forEach(to => edges.push([from.id, to.id])));
    } else if (froms.length === 2 && tos.length === 2) {
      edges.push([froms[0].id, tos[0].id]);
      edges.push([froms[1].id, tos[1].id]);
      // Mostek krzyżowy w połowie planszy
      if (c === Math.floor(numCols / 2)) {
        edges.push([froms[0].id, tos[1].id]);
        edges.push([froms[1].id, tos[0].id]);
      }
    } else if (froms.length === 2 && tos.length === 3) {
      edges.push([froms[0].id, tos[0].id]);
      edges.push([froms[0].id, tos[1].id]);
      edges.push([froms[1].id, tos[1].id]);
      edges.push([froms[1].id, tos[2].id]);
    } else if (froms.length === 3 && tos.length === 2) {
      edges.push([froms[0].id, tos[0].id]);
      edges.push([froms[1].id, tos[0].id]);
      edges.push([froms[1].id, tos[1].id]);
      edges.push([froms[2].id, tos[1].id]);
    } else if (froms.length === 3 && tos.length === 3) {
      edges.push([froms[0].id, tos[0].id]);
      edges.push([froms[1].id, tos[1].id]);
      edges.push([froms[2].id, tos[2].id]);
      edges.push([froms[0].id, tos[1].id]);
      edges.push([froms[2].id, tos[1].id]);
    }
  }

  const outgoing = {};
  for (let i = 1; i <= coords.length; i++) {
    outgoing[`b${f}_node_${i}`] = [];
  }
  edges.forEach(([from, to]) => {
    if (outgoing[from]) outgoing[from].push(to);
  });

  // 6. Alokacja zawartości pól
  const totalNodes = coords.length;
  const slots = new Array(totalNodes).fill(null);

  // Węzeł początkowy
  slots[0] = {
    type: 'start',
    titlePl: `Start: ${themeName}`,
    icon: null,
    completed: true,
    descriptionPl: `Początek planszy! Piętro ${f} w Epizodzie ${pip}. Wybierz swoją ścieżkę!`
  };

  // Węzeł wyjściowy
  slots[totalNodes - 1] = {
    type: 'next_board',
    titlePl: f === 5 ? 'Drzwi na Piętro 6 (Arena Bossa)' : `Schody na Piętro ${f + 1}`,
    actionLabel: f === 5 ? 'PIĘTRO 6: ARENA BOSSA' : `PLANSZA ${f + 1}`,
    icon: f === 5 ? './assets/drzwi.png' : './assets/schody.png',
    descriptionPl: f === 5
      ? 'Finałowe przejście na Piętro 6, gdzie czeka Wielki Boss Epizodu!'
      : `Przejście na kolejne piętro szkoły (${f + 1})!`
  };

  // Kotek Pomocnik (Kotka Bolo) na polu 1 (rozgrzewka językowa, daje 0 EXP)
  if (hasCat) {
    slots[1] = {
      ...catWarmup,
      xp: 0
    };
  }

  // Skrzynia Wiedzy (pole 2) – dedykowane karty słownictwa z lektorem dla (f, pip)
  const floorChestCards = getFloorChestCards(f, pip);
  slots[2] = {
    type: 'chest',
    titlePl: `Skrzynia Wiedzy: ${themeName.split(':')[0]}`,
    icon: './assets/skrzynka.png',
    completed: false,
    customWords: floorChestCards,
    descriptionPl: `Otwórz skrzynię i odkryj 4 nowe pojęcia z programu Epizodu ${pip}!`
  };

  // Kramik Szkolny w centrum planszy
  const shopIdx = Math.floor(totalNodes / 2);
  slots[shopIdx] = {
    type: 'shop',
    titlePl: 'Kramik Szkolny',
    icon: './assets/kramik.png',
    descriptionPl: 'Drożdżówka (+8 HP) i Trampki (+1 Atak)!'
  };

  // Główna postać fabularna piętra (1 prawdziwy przeciwnik)
  slots[shopIdx + 1] = hubMain;

  // Druga postać fabularna (1 prawdziwy przeciwnik)
  if (totalNodes >= 13) {
    slots[totalNodes - 3] = hubSecondary;
  }

  // Jabłko regeneracyjne (przed schodami)
  slots[totalNodes - 2] = {
    type: 'apple',
    titlePl: 'Drugie Śniadanie',
    icon: './assets/apple.png',
    healAmount: 10,
    descriptionPl: 'Soczyste jabłko! Regeneruje +10 HP przed wejściem na schody.'
  };

  // Wypełnienie pozostałych wolnych miejsc prawdziwymi przeciwnikami z realEnemyPool
  let poolCursor = 0;
  for (let i = 0; i < totalNodes; i++) {
    if (!slots[i]) {
      slots[i] = shuffledPool[poolCursor % shuffledPool.length] || SZCZENIAK_FLOOR_ENCOUNTERS[1][0];
      poolCursor++;
    }
  }

  // 7. System EXP i finalizacja węzłów: każdy prawdziwy przeciwnik daje płaskie 1 EXP (bez skalowania), kotek 0 EXP
  const nodes = slots.map((data, idx) => {
    const nodeId = `b${f}_node_${idx + 1}`;
    const pt = coords[idx];
    const isUtility = ['start', 'apple', 'chest', 'shop', 'next_board', 'waypoint'].includes(data.type);
    const isCat = Boolean(
      data.type === 'cat_matching' ||
      data.type === 'cat_wheel' ||
      data.type === 'cat_anagram' ||
      data.enemyName === 'kot' ||
      data.enemyName === 'kotek' ||
      (data.titlePl && data.titlePl.toLowerCase().includes('kot')) ||
      (data.titlePl && data.titlePl.toLowerCase().includes('bolo'))
    );
    const isEnemy = !isUtility && !isCat;
    const xpReward = isEnemy ? 1 : 0;

    const resolvedEnemyName = data.enemyName || (() => {
      const t = (data.titlePl || '').toLowerCase();
      if (t.includes('kot') || t.includes('bolo')) return 'kotek';
      if (t.includes('nauczyciel')) return 'nauczycielka';
      if (t.includes('żaba') || t.includes('zaba')) return 'żaba';
      if (t.includes('zając') || t.includes('zajac')) return 'zając';
      if (t.includes('koleżank') || t.includes('kolezank')) return 'koleżanka';
      return data.titlePl ? data.titlePl.split(' ')[0] : 'Przeciwnik';
    })();

    return {
      id: nodeId,
      x: pt.x,
      y: pt.y,
      type: data.type,
      titlePl: data.titlePl,
      subtitlePl: data.subtitlePl,
      icon: data.icon,
      healAmount: data.healAmount,
      actionLabel: data.actionLabel,
      completed: idx === 0,
      blocksEdgesTo: (isEnemy || isCat) ? [...(outgoing[nodeId] || [])] : undefined,
      descriptionPl: data.descriptionPl,
      xp: xpReward,
      questions: data.questions,
      items: data.items,
      words: data.words,
      steps: data.steps,
      boxes: data.boxes,
      archetype: data.archetype,
      scenarios: data.scenarios,
      customWords: data.customWords,
      enemyName: resolvedEnemyName,
      arenaTheme: data.arenaTheme,
      isBoss: data.isBoss,
      bossId: data.bossId,
      challenges: data.challenges,
      enemyMaxHp: data.enemyMaxHp,
      enemyDamage: data.enemyDamage,
      baseTime: data.baseTime
    };
  });
  return { nodes, edges, themeName, totalCount: totalNodes };
}
