# -*- coding: utf-8 -*-
"""
Żaba - 6 zestawów na każdego z 6 bohaterów (łącznie 36 zestawów po 20 pytań = 720 pytań).
Pytania z podstawy programowej języka polskiego CKE dla szkół podstawowych.
Format: { promptPl, options: [...], correctWord: '...' }.
"""
import random

def get_zaba_data():
    heroes = ['warrior', 'thief', 'robot', 'inventor', 'witch', 'jester']
    result = {}

    hero_banks = {
        'warrior': [
            ("Który czasownik oznacza dynamiczny atak w rycerskim pojedynku?", ["Szarżować", "Uciekać", "Rozmyślać", "Drzemać"], "Szarżować"),
            ("Wskaż rzeczownik rodzaju męskoosobowego:", ["Rycerz", "Tarcza", "Zbroja", "Ognisko"], "Rycerz"),
            ("Jaki zwrot grzecznościowy wypowiada rycerz przed pojedynkiem turniejowym?", ["Staję do uczciwej walki z honorem!", "Zaraz cię pokonam w tej walce!", "Opuść tę arenę bez pojedynku!", "Nie mam ochoty na walkę z tobą!"], "Staję do uczciwej walki z honorem!"),
            ("Wskaż synonim do słowa «odważny»:", ["Mężny", "Tchórzliwy", "Ostrożny", "Lękliwy"], "Mężny"),
            ("Wskaż przymiotnik w stopniu najwyższym:", ["Najdzielniejszy", "Dzielniejszy", "Dzielny", "Bardziej dzielny"], "Najdzielniejszy"),
            ("Jaką część mowy stanowi słowo «walecznie»?", ["Przysłówek", "Czasownik", "Rzeczownik", "Przymiotnik"], "Przysłówek"),
            ("Wskaż wyraz z «ó» wymiennym:", ["Wódz (wymiana: wódz – wodza)", "Córka (wyraz z ó niewymiennym)", "Góra (wyraz z ó niewymiennym)", "Róża (wyraz z ó niewymiennym)"], "Wódz (wymiana: wódz – wodza)"),
            ("Jak brzmi wołacz od rzeczownika «wojownik»?", ["Wojowniku!", "Wojownik!", "Wojownikiem!", "Wojownika!"], "Wojowniku!"),
            ("Wybierz antonim do słowa «zwycięstwo»:", ["Porażka", "Triumf", "Wiktoria", "Sukces"], "Porażka"),
            ("Wskaż zdanie pojedyncze nierozwinięte:", ["Wojownik walczy.", "Tarcza upada.", "Trąbka gra.", "Kowal kuje."], "Wojownik walczy."),
            ("Wskaż wyraz z «rz» po spółgłosce:", ["Braterstwo", "Rzeka", "Orzeł", "Morze"], "Braterstwo"),
            ("Który wyraz jest poprawny ortograficznie?", ["Szabla", "Szabła", "Szablaa", "Rzabla"], "Szabla"),
            ("Wskaż związek zgody:", ["Dzielny rycerz", "Dobyć miecza", "Walczyć odważnie", "Tarcza z żelaza"], "Dzielny rycerz"),
            ("Jaki przypadek odpowiada na pytania: kogo? czego?", ["Dopełniacz", "Biernik", "Celownik", "Miejscownik"], "Dopełniacz"),
            ("Wskaż imiesłów przymiotnikowy czynny:", ["Walczący", "Pokonany", "Walcząc", "Pokonawszy"], "Walczący"),
            ("Jak poprawnie zapisać przeczenie z czasownikiem:", ["Nie tchórzy", "Nietchórzy", "Nie-tchórzy", "NiEtchórzy"], "Nie tchórzy"),
            ("Co oznacza frazeologizm: «rzucić rękawicę»?", ["Wyzwać kogoś na pojedynek", "Zgubić ubranie", "Prosić o rozejm", "Kupić rękawiczki"], "Wyzwać kogoś na pojedynek"),
            ("Wskaż zdanie w stronie biernej:", ["Tarcza została wykuta przez kowala.", "Mocny miecz został uniesiony w górę.", "Zbroja rycerska została wyczyszczona.", "Kowal wykuł mocną tarczę na turniej."], "Tarcza została wykuta przez kowala."),
            ("Kto napisał «Krzyżaków»?", ["Henryk Sienkiewicz", "Adam Mickiewicz", "Juliusz Słowacki", "Bolesław Prus"], "Henryk Sienkiewicz"),
            ("Jak zachowuje się wojownik po zakończonej walce?", ["Dziękuje rywalowi za godny i uczciwy pojedynek.", "Śmieje się głośno z pokonanego przeciwnika.", "Ucieka szybko z placu boju bez żadnego słowa.", "Rzuca ze złością tarczą prosto w widownię."], "Dziękuje rywalowi za godny i uczciwy pojedynek.")
        ],
        'thief': [
            ("Który czasownik oznacza ciche poruszanie się?", ["Skradać się", "Tupać", "Krzyczeć", "Skakać"], "Skradać się"),
            ("Wskaż przysłówek sposobu:", ["Dyskretnie", "Dyskrecja", "Dyskretny", "Dyskretnemu"], "Dyskretnie"),
            ("Jak poprawnie zapisać «nie» z przymiotnikiem w stopniu równym?", ["Niewidzialny", "Nie widzialny", "Nie-widzialny", "NiEwidzialny"], "Niewidzialny"),
            ("Wskaż synonim do słowa «sprytny»:", ["Błyskotliwy", "Naiwny", "Niezdarny", "Powolny"], "Błyskotliwy"),
            ("Wskaż wyraz z «ch» wymiennym na «sz»:", ["Cicho (wymiana: cicho – cisza)", "Hak (wyraz niewymienny z h)", "Honor (słowo obce z literą h)", "Hałas (wyraz niewymienny z h)"], "Cicho (wymiana: cicho – cisza)"),
            ("Jaki przypadek odpowiada na pytania: z kim? z czym?", ["Narzędnik", "Biernik", "Dopełniacz", "Celownik"], "Narzędnik"),
            ("Co oznacza frazeologizm: «mieć oczy dookoła głowy»?", ["Być niezwykle czujnym, ostrożnym i spostrzegawczym.", "Nosić ciemne okulary przeciwsłoneczne na spacerze.", "Obracać głowę we wszystkie strony podczas tańca.", "Mieć wrodzoną wadę wzroku utrudniającą widzenie."], "Być niezwykle czujnym, ostrożnym i spostrzegawczym."),
            ("Wskaż formę trybu przypuszczającego:", ["Ukryłbym się", "Ukryj się", "Ukrywam się", "Będę się ukrywać"], "Ukryłbym się"),
            ("Wskaż rzeczownik nieodmienny:", ["Alibi", "Klucz", "Zamek", "Kieszeń"], "Alibi"),
            ("Wskaż imiesłów przysłówkowy współczesny:", ["Umykając", "Uciekłszy", "Uciekający", "Ucieczka"], "Umykając"),
            ("Jaki znak interpunkcyjny oddziela zdania składowe ze spójnikiem «ale»?", ["Przecinek", "Kropka", "Myślnik", "Dwukropek"], "Przecinek"),
            ("Wskaż antonim do wyrazu «jawny»:", ["Tajemny", "Otwarty", "Publiczny", "Głośny"], "Tajemny"),
            ("Wskaż wyraz z «ż» wymiennym na «g»:", ["Waga – ważyć", "Żaba", "Żelazo", "Życie"], "Waga – ważyć"),
            ("Która forma jest poprawnym dopełniaczem liczby mnogiej?", ["Tajemnic", "Tajemniców", "Tajemnici", "Tajemnicoch"], "Tajemnic"),
            ("Co oznacza pojęcie «aliteracja»?", ["Powtórzenie jednakowych głosek na początku słów.", "Rymowanie końcowych wyrazów w kolejnych wersach.", "Błąd gramatyczny popełniony w wypracowaniu.", "Szybki bieg posłańca z ważną wiadomością."], "Powtórzenie jednakowych głosek na początku słów."),
            ("Wskaż orzeczenie imienne:", ["Złodziej był zręczny.", "Złodziej ucieka.", "Biegnie po dachu.", "Skoczył w dół."], "Złodziej był zręczny."),
            ("Wskaż wyraz wieloznaczny (polisemiczny):", ["Zamek (budowla lub mechanizm)", "Trójkąt (figura geometryczna)", "Długopis (przybór do pisania)", "Tlen (pierwiastek chemiczny)"], "Zamek (budowla lub mechanizm)"),
            ("Co charakteryzuje mowę zależną?", ["Streszczenie słów za pomocą spójników «że», «iż».", "Przytoczenie dosłownego cytatu w cudzysłowie.", "Zastosowanie głośnego wykrzyknienia w tekście.", "Tworzenie rymów na końcu linijek w wierszu."], "Streszczenie słów za pomocą spójników «że», «iż»."),
            ("Wskaż poprawną pisownię łączną:", ["Niejednokrotnie", "Nie jednokrotnie", "Nie-jednokrotnie", "Nijednokrotnie"], "Niejednokrotnie"),
            ("Jak brzmi morał z przypowieści o chciwości?", ["Uczciwość i prawość są trwalsze niż skradzione dobra.", "Kradzież cudzych skarbów popłaca w trudnym życiu.", "Najważniejszy w działaniu jest szybki zysk majątku.", "Wszelkie zasady moralne są zbędne w trudnych chwilach."], "Uczciwość i prawość są trwalsze niż skradzione dobra.")
        ],
        'robot': [
            ("Który wyraz jest zapożyczeniem technologicznym?", ["Algorytm", "Rzeka", "Drzewo", "Kamień"], "Algorytm"),
            ("Wskaż rzeczownik rodzaju nijakiego:", ["Oprogramowanie", "Komputer", "Klawiatura", "Ekran"], "Oprogramowanie"),
            ("Jaki spójnik logiczny wyraża wynik lub wniosek?", ["Więc / zatem", "Albo", "Ani", "Gdyż"], "Więc / zatem"),
            ("Wskaż wyraz złożony (złożenie):", ["Światłowód", "Przewód", "Woda", "Kabel"], "Światłowód"),
            ("Wskaż poprawną pisownię wyrazu obcego pochodzenia:", ["Interfejs", "Interfejz", "Interfeyz", "Interfejsz"], "Interfejs"),
            ("Wskaż zdanie bezpodmiotowe:", ["Załadowano nowy program.", "Robot załadował program.", "Inżynier stworzył robota.", "Komputer działa."], "Załadowano nowy program."),
            ("Co oznacza termin «składnia» w gramatyce?", ["Dział nauki o budowie zdań i związkach wyrazowych.", "Dział nauki o odmianie wyrazów przez przypadki.", "Zbiór zasad poprawnej pisowni wyrazów z rz oraz ż.", "Dział nauki badający dźwięki mowy i podział na głoski."], "Dział nauki o budowie zdań i związkach wyrazowych."),
            ("Wskaż zdanie złożone podrzędnie przydawkowe:", ["Oto procesor, który przetwarza dane w ułamku sekundy.", "Procesor szybko przetwarza dane i mocno wydziela ciepło.", "Albo zresetujesz cały układ, albo nastąpi błąd pamięci.", "Główny procesor komputera pracuje bez żadnej przerwy."], "Oto procesor, który przetwarza dane w ułamku sekundy."),
            ("Która litera wymienia się w wyrazie: «układ – ułożyć»?", ["d na ż", "k na ch", "ł na l", "u na o"], "d na ż"),
            ("Wskaż poprawny liczebnik porządkowy:", ["Dwudziesty", "Dwadzieścia", "Dwudziestu", "Dwójka"], "Dwudziesty"),
            ("Wskaż zdanie z orzeczeniem czasownikowym:", ["Robot analizuje kod źródłowy.", "Robot jest maszyną.", "Układ stał się stabilny.", "Analiza danych."], "Robot analizuje kod źródłowy."),
            ("Wskaż antonim do słowa «błąd»:", ["Poprawność", "Usterka", "Awaria", "Bug"], "Poprawność"),
            ("Kto napisał «Bajki robotów»?", ["Stanisław Lem", "Henryk Sienkiewicz", "Czesław Miłosz", "Jan Kochanowski"], "Stanisław Lem"),
            ("Jak odmienia się słowo «dane» w języku polskim?", ["Jak przymiotnik w liczbie mnogiej (danych, danym).", "Jest wyrazem całkowicie nieodmiennym w zdaniu.", "Odmienia się tylko w liczbie pojedynczej w mowie.", "Jak rzeczownik męski zakończony na spółgłoskę."], "Jak przymiotnik w liczbie mnogiej (danych, danym)."),
            ("Wskaż synonim wyrazu «precyzyjny»:", ["Dokładny", "Przybliżony", "Chaotyczny", "Dowolny"], "Dokładny"),
            ("Wskaż konstrukcję w stronie biernej:", ["Plik został pobrany przez system.", "System pobrał ten ważny plik.", "Użytkownik pobiera plik z sieci.", "Plik pobiera się automatycznie."], "Plik został pobrany przez system."),
            ("Jaki znak oddziela zdania współrzędne łączne ze spójnikiem «oraz»?", ["Brak przecinka", "Zawsze przecinek", "Średnik", "Dwukropek"], "Brak przecinka"),
            ("Co to jest neologizm?", ["Nowo utworzony wyraz w języku.", "Przestarzałe słowo z dawnych lat.", "Błąd językowy w wypowiedzi ucznia.", "Znak interpunkcyjny w zdaniu."], "Nowo utworzony wyraz w języku."),
            ("Wskaż wyraz z przedrostkiem:", ["Przeładować", "Ładować", "Ładunek", "Ładowarka"], "Przeładować"),
            ("Jaka cecha jest kluczowa w komunikacji algorytmicznej?", ["Jednoznaczność i precyzja", "Wieloznaczność", "Emocjonalność", "Przypadkowość"], "Jednoznaczność i precyzja")
        ],
        'inventor': [
            ("Który wyraz oznacza tworzenie nowego urządzenia?", ["Konstruować", "Niszczyć", "Kopiować", "Opisywać"], "Konstruować"),
            ("Wskaż wyraz motywowany od słowa «nauka»:", ["Naukowiec", "Naukowy", "Nauczyciel", "Wszystkie wymienione"], "Wszystkie wymienione"),
            ("Wskaż rzeczownik odczasownikowy:", ["Projektowanie", "Projekt", "Projektor", "Projektant"], "Projektowanie"),
            ("Jak poprawnie zapisać «nie» z imiesłowem przymiotnikowym:", ["Niezbadany", "Nie zbadany", "Nie-zbadany", "NiEzbadany"], "Niezbadany"),
            ("Wskaż poprawną formę narzędnika liczby pojedynczej dla «wynalazek»:", ["Wynalazkiem", "Wynalazku", "Wynalazka", "Wynalazkowi"], "Wynalazkiem"),
            ("Wskaż przydawkę w zdaniu: «Genialny wynalazca rysuje schemat».", ["Genialny", "Wynalazca", "Rysuje", "Schemat"], "Genialny"),
            ("Co to jest archaizm?", ["Wyraz dawny, który wyszedł z powszechnego użycia.", "Nowe słowo powstałe w przestrzeni internetu.", "Poważny błąd składniowy w wypowiedzi pisemnej.", "Znak zapytania postawiony na końcu wypowiedzi."], "Wyraz dawny, który wyszedł z powszechnego użycia."),
            ("Wskaż antonim do słowa «tradycyjny»:", ["Innowacyjny", "Dawny", "Zwykły", "Staroświecki"], "Innowacyjny"),
            ("Wskaż wyraz z «ó» niewymiennym:", ["Mózg", "Wóz", "Pióro", "Koło"], "Mózg"),
            ("Który spójnik wprowadza zdanie podrzędne celu?", ["Aby / żeby", "Gdyż", "Chociaż", "Ponieważ"], "Aby / żeby"),
            ("Wskaż prawidłowy skrót od słowa «profesor»:", ["Prof.", "Prof", "Pr.", "Proff."], "Prof."),
            ("Jaki przypadek łączy się z przyimkiem «dzięki»?", ["Celownik (dzięki komu? czemu?)", "Biernik (dzięki kogo? co widzę?)", "Narzędnik (dzięki kim? czym idę?)", "Miejscownik (dzięki o kim? o czym?)"], "Celownik (dzięki komu? czemu?)"),
            ("Co oznacza frazeologizm: «odkryć Amerykę»?", ["Odkryć coś, co wszyscy od dawna wiedzą.", "Wyruszyć statkiem w nieznaną podróż morską.", "Stworzyć genialny i przełomowy wynalazek.", "Zgubić mapę drogową w nieznanym terenie."], "Odkryć coś, co wszyscy od dawna wiedzą."),
            ("Wskaż tryb rozkazujący czasownika «badać» w 2. os. l. poj.:", ["Badaj!", "Badasz", "Badałbyś", "Będziesz badać"], "Badaj!"),
            ("Jak napisać zaproszenie na prezentację wynalazku?", ["Podać: kto zaprasza, kogo, kiedy, gdzie i na co.", "Podać wyłącznie numer telefonu oraz adres e-mail.", "Napisać wiersz o maszynach bez daty i godziny.", "Wysłać pustą kartkę z podpisem organizatora."], "Podać: kto zaprasza, kogo, kiedy, gdzie i na co."),
            ("Wskaż wyraz z przyrostkiem -alnia:", ["Spawalnia (miejsce spawania)", "Robotnik (wykonawca zawodu)", "Naukowiec (badacz zjawisk)", "Pracownia (miejsce do pracy)"], "Spawalnia (miejsce spawania)"),
            ("Wskaż poprawne stopniowanie przysłówka «dokładnie»:", ["Dokładnie – dokładniej – najdokładniej", "Dokładnie – bardziej dokładnie dzisiaj", "Dokładnie – mocno dokładnie w pracy", "Dokładnie – brak stopniowania wyrazu"], "Dokładnie – dokładniej – najdokładniej"),
            ("Wskaż wyraz pokrewny do słowa «światło»:", ["Oświetlenie", "Święto", "Świat", "Świeży"], "Oświetlenie"),
            ("Co oznacza łacińska sentencja: «Eureka!»?", ["Znalazłem! / Odkryłem!", "Przegrałem!", "Zaczynamy!", "Do widzenia!"], "Znalazłem! / Odkryłem!"),
            ("Jaka postawa cechuje prawdziwego naukowca?", ["Dociekliwość, krytycyzm i rzetelność badawcza.", "Całkowita ignorancja faktów doświadczalnych.", "Nieuzasadniona zazdrość i fałszowanie danych.", "Pośpiech i brak sprawdzania wyników testów."], "Dociekliwość, krytycyzm i rzetelność badawcza.")
        ],
        'witch': [
            ("Który środek stylistyczny nadaje przedmiotom martwym cechy ludzkie?", ["Uosobienie (personifikacja)", "Epitet uplastyczniający", "Metafora poetycka w wersie", "Porównanie ze słowem «jak»"], "Uosobienie (personifikacja)"),
            ("Wskaż przymiotnik określający tajemniczy nastrój:", ["Mroczny", "Jasny", "Kwadratowy", "Szybki"], "Mroczny"),
            ("Jak brzmi dopełniacz od słowa «noc»?", ["Nocy", "Nocem", "Nocu", "Noca"], "Nocy"),
            ("Wskaż wyraz z «ch» na końcu wyrazu:", ["Duch (wyraz rodzimy)", "Zuch (wyraz rodzimy)", "Mech (wyraz rodzimy)", "Wszystkie z podanych"], "Wszystkie z podanych"),
            ("Kto napisał dramat «Balladyna»?", ["Juliusz Słowacki", "Adam Mickiewicz", "Aleksander Fredro", "Zygmunt Krasiński"], "Juliusz Słowacki"),
            ("Jaki rekwizyt w «Balladynie» zadecydował o wyborze żony dla Kirkora?", ["Dzbanek leśnych malin", "Złoty miecz", "Kareta", "Bursztynowy naszyjnik"], "Dzbanek leśnych malin"),
            ("Wskaż rym żeński:", ["Chmury – góry", "Grom – dom", "Las – pas", "Krok – skok"], "Chmury – góry"),
            ("Co symbolizuje czarny kruk w literaturze romantycznej?", ["Tajemnicę, mądrość lub zły zwiastun losu.", "Wesołość, beztroskę i codzienną zabawę.", "Wiosenne odrodzenie i bujną zieleń lasu.", "Morski wiatr niosący żaglowce do brzegu."], "Tajemnicę, mądrość lub zły zwiastun losu."),
            ("Wskaż apostrofę w tekście poetyckim:", ["«Litwo! Ojczyzno moja!»", "«Ciemno wszędzie w sali!»", "«Drzewa szumią w lesie.»", "«Chłopiec biegnie drogą.»"], "«Litwo! Ojczyzno moja!»"),
            ("Wskaż imiesłów przymiotnikowy bierny:", ["Zaczarowany", "Czarujący", "Czarując", "Zaczarowawszy"], "Zaczarowany"),
            ("Jak napisać dedykację w podarowanej księdze?", ["Wskazać: dla kogo, od kogo, okazję, miejsce i datę.", "Wpisać jedynie dokładną cenę zakupu nowej książki.", "Przepisać długi przepis na magiczny eliksir z ziół.", "Złożyć wyłącznie pojedynczy nieczytelny podpis."], "Wskazać: dla kogo, od kogo, okazję, miejsce i datę."),
            ("Co oznacza przysłowie: «Mądrej głowie dość dwie słowie»?", ["Człowiek bystry pojmie sens bez długich wywodów.", "Należy mówić bez żadnej przerwy przez cały dzień.", "Głowa boli od intensywnego myślenia o problemie.", "Dwa słowa to stanowczo za mało na porozumienie."], "Człowiek bystry pojmie sens bez długich wywodów."),
            ("Wskaż wyraz dźwiękonaśladowczy (onomatopeję):", ["Szumieć / bulgotać", "Czarować", "Myśleć", "Patrzeć"], "Szumieć / bulgotać"),
            ("Wskaż zdanie złożone podrzędnie warunkowe:", ["Jeśli wypijesz wywar, odzyskasz siły.", "Pijesz gorący wywar i szybko odpoczywasz.", "Pijesz wywar ziołowy, bo jesteś osłabiony.", "Gorący wywar z ziół leśnych paruje w kotle."], "Jeśli wypijesz wywar, odzyskasz siły."),
            ("Wskaż wyraz z «rz» wymiennym na «r»:", ["Pióro – pierze", "Starzec – stary", "Dwór – dworzanin", "Morał – morały"], "Starzec – stary"),
            ("Co to jest ballada?", ["Utwór synkretyczny łączący lirykę, epikę i dramat o tajemniczej fabule.", "Krótki i wesoły żart sceniczny prezentowany w szkolnym teatrzyku.", "Urzędowy dokument pisany prozą w kancelarii państwowej lub gminnej.", "Współczesna piosenka estradowa pozbawiona jakiejkolwiek głębszej treści."], "Utwór synkretyczny łączący lirykę, epikę i dramat o tajemniczej fabule."),
            ("Wskaż antonim do słowa «tajemniczy»:", ["Oczywisty / jawny", "Zagadkowy", "Magiczny", "Skryty"], "Oczywisty / jawny"),
            ("Który znak interpunkcyjny oznacza niedomówienie i pauzę emocjonalną?", ["Wielokropek (...)", "Średnik (;)", "Pytajnik (?)", "Nawias ()"], "Wielokropek (...)"),
            ("Wskaż poprawną odmianę zaimka: «Widzę ...»", ["Cię / ciebie", "Ci", "Tobie", "Tobą"], "Cię / ciebie"),
            ("Jaki morał niesie obrzęd Dziadów w dziele Mickiewicza?", ["Sprawiedliwość moralna dosięgnie każdego człowieka.", "Zło i niesprawiedliwość zawsze zwyciężają na świecie.", "Śmierć bezpowrotnie zmazuje wszystkie popełnione winy.", "Nie warto pomagać innym ludziom w trudnych chwilach."], "Sprawiedliwość moralna dosięgnie każdego człowieka.")
        ],
        'jester': [
            ("Który środek wyrazu służy do wywoływania śmiechu i komizmu?", ["Ironia i dowcip", "Groza", "Tragizm", "Patos"], "Ironia i dowcip"),
            ("Wskaż poprawną pisownię wyrazu z «ch»:", ["Śmiech", "Śmieh", "Śmjech", "Szmiech"], "Śmiech"),
            ("Co oznacza frazeologizm: «robić dobrą minę do złej gry»?", ["Udawać zadowolenie mimo trudności i porażki.", "Grać w szachy według ściśle ustalonych zasad.", "Malować twarz kolorowymi farbami na festynie.", "Głośno złościć się z powodu przegranego meczu."], "Udawać zadowolenie mimo trudności i porażki."),
            ("Wskaż komizm słowny w utworze literackim:", ["Zabawne przejęzyczenia i dowcipna gra słów bohaterów.", "Karykaturalny ubiór postaci wywołujący śmiech na scenie.", "Niespodziewany upadek bohatera na śliskiej posadzce w sali.", "Poważna tyrada o obowiązkach obywatelskich wobec ojczyzny."], "Zabawne przejęzyczenia i dowcipna gra słów bohaterów."),
            ("Kto napisał komedię «Zemsta»?", ["Aleksander Fredro", "Adam Mickiewicz", "Henryk Sienkiewicz", "Ignacy Krasicki"], "Aleksander Fredro"),
            ("Który bohater «Zemsty» powtarzał bezustannie «Mocium panie»?", ["Cześnik Raptusiewicz", "Rejent Milczek", "Papkin", "Wacław"], "Cześnik Raptusiewicz"),
            ("A kto w «Zemście» mawiał: «Niech się dzieje wola Nieba, z nią się zawsze zgadzać trzeba»?", ["Rejent Milczek", "Cześnik", "Dyndalski", "Klara"], "Rejent Milczek"),
            ("Wskaż przysłowie o śmiechu:", ["Śmiech to zdrowie", "Kto rano wstaje, ten ziewa", "Cicha woda brzegi rwie", "Nie ma dymu bez ognia"], "Śmiech to zdrowie"),
            ("Wskaż wyraz pokrewny do słowa «żart»:", ["Żartobliwy", "Żarliwy", "Żuraw", "Żal"], "Żartobliwy"),
            ("Jaka jest rola puenty w anegdocie lub fraszce?", ["Zaskakujące, błyskotliwe zakończenie z morałem.", "Długi i nużący wstęp opisujący tło wydarzeń.", "Dokładna data wydania pierwszego wydania tekstu.", "Alfabetyczny spis wszystkich postaci utworu."], "Zaskakujące, błyskotliwe zakończenie z morałem."),
            ("Kto pisał słynne fraszki w epoce renesansu (np. «Na lipę», «O doktorze Hiszpanie»)?", ["Jan Kochanowski", "Mikołaj Rej", "Ignacy Krasicki", "Juliusz Słowacki"], "Jan Kochanowski"),
            ("Co oznacza pojęcie «satyra»?", ["Utwór ośmieszający wady ludzkie z zamiarem ich naprawy.", "Tragiczna pieśń żałobna opiewająca stratę bliskiej osoby.", "Podręcznik do nauki geometrii i algebry w szkole.", "Oficjalna rozmowa urzędowa na temat budżetu państwa."], "Utwór ośmieszający wady ludzkie z zamiarem ich naprawy."),
            ("Wskaż synonim słowa «błazen» w dawnym znaczeniu dworskim:", ["Wesołek, trefniś mający przywilej mówienia prawdy władcy.", "Naczelny kucharz przygotowujący potrawy na ucztę królewską.", "Zwykły złodziej kradnący kosztowności z pałacowego skarbca.", "Żołnierz gwardii pieszej pilnujący wejścia do zamku króla."], "Wesołek, trefniś mający przywilej mówienia prawdy władcy."),
            ("Wskaż poprawną pisownię łączną partykuły -by:", ["Zaśmiałby się", "Zaśmiał by się", "Zaśmiał-by się", "Zaśmiałby-się"], "Zaśmiałby się"),
            ("Co oznacza oksymoron?", ["Zestawienie wyrazów o sprzecznym znaczeniu (gorzki śmiech).", "Układ rymów okalających abba w czterowersowej zwrotce.", "Pytanie retoryczne niewymagające żadnej odpowiedzi odbiorcy.", "Świadome powtórzenie tego samego słowa na początku wersów."], "Zestawienie wyrazów o sprzecznym znaczeniu (gorzki śmiech)."),
            ("Wskaż formę czasu teraźniejszego czasownika «kpić» w 1. os. l. poj.:", ["Kpię", "Kpiłem", "Będę kpić", "Kpiłbym"], "Kpię"),
            ("Jak brzmi antonim do słowa «ponury»:", ["Pogodny / radosny", "Smutny", "Ciemny", "Chmurny"], "Pogodny / radosny"),
            ("Wskaż dopełnienie w zdaniu: «Błazen rozbawia króla».", ["Króla (biernik: kogo? co?)", "Błazen (mianownik: kto? co?)", "Rozbawia (orzeczenie: co robi?)", "Brak dopełnienia w tym zdaniu"], "Króla (biernik: kogo? co?)"),
            ("Który wyraz zawiera «ż» niewymienne?", ["Żart", "Bieg – bieżeć", "Mąż – mężny", "Druh – drużyna"], "Żart"),
            ("Jaki jest cel dobrego humoru według etykiety?", ["Łączyć ludzi i poprawiać nastrój bez obrażania nikogo.", "Ośmieszać publicznie słabszych i bezbronnych kolegów.", "Sprawiać przykrość rozmówcy złośliwymi uwagami w sali.", "Wywoływać niepotrzebne kłótnie i spory między dziećmi."], "Łączyć ludzi i poprawiać nastrój bez obrażania nikogo.")
        ]
    }

    for h in heroes:
        result[h] = []
        bank = hero_banks[h]
        for i in range(1, 7):
            t_name = f'Żaba [{h.capitalize()}]: Wyzwanie Językowe {i}'
            t_sub = f'Szybki test wiedzy CKE ({i}/6) - 20 pytań'
            # Przetasuj pulę dla unikalności zestawu
            shuffled_bank = list(bank)
            random.seed(hash(h) + i * 997)
            random.shuffle(shuffled_bank)

            questions = []
            for q_text, opts, correct in shuffled_bank:
                opts_copy = list(opts)
                random.shuffle(opts_copy)
                questions.append({
                    'promptPl': q_text,
                    'options': opts_copy,
                    'correctWord': correct
                })

            result[h].append({
                'titlePl': t_name,
                'subtitlePl': t_sub,
                'descriptionPl': 'Zielona Żabka skacze z 20 pytaniami CKE! Wybierz trafną odpowiedź i wykaż się wiedzą.',
                'questions': questions
            })

    return result
