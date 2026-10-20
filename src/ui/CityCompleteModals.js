// Ekrany podsumowania i ukończenia modułów miejskich oraz wielkiego finału
import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';

export function showGrandVictoryModal(app) {
  musicManager.playVictoryMusic();
  sound.playFanfare();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop dd-city-backdrop dd-grand-backdrop">
      <div class="dd-city-container dd-grand-container">
        <div class="dd-city-header">
          <span class="city-trophy">👑🏆</span>
          <h2>WIELKI MISTRZ JĘZYKA POLSKIEGO A0!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Niewiarygodne, Tan!</strong> Ukończyłeś wszystkie moduły i całą grę <em>Nói Đi!</em> 🏆🎉</p>
          <p style="margin-top: 14px; color: #ffd166; font-weight: 800; font-size: 1.15rem;">
            Jesteś w 100% gotowy do swobodnej rozmowy w polskiej szkole i na ulicach miasta!
          </p>
        </div>
        <div class="dd-city-actions" style="margin-top: 18px;">
          <button type="button" class="btn-dicey-take btn-city-continue" id="grand-restart-game-btn" style="background: #10b981; color: #fff; font-weight: 800; width: 100%; max-width: 440px; margin: 0 auto;">
            ZAGRAJ PONOWNIE W CAŁĄ GRĘ (OD SZATNI) 🔄
          </button>
        </div>
      </div>
    </div>
  `;

  const restartGameBtn = modalMount.querySelector('#grand-restart-game-btn');
  if (restartGameBtn) {
    restartGameBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(true, 1);
      });
    });
  }
}

export function showCityVictoryModal(app) {
  sound.playFanfare();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🏆</span>
          <h2>WKRACZASZ DO MIASTA!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Gratulacje, Tan!</strong> Opanowałeś powitania, slang, dialogi w szkole i wyrażanie opinii!</p>
          <p>Boss Piłkarz został pokonany. Pora wyruszyć poza szkołę na ulice tętniącego życiem <strong>Miasta</strong>!</p>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-enter-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            WEJDŹ DO ŻABKI / BIEDRONKI 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-restart-btn">
            ZAGRAJ PONOWNIE (OD POCZĄTKU) 🔄
          </button>
        </div>
      </div>
    </div>
  `;

  const enterBtn = modalMount.querySelector('#city-enter-btn');
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_1');
      });
    });
  }

  const restartBtn = modalMount.querySelector('#city-restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(true, 1);
      });
    });
  }
}

export function showCityCompleteModal(app) {
  sound.playFanfare();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🛍️</span>
          <h2>ZAKUPY W MIEŚCIE UKOŃCZONE!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Brawo, Tan!</strong> Samodzielnie zrobiłeś zakupy w sklepie!</p>
          <p>Opanowałeś formy biernika (<em>„poproszę wodę, bułkę, czipsy”</em>), wybrałeś torbę, zapłaciłeś i bezbłędnie przeprowadziłeś dialog przy kasie!</p>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-next-floor-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            PRZEJDŹ DO PLANSZY 2 (GASTRONOMIA) 🥙
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-repeat-btn" style="background: #3b82f6; color: #fff; font-weight: 800; margin-bottom: 10px;">
            ZAGRAJ PONOWNIE W ŻABCE 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-school-btn">
            POWRÓT DO SZKOŁY (PLANSZA 1) 🏫
          </button>
        </div>
      </div>
    </div>
  `;

  const nextFloorBtn = modalMount.querySelector('#city-next-floor-btn');
  if (nextFloorBtn) {
    nextFloorBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_2');
      });
    });
  }

  const repeatBtn = modalMount.querySelector('#city-repeat-btn');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_1');
      });
    });
  }

  const schoolBtn = modalMount.querySelector('#city-school-btn');
  if (schoolBtn) {
    schoolBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(true, 1);
      });
    });
  }
}

export function showCity2CompleteModal(app) {
  sound.playFanfare();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🥙🎉</span>
          <h2>GASTRONOMIA W MIEŚCIE UKOŃCZONA!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Brawo, Tan!</strong> Znakomicie opanowałeś zamawianie jedzenia na mieście!</p>
          <p>Wybrałeś swoje ulubione danie, sos, rozmiar posiłku, określiłeś czy jesz na miejscu czy na wynos, spokojnie poczekałeś i podziękowałeś Mistrzowi Kebaba!</p>
          <div style="background: rgba(255, 209, 102, 0.15); border: 2px dashed #ffd166; border-radius: 14px; padding: 10px 14px; margin-top: 8px;">
            <strong style="color: #ffd166;">Kolejny temat w mieście:</strong><br/>
            💰 <strong>Liczby i pieniądze (1–100):</strong> Rozumienie cen, reszty i operowanie numerem telefonu.
          </div>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-next-floor-btn" style="background: #3a86ff; color: #fff; font-weight: 800; margin-bottom: 10px;">
            PRZEJDŹ DO PLANSZY 3 (KOMUNIKACJA I BILETOMAT) 🚏
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-repeat-btn" style="background: #f77f00; color: #fff; font-weight: 800; margin-bottom: 10px;">
            ZAGRAJ PONOWNIE NA PLANSZY 2 🥙
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-prev-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            POWRÓT DO ŻABKI (PLANSZA 1) 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-school-btn">
            POWRÓT DO SZKOŁY (PLANSZA 1) 🏫
          </button>
        </div>
      </div>
    </div>
  `;

  const nextFloorBtn = modalMount.querySelector('#city2-next-floor-btn');
  if (nextFloorBtn) {
    nextFloorBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_3');
      });
    });
  }

  const repeatBtn = modalMount.querySelector('#city2-repeat-btn');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_2');
      });
    });
  }

  const prevBtn = modalMount.querySelector('#city2-prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(false, 'city_1');
      });
    });
  }

  const schoolBtn = modalMount.querySelector('#city2-school-btn');
  if (schoolBtn) {
    schoolBtn.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.resetBoard(true, 1);
      });
    });
  }
}
