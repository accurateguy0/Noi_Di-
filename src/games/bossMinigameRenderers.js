// Renderery 6 nowych trybów minigier dla pojedynków z Bossami (Złodziej Końcówek, Algorytm Zdania, Word Magnets, Architekt Tekstu, Detektyw Lektur, Tinder Swipe)

import { sound } from '../audio/sound.js';

export function renderClozeChallenge(game, stageEl, challenge) {
  const blanks = challenge.sentenceParts.filter((p) => typeof p === 'object' && p.blank);
  let currentBlankIdx = 0;
  const filledAnswers = [];

  const renderClozeStep = () => {
    let bCounter = 0;
    const sentenceHtml = challenge.sentenceParts.map((part) => {
      if (typeof part === 'string') return part;
      const idx = bCounter++;
      if (idx < currentBlankIdx) {
        return `<span class="cloze-slot is-filled">${filledAnswers[idx]}</span>`;
      }
      if (idx === currentBlankIdx) {
        return `<span class="cloze-slot is-active">___?___</span>`;
      }
      return `<span class="cloze-slot">___</span>`;
    }).join('');

    const activeBlank = blanks[currentBlankIdx];

    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-cloze-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'ZŁODZIEJ KOŃCÓWEK • FLEKSJA I ORTOGRAFIA'}</div>
        ${game.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="cloze-sentence-box">${sentenceHtml}</div>
        ${activeBlank ? `
          <div class="cloze-options-row">
            ${[...activeBlank.options].sort(() => Math.random() - 0.5).map((opt) => `
              <button type="button" class="btn-cloze-opt" data-val="${opt}">-${opt}</button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    stageEl.querySelectorAll('.btn-cloze-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (game.lockInput) return;
        const val = btn.dataset.val;
        if (val === activeBlank.answer) {
          sound.playSuccess();
          btn.classList.add('is-correct');
          filledAnswers.push(val);
          currentBlankIdx++;
          if (currentBlankIdx >= blanks.length) {
            game.lockInput = true;
            setTimeout(() => game.handleCorrect(), 300);
          } else {
            setTimeout(() => renderClozeStep(), 250);
          }
        } else {
          btn.classList.add('is-wrong');
          game.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 400);
        }
      });
    });
  };

  renderClozeStep();
}

export function renderSentenceAlgoChallenge(game, stageEl, challenge) {
  let stepIdx = 0;

  const renderAlgoStep = () => {
    const step = challenge.steps[stepIdx];
    const shuffledStepOptions = [...(step.options || [])].sort(() => Math.random() - 0.5);
    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-algo-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'ALGORYTM ZDANIA • SKŁADNIA I INTERPUNKCJA'}</div>
        ${game.renderTheoryHeader(challenge)}
        <div class="algo-sentence-banner">„${challenge.sentence}”</div>
        <h3 class="boss-question-prompt boss-q-prompt">${step.question}</h3>
        <div class="boss-options-grid boss-quiz-options">
          ${shuffledStepOptions.map((opt, idx) => `
            <button type="button" class="btn-boss-opt" data-val="${opt}">
              <span class="bbo-bullet">${idx + 1}</span>
              <span class="bbo-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    stageEl.querySelectorAll('.btn-boss-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (game.lockInput) return;
        if (btn.dataset.val === step.correct) {
          sound.playSuccess();
          btn.classList.add('is-correct');
          stepIdx++;
          if (stepIdx >= challenge.steps.length) {
            game.lockInput = true;
            setTimeout(() => game.handleCorrect(), 320);
          } else {
            setTimeout(() => renderAlgoStep(), 320);
          }
        } else {
          btn.classList.add('is-wrong');
          game.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 400);
        }
      });
    });
  };

  renderAlgoStep();
}

export function renderWordMagnetsChallenge(game, stageEl, challenge) {
  const targetWords = [...challenge.words];
  const pool = targetWords.map((w, idx) => ({ id: idx, word: w })).sort(() => Math.random() - 0.5);
  const chosen = [];

  const renderMagnets = () => {
    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-magnets-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'WORD MAGNETS • UKŁADANIE ZDAŃ'}</div>
        ${game.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="magnets-answer-strip" id="magnets-answer-strip">
          ${chosen.length === 0
            ? '<span class="magnets-placeholder">Klikaj kolejne słowa poniżej, aby ułożyć zdanie...</span>'
            : chosen.map((item) => `<span class="magnet-chip is-placed">${item.word}</span>`).join(' ')}
        </div>
        <div class="magnets-pool-grid">
          ${pool.map((item) => {
            const isUsed = chosen.some((c) => c.id === item.id);
            return `
              <button type="button" class="magnet-chip-btn ${isUsed ? 'is-used' : ''}" data-id="${item.id}" ${isUsed ? 'disabled' : ''}>
                ${item.word}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    stageEl.querySelectorAll('.magnet-chip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (game.lockInput) return;
        const id = Number(btn.dataset.id);
        const item = pool.find((p) => p.id === id);
        if (!item) return;

        const expectedWord = targetWords[chosen.length];
        if (item.word === expectedWord) {
          sound.playStep();
          chosen.push(item);
          if (chosen.length === targetWords.length) {
            game.lockInput = true;
            renderMagnets();
            setTimeout(() => game.handleCorrect(), 350);
          } else {
            renderMagnets();
          }
        } else {
          btn.classList.add('is-wrong');
          game.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 400);
        }
      });
    });
  };

  renderMagnets();
}

export function renderTextArchitectChallenge(game, stageEl, challenge) {
  const shuffled = [...challenge.blocks].sort(() => Math.random() - 0.5);
  const placedIds = [];

  const renderArchitect = () => {
    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-architect-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'ARCHITEKT TEKSTU • KOMPOZYCJA WYPOWIEDZI'}</div>
        ${game.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt} (Krok ${placedIds.length + 1}/${challenge.correctOrder.length})</h3>
        <div class="architect-built-list">
          ${placedIds.map((id) => {
            const b = challenge.blocks.find((x) => x.id === id);
            return `<div class="arch-placed-block"><strong>✅ ${b.label}:</strong> ${b.text}</div>`;
          }).join('')}
        </div>
        <div class="architect-choices-list">
          ${shuffled.filter((b) => !placedIds.includes(b.id)).map((b) => `
            <button type="button" class="btn-arch-block" data-id="${b.id}">
              <span class="arch-label">${b.label}</span>
              <span class="arch-text">${b.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    stageEl.querySelectorAll('.btn-arch-block').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (game.lockInput) return;
        const id = btn.dataset.id;
        const expectedId = challenge.correctOrder[placedIds.length];
        if (id === expectedId) {
          sound.playSuccess();
          placedIds.push(id);
          if (placedIds.length === challenge.correctOrder.length) {
            game.lockInput = true;
            renderArchitect();
            setTimeout(() => game.handleCorrect(), 400);
          } else {
            renderArchitect();
          }
        } else {
          btn.classList.add('is-wrong');
          game.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 400);
        }
      });
    });
  };

  renderArchitect();
}

export function renderReadingTFChallenge(game, stageEl, challenge) {
  let tfIdx = 0;

  const renderReadingPhase = () => {
    const isMotifPhase = tfIdx >= challenge.statements.length;
    const currentStmt = !isMotifPhase ? challenge.statements[tfIdx] : null;

    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-reading-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'DETEKTYW LEKTUR CKE • PRAWDA / FAŁSZ'}</div>
        ${game.renderTheoryHeader(challenge)}
        <div class="reading-excerpt-box">
          <div class="reb-title">📜 ${challenge.excerptTitle}</div>
          <blockquote class="reb-quote">${challenge.excerptText}</blockquote>
        </div>

        ${!isMotifPhase ? `
          <h3 class="boss-question-prompt boss-q-prompt">${currentStmt.text}</h3>
          <div class="reading-tf-buttons">
            <button type="button" class="btn-tf-choice btn-tf-true" data-tf="true">✅ PRAWDA (P)</button>
            <button type="button" class="btn-tf-choice btn-tf-false" data-tf="false">❌ FAŁSZ (F)</button>
          </div>
        ` : (() => {
          this._shuffledMotifOpts = (challenge.motifQuestion.options || []).map((opt, i) => ({ ...opt, origIdx: i })).sort(() => Math.random() - 0.5);
          return `
          <h3 class="boss-question-prompt boss-q-prompt">${challenge.motifQuestion.prompt}</h3>
          <div class="boss-options-grid boss-quiz-options">
            ${this._shuffledMotifOpts.map((opt, idx) => `
              <button type="button" class="btn-boss-opt" data-idx="${idx}">
                <span class="bbo-bullet">${['A', 'B', 'C', 'D'][idx] || ''}</span>
                <span class="bbo-text">${opt.text}</span>
              </button>
            `).join('')}
          </div>
        `;
        })()}
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    if (!isMotifPhase) {
      stageEl.querySelectorAll('.btn-tf-choice').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (game.lockInput) return;
          const chosenBool = btn.dataset.tf === 'true';
          if (chosenBool === currentStmt.isTrue) {
            sound.playSuccess();
            btn.classList.add('is-correct');
            tfIdx++;
            setTimeout(() => renderReadingPhase(), 320);
          } else {
            btn.classList.add('is-wrong');
            game.handleWrong();
            setTimeout(() => btn.classList.remove('is-wrong'), 400);
          }
        });
      });
    } else {
      stageEl.querySelectorAll('.btn-boss-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (game.lockInput) return;
          const opt = this._shuffledMotifOpts ? this._shuffledMotifOpts[Number(btn.dataset.idx)] : challenge.motifQuestion.options[Number(btn.dataset.idx)];
          if (opt && opt.correct) {
            game.lockInput = true;
            btn.classList.add('is-correct');
            game.handleCorrect();
          } else {
            btn.classList.add('is-wrong');
            game.handleWrong();
            setTimeout(() => btn.classList.remove('is-wrong'), 400);
          }
        });
      });
    }
  };

  renderReadingPhase();
}

export function renderSwipeFactOpinionChallenge(game, stageEl, challenge) {
  let cardIdx = 0;

  const renderSwipeCard = () => {
    const card = challenge.cards[cardIdx];
    stageEl.innerHTML = `
      <div class="boss-card-challenge boss-swipe-card">
        <div class="boss-challenge-badge boss-round-tag">${challenge.title || 'SWIPE • FAKT CZY OPINIA?'} (${cardIdx + 1}/${challenge.cards.length})</div>
        ${game.renderTheoryHeader(challenge)}
        <h3 class="boss-question-prompt boss-q-prompt">${challenge.prompt}</h3>
        <div class="swipe-card-deck" id="swipe-card-active">
          <p class="swipe-card-text">${card.text}</p>
          <div class="swipe-card-feedback hidden" id="swipe-feedback"></div>
        </div>
        <div class="swipe-actions-row">
          <button type="button" class="btn-swipe-choice btn-swipe-left" data-side="left">${challenge.leftLabel || '⬅️ FAKT'}</button>
          <button type="button" class="btn-swipe-choice btn-swipe-right" data-side="right">${challenge.rightLabel || 'OPINIA ➡️'}</button>
        </div>
      </div>
    `;

    game.bindTheoryToggle(stageEl);

    stageEl.querySelectorAll('.btn-swipe-choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (game.lockInput) return;
        const side = btn.dataset.side;
        const fb = stageEl.querySelector('#swipe-feedback');
        if (side === card.correctSide) {
          sound.playSuccess();
          btn.classList.add('is-correct');
          if (fb) {
            fb.classList.remove('hidden');
            fb.textContent = `✅ ${card.explanation}`;
          }
          cardIdx++;
          if (cardIdx >= challenge.cards.length) {
            game.lockInput = true;
            setTimeout(() => game.handleCorrect(), 550);
          } else {
            setTimeout(() => renderSwipeCard(), 550);
          }
        } else {
          btn.classList.add('is-wrong');
          if (fb) {
            fb.classList.remove('hidden');
            fb.textContent = `❌ ${card.explanation}`;
          }
          game.handleWrong();
          setTimeout(() => btn.classList.remove('is-wrong'), 450);
        }
      });
    });
  };

  renderSwipeCard();
}
