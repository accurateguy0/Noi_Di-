// Poziom Wordwall: SPELL THE WORD (Ułóż / przeliteruj zwrot litera po literze)
// Pole 5 na Planszy 3: Olek – Test Nowych Słów (Rozmowa o grach i profilu)

import { BOARD_3_SPELL_QUESTIONS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class SpellWordGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20, bonusTimeSec: 0 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.questions = BOARD_3_SPELL_QUESTIONS;
    this.currentQuestionIndex = 0;

    this.tanDamage = getPlayerDamage(this.player);
    this.enemyMaxHp = this.questions.length * this.tanDamage;
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = 5;

    this.targetChars = [];
    this.filledCount = 0; // Indeks aktualnie wpisywanej litery w targetChars
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
        const availableTile = this.poolTiles.find(
          (t) => !t.used && t.char === key
        );
        if (availableTile) {
          this.handleTilePick(availableTile.id);
        }
      }
    };
    window.addEventListener('keydown', this.keyHandler);
  }

  renderArenaShell() {
    const playerHpPct = Math.max(
      0,
      Math.min(100, (this.player.hp / this.player.maxHp) * 100)
    );
    const enemyHpPct = Math.max(
      0,
      Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100)
    );

    this.container.innerHTML = `
      <div class="dd-combat-arena spell-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Spell the Word</h2>

        <!-- Prawy górny róg: Gejmer Olek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Gejmer Olek</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container olek-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Gejmer.png"
              alt="Gejmer Olek"
              class="dd-fighter-sprite sprite-olek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Gejmer.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Plansza Spell the Word -->
        <div class="matching-stage-wrapper spell-stage-wrapper" id="spell-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
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
        introLayer.classList.add('intro-dismissed');
        setTimeout(() => introLayer.remove(), 650);

        const q = this.questions[this.currentQuestionIndex];
        if (q && q.olekSpeakText) {
          sound.speakPolish(q.olekSpeakText);
        }
        this.startQuestionTimer();
      });
    }
  }

  loadQuestion(index, autoStartTimer = true) {
    this.stopTimer();
    this.currentQuestionIndex = index;
    this.lockInput = false;

    const q = this.questions[index];
    if (!q) return;

    this.targetChars = q.targetPhrase.toUpperCase().split('');
    this.filledCount = 0;
    this.advancePastSpaces();

    const lettersOnly = this.targetChars.filter((ch) => ch !== ' ');
    const shuffled = [...lettersOnly];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    this.poolTiles = shuffled.map((ch, idx) => ({
      id: `tile_${idx}`,
      char: ch,
      used: false
    }));

    const bonusSec = this.player.bonusTimeSec || 0;
    this.maxTime = (q.baseTimeSec || 10) + bonusSec;
    this.timeLeft = this.maxTime;

    this.renderSpellBoard();

    if (autoStartTimer && this.introDismissed) {
      if (q.olekSpeakText) sound.speakPolish(q.olekSpeakText);
      this.startQuestionTimer();
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

  startQuestionTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.lockInput) return;
      this.timeLeft = Math.max(0, this.timeLeft - 1);
      this.updateTimerBarUI();

      if (this.timeLeft <= 0) {
        this.handleTimeoutDamage();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerBarUI() {
    const timerTxt = this.container.querySelector('#spell-timer-text');
    const timerFill = this.container.querySelector('#spell-timer-fill');
    if (timerTxt) timerTxt.textContent = `⏱️ ${this.timeLeft}s`;
    if (timerFill) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));
      timerFill.style.width = `${pct}%`;
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

  handleTimeoutDamage() {
    this.stopTimer();
    this.lockInput = true;
    sound.playEnemyHit();

    this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }

    this.updatePlayerHud();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    if (this.player.hp <= 0) {
      setTimeout(() => {
        const arenaEl = this.container.querySelector('.dd-combat-arena');
        if (arenaEl) arenaEl.classList.add('arena-defeat-exit');
        setTimeout(() => {
          if (this.onClose) this.onClose();
        }, 580);
      }, 650);
      return;
    }

    setTimeout(() => {
      // Czas minął -> losuj inne pytanie, walka trwa dalej!
      const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
      this.loadQuestion(nextIdx, true);
    }, 650);
  }

  renderSpellBoard() {
    const stage = this.container.querySelector('#spell-stage');
    const q = this.questions[this.currentQuestionIndex];
    if (!stage || !q) return;

    const bonusSec = this.player.bonusTimeSec || 0;
    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stage.innerHTML = `
      <div class="ww-spell-card">
        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">📱 Olek:</span>
            <strong class="ww-bubble-quote">„${q.olekSpeech}”</strong>
            <button class="ww-quiz-speak-btn" id="spell-olek-speak" title="Posłuchaj Olka">🔊</button>
          </div>
          <div class="ww-spell-meta-right">
            ${bonusSec > 0 ? `<span class="ww-energy-bonus-pill">⚡ +${bonusSec}s z energetyka</span>` : ''}
            <span class="ww-quiz-step-pill">Zwrot ${this.currentQuestionIndex + 1} / ${this.questions.length}</span>
          </div>
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="spell-timer-fill" style="width: ${timerPct}%"></div>
          <span class="ww-spell-timer-text" id="spell-timer-text">⏱️ ${this.timeLeft}s</span>
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

        <!-- Rozsypane kafelki liter do klikania po kolei -->
        <div class="ww-spell-pool-row">
          ${this.poolTiles.map((tile) => `
            <button
              type="button"
              class="ww-spell-tile-btn ${tile.used ? 'is-used' : ''}"
              data-tile-id="${tile.id}"
              ${tile.used ? 'disabled' : ''}
            >
              ${tile.char}
            </button>
          `).join('')}
        </div>

        <div class="ww-anagram-subhint">
          Klikaj kolejne litery zwrotu (lub wpisuj je na klawiaturze)!
        </div>
      </div>
    `;

    const speakBtn = stage.querySelector('#spell-olek-speak');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (q.olekSpeakText) sound.speakPolish(q.olekSpeakText);
      });
    }

    stage.querySelectorAll('.ww-spell-tile-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.handleTilePick(btn.dataset.tileId, btn);
      });
    });
  }

  handleTilePick(tileId, btnEl) {
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
      // Błędna litera -> Olek atakuje za 5 HP!
      this.lockInput = true;
      sound.playEnemyHit();
      if (btnEl) btnEl.classList.add('is-wrong');

      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }

      this.updatePlayerHud();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      if (this.player.hp <= 0) {
        this.stopTimer();
        setTimeout(() => {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) arenaEl.classList.add('arena-defeat-exit');
          setTimeout(() => {
            if (this.onClose) this.onClose();
          }, 580);
        }, 650);
        return;
      }

      setTimeout(() => {
        if (btnEl) btnEl.classList.remove('is-wrong');
        this.lockInput = false;
      }, 420);
    }
  }

  handlePhraseSolved() {
    this.stopTimer();
    this.lockInput = true;
    const q = this.questions[this.currentQuestionIndex];

    sound.playAttackHit();
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
    }, 950);
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#mp-opponent-sprite-wrap' : '#mp-player-sprite-wrap'
    );

    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) {
      arenaEl.classList.remove('dd-screen-shake');
      void arenaEl.offsetWidth;
      arenaEl.classList.add('dd-screen-shake');
    }

    if (!spriteWrap) return;

    const fx = document.createElement('div');
    fx.className = 'dd-white-slash-fx';
    fx.innerHTML = `
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path
          class="dd-slash-arc"
          d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z"
        />
      </svg>
      <span class="dd-slash-dmg">${dmgText}</span>
    `;
    spriteWrap.appendChild(fx);
    setTimeout(() => fx.remove(), 520);
  }

  updateEnemyHud() {
    const fill = this.container.querySelector('#mp-enemy-hp-fill');
    const txt = this.container.querySelector('#mp-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerHud() {
    const fill = this.container.querySelector('#mp-player-hp-fill');
    const txt = this.container.querySelector('#mp-player-hp-text');
    const pct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  finishBattle() {
    sound.playFanfare();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) {
      arenaEl.classList.add('arena-victory-exit');
    }

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: this.score });
      }
    }, 600);
  }

  destroy() {
    this.stopTimer();
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
  }
}
