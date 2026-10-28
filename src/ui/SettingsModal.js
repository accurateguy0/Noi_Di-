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
 * Stylowe okno dialogowe CREDITS (Twórcy i Podziękowania) w stylu Dicey Dungeons
 */
export function openCreditsModal(app) {
  sound.playStep();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop" id="credits-backdrop" style="position: fixed; inset: 0; background: rgba(3,7,18,0.85); backdrop-filter: blur(6px); z-index: 100005; display: flex; align-items: center; justify-content: center; padding: 16px;">
      <div style="background: #18181b; border: 3px solid #3f3f46; border-radius: 20px; max-width: 580px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.8); overflow: hidden; display: flex; flex-direction: column;">
        <div style="background: linear-gradient(135deg, #1e3a6a, #2563eb); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #334155;">
          <h2 style="margin: 0; font-family: 'Fredoka', sans-serif; font-size: 1.6rem; color: #ffffff; letter-spacing: 1px;">
            📜 CREDITS • TWÓRCY GRY
          </h2>
          <button id="credits-close-x" style="background: transparent; border: none; font-size: 1.4rem; color: #cbd5e1; cursor: pointer;">✕</button>
        </div>

        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; font-family: 'Nunito', sans-serif; color: #f1f5f9; max-height: 440px; overflow-y: auto;">
          <div style="background: rgba(255,255,255,0.05); padding: 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <strong style="color: #ffd166; font-size: 1.1rem; display: block; font-family: 'Fredoka', sans-serif;">Nói Đi! (Mów Śmiało!)</strong>
            <span style="font-size: 0.88rem; color: #94a3b8;">Edukacyjny roguelike języka polskiego dla dzieci i młodzieży pochodzenia wietnamskiego.</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
              <span style="color: #60a5fa; font-weight: 800; font-size: 0.82rem; text-transform: uppercase;">🎮 Koncepcja & Mechanika</span>
              <p style="margin: 4px 0 0; font-weight: 700;">Inspirowana mechanikami gry Dicey Dungeons (Terry Cavanagh & Marlowe Dobbe).</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
              <span style="color: #34d399; font-weight: 800; font-size: 0.82rem; text-transform: uppercase;">🎵 Muzyka & Ścieżka dźwiękowa</span>
              <p style="margin: 4px 0 0; font-weight: 700;">Chipzel (oryginalne utwory retro chiptune).</p>
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
            <span style="color: #f472b6; font-weight: 800; font-size: 0.82rem; text-transform: uppercase;">📚 Opracowanie Dydaktyczne</span>
            <p style="margin: 4px 0 0; font-size: 0.9rem;">
              Program lektur, gramatyki, ortografii, komunikacji szkolnej i słownictwa polsko-wietnamskiego przygotowany zgodnie z podstawą programową CKE klas 4–8.
            </p>
          </div>
        </div>

        <div style="padding: 14px 24px; border-top: 1px solid #27272a; display: flex; justify-content: flex-end; background: #0f172a;">
          <button id="credits-ok-btn" style="padding: 9px 26px; border-radius: 10px; border: none; background: #2563eb; color: white; font-family: 'Fredoka', sans-serif; font-weight: 800; font-size: 1rem; cursor: pointer;">
            ZAMKNIJ
          </button>
        </div>
      </div>
    </div>
  `;

  const closeCredits = () => {
    sound.playStep();
    modalMount.classList.add('hidden');
    modalMount.innerHTML = '';
  };

  document.getElementById('credits-close-x')?.addEventListener('click', closeCredits);
  document.getElementById('credits-ok-btn')?.addEventListener('click', closeCredits);
  document.getElementById('credits-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'credits-backdrop') closeCredits();
  });
}
