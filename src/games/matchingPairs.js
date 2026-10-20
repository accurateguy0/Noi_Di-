// Poziom Wordwall: MATCHING PAIRS (Dopasuj pary) w interfejsie walki Dicey Dungeons
// Ćwiczenie z Kotkiem Pomocnikiem na Polu 3 (Poziom A0 dla 13-letniego ucznia z Wietnamu)

import { SLANG_WORDS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class MatchingPairsGame {
  constructor(container, options = {}) {
    this.container = container;
    this.player = options.player || { name: 'Tan', hp: 20, maxHp: 20, bonusDamage: 0 };
    this.onPlayerDamaged = options.onPlayerDamaged;
    this.onComplete = options.onComplete;
    this.onClose = options.onClose;
    this.enemyName = options.enemyName || 'kotek';
    this.enemyDamage = options.enemyDamage !== undefined ? options.enemyDamage : 1;

    this.pairCount = options.pairCount || 4; // 4 pary: Siema!, Elo!, Nara!, Co tam?
    this.tanDamage = options.tanDamage || getPlayerDamage(this.player);
    this.enemyMaxHp = options.enemyMaxHp || (this.pairCount * this.tanDamage);
    this.enemyHp = this.enemyMaxHp;
    this.tiles = [];
    this.flippedTiles = [];
    this.matchedPairIds = new Set();
    this.moves = 0;
    this.score = 0;
    this.lockBoard = false;
  }

  mount() {
    this.setupDeck(this.pairCount);
    this.render();
  }

  setupDeck(pairCount) {
    this.pairCount = pairCount;
    this.enemyMaxHp = this.pairCount * this.tanDamage;
    this.enemyHp = this.enemyMaxHp;
    this.flippedTiles = [];
    this.matchedPairIds.clear();
    this.moves = 0;
    this.score = 0;
    this.lockBoard = false;

    const selectedWords = SLANG_WORDS.slice(0, pairCount);
    const rawTiles = [];

    selectedWords.forEach((item) => {
      // Kafelek 1: Polskie słowo (np. Siema!)
      rawTiles.push({
        uid: `${item.id}_word`,
        pairId: item.id,
        kind: 'word',
        item,
        title: item.word,
        color: item.color
      });

      // Kafelek 2: Tłumaczenie na język wietnamski (np. Chào bạn!)
      rawTiles.push({
        uid: `${item.id}_def`,
        pairId: item.id,
        kind: 'def',
        item,
        title: item.vnWord || item.vnMeaning,
        color: item.color
      });
    });

    // Losowe tasowanie kafelków (Fisher-Yates)
    for (let i = rawTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawTiles[i], rawTiles[j]] = [rawTiles[j], rawTiles[i]];
    }

    this.tiles = rawTiles;
  }

  render() {
    const playerHpPct = Math.max(
      0,
      Math.min(100, (this.player.hp / this.player.maxHp) * 100)
    );
    const enemyHpPct = Math.max(
      0,
      Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100)
    );

    this.container.innerHTML = `
      <div class="dd-combat-arena matching-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie myszką, które przesuwa napis "Dopasuj pary" ze środka na górę -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>

        <!-- Animowany napis: zaczyna duży na środku ekranu, a po kliknięciu zmniejsza się do góry w centrum -->
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Dopasuj pary</h2>

        <!-- Prawy górny róg w stylu Dicey Dungeons: Kotek Pomocnik -->
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

        <!-- Środek areny: Karty do dopasowania (wyłącznie język polski) -->
        <div class="matching-stage-wrapper">
          <div class="matching-grid grid-8" id="mp-grid">
            ${this.tiles.map((tile, idx) => `
              <div class="mp-tile" data-uid="${tile.uid}" data-idx="${idx}">
                <div class="mp-tile-inner">
                  <!-- Tył kafelka -->
                  <div class="mp-tile-face mp-tile-back"></div>
                  <!-- Przód kafelka (tylko język polski) -->
                  <div class="mp-tile-face mp-tile-front ${tile.kind === 'word' ? 'face-word' : 'face-def'}" style="--tile-color: ${tile.color}">
                    <div class="mp-front-main">${tile.title}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Lewy dolny róg w stylu Dicey Dungeons: Tan + pasek HP -->
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
        sound.playStep();
        animatedTitle.classList.remove('is-centered');
        introLayer.classList.add('intro-dismissed');
        setTimeout(() => introLayer.remove(), 650);
      });
    }

    this.container.querySelectorAll('.mp-tile').forEach((tileEl) => {
      tileEl.addEventListener('click', () => {
        const idx = Number(tileEl.dataset.idx);
        this.handleTileClick(idx, tileEl);
      });
    });
  }

  triggerFighterHit(target = 'opponent', dmgText = '-5') {
    const spriteWrap = this.container.querySelector(
      target === 'opponent' ? '#mp-opponent-sprite-wrap' : '#mp-player-sprite-wrap'
    );

    // Drżenie całego ekranu w momencie otrzymania obrażeń
    this.container.classList.remove('dd-screen-shake');
    void this.container.offsetWidth;
    this.container.classList.add('dd-screen-shake');
    clearTimeout(this.shakeTimer);
    this.shakeTimer = setTimeout(() => {
      this.container.classList.remove('dd-screen-shake');
    }, 360);

    if (!spriteWrap) return;

    // Zakrzywione białe cięcie (curved slashing silhouette) bez świecenia całej postaci
    const slashEl = document.createElement('div');
    slashEl.className = 'dd-white-slash-fx';
    slashEl.innerHTML = `
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <!-- Zakrzywiony półksiężyc cięcia (curved slash silhouette) -->
        <path
          class="dd-slash-arc"
          d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z"
        />
        <!-- Druga cieńsza smuga podążająca po łuku -->
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

  handleTileClick(idx, tileEl) {
    if (this.lockBoard) return;
    const tile = this.tiles[idx];
    if (!tile) return;

    if (this.matchedPairIds.has(tile.pairId)) return;
    if (this.flippedTiles.some(f => f.idx === idx)) return;

    sound.playStep();
    tileEl.classList.add('is-flipped');
    this.flippedTiles.push({ idx, tile, el: tileEl });

    if (tile.kind === 'word') {
      sound.speakPolish(tile.item.cleanWord);
    }

    if (this.flippedTiles.length === 2) {
      this.moves += 1;
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const [first, second] = this.flippedTiles;
    const isMatch = first.tile.pairId === second.tile.pairId;

    if (isMatch) {
      this.matchedPairIds.add(first.tile.pairId);
      this.score += 120;
      this.flippedTiles = [];

      first.el.classList.add('is-matched');
      second.el.classList.add('is-matched');

      // Tan zadaje obrażenia Kotkowi Pomocnikowi za każdą dopasowaną parę:
      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);

      // Tan wydaje okrzyk ataku + odgłos uderzenia miecza + Kotek miauczy w obronie:
      sound.playAttackHit(this.enemyName);
      sound.playSuccess();
      if (first.tile.item && first.tile.item.cleanWord) {
        setTimeout(() => {
          sound.speakPolish(first.tile.item.cleanWord);
        }, 320);
      }
      this.updateOpponentBar();
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      if (this.matchedPairIds.size === this.pairCount) {
        setTimeout(() => {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) {
            arenaEl.classList.add('arena-victory-exit');
          }
          if (this.onComplete) this.onComplete({ score: this.score });
        }, 650);
      }
    } else {
      this.lockBoard = true;
      first.el.classList.add('is-mismatch');
      second.el.classList.add('is-mismatch');

      // Kotek Pomocnik jest pomocnikiem i nie zadaje obrażeń:
      sound.playWrong();

      const dmg = this.enemyDamage || 0;
      if (dmg > 0) {
        sound.playEnemyHit(this.enemyName);
        this.player.hp = Math.max(0, this.player.hp - dmg);
        if (this.onPlayerDamaged) {
          this.onPlayerDamaged(dmg);
        }
        this.updatePlayerBar();
        this.triggerFighterHit('player', `-${dmg}`);
      } else {
        this.triggerFighterHit('player', '✖');
      }

      if (this.player.hp <= 0) {
        setTimeout(() => {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) {
            arenaEl.classList.add('arena-defeat-exit');
          }
          if (this.onClose) {
            setTimeout(() => this.onClose(), 600);
          }
        }, 650);
        return;
      }

      setTimeout(() => {
        first.el.classList.remove('is-flipped', 'is-mismatch');
        second.el.classList.remove('is-flipped', 'is-mismatch');
        this.flippedTiles = [];
        this.lockBoard = false;
      }, 1000);
    }
  }

  destroy() {
    this.container.innerHTML = '';
  }
}
