// Silnik pojedynków z Bossami oraz 9 trybów minigier edukacyjnych:
// - Gameshow Quiz ('quiz'), Match Up ('matchup'), Group Sort ('sorting')
// - Złodziej Końcówek ('cloze'), Algorytm Zdania ('sentence_algo'), Word Magnets ('word_magnets')
// - Architekt Tekstu ('text_architect'), Detektyw Lektur CKE ('reading_tf'), Tinder Swipe: Fakt czy Opinia? ('swipe')
// - Obsługuje Kartę Teorii („📖 Omówienie tematu” – zatrzymuje zegar na czas czytania!)
// - Obsługuje unikalne mechaniki klasowe z Dicey Dungeons (Warrior 2× DMG, Jester 3 tury uniku, Robot CPU & Jackpot, Witch 4 Spells + fancy hit, Inventor +5s)

import { CWANIAK_CHALLENGES } from '../data/dialogSteps.js';
import { getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';
import {
  getHeroLevelStats,
  WITCH_SPELLS
} from '../data/characterProgression.js';
import {
  renderClassMechanicBar,
  renderLimitBreakBar,
  getLimitBreakLabels,
  bindClassMechanicEvents,
  rollRobotCpu
} from './bossClassMechanics.js';
import {
  renderClozeChallenge,
  renderSentenceAlgoChallenge,
  renderWordMagnetsChallenge,
  renderTextArchitectChallenge,
  renderReadingTFChallenge,
  renderSwipeFactOpinionChallenge
} from './bossMinigameRenderers.js';

export class BossCwaniakGame {
  constructor(container, {
    player,
    onPlayerDamaged,
    onComplete,
    onClose,
    enemyName = 'Cwaniak',
    enemyTitle = 'BOSS: CWANIAK',
    enemySubtitle = 'CWANIAK (MISTRZ MIASTA)',
    enemyAvatar = './assets/Postacie/Cwaniak.png',
    challenges = CWANIAK_CHALLENGES,
    arenaClass = 'cwaniak-arena',
    enemyMaxHp = 70,
    enemyDamage = 3
  }) {
    this.container = container;
    this.player = player || { name: 'Bohater', hp: 24, maxHp: 24, level: 1, characterClass: 'Warrior' };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    const cleanStr = (s) => String(s || '').replace(/\s*\([^)]*\)/g, '').replace(/\s*\[[^\]]*\]/g, '').trim();
    this.enemyName = cleanStr(enemyName) || 'Cwaniak';
    this.enemyTitle = this.enemyName;
    this.enemySubtitle = this.enemyName;
    this.enemyAvatar = enemyAvatar;
    this.arenaClass = arenaClass;

    this.enemyMaxHp = enemyMaxHp;
    this.enemyHp = enemyMaxHp;
    this.enemyDamage = enemyDamage || 3;

    // Statystyki poziomu i klasy (Level 1–6)
    this.heroClass = (this.player.characterClass || this.player.heroId || 'Warrior').toLowerCase();
    const lvlStats = getHeroLevelStats(this.player.characterClass, this.player.level || 1);
    this.tanDamage = Math.max(getPlayerDamage(this.player), lvlStats.baseDamage + (this.player.bonusDamage || 0));

    // Inventor ma umiejętność +5s w grach czasowych
    const inventorBonus = this.heroClass.includes('inventor') ? 5 : (this.player.bonusTimeSec || 0);
    this.maxTime = 14 + Math.max(0, inventorBonus);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;
    this.isTimerPaused = false;
    this.damageTakenInBattle = 0;

    // Mechaniki klasowe:
    // 1. Limit Break (pasek żółty pod paskiem życia bohatera): ładuje się po otrzymaniu obrażeń (8→13 HP)
    this.limitBreakMax = this.player.limitBreakHp || lvlStats.limitBreakHp || 8;
    this.warriorFuryDamage = 0;
    this.warriorDoubleReady = false;
    this.warriorDoubleActive = false;

    // 2. Jester: Za dostawanie obrażeń (do 15 HP) unika obrażeń przez kolejne 3 tury
    this.jesterDamageCounter = 0;
    this.jesterDodgeTurns = 0;

    // 3. Robot: Licznik CPU (9→15), losowanie 1–6, Jackpot na Max CPU, Overflow powyżej Max CPU
    this.robotMaxCpu = this.player.maxCpu || lvlStats.maxCpu || 9;
    this.robotCurrentCpu = 0;
    this.robotOverflowZeroDmg = false;
    this.robotExtraGearDmg = 0;
    this.robotLastRoll = null;
    this.robotStatusMsg = 'Rzuć kością CPU (1–6), aby dobić do Max CPU i trafić JACKPOT!';

    // 4. Witch: 4 zaklęcia + fancy efekt bicia
    this.witchSpells = WITCH_SPELLS;
    this.activeWitchSpell = WITCH_SPELLS[0];

    this.challenges = [...challenges];
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
    sound.setPlayerClass(this.player?.characterClass || this.player?.heroId || 'Warrior');
    this.renderArena();
    this.startRound();
  }

  renderClassMechanicBar() {
    return renderClassMechanicBar(this);
  }

  bindClassMechanicEvents() {
    bindClassMechanicEvents(this);
  }

  rollRobotCpu() {
    rollRobotCpu(this);
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena boss-arena ${this.arenaClass}">
        <h2 class="mp-animated-title" id="cwaniak-title" style="top: 22px;">${this.enemyTitle}</h2>

        <!-- Górny licznik czasu -->
        <div class="boss-timer-badge" id="cwaniak-timer-badge">
          <span class="boss-timer-icon">⏱️</span>
          <span class="boss-timer-val" id="cwaniak-timer-val">${this.maxTime.toFixed(1)}s</span>
          <span class="boss-timer-bonus" id="cwaniak-timer-bonus">+5s</span>
        </div>

        <!-- Pasek mechaniki klasowej (Warrior / Robot CPU / Witch Spells / Jester / Inventor) -->
        ${this.renderClassMechanicBar()}

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

        <!-- Środek areny: Aktywne wyzwanie -->
        <div class="matching-stage-wrapper boss-stage-wrapper" id="cwaniak-stage"></div>

        <!-- Lewy dolny róg: Bohater -->
        <div class="dd-arena-fighter dd-arena-player" id="cwaniak-player-box">
          <div class="dd-sprite-container player-sprite-container" id="cwaniak-player-sprite-wrap">
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
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="cwaniak-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="cwaniak-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
            ${renderLimitBreakBar(this)}
          </div>
        </div>
      </div>
    `;

    this.bindClassMechanicEvents();

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

  renderTheoryHeader(challenge) {
    if (!challenge.theory && !challenge.hint) return '';
    const theoryTitle = challenge.theory?.title || 'Ściąga Mistrza i omówienie tematu';
    const theoryBody = (challenge.theory?.body || challenge.hint || '').replace(/\n/g, '<br/>');
    return `
      <div class="boss-theory-wrap">
        <button type="button" class="btn-toggle-theory" id="btn-toggle-theory">
          📖 Omówienie tematu / Ściąga Mistrza (zatrzymuje czas ⏸️)
        </button>
        <div class="boss-theory-drawer hidden" id="boss-theory-drawer">
          <h4>${theoryTitle}</h4>
          <p>${theoryBody}</p>
        </div>
      </div>
    `;
  }

  bindTheoryToggle(stageEl) {
    const btn = stageEl.querySelector('#btn-toggle-theory');
    const drawer = stageEl.querySelector('#boss-theory-drawer');
    if (!btn || !drawer) return;
    btn.addEventListener('click', () => {
      const isHidden = drawer.classList.toggle('hidden');
      this.isTimerPaused = !isHidden;
      btn.textContent = isHidden
        ? '📖 Omówienie tematu / Ściąga Mistrza (zatrzymuje czas ⏸️)'
        : '✅ Zamknij omówienie tematu i wróć do gry ▶️';
      sound.playStep();
    });
  }

  startTimer() {
    this.stopTimer();
    this.isTimerPaused = false;
    const timerVal = this.container.querySelector('#cwaniak-timer-val');
    const timerBadge = this.container.querySelector('#cwaniak-timer-badge');

    this.timerInterval = setInterval(() => {
      if (this.isTimerPaused) return;
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

    if (challenge.type === 'cloze') {
      this.renderCloze(stageEl, challenge);
    } else if (challenge.type === 'sentence_algo') {
      this.renderSentenceAlgo(stageEl, challenge);
    } else if (challenge.type === 'word_magnets') {
      this.renderWordMagnets(stageEl, challenge);
    } else if (challenge.type === 'text_architect') {
      this.renderTextArchitect(stageEl, challenge);
    } else if (challenge.type === 'reading_tf') {
      this.renderReadingTF(stageEl, challenge);
    } else if (challenge.type === 'swipe') {
      this.renderSwipeFactOpinion(stageEl, challenge);
    } else if (challenge.type === 'matchup') {
      this.renderMatchUp(stageEl, challenge);
    } else if (challenge.type === 'sorting') {
      this.renderSpeedSorting(stageEl, challenge);
    } else {
      this.renderGameshowQuiz(stageEl, challenge);
    }

    this.bindTheoryToggle(stageEl);
    this.startTimer();
  }

  // 1. GAMESHOW QUIZ
  renderGameshowQuiz(stageEl, challenge) {
    const enemyTag = challenge.title || (this.enemyName ? `GAMESHOW QUIZ • ${this.enemyName.toUpperCase()}` : 'GAMESHOW QUIZ');

    // Losowe tasowanie opcji (Fisher-Yates) — gwarantuje, że poprawna odpowiedź NIE stoi zawsze na pozycji A!
    const shuffledOptions = challenge.options.map((opt, i) => ({ ...opt, origIdx: i }));
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-quiz-card">
        <div class="boss-challenge-badge boss-round-tag">${enemyTag}</div>
        ${this.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="boss-options-grid boss-quiz-options">
          ${shuffledOptions.map((opt, idx) => `
            <button type="button" class="btn-boss-opt" data-idx="${idx}">
              <span class="bbo-bullet">${['A', 'B', 'C', 'D'][idx] || ''}</span>
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
        const opt = shuffledOptions[idx];

        if (opt && opt.correct) {
          btn.classList.add('is-correct');
          this.handleCorrect();
        } else {
          btn.classList.add('is-wrong');
          this.handleWrong();
          setTimeout(() => {
            btn.classList.remove('is-wrong');
            this.lockInput = false;
          }, 450);
        }
      });
    });
  }

  // 2. MATCH UP
  renderMatchUp(stageEl, challenge) {
    this.matchupPairsLeft = [...challenge.pairs];
    this.matchupSelectedLeft = null;
    const enemyTag = challenge.title || `MATCH UP • ${(this.enemyName || 'BOSS').toUpperCase()}`;

    const leftItems = [...challenge.pairs].map((p) => p.left).sort(() => Math.random() - 0.5);
    const rightItems = [...challenge.pairs].map((p) => p.right).sort(() => Math.random() - 0.5);

    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-matchup-card">
        <div class="boss-challenge-badge boss-round-tag">${enemyTag}</div>
        ${this.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="boss-mu-columns">
          <div class="boss-mu-col left" id="cwaniak-mu-left">
            ${leftItems.map((txt) => `<button type="button" class="btn-mu-tile left-tile" data-val="${txt}">${txt}</button>`).join('')}
          </div>
          <div class="boss-mu-col right" id="cwaniak-mu-right">
            ${rightItems.map((txt) => `<button type="button" class="btn-mu-tile right-tile" data-val="${txt}">${txt}</button>`).join('')}
          </div>
        </div>
      </div>
    `;

    const leftButtons = stageEl.querySelectorAll('.left-tile');
    const rightButtons = stageEl.querySelectorAll('.right-tile');

    leftButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched')) return;
        leftButtons.forEach((b) => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        this.matchupSelectedLeft = btn.dataset.val;
        sound.playStep();
      });
    });

    rightButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.lockInput || btn.classList.contains('is-matched') || !this.matchupSelectedLeft) return;
        const rightVal = btn.dataset.val;
        const pair = challenge.pairs.find((p) => p.left === this.matchupSelectedLeft && p.right === rightVal);

        if (pair) {
          btn.classList.add('is-matched');
          const leftBtn = stageEl.querySelector(`.left-tile[data-val="${this.matchupSelectedLeft}"]`);
          if (leftBtn) leftBtn.classList.add('is-matched');
          sound.playSuccess();
          this.matchupPairsLeft = this.matchupPairsLeft.filter((p) => p.left !== this.matchupSelectedLeft);
          this.matchupSelectedLeft = null;
          leftButtons.forEach((b) => b.classList.remove('is-selected'));

          if (this.matchupPairsLeft.length === 0) {
            this.handleCorrect();
          }
        } else {
          btn.classList.add('is-wrong');
          this.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 450);
        }
      });
    });
  }

  // 3. GROUP SORT / SPEED SORTING
  renderSpeedSorting(stageEl, challenge) {
    this.sortingItems = [...challenge.items];
    this.currentSortItemIdx = 0;

    const renderSortingStep = () => {
      if (this.currentSortItemIdx >= this.sortingItems.length) {
        this.handleCorrect();
        return;
      }

      const item = this.sortingItems[this.currentSortItemIdx];
      const enemyTag = challenge.title || `GROUP SORT • ${(this.enemyName || 'BOSS').toUpperCase()}`;

      stageEl.innerHTML = `
        <div class="boss-card-challenge boss-sorting-card">
          <div class="boss-challenge-badge boss-round-tag">${enemyTag}</div>
          ${this.renderTheoryHeader(challenge)}
          <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>

          <div class="boss-sort-active-item">
            <span class="bsi-num">${this.currentSortItemIdx + 1}/${this.sortingItems.length}</span>
            <strong class="bsi-text">„${item.text}”</strong>
          </div>

          <div class="boss-sort-buckets">
            ${challenge.categories.map((cat) => `
              <button type="button" class="btn-sort-bucket" data-cat="${cat}">
                📂 ${cat}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      this.bindTheoryToggle(stageEl);

      stageEl.querySelectorAll('.btn-sort-bucket').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (this.lockInput) return;
          const chosenCat = btn.dataset.cat;
          if (chosenCat === item.category) {
            sound.playSuccess();
            btn.classList.add('is-correct');
            this.currentSortItemIdx++;
            setTimeout(() => renderSortingStep(), 320);
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

  // 4. ZŁODZIEJ KOŃCÓWEK ('cloze')
  renderCloze(stageEl, challenge) {
    renderClozeChallenge(this, stageEl, challenge);
  }

  // 5. ALGORYTM ZDANIA ('sentence_algo')
  renderSentenceAlgo(stageEl, challenge) {
    renderSentenceAlgoChallenge(this, stageEl, challenge);
  }

  // 6. WORD MAGNETS ('word_magnets')
  renderWordMagnets(stageEl, challenge) {
    renderWordMagnetsChallenge(this, stageEl, challenge);
  }

  // 7. ARCHITEKT TEKSTU ('text_architect')
  renderTextArchitect(stageEl, challenge) {
    renderTextArchitectChallenge(this, stageEl, challenge);
  }

  // 8. DETEKTYW LEKTUR CKE ('reading_tf')
  renderReadingTF(stageEl, challenge) {
    renderReadingTFChallenge(this, stageEl, challenge);
  }

  // 9. TINDER / SWIPE: FAKT CZY OPINIA? ('swipe')
  renderSwipeFactOpinion(stageEl, challenge) {
    renderSwipeFactOpinionChallenge(this, stageEl, challenge);
  }

  handleCorrect() {
    this.stopTimer();
    sound.playHit(this.enemyName);
    this.addBonusTime(5);

    // Oblicz obrażenia z uwzględnieniem mechanik klasowych:
    let dmg = this.tanDamage + this.robotExtraGearDmg;

    // Robot: automatyczny rzut CPU przy ataku, jeśli nie przekroczył wcześniej
    if (this.heroClass.includes('robot')) {
      if (this.robotOverflowZeroDmg) {
        dmg = 0;
        this.robotOverflowZeroDmg = false;
      }
    }

    // Limit Break: 2× więcej obrażeń w następnej turze po aktywacji żółtego paska
    if (this.warriorDoubleActive) {
      dmg *= 2;
      sound.playWarriorHeavyHit();
      if (this.heroClass.includes('thief')) {
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + 2);
      }
      this.warriorDoubleActive = false;
      this.warriorFuryDamage = 0;
      this.updatePlayerBar();
    }

    // Witch: bonus z aktywnego zaklęcia + fancy efekt bicia!
    if (this.heroClass.includes('witch')) {
      const spellBonus = 1 + (this.player.upgradedSpells || 0);
      dmg += spellBonus;
      sound.playWitchSpellSFX(this.activeWitchSpell.id);
      const oppWrap = this.container.querySelector('#cwaniak-opponent-sprite-wrap');
      if (oppWrap) {
        const fx = document.createElement('div');
        fx.className = 'witch-fancy-hit-fx';
        fx.innerHTML = `<span>${this.activeWitchSpell.icon}</span><strong>-${dmg} HP (${this.activeWitchSpell.name.split(' (')[0]})</strong>`;
        oppWrap.appendChild(fx);
        setTimeout(() => fx.remove(), 950);
      }
    }

    this.enemyHp = Math.max(0, this.enemyHp - dmg);
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

  applyDamageToHero(rawDamage) {
    let dmg = rawDamage;

    // Witch Sonic Wave zmniejsza obrażenia bossa o 1 HP
    if (this.heroClass.includes('witch') && this.activeWitchSpell?.id === 'sonic_wave') {
      dmg = Math.max(1, dmg - 1);
    }

    // Jester: Unika obrażeń przez 3 kolejne tury po aktywacji Limit Break!
    if (this.heroClass.includes('jester') && this.jesterDodgeTurns > 0) {
      this.jesterDodgeTurns -= 1;
      sound.playStep();
      this.updatePlayerBar();
      return;
    }

    this.damageTakenInBattle += dmg;
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(dmg);
    }

    // Limit Break (żółty pasek pod paskiem życia bohatera): ładuje się po otrzymaniu obrażeń (8→13 HP)
    if (!this.warriorDoubleActive && !(this.heroClass.includes('jester') && this.jesterDodgeTurns > 0)) {
      const wasReady = this.warriorDoubleReady;
      this.warriorFuryDamage = Math.min(this.limitBreakMax, this.warriorFuryDamage + dmg);
      if (this.warriorFuryDamage >= this.limitBreakMax) {
        this.warriorDoubleReady = true;
        if (!wasReady) sound.playLimitReady();
      }
    }

    this.updatePlayerBar();
    const playerSprite = this.container.querySelector('.sprite-tan');
    if (playerSprite) {
      playerSprite.classList.add('shake-hit');
      setTimeout(() => playerSprite.classList.remove('shake-hit'), 500);
    }

    if (this.player.hp <= 0) {
      this.stopTimer();
      setTimeout(() => {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      }, 450);
      return true;
    }
    return false;
  }

  handleWrong() {
    sound.playWrong();
    sound.playEnemyHit(this.enemyName);
    if (this.applyDamageToHero(this.enemyDamage)) return;
    this.timeLeft = this.maxTime;
    const timerVal = this.container.querySelector('#cwaniak-timer-val');
    const timerBadge = this.container.querySelector('#cwaniak-timer-badge');
    if (timerVal) timerVal.textContent = `${this.timeLeft.toFixed(1)}s`;
    if (timerBadge) timerBadge.classList.remove('timer-panic');
    this.startTimer();
  }

  handleTimeout() {
    sound.playWrong();
    sound.playEnemyHit(this.enemyName);
    if (this.applyDamageToHero(this.enemyDamage)) return;
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
          <div class="bvs-trophy">🏆</div>
          <h2>${this.enemyName.toUpperCase()} ZOSTAŁ(A) POKONANY(A)!</h2>
          <p>Wspaniały wynik! Opanowałeś wyzwania językowe i literackie!</p>
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
