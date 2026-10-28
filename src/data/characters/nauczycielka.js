// Pani Nauczycielka - Postać Adaptująca (Kobiecy lektor)
// Wymaga poprawnych odpowiedzi, życie adaptuje się do obrażeń gracza (CKE Klasy 4-8, 20 pytań na piętro)

export const NAUCZYCIELKA_FLOOR_ENCOUNTERS = {
  1: {
    type: 'teacher_quiz_5',
    titlePl: 'Pani Nauczycielka (35 HP, 2 dmg)',
    subtitlePl: 'Pani Nauczycielka',
    icon: './assets/Postacie/Nauczycielka.png',
    archetype: 'adaptive',
    enemyName: 'Pani Nauczycielka',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Odpowiedz poprawnie na polecenia lekcyjne — pani wymaga skupienia!',
    questions: [
      {
        id: 'h1_tc_1',
        speech: "Dzieci, dzwonek zadzwonił, zaczynamy lekcję. Usiądźcie proszę na swoich miejscach!",
        promptPl: "Co robisz na polecenie nauczycielki?",
        promptVn: "Bạn làm gì theo hiệu lệnh của cô giáo?",
        options: [
          {
                    "text": "Siadam spokojnie w swojej ławce i wyjmuję przybory.",
                    "correct": true
          },
          {
                    "text": "Wstaję z krzesła i podchodzę bez pytania do tablicy.",
                    "correct": false
          },
          {
                    "text": "Zostaję na korytarzu i czekam na przerwę.",
                    "correct": false
          },
          {
                    "text": "Pakuję plecak i szykuję się do wyjścia.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_2',
        speech: "Otwórzcie podręczniki na stronie dziesiątej i posłuchajcie nagrania w ciszy!",
        promptPl: "Jak prawidłowo reagujesz na to polecenie?",
        promptVn: "Phản ứng đúng với yêu cầu của cô giáo:",
        options: [
          {
                    "text": "Otwieram podręcznik na stronie 10 i słucham nagrania.",
                    "correct": true
          },
          {
                    "text": "Otwieram zeszyt na czystej stronie i piszę datę.",
                    "correct": false
          },
          {
                    "text": "Otwieram podręcznik na stronie 20 i czytam na głos.",
                    "correct": false
          },
          {
                    "text": "Zamykam podręcznik i chowam go do plecaka.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_3',
        speech: "Napiszcie dzisiejszą datę w zeszycie na samej górze czystej strony.",
        promptPl: "Co należy teraz zrobić?",
        promptVn: "Cần phải làm gì theo yêu cầu này?",
        options: [
          {
                    "text": "Biorę długopis i starannie zapisuję datę w zeszycie.",
                    "correct": true
          },
          {
                    "text": "Zapisuję datę ołówkiem na marginesie podręcznika.",
                    "correct": false
          },
          {
                    "text": "Zapisuję datę kredą na tablicy szkolnej.",
                    "correct": false
          },
          {
                    "text": "Czytam głośno datę z tablicy bez zapisywania.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_4',
        speech: "Kto zna odpowiedź na to zadanie, niech podniesie rękę do góry!",
        promptPl: "Chcesz odpowiedzieć na pytanie. Jak to właściwie zgłaszasz?",
        promptVn: "Bạn muốn trả lời câu hỏi. Bạn giơ tay thế nào cho đúng?",
        options: [
          {
                    "text": "Podnoszę prawą rękę do góry i czekam na wywołanie.",
                    "correct": true
          },
          {
                    "text": "Odpowiadam natychmiast głośno bez podnoszenia ręki.",
                    "correct": false
          },
          {
                    "text": "Podnoszę do góry długopis i macham nim.",
                    "correct": false
          },
          {
                    "text": "Wstaję na krzesło i macham obiema rękami.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_5',
        speech: "Poproszę dyżurnego o wytarcie tablicy gąbką przed nowym tematem.",
        promptPl: "Jesteś dyżurnym. Jak reagujesz?",
        promptVn: "Bạn là trực nhật. Bạn làm gì?",
        options: [
          {
                    "text": "Wstaję, moczę gąbkę i starannie wycieram tablicę.",
                    "correct": true
          },
          {
                    "text": "Rzucam kredą w kolegę z pierwszej ławki.",
                    "correct": false
          },
          {
                    "text": "Mówię, że nie mam dziś ochoty na wycieranie.",
                    "correct": false
          },
          {
                    "text": "Zasłaniam tablicę mapą ścienną.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_6',
        speech: "Przeczytaj na głos pierwsze zdanie z czytanki na stronie dwunastej.",
        promptPl: "Nauczycielka wskazała ciebie. Jak postępujesz?",
        promptVn: "Cô giáo gọi bạn đọc. Bạn làm gì?",
        options: [
          {
            "text": "Wstaję spokojnie i czytam wyraźnie pierwsze zdanie z podręcznika.",
            "correct": true
          },
          {
            "text": "Zamykam gwałtownie książkę i milczę przez całą trwającą lekcję.",
            "correct": false
          },
          {
            "text": "Czytam na głos ostatni akapit zamiast wskazanego pierwszego zdania.",
            "correct": false
          },
          {
            "text": "Zaczynam śpiewać piosenkę na cały głos, ignorując polecenie pani.",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_7',
        speech: "Przepiszcie definicję z ramki do zeszytów zielonym długopisem.",
        promptPl: "Co robisz, aby wykonać polecenie zgodnie z instrukcją?",
        promptVn: "Làm thế nào để thực hiện đúng hướng dẫn?",
        options: [
          {
                    "text": "Szukam zielonego długopisu i przepisuję definicję.",
                    "correct": true
          },
          {
                    "text": "Rysuję domek ołówkiem na ostatniej stronie.",
                    "correct": false
          },
          {
                    "text": "Podkreślam całą stronę czarnym mazakiem.",
                    "correct": false
          },
          {
                    "text": "Wyrywam kartkę z zeszytu i robię samolocik.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_8',
        speech: "Dzwonek ogłasza przerwę. Spakujcie książki i wyjdźcie spokojnie na korytarz.",
        promptPl: "Koniec lekcji. Jak właściwie opuszczasz salę?",
        promptVn: "Hết tiết. Bạn rời phòng thế nào cho đúng?",
        options: [
          {
                    "text": "Pakuję piórnik i zeszyt, zasuwam krzesło i wychodzę.",
                    "correct": true
          },
          {
                    "text": "Biegnę pędem do drzwi, potrącając kolegów.",
                    "correct": false
          },
          {
                    "text": "Zostawiam otwarty plecak na środku sali.",
                    "correct": false
          },
          {
                    "text": "Wyskakuję przez otwarte okno na parterze.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_9',
        speech: "Dzieci, wyjmijcie ołówki i linijki, narysujemy tabelę z dwiema kolumnami.",
        promptPl: "Jakie przybory przygotowujesz na ławce?",
        promptVn: "",
        options: [
          {
            "text": "Ołówek kreślarski oraz prostą linijkę do równego rysowania.",
            "correct": true
          },
          {
            "text": "Farby plakatowe oraz duży pędzel ze słoikiem z czystą wodą.",
            "correct": false
          },
          {
            "text": "Nożyczki biurowe oraz przezroczystą taśmę klejącą do papieru.",
            "correct": false
          },
          {
            "text": "Cyrkiel metalowy oraz zestaw kolorowej plasteliny modelarskiej.",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_10',
        speech: "Zwróćcie uwagę na pisownię wyrazu «rzeka». Dlaczego piszemy «rz»?",
        promptPl: "Podaj poprawną regułę ortograficzną:",
        promptVn: "",
        options: [
          {
            "text": "Piszemy «rz», ponieważ wymienia się na «r» (rzeka – rzeczny).",
            "correct": true
          },
          {
            "text": "Piszemy «rz», ponieważ występuje na samym początku każdego słowa.",
            "correct": false
          },
          {
            "text": "Piszemy «rz», ponieważ jest to wyraz obcy bez żadnej polskiej reguły.",
            "correct": false
          },
          {
            "text": "Piszemy «rz», ponieważ spółgłoska ta zawsze brzmi miękko w mowie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_11',
        speech: "Sprawdźcie w słowniku ortograficznym pisownię słowa «gżegżółka».",
        promptPl: "Jak ułożone są hasła w słowniku języka polskiego?",
        promptVn: "",
        options: [
          {
                    "text": "W ścisłym porządku alfabetycznym od A do Ż.",
                    "correct": true
          },
          {
                    "text": "Od najkrótszych wyrazów do najdłuższych.",
                    "correct": false
          },
          {
                    "text": "Według daty powstania wyrazu.",
                    "correct": false
          },
          {
                    "text": "Losowo, bez żadnego określonego porządku.",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_12',
        speech: "Zamieńcie się zeszytami w parach i sprawdźcie nawzajem błędy w dyktandzie.",
        promptPl: "Jak przeprowadzasz ocenę koleżeńską z partnerem z ławki?",
        promptVn: "",
        options: [
          {
            "text": "Czytam uważnie pracę kolegi i ołówkiem delikatnie wskazuję pomyłki.",
            "correct": true
          },
          {
            "text": "Przekreślam cały zeszyt czerwonym flamastrem i wyśmiewam każdy błąd.",
            "correct": false
          },
          {
            "text": "Wyrzucam zeszyt kolegi pod ławkę, nie sprawdzając wcale treści zadań.",
            "correct": false
          },
          {
            "text": "Dopisuję zmyślone brzydkie słowa na marginesie, psując ocenę końcową.",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_13',
        speech: "Wskaż w podanym zdaniu podmiot gramatyczny: «Wesoły Janek czyta ciekawą książkę».",
        promptPl: "Kto wykonuje czynność w tym zdaniu?",
        promptVn: "",
        options: [
          {
            "text": "«Janek» (rzeczownik w mianowniku, podmiot, odpowiada na pytanie: kto?).",
            "correct": true
          },
          {
            "text": "«czyta» (czasownik w formie osobowej, orzeczenie, co robi bohater?).",
            "correct": false
          },
          {
            "text": "«książkę» (rzeczownik w bierniku, dopełnienie, kogo? co czyta uczeń?).",
            "correct": false
          },
          {
            "text": "«wesoły» (przymiotnik w mianowniku, przydawka, jaki jest bohater zdania?).",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_14',
        speech: "A co jest orzeczeniem w zdaniu: «Wesoły Janek czyta ciekawą książkę»?",
        promptPl: "Wskaż wyraz oznaczający czynność:",
        promptVn: "",
        options: [
          {
            "text": "«czyta» (czasownik w formie osobowej, nazywa czynność: co robi?).",
            "correct": true
          },
          {
            "text": "«Janek» (rzeczownik w mianowniku, nazywa wykonawcę: kto to jest?).",
            "correct": false
          },
          {
            "text": "«ciekawą» (przymiotnik w bierniku, nazywa cechę: jaka to książka?).",
            "correct": false
          },
          {
            "text": "«książkę» (rzeczownik w bierniku, nazywa przedmiot: co czyta Janek?).",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_15',
        speech: "Proszę zapisać w zeszycie temat lekcji: «Części mowy i części zdania».",
        promptPl: "Gdzie i jak zapisujemy temat zajęć?",
        promptVn: "",
        options: [
          {
            "text": "Na środku strony zeszytu, pod zapisaną wcześniej datą lekcji.",
            "correct": true
          },
          {
            "text": "Na zewnętrznej okładce z tyłu zeszytu, obok planu lekcji szkolnych.",
            "correct": false
          },
          {
            "text": "Na drewnianym blacie ławki sąsiada, pisząc niebieskim długopisem.",
            "correct": false
          },
          {
            "text": "Do góry nogami na bocznym marginesie, tuż przy krawędzi czystej kartki.",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_16',
        speech: "Który znak interpunkcyjny stawiamy na końcu zdania pytającego?",
        promptPl: "Wskaż właściwy znak kończący pytanie:",
        promptVn: "",
        options: [
          {
                    "text": "Znak zapytania (?)",
                    "correct": true
          },
          {
                    "text": "Wykrzyknik (!)",
                    "correct": false
          },
          {
                    "text": "Średnik (;)",
                    "correct": false
          },
          {
                    "text": "Dwukropek (:)",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_17',
        speech: "A jaki znak interpunkcyjny kończy zdanie rozkazujące lub okrzyk?",
        promptPl: "Wskaż właściwy znak ekspresji:",
        promptVn: "",
        options: [
          {
                    "text": "Wykrzyknik (!)",
                    "correct": true
          },
          {
                    "text": "Kropka (.)",
                    "correct": false
          },
          {
                    "text": "Pytajnik (?)",
                    "correct": false
          },
          {
                    "text": "Przecinek (,)",
                    "correct": false
          }
]
      },
      {
        id: 'h1_tc_18',
        speech: "Podaj liczbę pojedynczą i mnogą od rzeczownika «dziecko».",
        promptPl: "Jak brzmi forma mianownika liczby mnogiej?",
        promptVn: "",
        options: [
          {
            "text": "Liczba pojedyncza: «dziecko», liczba mnoga: «dzieci».",
            "correct": true
          },
          {
            "text": "Liczba pojedyncza: «dziecko», liczba mnoga: «dziecki».",
            "correct": false
          },
          {
            "text": "Liczba pojedyncza: «dziecko», liczba mnoga: «dzieckowie».",
            "correct": false
          },
          {
            "text": "Liczba pojedyncza: «dziecko», liczba mnoga: «dzieckach».",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_19',
        speech: "Ułóż zdanie pojedyncze nierozwinięte z wyrazami: «Ptaki» i «śpiewają».",
        promptPl: "Jak wygląda zdanie nierozwinięte?",
        promptVn: "",
        options: [
          {
            "text": "«Ptaki śpiewają.» (zdanie zawiera tylko podmiot oraz orzeczenie).",
            "correct": true
          },
          {
            "text": "«Wiosenne ptaki głośno śpiewają o poranku w lesie.» (rozwinięte).",
            "correct": false
          },
          {
            "text": "«Ptaki i leśne drzewa.» (to jest równoważnik zdania bez orzeczenia).",
            "correct": false
          },
          {
            "text": "«Poranny śpiew ptaków na łące.» (to jest grupa wyrazów bez orzeczenia).",
            "correct": false
          }
        ]
      },
      {
        id: 'h1_tc_20',
        speech: "Zapiszcie zadanie domowe: ćwiczenie 3 ze strony 15 w zeszycie ćwiczeń.",
        promptPl: "Gdzie uczeń powinien zanotować tę informację?",
        promptVn: "",
        options: [
          {
            "text": "W dzienniczku lub terminarzu ucznia pod datą jutrzejszych zajęć.",
            "correct": true
          },
          {
            "text": "Nigdzie nie zapisuję, bo na pewno wszystko dokładnie zapamiętam.",
            "correct": false
          },
          {
            "text": "Na dłoni lub na przedramieniu ciemnoniebieskim flamastrem szkolnym.",
            "correct": false
          },
          {
            "text": "Na białej ścianie w sali lekcyjnej, tuż obok wiszącej dużej tablicy.",
            "correct": false
          }
        ]
      }
    ]
  },
  2: {
    type: 'teacher_quiz_5',
    titlePl: 'Pani Nauczycielka (35 HP, 2 dmg)',
    subtitlePl: 'Pani Nauczycielka',
    icon: './assets/Postacie/Nauczycielka.png',
    archetype: 'adaptive',
    enemyName: 'Pani Nauczycielka',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Odpowiedz poprawnie na polecenia lekcyjne — pani wymaga skupienia!',
    questions: [
      {
        id: 'h2_tc_1',
        speech: "Wyjaśnijcie pojęcie synonimu. Czym są synonimy w języku polskim?",
        promptPl: "Zdefiniuj poprawnie synonim:",
        promptVn: "",
        options: [
          {
            "text": "Wyrazy bliskoznaczne o zbliżonym znaczeniu (np. auto – samochód).",
            "correct": true
          },
          {
            "text": "Wyrazy przeciwstawne o skrajnie różnym sensie (np. ciepło – zimno).",
            "correct": false
          },
          {
            "text": "Wyrazy brzmiące identycznie, lecz znaczące coś innego (homonimy).",
            "correct": false
          },
          {
            "text": "Wyrazy zapisane błędnie pod względem ortograficznym w wypracowaniu.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_2',
        speech: "A czym są antonimy? Podaj przykład pary antonimów.",
        promptPl: "Wskaż trafną definicję i przykład antonimów:",
        promptVn: "",
        options: [
          {
                    "text": "To wyrazy przeciwstawne, np. jasny – ciemny, wysoki – niski.",
                    "correct": true
          },
          {
                    "text": "To wyrazy o identycznym znaczeniu, np. dom – budynek.",
                    "correct": false
          },
          {
                    "text": "To części mowy odmienne przez przypadki.",
                    "correct": false
          },
          {
                    "text": "To znaki interpunkcyjne w zdaniu złożonym.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_3',
        speech: "Odmień przez przypadki rzeczownik «szkoła» w liczbie pojedynczej. Jaki jest narzędnik?",
        promptPl: "Z kim? Z czym? – wskaż poprawną formę narzędnika:",
        promptVn: "",
        options: [
          {
            "text": "Idę z moją nową (kim? czym?) «szkołą».",
            "correct": true
          },
          {
            "text": "Nie ma w mieście tej (kogo? czego?) «szkoły».",
            "correct": false
          },
          {
            "text": "Przyglądam się mojej (komu? czemu?) «szkole».",
            "correct": false
          },
          {
            "text": "Myślę ciepło o tej (o kim? o czym?) «szkole».",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_4',
        speech: "Wskaż formę miejscownika (o kim? o czym?) dla rzeczownika «pies».",
        promptPl: "Jak brzmi poprawna forma miejscownika?",
        promptVn: "",
        options: [
          {
                    "text": "Rozmawiamy o wiernym «psie».",
                    "correct": true
          },
          {
                    "text": "Widzę tego «psa».",
                    "correct": false
          },
          {
                    "text": "Idę na spacer z «psem».",
                    "correct": false
          },
          {
                    "text": "Hej, «psie», chodź tu!",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_5',
        speech: "Ile przypadków wyróżniamy w deklinacji języka polskiego?",
        promptPl: "Podaj dokładną liczbę przypadków:",
        promptVn: "",
        options: [
          {
            "text": "7 przypadków (Mianownik, Dopełniacz, Celownik, Biernik, Narzędnik, Miejscownik, Wołacz).",
            "correct": true
          },
          {
            "text": "5 przypadków (Mianownik, Dopełniacz, Celownik, Biernik oraz dodatkowo jeszcze Narzędnik).",
            "correct": false
          },
          {
            "text": "6 przypadków (Mianownik, Dopełniacz, Celownik, Biernik, Narzędnik i Miejscownik bez Wołacza).",
            "correct": false
          },
          {
            "text": "8 przypadków (Mianownik, Dopełniacz, Celownik, Biernik, Narzędnik, Miejscownik, Wołacz i Ablatyw).",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_6',
        speech: "Który przypadek gramatyczny nie odpowiada na żadne pytanie i służy do wołania?",
        promptPl: "Wskaż ten wyjątkowy siódmy przypadek:",
        promptVn: "",
        options: [
          {
            "text": "Wołacz (O!) – forma apelu lub bezpośredniego zwrotu do osoby.",
            "correct": true
          },
          {
            "text": "Mianownik (kto? co?) – podstawowa forma nazywająca podmiot zdania.",
            "correct": false
          },
          {
            "text": "Celownik (komu? czemu?) – przypadek określający odbiorcę czynności.",
            "correct": false
          },
          {
            "text": "Biernik (kogo? co?) – przypadek określający przedmiot bezpośredni.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_7',
        speech: "Podaj stopniowanie przymiotnika «dobry». Jak brzmi stopień wyższy i najwyższy?",
        promptPl: "Wskaż poprawne nieregularne stopniowanie:",
        promptVn: "",
        options: [
          {
                    "text": "Dobry – lepszy – najlepszy.",
                    "correct": true
          },
          {
                    "text": "Dobry – bardziej dobry – najbardziej dobry.",
                    "correct": false
          },
          {
                    "text": "Dobry – dobrszy – najdobrszy.",
                    "correct": false
          },
          {
                    "text": "Dobry – dobrzejszy – najdobrzejszy.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_8',
        speech: "A jak stopniujemy przymiotnik «zły»?",
        promptPl: "Wskaż formy stopnia wyższego i najwyższego:",
        promptVn: "",
        options: [
          {
                    "text": "Zły – gorszy – najgorszy.",
                    "correct": true
          },
          {
                    "text": "Zły – źlejszy – najźlejszy.",
                    "correct": false
          },
          {
                    "text": "Zły – bardziej zły – najbardziej zły.",
                    "correct": false
          },
          {
                    "text": "Zły – złoszy – najzłoszy.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_9',
        speech: "Wskaż przysłówek utworzony od przymiotnika «szybki»:",
        promptPl: "Na jakie pytania odpowiada przysłówek?",
        promptVn: "",
        options: [
          {
            "text": "«Szybko» (przysłówek, odpowiada na pytanie: jak? w jaki sposób?).",
            "correct": true
          },
          {
            "text": "«Szybkość» (rzeczownik, odpowiada na pytanie gramatyczne: kto? co?).",
            "correct": false
          },
          {
            "text": "«Szybkiemu» (przymiotnik w celowniku, odpowiada na pytanie: jakiemu?).",
            "correct": false
          },
          {
            "text": "«Przyspieszyć» (czasownik w bezokoliczniku, odpowiada na pytanie: co zrobić?).",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_10',
        speech: "Czy przysłówki odmieniają się przez przypadki i liczby?",
        promptPl: "Wskaż poprawną cechę gramatyczną przysłówka:",
        promptVn: "",
        options: [
          {
            "text": "Nie, przysłówek jest częścią mowy nieodmienną (podlega jedynie stopniowaniu).",
            "correct": true
          },
          {
            "text": "Tak, przysłówek odmienia się regularnie przez rodzaje, osoby i czasy w zdaniu.",
            "correct": false
          },
          {
            "text": "Tak, przysłówek odmienia się przez tryby oznajmujący, przypuszczający i rozkazujący.",
            "correct": false
          },
          {
            "text": "Tak, przysłówek odmienia się przez siedem przypadków deklinacyjnych jak rzeczownik.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_11',
        speech: "Które z poniższych części mowy są nieodmienne?",
        promptPl: "Wybierz zestaw części mowy nieodmiennych:",
        promptVn: "",
        options: [
          {
            "text": "Przysłówek, przyimek, spójnik, wykrzyknik oraz partykuła.",
            "correct": true
          },
          {
            "text": "Rzeczownik, przymiotnik, czasownik oraz liczebnik główny.",
            "correct": false
          },
          {
            "text": "Zaimek osobowy, rzeczowny oraz imiesłów przymiotnikowy czynny.",
            "correct": false
          },
          {
            "text": "Wszystkie części mowy występujące w języku polskim są odmienne.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_12',
        speech: "Jak piszemy przeczenie «nie» z czasownikami w formach osobowych?",
        promptPl: "Wskaż żelazną zasadę ortograficzną:",
        promptVn: "",
        options: [
          {
            "text": "«Nie» z czasownikami piszemy rozdzielnie (np. nie wiem, nie czytam).",
            "correct": true
          },
          {
            "text": "«Nie» z czasownikami piszemy łącznie bez wyjątku (np. niewiem, nieczytam).",
            "correct": false
          },
          {
            "text": "«Nie» z czasownikami łączymy zawsze dywizem (np. nie-wiem, nie-czytam).",
            "correct": false
          },
          {
            "text": "«Nie» z czasownikami zapisujemy według uznania piszącego zależnie od tempa.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_13',
        speech: "A jak piszemy «nie» z przymiotnikami w stopniu równym?",
        promptPl: "Przypomnij regułę pisowni łącznej:",
        promptVn: "",
        options: [
          {
            "text": "Łącznie (np. niełatwy, nieduży, niebieski, niedobry w stopniu równym).",
            "correct": true
          },
          {
            "text": "Rozdzielnie (np. nie łatwy, nie duży, nie bieski, nie dobry bez wyjątku).",
            "correct": false
          },
          {
            "text": "Z dywizem łączącym (np. nie-łatwy, nie-duży, nie-bieski, nie-dobry w piśmie).",
            "correct": false
          },
          {
            "text": "Wielką literą w środku wyrazu (np. nieŁatwy, nieDuży, nieDobry w tekście).",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_14',
        speech: "Co oznacza skrót CKE, który pojawia się na arkuszach egzaminacyjnych?",
        promptPl: "Rozwiń poprawnie skrótowiec:",
        promptVn: "",
        options: [
          {
                    "text": "Centralna Komisja Egzaminacyjna.",
                    "correct": true
          },
          {
                    "text": "Centrum Kształcenia Europejskiego.",
                    "correct": false
          },
          {
                    "text": "Całodobowy Klub Edukacyjny.",
                    "correct": false
          },
          {
                    "text": "Cykliczny Komitet Edukatorów.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_15',
        speech: "Z ilu głosek składa się wyraz «szkoła»?",
        promptPl: "Policz starannie głoski (dźwięki mowy):",
        promptVn: "",
        options: [
          {
            "text": "5 głosek: [sz-k-o-ł-a] (dwuznak «sz» oznacza w wymowie jedną głoskę).",
            "correct": true
          },
          {
            "text": "6 głosek: [s-z-k-o-ł-a] (błędne policzenie dwuznaku «sz» jako dwa dźwięki).",
            "correct": false
          },
          {
            "text": "4 głoski: [sz-k-o-ł] (błędne pominięcie ostatniej samogłoski w zapisie).",
            "correct": false
          },
          {
            "text": "7 głosek: [s-z-k-o-ł-a-x] (błędne dodanie dodatkowego dźwięku na końcu).",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_16',
        speech: "A ile liter ma ten sam wyraz «szkoła»?",
        promptPl: "Policz znaki graficzne w zapisie:",
        promptVn: "",
        options: [
          {
                    "text": "6 liter: s-z-k-o-ł-a.",
                    "correct": true
          },
          {
                    "text": "5 liter.",
                    "correct": false
          },
          {
                    "text": "7 liter.",
                    "correct": false
          },
          {
                    "text": "4 litery.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_17',
        speech: "Wymień wszystkie polskie dwuznaki reprezentujące pojedyncze głoski:",
        promptPl: "Wskaż kompletny zbiór dwuznaków:",
        promptVn: "",
        options: [
          {
                    "text": "cz, sz, ch, rz, dz, dż, dź.",
                    "correct": true
          },
          {
                    "text": "ą, ę, ó, ł, ś, ć, ź, ż.",
                    "correct": false
          },
          {
                    "text": "st, tr, br, pl, kr.",
                    "correct": false
          },
          {
                    "text": "ai, eu, ou, oi.",
                    "correct": false
          }
]
      },
      {
        id: 'h2_tc_18',
        speech: "Na czym polega różnica między samogłoską a spółgłoską?",
        promptPl: "Wyjaśnij kryterium artykulacyjne i sylabotwórcze:",
        promptVn: "",
        options: [
          {
            "text": "Samogłoski tworzą ośrodki sylab i są wymawiane przy otwartym torze mowy.",
            "correct": true
          },
          {
            "text": "Samogłoski zapisuje się wyłącznie wielką literą na początku każdego zdania.",
            "correct": false
          },
          {
            "text": "Spółgłoski w ogóle nie występują w słowach rodzimych polszczyzny literackiej.",
            "correct": false
          },
          {
            "text": "Samogłoski to tylko litery posiadające znaki diakrytyczne i ogonki.",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_19',
        speech: "Ile sylab posiada słowo «podręcznik»?",
        promptPl: "Podziel wyraz na sylaby:",
        promptVn: "",
        options: [
          {
            "text": "3 sylaby: pod-ręcz-nik (wyraz zawiera 3 samogłoski: o, ę, i).",
            "correct": true
          },
          {
            "text": "2 sylaby: podręcz-nik (błędne połączenie dwóch samogłosek w jedną).",
            "correct": false
          },
          {
            "text": "4 sylaby: po-d-ręcz-nik (błędne wydzielenie pojedynczej spółgłoski d).",
            "correct": false
          },
          {
            "text": "1 sylaba: podręcznik (błędne uznanie wyrazu za całkowicie jednosylabowy).",
            "correct": false
          }
        ]
      },
      {
        id: 'h2_tc_20',
        speech: "Podaj zasadę przenoszenia wyrazów do nowej linii tekstu:",
        promptPl: "Czego nie wolno robić dzieląc wyraz przy marginesie?",
        promptVn: "",
        options: [
          {
            "text": "Nie wolno zostawiać pojedynczej litery na końcu linii ani rozbijać dwuznaków.",
            "correct": true
          },
          {
            "text": "Można rozcinać wyraz w zupełnie dowolnym miejscu bez patrzenia na sylaby.",
            "correct": false
          },
          {
            "text": "Nigdy pod żadnym pozorem nie wolno dzielić wyrazów w polskim piśmie ręcznym.",
            "correct": false
          },
          {
            "text": "Rozdziela się zawsze spółgłoskę «sz» na literę «s-» oraz literę «-z».",
            "correct": false
          }
        ]
      }
    ]
  },
  3: {
    type: 'teacher_quiz_5',
    titlePl: 'Pani Nauczycielka (35 HP, 2 dmg)',
    subtitlePl: 'Pani Nauczycielka',
    icon: './assets/Postacie/Nauczycielka.png',
    archetype: 'adaptive',
    enemyName: 'Pani Nauczycielka',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Odpowiedz poprawnie na polecenia lekcyjne — pani wymaga skupienia!',
    questions: [
      {
        id: 'h3_tc_1',
        speech: "Wskaż w zdaniu przydawkę: «Młoda nauczycielka cierpliwie tłumaczy trudne zadanie».",
        promptPl: "Na jakie pytania odpowiada przydawka?",
        promptVn: "",
        options: [
          {
            "text": "«Młoda» oraz «trudne» (przydawki: jaki? jaka? jakie? określają rzeczowniki).",
            "correct": true
          },
          {
            "text": "«tłumaczy» (orzeczenie w zdaniu: co robi podmiot wykonujący czynność?).",
            "correct": false
          },
          {
            "text": "«cierpliwie» (okolicznik sposobu: jak? w jaki sposób wykonuje czynność?).",
            "correct": false
          },
          {
            "text": "«nauczycielka» (podmiot gramatyczny: kto wykonuje opisaną czynność?).",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_2',
        speech: "A co w tym samym zdaniu jest okolicznikiem sposobu?",
        promptPl: "Wskaż wyraz odpowiadający na pytanie: jak?",
        promptVn: "",
        options: [
          {
            "text": "«cierpliwie» (okolicznik sposobu, określa jak wykonywana jest czynność).",
            "correct": true
          },
          {
            "text": "«młoda» (przydawka przymiotna, określa jaka jest nauczycielka w klasie).",
            "correct": false
          },
          {
            "text": "«zadanie» (dopełnienie w zdaniu, określa co tłumaczy cierpliwa pani).",
            "correct": false
          },
          {
            "text": "«nauczycielka» (podmiot w zdaniu, określa kto prowadzi lekcję w szkole).",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_3',
        speech: "Wskaż dopełnienie w zdaniu: «Uczniowie czytają lekturę».",
        promptPl: "Na jakie pytania przypadków zależnych odpowiada dopełnienie?",
        promptVn: "",
        options: [
          {
                    "text": "«lekturę» (kogo? co? – biernik).",
                    "correct": true
          },
          {
                    "text": "«uczniowie» (podmiot).",
                    "correct": false
          },
          {
                    "text": "«czytają» (orzeczenie).",
                    "correct": false
          },
          {
                    "text": "Brak dopełnienia w tym zdaniu.",
                    "correct": false
          }
]
      },
      {
        id: 'h3_tc_4',
        speech: "Czym różni się zdanie złożone współrzędnie od zdania złożonego podrzędnie?",
        promptPl: "Wyjaśnij relację logiczną między zdaniami składowymi:",
        promptVn: "",
        options: [
          {
            "text": "Współrzędne łączą zdania równorzędne, podrzędne zawiera zdanie nadrzędne i określające.",
            "correct": true
          },
          {
            "text": "Współrzędne nigdy nie mają orzeczeń, podrzędne mają zawsze co najmniej trzy czasowniki.",
            "correct": false
          },
          {
            "text": "Podrzędne kończy się zawsze wykrzyknikiem, a współrzędne zawsze znakiem zapytania w tekście.",
            "correct": false
          },
          {
            "text": "Nie ma żadnej różnicy gramatycznej, oba terminy oznaczają dokładnie to samo w składni.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_5',
        speech: "Przed którymi spójnikami współrzędnymi łącznymi NIE stawiamy przecinka?",
        promptPl: "Wskaż grupę spójników łącznych i rozłącznych bez przecinka:",
        promptVn: "",
        options: [
          {
            "text": "i, oraz, ani, ni, lub, albo, czy (o ile nie występują w zdaniu w powtórzeniu).",
            "correct": true
          },
          {
            "text": "ale, lecz, jednak, natomiast, a (wymagają zawsze obowiązkowego przecinka w zapisie).",
            "correct": false
          },
          {
            "text": "ponieważ, bo, gdyż, dlatego że (to spójniki podrzędne wprowadzające zdanie składowe).",
            "correct": false
          },
          {
            "text": "który, jaki, czyj, gdzie, kiedy (to zaimki względne wymagające przecinka przed sobą).",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_6',
        speech: "Przed którymi spójnikami ZAWSZE stawiamy przecinek w zdaniu?",
        promptPl: "Wskaż spójniki przeciwstawne i wynikowe wymagające przecinka:",
        promptVn: "",
        options: [
          {
            "text": "ale, lecz, jednak, a, natomiast, więc, zatem, dlatego.",
            "correct": true
          },
          {
            "text": "i, oraz, lub, albo, czy, ani, tudzież w zdaniu prostym.",
            "correct": false
          },
          {
            "text": "w, na, pod, z, o, nad, przed, za w wyrażeniach przyimkowych.",
            "correct": false
          },
          {
            "text": "żadne spójniki w polszczyźnie nie wymagają stawiania przecinka.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_7',
        speech: "Podaj regułę pisowni «ó» wymiennego:",
        promptPl: "Na jakie litery musi wymieniać się «ó» w innych formach tego wyrazu?",
        promptVn: "",
        options: [
          {
            "text": "Na «o», «e» lub «a» (np. stół – stoły, pióro – pierze, skrót – skracać).",
            "correct": true
          },
          {
            "text": "Na «u» lub «y» (np. woda – wody, rura – rury, dom – domy bez zmiany samogłoski).",
            "correct": false
          },
          {
            "text": "Na «rz» lub «ż» (np. morze – morski, ważyć – waga w odmianie przez przypadki).",
            "correct": false
          },
          {
            "text": "Na żadne litery, litera «ó» występuje zawsze wyłącznie na samym końcu wyrazu.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_8',
        speech: "W jakich końcówkach gramatycznych zawsze piszemy «-ów»?",
        promptPl: "Przypomnij regułę dopełniacza liczby mnogiej rzeczowników męskich:",
        promptVn: "",
        options: [
          {
            "text": "W dopełniaczu l. mn. rzeczowników męskich (np. lasów, uczniów, ptaków).",
            "correct": true
          },
          {
            "text": "W bezokolicznikach czasowników polskich (np. pisać, czytać, rysować).",
            "correct": false
          },
          {
            "text": "W przymiotnikach rodzaju żeńskiego w liczbie pojedynczej (np. mądra szkoła).",
            "correct": false
          },
          {
            "text": "W liczebnikach głównych określających małe liczby od jeden do czterech.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_9',
        speech: "Jakie są wyjątki od pisowni «-ów» kończące się na «-uw»?",
        promptPl: "Wskaż dwa słynne wyjątki geograficzne:",
        promptVn: "",
        options: [
          {
            "text": "Skuwka, zasuwka (od czasowników skuć, zasunąć) – wyjątki z pisownią przez «u».",
            "correct": true
          },
          {
            "text": "Uczniuw, domuw (wyrazy zapisane błędnie w dopełniaczu liczby mnogiej z «u»).",
            "correct": false
          },
          {
            "text": "Ptasuw, lasuw (błędne formy z końcówką -uw zamiast poprawnego polskiego -ów).",
            "correct": false
          },
          {
            "text": "W języku polskim nie istnieją żadne słowa z cząstką -uw ani wyjątki od reguły.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_10',
        speech: "Kiedy piszemy «rz» po spółgłoskach?",
        promptPl: "Wymień spółgłoski, po których występuje «rz»:",
        promptVn: "",
        options: [
          {
            "text": "Po spółgłoskach: b, p, d, t, g, k, ch, j, w (np. brzoza, drzewo, krzak).",
            "correct": true
          },
          {
            "text": "Po samogłoskach: a, o, u, e, i, y (np. auto, okno, ulica w mianowniku).",
            "correct": false
          },
          {
            "text": "Wyłącznie na samym końcu każdego zdania oznajmującego w języku polskim.",
            "correct": false
          },
          {
            "text": "Po spółgłoskach syczących: z, s, c, dz w rdzeniach wyrazów rodzimych.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_11',
        speech: "Podaj wyjątki od reguły «rz po spółgłoskach» (gdzie piszemy «sz»):",
        promptPl: "Wskaż słynne tradycyjne wyjątki z «sz»:",
        promptVn: "",
        options: [
          {
            "text": "Pszczoła, pszenica, kształt, krztusić się, bukszpan (pisane przez «sz»).",
            "correct": true
          },
          {
            "text": "Brzoza, grzyb, wrzesień, chrzan, trzcina (pisane tradycyjnie przez «rz»).",
            "correct": false
          },
          {
            "text": "Chrząszcz, trzcina, spojrzenie, wrzask, grzmot (regularna pisownia po spółgłosce).",
            "correct": false
          },
          {
            "text": "Drzwi, drzewo, przedwiośnie, trzewiki, grzebień (pisane zgodnie z regułą).",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_12',
        speech: "Kiedy piszemy «ch», a kiedy «h»?",
        promptPl: "Wskaż regułę wymiany «ch»:",
        promptVn: "",
        options: [
          {
            "text": "«ch» wymienia się na «sz» (np. ucho – uszy, mucha – muszka w formach pokrewnych).",
            "correct": true
          },
          {
            "text": "«ch» wymienia się na «k» lub «t» (np. dach – daki, groch – groty w deklinacji).",
            "correct": false
          },
          {
            "text": "«h» wymienia się zawsze na «ch» (np. hak – chak, honor – chonor w piśmie).",
            "correct": false
          },
          {
            "text": "W polszczyźnie obie litery pisze się wymiennie według osobistego gustu piszącego.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_13',
        speech: "Na co wymienia się litera «h» w wyrazach pokrewnych?",
        promptPl: "Wskaż regułę wymiany litery «h»:",
        promptVn: "",
        options: [
          {
            "text": "Na «g», «ż» lub «z» (np. wahać się – waga, druh – drużyna, błahy – błazen).",
            "correct": true
          },
          {
            "text": "Na «o» lub «e» (np. hala – hole, herbata – herbatnik bez zmiany spółgłoski).",
            "correct": false
          },
          {
            "text": "Na «cz» lub «sz» (np. hak – haczyk, humor – humoreska w wyrazach pochodnych).",
            "correct": false
          },
          {
            "text": "Litera «h» w języku polskim nigdy pod żadnym pozorem nie podlega żadnej wymianie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_14',
        speech: "Co to jest epitet i jaką pełni funkcję w wierszu?",
        promptPl: "Zdefiniuj podstawowy środek stylistyczny:",
        promptVn: "",
        options: [
          {
            "text": "To określenie rzeczownika (zazwyczaj przymiotnik), uplastyczniające obraz poetycki.",
            "correct": true
          },
          {
            "text": "To rym na końcu linijki wiersza, łączący współbrzmieniem dwa sąsiednie wersy tekstu.",
            "correct": false
          },
          {
            "text": "To podział wiersza na zwrotki, wyznaczający stałe części kompozycji utworu.",
            "correct": false
          },
          {
            "text": "To błąd logiczny w wypowiedzi bohatera, wynikający z nieuwagi lub niewiedzy.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_15',
        speech: "Co to jest metafora (przenośnia)?",
        promptPl: "Wyjaśnij istotę metafory:",
        promptVn: "",
        options: [
          {
            "text": "Niezwykłe połączenie wyrazów, zyskujące nowe, niedosłowne znaczenie (np. złote serce).",
            "correct": true
          },
          {
            "text": "Zwykłe dosłowne porównanie dwóch zjawisk za pomocą łącznika «jak» (np. biały jak śnieg).",
            "correct": false
          },
          {
            "text": "Odmiana czasownika przez osoby, czasy i tryby w zdaniu pojedynczym rozwiniętym.",
            "correct": false
          },
          {
            "text": "Odręczny podpis autora umieszczony pod napisanym utworem lirycznym lub epickim.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_16',
        speech: "Czym charakteryzuje się ożywienie (animizacja)?",
        promptPl: "Wskaż cechę animizacji:",
        promptVn: "",
        options: [
          {
            "text": "Nadanie przedmiotom lub zjawiskom martwym cech istot żywych (np. wiatr zawył w nocy).",
            "correct": true
          },
          {
            "text": "Nadanie zwierzętom wyłącznie cech ludzkich w bajce lub opowiadaniu (personifikacja).",
            "correct": false
          },
          {
            "text": "Zmniejszenie lub pomniejszenie znaczenia wyrazu w stosunku do jego formy bazowej.",
            "correct": false
          },
          {
            "text": "Szczegółowy opis wyglądu zewnętrznego postaci literackiej w pierwszym rozdziale.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_17',
        speech: "A na czym polega uosobienie (personifikacja)?",
        promptPl: "Podaj kluczową różnicę względem animizacji:",
        promptVn: "",
        options: [
          {
            "text": "Nadanie zjawiskom, zwierzętom lub rzeczom cech wyłącznie ludzkich (np. drzewo płakało).",
            "correct": true
          },
          {
            "text": "Wyliczenie wielu przymiotników po przecinku w celu wzbogacenia poetyckiego opisu.",
            "correct": false
          },
          {
            "text": "Zastosowanie wykrzyknika w dialogu w celu wyrażenia gwałtownych emocji bohatera.",
            "correct": false
          },
          {
            "text": "Układ wiersza wolnego bez podziału na rymy oraz bez zachowania równej liczby sylab.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_18',
        speech: "Co to jest onomatopeja w poezji?",
        promptPl: "Zdefiniuj wyraz dźwiękonaśladowczy:",
        promptVn: "",
        options: [
          {
            "text": "Wyraz naśladujący dźwięki z otoczenia (np. szumieć, bzykać, kapać, bum, stuk).",
            "correct": true
          },
          {
            "text": "Wymyślone słowo oznaczające nieznany kolor na palecie barw malarskich w sztuce.",
            "correct": false
          },
          {
            "text": "Nazwisko autora sonetu lub trenu z epoki renesansu zapisanego w podręczniku.",
            "correct": false
          },
          {
            "text": "Świadome wyciszenie głosu przez aktora podczas dramatycznej recytacji na scenie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_19',
        speech: "Jakie elementy są niezbędne w poprawnie napisanym ogłoszeniu?",
        promptPl: "Wymień 5 kluczowych pytań ogłoszenia według standardu CKE:",
        promptVn: "",
        options: [
          {
            "text": "Kto ogłasza? Co ogłasza? Kiedy się odbywa? Gdzie ma miejsce? Jak się skontaktować?",
            "correct": true
          },
          {
            "text": "Jaka jest cena? Jaki kolor? Jaka waga przedmiotu? Kto jest wychowawcą klasy?",
            "correct": false
          },
          {
            "text": "Wyłącznie numer telefonu komórkowego oraz dokładna data urodzenia ogłaszającego.",
            "correct": false
          },
          {
            "text": "Trzy obszerne argumenty z lektury szkolnej potwierdzone cytatami z tekstu utworu.",
            "correct": false
          }
        ]
      },
      {
        id: 'h3_tc_20',
        speech: "Jakie elementy musi zawierać formalne zaproszenie na akademię szkolną?",
        promptPl: "Wskaż obowiązkowe składniki zaproszenia:",
        promptVn: "",
        options: [
          {
            "text": "Kto zaprasza, kogo zaprasza, na jakie wydarzenie, kiedy (data i czas) oraz gdzie (miejsce).",
            "correct": true
          },
          {
            "text": "Tylko adres e-mail organizatora oraz pełna imienna lista zaproszonych gości z klasy.",
            "correct": false
          },
          {
            "text": "Dokładny koszt biletów wstępu oraz szczegółowy jadłospis poczęstunku na uroczystości.",
            "correct": false
          },
          {
            "text": "Krótkie streszczenie lektury obowiązkowej wraz z charakterystyką głównego bohatera.",
            "correct": false
          }
        ]
      }
    ]
  },
  4: {
    type: 'teacher_quiz_5',
    titlePl: 'Pani Nauczycielka (35 HP, 2 dmg)',
    subtitlePl: 'Pani Nauczycielka',
    icon: './assets/Postacie/Nauczycielka.png',
    archetype: 'adaptive',
    enemyName: 'Pani Nauczycielka',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Odpowiedz poprawnie na polecenia lekcyjne — pani wymaga skupienia!',
    questions: [
      {
        id: 'h4_tc_1',
        speech: "Wskaż różnicę między mową zależną a mową niezależną.",
        promptPl: "Jak zapisujemy wypowiedź w mowie niezależnej?",
        promptVn: "",
        options: [
          {
            "text": "Przytaczamy dosłowne słowa bohatera w cudzysłowie lub po myślniku dialogowym.",
            "correct": true
          },
          {
            "text": "Streszczamy sens cudzej wypowiedzi za pomocą spójników podrzędnych «że», «żeby».",
            "correct": false
          },
          {
            "text": "Tłumaczymy słowa bohatera na język obcy bez zachowania oryginalnego szyku zdań.",
            "correct": false
          },
          {
            "text": "Wycinamy wszystkie orzeczenia z wypowiedzi i tworzymy równoważniki w tekście.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_2',
        speech: "Przekształć zdanie w mowie niezależnej: Ania powiedziała: «Lubię czytać książki» na mowę zależną.",
        promptPl: "Wybierz poprawne przekształcenie:",
        promptVn: "",
        options: [
          {
                    "text": "Ania powiedziała, że lubi czytać książki.",
                    "correct": true
          },
          {
                    "text": "Ania krzyczy: książki są super!",
                    "correct": false
          },
          {
                    "text": "Książki lubią czytać Anię.",
                    "correct": false
          },
          {
                    "text": "Czytanie książek przez Anię.",
                    "correct": false
          }
]
      },
      {
        id: 'h4_tc_3',
        speech: "Jaka jest rola tezy w rozprawce problemowej na egzaminie ósmoklasisty?",
        promptPl: "Zdefiniuj pojęcie tezy:",
        promptVn: "",
        options: [
          {
            "text": "To twierdzenie, którego słuszności jesteśmy pewni i będziemy go dowodzić w tekście.",
            "correct": true
          },
          {
            "text": "To przypuszczenie wymagające dopiero rozważenia i weryfikacji w toku wywodu (hipoteza).",
            "correct": false
          },
          {
            "text": "To krótkie streszczenie pierwszego rozdziału omawianej lektury na lekcji języka polskiego.",
            "correct": false
          },
          {
            "text": "To imienny podpis autora pracy umieszczony na samym końcu wypracowania lub rozprawki.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_4',
        speech: "A czym różni się hipoteza od tezy?",
        promptPl: "Wskaż cechę hipotezy we wstępie rozprawki:",
        promptVn: "",
        options: [
          {
            "text": "To opinia niepewna, przypuszczenie, które dopiero badamy argumentami za i przeciw.",
            "correct": true
          },
          {
            "text": "To pewnik niepodlegający dyskusji, uznany przez wszystkich odbiorców bez wątpienia.",
            "correct": false
          },
          {
            "text": "To rażący błąd merytoryczny ucznia wynikający ze słabej znajomości kanonu lektur.",
            "correct": false
          },
          {
            "text": "To dosłowny cytat z wiersza Juliusza Słowackiego otwierający całe wypracowanie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_5',
        speech: "Z jakich trzech głównych części kompozycyjnych składa się wypracowanie egzaminacyjne?",
        promptPl: "Wskaż klasyczną trójdzielną kompozycję tekstu:",
        promptVn: "",
        options: [
          {
            "text": "Wstęp, rozwinięcie oraz zakończenie (każda część wyodrębniona osobnym akapitem).",
            "correct": true
          },
          {
            "text": "Tytuł, podtytuł oraz bibliografia z wykazem przeczytanych książek naukowych.",
            "correct": false
          },
          {
            "text": "Dialog bohaterów, monolog wewnętrzny oraz wskazówki didaskaliów w dramacie.",
            "correct": false
          },
          {
            "text": "Pytanie retoryczne, stanowcze zaprzeczenie oraz podsumowujący wykrzyknik w tekście.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_6',
        speech: "Co to jest akapit i jak go zaznaczamy w tekście rękopiśmiennym?",
        promptPl: "Podaj definicję i graficzny wyróżnik akapitu:",
        promptVn: "",
        options: [
          {
            "text": "To logicznie spójna cząstka tekstu, którą rozpoczynamy od nowej linii z wcięciem.",
            "correct": true
          },
          {
            "text": "To podkreślenie całego wersu czerwoną kredką w celu wyróżnienia ważnej definicji.",
            "correct": false
          },
          {
            "text": "To pionowy margines z lewej strony kartki zeszytu służący na uwagi nauczyciela.",
            "correct": false
          },
          {
            "text": "To ozdobny nawias kwadratowy zamykający ostatnie zdanie na dole zapisanej strony.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_7',
        speech: "Wskaż zdanie ze związkiem zgody: «Bystry uczeń uważnie rozwiązuje trudne zadania».",
        promptPl: "Co łączy podmiot z orzeczeniem w związku zgody?",
        promptVn: "",
        options: [
          {
            "text": "«uczeń rozwiązuje» (podmiot i orzeczenie zgadzają się ściśle w liczbie i osobie).",
            "correct": true
          },
          {
            "text": "«uważnie rozwiązuje» (orzeczenie łączy się z okolicznikiem w związku przynależności).",
            "correct": false
          },
          {
            "text": "«rozwiązuje zadania» (orzeczenie wymaga rzeczownika w określonym przypadku – rząd).",
            "correct": false
          },
          {
            "text": "«bystry uczeń» (rzeczownik łączy się z przydawką określającą cechę wykonawcy).",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_8',
        speech: "A czym charakteryzuje się związek rządu w zdaniu?",
        promptPl: "Wyjaśnij zależność w związku rządu:",
        promptVn: "",
        options: [
          {
            "text": "Wyraz nadrzędny wymaga od wyrazu podrzędnego określonego przypadku (np. czytam książkę).",
            "correct": true
          },
          {
            "text": "Oba wyrazy muszą być zawsze rzeczownikami występującymi w tym samym mianowniku liczby.",
            "correct": false
          },
          {
            "text": "Wyrazy łączą się bez narzucania formy gramatycznej za pomocą okolicznika czasu lub miejsca.",
            "correct": false
          },
          {
            "text": "Związek ten występuje wyłącznie w zdaniach pytających kończących się znakiem zapytania.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_9',
        speech: "Jak nazywamy związek, w którym wyrazem podrzędnym jest część mowy nieodmienna (np. biegł szybko)?",
        promptPl: "Wskaż trzeci typ związku syntaktycznego:",
        promptVn: "",
        options: [
          {
                    "text": "Związek przynależności.",
                    "correct": true
          },
          {
                    "text": "Związek zgody.",
                    "correct": false
          },
          {
                    "text": "Związek rządu.",
                    "correct": false
          },
          {
                    "text": "Związek poboczny.",
                    "correct": false
          }
]
      },
      {
        id: 'h4_tc_10',
        speech: "Wskaż stronę bierną w zdaniu. Które zdanie wyrażone jest w stronie biernej?",
        promptPl: "Wybierz zdanie w stronie biernej:",
        promptVn: "",
        options: [
          {
            "text": "«Nowa szkoła została wybudowana przez rzetelnych budowniczych».",
            "correct": true
          },
          {
            "text": "«Rzetelni budowniczowie wybudowali nową, przestronną szkołę».",
            "correct": false
          },
          {
            "text": "«Budowano nową szkołę w ścisłym centrum miasta od roku».",
            "correct": false
          },
          {
            "text": "«Doświadczeni budowniczowie budują nową szkołę na osiedlu».",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_11',
        speech: "Jakie czasowniki tworzą stronę bierną?",
        promptPl: "Wskaż kategorię czasowników zdolnych do strony biernej:",
        promptVn: "",
        options: [
          {
            "text": "Czasowniki przechodnie (wymagające dopełnienia w bierniku, które staje się podmiotem).",
            "correct": true
          },
          {
            "text": "Wszystkie czasowniki występujące w języku polskim bez żadnego gramatycznego wyjątku.",
            "correct": false
          },
          {
            "text": "Czasowniki nieprzechodnie, które oznaczają ruch lub stan fizjologiczny (np. spać, iść).",
            "correct": false
          },
          {
            "text": "Wyłącznie bezokoliczniki o prostej budowie zakończone na spółgłoskę -ć lub na -c.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_12',
        speech: "Co oznacza pojęcie imiesłowu przymiotnikowego czynnego?",
        promptPl: "Jakie końcówki ma imiesłów przymiotnikowy czynny?",
        promptVn: "",
        options: [
          {
            "text": "Kończy się na: -ący, -ąca, -ące (np. czytający, biegnąca, śpiewające).",
            "correct": true
          },
          {
            "text": "Kończy się na: -ny, -ty, -ony (np. przeczytany, umyta, skończone).",
            "correct": false
          },
          {
            "text": "Kończy się na: -ąc (np. idąc, pisząc, śpiewając podczas lekcji).",
            "correct": false
          },
          {
            "text": "Kończy się na: -łszy, -wszy (np. zjadłszy, przeczytawszy przed snem).",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_13',
        speech: "A jak rozpoznamy imiesłów przymiotnikowy bierny?",
        promptPl: "Wskaż charakterystyczne końcówki imiesłowu biernego:",
        promptVn: "",
        options: [
          {
            "text": "Kończy się na: -ny, -na, -ne, -ty, -ta, -te (np. zrobiony, otwarta, uszyte).",
            "correct": true
          },
          {
            "text": "Kończy się na: -ący, -ąca, -ące (np. biegnący, pracująca, latające w locie).",
            "correct": false
          },
          {
            "text": "Kończy się na: -ąc (np. biegnąc, pracując, rozmawiając z kolegami w sali).",
            "correct": false
          },
          {
            "text": "Kończy się na: -łszy, -wszy (np. przybywszy, zrozumiawszy polecenie zadania).",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_14',
        speech: "Jak odróżnić imiesłów przysłówkowy współczesny od uprzedniego?",
        promptPl: "Wskaż sufiksy i relacje czasowe obu imiesłowów:",
        promptVn: "",
        options: [
          {
            "text": "Współczesny (-ąc, czynność równoczesna), uprzedni (-łszy, -wszy, wcześniejsza).",
            "correct": true
          },
          {
            "text": "Współczesny odmienia się przez przypadki, uprzedni nie podlega żadnej odmianie.",
            "correct": false
          },
          {
            "text": "Oba imiesłowy są rzeczownikami odmieniającymi się przez siedem przypadków w mowie.",
            "correct": false
          },
          {
            "text": "Uprzedni dotyczy wyłącznie przyszłości, a współczesny dotyczy tylko czasu przeszłego.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_15',
        speech: "Jaki jest warunek poprawności zdania z imiesłowowym równoważnikiem zdania?",
        promptPl: "Wskaż kluczową zasadę tożsamości podmiotu:",
        promptVn: "",
        options: [
          {
            "text": "Obie czynności muszą być wykonywane przez ten sam podmiot gramatyczny w zdaniu.",
            "correct": true
          },
          {
            "text": "Zdanie złożone musi zawierać co najmniej dwa wykrzykniki lub znaki zapytania.",
            "correct": false
          },
          {
            "text": "W całym zdaniu nie może występować żaden przecinek rozdzielający wypowiedzi.",
            "correct": false
          },
          {
            "text": "Podmiot gramatyczny musi koniecznie występować w mianowniku liczby mnogiej.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_16',
        speech: "Wskaż błąd w zdaniu: «Idąc do szkoły, zaczął padać deszcz». Dlaczego to zdanie jest błędne?",
        promptPl: "Wyjaśnij błąd składniowy tego sformułowania:",
        promptVn: "",
        options: [
          {
            "text": "Deszcz nie szedł do szkoły – podmiot zdania głównego nie wykonuje czynności imiesłowu.",
            "correct": true
          },
          {
            "text": "Wyraz «deszcz» pisze się tradycyjnie przez «szcz», a w zdaniu użyto błędnej litery.",
            "correct": false
          },
          {
            "text": "W zdaniu brakuje kropki na samym początku oraz cudzysłowu zamykającego wypowiedź.",
            "correct": false
          },
          {
            "text": "W podanym sformułowaniu nie występuje żaden błąd składniowy ani ortograficzny.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_17',
        speech: "Popraw to zdanie, by brzmiało nienagannie pod względem polszczyzny:",
        promptPl: "Wybierz logiczną i poprawną wersję:",
        promptVn: "",
        options: [
          {
            "text": "«Gdy szedłem do szkoły, zaczął padać deszcz» lub «Idąc do szkoły, zmokłem na deszczu».",
            "correct": true
          },
          {
            "text": "«Idąc spokojnie do szkoły deszcz zaczął intensywnie padać na mój plecak i kurtkę».",
            "correct": false
          },
          {
            "text": "«Deszcz szedł do szkoły razem ze mną i zmoczył wszystkie książki oraz zeszyty».",
            "correct": false
          },
          {
            "text": "«Padając do szkoły, zacząłem iść rzęsisty deszcz przez cały korytarz na piętrze».",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_18',
        speech: "Co to jest frazeologizm i dlaczego nie wolno zmieniać jego ustalonej formy?",
        promptPl: "Zdefiniuj związek frazeologiczny:",
        promptVn: "",
        options: [
          {
            "text": "To utarte, stałe połączenie wyrazów o przenośnym sensie (np. rzucać grochem o ścianę).",
            "correct": true
          },
          {
            "text": "To luźna grupa słów tłumaczona dosłownie słowo w słowo z obcego języka nowożytnego.",
            "correct": false
          },
          {
            "text": "To specjalistyczna nazwa działu katalogu biblioteki szkolnej w szkole podstawowej.",
            "correct": false
          },
          {
            "text": "To wzór matematyczny służący do obliczania pola powierzchni figury geometrycznej.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_19',
        speech: "Co oznacza frazeologizm: «mieć węża w kieszeni»?",
        promptPl: "Wyjaśnij znaczenie tego związku:",
        promptVn: "",
        options: [
          {
            "text": "Być niezwykle skąpym i bardzo niechętnym do wydawania jakichkolwiek pieniędzy.",
            "correct": true
          },
          {
            "text": "Hodować jadowite gady w domowym terrarium ze szklanymi drzwiczkami w pokoju.",
            "correct": false
          },
          {
            "text": "Być niezwykle odważnym i nieustraszonym w obliczu bezpośredniego zagrożenia życia.",
            "correct": false
          },
          {
            "text": "Nosić zniszczone i dziurawe ubrania z powodu braku ciepłej odzieży na zimę.",
            "correct": false
          }
        ]
      },
      {
        id: 'h4_tc_20',
        speech: "Co oznacza wyrażenie: «niedźwiedzia przysługa»?",
        promptPl: "Wskaż sens tego powszechnego błędu pomocy:",
        promptVn: "",
        options: [
          {
            "text": "Pomoc wyświadczona w dobrej wierze, która w rzeczywistości przyniosła wielką szkodę.",
            "correct": true
          },
          {
            "text": "Wielka, potężna i niesłychanie wspaniała przysługa ratująca kogoś z poważnych opresji.",
            "correct": false
          },
          {
            "text": "Troskliwa opieka nad dzikimi zwierzętami leśnymi podczas srogiej i mroźnej zimy.",
            "correct": false
          },
          {
            "text": "Kategoryczna odmowa jakiejkolwiek pomocy koledze proszącemu o radę przed egzaminem.",
            "correct": false
          }
        ]
      }
    ]
  },
  5: {
    type: 'teacher_quiz_5',
    titlePl: 'Pani Nauczycielka (35 HP, 2 dmg)',
    subtitlePl: 'Pani Nauczycielka',
    icon: './assets/Postacie/Nauczycielka.png',
    archetype: 'adaptive',
    enemyName: 'Pani Nauczycielka',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Odpowiedz poprawnie na polecenia lekcyjne — pani wymaga skupienia!',
    questions: [
      {
        id: 'h5_tc_1',
        speech: "Przypomnijmy sobie kanon lektur obowiązkowych CKE. Kto napisał epopeję narodową «Pan Tadeusz»?",
        promptPl: "Wskaż autora poematu pisanego trzynastozgłoskowcem:",
        promptVn: "",
        options: [
          {
                    "text": "Adam Mickiewicz.",
                    "correct": true
          },
          {
                    "text": "Juliusz Słowacki.",
                    "correct": false
          },
          {
                    "text": "Henryk Sienkiewicz.",
                    "correct": false
          },
          {
                    "text": "Jan Kochanowski.",
                    "correct": false
          }
]
      },
      {
        id: 'h5_tc_2',
        speech: "O czym opowiada druga część dramatu «Dziady» Adama Mickiewicza?",
        promptPl: "Wskaż sedno obrzędu dziadów w kaplicy cmentarnej:",
        promptVn: "",
        options: [
          {
            "text": "O pogańskim obrzędzie wywoływania duchów zmarłych, by udzielić im pomocy i pouczeń.",
            "correct": true
          },
          {
            "text": "O rycerskich walkach pod Grunwaldem prowadzonych przez wojska polskie i litewskie.",
            "correct": false
          },
          {
            "text": "O niebezpiecznej wyprawie morskiej dookoła świata w poszukiwaniu nowych lądów.",
            "correct": false
          },
          {
            "text": "O budowie nowoczesnej szkoły powszechnej w dworku szlacheckim w Soplicowie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_3',
        speech: "Jaka nauka moralna płynie z pojawienia się duchów lekkich (Józia i Rózi) w «Dziadach cz. II»?",
        promptPl: "Zacytuj lub streść pouczenie duchów dzieci:",
        promptVn: "",
        options: [
          {
            "text": "«Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie» (pełnia człowieczeństwa).",
            "correct": true
          },
          {
            "text": "«Kto nie jadał słodyczy za młodu, ten nie zazna spokoju na ziemi» (nakaz radości życia).",
            "correct": false
          },
          {
            "text": "«Dzieci nie powinny uczyć się pilnie w szkole, lecz bawić się beztrosko na łące».",
            "correct": false
          },
          {
            "text": "Duchy Józia i Rózi nie przekazały żadnego moralnego pouczenia zebranym w kaplicy.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_4',
        speech: "A jaką przestrogę zostawia Widmo Złego Pana, otoczone żarłocznym ptactwem?",
        promptPl: "Wskaż kluczową zasadę miłosierdzia i sprawiedliwości:",
        promptVn: "",
        options: [
          {
            "text": "«Bo kto nie był człowiekiem ni razu, temu człowiek nie pomoże» (kara za brak empatii).",
            "correct": true
          },
          {
            "text": "«Bo kto bogatym był za żywota, temu złoto otworzy bramy niebios» (pochwała majątku).",
            "correct": false
          },
          {
            "text": "«Kto nie karmił ptaków zimą w lesie, ten zostanie ukarany głodem» (troska o zwierzęta).",
            "correct": false
          },
          {
            "text": "Zły Pan został uniewinniony przez guślarza, ponieważ każdy uczynek uchodzi na sucho.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_5',
        speech: "Kto jest autorem komedii «Zemsta» i jakie dwa rody toczą w niej spór o mur graniczny zamku?",
        promptPl: "Podaj autora i zwaśnionych bohaterów:",
        promptVn: "",
        options: [
          {
            "text": "Aleksander Fredro; Cześnik Raptusiewicz i Rejent Milczek.",
            "correct": true
          },
          {
            "text": "Adam Mickiewicz; Jacek Soplica oraz Gerwazy Rębajło.",
            "correct": false
          },
          {
            "text": "Bolesław Prus; Stanisław Wokulski i Ignacy Rzecki.",
            "correct": false
          },
          {
            "text": "Stefan Żeromski; Marcin Borowicz i Andrzej Radek.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_6',
        speech: "Jakie słynne powiedzonko charakteryzuje mściwego, lecz z pozoru cichego Rejenta Milczka?",
        promptPl: "Wskaż ulubione powiedzenie Rejenta:",
        promptVn: "",
        options: [
          {
            "text": "«Niech się dzieje wola Nieba, z nią się zawsze zgadzać trzeba!»",
            "correct": true
          },
          {
            "text": "«Mocium panie, me wezwanie, mocium panie, wnet się stanie!»",
            "correct": false
          },
          {
            "text": "«Kończ waść, wstydu oszczędź, nie przeciągaj tej walki na szable!»",
            "correct": false
          },
          {
            "text": "«Ciemno wszędzie, głucho wszędzie, co to będzie, co to będzie?!»",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_7',
        speech: "A jakie powiedzonko powtarza nieustannie wybuchowy Cześnik Raptusiewicz?",
        promptPl: "Wskaż natręctwo językowe Cześnika:",
        promptVn: "",
        options: [
          {
            "text": "«Mocium panie!» (powtarzane natrętnie przez Cześnika).",
            "correct": true
          },
          {
            "text": "«Wola Nieba!» (ulubione zawołanie Rejenta Milczka).",
            "correct": false
          },
          {
            "text": "«Kończ waść!» (słynne słowa Kmicica w pojedynku).",
            "correct": false
          },
          {
            "text": "«Bądź wierny!» (przesłanie Pana Cogito w wierszu).",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_8',
        speech: "Kto napisał powieść historyczną «Quo vadis», za którą autor otrzymał Nagrodę Nobla?",
        promptPl: "Wskaż polskiego noblistę z 1905 roku:",
        promptVn: "",
        options: [
          {
                    "text": "Henryk Sienkiewicz.",
                    "correct": true
          },
          {
                    "text": "Władysław Reymont.",
                    "correct": false
          },
          {
                    "text": "Czesław Miłosz.",
                    "correct": false
          },
          {
                    "text": "Wisława Szymborska.",
                    "correct": false
          }
]
      },
      {
        id: 'h5_tc_9',
        speech: "W jakim mieście i za panowania którego cesarza toczy się akcja «Quo vadis»?",
        promptPl: "Podaj miejsce i czas historyczny powieści:",
        promptVn: "",
        options: [
          {
            "text": "W starożytnym Rzymie za panowania cesarza Nerona (I wiek n.e.).",
            "correct": true
          },
          {
            "text": "W starożytnych Atenach w złotym wieku za czasów Peryklesa.",
            "correct": false
          },
          {
            "text": "W rewolucyjnym Paryżu w czasie krwawych walk na barykadach.",
            "correct": false
          },
          {
            "text": "W okupowanej Warszawie podczas trwania drugiej wojny światowej.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_10',
        speech: "Kim jest Petroniusz w powieści «Quo vadis»?",
        promptPl: "Określ rolę i przydomek Petroniusza:",
        promptVn: "",
        options: [
          {
            "text": "Patrycjuszem rzymskim, wykwintnym estetą zwanym «arbitrem elegancji» (arbiter elegantiarum).",
            "correct": true
          },
          {
            "text": "Okrutnym cesarzem Rzymu, który podpalił miasto, aby zyskać natchnienie do poematu o Troi.",
            "correct": false
          },
          {
            "text": "Nieustraszonym gladiatorem walczącym na arenie Colosseum o odzyskanie wolności osobistej.",
            "correct": false
          },
          {
            "text": "Charyzmatycznym przywódcą pierwszych chrześcijan ukrywających się w rzymskich katakumbach.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_11',
        speech: "Kto napisał «Małego Księcia» i jakie jest najważniejsze przesłanie Lisa w tej książce?",
        promptPl: "Wskaż autora i słynny cytat o patrzeniu sercem:",
        promptVn: "",
        options: [
          {
            "text": "Antoine de Saint-Exupéry: «Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu».",
            "correct": true
          },
          {
            "text": "Hans Christian Andersen: «Nie martw się, że byłeś w kurniku, jeśli wyklułeś się z łabędziego jaja».",
            "correct": false
          },
          {
            "text": "Juliusz Verne: «Dopóki w żyłach płynie krew, nie wolno tracić nadziei na ratunek z morskiej głębi».",
            "correct": false
          },
          {
            "text": "Jan Brzechwa: «Na wyspach Bergamutach podobno jest kot w butach i mrówka niosąca wielki kamień».",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_12',
        speech: "Co według Lisa oznacza słowo «oswoić» w «Małym Księciu»?",
        promptPl: "Zdefiniuj to kluczowe pojęcie:",
        promptVn: "",
        options: [
          {
            "text": "«Stworzyć więzy» – stać się dla siebie nawzajem kimś jedynym na świecie i odpowiedzialnym.",
            "correct": true
          },
          {
            "text": "«Zamknąć zwierzę» – umieścić dzikie stworzenie w klatce w zoo, aby pokazywać je turystom.",
            "correct": false
          },
          {
            "text": "«Wytresować istotę» – nauczyć zwierzę posłuszeństwa i sztuczek cyrkowych pod batem tresera.",
            "correct": false
          },
          {
            "text": "«Zapomnieć o kimś» – zerwać wszelkie kontakty i powrócić bez żalu na swoją własną planetę.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_13',
        speech: "O czym opowiada książka Aleksandra Kamińskiego «Kamienie na szaniec»?",
        promptPl: "Podaj tło historyczne i bohaterów utworu:",
        promptVn: "",
        options: [
          {
            "text": "O bohaterskiej walce i poświęceniu warszawskich harcerzy Szarych Szeregów (Alka, Zośki i Rudego).",
            "correct": true
          },
          {
            "text": "O wznoszeniu zamków obronnych na Jurze Krakowsko-Częstochowskiej w czasach Kazimierza Wielkiego.",
            "correct": false
          },
          {
            "text": "O egzotycznej wyprawie trójki przyjaciół przez dziewicze dorzecze Amazonki w Ameryce Południowej.",
            "correct": false
          },
          {
            "text": "O wielkim turnieju rycerskim w średniowiecznym Malborku z udziałem rycerzy z całej Europy.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_14',
        speech: "Jak nazywała się słynna akcja pod Arsenałem przeprowadzona przez harcerzy w «Kamieniach na szaniec»?",
        promptPl: "Podaj oficjalną nazwę i cel tej operacji:",
        promptVn: "",
        options: [
          {
            "text": "Akcja Meksyk II – brawurowe odbicie z rąk Gestapo katowanego przyjaciela Jana Bytnara «Rudego».",
            "correct": true
          },
          {
            "text": "Operacja Arktyka – niebezpieczna naukowa wyprawa badawcza na biegun północny w trudnych warunkach.",
            "correct": false
          },
          {
            "text": "Obrona Westerplatte – bohaterski opór polskiej załogi wojskowej przed nawałą wroga we wrześniu 1939 roku.",
            "correct": false
          },
          {
            "text": "Bitwa Warszawska – decydujące starcie zbrojne na przedpolach stolicy w sierpniu 1920 roku.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_15',
        speech: "Kto napisał wiersz patriotyczny «Reduta Ordona» i jakie wydarzenie opisał?",
        promptPl: "Wskaż autora i kontekst powstania dzieła:",
        promptVn: "",
        options: [
          {
            "text": "Adam Mickiewicz; obronę Warszawy na Woli podczas powstania listopadowego w 1831 roku.",
            "correct": true
          },
          {
            "text": "Juliusz Słowacki; bohaterski zryw powstańców na ulicach Warszawy podczas powstania w 1944 roku.",
            "correct": false
          },
          {
            "text": "Jan Kochanowski; odparcie najazdu tatarskiego na wschodnie rubieże Rzeczypospolitej Obojga Narodów.",
            "correct": false
          },
          {
            "text": "Krzysztof Kamil Baczyński; podniebną bitwę o Anglię toczoną przez polskich pilotów Dywizjonu 303.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_16',
        speech: "Kto napisał ballady «Świteź» oraz «Świtezianka»?",
        promptPl: "Wskaż poetę i epokę literacką:",
        promptVn: "",
        options: [
          {
            "text": "Adam Mickiewicz w epoce romantyzmu (tomik «Ballady i romanse» wydany w 1822 roku).",
            "correct": true
          },
          {
            "text": "Ignacy Krasicki w epoce oświecenia (zbiór «Bajki i przypowieści» z morałem społecznym).",
            "correct": false
          },
          {
            "text": "Jan Kochanowski w epoce renesansu (słynny cykl «Trenów» poświęconych zmarłej córce Urszulce).",
            "correct": false
          },
          {
            "text": "Stanisław Lem w wieku dwudziestym (powieść fantastycznonaukowa «Solaris» o odległym kosmosie).",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_17',
        speech: "Czym charakteryzuje się ballada romantyczna jako gatunek synkretyczny?",
        promptPl: "Wymień cechy ballady:",
        promptVn: "",
        options: [
          {
            "text": "Łączy cechy liryki, epiki i dramatu, ma nastrój tajemniczości, ludową moralność i fantastykę.",
            "correct": true
          },
          {
            "text": "Jest wyłącznie wesołą piosenką biesiadną bez żadnej rozbudowanej fabuły ani głębszego sensu.",
            "correct": false
          },
          {
            "text": "To artykuł naukowy w prasie codziennej analizujący obiektywne fakty przyrodnicze i pogodowe.",
            "correct": false
          },
          {
            "text": "To sztuka teatralna bez słów, oparta wyłącznie na mimice twarzy i gestach aktorów na scenie.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_18',
        speech: "O czym opowiada «Opowieść wigilijna» Charlesa Dickensa?",
        promptPl: "Wskaż głównego bohatera i jego przemianę duchową:",
        promptVn: "",
        options: [
          {
            "text": "O chciwym Ebenezerze Scrooge'u, który po wizycie trzech Duchów Świąt staje się człowiekiem dobrodusznym.",
            "correct": true
          },
          {
            "text": "O podróży świętego mikołaja zaprzęgiem reniferów dookoła kuli ziemskiej w wigilijną mroźną noc.",
            "correct": false
          },
          {
            "text": "O zaciętej walce o wielką fabrykę zabawek w dziewiętnastowiecznym wiktoriańskim Londynie.",
            "correct": false
          },
          {
            "text": "O poszukiwaniu legendarnego zaginionego skarbu w opuszczonej kopalni węgla na obrzeżach miasta.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_19',
        speech: "Kto jest autorem utworu «Balladyna» i jaki motyw prowadzi tytułową bohaterkę do zbrodni?",
        promptPl: "Wskaż autora, motyw zbrodni i rekwizyt:",
        promptVn: "",
        options: [
          {
            "text": "Juliusz Słowacki; żądza władzy i korony, rozpoczęta krwawym konkursem zbierania dzbana leśnych malin.",
            "correct": true
          },
          {
            "text": "Adam Mickiewicz; chęć wygrania dorocznego wyścigu konnego i zdobycia uznania w oczach szlachty na Litwie.",
            "correct": false
          },
          {
            "text": "Zygmunt Krasiński; walka o stary gotycki zamek wenecki i odzyskanie utraconego rodowego herbu magnackiego.",
            "correct": false
          },
          {
            "text": "Stanisław Wyspiański; poszukiwanie legendarnego złotego rogu mającego obudzić naród do wspólnego powstania.",
            "correct": false
          }
        ]
      },
      {
        id: 'h5_tc_20',
        speech: "Znakomicie opanowałeś cały materiał języka polskiego od czwartej do ósmej klasy! Jak podsumujesz swoje przygotowanie?",
        promptPl: "Złóż deklarację gotowości na wielki egzamin ósmoklasisty:",
        promptVn: "",
        options: [
          {
            "text": "«Znam zasady gramatyki, ortografii i kanon lektur – jestem w pełni gotowy do egzaminu i finału!»",
            "correct": true
          },
          {
            "text": "«Wszystko dokładnie zapomniałem i niczego nie potrafię powtórzyć przed zbliżającym się testem!»",
            "correct": false
          },
          {
            "text": "«Lektury obowiązkowe są mi zupełnie obojętne i nie zamierzam przypominać sobie żadnych motywów!»",
            "correct": false
          },
          {
            "text": "«Postanawiam uciec z sali egzaminacyjnej przez uchylone okno i nie przystąpić do sprawdzianu!»",
            "correct": false
          }
        ]
      }
    ]
  }
};

NAUCZYCIELKA_FLOOR_ENCOUNTERS.default = NAUCZYCIELKA_FLOOR_ENCOUNTERS[1];
