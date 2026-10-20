// Poziom Wordwall 1: BALLOON POP (Przebij balony — Đập bóng bay)
// "Pop the balloons to drop each keyword onto its matching definition."

import { SLANG_WORDS } from '../data/vocabulary.js';
import { sound } from '../audio/sound.js';

export class BalloonPopGame {
  constructor(container, { onComplete, onClose, onDamagePlayer }) {
    this.container = container;
    this.onComplete = onComplete;
    this.onClose = onClose;
    this.onDamagePlayer = onDamagePlayer;

    this.level = 1;
    this.maxLevels = 3;
    this.score = 0;
    this.mistakes = 0;
    this.slowMode = false; // Dla poziomu A0: pozwala zatrzymać ruch dolnych skrzynek, by spokojnie przeczytać
    this.running = false;
    this.animFrame = null;

    this.balloons = [];
    this.fallingCrates = [];
    this.particles = [];
    this.floatingTexts = [];
    this.targets = [];

    this.stageWidth = 820;
    this.stageHeight = 450;
    this.lastTime = 0;
    this.spawnTimer = 0;
  }

  mount() {
    this.container.innerHTML = `
      <div class="arena-overlay balloon-arena">
        <div class="arena-header">
          <div class="fighter-badge player-fighter">
            <img src="/assets/Tan.png" alt="Tan" class="fighter-avatar" onerror="this.src='./public/assets/Tan.png'" />
            <div>
              <div class="fighter-name">TAN (Poziom A0)</div>
              <div class="fighter-sub">Uczeń z Wietnamu 🇻🇳</div>
            </div>
          </div>

          <div class="minigame-title-box">
            <div class="wordwall-badge">🎈 WORDWALL MODE: BALLOON POP</div>
            <h2>Przebij Balony! • Đập Bóng Bay!</h2>
            <p class="minigame-instruction">
              Kliknij balon, gdy leci nad pasującą definicją na dole, aby zrzucić słowo do właściwego wagonika!
              <br/><span class="vn-sub">Nhấn vào bóng bay khi nó bay ngang qua đúng nghĩa ở bên dưới để thả từ vào toa tàu!</span>
            </p>
          </div>

          <div class="fighter-badge enemy-fighter">
            <div class="enemy-info-right">
              <div class="fighter-name">GEJMER KUBA 🎮</div>
              <div class="fighter-sub" id="bp-level-indicator">Fala 1 / 3 • Pkt: 0</div>
            </div>
            <img src="./assets/Postacie/Gejmer.png" alt="Gejmer" class="fighter-avatar" onerror="this.src='./public/assets/Postacie/Gejmer.png'" />
          </div>
        </div>

        <div class="balloon-controls-bar">
          <div class="bp-stats">
            <span class="bp-pill" id="bp-wave-pill">⭐ Poziom 1 / 3</span>
            <span class="bp-pill" id="bp-remaining-pill">🎯 Dopasowano: 0 / 3</span>
            <span class="bp-pill bp-score-pill" id="bp-score-pill">🏆 Punkty: 0</span>
          </div>
          <div class="bp-actions">
            <button class="btn-tool" id="bp-toggle-speed" title="Zatrzymaj lub uruchom ruch wagoników (ułatwienie dla poziomu A0)">
              🐢 Zatrzymaj wagoniki (Dừng toa tàu: OFF)
            </button>
            <button class="btn-tool btn-help-audio" id="bp-read-all">
              🔊 Wymowa słów (Nghe phát âm)
            </button>
            <button class="btn-tool btn-close-arena" id="bp-exit-btn">
              ⬅ Wróć na planszę (Quay lại bản đồ)
            </button>
          </div>
        </div>

        <div class="balloon-stage-wrapper">
          <canvas id="balloon-canvas" width="860" height="450"></canvas>
          <div id="bp-feedback-banner" class="bp-feedback-banner hidden"></div>
        </div>

        <div class="arena-QuickHint">
          💡 <strong>Wskazówka A0 (Mẹo nhỏ):</strong> Przerywana linia pod balonem pokazuje, gdzie spadnie słowo! Kliknij balon, aby go przebić 💥
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('#balloon-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.feedbackBanner = this.container.querySelector('#bp-feedback-banner');

    this.container.querySelector('#bp-toggle-speed').addEventListener('click', (e) => {
      this.slowMode = !this.slowMode;
      e.currentTarget.textContent = this.slowMode
        ? '🐇 Uruchom ruch wagoników (Đang dừng toa)'
        : '🐢 Zatrzymaj wagoniki (Dừng toa tàu: OFF)';
      e.currentTarget.classList.toggle('active-toggle', this.slowMode);
    });

    this.container.querySelector('#bp-read-all').addEventListener('click', () => {
      const activeWords = this.targets.map(t => t.item.cleanWord).join(', ');
      sound.speakPolish(activeWords, 0.85);
    });

    this.container.querySelector('#bp-exit-btn').addEventListener('click', () => {
      this.destroy();
      if (this.onClose) this.onClose();
    });

    this.canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    this.canvas.addEventListener('pointermove', (e) => this.handlePointerMove(e));

    this.setupWave(1);
    this.running = true;
    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

  setupWave(levelNum) {
    this.level = levelNum;
    this.balloons = [];
    this.fallingCrates = [];

    // Dobór słów na dany poziom trudności (od 3 prostych słów A0 do 5)
    let wordIds = [];
    if (levelNum === 1) {
      wordIds = ['siema', 'nara', 'cotam'];
    } else if (levelNum === 2) {
      wordIds = ['siema', 'elo', 'nara', 'spoko'];
    } else {
      wordIds = ['siema', 'elo', 'nara', 'cotam', 'spoko'];
    }

    const selectedItems = wordIds.map(id => SLANG_WORDS.find(w => w.id === id));
    const count = selectedItems.length;
    const boxW = Math.min(240, Math.floor((this.canvas.width - 60) / count) - 14);
    const spacing = (this.canvas.width - count * boxW) / (count + 1);

    this.targets = selectedItems.map((item, idx) => ({
      item,
      x: spacing + idx * (boxW + spacing),
      y: this.canvas.height - 108,
      width: boxW,
      height: 92,
      vx: levelNum === 1 ? 22 : levelNum === 2 ? 36 : 48,
      matched: false,
      highlightTimer: 0
    }));

    // Stwórz początkowe balony
    this.spawnInitialBalloons();
    this.updateHUD();
  }

  spawnInitialBalloons() {
    const unmatched = this.targets.filter(t => !t.matched).map(t => t.item);
    unmatched.forEach((item, index) => {
      this.spawnBalloonForItem(item, 120 + index * 220);
    });
  }

  spawnBalloonForItem(item, startX = null) {
    const goRight = Math.random() > 0.35;
    const y = 68 + Math.random() * 95;
    const speed = (58 + Math.random() * 35 + this.level * 10) * (goRight ? 1 : -1);
    const x = startX !== null ? startX : (goRight ? -60 : this.canvas.width + 60);

    this.balloons.push({
      item,
      x,
      y,
      baseY: y,
      vx: speed,
      radius: 36,
      bobPhase: Math.random() * Math.PI * 2,
      hovered: false
    });
  }

  updateHUD() {
    const matchedCount = this.targets.filter(t => t.matched).length;
    const totalCount = this.targets.length;
    const wavePill = this.container.querySelector('#bp-wave-pill');
    const remPill = this.container.querySelector('#bp-remaining-pill');
    const scorePill = this.container.querySelector('#bp-score-pill');
    const lvlInd = this.container.querySelector('#bp-level-indicator');

    if (wavePill) wavePill.textContent = `⭐ Poziom ${this.level} / ${this.maxLevels}`;
    if (remPill) remPill.textContent = `🎯 Dopasowano: ${matchedCount} / ${totalCount}`;
    if (scorePill) scorePill.textContent = `🏆 Punkty: ${this.score}`;
    if (lvlInd) lvlInd.textContent = `Poziom ${this.level}/${this.maxLevels} • Dopasowano ${matchedCount}/${totalCount}`;
  }

  getCanvasCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  handlePointerMove(e) {
    const pos = this.getCanvasCoords(e);
    let anyHover = false;
    this.balloons.forEach(b => {
      const dist = Math.hypot(pos.x - b.x, pos.y - b.y);
      const onCrate = Math.abs(pos.x - b.x) < 52 && Math.abs(pos.y - (b.y + 62)) < 26;
      b.hovered = dist <= b.radius + 10 || onCrate;
      if (b.hovered) anyHover = true;
    });
    this.canvas.style.cursor = anyHover ? 'pointer' : 'crosshair';
  }

  handlePointerDown(e) {
    const pos = this.getCanvasCoords(e);

    // Sprawdź kliknięcie w balon lub zawieszoną tabliczkę ze słowem
    for (let i = this.balloons.length - 1; i >= 0; i--) {
      const b = this.balloons[i];
      const dist = Math.hypot(pos.x - b.x, pos.y - b.y);
      const onCrate = Math.abs(pos.x - b.x) < 54 && Math.abs(pos.y - (b.y + 62)) < 28;

      if (dist <= b.radius + 12 || onCrate) {
        this.popBalloon(i);
        return;
      }
    }

    // Jeśli kliknięto na wagonik na dole, przeczytaj na głos podpowiedź
    for (const t of this.targets) {
      if (
        pos.x >= t.x &&
        pos.x <= t.x + t.width &&
        pos.y >= t.y &&
        pos.y <= t.y + t.height
      ) {
        sound.speakPolish(t.item.cleanWord);
        return;
      }
    }
  }

  popBalloon(index) {
    const b = this.balloons[index];
    this.balloons.splice(index, 1);
    sound.playPop();
    sound.speakPolish(b.item.cleanWord);

    // Efekt cząsteczek pękającego balonu
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18;
      const spd = 60 + Math.random() * 140;
      this.particles.push({
        x: b.x,
        y: b.y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        color: b.item.color,
        life: 0.55
      });
    }

    // Spadająca paczka ze słowem
    this.fallingCrates.push({
      item: b.item,
      x: b.x,
      y: b.y + 55,
      vy: 140
    });
  }

  showBanner(textPl, textVn, isGood = true) {
    if (!this.feedbackBanner) return;
    this.feedbackBanner.className = `bp-feedback-banner ${isGood ? 'good' : 'bad'}`;
    this.feedbackBanner.innerHTML = `
      <div><strong>${textPl}</strong></div>
      <div class="vn-sub">${textVn}</div>
    `;
    clearTimeout(this.bannerTimeout);
    this.bannerTimeout = setTimeout(() => {
      if (this.feedbackBanner) this.feedbackBanner.classList.add('hidden');
    }, 2600);
  }

  loop(timestamp) {
    if (!this.running) return;
    const dt = Math.min(0.05, (timestamp - this.lastTime) / 1000);
    this.lastTime = timestamp;

    this.update(dt);
    this.draw();

    this.animFrame = requestAnimationFrame((t) => this.loop(t));
  }

  update(dt) {
    // 1. Aktualizuj ruch wagoników na dole (chyba że włączono tryb zatrzymania A0)
    if (!this.slowMode) {
      for (const t of this.targets) {
        t.x += t.vx * dt;
        if (t.x + t.width > this.canvas.width - 12) {
          t.x = this.canvas.width - 12 - t.width;
          t.vx *= -1;
        } else if (t.x < 12) {
          t.x = 12;
          t.vx *= -1;
        }
      }
    }

    // 2. Aktualizuj balony
    for (let i = this.balloons.length - 1; i >= 0; i--) {
      const b = this.balloons[i];
      b.x += b.vx * dt;
      b.bobPhase += dt * 3;
      b.y = b.baseY + Math.sin(b.bobPhase) * 8;

      if (b.vx > 0 && b.x > this.canvas.width + 80) {
        b.x = -70;
      } else if (b.vx < 0 && b.x < -80) {
        b.x = this.canvas.width + 70;
      }
    }

    // Pilnuj, aby dla każdego niedopasowanego słowa latał przynajmniej 1 balon
    this.spawnTimer += dt;
    if (this.spawnTimer > 1.2) {
      this.spawnTimer = 0;
      const unmatched = this.targets.filter(t => !t.matched).map(t => t.item);
      for (const item of unmatched) {
        const activeForWord =
          this.balloons.some(b => b.item.id === item.id) ||
          this.fallingCrates.some(c => c.item.id === item.id);
        if (!activeForWord) {
          this.spawnBalloonForItem(item);
        }
      }
    }

    // 3. Aktualizuj spadające słowa
    for (let i = this.fallingCrates.length - 1; i >= 0; i--) {
      const c = this.fallingCrates[i];
      c.vy += 520 * dt; // Grawitacja
      c.y += c.vy * dt;

      // Sprawdź kolizję z wagonikami definicji
      let landedInTarget = null;
      for (const t of this.targets) {
        if (
          c.y + 22 >= t.y &&
          c.y - 22 <= t.y + t.height &&
          c.x >= t.x - 10 &&
          c.x <= t.x + t.width + 10
        ) {
          landedInTarget = t;
          break;
        }
      }

      if (landedInTarget) {
        this.fallingCrates.splice(i, 1);
        if (!landedInTarget.matched && landedInTarget.item.id === c.item.id) {
          // Trafienie w odpowiednią definicję!
          landedInTarget.matched = true;
          landedInTarget.highlightTimer = 1.0;
          this.score += 100;
          sound.playSuccess();

          this.floatingTexts.push({
            x: landedInTarget.x + landedInTarget.width / 2,
            y: landedInTarget.y - 10,
            text: `✅ ${c.item.word} +100!`,
            color: '#06d6a0',
            life: 1.3
          });

          this.showBanner(
            `🎉 Brawo! „${c.item.word}” = ${c.item.plMeaning}`,
            `Đúng rồi! "${c.item.word}" = ${c.item.vnMeaning}`,
            true
          );

          // Usuń duplikaty balonów dla tego samego słowa
          this.balloons = this.balloons.filter(b => b.item.id !== c.item.id);
          this.updateHUD();
          this.checkWaveComplete();
        } else {
          // Trafiono w inną definicję
          this.mistakes++;
          sound.playMiss();
          this.floatingTexts.push({
            x: c.x,
            y: landedInTarget.y - 10,
            text: `❌ To znaczy: ${c.item.categoryVn}!`,
            color: '#ff595e',
            life: 1.4
          });
          this.showBanner(
            `💡 Prawie! „${c.item.word}” oznacza: ${c.item.balloonDefPl}`,
            `Thử lại nhé! "${c.item.word}" có nghĩa là: ${c.item.balloonDefVn}`,
            false
          );
          if (this.onDamagePlayer) this.onDamagePlayer(2);
          this.spawnBalloonForItem(c.item);
        }
      } else if (c.y > this.canvas.height + 30) {
        // Spadło obok wagonika — bez kary, balon wraca na niebo
        this.fallingCrates.splice(i, 1);
        this.floatingTexts.push({
          x: Math.max(60, Math.min(this.canvas.width - 60, c.x)),
          y: this.canvas.height - 40,
          text: '💨 Chybił! Spróbuj jeszcze raz!',
          color: '#ffd166',
          life: 1.0
        });
        this.spawnBalloonForItem(c.item);
      }
    }

    // 4. Cząsteczki i napisy
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) this.particles.splice(i, 1);
    }

    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y -= 35 * dt;
      ft.life -= dt;
      if (ft.life <= 0) this.floatingTexts.splice(i, 1);
    }
  }

  checkWaveComplete() {
    if (this.targets.every(t => t.matched)) {
      if (this.level < this.maxLevels) {
        sound.playFanfare();
        setTimeout(() => {
          if (!this.running) return;
          this.setupWave(this.level + 1);
        }, 1200);
      } else {
        // Cały poziom Balloon Pop ukończony!
        sound.playFanfare();
        setTimeout(() => {
          this.showVictoryModal();
        }, 900);
      }
    }
  }

  showVictoryModal() {
    this.running = false;
    const modal = document.createElement('div');
    modal.className = 'victory-modal-backdrop';
    modal.innerHTML = `
      <div class="victory-modal-card">
        <div class="victory-badge">🎈 POZIOM UKOŃCZONY! • HOÀN THÀNH MÀN CHƠI!</div>
        <h2>Piątka z Gejmerem Kubą! 🤜🤛</h2>
        <p>Opanowałeś młodzieżowe powitania i pożegnania w grze <strong>Balloon Pop</strong>!</p>
        <p class="vn-sub">Bạn đã nắm vững các từ chào hỏi tuổi teen trong màn Đập Bóng Bay!</p>
        <div class="victory-words-recap">
          ${SLANG_WORDS.slice(0, 5).map(w => `
            <div class="recap-chip">
              <strong>${w.emoji} ${w.word}</strong>
              <span>${w.phonetic}</span>
              <small>${w.vnMeaning}</small>
            </div>
          `).join('')}
        </div>
        <div class="victory-reward-box">
          🎁 Nagroda: <strong>+150 PKT (${this.score} pkt)</strong> • <strong>Odblokowano dalszą ścieżkę w Szatni!</strong>
        </div>
        <button class="btn-primary-large" id="bp-finish-btn">
          Kontynuuj na planszy (Tiếp tục trên bản đồ) ➡
        </button>
      </div>
    `;
    this.container.appendChild(modal);
    modal.querySelector('#bp-finish-btn').addEventListener('click', () => {
      this.destroy();
      if (this.onComplete) this.onComplete({ score: this.score });
    });
  }

  draw() {
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Szyny kolejki na dole
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, H - 12);
    ctx.lineTo(W, H - 12);
    ctx.stroke();

    // 1. Rysuj celowniki (przerywane linie pod balonami ułatwiające celowanie dla 13-latka)
    for (const b of this.balloons) {
      ctx.save();
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = b.hovered ? '#ffffff' : 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = b.hovered ? 2.5 : 1.2;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + 82);
      ctx.lineTo(b.x, H - 108);
      ctx.stroke();
      ctx.restore();
    }

    // 2. Rysuj wagoniki z definicjami (Targets)
    for (const t of this.targets) {
      ctx.save();
      const bg = t.matched
        ? 'rgba(6, 214, 160, 0.92)'
        : 'rgba(28, 37, 54, 0.93)';
      const border = t.matched ? '#ffffff' : t.item.color;

      // Cień i zaokrąglony prostokąt
      ctx.fillStyle = bg;
      ctx.strokeStyle = border;
      ctx.lineWidth = t.matched ? 4 : 3;
      this.roundRect(ctx, t.x, t.y, t.width, t.height, 14, true, true);

      // Kółka wagonika
      ctx.fillStyle = '#2b2d42';
      ctx.beginPath();
      ctx.arc(t.x + 28, t.y + t.height + 5, 7, 0, Math.PI * 2);
      ctx.arc(t.x + t.width - 28, t.y + t.height + 5, 7, 0, Math.PI * 2);
      ctx.fill();

      // Tekst definicji w wagoniku (PL + VN dla A0)
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      if (t.matched) {
        ctx.font = 'bold 20px "Fredoka", "Segoe UI", sans-serif';
        ctx.fillText(`✅ ${t.item.emoji} ${t.item.word}`, t.x + t.width / 2, t.y + 38);
        ctx.font = '13px "Segoe UI", sans-serif';
        ctx.fillText(t.item.balloonDefVn, t.x + t.width / 2, t.y + 68);
      } else {
        ctx.font = 'bold 13.5px "Segoe UI", sans-serif';
        this.wrapText(ctx, t.item.balloonDefPl, t.x + t.width / 2, t.y + 26, t.width - 16, 17);
        ctx.fillStyle = '#ffd166';
        ctx.font = '12.5px "Segoe UI", sans-serif';
        this.wrapText(ctx, `🇻🇳 ${t.item.balloonDefVn}`, t.x + t.width / 2, t.y + 64, t.width - 16, 16);
      }
      ctx.restore();
    }

    // 3. Rysuj spadające paczki
    for (const c of this.fallingCrates) {
      this.drawKeywordCrate(ctx, c.x, c.y, c.item, true);
    }

    // 4. Rysuj balony ze słowami kluczowymi
    for (const b of this.balloons) {
      ctx.save();

      // Sznurek od balonu do skrzynki ze słowem
      ctx.strokeStyle = '#f8f9fa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + b.radius);
      ctx.lineTo(b.x, b.y + 44);
      ctx.stroke();

      // Czasza balonu
      const r = b.hovered ? b.radius + 4 : b.radius;
      ctx.fillStyle = b.item.color;
      ctx.beginPath();
      ctx.ellipse(b.x, b.y, r * 0.92, r * 1.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = b.hovered ? 3.5 : 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Połysk na balonie
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.ellipse(b.x - r * 0.3, b.y - r * 0.3, r * 0.2, r * 0.35, -0.4, 0, Math.PI * 2);
      ctx.fill();

      // Emoji w balonie
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b.item.emoji, b.x, b.y);

      // Skrzynka ze słowem pod balonem
      this.drawKeywordCrate(ctx, b.x, b.y + 62, b.item, b.hovered);

      ctx.restore();
    }

    // 5. Cząsteczki i napisy punktowe
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life / 0.55);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (const ft of this.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, ft.life));
      ctx.font = 'bold 18px "Segoe UI", sans-serif';
      ctx.fillStyle = ft.color;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.textAlign = 'center';
      ctx.strokeText(ft.text, ft.x, ft.y);
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  drawKeywordCrate(ctx, x, y, item, highlighted) {
    const w = 112;
    const h = 40;
    ctx.save();
    ctx.fillStyle = highlighted ? '#fff3b0' : '#ffffff';
    ctx.strokeStyle = item.color;
    ctx.lineWidth = highlighted ? 3.5 : 2.5;
    this.roundRect(ctx, x - w / 2, y - h / 2, w, h, 9, true, true);

    ctx.fillStyle = '#1d3557';
    ctx.font = 'bold 16px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.word, x, y - 2);

    ctx.fillStyle = '#6c757d';
    ctx.font = '10.5px "Segoe UI", sans-serif';
    ctx.fillText(item.phonetic.split('•')[0].trim(), x, y + 13);
    ctx.restore();
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, curY);
  }

  destroy() {
    this.running = false;
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    clearTimeout(this.bannerTimeout);
    this.container.innerHTML = '';
  }
}
