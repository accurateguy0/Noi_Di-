// Głośny Ptak - Papuga Korytarzowa, echo szkolnych plotek, rozpraszanie i dezinformacja
// 44 HP, bije po 5 HP. Prawda czy Fałsz: weryfikacja faktów językowych i zasad etykiety (8 zestawów po 20 pytań = 160 pytań).

import { HERO_GLOSNY_PTAK_SETS } from '../heroCurriculumEncounters.js';

export const GLOSNY_PTAK_SETS = [
  {
    "titlePl": "Głośny Ptak: Korytarz i Klasa",
    "subtitlePl": "Intruzi w szkolnej codzienności",
    "descriptionPl": "Ptak skrzeczy i miesza słowa na korytarzu! Kliknij słowo, które NIE pasuje do reszty.",
    "questions": [
      {
        "promptPl": "Kategoria: Przybory w piórniku. Które słowo jest intruzem?",
        "options": [
          "Ołówek",
          "Długopis",
          "Kanapka",
          "Gumka"
        ],
        "correctWord": "Kanapka"
      },
      {
        "promptPl": "Kategoria: Zwroty grzecznościowe. Które słowo jest intruzem?",
        "options": [
          "Dzień dobry",
          "Przepraszam",
          "Dziękuję",
          "Telewizor"
        ],
        "correctWord": "Telewizor"
      },
      {
        "promptPl": "Kategoria: Pomieszczenia szkolne. Które słowo jest intruzem?",
        "options": [
          "Szatnia",
          "Klasa",
          "Toaleta",
          "Książka"
        ],
        "correctWord": "Książka"
      },
      {
        "promptPl": "Kategoria: Części ciała. Które słowo jest intruzem?",
        "options": [
          "Głowa",
          "Ręka",
          "Plecak",
          "Brzuch"
        ],
        "correctWord": "Plecak"
      },
      {
        "promptPl": "Kategoria: Dni tygodnia. Które słowo jest intruzem?",
        "options": [
          "Poniedziałek",
          "Środa",
          "Piątek",
          "Wrzesień"
        ],
        "correctWord": "Wrzesień"
      },
      {
        "promptPl": "Kategoria: Przedmioty szkolne. Które słowo jest intruzem?",
        "options": [
          "Matematyka",
          "Historia",
          "Język polski",
          "Drożdżówka"
        ],
        "correctWord": "Drożdżówka"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Części Mowy",
    "subtitlePl": "Gramatyczni intruzi w zdaniach",
    "descriptionPl": "Ptak głośno myli części mowy! Wskaż wyraz, który gramatycznie nie pasuje do pozostałych.",
    "questions": [
      {
        "promptPl": "Kategoria: Rzeczowniki (kto? co?). Wskaż intruza:",
        "options": [
          "Szkoła",
          "Uczeń",
          "Biegać",
          "Zeszyt"
        ],
        "correctWord": "Biegać"
      },
      {
        "promptPl": "Kategoria: Czasowniki (co robi? co się z nim dzieje?). Wskaż intruza:",
        "options": [
          "Czyta",
          "Pisze",
          "Rysuje",
          "Czerwony"
        ],
        "correctWord": "Czerwony"
      },
      {
        "promptPl": "Kategoria: Przymiotniki (jaki? jaka? jakie?). Wskaż intruza:",
        "options": [
          "Mądry",
          "Ciekawa",
          "Wesołe",
          "Dzisiaj"
        ],
        "correctWord": "Dzisiaj"
      },
      {
        "promptPl": "Kategoria: Przysłówki (jak? gdzie? kiedy?). Wskaż intruza:",
        "options": [
          "Szybko",
          "Głośno",
          "Wczoraj",
          "Drzewo"
        ],
        "correctWord": "Drzewo"
      },
      {
        "promptPl": "Kategoria: Liczebniki (ile? który z kolei?). Wskaż intruza:",
        "options": [
          "Pierwszy",
          "Pięć",
          "Trzecia",
          "Ładnie"
        ],
        "correctWord": "Ładnie"
      },
      {
        "promptPl": "Kategoria: Zaimki osobowe (zastępują rzeczownik). Wskaż intruza:",
        "options": [
          "Ja",
          "Ty",
          "Oni",
          "Klasa"
        ],
        "correctWord": "Klasa"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Lektury Szkolne CKE",
    "subtitlePl": "Intruzi z kanonu lektur",
    "descriptionPl": "Ptak pomieszał bohaterów i wątki z lektur! Wskaż postać lub element niepasujący do grupy.",
    "questions": [
      {
        "promptPl": "Kategoria: Bohaterowie „Kamieni na szaniec”. Kto NIE należy do tej grupy?",
        "options": [
          "Rudy",
          "Zośka",
          "Alek",
          "Ebenezer Scrooge"
        ],
        "correctWord": "Ebenezer Scrooge"
      },
      {
        "promptPl": "Kategoria: Postacie z dramatu „Balladyna”. Kto NIE występuje w tym utworze?",
        "options": [
          "Alina",
          "Kirkor",
          "Goplana",
          "Pan Kleks"
        ],
        "correctWord": "Pan Kleks"
      },
      {
        "promptPl": "Kategoria: Postacie spotkane przez Małego Księcia. Kto NIE należy do tej lektury?",
        "options": [
          "Król",
          "Bankier",
          "Latarnik",
          "Cześnik"
        ],
        "correctWord": "Cześnik"
      },
      {
        "promptPl": "Kategoria: Duchy z „Opowieści wigilijnej”. Który duch NIE odwiedził Scrooge’a?",
        "options": [
          "Duch Minionych Świąt",
          "Duch Teraźniejszych Świąt",
          "Duch Przyszłych Świąt",
          "Duch Karkonoskich Gór"
        ],
        "correctWord": "Duch Gór"
      },
      {
        "promptPl": "Kategoria: Zjawy z II części „Dziadów”. Kto NIE pojawia się w kaplicy?",
        "options": [
          "Józio i Rózia",
          "Widmo Złego Pana",
          "Zosia pasterka",
          "Hobbit"
        ],
        "correctWord": "Hobbit"
      },
      {
        "promptPl": "Kategoria: Bohaterowie „Zemsty” Aleksandra Fredry. Kto jest intruzem?",
        "options": [
          "Cześnik Raptusiewicz",
          "Rejent Milczek",
          "Papkin",
          "Królowa Śniegu"
        ],
        "correctWord": "Królowa Śniegu"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Ortografia i Styl",
    "subtitlePl": "Zasady pisowni i formy wypowiedzi",
    "descriptionPl": "Ptak skrzeczy i robi błędy ortograficzne! Wybierz wyraz, który nie pasuje do reguły.",
    "questions": [
      {
        "promptPl": "Kategoria: Wyrazy z „ó” wymiennym na o/e/a. Wskaż intruza (niewymienne ó):",
        "options": [
          "Noga - nóżka",
          "Woda - wódka",
          "Koło - kółko",
          "Córka"
        ],
        "correctWord": "Córka"
      },
      {
        "promptPl": "Kategoria: Wyrazy z „rz” wymiennym na „r”. Wskaż intruza (rz po spółgłosce):",
        "options": [
          "Rowerzysta - rower",
          "Lekarz - lekarski",
          "Dworzec - dworzec",
          "Krzak"
        ],
        "correctWord": "Krzak"
      },
      {
        "promptPl": "Kategoria: Oficjalne formy użytkowe. Który tekst NIE jest formą użytkową?",
        "options": [
          "Podanie",
          "List motywacyjny",
          "Życiorys (CV)",
          "Baśń o smoku"
        ],
        "correctWord": "Baśń o smoku"
      },
      {
        "promptPl": "Kategoria: Środki stylistyczne w poezji. Wskaż intruza:",
        "options": [
          "Metafora",
          "Epitet",
          "Porównanie",
          "Mianownik"
        ],
        "correctWord": "Mianownik"
      },
      {
        "promptPl": "Kategoria: Rodzaje literackie (trzy główne). Co NIE jest rodzajem literackim?",
        "options": [
          "Epika",
          "Liryka",
          "Dramat",
          "Czasownik"
        ],
        "correctWord": "Czasownik"
      },
      {
        "promptPl": "Kategoria: Wyrazy bliskoznaczne do „piękny”. Wskaż intruza (antonim):",
        "options": [
          "Uroczy",
          "Wspaniały",
          "Śliczny",
          "Brzydki"
        ],
        "correctWord": "Brzydki"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Składnia Zdania",
    "subtitlePl": "Części zdania i relacje składniowe",
    "descriptionPl": "Ptak miesza pojęcia składniowe! Wskaż element, który gramatycznie nie pasuje do kategorii.",
    "questions": [
      {
        "promptPl": "Kategoria: Części zdania (funkcje w zdaniu). Co jest częścią MOWY, a nie zdania?",
        "options": [
          "Podmiot",
          "Orzeczenie",
          "Przydawka",
          "Czasownik"
        ],
        "correctWord": "Czasownik"
      },
      {
        "promptPl": "Kategoria: Typy podmiotu w zdaniu. Wskaż intruza:",
        "options": [
          "Podmiot gramatyczny",
          "Podmiot logiczny",
          "Podmiot domyślny",
          "Podmiot przymiotnikowy"
        ],
        "correctWord": "Podmiot przymiotnikowy"
      },
      {
        "promptPl": "Kategoria: Rodzaje okoliczników. Wskaż intruza (to nie jest okolicznik):",
        "options": [
          "Okolicznik czasu",
          "Okolicznik miejsca",
          "Okolicznik sposobu",
          "Okolicznik rzeczownikowy"
        ],
        "correctWord": "Okolicznik rzeczownikowy"
      },
      {
        "promptPl": "Kategoria: Zdania złożone podrzędnie. Wskaż typ zdania, który NIE istnieje:",
        "options": [
          "Zdanie podmiotowe",
          "Zdanie przydawkowe",
          "Zdanie dopełnieniowe",
          "Zdanie wykrzyknikowe"
        ],
        "correctWord": "Zdanie wykrzyknikowe"
      },
      {
        "promptPl": "Kategoria: Spójniki wymagające przecinka w zdaniu złożonym. Przed którym NIE stawiamy przecinka?",
        "options": [
          "który",
          "ponieważ",
          "że",
          "oraz"
        ],
        "correctWord": "oraz"
      },
      {
        "promptPl": "Kategoria: Orzeczenia w zdaniu pojedynczym. Wskaż intruza:",
        "options": [
          "Orzeczenie czasownikowe",
          "Orzeczenie imienne",
          "Łącznik i orzecznik",
          "Orzeczenie przydawkowe"
        ],
        "correctWord": "Orzeczenie przydawkowe"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Pułapki Językowe i Pleonazmy",
    "subtitlePl": "Błędy leksykalne i stylistyczne",
    "descriptionPl": "Ptak powtarza szkolne błędy językowe! Wskaż sformułowanie poprawne lub błędne zgodnie z pytaniem.",
    "questions": [
      {
        "promptPl": "Kategoria: Pleonazmy (masło maślane). Które wyrażenie NIE jest błędem masła maślanego?",
        "options": [
          "Cofać się w tył",
          "Akwen wodny",
          "Spadać w dół",
          "Czysta woda źródlana"
        ],
        "correctWord": "Czysta woda źródlana"
      },
      {
        "promptPl": "Kategoria: Błędne konstrukcje językowe. Który zwrot jest W PEŁNI POPRAWNY?",
        "options": [
          "W każdym bądź razie",
          "W cudzysłowiu",
          "Po najmniejszej linii oporu",
          "W każdym razie"
        ],
        "correctWord": "W każdym razie"
      },
      {
        "promptPl": "Kategoria: Błędy czasownikowe. Która forma jest POPRAWNĄ formą czasu przeszłego?",
        "options": [
          "Wziąść",
          "Poszłem",
          "Wymyśleć",
          "Wziąć"
        ],
        "correctWord": "Wziąć"
      },
      {
        "promptPl": "Kategoria: Ubieranie vs wkładanie. Wskaż poprawne zdanie:",
        "options": [
          "Ubrałem buty na nogi",
          "Ubrałem ciepłą czapkę",
          "Ubrałem spodnie dresowe",
          "Włożyłem ciepłą kurtkę"
        ],
        "correctWord": "Włożyłem ciepłą kurtkę"
      },
      {
        "promptPl": "Kategoria: Pleonazmy z czasem. Który zwrot jest błędem pleonastycznym?",
        "options": [
          "Okres czasu",
          "W zeszłym roku",
          "Za dwa tygodnie",
          "W poniedziałek rano"
        ],
        "correctWord": "Okres czasu"
      },
      {
        "promptPl": "Kategoria: Poprawne stopniowanie. Które słowo jest poprawnym stopniem wyższym od „zły”?",
        "options": [
          "Bardziej zły",
          "Zlejszy",
          "Gorszy",
          "Najgorszy"
        ],
        "correctWord": "Gorszy"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Słowotwórstwo",
    "subtitlePl": "Budowa wyrazu i rodzina słów",
    "descriptionPl": "Ptak bada budowę słów! Wskaż intruza w rodzinie wyrazów i formantach.",
    "questions": [
      {
        "promptPl": "Kategoria: Rodzina wyrazu „dom” (rdzeń dom-). Który wyraz NIE jest spokrewniony?",
        "options": [
          "Domek",
          "Domowy",
          "Domator",
          "Duma"
        ],
        "correctWord": "Duma"
      },
      {
        "promptPl": "Kategoria: Wyrazy z przedrostkiem (prefiksem). Wskaż wyraz BEZ przedrostka:",
        "options": [
          "Podpisać",
          "Przepisać",
          "Wypisać",
          "Pisarz"
        ],
        "correctWord": "Pisarz"
      },
      {
        "promptPl": "Kategoria: Wyrazy z przyrostkiem (sufiksem). Wskaż wyraz BEZ przyrostka:",
        "options": [
          "Nauczyciel",
          "Czytelnik",
          "Kotka",
          "Dom"
        ],
        "correctWord": "Dom"
      },
      {
        "promptPl": "Kategoria: Wyrazy złożone (złożenia ze spójką -o- lub -i-). Wskaż intruza:",
        "options": [
          "Wiarygodny",
          "Żywopłot",
          "Czarnoksiężnik",
          "Długopis"
        ],
        "correctWord": "Długopis"
      },
      {
        "promptPl": "Kategoria: Oboczności w rdzeniu (wymiana głosek). Wskaż parę z obocznością ó : o:",
        "options": [
          "Wóz - wozy",
          "Las - lesie",
          "Ręka - rączka",
          "Dzień - dni"
        ],
        "correctWord": "Wóz - wozy"
      },
      {
        "promptPl": "Kategoria: Skrótowce w języku polskim. Wskaż wyraz, który NIE jest skrótowcem:",
        "options": [
          "CKE",
          "MEN",
          "PKP",
          "Szkoła"
        ],
        "correctWord": "Szkoła"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  },
  {
    "titlePl": "Głośny Ptak: Gatunki Literackie",
    "subtitlePl": "Rozróżnianie form epiki, liryki i dramatu",
    "descriptionPl": "Ptak pomieszał gatunki i rodzaje literackie! Wskaż niepasujący element.",
    "questions": [
      {
        "promptPl": "Kategoria: Gatunki epiki (utwory narracyjne). Wskaż intruza (gatunek liryki):",
        "options": [
          "Powieść",
          "Opowiadanie",
          "Nowela",
          "Sonet"
        ],
        "correctWord": "Sonet"
      },
      {
        "promptPl": "Kategoria: Gatunki dramatu (przeznaczone do wystawienia na scenie). Wskaż intruza:",
        "options": [
          "Tragedia",
          "Komedia",
          "Dramat właściwy",
          "Baśń"
        ],
        "correctWord": "Baśń"
      },
      {
        "promptPl": "Kategoria: Gatunki liryki (wyrażające uczucia i refleksje). Wskaż intruza:",
        "options": [
          "Tren",
          "Hymn",
          "Pieśń",
          "Pamiętnik"
        ],
        "correctWord": "Pamiętnik"
      },
      {
        "promptPl": "Kategoria: Gatunki synkretyczne (łączące cechy epiki, liryki i dramatu). Wskaż wzorcowy przykład:",
        "options": [
          "Ballada (np. „Świtezianka”)",
          "Rozprawka naukowa",
          "Słownik ortograficzny",
          "Katalog biblioteczny"
        ],
        "correctWord": "Ballada (np. „Świtezianka”)"
      },
      {
        "promptPl": "Kategoria: Cechy bajki krasickiej. Która cecha NIE pasuje do bajki?",
        "options": [
          "Wyraźny morał i pouczenie",
          "Zwierzęta uosabiające ludzkie wady",
          "Krótka, zwięzła forma wierszowana",
          "Brak jakiegokolwiek przesłania"
        ],
        "correctWord": "Brak jakiegokolwiek przesłania"
      },
      {
        "promptPl": "Kategoria: Elementy tekstu dramatycznego. Wskaż element występujący TYLKO w dramacie:",
        "options": [
          "Didaskalia (wskazówki sceniczne)",
          "Narrator wszechwiedzący",
          "Rymy parzyste AABB",
          "Podział na tomy i pieśni"
        ],
        "correctWord": "Didaskalia (wskazówki sceniczne)"
      },
      {
        "promptPl": "W zdaniu: «Kiedy zadzwonił dzwonek, wszyscy weszli do klasy», pierwsze zdanie to zdanie podrzędne czasu.",
        "isTrue": true,
        "explanation": "PRAWDA! Odpowiada na pytanie: kiedy?"
      },
      {
        "promptPl": "Wyraz «hałas» piszemy przez «ch» na początku.",
        "isTrue": false,
        "explanation": "FAŁSZ! «Hałas» piszemy przez samo «h»."
      },
      {
        "promptPl": "W polszczyźnie akcent wyrazowy pada najczęściej na przedostatnią sylabę (paroksytoniczny).",
        "isTrue": true,
        "explanation": "PRAWDA! To podstawowa zasada akcentowania w języku polskim."
      },
      {
        "promptPl": "Słowa «matematyka», «fizyka», «muzyka» akcentujemy na trzecią sylabę od końca (proparoksytonicznie).",
        "isTrue": true,
        "explanation": "PRAWDA! Wyrazy pochodzenia greckiego na -yka/-ika mają akcent proparoksytoniczny."
      },
      {
        "promptPl": "W mowie potocznej dopuszczalne są wulgaryzmy w oficjalnym liście do dyrektora szkoły.",
        "isTrue": false,
        "explanation": "FAŁSZ! W korespondencji oficjalnej obowiązuje bezwzględna kultura i styl formalny."
      },
      {
        "promptPl": "Epitet to określenie przymiotnikowe dodające plastyczności opisywanemu rzeczownikowi.",
        "isTrue": true,
        "explanation": "PRAWDA! Np. «złote słońce», «bujna trawa»."
      },
      {
        "promptPl": "Onomatopeja to wyraz imitujący dźwięki natury lub otoczenia (np. szumieć, bzykać).",
        "isTrue": true,
        "explanation": "PRAWDA! To figura dźwiękonaśladowcza."
      },
      {
        "promptPl": "Wszystkie części mowy w języku polskim odmieniają się przez przypadki.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przysłówek, przyimek, spójnik, wykrzyknik i partykuła są nieodmienne."
      },
      {
        "promptPl": "Końcówkę «-om» piszemy w celowniku liczby mnogiej rzeczowników (np. chłopcom, książkom).",
        "isTrue": true,
        "explanation": "PRAWDA! Celownik l. mn. zawsze ma końcówkę «-om»."
      },
      {
        "promptPl": "Końcówkę «-ą» piszemy w narzędniku liczby pojedynczej rzeczowników żeńskich (np. z mamą, z książką).",
        "isTrue": true,
        "explanation": "PRAWDA! Narzędnik l. poj. r. żeńskiego ma końcówkę «-ą»."
      },
      {
        "promptPl": "«Quo vadis» to powieść historyczna Henryka Sienkiewicza nagrodzona literacką Nagrodą Nobla.",
        "isTrue": true,
        "explanation": "PRAWDA! Sienkiewicz otrzymał Nobla w 1905 roku."
      },
      {
        "promptPl": "Tytułowy Mały Książę mieszkał na Ziemi przez całe swoje życie.",
        "isTrue": false,
        "explanation": "FAŁSZ! Przybył z małej asteroidy B-612."
      },
      {
        "promptPl": "Jan Kochanowski pisał Treny po śmierci swojej ukochanej córeczki Urszulki.",
        "isTrue": true,
        "explanation": "PRAWDA! Cykl 19 Trenów to wyraz ojcowskiego żalu po stracie dziecka."
      },
      {
        "promptPl": "Zdanie: «Pies głośno szczeka na podwórku» zawiera orzeczenie imienne.",
        "isTrue": false,
        "explanation": "FAŁSZ! Zawiera orzeczenie czasownikowe («szczeka»)."
      }
    ]
  }
];

export function getGlosnyPtakEncounter(index = null, heroId = null) {
  const hid = heroId ? String(heroId).toLowerCase() : null;
  if (hid && HERO_GLOSNY_PTAK_SETS[hid]) {
    const sets = Array.isArray(HERO_GLOSNY_PTAK_SETS[hid]) ? HERO_GLOSNY_PTAK_SETS[hid] : [HERO_GLOSNY_PTAK_SETS[hid]];
    const selectedIdx = (index !== null && index >= 0 && index < sets.length)
      ? index
      : Math.floor(Math.random() * sets.length);
    const data = sets[selectedIdx];
    return {
      type: 'bird_tf',
      titlePl: data.titlePl,
      subtitlePl: data.subtitlePl,
      icon: './assets/Postacie/Glosny_Ptak.png',
      enemyName: 'Głośny Ptak',
      enemyMaxHp: 44,
      enemyDamage: 5,
      descriptionPl: data.descriptionPl,
      questions: [...data.questions]
    };
  }
  const idx = (index !== null && index >= 0 && index < GLOSNY_PTAK_SETS.length)
    ? index
    : Math.floor(Math.random() * GLOSNY_PTAK_SETS.length);
  const data = GLOSNY_PTAK_SETS[idx];
  return {
    type: 'bird_tf',
    titlePl: data.titlePl,
    subtitlePl: data.subtitlePl,
    icon: './assets/Postacie/Glosny_Ptak.png',
    enemyName: 'Głośny Ptak',
    enemyMaxHp: 44,
    enemyDamage: 5,
    descriptionPl: data.descriptionPl,
    questions: [...data.questions]
  };
}

export const GLOSNY_PTAK_ENCOUNTERS = {
  default: getGlosnyPtakEncounter(0),
  1: getGlosnyPtakEncounter(0),
  2: getGlosnyPtakEncounter(1),
  3: getGlosnyPtakEncounter(2),
  4: getGlosnyPtakEncounter(3),
  5: getGlosnyPtakEncounter(4),
  6: getGlosnyPtakEncounter(5),
  7: getGlosnyPtakEncounter(6),
  8: getGlosnyPtakEncounter(7)
};
