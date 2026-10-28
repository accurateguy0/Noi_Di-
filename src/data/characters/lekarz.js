// Lekarz - Poważna wizyta w gabinecie medycznym
// Boss: 62 HP, bije po 4 HP | Zwykły: 31 HP, bije po 2 HP
// Wymaga precyzyjnych odpowiedzi o zdrowiu, higienie i bezpieczeństwie (20 pytań na zestaw!)

export const LEKARZ_ENCOUNTERS = {
  regular: {
    type: 'doctor_visit',
    titlePl: 'Doktor Jan (31 HP, 2 dmg)',
    subtitlePl: 'Wizyta lekarska: Diagnoza i zalecenia',
    icon: './assets/Postacie/Lekarz.png',
    enemyName: 'lekarz',
    enemyMaxHp: 31,
    enemyDamage: 2,
    descriptionPl: 'Doktor bada twoje samopoczucie. Odpowiadaj precyzyjnie na pytania o zdrowie!',
    steps: [
      {
        question: "Wchodzisz do gabinetu lekarskiego. Co mówisz na powitanie?",
        options: [
          { text: "«Dzień dobry panie doktorze!»", correct: true },
          { text: "«Siemanko, co tam słychać?»", correct: false },
          { text: "«Proszę dać mi zwolnienie!»", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Co ci dolega? Gdzie dokładnie odczuwasz ból?»",
        options: [
          { text: "«Boli mnie gardło i od wczoraj mam podwyższoną temperaturę.»", correct: true },
          { text: "«Zgubiłem wczoraj piórnik na szkolnym korytarzu.»", correct: false },
          { text: "«Chcę wyjść natychmiast na boisko grać w piłkę.»", correct: false }
        ]
      },
      {
        question: "Lekarz prosi: «Otwórz szeroko usta i powiedz Aaa, muszę obejrzeć twoje migdałki». Jak reagujesz?",
        options: [
          { text: "Otwieram spokojnie usta, żeby lekarz mógł zbadać gardło i migdałki szpatułką.", correct: true },
          { text: "Zamykam szczelnie usta i chowam się za drewnianym parawanem w gabinecie.", correct: false },
          { text: "Zaczynam szybko jeść dużą kanapkę w trakcie trwania lekarskiego badania.", correct: false }
        ]
      },
      {
        question: "Lekarz przykłada stetoskop do klatki piersiowej i mówi: «Weź głęboki oddech». Co sprawdzamy tym przyrządem?",
        options: [
          { text: "«Szmery oddechowe w płucach oraz miarowość i ton bicia serca!»", correct: true },
          { text: "«Oceny z trudnej matematyki w dzienniku elektronicznym szkoły!»", correct: false },
          { text: "«Dokładny rozmiar nowych butów sportowych na lekcję wychowania WF!»", correct: false }
        ]
      },
      {
        question: "Jaka jest prawidłowa temperatura ciała zdrowego człowieka mierzona pod pachą?",
        options: [
          { text: "Około 36,6 stopnia Celsjusza.", correct: true },
          { text: "Około 42 stopni Celsjusza.", correct: false },
          { text: "Około 20 stopni Celsjusza.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Czy masz alergię na jakieś leki, na przykład na penicylinę?»",
        options: [
          { text: "«Nie mam stwierdzonych żadnych alergii na leki, panie doktorze.»", correct: true },
          { text: "«Mam wielką alergię na dokładne sprzątanie mojego pokoju w soboty.»", correct: false },
          { text: "«Zapisane leki biorę chętnie tylko wtedy, gdy smakują jak czekolada.»", correct: false }
        ]
      },
      {
        question: "Lekarz bada brzuch palpacyjnie przez delikatny ucisk. O czym go informujesz?",
        options: [
          { text: "Mówię szczerze, w którym miejscu ucisk wywołuje ból lub dyskomfort.", correct: true },
          { text: "Udaję, że nic nie boli, żeby jak najszybciej wyjść z gabinetu.", correct: false },
          { text: "Zaczynam się głośno śmiać i kopię w stół zabiegowy.", correct: false }
        ]
      },
      {
        question: "Doktor wypisuje receptę i mówi: «Będziesz brać ten syrop dwa razy dziennie po posiłku». O co warto dopytać?",
        options: [
          { text: "«Przez ile dni mam przyjmować ten lek i czy popijać go zwykłą wodą?»", correct: true },
          { text: "«Czy mogę popić ten syrop litrem gazowanej coli?»", correct: false },
          { text: "«Czy mogę wypić całą butelkę naraz, żeby wyzdrowieć w pięć minut?»", correct: false }
        ]
      },
      {
        question: "Dlaczego antybiotyków nie wolno odstawiać od razu, gdy poczujemy się lepiej po dwóch dniach?",
        options: [
          { text: "Bo niedoleczone bakterie mogą uodpornić się na lek i wywołać groźny nawrót choroby.", correct: true },
          { text: "Bo lekarz w przychodni bardzo obrazi się na pacjenta za niepotrzebne oszczędzanie leków.", correct: false },
          { text: "Bo całą resztę niewypitego syropu trzeba koniecznie oddać do apteki tego samego dnia.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Ile szklanek czystej wody wypijasz w ciągu dnia?»",
        options: [
          { text: "«Staram się pić około półtora do dwóch litrów wody dziennie.»", correct: true },
          { text: "«Nie piję wody wcale, piję tylko słodzone napoje gazowane.»", correct: false },
          { text: "«Piję jedną szklankę wody na tydzień.»", correct: false }
        ]
      },
      {
        question: "Co oznacza w medycynie pojęcie «odporność swoista nabytą»?",
        options: [
          { text: "Odporność wytworzoną po przebyciu choroby zakaźnej lub po podaniu szczepionki.", correct: true },
          { text: "Umiejętność wyjątkowo szybkiego biegania na trudnej lekcji wychowania fizycznego.", correct: false },
          { text: "Niezwykłą zdolność organizmu do całkowitego nieodczuwania głodu przez całe trzy dni.", correct: false }
        ]
      },
      {
        question: "Lekarz bada węzły chłonne na szyi pod żuchwą. Dlaczego mogą być powiększone w czasie infekcji?",
        options: [
          { text: "Bo limfocyty intensywnie namnażają się i zwalczają patogeny w układzie chłonnym.", correct: true },
          { text: "Bo chory pacjent za dużo i za głośno mówił, przez co całe jego gardło mocno urosło.", correct: false },
          { text: "Bo powiększone węzły chłonne magazynują w sobie całe zjedzone rano obfite śniadanie.", correct: false }
        ]
      },
      {
        question: "Co to jest ciśnieniomierz i jak należy się zachować w trakcie pomiaru ciśnienia?",
        options: [
          { text: "To aparat mierzący ciśnienie krwi – w trakcie pomiaru należy siedzieć spokojnie i nie rozmawiać.", correct: true },
          { text: "To zwykła waga łazienkowa – w czasie badania należy na nią dynamicznie wskoczyć obiema nogami.", correct: false },
          { text: "To medyczny termometr douszny – w trakcie badania należy donośnie i głośno śpiewać piosenki.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Czy uprawiasz regularnie sport na świeżym powietrzu?»",
        options: [
          { text: "«Tak, jeżdżę na rowerze i gram w piłkę nożną co najmniej trzy razy w tygodniu.»", correct: true },
          { text: "«Wszelki sport i mecze oglądam tylko na ekranie telefonu leżąc w łóżku pod kołdrą.»", correct: false },
          { text: "«Strasznie boję się świeżego powietrza na dworze i nigdy w pokoju nie otwieram okna.»", correct: false }
        ]
      },
      {
        question: "Jak należy postąpić w przypadku podejrzenia skręcenia kostki w stawie skokowym?",
        options: [
          { text: "Zastosować protokół RICE: odpoczynek, lód, ucisk opaską elastyczną i uniesienie kończyny.", correct: true },
          { text: "Biegać natychmiast sprintem po schodach w szkole, żeby rozruszać uszkodzony staw na siłę.", correct: false },
          { text: "Rozgrzewać zwichnięte miejsce gorącą wodą z solą kamienną bezpośrednio i zaraz po urazie.", correct: false }
        ]
      },
      {
        question: "Dlaczego mycie rąk ciepłą wodą z mydłem przez 30 sekund skutecznie niszczy wirusy i bakterie?",
        options: [
          { text: "Bo cząsteczki mydła rozbijają lipidową (tłuszczową) osłonkę wirusów i zmywają brud.", correct: true },
          { text: "Bo toaletowe mydło ma intensywny zapach kwiatów, którego groźne wirusy bardzo się boją.", correct: false },
          { text: "Dokładne mycie rąk ciepłą wodą i mydłem nie ma żadnego znaczenia dla higieny zdrowotnej.", correct: false }
        ]
      },
      {
        question: "Lekarz patrzy na wyniki morfologii krwi: «Erytrocyty i hemoglobina są w normie». Za co odpowiadają te składniki?",
        options: [
          { text: "«Za transport tlenu z płuc do wszystkich komórek i mięśni naszego ciała!»", correct: true },
          { text: "«Za powolne trawienie tłuszczów i węglowodanów w całym jelicie cienkim!»", correct: false },
          { text: "«Za szybki i nieprzerwany wzrost twardych paznokci oraz gęstych włosów!»", correct: false }
        ]
      },
      {
        question: "Co to jest próba uczuleniowa przed podaniem leku lub szczepienia?",
        options: [
          { text: "Sprawdzenie na małym fragmencie skóry, czy organizm nie reaguje gwałtowną alergią.", correct: true },
          { text: "Trudny sprawdzian z ogólnej wiedzy o lekach i witaminach pisany na kartce papieru.", correct: false },
          { text: "Obowiązkowe wypicie całej dużej szklanki gorzkiej, mocno zaparzonej herbaty ziołowej.", correct: false }
        ]
      },
      {
        question: "Lekarz podsumowuje: «Wypisuję zwolnienie lekarskie na 5 dni. Co jest teraz twoim głównym lekarstwem?»",
        options: [
          { text: "«Leżenie w łóżku, sen, ciepła herbata z miodem i cytryną oraz odpoczynek od ekranów!»", correct: true },
          { text: "«Szybkie pójście na basen i jedzenie zimnych lodów na wietrznym podwórku przed blokiem!»", correct: false },
          { text: "«Wieloletnie granie w gry komputerowe przez całą noc bez jakiejkolwiek przerwy na sen!»", correct: false }
        ]
      },
      {
        question: "Odbierasz zaświadczenie lekarskie i wstajesz z fotela. Jakie słowa wypowiadasz na pożegnanie?",
        options: [
          { text: "«Dziękuję bardzo za pomoc i trafną diagnozę! Do widzenia panie doktorze!»", correct: true },
          { text: "«No to wielkie nara, do zobaczenia kiedy indziej na korytarzu przychodni!»", correct: false },
          { text: "«Mógł pan doktor wypisać mi znacznie więcej mocnych tabletek na zapas do domu!»", correct: false }
        ]
      }
    ]
  },
  default: {
    type: 'doctor_visit',
    titlePl: 'Doktor Jan (31 HP, 2 dmg)',
    subtitlePl: 'Wizyta lekarska: Diagnoza i zalecenia',
    icon: './assets/Postacie/Lekarz.png',
    enemyName: 'lekarz',
    enemyMaxHp: 31,
    enemyDamage: 2,
    descriptionPl: 'Doktor bada twoje samopoczucie. Odpowiadaj precyzyjnie na pytania o zdrowie!',
    steps: [
      {
        question: "Wchodzisz do gabinetu lekarskiego. Co mówisz na powitanie?",
        options: [
          { text: "«Dzień dobry panie doktorze!»", correct: true },
          { text: "«Siemanko, co tam słychać?»", correct: false },
          { text: "«Proszę dać mi zwolnienie!»", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Co ci dolega? Gdzie dokładnie odczuwasz ból?»",
        options: [
          { text: "«Boli mnie gardło i od wczoraj mam podwyższoną temperaturę.»", correct: true },
          { text: "«Zgubiłem wczoraj piórnik na szkolnym korytarzu.»", correct: false },
          { text: "«Chcę wyjść natychmiast na boisko grać w piłkę.»", correct: false }
        ]
      },
      {
        question: "Lekarz prosi: «Otwórz szeroko usta i powiedz Aaa, muszę obejrzeć twoje migdałki». Jak reagujesz?",
        options: [
          { text: "Otwieram spokojnie usta, żeby lekarz mógł zbadać gardło i migdałki szpatułką.", correct: true },
          { text: "Zamykam szczelnie usta i chowam się za drewnianym parawanem w gabinecie.", correct: false },
          { text: "Zaczynam szybko jeść dużą kanapkę w trakcie trwania lekarskiego badania.", correct: false }
        ]
      },
      {
        question: "Lekarz przykłada stetoskop do klatki piersiowej i mówi: «Weź głęboki oddech». Co sprawdzamy tym przyrządem?",
        options: [
          { text: "«Szmery oddechowe w płucach oraz miarowość i ton bicia serca!»", correct: true },
          { text: "«Oceny z trudnej matematyki w dzienniku elektronicznym szkoły!»", correct: false },
          { text: "«Dokładny rozmiar nowych butów sportowych na lekcję wychowania WF!»", correct: false }
        ]
      },
      {
        question: "Jaka jest prawidłowa temperatura ciała zdrowego człowieka mierzona pod pachą?",
        options: [
          { text: "Około 36,6 stopnia Celsjusza.", correct: true },
          { text: "Około 42 stopni Celsjusza.", correct: false },
          { text: "Około 20 stopni Celsjusza.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Czy masz alergię na jakieś leki, na przykład na penicylinę?»",
        options: [
          { text: "«Nie mam stwierdzonych żadnych alergii na leki, panie doktorze.»", correct: true },
          { text: "«Mam wielką alergię na dokładne sprzątanie mojego pokoju w soboty.»", correct: false },
          { text: "«Zapisane leki biorę chętnie tylko wtedy, gdy smakują jak czekolada.»", correct: false }
        ]
      },
      {
        question: "Lekarz bada brzuch palpacyjnie przez delikatny ucisk. O czym go informujesz?",
        options: [
          { text: "Mówię szczerze, w którym miejscu ucisk wywołuje ból lub dyskomfort.", correct: true },
          { text: "Udaję, że nic nie boli, żeby jak najszybciej wyjść z gabinetu.", correct: false },
          { text: "Zaczynam się głośno śmiać i kopię w stół zabiegowy.", correct: false }
        ]
      },
      {
        question: "Doktor wypisuje receptę i mówi: «Będziesz brać ten syrop dwa razy dziennie po posiłku». O co warto dopytać?",
        options: [
          { text: "«Przez ile dni mam przyjmować ten lek i czy popijać go zwykłą wodą?»", correct: true },
          { text: "«Czy mogę popić ten syrop litrem gazowanej coli?»", correct: false },
          { text: "«Czy mogę wypić całą butelkę naraz, żeby wyzdrowieć w pięć minut?»", correct: false }
        ]
      },
      {
        question: "Dlaczego antybiotyków nie wolno odstawiać od razu, gdy poczujemy się lepiej po dwóch dniach?",
        options: [
          { text: "Bo niedoleczone bakterie mogą uodpornić się na lek i wywołać groźny nawrót choroby.", correct: true },
          { text: "Bo lekarz w przychodni bardzo obrazi się na pacjenta za niepotrzebne oszczędzanie leków.", correct: false },
          { text: "Bo całą resztę niewypitego syropu trzeba koniecznie oddać do apteki tego samego dnia.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Ile szklanek czystej wody wypijasz w ciągu dnia?»",
        options: [
          { text: "«Staram się pić około półtora do dwóch litrów wody dziennie.»", correct: true },
          { text: "«Nie piję wody wcale, piję tylko słodzone napoje gazowane.»", correct: false },
          { text: "«Piję jedną szklankę wody na tydzień.»", correct: false }
        ]
      },
      {
        question: "Co oznacza w medycynie pojęcie «odporność swoista nabytą»?",
        options: [
          { text: "Odporność wytworzoną po przebyciu choroby zakaźnej lub po podaniu szczepionki.", correct: true },
          { text: "Umiejętność wyjątkowo szybkiego biegania na trudnej lekcji wychowania fizycznego.", correct: false },
          { text: "Niezwykłą zdolność organizmu do całkowitego nieodczuwania głodu przez całe trzy dni.", correct: false }
        ]
      },
      {
        question: "Lekarz bada węzły chłonne na szyi pod żuchwą. Dlaczego mogą być powiększone w czasie infekcji?",
        options: [
          { text: "Bo limfocyty intensywnie namnażają się i zwalczają patogeny w układzie chłonnym.", correct: true },
          { text: "Bo chory pacjent za dużo i za głośno mówił, przez co całe jego gardło mocno urosło.", correct: false },
          { text: "Bo powiększone węzły chłonne magazynują w sobie całe zjedzone rano obfite śniadanie.", correct: false }
        ]
      },
      {
        question: "Co to jest ciśnieniomierz i jak należy się zachować w trakcie pomiaru ciśnienia?",
        options: [
          { text: "To aparat mierzący ciśnienie krwi – w trakcie pomiaru należy siedzieć spokojnie i nie rozmawiać.", correct: true },
          { text: "To zwykła waga łazienkowa – w czasie badania należy na nią dynamicznie wskoczyć obiema nogami.", correct: false },
          { text: "To medyczny termometr douszny – w trakcie badania należy donośnie i głośno śpiewać piosenki.", correct: false }
        ]
      },
      {
        question: "Lekarz pyta: «Czy uprawiasz regularnie sport na świeżym powietrzu?»",
        options: [
          { text: "«Tak, jeżdżę na rowerze i gram w piłkę nożną co najmniej trzy razy w tygodniu.»", correct: true },
          { text: "«Wszelki sport i mecze oglądam tylko na ekranie telefonu leżąc w łóżku pod kołdrą.»", correct: false },
          { text: "«Strasznie boję się świeżego powietrza na dworze i nigdy w pokoju nie otwieram okna.»", correct: false }
        ]
      },
      {
        question: "Jak należy postąpić w przypadku podejrzenia skręcenia kostki w stawie skokowym?",
        options: [
          { text: "Zastosować protokół RICE: odpoczynek, lód, ucisk opaską elastyczną i uniesienie kończyny.", correct: true },
          { text: "Biegać natychmiast sprintem po schodach w szkole, żeby rozruszać uszkodzony staw na siłę.", correct: false },
          { text: "Rozgrzewać zwichnięte miejsce gorącą wodą z solą kamienną bezpośrednio i zaraz po urazie.", correct: false }
        ]
      },
      {
        question: "Dlaczego mycie rąk ciepłą wodą z mydłem przez 30 sekund skutecznie niszczy wirusy i bakterie?",
        options: [
          { text: "Bo cząsteczki mydła rozbijają lipidową (tłuszczową) osłonkę wirusów i zmywają brud.", correct: true },
          { text: "Bo toaletowe mydło ma intensywny zapach kwiatów, którego groźne wirusy bardzo się boją.", correct: false },
          { text: "Dokładne mycie rąk ciepłą wodą i mydłem nie ma żadnego znaczenia dla higieny zdrowotnej.", correct: false }
        ]
      },
      {
        question: "Lekarz patrzy na wyniki morfologii krwi: «Erytrocyty i hemoglobina są w normie». Za co odpowiadają te składniki?",
        options: [
          { text: "«Za transport tlenu z płuc do wszystkich komórek i mięśni naszego ciała!»", correct: true },
          { text: "«Za powolne trawienie tłuszczów i węglowodanów w całym jelicie cienkim!»", correct: false },
          { text: "«Za szybki i nieprzerwany wzrost twardych paznokci oraz gęstych włosów!»", correct: false }
        ]
      },
      {
        question: "Co to jest próba uczuleniowa przed podaniem leku lub szczepienia?",
        options: [
          { text: "Sprawdzenie na małym fragmencie skóry, czy organizm nie reaguje gwałtowną alergią.", correct: true },
          { text: "Trudny sprawdzian z ogólnej wiedzy o lekach i witaminach pisany na kartce papieru.", correct: false },
          { text: "Obowiązkowe wypicie całej dużej szklanki gorzkiej, mocno zaparzonej herbaty ziołowej.", correct: false }
        ]
      },
      {
        question: "Lekarz podsumowuje: «Wypisuję zwolnienie lekarskie na 5 dni. Co jest teraz twoim głównym lekarstwem?»",
        options: [
          { text: "«Leżenie w łóżku, sen, ciepła herbata z miodem i cytryną oraz odpoczynek od ekranów!»", correct: true },
          { text: "«Szybkie pójście na basen i jedzenie zimnych lodów na wietrznym podwórku przed blokiem!»", correct: false },
          { text: "«Wieloletnie granie w gry komputerowe przez całą noc bez jakiejkolwiek przerwy na sen!»", correct: false }
        ]
      },
      {
        question: "Odbierasz zaświadczenie lekarskie i wstajesz z fotela. Jakie słowa wypowiadasz na pożegnanie?",
        options: [
          { text: "«Dziękuję bardzo za pomoc i trafną diagnozę! Do widzenia panie doktorze!»", correct: true },
          { text: "«No to wielkie nara, do zobaczenia kiedy indziej na korytarzu przychodni!»", correct: false },
          { text: "«Mógł pan doktor wypisać mi znacznie więcej mocnych tabletek na zapas do domu!»", correct: false }
        ]
      }
    ]
  }
};
