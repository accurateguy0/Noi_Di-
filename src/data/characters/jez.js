// Jeżyk - Postać Sytuacyjna (Match Up)
// Połączenie pojęć, definicji sytuacyjnych, gramatyki i lektur CKE (4 zestawy na piętro po 20 par = 80 par na piętro).

import { HERO_JEZ_SETS } from '../heroCurriculumEncounters.js';

export const JEZ_FLOOR_ENCOUNTERS = {
  "1": [
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Powitania i Zwroty",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj zwrot do osoby i sytuacji w szkole.",
      "items": [
        {
          "id": "m1_1",
          "word": "Dzień dobry!",
          "defPl": "Rano do pani nauczycielki lub pana dyrektora w drzwiach szkoły",
          "color": "#3b82f6"
        },
        {
          "id": "m1_2",
          "word": "Cześć!",
          "defPl": "Do kolegi z ławki na powitanie przed pierwszą lekcją",
          "color": "#10b981"
        },
        {
          "id": "m1_3",
          "word": "Do widzenia!",
          "defPl": "Wychodzisz z klasy po skończonej lekcji żegnając nauczyciela",
          "color": "#f59e0b"
        },
        {
          "id": "m1_4",
          "word": "Pa, do jutra!",
          "defPl": "Żegnasz się ze swoim najlepszym kumplem po dzwonku w szatni",
          "color": "#ec4899"
        },
        {
          "id": "m1_5",
          "word": "Przepraszam!",
          "defPl": "Przypadkowo potrąciłeś kogoś w tłumie na wąskim korytarzu",
          "color": "#8b5cf6"
        },
        {
          "id": "m1_6",
          "word": "Dziękuję bardzo!",
          "defPl": "Koleżanka pożyczyła ci zapasową linijkę do geometrii",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e1_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e1_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e1_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e1_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f1_e1_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f1_e1_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f1_e1_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f1_e1_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f1_e1_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f1_e1_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e1_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e1_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e1_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e1_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Polecenia Nauczyciela (TPR)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj polecenie nauczyciela do właściwego działania.",
      "items": [
        {
          "id": "m2_1",
          "word": "Usiądźcie!",
          "defPl": "Siadasz na swoim krześle przy biurku po powitaniu klasy",
          "color": "#3b82f6"
        },
        {
          "id": "m2_2",
          "word": "Wstańcie!",
          "defPl": "Wstajesz z krzesła na początku lekcji, gdy wchodzi nauczyciel",
          "color": "#10b981"
        },
        {
          "id": "m2_3",
          "word": "Otwórzcie zeszyt!",
          "defPl": "Bierzesz zeszyt z plecaka i otwierasz na czystej stronie",
          "color": "#f59e0b"
        },
        {
          "id": "m2_4",
          "word": "Posłuchajcie!",
          "defPl": "Przerywasz rozmowy i uważnie słuchasz nagrania lektora",
          "color": "#ec4899"
        },
        {
          "id": "m2_5",
          "word": "Podnieś rękę!",
          "defPl": "Zgłaszasz się w ciszy, gdy znasz rozwiązanie zadania",
          "color": "#8b5cf6"
        },
        {
          "id": "m2_6",
          "word": "Podejdź do tablicy!",
          "defPl": "Wstajesz i podchodzisz pod tablicę napisać wynik kredą",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e2_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e2_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e2_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e2_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f1_e2_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f1_e2_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f1_e2_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f1_e2_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f1_e2_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f1_e2_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e2_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e2_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e2_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e2_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Formy Grzecznościowe w Klasie",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Połącz sytuację szkolną z idealnym zwrotem grzecznościowym.",
      "items": [
        {
          "id": "m1c_1",
          "word": "Czy mogę wyjść?",
          "defPl": "Pytasz nauczyciela, gdy musisz pilnie skorzystać z toalety",
          "color": "#3b82f6"
        },
        {
          "id": "m1c_2",
          "word": "Proszę powtórzyć",
          "defPl": "Gdy nie dosłyszałeś numeru strony lub treści zadania",
          "color": "#10b981"
        },
        {
          "id": "m1c_3",
          "word": "Na zdrowie!",
          "defPl": "Gdy ktoś w ławce obok ciebie głośno kichnie",
          "color": "#f59e0b"
        },
        {
          "id": "m1c_4",
          "word": "Proszę, wejdź!",
          "defPl": "Zapraszasz kolegę, który zapukał do drzwi waszej sali",
          "color": "#ec4899"
        },
        {
          "id": "m1c_5",
          "word": "Czy mogę pożyczyć?",
          "defPl": "Kulturalne pytanie o gumkę, linijkę lub ołówek z piórnika",
          "color": "#8b5cf6"
        },
        {
          "id": "m1c_6",
          "word": "Nie ma za co!",
          "defPl": "Miła odpowiedź, gdy ktoś dziękuje ci za pożyczenie długopisu",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e3_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e3_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e3_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e3_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f1_e3_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f1_e3_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f1_e3_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f1_e3_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f1_e3_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f1_e3_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e3_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e3_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e3_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e3_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Etykieta Ucznia",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj zachowanie do zasady dobrego wychowania.",
      "items": [
        {
          "id": "m1d_1",
          "word": "Wyciszony telefon",
          "defPl": "Aparat schowany w plecaku, nie przeszkadza w prowadzeniu zajęć",
          "color": "#3b82f6"
        },
        {
          "id": "m1d_2",
          "word": "Zgłaszanie się",
          "defPl": "Podniesienie ręki zamiast wykrzykiwania odpowiedzi z ławki",
          "color": "#10b981"
        },
        {
          "id": "m1d_3",
          "word": "Porządek w ławce",
          "defPl": "Brak śmieci i papierków na blacie oraz pod krzesłem",
          "color": "#f59e0b"
        },
        {
          "id": "m1d_4",
          "word": "Punktualność",
          "defPl": "Wejście do sali przed dzwonkiem, szacunek dla czasu innych",
          "color": "#ec4899"
        },
        {
          "id": "m1d_5",
          "word": "Spokój na korytarzu",
          "defPl": "Chodzenie zamiast biegania, dbanie o bezpieczeństwo maluchów",
          "color": "#8b5cf6"
        },
        {
          "id": "m1d_6",
          "word": "Obuwie zmienne",
          "defPl": "Czyste trampki z jasną podeszwą założone w szatni",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e4_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e4_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e4_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e4_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f1_e4_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f1_e4_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f1_e4_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f1_e4_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f1_e4_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f1_e4_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f1_e4_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f1_e4_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f1_e4_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f1_e4_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    }
  ],
  "2": [
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Przybory Szkolne",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj przybór do jego szkolnego zastosowania.",
      "items": [
        {
          "id": "m4_1",
          "word": "Długopis",
          "defPl": "Główne narzędzie do trwałego notowania tematów w zeszycie",
          "color": "#3b82f6"
        },
        {
          "id": "m4_2",
          "word": "Ołówek",
          "defPl": "Narzędzie do szkicowania rysunków i figur geometrycznych",
          "color": "#10b981"
        },
        {
          "id": "m4_3",
          "word": "Gumka",
          "defPl": "Służy do bezśladowego wymazywania błędów narysowanych ołówkiem",
          "color": "#f59e0b"
        },
        {
          "id": "m4_4",
          "word": "Linijka",
          "defPl": "Pozwala odmierzać centymetry i kreślić idealnie proste linie",
          "color": "#ec4899"
        },
        {
          "id": "m4_5",
          "word": "Kredki",
          "defPl": "Zestaw barwnych sztyftów do kolorowania ilustracji na plastyce",
          "color": "#8b5cf6"
        },
        {
          "id": "m4_6",
          "word": "Temperówka",
          "defPl": "Ostrzy złamane i stępione końcówki kredek i ołówków",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e1_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e1_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e1_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e1_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f2_e1_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f2_e1_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f2_e1_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f2_e1_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f2_e1_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f2_e1_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e1_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e1_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e1_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e1_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Liczby i Strony",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj zapis słowny liczby do cyfry w podręczniku.",
      "items": [
        {
          "id": "m5_1",
          "word": "Jedenaście",
          "defPl": "Strona numer 11 z pierwszym ćwiczeniem z czytania",
          "color": "#3b82f6"
        },
        {
          "id": "m5_2",
          "word": "Dwanaście",
          "defPl": "Strona numer 12 z zadaniami o kolorach i trójkątach",
          "color": "#10b981"
        },
        {
          "id": "m5_3",
          "word": "Piętnaście",
          "defPl": "Strona numer 15 będąca wynikiem dodawania 10 + 5",
          "color": "#f59e0b"
        },
        {
          "id": "m5_4",
          "word": "Siedemnaście",
          "defPl": "Strona numer 17 zawierająca czytankę o szkolnym boisku",
          "color": "#ec4899"
        },
        {
          "id": "m5_5",
          "word": "Osiemnaście",
          "defPl": "Strona numer 18 z tabelą liczb i działań matematycznych",
          "color": "#8b5cf6"
        },
        {
          "id": "m5_6",
          "word": "Dwadzieścia",
          "defPl": "Strona numer 20 zamykająca cały drugi rozdział nauki",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e2_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e2_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e2_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e2_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f2_e2_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f2_e2_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f2_e2_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f2_e2_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f2_e2_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f2_e2_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e2_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e2_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e2_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e2_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Części Mowy i Pytania (Klasa 4)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj część mowy do odpowiadających jej pytań.",
      "items": [
        {
          "id": "m2c_1",
          "word": "Rzeczownik",
          "defPl": "Odpowiada na pytania: Kto? Co? (np. uczeń, książka)",
          "color": "#3b82f6"
        },
        {
          "id": "m2c_2",
          "word": "Czasownik",
          "defPl": "Odpowiada na pytania: Co robi? Co się z nim dzieje? (np. czyta)",
          "color": "#10b981"
        },
        {
          "id": "m2c_3",
          "word": "Przymiotnik",
          "defPl": "Odpowiada na pytania: Jaki? Jaka? Jakie? Czyj? (np. mądry)",
          "color": "#f59e0b"
        },
        {
          "id": "m2c_4",
          "word": "Przysłówek",
          "defPl": "Odpowiada na pytania: Jak? Gdzie? Kiedy? (np. szybko, cicho)",
          "color": "#ec4899"
        },
        {
          "id": "m2c_5",
          "word": "Liczebnik",
          "defPl": "Odpowiada na pytania: Ile? Który z kolei? (np. trzy, piąty)",
          "color": "#8b5cf6"
        },
        {
          "id": "m2c_6",
          "word": "Przyimek",
          "defPl": "Nieodmienna część mowy łącząca się z rzeczownikiem (np. w, na, pod)",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e3_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e3_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e3_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e3_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f2_e3_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f2_e3_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f2_e3_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f2_e3_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f2_e3_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f2_e3_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e3_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e3_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e3_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e3_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Formy Użytkowe CKE (Klasa 4)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj formę wypowiedzi do jej kluczowego elementu.",
      "items": [
        {
          "id": "m2d_1",
          "word": "Zaproszenie",
          "defPl": "Musi zawierać 5 elementów: kto, kogo, na co, kiedy i gdzie",
          "color": "#3b82f6"
        },
        {
          "id": "m2d_2",
          "word": "Ogłoszenie",
          "defPl": "Krótka informacja z dokładnym opisem, datą i kontaktem telefonicznym",
          "color": "#10b981"
        },
        {
          "id": "m2d_3",
          "word": "Dedykacja",
          "defPl": "Osobisty wpis w książce: komu, od kogo, z jakiej okazji i kiedy",
          "color": "#f59e0b"
        },
        {
          "id": "m2d_4",
          "word": "Podpis autora",
          "defPl": "Imię i nazwisko umieszczane w prawym dolnym rogu tekstu",
          "color": "#ec4899"
        },
        {
          "id": "m2d_5",
          "word": "Nagłówek",
          "defPl": "Wyróżniony tytuł formy użytkowej (np. ZAPROSZENIE, OGŁOSZENIE)",
          "color": "#8b5cf6"
        },
        {
          "id": "m2d_6",
          "word": "Data i miejsce",
          "defPl": "Określenie czasu i miejscowości umieszczane w prawym górnym rogu",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e4_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e4_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e4_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e4_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f2_e4_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f2_e4_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f2_e4_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f2_e4_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f2_e4_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f2_e4_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f2_e4_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f2_e4_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f2_e4_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f2_e4_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    }
  ],
  "3": [
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Objawy w Gabinecie Medycznym",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj dolegliwość fizyczną do odpowiedniej reakcji.",
      "items": [
        {
          "id": "m3_1",
          "word": "Boli mnie brzuch",
          "defPl": "Kłucie w żołądku, zgłaszasz nauczycielowi wyjście do pielęgniarki",
          "color": "#3b82f6"
        },
        {
          "id": "m3_2",
          "word": "Boli mnie głowa",
          "defPl": "Ciężka głowa od hałasu na przerwie, potrzebujesz odpoczynku w ciszy",
          "color": "#10b981"
        },
        {
          "id": "m3_3",
          "word": "Zimno mi",
          "defPl": "Chłodny przeciąg w sali, prosisz o przymknięcie skrzydła okna",
          "color": "#f59e0b"
        },
        {
          "id": "m3_4",
          "word": "Chcę pić",
          "defPl": "Pragnienie podczas upału, prosisz o butelkę ze świeżą wodą",
          "color": "#ec4899"
        },
        {
          "id": "m3_5",
          "word": "Boli mnie noga",
          "defPl": "Potknięcie na schodach, potrzebujesz chwili na odpoczynek na ławce",
          "color": "#8b5cf6"
        },
        {
          "id": "m3_6",
          "word": "Skaleczyłem palec",
          "defPl": "Zacięcie kartką papieru, prosisz panią o plasterek z opatrunkiem",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e1_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e1_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e1_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e1_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f3_e1_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f3_e1_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f3_e1_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f3_e1_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f3_e1_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f3_e1_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e1_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e1_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e1_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e1_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Sale Szkolne i Pomieszczenia",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj nazwę szkolnej sali do jej głównej funkcji.",
      "items": [
        {
          "id": "m6_1",
          "word": "Szatnia",
          "defPl": "Zmieniasz tam rano obuwie i wieszasz zimową kurtkę na wieszaku",
          "color": "#3b82f6"
        },
        {
          "id": "m6_2",
          "word": "Toaleta",
          "defPl": "Myjesz tam ręce ciepłą wodą i mydłem przed każdym posiłkiem",
          "color": "#10b981"
        },
        {
          "id": "m6_3",
          "word": "Świetlica",
          "defPl": "Czekasz tam bezpiecznie i bawisz się z dziećmi po skończonych lekcjach",
          "color": "#f59e0b"
        },
        {
          "id": "m6_4",
          "word": "Biblioteka",
          "defPl": "Cicha sala z regałami lektur, gdzie wypożyczasz książki do czytania",
          "color": "#ec4899"
        },
        {
          "id": "m6_5",
          "word": "Sekretariat",
          "defPl": "Szkolne biuro dyrekcji, w którym wyrabia się legitymacje uczniowskie",
          "color": "#8b5cf6"
        },
        {
          "id": "m6_6",
          "word": "Sala gimnastyczna",
          "defPl": "Duża hala z drabinkami i parkietem do ćwiczeń na lekcji WF-u",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e2_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e2_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e2_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e2_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f3_e2_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f3_e2_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f3_e2_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f3_e2_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f3_e2_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f3_e2_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e2_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e2_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e2_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e2_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Składnia Zdania Pojedynczego (Klasa 5)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj część zdania do jej roli gramatycznej.",
      "items": [
        {
          "id": "m3c_1",
          "word": "Podmiot",
          "defPl": "Wykonawca czynności odpowiadający na pytania: Kto? Co?",
          "color": "#3b82f6"
        },
        {
          "id": "m3c_2",
          "word": "Orzeczenie",
          "defPl": "Nazwa czynności lub stanu odpowiadająca na: Co robi?",
          "color": "#10b981"
        },
        {
          "id": "m3c_3",
          "word": "Przydawka",
          "defPl": "Określenie rzeczownika: Jaki? Który? Czyj? Ile?",
          "color": "#f59e0b"
        },
        {
          "id": "m3c_4",
          "word": "Dopełnienie",
          "defPl": "Uzupełnienie czasownika w przypadkach zależnych (np. kogo? co?)",
          "color": "#ec4899"
        },
        {
          "id": "m3c_5",
          "word": "Okolicznik",
          "defPl": "Okoliczności czynności: Gdzie? Kiedy? Jak? Dlaczego? Po co?",
          "color": "#8b5cf6"
        },
        {
          "id": "m3c_6",
          "word": "Związek główny",
          "defPl": "Połączenie podmiotu z orzeczeniem tworzące trzon zdania",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e3_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e3_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e3_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e3_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f3_e3_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f3_e3_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f3_e3_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f3_e3_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f3_e3_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f3_e3_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e3_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e3_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e3_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e3_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Typy Liczebników (Klasa 5)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Połącz przykład liczebnika z jego poprawną kategorią.",
      "items": [
        {
          "id": "m3d_1",
          "word": "Pięć książek",
          "defPl": "Liczebnik główny (wskazuje dokładną liczbę obiektów)",
          "color": "#3b82f6"
        },
        {
          "id": "m3d_2",
          "word": "Piąta klasa",
          "defPl": "Liczebnik porządkowy (określa kolejność w szeregu)",
          "color": "#10b981"
        },
        {
          "id": "m3d_3",
          "word": "Czworo dzieci",
          "defPl": "Liczebnik zbiorowy (istoty niedorosłe i rzeczowniki bez l.poj.)",
          "color": "#f59e0b"
        },
        {
          "id": "m3d_4",
          "word": "Półtora kilometra",
          "defPl": "Liczebnik ułamkowy (wyraża niecałkowite wartości)",
          "color": "#ec4899"
        },
        {
          "id": "m3d_5",
          "word": "Kilka ołówków",
          "defPl": "Liczebnik nieokreślony (ogólna, przybliżona ilość)",
          "color": "#8b5cf6"
        },
        {
          "id": "m3d_6",
          "word": "Oboje rodziców",
          "defPl": "Liczebnik zbiorowy dla pary osób różnej płci",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e4_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e4_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e4_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e4_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f3_e4_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f3_e4_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f3_e4_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f3_e4_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f3_e4_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f3_e4_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f3_e4_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f3_e4_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f3_e4_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f3_e4_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    }
  ],
  "4": [
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Stołówka i Dania",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj posiłki i napoje do pory dnia na stołówce.",
      "items": [
        {
          "id": "m7_1",
          "word": "Zupa pomidorowa",
          "defPl": "Gorące pierwsze danie obiadowe podawane z makaronem",
          "color": "#3b82f6"
        },
        {
          "id": "m7_2",
          "word": "Drugie danie",
          "defPl": "Główny posiłek na talerzu: puree ziemniaczane z surówką",
          "color": "#10b981"
        },
        {
          "id": "m7_3",
          "word": "Kompot owocowy",
          "defPl": "Słodki napój z gotowanych truskawek podawany do obiadu",
          "color": "#f59e0b"
        },
        {
          "id": "m7_4",
          "word": "Woda niegazowana",
          "defPl": "Czysta woda mineralna do picia ze szkolnego kranu z filtrem",
          "color": "#ec4899"
        },
        {
          "id": "m7_5",
          "word": "Kanapka z serem",
          "defPl": "Własnoręcznie przygotowane drugie śniadanie w śniadaniówce",
          "color": "#8b5cf6"
        },
        {
          "id": "m7_6",
          "word": "Jabłko ekologiczne",
          "defPl": "Świeży owoc z polskiego sadu rozdawany w programie dla szkół",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e1_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e1_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e1_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e1_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f4_e1_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f4_e1_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f4_e1_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f4_e1_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f4_e1_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f4_e1_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e1_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e1_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e1_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e1_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Zasady Sportu na Boisku",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj zachowanie boiskowe do zasad kultury.",
      "items": [
        {
          "id": "m8_1",
          "word": "Podaj piłkę!",
          "defPl": "Wołasz kolegę, gdy jesteś na czystej pozycji przed bramką",
          "color": "#3b82f6"
        },
        {
          "id": "m8_2",
          "word": "Gramy dalej!",
          "defPl": "Zagrzewasz drużynę do walki po przypadkowo straconym punkcie",
          "color": "#10b981"
        },
        {
          "id": "m8_3",
          "word": "Twoja kolej!",
          "defPl": "Przekazujesz piłkę lub prawo ruchu koledze ze swojej drużyny",
          "color": "#f59e0b"
        },
        {
          "id": "m8_4",
          "word": "Świetny strzał!",
          "defPl": "Pochwała dla kolegi za udane podanie lub pięknego gola",
          "color": "#ec4899"
        },
        {
          "id": "m8_5",
          "word": "Zasada Fair Play",
          "defPl": "Szacunek dla przeciwnika, brak fauli i podanie rąk po końcowym gwizdku",
          "color": "#8b5cf6"
        },
        {
          "id": "m8_6",
          "word": "Przestań, to moje!",
          "defPl": "Stanowcze, asertywne zdanie, gdy ktoś bez pytania wyrywa twoją piłkę",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e2_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e2_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e2_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e2_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f4_e2_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f4_e2_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f4_e2_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f4_e2_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f4_e2_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f4_e2_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e2_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e2_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e2_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e2_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Słowotwórstwo (Klasa 6)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj pojęcie słowotwórcze do jego definicji.",
      "items": [
        {
          "id": "m4c_1",
          "word": "Przedrostek (prefiks)",
          "defPl": "Cząstka dodawana PRZED rdzeniem (np. pod-pisać, za-pisać)",
          "color": "#3b82f6"
        },
        {
          "id": "m4c_2",
          "word": "Przyrostek (sufiks)",
          "defPl": "Cząstka dodawana PO rdzeniu (np. pis-arz, kot-ek)",
          "color": "#10b981"
        },
        {
          "id": "m4c_3",
          "word": "Rdzeń wyrazu",
          "defPl": "Najmniejsza, niepodzielna część wspólna dla rodziny wyrazów",
          "color": "#f59e0b"
        },
        {
          "id": "m4c_4",
          "word": "Wyraz podstawowy",
          "defPl": "Wyraz, od którego tworzymy nowy wyraz (np. dom → domek)",
          "color": "#ec4899"
        },
        {
          "id": "m4c_5",
          "word": "Wyraz pochodny",
          "defPl": "Wyraz utworzony od wyrazu podstawowego za pomocą formantu",
          "color": "#8b5cf6"
        },
        {
          "id": "m4c_6",
          "word": "Rodzina wyrazów",
          "defPl": "Grupa wszystkich wyrazów pokrewnych mających wspólny rdzeń",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e3_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e3_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e3_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e3_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f4_e3_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f4_e3_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f4_e3_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f4_e3_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f4_e3_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f4_e3_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e3_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e3_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e3_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e3_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Pisownia NIE z Częściami Mowy (Klasa 6)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Połącz regułę pisowni „nie” z właściwym przykładem.",
      "items": [
        {
          "id": "m4d_1",
          "word": "NIE z rzeczownikami",
          "defPl": "Piszemy łącznie: np. niepokój, nieprzyjaciel, nieszczęście",
          "color": "#3b82f6"
        },
        {
          "id": "m4d_2",
          "word": "NIE z czasownikami",
          "defPl": "Piszemy rozdzielnie: np. nie lubię, nie umiem, nie pisz",
          "color": "#10b981"
        },
        {
          "id": "m4d_3",
          "word": "NIE z przymiotnikami",
          "defPl": "Piszemy łącznie w st. równym: np. nieduży, niełatwy, mądry",
          "color": "#f59e0b"
        },
        {
          "id": "m4d_4",
          "word": "NIE w stopniu wyższym",
          "defPl": "Piszemy rozdzielnie: np. nie gorszy, nie lepszy, nie cieplej",
          "color": "#ec4899"
        },
        {
          "id": "m4d_5",
          "word": "NIE z liczebnikami",
          "defPl": "Piszemy rozdzielnie: np. nie dwa, nie pierwszy, nie troje",
          "color": "#8b5cf6"
        },
        {
          "id": "m4d_6",
          "word": "NIE z zaimkami",
          "defPl": "Piszemy rozdzielnie: np. nie ja, nie ty, nie każdy",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e4_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e4_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e4_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e4_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f4_e4_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f4_e4_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f4_e4_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f4_e4_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f4_e4_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f4_e4_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f4_e4_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f4_e4_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f4_e4_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f4_e4_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    }
  ],
  "5": [
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Kalendarz Szkolny",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj dni tygodnia do planu nauki i odpoczynku.",
      "items": [
        {
          "id": "m9_1",
          "word": "Poniedziałek",
          "defPl": "Początek tygodnia, pierwszy dzień nauki w szkole po weekendzie",
          "color": "#3b82f6"
        },
        {
          "id": "m9_2",
          "word": "Środa",
          "defPl": "Dokładnie sam środek szkolnego tygodnia dzielący poniedziałek od piątku",
          "color": "#10b981"
        },
        {
          "id": "m9_3",
          "word": "Piątek",
          "defPl": "Ostatni dzień lekcji w klasie, po południu rozpoczyna się upragniony weekend",
          "color": "#f59e0b"
        },
        {
          "id": "m9_4",
          "word": "Sobota",
          "defPl": "Pierwszy dzień weekendu całkowicie wolny od szkoły i odrabiania lekcji",
          "color": "#ec4899"
        },
        {
          "id": "m9_5",
          "word": "Niedziela",
          "defPl": "Dzień rodzinnego odpoczynku i przygotowania plecaka na nowy poniedziałek",
          "color": "#8b5cf6"
        },
        {
          "id": "m9_6",
          "word": "Dzwonek szkolny",
          "defPl": "Dźwiękowy sygnał odmierzający 45-minutowe lekcje i czas przerw",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e1_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e1_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e1_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e1_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f5_e1_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f5_e1_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f5_e1_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f5_e1_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f5_e1_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f5_e1_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e1_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e1_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e1_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e1_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Finałowe Starcie na Arenie",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj elementy finałowego starcia sportowego.",
      "items": [
        {
          "id": "m9b_1",
          "word": "Sala gimnastyczna",
          "defPl": "Wielka arena sportowa z trybunami, na której czeka Boss Piłkarz",
          "color": "#3b82f6"
        },
        {
          "id": "m9b_2",
          "word": "Gwizdek sędziego",
          "defPl": "Głośny sygnał rozpoczynający wielkie finałowe starcie językowe",
          "color": "#10b981"
        },
        {
          "id": "m9b_3",
          "word": "Boss Piłkarz",
          "defPl": "Główny przeciwnik sportowy A0 posiadający aż 61 punktów życia",
          "color": "#f59e0b"
        },
        {
          "id": "m9b_4",
          "word": "Trampki turniejowe",
          "defPl": "Sportowe obuwie bohatera zapewniające maksymalną siłę ataku i zwinność",
          "color": "#ec4899"
        },
        {
          "id": "m9b_5",
          "word": "Tytuł Mistrza A0",
          "defPl": "Złoty puchar i nagroda dla bohatera za pełne opanowanie języka polskiego",
          "color": "#8b5cf6"
        },
        {
          "id": "m9b_6",
          "word": "Złote Jabłko",
          "defPl": "Ostatnia przekąska regenerująca +10 HP przed wejściem na halę",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e2_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e2_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e2_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e2_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f5_e2_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f5_e2_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f5_e2_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f5_e2_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f5_e2_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f5_e2_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e2_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e2_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e2_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e2_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Środki Stylistyczne CKE (Klasa 7/8)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Połącz środek artystyczny z jego definicją i przykładem.",
      "items": [
        {
          "id": "m5c_1",
          "word": "Personifikacja (uosobienie)",
          "defPl": "Nadanie przedmiotom lub zjawiskom cech ludzkich (np. wiatr płacze)",
          "color": "#3b82f6"
        },
        {
          "id": "m5c_2",
          "word": "Animizacja (ożywienie)",
          "defPl": "Nadanie cech istot żywych (np. chmura ryczy jak bestia)",
          "color": "#10b981"
        },
        {
          "id": "m5c_3",
          "word": "Hiperbola (wyolbrzymienie)",
          "defPl": "Przesadne wyolbrzymienie cechy (np. morze łez, sto lat czekałem)",
          "color": "#f59e0b"
        },
        {
          "id": "m5c_4",
          "word": "Oksymoron",
          "defPl": "Zestawienie wyrazów o sprzecznym znaczeniu (np. żywy trup, gorący lód)",
          "color": "#ec4899"
        },
        {
          "id": "m5c_5",
          "word": "Apostrofa",
          "defPl": "Uroczysty, bezpośredni zwrot do bóstwa, osoby lub ojczyzny",
          "color": "#8b5cf6"
        },
        {
          "id": "m5c_6",
          "word": "Epitet metaforyczny",
          "defPl": "Niezwykłe określenie poetyckie (np. skrzydlate myśli, kryształowy sen)",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e3_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e3_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e3_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e3_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f5_e3_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f5_e3_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f5_e3_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f5_e3_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f5_e3_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f5_e3_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e3_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e3_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e3_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e3_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    },
    {
      "type": "hedgehog_matchup",
      "titlePl": "Jeżyk: Motywy Lektur CKE (Klasa 8)",
      "enemyName": "Jeżyk",
      "enemyMaxHp": 24,
      "enemyDamage": 3,
      "subtitlePl": "Jeżyk",
      "icon": "./assets/Postacie/Jez.png",
      "descriptionPl": "Dopasuj rekwizyt i motyw do właściwej lektury obowiązkowej.",
      "items": [
        {
          "id": "m5d_1",
          "word": "Dzban czarnych malin",
          "defPl": "„Balladyna” Juliusza Słowackiego (symbol zazdrości i krwawej zbrodni)",
          "color": "#3b82f6"
        },
        {
          "id": "m5d_2",
          "word": "Róża i planeta B-612",
          "defPl": "„Mały Książę” Antoine de Saint-Exupéry (motyw miłości i odpowiedzialności)",
          "color": "#10b981"
        },
        {
          "id": "m5d_3",
          "word": "Dwa ziarnka gorczycy",
          "defPl": "„Dziady cz. II” Adama Mickiewicza (cierpienie jako warunek zbawienia)",
          "color": "#f59e0b"
        },
        {
          "id": "m5d_4",
          "word": "Kotwica Polski Walczącej",
          "defPl": "„Kamienie na szaniec” Aleksandra Kamińskiego (mały sabotaż Rudego)",
          "color": "#ec4899"
        },
        {
          "id": "m5d_5",
          "word": "Krokodyl i mur graniczny",
          "defPl": "„Zemsta” Aleksandra Fredry (spór Cześnika z Rejentem i zaloty Papkina)",
          "color": "#8b5cf6"
        },
        {
          "id": "m5d_6",
          "word": "Łańcuchy Jakuba Marleya",
          "defPl": "„Opowieść wigilijna” Charlesa Dickensa (kara za skąpstwo i brak serca)",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e4_i7",
          "word": "Start!",
          "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e4_i8",
          "word": "Faul!",
          "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e4_i9",
          "word": "Asekuracja!",
          "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e4_i10",
          "word": "Aut!",
          "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
          "color": "#84cc16"
        },
        {
          "id": "jez_f5_e4_i11",
          "word": "Rzut karny!",
          "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
          "color": "#3b82f6"
        },
        {
          "id": "jez_f5_e4_i12",
          "word": "Ochraniacze",
          "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
          "color": "#10b981"
        },
        {
          "id": "jez_f5_e4_i13",
          "word": "Kask ochronny",
          "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
          "color": "#f59e0b"
        },
        {
          "id": "jez_f5_e4_i14",
          "word": "Bandaż",
          "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
          "color": "#ec4899"
        },
        {
          "id": "jez_f5_e4_i15",
          "word": "Złoty medal",
          "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
          "color": "#8b5cf6"
        },
        {
          "id": "jez_f5_e4_i16",
          "word": "Odwaga",
          "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
          "color": "#06b6d4"
        },
        {
          "id": "jez_f5_e4_i17",
          "word": "Fair play",
          "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
          "color": "#14b8a6"
        },
        {
          "id": "jez_f5_e4_i18",
          "word": "Wytrwałość",
          "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
          "color": "#f97316"
        },
        {
          "id": "jez_f5_e4_i19",
          "word": "Szybki",
          "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
          "color": "#6366f1"
        },
        {
          "id": "jez_f5_e4_i20",
          "word": "Najszybszy",
          "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
          "color": "#84cc16"
        }
      ]
    }
  ]
};

export function getJezEncounter(floor = 1, variant = null, heroId = null) {
  const hid = heroId ? String(heroId).toLowerCase() : null;
  if (hid && HERO_JEZ_SETS[hid]) {
    const sets = Array.isArray(HERO_JEZ_SETS[hid]) ? HERO_JEZ_SETS[hid] : [HERO_JEZ_SETS[hid]];
    const selectedIdx = (variant !== null && variant >= 0 && variant < sets.length)
      ? variant
      : Math.floor(Math.random() * sets.length);
    const data = sets[selectedIdx];
    return {
      type: 'hedgehog_matchup',
      titlePl: data.titlePl,
      enemyName: 'Jeżyk',
      enemyMaxHp: 24,
      enemyDamage: 3,
      subtitlePl: data.subtitlePl,
      icon: './assets/Postacie/Jez.png',
      descriptionPl: data.descriptionPl,
      items: [...data.items]
    };
  }
  const f = Math.max(1, Math.min(5, Number(floor) || 1));
  const pool = JEZ_FLOOR_ENCOUNTERS[f] || JEZ_FLOOR_ENCOUNTERS[1];
  const idx = (variant !== null && variant >= 0 && variant < pool.length)
    ? variant
    : Math.floor(Math.random() * pool.length);
  return pool[idx] || pool[0];
}
