// Żaba - Postać Sytuacyjna (Zielona Żabka, 20 HP)
// Szybkie pytania błyskawiczne z puli szkolnej (Find the Match - 20 pytań na każde piętro).

import { HERO_ZABA_SETS } from '../heroCurriculumEncounters.js';

export const ZABA_SETS_BY_FLOOR = {
  1: [
    {
      titlePl: 'Żaba: Powitania i Etykieta',
      subtitlePl: 'Żabka na korytarzu',
      descriptionPl: 'Zielona Żabka skacze po korytarzu! Wybierz właściwą odpowiedź.',
      questions: [
        {
          promptPl: "Wchodzisz do szkoły rano i widzisz panią nauczycielkę. Co mówisz?",
          options: ["Dzień dobry!", "Siema zią!", "Do widzenia!", "Dzięki!"],
          correctWord: "Dzień dobry!"
        },
        {
          promptPl: "Przypadkowo potrąciłeś kogoś w biegu na korytarzu. Co powiesz?",
          options: ["Przepraszam!", "Smacznego!", "Która godzina?", "Nara!"],
          correctWord: "Przepraszam!"
        },
        {
          promptPl: "Kolega pożyczył ci chusteczkę higieniczną. Jak podziękujesz?",
          options: ["Dziękuję!", "Przepraszam!", "Dobranoc!", "Masakra!"],
          correctWord: "Dziękuję!"
        },
        {
          promptPl: "Żegnasz się z kolegą po skończonych lekcjach przed wyjściem ze szkoły:",
          options: ["Cześć, do jutra!", "Dzień dobry!", "Usiądź w ławce!", "Podnieś rękę!"],
          correctWord: "Cześć, do jutra!"
        },
        {
          promptPl: "Chcesz wejść do klasy, ale drzwi są przymknięte. Co robisz?",
          options: ["Pukam delikatnie w drzwi i pytam: Przepraszam, czy mogę wejść do klasy?", "Czekam w milczeniu na korytarzu, aż ktoś ze środka zauważy moją obecność.", "Naciskam gwałtownie na klamkę i wchodzę do środka bez żadnego uprzedzenia.", "Zaglądam przez szybę w drzwiach i macham ręką do kolegi z pierwszej ławki."],
          correctWord: "Pukam i mówię: Przepraszam, czy mogę wejść?"
        },
        {
          promptPl: "Pani rozdaje sprawdziany z polskiego. Co mówisz odbierając swoją pracę?",
          options: ["Dziękuję!", "Nie chcę tego!", "Do widzenia!", "Na zdrowie!"],
          correctWord: "Dziękuję!"
        },
        {
          promptPl: "Ktoś w klasie głośno kichnął. Jaki jest życzliwy zwrot w tej sytuacji?",
          options: ["Na zdrowie!", "Przepraszam!", "Smacznego!", "Dzień dobry!"],
          correctWord: "Na zdrowie!"
        },
        {
          promptPl: "Pytasz kolegę z ławki, czy możesz pożyczyć temperówkę:",
          options: ["Czy mógłbyś pożyczyć mi na chwilę temperówkę do ołówka?", "Czy masz może przy sobie zapasową gumkę do wycierania?", "Czy mógłbyś zatemperować mój ołówek swoją ostrzałką?", "Czy pożyczysz mi swój długopis z niebieskim wkładem?"],
          correctWord: "Czy mogę pożyczyć na chwilę temperówkę?"
        },
        {
          promptPl: "Mijasz na schodach pana woźnego niosącego drabinę. Jak się przywitasz?",
          options: ["Dzień dobry panu!", "Elo mordo!", "Czego tu stoisz?", "Gdzie leziesz?"],
          correctWord: "Dzień dobry panu!"
        },
        {
          promptPl: "Chcesz zapytać panią w sekretariacie o podstemplowanie legitymacji szkolnej:",
          options: ["Dzień dobry, czy mogłaby pani podstemplować moją legitymację?", "Dzień dobry, czy mógłbym odebrać zaświadczenie o ocenach?", "Dzień dobry, przyszedłem zgłosić zagubienie karty obiadowej.", "Dzień dobry, czy w sekretariacie mogę zostawić ten formularz?"],
          correctWord: "Przepraszam, czy mogłaby pani podstemplować moją legitymację?"
        },
        {
          promptPl: "Koleżanka ma obie ręce zajęte plakatami na apel. Co zrobisz przy drzwiach?",
          options: ["Przytrzymuję drzwi i mówię uprzejmie: Proszę, przejdź pierwsza!", "Przechodzę szybko przed nią, nie zwracając uwagi na jej kłopoty.", "Czekam bez słowa, aż sama poradzi sobie z otwarciem ciężkich drzwi.", "Wskazuję jej wolne miejsce pod ścianą, by odłożyła ciężkie arkusze."],
          correctWord: "Przytrzymuję drzwi i mówię: Proszę, przejdź pierwsza!"
        },
        {
          promptPl: "Nauczyciel wchodzi do klasy na początku lekcji. Co robią uczniowie zgodnie z etykietą?",
          options: ["Wstają spokojnie przy swoich ławkach i mówią: Dzień dobry!", "Siedzą w milczeniu na krzesłach, czekając na pierwszy wpis.", "Zgłaszają się z podniesioną ręką przed rozpoczęciem tematu.", "Wyjmują zeszyty z plecaków, nie przerywając głośnych rozmów."],
          correctWord: "Wstają spokojnie przy ławkach i odpowiadają: Dzień dobry!"
        },
        {
          promptPl: "Spóźniłeś się 3 minuty na lekcję z powodu zaciętego zamka w szatni. Jak się tłumaczysz?",
          options: ["Przepraszam za spóźnienie, zaciął mi się zamek w szafce. Czy mogę dołączyć?", "Dzień dobry, bardzo przepraszam za spóźnienie, uciekł mi poranny autobus miejski.", "Przepraszam za spóźnienie, byłem w gabinecie pielęgniarki po opatrunek na palec.", "Dzień dobry, przepraszam za spóźnienie, pomagałem woźnemu zanieść pudła do sali."],
          correctWord: "Przepraszam za spóźnienie, zaciął mi się zamek w szafce. Czy mogę dołączyć?"
        },
        {
          promptPl: "Kolega częstuje cię jabłkiem, ale jesteś już najedzony. Jak uprzejmie odmówić?",
          options: ["Dziękuję bardzo, ale zjadłem przed chwilą pożywne drugie śniadanie!", "Dziękuję, jabłko wygląda pysznie, ale mam ze sobą własną gruszkę.", "Dziękuję bardzo za miły gest, jednak nie jestem w tej chwili głodny.", "Dziękuję serdecznie, z chęcią zjem kawałek owocu na następnej przerwie."],
          correctWord: "Dziękuję bardzo, ale jestem już syty!"
        },
        {
          promptPl: "Przechodzisz obok gabinetu dyrektora i widzisz gościa szkoły pytającego o drogę. Jak zareagujesz?",
          options: ["Dzień dobry! W czym mogę panu dzisiaj pomóc?", "Dzień dobry! Czy przyszedł pan na wywiadówkę?", "Dzień dobry! Sekretariat mieści się na piętrze.", "Dzień dobry! Czy szuka pan gabinetu dyrektora?"],
          correctWord: "Dzień dobry! W czym mogę panu pomóc?"
        },
        {
          promptPl: "Nie dosłyszałeś polecenia nauczyciela dotyczącego numeru ćwiczenia. O co poprosisz?",
          options: ["Przepraszam, czy mógłby pan powtórzyć numer ćwiczenia?", "Przepraszam, czy to zadanie mamy zapisać w zeszycie?", "Przepraszam, na której stronie znajduje się ta ramka?", "Przepraszam, czy to ćwiczenie robimy teraz w parach?"],
          correctWord: "Przepraszam, czy mógłby pan powtórzyć numer ćwiczenia?"
        },
        {
          promptPl: "Wychodzisz ze szkoły jako ostatni z klasy. Jak żegnasz panią sprzątającą?",
          options: ["Do widzenia pani, życzę miłego i spokojnego popołudnia!", "Do widzenia pani, dziękujemy za posprzątanie naszej sali!", "Do widzenia pani, do zobaczenia na korytarzu jutro rano!", "Do widzenia pani, życzymy udanego wypoczynku po pracy!"],
          correctWord: "Do widzenia pani, miłego popołudnia!"
        },
        {
          promptPl: "Podczas pracy w grupie kolega ma inny pomysł niż ty. Jak dyskutujesz kulturalnie?",
          options: ["Ciekawy pomysł, ale rozważmy też inne dostępne argumenty.", "Dobry punkt widzenia, jednak sprawdźmy inne możliwości.", "Warto to przemyśleć, chociaż mój plan ma mocne podstawy.", "Zgadzam się z częścią, lecz dopracujmy końcowe wnioski."],
          correctWord: "Ciekawy pomysł, ale rozważmy też inne argumenty."
        },
        {
          promptPl: "Znalazłeś w korytarzu piórnik z legitymacją kolegi z klasy 5b. Co z nim zrobisz?",
          options: ["Oddaję zgubę do sekretariatu lub nauczyciela dyżurnego.", "Zanoszę piórnik do biblioteki szkolnej jako zgubiony.", "Pytam gospodarza klasy 5b, czy zna właściciela piórnika.", "Zostawiam piórnik na portierni u pana dyżurującego woźnego."],
          correctWord: "Oddaję do sekretariatu lub nauczyciela dyżurnego"
        },
        {
          promptPl: "Dzwoni dzwonek na przerwę, ale nauczyciel jeszcze kończy myśl zdania. Co robisz?",
          options: ["Czekam w ciszy na słowa nauczyciela: Dziękuję, możecie wyjść na przerwę.", "Pakuję spokojnie swoje przybory, czekając na oficjalny koniec zajęć.", "Słucham uważnie podsumowania lekcji i zadanego ćwiczenia domowego.", "Wstaję dopiero w momencie, gdy nauczyciel pożegna całą naszą klasę."],
          correctWord: "Czekam w ciszy na słowa nauczyciela: Dziękuję, możecie iść na przerwę"
        }
      ]
    }
  ],
  2: [
    {
      titlePl: 'Żaba: Piórnik i Lekcja',
      subtitlePl: 'Przybory w ławce szkolnej',
      descriptionPl: 'Żabka wskoczyła na blat ławki! Wskaż właściwy przybór.',
      questions: [
        {
          promptPl: "Czym zapisujesz starannie notatkę z tablicy w zeszycie?",
          options: ["Długopisem", "Linijką", "Gumką", "Plecakiem"],
          correctWord: "Długopisem"
        },
        {
          promptPl: "Narysowałeś krzywą linię ołówkiem. Czym ją wymażesz?",
          options: ["Gumką do ścierania", "Korektorem w płynie", "Kredką świecową", "Nożyczkami"],
          correctWord: "Gumką do ścierania"
        },
        {
          promptPl: "Potrzebujesz narysować idealnie prosty odcinek na geometrii. Czego użyjesz?",
          options: ["Linijki", "Temperówki", "Klej w sztyfcie", "Długopisu"],
          correctWord: "Linijki"
        },
        {
          promptPl: "Gdzie uczeń trzyma wszystkie długopisy, ołówki i gumki?",
          options: ["W piórniku szkolnym", "W szafce na obuwie", "W kieszeni kurtki", "W teczce rysunkowej"],
          correctWord: "W piórniku"
        },
        {
          promptPl: "Ołówek złamał się podczas rysowania. Czym naostrzysz grafit?",
          options: ["Temperówką", "Cyrklem", "Nożyczkami", "Pędzlem"],
          correctWord: "Temperówką"
        },
        {
          promptPl: "Czym wytniesz kolorowy obrazek z papieru na plastyce?",
          options: ["Nożyczkami", "Ekierką", "Korektorem", "Linijką"],
          correctWord: "Nożyczkami"
        },
        {
          promptPl: "Czym przykleisz wycięty kształt do kartki w bloku technicznym?",
          options: ["Klejem w sztyfcie", "Gumką chlebową", "Plasteliną", "Kredą"],
          correctWord: "Klejem w sztyfcie"
        },
        {
          promptPl: "W czym nosisz podręczniki, zeszyty i drugie śniadanie do szkoły?",
          options: ["W tornistrze szkolnym", "W piórniku z zamkiem", "W teczce na rysunki", "W worku na trampki"],
          correctWord: "W tornistrze / plecaku"
        },
        {
          promptPl: "Który przybór służy do kreślenia okręgów i łuków na matematyce?",
          options: ["Cyrkiel", "Kątomierz", "Ekierka", "Taśma klejąca"],
          correctWord: "Cyrkiel"
        },
        {
          promptPl: "Jakim przyrządem mierzymy miarę kątów w stopniach?",
          options: ["Kątomierzem", "Korektorem", "Linijką 20 cm", "Kredą tablicową"],
          correctWord: "Kątomierzem"
        },
        {
          promptPl: "Trójkątna linijka służąca do wyznaczania kąta prostego (90°) to:",
          options: ["Ekierka", "Kątomierz", "Cyrkiel", "Wodomierz"],
          correctWord: "Ekierka"
        },
        {
          promptPl: "Czym zamalowujesz ważny fragment definicji w podręczniku, by rzucał się w oczy?",
          options: ["Zakreślaczem fluorescencyjnym", "Czarnym markerem do tablicy", "Białym korektorem w taśmie", "Ołówkiem o miękkim graficie"],
          correctWord: "Zakreślaczem fluorescencyjnym"
        },
        {
          promptPl: "Gdzie uczeń zapisuje plan lekcji, zadania domowe i ważne terminy sprawdzianów?",
          options: ["W terminarzu / dzienniczku ucznia", "W bloku rysunkowym do plastyki", "Na marginesie zeszytu ćwiczeń", "W telefonie komórkowym w klasie"],
          correctWord: "W terminarzu / dzienniczku ucznia"
        },
        {
          promptPl: "Przybór malarski złożony z trzonka i włosia do nakładania farb wodnych to:",
          options: ["Pędzel", "Dłuto", "Szpachla", "Ołówek grafitowy"],
          correctWord: "Pędzel"
        },
        {
          promptPl: "Masa plastyczna używana na plastyce do lepienia figurek i modeli to:",
          options: ["Plastelina lub modelina", "Biała kreda tablicowa", "Płynny klej biurowy", "Niebieski atrament"],
          correctWord: "Plastelina / modelina"
        },
        {
          promptPl: "Zeszyt w kratkę najczęściej wykorzystujemy na lekcjach:",
          options: ["Matematyki i fizyki", "Języka polskiego", "Muzyki i śpiewu", "Plastyki i sztuki"],
          correctWord: "Matematyki i fizyki"
        },
        {
          promptPl: "Zeszyt w wąskie linie z czerwoną linią pomocniczą ułatwia:",
          options: ["Naukę kaligrafii i starannego kształtowania liter", "Kreślenie wykresów funkcji i figur geometrycznych", "Zapisywanie nut na pięciolinii w sali muzycznej", "Rozwiązywanie skomplikowanych ułamków dziesiętnych"],
          correctWord: "Naukę kaligrafii i starannego kształtowania liter"
        },
        {
          promptPl: "Pojemnik ze szczelnym zamknięciem na kanapkę do szkoły to:",
          options: ["Śniadaniówka (lunchbox)", "Teczka z gumką na akta", "Piórnik tubowy na suwak", "Worek na zmienne obuwie"],
          correctWord: "Śniadaniówka (lunchbox)"
        },
        {
          promptPl: "Czym zepniesz luźne kartki referatu przed oddaniem nauczycielowi?",
          options: ["Spinaczem biurowym lub zszywaczem", "Plastikową linijką kreślarską", "Korektorem w płynnym pędzelku", "Okrągłą temperówką do kredek"],
          correctWord: "Spinaczem biurowym lub zszywaczem"
        },
        {
          promptPl: "W czym trzymamy zmienne obuwie sportowe na zajęcia wychowania fizycznego?",
          options: ["W worku na obuwie zmienne", "W piórniku z przyborami", "W teczce na dokumentację", "W kieszeni bocznej spodni"],
          correctWord: "W worku na kapcie / obuwie"
        }
      ]
    }
  ],
  3: [
    {
      titlePl: 'Żaba: Przestrzenie Szkolne',
      subtitlePl: 'Miejsca w gmachu szkoły',
      descriptionPl: 'Żabka skacze między salami! Wskaż właściwe miejsce w szkole.',
      questions: [
        {
          promptPl: "Gdzie w szkole można wypożyczyć lekturę, atlas lub ciekawą powieść?",
          options: ["W bibliotece szkolnej", "W szatni uczniowskiej", "W kantorku nauczycieli", "W gabinecie lekarskim"],
          correctWord: "W bibliotece szkolnej"
        },
        {
          promptPl: "Jaka zasada bezwzględnie obowiązuje w czytelni biblioteki szkolnej?",
          options: ["Zachowanie ciszy i spokoju", "Głośne śpiewanie piosenek", "Bieganie dookoła regałów", "Jedzenie posiłków z tacy"],
          correctWord: "Zachowanie ciszy i spokoju"
        },
        {
          promptPl: "Gdzie uczniowie bezpiecznie zostawiają kurtki, płaszcze i buty po przyjściu do szkoły?",
          options: ["W szatni szkolnej", "W sali chemicznej", "Na boisku szkolnym", "W auli uroczystości"],
          correctWord: "W szatni szkolnej"
        },
        {
          promptPl: "Gdzie spożywasz ciepły obiad przygotowany w szkole?",
          options: ["Na stołówce szkolnej", "W sali gimnastycznej", "W czytelni biblioteki", "W pracowni fizycznej"],
          correctWord: "Na stołówce szkolnej"
        },
        {
          promptPl: "Do kogo udasz się w szkole, gdy nagle rozboli cię brzuch lub zranisz kolano?",
          options: ["Do pielęgniarki szkolnej", "Do woźnego w portierni", "Do bibliotekarza w czytelni", "Do kierowcy autobusu szkolnego"],
          correctWord: "Do pielęgniarki szkolnej"
        },
        {
          promptPl: "Na jakiej sali odbywają się mecze koszykówki, siatkówki i testy sprawnościowe?",
          options: ["Na sali gimnastycznej", "W pracowni komputerowej", "W czytelni bibliotecznej", "W auli koncertowej szkoły"],
          correctWord: "Na sali gimnastycznej"
        },
        {
          promptPl: "Gdzie odbywają się uroczyste apele, akademie i rozdanie nagród szkolnych?",
          options: ["W auli szkolnej", "W piwnicy szkoły", "W szatni uczniów", "W stołówce małej"],
          correctWord: "W auli szkolnej"
        },
        {
          promptPl: "Gdzie spędzasz bezpiecznie czas przed lekcjami pod opieką wychowawców, czekając na rodziców?",
          options: ["W świetlicy szkolnej", "Za ogrodzeniem szkoły", "Na schodach pożarowych", "Na strychu budynku"],
          correctWord: "W świetlicy szkolnej"
        },
        {
          promptPl: "Kto w szkole pomaga uczniom w trudnych emocjach, konfliktach rówieśniczych i stresie?",
          options: ["Pedagog i psycholog szkolny", "Pracownik firmy sprzątającej", "Szef kuchni w stołówce", "Kierowca dostarczający towar"],
          correctWord: "Pedagog i psycholog szkolny"
        },
        {
          promptPl: "W jakiej pracowni znajdują się komputery z dostępem do sieci i monitorem interaktywnym?",
          options: ["W pracowni informatycznej", "W pracowni biologicznej", "W szatni uczniowskiej", "W kantorku ze sprzętem"],
          correctWord: "W pracowni informatycznej"
        },
        {
          promptPl: "Gdzie nauczyciele spotykają się podczas przerw i przygotowują materiały do lekcji?",
          options: ["W pokoju nauczycielskim", "W czytelni biblioteki", "Na boisku wielofunkcyjnym", "W magazynie podręczników"],
          correctWord: "W pokoju nauczycielskim"
        },
        {
          promptPl: "Co należy zrobić ze zużytą tacką i sztućcami po zjedzeniu obiadu na stołówce?",
          options: ["Odnieść do okienka zwrotu naczyń", "Zostawić na środku stołu jadalnego", "Wyrzucić do pojemnika na plastik", "Przesunąć na sąsiednie wolne krzesło"],
          correctWord: "Odnieść do okienka zwrotu naczyń"
        },
        {
          promptPl: "Gdzie w szkole znajduje się tablica ogłoszeń z dyżurami nauczycieli i planem zajęć?",
          options: ["W głównym holu szkoły", "W kabinie toaletowej", "W szatni pod ławkami", "W szafce gospodarczej"],
          correctWord: "W głównym holu szkoły"
        },
        {
          promptPl: "Karta czytelnika z kodem kreskowym w bibliotece służy do:",
          options: ["Rejestrowania wypożyczeń i zwrotów książek", "Opłacania posiłków w szkolnej stołówce", "Otwierania drzwi do sali komputerowej", "Wpisywania ocen z zachowania w semestrze"],
          correctWord: "Rejestrowania wypożyczeń i zwrotów książek"
        },
        {
          promptPl: "Jakie obuwie obowiązuje na parkiecie sali gimnastycznej?",
          options: ["Obuwie sportowe z jasną, niebrudzącą podeszwą", "Klapki kąpielowe przeznaczone pod prysznic", "Eleganckie skórzane półbuty z twardym obcasem", "Kalosze przeciwdeszczowe z grubym bieżnikiem"],
          correctWord: "Obuwie sportowe z jasną, niebrudzącą podeszwą"
        },
        {
          promptPl: "W którym miejscu szkoły gromadzimy się podczas próbnego alarmu ewakuacyjnego?",
          options: ["W wyznaczonym punkcie zbiórki na boisku szkolnym", "W podziemnych korytarzach piwnicy budynku", "W zamkniętych pomieszczeniach toaletowych", "W szatni szkolnej przy szafkach ubraniowych"],
          correctWord: "W wyznaczonym punkcie zbiórki na boisku szkolnym"
        },
        {
          promptPl: "Co robisz, gdy w pracowni chemicznej widzisz butelkę z symbolem substancji żrącej?",
          options: ["Nie dotykam bez wyraźnej zgody i nadzoru nauczyciela", "Otwieram butelkę i sprawdzam zapach substancji", "Wylewam zawartość do szkolnego zlewu laboratoryjnego", "Przelewam ciecz do probówki kolegi bez rękawic"],
          correctWord: "Nie dotykam bez wyraźnej zgody i nadzoru nauczyciela"
        },
        {
          promptPl: "Kto zarządza pracą całej placówki szkolnej i podejmuje najważniejsze decyzje?",
          options: ["Dyrektor szkoły wraz z wicedyrektorami", "Kapitan szkolnej drużyny piłkarskiej", "Przewodniczący samorządu uczniowskiego", "Konserwator dbający o szkolne instalacje"],
          correctWord: "Dyrektor szkoły"
        },
        {
          promptPl: "Jakie pomieszczenie służy do bezpiecznego przechowywania odczynników chemicznych i pomocy naukowych?",
          options: ["Zaplecze pracowni / kantorek", "Szatnia uczniów w podziemiu", "Toaleta dla odwiedzających", "Korytarz główny przed aulą"],
          correctWord: "Zaplecze pracowni / kantorek"
        },
        {
          promptPl: "Co znajduje się przy każdym wyjściu ewakuacyjnym w szkolnym korytarzu?",
          options: ["Podświetlany zielony znak z sylwetką biegnącego człowieka", "Czarny plakat informujący o repertuarze kinowym", "Duże lustro stojące w drewnianej ozdobnej ramie", "Wieszak na ubrania wierzchnie przy drzwiach wejściowych"],
          correctWord: "Podświetlany zielony znak z sylwetką biegnącego człowieka"
        }
      ]
    }
  ],
  4: [
    {
      titlePl: 'Żaba: Zasady i Bezpieczeństwo',
      subtitlePl: 'Regulamin i kultura szkolna',
      descriptionPl: 'Żabka dba o bezpieczeństwo na przerwach! Wybierz poprawną zasadę.',
      questions: [
        {
          promptPl: "Jaki sygnał dźwiękowy ogłasza w szkole początek i koniec lekcji?",
          options: ["Dzwonek szkolny", "Gwizdek sędziego", "Syrena okrętowa", "Bicie bębnów"],
          correctWord: "Dzwonek szkolny"
        },
        {
          promptPl: "Co robimy na korytarzu podczas przerwy międzylekcyjnej?",
          options: ["Spacerujemy spokojnie i rozmawiamy", "Biegamy sprintem między drzwiami", "Jeździmy na hulajnodze elektrycznej", "Rzucamy ciężkimi tornistrami"],
          correctWord: "Spacerujemy spokojnie i rozmawiamy"
        },
        {
          promptPl: "Jak reagujemy na widok biegających i popychających się młodszych kolegów?",
          options: ["Zwracamy uwagę spokojnym głosem: Uważajcie, możecie zrobić sobie krzywdę!", "Podbiegamy i krzyczymy na nich, używając obraźliwych i ostrych słów.", "Udajemy, że nic nie widzimy, i odchodzimy w przeciwnym kierunku korytarza.", "Zaczynamy biec razem z nimi, dopingując ich do szybszego wyścigu."],
          correctWord: "Zwracamy uwagę spokojnym głosem: Uważajcie, możecie zrobić sobie krzywdę!"
        },
        {
          promptPl: "Kto czuwa nad bezpieczeństwem uczniów na korytarzach w trakcie przerw?",
          options: ["Nauczyciele pełniący dyżur", "Przechodnie z ulicy", "Kierowcy taksówek", "Policja drogowa"],
          correctWord: "Nauczyciele pełniący dyżur"
        },
        {
          promptPl: "Gdzie wyrzucamy papierki po drugim śniadaniu na przerwie?",
          options: ["Do kosza na śmieci", "Na parapet okienny", "Pod kaloryfer w sali", "Za szafę w korytarzu"],
          correctWord: "Do kosza na śmieci"
        },
        {
          promptPl: "Czy podczas krótkiej przerwy wolno samowolnie opuszczać teren szkoły?",
          options: ["Nie, bez zgody nauczyciela nie wolno opuszczać terenu szkoły.", "Tak, podczas przerw uczeń może swobodnie iść do pobliskiego sklepu.", "Tak, o ile powróci przed zakończeniem dzwonka na następną lekcję.", "Nie ma żadnych przepisów regulujących przebywanie na terenie szkoły."],
          correctWord: "Nie, bez zgody rodzica lub nauczyciela nie wolno opuszczać terenu"
        },
        {
          promptPl: "Jak poruszamy się po szkolnych klatkach schodowych?",
          options: ["Prawą stroną schodów, trzymając się poręczy", "Zjeżdżając po metalowej poręczy schodów", "Zbiegając z góry po kilka stopni naraz", "Środkiem schodów, blokując ruch z góry"],
          correctWord: "Prawą stroną schodów, trzymając się poręczy"
        },
        {
          promptPl: "Co robisz, gdy kolega zasłabł na korytarzu w czasie przerwy?",
          options: ["Natychmiast wzywam nauczyciela dyżurnego lub pielęgniarkę.", "Robię zdjęcie smartfonem i publikuję na czacie klasowym.", "Odchodzę obojętnie, uznając, że ktoś inny mu pomoże.", "Próbuję na siłę postawić go na nogi bez żadnej pomocy."],
          correctWord: "Natychmiast wołam nauczyciela dyżurnego lub pielęgniarkę"
        },
        {
          promptPl: "Jaka zasada dotyczy używania telefonów komórkowych w szkole według statutu?",
          options: ["Telefony są wyciszone i schowane w plecakach podczas zajęć.", "Telefony leżą na ławkach i służą do pisania na czatach.", "Telefony wolno używać do nagrywania kolegów na przerwach.", "Telefony można ładować w każdej sali bez zgody dyrekcji."],
          correctWord: "Telefony są wyciszone i schowane w plecakach podczas zajęć"
        },
        {
          promptPl: "Co robisz, gdy widzisz rozlaną wodę na kafelkach przy dystrybutorze?",
          options: ["Zgłaszam to woźnemu lub nauczycielowi, by nikt się nie poślizgnął.", "Ślizgam się po mokrej posadzce z rozpędu dla żartu.", "Przechodzę obojętnie, czekając aż woda sama wyschnie.", "Stawiam plecak na rozlanej wodzie, aby ją zasłonić."],
          correctWord: "Zgłaszam to woźnemu lub nauczycielowi, by nikt się nie poślizgnął"
        },
        {
          promptPl: "Jak należy wchodzić do klasy po zakończeniu przerwy?",
          options: ["Spokojnie, ustawiając się rzędem przed drzwiami do sali.", "Wpychając się łokciami na pierwsze miejsce w kolejce.", "Napierając całym ciałem na zamknięte skrzydło drzwi.", "Wbiegając z krzykiem do klasy zaraz po dzwonku."],
          correctWord: "Spokojnie, ustawiając się parami lub rzędem przed drzwiami"
        },
        {
          promptPl: "Gdzie bezpiecznie otwieramy okna w klasie w celu przewietrzenia sali?",
          options: ["Robi to wyłącznie nauczyciel lub dyżurny pod jego opieką.", "Może to zrobić każdy uczeń w trakcie trwania przerwy.", "Okna otwiera się dopiero po zakończeniu wszystkich zajęć.", "Otwieranie okien w szkole jest całkowicie zabronione."],
          correctWord: "Robi to wyłącznie nauczyciel lub dyżurny pod jego okiem"
        },
        {
          promptPl: "Co należy zrobić z plecakiem podczas lekcji, aby korytarz między ławkami był drożny?",
          options: ["Powiesić na haczyku przy ławce lub postawić przy nodze krzesła.", "Rzucić na środek przejścia między rzędami ławek szkolnych.", "Położyć na wolnym krześle sąsiada, blokując mu miejsce.", "Zostawić na parapecie okiennym obok doniczek z kwiatami."],
          correctWord: "Powiesić na haczyku przy ławce lub postawić przy nodze krzesła"
        },
        {
          promptPl: "Jak zachowujemy się w szkolnej kolejce po obiad lub bułkę w sklepiku?",
          options: ["Stoimy cierpliwie w kolejce i czekamy na swoją kolej.", "Przeciskamy się na sam początek kolejki bez pytania.", "Prosimy kolegę z przodu, by kupił posiłek za nas.", "Stajemy z boku lady i głośno domagamy się obsługi."],
          correctWord: "Stoimy cierpliwie w kolejce i nie wpychamy się"
        },
        {
          promptPl: "Dlaczego nie wolno huśtać się na krześle podczas lekcji?",
          options: ["Grozi to bolesnym upadkiem i urazem głowy lub kręgosłupa.", "Powoduje to zniszczenie nawierzchni parkietu w klasie.", "Przeszkadza to nauczycielowi w pisaniu kredą po tablicy.", "Jest to dozwolone, o ile uczeń zachowuje równowagę ciała."],
          correctWord: "Grozi to bolesnym upadkiem i urazem głowy lub kręgosłupa"
        },
        {
          promptPl: "Co robisz, gdy zauważysz dym wydobywający się z gniazdka elektrycznego?",
          options: ["Niezwłocznie informuję nauczyciela i nie dotykam instalacji.", "Próbuję ugasić dym wodą mineralną z własnego bidonu.", "Zasłaniam gniazdko plecakiem, by nie było widać dymu.", "Wypinam kabel szarpnięciem za przewód elektryczny."],
          correctWord: "Niezwłocznie informuję nauczyciela i nie dotykam instalacji"
        },
        {
          promptPl: "Jakie zachowanie jest przejawem przemocy rówieśniczej (cyberbullyingu)?",
          options: ["Wysyłanie obraźliwych memów i wykluczanie z grup w sieci.", "Wspólne powtarzanie materiału do klasówki na czacie.", "Dzielenie się notatkami z lekcji z nieobecnym uczniem.", "Organizowanie zbiórki charytatywnej na forum klasy."],
          correctWord: "Wysyłanie obraźliwych memów i wykluczanie z grup klasowych"
        },
        {
          promptPl: "Do kogo uczeń może zgłosić przypadek dręczenia lub nękania w klasie?",
          options: ["Do wychowawcy, pedagoga szkolnego lub rodziców.", "Do administratora anonimowego forum w internecie.", "Do kolegów ze starszych klas podczas przerwy obiadowej.", "Sprawę należy przemilczeć i radzić sobie w pojedynkę."],
          correctWord: "Do wychowawcy, pedagoga szkolnego lub rodziców"
        },
        {
          promptPl: "Podczas przerwy obiadowej kolega zapomniał portfela i jest głodny. Jak postąpisz?",
          options: ["Dzielę się z nim swoją drugą kanapką lub jabłkiem.", "Proponuję, by pożyczył pieniądze od obcych uczniów.", "Mówię, że powinien był pamiętać o portfelu rano.", "Ignoruję sprawę, bo każdy sam dba o swoje posiłki."],
          correctWord: "Dzielę się swoją drugą kanapką lub jabłkiem"
        },
        {
          promptPl: "Czym charakteryzuje się postawa asertywna na szkolnym korytarzu?",
          options: ["Umiejętnością spokojnego i stanowczego mówienia «nie» bez agresji.", "Zgadzaniem się na wszystkie żądania kolegów dla świętego spokoju.", "Krzykiem i agresywnym narzucaniem swojego zdania innym uczniom.", "Unikaniem kontaktu wzrokowego i rezygnacją z własnych praw w grupie."],
          correctWord: "Umiejętnością spokojnego i stanowczego mówienia «nie» bez agresji"
        }
      ]
    }
  ],
  5: [
    {
      titlePl: 'Żaba: Uroczystości i Tradycje',
      subtitlePl: 'Święta szkolne i egzaminy',
      descriptionPl: 'Żabka uczestniczy w życiu szkoły! Wybierz trafną odpowiedź.',
      questions: [
        {
          promptPl: "W którym miesiącu uroczyście rozpoczyna się rok szkolny w Polsce?",
          options: ["We wrześniu (dokładnie pierwszego września)", "W czerwcu przed rozpoczęciem wakacji", "W grudniu tuż przed przerwą świąteczną", "W lutym po zakończeniu ferii zimowych"],
          correctWord: "We wrześniu (1 września)"
        },
        {
          promptPl: "W którym miesiącu uczniowie odbierają świadectwa i rozpoczynają wakacje?",
          options: ["W czerwcu (pod koniec miesiąca)", "We wrześniu po wakacjach", "W lutym po feriach zimowych", "W listopadzie przed przerwą"],
          correctWord: "W czerwcu (pod koniec czerwca)"
        },
        {
          promptPl: "Jaki strój obowiązuje uczniów podczas uroczystego rozpoczęcia i zakończenia roku szkolnego?",
          options: ["Strój galowy (biała koszula, ciemne spodnie lub spódnica)", "Dowolny strój codzienny, na przykład dres lub bluza", "Sportowy strój gimnastyczny przeznaczony na lekcje WF-u", "Kolorowe przebranie karnawałowe z maską i rekwizytem"],
          correctWord: "Strój galowy (biała koszula, ciemne spodnie lub spódnica)"
        },
        {
          promptPl: "Jak nazywa się święto edukacji obchodzone w Polsce 14 października?",
          options: ["Dzień Edukacji Narodowej (Dzień Nauczyciela)", "Szkolne Mikołajki połączone z prezentami", "Pierwszy Dzień Wiosny zwany dniem wagarów", "Święto Sportu Szkolnego i Igrzysk Dzieci"],
          correctWord: "Dzień Edukacji Narodowej (Dzień Nauczyciela)"
        },
        {
          promptPl: "Święto pierwszoklasistów, podczas którego uroczyście zostają przyjęci do społeczności szkoły to:",
          options: ["Ślubowanie i pasowanie na ucznia", "Pisemny egzamin dojrzałości", "Szkolny bal karnawałowy klas", "Tygodniowy wyjazd na zieloną szkołę"],
          correctWord: "Ślubowanie i pasowanie na ucznia"
        },
        {
          promptPl: "Czym wielkim dyrektor szkoły symbolicznie dotyka ramienia pierwszoklasisty podczas pasowania?",
          options: ["Wielkim ozdobnym ołówkiem", "Drewnianym berłem królewskim", "Pamiątkowym proporcem szkoły", "Długim wskaźnikiem drewnianym"],
          correctWord: "Wielkim ozdobnym ołówkiem"
        },
        {
          promptPl: "Kto prowadzi ceremonię zakończenia roku szkolnego i wręcza świadectwa z wyróżnieniem?",
          options: ["Dyrekcja szkoły wraz z wychowawcami klasowymi", "Przewodniczący rady rodziców i opiekunowie", "Przedstawiciele lokalnych władz oświatowych", "Gospodarze klas ósmych kończących szkołę"],
          correctWord: "Dyrekcja szkoły wraz z wychowawcami"
        },
        {
          promptPl: "Jakim kolorem paska wyróżnione jest najlepsze świadectwo szkolne (średnia od 4,75)?",
          options: ["Biało-czerwonym paskiem na świadectwie", "Złotym tłoczeniem na krawędzi arkusza", "Niebieską pieczęcią kuratora oświaty", "Srebrną wstęgą z herbem ministerstwa"],
          correctWord: "Czerwonym (biało-czerwonym)"
        },
        {
          promptPl: "Jaka pieśń państwowa jest odśpiewywana na baczność podczas inauguracji roku szkolnego?",
          options: ["Mazurek Dąbrowskiego (Hymn Rzeczypospolitej)", "Rota Marii Konopnickiej w wersji chóralnej", "Hymn szkolny odśpiewywany przez absolwentów", "Gaudeamus Igitur w wykonaniu orkiestry"],
          correctWord: "Mazurek Dąbrowskiego (Hymn Narodowy)"
        },
        {
          promptPl: "Poczet sztandarowy szkoły składa się z:",
          options: ["Chorążego trzymającego sztandar oraz asysty uczennic w strojach galowych", "Przewodniczącego samorządu w asyście nauczyciela wychowania fizycznego", "Grupy uczniów wyróżnionych za najwyższą średnią ocen w minionym roku", "Gospodarzy klas pierwszych składających uroczystą przysięgę ślubowania"],
          correctWord: "Chorążego trzymającego sztandar oraz asysty uczennic w strojach galowych"
        },
        {
          promptPl: "Jaką komendę wydaje prowadzący apel przed wprowadzeniem sztandaru szkoły?",
          options: ["Baczność! Poczet sztandarowy – wprowadzić!", "Baczność! Do hymnu państwowego – powstań!", "Spocznij! Można zająć miejsca na sali gimnastycznej!", "Baczność! Poczet sztandarowy – odprowadzić!"],
          correctWord: "Baczność! Poczet sztandarowy – wprowadzić!"
        },
        {
          promptPl: "Organizacja reprezentująca wszystkich uczniów danej szkoły i organizująca akcje charytatywne to:",
          options: ["Samorząd Uczniowski", "Rada Rodziców Szkoły", "Komitet Wolontariatu", "Koło Naukowe Młodzieży"],
          correctWord: "Samorząd Uczniowski"
        },
        {
          promptPl: "Jak nazywa się dokument prawny określający prawa i obowiązki każdego ucznia danej szkoły?",
          options: ["Statut szkoły i wewnątrzszkolny regulamin", "Kodeks ruchu drogowego dla pieszych", "Regulamin miejskiej komunikacji autobusowej", "Ustawa o ochronie danych osobowych"],
          correctWord: "Statut szkoły"
        },
        {
          promptPl: "Które z poniższych świąt narodowych jest uroczyście obchodzone w szkole 11 listopada?",
          options: ["Narodowe Święto Niepodległości (11 listopada)", "Święto Pracy i Solidarności Ludzi Pracy", "Międzynarodowy Dzień Języka Ojczystego", "Święto Edukacji Narodowej i Nauczycieli"],
          correctWord: "Narodowe Święto Niepodległości"
        },
        {
          promptPl: "Święto Konstytucji 3 Maja upamiętnia uchwalenie:",
          options: ["Uchwalenie pierwszej w Europie nowoczesnej konstytucji rządowej w 1791 r.", "Zawarcie unii polsko-litewskiej w Lublinie przez króla Zygmunta Augusta", "Zwycięstwo wojsk polskich pod Grunwaldem pod wodzą króla Władysława Jagiełły", "Odzyskanie niepodległości przez Polskę po 123 latach zaborów w 1918 roku"],
          correctWord: "Pierwszej w Europie nowoczesnej konstytucji rządowej z 1791 roku"
        },
        {
          promptPl: "Trzydniowy państwowy egzamin pisemny zdawany przez uczniów kończących szkołę podstawową to:",
          options: ["Egzamin ósmoklasisty CKE", "Ogólnopolski turniej wiedzy", "Test sprawności fizycznej", "Szkolna próbna klasówka"],
          correctWord: "Egzamin ósmoklasisty (CKE)"
        },
        {
          promptPl: "Jakie trzy przedmioty wchodzą w skład obowiązkowego egzaminu ósmoklasisty?",
          options: ["Język polski, matematyka oraz język obcy nowożytny", "Historia, wiedza o społeczeństwie oraz geografia", "Biologia, chemia oraz fizyka z elementami astronomii", "Informatyka, technika oraz edukacja dla bezpieczeństwa"],
          correctWord: "Język polski, matematyka i język obcy nowożytny"
        },
        {
          promptPl: "Zabawa karnawałowa organizowana w szkole przed okresem Wielkiego Postu to:",
          options: ["Bal karnawałowy / dyskoteka szkolna", "Uroczysty apel podsumowujący semestr", "Konferencja metodyczna dla nauczycieli", "Spotkanie informacyjne dyrekcji z rodzicami"],
          correctWord: "Bal karnawałowy / dyskoteka szkolna"
        },
        {
          promptPl: "Uroczysty tradycyjny taniec narodowy otwierający studniówki i bale absolwentów szkół to:",
          options: ["Dostojny polonez w parach", "Szybki krakowiak z przytupem", "Wesoły mazur ze skokami", "Tradycyjny kujawiak wolny"],
          correctWord: "Polonez"
        },
        {
          promptPl: "Co otrzymuje absolwent szkoły podstawowej potwierdzające jej ukończenie i wyniki egzaminów?",
          options: ["Świadectwo ukończenia szkoły podstawowej oraz oficjalne zaświadczenie o wynikach CKE", "Kartę rowerową uprawniającą do samodzielnej jazdy po drogach publicznych w gminie", "Bilet semestralny na przejazdy komunikacją miejską i podmiejską w regionie", "Puchar przechodni dyrektora szkoły dla najlepszego sportowca w roczniku klas ósmych"],
          correctWord: "Świadectwo ukończenia szkoły podstawowej oraz zaświadczenie CKE"
        }
      ]
    }
  ]
};

export function getZabaEncounter(floor = 1, variant = null, heroId = null) {
  const hid = heroId ? String(heroId).toLowerCase() : null;
  if (hid && HERO_ZABA_SETS[hid]) {
    const sets = Array.isArray(HERO_ZABA_SETS[hid]) ? HERO_ZABA_SETS[hid] : [HERO_ZABA_SETS[hid]];
    const selectedIdx = (variant !== null && variant >= 0 && variant < sets.length)
      ? variant
      : Math.floor(Math.random() * sets.length);
    const data = sets[selectedIdx];
    return {
      type: 'puppy_find_match',
      titlePl: data.titlePl,
      subtitlePl: data.subtitlePl,
      icon: './assets/Postacie/zaba.png',
      enemyName: 'Żaba',
      enemyMaxHp: 24,
      enemyDamage: 2,
      descriptionPl: data.descriptionPl,
      questions: [...data.questions]
    };
  }
  const f = Math.max(1, Math.min(5, Number(floor) || 1));
  const sets = ZABA_SETS_BY_FLOOR[f] || ZABA_SETS_BY_FLOOR[1];
  const idx = (variant !== null && variant >= 0 && variant < sets.length)
    ? variant
    : Math.floor(Math.random() * sets.length);
  const data = sets[idx];

  return {
    type: 'puppy_find_match',
    titlePl: data.titlePl,
    subtitlePl: data.subtitlePl,
    icon: './assets/Postacie/zaba.png',
    enemyName: 'Żaba',
    enemyMaxHp: 24,
    enemyDamage: 2,
    descriptionPl: data.descriptionPl,
    questions: [...data.questions]
  };
}

export const ZABA_FLOOR_ENCOUNTERS = {
  default: getZabaEncounter(1, 0),
  1: getZabaEncounter(1, 0),
  2: getZabaEncounter(2, 0),
  3: getZabaEncounter(3, 0),
  4: getZabaEncounter(4, 0),
  5: getZabaEncounter(5, 0)
};
