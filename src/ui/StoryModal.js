// Modal fabularny epizodu (wstęp przed 1. piętrem oraz zapowiedź bossa na 6. piętrze)

import { sound } from '../audio/sound.js';
import { getBoss } from '../data/bosses.js';
import { getStoryEpisode } from '../data/storyData.js';

export function showEpisodeIntroModal(app, { hero, pip, onContinue } = {}) {
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) {
    if (onContinue) onContinue();
    return;
  }

  const heroId = hero?.id || app.player?.heroId || 'warrior';
  const heroName = hero?.characterClass || hero?.name || app.player?.characterClass || 'Warrior';
  const heroAvatar = hero?.avatar || app.player?.avatar || './assets/Warrior.png';
  const ep = getStoryEpisode(heroId, pip || app.currentEpisode?.pip || 1);
  const boss = getBoss(ep.bossId);

  modalMount.classList.remove('hidden');
  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container" style="max-width: 660px; border: 3px solid ${hero?.color || '#f59e0b'};">
        <div class="dd-city-header" style="display: flex; align-items: center; justify-content: center; gap: 12px;">
          <h2>EPIZOD ${ep.pip} (${ep.difficultyTag}): ${ep.title.toUpperCase()}</h2>
        </div>

        <div style="display: flex; align-items: center; gap: 18px; background: rgba(15, 23, 42, 0.75); border-radius: 14px; padding: 14px 18px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.14);">
          <img src="${heroAvatar}" alt="${heroName}" style="width: 78px; height: 78px; object-fit: contain; flex-shrink: 0;" />
          <div style="text-align: left;">
            <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; color: #ffd166; text-transform: uppercase;">
              ${heroName} • ${ep.curriculum || 'Podstawa programowa'}
            </div>
            <p style="margin: 6px 0 0; font-size: 1.02rem; line-height: 1.45; color: #f8fafc;">
              ${ep.intro}
            </p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 16px; background: rgba(127, 29, 29, 0.45); border-radius: 14px; padding: 12px 16px; margin: 10px 0 16px; border: 1px solid rgba(248, 113, 113, 0.4);">
          <img src="${boss.avatar}" alt="${boss.name}" onerror="this.src='${boss.fallbackAvatar || './assets/Postacie/Pilkarz.png'}'" style="width: 72px; height: 72px; object-fit: contain; flex-shrink: 0;" />
          <div style="text-align: left;">
            <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.06em; color: #fca5a5; text-transform: uppercase;">
              Boss na 6. piętrze: ${boss.name} (${boss.hp} HP, bije ${boss.dmg})
            </div>
            <p style="margin: 5px 0 0; font-size: 0.95rem; font-style: italic; color: #fef2f2;">
              „${ep.taunt}”
            </p>
          </div>
        </div>

        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="story-intro-start-btn" style="background: #10b981; color: #fff; font-weight: 800; width: 100%;">
            WYRUSZ NA 1. PIĘTRO (6 PIĘTER DO BOSSA)
          </button>
        </div>
      </div>
    </div>
  `;

  const startBtn = modalMount.querySelector('#story-intro-start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      sound.playStep();
      app.closeModal();
      if (onContinue) onContinue();
    });
  }
}
