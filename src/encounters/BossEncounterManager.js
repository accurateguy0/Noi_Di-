// Menedżer starć z Bossami (wszystkie 10 bossów z rejestru src/data/bosses.js)

import { BossFootballerGame } from '../games/bossFootballerGame.js';
import { BossCwaniakGame } from '../games/bossCwaniakGame.js';
import { playJaggedCurtainWipe } from '../ui/victoryScreen.js';
import { musicManager } from '../audio/musicManager.js';
import { getBoss, normalizeChallenges } from '../data/bosses.js';
import { getStoryEpisode } from '../data/storyData.js';
import {
  FLEKSJA_I_MAGNESY_CHALLENGES,
  ALGORYTM_ZDANIA_CHALLENGES,
  SWIPE_FAKT_OPINIA_CHALLENGES,
  FORMY_WYPOWIEDZI_KL4_CHALLENGES,
  FORMY_EGZAMINACYJNE_KL8_CHALLENGES,
  LEKTURY_CKE_CZESC_1_CHALLENGES,
  LEKTURY_CKE_CZESC_2_CHALLENGES,
  NEW_MINIGAMES_SHOWCASE_CHALLENGES
} from '../data/curriculumChallenges.js';

export class BossEncounterManager {
  constructor(app) {
    this.app = app;
  }

  launchBossById(bossId, nodeId = 'b6_node_5', node = null) {
    let cleanId = String(bossId || 'pilkarz')
      .replace(/^(boss_|city_boss_|m3_boss_|m4_boss_|m5_boss_|regular_boss_|regular_)/, '')
      .replace(/(_boss|_trends|_regular|_workout|_office|_quiz|_tf|_quiz_5|_visit)$/, '');

    if (cleanId === 'footballer') cleanId = 'pilkarz';
    if (cleanId === 'teacher') cleanId = 'nauczycielka';
    if (cleanId === 'doctor') cleanId = 'lekarz';

    // Specjalne tryby z menu Wyzwań: Kanon Lektur CKE I/II oraz Formy Wypowiedzi
    let overrideChallenges = null;
    let overrideTitle = null;
    let resolvedId = cleanId;

    if (cleanId === 'lektury_1') {
      resolvedId = 'dyrektorka';
      overrideChallenges = LEKTURY_CKE_CZESC_1_CHALLENGES;
      overrideTitle = 'EPIZOD 7 • LEKTURY OBOWIĄZKOWE I: BOHATEROWIE, FABUŁA I CYTATY';
    } else if (cleanId === 'lektury_2') {
      resolvedId = 'instagramerka';
      overrideChallenges = LEKTURY_CKE_CZESC_2_CHALLENGES;
      overrideTitle = 'EPIZOD 8 • LEKTURY OBOWIĄZKOWE II: MOTYWY, SYMBOLE I PLAKATY';
    } else if (cleanId === 'formy_wypowiedzi') {
      resolvedId = 'dyrektorka';
      overrideChallenges = [...FORMY_WYPOWIEDZI_KL4_CHALLENGES, ...FORMY_EGZAMINACYJNE_KL8_CHALLENGES];
      overrideTitle = 'ARCHITEKT TEKSTU: DEDYKACJA, ZAPROSZENIE, OGŁOSZENIE, OPOWIADANIE I ROZPRAWKA';
    } else if (cleanId === 'nowe_minigry') {
      resolvedId = 'profesor';
      overrideChallenges = NEW_MINIGAMES_SHOWCASE_CHALLENGES;
      overrideTitle = 'NOWE MINIGRY: ZŁODZIEJ KOŃCÓWEK, ALGORYTM ZDANIA, WORD MAGNETS, SWIPE & ARCHITEKT';
    } else if (cleanId === 'algorytm_zdania') {
      resolvedId = 'nauczycielka';
      overrideChallenges = [...ALGORYTM_ZDANIA_CHALLENGES, ...FLEKSJA_I_MAGNESY_CHALLENGES];
      overrideTitle = 'ALGORYTM ZDANIA, WORD MAGNETS & ZŁODZIEJ KOŃCÓWEK';
    } else if (cleanId === 'swipe_fakt_opinia') {
      resolvedId = 'instagramerka';
      overrideChallenges = SWIPE_FAKT_OPINIA_CHALLENGES;
      overrideTitle = 'TINDER / SWIPE: FAKT CZY OPINIA?';
    }

    const boss = getBoss(resolvedId);

    const isRegular = Boolean(node && !node.isBoss && (node.enemyMaxHp || node.enemyDamage));
    const targetHp = isRegular ? (node.enemyMaxHp || Math.floor(boss.hp / 2)) : boss.hp;
    const targetDmg = isRegular ? (node.enemyDamage || Math.max(2, Math.floor(boss.dmg / 2))) : boss.dmg;

    const heroId = this.app.player?.heroId || 'warrior';
    const pip = this.app.currentEpisode?.pip || 1;
    const storyEp = getStoryEpisode(heroId, pip);
    const matchesEpisode = !isRegular && storyEp && storyEp.bossId === boss.id && !overrideChallenges;
    const taunt = matchesEpisode ? storyEp.taunt : null;
    const victoryLine = isRegular ? `${boss.name} ustępuje Ci z drogi!` : (matchesEpisode ? storyEp.outro : `Boss ${boss.name} pokonany!`);

    // Dobierz dedykowane zadania z podstawy programowej dla konkretnych epizodów
    let activeChallenges = overrideChallenges || (node?.challenges && node.challenges.length ? node.challenges : null);
    if (!activeChallenges && node?.questions && node.questions.length) {
      activeChallenges = node.questions.map(q => ({
        type: 'quiz',
        prompt: q.speech ? `${q.speech}\n${q.promptPl || ''}` : (q.promptPl || q.question || ''),
        options: q.options
      }));
    }
    if (!activeChallenges) {
      activeChallenges = boss.challenges;
    }
    if (matchesEpisode) {
      if (heroId === 'thief') {
        activeChallenges = [...FLEKSJA_I_MAGNESY_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'robot') {
        activeChallenges = [...ALGORYTM_ZDANIA_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'inventor' && pip === 2) {
        activeChallenges = [...FORMY_WYPOWIEDZI_KL4_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'inventor' && pip === 6) {
        activeChallenges = [...FORMY_EGZAMINACYJNE_KL8_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'witch' && pip === 5) {
        activeChallenges = [...LEKTURY_CKE_CZESC_1_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'witch' && pip === 6) {
        activeChallenges = [...LEKTURY_CKE_CZESC_2_CHALLENGES, ...(boss.challenges || [])];
      } else if (heroId === 'jester') {
        activeChallenges = [...SWIPE_FAKT_OPINIA_CHALLENGES, ...(boss.challenges || [])];
      }
    }

    const arenaMount = this.app.openArena(boss.arena || 2);

    const onPlayerDamaged = (dmg) => {
      this.app.player.hp = Math.max(0, this.app.player.hp - dmg);
      this.app.updateHUD();
    };

    const onClose = ({ defeated } = {}) => {
      if (defeated || (this.app.player && this.app.player.hp <= 0)) {
        this.app.handleGameOver();
        return;
      }
      playJaggedCurtainWipe(() => {
        if (this.app.activeMinigame) {
          this.app.activeMinigame.destroy();
          this.app.activeMinigame = null;
        }
        arenaMount.classList.add('hidden');
        musicManager.resumeBoardMusic(this.app.player);
        this.app.renderBoard();
        this.app.updateHUD();
      });
    };

    if (boss.game === 'footballer') {
      this.app.activeMinigame = new BossFootballerGame(arenaMount, {
        player: this.app.player,
        enemyMaxHp: targetHp,
        enemyDamage: targetDmg,
        baseTime: node?.baseTime || (isRegular ? 10 : 8),
        onPlayerDamaged,
        onClose,
        onComplete: ({ score } = {}) => {
          this.app.handleFighterVictory(arenaMount, nodeId, score || (isRegular ? 250 : 400), victoryLine);
        }
      });
    } else {
      const baseSub = `${boss.name.toUpperCase()} (${targetHp} HP, ${targetDmg} dmg)`;
      const enemyTitle = isRegular ? (node?.titlePl || `${boss.name} (${targetHp} HP, ${targetDmg} dmg)`) : (overrideTitle || boss.title);
      const enemySubtitle = isRegular ? (node?.subtitlePl || 'Pojedynek na korytarzu') : (taunt ? `${baseSub} • „${taunt}”` : baseSub);
      this.app.activeMinigame = new BossCwaniakGame(arenaMount, {
        player: this.app.player,
        enemyName: boss.name,
        enemyTitle,
        enemySubtitle,
        enemyAvatar: boss.avatar,
        challenges: normalizeChallenges(activeChallenges),
        arenaClass: boss.arenaClass,
        enemyMaxHp: targetHp,
        enemyDamage: targetDmg,
        onPlayerDamaged,
        onClose,
        onComplete: ({ score, damageTaken = 0 } = {}) => {
          this.app.handleFighterVictory(arenaMount, nodeId, score || (isRegular ? 250 : 1000), victoryLine, { damageTaken });
        }
      });
    }

    this.app.activeMinigame.mount();
  }

  launchBossFootballer(nodeId = 'b6_node_5') {
    this.launchBossById('pilkarz', nodeId);
  }

  launchBossCwaniak(nodeId = 'b6_node_5') {
    this.launchBossById('cwaniak', nodeId);
  }

  launchBossNauczycielka(nodeId = 'b6_node_5') {
    this.launchBossById('nauczycielka', nodeId);
  }

  launchBossLekarz(nodeId = 'b6_node_5') {
    this.launchBossById('lekarz', nodeId);
  }

  launchBossInstagramerka(nodeId = 'b6_node_5') {
    this.launchBossById('instagramerka', nodeId);
  }

  launchBossSmok(nodeId = 'b6_node_5') {
    this.launchBossById('smok', nodeId);
  }

  launchBossSzkieleton(nodeId = 'b6_node_5') {
    this.launchBossById('szkieleton', nodeId);
  }

  launchBossSilaczka(nodeId = 'b6_node_5') {
    this.launchBossById('silaczka', nodeId);
  }

  launchBossDyrektorka(nodeId = 'b6_node_5') {
    this.launchBossById('dyrektorka', nodeId);
  }

  launchBossProfesor(nodeId = 'b6_node_5') {
    this.launchBossById('profesor', nodeId);
  }
}
