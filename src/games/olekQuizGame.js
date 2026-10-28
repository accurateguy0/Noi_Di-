// Poziom Wordwall: QUIZ (Seria pytań wielokrotnego wyboru z losowym tasowaniem opcji)
// Czysty język polski bez zbędnych tłumaczeń wietnamskich (tłumaczenie pod przyciskiem "?")

import { OLEK_QUIZ_ENCOUNTERS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class OlekQuizGame {
  constructor(container, { encounterKey = 'encounter_1', player, node, onPlayerDamaged, onComplete, onClose }) {
    this.container = container;
    this.encounterKey = encounterKey;
    this.node = node;
    this.encounter = OLEK_QUIZ_ENCOUNTERS[encounterKey] || OLEK_QUIZ_ENCOUNTERS.encounter_1;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20, bonusDamage: 0, hints: 5 };
    if (this.player.hints === undefined) {
      this.player.hints = 5;
    }
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.tanDamage = getPlayerDamage(this.player);

    // Wykorzystaj pytania z węzła jeśli są zdefiniowane, inaczej ze słownika
    this.questions = (node?.questions && node.questions.length > 0)
      ? [...node.questions]
      : [...(this.encounter.questions || [])];

    this.opponentName = (node?.titlePl || this.encounter.opponentName || 'Przeciwnik')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.opponentAvatar = node?.icon || this.encounter.opponentAvatar || './assets/Postacie/Gejmer.png';
    this.titleText = this.opponentName;

    // Określenie archetypu: 'adaptive' (wymaga prawidłowych odp., HP dostosowane) | 'gadula' (stałe HP, przechodzi dalej)
    this.archetype = node?.archetype ||
      (this.opponentName.toLowerCase().includes('nauczycielka') ? 'adaptive' : 'gadula');

    this.enemyDamage = node?.enemyDamage || this.encounter.enemyDamage || 3;
    this.enemyMaxHp = node?.enemyMaxHp || this.encounter?.enemyMaxHp || Math.max(1, Math.min(24, this.questions.length * this.tanDamage));
    this.enemyHp = this.enemyMaxHp;

    this.currentQuestionIndex = 0;
    this.currentShuffledOptions = [];
    this.lockInput = false;
    this.score = 0;
    this.introDismissed = false;

    this.baseTime = 10; // 10s na odpowiedź (realistyczny czas reakcji)
    this.maxTime = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;
  }

  mount() {
    this.renderArenaShell();
    this.loadQuestion(0, false);
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena quiz-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">${this.titleText}</h2>

        <!-- Przycisk Podpowiedzi (?) z licznikiem -->
        <div class="arena-top-controls" style="position: absolute; top: 18px; left: 24px; z-index: 40;">
          <button type="button" class="btn-dicey-hud" id="quiz-hint-btn" style="background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; padding: 6px 14px; border: 2px solid #60a5fa; cursor: pointer;">
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
          <div class="dd-sprite-container opponent-sprite-container ${this.opponentName.toLowerCase().includes('nauczycielka') ? 'nauczycielka-sprite-container' : 'olek-sprite-container'}" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.opponentName}"
              class="dd-fighter-sprite ${this.encounter.spriteClass || (this.opponentName.toLowerCase().includes('nauczycielka') ? 'sprite-nauczycielka' : 'sprite-olek')}"
              id="mp-opponent-sprite"
              onerror="this.src='${this.opponentAvatar}'"
            />
          </div>
        </div>

        <!-- Środek areny: Karty Quizu Wordwall -->
        <div class="matching-stage-wrapper quiz-stage-wrapper" id="quiz-stage"></div>

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
        if (q && q.olekSpeakText) {
          sound.speakPolish(q.olekSpeakText, { character: this.opponentName });
        }
        this.startTimer();
      });
    }

    const hintBtn = this.container.querySelector('#quiz-hint-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => this.handleHintClick());
    }
  }

  handleHintClick() {
    if (this.lockInput) return;
    if ((this.player.hints || 0) <= 0) {
      sound.playMiss();
      alert('Brak ładunków podpowiedzi (?)! Awansuj na kolejny poziom lub kup Powerbank/Breloczek/Energetyk w sklepiku!');
      return;
    }

    this.player.hints -= 1;
    const hintBtn = this.container.querySelector('#quiz-hint-btn');
    if (hintBtn) {
      hintBtn.textContent = `❓ Tłumacz (${this.player.hints})`;
    }

    const q = this.questions[this.currentQuestionIndex];
    const vnMeaning = q.promptVn || q.explanationVn || q.olekSpeechVn || 'Podpowiedź: dopasuj naturalną odpowiedź rówieśniczą.';
    sound.speakPolish(q.olekSpeech || q.promptPl);
    alert(`[Pomoc ?] Wietnamskie znaczenie: ${vnMeaning}`);
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
    const textEl = this.container.querySelector('#quiz-timer-text');
    const fillEl = this.container.querySelector('#quiz-timer-fill');
    if (textEl) textEl.textContent = `${this.timeLeft}s`;
    if (fillEl) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));
      fillEl.style.width = `${pct}%`;
    }
  }

  handleTimeout() {
    this.stopTimer();
    this.lockInput = true;
    const charName = this.opponentName || 'olek';
    sound.playEnemyHit(charName);

    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    } else {
      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    }
    this.updatePlayerBar();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    if (this.player.hp <= 0) {
      setTimeout(() => {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }, 500);
      return;
    }

    setTimeout(() => {
      if (this.archetype === 'adaptive') {
        // Adaptujący: uczeń musi odpowiedzieć, resetujemy czas
        this.timeLeft = this.maxTime;
        this.updateTimerUI();
        this.lockInput = false;
        this.startTimer();
      } else if (this.archetype === 'gadula') {
        // Gaduła: przechodzi do kolejnego pytania (dopóki ma jeszcze HP)
        if (this.enemyHp > 0 && this.questions.length > 0) {
          const nextIdx = (this.currentQuestionIndex + 1) % this.questions.length;
          this.loadQuestion(nextIdx, true);
        } else {
          this.finishBattle();
        }
      } else {
        const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
        this.loadQuestion(nextIdx, true);
      }
    }, 1000);
  }

  loadQuestion(index, autoSpeak = true) {
    this.stopTimer();
    this.currentQuestionIndex = index;
    this.lockInput = false;
    this.timeLeft = this.maxTime;

    const q = this.questions[index];
    const stage = this.container.querySelector('#quiz-stage');
    if (!stage || !q) return;

    const speech = q.olekSpeech || q.speech || q.promptPl || '';
    const speakStr = q.olekSpeakText || q.speakText || speech;

    if (q.playBellOnStart) {
      sound.playSchoolBell();
      setTimeout(() => {
        if (speakStr) sound.speakPolish(speakStr, { character: this.opponentName });
      }, 950);
    } else if (autoSpeak && this.introDismissed && speakStr) {
      sound.speakPolish(speakStr, { character: this.opponentName });
    }

    // Losowe tasowanie opcji odpowiedzi (Fisher-Yates)
    const optionsWithOrigIdx = q.options.map((opt, i) => ({ ...opt, origIdx: i }));
    for (let i = optionsWithOrigIdx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithOrigIdx[i], optionsWithOrigIdx[j]] = [optionsWithOrigIdx[j], optionsWithOrigIdx[i]];
    }
    this.currentShuffledOptions = optionsWithOrigIdx;

    const letters = ['A', 'B', 'C', 'D'];
    const timerPct = Math.max(0, Math.min(100, (this.timeLeft / this.maxTime) * 100));

    stage.innerHTML = `
      <div class="ww-quiz-card">
        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="quiz-timer-fill" style="width: ${timerPct}%"></div>
          <span class="ww-spell-timer-text" id="quiz-timer-text">${this.timeLeft}s</span>
        </div>

        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">${this.opponentName}:</span>
            <strong class="ww-bubble-quote">„${speech}”</strong>
            <button class="ww-quiz-speak-btn" id="quiz-olek-speak" title="Posłuchaj"></button>
          </div>
        </div>

        <div class="ww-quiz-prompt-box">
          <p class="ww-quiz-prompt-pl">${q.promptPl || speech}</p>
          ${q.promptVn ? `<p class="ww-quiz-prompt-vn" style="margin: 4px 0 0 0; font-size: 0.9em; color: #a7f3d0; font-style: italic;">${q.promptVn}</p>` : ''}
        </div>

        <div class="ww-quiz-options-grid">
          ${this.currentShuffledOptions.map((opt, idx) => `
            <button class="ww-quiz-option-btn" data-shuffled-idx="${idx}">
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
        if (q.playBellOnStart) sound.playSchoolBell();
        if (speakStr) sound.speakPolish(speakStr, { character: this.opponentName });
      });
    }

    stage.querySelectorAll('.ww-quiz-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const shuffledIdx = Number(btn.dataset.shuffledIdx);
        this.handleOptionClick(shuffledIdx, btn);
      });
    });

    if (this.introDismissed) {
      this.startTimer();
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

  handleOptionClick(shuffledIdx, btnEl) {
    if (this.lockInput) return;
    this.stopTimer();
    const opt = this.currentShuffledOptions[shuffledIdx];
    if (!opt) return;

    const charName = this.opponentName || 'olek';

    if (opt.correct) {
      this.lockInput = true;
      btnEl.classList.add('is-correct');
      this.score += 150;

      // Czysty, głośny okrzyk bojowy bohatera, uderzenie hit i obrona przeciwnika
      sound.playAttackHit(charName);

      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateOpponentBar();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      setTimeout(() => {
        if (this.archetype === 'adaptive') {
          // Adaptujący (np. Nauczycielka): gracz musi odpowiedzieć na wszystkie pytania
          if (this.currentQuestionIndex + 1 < this.questions.length && this.enemyHp > 0) {
            this.loadQuestion(this.currentQuestionIndex + 1, true);
          } else {
            this.finishBattle();
          }
        } else if (this.archetype === 'gadula') {
          // Gaduła (np. Olek): walczy dopóki jego HP nie spadnie do 0
          if (this.enemyHp <= 0 || this.questions.length === 0) {
            this.finishBattle();
          } else {
            const nextIdx = (this.currentQuestionIndex + 1) % this.questions.length;
            this.loadQuestion(nextIdx, true);
          }
        } else {
          // Sytuacyjny: losuje inne pytanie z puli aż do 0 HP
          if (this.enemyHp <= 0) {
            this.finishBattle();
          } else {
            const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
            this.loadQuestion(nextIdx, true);
          }
        }
      }, 1100);
    } else {
      // Błędna odpowiedź -> wróg bije bohatera i natychmiast resetuje zegar
      this.lockInput = true;
      this.timeLeft = this.maxTime;
      this.updateTimerUI();
      btnEl.classList.add('is-wrong');
      sound.playEnemyHit(charName);

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      } else {
        this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      }
      this.updatePlayerBar();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      if (this.player.hp <= 0) {
        setTimeout(() => {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        }, 500);
        return;
      }

      // Po błędnej odpowiedzi:
      setTimeout(() => {
        if (this.archetype === 'adaptive') {
          // Adaptujący: gracz MUSI podać prawidłową odpowiedź, czas startuje od nowa!
          this.timeLeft = this.maxTime;
          this.updateTimerUI();
          this.lockInput = false;
          btnEl.classList.remove('is-wrong');
          this.startTimer();
        } else if (this.archetype === 'gadula') {
          // Gaduła: komentuje błąd i przechodzi do następnego pytania (dopóki ma HP > 0)
          if (this.enemyHp > 0 && this.questions.length > 0) {
            const nextIdx = (this.currentQuestionIndex + 1) % this.questions.length;
            this.loadQuestion(nextIdx, true);
          } else {
            this.finishBattle();
          }
        } else {
          // Sytuacyjny: losuje inne pytanie z puli
          const nextIdx = this.getRandomDifferentIndex(this.currentQuestionIndex);
          this.loadQuestion(nextIdx, true);
        }
      }, 1100);
    }
  }

  destroy() {
    this.lockInput = true;
    const stage = this.container ? this.container.querySelector('#quiz-stage') : null;
    if (stage) stage.innerHTML = '';
  }

  finishBattle() {
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) arenaEl.classList.add('arena-victory-exit');
    setTimeout(() => {
      if (this.onComplete) this.onComplete({ score: this.score });
    }, 600);
  }

  updateOpponentBar() {
    const bar = this.container.querySelector('#mp-enemy-hp-fill');
    const txt = this.container.querySelector('#mp-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (bar) bar.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerBar() {
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

    // Drżenie areny przy ciosie
    if (arenaEl) {
      arenaEl.classList.remove('dd-screen-shake');
      void arenaEl.offsetWidth;
      arenaEl.classList.add('dd-screen-shake');
    }
    this.container.classList.remove('dd-screen-shake');
    void this.container.offsetWidth;
    this.container.classList.add('dd-screen-shake');

    if (!wrap) return;

    // Zakrzywione białe cięcie
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
  }
}
