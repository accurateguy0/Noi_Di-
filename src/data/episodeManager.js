// Menedżer epizodów i progresji w stylu Dicey Dungeons
// Zapisuje odblokowane postacie (kolejno od lewej do prawej po ukończeniu Epizodu 1 poprzedniej postaci)
// oraz odblokowane i ukończone epizody dla każdego bohatera w localStorage.

const STORAGE_KEY = 'noidi_episodes_v2';

export const HERO_ORDER = ['warrior', 'thief', 'robot', 'inventor', 'witch', 'jester'];

const DEFAULT_PROGRESS = {
  warrior: { heroUnlocked: true, unlocked: 1, completed: [], selected: 1 },
  thief: { heroUnlocked: false, unlocked: 0, completed: [], selected: 1 },
  robot: { heroUnlocked: false, unlocked: 0, completed: [], selected: 1 },
  inventor: { heroUnlocked: false, unlocked: 0, completed: [], selected: 1 },
  witch: { heroUnlocked: false, unlocked: 0, completed: [], selected: 1 },
  jester: { heroUnlocked: false, unlocked: 0, completed: [], selected: 1 }
};

class EpisodeManager {
  constructor() {
    this.progress = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
      const parsed = JSON.parse(raw);
      const merged = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));

      for (const k of HERO_ORDER) {
        if (parsed[k]) {
          const isWarrior = k === 'warrior';
          const heroUnlocked = isWarrior ? true : Boolean(parsed[k].heroUnlocked);
          const defaultUnlockedEp = heroUnlocked ? 1 : 0;
          merged[k] = {
            heroUnlocked,
            unlocked: heroUnlocked
              ? Math.max(1, Math.min(8, Number(parsed[k].unlocked) || defaultUnlockedEp))
              : 0,
            completed: Array.isArray(parsed[k].completed) ? parsed[k].completed : [],
            selected: Math.max(1, Math.min(8, Number(parsed[k].selected) || 1))
          };
        }
      }

      // Upewnij się, że ukończenie Epizodu 1 odblokowuje następną postać od lewej do prawej
      for (let i = 0; i < HERO_ORDER.length - 1; i++) {
        const currId = HERO_ORDER[i];
        const nextId = HERO_ORDER[i + 1];
        if (merged[currId].completed.includes(1)) {
          merged[nextId].heroUnlocked = true;
          merged[nextId].unlocked = Math.max(1, merged[nextId].unlocked || 1);
        }
      }

      return merged;
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
    } catch (e) {}
  }

  getHeroProgress(heroId) {
    const hid = (heroId || 'warrior').toLowerCase();
    if (!this.progress[hid]) {
      const isWarrior = hid === 'warrior';
      this.progress[hid] = {
        heroUnlocked: isWarrior,
        unlocked: isWarrior ? 1 : 0,
        completed: [],
        selected: 1
      };
    }
    return this.progress[hid];
  }

  isHeroUnlocked(heroId) {
    const hid = (heroId || 'warrior').toLowerCase();
    if (hid === 'warrior') return true;
    const data = this.getHeroProgress(hid);
    if (data.heroUnlocked) return true;

    const idx = HERO_ORDER.indexOf(hid);
    if (idx > 0) {
      const prevHeroId = HERO_ORDER[idx - 1];
      if (this.isEpisodeCompleted(prevHeroId, 1)) {
        data.heroUnlocked = true;
        data.unlocked = Math.max(1, data.unlocked || 1);
        this.save();
        return true;
      }
    }
    return false;
  }

  getPreviousHeroId(heroId) {
    const hid = (heroId || 'warrior').toLowerCase();
    const idx = HERO_ORDER.indexOf(hid);
    return idx > 0 ? HERO_ORDER[idx - 1] : null;
  }

  getSelectedEpisode(heroId) {
    const data = this.getHeroProgress(heroId);
    return data.selected || 1;
  }

  setSelectedEpisode(heroId, episodePip) {
    if (!this.isHeroUnlocked(heroId)) return false;
    const data = this.getHeroProgress(heroId);
    const pip = Math.max(1, Math.min(8, Number(episodePip) || 1));
    if (pip <= data.unlocked) {
      data.selected = pip;
      this.save();
      return true;
    }
    return false;
  }

  isEpisodeCompleted(heroId, episodePip) {
    const data = this.getHeroProgress(heroId);
    return data.completed.includes(Number(episodePip));
  }

  isEpisodeUnlocked(heroId, episodePip) {
    if (!this.isHeroUnlocked(heroId)) return false;
    const data = this.getHeroProgress(heroId);
    return Number(episodePip) <= data.unlocked;
  }

  completeEpisode(heroId, episodePip) {
    const hid = (heroId || 'warrior').toLowerCase();
    const data = this.getHeroProgress(hid);
    const pip = Number(episodePip);
    if (!data.completed.includes(pip)) {
      data.completed.push(pip);
    }

    // Jeśli ukończono najwyższy odblokowany epizod tej postaci (i < 8), odblokuj kolejny epizod tej postaci
    if (pip >= data.unlocked && pip < 8) {
      data.unlocked = pip + 1;
      data.selected = pip + 1;
    }

    // Jeśli ukończono Epizod 1, odblokuj następną postać w kolejności od lewej do prawej!
    if (pip === 1) {
      const idx = HERO_ORDER.indexOf(hid);
      if (idx >= 0 && idx < HERO_ORDER.length - 1) {
        const nextHeroId = HERO_ORDER[idx + 1];
        const nextData = this.getHeroProgress(nextHeroId);
        nextData.heroUnlocked = true;
        nextData.unlocked = Math.max(1, nextData.unlocked || 1);
        nextData.selected = nextData.selected || 1;
      }
    }

    this.save();
  }

  unlockAllEpisodes() {
    for (const k of HERO_ORDER) {
      this.progress[k].heroUnlocked = true;
      this.progress[k].unlocked = 8;
      this.progress[k].completed = [1, 2, 3, 4, 5, 6, 7, 8];
    }
    this.save();
  }

  resetAllProgress() {
    this.progress = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    this.save();
  }
}

export const episodeManager = new EpisodeManager();
