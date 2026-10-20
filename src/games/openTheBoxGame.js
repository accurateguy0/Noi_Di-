// Minigra Wordwall: OPEN THE BOX (Otwórz pudełko i dopasuj obraz do słowa)
// Plansza 1 w Mieście (Żabka / Biedronka) - Pole 5: Kasjerka (20 HP, 10 obrażeń)
// Zasady: Czas 5s na odpowiedź. Czas resetuje się po każdej wybranej odpowiedzi.
// Zadanie: Dopasuj obraz do właściwego słowa / formy biernika.

import { sound } from '../audio/sound.js';
import { getPlayerDamage } from '../data/vocabulary.js';

export class OpenTheBoxGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose, shoppingChoices = {} }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.shoppingChoices = shoppingChoices;

    this.enemyMaxHp = 20;
    this.enemyHp = 20;
    this.enemyDamage = 10;
    this.tanDamage = getPlayerDamage(this.player);

    this.maxTime = 5;
    this.timeLeft = 5;
    this.timerInterval = null;
    this.lockInput = false;

    // Pula zagadek w pudełkach (Dopasuj obraz do słowa)
    this.boxesPool = [
      {
        id: 'box_woda',
        title: 'Butelka napoju',
        image: './assets/slowka/woda.jpg',
        correctWord: 'wodę',
        correctPhrase: 'Poproszę wodę.',
        options: [
          { text: '💧 Poproszę wodę.', correct: true },
          { text: '🥖 Poproszę bułkę.', correct: false },
          { text: '🥔 Poproszę czipsy.', correct: false },
          { text: '🛍️ Poproszę reklamówkę.', correct: false }
        ]
      },
      {
        id: 'box_bulka',
        title: 'Świeże pieczywo',
        image: './assets/slowka/bulka.jpg',
        correctWord: 'bułkę',
        correctPhrase: 'Poproszę bułkę.',
        options: [
          { text: '🥖 Poproszę bułkę.', correct: true },
          { text: '💧 Poproszę wodę.', correct: false },
          { text: '💳 Płacę kartą.', correct: false },
          { text: '🥔 Poproszę czipsy.', correct: false }
        ]
      },
      {
        id: 'box_czipsy',
        title: 'Przekąska',
        image: './assets/slowka/czipsy.jpg',
        correctWord: 'czipsy',
        correctPhrase: 'Poproszę czipsy.',
        options: [
          { text: '🥔 Poproszę czipsy.', correct: true },
          { text: '🥖 Poproszę bułkę.', correct: false },
          { text: '💵 Płacę gotówką.', correct: false },
          { text: '💧 Poproszę wodę.', correct: false }
        ]
      },
      {
        id: 'box_karta',
        title: 'Forma płatności',
        image: './assets/slowka/karta_kredytowa.jpg',
        correctWord: 'karta',
        correctPhrase: 'Zapłacę kartą.',
        options: [
          { text: '💳 Zapłacę kartą.', correct: true },
          { text: '💵 Zapłacę gotówką.', correct: false },
          { text: '🛍️ Poproszę reklamówkę.', correct: false },
          { text: '🥖 Poproszę bułkę.', correct: false }
        ]
      },
      {
        id: 'box_gotowka',
        title: 'Banknoty i monety',
        image: './assets/slowka/gotowka.jpg',
        correctWord: 'gotówka',
        correctPhrase: 'Zapłacę gotówką.',
        options: [
          { text: '💵 Zapłacę gotówką.', correct: true },
          { text: '💳 Zapłacę kartą.', correct: false },
          { text: '💧 Poproszę wodę.', correct: false },
          { text: '🥔 Poproszę czipsy.', correct: false }
        ]
      }
    ].sort(() => Math.random() - 0.5);

    this.currentBoxIdx = 0;
    this.openedBoxesCount = 0;
  }

  mount() {
    this.renderArena();
    this.openNextBox();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena otb-arena">
        <h2 class="mp-animated-title" id="otb-title" style="top: 22px;">📦 OPEN THE BOX (Czas 5s!) 📦</h2>

        <!-- Licznik 5s -->
        <div class="otb-timer-pill" id="otb-timer-pill">
          ⏱️ <span id="otb-timer-sec">5s</span>
        </div>

        <!-- Prawy górny róg: Kasjerka (Mistrzynia Żabki) -->
        <div class="dd-arena-fighter dd-arena-opponent" id="otb-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kasjerka (Żabka) 🛒</span>
            </div>
            <div class="dd-fighter-hp-bar" id="otb-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="otb-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="otb-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container kasjerka-sprite-container" id="otb-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Mistrzynia_Zabki.png"
              alt="Kasjerka"
              class="dd-fighter-sprite sprite-kasjerka"
              id="otb-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Mistrzynia_Zabki.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Pudełko i pytania -->
        <div class="matching-stage-wrapper otb-stage-wrapper" id="otb-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="otb-player-box">
          <div class="dd-sprite-container player-sprite-container" id="otb-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name || 'Tan'}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="otb-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="otb-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const titleEl = this.container.querySelector('.mp-animated-title');
    if (titleEl) {
      const dismiss = () => {
        if (!titleEl.classList.contains('is-dismissed')) {
          titleEl.classList.remove('is-centered');
          titleEl.classList.add('is-dismissed');
          setTimeout(() => {
            if (titleEl.parentNode) titleEl.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }
  }

  openNextBox() {
    if (this.enemyHp <= 0) {
      this.finishBattle();
      return;
    }

    this.lockInput = false;
    const stageEl = this.container.querySelector('#otb-stage');
    if (!stageEl) return;

    const item = this.boxesPool[this.currentBoxIdx % this.boxesPool.length];
    const boxNumber = (this.currentBoxIdx % 4) + 1;

    stageEl.innerHTML = `
      <div class="otb-box-card">
        <div class="otb-box-banner">PUDEŁKO NR ${boxNumber} 📦 — Dopasuj obraz do słowa:</div>
        <div class="otb-box-content">
          <div class="otb-mystery-box opened">
            <div class="otb-box-lid"></div>
            <div class="otb-item-display">
              <img src="${item.image}" alt="${item.title}" class="otb-revealed-img" onerror="this.src='./public/assets/slowka/woda.jpg'" />
              <span class="otb-item-hint">${item.title}</span>
            </div>
          </div>
          <div class="otb-options-column">
            ${item.options.map((opt, idx) => `
              <button type="button" class="otb-choice-btn" data-idx="${idx}">
                ${opt.text}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    stageEl.querySelectorAll('.otb-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        this.lockInput = true;
        const idx = parseInt(btn.dataset.idx, 10);
        const opt = item.options[idx];

        if (opt.correct) {
          btn.classList.add('is-correct');
          this.handleCorrect();
        } else {
          btn.classList.add('is-wrong');
          this.handleWrong();
        }
      });
    });

    this.startTimer();
  }

  startTimer() {
    this.stopTimer();
    this.timeLeft = this.maxTime;
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      this.updateTimerDisplay();

      if (this.timeLeft <= 2 && this.timeLeft > 0) {
        sound.playTick();
      }

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

  updateTimerDisplay() {
    const secEl = this.container.querySelector('#otb-timer-sec');
    const pill = this.container.querySelector('#otb-timer-pill');
    if (secEl) secEl.textContent = `${this.timeLeft}s`;
    if (pill) {
      pill.classList.toggle('is-urgent', this.timeLeft <= 2);
    }
  }

  handleCorrect() {
    this.stopTimer();
    sound.playAttack();
    sound.playSuccess();
    this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
    this.triggerFighterHit('opponent', `-${this.tanDamage}`);
    this.updateEnemyHud();

    setTimeout(() => {
      if (this.enemyHp <= 0) {
        this.finishBattle();
      } else {
        this.currentBoxIdx++;
        this.openNextBox();
      }
    }, 700);
  }

  handleWrong() {
    this.stopTimer();
    sound.playHurt();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }
    this.updatePlayerHud();

    setTimeout(() => {
      if (this.player.hp > 0) {
        this.currentBoxIdx++;
        this.openNextBox();
      }
    }, 800);
  }

  handleTimeout() {
    this.stopTimer();
    sound.playHurt();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }
    this.updatePlayerHud();

    setTimeout(() => {
      if (this.player.hp > 0) {
        this.currentBoxIdx++;
        this.openNextBox();
      }
    }, 800);
  }

  triggerFighterHit(target = 'opponent', dmgText = '-10') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#otb-opponent-sprite-wrap' : '#otb-player-sprite-wrap'
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
    const fill = this.container.querySelector('#otb-enemy-hp-fill');
    const txt = this.container.querySelector('#otb-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerHud() {
    const fill = this.container.querySelector('#otb-player-hp-fill');
    const txt = this.container.querySelector('#otb-player-hp-text');
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
        this.onComplete({ score: 100 });
      }
    }, 600);
  }

  destroy() {
    this.stopTimer();
  }
}
