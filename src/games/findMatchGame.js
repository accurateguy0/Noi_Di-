// Poziom Wordwall: FIND THE MATCH (Znajdź pasujący element w 10 sekund)
// Pole 5 na Planszy 4: Walka ze Szczeniaczkiem (50 HP, bije po 1 HP)

import { FIND_MATCH_QUESTIONS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class FindMatchGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20, bonusTimeSec: 0, bonusDamage: 0 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.questions = [...FIND_MATCH_QUESTIONS];
    this.currentIndex = 0;

    this.tanDamage = getPlayerDamage(this.player);
    this.enemyMaxHp = this.questions.length * this.tanDamage;
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = 3; // Szczeniak bije po 3 HP (zwiększone o 2)

    this.baseTime = 10;
    this.timeLeft = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timerInterval = null;
    this.introDismissed = false;
    this.lockInput = false;
    this.score = 0;
  }

  mount() {
    this.renderArenaShell();
    this.loadQuestion(0, false);
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena findmatch-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Find the Match</h2>

        <!-- Prawy górny róg: Szczeniaczek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Szczeniaczek</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Szczeniak.png"
              alt="Szczeniaczek"
              class="dd-fighter-sprite sprite-szczeniak"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Szczeniak.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Karta pytania i opcje -->
        <div class="matching-stage-wrapper findmatch-stage-wrapper" id="fm-stage"></div>

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
        this.startTimer();
      });
    }
  }

  loadQuestion(index, autoStart = true) {
    this.stopTimer();
    this.currentIndex = index;
    this.lockInput = false;

    const q = this.questions[index];
    const stage = this.container.querySelector('#fm-stage');
    if (!stage || !q) return;

    this.maxTime = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;

    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stage.innerHTML = `
      <div class="ww-fm-card">
        <div class="ww-quiz-speech-row">
          <span class="ww-quiz-step-pill">🐾 Walka ze Szczeniaczkiem (50 HP)</span>
          ${this.player.bonusTimeSec > 0 ? `<span class="ww-energy-bonus-pill">⚡ +${this.player.bonusTimeSec}s z energetyka</span>` : ''}
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="fm-timer-fill" style="width: ${timerPct}%"></div>
          <span class="ww-spell-timer-text" id="fm-timer-text">⏱️ ${this.timeLeft}s</span>
        </div>

        <div class="ww-fm-prompt-box">
          <p class="ww-fm-prompt-text">${q.promptPl}</p>
        </div>

        <div class="ww-fm-options-grid">
          ${q.options.map((opt) => `
            <button type="button" class="ww-fm-option-btn" data-word="${opt}">
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stage.querySelectorAll('.ww-fm-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.handleChoice(btn.dataset.word, btn);
      });
    });

    if (autoStart && this.introDismissed) {
      this.startTimer();
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.lockInput) return;
      this.timeLeft = Math.max(0, this.timeLeft - 1);
      this.updateTimerUI();

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

  updateTimerUI() {
    const textEl = this.container.querySelector('#fm-timer-text');
    const fillEl = this.container.querySelector('#fm-timer-fill');
    if (textEl) textEl.textContent = `⏱️ ${this.timeLeft}s`;
    if (fillEl) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));
      fillEl.style.width = `${pct}%`;
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
    sound.playEnemyHit('szczeniak');

    this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }

    this.updatePlayerHud();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    setTimeout(() => {
      if (this.player.hp <= 0) {
        const arenaEl = this.container.querySelector('.dd-combat-arena');
        if (arenaEl) arenaEl.classList.add('arena-defeat-exit');
        setTimeout(() => {
          if (this.onClose) this.onClose({ defeated: true });
        }, 600);
      } else {
        // Czas minął -> przejdź do innego, losowego pytania (walka trwa dopóki HP > 0)
        const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
        this.loadQuestion(nextIdx, true);
      }
    }, 550);
  }

  handleChoice(chosenWord, btnEl) {
    if (this.lockInput) return;
    this.lockInput = true;
    this.stopTimer();

    const q = this.questions[this.currentIndex];
    const isCorrect = chosenWord === q.correctWord;

    if (isCorrect) {
      btnEl.classList.add('is-correct');
      sound.playAttackHit('szczeniak');
      sound.speakPolish(chosenWord);

      this.score += 120;
      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateEnemyHud();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      setTimeout(() => {
        if (this.enemyHp <= 0) {
          this.finishBattle();
        } else {
          // Gra nie kończy się dopóki życie się nie skończy -> inne pytanie
          const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 700);
    } else {
      btnEl.classList.add('is-wrong');
      sound.playEnemyHit('szczeniak');

      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }

      this.updatePlayerHud();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      setTimeout(() => {
        if (this.player.hp <= 0) {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) arenaEl.classList.add('arena-defeat-exit');
          setTimeout(() => {
            if (this.onClose) this.onClose({ defeated: true });
          }, 600);
        } else {
          // Niepoprawna odpowiedź -> inne losowe pytanie, walka trwa dalej!
          const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 550);
    }
  }

  triggerFighterHit(target = 'opponent', dmgText = '-1') {
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
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
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
    this.stopTimer();
    sound.playFanfare();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) arenaEl.classList.add('arena-victory-exit');

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: this.score });
      }
    }, 600);
  }

  destroy() {
    this.stopTimer();
  }
}
