// Minigra / Pojedynek z Bossem: CWANIAK (68 HP, 5 obrażeń)
// Ostateczny Boss Miasta: Pytania i wyzwania ze wszystkich poprzednich modułów
// Zasady: Czas 10s na odpowiedź, każda poprawna odpowiedź daje +5s do czasu i zadaje 25 ciosu!
// Minigry: Match Up, Speed Sorting, Gameshow Quiz.
// Błędna odpowiedź lub upływ czasu: Cwaniak zadaje 5 obrażeń i resetuje czas do 10s.

import { CWANIAK_CHALLENGES } from '../data/dialogSteps.js';
import { getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class BossCwaniakGame {
  constructor(container, {
    player,
    onPlayerDamaged,
    onComplete,
    onClose,
    enemyName = 'Cwaniak',
    enemyTitle = '🕶️ BOSS: CWANIAK 🕶️',
    enemySubtitle = 'CWANIAK (MISTRZ MIASTA) 🕶️',
    enemyAvatar = './assets/Postacie/Cwaniak.png',
    challenges = CWANIAK_CHALLENGES,
    arenaClass = 'cwaniak-arena',
    enemyMaxHp = 68
  }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.enemyName = enemyName;
    this.enemyTitle = enemyTitle;
    this.enemySubtitle = enemySubtitle;
    this.enemyAvatar = enemyAvatar;
    this.arenaClass = arenaClass;

    this.enemyMaxHp = enemyMaxHp;
    this.enemyHp = enemyMaxHp;
    this.enemyDamage = 5;
    this.tanDamage = getPlayerDamage(this.player);

    this.maxTime = 10 + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;
    this.damageTakenInBattle = 0;

    this.challenges = [...challenges].sort(() => Math.random() - 0.5);
    this.currentIdx = 0;
    this.lockInput = false;

    // Do Match Up
    this.matchupSelectedLeft = null;
    this.matchupPairsLeft = [];

    // Do Speed Sorting
    this.sortingItems = [];
    this.currentSortItemIdx = 0;
  }

  mount() {
    this.renderArena();
    this.startRound();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena boss-arena ${this.arenaClass}">
        <h2 class="mp-animated-title" id="cwaniak-title" style="top: 22px;">${this.enemyTitle}</h2>

        <!-- Górny licznik czasu (10s + 5s za poprawną) -->
        <div class="boss-timer-badge" id="cwaniak-timer-badge">
          <span class="boss-timer-icon">⏱️</span>
          <span class="boss-timer-val" id="cwaniak-timer-val">${this.maxTime.toFixed(1)}s</span>
          <span class="boss-timer-bonus" id="cwaniak-timer-bonus">+5s</span>
        </div>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="cwaniak-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemySubtitle}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="cwaniak-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="cwaniak-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="cwaniak-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container boss-opponent-sprite-container" id="cwaniak-opponent-sprite-wrap">
            <img
              src="${this.enemyAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite sprite-${(this.enemyName || 'cwaniak').toLowerCase()}"
              id="cwaniak-sprite"
              onerror="this.src='./public${this.enemyAvatar.replace(/^\./, '')}'"
            />
          </div>
        </div>

        <!-- Środek areny: Aktywne wyzwanie (Quiz / Match Up / Sorting) -->
        <div class="matching-stage-wrapper boss-stage-wrapper" id="cwaniak-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="cwaniak-player-box">
          <div class="dd-sprite-container player-sprite-container" id="cwaniak-player-sprite-wrap">
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
              <div class="dd-fighter-hp-fill" id="cwaniak-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="cwaniak-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const cwaniakTitle = this.container.querySelector('#cwaniak-title');
    if (cwaniakTitle) {
      const dismiss = () => {
        if (!cwaniakTitle.classList.contains('is-dismissed')) {
          cwaniakTitle.classList.remove('is-centered');
          cwaniakTitle.classList.add('is-dismissed');
          setTimeout(() => {
            if (cwaniakTitle.parentNode) cwaniakTitle.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }
  }

  startTimer() {
    this.stopTimer();
    const timerVal = this.container.querySelector('#cwaniak-timer-val');
    const timerBadge = this.container.querySelector('#cwaniak-timer-badge');

    this.timerInterval = setInterval(() => {
      this.timeLeft = Math.max(0, this.timeLeft - 0.1);
      if (timerVal) {
        timerVal.textContent = `${this.timeLeft.toFixed(1)}s`;
      }

      if (this.timeLeft <= 3.5 && timerBadge) {
        timerBadge.classList.add('timer-panic');
      } else if (timerBadge) {
        timerBadge.classList.remove('timer-panic');
      }

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 100);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  addBonusTime(sec = 5) {
    this.timeLeft += sec;
    const bonusEl = this.container.querySelector('#cwaniak-timer-bonus');
    if (bonusEl) {
      bonusEl.textContent = `+${sec}s`;
      bonusEl.classList.remove('bonus-pop');
      void bonusEl.offsetWidth;
      bonusEl.classList.add('bonus-pop');
    }
  }

  startRound() {
    if (this.enemyHp <= 0) {
      this.finishBattle();
      return;
    }

    this.lockInput = false;
    const stageEl = this.container.querySelector('#cwaniak-stage');
    if (!stageEl) return;

    const challenge = this.challenges[this.currentIdx % this.challenges.length];

    if (challenge.type === 'quiz') {
      this.renderGameshowQuiz(stageEl, challenge);
    } else if (challenge.type === 'matchup') {
      this.renderMatchUp(stageEl, challenge);
    } else if (challenge.type === 'sorting') {
      this.renderSpeedSorting(stageEl, challenge);
    }

    this.startTimer();
  }

  // 1. GAMESHOW QUIZ
  renderGameshowQuiz(stageEl, challenge) {
    const enemyTag = this.enemyName ? this.enemyName.toUpperCase() : 'BOSS';
    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-quiz-card">
        <div class="boss-challenge-badge boss-round-tag">🎮 GAMESHOW QUIZ • ${enemyTag}</div>
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="boss-options-grid boss-quiz-options">
          ${challenge.options.map((opt, idx) => `
            <button type="button" class="btn-boss-opt" data-idx="${idx}">
              <span class="bbo-bullet">${['A', 'B', 'C', 'D'][idx]}</span>
              <span class="bbo-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stageEl.querySelectorAll('.btn-boss-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        this.lockInput = true;
        const idx = parseInt(btn.dataset.idx, 10);
        const opt = challenge.options[idx];

        if (opt.correct) {
          btn.classList.add('is-correct');
          this.handleCorrect();
        } else {
          btn.classList.add('is-wrong');
          this.handleWrong();
        }
      });
    });
  }

  // 2. MATCH UP
  renderMatchUp(stageEl, challenge) {
    this.matchupPairsLeft = [...challenge.pairs];
    this.matchupSelectedLeft = null;
    const enemyTag = this.enemyName ? this.enemyName.toUpperCase() : 'BOSS';

    const leftItems = [...challenge.pairs].map(p => p.left).sort(() => Math.random() - 0.5);
    const rightItems = [...challenge.pairs].map(p => p.right).sort(() => Math.random() - 0.5);

    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-matchup-card">
        <div class="boss-challenge-badge boss-round-tag">🧩 MATCH UP • ${enemyTag}</div>
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="boss-mu-columns">
          <div class="boss-mu-col left" id="cwaniak-mu-left">
            ${leftItems.map(txt => `<button type="button" class="btn-mu-tile left-tile" data-val="${txt}">${txt}</button>`).join('')}
          </div>
          <div class="boss-mu-col right" id="cwaniak-mu-right">
            ${rightItems.map(txt => `<button type="button" class="btn-mu-tile right-tile" data-val="${txt}">${txt}</button>`).join('')}
          </div>
        </div>
      </div>
    `;

    const leftButtons = stageEl.querySelectorAll('.left-tile');
    const rightButtons = stageEl.querySelectorAll('.right-tile');

    leftButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched')) return;
        leftButtons.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        this.matchupSelectedLeft = btn.dataset.val;
        sound.playStep();
      });
    });

    rightButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched') || !this.matchupSelectedLeft) return;
        const rightVal = btn.dataset.val;
        const pair = challenge.pairs.find(p => p.left === this.matchupSelectedLeft && p.right === rightVal);

        if (pair) {
          btn.classList.add('is-matched');
          const leftBtn = stageEl.querySelector(`.left-tile[data-val="${this.matchupSelectedLeft}"]`);
          if (leftBtn) leftBtn.classList.add('is-matched');
          sound.playSuccess();
          this.matchupPairsLeft = this.matchupPairsLeft.filter(p => p.left !== this.matchupSelectedLeft);
          this.matchupSelectedLeft = null;
          leftButtons.forEach(b => b.classList.remove('is-selected'));

          if (this.matchupPairsLeft.length === 0) {
            this.handleCorrect();
          }
        } else {
          btn.classList.add('is-wrong');
          sound.playWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 450);
        }
      });
    });
  }

  // 3. SPEED SORTING
  renderSpeedSorting(stageEl, challenge) {
    this.sortingItems = [...challenge.items];
    this.currentSortItemIdx = 0;

    const renderSortingStep = () => {
      if (this.currentSortItemIdx >= this.sortingItems.length) {
        this.handleCorrect();
        return;
      }

      const item = this.sortingItems[this.currentSortItemIdx];

      const enemyTag = this.enemyName ? this.enemyName.toUpperCase() : 'BOSS';
      stageEl.innerHTML = `
        <div class="boss-card-challenge boss-sorting-card">
          <div class="boss-challenge-badge boss-round-tag">⚡ SPEED SORTING • ${enemyTag}</div>
          <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>

          <div class="boss-sort-active-item">
            <span class="bsi-num">${this.currentSortItemIdx + 1}/${this.sortingItems.length}</span>
            <strong class="bsi-text">„${item.text}”</strong>
          </div>

          <div class="boss-sort-buckets">
            ${challenge.categories.map((cat, idx) => `
              <button type="button" class="btn-sort-bucket" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      stageEl.querySelectorAll('.btn-sort-bucket').forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.lockInput) return;
          const chosenCat = btn.dataset.cat;
          if (chosenCat === item.category) {
            sound.playSuccess();
            btn.classList.add('is-correct');
            this.currentSortItemIdx++;
            setTimeout(() => renderSortingStep(), 350);
          } else {
            sound.playWrong();
            btn.classList.add('is-wrong');
            setTimeout(() => btn.classList.remove('is-wrong'), 400);
            this.handleWrong();
          }
        });
      });
    };

    renderSortingStep();
  }

  handleCorrect() {
    this.stopTimer();
    sound.playHit(this.enemyName);
    this.addBonusTime(5);

    this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
    this.updateOpponentBar();

    const bossSprite = this.container.querySelector('#cwaniak-sprite');
    if (bossSprite) {
      bossSprite.classList.add('shake-hit');
      setTimeout(() => bossSprite.classList.remove('shake-hit'), 500);
    }

    setTimeout(() => {
      this.currentIdx++;
      if (this.enemyHp <= 0) {
        this.finishBattle();
      } else {
        this.startRound();
      }
    }, 750);
  }

  handleWrong() {
    sound.playWrong();
    sound.playEnemyHit(this.enemyName);
    this.damageTakenInBattle += this.enemyDamage;
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }

    this.updatePlayerBar();
    const playerSprite = this.container.querySelector('.sprite-tan');
    if (playerSprite) {
      playerSprite.classList.add('shake-hit');
      setTimeout(() => playerSprite.classList.remove('shake-hit'), 500);
    }

    this.timeLeft = this.maxTime;
  }

  handleTimeout() {
    sound.playWrong();
    sound.playEnemyHit(this.enemyName);
    this.damageTakenInBattle += this.enemyDamage;
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }

    this.updatePlayerBar();
    const playerSprite = this.container.querySelector('.sprite-tan');
    if (playerSprite) {
      playerSprite.classList.add('shake-hit');
      setTimeout(() => playerSprite.classList.remove('shake-hit'), 500);
    }

    this.timeLeft = this.maxTime;
    this.currentIdx++;
    this.startRound();
  }

  updatePlayerBar() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const fill = this.container.querySelector('#cwaniak-player-hp-fill');
    const txt = this.container.querySelector('#cwaniak-player-hp-text');
    if (fill) fill.style.width = `${playerHpPct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  updateOpponentBar() {
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const fill = this.container.querySelector('#cwaniak-enemy-hp-fill');
    const txt = this.container.querySelector('#cwaniak-enemy-hp-text');
    if (fill) fill.style.width = `${enemyHpPct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  finishBattle() {
    this.stopTimer();
    sound.playFanfare();
    const stageEl = this.container.querySelector('#cwaniak-stage');
    if (stageEl) {
      stageEl.innerHTML = `
        <div class="boss-victory-splash">
          <div class="bvs-trophy">🏆🌟</div>
          <h2>${this.enemyName.toUpperCase()} ZOSTAŁ(A) POKONANY(A)!</h2>
          <p>Wspaniały wynik! Opanowałeś wszystkie wyzwania z języka polskiego A0!</p>
        </div>
      `;
    }

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: 1000, damageTaken: this.damageTakenInBattle });
      }
    }, 1500);
  }

  destroy() {
    this.stopTimer();
    this.container.innerHTML = '';
  }
}
