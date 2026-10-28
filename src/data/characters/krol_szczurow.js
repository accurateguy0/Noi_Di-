// Król Szczurów - Władca piwnicy i zakamarków
// 42 HP, bije po 3 HP. Kradnie litery ze słów - gracz musi wpisać brakujące litery! (20 wyzwań)

export const KROL_SZCZUROW_ENCOUNTERS = {
  default: {
    type: 'rat_king_letters',
    titlePl: 'Król Szczurów (42 HP, 3 dmg)',
    subtitlePl: 'Ukradzione litery: Zakamarki szkoły i piwnicy',
    icon: './assets/Postacie/krol_szczurow.png',
    enemyName: 'król szczurów',
    enemyMaxHp: 42,
    enemyDamage: 3,
    descriptionPl: 'Król Szczurów podgryzł litery w słowach! Wpisz brakujące samogłoski, aby zadać mu cios.',
    questions: [
      {
            "promptPl": "Gdzie zostawiasz kurtkę przed lekcjami? S Z _ T N I _",
            "answer": "A",
            "displayWord": "SZ_TNIA",
            "missingLetter": "A",
            "fullWord": "SZATNIA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Zeszyt do notatek z lekcji: Z _ S Z Y T",
            "answer": "E",
            "displayWord": "Z_SZYT",
            "missingLetter": "E",
            "fullWord": "ZESZYT",
            "hint": "Wpisz literę: E"
      },
      {
            "promptPl": "Miejsce na długopisy i gumki: P I _ R N I K",
            "answer": "Ó",
            "displayWord": "PI_RNIK",
            "missingLetter": "Ó",
            "fullWord": "PIÓRNIK",
            "hint": "Wpisz literę: Ó"
      },
      {
            "promptPl": "Przybór do wycierania ołówka: G _ M K A",
            "answer": "U",
            "displayWord": "G_MKA",
            "missingLetter": "U",
            "fullWord": "GUMKA",
            "hint": "Wpisz literę: U"
      },
      {
            "promptPl": "Sygnał oznajmiający przerwę: D Z W _ N E K",
            "answer": "O",
            "displayWord": "DZW_NEK",
            "missingLetter": "O",
            "fullWord": "DZWONEK",
            "hint": "Wpisz literę: O"
      },
      {
            "promptPl": "Nauczyciel prowadzący klasę: W Y C H _ W A W C A",
            "answer": "O",
            "displayWord": "WYCH_WAWCA",
            "missingLetter": "O",
            "fullWord": "WYCHOWAWCA",
            "hint": "Wpisz literę: O"
      },
      {
            "promptPl": "Budynek zdobywania wiedzy: S Z K _ Ł A",
            "answer": "O",
            "displayWord": "SZK_ŁA",
            "missingLetter": "O",
            "fullWord": "SZKOŁA",
            "hint": "Wpisz literę: O"
      },
      {
            "promptPl": "Książka do nauki przedmiotu: P O D R _ C Z N I K",
            "answer": "Ę",
            "displayWord": "PODR_CZNIK",
            "missingLetter": "Ę",
            "fullWord": "PODRĘCZNIK",
            "hint": "Wpisz literę: Ę"
      },
      {
            "promptPl": "Miejsce wypożyczania lektur: B I B L I _ T E K A",
            "answer": "O",
            "displayWord": "BIBLI_TEKA",
            "missingLetter": "O",
            "fullWord": "BIBLIOTEKA",
            "hint": "Wpisz literę: O"
      },
      {
            "promptPl": "Zielona do pisania kredą: T A B L I C _",
            "answer": "A",
            "displayWord": "TABLIC_",
            "missingLetter": "A",
            "fullWord": "TABLICA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Korytarz między salami: H _ L",
            "answer": "O",
            "displayWord": "H_L",
            "missingLetter": "O",
            "fullWord": "HOL",
            "hint": "Wpisz literę: O"
      },
      {
            "promptPl": "Przybór do mierzenia długości: L I N I J K _",
            "answer": "A",
            "displayWord": "LINIJK_",
            "missingLetter": "A",
            "fullWord": "LINIJKA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Do temperowania grafitu: T _ M P E R Ó W K A",
            "answer": "E",
            "displayWord": "T_MPERÓWKA",
            "missingLetter": "E",
            "fullWord": "TEMPERÓWKA",
            "hint": "Wpisz literę: E"
      },
      {
            "promptPl": "Pojemnik na drugie śniadanie: Ś N I _ D A N I Ó W K A",
            "answer": "A",
            "displayWord": "ŚNI_DANIÓWKA",
            "missingLetter": "A",
            "fullWord": "ŚNIADANIÓWKA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Odpoczynek między lekcjami: P R Z _ R W A",
            "answer": "E",
            "displayWord": "PRZ_RWA",
            "missingLetter": "E",
            "fullWord": "PRZERWA",
            "hint": "Wpisz literę: E"
      },
      {
            "promptPl": "Dokument ucznia ze zdjęciem: L E G I T Y M _ C J A",
            "answer": "A",
            "displayWord": "LEGITYM_CJA",
            "missingLetter": "A",
            "fullWord": "LEGITYMACJA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Świadectwo z czerwonym paskiem: W Y R _ Ż N I E N I E",
            "answer": "Ó",
            "displayWord": "WYR_ŻNIENIE",
            "missingLetter": "Ó",
            "fullWord": "WYRÓŻNIENIE",
            "hint": "Wpisz literę: Ó"
      },
      {
            "promptPl": "Gimnastyka w szkole: W _ C H O W A N I E  F I Z Y C Z N E",
            "answer": "Y",
            "displayWord": "W_CHOWANIE",
            "missingLetter": "Y",
            "fullWord": "WYCHOWANIE",
            "hint": "Wpisz literę: Y"
      },
      {
            "promptPl": "Praca pisemna sprawdzająca wiedzę: K _ R T K Ó W K A",
            "answer": "A",
            "displayWord": "K_RTKÓWKA",
            "missingLetter": "A",
            "fullWord": "KARTKÓWKA",
            "hint": "Wpisz literę: A"
      },
      {
            "promptPl": "Wakacyjny odpoczynek po szkole: W _ K A C J E",
            "answer": "A",
            "displayWord": "W_KACJE",
            "missingLetter": "A",
            "fullWord": "WAKACJE",
            "hint": "Wpisz literę: A"
      }
]
  }
};
