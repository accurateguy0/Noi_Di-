// Inteligentny preloader zasobów (obrazy i dźwięki) dla natychmiastowego renderowania na GitHub Pages
import { resolveAsset } from '../ui/CharacterSelectModal.js';
import { sound } from '../audio/sound.js';

const decodedImages = new Set();
const pendingImages = new Map();

/**
 * Preloaduje i dekoduje obraz w pamięci podręcznej przeglądarki
 * Wykorzystuje img.decode() w wątku roboczym przeglądarki (zero zacięć UI)
 */
export function preloadImage(src) {
  if (!src) return Promise.resolve(null);
  const resolved = resolveAsset(src);
  if (decodedImages.has(resolved)) return Promise.resolve(resolved);
  if (pendingImages.has(resolved)) return pendingImages.get(resolved);

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.loading = 'eager';

    const onFinish = () => {
      decodedImages.add(resolved);
      pendingImages.delete(resolved);
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {}).finally(() => resolve(resolved));
      } else {
        resolve(resolved);
      }
    };

    img.onload = onFinish;
    img.onerror = () => {
      pendingImages.delete(resolved);
      resolve(null);
    };
    img.src = resolved;
  });

  pendingImages.set(resolved, promise);
  return promise;
}

/**
 * Preloaduje listę obrazów w partiach z limitem współbieżności (nie zatyka kolejki HTTP)
 */
export function preloadImages(srcList = [], concurrency = 4) {
  const list = [...new Set(srcList.filter(Boolean))];
  if (list.length === 0) return Promise.resolve([]);

  return new Promise((resolve) => {
    let index = 0;
    let running = 0;
    const results = [];

    const next = () => {
      if (index >= list.length && running === 0) {
        return resolve(results);
      }
      while (running < concurrency && index < list.length) {
        const item = list[index++];
        running++;
        preloadImage(item).then((res) => {
          results.push(res);
          running--;
          next();
        });
      }
    };
    next();
  });
}

/**
 * Preloaduje wszystkie kluczowe assety dla planszy i areny (tła, ikony, wrogowie, audio)
 */
export function preloadFloorAssets(nodes = [], floorNumber = 1, player = null) {
  const images = [
    './assets/apple.png',
    './assets/skrzynka.png',
    './assets/kramik.png',
    './assets/tla/kramik_background.png'
  ];

  if (player?.avatar) {
    images.push(player.avatar);
  } else {
    images.push('./assets/Warrior.png');
  }

  // Tła areny i planszy zależne od piętra
  const f = Number(floorNumber) || 1;
  if (f === 3) {
    images.push('./assets/tla/gabinet_arena.png', './assets/tla/gabinet.png');
  } else if (f === 5 || f === 6) {
    images.push('./assets/tla/sala_gimnastyczna_arena.jpg', './assets/tla/sala_gimnastyczna.jpg', './assets/drzwi.png');
  } else {
    images.push('./assets/tla/klasa_arena.png', './assets/tla/klasa.png', './assets/schody.png');
  }

  // Ikony przeciwników z wygenerowanych węzłów
  if (Array.isArray(nodes)) {
    nodes.forEach(node => {
      if (node.icon) images.push(node.icon);
      if (node.opponentAvatar) images.push(node.opponentAvatar);
      if (node.avatar) images.push(node.avatar);
    });
  }

  // Uruchomienie preloading w czasie bezczynności wątku przeglądarki
  const runPreload = () => {
    preloadImages(images, 4);

    // Wstępne zbuforowanie dźwięków przeciwników z bieżącej planszy
    if (sound && typeof sound.loadBuffer === 'function' && Array.isArray(nodes)) {
      nodes.forEach(node => {
        const name = (node.enemyName || node.titlePl || '').toLowerCase();
        if (name.includes('szczeniak')) {
          sound.loadBuffer('szczeniak_atak.ogg');
          sound.loadBuffer('szczeniak_obrona.ogg');
        } else if (name.includes('koleżank') || name.includes('kolezank')) {
          sound.loadBuffer('kolezanka_atak.ogg');
          sound.loadBuffer('kolezanka_obrona.ogg');
        } else if (name.includes('kałamarnic') || name.includes('kalamarnic')) {
          sound.loadBuffer('mala_kalamarnica_dzwiek.ogg');
        } else if (name.includes('zając') || name.includes('zajac')) {
          sound.loadBuffer('kroliczek_atak.ogg');
          sound.loadBuffer('kroliczek_obrona.ogg');
        } else if (name.includes('żaba') || name.includes('zaba')) {
          sound.loadBuffer('zaba_atak.ogg');
          sound.loadBuffer('zaba_obrona.ogg');
        } else if (name.includes('jeż') || name.includes('jez')) {
          sound.loadBuffer('jezyk_atak.ogg');
          sound.loadBuffer('jezyk_obrona.ogg');
        } else if (name.includes('ptak')) {
          sound.loadBuffer('glosny_ptak_dzwiek_1.ogg');
        } else if (name.includes('myśli') || name.includes('mysli')) {
          sound.loadBuffer('mysli_dzwiek_1.ogg');
        } else if (name.includes('kot') || name.includes('bolo')) {
          sound.loadBuffer('kot_dzwiek.ogg');
        } else if (name.includes('nauczyciel')) {
          sound.loadBuffer('Nauczycielka_atak.ogg');
          sound.loadBuffer('nauczycielka_obrona.ogg');
        }
      });
    }
  };

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(runPreload, { timeout: 1500 });
  } else {
    setTimeout(runPreload, 250);
  }
}
