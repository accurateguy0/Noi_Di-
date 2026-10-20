// Menedżer spotkań i minigier w Mieście (Moduł 2: Sklep, Kebab, Biletomat, Kontroler)

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from '../ui/victoryScreen.js';
import { OpenTheBoxGame } from '../games/openTheBoxGame.js';
import { RankOrderGame } from '../games/rankOrderGame.js';
import { KebabMasterGame } from '../games/kebabMasterGame.js';
import { CharacterDialogGame } from '../games/characterDialogGame.js';

export class CityEncounterManager {
  constructor(app) {
    this.app = app;
  }

  launchCityThoughtsShop(nodeId = 'c1_node_3') {
    this.app.closeModal();
    const arenaMount = this.app.openArena();

    const productsList = [
      { id: 'bulka', name: 'Bułka', icon: '🥖', image: './assets/slowka/bulka.jpg', fallback: './public/assets/slowka/bulka.jpg', phrase: 'Poproszę bułkę.', sub: 'Świeże pieczywo' },
      { id: 'woda', name: 'Woda', icon: '💧', image: './assets/slowka/woda.jpg', fallback: './public/assets/slowka/woda.jpg', phrase: 'Poproszę butelkę wody.', sub: 'Woda mineralna' },
      { id: 'czipsy', name: 'Czipsy', icon: '🥔', image: './assets/slowka/czipsy.jpg', fallback: './public/assets/slowka/czipsy.jpg', phrase: 'Poproszę czipsy.', sub: 'Przekąska' },
      { id: 'drozdzowka', name: 'Drożdżówka', icon: '🥐', image: './assets/drozdzowka.png', fallback: './public/assets/drozdzowka.png', phrase: 'Poproszę drożdżówkę.', sub: 'Słodka bułka' },
      { id: 'jablko', name: 'Jabłko', icon: '🍎', image: './assets/apple.png', fallback: './public/assets/apple.png', phrase: 'Poproszę świeże jabłko.', sub: 'Owoc' }
    ];

    let currentStepIdx = 0; // 0: Produkty, 1: Reklamówka, 2: Płatność, 3: Podsumowanie
    const selectedProductIds = new Set(['bulka', 'woda']); // domyślnie 2 produkty

    const renderStep = () => {
      const playerHpPct = Math.max(0, Math.min(100, (this.app.player.hp / this.app.player.maxHp) * 100));
      let stageContentHtml = '';

      if (currentStepIdx === 0) {
        // KROK 1: Wybór produktów (wielokrotny wybór jak w quizie)
        stageContentHtml = `
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 1 / 3: PRODUKTY</span>
              <h3 class="ctc-title">Co wrzucasz do koszyka? 🛒</h3>
              <p class="ctc-subtitle">Zaznacz produkty, które kupujesz (wybór wielokrotny):</p>
            </div>

            <div class="ctc-products-grid" id="ctc-products-grid">
              ${productsList.map(p => {
                const isSelected = selectedProductIds.has(p.id);
                return `
                  <div class="btn-product-tile ${isSelected ? 'is-selected' : ''}" data-id="${p.id}" data-phrase="${p.phrase}">
                    <div class="pt-checkbox">✔</div>
                    ${p.image ? `
                      <img
                        src="${p.image}"
                        alt="${p.name}"
                        class="pt-img"
                        onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='${p.fallback}';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                      />
                      <span class="pt-icon" style="display: none;">${p.icon}</span>
                    ` : `
                      <span class="pt-icon">${p.icon}</span>
                    `}
                    <span class="pt-name">${p.name}</span>
                    <span class="pt-sub">${p.sub}</span>
                  </div>
                `;
              }).join('')}
            </div>

            <button type="button" class="btn-ctc-confirm" id="ctc-confirm-products-btn" ${selectedProductIds.size === 0 ? 'disabled' : ''}>
              ZATWIERDŹ KOSZYK (${selectedProductIds.size}) ✔
            </button>
          </div>
        `;
      } else if (currentStepIdx === 1) {
        // KROK 2: Reklamówka (proste Tak / Nie)
        stageContentHtml = `
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 2 / 3: REKLAMÓWKA</span>
              <h3 class="ctc-title">Czy potrzebujesz reklamówki? 🛍️</h3>
              <p class="ctc-subtitle">Odpowiedz kasjerce krótko i na temat:</p>
            </div>

            <div class="ctc-simple-choice-grid">
              <button type="button" class="btn-simple-choice choice-yes" data-val="yes_bag" data-phrase="Tak, poproszę reklamówkę.">
                <span class="sc-icon">🛍️</span>
                <span class="sc-title">TAK</span>
                <span class="sc-desc">„Tak, poproszę reklamówkę.”</span>
              </button>

              <button type="button" class="btn-simple-choice choice-no" data-val="no_bag" data-phrase="Nie dziękuję, mam swoją torbę.">
                <span class="sc-icon">🎒</span>
                <span class="sc-title">NIE</span>
                <span class="sc-desc">„Nie dziękuję, mam torbę.”</span>
              </button>
            </div>
          </div>
        `;
      } else if (currentStepIdx === 2) {
        // KROK 3: Płatność (Karta / Gotówka)
        stageContentHtml = `
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 3 / 3: PŁATNOŚĆ</span>
              <h3 class="ctc-title">Jak płacisz przy kasie? 💰</h3>
              <p class="ctc-subtitle">Wybierz sposób uregulowania rachunku:</p>
            </div>

            <div class="ctc-simple-choice-grid">
              <button type="button" class="btn-simple-choice choice-yes" data-val="card" data-phrase="Będę płacić kartą.">
                <img
                  src="./assets/slowka/karta_kredytowa.jpg"
                  alt="Karta"
                  class="sc-img"
                  onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='./public/assets/slowka/karta_kredytowa.jpg';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                />
                <span class="sc-icon" style="display: none;">💳</span>
                <span class="sc-title">KARTA</span>
                <span class="sc-desc">„Zapłacę kartą zbliżeniowo.”</span>
              </button>

              <button type="button" class="btn-simple-choice choice-no" data-val="cash" data-phrase="Zapłacę gotówką.">
                <img
                  src="./assets/slowka/gotowka.jpg"
                  alt="Gotówka"
                  class="sc-img"
                  onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='./public/assets/slowka/gotowka.jpg';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                />
                <span class="sc-icon" style="display: none;">💵</span>
                <span class="sc-title">GOTÓWKA</span>
                <span class="sc-desc">„Zapłacę gotówką.”</span>
              </button>
            </div>
          </div>
        `;
      } else {
        // KROK 4: Podsumowanie (Plan gotowy)
        const chosenProducts = productsList.filter(p => selectedProductIds.has(p.id));
        const itemsSummary = chosenProducts.map(p => `${p.icon} ${p.name}`).join(', ');
        const bagSummary = this.app.cityShoppingChoices.bag === 'no_bag' ? '🎒 Własna torba (Nie)' : '🛍️ Reklamówka (Tak)';
        const paySummary = this.app.cityShoppingChoices.payment === 'cash' ? '💵 Gotówka' : '💳 Karta zbliżeniowo';

        stageContentHtml = `
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge" style="background:#10b981;">PLAN GOTOWY!</span>
              <h3 class="ctc-title">Twoje myśli są uporządkowane! 🛒✨</h3>
              <p class="ctc-subtitle">Pamiętaj swoje wybory podczas rozmowy z kasjerką:</p>
            </div>

            <div class="dd-shopping-recap-card" style="width:100%; max-width:540px; margin-bottom:18px;">
              <div class="recap-row">
                <span class="recap-label">📦 Produkty:</span>
                <strong class="recap-val">${itemsSummary}</strong>
              </div>
              <div class="recap-row">
                <span class="recap-label">🛍️ Reklamówka:</span>
                <strong class="recap-val">${bagSummary}</strong>
              </div>
              <div class="recap-row">
                <span class="recap-label">💰 Płatność:</span>
                <strong class="recap-val">${paySummary}</strong>
              </div>
            </div>

            <button type="button" class="btn-ctc-confirm" id="ctc-go-to-cashier-btn" style="background: #10b981;">
              IDĘ DO KASY! 🛒
            </button>
          </div>
        `;
      }

      arenaMount.innerHTML = `
        <div class="dd-combat-arena city-thoughts-arena">
          <!-- Prawy górny róg: Widmo (15/15 HP - bez zadawania obrażeń) -->
          <div class="dd-arena-fighter dd-arena-opponent" id="thoughts-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Widmo 👻</span>
              </div>
              <div class="dd-fighter-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: 100%; background: #a855f7;"></div>
                <span class="dd-fighter-hp-text">15/15</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Widmo"
                class="dd-fighter-sprite sprite-mysli"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta myśli -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            ${stageContentHtml}
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player">
            <div class="dd-sprite-container player-sprite-container">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">${this.app.player.name || 'Tan'}</span>
              </div>
              <div class="dd-fighter-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${playerHpPct}%;"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      // Event listenery w zależności od kroku
      if (currentStepIdx === 0) {
        const tiles = arenaMount.querySelectorAll('.btn-product-tile');
        const confirmBtn = arenaMount.querySelector('#ctc-confirm-products-btn');

        tiles.forEach(tile => {
          tile.addEventListener('click', () => {
            const id = tile.dataset.id;
            const phrase = tile.dataset.phrase;
            if (selectedProductIds.has(id)) {
              selectedProductIds.delete(id);
              tile.classList.remove('is-selected');
            } else {
              selectedProductIds.add(id);
              tile.classList.add('is-selected');
              sound.speakPolish(phrase);
            }
            sound.playStep();
            if (confirmBtn) {
              confirmBtn.disabled = selectedProductIds.size === 0;
              confirmBtn.textContent = `ZATWIERDŹ KOSZYK (${selectedProductIds.size}) ✔`;
            }
          });
        });

        if (confirmBtn) {
          confirmBtn.addEventListener('click', () => {
            if (selectedProductIds.size === 0) return;
            sound.playStep();
            const chosen = productsList.filter(p => selectedProductIds.has(p.id));
            const polishNames = chosen.map(p => p.name.toLowerCase());
            this.app.cityShoppingChoices.items = polishNames;
            this.app.cityShoppingChoices.itemsText = `Poproszę ${polishNames.join(' i ')}.`;
            currentStepIdx = 1;
            renderStep();
          });
        }
      } else if (currentStepIdx === 1 || currentStepIdx === 2) {
        const choices = arenaMount.querySelectorAll('.btn-simple-choice');
        choices.forEach(btn => {
          btn.addEventListener('click', () => {
            const val = btn.dataset.val;
            const phrase = btn.dataset.phrase;
            sound.playStep();
            sound.speakPolish(phrase);

            if (currentStepIdx === 1) {
              this.app.cityShoppingChoices.bag = val;
              currentStepIdx = 2;
            } else {
              this.app.cityShoppingChoices.payment = val;
              currentStepIdx = 3;
            }

            renderStep();
          });
        });
      } else {
        const finishBtn = arenaMount.querySelector('#ctc-go-to-cashier-btn');
        if (finishBtn) {
          finishBtn.addEventListener('click', () => {
            sound.playFanfare();
            const node = this.app.getNode(nodeId);
            if (node) node.completed = true;
            this.awardProgress(1, 1, 150);
            this.app.updateHUD();

            playJaggedCurtainWipe(() => {
              arenaMount.classList.add('hidden');
              this.app.renderBoard();
              this.app.showTemporaryPlayerBubble('Plan gotowy! Czas podejść do kasy! 🛒✨', 2500);
            });
          });
        }
      }
    };

    renderStep();
  }

  launchCityCashierBox(nodeId = 'c1_node_5') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new OpenTheBoxGame(arenaMount, {
      player: this.app.player,
      shoppingChoices: this.app.cityShoppingChoices,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Świetny refleks! Kasjerka skanuje produkty! 📦🛒');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchCityCashierRank(nodeId = 'c1_node_6') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new RankOrderGame(arenaMount, {
      player: this.app.player,
      shoppingChoices: this.app.cityShoppingChoices,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Dialog przy kasie zakończony sukcesem! 🛒✨');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchCity2ThoughtsFood(nodeId = 'c2_node_5') {
    this.app.closeModal();
    const modalMount = document.getElementById('modal-mount');
    modalMount.classList.remove('hidden');

    const steps = [
      {
        key: 'dish',
        title: 'KROK 1: CO MASZ OCHOTĘ ZJEŚĆ?',
        hint: 'Wybierz swoje danie — Tan odpowiada obrazkowo:',
        options: [
          {
            val: 'kebab',
            icon: '🥙',
            image: './assets/kebab.jpg',
            fallback: './public/assets/kebab.jpg',
            title: 'Kebab',
            sub: 'Pieczone mięso z warzywami i sosem'
          },
          {
            val: 'burger',
            icon: '🍔',
            title: 'Burger',
            sub: 'Soczysty burger w puszystej bułce'
          },
          {
            val: 'pizza',
            icon: '🍕',
            title: 'Pizza',
            sub: 'Chrupiąca pizza z sosem i serem'
          }
        ]
      },
      {
        key: 'sauce',
        title: 'KROK 2: JAKI SOS WYBIERASZ?',
        hint: 'Sos nadaje smak! Wybierz swój ulubiony sos:',
        options: [
          {
            val: 'czosnkowy',
            icon: '🧄',
            image: './assets/slowka/czosnkowy.jpg',
            fallback: './public/assets/slowka/czosnkowy.jpg',
            title: 'Sos czosnkowy',
            sub: 'Kremowy, łagodny sos z czosnkiem'
          },
          {
            val: 'ostry',
            icon: '🌶️',
            image: './assets/slowka/ostry.jpg',
            fallback: './public/assets/slowka/ostry.jpg',
            title: 'Sos ostry',
            sub: 'Pikantny sos chili dla odważnych'
          },
          {
            val: 'mieszany',
            icon: '🧄🌶️',
            title: 'Sos mieszany',
            sub: 'Pół na pół: czosnkowy i ostry!'
          }
        ]
      },
      {
        key: 'size',
        title: 'KROK 3: JAKI ROZMIAR ZAMAWIASZ?',
        hint: 'Wybierz rozmiar porcji od małego do mega głodu:',
        isSizesGrid: true,
        options: [
          { val: 'S', label: 'S', title: 'Mały (S)', sub: 'Lekka przekąska' },
          { val: 'M', label: 'M', title: 'Średni (M)', sub: 'Standardowa porcja' },
          { val: 'L', label: 'L', title: 'Duży (L)', sub: 'Najpopularniejszy!' },
          { val: 'XL', label: 'XL', title: 'B. Duży (XL)', sub: 'Dla dużego głodu' },
          { val: 'XXL', label: 'XXL', title: 'Gigant (XXL)', sub: 'Prawdziwy potwór!' }
        ]
      },
      {
        key: 'dining',
        title: 'KROK 4: NA MIEJSCU CZY NA WYNOS?',
        hint: 'Gdzie zjesz swój pyszny posiłek?',
        options: [
          {
            val: 'na_miejscu',
            icon: '🍽️',
            image: './assets/slowka/na_miejscu.jpg',
            fallback: './public/assets/slowka/na_miejscu.jpg',
            title: 'Na miejscu',
            sub: 'Zjem przy stoliku w lokalu'
          },
          {
            val: 'na_wynos',
            icon: '🥡',
            image: './assets/slowka/na_wynos.jpg',
            fallback: './public/assets/slowka/na_wynos.jpg',
            title: 'Na wynos',
            sub: 'Zapakuj do torby, zjem w domu'
          }
        ]
      }
    ];

    let currentStepIdx = 0;

    const renderStep = () => {
      if (currentStepIdx >= steps.length) {
        // Podsumowanie wyborów Tana
        const dishMap = { kebab: '🥙 Kebab', burger: '🍔 Burger', pizza: '🍕 Pizza' };
        const sauceMap = { czosnkowy: '🧄 Sos czosnkowy', ostry: '🌶️ Sos ostry', mieszany: '🧄🌶️ Sos mieszany' };
        const diningMap = { na_miejscu: '🍽️ Na miejscu (przy stoliku)', na_wynos: '🥡 Na wynos (do torby)' };

        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>PREFERENCJE ZAPAMIĘTANE! 🥙✨</h2>
                </div>
                <div class="dd-thoughts-hint">Twoje zamówienie jest gotowe w myślach. Powiedz to Mistrzowi Kebaba!</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-shopping-recap-card">
                  <div class="recap-row">
                    <span class="recap-label">🍽️ Danie:</span>
                    <strong class="recap-val">${dishMap[this.app.cityFoodChoices.dish] || this.app.cityFoodChoices.dish}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">📏 Rozmiar:</span>
                    <strong class="recap-val">Rozmiar ${this.app.cityFoodChoices.size}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">🧄 Sos:</span>
                    <strong class="recap-val">${sauceMap[this.app.cityFoodChoices.sauce] || this.app.cityFoodChoices.sauce}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">🥡 Sposób podania:</span>
                    <strong class="recap-val">${diningMap[this.app.cityFoodChoices.dining] || this.app.cityFoodChoices.dining}</strong>
                  </div>
                </div>

                <button type="button" class="btn-dicey-take btn-city-continue" id="food-thoughts-confirm-btn" style="background: #f77f00; color: #fff; font-weight: 800; margin-top: 15px;">
                  IDĘ DO MISTRZA KEBABA! 👨‍🍳
                </button>
              </div>
            </div>
          </div>
        `;

        const confirmBtn = modalMount.querySelector('#food-thoughts-confirm-btn');
        if (confirmBtn) {
          confirmBtn.addEventListener('click', () => {
            sound.playFanfare();
            const node = this.app.getNode(nodeId);
            if (node) node.completed = true;
            this.awardProgress(1, 1, 150);
            this.app.updateHUD();
            playJaggedCurtainWipe(() => {
              this.app.closeModal();
              this.app.renderBoard();
              this.app.showTemporaryPlayerBubble('Decyzje podjęte! Czas złożyć zamówienie! 🥙✨', 2500);
            });
          });
        }
        return;
      }

      const cur = steps[currentStepIdx];

      if (cur.isSizesGrid) {
        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>${cur.title} (${currentStepIdx + 1}/${steps.length})</h2>
                </div>
                <div class="dd-thoughts-hint">${cur.hint}</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-food-sizes-row">
                  ${cur.options.map(opt => `
                    <button type="button" class="btn-food-size-card size-${opt.val.toLowerCase()}" data-key="${cur.key}" data-val="${opt.val}" data-title="${opt.title}">
                      <span class="fsc-badge">${opt.label}</span>
                      <strong class="fsc-title">${opt.title}</strong>
                      <span class="fsc-sub">${opt.sub}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>${cur.title} (${currentStepIdx + 1}/${steps.length})</h2>
                </div>
                <div class="dd-thoughts-hint">${cur.hint}</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-food-images-grid">
                  ${cur.options.map(opt => `
                    <button type="button" class="btn-food-img-card" data-key="${cur.key}" data-val="${opt.val}" data-title="${opt.title}">
                      ${opt.image ? `
                        <div class="fic-img-wrap">
                          <img src="${opt.image}" alt="${opt.title}" class="fic-img" onerror="this.src='${opt.fallback || opt.image}'" />
                        </div>
                      ` : `
                        <div class="fic-emoji-wrap">
                          <span class="fic-emoji">${opt.icon}</span>
                        </div>
                      `}
                      <strong class="fic-title">${opt.icon ? `${opt.icon} ` : ''}${opt.title}</strong>
                      <span class="fic-sub">${opt.sub}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      }

      modalMount.querySelectorAll('.btn-food-size-card, .btn-food-img-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.key;
          const val = btn.dataset.val;
          const title = btn.dataset.title;

          this.app.cityFoodChoices[key] = val;
          sound.playStep();
          sound.speakPolish(title);

          btn.classList.add('is-picked');
          modalMount.querySelectorAll('.btn-food-size-card, .btn-food-img-card').forEach(b => b.disabled = true);

          setTimeout(() => {
            currentStepIdx++;
            renderStep();
          }, 700);
        });
      });
    };

    renderStep();
  }

  launchCity2KebabMaster(nodeId = 'c2_node_6') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new KebabMasterGame(arenaMount, {
      player: this.app.player,
      foodChoices: this.app.cityFoodChoices,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 300, 'Mistrz Kebaba przygotował pyszny posiłek! 🥙✨');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchCity3Biletomat(nodeId = 'c3_node_4') {
    this.app.closeModal();
    const modalMount = document.getElementById('modal-mount');
    modalMount.classList.remove('hidden');

    let currentStep = 'language'; // 'language' | 'type' | 'duration' | 'success'
    let selectedLang = 'pl';
    let selectedType = 'ulgowy'; // 'ulgowy' | 'normalny'

    const ticketOptions = [
      { id: 'u20', type: 'ulgowy', duration: '20', price: 1, label: 'Ulgowy 20 min', icon: '🎟️', sub: 'Uczniowie (1 moneta)' },
      { id: 'u75', type: 'ulgowy', duration: '75', price: 2, label: 'Ulgowy 75 min', icon: '🎟️', sub: 'Uczniowie (2 monety)' },
      { id: 'u90', type: 'ulgowy', duration: '90', price: 3, label: 'Ulgowy 90 min', icon: '🎟️', sub: 'Uczniowie (3 monety)' },
      { id: 'n20', type: 'normalny', duration: '20', price: 2, label: 'Normalny 20 min', icon: '🎫', sub: 'Dorośli (2 monety)' },
      { id: 'n75', type: 'normalny', duration: '75', price: 4, label: 'Normalny 75 min', icon: '🎫', sub: 'Dorośli (4 monety)' },
      { id: 'n90', type: 'normalny', duration: '90', price: 7, label: 'Normalny 90 min', icon: '🎫', sub: 'Dorośli (7 monet)' }
    ];

    const renderBiletomat = (errorMessage = null) => {
      if (currentStep === 'language') {
        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>WYBÓR JĘZYKA / SELECT LANGUAGE / ОБЕРІТЬ МОВУ</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${errorMessage ? `<div class="biletomat-error-alert">${errorMessage}</div>` : ''}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Wybierz język obsługi biletomatu:</p>
                <div class="biletomat-lang-grid">
                  <button type="button" class="btn-biletomat-lang" data-lang="pl">
                    <span class="bl-flag">🇵🇱</span>
                    <strong class="bl-text">POLSKI</strong>
                    <span class="bl-sub">Domyślny</span>
                  </button>
                  <button type="button" class="btn-biletomat-lang" data-lang="en">
                    <span class="bl-flag">🇬🇧</span>
                    <strong class="bl-text">ENGLISH</strong>
                    <span class="bl-sub">International</span>
                  </button>
                  <button type="button" class="btn-biletomat-lang" data-lang="uk">
                    <span class="bl-flag">🇺🇦</span>
                    <strong class="bl-text">УКРАЇНСЬКА</strong>
                    <span class="bl-sub">Для гостей</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        modalMount.querySelectorAll('.btn-biletomat-lang').forEach(btn => {
          btn.addEventListener('click', () => {
            sound.playStep();
            selectedLang = btn.dataset.lang;
            currentStep = 'type';
            renderBiletomat();
          });
        });
      } else if (currentStep === 'type') {
        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>KROK 1/2: WYBÓR RODZAJU BILETU (ULGOWY CZY NORMALNY)</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${errorMessage ? `<div class="biletomat-error-alert">${errorMessage}</div>` : ''}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Kto będzie podróżował? Wybierz rodzaj biletu:</p>

                <div class="biletomat-type-grid">
                  <button type="button" class="btn-biletomat-type type-ulgowy" data-type="ulgowy">
                    <div class="bty-header">
                      <span class="bty-icon">🎟️</span>
                      <strong class="bty-title">BILET ULGOWY 50%</strong>
                    </div>
                    <div class="bty-sub">Dla uczniów, studentów i dzieci. Wymaga ważnej legitymacji szkolnej!</div>
                    <div class="bty-badge">Ceny: 1 – 3 monety 🪙</div>
                  </button>

                  <button type="button" class="btn-biletomat-type type-normalny" data-type="normalny">
                    <div class="bty-header">
                      <span class="bty-icon">🎫</span>
                      <strong class="bty-title">BILET NORMALNY 100%</strong>
                    </div>
                    <div class="bty-sub">Dla osób dorosłych bez uprawnień do ulgi.</div>
                    <div class="bty-badge">Ceny: 2 – 7 monet 🪙</div>
                  </button>
                </div>

                <div class="biletomat-nav-row">
                  <button type="button" class="btn-biletomat-back" id="biletomat-back-to-lang">
                    ⬅ Zmień język
                  </button>
                  <span class="biletomat-step-pill">Krok 1 z 2</span>
                </div>
              </div>
            </div>
          </div>
        `;

        modalMount.querySelectorAll('.btn-biletomat-type').forEach(btn => {
          btn.addEventListener('click', () => {
            sound.playStep();
            selectedType = btn.dataset.type;
            currentStep = 'duration';
            renderBiletomat();
          });
        });

        const backBtn = modalMount.querySelector('#biletomat-back-to-lang');
        if (backBtn) {
          backBtn.addEventListener('click', () => {
            sound.playStep();
            currentStep = 'language';
            renderBiletomat();
          });
        }
      } else if (currentStep === 'duration') {
        const availableTickets = ticketOptions.filter(t => t.type === selectedType);
        const typeLabel = selectedType === 'ulgowy' ? 'BILET ULGOWY 50%' : 'BILET NORMALNY 100%';

        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>KROK 2/2: WYBÓR CZASU WAŻNOŚCI (${typeLabel})</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${errorMessage ? `<div class="biletomat-error-alert">${errorMessage}</div>` : ''}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Dotknij ekranu i wybierz czas przejazdu (${typeLabel}):</p>

                <div class="biletomat-tickets-grid">
                  ${availableTickets.map(t => `
                    <button type="button" class="btn-biletomat-ticket ${t.type}" data-id="${t.id}">
                      <div class="btt-header">
                        <span class="btt-icon">${t.icon}</span>
                        <strong class="btt-label">${t.label}</strong>
                      </div>
                      <div class="btt-price">🪙 ${t.price} ${t.price === 1 ? 'moneta' : t.price < 5 ? 'monety' : 'monet'}</div>
                      <div class="btt-sub">${t.sub}</div>
                    </button>
                  `).join('')}
                </div>

                <div class="biletomat-nav-row">
                  <button type="button" class="btn-biletomat-back" id="biletomat-back-to-type">
                    ⬅ Zmień rodzaj ulgi
                  </button>
                  <span class="biletomat-step-pill">Krok 2 z 2</span>
                </div>
              </div>
            </div>
          </div>
        `;

        modalMount.querySelectorAll('.btn-biletomat-ticket').forEach(btn => {
          btn.addEventListener('click', () => {
            const ticketId = btn.dataset.id;
            const chosen = ticketOptions.find(t => t.id === ticketId);
            if (!chosen) return;

            // Weryfikacja monet gracza
            if (this.app.player.coins < chosen.price) {
              sound.playWrong();
              // Obrażenie 1 HP za brak pieniędzy
              this.app.player.hp = Math.max(1, this.app.player.hp - 1);
              this.app.updateHUD();

              const errorMsg = `⚠️ BŁĄD PŁATNOŚCI! Bilet kosztuje ${chosen.price} monet, a posiadasz tylko ${this.app.player.coins} monet! Biletomat piknął czerwonym światłem (-1 HP)! Wybierz tańszy bilet lub bilet 20-minutowy.`;
              renderBiletomat(errorMsg);
              return;
            }

            // Płatność udana
            this.app.player.coins -= chosen.price;
            this.app.updateHUD();
            this.cityTicketChosen = {
              type: chosen.type,
              duration: chosen.duration,
              price: chosen.price,
              label: chosen.label
            };
            sound.playSuccess();
            currentStep = 'success';
            renderBiletomat();
          });
        });

        const backBtn = modalMount.querySelector('#biletomat-back-to-type');
        if (backBtn) {
          backBtn.addEventListener('click', () => {
            sound.playStep();
            currentStep = 'type';
            renderBiletomat();
          });
        }
      } else if (currentStep === 'success') {
        const ticket = this.cityTicketChosen;
        modalMount.innerHTML = `
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container biletomat-printed-wrap">
              <div class="biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT: TRANSAKCJA UDANA! 🎟️</h3>
                  <span>ODBIERZ WYDRUKOWANY BILET</span>
                </div>
              </div>

              <div class="biletomat-printed-ticket">
                <div class="pt-stripe">KOMUNIKACJA MIEJSKA • ZTM WARSZAWA</div>
                <div class="pt-body">
                  <div class="pt-type-pill ${ticket.type}">${ticket.type === 'ulgowy' ? 'BILET ULGOWY 50%' : 'BILET NORMALNY'}</div>
                  <h4 class="pt-duration">${ticket.duration} MINUT</h4>
                  <div class="pt-details">
                    <span>Cena: ${ticket.price} monet(y)</span>
                    <span>Ważny z legitymacją szkolną</span>
                  </div>
                  <div class="pt-barcode">|||| | ||||| || |||||| |||</div>
                </div>
              </div>

              <div class="biletomat-note">
                ${ticket.type === 'ulgowy' 
                  ? '⚠️ <strong>Pamiętaj!</strong> Podczas kontroli biletów musisz okazać <strong>legitymację szkolną</strong>!' 
                  : 'Bilet normalny nie wymaga okazywania dokumentu zniżkowego.'}
              </div>

              <button type="button" class="btn-dicey-take btn-city-continue" id="biletomat-take-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-top: 15px;">
                ODBIERZ BILET I WSIADAJ! 🎟️
              </button>
            </div>
          </div>
        `;

        const takeBtn = modalMount.querySelector('#biletomat-take-btn');
        if (takeBtn) {
          takeBtn.addEventListener('click', () => {
            sound.playFanfare();
            const node = this.app.getNode(nodeId);
            if (node) node.completed = true;
            this.awardProgress(1, 1, 150);
            this.app.updateHUD();
            playJaggedCurtainWipe(() => {
              this.app.closeModal();
              this.app.renderBoard();
              this.app.showTemporaryPlayerBubble('Bilet kupiony! Wsiadam do pojazdu! 🎟️✨', 2500);
            });
          });
        }
      }
    };

    renderBiletomat();
  }

  launchCity3Inspector(nodeId = 'c3_node_6') {
    this.app.closeModal();
    const modalMount = document.getElementById('modal-mount');
    modalMount.classList.remove('hidden');

    sound.playInspector();
    const isUlgowy = this.cityTicketChosen?.type === 'ulgowy';
    sound.speakPolish(isUlgowy ? 'Legitymację poproszę!' : 'Dzień dobry, kontrola biletów!');

    let answered = false;

    const renderInspector = (feedback = null) => {
      modalMount.innerHTML = `
        <div class="dicey-modal-backdrop dd-inspector-backdrop">
          <div class="dd-inspector-container">
            <div class="dd-inspector-header">
              <span class="inspector-badge-icon">🪪</span>
              <h2>KONTROLA BILETÓW W POJEŹDZIE!</h2>
            </div>

            <div class="dd-inspector-body">
              <div class="dd-inspector-sprite-wrap">
                <img
                  src="./assets/Postacie/Inspektor_Biletu.png"
                  alt="Inspektor Biletu"
                  class="dd-inspector-sprite-img"
                  onerror="this.src='./public/assets/Postacie/Inspektor_Biletu.png'"
                />
              </div>

              <div class="dd-inspector-speech-bubble" id="inspector-speech-bubble">
                <span class="isb-avatar">👮</span>
                <p class="isb-text">
                  ${isUlgowy 
                    ? '„Dzień dobry, kontrola biletów! Widzę bilet ulgowy. <strong>Legitymację poproszę!</strong>”' 
                    : '„Dzień dobry, kontrola biletów! Bilet do kontroli!”'}
                </p>
              </div>

              ${feedback ? `<div class="inspector-feedback-msg ${feedback.type}">${feedback.text}</div>` : ''}

              ${isUlgowy ? `
                <div class="dd-inspector-type-box">
                  <label for="inspector-text-input" class="itb-label">Wpisz odpowiedź dla kontrolera (Type the answer):</label>
                  <div class="itb-input-row">
                    <input type="text" id="inspector-text-input" class="inspector-input-field" placeholder="Wpisz np. Legitymacja..." autocomplete="off" autofocus />
                    <button type="button" class="btn-dicey-take btn-inspector-submit" id="inspector-submit-btn">
                      POKAŻ 🪪
                    </button>
                  </div>

                  <!-- Klocki słów ułatwiające wpisanie na telefonie / tablecie -->
                  <div class="itb-word-chips">
                    <span class="itb-chips-hint">Podpowiedź (kliknij słowo):</span>
                    <button type="button" class="btn-chip-word" data-word="Proszę">Proszę</button>
                    <button type="button" class="btn-chip-word" data-word="oto">oto</button>
                    <button type="button" class="btn-chip-word" data-word="moja">moja</button>
                    <button type="button" class="btn-chip-word" data-word="legitymacja">legitymacja</button>
                    <button type="button" class="btn-chip-word" data-word="szkolna">szkolna</button>
                  </div>
                </div>
              ` : `
                <div class="dd-inspector-normal-box">
                  <p>Twój bilet normalny jest ważny i nie wymaga dokumentu zniżkowego.</p>
                  <button type="button" class="btn-dicey-take btn-city-continue" id="inspector-normal-ok-btn" style="background: #10b981; color: #fff; font-weight: 800;">
                    POKAŻ BILET NORMALNY 🎫
                  </button>
                </div>
              `}
            </div>
          </div>
        </div>
      `;

      if (isUlgowy) {
        const inputEl = modalMount.querySelector('#inspector-text-input');
        const submitBtn = modalMount.querySelector('#inspector-submit-btn');

        const handleSubmit = () => {
          if (answered) return;
          const val = inputEl ? inputEl.value.trim().toLowerCase() : '';

          // Weryfikacja: odpowiedź musi zawierać rdzeń 'legitymacj'
          if (val.includes('legitymacj')) {
            answered = true;
            sound.playFanfare();
            sound.speakPolish('Dziękuję, legitymacja szkolna ważna!');

            const bubbleText = modalMount.querySelector('.isb-text');
            if (bubbleText) {
              bubbleText.innerHTML = '„Dziękuję, wszystko się zgadza! Legitymacja szkolna jest ważna. Życzę miłej podróży!” 🪪✨';
            }

            const typeBox = modalMount.querySelector('.dd-inspector-type-box');
            if (typeBox) {
              typeBox.innerHTML = `
                <div class="inspector-success-card">
                  <h4>KONTROLA ZALICZONA POMYŚLNIE! ✔</h4>
                  <p>Wzorowo okazałeś legitymację szkolną i obroniłeś swój bilet ulgowy!</p>
                  <button type="button" class="btn-dicey-take btn-city-continue" id="inspector-done-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-top: 10px;">
                    RUSZAJ W DALSZĄ DROGĘ ➡
                  </button>
                </div>
              `;

              const doneBtn = modalMount.querySelector('#inspector-done-btn');
              if (doneBtn) {
                doneBtn.addEventListener('click', () => {
                  const node = this.app.getNode(nodeId);
                  if (node) node.completed = true;
                  this.awardProgress(1, 1, 200);
                  this.app.updateHUD();
                  playJaggedCurtainWipe(() => {
                    this.app.closeModal();
                    this.app.renderBoard();
                    this.app.showTemporaryPlayerBubble('Kontrola zaliczona! Pora na Finał! 🪪✨', 2500);
                  });
                });
              }
            }
          } else {
            sound.playWrong();
            renderInspector({
              type: 'error',
              text: '❌ Kontroler pyta o legitymację! Wpisz w odpowiedzi słowo „legitymacja”!'
            });
          }
        };

        if (submitBtn) submitBtn.addEventListener('click', handleSubmit);
        if (inputEl) {
          inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSubmit();
          });
        }

        modalMount.querySelectorAll('.btn-chip-word').forEach(chip => {
          chip.addEventListener('click', () => {
            if (inputEl) {
              const current = inputEl.value.trim();
              inputEl.value = current ? `${current} ${chip.dataset.word}` : chip.dataset.word;
              inputEl.focus();
            }
          });
        });
      } else {
        const okBtn = modalMount.querySelector('#inspector-normal-ok-btn');
        if (okBtn) {
          okBtn.addEventListener('click', () => {
            sound.playSuccess();
            const node = this.app.getNode(nodeId);
            if (node) node.completed = true;
            this.awardProgress(1, 1, 200);
            this.app.updateHUD();
            playJaggedCurtainWipe(() => {
              this.app.closeModal();
              this.app.renderBoard();
              this.app.showTemporaryPlayerBubble('Bilet sprawdzony! Droga wolna! 🎫✨', 2500);
            });
          });
        }
      }
    };

    renderInspector();
  }
}
