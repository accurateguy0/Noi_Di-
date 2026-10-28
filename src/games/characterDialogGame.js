// Uniwersalna minigra dialogowo-starciowa dla postaci (Wuefista, Pielęgniarka, Gejmer, Piłkarz, Cwaniak)
// Styl Dicey Dungeons / Wordwall z dialogami sytuacyjnymi i walką turową

import { sound } from '../audio/sound.js';
import { getPlayerDamage } from '../data/vocabulary.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class CharacterDialogGame {
  constructor(container, {
    player,
    onPlayerDamaged,
    onComplete,
    onClose,
    enemyName = 'Wuefista',
    enemyTitle = 'WUEFISTA',
    enemySubtitle = 'Nauczyciel WF-u (30 HP, 3 dmg)',
    enemyAvatar = './assets/Postacie/Wuefista.png',
    enemyMaxHp = 30,
    enemyDamage = 3,
    steps = [],
    arenaClass = '',
    archetype = null
  }) {
    this.container = container;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    const cleanStr = (s) => String(s || '').replace(/\s*\([^)]*\)/g, '').replace(/\s*\[[^\]]*\]/g, '').trim();
    this.enemyName = cleanStr(enemyName) || 'Przeciwnik';
    this.enemyTitle = cleanStr(enemyTitle) || this.enemyName.toUpperCase();
    this.enemySubtitle = cleanStr(enemySubtitle);
    this.enemyAvatar = enemyAvatar;
    this.steps = steps || [];
    this.tanDamage = getPlayerDamage(this.player);

    // Archetypy: 'adaptive' (życie adaptuje się do gracza, wymagane poprawne odpowiedzi) | 'gadula' (stałe HP, przechodzi dalej)
    this.archetype = archetype || (enemyName?.toLowerCase().includes('pielegniarka') ? 'adaptive' : 'gadula');
    if (this.archetype === 'adaptive') {
      this.enemyMaxHp = this.steps.length > 0 ? (this.steps.length * this.tanDamage) : (enemyMaxHp || 20);
    } else {
      this.enemyMaxHp = enemyMaxHp || 30;
    }
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = enemyDamage;
    this.arenaClass = arenaClass || '';
    this.currentStepIdx = 0;
    this.lockInput = false;
    this.damageTakenInBattle = 0;
    this.baseTime = 10;
    this.maxTime = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;
    this.currentShuffledOptions = [];
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
    const textEl = this.container.querySelector('#cd-timer-text');
    const fillEl = this.container.querySelector('#cd-timer-fill');
    if (textEl) textEl.textContent = `${this.timeLeft}s`;
    if (fillEl) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));
      fillEl.style.width = `${pct}%`;
    }
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
    this.updatePlayerHp();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    if (this.player.hp <= 0) {
      setTimeout(() => {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }, 500);
      return;
    }

    setTimeout(() => {
      if (this.archetype === 'adaptive') {
        this.timeLeft = this.maxTime;
        this.updateTimerUI();
        this.lockInput = false;
        this.startTimer();
      } else {
        if (this.enemyHp > 0 && this.steps.length > 0) {
          this.currentStepIdx = (this.currentStepIdx + 1) % this.steps.length;
          this.renderCurrentStep();
        } else {
          this.finishVictory();
        }
      }
    }, 1000);
  }

  mount() {
    this.renderArena();
    this.renderCurrentStep();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena cd-arena ${this.arenaClass}">
        <h2 class="mp-animated-title" style="top: 22px;">${this.enemyName}</h2>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemyName}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill cd-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text cd-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="cd-opponent-sprite-wrap">
            <img
              src="${this.enemyAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite cd-opponent-sprite"
              onerror="this.src='./public${this.enemyAvatar.replace(/^\./, '')}'"
            />
          </div>
        </div>

        <!-- Środek: Okno dialogowe i wybór odpowiedzi -->
        <div class="cd-stage-wrapper" id="cd-stage"></div>

        <!-- Lewy dolny róg: Bohater -->
        <div class="dd-arena-fighter dd-arena-player">
          <div class="dd-sprite-container player-sprite-container" id="cd-player-sprite-wrap">
            <img
              src="${this.player?.avatar || './assets/Warrior.png'}"
              alt="${this.player?.heroName || this.player?.name || 'Bohater'}"
              class="dd-fighter-sprite sprite-tan cd-tan-sprite"
              onerror="this.src='./assets/Warrior.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player?.heroName || this.player?.name || 'Bohater'}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill cd-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text cd-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
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

  renderCurrentStep() {
    this.stopTimer();
    const stageEl = this.container.querySelector('#cd-stage');
    if (!stageEl) return;

    if (this.currentStepIdx >= this.steps.length) {
      this.currentStepIdx = 0;
    }

    const step = this.steps[this.currentStepIdx];
    this.lockInput = false;
    this.timeLeft = this.maxTime;

    // Przeczytaj wypowiedź postaci (z uwzględnieniem płci lektora)
    const cleanSpeech = step.question.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu, '');
    sound.speakPolish(cleanSpeech, { character: this.enemyName });
    sound.triggerContextualSFX(cleanSpeech);

    // Losowe tasowanie opcji odpowiedzi (Fisher-Yates)
    const optionsWithOrigIdx = step.options.map((opt, i) => ({ ...opt, origIdx: i }));
    for (let i = optionsWithOrigIdx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithOrigIdx[i], optionsWithOrigIdx[j]] = [optionsWithOrigIdx[j], optionsWithOrigIdx[i]];
    }
    this.currentShuffledOptions = optionsWithOrigIdx;

    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stageEl.innerHTML = `
      <div class="ww-spell-timer-bar cd-timer-bar" style="width: 100%; margin-bottom: 10px;">
        <div class="ww-spell-timer-fill" id="cd-timer-fill" style="width: ${timerPct}%"></div>
        <span class="ww-spell-timer-text" id="cd-timer-text">${this.timeLeft}s</span>
      </div>

      <div class="cd-bubble-box">
        <div class="cd-character-avatar-bubble">
          <img src="${this.enemyAvatar}" alt="${this.enemyName}" />
        </div>
        <div class="cd-character-text">${step.question}</div>
      </div>

      <div class="cd-options-grid">
        ${this.currentShuffledOptions.map((opt, i) => `
          <button class="cd-option-card" data-shuffled-idx="${i}">
            <span class="cd-option-icon">${['A', 'B', 'C', 'D'][i] || '•'}</span>
            <span class="cd-option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    `;

    stageEl.querySelectorAll('.cd-option-card').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        const shuffledIdx = parseInt(btn.dataset.shuffledIdx, 10);
        this.handleChoice(btn, this.currentShuffledOptions[shuffledIdx]);
      });
    });

    this.startTimer();
  }

  handleChoice(btnEl, option) {
    if (this.lockInput) return;
    this.stopTimer();
    this.lockInput = true;

    if (option.correct) {
      btnEl.classList.add('is-correct');
      sound.playSuccess();
      sound.playHit(this.enemyName);
      sound.speakPolish(option.text.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu, ''));

      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateEnemyHp();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      const opponentSprite = this.container.querySelector('.cd-opponent-sprite');
      if (opponentSprite) {
        opponentSprite.classList.add('shake-hit');
        setTimeout(() => opponentSprite.classList.remove('shake-hit'), 500);
      }

      setTimeout(() => {
        if (this.enemyHp <= 0 || this.steps.length === 0) {
          this.finishVictory();
        } else if (this.archetype === 'adaptive' && this.currentStepIdx + 1 >= this.steps.length) {
          this.finishVictory();
        } else {
          this.currentStepIdx = (this.currentStepIdx + 1) % this.steps.length;
          this.renderCurrentStep();
        }
      }, 900);
    } else {
      this.timeLeft = this.maxTime;
      this.updateTimerUI();
      btnEl.classList.add('is-wrong');
      sound.playWrong();
      sound.playEnemyHit(this.enemyName);
      this.damageTakenInBattle += this.enemyDamage;

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }

      this.updatePlayerHp();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      const tanSprite = this.container.querySelector('.cd-tan-sprite');
      if (tanSprite) {
        tanSprite.classList.add('shake-hit');
        setTimeout(() => tanSprite.classList.remove('shake-hit'), 500);
      }

      if (this.player.hp <= 0) {
        setTimeout(() => {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        }, 500);
        return;
      }

      setTimeout(() => {
        if (this.archetype === 'adaptive') {
          // Adaptujący: gracz musi wybrać prawidłową odpowiedź, czas startuje od nowa!
          this.timeLeft = this.maxTime;
          this.updateTimerUI();
          this.lockInput = false;
          btnEl.classList.remove('is-wrong');
          this.startTimer();
        } else {
          // Gaduła: komentuje błąd i kontynuuje dialog dopóki jego HP > 0
          this.lockInput = false;
          if (this.enemyHp > 0 && this.steps.length > 0) {
            this.currentStepIdx = (this.currentStepIdx + 1) % this.steps.length;
            this.renderCurrentStep();
          } else {
            this.finishVictory();
          }
        }
      }, 800);
    }
  }

  updatePlayerHp() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const fill = this.container.querySelector('.cd-player-hp-fill');
    const txt = this.container.querySelector('.cd-player-hp-text');
    if (fill) fill.style.width = `${playerHpPct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  updateEnemyHp() {
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const fill = this.container.querySelector('.cd-enemy-hp-fill');
    const txt = this.container.querySelector('.cd-enemy-hp-text');
    if (fill) fill.style.width = `${enemyHpPct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  finishVictory() {
    sound.playFanfare();
    const stageEl = this.container.querySelector('#cd-stage');
    if (stageEl) {
      stageEl.innerHTML = `
        <div class="boss-victory-splash">
          <div class="bvs-trophy"></div>
          <h2>${this.enemyName.toUpperCase()} POKONANY!</h2>
          <p>Świetna rozmowa i pełne zrozumienie! Droga na planszy stoi otworem!</p>
        </div>
      `;
    }

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: 200, damageTaken: this.damageTakenInBattle });
      }
    }, 1400);
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
    const wrap = this.container.querySelector(
      target === 'opponent' ? '#cd-opponent-sprite-wrap' : '#cd-player-sprite-wrap'
    );
    const arenaEl = this.container.querySelector('.dd-combat-arena');

    if (arenaEl) {
      arenaEl.classList.remove('dd-screen-shake');
      void arenaEl.offsetWidth;
      arenaEl.classList.add('dd-screen-shake');
    }
    this.container.classList.remove('dd-screen-shake');
    void this.container.offsetWidth;
    this.container.classList.add('dd-screen-shake');

    if (!wrap) return;

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

  destroy() {
    this.stopTimer();
    this.container.innerHTML = '';
  }
}
