// Modal Ustawień w stylu Dicey Dungeons (Głośność, SFX, Reset postępów)

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { episodeManager } from '../data/episodeManager.js';

export function openSettingsModal(app) {
  sound.playStep();

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
    <div
      class="dicey-modal-backdrop"
      id="settings-backdrop"
      style="
        z-index: 100005;
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.78);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
      "
    >
      <div
        class="dd-modal-window dd-settings-window"
        style="
          max-width: 520px;
          width: 100%;
          background: #0f172a;
          border: 2px solid #334155;
          border-radius: 20px;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.18);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: ddModalPopIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        "
      >
        <!-- Nagłówek okna -->
        <div
          style="
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 20px 24px 16px;
            background: linear-gradient(135deg, #1e3a6a 0%, #172554 100%);
            border-bottom: 2px solid #1e293b;
          "
        >
          <div>
            <span
              style="
                display: inline-block;
                padding: 3px 10px;
                background: rgba(59, 130, 246, 0.25);
                border: 1px solid #3b82f6;
                border-radius: 999px;
                font-size: 0.72rem;
                font-weight: 800;
                color: #93c5fd;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 6px;
              "
            >
              OPCJE I DŹWIĘK
            </span>
            <h2
              style="
                margin: 0;
                font-family: 'Fredoka', 'Nunito', sans-serif;
                font-size: 1.55rem;
                font-weight: 800;
                color: #ffffff;
                letter-spacing: 0.5px;
              "
            >
              USTAWIENIA GRY
            </h2>
            <p style="margin: 4px 0 0; font-size: 0.85rem; color: #cbd5e1;">
              Dostosuj głośność muzyki i efektów dźwiękowych.
            </p>
          </div>
          <button
            id="settings-close-btn"
            title="Zamknij"
            style="
              width: 36px;
              height: 36px;
              border-radius: 10px;
              background: rgba(255, 255, 255, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.18);
              color: #cbd5e1;
              font-size: 1.25rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.15s ease;
              flex-shrink: 0;
              margin-left: 12px;
            "
            onmouseover="this.style.background='#ef4444'; this.style.borderColor='#ef4444'; this.style.color='#fff';"
            onmouseout="this.style.background='rgba(255, 255, 255, 0.08)'; this.style.borderColor='rgba(255, 255, 255, 0.18)'; this.style.color='#cbd5e1';"
          >
            ✕
          </button>
        </div>

        <!-- Zawartość / Opcje -->
        <div style="padding: 22px 24px; display: flex; flex-direction: column; gap: 16px;">
          <!-- 1. Głośność Muzyki (BGM) -->
          <div
            style="
              background: #1e293b;
              padding: 14px 18px;
              border-radius: 14px;
              border: 1.5px solid #334155;
              display: flex;
              flex-direction: column;
              gap: 10px;
            "
          >
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label for="bgm-slider" style="color: #f8fafc; font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                <span>🎵</span> Głośność Muzyki (BGM)
              </label>
              <span
                id="bgm-val-label"
                style="
                  background: rgba(59, 130, 246, 0.2);
                  border: 1px solid rgba(59, 130, 246, 0.4);
                  color: #60a5fa;
                  font-weight: 800;
                  font-size: 0.9rem;
                  padding: 2px 10px;
                  border-radius: 12px;
                "
              >
                ${bgmVol}%
              </span>
            </div>
            <input
              type="range"
              id="bgm-slider"
              min="0"
              max="100"
              value="${bgmVol}"
              style="width: 100%; height: 8px; border-radius: 6px; accent-color: #3b82f6; cursor: pointer;"
            />
          </div>

          <!-- 2. Głośność Efektów Dźwiękowych (SFX) -->
          <div
            style="
              background: #1e293b;
              padding: 14px 18px;
              border-radius: 14px;
              border: 1.5px solid #334155;
              display: flex;
              flex-direction: column;
              gap: 10px;
            "
          >
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label for="sfx-slider" style="color: #f8fafc; font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                <span>🔊</span> Głośność Dźwięków (SFX)
              </label>
              <span
                id="sfx-val-label"
                style="
                  background: rgba(16, 185, 129, 0.2);
                  border: 1px solid rgba(16, 185, 129, 0.4);
                  color: #34d399;
                  font-weight: 800;
                  font-size: 0.9rem;
                  padding: 2px 10px;
                  border-radius: 12px;
                "
              >
                ${sfxVol}%
              </span>
            </div>
            <input
              type="range"
              id="sfx-slider"
              min="0"
              max="100"
              value="${sfxVol}"
              style="width: 100%; height: 8px; border-radius: 6px; accent-color: #10b981; cursor: pointer;"
            />
          </div>

          <!-- 3. Przełącznik Wyciszenia -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: #1e293b;
              padding: 14px 18px;
              border-radius: 14px;
              border: 1.5px solid #334155;
              gap: 16px;
            "
          >
            <div>
              <strong style="color: #f8fafc; display: block; font-size: 0.95rem;">Wyciszenie dźwięków</strong>
              <span style="color: #94a3b8; font-size: 0.8rem;">Włącz lub całkowicie wycisz dźwięk w grze</span>
            </div>
            <button
              id="settings-mute-toggle"
              style="
                padding: 9px 18px;
                border-radius: 10px;
                border: none;
                font-family: 'Fredoka', 'Nunito', sans-serif;
                font-weight: 800;
                cursor: pointer;
                background: ${isMuted ? '#ef4444' : '#10b981'};
                color: white;
                font-size: 0.88rem;
                letter-spacing: 0.5px;
                box-shadow: 0 4px 12px ${isMuted ? 'rgba(239, 68, 68, 0.35)' : 'rgba(16, 185, 129, 0.35)'};
                white-space: nowrap;
                transition: transform 0.1s ease, filter 0.15s ease;
              "
              onmouseover="this.style.filter='brightness(1.1)';"
              onmouseout="this.style.filter='brightness(1)';"
            >
              ${isMuted ? '🔇 WYCISZONY' : '🔊 WŁĄCZONY'}
            </button>
          </div>

          <!-- 4. Reset postępów -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: #1e293b;
              padding: 14px 18px;
              border-radius: 14px;
              border: 1.5px solid #334155;
              gap: 16px;
            "
          >
            <div>
              <strong style="color: #f8fafc; display: block; font-size: 0.95rem;">Zresetuj postępy gry</strong>
              <span style="color: #94a3b8; font-size: 0.8rem;">Rozpocznij od nowa (zostawia tylko Epizod 1)</span>
            </div>
            <button
              id="settings-reset-episodes-btn"
              style="
                padding: 9px 18px;
                border-radius: 10px;
                border: none;
                font-family: 'Fredoka', 'Nunito', sans-serif;
                font-weight: 800;
                cursor: pointer;
                background: #dc2626;
                color: white;
                font-size: 0.88rem;
                letter-spacing: 0.5px;
                white-space: nowrap;
                box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
                transition: transform 0.1s ease, filter 0.15s ease;
              "
              title="Resetuje postępy epizodów (zostawia tylko Epizod 1)"
              onmouseover="this.style.filter='brightness(1.15)';"
              onmouseout="this.style.filter='brightness(1)';"
            >
              RESETUJ POSTĘP
            </button>
          </div>
        </div>

        <!-- Stopka -->
        <div
          style="
            padding: 14px 24px;
            display: flex;
            justify-content: flex-end;
            border-top: 1.5px solid #1e293b;
            background: #0b1120;
          "
        >
          <button
            id="settings-ok-btn"
            style="
              padding: 10px 32px;
              background: linear-gradient(135deg, #2563eb, #1d4ed8);
              color: white;
              font-family: 'Fredoka', 'Nunito', sans-serif;
              font-weight: 800;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-size: 1rem;
              letter-spacing: 0.5px;
              box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
              transition: transform 0.1s ease, filter 0.15s ease;
            "
            onmouseover="this.style.filter='brightness(1.1)';"
            onmouseout="this.style.filter='brightness(1)';"
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
      muteBtn.style.boxShadow = nowMuted
        ? '0 4px 12px rgba(239, 68, 68, 0.35)'
        : '0 4px 12px rgba(16, 185, 129, 0.35)';
      muteBtn.textContent = nowMuted ? '🔇 WYCISZONY' : '🔊 WŁĄCZONY';
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
