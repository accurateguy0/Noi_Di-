// Menedżer starć z Bossami w poszczególnych modułach gry

import { BossFootballerGame } from '../games/bossFootballerGame.js';
import { BossCwaniakGame } from '../games/bossCwaniakGame.js';
import { playJaggedCurtainWipe } from '../ui/victoryScreen.js';
import { musicManager } from '../audio/musicManager.js';
import {
  CWANIAK_CHALLENGES,
  MODULE_3_BOSS_CHALLENGES,
  MODULE_4_BOSS_CHALLENGES,
  MODULE_5_BOSS_CHALLENGES
} from '../data/dialogSteps.js';

export class BossEncounterManager {
  constructor(app) {
    this.app = app;
  }

  launchBossFootballer(nodeId = 'b7_node_3') {
    const arenaMount = this.app.openArena(1);

    this.app.activeMinigame = new BossFootballerGame(arenaMount, {
      player: this.app.player,
      enemyMaxHp: 66,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: ({ defeated } = {}) => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          musicManager.resumeBoardMusic();
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Piłkarz był szybki! Spróbuj ponownie! ⚽', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Boss Piłkarz pokonany! Szkoła ukończona! ⚽🏆');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchBossCwaniak(nodeId = 'cb_node_6') {
    const arenaMount = this.app.openArena(2);

    this.app.activeMinigame = new BossCwaniakGame(arenaMount, {
      player: this.app.player,
      arenaClass: 'cwaniak-arena',
      enemySubtitle: 'CWANIAK (68 HP, 5 dmg) 🕶️',
      challenges: CWANIAK_CHALLENGES,
      enemyMaxHp: 68,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: ({ defeated } = {}) => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          musicManager.resumeBoardMusic();
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Cwaniak był za szybki! Spróbuj ponownie! 🕶️', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 1000, 'Boss Cwaniak pokonany! Jesteś Mistrzem Miasta! 🕶️🏆');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchBossNauczycielka(nodeId = 'm3_b_node_6') {
    const arenaMount = this.app.openArena(3);
    this.app.activeMinigame = new BossCwaniakGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Nauczycielka',
      enemyTitle: '👩‍🏫 BOSS: NAUCZYCIELKA (EGZAMIN SZKOLNY) 👩‍🏫',
      enemySubtitle: 'NAUCZYCIELKA (68 HP, 5 dmg)',
      enemyAvatar: './assets/Postacie/Nauczycielka.png',
      challenges: MODULE_3_BOSS_CHALLENGES,
      arenaClass: 'nauczycielka-arena',
      enemyMaxHp: 68,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          musicManager.resumeBoardMusic();
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 1000, 'Pani Nauczycielka jest dumna z Twoich postępów! 👩‍🏫⭐', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchBossLekarz(nodeId = 'm4_b_node_6') {
    const arenaMount = this.app.openArena(4);
    this.app.activeMinigame = new BossCwaniakGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Lekarz',
      enemyTitle: '🩺 BOSS: DOKTOR LEKARZ (CENTRUM ZDROWIA) 🩺',
      enemySubtitle: 'DOKTOR LEKARZ (70 HP, 5 dmg)',
      enemyAvatar: './assets/Postacie/Lekarz.png',
      challenges: MODULE_4_BOSS_CHALLENGES,
      arenaClass: 'lekarz-arena',
      enemyMaxHp: 70,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          musicManager.resumeBoardMusic();
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 1000, 'Doktor potwierdza: jesteś w pełni zdrowy i gotowy do działania! 🩺💪', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchBossInstagramerka(nodeId = 'm5_b_node_6') {
    const arenaMount = this.app.openArena(5);
    this.app.activeMinigame = new BossCwaniakGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Instagramerka',
      enemyTitle: '📱 BOSS: INSTAGRAMERKA (KRÓLOWA TRENDÓW) 📱',
      enemySubtitle: 'INSTAGRAMERKA (70 HP, 5 dmg)',
      enemyAvatar: './assets/Postacie/Instagramerka.png',
      challenges: MODULE_5_BOSS_CHALLENGES,
      arenaClass: 'instagramerka-arena',
      enemyMaxHp: 70,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          musicManager.resumeBoardMusic();
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 1000, 'Instagramerka ogłasza: Tan to prawdziwy Król Trendów i Języka Polskiego! 📱🏆👑', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }
}
