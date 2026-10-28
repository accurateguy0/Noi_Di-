// Menu Pauzy i Ustawień (Esc) w stylu Dicey Dungeons
// 1. Główne menu Esc: KONTYNUUJ, OPCJE, EDYTUJ PROGRES
// 2. Podmenu OPCJE: WYŚWIETL, DŹWIĘK, GRA, ZAMKNIJ OPCJE
// 3. Widok WYŚWIETL: PEŁNY EKRAN, W OKNIE, Wyłącz efekty ekranowe, Wyłącz shadery, Animacja walki
// 4. Wyciszanie muzyki (ducking) podczas aktywnego trybu Esc

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { episodeManager } from '../data/episodeManager.js';

let activeSettingsState = {
  view: 'main', // 'main' | 'options' | 'display' | 'sound' | 'gameplay' | 'edit_progress'
  disableScreenEffects: false,
  disableShaders: false,
  combatSpeed: 'very_fast', // 'normal' | 'fast' | 'very_fast'
  relaxedMode: false,
  boloHints: true,
  skipIntro: false
};

export function isRelaxedMode() {
  return Boolean(activeSettingsState.relaxedMode);
}

// Wczytaj zapamiętane preferencje wyświetlania
try {
  const savedOpts = localStorage.getItem('noidi_game_options');
  if (savedOpts) {
    activeSettingsState = { ...activeSettingsState, ...JSON.parse(savedOpts) };
  }
} catch (e) {}

function savePreferences() {
  try {
    localStorage.setItem('noidi_game_options', JSON.stringify(activeSettingsState));
  } catch (e) {}
}

export function openSettingsModal(app, initialView = 'main') {
  sound.playStep();

  // Wyciszenie muzyki tła w trybie Esc (ducking do 25%)
  musicManager.setEscDucking(true);

  let modalMount = document.getElementById('modal-mount');
  if (!modalMount) {
    modalMount = document.createElement('div');
    modalMount.id = 'modal-mount';
    document.getElementById('app').appendChild(modalMount);
  }
  modalMount.classList.remove('hidden');

  let currentView = initialView;
  let keyHandler = null;

  const closeModal = () => {
    sound.playStep();
    if (keyHandler) window.removeEventListener('keydown', keyHandler);
    // Przywrócenie normalnej głośności po zamknięciu Esc
    musicManager.setEscDucking(false);
    modalMount.classList.add('hidden');
    modalMount.innerHTML = '';
  };

  keyHandler = (e) => {
    if (e.key === 'Escape') {
      if (currentView === 'main') {
        closeModal();
      } else if (currentView === 'options') {
        currentView = 'main';
        render();
      } else {
        currentView = 'options';
        render();
      }
    }
  };
  window.addEventListener('keydown', keyHandler);

  const render = () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    const mainVol = Math.round((sound.getMasterVolume ? sound.getMasterVolume() : 1.0) * 100);
    const musicVol = Math.round(musicManager.getVolume() * 100);
    const sfxVol = Math.round((sound.getSfxVolume ? sound.getSfxVolume() : 0.92) * 100);
    const voicesVol = Math.round((sound.getVoiceVolume ? sound.getVoiceVolume() : 1.0) * 100);

    let contentHtml = '';

    // ==========================================
    // 1. GŁÓWNE MENU ESC (Obrazek 1)
    // 3 przyciski: KONTYNUUJ, OPCJE, EDYTUJ PROGRES
    // ==========================================
    if (currentView === 'main') {
      contentHtml = `
        <div class="esc-menu-container">
          <button class="btn-dd-block" id="esc-btn-continue" title="Wróć do gry">
            KONTYNUUJ
          </button>

          <button class="btn-dd-block" id="esc-btn-options" title="Przejdź do opcji gry">
            OPCJE
          </button>

          <button class="btn-dd-block btn-danger-red" id="esc-btn-edit-progress" title="Edytuj i zresetuj postęp">
            EDYTUJ PROGRES
          </button>
        </div>
      `;
    }

    // ==========================================
    // 2. PODMENU OPCJE (Obrazek 2)
    // Tytuł: SETTINGS
    // Przyciski: WYŚWIETL, DŹWIĘK, GRA, ZAMKNIJ OPCJE
    // ==========================================
    else if (currentView === 'options') {
      contentHtml = `
        <div class="esc-menu-container">
          <h2 class="esc-menu-title">SETTINGS</h2>

          <button class="btn-dd-block" id="options-btn-display">
            WYŚWIETL
          </button>

          <button class="btn-dd-block" id="options-btn-sound">
            DŹWIĘK
          </button>

          <button class="btn-dd-block" id="options-btn-gameplay">
            GRA
          </button>

          <button class="btn-dd-block" id="options-btn-close" style="margin-top: 14px;">
            ZAMKNIJ OPCJE
          </button>
        </div>
      `;
    }

    // ==========================================
    // 3. WIDOK: WYŚWIETL (Obrazek 3)
    // Tytuł: DISPLAY
    // FULLSCREEN / WINDOWED, checkboxy, suwak animacji, BACK
    // ==========================================
    else if (currentView === 'display') {
      contentHtml = `
        <div class="esc-menu-container" style="max-width: 480px;">
          <h2 class="esc-menu-title">DISPLAY</h2>

          <!-- Przełącznik Fullscreen / Windowed -->
          <div style="display: flex; gap: 12px; margin-bottom: 6px;">
            <button
              class="btn-dd-block ${isFullscreen ? 'is-active-dashed' : ''}"
              id="disp-btn-fullscreen"
              style="width: 140px; height: 44px; font-size: 1.05rem;"
            >
              PEŁNY EKRAN
            </button>
            <button
              class="btn-dd-block ${!isFullscreen ? 'is-active-dashed' : ''}"
              id="disp-btn-windowed"
              style="width: 140px; height: 44px; font-size: 1.05rem;"
            >
              W OKNIE
            </button>
          </div>

          <!-- Skala ekranu X1 -->
          <div style="background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 6px; font-family: 'Fredoka', sans-serif; font-weight: 800; color: #ffffff; font-size: 0.95rem; margin-bottom: 6px;">
            X1
          </div>

          <!-- Checkboxy retro -->
          <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 320px; margin: 4px 0;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #ffffff; font-family: 'Fredoka', sans-serif; font-size: 1.05rem;">
              <input
                type="checkbox"
                id="chk-disable-effects"
                ${activeSettingsState.disableScreenEffects ? 'checked' : ''}
                style="width: 20px; height: 20px; accent-color: #3b82f6; cursor: pointer;"
              />
              <span>Wyłącz efekty ekranowe</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: #ffffff; font-family: 'Fredoka', sans-serif; font-size: 1.05rem;">
              <input
                type="checkbox"
                id="chk-disable-shaders"
                ${activeSettingsState.disableShaders ? 'checked' : ''}
                style="width: 20px; height: 20px; accent-color: #3b82f6; cursor: pointer;"
              />
              <span>Wyłącz shadery</span>
            </label>
          </div>

          <!-- Suwak szybkości animacji walki -->
          <div style="width: 100%; max-width: 320px; margin: 8px 0; text-align: center;">
            <input
              type="range"
              id="slider-combat-speed"
              min="1"
              max="3"
              step="1"
              value="${activeSettingsState.combatSpeed === 'normal' ? 1 : activeSettingsState.combatSpeed === 'fast' ? 2 : 3}"
              style="width: 100%; height: 8px; border-radius: 4px; accent-color: #cbd5e1; cursor: pointer;"
            />
            <div style="color: #ffffff; font-family: 'Fredoka', sans-serif; font-size: 1rem; margin-top: 6px;">
              Animacja walki: <b style="color: #ffd166;">${activeSettingsState.combatSpeed === 'normal' ? 'Normalna' : activeSettingsState.combatSpeed === 'fast' ? 'Szybka' : 'Bardzo Szybka'}</b>
            </div>
          </div>

          <!-- Przycisk BACK -->
          <button class="btn-dd-block" id="disp-btn-back" style="margin-top: 14px;">
            BACK
          </button>
        </div>
      `;
    }

    // ==========================================
    // 4. WIDOK: DŹWIĘK (SOUND) (Wzór Dicey Dungeons z 4 suwakami)
    // ==========================================
    else if (currentView === 'sound') {
      contentHtml = `
        <div class="esc-menu-container" style="max-width: 380px; gap: 16px;">
          <h2 class="esc-menu-title" style="margin-bottom: 6px;">SOUND</h2>

          <div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
            <!-- 1. Main volume -->
            <div class="dd-sound-slider-group">
              <input
                type="range"
                id="slider-main-vol"
                class="dd-dicey-slider"
                min="0"
                max="100"
                value="${mainVol}"
              />
              <div class="dd-sound-row">
                <span class="dd-sound-label">Main volume:</span>
                <span class="dd-sound-val" id="val-main-vol">${mainVol}</span>
              </div>
            </div>

            <!-- 2. Music volume -->
            <div class="dd-sound-slider-group">
              <input
                type="range"
                id="slider-music-vol"
                class="dd-dicey-slider"
                min="0"
                max="100"
                value="${musicVol}"
              />
              <div class="dd-sound-row">
                <span class="dd-sound-label">Music volume:</span>
                <span class="dd-sound-val" id="val-music-vol">${musicVol}</span>
              </div>
            </div>

            <!-- 3. SFX volume -->
            <div class="dd-sound-slider-group">
              <input
                type="range"
                id="slider-sfx-vol"
                class="dd-dicey-slider"
                min="0"
                max="100"
                value="${sfxVol}"
              />
              <div class="dd-sound-row">
                <span class="dd-sound-label">SFX volume:</span>
                <span class="dd-sound-val" id="val-sfx-vol">${sfxVol}</span>
              </div>
            </div>

            <!-- 4. Voices volume -->
            <div class="dd-sound-slider-group">
              <input
                type="range"
                id="slider-voices-vol"
                class="dd-dicey-slider"
                min="0"
                max="100"
                value="${voicesVol}"
              />
              <div class="dd-sound-row">
                <span class="dd-sound-label">Voices volume:</span>
                <span class="dd-sound-val" id="val-voices-vol">${voicesVol}</span>
              </div>
            </div>
          </div>

          <button class="btn-dd-block" id="sound-btn-back" style="margin-top: 14px;">
            BACK
          </button>
        </div>
      `;
    }

    // ==========================================
    // 5. WIDOK: GRA (GAMEPLAY) (Wzór Dicey Dungeons: Relaxed Mode)
    // ==========================================
    else if (currentView === 'gameplay') {
      contentHtml = `
        <div class="esc-menu-container" style="max-width: 460px; gap: 20px;">
          <h2 class="esc-menu-title" style="margin-bottom: 8px;">GAMEPLAY</h2>

          <div style="display: flex; flex-direction: column; align-items: center; width: 100%; gap: 14px;">
            <!-- Checkbox Relaxed mode -->
            <label style="display: flex; align-items: center; gap: 14px; cursor: pointer; color: #ffffff; font-family: 'Fredoka', sans-serif; font-size: 1.45rem; font-weight: 800; letter-spacing: 0.5px;">
              <input
                type="checkbox"
                id="chk-relaxed-mode"
                ${activeSettingsState.relaxedMode ? 'checked' : ''}
                style="width: 24px; height: 24px; accent-color: #3b82f6; cursor: pointer;"
              />
              <span>Relaxed mode</span>
            </label>

            <!-- Opis z gry Dicey Dungeons -->
            <div style="color: #ffffff; font-family: 'Fredoka', 'Nunito', sans-serif; font-size: 1.05rem; line-height: 1.55; text-align: center; max-width: 440px; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">
              <p style="margin: 0 0 14px 0;">
                In relaxed mode, all enemies have 25% less health.
              </p>
              <p style="margin: 0;">
                Relaxed mode has no effect on progress or achievements, and can be turned on and off at will.
              </p>
            </div>
          </div>

          <button class="btn-dd-block" id="gameplay-btn-back" style="margin-top: 18px;">
            BACK
          </button>
        </div>
      `;
    }

    // ==========================================
    // 6. WIDOK: EDYTUJ PROGRES (EDIT PROGRESS)
    // ==========================================
    else if (currentView === 'edit_progress') {
      contentHtml = `
        <div class="esc-menu-container" style="max-width: 440px;">
          <h2 class="esc-menu-title" style="color: #ef4444;">EDIT PROGRESS</h2>

          <div style="background: rgba(15,23,42,0.7); padding: 18px; border-radius: 14px; border: 2px solid #ef4444; color: #f8fafc; text-align: center; font-family: 'Nunito', sans-serif; font-size: 0.95rem; line-height: 1.5; margin-bottom: 10px;">
            <p style="margin: 0 0 10px;">
              Możesz zresetować postępy wszystkich postaci, aby rozpocząć grę od początku od <b>Epizodu 1</b>.
            </p>
            <button
              class="btn-dd-block btn-danger-red"
              id="btn-confirm-reset"
              style="width: 100%; font-size: 1.1rem; height: 48px;"
            >
              🗑️ ZRESETUJ POSTĘP
            </button>
          </div>

          <button class="btn-dd-block" id="edit-progress-btn-back">
            BACK
          </button>
        </div>
      `;
    }

    modalMount.innerHTML = `
      <div class="esc-menu-backdrop" id="esc-backdrop">
        ${contentHtml}
      </div>
    `;

    bindEvents();
  };

  const bindEvents = () => {
    // 1. Główne menu Esc
    document.getElementById('esc-btn-continue')?.addEventListener('click', closeModal);
    document.getElementById('esc-btn-options')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'options';
      render();
    });
    document.getElementById('esc-btn-edit-progress')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'edit_progress';
      render();
    });

    // 2. Podmenu Opcje
    document.getElementById('options-btn-display')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'display';
      render();
    });
    document.getElementById('options-btn-sound')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'sound';
      render();
    });
    document.getElementById('options-btn-gameplay')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'gameplay';
      render();
    });
    document.getElementById('options-btn-close')?.addEventListener('click', closeModal);

    // 3. Widok Display
    document.getElementById('disp-btn-fullscreen')?.addEventListener('click', () => {
      sound.playStep();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      setTimeout(render, 100);
    });
    document.getElementById('disp-btn-windowed')?.addEventListener('click', () => {
      sound.playStep();
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setTimeout(render, 100);
    });
    document.getElementById('chk-disable-effects')?.addEventListener('change', (e) => {
      activeSettingsState.disableScreenEffects = e.target.checked;
      savePreferences();
    });
    document.getElementById('chk-disable-shaders')?.addEventListener('change', (e) => {
      activeSettingsState.disableShaders = e.target.checked;
      savePreferences();
    });
    document.getElementById('slider-combat-speed')?.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      activeSettingsState.combatSpeed = v === 1 ? 'normal' : v === 2 ? 'fast' : 'very_fast';
      savePreferences();
      render();
    });
    document.getElementById('disp-btn-back')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'options';
      render();
    });

    // 4. Widok Sound (4 suwaki)
    const mainSlider = document.getElementById('slider-main-vol');
    if (mainSlider) {
      mainSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        document.getElementById('val-main-vol').textContent = `${val}`;
        sound.setMasterVolume(val / 100);
        musicManager.setMasterVolume(val / 100);
      });
    }

    const musicSlider = document.getElementById('slider-music-vol');
    if (musicSlider) {
      musicSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        document.getElementById('val-music-vol').textContent = `${val}`;
        musicManager.setVolume(val / 100);
      });
    }

    const sfxSlider = document.getElementById('slider-sfx-vol');
    if (sfxSlider) {
      sfxSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        document.getElementById('val-sfx-vol').textContent = `${val}`;
        sound.setSfxVolume(val / 100);
      });
      sfxSlider.addEventListener('change', () => {
        sound.playHitImpact();
      });
    }

    const voicesSlider = document.getElementById('slider-voices-vol');
    if (voicesSlider) {
      voicesSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        document.getElementById('val-voices-vol').textContent = `${val}`;
        sound.setVoiceVolume(val / 100);
      });
      voicesSlider.addEventListener('change', () => {
        sound.speakPolish('Głośność lektora');
      });
    }

    document.getElementById('sound-btn-back')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'options';
      render();
    });

    // 5. Widok Gameplay (Relaxed mode)
    document.getElementById('chk-relaxed-mode')?.addEventListener('change', (e) => {
      activeSettingsState.relaxedMode = e.target.checked;
      savePreferences();
    });
    document.getElementById('gameplay-btn-back')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'options';
      render();
    });

    // 6. Widok Edit Progress
    document.getElementById('btn-confirm-reset')?.addEventListener('click', () => {
      if (confirm('Czy na pewno chcesz zresetować wszystkie postępy?')) {
        episodeManager.resetAllProgress();
        sound.playStep();
        alert('Postępy zostały zresetowane. Dostępny jest tylko Epizod 1.');
        currentView = 'main';
        render();
      }
    });
    document.getElementById('edit-progress-btn-back')?.addEventListener('click', () => {
      sound.playStep();
      currentView = 'main';
      render();
    });
  };

  render();
}

/**
 * Stylowe okno dialogowe CREDITS w teatralnym stylu Dicey Dungeons
 * Zgodne ze zrzutem ekranu: łuk sceny z żarówkami, postacie kości, przycisk TITLE oraz strzałka
 */
export function openCreditsModal(app) {
  sound.playStep();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  let creditsPage = 1;

  const renderCredits = () => {
    let contentHtml = '';

    if (creditsPage === 1) {
      contentHtml = `
        <h1 class="credits-main-title">CREATED BY</h1>

        <div class="credits-grid-layout">
          <!-- Kolumna 1 -->
          <div style="display: flex; flex-direction: column; gap: 28px;">
            <!-- 1. Design: Terry Cavanagh -->
            <div class="credits-person-card">
              <img src="./assets/Warrior.png" alt="Warrior" class="credits-dice-sprite" onerror="this.src='/assets/Warrior.png'" />
              <div>
                <div class="credits-role-tag">DESIGN</div>
                <div class="credits-name-tag">Terry Cavanagh</div>
              </div>
            </div>

            <!-- 2. Art and Animation: Marlowe Dobbe -->
            <div class="credits-person-card">
              <img src="./assets/Inventor.png" alt="Inventor" class="credits-dice-sprite" onerror="this.src='/assets/Inventor.png'" />
              <div>
                <div class="credits-role-tag">ART AND ANIMATION</div>
                <div class="credits-name-tag">Marlowe Dobbe</div>
              </div>
            </div>

            <!-- 3. PR and Marketing: Dana Trebella -->
            <div class="credits-person-card">
              <img src="./assets/Witch.png" alt="Witch" class="credits-dice-sprite" onerror="this.src='/assets/Witch.png'" />
              <div>
                <div class="credits-role-tag">PR AND MARKETING</div>
                <div class="credits-name-tag">Dana Trebella</div>
              </div>
            </div>
          </div>

          <!-- Kolumna 2 -->
          <div style="display: flex; flex-direction: column; gap: 28px;">
            <!-- 4. Music and Sound Design: Chipzel -->
            <div class="credits-person-card">
              <img src="./assets/Jester.png" alt="Chipzel" class="credits-dice-sprite" style="filter: brightness(0);" onerror="this.src='/assets/Jester.png'" />
              <div>
                <div class="credits-role-tag">MUSIC AND SOUND DESIGN</div>
                <div class="credits-name-tag">Niamh Houston / Chipzel</div>
              </div>
            </div>

            <!-- 5. Programming: Justo Delgado Baudí -->
            <div class="credits-person-card">
              <img src="./assets/Thief.png" alt="Thief" class="credits-dice-sprite" onerror="this.src='/assets/Thief.png'" />
              <div>
                <div class="credits-role-tag">PROGRAMMING</div>
                <div class="credits-name-tag">Justo Delgado Baudí</div>
              </div>
            </div>

            <!-- 6. Writing: Holly Gramazio -->
            <div class="credits-person-card">
              <img src="./assets/Robot.png" alt="Robot" class="credits-dice-sprite" onerror="this.src='/assets/Robot.png'" />
              <div>
                <div class="credits-role-tag">WRITING</div>
                <div class="credits-name-tag">Holly Gramazio</div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      contentHtml = `
        <h1 class="credits-main-title" style="color: #ffd166;">NÓI ĐI! PROJECT</h1>

        <div class="credits-grid-layout">
          <!-- Kolumna 1 -->
          <div style="display: flex; flex-direction: column; gap: 28px;">
            <div class="credits-person-card">
              <img src="./assets/Kotek_Pomoc.png" alt="Kotek" class="credits-dice-sprite" onerror="this.src='/assets/Kotek_Pomoc.png'" />
              <div>
                <div class="credits-role-tag">EDUKACJA & ROGUELIKE</div>
                <div class="credits-name-tag">Projekt Nói Đi! (Mów Śmiało!)</div>
              </div>
            </div>

            <div class="credits-person-card">
              <img src="./assets/itemki/zeszyt.png" alt="Zeszyt" class="credits-dice-sprite" />
              <div>
                <div class="credits-role-tag">PROGRAM DYDAKTYCZNY</div>
                <div class="credits-name-tag">Podstawa Programowa CKE Klasy 4–8</div>
              </div>
            </div>
          </div>

          <!-- Kolumna 2 -->
          <div style="display: flex; flex-direction: column; gap: 28px;">
            <div class="credits-person-card">
              <img src="./assets/itemki/kebab.png" alt="Kebab" class="credits-dice-sprite" />
              <div>
                <div class="credits-role-tag">KULTURA I SŁOWNICTWO</div>
                <div class="credits-name-tag">Konsultacje Językowe Polsko-Wietnamskie</div>
              </div>
            </div>

            <div class="credits-person-card">
              <img src="./assets/itemki/sluchawki_gamingowe.png" alt="Słuchawki" class="credits-dice-sprite" />
              <div>
                <div class="credits-role-tag">GŁOSY I LEKTORZY</div>
                <div class="credits-name-tag">Synteza Mowy PL + Odgłosy Bohaterów</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    modalMount.innerHTML = `
      <div class="credits-theatrical-screen" id="credits-backdrop">
        <!-- SVG Tła Sceny Teatralnej z żarówkami w stylu Dicey Dungeons -->
        <svg class="credits-stage-backdrop-svg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="stageGlow" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#841f26" />
              <stop offset="45%" stop-color="#5a1217" />
              <stop offset="85%" stop-color="#3b080c" />
              <stop offset="100%" stop-color="#240407" />
            </radialGradient>
            <filter id="bulbGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Tło i łuki sceny -->
          <rect width="1280" height="720" fill="url(#stageGlow)" />

          <!-- Koncentryczne łuki kurtyny -->
          <ellipse cx="640" cy="280" rx="580" ry="360" fill="none" stroke="#480f14" stroke-width="60" />
          <ellipse cx="640" cy="280" rx="460" ry="290" fill="none" stroke="#63161c" stroke-width="50" />
          <ellipse cx="640" cy="280" rx="360" ry="230" fill="none" stroke="#781d23" stroke-width="40" />

          <!-- Reflektory sceniczne w narożnikach -->
          <path d="M 40 -20 L 120 70 L 60 110 L -20 20 Z" fill="#2d0508" opacity="0.8" />
          <path d="M 1240 -20 L 1160 70 L 1220 110 L 1300 20 Z" fill="#2d0508" opacity="0.8" />

          <!-- Łuk z żarówkami teatralnymi -->
          <g filter="url(#bulbGlow)">
            <circle cx="80" cy="540" r="15" fill="#fef3c7" />
            <circle cx="95" cy="420" r="15" fill="#e2ded2" />
            <circle cx="125" cy="310" r="15" fill="#fde047" />
            <circle cx="175" cy="210" r="15" fill="#e2ded2" />
            <circle cx="255" cy="130" r="15" fill="#fef3c7" />
            <circle cx="360" cy="70" r="15" fill="#fde047" />
            <circle cx="485" cy="35" r="15" fill="#e2ded2" />
            <circle cx="640" cy="22" r="16" fill="#fef3c7" />
            <circle cx="795" cy="35" r="15" fill="#fde047" />
            <circle cx="920" cy="70" r="15" fill="#e2ded2" />
            <circle cx="1025" cy="130" r="15" fill="#fef3c7" />
            <circle cx="1105" cy="210" r="15" fill="#fde047" />
            <circle cx="1155" cy="310" r="15" fill="#e2ded2" />
            <circle cx="1185" cy="420" r="15" fill="#fef3c7" />
            <circle cx="1200" cy="540" r="15" fill="#fde047" />
          </g>

          <!-- Deski sceny / podłoga -->
          <rect y="580" width="1280" height="140" fill="#300609" />
          <line x1="0" y1="580" x2="1280" y2="580" stroke="#5a1217" stroke-width="4" />
        </svg>

        <!-- Przycisk TITLE w lewym górnym rogu -->
        <button class="credits-top-title-btn" id="credits-btn-title">
          TITLE
        </button>

        <!-- Warstwa treści z postaciami i autorami -->
        <div class="credits-content-layer">
          ${contentHtml}
        </div>

        <!-- Strzałka nawigacji w prawym dolnym rogu -->
        <button class="credits-arrow-btn" id="credits-arrow-btn" title="Kolejna strona">
          ${creditsPage === 1 ? '➔' : '⬅'}
        </button>
      </div>
    `;

    // Obsługa zdarzeń
    const closeCredits = () => {
      sound.playStep();
      modalMount.classList.add('hidden');
      modalMount.innerHTML = '';
    };

    document.getElementById('credits-btn-title')?.addEventListener('click', closeCredits);

    document.getElementById('credits-arrow-btn')?.addEventListener('click', () => {
      sound.playStep();
      creditsPage = creditsPage === 1 ? 2 : 1;
      renderCredits();
    });
  };

  renderCredits();
}

