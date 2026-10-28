// Rozbudowane dialogi dla postaci typu Gaduła i Adaptujących (Wuefista, Pielęgniarka, Gejmer, Piłkarz, Cwaniak)

// Dialog Wuefisty (Moduł 3 Plansza 3) — 16 pytań
export const WUEFISTA_DIALOG_STEPS = [
  {
    question: '„Cześć! Zanim wyjdziemy na boisko – co jest najważniejsze przed grą w piłkę?”',
    options: [
      { text: '„Porządna rozgrzewka całego ciała, żeby uniknąć kontuzji!”', correct: true },
      { text: '„Zjedzenie tłustych chipsów i wypicie dużej butelki coli!”', correct: false },
      { text: '„Zostawienie wszystkich rzeczy w szatni i ucieczka do domu!”', correct: false }
    ]
  },
  {
    question: '„Świetnie! Jaki strój sportowy obowiązuje na sali gimnastycznej na WF-ie?”',
    options: [
      { text: '„Biała koszulka, krótkie spodenki i buty z jasną podeszwą.”', correct: true },
      { text: '„Gruba zimowa kurtka z kapturem, wełniana czapka i szalik.”', correct: false },
      { text: '„Eleganckie jeansy z paskiem oraz skórzane buty wyjściowe.”', correct: false }
    ]
  },
  {
    question: '„Brawo! W jaki sport zespołowy gramy dzisiaj na sali?”',
    options: [
      { text: '„W siatkówkę, koszykówkę lub piłkę nożną halową!”', correct: true },
      { text: '„W gry na smartfonie pod ławką w szatni szkolnej!”', correct: false },
      { text: '„W malowanie farbami plakatowymi na korytarzu!”', correct: false }
    ]
  },
  {
    question: '„Co robisz natychmiast, gdy usłyszysz ostry dźwięk mojego gwizdka?”',
    options: [
      { text: '„Zatrzymuję się, przerywam grę i uważnie słucham polecenia trenera!”', correct: true },
      { text: '„Biegnę z całych sił przed siebie z mocno zamkniętymi oczami!”', correct: false },
      { text: '„Wychodzę natychmiast na korytarz bez pytania o jakąkolwiek zgodę!”', correct: false }
    ]
  },
  {
    question: '„Dlaczego na lekcji WF-u nie wolno żuć gumy do żucia podczas biegania?”',
    options: [
      { text: '„Bo w trakcie biegu można się niebezpiecznie zakrztusić!”', correct: true },
      { text: '„Bo guma do żucia natychmiast zmienia kolor stroju na WF!”', correct: false },
      { text: '„Bo od żucia gumy psuje się metalowy gwizdek sędziego!”', correct: false }
    ]
  },
  {
    question: '„Jak zachowuje się prawdziwy sportowiec po przegranym meczu?”',
    options: [
      { text: '„Podaje rękę rywalom i gratuluje im dobrej gry zgodnie z zasadą Fair Play!”', correct: true },
      { text: '„Kopie ze złością piłkę w okno sali i natychmiast obraża się na wszystkich!”', correct: false },
      { text: '„Zabiera siatkę z bramki do plecaka i ucieka obrażony prosto do swojego domu!”', correct: false }
    ]
  },
  {
    question: '„Które ćwiczenie najlepiej rozgrzewa stawy skokowe i kolana przed biegiem?”',
    options: [
      { text: '„Przysiady, wykroki i krążenia kolan oraz stóp!”', correct: true },
      { text: '„Pisanie dyktanda długopisem.”', correct: false },
      { text: '„Siedzenie na materacu ze skrzyżowanymi nogami.”', correct: false }
    ]
  },
  {
    question: '„Co robimy, gdy jeden z uczniów w trakcie gry dozna bolesnego stłuczenia?”',
    options: [
      { text: '„Przerywamy akcję i natychmiast zgłaszamy to nauczycielowi WF-u!”', correct: true },
      { text: '„Gramy zawzięcie dalej, zupełnie nie zwracając uwagi na jego ból!”', correct: false },
      { text: '„Śmiejemy się głośno z jego potknięcia razem z całą naszą drużyną!”', correct: false }
    ]
  },
  {
    question: '„W jakie dni tygodnia mamy w planie lekcji zajęcia wychowania fizycznego?”',
    options: [
      { text: '„W poniedziałek, środę i piątek!”', correct: true },
      { text: '„Tylko w niedzielę o północy.”', correct: false },
      { text: '„W czasie wakacji letnich.”', correct: false }
    ]
  },
  {
    question: '„Gdzie zostawiamy ubrania codzienne i plecaki na czas trwania lekcji WF-u?”',
    options: [
      { text: '„Uporządkowane na ławkach lub w szafkach w szatni sportowej!”', correct: true },
      { text: '„Rozrzucone na samym środku boiska pod zawieszonym koszem!”', correct: false },
      { text: '„Zostawione w pokoju nauczycielskim na wielkim stole narad!”', correct: false }
    ]
  },
  {
    question: '„Ile trwa jedna połowa profesjonalnego meczu piłki nożnej na dużym stadionie?”',
    options: [
      { text: '„45 minut (a cały mecz 90 minut)!”', correct: true },
      { text: '„Około 10 minut (a cały mecz 20)!”', correct: false },
      { text: '„Około 60 minut (a cały mecz 120)!”', correct: false }
    ]
  },
  {
    question: '„Co oznacza żółta kartka pokazana zawodnikowi przez sędziego?”',
    options: [
      { text: '„Oficjalne ostrzeżenie za nieprzepisowe lub niesportowe zachowanie!”', correct: true },
      { text: '„Specjalną nagrodę za najładniejszy i najbardziej celny strzał!”', correct: false },
      { text: '„Darmowe zaproszenie na pyszny obiad do szkolnej stołówki dla gracza!”', correct: false }
    ]
  },
  {
    question: '„A co oznacza czerwona kartka na boisku piłkarskim?”',
    options: [
      { text: '„Wykluczenie zawodnika z gry i konieczność opuszczenia boiska!”', correct: true },
      { text: '„Dodatkowe dziesięć minut przerwy na słodkie lody waniliowe!”', correct: false },
      { text: '„Automatyczne zwycięstwo w całym turnieju piłkarskim w szkole!”', correct: false }
    ]
  },
  {
    question: '„Dlaczego współpraca i podawanie piłki są ważniejsze niż samotne dryblowanie przez całe boisko?”',
    options: [
      { text: '„Bo piłka nożna to gra zespołowa i cała drużyna pracuje na wspólny sukces!”', correct: true },
      { text: '„Bo podawanie piłki kolegom jest surowo zabronione przez międzynarodowe przepisy!”', correct: false },
      { text: '„Bo bramkarz drużyny przeciwnej bardzo nie lubi łapać lecącej w stronę bramki piłki!”', correct: false }
    ]
  },
  {
    question: '„Po treningu pora zadbać o higienę. Co robimy po powrocie do szatni?”',
    options: [
      { text: '„Myjemy ręce i twarz, przebieramy się w czyste ubranie i pijemy wodę!”', correct: true },
      { text: '„Idziemy na trudną lekcję matematyki w zupełnie spoconym stroju!”', correct: false },
      { text: '„Chowamy mokrą od potu koszulkę między czyste szkolne książki w torbie!”', correct: false }
    ]
  },
  {
    question: '„Znakomicie! Z taką wiedzą sportową jesteś gotowy na każde wyzwanie na hali!”',
    options: [
      { text: '„Dziękuję panie trenerze! Zawsze gram uczciwie i z zaangażowaniem!”', correct: true },
      { text: '„Zapomniałem już zupełnie jak się biega po sali gimnastycznej!”', correct: false },
      { text: '„Idę od razu spać na niebieskim materacu gimnastycznym w kącie!”', correct: false }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Plansza 2: Pierwsza wizyta z dolegliwościami) — 8 kroków
export const PIELEGNIARKA_DIALOG_STEPS = [
  {
    question: '„Dzień dobry! Usiądź na fotelu. Z czym dzisiaj do mnie przychodzisz?”',
    options: [
      { text: '„Dzień dobry! Od rana boli mnie brzuch i czuję się bardzo osłabiony.”', correct: true },
      { text: '„Dzień dobry! Chcę tylko pograć na telefonie w grę ze znajomymi.”', correct: false },
      { text: '„Dzień dobry! Kupuję bilet ulgowy za jedną monetę w automacie.”', correct: false }
    ]
  },
  {
    question: '„Rozumiem. Zmierzę ci temperaturę termometrem bezdotykowym. Co czujesz – jest ci zimno czy gorąco?”',
    options: [
      { text: '„Jest mi na zmianę gorąco i zimno, chyba mam lekką gorączkę.”', correct: true },
      { text: '„Zapomniałem długiej plastikowej linijki na lekcję plastyki.”', correct: false },
      { text: '„Bardzo lubię jeść chrupiącą pizzę na wyjątkowo cienkim cieście.”', correct: false }
    ]
  },
  {
    question: '„Czy jadłeś dzisiaj rano pożywne śniadanie przed wyjściem do szkoły?”',
    options: [
      { text: '„Jadłem tylko w pośpiechu małą kanapkę i wypiłem herbatę.”', correct: true },
      { text: '„Zjadłem trzy plastikowe linijki i miękką gumkę do ścierania.”', correct: false },
      { text: '„Nie pamiętam już zupełnie jak się nazywam ani gdzie mieszkam.”', correct: false }
    ]
  },
  {
    question: '„A czy boli cię również głowa albo gardło przy przełykaniu?”',
    options: [
      { text: '„Tak, trochę drapie mnie w gardle i czuję ucisk w skroniach.”', correct: true },
      { text: '„Boli mnie mój stary granatowy plecak zostawiony w szatni.”', correct: false },
      { text: '„Dostałem wczoraj bardzo dobrą ocenę z trudnej przyrody.”', correct: false }
    ]
  },
  {
    question: '„Termometr wskazuje 37.8°C. Wypij powoli tę szklankę ciepłej wody lub rumianku. Zadzwonię po twoją mamę, dobrze?”',
    options: [
      { text: '„Dziękuję bardzo pani pielęgniarce. Odpocznę chwilę na kozetce.”', correct: true },
      { text: '„Nie chcę pić wody, wolę głośno biegać i krzyczeć na korytarzu.”', correct: false },
      { text: '„Nie przygotowałem trudnego zadania domowego z matematyki na dziś.”', correct: false }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Plansza 2: Kontrola po lekach i odpoczynku)
export const PIELEGNIARKA_KONTROLA_DIALOG_STEPS = [
  {
    question: '„Jak się teraz czujesz? Czy ból brzucha i głowy trochę ustąpił po szklance wody i odpoczynku?”',
    options: [
      { text: '„Tak, odpocząłem i czuję się już o wiele lepiej, dziękuję!”', correct: true },
      { text: '„Zamawiam dużą porcję frytek z ostrym keczupem na wynos!”', correct: false },
      { text: '„Wybieram język obcy w dotykowym automacie biletowym w holu!”', correct: false }
    ]
  },
  {
    question: '„Czy masz jeszcze zawroty głowy albo dreszcze?”',
    options: [
      { text: '„Nie, dreszcze minęły i mam już więcej sił.”', correct: true },
      { text: '„Tak, zgubiłem piórnik pod drewnianą tablicą.”', correct: false },
      { text: '„Poproszę jeden ulgowy bilet na tramwaj miejski.”', correct: false }
    ]
  },
  {
    question: '„Wspaniale! Zmierzmy jeszcze raz temperaturę termometrem. Wynik to równe 36.6°C – norma!”',
    options: [
      { text: '„Cieszę się bardzo! Dziękuję pani pielęgniarce za troskliwą pomoc!”', correct: true },
      { text: '„Zgubiłem wczoraj swój nowy plecak w ciemnej szatni szkolnej!”', correct: false },
      { text: '„Czy mogę dostać czerwony długopis do rysowania kwiatów w zeszycie?”', correct: false }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Boss: Rejestracja w Przychodni Zdrowia przed wizytą u Doktora Lekarza)
export const PIELEGNIARKA_PRZYCHODNIA_DIALOG_STEPS = [
  {
    question: '„Dzień dobry! Witaj w Przychodni Zdrowia. Czy przyszedłeś na badanie kontrolne do Doktora Lekarza?”',
    options: [
      { text: '„Dzień dobry! Tak, mam umówioną wizytę u pana doktora.”', correct: true },
      { text: '„Dzień dobry! Szukam nowego boiska do piłki nożnej Orlik.”', correct: false },
      { text: '„Dzień dobry! Nie zamierzam odpowiadać na żadne pytania.”', correct: false }
    ]
  },
  {
    question: '„Poproszę twoją kartę pacjenta lub legitymację szkolną, abym mogła sprawdzić dane w rejestracji.”',
    options: [
      { text: '„Proszę bardzo, oto moja legitymacja szkolna.”', correct: true },
      { text: '„Oto moja kanapka z żółtym serem.”', correct: false },
      { text: '„Nie wiem w jakim mieście mieszkam.”', correct: false }
    ]
  },
  {
    question: '„Świetnie! Zanim wejdziesz do gabinetu, zmierzę ci tętno i ciśnienie krwi. Podwiń proszę rękaw bluzy.”',
    options: [
      { text: '„Oczywiście, proszę bardzo. Oddycham spokojnie.”', correct: true },
      { text: '„Muszę skasować bilet autobusowy.”', correct: false },
      { text: '„Zapomniałem drugiego śniadania do szkoły.”', correct: false }
    ]
  },
  {
    question: '„Wszystkie parametry masz idealne jak młody sportowiec! Doktor Lekarz już czeka na Ciebie w gabinecie. Śmiało wchodź!”',
    options: [
      { text: '„Dziękuję pani pielęgniarce! Wchodzę na badanie do pana doktora.”', correct: true },
      { text: '„Strasznie się boję badania i natychmiast uciekam na dwór przed szkołę.”', correct: false },
      { text: '„Czy ma pani zainstalowaną jakąś nową wciągającą grę na smartfonie?”', correct: false }
    ]
  }
];

// Dialog Gejmera (Moduł 5 Plansza 1) — 16 pytań
export const GEJMER_DIALOG_STEPS = [
  {
    question: '„Siemanko! Jaki masz sprzęt u siebie w pokoju do grania po lekcjach?”',
    options: [
      { text: '„Mam komputer na biurku, szybkie Wi-Fi i słuchawki z mikrofonem!”', correct: true },
      { text: '„Mam w plecaku tylko zeszyt w kratkę i długą linijkę do geometrii!”', correct: false },
      { text: '„Kupuję w automacie ulgowy bilet na miejski tramwaj w centrum!”', correct: false }
    ]
  },
  {
    question: '„Klasa! A w co najchętniej grasz ze znajomymi ze szkoły?”',
    options: [
      { text: '„Gramy w Brawl Stars i Robloxa, gadając przez Discorda!”', correct: true },
      { text: '„Boli mnie brzuch i muszę zmierzyć temperaturę termometrem!”', correct: false },
      { text: '„Poproszę świeżą bułkę z piekarni i mocną reklamówkę na zakupy!”', correct: false }
    ]
  },
  {
    question: '„Zacnie! Co robisz, gdy bateria w padzie lub smartfonie zaczyna padać?”',
    options: [
      { text: '„Podłączam szybką ładowarkę albo podpinam pojemny powerbank!”', correct: true },
      { text: '„Wyrzucam cały telefon ze złością do wielkiego kosza na śmieci!”', correct: false },
      { text: '„Idę od razu do gabinetu pielęgniarki po duży plaster z opatrunkiem!”', correct: false }
    ]
  },
  {
    question: '„A jak zapytasz nowego kolegę z drużyny o jego nazwę użytkownika w grze?”',
    options: [
      { text: '„Hej, jaki masz nick w grze? Dodam cię do znajomych!”', correct: true },
      { text: '„Która to jest strona z zadaniem w podręczniku do historii?”', correct: false },
      { text: '„Poproszę dodatkowy łagodny sos czosnkowy do mojego kebaba!”', correct: false }
    ]
  },
  {
    question: '„Czasem do zaproszenia w grze potrzebny jest specjalny numer konta gracza. O co wtedy pytasz?”',
    options: [
      { text: '„Dasz mi swoje ID z profilu gracza?”', correct: true },
      { text: '„Dasz mi swoją legitymację do kasownika?”', correct: false },
      { text: '„Pożyczysz mi zieloną gumkę?”', correct: false }
    ]
  },
  {
    question: '„Co to znaczy, gdy podczas gry sieciowej nagle skacze ping i postać zacina się w miejscu?”',
    options: [
      { text: '„Mamy lagi przez słaby zasięg Wi-Fi!”', correct: true },
      { text: '„Dzwoni dzwonek na długą przerwę.”', correct: false },
      { text: '„Skończył się papier w drukarce.”', correct: false }
    ]
  },
  {
    question: '„O czym trzeba bezwzględnie pamiętać, zanim włączymy komputer lub konsolę po szkole?”',
    options: [
      { text: '„Najpierw starannie odrabiamy wszystkie zadania domowe i obowiązki!”', correct: true },
      { text: '„Chowamy wszystkie zeszyty głęboko pod łóżko i gramy aż do białego rana!”', correct: false },
      { text: '„Wyłączamy głośny budzik, żeby nie pójść rano do szkoły na lekcje!”', correct: false }
    ]
  },
  {
    question: '„Jak należy zachować się w sieci, gdy ktoś w czacie gry pisze niemiłe komentarze (hejt)?”',
    options: [
      { text: '„Nie odpowiadam agresją, zgłaszam lub blokuję hejtera i zachowuję spokój!”', correct: true },
      { text: '„Zaczynam natychmiast głośno wyzywać wszystkich graczy na serwerze w grze!”', correct: false },
      { text: '„Podaję mu od razu swoje prywatne tajne hasło do mojego cennego konta!”', correct: false }
    ]
  },
  {
    question: '„Czy w internecie wolno podawać obcym osobom swój adres domowy albo hasła?”',
    options: [
      { text: '„Nigdy! Swoje hasła i prywatne dane osobowe zawsze chronimy w tajemnicy!”', correct: true },
      { text: '„Tak, każdemu nieznajomemu, kto tylko obieca darmowe złote monety w grze!”', correct: false },
      { text: '„Wypisuję swoje prywatne hasło wielkimi literami na tablicy w naszej klasie!”', correct: false }
    ]
  },
  {
    question: '„Co warto robić co godzinę podczas korzystania z komputera, żeby zadbać o oczy i kręgosłup?”',
    options: [
      { text: '„Zrobić przerwę, odejść od ekranu, porozciągać się i spojrzeć w dal przez okno!”', correct: true },
      { text: '„Przybliżyć nos na odległość dwóch centymetrów od rozgrzanego monitora w pokoju!”', correct: false },
      { text: '„Zgasić natychmiast wszystkie lampy w pokoju i zamknąć oczy na resztę nocy!”', correct: false }
    ]
  },
  {
    question: '„Jakim słowem ze slangu określisz nową aktualizację gry, która jest po prostu rewelacyjna?”',
    options: [
      { text: '„Ta aktualizacja to czysty sztos i mega hit!”', correct: true },
      { text: '„Ten nowy dodatek to zupełny przypał i nuda!”', correct: false },
      { text: '„Kupuję w kasie bilet normalny na przejazd!”', correct: false }
    ]
  },
  {
    question: '„A gdy przez przypadek klikniesz zły przycisk i stracisz cały ekwipunek w finale turnieju, co powiesz?”',
    options: [
      { text: '„Ale przypał! Masakra, muszę uważać w kolejnej rundzie!”', correct: true },
      { text: '„Dzień dobry, kłaniam się uprzejmie pani pielęgniarce!”', correct: false },
      { text: '„Życzę wszystkim bardzo smacznego drugiego śniadania!”', correct: false }
    ]
  },
  {
    question: '„Do czego służą słuchawki z mikrofonem podczas wspólnej rozgrywki kooperacyjnej?”',
    options: [
      { text: '„Do komunikacji głosowej z drużyną i ostrzegania kolegów o akcji!”', correct: true },
      { text: '„Do mierzenia wysokiej temperatury ciała u chorego pacjenta!”', correct: false },
      { text: '„Do starannego rysowania okrągłych kółek w zeszycie do plastyki!”', correct: false }
    ]
  },
  {
    question: '„Jakie japońskie seriale animowane najchętniej oglądasz w wolnym czasie?”',
    options: [
      { text: '„Lubię oglądać anime, na przykład przygody Doraemona i Dragon Ball!”', correct: true },
      { text: '„Oglądam codziennie tylko nudną tabelę ułamków zwykłych w książce!”', correct: false },
      { text: '„Zupełnie nie mam pojęcia, czym w ogóle jest telewizor w pokoju!”', correct: false }
    ]
  },
  {
    question: '„Gdy kolega z drużyny dopiero uczy się grać i popełnia błędy, jak go potraktujesz?”',
    options: [
      { text: '„Wytłumaczę mu spokojnie sterowanie i pomogę zdobyć pierwsze punkty!”', correct: true },
      { text: '„Wyrzucę go natychmiast z naszej grupy i publicznie wyśmieję w czacie!”', correct: false },
      { text: '„Zabiorę mu z biurka nową ładowarkę do telefonu i ucieknę do szatni!”', correct: false }
    ]
  },
  {
    question: '„Szacun! Jesteś nie tylko świetnym graczem, ale też prawdziwym kumplem w sieci i w szkole!”',
    options: [
      { text: '„Dzięki! Do zobaczenia na wspólnym serwerze po lekcjach!”', correct: true },
      { text: '„Niestety zapomniałem już, jak włączyć komputer w pokoju!”', correct: false },
      { text: '„Idę natychmiast kupić ulgowy bilet na tramwaj w szatni!”', correct: false }
    ]
  }
];

// Dialog Piłkarza (Moduł 5 Plansza 2) — 16 pytań
export const PILKARZ_M5_DIALOG_STEPS = [
  {
    question: '„Siema! Kto według ciebie jest najlepszym piłkarzem na świecie?”',
    options: [
      { text: '„Cristiano Ronaldo i Leo Messi – to najlepsi mistrzowie futbolu!”', correct: true },
      { text: '„Nie interesuję się sportem, wolę po prostu spać na lekcji matmy!”', correct: false },
      { text: '„Zamawiam duży pikantny kebab z sosem czosnkowym w centrum miasta!”', correct: false }
    ]
  },
  {
    question: '„Dokładnie! Co najbardziej podziwiasz u nowoczesnego skrzydłowego?”',
    options: [
      { text: '„Gdy jest to niezwykle szybki zawodnik z precyzyjnym dryblingiem!”', correct: true },
      { text: '„Gdy ma w kieszeni szkolną legitymację i skasowany bilet w tramwaju!”', correct: false },
      { text: '„Gdy zapomniał ze sobą zeszytu z zadaniem domowym na lekcję języka!”', correct: false }
    ]
  },
  {
    question: '„Idziemy po południu pokopać na orlik? Poćwiczymy rzuty karne!”',
    options: [
      { text: '„Jasne, biorę korki i zagramy wspaniały mecz!”', correct: true },
      { text: '„Nie mam ochoty, wolę się nudzić w kącie.”', correct: false },
      { text: '„Boli mnie głowa i chcę spać.”', correct: false }
    ]
  },
  {
    question: '„Z jakiej odległości wykonuje się rzut karny na pełnowymiarowym boisku piłkarskim?”',
    options: [
      { text: '„Z jedenastu metrów (dlatego nazywamy go jedenastką)!”', correct: true },
      { text: '„Z jednego centymetra od samej linii bramkowej w sali!”', correct: false },
      { text: '„Z wysokiego dachu budynku szkoły podstawowej w mieście!”', correct: false }
    ]
  },
  {
    question: '„Co chroni piszczele piłkarza pod getrami przed bolesnym kopnięciem?”',
    options: [
      { text: '„Specjalne ochraniacze piłkarskie na golenie!”', correct: true },
      { text: '„Dwa zeszyty w kratkę włożone do skarpetek.”', correct: false },
      { text: '„Plastikowa linijka z piórnika.”', correct: false }
    ]
  },
  {
    question: '„Kiedy sędzia liniowy podnosi chorągiewkę i odgwizduje pozycję spaloną (ofsajd)?”',
    options: [
      { text: '„Gdy w momencie podania napastnik jest bliżej bramki rywala niż przedostatni zawodnik broniący!”', correct: true },
      { text: '„Gdy piłka nożna przypadkowo wpadnie do wysokiego kosza zawieszonego na sali gimnastycznej!”', correct: false },
      { text: '„Gdy zmęczony bramkarz napije się chłodnej wody ze swojego sportowego bidonu w czasie meczu!”', correct: false }
    ]
  },
  {
    question: '„Jak nazywa się zagranie, w którym jeden zawodnik zdobywa w jednym meczu aż trzy bramki?”',
    options: [
      { text: '„To słynny hat-trick!”', correct: true },
      { text: '„To rzut sędziowski.”', correct: false },
      { text: '„To przerwa śniadaniowa.”', correct: false }
    ]
  },
  {
    question: '„A co wznosi kapitan zwycięskiej drużyny po wygraniu wielkiego finału turnieju?”',
    options: [
      { text: '„Złoty puchar mistrzowski przy aplauzie kibiców!”', correct: true },
      { text: '„Metalowe wiadro z białą kredą do tablicy szkolnej!”', correct: false },
      { text: '„Zwykły tekturowy karton po starych butach sportowych!”', correct: false }
    ]
  },
  {
    question: '„Gdy piłka przekroczy linię boczną boiska, w jaki sposób wznawiamy grę?”',
    options: [
      { text: '„Wrzutem z autu oburącz zza głowy!”', correct: true },
      { text: '„Rzutem karnym z zamkniętymi oczami.”', correct: false },
      { text: '„Kopnięciem z dachu szatni.”', correct: false }
    ]
  },
  {
    question: '„A kiedy drużyna atakująca ma prawo wykonać rzut rożny (korner)?”',
    options: [
      { text: '„Gdy piłka wyjdzie za linię końcową boiska po ostatnim dotknięciu przez gracza drużyny broniącej!”', correct: true },
      { text: '„Zawsze i bez wyjątku w pierwszej sekundzie po rozpoczęciu całego spotkania piłkarskiego!”', correct: false },
      { text: '„Gdy sędzia główny zapomni zabrać ze sobą gwizdka na boisko przed rozpoczęciem meczu ligowego!”', correct: false }
    ]
  },
  {
    question: '„Co decyduje o zwycięstwie w meczu pucharowym, jeśli po dogrywce nadal utrzymuje się remis?”',
    options: [
      { text: '„Seria rzutów karnych!”', correct: true },
      { text: '„Gra w papier, kamień, nożyce w szatni.”', correct: false },
      { text: '„Sprawdzian z przyrody.”', correct: false }
    ]
  },
  {
    question: '„Kto nosi na ramieniu specjalną opaskę i reprezentuje drużynę w rozmowach z sędzią?”',
    options: [
      { text: '„Kapitan drużyny!”', correct: true },
      { text: '„Sędzia liniowy!”', correct: false },
      { text: '„Trener zespołu!”', correct: false }
    ]
  },
  {
    question: '„Dlaczego regularny trening podawania i przyjmowania piłki jest tak ważny dla każdego gracza?”',
    options: [
      { text: '„Pozwala dokładnie kontrolować piłkę i szybko budować akcje całej drużyny!”', correct: true },
      { text: '„Bo dzięki takiemu treningowi uczniowie wcale nie muszą chodzić do szkoły!”', correct: false },
      { text: '„Bo piłka podczas częstych i mocnych podań staje się zupełnie kwadratowa!”', correct: false }
    ]
  },
  {
    question: '„Jak reagujesz, gdy kibice biją brawo po twojej udanej akcji w obronie?”',
    options: [
      { text: '„Dziękuję gestem dłoni i skupiam się na dalszej grze!”', correct: true },
      { text: '„Schodzę natychmiast z boiska w samym środku ważnej akcji!”', correct: false },
      { text: '„Rzucam ze złości korkami w stronę bramki rywali na boisku!”', correct: false }
    ]
  },
  {
    question: '„Jaki najsłynniejszy polski napastnik strzelił dziesiątki bramek dla reprezentacji Polski?”',
    options: [
      { text: '„Robert Lewandowski — kapitan reprezentacji Polski!”', correct: true },
      { text: '„Jacek Soplica — tajemniczy bohater Pana Tadeusza!”', correct: false },
      { text: '„Hrabia Kirkor — postać z dramatu Juliusza Słowackiego!”', correct: false }
    ]
  },
  {
    question: '„Masz doskonałe wyczucie boiska i wiedzę prawdziwego mistrza! Widzimy się na murawie!”',
    options: [
      { text: '„Dzięki! Do zobaczenia na wielkim meczu!”', correct: true },
      { text: '„Niestety zgubiłem piłkę w bibliotece!”', correct: false },
      { text: '„Poproszę jeden ulgowy bilet autobusowy!”', correct: false }
    ]
  }
];

// Dialog Cwaniaka (Moduł 5 Plansza 2) — 16 pytań
export const CWANIAK_M5_DIALOG_STEPS = [
  {
    question: '„Yo! Widziałeś wczorajszy viralowy filmik, który ma już miliony lajków?”',
    options: [
      { text: '„Pewnie, ten filmik i te memy są po prostu mega sztos!”', correct: true },
      { text: '„Nie oglądam niczego, nie mam prądu w domu.”', correct: false },
      { text: '„Poproszę o powtórzenie polecenia, proszę pani.”', correct: false }
    ]
  },
  {
    question: '„A kojarzysz kultowe anime z niebieskim kotem z przyszłości – Doraemona?”',
    options: [
      { text: '„Jasne, uwielbiam Doraemona i jego niezwykłe gadżety!”', correct: true },
      { text: '„Nigdy nie słyszałem o żadnym anime ani filmikach.”', correct: false },
      { text: '„Zapomniałem podręcznika do plastyki.”', correct: false }
    ]
  },
  {
    question: '„Trzeba być na bieżąco z trendami i mieć swój własny styl, co nie młody?”',
    options: [
      { text: '„Zgadza się! Wiem kim jestem, mam swoje pasje i cieszę się życiem!”', correct: true },
      { text: '„Wszystko wokół jest dla mnie strasznie nudne, beznadziejne i słabe!”', correct: false },
      { text: '„Jest mi strasznie zimno, nie lubię sportu i chcę jak najszybciej do domu!”', correct: false }
    ]
  },
  {
    question: '„A wiesz, jak odróżnić w internecie prawdziwą informację (fakt) od zmyślonej plotki (fake newsa)?”',
    options: [
      { text: '„Sprawdzam informację w kilku rzetelnych źródłach i nie wierzę ślepo krzykliwym nagłówkom!”', correct: true },
      { text: '„Uważam, że każdy przypadkowy obrazek znaleziony w sieci to zawsze stuprocentowa prawda!”', correct: false },
      { text: '„Rozsyłam natychmiast wszystkie niesprawdzone plotki i sensacje wszystkim moim znajomym!”', correct: false }
    ]
  },
  {
    question: '„Co znaczy słowo mem w internetowej kulturze młodzieżowej?”',
    options: [
      { text: '„To zabawny obrazek lub krótki filmik z dowcipnym podpisem komentującym codzienność!”', correct: true },
      { text: '„To oficjalne urzędowe pismo z pieczątką przesłane prosto od dyrektora naszej szkoły!”', correct: false },
      { text: '„To jednorazowy bilet papierowy uprawniający do przejazdu miejskim autobusem w dzień!”', correct: false }
    ]
  },
  {
    question: '„Gdy ktoś pod twoim zdjęciem zostawi miły komentarz i serduszko, to jak to nazywamy?”',
    options: [
      { text: '„To lajki i pozytywne wsparcie od znajomych!”', correct: true },
      { text: '„To surowy mandat karny od kontrolera biletów!”', correct: false },
      { text: '„To niespodziewana kartkówka z trudnej geometrii!”', correct: false }
    ]
  },
  {
    question: '„A co zrobisz, jeśli w sieci zobaczysz, że ktoś bez powodu obraża twojego kolegę z klasy?”',
    options: [
      { text: '„Staję w obronie kolegi, wspieram go dobrym słowem i zgłaszam obraźliwy wpis!”', correct: true },
      { text: '„Dołączam natychmiast do publicznego wyśmiewania kolegi dla tanich lajków w sieci!”', correct: false },
      { text: '„Udaję zupełnie, że go nie znam i kasuję go natychmiast ze wszystkich moich kontaktów!”', correct: false }
    ]
  },
  {
    question: '„Jak nazywamy wygodne, modne buty sportowe, które noszą nastolatkowie na co dzień?”',
    options: [
      { text: '„To stylowe sneakersy!”', correct: true },
      { text: '„To kalosze wędkarskie.”', correct: false },
      { text: '„To łyżwy figurowe.”', correct: false }
    ]
  },
  {
    question: '„Idziemy po szkole na miasto przekąsić coś ciepłego. O co zapyta nas sprzedawca w budce z kebabem?”',
    options: [
      { text: '„Zapyta: Jaki sos (łagodny, mieszany czy ostry) oraz czy na miejscu, czy na wynos!”', correct: true },
      { text: '„Zapyta o dokładną datę chrztu Polski oraz o imiona wszystkich polskich królów!”', correct: false },
      { text: '„Zapyta o skomplikowany wynik pisemnego dzielenia ułamków zwykłych przez dziesiętne!”', correct: false }
    ]
  },
  {
    question: '„A kiedy kupujesz w Żabce bułkę i wodę, jak kulturalnie zwrócisz się do kasjerki?”',
    options: [
      { text: '„Dzień dobry! Poproszę świeżą bułkę i butelkę wody niegazowanej.”', correct: true },
      { text: '„Dawaj szybko tę bułkę z półki i nie zadawaj mi żadnych pytań!”', correct: false },
      { text: '„Nie mam przy sobie zeszytu w wąską linię do języka polskiego!”', correct: false }
    ]
  },
  {
    question: '„Wsiadamy do tramwaju! Co musisz zrobić z papierowym biletem zaraz po wejściu do wagonu?”',
    options: [
      { text: '„Natychmiast skasować bilet w kasowniku!”', correct: true },
      { text: '„Schować nieskasowany bilet do buta.”', correct: false },
      { text: '„Zrobić z biletu papierowy samolocik.”', correct: false }
    ]
  },
  {
    question: '„A jaki dokument daje uczniom prawo do zakupu tańszego biletu ulgowego (50%)?”',
    options: [
      { text: '„Ważna podstemplowana legitymacja szkolna!”', correct: true },
      { text: '„Karta biblioteczna z podstawówki.”', correct: false },
      { text: '„Paragon ze sklepiku szkolnego.”', correct: false }
    ]
  },
  {
    question: '„Gdy w autobusie wsiada starsza osoba lub kobieta w ciąży, jak zachowa się chłopak z klasą?”',
    options: [
      { text: '„Wstaje i uprzejmie ustępuje miejsca siedzącego!”', correct: true },
      { text: '„Kładzie plecak na sąsiednim fotelu, żeby nikt nie usiadł.”', correct: false },
      { text: '„Udaje, że śpi z telefonem w ręku.”', correct: false }
    ]
  },
  {
    question: '„Która forma wypowiedzi pozwala nam przekonać innych do naszego zdania za pomocą tezy i argumentów?”',
    options: [
      { text: '„Rozprawka!”', correct: true },
      { text: '„Ogłoszenie!”', correct: false },
      { text: '„Zaproszenie!”', correct: false }
    ]
  },
  {
    question: '„A jak w zdaniu: Zdanie „Mecz zakończył się wynikiem 3:2” to fakt czy opinia?”',
    options: [
      { text: '„To stuprocentowy fakt, bo wynik można łatwo sprawdzić i udowodnić!”', correct: true },
      { text: '„To subiektywna i stronnicza opinia pełna emocjonalnych przymiotników!”', correct: false },
      { text: '„To podchwytliwe pytanie retoryczne niemające żadnej prostej odpowiedzi!”', correct: false }
    ]
  },
  {
    question: '„No proszę, nie dość że znasz miejski slang, to jeszcze masz głowę na karku! Szacunek, młody!”',
    options: [
      { text: '„Dzięki! Znam zarówno język ulicy, jak i zasady z lekcji polskiego!”', correct: true },
      { text: '„Niestety zapomniałem już zupełnie jak się nazywam i gdzie mieszkam!”', correct: false },
      { text: '„Idę zaraz płakać ze smutku na przystanek autobusowy przed budynkiem!”', correct: false }
    ]
  }
];
