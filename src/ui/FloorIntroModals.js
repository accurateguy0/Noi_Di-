// Powitalne okienka nowych kart (intro na wejściu do planszy) oraz Skrzynia Slangów
import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { SLANG_WORDS } from '../data/vocabulary.js';

export function openFloorNewCardsModal(app, floorNumber, floorTitle, words, bubbleMsg) {
  if (floorNumber === 3) app.board3IntroShown = true;
  if (floorNumber === 4) app.board4IntroShown = true;
  if (floorNumber === 5) app.board5IntroShown = true;
  if (floorNumber === 6) app.board6IntroShown = true;
  if (floorNumber === 7) app.board7IntroShown = true;
  if (floorNumber === 'city_1' || floorNumber === 8) app.city1IntroShown = true;
  if (floorNumber === 'city_2' || floorNumber === 9) app.city2IntroShown = true;
  if (floorNumber === 'city_3' || floorNumber === 10) app.city3IntroShown = true;

  playJaggedCurtainWipe(() => {
    sound.playStep();
    musicManager.playChestMusic();
    const modalMount = document.getElementById('modal-mount');
    if (!modalMount) return;
    modalMount.classList.remove('hidden');

    let currentIndex = 0;

    const renderCurrentCard = () => {
      const w = words[currentIndex];
      const isLast = currentIndex === words.length - 1;
      const floorTheme = app.getFloorTheme(floorNumber);

      modalMount.innerHTML = `
        <div class="dicey-chest-scene floor-intro-scene floor-${floorNumber}-intro-scene floor-theme-${floorTheme}">
          <div class="dicey-chest-top-title">
            ${floorTitle}: <strong>${w.word}</strong> (${currentIndex + 1}/${words.length})
          </div>

          <div class="dicey-open-chest-stage">
            <img
              src="./assets/skrzynka_otwarta_tlo.png"
              alt="Otwarta skrzynia"
              class="open-chest-bg-img"
              onerror="this.src='./assets/skrzynka_otwarta_tlo.png'"
            />

            <!-- Karta słowa umieszczona w otwartej skrzyni jak w Dicey Dungeons -->
            <div class="dicey-chest-card" id="floor-active-card" style="--card-accent: ${w.color}">
              <div class="dcc-header" style="background: ${w.color}">
                <span class="dcc-title">${w.word.toUpperCase()}</span>
                <button class="dcc-audio-btn" id="floor-audio-btn" title="Posłuchaj wymowy">
                  🔊
                </button>
              </div>

              <div class="dcc-body">
                <div class="dcc-dashed-slot" id="floor-slot-audio">
                  <span class="dcc-slot-icon">${w.emoji || '🔊'}</span>
                  <span class="dcc-slot-phonetic">${w.phonetic}</span>
                </div>

                <div class="dcc-descriptions">
                  <p class="dcc-pl">🇵🇱 ${w.plMeaning}</p>
                  <p class="dcc-vn">🇻🇳 ${w.vnMeaning}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="dicey-chest-bottom-bar">
            <button class="btn-dicey-take btn-chest-next chest-next-hidden" id="floor-next-btn">
              ${isLast ? 'WEŹ' : 'DALEJ'}
            </button>
          </div>
        </div>
      `;

      const audioBtn = modalMount.querySelector('#floor-audio-btn');
      const cardEl = modalMount.querySelector('#floor-active-card');
      const nextBtn = modalMount.querySelector('#floor-next-btn');

      let listenedThisStep = false;

      const handleListen = (e) => {
        if (e) e.stopPropagation();
        sound.speakPolish(w.cleanWord);

        // Zapisz słowo w Księdze Słów natychmiast po kliknięciu w audio
        app.unlockedWordIds.add(w.id);
        app.updateHUD();

        cardEl.classList.add('card-listened');
        audioBtn.classList.add('audio-clicked');
        audioBtn.innerHTML = '🔊 ✔';

        if (!listenedThisStep) {
          listenedThisStep = true;
          requestAnimationFrame(() => {
            nextBtn.classList.remove('chest-next-hidden');
            nextBtn.classList.add('chest-next-visible');
          });
        }
      };

      audioBtn?.addEventListener('click', handleListen);
      cardEl?.addEventListener('click', handleListen);

      let closingIntro = false;
      nextBtn?.addEventListener('click', () => {
        if (!listenedThisStep || closingIntro) return;

        if (currentIndex + 1 < words.length) {
          currentIndex += 1;
          sound.playStep();
          renderCurrentCard();
        } else {
          closingIntro = true;
          nextBtn.disabled = true;
          words.forEach((item) => app.unlockedWordIds.add(item.id));
          sound.playFanfare();

          const spellbookBtn = document.getElementById('hud-spellbook-btn');
          const targetRect = spellbookBtn
            ? spellbookBtn.getBoundingClientRect()
            : { left: window.innerWidth - 120, top: window.innerHeight - 50, width: 100, height: 40 };

          const rect = cardEl.getBoundingClientRect();
          const clone = cardEl.cloneNode(true);
          clone.classList.add('b3-flying-card');
          clone.style.position = 'fixed';
          clone.style.left = `${rect.left}px`;
          clone.style.top = `${rect.top}px`;
          clone.style.width = `${rect.width}px`;
          clone.style.height = `${rect.height}px`;
          clone.style.margin = '0';
          clone.style.zIndex = '99999';
          clone.style.transition = 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
          clone.style.pointerEvents = 'none';
          document.body.appendChild(clone);
          cardEl.style.opacity = '0';

          setTimeout(() => {
            sound.playStep();
            clone.style.left = `${targetRect.left + targetRect.width / 2 - rect.width / 2}px`;
            clone.style.top = `${targetRect.top + targetRect.height / 2 - rect.height / 2}px`;
            clone.style.transform = 'scale(0.12) rotate(22deg)';
            clone.style.opacity = '0.15';
          }, 30);

          setTimeout(() => {
            clone.remove();
            sound.playTick();
            if (spellbookBtn) {
              spellbookBtn.classList.remove('spellbook-absorb-pulse');
              void spellbookBtn.offsetWidth;
              spellbookBtn.classList.add('spellbook-absorb-pulse');
            }
            playJaggedCurtainWipe(() => {
              app.closeModal();
              musicManager.resumeBoardMusic();
              app.updateHUD();
              app.renderBoard();
              app.showTemporaryPlayerBubble(
                bubbleMsg || 'Nowe karty w Twojej Księdze Słów! 📖✨',
                2200
              );
            });
          }, 680);
        }
      });
    };

    renderCurrentCard();
  });
}

export function openChestModal(app, node) {
  if (node.completed) return;
  musicManager.playChestMusic();
  playJaggedCurtainWipe(() => {
    sound.playStep();
    // Oznacz skrzynię jako otwartą i zmień jej ikonę na planszy
    node.completed = true;
    node.icon = './assets/skrzynka_otwarta.png';
    app.renderBoard();

    const modalMount = document.getElementById('modal-mount');
    if (!modalMount) return;
    modalMount.classList.remove('hidden');

    const chestWords = SLANG_WORDS.slice(0, 4);
    let currentIndex = 0;

    const renderCurrentCard = () => {
      const w = chestWords[currentIndex];
      const isLast = currentIndex === chestWords.length - 1;
      const floorTheme = app.getFloorTheme(app.currentFloor);

      modalMount.innerHTML = `
        <div class="dicey-chest-scene floor-intro-scene floor-${app.currentFloor}-intro-scene floor-theme-${floorTheme}">
          <div class="dicey-chest-top-title">
            Znalazłeś słowo: <strong>${w.word}</strong> (${currentIndex + 1}/${chestWords.length})
          </div>

          <div class="dicey-open-chest-stage">
            <img
              src="./assets/skrzynka_otwarta_tlo.png"
              alt="Otwarta skrzynia"
              class="open-chest-bg-img"
              onerror="this.src='./assets/skrzynka_otwarta_tlo.png'"
            />

            <!-- Karta słowa umieszczona w otwartej skrzyni jak w Dicey Dungeons -->
            <div class="dicey-chest-card" id="chest-active-card" style="--card-accent: ${w.color}">
              <div class="dcc-header" style="background: ${w.color}">
                <span class="dcc-title">${w.word.toUpperCase()}</span>
                <button class="dcc-audio-btn" id="chest-audio-btn" title="Posłuchaj wymowy">
                  🔊
                </button>
              </div>

              <div class="dcc-body">
                <div class="dcc-dashed-slot" id="chest-slot-audio">
                  <span class="dcc-slot-icon">🔊</span>
                  <span class="dcc-slot-phonetic">${w.phonetic}</span>
                </div>

                <div class="dcc-descriptions">
                  <p class="dcc-pl">🇵🇱 ${w.plMeaning}</p>
                  <p class="dcc-vn">🇻🇳 ${w.vnMeaning}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="dicey-chest-bottom-bar">
            <button class="btn-dicey-take btn-chest-next chest-next-hidden" id="chest-next-btn">
              ${isLast ? 'WEŹ' : 'DALEJ'}
            </button>
          </div>
        </div>
      `;

      const audioBtn = modalMount.querySelector('#chest-audio-btn');
      const cardEl = modalMount.querySelector('#chest-active-card');
      const nextBtn = modalMount.querySelector('#chest-next-btn');

      let listenedThisStep = false;

      const handleListen = (e) => {
        if (e) e.stopPropagation();
        sound.speakPolish(w.cleanWord);

        // Zapisz słowo w Księdze Słów natychmiast po kliknięciu w audio
        app.unlockedWordIds.add(w.id);
        app.updateHUD();

        cardEl.classList.add('card-listened');
        audioBtn.classList.add('audio-clicked');
        audioBtn.innerHTML = '🔊 ✔';

        if (!listenedThisStep) {
          listenedThisStep = true;
          requestAnimationFrame(() => {
            nextBtn.classList.remove('chest-next-hidden');
            nextBtn.classList.add('chest-next-visible');
          });
        }
      };

      audioBtn?.addEventListener('click', handleListen);
      cardEl?.addEventListener('click', handleListen);

      let closingChest = false;
      nextBtn?.addEventListener('click', () => {
        if (!listenedThisStep || closingChest) return;

        if (currentIndex + 1 < chestWords.length) {
          currentIndex += 1;
          sound.playStep();
          renderCurrentCard();
        } else {
          closingChest = true;
          sound.playFanfare();
          playJaggedCurtainWipe(() => {
            app.closeModal();
            musicManager.resumeBoardMusic();
            app.renderBoard();
            app.updateHUD();
          });
        }
      });
    };

    renderCurrentCard();
  });
}
