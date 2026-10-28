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
              src="./assets/tla/skrzynka_otwarta_tlo.png"
              alt="Otwarta skrzynia"
              class="open-chest-bg-img"
              onerror="this.src='./assets/tla/skrzynka_otwarta_tlo.png'"
            />

            <!-- Karta słowa umieszczona w otwartej skrzyni jak w Dicey Dungeons -->
            <div class="dicey-chest-card" id="floor-active-card" style="--card-accent: ${w.color}">
              <div class="dcc-header" style="background: ${w.color}">
                <span class="dcc-title">${w.word.toUpperCase()}</span>
                <button class="dcc-audio-btn" id="floor-audio-btn" title="Posłuchaj wymowy">

                </button>
              </div>

              <div class="dcc-body">
                <div class="dcc-dashed-slot" id="floor-slot-audio">
                  <span class="dcc-slot-icon">${w.emoji || ''}</span>
                  <span class="dcc-slot-phonetic">${w.phonetic}</span>
                </div>

                <div class="dcc-descriptions">
                  <p class="dcc-pl">${w.plMeaning}</p>
                  <p class="dcc-vn">${w.vnMeaning}</p>
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
        audioBtn.innerHTML = '';

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
                bubbleMsg || 'Nowe karty w Twojej Księdze Słów!',
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

    // Słownictwo tematyczne skrzyni dopasowane do piętra (Moduły A0)
    const FLOOR_CHEST_WORDS = {
      1: [
        { word: 'Dzień dobry!', cleanWord: 'Dzień dobry', phonetic: '[Dzień do-bry] • Chào buổi sáng', plMeaning: 'Oficjalne powitanie nauczyciela lub dyrektora rano w szkole.', vnMeaning: 'Chào buổi sáng! — Lời chào trang trọng với thầy cô giáo.', color: '#3b82f6' },
        { word: 'Cześć!', cleanWord: 'Cześć', phonetic: '[Cześć] • Chào bạn', plMeaning: 'Koleżeńskie, ciepłe powitanie rówieśnika na korytarzu i w ławce.', vnMeaning: 'Chào bạn! — Lời chào thân mật giữa bạn bè cùng trang lứa.', color: '#10b981' },
        { word: 'Dziękuję!', cleanWord: 'Dziękuję', phonetic: '[Dzień-koo-ye] • Cảm ơn', plMeaning: 'Kulturalne podziękowanie za pomoc, pożyczoną rzecz lub wskazówkę.', vnMeaning: 'Cảm ơn bạn! — Lời cảm ơn lịch sự khi được giúp đỡ.', color: '#f59e0b' },
        { word: 'Przepraszam!', cleanWord: 'Przepraszam', phonetic: '[Pshe-pra-sham] • Xin lỗi', plMeaning: 'Używane przy potrąceniu kogoś na korytarzu lub zadawaniu pytania.', vnMeaning: 'Xin lỗi! — Dùng khi lỡ va chạm hoặc muốn nhờ ai điều gì.', color: '#ef4444' }
      ],
      2: [
        { word: 'Długopis', cleanWord: 'Długopis', phonetic: '[Dłoo-go-pis] • Bút bi', plMeaning: 'Podstawowy przybór do pisania notatek i zadań w zeszycie.', vnMeaning: 'Bút bi — Dụng cụ quan trọng nhất để viết bài vào vở.', color: '#3b82f6' },
        { word: 'Ołówek', cleanWord: 'Ołówek', phonetic: '[O-woo-wek] • Bút chì', plMeaning: 'Przybór do szkicowania figur i rysowania na geometrii.', vnMeaning: 'Bút chì — Dùng để vẽ hình học và phác thảo.', color: '#10b981' },
        { word: 'Gumka', cleanWord: 'Gumka', phonetic: '[Goo-mka] • Cục tẩy', plMeaning: 'Służy do wymazywania i poprawiania błędów zrobionych ołówkiem.', vnMeaning: 'Cục tẩy — Dùng để tẩy xóa lỗi viết bút chì trên giấy.', color: '#f59e0b' },
        { word: 'Zeszyt', cleanWord: 'Zeszyt', phonetic: '[Ze-shyt] • Vở ghi chép', plMeaning: 'Zeszyt w kratkę lub w linie do zapisywania lekcji z tablicy.', vnMeaning: 'Vở ghi chép — Dùng để ghi bài giảng từ bảng của thầy cô.', color: '#8b5cf6' }
      ],
      3: [
        { word: 'Toaleta', cleanWord: 'Toaleta', phonetic: '[To-a-le-ta] • Nhà vệ sinh', plMeaning: '„Proszę pani, czy mogę wyjść do toalety?” — ratunkowa prośba na lekcji.', vnMeaning: 'Nhà vệ sinh — "Thưa cô, cho em xin phép ra ngoài đi vệ sinh ạ?".', color: '#3b82f6' },
        { word: 'Woda', cleanWord: 'Woda', phonetic: '[Vo-da] • Nước uống', plMeaning: 'Czysta woda do picia w butelce, gdy bardzo chce ci się pić.', vnMeaning: 'Nước uống — Nước lọc mang theo khi khát nước.', color: '#06b6d4' },
        { word: 'Pomocy!', cleanWord: 'Pomocy', phonetic: '[Po-mo-cy] • Cứu với / Giúp em', plMeaning: 'Pilne wezwanie, gdy ktoś upadnie, źle się poczuje lub potrzebuje ratunku.', vnMeaning: 'Cứu với! / Giúp đỡ! — Nói khi bị ngã hoặc cảm thấy mệt mỏi cần trợ giúp.', color: '#ef4444' },
        { word: 'Szatnia', cleanWord: 'Szatnia', phonetic: '[Shat-nia] • Phòng thay đồ', plMeaning: 'Szkolne pomieszczenie z wieszakami na kurtki i półkami na buty.', vnMeaning: 'Phòng thay đồ / Tủ gửi đồ — Nơi cất áo khoác và đổi giày.', color: '#8b5cf6' }
      ],
      4: [
        { word: 'Zupa', cleanWord: 'Zupa', phonetic: '[Zoo-pa] • Món súp / Canh', plMeaning: 'Ciepłe, pierwsze danie obiadowe na stołówce szkolnej.', vnMeaning: 'Món súp / Canh — Món ăn đầu tiên trong bữa trưa ở căng tin.', color: '#f59e0b' },
        { word: 'Drugie danie', cleanWord: 'Drugie danie', phonetic: '[Droo-gie da-nie] • Món chính', plMeaning: 'Główny posiłek z ziemniakami, warzywami lub mięsem jedzony widelcem.', vnMeaning: 'Món chính — Đĩa thức ăn chính trong bữa ăn trưa ở trường.', color: '#10b981' },
        { word: 'Piłka', cleanWord: 'Piłka', phonetic: '[Peeow-ka] • Quả bóng', plMeaning: 'Okrągła piłka do gry w siatkówkę, koszykówkę i nogę na WF-ie.', vnMeaning: 'Quả bóng — Dùng để chơi thể thao trong tiết Thể dục.', color: '#3b82f6' },
        { word: 'Fair play', cleanWord: 'Fair play', phonetic: '[Fer plej] • Chơi đẹp', plMeaning: 'Zasada czystej, uczciwej gry sportowej i szacunku dla rywali.', vnMeaning: 'Tinh thần thể thao cao thượng — Tôn trọng đối thủ và luật chơi.', color: '#ec4899' }
      ],
      5: [
        { word: 'Poniedziałek', cleanWord: 'Poniedziałek', phonetic: '[Po-nie-dzia-wek] • Thứ hai', plMeaning: 'Pierwszy dzień nauki w nowym tygodniu szkolnym.', vnMeaning: 'Thứ hai — Ngày đầu tiên bắt đầu tuần học mới.', color: '#3b82f6' },
        { word: 'Piątek', cleanWord: 'Piątek', phonetic: '[Pion-tek] • Thứ sáu', plMeaning: 'Ostatni dzień lekcji w tygodniu, tuż przed upragnionym weekendem.', vnMeaning: 'Thứ sáu — Ngày học cuối cùng trước kỳ nghỉ cuối tuần.', color: '#10b981' },
        { word: 'Dzwonek', cleanWord: 'Dzwonek', phonetic: '[Dzvo-nek] • Chuông trường', plMeaning: 'Głośny dźwięk oznaczający początek lub koniec lekcji i przerwę.', vnMeaning: 'Chuông trường — Báo hiệu giờ vào lớp hoặc giờ ra chơi.', color: '#f59e0b' },
        { word: 'Mecz Finałowy', cleanWord: 'Mecz', phonetic: '[Mecz] • Trận chung kết', plMeaning: 'Wielkie starcie sportowe podsumowujące wszystkie nabyte umiejętności!', vnMeaning: 'Trận chung kết — Trận đấu cuối cùng để giành cúp vô địch!', color: '#e63946' }
      ]
    };

    const fNum = Math.max(1, Math.min(5, Number(app.currentFloor) || 1));
    const chestWords = (node?.customWords && node.customWords.length > 0)
      ? node.customWords
      : (FLOOR_CHEST_WORDS[fNum] || SLANG_WORDS.slice(0, 4));
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
              src="./assets/tla/skrzynka_otwarta_tlo.png"
              alt="Otwarta skrzynia"
              class="open-chest-bg-img"
              onerror="this.src='./assets/tla/skrzynka_otwarta_tlo.png'"
            />

            <!-- Karta słowa umieszczona w otwartej skrzyni jak w Dicey Dungeons -->
            <div class="dicey-chest-card" id="chest-active-card" style="--card-accent: ${w.color}">
              <div class="dcc-header" style="background: ${w.color}">
                <span class="dcc-title">${w.word.toUpperCase()}</span>
                <button class="dcc-audio-btn" id="chest-audio-btn" title="Posłuchaj wymowy">

                </button>
              </div>

              <div class="dcc-body">
                <div class="dcc-dashed-slot" id="chest-slot-audio">
                  <span class="dcc-slot-icon"></span>
                  <span class="dcc-slot-phonetic">${w.phonetic}</span>
                </div>

                <div class="dcc-descriptions">
                  <p class="dcc-pl">${w.plMeaning}</p>
                  <p class="dcc-vn">${w.vnMeaning}</p>
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
        audioBtn.innerHTML = '';

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
