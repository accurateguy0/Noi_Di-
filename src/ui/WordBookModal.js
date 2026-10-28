// Interfejs Plecaka (Inventory / Equipment) w stylu Dicey Dungeons
// 6 slotów na przechowanie w plecaku (IN BACKPACK)
// 2 sloty do użytku (EQUIPPED)
// Słownik dostępny jako dedykowana talia bez zajmowania slotów ekwipunku

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { ALL_ITEMS_CATALOG } from '../data/shopItems.js';
import {
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
  musicManager.playBookMusic();
  sound.playStep();

  initPlayerEquipment(app.player);

  const modalMount = document.getElementById('modal-mount');
  modalMount.classList.remove('hidden');

  const allWords = [
    ...SLANG_WORDS.slice(0, 5),
    ...BOARD_3_WORDS,
    ...BOARD_4_WORDS,
    ...BOARD_5_WORDS,
    ...BOARD_6_WORDS,
    ...CITY_1_WORDS,
    ...CITY_2_WORDS,
    ...CITY_3_WORDS,
    ...MODULE_3_1_WORDS,
    ...MODULE_3_2_WORDS,
    ...MODULE_3_3_WORDS,
    ...MODULE_4_1_WORDS,
    ...MODULE_4_2_WORDS,
    ...MODULE_4_3_WORDS,
    ...MODULE_5_1_WORDS,
    ...MODULE_5_2_WORDS
  ];

  let selectedLocation = 'equipped'; // 'equipped' | 'backpack' | 'dictionary'
  let selectedIndex = 0;
  let showDictionaryView = false;

  // Domyślny wybór pierwszego przedmiotu
  if (app.player.equippedItems[0]) {
    selectedLocation = 'equipped';
    selectedIndex = 0;
  } else if (app.player.backpackItems.some((it) => it !== null)) {
    selectedLocation = 'backpack';
    selectedIndex = app.player.backpackItems.findIndex((it) => it !== null);
  }

  const renderInventory = () => {
    initPlayerEquipment(app.player);

    const unlockedSlangsCount = allWords.filter((w) => app.unlockedWordIds.has(w.id)).length;

    // Pobierz aktualnie wybrany przedmiot
    let selectedItem = null;
    if (selectedLocation === 'equipped') {
      selectedItem = app.player.equippedItems[selectedIndex] || null;
    } else if (selectedLocation === 'backpack') {
      selectedItem = app.player.backpackItems[selectedIndex] || null;
    }

    // Jeśli nic nie wybrano, wybierz pierwszy dostępny przedmiot
    if (!selectedItem) {
      const eqItem = app.player.equippedItems.find((it) => it !== null);
      if (eqItem) {
        selectedLocation = 'equipped';
        selectedIndex = app.player.equippedItems.indexOf(eqItem);
        selectedItem = eqItem;
      } else {
        const bpItem = app.player.backpackItems.find((it) => it !== null);
        if (bpItem) {
          selectedLocation = 'backpack';
          selectedIndex = app.player.backpackItems.indexOf(bpItem);
          selectedItem = bpItem;
        }
      }
    }

    // Generowanie 6 slotów do plecaka (IN BACKPACK)
    const backpackSlotsHtml = [];
    for (let i = 0; i < 6; i++) {
      const item = app.player.backpackItems[i];
      const isSelected = selectedLocation === 'backpack' && selectedIndex === i;

      if (item) {
        backpackSlotsHtml.push(`
          <div
            class="dd-inv-slot-card ${isSelected ? 'is-selected' : ''}"
            style="--slot-accent: ${item.color || '#3b82f6'};"
            data-location="backpack"
            data-index="${i}"
          >
            <div class="dd-inv-card-inner">
              <div class="dd-inv-card-header" style="background: ${item.color || '#3b82f6'};">
                ${item.name}
              </div>
              <div class="dd-inv-card-slot-center">
                ${item.icon ? `<img src="${item.icon}" alt="${item.name}" style="width:36px;height:36px;object-fit:contain;" />` : `<span class="slot-item-emoji">🎒</span>`}
                <span class="slot-item-label">${item.bigStat || item.statBadge}</span>
              </div>
            </div>
          </div>
        `);
      } else {
        backpackSlotsHtml.push(`
          <div
            class="dd-inv-slot-empty ${isSelected ? 'is-selected' : ''}"
            data-location="backpack"
            data-index="${i}"
            style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;"
          >
            <span style="font-family: 'Fredoka', sans-serif; font-size: 0.76rem; color: #64748b; font-weight: 700; text-transform: uppercase;">
              [WOLNY SLOT ${i + 1}]
            </span>
          </div>
        `);
      }
    }

    // Generowanie 2 slotów do użytku (EQUIPPED)
    const equippedSlotsHtml = [];
    for (let i = 0; i < 2; i++) {
      const item = app.player.equippedItems[i];
      const isSelected = selectedLocation === 'equipped' && selectedIndex === i;

      if (item) {
        equippedSlotsHtml.push(`
          <div
            class="dd-equipped-slot slot-active ${isSelected ? 'is-selected' : ''}"
            style="--eq-c: ${item.color || '#10b981'}; min-height: 110px;"
            data-location="equipped"
            data-index="${i}"
          >
            <div class="eq-tag" style="color: #6ee7b7; font-weight: 800;">SLOT ${i + 1} • W UŻYCIU</div>
            <div class="eq-icon">
              ${item.icon ? `<img src="${item.icon}" alt="${item.name}" style="width:40px;height:40px;object-fit:contain;" />` : '⚔️'}
            </div>
            <div class="eq-name">${item.name}</div>
            <div class="eq-stat" style="color: #ffd166; font-weight: 800;">${item.statBadge}</div>
          </div>
        `);
      } else {
        equippedSlotsHtml.push(`
          <div
            class="dd-equipped-slot slot-empty ${isSelected ? 'is-selected' : ''}"
            data-location="equipped"
            data-index="${i}"
            style="min-height: 110px;"
          >
            <div class="eq-tag">SLOT DO UŻYTKU ${i + 1}</div>
            <div class="eq-icon" style="opacity: 0.35;">—</div>
            <div class="eq-name" style="color: #94a3b8;">[WOLNY SLOT]</div>
          </div>
        `);
      }
    }

    modalMount.innerHTML = `
      <div class="dicey-modal-backdrop dd-inv-backdrop">
        <div class="dd-inv-container" style="max-width: 980px;">
          <!-- Tło lochu: pochodnie w stylu Dicey Dungeons -->
          <div class="dd-inv-torch left" aria-hidden="true"><div class="torch-flame"></div></div>
          <div class="dd-inv-torch right" aria-hidden="true"><div class="torch-flame"></div></div>

          <!-- Główna zawartość: Lewo (PLECAK 6 slotów) i Prawo (EQUIPPED 2 sloty + INSPEKTOR) -->
          <div class="dd-inv-main-grid" style="grid-template-columns: 1.1fr 0.9fr; gap: 24px;">
            <!-- Lewa strona: W PLECAKU (6 slotów na przechowanie) -->
            <div class="dd-inv-backpack-pane">
              <div class="dd-inv-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                <span>IN BACKPACK • W PLECAKU</span>
                <span style="font-size: 0.85rem; color: #94a3b8; font-weight: 700; background: rgba(0,0,0,0.4); padding: 2px 10px; border-radius: 999px;">
                  ${app.player.backpackItems.filter(Boolean).length} / 6
                </span>
              </div>
              <div class="dd-inv-backpack-grid" style="grid-template-columns: repeat(3, 1fr); grid-auto-rows: 125px; gap: 12px;">
                ${backpackSlotsHtml.join('')}
              </div>

              <!-- Przycisk do talii słownika u dołu lewej kolumny -->
              <div style="margin-top: 14px; display: flex; justify-content: center;">
                <button
                  id="inv-open-words-btn"
                  style="
                    padding: 8px 18px;
                    border-radius: 12px;
                    background: rgba(6, 214, 160, 0.15);
                    border: 1.5px solid #06d6a0;
                    color: #06d6a0;
                    font-family: 'Fredoka', sans-serif;
                    font-weight: 800;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.9rem;
                    transition: all 0.15s ease;
                  "
                  onmouseover="this.style.background='#06d6a0'; this.style.color='#0f172a';"
                  onmouseout="this.style.background='rgba(6, 214, 160, 0.15)'; this.style.color='#06d6a0';"
                >
                  <span>📖</span> TALIA SŁOWNIKA (${unlockedSlangsCount}/${allWords.length})
                </button>
              </div>
            </div>

            <!-- Prawa strona: EQUIPPED (2 sloty do użytku) oraz INSPEKTOR -->
            <div class="dd-inv-right-pane" style="display: flex; flex-direction: column; gap: 16px;">
              <!-- Sekcja: EQUIPPED (2 sloty do użytku) -->
              <div class="dd-inv-equipped-section">
                <div class="dd-inv-sub-title" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span>EQUIPPED • DO UŻYTKU (2 SLOTY)</span>
                  <span style="font-size: 0.8rem; color: #34d399; font-weight: 800;">
                    ${app.player.equippedItems.filter(Boolean).length} / 2 AKTYWNE
                  </span>
                </div>
                <div class="dd-inv-equipped-rack" style="grid-template-columns: repeat(2, 1fr); gap: 12px;">
                  ${equippedSlotsHtml.join('')}
                </div>
              </div>

              <!-- Podgląd wybranego przedmiotu (Card Inspector) -->
              <div class="dd-inv-inspector-wrap" style="flex: 1; min-height: 0;">
                ${selectedItem ? `
                  <div class="dd-inspector-card" style="--inspect-color: ${selectedItem.color || '#3a86ff'}; height: 100%;">
                    <div class="dd-inspector-header" style="background: ${selectedItem.color || '#3a86ff'}; display: flex; justify-content: space-between; align-items: center;">
                      <span>${selectedItem.name}</span>
                      <span style="font-size: 0.75rem; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 999px;">
                        ${selectedLocation === 'equipped' ? 'W UŻYCIU' : 'W PLECAKU'}
                      </span>
                    </div>
                    <div class="dd-inspector-body">
                      <div class="dd-inspector-slot-box">
                        ${selectedItem.icon ? `<img src="${selectedItem.icon}" alt="${selectedItem.name}" style="width:48px;height:48px;object-fit:contain;margin-bottom:4px;" />` : ''}
                        <span class="dd-inspector-big-stat">${selectedItem.bigStat || selectedItem.statBadge}</span>
                        <div class="dd-inspector-sub">${selectedItem.subStatText || 'PRZEDMIOT'}</div>
                      </div>

                      <div class="dd-inspector-desc-box">
                        <p class="dd-inspector-desc-pl">${selectedItem.descPl ? selectedItem.descPl.replace(/\n/g, '<br/>') : 'Przedmiot w ekwipunku bohatera.'}</p>
                        ${selectedItem.descVn ? `<p class="dd-inspector-desc-vn">${selectedItem.descVn.replace(/\n/g, '<br/>')}</p>` : ''}
                      </div>

                      <div class="dd-inspector-actions" style="display: flex; gap: 10px; justify-content: center; margin-top: 8px;">
                        ${selectedLocation === 'backpack' ? `
                          <button class="btn-dd-inv-action" id="inv-equip-btn" style="background: #10b981; color: white; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 800; cursor: pointer;">
                            ⭐ ZAŁÓŻ DO UŻYTKU
                          </button>
                        ` : `
                          <button class="btn-dd-inv-action" id="inv-unequip-btn" style="background: #6366f1; color: white; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 800; cursor: pointer;">
                            🎒 SCHOWAJ DO PLECAKA
                          </button>
                        `}

                        ${selectedItem.actionType === 'eat' ? `
                          <button class="btn-dd-inv-action btn-inv-eat" id="inv-eat-item-btn" style="background: #f59e0b; color: white; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 800; cursor: pointer;">
                            🍖 ZJEDZ (+${selectedItem.healAmount || 10} HP)
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                ` : `
                  <div class="dd-inspector-card" style="height: 100%; display: flex; align-items: center; justify-content: center; text-align: center; color: #64748b; padding: 20px;">
                    <div>
                      <div style="font-size: 2.5rem; margin-bottom: 8px;">🎒</div>
                      <h3 style="margin: 0; color: #94a3b8; font-family: 'Fredoka', sans-serif;">Pusty slot</h3>
                      <p style="font-size: 0.85rem; margin-top: 4px;">Wybierz przedmiot z plecaka lub wyposażenia, aby zobaczyć szczegóły i założyć.</p>
                    </div>
                  </div>
                `}
              </div>
            </div>
          </div>

          <!-- Dolna belka nawigacji w stylu Dicey Dungeons -->
          <div class="dd-inv-bottom-bar">
            <div class="dd-inv-hero-info">
              <div class="dd-inv-hero-img-wrap">
                <img src="${app.player.avatar || './assets/Warrior.png'}" alt="${app.player.heroName || 'Bohater'}" onerror="this.src='./assets/Warrior.png'" />
              </div>
              <div class="dd-inv-hero-details">
                <span class="dd-hero-name">${(app.player.heroName || app.player.characterClass || 'Bohater').toUpperCase()}</span>
                <span class="dd-hero-sub">Klasa: ${app.player.characterClass || 'Bohater'} • Poziom A0</span>
              </div>
            </div>

            <div class="dd-inv-stats-cluster">
              <div class="dd-inv-hp-pill">
                HP: <b>${app.player.hp} / ${app.player.maxHp}</b>
              </div>
              <div class="dd-inv-coin-pill">
                Monety: <b>${app.player.coins}</b>
              </div>
              <div class="dd-inv-dice-pill">
                Kości: <b>x${app.player.diceCount}</b>
              </div>
              <div class="dd-inv-lvl-pill">
                POZIOM <b>${app.player.level}</b> (${Math.max(0, app.player.xpToNext - app.player.xp)} EXP)
              </div>
            </div>

            <button class="btn-dd-inv-back" id="inv-back-btn">
              POWRÓT (BACK)
            </button>
          </div>
        </div>
      </div>
    `;

    // Obsługa zamknięcia okna
    const handleClose = () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        musicManager.resumeBoardMusic();
        app.renderBoard();
        app.updateHUD();
      });
    };

    const backBtn = modalMount.querySelector('#inv-back-btn');
    if (backBtn) backBtn.addEventListener('click', handleClose);

    // Kliknięcie w slot w plecaku lub wyposażeniu
    modalMount.querySelectorAll('[data-location]').forEach((el) => {
      el.addEventListener('click', () => {
        sound.playStep();
        selectedLocation = el.dataset.location;
        selectedIndex = Number(el.dataset.index);
        renderInventory();
      });
    });

    // Akcja: ZAŁÓŻ DO UŻYTKU (EQUIP)
    const equipBtn = modalMount.querySelector('#inv-equip-btn');
    if (equipBtn && selectedLocation === 'backpack') {
      equipBtn.addEventListener('click', () => {
        const itemToEquip = app.player.backpackItems[selectedIndex];
        if (!itemToEquip) return;

        sound.playSuccess();

        // Szukaj wolnego slotu w equipped (z 2 dostępnych)
        const freeEqIdx = app.player.equippedItems.findIndex((s) => s === null);
        if (freeEqIdx !== -1) {
          app.player.equippedItems[freeEqIdx] = itemToEquip;
          app.player.backpackItems[selectedIndex] = null;
          selectedLocation = 'equipped';
          selectedIndex = freeEqIdx;
        } else {
          // Jeśli oba sloty są zajęte, zamień ze slotem 0
          const oldEquipped = app.player.equippedItems[0];
          app.player.equippedItems[0] = itemToEquip;
          app.player.backpackItems[selectedIndex] = oldEquipped;
          selectedLocation = 'equipped';
          selectedIndex = 0;
        }

        app.showTemporaryPlayerBubble(`Założono: ${itemToEquip.name}!`, 1400);
        app.updateHUD();
        renderInventory();
      });
    }

    // Akcja: SCHOWAJ DO PLECAKA (UNEQUIP)
    const unequipBtn = modalMount.querySelector('#inv-unequip-btn');
    if (unequipBtn && selectedLocation === 'equipped') {
      unequipBtn.addEventListener('click', () => {
        const itemToUnequip = app.player.equippedItems[selectedIndex];
        if (!itemToUnequip) return;

        // Szukaj wolnego slotu w plecaku (z 6 dostępnych)
        const freeBpIdx = app.player.backpackItems.findIndex((s) => s === null);
        if (freeBpIdx !== -1) {
          sound.playStep();
          app.player.backpackItems[freeBpIdx] = itemToUnequip;
          app.player.equippedItems[selectedIndex] = null;
          selectedLocation = 'backpack';
          selectedIndex = freeBpIdx;
          app.showTemporaryPlayerBubble(`Schowano do plecaka: ${itemToUnequip.name}!`, 1400);
        } else {
          sound.playMiss();
          app.showTemporaryPlayerBubble('Plecak jest pełny (6 slotów)!', 1500);
        }

        app.updateHUD();
        renderInventory();
      });
    }

    // Akcja: ZJEDZ / UŻYJ PRZEDMIOTU JEDNORAZOWEGO
    const eatBtn = modalMount.querySelector('#inv-eat-item-btn');
    if (eatBtn && selectedItem) {
      eatBtn.addEventListener('click', () => {
        sound.playSuccess();
        const healAmt = selectedItem.healAmount || 10;
        app.player.hp = Math.min(app.player.maxHp, app.player.hp + healAmt);

        if (selectedLocation === 'backpack') {
          app.player.backpackItems[selectedIndex] = null;
        } else if (selectedLocation === 'equipped') {
          app.player.equippedItems[selectedIndex] = null;
        }

        if (selectedItem.id === 'kebab' && app.player.kebabs > 0) {
          app.player.kebabs--;
        }

        sound.playHeal();
        app.showTemporaryPlayerBubble(`Zjedzono ${selectedItem.name}! +${healAmt} HP`, 1500);
        app.updateHUD();
        renderInventory();
      });
    }

    // Akcja: Otwarcie talii słownika
    const openWordsBtn = modalMount.querySelector('#inv-open-words-btn');
    if (openWordsBtn) {
      openWordsBtn.addEventListener('click', () => {
        sound.playStep();
        openDictionaryModal(app, allWords, () => {
          renderInventory();
        });
      });
    }
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
