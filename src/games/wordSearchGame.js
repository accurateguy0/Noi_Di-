// Poziom Wordwall: WORDSEARCH (Wykreślanka słowna)
// Pole 7 na Planszy 4: Walka z Zającem (20 HP, bije po 10 HP)
// Czas 20s, +5s za każde znalezione słowo, 4 słowa x 5 HP = 20 HP

import { WORD_SEARCH_WORDS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';
import { playHeroDefeatAnimation } from '../ui/victoryScreen.js';

export class WordSearchGame {
  constructor(container, options = {}) {
    this.container = container;
    const { player, onPlayerDamaged, onComplete, onClose, words, title } = options;
    this.player = player || { name: 'Bohater', hp: 20, maxHp: 20, bonusTimeSec: 0 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    const rawWords = (words && words.length > 0) ? words : WORD_SEARCH_WORDS;
    this.wordsToFind = rawWords.slice(0, Math.min(rawWords.length, 4)).map((w) => String(w).trim().toUpperCase());
    const rawName = (options.enemyName || 'Zając')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*\[[^\]]*\]/g, '')
      .trim();
    this.enemyName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    this.titleText = this.enemyName;
    this.foundWords = new Set();
    this.opponentAvatar = options.opponentAvatar || './assets/Postacie/Zajac.png';

    this.enemyDamage = options.enemyDamage !== undefined ? options.enemyDamage : 1;
    this.tanDamage = options.tanDamage || getPlayerDamage(this.player);
    this.enemyMaxHp = (this.wordsToFind && this.wordsToFind.length > 0) ? (this.wordsToFind.length * this.tanDamage) : (options.enemyMaxHp || 12);
    this.enemyHp = this.enemyMaxHp;

    this.gridSize = 9; // Siatka 9x9 idealnie mieści słowa 7-8-literowe (DZIĘKUJĘ, CZERWONY)
    this.grid = [];
    this.wordPlacements = []; // { word, cells: [[r, c], ...] }

    this.baseTime = options.baseTime !== undefined ? options.baseTime : 30; // 30 sekund na start
    this.maxTime = this.baseTime + (this.player.bonusTimeSec || 0);
    this.timeLeft = this.maxTime;
    this.timerInterval = null;

    this.selectedCells = [];
    this.dragStartCell = null;
    this.isDragging = false;
    this.lockInput = false;
    this.introDismissed = false;
    this.score = 0;
  }

  mount() {
    this.generateBoard();
    this.renderArenaShell();
    this.renderGrid();
  }

  generateBoard() {
    // 1. Pusta siatka
    this.grid = Array.from({ length: this.gridSize }, () =>
      Array.from({ length: this.gridSize }, () => '')
    );
    this.wordPlacements = [];

    // 2. Umieść każde nieodnalezione słowo (lub wszystkie, jeśli reset)
    const wordsToPlace = this.wordsToFind.filter((w) => !this.foundWords.has(w));
    const letters = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';

    wordsToPlace.forEach((word) => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 200) {
        attempts++;
        const isHorizontal = Math.random() > 0.5;
        const row = isHorizontal
          ? Math.floor(Math.random() * this.gridSize)
          : Math.floor(Math.random() * (this.gridSize - word.length + 1));
        const col = isHorizontal
          ? Math.floor(Math.random() * (this.gridSize - word.length + 1))
          : Math.floor(Math.random() * this.gridSize);

        // Sprawdź kolizje
        let canPlace = true;
        const cells = [];
        for (let i = 0; i < word.length; i++) {
          const r = isHorizontal ? row : row + i;
          const c = isHorizontal ? col + i : col;
          const currentCh = this.grid[r][c];
          if (currentCh !== '' && currentCh !== word[i]) {
            canPlace = false;
            break;
          }
          cells.push([r, c]);
        }

        if (canPlace) {
          cells.forEach(([r, c], i) => {
            this.grid[r][c] = word[i];
          });
          this.wordPlacements.push({ word, cells });
          placed = true;
        }
      }
    });

    // 3. Wypełnij puste komórki losowymi literami
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.grid[r][c] === '') {
          this.grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
        }
      }
    }
  }

  renderArenaShell() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const isWideSprite = (this.opponentAvatar || '').toLowerCase().includes('szczeniak') ||
                         (this.enemyName || '').toLowerCase().includes('szczeniak');
    const wideClass = isWideSprite ? 'wide-sprite-container szczeniak-sprite-container' : '';

    this.container.innerHTML = `
      <div class="dd-combat-arena wordsearch-arena">
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
          <div class="dd-sprite-container opponent-sprite-container ${wideClass}" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite sprite-opponent"
              id="mp-opponent-sprite"
              onerror="this.src='./public${this.opponentAvatar.replace(/^\./, '')}'"
            />
          </div>
        </div>

        <!-- Środek areny: Wykreślanka -->
        <div class="matching-stage-wrapper ws-stage-wrapper">
          <div class="ww-ws-card">
            <div class="ww-quiz-speech-row">
              <span class="ww-quiz-step-pill">Znaleziono: <b id="ws-found-count">${this.foundWords.size}</b> / ${this.wordsToFind.length}</span>
              <span class="ww-ws-bonus-pill">+5s za każde słowo!</span>
            </div>

            <div class="ww-spell-timer-bar">
              <div class="ww-spell-timer-fill" id="ws-timer-fill" style="width: 100%"></div>
              <span class="ww-spell-timer-text" id="ws-timer-text">${this.timeLeft}s</span>
            </div>

            <!-- Tabela liter -->
            <div class="ww-ws-grid" id="ws-grid"></div>

            <!-- Lista słów pod tabelą -->
            <div class="ww-ws-words-list" id="ws-words-list">
              ${this.wordsToFind.map((w) => `
                <span class="ww-ws-word-badge ${this.foundWords.has(w) ? 'is-found' : ''}" data-word="${w}">
                  ${w}
                </span>
              `).join('')}
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
        this.startTimer();
      });
    }
  }

  renderGrid() {
    const gridEl = this.container.querySelector('#ws-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = document.createElement('div');
        cell.className = 'ww-ws-cell';
        cell.dataset.row = r;
        cell.dataset.col = c;
        cell.textContent = this.grid[r][c];

        // Sprawdź czy komórka należy do już odnalezionego słowa
        const isAlreadyFound = this.wordPlacements.some(
          (wp) => this.foundWords.has(wp.word) && wp.cells.some(([cr, cc]) => cr === r && cc === c)
        );
        if (isAlreadyFound) {
          cell.classList.add('cell-found');
        }

        cell.addEventListener('pointerdown', (e) => {
          if (this.lockInput) return;
          this.isDragging = true;
          this.dragStartCell = { r, c };
          this.highlightLine(this.dragStartCell, { r, c });
          sound.playStep();
        });

        cell.addEventListener('pointerenter', () => {
          if (this.lockInput || !this.isDragging || !this.dragStartCell) return;
          this.highlightLine(this.dragStartCell, { r, c });
        });

        cell.addEventListener('click', () => this.handleCellClick(r, c, cell));
        gridEl.appendChild(cell);
      }
    }

    // Global pointerup to finish drag selection
    if (!this.globalPointerBound) {
      this.globalPointerBound = true;
      window.addEventListener('pointerup', () => {
        if (this.isDragging && this.dragStartCell) {
          this.isDragging = false;
          this.commitDragSelection();
        }
      });
    }

    const countEl = this.container.querySelector('#ws-found-count');
    if (countEl) countEl.textContent = this.foundWords.size;
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
    const textEl = this.container.querySelector('#ws-timer-text');
    const fillEl = this.container.querySelector('#ws-timer-fill');
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

    // Przeciwnik zadaje obrażenia
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    } else {
      this.player.hp = Math.max(0, this.player.hp - this.enemyDamage);
    }

    this.updatePlayerHud();
    this.triggerFighterHit('player', `-${this.enemyDamage}`);

    setTimeout(() => {
      if (this.player.hp <= 0) {
        playHeroDefeatAnimation(this.container, this.player, this.onClose);
      } else {
        // Reset czasu do 10s i losowanie nowych miejsc słów w tabeli!
        this.timeLeft = this.baseTime + (this.player.bonusTimeSec || 0);
        this.selectedCells = [];
        this.generateBoard();
        this.renderGrid();
        this.updateTimerUI();
        this.lockInput = false;
        this.startTimer();
      }
    }, 600);
  }

  getLineCells(first, target) {
    const sameRow = first.r === target.r;
    const sameCol = first.c === target.c;
    const isDiag = Math.abs(first.r - target.r) === Math.abs(first.c - target.c);

    if (!sameRow && !sameCol && !isDiag) {
      return [{ r: first.r, c: first.c }];
    }

    const line = [];
    const dr = target.r === first.r ? 0 : target.r > first.r ? 1 : -1;
    const dc = target.c === first.c ? 0 : target.c > first.c ? 1 : -1;

    let cr = first.r;
    let cc = first.c;
    while (true) {
      line.push({ r: cr, c: cc });
      if (cr === target.r && cc === target.c) break;
      cr += dr;
      cc += dc;
    }
    return line;
  }

  highlightLine(start, end) {
    // Wyczyść dotychczasowe podświetlenie
    this.container.querySelectorAll('.ww-ws-cell.cell-selected').forEach((c) => {
      c.classList.remove('cell-selected');
    });

    const line = this.getLineCells(start, end);
    this.currentLineCells = line;

    line.forEach(({ r, c }) => {
      const el = this.container.querySelector(`[data-row="${r}"][data-col="${c}"]`);
      if (el) el.classList.add('cell-selected');
    });
  }

  commitDragSelection() {
    if (!this.currentLineCells || this.currentLineCells.length < 2) {
      this.clearSelection();
      this.dragStartCell = null;
      return;
    }

    const lineCells = this.currentLineCells;
    const selectedWord = lineCells.map(({ r, c }) => this.grid[r][c]).join('');
    const reversedWord = selectedWord.split('').reverse().join('');

    let matchedWord = null;
    if (this.wordsToFind.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
      matchedWord = selectedWord;
    } else if (this.wordsToFind.includes(reversedWord) && !this.foundWords.has(reversedWord)) {
      matchedWord = reversedWord;
    }

    if (matchedWord) {
      this.foundWords.add(matchedWord);
      sound.playAttackHit(this.enemyName);
      sound.speakPolish(matchedWord);

      this.timeLeft += 5;
      this.updateTimerUI();

      lineCells.forEach(({ r, c }) => {
        const el = this.container.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        if (el) el.classList.add('cell-found');
      });

      const badge = this.container.querySelector(`.ww-ws-word-badge[data-word="${matchedWord}"]`);
      if (badge) badge.classList.add('is-found');

      this.score += 150;
      const isLastWord = this.foundWords.size >= this.wordsToFind.length;
      const dmg = isLastWord ? this.enemyHp : Math.min(this.enemyHp, this.tanDamage);
      this.enemyHp = Math.max(0, this.enemyHp - dmg);
      this.updateEnemyHud();
      this.triggerFighterHit('opponent', `-${dmg}`);

      const countEl = this.container.querySelector('#ws-found-count');
      if (countEl) countEl.textContent = this.foundWords.size;

      this.clearSelection();
      this.dragStartCell = null;

      if (this.foundWords.size >= this.wordsToFind.length) {
        this.enemyHp = 0;
        this.updateEnemyHud();
        this.stopTimer();
        setTimeout(() => this.finishBattle(), 650);
      }
    } else {
      this.clearSelection();
      this.dragStartCell = null;
    }
  }

  clearSelection() {
    this.container.querySelectorAll('.ww-ws-cell.cell-selected').forEach((c) => {
      c.classList.remove('cell-selected');
    });
    this.selectedCells = [];
    this.currentLineCells = null;
  }

  handleCellClick(r, c, cellEl) {
    if (this.lockInput) return;

    if (this.selectedCells.length === 0) {
      // Pierwsza litera
      this.selectedCells = [{ r, c, el: cellEl }];
      cellEl.classList.add('cell-selected');
      sound.playStep();
    } else if (this.selectedCells.length === 1) {
      const first = this.selectedCells[0];
      if (first.r === r && first.c === c) {
        // Kliknięto tę samą -> odznacz
        first.el.classList.remove('cell-selected');
        this.selectedCells = [];
        return;
      }

      // Sprawdź czy to linia prosta (pozioma lub pionowa)
      const sameRow = first.r === r;
      const sameCol = first.c === c;

      if (!sameRow && !sameCol) {
        first.el.classList.remove('cell-selected');
        this.selectedCells = [{ r, c, el: cellEl }];
        cellEl.classList.add('cell-selected');
        sound.playStep();
        return;
      }

      // Zbierz litery w linii
      const lineCells = [];
      const dr = sameCol ? (r > first.r ? 1 : -1) : 0;
      const dc = sameRow ? (c > first.c ? 1 : -1) : 0;
      let currR = first.r;
      let currC = first.c;

      while (true) {
        lineCells.push([currR, currC]);
        if (currR === r && currC === c) break;
        currR += dr;
        currC += dc;
      }

      const selectedWord = lineCells.map(([cr, cc]) => this.grid[cr][cc]).join('');
      const reversedWord = selectedWord.split('').reverse().join('');

      let matchedWord = null;
      if (this.wordsToFind.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
        matchedWord = selectedWord;
      } else if (this.wordsToFind.includes(reversedWord) && !this.foundWords.has(reversedWord)) {
        matchedWord = reversedWord;
      }

      if (matchedWord) {
        // Znaleziono słowo!
        this.foundWords.add(matchedWord);
        sound.playAttackHit(this.enemyName);
        sound.speakPolish(matchedWord);

        // +5s do czasu!
        this.timeLeft += 5;
        this.updateTimerUI();

        // Oznacz komórki na zielono
        lineCells.forEach(([cr, cc]) => {
          const el = this.container.querySelector(`[data-row="${cr}"][data-col="${cc}"]`);
          if (el) el.classList.add('cell-found');
        });

        // Wykreśl na liście
        const badge = this.container.querySelector(`.ww-ws-word-badge[data-word="${matchedWord}"]`);
        if (badge) badge.classList.add('is-found');

        this.score += 150;
        const isLastWord = this.foundWords.size >= this.wordsToFind.length;
        const dmg = isLastWord ? this.enemyHp : Math.min(this.enemyHp, this.tanDamage);
        this.enemyHp = Math.max(0, this.enemyHp - dmg);
        this.updateEnemyHud();
        this.triggerFighterHit('opponent', `-${dmg}`);

        const countEl = this.container.querySelector('#ws-found-count');
        if (countEl) countEl.textContent = this.foundWords.size;

        first.el.classList.remove('cell-selected');
        this.selectedCells = [];

        if (this.foundWords.size >= this.wordsToFind.length) {
          this.enemyHp = 0;
          this.updateEnemyHud();
          this.stopTimer();
          setTimeout(() => this.finishBattle(), 650);
        }
      } else {
        // Nie pasuje
        first.el.classList.remove('cell-selected');
        cellEl.classList.add('cell-wrong');
        sound.playMiss();
        setTimeout(() => cellEl.classList.remove('cell-wrong'), 300);
        this.selectedCells = [];
      }
    }
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
    this.stopTimer();
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
    this.stopTimer();
  }
}
