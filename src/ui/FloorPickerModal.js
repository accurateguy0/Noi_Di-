// Modal wyboru planszy (tryb testowy / swobodny wybór poziomu)
import { sound } from '../audio/sound.js';
import { playJaggedCurtainWipe } from './victoryScreen.js';
import { getStoryEpisode } from '../data/storyData.js';
import { episodeManager } from '../data/episodeManager.js';

export function openFloorPickerModal(app) {
  app.closeModal();
  const modalMount = document.getElementById('modal-mount');
  if (!modalMount) return;
  modalMount.classList.remove('hidden');

  const currentHeroId = app.player?.heroId || 'warrior';
  const currentPip = app.currentEpisode?.pip || episodeManager.getSelectedEpisode(currentHeroId) || 1;

  const episodeList = [
    { pip: 1, tag: 'Epizod 1: Start A0/A1', desc: 'Adaptacja szkolna, powitania, polecenia TPR i oswajanie przestrzeni' },
    { pip: 2, tag: 'Epizod 2: Klasa 4', desc: '„Zamieńmy słowo 4” – Rzeczownik, czasownik, przymiotnik, fleksja, ortografia' },
    { pip: 3, tag: 'Epizod 3: Klasa 5', desc: '„Zamieńmy słowo 5” – Przysłówek, liczebnik, przyimek, składnia zdania pojedynczego' },
    { pip: 4, tag: 'Epizod 4: Klasa 6', desc: '„Zamieńmy słowo 6” – Zaimek, spójnik, wykrzyknik, partykuła, słowotwórstwo' },
    { pip: 5, tag: 'Epizod 5: Klasa 7', desc: 'Imiesłowy, zdania złożone, stylistyka, retoryka i środki stylistyczne' },
    { pip: 6, tag: 'Epizod 6: Klasa 8', desc: 'Egzamin Ósmoklasisty CKE, składnia wielokrotnie złożona, normy językowe' },
    { pip: 7, tag: 'Epizod 7: Lektury CKE I', desc: 'Kanon lektur CKE I: Balladyna, Dziady cz. II, Mały Książę, Kamienie na szaniec, Opowieść wigilijna' },
    { pip: 8, tag: 'Epizod 8: Formy Wypowiedzi II', desc: 'Wielkie formy egzaminacyjne: Rozprawka argumentacyjna, opowiadanie twórcze, dedykacja, zaproszenie' }
  ];

  const floors = [
    {
      category: '🎓 Wybór Epizodu i Programu Szkolnego (Epizody 1–8 / Klasy 4–8 & CKE)',
      list: episodeList.map(ep => {
        const epStory = getStoryEpisode(currentHeroId, ep.pip);
        return {
          id: `ep_${ep.pip}`,
          pip: ep.pip,
          name: `${ep.tag} ${currentPip === ep.pip ? '✓ (Aktywny)' : ''}`,
          desc: `Boss: ${epStory.bossId ? epStory.bossId.toUpperCase() : 'Główny'} • ${ep.desc}`
        };
      })
    },
    {
      category: '🗺️ Piętra Szkolne (Plansze 0–6 biegu w wybranym Epizodzie)',
      list: [
        { id: 0, name: 'Poziom 0: Szatnia (Prolog i Rozgrzewka)', desc: 'Kotek Pomocnik, unikalna szafka szkolna i nowe słowa (unikalne dla postaci i epizodu)' },
        { id: 1, name: 'Plansza 1: Korytarz i Klasa', desc: 'Start wędrówki [11–19 pól izometrycznych, losowy układ]' },
        { id: 2, name: 'Plansza 2: Ławka Szkolna & Piórnik', desc: 'Nowe wyzwania i słownictwo [11–19 pól]' },
        { id: 3, name: 'Plansza 3: Gabinet & Budynek', desc: 'Wyzwania sytuacyjne i wiedza językowa [11–19 pól]' },
        { id: 4, name: 'Plansza 4: Stołówka i Relacje', desc: 'Dialogi, asertywność i komunikacja [11–19 pól]' },
        { id: 5, name: 'Plansza 5: Boisko & Sala Treningowa', desc: 'Zbiórka przed finałem piętra [11–19 pól]' },
        { id: 6, name: 'Plansza 6: Finał Piętra (Boss Epizodu)', desc: 'Starcie z Bossem przypisanym do aktualnego Epizodu' }
      ]
    },
    {
      category: 'Nowe Minigry, Lektury CKE i Formy Wypowiedzi (z Kartą Teorii 📖)',
      list: [
        { id: 'boss_nowe_minigry', name: '🎮 WSZYSTKIE 7 NOWYCH MINIGIER + KARTY TEORII (Showcase)', desc: 'Złodziej Końcówek, Algorytm Zdania, Word Magnets, Group Sort, Swipe Fakt/Opinia, Architekt Tekstu, Detektyw Lektur' },
        { id: 'boss_algorytm_zdania', name: '🧩 ALGORYTM ZDANIA, WORD MAGNETS & ZŁODZIEJ KOŃCÓWEK', desc: 'Podmiot, orzeczenie, przecinki w zdaniach złożonych, końcówki fleksyjne i ortografia' },
        { id: 'boss_swipe_fakt_opinia', name: '📱 TINDER / SWIPE: FAKT CZY OPINIA?', desc: 'Przesuwaj wypowiedzi w lewo (Fakt) lub prawo (Opinia) z natychmiastowym wyjaśnieniem!' },
        { id: 'boss_lektury_1', name: '📚 EPIZOD 7: Lektury obowiązkowe I – Bohaterowie, fabuła i cytaty', desc: 'Balladyna, Dziady cz. II, Mały Książę, Kamienie na szaniec, Opowieść wigilijna, Pan Tadeusz' },
        { id: 'boss_lektury_2', name: '🎭 EPIZOD 8: Lektury obowiązkowe II – Motywy, symbole i plakaty', desc: 'Detektyw Lektur CKE (Prawda/Fałsz), motyw winy i kary, przemiany, przyjaźni i plakaty' },
        { id: 'boss_formy_wypowiedzi', name: '🏗️ ARCHITEKT TEKSTU: Dedykacja, Zaproszenie, Ogłoszenie, Opowiadanie i Rozprawka', desc: 'Układanie bloków kompozycyjnych z „Zamieńmy słowo 4” oraz wielkich form egzaminacyjnych kl. 8' }
      ]
    },
    {
      category: 'Starcia z Bossami (wszystkie 10 Bossów)',
      list: [
        { id: 'boss_szkieleton', name: 'BOSS: Szkieleton (50 HP, 3 DMG)', desc: 'Sala biologiczna – kości, części ciała i zmysły' },
        { id: 'boss_profesor', name: 'BOSS: Profesor (56 HP, 2 DMG)', desc: 'Wiedza tajemna, definicje, przeciwieństwa i liczby' },
        { id: 'boss_pilkarz', name: 'BOSS: Piłkarz (61 HP, 5 DMG)', desc: 'Wielki mecz na boisku szkolnym' },
        { id: 'boss_lekarz', name: 'BOSS: Lekarz (62 HP, 4 DMG)', desc: 'Centrum zdrowia, objawy i higiena' },
        { id: 'boss_smok', name: 'BOSS: Smok (68 HP, 4 DMG)', desc: 'Jedyny Smok z podziemi szkoły' },
        { id: 'boss_nauczycielka', name: 'BOSS: Nauczycielka (70 HP, 2 DMG)', desc: 'Egzamin szkolny z gramatyki i poleceń' },
        { id: 'boss_cwaniak', name: 'BOSS: Cwaniak (70 HP, 3 DMG)', desc: 'Mistrz Miasta, riposty i trudne zwroty' },
        { id: 'boss_dyrektorka', name: 'BOSS: Dyrektorka (70 HP, 5 DMG)', desc: 'Gabinet dyrektora – język oficjalny i regulamin' },
        { id: 'boss_silaczka', name: 'BOSS: Siłaczka (74 HP, 4 DMG)', desc: 'Szkolna siłownia – rozkazy, sport i liczebniki' },
        { id: 'boss_instagramerka', name: 'BOSS: Instagramerka (77 HP, 5 DMG)', desc: 'Czarodziejka trendów, virali i social mediów' }
      ]
    }
  ];

  modalMount.innerHTML = `
    <div class="dicey-modal-backdrop" style="z-index: 100005; position: fixed; inset: 0;">
      <div class="floor-picker-modal">
        <div class="fpm-header">
          <h2>Wybierz planszę lub epizod (Tryb testowy)</h2>
          <button class="fpm-close-btn" id="fpm-close-btn" title="Zamknij">✕</button>
        </div>
        <div class="fpm-body">
          ${floors.map(cat => `
            <div class="fpm-category">
              <div class="fpm-category-title">${cat.category}</div>
              <div class="fpm-grid">
                ${cat.list.map(f => `
                  <button type="button" class="btn-floor-card ${String(app.currentFloor) === String(f.id) ? 'is-current' : ''}" data-floor="${f.id}" ${f.pip ? `data-pip="${f.pip}"` : ''}>
                    <span class="bfc-title">${f.name}</span>
                    <span class="bfc-sub">${f.desc}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modalMount.querySelector('#fpm-close-btn')?.addEventListener('click', () => {
    app.closeModal();
  });

  let floorSwitching = false;
  modalMount.querySelectorAll('.btn-floor-card').forEach(btn => {
    btn.addEventListener('click', () => {
      if (floorSwitching) return;
      floorSwitching = true;
      const floorId = btn.dataset.floor;
      const pip = btn.dataset.pip;

      if (pip) {
        sound.playFanfare();
        playJaggedCurtainWipe(() => {
          app.closeModal();
          document.getElementById('character-select-screen')?.classList.add('hidden');
          if (app.titleScreen) app.titleScreen.hide();
          const p = Number(pip);
          app.currentEpisode = getStoryEpisode(currentHeroId, p);
          episodeManager.setSelectedEpisode(currentHeroId, p);
          app.loadFloor(0, { fromTestPicker: true });
          app.renderBoard();
          app.updateHUD();
          app.setBoardHint(`Wybrano Epizod ${p}: ${app.currentEpisode.title} (${app.currentEpisode.difficultyTag})`);
        });
        return;
      }

      if (String(floorId).startsWith('boss_')) {
        sound.playFanfare();
        playJaggedCurtainWipe(() => {
          app.closeModal();
          document.getElementById('character-select-screen')?.classList.add('hidden');
          if (app.titleScreen) app.titleScreen.hide();
          app.launchBossById(floorId, `test_${floorId}`);
        });
        return;
      }

      const parsedFloor = isNaN(Number(floorId)) ? floorId : Number(floorId);
      sound.playFanfare();
      playJaggedCurtainWipe(() => {
        app.closeModal();
        document.getElementById('character-select-screen')?.classList.add('hidden');
        if (app.titleScreen) app.titleScreen.hide();
        app.loadFloor(parsedFloor, { fromTestPicker: true });
        app.renderBoard();
        app.updateHUD();
        const floorTitle = btn.querySelector('.bfc-title')?.textContent;
        if (floorTitle) {
          app.setBoardHint(`Przełączono na planszę: ${floorTitle}`);
        }
      });
    });
  });
}
