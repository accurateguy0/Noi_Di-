// Menedżer ładowania pięter / plansz gry, motywów oraz resetu planszy
import { musicManager } from '../audio/musicManager.js';
import { sound } from '../audio/sound.js';
import { playJaggedCurtainWipe } from '../ui/victoryScreen.js';
import { awardProgress as awardPlayerProgress } from '../ui/VictoryModals.js';
import { XP_REQUIRED_FOR_NEXT_LEVEL } from '../ui/HUD.js';
import {
  INITIAL_BOARD_NODES,
  BOARD_EDGES,
  BOARD_2_NODES,
  BOARD_2_EDGES,
  BOARD_3_NODES,
  BOARD_3_EDGES,
  BOARD_4_NODES,
  BOARD_4_EDGES,
  BOARD_5_NODES,
  BOARD_5_EDGES,
  BOARD_6_NODES,
  BOARD_6_EDGES,
  BOARD_7_NODES,
  BOARD_7_EDGES,
  CITY_1_NODES,
  CITY_1_EDGES,
  CITY_2_NODES,
  CITY_2_EDGES,
  CITY_3_NODES,
  CITY_3_EDGES,
  CITY_BOSS_NODES,
  CITY_BOSS_EDGES,
  MODULE_3_1_NODES,
  MODULE_3_1_EDGES,
  MODULE_3_2_NODES,
  MODULE_3_2_EDGES,
  MODULE_3_3_NODES,
  MODULE_3_3_EDGES,
  MODULE_3_BOSS_NODES,
  MODULE_3_BOSS_EDGES,
  MODULE_4_1_NODES,
  MODULE_4_1_EDGES,
  MODULE_4_2_NODES,
  MODULE_4_2_EDGES,
  MODULE_4_3_NODES,
  MODULE_4_3_EDGES,
  MODULE_4_BOSS_NODES,
  MODULE_4_BOSS_EDGES,
  MODULE_5_1_NODES,
  MODULE_5_1_EDGES,
  MODULE_5_2_NODES,
  MODULE_5_2_EDGES,
  MODULE_5_BOSS_NODES,
  MODULE_5_BOSS_EDGES,
  BOARD_3_WORDS,
  BOARD_4_WORDS,
  BOARD_5_WORDS,
  BOARD_6_WORDS,
  CITY_1_WORDS,
  CITY_2_WORDS,
  CITY_3_WORDS,
  MODULE_3_1_WORDS,
  MODULE_3_2_WORDS,
  MODULE_3_3_WORDS,
  MODULE_4_1_WORDS,
  MODULE_4_2_WORDS,
  MODULE_4_3_WORDS,
  MODULE_5_1_WORDS,
  MODULE_5_2_WORDS
} from '../data/vocabulary.js';

export class FloorManager {
  constructor(app) {
    this.app = app;
  }

  getFloorTheme(floor = this.app.currentFloor) {
    const f = String(floor);
    if (f.startsWith('city_') || ['8', '9', '10', '11'].includes(f) || f === 'city_boss' || f === 'miasto') {
      return 'city';
    }
    if (f.startsWith('m4_')) {
      return 'clinic';
    }
    if (f.startsWith('m5_')) {
      return 'room';
    }
    if (f.startsWith('m3_') || ['3', '4', '5', '6', '7'].includes(f)) {
      return 'school';
    }
    return 'szatnia';
  }

  loadFloor(floorNumber, options = {}) {
    const fromTestPicker = Boolean(options && (options.fromTestPicker || options.suppressIntro));
    this.app.currentFloor = floorNumber;
    musicManager.playBoardMusic(floorNumber);
    const theme = this.getFloorTheme(floorNumber);
    const arenaMount = document.getElementById('arena-mount');
    if (arenaMount) {
      arenaMount.className = `arena-mount hidden arena-theme-${theme} floor-${floorNumber}-arena`;
    }

    const nodesLayer = document.getElementById('board-nodes-layer');
    if (nodesLayer) {
      nodesLayer.innerHTML = '';
    }

    const badgeEl = document.getElementById('floor-indicator-badge');

    const mapContainer = document.getElementById('board-map');
    if (mapContainer) {
      mapContainer.classList.toggle('floor-5', floorNumber === 5);
      mapContainer.classList.toggle('floor-6', floorNumber === 6);
      mapContainer.classList.toggle('floor-7', floorNumber === 7);
      mapContainer.classList.toggle('floor-city_1', floorNumber === 'city_1' || floorNumber === 8);
      mapContainer.classList.toggle('floor-city_2', floorNumber === 'city_2' || floorNumber === 9);
      mapContainer.classList.toggle('floor-city_3', floorNumber === 'city_3' || floorNumber === 10);
      mapContainer.classList.toggle('floor-city_boss', floorNumber === 'city_boss' || floorNumber === 11);
      mapContainer.classList.toggle('floor-miasto', floorNumber === 'miasto' || floorNumber === 'city_1' || floorNumber === 'city_2' || floorNumber === 'city_3' || floorNumber === 'city_boss' || floorNumber === 8 || floorNumber === 9 || floorNumber === 10 || floorNumber === 11);
      mapContainer.classList.toggle('floor-m3_1', floorNumber === 'm3_1');
      mapContainer.classList.toggle('floor-m3_2', floorNumber === 'm3_2');
      mapContainer.classList.toggle('floor-m3_3', floorNumber === 'm3_3');
      mapContainer.classList.toggle('floor-m3_boss', floorNumber === 'm3_boss');
      mapContainer.classList.toggle('floor-m4_1', floorNumber === 'm4_1');
      mapContainer.classList.toggle('floor-m4_2', floorNumber === 'm4_2');
      mapContainer.classList.toggle('floor-m4_3', floorNumber === 'm4_3');
      mapContainer.classList.toggle('floor-m4_boss', floorNumber === 'm4_boss');
      mapContainer.classList.toggle('floor-m5_1', floorNumber === 'm5_1');
      mapContainer.classList.toggle('floor-m5_2', floorNumber === 'm5_2');
      mapContainer.classList.toggle('floor-m5_boss', floorNumber === 'm5_boss');
    }

    if (floorNumber === 'm5_1') {
      this.app.currentFloor = 'm5_1';
      this.app.nodes = MODULE_5_1_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_5_1_EDGES;
      this.app.currentNodeId = 'm5_1_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 5: Gejmer (Technologia) 💻';
      if (!this.app.m5_1_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM5_1NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm5_2') {
      this.app.currentFloor = 'm5_2';
      this.app.nodes = MODULE_5_2_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_5_2_EDGES;
      this.app.currentNodeId = 'm5_2_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 5: Piłkarz & Cwaniak (Trendy) ⚽';
      if (!this.app.m5_2_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM5_2NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm5_boss') {
      this.app.currentFloor = 'm5_boss';
      this.app.nodes = MODULE_5_BOSS_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_5_BOSS_EDGES;
      this.app.currentNodeId = 'm5_b_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 5: Boss Instagramerka 📱';
    } else if (floorNumber === 'city_boss' || floorNumber === 11) {
      this.app.currentFloor = 'city_boss';
      this.app.nodes = CITY_BOSS_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = CITY_BOSS_EDGES;
      this.app.currentNodeId = 'cb_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Wielki Finał: Zaułek Bossa Cwaniaka 🕶️';
    } else if (floorNumber === 'city_3' || floorNumber === 10) {
      this.app.currentFloor = 'city_3';
      this.app.nodes = CITY_3_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = CITY_3_EDGES;
      this.app.currentNodeId = 'c3_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Miasto 3: Komunikacja i Biletomat 🚏';

      if (!this.app.city3IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openCity3NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 'city_2' || floorNumber === 9) {
      this.app.currentFloor = 'city_2';
      this.app.nodes = CITY_2_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = CITY_2_EDGES;
      this.app.currentNodeId = 'c2_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Miasto 2: Zamawianie jedzenia 🥙';

      if (!this.app.city2IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openCity2NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 'city_1' || floorNumber === 8) {
      this.app.currentFloor = 'city_1';
      this.app.nodes = CITY_1_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = CITY_1_EDGES;
      this.app.currentNodeId = 'c1_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Miasto 1: Zakupy w Żabce / Biedronce 🛒';

      if (!this.app.city1IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openCity1NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 'm3_1') {
      this.app.currentFloor = 'm3_1';
      this.app.nodes = MODULE_3_1_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_3_1_EDGES;
      this.app.currentNodeId = 'm3_1_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 3: Zwroty Ratunkowe w Szkole 🙋';
      if (!this.app.m3_1_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM3_1NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm3_2') {
      this.app.currentFloor = 'm3_2';
      this.app.nodes = MODULE_3_2_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_3_2_EDGES;
      this.app.currentNodeId = 'm3_2_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 3: Przybory i Zadania Domowe ✏️';
      if (!this.app.m3_2_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM3_2NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm3_3') {
      this.app.currentFloor = 'm3_3';
      this.app.nodes = MODULE_3_3_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_3_3_EDGES;
      this.app.currentNodeId = 'm3_3_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 3: Plan Lekcji, Czas & WF 🏃';
      if (!this.app.m3_3_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM3_3NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm3_boss') {
      this.app.currentFloor = 'm3_boss';
      this.app.nodes = MODULE_3_BOSS_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_3_BOSS_EDGES;
      this.app.currentNodeId = 'm3_b_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 3: Egzamin Szkolny (Nauczycielka) 👩‍🏫';
    } else if (floorNumber === 'm4_1') {
      this.app.currentFloor = 'm4_1';
      this.app.nodes = MODULE_4_1_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_4_1_EDGES;
      this.app.currentNodeId = 'm4_1_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 4: Stany Fizyczne i Potrzeby 💧';
      if (!this.app.m4_1_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM4_1NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm4_2') {
      this.app.currentFloor = 'm4_2';
      this.app.nodes = MODULE_4_2_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_4_2_EDGES;
      this.app.currentNodeId = 'm4_2_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 4: Zdrowie i Dolegliwości 🩹';
      if (!this.app.m4_2_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM4_2NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm4_3') {
      this.app.currentFloor = 'm4_3';
      this.app.nodes = MODULE_4_3_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_4_3_EDGES;
      this.app.currentNodeId = 'm4_3_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 4: Emocje i Poziom Energii 🧠';
      if (!this.app.m4_3_IntroShown && !fromTestPicker) {
        setTimeout(() => this.openM4_3NewCardsModal(), 320);
      }
    } else if (floorNumber === 'm4_boss') {
      this.app.currentFloor = 'm4_boss';
      this.app.nodes = MODULE_4_BOSS_NODES.map(n => ({ ...n, blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined }));
      this.app.edges = MODULE_4_BOSS_EDGES;
      this.app.currentNodeId = 'm4_b_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Moduł 4: Centrum Zdrowia (Doktor Lekarz) 🩺';
    } else if (floorNumber === 7) {
      this.app.nodes = BOARD_7_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_7_EDGES;
      this.app.currentNodeId = 'b7_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 7: Wielki Finał – Boss Piłkarz ⚽';
    } else if (floorNumber === 6) {
      this.app.nodes = BOARD_6_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_6_EDGES;
      this.app.currentNodeId = 'b6_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 6: Opinie i Emocje (Przerwa)';

      if (!this.app.board6IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openBoard6NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 5) {
      this.app.nodes = BOARD_5_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_5_EDGES;
      this.app.currentNodeId = 'b5_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 5: Lekcja w klasie';

      if (!this.app.board5IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openBoard5NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 4) {
      this.app.nodes = BOARD_4_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_4_EDGES;
      this.app.currentNodeId = 'b4_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 4: Slang i Emocje';

      if (!this.app.board4IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openBoard4NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 3) {
      this.app.nodes = BOARD_3_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_3_EDGES;
      this.app.currentNodeId = 'b3_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 3: Rozmowa o grach';

      if (!this.app.board3IntroShown && !fromTestPicker) {
        setTimeout(() => {
          this.openBoard3NewCardsModal();
        }, 320);
      }
    } else if (floorNumber === 2) {
      this.app.nodes = BOARD_2_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_2_EDGES;
      this.app.currentNodeId = 'b2_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 2: Korytarz – Olek';
    } else {
      this.app.currentFloor = 1;
      this.app.nodes = INITIAL_BOARD_NODES.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = BOARD_EDGES;
      this.app.currentNodeId = 'node_2';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = '📍 Plansza 1: Szatnia';
    }
  }

  resetBoard(manualReset = false, targetFloor = null) {
    if (this.app.activeMinigame) {
      this.app.activeMinigame.destroy();
      this.app.activeMinigame = null;
    }
    const arenaMount = document.getElementById('arena-mount');
    if (arenaMount) {
      arenaMount.classList.add('hidden');
      arenaMount.innerHTML = '';
    }
    this.app.closeModal();

    if (manualReset) {
      this.loadFloor(1);
      this.app.player.level = 1;
      this.app.player.maxHp = 20;
      this.app.player.hp = 20;
      this.app.player.coins = 0;
      this.app.player.diceCount = 3;
      this.app.player.xp = 0;
      this.app.player.xpToNext = XP_REQUIRED_FOR_NEXT_LEVEL[1];
      this.app.player.bonusTimeSec = 0;
      this.app.player.bonusDamage = 0;
      this.app.player.flawlessCoinBonus = 0;
      this.app.player.score = 0;
      this.app.player.kebabs = 0;
      this.app.player.boughtSneakers = false;
      if (this.app.player.boughtShopItemIds) {
        this.app.player.boughtShopItemIds.clear();
      }
      this.app.board3IntroShown = false;
      this.app.board4IntroShown = false;
      this.app.board5IntroShown = false;
      this.app.board6IntroShown = false;
      this.app.board7IntroShown = false;
      this.app.city1IntroShown = false;
      this.app.city2IntroShown = false;
      this.app.city3IntroShown = false;
      this.app.cityBossIntroShown = false;
      this.app.m3_1_IntroShown = false;
      this.app.m3_2_IntroShown = false;
      this.app.m3_3_IntroShown = false;
      this.app.m4_1_IntroShown = false;
      this.app.m4_2_IntroShown = false;
      this.app.m4_3_IntroShown = false;
      this.app.m5_1_IntroShown = false;
      this.app.m5_2_IntroShown = false;
      this.app.playerPreferences = {};
      this.app.cityShoppingChoices = { items: 'bread_water', bag: 'yes_bag', payment: 'card' };
      this.app.cityFoodChoices = { dish: 'kebab', sauce: 'czosnkowy', size: 'L', dining: 'na_miejscu' };
      this.app.cityTicketChosen = { type: 'ulgowy', duration: '20', price: 1 };
      this.app.unlockedWordIds.clear();
    } else {
      const nextFloor = targetFloor !== null ? targetFloor : (this.app.currentFloor === 1 ? 2 : 1);
      this.loadFloor(nextFloor);
    }

    this.app.isWalking = false;
    this.app.hidePlayerBubbleImmediately();
    sound.playHeal();
    this.app.renderBoard();
    this.app.updateHUD();

    this.app.setBoardHint(
      manualReset
        ? '🔄 Plansza została zresetowana!'
        : 'Przeszedłeś na nowe piętro!'
    );
  }

  collectApple(node) {
    if (node.completed || !node.icon) return;
    node.completed = true;
    node.icon = null;
    const heal = node.healAmount || 8;
    this.app.player.hp = Math.min(this.app.player.maxHp, this.app.player.hp + heal);
    if (node.coinsGain) {
      this.app.player.coins += node.coinsGain;
    }
    sound.playHeal();
    sound.speakPolish('Smacznego!');
    const bubbleMsg = node.coinsGain
      ? `Zjedzone! 🍎 +${heal} HP i +${node.coinsGain} monet 🪙`
      : `Zjedzone! 🍎 +${heal} HP`;
    this.app.showTemporaryPlayerBubble(bubbleMsg);
    this.app.setBoardHint(`🍎 Zjadłeś jabłko! Odzyskano +${heal} HP${node.coinsGain ? ` oraz zebrano +${node.coinsGain} monet na bilet!` : '.'}`);
    this.app.updateHUD();
    this.app.renderBoard();
  }

  awardProgress(xpGain, coinsGain, scoreGain = 0, { damageTaken = 0 } = {}) {
    const result = awardPlayerProgress(this.app.player, xpGain, coinsGain, scoreGain, { damageTaken });
    this.app.updateHUD();
    return result;
  }

  // Okienka wprowadzające słownictwo
  openBoard3NewCardsModal() {
    openFloorNewCardsModal(this.app, 3, 'Piętro 3 (Gry)', BOARD_3_WORDS, 'Nowe karty gamingowe w Twojej Księdze Słów! 🎮📖');
  }

  openBoard4NewCardsModal() {
    openFloorNewCardsModal(this.app, 4, 'Piętro 4 (Slang)', BOARD_4_WORDS, 'Nowe karty slangowe w Twojej Księdze Słów! 🔥📖');
  }

  openBoard5NewCardsModal() {
    openFloorNewCardsModal(this.app, 5, 'Piętro 5 (Klasa)', BOARD_5_WORDS, 'Nowe karty szkolne w Twojej Księdze Słów! 🏫📖');
  }

  openBoard6NewCardsModal() {
    openFloorNewCardsModal(this.app, 6, 'Piętro 6 (Opinie i Emocje)', BOARD_6_WORDS, 'Nowe słowa opinii w Twojej Księdze Słów! 🔥📖');
  }

  openCity1NewCardsModal() {
    openFloorNewCardsModal(this.app, 'city_1', 'Miasto: Żabka / Biedronka', CITY_1_WORDS, 'Nowe słówka zakupowe w Twojej Księdze Słów! 🛒🥖');
  }

  openCity2NewCardsModal() {
    openFloorNewCardsModal(this.app, 'city_2', 'Miasto 2: Zamawianie jedzenia', CITY_2_WORDS, 'Nowe karty jedzenia i zwrotów w Twojej Księdze Słów! 🥙🍕');
  }

  openCity3NewCardsModal() {
    openFloorNewCardsModal(this.app, 'city_3', 'Miasto 3: Komunikacja i Biletomat', CITY_3_WORDS, 'Nowe karty komunikacji w Twojej Księdze Słów! 🚏🎟️');
  }

  openM3_1NewCardsModal() {
    this.app.m3_1_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm3_1', 'Moduł 3: Zwroty Ratunkowe', MODULE_3_1_WORDS, 'Nowe zwroty ratunkowe w Twojej Księdze Słów! 🙋📖');
  }

  openM3_2NewCardsModal() {
    this.app.m3_2_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm3_2', 'Moduł 3: Przybory i Brak Zadań', MODULE_3_2_WORDS, 'Nowe słówka przyborów szkolnych w Twojej Księdze Słów! ✏️📖');
  }

  openM3_3NewCardsModal() {
    this.app.m3_3_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm3_3', 'Moduł 3: Plan Lekcji & Czas', MODULE_3_3_WORDS, 'Plan lekcji i dni tygodnia dodane do Księgi! 📅📖');
  }

  openM4_1NewCardsModal() {
    this.app.m4_1_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm4_1', 'Moduł 4: Stany Fizyczne', MODULE_4_1_WORDS, 'Karty potrzeb fizycznych w Twojej Księdze Słów! 💧📖');
  }

  openM4_2NewCardsModal() {
    this.app.m4_2_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm4_2', 'Moduł 4: Zdrowie i Ból', MODULE_4_2_WORDS, 'Karty zdrowia i dolegliwości dodane do Księgi! 🩺📖');
  }

  openM4_3NewCardsModal() {
    this.app.m4_3_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm4_3', 'Moduł 4: Emocje i Energia', MODULE_4_3_WORDS, 'Karty emocji w Twojej Księdze Słów! 🧠📖');
  }

  openM5_1NewCardsModal() {
    this.app.m5_1_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm5_1', 'Moduł 5: Autoprezentacja & Technologia', MODULE_5_1_WORDS, 'Karty tożsamości i sprzętu dodane do Księgi! 💻📖');
  }

  openM5_2NewCardsModal() {
    this.app.m5_2_IntroShown = true;
    openFloorNewCardsModal(this.app, 'm5_2', 'Moduł 5: Piłka Nożna & Trendy', MODULE_5_2_WORDS, 'Karty futbolu i popkultury dodane do Księgi! ⚽📖');
  }
}
