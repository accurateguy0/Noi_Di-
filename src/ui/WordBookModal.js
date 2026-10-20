// Interfejs Księgi Słów / Plecaka (WordBook / Inventory) w stylu Dicey Dungeons

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
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

export function openInventoryModal(app, initialSelectedId = null, filterCategory = null) {
  musicManager.playBookMusic();
  sound.playStep();
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

  let selectedItemId = initialSelectedId;

  const renderInventory = () => {
    // Przygotuj listę kafelków w plecaku (IN BACKPACK)
    const backpackItems = [];

    // 1. Zakupione przedmioty z kramiku (Sneakersy, Energetyk, Kebab)
    if (app.player.boughtShopItemIds.has('sneakers') || app.player.boughtSneakers) {
      backpackItems.push({
        id: 'item_sneakers',
        category: 'equipment',
        name: 'SNEAKERSY',
        color: '#8338ec',
        statEmoji: '👟',
        bigStat: '+4',
        subStatText: 'MAX HP +4',
        descPl: 'Wygodne buty szkolne! Zwiększają na stałe Twoje maksymalne punkty zdrowia o +4 HP.',
        descVn: 'Giày thể thao êm ái! Tăng vĩnh viễn +4 HP tối đa.',
        actionType: null,
        isUnlocked: true
      });
    }

    if (app.player.boughtShopItemIds.has('energy_drink') || app.player.bonusTimeSec > 0) {
      backpackItems.push({
        id: 'item_energy_drink',
        category: 'equipment',
        name: 'ENERGETYK',
        color: '#00b4d8',
        statEmoji: '⚡',
        bigStat: `+${app.player.bonusTimeSec}s`,
        subStatText: 'CZAS W MINIGRACH',
        descPl: `Napój na refleks! Daje dodatkowy czas (+${app.player.bonusTimeSec}s) na odpowiedź w minigrach czasowych.`,
        descVn: `Nước tăng lực! Tăng thêm +${app.player.bonusTimeSec} giây trong các thử thách tính giờ.`,
        actionType: null,
        isUnlocked: true
      });
    }

    if (app.player.kebabs > 0) {
      backpackItems.push({
        id: 'item_kebab',
        category: 'consumable',
        name: 'KEBAB',
        color: '#f77f00',
        statEmoji: '🥙',
        bigStat: `×${app.player.kebabs}`,
        subStatText: 'ULECZ +10 HP',
        descPl: `Ciepły kebab z sosem! Przedmiot jednorazowy — natychmiast regeneruje +10 punktów życia (W torbie: ${app.player.kebabs}).`,
        descVn: `Bánh mì Kebab thơm ngon! Hồi phục ngay lập tức +10 HP.`,
        actionType: 'eat',
        isUnlocked: true
      });
    }

    // 2. Karty słownictwa / slangów
    allWords.forEach(w => {
      const isUnlocked = app.unlockedWordIds.has(w.id);
      backpackItems.push({
        id: w.id,
        category: 'slang',
        name: w.word.toUpperCase(),
        color: w.color,
        statEmoji: w.emoji,
        bigStat: w.phonetic,
        subStatText: w.category,
        descPl: `🇵🇱 Znaczenie: ${w.plMeaning}\n💬 Przykład: ${w.examplePl.replace('\n', ' ')}`,
        descVn: `🇻🇳 Nghĩa: ${w.vnMeaning}\n💬 Ví dụ: ${w.exampleVn.replace('\n', ' ')}`,
        cleanWord: w.cleanWord,
        actionType: isUnlocked ? 'speak' : null,
        isUnlocked: isUnlocked
      });
    });

    // Wybierz domyślny podgląd, jeśli brak lub nieprawidłowy
    if (!selectedItemId || !backpackItems.find(it => it.id === selectedItemId)) {
      if (filterCategory === 'equipment') {
        const eqItem = backpackItems.find(it => it.category === 'equipment' || it.category === 'consumable');
        selectedItemId = eqItem ? eqItem.id : (backpackItems.find(it => it.isUnlocked)?.id || backpackItems[0]?.id);
      } else if (filterCategory === 'slang') {
        const slangItem = backpackItems.find(it => it.category === 'slang' && it.isUnlocked);
        selectedItemId = slangItem ? slangItem.id : (backpackItems.find(it => it.category === 'slang')?.id || backpackItems[0]?.id);
      } else {
        selectedItemId = backpackItems.find(it => it.isUnlocked)?.id || backpackItems[0]?.id || null;
      }
    }
    const selectedItem = backpackItems.find(it => it.id === selectedItemId) || backpackItems[0];

    // Siatka plecaka: dynamiczna liczba pól (wielokrotność 4 dopasowana do wierszy)
    const TOTAL_GRID_SLOTS = Math.max(16, Math.ceil(backpackItems.length / 4) * 4);
    const slotsHtml = [];

    for (let i = 0; i < TOTAL_GRID_SLOTS; i++) {
      if (i < backpackItems.length) {
        const item = backpackItems[i];
        const isSelected = item.id === selectedItemId;

        if (item.category === 'slang' && !item.isUnlocked) {
          slotsHtml.push(`
            <div class="dd-inv-slot-card slot-locked ${isSelected ? 'is-selected' : ''}" data-item-id="${item.id}">
              <div class="dd-inv-card-inner">
                <div class="dd-inv-card-header header-locked">🔒 ? ? ?</div>
                <div class="dd-inv-card-slot-center">
                  <span class="slot-locked-icon">❓</span>
                </div>
              </div>
            </div>
          `);
        } else {
          slotsHtml.push(`
            <div class="dd-inv-slot-card ${isSelected ? 'is-selected' : ''}" style="--slot-accent: ${item.color}" data-item-id="${item.id}">
              <div class="dd-inv-card-inner">
                <div class="dd-inv-card-header" style="background: ${item.color}">${item.name}</div>
                <div class="dd-inv-card-slot-center">
                  <span class="slot-item-emoji">${item.statEmoji}</span>
                  <span class="slot-item-label">${item.bigStat}</span>
                </div>
              </div>
            </div>
          `);
        }
      } else {
        // Puste pole siatki (dashed)
        slotsHtml.push(`
          <div class="dd-inv-slot-empty"></div>
        `);
      }
    }

    const unlockedSlangsCount = allWords.filter(w => app.unlockedWordIds.has(w.id)).length;

    modalMount.innerHTML = `
      <div class="dicey-modal-backdrop dd-inv-backdrop">
        <div class="dd-inv-container">
          <!-- Tło lochu: pochodnie i filary w stylu Dicey Dungeons -->
          <div class="dd-inv-torch left" aria-hidden="true"><div class="torch-flame"></div></div>
          <div class="dd-inv-torch right" aria-hidden="true"><div class="torch-flame"></div></div>

          <!-- Główna zawartość: Lewo (PLECAK) i Prawo (PODGLĄD + ZAŁOŻONE) -->
          <div class="dd-inv-main-grid">
            <!-- Lewa strona: W PLECAKU (IN BACKPACK) -->
            <div class="dd-inv-backpack-pane">
              <div class="dd-inv-section-title">
                IN BACKPACK • W PLECAKU
              </div>
              <div class="dd-inv-backpack-grid">
                ${slotsHtml.join('')}
              </div>
            </div>

            <!-- Prawa strona: PODGLĄD KARTY (GÓRA) oraz EQUIPPED (DÓŁ) -->
            <div class="dd-inv-right-pane">
              <!-- Podgląd wybranej karty (Card Inspector jak PICKPOCKET) -->
              <div class="dd-inv-inspector-wrap">
                ${selectedItem ? `
                  <div class="dd-inspector-card" style="--inspect-color: ${selectedItem.color || '#3a86ff'}">
                    <div class="dd-inspector-header" style="background: ${selectedItem.color || '#3a86ff'}">
                      <span>${selectedItem.name}</span>
                    </div>
                    <div class="dd-inspector-body">
                      <div class="dd-inspector-slot-box">
                        <span class="dd-inspector-emoji">${selectedItem.statEmoji}</span>
                        <span class="dd-inspector-big-stat">${selectedItem.bigStat}</span>
                        <div class="dd-inspector-sub">${selectedItem.subStatText}</div>
                      </div>

                      <div class="dd-inspector-desc-box">
                        <p class="dd-inspector-desc-pl">${selectedItem.descPl.replace(/\n/g, '<br/>')}</p>
                        <p class="dd-inspector-desc-vn">${selectedItem.descVn.replace(/\n/g, '<br/>')}</p>
                      </div>

                      <div class="dd-inspector-actions">
                        ${selectedItem.actionType === 'eat' ? `
                          <button class="btn-dd-inv-action btn-inv-eat" id="inv-eat-kebab-btn">
                            🥙 Zjedz Kebab (+10 HP)
                          </button>
                        ` : ''}
                        ${selectedItem.actionType === 'speak' ? `
                          <button class="btn-dd-inv-action btn-inv-speak" id="inv-speak-btn" data-speak="${selectedItem.cleanWord}">
                            🔊 Posłuchaj wymowy
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Sekcja: EQUIPPED (ZAŁOŻONE) -->
              <div class="dd-inv-equipped-section">
                <div class="dd-inv-sub-title">EQUIPPED • ZAŁOŻONE</div>
                <div class="dd-inv-equipped-rack">
                  <!-- Slot 1: Buty -->
                  ${(app.player.boughtShopItemIds.has('sneakers') || app.player.boughtSneakers) ? `
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #8338ec;" data-item-id="item_sneakers">
                      <div class="eq-tag">BUTY</div>
                      <div class="eq-icon">👟</div>
                      <div class="eq-name">SNEAKERSY</div>
                      <div class="eq-stat">+4 Max HP</div>
                    </div>
                  ` : `
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">BUTY</div>
                      <div class="eq-icon">👟</div>
                      <div class="eq-name">[Brak butów]</div>
                    </div>
                  `}

                  <!-- Slot 2: Napój -->
                  ${(app.player.boughtShopItemIds.has('energy_drink') || app.player.bonusTimeSec > 0) ? `
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #00b4d8;" data-item-id="item_energy_drink">
                      <div class="eq-tag">NAPÓJ</div>
                      <div class="eq-icon">⚡</div>
                      <div class="eq-name">ENERGETYK</div>
                      <div class="eq-stat">+${app.player.bonusTimeSec}s czas</div>
                    </div>
                  ` : `
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">NAPÓJ</div>
                      <div class="eq-icon">⚡</div>
                      <div class="eq-name">[Brak napoju]</div>
                    </div>
                  `}

                  <!-- Slot 3: Jedzenie -->
                  ${app.player.kebabs > 0 ? `
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #f77f00;" data-item-id="item_kebab">
                      <div class="eq-tag">JEDZENIE</div>
                      <div class="eq-icon">🥙</div>
                      <div class="eq-name">KEBAB</div>
                      <div class="eq-stat">×${app.player.kebabs} w torbie</div>
                    </div>
                  ` : `
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">JEDZENIE</div>
                      <div class="eq-icon">🥙</div>
                      <div class="eq-name">[Brak kebaba]</div>
                    </div>
                  `}

                  <!-- Slot 4: Talia Słów -->
                  <div class="dd-equipped-slot slot-active" style="--eq-c: #06d6a0;">
                    <div class="eq-tag">TALIA</div>
                    <div class="eq-icon">📖</div>
                    <div class="eq-name">SŁOWNIK</div>
                    <div class="eq-stat">${unlockedSlangsCount} / ${allWords.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dolna belka nawigacji w stylu Dicey Dungeons -->
          <div class="dd-inv-bottom-bar">
            <div class="dd-inv-hero-info">
              <div class="dd-inv-hero-img-wrap">
                <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
              </div>
              <div class="dd-inv-hero-details">
                <span class="dd-hero-name">TAN</span>
                <span class="dd-hero-sub">13 lat • Poziom A0</span>
              </div>
            </div>

            <div class="dd-inv-stats-cluster">
              <div class="dd-inv-hp-pill">
                ❤️ <b>${app.player.hp} / ${app.player.maxHp}</b>
              </div>
              <div class="dd-inv-coin-pill">
                🪙 <b>${app.player.coins}</b>
              </div>
              <div class="dd-inv-dice-pill">
                🎲 <b>x${app.player.diceCount}</b>
              </div>
              <div class="dd-inv-lvl-pill">
                POZIOM <b>${app.player.level}</b> (⭐ ${Math.max(0, app.player.xpToNext - app.player.xp)} EXP)
              </div>
            </div>

            <button class="btn-dd-inv-back" id="inv-back-btn">
              POWRÓT (BACK)
            </button>
          </div>
        </div>
      </div>
    `;

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

    // Obsługa kliknięcia kafelków w plecaku i w sekcji wyposażenia
    modalMount.querySelectorAll('.dd-inv-slot-card, .dd-equipped-slot.slot-active').forEach(slot => {
      slot.addEventListener('click', () => {
        const id = slot.dataset.itemId;
        if (id && id !== selectedItemId) {
          sound.playStep();
          selectedItemId = id;
          renderInventory();
        }
      });
    });

    // Akcja jedzenia kebaba
    const eatBtn = modalMount.querySelector('#inv-eat-kebab-btn');
    if (eatBtn) {
      eatBtn.addEventListener('click', () => {
        app.eatKebab();
        renderInventory();
      });
    }

    // Akcja odsłuchu wymowy słowa
    const speakBtn = modalMount.querySelector('#inv-speak-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        sound.speakPolish(speakBtn.dataset.speak);
      });
    }
  };

  renderInventory();
}
