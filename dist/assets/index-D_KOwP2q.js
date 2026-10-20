(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const J=[{id:"node_1",x:18,y:46,type:"chest",titlePl:"Skrzynia Slangów",icon:"./assets/skrzynka.png",completed:!1,descriptionPl:"Otwórz skrzynkę i wysłuchaj wymowy słów, aby zapisać je w Księdze Słów!"},{id:"node_2",x:34,y:59,type:"start",titlePl:"Start",icon:null,completed:!0,descriptionPl:"Tutaj zaczyna Tan! Kliknij sąsiednie pole, aby przejść."},{id:"node_3",x:52,y:44,type:"cat_matching",titlePl:"Kotek Pomocnik",subtitlePl:"Matching Pairs: Dopasuj pary",actionLabel:"ĆWICZ (A)",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["node_4","node_5"],descriptionPl:"Ćwicz z Kotkiem w formie Matching Pairs — odkrywaj po 2 kafelki, aby znaleźć pary!"},{id:"node_4",x:64,y:66,type:"apple",titlePl:"Drugie Śniadanie",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Soczyste jabłko! Dodaje +8 punktów pewności siebie (HP)."},{id:"node_5",x:81,y:51,type:"next_board",titlePl:"Pójdź dalej",actionLabel:"PÓJDŹ DALEJ ➡",icon:"./assets/schody.png",completed:!1,descriptionPl:"Pójdź dalej — przejdź i zresetuj planszę!"}],Y=[["node_1","node_2"],["node_2","node_3"],["node_3","node_4"],["node_3","node_5"],["node_4","node_5"]],ce=[{id:"b2_node_1",x:18,y:51,type:"cat_anagram",titlePl:"Kot Bolo (Odprawa)",subtitlePl:"Anagram: Ułóż słowa z liter",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["b2_node_2"],descriptionPl:"Krótka rozgrzewka z Kotem Bolo (Anagram) — przeciągnij litery na właściwe miejsca!"},{id:"b2_node_2",x:38,y:40,type:"olek_quiz_1",titlePl:"Mijanka (Olek)",subtitlePl:"Quiz: Spotkanie 1 (5 HP)",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b2_node_3","b2_node_4"],descriptionPl:"Pierwszy kontakt z Gejmerem Olkiem w marszu! Olek rzuca „Elo!” — odpowiedz mu!"},{id:"b2_node_3",x:52,y:65,type:"apple",titlePl:"Przekąska",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Regeneracja zdrowia (+8 HP) po pierwszym stresie związanym z odpowiedzią koledze!"},{id:"b2_node_4",x:66,y:42,type:"olek_quiz_2",titlePl:"Dzwonek szkolny (Olek)",subtitlePl:"Quiz: Spotkanie 2 (10 HP)",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b2_node_5"],descriptionPl:"Zaczepka w biegu! Olek pyta „Co tam?”, a po dzwonku rzuca „Dobra, nara!”."},{id:"b2_node_5",x:82,y:53,type:"next_board",titlePl:"Schody na Piętro 3",actionLabel:"PIĘTRO 3 🚪",icon:"./assets/schody.png",completed:!1,descriptionPl:"Schody na Piętro 3 🚪 — odblokowane po zaliczeniu obu mijanek z Olkiem!"}],de=[["b2_node_1","b2_node_2"],["b2_node_2","b2_node_3"],["b2_node_2","b2_node_4"],["b2_node_3","b2_node_4"],["b2_node_4","b2_node_5"]],pe=[{id:"b3_node_1",x:13,y:53,type:"start",titlePl:"Start (Piętro 3)",icon:null,completed:!0,descriptionPl:"Punkt startowy po wejściu po schodach z Piętra 2!"},{id:"b3_node_2",x:29,y:42,type:"cat_wheel",titlePl:"Kotek Pomocnik",subtitlePl:"Spin the Wheel: Nowe słowa",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["b3_node_3","b3_node_4"],descriptionPl:"Zakręć kołem fortuny z Kotkiem Pomocnikiem i przećwicz 3 nowe zwroty o grach!"},{id:"b3_node_3",x:47,y:35,type:"shop",titlePl:"Kramik / Sklepik 🛒",subtitlePl:"Zakupy za monety 🪙",icon:"./assets/kramik.png",completed:!1,descriptionPl:"Sklepik szkolny! Kup Sneakersy (6 🪙), Napój energetyczny (2 🪙) lub Kebab (4 🪙)."},{id:"b3_node_4",x:49,y:67,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Soczyste jabłko! Regeneruje +8 HP przed rozmową z Olkiem."},{id:"b3_node_5",x:68,y:48,type:"olek_spell_word",titlePl:"Olek – Test Nowych Słów",subtitlePl:"Spell the Word: Rozmowa o grach",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b3_node_6"],descriptionPl:"Olek siedzi i gra na telefonie! Użyj nowo poznanych zwrotów w minigrze Spell the Word."},{id:"b3_node_6",x:86,y:53,type:"next_board",titlePl:"Drzwi na Planszę 4",actionLabel:"PLANSZA 4 🚪",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące na Planszę 4! Odblokowują się po rozmowie z Olkiem."}],he=[["b3_node_1","b3_node_2"],["b3_node_2","b3_node_3"],["b3_node_2","b3_node_4"],["b3_node_3","b3_node_4"],["b3_node_3","b3_node_5"],["b3_node_4","b3_node_5"],["b3_node_5","b3_node_6"]],me=[{id:"b4_node_1",x:8,y:52,type:"start",titlePl:"Start (Piętro 4)",icon:null,completed:!0,descriptionPl:"Punkt startowy po wejściu po schodach z Piętra 3!"},{id:"b4_node_2",x:20,y:44,type:"hedgehog_matchup",titlePl:"Jeżyk (40 HP)",subtitlePl:"Match up: Połącz słowa z definicją",icon:"./assets/Postacie/Jez.png",completed:!1,blocksEdgesTo:["b4_node_3"],descriptionPl:"Jeżyk (40 HP, bije po 2 HP)! Przeciągnij słowa do odpowiednich definicji."},{id:"b4_node_3",x:32,y:52,type:"waypoint",titlePl:"Rozdroże korytarza",icon:null,completed:!0,descriptionPl:"Rozdroże korytarza — możesz wybrać drogę górą przez Jabłko lub dołem przez Szczeniaczka!"},{id:"b4_node_4",x:44,y:33,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Soczyste jabłko! Regeneruje +8 HP."},{id:"b4_node_5",x:44,y:69,type:"puppy_find_match",titlePl:"Szczeniaczek (50 HP)",subtitlePl:"Find the Match: Wybierz pasujące w 10s",icon:"./assets/Postacie/Szczeniak.png",completed:!1,blocksEdgesTo:["b4_node_6"],descriptionPl:"Szczeniaczek (50 HP, bije po 1 HP)! Szybko wybierz pasujące słowo (10s)."},{id:"b4_node_6",x:58,y:50,type:"olek_quiz_3",titlePl:"Olek Gejmer (30 HP)",subtitlePl:"Quiz: Slang i Emocje",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b4_node_7"],descriptionPl:"Olek Gejmer (30 HP, bije po 7 HP)! Odpowiedz poprawnie w quizie."},{id:"b4_node_7",x:71,y:42,type:"rabbit_wordsearch",titlePl:"Zając (20 HP)",subtitlePl:"Wordsearch: Wykreślanka (10s)",icon:"./assets/Postacie/Zajac.png",completed:!1,blocksEdgesTo:["b4_node_8","b4_node_9"],descriptionPl:"Szybki Zając (20 HP, bije po 10 HP)! Znajdź 4 ukryte słowa w tabeli liter."},{id:"b4_node_8",x:82,y:66,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Regeneracja +8 HP przed drzwiami!"},{id:"b4_node_9",x:91,y:48,type:"next_board",titlePl:"Drzwi na Planszę 5",actionLabel:"PLANSZA 5 🚪",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące na kolejny poziom!"}],ye=[["b4_node_1","b4_node_2"],["b4_node_2","b4_node_3"],["b4_node_3","b4_node_4"],["b4_node_3","b4_node_5"],["b4_node_4","b4_node_6"],["b4_node_5","b4_node_6"],["b4_node_6","b4_node_7"],["b4_node_7","b4_node_8"],["b4_node_7","b4_node_9"],["b4_node_8","b4_node_9"]],ue=[{id:"b5_node_1",x:8,y:52,type:"start",titlePl:"Start (Klasa)",icon:null,completed:!0,descriptionPl:"Wejście do sali lekcyjnej! Tan siada w ławce obok Olka."},{id:"b5_node_2",x:24,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Drugie śniadanie przed rozpoczęciem lekcji (+8 HP)."},{id:"b5_node_3",x:40,y:50,type:"olek_quiz_5",titlePl:"Olek w ławce (35 HP)",subtitlePl:"Quiz: Rozmowa w ławce",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b5_node_4","b5_node_5"],descriptionPl:"Olek siedzi obok Ciebie w ławce! Użyj nowych zwrotów, aby z nim współpracować na lekcji."},{id:"b5_node_4",x:58,y:34,type:"cat_wheel",titlePl:"Kot Bolo (Koło słów)",subtitlePl:"Spin the wheel: Szkolne zwroty",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["b5_node_6"],descriptionPl:"Kot Bolo pomaga przećwiczyć wymowę i zwroty szkolne!"},{id:"b5_node_5",x:60,y:66,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Przekąska dodająca energii (+8 HP)."},{id:"b5_node_6",x:77,y:48,type:"teacher_quiz_5",titlePl:"Nauczycielka (40 HP)",subtitlePl:"Sprawdzian wiedzy z lekcji",icon:"./assets/Postacie/Nauczycielka.png",completed:!1,blocksEdgesTo:["b5_node_7"],descriptionPl:"Nauczycielka sprawdza, jak radzisz sobie z pracą na lekcji!"},{id:"b5_node_7",x:91,y:50,type:"next_board",titlePl:"Dzwonek na przerwę 🚪",actionLabel:"PRZERWA 🚪",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Dzwonek na przerwę! Czas wyjść z klasy."}],ge=[["b5_node_1","b5_node_2"],["b5_node_1","b5_node_3"],["b5_node_2","b5_node_3"],["b5_node_3","b5_node_4"],["b5_node_3","b5_node_5"],["b5_node_4","b5_node_6"],["b5_node_5","b5_node_6"],["b5_node_6","b5_node_7"]],ke=[{id:"b6_node_1",x:8,y:50,type:"start",titlePl:"Start (Przerwa)",icon:null,completed:!0,descriptionPl:"Dzwonek na przerwę! Tan rozmawia ze znajomymi o tym, co lubi i czego nie znosi."},{id:"b6_node_2",x:25,y:35,type:"b6_hedgehog_matchup",titlePl:"Jeżyk (42 HP)",subtitlePl:"Match up z obrazkami",icon:"./assets/Postacie/Jez.png",completed:!1,blocksEdgesTo:["b6_node_3"],descriptionPl:"Jeżyk (42 HP, 2 dmg) sprawdza znajomość słówek z obrazkami! Przeciągnij słowa do obrazków."},{id:"b6_node_3",x:43,y:52,type:"b6_thoughts_opinion",titlePl:"Myśli (Twoje Gusta)",subtitlePl:"Co o tym sądzisz?",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["b6_node_4"],descriptionPl:"Asset Myśli! Wyraź swoje opinie: Mega, Fajne, Słabe lub Nudne. Nie ma złej odpowiedzi!"},{id:"b6_node_4",x:60,y:36,type:"b6_olek_quiz",titlePl:"Olek (30 HP)",subtitlePl:"Quiz słowny: „Lubię...”",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["b6_node_5"],descriptionPl:"Olek (30 HP, 7 dmg) podaje zdania „Lubię...”. Dopasuj pasującą reakcję!"},{id:"b6_node_5",x:75,y:55,type:"b6_thoughts_fight",titlePl:"Myśli: Lajk czy Hejt? (42 HP)",subtitlePl:"Walka upodobań (5 dmg)",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["b6_node_6"],descriptionPl:"Walka z Myślami (42 HP, 5 dmg)! Rozpoznaj, co polubiłeś (Lajk), a co odrzuciłeś (Hejt)!"},{id:"b6_node_6",x:86,y:36,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Soczyste jabłko dodające +8 HP przed wejściem na salę gimnastyczną!"},{id:"b6_node_7",x:93,y:50,type:"next_board",titlePl:"Przejście na boisko 🚪",actionLabel:"NA BOISKO ⚽",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi na salę gimnastyczną i boisko szkolne, gdzie czeka Boss Piłkarz!"}],be=[["b6_node_1","b6_node_2"],["b6_node_2","b6_node_3"],["b6_node_3","b6_node_4"],["b6_node_4","b6_node_5"],["b6_node_5","b6_node_6"],["b6_node_6","b6_node_7"]],we=[{id:"b7_node_1",x:10,y:50,type:"start",titlePl:"Start (Boisko szkolne)",icon:null,completed:!0,descriptionPl:"Wkroczyłeś na wielkie boisko szkolne! Na środku murawy czeka Boss Piłkarz!"},{id:"b7_node_2",x:30,y:36,type:"apple",titlePl:"Jabłko sportowe",icon:"./assets/apple.png",healAmount:10,completed:!1,descriptionPl:"Wzmacniająca przekąska (+10 HP) przed meczem z Bossem!"},{id:"b7_node_3",x:52,y:50,type:"boss_footballer",titlePl:"Boss Piłkarz (66 HP)",subtitlePl:"Mecz finałowy (5 dmg)",icon:"./assets/Postacie/Pilkarz.png",completed:!1,blocksEdgesTo:["b7_node_4"],descriptionPl:"Finałowy Boss szkoły: Piłkarz (66 HP, 5 dmg)! 10s na ruch, +5s za dobrą odpowiedź!"},{id:"b7_node_4",x:74,y:36,type:"apple",titlePl:"Złote Jabłko",icon:"./assets/apple.png",healAmount:15,completed:!1,descriptionPl:"Złote jabłko mistrza (+15 HP) po wygranym meczu!"},{id:"b7_node_5",x:91,y:50,type:"next_board",titlePl:"Brama do Miasta 🏙️",actionLabel:"DO MIASTA 🏙️",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Brama wyjściowa ze szkoły prowadząca prosto do Miasta!"}],ze=[["b7_node_1","b7_node_2"],["b7_node_2","b7_node_3"],["b7_node_3","b7_node_4"],["b7_node_4","b7_node_5"]],fe=[{id:"c1_node_1",x:8,y:50,type:"start",titlePl:"Start (Sklep w Mieście)",icon:null,completed:!0,descriptionPl:"Wkroczyłeś do Żabki / Biedronki na mieście! Przed Tobą zakupy przy kasie."},{id:"c1_node_2",x:24,y:35,type:"city_cat_wheel",titlePl:"Kot Bolo (Koło zakupów)",subtitlePl:"Zakręć kołem i poznaj zwroty",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["c1_node_3"],descriptionPl:"Kot Bolo pomaga przećwiczyć zwroty przy kasie: reklamówka, bułkę, wodę, czipsy, kartą, gotówką!"},{id:"c1_node_3",x:42,y:52,type:"city_thoughts_shop",titlePl:"Myśli (Wybory przed kasą)",subtitlePl:"Decyzje: produkty, torba, płatność",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["c1_node_4"],descriptionPl:"Asset Myśli! Zdecyduj co kupujesz, czy chcesz torbę i jak płacisz. To zadecyduje o rozmowie z Kasjerką!"},{id:"c1_node_4",x:58,y:36,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Zdrowa przekąska dodająca +8 HP przed podejściem do kasy."},{id:"c1_node_5",x:73,y:52,type:"city_cashier_box",titlePl:"Kasjerka (20 HP, 10 dmg)",subtitlePl:"Open The Box (Czas 5s!)",icon:"./assets/Postacie/Mistrzynia_Zabki.png",completed:!1,blocksEdgesTo:["c1_node_6"],descriptionPl:"Kasjerka (20 HP, 10 dmg)! Otwórz pudełko i w 5 sekund dopasuj obraz do słowa!"},{id:"c1_node_6",x:87,y:36,type:"city_cashier_rank",titlePl:"Kasjerka (20 HP, 5 dmg)",subtitlePl:"Rank Order: Dialog przy kasie",icon:"./assets/Postacie/Mistrzynia_Zabki.png",completed:!1,blocksEdgesTo:["c1_node_7"],descriptionPl:"Kasjerka (20 HP, 5 dmg)! Uporządkuj kwestie dialogu w prawidłowej kolejności (wykorzystaj swoje wybory)!"},{id:"c1_node_7",x:94,y:50,type:"next_board",titlePl:"Wyjście ze sklepu 🚪",actionLabel:"NA MIASTO 🏙️",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi wyjściowe z siatką pełną udanych zakupów na ulice Miasta!"}],ve=[["c1_node_1","c1_node_2"],["c1_node_2","c1_node_3"],["c1_node_3","c1_node_4"],["c1_node_4","c1_node_5"],["c1_node_5","c1_node_6"],["c1_node_6","c1_node_7"]],_e=[{id:"c2_node_1",x:8,y:50,type:"start",titlePl:"Start (Aleja Smaków)",icon:null,completed:!0,descriptionPl:"Aleja Gastronomii w Mieście! Pora zamówić ciepły posiłek: kebab, burger lub pizzę."},{id:"c2_node_2",x:24,y:35,type:"city2_cat_wheel",titlePl:"Kot pomocnik (50 HP, 0 dmg)",subtitlePl:"Spinner: Tłumaczenia PL ➡ VN",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["c2_node_3"],descriptionPl:"Kot pomocnik (50 HP, 0 dmg) kręci spinnerem i uczy tłumaczeń z polskiego na wietnamski!"},{id:"c2_node_3",x:42,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Świeże jabłko dodające +8 HP przed dalszą wędrówką."},{id:"c2_node_4",x:58,y:36,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Kolejne soczyste jabłko dodające +8 HP przed zamówieniem."},{id:"c2_node_5",x:73,y:52,type:"city2_thoughts_food",titlePl:"Myśli (Twoje upodobania)",subtitlePl:"Wybór obrazkowy: sos, rozmiar, sposób",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["c2_node_6"],descriptionPl:"Asset Myśli! Wybierz obrazkowo sos (czosnkowy/ostry), rozmiar (S–XXL) i formę podania (na miejscu/na wynos)!"},{id:"c2_node_6",x:87,y:36,type:"city2_kebab_master",titlePl:"Mistrz Kebaba (30 HP, 3 dmg)",subtitlePl:"Zamawianie jedzenia przy ladzie",icon:"./assets/Postacie/Mistrz_Kebaba.png",completed:!1,blocksEdgesTo:["c2_node_7"],descriptionPl:"Mistrz Kebaba (30 HP, 3 dmg)! Złóż zamówienie, wybierz sos, podziękuj i poczekaj na pyszny posiłek!"},{id:"c2_node_7",x:94,y:50,type:"next_board",titlePl:"Drzwi: Liczby i Pieniądze 🚪",actionLabel:"PLANSZA 3: LICZBY 💰",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące na kolejną planszę: Liczby i pieniądze (1–100): Rozumienie cen, reszty i operowanie numerem telefonu!"}],xe=[["c2_node_1","c2_node_2"],["c2_node_2","c2_node_3"],["c2_node_3","c2_node_4"],["c2_node_4","c2_node_5"],["c2_node_5","c2_node_6"],["c2_node_6","c2_node_7"]],Pe=[{id:"c3_node_1",x:8,y:50,type:"start",titlePl:"Start (Przystanek Miejski)",icon:null,completed:!0,descriptionPl:"Wkroczyłeś na przystanek komunikacji miejskiej! Pora kupić bilet i ruszyć dalej."},{id:"c3_node_2",x:24,y:35,type:"city3_cat_wheel",titlePl:"Kot pomocnik (50 HP, 0 dmg)",subtitlePl:"Pytanie o drogę i komunikacja",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["c3_node_3"],descriptionPl:"Kot pomocnik uczy pytać o drogę oraz wyjaśnia zasady przystanków i biletów ulgowych!"},{id:"c3_node_3",x:42,y:52,type:"apple",titlePl:"Jabłko i Sakiewka Monet 🪙",icon:"./assets/apple.png",healAmount:8,coinsGain:6,completed:!1,descriptionPl:"Soczyste jabłko (+8 HP) oraz znaleziona sakiewka z monetami (+6 monet na biletomat)!"},{id:"c3_node_4",x:58,y:36,type:"city3_biletomat",titlePl:"Biletomat (1 dmg za brak monet)",subtitlePl:"Zakup biletu (20/75/90 min, ulgowy)",icon:"./assets/Postacie/Biletomat.png",completed:!1,blocksEdgesTo:["c3_node_5"],descriptionPl:"Biletomat miejski! Wybierz język, czas biletu i rodzaj (ulgowy/normalny). Pamiętaj o monetach!"},{id:"c3_node_5",x:73,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Przekąska dodająca +8 HP przed wejściem do tramwaju."},{id:"c3_node_6",x:87,y:36,type:"city3_inspector",titlePl:"Inspektor Biletu (Kanar)",subtitlePl:"„Legitymację poproszę” (Type the answer)",icon:"./assets/Postacie/Inspektor_Biletu.png",completed:!1,blocksEdgesTo:["c3_node_7"],descriptionPl:"Kontrola biletów! Jeśli masz bilet ulgowy, Inspektor poprosi o legitymację — wpisz odpowiedź z klawiatury!"},{id:"c3_node_7",x:94,y:50,type:"next_board",titlePl:"Wejście do Zaułka Bossa 🚪",actionLabel:"DO ARENY BOSSA ⚔️",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące do finałowej ścieżki i starcia z Bossem: Cwaniak!"}],Me=[["c3_node_1","c3_node_2"],["c3_node_2","c3_node_3"],["c3_node_3","c3_node_4"],["c3_node_4","c3_node_5"],["c3_node_5","c3_node_6"],["c3_node_6","c3_node_7"]],Te=[{id:"cb_node_1",x:8,y:50,type:"start",titlePl:"Start (Wejście do Zaułka)",icon:null,completed:!0,descriptionPl:"Początek drogi przez miejski zaułek prowadzącej do ostatecznego starcia z Cwaniakiem!"},{id:"cb_node_2",x:23,y:38,type:"step",titlePl:"Krok 1 (Zaułek)",completed:!1,descriptionPl:"Puste pole ścieżki — idziesz pewnym krokiem w głąb zaułka."},{id:"cb_node_3",x:39,y:52,type:"step",titlePl:"Krok 2 (Zaułek)",completed:!1,descriptionPl:"Puste pole ścieżki — zbliżasz się do celu."},{id:"cb_node_4",x:55,y:38,type:"step",titlePl:"Krok 3 (Zaułek)",completed:!1,descriptionPl:"Puste pole ścieżki — słychać kroki przeciwnika."},{id:"cb_node_5",x:71,y:52,type:"step",titlePl:"Krok 4 (Przed Areną)",completed:!1,descriptionPl:"Ostatnie puste pole przed wielką bramą bossa!"},{id:"cb_node_6",x:87,y:38,type:"city_boss_cwaniak",titlePl:"Boss: Cwaniak (68 HP, 5 dmg)",subtitlePl:"Czas 10s (+5s) • Match up • Sorting • Quiz",icon:"./assets/Postacie/Cwaniak.png",completed:!1,blocksEdgesTo:["cb_node_7"],descriptionPl:"Ostateczny Boss: Cwaniak (68 HP, 5 dmg)! Egzamin z całego materiału: czas 10s, +5s za poprawną odpowiedź!"},{id:"cb_node_7",x:95,y:50,type:"next_board",titlePl:"Wielki Finał Gry 🏆",actionLabel:"UKOŃCZENIE GRY 🌟",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Wrota mistrzów! Pokonałeś Cwaniaka i opanowałeś język polski w szkole i na mieście!"}],Se=[["cb_node_1","cb_node_2"],["cb_node_2","cb_node_3"],["cb_node_3","cb_node_4"],["cb_node_4","cb_node_5"],["cb_node_5","cb_node_6"],["cb_node_6","cb_node_7"]],je=[{id:"m3_1_node_1",x:8,y:50,type:"start",titlePl:"Start (Szkolny Korytarz)",icon:null,completed:!0,descriptionPl:"Wchodzisz do szkoły! Czas opanować zwroty ratunkowe w kontakcie z nauczycielami."},{id:"m3_1_node_2",x:23,y:35,type:"m3_cat_wheel",titlePl:"Kot Bolo (Koło Zwrotów Ratunkowych)",subtitlePl:"Zakręć kołem i poznaj wymowę",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m3_1_node_3"],descriptionPl:"Kot Bolo pomaga przećwiczyć ratunkowe zwroty: „Nie rozumiem”, „Proszę powtórzyć”, „Wolniej”!"},{id:"m3_1_node_3",x:38,y:52,type:"shop",titlePl:"Kramik Szkolny",subtitlePl:"Piórnik (4 🪙), Zeszyt (4 🪙), Drożdżówka (2 🪙)",icon:"./assets/kramik.png",completed:!0,descriptionPl:"Szkolny sklepik! Kup piórnik (+1 Atak), zeszyt (+1s Czasu) lub pyszną drożdżówkę (+6 HP)!"},{id:"m3_1_node_4",x:53,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:6,completed:!1,descriptionPl:"Chrupiące jabłko leczące +6 HP przed trudnymi lekcjami."},{id:"m3_1_node_5",x:68,y:52,type:"m3_thoughts",titlePl:"Myśli (Reakcje na Lekcji)",subtitlePl:"Wybierz ratunkową reakcję",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["m3_1_node_6"],descriptionPl:"Myśli Tan w klasie: Nauczyciel mówi za szybko albo masz pilną potrzebę – co wybierasz?"},{id:"m3_1_node_6",x:83,y:35,type:"m3_matchup",titlePl:"Zwroty Ratunkowe (Match Up)",subtitlePl:"Połącz zwroty z sytuacjami",icon:"./assets/Postacie/Jez.png",completed:!1,blocksEdgesTo:["m3_1_node_7"],descriptionPl:"Jeżyk sprawdza Twoje opanowanie zwrotów ratunkowych w klasie!"},{id:"m3_1_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Planszy 2 (Przybory)",actionLabel:"PRZEJDŹ DO PLANSZY 2",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi do gabinetu i sali lekcyjnej – temat: Przybory i brak zadań!"}],Ce=[["m3_1_node_1","m3_1_node_2"],["m3_1_node_2","m3_1_node_3"],["m3_1_node_3","m3_1_node_4"],["m3_1_node_4","m3_1_node_5"],["m3_1_node_5","m3_1_node_6"],["m3_1_node_6","m3_1_node_7"]],Le=[{id:"m3_2_node_1",x:8,y:50,type:"start",titlePl:"Start (Przybory i Brak Zadań)",icon:null,completed:!0,descriptionPl:"Rozpoczynasz lekcję! Uczysz się jak kulturalnie pożyczać przybory i zgłaszać brak zeszytu."},{id:"m3_2_node_2",x:23,y:35,type:"m3_2_cat_wheel",titlePl:"Kot Bolo (Koło Przyborów)",subtitlePl:"Długopis, gumka, linijka i zeszyt",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m3_2_node_3"],descriptionPl:"Kot Bolo uczy nazw szkolnych akcesoriów piórnikowych!"},{id:"m3_2_node_3",x:38,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:6,completed:!1,descriptionPl:"Soczyste jabłko przywracające +6 HP energii."},{id:"m3_2_node_4",x:53,y:35,type:"m3_olek_quiz",titlePl:"Olek (30 HP, 7 dmg)",subtitlePl:"Quiz: Pożyczanie przyborów w ławce",icon:"./assets/Postacie/Szczeniak.png",completed:!1,blocksEdgesTo:["m3_2_node_5"],descriptionPl:"Olek siedzi obok w ławce! Odpowiedz na jego pytania o brakujące przybory."},{id:"m3_2_node_5",x:68,y:52,type:"m3_rank_dialog",titlePl:"Rozmowa z Nauczycielem (Rank Order)",subtitlePl:"Ułóż dialog zgłoszenia braku zadania",icon:"./assets/Postacie/Nauczycielka.png",completed:!1,blocksEdgesTo:["m3_2_node_6"],descriptionPl:"Ułóż kulturalny dialog z nauczycielem w odpowiedniej kolejności!"},{id:"m3_2_node_6",x:83,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:6,completed:!1,descriptionPl:"Drugie jabłko regenerujące +6 HP zdrowia przed lekcją WF-u."},{id:"m3_2_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Planszy 3 (Plan lekcji & WF)",actionLabel:"PRZEJDŹ DO PLANSZY 3",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące na korytarz sportowy i salę gimnastyczną!"}],Ee=[["m3_2_node_1","m3_2_node_2"],["m3_2_node_2","m3_2_node_3"],["m3_2_node_3","m3_2_node_4"],["m3_2_node_4","m3_2_node_5"],["m3_2_node_5","m3_2_node_6"],["m3_2_node_6","m3_2_node_7"]],De=[{id:"m3_3_node_1",x:8,y:50,type:"start",titlePl:"Start (Przed Salą Gimnastyczną)",icon:null,completed:!0,descriptionPl:"Czas na plan lekcji! Na korytarzu czeka energiczny nauczyciel WF-u."},{id:"m3_3_node_2",x:23,y:35,type:"m3_wuefista",titlePl:"Wuefista (30 HP, 3 dmg)",subtitlePl:"Pyta wyłącznie o lekcje WF i sport",icon:"./assets/Postacie/Wuefista.png",completed:!1,blocksEdgesTo:["m3_3_node_3"],descriptionPl:"Wuefista pyta o strój sportowy, rozgrzewkę i gry zespołowe na WF-ie!"},{id:"m3_3_node_3",x:38,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:6,completed:!1,descriptionPl:"Świeże jabłko dodające +6 HP po intensywnym treningu."},{id:"m3_3_node_4",x:53,y:35,type:"m3_3_cat_wheel",titlePl:"Kot Bolo (Dni Tygodnia i Przedmioty)",subtitlePl:"Poniedziałek, środa, piątek, matma, plastyka",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m3_3_node_5"],descriptionPl:"Koło fortuny ze szkolnym planem lekcji i dniami tygodnia!"},{id:"m3_3_node_5",x:68,y:52,type:"m3_schedule_thoughts",titlePl:"Myśli (Ulubione Przedmioty)",subtitlePl:"Co lubisz w szkolnym planie?",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["m3_3_node_6"],descriptionPl:"Wskaż swoje preferencje szkolne – który dzień jest najlżejszy?"},{id:"m3_3_node_6",x:83,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:6,completed:!1,descriptionPl:"Ostatnie jabłko regenerujące +6 HP przed egzaminem z Nauczycielką."},{id:"m3_3_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Bossa (Nauczycielka)",actionLabel:"STAŃ DO EGZAMINU",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Wejście do sali głównej na ostateczny egzamin Modułu 3 z Nauczycielką!"}],He=[["m3_3_node_1","m3_3_node_2"],["m3_3_node_2","m3_3_node_3"],["m3_3_node_3","m3_3_node_4"],["m3_3_node_4","m3_3_node_5"],["m3_3_node_5","m3_3_node_6"],["m3_3_node_6","m3_3_node_7"]],Be=[{id:"m3_b_node_1",x:8,y:50,type:"start",titlePl:"Wejście do Klasy Egzaminacyjnej",icon:null,completed:!0,descriptionPl:"Przed Tobą korytarz prowadzący do biurka Nauczycielki!"},{id:"m3_b_node_2",x:24,y:38,type:"step",titlePl:"Krok 1 (Klasa)",completed:!1,descriptionPl:"Idziesz pewnym krokiem w stronę tablicy."},{id:"m3_b_node_3",x:40,y:52,type:"step",titlePl:"Krok 2 (Klasa)",completed:!1,descriptionPl:"Mijasz szkolne ławki pełne podręczników."},{id:"m3_b_node_4",x:58,y:38,type:"step",titlePl:"Krok 3 (Klasa)",completed:!1,descriptionPl:"Otwierasz zeszyt i jesteś gotowy do odpowiedzi."},{id:"m3_b_node_5",x:74,y:52,type:"step",titlePl:"Krok 4 (Klasa)",completed:!1,descriptionPl:"Ostatni krok przed biurkiem Nauczycielki!"},{id:"m3_b_node_6",x:88,y:38,type:"m3_boss_nauczycielka",titlePl:"Boss: Nauczycielka (68 HP, 5 dmg)",subtitlePl:"Czas 10s (+5s) • Egzamin ze szkoły",icon:"./assets/Postacie/Nauczycielka.png",completed:!1,blocksEdgesTo:["m3_b_node_7"],descriptionPl:"Pani Nauczycielka (68 HP, 5 dmg)! Egzamin ze zwrotów ratunkowych, przyborów i planu lekcji!"},{id:"m3_b_node_7",x:95,y:50,type:"next_board",titlePl:"Przejście do Modułu 4",actionLabel:"IDŹ DO MODUŁU 4 (ZDROWIE)",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Ukończyłeś szkołę! Przejdź do Modułu 4: Ciało, samopoczucie i bezpieczeństwo."}],Ae=[["m3_b_node_1","m3_b_node_2"],["m3_b_node_2","m3_b_node_3"],["m3_b_node_3","m3_b_node_4"],["m3_b_node_4","m3_b_node_5"],["m3_b_node_5","m3_b_node_6"],["m3_b_node_6","m3_b_node_7"]],Ie=[{id:"m4_1_node_1",x:8,y:50,type:"start",titlePl:"Start (Ciało i Potrzeby)",icon:null,completed:!0,descriptionPl:"Rozpoczynasz Moduł 4: Nauka mówienia o swoich potrzebach fizycznych i zdrowiu!"},{id:"m4_1_node_2",x:23,y:35,type:"m4_cat_wheel",titlePl:"Kot Bolo (Koło Potrzeb Ciała)",subtitlePl:"Głodny, pragnienie, zimno, gorąco",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m4_1_node_3"],descriptionPl:"Kot Bolo uczy jak komunikować głód, pragnienie, zimno i potrzebę odpoczynku."},{id:"m4_1_node_3",x:38,y:52,type:"shop",titlePl:"Kramik Apteczny",subtitlePl:"Plaster (7 🪙), Szalik (5 🪙), Woda (3 🪙)",icon:"./assets/kramik.png",completed:!0,descriptionPl:"Apteczny kramik! Kup plaster (+12 HP & +2 Max), szalik (+4 Max HP) lub orzeźwiającą wodę (+8 HP)!"},{id:"m4_1_node_4",x:53,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:7,completed:!1,descriptionPl:"Dobre jabłko wzmacniające odporność (+7 HP)."},{id:"m4_1_node_5",x:68,y:52,type:"m4_physical_thoughts",titlePl:"Myśli (Co czuje Twoje ciało?)",subtitlePl:"Reakcje na sygnały organizmu",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["m4_1_node_6"],descriptionPl:"Asset Myśli: Rozpoznaj, co mówi Twoje ciało po męczącym dniu w szkole."},{id:"m4_1_node_6",x:83,y:35,type:"m4_matchup",titlePl:"Stany Fizyczne (Match Up)",subtitlePl:"Dopasuj sygnał do potrzeby",icon:"./assets/Postacie/Jez.png",completed:!1,blocksEdgesTo:["m4_1_node_7"],descriptionPl:"Jeżyk sprawdza Twoją wiedzę o radzeniu sobie z głodem, zimnem i pragnieniem."},{id:"m4_1_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Gabinetu Pielęgniarki",actionLabel:"PRZEJDŹ DO PLANSZY 2",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi prowadzące do szkolnego gabinetu zdrowia (Plansza 2: Ból i dolegliwości)!"}],Ne=[["m4_1_node_1","m4_1_node_2"],["m4_1_node_2","m4_1_node_3"],["m4_1_node_3","m4_1_node_4"],["m4_1_node_4","m4_1_node_5"],["m4_1_node_5","m4_1_node_6"],["m4_1_node_6","m4_1_node_7"]],$e=[{id:"m4_2_node_1",x:8,y:50,type:"start",titlePl:"Start (Przed Gabinetem Zdrowia)",icon:null,completed:!0,descriptionPl:"Uczysz się precyzyjnie zgłaszać ból głowy, brzucha i gorączkę."},{id:"m4_2_node_2",x:23,y:35,type:"m4_pielegniarka",titlePl:"Pielęgniarka (30 HP, 3 dmg)",subtitlePl:"Rozmowa o dolegliwościach w gabinecie",icon:"./assets/Postacie/Pielegniarka.png",completed:!1,blocksEdgesTo:["m4_2_node_3"],descriptionPl:"Pielęgniarka pyta co Ci dolega, mierzy temperaturę i podaje szklankę wody!"},{id:"m4_2_node_3",x:38,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:7,completed:!1,descriptionPl:"Lecznicze jabłko przywracające +7 HP."},{id:"m4_2_node_4",x:53,y:35,type:"m4_2_cat_wheel",titlePl:"Kot Bolo (Nazwy Dolegliwości)",subtitlePl:"Głowa, brzuch, gardło, gorączka",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m4_2_node_5"],descriptionPl:"Kot Bolo pomaga przećwiczyć trudniejsze zwroty o bólu i lekarstwach."},{id:"m4_2_node_5",x:68,y:52,type:"m4_open_box",titlePl:"Apteczka (Open The Box)",subtitlePl:"Dopasuj objaw w 5 sekund!",icon:"./assets/Postacie/Mistrzynia_Zabki.png",completed:!1,blocksEdgesTo:["m4_2_node_6"],descriptionPl:"Szybkie dopasowanie objawów i pierwszej pomocy w gabinecie pielęgniarki!"},{id:"m4_2_node_6",x:83,y:35,type:"m4_pielegniarka_kontrola",titlePl:"Pielęgniarka (Kontrola 30 HP)",subtitlePl:"Sprawdzenie temperatury po odpoczynku",icon:"./assets/Postacie/Pielegniarka.png",completed:!1,blocksEdgesTo:["m4_2_node_7"],descriptionPl:"Pielęgniarka sprawdza jak się czujesz po odpoczynku i szklance wody!"},{id:"m4_2_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Planszy 3 (Emocje)",actionLabel:"PRZEJDŹ DO PLANSZY 3",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi do sali relaksu – temat: Emocje, złość, zmęczenie i radość!"}],We=[["m4_2_node_1","m4_2_node_2"],["m4_2_node_2","m4_2_node_3"],["m4_2_node_3","m4_2_node_4"],["m4_2_node_4","m4_2_node_5"],["m4_2_node_5","m4_2_node_6"],["m4_2_node_6","m4_2_node_7"]],Oe=[{id:"m4_3_node_1",x:8,y:50,type:"start",titlePl:"Start (Świat Emocji)",icon:null,completed:!0,descriptionPl:"Poznaj swoje emocje: jak nazwać zmęczenie, złość czy spokój."},{id:"m4_3_node_2",x:23,y:35,type:"m4_3_cat_wheel",titlePl:"Kot Bolo (Koło Emocji)",subtitlePl:"Zmęczony, nudzę się, zły, okej",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m4_3_node_3"],descriptionPl:"Kot Bolo uczy jak bez wstydu mówić o swoich uczuciach i potrzebie spokoju."},{id:"m4_3_node_3",x:38,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:7,completed:!1,descriptionPl:"Spokojna chwila z jabłkiem (+7 HP)."},{id:"m4_3_node_4",x:53,y:35,type:"m4_emotions_rank",titlePl:"Dialog o Emocjach (Rank Order)",subtitlePl:"Ułóż rozmowę z przyjacielem",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["m4_3_node_5"],descriptionPl:"Ułóż dialog, w którym tłumaczysz koledze, że masz gorszy dzień i potrzebujesz chwili odpoczynku."},{id:"m4_3_node_5",x:68,y:52,type:"m4_emotion_thoughts",titlePl:"Myśli (Wyciszenie i Relaks)",subtitlePl:"Jak radzisz sobie ze złością?",icon:"./assets/Postacie/Mysli.png",completed:!1,blocksEdgesTo:["m4_3_node_6"],descriptionPl:"Wybierz zdrowe sposoby na rozładowanie szkolnego stresu."},{id:"m4_3_node_6",x:83,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:7,completed:!1,descriptionPl:"Ostatnie jabłko przed wizytą u Doktora Lekarza (+7 HP)."},{id:"m4_3_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Bossa (Lekarz)",actionLabel:"WEJDŹ DO GABINETU LEKARZA",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Drzwi do gabinetu lekarskiego – Boss Lekarz (70 HP, 5 dmg)!"}],qe=[["m4_3_node_1","m4_3_node_2"],["m4_3_node_2","m4_3_node_3"],["m4_3_node_3","m4_3_node_4"],["m4_3_node_4","m4_3_node_5"],["m4_3_node_5","m4_3_node_6"],["m4_3_node_6","m4_3_node_7"]],Ke=[{id:"m4_b_node_1",x:8,y:50,type:"start",titlePl:"Korytarz Przychodni Zdrowia",icon:null,completed:!0,descriptionPl:"Korytarz medyczny prowadzący prosto do gabinetu Lekarza!"},{id:"m4_b_node_2",x:24,y:38,type:"step",titlePl:"Krok 1 (Przychodnia)",completed:!1,descriptionPl:"Idziesz po lśniącej podłodze przychodni."},{id:"m4_b_node_3",x:40,y:52,type:"step",titlePl:"Krok 2 (Przychodnia)",completed:!1,descriptionPl:"Mijasz tablice informacyjne o zdrowym odżywianiu."},{id:"m4_b_node_4",x:58,y:38,type:"m4_pielegniarka_rejestracja",titlePl:"Pielęgniarka (Rejestracja 30 HP)",subtitlePl:"Wywiad medyczny i tętno przed Lekarzem",icon:"./assets/Postacie/Pielegniarka.png",completed:!1,blocksEdgesTo:["m4_b_node_5"],descriptionPl:"Pielęgniarka w przychodni mierzy ciśnienie i tętno przed wejściem do gabinetu Doktora Lekarza!"},{id:"m4_b_node_5",x:74,y:52,type:"step",titlePl:"Krok 4 (Przychodnia)",completed:!1,descriptionPl:"Drzwi gabinetu uchylają się – wkraczasz do środka!"},{id:"m4_b_node_6",x:88,y:38,type:"m4_boss_lekarz",titlePl:"Boss: Lekarz (70 HP, 5 dmg)",subtitlePl:"Czas 10s (+5s) • Egzamin ze Zdrowia",icon:"./assets/Postacie/Lekarz.png",completed:!1,blocksEdgesTo:["m4_b_node_7"],descriptionPl:"Doktor Lekarz (70 HP, 5 dmg)! Egzamin ze stanów fizycznych, dolegliwości i pierwszej pomocy!"},{id:"m4_b_node_7",x:95,y:50,type:"next_board",titlePl:"Przejście do Modułu 5",actionLabel:"IDŹ DO MODUŁU 5 (PASJE & TECH)",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Zaliczyłeś egzamin ze zdrowia! Wkraczasz do Modułu 5: Pasje, technologia i tożsamość."}],Fe=[["m4_b_node_1","m4_b_node_2"],["m4_b_node_2","m4_b_node_3"],["m4_b_node_3","m4_b_node_4"],["m4_b_node_4","m4_b_node_5"],["m4_b_node_5","m4_b_node_6"],["m4_b_node_6","m4_b_node_7"]],Re=[{id:"m5_1_node_1",x:8,y:50,type:"start",titlePl:"Start (Mój Pokój i Tożsamość)",icon:null,completed:!0,descriptionPl:"Wkraczasz do Modułu 5! Uczysz się pewnie mówić o sobie, Wietnamie, wieku i technologii."},{id:"m5_1_node_2",x:23,y:35,type:"m5_cat_wheel",titlePl:"Kot Bolo (Autoprezentacja & Pokój)",subtitlePl:"Wietnam, Polska, wiek, komputer, Wi-Fi",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m5_1_node_3"],descriptionPl:"Kot Bolo uczy jak opowiedzieć o sobie w klasie i pokazać swój pokój!"},{id:"m5_1_node_3",x:38,y:52,type:"shop",titlePl:"Kramik Technologiczny",subtitlePl:"Słuchawki (12 🪙), Powerbank (10 🪙), Breloczek (13 🪙)",icon:"./assets/kramik.png",completed:!0,descriptionPl:"Tech-Kramik! Słuchawki (+2 Atak), Powerbank (+2s Czasu) oraz Szczęśliwy Breloczek (+1 moneta za walkę bez strat)!"},{id:"m5_1_node_4",x:53,y:35,type:"m5_gejmer",titlePl:"Gejmer (30 HP, 3 dmg)",subtitlePl:"Pogawędka o sprzęcie, Wi-Fi i grach",icon:"./assets/Postacie/Gejmer.png",completed:!1,blocksEdgesTo:["m5_1_node_5"],descriptionPl:"Gejmer pyta o Twój komputer, słuchawki gamingowe i ulubione tytuły!"},{id:"m5_1_node_5",x:68,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Energetyczne jabłko gracza (+8 HP)."},{id:"m5_1_node_6",x:83,y:35,type:"m5_matchup",titlePl:"Sprzęt & Autoprezentacja (Match Up)",subtitlePl:"Dopasuj opis do urządzenia",icon:"./assets/Postacie/Jez.png",completed:!1,blocksEdgesTo:["m5_1_node_7"],descriptionPl:"Jeżyk testuje Twoją znajomość technologii, sprzętu i autoprezentacji!"},{id:"m5_1_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Planszy 2 (Piłka Nożna & Social Media)",actionLabel:"PRZEJDŹ DO PLANSZY 2",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Przejście na boisko i do strefy trendów (Plansza 2: Piłka nożna, memy i anime)!"}],Ze=[["m5_1_node_1","m5_1_node_2"],["m5_1_node_2","m5_1_node_3"],["m5_1_node_3","m5_1_node_4"],["m5_1_node_4","m5_1_node_5"],["m5_1_node_5","m5_1_node_6"],["m5_1_node_6","m5_1_node_7"]],Ve=[{id:"m5_2_node_1",x:8,y:50,type:"start",titlePl:"Start (Strefa Sportu i Popkultury)",icon:null,completed:!0,descriptionPl:"Spotykasz na orliku i placu trzech znanych chłopaków: Piłkarza i Cwaniaka!"},{id:"m5_2_node_2",x:23,y:35,type:"m5_pilkarz",titlePl:"Piłkarz (35 HP, 4 dmg)",subtitlePl:"Rozmowa o meczach, Ronaldo i dryblingu",icon:"./assets/Postacie/Pilkarz.png",completed:!1,blocksEdgesTo:["m5_2_node_3"],descriptionPl:"Piłkarz sprawdza Twoją wiedzę o futbolu, szybkich zawodnikach i turniejach!"},{id:"m5_2_node_3",x:38,y:52,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Złote jabłko mistrza orlika (+8 HP)."},{id:"m5_2_node_4",x:53,y:35,type:"m5_cwaniak",titlePl:"Cwaniak (35 HP, 4 dmg)",subtitlePl:"Pogawędka o memach, viralach i anime",icon:"./assets/Postacie/Cwaniak.png",completed:!1,blocksEdgesTo:["m5_2_node_5"],descriptionPl:"Cwaniak testuje czy jesteś na bieżąco z trendami, anime Doraemon i viralami!"},{id:"m5_2_node_5",x:68,y:52,type:"m5_2_cat_wheel",titlePl:"Kot Bolo (Koło Trendów i Popkultury)",subtitlePl:"Mecz, trendy, memy, anime",icon:"./assets/Kotek_Pomoc.png",completed:!1,blocksEdgesTo:["m5_2_node_6"],descriptionPl:"Kot Bolo uczy jak opowiadać kolegom o ulubionych anime, serialach i filmikach."},{id:"m5_2_node_6",x:83,y:35,type:"apple",titlePl:"Jabłko",icon:"./assets/apple.png",healAmount:8,completed:!1,descriptionPl:"Ostatnie jabłko witaminowe (+8 HP) przed wejściem na arenę Instagramerki."},{id:"m5_2_node_7",x:95,y:50,type:"next_board",titlePl:"Drzwi do Bossa (Instagramerka)",actionLabel:"WEJDŹ NA SCENĘ INSTAGRAMERKI",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Wielka arena ostatecznego Bossa gry – Królowa Trendów: Instagramerka!"}],Ue=[["m5_2_node_1","m5_2_node_2"],["m5_2_node_2","m5_2_node_3"],["m5_2_node_3","m5_2_node_4"],["m5_2_node_4","m5_2_node_5"],["m5_2_node_5","m5_2_node_6"],["m5_2_node_6","m5_2_node_7"]],Ge=[{id:"m5_b_node_1",x:8,y:50,type:"start",titlePl:"Czerwony Dywan Trendów",icon:null,completed:!0,descriptionPl:"Scena rozbłyska światłami neonów! Przed Tobą Instagramerka."},{id:"m5_b_node_2",x:24,y:38,type:"step",titlePl:"Krok 1 (Studio Nagrań)",completed:!1,descriptionPl:"Mijasz profesjonalne lampy pierścieniowe i mikrofony."},{id:"m5_b_node_3",x:40,y:52,type:"step",titlePl:"Krok 2 (Studio Nagrań)",completed:!1,descriptionPl:"Muzyka gra w tle, tłum obserwuje transmisję na żywo."},{id:"m5_b_node_4",x:58,y:38,type:"step",titlePl:"Krok 3 (Studio Nagrań)",completed:!1,descriptionPl:"Tan staje przed obiektywem kamery pełen wiary w siebie."},{id:"m5_b_node_5",x:74,y:52,type:"step",titlePl:"Krok 4 (Studio Nagrań)",completed:!1,descriptionPl:"Ostatnie spojrzenie na publiczność – czas na wielki finał!"},{id:"m5_b_node_6",x:88,y:38,type:"m5_boss_instagramerka",titlePl:"Boss: Instagramerka (70 HP, 5 dmg)",subtitlePl:"Czas 10s (+5s) • Wielki Finał Pasji i Trendów",icon:"./assets/Postacie/Instagramerka.png",completed:!1,blocksEdgesTo:["m5_b_node_7"],descriptionPl:"Instagramerka (70 HP, 5 dmg)! Ostateczny egzamin z tożsamości, technologii, futbolu i popkultury!"},{id:"m5_b_node_7",x:95,y:50,type:"next_board",titlePl:"Wielki Puchar Gry Nói Đi!",actionLabel:"ODBIERZ ZŁOTY PUCHAR",icon:"./assets/drzwi.png",completed:!1,descriptionPl:"Ukończenie całej gry! Jesteś prawdziwym mistrzem języka polskiego!"}],Je=[["m5_b_node_1","m5_b_node_2"],["m5_b_node_2","m5_b_node_3"],["m5_b_node_3","m5_b_node_4"],["m5_b_node_4","m5_b_node_5"],["m5_b_node_5","m5_b_node_6"],["m5_b_node_6","m5_b_node_7"]],Ye=[{id:"sneakers",namePl:"SNEAKERSY",price:6,icon:"./assets/sneaker.png",badgePl:"MAX HP +4",descPl:"Wygodne szkolne buty! Na stałe zwiększają Twoje maksymalne życie o +4 HP (i leczą +4 HP).",oneTimePurchase:!0,color:"#8338ec",bigStat:"+4",statEmoji:"👟",subStatText:"Dodaj +4 do Max HP"},{id:"energy_drink",namePl:"ENERGETYK",price:2,icon:"./assets/energetyk.jpg",badgePl:"CZAS +1s",descPl:"Dodaje energii! Zwiększa czas na odpowiedź o +1 sekundę w minigrach czasowych.",oneTimePurchase:!0,color:"#00b4d8",bigStat:"+1s",statEmoji:"⚡",subStatText:"Czas w minigrach +1s"},{id:"kebab",namePl:"KEBAB",price:4,icon:"./assets/kebab.jpg",badgePl:"+10 HP (1x)",descPl:"Ciepły kebab! Przedmiot jednorazowego użytku — regeneruje +10 HP życia.",oneTimePurchase:!0,color:"#f77f00",bigStat:"+10",statEmoji:"🥙",subStatText:"Ulecz natychmiast +10 HP"}],Qe=[{id:"piornik",namePl:"PIÓRNIK",price:4,icon:"./assets/itemki/piornik.png",badgePl:"ATAK +1",descPl:"Praktyczny piórnik ze wszystkimi przyborami! Zwiększa siłę ataku o +1 w walkach i quizach.",oneTimePurchase:!0,color:"#2563eb",bigStat:"+1",statEmoji:"✏️",subStatText:"Dodaje +1 do obrażeń Tan"},{id:"zeszyt",namePl:"ZESZYT",price:4,icon:"./assets/itemki/zeszyt.png",badgePl:"CZAS +1s",descPl:"Czysty zeszyt w kratkę! Zwiększa limit czasu o +1 sekundę w wyzwaniach na czas.",oneTimePurchase:!0,color:"#10b981",bigStat:"+1s",statEmoji:"📓",subStatText:"+1s do czasu na odpowiedź"},{id:"drozdzowka",namePl:"DROŻDŻÓWKA",price:2,icon:"./assets/itemki/drozdzowka.png",badgePl:"+6 HP",descPl:"Świeża drożdżówka ze szkolnego sklepiku! Natychmiast regeneruje +6 HP życia.",oneTimePurchase:!0,color:"#f59e0b",bigStat:"+6",statEmoji:"🥐",subStatText:"Ulecz natychmiast +6 HP"}],Xe=[{id:"plaster",namePl:"PLASTER",price:7,icon:"./assets/itemki/plaster.png",badgePl:"+12 HP & MAX +2",descPl:"Plaster opatrunkowy z apteczki! Regeneruje natychmiast +12 HP i zwiększa Max HP o +2.",oneTimePurchase:!0,color:"#ef4444",bigStat:"+12",statEmoji:"🩹",subStatText:"+12 HP oraz +2 Max HP"},{id:"szalik",namePl:"SZALIK",price:5,icon:"./assets/itemki/szalik.png",badgePl:"MAX HP +4",descPl:"Ciepły szalik chroniący przed przeziębieniem! Na stałe zwiększa maksymalne życie o +4 HP.",oneTimePurchase:!0,color:"#8b5cf6",bigStat:"+4",statEmoji:"🧣",subStatText:"Dodaje +4 do Max HP"},{id:"woda",namePl:"WODA",price:3,icon:"./assets/itemki/woda.jpg",badgePl:"+8 HP",descPl:"Butelka chłodnej wody niegazowanej! Błyskawicznie gasi pragnienie i przywraca +8 HP.",oneTimePurchase:!0,color:"#06b6d4",bigStat:"+8",statEmoji:"💧",subStatText:"Ulecz natychmiast +8 HP"}],et=[{id:"sluchawki",namePl:"SŁUCHAWKI",price:12,icon:"./assets/itemki/sluchawki_gamingowe.png",badgePl:"ATAK +2",descPl:"Słuchawki gamingowe z redukcją szumów! Zwiększają siłę ataku o +2 we wszystkich starciach.",oneTimePurchase:!0,color:"#6366f1",bigStat:"+2",statEmoji:"🎧",subStatText:"Dodaje +2 do obrażeń Tan"},{id:"powerbank",namePl:"POWERBANK",price:10,icon:"./assets/itemki/powerbank.png",badgePl:"CZAS +2s",descPl:"Pojemny powerbank z szybkim ładowaniem! Daje dodatkowe +2 sekundy w zadaniach na czas.",oneTimePurchase:!0,color:"#eab308",bigStat:"+2s",statEmoji:"🔋",subStatText:"+2s w minigrach czasowych"},{id:"breloczek",namePl:"BRELOCZEK",price:13,icon:"./assets/itemki/breloczek.png",badgePl:"PERFECT +1 🪙",descPl:"Szczęśliwy breloczek do plecaka! Daje dodatkową monetę (+1 🪙) za każde starcie bez utraty HP!",oneTimePurchase:!0,color:"#ec4899",bigStat:"+1🪙",statEmoji:"🔑",subStatText:"+1 moneta za walkę bez strat"}],V={encounter_1:{title:"Mijanka z Olkiem",opponentName:"Gejmer Olek",enemyMaxHp:5,enemyDamage:5,tanDamage:5,questions:[{id:"olek_1_q1",olekSpeech:"Elo!",olekSpeakText:"Elo!",promptPl:"Olek mija Cię na korytarzu i rzuca: „Elo!”. Co mu odpowiesz?",promptVn:'Olek đi ngang qua ở hành lang và chào: "Elo!". Tan đáp lại thế nào?',playBellOnStart:!1,options:[{text:"Siema!",vnText:"Chào bạn! (Powitanie)",speakText:"Siema!",correct:!0},{text:"Nara!",vnText:"Tạm biệt nhé! (Pożegnanie)",speakText:"Nara!",correct:!1},{text:"Co tam?",vnText:"Có gì mới không? (Pytanie)",speakText:"Co tam?",correct:!1},{text:"Dobranoc!",vnText:"Chúc ngủ ngon!",speakText:"Dobranoc!",correct:!1}]}]},encounter_2:{title:"Dzwonek szkolny",opponentName:"Gejmer Olek",enemyMaxHp:10,enemyDamage:5,tanDamage:5,questions:[{id:"olek_2_q1",olekSpeech:"Co tam?",olekSpeakText:"Co tam?",promptPl:"Olek zaczepia Cię w biegu i pyta: „Co tam?”. Co oznacza to pytanie?",promptVn:'Olek bắt chuyện khi đang vội và hỏi: "Co tam?". Câu hỏi này có nghĩa là gì?',playBellOnStart:!1,options:[{text:"Co u Ciebie nowego?",vnText:"Có gì mới không? / Dạo này thế nào?",speakText:"Co tam?",correct:!0},{text:"Pożegnanie przed wyjściem",vnText:"Tạm biệt nhé! (Chia tay ra về)",speakText:"Nara!",correct:!1},{text:"Powitanie rano przed szkołą",vnText:"Chào buổi sáng trước giờ học",speakText:"Siema!",correct:!1},{text:"Pytanie, która jest godzina",vnText:"Hỏi xem bây giờ là mấy giờ",speakText:"Która godzina?",correct:!1}]},{id:"olek_2_q2",olekSpeech:"🔔 Dobra, nara!",olekSpeakText:"Dobra, nara!",promptPl:"🔔 Dzwoni dzwonek szkolny! Olek biegnie na lekcję i rzuca: „Dobra, nara!”. Co odpowie Tan?",promptVn:'🔔 Chuông trường reo vang! Olek vội chạy vào lớp và nói: "Dobra, nara!". Tan đáp lại thế nào?',playBellOnStart:!0,options:[{text:"Nara!",vnText:"Tạm biệt nhé! (Pożegnanie)",speakText:"Nara!",correct:!0},{text:"Siema!",vnText:"Chào bạn! (Powitanie)",speakText:"Siema!",correct:!1},{text:"Elo!",vnText:"Chào nhé! (Powitanie)",speakText:"Elo!",correct:!1},{text:"Co tam?",vnText:"Có gì mới không? (Pytanie)",speakText:"Co tam?",correct:!1}]}]},encounter_board4:{title:"Rozmowa o emocjach z Olkiem",opponentName:"Gejmer Olek",enemyMaxHp:30,enemyDamage:7,tanDamage:10,questions:[{id:"olek_b4_q1",olekSpeech:"Stary, wbiłem wczoraj najwyższą rangę w grze!",olekSpeakText:"Stary, wbiłem wczoraj najwyższą rangę w grze!",promptPl:"Olek chwali się wielkim sukcesem w grze. Jak zareagujesz z entuzjazmem?",options:[{text:"Sztos! Gratulacje!",correct:!0},{text:"Masakra, strasznie słabo.",correct:!1},{text:"Przypał, nie mów nikomu.",correct:!1},{text:"Nara, już idę.",correct:!1}]},{id:"olek_b4_q2",olekSpeech:"A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...",olekSpeakText:"A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...",promptPl:"Olek opowiada o fatalnej passie porażek. Jak to podsumujesz?",options:[{text:"Masakra, współczuję ci!",correct:!0},{text:"Sztos, świetna robota!",correct:!1},{text:"Dobra, nara!",correct:!1},{text:"Grasz w...?",correct:!1}]},{id:"olek_b4_q3",olekSpeech:"Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!",olekSpeakText:"Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!",promptPl:"Co to za wstydliwa i niefortunna wpadka?",options:[{text:"Ale przypał!",correct:!0},{text:"Czysty sztos!",correct:!1},{text:"Jaki masz nick?",correct:!1},{text:"Siema!",correct:!1}]}]},encounter_board5:{title:"Rozmowa w ławce z Olkiem",opponentName:"Gejmer Olek",enemyMaxHp:35,enemyDamage:5,tanDamage:12,questions:[{id:"olek_b5_q1",olekSpeech:"Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!",olekSpeakText:"Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!",promptPl:"Jak zapytasz Olka, czy ma zapasowy długopis do pożyczenia?",options:[{text:"🖊️ „Olek, masz długopis?”",correct:!0},{text:"📖 „Która strona?”",correct:!1},{text:"🚪 „Nara!”",correct:!1}]},{id:"olek_b5_q2",olekSpeech:"Nauczyciel podał numer strony z zadaniem do zrobienia!",olekSpeakText:"Nauczyciel podał numer strony z zadaniem do zrobienia!",promptPl:"Nie dosłyszałeś numeru strony. Jak zapytasz o to Olka?",options:[{text:"📖 „Która strona?”",correct:!0},{text:"🎮 „Grasz w...?”",correct:!1},{text:"🤦‍♂️ „Przypał!”",correct:!1}]},{id:"olek_b5_q3",olekSpeech:"Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!",olekSpeakText:"Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!",promptPl:"Olek podał Ci długopis i pomógł. Jak mu naturalnie podziękujesz?",options:[{text:"🙏 „Dzięki!”",correct:!0},{text:"🤜🤛 „Siema!”",correct:!1},{text:"😱 „Masakra!”",correct:!1}]}]},encounter_teacher:{title:"Sprawdzian z Nauczycielką",opponentName:"Nauczycielka",opponentAvatar:"./assets/Postacie/Nauczycielka.png",spriteClass:"sprite-nauczycielka",enemyMaxHp:40,enemyDamage:6,tanDamage:20,questions:[{id:"teacher_b5_q1",olekSpeech:"Tan, zadanie na tablicy jest trudne! Poproś kolegę o współpracę.",olekSpeakText:"Tan, zadanie na tablicy jest trudne! Poproś kolegę o współpracę.",promptPl:"Jak uprzejmie poprosisz Olka o pomoc w zadaniu?",options:[{text:"🤝 „Olek, pomóż mi, proszę.”",correct:!0},{text:"⚡ „Dasz ID?”",correct:!1},{text:"😴 „Dobranoc!”",correct:!1}]},{id:"teacher_b5_q2",olekSpeech:"Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.",olekSpeakText:"Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.",promptPl:"Jak zapytasz Olka, czy możesz spojrzeć do jego zeszytu?",options:[{text:"📓 „Olek, mogę zobaczyć zeszyt?”",correct:!0},{text:"👟 „Mam sneakersy!”",correct:!1},{text:"🚪 „Nara!”",correct:!1}]}]},encounter_board6_olek:{title:"Quiz słowny z Olkiem („Lubię...” )",opponentName:"Gejmer Olek",opponentAvatar:"./assets/Postacie/Gejmer.png",spriteClass:"sprite-olek",enemyMaxHp:30,enemyDamage:7,tanDamage:10,questions:[{id:"olek_b6_q1",olekSpeech:"Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!",olekSpeakText:"Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!",promptPl:"Olek mówi z pasją o grach. Jak entuzjastycznie odpowiesz słownie?",options:[{text:"Mega! 🔥",correct:!0},{text:"Nudne... 🥱",correct:!1},{text:"Słabe 👎",correct:!1},{text:"Hejty 💬",correct:!1}]},{id:"olek_b6_q2",olekSpeech:"Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?",olekSpeakText:"Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?",promptPl:"Olek mówi o gotowanych warzywach. Wyraź swoją szczerą opinię:",options:[{text:"Mega! 🔥",correct:!0},{text:"Słabe 👎",correct:!0},{text:"Nudne... 🥱",correct:!0},{text:"Hejty 💬",correct:!1}]},{id:"olek_b6_q3",olekSpeech:"Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.",olekSpeakText:"Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.",promptPl:"Olek chwali swoje buty na korytarzu. Twoja aprobująca reakcja to:",options:[{text:"Fajne! 👍",correct:!0},{text:"Nudne 🥱",correct:!1},{text:"Słabe 👎",correct:!1},{text:"Hejty 💬",correct:!1}]}]}},tt=[{id:"spell_1",olekSpeech:"Lubię gry na telefonie! A ty?",olekSpeakText:"Lubię gry na telefonie! A ty?",contextPl:"Olek siedzi na ławce i gra na telefonie. Zapytaj go, czy gra w Twoją ulubioną grę.",targetPhrase:"GRASZ W",displayTarget:"Grasz w...?",speakOnSolve:"Grasz w Roblox?",baseTimeSec:10},{id:"spell_2",olekSpeech:"Tak, gram w to codziennie!",olekSpeakText:"Tak, gram w to codziennie!",contextPl:"Olek też gra w tę grę! Zapytaj go o jego nazwę gracza.",targetPhrase:"JAKI MASZ NICK",displayTarget:"Jaki masz nick?",speakOnSolve:"Jaki masz nick?",baseTimeSec:10},{id:"spell_3",olekSpeech:"Mój nick to OlekPro! Dodasz mnie?",olekSpeakText:"Mój nick to OlekPro! Dodasz mnie?",contextPl:"Chcesz dodać Olka do znajomych w grze. Poproś go o jego kod gracza.",targetPhrase:"DASZ ID",displayTarget:"Dasz ID?",speakOnSolve:"Dasz ID?",baseTimeSec:10}],it=[{id:"m_masakra",word:"Masakra!",defPl:"Coś okropnego, bardzo trudnego lub złego",color:"#ef476f"},{id:"m_sztos",word:"Sztos!",defPl:"Coś niesamowitego, rewelacyjnego, hit!",color:"#ffd166"},{id:"m_spoko",word:"Spoko!",defPl:"W porządku, nie ma sprawy, luźna zgoda",color:"#06d6a0"},{id:"m_przypal",word:"Przypał!",defPl:"Wstydliwa wpadka, niezręczna sytuacja",color:"#118ab2"}],at=[{id:"fm_1",promptPl:"Nauczyciel przyłapał cię na ściąganiu na teście przed całą klasą! Co to za sytuacja?",correctWord:"Przypał!",options:["Przypał!","Sztos!","Spoko!","Masakra!"]},{id:"fm_2",promptPl:"Nowa gra okazała się niesamowitym hitem, jest przepiękna i wciągająca!",correctWord:"Sztos!",options:["Sztos!","Masakra!","Przypał!","Spoko!"]},{id:"fm_3",promptPl:"Całą noc uczyłeś się do sprawdzianu, a pytania były potwornie trudne i męczące!",correctWord:"Masakra!",options:["Masakra!","Sztos!","Spoko!","Przypał!"]},{id:"fm_4",promptPl:"Kolega pyta: „Mogę pożyczyć twój długopis na jedną lekcję?”. Odpowiadasz mu ze spokojem:",correctWord:"Spoko!",options:["Spoko!","Masakra!","Sztos!","Przypał!"]},{id:"fm_5",promptPl:"Drużyna wygrała mecz w ostatniej sekundzie po genialnym strzale z połowy boiska!",correctWord:"Sztos!",options:["Sztos!","Przypał!","Spoko!","Masakra!"]}],st=["MASAKRA","SZTOS","SPOKO","PRZYPAL"],U=[{id:"cristiano_ronaldo",name:"Cristiano Ronaldo",image:"./assets/slowka/cristiano_ronaldo.jpg",desc:"Legendarny piłkarz, maszyna do zdobywania goli!"},{id:"messi",name:"Messi",image:"./assets/slowka/messi.jpg",desc:"Mistrz świata, genialny drybling i magia na boisku!"},{id:"brawl_stars",name:"Brawl Stars",image:"./assets/slowka/brawl_stars.jpg",desc:"Dynamiczne starcia brawlerów i puchary na telefonie!"},{id:"roblox",name:"Roblox",image:"./assets/slowka/roblox.jpg",desc:"Miliony światów i gier tworzonych przez graczy!"},{id:"ramen",name:"Ramen",image:"./assets/slowka/ramen.jpg",desc:"Gorący japoński bulion ze sprężystym makaronem!"},{id:"pho",name:"Pho",image:"./assets/slowka/pho.jpg",desc:"Tradycyjna, aromatyczna zupa wietnamska!"},{id:"modne_buty",name:"Modne buty",image:"./assets/slowka/modne_buty.jpg",desc:"Świeżutkie, stylowe sneakersy prosto z pudełka!"},{id:"kartkowki",name:"Kartkówki",image:"./assets/slowka/kartkowki.jpg",desc:"Niezapowiedziane małe sprawdziany na początku lekcji!"},{id:"hejt_i_przykrosci",name:"Hejt i przykrości",image:"./assets/slowka/hejt_i_przykrosci.jpg",desc:"Złośliwe docinki i niemiłe komentarze w sieci!"},{id:"gotowane_warzywa",name:"Gotowane warzywa bez przypraw",image:"./assets/slowka/gotowane_warzywa.jpg",desc:"Rozgotowane brokuły i marchewka bez szczypty soli!"}],H=[{id:"b6_mu_mega",word:"Mega",defPl:"Coś ekstra, rewelacyjnego, na wyższym poziomie!",image:"./assets/slowka/mega.png",color:"#ff006e"},{id:"b6_mu_fajne",word:"Fajne",defPl:"Po prostu dobre, przyjemne, warte uwagi.",image:"./assets/slowka/fajne.jpg",color:"#06d6a0"},{id:"b6_mu_slabe",word:"Słabe",defPl:"Kiepskie, poniżej oczekiwań, bez rewelacji.",image:"./assets/slowka/slabe.png",color:"#fb5607"},{id:"b6_mu_nudne",word:"Nudne",defPl:"Przynudzające, bez emocji, nie warte czasu.",image:"./assets/slowka/nudne.png",color:"#8338ec"},{id:"b6_mu_lajki",word:"Lajki",defPl:"Polubienia, akceptacja, poparcie w necie!",image:"./assets/slowka/fajne.jpg",color:"#3a86ff"},{id:"b6_mu_hejty",word:"Hejty",defPl:"Złośliwe docinki i negatywne komentarze w sieci.",image:"./assets/slowka/hejt_i_przykrosci.jpg",color:"#e63946"}],ot=[{type:"quiz",promptPl:"Jak po polsku naturalnie i krótko powiesz koledze „cześć” na korytarzu?",options:[{text:"Siema!",correct:!0},{text:"Dobranoc!",correct:!1},{text:"Do widzenia państwu!",correct:!1}],damage:25},{type:"quiz",promptPl:"Co oznacza młodzieżowe słowo „sztos”?",options:[{text:"Coś niesamowitego, genialnego!",correct:!0},{text:"Wstydliwa wpadka",correct:!1},{text:"Nudna lekcja",correct:!1}],damage:25},{type:"quiz",promptPl:"Chcesz pożyczyć coś do pisania na lekcji od Olka. Co powiesz?",options:[{text:"Olek, masz długopis?",correct:!0},{text:"Która strona?",correct:!1},{text:"Grasz w Robloxa?",correct:!1}],damage:25},{type:"quiz",promptPl:"Co powiesz, gdy wydarzy się wielka wpadka lub katastrofa?",options:[{text:"Masakra!",correct:!0},{text:"Spoko!",correct:!1},{text:"Dzięki!",correct:!1}],damage:25},{type:"quiz",promptPl:"Jak określisz coś, co jest na najwyższym poziomie, po prostu ekstra?",options:[{text:"Mega!",correct:!0},{text:"Nudne",correct:!1},{text:"Słabe",correct:!1}],damage:25},{type:"quiz",promptPl:"Jak zareagujesz, gdy kumpel pożyczy Ci swój zeszyt do przepisania?",options:[{text:"Dzięki!",correct:!0},{text:"Przypał!",correct:!1},{text:"Nara!",correct:!1}],damage:25},{type:"quiz",promptPl:"Jak nazywają się złośliwe, negatywne komentarze w sieci?",options:[{text:"Hejty",correct:!0},{text:"Lajki",correct:!1},{text:"Sneakersy",correct:!1}],damage:25},{type:"quiz",promptPl:"Gdy ktoś pyta Cię o profil w grze, jak zapyta o Twój identyfikator?",options:[{text:"Dasz ID?",correct:!0},{text:"Masz zeszyt?",correct:!1},{text:"Która strona?",correct:!1}],damage:25}],Q=[{type:"quiz",prompt:"Kupujesz bilet ulgowy w biletomacie. Jaki dokument musisz posiadać przy sobie podczas kontroli?",options:[{text:"🪪 Legitymację szkolną",correct:!0},{text:"🥙 Ciepłego kebaba z sosem",correct:!1},{text:"🎮 Nick z gry Roblox",correct:!1}],hint:"Legitymacja potwierdza zniżkę 50%!"},{type:"quiz",prompt:"Jesteś przy kasie w sklepie spożywczym. Jak poprawnie poprosisz o pieczywo?",options:[{text:"🥖 „Poproszę świeżą bułkę.”",correct:!0},{text:"🥖 „Poproszę bułka.”",correct:!1},{text:"🥖 „Poproszę z bułką.”",correct:!1}],hint:"Biernik (kogo? co?): bułkę!"},{type:"matchup",prompt:"Połącz zwroty miejskie i szkolne z ich właściwym znaczeniem:",pairs:[{left:"🎟️ Bilet ulgowy",right:"Zniżka dla ucznia z legitymacją"},{left:"🍽️ Na miejscu",right:"Zjedzenie posiłku przy stoliku"},{left:"🔥 Siema / Elo",right:"Luźne powitanie na korytarzu"},{left:"🧄 Sos czosnkowy",right:"Łagodny, kremowy sos"}]},{type:"sorting",prompt:"Szybkie sortowanie: Przypisz wyrażenia do odpowiedniej kategorii!",categories:["🛒 W SKLEPIE / KASIE","🚏 W KOMUNIKACJI"],items:[{text:"Biletomat",category:"🚏 W KOMUNIKACJI"},{text:"Poproszę reklamówkę",category:"🛒 W SKLEPIE / KASIE"},{text:"Legitymacja szkolna",category:"🚏 W KOMUNIKACJI"},{text:"Płatność kartą lub gotówką",category:"🛒 W SKLEPIE / KASIE"}]},{type:"quiz",prompt:"Kucharz pyta: „Będzie jedzone na miejscu czy na wynos?”. Chcesz zjeść w domu. Co odpowiesz?",options:[{text:"🥡 „Na wynos, poproszę do torby!”",correct:!0},{text:"🍽️ „Na miejscu, poproszę stolik.”",correct:!1},{text:"🤖 „Kupuję bilet 20-minutowy.”",correct:!1}],hint:"Do domu zamawiamy na wynos!"},{type:"matchup",prompt:"Dopasuj młodzieżowy slang do jego znaczenia:",pairs:[{left:"⭐ Sztos / Mega",right:"Coś niesamowitego i rewelacyjnego"},{left:"🥱 Nudne",right:"Bez emocji, szkoda na to czasu"},{left:"👍 Fajne",right:"Dobre, przyjemne, godne uwagi"},{left:"👎 Słabe",right:"Poniżej oczekiwań, kiepskie"}]},{type:"quiz",prompt:"Zapomniałeś piórnika na lekcji. Jak grzecznie poprosisz kolegę Olka o pomoc?",options:[{text:"✏️ „Olek, masz może pożyczyć długopis?”",correct:!0},{text:"✏️ „Oddaj mi natychmiast swój długopis!”",correct:!1},{text:"✏️ „Gdzie jest przystanek tramwajowy?”",correct:!1}],hint:"Kulturalna koleżeńska prośba!"},{type:"sorting",prompt:"Szybkie sortowanie: Przypisz zdania do sposobu spożycia posiłku!",categories:["🍽️ NA MIEJSCU","🥡 NA WYNOS"],items:[{text:"Zjem przy stoliku z kolegą",category:"🍽️ NA MIEJSCU"},{text:"Zapakuj do papierowej torby",category:"🥡 NA WYNOS"},{text:"Zabiorę do domu na obiad",category:"🥡 NA WYNOS"},{text:"Poproszę na talerzyku tutaj",category:"🍽️ NA MIEJSCU"}]}],nt=[{type:"quiz",prompt:"Nauczycielka tłumaczy skomplikowane zadanie i mówi bardzo szybko. Jak kulturalnie poprosisz o wolniejsze tempo?",options:[{text:"🙋 „Przepraszam, czy może pani mówić trochę wolniej?”",correct:!0},{text:"🛑 „Cicho bądź, za szybko mówisz!”",correct:!1},{text:"⚽ „Poproszę kebaba na wynos z ostrym sosem.”",correct:!1}],hint:"Zwrot ratunkowy: „Przepraszam, czy może pani mówić trochę wolniej?”"},{type:"quiz",prompt:"Nagle na lekcji poczułeś pilną potrzebę skorzystania z ubikacji. O co zapytasz nauczycielkę?",options:[{text:"🚽 „Przepraszam, czy mogę wyjść do toalety?”",correct:!0},{text:"🚪 „Wychodzę ze szkoły, elo!”",correct:!1},{text:"📝 „Nie mam dzisiaj piórnika ani gumki.”",correct:!1}],hint:"Kulturalne pytanie o wyjście: „Czy mogę wyjść do toalety?”"},{type:"matchup",prompt:"Dopasuj przybory szkolne do ich zastosowania na lekcji:",pairs:[{left:"🖊️ Długopis",right:"Zapisywanie notatek w zeszycie"},{left:"📏 Linijka",right:"Rysowanie prostych linii na geometrii"},{left:"🧼 Gumka",right:"Ścieranie ołówka i poprawianie błędów"},{left:"📓 Zeszyt w kratkę",right:"Zapisywanie zadań z matematyki"}]},{type:"sorting",prompt:"Szybkie sortowanie: Przypisz przedmioty do odpowiedniej sali lekcyjnej!",categories:["🏃 SALA GIMNASTYCZNA (WF)","📐 KLASA MATEMATYCZNA"],items:[{text:"Piłka do siatkówki",category:"🏃 SALA GIMNASTYCZNA (WF)"},{text:"Zeszyt w kratkę i linijka",category:"📐 KLASA MATEMATYCZNA"},{text:"Biała koszulka i spodenki",category:"🏃 SALA GIMNASTYCZNA (WF)"},{text:"Kalkulator i cyrkiel",category:"📐 KLASA MATEMATYCZNA"}]},{type:"quiz",prompt:"Zapomniałeś odrobić pracy domowej na dzisiaj. Jak najuczciwiej powiesz o tym nauczycielce?",options:[{text:"🤝 „Bardzo przepraszam, zapomniałem zadania. Przyniosę je jutro.”",correct:!0},{text:"🙈 „Pies zjadł mój zeszyt i uciekł do lasu!”",correct:!1},{text:"🎟️ „Mam bilet ulgowy 20-minutowy!”",correct:!1}],hint:"Uczciwość i kultura: „Przepraszam, zapomniałem zadania.”"},{type:"matchup",prompt:"Dopasuj szkolne dni tygodnia do ich kolejności:",pairs:[{left:"1️⃣ Poniedziałek",right:"Pierwszy dzień nauki po weekendzie"},{left:"3️⃣ Środa",right:"Środek szkolnego tygodnia"},{left:"5️⃣ Piątek",right:"Ostatni dzień lekcji przed odpoczynkiem"},{left:"🔔 Dzwonek",right:"Sygnał rozpoczęcia przerwy"}]}],rt=[{question:"„Cześć Tan! Zanim wyjdziemy na boisko – co jest najważniejsze przed grą w piłkę?” 🏃‍♂️",options:[{text:"„Porządna rozgrzewka całego ciała, żeby uniknąć kontuzji!”",correct:!0},{text:"„Jedzenie chipsów i picie zimnej coli.”",correct:!1},{text:"„Zapomniałem zeszytu z matematyki.”",correct:!1}]},{question:"„Świetnie! Jaki strój sportowy obowiązuje na sali gimnastycznej na WF-ie?” 👟",options:[{text:"„Biała koszulka, krótkie spodenki i buty ze jasną podeszwą.”",correct:!0},{text:"„Gruba kurtka zimowa, czapka i szalik.”",correct:!1},{text:"„Jeansy i skórzane buty wyjściowe.”",correct:!1}]},{question:"„Brawo! W jaki sport zespołowy gramy dzisiaj na sali?” 🏐",options:[{text:"„W siatkówkę, koszykówkę lub piłkę nożną halową!”",correct:!0},{text:"„W gry na smartfonie pod ławką.”",correct:!1},{text:"„W malowanie farbami plakatowymi.”",correct:!1}]}],lt=[{type:"quiz",prompt:"Lekarz pyta: „Dzień dobry Tan! Co ci dolega i od kiedy czujesz się gorzej?”. Jak odpowiesz?",options:[{text:"🩺 „Dzień dobry panie doktorze, od wczoraj bardzo boli mnie gardło i głowa.”",correct:!0},{text:"⚽ „Wybiłem piłkę za ogrodzenie orlika.”",correct:!1},{text:"🍟 „Poproszę dużą porcję frytek i sos ostry.”",correct:!1}],hint:"Opisz precyzyjnie swoje objawy: ból gardła i głowy."},{type:"matchup",prompt:"Połącz dolegliwości fizyczne z właściwym działaniem zaradczym:",pairs:[{left:"🔥 Gorączka i osłabienie",right:"Mierzenie temperatury i wizyta u lekarza"},{left:"💧 Chce mi się pić",right:"Wypicie szklanki świeżej wody"},{left:"🧣 Jest mi zimno",right:"Założenie ciepłego szalika i bluzy"},{left:"🥱 Jestem zmęczony",right:"Krótki odpoczynek i regenerujący sen"}]},{type:"sorting",prompt:"Szybkie sortowanie: Przypisz wyrażenia do kategorii ZDROWIE FIZYCZNE lub EMOCJE!",categories:["🩺 CIAŁO I BÓL","🧠 EMOCJE I NASTRÓJ"],items:[{text:"Boli mnie brzuch",category:"🩺 CIAŁO I BÓL"},{text:"Jestem zły i zdenerwowany",category:"🧠 EMOCJE I NASTRÓJ"},{text:"Wysoka gorączka 38°C",category:"🩺 CIAŁO I BÓL"},{text:"Wesoły i spokojny",category:"🧠 EMOCJE I NASTRÓJ"}]},{type:"quiz",prompt:"Kolega pyta cię na korytarzu: „Hej Tan, czy wszystko w porządku?”. Chcesz go uspokoić, że czujesz się dobrze. Co powiesz?",options:[{text:"👍 „Dzięki, wszystko ze mną okej! Czułem się zmęczony, ale już odpocząłem.”",correct:!0},{text:"❌ „Nie rozumiem pytania, proszę powtórzyć na tablicy.”",correct:!1},{text:"🚌 „Muszę skasować bilet 75-minutowy.”",correct:!1}],hint:"Zwrot: „Wszystko ze mną okej!”"},{type:"matchup",prompt:"Dopasuj polskie nazwy stanów do ich wietnamskich odpowiedników:",pairs:[{left:"Jestem głodny",right:"Em đói bụng"},{left:"Boli mnie głowa",right:"Em bị đau đầu"},{left:"Odpoczynek",right:"Nghỉ ngơi"},{left:"Gorączka",right:"Sốt cao"}]}],ct=[{question:"„Dzień dobry Tan! Usiądź na fotelu. Z czym dzisiaj do mnie przychodzisz?” 👩‍⚕️",options:[{text:"„Dzień dobry! Od rana boli mnie brzuch i czuję się bardzo osłabiony.”",correct:!0},{text:"„Chcę pograć na telefonie w Roblox.”",correct:!1},{text:"„Kupuję bilet ulgowy za jedną monetę.”",correct:!1}]},{question:"„Rozumiem. Zmierzę ci temperaturę termometrem bezdotykowym. Co czujesz – jest ci zimno czy gorąco?” 🌡️",options:[{text:"„Jest mi na zmianę gorąco i zimno, chyba mam lekką gorączkę.”",correct:!0},{text:"„Zapomniałem linijki na lekcję plastyki.”",correct:!1},{text:"„Lubię jeść pizzę na cienkim cieście.”",correct:!1}]},{question:"„Termometr wskazuje 37.8°C. Wypij powoli tę szklankę wody. Zadzwonię po twoją mamę, żeby odebrała cię do domu, dobrze?” 🥛",options:[{text:"„Dziękuję bardzo pani pielęgniarce. Odpocznę chwilę na kozetce.”",correct:!0},{text:"„Nie chcę pić, wolę biegać po korytarzu.”",correct:!1},{text:"„Nie mam zadania domowego z matematyki.”",correct:!1}]}],dt=[{question:"„Jak się teraz czujesz, Tan? Czy ból brzucha i głowy trochę ustąpił po szklance wody i odpoczynku?” 👩‍⚕️",options:[{text:"„Tak, odpocząłem i czuję się już o wiele lepiej, dziękuję!”",correct:!0},{text:"„Zamawiam frytki z keczupem na wynos.”",correct:!1},{text:"„Wybieram język angielski w automacie.”",correct:!1}]},{question:"„Wspaniale! Zmierzmy jeszcze raz temperaturę termometrem. Wynik to równe 36.6°C – norma!” 🌡️✨",options:[{text:"„Cieszę się bardzo! Dziękuję pani pielęgniarce za troskliwą pomoc!”",correct:!0},{text:"„Zgubiłem plecak w szatni szkolnej.”",correct:!1},{text:"„Czy mogę dostać czerwony długopis do rysowania?”",correct:!1}]}],pt=[{question:"„Dzień dobry Tan! Witaj w Przychodni Zdrowia. Czy przyszedłeś na badanie kontrolne do Doktora Lekarza?” 🩺👩‍⚕️",options:[{text:"„Dzień dobry! Tak, mam umówioną wizytę u pana doktora.”",correct:!0},{text:"„Szukam boiska do piłki nożnej Orlik.”",correct:!1},{text:"„Nie chcę odpowiadać na żadne pytania.”",correct:!1}]},{question:"„Świetnie! Zanim wejdziesz do gabinetu, zmierzę ci tętno i ciśnienie krwi. Podwiń proszę rękaw bluzy.” 💓",options:[{text:"„Oczywiście, proszę bardzo. Oddycham spokojnie.”",correct:!0},{text:"„Muszę skasować bilet autobusowy.”",correct:!1},{text:"„Zapomniałem drugiego śniadania do szkoły.”",correct:!1}]},{question:"„Wszystkie parametry masz idealne jak młody sportowiec! Doktor Lekarz już czeka na Ciebie w gabinecie. Śmiało wchodź!” 🩺⭐",options:[{text:"„Dziękuję pani pielęgniarce! Wchodzę na badanie do pana doktora.”",correct:!0},{text:"„Boję się i uciekam na dwór.”",correct:!1},{text:"„Czy ma pani nową grę na telefon?”",correct:!1}]}],ht=[{type:"quiz",prompt:"Instagramerka wita cię w transmisji na żywo: „Hej Tan! Przedstaw się milionom naszych widzów – skąd jesteś i ile masz lat?”.",options:[{text:"⭐ „Siemanko! Nazywam się Tan, mam 13 lat, pochodzę z Wietnamu i mieszkam w Polsce!”",correct:!0},{text:"😴 „Nudzę się i boli mnie gardło.”",correct:!1},{text:"🎟️ „Chcę bilet 20-minutowy ulgowy.”",correct:!1}],hint:"Autoprezentacja: imię, wiek (13 lat) oraz pochodzenie z Wietnamu i zamieszkanie w Polsce!"},{type:"matchup",prompt:"Dopasuj urządzenia technologiczne do ich roli w Twoim pokoju:",pairs:[{left:"💻 Komputer gamingowy",right:"Odrabianie zadań szkolnych i granie w Brawl Stars"},{left:"🎧 Słuchawki z mikrofonem",right:"Czysty dźwięk i rozmowy ze znajomymi na Discordzie"},{left:"🔋 Szybki Powerbank",right:"Zapasowa energia do naładowania telefonu w drodze"},{left:"📡 Szybkie Wi-Fi",right:"Błyskawiczne łącze internetowe bez zacięć"}]},{type:"sorting",prompt:"Szybkie sortowanie: Przypisz wyrażenia do kategorii ŚWIAT PIŁKI NOŻNEJ lub SOCIAL MEDIA!",categories:["⚽ PIŁKA NOŻNA","📱 SOCIAL MEDIA & TRENDY"],items:[{text:"Mecz i rzuty karne",category:"⚽ PIŁKA NOŻNA"},{text:"Viralowe filmiki na TikToku",category:"📱 SOCIAL MEDIA & TRENDY"},{text:"Najlepszy mistrz turnieju",category:"⚽ PIŁKA NOŻNA"},{text:"Śmieszne memy i lajki",category:"📱 SOCIAL MEDIA & TRENDY"}]},{type:"quiz",prompt:"Instagramerka pyta: „Jaki jest twój ulubiony japoński serial anime, o którym uwielbiasz rozmawiać z przyjaciółmi?”.",options:[{text:"🐱 „Uwielbiam anime o niebieskim kocurze Doraemonie i Dragon Ballu!”",correct:!0},{text:"🥔 „Gotowane warzywa bez żadnych przypraw.”",correct:!1},{text:"📏 „Plastikowa linijka szkolna 20 cm.”",correct:!1}],hint:"Popkultura i anime: Doraemon!"},{type:"matchup",prompt:"Dopasuj słowa opisujące sport i trendy do ich znaczenia:",pairs:[{left:"⚡ Szybki zawodnik",right:"Błyskawiczny piłkarz na skrzydle boiska"},{left:"🏆 Najlepszy mistrz",right:"Zwycięzca i zdobywca złotego trofeum"},{left:"🎬 Filmiki i trendy",right:"Krótkie wideo oglądane w wolnym czasie"},{left:"😂 Zabawne memy",right:"Hity internetu poprawiające humor"}]}],mt=[{question:"„Siemanko Tan! Jaki masz sprzęt u siebie w pokoju do grania po lekcjach?” 🎮",options:[{text:"„Mam komputer na biurku, szybkie Wi-Fi i słuchawki z mikrofonem!”",correct:!0},{text:"„Mam tylko zeszyt w kratkę i linijkę do geometrii.”",correct:!1},{text:"„Poproszę bilet ulgowy na tramwaj.”",correct:!1}]},{question:"„Klasa! A w co najchętniej grasz ze znajomymi ze szkoły?” 🕹️",options:[{text:"„Gramy w Brawl Stars i Robloxa, gadając przez Discorda!”",correct:!0},{text:"„Boli mnie brzuch i muszę zmierzyć temperaturę.”",correct:!1},{text:"„Poproszę bułkę i reklamówkę.”",correct:!1}]},{question:"„Zacnie! Co robisz, gdy bateria w padzie lub smartfonie zaczyna padać?” 🔋",options:[{text:"„Podłączam szybką ładowarkę albo podpinam pojemny powerbank!”",correct:!0},{text:"„Wyrzucam telefon do kosza na śmieci.”",correct:!1},{text:"„Idę do gabinetu pielęgniarki po plaster.”",correct:!1}]}],yt=[{question:"„Siema Tan! Kto według ciebie jest najlepszym piłkarzem na świecie?” ⚽",options:[{text:"„Cristiano Ronaldo i Leo Messi – to najlepsi mistrzowie futbolu!”",correct:!0},{text:"„Nie wiem, wolę spać na lekcji matmy.”",correct:!1},{text:"„Sos czosnkowy i duży kebab.”",correct:!1}]},{question:"„Dokładnie! Co najbardziej podziwiasz u nowoczesnego skrzydłowego?” ⚡",options:[{text:"„Gdy jest to niezwykle szybki zawodnik z precyzyjnym dryblingiem!”",correct:!0},{text:"„Gdy ma przy sobie legitymację szkolną i biletomat.”",correct:!1},{text:"„Gdy zapomniał zeszytu domowego.”",correct:!1}]},{question:"„Idziemy po południu pokopać na orlik? Poćwiczymy rzuty karne!” 🥅",options:[{text:"„Jasne, biorę korki i zagramy wspaniały mecz!”",correct:!0},{text:"„Nie mam ochoty, wolę się nudzić w kącie.”",correct:!1},{text:"„Boli mnie głowa i chcę spać.”",correct:!1}]}],ut=[{question:"„Yo Tan! Widziałeś wczorajszy viralowy filmik, który ma już miliony lajków?” 🕶️",options:[{text:"„Pewnie, ten filmik i te memy są po prostu mega sztos!”",correct:!0},{text:"„Nie oglądam niczego, nie mam prądu w domu.”",correct:!1},{text:"„Poproszę o powtórzenie polecenia, proszę pani.”",correct:!1}]},{question:"„A kojarzysz kultowe anime z niebieskim kotem z przyszłości – Doraemona?” 🐱",options:[{text:"„Jasne, uwielbiam Doraemona i jego niezwykłe gadżety!”",correct:!0},{text:"„Nigdy nie słyszałem o żadnym anime ani filmikach.”",correct:!1},{text:"„Zapomniałem podręcznika do plastyki.”",correct:!1}]},{question:"„Trzeba być na bieżąco z trendami i mieć swój własny styl, co nie młody?” 📱",options:[{text:"„Zgadza się! Wiem kim jestem, mam swoje pasje i cieszę się życiem!”",correct:!0},{text:"„Wszystko jest nudne i słabe.”",correct:!1},{text:"„Jest mi zimno i chcę do domu.”",correct:!1}]}];function _(c){if(!c)return 5;if(typeof c=="number")return c;const e=c.baseDamage||5,t=Math.max(0,((c.level||1)-1)*2),i=c.bonusDamage||0;return e+t+i}const D=[{id:"siema",word:"Siema!",cleanWord:"Siema",vnWord:"Chào bạn!",phonetic:"[Śe-ma] • wymowa: Xê-ma",category:"Powitanie",categoryVn:"Lời chào",emoji:"👋",color:"#ff6b6b",plMeaning:"Powitanie kolegi lub koleżanki, gdy spotykacie się na szkolnym korytarzu.",vnMeaning:"Chào bạn! — Lời chào tự nhiên nhất khi gặp bạn bè ở hành lang trường.",balloonDefPl:"Powitanie kolegi przy spotkaniu na korytarzu",balloonDefVn:"Chào bạn! — Lời chào khi mới gặp bạn bè ở trường",examplePl:`— Siema, Tan! Wchodzisz do szatni?
— Siema!`,exampleVn:`— Chào Tan! Cậu vào phòng thay đồ à?
— Chào cậu!`,tip:"Używaj na początku spotkania z rówieśnikami. (Dùng khi bắt đầu gặp gỡ bạn bè cùng trang lứa)."},{id:"elo",word:"Elo!",cleanWord:"Elo",vnWord:"Chào nhé!",phonetic:"[E-lo] • wymowa: Ê-lô",category:"Powitanie",categoryVn:"Lời chào",emoji:"🤜🤛",color:"#4ecdc4",plMeaning:"Luźne, koleżeńskie powitanie rówieśników na początku rozmowy.",vnMeaning:"Chào nhé! — Cách chào trẻ trung, năng động giữa các bạn thiếu niên.",balloonDefPl:"Luźne, koleżeńskie powitanie rówieśników",balloonDefVn:"Chào nhé! — Cách chào trẻ trung, thân mật giữa bạn bè",examplePl:`— Elo! Gramy dzisiaj w piłkę?
— Elo, pewnie!`,exampleVn:`— Chào nhé! Hôm nay đá bóng không?
— Chào, tất nhiên rồi!`,tip:"Bardzo częste powitanie wśród nastolatków w szatni i na boisku. (Rất phổ biến ở phòng thay đồ và sân trường)."},{id:"nara",word:"Nara!",cleanWord:"Nara",vnWord:"Tạm biệt nhé!",phonetic:"[Na-ra] • wymowa: Na-ra",category:"Pożegnanie",categoryVn:"Lời tạm biệt",emoji:"🚶‍♂️💨",color:"#ffbe0b",plMeaning:"Pożegnanie z kolegami, gdy kończycie rozmowę i idziecie na lekcję lub do domu.",vnMeaning:"Tạm biệt nhé! Hẹn gặp lại! — Nói khi kết thúc cuộc trò chuyện hoặc khi tan học ra về.",balloonDefPl:"Pożegnanie z kolegą, gdy odchodzisz lub wracasz do domu",balloonDefVn:"Tạm biệt nhé! — Nói khi chia tay bạn để đi học hoặc về nhà",examplePl:`— Idę już na matematykę. Nara!
— Nara, do jutra!`,exampleVn:`— Tớ đi học Toán đây. Tạm biệt nhé!
— Tạm biệt, hẹn mai gặp!`,tip:"Mówimy wyłącznie na koniec spotkania, przy rozstaniu. (Chỉ dùng khi tạm biệt, lúc sắp rời đi)."},{id:"cotam",word:"Co tam?",cleanWord:"Co tam?",vnWord:"Có gì mới không?",phonetic:"[Tso tam?] • wymowa: Xô tam?",category:"Pytanie",categoryVn:"Câu hỏi thăm",emoji:"🤔💬",color:"#8338ec",plMeaning:"Pytanie zadawane koledze po powitaniu, aby dowiedzieć się, co u niego nowego.",vnMeaning:"Có gì mới không? / Dạo này thế nào? — Câu hỏi thăm bạn bè ngay sau khi chào.",balloonDefPl:"Pytanie do kolegi o to, co u niego nowego",balloonDefVn:"Có gì mới không? / Thế nào rồi? — Câu hỏi thăm bạn bè",examplePl:`— Siema Tan! Co tam?
— Spoko!`,exampleVn:`— Chào Tan! Có gì mới không?
— Mọi thứ đều ổn!`,tip:"Najczęściej łączymy powitanie z pytaniem: „Siema, co tam?” (Chào cậu, có gì mới không?)."},{id:"spoko",word:"Spoko!",cleanWord:"Spoko",vnWord:"Ổn cả!",phonetic:"[Spo-ko] • wymowa: Xpô-kô",category:"Odpowiedź",categoryVn:"Câu trả lời",emoji:"😎👍",color:"#06d6a0",plMeaning:"Pozytywna odpowiedź oznaczająca, że wszystko jest w porządku i dobrze Ci idzie.",vnMeaning:"Ổn cả! / Rất tốt! — Câu trả lời cho biết mọi việc của bạn đều tốt đẹp.",balloonDefPl:"Odpowiedź oznaczająca, że wszystko jest w porządku",balloonDefVn:"Ổn cả! / Mọi thứ đều tốt! — Câu trả lời khi bạn bè hỏi thăm",examplePl:`— Co tam u ciebie?
— Spoko! Zaraz mamy WF.`,exampleVn:`— Cậu thế nào rồi?
— Ổn cả! Sắp tới tiết Thể dục rồi.`,tip:'Naturalna, krótka odpowiedź na pytanie „Co tam?”. (Câu trả lời ngắn gọn, tự nhiên nhất cho "Co tam?").'},{id:"hejka",word:"Hejka!",cleanWord:"Hejka",vnWord:"Chào cậu!",phonetic:"[Hej-ka] • wymowa: Hây-ka",category:"Powitanie",categoryVn:"Lời chào",emoji:"😊✨",color:"#ff006e",plMeaning:"Sympatyczne, radosne powitanie znajomych z klasy.",vnMeaning:"Chào cậu! — Lời chào thân thiện, vui vẻ khi gặp bạn cùng lớp.",balloonDefPl:"Sympatyczne i wesołe powitanie znajomych z klasy",balloonDefVn:"Chào cậu! — Lời chào thân thiện, vui vẻ khi gặp bạn",examplePl:`— Hejka! Siadasz z nami na ławce?
— Hejka! Chętnie!`,exampleVn:`— Chào cậu! Ngồi ghế dài với tụi tớ không?
— Chào cậu! Có chứ!`,tip:"Brzmi bardzo ciepło i przyjaźnie. (Nghe rất ấm áp và thân thiện)."}],X=[{id:"grasz_w",word:"Grasz w...?",cleanWord:"Grasz w",vnWord:"Cậu có chơi ... không?",phonetic:"[Grasz w...?] • wymowa: Grash v...",category:"Gry i Hobby",categoryVn:"Trò chơi & Sở thích",emoji:"🎮",color:"#3a86ff",plMeaning:"Pytanie do kolegi, czy gra w konkretną grę (np. „Grasz w Minecraft?”, „Grasz w Roblox?”).",vnMeaning:"Cậu có chơi [tên game] không? — Câu hỏi để rủ bạn chơi chung hoặc tìm game cả hai cùng thích.",balloonDefPl:"Pytanie, czy kolega gra w daną grę",balloonDefVn:"Cậu có chơi ... không?",examplePl:`— Grasz w Roblox?
— Pewnie, codziennie!`,exampleVn:`— Cậu có chơi Roblox không?
— Có chứ, ngày nào cũng chơi!`,tip:"Po „Grasz w...” wystarczy podać nazwę ulubionej gry!"},{id:"jaki_masz_nick",word:"Jaki masz nick?",cleanWord:"Jaki masz nick?",vnWord:"Nick trong game của cậu là gì?",phonetic:"[Ja-ki masz nik?] • wymowa: Ya-ki mash nik?",category:"Gry i Hobby",categoryVn:"Trò chơi & Sở thích",emoji:"🏷️",color:"#ff9f1c",plMeaning:"Pytanie o nazwę gracza (nick) w grze, żebyście mogli znaleźć swoje profile.",vnMeaning:"Tên nhân vật / tài khoản (nick) của cậu là gì? — Hỏi tên trong game để tìm nhau.",balloonDefPl:"Pytanie o nazwę gracza w grze",balloonDefVn:"Nick trong game của cậu là gì?",examplePl:`— Jaki masz nick?
— Mój nick to OlekPro!`,exampleVn:`— Nick của cậu là gì?
— Nick của tớ là OlekPro!`,tip:"„Nick” wymawiamy krótko jako [nik]."},{id:"dasz_id",word:"Dasz ID?",cleanWord:"Dasz ID?",vnWord:"Cho tớ xin ID nhé?",phonetic:"[Dasz aj-di?] • wymowa: Dash ai-đi?",category:"Gry i Hobby",categoryVn:"Trò chơi & Sở thích",emoji:"🆔",color:"#06d6a0",plMeaning:"Prośba o podanie kodu lub numeru gracza (ID), aby zaprosić kolegę do znajomych.",vnMeaning:"Cho tớ xin mã ID được không? — Xin mã số người chơi để kết bạn trong game.",balloonDefPl:"Prośba o kod gracza, aby dodać do znajomych",balloonDefVn:"Cho tớ xin mã ID để kết bạn nhé?",examplePl:`— Dodam cię do znajomych. Dasz ID?
— Jasne, już wysyłam!`,exampleVn:`— Tớ kết bạn nhé. Cho tớ xin ID?
— Ok, gửi liền đây!`,tip:"Skrót „ID” czytamy po angielsku: [aj-di]."}],gt=[{id:"b3_w_grasz",sliceLabel:"🎮 GRASZ W...?",sliceColor:"#3a86ff",badge:"GRY I HOBBY",speakText:"Grasz w Roblox?",options:[{textPl:"bạn đang chơi...?",correct:!0},{textPl:"bạn sống ở...?",correct:!1},{textPl:"bạn chạy ở...?",correct:!1}],explanationPl:"Brawo! „Grasz w...?” to po wietnamsku: bạn đang chơi...?"},{id:"b3_w_nick",sliceLabel:"🏷️ JAKI MASZ NICK?",sliceColor:"#ff9f1c",badge:"PROFIL GRACZA",speakText:"Jaki masz nick?",options:[{textPl:"tên tài khoản của bạn là gì?",correct:!0},{textPl:"bạn bao nhiêu tuổi?",correct:!1},{textPl:"bạn sống ở đâu?",correct:!1}],explanationPl:"Super! „Jaki masz nick?” to po wietnamsku: tên tài khoản của bạn là gì?"},{id:"b3_w_id",sliceLabel:"🆔 DASZ ID?",sliceColor:"#06d6a0",badge:"ZNAJOMI W GRZE",speakText:"Dasz ID?",options:[{textPl:"cho mình xin ID của bạn nhé?",correct:!0},{textPl:"bạn có bút không?",correct:!1},{textPl:"bạn đói bụng chưa?",correct:!1}],explanationPl:"Ekstra! „Dasz ID?” to po wietnamsku: cho mình xin mã ID nhé!"}],ee=[{id:"masakra",word:"Masakra!",cleanWord:"Masakra",vnWord:"Kinh khủng! / Thảm họa!",phonetic:"[Ma-sa-kra] • wymowa: Ma-sa-kra",category:"Slang i Emocje",categoryVn:"Cảm xúc & Tiếng lóng",emoji:"😱",color:"#ef476f",plMeaning:"Okropność, coś bardzo trudnego, złego lub męczącego (np. trudny sprawdzian).",vnMeaning:"Kinh khủng! / Thảm họa! — Nói khi gặp điều gì đó rất tồi tệ, khó khăn hoặc mệt mỏi.",balloonDefPl:"Coś bardzo złego, trudnego lub okropnego",balloonDefVn:"Kinh khủng! / Thảm họa!",examplePl:`— Jak poszedł sprawdzian?
— Masakra, nic nie umiałem!`,exampleVn:`— Bài kiểm tra thế nào?
— Kinh khủng, tớ chẳng biết làm gì cả!`,tip:"Używaj, gdy chcesz wyrazić, że coś poszło bardzo źle."},{id:"sztos",word:"Sztos!",cleanWord:"Sztos",vnWord:"Đỉnh của chóp! / Tuyệt vời!",phonetic:"[Sztos] • wymowa: Shtos",category:"Slang i Emocje",categoryVn:"Cảm xúc & Tiếng lóng",emoji:"🔥",color:"#ffd166",plMeaning:"Coś niesamowitego, rewelacyjnego, absolutny hit!",vnMeaning:"Đỉnh của chóp! / Tuyệt vời! — Dùng khi một thứ gì đó cực kỳ hay, xuất sắc.",balloonDefPl:"Coś rewelacyjnego i wspaniałego, hit!",balloonDefVn:"Tuyệt phẩm / Đỉnh của chóp!",examplePl:`— Widziałeś tę nową grę?
— Tak, totalny sztos!`,exampleVn:`— Cậu thấy game mới chưa?
— Rồi, đỉnh chóp luôn!`,tip:"„Sztos” to jedno z najpopularniejszych młodzieżowych słów na coś super!"},{id:"spoko",word:"Spoko!",cleanWord:"Spoko",vnWord:"Ổn mà! / Không sao đâu!",phonetic:"[Spo-ko] • wymowa: Xpô-kô",category:"Odpowiedź",categoryVn:"Câu trả lời",emoji:"😎",color:"#06d6a0",plMeaning:"W porządku, nie ma sprawy, luźna zgoda lub uspokojenie sytuacji.",vnMeaning:"Ổn mà! / Không sao đâu! — Thể hiện sự đồng ý thoải mái hoặc mọi việc đều tốt.",balloonDefPl:"W porządku, nie ma problemu, zgoda",balloonDefVn:"Ổn cả / Không sao đâu!",examplePl:`— Dzięki za pomoc z zadaniem!
— Spoko, nie ma sprawy!`,exampleVn:`— Cảm ơn cậu đã giúp làm bài tập!
— Ổn mà, không có gì!`,tip:"Krótka, luźna odpowiedź na podziękowanie lub pytanie, czy wszystko gra."},{id:"przypal",word:"Przypał!",cleanWord:"Przypał",vnWord:"Quê xệ! / Tình huống khó xử",phonetic:"[Pshy-pał] • wymowa: Pshy-pao",category:"Slang i Emocje",categoryVn:"Cảm xúc & Tiếng lóng",emoji:"🤦‍♂️",color:"#118ab2",plMeaning:"Wstydliwa wpadka, niezręczna lub kłopotliwa sytuacja przed innymi.",vnMeaning:"Quê xệ! / Tình huống xấu hổ, ngại ngùng trước mặt người khác.",balloonDefPl:"Wstydliwa wpadka lub kłopotliwa sytuacja",balloonDefVn:"Tình huống xấu hổ, quê xệ",examplePl:`— Nauczyciel usłyszał mój telefon na lekcji!
— Ale przypał!`,exampleVn:`— Thầy giáo nghe thấy chuông điện thoại trong lớp!
— Quê xệ thật!`,tip:"Mówimy, gdy ktoś zrobił gafę lub wpadł w tarapaty."}],te=[{id:"b5_dlugopis",word:"Olek, masz długopis?",cleanWord:"Olek, masz długopis?",phonetic:"[o-lek masz dwoo-go-pis]",emoji:"🖊️",plMeaning:"Zapytanie kolegi z ławki o pożyczenie długopisu.",vnMeaning:"Hỏi mượn bạn cùng bàn một cây bút bi.",category:"Prośba w klasie",categoryVn:"Nhờ vả trong lớp",examplePl:"„Olek, masz długopis? Mój przestał pisać!”",exampleVn:'"Olek, cậu có bút bi không? Bút của tớ hết mực rồi!"',color:"#3a86ff"},{id:"b5_strona",word:"Która strona?",cleanWord:"Która strona?",phonetic:"[ktoo-ra stro-na]",emoji:"📖",plMeaning:"Pytanie do sąsiada z ławki, na której stronie podręcznika teraz jesteśmy.",vnMeaning:"Hỏi bạn xem cả lớp đang học trang nào trong sách.",category:"Pytanie na lekcji",categoryVn:"Hỏi trong giờ học",examplePl:"„Nauczyciel kazał otworzyć książki. Która strona?”",exampleVn:'"Thầy bảo mở sách ra rồi. Trang nào thế cậu?"',color:"#ff006e"},{id:"b5_pomoz",word:"Olek, pomóż mi, proszę.",cleanWord:"Olek, pomóż mi, proszę.",phonetic:"[o-lek po-moozh mi pro-she]",emoji:"🤝",plMeaning:"Uprzejma prośba o pomoc w trudnym zadaniu lub poleceniu.",vnMeaning:"Lời nhờ bạn giúp đỡ bài tập một cách lịch sự.",category:"Prośba o pomoc",categoryVn:"Nhờ giúp đỡ",examplePl:"„Nie rozumiem tego zadania. Olek, pomóż mi, proszę!”",exampleVn:'"Tớ chưa hiểu bài tập này. Olek, giúp tớ với nhé!"',color:"#8338ec"},{id:"b5_zeszyt",word:"Olek, mogę zobaczyć zeszyt?",cleanWord:"Olek, mogę zobaczyć zeszyt?",phonetic:"[o-lek mo-ge zo-ba-chych ze-shyt]",emoji:"📓",plMeaning:"Pytanie o możliwość podejrzenia notatek lub sprawdzenia rozwiązania.",vnMeaning:"Xin phép bạn cho xem nhờ vở ghi bài hoặc lời giải.",category:"Pożyczenie notatek",categoryVn:"Xem vở ghi chép",examplePl:"„Nie zdążyłem przepisać z tablicy. Olek, mogę zobaczyć zeszyt?”",exampleVn:'"Tớ chép bảng chưa kịp. Olek, cho tớ xem nhờ vở được không?"',color:"#fb5607"},{id:"b5_dzieki",word:"Dzięki!",cleanWord:"Dzięki!",phonetic:"[dzien-kee]",emoji:"🙏",plMeaning:"Naturalne, koleżeńskie podziękowanie za pomoc lub pożyczoną rzecz.",vnMeaning:"Lời cảm ơn ngắn gọn, thân thiết giữa bạn bè.",category:"Podziękowanie",categoryVn:"Lời cảm ơn",examplePl:"„Oddaję długopis. Dzięki wielkie!”",exampleVn:'"Tớ trả lại bút nè. Cảm ơn cậu nhiều nhé!"',color:"#06d6a0"}],ie=[{id:"b6_mega",word:"Mega",cleanWord:"Mega",phonetic:"[me-ga]",emoji:"🔥",image:"./assets/slowka/mega.png",plMeaning:"Coś ekstra, rewelacyjnego, na wyższym poziomie.",vnMeaning:"Cực đỉnh, tuyệt vời, trên cả mong đợi.",category:"Opinie i emocje",categoryVn:"Đánh giá & cảm xúc",examplePl:"„Ten nowy mecz był po prostu mega!”",exampleVn:'"Trận đấu mới này thực sự cực đỉnh!"',color:"#ff006e"},{id:"b6_fajne",word:"Fajne",cleanWord:"Fajne",phonetic:"[fai-neh]",emoji:"👍",image:"./assets/slowka/fajne.jpg",plMeaning:"Po prostu dobre, przyjemne, warte uwagi.",vnMeaning:"Hay, thú vị, đáng xem, dễ chịu.",category:"Opinie i emocje",categoryVn:"Đánh giá & cảm xúc",examplePl:"„To całkiem fajne buty na co dzień.”",exampleVn:'"Đôi giày này đi hàng ngày khá là ổn đấy."',color:"#06d6a0"},{id:"b6_slabe",word:"Słabe",cleanWord:"Słabe",phonetic:"[swa-beh]",emoji:"👎",image:"./assets/slowka/slabe.png",plMeaning:"Kiepskie, poniżej oczekiwań, bez rewelacji.",vnMeaning:"Dở, kém cỏi, không như kỳ vọng.",category:"Opinie i emocje",categoryVn:"Đánh giá & cảm xúc",examplePl:"„Ten film był naprawdę słaby, nudziłem się.”",exampleVn:'"Phim này dở thật sự, xem chán ngắt."',color:"#fb5607"},{id:"b6_nudne",word:"Nudne",cleanWord:"Nudne",phonetic:"[nood-neh]",emoji:"🥱",image:"./assets/slowka/nudne.png",plMeaning:"Przynudzające, bez emocji, nie warte czasu.",vnMeaning:"Nhàm chán, tẻ nhạt, mất thì giờ.",category:"Opinie i emocje",categoryVn:"Đánh giá & cảm xúc",examplePl:"„Długie czekanie w kolejce jest strasznie nudne.”",exampleVn:'"Ngồi chờ xếp hàng lâu chán chết đi được."',color:"#8338ec"},{id:"b6_lajki",word:"Lajki",cleanWord:"Lajki",phonetic:"[lai-kee]",emoji:"❤️",image:"./assets/slowka/fajne.jpg",plMeaning:"Polubienia, akceptacja, poparcie w internecie i życiu.",vnMeaning:"Lượt thích, sự ủng hộ, đồng tình trên mạng.",category:"Internet i relacje",categoryVn:"Mạng xã hội",examplePl:"„Zostaw lajka pod tym super filmikiem!”",exampleVn:'"Hãy để lại một lượt like dưới video siêu đỉnh này nhé!"',color:"#3a86ff"},{id:"b6_hejty",word:"Hejty",cleanWord:"Hejty",phonetic:"[khey-ty]",emoji:"💬",image:"./assets/slowka/hejt_i_przykrosci.jpg",plMeaning:"Złośliwe, negatywne komentarze, nienawiść i docinki.",vnMeaning:"Lời lẽ thù ghét, bình luận tiêu cực, ác ý.",category:"Internet i relacje",categoryVn:"Mạng xã hội",examplePl:"„Nie przejmuj się hejtem w komentarzach.”",exampleVn:'"Đừng bận tâm đến những bình luận ác ý trên mạng."',color:"#e63946"}],ae=[{id:"c1_reklamowka",word:"reklamówka (torba)",cleanWord:"reklamówka",phonetic:"[re-kla-muf-ka]",emoji:"🛍️",plMeaning:"Torba foliowa lub papierowa na zakupy przy kasie (biernik: reklamówkę).",vnMeaning:"Túi ni lông / túi mua sắm đựng đồ tại quầy thu ngân.",category:"Zakupy",categoryVn:"Mua sắm",examplePl:"„Czy potrzebna będzie reklamówka? — Tak, poproszę reklamówkę.”",exampleVn:'"Cháu có cần túi nilon không? — Dạ vâng, cho cháu xin một chiếc túi ạ."',color:"#06d6a0"},{id:"c1_bulka",word:"bułka (bułkę)",cleanWord:"bułkę",phonetic:"[boow-ka / boow-keh]",emoji:"🥖",image:"./assets/slowka/bulka.jpg",plMeaning:"Świeże pieczywo śniadaniowe (biernik: poproszę bułkę).",vnMeaning:"Bánh mì nhỏ (thể đối cách: poproszę bułkę - cho cháu xin bánh mì).",category:"Produkty",categoryVn:"Sản phẩm",examplePl:"„Poproszę świeżą bułkę pszenną.”",exampleVn:'"Cho cháu xin một chiếc bánh mì tươi ạ."',color:"#ffd166"},{id:"c1_woda",word:"woda (wodę)",cleanWord:"wodę",phonetic:"[vo-da / vo-deh]",emoji:"💧",image:"./assets/slowka/woda.jpg",plMeaning:"Woda mineralna do picia (biernik: poproszę wodę).",vnMeaning:"Nước khoáng đóng chai (thể đối cách: poproszę wodę - cho cháu xin nước).",category:"Produkty",categoryVn:"Sản phẩm",examplePl:"„Poproszę zimną wodę niegazowaną.”",exampleVn:'"Cho cháu xin một chai nước lọc không ga mát lạnh ạ."',color:"#3a86ff"},{id:"c1_czipsy",word:"czipsy",cleanWord:"czipsy",phonetic:"[cheep-sy]",emoji:"🥔",image:"./assets/slowka/czipsy.jpg",plMeaning:"Chrupiąca przekąska ziemniaczana.",vnMeaning:"Khoai tây chiên giòn, bim bim.",category:"Produkty",categoryVn:"Sản phẩm",examplePl:"„Poproszę paczkę czipsów paprykowych.”",exampleVn:'"Cho cháu xin một gói bim bim khoai tây vị ớt ạ."',color:"#f77f00"},{id:"c1_karta",word:"karta (kartą)",cleanWord:"kartą",phonetic:"[kar-ta / kar-tom]",emoji:"💳",image:"./assets/slowka/karta_kredytowa.jpg",plMeaning:"Karta bankowa do płatności zbliżeniowej (narzędnik: płacę kartą).",vnMeaning:"Thẻ ngân hàng (thanh toán chạm bằng thẻ).",category:"Płatność",categoryVn:"Thanh toán",examplePl:"„Będę płacić kartą zbliżeniowo.”",exampleVn:'"Cháu thanh toán chạm bằng thẻ ạ."',color:"#8338ec"},{id:"c1_gotowka",word:"gotówka (gotówką)",cleanWord:"gotówką",phonetic:"[go-toof-ka / go-toof-kom]",emoji:"💵",image:"./assets/slowka/gotowka.jpg",plMeaning:"Pieniądze papierowe lub bilon (narzędnik: płacę gotówką).",vnMeaning:"Tiền mặt (tiền giấy và tiền xu).",category:"Płatność",categoryVn:"Thanh toán",examplePl:"„Zapłacę gotówką, mam odliczone drobne.”",exampleVn:'"Cháu trả bằng tiền mặt, cháu có đủ tiền lẻ ạ."',color:"#2ec4b6"}],kt=[{id:"c1_w_reklamowka",sliceLabel:"🛍️ REKLAMÓWKA",sliceColor:"#06d6a0",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"reklamówka",options:[{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!0},{textPl:"🥖 Bánh mì",correct:!1},{textPl:"💧 Nước khoáng",correct:!1},{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!1},{textPl:"💳 Thẻ ngân hàng",correct:!1},{textPl:"💵 Tiền mặt",correct:!1}],explanationPl:"Świetnie! „Reklamówka” to po wietnamsku: Túi ni lông / Túi đựng đồ.",explanationVn:"Tuyệt vời! „Reklamówka” trong tiếng Việt nghĩa là túi ni lông hoặc túi đựng đồ mua sắm."},{id:"c1_w_bulka",sliceLabel:"🥖 BUŁKA",sliceColor:"#ffd166",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"bułka",options:[{textPl:"🥖 Bánh mì",correct:!0},{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!1},{textPl:"💧 Nước khoáng",correct:!1},{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!1},{textPl:"💳 Thẻ ngân hàng",correct:!1},{textPl:"💵 Tiền mặt",correct:!1}],explanationPl:"Doskonale! „Bułka” to po wietnamsku: Bánh mì.",explanationVn:"Xuất sắc! „Bułka” trong tiếng Việt nghĩa là chiếc bánh mì."},{id:"c1_w_woda",sliceLabel:"💧 WODA",sliceColor:"#3a86ff",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"woda",options:[{textPl:"💧 Nước khoáng",correct:!0},{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!1},{textPl:"🥖 Bánh mì",correct:!1},{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!1},{textPl:"💳 Thẻ ngân hàng",correct:!1},{textPl:"💵 Tiền mặt",correct:!1}],explanationPl:"Brawo! „Woda” to po wietnamsku: Nước khoáng.",explanationVn:"Hoan hô! „Woda” trong tiếng Việt là nước khoáng."},{id:"c1_w_czipsy",sliceLabel:"🥔 CZIPSY",sliceColor:"#f77f00",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"czipsy",options:[{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!0},{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!1},{textPl:"🥖 Bánh mì",correct:!1},{textPl:"💧 Nước khoáng",correct:!1},{textPl:"💳 Thẻ ngân hàng",correct:!1},{textPl:"💵 Tiền mặt",correct:!1}],explanationPl:"Super! „Czipsy” to po wietnamsku: Khoai tây chiên (bim bim).",explanationVn:"Tuyệt! „Czipsy” trong tiếng Việt là bim bim hoặc khoai tây chiên."},{id:"c1_w_karta",sliceLabel:"💳 KARTA",sliceColor:"#8338ec",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"karta",options:[{textPl:"💳 Thẻ ngân hàng",correct:!0},{textPl:"💵 Tiền mặt",correct:!1},{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!1},{textPl:"🥖 Bánh mì",correct:!1},{textPl:"💧 Nước khoáng",correct:!1},{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!1}],explanationPl:"Wspaniale! „Karta” to po wietnamsku: Thẻ ngân hàng.",explanationVn:"Tuyệt vời! „Karta” trong tiếng Việt là thẻ ngân hàng."},{id:"c1_w_gotowka",sliceLabel:"💵 GOTÓWKA",sliceColor:"#2ec4b6",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"gotówka",options:[{textPl:"💵 Tiền mặt",correct:!0},{textPl:"💳 Thẻ ngân hàng",correct:!1},{textPl:"🛍️ Túi ni lông (Túi đựng đồ)",correct:!1},{textPl:"🥖 Bánh mì",correct:!1},{textPl:"💧 Nước khoáng",correct:!1},{textPl:"🥔 Khoai tây chiên (Bim bim)",correct:!1}],explanationPl:"Prawidłowo! „Gotówka” to po wietnamsku: Tiền mặt.",explanationVn:"Chính xác! „Gotówka” trong tiếng Việt là tiền mặt."}],se=[{id:"city2_kebab",word:"Kebab",phonetic:"[ke-bab]",plMeaning:"Pieczone mięso w chlebku pita lub cieście z warzywami i sosem.",vnMeaning:"Thịt nướng cuộn bánh mì Kebab kèm rau và nước xốt.",emoji:"🥙",cleanWord:"kebab",category:"JEDZENIE",color:"#f77f00",examplePl:"Tan: „Poproszę duży kebab z kurczakiem.”",exampleVn:"Tan: „Cho em một phần Kebab gà lớn.”"},{id:"city2_burger",word:"Burger",phonetic:"[boor-gher]",plMeaning:"Kotlet w puszystej bułce z serem, sałatą i sosem.",vnMeaning:"Bánh mì kẹp thịt bò/gà với phô mai và rau tươi.",emoji:"🍔",cleanWord:"burger",category:"JEDZENIE",color:"#ffb703",examplePl:"Tan: „Poproszę klasyczny burger wołowy.”",exampleVn:"Tan: „Cho em một chiếc burger bò truyền thống.”"},{id:"city2_pizza",word:"Pizza",phonetic:"[peet-tsa]",plMeaning:"Włoski placek z sosem pomidorowym, serem i dodatkami.",vnMeaning:"Bánh Pizza nướng với xốt cà chua và phô mai.",emoji:"🍕",cleanWord:"pizza",category:"JEDZENIE",color:"#e63946",examplePl:"Tan: „Poproszę pizzę margherita.”",exampleVn:"Tan: „Cho em một chiếc bánh pizza margherita.”"},{id:"city2_sos_czosnkowy",word:"Sos czosnkowy",phonetic:"[sos chos-nko-vy]",plMeaning:"Kremowy, łagodny sos o aromacie czosnku i ziół.",vnMeaning:"Nước xốt tỏi béo ngậy, vị nhẹ dịu không cay.",emoji:"🧄",cleanWord:"sos czosnkowy",category:"SOSY",color:"#8ecae6",examplePl:"Tan: „Poproszę sos czosnkowy do kebaba.”",exampleVn:"Tan: „Cho em thêm xốt tỏi vào Kebab nhé.”"},{id:"city2_sos_ostry",word:"Sos ostry",phonetic:"[sos os-try]",plMeaning:"Pikantny sos chili dla miłośników wyrazistego smaku.",vnMeaning:"Nước xốt ớt cay nồng đậm đà.",emoji:"🌶️",cleanWord:"sos ostry",category:"SOSY",color:"#d90429",examplePl:"Tan: „Poproszę sos ostry, lubię pikantne jedzenie!”",exampleVn:"Tan: „Cho em xốt cay, em thích ăn cay!”"},{id:"city2_na_miejscu",word:"Na miejscu",phonetic:"[na myey-stsoo]",plMeaning:"Zjedzenie posiłku przy stoliku w lokalu gastronomicznym.",vnMeaning:"Ăn tại quán / Dùng tại chỗ.",emoji:"🍽️",cleanWord:"na miejscu",category:"SPOSÓB",color:"#06d6a0",examplePl:"Sprzedawca: „Na miejscu czy na wynos?” Tan: „Na miejscu!”",exampleVn:"Người bán: „Ăn tại đây hay mang về?” Tan: „Ăn tại quán ạ!”"},{id:"city2_na_wynos",word:"Na wynos",phonetic:"[na vy-nos]",plMeaning:"Zapakowanie posiłku do papierowej torby do zjedzenia w domu.",vnMeaning:"Gói mang về / Mang đi.",emoji:"🥡",cleanWord:"na wynos",category:"SPOSÓB",color:"#118ab2",examplePl:"Tan: „Poproszę na wynos, zjem w domu.”",exampleVn:"Tan: „Gói mang về giúp em, em ăn ở nhà.”"}],bt=[{id:"c2_w_kebab",sliceLabel:"🥙 KEBAB",sliceColor:"#f77f00",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Kebab",options:[{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!0},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1}],explanationPl:"Brawo! „Kebab” to po wietnamsku thịt nướng cuộn bánh mì Kebab.",explanationVn:"Tuyệt vời! „Kebab” trong tiếng Việt là món thịt nướng cuộn bánh mì."},{id:"c2_w_burger",sliceLabel:"🍔 BURGER",sliceColor:"#ffb703",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Burger",options:[{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!0},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1}],explanationPl:"Świetnie! Burger to bánh mì kẹp thịt bò lub gà.",explanationVn:"Xuất sắc! Burger là bánh mì kẹp thịt bò hoặc gà."},{id:"c2_w_pizza",sliceLabel:"🍕 PIZZA",sliceColor:"#e63946",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Pizza",options:[{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!0},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1}],explanationPl:"Doskonale! Pizza to włoski wypiek z serem (bánh pizza nướng).",explanationVn:"Chính xác! Pizza là bánh pizza nướng với phô mai và xốt cà chua."},{id:"c2_w_czosnkowy",sliceLabel:"🧄 SOS CZOSNKOWY",sliceColor:"#8ecae6",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Sos czosnkowy",options:[{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!0},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1}],explanationPl:"Znakomicie! Sos czosnkowy to nước xốt tỏi thơm ngon.",explanationVn:"Rất tốt! Sos czosnkowy là nước xốt tỏi béo nhẹ thơm ngon."},{id:"c2_w_ostry",sliceLabel:"🌶️ SOS OSTRY",sliceColor:"#d90429",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Sos ostry",options:[{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!0},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1}],explanationPl:"Super! Sos ostry to nước xốt ớt cay nồng đậm đà.",explanationVn:"Tuyệt vời! Sos ostry là nước xốt ớt cay nồng đậm đà."},{id:"c2_w_miejscu",sliceLabel:"🍽️ NA MIEJSCU",sliceColor:"#06d6a0",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Na miejscu",options:[{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!0},{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!1},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1}],explanationPl:"Wspaniale! „Na miejscu” oznacza zjedzenie posiłku w lokalu (ăn tại quán).",explanationVn:"Tuyệt! „Na miejscu” nghĩa là ăn tại quán hoặc dùng tại chỗ."},{id:"c2_w_wynos",sliceLabel:"🥡 NA WYNOS",sliceColor:"#118ab2",badge:"TŁUMACZENIE • DỊCH NGHĨA",speakText:"Na wynos",options:[{textPl:"🥡 „Na wynos”",textVn:"Gói mang về / Mang đi",correct:!0},{textPl:"🍽️ „Na miejscu”",textVn:"Ăn tại quán / Dùng tại chỗ",correct:!1},{textPl:"🌶️ „Sos ostry”",textVn:"Nước xốt ớt cay nồng đậm đà",correct:!1},{textPl:"🧄 „Sos czosnkowy”",textVn:"Nước xốt tỏi béo ngậy dịu",correct:!1},{textPl:"🍕 „Pizza”",textVn:"Bánh Pizza nướng phô mai",correct:!1},{textPl:"🍔 „Burger”",textVn:"Bánh mì kẹp thịt bò / gà",correct:!1},{textPl:"🥙 „Kebab”",textVn:"Thịt nướng cuộn bánh mì Kebab",correct:!1}],explanationPl:"Prawidłowo! „Na wynos” oznacza zapakowanie jedzenia na wynos (gói mang về).",explanationVn:"Chính xác! „Na wynos” có nghĩa là đóng gói đồ ăn mang về."}],oe=[{id:"city3_bilet_ulgowy",word:"Bilet ulgowy",phonetic:"[bee-let ool-go-vy]",plMeaning:"Tańszy bilet ze zniżką 50% dla uczniów posiadających legitymację.",vnMeaning:"Vé giảm giá 50% dành cho học sinh có thẻ học sinh.",emoji:"🎟️",cleanWord:"bilet ulgowy",category:"KOMUNIKACJA",color:"#3a86ff",examplePl:"Tan: „W biletomacie kupuję bilet ulgowy 20-minutowy.”",exampleVn:"Tan: „Ở máy bán vé em mua vé giảm giá 20 phút.”"},{id:"city3_bilet_normalny",word:"Bilet normalny",phonetic:"[bee-let nor-mal-ny]",plMeaning:"Bilet w pełnej cenie dla pasażerów bez ulg uczniowskich.",vnMeaning:"Vé tiêu chuẩn giá gốc cho hành khách không có giảm giá.",emoji:"🎫",cleanWord:"bilet normalny",category:"KOMUNIKACJA",color:"#4361ee",examplePl:"Dorosły pasażer kupuje bilet normalny.",exampleVn:"Hành khách người lớn mua vé tiêu chuẩn."},{id:"city3_legitymacja",word:"Legitymacja",phonetic:"[le-ghi-ty-ma-tsya]",plMeaning:"Dokument szkolny potwierdzający, że jesteś uczniem i masz prawo do ulgi.",vnMeaning:"Thẻ học sinh dùng để chứng minh quyền mua vé giảm giá.",emoji:"🪪",cleanWord:"legitymacja",category:"DOKUMENTY",color:"#ff006e",examplePl:"Inspektor: „Legitymację poproszę!” Tan: „Proszę, oto legitymacja!”",exampleVn:"Thanh tra: „Cho xin thẻ học sinh!” Tan: „Dạ đây, thẻ học sinh của em ạ!”"},{id:"city3_biletomat",word:"Biletomat",phonetic:"[bee-le-to-mat]",plMeaning:"Automatyczna maszyna na przystanku do zakupu biletów.",vnMeaning:"Máy bán vé tự động tại các trạm xe buýt hoặc xe điện.",emoji:"🤖",cleanWord:"biletomat",category:"MIASTO",color:"#06d6a0",examplePl:"Tan podchodzi do biletomatu i wybiera język polski.",exampleVn:"Tan đến máy bán vé tự động và chọn tiếng Ba Lan."},{id:"city3_przystanek",word:"Przystanek",phonetic:"[pshy-sta-nek]",plMeaning:"Wyznaczone miejsce z wiatą, gdzie zatrzymuje się autobus lub tramwaj.",vnMeaning:"Trạm dừng xe buýt hoặc tàu điện có bảng giờ chạy.",emoji:"🚏",cleanWord:"przystanek",category:"KOMUNIKACJA",color:"#ffbe0b",examplePl:"Tan: „Czekam na autobus na przystanku.”",exampleVn:"Tan: „Em đang đợi xe buýt tại trạm dừng.”"},{id:"city3_jak_dojsc",word:"Jak dojść?",phonetic:"[yak doyshch]",plMeaning:"Uprzejme pytanie o drogę do wybranego celu w mieście.",vnMeaning:"Làm thế nào để đi đến...? / Đường nào đến...?",emoji:"🗺️",cleanWord:"jak dojść",category:"PYTANIE",color:"#8338ec",examplePl:"Tan: „Przepraszam, jak dojść na przystanek tramwajowy?”",exampleVn:"Tan: „Xin lỗi, làm thế nào để đi đến trạm xe điện ạ?”"}],wt=[{id:"c3_w_droga",sliceLabel:"🗺️ JAK DOJŚĆ?",sliceColor:"#8338ec",badge:"PYTANIE O DROGĘ • HỎI ĐƯỜNG",speakText:"Przepraszam jak dojść",options:[{textPl:"🗺️ „Przepraszam, jak dojść na przystanek?”",textVn:"Xin lỗi, làm thế nào để đi đến trạm dừng ạ?",correct:!0},{textPl:"🚏 „Na przystanku autobusowym / tramwajowym.”",textVn:"Tại trạm xe buýt / xe điện.",correct:!1},{textPl:"🎟️ „Bilet ulgowy ze zniżką 50%.”",textVn:"Vé giảm giá 50% cho học sinh.",correct:!1},{textPl:"🪪 „Ważną legitymację szkolną.”",textVn:"Thẻ học sinh còn hiệu lực.",correct:!1},{textPl:"🤖 „W biletomacie na przystanku.”",textVn:"Ở máy bán vé tự động.",correct:!1}],explanationPl:"Brawo! „Przepraszam, jak dojść na...” to najbardziej uprzejme pytanie o drogę.",explanationVn:"Tuyệt vời! „Przepraszam, jak dojść na...” là câu hỏi đường lịch sự nhất."},{id:"c3_w_przystanek",sliceLabel:"🚏 PRZYSTANEK",sliceColor:"#ffbe0b",badge:"KOMUNIKACJA • GIAO THÔNG",speakText:"Przystanek autobusowy",options:[{textPl:"🚏 „Na przystanku autobusowym / tramwajowym.”",textVn:"Tại trạm xe buýt hoặc trạm xe điện.",correct:!0},{textPl:"🗺️ „Przepraszam, jak dojść na przystanek?”",textVn:"Xin lỗi, làm thế nào để đi đến trạm dừng ạ?",correct:!1},{textPl:"🎟️ „Bilet ulgowy ze zniżką 50%.”",textVn:"Vé giảm giá 50% cho học sinh.",correct:!1},{textPl:"🪪 „Ważną legitymację szkolną.”",textVn:"Thẻ học sinh còn hiệu lực.",correct:!1},{textPl:"🤖 „W biletomacie na przystanku.”",textVn:"Ở máy bán vé tự động.",correct:!1}],explanationPl:"Dokładnie! Pojazdy komunikacji miejskiej zatrzymują się na wyznaczonych przystankach.",explanationVn:"Chính xác! Phương tiện giao thông công cộng dừng ở trạm xe chỉ định."},{id:"c3_w_ulgowy",sliceLabel:"🎟️ BILET ULGOWY",sliceColor:"#3a86ff",badge:"ZNIŻKA • GIẢM GIÁ",speakText:"Bilet ulgowy",options:[{textPl:"🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”",textVn:"Vé giảm giá (giảm 50% dành cho học sinh).",correct:!0},{textPl:"🚏 „Na przystanku autobusowym / tramwajowym.”",textVn:"Tại trạm xe buýt hoặc trạm xe điện.",correct:!1},{textPl:"🗺️ „Przepraszam, jak dojść na przystanek?”",textVn:"Xin lỗi, làm thế nào để đi đến trạm dừng ạ?",correct:!1},{textPl:"🪪 „Ważną legitymację szkolną.”",textVn:"Thẻ học sinh còn hiệu lực.",correct:!1},{textPl:"🤖 „W biletomacie na przystanku.”",textVn:"Ở máy bán vé tự động.",correct:!1}],explanationPl:"Świetnie! Uczniowie mają prawo do biletu ulgowego z legitymacją.",explanationVn:"Xuất sắc! Học sinh có quyền mua vé giảm giá khi có thẻ học sinh."},{id:"c3_w_legitymacja",sliceLabel:"🪪 LEGITYMACJA",sliceColor:"#ff006e",badge:"DOKUMENT • GIẤY TỜ",speakText:"Legitymacja szkolna",options:[{textPl:"🪪 „Ważną legitymację szkolną.”",textVn:"Thẻ học sinh có hiệu lực.",correct:!0},{textPl:"🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”",textVn:"Vé giảm giá dành cho học sinh.",correct:!1},{textPl:"🚏 „Na przystanku autobusowym / tramwajowym.”",textVn:"Tại trạm xe buýt hoặc trạm xe điện.",correct:!1},{textPl:"🗺️ „Przepraszam, jak dojść na przystanek?”",textVn:"Xin lỗi, làm thế nào để đi đến trạm dừng ạ?",correct:!1},{textPl:"🤖 „W biletomacie na przystanku.”",textVn:"Ở máy bán vé tự động.",correct:!1}],explanationPl:"Doskonale! Legitymacja szkolna jest dowodem na prawo do zniżki ulgowej.",explanationVn:"Chính xác! Thẻ học sinh là bằng chứng chứng minh quyền hưởng giá vé ưu đãi."},{id:"c3_w_biletomat",sliceLabel:"🤖 BILETOMAT",sliceColor:"#06d6a0",badge:"MIASTO • ĐÔ THỊ",speakText:"Biletomat",options:[{textPl:"🤖 „W biletomacie na przystanku.”",textVn:"Tại máy bán vé tự động ở trạm dừng.",correct:!0},{textPl:"🪪 „Ważną legitymację szkolną.”",textVn:"Thẻ học sinh có hiệu lực.",correct:!1},{textPl:"🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”",textVn:"Vé giảm giá dành cho học sinh.",correct:!1},{textPl:"🚏 „Na przystanku autobusowym / tramwajowym.”",textVn:"Tại trạm xe buýt hoặc trạm xe điện.",correct:!1},{textPl:"🗺️ „Przepraszam, jak dojść na przystanek?”",textVn:"Xin lỗi, làm thế nào để đi đến trạm dừng ạ?",correct:!1}],explanationPl:"Znakomicie! Biletomat to urządzenie na przystanku do zakupu biletów.",explanationVn:"Rất tốt! Máy bán vé biletomat là máy tự động để mua vé tại trạm."}],A=[{id:"m3_w1",word:"Nie rozumiem",cleanWord:"Nie rozumiem",phonetic:"[ne ro-zu-mem]",plMeaning:"Gdy nie rozumiesz polecenia nauczyciela",vnMeaning:"Em không hiểu lời thầy cô",color:"#3b82f6",audioText:"Nie rozumiem, proszę pani.",examplePl:"„Przepraszam, nie rozumiem tego zadania.”",exampleVn:"„Xin lỗi, em không hiểu bài tập này ạ.”"},{id:"m3_w2",word:"Proszę powtórzyć",cleanWord:"Proszę powtórzyć",phonetic:"[pro-sze pow-tu-rzyc]",plMeaning:"Grzeczna prośba o ponowne wyjaśnienie",vnMeaning:"Xin thầy/cô nhắc lại một lần nữa ạ",color:"#6366f1",audioText:"Proszę powtórzyć polecenie.",examplePl:"„Czy może pani powtórzyć pytanie?”",exampleVn:"„Cô có thể nhắc lại câu hỏi được không ạ?”"},{id:"m3_w3",word:"Czy mogę wyjść do toalety?",cleanWord:"Czy mogę wyjść do toalety",phonetic:"[czy mo-ge wyjsc do to-a-le-ty]",plMeaning:"Prośba o wyjście za potrzebą podczas lekcji",vnMeaning:"Em xin phép ra ngoài đi vệ sinh ạ",color:"#06b6d4",audioText:"Czy mogę wyjść do toalety?",examplePl:"„Przepraszam, czy mogę wyjść do toalety?”",exampleVn:"„Xin lỗi cô, em xin phép ra ngoài đi vệ sinh ạ.”"},{id:"m3_w4",word:"Przepraszam",cleanWord:"Przepraszam",phonetic:"[pshe-pra-szam]",plMeaning:"Podstawowy zwrot grzecznościowy w klasie",vnMeaning:"Em xin lỗi / Em xin phép ạ",color:"#f59e0b",audioText:"Przepraszam za spóźnienie.",examplePl:"„Przepraszam, mam pytanie do lekcji.”",exampleVn:"„Em xin phép, em có câu hỏi về bài học ạ.”"},{id:"m3_w5",word:"Wolniej",cleanWord:"Wolniej",phonetic:"[wol-nej]",plMeaning:"Prośba o wolniejsze mówienie",vnMeaning:"Xin nói chậm lại một chút ạ",color:"#10b981",audioText:"Proszę mówić trochę wolniej.",examplePl:"„Czy może pan mówić trochę wolniej?”",exampleVn:"„Thầy có thể nói chậm hơn một chút được không ạ?”"},{id:"m3_w6",word:"Jeszcze raz",cleanWord:"Jeszcze raz",phonetic:"[jesz-cze raz]",plMeaning:"Prośba o jeszcze jedno powtórzenie",vnMeaning:"Thêm một lần nữa ạ",color:"#ec4899",audioText:"Jeszcze raz, proszę.",examplePl:"„Nie usłyszałem, proszę jeszcze raz.”",exampleVn:"„Em chưa nghe rõ, xin cô nhắc lại một lần nữa ạ.”"}],I=[{id:"m3_w7",word:"Nie mam zeszytu",cleanWord:"Nie mam zeszytu",phonetic:"[ne mam ze-szy-tu]",plMeaning:"Komunikowanie braku zeszytu przedmiotowego",vnMeaning:"Em không mang theo vở ạ",color:"#ef4444",audioText:"Nie mam zeszytu z zadaniem.",examplePl:"„Przepraszam, nie mam dzisiaj zeszytu.”",exampleVn:"„Em xin lỗi, hôm nay em quên mang vở ạ.”"},{id:"m3_w8",word:"Nie mam podręcznika",cleanWord:"Nie mam podręcznika",phonetic:"[ne mam pod-recz-ni-ka]",plMeaning:"Komunikowanie braku książki do nauki",vnMeaning:"Em không có sách giáo khoa ạ",color:"#f97316",audioText:"Nie mam podręcznika.",examplePl:"„Czy mogę patrzeć do podręcznika z kolegą?”",exampleVn:"„Em có thể nhìn chung sách với bạn được không ạ?”"},{id:"m3_w9",word:"Zapomniałem",cleanWord:"Zapomniałem",phonetic:"[za-pom-na-lem]",plMeaning:"Uczciwe zgłoszenie zapomnienia pracy lub rzeczy",vnMeaning:"Em quên mất rồi ạ",color:"#8b5cf6",audioText:"Zapomniałem zrobić zadanie domowe.",examplePl:"„Bardzo przepraszam, zapomniałem zadania domowego.”",exampleVn:"„Em rất xin lỗi, em quên làm bài tập về nhà ạ.”"},{id:"m3_w10",word:"Długopis",cleanWord:"Długopis",phonetic:"[dlu-go-pis]",plMeaning:"Narzędzie do pisania w zeszycie",vnMeaning:"Cây bút bi",color:"#3b82f6",audioText:"Niebieski długopis do pisania.",examplePl:"„Olek, masz pożyczyć zapasowy długopis?”",exampleVn:"„Olek, cậu có bút bi thừa cho tớ mượn không?”"},{id:"m3_w11",word:"Gumka",cleanWord:"Gumka",phonetic:"[gum-ka]",plMeaning:"Przybór do ścierania ołówka",vnMeaning:"Cục tẩy",color:"#14b8a6",audioText:"Gumka do ścierania.",examplePl:"„Zmażę ten błąd gumką.”",exampleVn:"„Tớ sẽ dùng tẩy xóa lỗi sai này.”"},{id:"m3_w12",word:"Linijka",cleanWord:"Linijka",phonetic:"[li-nij-ka]",plMeaning:"Przybór do mierzenia i rysowania prostych linii",vnMeaning:"Cây thước kẻ",color:"#eab308",audioText:"Plastikowa linijka.",examplePl:"„Narysuję prostą linię linijką.”",exampleVn:"„Tớ sẽ dùng thước kẻ vẽ đường thẳng.”"}],N=[{id:"m3_w13",word:"Poniedziałek",cleanWord:"Poniedziałek",phonetic:"[po-ne-dza-lek]",plMeaning:"Pierwszy dzień szkolnego tygodnia",vnMeaning:"Thứ hai đầu tuần",color:"#3b82f6",audioText:"W poniedziałek mamy trudną lekcję.",examplePl:"„W poniedziałek zaczynamy o 8:00.”",exampleVn:"„Thứ hai chúng mình bắt đầu lúc 8 giờ.”"},{id:"m3_w14",word:"Środa",cleanWord:"Środa",phonetic:"[sro-da]",plMeaning:"Środek tygodnia nauki",vnMeaning:"Thứ tư giữa tuần",color:"#6366f1",audioText:"W środę mamy basen i WF.",examplePl:"„W środę mamy plastykę i angielski.”",exampleVn:"„Thứ tư có môn mỹ thuật và tiếng Anh.”"},{id:"m3_w15",word:"Piątek",cleanWord:"Piątek",phonetic:"[pon-tek]",plMeaning:"Ostatni dzień lekcji przed weekendem",vnMeaning:"Thứ sáu cuối tuần",color:"#10b981",audioText:"W piątek po szkole gramy w piłkę.",examplePl:"„W piątek mamy tylko 4 lekcje!”",exampleVn:"„Thứ sáu tụi mình chỉ có 4 tiết thôi!”"},{id:"m3_w16",word:"Matma",cleanWord:"Matma",phonetic:"[mat-ma]",plMeaning:"Matematyka – liczenie, ułamki i zadania",vnMeaning:"Môn Toán học",color:"#f59e0b",audioText:"Lekcja matematyki.",examplePl:"„Na matmie liczymy zadania z geometrii.”",exampleVn:"„Trong giờ toán tụi mình làm bài hình học.”"},{id:"m3_w17",word:"WF",cleanWord:"WF",phonetic:"[wu-ef]",plMeaning:"Wychowanie Fizyczne – sport, bieg i gry zespołowe",vnMeaning:"Môn Thể dục thể thao",color:"#ef4444",audioText:"Wychowanie fizyczne na sali gimnastycznej.",examplePl:"„Na WF-ie gramy dzisiaj w siatkówkę!”",exampleVn:"„Hôm nay giờ thể dục tụi mình chơi bóng chuyền!”"},{id:"m3_w18",word:"Plastyka",cleanWord:"Plastyka",phonetic:"[plas-ty-ka]",plMeaning:"Lekcja rysunku, malowania i twórczości",vnMeaning:"Môn Mỹ thuật vẽ tranh",color:"#ec4899",audioText:"Lekcja plastyki i malowania.",examplePl:"„Na plastykę potrzebne są farby i pędzel.”",exampleVn:"„Giờ mỹ thuật cần màu vẽ và cọ vẽ.”"},{id:"m3_w19",word:"Dzwonek",cleanWord:"Dzwonek",phonetic:"[dzwo-nek]",plMeaning:"Dźwięk oznajmiający początek lub koniec lekcji",vnMeaning:"Tiếng chuông báo hiệu",color:"#eab308",audioText:"Zaraz zadzwoni dzwonek na przerwę.",examplePl:"„Słychać dzwonek! Koniec lekcji!”",exampleVn:"„Có chuông rồi! Hết tiết học rồi!”"},{id:"m3_w20",word:"Przerwa",cleanWord:"Przerwa",phonetic:"[psher-wa]",plMeaning:"Czas odpoczynku i zjedzenia śniadania między lekcjami",vnMeaning:"Giờ ra chơi giải lao",color:"#06b6d4",audioText:"Długa przerwa obiadowa.",examplePl:"„Na dużej przerwie zjem drożdżówkę.”",exampleVn:"„Vào giờ ra chơi lớn tớ sẽ ăn bánh ngọt.”"}],$=[{id:"m4_w1",word:"Jestem głodny",cleanWord:"Jestem głodny",phonetic:"[jes-tem glo-dny]",plMeaning:"Gdy Twój żołądek domaga się jedzenia",vnMeaning:"Em đói bụng rồi",color:"#f97316",audioText:"Jestem bardzo głodny.",examplePl:"„Jestem głodny, zjem drugie śniadanie.”",exampleVn:"„Em đói rồi, em sẽ ăn bữa sáng thứ hai.”"},{id:"m4_w2",word:"Chce mi się pić",cleanWord:"Chce mi się pić",phonetic:"[chce mi sie pic]",plMeaning:"Uczucie pragnienia po lekcji lub bieganiu",vnMeaning:"Em muốn uống nước / Em khát nước",color:"#06b6d4",audioText:"Chce mi się pić, poproszę wodę.",examplePl:"„Po WF-ie strasznie chce mi się pić.”",exampleVn:"„Sau giờ thể dục em khát nước khủng khiếp.”"},{id:"m4_w3",word:"Jest mi zimno",cleanWord:"Jest mi zimno",phonetic:"[jest mi zim-no]",plMeaning:"Uczucie chłodu – potrzeba założenia bluzy lub zamknięcia okna",vnMeaning:"Em thấy lạnh quá",color:"#3b82f6",audioText:"Jest mi zimno, założę ciepły szalik.",examplePl:"„Jest mi zimno, czy mogę zamknąć okno?”",exampleVn:"„Em thấy lạnh, em có thể đóng cửa sổ được không ạ?”"},{id:"m4_w4",word:"Jest mi gorąco",cleanWord:"Jest mi gorąco",phonetic:"[jest mi go-ron-co]",plMeaning:"Uczucie przegrzania po wysiłku",vnMeaning:"Em thấy nóng quá",color:"#ef4444",audioText:"Jest mi gorąco po bieganiu.",examplePl:"„Zdejmij bluzę, jeśli jest ci gorąco.”",exampleVn:"„Hãy cởi áo khoác ra nếu em thấy nóng.”"},{id:"m4_w5",word:"Odpoczynek",cleanWord:"Odpoczynek",phonetic:"[od-po-czy-nek]",plMeaning:"Chwila relaksu dla zregenerowania sił",vnMeaning:"Sự nghỉ ngơi hồi phục",color:"#10b981",audioText:"Czas na krótki odpoczynek.",examplePl:"„Po ciężkim sprawdzianie potrzebuję odpoczynku.”",exampleVn:"„Sau bài kiểm tra căng thẳng em cần nghỉ ngơi.”"},{id:"m4_w6",word:"Świeże powietrze",cleanWord:"Świeże powietrze",phonetic:"[swie-ze po-wie-tshe]",plMeaning:"Wyjście na zewnątrz dla dotlenienia mózgu",vnMeaning:"Không khí trong lành",color:"#84cc16",audioText:"Wyjdźmy na świeże powietrze.",examplePl:"„Wyjdźmy na boisko na świeże powietrze.”",exampleVn:"„Tụi mình ra sân hít thở không khí trong lành đi.”"}],W=[{id:"m4_w7",word:"Boli mnie głowa",cleanWord:"Boli mnie głowa",phonetic:"[bo-li mne glo-wa]",plMeaning:"Ból w okolicach skroni lub czoła",vnMeaning:"Em bị đau đầu",color:"#f43f5e",audioText:"Bardzo boli mnie głowa.",examplePl:"„Proszę pani, bardzo boli mnie głowa.”",exampleVn:"„Thưa cô, em bị đau đầu dữ dội ạ.”"},{id:"m4_w8",word:"Boli mnie brzuch",cleanWord:"Boli mnie brzuch",phonetic:"[bo-li mne bzhuch]",plMeaning:"Bolesność żołądka lub brzucha",vnMeaning:"Em bị đau bụng",color:"#ea580c",audioText:"Boli mnie brzuch po obiedzie.",examplePl:"„Czy mogę pójść do gabinetu pielęgniarki? Boli mnie brzuch.”",exampleVn:"„Em có thể xuống phòng y tế được không ạ? Em bị đau bụng.”"},{id:"m4_w9",word:"Boli mnie gardło",cleanWord:"Boli mnie gardło",phonetic:"[bo-li mne gar-dlo]",plMeaning:"Ból przy przełykaniu śliny",vnMeaning:"Em bị đau rát cổ họng",color:"#d97706",audioText:"Boli mnie gardło i chrypię.",examplePl:"„Boli mnie gardło, napiję się ciepłej herbaty.”",exampleVn:"„Cổ họng em bị rát, em sẽ uống trà ấm.”"},{id:"m4_w10",word:"Źle się czuję",cleanWord:"Źle się czuję",phonetic:"[zle sie czu-je]",plMeaning:"Ogólne poczucie osłabienia i choroby",vnMeaning:"Em cảm thấy trong người không được khỏe",color:"#8b5cf6",audioText:"Źle się czuję od rana.",examplePl:"„Mamo, źle się czuję, chyba mam gorączkę.”",exampleVn:"„Mẹ ơi, con thấy trong người mệt mỏi, hình như con bị sốt.”"},{id:"m4_w11",word:"Gorączka",cleanWord:"Gorączka",phonetic:"[go-roncz-ka]",plMeaning:"Wysoka temperatura ciała powyżej 38°C",vnMeaning:"Cơn sốt cao",color:"#dc2626",audioText:"Termometr pokazuje gorączkę.",examplePl:"„Pielęgniarka zmierzyła mi temperaturę: mam gorączkę.”",exampleVn:"„Y tá đo nhiệt độ cho em: em bị sốt rồi.”"},{id:"m4_w12",word:"Lekarstwo",cleanWord:"Lekarstwo",phonetic:"[le-kar-stwo]",plMeaning:"Syrop lub tabletka przepisana przez lekarza",vnMeaning:"Thuốc chữa bệnh",color:"#059669",audioText:"Przepisane lekarstwo i witaminy.",examplePl:"„Muszę regularnie brać przepisane lekarstwo.”",exampleVn:"„Em cần uống thuốc theo đúng chỉ dẫn của bác sĩ.”"}],O=[{id:"m4_w13",word:"Jestem zmęczony",cleanWord:"Jestem zmęczony",phonetic:"[jes-tem zmen-czo-ny]",plMeaning:"Brak sił i senność po całym dniu nauki",vnMeaning:"Em thấy mệt mỏi kiệt sức",color:"#64748b",audioText:"Jestem bardzo zmęczony po lekcjach.",examplePl:"„Jestem zmęczony, muszę się zdrzemnąć.”",exampleVn:"„Em mệt quá, em cần chợp mắt một lát.”"},{id:"m4_w14",word:"Nudzę się",cleanWord:"Nudzę się",phonetic:"[nu-dze sie]",plMeaning:"Brak ciekawego zajęcia i nuda",vnMeaning:"Em thấy buồn chán, không có gì làm",color:"#78716c",audioText:"Nudzę się sam w pokoju.",examplePl:"„Nudzę się, chodźmy na dwór pokopać piłkę!”",exampleVn:"„Chán quá, tụi mình ra ngoài đá bóng đi!”"},{id:"m4_w15",word:"Jestem zły",cleanWord:"Jestem zły",phonetic:"[jes-tem zly]",plMeaning:"Uczucie złości lub frustracji",vnMeaning:"Em đang rất tức giận / bực mình",color:"#ef4444",audioText:"Jestem zły, że przegraliśmy mecz.",examplePl:"„Jestem zły, potrzebuję chwili spokoju.”",exampleVn:"„Em đang bực, em cần một chút yên tĩnh.”"},{id:"m4_w16",word:"Wszystko okej",cleanWord:"Wszystko okej",phonetic:"[wszyst-ko o-kej]",plMeaning:"Uspokajające zapewnienie, że wszystko w porządku",vnMeaning:"Mọi thứ đều ổn, không sao cả",color:"#22c55e",audioText:"Nie martw się, wszystko okej!",examplePl:"„Dzięki za troskę, wszystko ze mną okej!”",exampleVn:"„Cảm ơn cậu đã hỏi thăm, tớ ổn cả!”"},{id:"m4_w17",word:"Wesoły",cleanWord:"Wesoły",phonetic:"[we-so-ly]",plMeaning:"Radosny stan ducha, uśmiech na twarzy",vnMeaning:"Vui vẻ yêu đời",color:"#eab308",audioText:"Jestem dzisiaj bardzo wesoły.",examplePl:"„Dostałem dobrą ocenę i jestem wesoły.”",exampleVn:"„Em được điểm tốt nên rất vui vẻ.”"},{id:"m4_w18",word:"Spokojny",cleanWord:"Spokojny",phonetic:"[spo-koj-ny]",plMeaning:"Opanowany i zrelaksowany",vnMeaning:"Bình tĩnh và thoải mái",color:"#06b6d4",audioText:"Głęboki oddech i jestem spokojny.",examplePl:"„Wziąłem głęboki oddech i jestem spokojny.”",exampleVn:"„Em hít thở sâu và cảm thấy bình tĩnh.”"}],q=[{id:"m5_w1",word:"Pochodzę z Wietnamu",cleanWord:"Pochodzę z Wietnamu",phonetic:"[po-cho-dze z wiet-na-mu]",plMeaning:"Mówienie o swoim kraju pochodzenia i korzeniach",vnMeaning:"Tôi đến từ Việt Nam",color:"#dc2626",audioText:"Pochodzę z Wietnamu, z pięknego Hanoi.",examplePl:"„Pochodzę z Wietnamu, ale mieszkam w Polsce.”",exampleVn:"„Tôi đến từ Việt Nam, nhưng hiện đang sống ở Ba Lan.”"},{id:"m5_w2",word:"Mieszkam w Polsce",cleanWord:"Mieszkam w Polsce",phonetic:"[mesz-kam w pol-sce]",plMeaning:"Informacja o obecnym miejscu zamieszkania",vnMeaning:"Tôi đang sinh sống tại Ba Lan",color:"#f43f5e",audioText:"Mieszkam w Polsce od kilku lat.",examplePl:"„Mieszkam w Polsce i chodzę do polskiej szkoły.”",exampleVn:"„Tôi sống ở Ba Lan và theo học tại một trường Ba Lan.”"},{id:"m5_w3",word:"Mam 13 lat",cleanWord:"Mam 13 lat",phonetic:"[mam trzy-nas-cie lat]",plMeaning:"Podawanie swojego wieku rówieśnikom",vnMeaning:"Tôi 13 tuổi",color:"#3b82f6",audioText:"Mam 13 lat i lubię sport.",examplePl:"„Mam 13 lat, tak samo jak koledzy z klasy.”",exampleVn:"„Tôi 13 tuổi, bằng tuổi các bạn trong lớp.”"},{id:"m5_w4",word:"Komputer",cleanWord:"Komputer",phonetic:"[kom-pu-ter]",plMeaning:"Sprzęt do nauki, programowania i gier",vnMeaning:"Máy tính để bàn / Laptop",color:"#6366f1",audioText:"Mój komputer stoi na biurku.",examplePl:"„Włączam komputer, żeby odrobić projekt.”",exampleVn:"„Tôi bật máy tính để làm bài tập dự án.”"},{id:"m5_w5",word:"Słuchawki",cleanWord:"Słuchawki",phonetic:"[slu-chaw-ki]",plMeaning:"Urządzenie do słuchania muzyki i rozmów z mikrofonem",vnMeaning:"Tai nghe chụp tai có micro",color:"#8b5cf6",audioText:"Bezprzewodowe słuchawki gamingowe.",examplePl:"„Zakładam słuchawki i gadam z kolegami na Discordzie.”",exampleVn:"„Tôi đeo tai nghe vào để trò chuyện với bạn bè trên Discord.”"},{id:"m5_w6",word:"Ładowarka",cleanWord:"Ładowarka",phonetic:"[la-do-war-ka]",plMeaning:"Kabel i adapter do ładowania telefonu lub laptopa",vnMeaning:"Cục sạc điện thoại / dây sạc",color:"#eab308",audioText:"Gdzie leży moja ładowarka?",examplePl:"„Czy ktoś widział moją szybką ładowarkę USB-C?”",exampleVn:"„Có ai nhìn thấy củ sạc nhanh USB-C của tôi ở đâu không?”"},{id:"m5_w7",word:"Szybkie Wi-Fi",cleanWord:"Szybkie Wi-Fi",phonetic:"[szyb-ke wi-fi]",plMeaning:"Bezprzewodowe połączenie internetowe o dużej prędkości",vnMeaning:"Mạng Wi-Fi tốc độ cao",color:"#06b6d4",audioText:"W moim pokoju jest szybkie Wi-Fi.",examplePl:"„Dzięki szybkiemu Wi-Fi gry nie lagują!”",exampleVn:"„Nhờ có mạng Wi-Fi nhanh mà chơi game không bị giật lag!”"}],K=[{id:"m5_w8",word:"Mecz",cleanWord:"Mecz",phonetic:"[mecz]",plMeaning:"Sportowe starcie dwóch drużyn piłkarskich",vnMeaning:"Trận đấu bóng đá đỉnh cao",color:"#16a34a",audioText:"Dzisiaj wieczorem gramy ważny mecz.",examplePl:"„Oglądam w telewizji mecz Ligi Mistrzów.”",exampleVn:"„Tôi đang theo dõi trận đấu Cúp C1 trên truyền hình.”"},{id:"m5_w9",word:"Szybki zawodnik",cleanWord:"Szybki zawodnik",phonetic:"[szyb-ki za-wod-nik]",plMeaning:"Gracz potrafiący błyskawicznie biegać z piłką",vnMeaning:"Cầu thủ chạy cánh thần tốc",color:"#2563eb",audioText:"Niesamowicie szybki zawodnik na skrzydle.",examplePl:"„Ten napastnik to niezwykle szybki zawodnik.”",exampleVn:"„Tiền đạo đó là một cầu thủ cực kỳ nhanh nhẹn.”"},{id:"m5_w10",word:"Najlepszy mistrz",cleanWord:"Najlepszy mistrz",phonetic:"[naj-lep-szy mistrz]",plMeaning:"Zdobywca złotego pucharu i pierwszego miejsca",vnMeaning:"Nhà vô địch xuất sắc nhất",color:"#e11d48",audioText:"Został wybrany na najlepszego mistrza.",examplePl:"„Nasza drużyna to najlepszy mistrz turnieju!”",exampleVn:"„Đội bóng của chúng tôi là nhà vô địch xuất sắc nhất giải!”"},{id:"m5_w11",word:"Filmiki i trendy",cleanWord:"Filmiki i trendy",phonetic:"[fil-mi-ki i tren-dy]",plMeaning:"Krótkie wideo na TikToku i modne wyzwania",vnMeaning:"Video ngắn và các trào lưu xu hướng",color:"#ec4899",audioText:"Oglądam śmieszne filmiki i nowe trendy.",examplePl:"„Ten filmik zdobył milion wyświetleń w jeden dzień!”",exampleVn:"„Đoạn video ngắn đó đã đạt một triệu lượt xem chỉ sau một ngày!”"},{id:"m5_w12",word:"Zabawne memy",cleanWord:"Zabawne memy",phonetic:"[za-baw-ne me-my]",plMeaning:"Śmieszne obrazki z podpisem krążące w sieci",vnMeaning:"Những hình ảnh meme hài hước trên mạng",color:"#f59e0b",audioText:"Wysyłam kolegom zabawne memy.",examplePl:"„Przesłałem Olowi przez telefon zabawne memy.”",exampleVn:"„Tôi đã gửi cho Olek những hình ảnh meme rất hài hước qua điện thoại.”"},{id:"m5_w13",word:"Anime",cleanWord:"Anime",phonetic:"[a-ni-me]",plMeaning:"Japońskie seriale animowane i manga (np. Doraemon)",vnMeaning:"Phim hoạt hình Anime và truyện tranh",color:"#a855f7",audioText:"Lubię oglądać odcinki anime.",examplePl:"„Moje ulubione anime to Doraemon i Dragon Ball.”",exampleVn:"„Bộ phim anime yêu thích của tôi là Doraemon và Dragon Ball.”"}];class zt{constructor(){this.currentTrack=null,this.currentTrackName=null,this.currentFloor=1,this.muted=!1,this.volume=.38,this.m1_2_combatIndex=0,this.m3_4_combatIndex=0,this.interactionUnlocked=!1,this.pendingPlay=null,this.initUserInteraction()}initUserInteraction(){const e=()=>{if(this.interactionUnlocked=!0,this.pendingPlay&&!this.muted){const i=this.pendingPlay;this.pendingPlay=null,i()}this.currentTrack&&!this.currentTrack.paused&&["pointerdown","mousedown","touchstart","keydown","click"].forEach(a=>{typeof window<"u"&&window.removeEventListener&&window.removeEventListener(a,e,!0),typeof document<"u"&&document.removeEventListener&&document.removeEventListener(a,e,!0)})};["pointerdown","mousedown","touchstart","keydown","click"].forEach(i=>{typeof window<"u"&&window.addEventListener&&window.addEventListener(i,e,{capture:!0}),typeof document<"u"&&document.addEventListener&&document.addEventListener(i,e,{capture:!0})})}getModuleNumber(e=this.currentFloor){const t=String(e);return t.startsWith("m5_")?5:t.startsWith("m4_")?4:t.startsWith("m3_")?3:t.startsWith("city_")||t==="miasto"||["8","9","10","11"].includes(t)?2:1}getAudioUrl(e){return`/assets/music/${encodeURIComponent(e)}`}playTrack(e,t=!0){if(this.currentTrackName===e&&this.currentTrack&&!this.currentTrack.paused)return;const i=()=>{if(this.muted){this.currentTrackName=e;return}const a=this.currentTrack;if(a)try{const s=setInterval(()=>{a.volume>.05?a.volume=Math.max(0,a.volume-.08):(clearInterval(s),a.pause(),a.src="")},35)}catch{a.pause()}try{const s=new Audio(this.getAudioUrl(e));s.loop=t,s.volume=this.volume,s.addEventListener("error",()=>{s.src.includes("./assets/")||(s.src=`./assets/music/${encodeURIComponent(e)}`,s.play().catch(()=>{}))});const o=s.play();o!==void 0&&o.catch(n=>{this.pendingPlay=()=>this.playTrack(e,t)}),this.currentTrack=s,this.currentTrackName=e}catch{}};if(!this.interactionUnlocked){this.currentTrackName=e,this.pendingPlay=i;return}i()}stopTrack(){if(this.currentTrack){try{this.currentTrack.pause(),this.currentTrack.src=""}catch{}this.currentTrack=null}this.currentTrackName=null}setMuted(e){if(this.muted=!!e,this.muted)this.currentTrack&&this.currentTrack.pause();else if(this.currentTrack&&this.currentTrack.paused)this.currentTrack.play().catch(()=>{});else if(this.currentTrackName){const t=this.currentTrackName;this.currentTrackName=null,this.playTrack(t)}}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}playBoardMusic(e=this.currentFloor){this.currentFloor=e;const t=this.getModuleNumber(e);let i;t===1?i="Chipzel - 24 Szatnia.mp3":t===2?i="Chipzel - 18 Miasto.mp3":t===3?i="Chipzel - 23 Klasa.mp3":t===4?i="Chipzel - 20 Gabinet.mp3":i="Chipzel - 19 Pokój.mp3",this.playTrack(i,!0)}resumeBoardMusic(){this.playBoardMusic(this.currentFloor)}playCombatMusic(e=this.currentFloor){const t=this.getModuleNumber(e);let i;if(t===1||t===2){const a=["Chipzel - 03 Beginners Luck.mp3","Chipzel - 04 Fighting Chance.mp3"];i=a[this.m1_2_combatIndex%a.length],this.m1_2_combatIndex+=1}else if(t===3||t===4){const a=["Chipzel - 06 Step Right Up.mp3","Chipzel - 07 Tempting Fate.mp3"];i=a[this.m3_4_combatIndex%a.length],this.m3_4_combatIndex+=1}else i="Chipzel - 05 Swing Me Another 6.mp3";this.playTrack(i,!0)}playBossFightMusic(e=null){const t=e!==null?e:this.getModuleNumber(this.currentFloor);let i;t===1?i="Chipzel - 09 Against All Odds.mp3":t===2?i="Chipzel - 10 Elimination Round.mp3":t===3?i="Chipzel - 11 Lifeline.mp3":t===4?i="Chipzel - 12 Bonus Round.mp3":i="Chipzel - 14 Fortune Favours The Bold.mp3",this.playTrack(i,!0)}playVictoryMusic(){this.playTrack("Chipzel - 15 A Brand New Washing Machine!.mp3",!0)}playChestMusic(){this.playTrack("Chipzel - 28 Play To Win.mp3",!0)}playBookMusic(){this.playTrack("Chipzel - 28 Play To Win.mp3",!0)}}const P=new zt;class ft{constructor(){this.ctx=null,this.muted=!1,this.sfxVolume=.85,this.characterVoiceVolume=.62,this.audioBuffers=new Map,this.loadingPromises=new Map,this.preloaded=!1,this.initUserGesture()}initUserGesture(){const e=()=>{this.init(),this.ctx&&this.ctx.state==="running"&&["pointerdown","mousedown","touchstart","keydown","click"].forEach(a=>{typeof window<"u"&&window.removeEventListener&&window.removeEventListener(a,e,!0),typeof document<"u"&&document.removeEventListener&&document.removeEventListener(a,e,!0)})};["pointerdown","mousedown","touchstart","keydown","click"].forEach(i=>{typeof window<"u"&&window.addEventListener&&window.addEventListener(i,e,{capture:!0}),typeof document<"u"&&document.addEventListener&&document.addEventListener(i,e,{capture:!0})})}setMuted(e){this.muted=!!e,P.setMuted(this.muted)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.preloaded||(this.preloaded=!0,this.preloadCoreAudio())}preloadCoreAudio(){["tan_atak.ogg","tan_obrona.ogg","uderzenie.ogg","pokonanyprzeciwnik.ogg","levelup.ogg","nastepna_plansza.ogg","krec_kolem.ogg"].forEach(t=>this.loadBuffer(t))}async loadBuffer(e){if(this.audioBuffers.has(e))return this.audioBuffers.get(e);if(this.loadingPromises.has(e))return this.loadingPromises.get(e);const t=(async()=>{try{const i=encodeURIComponent(e),a=[`/assets/music/${i}`,`./assets/music/${i}`,`assets/music/${i}`,`/public/assets/music/${i}`];let s=null;for(const l of a)try{const r=await fetch(l),p=r.headers.get("content-type")||"";if(r.ok&&!p.includes("text/html")){s=r;break}}catch{}if(!s)return null;const o=await s.arrayBuffer();if(!this.ctx){const l=window.AudioContext||window.webkitAudioContext;l&&(this.ctx=new l)}if(!this.ctx)return null;const n=await this.ctx.decodeAudioData(o);return this.audioBuffers.set(e,n),n}catch{return null}})();return this.loadingPromises.set(e,t),t}playFile(e,t=this.sfxVolume){if(this.muted)return null;this.init();const i=Math.max(0,Math.min(1,t)),a=this.audioBuffers.get(e);if(a&&this.ctx)try{this.ctx.state==="suspended"&&this.ctx.resume();const s=this.ctx.createBufferSource();s.buffer=a;const o=this.ctx.createGain();return o.gain.setValueAtTime(i,this.ctx.currentTime),s.connect(o),o.connect(this.ctx.destination),s.start(0),{stop:()=>{try{o.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12),setTimeout(()=>{try{s.stop()}catch{}},130)}catch{try{s.stop()}catch{}}}}}catch{}this.loadBuffer(e).then(s=>{if(s&&this.ctx&&!this.muted)try{this.ctx.state==="suspended"&&this.ctx.resume();const o=this.ctx.createBufferSource();o.buffer=s;const n=this.ctx.createGain();n.gain.setValueAtTime(i,this.ctx.currentTime),o.connect(n),n.connect(this.ctx.destination),o.start(0)}catch{}}).catch(()=>{});try{const s=encodeURIComponent(e),o=[`/assets/music/${s}`,`./assets/music/${s}`,`assets/music/${s}`];let n=0,l=null;const r=()=>{n>=o.length||(l=new Audio(o[n]),l.volume=i,l.addEventListener("error",()=>{n++,r()}),l.play().catch(()=>{n++,r()}))};return r(),{stop:()=>{if(l)try{l.pause(),l.currentTime=0}catch{}}}}catch{}return null}playTanAttack(){this.playFile("tan_atak.ogg",this.characterVoiceVolume)}playTanHurt(){this.playFile("tan_obrona.ogg",this.characterVoiceVolume)}playHitImpact(){this.playFile("uderzenie.ogg",.72)}playDefeatEnemy(){this.playFile("pokonanyprzeciwnik.ogg",.9)}playLevelUp(){this.playFile("levelup.ogg",.9)}playNextBoard(){this.playFile("nastepna_plansza.ogg",.9)}playSpinWheel(){if(this.stopSpinWheel(),this.init(),this.muted)return;const e=this.audioBuffers.get("krec_kolem.ogg");if(e&&this.ctx)try{this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createBufferSource();t.buffer=e,t.loop=!0;const i=this.ctx.createGain();i.gain.setValueAtTime(.95,this.ctx.currentTime),t.connect(i),i.connect(this.ctx.destination),t.start(0),this.spinWheelAudio={stop:()=>{try{i.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.15),setTimeout(()=>{try{t.stop()}catch{}},160)}catch{try{t.stop()}catch{}}}};return}catch{}this.loadBuffer("krec_kolem.ogg").then(t=>{if(t&&this.ctx&&!this.muted&&!this.spinWheelAudio)try{this.ctx.state==="suspended"&&this.ctx.resume();const i=this.ctx.createBufferSource();i.buffer=t,i.loop=!0;const a=this.ctx.createGain();a.gain.setValueAtTime(.95,this.ctx.currentTime),i.connect(a),a.connect(this.ctx.destination),i.start(0),this.spinWheelAudio={stop:()=>{try{a.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.15),setTimeout(()=>{try{i.stop()}catch{}},160)}catch{try{i.stop()}catch{}}}}}catch{}});try{const t=new Audio("/assets/music/krec_kolem.ogg");t.volume=.95,t.loop=!0,t.addEventListener("error",()=>{t.src.includes("./assets/")||(t.src="./assets/music/krec_kolem.ogg",t.play().catch(()=>{}))}),t.play().catch(()=>{}),this.spinWheelAudio={stop:()=>{try{t.pause(),t.currentTime=0}catch{}}}}catch{}}stopSpinWheel(){if(this.spinWheelAudio){try{this.spinWheelAudio.stop()}catch{}this.spinWheelAudio=null}}playInspector(){this.playFile("inspektor_biletow_dzwiek.ogg",.9)}playSchoolBell(){return this.playFile("Dzwonek_Szkolny.mp3",.85)}playCatAttack(){this.playCatMeow(!1)}playCatDefense(){this.playCatMeow(!0)}playCatMeow(e=!1){if(!this.muted&&(this.init(),!!this.ctx))try{const t=this.ctx.currentTime,i=this.ctx.createOscillator(),a=this.ctx.createOscillator(),s=this.ctx.createGain(),o=this.ctx.createBiquadFilter();o.type="bandpass",e?(o.Q.setValueAtTime(2.8,t),i.type="sawtooth",a.type="sine",i.frequency.setValueAtTime(850,t),i.frequency.exponentialRampToValueAtTime(1300,t+.05),i.frequency.exponentialRampToValueAtTime(460,t+.28),a.frequency.setValueAtTime(1700,t),a.frequency.exponentialRampToValueAtTime(2600,t+.05),a.frequency.exponentialRampToValueAtTime(920,t+.28),o.frequency.setValueAtTime(1900,t),o.frequency.exponentialRampToValueAtTime(1100,t+.28),s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.2,t+.02),s.gain.exponentialRampToValueAtTime(.001,t+.28),i.connect(o),a.connect(o),o.connect(s),s.connect(this.ctx.destination),i.start(t),a.start(t),i.stop(t+.28),a.stop(t+.28)):(o.Q.setValueAtTime(2.2,t),i.type="triangle",a.type="sine",i.frequency.setValueAtTime(520,t),i.frequency.exponentialRampToValueAtTime(880,t+.11),i.frequency.exponentialRampToValueAtTime(620,t+.34),a.frequency.setValueAtTime(1040,t),a.frequency.exponentialRampToValueAtTime(1760,t+.11),a.frequency.exponentialRampToValueAtTime(1240,t+.34),o.frequency.setValueAtTime(1450,t),o.frequency.exponentialRampToValueAtTime(950,t+.34),s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.18,t+.04),s.gain.exponentialRampToValueAtTime(.001,t+.34),i.connect(o),a.connect(o),o.connect(s),s.connect(this.ctx.destination),i.start(t),a.start(t),i.stop(t+.34),a.stop(t+.34))}catch{}}playCharacterAttack(e){if(!e)return;const t=String(e).toLowerCase(),i=this.characterVoiceVolume;t.includes("cwaniak")?this.playFile("cwaniak_atak.ogg",i):t.includes("instagramerka")?this.playFile("Instagramerka_atak.ogg",i):t.includes("jezyk")||t.includes("język")?this.playFile("jezyk_atak.ogg",i):t.includes("kasjerk")?this.playFile("Kasjerka_atak.ogg",i):t.includes("krolik")||t.includes("królik")||t.includes("zajac")||t.includes("zając")?this.playFile("kroliczek_atak.ogg",i):t.includes("kot")||t.includes("bolo")?this.audioBuffers.has("kot_atak.ogg")?this.playFile("kot_atak.ogg",i):this.playCatAttack():t.includes("nauczycielk")?this.playFile("Nauczycielka_atak.ogg",i):t.includes("pielegniark")||t.includes("pielęgniark")?this.playFile("pielegniarka_atak.ogg",i):t.includes("pilkarz")||t.includes("piłkarz")?this.playFile("pilkarz_atak.ogg",i):t.includes("szczeniak")?this.playFile("szczeniak_atak.ogg",i):(t.includes("wuefist")||t.includes("wf")||t.includes("olek"))&&this.playFile("wuefista_atak.ogg",i)}playCharacterDefense(e){if(!e)return;const t=String(e).toLowerCase(),i=this.characterVoiceVolume;t.includes("cwaniak")?this.playFile("cwaniak_obrona.ogg",i):t.includes("instagramerka")?this.playFile("Instagramerka_obrona.ogg",i):t.includes("jezyk")||t.includes("język")?this.playFile("jezyk_obrona.ogg",i):t.includes("kasjerk")?this.playFile("Kasjerka_obrona.ogg",i):t.includes("krolik")||t.includes("królik")||t.includes("zajac")||t.includes("zając")?this.playFile("kroliczek_obrona.ogg",i):t.includes("kot")||t.includes("bolo")?this.audioBuffers.has("kot_obrona.ogg")?this.playFile("kot_obrona.ogg",i):this.playCatDefense():t.includes("nauczycielk")?this.playFile("nauczycielka_obrona.ogg",i):t.includes("pielegniark")||t.includes("pielęgniark")?this.playFile("pielegniarka_obrona.ogg",i):t.includes("pilkarz")||t.includes("piłkarz")?this.playFile("pilkarz_obrona.ogg",i):t.includes("szczeniak")?this.playFile("szczeniak_obrona.ogg",i):(t.includes("wuefist")||t.includes("wf")||t.includes("olek"))&&this.playFile("wuefista_obrona.ogg",i)}playAttackHit(e=null){this.playTone(340,"sawtooth",.12,.22,120),this.playTanAttack(),this.playHitImpact(),e&&setTimeout(()=>this.playCharacterDefense(e),90)}playAttack(e=null){this.playAttackHit(e)}playHit(e=null){this.playAttackHit(e)}playEnemyHit(e=null){this.playTone(180,"sawtooth",.18,.25,75),this.playHitImpact(),this.playTanHurt(),e&&setTimeout(()=>this.playCharacterAttack(e),60)}playHurt(e=null){this.playEnemyHit(e)}speakPolish(e,t=.92){if(!(this.muted||!("speechSynthesis"in window)))try{window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.lang="pl-PL",i.rate=t,i.pitch=1.05;const s=window.speechSynthesis.getVoices().find(o=>o.lang&&o.lang.toLowerCase().startsWith("pl"));s&&(i.voice=s),window.speechSynthesis.speak(i)}catch{}}playTone(e,t="sine",i=.12,a=.15,s=null){if(!this.muted&&(this.init(),!!this.ctx))try{const o=this.ctx.currentTime,n=this.ctx.createOscillator(),l=this.ctx.createGain();n.type=t,n.frequency.setValueAtTime(e,o),s&&n.frequency.exponentialRampToValueAtTime(s,o+i),l.gain.setValueAtTime(a,o),l.gain.exponentialRampToValueAtTime(.001,o+i),n.connect(l),l.connect(this.ctx.destination),n.start(o),n.stop(o+i)}catch{}}playStep(){this.playTone(260,"triangle",.08,.12,340)}playPop(){this.muted||(this.init(),this.ctx&&(this.playTone(520,"sine",.09,.25,110),setTimeout(()=>this.playTone(780,"triangle",.06,.15,220),20)))}playTick(){this.playTone(680,"triangle",.035,.09,420)}playSuccess(){this.playTone(523.25,"triangle",.12,.18),setTimeout(()=>this.playTone(659.25,"triangle",.12,.18),90),setTimeout(()=>this.playTone(783.99,"triangle",.22,.22),180)}playMiss(){this.playTone(240,"sawtooth",.18,.12,150)}playWrong(){this.playTone(220,"sawtooth",.18,.16,140),setTimeout(()=>this.playTone(165,"sawtooth",.2,.16,110),80)}playHeal(){this.playTone(440,"sine",.1,.16,587),setTimeout(()=>this.playTone(587,"sine",.18,.18,880),100)}playFanfare(){this.playDefeatEnemy(),[523.25,659.25,783.99,1046.5].forEach((t,i)=>{setTimeout(()=>this.playTone(t,"triangle",.22,.2),i*110)})}}const d=new ft;function G(){const c=[];for(let o=0;o<24;o++){const n=o%2===0?48:36,l=o*Math.PI/12-Math.PI/2,r=50+Math.cos(l)*n,p=50+Math.sin(l)*n;c.push(`${r.toFixed(2)},${p.toFixed(2)}`)}return`
    <svg class="dd-starburst-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <polygon points="${c.join(" ")}" fill="#f45b63" stroke="#e04850" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
  `}function ne(c,{coinsGain:e=1,xpGain:t=1,leveledUp:i=!1,newLevel:a=1,prevXp:s=0,prevXpToNext:o=2,currentXp:n=0,xpToNext:l=2,customProgressLabel:r=null,levelUpBonus:p=null,flawlessBonusGain:h=0,onOk:y}){P.playVictoryMusic(),d.playFanfare(),i&&setTimeout(()=>d.playLevelUp(),350);const u=o>0?Math.max(0,Math.min(100,Math.round(s/o*100))):100,g=l>0?Math.max(0,Math.min(100,Math.round(n/l*100))):100,k=t>0?u:g,f=r||"Następny poziom:",v=Array.from({length:11},()=>'<span class="dd-marquee-dot"></span>').join(""),z=Array.from({length:11},()=>'<span class="dd-marquee-dot"></span>').join(""),M=Array.from({length:4},()=>'<span class="dd-marquee-dot"></span>').join(""),x=document.createElement("div");x.className="dd-victory-backdrop",x.innerHTML=`
    <div class="dd-victory-stage">
      <!-- Wieszaki szyldu u góry -->
      <div class="dd-sign-hangers">
        <span class="dd-hanger"></span>
        <span class="dd-hanger"></span>
      </div>

      <div class="dd-victory-main-row">
        <!-- Lewa gwiazda: Monety -->
        <div class="dd-reward-star dd-star-left">
          ${G()}
          <div class="dd-star-content">
            <span class="dd-coin-graphic" aria-hidden="true"></span>
            <span class="dd-star-multiplier">x${e}</span>
          </div>
        </div>

        <!-- Centralny szyld "WYGRAŁEŚ!" -->
        <div class="dd-marquee-sign">
          <div class="dd-dots-row top">${v}</div>
          <div class="dd-dots-col left">${M}</div>
          <div class="dd-dots-col right">${M}</div>
          <div class="dd-dots-row bottom">${z}</div>

          <div class="dd-marquee-inner">
            <h2 class="dd-win-title" data-text="WYGRAŁEŚ!">WYGRAŁEŚ!</h2>
          </div>
        </div>

        <!-- Prawa gwiazda: EXP -->
        <div class="dd-reward-star dd-star-right">
          ${G()}
          <div class="dd-star-content">
            <span class="dd-exp-label">EXP</span>
            <span class="dd-star-multiplier">x${t}</span>
          </div>
        </div>
      </div>

      <!-- Sekcja doświadczenia / nowego poziomu pod szyldem -->
      <div class="dd-victory-progress-area">
        ${i?`
          <div class="dd-levelup-congrats">
            <div>Gratulacje! Osiągnąłeś poziom ${a}!</div>
            <div>Maksymalne zdrowie zwiększone o <span class="dd-heart-inline">❤️4</span>!</div>
            ${p?`
              <div class="dd-levelup-stat-bonus">
                <span class="dd-bonus-roll-badge">🎲 WYLOSOWANO BONUS ZA POZIOM:</span>
                <span class="dd-bonus-pill">
                  <span class="dd-bonus-icon">${p.icon}</span>
                  <strong>${p.text}</strong>
                </span>
                <div class="dd-bonus-desc">${p.description}</div>
              </div>
            `:""}
          </div>
          <div class="dd-exp-bar-frame dd-bar-levelup">
            <span class="dd-levelup-bar-text">POZIOM WYŻEJ!</span>
          </div>
        `:`
          <div class="dd-next-level-label">${f}</div>
          <div class="dd-exp-bar-frame">
            <div class="dd-exp-bar-fill" id="dd-exp-bar-fill" style="width: ${k}%"></div>
          </div>
        `}
        ${h>0?`
          <div class="dd-flawless-notice">
            ✨ Czysta walka (0 strat HP): +${h} 🪙 dodatkowej monety!
          </div>
        `:""}
      </div>

      <!-- Przycisk OK -->
      <button class="dd-victory-ok-btn" id="dd-victory-ok-btn">OK</button>
    </div>
  `,c.appendChild(x);const T=x.querySelector("#dd-exp-bar-fill");T&&t>0&&k!==g&&setTimeout(()=>{T.style.width=`${g}%`},1880);const b=x.querySelector("#dd-victory-ok-btn");let w=!1;b.addEventListener("click",()=>{w||(w=!0,d.playStep(),m(()=>{x.remove(),P.resumeBoardMusic(),y&&y()}))})}async function m(c,e="left"){var u;const i=((typeof e=="string"?e:e==null?void 0:e.direction)||"left")==="left",a=18,s=100/a,o=["100,0"];for(let g=0;g<a;g++){const k=((g+.5)*s).toFixed(3),f=((g+1)*s).toFixed(3);o.push(`0,${k}`),o.push(`100,${f}`)}const n=["0,0","100,0"];for(let g=0;g<a;g++){const k=((g+.5)*s).toFixed(3),f=((g+1)*s).toFixed(3);n.push(`0,${k}`),n.push(`100,${f}`)}n.push("0,100");const l=document.createElement("div");l.className="dd-jagged-curtain",l.innerHTML=`
    <svg class="dd-curtain-edge dd-edge-left" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="${o.join(" ")}" fill="#000000" />
    </svg>
    <div class="dd-curtain-body"></div>
    <svg class="dd-curtain-edge dd-edge-right" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="${n.join(" ")}" fill="#000000" />
    </svg>
  `;const p=Math.max(window.innerWidth||0,((u=document.documentElement)==null?void 0:u.clientWidth)||0,1200)+160,h=i?p:-p,y=i?-p:p;l.style.transform=`translateX(${h}px)`,document.body.appendChild(l);try{await l.animate([{transform:`translateX(${h}px)`},{transform:"translateX(0px)"}],{duration:400,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}).finished,c&&await c(),await new Promise(f=>requestAnimationFrame(f)),await new Promise(f=>requestAnimationFrame(f)),await l.animate([{transform:"translateX(0px)"},{transform:`translateX(${y}px)`}],{duration:400,easing:"cubic-bezier(0.3, 0, 0.2, 1)",fill:"forwards"}).finished}catch{c&&await c()}finally{l.remove()}}const S=6,F={1:2,2:4,3:7,4:14,5:18};class vt{constructor(e){this.app=e,this.bubbleHideTimeout=null}updateHUD(){const e=this.app.player;if(!e)return;const t=document.getElementById("hud-hp-fill"),i=document.getElementById("hud-hp-text"),a=document.getElementById("hud-coins"),s=document.getElementById("hud-level-title"),o=document.getElementById("hud-xp-sub"),n=document.getElementById("hud-words-count"),l=document.getElementById("hud-sneaker-pill"),r=document.getElementById("hud-energy-pill"),p=document.getElementById("hud-energy-sec"),h=document.getElementById("hud-eat-kebab-btn"),y=document.getElementById("hud-kebab-count"),u=Math.max(0,Math.min(100,e.hp/e.maxHp*100));t&&(t.style.width=`${u}%`),i&&(i.textContent=`${e.hp}/${e.maxHp}`),a&&(a.textContent=e.coins),l&&l.classList.toggle("hidden",!e.boughtSneakers),r&&p&&(r.classList.toggle("hidden",!(e.bonusTimeSec>0)),p.textContent=e.bonusTimeSec);const g=document.getElementById("hud-damage-pill"),k=document.getElementById("hud-damage-sec");if(g&&k){const z=_(e),M=e.bonusDamage>0||e.level>1;g.classList.toggle("hidden",!M),k.textContent=z}const f=document.getElementById("hud-flawless-pill"),v=document.getElementById("hud-flawless-sec");if(f&&v&&(f.classList.toggle("hidden",!(e.flawlessCoinBonus>0)),v.textContent=e.flawlessCoinBonus),h&&y&&(h.classList.toggle("hidden",!(e.kebabs>0)),y.textContent=e.kebabs),s&&(s.textContent=e.level>=S?`POZIOM ${e.level} (MAX)`:`POZIOM ${e.level}`),o)if(e.level>=S)o.textContent="Maksymalny poziom!";else{const z=Math.max(1,e.xpToNext-e.xp);o.textContent=`Pozostało: ${z} EXP`}n&&(n.textContent=this.app.unlockedWordIds?this.app.unlockedWordIds.size:0)}setBoardHint(e){const t=document.getElementById("hud-hint-pill");if(t){t.textContent=e;return}const i=document.getElementById("board-hint-banner");i&&(i.innerHTML=`<div><strong>${e}</strong></div>`)}showTemporaryPlayerBubble(e,t=2e3){const i=document.getElementById("player-speech-mini");i&&(clearTimeout(this.bubbleHideTimeout),i.textContent=e,i.classList.remove("speech-hidden","speech-fade-out"),i.classList.add("bubble-pop"),setTimeout(()=>{i.classList.remove("bubble-pop")},300),this.bubbleHideTimeout=setTimeout(()=>{i.classList.add("speech-fade-out"),this.bubbleHideTimeout=setTimeout(()=>{i.classList.add("speech-hidden"),i.classList.remove("speech-fade-out"),i.textContent=""},900)},t))}hidePlayerBubbleImmediately(){clearTimeout(this.bubbleHideTimeout);const e=document.getElementById("player-speech-mini");e&&(e.classList.add("speech-hidden"),e.classList.remove("speech-fade-out","bubble-pop"),e.textContent="")}}class _t{constructor(e){this.app=e}get nodes(){return this.app.nodes}get edges(){return this.app.edges}isCatNode(e){if(!e)return!1;const t=String(e.type||"").toLowerCase(),i=String(e.icon||"").toLowerCase(),a=String(e.titlePl||"").toLowerCase();return t.includes("cat")||i.includes("kotek_pomoc")||i.includes("kot")||a.includes("kot")||a.includes("bolo")}isCompletableFighterType(e,t=null){return!(!e||t&&this.isCatNode(t)||e.includes("cat")||["shop","next_board","start","waypoint","chest","step","apple"].includes(e))}shouldHideSpriteWhenCompleted(e){return!e||this.isCatNode(e)?!1:e.type==="apple"?!0:this.isCompletableFighterType(e.type,e)}getNode(e){return this.nodes.find(t=>t.id===e)}isEdgeBlocked(e,t){const i=this.getNode(e);return i?i.type==="shop"||i.type==="step"?!1:!!(!i.completed&&i.blocksEdgesTo&&i.blocksEdgesTo.includes(t)):!0}findPath(e,t){if(e===t)return[e];const i=[[e]],a=new Set([e]);for(;i.length>0;){const s=i.shift(),o=s[s.length-1],n=[];for(const l of this.edges){const[r,p]=Array.isArray(l)?l:[l.from,l.to];r===o?n.push(p):p===o&&n.push(r)}for(const l of n){if(a.has(l)||this.isEdgeBlocked(o,l))continue;const r=[...s,l];if(l===t)return r;const p=this.getNode(l);a.add(l),!(p&&!p.completed&&p.blocksEdgesTo)&&i.push(r)}}return null}renderBoard(){const e=document.getElementById("board-svg"),t=document.getElementById("board-nodes-layer");!e||!t||(e.innerHTML=this.edges.map(i=>{const[a,s]=Array.isArray(i)?i:[i.from,i.to],o=this.getNode(a),n=this.getNode(s);if(!o||!n)return"";const l=this.isEdgeBlocked(a,s)||this.isEdgeBlocked(s,a);return`
        <line
          x1="${o.x}" y1="${o.y}"
          x2="${n.x}" y2="${n.y}"
          class="board-edge-line ${l?"edge-locked":"edge-open"}"
        />
      `}).join(""),this.nodes.forEach(i=>{const a=i.id===this.app.currentNodeId,o=!!this.findPath(this.app.currentNodeId,i.id),l=!!!(i.completed&&this.shouldHideSpriteWhenCompleted(i))&&!(i.type==="apple"&&i.completed);let r=t.querySelector(`.board-node[data-node-id="${i.id}"]`);r||(r=document.createElement("div"),r.className="board-node",r.dataset.nodeId=i.id,r.innerHTML=`
          <div class="node-oval-pad"></div>
          <div class="node-sprite-slot"></div>
          <div class="node-label-tag">
            <span class="n-pl"></span>
          </div>
        `,r.addEventListener("click",()=>{this.handleNodeClick(i.id)}),t.appendChild(r)),r.style.left=`${i.x}%`,r.style.top=`${i.y}%`,r.classList.toggle("node-current",a),r.classList.toggle("node-reachable",o),r.classList.toggle("node-locked",!o),r.classList.toggle("node-done",!!(i.completed&&!this.isCatNode(i)&&i.type!=="shop"));const p=r.querySelector(".node-sprite-slot");let h=p==null?void 0:p.querySelector(".node-sprite-wrap");if(i.icon){const u=i.icon.startsWith("./")?i.icon.slice(1):i.icon.startsWith("/")?i.icon:"/"+i.icon,g=`/public${u}`,k=u.includes("/itemki/")?u:u.replace("/assets/","/assets/itemki/"),f=a&&i.type!=="apple"?this.app.lastApproachFromRight?"shared-pad-left":"shared-pad-right":"",v=z=>{z.onerror=()=>{const M=z.getAttribute("src");M!==g?z.setAttribute("src",g):M!==k&&z.setAttribute("src",k)}};if(h){h.className=`node-sprite-wrap ${i.type} ${i.completed?"sprite-completed":""} ${f}`.trim();const z=h.querySelector(".node-sprite-img");z&&z.getAttribute("src")!==u&&z.getAttribute("src")!==g&&(z.setAttribute("src",u),v(z))}else{h=document.createElement("div"),h.className=`node-sprite-wrap ${i.type} ${f}`.trim();const z=document.createElement("img");z.className="node-sprite-img",z.alt=i.titlePl,z.src=u,v(z),h.appendChild(z),p.appendChild(h)}i.completed&&this.shouldHideSpriteWhenCompleted(i)?h.style.display="none":h.style.display=""}else h&&h.remove();const y=r.querySelector(".node-label-tag");if(y){y.style.display=l?"":"none";const u=y.querySelector(".n-pl");u&&u.textContent!==i.titlePl&&(u.textContent=i.titlePl)}}),this.positionPlayerToken(this.app.currentNodeId))}positionPlayerToken(e,t=!1){const i=document.getElementById("player-token"),a=this.getNode(e);if(!i||!a)return;const s=!!a.icon&&!(a.completed&&this.shouldHideSpriteWhenCompleted(a));i.style.left=`${a.x}%`,i.style.top=`${a.y-2}%`,i.classList.toggle("walking-hop",t),i.classList.remove("shared-pad-left","shared-pad-right"),s&&!t&&i.classList.add(this.app.lastApproachFromRight?"shared-pad-right":"shared-pad-left")}async handleNodeClick(e){if(this.app.isWalking)return;const t=this.getNode(e);if(!t)return;if(this.app.currentNodeId===e){await this.app.interactWithNode(t);return}const i=this.findPath(this.app.currentNodeId,e);if(!i){d.playMiss(),this.app.setBoardHint("🔒 Ścieżka zablokowana! Najpierw zalicz poprzednie spotkanie na korytarzu!");return}this.app.isWalking=!0;for(let a=1;a<i.length;a++){const s=this.getNode(i[a-1]),o=i[a],n=this.getNode(o);s&&n&&s.x!==n.x&&(this.app.lastApproachFromRight=s.x>n.x),this.app.currentNodeId=o,d.playStep(),this.positionPlayerToken(o,!0),n&&n.type==="apple"&&!n.completed&&n.icon&&this.app.collectApple(n),await new Promise(l=>setTimeout(l,270))}this.app.isWalking=!1,this.renderBoard(),await this.app.interactWithNode(t)}async playFighterCollisionOnBoard(e){this.app.isWalking=!0;const t=document.getElementById("player-token"),i=document.querySelector(`.board-node[data-node-id="${e}"]`),a=i?i.querySelector(".node-sprite-wrap"):null,s=!!this.app.lastApproachFromRight,o=s?"board-collide-go-right":"board-collide-go-left",n=s?"board-collide-go-left":"board-collide-go-right";t&&(t.classList.remove("shared-pad-left","shared-pad-right","board-collide-go-left","board-collide-go-right"),t.offsetWidth,t.classList.add(o)),a&&(a.classList.remove("shared-pad-left","shared-pad-right","board-collide-go-left","board-collide-go-right"),a.offsetWidth,a.classList.add(n)),setTimeout(()=>{d.playStep()},120),await new Promise(l=>setTimeout(l,460)),t&&(t.classList.remove(o),t.classList.add(s?"shared-pad-right":"shared-pad-left")),a&&(a.classList.remove(n),a.classList.add(s?"shared-pad-left":"shared-pad-right")),this.app.isWalking=!1}}function R(c,e,t,i,{damageTaken:a=0}={}){const s=c.xp,o=c.xpToNext;let n=0;a===0&&(c.flawlessCoinBonus||0)>0&&(n=c.flawlessCoinBonus,t+=n),c.coins+=t,c.score+=i;let l=!1,r=null;if(c.level>=S||e<=0)return c.level>=S&&(c.level=S,c.xp=0,c.xpToNext=0),{leveledUp:!1,levelUpBonus:null,flawlessBonusGain:n,newLevel:c.level,prevXp:s,prevXpToNext:o,currentXp:c.xp,xpToNext:c.xpToNext,coinsGain:t,xpGain:e};for(c.xp+=e;c.level<S&&c.xp>=c.xpToNext;){c.xp-=c.xpToNext,c.level+=1,c.maxHp+=4,c.hp=Math.min(c.maxHp,c.hp+4),c.diceCount+=1,l=!0;const p=Math.random()*100;p<60?(c.bonusDamage=(c.bonusDamage||0)+1,r={type:"damage",icon:"⚔️",text:"+1 OBRAŻEŃ",description:"Twoje ataki w walkach i minigrach zadają o +1 punkt więcej obrażeń!"}):p<95?(c.bonusTimeSec=(c.bonusTimeSec||0)+1,r={type:"time",icon:"⏱️",text:"+1s CZASU",description:"Otrzymujesz dodatkową sekundę w wyzwaniach i walkach na czas!"}):(c.flawlessCoinBonus=(c.flawlessCoinBonus||0)+1,r={type:"flawless_coin",icon:"🪙",text:"+1 MONETA ZA CZYSTĄ WALKĘ",description:"Zyskujesz dodatkową monetę za każde starcie bez utraty punktów HP!"}),c.level<S?c.xpToNext=F[c.level]:(c.xp=0,c.xpToNext=0)}return{leveledUp:l,levelUpBonus:r,flawlessBonusGain:n,newLevel:c.level,prevXp:s,prevXpToNext:o,currentXp:c.xp,xpToNext:c.xpToNext,coinsGain:t,xpGain:e}}function xt(c,e,t,i,a="Brawo!",{damageTaken:s=0}={}){const o=c.getNode(t),n=!!(o&&c.isCatNode&&c.isCatNode(o)||o&&(String(o.type||"").toLowerCase().includes("cat")||String(o.icon||"").toLowerCase().includes("kot")||String(o.titlePl||"").toLowerCase().includes("kot")||String(o.titlePl||"").toLowerCase().includes("bolo"))||a&&(a.toLowerCase().includes("kot")||a.toLowerCase().includes("bolo"))),l=!!(o&&!o.completed),r=!n&&l?1:0,p=l?1:0;o&&!o.completed&&(o.completed=!0);const h=R(c.player,r,p,i,{damageTaken:s});c.updateHUD(),ne(e,{coinsGain:h.coinsGain,xpGain:h.xpGain,leveledUp:h.leveledUp,levelUpBonus:h.levelUpBonus,flawlessBonusGain:h.flawlessBonusGain,newLevel:h.newLevel,prevXp:h.prevXp,prevXpToNext:h.prevXpToNext,currentXp:h.currentXp,xpToNext:h.xpToNext,customProgressLabel:"Następny poziom:",onOk:()=>{c.activeMinigame&&(c.activeMinigame.destroy(),c.activeMinigame=null),e.classList.add("hidden"),c.showTemporaryPlayerBubble(a,1800),c.renderBoard(),c.updateHUD()}})}function Pt(c,{coinsGain:e=1,xpGain:t=1,scoreGain:i=100,damageTaken:a=0,onDismiss:s}={}){const o=R(c.player,t,e,i,{damageTaken:a});c.updateHUD();const n=document.getElementById("modal-mount");n.classList.remove("hidden"),n.innerHTML="",ne(n,{coinsGain:o.coinsGain,xpGain:o.xpGain,leveledUp:o.leveledUp,levelUpBonus:o.levelUpBonus,flawlessBonusGain:o.flawlessBonusGain,newLevel:o.newLevel,prevXp:o.prevXp,prevXpToNext:o.prevXpToNext,currentXp:o.currentXp,xpToNext:o.xpToNext,onOk:()=>{c.closeModal(),c.renderBoard(),c.updateHUD(),s&&s()}})}class Mt{constructor(e){this.app=e}getFloorTheme(e=this.app.currentFloor){const t=String(e);return t.startsWith("city_")||["8","9","10","11"].includes(t)||t==="city_boss"||t==="miasto"?"city":t.startsWith("m4_")?"clinic":t.startsWith("m5_")?"room":t.startsWith("m3_")||["3","4","5","6","7"].includes(t)?"school":"szatnia"}loadFloor(e,t={}){const i=!!(t&&(t.fromTestPicker||t.suppressIntro));this.app.currentFloor=e,P.playBoardMusic(e);const a=this.getFloorTheme(e),s=document.getElementById("arena-mount");s&&(s.className=`arena-mount hidden arena-theme-${a} floor-${e}-arena`);const o=document.getElementById("board-nodes-layer");o&&(o.innerHTML="");const n=document.getElementById("floor-indicator-badge"),l=document.getElementById("board-map");l&&(l.classList.toggle("floor-5",e===5),l.classList.toggle("floor-6",e===6),l.classList.toggle("floor-7",e===7),l.classList.toggle("floor-city_1",e==="city_1"||e===8),l.classList.toggle("floor-city_2",e==="city_2"||e===9),l.classList.toggle("floor-city_3",e==="city_3"||e===10),l.classList.toggle("floor-city_boss",e==="city_boss"||e===11),l.classList.toggle("floor-miasto",e==="miasto"||e==="city_1"||e==="city_2"||e==="city_3"||e==="city_boss"||e===8||e===9||e===10||e===11),l.classList.toggle("floor-m3_1",e==="m3_1"),l.classList.toggle("floor-m3_2",e==="m3_2"),l.classList.toggle("floor-m3_3",e==="m3_3"),l.classList.toggle("floor-m3_boss",e==="m3_boss"),l.classList.toggle("floor-m4_1",e==="m4_1"),l.classList.toggle("floor-m4_2",e==="m4_2"),l.classList.toggle("floor-m4_3",e==="m4_3"),l.classList.toggle("floor-m4_boss",e==="m4_boss"),l.classList.toggle("floor-m5_1",e==="m5_1"),l.classList.toggle("floor-m5_2",e==="m5_2"),l.classList.toggle("floor-m5_boss",e==="m5_boss")),e==="m5_1"?(this.app.currentFloor="m5_1",this.app.nodes=Re.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ze,this.app.currentNodeId="m5_1_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 5: Gejmer (Technologia) 💻"),!this.app.m5_1_IntroShown&&!i&&setTimeout(()=>this.openM5_1NewCardsModal(),320)):e==="m5_2"?(this.app.currentFloor="m5_2",this.app.nodes=Ve.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ue,this.app.currentNodeId="m5_2_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 5: Piłkarz & Cwaniak (Trendy) ⚽"),!this.app.m5_2_IntroShown&&!i&&setTimeout(()=>this.openM5_2NewCardsModal(),320)):e==="m5_boss"?(this.app.currentFloor="m5_boss",this.app.nodes=Ge.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Je,this.app.currentNodeId="m5_b_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 5: Boss Instagramerka 📱")):e==="city_boss"||e===11?(this.app.currentFloor="city_boss",this.app.nodes=Te.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Se,this.app.currentNodeId="cb_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Wielki Finał: Zaułek Bossa Cwaniaka 🕶️")):e==="city_3"||e===10?(this.app.currentFloor="city_3",this.app.nodes=Pe.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Me,this.app.currentNodeId="c3_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Miasto 3: Komunikacja i Biletomat 🚏"),!this.app.city3IntroShown&&!i&&setTimeout(()=>{this.openCity3NewCardsModal()},320)):e==="city_2"||e===9?(this.app.currentFloor="city_2",this.app.nodes=_e.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=xe,this.app.currentNodeId="c2_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Miasto 2: Zamawianie jedzenia 🥙"),!this.app.city2IntroShown&&!i&&setTimeout(()=>{this.openCity2NewCardsModal()},320)):e==="city_1"||e===8?(this.app.currentFloor="city_1",this.app.nodes=fe.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=ve,this.app.currentNodeId="c1_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Miasto 1: Zakupy w Żabce / Biedronce 🛒"),!this.app.city1IntroShown&&!i&&setTimeout(()=>{this.openCity1NewCardsModal()},320)):e==="m3_1"?(this.app.currentFloor="m3_1",this.app.nodes=je.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ce,this.app.currentNodeId="m3_1_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 3: Zwroty Ratunkowe w Szkole 🙋"),!this.app.m3_1_IntroShown&&!i&&setTimeout(()=>this.openM3_1NewCardsModal(),320)):e==="m3_2"?(this.app.currentFloor="m3_2",this.app.nodes=Le.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ee,this.app.currentNodeId="m3_2_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 3: Przybory i Zadania Domowe ✏️"),!this.app.m3_2_IntroShown&&!i&&setTimeout(()=>this.openM3_2NewCardsModal(),320)):e==="m3_3"?(this.app.currentFloor="m3_3",this.app.nodes=De.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=He,this.app.currentNodeId="m3_3_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 3: Plan Lekcji, Czas & WF 🏃"),!this.app.m3_3_IntroShown&&!i&&setTimeout(()=>this.openM3_3NewCardsModal(),320)):e==="m3_boss"?(this.app.currentFloor="m3_boss",this.app.nodes=Be.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ae,this.app.currentNodeId="m3_b_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 3: Egzamin Szkolny (Nauczycielka) 👩‍🏫")):e==="m4_1"?(this.app.currentFloor="m4_1",this.app.nodes=Ie.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Ne,this.app.currentNodeId="m4_1_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 4: Stany Fizyczne i Potrzeby 💧"),!this.app.m4_1_IntroShown&&!i&&setTimeout(()=>this.openM4_1NewCardsModal(),320)):e==="m4_2"?(this.app.currentFloor="m4_2",this.app.nodes=$e.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=We,this.app.currentNodeId="m4_2_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 4: Zdrowie i Dolegliwości 🩹"),!this.app.m4_2_IntroShown&&!i&&setTimeout(()=>this.openM4_2NewCardsModal(),320)):e==="m4_3"?(this.app.currentFloor="m4_3",this.app.nodes=Oe.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=qe,this.app.currentNodeId="m4_3_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 4: Emocje i Poziom Energii 🧠"),!this.app.m4_3_IntroShown&&!i&&setTimeout(()=>this.openM4_3NewCardsModal(),320)):e==="m4_boss"?(this.app.currentFloor="m4_boss",this.app.nodes=Ke.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Fe,this.app.currentNodeId="m4_b_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Moduł 4: Centrum Zdrowia (Doktor Lekarz) 🩺")):e===7?(this.app.nodes=we.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=ze,this.app.currentNodeId="b7_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 7: Wielki Finał – Boss Piłkarz ⚽")):e===6?(this.app.nodes=ke.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=be,this.app.currentNodeId="b6_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 6: Opinie i Emocje (Przerwa)"),!this.app.board6IntroShown&&!i&&setTimeout(()=>{this.openBoard6NewCardsModal()},320)):e===5?(this.app.nodes=ue.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=ge,this.app.currentNodeId="b5_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 5: Lekcja w klasie"),!this.app.board5IntroShown&&!i&&setTimeout(()=>{this.openBoard5NewCardsModal()},320)):e===4?(this.app.nodes=me.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=ye,this.app.currentNodeId="b4_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 4: Slang i Emocje"),!this.app.board4IntroShown&&!i&&setTimeout(()=>{this.openBoard4NewCardsModal()},320)):e===3?(this.app.nodes=pe.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=he,this.app.currentNodeId="b3_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 3: Rozmowa o grach"),!this.app.board3IntroShown&&!i&&setTimeout(()=>{this.openBoard3NewCardsModal()},320)):e===2?(this.app.nodes=ce.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=de,this.app.currentNodeId="b2_node_1",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 2: Korytarz – Olek")):(this.app.currentFloor=1,this.app.nodes=J.map(r=>({...r,blocksEdgesTo:r.blocksEdgesTo?[...r.blocksEdgesTo]:void 0})),this.app.edges=Y,this.app.currentNodeId="node_2",this.app.lastApproachFromRight=!1,n&&(n.textContent="📍 Plansza 1: Szatnia"))}resetBoard(e=!1,t=null){this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null);const i=document.getElementById("arena-mount");if(i&&(i.classList.add("hidden"),i.innerHTML=""),this.app.closeModal(),e)this.loadFloor(1),this.app.player.level=1,this.app.player.maxHp=20,this.app.player.hp=20,this.app.player.coins=0,this.app.player.diceCount=3,this.app.player.xp=0,this.app.player.xpToNext=F[1],this.app.player.bonusTimeSec=0,this.app.player.bonusDamage=0,this.app.player.flawlessCoinBonus=0,this.app.player.score=0,this.app.player.kebabs=0,this.app.player.boughtSneakers=!1,this.app.player.boughtShopItemIds&&this.app.player.boughtShopItemIds.clear(),this.app.board3IntroShown=!1,this.app.board4IntroShown=!1,this.app.board5IntroShown=!1,this.app.board6IntroShown=!1,this.app.board7IntroShown=!1,this.app.city1IntroShown=!1,this.app.city2IntroShown=!1,this.app.city3IntroShown=!1,this.app.cityBossIntroShown=!1,this.app.m3_1_IntroShown=!1,this.app.m3_2_IntroShown=!1,this.app.m3_3_IntroShown=!1,this.app.m4_1_IntroShown=!1,this.app.m4_2_IntroShown=!1,this.app.m4_3_IntroShown=!1,this.app.m5_1_IntroShown=!1,this.app.m5_2_IntroShown=!1,this.app.playerPreferences={},this.app.cityShoppingChoices={items:"bread_water",bag:"yes_bag",payment:"card"},this.app.cityFoodChoices={dish:"kebab",sauce:"czosnkowy",size:"L",dining:"na_miejscu"},this.app.cityTicketChosen={type:"ulgowy",duration:"20",price:1},this.app.unlockedWordIds.clear();else{const a=t!==null?t:this.app.currentFloor===1?2:1;this.loadFloor(a)}this.app.isWalking=!1,this.app.hidePlayerBubbleImmediately(),d.playHeal(),this.app.renderBoard(),this.app.updateHUD(),this.app.setBoardHint(e?"🔄 Plansza została zresetowana!":"Przeszedłeś na nowe piętro!")}collectApple(e){if(e.completed||!e.icon)return;e.completed=!0,e.icon=null;const t=e.healAmount||8;this.app.player.hp=Math.min(this.app.player.maxHp,this.app.player.hp+t),e.coinsGain&&(this.app.player.coins+=e.coinsGain),d.playHeal(),d.speakPolish("Smacznego!");const i=e.coinsGain?`Zjedzone! 🍎 +${t} HP i +${e.coinsGain} monet 🪙`:`Zjedzone! 🍎 +${t} HP`;this.app.showTemporaryPlayerBubble(i),this.app.setBoardHint(`🍎 Zjadłeś jabłko! Odzyskano +${t} HP${e.coinsGain?` oraz zebrano +${e.coinsGain} monet na bilet!`:"."}`),this.app.updateHUD(),this.app.renderBoard()}awardProgress(e,t,i=0,{damageTaken:a=0}={}){const s=R(this.app.player,e,t,i,{damageTaken:a});return this.app.updateHUD(),s}openBoard3NewCardsModal(){openFloorNewCardsModal(this.app,3,"Piętro 3 (Gry)",X,"Nowe karty gamingowe w Twojej Księdze Słów! 🎮📖")}openBoard4NewCardsModal(){openFloorNewCardsModal(this.app,4,"Piętro 4 (Slang)",ee,"Nowe karty slangowe w Twojej Księdze Słów! 🔥📖")}openBoard5NewCardsModal(){openFloorNewCardsModal(this.app,5,"Piętro 5 (Klasa)",te,"Nowe karty szkolne w Twojej Księdze Słów! 🏫📖")}openBoard6NewCardsModal(){openFloorNewCardsModal(this.app,6,"Piętro 6 (Opinie i Emocje)",ie,"Nowe słowa opinii w Twojej Księdze Słów! 🔥📖")}openCity1NewCardsModal(){openFloorNewCardsModal(this.app,"city_1","Miasto: Żabka / Biedronka",ae,"Nowe słówka zakupowe w Twojej Księdze Słów! 🛒🥖")}openCity2NewCardsModal(){openFloorNewCardsModal(this.app,"city_2","Miasto 2: Zamawianie jedzenia",se,"Nowe karty jedzenia i zwrotów w Twojej Księdze Słów! 🥙🍕")}openCity3NewCardsModal(){openFloorNewCardsModal(this.app,"city_3","Miasto 3: Komunikacja i Biletomat",oe,"Nowe karty komunikacji w Twojej Księdze Słów! 🚏🎟️")}openM3_1NewCardsModal(){this.app.m3_1_IntroShown=!0,openFloorNewCardsModal(this.app,"m3_1","Moduł 3: Zwroty Ratunkowe",A,"Nowe zwroty ratunkowe w Twojej Księdze Słów! 🙋📖")}openM3_2NewCardsModal(){this.app.m3_2_IntroShown=!0,openFloorNewCardsModal(this.app,"m3_2","Moduł 3: Przybory i Brak Zadań",I,"Nowe słówka przyborów szkolnych w Twojej Księdze Słów! ✏️📖")}openM3_3NewCardsModal(){this.app.m3_3_IntroShown=!0,openFloorNewCardsModal(this.app,"m3_3","Moduł 3: Plan Lekcji & Czas",N,"Plan lekcji i dni tygodnia dodane do Księgi! 📅📖")}openM4_1NewCardsModal(){this.app.m4_1_IntroShown=!0,openFloorNewCardsModal(this.app,"m4_1","Moduł 4: Stany Fizyczne",$,"Karty potrzeb fizycznych w Twojej Księdze Słów! 💧📖")}openM4_2NewCardsModal(){this.app.m4_2_IntroShown=!0,openFloorNewCardsModal(this.app,"m4_2","Moduł 4: Zdrowie i Ból",W,"Karty zdrowia i dolegliwości dodane do Księgi! 🩺📖")}openM4_3NewCardsModal(){this.app.m4_3_IntroShown=!0,openFloorNewCardsModal(this.app,"m4_3","Moduł 4: Emocje i Energia",O,"Karty emocji w Twojej Księdze Słów! 🧠📖")}openM5_1NewCardsModal(){this.app.m5_1_IntroShown=!0,openFloorNewCardsModal(this.app,"m5_1","Moduł 5: Autoprezentacja & Technologia",q,"Karty tożsamości i sprzętu dodane do Księgi! 💻📖")}openM5_2NewCardsModal(){this.app.m5_2_IntroShown=!0,openFloorNewCardsModal(this.app,"m5_2","Moduł 5: Piłka Nożna & Trendy",K,"Karty futbolu i popkultury dodane do Księgi! ⚽📖")}}function Tt(c){var a;c.closeModal();const e=document.getElementById("modal-mount");if(!e)return;e.classList.remove("hidden");const t=[{category:"Moduł 1: Szkoła Podstawowa 🏫",list:[{id:1,name:"Plansza 1: Szatnia",desc:"Find the Match (Szczeniak)"},{id:2,name:"Plansza 2: Korytarz",desc:"Quiz (Olek)"},{id:3,name:"Plansza 3: Rozmowa o grach",desc:"Koło fortuny (Kot Bolo)"},{id:4,name:"Plansza 4: Slang i Emocje",desc:"Match Up (Jeż)"},{id:5,name:"Plansza 5: Lekcja w klasie",desc:"Dopasuj pary (Kotek)"},{id:6,name:"Plansza 6: Opinie i Przerwa",desc:"Myśli (Widmo)"},{id:7,name:"Plansza 7: Boss Piłkarz",desc:"Wielka walka finałowa ⚽"}]},{category:"Moduł 2: Miasto 🏙️",list:[{id:"city_1",name:"Miasto 1: Żabka / Biedronka",desc:"Myśli, Open the Box, Rank Order"},{id:"city_2",name:"Miasto 2: Gastronomia",desc:"Koło fortuny & Mistrz Kebaba"},{id:"city_3",name:"Miasto 3: Komunikacja",desc:"Biletomat i autobus"},{id:"city_boss",name:"Miasto Boss: Cwaniak",desc:"Finał miejski 🕶️"}]},{category:"Moduł 3: Szkoła – Słówka & WF 🏃",list:[{id:"m3_1",name:"Moduł 3.1: Zwroty ratunkowe",desc:"Karty słówek & dialog"},{id:"m3_2",name:"Moduł 3.2: Przybory szkolne",desc:"Karty & Olek w ławce"},{id:"m3_3",name:"Moduł 3.3: Plan lekcji & WF",desc:"Dialog z Wuefistą"},{id:"m3_boss",name:"Moduł 3 Boss: Nauczycielka",desc:"Egzamin szkolny 👩‍🏫"}]},{category:"Moduł 4: Zdrowie & Przychodnia 🩺",list:[{id:"m4_1",name:"Moduł 4.1: Stany fizyczne",desc:"Głód, pragnienie, zmęczenie"},{id:"m4_2",name:"Moduł 4.2: Zdrowie i Ból",desc:"Pielęgniarka szkolna"},{id:"m4_3",name:"Moduł 4.3: Emocje i Energia",desc:"Sekwencja odpoczynku"},{id:"m4_boss",name:"Moduł 4 Boss: Lekarz",desc:"Centrum Zdrowia 🩺"}]},{category:"Moduł 5: Pasje, Technologia & Trendy 🎮",list:[{id:"m5_1",name:"Moduł 5.1: Autoprezentacja",desc:"Gejmer z Discorda 🎮"},{id:"m5_2",name:"Moduł 5.2: Piłka nożna",desc:"Piłkarz z Orlika & Cwaniak"},{id:"m5_boss",name:"Moduł 5 Boss: Instagramerka",desc:"Królowa trendów 📱"}]}];e.innerHTML=`
    <div class="dicey-modal-backdrop">
      <div class="floor-picker-modal">
        <div class="fpm-header">
          <h2>🗺️ Wybierz planszę (Tryb testowy)</h2>
          <button class="fpm-close-btn" id="fpm-close-btn" title="Zamknij">✕</button>
        </div>
        <div class="fpm-body">
          ${t.map(s=>`
            <div class="fpm-category">
              <div class="fpm-category-title">${s.category}</div>
              <div class="fpm-grid">
                ${s.list.map(o=>`
                  <button type="button" class="btn-floor-card ${String(c.currentFloor)===String(o.id)?"is-current":""}" data-floor="${o.id}">
                    <span class="bfc-title">${o.name}</span>
                    <span class="bfc-sub">${o.desc}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,(a=e.querySelector("#fpm-close-btn"))==null||a.addEventListener("click",()=>{c.closeModal()});let i=!1;e.querySelectorAll(".btn-floor-card").forEach(s=>{s.addEventListener("click",()=>{if(i)return;i=!0;const o=s.dataset.floor,n=isNaN(Number(o))?o:Number(o);d.playFanfare(),m(()=>{var r;c.closeModal(),c.loadFloor(n,{fromTestPicker:!0}),c.renderBoard(),c.updateHUD();const l=(r=s.querySelector(".bfc-title"))==null?void 0:r.textContent;l&&c.setBoardHint(`🗺️ Przełączono na planszę: ${l}`)})})})}function St(c,e){e.completed||(P.playChestMusic(),m(()=>{d.playStep(),e.completed=!0,e.icon="./assets/skrzynka_otwarta.png",c.renderBoard();const t=document.getElementById("modal-mount");if(!t)return;t.classList.remove("hidden");const i=D.slice(0,4);let a=0;const s=()=>{const o=i[a],n=a===i.length-1,l=c.getFloorTheme(c.currentFloor);t.innerHTML=`
        <div class="dicey-chest-scene floor-intro-scene floor-${c.currentFloor}-intro-scene floor-theme-${l}">
          <div class="dicey-chest-top-title">
            Znalazłeś słowo: <strong>${o.word}</strong> (${a+1}/${i.length})
          </div>

          <div class="dicey-open-chest-stage">
            <img
              src="./assets/skrzynka_otwarta_tlo.png"
              alt="Otwarta skrzynia"
              class="open-chest-bg-img"
              onerror="this.src='./assets/skrzynka_otwarta_tlo.png'"
            />

            <!-- Karta słowa umieszczona w otwartej skrzyni jak w Dicey Dungeons -->
            <div class="dicey-chest-card" id="chest-active-card" style="--card-accent: ${o.color}">
              <div class="dcc-header" style="background: ${o.color}">
                <span class="dcc-title">${o.word.toUpperCase()}</span>
                <button class="dcc-audio-btn" id="chest-audio-btn" title="Posłuchaj wymowy">
                  🔊
                </button>
              </div>

              <div class="dcc-body">
                <div class="dcc-dashed-slot" id="chest-slot-audio">
                  <span class="dcc-slot-icon">🔊</span>
                  <span class="dcc-slot-phonetic">${o.phonetic}</span>
                </div>

                <div class="dcc-descriptions">
                  <p class="dcc-pl">🇵🇱 ${o.plMeaning}</p>
                  <p class="dcc-vn">🇻🇳 ${o.vnMeaning}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="dicey-chest-bottom-bar">
            <button class="btn-dicey-take btn-chest-next chest-next-hidden" id="chest-next-btn">
              ${n?"WEŹ":"DALEJ"}
            </button>
          </div>
        </div>
      `;const r=t.querySelector("#chest-audio-btn"),p=t.querySelector("#chest-active-card"),h=t.querySelector("#chest-next-btn");let y=!1;const u=k=>{k&&k.stopPropagation(),d.speakPolish(o.cleanWord),c.unlockedWordIds.add(o.id),c.updateHUD(),p.classList.add("card-listened"),r.classList.add("audio-clicked"),r.innerHTML="🔊 ✔",y||(y=!0,requestAnimationFrame(()=>{h.classList.remove("chest-next-hidden"),h.classList.add("chest-next-visible")}))};r==null||r.addEventListener("click",u),p==null||p.addEventListener("click",u);let g=!1;h==null||h.addEventListener("click",()=>{!y||g||(a+1<i.length?(a+=1,d.playStep(),s()):(g=!0,d.playFanfare(),m(()=>{c.closeModal(),P.resumeBoardMusic(),c.renderBoard(),c.updateHUD()})))})};s()}))}function jt(c){P.playVictoryMusic(),d.playFanfare();const e=document.getElementById("modal-mount");if(!e)return;e.classList.remove("hidden"),e.innerHTML=`
    <div class="dicey-modal-backdrop dd-city-backdrop dd-grand-backdrop">
      <div class="dd-city-container dd-grand-container">
        <div class="dd-city-header">
          <span class="city-trophy">👑🏆</span>
          <h2>WIELKI MISTRZ JĘZYKA POLSKIEGO A0!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Niewiarygodne, Tan!</strong> Ukończyłeś wszystkie moduły i całą grę <em>Nói Đi!</em> 🏆🎉</p>
          <p style="margin-top: 14px; color: #ffd166; font-weight: 800; font-size: 1.15rem;">
            Jesteś w 100% gotowy do swobodnej rozmowy w polskiej szkole i na ulicach miasta!
          </p>
        </div>
        <div class="dd-city-actions" style="margin-top: 18px;">
          <button type="button" class="btn-dicey-take btn-city-continue" id="grand-restart-game-btn" style="background: #10b981; color: #fff; font-weight: 800; width: 100%; max-width: 440px; margin: 0 auto;">
            ZAGRAJ PONOWNIE W CAŁĄ GRĘ (OD SZATNI) 🔄
          </button>
        </div>
      </div>
    </div>
  `;const t=e.querySelector("#grand-restart-game-btn");t&&t.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!0,1)})})}function Ct(c){d.playFanfare();const e=document.getElementById("modal-mount");if(!e)return;e.classList.remove("hidden"),e.innerHTML=`
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🏆</span>
          <h2>WKRACZASZ DO MIASTA!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Gratulacje, Tan!</strong> Opanowałeś powitania, slang, dialogi w szkole i wyrażanie opinii!</p>
          <p>Boss Piłkarz został pokonany. Pora wyruszyć poza szkołę na ulice tętniącego życiem <strong>Miasta</strong>!</p>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-enter-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            WEJDŹ DO ŻABKI / BIEDRONKI 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-restart-btn">
            ZAGRAJ PONOWNIE (OD POCZĄTKU) 🔄
          </button>
        </div>
      </div>
    </div>
  `;const t=e.querySelector("#city-enter-btn");t&&t.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_1")})});const i=e.querySelector("#city-restart-btn");i&&i.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!0,1)})})}function Lt(c){d.playFanfare();const e=document.getElementById("modal-mount");if(!e)return;e.classList.remove("hidden"),e.innerHTML=`
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🛍️</span>
          <h2>ZAKUPY W MIEŚCIE UKOŃCZONE!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Brawo, Tan!</strong> Samodzielnie zrobiłeś zakupy w sklepie!</p>
          <p>Opanowałeś formy biernika (<em>„poproszę wodę, bułkę, czipsy”</em>), wybrałeś torbę, zapłaciłeś i bezbłędnie przeprowadziłeś dialog przy kasie!</p>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-next-floor-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            PRZEJDŹ DO PLANSZY 2 (GASTRONOMIA) 🥙
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-repeat-btn" style="background: #3b82f6; color: #fff; font-weight: 800; margin-bottom: 10px;">
            ZAGRAJ PONOWNIE W ŻABCE 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city-school-btn">
            POWRÓT DO SZKOŁY (PLANSZA 1) 🏫
          </button>
        </div>
      </div>
    </div>
  `;const t=e.querySelector("#city-next-floor-btn");t&&t.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_2")})});const i=e.querySelector("#city-repeat-btn");i&&i.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_1")})});const a=e.querySelector("#city-school-btn");a&&a.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!0,1)})})}function Et(c){d.playFanfare();const e=document.getElementById("modal-mount");if(!e)return;e.classList.remove("hidden"),e.innerHTML=`
    <div class="dicey-modal-backdrop dd-city-backdrop">
      <div class="dd-city-container">
        <div class="dd-city-header">
          <span class="city-trophy">🥙🎉</span>
          <h2>GASTRONOMIA W MIEŚCIE UKOŃCZONA!</h2>
        </div>
        <div class="dd-city-image-wrap">
          <img src="./assets/miasto.png" alt="Miasto" class="dd-city-img" onerror="this.src='./public/assets/miasto.png'" />
        </div>
        <div class="dd-city-text">
          <p><strong>Brawo, Tan!</strong> Znakomicie opanowałeś zamawianie jedzenia na mieście!</p>
          <p>Wybrałeś swoje ulubione danie, sos, rozmiar posiłku, określiłeś czy jesz na miejscu czy na wynos, spokojnie poczekałeś i podziękowałeś Mistrzowi Kebaba!</p>
          <div style="background: rgba(255, 209, 102, 0.15); border: 2px dashed #ffd166; border-radius: 14px; padding: 10px 14px; margin-top: 8px;">
            <strong style="color: #ffd166;">Kolejny temat w mieście:</strong><br/>
            💰 <strong>Liczby i pieniądze (1–100):</strong> Rozumienie cen, reszty i operowanie numerem telefonu.
          </div>
        </div>
        <div class="dd-city-actions">
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-next-floor-btn" style="background: #3a86ff; color: #fff; font-weight: 800; margin-bottom: 10px;">
            PRZEJDŹ DO PLANSZY 3 (KOMUNIKACJA I BILETOMAT) 🚏
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-repeat-btn" style="background: #f77f00; color: #fff; font-weight: 800; margin-bottom: 10px;">
            ZAGRAJ PONOWNIE NA PLANSZY 2 🥙
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-prev-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-bottom: 10px;">
            POWRÓT DO ŻABKI (PLANSZA 1) 🛒
          </button>
          <button type="button" class="btn-dicey-take btn-city-continue" id="city2-school-btn">
            POWRÓT DO SZKOŁY (PLANSZA 1) 🏫
          </button>
        </div>
      </div>
    </div>
  `;const t=e.querySelector("#city2-next-floor-btn");t&&t.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_3")})});const i=e.querySelector("#city2-repeat-btn");i&&i.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_2")})});const a=e.querySelector("#city2-prev-btn");a&&a.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!1,"city_1")})});const s=e.querySelector("#city2-school-btn");s&&s.addEventListener("click",()=>{d.playStep(),m(()=>{c.closeModal(),c.resetBoard(!0,1)})})}class Dt{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,enemyMaxHp:o=66}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.enemyMaxHp=o,this.enemyHp=o,this.enemyDamage=5,this.tanDamage=_(this.player),this.maxTime=10,this.timeLeft=10,this.timerInterval=null,this.questions=[...ot].sort(()=>Math.random()-.5),this.currentQIndex=0,this.phase="quiz",this.lockInput=!1,this.anagramWords=[{word:"MEGA",hint:"Coś ekstra na wyższym poziomie!"},{word:"SZTOS",hint:"Genialna rzecz, mistrzostwo!"},{word:"DZIĘKI",hint:"Koleżeńskie podziękowanie"},{word:"FAJNE",hint:"Dobre, przyjemne, warte uwagi"},{word:"SŁABE",hint:"Poniżej oczekiwań"}],this.anagramIndex=0,this.anagramSlots=[],this.anagramLetters=[]}mount(){this.renderArena(),this.startRound()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena boss-arena">
        <h2 class="mp-animated-title" id="boss-title" style="top: 22px;">⚽ BOSS: PIŁKARZ ⚽</h2>

        <!-- Górny licznik czasu (10s + 5s za poprawną) -->
        <div class="boss-timer-badge" id="boss-timer-badge">
          <span class="boss-timer-icon">⏱️</span>
          <span class="boss-timer-text" id="boss-timer-num">10s</span>
          <div class="boss-timer-bar">
            <div class="boss-timer-fill" id="boss-timer-fill" style="width: 100%"></div>
          </div>
        </div>

        <!-- Prawy górny róg: Boss Piłkarz -->
        <div class="dd-arena-fighter dd-arena-opponent" id="boss-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Boss Piłkarz ⚽</span>
            </div>
            <div class="dd-fighter-hp-bar" id="boss-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="boss-enemy-hp-fill" style="width: ${t}%; background: #e63946;"></div>
              <span class="dd-fighter-hp-text" id="boss-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="boss-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Pilkarz.png"
              alt="Boss Piłkarz"
              class="dd-fighter-sprite sprite-pilkarz"
              id="boss-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Pilkarz.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Runda wyzwania -->
        <div class="matching-stage-wrapper boss-stage-wrapper" id="boss-stage">
          <!-- Dynamiczna treść minigry -->
        </div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="boss-player-box">
          <div class="dd-sprite-container player-sprite-container" id="boss-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="boss-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="boss-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="boss-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#boss-title");if(i){const a=()=>{i.classList.contains("is-dismissed")||(i.classList.remove("is-centered"),i.classList.add("is-dismissed"),setTimeout(()=>{i.parentNode&&i.remove()},600))};setTimeout(a,1100),this.container.addEventListener("pointerdown",a,{once:!0})}}startRound(){if(this.enemyHp<=0){this.finishBattle();return}this.lockInput=!1;const e=this.container.querySelector("#boss-stage");if(!e)return;const t=["quiz","matching","anagram","matchup"],i=t[this.currentQIndex%t.length];i==="quiz"?this.renderQuizChallenge(e):i==="matching"?this.renderMatchingChallenge(e):i==="anagram"?this.renderAnagramChallenge(e):this.renderMatchUpChallenge(e),this.startTimer()}renderMatchingChallenge(e){const t=[{id:"1",left:"Siema!",right:"Cześć!"},{id:"2",left:"Dzięki!",right:"Dziękuję!"},{id:"3",left:"Sztos!",right:"Rewelacja!"}];let i=[];t.forEach(n=>{i.push({id:n.id,text:n.left,pairId:n.id}),i.push({id:`${n.id}_r`,text:n.right,pairId:n.id})}),i.sort(()=>Math.random()-.5);let a=null,s=0;e.innerHTML=`
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">MATCHING PAIRS ⚽ (Znajdź pasujące pary!)</div>
        <div class="boss-pairs-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
          ${i.map((n,l)=>`
            <button type="button" class="btn-boss-pair-card" data-idx="${l}" data-pair="${n.pairId}" style="min-height: 54px; font-family: 'Fredoka', sans-serif; font-size: 1.1rem; font-weight: 700; border-radius: 12px; background: #1e293b; color: #fff; border: 2.5px solid #3b82f6; cursor: pointer; transition: transform 0.15s;">
              ${n.text}
            </button>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".btn-boss-pair-card").forEach(n=>{n.addEventListener("click",()=>{if(!(this.lockInput||n.classList.contains("is-matched")||n.classList.contains("is-selected")))if(d.playStep(),n.classList.add("is-selected"),n.style.borderColor="#ffd166",n.style.background="#2563eb",!a)a=n;else{const l=n;if(a.dataset.pair===l.dataset.pair)d.playSuccess(),a.classList.remove("is-selected"),l.classList.remove("is-selected"),a.classList.add("is-matched"),l.classList.add("is-matched"),a.style.borderColor="#10b981",a.style.background="rgba(16, 185, 129, 0.3)",l.style.borderColor="#10b981",l.style.background="rgba(16, 185, 129, 0.3)",a=null,s++,s===t.length&&this.handleCorrectAnswer(this.tanDamage);else{d.playWrong(),a.style.borderColor="#ef4444",l.style.borderColor="#ef4444";const r=a;a=null,setTimeout(()=>{r.classList.remove("is-selected"),l.classList.remove("is-selected"),r.style.borderColor="#3b82f6",r.style.background="#1e293b",l.style.borderColor="#3b82f6",l.style.background="#1e293b"},450)}}})})}renderMatchUpChallenge(e){const t=[{left:"Mega",right:"Coś ekstra, rewelacyjnego"},{left:"Fajne",right:"Dobre, przyjemne, warte uwagi"},{left:"Słabe",right:"Kiepskie, poniżej oczekiwań"}];let i=null,a=[...t];const s=[...t].map(r=>r.left).sort(()=>Math.random()-.5),o=[...t].map(r=>r.right).sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">MATCH UP ⚽ (Połącz słowo z definicją!)</div>
        <div class="boss-mu-columns" style="display: flex; gap: 16px; margin-top: 10px;">
          <div class="boss-mu-col left" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            ${s.map(r=>`<button type="button" class="btn-boss-mu-tile left-tile" data-val="${r}" style="padding: 10px; font-family: 'Fredoka', sans-serif; font-size: 1.15rem; font-weight: 800; border-radius: 12px; background: #1e293b; color: #fff; border: 2px solid #8b5cf6; cursor: pointer;">${r}</button>`).join("")}
          </div>
          <div class="boss-mu-col right" style="flex: 1.6; display: flex; flex-direction: column; gap: 8px;">
            ${o.map(r=>`<button type="button" class="btn-boss-mu-tile right-tile" data-val="${r}" style="padding: 10px; font-family: 'Nunito', sans-serif; font-size: 0.95rem; font-weight: 700; border-radius: 12px; background: #1e293b; color: #e2e8f0; border: 2px solid #3b82f6; cursor: pointer;">${r}</button>`).join("")}
          </div>
        </div>
      </div>
    `;const n=e.querySelectorAll(".left-tile"),l=e.querySelectorAll(".right-tile");n.forEach(r=>{r.addEventListener("click",()=>{this.lockInput||r.classList.contains("is-matched")||(n.forEach(p=>{p.classList.remove("is-selected"),p.classList.contains("is-matched")||(p.style.borderColor="#8b5cf6")}),r.classList.add("is-selected"),r.style.borderColor="#ffd166",i=r.dataset.val,d.playStep())})}),l.forEach(r=>{r.addEventListener("click",()=>{if(this.lockInput||r.classList.contains("is-matched")||!i)return;const p=r.dataset.val;if(t.find(y=>y.left===i&&y.right===p)){r.classList.add("is-matched"),r.style.borderColor="#10b981",r.style.background="rgba(16, 185, 129, 0.25)";const y=e.querySelector(`.left-tile[data-val="${i}"]`);y&&(y.classList.add("is-matched"),y.style.borderColor="#10b981",y.style.background="rgba(16, 185, 129, 0.25)"),d.playSuccess(),a=a.filter(u=>u.left!==i),i=null,a.length===0&&this.handleCorrectAnswer(this.tanDamage)}else r.style.borderColor="#ef4444",d.playWrong(),setTimeout(()=>{r.classList.contains("is-matched")||(r.style.borderColor="#3b82f6")},450)})})}startTimer(){this.stopTimer(),this.updateTimerDisplay(),this.timerInterval=setInterval(()=>{this.timeLeft-=1,this.updateTimerDisplay(),this.timeLeft<=3&&this.timeLeft>0&&d.playTick(),this.timeLeft<=0&&this.handleTimeout()},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimerDisplay(){const e=this.container.querySelector("#boss-timer-num"),t=this.container.querySelector("#boss-timer-fill");if(e&&(e.textContent=`${this.timeLeft}s`),t){const i=Math.max(0,Math.min(100,this.timeLeft/15*100));t.style.width=`${i}%`,t.style.background=this.timeLeft<=3?"#ef476f":"#06d6a0"}}addBonusTime(e=5){this.timeLeft=Math.min(20,this.timeLeft+e),this.updateTimerDisplay(),d.playSuccess();const t=this.container.querySelector("#boss-timer-badge");t&&(t.classList.remove("boss-timer-pulse"),t.offsetWidth,t.classList.add("boss-timer-pulse"))}handleTimeout(){this.stopTimer(),d.playHurt(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.timeLeft=this.maxTime,setTimeout(()=>{this.player.hp>0&&(this.currentQIndex++,this.startRound())},800)}renderQuizChallenge(e){const t=this.questions[this.currentQIndex%this.questions.length];e.innerHTML=`
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">PYTANIE QUIZOWE ⚽ (Odpowiedz w 10s!)</div>
        <h3 class="boss-question-prompt">${t.promptPl}</h3>
        <div class="boss-options-grid">
          ${t.options.map((i,a)=>`
            <button type="button" class="boss-option-btn" data-idx="${a}">
              ${i.text}
            </button>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".boss-option-btn").forEach(i=>{i.addEventListener("click",()=>{if(this.lockInput)return;this.lockInput=!0;const a=parseInt(i.dataset.idx,10);t.options[a].correct?(i.classList.add("is-correct"),this.handleCorrectAnswer(this.tanDamage)):(i.classList.add("is-wrong"),this.handleWrongAnswer())})})}renderAnagramChallenge(e){const t=this.anagramWords[this.anagramIndex%this.anagramWords.length],i=t.word.split("").sort(()=>Math.random()-.5);let a=[];e.innerHTML=`
      <div class="boss-card-challenge">
        <div class="boss-challenge-badge">ANAGRAM ⚽ (Ułóż litery w słowo!)</div>
        <h3 class="boss-question-prompt">Podpowiedź: ${t.hint}</h3>
        <div class="boss-anagram-slots" id="boss-an-slots">
          ${t.word.split("").map(()=>'<div class="boss-an-slot">_</div>').join("")}
        </div>
        <div class="boss-anagram-letters" id="boss-an-letters">
          ${i.map((n,l)=>`
            <button type="button" class="boss-letter-btn" data-letter="${n}" data-idx="${l}">${n}</button>
          `).join("")}
        </div>
        <button type="button" class="btn-boss-reset" id="boss-an-reset">Cofnij ↺</button>
      </div>
    `;const s=()=>{e.querySelectorAll(".boss-an-slot").forEach((l,r)=>{l.textContent=a[r]?a[r].letter:"_",l.classList.toggle("has-letter",!!a[r])}),a.length===t.word.length&&(a.map(r=>r.letter).join("")===t.word?this.handleCorrectAnswer(this.tanDamage):this.handleWrongAnswer())};e.querySelectorAll(".boss-letter-btn").forEach(n=>{n.addEventListener("click",()=>{this.lockInput||n.disabled||(n.disabled=!0,a.push({letter:n.dataset.letter,btn:n}),d.playStep(),s())})});const o=e.querySelector("#boss-an-reset");o&&o.addEventListener("click",()=>{a.forEach(n=>n.btn.disabled=!1),a=[],s()})}handleCorrectAnswer(e){this.stopTimer(),d.playAttack("pilkarz"),this.enemyHp=Math.max(0,this.enemyHp-e),this.triggerFighterHit("opponent",`-${e}`),this.updateEnemyHud(),this.addBonusTime(5),setTimeout(()=>{this.enemyHp<=0?this.finishBattle():(this.currentQIndex++,this.anagramIndex++,this.startRound())},700)}handleWrongAnswer(){this.stopTimer(),d.playHurt("pilkarz"),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),setTimeout(()=>{this.player.hp>0&&(this.timeLeft=this.maxTime,this.currentQIndex++,this.anagramIndex++,this.startRound())},800)}triggerFighterHit(e="opponent",t="-25"){const i=this.container.querySelector(e==="opponent"?"#boss-opponent-sprite-wrap":"#boss-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#boss-enemy-hp-fill"),t=this.container.querySelector("#boss-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#boss-player-hp-fill"),t=this.container.querySelector("#boss-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){this.stopTimer(),d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:100})},700)}destroy(){this.stopTimer()}}class E{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,enemyName:o="Cwaniak",enemyTitle:n="🕶️ BOSS: CWANIAK 🕶️",enemySubtitle:l="CWANIAK (MISTRZ MIASTA) 🕶️",enemyAvatar:r="./assets/Postacie/Cwaniak.png",challenges:p=Q,arenaClass:h="cwaniak-arena",enemyMaxHp:y=68}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.enemyName=o,this.enemyTitle=n,this.enemySubtitle=l,this.enemyAvatar=r,this.arenaClass=h,this.enemyMaxHp=y,this.enemyHp=y,this.enemyDamage=5,this.tanDamage=_(this.player),this.maxTime=10+(this.player.bonusTimeSec||0),this.timeLeft=this.maxTime,this.timerInterval=null,this.damageTakenInBattle=0,this.challenges=[...p].sort(()=>Math.random()-.5),this.currentIdx=0,this.lockInput=!1,this.matchupSelectedLeft=null,this.matchupPairsLeft=[],this.sortingItems=[],this.currentSortItemIdx=0}mount(){this.renderArena(),this.startRound()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena boss-arena ${this.arenaClass}">
        <h2 class="mp-animated-title" id="cwaniak-title" style="top: 22px;">${this.enemyTitle}</h2>

        <!-- Górny licznik czasu (10s + 5s za poprawną) -->
        <div class="boss-timer-badge" id="cwaniak-timer-badge">
          <span class="boss-timer-icon">⏱️</span>
          <span class="boss-timer-val" id="cwaniak-timer-val">${this.maxTime.toFixed(1)}s</span>
          <span class="boss-timer-bonus" id="cwaniak-timer-bonus">+5s</span>
        </div>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="cwaniak-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemySubtitle}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="cwaniak-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="cwaniak-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="cwaniak-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container boss-opponent-sprite-container" id="cwaniak-opponent-sprite-wrap">
            <img
              src="${this.enemyAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite sprite-${(this.enemyName||"cwaniak").toLowerCase()}"
              id="cwaniak-sprite"
              onerror="this.src='./public${this.enemyAvatar.replace(/^\./,"")}'"
            />
          </div>
        </div>

        <!-- Środek areny: Aktywne wyzwanie (Quiz / Match Up / Sorting) -->
        <div class="matching-stage-wrapper boss-stage-wrapper" id="cwaniak-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="cwaniak-player-box">
          <div class="dd-sprite-container player-sprite-container" id="cwaniak-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="cwaniak-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="cwaniak-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#cwaniak-title");if(i){const a=()=>{i.classList.contains("is-dismissed")||(i.classList.remove("is-centered"),i.classList.add("is-dismissed"),setTimeout(()=>{i.parentNode&&i.remove()},600))};setTimeout(a,1100),this.container.addEventListener("pointerdown",a,{once:!0})}}startTimer(){this.stopTimer();const e=this.container.querySelector("#cwaniak-timer-val"),t=this.container.querySelector("#cwaniak-timer-badge");this.timerInterval=setInterval(()=>{this.timeLeft=Math.max(0,this.timeLeft-.1),e&&(e.textContent=`${this.timeLeft.toFixed(1)}s`),this.timeLeft<=3.5&&t?t.classList.add("timer-panic"):t&&t.classList.remove("timer-panic"),this.timeLeft<=0&&(this.stopTimer(),this.handleTimeout())},100)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}addBonusTime(e=5){this.timeLeft+=e;const t=this.container.querySelector("#cwaniak-timer-bonus");t&&(t.textContent=`+${e}s`,t.classList.remove("bonus-pop"),t.offsetWidth,t.classList.add("bonus-pop"))}startRound(){if(this.enemyHp<=0){this.finishBattle();return}this.lockInput=!1;const e=this.container.querySelector("#cwaniak-stage");if(!e)return;const t=this.challenges[this.currentIdx%this.challenges.length];t.type==="quiz"?this.renderGameshowQuiz(e,t):t.type==="matchup"?this.renderMatchUp(e,t):t.type==="sorting"&&this.renderSpeedSorting(e,t),this.startTimer()}renderGameshowQuiz(e,t){const i=this.enemyName?this.enemyName.toUpperCase():"BOSS";e.innerHTML=`
      <div class="boss-card-challenge boss-quiz-card">
        <div class="boss-challenge-badge boss-round-tag">🎮 GAMESHOW QUIZ • ${i}</div>
        <h3 class="boss-question-prompt boss-q-prompt">${t.prompt}</h3>
        <div class="boss-options-grid boss-quiz-options">
          ${t.options.map((a,s)=>`
            <button type="button" class="btn-boss-opt" data-idx="${s}">
              <span class="bbo-bullet">${["A","B","C","D"][s]}</span>
              <span class="bbo-text">${a.text}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".btn-boss-opt").forEach(a=>{a.addEventListener("click",()=>{if(this.lockInput)return;this.lockInput=!0;const s=parseInt(a.dataset.idx,10);t.options[s].correct?(a.classList.add("is-correct"),this.handleCorrect()):(a.classList.add("is-wrong"),this.handleWrong())})})}renderMatchUp(e,t){this.matchupPairsLeft=[...t.pairs],this.matchupSelectedLeft=null;const i=this.enemyName?this.enemyName.toUpperCase():"BOSS",a=[...t.pairs].map(l=>l.left).sort(()=>Math.random()-.5),s=[...t.pairs].map(l=>l.right).sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="boss-card-challenge boss-matchup-card">
        <div class="boss-challenge-badge boss-round-tag">🧩 MATCH UP • ${i}</div>
        <h3 class="boss-question-prompt boss-q-prompt">${t.prompt}</h3>
        <div class="boss-mu-columns">
          <div class="boss-mu-col left" id="cwaniak-mu-left">
            ${a.map(l=>`<button type="button" class="btn-mu-tile left-tile" data-val="${l}">${l}</button>`).join("")}
          </div>
          <div class="boss-mu-col right" id="cwaniak-mu-right">
            ${s.map(l=>`<button type="button" class="btn-mu-tile right-tile" data-val="${l}">${l}</button>`).join("")}
          </div>
        </div>
      </div>
    `;const o=e.querySelectorAll(".left-tile"),n=e.querySelectorAll(".right-tile");o.forEach(l=>{l.addEventListener("click",()=>{this.lockInput||l.classList.contains("is-matched")||(o.forEach(r=>r.classList.remove("is-selected")),l.classList.add("is-selected"),this.matchupSelectedLeft=l.dataset.val,d.playStep())})}),n.forEach(l=>{l.addEventListener("click",()=>{if(this.lockInput||l.classList.contains("is-matched")||!this.matchupSelectedLeft)return;const r=l.dataset.val;if(t.pairs.find(h=>h.left===this.matchupSelectedLeft&&h.right===r)){l.classList.add("is-matched");const h=e.querySelector(`.left-tile[data-val="${this.matchupSelectedLeft}"]`);h&&h.classList.add("is-matched"),d.playSuccess(),this.matchupPairsLeft=this.matchupPairsLeft.filter(y=>y.left!==this.matchupSelectedLeft),this.matchupSelectedLeft=null,o.forEach(y=>y.classList.remove("is-selected")),this.matchupPairsLeft.length===0&&this.handleCorrect()}else l.classList.add("is-wrong"),d.playWrong(),setTimeout(()=>l.classList.remove("is-wrong"),450)})})}renderSpeedSorting(e,t){this.sortingItems=[...t.items],this.currentSortItemIdx=0;const i=()=>{if(this.currentSortItemIdx>=this.sortingItems.length){this.handleCorrect();return}const a=this.sortingItems[this.currentSortItemIdx],s=this.enemyName?this.enemyName.toUpperCase():"BOSS";e.innerHTML=`
        <div class="boss-card-challenge boss-sorting-card">
          <div class="boss-challenge-badge boss-round-tag">⚡ SPEED SORTING • ${s}</div>
          <h3 class="boss-question-prompt boss-q-prompt">${t.prompt}</h3>

          <div class="boss-sort-active-item">
            <span class="bsi-num">${this.currentSortItemIdx+1}/${this.sortingItems.length}</span>
            <strong class="bsi-text">„${a.text}”</strong>
          </div>

          <div class="boss-sort-buckets">
            ${t.categories.map((o,n)=>`
              <button type="button" class="btn-sort-bucket" data-cat="${o}">
                ${o}
              </button>
            `).join("")}
          </div>
        </div>
      `,e.querySelectorAll(".btn-sort-bucket").forEach(o=>{o.addEventListener("click",()=>{if(this.lockInput)return;o.dataset.cat===a.category?(d.playSuccess(),o.classList.add("is-correct"),this.currentSortItemIdx++,setTimeout(()=>i(),350)):(d.playWrong(),o.classList.add("is-wrong"),setTimeout(()=>o.classList.remove("is-wrong"),400),this.handleWrong())})})};i()}handleCorrect(){this.stopTimer(),d.playHit(this.enemyName),this.addBonusTime(5),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateOpponentBar();const e=this.container.querySelector("#cwaniak-sprite");e&&(e.classList.add("shake-hit"),setTimeout(()=>e.classList.remove("shake-hit"),500)),setTimeout(()=>{this.currentIdx++,this.enemyHp<=0?this.finishBattle():this.startRound()},750)}handleWrong(){d.playWrong(),d.playEnemyHit(this.enemyName),this.damageTakenInBattle+=this.enemyDamage,this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerBar();const e=this.container.querySelector(".sprite-tan");e&&(e.classList.add("shake-hit"),setTimeout(()=>e.classList.remove("shake-hit"),500)),this.timeLeft=this.maxTime}handleTimeout(){d.playWrong(),d.playEnemyHit(this.enemyName),this.damageTakenInBattle+=this.enemyDamage,this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerBar();const e=this.container.querySelector(".sprite-tan");e&&(e.classList.add("shake-hit"),setTimeout(()=>e.classList.remove("shake-hit"),500)),this.timeLeft=this.maxTime,this.currentIdx++,this.startRound()}updatePlayerBar(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector("#cwaniak-player-hp-fill"),i=this.container.querySelector("#cwaniak-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`)}updateOpponentBar(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector("#cwaniak-enemy-hp-fill"),i=this.container.querySelector("#cwaniak-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}finishBattle(){this.stopTimer(),d.playFanfare();const e=this.container.querySelector("#cwaniak-stage");e&&(e.innerHTML=`
        <div class="boss-victory-splash">
          <div class="bvs-trophy">🏆🌟</div>
          <h2>${this.enemyName.toUpperCase()} ZOSTAŁ(A) POKONANY(A)!</h2>
          <p>Wspaniały wynik! Opanowałeś wszystkie wyzwania z języka polskiego A0!</p>
        </div>
      `),setTimeout(()=>{this.onComplete&&this.onComplete({score:1e3,damageTaken:this.damageTakenInBattle})},1500)}destroy(){this.stopTimer(),this.container.innerHTML=""}}class Ht{constructor(e){this.app=e}launchBossFootballer(e="b7_node_3"){const t=this.app.openArena(1);this.app.activeMinigame=new Dt(t,{player:this.app.player,enemyMaxHp:66,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),P.resumeBoardMusic(),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Piłkarz był szybki! Spróbuj ponownie! ⚽",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||200,"Boss Piłkarz pokonany! Szkoła ukończona! ⚽🏆")}}),this.app.activeMinigame.mount()}launchBossCwaniak(e="cb_node_6"){const t=this.app.openArena(2);this.app.activeMinigame=new E(t,{player:this.app.player,arenaClass:"cwaniak-arena",enemySubtitle:"CWANIAK (68 HP, 5 dmg) 🕶️",challenges:Q,enemyMaxHp:68,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),P.resumeBoardMusic(),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Cwaniak był za szybki! Spróbuj ponownie! 🕶️",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||1e3,"Boss Cwaniak pokonany! Jesteś Mistrzem Miasta! 🕶️🏆")}}),this.app.activeMinigame.mount()}launchBossNauczycielka(e="m3_b_node_6"){const t=this.app.openArena(3);this.app.activeMinigame=new E(t,{player:this.app.player,enemyName:"Nauczycielka",enemyTitle:"👩‍🏫 BOSS: NAUCZYCIELKA (EGZAMIN SZKOLNY) 👩‍🏫",enemySubtitle:"NAUCZYCIELKA (68 HP, 5 dmg)",enemyAvatar:"./assets/Postacie/Nauczycielka.png",challenges:nt,arenaClass:"nauczycielka-arena",enemyMaxHp:68,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),P.resumeBoardMusic(),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||1e3,"Pani Nauczycielka jest dumna z Twoich postępów! 👩‍🏫⭐",{damageTaken:a})}}),this.app.activeMinigame.mount()}launchBossLekarz(e="m4_b_node_6"){const t=this.app.openArena(4);this.app.activeMinigame=new E(t,{player:this.app.player,enemyName:"Lekarz",enemyTitle:"🩺 BOSS: DOKTOR LEKARZ (CENTRUM ZDROWIA) 🩺",enemySubtitle:"DOKTOR LEKARZ (70 HP, 5 dmg)",enemyAvatar:"./assets/Postacie/Lekarz.png",challenges:lt,arenaClass:"lekarz-arena",enemyMaxHp:70,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),P.resumeBoardMusic(),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||1e3,"Doktor potwierdza: jesteś w pełni zdrowy i gotowy do działania! 🩺💪",{damageTaken:a})}}),this.app.activeMinigame.mount()}launchBossInstagramerka(e="m5_b_node_6"){const t=this.app.openArena(5);this.app.activeMinigame=new E(t,{player:this.app.player,enemyName:"Instagramerka",enemyTitle:"📱 BOSS: INSTAGRAMERKA (KRÓLOWA TRENDÓW) 📱",enemySubtitle:"INSTAGRAMERKA (70 HP, 5 dmg)",enemyAvatar:"./assets/Postacie/Instagramerka.png",challenges:ht,arenaClass:"instagramerka-arena",enemyMaxHp:70,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),P.resumeBoardMusic(),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||1e3,"Instagramerka ogłasza: Tan to prawdziwy Król Trendów i Języka Polskiego! 📱🏆👑",{damageTaken:a})}}),this.app.activeMinigame.mount()}}class re{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,shoppingChoices:o={}}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.shoppingChoices=o,this.enemyMaxHp=20,this.enemyHp=20,this.enemyDamage=10,this.tanDamage=_(this.player),this.maxTime=5,this.timeLeft=5,this.timerInterval=null,this.lockInput=!1,this.boxesPool=[{id:"box_woda",title:"Butelka napoju",image:"./assets/slowka/woda.jpg",correctWord:"wodę",correctPhrase:"Poproszę wodę.",options:[{text:"💧 Poproszę wodę.",correct:!0},{text:"🥖 Poproszę bułkę.",correct:!1},{text:"🥔 Poproszę czipsy.",correct:!1},{text:"🛍️ Poproszę reklamówkę.",correct:!1}]},{id:"box_bulka",title:"Świeże pieczywo",image:"./assets/slowka/bulka.jpg",correctWord:"bułkę",correctPhrase:"Poproszę bułkę.",options:[{text:"🥖 Poproszę bułkę.",correct:!0},{text:"💧 Poproszę wodę.",correct:!1},{text:"💳 Płacę kartą.",correct:!1},{text:"🥔 Poproszę czipsy.",correct:!1}]},{id:"box_czipsy",title:"Przekąska",image:"./assets/slowka/czipsy.jpg",correctWord:"czipsy",correctPhrase:"Poproszę czipsy.",options:[{text:"🥔 Poproszę czipsy.",correct:!0},{text:"🥖 Poproszę bułkę.",correct:!1},{text:"💵 Płacę gotówką.",correct:!1},{text:"💧 Poproszę wodę.",correct:!1}]},{id:"box_karta",title:"Forma płatności",image:"./assets/slowka/karta_kredytowa.jpg",correctWord:"karta",correctPhrase:"Zapłacę kartą.",options:[{text:"💳 Zapłacę kartą.",correct:!0},{text:"💵 Zapłacę gotówką.",correct:!1},{text:"🛍️ Poproszę reklamówkę.",correct:!1},{text:"🥖 Poproszę bułkę.",correct:!1}]},{id:"box_gotowka",title:"Banknoty i monety",image:"./assets/slowka/gotowka.jpg",correctWord:"gotówka",correctPhrase:"Zapłacę gotówką.",options:[{text:"💵 Zapłacę gotówką.",correct:!0},{text:"💳 Zapłacę kartą.",correct:!1},{text:"💧 Poproszę wodę.",correct:!1},{text:"🥔 Poproszę czipsy.",correct:!1}]}].sort(()=>Math.random()-.5),this.currentBoxIdx=0,this.openedBoxesCount=0}mount(){this.renderArena(),this.openNextBox()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena otb-arena">
        <h2 class="mp-animated-title" id="otb-title" style="top: 22px;">📦 OPEN THE BOX (Czas 5s!) 📦</h2>

        <!-- Licznik 5s -->
        <div class="otb-timer-pill" id="otb-timer-pill">
          ⏱️ <span id="otb-timer-sec">5s</span>
        </div>

        <!-- Prawy górny róg: Kasjerka (Mistrzynia Żabki) -->
        <div class="dd-arena-fighter dd-arena-opponent" id="otb-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kasjerka (Żabka) 🛒</span>
            </div>
            <div class="dd-fighter-hp-bar" id="otb-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="otb-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="otb-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container kasjerka-sprite-container" id="otb-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Mistrzynia_Zabki.png"
              alt="Kasjerka"
              class="dd-fighter-sprite sprite-kasjerka"
              id="otb-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Mistrzynia_Zabki.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Pudełko i pytania -->
        <div class="matching-stage-wrapper otb-stage-wrapper" id="otb-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="otb-player-box">
          <div class="dd-sprite-container player-sprite-container" id="otb-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="otb-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="otb-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector(".mp-animated-title");if(i){const a=()=>{i.classList.contains("is-dismissed")||(i.classList.remove("is-centered"),i.classList.add("is-dismissed"),setTimeout(()=>{i.parentNode&&i.remove()},600))};setTimeout(a,1100),this.container.addEventListener("pointerdown",a,{once:!0})}}openNextBox(){if(this.enemyHp<=0){this.finishBattle();return}this.lockInput=!1;const e=this.container.querySelector("#otb-stage");if(!e)return;const t=this.boxesPool[this.currentBoxIdx%this.boxesPool.length],i=this.currentBoxIdx%4+1;e.innerHTML=`
      <div class="otb-box-card">
        <div class="otb-box-banner">PUDEŁKO NR ${i} 📦 — Dopasuj obraz do słowa:</div>
        <div class="otb-box-content">
          <div class="otb-mystery-box opened">
            <div class="otb-box-lid"></div>
            <div class="otb-item-display">
              <img src="${t.image}" alt="${t.title}" class="otb-revealed-img" onerror="this.src='./public/assets/slowka/woda.jpg'" />
              <span class="otb-item-hint">${t.title}</span>
            </div>
          </div>
          <div class="otb-options-column">
            ${t.options.map((a,s)=>`
              <button type="button" class="otb-choice-btn" data-idx="${s}">
                ${a.text}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `,e.querySelectorAll(".otb-choice-btn").forEach(a=>{a.addEventListener("click",()=>{if(this.lockInput)return;this.lockInput=!0;const s=parseInt(a.dataset.idx,10);t.options[s].correct?(a.classList.add("is-correct"),this.handleCorrect()):(a.classList.add("is-wrong"),this.handleWrong())})}),this.startTimer()}startTimer(){this.stopTimer(),this.timeLeft=this.maxTime,this.updateTimerDisplay(),this.timerInterval=setInterval(()=>{this.timeLeft-=1,this.updateTimerDisplay(),this.timeLeft<=2&&this.timeLeft>0&&d.playTick(),this.timeLeft<=0&&this.handleTimeout()},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimerDisplay(){const e=this.container.querySelector("#otb-timer-sec"),t=this.container.querySelector("#otb-timer-pill");e&&(e.textContent=`${this.timeLeft}s`),t&&t.classList.toggle("is-urgent",this.timeLeft<=2)}handleCorrect(){this.stopTimer(),d.playAttack(),d.playSuccess(),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.triggerFighterHit("opponent",`-${this.tanDamage}`),this.updateEnemyHud(),setTimeout(()=>{this.enemyHp<=0?this.finishBattle():(this.currentBoxIdx++,this.openNextBox())},700)}handleWrong(){this.stopTimer(),d.playHurt(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),setTimeout(()=>{this.player.hp>0&&(this.currentBoxIdx++,this.openNextBox())},800)}handleTimeout(){this.stopTimer(),d.playHurt(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),setTimeout(()=>{this.player.hp>0&&(this.currentBoxIdx++,this.openNextBox())},800)}triggerFighterHit(e="opponent",t="-10"){const i=this.container.querySelector(e==="opponent"?"#otb-opponent-sprite-wrap":"#otb-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#otb-enemy-hp-fill"),t=this.container.querySelector("#otb-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#otb-player-hp-fill"),t=this.container.querySelector("#otb-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){this.stopTimer(),d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:100})},600)}destroy(){this.stopTimer()}}class le{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,shoppingChoices:o={}}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.shoppingChoices=o,this.enemyMaxHp=20,this.enemyHp=20,this.enemyDamage=5;let n="Poproszę świeżą bułkę i wodę.";o.itemsText?n=o.itemsText:Array.isArray(o.items)&&o.items.length>0?n=`Poproszę ${o.items.join(" i ")}.`:o.items==="chips_water"&&(n="Poproszę czipsy i butelkę wody.");const l=o.bag==="no_bag"||o.bag==="nie"?"Dziękuję, nie potrzebuję reklamówki, mam własną torbę.":"Tak, poproszę małą reklamówkę.",r=o.payment==="cash"||o.payment==="gotowka"?"Zapłacę gotówką – mam odliczoną kwotę.":"Będę płacić kartą, zbliżeniowo.";this.correctOrder=[{id:"step_1",text:"1. „Dzień dobry!” (Powitanie przy kasie)",stepNum:1},{id:"step_2",text:`2. „${n}” (Podanie zamówienia)`,stepNum:2},{id:"step_3",text:`3. „${l}” (Odpowiedź w sprawie reklamówki)`,stepNum:3},{id:"step_4",text:`4. „${r}” (Płatność za zakupy)`,stepNum:4},{id:"step_5",text:"5. „Dziękuję, miłego dnia! Do widzenia!” (Pożegnanie)",stepNum:5}],this.items=[...this.correctOrder].sort(()=>Math.random()-.5),this.items.every((p,h)=>p.stepNum===h+1)&&this.items.reverse(),this.lockInput=!1}mount(){this.renderArena()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena ro-arena">
        <h2 class="mp-animated-title" id="ro-title" style="top: 22px;">🛒 RANK ORDER: DIALOG PRZY KASIE 🛒</h2>

        <!-- Prawy górny róg: Kasjerka -->
        <div class="dd-arena-fighter dd-arena-opponent" id="ro-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kasjerka (Żabka) 🛒</span>
            </div>
            <div class="dd-fighter-hp-bar" id="ro-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="ro-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="ro-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container kasjerka-sprite-container" id="ro-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Mistrzynia_Zabki.png"
              alt="Kasjerka"
              class="dd-fighter-sprite sprite-kasjerka"
              id="ro-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Mistrzynia_Zabki.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Kafelki do sortowania -->
        <div class="matching-stage-wrapper ro-stage-wrapper">
          <div class="ro-card-board">
            <div class="ro-instructions">
              ✋ <strong>Przeciągnij i upuść</strong> (trzymaj myszką), aby ułożyć etapy rozmowy przy kasie:
            </div>

            <div class="ro-items-list" id="ro-items-list">
              ${this.renderItemsList()}
            </div>

            <button type="button" class="btn-dicey-take btn-ro-verify" id="ro-verify-btn">
              SPRAWDŹ KOLEJNOŚĆ DIALOGU ✔
            </button>
          </div>
        </div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="ro-player-box">
          <div class="dd-sprite-container player-sprite-container" id="ro-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="ro-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="ro-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `,this.bindEvents()}renderItemsList(){return this.items.map((e,t)=>`
      <div class="ro-item-row" draggable="true" data-idx="${t}">
        <div class="ro-drag-handle" title="Chwyć i przeciągnij">⠿</div>
        <div class="ro-pos-badge">${t+1}</div>
        <div class="ro-item-text">${e.text}</div>
      </div>
    `).join("")}bindEvents(){const e=this.container.querySelector("#ro-items-list");if(!e)return;let t=null;const i=e.querySelectorAll(".ro-item-row");i.forEach(s=>{s.addEventListener("dragstart",o=>{this.lockInput||(t=parseInt(s.dataset.idx,10),s.classList.add("is-dragging"),o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("text/plain",String(t)))}),s.addEventListener("dragend",()=>{s.classList.remove("is-dragging"),i.forEach(o=>o.classList.remove("drag-over-top","drag-over-bottom"))}),s.addEventListener("dragover",o=>{if(o.preventDefault(),this.lockInput||t===null||parseInt(s.dataset.idx,10)===t)return;const l=s.getBoundingClientRect(),r=l.top+l.height/2;i.forEach(p=>p.classList.remove("drag-over-top","drag-over-bottom")),o.clientY<r?s.classList.add("drag-over-top"):s.classList.add("drag-over-bottom")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over-top","drag-over-bottom")}),s.addEventListener("drop",o=>{if(o.preventDefault(),i.forEach(r=>r.classList.remove("drag-over-top","drag-over-bottom")),this.lockInput||t===null)return;const n=parseInt(s.dataset.idx,10);if(t===n)return;d.playStep();const l=this.items.splice(t,1)[0];this.items.splice(n,0,l),t=null,e.innerHTML=this.renderItemsList(),this.bindEvents()})});const a=this.container.querySelector("#ro-verify-btn");a&&a.addEventListener("click",()=>{this.lockInput||this.checkOrder()})}checkOrder(){this.lockInput=!0;const e=this.items.every((i,a)=>i.stepNum===a+1),t=this.container.querySelectorAll(".ro-item-row");t.forEach((i,a)=>{this.items[a].stepNum===a+1?i.classList.add("is-row-correct"):i.classList.add("is-row-wrong")}),e?(d.playAttack(),d.playSuccess(),this.enemyHp=0,this.triggerFighterHit("opponent","-20"),this.updateEnemyHud(),setTimeout(()=>{this.finishBattle()},700)):(d.playHurt(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),setTimeout(()=>{t.forEach(i=>i.classList.remove("is-row-correct","is-row-wrong")),this.lockInput=!1},900))}triggerFighterHit(e="opponent",t="-20"){const i=this.container.querySelector(e==="opponent"?"#ro-opponent-sprite-wrap":"#ro-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#ro-enemy-hp-fill"),t=this.container.querySelector("#ro-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#ro-player-hp-fill"),t=this.container.querySelector("#ro-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:100})},600)}destroy(){}}class Bt{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,foodChoices:o={}}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.foodChoices=o||{},this.enemyMaxHp=30,this.enemyHp=30,this.enemyDamage=3,this.tanDamage=_(this.player),this.currentStepIdx=0,this.lockInput=!1,this.buildDialogSteps()}buildDialogSteps(){const e=this.foodChoices.dish||"kebab",t=e==="pizza"?"pizzę":e==="burger"?"burgera":"kebab",i=this.foodChoices.size||"L",a=this.foodChoices.sauce||"czosnkowy",s=this.foodChoices.dining||"na_miejscu";let o="sos czosnkowy";a==="ostry"&&(o="sos ostry"),a==="mieszany"&&(o="sos mieszany (czosnkowy i ostry)");const n=s==="na_wynos"?"na wynos (do torby)":"na miejscu (przy stoliku)";this.steps=[{id:"step_order",chefQuestion:"„Siemanko, szefie! Co dzisiaj dla Ciebie przygotować i w jakim rozmiarze?” 👨‍🍳",options:[{text:`„Poproszę ${t} w rozmiarze ${i}.”`,correct:!0,hint:"Zgodnie z Twoim wcześniejszym wyborem!"},{text:"„Chcę tylko pusty talerz i serwetki.”",correct:!1,hint:"To nie zamówienie posiłku!"},{text:"„Daj mi cokolwiek, nie wiem co tu macie.”",correct:!1,hint:"Warto dokładnie podać danie i rozmiar."}].sort(()=>Math.random()-.5)},{id:"step_sauce",chefQuestion:"„Elegancko! A jaki sosik do tego polewamy? Czosnek czy ostry?” 🧄🌶️",options:[{text:`„Poproszę ${o}!”`,correct:!0,hint:"Zgodnie z Twoim upodobaniem z Myśli!"},{text:"„Poproszę z dżemem truskawkowym.”",correct:!1,hint:"Dżem do kebaba/burgera? To brzmi dziwnie!"},{text:"„Nie lubię żadnego jedzenia.”",correct:!1,hint:"Wybierz sos, na który masz ochotę."}].sort(()=>Math.random()-.5)},{id:"step_dining",chefQuestion:"„A jak podajemy: będzie jedzone na miejscu czy zapakować na wynos?” 🍽️🥡",options:[{text:`„Poproszę ${n}.”`,correct:!0,hint:"Odpowiedź zgodna z Twoim planem!"},{text:"„Zapłacę gotówką za nowe buty szkolne.”",correct:!1,hint:"Pytanie dotyczy miejsca spożycia, a nie butów!"},{text:"„Nigdzie nie idę i nic nie wiem.”",correct:!1,hint:"Powiedz jasno: na miejscu czy na wynos."}].sort(()=>Math.random()-.5)},{id:"step_wait",chefQuestion:"„Super sprawa! Zaraz wrzucam na ruszt. Proszę poczekać około 5 minut przy ladzie!” ⏳",options:[{text:"„Jasne, poczekam! Dziękuję bardzo!”",correct:!0,hint:"Uprzejma akceptacja oczekiwania i podziękowanie."},{text:"„Dlaczego tak wolno?! Dawaj to natychmiast!”",correct:!1,hint:"Niegrzeczna odpowiedź — kucharz potrzebuje chwili."},{text:"„To ja uciekam i nie chcę już niczego.”",correct:!1,hint:"Wystarczy chwilę spokojnie poczekać."}].sort(()=>Math.random()-.5)},{id:"step_thanks",chefQuestion:"„Gotowe, szefie! Świeżutkie, gorące i pachnące! Proszę bardzo, życzę smacznego!” 🥙✨",options:[{text:"„Dziękuję bardzo! Miłego dnia i do widzenia!”",correct:!0,hint:"Kulturalne podziękowanie za posiłek i pożegnanie!"},{text:"„To pomyłka, nie zapłacę ani słowa.”",correct:!1,hint:"Wypada podziękować za przygotowane jedzenie."},{text:"„Zabieram i nic nie powiem.”",correct:!1,hint:"Pamiętaj o zwrocie: „Dziękuję!”"}].sort(()=>Math.random()-.5)}]}mount(){this.renderArena(),this.renderCurrentQuestion()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena km-arena">
        <h2 class="mp-animated-title" style="top: 22px;">🥙 MISTRZ KEBABA: ZAMÓWIENIE 🥙</h2>

        <!-- Prawy górny róg: Mistrz Kebaba -->
        <div class="dd-arena-fighter dd-arena-opponent" id="km-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Mistrz Kebaba 👨‍🍳</span>
            </div>
            <div class="dd-fighter-hp-bar" id="km-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="km-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="km-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="km-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Mistrz_Kebaba.png"
              alt="Mistrz Kebaba"
              class="dd-fighter-sprite sprite-kebab-master"
              id="km-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Mistrz_Kebaba.png'"
            />
          </div>
        </div>

        <!-- Środek: Dymek Mistrza Kebaba i opcje odpowiedzi Tana -->
        <div class="matching-stage-wrapper km-stage-wrapper" id="km-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="km-player-box">
          <div class="dd-sprite-container player-sprite-container" id="km-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill" id="km-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="km-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector(".mp-animated-title");if(i){const a=()=>{i.classList.contains("is-dismissed")||(i.classList.remove("is-centered"),i.classList.add("is-dismissed"),setTimeout(()=>{i.parentNode&&i.remove()},600))};setTimeout(a,1100),this.container.addEventListener("pointerdown",a,{once:!0})}}renderCurrentQuestion(){if(this.enemyHp<=0||this.currentStepIdx>=this.steps.length){this.finishBattle();return}const e=this.steps[this.currentStepIdx],t=this.container.querySelector("#km-stage");t&&(this.lockInput=!1,t.innerHTML=`
      <div class="km-dialog-card">
        <div class="km-step-badge">PYTANIE ${this.currentStepIdx+1} Z ${this.steps.length}</div>
        
        <div class="km-chef-bubble" id="km-chef-bubble">
          <span class="km-chef-avatar">👨‍🍳</span>
          <p class="km-chef-text">${e.chefQuestion}</p>
        </div>

        <div class="km-options-grid">
          ${e.options.map((i,a)=>`
            <button type="button" class="km-choice-btn" data-idx="${a}">
              <span class="km-choice-bullet">💬</span>
              <span class="km-choice-text">${i.text}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,t.querySelectorAll(".km-choice-btn").forEach(i=>{i.addEventListener("click",()=>{if(this.lockInput)return;this.lockInput=!0;const a=parseInt(i.dataset.idx,10),s=e.options[a];s.correct?(i.classList.add("is-correct"),this.handleCorrect(s.text)):(i.classList.add("is-wrong"),this.handleWrong())})}))}handleCorrect(e){d.playHit(),d.speakPolish(e.replace(/[„”«»]/g,"")),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateOpponentBar();const t=this.container.querySelector("#km-opponent-sprite");t&&(t.classList.add("shake-hit"),setTimeout(()=>t.classList.remove("shake-hit"),500)),setTimeout(()=>{this.currentStepIdx++,this.enemyHp<=0||this.currentStepIdx>=this.steps.length?this.finishBattle():this.renderCurrentQuestion()},950)}handleWrong(){d.playWrong(),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage);const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector("#km-player-hp-fill"),i=this.container.querySelector("#km-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`);const a=this.container.querySelector(".sprite-tan");a&&(a.classList.add("shake-hit"),setTimeout(()=>a.classList.remove("shake-hit"),500));const s=this.container.querySelector("#km-chef-bubble .km-chef-text");s&&(s.textContent="„Oj, szefie, chyba się nie dogadaliśmy! Spróbuj odpowiedzieć jeszcze raz!” 🤔"),setTimeout(()=>{this.lockInput=!1;const o=this.container.querySelector(".km-choice-btn.is-wrong");o&&o.classList.remove("is-wrong")},1e3)}updateOpponentBar(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector("#km-enemy-hp-fill"),i=this.container.querySelector("#km-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}finishBattle(){d.playFanfare();const e=this.container.querySelector("#km-stage");e&&(e.innerHTML=`
        <div class="km-dialog-card km-victory-card">
          <div class="km-vic-icon">🥙🎉</div>
          <h3>ZAMÓWIENIE ZŁOŻONE PERFEKCYJNIE!</h3>
          <p>Mistrz Kebaba przybił Ci piątkę! Znasz zwroty zamawiania, sosów, rozmiarów i uprzejmej obsługi klienta!</p>
        </div>
      `),setTimeout(()=>{this.onComplete&&this.onComplete({score:300})},1200)}destroy(){this.lockInput=!0,this.container.innerHTML=""}}class C{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s,enemyName:o="Wuefista",enemyTitle:n="🏃 WUEFISTA 🏃",enemySubtitle:l="Nauczyciel WF-u (30 HP, 3 dmg)",enemyAvatar:r="./assets/Postacie/Wuefista.png",enemyMaxHp:p=30,enemyDamage:h=3,steps:y=[],arenaClass:u=""}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.enemyName=o,this.enemyTitle=n,this.enemySubtitle=l,this.enemyAvatar=r,this.steps=y||[],this.tanDamage=_(this.player),this.enemyMaxHp=this.steps.length>0?this.steps.length*this.tanDamage:p||20,this.enemyHp=this.enemyMaxHp,this.enemyDamage=h,this.arenaClass=u||"",this.currentStepIdx=0,this.lockInput=!1,this.damageTakenInBattle=0}mount(){this.renderArena(),this.renderCurrentStep()}renderArena(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena cd-arena ${this.arenaClass}">
        <h2 class="mp-animated-title" style="top: 22px;">${this.enemyTitle}</h2>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemySubtitle}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill cd-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text cd-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container">
            <img
              src="${this.enemyAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite cd-opponent-sprite"
              onerror="this.src='./public${this.enemyAvatar.replace(/^\./,"")}'"
            />
          </div>
        </div>

        <!-- Środek: Okno dialogowe i wybór odpowiedzi -->
        <div class="cd-stage-wrapper" id="cd-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player">
          <div class="dd-sprite-container player-sprite-container">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan cd-tan-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.player.name||"Tan"}</span>
            </div>
            <div class="dd-fighter-hp-bar">
              <div class="dd-fighter-hp-fill cd-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text cd-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector(".mp-animated-title");if(i){const a=()=>{i.classList.contains("is-dismissed")||(i.classList.remove("is-centered"),i.classList.add("is-dismissed"),setTimeout(()=>{i.parentNode&&i.remove()},600))};setTimeout(a,1100),this.container.addEventListener("pointerdown",a,{once:!0})}}renderCurrentStep(){const e=this.container.querySelector("#cd-stage");if(!e)return;this.currentStepIdx>=this.steps.length&&(this.currentStepIdx=0);const t=this.steps[this.currentStepIdx];this.lockInput=!1;const i=t.question.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu,"");d.speakPolish(i),e.innerHTML=`
      <div class="cd-bubble-box">
        <div class="cd-character-avatar-bubble">
          <img src="${this.enemyAvatar}" alt="${this.enemyName}" />
        </div>
        <div class="cd-character-text">${t.question}</div>
      </div>

      <div class="cd-options-grid">
        ${t.options.map((a,s)=>`
          <button class="cd-option-card" data-idx="${s}">
            <span class="cd-option-icon">💬</span>
            <span class="cd-option-text">${a.text}</span>
          </button>
        `).join("")}
      </div>
    `,e.querySelectorAll(".cd-option-card").forEach(a=>{a.addEventListener("click",()=>{if(this.lockInput)return;const s=parseInt(a.dataset.idx,10);this.handleChoice(a,t.options[s])})})}handleChoice(e,t){if(this.lockInput=!0,t.correct){e.classList.add("is-correct"),d.playSuccess(),d.playHit(this.enemyName),d.speakPolish(t.text.replace(/„|”|[^\p{L}\p{N}\s,.?!]/gu,"")),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHp();const i=this.container.querySelector(".cd-opponent-sprite");i&&(i.classList.add("shake-hit"),setTimeout(()=>i.classList.remove("shake-hit"),500)),setTimeout(()=>{this.enemyHp<=0||this.currentStepIdx+1>=this.steps.length?this.finishVictory():(this.currentStepIdx++,this.renderCurrentStep())},900)}else{e.classList.add("is-wrong"),d.playWrong(),d.playEnemyHit(this.enemyName),this.damageTakenInBattle+=this.enemyDamage,this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHp();const i=this.container.querySelector(".cd-tan-sprite");i&&(i.classList.add("shake-hit"),setTimeout(()=>i.classList.remove("shake-hit"),500)),setTimeout(()=>{this.lockInput=!1,e.classList.remove("is-wrong")},800)}}updatePlayerHp(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector(".cd-player-hp-fill"),i=this.container.querySelector(".cd-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`)}updateEnemyHp(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector(".cd-enemy-hp-fill"),i=this.container.querySelector(".cd-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}finishVictory(){d.playFanfare();const e=this.container.querySelector("#cd-stage");e&&(e.innerHTML=`
        <div class="boss-victory-splash">
          <div class="bvs-trophy">⭐🎉</div>
          <h2>${this.enemyName.toUpperCase()} POKONANY!</h2>
          <p>Świetna rozmowa i pełne zrozumienie! Droga na planszy stoi otworem!</p>
        </div>
      `),setTimeout(()=>{this.onComplete&&this.onComplete({score:200,damageTaken:this.damageTakenInBattle})},1400)}destroy(){this.container.innerHTML=""}}class At{constructor(e){this.app=e}launchCityThoughtsShop(e="c1_node_3"){this.app.closeModal();const t=this.app.openArena(),i=[{id:"bulka",name:"Bułka",icon:"🥖",image:"./assets/slowka/bulka.jpg",fallback:"./public/assets/slowka/bulka.jpg",phrase:"Poproszę bułkę.",sub:"Świeże pieczywo"},{id:"woda",name:"Woda",icon:"💧",image:"./assets/slowka/woda.jpg",fallback:"./public/assets/slowka/woda.jpg",phrase:"Poproszę butelkę wody.",sub:"Woda mineralna"},{id:"czipsy",name:"Czipsy",icon:"🥔",image:"./assets/slowka/czipsy.jpg",fallback:"./public/assets/slowka/czipsy.jpg",phrase:"Poproszę czipsy.",sub:"Przekąska"},{id:"drozdzowka",name:"Drożdżówka",icon:"🥐",image:"./assets/drozdzowka.png",fallback:"./public/assets/drozdzowka.png",phrase:"Poproszę drożdżówkę.",sub:"Słodka bułka"},{id:"jablko",name:"Jabłko",icon:"🍎",image:"./assets/apple.png",fallback:"./public/assets/apple.png",phrase:"Poproszę świeże jabłko.",sub:"Owoc"}];let a=0;const s=new Set(["bulka","woda"]),o=()=>{const n=Math.max(0,Math.min(100,this.app.player.hp/this.app.player.maxHp*100));let l="";if(a===0)l=`
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 1 / 3: PRODUKTY</span>
              <h3 class="ctc-title">Co wrzucasz do koszyka? 🛒</h3>
              <p class="ctc-subtitle">Zaznacz produkty, które kupujesz (wybór wielokrotny):</p>
            </div>

            <div class="ctc-products-grid" id="ctc-products-grid">
              ${i.map(r=>`
                  <div class="btn-product-tile ${s.has(r.id)?"is-selected":""}" data-id="${r.id}" data-phrase="${r.phrase}">
                    <div class="pt-checkbox">✔</div>
                    ${r.image?`
                      <img
                        src="${r.image}"
                        alt="${r.name}"
                        class="pt-img"
                        onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='${r.fallback}';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                      />
                      <span class="pt-icon" style="display: none;">${r.icon}</span>
                    `:`
                      <span class="pt-icon">${r.icon}</span>
                    `}
                    <span class="pt-name">${r.name}</span>
                    <span class="pt-sub">${r.sub}</span>
                  </div>
                `).join("")}
            </div>

            <button type="button" class="btn-ctc-confirm" id="ctc-confirm-products-btn" ${s.size===0?"disabled":""}>
              ZATWIERDŹ KOSZYK (${s.size}) ✔
            </button>
          </div>
        `;else if(a===1)l=`
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 2 / 3: REKLAMÓWKA</span>
              <h3 class="ctc-title">Czy potrzebujesz reklamówki? 🛍️</h3>
              <p class="ctc-subtitle">Odpowiedz kasjerce krótko i na temat:</p>
            </div>

            <div class="ctc-simple-choice-grid">
              <button type="button" class="btn-simple-choice choice-yes" data-val="yes_bag" data-phrase="Tak, poproszę reklamówkę.">
                <span class="sc-icon">🛍️</span>
                <span class="sc-title">TAK</span>
                <span class="sc-desc">„Tak, poproszę reklamówkę.”</span>
              </button>

              <button type="button" class="btn-simple-choice choice-no" data-val="no_bag" data-phrase="Nie dziękuję, mam swoją torbę.">
                <span class="sc-icon">🎒</span>
                <span class="sc-title">NIE</span>
                <span class="sc-desc">„Nie dziękuję, mam torbę.”</span>
              </button>
            </div>
          </div>
        `;else if(a===2)l=`
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge">KROK 3 / 3: PŁATNOŚĆ</span>
              <h3 class="ctc-title">Jak płacisz przy kasie? 💰</h3>
              <p class="ctc-subtitle">Wybierz sposób uregulowania rachunku:</p>
            </div>

            <div class="ctc-simple-choice-grid">
              <button type="button" class="btn-simple-choice choice-yes" data-val="card" data-phrase="Będę płacić kartą.">
                <img
                  src="./assets/slowka/karta_kredytowa.jpg"
                  alt="Karta"
                  class="sc-img"
                  onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='./public/assets/slowka/karta_kredytowa.jpg';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                />
                <span class="sc-icon" style="display: none;">💳</span>
                <span class="sc-title">KARTA</span>
                <span class="sc-desc">„Zapłacę kartą zbliżeniowo.”</span>
              </button>

              <button type="button" class="btn-simple-choice choice-no" data-val="cash" data-phrase="Zapłacę gotówką.">
                <img
                  src="./assets/slowka/gotowka.jpg"
                  alt="Gotówka"
                  class="sc-img"
                  onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='./public/assets/slowka/gotowka.jpg';}else{this.style.display='none'; this.nextElementSibling.style.display='inline-block';}"
                />
                <span class="sc-icon" style="display: none;">💵</span>
                <span class="sc-title">GOTÓWKA</span>
                <span class="sc-desc">„Zapłacę gotówką.”</span>
              </button>
            </div>
          </div>
        `;else{const p=i.filter(u=>s.has(u.id)).map(u=>`${u.icon} ${u.name}`).join(", "),h=this.app.cityShoppingChoices.bag==="no_bag"?"🎒 Własna torba (Nie)":"🛍️ Reklamówka (Tak)",y=this.app.cityShoppingChoices.payment==="cash"?"💵 Gotówka":"💳 Karta zbliżeniowo";l=`
          <div class="city-thoughts-card">
            <div class="ctc-header">
              <span class="ctc-step-badge" style="background:#10b981;">PLAN GOTOWY!</span>
              <h3 class="ctc-title">Twoje myśli są uporządkowane! 🛒✨</h3>
              <p class="ctc-subtitle">Pamiętaj swoje wybory podczas rozmowy z kasjerką:</p>
            </div>

            <div class="dd-shopping-recap-card" style="width:100%; max-width:540px; margin-bottom:18px;">
              <div class="recap-row">
                <span class="recap-label">📦 Produkty:</span>
                <strong class="recap-val">${p}</strong>
              </div>
              <div class="recap-row">
                <span class="recap-label">🛍️ Reklamówka:</span>
                <strong class="recap-val">${h}</strong>
              </div>
              <div class="recap-row">
                <span class="recap-label">💰 Płatność:</span>
                <strong class="recap-val">${y}</strong>
              </div>
            </div>

            <button type="button" class="btn-ctc-confirm" id="ctc-go-to-cashier-btn" style="background: #10b981;">
              IDĘ DO KASY! 🛒
            </button>
          </div>
        `}if(t.innerHTML=`
        <div class="dd-combat-arena city-thoughts-arena">
          <!-- Prawy górny róg: Widmo (15/15 HP - bez zadawania obrażeń) -->
          <div class="dd-arena-fighter dd-arena-opponent" id="thoughts-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Widmo 👻</span>
              </div>
              <div class="dd-fighter-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: 100%; background: #a855f7;"></div>
                <span class="dd-fighter-hp-text">15/15</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Widmo"
                class="dd-fighter-sprite sprite-mysli"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta myśli -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            ${l}
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player">
            <div class="dd-sprite-container player-sprite-container">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">${this.app.player.name||"Tan"}</span>
              </div>
              <div class="dd-fighter-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${n}%;"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `,a===0){const r=t.querySelectorAll(".btn-product-tile"),p=t.querySelector("#ctc-confirm-products-btn");r.forEach(h=>{h.addEventListener("click",()=>{const y=h.dataset.id,u=h.dataset.phrase;s.has(y)?(s.delete(y),h.classList.remove("is-selected")):(s.add(y),h.classList.add("is-selected"),d.speakPolish(u)),d.playStep(),p&&(p.disabled=s.size===0,p.textContent=`ZATWIERDŹ KOSZYK (${s.size}) ✔`)})}),p&&p.addEventListener("click",()=>{if(s.size===0)return;d.playStep();const y=i.filter(u=>s.has(u.id)).map(u=>u.name.toLowerCase());this.app.cityShoppingChoices.items=y,this.app.cityShoppingChoices.itemsText=`Poproszę ${y.join(" i ")}.`,a=1,o()})}else if(a===1||a===2)t.querySelectorAll(".btn-simple-choice").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.val,y=p.dataset.phrase;d.playStep(),d.speakPolish(y),a===1?(this.app.cityShoppingChoices.bag=h,a=2):(this.app.cityShoppingChoices.payment=h,a=3),o()})});else{const r=t.querySelector("#ctc-go-to-cashier-btn");r&&r.addEventListener("click",()=>{d.playFanfare();const p=this.app.getNode(e);p&&(p.completed=!0),this.awardProgress(1,1,150),this.app.updateHUD(),m(()=>{t.classList.add("hidden"),this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Plan gotowy! Czas podejść do kasy! 🛒✨",2500)})})}};o()}launchCityCashierBox(e="c1_node_5"){const t=this.app.openArena();this.app.activeMinigame=new re(t,{player:this.app.player,shoppingChoices:this.app.cityShoppingChoices,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||200,"Świetny refleks! Kasjerka skanuje produkty! 📦🛒")}}),this.app.activeMinigame.mount()}launchCityCashierRank(e="c1_node_6"){const t=this.app.openArena();this.app.activeMinigame=new le(t,{player:this.app.player,shoppingChoices:this.app.cityShoppingChoices,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||200,"Dialog przy kasie zakończony sukcesem! 🛒✨")}}),this.app.activeMinigame.mount()}launchCity2ThoughtsFood(e="c2_node_5"){this.app.closeModal();const t=document.getElementById("modal-mount");t.classList.remove("hidden");const i=[{key:"dish",title:"KROK 1: CO MASZ OCHOTĘ ZJEŚĆ?",hint:"Wybierz swoje danie — Tan odpowiada obrazkowo:",options:[{val:"kebab",icon:"🥙",image:"./assets/kebab.jpg",fallback:"./public/assets/kebab.jpg",title:"Kebab",sub:"Pieczone mięso z warzywami i sosem"},{val:"burger",icon:"🍔",title:"Burger",sub:"Soczysty burger w puszystej bułce"},{val:"pizza",icon:"🍕",title:"Pizza",sub:"Chrupiąca pizza z sosem i serem"}]},{key:"sauce",title:"KROK 2: JAKI SOS WYBIERASZ?",hint:"Sos nadaje smak! Wybierz swój ulubiony sos:",options:[{val:"czosnkowy",icon:"🧄",image:"./assets/slowka/czosnkowy.jpg",fallback:"./public/assets/slowka/czosnkowy.jpg",title:"Sos czosnkowy",sub:"Kremowy, łagodny sos z czosnkiem"},{val:"ostry",icon:"🌶️",image:"./assets/slowka/ostry.jpg",fallback:"./public/assets/slowka/ostry.jpg",title:"Sos ostry",sub:"Pikantny sos chili dla odważnych"},{val:"mieszany",icon:"🧄🌶️",title:"Sos mieszany",sub:"Pół na pół: czosnkowy i ostry!"}]},{key:"size",title:"KROK 3: JAKI ROZMIAR ZAMAWIASZ?",hint:"Wybierz rozmiar porcji od małego do mega głodu:",isSizesGrid:!0,options:[{val:"S",label:"S",title:"Mały (S)",sub:"Lekka przekąska"},{val:"M",label:"M",title:"Średni (M)",sub:"Standardowa porcja"},{val:"L",label:"L",title:"Duży (L)",sub:"Najpopularniejszy!"},{val:"XL",label:"XL",title:"B. Duży (XL)",sub:"Dla dużego głodu"},{val:"XXL",label:"XXL",title:"Gigant (XXL)",sub:"Prawdziwy potwór!"}]},{key:"dining",title:"KROK 4: NA MIEJSCU CZY NA WYNOS?",hint:"Gdzie zjesz swój pyszny posiłek?",options:[{val:"na_miejscu",icon:"🍽️",image:"./assets/slowka/na_miejscu.jpg",fallback:"./public/assets/slowka/na_miejscu.jpg",title:"Na miejscu",sub:"Zjem przy stoliku w lokalu"},{val:"na_wynos",icon:"🥡",image:"./assets/slowka/na_wynos.jpg",fallback:"./public/assets/slowka/na_wynos.jpg",title:"Na wynos",sub:"Zapakuj do torby, zjem w domu"}]}];let a=0;const s=()=>{if(a>=i.length){const n={kebab:"🥙 Kebab",burger:"🍔 Burger",pizza:"🍕 Pizza"},l={czosnkowy:"🧄 Sos czosnkowy",ostry:"🌶️ Sos ostry",mieszany:"🧄🌶️ Sos mieszany"},r={na_miejscu:"🍽️ Na miejscu (przy stoliku)",na_wynos:"🥡 Na wynos (do torby)"};t.innerHTML=`
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>PREFERENCJE ZAPAMIĘTANE! 🥙✨</h2>
                </div>
                <div class="dd-thoughts-hint">Twoje zamówienie jest gotowe w myślach. Powiedz to Mistrzowi Kebaba!</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-shopping-recap-card">
                  <div class="recap-row">
                    <span class="recap-label">🍽️ Danie:</span>
                    <strong class="recap-val">${n[this.app.cityFoodChoices.dish]||this.app.cityFoodChoices.dish}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">📏 Rozmiar:</span>
                    <strong class="recap-val">Rozmiar ${this.app.cityFoodChoices.size}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">🧄 Sos:</span>
                    <strong class="recap-val">${l[this.app.cityFoodChoices.sauce]||this.app.cityFoodChoices.sauce}</strong>
                  </div>
                  <div class="recap-row">
                    <span class="recap-label">🥡 Sposób podania:</span>
                    <strong class="recap-val">${r[this.app.cityFoodChoices.dining]||this.app.cityFoodChoices.dining}</strong>
                  </div>
                </div>

                <button type="button" class="btn-dicey-take btn-city-continue" id="food-thoughts-confirm-btn" style="background: #f77f00; color: #fff; font-weight: 800; margin-top: 15px;">
                  IDĘ DO MISTRZA KEBABA! 👨‍🍳
                </button>
              </div>
            </div>
          </div>
        `;const p=t.querySelector("#food-thoughts-confirm-btn");p&&p.addEventListener("click",()=>{d.playFanfare();const h=this.app.getNode(e);h&&(h.completed=!0),this.awardProgress(1,1,150),this.app.updateHUD(),m(()=>{this.app.closeModal(),this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Decyzje podjęte! Czas złożyć zamówienie! 🥙✨",2500)})});return}const o=i[a];o.isSizesGrid?t.innerHTML=`
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>${o.title} (${a+1}/${i.length})</h2>
                </div>
                <div class="dd-thoughts-hint">${o.hint}</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-food-sizes-row">
                  ${o.options.map(n=>`
                    <button type="button" class="btn-food-size-card size-${n.val.toLowerCase()}" data-key="${o.key}" data-val="${n.val}" data-title="${n.title}">
                      <span class="fsc-badge">${n.label}</span>
                      <strong class="fsc-title">${n.title}</strong>
                      <span class="fsc-sub">${n.sub}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        `:t.innerHTML=`
          <div class="dicey-modal-backdrop dd-thoughts-backdrop">
            <div class="dd-thoughts-container">
              <div class="dd-thoughts-header">
                <div class="dd-thoughts-title-badge">
                  <img src="./assets/Postacie/Mysli.png" class="dd-thoughts-icon" alt="Myśli" onerror="this.src='./public/assets/Postacie/Mysli.png'" />
                  <h2>${o.title} (${a+1}/${i.length})</h2>
                </div>
                <div class="dd-thoughts-hint">${o.hint}</div>
              </div>

              <div class="dd-thoughts-body">
                <div class="dd-food-images-grid">
                  ${o.options.map(n=>`
                    <button type="button" class="btn-food-img-card" data-key="${o.key}" data-val="${n.val}" data-title="${n.title}">
                      ${n.image?`
                        <div class="fic-img-wrap">
                          <img src="${n.image}" alt="${n.title}" class="fic-img" onerror="this.src='${n.fallback||n.image}'" />
                        </div>
                      `:`
                        <div class="fic-emoji-wrap">
                          <span class="fic-emoji">${n.icon}</span>
                        </div>
                      `}
                      <strong class="fic-title">${n.icon?`${n.icon} `:""}${n.title}</strong>
                      <span class="fic-sub">${n.sub}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        `,t.querySelectorAll(".btn-food-size-card, .btn-food-img-card").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.key,r=n.dataset.val,p=n.dataset.title;this.app.cityFoodChoices[l]=r,d.playStep(),d.speakPolish(p),n.classList.add("is-picked"),t.querySelectorAll(".btn-food-size-card, .btn-food-img-card").forEach(h=>h.disabled=!0),setTimeout(()=>{a++,s()},700)})})};s()}launchCity2KebabMaster(e="c2_node_6"){const t=this.app.openArena();this.app.activeMinigame=new Bt(t,{player:this.app.player,foodChoices:this.app.cityFoodChoices,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||300,"Mistrz Kebaba przygotował pyszny posiłek! 🥙✨")}}),this.app.activeMinigame.mount()}launchCity3Biletomat(e="c3_node_4"){this.app.closeModal();const t=document.getElementById("modal-mount");t.classList.remove("hidden");let i="language",a="ulgowy";const s=[{id:"u20",type:"ulgowy",duration:"20",price:1,label:"Ulgowy 20 min",icon:"🎟️",sub:"Uczniowie (1 moneta)"},{id:"u75",type:"ulgowy",duration:"75",price:2,label:"Ulgowy 75 min",icon:"🎟️",sub:"Uczniowie (2 monety)"},{id:"u90",type:"ulgowy",duration:"90",price:3,label:"Ulgowy 90 min",icon:"🎟️",sub:"Uczniowie (3 monety)"},{id:"n20",type:"normalny",duration:"20",price:2,label:"Normalny 20 min",icon:"🎫",sub:"Dorośli (2 monety)"},{id:"n75",type:"normalny",duration:"75",price:4,label:"Normalny 75 min",icon:"🎫",sub:"Dorośli (4 monety)"},{id:"n90",type:"normalny",duration:"90",price:7,label:"Normalny 90 min",icon:"🎫",sub:"Dorośli (7 monet)"}],o=(n=null)=>{if(i==="language")t.innerHTML=`
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>WYBÓR JĘZYKA / SELECT LANGUAGE / ОБЕРІТЬ МОВУ</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${n?`<div class="biletomat-error-alert">${n}</div>`:""}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Wybierz język obsługi biletomatu:</p>
                <div class="biletomat-lang-grid">
                  <button type="button" class="btn-biletomat-lang" data-lang="pl">
                    <span class="bl-flag">🇵🇱</span>
                    <strong class="bl-text">POLSKI</strong>
                    <span class="bl-sub">Domyślny</span>
                  </button>
                  <button type="button" class="btn-biletomat-lang" data-lang="en">
                    <span class="bl-flag">🇬🇧</span>
                    <strong class="bl-text">ENGLISH</strong>
                    <span class="bl-sub">International</span>
                  </button>
                  <button type="button" class="btn-biletomat-lang" data-lang="uk">
                    <span class="bl-flag">🇺🇦</span>
                    <strong class="bl-text">УКРАЇНСЬКА</strong>
                    <span class="bl-sub">Для гостей</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `,t.querySelectorAll(".btn-biletomat-lang").forEach(l=>{l.addEventListener("click",()=>{d.playStep(),l.dataset.lang,i="type",o()})});else if(i==="type"){t.innerHTML=`
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>KROK 1/2: WYBÓR RODZAJU BILETU (ULGOWY CZY NORMALNY)</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${n?`<div class="biletomat-error-alert">${n}</div>`:""}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Kto będzie podróżował? Wybierz rodzaj biletu:</p>

                <div class="biletomat-type-grid">
                  <button type="button" class="btn-biletomat-type type-ulgowy" data-type="ulgowy">
                    <div class="bty-header">
                      <span class="bty-icon">🎟️</span>
                      <strong class="bty-title">BILET ULGOWY 50%</strong>
                    </div>
                    <div class="bty-sub">Dla uczniów, studentów i dzieci. Wymaga ważnej legitymacji szkolnej!</div>
                    <div class="bty-badge">Ceny: 1 – 3 monety 🪙</div>
                  </button>

                  <button type="button" class="btn-biletomat-type type-normalny" data-type="normalny">
                    <div class="bty-header">
                      <span class="bty-icon">🎫</span>
                      <strong class="bty-title">BILET NORMALNY 100%</strong>
                    </div>
                    <div class="bty-sub">Dla osób dorosłych bez uprawnień do ulgi.</div>
                    <div class="bty-badge">Ceny: 2 – 7 monet 🪙</div>
                  </button>
                </div>

                <div class="biletomat-nav-row">
                  <button type="button" class="btn-biletomat-back" id="biletomat-back-to-lang">
                    ⬅ Zmień język
                  </button>
                  <span class="biletomat-step-pill">Krok 1 z 2</span>
                </div>
              </div>
            </div>
          </div>
        `,t.querySelectorAll(".btn-biletomat-type").forEach(r=>{r.addEventListener("click",()=>{d.playStep(),a=r.dataset.type,i="duration",o()})});const l=t.querySelector("#biletomat-back-to-lang");l&&l.addEventListener("click",()=>{d.playStep(),i="language",o()})}else if(i==="duration"){const l=s.filter(h=>h.type===a),r=a==="ulgowy"?"BILET ULGOWY 50%":"BILET NORMALNY 100%";t.innerHTML=`
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container">
              <div class="dd-biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT MIEJSKI ZTM</h3>
                  <span>KROK 2/2: WYBÓR CZASU WAŻNOŚCI (${r})</span>
                </div>
                <div class="biletomat-coins-pill">
                  🪙 TWOJE MONETY: <strong>${this.app.player.coins}</strong>
                </div>
              </div>

              ${n?`<div class="biletomat-error-alert">${n}</div>`:""}

              <div class="biletomat-screen-body">
                <p class="biletomat-instruction">Dotknij ekranu i wybierz czas przejazdu (${r}):</p>

                <div class="biletomat-tickets-grid">
                  ${l.map(h=>`
                    <button type="button" class="btn-biletomat-ticket ${h.type}" data-id="${h.id}">
                      <div class="btt-header">
                        <span class="btt-icon">${h.icon}</span>
                        <strong class="btt-label">${h.label}</strong>
                      </div>
                      <div class="btt-price">🪙 ${h.price} ${h.price===1?"moneta":h.price<5?"monety":"monet"}</div>
                      <div class="btt-sub">${h.sub}</div>
                    </button>
                  `).join("")}
                </div>

                <div class="biletomat-nav-row">
                  <button type="button" class="btn-biletomat-back" id="biletomat-back-to-type">
                    ⬅ Zmień rodzaj ulgi
                  </button>
                  <span class="biletomat-step-pill">Krok 2 z 2</span>
                </div>
              </div>
            </div>
          </div>
        `,t.querySelectorAll(".btn-biletomat-ticket").forEach(h=>{h.addEventListener("click",()=>{const y=h.dataset.id,u=s.find(g=>g.id===y);if(u){if(this.app.player.coins<u.price){d.playWrong(),this.app.player.hp=Math.max(1,this.app.player.hp-1),this.app.updateHUD();const g=`⚠️ BŁĄD PŁATNOŚCI! Bilet kosztuje ${u.price} monet, a posiadasz tylko ${this.app.player.coins} monet! Biletomat piknął czerwonym światłem (-1 HP)! Wybierz tańszy bilet lub bilet 20-minutowy.`;o(g);return}this.app.player.coins-=u.price,this.app.updateHUD(),this.cityTicketChosen={type:u.type,duration:u.duration,price:u.price,label:u.label},d.playSuccess(),i="success",o()}})});const p=t.querySelector("#biletomat-back-to-type");p&&p.addEventListener("click",()=>{d.playStep(),i="type",o()})}else if(i==="success"){const l=this.cityTicketChosen;t.innerHTML=`
          <div class="dicey-modal-backdrop dd-biletomat-backdrop">
            <div class="dd-biletomat-container biletomat-printed-wrap">
              <div class="biletomat-top-bar">
                <img src="./assets/Postacie/Biletomat.png" alt="Biletomat" class="biletomat-logo-mini" onerror="this.src='./public/assets/Postacie/Biletomat.png'" />
                <div class="biletomat-title-box">
                  <h3>BILETOMAT: TRANSAKCJA UDANA! 🎟️</h3>
                  <span>ODBIERZ WYDRUKOWANY BILET</span>
                </div>
              </div>

              <div class="biletomat-printed-ticket">
                <div class="pt-stripe">KOMUNIKACJA MIEJSKA • ZTM WARSZAWA</div>
                <div class="pt-body">
                  <div class="pt-type-pill ${l.type}">${l.type==="ulgowy"?"BILET ULGOWY 50%":"BILET NORMALNY"}</div>
                  <h4 class="pt-duration">${l.duration} MINUT</h4>
                  <div class="pt-details">
                    <span>Cena: ${l.price} monet(y)</span>
                    <span>Ważny z legitymacją szkolną</span>
                  </div>
                  <div class="pt-barcode">|||| | ||||| || |||||| |||</div>
                </div>
              </div>

              <div class="biletomat-note">
                ${l.type==="ulgowy"?"⚠️ <strong>Pamiętaj!</strong> Podczas kontroli biletów musisz okazać <strong>legitymację szkolną</strong>!":"Bilet normalny nie wymaga okazywania dokumentu zniżkowego."}
              </div>

              <button type="button" class="btn-dicey-take btn-city-continue" id="biletomat-take-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-top: 15px;">
                ODBIERZ BILET I WSIADAJ! 🎟️
              </button>
            </div>
          </div>
        `;const r=t.querySelector("#biletomat-take-btn");r&&r.addEventListener("click",()=>{d.playFanfare();const p=this.app.getNode(e);p&&(p.completed=!0),this.awardProgress(1,1,150),this.app.updateHUD(),m(()=>{this.app.closeModal(),this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Bilet kupiony! Wsiadam do pojazdu! 🎟️✨",2500)})})}};o()}launchCity3Inspector(e="c3_node_6"){var o;this.app.closeModal();const t=document.getElementById("modal-mount");t.classList.remove("hidden"),d.playInspector();const i=((o=this.cityTicketChosen)==null?void 0:o.type)==="ulgowy";d.speakPolish(i?"Legitymację poproszę!":"Dzień dobry, kontrola biletów!");let a=!1;const s=(n=null)=>{if(t.innerHTML=`
        <div class="dicey-modal-backdrop dd-inspector-backdrop">
          <div class="dd-inspector-container">
            <div class="dd-inspector-header">
              <span class="inspector-badge-icon">🪪</span>
              <h2>KONTROLA BILETÓW W POJEŹDZIE!</h2>
            </div>

            <div class="dd-inspector-body">
              <div class="dd-inspector-sprite-wrap">
                <img
                  src="./assets/Postacie/Inspektor_Biletu.png"
                  alt="Inspektor Biletu"
                  class="dd-inspector-sprite-img"
                  onerror="this.src='./public/assets/Postacie/Inspektor_Biletu.png'"
                />
              </div>

              <div class="dd-inspector-speech-bubble" id="inspector-speech-bubble">
                <span class="isb-avatar">👮</span>
                <p class="isb-text">
                  ${i?"„Dzień dobry, kontrola biletów! Widzę bilet ulgowy. <strong>Legitymację poproszę!</strong>”":"„Dzień dobry, kontrola biletów! Bilet do kontroli!”"}
                </p>
              </div>

              ${n?`<div class="inspector-feedback-msg ${n.type}">${n.text}</div>`:""}

              ${i?`
                <div class="dd-inspector-type-box">
                  <label for="inspector-text-input" class="itb-label">Wpisz odpowiedź dla kontrolera (Type the answer):</label>
                  <div class="itb-input-row">
                    <input type="text" id="inspector-text-input" class="inspector-input-field" placeholder="Wpisz np. Legitymacja..." autocomplete="off" autofocus />
                    <button type="button" class="btn-dicey-take btn-inspector-submit" id="inspector-submit-btn">
                      POKAŻ 🪪
                    </button>
                  </div>

                  <!-- Klocki słów ułatwiające wpisanie na telefonie / tablecie -->
                  <div class="itb-word-chips">
                    <span class="itb-chips-hint">Podpowiedź (kliknij słowo):</span>
                    <button type="button" class="btn-chip-word" data-word="Proszę">Proszę</button>
                    <button type="button" class="btn-chip-word" data-word="oto">oto</button>
                    <button type="button" class="btn-chip-word" data-word="moja">moja</button>
                    <button type="button" class="btn-chip-word" data-word="legitymacja">legitymacja</button>
                    <button type="button" class="btn-chip-word" data-word="szkolna">szkolna</button>
                  </div>
                </div>
              `:`
                <div class="dd-inspector-normal-box">
                  <p>Twój bilet normalny jest ważny i nie wymaga dokumentu zniżkowego.</p>
                  <button type="button" class="btn-dicey-take btn-city-continue" id="inspector-normal-ok-btn" style="background: #10b981; color: #fff; font-weight: 800;">
                    POKAŻ BILET NORMALNY 🎫
                  </button>
                </div>
              `}
            </div>
          </div>
        </div>
      `,i){const l=t.querySelector("#inspector-text-input"),r=t.querySelector("#inspector-submit-btn"),p=()=>{if(a)return;if((l?l.value.trim().toLowerCase():"").includes("legitymacj")){a=!0,d.playFanfare(),d.speakPolish("Dziękuję, legitymacja szkolna ważna!");const y=t.querySelector(".isb-text");y&&(y.innerHTML="„Dziękuję, wszystko się zgadza! Legitymacja szkolna jest ważna. Życzę miłej podróży!” 🪪✨");const u=t.querySelector(".dd-inspector-type-box");if(u){u.innerHTML=`
                <div class="inspector-success-card">
                  <h4>KONTROLA ZALICZONA POMYŚLNIE! ✔</h4>
                  <p>Wzorowo okazałeś legitymację szkolną i obroniłeś swój bilet ulgowy!</p>
                  <button type="button" class="btn-dicey-take btn-city-continue" id="inspector-done-btn" style="background: #10b981; color: #fff; font-weight: 800; margin-top: 10px;">
                    RUSZAJ W DALSZĄ DROGĘ ➡
                  </button>
                </div>
              `;const g=t.querySelector("#inspector-done-btn");g&&g.addEventListener("click",()=>{const k=this.app.getNode(e);k&&(k.completed=!0),this.awardProgress(1,1,200),this.app.updateHUD(),m(()=>{this.app.closeModal(),this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Kontrola zaliczona! Pora na Finał! 🪪✨",2500)})})}}else d.playWrong(),s({type:"error",text:"❌ Kontroler pyta o legitymację! Wpisz w odpowiedzi słowo „legitymacja”!"})};r&&r.addEventListener("click",p),l&&l.addEventListener("keydown",h=>{h.key==="Enter"&&p()}),t.querySelectorAll(".btn-chip-word").forEach(h=>{h.addEventListener("click",()=>{if(l){const y=l.value.trim();l.value=y?`${y} ${h.dataset.word}`:h.dataset.word,l.focus()}})})}else{const l=t.querySelector("#inspector-normal-ok-btn");l&&l.addEventListener("click",()=>{d.playSuccess();const r=this.app.getNode(e);r&&(r.completed=!0),this.awardProgress(1,1,200),this.app.updateHUD(),m(()=>{this.app.closeModal(),this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Bilet sprawdzony! Droga wolna! 🎫✨",2500)})})}};s()}}class It{constructor(e,t={}){this.container=e,this.player=t.player||{name:"Tan",hp:20,maxHp:20,bonusDamage:0},this.onPlayerDamaged=t.onPlayerDamaged,this.onComplete=t.onComplete,this.onClose=t.onClose,this.enemyName=t.enemyName||"kotek",this.enemyDamage=t.enemyDamage!==void 0?t.enemyDamage:1,this.pairCount=t.pairCount||4,this.tanDamage=t.tanDamage||_(this.player),this.enemyMaxHp=t.enemyMaxHp||this.pairCount*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.tiles=[],this.flippedTiles=[],this.matchedPairIds=new Set,this.moves=0,this.score=0,this.lockBoard=!1}mount(){this.setupDeck(this.pairCount),this.render()}setupDeck(e){this.pairCount=e,this.enemyMaxHp=this.pairCount*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.flippedTiles=[],this.matchedPairIds.clear(),this.moves=0,this.score=0,this.lockBoard=!1;const t=D.slice(0,e),i=[];t.forEach(a=>{i.push({uid:`${a.id}_word`,pairId:a.id,kind:"word",item:a,title:a.word,color:a.color}),i.push({uid:`${a.id}_def`,pairId:a.id,kind:"def",item:a,title:a.vnWord||a.vnMeaning,color:a.color})});for(let a=i.length-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[i[a],i[s]]=[i[s],i[a]]}this.tiles=i}render(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena matching-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie myszką, które przesuwa napis "Dopasuj pary" ze środka na górę -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>

        <!-- Animowany napis: zaczyna duży na środku ekranu, a po kliknięciu zmniejsza się do góry w centrum -->
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Dopasuj pary</h2>

        <!-- Prawy górny róg w stylu Dicey Dungeons: Kotek Pomocnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kotek Pomocnik</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Kotek_Pomoc.png"
              alt="Kotek Pomocnik"
              class="dd-fighter-sprite sprite-kotek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Kotek_Pomoc.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Karty do dopasowania (wyłącznie język polski) -->
        <div class="matching-stage-wrapper">
          <div class="matching-grid grid-8" id="mp-grid">
            ${this.tiles.map((s,o)=>`
              <div class="mp-tile" data-uid="${s.uid}" data-idx="${o}">
                <div class="mp-tile-inner">
                  <!-- Tył kafelka -->
                  <div class="mp-tile-face mp-tile-back"></div>
                  <!-- Przód kafelka (tylko język polski) -->
                  <div class="mp-tile-face mp-tile-front ${s.kind==="word"?"face-word":"face-def"}" style="--tile-color: ${s.color}">
                    <div class="mp-front-main">${s.title}</div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Lewy dolny róg w stylu Dicey Dungeons: Tan + pasek HP -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650)}),this.container.querySelectorAll(".mp-tile").forEach(s=>{s.addEventListener("click",()=>{const o=Number(s.dataset.idx);this.handleTileClick(o,s)})})}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap");if(this.container.classList.remove("dd-screen-shake"),this.container.offsetWidth,this.container.classList.add("dd-screen-shake"),clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>{this.container.classList.remove("dd-screen-shake")},360),!i)return;const a=document.createElement("div");a.className="dd-white-slash-fx",a.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <!-- Zakrzywiony półksiężyc cięcia (curved slash silhouette) -->
        <path
          class="dd-slash-arc"
          d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z"
        />
        <!-- Druga cieńsza smuga podążająca po łuku -->
        <path
          class="dd-slash-trail"
          d="M 164 42 C 132 54, 72 102, 42 162 C 74 118, 134 74, 164 42 Z"
        />
      </svg>
      ${t?`<span class="dd-slash-dmg">${t}</span>`:""}
    `,i.appendChild(a),setTimeout(()=>a.remove(),550)}updateOpponentBar(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector("#mp-enemy-hp-fill"),i=this.container.querySelector("#mp-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerBar(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector("#mp-player-hp-fill"),i=this.container.querySelector("#mp-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`)}handleTileClick(e,t){if(this.lockBoard)return;const i=this.tiles[e];i&&(this.matchedPairIds.has(i.pairId)||this.flippedTiles.some(a=>a.idx===e)||(d.playStep(),t.classList.add("is-flipped"),this.flippedTiles.push({idx:e,tile:i,el:t}),i.kind==="word"&&d.speakPolish(i.item.cleanWord),this.flippedTiles.length===2&&(this.moves+=1,this.checkForMatch())))}checkForMatch(){const[e,t]=this.flippedTiles;if(e.tile.pairId===t.tile.pairId)this.matchedPairIds.add(e.tile.pairId),this.score+=120,this.flippedTiles=[],e.el.classList.add("is-matched"),t.el.classList.add("is-matched"),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),d.playAttackHit(this.enemyName),d.playSuccess(),e.tile.item&&e.tile.item.cleanWord&&setTimeout(()=>{d.speakPolish(e.tile.item.cleanWord)},320),this.updateOpponentBar(),this.triggerFighterHit("opponent",`-${this.tanDamage}`),this.matchedPairIds.size===this.pairCount&&setTimeout(()=>{const a=this.container.querySelector(".dd-combat-arena");a&&a.classList.add("arena-victory-exit"),this.onComplete&&this.onComplete({score:this.score})},650);else{this.lockBoard=!0,e.el.classList.add("is-mismatch"),t.el.classList.add("is-mismatch"),d.playWrong();const a=this.enemyDamage||0;if(a>0?(d.playEnemyHit(this.enemyName),this.player.hp=Math.max(0,this.player.hp-a),this.onPlayerDamaged&&this.onPlayerDamaged(a),this.updatePlayerBar(),this.triggerFighterHit("player",`-${a}`)):this.triggerFighterHit("player","✖"),this.player.hp<=0){setTimeout(()=>{const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-defeat-exit"),this.onClose&&setTimeout(()=>this.onClose(),600)},650);return}setTimeout(()=>{e.el.classList.remove("is-flipped","is-mismatch"),t.el.classList.remove("is-flipped","is-mismatch"),this.flippedTiles=[],this.lockBoard=!1},1e3)}}destroy(){this.container.innerHTML=""}}class Nt{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.words=D.slice(0,4),this.currentWordIndex=0,this.tanDamage=_(this.player),this.enemyDamage=1,this.enemyMaxHp=this.words.length*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.currentSlots=[],this.targetLetters=[],this.lockInput=!1,this.score=0}mount(){this.renderArenaShell(),this.loadWord(0)}normalizeWordLetters(e){return e.replace(/[!?.,]/g,"").trim().toUpperCase().split("")}scrambleLetters(e){const t=[],i=[];e.forEach((n,l)=>{n!==" "&&(t.push(l),i.push(n))});let a=[...i],s=0;for(;s<12;){for(let l=a.length-1;l>0;l--){const r=Math.floor(Math.random()*(l+1));[a[l],a[r]]=[a[r],a[l]]}if(!a.every((l,r)=>l===i[r]))break;s+=1}a.every((n,l)=>n===i[l])&&a.length>1&&([a[0],a[a.length-1]]=[a[a.length-1],a[0]]);const o=e.map((n,l)=>({id:`char_${l}_${Math.random().toString(36).slice(2,6)}`,char:n,isSpace:n===" "}));return t.forEach((n,l)=>{o[n].char=a[l]}),o}renderArenaShell(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena anagram-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Anagram</h2>

        <!-- Prawy górny róg: Kot Bolo -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kot Bolo</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Kotek_Pomoc.png"
              alt="Kot Bolo"
              class="dd-fighter-sprite sprite-kotek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Kotek_Pomoc.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Plansza Anagramu -->
        <div class="matching-stage-wrapper anagram-stage-wrapper" id="anagram-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650)})}loadWord(e){this.currentWordIndex=e,this.lockInput=!1;const t=this.words[e];this.targetLetters=this.normalizeWordLetters(t.cleanWord),this.currentSlots=this.scrambleLetters(this.targetLetters),this.renderAnagramBoard()}renderAnagramBoard(){const e=this.container.querySelector("#anagram-stage");if(!e)return;const t=this.words[this.currentWordIndex];e.innerHTML=`
      <div class="ww-anagram-card">
        <div class="ww-anagram-header">
          <span class="ww-anagram-counter">Słowo ${this.currentWordIndex+1} / ${this.words.length}</span>
          <button class="ww-anagram-audio-btn" id="anagram-hint-audio" title="Posłuchaj podpowiedzi">🔊 Posłuchaj</button>
        </div>

        <div class="ww-anagram-clue">
          <div class="ww-clue-pl">${t.plMeaning}</div>
        </div>

        <div class="ww-anagram-letters-row" id="anagram-letters-row">
          ${this.currentSlots.map((s,o)=>s.isSpace?'<div class="ww-anagram-space" aria-hidden="true"></div>':`
              <div
                class="ww-letter-tile"
                draggable="false"
                data-idx="${o}"
              >
                <span>${s.char}</span>
              </div>
            `).join("")}
        </div>

        <div class="ww-anagram-subhint">
          Przeciągnij litery, aby ułożyć słowo
        </div>

        <div class="ww-anagram-action-row" style="margin-top: 14px; text-align: center;">
          <button type="button" class="btn-anagram-submit" id="anagram-submit-btn">
            Zatwierdź odpowiedź ➔
          </button>
        </div>
      </div>
    `;const i=e.querySelector("#anagram-submit-btn");i&&i.addEventListener("click",()=>{this.submitAnswer()});const a=e.querySelector("#anagram-hint-audio");a&&a.addEventListener("click",()=>{d.speakPolish(t.cleanWord)}),this.setupPointerDragAndDrop(e)}setupPointerDragAndDrop(e){const t=Array.from(e.querySelectorAll(".ww-letter-tile"));t.length<=1||t.forEach((i,a)=>{i.addEventListener("pointerdown",s=>{if(this.lockInput||s.button!==void 0&&s.button!==0)return;const o=s.clientX,n=s.clientY,l=s.pointerId;let r=!1,p=a;const h=t.map(v=>v.getBoundingClientRect()),y=h.map(v=>v.left+v.width/2),u=v=>{const z=v.clientX-o,M=v.clientY-n;if(!r&&Math.hypot(z,M)>5){r=!0,i.classList.add("is-dragging");try{i.setPointerCapture(l)}catch{}}if(r){i.style.transform=`translate3d(${z}px, ${M}px, 0) scale(1.08)`;let x=a,T=1/0;for(let b=0;b<y.length;b++){const w=Math.abs(v.clientX-y[b]);w<T&&(T=w,x=b)}x!==p&&(p=x,t.forEach((b,w)=>{if(w===a)return;let j=w;a<p?w>a&&w<=p&&(j=w-1):a>p&&w>=p&&w<a&&(j=w+1);const Z=h[j].left-h[w].left;b.style.transition="transform 0.18s cubic-bezier(0.2, 0, 0, 1)",b.style.transform=Z!==0?`translate3d(${Z}px, 0, 0)`:""}))}},g=(v=!1)=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",f);try{i.releasePointerCapture(l)}catch{}i.classList.remove("is-dragging"),v||(t.forEach(z=>{z.style.transition="transform 0.16s ease",z.style.transform=""}),setTimeout(()=>{t.forEach(z=>{z.style.transition=""})},180))},k=()=>{if(!r){g(!1);return}p!==a&&p>=0&&p<t.length?(g(!0),this.reorderLetters(a,p)):g(!1)},f=()=>{g(!1)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",k),window.addEventListener("pointercancel",f)})})}reorderLetters(e,t){if(this.lockInput||e===t)return;const i=[];if(this.currentSlots.forEach((o,n)=>{o.isSpace||i.push(n)}),e<0||e>=i.length||t<0||t>=i.length)return;const a=i.map(o=>this.currentSlots[o].char),[s]=a.splice(e,1);a.splice(t,0,s),i.forEach((o,n)=>{this.currentSlots[o].char=a[n]}),d.playStep(),this.renderAnagramBoard()}submitAnswer(){if(this.lockInput)return;const e=this.currentSlots.every((s,o)=>s.char===this.targetLetters[o]),t=this.container.querySelector("#anagram-stage"),i=t==null?void 0:t.querySelector("#anagram-submit-btn"),a=t==null?void 0:t.querySelector("#anagram-letters-row");if(e){this.lockInput=!0;const s=this.words[this.currentWordIndex];this.score+=120,i&&(i.classList.remove("btn-wrong"),i.classList.add("btn-correct"),i.innerHTML="Świetnie! Poprawnie ✔"),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateOpponentBar(),d.playAttackHit("kotek"),d.playSuccess(),setTimeout(()=>d.speakPolish(s.cleanWord),260),this.triggerFighterHit("opponent",`-${this.tanDamage}`),a&&a.classList.add("anagram-word-solved"),setTimeout(()=>{if(this.currentWordIndex+1<this.words.length&&this.enemyHp>0)this.loadWord(this.currentWordIndex+1);else{const o=this.container.querySelector(".dd-combat-arena");o&&o.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}},700)}else{d.playWrong(),this.enemyDamage>0?(d.playEnemyHit("kotek"),this.player.hp=Math.max(1,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`)):this.triggerFighterHit("player","✖");const s=this.container.querySelector("#mp-player-sprite-wrap");s&&(s.classList.remove("shake-hit","hit-flash"),s.offsetWidth,s.classList.add("shake-hit","hit-flash"),setTimeout(()=>s.classList.remove("shake-hit","hit-flash"),600)),i&&(i.classList.remove("btn-correct"),i.classList.add("btn-wrong"),i.innerHTML="Błędna kolejność! ✖",setTimeout(()=>{i.classList.remove("btn-wrong"),i.innerHTML="Zatwierdź odpowiedź ➔"},1100)),a&&(a.classList.add("is-wrong-shake"),setTimeout(()=>a.classList.remove("is-wrong-shake"),500))}}updatePlayerHud(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector("#mp-player-hp-fill"),i=this.container.querySelector("#mp-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`)}updateOpponentBar(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector("#mp-enemy-hp-fill"),i=this.container.querySelector("#mp-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap");if(this.container.classList.remove("dd-screen-shake"),this.container.offsetWidth,this.container.classList.add("dd-screen-shake"),clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>{this.container.classList.remove("dd-screen-shake")},300),!i)return;const a=document.createElement("div");a.className="dd-white-slash-fx",a.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <path
          class="dd-slash-arc"
          d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 164 42 C 132 54, 72 102, 42 162 C 74 118, 134 74, 164 42 Z"
        />
      </svg>
      ${t?`<span class="dd-slash-dmg">${t}</span>`:""}
    `,i.appendChild(a),setTimeout(()=>a.remove(),550)}destroy(){this.container.innerHTML=""}}class $t{constructor(e,{encounterKey:t="encounter_1",player:i,onPlayerDamaged:a,onComplete:s,onClose:o}){this.container=e,this.encounterKey=t,this.encounter=V[t]||V.encounter_1,this.player=i||{name:"Tan",hp:20,maxHp:20,bonusDamage:0},this.onPlayerDamaged=a,this.onComplete=s,this.onClose=o,this.isFixedDialogue=t==="encounter_1"||t==="encounter_2"||t==="encounter_board6_olek",this.enemyMaxHp=this.encounter.enemyMaxHp,this.enemyHp=this.encounter.enemyMaxHp,this.enemyDamage=this.encounter.enemyDamage,this.tanDamage=_(this.player),this.questions=this.encounter.questions,this.currentQuestionIndex=0,this.lockInput=!1,this.score=0,this.introDismissed=!1}mount(){this.renderArenaShell(),this.loadQuestion(0,!1)}renderArenaShell(){var s;const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena quiz-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Quiz</h2>

        <!-- Prawy górny róg: Gejmer Olek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.encounter.opponentName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container ${this.encounter.spriteClass==="sprite-nauczycielka"?"nauczycielka-sprite-container":"olek-sprite-container"}" id="mp-opponent-sprite-wrap">
            <img
              src="${this.encounter.opponentAvatar||"./assets/Postacie/Gejmer.png"}"
              alt="${this.encounter.opponentName||"Przeciwnik"}"
              class="dd-fighter-sprite ${this.encounter.spriteClass||"sprite-olek"}"
              id="mp-opponent-sprite"
              onerror="this.src='./public${((s=this.encounter.opponentAvatar)==null?void 0:s.slice(1))||"/assets/Postacie/Gejmer.png"}'"
            />
          </div>
        </div>

        <!-- Środek areny: Karty Quizu Wordwall -->
        <div class="matching-stage-wrapper quiz-stage-wrapper" id="quiz-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{this.introDismissed=!0,d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650);const o=this.questions[this.currentQuestionIndex];o&&o.olekSpeakText&&d.speakPolish(o.olekSpeakText)})}loadQuestion(e,t=!0){this.currentQuestionIndex=e,this.lockInput=!1;const i=this.questions[e],a=this.container.querySelector("#quiz-stage");if(!a||!i)return;i.playBellOnStart?(d.playSchoolBell(),setTimeout(()=>{i.olekSpeakText&&d.speakPolish(i.olekSpeakText)},950)):t&&this.introDismissed&&i.olekSpeakText&&d.speakPolish(i.olekSpeakText);const s=["A","B","C","D"];a.innerHTML=`
      <div class="ww-quiz-card">
        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">🎮 Olek:</span>
            <strong class="ww-bubble-quote">„${i.olekSpeech}”</strong>
            <button class="ww-quiz-speak-btn" id="quiz-olek-speak" title="Posłuchaj Olka">🔊</button>
          </div>
          ${this.questions.length>1?`<span class="ww-quiz-step-pill">Pytanie ${e+1} / ${this.questions.length}</span>`:""}
        </div>

        <div class="ww-quiz-prompt-box">
          <p class="ww-quiz-prompt-pl">${i.promptPl}</p>
        </div>

        <div class="ww-quiz-options-grid">
          ${i.options.map((n,l)=>`
            <button class="ww-quiz-option-btn" data-idx="${l}">
              <span class="ww-opt-letter">${s[l]||""}</span>
              <span class="ww-opt-text">${n.text}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;const o=a.querySelector("#quiz-olek-speak");o&&o.addEventListener("click",()=>{i.playBellOnStart&&d.playSchoolBell(),i.olekSpeakText&&d.speakPolish(i.olekSpeakText)}),a.querySelectorAll(".ww-quiz-option-btn").forEach(n=>{n.addEventListener("click",()=>{const l=Number(n.dataset.idx);this.handleOptionClick(l,n)})})}getRandomDifferentIndex(e){if(this.questions.length<=1)return 0;let t=e;for(;t===e;)t=Math.floor(Math.random()*this.questions.length);return t}handleOptionClick(e,t){if(this.lockInput)return;const i=this.questions[this.currentQuestionIndex],a=i==null?void 0:i.options[e];if(a)if(a.correct)this.lockInput=!0,t.classList.add("is-correct"),this.score+=150,a.speakText&&d.speakPolish(a.speakText),d.playSuccess(),this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateOpponentBar(),this.triggerFighterHit("opponent",`-${this.tanDamage}`),setTimeout(()=>{if(this.isFixedDialogue)if(this.currentQuestionIndex+1<this.questions.length&&this.enemyHp>0)this.loadQuestion(this.currentQuestionIndex+1,!0);else{const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-victory-exit"),this.onComplete&&this.onComplete({score:this.score})}else if(this.enemyHp<=0){const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-victory-exit"),this.onComplete&&this.onComplete({score:this.score})}else{const s=this.getRandomDifferentIndex(this.currentQuestionIndex);this.loadQuestion(s,!0)}},900);else{if(this.lockInput=!0,t.classList.add("is-wrong"),d.playMiss(),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.updatePlayerBar(),this.onPlayerDamaged&&this.onPlayerDamaged(this.player.hp),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.player.hp<=0){setTimeout(()=>{const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose({defeated:!0})},600)},650);return}setTimeout(()=>{if(this.isFixedDialogue)if(this.currentQuestionIndex+1<this.questions.length)this.loadQuestion(this.currentQuestionIndex+1,!0);else{const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-victory-exit"),this.onComplete&&this.onComplete({score:this.score})}else{const s=this.getRandomDifferentIndex(this.currentQuestionIndex);this.loadQuestion(s,!0)}},850)}}updateOpponentBar(){const e=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100)),t=this.container.querySelector("#mp-enemy-hp-fill"),i=this.container.querySelector("#mp-enemy-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerBar(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=this.container.querySelector("#mp-player-hp-fill"),i=this.container.querySelector("#mp-player-hp-text");t&&(t.style.width=`${e}%`),i&&(i.textContent=`${this.player.hp}/${this.player.maxHp}`)}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap");if(this.container.classList.remove("dd-screen-shake"),this.container.offsetWidth,this.container.classList.add("dd-screen-shake"),clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>{this.container.classList.remove("dd-screen-shake")},300),!i)return;const a=document.createElement("div");a.className="dd-white-slash-fx",a.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet">
        <path
          class="dd-slash-arc"
          d="M 156 22 C 118 28, 42 84, 20 156 C 58 106, 122 58, 156 22 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 164 42 C 132 54, 72 102, 42 162 C 74 118, 134 74, 164 42 Z"
        />
      </svg>
      ${t?`<span class="dd-slash-dmg">${t}</span>`:""}
    `,i.appendChild(a),setTimeout(()=>a.remove(),550)}destroy(){this.container.innerHTML=""}}class L{constructor(e,t={}){this.container=e,this.player=t.player||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=t.onPlayerDamaged,this.onComplete=t.onComplete,this.onClose=t.onClose,this.title=t.title||"Zakręć kołem";const i=t.scenarios||gt;this.remainingSlices=[...i],this.totalCount=i.length,this.tanDamage=t.tanDamage||_(this.player),this.enemyMaxHp=t.enemyMaxHp||this.totalCount*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.enemyDamage=t.enemyDamage!==void 0?t.enemyDamage:1,this.enemyName=t.enemyName||"kotek",this.score=0,this.angle=0,this.angularVelocity=0,this.isSpinning=!1,this.selectedSlice=null,this.lastTickSliceIndex=-1,this.animFrame=null}mount(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena wheel-dd-arena">
        <h2 class="mp-animated-title" id="mp-animated-title">${this.title}</h2>

        <!-- Prawy górny róg: Kotek Pomocnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Kotek Pomocnik</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Kotek_Pomoc.png"
              alt="Kotek Pomocnik"
              class="dd-fighter-sprite sprite-kotek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Kotek_Pomoc.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Koło fortuny + karta pytania -->
        <div class="matching-stage-wrapper wheel-stage-wrapper">
          <div class="ww-wheel-combat-card">
            <div class="ww-wheel-left-col">
              <div class="wheel-wrapper">
                <canvas id="wheel-canvas" width="290" height="290"></canvas>
                <div class="wheel-pointer" title="Wskaźnik">◀</div>
                <button class="wheel-center-btn" id="sw-spin-center-btn">
                  ZAKRĘĆ!
                </button>
              </div>
              <button class="btn-primary-spin" id="sw-spin-main-btn">
                🎡 ZAKRĘĆ KOŁEM (${this.remainingSlices.length}/${this.totalCount})
              </button>
            </div>

            <div class="ww-wheel-right-col" id="sw-question-panel">
              <div class="wheel-empty-prompt">
                <div class="big-wheel-icon">🎡</div>
                <h3>Nowe zwroty o grach!</h3>
                <p>Kliknij <strong>„ZAKRĘĆ KOŁEM”</strong> po lewej stronie, aby wylosować pytanie i przetestować nowe karty!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `,this.canvas=this.container.querySelector("#wheel-canvas"),this.ctx=this.canvas.getContext("2d"),this.questionPanel=this.container.querySelector("#sw-question-panel");const i=()=>this.spin();this.container.querySelector("#sw-spin-center-btn").addEventListener("click",i),this.container.querySelector("#sw-spin-main-btn").addEventListener("click",i),this.drawWheel()}spin(){if(this.isSpinning||this.remainingSlices.length===0||this.enemyHp<=0)return;this.isSpinning=!0,this.selectedSlice=null,this.angularVelocity=.3+Math.random()*.16,this.lastTickSliceIndex=-1,d.playSpinWheel();const e=this.container.querySelector("#sw-spin-main-btn");e&&(e.disabled=!0),this.questionPanel.innerHTML=`
      <div class="wheel-empty-prompt spinning-state">
        <div class="big-wheel-icon spin-anim">🎡</div>
        <h3>Koło się kręci...</h3>
        <p>Zobaczmy, który zwrot wypadnie teraz!</p>
      </div>
    `;const t=()=>{this.angle=(this.angle+this.angularVelocity)%(Math.PI*2),this.angularVelocity*=.982;const i=this.remainingSlices.length,a=Math.PI*2/i,s=(Math.PI*2-this.angle%(Math.PI*2))%(Math.PI*2),o=Math.floor(s/a)%i;if(o!==this.lastTickSliceIndex&&(this.lastTickSliceIndex=o,d.playTick()),this.drawWheel(),this.angularVelocity>.0028)this.animFrame=requestAnimationFrame(t);else{this.isSpinning=!1,this.angularVelocity=0,d.stopSpinWheel(),this.selectedSlice=this.remainingSlices[o],d.playSuccess();const n=this.selectedSlice.speakText||this.selectedSlice.word||this.selectedSlice.sliceLabel||this.selectedSlice.label;n&&d.speakPolish(n),this.renderScenarioCard(this.selectedSlice)}};this.animFrame=requestAnimationFrame(t)}drawWheel(){if(!this.ctx||!this.canvas)return;const e=this.ctx,t=this.canvas.width,i=this.canvas.height,a=t/2,s=i/2,o=Math.min(a,s)-14;e.clearRect(0,0,t,i);const n=this.remainingSlices.length;if(n===0)return;const l=Math.PI*2/n;e.save(),e.beginPath(),e.arc(a,s,o+7,0,Math.PI*2),e.fillStyle="#ffd166",e.fill(),e.lineWidth=3,e.strokeStyle="#1d3557",e.stroke(),e.restore();const r=["#3a86ff","#ef476f","#ffd166","#06d6a0","#8338ec","#fb5607","#118ab2"];for(let p=0;p<n;p++){const h=this.remainingSlices[p],y=this.angle+p*l,u=y+l;e.save(),e.beginPath(),e.moveTo(a,s),e.arc(a,s,o,y,u),e.closePath(),e.fillStyle=h.sliceColor||h.color||r[p%r.length],e.fill(),e.lineWidth=3,e.strokeStyle="#ffffff",e.stroke(),e.translate(a,s),e.rotate(y+l/2),e.textAlign="right",e.fillStyle="#ffffff",e.font='bold 13px "Fredoka", "Segoe UI", sans-serif',e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=4;const g=h.sliceLabel||h.label||h.cleanWord||h.word||"Słowo";e.fillText(g,o-14,5),e.restore()}for(let p=0;p<Math.max(6,n*2);p++){const h=this.angle+p*Math.PI*2/Math.max(6,n*2),y=a+Math.cos(h)*(o+3.5),u=s+Math.sin(h)*(o+3.5);e.fillStyle=p%2===0?"#ffffff":"#ef476f",e.beginPath(),e.arc(y,u,3,0,Math.PI*2),e.fill()}}renderScenarioCard(e){const t=e.sliceColor||e.color||"#3a86ff",i=e.badge||"KOTEK POMOCNIK",a=e.speakText||e.word||e.sliceLabel||e.label||"",s=e.sliceLabel||e.word||a,l=[...(Array.isArray(e.options)?e.options:[]).map(p=>{if(typeof p=="string"){const h=e.correctVn&&p===e.correctVn||e.correctAnswer&&p===e.correctAnswer;return{textPl:p,textVn:"",correct:h}}return{textPl:p.textPl||p.text||p.label||p.word||String(p),textVn:p.textVn||p.vnMeaning||p.vn||p.subText||"",correct:!!p.correct}})].sort(()=>Math.random()-.5);this.questionPanel.innerHTML=`
      <div class="scenario-card" style="border-color: ${t}">
        <div class="scenario-top-row">
          <span class="scenario-badge" style="background: ${t}">${i}</span>
          <button class="btn-audio-inline" id="sw-speak-btn">
            🔊 Posłuchaj
          </button>
        </div>

        <div class="scenario-slice-heading" style="color: ${t}">
          ${s}
        </div>

        <div class="scenario-options-list">
          ${l.map((p,h)=>`
            <button class="scenario-option-btn" data-idx="${h}">
              <div class="opt-pl">${p.textPl}</div>
              ${p.textVn?`<div class="opt-vn">${p.textVn}</div>`:""}
            </button>
          `).join("")}
        </div>
      </div>
    `,this.questionPanel.querySelector("#sw-speak-btn").addEventListener("click",()=>{a&&d.speakPolish(a)});const r=this.questionPanel.querySelectorAll(".scenario-option-btn");r.forEach((p,h)=>{p.addEventListener("click",()=>{if(l[h].correct)r.forEach(u=>u.disabled=!0),p.classList.add("opt-correct"),d.playAttackHit(this.enemyName),a&&d.speakPolish(a),this.score+=120,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`),setTimeout(()=>{this.eliminateSlice(e.id)},720);else{d.playWrong(),d.playEnemyHit(this.enemyName),p.classList.add("opt-wrong"),p.disabled=!0;const u=this.enemyDamage||1;this.player.hp=Math.max(1,this.player.hp-u),this.onPlayerDamaged&&this.onPlayerDamaged(u),this.updatePlayerHud(),this.triggerFighterHit("player",`-${u}`)}})})}eliminateSlice(e){this.remainingSlices=this.remainingSlices.filter(i=>i.id!==e);const t=this.container.querySelector("#sw-spin-main-btn");if(t&&(t.disabled=!1,t.textContent=`🎡 ZAKRĘĆ KOŁEM (${this.remainingSlices.length}/${this.totalCount})`),this.remainingSlices.length===0||this.enemyHp<=0){this.finishWheel();return}this.drawWheel(),this.questionPanel.innerHTML=`
      <div class="wheel-empty-prompt">
        <div class="big-wheel-icon">✨</div>
        <h3>Świetnie! Pozostało na kole: ${this.remainingSlices.length}</h3>
        <p>Kliknij <strong>„ZAKRĘĆ KOŁEM”</strong>, aby wylosować kolejny zwrot!</p>
      </div>
    `}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path
          class="dd-slash-arc"
          d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z"
        />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#mp-enemy-hp-fill"),t=this.container.querySelector("#mp-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}finishWheel(){d.stopSpinWheel(),d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame),d.stopSpinWheel()}}class Wt{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20,bonusTimeSec:0},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.questions=tt,this.currentQuestionIndex=0,this.tanDamage=_(this.player),this.enemyMaxHp=this.questions.length*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.enemyDamage=5,this.targetChars=[],this.filledCount=0,this.poolTiles=[],this.lockInput=!1,this.introDismissed=!1,this.score=0,this.timeLeft=0,this.maxTime=0,this.timerInterval=null,this.keyHandler=null}mount(){this.renderArenaShell(),this.loadQuestion(0,!1),this.keyHandler=e=>{if(!this.introDismissed||this.lockInput)return;const t=e.key.toUpperCase();if(t.length===1&&/[A-ZĄĆĘŁŃÓŚŹŻ]/.test(t)){const i=this.poolTiles.find(a=>!a.used&&a.char===t);i&&this.handleTilePick(i.id)}},window.addEventListener("keydown",this.keyHandler)}renderArenaShell(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena spell-arena">
        <!-- Warstwa przechwytująca pierwsze kliknięcie -->
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Spell the Word</h2>

        <!-- Prawy górny róg: Gejmer Olek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Gejmer Olek</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container olek-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Gejmer.png"
              alt="Gejmer Olek"
              class="dd-fighter-sprite sprite-olek"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Gejmer.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Plansza Spell the Word -->
        <div class="matching-stage-wrapper spell-stage-wrapper" id="spell-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{this.introDismissed=!0,d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650);const s=this.questions[this.currentQuestionIndex];s&&s.olekSpeakText&&d.speakPolish(s.olekSpeakText),this.startQuestionTimer()})}loadQuestion(e,t=!0){this.stopTimer(),this.currentQuestionIndex=e,this.lockInput=!1;const i=this.questions[e];if(!i)return;this.targetChars=i.targetPhrase.toUpperCase().split(""),this.filledCount=0,this.advancePastSpaces();const s=[...this.targetChars.filter(n=>n!==" ")];for(let n=s.length-1;n>0;n--){const l=Math.floor(Math.random()*(n+1));[s[n],s[l]]=[s[l],s[n]]}this.poolTiles=s.map((n,l)=>({id:`tile_${l}`,char:n,used:!1}));const o=this.player.bonusTimeSec||0;this.maxTime=(i.baseTimeSec||10)+o,this.timeLeft=this.maxTime,this.renderSpellBoard(),t&&this.introDismissed&&(i.olekSpeakText&&d.speakPolish(i.olekSpeakText),this.startQuestionTimer())}advancePastSpaces(){for(;this.filledCount<this.targetChars.length&&this.targetChars[this.filledCount]===" ";)this.filledCount+=1}startQuestionTimer(){this.stopTimer(),this.timerInterval=setInterval(()=>{this.lockInput||(this.timeLeft=Math.max(0,this.timeLeft-1),this.updateTimerBarUI(),this.timeLeft<=0&&this.handleTimeoutDamage())},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimerBarUI(){const e=this.container.querySelector("#spell-timer-text"),t=this.container.querySelector("#spell-timer-fill");if(e&&(e.textContent=`⏱️ ${this.timeLeft}s`),t){const i=Math.max(0,Math.min(100,this.timeLeft/this.maxTime*100));t.style.width=`${i}%`}}getRandomDifferentIndex(e){if(this.questions.length<=1)return 0;let t=e;for(;t===e;)t=Math.floor(Math.random()*this.questions.length);return t}handleTimeoutDamage(){if(this.stopTimer(),this.lockInput=!0,d.playEnemyHit(),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.player.hp<=0){setTimeout(()=>{const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose()},580)},650);return}setTimeout(()=>{const e=this.getRandomDifferentIndex(this.currentQuestionIndex);this.loadQuestion(e,!0)},650)}renderSpellBoard(){const e=this.container.querySelector("#spell-stage"),t=this.questions[this.currentQuestionIndex];if(!e||!t)return;const i=this.player.bonusTimeSec||0,a=Math.max(0,Math.min(100,this.timeLeft/this.maxTime*100));e.innerHTML=`
      <div class="ww-spell-card">
        <div class="ww-quiz-speech-row">
          <div class="ww-olek-bubble">
            <span class="ww-bubble-speaker">📱 Olek:</span>
            <strong class="ww-bubble-quote">„${t.olekSpeech}”</strong>
            <button class="ww-quiz-speak-btn" id="spell-olek-speak" title="Posłuchaj Olka">🔊</button>
          </div>
          <div class="ww-spell-meta-right">
            ${i>0?`<span class="ww-energy-bonus-pill">⚡ +${i}s z energetyka</span>`:""}
            <span class="ww-quiz-step-pill">Zwrot ${this.currentQuestionIndex+1} / ${this.questions.length}</span>
          </div>
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="spell-timer-fill" style="width: ${a}%"></div>
          <span class="ww-spell-timer-text" id="spell-timer-text">⏱️ ${this.timeLeft}s</span>
        </div>

        <p class="ww-spell-context-pl">${t.contextPl}</p>

        <!-- Sloty docelowe na litery zwrotu -->
        <div class="ww-spell-slots-row" id="spell-slots-row">
          ${this.targetChars.map((o,n)=>{if(o===" ")return'<div class="ww-spell-space" aria-hidden="true"></div>';const l=n<this.filledCount,r=n===this.filledCount;return`
              <div class="ww-spell-slot ${l?"is-filled":""} ${r?"is-next":""}">
                <span>${l?o:""}</span>
              </div>
            `}).join("")}
        </div>

        <!-- Rozsypane kafelki liter do klikania po kolei -->
        <div class="ww-spell-pool-row">
          ${this.poolTiles.map(o=>`
            <button
              type="button"
              class="ww-spell-tile-btn ${o.used?"is-used":""}"
              data-tile-id="${o.id}"
              ${o.used?"disabled":""}
            >
              ${o.char}
            </button>
          `).join("")}
        </div>

        <div class="ww-anagram-subhint">
          Klikaj kolejne litery zwrotu (lub wpisuj je na klawiaturze)!
        </div>
      </div>
    `;const s=e.querySelector("#spell-olek-speak");s&&s.addEventListener("click",()=>{t.olekSpeakText&&d.speakPolish(t.olekSpeakText)}),e.querySelectorAll(".ww-spell-tile-btn").forEach(o=>{o.addEventListener("click",()=>{this.handleTilePick(o.dataset.tileId,o)})})}handleTilePick(e,t){if(this.lockInput)return;const i=this.poolTiles.find(s=>s.id===e);if(!i||i.used)return;const a=this.targetChars[this.filledCount];if(i.char===a)i.used=!0,this.filledCount+=1,this.advancePastSpaces(),d.playStep(),this.renderSpellBoard(),this.filledCount>=this.targetChars.length&&this.handlePhraseSolved();else{if(this.lockInput=!0,d.playEnemyHit(),t&&t.classList.add("is-wrong"),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),this.player.hp<=0){this.stopTimer(),setTimeout(()=>{const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose()},580)},650);return}setTimeout(()=>{t&&t.classList.remove("is-wrong"),this.lockInput=!1},420)}}handlePhraseSolved(){this.stopTimer(),this.lockInput=!0;const e=this.questions[this.currentQuestionIndex];d.playAttackHit(),e&&e.speakOnSolve&&d.speakPolish(e.speakOnSolve),this.score+=150,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`);const t=this.container.querySelector("#spell-slots-row");t&&t.classList.add("spell-phrase-solved"),setTimeout(()=>{if(this.enemyHp<=0)this.finishBattle();else{const i=this.getRandomDifferentIndex(this.currentQuestionIndex);this.loadQuestion(i,!0)}},950)}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path
          class="dd-slash-arc"
          d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z"
        />
        <path
          class="dd-slash-trail"
          d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z"
        />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#mp-enemy-hp-fill"),t=this.container.querySelector("#mp-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#mp-player-hp-fill"),t=this.container.querySelector("#mp-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}destroy(){this.stopTimer(),this.keyHandler&&(window.removeEventListener("keydown",this.keyHandler),this.keyHandler=null)}}class B{constructor(e,t={}){this.container=e,this.player=t.player||{name:"Tan",hp:20,maxHp:20},this.onPlayerDamaged=t.onPlayerDamaged,this.onComplete=t.onComplete,this.onClose=t.onClose,this.items=t.items?[...t.items]:[...it],this.tanDamage=t.tanDamage||_(this.player),this.enemyMaxHp=t.enemyMaxHp||this.items.length*this.tanDamage,this.enemyHp=t.enemyHp||this.enemyMaxHp,this.enemyDamage=t.enemyDamage!==void 0?t.enemyDamage:2,this.enemyName=t.enemyName||"Jeżyk",this.opponentAvatar=t.opponentAvatar||"./assets/Postacie/Jez.png",this.spriteClass=t.spriteClass||"sprite-jez",this.shuffledWords=[...this.items].sort(()=>Math.random()-.5),this.matchedIds=new Set,this.selectedWordId=null,this.lockInput=!1,this.introDismissed=!1,this.score=0}mount(){this.renderArenaShell(),this.renderMatchupBoard()}renderArenaShell(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena matchup-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Match up</h2>

        <!-- Prawy górny róg: Przeciwnik -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">${this.enemyName}</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="${this.opponentAvatar}"
              alt="${this.enemyName}"
              class="dd-fighter-sprite ${this.spriteClass}"
              id="mp-opponent-sprite"
              onerror="this.src='${this.opponentAvatar}'"
            />
          </div>
        </div>

        <!-- Środek areny: Match up -->
        <div class="matching-stage-wrapper matchup-stage-wrapper" id="matchup-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{this.introDismissed=!0,d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650)})}renderMatchupBoard(){const e=this.container.querySelector("#matchup-stage");e&&(e.innerHTML=`
      <div class="ww-matchup-card">
        <div class="ww-matchup-instructions">
          Przeciągnij słowo do właściwego obrazka/definicji lub kliknij słowo, a potem cel!
        </div>

        <!-- Strefy docelowe z definicjami i obrazkami -->
        <div class="ww-matchup-targets-grid" id="matchup-targets">
          ${this.items.map(t=>{const i=this.matchedIds.has(t.id);return`
              <div
                class="ww-matchup-target-slot ${i?"is-matched":""}"
                data-target-id="${t.id}"
              >
                ${t.image?`
                  <div class="ww-target-img-wrap">
                    <img src="${t.image}" alt="${t.word}" class="ww-target-img" onerror="this.style.display='none'" />
                  </div>
                `:""}
                <div class="ww-target-desc">${t.defPl}</div>
                <div class="ww-target-dropzone" style="${i?`background:${t.color}; color:#111; font-weight:800;`:""}">
                  ${i?`✔ ${t.word}`:"Upuść tutaj..."}
                </div>
              </div>
            `}).join("")}
        </div>

        <!-- Dostępne kafelki słów do przeciągania/klikania (tylko niedopasowane) -->
        <div class="ww-matchup-words-row" id="matchup-words-pool">
          ${this.shuffledWords.filter(t=>!this.matchedIds.has(t.id)).map(t=>`
                <div
                  class="ww-matchup-word-tile ${this.selectedWordId===t.id?"is-selected":""}"
                  draggable="false"
                  data-word-id="${t.id}"
                  style="--item-color: ${t.color}"
                >
                  <span>${t.word}</span>
                </div>
              `).join("")}
        </div>
      </div>
    `,this.bindEvents())}bindEvents(){const e=this.container.querySelectorAll(".ww-matchup-word-tile:not(.is-used)");this.container.querySelectorAll(".ww-matchup-target-slot:not(.is-matched)").forEach(i=>{i.addEventListener("click",()=>{this.lockInput||!this.selectedWordId||this.attemptMatch(this.selectedWordId,i.dataset.targetId)})}),e.forEach(i=>{const a=i.dataset.wordId;i.addEventListener("pointerdown",s=>{if(this.lockInput||s.button!==void 0&&s.button!==0)return;if(!this.introDismissed){this.introDismissed=!0;const u=this.container.querySelector("#mp-intro-click-layer"),g=this.container.querySelector("#mp-animated-title");u&&(u.classList.add("intro-dismissed"),setTimeout(()=>u.remove(),650)),g&&g.classList.remove("is-centered")}const o=s.clientX,n=s.clientY;let l=!1,r=null,p=null;const h=u=>{const g=u.clientX-o,k=u.clientY-n;if(!l&&Math.hypot(g,k)>5&&(l=!0,this.selectedWordId=a,r=i.cloneNode(!0),r.classList.add("ww-drag-floating-clone"),r.style.left=`${u.clientX}px`,r.style.top=`${u.clientY}px`,document.body.appendChild(r),i.classList.add("is-dragging-origin")),l&&r){r.style.left=`${u.clientX}px`,r.style.top=`${u.clientY}px`;const f=document.elementFromPoint(u.clientX,u.clientY),v=f==null?void 0:f.closest(".ww-matchup-target-slot:not(.is-matched)");p!==v&&(p&&p.classList.remove("is-drag-over"),p=v,p&&p.classList.add("is-drag-over"))}},y=u=>{if(window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),l)if(r&&(r.remove(),r=null),p){p.classList.remove("is-drag-over");const g=p.dataset.targetId;p=null,this.attemptMatch(a,g)}else i.classList.remove("is-dragging-origin"),this.selectedWordId=null,this.renderMatchupBoard();else i.classList.remove("is-dragging-origin"),this.selectedWordId===a?this.selectedWordId=null:(this.selectedWordId=a,d.playStep()),this.renderMatchupBoard()};window.addEventListener("pointermove",h),window.addEventListener("pointerup",y),window.addEventListener("pointercancel",y)})})}attemptMatch(e,t){if(this.lockInput)return;this.lockInput=!0;const i=this.items.find(o=>o.id===e),a=this.container.querySelector(`[data-target-id="${t}"]`),s=this.container.querySelector(`[data-word-id="${e}"]`);if(e===t){if(this.matchedIds.add(e),this.selectedWordId=null,a){a.classList.add("is-matched");const o=a.querySelector(".ww-target-dropzone");o&&i&&(o.style.background=i.color,o.style.color="#111",o.style.fontWeight="800",o.textContent=`✔ ${i.word}`)}s&&(s.classList.add("is-used"),s.style.transition="transform 0.15s ease, opacity 0.15s ease",s.style.transform="scale(0.5)",s.style.opacity="0",setTimeout(()=>{s&&s.parentNode&&s.remove()},150)),d.playAttackHit(this.enemyName),i&&d.speakPolish(i.word),this.score+=150,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`),setTimeout(()=>{this.lockInput=!1,this.renderMatchupBoard(),this.matchedIds.size>=this.items.length&&this.finishBattle()},550)}else d.playEnemyHit(this.enemyName),this.selectedWordId=null,s&&s.classList.remove("is-dragging-origin"),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),a&&a.classList.add("is-wrong"),setTimeout(()=>{if(this.lockInput=!1,this.renderMatchupBoard(),this.player.hp<=0){const o=this.container.querySelector(".dd-combat-arena");o&&o.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose({defeated:!0})},600)}},500)}triggerFighterHit(e="opponent",t="-2"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#mp-enemy-hp-fill"),t=this.container.querySelector("#mp-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#mp-player-hp-fill"),t=this.container.querySelector("#mp-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}destroy(){document.querySelectorAll(".ww-drag-floating-clone").forEach(e=>e.remove())}}class Ot{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20,bonusTimeSec:0,bonusDamage:0},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.questions=[...at],this.currentIndex=0,this.tanDamage=_(this.player),this.enemyMaxHp=this.questions.length*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.enemyDamage=3,this.baseTime=10,this.timeLeft=this.baseTime+(this.player.bonusTimeSec||0),this.timerInterval=null,this.introDismissed=!1,this.lockInput=!1,this.score=0}mount(){this.renderArenaShell(),this.loadQuestion(0,!1)}renderArenaShell(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena findmatch-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Find the Match</h2>

        <!-- Prawy górny róg: Szczeniaczek -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Szczeniaczek</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Szczeniak.png"
              alt="Szczeniaczek"
              class="dd-fighter-sprite sprite-szczeniak"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Szczeniak.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Karta pytania i opcje -->
        <div class="matching-stage-wrapper findmatch-stage-wrapper" id="fm-stage"></div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{this.introDismissed=!0,d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650),this.startTimer()})}loadQuestion(e,t=!0){this.stopTimer(),this.currentIndex=e,this.lockInput=!1;const i=this.questions[e],a=this.container.querySelector("#fm-stage");if(!a||!i)return;this.maxTime=this.baseTime+(this.player.bonusTimeSec||0),this.timeLeft=this.maxTime;const s=Math.max(0,Math.min(100,this.timeLeft/this.maxTime*100));a.innerHTML=`
      <div class="ww-fm-card">
        <div class="ww-quiz-speech-row">
          <span class="ww-quiz-step-pill">🐾 Walka ze Szczeniaczkiem (50 HP)</span>
          ${this.player.bonusTimeSec>0?`<span class="ww-energy-bonus-pill">⚡ +${this.player.bonusTimeSec}s z energetyka</span>`:""}
        </div>

        <div class="ww-spell-timer-bar">
          <div class="ww-spell-timer-fill" id="fm-timer-fill" style="width: ${s}%"></div>
          <span class="ww-spell-timer-text" id="fm-timer-text">⏱️ ${this.timeLeft}s</span>
        </div>

        <div class="ww-fm-prompt-box">
          <p class="ww-fm-prompt-text">${i.promptPl}</p>
        </div>

        <div class="ww-fm-options-grid">
          ${i.options.map(o=>`
            <button type="button" class="ww-fm-option-btn" data-word="${o}">
              <span>${o}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,a.querySelectorAll(".ww-fm-option-btn").forEach(o=>{o.addEventListener("click",()=>{this.handleChoice(o.dataset.word,o)})}),t&&this.introDismissed&&this.startTimer()}startTimer(){this.stopTimer(),this.timerInterval=setInterval(()=>{this.lockInput||(this.timeLeft=Math.max(0,this.timeLeft-1),this.updateTimerUI(),this.timeLeft<=0&&this.handleTimeout())},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimerUI(){const e=this.container.querySelector("#fm-timer-text"),t=this.container.querySelector("#fm-timer-fill");if(e&&(e.textContent=`⏱️ ${this.timeLeft}s`),t){const i=Math.max(0,Math.min(100,this.timeLeft/this.maxTime*100));t.style.width=`${i}%`}}getRandomDifferentIndex(e){if(this.questions.length<=1)return 0;let t=e;for(;t===e;)t=Math.floor(Math.random()*this.questions.length);return t}handleTimeout(){this.stopTimer(),this.lockInput=!0,d.playEnemyHit("szczeniak"),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),setTimeout(()=>{if(this.player.hp<=0){const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose({defeated:!0})},600)}else{const e=this.getRandomDifferentIndex(this.currentIndex);this.loadQuestion(e,!0)}},550)}handleChoice(e,t){if(this.lockInput)return;this.lockInput=!0,this.stopTimer();const i=this.questions[this.currentIndex];e===i.correctWord?(t.classList.add("is-correct"),d.playAttackHit("szczeniak"),d.speakPolish(e),this.score+=120,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`),setTimeout(()=>{if(this.enemyHp<=0)this.finishBattle();else{const s=this.getRandomDifferentIndex(this.currentIndex);this.loadQuestion(s,!0)}},700)):(t.classList.add("is-wrong"),d.playEnemyHit("szczeniak"),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),setTimeout(()=>{if(this.player.hp<=0){const s=this.container.querySelector(".dd-combat-arena");s&&s.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose({defeated:!0})},600)}else{const s=this.getRandomDifferentIndex(this.currentIndex);this.loadQuestion(s,!0)}},550))}triggerFighterHit(e="opponent",t="-1"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#mp-enemy-hp-fill"),t=this.container.querySelector("#mp-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#mp-player-hp-fill"),t=this.container.querySelector("#mp-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){this.stopTimer(),d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}destroy(){this.stopTimer()}}class qt{constructor(e,{player:t,onPlayerDamaged:i,onComplete:a,onClose:s}){this.container=e,this.player=t||{name:"Tan",hp:20,maxHp:20,bonusTimeSec:0},this.onPlayerDamaged=i,this.onComplete=a,this.onClose=s,this.wordsToFind=[...st],this.foundWords=new Set,this.tanDamage=_(this.player),this.enemyMaxHp=this.wordsToFind.length*this.tanDamage,this.enemyHp=this.enemyMaxHp,this.enemyDamage=3,this.gridSize=9,this.grid=[],this.wordPlacements=[],this.baseTime=10,this.maxTime=this.baseTime+(this.player.bonusTimeSec||0),this.timeLeft=this.maxTime,this.timerInterval=null,this.selectedCells=[],this.dragStartCell=null,this.isDragging=!1,this.lockInput=!1,this.introDismissed=!1,this.score=0}mount(){this.generateBoard(),this.renderArenaShell(),this.renderGrid()}generateBoard(){this.grid=Array.from({length:this.gridSize},()=>Array.from({length:this.gridSize},()=>"")),this.wordPlacements=[];const e=this.wordsToFind.filter(i=>!this.foundWords.has(i)),t="AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";e.forEach(i=>{let a=!1,s=0;for(;!a&&s<200;){s++;const o=Math.random()>.5,n=Math.floor(o?Math.random()*this.gridSize:Math.random()*(this.gridSize-i.length+1)),l=Math.floor(o?Math.random()*(this.gridSize-i.length+1):Math.random()*this.gridSize);let r=!0;const p=[];for(let h=0;h<i.length;h++){const y=o?n:n+h,u=o?l+h:l,g=this.grid[y][u];if(g!==""&&g!==i[h]){r=!1;break}p.push([y,u])}r&&(p.forEach(([h,y],u)=>{this.grid[h][y]=i[u]}),this.wordPlacements.push({word:i,cells:p}),a=!0)}});for(let i=0;i<this.gridSize;i++)for(let a=0;a<this.gridSize;a++)this.grid[i][a]===""&&(this.grid[i][a]=t[Math.floor(Math.random()*t.length)])}renderArenaShell(){const e=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100)),t=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));this.container.innerHTML=`
      <div class="dd-combat-arena wordsearch-arena">
        <div class="mp-intro-click-layer" id="mp-intro-click-layer"></div>
        <h2 class="mp-animated-title is-centered" id="mp-animated-title">Wordsearch</h2>

        <!-- Prawy górny róg: Zając -->
        <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Zając</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${t}%"></div>
              <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${this.enemyHp}/${this.enemyMaxHp}</span>
            </div>
          </div>
          <div class="dd-sprite-container opponent-sprite-container" id="mp-opponent-sprite-wrap">
            <img
              src="./assets/Postacie/Zajac.png"
              alt="Zając"
              class="dd-fighter-sprite sprite-zajac"
              id="mp-opponent-sprite"
              onerror="this.src='./public/assets/Postacie/Zajac.png'"
            />
          </div>
        </div>

        <!-- Środek areny: Wykreślanka -->
        <div class="matching-stage-wrapper ws-stage-wrapper">
          <div class="ww-ws-card">
            <div class="ww-quiz-speech-row">
              <span class="ww-quiz-step-pill">Znaleziono: <b id="ws-found-count">${this.foundWords.size}</b> / ${this.wordsToFind.length}</span>
              <span class="ww-ws-bonus-pill">✨ +5s za każde słowo!</span>
            </div>

            <div class="ww-spell-timer-bar">
              <div class="ww-spell-timer-fill" id="ws-timer-fill" style="width: 100%"></div>
              <span class="ww-spell-timer-text" id="ws-timer-text">⏱️ ${this.timeLeft}s</span>
            </div>

            <!-- Tabela liter -->
            <div class="ww-ws-grid" id="ws-grid"></div>

            <!-- Lista słów pod tabelą -->
            <div class="ww-ws-words-list" id="ws-words-list">
              ${this.wordsToFind.map(s=>`
                <span class="ww-ws-word-badge ${this.foundWords.has(s)?"is-found":""}" data-word="${s}">
                  ${s}
                </span>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Lewy dolny róg: Tan -->
        <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
          <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
            <img
              src="./assets/Tan.png"
              alt="Tan"
              class="dd-fighter-sprite sprite-tan"
              id="mp-player-sprite"
              onerror="this.src='./public/assets/Tan.png'"
            />
          </div>
          <div class="dd-fighter-hud">
            <div class="dd-fighter-top-row">
              <span class="dd-fighter-name">Tan</span>
            </div>
            <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
              <div class="dd-fighter-hp-fill" id="mp-player-hp-fill" style="width: ${e}%"></div>
              <span class="dd-fighter-hp-text" id="mp-player-hp-text">${this.player.hp}/${this.player.maxHp}</span>
            </div>
          </div>
        </div>
      </div>
    `;const i=this.container.querySelector("#mp-intro-click-layer"),a=this.container.querySelector("#mp-animated-title");i&&a&&i.addEventListener("pointerdown",()=>{this.introDismissed=!0,d.playStep(),a.classList.remove("is-centered"),i.classList.add("intro-dismissed"),setTimeout(()=>i.remove(),650),this.startTimer()})}renderGrid(){const e=this.container.querySelector("#ws-grid");if(!e)return;e.innerHTML="";for(let i=0;i<this.gridSize;i++)for(let a=0;a<this.gridSize;a++){const s=document.createElement("div");s.className="ww-ws-cell",s.dataset.row=i,s.dataset.col=a,s.textContent=this.grid[i][a],this.wordPlacements.some(n=>this.foundWords.has(n.word)&&n.cells.some(([l,r])=>l===i&&r===a))&&s.classList.add("cell-found"),s.addEventListener("pointerdown",n=>{this.lockInput||(this.isDragging=!0,this.dragStartCell={r:i,c:a},this.highlightLine(this.dragStartCell,{r:i,c:a}),d.playStep())}),s.addEventListener("pointerenter",()=>{this.lockInput||!this.isDragging||!this.dragStartCell||this.highlightLine(this.dragStartCell,{r:i,c:a})}),s.addEventListener("click",()=>this.handleCellClick(i,a,s)),e.appendChild(s)}this.globalPointerBound||(this.globalPointerBound=!0,window.addEventListener("pointerup",()=>{this.isDragging&&this.dragStartCell&&(this.isDragging=!1,this.commitDragSelection())}));const t=this.container.querySelector("#ws-found-count");t&&(t.textContent=this.foundWords.size)}startTimer(){this.stopTimer(),this.timerInterval=setInterval(()=>{this.lockInput||(this.timeLeft=Math.max(0,this.timeLeft-1),this.updateTimerUI(),this.timeLeft<=0&&this.handleTimeout())},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}updateTimerUI(){const e=this.container.querySelector("#ws-timer-text"),t=this.container.querySelector("#ws-timer-fill");if(e&&(e.textContent=`⏱️ ${this.timeLeft}s`),t){const i=Math.max(0,Math.min(100,this.timeLeft/15*100));t.style.width=`${i}%`}}handleTimeout(){this.stopTimer(),this.lockInput=!0,d.playEnemyHit("kroliczek"),this.player.hp=Math.max(0,this.player.hp-this.enemyDamage),this.onPlayerDamaged&&this.onPlayerDamaged(this.enemyDamage),this.updatePlayerHud(),this.triggerFighterHit("player",`-${this.enemyDamage}`),setTimeout(()=>{if(this.player.hp<=0){const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-defeat-exit"),setTimeout(()=>{this.onClose&&this.onClose({defeated:!0})},600)}else this.timeLeft=this.baseTime+(this.player.bonusTimeSec||0),this.selectedCells=[],this.generateBoard(),this.renderGrid(),this.updateTimerUI(),this.lockInput=!1,this.startTimer()},600)}getLineCells(e,t){const i=e.r===t.r,a=e.c===t.c,s=Math.abs(e.r-t.r)===Math.abs(e.c-t.c);if(!i&&!a&&!s)return[{r:e.r,c:e.c}];const o=[],n=t.r===e.r?0:t.r>e.r?1:-1,l=t.c===e.c?0:t.c>e.c?1:-1;let r=e.r,p=e.c;for(;o.push({r,c:p}),!(r===t.r&&p===t.c);)r+=n,p+=l;return o}highlightLine(e,t){this.container.querySelectorAll(".ww-ws-cell.cell-selected").forEach(a=>{a.classList.remove("cell-selected")});const i=this.getLineCells(e,t);this.currentLineCells=i,i.forEach(({r:a,c:s})=>{const o=this.container.querySelector(`[data-row="${a}"][data-col="${s}"]`);o&&o.classList.add("cell-selected")})}commitDragSelection(){if(!this.currentLineCells||this.currentLineCells.length<2){this.clearSelection(),this.dragStartCell=null;return}const e=this.currentLineCells,t=e.map(({r:s,c:o})=>this.grid[s][o]).join(""),i=t.split("").reverse().join("");let a=null;if(this.wordsToFind.includes(t)&&!this.foundWords.has(t)?a=t:this.wordsToFind.includes(i)&&!this.foundWords.has(i)&&(a=i),a){this.foundWords.add(a),d.playAttackHit("kroliczek"),d.speakPolish(a),this.timeLeft+=5,this.updateTimerUI(),e.forEach(({r:n,c:l})=>{const r=this.container.querySelector(`[data-row="${n}"][data-col="${l}"]`);r&&r.classList.add("cell-found")});const s=this.container.querySelector(`.ww-ws-word-badge[data-word="${a}"]`);s&&s.classList.add("is-found"),this.score+=150,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`);const o=this.container.querySelector("#ws-found-count");o&&(o.textContent=this.foundWords.size),this.clearSelection(),this.dragStartCell=null,(this.foundWords.size>=this.wordsToFind.length||this.enemyHp<=0)&&(this.stopTimer(),setTimeout(()=>this.finishBattle(),650))}else this.clearSelection(),this.dragStartCell=null}clearSelection(){this.container.querySelectorAll(".ww-ws-cell.cell-selected").forEach(e=>{e.classList.remove("cell-selected")}),this.selectedCells=[],this.currentLineCells=null}handleCellClick(e,t,i){if(!this.lockInput){if(this.selectedCells.length===0)this.selectedCells=[{r:e,c:t,el:i}],i.classList.add("cell-selected"),d.playStep();else if(this.selectedCells.length===1){const a=this.selectedCells[0];if(a.r===e&&a.c===t){a.el.classList.remove("cell-selected"),this.selectedCells=[];return}const s=a.r===e,o=a.c===t;if(!s&&!o){a.el.classList.remove("cell-selected"),this.selectedCells=[{r:e,c:t,el:i}],i.classList.add("cell-selected"),d.playStep();return}const n=[],l=o?e>a.r?1:-1:0,r=s?t>a.c?1:-1:0;let p=a.r,h=a.c;for(;n.push([p,h]),!(p===e&&h===t);)p+=l,h+=r;const y=n.map(([k,f])=>this.grid[k][f]).join(""),u=y.split("").reverse().join("");let g=null;if(this.wordsToFind.includes(y)&&!this.foundWords.has(y)?g=y:this.wordsToFind.includes(u)&&!this.foundWords.has(u)&&(g=u),g){this.foundWords.add(g),d.playAttackHit("kroliczek"),d.speakPolish(g),this.timeLeft+=5,this.updateTimerUI(),n.forEach(([v,z])=>{const M=this.container.querySelector(`[data-row="${v}"][data-col="${z}"]`);M&&M.classList.add("cell-found")});const k=this.container.querySelector(`.ww-ws-word-badge[data-word="${g}"]`);k&&k.classList.add("is-found"),this.score+=150,this.enemyHp=Math.max(0,this.enemyHp-this.tanDamage),this.updateEnemyHud(),this.triggerFighterHit("opponent",`-${this.tanDamage}`);const f=this.container.querySelector("#ws-found-count");f&&(f.textContent=this.foundWords.size),a.el.classList.remove("cell-selected"),this.selectedCells=[],this.foundWords.size>=this.wordsToFind.length&&this.finishBattle()}else a.el.classList.remove("cell-selected"),i.classList.add("cell-wrong"),d.playMiss(),setTimeout(()=>i.classList.remove("cell-wrong"),300),this.selectedCells=[]}}}triggerFighterHit(e="opponent",t="-5"){const i=this.container.querySelector(e==="opponent"?"#mp-opponent-sprite-wrap":"#mp-player-sprite-wrap"),a=this.container.querySelector(".dd-combat-arena");if(a&&(a.classList.remove("dd-screen-shake"),a.offsetWidth,a.classList.add("dd-screen-shake")),!i)return;const s=document.createElement("div");s.className="dd-white-slash-fx",s.innerHTML=`
      <svg class="dd-slash-svg" viewBox="0 0 160 160" aria-hidden="true">
        <path class="dd-slash-arc" d="M 22 136 C 48 64, 92 28, 146 14 C 114 58, 78 100, 34 146 Z" />
        <path class="dd-slash-trail" d="M 46 142 C 68 88, 102 52, 148 32 C 122 68, 92 106, 56 148 Z" />
      </svg>
      <span class="dd-slash-dmg">${t}</span>
    `,i.appendChild(s),setTimeout(()=>s.remove(),520)}updateEnemyHud(){const e=this.container.querySelector("#mp-enemy-hp-fill"),t=this.container.querySelector("#mp-enemy-hp-text"),i=Math.max(0,Math.min(100,this.enemyHp/this.enemyMaxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.enemyHp}/${this.enemyMaxHp}`)}updatePlayerHud(){const e=this.container.querySelector("#mp-player-hp-fill"),t=this.container.querySelector("#mp-player-hp-text"),i=Math.max(0,Math.min(100,this.player.hp/this.player.maxHp*100));e&&(e.style.width=`${i}%`),t&&(t.textContent=`${this.player.hp}/${this.player.maxHp}`)}finishBattle(){this.stopTimer(),d.playFanfare();const e=this.container.querySelector(".dd-combat-arena");e&&e.classList.add("arena-victory-exit"),setTimeout(()=>{this.onComplete&&this.onComplete({score:this.score})},600)}destroy(){this.stopTimer()}}class Kt{constructor(e){this.app=e}launchMatchingPairs(e="node_3"){const t=this.app.openArena();this.app.activeMinigame=new It(t,{player:this.app.player,enemyName:"kotek",enemyDamage:1,onPlayerDamaged:(i=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{this.app.activeMinigame=null,t.classList.add("hidden"),this.app.updateHUD(),P.resumeBoardMusic()},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Brawo! 🐱")}}),this.app.activeMinigame.mount()}launchAnagram(e="b2_node_1"){const t=this.app.openArena();this.app.activeMinigame=new Nt(t,{player:this.app.player,enemyDamage:1,onPlayerDamaged:(i=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:()=>{this.app.activeMinigame=null,t.classList.add("hidden"),P.resumeBoardMusic()},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Rozgrzewka zaliczona! 🐱")}}),this.app.activeMinigame.mount()}launchOlekQuiz(e="b2_node_2",t="encounter_1"){const i=this.app.openArena();this.app.activeMinigame=new $t(i,{encounterKey:t,player:this.app.player,onPlayerDamaged:(a=5)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:({defeated:a}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),i.classList.add("hidden"),a&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz! 💪",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{const s=t==="encounter_2"?"Nara, Olek! 🔔":"Siema, Olek! 🎮";this.app.handleFighterVictory(i,e,a,s)}}),this.app.activeMinigame.mount()}launchSpinWheel(e="b3_node_2"){const t=this.app.openArena(),i=_(this.app.player);this.app.activeMinigame=new L(t,{player:this.app.player,enemyMaxHp:3*i,tanDamage:i,enemyDamage:1,onPlayerDamaged:(a=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{this.app.handleFighterVictory(t,e,a,"Super obrót kołem! 🎡")}}),this.app.activeMinigame.mount()}launchSpellWord(e="b3_node_5"){const t=this.app.openArena();this.app.activeMinigame=new Wt(t,{player:this.app.player,enemyDamage:5,onPlayerDamaged:(i=5)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz! 💪",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Znam już Twoje ID, Olek! 🎮")}}),this.app.activeMinigame.mount()}launchMatchUp(e="b4_node_2"){const t=this.app.openArena();this.app.activeMinigame=new B(t,{player:this.app.player,enemyDamage:2,onPlayerDamaged:(i=2)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz! 💪",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Jeżyk pokonany! 🦔✨")}}),this.app.activeMinigame.mount()}launchFindMatch(e="b4_node_5"){const t=this.app.openArena();this.app.activeMinigame=new Ot(t,{player:this.app.player,enemyDamage:3,onPlayerDamaged:(i=3)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz! 💪",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Szybki jak błyskawica! 🐶⚡")}}),this.app.activeMinigame.mount()}launchWordSearch(e="b4_node_7"){const t=this.app.openArena();this.app.activeMinigame=new qt(t,{player:this.app.player,enemyDamage:3,onPlayerDamaged:(i=3)=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onClose:({defeated:i}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),i&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz! 💪",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:i})=>{this.app.handleFighterVictory(t,e,i,"Zając dogoniony! 🐇💨")}}),this.app.activeMinigame.mount()}launchBoard6HedgehogMatchUp(e="b6_node_2"){const t=this.app.openArena(),i=_(this.app.player);this.app.activeMinigame=new B(t,{player:this.app.player,enemyMaxHp:H.length*i,enemyHp:H.length*i,enemyDamage:2,tanDamage:i,enemyName:"Jeżyk 🦔",opponentAvatar:"./assets/Postacie/Jez.png",spriteClass:"sprite-jez",items:H,onPlayerDamaged:(a=2)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:({defeated:a}={})=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),a&&(this.app.player.hp=Math.max(5,this.app.player.maxHp),this.app.showTemporaryPlayerBubble("Spróbujmy jeszcze raz z Jeżykiem! 🦔",2e3)),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{this.app.handleFighterVictory(t,e,a,"Jeżyk pokonany! Świetne dopasowanie! 🦔✨")}}),this.app.activeMinigame.mount()}launchThoughtsOpinion(e="b6_node_3"){this.app.closeModal();const t=this.app.openArena();if(!t)return;let i=0;const a=U,s=()=>{const o=a[i],n=Math.max(0,Math.min(100,this.app.player.hp/this.app.player.maxHp*100)),l=o.image.startsWith("./")?o.image.slice(1):o.image;t.innerHTML=`
        <div class="dd-combat-arena thoughts-arena">
          <h2 class="mp-animated-title is-centered" style="font-size: 1.8rem;">Twoje Myśli i Gusta (${i+1}/${a.length})</h2>

          <!-- Prawy górny róg: Myśli -->
          <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Myśli</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container" id="mp-opponent-sprite-wrap">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Myśli"
                class="dd-fighter-sprite sprite-mysli"
                id="mp-opponent-sprite"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta tematu i 4 opcje -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            <div class="dd-topic-arena-card">
              <div class="dd-topic-img-wrap" style="width: 220px; height: 160px; margin: 0 auto 12px; overflow: hidden; border-radius: 14px; border: 2px solid rgba(255,255,255,0.2);">
                <img
                  src="${l}"
                  alt="${o.name}"
                  class="dd-topic-img"
                  style="width: 100%; height: 100%; object-fit: cover;"
                  onerror="this.onerror=null; this.src='/public${l}';"
                />
              </div>
              <h3 class="dd-topic-name" style="font-family:'Fredoka',sans-serif; font-size:1.45rem; color:#ffd166; margin:0 0 6px;">${o.name}</h3>
              <p class="dd-topic-desc" style="font-size:0.95rem; color:#cbd5e1; margin:0 0 16px; line-height:1.35;">${o.desc}</p>

              <!-- 4 Opcje ekspresji: MEGA, FAJNE, SŁABE, NUDNE -->
              <div class="dd-thoughts-options-grid" style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <button type="button" class="btn-thought-opt opt-mega" data-val="mega">
                  <span class="to-icon">🔥</span>
                  <span class="to-label">MEGA!</span>
                  <span class="to-sub">[me-ga]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-fajne" data-val="fajne">
                  <span class="to-icon">👍</span>
                  <span class="to-label">FAJNE</span>
                  <span class="to-sub">[fai-neh]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-slabe" data-val="slabe">
                  <span class="to-icon">👎</span>
                  <span class="to-label">SŁABE</span>
                  <span class="to-sub">[swa-beh]</span>
                </button>
                <button type="button" class="btn-thought-opt opt-nudne" data-val="nudne">
                  <span class="to-icon">🥱</span>
                  <span class="to-label">NUDNE</span>
                  <span class="to-sub">[nood-neh]</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
            <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                id="mp-player-sprite"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Tan</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${n}%"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `,t.querySelectorAll(".btn-thought-opt").forEach(r=>{r.addEventListener("click",()=>{const p=r.dataset.val;this.playerPreferences[o.id]=p,d.playStep(),r.classList.add("is-picked"),t.querySelectorAll(".btn-thought-opt").forEach(h=>h.disabled=!0),setTimeout(()=>{if(i+1<a.length)i++,s();else{d.playFanfare();const h=this.app.getNode(e);h&&(h.completed=!0),this.awardProgress(1,1,100),this.app.updateHUD(),m(()=>{t.classList.add("hidden"),t.innerHTML="",this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Twoje myśli są uporządkowane! 🧠✨",2500)})}},450)})})};s()}launchThoughtsFight(e="b6_node_5"){this.app.closeModal();const t=this.app.openArena();if(!t)return;let i=42;const a=42,s=5,o=14,n=[...U].sort(()=>Math.random()-.5).slice(0,3);let l=0;const r=()=>{const p=n[l],h=this.playerPreferences[p.id]||"fajne",y=h==="mega"||h==="fajne",u=h.toUpperCase(),g=Math.max(0,Math.min(100,i/a*100)),k=Math.max(0,Math.min(100,this.app.player.hp/this.app.player.maxHp*100)),f=p.image.startsWith("./")?p.image.slice(1):p.image;t.innerHTML=`
        <div class="dd-combat-arena thoughts-arena">
          <h2 class="mp-animated-title is-centered" style="font-size: 1.8rem;">Walka z Myślami: Lajk czy Hejt?</h2>

          <!-- Prawy górny róg: Myśli -->
          <div class="dd-arena-fighter dd-arena-opponent" id="mp-opponent-box">
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Myśli</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-enemy-hp-bar">
                <div class="dd-fighter-hp-fill" id="mp-enemy-hp-fill" style="width: ${g}%; background: #e63946;"></div>
                <span class="dd-fighter-hp-text" id="mp-enemy-hp-text">${i}/${a}</span>
              </div>
            </div>
            <div class="dd-sprite-container opponent-sprite-container mysli-sprite-container" id="mp-opponent-sprite-wrap">
              <img
                src="./assets/Postacie/Mysli.png"
                alt="Myśli"
                class="dd-fighter-sprite sprite-mysli"
                id="mp-opponent-sprite"
                onerror="this.src='./public/assets/Postacie/Mysli.png'"
              />
            </div>
          </div>

          <!-- Środek areny: Karta walki Lajk vs Hejt -->
          <div class="matching-stage-wrapper thoughts-stage-wrapper" style="display:flex; justify-content:center; align-items:center;">
            <div class="dd-topic-arena-card">
              <div class="dd-topic-mini-card" style="display:flex; align-items:center; gap:12px; margin-bottom:14px; background:rgba(0,0,0,0.3); padding:8px 16px; border-radius:12px;">
                <img
                  src="${f}"
                  alt="${p.name}"
                  class="topic-mini-img"
                  style="width:64px; height:64px; object-fit:cover; border-radius:8px;"
                  onerror="this.onerror=null; this.src='/public${f}';"
                />
                <div style="text-align:left;">
                  <strong style="font-size:1.15rem; color:#ffd166;">${p.name}</strong>
                  <div style="font-size:0.88rem; color:#94a3b8;">Twoja ocena: <b style="color:#06d6a0;">${u}</b></div>
                </div>
              </div>

              <div style="font-family:'Fredoka',sans-serif; font-size:1.2rem; color:#ffffff; margin-bottom:18px;">
                Czy to zasługuje na <strong>LAJK</strong> czy <strong>HEJT</strong>?
              </div>

              <!-- Dwa przyciski: LAJK vs HEJT -->
              <div class="dd-lajk-hejt-buttons" style="display:flex; gap:16px; justify-content:center; width:100%;">
                <button type="button" class="btn-lajk" data-choice="lajk" style="flex:1; padding:16px; border-radius:14px; background:#3a86ff; color:#fff; border:none; cursor:pointer; font-weight:800; font-size:1.1rem; box-shadow:0 6px 16px rgba(58,134,255,0.4);">
                  <div style="font-size:1.6rem; margin-bottom:4px;">❤️ 👍</div>
                  <div>LAJK</div>
                  <div style="font-size:0.8rem; font-weight:600; opacity:0.9;">(Polubienie / Aprobata)</div>
                </button>
                <button type="button" class="btn-hejt" data-choice="hejt" style="flex:1; padding:16px; border-radius:14px; background:#e63946; color:#fff; border:none; cursor:pointer; font-weight:800; font-size:1.1rem; box-shadow:0 6px 16px rgba(230,57,70,0.4);">
                  <div style="font-size:1.6rem; margin-bottom:4px;">💬 👎</div>
                  <div>HEJT</div>
                  <div style="font-size:0.8rem; font-weight:600; opacity:0.9;">(Krytyka / Odrzucenie)</div>
                </button>
              </div>
            </div>
          </div>

          <!-- Lewy dolny róg: Tan -->
          <div class="dd-arena-fighter dd-arena-player" id="mp-player-box">
            <div class="dd-sprite-container player-sprite-container" id="mp-player-sprite-wrap">
              <img
                src="./assets/Tan.png"
                alt="Tan"
                class="dd-fighter-sprite sprite-tan"
                id="mp-player-sprite"
                onerror="this.src='./public/assets/Tan.png'"
              />
            </div>
            <div class="dd-fighter-hud">
              <div class="dd-fighter-top-row">
                <span class="dd-fighter-name">Tan</span>
              </div>
              <div class="dd-fighter-hp-bar" id="mp-player-hp-bar">
                <div class="dd-fighter-hp-fill" style="width: ${k}%"></div>
                <span class="dd-fighter-hp-text">${this.app.player.hp}/${this.app.player.maxHp}</span>
              </div>
            </div>
          </div>
        </div>
      `,t.querySelectorAll(".btn-lajk, .btn-hejt").forEach(v=>{v.addEventListener("click",()=>{const z=v.dataset.choice;z==="lajk"&&y||z==="hejt"&&!y?(v.classList.add("is-correct"),d.playAttack(),d.playSuccess(),i=Math.max(0,i-o)):(v.classList.add("is-wrong"),d.playHurt(),this.app.player.hp=Math.max(1,this.app.player.hp-s),this.app.updateHUD()),t.querySelectorAll(".btn-lajk, .btn-hejt").forEach(x=>x.disabled=!0),setTimeout(()=>{if(i<=0){d.playFanfare();const x=this.app.getNode(e);x&&(x.completed=!0),this.awardProgress(1,1,120),this.app.updateHUD(),m(()=>{t.classList.add("hidden"),t.innerHTML="",this.app.renderBoard(),this.app.showTemporaryPlayerBubble("Pokonałeś Myśli i opanowałeś Lajki oraz Hejty! 🧠✨",2600)})}else this.app.player.hp>0&&(l=(l+1)%n.length,r())},700)})})};r()}launchCityCatWheel(e="c1_node_2"){const t=this.app.openArena(),i=_(this.app.player);this.app.activeMinigame=new L(t,{player:this.app.player,scenarios:kt,enemyMaxHp:6*i,tanDamage:i,enemyDamage:1,onPlayerDamaged:(a=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{this.app.handleFighterVictory(t,e,a||150,"Kot Bolo gratuluje! Znasz zwroty zakupowe! 🐱✨")}}),this.app.activeMinigame.mount()}launchCity2CatWheel(e="c2_node_2"){const t=this.app.openArena(),i=_(this.app.player);this.app.activeMinigame=new L(t,{player:this.app.player,scenarios:bt,enemyMaxHp:7*i,tanDamage:i,enemyDamage:1,onPlayerDamaged:(a=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{this.app.handleFighterVictory(t,e,a||200,"Kot Pomocnik mruczy z radości! Znasz tłumaczenia! 🐱✨")}}),this.app.activeMinigame.mount()}launchCity3CatWheel(e="c3_node_2"){const t=this.app.openArena(),i=_(this.app.player);this.app.activeMinigame=new L(t,{player:this.app.player,scenarios:wt,enemyMaxHp:5*i,tanDamage:i,enemyDamage:1,onPlayerDamaged:(a=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard(),this.app.updateHUD()})},onComplete:({score:a})=>{this.app.handleFighterVictory(t,e,a||200,"Kot Pomocnik bije brawo! Wiesz jak pytać o drogę! 🚏✨")}}),this.app.activeMinigame.mount()}launchGenericCatWheel(e,t,i){const a=this.app.openArena(),s=["#3a86ff","#ef476f","#ffd166","#06d6a0","#8338ec","#fb5607","#118ab2"],o=t.map((l,r)=>{var k,f;const h=[...t.filter((v,z)=>z!==r&&v.vnMeaning!==l.vnMeaning)].sort(()=>Math.random()-.5),y=((k=h[0])==null?void 0:k.vnMeaning)||"Không đúng",u=((f=h[1])==null?void 0:f.vnMeaning)||"Ý nghĩa khác",g=[{textPl:l.vnMeaning,correct:!0},{textPl:y,correct:!1},{textPl:u,correct:!1}].sort(()=>Math.random()-.5);return{id:`w_${r}`,sliceLabel:l.cleanWord||l.word,sliceColor:l.color||s[r%s.length],badge:i?i.replace(/Kot Bolo:\s*/i,"").toUpperCase():"ZAKRĘĆ KOŁEM",speakText:l.word,options:g,explanationPl:`Świetnie! „${l.word}” to po wietnamsku: ${l.vnMeaning}.`}}),n=_(this.app.player);this.app.activeMinigame=new L(a,{title:i,player:this.app.player,scenarios:o,enemyMaxHp:o.length*n,tanDamage:n,enemyDamage:1,onPlayerDamaged:(l=1)=>{this.app.player.hp=Math.max(1,this.app.player.hp-l),this.app.updateHUD()},onComplete:()=>{this.app.handleFighterVictory(a,e,150,"Kot Bolo zamruczał z radości! Świetna wymowa! 🐾✨")},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),a.classList.add("hidden"),this.app.renderBoard()})}}),this.app.activeMinigame.mount()}launchModuleMatchUp(e,t){const i=this.app.openArena();let a=[{id:"1",left:"Nie rozumiem",right:"Em không hiểu"},{id:"2",left:"Proszę powtórzyć",right:"Xin nhắc lại"},{id:"3",left:"Wolniej",right:"Chậm hơn"}],s="Jeżyk: Dopasuj słowa!";t==="m4_matchup"?(a=[{id:"1",left:"Jestem głodny",right:"Em đói bụng"},{id:"2",left:"Chce mi się pić",right:"Em khát nước"},{id:"3",left:"Jest mi zimno",right:"Em thấy lạnh"}],s="Jeżyk: Stany Fizyczne"):t==="m5_matchup"&&(a=[{id:"1",left:"Pochodzę z Wietnamu",right:"Tôi đến từ Việt Nam"},{id:"2",left:"Mieszkam w Polsce",right:"Tôi sống ở Ba Lan"},{id:"3",left:"Komputer",right:"Máy tính"}],s="Jeżyk: Pasje i Tożsamość"),this.app.activeMinigame=new B(i,{player:this.app.player,enemyDamage:2,pairs:a,title:s,onPlayerDamaged:(o=2)=>{this.app.player.hp=Math.max(1,this.app.player.hp-o),this.app.updateHUD()},onComplete:({score:o}={})=>{this.app.handleFighterVictory(i,e,o||150,"Jeżyk schował kolce i bije brawo! 🦔👏")},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),i.classList.add("hidden"),this.app.renderBoard()})}}),this.app.activeMinigame.mount()}launchOlekSchoolQuiz(e="m3_2_node_4"){const t=this.app.openArena(),i=[{question:"Olek pyta: „Tan, masz zapasowy długopis? Mój się wypisał!” 🐶",options:[{text:"„Tak, proszę! Mam niebieski długopis w piórniku.”",correct:!0},{text:"„Jest mi zimno i chcę założyć szalik.”",correct:!1},{text:"„Bilet 20-minutowy ulgowy.”",correct:!1}]},{question:"Olek pyta: „A pożyczysz mi na chwilę gumkę do zmazania błędu?” 🧼",options:[{text:"„Pewnie, bierz śmiało i zmaż ten błąd!”",correct:!0},{text:"„Zamawiam kebaba z ostrym sosem.”",correct:!1},{text:"„Nie rozumiem polecenia na tablicy.”",correct:!1}]}];this.app.activeMinigame=new C(t,{player:this.app.player,enemyName:"Olek",enemyTitle:"🐶 KOLEGA OLEK (W ŁAWCE) 🐶",enemySubtitle:"Olek (30 HP, 7 dmg)",enemyAvatar:"./assets/Postacie/Szczeniak.png",arenaClass:"school-dialog-arena",enemyMaxHp:30,enemyDamage:7,steps:i,onPlayerDamaged:a=>{this.app.player.hp=Math.max(1,this.app.player.hp-a),this.app.updateHUD()},onComplete:({score:a,damageTaken:s=0}={})=>{this.app.handleFighterVictory(t,e,a||200,"Olek podziękował za pożyczone przybory! 🐶🤝",{damageTaken:s})}}),this.app.activeMinigame.mount()}launchModuleRankOrder(e,t){const i=this.app.openArena();let a=["1. Podnieś rękę na lekcji","2. „Przepraszam, zapomniałem dzisiaj zeszytu.”","3. „Czy mogę patrzeć do książki z kolegą?”","4. „Dziękuję bardzo, proszę pani.”"],s="Ułóż dialog: Brak zeszytu";t==="m4_emotions_rank"&&(a=["1. Zauważ swoje zmęczenie","2. „Jestem bardzo zmęczony po szkole.”","3. Wypij szklankę wody","4. Zrób 15 minut odpoczynku i zrelaksuj się"],s="Ułóż sekwencję: Odpoczynek i spokój"),this.app.activeMinigame=new le(i,{steps:a,title:s,onComplete:({score:o}={})=>{this.app.handleFighterVictory(i,e,o||180,"Świetnie uporządkowana wypowiedź! 📜✨")},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),i.classList.add("hidden"),this.app.renderBoard()})}}),this.app.activeMinigame.mount()}launchModuleOpenBox(e){const t=this.app.openArena();this.app.activeMinigame=new re(t,{title:"Apteczka: Dopasuj w 5 sekund!",boxes:[{id:1,prompt:"Gdy termometr wskazuje 38.5°C, to jest to:",correctWord:"Gorączka",wrongWords:["Odpoczynek","Lekarstwo"]},{id:2,prompt:"Gdy boli cię gardło i przełykasz ślinę, pomoże ci:",correctWord:"Lekarstwo",wrongWords:["Linijka","Powerbank"]}],onComplete:({score:i}={})=>{this.app.handleFighterVictory(t,e,i||200,"Wszystkie lekarstwa i objawy odgadnięte w czasie! 💊⏱️")},onClose:()=>{m(()=>{this.app.activeMinigame&&(this.app.activeMinigame.destroy(),this.app.activeMinigame=null),t.classList.add("hidden"),this.app.renderBoard()})}}),this.app.activeMinigame.mount()}launchModuleThoughts(e,t){const i=document.getElementById("modal-mount");i.classList.remove("hidden");let a="Twoje myśli na lekcji",s="Co mówisz, gdy nauczyciel mówi za szybko?",o=["„Proszę mówić trochę wolniej!”","„Proszę powtórzyć jeszcze raz!”"];t==="m3_schedule_thoughts"?(a="Twoje ulubione lekcje",s="W jaki dzień masz najwięcej energii na naukę?",o=["W poniedziałek rano","W piątek po południu"]):t==="m4_physical_thoughts"?(a="Sygnały Twojego organizmu",s="Gdy po lekcjach jesteś bardzo głodny, co wybierasz?",o=["Świeżą drożdżówkę i ciepłą herbatę","Zjedzenie obiadu w domu"]):t==="m4_emotion_thoughts"&&(a="Rozładowanie emocji",s="Jak najlepiej uspokoić złość i stres?",o=["Głęboki spokojny oddech","Wyjście na świeże powietrze"]),i.innerHTML=`
      <div class="dicey-modal-backdrop dd-thoughts-backdrop">
        <div class="dd-thoughts-container">
          <div class="dd-thoughts-header">
            <img src="./assets/Postacie/Mysli.png" alt="Myśli" class="dd-thoughts-avatar" />
            <div>
              <h3>${a}</h3>
              <p>Wybierz to, co czujesz — nie ma złej odpowiedzi!</p>
            </div>
          </div>
          <div class="dd-thoughts-content">
            <p class="dd-thoughts-q">${s}</p>
            <div class="dd-thoughts-options">
              ${o.map((n,l)=>`
                <button class="btn-dd-thought-choice" data-idx="${l}">${n}</button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,i.querySelectorAll(".btn-dd-thought-choice").forEach(n=>{n.addEventListener("click",()=>{d.playSuccess();const l=this.app.getNode(e);l&&(l.completed=!0),this.awardProgress(1,1,150),m(()=>{this.app.closeModal(),this.app.renderBoard(),this.app.updateHUD(),this.app.showTemporaryPlayerBubble("Twoje myśli są czyste i spokojne! 🧠✨",2200)})})})}launchWuefistaDialog(e="m3_3_node_2"){const t=this.app.openArena();this.app.activeMinigame=new C(t,{player:this.app.player,enemyName:"Wuefista",enemyTitle:"🏃 NAUCZYCIEL WF-U 🏃",enemySubtitle:"Wuefista (30 HP, 3 dmg)",enemyAvatar:"./assets/Postacie/Wuefista.png",arenaClass:"school-dialog-arena",enemyMaxHp:30,enemyDamage:3,steps:rt,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||200,"Świetna forma na WF-ie! Rozgrzewka zaliczona! 🏃‍♂️⚽",{damageTaken:a})}}),this.app.activeMinigame.mount()}launchPielegniarkaDialog(e="m4_2_node_2",t="m4_pielegniarka"){let i="👩‍⚕️ SZKOLNA PIELĘGNIARKA 👩‍⚕️",a="Pielęgniarka (30 HP, 3 dmg)",s=ct,o="Pielęgniarka pomogła! Gorączka opada, czujesz się bezpiecznie! 👩‍⚕️❤️";t==="m4_pielegniarka_kontrola"?(i="👩‍⚕️ KONTROLA ZDROWIA 👩‍⚕️",a="Pielęgniarka (Kontrola 30 HP)",s=dt,o="Temperatura 36.6°C! Jesteś w pełni sił i gotowy do drogi! 🌡️✨"):t==="m4_pielegniarka_rejestracja"&&(i="🩺 REJESTRACJA PRZYCHODNI 🩺",a="Pielęgniarka (Rejestracja 30 HP)",s=pt,o="Ciśnienie i tętno zbadane! Doktor Lekarz czeka w gabinecie! 🩺🚪");const n=this.app.openArena();this.app.activeMinigame=new C(n,{player:this.app.player,enemyName:"Pielęgniarka",enemyTitle:i,enemySubtitle:a,enemyAvatar:"./assets/Postacie/Pielegniarka.png",arenaClass:"clinic-dialog-arena",enemyMaxHp:30,enemyDamage:3,steps:s,onPlayerDamaged:l=>{this.app.player.hp=Math.max(1,this.app.player.hp-l),this.app.updateHUD()},onComplete:({score:l,damageTaken:r=0}={})=>{this.app.handleFighterVictory(n,e,l||200,o,{damageTaken:r})}}),this.app.activeMinigame.mount()}launchGejmerDialog(e="m5_1_node_4"){const t=this.app.openArena();this.app.activeMinigame=new C(t,{player:this.app.player,enemyName:"Gejmer",enemyTitle:"🎮 GEJMER 🎮",enemySubtitle:"Kumpel z Discorda (30 HP, 3 dmg)",enemyAvatar:"./assets/Postacie/Gejmer.png",arenaClass:"room-dialog-arena",enemyMaxHp:30,enemyDamage:3,steps:mt,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||200,"Gejmer podbija z Tobą rangę w Brawl Stars! 🎮⚡",{damageTaken:a})}}),this.app.activeMinigame.mount()}launchPilkarzM5Dialog(e="m5_2_node_2"){const t=this.app.openArena();this.app.activeMinigame=new C(t,{player:this.app.player,enemyName:"Piłkarz",enemyTitle:"⚽ PIŁKARZ Z ORLIKA ⚽",enemySubtitle:"Piłkarz (35 HP, 4 dmg)",enemyAvatar:"./assets/Postacie/Pilkarz.png",arenaClass:"room-dialog-arena",enemyMaxHp:35,enemyDamage:4,steps:yt,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||200,"Piłkarz podaje Ci piłkę! Jesteś gotowy na turniej! ⚽🔥",{damageTaken:a})}}),this.app.activeMinigame.mount()}launchCwaniakM5Dialog(e="m5_2_node_4"){const t=this.app.openArena();this.app.activeMinigame=new C(t,{player:this.app.player,enemyName:"Cwaniak",enemyTitle:"🕶️ CWANIAK (VIRALE & TRENDY) 🕶️",enemySubtitle:"Cwaniak (35 HP, 4 dmg)",enemyAvatar:"./assets/Postacie/Cwaniak.png",arenaClass:"room-dialog-arena",enemyMaxHp:35,enemyDamage:4,steps:ut,onPlayerDamaged:i=>{this.app.player.hp=Math.max(1,this.app.player.hp-i),this.app.updateHUD()},onComplete:({score:i,damageTaken:a=0}={})=>{this.app.handleFighterVictory(t,e,i||200,"Cwaniak szanuje Twoją wiedzę o anime i trendach! 🕶️✨",{damageTaken:a})}}),this.app.activeMinigame.mount()}}function Ft(c,e){e&&(e.completed=!0);const t=document.getElementById("modal-mount");t.classList.remove("hidden"),t.classList.add("modal-mount-shop");const i=()=>{const a=String(c.currentFloor).startsWith("m3"),s=String(c.currentFloor).startsWith("m4"),o=String(c.currentFloor).startsWith("m5"),n=a?Qe:s?Xe:o?et:Ye,l=a?"Kramik Szkolny":s?"Kramik Apteczny":o?"Kramik Technologiczny":"Kramik Szkolny";t.innerHTML=`
      <div class="dd-shop-screen" style="background-image: url('./assets/kramik_background.png'), url('/assets/kramik_background.png');">
        <!-- Kolorowa girlanda u góry -->
        <div class="dd-shop-bunting">
          <div class="bunting-flag" style="--c: #ff0054"></div>
          <div class="bunting-flag" style="--c: #ffd166"></div>
          <div class="bunting-flag" style="--c: #06d6a0"></div>
          <div class="bunting-flag" style="--c: #118ab2"></div>
          <div class="bunting-flag" style="--c: #8338ec"></div>
          <div class="bunting-flag" style="--c: #ffbe0b"></div>
          <div class="bunting-flag" style="--c: #ff0054"></div>
        </div>

        <!-- Górna belka: Tytuł sklepu z ikoną kramiku i sakiewka ze złotem -->
        <div class="dd-shop-topbar">
          <div class="dd-shop-title-badge">
            <img
              src="./assets/kramik.png"
              alt="Kramik"
              class="dd-shop-title-kramik-img"
              onerror="this.src='./public/assets/kramik.png'"
            />
            <h2>${l.toUpperCase()}</h2>
          </div>
          <div class="dd-shop-top-right">
            <div class="dd-shop-gold-badge">
              <span class="gold-coin-icon">🪙</span>
              <span class="gold-text"><b>${c.player.coins}</b> monet</span>
            </div>
            <button class="btn-dd-shop-close" id="shop-close-btn" title="Zamknij sklep">✖</button>
          </div>
        </div>

        <!-- Dymek sprzedawcy wskazujący na żabę po prawej stronie w tle -->
        <div class="dd-shopkeeper-bubble-area">
          <div class="dd-shopkeeper-speech-bubble">
            Witaj w Kramiku! Co dobrego dla Ciebie? 🐸✨
          </div>
        </div>

        <!-- Sekcja lady sklepowej z kartami rozłożonymi po lewej/w centrum -->
        <div class="dd-shop-counter-section">
          <div class="dd-shop-cards-container">
            ${n.map(y=>{const u=c.player.boughtShopItemIds.has(y.id)||y.id==="sneakers"&&c.player.boughtSneakers,g=c.player.coins>=y.price&&!u;let k=`KUP • 🪙 ${y.price}`,f="btn-dd-buy";return u?(k="KUPIONE ✅",f+=" btn-dd-buy-owned"):g||(k=`🪙 ${y.price} (ZA MAŁO)`,f+=" btn-dd-buy-cant"),`
                <div class="dd-shop-item-card ${u?"item-is-sold":""}" style="--card-color: ${y.color||"#8338ec"}">
                  ${u?'<div class="dd-sold-stamp">SPRZEDANE</div>':""}

                  <div class="dd-card-top-strip">
                    <span class="dd-card-name">${y.namePl}</span>
                  </div>

                  <div class="dd-card-main-stat">
                    ${y.icon?`<img src="${y.icon}" alt="${y.namePl}" class="dd-card-item-img" onerror="this.style.display='none'" />`:""}
                    <div class="dd-stat-cluster">
                      <span class="dd-stat-big-val">${y.bigStat||y.badgePl}</span>
                      <span class="dd-stat-sub-label">${y.subStatText||y.badgePl}</span>
                    </div>
                  </div>

                  <div class="dd-card-desc-box">
                    <p class="dd-card-desc-text">${y.descPl}</p>
                  </div>

                  <div class="dd-card-action-box">
                    <button
                      type="button"
                      class="${f}"
                      data-item-id="${y.id}"
                      ${g?"":"disabled"}
                    >
                      ${k}
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Dolny pasek podsumowania i wyjścia -->
        <div class="dd-shop-bottombar">
          <div class="dd-shop-stats-status">
            <span class="dd-stat-pill">👟 Max HP: <b>${c.player.maxHp}</b></span>
            <span class="dd-stat-pill">⚔️ Atak: <b>${_(c.player)} DMG</b></span>
            <span class="dd-stat-pill">⏱️ Czas: <b>+${c.player.bonusTimeSec||0}s</b></span>
            <span class="dd-stat-pill">🥙 Kebaby: <b>${c.player.kebabs||0}</b></span>
          </div>
          <button type="button" class="btn-dd-shop-exit" id="shop-leave-btn">
            ⬅ WYJDŹ ZE SKLEPU
          </button>
        </div>
      </div>
    `;const r=()=>{d.playStep(),m(()=>{c.closeModal(),c.renderBoard(),c.updateHUD()})},p=t.querySelector("#shop-close-btn");p&&p.addEventListener("click",r);const h=t.querySelector("#shop-leave-btn");h&&h.addEventListener("click",r),t.querySelectorAll(".btn-dd-buy").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.itemId,g=n.find(k=>k.id===u);if(g&&!(c.player.boughtShopItemIds.has(g.id)||g.id==="sneakers"&&c.player.boughtSneakers)){if(c.player.coins<g.price){d.playMiss(),c.showTemporaryPlayerBubble("Za mało monet! 🪙",1400);return}c.player.coins-=g.price,c.player.boughtShopItemIds.add(g.id),d.playSuccess(),g.id==="sneakers"?(c.player.boughtSneakers=!0,c.player.maxHp+=4,c.player.hp=Math.min(c.player.maxHp,c.player.hp+4),d.speakPolish("Świetne sneakersy!"),c.showTemporaryPlayerBubble("👟 Założono Sneakersy! Max HP +4",1800)):g.id==="energy_drink"?(c.player.bonusTimeSec+=1,d.speakPolish("Dużo energii!"),c.showTemporaryPlayerBubble("⚡ Napój energetyczny! +1s na odpowiedź",1800)):g.id==="kebab"?(c.player.kebabs+=1,d.speakPolish("Pyszny kebab!"),c.showTemporaryPlayerBubble("🥙 Kupiono Kebab! (W plecaku: 1x)",1800)):g.id==="piornik"?(c.player.bonusDamage=(c.player.bonusDamage||0)+1,d.speakPolish("Nowy piórnik! Siła ataku wzrosła!"),c.showTemporaryPlayerBubble("✏️ Kupiono Piórnik! Siła ataku +1 ⚔️",1800)):g.id==="zeszyt"?(c.player.bonusTimeSec=(c.player.bonusTimeSec||0)+1,d.speakPolish("Nowy zeszyt! Więcej czasu na myślenie!"),c.showTemporaryPlayerBubble("📓 Kupiono Zeszyt! Czas na odpowiedź +1s ⏱️",1800)):g.id==="drozdzowka"?(c.player.hp=Math.min(c.player.maxHp,c.player.hp+6),d.speakPolish("Pyszna słodka drożdżówka!"),c.showTemporaryPlayerBubble("🥐 Zjedzono drożdżówkę! Uleczono +6 HP ❤️",1800)):g.id==="plaster"?(c.player.maxHp+=2,c.player.hp=Math.min(c.player.maxHp,c.player.hp+12),d.speakPolish("Opatrunek założony! Rany zagojone!"),c.showTemporaryPlayerBubble("🩹 Użyto Plaster! +12 HP i +2 Max HP ❤️",1800)):g.id==="szalik"?(c.player.maxHp+=4,c.player.hp=Math.min(c.player.maxHp,c.player.hp+4),d.speakPolish("Ciepły szalik chroni przed chorobą!"),c.showTemporaryPlayerBubble("🧣 Założono Szalik! Max HP +4 ❤️",1800)):g.id==="woda"?(c.player.hp=Math.min(c.player.maxHp,c.player.hp+8),d.speakPolish("Orzeźwiająca chłodna woda!"),c.showTemporaryPlayerBubble("💧 Wypito Wodę! Uleczono +8 HP ❤️",1800)):g.id==="sluchawki"?(c.player.bonusDamage=(c.player.bonusDamage||0)+2,d.speakPolish("Słuchawki gamingowe! Pełna koncentracja!"),c.showTemporaryPlayerBubble("🎧 Założono Słuchawki! Siła ataku +2 ⚔️",1800)):g.id==="powerbank"?(c.player.bonusTimeSec=(c.player.bonusTimeSec||0)+2,d.speakPolish("Powerbank naładowany! Dodatkowy czas!"),c.showTemporaryPlayerBubble("🔋 Kupiono Powerbank! Czas +2s ⏱️",1800)):g.id==="breloczek"&&(c.player.flawlessCoinBonus=(c.player.flawlessCoinBonus||0)+1,d.speakPolish("Szczęśliwy talizman w plecaku!"),c.showTemporaryPlayerBubble("🔑 Szczęśliwy Breloczek! +1 🪙 za czystą walkę!",1800)),c.updateHUD(),i()}})})};i()}function Rt(c,e=null,t=null){P.playBookMusic(),d.playStep();const i=document.getElementById("modal-mount");i.classList.remove("hidden");const a=[...D.slice(0,5),...X,...ee,...te,...ie,...ae,...se,...oe,...A,...I,...N,...$,...W,...O,...q,...K];let s=e;const o=()=>{var f,v,z,M,x,T;const n=[];if((c.player.boughtShopItemIds.has("sneakers")||c.player.boughtSneakers)&&n.push({id:"item_sneakers",category:"equipment",name:"SNEAKERSY",color:"#8338ec",statEmoji:"👟",bigStat:"+4",subStatText:"MAX HP +4",descPl:"Wygodne buty szkolne! Zwiększają na stałe Twoje maksymalne punkty zdrowia o +4 HP.",descVn:"Giày thể thao êm ái! Tăng vĩnh viễn +4 HP tối đa.",actionType:null,isUnlocked:!0}),(c.player.boughtShopItemIds.has("energy_drink")||c.player.bonusTimeSec>0)&&n.push({id:"item_energy_drink",category:"equipment",name:"ENERGETYK",color:"#00b4d8",statEmoji:"⚡",bigStat:`+${c.player.bonusTimeSec}s`,subStatText:"CZAS W MINIGRACH",descPl:`Napój na refleks! Daje dodatkowy czas (+${c.player.bonusTimeSec}s) na odpowiedź w minigrach czasowych.`,descVn:`Nước tăng lực! Tăng thêm +${c.player.bonusTimeSec} giây trong các thử thách tính giờ.`,actionType:null,isUnlocked:!0}),c.player.kebabs>0&&n.push({id:"item_kebab",category:"consumable",name:"KEBAB",color:"#f77f00",statEmoji:"🥙",bigStat:`×${c.player.kebabs}`,subStatText:"ULECZ +10 HP",descPl:`Ciepły kebab z sosem! Przedmiot jednorazowy — natychmiast regeneruje +10 punktów życia (W torbie: ${c.player.kebabs}).`,descVn:"Bánh mì Kebab thơm ngon! Hồi phục ngay lập tức +10 HP.",actionType:"eat",isUnlocked:!0}),a.forEach(b=>{const w=c.unlockedWordIds.has(b.id);n.push({id:b.id,category:"slang",name:b.word.toUpperCase(),color:b.color,statEmoji:b.emoji,bigStat:b.phonetic,subStatText:b.category,descPl:`🇵🇱 Znaczenie: ${b.plMeaning}
💬 Przykład: ${b.examplePl.replace(`
`," ")}`,descVn:`🇻🇳 Nghĩa: ${b.vnMeaning}
💬 Ví dụ: ${b.exampleVn.replace(`
`," ")}`,cleanWord:b.cleanWord,actionType:w?"speak":null,isUnlocked:w})}),!s||!n.find(b=>b.id===s))if(t==="equipment"){const b=n.find(w=>w.category==="equipment"||w.category==="consumable");s=b?b.id:((f=n.find(w=>w.isUnlocked))==null?void 0:f.id)||((v=n[0])==null?void 0:v.id)}else if(t==="slang"){const b=n.find(w=>w.category==="slang"&&w.isUnlocked);s=b?b.id:((z=n.find(w=>w.category==="slang"))==null?void 0:z.id)||((M=n[0])==null?void 0:M.id)}else s=((x=n.find(b=>b.isUnlocked))==null?void 0:x.id)||((T=n[0])==null?void 0:T.id)||null;const l=n.find(b=>b.id===s)||n[0],r=Math.max(16,Math.ceil(n.length/4)*4),p=[];for(let b=0;b<r;b++)if(b<n.length){const w=n[b],j=w.id===s;w.category==="slang"&&!w.isUnlocked?p.push(`
            <div class="dd-inv-slot-card slot-locked ${j?"is-selected":""}" data-item-id="${w.id}">
              <div class="dd-inv-card-inner">
                <div class="dd-inv-card-header header-locked">🔒 ? ? ?</div>
                <div class="dd-inv-card-slot-center">
                  <span class="slot-locked-icon">❓</span>
                </div>
              </div>
            </div>
          `):p.push(`
            <div class="dd-inv-slot-card ${j?"is-selected":""}" style="--slot-accent: ${w.color}" data-item-id="${w.id}">
              <div class="dd-inv-card-inner">
                <div class="dd-inv-card-header" style="background: ${w.color}">${w.name}</div>
                <div class="dd-inv-card-slot-center">
                  <span class="slot-item-emoji">${w.statEmoji}</span>
                  <span class="slot-item-label">${w.bigStat}</span>
                </div>
              </div>
            </div>
          `)}else p.push(`
          <div class="dd-inv-slot-empty"></div>
        `);const h=a.filter(b=>c.unlockedWordIds.has(b.id)).length;i.innerHTML=`
      <div class="dicey-modal-backdrop dd-inv-backdrop">
        <div class="dd-inv-container">
          <!-- Tło lochu: pochodnie i filary w stylu Dicey Dungeons -->
          <div class="dd-inv-torch left" aria-hidden="true"><div class="torch-flame"></div></div>
          <div class="dd-inv-torch right" aria-hidden="true"><div class="torch-flame"></div></div>

          <!-- Główna zawartość: Lewo (PLECAK) i Prawo (PODGLĄD + ZAŁOŻONE) -->
          <div class="dd-inv-main-grid">
            <!-- Lewa strona: W PLECAKU (IN BACKPACK) -->
            <div class="dd-inv-backpack-pane">
              <div class="dd-inv-section-title">
                IN BACKPACK • W PLECAKU
              </div>
              <div class="dd-inv-backpack-grid">
                ${p.join("")}
              </div>
            </div>

            <!-- Prawa strona: PODGLĄD KARTY (GÓRA) oraz EQUIPPED (DÓŁ) -->
            <div class="dd-inv-right-pane">
              <!-- Podgląd wybranej karty (Card Inspector jak PICKPOCKET) -->
              <div class="dd-inv-inspector-wrap">
                ${l?`
                  <div class="dd-inspector-card" style="--inspect-color: ${l.color||"#3a86ff"}">
                    <div class="dd-inspector-header" style="background: ${l.color||"#3a86ff"}">
                      <span>${l.name}</span>
                    </div>
                    <div class="dd-inspector-body">
                      <div class="dd-inspector-slot-box">
                        <span class="dd-inspector-emoji">${l.statEmoji}</span>
                        <span class="dd-inspector-big-stat">${l.bigStat}</span>
                        <div class="dd-inspector-sub">${l.subStatText}</div>
                      </div>

                      <div class="dd-inspector-desc-box">
                        <p class="dd-inspector-desc-pl">${l.descPl.replace(/\n/g,"<br/>")}</p>
                        <p class="dd-inspector-desc-vn">${l.descVn.replace(/\n/g,"<br/>")}</p>
                      </div>

                      <div class="dd-inspector-actions">
                        ${l.actionType==="eat"?`
                          <button class="btn-dd-inv-action btn-inv-eat" id="inv-eat-kebab-btn">
                            🥙 Zjedz Kebab (+10 HP)
                          </button>
                        `:""}
                        ${l.actionType==="speak"?`
                          <button class="btn-dd-inv-action btn-inv-speak" id="inv-speak-btn" data-speak="${l.cleanWord}">
                            🔊 Posłuchaj wymowy
                          </button>
                        `:""}
                      </div>
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Sekcja: EQUIPPED (ZAŁOŻONE) -->
              <div class="dd-inv-equipped-section">
                <div class="dd-inv-sub-title">EQUIPPED • ZAŁOŻONE</div>
                <div class="dd-inv-equipped-rack">
                  <!-- Slot 1: Buty -->
                  ${c.player.boughtShopItemIds.has("sneakers")||c.player.boughtSneakers?`
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #8338ec;" data-item-id="item_sneakers">
                      <div class="eq-tag">BUTY</div>
                      <div class="eq-icon">👟</div>
                      <div class="eq-name">SNEAKERSY</div>
                      <div class="eq-stat">+4 Max HP</div>
                    </div>
                  `:`
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">BUTY</div>
                      <div class="eq-icon">👟</div>
                      <div class="eq-name">[Brak butów]</div>
                    </div>
                  `}

                  <!-- Slot 2: Napój -->
                  ${c.player.boughtShopItemIds.has("energy_drink")||c.player.bonusTimeSec>0?`
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #00b4d8;" data-item-id="item_energy_drink">
                      <div class="eq-tag">NAPÓJ</div>
                      <div class="eq-icon">⚡</div>
                      <div class="eq-name">ENERGETYK</div>
                      <div class="eq-stat">+${c.player.bonusTimeSec}s czas</div>
                    </div>
                  `:`
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">NAPÓJ</div>
                      <div class="eq-icon">⚡</div>
                      <div class="eq-name">[Brak napoju]</div>
                    </div>
                  `}

                  <!-- Slot 3: Jedzenie -->
                  ${c.player.kebabs>0?`
                    <div class="dd-equipped-slot slot-active" style="--eq-c: #f77f00;" data-item-id="item_kebab">
                      <div class="eq-tag">JEDZENIE</div>
                      <div class="eq-icon">🥙</div>
                      <div class="eq-name">KEBAB</div>
                      <div class="eq-stat">×${c.player.kebabs} w torbie</div>
                    </div>
                  `:`
                    <div class="dd-equipped-slot slot-empty">
                      <div class="eq-tag">JEDZENIE</div>
                      <div class="eq-icon">🥙</div>
                      <div class="eq-name">[Brak kebaba]</div>
                    </div>
                  `}

                  <!-- Slot 4: Talia Słów -->
                  <div class="dd-equipped-slot slot-active" style="--eq-c: #06d6a0;">
                    <div class="eq-tag">TALIA</div>
                    <div class="eq-icon">📖</div>
                    <div class="eq-name">SŁOWNIK</div>
                    <div class="eq-stat">${h} / ${a.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dolna belka nawigacji w stylu Dicey Dungeons -->
          <div class="dd-inv-bottom-bar">
            <div class="dd-inv-hero-info">
              <div class="dd-inv-hero-img-wrap">
                <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
              </div>
              <div class="dd-inv-hero-details">
                <span class="dd-hero-name">TAN</span>
                <span class="dd-hero-sub">13 lat • Poziom A0</span>
              </div>
            </div>

            <div class="dd-inv-stats-cluster">
              <div class="dd-inv-hp-pill">
                ❤️ <b>${c.player.hp} / ${c.player.maxHp}</b>
              </div>
              <div class="dd-inv-coin-pill">
                🪙 <b>${c.player.coins}</b>
              </div>
              <div class="dd-inv-dice-pill">
                🎲 <b>x${c.player.diceCount}</b>
              </div>
              <div class="dd-inv-lvl-pill">
                POZIOM <b>${c.player.level}</b> (⭐ ${Math.max(0,c.player.xpToNext-c.player.xp)} EXP)
              </div>
            </div>

            <button class="btn-dd-inv-back" id="inv-back-btn">
              POWRÓT (BACK)
            </button>
          </div>
        </div>
      </div>
    `;const y=()=>{d.playStep(),m(()=>{c.closeModal(),P.resumeBoardMusic(),c.renderBoard(),c.updateHUD()})},u=i.querySelector("#inv-back-btn");u&&u.addEventListener("click",y),i.querySelectorAll(".dd-inv-slot-card, .dd-equipped-slot.slot-active").forEach(b=>{b.addEventListener("click",()=>{const w=b.dataset.itemId;w&&w!==s&&(d.playStep(),s=w,o())})});const g=i.querySelector("#inv-eat-kebab-btn");g&&g.addEventListener("click",()=>{c.eatKebab(),o()});const k=i.querySelector("#inv-speak-btn");k&&k.addEventListener("click",()=>{d.speakPolish(k.dataset.speak)})};o()}class Zt{constructor(){this.hudManager=new vt(this),this.boardManager=new _t(this),this.floorManager=new Mt(this),this.bossEncounterManager=new Ht(this),this.cityEncounterManager=new At(this),this.minigameLauncher=new Kt(this),this.currentFloor=1,this.nodes=J.map(e=>({...e,blocksEdgesTo:e.blocksEdgesTo?[...e.blocksEdgesTo]:void 0})),this.edges=Y,this.currentNodeId="node_2",this.isWalking=!1,this.bubbleHideTimeout=null,this.unlockedWordIds=new Set,this.board3IntroShown=!1,this.board4IntroShown=!1,this.board5IntroShown=!1,this.board6IntroShown=!1,this.board7IntroShown=!1,this.city1IntroShown=!1,this.city2IntroShown=!1,this.city3IntroShown=!1,this.cityBossIntroShown=!1,this.playerPreferences={},this.cityShoppingChoices={items:"bread_water",bag:"yes_bag",payment:"card"},this.cityFoodChoices={dish:"kebab",sauce:"czosnkowy",size:"L",dining:"na_miejscu"},this.cityTicketChosen={type:"ulgowy",duration:"20",price:1},this.m3_1_IntroShown=!1,this.m3_2_IntroShown=!1,this.m3_3_IntroShown=!1,this.m4_1_IntroShown=!1,this.m4_2_IntroShown=!1,this.m4_3_IntroShown=!1,this.m5_1_IntroShown=!1,this.m5_2_IntroShown=!1,this.player={name:"Tan",age:13,level:1,maxLevel:S,hp:20,maxHp:20,coins:0,diceCount:3,xp:0,xpToNext:F[1],score:0,baseDamage:5,bonusDamage:0,get damage(){return(this.baseDamage||5)+Math.max(0,((this.level||1)-1)*2)+(this.bonusDamage||0)},bonusTimeSec:0,flawlessCoinBonus:0,kebabs:0,boughtSneakers:!1,boughtShopItemIds:new Set},this.activeMinigame=null}init(){if(this.root=document.getElementById("app"),!this.root)return;this.renderBoardStage(),this.bindKeyboardShortcuts();const e=document.getElementById("arena-mount");e&&e.classList.add("hidden"),this.loadFloor(1),this.renderBoard(),this.updateHUD()}renderBoardStage(){var t,i,a,s,o,n,l;this.root.innerHTML=`
      <div class="game-viewport">
        <!-- Główna scena: Plansza Szatni (szatnia.jpg) w stylu Dicey Dungeons -->
        <main class="board-stage" id="board-stage">
          <div class="floating-corner-controls">
            <button class="btn-quick-mode" id="floor-indicator-badge" title="Kliknij, aby otworzyć listę wyboru planszy (TEST)" style="background: #1e293b; cursor: pointer;">
              📍 Plansza 1: Szatnia
            </button>
            <button class="btn-quick-mode btn-select-floor" id="select-floor-btn" title="Wybierz dowolną planszę z listy (TEST)" style="background: #2563eb; color: #fff; font-weight: 800;">
              🗺️ Wybierz planszę
            </button>
            <button class="btn-quick-mode btn-reset-board" id="reset-board-btn" title="Zresetuj całą planszę do stanu początkowego">
              🔄 Resetuj planszę
            </button>
            <button class="btn-quick-mode btn-skip-test" id="skip-opponent-btn" title="Pomiń aktualnego przeciwnika (TEST)" style="background: #f59e0b; color: #111827; font-weight: 800;">
              ⏭️ Pomiń przeciwnika
            </button>
            <button class="btn-quick-mode btn-qm-mute" id="qm-mute-btn" title="Wycisz / Włącz dźwięk">
              🔊
            </button>
          </div>

          <div class="board-background-container" id="board-map">
            <!-- Warstwa linii ścieżek SVG -->
            <svg class="board-paths-svg" id="board-svg" viewBox="0 0 100 100" preserveAspectRatio="none"></svg>

            <!-- Warstwa węzłów (pól na podłodze) -->
            <div class="board-nodes-layer" id="board-nodes-layer"></div>

            <!-- Postać gracza: Tan -->
            <div class="player-token" id="player-token">
              <div class="player-speech-mini speech-hidden" id="player-speech-mini"></div>
              <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
              <div class="player-shadow"></div>
            </div>
          </div>

          <!-- Kontener na aktywny poziom Wordwall / Arenę -->
          <div id="arena-mount" class="arena-mount hidden"></div>

          <!-- Kontener na modale (Słowniczek / Skrzynia / Sklepik) -->
          <div id="modal-mount" class="modal-mount hidden"></div>
        </main>

        <!-- Dolny pasek HUD -->
        <footer class="dicey-hud-bar">
          <div class="hud-left-character">
            <div class="hud-portrait-frame">
              <img src="./assets/Tan.png" alt="Tan" onerror="this.src='./public/assets/Tan.png'" />
            </div>
            <div class="hud-char-name">
              <strong>TAN</strong>
              <span>13 lat • A0</span>
            </div>
          </div>

          <div class="hud-stats-cluster">
            <div class="hud-hp-bar-outer">
              <div class="hud-hp-bar-fill" id="hud-hp-fill"></div>
              <span class="hud-hp-label" id="hud-hp-text">20/20</span>
            </div>
            <div class="hud-sub-counters">
              <span class="hud-counter-item" title="Złote monety">🪙 <b id="hud-coins">0</b></span>
              <span class="hud-buff-pill hidden hud-damage-pill" id="hud-damage-pill" title="Siła ataku Tan: bonus obrażeń">⚔️ +<b id="hud-damage-sec">0</b></span>
              <span class="hud-buff-pill hidden" id="hud-energy-pill" title="Dodatkowy czas na odpowiedź">⏱️ +<b id="hud-energy-sec">0</b>s</span>
              <span class="hud-buff-pill hidden hud-flawless-pill" id="hud-flawless-pill" title="Premia monet za walkę bez strat HP">✨ +<b id="hud-flawless-sec">0</b>🪙</span>
            </div>
          </div>

          <!-- Centralna wskazówka / hint planszy -->
          <div class="hud-center-hint" id="board-hint-banner">
            <span class="hud-hint-icon">💡</span>
            <span class="hud-hint-text" id="hud-hint-pill">Wybierz pole na podłodze, aby przejść dalej!</span>
          </div>

          <!-- Prawe przyciski akcji: Plecak i Księga Słów -->
          <div class="hud-right-actions">
            <button class="btn-dicey-hud btn-hud-inventory" id="hud-inventory-btn" title="Otwórz Plecak (Ekwipunek i Przedmioty)">
              <span class="hud-btn-icon">🎒</span>
              <span class="hud-btn-text">PLECAK</span>
            </button>
            <button class="btn-dicey-hud btn-hud-spellbook" id="hud-spellbook-btn" title="Otwórz Księgę Słów (Karty i Słowniczek)">
              <span class="hud-btn-icon">📖</span>
              <span class="hud-btn-text">KSIĘGA SŁÓW</span>
              <span class="hud-btn-badge" id="hud-words-count">0</span>
            </button>
          </div>
        </footer>
      </div>
    `,(t=document.getElementById("floor-indicator-badge"))==null||t.addEventListener("click",()=>{this.openFloorPickerModal()}),(i=document.getElementById("select-floor-btn"))==null||i.addEventListener("click",()=>{this.openFloorPickerModal()}),(a=document.getElementById("reset-board-btn"))==null||a.addEventListener("click",()=>{d.playStep(),m(()=>{this.resetBoard(!0)})}),(s=document.getElementById("skip-opponent-btn"))==null||s.addEventListener("click",()=>{this.skipOpponentForTest()});const e=document.getElementById("qm-mute-btn");e&&(e.textContent=d.isMuted()?"🔇":"🔊",e.style.opacity=d.isMuted()?"0.6":"1",e.addEventListener("click",()=>{const r=d.toggleMute();e.textContent=r?"🔇":"🔊",e.style.opacity=r?"0.6":"1",this.showTemporaryPlayerBubble(r?"Dźwięk wyłączony 🔇":"Dźwięk włączony 🔊",1200)})),(o=document.getElementById("hud-inventory-btn"))==null||o.addEventListener("click",()=>{this.openInventoryModal(null,"equipment")}),(n=document.getElementById("hud-spellbook-btn"))==null||n.addEventListener("click",()=>{this.openInventoryModal(null,"slang")}),(l=document.getElementById("hud-eat-kebab-btn"))==null||l.addEventListener("click",()=>{this.eatKebab()})}eatKebab(){if((this.player.kebabs||0)<=0)return;this.player.kebabs-=1;const e=10;this.player.hp=Math.min(this.player.maxHp,this.player.hp+e),d.playHeal(),d.speakPolish("Mniam! Pyszny kebab!"),this.showTemporaryPlayerBubble("🥙 Zjedzono Kebab! +10 HP",1800),this.updateHUD()}skipOpponentForTest(){if(this.activeMinigame){const t=document.getElementById("mp-intro-click-layer");t&&t.remove(),this.activeMinigame.enemyHp=0,typeof this.activeMinigame.updateOpponentBar=="function"&&this.activeMinigame.updateOpponentBar();const i=document.querySelector(".dd-combat-arena");i&&i.classList.add("arena-victory-exit"),typeof this.activeMinigame.onComplete=="function"&&this.activeMinigame.onComplete({score:500});return}const e=this.nodes.find(t=>!t.completed&&this.isCompletableFighterType(t.type,t));e&&(e.completed=!0,this.awardProgress(1,1,200),d.playSuccess(),this.showTemporaryPlayerBubble(`Pominięto: ${e.titlePl} ⏭️`,1600),this.renderBoard(),this.updateHUD())}bindKeyboardShortcuts(){window.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("modal-mount");if(t&&!t.classList.contains("hidden")){this.closeModal();return}}if(e.key===" "||e.key==="Enter"){const t=document.querySelector(".modal-mount:not(.hidden)");if(t){const i=t.querySelector(".btn-dicey-take, .btn-city-continue, .fpm-close-btn, #dialog-ok-btn");if(i){i.click(),e.preventDefault();return}}}if(e.key==="a"||e.key==="A"){const t=this.getNode(this.currentNodeId);t&&this.activeMinigame===null&&this.interactWithNode(t)}})}openArena(e=null){const t=document.getElementById("arena-mount");if(!t)return null;const i=this.getFloorTheme(this.currentFloor);return t.className=`arena-mount arena-theme-${i} floor-${this.currentFloor}-arena`,e!==null?P.playBossFightMusic(e):P.playCombatMusic(this.currentFloor),t}renderBoard(){return this.boardManager.renderBoard()}positionPlayerToken(e,t=!1){return this.boardManager.positionPlayerToken(e,t)}handleNodeClick(e){return this.boardManager.handleNodeClick(e)}getNode(e){return this.boardManager.getNode(e)}isEdgeBlocked(e,t){return this.boardManager.isEdgeBlocked(e,t)}findPath(e,t){return this.boardManager.findPath(e,t)}isCompletableFighterType(e,t=null){return this.boardManager.isCompletableFighterType(e,t)}playFighterCollisionOnBoard(e){return this.boardManager.playFighterCollisionOnBoard(e)}isCatNode(e){return this.boardManager?this.boardManager.isCatNode(e):!1}loadFloor(e,t={}){return this.floorManager.loadFloor(e,t)}resetBoard(e=!1,t=null){return this.floorManager.resetBoard(e,t)}getFloorTheme(e=this.currentFloor){return this.floorManager.getFloorTheme(e)}collectApple(e){return this.floorManager.collectApple(e)}awardProgress(e,t,i=0,a={}){return this.floorManager.awardProgress(e,t,i,a)}setBoardHint(e){this.hudManager.setBoardHint(e)}showTemporaryPlayerBubble(e,t=2e3){this.hudManager.showTemporaryPlayerBubble(e,t)}hidePlayerBubbleImmediately(){this.hudManager.hidePlayerBubbleImmediately()}async interactWithNode(e){if(e.completed&&this.isCompletableFighterType(e.type,e)){this.setBoardHint("Ten przeciwnik został już pokonany!");return}if(e.type==="step"){e.completed=!0,d.playStep(),this.setBoardHint(e.descriptionPl||"Puste pole ścieżki w zaułku."),this.renderBoard();return}if(e.type==="apple"){!e.completed&&e.icon?this.collectApple(e):this.setBoardHint("Puste pole.");return}if(this.setBoardHint(e.descriptionPl),e.type==="chest"){if(e.completed)return;this.openChestModal(e);return}else if(e.type==="cat_matching"||e.type==="enemy_balloon"||e.type==="enemy_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchMatchingPairs(e.id)});else if(e.type==="cat_anagram")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchAnagram(e.id)});else if(e.type==="olek_quiz_1")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_1")});else if(e.type==="olek_quiz_2")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_2")});else if(e.type==="cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchSpinWheel(e.id)});else if(e.type==="shop")d.playStep(),m(()=>{this.openShopModal(e)});else if(e.type==="olek_spell_word")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchSpellWord(e.id)});else if(e.type==="hedgehog_matchup")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchMatchUp(e.id)});else if(e.type==="puppy_find_match")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchFindMatch(e.id)});else if(e.type==="olek_quiz_3")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_board4")});else if(e.type==="rabbit_wordsearch")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchWordSearch(e.id)});else if(e.type==="olek_quiz_5")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_board5")});else if(e.type==="teacher_quiz_5")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_teacher")});else if(e.type==="b6_hedgehog_matchup")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBoard6HedgehogMatchUp(e.id)});else if(e.type==="b6_thoughts_opinion")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchThoughtsOpinion(e.id)});else if(e.type==="b6_olek_quiz")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekQuiz(e.id,"encounter_board6_olek")});else if(e.type==="b6_thoughts_fight")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchThoughtsFight(e.id)});else if(e.type==="boss_footballer")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBossFootballer(e.id)});else if(e.type==="city_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCityCatWheel(e.id)});else if(e.type==="city_thoughts_shop")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCityThoughtsShop(e.id)});else if(e.type==="city_cashier_box")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCityCashierBox(e.id)});else if(e.type==="city_cashier_rank")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCityCashierRank(e.id)});else if(e.type==="city2_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity2CatWheel(e.id)});else if(e.type==="city2_thoughts_food")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity2ThoughtsFood(e.id)});else if(e.type==="city2_kebab_master")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity2KebabMaster(e.id)});else if(e.type==="city3_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity3CatWheel(e.id)});else if(e.type==="city3_biletomat")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity3Biletomat(e.id)});else if(e.type==="city3_inspector")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCity3Inspector(e.id)});else if(e.type==="city_boss_cwaniak")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBossCwaniak(e.id)});else if(e.type==="m3_boss_nauczycielka")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBossNauczycielka(e.id)});else if(e.type==="m4_boss_lekarz")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBossLekarz(e.id)});else if(e.type==="m5_boss_instagramerka")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchBossInstagramerka(e.id)});else if(e.type==="m3_wuefista")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchWuefistaDialog(e.id)});else if(e.type==="m4_pielegniarka"||e.type==="m4_pielegniarka_kontrola"||e.type==="m4_pielegniarka_rejestracja")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchPielegniarkaDialog(e.id,e.type)});else if(e.type==="m5_gejmer")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchGejmerDialog(e.id)});else if(e.type==="m5_pilkarz")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchPilkarzM5Dialog(e.id)});else if(e.type==="m5_cwaniak")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchCwaniakM5Dialog(e.id)});else if(e.type==="m3_cat_wheel"||e.type==="m3_2_cat_wheel"||e.type==="m3_3_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{const t=e.type==="m3_1_cat_wheel"||e.type==="m3_cat_wheel"?A:e.type==="m3_2_cat_wheel"?I:N;this.launchGenericCatWheel(e.id,t,"Kot Bolo: Szkoła")});else if(e.type==="m4_cat_wheel"||e.type==="m4_2_cat_wheel"||e.type==="m4_3_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{const t=e.type==="m4_cat_wheel"?$:e.type==="m4_2_cat_wheel"?W:O;this.launchGenericCatWheel(e.id,t,"Kot Bolo: Zdrowie i Emocje")});else if(e.type==="m5_cat_wheel"||e.type==="m5_2_cat_wheel")await this.playFighterCollisionOnBoard(e.id),m(()=>{const t=e.type==="m5_cat_wheel"?q:K;this.launchGenericCatWheel(e.id,t,"Kot Bolo: Pasje i Trendy")});else if(e.type==="m3_matchup"||e.type==="m4_matchup"||e.type==="m5_matchup")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchModuleMatchUp(e.id,e.type)});else if(e.type==="m3_olek_quiz")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchOlekSchoolQuiz(e.id)});else if(e.type==="m3_rank_dialog"||e.type==="m4_emotions_rank")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchModuleRankOrder(e.id,e.type)});else if(e.type==="m4_open_box")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchModuleOpenBox(e.id)});else if(e.type==="m3_thoughts"||e.type==="m3_schedule_thoughts"||e.type==="m4_physical_thoughts"||e.type==="m4_emotion_thoughts")await this.playFighterCollisionOnBoard(e.id),m(()=>{this.launchModuleThoughts(e.id,e.type)});else if(e.type==="next_board"){d.playNextBoard(),this.isWalking=!0;let t=1;if(e.id==="node_5")t=2;else if(e.id==="b2_node_5")t=3;else if(e.id==="b3_node_6")t=4;else if(e.id==="b4_node_9")t=5;else if(e.id==="b5_node_7")d.playSchoolBell(),t=6;else if(e.id==="b6_node_7")t=7;else if(e.id==="b7_node_5"){this.showCityVictoryModal();return}else if(e.id==="c1_node_7"){this.showCityCompleteModal();return}else if(e.id==="c2_node_7"){this.showCity2CompleteModal();return}else if(e.id==="c3_node_7"){m(()=>{this.resetBoard(!1,"city_boss")});return}else if(e.id==="cb_node_7"){m(()=>{this.resetBoard(!1,"m3_1")});return}else if(e.id==="m3_1_node_7"){m(()=>this.resetBoard(!1,"m3_2"));return}else if(e.id==="m3_2_node_7"){m(()=>this.resetBoard(!1,"m3_3"));return}else if(e.id==="m3_3_node_7"){m(()=>this.resetBoard(!1,"m3_boss"));return}else if(e.id==="m3_b_node_7"){m(()=>this.resetBoard(!1,"m4_1"));return}else if(e.id==="m4_1_node_7"){m(()=>this.resetBoard(!1,"m4_2"));return}else if(e.id==="m4_2_node_7"){m(()=>this.resetBoard(!1,"m4_3"));return}else if(e.id==="m4_3_node_7"){m(()=>this.resetBoard(!1,"m4_boss"));return}else if(e.id==="m4_b_node_7"){m(()=>this.resetBoard(!1,"m5_1"));return}else if(e.id==="m5_1_node_7"){m(()=>this.resetBoard(!1,"m5_2"));return}else if(e.id==="m5_2_node_7"){m(()=>this.resetBoard(!1,"m5_boss"));return}else if(e.id==="m5_b_node_7"){this.showGrandVictoryModal();return}m(()=>{this.resetBoard(!1,t)})}}openFloorPickerModal(){Tt(this)}openFloorNewCardsModal(...e){return this.floorManager.openFloorNewCardsModal(...e)}openChestModal(e){St(this,e)}showGrandVictoryModal(){jt(this)}showCityVictoryModal(){Ct(this)}showCityCompleteModal(){Lt(this)}showCity2CompleteModal(){Et(this)}launchMatchingPairs(...e){return this.minigameLauncher.launchMatchingPairs(...e)}launchAnagram(...e){return this.minigameLauncher.launchAnagram(...e)}launchOlekQuiz(...e){return this.minigameLauncher.launchOlekQuiz(...e)}launchSpinWheel(...e){return this.minigameLauncher.launchSpinWheel(...e)}launchSpellWord(...e){return this.minigameLauncher.launchSpellWord(...e)}launchMatchUp(...e){return this.minigameLauncher.launchMatchUp(...e)}launchFindMatch(...e){return this.minigameLauncher.launchFindMatch(...e)}launchWordSearch(...e){return this.minigameLauncher.launchWordSearch(...e)}launchBoard6HedgehogMatchUp(...e){return this.minigameLauncher.launchBoard6HedgehogMatchUp(...e)}launchThoughtsOpinion(...e){return this.minigameLauncher.launchThoughtsOpinion(...e)}launchThoughtsFight(...e){return this.minigameLauncher.launchThoughtsFight(...e)}launchBossFootballer(...e){return this.bossEncounterManager.launchBossFootballer(...e)}launchBossCwaniak(...e){return this.bossEncounterManager.launchBossCwaniak(...e)}launchBossNauczycielka(...e){return this.bossEncounterManager.launchBossNauczycielka(...e)}launchBossLekarz(...e){return this.bossEncounterManager.launchBossLekarz(...e)}launchBossInstagramerka(...e){return this.bossEncounterManager.launchBossInstagramerka(...e)}launchCityCatWheel(...e){return this.minigameLauncher.launchCityCatWheel(...e)}launchCityThoughtsShop(...e){return this.cityEncounterManager.launchCityThoughtsShop(...e)}launchCityCashierBox(...e){return this.cityEncounterManager.launchCityCashierBox(...e)}launchCityCashierRank(...e){return this.cityEncounterManager.launchCityCashierRank(...e)}launchCity2CatWheel(...e){return this.minigameLauncher.launchCity2CatWheel(...e)}launchCity2ThoughtsFood(...e){return this.cityEncounterManager.launchCity2ThoughtsFood(...e)}launchCity2KebabMaster(...e){return this.cityEncounterManager.launchCity2KebabMaster(...e)}launchCity3CatWheel(...e){return this.minigameLauncher.launchCity3CatWheel(...e)}launchCity3Biletomat(...e){return this.cityEncounterManager.launchCity3Biletomat(...e)}launchCity3Inspector(...e){return this.cityEncounterManager.launchCity3Inspector(...e)}launchWuefistaDialog(...e){return this.minigameLauncher.launchWuefistaDialog(...e)}launchPielegniarkaDialog(...e){return this.minigameLauncher.launchPielegniarkaDialog(...e)}launchGejmerDialog(...e){return this.minigameLauncher.launchGejmerDialog(...e)}launchPilkarzM5Dialog(...e){return this.minigameLauncher.launchPilkarzM5Dialog(...e)}launchCwaniakM5Dialog(...e){return this.minigameLauncher.launchCwaniakM5Dialog(...e)}launchGenericCatWheel(...e){return this.minigameLauncher.launchGenericCatWheel(...e)}launchModuleMatchUp(...e){return this.minigameLauncher.launchModuleMatchUp(...e)}launchOlekSchoolQuiz(...e){return this.minigameLauncher.launchOlekSchoolQuiz(...e)}launchModuleRankOrder(...e){return this.minigameLauncher.launchModuleRankOrder(...e)}launchModuleOpenBox(...e){return this.minigameLauncher.launchModuleOpenBox(...e)}launchModuleThoughts(...e){return this.minigameLauncher.launchModuleThoughts(...e)}openShopModal(e){Ft(this,e)}openInventoryModal(e=null,t=null){Rt(this,e,t)}handleFighterVictory(e,t,i,a="Brawo!",s={}){xt(this,e,t,i,a,s)}completeCharacterBattle(e={}){Pt(this,e)}closeModal(){const e=document.getElementById("modal-mount");e&&(e.classList.remove("modal-mount-shop"),e.classList.add("hidden"),e.innerHTML="")}updateHUD(){this.hudManager.updateHUD()}}window.addEventListener("DOMContentLoaded",()=>{new Zt().init()});
