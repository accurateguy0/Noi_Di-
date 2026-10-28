# -*- coding: utf-8 -*-
"""
Generator rozszerzonej bazy wyzwań i pytań dla 6 bohaterów (Wojownik, Złodziej, Robot, Wynalazca, Wiedźma, Błazen)
oraz nieelitarnych wariantów postaci bossowych.
"""
import json

heroes = ['warrior', 'thief', 'robot', 'inventor', 'witch', 'jester']

# ==========================================
# 1. KOLEŻANKA - 6 SCENARIUSZY NA BOHATERA (36 ŁĄCZNIE)
# ==========================================
kolezanka_data = {
    'warrior': [
        {
            'titlePl': 'Koleżanka [Wojownik]: Turniej Sztafet',
            'subtitlePl': 'Dyscyplina i zasada fair play',
            'descriptionPl': 'Przygotujcie się do biegu sztafetowego! Ułóż etapy rozmowy w logiczną całość.',
            'steps': [
                '1. „Cześć! Zgłosiłeś naszą klasę do szkolnego biegu sztafetowego?”',
                '2. „Tak, mamy zgraną czwórkę i regularnie trenujemy na WF-ie!”',
                '3. „Pamiętajmy o zasadzie fair play – szanujemy każdego rywala!”',
                '4. „Jasne! Niezależnie od wyniku gratulujemy przeciwnikom na mecie.”',
                '5. „Dokładnie, prawdziwy sportowiec walczy do końca i z honorem!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wojownik]: Przygotowanie Sali WF',
            'subtitlePl': 'Asekuracja i bezpieczeństwo ćwiczeń',
            'descriptionPl': 'Przed gimnastyką trzeba rozłożyć sprzęt. Ułóż kroki w bezpiecznej kolejności.',
            'steps': [
                '1. „Hej, pomożesz mi rozłożyć materace pod drabinkami ściennymi?”',
                '2. „Pewnie, asekuracja i bezpieczeństwo podczas skoków to podstawa.”',
                '3. „Rozłóżmy też kozła gimnastycznego i sprawdźmy stabilność podpór.”',
                '4. „Świetnie, teraz żaden uczeń nie dozna bolesnej kontuzji.”',
                '5. „Trener na pewno doceni naszą odpowiedzialność i zgranie!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wojownik]: Opanowanie Stresu',
            'subtitlePl': 'Koncentracja i głęboki oddech przed startem',
            'descriptionPl': 'Stres przed finałowym biegiem? Ułóż rozmowę motywacyjną.',
            'steps': [
                '1. „Strasznie denerwuję się przed dzisiejszym startem na 60 metrów!”',
                '2. „Spokojnie, weź trzy głębokie oddechy i pomyśl o treningach.”',
                '3. „Masz rację, przepracowaliśmy solidnie każdy element startu z bloków.”',
                '4. „Skup się na własnym torze i biegnij swoim wyćwiczonym rytmem.”',
                '5. „Dzięki za wsparcie, teraz czuję pełną gotowość do rywalizacji!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wojownik]: Odwaga w Lekturze',
            'subtitlePl': 'Kamienie na szaniec i wzór męstwa',
            'descriptionPl': 'Dyskutujecie o postawie bohaterów Szarych Szeregów. Ułóż argumenty.',
            'steps': [
                '1. „Czytałeś rozdział o Akcji pod Arsenałem w Kamieniach na szaniec?”',
                '2. „Tak, determinacja i braterstwo Zośki i przyjaciół są niesamowite.”',
                '3. „Rudy mimo brutalnych przesłuchań nie zdradził żadnego z kolegów.”',
                '4. „To dowód, że największą siłą człowieka jest wierność ideałom.”',
                '5. „Tacy bohaterowie to prawdziwy wzór odwagi cywilnej dla każdego!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wojownik]: Sztandar Drużyny',
            'subtitlePl': 'Poprawna ortografia haseł motywacyjnych',
            'descriptionPl': 'Tworzycie transparent na zawody. Ułóż zdania w logiczny ciąg.',
            'steps': [
                '1. „Wypiszmy na transparencie hasło: W zdrowym ciele zdrowy duch!”',
                '2. „Pamiętajmy o pisowni «ch» w słowie duch oraz «rz» w zdrowym.”',
                '3. „Dodajmy też: Walczymy dzielnie do ostatniego gwizdka sędziego!”',
                '4. „Piękne kolory i brak błędów ortograficznych – transparent zachwyca!”',
                '5. „Z takim dopingiem nasza reprezentacja da z siebie sto procent!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wojownik]: Pierwsza Pomoc',
            'subtitlePl: 'Szybka reakcja przy zwichnięciu kostki',
            'descriptionPl: 'Kolega skręcił nogę podczas meczu. Ułóż procedurę ratunkową.',
            'steps': [
                '1. „Uwaga, Janek źle wylądował pod koszem i trzyma się za kostkę!”',
                '2. „Niech natychmiast usiądzie i nie obciąża bolącej stopy.”',
                '3. „Biegnę do gabinetu pielęgniarki po zimny kompres i bandaż.”',
                '4. „Schładzamy staw, unosimy nogę lekko w górę i powiadamiamy nauczyciela.”',
                '5. „Szybka i opanowana reakcja uchroniła go przed powikłaniami!”'
            ]
        }
    ],

    'thief': [
        {
            'titlePl': 'Koleżanka [Spryciarz]: Cyberpułapka',
            'subtitlePl': 'Demaskowanie podejrzanej wiadomości w sieci',
            'descriptionPl': 'Ktoś przysłał podejrzany link na grupie klasy! Ułóż dialog demaskujący oszustwo.',
            'steps': [
                '1. „Hej! Zobacz, dostałam na komunikatorze dziwną wiadomość z linkiem!”',
                '2. „Uważaj, treść ma błędy językowe i żąda podania hasła do konta!”',
                '3. „To typowy phishing – próba wyłudzenia danych przez oszusta.”',
                '4. „Masz rację, nie klikam w link i od razu blokuję ten podejrzany numer!”',
                '5. „Super decyzja! W sieci czujność i spryt to podstawa bezpieczeństwa.”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Spryciarz]: Asertywna Odmowa',
            'subtitlePl': 'Obrona własnej pracy przed odpisaniem',
            'descriptionPl': 'Kolega naciska, by dać mu odpisać wypracowanie. Ułóż kulturalną odmowę.',
            'steps': [
                '1. „Marek znowu domaga się, żebym dała mu odpisać całe wypracowanie.”',
                '2. „Pamiętaj, że masz pełne prawo asertywnie i spokojnie odmówić.”',
                '3. „Powiedz mu: Nie zgadzam się na odpisywanie, bo to nieuczciwe.”',
                '4. „Możesz dodać: Ale jeśli chcesz, chętnie wytłumaczę ci plan rozprawki.”',
                '5. „Dokładnie tak zrobię – jasno wyznaczam granice bez kłótni!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Spryciarz]: Weryfikacja Faktów',
            'subtitlePl': 'Odróżnianie prawdy od plotek i fejk newsów',
            'descriptionPl': 'Na korytarzu krąży sensacyjna plotka. Ułóż kroki weryfikacji.',
            'steps': [
                '1. „Słyszałeś, że podobno odwołano wszystkie piątkowe lekcje?”',
                '2. „Nie wierz plotkom na słowo – sprawdźmy oficjalny dziennik elektroniczny.”',
                '3. „Rzeczywiście, w ogłoszeniach dyrekcji nie ma o tym ani słowa!”',
                '4. „Ktoś puścił fejk newsa, żeby wywołać niepotrzebny chaos na korytarzu.”',
                '5. „Bystre oko i sprawdzanie wiarygodnych źródeł zawsze chronią przed manipulacją.”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Spryciarz]: Zgubiona Legitymacja',
            'subtitlePl': 'Uczciwe i bezpieczne postępowanie ze znalezionym dokumentem',
            'descriptionPl': 'Znalazłaś cudzą legitymację pod szafkami. Ułóż właściwe działanie.',
            'steps': [
                '1. „Spójrz, pod szafką leży czyjaś legitymacja szkolna z biletem!”',
                '2. „To ważny dokument tożsamości ucznia zawierający dane osobowe.”',
                '3. „Nie róbmy zdjęć i nie wrzucajmy ich do internetu.”',
                '4. „Zanieśmy ją od razu do sekretariatu lub do nauczyciela dyżurnego.”',
                '5. „Właściciel na pewno szybko i bezpiecznie ją tam odbierze!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Spryciarz]: Sprytne Negocjacje',
            'subtitlePl': 'Kulturalne przesunięcie terminu oddania makiety',
            'descriptionPl': 'Zabrakło wam czasu na dokończenie makiety zamku. Ułóż dialog negocjacyjny.',
            'steps': [
                '1. „Nie zdążymy dokleić wieży zamku Horeszków na jutrzejszy poranek!”',
                '2. „Podejdźmy na przerwie do pani i przedstawmy rzeczowe argumenty.”',
                '3. „Pokażemy zrobioną część i poprosimy o przedłużenie terminu do piątku.”',
                '4. „Uczciwe wyjaśnienie sytuacji jest o niebo lepsze niż zmyślanie wymówek.”',
                '5. „Pani doceni naszą szczerość i z pewnością da nam ten jeden dodatkowy dzień!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Spryciarz]: Czystość Językowa',
            'subtitlePl': 'Wychwytywanie pleonazmów w ogłoszeniu',
            'descriptionPl': 'Poprawiacie szkolne ogłoszenie. Ułóż logiczny proces eliminacji błędów.',
            'steps': [
                '1. „W szkicu ogłoszenia napisano: Cofnijmy się w tył w okresie czasu miesiąca maja.”',
                '2. „Przecież to aż dwa potężne pleonazmy w jednym zdaniu!”',
                '3. „Wystarczy napisać: Powróćmy pamięcią do maja.”',
                '4. „Usunęliśmy masło maślane, dzięki czemu tekst brzmi profesjonalnie.”',
                '5. „Czysta i zwięzła polszczyzna to prawdziwy znak mistrzowskiego sprytu!”'
            ]
        }
    ],

    'robot': [
        {
            'titlePl': 'Koleżanka [Robot]: Logiczna Prezentacja',
            'subtitlePl': 'Układanie precyzyjnego planu projektu',
            'descriptionPl': 'Czas na logiczny plan prezentacji! Ułóż zdania w ścisłej kolejności przyczynowo-skutkowej.',
            'steps': [
                '1. „Witaj! Mamy przygotować prezentację o układzie słonecznym.”',
                '2. „Przeanalizowałem strukturę: wstęp, teza, trzy argumenty i podsumowanie.”',
                '3. „Świetnie, pamiętaj o logicznej spójności między kolejnymi slajdami!”',
                '4. „Zastosowałem precyzyjne łączniki logiczne: ponieważ, wskutek tego oraz zatem.”',
                '5. „Twój plan jest przejrzysty jak algorytm – dostaniemy najwyższą notę!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Robot]: Debugowanie Zdań',
            'subtitlePl': 'Eliminacja błędów interpunkcyjnych w zdaniu złożonym',
            'descriptionPl': 'Przeanalizujcie interpunkcję zdania podrzędnego. Ułóż tok analizy.',
            'steps': [
                '1. „Sprawdźmy to zdanie: Wiedziałem że klasówka będzie trudna ale napisałem ją dobrze.”',
                '2. „Wykryłem brak przecinka przed spójnikiem podrzędnym że.”',
                '3. „Dodatkowo brakuje przecinka przed spójnikiem przeciwstawnym ale.”',
                '4. „Wstawiam brakujące znaki przestankowe w precyzyjnych miejscach rozbicia.”',
                '5. „Zdanie skompilowane poprawnie: pełna zgodność z regułami języka polskiego!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Robot]: Regulamin Pracowni',
            'subtitlePl: 'Jednoznaczne zasady bezpieczeństwa informatycznego',
            'descriptionPl': 'Opracowujecie regulamin sali komputerowej. Ułóż punkty w porządku logicznym.',
            'steps': [
                '1. „Punkt pierwszy: logowanie do stanowiska wyłącznie przy użyciu własnego loginu.”',
                '2. „Punkt drugi: bezwzględny zakaz spożywania napojów i posiłków przy klawiaturze.”',
                '3. „Punkt trzeci: zgłaszanie każdej usterki sprzętowej bezpośrednio nauczycielowi.”',
                '4. „Punkt czwarty: prawidłowe wylogowanie i uporządkowanie krzesła po zakończeniu zajęć.”',
                '5. „Zasady są jednoznaczne, zwięzłe i zapobiegają wszelkim awariom sprzętu!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Robot]: Oficjalne Podanie',
            'subtitlePl': 'Elementy formalnego pisma urzędowego',
            'descriptionPl': 'Przygotowujecie oficjalne podanie o salę na kółko naukowe. Ułóż układ pisma.',
            'steps': [
                '1. „W prawym górnym rogu umieszczamy miejscowość i bieżącą datę.”',
                '2. „Po lewej stronie wpisujemy dane wnioskodawcy, a poniżej adresata podania.”',
                '3. „Na środku umieszczamy nagłówek PODANIE oraz formułę Szanowna Pani Dyrektor!”',
                '4. „W treści przedstawiamy zwięzłą prośbę z logicznym uzasadnieniem celu spotkań.”',
                '5. „Pismo kończymy zwrotem Z poważaniem oraz czytelnym podpisem odręcznym.”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Robot]: Teza i Argumenty',
            'subtitlePl': 'Związki przyczynowo-skutkowe w rozprawce CKE',
            'descriptionPl': 'Konstruujecie logiczny wywód rozprawki. Ułóż strukturę argumentacji.',
            'steps': [
                '1. „Formułujemy jasną tezę: Przyjaźń to największa wartość w życiu człowieka.”',
                '2. „Wprowadzamy argument logiczny: Prawdziwy przyjaciel daje wsparcie w chwilach próby.”',
                '3. „Przywołujemy przykład literacki: Postawa Małego Księcia wobec Róży i Lisa.”',
                '4. „Wyciągamy cząstkowy wniosek: Z powyższego przykładu jednoznacznie wynika słuszność tezy.”',
                '5. „Łańcuch logiczny domknięty bez żadnych luk dowodowych!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Robot]: Raport z Eksperymentu',
            'subtitlePl': 'Ścisłość sprawozdania naukowego',
            'descriptionPl': 'Porządkujecie dane ze szkolnego eksperymentu fizycznego. Ułóż sekwencję raportu.',
            'steps': [
                '1. „Określamy cel badania oraz stawiamy hipotezę wyjściową.”',
                '2. „Wyszczególniamy aparaturę pomiarową i zastosowane odczynniki.”',
                '3. „Opisujemy przebieg doświadczenia krok po kroku w czasie przeszłym.”',
                '4. „Zestawiamy uzyskane pomiary w przejrzystej tabeli wyników.”',
                '5. „Formułujemy wniosek końcowy potwierdzający słuszność hipotezy!”'
            ]
        }
    ],

    'inventor': [
        {
            'titlePl': 'Koleżanka [Wynalazca]: Instrukcja Obsługi',
            'subtitlePl': 'Automat do ekologicznego recyklingu',
            'descriptionPl': 'Napiszcie instrukcję dla szkolnego automatu! Ułóż kroki w poprawnej chronologii.',
            'steps': [
                '1. „Cześć! Zbudowaliśmy szkolny automat do zgniatania butelek plastikowych.”',
                '2. „Teraz musimy przygotować czytelną instrukcję obsługi dla uczniów.”',
                '3. „Krok pierwszy: upewnij się, że butelka jest pusta i odkręć zakrętkę.”',
                '4. „Krok drugi: umieść butelkę w otworze i naciśnij zielony przycisk.”',
                '5. „Krok trzeci: odbierz z podajnika żeton na szkolną loterię ekologiczną!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wynalazca]: Prototyp Karmnika',
            'subtitlePl': 'Prezentacja projektu przed komisją konkursową',
            'descriptionPl': 'Przygotowujecie wystąpienie o innowacyjnym karmniku. Ułóż mowę prezentacyjną.',
            'steps': [
                '1. „Dzień dobry! Przedstawiamy prototyp samoczyszczącego się karmnika dla ptaków.”',
                '2. „Urządzenie wykonaliśmy w całości z drewna pochodzącego ze starych palet.”',
                '3. „Innowacyjny daszek chroni ziarno przed deszczem i automatycznie dozuje porcje.”',
                '4. „Dzięki temu ptaki mają zawsze świeży i suchy pokarm przez całą mroźną zimę.”',
                '5. „Dziękujemy za uwagę i zapraszamy komisję do zadawania pytań!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wynalazca]: Kuźnia Neologizmów',
            'subtitlePl': 'Tworzenie wyrazów złożonych ze spójką -o-',
            'descriptionPl': 'Wymyślacie nazwy dla nowych gadżetów. Ułóż proces słowotwórczy.',
            'steps': [
                '1. „Zaprojektowaliśmy małego robota, który sam zamiata podłogę w klasie.”',
                '2. „Połączmy podstawy słowotwórcze: samo oraz miot za pomocą spójki -o-.”',
                '3. „Otrzymujemy wyraz złożony: samozamiatacz!”',
                '4. „To doskonały przykład złożenia słowotwórczego wzbogacającego polszczyznę.”',
                '5. „Nazwa jest chwytliwa, zrozumiała i idealnie oddaje funkcję urządzenia!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wynalazca]: Hipotezy Badawcze',
            'subtitlePl': 'Tryb przypuszczający w planowaniu innowacji',
            'descriptionPl': 'Dyskutujecie o szkolnej mini-elektrowni wiatrowej. Ułóż wypowiedzi.',
            'steps': [
                '1. „Zastanawiam się, jak zwiększyć wydajność naszego wiatraka szkolnego.”',
                '2. „Gdybyśmy zmienili kąt nachylenia skrzydeł, turbina obracałaby się szybciej.”',
                '3. „Użyjmy lekkich kompozytów węglowych, co zmniejszyłoby masę wirnika.”',
                '4. „W ten sposób wygenerowalibyśmy energię do oświetlenia całej szatni!”',
                '5. „Tryb przypuszczający pozwala nam precyzyjnie planować naukowe eksperymenty.”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wynalazca]: Opis Przedmiotu CKE',
            'subtitlePl': 'Struktura wzorcowego opisu egzaminacyjnego',
            'descriptionPl': 'Piszecie opis mikroskopu laboratoryjnego. Ułóż elementy opisu.',
            'steps': [
                '1. „We wstępie przedstawiamy przedmiot: to nowoczesny mikroskop optyczny.”',
                '2. „Opisujemy budowę zewnętrzną: metalowy korpus, obrotowy rewolwer i okular.”',
                '3. „Wskazujemy materiały: hartowana stal, precyzyjne soczewki ze szkła kwarcowego.”',
                '4. „Wyjaśniamy funkcję: umożliwia obserwację komórek w tysiąckrotnym powiększeniu.”',
                '5. „W zakończeniu wyrażamy opinię: to niezastąpione narzędzie w pracowni biologicznej!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wynalazca]: Bezpieczeństwo Pracowni',
            'subtitlePl': 'Reguły BHP podczas majsterkowania',
            'descriptionPl': 'Opracowujecie procedurę bezpiecznego cięcia materiałów. Ułóż punkty BHP.',
            'steps': [
                '1. „Przed rozpoczęciem pracy zawsze zakładamy okulary ochronne i fartuch.”',
                '2. „Upewniamy się, że obrabiany element jest stabilnie zaciśnięty w imadle.”',
                '3. „Używamy wyłącznie ostrych, sprawnych narzędzi z nienaruszonym uchwytem.”',
                '4. „Po zakończeniu cięcia natychmiast odkładamy piłę na wyznaczone miejsce.”',
                '5. „Dyscyplina i czujność to gwarancja bezpiecznej i twórczej pracy inżyniera!”'
            ]
        }
    ],

    'witch': [
        {
            'titlePl': 'Koleżanka [Wiedźma]: Nastrój Ballady',
            'subtitlePl': 'Analiza poetyckich tajemnic natury',
            'descriptionPl': 'Odkryjcie tajemniczy nastrój w poezji! Ułóż wypowiedzi w harmonijną całość.',
            'steps': [
                '1. „Witaj! Czytałaś wczoraj balladę Świteź Adama Mickiewicza?”',
                '2. „Tak, ten mroczny, tajemniczy nastrój jeziora zrobił na mnie ogromne wrażenie!”',
                '3. „Zauważyłaś, jak poeta ożywił przyrodę za pomocą personifikacji?”',
                '4. „Woda w jeziorze wrzała, a gwiazdy na dnie zdawały się szeptać zaklęcia.”',
                '5. „Przyroda w romantyzmie nie jest tylko tłem, lecz żywym strażnikiem moralności!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wiedźma]: Rozmowa z Serca',
            'subtitlePl': 'Empatia i wsparcie w trudnym momencie',
            'descriptionPl': 'Koleżanka smuci się po recytacji wiersza. Ułóż dialog pełen ciepła.',
            'steps': [
                '1. „Widzę, że jesteś bardzo smutna po dzisiejszej lekcji polskiego.”',
                '2. „Zapomniałam dwóch wersów wiersza i bardzo się zawstydziłam przed klasą.”',
                '3. „Każdemu może zdarzyć się chwila tremy – twój głos brzmiał niezwykle pięknie!”',
                '4. „Naprawdę tak uważasz? Myślałam, że wszyscy będą się ze mnie śmiać.”',
                '5. „Prawdziwi przyjaciele doceniają twoją wrażliwość i odwagę wystąpienia!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wiedźma]: Róża i Lis',
            'subtitlePl': 'Filozoficzne lekcje w Małym Księciu',
            'descriptionPl': 'Analizujecie słynne cytaty z powiastki filozoficznej. Ułóż tok myśli.',
            'steps': [
                '1. „Dlaczego Mały Książę tak bardzo tęsknił za swoją pojedynczą Różą?”',
                '2. „Ponieważ to czas, który jej poświęcił, uczynił ją tak niesamowicie ważną.”',
                '3. „Lis nauczył go, że oswojenie oznacza stworzenie nierozerwalnych więzów serca.”',
                '4. „Stajesz się na zawsze odpowiedzialny za to, co oswoiłeś – to kluczowa mądrość.”',
                '5. „To jedno z najpiękniejszych przesłań o prawdziwej miłości i przyjaźni!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wiedźma]: Przestroga Dziadów',
            'subtitlePl': 'Świat duchów i zasady moralne w Dziadach cz. II',
            'descriptionPl': 'Interpretujecie obrzęd Dziadów Adama Mickiewicza. Ułóż refleksje.',
            'steps': [
                '1. „Zjawy dzieci, Józio i Rózia, proszą zgromadzonych o dwa ziarnka gorczycy.”',
                '2. „Dlaczego nie mogą zaznać spokoju, skoro w życiu nie popełniły żadnego zła?”',
                '3. „Guślarz wyjaśnia: Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie.”',
                '4. „Pełnia człowieczeństwa wymaga poznania zarówno radości, jak i ziemskiego trudu.”',
                '5. „Mickiewiczowski obrzęd przypomina o uniwersalnym prawie sprawiedliwości moralnej!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wiedźma]: Jesienny Pejzaż',
            'subtitlePl': 'Malowanie słowem za pomocą barwnych epitetów',
            'descriptionPl': 'Tworzycie poetycki opis przyrody na spacerze. Ułóż frazy w obraz.',
            'steps': [
                '1. „Spójrz, jak jesienne słońce złoci korony starych dębów w parku.”',
                '2. „Chłodny wiatr szeleści w gałęziach, unosząc purpurowy deszcz liści.”',
                '3. „Użyjmy metafory: Ścieżka została okryta szkarłatnym kobiercem jesieni.”',
                '4. „Apostrofa do nadchodzącego zmierzchu nada tekstowi tajemniczą głębię.”',
                '5. „Nasz opis zachwyca malarskością i przenosi czytelnika wprost do baśni!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Wiedźma]: Zbrodnia i Maliny',
            'subtitlePl': 'Tragizm i wyrzuty sumienia w Balladynie',
            'descriptionPl': 'Analizujecie motyw krwawej plamy w tragedii Słowackiego. Ułóż wnioski.',
            'steps': [
                '1. „Dzban pełen leśnych malin stał się przyczyną straszliwej zbrodni w puszczy.”',
                '2. „Balladyna zabiła swoją siostrę Alinę z chciwości i żądzy zdobycia korony.”',
                '3. „Krwawa plama na czole bohaterki to niezmywalne piętno zbrodni i wyrzutów sumienia.”',
                '4. „Nawet zdobycie tronu nie przyniosło jej szczęścia, lecz serię kolejnych morderstw.”',
                '5. „Finałowy piorun wymierza sprawiedliwość: zło zawsze spotyka zasłużona kara!”'
            ]
        }
    ],

    'jester': [
        {
            'titlePl': 'Koleżanka [Błazen]: Teatr i Komedia',
            'subtitlePl': 'Próba scenki z Zemsty Aleksandra Fredry',
            'descriptionPl': 'Czas na próbę szkolnego teatru! Ułóż dialog komediowy we właściwej kolejności.',
            'steps': [
                '1. „Cześć! Przećwiczymy scenę pisania listu przez Dyndalskiego i Cześnika?”',
                '2. „Koniecznie! Pamiętaj, żeby powtarzać z komicznym przejęciem: Niech się dzieje wola Nieba!”',
                '3. „Haha, a ja będę pisać z gęsim piórem: Bawet, bawet, bardzo proszę!”',
                '4. „Ważne, by w komedii zachować odpowiednie pauzy i didaskalia sceniczne.”',
                '5. „Na piątkowym przedstawieniu cała szkoła będzie pękać ze śmiechu!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Błazen]: Wpadka z Klasą',
            'subtitlePl': 'Rozładowanie niezręcznej sytuacji żartem',
            'descriptionPl': 'Potknąłeś się w drzwiach klasy. Ułóż reakcję, która wywoła sympatię.',
            'steps': [
                '1. „Ojej, potknęłam się o próg i rozsypałam wszystkie kredki po podłodze!”',
                '2. „Zamiast się czerwienić, zróbmy z tego wielkie sceniczne show!”',
                '3. „Ukłoń się z uśmiechem: Oto spektakularny taniec kolorowych kredek!”',
                '4. „Wszyscy zaczynają się śmiać razem z nami i chętnie pomagają zbierać przybory.”',
                '5. „Dystans do samego siebie i życzliwy humor potrafią rozbroić każdy wstyd!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Błazen]: Żart a Złośliwość',
            'subtitlePl': 'Etyka dowcipu i ochrona rówieśników przed hejtem',
            'descriptionPl': 'Ktoś opowiada krzywdzący kawał. Ułóż stanowczą i kulturalną reakcję.',
            'steps': [
                '1. „Słyszałaś, jaki złośliwy żart opowiadali w szatni o nowym koledze?”',
                '2. „To wcale nie był żart, tylko przykra złośliwość raniąca czyjeś uczucia.”',
                '3. „Prawdziwy humor bawi wszystkich zebranych i z nikogo nie szydzi.”',
                '4. „Podejdźmy i powiedzmy spokojnie: Przestańcie, to nie jest w porządku.”',
                '5. „Odwaga w obronie innych i mądry dowcip to najlepsze cechy dobrego kolegi!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Błazen]: Fraszka na Medal',
            'subtitlePl': 'Rymowane dzieło z zaskakującą puentą',
            'descriptionPl': 'Piszecie krótką fraszkę na szkolną tablicę. Ułóż proces twórczy.',
            'steps': [
                '1. „Wymyślmy rymowaną fraszkę o porannym wstawaniu do szkoły!”',
                '2. „Ułóżmy rymy parzyste: Budzik dzwoni wniebogłosy / Zaspany przecieram oczy.”',
                '3. „Teraz najważniejsza część gatunku: zaskakująca i dowcipna puenta na końcu!”',
                '4. „Choćbym pędził jak rakieta / I tak zamkną mi bufeta!”',
                '5. „Mistrzowska miniatura poetycka – Kochanowski byłby z nas dumny!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Błazen]: Fenomen Papkina',
            'subtitlePl': 'Analiza komizmu postaci Józefa Papkina',
            'descriptionPl': 'Dyskutujecie o najzabawniejszej postaci Fredry. Ułóż spostrzeżenia.',
            'steps': [
                '1. „Dlaczego postać Józefa Papkina w Zemście budzi tak wielki śmiech widzów?”',
                '2. „Bo istnieje ogromna sprzeczność między tym, co mówi, a tym, jak naprawdę postępuje!”',
                '3. „Kreuje się na lwa północy i pogromcę smoków, a mdleje ze strachu przed szablą.”',
                '4. „Komiczny testament, w którym zapisuje Klarze angielską gitarę, to szczyt humoru!”',
                '5. „Fredro genialnie obnażył ludzkie wady: samochwalstwo, tchórzostwo i gadulstwo!”'
            ]
        },
        {
            'titlePl': 'Koleżanka [Błazen]: Mądrość w Przysłowiach',
            'subtitlePl': 'Gry słowne i dowcipne interpretacje frazeologizmów',
            'descriptionPl': 'Odgadujecie sens polskich przysłów w zabawnych scenkach. Ułóż dialog.',
            'steps': [
                '1. „Co odpowiesz koledze, który mówi, że rzuca grochem o ścianę?”',
                '2. „Haha, zapytam go, czy ściana chociaż ugotowała z tego pyszną zupę grochową!”',
                '3. „A tak na poważnie: to znaczy, że ktoś mówi na próżno i nikt go nie słucha.”',
                '4. „Dokładnie! A gdy ktoś porywa się z motyką na słońce, podejmuje niemożliwe zadanie.”',
                '5. „Polskie przysłowia są pełne soczystego humoru i wielowiekowej mądrości życiowej!”'
            ]
        }
    ]
}

print("Koleżanka data defined successfully.")
