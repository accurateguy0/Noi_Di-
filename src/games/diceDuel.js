// Finał Piętra (przy Schodach): DICEY SLANG DUEL (Kości Slangów w stylu Dicey Dungeons)
// Użyj rzuconych kości, aby aktywować karty słów (Siema!, Elo!, Co tam?, Spoko!, Nara!) i wyjść z szatni!

import { SLANG_WORDS } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

const DUEL_ROUNDS = [
  {
    speaker: 'Gejmer Kuba',
    avatar: './assets/Postacie/Gejmer.png',
    bubblePl: '„Wchodzisz rano do szatni! Przywitaj się ze mną jak kolega!”',
    bubbleVn: '"Bạn mới bước vào phòng thay đồ buổi sáng! Hãy chào tớ tự nhiên như bạn bè nhé!"',
    acceptedIds: ['siema', 'elo', 'hejka'],
    diceRulePl: 'Wymagana dowolna kość (1–6)',
    hintVn: 'Chọn thẻ chào hỏi: Siema!, Elo! hoặc Hejka!'
  },
  {
    speaker: 'Piłkarz Maks',
    avatar: './assets/Postacie/Pilkarz.png',
    bubblePl: '„Elo! Zapytaj mnie, co u mnie słychać!”',
    bubbleVn: '"Elo! Hãy hỏi thăm xem dạo này tớ thế nào đi!"',
    acceptedIds: ['cotam'],
    diceRulePl: 'Użyj kości, aby zagrać kartę pytania',
    hintVn: 'Chọn thẻ câu hỏi: Co tam? (Có gì mới không?)'
  },
  {
    speaker: 'Gejmer Kuba',
    avatar: './assets/Postacie/Gejmer.png',
    bubblePl: '„U mnie wszystko super! A co tam u Ciebie?”',
    bubbleVn: '"Tớ mọi thứ đều tuyệt! Còn cậu thế nào?"',
    acceptedIds: ['spoko'],
    diceRulePl: 'Odpowiedz krótko, że wszystko dobrze',
    hintVn: 'Chọn thẻ trả lời: Spoko! (Ổn cả!)'
  },
  {
    speaker: 'Piłkarz Maks',
    avatar: './assets/Postacie/Pilkarz.png',
    bubblePl: '„Dzwonek na lekcję! Biegniemy na korytarz. Pożegnaj się!”',
    bubbleVn: '"Chuông vào lớp rồi! Chạy ra hành lang thôi. Chào tạm biệt nhé!"',
    acceptedIds: ['nara'],
    diceRulePl: 'Pożegnaj kolegów przed wyjściem po schodach',
    hintVn: 'Chọn thẻ tạm biệt: Nara! (Tạm biệt nhé!)'
  }
];

export class DiceDuelGame {
  constructor(container, { diceCount = 3, onComplete, onClose, onDamagePlayer }) {
    this.container = container;
    this.diceCount = Math.max(3, diceCount);
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.onDamagePlayer = onDamagePlayer;

    this.roundIndex = 0;
    this.rolledDice = [];
    this.selectedDieIndex = 0;
    this.score = 0;
  }

  mount() {
    this.rollNewDice();
    this.render();
  }

  rollNewDice() {
    this.rolledDice = Array.from({ length: this.diceCount }, () => Math.floor(Math.random() * 6) + 1);
    this.selectedDieIndex = 0;
    sound.playStep();
  }

  render() {
    const round = DUEL_ROUNDS[this.roundIndex];
    const dotsMap = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    this.container.innerHTML = `
      <div class="arena-overlay dice-duel-arena">
        <div class="arena-header">
          <div class="fighter-badge player-fighter">
            <img src="./assets/Warrior.png" alt="Bohater" class="fighter-avatar" onerror="this.src='./public/assets/Warrior.png'" />
            <div>
              <div class="fighter-name">BOHATER • KOŚCI SLANGÓW</div>
              <div class="fighter-sub">Finał Piętra 1 (Szatnia)</div>
            </div>
          </div>

          <div class="minigame-title-box">
            <div class="wordwall-badge dice-mode-badge">DICEY DUNGEONS FINAŁ: ROZMOWA W SZATNI</div>
            <h2>Rozmowa przy Wyjściu • Hội Thoại Cuối Tầng (${this.roundIndex + 1} / ${DUEL_ROUNDS.length})</h2>
            <p class="minigame-instruction">
              Wybierz kość i kliknij pasującą <strong>Kartę Slangową</strong>, aby odpowiedzieć koledze!
              <br/><span class="vn-sub">Chọn xúc xắc và nhấn vào <strong>Thẻ Từ Vựng</strong> phù hợp để đáp lại bạn mình!</span>
            </p>
          </div>

          <div class="fighter-badge enemy-fighter">
            <div class="enemy-info-right">
              <div class="fighter-name">${round.speaker}</div>
              <div class="fighter-sub">Krok ${this.roundIndex + 1} z ${DUEL_ROUNDS.length}</div>
            </div>
            <img src="${round.avatar}" alt="Rozmówca" class="fighter-avatar" onerror="this.src='./public${round.avatar}'" />
          </div>
        </div>

        <div class="duel-dialogue-box">
          <img src="${round.avatar}" alt="Speaker" class="duel-speaker-img" onerror="this.src='./public${round.avatar}'" />
          <div class="duel-speech-content">
            <div class="duel-speaker-label">${round.speaker} mówi:</div>
            <div class="duel-bubble-pl">${round.bubblePl}</div>
            <div class="duel-bubble-vn">${round.bubbleVn}</div>
            <div class="duel-hint-pill">Podpowiedź (Gợi ý): ${round.hintVn}</div>
          </div>
        </div>

        <div class="dice-tray-bar">
          <span class="dice-tray-label">Twoje kości:</span>
          <div class="dice-list">
            ${this.rolledDice.map((val, idx) => `
              <button class="die-cube ${idx === this.selectedDieIndex ? 'selected-die' : ''}" data-die="${idx}">
                <span class="die-Pip">${dotsMap[val - 1]}</span>
                <small>${val}</small>
              </button>
            `).join('')}
          </div>
          <button class="btn-tool" id="duel-reroll-btn">Przerzuć kości (Đổ lại xúc xắc)</button>
          <button class="btn-tool btn-close-arena" id="duel-exit-btn">Wróć na planszę</button>
        </div>

        <div class="dice-cards-grid">
          ${SLANG_WORDS.map(card => `
            <div class="dicey-equipment-card" data-card-id="${card.id}" style="--card-color: ${card.color}">
              <div class="card-header-strip" style="background: ${card.color}">
                <span>${card.emoji} ${card.word}</span>
                <button class="card-audio-btn" data-speak="${card.cleanWord}" title="Posłuchaj wymowy"></button>
              </div>
              <div class="card-body">
                <div class="card-phonetic">${card.phonetic}</div>
                <div class="card-meaning-pl">${card.plMeaning}</div>
                <div class="card-meaning-vn">${card.vnMeaning}</div>
              </div>
              <button class="card-slot-btn" data-play-card="${card.id}">
Włóż kość i powiedz: „${card.word}”
              </button>
            </div>
          `).join('')}
        </div>

        <div id="duel-feedback" class="bp-feedback-banner hidden"></div>
      </div>
    `;

    this.container.querySelectorAll('.die-cube').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedDieIndex = Number(btn.dataset.die);
        this.render();
      });
    });

    this.container.querySelector('#duel-reroll-btn').addEventListener('click', () => {
      this.rollNewDice();
      this.render();
    });

    this.container.querySelector('#duel-exit-btn').addEventListener('click', () => {
      this.container.innerHTML = '';
      if (this.onClose) this.onClose();
    });

    this.container.querySelectorAll('.card-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.speakPolish(btn.dataset.speak);
      });
    });

    this.container.querySelectorAll('[data-play-card]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.dataset.playCard;
        this.playCard(cardId);
      });
    });
  }

  playCard(cardId) {
    const round = DUEL_ROUNDS[this.roundIndex];
    const card = SLANG_WORDS.find(w => w.id === cardId);
    const feedback = this.container.querySelector('#duel-feedback');

    sound.speakPolish(card.cleanWord);

    if (round.acceptedIds.includes(cardId)) {
      sound.playSuccess();
      const dieVal = this.rolledDice[this.selectedDieIndex] || 6;
      this.score += 100 + dieVal * 10;

      if (feedback) {
        feedback.className = 'bp-feedback-banner good';
        feedback.innerHTML = `
          <div><strong>Świetnie! Powiedziałeś „${card.word}” (+${100 + dieVal * 10} pkt)!</strong></div>
          <div class="vn-sub">Tuyệt vời! Bạn đã dùng đúng từ "${card.word}"!</div>
        `;
      }

      setTimeout(() => {
        if (this.roundIndex + 1 < DUEL_ROUNDS.length) {
          this.roundIndex++;
          this.rollNewDice();
          this.render();
        } else {
          sound.playFanfare();
          this.showGrandVictory();
        }
      }, 1100);
    } else {
      sound.playMiss();
      if (this.onDamagePlayer) this.onDamagePlayer(2);
      if (feedback) {
        feedback.className = 'bp-feedback-banner bad';
        feedback.innerHTML = `
          <div><strong>„${card.word}” to ${card.category} (${card.categoryVn}).</strong></div>
          <div class="vn-sub">${round.hintVn}</div>
        `;
      }
    }
  }

  showGrandVictory() {
    const modal = document.createElement('div');
    modal.className = 'victory-modal-backdrop';
    modal.innerHTML = `
      <div class="victory-modal-card grand-victory">
        <div class="victory-badge">PIĘTRO 1 UKOŃCZONE! • HOÀN THÀNH TẦNG 1!</div>
        <h2>Gratulacje! Przeszedłeś Szatnię!</h2>
        <p>Teraz umiesz przywitać się i pożegnać z polskimi nastolatkami na korytarzu jak prawdziwy kumpel!</p>
        <p class="vn-sub">Chúc mừng! Bạn đã thuộc làu cách chào hỏi và tạm biệt tự nhiên của học sinh Ba Lan!</p>
        <div class="victory-words-recap">
          ${SLANG_WORDS.map(w => `
            <div class="recap-chip">
              <strong>${w.emoji} ${w.word}</strong>
              <span>${w.phonetic}</span>
              <small>${w.vnMeaning}</small>
            </div>
          `).join('')}
        </div>
        <div class="victory-reward-box">
Zdobyte punkty w finale: <strong>+${this.score} PKT</strong> • Poziom A0 ➔ A0+!
        </div>
        <button class="btn-primary-large" id="duel-finish-btn">
Wróć na planszę (Możesz grać ponownie w każdy poziom!)
        </button>
      </div>
    `;
    this.container.appendChild(modal);
    modal.querySelector('#duel-finish-btn').addEventListener('click', () => {
      this.container.innerHTML = '';
      if (this.onComplete) this.onComplete({ score: this.score });
    });
  }
}
