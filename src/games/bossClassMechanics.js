// Mechaniki klasowe w walce z bossami (Warrior 2× DMG, Jester unik 3 tury, Robot CPU & Jackpot, Witch 4 Spells, Inventor +5s)

import { sound } from '../audio/sound.js';
import { ROBOT_JACKPOT_BONUSES } from '../data/characterProgression.js';

export function renderClassMechanicBar(game) {
  if (game.heroClass.includes('robot')) {
    const cpuPct = Math.min(100, Math.round((game.robotCurrentCpu / game.robotMaxCpu) * 100));
    return `
      <div class="class-mechanic-bar robot-cpu-bar" id="class-mechanic-bar">
        <div class="cmb-left">
          <span class="cmb-badge">🤖 PROCESOR CPU: <strong id="robot-cpu-val">${game.robotCurrentCpu}/${game.robotMaxCpu}</strong></span>
          <div class="cmb-meter"><div class="cmb-meter-fill" id="robot-cpu-fill" style="width:${cpuPct}%"></div></div>
        </div>
        <button type="button" class="cmb-action-btn" id="btn-robot-roll">🎲 LOSUJ CPU (1–6)</button>
        <span class="cmb-status" id="robot-cpu-status">${game.robotStatusMsg}</span>
      </div>
    `;
  }

  if (game.heroClass.includes('witch')) {
    return `
      <div class="class-mechanic-bar witch-spell-bar" id="class-mechanic-bar">
        <span class="cmb-badge">🔮 WITCH SPELLBOOK:</span>
        <div class="witch-spells-list">
          ${game.witchSpells.map((sp) => `
            <button type="button" class="btn-witch-spell ${game.activeWitchSpell.id === sp.id ? 'is-active' : ''}" data-spell="${sp.id}" title="${sp.desc}">
              <span>${sp.icon}</span> <span>${sp.name.split(' (')[0]}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

export function getLimitBreakLabels(game) {
  const cls = (game.heroClass || game.player?.characterClass || 'warrior').toLowerCase();
  const limitMax = game.limitBreakMax || game.player?.limitBreakHp || 8;
  const limitCur = Math.min(limitMax, game.warriorFuryDamage || 0);

  if (cls.includes('jester')) {
    if (game.jesterDodgeTurns > 0) {
      return {
        isReady: false,
        isActive: true,
        pct: 100,
        label: `🃏 UNIK AKTYWNY (${game.jesterDodgeTurns} TURY)!`
      };
    }
    return {
      isReady: Boolean(game.warriorDoubleReady),
      isActive: false,
      pct: game.warriorDoubleReady ? 100 : Math.max(0, Math.min(100, Math.round((limitCur / limitMax) * 100))),
      label: game.warriorDoubleReady
        ? '⚡ UNIK GOTOWY: 3 TURY! (KLIKNIJ)'
        : `UNIK (LIMIT BREAK) ${limitCur}/${limitMax}`
    };
  }

  let effectName = 'FURIA';
  let activeText = '🔥 FURIA AKTYWNA (2× DMG)!';
  let readyText = '⚡ FURIA: 2× DMG! (KLIKNIJ)';

  if (cls.includes('thief')) {
    effectName = 'KRADZIEŻ';
    activeText = '🗡️ KRADZIEŻ AKTYWNA (2× DMG + HP)!';
    readyText = '⚡ KRADZIEŻ GOTOWA! (KLIKNIJ)';
  } else if (cls.includes('inventor')) {
    effectName = 'GADŻET';
    activeText = '⚙️ GADŻET AKTYWNY (+5s & 2× DMG)!';
    readyText = '⚡ GADŻET: +5s & 2× DMG! (KLIKNIJ)';
  } else if (cls.includes('witch')) {
    effectName = 'ARCYZAKLĘCIE';
    activeText = '🔮 ARCYZAKLĘCIE (2× DMG)!';
    readyText = '⚡ ARCYZAKLĘCIE GOTOWE! (KLIKNIJ)';
  } else if (cls.includes('robot')) {
    effectName = 'OVERDRIVE';
    activeText = '🎰 OVERDRIVE CPU (2× DMG)!';
    readyText = '⚡ OVERDRIVE GOTOWY! (KLIKNIJ)';
  }

  const isReady = Boolean(game.warriorDoubleReady);
  const isActive = Boolean(game.warriorDoubleActive);
  const pct = (isReady || isActive)
    ? 100
    : Math.max(0, Math.min(100, Math.round((limitCur / limitMax) * 100)));

  let label = `${effectName} (LIMIT BREAK) ${limitCur}/${limitMax}`;
  if (isActive) {
    label = activeText;
  } else if (isReady) {
    label = readyText;
  }

  return { isReady, isActive, pct, label };
}

export function renderLimitBreakBar(game) {
  const { isReady, isActive, pct, label } = getLimitBreakLabels(game);

  return `
    <div class="dd-limit-break-bar ${isReady ? 'is-ready' : ''} ${isActive ? 'is-active' : ''}" id="dd-limit-break-bar">
      <div class="dd-limit-break-fill" id="dd-limit-break-fill" style="width: ${pct}%"></div>
      <span class="dd-limit-break-text" id="dd-limit-break-text">${label}</span>
    </div>
  `;
}

export function bindClassMechanicEvents(game) {
  const rollBtn = game.container.querySelector('#btn-robot-roll');
  if (rollBtn) {
    rollBtn.addEventListener('click', () => {
      if (game.lockInput) return;
      rollRobotCpu(game);
    });
  }

  game.container.querySelectorAll('.btn-witch-spell').forEach((btn) => {
    btn.addEventListener('click', () => {
      const spId = btn.dataset.spell;
      const found = game.witchSpells.find((s) => s.id === spId);
      if (found) {
        game.activeWitchSpell = found;
        sound.playWitchSpellSFX(found.id);
        game.container.querySelectorAll('.btn-witch-spell').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (found.id === 'ice_shard') {
          game.addBonusTime(2);
        }
      }
    });
  });

  const lbBar = game.container.querySelector('#dd-limit-break-bar');
  if (lbBar) {
    lbBar.addEventListener('click', () => {
      if (!game.warriorDoubleReady) return;
      const cls = (game.heroClass || game.player?.characterClass || 'warrior').toLowerCase();
      game.warriorDoubleReady = false;
      game.warriorFuryDamage = 0;
      sound.playLimitReady();

      if (cls.includes('jester')) {
        game.jesterDodgeTurns = 3;
      } else {
        game.warriorDoubleActive = true;
        if (cls.includes('inventor') && typeof game.addBonusTime === 'function') {
          game.addBonusTime(5);
        }
      }

      if (typeof game.updatePlayerBar === 'function') {
        game.updatePlayerBar();
      } else if (typeof game.updatePlayerHud === 'function') {
        game.updatePlayerHud();
      }
    });
  }
}

export function rollRobotCpu(game) {
  const roll = Math.floor(Math.random() * 6) + 1;
  game.robotLastRoll = roll;
  game.robotCurrentCpu += roll;
  sound.playRobotRollDice();

  const cpuVal = game.container.querySelector('#robot-cpu-val');
  const cpuFill = game.container.querySelector('#robot-cpu-fill');
  const cpuStatus = game.container.querySelector('#robot-cpu-status');

  if (game.robotCurrentCpu === game.robotMaxCpu) {
    const bonus = ROBOT_JACKPOT_BONUSES[Math.floor(Math.random() * ROBOT_JACKPOT_BONUSES.length)];
    sound.playFanfare();
    game.robotOverflowZeroDmg = false;

    if (bonus.id === 'lucky_shot') {
      game.enemyHp = Math.max(0, game.enemyHp - 5);
      game.updateOpponentBar();
    } else if (bonus.id === 'regenerate') {
      game.player.hp = Math.min(game.player.maxHp, game.player.hp + 3);
      game.updatePlayerBar();
    } else if (bonus.id === 'extra_gear') {
      game.robotExtraGearDmg += 1;
    }

    game.robotStatusMsg = `🎰 JACKPOT (${game.robotMaxCpu}/${game.robotMaxCpu} CPU)! Wylosowano: ${bonus.icon} ${bonus.name} (${bonus.desc})`;
    game.robotCurrentCpu = 0;
  } else if (game.robotCurrentCpu > game.robotMaxCpu) {
    sound.playWrong();
    game.robotOverflowZeroDmg = true;
    game.robotStatusMsg = `⚠️ PRZEKROCZONO MAX CPU (wypadło 🎲 ${roll})! Licznik wraca do 0 – w tym losowaniu 0 DMG!`;
    game.robotCurrentCpu = 0;
  } else {
    game.robotOverflowZeroDmg = false;
    game.robotStatusMsg = `Wylosowano 🎲 +${roll} CPU! Brakuje ${game.robotMaxCpu - game.robotCurrentCpu} do JACKPOTA!`;
  }

  if (cpuVal) cpuVal.textContent = `${game.robotCurrentCpu}/${game.robotMaxCpu}`;
  if (cpuFill) cpuFill.style.width = `${Math.min(100, Math.round((game.robotCurrentCpu / game.robotMaxCpu) * 100))}%`;
  if (cpuStatus) cpuStatus.textContent = game.robotStatusMsg;
}
