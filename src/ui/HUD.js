// Zarządzanie interfejsem gracza (HUD), dymkami postaci i wskazówkami na planszy

import { getPlayerDamage } from '../data/vocabulary.js';
import { musicManager } from '../audio/musicManager.js';
import { sound } from '../audio/sound.js';

export const MAX_PLAYER_LEVEL = 6;

// Wymagane punkty EXP do awansu na kolejny poziom (Poziom 6 to MAX)
export const XP_REQUIRED_FOR_NEXT_LEVEL = {
  1: 2,  // Z poziomu 1 na 2: 2 EXP
  2: 4,  // Z poziomu 2 na 3: 4 EXP
  3: 7,  // Z poziomu 3 na 4: 7 EXP
  4: 14, // Z poziomu 4 na 5: 14 EXP
  5: 18  // Z poziomu 5 na 6: 18 EXP
};

export class HUDManager {
  constructor(app) {
    this.app = app;
    this.bubbleHideTimeout = null;
  }

  updateHUD() {
    const player = this.app.player;
    if (!player) return;

    const hpFill = document.getElementById('hud-hp-fill');
    const hpText = document.getElementById('hud-hp-text');
    const coinsEl = document.getElementById('hud-coins');
    const dmgEl = document.getElementById('hud-damage-val');
    const hintsEl = document.getElementById('hud-hints');
    const lvlTitle = document.getElementById('hud-level-title');
    const xpSub = document.getElementById('hud-xp-sub');
    const floorTitle = document.getElementById('hud-floor-title');
    const wordsCountEl = document.getElementById('hud-words-count');
    const sneakerPill = document.getElementById('hud-sneaker-pill');
    const energyPill = document.getElementById('hud-energy-pill');
    const energySec = document.getElementById('hud-energy-sec');
    const kebabBtn = document.getElementById('hud-eat-kebab-btn');
    const kebabCount = document.getElementById('hud-kebab-count');

    const pct = Math.max(0, Math.min(100, (player.hp / player.maxHp) * 100));
    if (hpFill) hpFill.style.width = `${pct}%`;
    if (hpText) hpText.textContent = `${player.hp}/${player.maxHp}`;
    if (coinsEl) coinsEl.textContent = player.coins ?? 0;
    const totalDmg = getPlayerDamage(player);
    if (dmgEl) dmgEl.textContent = totalDmg;
    if (hintsEl) hintsEl.textContent = player.hints ?? 5;

    // Sprawdzanie poziomu zdrowia gracza (<= 1/6 HP) -> soundtrack "Chipzel - 08 Prepare To Dice" oraz pętla dźwięku ostrzegawczego lowhealth.ogg
    musicManager.checkLowHealthMusic(player);
    sound.checkLowHealth(player);

    if (sneakerPill) {
      sneakerPill.classList.toggle('hidden', !player.boughtSneakers);
    }
    if (energyPill && energySec) {
      energyPill.classList.toggle('hidden', !(player.bonusTimeSec > 0));
      energySec.textContent = player.bonusTimeSec;
    }
    const damagePill = document.getElementById('hud-damage-pill');
    const damageSec = document.getElementById('hud-damage-sec');
    if (damagePill && damageSec) {
      const totalDmg = getPlayerDamage(player);
      const isBuffed = (player.bonusDamage > 0) || (player.level > 1);
      damagePill.classList.toggle('hidden', !isBuffed);
      damageSec.textContent = totalDmg;
    }
    const flawlessPill = document.getElementById('hud-flawless-pill');
    if (flawlessPill) {
      flawlessPill.classList.add('hidden');
    }
    if (kebabBtn && kebabCount) {
      kebabBtn.classList.toggle('hidden', !(player.kebabs > 0));
      kebabCount.textContent = player.kebabs;
    }

    if (lvlTitle) {
      lvlTitle.textContent =
        player.level >= MAX_PLAYER_LEVEL
          ? `LEVEL ${player.level} (MAX)`
          : `LEVEL ${player.level}`;
    }

    if (xpSub) {
      if (player.level >= MAX_PLAYER_LEVEL) {
        xpSub.textContent = 'Max Level';
      } else {
        const remainingXp = Math.max(1, player.xpToNext - player.xp);
        xpSub.textContent = `Level up in ★ ${remainingXp}`;
      }
    }

    if (floorTitle) {
      const curFloor = this.app.currentFloor === 0 ? 1 : this.app.currentFloor;
      floorTitle.textContent = `Floor ${curFloor}`;
    }

    const skullsWrap = document.getElementById('hud-floor-skulls');
    if (skullsWrap) {
      const curFloor = this.app.currentFloor === 0 ? 1 : this.app.currentFloor;
      const items = skullsWrap.querySelectorAll('.hud-skull, .hud-boss-hood');
      items.forEach((item) => {
        const f = parseInt(item.dataset.floor, 10);
        item.classList.toggle('is-current', f === curFloor);
        item.classList.toggle('is-cleared', f < curFloor);
      });
    }

    if (wordsCountEl) {
      wordsCountEl.textContent = this.app.unlockedWordIds ? this.app.unlockedWordIds.size : 0;
    }
  }

  setBoardHint(textPl) {
    const hintText = document.getElementById('hud-hint-pill');
    if (hintText) {
      hintText.textContent = textPl;
      return;
    }
    const banner = document.getElementById('board-hint-banner');
    if (banner) {
      banner.innerHTML = `<div><strong>${textPl}</strong></div>`;
    }
  }

  showTemporaryPlayerBubble(text, durationMs = 2000) {
    const bubble = document.getElementById('player-speech-mini');
    if (!bubble) return;

    clearTimeout(this.bubbleHideTimeout);
    bubble.textContent = text;
    bubble.classList.remove('speech-hidden', 'speech-fade-out');
    bubble.classList.add('bubble-pop');

    setTimeout(() => {
      bubble.classList.remove('bubble-pop');
    }, 300);

    this.bubbleHideTimeout = setTimeout(() => {
      bubble.classList.add('speech-fade-out');
      this.bubbleHideTimeout = setTimeout(() => {
        bubble.classList.add('speech-hidden');
        bubble.classList.remove('speech-fade-out');
        bubble.textContent = '';
      }, 900);
    }, durationMs);
  }

  hidePlayerBubbleImmediately() {
    clearTimeout(this.bubbleHideTimeout);
    const bubble = document.getElementById('player-speech-mini');
    if (bubble) {
      bubble.classList.add('speech-hidden');
      bubble.classList.remove('speech-fade-out', 'bubble-pop');
      bubble.textContent = '';
    }
  }
}
