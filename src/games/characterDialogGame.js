// Uniwersalna minigra dialogowo-starciowa dla postaci (Wuefista, Pielęgniarka, Gejmer, Piłkarz, Cwaniak)
// Styl Dicey Dungeons / Wordwall z dialogami sytuacyjnymi i walką turową

import { sound } from '../audio/sound.js';
import { getPlayerDamage } from '../data/vocabulary.js';

export class CharacterDialogGame {
  constructor(container, {
    player,
    onPlayerDamaged,
    onComplete,
    onClose,
    enemyName = 'Wuefista',
    enemyTitle = '🏃 WUEFISTA 🏃',
    enemySubtitle = 'Nauczyciel WF-u (30 HP, 3 dmg)',
    enemyAvatar = './assets/Postacie/Wuefista.png',
    enemyMaxHp = 30,
    enemyDamage = 3,
    steps = [],
    arenaClass = ''
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
    this.steps = steps || [];
    this.tanDamage = getPlayerDamage(this.player);
    this.enemyMaxHp = this.steps.length > 0 ? (this.steps.length * this.tanDamage) : (enemyMaxHp || 20);
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = enemyDamage;
    this.arenaClass = arenaClass || '';
    this.currentStepIdx = 0;
    this.lockInput = false;
    this.damageTakenInBattle = 0;
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
        <h2 class="mp-animated-title" style="top: 22px;">${this.enemyTitle}</h2>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemySubtitle}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill cd-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text cd-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container">
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

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player">
          <div class="dd-sprite-container player-sprite-container">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan cd-tan-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name || 'Tan'}</span>
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
    const stageEl = this.container.querySelector('#cd-stage');
    if (!stageEl) return;

    if (this.currentStepIdx >= this.steps.length) {
      this.currentStepIdx = 0;
    }

    const step = this.steps[this.currentStepIdx];
    this.lockInput = false;

    // Przeczytaj wypowiedź postaci
    const cleanSpeech = step.question.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu, '');
    sound.speakPolish(cleanSpeech);

    stageEl.innerHTML = `
      <div class="cd-bubble-box">
        <div class="cd-character-avatar-bubble">
          <img src="${this.enemyAvatar}" alt="${this.enemyName}" />
        </div>
        <div class="cd-character-text">${step.question}</div>
      </div>

      <div class="cd-options-grid">
        ${step.options.map((opt, i) => `
          <button class="cd-option-card" data-idx="${i}">
            <span class="cd-option-icon">💬</span>
            <span class="cd-option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    `;

    stageEl.querySelectorAll('.cd-option-card').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        const optIdx = parseInt(btn.dataset.idx, 10);
        this.handleChoice(btn, step.options[optIdx]);
      });
    });
  }

  handleChoice(btnEl, option) {
    this.lockInput = true;

    if (option.correct) {
      btnEl.classList.add('is-correct');
      sound.playSuccess();
      sound.playHit(this.enemyName);
      sound.speakPolish(option.text.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu, ''));

      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateEnemyHp();

      const opponentSprite = this.container.querySelector('.cd-opponent-sprite');
      if (opponentSprite) {
        opponentSprite.classList.add('shake-hit');
        setTimeout(() => opponentSprite.classList.remove('shake-hit'), 500);
      }

      setTimeout(() => {
        if (this.enemyHp <= 0 || this.currentStepIdx + 1 >= this.steps.length) {
          this.finishVictory();
        } else {
          this.currentStepIdx++;
          this.renderCurrentStep();
        }
      }, 900);
    } else {
      btnEl.classList.add('is-wrong');
      sound.playWrong();
      sound.playEnemyHit(this.enemyName);
      this.damageTakenInBattle += this.enemyDamage;

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }

      this.updatePlayerHp();

      const tanSprite = this.container.querySelector('.cd-tan-sprite');
      if (tanSprite) {
        tanSprite.classList.add('shake-hit');
        setTimeout(() => tanSprite.classList.remove('shake-hit'), 500);
      }

      setTimeout(() => {
        this.lockInput = false;
        btnEl.classList.remove('is-wrong');
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
          <div class="bvs-trophy">⭐🎉</div>
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

  destroy() {
    this.container.innerHTML = '';
  }
}
