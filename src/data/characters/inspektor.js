// Inspektor Biletu - Niespodziewana kontrola w autobusie
// 5 HP, bije po 13 HP! Type the answer (wpisz odpowiedź z klawiatury - 20 zadań w zestawie!).

export const INSPEKTOR_ENCOUNTER = {
  type: 'inspector_type',
  titlePl: 'Inspektor Biletu (5 HP, 13 dmg)',
  subtitlePl: 'Type the Answer: Kontrola biletów w pojeździe!',
  icon: './assets/Postacie/Inspektor_Biletu.png',
  enemyName: 'inspektor',
  enemyMaxHp: 5,
  enemyDamage: 13,
  descriptionPl: '„Dzień dobry, bilety do kontroli!”. Wpisz z klawiatury odpowiedź. Błąd kosztuje aż 13 HP!',
  challenges: [
    {
        "promptPl": "Inspektor wyciąga rękę i prosi o bilet. Jak kulturalnie odpowiadasz podając bilet? (P R O S Z Ę)",
        "targetWord": "PROSZĘ",
        "hint": "Wpisz wielkimi lub małymi literami: PROSZĘ"
    },
    {
        "promptPl": "Inspektor pyta: «A bilet ulgowy? Gdzie masz dokument szkolny?». Co mu pokazujesz? (L E G I T Y M A C J A)",
        "targetWord": "LEGITYMACJA",
        "hint": "Wpisz: LEGITYMACJA"
    },
    {
        "promptPl": "Inspektor sprawdza datę i mówi: «Dziękuję, bilet jest ważny!». Co odpowiadasz? (D Z I Ę K U J Ę)",
        "targetWord": "DZIĘKUJĘ",
        "hint": "Wpisz: DZIĘKUJĘ"
    },
    {
        "promptPl": "Urządzenie w autobusie, w którym kasuje się bilet papierowy: (K A S O W N I K)",
        "targetWord": "KASOWNIK",
        "hint": "Wpisz: KASOWNIK"
    },
    {
        "promptPl": "Dokument uprawniający do legalnego przejazdu komunikacją miejską: (B I L E T)",
        "targetWord": "BILET",
        "hint": "Wpisz: BILET"
    },
    {
        "promptPl": "Miejsce wyznaczone na trasie, gdzie zatrzymuje się tramwaj lub autobus: (P R Z Y S T A N E K)",
        "targetWord": "PRZYSTANEK",
        "hint": "Wpisz: PRZYSTANEK"
    },
    {
        "promptPl": "Pojazd szynowy zasilany prądem z trakcji jeżdżący po ulicach miasta: (T R A M W A J)",
        "targetWord": "TRAMWAJ",
        "hint": "Wpisz: TRAMWAJ"
    },
    {
        "promptPl": "Duży pojazd kołowy przewożący pasażerów w mieście: (A U T O B U S)",
        "targetWord": "AUTOBUS",
        "hint": "Wpisz: AUTOBUS"
    },
    {
        "promptPl": "Osoba uprawniona do sprawdzania biletów pasażerów w pojeździe: (K O N T R O L E R)",
        "targetWord": "KONTROLER",
        "hint": "Wpisz: KONTROLER"
    },
    {
        "promptPl": "Opłata dodatkowa nakładana na pasażera jadącego na gapę: (M A N D A T)",
        "targetWord": "MANDAT",
        "hint": "Wpisz: MANDAT"
    },
    {
        "promptPl": "Zniżka przysługująca uczniom i studentom na przejazdy komunikacją: (U L G A)",
        "targetWord": "ULGA",
        "hint": "Wpisz: ULGA"
    },
    {
        "promptPl": "Tabela godzin odjazdów pojazdów wywieszona na przystanku: (R O Z K Ł A D)",
        "targetWord": "ROZKŁAD",
        "hint": "Wpisz: ROZKŁAD"
    },
    {
        "promptPl": "Osoba sprzedająca bilety w okienku kasowym na dworcu: (K A S J E R)",
        "targetWord": "KASJER",
        "hint": "Wpisz: KASJER"
    },
    {
        "promptPl": "Osoba prowadząca autobus miejski po wyznaczonej trasie: (K I E R O W C A)",
        "targetWord": "KIEROWCA",
        "hint": "Wpisz: KIEROWCA"
    },
    {
        "promptPl": "Tuszowy lub elektroniczny nadruk daty i godziny na skasowanym bilecie: (P I E C Z Ą T K A)",
        "targetWord": "PIECZĄTKA",
        "hint": "Wpisz: PIECZĄTKA"
    },
    {
        "promptPl": "Cecha biletu, który nie stracił terminu i uprawnia do jazdy: (W A Ż N O Ś Ć)",
        "targetWord": "WAŻNOŚĆ",
        "hint": "Wpisz: WAŻNOŚĆ"
    },
    {
        "promptPl": "Podróż autobusem lub tramwajem z punktu A do punktu B: (P R Z E J A Z D)",
        "targetWord": "PRZEJAZD",
        "hint": "Wpisz: PRZEJAZD"
    },
    {
        "promptPl": "Należność uiszczana za bilet komunikacji miejskiej: (O P Ł A T A)",
        "targetWord": "OPŁATA",
        "hint": "Wpisz: OPŁATA"
    },
    {
        "promptPl": "Fotel w pojeździe, który kulturalny uczeń ustępuje starszym: (M I E J S C E)",
        "targetWord": "MIEJSCE",
        "hint": "Wpisz: MIEJSCE"
    },
    {
        "promptPl": "Czynność włożenia biletu do kasownika zaraz po wejściu do pojazdu: (K A S O W A N I E)",
        "targetWord": "KASOWANIE",
        "hint": "Wpisz: KASOWANIE"
    }
]
};
