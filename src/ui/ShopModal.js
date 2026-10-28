// Interfejs i logika Kramiku / Sklepu w stylu Dicey Dungeons

import { sound } from '../audio/sound.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { getPlayerDamage } from '../data/vocabulary.js';
import { ALL_ITEMS_CATALOG } from '../data/shopItems.js';
import { addItemToPlayerInventory } from './WordBookModal.js';

export function openShopModal(app, node) {
  sound.playEnterShop();
  if (node) {
    node.completed = true;
    node.boughtItemIds = node.boughtItemIds || new Set();
  }
  const modalMount = document.getElementById('modal-mount');
  modalMount.classList.remove('hidden');
  modalMount.classList.add('modal-mount-shop');

  if (!app.player.boughtUniqueGear) {
    app.player.boughtUniqueGear = new Set();
  }

  const renderShop = () => {
    const fNum = Math.max(1, Math.min(5, Number(app.currentFloor) || 1));
    const FLOOR_SHOPS = {
      1: {
        title: 'Kramik Szkolny',
        items: [ALL_ITEMS_CATALOG.drozdzowka, ALL_ITEMS_CATALOG.woda, ALL_ITEMS_CATALOG.zeszyt]
      },
      2: {
        title: 'Sklepik Papierniczy',
        items: [ALL_ITEMS_CATALOG.piornik, ALL_ITEMS_CATALOG.plaster, ALL_ITEMS_CATALOG.energetyk]
      },
      3: {
        title: 'Kramik Ratunkowy',
        items: [ALL_ITEMS_CATALOG.szalik, ALL_ITEMS_CATALOG.woda, ALL_ITEMS_CATALOG.sluchawki]
      },
      4: {
        title: 'Bufet i Kramik WF',
        items: [ALL_ITEMS_CATALOG.kebab, ALL_ITEMS_CATALOG.sneakers, ALL_ITEMS_CATALOG.powerbank]
      },
      5: {
        title: 'Sklepik Mistrzowski',
        items: [ALL_ITEMS_CATALOG.sneakers, ALL_ITEMS_CATALOG.sluchawki, ALL_ITEMS_CATALOG.powerbank]
      }
    };

    const currentShopData = FLOOR_SHOPS[fNum] || FLOOR_SHOPS[1];
    const itemsToDisplay = currentShopData.items;

    modalMount.innerHTML = `
      <div class="dd-shop-screen" style="background-image: url('./assets/tla/kramik_background.png'), url('/assets/tla/kramik_background.png');">
        <!-- Sekcja lady sklepowej z kartami na blacie w stylu Dicey Dungeons -->
        <div class="dd-shop-counter-section">
          <div class="dd-shop-cards-container">
            ${itemsToDisplay.map((item) => {
              const isUniqueGear = ['sneakers', 'szalik', 'sluchawki'].includes(item.id);
              const isAlreadyBought = isUniqueGear
                ? app.player.boughtUniqueGear.has(item.id) || (item.id === 'sneakers' && app.player.boughtSneakers)
                : Boolean(node?.boughtItemIds?.has(item.id));
              const canAfford = app.player.coins >= item.price && !isAlreadyBought;

              let btnActionText = 'KUP';
              let btnClass = 'btn-dd-buy';
              let costHtml = `Koszt: <b class="cost-val">${item.price} monet</b>`;

              if (isAlreadyBought) {
                btnActionText = 'KUPIONE';
                btnClass += ' btn-dd-buy-owned';
                costHtml = '<span class="cost-owned">Kupione</span>';
              } else if (!canAfford) {
                btnActionText = 'KUP';
                btnClass += ' btn-dd-buy-cant';
                costHtml = `Koszt: <b class="cost-val">${item.price} monet</b> <span class="cost-shortage">(za mało)</span>`;
              }

              return `
                <div class="dd-shop-item-slot">
                  <div class="dd-shop-item-card ${isAlreadyBought ? 'item-is-sold' : ''}" style="--card-color: ${item.color || '#8338ec'}">
                    ${isAlreadyBought ? '<div class="dd-sold-stamp">SPRZEDANE</div>' : ''}

                    <div class="dd-card-top-strip">
                      <span class="dd-card-name">${item.namePl}</span>
                    </div>

                    <div class="dd-card-inner-frame">
                      <div class="dd-card-artwork-box">
                        ${item.icon ? `<img src="${item.icon}" alt="${item.namePl}" class="dd-card-item-img" onerror="this.style.display='none'" />` : ''}
                      </div>
                      <div class="dd-card-slot-rule">${item.subStatText || item.badgePl}</div>
                    </div>
                  </div>

                  <!-- Przycisk KUP i informacja o koszcie na ladzie pod kartą (Dicey Dungeons) -->
                  <div class="dd-card-purchase-row">
                    <button type="button" class="${btnClass}" data-item-id="${item.id}" ${isAlreadyBought ? 'disabled' : ''}>
                      ${btnActionText}
                    </button>
                    <div class="dd-card-cost-tag">${costHtml}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Dolna listwa w stylu Dicey Dungeons HUD -->
        <div class="dd-shop-bottombar">
          <div class="dd-shop-hud-left">
            <div class="dd-shop-hud-portrait">
              <img src="${app.player.avatar || './assets/Warrior.png'}" alt="${app.player.heroName || 'Bohater'}" onerror="this.src='./assets/Warrior.png'" />
            </div>
            <div class="dd-shop-hud-name">${app.player.heroName || app.player.name || 'Bohater'}</div>
            <div class="dd-shop-hud-hp">
              <div class="dd-shop-hud-hp-bar" style="width: ${Math.max(0, Math.min(100, (app.player.hp / app.player.maxHp) * 100))}%"></div>
              <span class="dd-shop-hud-hp-text">${app.player.hp}/${app.player.maxHp} HP</span>
            </div>
            <div class="dd-shop-hud-gold">
              <span>🪙</span> <b>${app.player.coins}</b>
            </div>
          </div>

          <div class="dd-shop-hud-center">
            <span style="margin-right: 18px;">⚔️ Atak: <b>${getPlayerDamage(app.player)} DMG</b></span>
            <span>💡 Podpowiedzi: <b>${app.player.hints ?? 5}</b></span>
          </div>

          <div class="dd-shop-hud-right">
            <button type="button" class="btn-dd-shop-exit" id="shop-leave-btn">
              WYJDŹ Z KRAMIKU
            </button>
          </div>
        </div>
      </div>
    `;

    const handleExit = () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        modalMount.classList.add('hidden');
        modalMount.classList.remove('modal-mount-shop');
        modalMount.innerHTML = '';
        app.renderBoard();
        app.updateHUD();
      });
    };

    const leaveBtn = modalMount.querySelector('#shop-leave-btn');
    if (leaveBtn) leaveBtn.addEventListener('click', handleExit);

    modalMount.querySelectorAll('.btn-dd-buy').forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const item = itemsToDisplay.find((it) => it.id === itemId);
        if (!item) return;

        const isUniqueGear = ['sneakers', 'szalik', 'sluchawki'].includes(item.id);
        if (isUniqueGear && (app.player.boughtUniqueGear.has(item.id) || (item.id === 'sneakers' && app.player.boughtSneakers))) {
          return;
        }
        if (!isUniqueGear && node?.boughtItemIds?.has(item.id)) {
          return;
        }

        if (app.player.coins < item.price) {
          sound.playMiss();
          app.showTemporaryPlayerBubble('Za mało monet!', 1400);
          return;
        }

        app.player.coins -= item.price;
        if (node?.boughtItemIds) {
          node.boughtItemIds.add(item.id);
        }
        if (isUniqueGear) {
          app.player.boughtUniqueGear.add(item.id);
        }
        sound.playSuccess();

        if (item.maxHpBonus) {
          app.player.maxHp += item.maxHpBonus;
        }
        if (item.healAmount) {
          app.player.hp = Math.min(app.player.maxHp, app.player.hp + item.healAmount);
        }
        if (item.damageBonus) {
          app.player.bonusDamage = (app.player.bonusDamage || 0) + item.damageBonus;
        }
        if (item.hintsBonus) {
          app.player.hints = (app.player.hints || 0) + item.hintsBonus;
        }
        if (item.id === 'sneakers') {
          app.player.boughtSneakers = true;
        }

        addItemToPlayerInventory(app.player, item);

        sound.speakPolish(`Kupiono ${item.namePl}!`);
        app.showTemporaryPlayerBubble(`Kupiono: ${item.namePl}! ${item.badgePl}`, 1800);

        app.updateHUD();
        renderShop();
      });
    });
  };

  renderShop();
}