import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

# Let's write warrior replacements
WARRIOR_REPLACEMENTS = {
  "w_ep1_1": [
    "Meldujesz nauczycielowi gotowość przed rozpoczęciem ćwiczeń",
    "Kładziesz się do łóżka spać po całym dniu wyczerpującej nauki",
    "Prosisz kucharkę w stołówce o dodatkową miskę ciepłego obiadu"
  ],
  "w_ep1_2": [
    "Okrzyk zagrzewający kolegów z zespołu do wspólnego działania",
    "Cicha prośba szeptem o wypożyczenie książki w czytelni szkoły",
    "Uprzejme przeprosiny skierowane do nauczyciela za spóźnienie"
  ],
  "w_ep1_3": [
    "Pełna koncentracja przed nowym poleceniem nauczyciela",
    "Spokojne pożegnanie z kolegami przed wyjściem ze szkoły",
    "Cicha i prywatna rozmowa z przyjacielem podczas przerwy"
  ],
  "w_ep1_4": [
    "Zasada czystej gry i szacunku dla każdego kolegi i rywala",
    "Nieuczciwe odpisywanie zadań z zeszytu kolegi obok w ławce",
    "Samowolna i nagła ucieczka z lekcji bez żadnego wyjaśnienia"
  ],
  "w_ep1_5": [
    "Ćwiczeniowy pojedynek na szybkie odpowiadanie ze słówek",
    "Zabawa w rzucanie kredą w tablicę podczas przerwy w klasie",
    "Kupowanie biletu u kierowcy w miejskim autobusie szkolnym"
  ],
  "w_ep2_1": [
    "Odpowiada na pytania Kto? Co? (np. tarcza, rycerz)",
    "Wskazuje cechę Jaki? Jaka? (np. szybki, zwinny, ostry)",
    "Określa czynność Co robi? (np. biega, walczy, trenuje)"
  ],
  "w_ep2_2": [
    "Wyraża czynność bojową: broni, atakuje, zwycięża",
    "Nazywa pojedynczy przedmiot w zbrojowni: hełm, pas",
    "Określa kolor proporca na wieży zamkowej rycerza"
  ],
  "w_ep2_3": [
    "Określa cechę: nieustraszony, żelazny, honorowy",
    "Podaje dokładną liczbę mieczy w zbrojowni zamku",
    "Oznacza czynność w formie bezokolicznika: uciekać"
  ],
  "w_ep2_4": [
    "Zmienia formę z pojedynczej na mnogą (np. tarcza → tarcze)",
    "Kończy się zawsze na spółgłoskę twardą w mianowniku liczby",
    "Oznacza całkowity brak przedmiotów lub osób w danej klasie"
  ],
  "w_ep2_5": [
    "Piszemy „ó”, bo wymienia się na „o” w wyrazie boje",
    "Piszemy „ó”, bo po spółgłosce b zawsze piszemy tę literę",
    "Jest to odwieczny wyjątek ortograficzny bez żadnej zasady"
  ],
  "w_ep3_1": [
    "Walczy odważnie, szybko i honorowo (pytanie: jak?)",
    "Nosi lśniącą zbroję i ciężką żelazną tarczę na plecach",
    "Ma przy boku dwóch wiernych pomocników z małej wioski"
  ],
  "w_ep3_2": [
    "Liczebnik główny odpowiada na pytanie ile? (np. pięciu)",
    "Przymiotnik wskazuje cechę rycerza (np. dzielny, wierny)",
    "Zaimek osobowy zastępuje imię rycerza (np. on, tamten)"
  ],
  "w_ep3_3": [
    "Pod zamkiem, na murze, przed bramą (przyimek + rzeczownik)",
    "Bardzo szybko, zwinne i pewnie (grupa samych przysłówków)",
    "Walczyć dzielnie, wytrwale do końca (grupa czasowników)"
  ],
  "w_ep3_4": [
    "Pierwszy, drugi, setny (wskazuje miejsce w szyku)",
    "Jeden, dwa, sto (podaje ogólną liczbę wojowników)",
    "Dzielny, waleczny, twardy (wymienia cechy charakteru)"
  ],
  "w_ep3_5": [
    "Stopień równy, wyższy i najwyższy przysłówka",
    "Odmiana rzeczownika przez przypadki i liczby",
    "Dopisywanie bezokolicznikowej końcówki -no/-to"
  ],
  "w_ep4_1": [
    "Zamiast „Wojownik wziął miecz, bo wojownik szedł” mówimy: „on szedł”",
    "Zaimek w języku polskim oznacza wyłącznie liczby i cyfry w zadaniu",
    "Zaimki w każdym miejscu zdania zawsze zapisujemy wielką literą"
  ],
  "w_ep4_2": [
    "Przed spójnikami: ale, lecz, jednak, a zawsze stawiamy przecinek",
    "Nigdy i w żadnym wypadku nie stawiamy przecinka przed spójnikami",
    "Przecinek w polskim zdaniu stawiamy tylko i wyłącznie na końcu"
  ],
  "w_ep4_3": [
    "To wyrazy pokrewne mające wspólny rdzeń i pochodzenie",
    "To słowa rymujące się ze sobą na końcu kolejnych wersów",
    "To bliskoznaczne synonimy oznaczające dokładnie to samo"
  ],
  "w_ep4_4": [
    "Cząstka dodawana z przodu podstawy tworząca nowe słowo",
    "Zwykła kropka stawiana na samym końcu każdego zdania",
    "Końcówka fleksyjna zmieniająca formę wyrazu w zdaniu"
  ],
  "w_ep4_5": [
    "Z czasownikami osobno (nie walczę), z rzeczownikami łącznie (nieprzyjaciel)",
    "Z wszystkimi częściami mowy zawsze i bez wyjątku piszemy partykułę osobno",
    "Z wszystkimi słowami w języku polskim partykułę nie zapisujemy łącznie"
  ],
  "w_ep5_1": [
    "Walczący żołnierz to żołnierz, który w tej chwili walczy",
    "To dzielny żołnierz, który dawno złożył broń w zbrojowni",
    "To potężna nazwa kamiennego zamku obronnego w dolinie rzeki"
  ],
  "w_ep5_2": [
    "Zdobyty zamek = zamek, który został przez nas zdobyty",
    "Potężny zamek, który sam zdobywa inne okoliczne zamki",
    "Forma czasownika wyrażająca czynność w czasie przyszłym"
  ],
  "w_ep5_3": [
    "Atakując wroga, zachował pełny spokój (ten sam podmiot!)",
    "Każda z wymienionych czynności ma zupełnie innego wykonawcę",
    "Wypowiedzenie dotyczy odległych wydarzeń sprzed tysiąca lat"
  ],
  "w_ep5_4": [
    "„Morze ognia” i „stalowe nerwy” to poetyckie przenośnie",
    "To dosłowna prawda naukowa z podręcznika biologii i chemii",
    "Poważny błąd gramatyczny popełniony przez autora w zdaniu"
  ],
  "w_ep5_5": [
    "Zdanie podrzędne przydawkowe po przecinku określa rycerza",
    "W polszczyźnie nie wolno stawiać przecinka przed wyrazem «który»",
    "To pojedyncze słowo niemające formy orzeczenia ani podmiotu"
  ],
  "w_ep6_1": [
    "Zdobyto puchar, wygrano mecz (czynność w przeszłości bez podmiotu)",
    "Forma czasu przyszłego wyrażająca kategoryczny rozkaz dla drużyny",
    "Poważny błąd językowy polegający na pominięciu końcówki fleksyjnej"
  ],
  "w_ep6_2": [
    "Kapitan powiedział, że musimy walczyć do ostatniej minuty",
    "Kapitan krzyknął głośno do całej drużyny: „Walczcie do końca!”",
    "Ciche i nieśmiałe mówienie szeptem do samego siebie w szatni"
  ],
  "w_ep6_3": [
    "„Cofać się” już oznacza ruch w tył, więc dodanie „w tył” to błąd masła maślanego",
    "To w pełni poprawny i ceniony zwrot poetycki stosowany w podniosłych wierszach",
    "Ścisła zasada ortograficzna nakazująca podwajanie znaczenia w trudnych słowach"
  ],
  "w_ep6_4": [
    "Czytaj polecenia do końca i pilnuj limitu słów (min. 200 w wypracowaniu)",
    "Pisz jak najkrócej i byle jak najszybciej oddać pracę komisji egzaminacyjnej",
    "Zostawiaj puste, niewypełnione kratki w oficjalnej karcie odpowiedzi testu"
  ],
  "w_ep6_5": [
    "W zakończeniu rozprawki zbierz wnioski i potwierdź słuszność tezy",
    "W zakończeniu dodaj zupełnie nowy, wcześniej nieomówiony problem",
    "Przepisz dosłownie całe polecenie egzaminacyjne słowo w słowo"
  ],
  "w_ep7_1": [
    "Mimo brutalnych tortur na Pawiaku nie zdradził kolegów z organizacji",
    "Poddał się od razu po pierwszym pytaniu zadanym przez przesłuchujących",
    "Uciekł samotnie za granicę na długo przed wybuchem powstania w stolicy"
  ],
  "w_ep7_2": [
    "Harcerze odbili przewożonych więźniów, w tym skatowanego Rudego",
    "Podpisano uroczysty traktat pokojowy kończący wszystkie walki w mieście",
    "Towarzyski turniej piłkarski rozegrany na wielkim stadionie miejskim"
  ],
  "w_ep7_3": [
    "Jacek Soplica zmył winę zabójstwa Stolnika wieloletnią służbą ojczyźnie",
    "Został koronowany na króla Polski po wygraniu wielkiej bitwy pod zamkiem",
    "Nigdy nie żałował swoich złych czynów i uciekł na zawsze za granicę kraju"
  ],
  "w_ep7_4": [
    "Młodzi ludzie poświęcili swoje talenty i życie w obronie wolności",
    "Opowieść dotyczy mozolnego budowania obronnych kamiennych murów zamku",
    "Dosłowne rzucanie małych kamyków do nurtu rwącej rzeki na spacerze"
  ],
  "w_ep7_5": [
    "Czynna miłość do ojczyzny połączona z szacunkiem dla innych narodów",
    "Pusta i głośna przechwałka zamieszczona na forum w internecie szkolnym",
    "Całkowita ucieczka przed jakąkolwiek odpowiedzialnością za losy kraju"
  ],
  "w_ep8_1": [
    "Wprowadź czytelnika w temat, wyjaśnij pojęcie i jasno sformułuj tezę",
    "Od razu napisz podsumowanie pracy, podpisz się imieniem i oddaj kartkę",
    "Przepisz losowy fragment książki bez żadnego logicznego powiązania"
  ],
  "w_ep8_2": [
    "Każdy argument poprzyj trafnym przykładem z lektury obowiązkowej CKE",
    "Wypisz same ogólne pytania retoryczne bez udzielania na nie odpowiedzi",
    "Zmieniaj temat wypowiedzi w każdym kolejnym zdaniu bez logicznego ładu"
  ],
  "w_ep8_3": [
    "Użyj bezpośrednich zwrotów do odbiorców, pytań retorycznych i apelu",
    "Mów monotonnie, cicho i bezbarwnie patrząc w ścianę sali szkolnej",
    "Zastosuj wyłącznie sztywny styl urzędowy bez żadnych emocji i zwrotów"
  ],
  "w_ep8_4": [
    "Używaj zwrotów: po pierwsze, przechodząc do kolejnej kwestii, reasumując",
    "Pisz jednym ciągiem bez żadnych akapitów ani znaków interpunkcyjnych w pracy",
    "Powtarzaj słowo „fajnie” na początku każdego kolejnego zdania w rozprawce"
  ],
  "w_ep8_5": [
    "Opanowałeś podstawę programową języka polskiego od klasy 4 do 8!",
    "Dopiero poznajesz litery alfabetu i pierwsze proste słowa w szkole",
    "Zapomniałeś wszystkich poznanych reguł ortograficznych i gramatyki"
  ]
}

# Test warrior replacements disparity
for sid, opts in WARRIOR_REPLACEMENTS.items():
    lens = [len(o) for o in opts]
    diff = max(lens) - min(lens)
    if diff > 8:
        print(f"FAILED {sid}: {lens} diff={diff}")

print("Warrior 40 scenarios checked! If no FAILED above, all diffs <= 8!")
