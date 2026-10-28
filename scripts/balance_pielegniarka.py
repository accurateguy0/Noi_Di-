import sys, os
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.build_full_rebalance import rebalance_file

pieleg_data = {
    # 1 L57 (C=70)
    '„Tak, mam legitymację w plecaku, a numer telefonu pamiętam na pamięć.”': {
        'wrongs': [
            '„Zgubiłem wczoraj swój nowy plecak w miejskim autobusie po drodze.”',
            '„Nie mam przy sobie żadnych ważnych dokumentów ani numeru telefonu.”',
            '„Pamiętam tylko prywatny numer do mojego najlepszego kolegi z ławki.”'
        ]
    },
    # 2 L75 (C=63)
    '„Tak, dam radę iść powoli. Dziękuję bardzo za troskliwą pomoc!”': {
        'wrongs': [
            '„Nie pójdę do domu, zostaję w gabinecie pielęgniarki do jutra!”',
            '„Zjadę natychmiast na brzuchu po metalowej poręczy na sam dół!”',
            '„W ogóle nie chcę wracać z mamą do domu po tych trudnych lekcjach!”'
        ]
    },
    # 3 L84 (C=69)
    '„Bo obniża stężenie zarazków w powietrzu i ułatwia dotlenienie płuc!”': {
        'wrongs': [
            '„Żeby w pokoju było jak najzimniej i żeby zupełnie zamarzły ściany!”',
            '„Częste wietrzenie pokoju nie ma żadnego znaczenia dla zdrowia ciała!”',
            '„Żeby wpuścić do ciepłego pokoju dzikie gołębie siedzące na dachu!”'
        ]
    },
    # 4 L93 (C=75)
    '„Stan podgorączkowy to 37.0–38.0°C, a gorączka zaczyna się powyżej 38.0°C.”': {
        'wrongs': [
            '„Gorączka to niska temperatura ciała człowieka wynosząca poniżej 35 stopni.”',
            '„Pomiędzy stanem podgorączkowym a gorączką nie ma w ogóle żadnej różnicy.”',
            '„Stan podgorączkowy u człowieka występuje wyłącznie u malutkich niemowląt.”'
        ]
    },
    # 5 L102 (C=73)
    '„Płyny i elektrolity, pijąc regularnie wodę, herbatę lub napary ziołowe.”': {
        'wrongs': [
            '„Tylko bardzo słodkie batony czekoladowe i gazowane napoje energetyczne.”',
            '„Mocno słone przekąski, prażony popcorn i tłuste frytki z restauracji.”',
            '„Zupełnie nic nie trzeba pić, woda bardzo szkodzi przy wysokiej gorączce.”'
        ]
    },
    # 6 L111 (C=62)
    '„Klej ryżowy, gotowana marchewka, sucharki i pieczone jabłko.”': {
        'wrongs': [
            '„Bardzo pikantny barani kebab z ostrym sosem i tłustymi frytkami.”',
            '„Gorąca włoska pizza z potrójną warstwą sera i tłustego salami.”',
            '„Czekoladowe słodkie batony, cukierki i ostre chipsy paprykowe.”'
        ]
    },
    # 7 L120 (C=91)
    '„Ponieważ niewłaściwa dawka lub zły lek mogą wywołać ciężkie zatrucie i uszkodzić żołądek!”': {
        'wrongs': [
            '„Bo wszystkie leki w aptece są za tanie, żeby dzieci mogły je kupować i brać samemu!”',
            '„Bo kolorowe tabletki można połykać wyłącznie w obecności dyrektora szkoły w gabinecie!”',
            '„Można bez obaw brać dowolne leki całymi garściami bez pytania kogokolwiek o zgodę!”'
        ]
    },
    # 8 L129 (C=86)
    '„W pozycji leżącej z lekko uniesioną głową i zapewnieniem dostępu świeżego powietrza.”': {
        'wrongs': [
            '„Zawieszony głową w dół na wysokiej drabince gimnastycznej w sali sportowej!”',
            '„Położony twarzą prosto do podłogi pod ciężkim niebieskim materacem na sali!”',
            '„Kazać mu natychmiast robić szybkie przysiady, pompki i energiczne pajacyki!”'
        ]
    },
    # 9 L138 (C=77)
    '„Aby czujnik podczerwieni precyzyjnie zmierzył promieniowanie cieplne skóry.”': {
        'wrongs': [
            '„Żeby delikatny promień lasera przypadkowo nie podpalił włosów na głowie.”',
            '„Odległość nie ma znaczenia, temperaturę mierzy się z drugiego końca sali.”',
            '„Żeby bezdotykowy termometr nie rozładował baterii w telefonie pielęgniarki.”'
        ]
    },
    # 10 L156 (C=96)
    '„Mimowolne skurcze mięśni mające na celu wytworzenie ciepła przez organizm walczący z infekcją.”': {
        'wrongs': [
            '„To jednoznaczny znak, że chory pacjent panicznie boi się pani pielęgniarki w gabinecie.”',
            '„To spontaniczny przejaw tańca nowoczesnego wykonywanego przez pacjenta na kozetce.”',
            '„To poważna usterka techniczna elektronicznego termometru bezdotykowego w przychodni.”'
        ]
    },
    # 11 L165 (C=95)
    '„W razie utraty przytomności, drgawek, duszności lub nagłego silnego bólu w klatce piersiowej.”': {
        'wrongs': [
            '„Zawsze wtedy, gdy uczeń zapomni w domu zeszytu z zadaniem domowym na lekcję polskiego.”',
            '„Tylko w sytuacji, gdy na korytarzu szkolnym zadzwoni głośny dzwonek na przerwę obiadową.”',
            '„Gdy chory uczeń ma ochotę przejechać się na sygnale dużym żółtym ambulansem po mieście.”'
        ]
    },
    # 12 L183 (C=74)
    '«O ciepłym ubiorze, piciu wody i jedzeniu owoców bogatych w witaminę C!»': {
        'wrongs': [
            '«O jedzeniu zimnych lodów na mrozie i chodzeniu w rozpiętej kurtce w zimie!»',
            '«O całkowitym unikaniu mycia rąk i niejedzeniu żadnych ciepłych posiłków!»',
            '«O siedzeniu w przemoczonych skarpetkach przez cały dzień w szkolnej klasie!»'
        ]
    },
    # 13 L199 (C=65)
    '„Dzień dobry! Potknąłem się na schodach i mocno stłukłem kolano.”': {
        'wrongs': [
            '„Dzień dobry! Zgubiłem trampki i nie chcę iść na lekcję przyrody.”',
            '„Dzień dobry! Przyszedłem tylko zapytać o wynik meczu w telewizji.”',
            '„Dzień dobry! Chcę odpocząć na leżance, bo nie lubię matematyki.”'
        ]
    },
    # 14 L208 (C=70)
    '„Jest lekkie otarcie naskórka i mały siniak, ale krew mocno nie leci.”': {
        'wrongs': [
            '„Kość wystaje przez spodnie i cała noga natychmiast mi odpada z bólu.”',
            '„Nic mi w ogóle nie jest, tylko chciałem zobaczyć gabinet szkolny.”',
            '„Złamałem obie ręce i nie mogę pisać żadnego sprawdzianu z polskiego.”'
        ]
    },
    # 15 L217 (C=60)
    '„Ten płyn nie szczypie, delikatnie oczyści ranę z bakterii.”': {
        'wrongs': [
            '„Będzie piekło tak strasznie, że zemdlejesz na kozetce.”',
            '„Płyn rozpuści całą skórę i zostawi wielką czerwoną dziurę.”',
            '„Rana po przemyciu natychmiast zaświeci w ciemności na zielono.”'
        ]
    },
    # 16 L226 (C=69)
    '„Zimno obkurcza naczynia krwionośne, zmniejsza obrzęk i łagodzi ból.”': {
        'wrongs': [
            '„Zimny lód zamraża całe kolano w twardy sopel lodu na długie godziny.”',
            '„Okład chłodzący służy wyłącznie do zabawy w gabinecie lekarskim.”',
            '„Zimno sprawia, że krew zaczyna płynąć dziesięć razy szybciej w nodze.”'
        ]
    },
    # 17 L235 (C=69)
    '„Stabilnie podtrzymywać staw, ale nie tamować dopływu krwi do stopy.”': {
        'wrongs': [
            '„Ścisnąć nogę tak mocno, żeby zsiniała i natychmiast zdrętwiała z bólu.”',
            '„Opatrunek powinien sam spaść z kolana przy pierwszym kroku na schodach.”',
            '„Bandaż służy tylko do dekoracji nogi i nie powinien dotykać skóry.”'
        ]
    },
    # 18 L244 (C=63)
    '„Tak, mogę zgiąć kolano, boli tylko lekko przy mocnym nacisku.”': {
        'wrongs': [
            '„Nie mogę w ogóle ruszyć żadnym palcem u obu rąk i obu nóg z bólu.”',
            '„Kolano kręci się dookoła bez żadnego oporu jak wiatrak na wietrze.”',
            '„W ogóle nie czuję żadnego dotyku, moja noga zamieniła się w drewno.”'
        ]
    },
    # 19 L253 (C=67)
    '„Przekażę zwolnienie i będę obserwować lekcję z ławki rezerwowych.”': {
        'wrongs': [
            '„Pobiegnę na boisko grać w piłkę nożną pomimo wielkiego bólu kolana.”',
            '„Schowam się w szatni pod prysznicem i przeczekam całą lekcję WF-u.”',
            '„Wyrzucę zwolnienie lekarskie do kosza i ucieknę ze szkoły do domu.”'
        ]
    },
    # 20 L262 (C=61)
    '„Kończę po piątej lekcji o 13:30 i tata odbierze mnie autem.”': {
        'wrongs': [
            '„Zostanę w szkole do nocy i pójdę spać na korytarzu pod drzwiami.”',
            '„Wracam sam na piechotę przez całe miasto z ciężkim plecakiem.”',
            '„Nie wiem o której kończę ani kto po mnie przyjedzie pod szkołę.”'
        ]
    },
    # 21 L271 (C=98)
    '„Rana cięta ma równe brzegi i głębiej przecina tkanki, a otarcie dotyczy tylko powierzchni skóry.”': {
        'wrongs': [
            '„Rana cięta to zadrapanie paznokciem, a otarcie to całkowite złamanie kości z przemieszczeniem.”',
            '„Między raną ciętą a otarciem naskórka nie ma zupełnie żadnej różnicy w medycynie ratunkowej.”',
            '„Otarcie naskórka zawsze wymaga natychmiastowej operacji chirurgicznej w szpitalu miejskim.”'
        ]
    },
    # 22 L280 (C=102)
    '„Ponieważ uszkadzają one zdrowe komórki i opóźniają gojenie, lepsze są nowoczesne płyny z oktenidyną.”': {
        'wrongs': [
            '„Bo woda utleniona i spirytus są zbyt tanie, a w gabinecie wolno używać tylko drogich specyfików.”',
            '„Bo woda utleniona zmienia trwale kolor skóry wokół rany na jaskrawo fioletowy i zielony kolor.”',
            '„Spirytus salicylowy natychmiast usypia pacjenta, co uniemożliwia dalsze badanie w przychodni.”'
        ]
    },
    # 23 L289 (C=79)
    '„Wylew krwi z drobnych uszkodzonych naczyń włosowatych do otaczających tkanek.”': {
        'wrongs': [
            '„Zabrudzenie skóry czarnym atramentem z nieszczelnego pióra w piórniku.”',
            '„Dojrzewanie owoców borówki czarnej pod powierzchnią delikatnego naskórka.”',
            '„Całkowity brak przepływu krwi w nodze spowodowany uciskiem twardego buta.”'
        ]
    },
    # 24 L298 (C=73)
    '„Rozpad hemoglobiny i stopniowe wchłanianie krwiaka przez układ chłonny.”': {
        'wrongs': [
            '„Działanie promieni słonecznych wpadających przez okno do sali lekcyjnej.”',
            '„Reakcja chemiczna na zjedzoną na przerwie kanapkę z żółtym serem i szynką.”',
            '„Złuszczanie się brudnego naskórka pod wpływem ciepłej wody pod prysznicem.”'
        ]
    },
    # 25 L307 (C=73)
    '„Bolesne skurcze mięśni, zwłaszcza mięśni żuchwy (szczękościsk) i karku.”': {
        'wrongs': [
            '„Nagła i niekontrolowana ochota na jedzenie słodkich lodów waniliowych.”',
            '„Wypadanie wszystkich zębów mlecznych w ciągu zaledwie jednej minuty czasu.”',
            '„Zmiana koloru oczu na jaskrawo czerwony przy patrzeniu na tablicę szkolną.”'
        ]
    },
    # 26 L316 (C=73)
    '„Nie, wymaga dawek przypominających co 10 lat, by utrzymać przeciwciała.”': {
        'wrongs': [
            '„Tak, jedna szczepionka z dzieciństwa chroni człowieka przez całe 150 lat.”',
            '„Szczepienie przeciw tężcowi trzeba powtarzać codziennie rano przed szkołą.”',
            '„Przeciw tężcowi w ogóle nie istnieją żadne skuteczne szczepionki ochronne.”'
        ]
    },
    # 27 L325 (C=83)
    '„Nie wyciągać go samodzielnie, zabezpieczyć opatrunkiem dookoła i wezwać chirurga!”': {
        'wrongs': [
            '„Wyrwać ciało obce energicznym szarpnięciem za pomocą starych kombinerek!”',
            '„Wepchnąć wbity przedmiot jeszcze głębiej do rany, aby przestał wystawać!”',
            '„Zalać ranę z wystającym szkłem wrzącą wodą i posypać obficie kuchenną solą!”'
        ]
    },
    # 28 L334 (C=73)
    '„Aby nie wprowadzić do gojącej się rany groźnych bakterii ropotwórczych.”': {
        'wrongs': [
            '„Żeby bandaż i kompres nie pobrudziły się od dotyku ciepłych palców dłoni.”',
            '„Dotykanie jałowej gazy grozi nagłym porażeniem prądem w gabinecie szkolnym.”',
            '„Jałowa gaza dotknięta palcem natychmiast zamienia się w zwykły popiół w dłoni.”'
        ]
    },
    # 29 L343 (C=74)
    '„Narastające zaczerwienienie, obrzęk, pulsowanie, wyciek ropy i gorączka.”': {
        'wrongs': [
            '„Przyjemne chłodzenie rany, zanik siniaka i całkowity brak jakiegokolwiek bólu.”',
            '„Pojawienie się na skórze wokół rany pięknych, symetrycznych piegów i dołków.”',
            '„Szybki wzrost mięśni w okolicy skaleczenia bez wykonywania żadnych ćwiczeń.”'
        ]
    },
    # 30 L352 (C=87)
    '„Do podwieszenia i unieruchomienia złamanej lub zwichniętej kończyny górnej (temblak).”': {
        'wrongs': [
            '„Do wycierania potu z czoła zawodnika po wyczerpującym meczu piłkarskim na hali.”',
            '„Do przewiązywania oczu podczas wesołej zabawy w ciuciubabkę na szkolnej przerwie.”',
            '„Do pakowania kanapek i owoców na drugie śniadanie zamiast plastikowej torebki.”'
        ]
    },
    # 31 L361 (C=65)
    '„Dziękuję bardzo za profesjonalny opatrunek i miłe słowa otuchy!”': {
        'wrongs': [
            '„Zrywam natychmiast cały ten plaster i wracam biegać po korytarzu!”',
            '„Nie lubię pani gabinetu i wolę iść do dyrektora na skargę do szkoły!”',
            '„Mogła pani dać mi lizaka zamiast tego nudnego białego bandaża na nodze!”'
        ]
    },
    # 32 L370 (C=71)
    '„Obiecuję uważać pod nogi i stosować się do pani zaleceń. Do widzenia!”': {
        'wrongs': [
            '„Zaraz zjadę na tornistrze ze schodów na parter, żeby było weselej!”',
            '„Wyrzucę to zwolnienie do kosza na śmieci i pobiegnę na lekcję WF-u!”',
            '„Do widzenia, idę sprawdzić czy automat z batonami w holu już działa!”'
        ]
    },
    # 33 L386 (C=73)
    '„Dzień dobry! Tak, jestem przygotowany i chętnie wezmę udział w badaniu.”': {
        'wrongs': [
            '„Dzień dobry! Boję się pani i uciekam z krzykiem do szatni pod schody.”',
            '„Nie zgadzam się na żadne badanie, przyszedłem tylko po szklankę wody.”',
            '„Zapomniałem jak mam na imię i w której klasie mam dzisiaj swoje lekcje.”'
        ]
    },
    # 34 L395 (C=71)
    '„Mierzę 158 centymetrów i ważę 46 kilogramów, rosnę bardzo prawidłowo.”': {
        'wrongs': [
            '„Mierzę trzy metry i ważę dziesięć gramów, rosnę jak młody dąb w lesie.”',
            '„Nigdy się nie mierzyłem, bo w domu nie mamy żadnej linijki ani miarki.”',
            '„Ważę dokładnie tyle samo co szkolny autobus pełen dzieci i plecaków.”'
        ]
    },
    # 35 L413 (C=67)
    '„Symetrię pleców, układ łopatek i prawidłowe krzywizny kręgosłupa.”': {
        'wrongs': [
            '„Czy uczeń ma na plecach ukryty tatuaż zrobiony długopisem w ławce.”',
            '„Czystość szkolnej koszulki i jakość materiału, z którego ją uszyto.”',
            '„Czy łopatki ruszają się jak skrzydła u ptaka podczas szybkiego lotu.”'
        ]
    },
    # 36 L422 (C=75)
    '„Zawsze na obu ramionach, dopasowany blisko pleców, nigdy na jednym pasku!”': {
        'wrongs': [
            '„Zawsze przewieszony na jednym ramieniu z luźno wiszącymi szelkami w tyle!”',
            '„Pchając tornister stopą po podłodze szkolnego korytarza na lekcję matmy!”',
            '„Trzymając ciężki plecak w zębach podczas schodzenia po wąskich schodach!”'
        ]
    },
    # 37 L431 (C=64)
    '„Około 115 na 75 milimetrów słupa rtęci – serce bije jak dzwon!”': {
        'wrongs': [
            '„Tysiąc na pięćset atmosfer – krew płynie jak woda z hydrantu na ulicy!”',
            '„Zero na zero – ciśnienie krwi w ogóle nie istnieje u młodych uczniów!”',
            '„Około pięćdziesiąt stopni Celsjusza – serce parzy jak gorący czajnik!”'
        ]
    },
    # 38 L440 (C=70)
    '„Co najmniej dwa razy dziennie przez minimum 2–3 minuty po posiłkach!”': {
        'wrongs': [
            '„Raz w roku przed świętami przez pięć sekund za pomocą starej szmatki!”',
            '„Zęby myje się wyłącznie wtedy, gdy bolą po zjedzeniu twardego cukierka!”',
            '„W ogóle nie trzeba myć zębów, guma do żucia załatwia całą sprawę w mig!”'
        ]
    },
    # 39 L449 (C=76)
    '„Bardzo dziękuję za badanie i cenne wskazówki dotyczące dbania o kręgosłup!”': {
        'wrongs': [
            '„Nie zamierzam słuchać żadnych rad i będę garbić się przy biurku całą noc!”',
            '„Zapomniałem już wszystko co pani mówiła i biegnę kupić chipsy w sklepiku!”',
            '„Do widzenia, idę powiedzieć kolegom, że to badanie było zupełnie nudne!”'
        ]
    },
    # 40 L458 (C=99)
    '„Wykres statystyczny pozwalający ocenić rozwój fizyczny na tle rówieśników tej samej płci i wieku.”': {
        'wrongs': [
            '„Plan lekcji pokazujący godziny rozpoczęcia przerw obiadowych i zajęć wychowania fizycznego.”',
            '„Rysunek przedstawiający budowę mikroskopu optycznego używanego na lekcjach trudnej biologii.”',
            '„Specjalny cennik leków i witamin dostępnych bez recepty w pobliskiej aptece całodobowej w mieście.”'
        ]
    },
    # 41 L467 (C=100)
    '„Boczne skrzywienie kręgosłupa – zapobiega się mu pływaniem, ruchem i ergonomiczną pozycją w ławce.”': {
        'wrongs': [
            '„Złamanie kości udowej podczas skoku w dal – zapobiega się mu leżeniem pod ciepłą kołdrą w łóżku.”',
            '„Brak apetytu na szkolny obiad – zapobiega się mu jedzeniem słodkich batoników przed każdą lekcją.”',
            '„Wada wymowy polegająca na seplenieniu – zapobiega się jej głośnym czytaniem lektur szkolnych na głos.”'
        ]
    },
    # 42 L476 (C=88)
    '„Powoduje przeciążenie krążków międzykręgowych, bolesne napięcia mięśni i wady postawy.”': {
        'wrongs': [
            '„Sprawia, że tornister staje się lżejszy o połowę dzięki działaniu siły grawitacji Ziemi.”',
            '„Wzmacnia mięśnie brzucha i ramion, zastępując codzienny trening na sali gimnastycznej.”',
            '„Nie ma żadnego wpływu na zdrowie, to tylko kwestia modnego wyglądu na korytarzu szkolnym.”'
        ]
    },
    # 43 L485 (C=87)
    '„Obraz powstaje przed siatkówką, przez co przedmioty odległe są zamglone i niewyraźne.”': {
        'wrongs': [
            '„Oko widzi w nocy jak noktowizor wojskowy, ale w dzień razi je każde słoneczne światło.”',
            '„Litery w zeszycie zamieniają się miejscami i uciekają z białej kartki podczas czytania.”',
            '„Wszystkie kolory tęczy zlewają się w jeden szary odcień podczas patrzenia na zieloną trawę.”'
        ]
    },
    # 44 L494 (C=70)
    '„Szkła rozpraszające (wklęsłe, o ujemnej mocy dioptrii, tzw. minusy).”': {
        'wrongs': [
            '„Grube szkła powiększające (wypukłe, o dodatniej mocy, tzw. plusy).”',
            '„Zwykłe ciemne okulary przeciwsłoneczne z filtrem UV kupione na plaży.”',
            '„Płaskie przezroczyste szybki okienne bez żadnej mocy optycznej dioptrii.”'
        ]
    },
    # 45 L503 (C=76)
    '„Szczepienie i diagnostyka chroniące przed niebezpieczną gruźlicą prątkową.”': {
        'wrongs': [
            '„Badanie sprawdzające czy uczeń potrafi szybko biegać na krótkim dystansie.”',
            '„Test sprawdzający pamięć do wierszy i dat z historii na lekcji w szkole.”',
            '„Specjalny masaż pleców i kręgosłupa wykonywany drewnianym wałkiem w gabinecie.”'
        ]
    },
    # 46 L512 (C=85)
    '„Oceną wydolności krążeniowej na podstawie tętna przed i po wykonaniu 30 przysiadów.”': {
        'wrongs': [
            '„Pomiarem długości skoku w dal z miejsca na piaszczystej skoczni przy boisku szkolnym.”',
            '„Sprawdzaniem ile kilogramów uczeń potrafi podnieść oburącz nad głowę na pomoście ciężarów.”',
            '„Liczeniem ile słów na minutę uczeń potrafi przeczytać z podręcznika bez zająknięcia.”'
        ]
    },
    # 47 L521 (C=87)
    '„Bo wczesna próchnica rozwija się bezboleśnie w szkliwie i można ją wyleczyć bez bólu!”': {
        'wrongs': [
            '„Żeby stomatolog mógł pochwalić się nowym fotelem dentystycznym i kolorowymi plombami.”',
            '„Bo zęby mleczne i stałe trzeba bezwzględnie wyrywać co roku, by zrobić miejsce na nowe.”',
            '„Wizyty kontrolne u dentysty są całkowicie zbędne, jeśli ząb jeszcze nie boli przy gryzieniu.”'
        ]
    },
    # 48 L530 (C=85)
    '„Masa ciała w kilogramach podzielona przez wzrost w metrach podniesiony do kwadratu.”': {
        'wrongs': [
            '„Liczba zjedzonych kanapek na śniadanie pomnożona przez liczbę wypitych szklanek herbaty.”',
            '„Wzrost w centymetrach odjąć sto dwadzieścia i podzielić przez numer buta ucznia w klasie.”',
            '„Średnia ocen ze wszystkich przedmiotów w dzienniku pomnożona przez wagę szkolnego plecaka.”'
        ]
    },
    # 49 L539 (C=120)
    '„Odpowiednia wysokość krzesła, stopy oparte na podłodze, oświetlenie z lewej strony (dla praworęcznych) i proste plecy.”': {
        'wrongs': [
            '„Leżenie na brzuchu na dywanie z podpartym podbródkiem w ciemnym pokoju z migającym telewizorem w tle przed biurkiem.”',
            '„Siedzenie po turecku na miękkiej pufie z laptopem trzymanym na kolanach i głową pochyloną nisko nad klawiaturą biurową.”',
            '„Wysokość biurka nie ma żadnego znaczenia, najważniejsze by krzesło kręciło się dookoła z dużą prędkością na kółkach.”'
        ]
    },
    # 50 L548 (C=79)
    '„Dziękuję za poświęcony czas, życzliwość i profesjonalne badanie! Do widzenia!”': {
        'wrongs': [
            '„Nareszcie koniec tego nudnego badania, uciekam stąd natychmiast na korytarz!”',
            '„Mogła pani podać mi lepsze wyniki, bo koledzy z klasy będą się ze mnie śmiać!”',
            '„Do widzenia, idę sprawdzić czy w szatni nikt nie pomylił moich butów na WF!”'
        ]
    },
    # 51 L557 (C=74)
    '„Będę pamiętać! Życzę pani spokojnego i miłego dnia w szkolnym gabinecie!”': {
        'wrongs': [
            '„Zapomnę o wszystkim zaraz po przekroczeniu progu tego szkolnego gabinetu!”',
            '„Mam nadzieję, że więcej już nigdy nie będę musiał tutaj do pani przychodzić!”',
            '„Idę powiedzieć panu od WF-u, że kazała mi pani siedzieć na ławce do końca dnia!”'
        ]
    }
}

rebalance_file('src/data/characters/pielegniarka.js', pieleg_data)
print("pielegniarka.js balanced!")
