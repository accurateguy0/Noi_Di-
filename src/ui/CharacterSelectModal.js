// Ekran wyboru postaci w stylu Dicey Dungeons
// Tło: character_selection_background.png
// Scena z podestem, świecącymi tablicami (opis + epizody), strzałkami i przyciskiem START

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { episodeManager } from '../data/episodeManager.js';
import { getBoss } from '../data/bosses.js';
import { STORY, EPISODE_LEVELS } from '../data/storyData.js';
import { showEpisodeIntroModal } from './StoryModal.js';
import { getHeroLevelStats, WITCH_SPELLS } from '../data/characterProgression.js';
import { openSettingsModal } from './SettingsModal.js';

function buildHeroEpisodes(heroId) {
  return (STORY[heroId] || STORY.warrior).map((ep, idx) => {
    const boss = getBoss(ep.bossId);
    return {
      pip: idx + 1,
      title: ep.title,
      sub: `${ep.curriculum || '6 pięter'} • Boss: ${boss.name} (${boss.hp} HP)`,
      curriculum: ep.curriculum,
      boss: boss.name,
      bossId: boss.id,
      intro: ep.intro,
      taunt: ep.taunt,
      outro: ep.outro,
      difficultyTag: EPISODE_LEVELS[idx] || 'Klasa 4'
    };
  });
}

export const HEROES = [
  {
    id: 'warrior',
    name: 'Warrior',
    englishName: 'WARRIOR',
    characterClass: 'Warrior',
    avatar: './assets/Warrior.png',
    fallbackAvatar: './assets/Warrior.png',
    diceIcon: './assets/dice_heads/die_warrior.png',
    tagline: 'Nieugięta siła i odwaga',
    desc: 'Mistrz bezpośrednich starć językowych. Nie boi się trudnych słów ani gramatyki!',
    quote: '„Chcę po prostu super-siły i wielkiej odwagi, ale najpierw powtórzmy słówka ze szkoły!”',
    traitBadge: 'SPECJALNOŚĆ • FURIA 2× DMG',
    traitText: 'HP 24→44 • DMG 2→5 • Limit Break (8→13 HP): Furia pozwala uderzyć 2× mocniej!',
    difficultyStars: '⭐',
    difficultyText: '1/6 • Bardzo łatwy',
    color: '#ef4444',
    diceColor: '#3b82f6',
    episodes: buildHeroEpisodes('warrior')
  },
  {
    id: 'thief',
    name: 'Thief',
    englishName: 'THIEF',
    characterClass: 'Thief',
    avatar: './assets/Thief.png',
    fallbackAvatar: './assets/Thief.png',
    diceIcon: './assets/dice_heads/die_thief.png',
    tagline: 'Zwinny złodziej słów',
    desc: 'Zwinny spryciarz potrafiący wykradać literki i końcówki fleksyjne (DMG 2→5, Limit Break 8→13 HP).',
    quote: '„Zwinny i sprytny! Ukradnę brakujące końcówki ze słów i nikt mnie nie dogoni!”',
    traitBadge: 'SPECJALNOŚĆ • KRADZIEŻ',
    traitText: 'HP 24→44 • DMG 2→5 • Nagrody za poziom: Extra DMG oraz Ekwipunek',
    difficultyStars: '⭐⭐',
    difficultyText: '2/6 • Łatwy',
    color: '#3b82f6',
    diceColor: '#10b981',
    episodes: buildHeroEpisodes('thief')
  },
  {
    id: 'robot',
    name: 'Robot',
    englishName: 'ROBOT',
    characterClass: 'Robot',
    avatar: './assets/Robot.png',
    fallbackAvatar: './assets/Robot.png',
    diceIcon: './assets/dice_heads/die_robot.png',
    tagline: 'Logika składni i precyzja analizy',
    desc: 'Mistrz budowy zdania i interpunkcji. Trafienie w limit CPU aktywuje Jackpot!',
    quote: '„Precyzyjna logika i bezbłędna składnia zdania! Prawda zawsze wygrywa z błędem!”',
    traitBadge: 'SPECJALNOŚĆ • PROCESOR CPU',
    traitText: 'HP 24→44 • CPU 9→15 • Jackpot (Szczęśliwy strzał 5 DMG / +3 HP / +1 DMG)',
    difficultyStars: '⭐⭐⭐',
    difficultyText: '3/6 • Średni',
    color: '#06b6d4',
    diceColor: '#94a3b8',
    episodes: buildHeroEpisodes('robot')
  },
  {
    id: 'inventor',
    name: 'Inventor',
    englishName: 'INVENTOR',
    characterClass: 'Inventor',
    avatar: './assets/Inventor.png',
    fallbackAvatar: './assets/Inventor.png',
    diceIcon: './assets/dice_heads/die_inventor.png',
    tagline: 'Twórczyni form i konstrukcji słów',
    desc: 'Buduje teksty użytkowe i bada słowotwórstwo. Zapewnia +5 sekund w minigrach czasowych!',
    quote: '„Każdy wspaniały tekst wymaga dobrego planu, jasnej konstrukcji i odrobiny pomysłowości!”',
    traitBadge: 'SPECJALNOŚĆ • +5s W GRACH CZASOWYCH',
    traitText: 'HP 24→44 • DMG 2→5 • Umiejętność +5s w grach czasowych + Extra DMG / Ekwipunek',
    difficultyStars: '⭐⭐⭐⭐',
    difficultyText: '4/6 • Trudny',
    color: '#f59e0b',
    diceColor: '#f97316',
    episodes: buildHeroEpisodes('inventor')
  },
  {
    id: 'witch',
    name: 'Witch',
    englishName: 'WITCH',
    characterClass: 'Witch',
    avatar: './assets/Witch.png',
    fallbackAvatar: './assets/Witch.png',
    diceIcon: './assets/dice_heads/die_witch.png',
    tagline: 'Stylistyka, poezja i kanon lektur',
    desc: 'Odkrywa środki stylistyczne i motywy literackie. Dysponuje księgą 4 zaklęć żywiołów.',
    quote: '„Słowa mają niezwykłą moc! Wystarczy poznać środki stylistyczne i tajemnice ukryte w lekturach!”',
    traitBadge: 'SPECJALNOŚĆ • KSIĘGA 4 ZAKLĘĆ',
    traitText: 'HP 24→44 • DMG 3→5 • Fancy efekt bicia + ulepszane sloty zaklęć co poziom',
    difficultyStars: '⭐⭐⭐⭐⭐',
    difficultyText: '5/6 • Bardzo trudny',
    color: '#8b5cf6',
    diceColor: '#a855f7',
    episodes: buildHeroEpisodes('witch')
  },
  {
    id: 'jester',
    name: 'Jester',
    englishName: 'JESTER',
    characterClass: 'Jester',
    avatar: './assets/Jester.png',
    fallbackAvatar: './assets/Jester.png',
    diceIcon: './assets/dice_heads/die_jester_unlocked.png',
    tagline: 'Nieprzewidywalny mistrz uników',
    desc: 'Żongluje słowami, faktami i opiniami. Limit Break (8→13 HP) aktywuje unik przez 3 kolejne tury!',
    quote: '„Ha! Gdy naładuję Limit Break, unikam wszystkich ciosów przez kolejne 3 tury!”',
    traitBadge: 'SPECJALNOŚĆ • UNIK PRZEZ 3 TURY',
    traitText: 'HP 24→44 • DMG 2→5 • Limit Break (8→13 HP): unika ciosów przez 3 tury!',
    difficultyStars: '⭐⭐⭐⭐⭐⭐',
    difficultyText: '6/6 • Ekspert',
    color: '#ec4899',
    diceColor: '#e11d48',
    episodes: buildHeroEpisodes('jester')
  }
];

export function applyCharacterKit(app, characterClass) {
  const cls = (characterClass || 'Warrior').toLowerCase();
  const stats = getHeroLevelStats(characterClass, 1);

  app.player.level = 1;
  app.player.xp = 0;
  app.player.xpToNext = stats.xpToNext; // 2 EXP na Poziom 2
  app.player.maxHp = stats.maxHp; // 24 HP na Poziomie 1
  app.player.hp = stats.maxHp;
  app.player.limitBreakHp = stats.limitBreakHp; // 8 HP
  app.player.baseDamage = stats.baseDamage;
  app.player.bonusDamage = 0;
  app.player.bonusTimeSec = stats.bonusTimeSec;
  app.player.maxCpu = stats.maxCpu;
  app.player.spells = cls.includes('witch') ? [...WITCH_SPELLS] : [];
  app.player.upgradedSpells = 0;

  if (cls.includes('warrior')) {
    app.player.characterTrait = 'Warrior Fury (Limit Break 8→13 HP): 2× DMG!';
  } else if (cls.includes('thief')) {
    app.player.flawlessCoinBonus = 1;
    app.player.characterTrait = 'Thief: DMG 2→5, bonus coins and steal endings';
  } else if (cls.includes('robot')) {
    app.player.characterTrait = `Robot CPU (${stats.maxCpu} CPU): rolls 1–6, limit = JACKPOT!`;
  } else if (cls.includes('inventor')) {
    app.player.characterTrait = 'Inventor: +5s in timer minigames!';
  } else if (cls.includes('witch')) {
    app.player.characterTrait = 'Witch Spellbook: Burning Light, Electric Shock, Ice Shard, Sonic Wave';
  } else if (cls.includes('jester')) {
    app.player.characterTrait = 'Jester Dodge (Limit Break 8→13 HP): dodge hits for 3 turns!';
  }
}

export function selectHero(app, heroId, playSoundEffect = true) {
  const validId = (heroId && episodeManager.isHeroUnlocked(heroId)) ? heroId : 'warrior';
  const hero = HEROES.find((h) => h.id === validId) || HEROES[0];
  app.player.characterClass = hero.characterClass;
  app.player.name = hero.characterClass;
  app.player.avatar = hero.avatar;
  app.player.heroId = hero.id;
  app.player.heroName = hero.characterClass;

  const stats = getHeroLevelStats(hero.characterClass, app.player.level || 1);
  app.player.baseDamage = stats.baseDamage;
  app.player.maxHp = stats.maxHp;
  app.player.hp = Math.min(app.player.maxHp, app.player.hp || stats.maxHp);
  app.player.limitBreakHp = stats.limitBreakHp;
  app.player.maxCpu = stats.maxCpu;
  app.player.bonusTimeSec = stats.bonusTimeSec;

  sound.setPlayerClass(hero.characterClass);

  const tokenImg = document.getElementById('player-token-img');
  if (tokenImg) {
    tokenImg.src = hero.avatar;
    tokenImg.onerror = () => {
      tokenImg.src = hero.fallbackAvatar;
    };
  }

  const hudPortrait = document.getElementById('hud-portrait-img');
  if (hudPortrait) {
    hudPortrait.src = hero.avatar;
    hudPortrait.onerror = () => {
      hudPortrait.src = hero.fallbackAvatar;
    };
  }

  const heroBtnText = document.getElementById('current-hero-name');
  if (heroBtnText) {
    heroBtnText.textContent = hero.characterClass;
  }

  const hudName = document.getElementById('hud-char-name-text');
  if (hudName) {
    hudName.textContent = hero.name.toUpperCase();
  }

  const hudSub = document.getElementById('hud-char-sub-text');
  if (hudSub) {
    hudSub.textContent = `${hero.characterClass} • ${hero.tagline}`;
  }

  try {
    localStorage.setItem('noidi_selected_hero', hero.id);
  } catch (e) {}

  if (app.titleScreen && typeof app.titleScreen.updateHeroLabel === 'function') {
    app.titleScreen.updateHeroLabel();
  }

  if (playSoundEffect) {
    sound.playLevelUp();
  }
}

export function openCharacterSelectModal(app) {
  sound.playStep();

  // Ukryj przyciski planszy, aby nie nakładały się na ekran wyboru
  document.querySelector('.floating-corner-controls')?.classList.add('hidden');

  // Włącz muzykę Come On Down (utwór wyboru postaci)
  musicManager.playCharacterSelectMusic();

  // Sprawdź czy ekran już istnieje, jeśli nie stwórz go w #app
  let screen = document.getElementById('character-select-screen');
  if (!screen) {
    screen = document.createElement('div');
    screen.id = 'character-select-screen';
    screen.className = 'char-select-screen';
    document.getElementById('app').appendChild(screen);
  }

  screen.classList.remove('hidden');

  let activeHeroId = app.player?.heroId;
  if (!activeHeroId || !episodeManager.isHeroUnlocked(activeHeroId)) {
    try {
      const saved = localStorage.getItem('noidi_selected_hero');
      activeHeroId = (saved && episodeManager.isHeroUnlocked(saved)) ? saved : 'warrior';
    } catch (e) {
      activeHeroId = 'warrior';
    }
  }
  let currentHeroIndex = HEROES.findIndex((h) => h.id === activeHeroId);
  if (currentHeroIndex < 0) currentHeroIndex = 0;

  const renderStage = () => {
    const hero = HEROES[currentHeroIndex];
    const isHeroUnlocked = episodeManager.isHeroUnlocked(hero.id);
    const prevHeroId = episodeManager.getPreviousHeroId(hero.id);
    const prevHero = HEROES.find((h) => h.id === prevHeroId);
    const heroProgress = episodeManager.getHeroProgress(hero.id);
    const selectedPip = heroProgress.selected || 1;
    const selectedEp = hero.episodes.find((ep) => ep.pip === selectedPip) || hero.episodes[0];

    // Budowanie paska ikonek 6 bohaterów u góry sceny (nasze postacie z avatarów)
    const heroIconsHtml = HEROES.map((h, idx) => {
      const isUnlocked = episodeManager.isHeroUnlocked(h.id);
      const isActive = idx === currentHeroIndex;

      return `
        <button
          type="button"
          class="cs-hero-pip-btn ${isActive ? 'is-active' : ''} ${!isUnlocked ? 'is-locked-pip' : ''}"
          data-hero-idx="${idx}"
          title="${h.name} (${isUnlocked ? 'Odblokowany' : 'Zablokowany'})"
        >
          <div class="cs-pip-dice">
            <img src="${h.avatar}" alt="${h.name}" draggable="false" />
          </div>
          ${isActive ? `
            <svg class="cs-pip-bracket-svg" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 2 9.5 V 3.5 C 2 2.67 2.67 2 3.5 2 H 10" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M 34 2 H 40.5 C 41.33 2 42 2.67 42 3.5 V 9.5" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M 2 32.5 V 38.5 C 2 39.33 2.67 40 3.5 40 H 10" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M 34 40 H 40.5 C 41.33 40 42 39.33 42 38.5 V 32.5" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          ` : ''}
        </button>
      `;
    }).join('');

    screen.innerHTML = `
      <div class="char-select-stage-wrap">
        <div class="char-select-stage-inner">
          <!-- Bezpośredni element IMG tła sceny z fallbackiem -->
          <img
            class="cs-stage-bg-img"
            src="./assets/tla/character_selection_background.png"
            onerror="if(!this.src.includes('public/')) { this.src='./public/assets/tla/character_selection_background.png'; } else { this.src='/assets/tla/character_selection_background.png'; }"
            alt="Character Selection Stage"
          />

          <!-- 1. Przycisk MENU / TYTUŁ (górny lewy róg w ramce tła) -->
          <button class="cs-top-btn cs-btn-menu" id="cs-btn-menu" title="Powrót do menu głównego">
            TYTUŁ
          </button>

          <!-- 2. Rząd 6 kości bohaterów u góry -->
          <div class="cs-icons-row" id="cs-icons-row">
            ${heroIconsHtml}
          </div>

          <!-- 3. Przycisk WYZWANIA (górny prawy róg w ramce tła) -->
          <button class="cs-top-btn cs-btn-challenges" id="cs-btn-challenges" title="Wybór poziomu / Wyzwania">
            WYZWANIA
          </button>

          <!-- 4. Strzałka w lewo (Left Arrow) -->
          <button class="cs-arrow-btn cs-arrow-left" id="cs-arrow-left" title="Poprzedni bohater (←)">
            ‹
          </button>

          <!-- 5. Lewa świecąca tablica: Szczegóły bohatera LUB ZABLOKOWANY ZAWODNIK -->
          <div class="cs-marquee-board cs-marquee-left ${!isHeroUnlocked ? 'is-locked-board' : ''}">
            ${isHeroUnlocked ? `
              <div class="cs-board-card">
                <h2 class="cs-board-hero-title">${hero.englishName}</h2>
                <p class="cs-board-quote">„${selectedEp?.intro || hero.quote}”</p>
                <div class="cs-board-diff">
                  <span class="cs-diff-label">TRUDNOŚĆ:</span>
                  <span class="cs-diff-stars">${hero.difficultyStars}</span>
                </div>
              </div>
            ` : `
              <div class="cs-board-card cs-card-locked-left">
                <div class="cs-locked-contestant-label">
                  ZABLOKOWANY ZAWODNIK
                </div>
              </div>
            `}
          </div>

          <!-- 6. Centralny podest i postać bohatera (Pedestal Sprite) -->
          <div class="cs-center-hero-wrap">
            <img class="cs-hero-pedestal-sprite ${!isHeroUnlocked ? 'is-locked-hero' : ''}" id="cs-hero-sprite" src="${hero.avatar}" alt="${hero.name}" onerror="this.src='${hero.fallbackAvatar}'" />
            ${!isHeroUnlocked ? `
              <div class="cs-pedestal-lock-banner">
                <div class="cs-pedestal-lock-title">🔒 Aby odblokować tę postać:</div>
                <div class="cs-pedestal-lock-sub">${prevHero ? `Wygraj Epizod 1 postacią: ${prevHero.name}` : '???'}</div>
              </div>
            ` : ''}
          </div>

          <!-- 7. Prawa świecąca tablica: Epizody LUB Zablokowane -->
          <div class="cs-marquee-board cs-marquee-right ${!isHeroUnlocked ? 'is-locked-board' : ''}">
            ${isHeroUnlocked ? `
              <div class="cs-board-card">
                <h2 class="cs-board-episodes-title">EPIZODY</h2>
                <div class="cs-episodes-grid" id="cs-episodes-grid">
                  ${hero.episodes.map((ep) => {
                    const isUnlocked = episodeManager.isEpisodeUnlocked(hero.id, ep.pip);
                    const isCompleted = episodeManager.isEpisodeCompleted(hero.id, ep.pip);
                    const isSelected = ep.pip === selectedPip;

                    return `
                      <div
                        class="cs-episode-badge ${isUnlocked ? 'is-unlocked' : 'is-locked'} ${isSelected ? 'is-selected' : ''} ${isCompleted ? 'is-completed' : ''}"
                        data-pip="${ep.pip}"
                        title="${ep.title} (${ep.sub}) - ${isCompleted ? 'Ukończono!' : isUnlocked ? 'Kliknij, aby wybrać' : 'Zablokowany'}"
                      >
                        <div class="cs-episode-text">
                          <div class="cs-ep-top-line">
                            <span class="cs-ep-title">${ep.pip}. ${ep.title}</span>
                          </div>
                          <span class="cs-ep-sub">${ep.sub}</span>
                        </div>
                        <div class="cs-ep-status-pill">
                          ${isCompleted ? '👑' : isSelected ? '▶' : isUnlocked ? '' : '🔒'}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : `
              <div class="cs-board-card cs-card-locked-right">
                <div class="cs-locked-right-content">
                  <span class="cs-locked-padlock-icon">🔒</span>
                  <span class="cs-locked-right-text">Zablokowane</span>
                </div>
              </div>
            `}
          </div>

          <!-- 8. Strzałka w prawo (Right Arrow) -->
          <button class="cs-arrow-btn cs-arrow-right" id="cs-arrow-right" title="Następny bohater (→)">
            ›
          </button>

          <!-- 9. Dolny czerwony przycisk START (tylko dla odblokowanej postaci) -->
          ${isHeroUnlocked ? `
            <button class="cs-start-play-btn" id="cs-btn-start" title="Wybierz ${hero.name} i rozpocznij grę!">
              START
            </button>
          ` : ''}
        </div>
      </div>
    `;

    bindStageEvents();
  };

  const bindStageEvents = () => {
    // 1. Menu
    document.getElementById('cs-btn-menu')?.addEventListener('click', () => {
      sound.playStep();
      playJaggedCurtainWipe(() => {
        screen.classList.add('hidden');
        if (app.titleScreen) {
          app.titleScreen.show();
        }
        musicManager.playTitleMusic();
      });
    });

    // 2. Wyzwania
    document.getElementById('cs-btn-challenges')?.addEventListener('click', () => {
      sound.playStep();
      openFloorPickerModal(app);
    });

    // 3. Kliknięcie w kość bohatera u góry
    screen.querySelectorAll('.cs-hero-pip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-hero-idx'));
        if (!isNaN(idx) && idx >= 0 && idx < HEROES.length) {
          currentHeroIndex = idx;
          sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
          renderStage();
        }
      });
    });

    // 4. Kliknięcie w epizod na prawej tablicy
    screen.querySelectorAll('.cs-episode-badge').forEach((badge) => {
      badge.addEventListener('click', () => {
        const pip = Number(badge.getAttribute('data-pip'));
        const hero = HEROES[currentHeroIndex];
        if (episodeManager.isEpisodeUnlocked(hero.id, pip)) {
          episodeManager.setSelectedEpisode(hero.id, pip);
          sound.playStep();
          renderStage();
        } else {
          badge.classList.remove('shake-hit');
          void badge.offsetWidth;
          badge.classList.add('shake-hit');
        }
      });
    });

    // 5. Strzałka w lewo (bez efektów dźwiękowych podczas przełączania postaci!)
    document.getElementById('cs-arrow-left')?.addEventListener('click', () => {
      currentHeroIndex = (currentHeroIndex - 1 + HEROES.length) % HEROES.length;
      sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
      renderStage();
    });

    // 6. Strzałka w prawo (bez efektów dźwiękowych podczas przełączania postaci!)
    document.getElementById('cs-arrow-right')?.addEventListener('click', () => {
      currentHeroIndex = (currentHeroIndex + 1) % HEROES.length;
      sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
      renderStage();
    });

    // 7. Przycisk START
    document.getElementById('cs-btn-start')?.addEventListener('click', () => {
      const selected = HEROES[currentHeroIndex];
      if (!episodeManager.isHeroUnlocked(selected.id)) return;

      const selectedPip = episodeManager.getSelectedEpisode(selected.id);
      const chosenEpisode = selected.episodes.find((ep) => ep.pip === selectedPip) || selected.episodes[0];

      selectHero(app, selected.id, false);
      sound.setPlayerClass(selected.characterClass);
      sound.playFanfare();

      app.currentEpisode = chosenEpisode;

      // Zresetuj statystyki biegu dla nowego epizodu (6 pięter)
      app.player.level = 1;
      app.player.xp = 0;
      app.player.xpToNext = 100;
      app.player.coins = selected.id === 'thief' ? 3 : 0;
      app.player.score = 0;
      app.player.diceCount = 3;
      app.player.boughtSneakers = false;
      if (app.player.boughtShopItemIds) {
        app.player.boughtShopItemIds.clear();
      }
      if (app.unlockedWordIds) {
        app.unlockedWordIds.clear();
      }

      // Zastosuj unikalne statystyki dla danej klasy (Class Kit)
      applyCharacterKit(app, selected.characterClass);

      playJaggedCurtainWipe(() => {
        screen.classList.add('hidden');
        if (app.titleScreen) {
          app.titleScreen.hide();
        }
        document.querySelector('.floating-corner-controls')?.classList.remove('hidden');

        // Rozpocznij pełny bieg od Poziomu 0 (Szatnia: Rozgrzewka)
        app.loadFloor(0);
        musicManager.playBoardMusic(0, app.player);
        app.renderBoard();
        app.updateHUD();
      });
    });
  };

  // Obsługa klawiatury (Strzałki lewo/prawo bez dźwięków przy przełączaniu postaci, Enter, Escape)
  const onKeyHandler = (e) => {
    if (screen.classList.contains('hidden')) {
      window.removeEventListener('keydown', onKeyHandler);
      return;
    }

    // Jeśli menu Esc jest otwarte na wierzchu, nie przechwytuj klawiszy
    const escMount = document.getElementById('esc-modal-mount');
    if (escMount && !escMount.classList.contains('hidden')) {
      return;
    }

    if (e.key === 'ArrowLeft') {
      currentHeroIndex = (currentHeroIndex - 1 + HEROES.length) % HEROES.length;
      sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
      renderStage();
    } else if (e.key === 'ArrowRight') {
      currentHeroIndex = (currentHeroIndex + 1) % HEROES.length;
      sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
      renderStage();
    } else if (e.key === 'Enter') {
      document.getElementById('cs-btn-start')?.click();
    } else if (e.key === 'Escape') {
      // Naciśnięcie Esc otwiera menu pauzy/opcji ze ściszeniem dźwięku bez uciekania do menu głównego
      e.preventDefault();
      openSettingsModal(app);
    }
  };

  window.addEventListener('keydown', onKeyHandler);

  renderStage();
}
