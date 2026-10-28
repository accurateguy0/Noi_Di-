// Interfejs Plecaka (Inventory / Equipment) w stylu Dicey Dungeons
// 6 slotów na przechowanie w plecaku (IN BACKPACK)
// 2 sloty do użytku (EQUIPPED)
// Słownik dostępny jako dedykowana talia bez zajmowania slotów ekwipunku

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { ALL_ITEMS_CATALOG } from '../data/shopItems.js';
import {
  getPlayerDamage,
  SLANG_WORDS,
  BOARD_3_WORDS,
  BOARD_4_WORDS,
  BOARD_5_WORDS,
  BOARD_6_WORDS,
  CITY_1_WORDS,
  CITY_2_WORDS,
  CITY_3_WORDS,
  MODULE_3_1_WORDS,
  MODULE_3_2_WORDS,
  MODULE_3_3_WORDS,
  MODULE_4_1_WORDS,
  MODULE_4_2_WORDS,
  MODULE_4_3_WORDS,
  MODULE_5_1_WORDS,
  MODULE_5_2_WORDS
} from '../data/vocabulary.js';

export const STARTER_ITEMS = {
  miecz_bojowy: {
    id: 'miecz_bojowy',
    name: 'MIECZ BOJOWY',
    category: 'equipment',
    color: '#e63946',
    icon: './assets/itemki/zeszyt.png',
    statBadge: 'ATAK +2 DMG',
    bigStat: '+2 DMG',
    subStatText: 'BROŃ GŁÓWNA',
    descPl: 'Klasyczna broń bojowa wojownika! Zwiększa siłę ataku o +2 DMG.',
    descVn: 'Vũ khí chiến đấu của chiến binh! Tăng +2 sát thương.',
    damageBonus: 2
  }
};

/**
 * Inicjalizuje tablice ekwipunku gracza:
 * - equippedItems: dokładnie 2 sloty do użytku
 * - backpackItems: dokładnie 6 slotów do przechowywania
 */
export function initPlayerEquipment(player) {
  if (!player.equippedItems || !Array.isArray(player.equippedItems)) {
    player.equippedItems = [
      { ...STARTER_ITEMS.miecz_bojowy },
      null
    ];
  }

  if (!player.backpackItems || !Array.isArray(player.backpackItems)) {
    player.backpackItems = [null, null, null, null, null, null];

    // Migracja wcześniej zakupionych przedmiotów do plecaka
    if (player.boughtSneakers || player.boughtShopItemIds?.has('sneakers')) {
      const emptyIdx = player.backpackItems.findIndex((s) => s === null);
      if (emptyIdx !== -1) {
        player.backpackItems[emptyIdx] = {
          id: 'sneakers',
          name: 'SNEAKERSY',
          category: 'equipment',
          color: '#8338ec',
          icon: './assets/itemki/sneaker.png',
          statBadge: 'MAX HP +6',
          bigStat: '+6 HP',
          subStatText: 'MAX HP +6',
          descPl: 'Wygodne szkolne buty! Zwiększają na stałe maksymalne zdrowie o +6 HP.',
          descVn: 'Giày thể thao êm ái! Tăng vĩnh viễn +6 HP tối đa.',
          maxHpBonus: 6
        };
      }
    }

    if (player.bonusTimeSec > 0 || player.boughtShopItemIds?.has('energetyk')) {
      const emptyIdx = player.backpackItems.findIndex((s) => s === null);
      if (emptyIdx !== -1) {
        player.backpackItems[emptyIdx] = {
          id: 'energetyk',
          name: 'ENERGETYK',
          category: 'equipment',
          color: '#00b4d8',
          icon: './assets/itemki/energetyk.png',
          statBadge: '+1 PODPOWIEDŹ',
          bigStat: '+1',
          subStatText: 'PODPOWIEDŹ',
          descPl: 'Zastrzyk energii! Dodaje dodatkową podpowiedź (?) w trudnych minigrach.',
          descVn: 'Nước tăng lực! Thêm 1 gợi ý.',
          hintsBonus: 1
        };
      }
    }

    if (player.kebabs > 0) {
      const emptyIdx = player.backpackItems.findIndex((s) => s === null);
      if (emptyIdx !== -1) {
        player.backpackItems[emptyIdx] = {
          id: 'kebab',
          name: 'KEBAB',
          category: 'consumable',
          color: '#f77f00',
          icon: './assets/itemki/kebab.png',
          statBadge: 'ULECZ +10 HP',
          bigStat: '+10 HP',
          subStatText: 'JEDZENIE',
          descPl: 'Pyszny ciepły kebab! Przedmiot jednorazowy — natychmiast regeneruje +10 HP.',
          descVn: 'Bánh mì Kebab thơm ngon! Hồi phục +10 HP.',
          actionType: 'eat',
          healAmount: 10
        };
      }
    }
  }

  // Upewnij się, że długości są równe 2 i 6
  while (player.equippedItems.length < 2) player.equippedItems.push(null);
  while (player.equippedItems.length > 2) player.equippedItems.pop();
  while (player.backpackItems.length < 6) player.backpackItems.push(null);
  while (player.backpackItems.length > 6) player.backpackItems.pop();
}

/**
 * Dodaje zakupiony przedmiot do ekwipunku lub plecaka gracza
 */
export function addItemToPlayerInventory(player, catalogItem) {
  initPlayerEquipment(player);

  const isConsumable = ['kebab', 'drozdzowka', 'woda', 'plaster'].includes(catalogItem.id);
  const itemObj = {
    id: catalogItem.id,
    name: catalogItem.namePl || catalogItem.name || 'PRZEDMIOT',
    category: isConsumable ? 'consumable' : 'equipment',
    color: catalogItem.color || '#3a86ff',
    icon: catalogItem.icon,
    statBadge: catalogItem.badgePl || catalogItem.statBadge || '+1 STAT',
    bigStat: catalogItem.badgePl || catalogItem.bigStat || '+1',
    subStatText: catalogItem.subStatText || catalogItem.badgePl || 'EKWIPUNEK',
    descPl: catalogItem.descPl || '',
    descVn: catalogItem.descVn || '',
    actionType: isConsumable ? 'eat' : null,
    healAmount: catalogItem.healAmount || 0,
    damageBonus: catalogItem.damageBonus || 0,
    maxHpBonus: catalogItem.maxHpBonus || 0,
    hintsBonus: catalogItem.hintsBonus || 0
  };

  // Najpierw szukamy wolnego slotu w plecaku (6 slotów)
  const freeBpIdx = player.backpackItems.findIndex((s) => s === null);
  if (freeBpIdx !== -1) {
    player.backpackItems[freeBpIdx] = itemObj;
    return true;
  }

  // Jeśli plecak pełny, a jest wolny slot do użytku (2 sloty)
  const freeEqIdx = player.equippedItems.findIndex((s) => s === null);
  if (freeEqIdx !== -1 && !isConsumable) {
    player.equippedItems[freeEqIdx] = itemObj;
    return true;
  }

  return false;
}

export function openInventoryModal(app, initialSelectedId = null, filterCategory = null) {
  // NIE ZMIENIAJ MUZYKI podczas wejścia w ekwipunek: muzyka z planszy gra dalej w tle!
  initPlayerEquipment(app.player);

  const modalMount = document.getElementById('modal-mount');
  modalMount.classList.remove('hidden');
  modalMount.classList.add('modal-mount-inventory');

  let selectedLocation = 'equipped'; // 'equipped' | 'backpack'
  let selectedIndex = 0;

  if (app.player.equippedItems[0]) {
    selectedLocation = 'equipped';
    selectedIndex = 0;
  } else if (app.player.backpackItems.some((it) => it !== null)) {
    selectedLocation = 'backpack';
    selectedIndex = app.player.backpackItems.findIndex((it) => it !== null);
  }

  const renderInventory = () => {
    initPlayerEquipment(app.player);

    let selectedItem = null;
    if (selectedLocation === 'equipped') {
      selectedItem = app.player.equippedItems[selectedIndex] || null;
    } else if (selectedLocation === 'backpack') {
      selectedItem = app.player.backpackItems[selectedIndex] || null;
    }

    // Generowanie dokładnie 6 slotów do plecaka (IN BACKPACK) w siatce 3 kolumny x 2 wiersze
    const backpackSlotsHtml = [];
    for (let i = 0; i < 6; i++) {
      const item = app.player.backpackItems[i];
      const isSelected = selectedLocation === 'backpack' && selectedIndex === i;

      if (item) {
        backpackSlotsHtml.push(`
          <div
            class="dd-gear-slot slot-occupied ${isSelected ? 'is-selected' : ''}"
            style="--card-theme-color: ${item.color || '#38b000'};"
            data-location="backpack"
            data-index="${i}"
            draggable="true"
          >
            <div class="dd-gear-card-face" style="background: ${item.color || '#38b000'};">
              <div class="dd-gear-card-icon">
                ${item.icon ? `<img src="${item.icon}" alt="${item.name}" draggable="false" />` : '🎒'}
              </div>
              <div class="dd-gear-card-title">${item.name}</div>
              <div class="dd-gear-card-stat">${item.bigStat || item.statBadge}</div>
            </div>
            <div class="dd-card-hover-tooltip">
              <div class="dd-tt-title">${item.name} <span class="dd-tt-stat">${item.bigStat || item.statBadge}</span></div>
              <div class="dd-tt-desc">${item.descPl || ''}</div>
              ${item.descVn ? `<div class="dd-tt-vn">${item.descVn}</div>` : ''}
              ${item.actionType === 'eat' ? `
                <button type="button" class="btn-tooltip-eat" data-eat-loc="backpack" data-eat-idx="${i}">
                  🍖 Zjedz (+${item.healAmount || 10} HP)
                </button>
              ` : ''}
            </div>
          </div>
        `);
      } else {
        backpackSlotsHtml.push(`
          <div
            class="dd-gear-slot slot-empty"
            data-location="backpack"
            data-index="${i}"
          ></div>
        `);
      }
    }

    // Generowanie dokładnie 2 slotów do użytku (EQUIPPED)
    const equippedSlotsHtml = [];
    for (let i = 0; i < 2; i++) {
      const item = app.player.equippedItems[i];
      const isSelected = selectedLocation === 'equipped' && selectedIndex === i;

      if (item) {
        equippedSlotsHtml.push(`
          <div
            class="dd-gear-slot slot-occupied ${isSelected ? 'is-selected' : ''}"
            style="--card-theme-color: ${item.color || '#38b000'};"
            data-location="equipped"
            data-index="${i}"
            draggable="true"
          >
            <div class="dd-gear-card-face" style="background: ${item.color || '#38b000'};">
              <div class="dd-gear-card-icon">
                ${item.icon ? `<img src="${item.icon}" alt="${item.name}" draggable="false" />` : '⚔️'}
              </div>
              <div class="dd-gear-card-title">${item.name}</div>
              <div class="dd-gear-card-stat">${item.bigStat || item.statBadge}</div>
            </div>
            <div class="dd-card-hover-tooltip">
              <div class="dd-tt-title">${item.name} <span class="dd-tt-stat">${item.bigStat || item.statBadge}</span></div>
              <div class="dd-tt-desc">${item.descPl || ''}</div>
              ${item.descVn ? `<div class="dd-tt-vn">${item.descVn}</div>` : ''}
              ${item.actionType === 'eat' ? `
                <button type="button" class="btn-tooltip-eat" data-eat-loc="equipped" data-eat-idx="${i}">
                  🍖 Zjedz (+${item.healAmount || 10} HP)
                </button>
              ` : ''}
            </div>
          </div>
        `);
      } else {
        equippedSlotsHtml.push(`
          <div
            class="dd-gear-slot slot-empty"
            data-location="equipped"
            data-index="${i}"
          ></div>
        `);
      }
    }

    const curFloor = app.currentFloor === 0 ? 1 : app.currentFloor;
    const heroName = (app.player.characterClass || app.player.heroName || 'WARRIOR').toUpperCase();
    const heroAvatar = app.player.avatar || './assets/Warrior.png';
    const xpToNext = Math.max(1, (app.player.xpToNext || 2) - (app.player.xp || 0));

    modalMount.innerHTML = `
      <div class="dd-inventory-fullscreen-view" style="background-image: url('./assets/tla/biblioteka.png');">
        <!-- Główny obszar z dwoma panelami: IN BACKPACK po lewej, EQUIPPED po prawej -->
        <div class="dd-inv-stage-center">
          <!-- Lewa strona: IN BACKPACK -->
          <div class="dd-inv-column dd-inv-backpack-col">
            <h2 class="dd-inv-stage-title">IN BACKPACK</h2>
            <div class="dd-inv-stage-grid dd-inv-grid-backpack">
              ${backpackSlotsHtml.join('')}
            </div>
          </div>

          <!-- Prawa strona: EQUIPPED (wzorowana 1:1 na Dicey Dungeons) -->
          <div class="dd-inv-column dd-inv-equipped-col">
            <h2 class="dd-inv-stage-title">EQUIPPED</h2>
            <div class="dd-inv-stage-grid dd-inv-grid-equipped">
              ${equippedSlotsHtml.join('')}
            </div>
          </div>
        </div>

        <!-- Dolny pasek HUD (Identyczny jak na planszy z przyciskiem BACK) -->
        <footer class="dicey-hud-bar dd-inv-bottom-hud-bar">
          <!-- Lewa strona: Awatar + LEVEL + EXP -->
          <div class="hud-hero-cluster">
            <div class="hud-dice-avatar-frame" id="inv-hud-character-card">
              <img id="inv-hud-portrait-img" src="${heroAvatar}" alt="${heroName}" onerror="this.src='./assets/Warrior.png'" />
            </div>
            <div class="hud-level-info">
              <div class="hud-level-text" id="inv-hud-level-title">LEVEL ${app.player.level || 1}</div>
              <div class="hud-levelup-sub" id="inv-hud-xp-sub">Level up in ★ ${xpToNext}</div>
            </div>
          </div>

          <!-- Środek-Lewo: Pasek HP + monety i siła ataku DMG -->
          <div class="hud-hp-cluster">
            <div class="hud-hp-pill">
              <div class="hud-hp-pill-fill" style="width: ${Math.max(0, Math.min(100, (app.player.hp / app.player.maxHp) * 100))}%;"></div>
              <span class="hud-hp-pill-label">${app.player.hp}/${app.player.maxHp}</span>
            </div>
            <div class="hud-stats-under-hp">
              <span class="hud-stat-coin" title="Złote monety">🪙 <b>${app.player.coins || 0}</b></span>
              <span class="hud-stat-dmg" title="Siła ataku (DMG)">⚔️ <b>${getPlayerDamage(app.player)}</b></span>
            </div>
          </div>

          <!-- Środek-Prawo: Przycisk BACK -->
          <div class="hud-buttons-cluster">
            <button type="button" class="btn-dd-hud-pill btn-dd-equipment" id="inv-hud-back-btn" title="Wróć na planszę">
              BACK
            </button>
          </div>

          <!-- Prawa strona: Drabina + Piętra z czaszkami i kapturem bossa -->
          <div class="hud-floor-cluster" title="Aktualne piętro">
            <div class="hud-floor-top-row">
              <span class="hud-floor-stair-icon">🪜</span>
              <div class="hud-floor-skulls">
                <span class="hud-skull ${curFloor === 1 ? 'is-current' : (curFloor > 1 ? 'is-cleared' : '')}" data-floor="1">💀</span>
                <span class="hud-skull ${curFloor === 2 ? 'is-current' : (curFloor > 2 ? 'is-cleared' : '')}" data-floor="2">💀</span>
                <span class="hud-skull ${curFloor === 3 ? 'is-current' : (curFloor > 3 ? 'is-cleared' : '')}" data-floor="3">💀</span>
                <span class="hud-skull ${curFloor === 4 ? 'is-current' : (curFloor > 4 ? 'is-cleared' : '')}" data-floor="4">💀</span>
                <span class="hud-skull ${curFloor === 5 ? 'is-current' : (curFloor > 5 ? 'is-cleared' : '')}" data-floor="5">💀</span>
                <span class="hud-boss-hood ${curFloor === 6 ? 'is-current' : (curFloor > 6 ? 'is-cleared' : '')}" data-floor="6">🦹</span>
              </div>
            </div>
            <div class="hud-floor-label">Floor ${curFloor}</div>
          </div>
        </footer>
      </div>
    `;

    // Zamknięcie ekwipunku i powrót na planszę za pomocą ząbkowanej kurtyny
    const handleClose = () => {
      playJaggedCurtainWipe(() => {
        modalMount.classList.remove('modal-mount-inventory');
        app.closeModal();
        app.renderBoard();
        app.updateHUD();
      });
    };

    const backBtn = modalMount.querySelector('#inv-hud-back-btn');
    if (backBtn) backBtn.addEventListener('click', handleClose);

    // ==================== OBSŁUGA PRZECIĄGANIA I UPUSZCZANIA KART (DRAG & DROP) ====================
    modalMount.querySelectorAll('.dd-gear-slot').forEach((slot) => {
      // 1. Rozpoczęcie przeciągania
      slot.addEventListener('dragstart', (e) => {
        const loc = slot.dataset.location;
        const idx = Number(slot.dataset.index);
        const item = loc === 'equipped' ? app.player.equippedItems[idx] : app.player.backpackItems[idx];
        if (!item) {
          e.preventDefault();
          return;
        }

        e.dataTransfer.setData('text/plain', JSON.stringify({ loc, idx }));
        e.dataTransfer.effectAllowed = 'move';
        slot.classList.add('is-dragging');
        sound.playStep();
      });

      // 2. Zakończenie przeciągania (wyczyszczenie stylów)
      slot.addEventListener('dragend', () => {
        slot.classList.remove('is-dragging');
        modalMount.querySelectorAll('.slot-drag-over').forEach((el) => el.classList.remove('slot-drag-over'));
      });

      // 3. Najechanie przeciąganej karty nad slot
      slot.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      slot.addEventListener('dragenter', (e) => {
        e.preventDefault();
        slot.classList.add('slot-drag-over');
      });

      slot.addEventListener('dragleave', (e) => {
        if (e.target === slot) {
          slot.classList.remove('slot-drag-over');
        }
      });

      // 4. Upuszczenie karty na slot (przeniesienie lub zamiana miejsc)
      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('slot-drag-over');

        try {
          const dataStr = e.dataTransfer.getData('text/plain');
          if (!dataStr) return;
          const source = JSON.parse(dataStr);
          const targetLoc = slot.dataset.location;
          const targetIdx = Number(slot.dataset.index);

          // Jeśli upuszczono na ten sam slot, nic nie rób
          if (source.loc === targetLoc && source.idx === targetIdx) return;

          const sourceArr = source.loc === 'equipped' ? app.player.equippedItems : app.player.backpackItems;
          const targetArr = targetLoc === 'equipped' ? app.player.equippedItems : app.player.backpackItems;

          const sourceItem = sourceArr[source.idx];
          if (!sourceItem) return;

          const targetItem = targetArr[targetIdx];

          // Zamiana lub przeniesienie
          targetArr[targetIdx] = sourceItem;
          sourceArr[source.idx] = targetItem;

          if (targetLoc === 'equipped') {
            sound.playSuccess();
          } else {
            sound.playStep();
          }

          selectedLocation = targetLoc;
          selectedIndex = targetIdx;

          app.updateHUD();
          renderInventory();
        } catch (err) {
          console.error('Błąd drag-and-drop:', err);
        }
      });

      // 5. Kliknięcie w kartę jako szybka alternatywa dla przeciągania:
      // Klik w plecak -> przenosi do pierwszego wolnego slotu w equipped (lub zamienia)
      // Klik w equipped -> przenosi do pierwszego wolnego slotu w plecaku
      slot.addEventListener('click', (e) => {
        // Jeśli kliknięto w przycisk jedzenia w tooltipie, nie przenoś karty
        if (e.target.closest('.btn-tooltip-eat')) return;

        const loc = slot.dataset.location;
        const idx = Number(slot.dataset.index);

        selectedLocation = loc;
        selectedIndex = idx;

        const clickedItem = loc === 'equipped'
          ? app.player.equippedItems[idx]
          : app.player.backpackItems[idx];

        if (clickedItem) {
          if (loc === 'backpack') {
            const freeEq = app.player.equippedItems.findIndex((s) => s === null);
            if (freeEq !== -1) {
              sound.playSuccess();
              app.player.equippedItems[freeEq] = clickedItem;
              app.player.backpackItems[idx] = null;
              selectedLocation = 'equipped';
              selectedIndex = freeEq;
            } else {
              sound.playSuccess();
              const old = app.player.equippedItems[0];
              app.player.equippedItems[0] = clickedItem;
              app.player.backpackItems[idx] = old;
              selectedLocation = 'equipped';
              selectedIndex = 0;
            }
          } else {
            const freeBp = app.player.backpackItems.findIndex((s) => s === null);
            if (freeBp !== -1) {
              sound.playStep();
              app.player.backpackItems[freeBp] = clickedItem;
              app.player.equippedItems[idx] = null;
              selectedLocation = 'backpack';
              selectedIndex = freeBp;
            } else {
              sound.playMiss();
            }
          }
          app.updateHUD();
          renderInventory();
        }
      });
    });

    // Obsługa jedzenia przedmiotu z tooltipa karty
    modalMount.querySelectorAll('.btn-tooltip-eat').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const loc = btn.dataset.eatLoc;
        const idx = Number(btn.dataset.eatIdx);
        const item = loc === 'equipped' ? app.player.equippedItems[idx] : app.player.backpackItems[idx];
        if (!item) return;

        sound.playHeal();
        const healAmt = item.healAmount || 10;
        app.player.hp = Math.min(app.player.maxHp, app.player.hp + healAmt);

        if (loc === 'backpack') {
          app.player.backpackItems[idx] = null;
        } else {
          app.player.equippedItems[idx] = null;
        }

        if (item.id === 'kebab' && app.player.kebabs > 0) {
          app.player.kebabs--;
        }

        app.updateHUD();
        renderInventory();
      });
    });
  };

  renderInventory();
}

/**
 * Oddzielny modal Słownika Słówek (Talia Słów),
 * dzięki czemu słówka nie zajmują kratek plecaka.
 */
function openDictionaryModal(app, allWords, onBack) {
  const modalMount = document.getElementById('modal-mount');
  let selectedWordId = allWords[0]?.id;

  const renderDictionary = () => {
    const selectedWord = allWords.find((w) => w.id === selectedWordId) || allWords[0];
    const isUnlocked = selectedWord ? app.unlockedWordIds.has(selectedWord.id) : false;

    modalMount.innerHTML = `
      <div class="dicey-modal-backdrop dd-inv-backdrop">
        <div class="dd-inv-container" style="max-width: 900px;">
          <div style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #334155; background: #0f172a;">
            <div>
              <h2 style="margin: 0; color: #ffd166; font-family: 'Fredoka', sans-serif; font-size: 1.5rem;">
                📖 TALIA SŁÓWEK • SŁOWNIK JĘZYKOWY
              </h2>
              <span style="font-size: 0.85rem; color: #94a3b8;">
                Odkryte słownictwo: ${allWords.filter((w) => app.unlockedWordIds.has(w.id)).length} / ${allWords.length}
              </span>
            </div>
            <button id="dict-close-btn" style="background: #2563eb; color: white; border: none; padding: 8px 18px; border-radius: 10px; font-weight: 800; cursor: pointer; font-family: 'Fredoka', sans-serif;">
              ⬅️ WRÓĆ DO PLECAKA
            </button>
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; padding: 20px; height: 420px; box-sizing: border-box;">
            <!-- Lista słówek -->
            <div style="overflow-y: auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-content: start; padding-right: 6px;">
              ${allWords.map((w) => {
                const unlocked = app.unlockedWordIds.has(w.id);
                const isSelected = w.id === selectedWordId;

                return `
                  <div
                    class="dict-word-tile ${isSelected ? 'is-selected' : ''}"
                    data-word-id="${w.id}"
                    style="
                      padding: 10px;
                      border-radius: 10px;
                      background: ${unlocked ? '#1e293b' : 'rgba(15,23,42,0.6)'};
                      border: 2px ${isSelected ? 'solid #ffd166' : unlocked ? 'solid #334155' : 'dashed rgba(255,255,255,0.15)'};
                      cursor: pointer;
                      text-align: center;
                      box-shadow: ${isSelected ? '0 0 12px rgba(255,209,102,0.6)' : 'none'};
                    "
                  >
                    <div style="font-weight: 800; color: ${unlocked ? (w.color || '#fff') : '#64748b'}; font-size: 0.95rem; font-family: 'Fredoka', sans-serif;">
                      ${unlocked ? w.word : '???'}
                    </div>
                    <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">
                      ${unlocked ? w.category || 'Słowo' : 'Zablokowane'}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Karta ze szczegółami słówka -->
            <div style="background: #1e293b; border-radius: 14px; border: 2px solid ${selectedWord?.color || '#3b82f6'}; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
              ${selectedWord && isUnlocked ? `
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                    <h3 style="margin: 0; color: ${selectedWord.color || '#fff'}; font-family: 'Fredoka', sans-serif; font-size: 1.4rem;">
                      ${selectedWord.word}
                    </h3>
                    <span style="font-size: 0.75rem; color: #cbd5e1; background: rgba(0,0,0,0.3); padding: 3px 8px; border-radius: 999px;">
                      ${selectedWord.category}
                    </span>
                  </div>

                  <div style="margin: 12px 0; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 10px;">
                    <div style="color: #ffd166; font-weight: 800; font-size: 1rem;">
                      ${selectedWord.phonetic}
                    </div>
                  </div>

                  <div style="font-size: 0.9rem; line-height: 1.4; color: #f1f5f9;">
                    <p style="margin: 0 0 8px;"><b>Znaczenie:</b> ${selectedWord.plMeaning}</p>
                    <p style="margin: 0 0 8px; color: #38bdf8;"><b>Nghĩa:</b> ${selectedWord.vnMeaning}</p>
                    ${selectedWord.examplePl ? `<p style="margin: 0; font-size: 0.85rem; color: #94a3b8;"><em>„${selectedWord.examplePl}”</em></p>` : ''}
                  </div>
                </div>

                <div style="display: flex; justify-content: center; margin-top: 12px;">
                  <button id="dict-speak-btn" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                    🔊 Posłuchaj wymowy
                  </button>
                </div>
              ` : `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center; color: #64748b;">
                  <div>
                    <div style="font-size: 2.5rem; margin-bottom: 8px;">🔒</div>
                    <h4 style="margin: 0; color: #94a3b8;">Słowo jeszcze nieodkryte</h4>
                    <p style="font-size: 0.82rem; margin-top: 4px;">Pokonuj wyzwania na planszach i otwieraj skrzynie, aby poznać to słowo!</p>
                  </div>
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('dict-close-btn')?.addEventListener('click', () => {
      sound.playStep();
      onBack();
    });

    modalMount.querySelectorAll('.dict-word-tile').forEach((tile) => {
      tile.addEventListener('click', () => {
        sound.playStep();
        selectedWordId = tile.dataset.wordId;
        renderDictionary();
      });
    });

    document.getElementById('dict-speak-btn')?.addEventListener('click', () => {
      if (selectedWord?.cleanWord) {
        sound.speakPolish(selectedWord.cleanWord);
      }
    });
  };

  renderDictionary();
}
