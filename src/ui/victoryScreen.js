// Ekran zwycięstwa w walce z inną postacią (wzorowany 1:1 na Dicey Dungeons)
// Obsługuje dwa warianty:
// 1. Zwykły postęp EXP ("Następny poziom:" + żółty pasek postępu)
// 2. Awans na wyższy poziom ("Gratulacje! Osiągnąłeś poziom X! Maksymalne zdrowie zwiększone o ❤️4!" + "POZIOM WYŻEJ!")

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';

/**
 * Tworzy 12-ramienną gwiazdę (starburst) w SVG jak w Dicey Dungeons
 */
function createStarburstSvg() {
  const points = [];
  const spikes = 12;
  const outerR = 48;
  const innerR = 36;
  const cx = 50;
  const cy = 50;

  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i * Math.PI) / spikes - Math.PI / 2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return `
    <svg class="dd-starburst-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <polygon points="${points.join(' ')}" fill="#f45b63" stroke="#e04850" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
  `;
}

/**
 * Wyświetla ekran "WYGRAŁEŚ!" po pokonaniu innej postaci
 * @param {HTMLElement} container - kontener, w którym pojawi się ekran
 * @param {Object} options
 * @param {number} options.coinsGain - zdobyte monety (np. 1)
 * @param {number} options.xpGain - zdobyty EXP (np. 1 lub 2)
 * @param {boolean} options.leveledUp - czy gracz awansował na nowy poziom
 * @param {number} options.newLevel - aktualny poziom gracza po walce
 * @param {number} options.currentXp - aktualny EXP gracza po walce
 * @param {number} options.xpToNext - wymagany EXP na kolejny poziom
 * @param {Function} options.onOk - callback po kliknięciu przycisku OK
 */
export function showDiceyVictoryScreen(container, {
  coinsGain = 1,
  xpGain = 1,
  leveledUp = false,
  newLevel = 1,
  prevXp = 0,
  prevXpToNext = 2,
  currentXp = 0,
  xpToNext = 2,
  customProgressLabel = null,
  levelUpBonus = null,
  flawlessBonusGain = 0,
  onOk
}) {
  musicManager.playVictoryMusic();
  sound.playFanfare();
  if (leveledUp) {
    setTimeout(() => sound.playLevelUp(), 350);
  }

  const initialPct = prevXpToNext > 0
    ? Math.max(0, Math.min(100, Math.round((prevXp / prevXpToNext) * 100)))
    : 100;

  const targetPct = xpToNext > 0
    ? Math.max(0, Math.min(100, Math.round((currentXp / xpToNext) * 100)))
    : 100;

  const startBarPct = xpGain > 0 ? initialPct : targetPct;
  const progressLabel = customProgressLabel || 'Następny poziom:';

  // Generujemy kropeczki (żarówki) wokół szyldu "WYGRAŁEŚ!"
  const topDots = Array.from({ length: 11 }, () => '<span class="dd-marquee-dot"></span>').join('');
  const bottomDots = Array.from({ length: 11 }, () => '<span class="dd-marquee-dot"></span>').join('');
  const sideDots = Array.from({ length: 4 }, () => '<span class="dd-marquee-dot"></span>').join('');

  const overlay = document.createElement('div');
  overlay.className = 'dd-victory-backdrop';
  overlay.innerHTML = `
    <div class="dd-victory-stage">
      <!-- Wieszaki szyldu u góry -->
      <div class="dd-sign-hangers">
        <span class="dd-hanger"></span>
        <span class="dd-hanger"></span>
      </div>

      <div class="dd-victory-main-row">
        <!-- Lewa gwiazda: Monety -->
        <div class="dd-reward-star dd-star-left">
          ${createStarburstSvg()}
          <div class="dd-star-content">
            <span class="dd-coin-graphic" aria-hidden="true"></span>
            <span class="dd-star-multiplier">x${coinsGain}</span>
          </div>
        </div>

        <!-- Centralny szyld "WYGRAŁEŚ!" -->
        <div class="dd-marquee-sign">
          <div class="dd-dots-row top">${topDots}</div>
          <div class="dd-dots-col left">${sideDots}</div>
          <div class="dd-dots-col right">${sideDots}</div>
          <div class="dd-dots-row bottom">${bottomDots}</div>

          <div class="dd-marquee-inner">
            <h2 class="dd-win-title" data-text="WYGRAŁEŚ!">WYGRAŁEŚ!</h2>
          </div>
        </div>

        <!-- Prawa gwiazda: EXP -->
        <div class="dd-reward-star dd-star-right">
          ${createStarburstSvg()}
          <div class="dd-star-content">
            <span class="dd-exp-label">EXP</span>
            <span class="dd-star-multiplier">x${xpGain}</span>
          </div>
        </div>
      </div>

      <!-- Sekcja doświadczenia / nowego poziomu pod szyldem -->
      <div class="dd-victory-progress-area">
        ${leveledUp ? `
          <div class="dd-levelup-congrats">
            <div>Gratulacje! Osiągnąłeś poziom ${newLevel}!</div>
            <div>Maksymalne zdrowie zwiększone o <span class="dd-heart-inline">❤️4</span>!</div>
            ${levelUpBonus ? `
              <div class="dd-levelup-stat-bonus">
                <span class="dd-bonus-roll-badge">🎲 WYLOSOWANO BONUS ZA POZIOM:</span>
                <span class="dd-bonus-pill">
                  <span class="dd-bonus-icon">${levelUpBonus.icon}</span>
                  <strong>${levelUpBonus.text}</strong>
                </span>
                <div class="dd-bonus-desc">${levelUpBonus.description}</div>
              </div>
            ` : ''}
          </div>
          <div class="dd-exp-bar-frame dd-bar-levelup">
            <span class="dd-levelup-bar-text">POZIOM WYŻEJ!</span>
          </div>
        ` : `
          <div class="dd-next-level-label">${progressLabel}</div>
          <div class="dd-exp-bar-frame">
            <div class="dd-exp-bar-fill" id="dd-exp-bar-fill" style="width: ${startBarPct}%"></div>
          </div>
        `}
        ${flawlessBonusGain > 0 ? `
          <div class="dd-flawless-notice">
            ✨ Czysta walka (0 strat HP): +${flawlessBonusGain} 🪙 dodatkowej monety!
          </div>
        ` : ''}
      </div>

      <!-- Przycisk OK -->
      <button class="dd-victory-ok-btn" id="dd-victory-ok-btn">OK</button>
    </div>
  `;

  container.appendChild(overlay);

  // Po pojawieniu się paska poziomu (fade-in kończy się ok. 1.85s), płynnie zwiększ pasek EXP
  const expFillEl = overlay.querySelector('#dd-exp-bar-fill');
  if (expFillEl && xpGain > 0 && startBarPct !== targetPct) {
    setTimeout(() => {
      expFillEl.style.width = `${targetPct}%`;
    }, 1880);
  }

  const okBtn = overlay.querySelector('#dd-victory-ok-btn');
  let clicked = false;
  okBtn.addEventListener('click', () => {
    if (clicked) return;
    clicked = true;
    sound.playStep();

    playJaggedCurtainWipe(() => {
      overlay.remove();
      musicManager.resumeBoardMusic();
      if (onOk) onOk();
    });
  });
}

/**
 * Odtwarza dynamiczną, super płynną animację czarnego tła przejścia w lewo w stylu Dicey Dungeons
 * @param {Function} onCovered - wywoływane w momencie pełnego zasłonięcia ekranu
 * @param {string|Object} options - kierunek ('left' domyślnie) lub obiekt opcji
 */
export async function playJaggedCurtainWipe(onCovered, options = 'left') {
  const direction = (typeof options === 'string' ? options : options?.direction) || 'left';
  const isLeft = direction === 'left';
  const teethCount = 18;
  const stepY = 100 / teethCount;

  // Lewa krawędź ząbkowana (18 ostrych zębów w stylu Dicey Dungeons)
  // Wypełnienie czernią od x=100 (korpus kurtyny) w lewo do wierzchołków zębów (x=0)
  const leftPoints = ['100,0'];
  for (let i = 0; i < teethCount; i++) {
    const yMid = ((i + 0.5) * stepY).toFixed(3);
    const yEnd = ((i + 1) * stepY).toFixed(3);
    leftPoints.push(`0,${yMid}`);
    leftPoints.push(`100,${yEnd}`);
  }

  // Prawa krawędź ząbkowana (równoległa fala w tym samym kierunku)
  // Wypełnienie czernią od korpusu (x=0) w prawo do ząbkowanej linii
  const rightPoints = ['0,0', '100,0'];
  for (let i = 0; i < teethCount; i++) {
    const yMid = ((i + 0.5) * stepY).toFixed(3);
    const yEnd = ((i + 1) * stepY).toFixed(3);
    rightPoints.push(`0,${yMid}`);
    rightPoints.push(`100,${yEnd}`);
  }
  rightPoints.push('0,100');

  const curtain = document.createElement('div');
  curtain.className = 'dd-jagged-curtain';
  curtain.innerHTML = `
    <svg class="dd-curtain-edge dd-edge-left" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="${leftPoints.join(' ')}" fill="#000000" />
    </svg>
    <div class="dd-curtain-body"></div>
    <svg class="dd-curtain-edge dd-edge-right" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="${rightPoints.join(' ')}" fill="#000000" />
    </svg>
  `;

  // Bezpieczne wyliczenie szerokości w pikselach
  const screenW = Math.max(window.innerWidth || 0, document.documentElement?.clientWidth || 0, 1200);
  const totalOffset = screenW + 160;
  const startX = isLeft ? totalOffset : -totalOffset;
  const endX = isLeft ? -totalOffset : totalOffset;

  // Ustawienie początkowej pozycji w stylu inline, by uniknąć 1-klatkowego błysku
  curtain.style.transform = `translateX(${startX}px)`;
  document.body.appendChild(curtain);

  try {
    // Krok 1: Wjazd czarnej ząbkowanej kurtyny do środka (zasłonięcie planszy)
    const coverAnim = curtain.animate(
      [
        { transform: `translateX(${startX}px)` },
        { transform: 'translateX(0px)' }
      ],
      {
        duration: 400,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
      }
    );
    await coverAnim.finished;

    // Krok 2: Ekran jest w 100% czarny - wykonaj przełączenie planszy / sceny / callback
    if (onCovered) {
      await onCovered();
    }

    // Daj przeglądarce 2 klatki na wyrenderowanie nowej sceny w tle
    await new Promise((r) => requestAnimationFrame(r));
    await new Promise((r) => requestAnimationFrame(r));

    // Krok 3: Kontynuacja ruchu w lewo - odsłonięcie nowej planszy / sceny
    const uncoverAnim = curtain.animate(
      [
        { transform: 'translateX(0px)' },
        { transform: `translateX(${endX}px)` }
      ],
      {
        duration: 400,
        easing: 'cubic-bezier(0.3, 0, 0.2, 1)',
        fill: 'forwards'
      }
    );
    await uncoverAnim.finished;
  } catch (e) {
    if (onCovered) {
      await onCovered();
    }
  } finally {
    curtain.remove();
  }
}

