// System dźwięków (Web Audio API + buforowanie SFX w pamięci) oraz syntezy mowy PL (Web Speech API)
import { musicManager } from './musicManager.js';

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.sfxVolume = 0.92;
    this.characterVoiceVolume = 1.0;
    this.audioBuffers = new Map();
    this.loadingPromises = new Map();
    this.preloaded = false;
    this.playerClass = 'Warrior';

    this.initUserGesture();
  }

  initUserGesture() {
    const resume = () => {
      this.init();
      if (this.ctx && this.ctx.state === 'running') {
        const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click'];
        events.forEach((ev) => {
          if (typeof window !== 'undefined' && window.removeEventListener) window.removeEventListener(ev, resume, true);
          if (typeof document !== 'undefined' && document.removeEventListener) document.removeEventListener(ev, resume, true);
        });
      }
    };
    const events = ['pointerdown', 'mousedown', 'touchstart', 'keydown', 'click'];
    events.forEach((ev) => {
      if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener(ev, resume, { capture: true });
      if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener(ev, resume, { capture: true });
    });
  }

  setMuted(muted) {
    this.muted = Boolean(muted);
    musicManager.setMuted(this.muted);
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  setSfxVolume(vol) {
    this.sfxVolume = Math.max(0, Math.min(1, Number(vol) || 0));
  }

  getSfxVolume() {
    return this.sfxVolume;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (!this.preloaded) {
      this.preloaded = true;
      this.preloadCoreAudio();
    }
  }

  // Preload najważniejszych dźwięków walki i efektów, aby odtwarzały się z zerowym opóźnieniem
  preloadCoreAudio() {
    const coreFiles = [
      'Thief_atak.ogg',
      'Thief_obrona.ogg',
      'warrior_atak.ogg',
      'Warrior_obrona.ogg',
      'damage_warrior.ogg',
      'Inventor_atak.ogg',
      'Inventor_obrona.ogg',
      'witch_atak.ogg',
      'witch_obrona.ogg',
      'Robot_atak.ogg',
      'Robot_obrona.ogg',
      'Jester_atak.ogg',
      'Jester_obrona.ogg',
      'hit.ogg',
      'fight_start.ogg',
      'limitready.ogg',
      'jackpotrolldice.ogg',
      'jackpotcounterincrease.ogg',
      'fire.ogg',
      'ice2.ogg',
      'magic.ogg',
      'sonic.ogg',
      'pilkarz_atak.ogg',
      'pilkarz_obrona.ogg',
      'cwaniak_atak.ogg',
      'cwaniak_obrona.ogg',
      'szczeniak_atak.ogg',
      'szczeniak_obrona.ogg',
      'wuefista_atak.ogg',
      'wuefista_obrona.ogg',
      'Nauczycielka_atak.ogg',
      'nauczycielka_obrona.ogg',
      'Instagramerka_atak.ogg',
      'Instagramerka_obrona.ogg',
      'jezyk_atak.ogg',
      'jezyk_obrona.ogg',
      'Kasjerka_atak.ogg',
      'Kasjerka_obrona.ogg',
      'kroliczek_atak.ogg',
      'kroliczek_obrona.ogg',
      'mistrz_kebaba_atak.ogg',
      'mistrz_kebaba_obrona.ogg',
      'pielegniarka_atak.ogg',
      'pielegniarka_obrona.ogg',
      'zaba_atak.ogg',
      'zaba_obrona.ogg',
      'gejmer_atak.ogg',
      'gejmer_obrona.ogg',
      'glosny_ptak_dzwiek_1.ogg',
      'glosny_ptak_dzwiek_2.ogg',
      'kolezanka_atak.ogg',
      'kolezanka_obrona.ogg',
      'kraken_dzwiek.ogg',
      'krol_szczurow_dzwiek.ogg',
      'lekarz_atak.ogg',
      'lekarz_obrona.ogg',
      'mysli_dzwiek_1.ogg',
      'mysli_dzwiek_2.ogg',
      'spiewaczka_atak.ogg',
      'spiewaczka_obrona.ogg',
      'szkieleton_atak.ogg',
      'szkieleton_obrona.ogg',
      'smok_atak.ogg',
      'smok_obrona.ogg',
      'Profesor_atak.ogg',
      'Profesor_obrona.ogg',
      'dyrektorka_atak.ogg',
      'dyrektorka_obrona.ogg',
      'Silaczka_atak.ogg',
      'Silaczka_obrona.ogg',
      'wilczur_atak.ogg',
      'wilczur_obrona.ogg',
      'zuk_nosorozec_atak.ogg',
      'zuk_nosorozec_obrona.ogg',
      'kot_dzwiek.ogg',
      'pokonanyprzeciwnik.ogg',
      'levelup.ogg',
      'nastepna_plansza.ogg',
      'krec_kolem.ogg',
      'heal.ogg',
      'gainxp.ogg',
      'inspektor_biletow_dzwiek.ogg',
      'mala_kalamarnica_dzwiek.ogg',
      'Dzwonek_Szkolny.mp3',
      "Referee's whistle.mp3",
      'pilka_kopniecie.wav'
    ];
    coreFiles.forEach((f) => this.loadBuffer(f));
  }

  async loadBuffer(filename) {
    if (this.audioBuffers.has(filename)) {
      return this.audioBuffers.get(filename);
    }
    const lowerName = filename.toLowerCase();
    if (this.audioBuffers.has(lowerName)) {
      return this.audioBuffers.get(lowerName);
    }
    if (this.loadingPromises.has(filename)) {
      return this.loadingPromises.get(filename);
    }

    const promise = (async () => {
      try {
        const encoded = encodeURIComponent(filename);
        const candidatePaths = [
          `/assets/music/${encoded}`,
          `./assets/music/${encoded}`,
          `assets/music/${encoded}`,
          `/public/assets/music/${encoded}`
        ];

        let validResp = null;
        for (const url of candidatePaths) {
          try {
            const resp = await fetch(url);
            const contentType = resp.headers.get('content-type') || '';
            if (resp.ok && !contentType.includes('text/html')) {
              validResp = resp;
              break;
            }
          } catch (e) {}
        }

        if (!validResp) {
          this.loadingPromises.delete(filename);
          return null;
        }

        const arrayBuf = await validResp.arrayBuffer();
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (!this.ctx) {
          this.loadingPromises.delete(filename);
          return null;
        }

        const decoded = await this.ctx.decodeAudioData(arrayBuf.slice(0));
        this.audioBuffers.set(filename, decoded);
        this.audioBuffers.set(lowerName, decoded);
        return decoded;
      } catch (err) {
        this.loadingPromises.delete(filename);
        return null;
      }
    })();

    this.loadingPromises.set(filename, promise);
    return promise;
  }

  // ==================== ODTWARZANIE PLIKÓW SFX (WEB AUDIO + NIEZAWODNY HTML5 FALLBACK) ====================
  playFile(filename, volume = this.sfxVolume) {
    if (this.muted) return null;
    this.init();

    // Pozwól na wzmocnienie (gain do 1.65) dla cichszych próbek .ogg w Web Audio API
    const webGain = Math.max(0, Math.min(1.65, volume));
    const htmlVol = Math.max(0, Math.min(1.0, volume));

    // 1. Odtwarzanie z bufora Web Audio API (0ms opóźnienia, brak limitu nakładania)
    const buffer = this.audioBuffers.get(filename) || this.audioBuffers.get(filename.toLowerCase());
    if (buffer && this.ctx && this.ctx.state === 'running') {
      try {
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(webGain, this.ctx.currentTime);
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.onended = () => {
          try {
            source.disconnect();
            gainNode.disconnect();
          } catch (e) {}
        };
        source.start(0);
        return {
          stop: () => {
            try {
              gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
              setTimeout(() => { try { source.stop(); source.disconnect(); gainNode.disconnect(); } catch (e) {} }, 90);
            } catch (e) {
              try { source.stop(); } catch (e) {}
            }
          }
        };
      } catch (e) {}
    }

    // 2. Jeśli bufor jeszcze nie jest gotowy lub AudioContext był zawieszony:
    // zleć zbuforowanie w tle na przyszłość ORAZ natychmiast odtwórz przez HTML5 Audio, żeby dźwięk NIGDY nie przepadł!
    this.loadBuffer(filename).catch(() => {});

    try {
      const encoded = encodeURIComponent(filename);
      const candidates = [
        `./assets/music/${encoded}`,
        `/assets/music/${encoded}`,
        `assets/music/${encoded}`,
        `./public/assets/music/${encoded}`
      ];
      let idx = 0;
      const audio = new Audio(candidates[0]);
      audio.volume = htmlVol;
      audio.addEventListener('error', () => {
        idx++;
        if (idx < candidates.length) {
          audio.src = candidates[idx];
          audio.play().catch(() => {});
        }
      });
      audio.play().catch(() => {});
      return {
        stop: () => {
          try {
            audio.pause();
            audio.src = '';
          } catch (e) {}
        }
      };
    } catch (e) {}
    return null;
  }

  // ==================== AKCJE BOHATERA I OBRONA ====================
  setPlayerClass(className = 'Warrior') {
    this.playerClass = className;
  }

  playTanAttack() {
    const cls = (this.playerClass || 'Warrior').toLowerCase();
    const vol = 1.45;
    if (cls.includes('warrior') || cls.includes('wojownik')) {
      this.playFile('warrior_atak.ogg', vol);
    } else if (cls.includes('inventor') || cls.includes('wynalazc')) {
      this.playFile('Inventor_atak.ogg', vol);
    } else if (cls.includes('witch') || cls.includes('czarownic') || cls.includes('wiedzm')) {
      this.playFile('witch_atak.ogg', vol);
    } else if (cls.includes('robot')) {
      this.playFile('Robot_atak.ogg', vol);
    } else if (cls.includes('jester') || cls.includes('blazen') || cls.includes('błazen')) {
      this.playFile('Jester_atak.ogg', vol);
    } else {
      // Thief
      this.playFile('Thief_atak.ogg', vol);
    }
  }

  playTanHurt() {
    const cls = (this.playerClass || 'Warrior').toLowerCase();
    const vol = 1.45;
    if (cls.includes('warrior') || cls.includes('wojownik')) {
      this.playFile('Warrior_obrona.ogg', vol);
    } else if (cls.includes('inventor') || cls.includes('wynalazc')) {
      this.playFile('Inventor_obrona.ogg', vol);
    } else if (cls.includes('witch') || cls.includes('czarownic') || cls.includes('wiedzm')) {
      this.playFile('witch_obrona.ogg', vol);
    } else if (cls.includes('robot')) {
      this.playFile('Robot_obrona.ogg', vol);
    } else if (cls.includes('jester') || cls.includes('blazen') || cls.includes('błazen')) {
      this.playFile('Jester_obrona.ogg', vol);
    } else {
      // Thief
      this.playFile('Thief_obrona.ogg', vol);
    }
  }

  // Soczysty efekt fizycznego uderzenia (plik hit.ogg + syntezator uderzenia basowego Web Audio)
  playHitImpact(isHeavy = false) {
    this.playFile('hit.ogg', isHeavy ? 1.55 : 1.35);
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Krótki basowy "punch" uderzenia
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = isHeavy ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(isHeavy ? 190 : 155, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.16);
      gain.gain.setValueAtTime(isHeavy ? 0.42 : 0.32, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.17);
    } catch (e) {}
  }

  // Dodatkowe efekty dźwiękowe mechanik klasowych z plików w public/assets/music/
  playFightStart() {
    const now = Date.now();
    if (this._lastFightStartTime && now - this._lastFightStartTime < 1500) {
      return;
    }
    this._lastFightStartTime = now;
    this.playFile('fight_start.ogg', 1.25);
  }

  playLimitReady() {
    this.playFile('limitready.ogg', 1.35);
  }

  playWarriorHeavyHit() {
    this.playFile('damage_warrior.ogg', 1.5);
  }

  playRobotRollDice() {
    this.playFile('jackpotrolldice.ogg', 1.35);
    setTimeout(() => this.playFile('jackpotcounterincrease.ogg', 1.3), 180);
  }

  playWitchSpellSFX(spellId = 'burning_light') {
    if (spellId === 'burning_light') {
      this.playFile('fire.ogg', 1.4);
    } else if (spellId === 'ice_shard') {
      this.playFile('ice2.ogg', 1.4);
    } else if (spellId === 'sonic_wave') {
      this.playFile('sonic.ogg', 1.4);
    } else {
      this.playFile('magic.ogg', 1.4);
    }
  }

  playDefeatEnemy() {
    this.playFile('pokonanyprzeciwnik.ogg', 0.9);
  }

  playLevelUp() {
    this.playFile('levelup.ogg', 0.9);
  }

  playNextBoard() {
    this.playFile('nastepna_plansza.ogg', 0.9);
  }

  playSpinWheel() {
    this.stopSpinWheel();
    this.init();
    if (this.muted) return;

    // 1. Z bufora Web Audio (płynne pętlenie podczas trwania animacji kręcenia)
    const buffer = this.audioBuffers.get('krec_kolem.ogg');
    if (buffer && this.ctx) {
      try {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.95, this.ctx.currentTime);
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
        this.spinWheelAudio = {
          stop: () => {
            try {
              gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
              setTimeout(() => {
                try { source.stop(); } catch (e) {}
              }, 160);
            } catch (e) {
              try { source.stop(); } catch (e) {}
            }
          }
        };
        return;
      } catch (e) {}
    }

    // 2. Ładowanie bufora w locie, jeśli jeszcze się nie zdekodował
    this.loadBuffer('krec_kolem.ogg').then((buf) => {
      if (buf && this.ctx && !this.muted && !this.spinWheelAudio) {
        try {
          if (this.ctx.state === 'suspended') this.ctx.resume();
          const source = this.ctx.createBufferSource();
          source.buffer = buf;
          source.loop = true;
          const gainNode = this.ctx.createGain();
          gainNode.gain.setValueAtTime(0.95, this.ctx.currentTime);
          source.connect(gainNode);
          gainNode.connect(this.ctx.destination);
          source.start(0);
          this.spinWheelAudio = {
            stop: () => {
              try {
                gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
                setTimeout(() => {
                  try { source.stop(); } catch (e) {}
                }, 160);
              } catch (e) {
                try { source.stop(); } catch (e) {}
              }
            }
          };
        } catch (e) {}
      }
    });

    // 3. Fallback HTML5 Audio z pętlą
    try {
      const audio = new Audio('/assets/music/krec_kolem.ogg');
      audio.volume = 0.95;
      audio.loop = true;
      audio.addEventListener('error', () => {
        if (!audio.src.includes('./assets/')) {
          audio.src = './assets/music/krec_kolem.ogg';
          audio.play().catch(() => {});
        }
      });
      audio.play().catch(() => {});
      this.spinWheelAudio = {
        stop: () => {
          try {
            audio.pause();
            audio.currentTime = 0;
          } catch (e) {}
        }
      };
    } catch (e) {}
  }

  stopSpinWheel() {
    if (this.spinWheelAudio) {
      try {
        this.spinWheelAudio.stop();
      } catch (e) {}
      this.spinWheelAudio = null;
    }
  }

  playInspector() {
    this.playFile('inspektor_biletow_dzwiek.ogg', 0.9);
  }

  playSchoolBell() {
    return this.playFile('Dzwonek_Szkolny.mp3', 0.85);
  }

  playRefereeWhistle() {
    return this.playFile("Referee's whistle.mp3", 0.95);
  }

  playBallKick() {
    return this.playFile('pilka_kopniecie.wav', 0.9);
  }

  triggerContextualSFX(text) {
    if (!text || typeof text !== 'string') return;
    const lower = text.toLowerCase();
    if (lower.includes('dzwonek') || lower.includes('dzwoni') || lower.includes('dzwonk')) {
      this.playSchoolBell();
    } else if (lower.includes('gwizdek') || lower.includes('sędzia') || lower.includes('sedzia')) {
      this.playRefereeWhistle();
    } else if (lower.includes('piłk') || lower.includes('pilk') || lower.includes('kopnię') || lower.includes('kopnie') || lower.includes('mecz') || lower.includes('bramk') || lower.includes('strzał')) {
      this.playBallKick();
    }
  }

  // ==================== GŁOSY I EFEKTY PRZECIWNIKÓW ====================
  playCatAttack() {
    this.playCatMeow(false);
  }

  playCatDefense() {
    this.playCatMeow(true);
  }

  playCatMeow(isHurt = false) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'bandpass';

      if (isHurt) {
        // Skrzywdzone / obronne miauknięcie kotka ("MIAU!")
        const dur = 0.28;
        filter.Q.setValueAtTime(2.8, now);

        osc.type = 'sawtooth';
        osc2.type = 'sine';

        osc.frequency.setValueAtTime(850, now);
        osc.frequency.exponentialRampToValueAtTime(1300, now + 0.05);
        osc.frequency.exponentialRampToValueAtTime(460, now + dur);

        osc2.frequency.setValueAtTime(1700, now);
        osc2.frequency.exponentialRampToValueAtTime(2600, now + 0.05);
        osc2.frequency.exponentialRampToValueAtTime(920, now + dur);

        filter.frequency.setValueAtTime(1900, now);
        filter.frequency.exponentialRampToValueAtTime(1100, now + dur);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.20, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + dur);
        osc2.stop(now + dur);
      } else {
        // Dźwięczne, wesołe miauknięcie ataku kotka ("Miau~!")
        const dur = 0.34;
        filter.Q.setValueAtTime(2.2, now);

        osc.type = 'triangle';
        osc2.type = 'sine';

        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.11);
        osc.frequency.exponentialRampToValueAtTime(620, now + dur);

        osc2.frequency.setValueAtTime(1040, now);
        osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.11);
        osc2.frequency.exponentialRampToValueAtTime(1240, now + dur);

        filter.frequency.setValueAtTime(1450, now);
        filter.frequency.exponentialRampToValueAtTime(950, now + dur);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + dur);
        osc2.stop(now + dur);
      }
    } catch (e) {}
  }

  isFemaleCharacter(charName = '') {
    if (!charName) return false;
    const n = (typeof charName === 'string' ? charName : (charName?.name || charName?.opponentName || '')).toLowerCase();
    return (
      n.includes('kolezank') ||
      n.includes('koleżank') ||
      n.includes('spiewaczk') ||
      n.includes('śpiewaczk') ||
      n.includes('nauczycielk') ||
      n.includes('nauczyciel') ||
      n.includes('kot') ||
      n.includes('bolo') ||
      n.includes('zaba') ||
      n.includes('żaba') ||
      n.includes('kasjerk') ||
      n.includes('kasjer') ||
      n.includes('instagramerk') ||
      n.includes('instagram') ||
      n.includes('biletomat') ||
      n.includes('pielegniark') ||
      n.includes('pielęgniark') ||
      n.includes('dyrektork') ||
      n.includes('silaczk') ||
      n.includes('siłaczk')
    );
  }

  playCharacterAttack(charName) {
    if (!charName) return;
    const name = (typeof charName === 'string' ? charName : (charName?.name || charName?.opponentName || '')).toLowerCase();
    const vol = 1.45;

    if (name.includes('gejmer') || name.includes('olek')) this.playFile('gejmer_atak.ogg', vol);
    else if (name.includes('ptak')) {
      const variant = Math.random() < 0.5 ? 'glosny_ptak_dzwiek_1.ogg' : 'glosny_ptak_dzwiek_2.ogg';
      this.playFile(variant, vol);
    }
    else if (name.includes('kolezank') || name.includes('koleżank')) this.playFile('kolezanka_atak.ogg', vol);
    else if (name.includes('kraken')) this.playFile('kraken_dzwiek.ogg', vol);
    else if (name.includes('szczur') || name.includes('krol_szczurow') || name.includes('król')) this.playFile('krol_szczurow_dzwiek.ogg', vol);
    else if (name.includes('lekarz') || name.includes('doktor')) this.playFile('lekarz_atak.ogg', vol);
    else if (name.includes('profesor')) this.playFile('Profesor_atak.ogg', vol);
    else if (name.includes('mysli') || name.includes('myśli')) {
      const variant = Math.random() < 0.5 ? 'mysli_dzwiek_1.ogg' : 'mysli_dzwiek_2.ogg';
      this.playFile(variant, vol);
    }
    else if (name.includes('spiewaczk') || name.includes('śpiewaczk')) this.playFile('spiewaczka_atak.ogg', vol);
    else if (name.includes('szkieleton')) this.playFile('szkieleton_atak.ogg', vol);
    else if (name.includes('wilczur')) this.playFile('wilczur_atak.ogg', vol);
    else if (name.includes('zuk') || name.includes('żuk') || name.includes('nosoroz') || name.includes('nosoroż')) this.playFile('zuk_nosorozec_atak.ogg', vol);
    else if (name.includes('smok')) this.playFile('smok_atak.ogg', vol);
    else if (name.includes('silaczk') || name.includes('siłaczk')) this.playFile('Silaczka_atak.ogg', vol);
    else if (name.includes('dyrektork') || name.includes('dyrektor') || name.includes('madison')) this.playFile('dyrektorka_atak.ogg', vol);
    else if (name.includes('inventor') || name.includes('wynalazc')) this.playFile('Inventor_atak.ogg', vol);
    else if (name.includes('warrior') || name.includes('wojownik')) this.playFile('warrior_atak.ogg', vol);
    else if (name.includes('witch') || name.includes('wiedzm') || name.includes('czarownic')) this.playFile('witch_atak.ogg', vol);
    else if (name.includes('robot')) this.playFile('Robot_atak.ogg', vol);
    else if (name.includes('jester') || name.includes('blazen') || name.includes('błazen')) this.playFile('Jester_atak.ogg', vol);
    else if (name.includes('thief')) this.playFile('Thief_atak.ogg', vol);
    else if (name.includes('inspektor') || name.includes('bilet')) this.playFile('inspektor_biletow_dzwiek.ogg', vol);
    else if (name.includes('kalamarnic') || name.includes('kałamarnic') || name.includes('squid')) this.playFile('mala_kalamarnica_dzwiek.ogg', vol);
    else if (name.includes('pilkarz') || name.includes('piłkarz')) this.playFile('pilkarz_atak.ogg', vol);
    else if (name.includes('cwaniak')) this.playFile('cwaniak_atak.ogg', vol);
    else if (name.includes('instagramerka') || name.includes('instagram')) this.playFile('Instagramerka_atak.ogg', vol);
    else if (name.includes('jezyk') || name.includes('język') || name.includes('jeżyk') || name.includes('jez') || name.includes('jeż')) this.playFile('jezyk_atak.ogg', vol);
    else if (name.includes('kasjerk') || name.includes('kasjer') || name.includes('mistrzyni')) this.playFile('Kasjerka_atak.ogg', vol);
    else if (name.includes('krolik') || name.includes('królik') || name.includes('zajac') || name.includes('zając') || name.includes('kroliczek')) this.playFile('kroliczek_atak.ogg', vol);
    else if (name.includes('kot') || name.includes('bolo')) {
      if (this.audioBuffers.has('kot_dzwiek.ogg') || this.audioBuffers.has('kot_dzwiek.ogg'.toLowerCase())) this.playFile('kot_dzwiek.ogg', vol);
      else this.playCatAttack();
    }
    else if (name.includes('nauczycielk') || name.includes('nauczyciel')) this.playFile('Nauczycielka_atak.ogg', vol);
    else if (name.includes('pielegniark') || name.includes('pielęgniark') || name.includes('pielegniarka')) this.playFile('pielegniarka_atak.ogg', vol);
    else if (name.includes('szczeniak')) this.playFile('szczeniak_atak.ogg', vol);
    else if (name.includes('wuefist') || name.includes('wuef') || name.includes('wf')) this.playFile('wuefista_atak.ogg', vol);
    else if (name.includes('kebab') || name.includes('mistrz')) this.playFile('mistrz_kebaba_atak.ogg', vol);
    else if (name.includes('zaba') || name.includes('żaba')) this.playFile('zaba_atak.ogg', vol);
    else this.playFile('pilkarz_atak.ogg', vol);
  }

  playCharacterDefense(charName) {
    if (!charName) return;
    const name = (typeof charName === 'string' ? charName : (charName?.name || charName?.opponentName || '')).toLowerCase();
    const vol = 1.45;

    if (name.includes('gejmer') || name.includes('olek')) this.playFile('gejmer_obrona.ogg', vol);
    else if (name.includes('ptak')) {
      const variant = Math.random() < 0.5 ? 'glosny_ptak_dzwiek_1.ogg' : 'glosny_ptak_dzwiek_2.ogg';
      this.playFile(variant, vol);
    }
    else if (name.includes('kolezank') || name.includes('koleżank')) this.playFile('kolezanka_obrona.ogg', vol);
    else if (name.includes('kraken')) this.playFile('kraken_dzwiek.ogg', vol);
    else if (name.includes('szczur') || name.includes('krol_szczurow') || name.includes('król')) this.playFile('krol_szczurow_dzwiek.ogg', vol);
    else if (name.includes('lekarz') || name.includes('doktor')) this.playFile('lekarz_obrona.ogg', vol);
    else if (name.includes('profesor')) this.playFile('Profesor_obrona.ogg', vol);
    else if (name.includes('mysli') || name.includes('myśli')) {
      const variant = Math.random() < 0.5 ? 'mysli_dzwiek_1.ogg' : 'mysli_dzwiek_2.ogg';
      this.playFile(variant, vol);
    }
    else if (name.includes('spiewaczk') || name.includes('śpiewaczk')) this.playFile('spiewaczka_obrona.ogg', vol);
    else if (name.includes('szkieleton')) this.playFile('szkieleton_obrona.ogg', vol);
    else if (name.includes('wilczur')) this.playFile('wilczur_obrona.ogg', vol);
    else if (name.includes('zuk') || name.includes('żuk') || name.includes('nosoroz') || name.includes('nosoroż')) this.playFile('zuk_nosorozec_obrona.ogg', vol);
    else if (name.includes('smok')) this.playFile('smok_obrona.ogg', vol);
    else if (name.includes('silaczk') || name.includes('siłaczk')) this.playFile('Silaczka_obrona.ogg', vol);
    else if (name.includes('dyrektork') || name.includes('dyrektor') || name.includes('madison')) this.playFile('dyrektorka_obrona.ogg', vol);
    else if (name.includes('inventor') || name.includes('wynalazc')) this.playFile('Inventor_obrona.ogg', vol);
    else if (name.includes('warrior') || name.includes('wojownik')) this.playFile('Warrior_obrona.ogg', vol);
    else if (name.includes('witch') || name.includes('wiedzm') || name.includes('czarownic')) this.playFile('witch_obrona.ogg', vol);
    else if (name.includes('robot')) this.playFile('Robot_obrona.ogg', vol);
    else if (name.includes('jester') || name.includes('blazen') || name.includes('błazen')) this.playFile('Jester_obrona.ogg', vol);
    else if (name.includes('thief')) this.playFile('Thief_obrona.ogg', vol);
    else if (name.includes('inspektor') || name.includes('bilet')) this.playFile('inspektor_biletow_dzwiek.ogg', vol);
    else if (name.includes('kalamarnic') || name.includes('kałamarnic') || name.includes('squid')) this.playFile('mala_kalamarnica_dzwiek.ogg', vol);
    else if (name.includes('pilkarz') || name.includes('piłkarz')) this.playFile('pilkarz_obrona.ogg', vol);
    else if (name.includes('cwaniak')) this.playFile('cwaniak_obrona.ogg', vol);
    else if (name.includes('instagramerka') || name.includes('instagram')) this.playFile('Instagramerka_obrona.ogg', vol);
    else if (name.includes('jezyk') || name.includes('język') || name.includes('jeżyk') || name.includes('jez') || name.includes('jeż')) this.playFile('jezyk_obrona.ogg', vol);
    else if (name.includes('kasjerk') || name.includes('kasjer') || name.includes('mistrzyni')) this.playFile('Kasjerka_obrona.ogg', vol);
    else if (name.includes('krolik') || name.includes('królik') || name.includes('zajac') || name.includes('zając') || name.includes('kroliczek')) this.playFile('kroliczek_obrona.ogg', vol);
    else if (name.includes('kot') || name.includes('bolo')) {
      if (this.audioBuffers.has('kot_dzwiek.ogg') || this.audioBuffers.has('kot_dzwiek.ogg'.toLowerCase())) this.playFile('kot_dzwiek.ogg', vol);
      else this.playCatDefense();
    }
    else if (name.includes('nauczycielk') || name.includes('nauczyciel')) this.playFile('nauczycielka_obrona.ogg', vol);
    else if (name.includes('pielegniark') || name.includes('pielęgniark') || name.includes('pielegniarka')) this.playFile('pielegniarka_obrona.ogg', vol);
    else if (name.includes('szczeniak')) this.playFile('szczeniak_obrona.ogg', vol);
    else if (name.includes('wuefist') || name.includes('wuef') || name.includes('wf')) this.playFile('wuefista_obrona.ogg', vol);
    else if (name.includes('kebab') || name.includes('mistrz')) this.playFile('mistrz_kebaba_obrona.ogg', vol);
    else if (name.includes('zaba') || name.includes('żaba')) this.playFile('zaba_obrona.ogg', vol);
    else this.playFile('pilkarz_obrona.ogg', vol);
  }

  // ==================== ZADANIE CIOSU PRZEZ BOHATERA ====================
  // Sekwencja: ścisz lekko muzykę tła -> atak bohatera (0ms) -> uderzenie fizyczne hit + obrona wroga (220ms)
  playAttackHit(charName = null) {
    musicManager.duck(650);
    this.playTanAttack();
    setTimeout(() => {
      this.playHitImpact(false);
      if (charName) {
        this.playCharacterDefense(charName);
      }
    }, 220);
  }

  playAttack(charName = null) {
    this.playAttackHit(charName);
  }

  playHit(charName = null) {
    this.playAttackHit(charName);
  }

  // ==================== OBERWANIE PRZEZ BOHATERA (DOSTAJE OBRAŻENIA) ====================
  // Sekwencja: ścisz lekko muzykę tła -> atak wroga (0ms) -> uderzenie fizyczne hit + obrona bohatera (300ms)
  playEnemyHit(charName = null) {
    musicManager.duck(750);
    const enemy = charName || 'pilkarz';
    this.playCharacterAttack(enemy);
    setTimeout(() => {
      this.playHitImpact(true);
      this.playTanHurt();
    }, 300);
  }

  playHurt(charName = null) {
    this.playEnemyHit(charName);
  }

  // ==================== SYNTEZA MOWY (MĘSKA I ŻEŃSKA BARWA) ====================
  speakPolish(text, options = {}) {
    if (this.muted || !('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pl-PL';

      const rate = typeof options === 'number' ? options : (options?.rate ?? 0.92);
      utter.rate = rate;

      const charName = typeof options === 'object' ? (options?.character || options?.charName || '') : '';
      const isFemale = options?.gender === 'female' || this.isFemaleCharacter(charName);

      const voices = window.speechSynthesis.getVoices();
      const plVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('pl'));

      if (isFemale) {
        // Żeński lektor: Nauczycielka, Kot, Żaba, Kasjerka, Instagramerka, Biletomat, Pielęgniarka
        const femaleVoice = plVoices.find((v) => {
          const vName = v.name.toLowerCase();
          return (
            vName.includes('paulina') ||
            vName.includes('zofia') ||
            vName.includes('maja') ||
            vName.includes('agnieszka') ||
            vName.includes('ewa') ||
            vName.includes('female') ||
            vName.includes('kobieta')
          );
        }) || plVoices[0];

        if (femaleVoice) utter.voice = femaleVoice;
        utter.pitch = options?.pitch ?? 1.25; // Żeńska, melodyjna i wyraźna barwa głosu
      } else {
        // Męski lektor: Olek, Wuefista, Piłkarz, Cwaniak, Mistrz Kebaba
        const maleVoice = plVoices.find((v) => {
          const vName = v.name.toLowerCase();
          return (
            vName.includes('adam') ||
            vName.includes('jan') ||
            vName.includes('marek') ||
            vName.includes('male') ||
            vName.includes('mężczyzna')
          );
        }) || plVoices[0];

        if (maleVoice) utter.voice = maleVoice;
        utter.pitch = options?.pitch ?? 0.92; // Męska, głębsza barwa głosu
      }

      window.speechSynthesis.speak(utter);
    } catch (e) {}
  }

  // ==================== TONALNE DŹWIĘKI SYSTEMOWE ====================
  playTone(freq, type = 'sine', duration = 0.12, gainVal = 0.15, slideFreq = null) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideFreq) {
        osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
      }

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  playStep() {
    this.playTone(260, 'triangle', 0.08, 0.12, 340);
  }

  playPop() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.playTone(520, 'sine', 0.09, 0.25, 110);
    setTimeout(() => this.playTone(780, 'triangle', 0.06, 0.15, 220), 20);
  }

  playTick() {
    this.playTone(680, 'triangle', 0.035, 0.09, 420);
  }

  playSuccess() {
    this.playTone(523.25, 'triangle', 0.12, 0.18);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.12, 0.18), 90);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.22, 0.22), 180);
  }

  playMiss() {
    this.playTone(240, 'sawtooth', 0.18, 0.12, 150);
  }

  playWrong() {
    this.playTone(220, 'sine', 0.12, 0.08, 160);
    setTimeout(() => this.playTone(150, 'sine', 0.14, 0.07, 110), 70);
  }

  playHeal() {
    this.playTone(440, 'sine', 0.1, 0.16, 587);
    setTimeout(() => this.playTone(587, 'sine', 0.18, 0.18, 880), 100);
  }

  playFanfare() {
    this.playDefeatEnemy();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, idx) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.22, 0.2), idx * 110);
    });
  }
}

export const sound = new SoundManager();
