const fs = require('fs');

console.log('Writing comprehensive hero curriculum encounters...');

const code = `// Dedykowane zestawy pytań i wyzwań dla 6 Bohaterów (Wojownik, Złodziej, Robot, Wynalazca, Wiedźma, Błazen)
// 6 pełnych, unikalnych scenariuszy dla KAŻDEJ postaci (łącznie 36 scenariuszy na postać przeciwnika),
// 10x powiększone pule słów i anagramów, ściśle według podstawy programowej klas 4-8 i egzaminu CKE.

export const HERO_THEMES_INFO = {
  warrior: {
    namePl: 'Wojownik',
    focusPl: 'Sport, determinacja, fair play, tryb rozkazujący i odwaga w lekturach'
  },
  thief: {
    namePl: 'Złodziej / Spryciarz',
    focusPl: 'Demaskowanie pułapek językowych (pleonazmy), asertywność i bezpieczeństwo w sieci'
  },
  robot: {
    namePl: 'Robot',
    focusPl: 'Logika składni, bezbłędna interpunkcja, relacje przyczyna-skutek i styl oficjalny'
  },
  inventor: {
    namePl: 'Wynalazca',
    focusPl: 'Słowotwórstwo (wyrazy złożone), instrukcje i procedury krok po kroku oraz tryb przypuszczający'
  },
  witch: {
    namePl: 'Wiedźma / Czarodziejka',
    focusPl: 'Empatia, środki stylistyczne (metafory, personifikacje), poezja i motywy lektur'
  },
  jester: {
    namePl: 'Błazen',
    focusPl: 'Humor, gry słowne, kultura żartu vs hejt, frazeologizmy i scenki komediowe'
  }
};
`;

fs.writeFileSync('src/data/heroCurriculumEncounters.js', code, 'utf8');
console.log('Base heroCurriculumEncounters.js initialized.');
