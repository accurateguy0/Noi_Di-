// Obsługa ekranów zwycięstwa, nagród za poziom i postępu gracza

import { showDiceyVictoryScreen } from './victoryScreen.js';
import { MAX_PLAYER_LEVEL, XP_REQUIRED_FOR_NEXT_LEVEL } from './HUD.js';

/**
 * Przyznaje graczowi doświadczenie, monety oraz punkty i sprawdza awans na kolejny poziom
 */
export function awardProgress(player, xpGain, coinsGain, scoreGain, { damageTaken = 0 } = {}) {
  const prevXp = player.xp;
  const prevXpToNext = player.xpToNext;

  let flawlessBonusGain = 0;
  if (damageTaken === 0 && (player.flawlessCoinBonus || 0) > 0) {
    flawlessBonusGain = player.flawlessCoinBonus;
    coinsGain += flawlessBonusGain;
  }

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
    player.xp -= player.xpToNext;
    player.level += 1;
    player.maxHp += 4;
    player.hp = Math.min(player.maxHp, player.hp + 4);
    player.diceCount += 1;
    leveledUp = true;

    // Losowanie nagrody za poziom:
    // +1 obrażeń, +1s czasu dla zadań z czasem, +1 moneta za zero obrażeń
    const roll = Math.random() * 100;
    if (roll < 60) {
      player.bonusDamage = (player.bonusDamage || 0) + 1;
      levelUpBonus = {
        type: 'damage',
        icon: '⚔️',
        text: '+1 OBRAŻEŃ',
        description: 'Twoje ataki w walkach i minigrach zadają o +1 punkt więcej obrażeń!'
      };
    } else if (roll < 95) {
      player.bonusTimeSec = (player.bonusTimeSec || 0) + 1;
      levelUpBonus = {
        type: 'time',
        icon: '⏱️',
        text: '+1s CZASU',
        description: 'Otrzymujesz dodatkową sekundę w wyzwaniach i walkach na czas!'
      };
    } else {
      player.flawlessCoinBonus = (player.flawlessCoinBonus || 0) + 1;
      levelUpBonus = {
        type: 'flawless_coin',
        icon: '🪙',
        text: '+1 MONETA ZA CZYSTĄ WALKĘ',
        description: 'Zyskujesz dodatkową monetę za każde starcie bez utraty punktów HP!'
      };
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
  // Kotek Pomocnik / Kot Bolo jest postacią treningową i nie daje doświadczenia (EXP = 0)
  const xpEarned = (!isCat && firstTime) ? 1 : 0;
  const coinsEarned = firstTime ? 1 : 0;

  if (node && !node.completed) {
    node.completed = true;
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
      if (app.activeMinigame) {
        app.activeMinigame.destroy();
        app.activeMinigame = null;
      }
      arenaMount.classList.add('hidden');
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
