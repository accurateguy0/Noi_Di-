// Główny kontroler gry edukacyjnej "Nói Đi! - Szkolne Lochy (Dicey Dungeons + Wordwall)"
// Drużyna 6 Bohaterów: Wojownik, Złodziej, Robot, Wynalazczyni, Czarownica i Błazen

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
import { openCharacterSelectModal, selectHero } from './ui/CharacterSelectModal.js';
import { episodeManager } from './data/episodeManager.js';
import { TitleScreen } from './ui/TitleScreen.js';
import { openSettingsModal } from './ui/SettingsModal.js';

class NoiDiGameApp {
  constructor() {
    this.hudManager = new HUDManager(this);
    this.boardManager = new BoardManager(this);
    this.floorManager = new FloorManager(this);
    this.bossEncounterManager = new BossEncounterManager(this);
    this.cityEncounterManager = new CityEncounterManager(this);
    this.minigameLauncher = new MinigameLauncher(this);
    this.titleScreen = new TitleScreen(this);

    this.currentFloor = 0;
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

    // Stan gracza wzorowany na Dicey Dungeons (Domyślnie Warrior)
    this.player = {
      name: 'Warrior',
      characterClass: 'Warrior',
      avatar: './assets/Warrior.png',
      heroId: 'warrior',
      heroName: 'Warrior',
      level: 1,
      maxLevel: MAX_PLAYER_LEVEL,
      hp: 24,
      maxHp: 24,
      limitBreakHp: 8,
      coins: 0,
      hints: 5, // Licznik podpowiedzi (?) na start (5 użyć)
      diceCount: 3,
      xp: 0,
      xpToNext: XP_REQUIRED_FOR_NEXT_LEVEL[1],
      score: 0,
      baseDamage: 2,
      bonusDamage: 0,
      get damage() {
        return (this.baseDamage || 2) + (this.bonusDamage || 0);
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

    this.loadFloor(0, { playMusic: false });
    this.renderBoard();
    this.updateHUD();

    try {
      const savedHero = localStorage.getItem('noidi_selected_hero');
      const validHero = (savedHero && episodeManager.isHeroUnlocked(savedHero)) ? savedHero : 'warrior';
      selectHero(this, validHero, false);
      localStorage.setItem('noidi_selected_hero', validHero);
    } catch (e) {
      selectHero(this, 'warrior', false);
    }

    // Wyświetl ekran startowy z przyciskami (Title Screen)
    this.titleScreen.mount(this.root);
  }

  renderBoardStage() {
    this.root.innerHTML = `
      <div class="game-viewport">
        <!-- Główna scena: Plansza w stylu Dicey Dungeons -->
        <main class="board-stage" id="board-stage">
          <div class="board-background-container" id="board-map">
            <!-- Warstwa linii ścieżek SVG -->
            <svg class="board-paths-svg" id="board-svg" viewBox="0 0 100 100" preserveAspectRatio="none"></svg>

            <!-- Warstwa węzłów (pól na podłodze) -->
            <div class="board-nodes-layer" id="board-nodes-layer"></div>

            <!-- Postać gracza -->
            <div class="player-token" id="player-token">
              <div class="player-speech-mini speech-hidden" id="player-speech-mini"></div>
              <img id="player-token-img" src="${this.player.avatar || './assets/Warrior.png'}" alt="${this.player.characterClass || 'Warrior'}" onerror="this.src='./assets/Warrior.png'" />
              <div class="player-shadow"></div>
            </div>
          </div>


          <!-- Kontener na aktywny poziom Wordwall / Arenę -->
          <div id="arena-mount" class="arena-mount hidden"></div>
        </main>

        <!-- Dolny pasek HUD (Styl Dicey Dungeons: przezroczysty, poziom, HP, EKWIPUNEK, Piętro) -->
        <footer class="dicey-hud-bar">
          <!-- Lewa strona: Awatar + LEVEL + EXP -->
          <div class="hud-hero-cluster">
            <div class="hud-dice-avatar-frame" id="hud-character-card" title="Zmień bohatera (Wojownik, Złodziej, Czarownica, Wynalazczyni, Robot, Błazen)">
              <img id="hud-portrait-img" src="${this.player.avatar || './assets/Warrior.png'}" alt="${this.player.characterClass || 'Warrior'}" onerror="this.src='./assets/Warrior.png'" />
            </div>
            <div class="hud-level-info">
              <div class="hud-level-text" id="hud-level-title">POZIOM ${this.player.level || 1}</div>
              <div class="hud-levelup-sub" id="hud-xp-sub">Awans za ★ ${Math.max(1, (this.player.xpToNext || 2) - (this.player.xp || 0))}</div>
            </div>
          </div>

          <!-- Środek-Lewo: Pasek HP + monety i atak mieczem (DMG) -->
          <div class="hud-hp-cluster">
            <div class="hud-hp-pill">
              <div class="hud-hp-pill-fill" id="hud-hp-fill" style="width: ${Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100))}%;"></div>
              <span class="hud-hp-pill-label" id="hud-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
            <div class="hud-stats-under-hp">
              <span class="hud-stat-coin" title="Złote monety">🪙 <b id="hud-coins">${this.player.coins || 0}</b></span>
              <span class="hud-stat-dmg" title="Siła ataku (DMG)">⚔️ <b id="hud-damage-val">${this.player.damage || 2}</b></span>
            </div>
          </div>

          <!-- Środek-Prawo: Przycisk EKWIPUNEK -->
          <div class="hud-buttons-cluster">
            <button type="button" class="btn-dd-hud-pill btn-dd-equipment" id="hud-inventory-btn" title="Otwórz Ekwipunek (Plecak)">
              EKWIPUNEK
            </button>
          </div>

          <!-- Prawa strona: Drabina / Piętra z czaszkami i kapturem bossa -->
          <div class="hud-floor-cluster" id="hud-floor-display" title="Aktualne piętro">
            <div class="hud-floor-top-row">
              <span class="hud-floor-stair-icon">🪜</span>
              <div class="hud-floor-skulls" id="hud-floor-skulls">
                <span class="hud-skull is-current" data-floor="1">💀</span>
                <span class="hud-skull" data-floor="2">💀</span>
                <span class="hud-skull" data-floor="3">💀</span>
                <span class="hud-skull" data-floor="4">💀</span>
                <span class="hud-skull" data-floor="5">💀</span>
                <span class="hud-boss-hood" data-floor="6">🦹</span>
              </div>
            </div>
            <div class="hud-floor-label" id="hud-floor-title">Piętro ${this.currentFloor === 0 ? 1 : this.currentFloor}</div>
          </div>
        </footer>
      </div>
      <!-- Globalny kontener na modale (Słowniczek / Skrzynia / Sklepik / Edytor / Wybór planszy) -->
      <div id="modal-mount" class="modal-mount hidden"></div>
    `;

    document.getElementById('hud-character-card')?.addEventListener('click', () => {
      openCharacterSelectModal(this);
    });
    document.getElementById('hud-inventory-btn')?.addEventListener('click', () => {
      playJaggedCurtainWipe(() => {
        this.openInventoryModal(null, 'equipment');
      });
    });
  }

  openRulesModal() {
    sound.playStep();
    const modalMount = document.getElementById('modal-mount');
    if (!modalMount) return;
    modalMount.classList.remove('hidden');
    const heroClass = this.player.characterClass || 'Warrior';
    const isMuted = sound.isMuted();

    modalMount.innerHTML = `
      <div class="dicey-modal-backdrop dd-rules-modal-backdrop">
        <div class="dicey-rules-card">
          <div class="drc-header">
            <h2>RULES • ${heroClass.toUpperCase()}</h2>
            <button type="button" class="drc-close-x" id="rules-close-x">✕</button>
          </div>
          <div class="drc-body">
            <div class="drc-hero-row">
              <img src="${this.player.avatar || './assets/Warrior.png'}" class="drc-hero-img" alt="${heroClass}" />
              <div class="drc-hero-desc">
                <h3>${heroClass}</h3>
                <p>Level ${this.player.level || 1} • HP: ${this.player.hp}/${this.player.maxHp} • Limit Break: ${this.player.limitBreakHp || 8} HP</p>
                <div class="drc-trait-badge">Limit Break ładuje się od otrzymywanych obrażeń i aktywuje unikalną zdolność klasy!</div>
              </div>
            </div>
            <div class="drc-nav-buttons">
              <button type="button" class="btn-drc-action" id="rules-btn-select-hero">
                👥 CHANGE HERO
              </button>
              <button type="button" class="btn-drc-action" id="rules-btn-mute">
                🔊 ${isMuted ? 'UNMUTE SOUND' : 'MUTE SOUND'}
              </button>
              <button type="button" class="btn-drc-action btn-drc-danger" id="rules-btn-title">
                🏠 TITLE MENU
              </button>
            </div>
          </div>
          <button type="button" class="btn-drc-ok" id="rules-close-btn">RETURN TO GAME</button>
        </div>
      </div>
    `;

    modalMount.querySelector('#rules-close-x')?.addEventListener('click', () => this.closeModal());
    modalMount.querySelector('#rules-close-btn')?.addEventListener('click', () => this.closeModal());
    modalMount.querySelector('#rules-btn-select-hero')?.addEventListener('click', () => {
      this.closeModal();
      openCharacterSelectModal(this);
    });
    modalMount.querySelector('#rules-btn-mute')?.addEventListener('click', () => {
      const nowMuted = sound.toggleMute();
      this.closeModal();
      this.showTemporaryPlayerBubble(nowMuted ? 'Dźwięk wyłączony' : 'Dźwięk włączony', 1200);
    });
    modalMount.querySelector('#rules-btn-title')?.addEventListener('click', () => {
      this.closeModal();
      playJaggedCurtainWipe(() => {
        this.titleScreen.show();
      });
    });
  }

  eatKebab() {
    if ((this.player.kebabs || 0) <= 0) return;
    this.player.kebabs -= 1;
    const healAmount = 10;
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + healAmount);
    sound.playHeal();
    sound.speakPolish('Mniam! Pyszny kebab!');
    this.showTemporaryPlayerBubble('Zjedzono Kebab! +10 HP', 1800);
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

    // 2. Jeśli jesteśmy na planszy, zalicz kolejnego nieukończonego przeciwnika lub wyzwanie (w tym Kotka Pomocnika) i odblokuj ścieżkę
    const isChallengeNode = (n) => {
      if (!n || n.completed) return false;
      if (['start', 'next_board', 'shop', 'apple', 'chest', 'step', 'waypoint'].includes(n.type)) {
        return false;
      }
      return (
        this.isCompletableFighterType(n.type, n) ||
        this.isCatNode(n) ||
        (n.type && n.type.includes('cat')) ||
        (n.blocksEdgesTo && n.blocksEdgesTo.length > 0)
      );
    };

    const nextFighter = this.nodes.find(isChallengeNode);

    if (nextFighter) {
      nextFighter.completed = true;
      const isCat = this.isCatNode(nextFighter) || (nextFighter.type && nextFighter.type.includes('cat'));
      const xpEarned = isCat ? 0 : 1;
      this.awardProgress(xpEarned, 1, 200);
      sound.playSuccess();
      this.showTemporaryPlayerBubble(`Pominięto: ${nextFighter.titlePl}`, 1600);
      this.renderBoard();
      this.updateHUD();
    } else {
      this.showTemporaryPlayerBubble('Brak przeciwników do pominięcia na tej planszy!', 1600);
    }
  }

  bindKeyboardShortcuts() {
    // Blokowanie wyjścia z pełnego ekranu przez klawisz Escape (Keyboard Lock API)
    // Pozwala na działanie klawisza Esc jak w natywnej grze (otwieranie menu pauzy zamiast wyłączania pełnego ekranu)
    document.addEventListener('fullscreenchange', async () => {
      if (document.fullscreenElement) {
        if ('keyboard' in navigator && typeof navigator.keyboard?.lock === 'function') {
          try {
            await navigator.keyboard.lock(['Escape']);
          } catch (e) {}
        }
      } else {
        if ('keyboard' in navigator && typeof navigator.keyboard?.unlock === 'function') {
          try {
            navigator.keyboard.unlock();
          } catch (e) {}
        }
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        const escMount = document.getElementById('esc-modal-mount');
        if (escMount && !escMount.classList.contains('hidden')) {
          // Jeśli menu Esc jest już otwarte, jego wewnętrzny keyHandler obsłuży cofnięcie lub zamknięcie
          return;
        }

        // Naciśnięcie Esc w dowolnym miejscu (plansza, autor/credits, ekwipunek, menu) otwiera menu Esc ze ściszeniem dźwięku tła
        openSettingsModal(this);
        return;
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

    const boardStage = document.querySelector('.board-stage');
    if (boardStage) boardStage.classList.add('in-arena');
    const boardMap = document.getElementById('board-map');
    if (boardMap) boardMap.classList.add('hidden');

    sound.playFightStart();

    if (bossModule !== null) {
      musicManager.playBossFightMusic(bossModule);
    } else {
      musicManager.playCombatMusic(this.currentFloor, this.player);
    }

    return arenaMount;
  }

  closeArena() {
    sound.stopLowHealth();
    const arenaMount = document.getElementById('arena-mount');
    if (arenaMount) {
      arenaMount.classList.add('hidden');
      arenaMount.innerHTML = '';
    }
    const boardStage = document.querySelector('.board-stage');
    if (boardStage) boardStage.classList.remove('in-arena');
    const boardMap = document.getElementById('board-map');
    if (boardMap) boardMap.classList.remove('hidden');
  }

  // Obsługa przegranej (skończenie życia gracza -> powrót do menu tytułowego)
  handleGameOver() {
    sound.stopLowHealth();
    playJaggedCurtainWipe(() => {
      if (this.activeMinigame) {
        try {
          this.activeMinigame.destroy();
        } catch (e) {}
        this.activeMinigame = null;
      }
      this.closeArena();
      this.closeModal();

      // Zresetuj bieg i statystyki do pełnego zdrowia na start nowej rozgrywki
      this.resetBoard(true);

      // Pokaż menu tytułowe
      if (this.titleScreen) {
        this.titleScreen.show();
      }

      // Odtwórz muzykę ekranu startowego
      musicManager.playTitleMusic();
    });
  }

  // Delegacje do BoardManager
  renderBoard() {
    const arenaMount = document.getElementById('arena-mount');
    const isArenaOpen = arenaMount && !arenaMount.classList.contains('hidden');
    const boardMap = document.getElementById('board-map');
    const boardStage = document.querySelector('.board-stage');

    if (isArenaOpen) {
      if (boardStage) boardStage.classList.add('in-arena');
      if (boardMap) boardMap.classList.add('hidden');
    } else {
      if (boardStage) boardStage.classList.remove('in-arena');
      if (boardMap) boardMap.classList.remove('hidden');
    }

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
        this.launchMatchingPairs(node.id, node);
      });
    } else if (node.type === 'cat_anagram' || node.type === 'squid_anagram' || node.type === 'rat_king_letters') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchAnagram(node.id, node);
      });
    } else if (node.type === 'olek_quiz_1') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_1', node);
      });
    } else if (node.type === 'olek_quiz_2') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_2', node);
      });
    } else if (node.type === 'cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchSpinWheel(node.id, node);
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
    } else if (node.type === 'hedgehog_matchup' || node.type === 'match_up' || node.type === 'singer_rhymes' || node.type === 'singer_matchup' || node.type === 'skeleton_anatomy' || node.type === 'kraken_matchup') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchMatchUp(node.id, node);
      });
    } else if (node.type === 'puppy_find_match' || node.type === 'find_match' || node.type === 'frog_balloon' || node.type === 'bird_find_match' || node.type === 'bird_tf') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchFindMatch(node.id, node);
      });
    } else if (node.type === 'classmate_rank' || node.type === 'girl_rank_order') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchModuleRankOrder(node.id, 'classmate_rank', node);
      });
    } else if (node.type === 'doctor_visit') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchDoctorDialog(node.id, node);
      });
    } else if (node.type === 'thoughts_tf') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchThoughtsTF(node.id, node);
      });
    } else if (node.type === 'wolfhound_tf') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchWolfhoundTF(node.id, node);
      });
    } else if (node.type === 'puss_quiz') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'puss_quiz', node);
      });
    } else if (node.type === 'olek_quiz_3') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_board4', node);
      });
    } else if (node.type === 'rabbit_wordsearch' || node.type === 'hare_wordsearch') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchWordSearch(node.id, node);
      });
    } else if (node.type === 'olek_quiz_5') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchOlekQuiz(node.id, 'encounter_board5', node);
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
    } else if (
      node.bossId ||
      node.type === 'boss_footballer' ||
      node.type === 'footballer_regular' ||
      node.type === 'city_boss_cwaniak' ||
      node.type === 'boss_cwaniak' ||
      node.type === 'cwaniak_tf' ||
      node.type === 'm3_boss_nauczycielka' ||
      node.type === 'teacher_quiz_5' ||
      node.type === 'm4_boss_lekarz' ||
      node.type === 'm5_boss_instagramerka' ||
      node.type === 'boss_instagramerka' ||
      node.type === 'instagramerka_trends' ||
      node.type === 'silaczka_workout' ||
      node.type === 'dyrektorka_office' ||
      node.type === 'profesor_quiz' ||
      node.type === 'smok_boss' ||
      node.type === 'boss_smok' ||
      String(node.type || '').startsWith('boss_')
    ) {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchBossById(node.bossId || node.type, node.id, node);
      });
    } else if (node.type === 'wuefista_dialog' || node.type === 'm3_wuefista') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchWuefistaDialog(node.id, node);
      });
    } else if (node.type === 'pielegniarka_dialog' || node.type === 'm4_pielegniarka' || node.type === 'm4_pielegniarka_kontrola' || node.type === 'm4_pielegniarka_rejestracja') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        this.launchPielegniarkaDialog(node.id, node.type, node);
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
        this.launchGenericCatWheel(node.id, words, 'Kotek: Szkoła');
      });
    } else if (node.type === 'm4_cat_wheel' || node.type === 'm4_2_cat_wheel' || node.type === 'm4_3_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        const words = node.type === 'm4_cat_wheel' ? MODULE_4_1_WORDS : node.type === 'm4_2_cat_wheel' ? MODULE_4_2_WORDS : MODULE_4_3_WORDS;
        this.launchGenericCatWheel(node.id, words, 'Kotek: Zdrowie i Emocje');
      });
    } else if (node.type === 'm5_cat_wheel' || node.type === 'm5_2_cat_wheel') {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        const words = node.type === 'm5_cat_wheel' ? MODULE_5_1_WORDS : MODULE_5_2_WORDS;
        this.launchGenericCatWheel(node.id, words, 'Kotek: Pasje i Trendy');
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
    } else if (this.isCompletableFighterType(node.type, node)) {
      await this.playFighterCollisionOnBoard(node.id);
      playJaggedCurtainWipe(() => {
        if (node.steps && node.steps.length) {
          this.launchModuleRankOrder(node.id, node.type || 'classmate_rank', node);
        } else if (node.items && node.items.length) {
          this.launchMatchUp(node.id, node);
        } else if (node.words && node.words.length) {
          if (typeof node.words[0] === 'object' && node.words[0]?.scrambled) {
            this.launchAnagram(node.id, node);
          } else {
            this.launchWordSearch(node.id, node);
          }
        } else if (node.questions && node.questions.length) {
          const firstQ = node.questions[0];
          if (firstQ?.correctWord || firstQ?.options?.[0]?.word) {
            this.launchFindMatch(node.id, node);
          } else if (firstQ?.correct !== undefined && typeof firstQ.correct === 'boolean') {
            this.launchThoughtsTF(node.id, node);
          } else {
            this.launchBossById(node.bossId || node.type || 'nauczycielka', node.id, node);
          }
        } else if (node.scenarios && node.scenarios.length) {
          this.launchSpinWheel(node.id, node);
        } else {
          this.launchBossById(node.bossId || node.type || 'nauczycielka', node.id, node);
        }
      });
    } else if (node.type === 'next_board') {
      sound.playNextBoard();
      this.isWalking = true;
      let targetFloor = 1;
      if (node.id === 'node_5' || this.currentFloor === 0) {
        targetFloor = 1;
      } else if (node.id === 'b1_node_19' || this.currentFloor === 1) {
        targetFloor = 2;
      } else if (node.id === 'b2_node_19' || this.currentFloor === 2) {
        targetFloor = 3;
      } else if (node.id === 'b3_node_19' || this.currentFloor === 3) {
        targetFloor = 4;
      } else if (node.id === 'b4_node_19' || this.currentFloor === 4) {
        targetFloor = 5;
      } else if (node.id === 'b5_node_19' || this.currentFloor === 5) {
        sound.playSchoolBell();
        targetFloor = 6;
      } else if (this.currentFloor === 6) {
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
  launchBossById(...args) {
    return this.bossEncounterManager.launchBossById(...args);
  }
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
  launchBossSmok(...args) {
    return this.bossEncounterManager.launchBossSmok(...args);
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
  launchDoctorDialog(...args) {
    return this.minigameLauncher.launchDoctorDialog(...args);
  }
  launchThoughtsTF(...args) {
    return this.minigameLauncher.launchThoughtsTF(...args);
  }
  launchWolfhoundTF(...args) {
    return this.minigameLauncher.launchWolfhoundTF(...args);
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
      modalMount.classList.remove('modal-mount-shop', 'modal-mount-inventory', 'modal-mount-esc');
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
