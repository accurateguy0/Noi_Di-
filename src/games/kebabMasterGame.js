// Minigra: MISTRZ KEBABA (Plansza 2 w Mieście - Pole 6)
// Przeciwnik: Mistrz Kebaba (30 HP, 3 dmg)
// Temat: Zamawianie jedzenia (kebab, sosy, rozmiary, na miejscu / na wynos, "proszę poczekać", podziękowanie)

import { sound } from '../audio/sound.js';
import { getPlayerDamage } from '../data/vocabulary.js';

export class KebabMasterGame {
  constructor(container, { player, onPlayerDamaged, onComplete, onClose, foodChoices = {} }) {
    this.container = container;
    this.player = player || { name: 'Tan', hp: 20, maxHp: 20 };
    this.onPlayerDamaged = onPlayerDamaged;
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.foodChoices = foodChoices || {};

    this.enemyMaxHp = 30;
    this.enemyHp = 30;
    this.enemyDamage = 3;
    this.tanDamage = getPlayerDamage(this.player);
    this.currentStepIdx = 0;
    this.lockInput = false;

    this.buildDialogSteps();
  }

  buildDialogSteps() {
    const dish = this.foodChoices.dish || 'kebab';
    const dishNamePl = dish === 'pizza' ? 'pizzę' : dish === 'burger' ? 'burgera' : 'kebab';
    const size = this.foodChoices.size || 'L';
    const sauce = this.foodChoices.sauce || 'czosnkowy';
    const dining = this.foodChoices.dining || 'na_miejscu';

    let sauceTextPl = 'sos czosnkowy';
    if (sauce === 'ostry') sauceTextPl = 'sos ostry';
    if (sauce === 'mieszany') sauceTextPl = 'sos mieszany (czosnkowy i ostry)';

    const diningTextPl = dining === 'na_wynos' ? 'na wynos (do torby)' : 'na miejscu (przy stoliku)';

    this.steps = [
      {
        id: 'step_order',
        chefQuestion: '„Siemanko, szefie! Co dzisiaj dla Ciebie przygotować i w jakim rozmiarze?” 👨‍🍳',
        options: [
          {
            text: `„Poproszę ${dishNamePl} w rozmiarze ${size}.”`,
            correct: true,
            hint: 'Zgodnie z Twoim wcześniejszym wyborem!'
          },
          {
            text: '„Chcę tylko pusty talerz i serwetki.”',
            correct: false,
            hint: 'To nie zamówienie posiłku!'
          },
          {
            text: '„Daj mi cokolwiek, nie wiem co tu macie.”',
            correct: false,
            hint: 'Warto dokładnie podać danie i rozmiar.'
          }
        ].sort(() => Math.random() - 0.5)
      },
      {
        id: 'step_sauce',
        chefQuestion: '„Elegancko! A jaki sosik do tego polewamy? Czosnek czy ostry?” 🧄🌶️',
        options: [
          {
            text: `„Poproszę ${sauceTextPl}!”`,
            correct: true,
            hint: 'Zgodnie z Twoim upodobaniem z Myśli!'
          },
          {
            text: '„Poproszę z dżemem truskawkowym.”',
            correct: false,
            hint: 'Dżem do kebaba/burgera? To brzmi dziwnie!'
          },
          {
            text: '„Nie lubię żadnego jedzenia.”',
            correct: false,
            hint: 'Wybierz sos, na który masz ochotę.'
          }
        ].sort(() => Math.random() - 0.5)
      },
      {
        id: 'step_dining',
        chefQuestion: '„A jak podajemy: będzie jedzone na miejscu czy zapakować na wynos?” 🍽️🥡',
        options: [
          {
            text: `„Poproszę ${diningTextPl}.”`,
            correct: true,
            hint: 'Odpowiedź zgodna z Twoim planem!'
          },
          {
            text: '„Zapłacę gotówką za nowe buty szkolne.”',
            correct: false,
            hint: 'Pytanie dotyczy miejsca spożycia, a nie butów!'
          },
          {
            text: '„Nigdzie nie idę i nic nie wiem.”',
            correct: false,
            hint: 'Powiedz jasno: na miejscu czy na wynos.'
          }
        ].sort(() => Math.random() - 0.5)
      },
      {
        id: 'step_wait',
        chefQuestion: '„Super sprawa! Zaraz wrzucam na ruszt. Proszę poczekać około 5 minut przy ladzie!” ⏳',
        options: [
          {
            text: '„Jasne, poczekam! Dziękuję bardzo!”',
            correct: true,
            hint: 'Uprzejma akceptacja oczekiwania i podziękowanie.'
          },
          {
            text: '„Dlaczego tak wolno?! Dawaj to natychmiast!”',
            correct: false,
            hint: 'Niegrzeczna odpowiedź — kucharz potrzebuje chwili.'
          },
          {
            text: '„To ja uciekam i nie chcę już niczego.”',
            correct: false,
            hint: 'Wystarczy chwilę spokojnie poczekać.'
          }
        ].sort(() => Math.random() - 0.5)
      },
      {
        id: 'step_thanks',
        chefQuestion: '„Gotowe, szefie! Świeżutkie, gorące i pachnące! Proszę bardzo, życzę smacznego!” 🥙✨',
        options: [
          {
            text: '„Dziękuję bardzo! Miłego dnia i do widzenia!”',
            correct: true,
            hint: 'Kulturalne podziękowanie za posiłek i pożegnanie!'
          },
          {
            text: '„To pomyłka, nie zapłacę ani słowa.”',
            correct: false,
            hint: 'Wypada podziękować za przygotowane jedzenie.'
          },
          {
            text: '„Zabieram i nic nie powiem.”',
            correct: false,
            hint: 'Pamiętaj o zwrocie: „Dziękuję!”'
          }
        ].sort(() => Math.random() - 0.5)
      }
    ];
  }

  mount() {
    this.renderArena();
    this.renderCurrentQuestion();
  }

  renderArena() {
    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));

    this.container.innerHTML = `
      <div class="dd-combat-arena km-arena">
        <h2 class="mp-animated-title" style="top: 22px;">🥙 MISTRZ KEBABA: ZAMÓWIENIE 🥙</h2>

        <!-- Prawy górny róg: Mistrz Kebaba -->
        <div class="dd-arena-fighter dd-arena-opponent" id="km-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Mistrz Kebaba 👨‍🍳</span>
            </div>
            <div class="dd-fighter-hp-bar" id="km-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="km-enemy-hp-fill" style="width: ${enemyHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="km-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="km-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Mistrz_Kebaba.png"
              alt="Mistrz Kebaba"
              class="dd-fighter-sprite sprite-kebab-master"
              id="km-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Mistrz_Kebaba.png'"
            />
          </div>
        </div>

        <!-- Środek: Dymek Mistrza Kebaba i opcje odpowiedzi Tana -->
        <div class="matching-stage-wrapper km-stage-wrapper" id="km-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="km-player-box">
          <div class="dd-sprite-container player-sprite-container" id="km-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name || 'Tan'}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="km-player-hp-fill" style="width: ${playerHpPct}%"></div>
              <span class="dd-fighter-hp-text" id="km-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const titleEl = this.container.querySelector('.mp-animated-title');
    if (titleEl) {
      const dismiss = () => {
        if (!titleEl.classList.contains('is-dismissed')) {
          titleEl.classList.remove('is-centered');
          titleEl.classList.add('is-dismissed');
          setTimeout(() => {
            if (titleEl.parentNode) titleEl.remove();
          }, 600);
        }
      };
      setTimeout(dismiss, 1100);
      this.container.addEventListener('pointerdown', dismiss, { once: true });
    }
  }

  renderCurrentQuestion() {
    if (this.enemyHp <= 0 || this.currentStepIdx >= this.steps.length) {
      this.finishBattle();
      return;
    }

    const step = this.steps[this.currentStepIdx];
    const stageEl = this.container.querySelector('#km-stage');
    if (!stageEl) return;

    this.lockInput = false;

    stageEl.innerHTML = `
      <div class="km-dialog-card">
        <div class="km-step-badge">PYTANIE ${this.currentStepIdx + 1} Z ${this.steps.length}</div>
        
        <div class="km-chef-bubble" id="km-chef-bubble">
          <span class="km-chef-avatar">👨‍🍳</span>
          <p class="km-chef-text">${step.chefQuestion}</p>
        </div>

        <div class="km-options-grid">
          ${step.options.map((opt, idx) => `
            <button type="button" class="km-choice-btn" data-idx="${idx}">
              <span class="km-choice-bullet">💬</span>
              <span class="km-choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stageEl.querySelectorAll('.km-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.lockInput) return;
        this.lockInput = true;
        const idx = parseInt(btn.dataset.idx, 10);
        const opt = step.options[idx];

        if (opt.correct) {
          btn.classList.add('is-correct');
          this.handleCorrect(opt.text);
        } else {
          btn.classList.add('is-wrong');
          this.handleWrong();
        }
      });
    });
  }

  handleCorrect(answerText) {
    sound.playHit();
    sound.speakPolish(answerText.replace(/[„”«»]/g, ''));

    this.enemyHp = Math.max(0, this.enemyHp - this.tanDamage);
    this.updateOpponentBar();

    const opponentSprite = this.container.querySelector('#km-opponent-sprite');
    if (opponentSprite) {
      opponentSprite.classList.add('shake-hit');
      setTimeout(() => opponentSprite.classList.remove('shake-hit'), 500);
    }

    setTimeout(() => {
      this.currentStepIdx++;
      if (this.enemyHp <= 0 || this.currentStepIdx >= this.steps.length) {
        this.finishBattle();
      } else {
        this.renderCurrentQuestion();
      }
    }, 950);
  }

  handleWrong() {
    sound.playWrong();
    if (this.onPlayerDamaged) {
      this.onPlayerDamaged(this.enemyDamage);
    }

    const playerHpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const playerHpFill = this.container.querySelector('#km-player-hp-fill');
    const playerHpText = this.container.querySelector('#km-player-hp-text');
    if (playerHpFill) playerHpFill.style.width = `${playerHpPct}%`;
    if (playerHpText) playerHpText.textContent = `${this.player.hp}/${this.player.maxHp}`;

    const playerSprite = this.container.querySelector('.sprite-tan');
    if (playerSprite) {
      playerSprite.classList.add('shake-hit');
      setTimeout(() => playerSprite.classList.remove('shake-hit'), 500);
    }

    const bubbleEl = this.container.querySelector('#km-chef-bubble .km-chef-text');
    if (bubbleEl) {
      bubbleEl.textContent = '„Oj, szefie, chyba się nie dogadaliśmy! Spróbuj odpowiedzieć jeszcze raz!” 🤔';
    }

    setTimeout(() => {
      this.lockInput = false;
      const wrongBtn = this.container.querySelector('.km-choice-btn.is-wrong');
      if (wrongBtn) wrongBtn.classList.remove('is-wrong');
    }, 1000);
  }

  updateOpponentBar() {
    const enemyHpPct = Math.max(0, Math.min(100, (this.enemyHp / this.enemyMaxHp) * 100));
    const fill = this.container.querySelector('#km-enemy-hp-fill');
    const txt = this.container.querySelector('#km-enemy-hp-text');
    if (fill) fill.style.width = `${enemyHpPct}%`;
    if (txt) txt.textContent = `${this.enemyHp}/${this.enemyMaxHp}`;
  }

  finishBattle() {
    sound.playFanfare();
    const stageEl = this.container.querySelector('#km-stage');
    if (stageEl) {
      stageEl.innerHTML = `
        <div class="km-dialog-card km-victory-card">
          <div class="km-vic-icon">🥙🎉</div>
          <h3>ZAMÓWIENIE ZŁOŻONE PERFEKCYJNIE!</h3>
          <p>Mistrz Kebaba przybił Ci piątkę! Znasz zwroty zamawiania, sosów, rozmiarów i uprzejmej obsługi klienta!</p>
        </div>
      `;
    }

    setTimeout(() => {
      if (this.onComplete) {
        this.onComplete({ score: 300 });
      }
    }, 1200);
  }

  destroy() {
    this.lockInput = true;
    this.container.innerHTML = '';
  }
}
