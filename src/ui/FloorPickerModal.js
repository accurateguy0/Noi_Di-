// Modal wyboru planszy (tryb testowy / swobodny wybór poziomu)
import { sound } from '../audio/sound.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';

export function openFloorPickerModal(app) {
  app.closeModal();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  const floors = [
    {
      category: 'Moduł 1: Szkoła Podstawowa 🏫',
      list: [
        { id: 1, name: 'Plansza 1: Szatnia', desc: 'Find the Match (Szczeniak)' },
        { id: 2, name: 'Plansza 2: Korytarz', desc: 'Quiz (Olek)' },
        { id: 3, name: 'Plansza 3: Rozmowa o grach', desc: 'Koło fortuny (Kot Bolo)' },
        { id: 4, name: 'Plansza 4: Slang i Emocje', desc: 'Match Up (Jeż)' },
        { id: 5, name: 'Plansza 5: Lekcja w klasie', desc: 'Dopasuj pary (Kotek)' },
        { id: 6, name: 'Plansza 6: Opinie i Przerwa', desc: 'Myśli (Widmo)' },
        { id: 7, name: 'Plansza 7: Boss Piłkarz', desc: 'Wielka walka finałowa ⚽' }
      ]
    },
    {
      category: 'Moduł 2: Miasto 🏙️',
      list: [
        { id: 'city_1', name: 'Miasto 1: Żabka / Biedronka', desc: 'Myśli, Open the Box, Rank Order' },
        { id: 'city_2', name: 'Miasto 2: Gastronomia', desc: 'Koło fortuny & Mistrz Kebaba' },
        { id: 'city_3', name: 'Miasto 3: Komunikacja', desc: 'Biletomat i autobus' },
        { id: 'city_boss', name: 'Miasto Boss: Cwaniak', desc: 'Finał miejski 🕶️' }
      ]
    },
    {
      category: 'Moduł 3: Szkoła – Słówka & WF 🏃',
      list: [
        { id: 'm3_1', name: 'Moduł 3.1: Zwroty ratunkowe', desc: 'Karty słówek & dialog' },
        { id: 'm3_2', name: 'Moduł 3.2: Przybory szkolne', desc: 'Karty & Olek w ławce' },
        { id: 'm3_3', name: 'Moduł 3.3: Plan lekcji & WF', desc: 'Dialog z Wuefistą' },
        { id: 'm3_boss', name: 'Moduł 3 Boss: Nauczycielka', desc: 'Egzamin szkolny 👩‍🏫' }
      ]
    },
    {
      category: 'Moduł 4: Zdrowie & Przychodnia 🩺',
      list: [
        { id: 'm4_1', name: 'Moduł 4.1: Stany fizyczne', desc: 'Głód, pragnienie, zmęczenie' },
        { id: 'm4_2', name: 'Moduł 4.2: Zdrowie i Ból', desc: 'Pielęgniarka szkolna' },
        { id: 'm4_3', name: 'Moduł 4.3: Emocje i Energia', desc: 'Sekwencja odpoczynku' },
        { id: 'm4_boss', name: 'Moduł 4 Boss: Lekarz', desc: 'Centrum Zdrowia 🩺' }
      ]
    },
    {
      category: 'Moduł 5: Pasje, Technologia & Trendy 🎮',
      list: [
        { id: 'm5_1', name: 'Moduł 5.1: Autoprezentacja', desc: 'Gejmer z Discorda 🎮' },
        { id: 'm5_2', name: 'Moduł 5.2: Piłka nożna', desc: 'Piłkarz z Orlika & Cwaniak' },
        { id: 'm5_boss', name: 'Moduł 5 Boss: Instagramerka', desc: 'Królowa trendów 📱' }
      ]
    }
  ];

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop">
      <div class="floor-picker-modal">
        <div class="fpm-header">
          <h2>🗺️ Wybierz planszę (Tryb testowy)</h2>
          <button class="fpm-close-btn" id="fpm-close-btn" title="Zamknij">✕</button>
        </div>
        <div class="fpm-body">
          ${floors.map(cat => `
            <div class="fpm-category">
              <div class="fpm-category-title">${cat.category}</div>
              <div class="fpm-grid">
                ${cat.list.map(f => `
                  <button type="button" class="btn-floor-card ${String(app.currentFloor) === String(f.id) ? 'is-current' : ''}" data-floor="${f.id}">
                    <span class="bfc-title">${f.name}</span>
                    <span class="bfc-sub">${f.desc}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modalMount.querySelector('#fpm-close-btn')?.addEventListener('click', () => {
    app.closeModal();
  });

  let floorSwitching = false;
  modalMount.querySelectorAll('.btn-floor-card').forEach(btn => {
    btn.addEventListener('click', () => {
      if (floorSwitching) return;
      floorSwitching = true;
      const floorId = btn.dataset.floor;
      const parsedFloor = isNaN(Number(floorId)) ? floorId : Number(floorId);
      sound.playFanfare();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.loadFloor(parsedFloor, { fromTestPicker: true });
        app.renderBoard();
        app.updateHUD();
        const floorTitle = btn.querySelector('.bfc-title')?.textContent;
        if (floorTitle) {
          app.setBoardHint(`🗺️ Przełączono na planszę: ${floorTitle}`);
        }
      });
    });
  });
}
