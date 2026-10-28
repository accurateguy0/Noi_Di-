import sys, os
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.build_full_rebalance import rebalance_file

lekarz_data = {
    '«Boli mnie gardło i od wczoraj mam podwyższoną temperaturę.»': {
        'wrongs': [
            '«Zgubiłem wczoraj piórnik na szkolnym korytarzu.»',
            '«Chcę wyjść natychmiast na boisko grać w piłkę.»'
        ]
    },
    'Otwieram spokojnie usta, żeby lekarz mógł zbadać gardło i migdałki szpatułką.': {
        'wrongs': [
            'Zamykam szczelnie usta i chowam się za drewnianym parawanem w gabinecie.',
            'Zaczynam szybko jeść dużą kanapkę w trakcie trwania lekarskiego badania.'
        ]
    },
    '«Szmery oddechowe w płucach oraz miarowość i ton bicia serca!»': {
        'wrongs': [
            '«Oceny z trudnej matematyki w dzienniku elektronicznym szkoły!»',
            '«Dokładny rozmiar nowych butów sportowych na lekcję wychowania WF!»'
        ]
    },
    '«Nie mam stwierdzonych żadnych alergii na leki, panie doktorze.»': {
        'wrongs': [
            '«Mam wielką alergię na dokładne sprzątanie mojego pokoju w soboty.»',
            '«Zapisane leki biorę chętnie tylko wtedy, gdy smakują jak czekolada.»'
        ]
    },
    'Bo niedoleczone bakterie mogą uodpornić się na lek i wywołać groźny nawrót choroby.': {
        'wrongs': [
            'Bo lekarz w przychodni bardzo obrazi się na pacjenta za niepotrzebne oszczędzanie leków.',
            'Bo całą resztę niewypitego syropu trzeba koniecznie oddać do apteki tego samego dnia.'
        ]
    },
    'Odporność wytworzoną po przebyciu choroby zakaźnej lub po podaniu szczepionki.': {
        'wrongs': [
            'Umiejętność wyjątkowo szybkiego biegania na trudnej lekcji wychowania fizycznego.',
            'Niezwykłą zdolność organizmu do całkowitego nieodczuwania głodu przez całe trzy dni.'
        ]
    },
    'Bo limfocyty intensywnie namnażają się i zwalczają patogeny w układzie chłonnym.': {
        'wrongs': [
            'Bo chory pacjent za dużo i za głośno mówił, przez co całe jego gardło mocno urosło.',
            'Bo powiększone węzły chłonne magazynują w sobie całe zjedzone rano obfite śniadanie.'
        ]
    },
    'To aparat mierzący ciśnienie krwi – w trakcie pomiaru należy siedzieć spokojnie i nie rozmawiać.': {
        'wrongs': [
            'To zwykła waga łazienkowa – w czasie badania należy na nią dynamicznie wskoczyć obiema nogami.',
            'To medyczny termometr douszny – w trakcie badania należy donośnie i głośno śpiewać piosenki.'
        ]
    },
    '«Tak, jeżdżę na rowerze i gram w piłkę nożną co najmniej trzy razy w tygodniu.»': {
        'wrongs': [
            '«Wszelki sport i mecze oglądam tylko na ekranie telefonu leżąc w łóżku pod kołdrą.»',
            '«Strasznie boję się świeżego powietrza na dworze i nigdy w pokoju nie otwieram okna.»'
        ]
    },
    'Zastosować protokół RICE: odpoczynek, lód, ucisk opaską elastyczną i uniesienie kończyny.': {
        'wrongs': [
            'Biegać natychmiast sprintem po schodach w szkole, żeby rozruszać uszkodzony staw na siłę.',
            'Rozgrzewać zwichnięte miejsce gorącą wodą z solą kamienną bezpośrednio i zaraz po urazie.'
        ]
    },
    'Bo cząsteczki mydła rozbijają lipidową (tłuszczową) osłonkę wirusów i zmywają brud.': {
        'wrongs': [
            'Bo toaletowe mydło ma intensywny zapach kwiatów, którego groźne wirusy bardzo się boją.',
            'Dokładne mycie rąk ciepłą wodą i mydłem nie ma żadnego znaczenia dla higieny zdrowotnej.'
        ]
    },
    '«Za transport tlenu z płuc do wszystkich komórek i mięśni naszego ciała!»': {
        'wrongs': [
            '«Za powolne trawienie tłuszczów i węglowodanów w całym jelicie cienkim!»',
            '«Za szybki i nieprzerwany wzrost twardych paznokci oraz gęstych włosów!»'
        ]
    },
    'Sprawdzenie na małym fragmencie skóry, czy organizm nie reaguje gwałtowną alergią.': {
        'wrongs': [
            'Trudny sprawdzian z ogólnej wiedzy o lekach i witaminach pisany na kartce papieru.',
            'Obowiązkowe wypicie całej dużej szklanki gorzkiej, mocno zaparzonej herbaty ziołowej.'
        ]
    },
    '«Leżenie w łóżku, sen, ciepła herbata z miodem i cytryną oraz odpoczynek od ekranów!»': {
        'wrongs': [
            '«Szybkie pójście na basen i jedzenie zimnych lodów na wietrznym podwórku przed blokiem!»',
            '«Wieloletnie granie w gry komputerowe przez całą noc bez jakiejkolwiek przerwy na sen!»'
        ]
    },
    '«Dziękuję bardzo za pomoc i trafną diagnozę! Do widzenia panie doktorze!»': {
        'wrongs': [
            '«No to wielkie nara, do zobaczenia kiedy indziej na korytarzu przychodni!»',
            '«Mógł pan doktor wypisać mi znacznie więcej mocnych tabletek na zapas do domu!»'
        ]
    }
}

# Note: In lekarz.js, each appears twice, so rebalance_file should handle multiple occurrences or loop until none left
with open('src/data/characters/lekarz.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's run twice to catch both occurrences!
rebalance_file('src/data/characters/lekarz.js', lekarz_data)
rebalance_file('src/data/characters/lekarz.js', lekarz_data)
print("lekarz.js balanced!")
