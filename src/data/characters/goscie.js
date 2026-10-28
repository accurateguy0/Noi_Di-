// Postacie Gościnne - Unikalni przeciwnicy sytuacyjni (Kasjerka, Mistrz Kebaba, Żuk Nosorożec)
// Gwarantują, że żadna postać nie powtarza się na tej samej planszy!

export const GOSCIE_FLOOR_ENCOUNTERS = {
  1: {
    type: 'match_up',
    titlePl: 'Pani Kasjerka (25 HP)',
    subtitlePl: 'Pani Kasjerka',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    enemyName: 'Pani Kasjerka',
    enemyMaxHp: 25,
    enemyDamage: 2,
    descriptionPl: 'Dopasuj zwroty używane przy kasie w sklepiku szkolnym.',
    pairs: [
      { id: 'g1_1', word: 'Dzień dobry!', defPl: 'Uprzejme powitanie pani przy kasie', color: '#3b82f6' },
      { id: 'g1_2', word: 'Poproszę bułkę', defPl: 'Grzeczne zamówienie świeżej przekąski', color: '#10b981' },
      { id: 'g1_3', word: 'Ile płacę?', defPl: 'Pytanie o łączną cenę zakupów w monetach', color: '#f59e0b' },
      { id: 'g1_4', word: 'Dziękuję, do widzenia!', defPl: 'Kulturalne pożegnanie po odebraniu reszty', color: '#ec4899' }
    ]
  },
  2: {
    type: 'match_up',
    titlePl: 'Pani Kasjerka (25 HP)',
    subtitlePl: 'Pani Kasjerka',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    enemyName: 'Pani Kasjerka',
    enemyMaxHp: 25,
    enemyDamage: 2,
    descriptionPl: 'Dopasuj nazwy przyborów do ich zastosowania w ławce.',
    pairs: [
      { id: 'g2_1', word: 'Długopis', defPl: 'Niezbędny do pisania notatek w zeszycie', color: '#3b82f6' },
      { id: 'g2_2', word: 'Zeszyt w kratkę', defPl: 'Miejsce na obliczenia matematyczne', color: '#10b981' },
      { id: 'g2_3', word: 'Piórnik', defPl: 'Etui chroniące przybory przed zgubieniem', color: '#f59e0b' },
      { id: 'g2_4', word: 'Linijka', defPl: 'Przybór z centymetrami do prostych linii', color: '#8b5cf6' }
    ]
  },
  3: {
    type: 'match_up',
    titlePl: 'Mistrz Kebaba (25 HP)',
    subtitlePl: 'Mistrz Kebaba',
    icon: './assets/Postacie/Mistrz_Kebaba.png',
    enemyName: 'Mistrz Kebaba',
    enemyMaxHp: 25,
    enemyDamage: 2,
    descriptionPl: 'Mistrz Kebaba uczy nazw posiłków i napojów regenerujących siły!',
    pairs: [
      { id: 'g3_1', word: 'Ciepła woda', defPl: 'Nawadnia organizm i gasi pragnienie', color: '#06b6d4' },
      { id: 'g3_2', word: 'Drożdżówka', defPl: 'Słodka przekąska dająca szybką energię', color: '#f59e0b' },
      { id: 'g3_3', word: 'Ciepły obiad', defPl: 'Pożywne danie z warzywami i mięsem', color: '#ef4444' },
      { id: 'g3_4', word: 'Smacznego!', defPl: 'Życzliwe słowo przed wspólnym posiłkiem', color: '#10b981' }
    ]
  },
  4: {
    type: 'match_up',
    titlePl: 'Mistrz Kebaba (25 HP)',
    subtitlePl: 'Mistrz Kebaba',
    icon: './assets/Postacie/Mistrz_Kebaba.png',
    enemyName: 'Mistrz Kebaba',
    enemyMaxHp: 25,
    enemyDamage: 2,
    descriptionPl: 'Dopasuj nawyki mistrza sportu przed meczem.',
    pairs: [
      { id: 'g4_1', word: 'Rozgrzewka', defPl: 'Chroni mięśnie przed niebezpieczną kontuzją', color: '#3b82f6' },
      { id: 'g4_2', word: 'Świeża woda', defPl: 'Najlepszy napój sportowca w czasie meczu', color: '#06b6d4' },
      { id: 'g4_3', word: 'Jabłko', defPl: 'Soczysty owoc pełen witamin i energii', color: '#10b981' },
      { id: 'g4_4', word: 'Dzięki za grę!', defPl: 'Szacunek dla rywala po gwizdku końcowym', color: '#ec4899' }
    ]
  },
  5: {
    type: 'match_up',
    titlePl: 'Żuk Nosorożec (25 HP)',
    subtitlePl: 'Żuk Nosorożec',
    icon: './assets/Postacie/zuk_nosorozec.png',
    enemyName: 'Żuk Nosorożec',
    enemyMaxHp: 25,
    enemyDamage: 3,
    descriptionPl: 'Potężny Żuk testuje Twoją pamięć o czasie i dyscyplinie!',
    pairs: [
      { id: 'g5_1', word: 'Poniedziałek', defPl: 'Początek tygodnia i start nowej nauki', color: '#3b82f6' },
      { id: 'g5_2', word: 'Piątek', defPl: 'Dzień wielkiego meczu finałowego', color: '#10b981' },
      { id: 'g5_3', word: 'Dzwonek', defPl: 'Sygnał początku decydującej rundy', color: '#f59e0b' },
      { id: 'g5_4', word: 'Mistrz A0', defPl: 'Zasłużony tytuł dla niepokonanego Bohatera Szkolnych Lochów!', color: '#e63946' }
    ]
  }
};