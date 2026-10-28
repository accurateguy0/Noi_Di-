// Minigra / Pojedynek z Bossem: PIŁKARZ (66 HP, 5 obrażeń)
// Plansza 7: Egzamin z całego materiału (Plansze 1-6)
// Zasady: Czas 10s na odpowiedź, każda poprawna odpowiedź daje +5s do czasu i zadaje cios!
// Błędna odpowiedź lub upływ czasu: Piłkarz zadaje 5 obrażeń i resetuje czas do 10s.
// Po pokonaniu bossa przechodzimy na Miasto.

import { BOSS_FOOTBALLER_QUESTIONS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';
import { renderLimitBreakBar, getLimitBreakLabels, bindClassMechanicEvents } from './bossClassMechanics.js';

export class BossFootballerGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose, enemyMaxHp = 66 }) {
    this.container = container;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.enemyMaxHp = enemyMaxHp;
    this.enemyHp = enemyMaxHp;
    this.enemyDamage = 5;
    this.tanDamage = getPlayerDamage(this.player);

    this.heroClass = (this.player?.characterClass || this.player?.heroId || 'warrior').toLowerCase();
    this.limitBreakMax = this.player?.limitBreakHp || 8;
    this.warriorFuryDamage = 0;
    this.warriorDoubleReady = false;
    this.warriorDoubleActive = false;
    this.jesterDodgeTurns = 0;

    this.maxTime = 10;
    this.timeLeft = 10;
    this.timerInterval = null;

    this.questions = [...BOSS_FOOTBALLER_QUESTIONS].sort(() => Math.random() - 0.5);
    this.currentQIndex = 0;
    this.phase = 'quiz'; // 'quiz' | 'anagram' | 'matchup'
    this.lockInput = false;

    // Słowa do anagramów z pełnego materiału A0
    this.anagramWords = [
      { word: 'DŁUGOPIS', hint: 'Podstawowy przybór do pisania w zeszycie' },
      { word: 'SZKOŁA', hint: 'Budynek z salami lekcyjnymi i szatnią' },
      { word: 'MISTRZ', hint: 'Zwycięzca turnieju językowego A0!' },
      { word: 'PIŁKA', hint: 'Niezbędna do gry w meczu na WF-ie' },
      { word: 'BOISKO', hint: 'Plac sportowy do gry w piłkę' },
      { word: 'DZWONEK', hint: 'Głośny sygnał początku lub końca lekcji' }
    ];
    this.anagramIndex = 0;
    this.anagramSlots = [];
    this.anagramLetters = [];
  }

  mount() {
    sound.setPlayerClass(this.player?.characterClass || this.player?.heroId || 'Warrior');
    this.renderArena();
    try {
      sound.playRefereeWhistle();
    } catch (e) {}
    this.startRound();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena boss-arena">
        <h2 class="mp-animated-title" id="boss-title" style="top: 22px;">BOSS: PIŁKARZ</h2>

        <!-- Górny licznik czasu (10s + 5s za poprawną) -->
        <div class="boss-timer-badge" id="boss-timer-badge">
          <span class="boss-timer-icon"></span>
          <span class="boss-timer-text" id="boss-timer-num">10s</span>
          <div class="boss-timer-bar">
            <div class="boss-timer-fill" id="boss-timer-fill" style="width: 100%"></div>
          </div>
        </div>

        <!-- Prawy górny róg: Boss Piłkarz -->
        <div class="dd-arena-fighter dd-arena-opponent" id="boss-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Boss Piłkarz</span>
            </div>
            <div class="dd-fighter-hp-bar" id="boss-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="boss-enemy-hp-fill" style="width: ${enemyHpPct}%; background: #e63946;"></div>
              <span class="dd-fighter-hp-text" id="boss-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="boss-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Pilkarz.png"
              alt="Boss Piłkarz"
              class="dd-fighter-sprite sprite-pilkarz"
              id="boss-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Pilkarz.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Runda wyzwania -->
        <div class="matching-stage-wrapper boss-stage-wrapper" id="boss-stage">
          <!-- Dynamiczna treść minigry -->
        </div>

        <!-- Lewy dolny róg: Bohater -->
        <div class="dd-arena-fighter dd-arena-player" id="boss-player-box">
          <div class="dd-sprite-container player-sprite-container" id="boss-player-sprite-wrap">
            <img
              src="${this.player?.avatar || './assets/Warrior.png'}"
              alt="${this.player?.heroName || this.player?.name || 'Bohater'}"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./assets/Warrior.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player?.heroName || this.player?.name || 'Bohater'}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="boss-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="boss-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="boss-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
            ${renderLimitBreakBar(this)}
          </div>
        </div>
      </div>
    `;

    bindClassMechanicEvents(this);

    const bossTitle = this.container.querySelector('#boss-title');
    if (bossTitle) {
      const dismiss = () => {
        if (!bossTitle.classList.contains('is-dismissed')) {
          bossTitle.classList.remove('is-centered');
          bossTitle.classList.add('is-dismissed');
          setTimeout(() => {
            if (bossTitle.parentNode) bossTitle.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }
  }

  startRound() {
    if (this.enemyHp <= 0) {
      this.finishBattle();
      return;
    }

    this.lockInput = false;
    const stageEl = this.container.querySelector('#boss-stage');
    if (!stageEl) return;

    // Rotacja 4 minigier: Quiz -> Matching Pairs -> Anagram -> Match Up
    const challengeTypes = ['quiz', 'matching', 'anagram', 'matchup'];
    const roundType = challengeTypes[this.currentQIndex % challengeTypes.length];

    if (roundType === 'quiz') {
      this.renderQuizChallenge(stageEl);
    } else if (roundType === 'matching') {
      this.renderMatchingChallenge(stageEl);
    } else if (roundType === 'anagram') {
      this.renderAnagramChallenge(stageEl);
    } else {
      this.renderMatchUpChallenge(stageEl);
    }

    this.startTimer();
  }

  renderMatchingChallenge(stageEl) {
    const pairPool = [
      { id: '1', left: 'Siema!', right: 'Cześć!' },
      { id: '2', left: 'Dzięki!', right: 'Dziękuję!' },
      { id: '3', left: 'Sztos!', right: 'Rewelacja!' }
    ];

    let cards = [];
    pairPool.forEach(p => {
      cards.push({ id: p.id, text: p.left, pairId: p.id });
      cards.push({ id: `${p.id}_r`, text: p.right, pairId: p.id });
    });
    cards.sort(() => Math.random() - 0.5);

    let firstCard = null;
    let matchedCount = 0;

    stageEl.innerHTML = `
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">MATCHING PAIRS(Znajdź pasujące pary!)</div>
        <div class="boss-pairs-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
          ${cards.map((c, idx) => `
            <button type="button" class="btn-boss-pair-card" data-idx="${idx}" data-pair="${c.pairId}" style="min-height: 54px; font-family: 'Fredoka', sans-serif; font-size: 1.1rem; font-weight: 700; border-radius: 12px; background: #1e293b; color: #fff; border: 2.5px solid #3b82f6; cursor: pointer; transition: transform 0.15s;">
              ${c.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const cardButtons = stageEl.querySelectorAll('.btn-boss-pair-card');
    cardButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched') || btn.classList.contains('is-selected')) return;

        sound.playStep();
        btn.classList.add('is-selected');
        btn.style.borderColor = '#ffd166';
        btn.style.background = '#2563eb';

        if (!firstCard) {
          firstCard = btn;
        } else {
          const secondCard = btn;
          if (firstCard.dataset.pair === secondCard.dataset.pair) {
            // Dopasowano parę
            sound.playSuccess();
            firstCard.classList.remove('is-selected');
            secondCard.classList.remove('is-selected');
            firstCard.classList.add('is-matched');
            secondCard.classList.add('is-matched');
            firstCard.style.borderColor = '#10b981';
            firstCard.style.background = 'rgba(16, 185, 129, 0.3)';
            secondCard.style.borderColor = '#10b981';
            secondCard.style.background = 'rgba(16, 185, 129, 0.3)';
            firstCard = null;
            matchedCount++;

            if (matchedCount === pairPool.length) {
              this.handleCorrectAnswer(this.tanDamage);
            }
          } else {
            // Zła para
            sound.playWrong();
            firstCard.style.borderColor = '#ef4444';
            secondCard.style.borderColor = '#ef4444';
            const tempFirst = firstCard;
            firstCard = null;
            setTimeout(() => {
              tempFirst.classList.remove('is-selected');
              secondCard.classList.remove('is-selected');
              tempFirst.style.borderColor = '#3b82f6';
              tempFirst.style.background = '#1e293b';
              secondCard.style.borderColor = '#3b82f6';
              secondCard.style.background = '#1e293b';
            }, 450);
          }
        }
      });
    });
  }

  renderMatchUpChallenge(stageEl) {
    const pairs = [
      { left: 'Mega', right: 'Coś ekstra, rewelacyjnego' },
      { left: 'Fajne', right: 'Dobre, przyjemne, warte uwagi' },
      { left: 'Słabe', right: 'Kiepskie, poniżej oczekiwań' }
    ];

    let selectedLeft = null;
    let pairsLeft = [...pairs];

    const leftItems = [...pairs].map(p => p.left).sort(() => Math.random() - 0.5);
    const rightItems = [...pairs].map(p => p.right).sort(() => Math.random() - 0.5);

    stageEl.innerHTML = `
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">MATCH UP(Połącz słowo z definicją!)</div>
        <div class="boss-mu-columns" style="display: flex; gap: 16px; margin-top: 10px;">
          <div class="boss-mu-col left" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            ${leftItems.map(txt => `<button type="button" class="btn-boss-mu-tile left-tile" data-val="${txt}" style="padding: 10px; font-family: 'Fredoka', sans-serif; font-size: 1.15rem; font-weight: 800; border-radius: 12px; background: #1e293b; color: #fff; border: 2px solid #8b5cf6; cursor: pointer;">${txt}</button>`).join('')}
          </div>
          <div class="boss-mu-col right" style="flex: 1.6; display: flex; flex-direction: column; gap: 8px;">
            ${rightItems.map(txt => `<button type="button" class="btn-boss-mu-tile right-tile" data-val="${txt}" style="padding: 10px; font-family: 'Nunito', sans-serif; font-size: 0.95rem; font-weight: 700; border-radius: 12px; background: #1e293b; color: #e2e8f0; border: 2px solid #3b82f6; cursor: pointer;">${txt}</button>`).join('')}
          </div>
        </div>
      </div>
    `;

    const leftButtons = stageEl.querySelectorAll('.left-tile');
    const rightButtons = stageEl.querySelectorAll('.right-tile');

    leftButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched')) return;
        leftButtons.forEach(b => {
          b.classList.remove('is-selected');
          if (!b.classList.contains('is-matched')) b.style.borderColor = '#8b5cf6';
        });
        btn.classList.add('is-selected');
        btn.style.borderColor = '#ffd166';
        selectedLeft = btn.dataset.val;
        sound.playStep();
      });
    });

    rightButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched') || !selectedLeft) return;
        const rightVal = btn.dataset.val;
        const matchedPair = pairs.find(p => p.left === selectedLeft && p.right === rightVal);

        if (matchedPair) {
          btn.classList.add('is-matched');
          btn.style.borderColor = '#10b981';
          btn.style.background = 'rgba(16, 185, 129, 0.25)';
          const leftBtn = stageEl.querySelector(`.left-tile[data-val="${selectedLeft}"]`);
          if (leftBtn) {
            leftBtn.classList.add('is-matched');
            leftBtn.style.borderColor = '#10b981';
            leftBtn.style.background = 'rgba(16, 185, 129, 0.25)';
          }
          sound.playSuccess();
          pairsLeft = pairsLeft.filter(p => p.left !== selectedLeft);
          selectedLeft = null;

          if (pairsLeft.length === 0) {
            this.handleCorrectAnswer(this.tanDamage);
          }
        } else {
          btn.style.borderColor = '#ef4444';
          sound.playWrong();
          setTimeout(() => {
            if (!btn.classList.contains('is-matched')) btn.style.borderColor = '#3b82f6';
          }, 450);
        }
      });
    });
  }

  startTimer() {
    this.stopTimer();
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      this.updateTimerDisplay();

      if (this.timeLeft <= 3 && this.timeLeft > 0) {
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
    const textEl = this.container.querySelector('#boss-timer-num');
    const fillEl = this.container.querySelector('#boss-timer-fill');
    if (textEl) textEl.textContent = `${this.timeLeft}s`;
    if (fillEl) {
      const pct = Math.max(0, Math.min(100, (this.timeLeft / 15) * 100));
      fillEl.style.width = `${pct}%`;
      fillEl.style.background = this.timeLeft <= 3 ? '#ef476f' : '#06d6a0';
    }
  }

  addBonusTime(seconds = 5) {
    this.timeLeft = Math.min(20, this.timeLeft + seconds);
    this.updateTimerDisplay();
    sound.playSuccess();
    const badge = this.container.querySelector('#boss-timer-badge');
    if (badge) {
      badge.classList.remove('boss-timer-pulse');
      void badge.offsetWidth;
      badge.classList.add('boss-timer-pulse');
    }
  }

  handleTimeout() {
    this.stopTimer();
    if (this.player.classId === 'jester' && this.jesterDodgeTurns > 0) {
      this.jesterDodgeTurns -= 1;
      if (this.jesterDodgeTurns <= 0) {
        this.warriorDoubleActive = false;
        this.warriorFuryDamage = 0;
      }
      sound.playSuccess();
      this.triggerFighterHit('player', 'UNIK!');
      this.updatePlayerHud();
    } else {
      sound.playHurt('pilkarz');
      this.triggerFighterHit('player', `-${this.enemyDamage}`);
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }
      if (!this.warriorDoubleActive) {
        const wasReady = this.warriorDoubleReady;
        this.warriorFuryDamage = Math.min(this.limitBreakMax, this.warriorFuryDamage + this.enemyDamage);
        if (this.warriorFuryDamage >= this.limitBreakMax) {
          this.warriorDoubleReady = true;
          if (!wasReady) sound.playLimitReady();
        }
      }
      this.updatePlayerHud();
    }

    this.timeLeft = this.maxTime;

    setTimeout(() => {
      if (this.player.hp > 0) {
        this.currentQIndex++;
        this.startRound();
      } else {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }
    }, 650);
  }

  renderQuizChallenge(stageEl) {
    const q = this.questions[this.currentQIndex % this.questions.length];
    sound.triggerContextualSFX(q.promptPl);

    // Losowe tasowanie opcji
    const shuffled = q.options.map((opt, i) => ({ ...opt, origIdx: i }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    stageEl.innerHTML = `
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">PYTANIE QUIZOWE (Odpowiedz w 10s!)</div>
        <h3 class="boss-question-prompt">${q.promptPl}</h3>
        <div class="boss-options-grid">
          ${shuffled.map((opt, idx) => `
            <button type="button" class="boss-option-btn" data-idx="${idx}">
              <span class="boss-opt-letter">${['A', 'B', 'C', 'D'][idx] || ''}</span>
              ${opt.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stageEl.querySelectorAll('.boss-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        this.lockInput = true;
        const idx = parseInt(btn.dataset.idx, 10);
        const opt = shuffled[idx];

        if (opt.correct) {
          btn.classList.add('is-correct');
          this.handleCorrectAnswer(this.tanDamage);
        } else {
          btn.classList.add('is-wrong');
          this.handleWrongAnswer();
        }
      });
    });
  }

  renderAnagramChallenge(stageEl) {
    const anItem = this.anagramWords[this.anagramIndex % this.anagramWords.length];
    const letters = anItem.word.split('').sort(() => Math.random() - 0.5);

    let placed = [];
    stageEl.innerHTML = `
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">ANAGRAM(Ułóż litery w słowo!)</div>
        <h3 class="boss-question-prompt">Podpowiedź: ${anItem.hint}</h3>
        <div class="boss-anagram-slots" id="boss-an-slots">
          ${anItem.word.split('').map(() => `<div class="boss-an-slot">_</div>`).join('')}
        </div>
        <div class="boss-anagram-letters" id="boss-an-letters">
          ${letters.map((l, idx) => `
            <button type="button" class="boss-letter-btn" data-letter="${l}" data-idx="${idx}">${l}</button>
          `).join('')}
        </div>
        <button type="button" class="btn-boss-reset" id="boss-an-reset">Cofnij ↺</button>
      </div>
    `;

    const updateSlots = () => {
      const slotEls = stageEl.querySelectorAll('.boss-an-slot');
      slotEls.forEach((sl, idx) => {
        sl.textContent = placed[idx] ? placed[idx].letter : '_';
        sl.classList.toggle('has-letter', Boolean(placed[idx]));
      });

      if (placed.length === anItem.word.length) {
        const formed = placed.map(p => p.letter).join('');
        if (formed === anItem.word) {
          this.handleCorrectAnswer(this.tanDamage);
        } else {
          this.handleWrongAnswer();
        }
      }
    };

    stageEl.querySelectorAll('.boss-letter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.disabled) return;
        btn.disabled = true;
        placed.push({ letter: btn.dataset.letter, btn });
        sound.playStep();
        updateSlots();
      });
    });

    const resetBtn = stageEl.querySelector('#boss-an-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        placed.forEach(p => p.btn.disabled = false);
        placed = [];
        updateSlots();
      });
    }
  }

  handleCorrectAnswer(dmg) {
    this.stopTimer();
    let finalDmg = dmg;
    if (this.warriorDoubleActive && this.player.classId !== 'jester') {
      finalDmg *= 2;
      if (this.player.classId === 'thief' && typeof this.player.heal === 'function') {
        this.player.heal(2);
        this.triggerFighterHit('player', '+2 HP');
      }
      sound.playWarriorHeavyHit();
      this.warriorDoubleActive = false;
      this.warriorFuryDamage = 0;
      this.updatePlayerHud();
    }
    try {
      sound.playBallKick();
    } catch (e) {}
    sound.playAttack('pilkarz');
    this.enemyHp = Math.max(0, this.enemyHp - finalDmg);
    this.triggerFighterHit('opponent', `-${finalDmg}`);
    this.updateEnemyHud();
    this.addBonusTime(5);

    setTimeout(() => {
      if (this.enemyHp <= 0) {
        this.finishBattle();
      } else {
        this.currentQIndex++;
        this.anagramIndex++;
        this.startRound();
      }
    }, 700);
  }

  handleWrongAnswer() {
    this.stopTimer();
    this.timeLeft = this.maxTime;
    this.updateTimerDisplay();
    if (this.player.classId === 'jester' && this.jesterDodgeTurns > 0) {
      this.jesterDodgeTurns -= 1;
      if (this.jesterDodgeTurns <= 0) {
        this.warriorDoubleActive = false;
        this.warriorFuryDamage = 0;
      }
      sound.playSuccess();
      this.triggerFighterHit('player', 'UNIK!');
      this.updatePlayerHud();
    } else {
      sound.playHurt('pilkarz');
      this.triggerFighterHit('player', `-${this.enemyDamage}`);
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }
      if (!this.warriorDoubleActive) {
        const wasReady = this.warriorDoubleReady;
        this.warriorFuryDamage = Math.min(this.limitBreakMax, this.warriorFuryDamage + this.enemyDamage);
        if (this.warriorFuryDamage >= this.limitBreakMax) {
          this.warriorDoubleReady = true;
          if (!wasReady) sound.playLimitReady();
        }
      }
      this.updatePlayerHud();
    }

    setTimeout(() => {
      if (this.player.hp > 0) {
        this.timeLeft = this.maxTime;
        this.currentQIndex++;
        this.anagramIndex++;
        this.startRound();
      } else {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }
    }, 650);
  }

  triggerFighterHit(target = 'opponent', dmgText = '-25') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#boss-opponent-sprite-wrap' : '#boss-player-sprite-wrap'
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
    const fill = this.container.querySelector('#boss-enemy-hp-fill');
    const txt = this.container.querySelector('#boss-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerHud() {
    const fill = this.container.querySelector('#boss-player-hp-fill');
    const txt = this.container.querySelector('#boss-player-hp-text');
    const pct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;

    const lbBar = this.container.querySelector('#dd-limit-break-bar');
    const lbFill = this.container.querySelector('#dd-limit-break-fill');
    const lbTxt = this.container.querySelector('#dd-limit-break-text');
    if (lbBar && lbFill && lbTxt) {
      const { isReady, isActive, pct, label } = getLimitBreakLabels(this);
      lbFill.style.width = `${pct}%`;
      lbBar.classList.toggle('is-ready', isReady);
      lbBar.classList.toggle('is-active', isActive);
      lbTxt.textContent = label;
    }
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
    }, 700);
  }

  destroy() {
    this.stopTimer();
  }
}
