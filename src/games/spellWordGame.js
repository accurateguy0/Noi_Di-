// Poziom Wordwall: SPELL THE WORD (Ułóż zwrot z liter)
// Błąd lub timeout -> cios wroga i przejście do innego pytania

import { BOARD_3_SPELL_QUESTIONS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class SpellWordGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose, opponentName = 'olek', opponentAvatar = './assets/Postacie/Gejmer.png' }) {
    this.container = container;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20, bonusTimeSec: 0, hints: 5 };
    if (this.player.hints === undefined) this.player.hints = 5;
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.opponentName = opponentName;
    this.opponentAvatar = opponentAvatar;

    this.questions = [...BOARD_3_SPELL_QUESTIONS];
    this.currentQuestionIndex = 0;

    this.tanDamage = getPlayerDamage(this.player);
    this.enemyMaxHp = 30;
    this.enemyHp = 30;
    this.enemyDamage = 2;

    this.targetChars = [];
    this.filledCount = 0;
    this.poolTiles = [];
    this.lockInput = false;
    this.introDismissed = false;
    this.score = 0;

    this.timeLeft = 0;
    this.maxTime = 0;
    this.timerInterval = null;
    this.keyHandler = null;
  }

  mount() {
    this.renderArenaShell();
    this.loadQuestion(0, false);

    this.keyHandler = (e) => {
      if (!this.introDismissed || this.lockInput) return;
      const key = e.key.toUpperCase();
      if (key.length === 1 && /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(key)) {
        const availableTile = this.poolTiles.find((t) => !t.used && t.char === key);
        if (availableTile) {
          this.handleTilePick(availableTile.id);
        }
      }
    };
    window.addEventListener('keydown', this.keyHandler);
  }

  destroy() {
    this.stopTimer();
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena spell-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">${this.opponentName}</h2>

        <!-- Przycisk Podpowiedzi (?) -->
        <div class="arena-top-controls" style="position: absolute; top: 18px; left: 24px; z-index: 40;">
          <button type="button" class="btn-dicey-hud" id="spell-hint-btn" style="background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; padding: 6px 14px; border: 2px solid #60a5fa; cursor: pointer;">
            ❓ Tłumacz (${this.player.hints ?? 5})
          </button>
        </div>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.opponentName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container olek-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.opponentName}"
              class="dd-fighter-sprite sprite-olek"
              id="mp-opponent-sprite"
              onerror="this.src='./public${this.opponentAvatar?.slice(1)}'"
            />
          </div>
        </div>

        <!-- Środek areny: Plansza Spell the Word -->
        <div class="matching-stage-wrapper spell-stage-wrapper" id="spell-stage"></div>

        <!-- Lewy dolny róg: Bohater -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="${this.player?.avatar || './assets/Warrior.png'}"
              alt="${this.player?.heroName || this.player?.name || 'Bohater'}"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./assets/Warrior.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player?.heroName || this.player?.name || 'Bohater'}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const introLayer = this.container.querySelector('#mp-intro-click-layer');
    const animatedTitle = this.container.querySelector('#mp-animated-title');
    if (introLayer && animatedTitle) {
      introLayer.addEventListener('pointerdown', () => {
        this.introDismissed = true;
        sound.playStep();
        animatedTitle.classList.remove('is-centered');
        animatedTitle.classList.add('is-dismissed');
        introLayer.classList.add('intro-dismissed');
        setTimeout(() => {
          introLayer.remove();
          if (animatedTitle.parentNode) animatedTitle.remove();
        }, 650);

        const q = this.questions[this.currentQuestionIndex];
        if (q && q.olekSpeech) {
          sound.speakPolish(q.olekSpeech);
        }
        this.startTimer();
      });
    }

    const hintBtn = this.container.querySelector('#spell-hint-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => this.handleHintClick());
    }
  }

  handleHintClick() {
    if (this.lockInput) return;
    if ((this.player.hints || 0) <= 0) {
      sound.playMiss();
      alert('Brak ładunków podpowiedzi (?)! Zdobądź wyższy poziom lub kup itemek w kramiku!');
      return;
    }

    this.player.hints -= 1;
    const hintBtn = this.container.querySelector('#spell-hint-btn');
    if (hintBtn) {
      hintBtn.textContent = `❓ Tłumacz (${this.player.hints})`;
    }

    const q = this.questions[this.currentQuestionIndex];
    sound.speakPolish(q.targetPhrase);
    alert(`[Podpowiedź ?] Ułóż słowo: "${q.targetPhrase}"`);
  }

  loadQuestion(index, autoStart = true) {
    this.stopTimer();
    this.currentQuestionIndex = index;
    this.lockInput = false;

    const q = this.questions[index];
    if (!q) return;

    this.targetChars = q.targetPhrase.toUpperCase().split('');
    this.filledCount = 0;
    this.advancePastSpaces();

    const lettersOnly = this.targetChars.filter((c) => c !== ' ');
    const distractors = (q.distractors || []).map((c) => c.toUpperCase());
    const combined = [...lettersOnly, ...distractors];

    // Losowe tasowanie płytek (Fisher-Yates)
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    this.poolTiles = combined.map((char, idx) => ({
      id: `tile_${idx}_${char}`,
      char,
      used: false
    }));

    this.maxTime = (q.timeSeconds || 16) + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;

    this.renderSpellBoard();

    if (autoStart && this.introDismissed) {
      this.startTimer();
    }
  }

  advancePastSpaces() {
    while (
      this.filledCount < this.targetChars.length &&
      this.targetChars[this.filledCount] === ' '
    ) {
      this.filledCount += 1;
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      const fillEl = this.container.querySelector('#spell-timer-fill');
      const textEl = this.container.querySelector('#spell-timer-text');
      const pct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));
      if (fillEl) fillEl.style.width = `${pct}%`;
      if (textEl) textEl.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getRandomDifferentIndex(excludeIdx) {
    if (this.questions.length <= 1) return 0;
    let nextIdx = excludeIdx;
    while (nextIdx === excludeIdx) {
      nextIdx = Math.floor(Math.random() * this.questions.length);
    }
    return nextIdx;
  }

  handleTimeout() {
    this.stopTimer();
    this.lockInput = true;
    sound.playEnemyHit(this.opponentName);

    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    } else {
      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    }

    this.updatePlayerHud();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    if (this.player.hp <= 0) {
      setTimeout(() => {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }, 500);
      return;
    }

    setTimeout(() => {
      const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
      this.loadQuestion(nextIdx, true);
    }, 650);
  }

  renderSpellBoard() {
    const stage = this.container.querySelector('#spell-stage');
    const q = this.questions[this.currentQuestionIndex];
    if (!stage || !q) return;

    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stage.innerHTML = `
      <div class="ww-spell-card">
        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">${this.opponentName}:</span>
            <strong class="ww-bubble-quote">„${q.olekSpeech}”</strong>
            <button class="ww-quiz-speak-btn" id="spell-olek-speak" title="Posłuchaj"></button>
          </div>
          <div class="ww-spell-meta-right">
            <span class="ww-quiz-step-pill">Zwrot ${this.currentQuestionIndex + 1} / ${this.questions.length}</span>
          </div>
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="spell-timer-fill" style="width: ${timerPct}%"></div>
          <span class="ww-spell-timer-text" id="spell-timer-text">${this.timeLeft}s</span>
        </div>

        <p class="ww-spell-context-pl">${q.contextPl}</p>

        <!-- Sloty docelowe na litery zwrotu -->
        <div class="ww-spell-slots-row" id="spell-slots-row">
          ${this.targetChars.map((ch, idx) => {
            if (ch === ' ') {
              return `<div class="ww-spell-space" aria-hidden="true"></div>`;
            }
            const isFilled = idx < this.filledCount;
            const isActiveNext = idx === this.filledCount;
            return `
              <div class="ww-spell-slot ${isFilled ? 'is-filled' : ''} ${isActiveNext ? 'is-next' : ''}">
                <span>${isFilled ? ch : ''}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Pula dostępnych płytek liter do kliknięcia -->
        <div class="ww-spell-pool-grid" id="spell-pool-grid">
          ${this.poolTiles.map((t) => `
            <button
              type="button"
              class="ww-spell-tile-btn ${t.used ? 'is-used' : ''}"
              data-tile-id="${t.id}"
              ${t.used ? 'disabled' : ''}
            >
              <span>${t.char}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const speakBtn = stage.querySelector('#spell-olek-speak');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (q.olekSpeech) sound.speakPolish(q.olekSpeech);
      });
    }

    stage.querySelectorAll('.ww-spell-tile-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tileId = btn.dataset.tileId;
        this.handleTilePick(tileId, btn);
      });
    });
  }

  handleTilePick(tileId, btnEl = null) {
    if (this.lockInput) return;
    const tile = this.poolTiles.find((t) => t.id === tileId);
    if (!tile || tile.used) return;

    const expectedChar = this.targetChars[this.filledCount];
    if (tile.char === expectedChar) {
      tile.used = true;
      this.filledCount += 1;
      this.advancePastSpaces();
      sound.playStep();
      this.renderSpellBoard();

      if (this.filledCount >= this.targetChars.length) {
        this.handlePhraseSolved();
      }
    } else {
      // Błędna litera -> wróg bije bohatera, resetuje zegar i przechodzimy do innego pytania!
      this.stopTimer();
      this.lockInput = true;
      this.timeLeft = this.maxTime;
      const fillEl = this.container.querySelector('#spell-timer-fill');
      const textEl = this.container.querySelector('#spell-timer-text');
      if (fillEl) fillEl.style.width = '100%';
      if (textEl) textEl.textContent = `${this.timeLeft}s`;
      sound.playEnemyHit(this.opponentName);
      if (btnEl) btnEl.classList.add('is-wrong');

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      } else {
        this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      }

      this.updatePlayerHud();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      if (this.player.hp <= 0) {
        setTimeout(() => {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        }, 500);
        return;
      }

      setTimeout(() => {
        // Przejście do innego pytania po błędnej literze!
        const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
        this.loadQuestion(nextIdx, true);
      }, 700);
    }
  }

  handlePhraseSolved() {
    this.stopTimer();
    this.lockInput = true;
    const q = this.questions[this.currentQuestionIndex];

    sound.playAttackHit(this.opponentName);
    if (q && q.speakOnSolve) {
      sound.speakPolish(q.speakOnSolve);
    }

    this.score += 150;
    this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
    this.updateEnemyHud();
    this.triggerFighterHit('opponent', `-${this.tanDamage}`);

    const slotsRow = this.container.querySelector('#spell-slots-row');
    if (slotsRow) slotsRow.classList.add('spell-phrase-solved');

    setTimeout(() => {
      if (this.enemyHp <= 0) {
        this.finishBattle();
      } else {
        const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
        this.loadQuestion(nextIdx, true);
      }
    }, 900);
  }

  finishBattle() {
    this.stopTimer();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) arenaEl.classList.add('arena-victory-exit');
    setTimeout(() => {
      this.destroy();
      if (this.onComplete) this.onComplete({ score: this.score });
    }, 600);
  }

  updateEnemyHud() {
    const bar = this.container.querySelector('#mp-enemy-hp-fill');
    const txt = this.container.querySelector('#mp-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (bar) bar.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerHud() {
    const bar = this.container.querySelector('#mp-player-hp-fill');
    const txt = this.container.querySelector('#mp-player-hp-text');
    const pct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    if (bar) bar.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
    const wrap = this.container.querySelector(
      target === 'opponent' ? '#mp-opponent-sprite-wrap' : '#mp-player-sprite-wrap'
    );
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (!wrap) return;

    wrap.classList.remove('fighter-shake');
    void wrap.offsetWidth;
    wrap.classList.add('fighter-shake');

    if (arenaEl) {
      arenaEl.classList.remove('arena-shake');
      void arenaEl.offsetWidth;
      arenaEl.classList.add('arena-shake');
    }

    const floatEl = document.createElement('div');
    floatEl.className = 'dd-damage-float';
    floatEl.textContent = dmgText;
    floatEl.style.color = target === 'opponent' ? '#22c55e' : '#ef4444';
    wrap.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 750);
  }
}
