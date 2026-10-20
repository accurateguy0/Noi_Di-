// Klikalny Kotek Bolo ("🇻🇳 Trợ giúp") — koło ratunkowe z tłumaczeniem po wietnamsku
// Domyślnie ekran jest w 100% po polsku; po kliknięciu wyskakuje Kotek Bolo z dymkiem po wietnamsku.

import { sound } from '../audio/sound.js';

/**
 * Zwraca HTML przycisku Kotka Bolo ("🇻🇳 Trợ giúp") wraz z wyskakującym okienkiem/dymkiem
 * @param {string} vnHtml - treść tłumaczenia po wietnamsku
 * @param {string} idSuffix - unikalny sufiks ID
 */
export function renderBoloHelperHtml(vnHtml, idSuffix = 'main') {
  return `
    <div class="bolo-helper-widget" data-bolo-id="${idSuffix}">
      <button type="button" class="bolo-trigger-btn" title="Kliknij, aby Kotek Bolo przetłumaczył na wietnamski (Trợ giúp)">
        <img
          src="./assets/Kotek_Pomoc.png"
          alt="Kotek Bolo"
          width="24"
          height="24"
          class="bolo-trigger-icon"
          onerror="this.src='./public/assets/Kotek_Pomoc.png'"
        />
        <span class="bolo-trigger-label">🇻🇳 Trợ giúp</span>
      </button>

      <div class="bolo-popup-bubble hidden" role="dialog" aria-label="Wskazówka po wietnamsku">
        <div class="bolo-popup-inner">
          <img
            src="./assets/Kotek_Pomoc.png"
            alt="Kotek Bolo"
            width="48"
            height="48"
            class="bolo-popup-avatar"
            onerror="this.src='./public/assets/Kotek_Pomoc.png'"
          />
          <div class="bolo-popup-content">
            <div class="bolo-popup-header">
              <span>🐱 <strong>Kotek Bolo podpowiada:</strong></span>
            </div>
            <div class="bolo-popup-vn-text">${vnHtml}</div>
          </div>
          <button type="button" class="bolo-popup-close" title="Zamknij">✖</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Podpina obsługę kliknięcia pod wszystkie widgety Kotka Bolo wewnątrz danego kontenera
 * @param {HTMLElement} rootEl
 */
export function bindBoloHelpers(rootEl) {
  if (!rootEl) return;

  rootEl.querySelectorAll('.bolo-helper-widget').forEach((widget) => {
    const triggerBtn = widget.querySelector('.bolo-trigger-btn');
    const popup = widget.querySelector('.bolo-popup-bubble');
    const closeBtn = widget.querySelector('.bolo-popup-close');

    if (!triggerBtn || !popup) return;

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playStep();
      const isHidden = popup.classList.contains('hidden');

      // Zamknij inne otwarte dymki Bolo w tym samym kontenerze
      rootEl.querySelectorAll('.bolo-popup-bubble').forEach((other) => {
        if (other !== popup) other.classList.add('hidden');
      });

      if (isHidden) {
        popup.classList.remove('hidden');
        popup.classList.remove('bolo-pop-anim');
        void popup.offsetWidth;
        popup.classList.add('bolo-pop-anim');
      } else {
        popup.classList.add('hidden');
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.add('hidden');
      });
    }

    popup.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}
