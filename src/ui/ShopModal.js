// Interfejs i logika Kramiku / Sklepu w stylu Dicey Dungeons

import { sound } from '../audio/sound.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { getPlayerDamage } from '../data/vocabulary.js';
import {
  SHOP_ITEMS,
  MODULE_3_SHOP_ITEMS,
  MODULE_4_SHOP_ITEMS,
  MODULE_5_SHOP_ITEMS
} from '../data/shopItems.js';

export function openShopModal(app, node) {
  if (node) {
    node.completed = true;
  }
  const modalMount = document.getElementById('modal-mount');
  modalMount.classList.remove('hidden');
  modalMount.classList.add('modal-mount-shop');

  const renderShop = () => {
    const isM3 = String(app.currentFloor).startsWith('m3');
    const isM4 = String(app.currentFloor).startsWith('m4');
    const isM5 = String(app.currentFloor).startsWith('m5');
    const currentShopPool = isM3 ? MODULE_3_SHOP_ITEMS : isM4 ? MODULE_4_SHOP_ITEMS : isM5 ? MODULE_5_SHOP_ITEMS : SHOP_ITEMS;
    const shopTitle = isM3 ? 'Kramik Szkolny' : isM4 ? 'Kramik Apteczny' : isM5 ? 'Kramik Technologiczny' : 'Kramik Szkolny';

    modalMount.innerHTML = `
      <div class="dd-shop-screen" style="background-image: url('./assets/kramik_background.png'), url('/assets/kramik_background.png');">
        <!-- Kolorowa girlanda u góry -->
        <div class="dd-shop-bunting">
          <div class="bunting-flag" style="--c: #ff0054"></div>
          <div class="bunting-flag" style="--c: #ffd166"></div>
          <div class="bunting-flag" style="--c: #06d6a0"></div>
          <div class="bunting-flag" style="--c: #118ab2"></div>
          <div class="bunting-flag" style="--c: #8338ec"></div>
          <div class="bunting-flag" style="--c: #ffbe0b"></div>
          <div class="bunting-flag" style="--c: #ff0054"></div>
        </div>

        <!-- Górna belka: Tytuł sklepu z ikoną kramiku i sakiewka ze złotem -->
        <div class="dd-shop-topbar">
          <div class="dd-shop-title-badge">
            <img
              src="./assets/kramik.png"
              alt="Kramik"
              class="dd-shop-title-kramik-img"
              onerror="this.src='./public/assets/kramik.png'"
            />
            <h2>${shopTitle.toUpperCase()}</h2>
          </div>
          <div class="dd-shop-top-right">
            <div class="dd-shop-gold-badge">
              <span class="gold-coin-icon">🪙</span>
              <span class="gold-text"><b>${app.player.coins}</b> monet</span>
            </div>
            <button class="btn-dd-shop-close" id="shop-close-btn" title="Zamknij sklep">✖</button>
          </div>
        </div>

        <!-- Dymek sprzedawcy wskazujący na żabę po prawej stronie w tle -->
        <div class="dd-shopkeeper-bubble-area">
          <div class="dd-shopkeeper-speech-bubble">
            Witaj w Kramiku! Co dobrego dla Ciebie? 🐸✨
          </div>
        </div>

        <!-- Sekcja lady sklepowej z kartami rozłożonymi po lewej/w centrum -->
        <div class="dd-shop-counter-section">
          <div class="dd-shop-cards-container">
            ${currentShopPool.map((item) => {
              const isAlreadyBought = app.player.boughtShopItemIds.has(item.id) || (item.id === 'sneakers' && app.player.boughtSneakers);
              const canAfford = app.player.coins >= item.price && !isAlreadyBought;

              let btnText = `KUP • 🪙 ${item.price}`;
              let btnClass = 'btn-dd-buy';
              if (isAlreadyBought) {
                btnText = 'KUPIONE ✅';
                btnClass += ' btn-dd-buy-owned';
              } else if (!canAfford) {
                btnText = `🪙 ${item.price} (ZA MAŁO)`;
                btnClass += ' btn-dd-buy-cant';
              }

              return `
                <div class="dd-shop-item-card ${isAlreadyBought ? 'item-is-sold' : ''}" style="--card-color: ${item.color || '#8338ec'}">
                  ${isAlreadyBought ? '<div class="dd-sold-stamp">SPRZEDANE</div>' : ''}

                  <div class="dd-card-top-strip">
                    <span class="dd-card-name">${item.namePl}</span>
                  </div>

                  <div class="dd-card-main-stat">
                    ${item.icon ? `<img src="${item.icon}" alt="${item.namePl}" class="dd-card-item-img" onerror="this.style.display='none'" />` : ''}
                    <div class="dd-stat-cluster">
                      <span class="dd-stat-big-val">${item.bigStat || item.badgePl}</span>
                      <span class="dd-stat-sub-label">${item.subStatText || item.badgePl}</span>
                    </div>
                  </div>

                  <div class="dd-card-desc-box">
                    <p class="dd-card-desc-text">${item.descPl}</p>
                  </div>

                  <div class="dd-card-action-box">
                    <button
                      type="button"
                      class="${btnClass}"
                      data-item-id="${item.id}"
                      ${canAfford ? '' : 'disabled'}
                    >
                      ${btnText}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Dolny pasek podsumowania i wyjścia -->
        <div class="dd-shop-bottombar">
          <div class="dd-shop-stats-status">
            <span class="dd-stat-pill">👟 Max HP: <b>${app.player.maxHp}</b></span>
            <span class="dd-stat-pill">⚔️ Atak: <b>${getPlayerDamage(app.player)} DMG</b></span>
            <span class="dd-stat-pill">⏱️ Czas: <b>+${app.player.bonusTimeSec || 0}s</b></span>
            <span class="dd-stat-pill">🥙 Kebaby: <b>${app.player.kebabs || 0}</b></span>
          </div>
          <button type="button" class="btn-dd-shop-exit" id="shop-leave-btn">
            ⬅ WYJDŹ ZE SKLEPU
          </button>
        </div>
      </div>
    `;

    const handleExit = () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        app.renderBoard();
        app.updateHUD();
      });
    };

    const closeBtn = modalMount.querySelector('#shop-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', handleExit);

    const leaveBtn = modalMount.querySelector('#shop-leave-btn');
    if (leaveBtn) leaveBtn.addEventListener('click', handleExit);

    modalMount.querySelectorAll('.btn-dd-buy').forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const item = currentShopPool.find((it) => it.id === itemId);
        if (!item) return;

        if (app.player.boughtShopItemIds.has(item.id) || (item.id === 'sneakers' && app.player.boughtSneakers)) {
          return;
        }

        if (app.player.coins < item.price) {
          sound.playMiss();
          app.showTemporaryPlayerBubble('Za mało monet! 🪙', 1400);
          return;
        }

        app.player.coins -= item.price;
        app.player.boughtShopItemIds.add(item.id);
        sound.playSuccess();

        if (item.id === 'sneakers') {
          app.player.boughtSneakers = true;
          app.player.maxHp += 4;
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + 4);
          sound.speakPolish('Świetne sneakersy!');
          app.showTemporaryPlayerBubble('👟 Założono Sneakersy! Max HP +4', 1800);
        } else if (item.id === 'energy_drink') {
          app.player.bonusTimeSec += 1;
          sound.speakPolish('Dużo energii!');
          app.showTemporaryPlayerBubble('⚡ Napój energetyczny! +1s na odpowiedź', 1800);
        } else if (item.id === 'kebab') {
          app.player.kebabs += 1;
          sound.speakPolish('Pyszny kebab!');
          app.showTemporaryPlayerBubble('🥙 Kupiono Kebab! (W plecaku: 1x)', 1800);
        } else if (item.id === 'piornik') {
          app.player.bonusDamage = (app.player.bonusDamage || 0) + 1;
          sound.speakPolish('Nowy piórnik! Siła ataku wzrosła!');
          app.showTemporaryPlayerBubble('✏️ Kupiono Piórnik! Siła ataku +1 ⚔️', 1800);
        } else if (item.id === 'zeszyt') {
          app.player.bonusTimeSec = (app.player.bonusTimeSec || 0) + 1;
          sound.speakPolish('Nowy zeszyt! Więcej czasu na myślenie!');
          app.showTemporaryPlayerBubble('📓 Kupiono Zeszyt! Czas na odpowiedź +1s ⏱️', 1800);
        } else if (item.id === 'drozdzowka') {
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + 6);
          sound.speakPolish('Pyszna słodka drożdżówka!');
          app.showTemporaryPlayerBubble('🥐 Zjedzono drożdżówkę! Uleczono +6 HP ❤️', 1800);
        } else if (item.id === 'plaster') {
          app.player.maxHp += 2;
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + 12);
          sound.speakPolish('Opatrunek założony! Rany zagojone!');
          app.showTemporaryPlayerBubble('🩹 Użyto Plaster! +12 HP i +2 Max HP ❤️', 1800);
        } else if (item.id === 'szalik') {
          app.player.maxHp += 4;
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + 4);
          sound.speakPolish('Ciepły szalik chroni przed chorobą!');
          app.showTemporaryPlayerBubble('🧣 Założono Szalik! Max HP +4 ❤️', 1800);
        } else if (item.id === 'woda') {
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + 8);
          sound.speakPolish('Orzeźwiająca chłodna woda!');
          app.showTemporaryPlayerBubble('💧 Wypito Wodę! Uleczono +8 HP ❤️', 1800);
        } else if (item.id === 'sluchawki') {
          app.player.bonusDamage = (app.player.bonusDamage || 0) + 2;
          sound.speakPolish('Słuchawki gamingowe! Pełna koncentracja!');
          app.showTemporaryPlayerBubble('🎧 Założono Słuchawki! Siła ataku +2 ⚔️', 1800);
        } else if (item.id === 'powerbank') {
          app.player.bonusTimeSec = (app.player.bonusTimeSec || 0) + 2;
          sound.speakPolish('Powerbank naładowany! Dodatkowy czas!');
          app.showTemporaryPlayerBubble('🔋 Kupiono Powerbank! Czas +2s ⏱️', 1800);
        } else if (item.id === 'breloczek') {
          app.player.flawlessCoinBonus = (app.player.flawlessCoinBonus || 0) + 1;
          sound.speakPolish('Szczęśliwy talizman w plecaku!');
          app.showTemporaryPlayerBubble('🔑 Szczęśliwy Breloczek! +1 🪙 za czystą walkę!', 1800);
        }

        app.updateHUD();
        renderShop();
      });
    });
  };

  renderShop();
}
