// Menedżer ładowania pięter / plansz gry, motywów oraz resetu planszy
import { musicManager } from '../audio/musicManager.js';
import { sound } from '../audio/sound.js';
import { awardProgress as awardPlayerProgress } from '../ui/VictoryModals.js';
import { XP_REQUIRED_FOR_NEXT_LEVEL } from '../ui/HUD.js';
import {
  INITIAL_BOARD_NODES,
  BOARD_EDGES,
  getHeroFloor0Data,
  generateRandomizedFloorData,
  BOARD_6_NODES,
  BOARD_6_EDGES
} from '../data/vocabulary.js';
import { getBoss } from '../data/bosses.js';
import { getStoryEpisode } from '../data/storyData.js';

export class FloorManager {
  constructor(app) {
    this.app = app;
  }

  getFloorTheme(floor = this.app.currentFloor) {
    const f = String(floor);
    if (f === '6' || f === '5') {
      return 'gym';
    }
    if (f === '3') {
      return 'clinic';
    }
    if (['1', '2', '4'].includes(f)) {
      return 'school';
    }
    return 'szatnia';
  }

  loadFloor(floorNumber, options = {}) {
    this.app.currentFloor = floorNumber;
    if (options.playMusic !== false && (!this.app.titleScreen || !this.app.titleScreen.isVisible)) {
      musicManager.playBoardMusic(floorNumber);
    }
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
      mapContainer.className = `board-background-container floor-${floorNumber}`;
    }

    if (floorNumber === 6) {
      const heroId = this.app.player?.heroId || 'warrior';
      const pip = this.app.currentEpisode?.pip || 1;
      const storyEp = getStoryEpisode(heroId, pip);
      const boss = getBoss(storyEp.bossId);

      const bossTitle = `Boss ${boss.name} (${boss.hp} HP)`;
      const bossSub = `${storyEp.title} (${boss.dmg} dmg)`;
      const bossDesc = `„${storyEp.taunt}” — ${boss.name} (${boss.hp} HP, bije ${boss.dmg} HP).`;
      const badgeText = `Plansza 6: Epizod ${pip} (${storyEp.title}) – BOSS ${boss.name}`;

      this.app.nodes = BOARD_6_NODES.map(n => {
        const copy = {
          ...n,
          blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
        };
        if (copy.id === 'b6_node_5') {
          copy.type = `boss_${boss.id}`;
          copy.bossId = boss.id;
          copy.titlePl = bossTitle;
          copy.subtitlePl = bossSub;
          copy.icon = boss.avatar;
          copy.descriptionPl = bossDesc;
        } else if (copy.id === 'b6_node_4') {
          copy.descriptionPl = `Ostatni krok przed starciem! Przed Tobą stoi ${bossTitle}: „${storyEp.taunt}”`;
        }
        return copy;
      });
      this.app.edges = BOARD_6_EDGES;
      this.app.currentNodeId = 'b6_node_1';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = badgeText;
    } else if (floorNumber >= 1 && floorNumber <= 5) {
      const heroId = this.app.player?.heroId || 'warrior';
      const pip = this.app.currentEpisode?.pip || 1;
      const generated = generateRandomizedFloorData(floorNumber, pip, heroId);
      this.app.nodes = generated.nodes.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = generated.edges;
      this.app.currentNodeId = `b${floorNumber}_node_1`;
      this.app.lastApproachFromRight = false;

      if (badgeEl) {
        badgeEl.textContent = `Plansza ${floorNumber}: ${generated.themeName || 'Korytarz'} [${generated.totalCount || generated.nodes.length} pól]`;
      }
    } else {
      // Poziom 0: Szatnia (Unikalna dla każdego bohatera i każdego z 8 epizodów!)
      this.app.currentFloor = 0;
      const heroId = this.app.player?.heroId || 'warrior';
      const pip = this.app.currentEpisode?.pip || 1;
      const floor0Data = getHeroFloor0Data(heroId, pip);

      this.app.nodes = floor0Data.nodes.map(n => ({
        ...n,
        blocksEdgesTo: n.blocksEdgesTo ? [...n.blocksEdgesTo] : undefined
      }));
      this.app.edges = floor0Data.edges;
      this.app.currentNodeId = floor0Data.startNodeId || 'node_2';
      this.app.lastApproachFromRight = false;
      if (badgeEl) badgeEl.textContent = floor0Data.badgeText || `Poziom 0: Szatnia (Epizod ${pip})`;
    }
  }

  resetBoard(manualReset = false, targetFloor = null) {
    if (this.app.activeMinigame) {
      this.app.activeMinigame.destroy();
      this.app.activeMinigame = null;
    }
    if (typeof this.app.closeArena === 'function') {
      this.app.closeArena();
    } else {
      const arenaMount = document.getElementById('arena-mount');
      if (arenaMount) {
        arenaMount.classList.add('hidden');
        arenaMount.innerHTML = '';
      }
    }
    this.app.closeModal();

    if (manualReset) {
      this.loadFloor(0);
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
      this.app.player.boughtSneakers = false;
      if (this.app.player.boughtShopItemIds) {
        this.app.player.boughtShopItemIds.clear();
      }
      this.app.unlockedWordIds.clear();
    } else {
      const nextFloor = targetFloor !== null ? targetFloor : 0;
      this.loadFloor(nextFloor);
    }

    this.app.isWalking = false;
    this.app.hidePlayerBubbleImmediately();
    sound.playHeal();
    this.app.renderBoard();
    this.app.updateHUD();

    this.app.setBoardHint(
      manualReset
        ? 'Gra została zresetowana! Rozpocznij w Szatni.'
        : 'Przeszedłeś na nową planszę!'
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
      ? `Zjedzone! +${heal} HP i +${node.coinsGain} monet`
      : `Zjedzone! +${heal} HP`;
    this.app.showTemporaryPlayerBubble(bubbleMsg);
    this.app.setBoardHint(`Zjadłeś jabłko! Odzyskano +${heal} HP${node.coinsGain ? ` oraz zebrano +${node.coinsGain} monet!` : '.'}`);
    this.app.updateHUD();
    this.app.renderBoard();
  }

  awardProgress(xpGain, coinsGain, scoreGain = 0, { damageTaken = 0 } = {}) {
    const result = awardPlayerProgress(this.app.player, xpGain, coinsGain, scoreGain, { damageTaken });
    this.app.updateHUD();
    return result;
  }
}
