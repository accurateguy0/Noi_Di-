// Główny kontroler gry edukacyjnej "Nói Đi! - Szkolne Lochy (Dicey Dungeons + Wordwall)"
// Poziom A0 dla 13-letniego ucznia z Wietnamu
// Temat: Powitania i pożegnania na korytarzu (siema, elo, nara, co tam)

import {
  INITIAL_BOARD_NODES,
  BOARD_EDGES,
  MODULE_3_1_WORDS,
  MODULE_3_2_WORDS,
  MODULE_3_3_WORDS,
  MODULE_4_1_WORDS,
  MODULE_4_2_WORDS,
  MODULE_4_3_WORDS,
  MODULE_5_1_WORDS,
  MODULE_5_2_WORDS
} from './data/vocabulary.js';

import { sound } from './audio/sound.js';
import { playJaggedCurtainWipe } from './ui/victoryScreen.js';
import { musicManager } from './audio/musicManager.js';
import { HUDManager, MAX_PLAYER_LEVEL, XP_REQUIRED_FOR_NEXT_LEVEL } from './ui/HUD.js';

import { BoardManager } from './board/BoardManager.js';
import { FloorManager } from './board/FloorManager.js';
import { openFloorPickerModal } from './ui/FloorPickerModal.js';
import { openChestModal } from './ui/FloorIntroModals.js';
import {
  showGrandVictoryModal,
  showCityVictoryModal,
  showCityCompleteModal,
  showCity2CompleteModal
} from './ui/CityCompleteModals.js';

import { BossEncounterManager } from './encounters/BossEncounterManager.js';
import { CityEncounterManager } from './encounters/CityEncounterManager.js';
import { MinigameLauncher } from './encounters/MinigameLauncher.js';

import { openShopModal as launchShopModal } from './ui/ShopModal.js';
import { openInventoryModal as launchInventoryModal } from './ui/WordBookModal.js';
import {
  handleFighterVictory as handleFighterVictoryScreen,
  completeCharacterBattle as completeCharacterBattleScreen
} from './ui/VictoryModals.js';

class NoiDiGameApp {
  constructor() {
    this.hudManager = new HUDManager(this);
    this.boardManager = new BoardManager(this);
    this.floorManager = new FloorManager(this);
    this.bossEncounterManager = new BossEncounterManager(this);
    this.cityEncounterManager = new CityEncounterManager(this);
    this.minigameLauncher = new MinigameLauncher(this);

    this.currentFloor = 1;
    this.nodes = INITIAL_BOARD_NODES.map(n => ({
      ...n,
      blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
    }));
    this.edges = BOARD_EDGES;
    this.currentNodeId = 'node_2';
    this.isWalking = false;
    this.bubbleHideTimeout = null;

    // Zbiór słów odblokowanych poprzez odsłuchanie audio
    this.unlockedWordIds = new Set();
    this.board3IntroShown = false;
    this.board4IntroShown = false;
    this.board5IntroShown = false;
    this.board6IntroShown = false;
    this.board7IntroShown = false;
    this.city1IntroShown = false;
    this.city2IntroShown = false;
    this.city3IntroShown = false;
    this.cityBossIntroShown = false;
    this.playerPreferences = {};
    this.cityShoppingChoices = { items: 'bread_water', bag: 'yes_bag', payment: 'card' };
    this.cityFoodChoices = { dish: 'kebab', sauce: 'czosnkowy', size: 'L', dining: 'na_miejscu' };
    this.cityTicketChosen = { type: 'ulgowy', duration: '20', price: 1 };

    this.m3_1_IntroShown = false;
    this.m3_2_IntroShown = false;
    this.m3_3_IntroShown = false;
    this.m4_1_IntroShown = false;
    this.m4_2_IntroShown = false;
    this.m4_3_IntroShown = false;
    this.m5_1_IntroShown = false;
    this.m5_2_IntroShown = false;

    // Stan gracza wzorowany na Dicey Dungeons
    this.player = {
      name: 'Tan',
      age: 13,
      level: 1,
      maxLevel: MAX_PLAYER_LEVEL,
      hp: 20,
      maxHp: 20,
      coins: 0,
      diceCount: 3,
      xp: 0,
      xpToNext: XP_REQUIRED_FOR_NEXT_LEVEL[1],
      score: 0,
      baseDamage: 5,
      bonusDamage: 0,
      get damage() {
        return (this.baseDamage || 5) + Math.max(0, ((this.level || 1) - 1) * 2) + (this.bonusDamage || 0);
      },
      bonusTimeSec: 0,
      flawlessCoinBonus: 0,
      kebabs: 0,
      boughtSneakers: false,
      boughtShopItemIds: new Set()
    };

    this.activeMinigame = null;
  }

  init() {
    this.root = document.getElementById('app');
    if (!this.root) return;

    this.renderBoardStage();
    this.bindKeyboardShortcuts();

    const arenaMount = document.getElementById('arena-mount');
    if (arenaMount) {
      arenaMount.classList.add('hidden');
    }

    this.loadFloor(1);
    this.renderBoard();
    this.updateHUD();
  }

  renderBoardStage() {
    this.root.innerHTML = `
      <div class="game-viewport">
        <!-- Główna scena: Plansza Szatni (szatnia.jpg) w stylu Dicey Dungeons -->
        <main class="board-stage" id="board-stage">
          <div class="floating-corner-controls">
            <button class="btn-quick-mode" id="floor-indicator-badge" title="Kliknij, aby otworzyć listę wyboru planszy (TEST)" style="background: #1e293b; cursor: pointer;">
              📍 Plansza 1: Szatnia
            </button>
            <button class="btn-quick-mode btn-select-floor" id="select-floor-btn" title="Wybierz dowolną planszę z listy (TEST)" style="background: #2563eb; color: #fff; font-weight: 800;">
              🗺️ Wybierz planszę
            </button>
            <button class="btn-quick-mode btn-reset-board" id="reset-board-btn" title="Zresetuj całą planszę do stanu początkowego">
              🔄 Resetuj planszę
            </button>
            <button class="btn-quick-mode btn-skip-test" id="skip-opponent-btn" title="Pomiń aktualnego przeciwnika (TEST)" style="background: #f59e0b; color: #111827; font-weight: 800;">
              ⏭️ Pomiń przeciwnika
            </button>
            <button class="btn-quick-mode btn-qm-mute" id="qm-mute-btn" title="Wycisz / Włącz dźwięk">
              🔊
            </button>
          </div>

          <div class="board-background-container" id="board-map">
            <!-- Warstwa linii ścieżek SVG -->
            <svg class="board-paths-svg" id="board-svg" viewBox="0 0 100 100" preserveAspectRatio="none"></svg>

            <!-- Warstwa węzłów (pól na podłodze) -->
            <div class="board-nodes-layer" id="board-nodes-layer"></div>

            <!-- Postać gracza: Tan -->
            <div class="player-token" id="player-token">
              <div class="player-speech-mini speech-hidden" id="player-speech-mini"></div>
              <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
              <div class="player-shadow"></div>
            </div>
          </div>

          <!-- Kontener na aktywny poziom Wordwall / Arenę -->
          <div id="arena-mount" class="arena-mount hidden"></div>

          <!-- Kontener na modale (Słowniczek / Skrzynia / Sklepik) -->
          <div id="modal-mount" class="modal-mount hidden"></div>
        </main>

        <!-- Dolny pasek HUD -->
        <footer class="dicey-hud-bar">
          <div class="hud-left-character">
            <div class="hud-portrait-frame">
              <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
            </div>
            <div class="hud-char-name">
              <strong>TAN</strong>
              <span>13 lat • A0</span>
            </div>
          </div>

          <div class="hud-stats-cluster">
            <div class="hud-hp-bar-outer">
              <div class="hud-hp-bar-fill" id="hud-hp-fill"></div>
              <span class="hud-hp-label" id="hud-hp-text">20/20</span>
            </div>
            <div class="hud-sub-counters">
              <span class="hud-counter-item" title="Złote monety">🪙 <b id="hud-coins">0</b></span>
              <span class="hud-buff-pill hidden hud-damage-pill" id="hud-damage-pill" title="Siła ataku Tan: bonus obrażeń">⚔️ +<b id="hud-damage-sec">0</b></span>
              <span class="hud-buff-pill hidden" id="hud-energy-pill" title="Dodatkowy czas na odpowiedź">⏱️ +<b id="hud-energy-sec">0</b>s</span>
              <span class="hud-buff-pill hidden hud-flawless-pill" id="hud-flawless-pill" title="Premia monet za walkę bez strat HP">✨ +<b id="hud-flawless-sec">0</b>🪙</span>
            </div>
          </div>

          <!-- Centralna wskazówka / hint planszy -->
          <div class="hud-center-hint" id="board-hint-banner">
            <span class="hud-hint-icon">💡</span>
            <span class="hud-hint-text" id="hud-hint-pill">Wybierz pole na podłodze, aby przejść dalej!</span>
          </div>

          <!-- Prawe przyciski akcji: Plecak i Księga Słów -->
          <div class="hud-right-actions">
            <button class="btn-dicey-hud btn-hud-inventory" id="hud-inventory-btn" title="Otwórz Plecak (Ekwipunek i Przedmioty)">
              <span class="hud-btn-icon">🎒</span>
              <span class="hud-btn-text">PLECAK</span>
            </button>
            <button class="btn-dicey-hud btn-hud-spellbook" id="hud-spellbook-btn" title="Otwórz Księgę Słów (Karty i Słowniczek)">
              <span class="hud-btn-icon">📖</span>
              <span class="hud-btn-text">KSIĘGA SŁÓW</span>
              <span class="hud-btn-badge" id="hud-words-count">0</span>
            </button>
          </div>
        </footer>
      </div>
    `;

    document.getElementById('floor-indicator-badge')?.addEventListener('click', () => {
      this.openFloorPickerModal();
    });
    document.getElementById('select-floor-btn')?.addEventListener('click', () => {
      this.openFloorPickerModal();
    });
    document.getElementById('reset-board-btn')?.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        this.resetBoard(true);
      });
    });
    document.getElementById('skip-opponent-btn')?.addEventListener('click', () => {
      this.skipOpponentForTest();
    });

    const qmMuteBtn = document.getElementById('qm-mute-btn');
    if (qmMuteBtn) {
      qmMuteBtn.textContent = sound.isMuted() ? '🔇' : '🔊';
      qmMuteBtn.style.opacity = sound.isMuted() ? '0.6' : '1';
      qmMuteBtn.addEventListener('click', () => {
        const isMuted = sound.toggleMute();
        qmMuteBtn.textContent = isMuted ? '🔇' : '🔊';
        qmMuteBtn.style.opacity = isMuted ? '0.6' : '1';
        this.showTemporaryPlayerBubble(isMuted ? 'Dźwięk wyłączony 🔇' : 'Dźwięk włączony 🔊', 1200);
      });
    }

    document.getElementById('hud-inventory-btn')?.addEventListener('click', () => {
      this.openInventoryModal(null, 'equipment');
    });
    document.getElementById('hud-spellbook-btn')?.addEventListener('click', () => {
      this.openInventoryModal(null, 'slang');
    });
    document.getElementById('hud-eat-kebab-btn')?.addEventListener('click', () => {
      this.eatKebab();
    });
  }

  eatKebab() {
    if ((this.player.kebabs || 0) <= 0) return;
    this.player.kebabs -= 1;
    const healAmount = 10;
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + healAmount);
    sound.playHeal();
    sound.speakPolish('Mniam! Pyszny kebab!');
    this.showTemporaryPlayerBubble('🥙 Zjedzono Kebab! +10 HP', 1800);
    this.updateHUD();
  }

  skipOpponentForTest() {
    // 1. Jeśli trwa walka/minigra w arenie, natychmiast wygraj ją
    if (this.activeMinigame) {
      const introLayer = document.getElementById('mp-intro-click-layer');
      if (introLayer) introLayer.remove();

      this.activeMinigame.enemyHp = 0;
      if (typeof this.activeMinigame.updateOpponentBar === 'function') {
        this.activeMinigame.updateOpponentBar();
      }

      const arenaEl = document.querySelector('.dd-combat-arena');
      if (arenaEl) {
        arenaEl.classList.add('arena-victory-exit');
      }

      if (typeof this.activeMinigame.onComplete === 'function') {
        this.activeMinigame.onComplete({ score: 500 });
      }
      return;
    }

    // 2. Jeśli jesteśmy na planszy, zalicz kolejnego nieukończonego przeciwnika i odblokuj ścieżkę
    const nextFighter = this.nodes.find(
      n => !n.completed && this.isCompletableFighterType(n.type, n)
    );

    if (nextFighter) {
      nextFighter.completed = true;
      this.awardProgress(1, 1, 200);
      sound.playSuccess();
      this.showTemporaryPlayerBubble(`Pominięto: ${nextFighter.titlePl} ⏭️`, 1600);
      this.renderBoard();
      this.updateHUD();
    }
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modalMount = document.getElementById('modal-mount');
        if (modalMount && !modalMount.classList.contains('hidden')) {
          this.closeModal();
          return;
        }
      }

      if (e.key === ' ' || e.key === 'Enter') {
        const activeModal = document.querySelector('.modal-mount:not(.hidden)');
        if (activeModal) {
          const mainBtn = activeModal.querySelector('.btn-dicey-take, .btn-city-continue, .fpm-close-btn, #dialog-ok-btn');
          if (mainBtn) {
            mainBtn.click();
            e.preventDefault();
            return;
          }
        }
      }

      if (e.key === 'a' || e.key === 'A') {
        const currentNode = this.getNode(this.currentNodeId);
        if (currentNode && this.activeMinigame === null) {
          this.interactWithNode(currentNode);
        }
      }
    });
  }

  openArena(bossModule = null) {
    const arenaMount = document.getElementById('arena-mount');
    if (!arenaMount) return null;
    const theme = this.getFloorTheme(this.currentFloor);
    arenaMount.className = `arena-mount arena-theme-${theme} floor-${this.currentFloor}-arena`;

    if (bossModule !== null) {
      musicManager.playBossFightMusic(bossModule);
    } else {
      musicManager.playCombatMusic(this.currentFloor);
    }

    return arenaMount;
  }

  // Delegacje do BoardManager
  renderBoard() {
    return this.boardManager.renderBoard();
  }
  positionPlayerToken(nodeId, jumping = false) {
    return this.boardManager.positionPlayerToken(nodeId, jumping);
  }
  handleNodeClick(targetNodeId) {
    return this.boardManager.handleNodeClick(targetNodeId);
  }
  getNode(id) {
    return this.boardManager.getNode(id);
  }
  isEdgeBlocked(fromId, toId) {
    return this.boardManager.isEdgeBlocked(fromId, toId);
  }
  findPath(startId, targetId) {
    return this.boardManager.findPath(startId, targetId);
  }
  isCompletableFighterType(type, node = null) {
    return this.boardManager.isCompletableFighterType(type, node);
  }
  playFighterCollisionOnBoard(nodeId) {
    return this.boardManager.playFighterCollisionOnBoard(nodeId);
  }
  isCatNode(node) {
    return this.boardManager ? this.boardManager.isCatNode(node) : false;
  }

  // Delegacje do FloorManager
  loadFloor(floorNumber, options = {}) {
    return this.floorManager.loadFloor(floorNumber, options);
  }
  resetBoard(manualReset = false, targetFloor = null) {
    return this.floorManager.resetBoard(manualReset, targetFloor);
  }
  getFloorTheme(floor = this.currentFloor) {
    return this.floorManager.getFloorTheme(floor);
  }
  collectApple(node) {
    return this.floorManager.collectApple(node);
  }
  awardProgress(xpGain, coinsGain, scoreGain = 0, options = {}) {
    return this.floorManager.awardProgress(xpGain, coinsGain, scoreGain, options);
  }

  setBoardHint(textPl) {
    this.hudManager.setBoardHint(textPl);
  }

  showTemporaryPlayerBubble(text, durationMs = 2000) {
    this.hudManager.showTemporaryPlayerBubble(text, durationMs);
  }

  hidePlayerBubbleImmediately() {
    this.hudManager.hidePlayerBubbleImmediately();
  }

  // Obsługa pól i interakcji na planszy
  async interactWithNode(node) {
    if (node.completed && this.isCompletableFighterType(node.type, node)) {
      this.setBoardHint('Ten przeciwnik został już pokonany!');
      return;
    }

    if (node.type === 'step') {
      node.completed = true;
      sound.playStep();
      this.setBoardHint(node.descriptionPl || 'Puste pole ścieżki w zaułku.');
      this.renderBoard();
      return;
    }

    if (node.type === 'apple') {
      if (!node.completed && node.icon) {
        this.collectApple(node);
      } else {
        this.setBoardHint('Puste pole.');
      }
      return;
    }

    this.setBoardHint(node.descriptionPl);

    if (node.type === 'chest') {
      if (node.completed) return;
      this.openChestModal(node);
      return;
    } else if (
      node.type === 'cat_matching' ||
      node.type === 'enemy_balloon' ||
      node.type === 'enemy_wheel'
    ) {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchMatchingPairs(node.id);
      });
    } else if (node.type === 'cat_anagram') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchAnagram(node.id);
      });
    } else if (node.type === 'olek_quiz_1') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_1');
      });
    } else if (node.type === 'olek_quiz_2') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_2');
      });
    } else if (node.type === 'cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchSpinWheel(node.id);
      });
    } else if (node.type === 'shop') {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        this.openShopModal(node);
      });
    } else if (node.type === 'olek_spell_word') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchSpellWord(node.id);
      });
    } else if (node.type === 'hedgehog_matchup') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchMatchUp(node.id);
      });
    } else if (node.type === 'puppy_find_match') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchFindMatch(node.id);
      });
    } else if (node.type === 'olek_quiz_3') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_board4');
      });
    } else if (node.type === 'rabbit_wordsearch') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchWordSearch(node.id);
      });
    } else if (node.type === 'olek_quiz_5') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_board5');
      });
    } else if (node.type === 'teacher_quiz_5') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_teacher');
      });
    } else if (node.type === 'b6_hedgehog_matchup') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBoard6HedgehogMatchUp(node.id);
      });
    } else if (node.type === 'b6_thoughts_opinion') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchThoughtsOpinion(node.id);
      });
    } else if (node.type === 'b6_olek_quiz') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_board6_olek');
      });
    } else if (node.type === 'b6_thoughts_fight') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchThoughtsFight(node.id);
      });
    } else if (node.type === 'boss_footballer') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossFootballer(node.id);
      });
    } else if (node.type === 'city_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCityCatWheel(node.id);
      });
    } else if (node.type === 'city_thoughts_shop') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCityThoughtsShop(node.id);
      });
    } else if (node.type === 'city_cashier_box') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCityCashierBox(node.id);
      });
    } else if (node.type === 'city_cashier_rank') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCityCashierRank(node.id);
      });
    } else if (node.type === 'city2_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity2CatWheel(node.id);
      });
    } else if (node.type === 'city2_thoughts_food') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity2ThoughtsFood(node.id);
      });
    } else if (node.type === 'city2_kebab_master') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity2KebabMaster(node.id);
      });
    } else if (node.type === 'city3_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity3CatWheel(node.id);
      });
    } else if (node.type === 'city3_biletomat') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity3Biletomat(node.id);
      });
    } else if (node.type === 'city3_inspector') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCity3Inspector(node.id);
      });
    } else if (node.type === 'city_boss_cwaniak') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossCwaniak(node.id);
      });
    } else if (node.type === 'm3_boss_nauczycielka') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossNauczycielka(node.id);
      });
    } else if (node.type === 'm4_boss_lekarz') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossLekarz(node.id);
      });
    } else if (node.type === 'm5_boss_instagramerka') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossInstagramerka(node.id);
      });
    } else if (node.type === 'm3_wuefista') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchWuefistaDialog(node.id);
      });
    } else if (node.type === 'm4_pielegniarka' || node.type === 'm4_pielegniarka_kontrola' || node.type === 'm4_pielegniarka_rejestracja') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchPielegniarkaDialog(node.id, node.type);
      });
    } else if (node.type === 'm5_gejmer') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchGejmerDialog(node.id);
      });
    } else if (node.type === 'm5_pilkarz') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchPilkarzM5Dialog(node.id);
      });
    } else if (node.type === 'm5_cwaniak') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchCwaniakM5Dialog(node.id);
      });
    } else if (node.type === 'm3_cat_wheel' || node.type === 'm3_2_cat_wheel' || node.type === 'm3_3_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        const words = node.type === 'm3_1_cat_wheel' || node.type === 'm3_cat_wheel' ? MODULE_3_1_WORDS : node.type === 'm3_2_cat_wheel' ? MODULE_3_2_WORDS : MODULE_3_3_WORDS;
        this.launchGenericCatWheel(node.id, words, 'Kot Bolo: Szkoła');
      });
    } else if (node.type === 'm4_cat_wheel' || node.type === 'm4_2_cat_wheel' || node.type === 'm4_3_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        const words = node.type === 'm4_cat_wheel' ? MODULE_4_1_WORDS : node.type === 'm4_2_cat_wheel' ? MODULE_4_2_WORDS : MODULE_4_3_WORDS;
        this.launchGenericCatWheel(node.id, words, 'Kot Bolo: Zdrowie i Emocje');
      });
    } else if (node.type === 'm5_cat_wheel' || node.type === 'm5_2_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        const words = node.type === 'm5_cat_wheel' ? MODULE_5_1_WORDS : MODULE_5_2_WORDS;
        this.launchGenericCatWheel(node.id, words, 'Kot Bolo: Pasje i Trendy');
      });
    } else if (node.type === 'm3_matchup' || node.type === 'm4_matchup' || node.type === 'm5_matchup') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchModuleMatchUp(node.id, node.type);
      });
    } else if (node.type === 'm3_olek_quiz') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekSchoolQuiz(node.id);
      });
    } else if (node.type === 'm3_rank_dialog' || node.type === 'm4_emotions_rank') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchModuleRankOrder(node.id, node.type);
      });
    } else if (node.type === 'm4_open_box') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchModuleOpenBox(node.id);
      });
    } else if (node.type === 'm3_thoughts' || node.type === 'm3_schedule_thoughts' || node.type === 'm4_physical_thoughts' || node.type === 'm4_emotion_thoughts') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchModuleThoughts(node.id, node.type);
      });
    } else if (node.type === 'next_board') {
      sound.playNextBoard();
      this.isWalking = true;
      let targetFloor = 1;
      if (node.id === 'node_5') targetFloor = 2;
      else if (node.id === 'b2_node_5') targetFloor = 3;
      else if (node.id === 'b3_node_6') targetFloor = 4;
      else if (node.id === 'b4_node_9') targetFloor = 5;
      else if (node.id === 'b5_node_7') {
        sound.playSchoolBell();
        targetFloor = 6;
      }
      else if (node.id === 'b6_node_7') targetFloor = 7;
      else if (node.id === 'b7_node_5') {
        this.showCityVictoryModal();
        return;
      } else if (node.id === 'c1_node_7') {
        this.showCityCompleteModal();
        return;
      } else if (node.id === 'c2_node_7') {
        this.showCity2CompleteModal();
        return;
      } else if (node.id === 'c3_node_7') {
        playJaggedCurtainWipe(() => {
          this.resetBoard(false, 'city_boss');
        });
        return;
      } else if (node.id === 'cb_node_7') {
        playJaggedCurtainWipe(() => {
          this.resetBoard(false, 'm3_1');
        });
        return;
      } else if (node.id === 'm3_1_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm3_2'));
        return;
      } else if (node.id === 'm3_2_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm3_3'));
        return;
      } else if (node.id === 'm3_3_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm3_boss'));
        return;
      } else if (node.id === 'm3_b_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm4_1'));
        return;
      } else if (node.id === 'm4_1_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm4_2'));
        return;
      } else if (node.id === 'm4_2_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm4_3'));
        return;
      } else if (node.id === 'm4_3_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm4_boss'));
        return;
      } else if (node.id === 'm4_b_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm5_1'));
        return;
      } else if (node.id === 'm5_1_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm5_2'));
        return;
      } else if (node.id === 'm5_2_node_7') {
        playJaggedCurtainWipe(() => this.resetBoard(false, 'm5_boss'));
        return;
      } else if (node.id === 'm5_b_node_7') {
        this.showGrandVictoryModal();
        return;
      }

      playJaggedCurtainWipe(() => {
        this.resetBoard(false, targetFloor);
      });
    }
  }

  // Modale wyboru planszy i intro kart
  openFloorPickerModal() {
    openFloorPickerModal(this);
  }

  openFloorNewCardsModal(...args) {
    return this.floorManager.openFloorNewCardsModal(...args);
  }

  openChestModal(node) {
    openChestModal(this, node);
  }

  // Ekrany finałowe i przejścia
  showGrandVictoryModal() {
    showGrandVictoryModal(this);
  }

  showCityVictoryModal() {
    showCityVictoryModal(this);
  }

  showCityCompleteModal() {
    showCityCompleteModal(this);
  }

  showCity2CompleteModal() {
    showCity2CompleteModal(this);
  }

  // Delegacje minigier i walk
  launchMatchingPairs(...args) {
    return this.minigameLauncher.launchMatchingPairs(...args);
  }
  launchAnagram(...args) {
    return this.minigameLauncher.launchAnagram(...args);
  }
  launchOlekQuiz(...args) {
    return this.minigameLauncher.launchOlekQuiz(...args);
  }
  launchSpinWheel(...args) {
    return this.minigameLauncher.launchSpinWheel(...args);
  }
  launchSpellWord(...args) {
    return this.minigameLauncher.launchSpellWord(...args);
  }
  launchMatchUp(...args) {
    return this.minigameLauncher.launchMatchUp(...args);
  }
  launchFindMatch(...args) {
    return this.minigameLauncher.launchFindMatch(...args);
  }
  launchWordSearch(...args) {
    return this.minigameLauncher.launchWordSearch(...args);
  }
  launchBoard6HedgehogMatchUp(...args) {
    return this.minigameLauncher.launchBoard6HedgehogMatchUp(...args);
  }
  launchThoughtsOpinion(...args) {
    return this.minigameLauncher.launchThoughtsOpinion(...args);
  }
  launchThoughtsFight(...args) {
    return this.minigameLauncher.launchThoughtsFight(...args);
  }

  // Starcia z Bossami
  launchBossFootballer(...args) {
    return this.bossEncounterManager.launchBossFootballer(...args);
  }
  launchBossCwaniak(...args) {
    return this.bossEncounterManager.launchBossCwaniak(...args);
  }
  launchBossNauczycielka(...args) {
    return this.bossEncounterManager.launchBossNauczycielka(...args);
  }
  launchBossLekarz(...args) {
    return this.bossEncounterManager.launchBossLekarz(...args);
  }
  launchBossInstagramerka(...args) {
    return this.bossEncounterManager.launchBossInstagramerka(...args);
  }

  // Moduł 2: Miasto
  launchCityCatWheel(...args) {
    return this.minigameLauncher.launchCityCatWheel(...args);
  }
  launchCityThoughtsShop(...args) {
    return this.cityEncounterManager.launchCityThoughtsShop(...args);
  }
  launchCityCashierBox(...args) {
    return this.cityEncounterManager.launchCityCashierBox(...args);
  }
  launchCityCashierRank(...args) {
    return this.cityEncounterManager.launchCityCashierRank(...args);
  }
  launchCity2CatWheel(...args) {
    return this.minigameLauncher.launchCity2CatWheel(...args);
  }
  launchCity2ThoughtsFood(...args) {
    return this.cityEncounterManager.launchCity2ThoughtsFood(...args);
  }
  launchCity2KebabMaster(...args) {
    return this.cityEncounterManager.launchCity2KebabMaster(...args);
  }
  launchCity3CatWheel(...args) {
    return this.minigameLauncher.launchCity3CatWheel(...args);
  }
  launchCity3Biletomat(...args) {
    return this.cityEncounterManager.launchCity3Biletomat(...args);
  }
  launchCity3Inspector(...args) {
    return this.cityEncounterManager.launchCity3Inspector(...args);
  }

  // Moduły 3, 4, 5
  launchWuefistaDialog(...args) {
    return this.minigameLauncher.launchWuefistaDialog(...args);
  }
  launchPielegniarkaDialog(...args) {
    return this.minigameLauncher.launchPielegniarkaDialog(...args);
  }
  launchGejmerDialog(...args) {
    return this.minigameLauncher.launchGejmerDialog(...args);
  }
  launchPilkarzM5Dialog(...args) {
    return this.minigameLauncher.launchPilkarzM5Dialog(...args);
  }
  launchCwaniakM5Dialog(...args) {
    return this.minigameLauncher.launchCwaniakM5Dialog(...args);
  }
  launchGenericCatWheel(...args) {
    return this.minigameLauncher.launchGenericCatWheel(...args);
  }
  launchModuleMatchUp(...args) {
    return this.minigameLauncher.launchModuleMatchUp(...args);
  }
  launchOlekSchoolQuiz(...args) {
    return this.minigameLauncher.launchOlekSchoolQuiz(...args);
  }
  launchModuleRankOrder(...args) {
    return this.minigameLauncher.launchModuleRankOrder(...args);
  }
  launchModuleOpenBox(...args) {
    return this.minigameLauncher.launchModuleOpenBox(...args);
  }
  launchModuleThoughts(...args) {
    return this.minigameLauncher.launchModuleThoughts(...args);
  }

  // Modale sklepiku, ekwipunku i zakończenia walk
  openShopModal(node) {
    launchShopModal(this, node);
  }
  openInventoryModal(initialSelectedId = null, filterCategory = null) {
    launchInventoryModal(this, initialSelectedId, filterCategory);
  }
  handleFighterVictory(arenaMount, nodeId, score, bubbleText = 'Brawo!', options = {}) {
    handleFighterVictoryScreen(this, arenaMount, nodeId, score, bubbleText, options);
  }
  completeCharacterBattle(options = {}) {
    completeCharacterBattleScreen(this, options);
  }

  closeModal() {
    const modalMount = document.getElementById('modal-mount');
    if (modalMount) {
      modalMount.classList.remove('modal-mount-shop');
      modalMount.classList.add('hidden');
      modalMount.innerHTML = '';
    }
  }

  updateHUD() {
    this.hudManager.updateHUD();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new NoiDiGameApp();
  app.init();
});
