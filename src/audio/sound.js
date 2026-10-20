// System dźwięków (Web Audio API + buforowanie SFX w pamięci) oraz syntezy mowy PL (Web Speech API)
import { musicManager } from './musicManager.js';

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.sfxVolume = 0.85;
    this.characterVoiceVolume = 0.62;
    this.audioBuffers = new Map();
    this.loadingPromises = new Map();
    this.preloaded = false;

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
      'tan_atak.ogg',
      'tan_obrona.ogg',
      'uderzenie.ogg',
      'pokonanyprzeciwnik.ogg',
      'levelup.ogg',
      'nastepna_plansza.ogg',
      'krec_kolem.ogg'
    ];
    coreFiles.forEach((f) => this.loadBuffer(f));
  }

  async loadBuffer(filename) {
    if (this.audioBuffers.has(filename)) {
      return this.audioBuffers.get(filename);
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

        if (!validResp) return null;

        const arrayBuf = await validResp.arrayBuffer();
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (!this.ctx) return null;

        const decoded = await this.ctx.decodeAudioData(arrayBuf);
        this.audioBuffers.set(filename, decoded);
        return decoded;
      } catch (err) {
        return null;
      }
    })();

    this.loadingPromises.set(filename, promise);
    return promise;
  }

  // ==================== ODTWARZANIE PLIKÓW SFX (WEB AUDIO + HTML5 FALLBACK) ====================
  playFile(filename, volume = this.sfxVolume) {
    if (this.muted) return null;
    this.init();

    const vol = Math.max(0, Math.min(1, volume));

    // 1. Odtwarzanie z bufora Web Audio API (0ms opóźnienia, brak limitu nakładania)
    const buffer = this.audioBuffers.get(filename);
    if (buffer && this.ctx) {
      try {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(vol, this.ctx.currentTime);
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
        return {
          stop: () => {
            try {
              gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
              setTimeout(() => { try { source.stop(); } catch (e) {} }, 130);
            } catch (e) {
              try { source.stop(); } catch (e) {}
            }
          }
        };
      } catch (e) {}
    }

    // 2. Jeśli jeszcze nie ma w pamięci, załaduj na przyszłość i zagraj natychmiast po dekodowaniu:
    this.loadBuffer(filename)
      .then((buf) => {
        if (buf && this.ctx && !this.muted) {
          try {
            if (this.ctx.state === 'suspended') this.ctx.resume();
            const source = this.ctx.createBufferSource();
            source.buffer = buf;
            const gainNode = this.ctx.createGain();
            gainNode.gain.setValueAtTime(vol, this.ctx.currentTime);
            source.connect(gainNode);
            gainNode.connect(this.ctx.destination);
            source.start(0);
          } catch (e) {}
        }
      })
      .catch(() => {});

    // 3. Równoległy natychmiastowy fallback przez HTML5 Audio:
    try {
      const encoded = encodeURIComponent(filename);
      const candidatePaths = [
        `/assets/music/${encoded}`,
        `./assets/music/${encoded}`,
        `assets/music/${encoded}`
      ];
      let pIdx = 0;
      let htmlAudio = null;
      const tryAudio = () => {
        if (pIdx >= candidatePaths.length) return;
        htmlAudio = new Audio(candidatePaths[pIdx]);
        htmlAudio.volume = vol;
        htmlAudio.addEventListener('error', () => {
          pIdx++;
          tryAudio();
        });
        htmlAudio.play().catch(() => {
          pIdx++;
          tryAudio();
        });
      };
      tryAudio();
      return {
        stop: () => {
          if (htmlAudio) {
            try {
              htmlAudio.pause();
              htmlAudio.currentTime = 0;
            } catch (e) {}
          }
        }
      };
    } catch (e) {}
    return null;
  }

  // ==================== AKCJE TANA I OBRONA ====================
  playTanAttack() {
    this.playFile('tan_atak.ogg', this.characterVoiceVolume);
  }

  playTanHurt() {
    this.playFile('tan_obrona.ogg', this.characterVoiceVolume);
  }

  playHitImpact() {
    this.playFile('uderzenie.ogg', 0.72);
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

  playCharacterAttack(charName) {
    if (!charName) return;
    const name = String(charName).toLowerCase();
    const vol = this.characterVoiceVolume;

    if (name.includes('cwaniak')) this.playFile('cwaniak_atak.ogg', vol);
    else if (name.includes('instagramerka')) this.playFile('Instagramerka_atak.ogg', vol);
    else if (name.includes('jezyk') || name.includes('język')) this.playFile('jezyk_atak.ogg', vol);
    else if (name.includes('kasjerk')) this.playFile('Kasjerka_atak.ogg', vol);
    else if (name.includes('krolik') || name.includes('królik') || name.includes('zajac') || name.includes('zając')) this.playFile('kroliczek_atak.ogg', vol);
    else if (name.includes('kot') || name.includes('bolo')) {
      if (this.audioBuffers.has('kot_atak.ogg')) this.playFile('kot_atak.ogg', vol);
      else this.playCatAttack();
    }
    else if (name.includes('nauczycielk')) this.playFile('Nauczycielka_atak.ogg', vol);
    else if (name.includes('pielegniark') || name.includes('pielęgniark')) this.playFile('pielegniarka_atak.ogg', vol);
    else if (name.includes('pilkarz') || name.includes('piłkarz')) this.playFile('pilkarz_atak.ogg', vol);
    else if (name.includes('szczeniak')) this.playFile('szczeniak_atak.ogg', vol);
    else if (name.includes('wuefist') || name.includes('wf') || name.includes('olek')) this.playFile('wuefista_atak.ogg', vol);
  }

  playCharacterDefense(charName) {
    if (!charName) return;
    const name = String(charName).toLowerCase();
    const vol = this.characterVoiceVolume;

    if (name.includes('cwaniak')) this.playFile('cwaniak_obrona.ogg', vol);
    else if (name.includes('instagramerka')) this.playFile('Instagramerka_obrona.ogg', vol);
    else if (name.includes('jezyk') || name.includes('język')) this.playFile('jezyk_obrona.ogg', vol);
    else if (name.includes('kasjerk')) this.playFile('Kasjerka_obrona.ogg', vol);
    else if (name.includes('krolik') || name.includes('królik') || name.includes('zajac') || name.includes('zając')) this.playFile('kroliczek_obrona.ogg', vol);
    else if (name.includes('kot') || name.includes('bolo')) {
      if (this.audioBuffers.has('kot_obrona.ogg')) this.playFile('kot_obrona.ogg', vol);
      else this.playCatDefense();
    }
    else if (name.includes('nauczycielk')) this.playFile('nauczycielka_obrona.ogg', vol);
    else if (name.includes('pielegniark') || name.includes('pielęgniark')) this.playFile('pielegniarka_obrona.ogg', vol);
    else if (name.includes('pilkarz') || name.includes('piłkarz')) this.playFile('pilkarz_obrona.ogg', vol);
    else if (name.includes('szczeniak')) this.playFile('szczeniak_obrona.ogg', vol);
    else if (name.includes('wuefist') || name.includes('wf') || name.includes('olek')) this.playFile('wuefista_obrona.ogg', vol);
  }

  // ==================== ZADANIE CIOSU PRZEZ TANA ====================
  playAttackHit(charName = null) {
    this.playTone(340, 'sawtooth', 0.12, 0.22, 120);
    // Tan wydaje okrzyk ataku:
    this.playTanAttack();
    // Odgłos uderzenia (uderzenie.ogg):
    this.playHitImpact();

    if (charName) {
      setTimeout(() => this.playCharacterDefense(charName), 90);
    }
  }

  playAttack(charName = null) {
    this.playAttackHit(charName);
  }

  playHit(charName = null) {
    this.playAttackHit(charName);
  }

  // ==================== OBERWANIE PRZEZ TANA (DOSTAJE OBRAŻENIA) ====================
  playEnemyHit(charName = null) {
    this.playTone(180, 'sawtooth', 0.18, 0.25, 75);
    // Odgłos uderzenia (uderzenie.ogg):
    this.playHitImpact();
    // Tan wydaje głos zranienia (tan_obrona.ogg):
    this.playTanHurt();

    if (charName) {
      setTimeout(() => this.playCharacterAttack(charName), 60);
    }
  }

  playHurt(charName = null) {
    this.playEnemyHit(charName);
  }

  // ==================== SYNTEZA MOWY ====================
  speakPolish(text, rate = 0.92) {
    if (this.muted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pl-PL';
      utter.rate = rate;
      utter.pitch = 1.05;
      const voices = window.speechSynthesis.getVoices();
      const plVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('pl'));
      if (plVoice) utter.voice = plVoice;
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
    this.playTone(220, 'sawtooth', 0.18, 0.16, 140);
    setTimeout(() => this.playTone(165, 'sawtooth', 0.2, 0.16, 110), 80);
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
