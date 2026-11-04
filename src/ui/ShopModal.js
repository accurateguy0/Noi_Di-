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

    const heroAvatar = app.player?.avatar || './assets/Warrior.png';
    const heroName = app.player?.heroName || app.player?.name || 'Bohater';
    const curFloor = app.currentFloor === 0 ? 1 : (Number(app.currentFloor) || 1);
    const xpToNext = Math.max(1, (app.player?.xpToNext || 2) - (app.player?.xp || 0));
    const totalDmg = getPlayerDamage(app.player);

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

        <!-- Dolny pasek HUD (Identyczny z paskiem planszowym w stylu Dicey Dungeons) -->
        <footer class="dicey-hud-bar dd-shop-hud-bar">
          <!-- Lewa strona: Awatar + LEVEL + EXP -->
          <div class="hud-hero-cluster">
            <div class="hud-dice-avatar-frame" id="shop-hud-character-card" title="${heroName}">
              <img id="shop-hud-portrait-img" src="${heroAvatar}" alt="${heroName}" onerror="this.src='./assets/Warrior.png'" />
            </div>
            <div class="hud-level-info">
              <div class="hud-level-text" id="shop-hud-level-title">POZIOM ${app.player?.level || 1}</div>
              <div class="hud-levelup-sub" id="shop-hud-xp-sub">Awans za ★ ${xpToNext}</div>
            </div>
          </div>

          <!-- Środek-Lewo: Pasek HP + monety i atak mieczem (DMG) -->
          <div class="hud-hp-cluster">
            <div class="hud-hp-pill">
              <div class="hud-hp-pill-fill" id="shop-hud-hp-fill" style="width: ${Math.max(0, Math.min(100, (app.player.hp / app.player.maxHp) * 100))}%;"></div>
              <span class="hud-hp-pill-label" id="shop-hud-hp-text">${app.player.hp}/${app.player.maxHp}</span>
            </div>
            <div class="hud-stats-under-hp">
              <span class="hud-stat-coin" title="Złote monety">🪙 <b id="shop-coins">${app.player.coins || 0}</b></span>
              <span class="hud-stat-dmg" title="Siła ataku (DMG)">⚔️ <b id="shop-damage-val">${totalDmg}</b></span>
            </div>
          </div>

          <!-- Środek-Prawo: Przycisk WYJDŹ Z KRAMIKU -->
          <div class="hud-buttons-cluster">
            <button type="button" class="btn-dd-hud-pill btn-dd-equipment" id="shop-leave-btn" title="Wyjdź z kramiku na planszę">
              WYJDŹ Z KRAMIKU
            </button>
          </div>

          <!-- Prawa strona: Drabina / Piętra z czaszkami i kapturem bossa -->
          <div class="hud-floor-cluster" id="shop-hud-floor-display" title="Aktualne piętro">
            <div class="hud-floor-top-row">
              <span class="hud-floor-stair-icon">🪜</span>
              <div class="hud-floor-skulls" id="shop-floor-skulls">
                <span class="hud-skull ${curFloor === 1 ? 'is-current' : (curFloor > 1 ? 'is-cleared' : '')}" data-floor="1">💀</span>
                <span class="hud-skull ${curFloor === 2 ? 'is-current' : (curFloor > 2 ? 'is-cleared' : '')}" data-floor="2">💀</span>
                <span class="hud-skull ${curFloor === 3 ? 'is-current' : (curFloor > 3 ? 'is-cleared' : '')}" data-floor="3">💀</span>
                <span class="hud-skull ${curFloor === 4 ? 'is-current' : (curFloor > 4 ? 'is-cleared' : '')}" data-floor="4">💀</span>
                <span class="hud-skull ${curFloor === 5 ? 'is-current' : (curFloor > 5 ? 'is-cleared' : '')}" data-floor="5">💀</span>
                <span class="hud-boss-hood ${curFloor === 6 ? 'is-current' : (curFloor > 6 ? 'is-cleared' : '')}" data-floor="6">🦹</span>
              </div>
            </div>
            <div class="hud-floor-label" id="shop-hud-floor-title">Piętro ${curFloor}</div>
          </div>
        </footer>
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