// Menedżer uruchamiania standardowych minigier, quizów, kół fortuny i dialogów

import { sound } from '../audio/sound.js';
import { musicManager } from '../audio/musicManager.js';
import { playJaggedCurtainWipe } from '../ui/victoryScreen.js';
import { MatchingPairsGame } from '../games/matchingPairs.js';
import { AnagramGame } from '../games/anagramGame.js';
import { OlekQuizGame } from '../games/olekQuizGame.js';
import { SpinWheelGame } from '../games/spinWheel.js';
import { SpellWordGame } from '../games/spellWordGame.js';
import { MatchUpGame } from '../games/matchUpGame.js';
import { FindMatchGame } from '../games/findMatchGame.js';
import { WordSearchGame } from '../games/wordSearchGame.js';
import { CharacterDialogGame } from '../games/characterDialogGame.js';
import { OpenTheBoxGame } from '../games/openTheBoxGame.js';
import { RankOrderGame } from '../games/rankOrderGame.js';

import {
  getPlayerDamage,
  SLANG_WORDS,
  WHEEL_SCENARIOS,
  BOARD_3_WORDS,
  BOARD_3_WHEEL_SCENARIOS,
  BOARD_4_WORDS,
  BOARD_5_WORDS,
  BOARD_6_WORDS,
  CITY_1_WORDS,
  CITY_1_WHEEL_SCENARIOS,
  CITY_2_WORDS,
  CITY_2_WHEEL_SCENARIOS,
  CITY_3_WORDS,
  CITY_3_WHEEL_SCENARIOS,
  MODULE_3_1_WORDS,
  MODULE_3_2_WORDS,
  MODULE_3_3_WORDS,
  MODULE_4_1_WORDS,
  MODULE_4_2_WORDS,
  MODULE_4_3_WORDS,
  MODULE_5_1_WORDS,
  MODULE_5_2_WORDS,
  OLEK_QUIZ_ENCOUNTERS,
  BOARD_3_SPELL_QUESTIONS,
  MATCH_UP_DATA,
  FIND_MATCH_QUESTIONS,
  OLEK_BOARD_4_QUIZ,
  WORD_SEARCH_WORDS,
  BOARD_5_OLEK_QUESTIONS,
  BOARD_5_TEACHER_QUESTIONS,
  BOARD_6_TOPICS,
  BOARD_6_MATCHUP_DATA,
  BOARD_6_OLEK_QUESTIONS,
  WUEFISTA_DIALOG_STEPS,
  PIELEGNIARKA_DIALOG_STEPS,
  PIELEGNIARKA_KONTROLA_DIALOG_STEPS,
  PIELEGNIARKA_PRZYCHODNIA_DIALOG_STEPS,
  GEJMER_DIALOG_STEPS,
  PILKARZ_M5_DIALOG_STEPS,
  CWANIAK_M5_DIALOG_STEPS
} from '../data/vocabulary.js';

export class MinigameLauncher {
  constructor(app) {
    this.app = app;
  }

  launchMatchingPairs(nodeId = 'node_3') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new MatchingPairsGame(arenaMount, {
      player: this.app.player,
      enemyName: 'kotek',
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        this.app.activeMinigame = null;
        arenaMount.classList.add('hidden');
        this.app.updateHUD();
        musicManager.resumeBoardMusic();
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Brawo! 🐱');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchAnagram(nodeId = 'b2_node_1') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new AnagramGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        this.app.activeMinigame = null;
        arenaMount.classList.add('hidden');
        musicManager.resumeBoardMusic();
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Rozgrzewka zaliczona! 🐱');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchOlekQuiz(nodeId = 'b2_node_2', encounterKey = 'encounter_1') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new OlekQuizGame(arenaMount, {
      encounterKey,
      player: this.app.player,
      onPlayerDamaged: (dmg = 5) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz! 💪', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        const bubbleText = encounterKey === 'encounter_2' ? 'Nara, Olek! 🔔' : 'Siema, Olek! 🎮';
        this.app.handleFighterVictory(arenaMount, nodeId, score, bubbleText);
      }
    });
    this.app.activeMinigame.mount();
  }

  launchSpinWheel(nodeId = 'b3_node_2') {
    const arenaMount = this.app.openArena();
    const tanDmg = getPlayerDamage(this.app.player);

    this.app.activeMinigame = new SpinWheelGame(arenaMount, {
      player: this.app.player,
      enemyMaxHp: 3 * tanDmg,
      tanDamage: tanDmg,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Super obrót kołem! 🎡');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchSpellWord(nodeId = 'b3_node_5') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new SpellWordGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 5,
      onPlayerDamaged: (dmg = 5) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz! 💪', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Znam już Twoje ID, Olek! 🎮');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchMatchUp(nodeId = 'b4_node_2') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new MatchUpGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 2,
      onPlayerDamaged: (dmg = 2) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz! 💪', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Jeżyk pokonany! 🦔✨');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchFindMatch(nodeId = 'b4_node_5') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new FindMatchGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 3,
      onPlayerDamaged: (dmg = 3) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz! 💪', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Szybki jak błyskawica! 🐶⚡');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchWordSearch(nodeId = 'b4_node_7') {
    const arenaMount = this.app.openArena();

    this.app.activeMinigame = new WordSearchGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 3,
      onPlayerDamaged: (dmg = 3) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz! 💪', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Zając dogoniony! 🐇💨');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchBoard6HedgehogMatchUp(nodeId = 'b6_node_2') {
    const arenaMount = this.app.openArena();
    const tanDmg = getPlayerDamage(this.app.player);

    this.app.activeMinigame = new MatchUpGame(arenaMount, {
      player: this.app.player,
      enemyMaxHp: BOARD_6_MATCHUP_DATA.length * tanDmg,
      enemyHp: BOARD_6_MATCHUP_DATA.length * tanDmg,
      enemyDamage: 2,
      tanDamage: tanDmg,
      enemyName: 'Jeżyk 🦔',
      opponentAvatar: './assets/Postacie/Jez.png',
      spriteClass: 'sprite-jez',
      items: BOARD_6_MATCHUP_DATA,
      onPlayerDamaged: (dmg = 2) => {
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
          if (defeated) {
            this.app.player.hp = Math.max(5, this.app.player.maxHp);
            this.app.showTemporaryPlayerBubble('Spróbujmy jeszcze raz z Jeżykiem! 🦔', 2000);
          }
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score, 'Jeżyk pokonany! Świetne dopasowanie! 🦔✨');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchThoughtsOpinion(nodeId = 'b6_node_3') {
    this.app.closeModal();
    const arenaMount = this.app.openArena();
    if (!arenaMount) return;

    let currentTopicIdx = 0;
    const topics = BOARD_6_TOPICS;

    const renderTopic = () => {
      const topic = topics[currentTopicIdx];
      const playerHpPct = Math.max(0, Math.min(100, (this.app.player.hp / this.app.player.maxHp) * 100));
      const cleanImg = topic.image.startsWith('./') ? topic.image.slice(1) : topic.image;

      arenaMount.innerHTML = `
        <div class="dd-combat-arena thoughts-arena">
          <h2 class="mp-animated-title is-centered" style="font-size: 1.8rem;">Twoje Myśli i Gusta (${currentTopicIdx + 1}/${topics.length})</h2>

          <!-- Prawy górny róg: Myśli -->
          <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Myśli</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container" id="mp-opponent-sprite-wrap">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Myśli"
                class="dd-fighter-sprite sprite-mysli"
                id="mp-opponent-sprite"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta tematu i 4 opcje -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            <div class="dd-topic-arena-card">
              <div class="dd-topic-img-wrap" style="width: 220px; height: 160px; margin: 0 auto 12px; overflow: hidden; border-radius: 14px; border: 2px solid rgba(255,255,255,0.2);">
                <img
                  src="${cleanImg}"
                  alt="${topic.name}"
                  class="dd-topic-img"
                  style="width: 100%; height: 100%; object-fit: cover;"
                  onerror="this.onerror=null; this.src='/public${cleanImg}';"
                />
              </div>
              <h3 class="dd-topic-name" style="font-family:'Fredoka',sans-serif; font-size:1.45rem; color:#ffd166; margin:0 0 6px;">${topic.name}</h3>
              <p class="dd-topic-desc" style="font-size:0.95rem; color:#cbd5e1; margin:0 0 16px; line-height:1.35;">${topic.desc}</p>

              <!-- 4 Opcje ekspresji: MEGA, FAJNE, SŁABE, NUDNE -->
              <div class="dd-thoughts-options-grid" style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <button type="button" class="btn-thought-opt opt-mega" data-val="mega">
                  <span class="to-icon">🔥</span>
                  <span class="to-label">MEGA!</span>
                  <span class="to-sub">[me-ga]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-fajne" data-val="fajne">
                  <span class="to-icon">👍</span>
                  <span class="to-label">FAJNE</span>
                  <span class="to-sub">[fai-neh]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-slabe" data-val="slabe">
                  <span class="to-icon">👎</span>
                  <span class="to-label">SŁABE</span>
                  <span class="to-sub">[swa-beh]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-nudne" data-val="nudne">
                  <span class="to-icon">🥱</span>
                  <span class="to-label">NUDNE</span>
                  <span class="to-sub">[nood-neh]</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
            <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                id="mp-player-sprite"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Tan</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${playerHpPct}%"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      arenaMount.querySelectorAll('.btn-thought-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = btn.dataset.val;
          this.playerPreferences[topic.id] = val;
          sound.playStep();
          // Bez syntezatora mowy (usunięto głosówkę zgodnie z poleceniem)

          btn.classList.add('is-picked');
          arenaMount.querySelectorAll('.btn-thought-opt').forEach(b => b.disabled = true);

          setTimeout(() => {
            if (currentTopicIdx + 1 < topics.length) {
              currentTopicIdx++;
              renderTopic();
            } else {
              sound.playFanfare();
              const node = this.app.getNode(nodeId);
              if (node) node.completed = true;
              this.awardProgress(1, 1, 100);
              this.app.updateHUD();
              playJaggedCurtainWipe(() => {
                arenaMount.classList.add('hidden');
                arenaMount.innerHTML = '';
                this.app.renderBoard();
                this.app.showTemporaryPlayerBubble('Twoje myśli są uporządkowane! 🧠✨', 2500);
              });
            }
          }, 450);
        });
      });
    };

    renderTopic();
  }

  launchThoughtsFight(nodeId = 'b6_node_5') {
    this.app.closeModal();
    const arenaMount = this.app.openArena();
    if (!arenaMount) return;

    let thoughtsHp = 42;
    const maxThoughtsHp = 42;
    const enemyDmg = 5;
    const hitDmg = 14;

    const topicsToAsk = [...BOARD_6_TOPICS].sort(() => Math.random() - 0.5).slice(0, 3);
    let roundIdx = 0;

    const renderFightRound = () => {
      const topic = topicsToAsk[roundIdx];
      const userChoice = this.playerPreferences[topic.id] || 'fajne';
      const isLike = (userChoice === 'mega' || userChoice === 'fajne');
      const choiceLabel = userChoice.toUpperCase();

      const hpPct = Math.max(0, Math.min(100, (thoughtsHp / maxThoughtsHp) * 100));
      const playerHpPct = Math.max(0, Math.min(100, (this.app.player.hp / this.app.player.maxHp) * 100));
      const cleanImg = topic.image.startsWith('./') ? topic.image.slice(1) : topic.image;

      arenaMount.innerHTML = `
        <div class="dd-combat-arena thoughts-arena">
          <h2 class="mp-animated-title is-centered" style="font-size: 1.8rem;">Walka z Myślami: Lajk czy Hejt?</h2>

          <!-- Prawy górny róg: Myśli -->
          <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Myśli</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
                <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${hpPct}%; background: #e63946;"></div>
                <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${thoughtsHp}/${maxThoughtsHp}</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container" id="mp-opponent-sprite-wrap">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Myśli"
                class="dd-fighter-sprite sprite-mysli"
                id="mp-opponent-sprite"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta walki Lajk vs Hejt -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            <div class="dd-topic-arena-card">
              <div class="dd-topic-mini-card" style="display:flex; align-items:center; gap:12px; margin-bottom:14px; background:rgba(0,0,0,0.3); padding:8px 16px; border-radius:12px;">
                <img
                  src="${cleanImg}"
                  alt="${topic.name}"
                  class="topic-mini-img"
                  style="width:64px; height:64px; object-fit:cover; border-radius:8px;"
                  onerror="this.onerror=null; this.src='/public${cleanImg}';"
                />
                <div style="text-align:left;">
                  <strong style="font-size:1.15rem; color:#ffd166;">${topic.name}</strong>
                  <div style="font-size:0.88rem; color:#94a3b8;">Twoja ocena: <b style="color:#06d6a0;">${choiceLabel}</b></div>
                </div>
              </div>

              <div style="font-family:'Fredoka',sans-serif; font-size:1.2rem; color:#ffffff; margin-bottom:18px;">
                Czy to zasługuje na <strong>LAJK</strong> czy <strong>HEJT</strong>?
              </div>

              <!-- Dwa przyciski: LAJK vs HEJT -->
              <div class="dd-lajk-hejt-buttons" style="display:flex; gap:16px; justify-content:center; width:100%;">
                <button type="button" class="btn-lajk" data-choice="lajk" style="flex:1; padding:16px; border-radius:14px; background:#3a86ff; color:#fff; border:none; cursor:pointer; font-weight:800; font-size:1.1rem; box-shadow:0 6px 16px rgba(58,134,255,0.4);">
                  <div style="font-size:1.6rem; margin-bottom:4px;">❤️ 👍</div>
                  <div>LAJK</div>
                  <div style="font-size:0.8rem; font-weight:600; opacity:0.9;">(Polubienie / Aprobata)</div>
                </button>
                <button type="button" class="btn-hejt" data-choice="hejt" style="flex:1; padding:16px; border-radius:14px; background:#e63946; color:#fff; border:none; cursor:pointer; font-weight:800; font-size:1.1rem; box-shadow:0 6px 16px rgba(230,57,70,0.4);">
                  <div style="font-size:1.6rem; margin-bottom:4px;">💬 👎</div>
                  <div>HEJT</div>
                  <div style="font-size:0.8rem; font-weight:600; opacity:0.9;">(Krytyka / Odrzucenie)</div>
                </button>
              </div>
            </div>
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
            <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                id="mp-player-sprite"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Tan</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${playerHpPct}%"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      arenaMount.querySelectorAll('.btn-lajk, .btn-hejt').forEach(btn => {
        btn.addEventListener('click', () => {
          const picked = btn.dataset.choice;
          const isCorrect = (picked === 'lajk' && isLike) || (picked === 'hejt' && !isLike);

          if (isCorrect) {
            btn.classList.add('is-correct');
            sound.playAttack();
            sound.playSuccess();
            thoughtsHp = Math.max(0, thoughtsHp - hitDmg);
          } else {
            btn.classList.add('is-wrong');
            sound.playHurt();
            this.app.player.hp = Math.max(1, this.app.player.hp - enemyDmg);
            this.app.updateHUD();
          }

          arenaMount.querySelectorAll('.btn-lajk, .btn-hejt').forEach(b => b.disabled = true);

          setTimeout(() => {
            if (thoughtsHp <= 0) {
              sound.playFanfare();
              const node = this.app.getNode(nodeId);
              if (node) node.completed = true;
              this.awardProgress(1, 1, 120);
              this.app.updateHUD();
              playJaggedCurtainWipe(() => {
                arenaMount.classList.add('hidden');
                arenaMount.innerHTML = '';
                this.app.renderBoard();
                this.app.showTemporaryPlayerBubble('Pokonałeś Myśli i opanowałeś Lajki oraz Hejty! 🧠✨', 2600);
              });
            } else if (this.app.player.hp > 0) {
              roundIdx = (roundIdx + 1) % topicsToAsk.length;
              renderFightRound();
            }
          }, 700);
        });
      });
    };

    renderFightRound();
  }

  launchCityCatWheel(nodeId = 'c1_node_2') {
    const arenaMount = this.app.openArena();
    const tanDmg = getPlayerDamage(this.app.player);

    this.app.activeMinigame = new SpinWheelGame(arenaMount, {
      player: this.app.player,
      scenarios: CITY_1_WHEEL_SCENARIOS,
      enemyMaxHp: 6 * tanDmg,
      tanDamage: tanDmg,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 150, 'Kot Bolo gratuluje! Znasz zwroty zakupowe! 🐱✨');
      }
    });
    this.app.activeMinigame.mount();
  }

  launchCity2CatWheel(nodeId = 'c2_node_2') {
    const arenaMount = this.app.openArena();
    const tanDmg = getPlayerDamage(this.app.player);

    this.app.activeMinigame = new SpinWheelGame(arenaMount, {
      player: this.app.player,
      scenarios: CITY_2_WHEEL_SCENARIOS,
      enemyMaxHp: 7 * tanDmg,
      tanDamage: tanDmg,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Kot Pomocnik mruczy z radości! Znasz tłumaczenia! 🐱✨');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchCity3CatWheel(nodeId = 'c3_node_2') {
    const arenaMount = this.app.openArena();
    const tanDmg = getPlayerDamage(this.app.player);

    this.app.activeMinigame = new SpinWheelGame(arenaMount, {
      player: this.app.player,
      scenarios: CITY_3_WHEEL_SCENARIOS,
      enemyMaxHp: 5 * tanDmg,
      tanDamage: tanDmg,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) {
            this.app.activeMinigame.destroy();
            this.app.activeMinigame = null;
          }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
          this.app.updateHUD();
        });
      },
      onComplete: ({ score }) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Kot Pomocnik bije brawo! Wiesz jak pytać o drogę! 🚏✨');
      }
    });

    this.app.activeMinigame.mount();
  }

  launchGenericCatWheel(nodeId, wordsList, title) {
    const arenaMount = this.app.openArena();
    const colors = ['#3a86ff', '#ef476f', '#ffd166', '#06d6a0', '#8338ec', '#fb5607', '#118ab2'];
    const scenarios = wordsList.map((w, idx) => {
      const otherWords = wordsList.filter((other, oIdx) => oIdx !== idx && other.vnMeaning !== w.vnMeaning);
      const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);
      const wrong1 = shuffledOthers[0]?.vnMeaning || 'Không đúng';
      const wrong2 = shuffledOthers[1]?.vnMeaning || 'Ý nghĩa khác';

      const options = [
        { textPl: w.vnMeaning, correct: true },
        { textPl: wrong1, correct: false },
        { textPl: wrong2, correct: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `w_${idx}`,
        sliceLabel: w.cleanWord || w.word,
        sliceColor: w.color || colors[idx % colors.length],
        badge: title ? title.replace(/Kot Bolo:\s*/i, '').toUpperCase() : 'ZAKRĘĆ KOŁEM',
        speakText: w.word,
        options,
        explanationPl: `Świetnie! „${w.word}” to po wietnamsku: ${w.vnMeaning}.`
      };
    });
    const tanDmg = getPlayerDamage(this.app.player);
    this.app.activeMinigame = new SpinWheelGame(arenaMount, {
      title,
      player: this.app.player,
      scenarios,
      enemyMaxHp: scenarios.length * tanDmg,
      tanDamage: tanDmg,
      enemyDamage: 1,
      onPlayerDamaged: (dmg = 1) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: () => {
        this.app.handleFighterVictory(arenaMount, nodeId, 150, 'Kot Bolo zamruczał z radości! Świetna wymowa! 🐾✨');
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
        });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchModuleMatchUp(nodeId, type) {
    const arenaMount = this.app.openArena();
    let pairs = [
      { id: '1', left: 'Nie rozumiem', right: 'Em không hiểu' },
      { id: '2', left: 'Proszę powtórzyć', right: 'Xin nhắc lại' },
      { id: '3', left: 'Wolniej', right: 'Chậm hơn' }
    ];
    let title = 'Jeżyk: Dopasuj słowa!';
    if (type === 'm4_matchup') {
      pairs = [
        { id: '1', left: 'Jestem głodny', right: 'Em đói bụng' },
        { id: '2', left: 'Chce mi się pić', right: 'Em khát nước' },
        { id: '3', left: 'Jest mi zimno', right: 'Em thấy lạnh' }
      ];
      title = 'Jeżyk: Stany Fizyczne';
    } else if (type === 'm5_matchup') {
      pairs = [
        { id: '1', left: 'Pochodzę z Wietnamu', right: 'Tôi đến từ Việt Nam' },
        { id: '2', left: 'Mieszkam w Polsce', right: 'Tôi sống ở Ba Lan' },
        { id: '3', left: 'Komputer', right: 'Máy tính' }
      ];
      title = 'Jeżyk: Pasje i Tożsamość';
    }

    this.app.activeMinigame = new MatchUpGame(arenaMount, {
      player: this.app.player,
      enemyDamage: 2,
      pairs,
      title,
      onPlayerDamaged: (dmg = 2) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 150, 'Jeżyk schował kolce i bije brawo! 🦔👏');
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
        });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchOlekSchoolQuiz(nodeId = 'm3_2_node_4') {
    const arenaMount = this.app.openArena();
    const questions = [
      {
        question: 'Olek pyta: „Tan, masz zapasowy długopis? Mój się wypisał!” 🐶',
        options: [
          { text: '„Tak, proszę! Mam niebieski długopis w piórniku.”', correct: true },
          { text: '„Jest mi zimno i chcę założyć szalik.”', correct: false },
          { text: '„Bilet 20-minutowy ulgowy.”', correct: false }
        ]
      },
      {
        question: 'Olek pyta: „A pożyczysz mi na chwilę gumkę do zmazania błędu?” 🧼',
        options: [
          { text: '„Pewnie, bierz śmiało i zmaż ten błąd!”', correct: true },
          { text: '„Zamawiam kebaba z ostrym sosem.”', correct: false },
          { text: '„Nie rozumiem polecenia na tablicy.”', correct: false }
        ]
      }
    ];

    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Olek',
      enemyTitle: '🐶 KOLEGA OLEK (W ŁAWCE) 🐶',
      enemySubtitle: 'Olek (30 HP, 7 dmg)',
      enemyAvatar: './assets/Postacie/Szczeniak.png',
      arenaClass: 'school-dialog-arena',
      enemyMaxHp: 30,
      enemyDamage: 7,
      steps: questions,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Olek podziękował za pożyczone przybory! 🐶🤝', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchModuleRankOrder(nodeId, type) {
    const arenaMount = this.app.openArena();
    let steps = [
      '1. Podnieś rękę na lekcji',
      '2. „Przepraszam, zapomniałem dzisiaj zeszytu.”',
      '3. „Czy mogę patrzeć do książki z kolegą?”',
      '4. „Dziękuję bardzo, proszę pani.”'
    ];
    let title = 'Ułóż dialog: Brak zeszytu';
    if (type === 'm4_emotions_rank') {
      steps = [
        '1. Zauważ swoje zmęczenie',
        '2. „Jestem bardzo zmęczony po szkole.”',
        '3. Wypij szklankę wody',
        '4. Zrób 15 minut odpoczynku i zrelaksuj się'
      ];
      title = 'Ułóż sekwencję: Odpoczynek i spokój';
    }

    this.app.activeMinigame = new RankOrderGame(arenaMount, {
      steps,
      title,
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 180, 'Świetnie uporządkowana wypowiedź! 📜✨');
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
        });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchModuleOpenBox(nodeId) {
    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new OpenTheBoxGame(arenaMount, {
      title: 'Apteczka: Dopasuj w 5 sekund!',
      boxes: [
        { id: 1, prompt: 'Gdy termometr wskazuje 38.5°C, to jest to:', correctWord: 'Gorączka', wrongWords: ['Odpoczynek', 'Lekarstwo'] },
        { id: 2, prompt: 'Gdy boli cię gardło i przełykasz ślinę, pomoże ci:', correctWord: 'Lekarstwo', wrongWords: ['Linijka', 'Powerbank'] }
      ],
      onComplete: ({ score } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Wszystkie lekarstwa i objawy odgadnięte w czasie! 💊⏱️');
      },
      onClose: () => {
        playJaggedCurtainWipe(() => {
          if (this.app.activeMinigame) { this.app.activeMinigame.destroy(); this.app.activeMinigame = null; }
          arenaMount.classList.add('hidden');
          this.app.renderBoard();
        });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchModuleThoughts(nodeId, type) {
    const modalMount = document.getElementById('modal-mount');
    modalMount.classList.remove('hidden');
    let title = 'Twoje myśli na lekcji';
    let question = 'Co mówisz, gdy nauczyciel mówi za szybko?';
    let options = ['„Proszę mówić trochę wolniej!”', '„Proszę powtórzyć jeszcze raz!”'];

    if (type === 'm3_schedule_thoughts') {
      title = 'Twoje ulubione lekcje';
      question = 'W jaki dzień masz najwięcej energii na naukę?';
      options = ['W poniedziałek rano', 'W piątek po południu'];
    } else if (type === 'm4_physical_thoughts') {
      title = 'Sygnały Twojego organizmu';
      question = 'Gdy po lekcjach jesteś bardzo głodny, co wybierasz?';
      options = ['Świeżą drożdżówkę i ciepłą herbatę', 'Zjedzenie obiadu w domu'];
    } else if (type === 'm4_emotion_thoughts') {
      title = 'Rozładowanie emocji';
      question = 'Jak najlepiej uspokoić złość i stres?';
      options = ['Głęboki spokojny oddech', 'Wyjście na świeże powietrze'];
    }

    modalMount.innerHTML = `
      <div class="dicey-modal-backdrop dd-thoughts-backdrop">
        <div class="dd-thoughts-container">
          <div class="dd-thoughts-header">
            <img src="./assets/Postacie/Mysli.png" alt="Myśli" class="dd-thoughts-avatar" />
            <div>
              <h3>${title}</h3>
              <p>Wybierz to, co czujesz — nie ma złej odpowiedzi!</p>
            </div>
          </div>
          <div class="dd-thoughts-content">
            <p class="dd-thoughts-q">${question}</p>
            <div class="dd-thoughts-options">
              ${options.map((opt, i) => `
                <button class="btn-dd-thought-choice" data-idx="${i}">${opt}</button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    modalMount.querySelectorAll('.btn-dd-thought-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playSuccess();
        const node = this.app.getNode(nodeId);
        if (node) node.completed = true;
        this.awardProgress(1, 1, 150);
        playJaggedCurtainWipe(() => {
          this.app.closeModal();
          this.app.renderBoard();
          this.app.updateHUD();
          this.app.showTemporaryPlayerBubble('Twoje myśli są czyste i spokojne! 🧠✨', 2200);
        });
      });
    });
  }

  launchWuefistaDialog(nodeId = 'm3_3_node_2') {
    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Wuefista',
      enemyTitle: '🏃 NAUCZYCIEL WF-U 🏃',
      enemySubtitle: 'Wuefista (30 HP, 3 dmg)',
      enemyAvatar: './assets/Postacie/Wuefista.png',
      arenaClass: 'school-dialog-arena',
      enemyMaxHp: 30,
      enemyDamage: 3,
      steps: WUEFISTA_DIALOG_STEPS,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Świetna forma na WF-ie! Rozgrzewka zaliczona! 🏃‍♂️⚽', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchPielegniarkaDialog(nodeId = 'm4_2_node_2', variant = 'm4_pielegniarka') {
    let enemyTitle = '👩‍⚕️ SZKOLNA PIELĘGNIARKA 👩‍⚕️';
    let enemySubtitle = 'Pielęgniarka (30 HP, 3 dmg)';
    let steps = PIELEGNIARKA_DIALOG_STEPS;
    let victoryMsg = 'Pielęgniarka pomogła! Gorączka opada, czujesz się bezpiecznie! 👩‍⚕️❤️';

    if (variant === 'm4_pielegniarka_kontrola') {
      enemyTitle = '👩‍⚕️ KONTROLA ZDROWIA 👩‍⚕️';
      enemySubtitle = 'Pielęgniarka (Kontrola 30 HP)';
      steps = PIELEGNIARKA_KONTROLA_DIALOG_STEPS;
      victoryMsg = 'Temperatura 36.6°C! Jesteś w pełni sił i gotowy do drogi! 🌡️✨';
    } else if (variant === 'm4_pielegniarka_rejestracja') {
      enemyTitle = '🩺 REJESTRACJA PRZYCHODNI 🩺';
      enemySubtitle = 'Pielęgniarka (Rejestracja 30 HP)';
      steps = PIELEGNIARKA_PRZYCHODNIA_DIALOG_STEPS;
      victoryMsg = 'Ciśnienie i tętno zbadane! Doktor Lekarz czeka w gabinecie! 🩺🚪';
    }

    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Pielęgniarka',
      enemyTitle,
      enemySubtitle,
      enemyAvatar: './assets/Postacie/Pielegniarka.png',
      arenaClass: 'clinic-dialog-arena',
      enemyMaxHp: 30,
      enemyDamage: 3,
      steps,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, victoryMsg, { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchGejmerDialog(nodeId = 'm5_1_node_4') {
    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Gejmer',
      enemyTitle: '🎮 GEJMER 🎮',
      enemySubtitle: 'Kumpel z Discorda (30 HP, 3 dmg)',
      enemyAvatar: './assets/Postacie/Gejmer.png',
      arenaClass: 'room-dialog-arena',
      enemyMaxHp: 30,
      enemyDamage: 3,
      steps: GEJMER_DIALOG_STEPS,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Gejmer podbija z Tobą rangę w Brawl Stars! 🎮⚡', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchPilkarzM5Dialog(nodeId = 'm5_2_node_2') {
    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Piłkarz',
      enemyTitle: '⚽ PIŁKARZ Z ORLIKA ⚽',
      enemySubtitle: 'Piłkarz (35 HP, 4 dmg)',
      enemyAvatar: './assets/Postacie/Pilkarz.png',
      arenaClass: 'room-dialog-arena',
      enemyMaxHp: 35,
      enemyDamage: 4,
      steps: PILKARZ_M5_DIALOG_STEPS,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Piłkarz podaje Ci piłkę! Jesteś gotowy na turniej! ⚽🔥', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }

  launchCwaniakM5Dialog(nodeId = 'm5_2_node_4') {
    const arenaMount = this.app.openArena();
    this.app.activeMinigame = new CharacterDialogGame(arenaMount, {
      player: this.app.player,
      enemyName: 'Cwaniak',
      enemyTitle: '🕶️ CWANIAK (VIRALE & TRENDY) 🕶️',
      enemySubtitle: 'Cwaniak (35 HP, 4 dmg)',
      enemyAvatar: './assets/Postacie/Cwaniak.png',
      arenaClass: 'room-dialog-arena',
      enemyMaxHp: 35,
      enemyDamage: 4,
      steps: CWANIAK_M5_DIALOG_STEPS,
      onPlayerDamaged: (dmg) => {
        this.app.player.hp = Math.max(1, this.app.player.hp - dmg);
        this.app.updateHUD();
      },
      onComplete: ({ score, damageTaken = 0 } = {}) => {
        this.app.handleFighterVictory(arenaMount, nodeId, score || 200, 'Cwaniak szanuje Twoją wiedzę o anime i trendach! 🕶️✨', { damageTaken });
      }
    });
    this.app.activeMinigame.mount();
  }
}
