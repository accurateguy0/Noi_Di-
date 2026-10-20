// System dynamicznej muzyki tła w stylu Dicey Dungeons (OST by Chipzel)
// Zarządza odtwarzaniem, płynnym przejściem (fade) oraz dopasowaniem do modułów, walk, bossów i interfejsów

class MusicManager {
  constructor() {
    this.currentTrack = null;
    this.currentTrackName = null;
    this.currentFloor = 1;
    this.muted = false;
    this.volume = 0.38;
    this.m1_2_combatIndex = 0;
    this.m3_4_combatIndex = 0;
    this.interactionUnlocked = false;
    this.pendingPlay = null;

    this.initUserInteraction();
  }

  initUserInteraction() {
    const unlock = () => {
      this.interactionUnlocked = true;
      if (this.pendingPlay && !this.muted) {
        const fn = this.pendingPlay;
        this.pendingPlay = null;
        fn();
      }
      if (this.currentTrack && !this.currentTrack.paused) {
        const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click'];
        events.forEach((ev) => {
          if (typeof window !== 'undefined' && window.removeEventListener) window.removeEventListener(ev, unlock, true);
          if (typeof document !== 'undefined' && document.removeEventListener) document.removeEventListener(ev, unlock, true);
        });
      }
    };

    const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click'];
    events.forEach((ev) => {
      if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener(ev, unlock, { capture: true });
      if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener(ev, unlock, { capture: true });
    });
  }

  getModuleNumber(floor = this.currentFloor) {
    const f = String(floor);
    if (f.startsWith('m5_')) return 5;
    if (f.startsWith('m4_')) return 4;
    if (f.startsWith('m3_')) return 3;
    if (
      f.startsWith('city_') ||
      f === 'miasto' ||
      ['8', '9', '10', '11'].includes(f)
    ) {
      return 2;
    }
    return 1;
  }

  getAudioUrl(filename) {
    return `/assets/music/${encodeURIComponent(filename)}`;
  }

  playTrack(filename, loop = true) {
    if (this.currentTrackName === filename && this.currentTrack && !this.currentTrack.paused) {
      return;
    }

    const startPlaying = () => {
      if (this.muted) {
        this.currentTrackName = filename;
        return;
      }

      // Płynne wyciszenie i zatrzymanie poprzedniego utworu
      const oldTrack = this.currentTrack;
      if (oldTrack) {
        try {
          const fadeInterval = setInterval(() => {
            if (oldTrack.volume > 0.05) {
              oldTrack.volume = Math.max(0, oldTrack.volume - 0.08);
            } else {
              clearInterval(fadeInterval);
              oldTrack.pause();
              oldTrack.src = '';
            }
          }, 35);
        } catch (e) {
          oldTrack.pause();
        }
      }

      try {
        const audio = new Audio(this.getAudioUrl(filename));
        audio.loop = loop;
        audio.volume = this.volume;

        audio.addEventListener('error', () => {
          // Fallback w przypadku innej ścieżki bazowej serwera deweloperskiego
          if (!audio.src.includes('./assets/')) {
            audio.src = `./assets/music/${encodeURIComponent(filename)}`;
            audio.play().catch(() => {});
          }
        });

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // Przeglądarka zablokowała autoplay przed pierwszym klikiem użytkownika
            this.pendingPlay = () => this.playTrack(filename, loop);
          });
        }

        this.currentTrack = audio;
        this.currentTrackName = filename;
      } catch (e) {
        // Ignoruj błędy audio
      }
    };

    if (!this.interactionUnlocked) {
      this.currentTrackName = filename;
      this.pendingPlay = startPlaying;
      return;
    }

    startPlaying();
  }

  stopTrack() {
    if (this.currentTrack) {
      try {
        this.currentTrack.pause();
        this.currentTrack.src = '';
      } catch (e) {}
      this.currentTrack = null;
    }
    this.currentTrackName = null;
  }

  setMuted(muted) {
    this.muted = Boolean(muted);
    if (this.muted) {
      if (this.currentTrack) {
        this.currentTrack.pause();
      }
    } else {
      if (this.currentTrack && this.currentTrack.paused) {
        this.currentTrack.play().catch(() => {});
      } else if (this.currentTrackName) {
        const trackToResume = this.currentTrackName;
        this.currentTrackName = null;
        this.playTrack(trackToResume);
      }
    }
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // ==================== MUZYKA PLANSZY (AMBIENT MODUŁU) ====================
  // Moduł 1: Chipzel - 24 Szatnia
  // Moduł 2: Chipzel - 18 Miasto
  // Moduł 3: Chipzel - 23 Klasa
  // Moduł 4: Chipzel - 20 Gabinet
  // Moduł 5: Chipzel - 19 Pokój
  playBoardMusic(floor = this.currentFloor) {
    this.currentFloor = floor;
    const mod = this.getModuleNumber(floor);

    let track;
    if (mod === 1) {
      track = 'Chipzel - 24 Szatnia.mp3';
    } else if (mod === 2) {
      track = 'Chipzel - 18 Miasto.mp3';
    } else if (mod === 3) {
      track = 'Chipzel - 23 Klasa.mp3';
    } else if (mod === 4) {
      track = 'Chipzel - 20 Gabinet.mp3';
    } else {
      track = 'Chipzel - 19 Pokój.mp3';
    }

    this.playTrack(track, true);
  }

  resumeBoardMusic() {
    this.playBoardMusic(this.currentFloor);
  }

  // ==================== MUZYKA WALKI / MINIGRY ====================
  // W module 1,2 naprzemiennie: Chipzel - 03 Beginners Luck i Chipzel - 04 Fighting Chance
  // W module 3,4 naprzemiennie: Chipzel - 06 Step Right Up i Chipzel - 07 Tempting Fate
  // W module 5: Chipzel - 05 Swing Me Another 6
  playCombatMusic(floor = this.currentFloor) {
    const mod = this.getModuleNumber(floor);

    let track;
    if (mod === 1 || mod === 2) {
      const tracks = [
        'Chipzel - 03 Beginners Luck.mp3',
        'Chipzel - 04 Fighting Chance.mp3'
      ];
      track = tracks[this.m1_2_combatIndex % tracks.length];
      this.m1_2_combatIndex += 1;
    } else if (mod === 3 || mod === 4) {
      const tracks = [
        'Chipzel - 06 Step Right Up.mp3',
        'Chipzel - 07 Tempting Fate.mp3'
      ];
      track = tracks[this.m3_4_combatIndex % tracks.length];
      this.m3_4_combatIndex += 1;
    } else {
      track = 'Chipzel - 05 Swing Me Another 6.mp3';
    }

    this.playTrack(track, true);
  }

  // ==================== MUZYKA BOSS FIGHTÓW ====================
  // Moduł 1 Boss (Piłkarz): Chipzel - 09 Against All Odds
  // Moduł 2 Boss (Cwaniak): Chipzel - 10 Elimination Round
  // Moduł 3 Boss (Nauczycielka): Chipzel - 11 Lifeline
  // Moduł 4 Boss (Lekarz): Chipzel - 12 Bonus Round
  // Moduł 5 Boss (Instagramerka): Chipzel - 14 Fortune Favours The Bold
  playBossFightMusic(modNumber = null) {
    const mod = modNumber !== null ? modNumber : this.getModuleNumber(this.currentFloor);

    let track;
    if (mod === 1) {
      track = 'Chipzel - 09 Against All Odds.mp3';
    } else if (mod === 2) {
      track = 'Chipzel - 10 Elimination Round.mp3';
    } else if (mod === 3) {
      track = 'Chipzel - 11 Lifeline.mp3';
    } else if (mod === 4) {
      track = 'Chipzel - 12 Bonus Round.mp3';
    } else {
      track = 'Chipzel - 14 Fortune Favours The Bold.mp3';
    }

    this.playTrack(track, true);
  }

  // ==================== MUZYKA WYGRANEJ ====================
  // Interfejs wygranej: Chipzel - 15 A Brand New Washing Machine!
  playVictoryMusic() {
    this.playTrack('Chipzel - 15 A Brand New Washing Machine!.mp3', true);
  }

  // ==================== MUZYKA SKRZYNI / KSIĘGI SŁÓW / EKWIPUNKU ====================
  // Interfejs skrzyni / nagrody / książki: Chipzel - 28 Play To Win
  playChestMusic() {
    this.playTrack('Chipzel - 28 Play To Win.mp3', true);
  }

  playBookMusic() {
    this.playTrack('Chipzel - 28 Play To Win.mp3', true);
  }
}

export const musicManager = new MusicManager();
