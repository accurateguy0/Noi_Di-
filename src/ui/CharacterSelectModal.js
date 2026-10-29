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

// Hero pedestal animation cycles matching Dicey Dungeons idle cycles.
export const HERO_ANIMATIONS = {
  warrior: {
    loopDuration: 4200,
    keyframes: [
      { time: 0, frame: './assets/heroes/warrior/warrior_idle.png' },
      { time: 1200, frame: './assets/heroes/warrior/warrior_breathe.png' },
      { time: 1650, frame: './assets/heroes/warrior/warrior_blink.png' },
      { time: 1950, frame: './assets/heroes/warrior/warrior_breathe.png' },
      { time: 2600, frame: './assets/heroes/warrior/warrior_smile.png' },
      { time: 3600, frame: './assets/heroes/warrior/warrior_breathe.png' },
      { time: 4000, frame: './assets/heroes/warrior/warrior_idle.png' }
    ]
  },
  thief: {
    loopDuration: 4400,
    keyframes: [
      { time: 0, frame: './assets/heroes/thief/thief_idle.png' },
      { time: 1500, frame: './assets/heroes/thief/thief_blink.png' },
      { time: 1750, frame: './assets/heroes/thief/thief_idle.png' },
      { time: 2500, frame: './assets/heroes/thief/thief_smile.png' },
      { time: 4100, frame: './assets/heroes/thief/thief_idle.png' }
    ]
  },
  robot: {
    loopDuration: 4600,
    keyframes: [
      { time: 0, frame: './assets/heroes/robot/robot_idle.png' },
      { time: 1700, frame: './assets/heroes/robot/robot_blink.png' },
      { time: 1950, frame: './assets/heroes/robot/robot_idle.png' },
      { time: 2700, frame: './assets/heroes/robot/robot_smile.png' },
      { time: 4300, frame: './assets/heroes/robot/robot_idle.png' }
    ]
  },
  witch: {
    loopDuration: 4300,
    keyframes: [
      { time: 0, frame: './assets/heroes/witch/witch_idle.png' },
      { time: 1600, frame: './assets/heroes/witch/witch_blink.png' },
      { time: 1850, frame: './assets/heroes/witch/witch_idle.png' },
      { time: 2600, frame: './assets/heroes/witch/witch_smile.png' },
      { time: 4100, frame: './assets/heroes/witch/witch_idle.png' }
    ]
  },
  jester: {
    loopDuration: 4800,
    keyframes: [
      { time: 0, frame: './assets/heroes/jester/jester_idle.png' },
      { time: 1800, frame: './assets/heroes/jester/jester_blink.png' },
      { time: 2050, frame: './assets/heroes/jester/jester_idle.png' },
      { time: 2800, frame: './assets/heroes/jester/jester_smile.png' },
      { time: 4500, frame: './assets/heroes/jester/jester_idle.png' }
    ]
  },
  inventor: {
    loopDuration: 4500,
    keyframes: [
      { time: 0, frame: './assets/heroes/inventor/inventor_idle.png' },
      { time: 1700, frame: './assets/heroes/inventor/inventor_blink.png' },
      { time: 1950, frame: './assets/heroes/inventor/inventor_idle.png' },
      { time: 2700, frame: './assets/heroes/inventor/inventor_smile.png' },
      { time: 4200, frame: './assets/heroes/inventor/inventor_idle.png' }
    ]
  }
};

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

  let spriteTimer = null;
  let popTimer = null;
  let activeAnimTimers = [];
  let animLoopInterval = null;

  const stopHeroAnimation = () => {
    activeAnimTimers.forEach((t) => clearTimeout(t));
    activeAnimTimers = [];
    if (animLoopInterval) {
      clearTimeout(animLoopInterval);
      animLoopInterval = null;
    }
  };

  const startHeroAnimation = (heroId, isUnlocked) => {
    stopHeroAnimation();
    const sprite = document.getElementById('cs-hero-sprite');
    if (!sprite || !isUnlocked) return;

    const anim = HERO_ANIMATIONS[heroId];
    if (!anim || !anim.keyframes || anim.keyframes.length === 0) return;

    // Wstepne podgrzanie klatek w pamieci podrecznej (zero mrugniecia przy pierwszym ladowaniu)
    if (!anim._preloaded) {
      anim.keyframes.forEach((kf) => {
        const img = new Image();
        img.src = kf.frame;
      });
      anim._preloaded = true;
    }

    const playCycle = () => {
      stopHeroAnimation();
      anim.keyframes.forEach((kf) => {
        const timer = setTimeout(() => {
          const currentHero = HEROES[currentHeroIndex];
          if (currentHero && currentHero.id === heroId && sprite && !sprite.classList.contains('hero-shrinking')) {
            sprite.src = kf.frame;
          }
        }, kf.time);
        activeAnimTimers.push(timer);
      });
      animLoopInterval = setTimeout(playCycle, anim.loopDuration);
    };

    playCycle();
  };

  const getHeroData = (idx) => {
    const hero = HEROES[idx];
    const isHeroUnlocked = episodeManager.isHeroUnlocked(hero.id);
    const prevHeroId = episodeManager.getPreviousHeroId(hero.id);
    const prevHero = HEROES.find((h) => h.id === prevHeroId);
    const heroProgress = episodeManager.getHeroProgress(hero.id);
    const selectedPip = heroProgress.selected || 1;
    const selectedEp = hero.episodes.find((ep) => ep.pip === selectedPip) || hero.episodes[0];
    return { hero, isHeroUnlocked, prevHero, heroProgress, selectedPip, selectedEp };
  };

  const renderLeftBoardHtml = ({ hero, isHeroUnlocked, selectedEp }) => {
    if (isHeroUnlocked) {
      return `
        <div class="cs-board-card">
          <h2 class="cs-board-hero-title">${hero.englishName}</h2>
          <p class="cs-board-quote">„${selectedEp?.intro || hero.quote}”</p>
          <div class="cs-board-diff">
            <span class="cs-diff-label">TRUDNOŚĆ:</span>
            <span class="cs-diff-stars">${hero.difficultyStars}</span>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="cs-board-card cs-card-locked-left">
          <div class="cs-locked-contestant-label">
            ZABLOKOWANY ZAWODNIK
          </div>
        </div>
      `;
    }
  };

  const renderRightBoardHtml = ({ hero, isHeroUnlocked, selectedPip }) => {
    if (isHeroUnlocked) {
      return `
        <div class="cs-board-card">
          <h2 class="cs-board-episodes-title">EPIZODY</h2>
          <div class="cs-episodes-grid" id="cs-episodes-grid">
            ${hero.episodes.map((ep) => {
              const isUnlocked = episodeManager.isEpisodeUnlocked(hero.id, ep.pip);
              if (isUnlocked) {
                const isCompleted = episodeManager.isEpisodeCompleted(hero.id, ep.pip);
                const isSelected = ep.pip === selectedPip;

                return `
                  <div
                    class="cs-episode-badge is-unlocked ${isSelected ? 'is-selected' : ''} ${isCompleted ? 'is-completed' : ''}"
                    data-pip="${ep.pip}"
                    title="${ep.title} - ${isCompleted ? 'Ukończono!' : 'Kliknij, aby wybrać'}"
                  >
                    <div class="cs-episode-text">
                      <div class="cs-ep-top-line">
                        <span class="cs-ep-title">${ep.pip}. ${ep.title}</span>
                      </div>
                    </div>
                    <div class="cs-ep-status-pill">
                      ${isSelected ? '▶' : ''}
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div
                    class="cs-locked-episode-box"
                    data-pip="${ep.pip}"
                    title="Epizod ${ep.pip} jest zablokowany. Wygraj wcześniejszy epizod, aby odblokować!"
                  >
                    <svg class="cs-locked-box-svg" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 8 16 V 9 C 8 4 12 1 17 1 C 22 1 26 4 26 9 V 16" stroke="#FDE6CE" stroke-width="4.5" stroke-linecap="round"/>
                      <rect x="2" y="14" width="30" height="23" rx="6" fill="#FDE6CE"/>
                      <line x1="2" y1="25" x2="32" y2="25" stroke="#E6A163" stroke-width="1.2"/>
                      <circle cx="17" cy="25" r="5" stroke="#E6A163" stroke-width="1.5" fill="#FDE6CE"/>
                      <circle cx="17" cy="23.5" r="2" fill="#E6A163"/>
                      <path d="M 16 23.5 L 15.5 28 H 18.5 L 18 23.5 Z" fill="#E6A163"/>
                    </svg>
                  </div>
                `;
              }
            }).join('')}
          </div>
        </div>
      `;
    } else {
      return `
        <div class="cs-board-card cs-card-locked-right">
          <div class="cs-locked-right-content">
            <span class="cs-locked-padlock-icon">🔒</span>
            <span class="cs-locked-right-text">Zablokowane</span>
          </div>
        </div>
      `;
    }
  };

  const renderBottomAreaHtml = ({ hero, isHeroUnlocked, prevHero }) => {
    if (isHeroUnlocked) {
      return `
        <button class="cs-start-play-btn" id="cs-btn-start" title="Wybierz ${hero.name} i rozpocznij grę!">
          START
        </button>
      `;
    } else {
      return `
        <div class="cs-pedestal-lock-banner">
          <div class="cs-pedestal-lock-title">🔒 Aby odblokować tę postać:</div>
          <div class="cs-pedestal-lock-sub">${prevHero ? `Wygraj Epizod 1 postacią: ${prevHero.name}` : '???'}</div>
        </div>
      `;
    }
  };

  const updateSliderPosition = (idx, immediate = false) => {
    const slider = document.getElementById('cs-pip-bracket-slider');
    const buttons = screen.querySelectorAll('.cs-hero-pip-btn');
    if (!slider) return;

    buttons.forEach((btn, i) => {
      btn.classList.toggle('is-active', i === idx);
    });

    const targetBtn = buttons[idx];
    const left = (targetBtn && targetBtn.offsetLeft) ? targetBtn.offsetLeft : (idx * 56);

    if (immediate) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(${left}px) translateY(-4px) scale(1.18)`;
      void slider.offsetWidth; // force reflow
      slider.style.transition = 'transform 0.26s cubic-bezier(0.2, 0.9, 0.3, 1.1)';
    } else {
      slider.style.transform = `translateX(${left}px) translateY(-4px) scale(1.18)`;
    }
  };

  const bindEpisodeBadges = () => {
    screen.querySelectorAll('.cs-episode-badge').forEach((badge) => {
      badge.addEventListener('click', () => {
        const pip = Number(badge.getAttribute('data-pip'));
        const hero = HEROES[currentHeroIndex];
        if (episodeManager.isEpisodeUnlocked(hero.id, pip)) {
          episodeManager.setSelectedEpisode(hero.id, pip);
          sound.playStep();
          updateHeroBoards(currentHeroIndex);
        }
      });
    });
  };

  const bindStartButton = () => {
    document.getElementById('cs-btn-start')?.addEventListener('click', () => {
      const selected = HEROES[currentHeroIndex];
      if (!episodeManager.isHeroUnlocked(selected.id)) return;
      stopHeroAnimation();

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

  const updateHeroBoards = (idx) => {
    const data = getHeroData(idx);

    // 1. Lewa tablica
    const leftBoard = document.getElementById('cs-marquee-left');
    if (leftBoard) {
      leftBoard.className = `cs-marquee-board cs-marquee-left ${!data.isHeroUnlocked ? 'is-locked-board' : ''}`;
      leftBoard.innerHTML = renderLeftBoardHtml(data);
    }

    // 2. Prawa tablica
    const rightBoard = document.getElementById('cs-marquee-right');
    if (rightBoard) {
      rightBoard.className = `cs-marquee-board cs-marquee-right ${!data.isHeroUnlocked ? 'is-locked-board' : ''}`;
      rightBoard.innerHTML = renderRightBoardHtml(data);
      bindEpisodeBadges();
    }

    // 3. Dolny obszar (przycisk START / baner zablokowania)
    const bottomArea = document.getElementById('cs-bottom-action-area');
    if (bottomArea) {
      bottomArea.innerHTML = renderBottomAreaHtml(data);
      bindStartButton();
    }
  };

  const switchToHero = (newIndex) => {
    if (newIndex < 0 || newIndex >= HEROES.length) return;
    if (newIndex === currentHeroIndex && !spriteTimer) return;

    currentHeroIndex = newIndex;
    sound.setPlayerClass(HEROES[currentHeroIndex].characterClass);
    sound.playWhoosh();

    // 1. Płynne przesunięcie ramki klamerki
    updateSliderPosition(currentHeroIndex, false);

    // 2. Natychmiastowa aktualizacja tablic i przycisków
    updateHeroBoards(currentHeroIndex);

    // 3. Animacja zmniejszenia i powiększenia postaci na podeście
    const sprite = document.getElementById('cs-hero-sprite');
    if (sprite) {
      if (spriteTimer) clearTimeout(spriteTimer);
      if (popTimer) clearTimeout(popTimer);
      stopHeroAnimation();

      sprite.classList.remove('hero-popping');
      sprite.classList.add('hero-shrinking');

      spriteTimer = setTimeout(() => {
        spriteTimer = null;
        const data = getHeroData(currentHeroIndex);
        sprite.src = data.hero.avatar;
        sprite.alt = data.hero.name;
        sprite.onerror = () => { sprite.src = data.hero.fallbackAvatar; };
        sprite.classList.toggle('is-locked-hero', !data.isHeroUnlocked);
        sprite.classList.remove('hero-shrinking');
        sprite.classList.add('hero-popping');

        popTimer = setTimeout(() => {
          popTimer = null;
          sprite.classList.remove('hero-popping');
          startHeroAnimation(data.hero.id, data.isHeroUnlocked);
        }, 220);
      }, 120);
    }
  };

  const initStage = () => {
    const data = getHeroData(currentHeroIndex);

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

          <!-- 2. Rząd 6 kości bohaterów u góry z płynnie przesuwającą się klamerką -->
          <div class="cs-icons-row" id="cs-icons-row">
            <div class="cs-pip-bracket-slider" id="cs-pip-bracket-slider">
              <svg class="cs-pip-bracket-svg" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 2 9.5 V 3.5 C 2 2.67 2.67 2 3.5 2 H 10" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M 34 2 H 40.5 C 41.33 2 42 2.67 42 3.5 V 9.5" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M 2 32.5 V 38.5 C 2 39.33 2.67 40 3.5 40 H 10" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M 34 40 H 40.5 C 41.33 40 42 39.33 42 38.5 V 32.5" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
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
          <div class="cs-marquee-board cs-marquee-left ${!data.isHeroUnlocked ? 'is-locked-board' : ''}" id="cs-marquee-left">
            ${renderLeftBoardHtml(data)}
          </div>

          <!-- 6. Centralny podest i postać bohatera (Pedestal Sprite) -->
          <div class="cs-center-hero-wrap">
            <img class="cs-hero-pedestal-sprite ${!data.isHeroUnlocked ? 'is-locked-hero' : ''}" id="cs-hero-sprite" src="${data.hero.avatar}" alt="${data.hero.name}" onerror="this.src='${data.hero.fallbackAvatar}'" />
          </div>

          <!-- 7. Prawa świecąca tablica: Epizody LUB Zablokowane -->
          <div class="cs-marquee-board cs-marquee-right ${!data.isHeroUnlocked ? 'is-locked-board' : ''}" id="cs-marquee-right">
            ${renderRightBoardHtml(data)}
          </div>

          <!-- 8. Strzałka w prawo (Right Arrow) -->
          <button class="cs-arrow-btn cs-arrow-right" id="cs-arrow-right" title="Następny bohater (→)">
            ›
          </button>

          <!-- 9. Dolny obszar akcji (START lub Baner odblokowania) -->
          <div id="cs-bottom-action-area" style="display: contents;">
            ${renderBottomAreaHtml(data)}
          </div>
        </div>
      </div>
    `;

    // Wiązanie zdarzeń
    document.getElementById('cs-btn-menu')?.addEventListener('click', () => {
      stopHeroAnimation();
      sound.playStep();
      playJaggedCurtainWipe(() => {
        screen.classList.add('hidden');
        if (app.titleScreen) {
          app.titleScreen.show();
        }
        musicManager.playTitleMusic();
      });
    });

    document.getElementById('cs-btn-challenges')?.addEventListener('click', () => {
      stopHeroAnimation();
      sound.playStep();
      openFloorPickerModal(app);
    });

    document.getElementById('cs-arrow-left')?.addEventListener('click', () => {
      switchToHero((currentHeroIndex - 1 + HEROES.length) % HEROES.length);
    });

    document.getElementById('cs-arrow-right')?.addEventListener('click', () => {
      switchToHero((currentHeroIndex + 1) % HEROES.length);
    });

    screen.querySelectorAll('.cs-hero-pip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-hero-idx'));
        if (!isNaN(idx) && idx >= 0 && idx < HEROES.length) {
          switchToHero(idx);
        }
      });
    });

    bindEpisodeBadges();
    bindStartButton();

    requestAnimationFrame(() => {
      updateSliderPosition(currentHeroIndex, true);
      startHeroAnimation(data.hero.id, data.isHeroUnlocked);
    });
  };

  const onKeyHandler = (e) => {
    if (screen.classList.contains('hidden')) {
      stopHeroAnimation();
      window.removeEventListener('keydown', onKeyHandler);
      return;
    }

    const escMount = document.getElementById('esc-modal-mount');
    if (escMount && !escMount.classList.contains('hidden')) {
      return;
    }

    if (e.key === 'ArrowLeft') {
      switchToHero((currentHeroIndex - 1 + HEROES.length) % HEROES.length);
    } else if (e.key === 'ArrowRight') {
      switchToHero((currentHeroIndex + 1) % HEROES.length);
    } else if (e.key === 'Enter') {
      document.getElementById('cs-btn-start')?.click();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      openSettingsModal(app);
    }
  };

  window.addEventListener('keydown', onKeyHandler);

  const onResize = () => {
    if (!screen.classList.contains('hidden')) {
      updateSliderPosition(currentHeroIndex, true);
    }
  };
  window.addEventListener('resize', onResize);

  initStage();
}
