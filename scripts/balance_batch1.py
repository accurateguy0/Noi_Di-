import sys, os, re
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

# BATCH 1 Replacements: (file_path, old_substring, new_substring)

REPLACEMENTS = [
    # ----------------------------------------------------
    # szkieleton.js
    # L93
    ('src/data/characters/szkieleton.js',
     """          { text: "Móżdżek", correct: true },
          { text: "Płat potyliczny kory mózgu", correct: false },
          { text: "Rdzeń przedłużony", correct: false },
          { text: "Przysadka mózgowa", correct: false }""",
     """          { text: "Móżdżek odpowiadający za koordynację ruchową i równowagę ciała", correct: true },
          { text: "Płat potyliczny kory mózgu odpowiedzialny za przetwarzanie wzroku", correct: false },
          { text: "Rdzeń przedłużony sterujący podstawowymi odruchami wegetatywnymi", correct: false },
          { text: "Przysadka mózgowa wydzielająca hormony dokrewne do całego krwioobiegu", correct: false }"""),

    # L116
    ('src/data/characters/szkieleton.js',
     """          { text: "Od wczoraj boli mnie prawe kolano i mam obrzęk w okolicy rzepki.", correct: true },
          { text: "Od wczoraj bolę prawe kolano i mam obrzęk koło rzepki.", correct: false },
          { text: "Boli mi prawe kolano i czuję kolano bolące.", correct: false },
          { text: "Mam kolano bolane od wczorajszego meczu.", correct: false }""",
     """          { text: "Od wczoraj boli mnie prawe kolano i mam obrzęk w okolicy rzepki.", correct: true },
          { text: "Od wczoraj bolę prawe kolano i mam wielki obrzęk wokoło rzepki nogi.", correct: false },
          { text: "Boli mi prawe kolano i czuję kolano bardzo bolące przy zginaniu stopy.", correct: false },
          { text: "Mam kolano bolane i mocno spuchnięte od wczorajszego meczu na hali.", correct: false }"""),

    # L128
    ('src/data/characters/szkieleton.js',
     """          { text: "W pęcherzykach płucnych oplecionych gęstą siecią naczyń włosowatych", correct: true },
          { text: "W krtani wyposażonej w fałdy głosowe i nagłośnię", correct: false },
          { text: "W tchawicy zbudowanej z chrzęstnych półpierścieni", correct: false },
          { text: "W jamie nosowej oczyszczającej powietrze z pyłów", correct: false }""",
     """          { text: "W pęcherzykach płucnych oplecionych gęstą siecią naczyń włosowatych", correct: true },
          { text: "W krtani wyposażonej w fałdy głosowe, głośnię oraz ruchomą nagłośnię", correct: false },
          { text: "W tchawicy zbudowanej ze sprężystych, chrzęstnych półpierścieni cewy", correct: false },
          { text: "W jamie nosowej nawilżającej i oczyszczającej wdychane powietrze z pyłu", correct: false }"""),

    # L152
    ('src/data/characters/szkieleton.js',
     """          { text: "W kościach płaskich (mostek, miednica, żebra) oraz nasadach kości długich", correct: true },
          { text: "Wyłącznie w trzonach kości przedramienia i podudzia", correct: false },
          { text: "Jedynie w kościach palców rąk i stóp", correct: false },
          { text: "W chrząstkach małżowiny usznej i nosa", correct: false }""",
     """          { text: "W kościach płaskich (mostek, miednica, żebra) oraz nasadach kości długich", correct: true },
          { text: "Wyłącznie w środkowych trzonach kości przedramienia, obojczyka i podudzia", correct: false },
          { text: "Jedynie w drobnych kościach palców rąk i stóp oraz w kościach nadgarstka", correct: false },
          { text: "W elastycznych chrząstkach zewnętrznej małżowiny usznej i czubka nosa twarzy", correct: false }"""),

    # L175
    ('src/data/characters/szkieleton.js',
     """          { text: "Związki organiczne, w tym białko kolagenowe (osseina)", correct: true },
          { text: "Sole mineralne fosforanu i węglanu wapnia", correct: false },
          { text: "Kwas solny obecny w szpiku kostnym", correct: false },
          { text: "Czysty azot rozpuszczony w tkance kostnej", correct: false }""",
     """          { text: "Związki organiczne, w tym białko kolagenowe (osseina)", correct: true },
          { text: "Sole mineralne fosforanu wapnia i węglanu wapniowego", correct: false },
          { text: "Silnie stężony kwas solny obecny w szpiku kostnym ciała", correct: false },
          { text: "Czysty gazowy azot rozpuszczony w całej tkance kostnej", correct: false }"""),

    # L234
    ('src/data/characters/szkieleton.js',
     """          { text: "Receptor -> neuron czuciowy -> ośrodek w rdzeniu kręgowym -> neuron ruchowy -> efektor (mięsień)", correct: true },
          { text: "Efektor -> móżdżek -> nerw czaszkowy -> receptor skórny", correct: false },
          { text: "Ośrodek korowy -> receptor -> neuron ruchowy -> krew", correct: false },
          { text: "Neuron ruchowy -> torebka stawowa -> neuron czuciowy -> mózg", correct: false }""",
     """          { text: "Receptor -> neuron czuciowy -> ośrodek w rdzeniu kręgowym -> neuron ruchowy -> efektor (mięsień)", correct: true },
          { text: "Efektor końcowy -> móżdżek -> nerw czaszkowy twarzowy -> receptor czuciowy w tkance skórnej", correct: false },
          { text: "Ośrodek korowy mózgu -> receptor zmysłowy -> obwodowy neuron ruchowy -> naczynie krwionośne", correct: false },
          { text: "Neuron ruchowy pnia -> torebka stawu kolanowego -> neuron czuciowy rdzenia -> kora mózgowa", correct: false }"""),

    # ----------------------------------------------------
    # dyrektorka.js
    # L46
    ('src/data/characters/dyrektorka.js',
     """          { text: "Słowo «Witam» stawia nadawcę w pozycji gospodarza przyjmującego gości i narusza hierarchię urzędową.", correct: true },
          { text: "Słowo «Witam» jest wulgaryzmem niedozwolonym w słownikach języka polskiego.", correct: false },
          { text: "Ponieważ w e-mailach wolno stosować wyłącznie powitania w języku angielskim.", correct: false },
          { text: "Bo słowo «Witam» pisze się wyłącznie małą literą bez wykrzyknika.", correct: false }""",
     """          { text: "Słowo «Witam» stawia nadawcę w pozycji gospodarza przyjmującego gości i narusza hierarchię urzędową.", correct: true },
          { text: "Słowo «Witam» jest ordynarnym wulgaryzmem całkowicie zakazanym we wszystkich słownikach języka polskiego.", correct: false },
          { text: "Ponieważ w korespondencji urzędowej wolno stosować wyłącznie formuły powitalne w języku angielskim.", correct: false },
          { text: "Bo słowo «Witam» według zasad ortografii wolno zapisać wyłącznie małą literą bez żadnego wykrzyknika.", correct: false }"""),

    # L93
    ('src/data/characters/dyrektorka.js',
     """          { text: "W załączeniu przedkładam wymagane zaświadczenie lekarskie potwierdzające powrót do zdrowia.", correct: true },
          { text: "Dorzucam do papierów kwit od lekarza, że już mi przeszło i mogę biegać.", correct: false },
          { text: "Załączam papierek od doktora, bo pani w sekretariacie kazała przynieść.", correct: false },
          { text: "Mam tu zwolnienie, proszę wpisać w dziennik i nie stawiać nieobecności.", correct: false }""",
     """          { text: "W załączeniu przedkładam wymagane zaświadczenie lekarskie potwierdzające powrót do zdrowia.", correct: true },
          { text: "Dorzucam do papierów szkolnych kwit od lekarza, że choroba już mi minęła i mogę normalnie biegać.", correct: false },
          { text: "Załączam podarty papierek od doktora, bo pani w sekretariacie szkoły koniecznie kazała przynieść.", correct: false },
          { text: "Mam tu zwolnienie z lekcji, proszę natychmiast wpisać w dziennik i nie stawiać mi nieobecności.", correct: false }"""),

    # L128
    ('src/data/characters/dyrektorka.js',
     """          { text: "Ująć dosłowny cytat w cudzysłów i podać pełne źródło (autora, tytuł dzieła, stronę lub link)", correct: true },
          { text: "Zmienić w zdaniu dwa wyrazy na synonimy i podpisać tekst własnym imieniem", correct: false },
          { text: "Skopiować cały akapit z Wikipedii bez podawania adresu strony", correct: false },
          { text: "Poprosić kolegę o przepisanie tekstu odręcznie do zeszytu", correct: false }""",
     """          { text: "Ująć dosłowny cytat w cudzysłów i podać pełne źródło (autora, tytuł dzieła, stronę lub link)", correct: true },
          { text: "Zmienić w skopiowanym zdaniu dwa wyrazy na synonimy i podpisać cały tekst własnym imieniem", correct: false },
          { text: "Skopiować cały akapit z internetowej Wikipedii zupełnie bez podawania jakiegokolwiek adresu", correct: false },
          { text: "Poprosić kolegę z ławki o szybkie przepisanie cudzego tekstu odręcznie do swojego zeszytu", correct: false }"""),

    # L163
    ('src/data/characters/dyrektorka.js',
     """          { text: "«Prośbę naszą motywujemy faktem, iż w tym samym dniu wyznaczono już dwa inne sprawdziany pisemne»", correct: true },
          { text: "«Nie chcemy pisać tego sprawdzianu, bo nikomu z nas nie chciało się wczoraj uczyć»", correct: false },
          { text: "«Nauczyciel się na nas uwziął, więc żądamy natychmiastowego anulowania kartkówki»", correct: false },
          { text: "«Proszę przełożyć sprawdzian, bo w piątek mamy plany na wyjście na pizzę»", correct: false }""",
     """          { text: "«Prośbę naszą motywujemy faktem, iż w tym samym dniu wyznaczono już dwa inne sprawdziany pisemne»", correct: true },
          { text: "«Nie zamierzamy pisać tego sprawdzianu, ponieważ nikomu z naszej klasy nie chciało się wczoraj uczyć»", correct: false },
          { text: "«Nauczyciel ewidentnie się na nas uwziął, więc kategorycznie żądamy anulowania dzisiejszej kartkówki»", correct: false },
          { text: "«Uprzejmie proszę przełożyć sprawdzian z chemii, bo w piątek mamy wspólne plany na wyjście na pizzę»", correct: false }"""),

    # L198
    ('src/data/characters/dyrektorka.js',
     """          { text: "Odnoszenie się do argumentów merytorycznych rozmówcy bez atakowania jego osoby (argumentum ad rem)", correct: true },
          { text: "Przekrzykiwanie innych i atakowanie ich cech osobistych (argumentum ad personam)", correct: false },
          { text: "Przerywanie wypowiedzi dyrekcji w połowie zdania", correct: false },
          { text: "Wychodzenie z auli demonstracyjnie, gdy ktoś ma odmienne zdanie", correct: false }""",
     """          { text: "Odnoszenie się do argumentów merytorycznych rozmówcy bez atakowania jego osoby (argumentum ad rem)", correct: true },
          { text: "Głośne przekrzykiwanie innych mówców i złośliwe atakowanie ich cech (argumentum ad personam)", correct: false },
          { text: "Bezczelne przerywanie oficjalnej wypowiedzi dyrekcji szkoły w połowie ważnego zdania na apelu", correct: false },
          { text: "Wychodzenie ze szkolnej auli demonstracyjnie trzaskając drzwiami, gdy ktoś ma odmienne zdanie", correct: false }"""),

    # L221
    ('src/data/characters/dyrektorka.js',
     """          { text: "Pieczątkę wpływu z datą dzienną i podpisem sekretarza na kopii pisma (potwierdzenie odbioru)", correct: true },
          { text: "Słowną obietnicę, że dyrektor przeczyta pismo w wolnej chwili", correct: false },
          { text: "Numer telefonu do woźnego szkolnego", correct: false },
          { text: "Żadnego dowodu, sekretariat nie ewidencjonuje wpływających pism", correct: false }""",
     """          { text: "Pieczątkę wpływu z datą dzienną i podpisem sekretarza na kopii pisma (potwierdzenie odbioru)", correct: true },
          { text: "Niejasną słowną obietnicę, że pan dyrektor przeczyta pismo w wolnej chwili w gabinecie", correct: false },
          { text: "Zapisany na skrawku kartki prywatny numer telefonu komórkowego do woźnego szkolnego szkoły", correct: false },
          { text: "Żadnego urzędowego dowodu, gdyż sekretariat w ogóle nie ewidencjonuje pism wpływających", correct: false }"""),

    # ----------------------------------------------------
    # profesor.js
    # L46
    ('src/data/characters/profesor.js',
     """          { text: "Dźwig (od czasownika «dźwigać»)", correct: true },
          { text: "Pisarz (od czasownika «pisać» przyrostkiem -arz)", correct: false },
          { text: "Przeczytać (od «czytać» przedrostkiem prze-)", correct: false },
          { text: "Złotnik (od rzeczownika «złoto» przyrostkiem -nik)", correct: false }""",
     """          { text: "Dźwig (od «dźwigać» formantem zerowym)", correct: true },
          { text: "Pisarz (od «pisać» przyrostkiem -arz)", correct: false },
          { text: "Przeczytać (od «czytać» afiksem prze-)", correct: false },
          { text: "Złotnik (od «złoto» sufiksem -nik)", correct: false }"""),

    # L81
    ('src/data/characters/profesor.js',
     """          { text: "Wysłuchałem w skupieniu rad moich serdecznych przyjaciół i rozmawiałem z nimi dwiema rękami.", correct: true },
          { text: "Wysłuchałem w skupieniu rad moich przyjaciółów na korytarzu.", correct: false },
          { text: "Rozmawiałem z dwoma rękami w kieszeniach marynarki.", correct: false },
          { text: "Nie widziałem tam żadnych ludzisków ani ich psów.", correct: false }""",
     """          { text: "Wysłuchałem w skupieniu rad moich serdecznych przyjaciół i rozmawiałem z nimi dwiema rękami.", correct: true },
          { text: "Wysłuchałem w skupieniu pouczających rad moich przyjaciółów podczas przerwy na korytarzu.", correct: false },
          { text: "Rozmawiałem swobodnie z dwoma rękami wciśniętymi głęboko w kieszenie nowej marynarki.", correct: false },
          { text: "Nie widziałem tam na placu zupełnie żadnych obcych ludzisków ani ich szczekających psów.", correct: false }"""),

    # L93
    ('src/data/characters/profesor.js',
     """          { text: "14 wersów: dwie strofy czterowersowe (opisowe) i dwie strofy trzywersowe (refleksyjne)", correct: true },
          { text: "10 wersów: dwie równe strofy pięciowersowe pisane wierszem wolnym", correct: false },
          { text: "Dwanaście ksiąg pisanych trzynastozgłoskowcem z rymami parzystymi", correct: false },
          { text: "Dowolna liczba zwrotek zakończona rymowanym morałem zwierzęcym", correct: false }""",
     """          { text: "14 wersów: dwie strofy czterowersowe (opisowe) i dwie strofy trzywersowe (refleksyjne)", correct: true },
          { text: "10 wersów: dwie symetryczne strofy pięciowersowe pisane nieregularnym wierszem wolnym", correct: false },
          { text: "Dwanaście rozbudowanych ksiąg epickich pisanych trzynastozgłoskowcem z rymami parzystymi", correct: false },
          { text: "Dowolna liczba krótkich zwrotek poetyckich zakończona dosadnym morałem ze świata fauny", correct: false }"""),

    # L117
    ('src/data/characters/profesor.js',
     """          { text: "Zamek (budowla warowna ze średniowiecza) oraz zamek (suwak błyskawiczny w kurtce)", correct: true },
          { text: "Ręka (kończyna człowieka) oraz ręka (odnóże mebla)", correct: false },
          { text: "Głowa (część ciała) oraz głowa (przywódca rodziny)", correct: false },
          { text: "Noga (kończyna) oraz noga (od stołu)", correct: false }""",
     """          { text: "Zamek (budowla warowna ze średniowiecza) oraz zamek (suwak błyskawiczny w kurtce)", correct: true },
          { text: "Ręka (górna kończyna człowieka) oraz ręka (boczne oparcie zabytkowego mebla w salonie)", correct: false },
          { text: "Głowa (górna część ciała ludzkiego) oraz głowa (szanowany przywódca całej rodziny)", correct: false },
          { text: "Noga (dolna kończyna biegacza) oraz noga (drewniana podpora okrągłego stołu w pokoju)", correct: false }"""),

    # L152
    ('src/data/characters/profesor.js',
     """          { text: "Ubezdźwięcznienie wsteczne (bezdźwięczne «k» ubezdźwięcznia poprzedzające dźwięczne «w»)", correct: true },
          { text: "Udźwięcznienie postępowe (dźwięczne «ł» udźwięcznia całe słowo)", correct: false },
          { text: "Utrata dźwięczności w wygłosie absolutnym słowa", correct: false },
          { text: "Uproszczenie grupy spółgłoskowej w środku wyrazu", correct: false }""",
     """          { text: "Ubezdźwięcznienie wsteczne (bezdźwięczne «k» ubezdźwięcznia poprzedzające dźwięczne «w»)", correct: true },
          { text: "Udźwięcznienie postępowe (dźwięczne fonetycznie «ł» udźwięcznia następujące głoski słowa)", correct: false },
          { text: "Całkowita utrata dźwięczności wymawianej głoski w absolutnym wygłosie końcowym słowa", correct: false },
          { text: "Fonetyczne uproszczenie trudnej grupy spółgłoskowej występującej wewnątrz wyrazu", correct: false }"""),

    # ----------------------------------------------------
    # silaczka.js
    # L11
    ('src/data/characters/silaczka.js',
     """          { text: "Dźwigając sztangę na pomoście, zawodnik wykonał głęboki wydech przeponowy.", correct: true },
          { text: "Dźwigający zawodnik odłożył sztangę na stojaki.", correct: false },
          { text: "Podniósłszy sztangę, podszedł do trenera po napój.", correct: false },
          { text: "Sztanga została dźwignięta z wielkim wysiłkiem.", correct: false }""",
     """          { text: "Dźwigając sztangę na pomoście, zawodnik wykonał głęboki wydech przeponowy.", correct: true },
          { text: "Dźwigający ciężką sztangę zawodnik odłożył cały gryf na stalowe stojaki.", correct: false },
          { text: "Podniósłszy wielką sztangę, zmęczony podszedł powoli do trenera po napój.", correct: false },
          { text: "Stalowa sztanga została dźwignięta z olbrzymim wysiłkiem przez atletę na sali.", correct: false }"""),

    # L152
    ('src/data/characters/silaczka.js',
     """          { text: "Czystą, szlachetną rywalizację z poszanowaniem przeciwnika, sędziów i zasad, bez oszustwa i dopingu", correct: true },
          { text: "Dążenie do zwycięstwa za wszelką cenę, nawet poprzez symulowanie fauli", correct: false },
          { text: "Obrażanie rywali po przegranym meczu na korytarzu szkolnym", correct: false },
          { text: "Ucieczkę z boiska, gdy przeciwnik prowadzi w punktacji", correct: false }""",
     """          { text: "Czystą, szlachetną rywalizację z poszanowaniem przeciwnika, sędziów i zasad, bez oszustwa i dopingu", correct: true },
          { text: "Bezwzględne dążenie do triumfu za wszelką cenę, nawet poprzez brutalną przemoc i symulowanie fauli", correct: false },
          { text: "Wulgarne obrażanie kolegów i rywali po przegranym meczu na korytarzu szkolnym przed całą widownią", correct: false },
          { text: "Tchórzliwą ucieczkę z boiska sportowego w trakcie gry, gdy przeciwnik prowadzi wysoko w punktacji", correct: false }"""),

    # L187
    ('src/data/characters/silaczka.js',
     """          { text: "Codzienna aktywność fizyczna (minimum 60 minut ruchu), sen oraz picie wody", correct: true },
          { text: "Codzienne jedzenie słodyczy i chipsów przed telewizorem", correct: false },
          { text: "Picie wyłącznie kolorowych napojów gazowanych i energetyków", correct: false },
          { text: "Siedzenie bez ruchu przy komputerze przez 12 godzin na dobę", correct: false }""",
     """          { text: "Codzienna aktywność fizyczna (minimum 60 minut ruchu), sen oraz picie wody", correct: true },
          { text: "Codzienne bezmyślne jedzenie tłustych chipsów i słodyczy przed telewizorem", correct: false },
          { text: "Picie wyłącznie przesłodzonych, kolorowych napojów gazowanych i energetyków", correct: false },
          { text: "Nieprzerwane siedzenie bez ruchu przed monitorem przez 12 godzin na dobę", correct: false }"""),

    # L222
    ('src/data/characters/silaczka.js',
     """          { text: "Wzrasta napięcie mięśniowe, lecz długość mięśnia nie ulega zmianie (brak ruchu w stawie)", correct: true },
          { text: "Mięsień gwałtownie się skraca i prostuje kończynę z dużą prędkością", correct: false },
          { text: "Mięsień całkowicie wiotczeje i traci zdolność kurczenia", correct: false },
          { text: "Mięsień zamienia się w tkankę chrzęstną", correct: false }""",
     """          { text: "Wzrasta napięcie mięśniowe, lecz długość mięśnia nie ulega zmianie (brak ruchu w stawie)", correct: true },
          { text: "Włókno mięśniowe gwałtownie skraca się i prostuje zgiętą kończynę z bardzo dużą prędkością", correct: false },
          { text: "Cały mięsień natychmiastowo i całkowicie wiotczeje, tracąc jakąkolwiek zdolność kurczenia", correct: false },
          { text: "Mięsień szkieletowy pod wpływem ciężaru zamienia się trwale w twardą tkankę chrzęstną ciała", correct: false }"""),

    # ----------------------------------------------------
    # smok.js
    # L105
    ('src/data/characters/smok.js',
     """          { text: "Uratowanie Ligii przez Ursusa na arenie cyrku Nerona i publiczne wybaczenie chrześcijan", correct: true },
          { text: "Ucieczka z Rzymu przed pożarem do willi w Ancjum", correct: false },
          { text: "Kupienie nowego pałacu od Petroniusza w centrum Rzymu", correct: false },
          { text: "Pojedynek z gladiatorem Krotonem w zaułku Zatybrza", correct: false }""",
     """          { text: "Uratowanie Ligii przez Ursusa na arenie cyrku Nerona i publiczne wybaczenie chrześcijan", correct: true },
          { text: "Tchórzliwa ucieczka patrycjuszy z płonącego Rzymu przed pożarem do luksusowej willi w Ancjum", correct: false },
          { text: "Kupienie nowego marmurowego pałacu od wykwintnego Petroniusza w samym centrum Wiecznego Rzymu", correct: false },
          { text: "Nocny krwawy pojedynek z potężnym gladiatorem Krotonem w wąskim i ciemnym zaułku Zatybrza", correct: false }"""),

    # L140
    ('src/data/characters/smok.js',
     """          { text: "Zestawił bezduszną machinę carskiego despotyzmu z heroicznym poświęceniem obrońców Warszawy", correct: true },
          { text: "Przedstawił komiczny spór dwóch szlachciców o zamek graniczny", correct: false },
          { text: "Opisał baśniową wędrówkę małego chłopca po odległych planetach", correct: false },
          { text: "Przedstawił realistyczny obraz polskiej wsi w czasie żniw", correct: false }""",
     """          { text: "Zestawił bezduszną machinę carskiego despotyzmu z heroicznym poświęceniem obrońców Warszawy", correct: true },
          { text: "Przedstawił w krzywym zwierciadle komiczny spór dwóch kłótliwych szlachciców o zamek graniczny", correct: false },
          { text: "Opisał poetycką i baśniową wędrówkę małego, złotowłosego chłopca po odległych planetach kosmosu", correct: false },
          { text: "Przedstawił wierny, barwny i w pełni realistyczny obraz polskiej wsi szlacheckiej w czasie żniw", correct: false }"""),

    # L175
    ('src/data/characters/smok.js',
     """          { text: "Recytacja «Reduty Ordona» Mickiewicza przez Bernarda Zygiera na lekcji polskiego u prof. Sztubera", correct: true },
          { text: "Odwiedziny matki w klerykowskim gimnazjum", correct: false },
          { text: "Kłótnia z inspektorem Majewskim o mundur szkolny", correct: false },
          { text: "Wyjazd na polowanie z myśliwym w Gawronkach", correct: false }""",
     """          { text: "Recytacja «Reduty Ordona» Mickiewicza przez Bernarda Zygiera na lekcji polskiego u prof. Sztubera", correct: true },
          { text: "Ciche i wzruszające odwiedziny zatroskanej matki Marcina w starym klerykowskim gimnazjum męskim", correct: false },
          { text: "Burzliwa kłótnia młodego Borowicza z wścibskim inspektorem Majewskim o brak regulaminowego munduru", correct: false },
          { text: "Wspólny jesienny wyjazd na emocjonujące polowanie z doświadczonym myśliwym w borach w Gawronkach", correct: false }"""),

    # L210
    ('src/data/characters/smok.js',
     """          { text: "Ostrzega przed zarozumiałością, pychą i odrzucaniem własnej prawdziwej natury na rzecz fałszywych ambicji", correct: true },
          { text: "Zachęca do kupowania dzikich zwierząt do objazdowych cyrków", correct: false },
          { text: "Wskazuje, że w teatrze liczy się wyłącznie głośny ryk aktora", correct: false },
          { text: "Podkreśla, że dyrektor cyrku nie znał się na sztuce scenicznej", correct: false }""",
     """          { text: "Ostrzega przed zarozumiałością, pychą i odrzucaniem własnej prawdziwej natury na rzecz fałszywych ambicji", correct: true },
          { text: "Zachęca do kupowania groźnych dzikich drapieżników do objazdowych, prowincjonalnych cyrków w kraju", correct: false },
          { text: "Wskazuje naiwnie, że na deskach profesjonalnego teatru liczy się wyłącznie potężny i głośny ryk aktora", correct: false },
          { text: "Podkreśla z przekąsem, że surowy dyrektor cyrku zupełnie nie znał się na wybitnej sztuce scenicznej", correct: false }"""),

    # ----------------------------------------------------
    # curriculumChallenges.js
    # L368
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'Niezatarte piętno zbrodni bratobójstwa oraz wyrzuty sumienia, których nie da się ukryć', correct: true },
        { text: 'Królewskie pochodzenie z rodu Popielidów', correct: false },
        { text: 'Błogosławieństwo nimfy wodnej Goplany', correct: false }
      ]""",
     """      options: [
        { text: 'Niezatarte piętno zbrodni bratobójstwa oraz wyrzuty sumienia, których nie da się ukryć', correct: true },
        { text: 'Dumnie noszone królewskie pochodzenie z pradawnego rodu Popielidów na tronie', correct: false },
        { text: 'Cudowne błogosławieństwo opiekuńczej nimfy wodnej Goplany znad jeziora Gopło', correct: false }
      ]"""),

    # L421
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'Duch jego zmarłego wspólnika, Jakuba Marleya, skuty łańcuchem z kasetek', correct: true },
        { text: 'Jego kancelista Bob Cratchit z synkiem Małym Timem', correct: false },
        { text: 'Siostrzeniec Fred zapraszający go na świąteczny obiad', correct: false },
        { text: 'Duch Przyszłych Wigilii wskazujący nagrobek', correct: false }
      ]""",
     """      options: [
        { text: 'Duch jego zmarłego wspólnika, Jakuba Marleya, skuty łańcuchem z kasetek', correct: true },
        { text: 'Jego skromny kancelista Bob Cratchit z chorym synkiem Małym Timem u boku', correct: false },
        { text: 'Uśmiechnięty siostrzeniec Fred serdecznie zapraszający go na obiad w święta', correct: false },
        { text: 'Mroczny Duch Przyszłych Wigilii milcząco wskazujący zarośnięty nagrobek', correct: false }
      ]"""),

    # L432
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'To Jacek Soplica, ojciec Tadeusza, który odkupuje dawne winy służbą dla ojczyzny', correct: true },
        { text: 'To dawny klucznik Horeszków, Gerwazy Rębajło', correct: false },
        { text: 'To rosyjski major Płut w przebraniu mnicha', correct: false },
        { text: 'To brat Telimeny przybyły z Petersburga', correct: false }
      ]""",
     """      options: [
        { text: 'To Jacek Soplica, ojciec Tadeusza, który odkupuje dawne winy służbą dla ojczyzny', correct: true },
        { text: 'To wierny i mściwy dawny klucznik rodu Horeszków, szlachcic Gerwazy Rębajło', correct: false },
        { text: 'To podstępny rosyjski oficer major Płut ukrywający się w przebraniu mnicha', correct: false },
        { text: 'To rodzony brat pięknej Telimeny przybyły niedawno wprost z Petersburga', correct: false }
      ]"""),

    # L465
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'Z Ebenezerem Scrooge’em z „Opowieści wigilijnej” Charlesa Dickensa', correct: true },
        { text: 'Z Królem z pierwszej planety w „Małym Księciu”', correct: false },
        { text: 'Ze Skierką i Chochlikiem z „Balladyny”', correct: false }
      ]""",
     """      options: [
        { text: 'Z Ebenezerem Scrooge’em z „Opowieści wigilijnej” Charlesa Dickensa', correct: true },
        { text: 'Z władczym Królem z pierwszej odwiedzonej planety w „Małym Księciu”', correct: false },
        { text: 'Z psotnymi leśnymi duszkami Skierką i Chochlikiem z „Balladyny”', correct: false }
      ]"""),

    # L494
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'Wezwanie Polaków do powolnej pracy w zakładach kontrolowanych przez niemieckiego okupanta', correct: true },
        { text: 'Reklamę przedwojennego ogrodu zoologicznego w Warszawie', correct: false },
        { text: 'Rozkaz natychmiastowej ucieczki z miasta', correct: false }
      ]""",
     """      options: [
        { text: 'Wezwanie Polaków do powolnej pracy w zakładach kontrolowanych przez niemieckiego okupanta', correct: true },
        { text: 'Zabawną reklamę znanego przedwojennego ogrodu zoologicznego na warszawskiej Pradze', correct: false },
        { text: 'Oficjalny wojskowy rozkaz natychmiastowej ewakuacji i ucieczki ludności z miasta', correct: false }
      ]"""),

    # L526
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: 'Do „Balladyny” Juliusza Słowackiego – korona oznacza żądzę władzy, maliny zbrodnię na Alinie, a błyskawica sprawiedliwą karę', correct: true },
        { text: 'Do „Pana Tadeusza” Adama Mickiewicza – burza w Soplicowie i zbieranie grzybów', correct: false },
        { text: 'Do „Małego Księcia” – korona Króla na pierwszej planecie', correct: false },
        { text: 'Do „Dziadów cz. II” – wianek pasterki Zosi', correct: false }
      ]""",
     """      options: [
        { text: 'Do „Balladyny” Juliusza Słowackiego – korona oznacza żądzę władzy, maliny zbrodnię na Alinie, a błyskawica sprawiedliwą karę', correct: true },
        { text: 'Do „Pana Tadeusza” Adama Mickiewicza – złota korona królewska, gwałtowna burza w Soplicowie i leśne grzybobranie szlachty', correct: false },
        { text: 'Do „Małego Księcia” Antoine de Saint-Exupéry’ego – pyszna korona Króla na małej asteroidzie oraz zerwane róże na pustyni', correct: false },
        { text: 'Do „Dziadów cz. II” Adama Mickiewicza – lekki wianek pasterki Zosi, uciekający baranek oraz chleb i ziarna dla ptaków nocy', correct: false }
      ]"""),

    # L537
    ('src/data/curriculumChallenges.js',
     """      options: [
        { text: '„Balladyna” Juliusza Słowackiego oraz „Dziady cz. II” Adama Mickiewicza (Widmo Złego Pana)', correct: true },
        { text: '„Mały Książę” oraz „Akademia Pana Kleksa”', correct: false },
        { text: '„Kamienie na szaniec” oraz „Latarnik”', correct: false },
        { text: '„Kajko i Kokosz” oraz „Chłopcy z Placu Broni”', correct: false }
      ]""",
     """      options: [
        { text: '„Balladyna” Juliusza Słowackiego oraz „Dziady cz. II” Adama Mickiewicza (Widmo Złego Pana)', correct: true },
        { text: '„Mały Książę” Antoine de Saint-Exupéry’ego oraz „Akademia Pana Kleksa” Jana Brzechwy', correct: false },
        { text: '„Kamienie na szaniec” Aleksandra Kamińskiego oraz nowela „Latarnik” Henryka Sienkiewicza', correct: false },
        { text: 'Komiks „Kajko i Kokosz” Janusza Christy oraz powieść „Chłopcy z Placu Broni” Ferenca Molnára', correct: false }
      ]"""),

    # ----------------------------------------------------
    # bossChallengesData.js
    # L88
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Czerwoną kartkę oznaczającą natychmiastowe wykluczenie z gry i osłabienie drużyny.', correct: true },
        { text: 'Żółtą kartkę będącą jedynie ustnym upomnieniem bez konsekwencji.', correct: false },
        { text: 'Dwie minuty kary na ławce rezerwowych jak w hokeju.', correct: false },
        { text: 'Rzut wolny pośredni bez możliwości ukarania kartką.', correct: false }
      ]""",
     """      options: [
        { text: 'Czerwoną kartkę oznaczającą natychmiastowe wykluczenie z gry i osłabienie drużyny.', correct: true },
        { text: 'Żółtą kartkę będącą jedynie wstępnym ostrzeżeniem gracza bez osłabienia składu.', correct: false },
        { text: 'Dwie minuty kary na ławce rezerwowych poza boiskiem niczym w meczu hokejowym.', correct: false },
        { text: 'Zwykły rzut wolny pośredni na połowie rywali bez prawa ukarania żadną kartką.', correct: false }
      ]"""),

    # L444
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Lepiej zadowolić się pewną, choć mniejszą korzyścią, niż ryzykować utratę wszystkiego dla niepewnych zysków.', correct: true },
        { text: 'Wróble na dachach potrafią latać szybciej i zwinniej niż miejskie gołębie.', correct: false },
        { text: 'Należy za wszelką cenę ryzykować cały swój majątek w każdej nowej sytuacji.', correct: false },
        { text: 'Wszystkie ptaki miejskie wymagają dokarmiania ziarnem w czasie mroźnej zimy.', correct: false }
      ]""",
     """      options: [
        { text: 'Lepiej zadowolić się pewną, choć mniejszą korzyścią, niż ryzykować utratę wszystkiego dla niepewnych zysków.', correct: true },
        { text: 'Wszystkie małe wróble siedzące na dachach potrafią latać znacznie szybciej i zwinniej niż gołębie miejskie.', correct: false },
        { text: 'Należy zawsze i za wszelką cenę bez wahania ryzykować cały posiadany majątek w każdej życiowej sytuacji.', correct: false },
        { text: 'Każde dzikie ptaki żyjące w mieście wymagają obfitego dokarmiania świeżym ziarnem w czasie mroźnej zimy.', correct: false }
      ]"""),

    # L789
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Kto zaprasza, kogo zaprasza, na jakie wydarzenie, kiedy (data i godzina) oraz gdzie (dokładne miejsce).', correct: true },
        { text: 'Kto zaprasza, koszt biletu wstępu, menu obiadowe i podpis rodziców.', correct: false },
        { text: 'Data wydarzenia, lista nieobecnych uczniów i spis lektur obowiązkowych.', correct: false },
        { text: 'Tylko nazwa szkoły i pieczątka sekretariatu bez podania godziny.', correct: false }
      ]""",
     """      options: [
        { text: 'Kto zaprasza, kogo zaprasza, na jakie wydarzenie, kiedy (data i godzina) oraz gdzie (dokładne miejsce).', correct: true },
        { text: 'Kto zaprasza gości, dokładny koszt biletu wstępu, wybrane menu obiadowe oraz podpis obojga rodziców.', correct: false },
        { text: 'Data wydarzenia szkolnego, pełna lista nieobecnych na apelu uczniów i aktualny spis lektur szkolnych.', correct: false },
        { text: 'Tylko ogólna nazwa szkoły oraz okrągła pieczątka sekretariatu zupełnie bez podania daty ani godziny.', correct: false }
      ]"""),

    # L832
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'W szkolnej bibliotece zabrakło egzemplarzy lektury dla całej klasy.', correct: true },
        { text: 'Uczniowie wypożyczyli wszystkie dostępne tomy wierszy.', correct: false },
        { text: 'Nowe podręczniki leżały na biurku nauczycielki.', correct: false },
        { text: 'Książka została przeczytana od deski do deski.', correct: false }
      ]""",
     """      options: [
        { text: 'W szkolnej bibliotece zabrakło egzemplarzy lektury dla całej klasy.', correct: true },
        { text: 'Uczniowie wypożyczyli wszystkie dostępne tomy wierszy z biblioteki.', correct: false },
        { text: 'Wszystkie nowe podręczniki leżały ułożone na biurku nauczycielki.', correct: false },
        { text: 'Wypożyczona gruba książka została przeczytana od deski do deski.', correct: false }
      ]"""),

    # L1145
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: '„Od trzech dni boli mnie gardło, mam wysoką gorączkę i męczy mnie suchy kaszel.”', correct: true },
        { text: '„Od trzech dni bolę gardło, mam gorączkę i męczę suchy kaszel.”', correct: false },
        { text: '„Boli mi gardło i czuję gardło bolejące przy przełykaniu.”', correct: false },
        { text: '„Gardło mnie boli od trzech dniach z gorączkami.”', correct: false }
      ]""",
     """      options: [
        { text: '„Od trzech dni boli mnie gardło, mam wysoką gorączkę i męczy mnie suchy kaszel.”', correct: true },
        { text: '„Od trzech dni bolę gardło, mam wysoką gorączkę i męczę bardzo suchy kaszel.”', correct: false },
        { text: '„Boli mi gardło, mam wysoką gorączkę i czuję gardło bolejące przy przełykaniu.”', correct: false },
        { text: '„Gardło mnie mocno boli od trzech dniach z gorączkami i z wielkimi kaszlami.”', correct: false }
      ]"""),

    # L1177
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Antybiotyki niszczą wyłącznie bakterie i są całkowicie nieskuteczne w walce z wirusami (np. grypą).', correct: true },
        { text: 'Antybiotyki leczą każdą chorobę przeziębieniową w ciągu dwunastu godzin.', correct: false },
        { text: 'Antybiotyki można brać dowolnie bez konsultacji i przerywać kurację po jednym dniu.', correct: false },
        { text: 'Antybiotyki działają tylko przeciwbólowo i zastępują witaminę C.', correct: false }
      ]""",
     """      options: [
        { text: 'Antybiotyki niszczą wyłącznie bakterie i są całkowicie nieskuteczne w walce z wirusami (np. grypą).', correct: true },
        { text: 'Antybiotyki leczą bez wyjątku każdą chorobę przeziębieniową oraz katar w ciągu dwunastu godzin.', correct: false },
        { text: 'Antybiotyki można brać zupełnie dowolnie bez konsultacji i przerywać całą kurację po jednym dniu.', correct: false },
        { text: 'Antybiotyki działają wyłącznie przeciwbólowo na organizm pacjenta i zastępują witaminę C w diecie.', correct: false }
      ]"""),

    # L1209
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: '„Od rana pacjent nie przyjmował żadnego leku przeciwgorączkowego.”', correct: true },
        { text: '„Od rana pacjent nie przyjmował żaden lek przeciwgorączkowy.”', correct: false },
        { text: '„Nie czułem żaden ból podczas badania stetoskopem.”', correct: false },
        { text: '„Lekarz nie przepisał ten silny syrop.”', correct: false }
      ]""",
     """      options: [
        { text: '„Od rana pacjent nie przyjmował żadnego leku przeciwgorączkowego.”', correct: true },
        { text: '„Od rana pacjent nie przyjmował wcale żaden lek przeciwgorączkowy.”', correct: false },
        { text: '„Nie czułem zupełnie żaden ból w klatce podczas badania stetoskopem.”', correct: false },
        { text: '„Lekarz na wizycie nie przepisał ten bardzo silny syrop wykrztuśny.”', correct: false }
      ]"""),

    # L1530
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Egzamin ósmoklasisty z języka polskiego trwa 120 minut i zawiera zadania zamknięte oraz otwarte.', correct: true },
        { text: 'Wypracowanie o «Kamieniach na szaniec» to najciekawsza forma wypowiedzi na egzaminie.', correct: false },
        { text: 'Instagramerzy prowadzą znacznie bardziej ekscytujące życie niż autorzy lektur szkolnych.', correct: false },
        { text: 'Żółte tło na profilu społecznościowym wygląda zdecydowanie najlepiej.', correct: false }
      ]""",
     """      options: [
        { text: 'Egzamin ósmoklasisty z języka polskiego trwa 120 minut i zawiera zadania zamknięte oraz otwarte.', correct: true },
        { text: 'Wypracowanie o «Kamieniach na szaniec» to bez wątpienia najciekawsza forma wypowiedzi na teście.', correct: false },
        { text: 'Instagramerzy w sieci prowadzą znacznie bardziej ekscytujące życie niż dawni autorzy lektur.', correct: false },
        { text: 'Żółte jaskrawe tło na profilu społecznościowym każdego ucznia wygląda zdecydowanie najlepiej.', correct: false }
      ]"""),

    # L1562
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Publikacja wymaga zgody autora lub skorzystania z otwartej licencji (np. Creative Commons) z podaniem źródła.', correct: true },
        { text: 'Wszystkie obrazy widoczne w internecie można bez ograniczeń pobierać i podpisywać jako własne.', correct: false },
        { text: 'Wystarczy dopisać pod zdjęciem «znalezione w sieci», by uniknąć naruszenia praw majątkowych.', correct: false },
        { text: 'Prawa autorskie wygasają automatycznie po 24 godzinach od opublikowania posta.', correct: false }
      ]""",
     """      options: [
        { text: 'Publikacja wymaga zgody autora lub skorzystania z otwartej licencji (np. Creative Commons) z podaniem źródła.', correct: true },
        { text: 'Wszystkie obrazy widoczne w wyszukiwarkach można zupełnie bez ograniczeń pobierać i podpisywać jako własne.', correct: false },
        { text: 'Wystarczy jedynie dopisać pod kradzionym zdjęciem «znalezione w sieci», by uniknąć naruszenia praw majątku.', correct: false },
        { text: 'Autorskie prawa majątkowe do fotografii wygasają automatycznie już po 24 godzinach od publikacji posta.', correct: false }
      ]"""),

    # L1594
    ('src/data/bossChallengesData.js',
     """      options: [
        { text: 'Podczas prezentacji omówiłem zalety netykiety, a także przedstawiłem zasady ochrony haseł.', correct: true },
        { text: 'Podczas prezentacji omówiłem zalety netykiety, a tak że przedstawiłem zasady ochrony haseł.', correct: false },
        { text: 'Mówił tak że nikt na sali nie zrozumiał jego intencji.', correct: false },
        { text: 'Zrobiłem to także, jak kazał mi administrator sieci.', correct: false }
      ]""",
     """      options: [
        { text: 'Podczas prezentacji omówiłem zalety netykiety, a także przedstawiłem zasady ochrony haseł.', correct: true },
        { text: 'Podczas prezentacji omówiłem zalety netykiety, a tak że przedstawiłem zasady ochrony haseł.', correct: false },
        { text: 'Prelegent mówił tak że nikt z obecnych na dużej sali nie zrozumiał jego prawdziwych intencji.', correct: false },
        { text: 'Zrobiłem to zadanie także, jak kazał mi doświadczony administrator szkolnej sieci cyfrowej.', correct: false }
      ]"""),

    # ----------------------------------------------------
    # MinigameLauncher.js L764
    ('src/encounters/MinigameLauncher.js',
     """      options: [
        { text: '„Tak, proszę! Mam niebieski długopis w piórniku.”', correct: true },
        { text: '„Nie mam nic do pisania.”', correct: false },
        { text: '„Idę na przerwę!”', correct: false }
      ]""",
     """      options: [
        { text: '„Tak, proszę! Mam niebieski długopis w piórniku.”', correct: true },
        { text: '„Nie mam zupełnie nic do pisania w moim plecaku.”', correct: false },
        { text: '„Idę natychmiast na przerwę i nie pożyczę ci nic!”', correct: false }
      ]"""),

    # kebabMasterGame.js L129
    ('src/games/kebabMasterGame.js',
     """      options: [
        { text: '„Dziękuję bardzo! Miłego dnia i do widzenia!”', correct: true },
        { text: '„Dawaj ten kebab i uciekam stąd!”', correct: false },
        { text: '„Zapomniałem zapłacić.”', correct: false }
      ]""",
     """      options: [
        { text: '„Dziękuję bardzo! Miłego dnia i do widzenia!”', correct: true },
        { text: '„Dawaj ten gorący kebab i zaraz uciekam stąd!”', correct: false },
        { text: '„Zapomniałem zapłacić za ten zamówiony kebab.”', correct: false }
      ]"""),

    # vocabulary.js L168
    ('src/data/vocabulary.js',
     """    options: [
      { text: 'Pożegnanie z kolegami, gdy odchodzimy lub idziemy do domu', correct: true },
      { text: 'Pytanie o godzinę lub numer strony', correct: false },
      { text: 'Powitanie nauczyciela w klasie', correct: false }
    ]""",
     """    options: [
      { text: 'Pożegnanie z kolegami, gdy odchodzimy lub idziemy do domu', correct: true },
      { text: 'Pytanie o aktualną godzinę lub właściwy numer strony w książce', correct: false },
      { text: 'Oficjalne powitanie pani nauczycielki w sali lekcyjnej w szkole', correct: false }
    ]""")
]

# Apply all replacements
for path, old, new in REPLACEMENTS:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old not in content:
        print(f"WARN: not found in {path}:\n{old[:50]}...")
        continue
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

print("Batch 1 completed!")
