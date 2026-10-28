// Poziom Wordwall: FIND THE MATCH (Szybkie dopasowanie właściwego słowa z losowym tasowaniem)
// Walka ze Szczeniaczkiem (13 HP, bije po 2 HP)

import { FIND_MATCH_QUESTIONS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class FindMatchGame {
  constructor(container, options = {}) {
    this.container = container;
    const { player, onPlayerDamaged, onComplete, onClose, questions, title, enemyDamage, enemyMaxHp, enemyName, opponentAvatar } = options;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20, bonusDamage: 0, bonusTimeSec: 0, hints: 5 };
    if (this.player.hints === undefined) this.player.hints = 5;
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    const rawName = (enemyName || 'Szczeniak')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.enemyName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    this.opponentAvatar = opponentAvatar || './assets/Postacie/Szczeniak.png';

    this.questions = (questions && questions.length > 0) ? [...questions] : [...FIND_MATCH_QUESTIONS];
    this.titleText = this.enemyName;
    this.currentIndex = 0;
    this.currentShuffledOptions = [];

    this.tanDamage = options.tanDamage || getPlayerDamage(this.player);
    this.enemyMaxHp = options.enemyMaxHp || enemyMaxHp || (options.node?.enemyMaxHp) || 13;
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = enemyDamage || 2;

    this.baseTime = 10; // 10s na szybką reakcję w sytuacji życiowej
    this.maxTime = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;

    this.lockInput = false;
    this.introDismissed = false;
    this.score = 0;
  }

  mount() {
    this.renderArenaShell();
    this.loadQuestion(0, false);
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const isWideSprite = (this.opponentAvatar || '').toLowerCase().includes('szczeniak') ||
                         (this.enemyName || '').toLowerCase().includes('szczeniak');
    const wideClass = isWideSprite ? 'wide-sprite-container szczeniak-sprite-container' : '';

    this.container.innerHTML = `
      <div class="dd-combat-arena fm-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">${this.enemyName}</h2>

        <!-- Przycisk Podpowiedzi (?) -->
        <div class="arena-top-controls" style="position: absolute; top: 18px; left: 24px; z-index: 40;">
          <button type="button" class="btn-dicey-hud" id="fm-hint-btn" style="background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; padding: 6px 14px; border: 2px solid #60a5fa; cursor: pointer;">
            ❓ Tłumacz (${this.player.hints ?? 5})
          </button>
        </div>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemyName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container ${wideClass}" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite sprite-opponent"
              id="mp-opponent-sprite"
              onerror="this.src='./public${this.opponentAvatar.replace(/^\./, '')}'"
            />
          </div>
        </div>

        <!-- Środek areny: Karta Find the Match -->
        <div class="matching-stage-wrapper fm-stage-wrapper" id="fm-stage"></div>

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
        this.startTimer();
      });
    }

    const hintBtn = this.container.querySelector('#fm-hint-btn');
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
    const hintBtn = this.container.querySelector('#fm-hint-btn');
    if (hintBtn) {
      hintBtn.textContent = `❓ Tłumacz (${this.player.hints})`;
    }

    const q = this.questions[this.currentIndex];
    sound.speakPolish(q.promptPl);
    alert(`[Podpowiedź ?] Szukaj słowa odpowiadającego: ${q.promptPl}`);
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

    // Losowe tasowanie opcji odpowiedzi
    const shuffled = [...q.options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.currentShuffledOptions = shuffled;

    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stage.innerHTML = `
      <div class="ww-fm-card">
        <div class="ww-quiz-speech-row">
          <span class="ww-quiz-step-pill">${this.enemyName} (${this.enemyMaxHp} HP)</span>
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="fm-timer-fill" style="width: ${timerPct}%"></div>
          <span class="ww-spell-timer-text" id="fm-timer-text">${this.timeLeft}s</span>
        </div>

        <div class="ww-fm-prompt-box">
          <p class="ww-fm-prompt-text">${q.promptPl}</p>
        </div>

        <div class="ww-fm-options-grid">
          ${this.currentShuffledOptions.map((opt) => `
            <button type="button" class="ww-fm-option-btn" data-word="${opt}">
              <span class="ww-fm-word-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stage.querySelectorAll('.ww-fm-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const word = btn.dataset.word;
        this.handleChoice(word, btn);
      });
    });

    if (autoStart && this.introDismissed) {
      this.startTimer();
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      const fillEl = this.container.querySelector('#fm-timer-fill');
      const textEl = this.container.querySelector('#fm-timer-text');
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
    sound.playEnemyHit(this.enemyName);

    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    } else {
      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    }

    this.updatePlayerHud();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    setTimeout(() => {
      if (this.player.hp <= 0) {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      } else {
        // Czas minął -> przejdź do innego pytania
        const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
        this.loadQuestion(nextIdx, true);
      }
    }, 650);
  }

  handleChoice(chosenWord, btnEl) {
    if (this.lockInput) return;
    this.lockInput = true;
    this.stopTimer();

    const q = this.questions[this.currentIndex];
    const isCorrect = chosenWord === q.correctWord;

    if (isCorrect) {
      btnEl.classList.add('is-correct');
      sound.playAttackHit(this.enemyName);

      this.score += 120;
      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateEnemyHud();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      setTimeout(() => {
        if (this.enemyHp <= 0) {
          this.finishBattle();
        } else {
          const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 1050);
    } else {
      // Zła odpowiedź -> przeciwnik bije bohatera i przechodzimy do innego pytania!
      btnEl.classList.add('is-wrong');
      sound.playEnemyHit(this.enemyName);

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      } else {
        this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      }

      this.updatePlayerHud();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      setTimeout(() => {
        if (this.player.hp <= 0) {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        } else {
          // Błąd -> inne pytanie z puli
          const nextIdx = this.getRandomDifferentIndex(this.currentIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 1050);
    }
  }

  destroy() {
    this.stopTimer();
    this.lockInput = true;
    const stage = this.container ? this.container.querySelector('#fm-stage') : null;
    if (stage) stage.innerHTML = '';
  }

  finishBattle() {
    this.stopTimer();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) arenaEl.classList.add('arena-victory-exit');
    setTimeout(() => {
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

  triggerFighterHit(target = 'opponent', dmgText = '-1') {
    const wrap = this.container.querySelector(
      target === 'opponent' ? '#mp-opponent-sprite-wrap' : '#mp-player-sprite-wrap'
    );
    const arenaEl = this.container.querySelector('.dd-combat-arena');

    // Drżenie areny w momencie otrzymania ciosu
    if (arenaEl) {
      arenaEl.classList.remove('dd-screen-shake');
      void arenaEl.offsetWidth;
      arenaEl.classList.add('dd-screen-shake');
    }
    this.container.classList.remove('dd-screen-shake');
    void this.container.offsetWidth;
    this.container.classList.add('dd-screen-shake');

    if (!wrap) return;

    // Zakrzywione białe cięcie (curved slash fx)
    const slashEl = document.createElement('div');
    slashEl.className = 'dd-white-slash-fx';
    slashEl.innerHTML = `
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <path class="dd-slash-arc" d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z" />
        <path class="dd-slash-trail" d="M 164 42 C 132 54, 72 102, 42 162 C 74 118, 134 74, 164 42 Z" />
      </svg>
      ${dmgText ? `<span class="dd-slash-dmg">${dmgText}</span>` : ''}
    `;

    wrap.appendChild(slashEl);
    setTimeout(() => slashEl.remove(), 550);
  }
}
