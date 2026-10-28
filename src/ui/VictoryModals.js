// Obsługa ekranów zwycięstwa, nagród za poziom i postępu gracza

import { showDiceyVictoryScreen, playJaggedCurtainWipe } from './victoryScreen.js';
import { MAX_PLAYER_LEVEL, XP_REQUIRED_FOR_NEXT_LEVEL } from './HUD.js';
import { episodeManager } from '../data/episodeManager.js';
import { getHeroLevelStats } from '../data/characterProgression.js';
import { musicManager } from '../audio/musicManager.js';

/**
 * Przyznaje graczowi doświadczenie, monety oraz punkty i sprawdza awans na kolejny poziom
 */
export function awardProgress(player, xpGain, coinsGain, scoreGain, { damageTaken = 0 } = {}) {
  const prevXp = player.xp;
  const prevXpToNext = player.xpToNext;

  const flawlessBonusGain = 0;

  player.coins += coinsGain;
  player.score += scoreGain;

  let leveledUp = false;
  let levelUpBonus = null;

  if (player.level >= MAX_PLAYER_LEVEL || xpGain <= 0) {
    if (player.level >= MAX_PLAYER_LEVEL) {
      player.level = MAX_PLAYER_LEVEL;
      player.xp = 0;
      player.xpToNext = 0;
    }
    return {
      leveledUp: false,
      levelUpBonus: null,
      flawlessBonusGain,
      newLevel: player.level,
      prevXp,
      prevXpToNext,
      currentXp: player.xp,
      xpToNext: player.xpToNext,
      coinsGain,
      xpGain
    };
  }

  player.xp += xpGain;
  while (
    player.level < MAX_PLAYER_LEVEL &&
    player.xp >= player.xpToNext
  ) {
    const prevLevel = player.level;
    player.xp -= player.xpToNext;
    player.level += 1;

    const stats = getHeroLevelStats(player.characterClass, player.level);
    const hpDiff = Math.max(4, stats.maxHp - player.maxHp);
    player.maxHp = stats.maxHp;
    player.hp = Math.min(player.maxHp, player.hp + hpDiff);
    player.limitBreakHp = stats.limitBreakHp;
    player.baseDamage = stats.baseDamage;
    if (stats.maxCpu !== null) {
      player.maxCpu = stats.maxCpu;
    }
    player.hints = (player.hints || 0) + 1; // +1 Podpowiedź (?) za każdy awans poziomu!
    leveledUp = true;

    const cls = (player.characterClass || 'Warrior').toLowerCase();

    // Nagrody za poziom zgodnie z tabelą poziomów (Level 1–6):
    if (cls.includes('robot')) {
      if (prevLevel % 2 === 1) {
        levelUpBonus = {
          type: 'cpu',
          icon: '🤖',
          text: `+2 MAX CPU (TERAZ ${player.maxCpu} CPU)`,
          description: 'Zwiększono pojemność procesora CPU! Wyższy próg dla losowania JACKPOT!'
        };
      } else {
        player.coins = (player.coins || 0) + 2;
        levelUpBonus = {
          type: 'equipment',
          icon: '⚙️',
          text: 'NOWY EKWIPUNEK ROBOTA (+2 MONETY, +1 PODPOWIEDŹ)',
          description: 'Odblokowano nowy moduł ekwipunku oraz dodatkowe zasoby!'
        };
      }
    } else if (cls.includes('witch')) {
      player.upgradedSpells = (player.upgradedSpells || 0) + 1;
      if (prevLevel === 3) {
        player.coins = (player.coins || 0) + 2;
        levelUpBonus = {
          type: 'equipment',
          icon: '🔮',
          text: 'MAGICZNY EKWIPUNEK + SLOT ZAKLĘCIA',
          description: 'Wzmocniono Księgę Zaklęć (Burning Light, Electric Shock, Ice Shard, Sonic Wave)!'
        };
      } else {
        levelUpBonus = {
          type: 'spell_slot',
          icon: '✨',
          text: 'ULEPSZONY SLOT ZAKLĘCIA (+1 MOCY MAGII)',
          description: 'Twoje zaklęcia (Burning Light, Electric Shock, Ice Shard, Sonic Wave) zadają większe obrażenia!'
        };
      }
    } else {
      // Wspólna progresja dla: Warrior, Thief, Inventor oraz Jester (DMG 2 → 3 → 3 → 4 → 4 → 5):
      // Lvl 1→2: Extra DMG | Lvl 2→3: ekwipunek | Lvl 3→4: Extra DMG | Lvl 4→5: ekwipunek | Lvl 5→6: Extra DMG
      if (prevLevel % 2 === 1) {
        levelUpBonus = {
          type: 'damage',
          icon: '⚔️',
          text: `EXTRA DMG (ATAK: ${player.baseDamage} DMG, MAX HP: ${player.maxHp})`,
          description: `Poziom ${player.level}: Twoje uderzenia zadają teraz ${player.baseDamage} DMG, a Limit Break wynosi ${player.limitBreakHp} HP!`
        };
      } else {
        player.coins = (player.coins || 0) + 2;
        levelUpBonus = {
          type: 'equipment',
          icon: '🎒',
          text: `NOWY EKWIPUNEK (+2 MONETY, +1 PODPOWIEDŹ, MAX HP: ${player.maxHp})`,
          description: `Poziom ${player.level}: Otrzymujesz pakiet ekwipunku na kolejne piętro (Atak: ${player.baseDamage} DMG)!`
        };
      }
    }

    if (player.level < MAX_PLAYER_LEVEL) {
      player.xpToNext = XP_REQUIRED_FOR_NEXT_LEVEL[player.level];
    } else {
      player.xp = 0;
      player.xpToNext = 0;
    }
  }

  return {
    leveledUp,
    levelUpBonus,
    flawlessBonusGain,
    newLevel: player.level,
    prevXp,
    prevXpToNext,
    currentXp: player.xp,
    xpToNext: player.xpToNext,
    coinsGain,
    xpGain
  };
}

/**
 * Wyświetla ekran zwycięstwa po walce z przeciwnikiem i odblokowuje planszę
 */
export function handleFighterVictory(app, arenaMount, nodeId, score, bubbleText = 'Brawo!', { damageTaken = 0 } = {}) {
  const node = app.getNode(nodeId);
  const isCat = Boolean(
    (node && app.isCatNode && app.isCatNode(node)) ||
    (node && (
      String(node.type || '').toLowerCase().includes('cat') ||
      String(node.icon || '').toLowerCase().includes('kot') ||
      String(node.titlePl || '').toLowerCase().includes('kot') ||
      String(node.titlePl || '').toLowerCase().includes('bolo')
    )) ||
    (bubbleText && (
      bubbleText.toLowerCase().includes('kot') ||
      bubbleText.toLowerCase().includes('bolo')
    ))
  );
  const firstTime = Boolean(node && !node.completed);
  // Kotek Pomocnik jest postacią pomocniczą/treningową i NIGDY nie daje EXP (EXP = 0) na żadnej planszy
  // Dla wszystkich prawdziwych przeciwników w grze EXP wynosi płaskie 1 EXP (bez skalowania)
  const xpEarned = (!isCat && firstTime) ? 1 : 0;
  const coinsEarned = firstTime ? 1 : 0;

  if (node && !node.completed) {
    node.completed = true;
    try {
      app.renderBoard();
    } catch (e) {}
  }

  const isBossEncounter = Boolean(
    app.currentFloor === 6 ||
    String(nodeId || '').includes('boss') ||
    nodeId === 'b6_node_5' ||
    (node && (
      node.type === 'boss_footballer' ||
      node.id === 'b6_node_5' ||
      node.id === 'b7_node_3' ||
      node.id === 'b7_node_5' ||
      String(node.id || '').includes('boss') ||
      String(node.type || '').includes('boss')
    ))
  );

  // Jeśli pokonano Bossa, od razu zapisz ukończenie epizodu i odblokuj kolejną postać (gdy ukończono Epizod 1)
  if (isBossEncounter) {
    const heroId = app.player?.heroId || 'warrior';
    const currentEp = app.currentEpisode?.pip || episodeManager.getSelectedEpisode(heroId) || 1;
    episodeManager.completeEpisode(heroId, currentEp);
  }

  const result = awardProgress(app.player, xpEarned, coinsEarned, score, { damageTaken });
  app.updateHUD();

  showDiceyVictoryScreen(arenaMount, {
    coinsGain: result.coinsGain,
    xpGain: result.xpGain,
    leveledUp: result.leveledUp,
    levelUpBonus: result.levelUpBonus,
    flawlessBonusGain: result.flawlessBonusGain,
    newLevel: result.newLevel,
    prevXp: result.prevXp,
    prevXpToNext: result.prevXpToNext,
    currentXp: result.currentXp,
    xpToNext: result.xpToNext,
    customProgressLabel: 'Następny poziom:',
    onOk: () => {
      try {
        if (app.activeMinigame && typeof app.activeMinigame.destroy === 'function') {
          app.activeMinigame.destroy();
        }
      } catch (e) {
        console.error('Error destroying minigame:', e);
      }
      app.activeMinigame = null;
      if (typeof app.closeArena === 'function') {
        app.closeArena();
      } else {
        if (arenaMount) {
          arenaMount.classList.add('hidden');
          arenaMount.innerHTML = '';
        }
        const boardStage = document.querySelector('.board-stage');
        if (boardStage) boardStage.classList.remove('in-arena');
        const boardMap = document.getElementById('board-map');
        if (boardMap) boardMap.classList.remove('hidden');
      }

      if (isBossEncounter) {
        const heroId = app.player?.heroId || 'warrior';
        const currentEp = app.currentEpisode?.pip || episodeManager.getSelectedEpisode(heroId) || 1;
        episodeManager.completeEpisode(heroId, currentEp);

        playJaggedCurtainWipe(() => {
          document.getElementById('character-select-screen')?.classList.add('hidden');
          if (app.titleScreen && typeof app.titleScreen.show === 'function') {
            app.titleScreen.show();
          }
        });
        return;
      }

      musicManager.resumeBoardMusic();
      app.showTemporaryPlayerBubble(bubbleText, 1800);
      app.renderBoard();
      app.updateHUD();
    }
  });
}

/**
 * Zakończenie pojedynku z postacią
 */
export function completeCharacterBattle(app, { coinsGain = 1, xpGain = 1, scoreGain = 100, damageTaken = 0, onDismiss } = {}) {
  const result = awardProgress(app.player, xpGain, coinsGain, scoreGain, { damageTaken });
  app.updateHUD();

  const modalMount = document.getElementById('modal-mount');
  modalMount.classList.remove('hidden');
  modalMount.innerHTML = '';

  showDiceyVictoryScreen(modalMount, {
    coinsGain: result.coinsGain,
    xpGain: result.xpGain,
    leveledUp: result.leveledUp,
    levelUpBonus: result.levelUpBonus,
    flawlessBonusGain: result.flawlessBonusGain,
    newLevel: result.newLevel,
    prevXp: result.prevXp,
    prevXpToNext: result.prevXpToNext,
    currentXp: result.currentXp,
    xpToNext: result.xpToNext,
    onOk: () => {
      app.closeModal();
      app.renderBoard();
      app.updateHUD();
      if (onDismiss) onDismiss();
    }
  });
}
