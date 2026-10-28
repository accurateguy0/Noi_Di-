# -*- coding: utf-8 -*-
"""
Głośny Ptak - 6 zestawów na każdego z 6 bohaterów (łącznie 36 zestawów po 20 pytań Prawda/Fałsz = 720 pytań).
Weryfikacja faktów językowych, etykieta, kultura mowy i lektury CKE.
"""

def get_ptak_data():
    import json
    return json.loads(r"""{
        "warrior": [
                {
                        "titlePl": "Głośny Ptak [Wojownik]: Dyscypliny Sportowe",
                        "subtitlePl": "Wskaż dyscyplinę niepasującą do kategorii",
                        "descriptionPl": "Ptak głośno ćwierka na stadionie! Wskaż niepasujący element.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Dyscypliny lekkoatletyczne (biegi i skoki). Wskaż intruza:",
                                        "options": [
                                                "Bieg na 100 metrów",
                                                "Skok w dal",
                                                "Rzut oszczepem",
                                                "Szachy błyskawiczne"
                                        ],
                                        "correctWord": "Szachy błyskawiczne"
                                },
                                {
                                        "promptPl": "Kategoria: Gry zespołowe z piłką na boisku trawiastym. Wskaż intruza:",
                                        "options": [
                                                "Mecz piłki nożnej",
                                                "Mecz futbolu rugby",
                                                "Mecz hokeja na trawie",
                                                "Zawody w pływaniu"
                                        ],
                                        "correctWord": "Zawody w pływaniu"
                                },
                                {
                                        "promptPl": "Kategoria: Sprzęt do gimnastyki na sali WF. Wskaż intruza:",
                                        "options": [
                                                "Kozioł gimnastyczny",
                                                "Materac asekuracyjny",
                                                "Drabinki ścienne",
                                                "Wiosło kajakowe"
                                        ],
                                        "correctWord": "Wiosło kajakowe"
                                },
                                {
                                        "promptPl": "Kategoria: Pomiary sportowe na mecie. Wskaż przyrząd niepasujący:",
                                        "options": [
                                                "Stoper elektroniczny",
                                                "Taśma miernicza",
                                                "Fotokomórka",
                                                "Termometr pokojowy"
                                        ],
                                        "correctWord": "Termometr pokojowy"
                                },
                                {
                                        "promptPl": "Kategoria: Postawy fair play i etykiety sportowej. Wskaż negatywną postawę:",
                                        "options": [
                                                "Szacunek dla sędziego",
                                                "Pomoc poszkodowanemu rywalowi",
                                                "Gratulacje po meczu",
                                                "Udawanie faulu (symulowanie)"
                                        ],
                                        "correctWord": "Udawanie faulu (symulowanie)"
                                },
                                {
                                        "promptPl": "Kategoria: Sporty zimowe na śniegu i lodzie. Wskaż intruza:",
                                        "options": [
                                                "Skoki narciarskie",
                                                "Łyżwiarstwo figurowe",
                                                "Biathlon",
                                                "Siatkówka plażowa"
                                        ],
                                        "correctWord": "Siatkówka plażowa"
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
                        "titlePl": "Głośny Ptak [Wojownik]: Układ Ruchu i Anatomia",
                        "subtitlePl": "Kości, stawy i mięśnie sportowca",
                        "descriptionPl": "Wskaż biologiczny lub anatomiczny element niepasujący do grupy.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Główne kości kończyny górnej. Wskaż kość nogi (intruz):",
                                        "options": [
                                                "Kość ramienna",
                                                "Kość promieniowa",
                                                "Kość łokciowa",
                                                "Kość udowa"
                                        ],
                                        "correctWord": "Kość udowa"
                                },
                                {
                                        "promptPl": "Kategoria: Stawy o dużej ruchomości. Wskaż element nieruchomy:",
                                        "options": [
                                                "Staw kolanowy",
                                                "Staw biodrowy",
                                                "Staw barkowy",
                                                "Szwy czaszki"
                                        ],
                                        "correctWord": "Szwy czaszki"
                                },
                                {
                                        "promptPl": "Kategoria: Narządy zmysłów człowieka. Wskaż intruza:",
                                        "options": [
                                                "Oko (wzrok)",
                                                "Ucho (słuch)",
                                                "Język (smak)",
                                                "Śledziona"
                                        ],
                                        "correctWord": "Śledziona"
                                },
                                {
                                        "promptPl": "Kategoria: Elementy chronione przez klatkę piersiową. Wskaż narząd spoza klatki:",
                                        "options": [
                                                "Serce",
                                                "Płuca",
                                                "Aorta piersiowa",
                                                "Pęcherz moczowy"
                                        ],
                                        "correctWord": "Pęcherz moczowy"
                                },
                                {
                                        "promptPl": "Kategoria: Objawy przemęczenia i kontuzji. Wskaż objaw zdrowej formy:",
                                        "options": [
                                                "Skurcz mięśnia",
                                                "Naderwanie ścięgna",
                                                "Obrzęk stawu",
                                                "Pełna elastyczność i siła"
                                        ],
                                        "correctWord": "Pełna elastyczność i siła"
                                },
                                {
                                        "promptPl": "Kategoria: Witaminy i składniki wzmacniające kości. Wskaż substancję obcą:",
                                        "options": [
                                                "Wapń",
                                                "Witamina D3",
                                                "Fosfor",
                                                "Benzyna bezołowiowa"
                                        ],
                                        "correctWord": "Benzyna bezołowiowa"
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
                        "titlePl": "Głośny Ptak [Wojownik]: Czasowniki Ruchu",
                        "subtitlePl": "Części mowy opisujące dynamikę walki",
                        "descriptionPl": "Wytrop wyraz o innym charakterze gramatycznym lub semantycznym.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Dynamiczne czasowniki w trybie oznajmującym. Wskaż bezokolicznik:",
                                        "options": [
                                                "Biegł",
                                                "Skoczyła",
                                                "Walczymy",
                                                "Zwyciężać"
                                        ],
                                        "correctWord": "Zwyciężać"
                                },
                                {
                                        "promptPl": "Kategoria: Czasowniki wyrażające intensywny ruch. Wskaż czynność statyczną:",
                                        "options": [
                                                "Pędzić",
                                                "Szarżować",
                                                "Wiosłować",
                                                "Drzemać"
                                        ],
                                        "correctWord": "Drzemać"
                                },
                                {
                                        "promptPl": "Kategoria: Czasowniki dokonane (czynność ukończona). Wskaż czasownik niedokonany:",
                                        "options": [
                                                "Wygrał",
                                                "Strzelił",
                                                "Obronił",
                                                "Trenował"
                                        ],
                                        "correctWord": "Trenował"
                                },
                                {
                                        "promptPl": "Kategoria: Formy czasu przeszłego liczby mnogiej. Wskaż liczbę pojedynczą:",
                                        "options": [
                                                "Biegliśmy",
                                                "Walczyliście",
                                                "Zdobyły",
                                                "Obroniłem"
                                        ],
                                        "correctWord": "Obroniłem"
                                },
                                {
                                        "promptPl": "Kategoria: Czasowniki w trybie rozkazującym na treningu. Wskaż formę oznajmującą:",
                                        "options": [
                                                "Podaj!",
                                                "Biegnij!",
                                                "Skacz!",
                                                "Rzucam"
                                        ],
                                        "correctWord": "Rzucam"
                                },
                                {
                                        "promptPl": "Kategoria: Imiesłowy przymiotnikowe czynne (-ący). Wskaż przymiotnik odmienny:",
                                        "options": [
                                                "Biegnący",
                                                "Walczący",
                                                "Skaczący",
                                                "Szybki"
                                        ],
                                        "correctWord": "Szybki"
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
                        "titlePl": "Głośny Ptak [Wojownik]: Lektury Męstwa i Historii",
                        "subtitlePl": "Postacie i wydarzenia z kanonu CKE",
                        "descriptionPl": "Wskaż bohatera lub motyw, który nie pasuje do kontekstu lektury.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Bohaterowie «Kamieni na szaniec» Aleksandra Kamińskiego. Wskaż intruza:",
                                        "options": [
                                                "Jan Bytnar «Rudy»",
                                                "Tadeusz Zawadzki «Zośka»",
                                                "Aleksy Dawidowski «Alek»",
                                                "Józef Papkin"
                                        ],
                                        "correctWord": "Józef Papkin"
                                },
                                {
                                        "promptPl": "Kategoria: Rycerze i obrońcy z lektur historycznych. Wskaż intruza:",
                                        "options": [
                                                "Zawisza Czarny",
                                                "Juliusz Konstanty Ordon",
                                                "Jan Skrzetuski",
                                                "Ebenezer Scrooge"
                                        ],
                                        "correctWord": "Ebenezer Scrooge"
                                },
                                {
                                        "promptPl": "Kategoria: Akcje Małego Sabotażu Szarych Szeregów. Wskaż fałszywą akcję:",
                                        "options": [
                                                "Rysowanie kotwic Polski Walczącej",
                                                "Zrywanie flag hitlerowskich",
                                                "Odkręcenie płyty z pomnika Kopernika",
                                                "Kradzież tortu ze stołówki"
                                        ],
                                        "correctWord": "Kradzież tortu ze stołówki"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy charakteru prawdziwego rycerza. Wskaż wadę (intruz):",
                                        "options": [
                                                "Wierność danemu słowu",
                                                "Męstwo w obliczu wroga",
                                                "Ochrona słabszych i ubogich",
                                                "Tchórzliwa ucieczka"
                                        ],
                                        "correctWord": "Tchórzliwa ucieczka"
                                },
                                {
                                        "promptPl": "Kategoria: Lektury o tematyce patriotycznej i wojennej. Wskaż bajkę zwierzęcą:",
                                        "options": [
                                                "«Reduta Ordona»",
                                                "«Kamienie na szaniec»",
                                                "«Pan Tadeusz» (Księga XI)",
                                                "«Kruk i lis»"
                                        ],
                                        "correctWord": "«Kruk i lis»"
                                },
                                {
                                        "promptPl": "Kategoria: Prawdziwe motywacje bohaterów Powstania. Wskaż fałszywy motyw:",
                                        "options": [
                                                "Miłość do Ojczyzny",
                                                "Wierność harcerskiemu braterstwu",
                                                "Pragnienie wolności dla narodu",
                                                "Chęć zdobycia złotego zegarka"
                                        ],
                                        "correctWord": "Chęć zdobycia złotego zegarka"
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
                        "titlePl": "Głośny Ptak [Wojownik]: Ortografia Szermierza",
                        "subtitlePl": "Wymiana głosek i reguły ortograficzne",
                        "descriptionPl": "Wskaż wyraz, który nie spełnia podanej reguły ortograficznej.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Wyrazy z «ó» wymiennym na «o» (lód – lodu). Wskaż wyraz z «ó» niewymiennym:",
                                        "options": [
                                                "Wóz (wozy)",
                                                "Noga (nóg)",
                                                "Dwór (dwory)",
                                                "Córka"
                                        ],
                                        "correctWord": "Córka"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z «rz» po spółgłoskach (b, p, d, t, k, g, w, ch, j). Wskaż wyjątek z «sz»:",
                                        "options": [
                                                "Brzeg",
                                                "Drzewo",
                                                "Krzak",
                                                "Kształt"
                                        ],
                                        "correctWord": "Kształt"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z «ch» wymiennym na «sz» (ucho – uszy). Wskaż wyraz bez takiej wymiany:",
                                        "options": [
                                                "Mucha (muszy)",
                                                "Cicho (cisza)",
                                                "Duch (dusza)",
                                                "Chleb"
                                        ],
                                        "correctWord": "Chleb"
                                },
                                {
                                        "promptPl": "Kategoria: Poprawna pisownia wyrazów z «ż». Wskaż wyraz pisany BŁĘDNIE przez «rz»:",
                                        "options": [
                                                "Żelazo",
                                                "Żagiel",
                                                "Żołnierz",
                                                "Rzaba (zamiast Żaba)"
                                        ],
                                        "correctWord": "Rzaba (zamiast Żaba)"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z przyrostkiem «-arz» oznaczającym zawód/funkcję. Wskaż intruza:",
                                        "options": [
                                                "Piłkarz",
                                                "Bramkarz",
                                                "Lekarz",
                                                "Twarz"
                                        ],
                                        "correctWord": "Twarz"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z «h» na początku słowa. Wskaż wyraz pisany przez «ch»:",
                                        "options": [
                                                "Honor",
                                                "Hymn",
                                                "Hałas",
                                                "Chorągiew"
                                        ],
                                        "correctWord": "Chorągiew"
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
                        "titlePl": "Głośny Ptak [Wojownik]: Stopniowanie i Przymiotniki",
                        "subtitlePl": "Stopień równy, wyższy i najwyższy",
                        "descriptionPl": "Wskaż formę niepasującą do wzorca stopniowania przymiotników.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Stopień najwyższy przymiotników z przedrostkiem «naj-». Wskaż formę wyższą:",
                                        "options": [
                                                "Najszybszy",
                                                "Najsilniejszy",
                                                "Najodważniejszy",
                                                "Szybszy"
                                        ],
                                        "correctWord": "Szybszy"
                                },
                                {
                                        "promptPl": "Kategoria: Stopniowanie nieregularne (dobry – lepszy – najlepszy). Wskaż przymiotnik regularny:",
                                        "options": [
                                                "Zły (gorszy)",
                                                "Duży (większy)",
                                                "Mały (mniejszy)",
                                                "Młody (młodszy)"
                                        ],
                                        "correctWord": "Młody (młodszy)"
                                },
                                {
                                        "promptPl": "Kategoria: Przymiotniki, które ze względów logicznych NIE podlegają stopniowaniu. Wskaż stopniowalny:",
                                        "options": [
                                                "Drewniany",
                                                "Trójkątny",
                                                "Śmiertelny",
                                                "Mocny"
                                        ],
                                        "correctWord": "Mocny"
                                },
                                {
                                        "promptPl": "Kategoria: Stopniowanie opisowe (bardziej, najbardziej). Wskaż formę stopniowaną syntetycznie:",
                                        "options": [
                                                "Bardziej interesujący",
                                                "Najbardziej skomplikowany",
                                                "Bardziej zmęczony",
                                                "Wyraźnie twardszy"
                                        ],
                                        "correctWord": "Wyraźnie twardszy"
                                },
                                {
                                        "promptPl": "Kategoria: Przymiotniki określające hart ducha sportowca. Wskaż określenie negatywne:",
                                        "options": [
                                                "Niezłomny",
                                                "Zdeterminowany",
                                                "Wytrwały",
                                                "Gnuśny"
                                        ],
                                        "correctWord": "Gnuśny"
                                },
                                {
                                        "promptPl": "Kategoria: Stopień wyższy przymiotników. Wskaż formę stopnia równego:",
                                        "options": [
                                                "Celniejszy",
                                                "Bystrzejszy",
                                                "Zręczniejszy",
                                                "Zręczny"
                                        ],
                                        "correctWord": "Zręczny"
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
        ],
        "thief": [
                {
                        "titlePl": "Głośny Ptak [Spryciarz]: Cyberbezpieczeństwo",
                        "subtitlePl": "Wytrop pojęcie niezwiązane z bezpieczeństwem w sieci",
                        "descriptionPl": "Ptak głośno skrzeczy w sieci! Wskaż intruza.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Zagrożenia w internecie (złośliwe oprogramowanie). Wskaż narzędzie obronne:",
                                        "options": [
                                                "Wirus komputerowy",
                                                "Koń trojański",
                                                "Ransomware (okup)",
                                                "Program antywirusowy"
                                        ],
                                        "correctWord": "Program antywirusowy"
                                },
                                {
                                        "promptPl": "Kategoria: Elementy silnego i bezpiecznego hasła. Wskaż złą praktykę:",
                                        "options": [
                                                "Duże i małe litery",
                                                "Cyfry i znaki specjalne",
                                                "Długość minimum 12 znaków",
                                                "Wpisanie własnej daty urodzenia"
                                        ],
                                        "correctWord": "Wpisanie własnej daty urodzenia"
                                },
                                {
                                        "promptPl": "Kategoria: Popularne i bezpieczne przeglądarki internetowe. Wskaż intruza:",
                                        "options": [
                                                "Mozilla Firefox",
                                                "Google Chrome",
                                                "Microsoft Edge",
                                                "Kuchenka mikrofalowa"
                                        ],
                                        "correctWord": "Kuchenka mikrofalowa"
                                },
                                {
                                        "promptPl": "Kategoria: Zjawiska cyberprzemocy. Wskaż pozytywne zachowanie:",
                                        "options": [
                                                "Hejt w komentarzach",
                                                "Podszywanie się pod kolegę",
                                                "Rozsyłanie złośliwych memów",
                                                "Kulturalne wsparcie ofiary"
                                        ],
                                        "correctWord": "Kulturalne wsparcie ofiary"
                                },
                                {
                                        "promptPl": "Kategoria: Dane podlegające ścisłej ochronie (RODO). Wskaż informację jawną:",
                                        "options": [
                                                "Numer PESEL",
                                                "Adres zamieszkania",
                                                "Hasło do e-dziennika",
                                                "Imię postaci z bajki"
                                        ],
                                        "correctWord": "Imię postaci z bajki"
                                },
                                {
                                        "promptPl": "Kategoria: Metody uwierzytelniania użytkownika. Wskaż fałszywą metodę:",
                                        "options": [
                                                "Skan odcisku palca",
                                                "Kod SMS z banku",
                                                "Klucz sprzętowy U2F",
                                                "Wróżenie z fusów"
                                        ],
                                        "correctWord": "Wróżenie z fusów"
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
                        "titlePl": "Głośny Ptak [Spryciarz]: Synonimy Sprytu i Zmyłki",
                        "subtitlePl": "Bogactwo słownictwa określającego zręczność",
                        "descriptionPl": "Wskaż wyraz o przeciwnym lub zupełnie innym znaczeniu.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Synonimy słowa «sprytny». Wskaż wyraz oznaczający brak sprytu (antonym):",
                                        "options": [
                                                "Błyskotliwy",
                                                "Pomysłowy",
                                                "Przebiegły",
                                                "Naiwny"
                                        ],
                                        "correctWord": "Naiwny"
                                },
                                {
                                        "promptPl": "Kategoria: Określenia udanego podstępu lub fortelu. Wskaż intruza:",
                                        "options": [
                                                "Mistyfikacja",
                                                "Kamuflaż",
                                                "Zmyłka",
                                                "Przejrzystość"
                                        ],
                                        "correctWord": "Przejrzystość"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy bliskoznaczne do słowa «czujny». Wskaż wyraz oznaczający nieuwagę:",
                                        "options": [
                                                "Baczny",
                                                "Uważny",
                                                "Zaalarmowany",
                                                "Rozkojarzony"
                                        ],
                                        "correctWord": "Rozkojarzony"
                                },
                                {
                                        "promptPl": "Kategoria: Zdolności manualne i zręczność. Wskaż określenie niezgrabności:",
                                        "options": [
                                                "Zwinność",
                                                "Gibakość",
                                                "Precyzja",
                                                "Niezdarność"
                                        ],
                                        "correctWord": "Niezdarność"
                                },
                                {
                                        "promptPl": "Kategoria: Synonimy słowa «odkryć / zdemaskować». Wskaż wyraz oznaczający ukrywanie:",
                                        "options": [
                                                "Ujawnić",
                                                "Rozszyfrować",
                                                "Zdemaskować",
                                                "Zamaskować"
                                        ],
                                        "correctWord": "Zamaskować"
                                },
                                {
                                        "promptPl": "Kategoria: Poczucie dyskrecji i tajemnicy. Wskaż wyraz oznaczający gadatliwość:",
                                        "options": [
                                                "Tajemniczy",
                                                "Sekretny",
                                                "Poufny",
                                                "Rozgadany"
                                        ],
                                        "correctWord": "Rozgadany"
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
                        "titlePl": "Głośny Ptak [Spryciarz]: Słowotwórstwo i Przedrostki",
                        "subtitlePl": "Morfologia i funkcja przedrostków roz-, z-, od-, wy-",
                        "descriptionPl": "Wskaż wyraz, w którym cząstka początkowa NIE jest przedrostkiem.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Wyrazy z przedrostkiem «roz-» (oznaczającym podział lub ruch). Wskaż intruza:",
                                        "options": [
                                                "Rozbić",
                                                "Rozpisać",
                                                "Rozkodować",
                                                "Róża"
                                        ],
                                        "correctWord": "Róża"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z przedrostkiem zaprzeczającym «nie-» pisanym łącznie z przymiotnikiem. Wskaż intruza:",
                                        "options": [
                                                "Niełatwy",
                                                "Niepewny",
                                                "Niewielki",
                                                "Nie wiem (czasownik)"
                                        ],
                                        "correctWord": "Nie wiem (czasownik)"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z przedrostkiem «wy-» oznaczającym ruch na zewnątrz. Wskaż intruza:",
                                        "options": [
                                                "Wynieść",
                                                "Wyjść",
                                                "Wyskoczyć",
                                                "Wyspa"
                                        ],
                                        "correctWord": "Wyspa"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z przedrostkiem «pod-». Wskaż wyraz bez przedrostka:",
                                        "options": [
                                                "Podpisać",
                                                "Podsłuchać",
                                                "Podmienić",
                                                "Podłoga"
                                        ],
                                        "correctWord": "Podłoga"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy z przyrostkiem zdrabniającym «-ek» lub «-ik». Wskaż wyraz niezdrobniały:",
                                        "options": [
                                                "Kluczyk",
                                                "Bucik",
                                                "Nożyk",
                                                "Słownik"
                                        ],
                                        "correctWord": "Słownik"
                                },
                                {
                                        "promptPl": "Kategoria: Rdzeń słowotwórczy rodziny wyrazów «pis-». Wskaż wyraz obcy etymologicznie:",
                                        "options": [
                                                "Pisarz",
                                                "Pismo",
                                                "Podpis",
                                                "Pies"
                                        ],
                                        "correctWord": "Pies"
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
                        "titlePl": "Głośny Ptak [Spryciarz]: Śledztwa i Zagadki Lektur",
                        "subtitlePl": "Detektywistyczne motywy w literaturze CKE",
                        "descriptionPl": "Wskaż postać lub motyw niepasujący do tajemnicy literackiej.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Ślady zbrodni w «Balladynie» Juliusza Słowackiego. Wskaż fałszywy ślad:",
                                        "options": [
                                                "Krwawa plama na czole",
                                                "Porzucony dzban malin",
                                                "Nóż znaleziony w lesie",
                                                "Pozostawiony smartfon"
                                        ],
                                        "correctWord": "Pozostawiony smartfon"
                                },
                                {
                                        "promptPl": "Kategoria: Bohaterowie «Chłopców z Placu Broni» Ferenca Molnára. Wskaż postać z innej książki:",
                                        "options": [
                                                "Ernest Nemeczek",
                                                "Janosz Boka",
                                                "Feri Acz",
                                                "Staś Tarkowski"
                                        ],
                                        "correctWord": "Staś Tarkowski"
                                },
                                {
                                        "promptPl": "Kategoria: Atrybuty detektywa literackiego. Wskaż rekwizyt niepasujący:",
                                        "options": [
                                                "Lupa powiększająca",
                                                "Notes na dowody",
                                                "Ukryty dyktafon",
                                                "Kosa do zboża"
                                        ],
                                        "correctWord": "Kosa do zboża"
                                },
                                {
                                        "promptPl": "Kategoria: Podstępy i intrygi w «Zemście» Fredry. Wskaż wątek nieistniejący:",
                                        "options": [
                                                "Fałszywy testament Papkina",
                                                "Dyktowanie listu podstępem",
                                                "Spór o naprawę muru",
                                                "Konstrukcja rakiety kosmicznej"
                                        ],
                                        "correctWord": "Konstrukcja rakiety kosmicznej"
                                },
                                {
                                        "promptPl": "Kategoria: Przemiana wewnętrzna bohatera (motyw nawrócenia). Wskaż postać, która NIE uległa przemianie:",
                                        "options": [
                                                "Ebenezer Scrooge («Opowieść wigilijna»)",
                                                "Jacek Soplica («Pan Tadeusz»)",
                                                "Marek Winicjusz («Quo vadis»)",
                                                "Balladyna (do końca trwała w złu)"
                                        ],
                                        "correctWord": "Balladyna (do końca trwała w złu)"
                                },
                                {
                                        "promptPl": "Kategoria: Miejsca akcji lektur szkolnych. Wskaż fikcyjną planetę:",
                                        "options": [
                                                "Soplicowo",
                                                "Warszawa pod okupacją",
                                                "Zamek w Odrzykoniu",
                                                "Asteroida B-612"
                                        ],
                                        "correctWord": "Asteroida B-612"
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
                        "titlePl": "Głośny Ptak [Spryciarz]: Prawda a Manipulacja",
                        "subtitlePl": "Środki perswazji i demaskowanie blefu",
                        "descriptionPl": "Wskaż pojęcie oznaczające uczciwość pośród technik manipulacyjnych.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Metody manipulacji informacją. Wskaż rzetelną metodę dziennikarską:",
                                        "options": [
                                                "Sensacyjny clickbait w tytule",
                                                "Wyrwanie cytatu ze zdania z kontekstu",
                                                "Fabrykowanie fałszywych zdjęć w sieci",
                                                "Weryfikacja w niezależnych źródłach"
                                        ],
                                        "correctWord": "Weryfikacja w niezależnych źródłach"
                                },
                                {
                                        "promptPl": "Kategoria: Prawne konsekwencje oszustwa internetowego. Wskaż pojęcie pozytywne:",
                                        "options": [
                                                "Wysoka grzywna finansowa",
                                                "Kara pozbawienia wolności",
                                                "Trwała blokada konta w sieci",
                                                "Oficjalna nagroda za uczciwość"
                                        ],
                                        "correctWord": "Oficjalna nagroda za uczciwość"
                                },
                                {
                                        "promptPl": "Kategoria: Językowe chwyty reklamowe. Wskaż neutralny fakt statystyczny:",
                                        "options": [
                                                "«Jedyny taki na świecie!»",
                                                "«Musisz to mieć natychmiast!»",
                                                "«Cudowny eliksir na wszystko!»",
                                                "«Produkt zawiera 100 ml wody»"
                                        ],
                                        "correctWord": "«Produkt zawiera 100 ml wody»"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy wiarygodnego źródła wiedzy. Wskaż cechę podejrzaną:",
                                        "options": [
                                                "Podpisany autor z tytułem naukowym",
                                                "Aktualna data publikacji danych",
                                                "Rzetelna bibliografia i odnośniki",
                                                "Brak autora i rażące błędy pisowni"
                                        ],
                                        "correctWord": "Brak autora i rażące błędy pisowni"
                                },
                                {
                                        "promptPl": "Kategoria: Reakcje na próbę wyłudzenia kodu BLIK. Wskaż niebezpieczną reakcję:",
                                        "options": [
                                                "Zadzwonienie do kolegi z pytaniem, czy to on",
                                                "Zgłoszenie wiadomości do CERT Polska",
                                                "Natychmiastowe zablokowanie kontaktu",
                                                "Podanie kodu BLIK bez zastanowienia"
                                        ],
                                        "correctWord": "Podanie kodu BLIK bez zastanowienia"
                                },
                                {
                                        "promptPl": "Kategoria: Zasady asertywnej komunikacji. Wskaż zachowanie uległe:",
                                        "options": [
                                                "Mówienie spokojnym głosem",
                                                "Jasne wyrażenie odmowy",
                                                "Utrzymywanie kontaktu wzrokowego",
                                                "Zgadzanie się na wszystko ze strachu"
                                        ],
                                        "correctWord": "Zgadzanie się na wszystko ze strachu"
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
                        "titlePl": "Głośny Ptak [Spryciarz]: Frazeologizmy Czujności",
                        "subtitlePl": "Związki frazeologiczne o uwadze i sprycie",
                        "descriptionPl": "Wskaż związek frazeologiczny o zupełnie innym znaczeniu.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Związki frazeologiczne oznaczające najwyższą czujność. Wskaż intruza (spanie/nieuwaga):",
                                        "options": [
                                                "Mieć oczy dookoła głowy",
                                                "Trzymać rękę na pulsie",
                                                "Być czujnym jak ważka",
                                                "Spać snem sprawiedliwego"
                                        ],
                                        "correctWord": "Spać snem sprawiedliwego"
                                },
                                {
                                        "promptPl": "Kategoria: Frazeologizmy oznaczające spryt i radzenie sobie w trudnościach. Wskaż bezradność:",
                                        "options": [
                                                "Wypłynąć na suchy brzeg",
                                                "Dać sobie radę",
                                                "Wyjść obronną ręką",
                                                "Rozłożyć bezradnie ręce"
                                        ],
                                        "correctWord": "Rozłożyć bezradnie ręce"
                                },
                                {
                                        "promptPl": "Kategoria: Frazeologizmy związane z oszustwem i podstępem. Wskaż uczciwe działanie:",
                                        "options": [
                                                "Wyprowadzić w pole",
                                                "Nabić w butelkę",
                                                "Okręcić wokół palca",
                                                "Grać w otwarte karty"
                                        ],
                                        "correctWord": "Grać w otwarte karty"
                                },
                                {
                                        "promptPl": "Kategoria: Przysłowia o ostrożności życiowej. Wskaż przysłowie zachęcające do bezmyślnego ryzyka:",
                                        "options": [
                                                "Lepszy wróbel w garści niż gołąb na dachu",
                                                "Mądry Polak po szkodzie w swoim działaniu",
                                                "Ostrożność jest zawsze matką powodzenia",
                                                "Hulaj dusza, piekła nie ma na tym świecie"
                                        ],
                                        "correctWord": "Hulaj dusza, piekła nie ma na tym świecie"
                                },
                                {
                                        "promptPl": "Kategoria: Słowa oznaczające szybkie ukrycie się. Wskaż wyraz oznaczający ujawnienie się:",
                                        "options": [
                                                "Zakamuflować",
                                                "Zataić",
                                                "Schować",
                                                "Ogłosić publicznie"
                                        ],
                                        "correctWord": "Ogłosić publicznie"
                                },
                                {
                                        "promptPl": "Kategoria: Określenia na tajną wiadomość. Wskaż formę całkowicie jawną:",
                                        "options": [
                                                "Kryptogram",
                                                "Szyfrogram",
                                                "Kod binarny",
                                                "Ogłoszenie na tablicy"
                                        ],
                                        "correctWord": "Ogłoszenie na tablicy"
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
        ],
        "robot": [
                {
                        "titlePl": "Głośny Ptak [Robot]: Klasyfikacja Części Mowy",
                        "subtitlePl": "Części mowy odmienne a nieodmienne",
                        "descriptionPl": "Ptak zakłóca binarne przetwarzanie składni! Wskaż intruza.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Odmienne części mowy. Wskaż część mowy NIEODMIENNĄ (intruz):",
                                        "options": [
                                                "Rzeczownik",
                                                "Czasownik",
                                                "Przymiotnik",
                                                "Przysłówek"
                                        ],
                                        "correctWord": "Przysłówek"
                                },
                                {
                                        "promptPl": "Kategoria: Nieodmienne części mowy. Wskaż część mowy ODMIENNĄ:",
                                        "options": [
                                                "Spójnik",
                                                "Przyimek",
                                                "Partykuła",
                                                "Liczebnik"
                                        ],
                                        "correctWord": "Liczebnik"
                                },
                                {
                                        "promptPl": "Kategoria: Przypadki gramatyczne w języku polskim. Wskaż formę niebędącą przypadkiem:",
                                        "options": [
                                                "Mianownik",
                                                "Dopełniacz",
                                                "Narzędnik",
                                                "Bezokolicznik"
                                        ],
                                        "correctWord": "Bezokolicznik"
                                },
                                {
                                        "promptPl": "Kategoria: Części mowy odmieniające się przez osoby. Wskaż jedyną taką część mowy:",
                                        "options": [
                                                "Rzeczownik",
                                                "Przymiotnik",
                                                "Czasownik",
                                                "Liczebnik"
                                        ],
                                        "correctWord": "Czasownik"
                                },
                                {
                                        "promptPl": "Kategoria: Przyimki proste (wymagające rzeczownika). Wskaż spójnik (intruz):",
                                        "options": [
                                                "W",
                                                "Na",
                                                "Pod",
                                                "Ponieważ"
                                        ],
                                        "correctWord": "Ponieważ"
                                },
                                {
                                        "promptPl": "Kategoria: Zaimki osobowe (ja, ty, on, my, wy, oni). Wskaż zaimek pytajny:",
                                        "options": [
                                                "Ja",
                                                "Ty",
                                                "My",
                                                "Kto?"
                                        ],
                                        "correctWord": "Kto?"
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
                        "titlePl": "Głośny Ptak [Robot]: Części Zdania (Składnia)",
                        "subtitlePl": "Podmiot, orzeczenie, przydawka, dopełnienie, okolicznik",
                        "descriptionPl": "Wskaż element niespełniający roli w strukturze zdania pojedynczego.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Główne części zdania tworzące związek główny. Wskaż część podrzędną:",
                                        "options": [
                                                "Podmiot gramatyczny",
                                                "Orzeczenie czasownikowe",
                                                "Orzeczenie imienne",
                                                "Przydawka przymiotna"
                                        ],
                                        "correctWord": "Przydawka przymiotna"
                                },
                                {
                                        "promptPl": "Kategoria: Okoliczniki określające czasownik. Wskaż przydawkę (intruz):",
                                        "options": [
                                                "Okolicznik czasu (kiedy?)",
                                                "Okolicznik miejsca (gdzie?)",
                                                "Okolicznik sposobu (jak?)",
                                                "Przydawka (jaki?)"
                                        ],
                                        "correctWord": "Przydawka (jaki?)"
                                },
                                {
                                        "promptPl": "Kategoria: Rodzaje podmiotu w zdaniu. Wskaż pojęcie spoza składni podmiotu:",
                                        "options": [
                                                "Podmiot gramatyczny",
                                                "Podmiot logiczny",
                                                "Podmiot domyślny",
                                                "Akapit"
                                        ],
                                        "correctWord": "Akapit"
                                },
                                {
                                        "promptPl": "Kategoria: Zdania pojedyncze bezpodmiotowe (np. Grzmi, Świtą, Boli mnie). Wskaż zdanie z jawnym podmiotem:",
                                        "options": [
                                                "Zmierzcha się.",
                                                "W klasie było cicho.",
                                                "Brakowało chleba.",
                                                "Uczeń napisał sprawdzian."
                                        ],
                                        "correctWord": "Uczeń napisał sprawdzian."
                                },
                                {
                                        "promptPl": "Kategoria: Równoważniki zdań (wypowiedzenia bez orzeczenia). Wskaż zdanie właściwe z czasownikiem:",
                                        "options": [
                                                "Szybko do klasy!",
                                                "Uwaga na zakręcie!",
                                                "Cisza na sali!",
                                                "Dzieci weszły do klasy."
                                        ],
                                        "correctWord": "Dzieci weszły do klasy."
                                },
                                {
                                        "promptPl": "Kategoria: Związki wyrazowe w zdaniu. Wskaż związek nieistniejący w gramatyce:",
                                        "options": [
                                                "Związek zgody",
                                                "Związek rządu",
                                                "Związek przynależności",
                                                "Związek bluetooth"
                                        ],
                                        "correctWord": "Związek bluetooth"
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
                        "titlePl": "Głośny Ptak [Robot]: Typy Zdań Złożonych",
                        "subtitlePl": "Współrzędne (łączne, rozłączne, przeciwstawne) i podrzędne",
                        "descriptionPl": "Zidentyfikuj rodzaj zespolenia zdań składowych.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Spójniki zdań współrzędnych łącznych (wykres ...---...). Wskaż spójnik przeciwstawny:",
                                        "options": [
                                                "I",
                                                "Oraz",
                                                "Ani",
                                                "Ale"
                                        ],
                                        "correctWord": "Ale"
                                },
                                {
                                        "promptPl": "Kategoria: Spójniki zdań współrzędnych rozłącznych (wykres ...<...?...>...). Wskaż intruza:",
                                        "options": [
                                                "Albo",
                                                "Lub",
                                                "Czy",
                                                "Ponieważ"
                                        ],
                                        "correctWord": "Ponieważ"
                                },
                                {
                                        "promptPl": "Kategoria: Spójniki zdań współrzędnych wynikowych (...>...>...). Wskaż intruza:",
                                        "options": [
                                                "Więc",
                                                "Zatem",
                                                "Toteż",
                                                "Chociaż"
                                        ],
                                        "correctWord": "Chociaż"
                                },
                                {
                                        "promptPl": "Kategoria: Zaimki i spójniki podrzędne (wymagające przecinka). Wskaż spójnik współrzędny łączny:",
                                        "options": [
                                                "Który",
                                                "Gdyż",
                                                "Ponieważ",
                                                "I"
                                        ],
                                        "correctWord": "I"
                                },
                                {
                                        "promptPl": "Kategoria: Zdania podrzędne przydawkowe (odpowiadają na pytanie: jaki?). Wskaż zdanie okolicznikowe miejsca:",
                                        "options": [
                                                "Książka, którą czytam...",
                                                "Człowiek, który wszedł...",
                                                "Dom, w którym mieszkam...",
                                                "Poszedłem tam, gdzie kwitną róże."
                                        ],
                                        "correctWord": "Poszedłem tam, gdzie kwitną róże."
                                },
                                {
                                        "promptPl": "Kategoria: Znaki interpunkcyjne oddzielające zdania. Wskaż znak niebędący znakiem przestankowym:",
                                        "options": [
                                                "Przecinek",
                                                "Średnik",
                                                "Myślnik",
                                                "Gwiazdka klawiatury"
                                        ],
                                        "correctWord": "Gwiazdka klawiatury"
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
                        "titlePl": "Głośny Ptak [Robot]: Stylistyka i Rejestry Języka",
                        "subtitlePl": "Styl potoczny, naukowy, urzędowy i artystyczny",
                        "descriptionPl": "Wskaż sformułowanie niepasujące do danego stylu wypowiedzi.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Zwroty typowe dla stylu urzędowego. Wskaż potoczny kolokwializm:",
                                        "options": [
                                                "Niniejszym zawiadamiam...",
                                                "W odpowiedzi na pismo z dnia...",
                                                "Zgodnie z regulaminem...",
                                                "Siema ziomek, co tam u ciebie?"
                                        ],
                                        "correctWord": "Siema ziomek, co tam u ciebie?"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy stylu naukowego. Wskaż cechę wykluczoną ze stylu naukowego:",
                                        "options": [
                                                "Precyzyjna terminologia",
                                                "Obiektywizm całego wywodu",
                                                "Odwołania do badań i danych",
                                                "Emocjonalne wykrzykniki i spory"
                                        ],
                                        "correctWord": "Emocjonalne wykrzykniki i spory"
                                },
                                {
                                        "promptPl": "Kategoria: Środki charakterystyczne dla stylu artystycznego. Wskaż tabelę danych:",
                                        "options": [
                                                "Metafory i epitety",
                                                "Rymy i rytmika wiersza",
                                                "Wieloznaczność i symbole",
                                                "Wykres w arkuszu kalkulacyjnym"
                                        ],
                                        "correctWord": "Wykres w arkuszu kalkulacyjnym"
                                },
                                {
                                        "promptPl": "Kategoria: Formy korespondencji formalnej. Wskaż luźną wiadomość na czacie:",
                                        "options": [
                                                "List motywacyjny",
                                                "Podanie do Dyrektora",
                                                "Życiorys (CV)",
                                                "Snap ze śmieszną miną"
                                        ],
                                        "correctWord": "Snap ze śmieszną miną"
                                },
                                {
                                        "promptPl": "Kategoria: Poprawne powitania w oficjalnym e-mailu do nauczyciela. Wskaż powitanie niedopuszczalne:",
                                        "options": [
                                                "Szanowny Panie Profesorze,",
                                                "Szanowna Pani,",
                                                "Dzień dobry,",
                                                "Elo, co zadałeś?"
                                        ],
                                        "correctWord": "Elo, co zadałeś?"
                                },
                                {
                                        "promptPl": "Kategoria: Zakończenie oficjalnego podania. Wskaż nieformalne pożegnanie:",
                                        "options": [
                                                "Z poważaniem",
                                                "Z wyrazami szacunku",
                                                "Łączę wyrazy szacunku",
                                                "Nara, do zoba!"
                                        ],
                                        "correctWord": "Nara, do zoba!"
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
                        "titlePl": "Głośny Ptak [Robot]: Błędy Logiczne i Językowe",
                        "subtitlePl": "Pleonazmy, kontaminacje i błędy frazeologiczne",
                        "descriptionPl": "Wskaż wyrażenie bezbłędne wśród niepoprawnych konstrukcji.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Błędne pleonazmy (masło maślane). Wskaż konstrukcję w pełni POPRAWNĄ:",
                                        "options": [
                                                "Akwen wodny",
                                                "Cofać się w tył",
                                                "Młody młodzieniec",
                                                "Głębokie jezioro"
                                        ],
                                        "correctWord": "Głębokie jezioro"
                                },
                                {
                                        "promptPl": "Kategoria: Błędy fleksyjne i słownikowe. Wskaż poprawną formę wyrazu «włączać»:",
                                        "options": [
                                                "Włanczać",
                                                "Włanczają",
                                                "Włancznik",
                                                "Włączać"
                                        ],
                                        "correctWord": "Włączać"
                                },
                                {
                                        "promptPl": "Kategoria: Błędne formy zaimków. Wskaż poprawną formę biernika zaimka «ona» po przyimku:",
                                        "options": [
                                                "Czekam na nią.",
                                                "Czekam na nią",
                                                "Czekam na ją.",
                                                "Czekam na jom."
                                        ],
                                        "correctWord": "Czekam na nią."
                                },
                                {
                                        "promptPl": "Kategoria: Niepoprawne zbitki frazeologiczne. Wskaż poprawny, nienaruszony związek:",
                                        "options": [
                                                "Odegrać znaczenie (zamiast rolę)",
                                                "Mieć wpływ (poprawne)",
                                                "Odnieść rolę (błąd)",
                                                "Poświęcić uwagę (poprawne)"
                                        ],
                                        "correctWord": "Odegrać znaczenie (zamiast rolę)"
                                },
                                {
                                        "promptPl": "Kategoria: Błędy składniowe. Wskaż poprawne połączenie liczebnika z rzeczownikiem:",
                                        "options": [
                                                "Dwa ręce (błąd)",
                                                "Dwa dzieci (błąd)",
                                                "Dwoje drzwi (poprawne)",
                                                "Dwa drzwi (błąd)"
                                        ],
                                        "correctWord": "Dwoje drzwi (poprawne)"
                                },
                                {
                                        "promptPl": "Kategoria: Pleonazmy czasowe. Wskaż wyrażenie POPRAWNE:",
                                        "options": [
                                                "Okres czasu",
                                                "W miesiącu marcu",
                                                "W roku 2024 roku",
                                                "Wiosną tego roku"
                                        ],
                                        "correctWord": "Wiosną tego roku"
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
                        "titlePl": "Głośny Ptak [Robot]: Algorytmy Interpunkcyjne",
                        "subtitlePl": "Zasady użycia dwukropka, cudzysłowu i średnika",
                        "descriptionPl": "Wskaż niepoprawne lub obce zastosowanie znaku interpunkcyjnego.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Funkcje dwukropka w zdaniu. Wskaż funkcję błędną:",
                                        "options": [
                                                "Zapowiedź wyliczenia",
                                                "Wprowadzenie mowy dialogu",
                                                "Wyjaśnienie poprzedniej myśli",
                                                "Zakończenie pytania w zdaniu"
                                        ],
                                        "correctWord": "Zakończenie pytania w zdaniu"
                                },
                                {
                                        "promptPl": "Kategoria: Zastosowanie cudzysłowu. Wskaż sytuację, w której cudzysłów jest BŁĘDNY:",
                                        "options": [
                                                "Wydzielenie dosłownego cytatu",
                                                "Wskazanie tytułu czasopisma",
                                                "Wskazanie ironii w wypowiedzi",
                                                "Zastąpienie kropki na końcu"
                                        ],
                                        "correctWord": "Zastąpienie kropki na końcu"
                                },
                                {
                                        "promptPl": "Kategoria: Funkcje myślnika (pauzy). Wskaż intruza:",
                                        "options": [
                                                "Wprowadzenie kwestii dialogowej",
                                                "Wydzielenie wtrącenia myśli",
                                                "Zastąpienie domyślnego słowa",
                                                "Zastąpienie kropki na końcu tekstu"
                                        ],
                                        "correctWord": "Zastąpienie kropki na końcu tekstu"
                                },
                                {
                                        "promptPl": "Kategoria: Reguły stawiania przecinka przy imiesłowach przysłówkowych (-ąc, -wszy, -łszy). Wskaż fałsz:",
                                        "options": [
                                                "Zdanie z imiesłowem zawsze wydzielamy przecinkiem",
                                                "Imiesłów przysłówkowy tworzy równoważnik zdania",
                                                "Oddziela się przecinkiem bez względu na pozycję w zdaniu",
                                                "Przy imiesłowach nigdy nie wolno stawiać żadnych znaków"
                                        ],
                                        "correctWord": "Przy imiesłowach nigdy nie wolno stawiać żadnych znaków"
                                },
                                {
                                        "promptPl": "Kategoria: Zastosowanie nawiasu w tekście. Wskaż intruza:",
                                        "options": [
                                                "Podanie informacji dodatkowej",
                                                "Podanie daty życia autora",
                                                "Wskazanie źródła cytatu",
                                                "Wyróżnienie czasownika"
                                        ],
                                        "correctWord": "Wyróżnienie czasownika"
                                },
                                {
                                        "promptPl": "Kategoria: Wielka litera w pisowni polskiej. Wskaż wyraz, który piszemy MAŁĄ literą:",
                                        "options": [
                                                "Polak (obywatel kraju)",
                                                "Warszawa (stolica)",
                                                "Tatry (pasmo gór)",
                                                "polski (przymiotnik)"
                                        ],
                                        "correctWord": "polski (przymiotnik)"
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
        ],
        "inventor": [
                {
                        "titlePl": "Głośny Ptak [Wynalazca]: Przyrządy i Wynalazki",
                        "subtitlePl": "Aparatura badawcza i innowacje techniczne",
                        "descriptionPl": "Ptak buszuje w pracowni inżyniera! Wskaż intruza.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Optyczne przyrządy badawcze. Wskaż urządzenie nieoptyczne:",
                                        "options": [
                                                "Mikroskop elektronowy",
                                                "Teleskop astronomiczny",
                                                "Lupa powiększająca",
                                                "Młot pneumatyczny"
                                        ],
                                        "correctWord": "Młot pneumatyczny"
                                },
                                {
                                        "promptPl": "Kategoria: Przyrządy do pomiaru wielkości fizycznych. Wskaż intruza:",
                                        "options": [
                                                "Woltomierz (napięcie)",
                                                "Termometr (temperatura)",
                                                "Barometr (ciśnienie)",
                                                "Doniczka ceramiczna"
                                        ],
                                        "correctWord": "Doniczka ceramiczna"
                                },
                                {
                                        "promptPl": "Kategoria: Wynalazki, które zrewolucjonizowały komunikację na odległość. Wskaż intruza:",
                                        "options": [
                                                "Telegraf",
                                                "Telefon",
                                                "Internet",
                                                "Koło garncarskie"
                                        ],
                                        "correctWord": "Koło garncarskie"
                                },
                                {
                                        "promptPl": "Kategoria: Źródła prądu elektrycznego. Wskaż odbiornik prądu:",
                                        "options": [
                                                "Bateria galwaniczna",
                                                "Akumulator",
                                                "Panel fotowoltaiczny",
                                                "Żarówka LED"
                                        ],
                                        "correctWord": "Żarówka LED"
                                },
                                {
                                        "promptPl": "Kategoria: Materiały przewodzące prąd (przewodniki). Wskaż izolator (intruz):",
                                        "options": [
                                                "Miedź",
                                                "Aluminium",
                                                "Srebro",
                                                "Guma izolacyjna"
                                        ],
                                        "correctWord": "Guma izolacyjna"
                                },
                                {
                                        "promptPl": "Kategoria: Elementy mechanizmu zegarowego. Wskaż element obcy:",
                                        "options": [
                                                "Koło zębate",
                                                "Sprężyna napędowa",
                                                "Wahadło",
                                                "Kłębek wełny"
                                        ],
                                        "correctWord": "Kłębek wełny"
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
                        "titlePl": "Głośny Ptak [Wynalazca]: Słowotwórstwo Neologizmów",
                        "subtitlePl": "Cząstki słowotwórcze: przedrostki, przyrostki i wrostki",
                        "descriptionPl": "Wskaż formę o innej budowie morfologicznej.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Złożenia z wrostkiem «-o-». Wskaż wyraz prosty bez wrostka:",
                                        "options": [
                                                "Parowóz",
                                                "Samochód",
                                                "Wiatromierz",
                                                "Lampa"
                                        ],
                                        "correctWord": "Lampa"
                                },
                                {
                                        "promptPl": "Kategoria: Zrosty (wyrazy powstałe ze zrośnięcia bez wrostka). Wskaż wyraz z wrostkiem:",
                                        "options": [
                                                "Białystok",
                                                "Wielkanoc",
                                                "Wiarygodny",
                                                "Żywopłot (żywo-płot)"
                                        ],
                                        "correctWord": "Żywopłot (żywo-płot)"
                                },
                                {
                                        "promptPl": "Kategoria: Nazwy wykonawców czynności zakończone na «-nik». Wskaż nazwę narzędzia:",
                                        "options": [
                                                "Pracownik",
                                                "Kierownik",
                                                "Ratownik",
                                                "Śrubokręt"
                                        ],
                                        "correctWord": "Śrubokręt"
                                },
                                {
                                        "promptPl": "Kategoria: Nazwy narzędzi i przyrządów z formantem «-arka / -acz». Wskaż nazwę osoby:",
                                        "options": [
                                                "Koparka",
                                                "Spawarka",
                                                "Podgrzewacz",
                                                "Wynalazca"
                                        ],
                                        "correctWord": "Wynalazca"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy pochodne od słowa «światło». Wskaż wyraz obcy z innej rodziny:",
                                        "options": [
                                                "Świetlny",
                                                "Naświetlać",
                                                "Świetlik",
                                                "Świstak"
                                        ],
                                        "correctWord": "Świstak"
                                },
                                {
                                        "promptPl": "Kategoria: Przymiotniki z formantem «-alny» określające możliwość (np. wykonalny). Wskaż intruza:",
                                        "options": [
                                                "Zmywalny",
                                                "Rozpuszczalny",
                                                "Naprawialny",
                                                "Drewniany"
                                        ],
                                        "correctWord": "Drewniany"
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
                        "titlePl": "Głośny Ptak [Wynalazca]: Podróże i Odkrycia w Lekturach",
                        "subtitlePl": "Wokulski, Lem, Verne i motywy podróżnicze CKE",
                        "descriptionPl": "Wskaż element niepasujący do kontekstu powieści o odkryciach.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Wynalazki i projekty w twórczości Stanisława Lema. Wskaż pojęcie ze średniowiecza:",
                                        "options": [
                                                "Trurl i Klapaucjusz (konstruktorzy)",
                                                "Opton (przenośny czytnik e-booków)",
                                                "Elektrybałt (maszyna pisząca wiersze)",
                                                "Tradycyjny kołczan z ostrymi strzałami"
                                        ],
                                        "correctWord": "Tradycyjny kołczan z ostrymi strzałami"
                                },
                                {
                                        "promptPl": "Kategoria: Geografia podróży Stasia i Nel w «W pustyni i w puszczy». Wskaż miasto europejskie:",
                                        "options": [
                                                "Chartum",
                                                "Port Said",
                                                "Faszoda",
                                                "Paryż"
                                        ],
                                        "correctWord": "Paryż"
                                },
                                {
                                        "promptPl": "Kategoria: Zwierzęta afrykańskie uratowane lub spotkane przez Stasia. Wskaż pingwina arktycznego:",
                                        "options": [
                                                "Słoń King",
                                                "Pies Saba",
                                                "Wielbłąd",
                                                "Pingwin cesarski"
                                        ],
                                        "correctWord": "Pingwin cesarski"
                                },
                                {
                                        "promptPl": "Kategoria: Postacie uczonych i pasjonatów wiedzy w lekturach. Wskaż skrajnego ignoranta:",
                                        "options": [
                                                "Profesor Geist («Lalka»)",
                                                "Stanisław Wokulski («Lalka»)",
                                                "Pilot z «Małego Księcia»",
                                                "Ślepy los bez żadnej wiedzy"
                                        ],
                                        "correctWord": "Ślepy los bez żadnej wiedzy"
                                },
                                {
                                        "promptPl": "Kategoria: Wyposażenie podróżnika przez pustynię. Wskaż przedmiot zbędny i szkodliwy:",
                                        "options": [
                                                "Chininę na febrę",
                                                "Manierkę ze świeżą wodą",
                                                "Sztucer do obrony",
                                                "Żelazko do prasowania koszul"
                                        ],
                                        "correctWord": "Żelazko do prasowania koszul"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy charakteru młodego odkrywcy. Wskaż cechę destrukcyjną:",
                                        "options": [
                                                "Zaradność w trudnych warunkach",
                                                "Opiekuńczość wobec słabszych",
                                                "Znajomość przyrody i geografii",
                                                "Panika i porzucenie przyjaciół"
                                        ],
                                        "correctWord": "Panika i porzucenie przyjaciół"
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
                        "titlePl": "Głośny Ptak [Wynalazca]: Pisownia «NIE» z Częściami Mowy",
                        "subtitlePl": "Łącznie czy rozdzielnie – zasady ortograficzne",
                        "descriptionPl": "Wskaż wyraz, który łamie zasadę łącznej lub rozdzielnej pisowni z «nie».",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» ŁĄCZNIE z przymiotnikami w stopniu równym. Wskaż pisownię rozdzielną (błąd w grupie):",
                                        "options": [
                                                "Niewielki (łącznie)",
                                                "Niedrogi (łącznie)",
                                                "Nieznany (łącznie)",
                                                "Nie mały (błędnie)"
                                        ],
                                        "correctWord": "Nie mały (błędnie)"
                                },
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» ROZDZIELNIE z czasownikami. Wskaż czasownik pisany łącznie (wyjątek):",
                                        "options": [
                                                "Nie wiem (osobno)",
                                                "Nie umiem (osobno)",
                                                "Nie widzę (osobno)",
                                                "Nienawidzić (łącznie)"
                                        ],
                                        "correctWord": "Nienawidzić (łącznie)"
                                },
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» ŁĄCZNIE z rzeczownikami. Wskaż konstrukcję pisaną rozdzielnie:",
                                        "options": [
                                                "Niewiedza",
                                                "Niebezpieczeństwo",
                                                "Niedokładność",
                                                "Nie ja (zaimek)"
                                        ],
                                        "correctWord": "Nie ja (zaimek)"
                                },
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» z przysłówkami odprzymiotnikowymi w stopniu równym (łącznie). Wskaż przysłówek niespójny:",
                                        "options": [
                                                "Niedaleko (łącznie)",
                                                "Niedobrze (łącznie)",
                                                "Niełatwo (łącznie)",
                                                "Nie jutro (osobno)"
                                        ],
                                        "correctWord": "Nie jutro (osobno)"
                                },
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» z przymiotnikami w stopniu wyższym (ROZDZIELNIE). Wskaż błędny zapis łączny:",
                                        "options": [
                                                "Nie lepszy (osobno)",
                                                "Nie większy (osobno)",
                                                "Nie gorszy (osobno)",
                                                "Nielepszy (błędnie)"
                                        ],
                                        "correctWord": "Nielepszy (błędnie)"
                                },
                                {
                                        "promptPl": "Kategoria: Pisownia «nie» z liczebnikami (zawsze rozdzielnie). Wskaż intruza zapisanego łącznie:",
                                        "options": [
                                                "Nie jeden (liczebnik)",
                                                "Nie dwa (liczebnik)",
                                                "Nie pierwszy (porządkowy)",
                                                "Niejeden (jako «wielu»)"
                                        ],
                                        "correctWord": "Niejeden (jako «wielu»)"
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
                        "titlePl": "Głośny Ptak [Wynalazca]: Materiały i Właściwości Ciał",
                        "subtitlePl": "Fizyczne i chemiczne przymiotniki materii",
                        "descriptionPl": "Wskaż cechę niepasującą do właściwości danego materiału.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Właściwości metali szlachetnych (np. złoto, platyna). Wskaż cechę sprzeczną:",
                                        "options": [
                                                "Dobra kowalność i plastyczność",
                                                "Brak korozji pod wpływem tlenu",
                                                "Wysoki naturalny połysk kruszcu",
                                                "Kruchość i podatność na rozbicie"
                                        ],
                                        "correctWord": "Kruchość i podatność na rozbicie"
                                },
                                {
                                        "promptPl": "Kategoria: Właściwości szkła optycznego. Wskaż cechę intruza:",
                                        "options": [
                                                "Przezroczystość",
                                                "Zdolność załamywania światła",
                                                "Gładka powierzchnia",
                                                "Całkowita nieprzejrzystość"
                                        ],
                                        "correctWord": "Całkowita nieprzejrzystość"
                                },
                                {
                                        "promptPl": "Kategoria: Właściwości ciał w stanie ciekłym. Wskaż cechę ciała stałego:",
                                        "options": [
                                                "Przyjmowanie kształtu naczynia",
                                                "Swobodna płynność cząsteczek",
                                                "Bardzo trudna ściśliwość cieczy",
                                                "Własny, stały i sztywny kształt"
                                        ],
                                        "correctWord": "Własny, stały i sztywny kształt"
                                },
                                {
                                        "promptPl": "Kategoria: Materiały ulegające biodegradacji w środowisku. Wskaż tworzywo sztuczne:",
                                        "options": [
                                                "Kora drzewna",
                                                "Papier z makulatury",
                                                "Liście dębowe",
                                                "Folia polietylenowa"
                                        ],
                                        "correctWord": "Folia polietylenowa"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy magnesu trwałego. Wskaż fałszywą właściwość:",
                                        "options": [
                                                "Posiadanie bieguna N oraz S",
                                                "Przyciąganie przedmiotów z żelaza",
                                                "Silne oddziaływanie na odległość",
                                                "Świecenie fioletem w ciemności"
                                        ],
                                        "correctWord": "Świecenie fioletem w ciemności"
                                },
                                {
                                        "promptPl": "Kategoria: Gazy wchodzące w skład czystego powietrza. Wskaż substancję stałą:",
                                        "options": [
                                                "Azot (ok. 78%)",
                                                "Tlen (ok. 21%)",
                                                "Argon (ok. 1%)",
                                                "Kawałek granitu"
                                        ],
                                        "correctWord": "Kawałek granitu"
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
                        "titlePl": "Głośny Ptak [Wynalazca]: Ekologia i OZE",
                        "subtitlePl": "Czysta energia i ochrona zasobów planety",
                        "descriptionPl": "Wskaż czynnik zanieczyszczający środowisko pośród technologii ekologicznych.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Odnawialne źródła energii (OZE). Wskaż paliwo kopalne (intruz):",
                                        "options": [
                                                "Odnawialna energia wiatrowa",
                                                "Energia słoneczna ze słońca",
                                                "Odnawialna energia geotermalna",
                                                "Kopalny węgiel kamienny ze złóż"
                                        ],
                                        "correctWord": "Kopalny węgiel kamienny ze złóż"
                                },
                                {
                                        "promptPl": "Kategoria: Kolory pojemników na segregację odpadów w Polsce. Wskaż kolor nieprzypisany do frakcji:",
                                        "options": [
                                                "Niebieski (papier)",
                                                "Żółty (metale i tworzywa)",
                                                "Zielony (szkło)",
                                                "Różowy w kropki"
                                        ],
                                        "correctWord": "Różowy w kropki"
                                },
                                {
                                        "promptPl": "Kategoria: Działania zmniejszające ślad węglowy. Wskaż działanie szkodliwe dla atmosfery:",
                                        "options": [
                                                "Jazda na rowerze do szkoły",
                                                "Gaszenie światła w pustym pokoju",
                                                "Picie wody z kranu w bidonie",
                                                "Palenie starych opon w ognisku"
                                        ],
                                        "correctWord": "Palenie starych opon w ognisku"
                                },
                                {
                                        "promptPl": "Kategoria: Zasada 3R (Reduce, Reuse, Recycle). Wskaż postępowanie sprzeczne:",
                                        "options": [
                                                "Ograniczanie zbędnych zakupów",
                                                "Ponowne użycie toreb wielorazowych",
                                                "Oddawanie plastiku do przetworzenia",
                                                "Wyrzucanie sprawnego sprzętu po tygodniu"
                                        ],
                                        "correctWord": "Wyrzucanie sprawnego sprzętu po tygodniu"
                                },
                                {
                                        "promptPl": "Kategoria: Zagrożenia dla biosfery Ziemi. Wskaż zjawisko dobroczynne dla przyrody:",
                                        "options": [
                                                "Kwaśne deszcze",
                                                "Dziura ozonowa",
                                                "Smog wielkomiejski",
                                                "Zalesianie nieużytków"
                                        ],
                                        "correctWord": "Zalesianie nieużytków"
                                },
                                {
                                        "promptPl": "Kategoria: Eko-nawyki w szkole. Wskaż marnotrawstwo:",
                                        "options": [
                                                "Zbiórka zużytych baterii do pojemnika",
                                                "Zgniatanie pustych butelek plastikowych",
                                                "Dwustronny druk notatek na zajęcia",
                                                "Zostawianie odkręconego kranu z wodą"
                                        ],
                                        "correctWord": "Zostawianie odkręconego kranu z wodą"
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
        ],
        "witch": [
                {
                        "titlePl": "Głośny Ptak [Wiedźma]: Środki Poetyckie i Stylistyka",
                        "subtitlePl": "Środki stylistyczne: metafora, epitet, apostrofa, personifikacja",
                        "descriptionPl": "Ptak rozprasza poetycki nastrój! Wskaż intruza stylistycznego.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Środki stylistyczne oparte na przenośni. Wskaż epitet prosty (intruz):",
                                        "options": [
                                                "Morze łez (metafora)",
                                                "Czas ucieka (personifikacja)",
                                                "Płonące serce (metafora)",
                                                "Drewniana linijka (zwykły opis)"
                                        ],
                                        "correctWord": "Drewniana linijka (zwykły opis)"
                                },
                                {
                                        "promptPl": "Kategoria: Dźwiękonaśladownictwo (onomatopeje). Wskaż wyraz abstrakcyjny:",
                                        "options": [
                                                "Szeleścić",
                                                "Grzmieć",
                                                "Pluskać",
                                                "Sprawiedliwość"
                                        ],
                                        "correctWord": "Sprawiedliwość"
                                },
                                {
                                        "promptPl": "Kategoria: Apostrofy w literaturze polskiej. Wskaż zdanie oznajmujące bez zwrotu:",
                                        "options": [
                                                "«Litwo! Ojczyzno moja!»",
                                                "«Czego chcesz od nas, Panie...»",
                                                "«Młodości! Ty nad poziomy wylatuj!»",
                                                "Jan poszedł wczoraj do sklepu."
                                        ],
                                        "correctWord": "Jan poszedł wczoraj do sklepu."
                                },
                                {
                                        "promptPl": "Kategoria: Personifikacje (uosobienia). Wskaż zwierzę wykonujące naturalną czynność:",
                                        "options": [
                                                "Wiatr śpiewa w kominie",
                                                "Las milczy ponuro",
                                                "Zima uścisnęła rzekę lodem",
                                                "Pies zaszczekał na podwórku"
                                        ],
                                        "correctWord": "Pies zaszczekał na podwórku"
                                },
                                {
                                        "promptPl": "Kategoria: Porównania poetyckie. Wskaż zdanie bez konstrukcji porównawczej:",
                                        "options": [
                                                "Biały jak śnieg",
                                                "Szybki niby błyskawica",
                                                "Cichy na kształt cienia",
                                                "Chłopiec ma czerwony sweter"
                                        ],
                                        "correctWord": "Chłopiec ma czerwony sweter"
                                },
                                {
                                        "promptPl": "Kategoria: Epitety metaforyczne. Wskaż epitet potoczny, neutralny:",
                                        "options": [
                                                "Złote serce",
                                                "Stalowe nerwy",
                                                "Kryształowa prawdomówność",
                                                "Niebieski zeszyt"
                                        ],
                                        "correctWord": "Niebieski zeszyt"
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
                        "titlePl": "Głośny Ptak [Wiedźma]: Rodzaje i Gatunki Literackie",
                        "subtitlePl": "Podział literatury: epika, liryka, dramat",
                        "descriptionPl": "Wskaż gatunek nienależący do wskazanego rodzaju literackiego.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Gatunki EPIKI (obecność narratora, fabuła). Wskaż gatunek LIRYKI:",
                                        "options": [
                                                "Powieść",
                                                "Nowela",
                                                "Opowiadanie",
                                                "Hymn"
                                        ],
                                        "correctWord": "Hymn"
                                },
                                {
                                        "promptPl": "Kategoria: Gatunki LIRYKI (podmiot liryczny, wiersz, emocje). Wskaż gatunek DRAMATU:",
                                        "options": [
                                                "Sonet",
                                                "Tren",
                                                "Pieśń",
                                                "Tragedia"
                                        ],
                                        "correctWord": "Tragedia"
                                },
                                {
                                        "promptPl": "Kategoria: Gatunki DRAMATU (tekst główny i didaskalia, dialogi). Wskaż epopeję:",
                                        "options": [
                                                "Komedia",
                                                "Tragedia",
                                                "Dramat właściwy",
                                                "Epopeja narodowa"
                                        ],
                                        "correctWord": "Epopeja narodowa"
                                },
                                {
                                        "promptPl": "Kategoria: Gatunki synkretyczne (łączące cechy epiki, liryki i dramatu). Wskaż czysty referat naukowy:",
                                        "options": [
                                                "Romantyczna ballada",
                                                "Oświeceniowa satyra",
                                                "Dramat Dziady cz. II",
                                                "Instrukcja pralki"
                                        ],
                                        "correctWord": "Instrukcja pralki"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy budowy wiersza. Wskaż pojęcie typowe wyłącznie dla prozy:",
                                        "options": [
                                                "Zwrotka (strofa)",
                                                "Rym",
                                                "Rytm",
                                                "Rozdział"
                                        ],
                                        "correctWord": "Rozdział"
                                },
                                {
                                        "promptPl": "Kategoria: Elementy świata przedstawionego utworu epickiego. Wskaż didaskalia:",
                                        "options": [
                                                "Czas trwania akcji utworu",
                                                "Dokładne miejsce całej akcji",
                                                "Wszyscy główni bohaterowie",
                                                "Wskazówki reżysera w dramacie"
                                        ],
                                        "correctWord": "Wskazówki reżysera w dramacie"
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
                        "titlePl": "Głośny Ptak [Wiedźma]: Dziady i Romantyzm CKE",
                        "subtitlePl": "Zjawy, obrzędy i symbole Mickiewicza",
                        "descriptionPl": "Wskaż postać lub element obcy obrzędowi Dziadów.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Duchy przywołane w II części «Dziadów». Wskaż postać ze współczesnego kryminału:",
                                        "options": [
                                                "Józio i Rózia (duchy lekkie)",
                                                "Widmo Złego Pana (duch ciężki)",
                                                "Dziewczyna Zosia (duch pośredni)",
                                                "Komisarz policji (współczesność)"
                                        ],
                                        "correctWord": "Komisarz policji (współczesność)"
                                },
                                {
                                        "promptPl": "Kategoria: Przedmioty i dary używane podczas obrzędu Dziadów. Wskaż intruza:",
                                        "options": [
                                                "Kądziel zapalona na misie",
                                                "Ziarnko gorczycy",
                                                "Kocioł z wódką",
                                                "Telefon komórkowy z latarką"
                                        ],
                                        "correctWord": "Telefon komórkowy z latarką"
                                },
                                {
                                        "promptPl": "Kategoria: Przesłania moralne z «Dziadów» cz. II. Wskaż stwierdzenie sprzeczne z nauką Mickiewicza:",
                                        "options": [
                                                "Trzeba zaznać ziemskiej goryczy, by poznać niebo",
                                                "Kto nie był człowiekiem dla ludzi, temu człowiek nie pomoże",
                                                "Kto nie dotknął ziemi ni razu, ten nie wejdzie do nieba",
                                                "Zło i krzywda innych zawsze uchodzą bezkarnie"
                                        ],
                                        "correctWord": "Zło i krzywda innych zawsze uchodzą bezkarnie"
                                },
                                {
                                        "promptPl": "Kategoria: Ballady Adama Mickiewicza. Wskaż dzieło innego autora:",
                                        "options": [
                                                "Ballada «Świtezianka» (poeta)",
                                                "Ballada «Romantyczność» (wieszcz)",
                                                "Ballada «Rybka» (Mickiewicz)",
                                                "Dramat «Kordian» (Słowacki)"
                                        ],
                                        "correctWord": "Dramat «Kordian» (Słowacki)"
                                },
                                {
                                        "promptPl": "Kategoria: Zjawiska nadprzyrodzone w romantyzmie. Wskaż twarde prawo chemiczne:",
                                        "options": [
                                                "Tajemnicze nimfy wodne",
                                                "Groźne upiory i leśne widma",
                                                "Tajemnicze głosy z zaświatów",
                                                "Tabela pierwiastków chemii"
                                        ],
                                        "correctWord": "Tabela pierwiastków chemii"
                                },
                                {
                                        "promptPl": "Kategoria: Hasła polskiego romantyzmu. Wskaż hasło zimnego racjonalizmu:",
                                        "options": [
                                                "«Miej serce i patrzaj w serce»",
                                                "«Czucie i wiara silniej mówi do mnie»",
                                                "«Tam sięgaj, gdzie wzrok nie sięga»",
                                                "«Tylko to istnieje, co da się zmierzyć linijką»"
                                        ],
                                        "correctWord": "«Tylko to istnieje, co da się zmierzyć linijką»"
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
                        "titlePl": "Głośny Ptak [Wiedźma]: Emocje i Stany Ducha",
                        "subtitlePl": "Słownictwo określające głębokie przeżycia wewnętrzne",
                        "descriptionPl": "Wskaż stan emocjonalny o skrajnie odmiennym charakterze.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Emocje związane z nostalgią i tęsknotą. Wskaż beztroską euforię:",
                                        "options": [
                                                "Głęboka melancholia",
                                                "Bolesny żal za krajem",
                                                "Poważna cicha zaduma",
                                                "Szaleństwo na zabawie"
                                        ],
                                        "correctWord": "Szaleństwo na zabawie"
                                },
                                {
                                        "promptPl": "Kategoria: Synonimy słowa «współczucie». Wskaż bezduszność:",
                                        "options": [
                                                "Litość",
                                                "Empatia",
                                                "Wrażliwość",
                                                "Znieczulica"
                                        ],
                                        "correctWord": "Znieczulica"
                                },
                                {
                                        "promptPl": "Kategoria: Stany niepokoju i trwogi. Wskaż błogi spokój:",
                                        "options": [
                                                "Przerażenie",
                                                "Trwoga",
                                                "Lęk",
                                                "Kojąca harmonia"
                                        ],
                                        "correctWord": "Kojąca harmonia"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrażenia określające głęboką wdzięczność. Wskaż postawę roszczeniową:",
                                        "options": [
                                                "Z serca dziękuję",
                                                "Niezmiernie doceniam",
                                                "Jestem zobowiązany",
                                                "Należy mi się to bez łaski!"
                                        ],
                                        "correctWord": "Należy mi się to bez łaski!"
                                },
                                {
                                        "promptPl": "Kategoria: Postawy wobec drugiego człowieka. Wskaż postawę szkodliwą:",
                                        "options": [
                                                "Wyrozumiałość",
                                                "Życzliwość",
                                                "Cierpliwość",
                                                "Zawiść i zazdrość"
                                        ],
                                        "correctWord": "Zawiść i zazdrość"
                                },
                                {
                                        "promptPl": "Kategoria: Reakcje na cierpienie kolegi. Wskaż reakcję okrutną:",
                                        "options": [
                                                "Życzliwe pocieszenie",
                                                "Podanie mu chusteczki",
                                                "Wysłuchanie w spokoju",
                                                "Złośliwy śmiech z kolegi"
                                        ],
                                        "correctWord": "Złośliwy śmiech z kolegi"
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
                        "titlePl": "Głośny Ptak [Wiedźma]: Symbole i Archetypy Lektur",
                        "subtitlePl": "Złoty róg, chochoł, róża, maliny i zbrodnia",
                        "descriptionPl": "Wskaż interpretację sprzeczną z sensem symbolu literackiego.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Znaczenie Złotego Rogu w «Weselu» Stanisława Wyspiańskiego. Wskaż interpretację błędną:",
                                        "options": [
                                                "Hasło do narodowego zrywu",
                                                "Szansa na odzyskanie wolności",
                                                "Zjednoczenie społeczeństwa",
                                                "Instrument do wiejskiej zabawy"
                                        ],
                                        "correctWord": "Instrument do wiejskiej zabawy"
                                },
                                {
                                        "promptPl": "Kategoria: Znaczenie Róży dla Małego Księcia. Wskaż fałszywy sens:",
                                        "options": [
                                                "Symbol jedynej i niepowtarzalnej miłości",
                                                "Znak piękna wymagającego opieki",
                                                "Symbol odpowiedzialności za relację",
                                                "Zwykły chwast przeznaczony na kompost"
                                        ],
                                        "correctWord": "Zwykły chwast przeznaczony na kompost"
                                },
                                {
                                        "promptPl": "Kategoria: Motyw malin w tragedii Słowackiego. Wskaż fałszywą rolę owoców:",
                                        "options": [
                                                "Katalizator krwawej zbrodni",
                                                "Stawka o rękę hrabiego Kirkora",
                                                "Powód zabójstwa siostry Aliny",
                                                "Przepis na pyszny dżem na zimę"
                                        ],
                                        "correctWord": "Przepis na pyszny dżem na zimę"
                                },
                                {
                                        "promptPl": "Kategoria: Znaczenie Chochoła w «Weselu». Wskaż pojęcie pozytywne:",
                                        "options": [
                                                "Uśpienie i bierność narodu",
                                                "Letarg i bierność społeczeństwa",
                                                "Zaczarowany chocholi taniec",
                                                "Gotowość do natychmiastowej walki"
                                        ],
                                        "correctWord": "Gotowość do natychmiastowej walki"
                                },
                                {
                                        "promptPl": "Kategoria: Motyw zdrady w balladzie «Świtezianka». Wskaż postawę strzelca:",
                                        "options": [
                                                "Złamanie świętej przysięgi miłości",
                                                "Uleganie pokusie nieznanej dziewczyny",
                                                "Kara pochłonięcia przez jezioro Świteź",
                                                "Niezłomna wierność danej obietnicy"
                                        ],
                                        "correctWord": "Niezłomna wierność danej obietnicy"
                                },
                                {
                                        "promptPl": "Kategoria: Znaczenie podróży w «Małym Księciu». Wskaż definicję chciwości:",
                                        "options": [
                                                "Poszukiwanie sensu życia",
                                                "Nauka o ludzkich wadach i zaletach",
                                                "Dojrzewanie do prawdziwej miłości",
                                                "Gromadzenie worków z monetami na pokaz"
                                        ],
                                        "correctWord": "Gromadzenie worków z monetami na pokaz"
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
                        "titlePl": "Głośny Ptak [Wiedźma]: Fleksja i Magia Przypadków",
                        "subtitlePl": "Odmiana przez przypadki i funkcje wołacza",
                        "descriptionPl": "Wskaż formę gramatyczną niepasującą do danego przypadku.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Formy wołacza (O! witaj...). Wskaż formę mianownika (intruz):",
                                        "options": [
                                                "Mój przyjacielu!",
                                                "Droga mamo!",
                                                "Młody rycerzu!",
                                                "Ten stół stoi w pokoju"
                                        ],
                                        "correctWord": "Ten stół stoi w pokoju"
                                },
                                {
                                        "promptPl": "Kategoria: Formy narzędnika (z kim? z czym?). Wskaż formę celownika:",
                                        "options": [
                                                "Z mieczem",
                                                "Z księgą",
                                                "Ze słowem",
                                                "Koledze (komu?)"
                                        ],
                                        "correctWord": "Koledze (komu?)"
                                },
                                {
                                        "promptPl": "Kategoria: Pytania przypadków gramatycznych. Wskaż parę pytań Dopełniacza:",
                                        "options": [
                                                "Kto? Co? (Mianownik)",
                                                "Kogo? Czego? (Dopełniacz)",
                                                "Komu? Czemu? (Celownik)",
                                                "Kogo? Co? (Biernik)"
                                        ],
                                        "correctWord": "Kto? Co? (Mianownik)"
                                },
                                {
                                        "promptPl": "Kategoria: Rzeczowniki nieodmienne w języku polskim. Wskaż wyraz odmienny:",
                                        "options": [
                                                "Kakao",
                                                "Menu",
                                                "Awokado",
                                                "Książka"
                                        ],
                                        "correctWord": "Książka"
                                },
                                {
                                        "promptPl": "Kategoria: Formy miejscownika (o kim? o czym?). Wskaż formę biernika:",
                                        "options": [
                                                "O zamku",
                                                "O lekturze",
                                                "O przyjacielu",
                                                "Zamek (kogo? co?)"
                                        ],
                                        "correctWord": "Zamek (kogo? co?)"
                                },
                                {
                                        "promptPl": "Kategoria: Końcówki fleksyjne narzędnika liczby pojedynczej rodzaju żeńskiego. Wskaż intruza:",
                                        "options": [
                                                "-ą (np. ręką)",
                                                "-ą (np. wodą)",
                                                "-ą (np. książką)",
                                                "-om (liczba mnoga: dzieciom)"
                                        ],
                                        "correctWord": "-om (liczba mnoga: dzieciom)"
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
        ],
        "jester": [
                {
                        "titlePl": "Głośny Ptak [Błazen]: Gatunki i Odmiany Humoru",
                        "subtitlePl": "Ironia, satyra, parodia, pamflet i farsa",
                        "descriptionPl": "Ptak rozrabia w teatrze komedii! Wskaż intruza.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Formy komizmu i satyry. Wskaż gatunek tragiczny o śmierci (intruz):",
                                        "options": [
                                                "Parodia",
                                                "Farsa",
                                                "Satyra",
                                                "Tren żałobny"
                                        ],
                                        "correctWord": "Tren żałobny"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy dobrej parodii literackiej. Wskaż cechę wykluczoną:",
                                        "options": [
                                                "Naśladowanie stylu znanego dzieła",
                                                "Wyolbrzymienie typowych cech wzoru",
                                                "Humorystyczny cel całej wypowiedzi",
                                                "Dosłowne kopiowanie bez żadnego żartu"
                                        ],
                                        "correctWord": "Dosłowne kopiowanie bez żadnego żartu"
                                },
                                {
                                        "promptPl": "Kategoria: Odmiany komizmu w sztuce. Wskaż element niezwiązany z komizmem:",
                                        "options": [
                                                "Komizm słowny (błyskotliwe dialogi)",
                                                "Komizm postaci (komiczny bohater)",
                                                "Komizm sytuacji (zbiegi okoliczności)",
                                                "Groza cmentarna (nastrój żałobny)"
                                        ],
                                        "correctWord": "Groza cmentarna (nastrój żałobny)"
                                },
                                {
                                        "promptPl": "Kategoria: Ironia w wypowiedzi. Wskaż zdanie wypowiedziane w 100% dosłownie:",
                                        "options": [
                                                "«Ależ piękna pogoda!» (w czasie ulewy)",
                                                "«Cóż za punktualność!» (po spóźnieniu)",
                                                "«Wspaniała robota!» (przy stłuczeniu)",
                                                "«Pies ma cztery łapy» (opis dosłowny)"
                                        ],
                                        "correctWord": "«Pies ma cztery łapy» (opis dosłowny)"
                                },
                                {
                                        "promptPl": "Kategoria: Mistrzowie polskiej komedii i satyry. Wskaż autora tragedii antycznej:",
                                        "options": [
                                                "Aleksander Fredro (komediopisarz)",
                                                "Ignacy Krasicki (twórca satyr)",
                                                "K. I. Gałczyński (znany satyryk)",
                                                "Sofokles (grecki autor tragedii)"
                                        ],
                                        "correctWord": "Sofokles (grecki autor tragedii)"
                                },
                                {
                                        "promptPl": "Kategoria: Reakcje audytorium na genialną komedię. Wskaż reakcję intruza:",
                                        "options": [
                                                "Salwy śmiechu",
                                                "Gromkie brawa",
                                                "Uśmiech od ucha do ucha",
                                                "Głęboki sen i chrapanie"
                                        ],
                                        "correctWord": "Głęboki sen i chrapanie"
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
                        "titlePl": "Głośny Ptak [Błazen]: Teatr i Scena Fredrowska",
                        "subtitlePl": "Pojęcia teatralne i komedia «Zemsta»",
                        "descriptionPl": "Wskaż element niepasujący do sztuki scenicznej.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Elementy przestrzeni teatralnej. Wskaż pojęcie ze stadionu piłkarskiego:",
                                        "options": [
                                                "Scena",
                                                "Kurtyna",
                                                "Kulisy",
                                                "Pole karne z bramką"
                                        ],
                                        "correctWord": "Pole karne z bramką"
                                },
                                {
                                        "promptPl": "Kategoria: Zawody związane z realizacją spektaklu teatralnego. Wskaż zawód intruza:",
                                        "options": [
                                                "Reżyser",
                                                "Scenograf",
                                                "Sufler",
                                                "Hydraulik okrętowy"
                                        ],
                                        "correctWord": "Hydraulik okrętowy"
                                },
                                {
                                        "promptPl": "Kategoria: Postacie z komedii «Zemsta» Aleksandra Fredry. Wskaż postać z innej epoki:",
                                        "options": [
                                                "Cześnik Raptusiewicz",
                                                "Rejent Milczek",
                                                "Józef Papkin",
                                                "Harry Potter"
                                        ],
                                        "correctWord": "Harry Potter"
                                },
                                {
                                        "promptPl": "Kategoria: Słynne cytaty z «Zemsty». Wskaż cytat z «Dziadów»:",
                                        "options": [
                                                "«Niech się dzieje wola Nieba, zgadzać trzeba!»",
                                                "«Mocium panie, me wezwanie, mocium panie!»",
                                                "«Jeśli nie chcesz zguby, krokodyla daj mi!»",
                                                "«Ciemno wszędzie, głucho wszędzie na sali»"
                                        ],
                                        "correctWord": "«Ciemno wszędzie, głucho wszędzie na sali»"
                                },
                                {
                                        "promptPl": "Kategoria: Przedmioty grające kluczową rolę w intrydze Fredry. Wskaż przedmiot fałszywy:",
                                        "options": [
                                                "Mur graniczny zamku",
                                                "Gęsie pióro do pisania listu",
                                                "Szabla Cześnika (Pani Barska)",
                                                "Smartfon z aplikacją randkową"
                                        ],
                                        "correctWord": "Smartfon z aplikacją randkową"
                                },
                                {
                                        "promptPl": "Kategoria: Części tekstu dramatycznego. Wskaż element obcy dramatowi:",
                                        "options": [
                                                "Kwestia wypowiadana przez bohatera",
                                                "Didaskalia (autorskie uwagi sceniczne)",
                                                "Podział całego dramatu na akty i sceny",
                                                "Długi poetycki opis przyrody narratora"
                                        ],
                                        "correctWord": "Długi poetycki opis przyrody narratora"
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
                        "titlePl": "Głośny Ptak [Błazen]: Bajki i Fraszki z Morałem",
                        "subtitlePl": "Mądrość Krasickiego i Kochanowskiego",
                        "descriptionPl": "Wskaż cechę lub postać sprzeczną z klasyczną bajką oświeceniową.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Zwierzęta z bajek Krasickiego i ich alegoryczne znaczenia. Wskaż fałszywą alegorię:",
                                        "options": [
                                                "Lis – chytrość i pochlebstwo",
                                                "Jagnię – bezbronna niewinność",
                                                "Wilk – bezwzględna, brutalna siła",
                                                "Kruk – genialna matematyka wyższa"
                                        ],
                                        "correctWord": "Kruk – genialna matematyka wyższa"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy gatunkowe bajki zwierzęcej. Wskaż cechę całkowicie fałszywą:",
                                        "options": [
                                                "Zwięzła, wierszowana forma",
                                                "Obecność pouczającego morału",
                                                "Zwierzęta mówiące ludzkim głosem",
                                                "Objętość minimum 800 stron tekstu"
                                        ],
                                        "correctWord": "Objętość minimum 800 stron tekstu"
                                },
                                {
                                        "promptPl": "Kategoria: Fraszki Jana Kochanowskiego. Wskaż dzieło innego poety:",
                                        "options": [
                                                "Fraszka «Na zdrowie» (Jan Kochanowski)",
                                                "Fraszka «Na lipę» (Jan Kochanowski)",
                                                "Fraszka «O żywocie ludzkim» (poeta)",
                                                "Wiersz «Lokomotywa» (Julian Tuwim)"
                                        ],
                                        "correctWord": "Wiersz «Lokomotywa» (Julian Tuwim)"
                                },
                                {
                                        "promptPl": "Kategoria: Wady ludzkie krytykowane w satyrach Krasickiego. Wskaż cnotę (intruz):",
                                        "options": [
                                                "Pijaństwo i huczne hulanki",
                                                "Marnotrawstwo całego majątku",
                                                "Ślepe uleganie obcej modzie",
                                                "Skromność i codzienna praca"
                                        ],
                                        "correctWord": "Skromność i codzienna praca"
                                },
                                {
                                        "promptPl": "Kategoria: Położenie morału w utworze. Wskaż pojęcie niebędące częścią utworu:",
                                        "options": [
                                                "Morał początkowy (nagłosowy)",
                                                "Morał końcowy (wygłosowy)",
                                                "Morał domyślny w treści",
                                                "Morał w głośniku bluetooth"
                                        ],
                                        "correctWord": "Morał w głośniku bluetooth"
                                },
                                {
                                        "promptPl": "Kategoria: Tytuł satyry Ignacego Krasickiego. Wskaż tytuł zmyślony:",
                                        "options": [
                                                "«Żona modna»",
                                                "«Pijaństwo»",
                                                "«Do króla»",
                                                "«Kosmiczny lot na Marsa»"
                                        ],
                                        "correctWord": "«Kosmiczny lot na Marsa»"
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
                        "titlePl": "Głośny Ptak [Błazen]: Gry Słowne i Homonimy",
                        "subtitlePl": "Wieloznaczność, kalambury i dowcip językowy",
                        "descriptionPl": "Wskaż wyraz, który NIE posiada wielu znaczeń w języku polskim.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Homonimy (słowa brzmiące tak samo, lecz o innych znaczeniach). Wskaż słowo jednoznaczne:",
                                        "options": [
                                                "Zamek (błyskawiczny / budowla / w drzwiach)",
                                                "Klucz (do drzwi / ptaków / wiolinowy)",
                                                "Mysz (zwierzę / komputerowa)",
                                                "Mikrofale (specjalistyczny termin)"
                                        ],
                                        "correctWord": "Mikrofale (specjalistyczny termin)"
                                },
                                {
                                        "promptPl": "Kategoria: Wyrazy wieloznaczne (polisemanty). Wskaż słowo mające tylko jedno znaczenie:",
                                        "options": [
                                                "Pióro (ptasie / wieczne)",
                                                "Noga (od stołu / człowieka)",
                                                "Oko (w rosole / człowieka / sieci)",
                                                "Tlen (pierwiastek chemiczny)"
                                        ],
                                        "correctWord": "Tlen (pierwiastek chemiczny)"
                                },
                                {
                                        "promptPl": "Kategoria: Kalambury i rymy homofoniczne. Wskaż parę wyrazów, które brzmią zupełnie inaczej:",
                                        "options": [
                                                "Bóg i Bug (homofony)",
                                                "Kod i Kot (homofony)",
                                                "Może i Morze (słowa)",
                                                "Jabłko i Lokomotywa"
                                        ],
                                        "correctWord": "Jabłko i Lokomotywa"
                                },
                                {
                                        "promptPl": "Kategoria: Figury retoryczne oparte na grze słów. Wskaż wzór matematyczny:",
                                        "options": [
                                                "Kalambur",
                                                "Aliteracja",
                                                "Gra słów",
                                                "E = mc²"
                                        ],
                                        "correctWord": "E = mc²"
                                },
                                {
                                        "promptPl": "Kategoria: Zdrobnienia o zabarwieniu pieszczotliwym lub komicznym. Wskaż zgrubienie:",
                                        "options": [
                                                "Piesek",
                                                "Kotletik",
                                                "Chlebik",
                                                "Psisko (zgrubienie)"
                                        ],
                                        "correctWord": "Psisko (zgrubienie)"
                                },
                                {
                                        "promptPl": "Kategoria: Rymy parzyste w wierszu (układ AABB). Wskaż układ rymów krzyżowych:",
                                        "options": [
                                                "AABB",
                                                "AABB",
                                                "AABB",
                                                "ABAB (krzyżowe)"
                                        ],
                                        "correctWord": "ABAB (krzyżowe)"
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
                        "titlePl": "Głośny Ptak [Błazen]: Śmieszne Przysłowia i Frazeologizmy",
                        "subtitlePl": "Związki frazeologiczne z humorem",
                        "descriptionPl": "Wskaż frazeologizm o ponurym lub dosłownym znaczeniu.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Związki frazeologiczne oznaczające głośny śmiech. Wskaż płacz:",
                                        "options": [
                                                "Pękać ze śmiechu",
                                                "Boki zrywać",
                                                "Pokładać się ze śmiechu",
                                                "Wylewać morze gorzkich łez"
                                        ],
                                        "correctWord": "Wylewać morze gorzkich łez"
                                },
                                {
                                        "promptPl": "Kategoria: Przysłowia o absurdalnych działaniach. Wskaż racjonalne postępowanie:",
                                        "options": [
                                                "Porywać się z motyką na słońce",
                                                "Rzucać grochem o ścianę",
                                                "Szukać wiatru w polu",
                                                "Czytać książkę przed sprawdzianem"
                                        ],
                                        "correctWord": "Czytać książkę przed sprawdzianem"
                                },
                                {
                                        "promptPl": "Kategoria: Frazeologizmy o dziwnym zachowaniu. Wskaż określenie spokoju:",
                                        "options": [
                                                "Mieć bzika na jakimś punkcie",
                                                "Wiercić komuś dziurę w brzuchu",
                                                "Mieć swoje własne muchy w nosie",
                                                "Zachować anielski spokój ducha"
                                        ],
                                        "correctWord": "Zachować anielski spokój ducha"
                                },
                                {
                                        "promptPl": "Kategoria: Powiedzenia o wpadkach i gafach. Wskaż sytuację idealnego sukcesu:",
                                        "options": [
                                                "Strzelić gafę w towarzystwie",
                                                "Wpaść jak śliwka w kompot",
                                                "Najeść się wstydu przed ludźmi",
                                                "Osiągnąć pełny i wielki sukces"
                                        ],
                                        "correctWord": "Osiągnąć pełny i wielki sukces"
                                },
                                {
                                        "promptPl": "Kategoria: Słowa określające komicznego gadułę. Wskaż milczka:",
                                        "options": [
                                                "Gawędziarz opowiadający historie",
                                                "Wesołek żartujący bez przerwy",
                                                "Papla mówiący o wszystkim w sali",
                                                "Milczek zamknięty w sobie od rana"
                                        ],
                                        "correctWord": "Milczek zamknięty w sobie od rana"
                                },
                                {
                                        "promptPl": "Kategoria: Przysłowia o żartach. Wskaż przysłowie przestrzegające przed przesadą:",
                                        "options": [
                                                "Co za dużo, to niezdrowo w życiu",
                                                "Śmiech to zdrowie dla każdego",
                                                "Żart żartem, ale sprawa poważna",
                                                "Nie ma tego złego na tym świecie"
                                        ],
                                        "correctWord": "Żart żartem, ale sprawa poważna"
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
                        "titlePl": "Głośny Ptak [Błazen]: Teatr Lalek i Pantomima",
                        "subtitlePl": "Sztuka sceniczna bez słów i formy lalkowe",
                        "descriptionPl": "Wskaż element obcy teatrowi ruchu i lalek.",
                        "questions": [
                                {
                                        "promptPl": "Kategoria: Rodzaje lalek teatralnych. Wskaż żywego aktora filmowego:",
                                        "options": [
                                                "Kukiełka (na kiju)",
                                                "Pacynka (na dłoni)",
                                                "Marionetka (na nitkach)",
                                                "Aktor hollywoodzki"
                                        ],
                                        "correctWord": "Aktor hollywoodzki"
                                },
                                {
                                        "promptPl": "Kategoria: Cechy pantomimy (teatru mimu). Wskaż element zakazany w pantomimie:",
                                        "options": [
                                                "Wyrazista ekspresja całego ciała",
                                                "Mowa gestów, mimiki i dłoni aktora",
                                                "Charakterystyczny biały makijaż twarzy",
                                                "Recytowanie monologów przez mikrofon"
                                        ],
                                        "correctWord": "Recytowanie monologów przez mikrofon"
                                },
                                {
                                        "promptPl": "Kategoria: Teatr cieni. Wskaż element zbędny do teatru cieni:",
                                        "options": [
                                                "Ekran z białego płótna",
                                                "Źródło światła za ekranem",
                                                "Płaskie sylwetki lalek",
                                                "Ciężka zbroja rycerska z metalu"
                                        ],
                                        "correctWord": "Ciężka zbroja rycerska z metalu"
                                },
                                {
                                        "promptPl": "Kategoria: Środki wyrazu komika scenicznego. Wskaż element niszczący spektakl:",
                                        "options": [
                                                "Świetne tempo i rytm puenty",
                                                "Plastyka ruchu scenicznego",
                                                "Bezpośredni kontakt z widzem",
                                                "Obrażanie widzów na widowni"
                                        ],
                                        "correctWord": "Obrażanie widzów na widowni"
                                },
                                {
                                        "promptPl": "Kategoria: Rekwizyty błazna i komika. Wskaż narzędzie budowlane:",
                                        "options": [
                                                "Czapka z dzwoneczkami",
                                                "Kolorowy melonik",
                                                "Komiczny krawat w grochy",
                                                "Betoniarka"
                                        ],
                                        "correctWord": "Betoniarka"
                                },
                                {
                                        "promptPl": "Kategoria: Finał udanego przedstawienia komediowego. Wskaż reakcję niepasującą:",
                                        "options": [
                                                "Ukłony aktorów na proscenium",
                                                "Kwiaty od zachwyconej widowni",
                                                "Owacja na stojąco",
                                                "Rzucanie pomidorami w panice"
                                        ],
                                        "correctWord": "Rzucanie pomidorami w panice"
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
        ]
}""")