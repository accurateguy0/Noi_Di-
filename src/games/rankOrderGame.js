// Minigra Wordwall: RANK ORDER (Uporządkuj kolejność dialogu przy kasie)
// Plansza 1 w Mieście (Żabka / Biedronka) - Pole 6: Kasjerka (20 HP, 5 obrażeń)
// Zadanie: Ułóż kwestie dialogu z kasjerką w logicznej, naturalnej kolejności (1 do 5).
// Wykorzystuje wcześniejsze wybory gracza z Myśli (produkty, reklamówka, forma płatności).

import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class RankOrderGame {
  constructor(container, {
    player,
    onPlayerDamaged,
    onComplete,
    onClose,
    steps = null,
    title = null,
    instruction = null,
    enemyName = 'Koleżanka',
    opponentAvatar = './assets/Postacie/kolezanka.png',
    enemyMaxHp = 26,
    enemyDamage = 3,
    arenaTheme = 'school',
    shoppingChoices = {}
  } = {}) {
    this.container = container;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.shoppingChoices = shoppingChoices;

    const rawName = (enemyName || 'Koleżanka')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.enemyName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    this.enemyMaxHp = enemyMaxHp || 26;
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = enemyDamage || 3;
    this.opponentAvatar = opponentAvatar || './assets/Postacie/kolezanka.png';
    this.arenaTheme = arenaTheme || 'school';
    this.titleText = this.enemyName;
    this.instructionText = instruction || 'Przeciągnij i upuść (trzymaj myszką), aby ułożyć etapy rozmowy:';

    if (steps && Array.isArray(steps) && steps.length > 0) {
      this.correctOrder = steps.map((s, idx) => ({
        id: `step_${idx + 1}`,
        text: s,
        stepNum: idx + 1
      }));
    } else {
      // Budujemy dynamiczne kwestie dialogu w oparciu o wybory z Pola 3 (dla Kasjerki w mieście)
      let itemText = 'Poproszę świeżą bułkę i wodę.';
      if (shoppingChoices.itemsText) {
        itemText = shoppingChoices.itemsText;
      } else if (Array.isArray(shoppingChoices.items) && shoppingChoices.items.length > 0) {
        itemText = `Poproszę ${shoppingChoices.items.join(' i ')}.`;
      } else if (shoppingChoices.items === 'chips_water') {
        itemText = 'Poproszę czipsy i butelkę wody.';
      }

      const bagText = (shoppingChoices.bag === 'no_bag' || shoppingChoices.bag === 'nie')
        ? 'Dziękuję, nie potrzebuję reklamówki, mam własną torbę.'
        : 'Tak, poproszę małą reklamówkę.';

      const payText = (shoppingChoices.payment === 'cash' || shoppingChoices.payment === 'gotowka')
        ? 'Zapłacę gotówką – mam odliczoną kwotę.'
        : 'Będę płacić kartą, zbliżeniowo.';

      this.correctOrder = [
        { id: 'step_1', text: '1. „Dzień dobry!” (Powitanie przy kasie)', stepNum: 1 },
        { id: 'step_2', text: `2. „${itemText}” (Podanie zamówienia)`, stepNum: 2 },
        { id: 'step_3', text: `3. „${bagText}” (Odpowiedź w sprawie reklamówki)`, stepNum: 3 },
        { id: 'step_4', text: `4. „${payText}” (Płatność za zakupy)`, stepNum: 4 },
        { id: 'step_5', text: '5. „Dziękuję, miłego dnia! Do widzenia!” (Pożegnanie)', stepNum: 5 }
      ];
    }

    // Rozsypujemy kolejność kafelków
    this.items = [...this.correctOrder].sort(() => Math.random() - 0.5);
    // Upewniamy się, że nie jest od razu ułożone
    if (this.items.every((it, idx) => it.stepNum === idx + 1)) {
      this.items.reverse();
    }

    this.lockInput = false;
  }

  mount() {
    this.renderArena();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const isWideSprite = (this.opponentAvatar || '').toLowerCase().includes('szczeniak') ||
                         (this.opponentAvatar || '').toLowerCase().includes('kotek_pomoc') ||
                         (this.enemyName || '').toLowerCase().includes('szczeniak');
    const wideClass = isWideSprite ? 'wide-sprite-container szczeniak-sprite-container' : '';

    this.container.innerHTML = `
      <div class="dd-combat-arena ro-arena ro-theme-${this.arenaTheme}">
        <h2 class="mp-animated-title" id="ro-title" style="top: 22px;">${this.titleText}</h2>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="ro-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemyName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="ro-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="ro-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="ro-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container ${wideClass}" id="ro-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite sprite-opponent"
              id="ro-opponent-sprite"
              onerror="this.src='./public${this.opponentAvatar.replace(/^\\./, '')}'"
            />
          </div>
        </div>

        <!-- Środek areny: Kafelki do sortowania -->
        <div class="matching-stage-wrapper ro-stage-wrapper">
          <div class="ro-card-board">
            <div class="ro-instructions">
              ${this.instructionText}
            </div>

            <div class="ro-items-list" id="ro-items-list">
              ${this.renderItemsList()}
            </div>

            <button type="button" class="btn-dicey-take btn-ro-verify" id="ro-verify-btn">
              SPRAWDŹ KOLEJNOŚĆ DIALOGU
            </button>
          </div>
        </div>

        <!-- Lewy dolny róg: Bohater -->
        <div class="dd-arena-fighter dd-arena-player" id="ro-player-box">
          <div class="dd-sprite-container player-sprite-container" id="ro-player-sprite-wrap">
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
              <div class="dd-fighter-hp-fill" id="ro-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="ro-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const roTitle = this.container.querySelector('#ro-title');
    if (roTitle) {
      const dismiss = () => {
        if (!roTitle.classList.contains('is-dismissed')) {
          roTitle.classList.remove('is-centered');
          roTitle.classList.add('is-dismissed');
          setTimeout(() => {
            if (roTitle.parentNode) roTitle.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }

    this.bindEvents();
  }

  renderItemsList() {
    return this.items.map((it, idx) => `
      <div class="ro-item-row" draggable="true" data-idx="${idx}">
        <div class="ro-drag-handle" title="Chwyć i przeciągnij">⠿</div>
        <div class="ro-pos-badge">${idx + 1}</div>
        <div class="ro-item-text">${it.text}</div>
      </div>
    `).join('');
  }

  bindEvents() {
    const listEl = this.container.querySelector('#ro-items-list');
    if (!listEl) return;

    let draggedIdx = null;
    const rows = listEl.querySelectorAll('.ro-item-row');

    rows.forEach(row => {
      row.addEventListener('dragstart', (e) => {
        if (this.lockInput) return;
        draggedIdx = parseInt(row.dataset.idx, 10);
        row.classList.add('is-dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(draggedIdx));
      });

      row.addEventListener('dragend', () => {
        row.classList.remove('is-dragging');
        rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
      });

      row.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (this.lockInput || draggedIdx === null) return;
        const targetIdx = parseInt(row.dataset.idx, 10);
        if (targetIdx === draggedIdx) return;

        const rect = row.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
        if (e.clientY < midY) {
          row.classList.add('drag-over-top');
        } else {
          row.classList.add('drag-over-bottom');
        }
      });

      row.addEventListener('dragleave', () => {
        row.classList.remove('drag-over-top', 'drag-over-bottom');
      });

      row.addEventListener('drop', (e) => {
        e.preventDefault();
        rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
        if (this.lockInput || draggedIdx === null) return;

        const targetIdx = parseInt(row.dataset.idx, 10);
        if (draggedIdx === targetIdx) return;

        sound.playStep();
        const movedItem = this.items.splice(draggedIdx, 1)[0];
        this.items.splice(targetIdx, 0, movedItem);

        draggedIdx = null;
        listEl.innerHTML = this.renderItemsList();
        const roTitle = this.container.querySelector('#ro-title');
    if (roTitle) {
      const dismiss = () => {
        if (!roTitle.classList.contains('is-dismissed')) {
          roTitle.classList.remove('is-centered');
          roTitle.classList.add('is-dismissed');
          setTimeout(() => {
            if (roTitle.parentNode) roTitle.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }

    this.bindEvents();
      });
    });

    const verifyBtn = this.container.querySelector('#ro-verify-btn');
    if (verifyBtn) {
      verifyBtn.addEventListener('click', () => {
        if (this.lockInput) return;
        this.checkOrder();
      });
    }
  }

  checkOrder() {
    this.lockInput = true;
    const isAllCorrect = this.items.every((it, idx) => it.stepNum === idx + 1);
    const rowEls = this.container.querySelectorAll('.ro-item-row');

    rowEls.forEach((row, idx) => {
      const it = this.items[idx];
      if (it.stepNum === idx + 1) {
        row.classList.add('is-row-correct');
      } else {
        row.classList.add('is-row-wrong');
      }
    });

    if (isAllCorrect) {
      sound.playAttackHit(this.enemyName);
      sound.playSuccess();
      this.enemyHp = 0;
      this.triggerFighterHit('opponent', `-${this.enemyMaxHp}`);
      this.updateEnemyHud();

      setTimeout(() => {
        this.finishBattle();
      }, 700);
    } else {
      sound.playEnemyHit(this.enemyName);
      this.triggerFighterHit('player', `-${this.enemyDamage}`);
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      }
      this.updatePlayerHud();

      if (this.player.hp <= 0) {
        setTimeout(() => {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        }, 500);
        return;
      }

      setTimeout(() => {
        rowEls.forEach(r => r.classList.remove('is-row-correct', 'is-row-wrong'));
        this.lockInput = false;
      }, 900);
    }
  }

  triggerFighterHit(target = 'opponent', dmgText = '-20') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#ro-opponent-sprite-wrap' : '#ro-player-sprite-wrap'
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
    const fill = this.container.querySelector('#ro-enemy-hp-fill');
    const txt = this.container.querySelector('#ro-enemy-hp-text');
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  updatePlayerHud() {
    const fill = this.container.querySelector('#ro-player-hp-fill');
    const txt = this.container.querySelector('#ro-player-hp-text');
    const pct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  finishBattle() {
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
    // cleanup
  }
}
