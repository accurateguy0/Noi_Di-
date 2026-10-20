// Poziom Wordwall: QUIZ (Seria pytań wielokrotnego wyboru — wybierz poprawną odpowiedź, aby przejść dalej)
// Walka z Gejmerem Olkiem na Planszy 2 (Pole 2: Mijanka 5 HP, Pole 4: Dzwonek szkolny 10 HP)

import { OLEK_QUIZ_ENCOUNTERS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class OlekQuizGame {
  constructor(container, { encounterKey = 'encounter_1', player, onPlayerDamaged, onComplete, onClose }) {
    this.container = container;
    this.encounterKey = encounterKey;
    this.encounter = OLEK_QUIZ_ENCOUNTERS[encounterKey] || OLEK_QUIZ_ENCOUNTERS.encounter_1;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20, bonusDamage: 0 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.isFixedDialogue =
      encounterKey === 'encounter_1' ||
      encounterKey === 'encounter_2' ||
      encounterKey === 'encounter_board6_olek';

    this.enemyMaxHp = this.encounter.enemyMaxHp;
    this.enemyHp = this.encounter.enemyMaxHp;
    this.enemyDamage = this.encounter.enemyDamage;
    this.tanDamage = getPlayerDamage(this.player);
    this.questions = this.encounter.questions;
    this.currentQuestionIndex = 0;
    this.lockInput = false;
    this.score = 0;
    this.introDismissed = false;
  }

  mount() {
    this.renderArenaShell();
    this.loadQuestion(0, false);
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
      <div class="dd-combat-arena quiz-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Quiz</h2>

        <!-- Prawy górny róg: Gejmer Olek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.encounter.opponentName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container ${this.encounter.spriteClass === 'sprite-nauczycielka' ? 'nauczycielka-sprite-container' : 'olek-sprite-container'}" id="mp-opponent-sprite-wrap">
            <img
              src="${this.encounter.opponentAvatar || './assets/Postacie/Gejmer.png'}"
              alt="${this.encounter.opponentName || 'Przeciwnik'}"
              class="dd-fighter-sprite ${this.encounter.spriteClass || 'sprite-olek'}"
              id="mp-opponent-sprite"
              onerror="this.src='./public${this.encounter.opponentAvatar?.slice(1) || '/assets/Postacie/Gejmer.png'}'"
            />
          </div>
        </div>

        <!-- Środek areny: Karty Quizu Wordwall -->
        <div class="matching-stage-wrapper quiz-stage-wrapper" id="quiz-stage"></div>

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
      });
    }
  }

  loadQuestion(index, autoSpeak = true) {
    this.currentQuestionIndex = index;
    this.lockInput = false;

    const q = this.questions[index];
    const stage = this.container.querySelector('#quiz-stage');
    if (!stage || !q) return;

    if (q.playBellOnStart) {
      sound.playSchoolBell();
      setTimeout(() => {
        if (q.olekSpeakText) sound.speakPolish(q.olekSpeakText);
      }, 950);
    } else if (autoSpeak && this.introDismissed && q.olekSpeakText) {
      sound.speakPolish(q.olekSpeakText);
    }

    const letters = ['A', 'B', 'C', 'D'];

    stage.innerHTML = `
      <div class="ww-quiz-card">
        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">🎮 Olek:</span>
            <strong class="ww-bubble-quote">„${q.olekSpeech}”</strong>
            <button class="ww-quiz-speak-btn" id="quiz-olek-speak" title="Posłuchaj Olka">🔊</button>
          </div>
          ${this.questions.length > 1 ? `<span class="ww-quiz-step-pill">Pytanie ${index + 1} / ${this.questions.length}</span>` : ''}
        </div>

        <div class="ww-quiz-prompt-box">
          <p class="ww-quiz-prompt-pl">${q.promptPl}</p>
        </div>

        <div class="ww-quiz-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="ww-quiz-option-btn" data-idx="${idx}">
              <span class="ww-opt-letter">${letters[idx] || ''}</span>
              <span class="ww-opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const speakBtn = stage.querySelector('#quiz-olek-speak');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (q.playBellOnStart) {
          sound.playSchoolBell();
        }
        if (q.olekSpeakText) {
          sound.speakPolish(q.olekSpeakText);
        }
      });
    }

    stage.querySelectorAll('.ww-quiz-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        this.handleOptionClick(idx, btn);
      });
    });
  }

  getRandomDifferentIndex(excludeIdx) {
    if (this.questions.length <= 1) return 0;
    let nextIdx = excludeIdx;
    while (nextIdx === excludeIdx) {
      nextIdx = Math.floor(Math.random() * this.questions.length);
    }
    return nextIdx;
  }

  handleOptionClick(idx, btnEl) {
    if (this.lockInput) return;
    const q = this.questions[this.currentQuestionIndex];
    const opt = q?.options[idx];
    if (!opt) return;

    if (opt.correct) {
      this.lockInput = true;
      btnEl.classList.add('is-correct');
      this.score += 150;

      if (opt.speakText) {
        sound.speakPolish(opt.speakText);
      }
      sound.playSuccess();

      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateOpponentBar();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      setTimeout(() => {
        if (this.isFixedDialogue) {
          // Zafiksowany zestaw pytań (Mijanka, Dzwonek szkolny, Gejmer Olek)
          if (this.currentQuestionIndex + 1 < this.questions.length && this.enemyHp > 0) {
            this.loadQuestion(this.currentQuestionIndex + 1, true);
          } else {
            const arenaEl = this.container.querySelector('.dd-combat-arena');
            if (arenaEl) arenaEl.classList.add('arena-victory-exit');
            if (this.onComplete) this.onComplete({ score: this.score });
          }
        } else {
          // Walka bojowa (np. Nauczycielka): gra nie kończy się, dopóki życie wroga się nie skończy!
          if (this.enemyHp <= 0) {
            const arenaEl = this.container.querySelector('.dd-combat-arena');
            if (arenaEl) arenaEl.classList.add('arena-victory-exit');
            if (this.onComplete) this.onComplete({ score: this.score });
          } else {
            const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
            this.loadQuestion(nextIdx, true);
          }
        }
      }, 900);
    } else {
      this.lockInput = true;
      btnEl.classList.add('is-wrong');
      sound.playMiss();

      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      this.updatePlayerBar();
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.player.hp);
      }
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      if (this.player.hp <= 0) {
        setTimeout(() => {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) arenaEl.classList.add('arena-defeat-exit');
          setTimeout(() => {
            if (this.onClose) this.onClose({ defeated: true });
          }, 600);
        }, 650);
        return;
      }

      setTimeout(() => {
        if (this.isFixedDialogue) {
          // W dialogach zafiksowanych: pytanie rusza dalej do kolejnego i gra kończy się bez powrotu
          if (this.currentQuestionIndex + 1 < this.questions.length) {
            this.loadQuestion(this.currentQuestionIndex + 1, true);
          } else {
            const arenaEl = this.container.querySelector('.dd-combat-arena');
            if (arenaEl) arenaEl.classList.add('arena-victory-exit');
            if (this.onComplete) this.onComplete({ score: this.score });
          }
        } else {
          // W walkach bojowych (np. Nauczycielka): rusza do innego losowego pytania z puli
          const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 850);
    }
  }

  updateOpponentBar() {
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const fillEl = this.container.querySelector('#mp-enemy-hp-fill');
    const textEl = this.container.querySelector('#mp-enemy-hp-text');
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (textEl) textEl.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerBar() {
    const pct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const fillEl = this.container.querySelector('#mp-player-hp-fill');
    const textEl = this.container.querySelector('#mp-player-hp-text');
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (textEl) textEl.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#mp-opponent-sprite-wrap' : '#mp-player-sprite-wrap'
    );

    this.container.classList.remove('dd-screen-shake');
    void this.container.offsetWidth;
    this.container.classList.add('dd-screen-shake');
    clearTimeout(this.shakeTimer);
    this.shakeTimer = setTimeout(() => {
      this.container.classList.remove('dd-screen-shake');
    }, 300);

    if (!spriteWrap) return;

    const slashEl = document.createElement('div');
    slashEl.className = 'dd-white-slash-fx';
    slashEl.innerHTML = `
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <path
          class="dd-slash-arc"
          d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 164 42 C 132 54, 72 102, 42 162 C 74 118, 134 74, 164 42 Z"
        />
      </svg>
      ${dmgText ? `<span class="dd-slash-dmg">${dmgText}</span>` : ''}
    `;

    spriteWrap.appendChild(slashEl);
    setTimeout(() => slashEl.remove(), 550);
  }

  destroy() {
    this.container.innerHTML = '';
  }
}
