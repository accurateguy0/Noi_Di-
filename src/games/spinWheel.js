// Poziom Wordwall: SPIN THE WHEEL (Zakręć kołem z nowych słownictw)
// Pole 2 na Planszy 3: Ćwiczenie z Kotkiem Pomocnikiem (Grasz w...?, Jaki masz nick?, Dasz ID?)

import { BOARD_3_WHEEL_SCENARIOS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class SpinWheelGame {
  constructor(container, options = {}) {
    this.container = container;
    this.player = options.player || { name: 'Bohater', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = options.onPlayerDamaged;
    this.onComplete = options.onComplete;
    this.onClose = options.onClose;
    const rawEnemyName = (options.enemyName || 'Kotek Pomocnik')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.enemyName = options.enemyName || rawEnemyName || 'kotek';
    this.title = options.title || rawEnemyName || 'Kotek Pomocnik';

    const rawScenarios = options.scenarios || BOARD_3_WHEEL_SCENARIOS;
    const baseScenarios = (rawScenarios && rawScenarios.length > 0)
      ? (rawScenarios.length > 6 ? rawScenarios.slice(0, 6) : rawScenarios)
      : BOARD_3_WHEEL_SCENARIOS.slice(0, 3);
    this.remainingSlices = [...baseScenarios];
    this.totalCount = baseScenarios.length;
    this.tanDamage = options.tanDamage || getPlayerDamage(this.player);
    this.enemyMaxHp = this.totalCount * this.tanDamage;
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = options.enemyDamage !== undefined ? options.enemyDamage : 2;
    this.score = 0;

    this.angle = 0;
    this.angularVelocity = 0;
    this.isSpinning = false;
    this.selectedSlice = null;
    this.lastTickSliceIndex = -1;
    this.animFrame = null;
  }

  mount() {
    const playerHpPct = Math.max(
      0,
      Math.min(100, (this.player.hp / this.player.maxHp) * 100)
    );
    const enemyHpPct = Math.max(
      0,
      Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100)
    );

    this.container.innerHTML = `
      <div class="dd-combat-arena wheel-dd-arena">
        <h2 class="mp-animated-title" id="mp-animated-title">${this.title}</h2>

        <!-- Prawy górny róg: Kotek Pomocnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kotek Pomocnik</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Kotek_Pomoc.png"
              alt="Kotek Pomocnik"
              class="dd-fighter-sprite sprite-kotek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Kotek_Pomoc.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Koło fortuny + karta pytania -->
        <div class="matching-stage-wrapper wheel-stage-wrapper">
          <div class="ww-wheel-combat-card">
            <div class="ww-wheel-left-col">
              <div class="wheel-wrapper">
                <canvas id="wheel-canvas" width="440" height="440"></canvas>
                <div class="wheel-pointer" title="Wskaźnik"></div>
              </div>
              <button class="btn-primary-spin" id="sw-spin-main-btn">
ZAKRĘĆ KOŁEM (${this.remainingSlices.length}/${this.totalCount})
              </button>
            </div>

            <div class="ww-wheel-right-col" id="sw-question-panel">
              <div class="wheel-empty-prompt">
                <div class="big-wheel-icon"></div>
                <h3>Nowe zwroty o grach!</h3>
                <p>Kliknij <strong>„ZAKRĘĆ KOŁEM”</strong> po lewej stronie, aby wylosować pytanie i przetestować nowe karty!</p>
              </div>
            </div>
          </div>
        </div>

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

    const animatedTitle = this.container.querySelector('#mp-animated-title');
    if (animatedTitle) {
      const dismiss = () => {
        if (!animatedTitle.classList.contains('is-dismissed')) {
          animatedTitle.classList.remove('is-centered');
          animatedTitle.classList.add('is-dismissed');
          setTimeout(() => {
            if (animatedTitle.parentNode) animatedTitle.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }

    this.canvas = this.container.querySelector('#wheel-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.questionPanel = this.container.querySelector('#sw-question-panel');

    const triggerSpin = () => this.spin();
    if (this.canvas) {
      this.canvas.addEventListener('click', triggerSpin);
    }
    const mainBtn = this.container.querySelector('#sw-spin-main-btn');
    if (mainBtn) {
      mainBtn.addEventListener('click', triggerSpin);
    }

    this.drawWheel();
  }

  spin() {
    if (this.isSpinning || this.remainingSlices.length === 0 || this.enemyHp <= 0) return;

    this.isSpinning = true;
    this.selectedSlice = null;
    this.angularVelocity = 0.30 + Math.random() * 0.16;
    this.lastTickSliceIndex = -1;

    sound.playSpinWheel();

    const mainBtn = this.container.querySelector('#sw-spin-main-btn');
    if (mainBtn) mainBtn.disabled = true;

    this.questionPanel.innerHTML = `
      <div class="wheel-empty-prompt spinning-state">
        <div class="big-wheel-icon spin-anim"></div>
        <h3>Koło się kręci...</h3>
        <p>Zobaczmy, który zwrot wypadnie teraz!</p>
      </div>
    `;

    const animate = () => {
      this.angle = (this.angle + this.angularVelocity) % (Math.PI * 2);
      this.angularVelocity *= 0.982;

      const count = this.remainingSlices.length;
      const arc = (Math.PI * 2) / count;
      const normalized = ((Math.PI * 2) - (this.angle % (Math.PI * 2))) % (Math.PI * 2);
      const currentIdx = Math.floor(normalized / arc) % count;

      if (currentIdx !== this.lastTickSliceIndex) {
        this.lastTickSliceIndex = currentIdx;
        sound.playTick();
      }

      this.drawWheel();

      if (this.angularVelocity > 0.0028) {
        this.animFrame = requestAnimationFrame(animate);
      } else {
        this.isSpinning = false;
        this.angularVelocity = 0;
        sound.stopSpinWheel();
        this.selectedSlice = this.remainingSlices[currentIdx];
        sound.playSuccess();
        const slice = this.selectedSlice;
        const sLabel = (slice.sliceLabel || slice.word || slice.label || '').trim();
        const sSpeak = (slice.speakText || slice.word || sLabel || '').trim();
        const nLabel = sLabel.toLowerCase().replace(/[!?.„”«»:\-]/g, '').trim();
        const nSpeak = sSpeak.toLowerCase().replace(/[!?.„”«»:\-]/g, '').trim();
        const speech = (sSpeak && nSpeak !== nLabel)
          ? (nSpeak.startsWith(nLabel) ? sSpeak : `${sLabel}: ${sSpeak}`)
          : (sSpeak || sLabel);
        if (speech) {
          sound.speakPolish(speech);
        }
        this.renderScenarioCard(this.selectedSlice);
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  drawWheel() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const radius = Math.min(cx, cy) - 16;

    ctx.clearRect(0, 0, W, H);

    const count = this.remainingSlices.length;
    if (count === 0) return;

    const arc = (Math.PI * 2) / count;

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 8, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd166';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#1d3557';
    ctx.stroke();
    ctx.restore();

    const PALETTE = ['#3a86ff', '#ef476f', '#ffd166', '#06d6a0', '#8338ec', '#fb5607', '#118ab2'];

    for (let i = 0; i < count; i++) {
      const slice = this.remainingSlices[i];
      const startAngle = this.angle + i * arc;
      const endAngle = startAngle + arc;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = slice.sliceColor || slice.color || PALETTE[i % PALETTE.length];
      ctx.fill();
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.translate(cx, cy);
      ctx.rotate(startAngle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      const labelText = slice.sliceLabel || slice.label || slice.cleanWord || slice.word || 'Słowo';
      const fontSize = labelText.length > 20 ? 14 : (labelText.length > 14 ? 15 : 16);
      ctx.font = `bold ${fontSize}px "Fredoka", "Segoe UI", sans-serif`;
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 5;
      ctx.fillText(labelText, radius - 18, 5);
      ctx.restore();
    }

    for (let i = 0; i < Math.max(8, count * 2); i++) {
      const a = this.angle + (i * Math.PI * 2) / Math.max(8, count * 2);
      const px = cx + Math.cos(a) * (radius + 4);
      const py = cy + Math.sin(a) * (radius + 4);
      ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#ef476f';
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  renderScenarioCard(scenario) {
    const sliceColor = scenario.sliceColor || scenario.color || '#3a86ff';
    const badge = scenario.badge || 'KOTEK POMOCNIK';
    const sliceLabel = (scenario.sliceLabel || scenario.word || scenario.label || '').trim();
    const speakText = (scenario.speakText || scenario.word || sliceLabel || '').trim();

    const normLabel = sliceLabel.toLowerCase().replace(/[!?.„”«»:\-]/g, '').trim();
    const normSpeak = speakText.toLowerCase().replace(/[!?.„”«»:\-]/g, '').trim();
    const hasDistinctQuote = Boolean(speakText && normSpeak !== normLabel);

    const fullAudioText = hasDistinctQuote
      ? (normSpeak.startsWith(normLabel) ? speakText : `${sliceLabel}: ${speakText}`)
      : (speakText || sliceLabel);

    const rawOptions = Array.isArray(scenario.options) ? scenario.options : [];
    const normalizedOptions = rawOptions.map((opt) => {
      if (typeof opt === 'string') {
        const isCorrect = (scenario.correctVn && opt === scenario.correctVn) || (scenario.correctAnswer && opt === scenario.correctAnswer);
        return { textPl: opt, textVn: '', correct: isCorrect };
      }
      return {
        textPl: opt.textPl || opt.text || opt.label || opt.word || String(opt),
        textVn: opt.textVn || opt.vnMeaning || opt.vn || opt.subText || '',
        correct: Boolean(opt.correct)
      };
    });

    const shuffledOptions = [...normalizedOptions].sort(() => Math.random() - 0.5);

    this.questionPanel.innerHTML = `
      <div class="scenario-card" style="border-color: ${sliceColor}">
        <div class="scenario-top-row">
          <span class="scenario-badge" style="background: ${sliceColor}">${badge}</span>
          <button class="btn-audio-inline" id="sw-speak-btn">
Posłuchaj
          </button>
        </div>

        <div class="scenario-slice-heading" style="color: ${sliceColor}">
          ${sliceLabel}
        </div>

        ${hasDistinctQuote ? `
          <div class="scenario-quote-box" style="border-left-color: ${sliceColor}">
            <span class="scenario-quote-label">Przykład / Hasło:</span>
            <span class="scenario-quote-text">„${speakText}”</span>
          </div>
        ` : ''}

        <div class="scenario-options-list">
          ${shuffledOptions.map((opt, idx) => `
            <button class="scenario-option-btn" data-idx="${idx}">
              <div class="opt-pl">${opt.textPl}</div>
              ${opt.textVn ? `<div class="opt-vn">${opt.textVn}</div>` : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.questionPanel.querySelector('#sw-speak-btn').addEventListener('click', () => {
      if (fullAudioText) sound.speakPolish(fullAudioText);
    });

    const buttons = this.questionPanel.querySelectorAll('.scenario-option-btn');

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const chosen = shuffledOptions[idx];
        if (chosen.correct) {
          buttons.forEach((b) => (b.disabled = true));
          btn.classList.add('opt-correct');
          sound.playAttackHit(this.enemyName);
          if (fullAudioText) sound.speakPolish(fullAudioText);

          this.score += 120;
          this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
          this.updateEnemyHud();
          this.triggerFighterHit('opponent', `-${this.tanDamage}`);

          setTimeout(() => {
            this.eliminateSlice(scenario.id);
          }, 720);
        } else {
          sound.playWrong();
          sound.playEnemyHit(this.enemyName);
          btn.classList.add('opt-wrong');
          btn.disabled = true;

          const dmg = this.enemyDamage || 1;
          if (this.onPlayerDamaged) {
            this.onPlayerDamaged(dmg);
          } else {
            this.player.hp = Math.max(0, this.player.hp - dmg);
          }
          this.updatePlayerHud();
          this.triggerFighterHit('player', `-${dmg}`);

          if (this.player.hp <= 0) {
            setTimeout(() => {
              playHeroDefeatAnimation(this.container, this.player, this.onClose);
            }, 500);
          }
        }
      });
    });
  }

  eliminateSlice(id) {
    this.remainingSlices = this.remainingSlices.filter((s) => s.id !== id);
    const mainBtn = this.container.querySelector('#sw-spin-main-btn');
    if (mainBtn) {
      mainBtn.disabled = false;
      mainBtn.textContent = `ZAKRĘĆ KOŁEM (${this.remainingSlices.length}/${this.totalCount})`;
    }

    if (this.remainingSlices.length === 0 || this.enemyHp <= 0) {
      this.finishWheel();
      return;
    }

    this.drawWheel();
    this.questionPanel.innerHTML = `
      <div class="wheel-empty-prompt">
        <div class="big-wheel-icon"></div>
        <h3>Świetnie! Pozostało na kole: ${this.remainingSlices.length}</h3>
        <p>Kliknij <strong>„ZAKRĘĆ KOŁEM”</strong>, aby wylosować kolejny zwrot!</p>
      </div>
    `;
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
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
        <path
          class="dd-slash-arc"
          d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z"
        />
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

  updatePlayerBar() {
    this.updatePlayerHud();
  }

  finishWheel() {
    sound.stopSpinWheel();
    sound.playFanfare();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) {
      arenaEl.classList.add('arena-victory-exit');
    }

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: this.score });
      }
    }, 600);
  }

  destroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    sound.stopSpinWheel();
  }
}
