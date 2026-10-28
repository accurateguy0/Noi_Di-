// Poziom Wordwall: MATCH UP (Przeciągnij słowa do odpowiednich definicji)
// Pole 2 na Planszy 4: Walka z Jeżykiem (40 HP, bije po 2 HP)

import { MATCH_UP_DATA, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class MatchUpGame {
  constructor(container, options = {}) {
    this.container = container;
    this.player = options.player || { name: 'Bohater', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = options.onPlayerDamaged;
    this.onComplete = options.onComplete;
    this.onClose = options.onClose;

    this.items = (options.items && options.items.length > 0) ? [...options.items] : [...MATCH_UP_DATA];
    this.titleText = options.title || 'Match up';
    this.tanDamage = options.tanDamage || getPlayerDamage(this.player);
    this.enemyMaxHp = (this.items && this.items.length > 0) ? (this.items.length * this.tanDamage) : (options.enemyMaxHp || 12);
    this.enemyHp = this.enemyMaxHp;
    this.enemyDamage = options.enemyDamage !== undefined ? options.enemyDamage : 2;

    const rawName = (options.enemyName || 'Jeżyk')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.enemyName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    this.titleText = this.enemyName;
    this.opponentAvatar = options.opponentAvatar || './assets/Postacie/Jez.png';
    this.spriteClass = options.spriteClass || 'sprite-jez';

    // Tasowanie kafelków słów
    this.shuffledWords = [...this.items].sort(() => Math.random() - 0.5);
    this.matchedIds = new Set();
    this.selectedWordId = null;
    this.lockInput = false;
    this.introDismissed = false;
    this.score = 0;
  }

  mount() {
    this.renderArenaShell();
    this.renderMatchupBoard();
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena matchup-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">${this.enemyName}</h2>

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
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite ${this.spriteClass}"
              id="mp-opponent-sprite"
              onerror="this.src='${this.opponentAvatar}'"
            />
          </div>
        </div>

        <!-- Środek areny: Match up -->
        <div class="matching-stage-wrapper matchup-stage-wrapper" id="matchup-stage"></div>

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
      });
    }
  }

  renderMatchupBoard() {
    const stage = this.container.querySelector('#matchup-stage');
    if (!stage) return;

    stage.innerHTML = `
      <div class="ww-matchup-card">
        <div class="ww-matchup-instructions">
          Przeciągnij słowo do właściwego obrazka/definicji lub kliknij słowo, a potem cel!
        </div>

        <!-- Strefy docelowe z definicjami i obrazkami -->
        <div class="ww-matchup-targets-grid" id="matchup-targets">
          ${this.items.map((it, idx) => {
            const isMatched = this.matchedIds.has(it.id);
            const palette = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
            const itemColor = it.color || palette[idx % palette.length];
            const descText = it.defPl || it.matchPrompt || it.desc || '';
            return `
              <div
                class="ww-matchup-target-slot ${isMatched ? 'is-matched' : ''}"
                data-target-id="${it.id}"
              >
                ${it.image ? `
                  <div class="ww-target-img-wrap">
                    <img src="${it.image}" alt="${it.word}" class="ww-target-img" onerror="this.style.display='none'" />
                  </div>
                ` : ''}
                <div class="ww-target-desc">${descText}</div>
                <div class="ww-target-dropzone" style="${isMatched ? `background:${itemColor}; color:#111; font-weight:800;` : ''}">
                  ${isMatched ? `${it.word}` : 'Upuść tutaj...'}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Dostępne kafelki słów do przeciągania/klikania (tylko niedopasowane) -->
        <div class="ww-matchup-words-row" id="matchup-words-pool">
          ${this.shuffledWords
            .filter((it) => !this.matchedIds.has(it.id))
            .map((it, idx) => {
              const isSelected = this.selectedWordId === it.id;
              const palette = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
              const itemColor = it.color || palette[idx % palette.length];
              return `
                <div
                  class="ww-matchup-word-tile ${isSelected ? 'is-selected' : ''}"
                  draggable="false"
                  data-word-id="${it.id}"
                  style="--item-color: ${itemColor}"
                >
                  <span>${it.word}</span>
                </div>
              `;
            }).join('')}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const wordTiles = this.container.querySelectorAll('.ww-matchup-word-tile:not(.is-used)');
    const targetSlots = this.container.querySelectorAll('.ww-matchup-target-slot:not(.is-matched)');

    // 1. Kliknięcie slotu docelowego (gdy gracz wcześniej zaznaczył słowo kliknięciem)
    targetSlots.forEach((slot) => {
      slot.addEventListener('click', () => {
        if (this.lockInput || !this.selectedWordId) return;
        this.attemptMatch(this.selectedWordId, slot.dataset.targetId);
      });
    });

    // 2. Płynne przeciąganie wskaźnikiem (Pointer Events) oraz obsługa kliknięcia słowa
    wordTiles.forEach((tile) => {
      const wordId = tile.dataset.wordId;

      tile.addEventListener('pointerdown', (e) => {
        if (this.lockInput) return;
        if (e.button !== undefined && e.button !== 0) return; // tylko lewy przycisk

        if (!this.introDismissed) {
          this.introDismissed = true;
          const introLayer = this.container.querySelector('#mp-intro-click-layer');
          const animatedTitle = this.container.querySelector('#mp-animated-title');
          if (introLayer) {
            introLayer.classList.add('intro-dismissed');
            setTimeout(() => introLayer.remove(), 650);
          }
          if (animatedTitle) {
            animatedTitle.classList.remove('is-centered');
          }
        }

        const startX = e.clientX;
        const startY = e.clientY;
        let isDragging = false;
        let dragClone = null;
        let hoveredSlot = null;

        const onPointerMove = (moveEvt) => {
          const dx = moveEvt.clientX - startX;
          const dy = moveEvt.clientY - startY;

          if (!isDragging && Math.hypot(dx, dy) > 5) {
            isDragging = true;
            this.selectedWordId = wordId;

            // Stwórz pływający klon kafelka
            dragClone = tile.cloneNode(true);
            dragClone.classList.add('ww-drag-floating-clone');
            dragClone.style.left = `${moveEvt.clientX}px`;
            dragClone.style.top = `${moveEvt.clientY}px`;
            document.body.appendChild(dragClone);

            tile.classList.add('is-dragging-origin');
          }

          if (isDragging && dragClone) {
            dragClone.style.left = `${moveEvt.clientX}px`;
            dragClone.style.top = `${moveEvt.clientY}px`;

            // Sprawdź jaki slot docelowy znajduje się pod kursorem
            const elemBelow = document.elementFromPoint(moveEvt.clientX, moveEvt.clientY);
            const targetSlot = elemBelow?.closest('.ww-matchup-target-slot:not(.is-matched)');

            if (hoveredSlot !== targetSlot) {
              if (hoveredSlot) hoveredSlot.classList.remove('is-drag-over');
              hoveredSlot = targetSlot;
              if (hoveredSlot) hoveredSlot.classList.add('is-drag-over');
            }
          }
        };

        const onPointerUp = (upEvt) => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
          window.removeEventListener('pointercancel', onPointerUp);

          if (isDragging) {
            if (dragClone) {
              dragClone.remove();
              dragClone = null;
            }

            if (hoveredSlot) {
              hoveredSlot.classList.remove('is-drag-over');
              const targetId = hoveredSlot.dataset.targetId;
              hoveredSlot = null;
              this.attemptMatch(wordId, targetId);
            } else {
              tile.classList.remove('is-dragging-origin');
              this.selectedWordId = null;
              this.renderMatchupBoard();
            }
          } else {
            tile.classList.remove('is-dragging-origin');
            // Pojedyncze kliknięcie (zaznacz/odznacz słowo)
            if (this.selectedWordId === wordId) {
              this.selectedWordId = null;
            } else {
              this.selectedWordId = wordId;
              sound.playStep();
            }
            this.renderMatchupBoard();
          }
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
      });
    });
  }

  attemptMatch(wordId, targetId) {
    if (this.lockInput) return;
    this.lockInput = true;

    const matchedItem = this.items.find((it) => it.id === wordId);
    const targetSlot = this.container.querySelector(`[data-target-id="${targetId}"]`);
    const sourceTile = this.container.querySelector(`[data-word-id="${wordId}"]`);

    if (wordId === targetId) {
      // Poprawne dopasowanie!
      this.matchedIds.add(wordId);
      this.selectedWordId = null;

      // Natychmiastowe umieszczenie słowa w slocie docelowym (bez opóźnienia i skakania)
      if (targetSlot) {
        targetSlot.classList.add('is-matched');
        const dropzone = targetSlot.querySelector('.ww-target-dropzone');
        if (dropzone && matchedItem) {
          dropzone.style.background = matchedItem.color;
          dropzone.style.color = '#111';
          dropzone.style.fontWeight = '800';
          dropzone.textContent = `${matchedItem.word}`;
        }
      }
      if (sourceTile) {
        sourceTile.classList.add('is-used');
        sourceTile.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
        sourceTile.style.transform = 'scale(0.5)';
        sourceTile.style.opacity = '0';
        setTimeout(() => {
          if (sourceTile && sourceTile.parentNode) {
            sourceTile.remove();
          }
        }, 150);
      }

      sound.playAttackHit(this.enemyName);
      if (matchedItem) {
        sound.speakPolish(matchedItem.word);
      }

      this.score += 150;
      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateEnemyHud();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      setTimeout(() => {
        this.lockInput = false;
        this.renderMatchupBoard();

        if (this.matchedIds.size >= this.items.length) {
          this.finishBattle();
        }
      }, 550);
    } else {
      // Błędne dopasowanie -> przeciwnik atakuje!
      sound.playEnemyHit(this.enemyName);
      this.selectedWordId = null;

      if (sourceTile) {
        sourceTile.classList.remove('is-dragging-origin');
      }

      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(this.enemyDamage);
      } else {
        this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
      }

      this.updatePlayerHud();
      this.triggerFighterHit('player', `-${this.enemyDamage}`);

      if (targetSlot) targetSlot.classList.add('is-wrong');

      setTimeout(() => {
        this.lockInput = false;
        this.renderMatchupBoard();

        if (this.player.hp <= 0) {
          playHeroDefeatAnimation(this.container, this.player, this.onClose);
        }
      }, 500);
    }
  }

  triggerFighterHit(target = 'opponent', dmgText = '-2') {
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
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
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

  finishBattle() {
    sound.playFanfare();
    const arenaEl = this.container.querySelector('.dd-combat-arena');
    if (arenaEl) arenaEl.classList.add('arena-victory-exit');

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: this.score });
      }
    }, 600);
  }

  destroy() {
    document.querySelectorAll('.ww-drag-floating-clone').forEach((el) => el.remove());
  }
}
