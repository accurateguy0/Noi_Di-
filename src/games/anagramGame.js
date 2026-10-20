// Poziom Wordwall: ANAGRAM (Przeciągnij litery na właściwe miejsca, aby ułożyć słowo lub zwrot)
// Pole 1 na Planszy 2: Krótka rozgrzewka / Odprawa z Kotem Bolo (przypomnienie 4 słów: Siema!, Elo!, Nara!, Co tam?)

import { SLANG_WORDS, getPlayerDamage } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class AnagramGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.words = SLANG_WORDS.slice(0, 4); // Siema!, Elo!, Nara!, Co tam?
    this.currentWordIndex = 0;
    this.tanDamage = getPlayerDamage(this.player);
    this.enemyDamage = 1; // Kot Bolo / Kotek Pomocnik zadaje 1 obrażenie Tanowi
    this.enemyMaxHp = this.words.length * this.tanDamage;
    this.enemyHp = this.enemyMaxHp;

    this.currentSlots = []; // Tablica obiektów liter
    this.targetLetters = [];
    this.lockInput = false;
    this.score = 0;
  }

  mount() {
    this.renderArenaShell();
    this.loadWord(0);
  }

  normalizeWordLetters(cleanWord) {
    // Zwraca tablicę wielkich liter (bez znaków interpunkcyjnych, ze spacją jako separatorem słów)
    return cleanWord
      .replace(/[!?.,]/g, '')
      .trim()
      .toUpperCase()
      .split('');
  }

  scrambleLetters(chars) {
    // Mieszamy tylko litery (spacje zostają na swoich miejscach, np. w "CO TAM")
    const letterIndices = [];
    const lettersOnly = [];

    chars.forEach((ch, idx) => {
      if (ch !== ' ') {
        letterIndices.push(idx);
        lettersOnly.push(ch);
      }
    });

    let shuffled = [...lettersOnly];
    let attempts = 0;
    while (attempts < 12) {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const isSame = shuffled.every((ch, i) => ch === lettersOnly[i]);
      if (!isSame) break;
      attempts += 1;
    }

    // Jeśli mimo losowania wyszło identycznie, zamień pierwszą i ostatnią literę
    if (shuffled.every((ch, i) => ch === lettersOnly[i]) && shuffled.length > 1) {
      [shuffled[0], shuffled[shuffled.length - 1]] = [
        shuffled[shuffled.length - 1],
        shuffled[0]
      ];
    }

    const result = chars.map((ch, idx) => ({
      id: `char_${idx}_${Math.random().toString(36).slice(2, 6)}`,
      char: ch,
      isSpace: ch === ' '
    }));

    letterIndices.forEach((slotIdx, i) => {
      result[slotIdx].char = shuffled[i];
    });

    return result;
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
      <div class="dd-combat-arena anagram-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Anagram</h2>

        <!-- Prawy górny róg: Kot Bolo -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kot Bolo</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Kotek_Pomoc.png"
              alt="Kot Bolo"
              class="dd-fighter-sprite sprite-kotek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Kotek_Pomoc.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Plansza Anagramu -->
        <div class="matching-stage-wrapper anagram-stage-wrapper" id="anagram-stage"></div>

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
        sound.playStep();
        animatedTitle.classList.remove('is-centered');
        introLayer.classList.add('intro-dismissed');
        setTimeout(() => introLayer.remove(), 650);
      });
    }
  }

  loadWord(index) {
    this.currentWordIndex = index;
    this.lockInput = false;

    const item = this.words[index];
    this.targetLetters = this.normalizeWordLetters(item.cleanWord);
    this.currentSlots = this.scrambleLetters(this.targetLetters);

    this.renderAnagramBoard();
  }

  renderAnagramBoard() {
    const stage = this.container.querySelector('#anagram-stage');
    if (!stage) return;

    const item = this.words[this.currentWordIndex];

    stage.innerHTML = `
      <div class="ww-anagram-card">
        <div class="ww-anagram-header">
          <span class="ww-anagram-counter">Słowo ${this.currentWordIndex + 1} / ${this.words.length}</span>
          <button class="ww-anagram-audio-btn" id="anagram-hint-audio" title="Posłuchaj podpowiedzi">🔊 Posłuchaj</button>
        </div>

        <div class="ww-anagram-clue">
          <div class="ww-clue-pl">${item.plMeaning}</div>
        </div>

        <div class="ww-anagram-letters-row" id="anagram-letters-row">
          ${this.currentSlots.map((slot, idx) => {
            if (slot.isSpace) {
              return `<div class="ww-anagram-space" aria-hidden="true"></div>`;
            }
            return `
              <div
                class="ww-letter-tile"
                draggable="false"
                data-idx="${idx}"
              >
                <span>${slot.char}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="ww-anagram-subhint">
          Przeciągnij litery, aby ułożyć słowo
        </div>

        <div class="ww-anagram-action-row" style="margin-top: 14px; text-align: center;">
          <button type="button" class="btn-anagram-submit" id="anagram-submit-btn">
            Zatwierdź odpowiedź ➔
          </button>
        </div>
      </div>
    `;

    const submitBtn = stage.querySelector('#anagram-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.submitAnswer();
      });
    }

    const audioBtn = stage.querySelector('#anagram-hint-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        sound.speakPolish(item.cleanWord);
      });
    }

    this.setupPointerDragAndDrop(stage);
  }

  setupPointerDragAndDrop(stage) {
    const tileEls = Array.from(stage.querySelectorAll('.ww-letter-tile'));
    if (tileEls.length <= 1) return;

    tileEls.forEach((tileEl, letterIndex) => {
      tileEl.addEventListener('pointerdown', (e) => {
        if (this.lockInput) return;
        if (e.button !== undefined && e.button !== 0) return;

        const startX = e.clientX;
        const startY = e.clientY;
        const pointerId = e.pointerId;
        let isDragging = false;
        let currentHoverIndex = letterIndex;

        // Zapamiętanie geometrii wszystkich slotów na początku przeciągania
        const rects = tileEls.map((el) => el.getBoundingClientRect());
        const centers = rects.map((r) => r.left + r.width / 2);

        const onPointerMove = (moveEvt) => {
          const dx = moveEvt.clientX - startX;
          const dy = moveEvt.clientY - startY;

          if (!isDragging) {
            if (Math.hypot(dx, dy) > 5) {
              isDragging = true;
              tileEl.classList.add('is-dragging');
              try {
                tileEl.setPointerCapture(pointerId);
              } catch (_) {}
            }
          }

          if (isDragging) {
            // Przeciągany kafelek podąża płynnie za kursorem i jest zawsze na wierzchu
            tileEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1.08)`;

            // Wyznacz najbliższy slot na podstawie pozycji X kursora
            let closestIdx = letterIndex;
            let minDistance = Infinity;
            for (let i = 0; i < centers.length; i++) {
              const dist = Math.abs(moveEvt.clientX - centers[i]);
              if (dist < minDistance) {
                minDistance = dist;
                closestIdx = i;
              }
            }

            if (closestIdx !== currentHoverIndex) {
              currentHoverIndex = closestIdx;

              // Przesunięcie pozostałych kafelków, by zrobić miejsce na przeciągany
              tileEls.forEach((el, k) => {
                if (k === letterIndex) return;

                let targetSlot = k;
                if (letterIndex < currentHoverIndex) {
                  // Przeciąganie w prawo: kafelki pomiędzy przesuwają się w lewo
                  if (k > letterIndex && k <= currentHoverIndex) {
                    targetSlot = k - 1;
                  }
                } else if (letterIndex > currentHoverIndex) {
                  // Przeciąganie w lewo: kafelki pomiędzy przesuwają się w prawo
                  if (k >= currentHoverIndex && k < letterIndex) {
                    targetSlot = k + 1;
                  }
                }

                const shiftX = rects[targetSlot].left - rects[k].left;
                el.style.transition = 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)';
                el.style.transform = shiftX !== 0 ? `translate3d(${shiftX}px, 0, 0)` : '';
              });
            }
          }
        };

        const cleanupAndReset = (didReorder = false) => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
          window.removeEventListener('pointercancel', onPointerCancel);
          try {
            tileEl.releasePointerCapture(pointerId);
          } catch (_) {}

          tileEl.classList.remove('is-dragging');

          if (!didReorder) {
            tileEls.forEach((el) => {
              el.style.transition = 'transform 0.16s ease';
              el.style.transform = '';
            });
            setTimeout(() => {
              tileEls.forEach((el) => {
                el.style.transition = '';
              });
            }, 180);
          }
        };

        const onPointerUp = () => {
          if (!isDragging) {
            cleanupAndReset(false);
            return;
          }

          if (
            currentHoverIndex !== letterIndex &&
            currentHoverIndex >= 0 &&
            currentHoverIndex < tileEls.length
          ) {
            cleanupAndReset(true);
            this.reorderLetters(letterIndex, currentHoverIndex);
          } else {
            cleanupAndReset(false);
          }
        };

        const onPointerCancel = () => {
          cleanupAndReset(false);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerCancel);
      });
    });
  }

  reorderLetters(fromLetterIdx, toLetterIdx) {
    if (this.lockInput) return;
    if (fromLetterIdx === toLetterIdx) return;

    // Mapujemy tylko sloty z literami (pomijając spacje)
    const letterSlotIndices = [];
    this.currentSlots.forEach((slot, idx) => {
      if (!slot.isSpace) letterSlotIndices.push(idx);
    });

    if (
      fromLetterIdx < 0 ||
      fromLetterIdx >= letterSlotIndices.length ||
      toLetterIdx < 0 ||
      toLetterIdx >= letterSlotIndices.length
    ) {
      return;
    }

    // Wyciągamy litery w kolejności
    const letterChars = letterSlotIndices.map((slotIdx) => this.currentSlots[slotIdx].char);

    // Przesuwamy wybraną literę na nowe miejsce
    const [movedChar] = letterChars.splice(fromLetterIdx, 1);
    letterChars.splice(toLetterIdx, 0, movedChar);

    // Zwracamy litery do slotów liter (spacje pozostają nienaruszone)
    letterSlotIndices.forEach((slotIdx, i) => {
      this.currentSlots[slotIdx].char = letterChars[i];
    });

    sound.playStep();
    this.renderAnagramBoard();
  }

  submitAnswer() {
    if (this.lockInput) return;

    const isSolved = this.currentSlots.every(
      (slot, idx) => slot.char === this.targetLetters[idx]
    );

    const stage = this.container.querySelector('#anagram-stage');
    const submitBtn = stage?.querySelector('#anagram-submit-btn');
    const rowEl = stage?.querySelector('#anagram-letters-row');

    if (isSolved) {
      // Poprawna odpowiedź: Przeciwnik (Kot Bolo) otrzymuje cios
      this.lockInput = true;
      const item = this.words[this.currentWordIndex];
      this.score += 120;

      if (submitBtn) {
        submitBtn.classList.remove('btn-wrong');
        submitBtn.classList.add('btn-correct');
        submitBtn.innerHTML = 'Świetnie! Poprawnie ✔';
      }

      this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
      this.updateOpponentBar();
      sound.playAttackHit('kotek');
      sound.playSuccess();
      setTimeout(() => sound.speakPolish(item.cleanWord), 260);
      this.triggerFighterHit('opponent', `-${this.tanDamage}`);

      if (rowEl) {
        rowEl.classList.add('anagram-word-solved');
      }

      setTimeout(() => {
        if (this.currentWordIndex + 1 < this.words.length && this.enemyHp > 0) {
          this.loadWord(this.currentWordIndex + 1);
        } else {
          const arenaEl = this.container.querySelector('.dd-combat-arena');
          if (arenaEl) {
            arenaEl.classList.add('arena-victory-exit');
          }
          setTimeout(() => {
            if (this.onComplete) this.onComplete({ score: this.score });
          }, 600);
        }
      }, 700);
    } else {
      // Błędna odpowiedź: Kot Bolo jest pomocnikiem (nie zadaje obrażeń)
      sound.playWrong();

      if (this.enemyDamage > 0) {
        sound.playEnemyHit('kotek');
        this.player.hp = Math.max(1, this.player.hp - this.enemyDamage);
        if (this.onPlayerDamaged) {
          this.onPlayerDamaged(this.enemyDamage);
        }
        this.updatePlayerHud();
        this.triggerFighterHit('player', `-${this.enemyDamage}`);
      } else {
        this.triggerFighterHit('player', '✖');
      }

      const tanWrap = this.container.querySelector('#mp-player-sprite-wrap');
      if (tanWrap) {
        tanWrap.classList.remove('shake-hit', 'hit-flash');
        void tanWrap.offsetWidth;
        tanWrap.classList.add('shake-hit', 'hit-flash');
        setTimeout(() => tanWrap.classList.remove('shake-hit', 'hit-flash'), 600);
      }

      // Przycisk zatwierdź świeci na czerwono i trzęsie się
      if (submitBtn) {
        submitBtn.classList.remove('btn-correct');
        submitBtn.classList.add('btn-wrong');
        submitBtn.innerHTML = 'Błędna kolejność! ✖';
        setTimeout(() => {
          submitBtn.classList.remove('btn-wrong');
          submitBtn.innerHTML = 'Zatwierdź odpowiedź ➔';
        }, 1100);
      }

      if (rowEl) {
        rowEl.classList.add('is-wrong-shake');
        setTimeout(() => rowEl.classList.remove('is-wrong-shake'), 500);
      }
    }
  }

  updatePlayerHud() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const fill = this.container.querySelector('#mp-player-hp-fill');
    const txt = this.container.querySelector('#mp-player-hp-text');
    if (fill) fill.style.width = `${playerHpPct}%`;
    if (txt) txt.textContent = `${this.player.hp}/${this.player.maxHp}`;
  }

  updateOpponentBar() {
    const pct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const fillEl = this.container.querySelector('#mp-enemy-hp-fill');
    const textEl = this.container.querySelector('#mp-enemy-hp-text');
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (textEl) textEl.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
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
