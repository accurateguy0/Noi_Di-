// Modal Ustawień w stylu Dicey Dungeons (Głośność, SFX, Reset postępów)

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { episodeManager } from '../data/episodeManager.js';

export function openSettingsModal(app) {
  sound.playStep();

  // Sprawdź czy kontener modala istnieje
  let modalMount = document.getElementById('modal-mount');
  if (!modalMount) {
    modalMount = document.createElement('div');
    modalMount.id = 'modal-mount';
    document.getElementById('app').appendChild(modalMount);
  }
  modalMount.classList.remove('hidden');

  const bgmVol = Math.round(musicManager.getVolume() * 100);
  const sfxVol = Math.round((sound.getSfxVolume ? sound.getSfxVolume() : 0.9) * 100);
  const isMuted = sound.isMuted();

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop" id="settings-backdrop" style="z-index: 100005; position: fixed; inset: 0;">
      <div class="dd-modal-window dd-settings-window" style="max-width: 580px; width: 92%; position: relative; z-index: 100006;">
        <div class="dd-modal-header" style="background: linear-gradient(135deg, #1e3a5f, #2563eb);">
          <div class="dd-modal-title-cluster">
            <span class="dd-modal-badge">OPCJE I DŹWIĘK</span>
            <h2 class="dd-modal-title">USTAWIENIA GRY</h2>
            <p class="dd-modal-sub">Dostosuj głośność muzyki i efektów dźwiękowych.</p>
          </div>
          <button class="dd-modal-close-btn" id="settings-close-btn" title="Zamknij">✕</button>
        </div>

        <div class="dd-settings-body" style="padding: 24px; display: flex; flex-direction: column; gap: 20px;">
          <!-- 1. Głośność Muzyki (BGM) -->
          <div class="settings-row" style="display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label for="bgm-slider" style="color: #f8fafc; font-weight: 800; font-size: 1rem;">
                🎵 Głośność Muzyki (BGM)
              </label>
              <span id="bgm-val-label" style="color: #60a5fa; font-weight: 800; font-size: 1.1rem;">${bgmVol}%</span>
            </div>
            <input
              type="range"
              id="bgm-slider"
              min="0"
              max="100"
              value="${bgmVol}"
              style="width: 100%; height: 8px; border-radius: 4px; accent-color: #3b82f6; cursor: pointer;"
            />
          </div>

          <!-- 2. Głośność Efektów Dźwiękowych (SFX) -->
          <div class="settings-row" style="display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label for="sfx-slider" style="color: #f8fafc; font-weight: 800; font-size: 1rem;">
                🔊 Głośność Dźwięków (SFX)
              </label>
              <span id="sfx-val-label" style="color: #34d399; font-weight: 800; font-size: 1.1rem;">${sfxVol}%</span>
            </div>
            <input
              type="range"
              id="sfx-slider"
              min="0"
              max="100"
              value="${sfxVol}"
              style="width: 100%; height: 8px; border-radius: 4px; accent-color: #10b981; cursor: pointer;"
            />
          </div>

          <!-- 3. Przełącznik Wyciszenia -->
          <div class="settings-row" style="display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 12px 16px; border-radius: 12px; border: 1.5px solid #334155;">
            <div>
              <strong style="color: #f8fafc; display: block; font-size: 0.95rem;">Wyciszenie dźwięków</strong>
              <span style="color: #94a3b8; font-size: 0.8rem;">Całkowite wyciszenie muzyki i odgłosów</span>
            </div>
            <button
              id="settings-mute-toggle"
              style="
                padding: 8px 16px;
                border-radius: 8px;
                border: none;
                font-weight: 800;
                cursor: pointer;
                background: ${isMuted ? '#ef4444' : '#10b981'};
                color: white;
              "
            >
              ${isMuted ? 'WYCISZONY' : 'WŁĄCZONY'}
            </button>
          </div>

          <!-- 4. Reset postępów -->
          <div class="settings-row" style="display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 12px 16px; border-radius: 12px; border: 1.5px solid #334155;">
            <div>
              <strong style="color: #f8fafc; display: block; font-size: 0.95rem;">Zresetuj postępy gry</strong>
              <span style="color: #94a3b8; font-size: 0.8rem;">Rozpocznij przygodę od początku (zostawia tylko Epizod 1)</span>
            </div>
            <div>
              <button
                id="settings-reset-episodes-btn"
                style="padding: 8px 16px; border-radius: 8px; border: none; font-weight: 800; cursor: pointer; background: #ef4444; color: white; font-size: 0.82rem;"
                title="Resetuje postępy epizodów (zostawia tylko Epizod 1)"
              >
                RESETUJ POSTĘPY
              </button>
            </div>
          </div>
        </div>

        <div class="dd-modal-footer" style="padding: 16px 24px; display: flex; justify-content: flex-end; border-top: 1px solid #334155; background: #0f172a;">
          <button
            id="settings-ok-btn"
            style="
              padding: 10px 28px;
              background: #2563eb;
              color: white;
              font-weight: 800;
              border: none;
              border-radius: 10px;
              cursor: pointer;
              font-size: 1rem;
            "
          >
            ZATWIERDŹ
          </button>
        </div>
      </div>
    </div>
  `;

  let onKey = null;
  const closeModal = () => {
    sound.playStep();
    if (onKey) window.removeEventListener('keydown', onKey);
    modalMount.classList.add('hidden');
    modalMount.innerHTML = '';
  };

  onKey = (e) => {
    if (e.key === 'Escape') closeModal();
  };
  window.addEventListener('keydown', onKey);

  document.getElementById('settings-close-btn')?.addEventListener('click', closeModal);
  document.getElementById('settings-ok-btn')?.addEventListener('click', closeModal);

  document.getElementById('settings-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'settings-backdrop') {
      closeModal();
    }
  });

  // Slider BGM
  const bgmSlider = document.getElementById('bgm-slider');
  const bgmLabel = document.getElementById('bgm-val-label');
  if (bgmSlider) {
    bgmSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      bgmLabel.textContent = `${val}%`;
      musicManager.setVolume(val / 100);
    });
  }

  // Slider SFX
  const sfxSlider = document.getElementById('sfx-slider');
  const sfxLabel = document.getElementById('sfx-val-label');
  if (sfxSlider) {
    sfxSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      sfxLabel.textContent = `${val}%`;
      if (sound.setSfxVolume) sound.setSfxVolume(val / 100);
    });
    sfxSlider.addEventListener('change', () => {
      sound.playHitImpact();
    });
  }

  // Przełącznik Mute
  const muteBtn = document.getElementById('settings-mute-toggle');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const nowMuted = sound.toggleMute();
      muteBtn.style.background = nowMuted ? '#ef4444' : '#10b981';
      muteBtn.textContent = nowMuted ? 'WYCISZONY' : 'WŁĄCZONY';
    });
  }

  // Reset postępów epizodów
  document.getElementById('settings-reset-episodes-btn')?.addEventListener('click', () => {
    if (confirm('Czy na pewno chcesz zresetować postępy wszystkich postaci?')) {
      episodeManager.resetAllProgress();
      sound.playStep();
      alert('Zresetowano postępy. Dostępny jest tylko Epizod 1.');
    }
  });
}
