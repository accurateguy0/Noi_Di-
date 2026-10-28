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

    const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click', 'pointermove'];
    events.forEach((ev) => {
      if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener(ev, unlock, { capture: true, passive: true });
      if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener(ev, unlock, { capture: true, passive: true });
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
    const encoded = encodeURIComponent(filename);
    return `./assets/music/${encoded}`;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, Number(vol) || 0));
    if (this.currentTrack && !this.muted) {
      this.currentTrack.volume = this.volume;
    }
  }

  getVolume() {
    return this.volume;
  }

  // Wyciszenie muzyki tła w trybie menu pauzy (Esc) i przywrócenie normalnej głośności po wyjściu
  setEscDucking(isDucked) {
    this.isEscDucked = Boolean(isDucked);
    if (this.muted || !this.currentTrack) return;
    try {
      this.currentTrack.volume = this.isEscDucked ? Math.max(0.04, this.volume * 0.25) : this.volume;
    } catch (e) {}
  }

  // Krótkie ściszenie muzyki tła (ducking) podczas zadawania/otrzymywania ciosu, aby efekty uderzeń były wyraźnie słyszalne
  duck(durationMs = 650) {
    if (this.muted || !this.currentTrack || this.currentTrack.paused) return;
    try {
      this.currentTrack.volume = Math.max(0.08, this.volume * 0.32);
      if (this.duckTimeout) clearTimeout(this.duckTimeout);
      this.duckTimeout = setTimeout(() => {
        if (this.currentTrack && !this.muted) {
          this.currentTrack.volume = this.volume;
        }
      }, durationMs);
    } catch (e) {}
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

      // Wyczyść ewentualny trwający interwał wyciszania
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }

      // Płynne i definitywne zatrzymanie poprzedniego utworu
      const oldTrack = this.currentTrack;
      if (oldTrack) {
        try {
          oldTrack._cancelled = true;
          oldTrack.pause();
          oldTrack.currentTime = 0;
          oldTrack.removeAttribute('src');
          oldTrack.load();
        } catch (e) {}
      }

      try {
        const encoded = encodeURIComponent(filename);
        const candidates = [
          `./assets/music/${encoded}`,
          `/assets/music/${encoded}`,
          `assets/music/${encoded}`,
          `./public/assets/music/${encoded}`
        ];
        let candidateIdx = 0;
        const audio = new Audio(candidates[0]);
        audio.loop = loop;
        audio.volume = this.muted ? 0 : this.volume;
        audio._cancelled = false;

        audio.addEventListener('error', () => {
          if (audio._cancelled) return;
          candidateIdx++;
          if (candidateIdx < candidates.length) {
            audio.src = candidates[candidateIdx];
            audio.play().catch(() => {});
          }
        });

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            this.pendingPlay = () => this.playTrack(filename, loop);
          });
        }

        this.currentTrack = audio;
        this.currentTrackName = filename;
      } catch (e) {
        // Ignoruj błędy audio
      }
    };

    startPlaying();
  }

  stopTrack() {
    if (this.currentTrack) {
      try {
        this.currentTrack._cancelled = true;
        this.currentTrack.pause();
        this.currentTrack.currentTime = 0;
        this.currentTrack.removeAttribute('src');
        this.currentTrack.load();
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
  playBoardMusic(floor = this.currentFloor, player = null) {
    this.currentFloor = floor;
    if (player && player.hp > 0 && player.hp <= Math.ceil(player.maxHp / 6)) {
      this.playTrack('Chipzel - 08 Prepare To Dice.mp3', true);
      return;
    }
    const f = Math.max(0, Math.min(6, isNaN(Number(floor)) ? 1 : Number(floor)));

    // Dopasowana ścieżka muzyczna tła do klimatu każdego piętra:
    // Plansza 0 (Szatnia): Szatnia
    // Plansza 1 (Korytarz i Klasa): Klasa
    // Plansza 2 (Klasa i Ławka): Klasa
    // Plansza 3 (Gabinet i Kryzys): Gabinet
    // Plansza 4 (Korytarz i Aula): Klasa (szkolny ambient korytarza)
    // Plansza 5 (Boisko i Hala sportowa): Chipzel - 19 Pokoj_lub_Boisko
    // Plansza 6 (Finał - Boss Piłkarz): Chipzel - 24 Szatnia_lub_Boss
    const boardTracks = {
      0: 'Chipzel - 24 Szatnia_lub_Boss.mp3',
      1: 'Chipzel - 23 Klasa.mp3',
      2: 'Chipzel - 23 Klasa.mp3',
      3: 'Chipzel - 20 Gabinet.mp3',
      4: 'Chipzel - 23 Klasa.mp3',
      5: 'Chipzel - 19 Pokoj_lub_Boisko.mp3',
      6: 'Chipzel - 24 Szatnia_lub_Boss.mp3'
    };

    const track = boardTracks[f] || 'Chipzel - 23 Klasa.mp3';
    this.playTrack(track, true);
  }

  resumeBoardMusic(player = null) {
    this.playBoardMusic(this.currentFloor, player);
  }

  // ==================== SPRAWDZANIE NISKIEGO ZDROWIA (<= 1/6 HP) ====================
  // "kiedy user ma tylko 1/6 życia to gra w soundtrack Chipzel - 08 Prepare To Dice"
  checkLowHealthMusic(player) {
    if (this.muted) return;
    if (!player || player.hp <= 0) return;

    const isLow = player.hp <= Math.ceil(player.maxHp / 6);
    if (isLow) {
      if (this.currentTrackName !== 'Chipzel - 08 Prepare To Dice.mp3') {
        this.playTrack('Chipzel - 08 Prepare To Dice.mp3', true);
      }
    } else if (this.currentTrackName === 'Chipzel - 08 Prepare To Dice.mp3') {
      const inArena = typeof document !== 'undefined' && document.querySelector('.in-arena');
      if (inArena) {
        this.playCombatMusic(this.currentFloor, player);
      } else {
        this.resumeBoardMusic(player);
      }
    }
  }

  // ==================== MUZYKA WALKI / MINIGRY ====================
  // • Piętra 1 & 2: Beginner's Luck & Fighting Chance (naprzemiennie)
  // • Piętra 3 & 4: Step Right Up & Tempting Fate (naprzemiennie)
  // • Piętro 5: Swing Me Another 6
  // • Kiedy user ma <= 1/6 HP: Prepare to Dice (Chipzel - 08 Prepare To Dice)
  playCombatMusic(floor = this.currentFloor, player = null) {
    const fStr = String(floor);

    // Kiedy user ma tylko 1/6 życia (<= 1/6 HP) -> soundtrack Prepare To Dice!
    if (player && player.hp > 0 && player.hp <= Math.ceil(player.maxHp / 6)) {
      this.playTrack('Chipzel - 08 Prepare To Dice.mp3', true);
      return;
    }

    let track;
    if (['1', '2'].includes(fStr)) {
      const tracks = [
        'Chipzel - 03 Beginners Luck.mp3',
        'Chipzel - 04 Fighting Chance.mp3'
      ];
      track = tracks[this.m1_2_combatIndex % tracks.length];
      this.m1_2_combatIndex += 1;
    } else if (['3', '4'].includes(fStr)) {
      const tracks = [
        'Chipzel - 06 Step Right Up.mp3',
        'Chipzel - 07 Tempting Fate.mp3'
      ];
      track = tracks[this.m3_4_combatIndex % tracks.length];
      this.m3_4_combatIndex += 1;
    } else if (fStr === '5') {
      track = 'Chipzel - 05 Swing Me Another 6.mp3';
    } else {
      const mod = this.getModuleNumber(floor);
      if (mod === 1 || mod === 2) {
        track = 'Chipzel - 03 Beginners Luck.mp3';
      } else if (mod === 3 || mod === 4) {
        track = 'Chipzel - 06 Step Right Up.mp3';
      } else {
        track = 'Chipzel - 05 Swing Me Another 6.mp3';
      }
    }

    this.playTrack(track, true);
  }

  // ==================== MUZYKA BOSS FIGHTÓW ====================
  // Muzyki boss podczas walki: Elimination Round, Lifeline, Bonus Round, Fortune Favours The Bold
  playBossFightMusic(modNumber = null) {
    const bossTracks = [
      'Chipzel - 10 Elimination Round.mp3',
      'Chipzel - 11 Lifeline.mp3',
      'Chipzel - 12 Bonus Round.mp3',
      'Chipzel - 14 Fortune Favours The Bold.mp3'
    ];

    let track;
    if (typeof modNumber === 'number' && modNumber >= 1 && modNumber <= 4) {
      track = bossTracks[modNumber - 1];
    } else {
      track = bossTracks[this.bossCombatIndex % bossTracks.length];
      this.bossCombatIndex += 1;
    }

    this.playTrack(track, true);
  }

  // ==================== MUZYKA STARTOWA / MENU (Your Host For Tonight) ====================
  playTitleMusic() {
    this.playTrack('Chipzel - 01 Your Host For Tonight (Title).mp3', true);
  }

  // ==================== MUZYKA WYBORU POSTACI (Come On Down) ====================
  playCharacterSelectMusic() {
    this.playTrack('Chipzel - 02 Come on Down.mp3', true);
  }

  // ==================== MUZYKA WYGRANEJ ====================
  playVictoryMusic() {
    this.playTrack('Chipzel - 15 A Brand New Washing Machine!.mp3', true);
  }

  // ==================== MUZYKA SKRZYNI (What's in the Box?) ====================
  playChestMusic() {
    this.playTrack('Whats in the Box.mp3', true);
  }

  playBookMusic() {
    this.playTrack('Chipzel - 28 Play To Win.mp3', true);
  }
}

export const musicManager = new MusicManager();
