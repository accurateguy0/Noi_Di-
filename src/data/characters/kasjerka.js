// Kasjerka (Mistrzyni Żabki / Sklepik)
// 20 HP, bije po 2 HP. Minigry: Rank Order, Open the Box (20 pudełek w zestawie!).
// Tło: Miasto / Kramik / Sklep. Nigdy w klasie ani na sali gimnastycznej!

export const KASJERKA_ENCOUNTERS = {
  rankOrder: {
    type: 'cashier_rank',
    titlePl: 'Pani Kasjerka (20 HP, 2 dmg)',
    subtitlePl: 'Rank Order: Kolejność zakupów przy kasie',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    enemyName: 'kasjerka',
    enemyMaxHp: 20,
    enemyDamage: 2,
    descriptionPl: 'Ułóż naturalną kolejność wizyty przy kasie w sklepie.',
    steps: [
      '1. „Dzień dobry!” – uprzejme powitanie przy kasie',
      '2. „Poproszę bułkę i butelkę niegazowanej wody.”',
      '3. „Czy płaci pan kartą, czy gotówką w monetach?”',
      '4. „Dziękuję bardzo i życzę miłego dnia, do widzenia!”'
    ]
  },
  openBox: {
    type: 'cashier_open_box',
    titlePl: 'Pani Kasjerka (20 HP, 2 dmg)',
    subtitlePl: 'Open the Box: Błyskawiczny wybór zakupów (5s)',
    icon: './assets/Postacie/Mistrzynia_Zabki.png',
    enemyName: 'kasjerka',
    enemyMaxHp: 20,
    enemyDamage: 2,
    descriptionPl: 'Kasjerka pyta o produkty! Wybierz właściwe pudełko w 5 sekund.',
    boxes: [
      {
            "id": 1,
            "prompt": "Świeża, chrupiąca bułka lub chleb z piekarni to:",
            "correctWord": "Pieczywo",
            "wrongWords": [
                  "Słodycze",
                  "Zeszyt"
            ]
      },
      {
            "id": 2,
            "prompt": "Kiedy płacisz monetami i banknotami, płacisz:",
            "correctWord": "Gotówką",
            "wrongWords": [
                  "Kartą",
                  "Telefonem"
            ]
      },
      {
            "id": 3,
            "prompt": "Mleko, ser żółty, twaróg, jogurt i kefir to produkty z kategorii:",
            "correctWord": "Nabiał",
            "wrongWords": [
                  "Chemia",
                  "Owoce"
            ]
      },
      {
            "id": 4,
            "prompt": "Marchew, ziemniaki, pomidory i ogórki należą do grupy:",
            "correctWord": "Warzywa",
            "wrongWords": [
                  "Pieczywo",
                  "Napoje"
            ]
      },
      {
            "id": 5,
            "prompt": "Jabłka, gruszki, banany i śliwki to słodkie i zdrowe:",
            "correctWord": "Owoce",
            "wrongWords": [
                  "Mrożonki",
                  "Przyprawy"
            ]
      },
      {
            "id": 6,
            "prompt": "Wydruk z kasy fiskalnej potwierdzający dokonanie zakupu to:",
            "correctWord": "Paragon",
            "wrongWords": [
                  "Bilet",
                  "Pocztówka"
            ]
      },
      {
            "id": 7,
            "prompt": "Pieniądze, które kasjerka oddaje ci, gdy zapłacisz większym banknotem:",
            "correctWord": "Reszta",
            "wrongWords": [
                  "Podatek",
                  "Kaucja"
            ]
      },
      {
            "id": 8,
            "prompt": "Plastikowa karta bankowa z chipem służy do płatności:",
            "correctWord": "Kartą płatniczą",
            "wrongWords": [
                  "Czekiem",
                  "Monetą"
            ]
      },
      {
            "id": 9,
            "prompt": "Okrągłe, metalowe krążki o nominałach 1, 2, 5 zł lub groszy to:",
            "correctWord": "Monety",
            "wrongWords": [
                  "Banknoty",
                  "Bony"
            ]
      },
      {
            "id": 10,
            "prompt": "Papierowe pieniądze o nominałach 10, 20, 50, 100 zł to:",
            "correctWord": "Banknoty",
            "wrongWords": [
                  "Żetony",
                  "Znaczki"
            ]
      },
      {
            "id": 11,
            "prompt": "Wielorazowa siatka bawełniana lub papierowa, do której pakujesz zakupy:",
            "correctWord": "Torba na zakupy",
            "wrongWords": [
                  "Karton",
                  "Portfel"
            ]
      },
      {
            "id": 12,
            "prompt": "Obniżona, wyjątkowa cena produktu w sklepie to:",
            "correctWord": "Promocja",
            "wrongWords": [
                  "Mandat",
                  "Kaucja"
            ]
      },
      {
            "id": 13,
            "prompt": "Czysta, zdrowa ciecz w butelce bez bąbelków gazu to:",
            "correctWord": "Woda niegazowana",
            "wrongWords": [
                  "Olej",
                  "Ocet"
            ]
      },
      {
            "id": 14,
            "prompt": "Pojemnik na kółkach lub z rączką, do którego wkładasz towary w sklepie:",
            "correctWord": "Koszyk sklepowy",
            "wrongWords": [
                  "Pudełko",
                  "Worek"
            ]
      },
      {
            "id": 15,
            "prompt": "Czarno-białe paseczki na opakowaniu skanowane przez czytnik laserowy:",
            "correctWord": "Kod kreskowy",
            "wrongWords": [
                  "Pieczątka",
                  "Autograf"
            ]
      },
      {
            "id": 16,
            "prompt": "Płatność telefonem lub zegarkiem przyłożonym do terminala to płatność:",
            "correctWord": "Zbliżeniowa",
            "wrongWords": [
                  "Listowna",
                  "Przelewowa"
            ]
      },
      {
            "id": 17,
            "prompt": "Data na opakowaniu informująca, do kiedy produkt jest zdatny do spożycia:",
            "correctWord": "Termin ważności",
            "wrongWords": [
                  "Cena",
                  "Waga"
            ]
      },
      {
            "id": 18,
            "prompt": "Co mówisz kulturalnie kasjerce odbierając zapakowane zakupy i paragon?",
            "correctWord": "«Dziękuję, do widzenia!»",
            "wrongWords": [
                  "«Cześć zią!»",
                  "«Nic nie powiem»"
            ]
      },
      {
            "id": 19,
            "prompt": "Herbata miętowa, rumianek i melisa należą do kategorii:",
            "correctWord": "Zioła i herbaty",
            "wrongWords": [
                  "Sosy",
                  "Mąki"
            ]
      },
      {
            "id": 20,
            "prompt": "Zeszyty, długopisy, ołówki i gumki do mazania to artykuły:",
            "correctWord": "Szkolne i biurowe",
            "wrongWords": [
                  "Mięsne",
                  "Budowlane"
            ]
      }
]
  }
};
