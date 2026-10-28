// Ekran startowy (Title Screen) w stylu Dicey Dungeons
// Tło: Start_page_background.png z bohaterami i logo Nói Đi!
// Przyciski akcji w prawym dolnym rogu (GRAJ, WYBIERZ BOHATERA, WYBIERZ PLANSZĘ)

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { openCharacterSelectModal } from './CharacterSelectModal.js';
import { openSettingsModal, openCreditsModal } from './SettingsModal.js';

export class TitleScreen {
  constructor(app) {
    this.app = app;
    this.container = null;
    this.isVisible = true;
  }

  mount(parent = document.getElementById('app')) {
    if (!parent) return;

    // Usuń ewentualną poprzednią instancję
    const existing = document.getElementById('title-screen-container');
    if (existing) existing.remove();

    this.container = document.createElement('div');
    this.container.id = 'title-screen-container';
    this.container.className = 'title-screen-container';

    const currentHeroName = this.app.player?.characterClass || this.app.player?.heroName || 'Warrior';
    const currentClass = this.app.player?.characterClass || 'Warrior';

    this.container.innerHTML = `
      <!-- Rozmyte tło ambientne eliminujące czarne pasy na nietypowych proporcjach ekranu -->
      <img
        class="title-bg-ambient"
        src="./assets/tla/Start_page_background.png"
        onerror="if(!this.src.includes('public/')) { this.src='./public/assets/tla/Start_page_background.png'; } else { this.src='/assets/tla/Start_page_background.png'; }"
        alt=""
        aria-hidden="true"
      />

      <!-- Główne tło w pełnej krasie (bez ucinania góry i dołu - object-fit: contain) -->
      <img
        class="title-bg-img"
        src="./assets/tla/Start_page_background.png"
        onerror="if(!this.src.includes('public/')) { this.src='./public/assets/tla/Start_page_background.png'; } else { this.src='/assets/tla/Start_page_background.png'; }"
        alt="Noi Di Start"
      />

      <div class="title-screen-backdrop">
        <!-- Prawy dolny obszar w stylu Dicey Dungeons: ROZPOCZNIJ GRĘ oraz CREDITS -->
        <div class="title-actions-cluster">
          <button class="dd-title-btn btn-title-play" id="title-btn-play">
            <span class="dd-title-btn-icon">▶</span>
            <span class="dd-title-btn-text">ROZPOCZNIJ GRĘ</span>
          </button>

          <button class="dd-title-btn btn-title-credits" id="title-btn-credits" title="Informacje o autorze i twórcach">
            <span class="dd-title-btn-icon">📜</span>
            <span class="dd-title-btn-text">AUTOR</span>
          </button>
        </div>
      </div>
    `;

    parent.appendChild(this.container);
    this.bindEvents();
    this.isVisible = true;

    // Ukryj przyciski planszy (Menu, Wybierz planszę itp.) na ekranie startowym
    document.querySelector('.floating-corner-controls')?.classList.add('hidden');

    // Odtwórz motyw tytułowy Chipzela (Your Host For Tonight)
    musicManager.playTitleMusic();
  }

  bindEvents() {
    // Odblokowanie dźwięku przy pierwszym dotknięciu/kliknięciu w ekran tytułowy
    this.container.addEventListener('pointerdown', () => {
      musicManager.interactionUnlocked = true;
      if (!musicManager.currentTrack || musicManager.currentTrack.paused) {
        musicManager.playTitleMusic();
      }
    });

    const playBtn = document.getElementById('title-btn-play');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        sound.playStep();
        playJaggedCurtainWipe(() => {
          openCharacterSelectModal(this.app);
        });
      });
    }

    // Przycisk AUTOR w prawym dolnym rogu (z ząbkowaną kurtyną)
    const creditsBtn = document.getElementById('title-btn-credits');
    if (creditsBtn) {
      creditsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.playStep();
        playJaggedCurtainWipe(() => {
          openCreditsModal(this.app);
        });
      });
    }

    // Hover audio dla przycisków
    this.container.querySelectorAll('.dd-title-btn').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        sound.playStep();
      });
    });
  }

  updateHeroLabel() {
    const heroSub = document.getElementById('title-hero-sub');
    const heroAvatar = document.getElementById('title-hero-avatar-img');
    if (this.app.player) {
      const cls = this.app.player.characterClass || 'Warrior';
      if (heroSub) heroSub.textContent = cls;
      if (heroAvatar) heroAvatar.src = this.app.player.avatar || './assets/Warrior.png';
    }
  }

  show() {
    if (!this.container) {
      this.mount();
      return;
    }
    this.container.classList.remove('hidden');
    document.querySelector('.floating-corner-controls')?.classList.add('hidden');
    this.updateHeroLabel();
    this.isVisible = true;
    musicManager.playTitleMusic();
  }

  hide() {
    if (this.container) {
      this.container.classList.add('hidden');
    }
    document.querySelector('.floating-corner-controls')?.classList.remove('hidden');
    this.isVisible = false;
  }
}
