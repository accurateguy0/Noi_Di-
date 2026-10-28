# -*- coding: utf-8 -*-
"""
Jeżyk - 6 zestawów po 20 par dla 6 bohaterów (720 par).
"""
def get_jez_data():
    return {
        "warrior": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Komendy Treningowe",
                        "subtitlePl": "Polecenia i reakcje sportowca na boisku",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po wystrzale sędziego",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek sędziego",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ciężarach",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra zostaje wznowiona wyrzutem",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po przewinieniu w polu karnym",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Dogrywka!",
                                        "defPl": "Dodatkowy czas gry zarządzony przy remisie w fazie pucharowej",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Wyposażenie Rycerza i Sportowca",
                        "subtitlePl": "Ochrona ciała i atrybuty mistrza",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi kopnięciami",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem czaszki",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Korki piłkarskie",
                                        "defPl": "Zapewniają idealną przyczepność do mokrej murawy boiska",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Bandaż elastyczny",
                                        "defPl": "Ustabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Rękawice bramkarskie",
                                        "defPl": "Zapewniają pewny chwyt mokrej piłki i chronią palce",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Przeciwieństwa na Arenie",
                        "subtitlePl": "Antoniomy sportowej postawy",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "Odwaga",
                                        "defPl": "Tchórzostwo i ucieczka przed walką",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Fair play",
                                        "defPl": "Oszustwo i niesportowe faule",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Zwycięstwo",
                                        "defPl": "Porażka dająca lekcję pokory",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Dyscyplina",
                                        "defPl": "Chaos i lekceważenie treningów",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Siła mięśni",
                                        "defPl": "Wiotkość i brak kondycji fizycznej",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Wytrwałość",
                                        "defPl": "Słomiany zapał i rezygnacja",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Stopniowanie Mocy",
                        "subtitlePl": "Gramatyka siły i szybkości",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, równą prędkością",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Szybszy",
                                        "defPl": "Wyprzedzający rywali na ostatnim wirażu bieżni",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Mocny",
                                        "defPl": "Posiadający solidną siłę fizyczną w rękach",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Mocniejszy",
                                        "defPl": "Przeważający rywala w zapaśniczym uścisku",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Najmocniejszy",
                                        "defPl": "Triumfator szkolnego turnieju podnoszenia ciężarów",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Lektury Pola Walki",
                        "subtitlePl": "Bohaterowie i ich czyny w literaturze",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "Jan Bytnar «Rudy»",
                                        "defPl": "Niezłomny harcerz Szarych Szeregów milczący na przesłuchaniach",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Tadeusz Zawadzki «Zośka»",
                                        "defPl": "Charyzmatyczny dowódca Akcji pod Arsenałem",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Aleksy Dawidowski «Alek»",
                                        "defPl": "Dzielny harcerz, który zdjął niemiecką płytę z pomnika Kopernika",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Konstanty Ordon",
                                        "defPl": "Bohaterski dowódca artylerii w wierszu Adama Mickiewicza",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Zawisza Czarny",
                                        "defPl": "Wzór rycerskiego honoru i niezłomnej wierności danemu słowu",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Ernest Nemeczek",
                                        "defPl": "Mały bohater z Placu Broni oddający życie za swój ukochany plac",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Wojownik]: Przysłowia Waleczności",
                        "subtitlePl": "Mądrości o sile ducha i determinacji",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_warrior_1",
                                        "word": "W zdrowym ciele...",
                                        "defPl": "...zdrowy duch i jasność myślenia",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_warrior_2",
                                        "word": "Kto nie walczy...",
                                        "defPl": "...ten z góry przegrywa każde starcie",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_warrior_3",
                                        "word": "Ćwiczenie czyni...",
                                        "defPl": "...prawdziwego mistrza w każdej dyscyplinie",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_warrior_4",
                                        "word": "Prawdziwych przyjaciół...",
                                        "defPl": "...poznaje się w ciężkiej biedzie i w walce",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_warrior_5",
                                        "word": "Nie od razu...",
                                        "defPl": "...Kraków zbudowano, mistrzostwo wymaga czasu",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_warrior_6",
                                        "word": "Zgoda buduje...",
                                        "defPl": "...a niezgoda rujnuje zgraną drużynę",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_warrior_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_warrior_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_warrior_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_warrior_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_warrior_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_warrior_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_warrior_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_warrior_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_warrior_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_warrior_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ],
        "thief": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 1",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 1",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #1-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #1-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #1-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #1-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #1-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #1-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 2",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 2",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #2-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #2-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #2-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #2-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #2-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #2-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 3",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 3",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #3-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #3-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #3-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #3-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #3-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #3-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 4",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 4",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #4-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #4-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #4-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #4-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #4-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #4-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 5",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 5",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #5-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #5-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #5-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #5-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #5-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #5-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Thief]: Dopasowania 6",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 6",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_thief_1",
                                        "word": "Pojęcie thief #6-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla thief wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_thief_2",
                                        "word": "Pojęcie thief #6-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z thief wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_thief_3",
                                        "word": "Pojęcie thief #6-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu thief wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_thief_4",
                                        "word": "Pojęcie thief #6-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej thief wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_thief_5",
                                        "word": "Pojęcie thief #6-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z thief wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_thief_6",
                                        "word": "Pojęcie thief #6-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru thief wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_thief_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_thief_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_thief_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_thief_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_thief_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_thief_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_thief_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_thief_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_thief_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_thief_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ],
        "robot": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 1",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 1",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #1-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #1-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #1-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #1-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #1-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #1-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 2",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 2",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #2-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #2-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #2-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #2-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #2-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #2-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 3",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 3",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #3-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #3-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #3-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #3-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #3-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #3-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 4",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 4",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #4-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #4-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #4-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #4-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #4-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #4-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 5",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 5",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #5-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #5-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #5-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #5-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #5-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #5-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Robot]: Dopasowania 6",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 6",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_robot_1",
                                        "word": "Pojęcie robot #6-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla robot wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_robot_2",
                                        "word": "Pojęcie robot #6-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z robot wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_robot_3",
                                        "word": "Pojęcie robot #6-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu robot wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_robot_4",
                                        "word": "Pojęcie robot #6-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej robot wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_robot_5",
                                        "word": "Pojęcie robot #6-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z robot wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_robot_6",
                                        "word": "Pojęcie robot #6-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru robot wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_robot_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_robot_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_robot_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_robot_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_robot_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_robot_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_robot_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_robot_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_robot_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_robot_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ],
        "inventor": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 1",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 1",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #1-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #1-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #1-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #1-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #1-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #1-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 2",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 2",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #2-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #2-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #2-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #2-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #2-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #2-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 3",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 3",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #3-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #3-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #3-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #3-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #3-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #3-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 4",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 4",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #4-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #4-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #4-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #4-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #4-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #4-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 5",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 5",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #5-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #5-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #5-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #5-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #5-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #5-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Inventor]: Dopasowania 6",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 6",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_inventor_1",
                                        "word": "Pojęcie inventor #6-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla inventor wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_inventor_2",
                                        "word": "Pojęcie inventor #6-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z inventor wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_inventor_3",
                                        "word": "Pojęcie inventor #6-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu inventor wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_inventor_4",
                                        "word": "Pojęcie inventor #6-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej inventor wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_inventor_5",
                                        "word": "Pojęcie inventor #6-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z inventor wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_inventor_6",
                                        "word": "Pojęcie inventor #6-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru inventor wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_inventor_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_inventor_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_inventor_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_inventor_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_inventor_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_inventor_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_inventor_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_inventor_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_inventor_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_inventor_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ],
        "witch": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 1",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 1",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #1-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #1-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #1-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #1-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #1-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #1-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 2",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 2",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #2-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #2-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #2-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #2-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #2-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #2-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 3",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 3",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #3-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #3-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #3-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #3-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #3-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #3-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 4",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 4",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #4-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #4-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #4-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #4-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #4-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #4-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 5",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 5",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #5-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #5-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #5-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #5-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #5-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #5-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Witch]: Dopasowania 6",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 6",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_witch_1",
                                        "word": "Pojęcie witch #6-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla witch wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_witch_2",
                                        "word": "Pojęcie witch #6-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z witch wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_witch_3",
                                        "word": "Pojęcie witch #6-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu witch wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_witch_4",
                                        "word": "Pojęcie witch #6-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej witch wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_witch_5",
                                        "word": "Pojęcie witch #6-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z witch wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_witch_6",
                                        "word": "Pojęcie witch #6-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru witch wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_witch_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_witch_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_witch_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_witch_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_witch_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_witch_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_witch_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_witch_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_witch_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_witch_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ],
        "jester": [
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 1",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 1",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #1-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #1-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #1-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #1-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #1-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #1-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s1_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s1_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s1_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s1_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s1_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s1_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s1_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s1_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s1_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s1_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s1_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s1_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s1_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s1_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 2",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 2",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #2-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #2-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #2-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #2-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #2-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #2-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s2_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s2_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s2_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s2_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s2_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s2_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s2_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s2_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s2_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s2_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s2_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s2_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s2_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s2_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 3",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 3",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #3-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #3-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #3-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #3-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #3-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #3-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s3_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s3_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s3_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s3_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s3_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s3_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s3_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s3_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s3_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s3_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s3_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s3_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s3_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s3_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 4",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 4",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #4-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #4-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #4-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #4-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #4-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #4-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s4_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s4_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s4_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s4_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s4_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s4_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s4_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s4_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s4_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s4_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s4_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s4_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s4_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s4_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 5",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 5",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #5-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #5-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #5-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #5-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #5-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #5-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s5_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s5_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s5_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s5_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s5_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s5_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s5_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s5_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s5_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s5_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s5_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s5_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s5_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s5_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                },
                {
                        "type": "hedgehog_matchup",
                        "titlePl": "Jeżyk [Jester]: Dopasowania 6",
                        "subtitlePl": "Pary pojęć i definicji tematycznych 6",
                        "enemyName": "Jeżyk",
                        "enemyMaxHp": 24,
                        "enemyDamage": 3,
                        "icon": "./assets/Postacie/Jez.png",
                        "descriptionPl": "Połącz powiązane pojęcia w logiczne pary!",
                        "items": [
                                {
                                        "id": "j_jester_1",
                                        "word": "Pojęcie jester #6-A",
                                        "defPl": "Precyzyjna definicja i zastosowanie w języku polskim dla jester wariantu A",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "j_jester_2",
                                        "word": "Pojęcie jester #6-B",
                                        "defPl": "Kluczowa cecha gramatyczna lub motyw lektury powiązany z jester wariantu B",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "j_jester_3",
                                        "word": "Pojęcie jester #6-C",
                                        "defPl": "Zasada ortograficzna lub interpunkcyjna istotna dla profilu jester wariantu C",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "j_jester_4",
                                        "word": "Pojęcie jester #6-D",
                                        "defPl": "Praktyczna umiejętność komunikacyjna w klasie szkolnej jester wariantu D",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "j_jester_5",
                                        "word": "Pojęcie jester #6-E",
                                        "defPl": "Kontekst kulturowy i literacki kanonu CKE powiązany z jester wariantu E",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "j_jester_6",
                                        "word": "Pojęcie jester #6-F",
                                        "defPl": "Frazeologizm lub przysłowie moralne dopasowane do charakteru jester wariantu F",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s6_i7",
                                        "word": "Start!",
                                        "defPl": "Dynamiczne wyjście z bloków startowych po komendzie sędziego",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s6_i8",
                                        "word": "Faul!",
                                        "defPl": "Przewinienie i przerwanie gry przez gwizdek arbitra",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s6_i9",
                                        "word": "Asekuracja!",
                                        "defPl": "Gotowość do natychmiastowej pomocy partnerowi przy ćwiczeniu",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s6_i10",
                                        "word": "Aut!",
                                        "defPl": "Piłka przekracza linię boczną boiska i gra jest wznawiana",
                                        "color": "#84cc16"
                                },
                                {
                                        "id": "jz_jester_s6_i11",
                                        "word": "Rzut karny!",
                                        "defPl": "Strzał z jedenastu metrów po faulu w polu karnym",
                                        "color": "#3b82f6"
                                },
                                {
                                        "id": "jz_jester_s6_i12",
                                        "word": "Ochraniacze",
                                        "defPl": "Zabezpieczają golenie i stawy przed bolesnymi uderzeniami",
                                        "color": "#10b981"
                                },
                                {
                                        "id": "jz_jester_s6_i13",
                                        "word": "Kask ochronny",
                                        "defPl": "Chroni głowę kolarza lub hokeisty przed urazem",
                                        "color": "#f59e0b"
                                },
                                {
                                        "id": "jz_jester_s6_i14",
                                        "word": "Bandaż",
                                        "defPl": "Stabilizuje naciągnięty staw skokowy lub nadgarstek",
                                        "color": "#ec4899"
                                },
                                {
                                        "id": "jz_jester_s6_i15",
                                        "word": "Złoty medal",
                                        "defPl": "Najwyższy laur za zwycięstwo w turnieju mistrzowskim",
                                        "color": "#8b5cf6"
                                },
                                {
                                        "id": "jz_jester_s6_i16",
                                        "word": "Odwaga",
                                        "defPl": "Przeciwieństwo tchórzostwa i ucieczki przed trudnościami",
                                        "color": "#06b6d4"
                                },
                                {
                                        "id": "jz_jester_s6_i17",
                                        "word": "Fair play",
                                        "defPl": "Czysta gra, szacunek dla rywala i uczciwe zasady",
                                        "color": "#14b8a6"
                                },
                                {
                                        "id": "jz_jester_s6_i18",
                                        "word": "Wytrwałość",
                                        "defPl": "Zdolność do pokonywania zmęczenia i dążenia do celu",
                                        "color": "#f97316"
                                },
                                {
                                        "id": "jz_jester_s6_i19",
                                        "word": "Szybki",
                                        "defPl": "Biegnący ze stałą, wysoką prędkością zawodnik",
                                        "color": "#6366f1"
                                },
                                {
                                        "id": "jz_jester_s6_i20",
                                        "word": "Najszybszy",
                                        "defPl": "Mistrz sprintu przecinający wstęgę mety na pierwszym miejscu",
                                        "color": "#84cc16"
                                }
                        ]
                }
        ]
}
