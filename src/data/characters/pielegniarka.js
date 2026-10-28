// Pielęgniarka - Postać Adaptująca (Kobiecy lektor)
// Gabinet szkolny, wywiad medyczny, objawy, leczenie i pierwsza pomoc (3 bogate scenariusze po 20 kroków!).

export const PIELEGNIARKA_SETS = [
  {
    titlePl: 'Pielęgniarka: Ból brzucha i gorączka',
    subtitlePl: 'Wywiad medyczny w gabinecie',
    descriptionPl: 'Podaj objawy i co boli — pani pielęgniarka pomoże poczuć się lepiej!',
    steps: [
      {
        question: "„Dzień dobry! Usiądź proszę spokojnie na fotelu. Z czym dzisiaj do mnie przychodzisz?”",
        options: [
          { text: "„Dzień dobry! Od rana boli mnie brzuch i słabo się czuję.”", correct: true },
          { text: "„Dzień dobry! Przychodzę pożyczyć linijkę i ołówek na plastykę.”", correct: false },
          { text: "„Dzień dobry! Szukam szatni i sali gimnastycznej na WF.”", correct: false },
          { text: "„Dzień dobry! Chcę zgłosić, że dzwonek zadzwonił na lekcję.”", correct: false }
        ]
      },
      {
        question: "„Rozumiem. Zmierzę ci temperaturę termometrem bezdotykowym. Co czujesz – jest ci zimno czy gorąco?”",
        options: [
          { text: "„Jest mi na zmianę gorąco i zimno, chyba mam lekką gorączkę.”", correct: true },
          { text: "„Jest mi bardzo wesoło i chcę biegać po korytarzu.”", correct: false },
          { text: "„Boli mnie ząb i noga, ale nie mam gorączki.”", correct: false },
          { text: "„Temperatura na dworze wynosi dzisiaj dwadzieścia stopni.”", correct: false }
        ]
      },
      {
        question: "„Termometr wskazuje 37.8°C. Wypij powoli tę szklankę świeżej wody. Zadzwonię po twoją mamę, dobrze?”",
        options: [
          { text: "„Tak, dziękuję bardzo. Odpocznę chwilę na kozetce.”", correct: true },
          { text: "„Nie, wracam od razu do klasy pisać trudny sprawdzian.”", correct: false },
          { text: "„Poproszę zimną colę z automatu zamiast wody.”", correct: false },
          { text: "„Nie pamiętam numeru telefonu do domu ani adresu.”", correct: false }
        ]
      },
      {
        question: "„Twoja mama już jedzie cię odebrać. Czy potrzebujesz chłodnego okładu na czoło, żeby ból głowy zelżał?”",
        options: [
          { text: "„Tak, poproszę o chłodny okład na czoło, to mi bardzo pomoże!”", correct: true },
          { text: "„Poproszę plaster na palec zamiast okładu na głowę.”", correct: false },
          { text: "„Głowa mnie nie boli, tylko bardzo piecze gardło.”", correct: false },
          { text: "„Ten okład jest za zimny, wolę gorącą poduszkę.”", correct: false }
        ]
      },
      {
        question: "„Czy jadłeś dzisiaj rano pożywne śniadanie przed wyjściem do szkoły?”",
        options: [
          { text: "„Zjadłem tylko małego banana, chyba miałem za mało energii.”", correct: true },
          { text: "„Zjadłem dziesięć paczek słonych czipsów i cukierki.”", correct: false },
          { text: "„Nigdy nie jem śniadania, bo nie lubię talerzy.”", correct: false },
          { text: "„Obiad wczoraj był bardzo smaczny i gorący.”", correct: false }
        ]
      },
      {
        question: "„Czy masz ze sobą legitymację szkolną i numer telefonu do rodziców?”",
        options: [
          { text: "„Tak, mam legitymację w plecaku, a numer telefonu pamiętam na pamięć.”", correct: true },
          { text: "„Zgubiłem wczoraj swój nowy plecak w miejskim autobusie po drodze.”", correct: false },
          { text: "„Nie mam przy sobie żadnych ważnych dokumentów ani numeru telefonu.”", correct: false },
          { text: "„Pamiętam tylko prywatny numer do mojego najlepszego kolegi z ławki.”", correct: false }
        ]
      },
      {
        question: "„Pamiętaj, żeby w domu pić dużo ciepłych płynów z miodem i cytryną. Co jeszcze pomaga przy osłabieniu?”",
        options: [
          { text: "„Długi sen pod ciepłym kocem i odpoczynek od telefonu.”", correct: true },
          { text: "„Oglądanie filmów przez całą noc bez przerwy.”", correct: false },
          { text: "„Bieganie po deszczu bez kurtki i czapki.”", correct: false },
          { text: "„Jedzenie lodów prosto z zamrażalnika.”", correct: false }
        ]
      },
      {
        question: "„Twoja mama już czeka przy portierni. Czy dasz radę zejść powoli ze mną po schodach?”",
        options: [
          { text: "„Tak, dam radę iść powoli. Dziękuję bardzo za troskliwą pomoc!”", correct: true },
          { text: "„Nie pójdę do domu, zostaję w gabinecie pielęgniarki do jutra!”", correct: false },
          { text: "„Zjadę natychmiast na brzuchu po metalowej poręczy na sam dół!”", correct: false },
          { text: "„W ogóle nie chcę wracać z mamą do domu po tych trudnych lekcjach!”", correct: false }
        ]
      },
      {
        question: "„Pamiętaj o regularnym wietrzeniu pokoju w czasie choroby. Dlaczego świeże powietrze jest tak ważne?”",
        options: [
          { text: "„Bo obniża stężenie zarazków w powietrzu i ułatwia dotlenienie płuc!”", correct: true },
          { text: "„Żeby w pokoju było jak najzimniej i żeby zupełnie zamarzły ściany!”", correct: false },
          { text: "„Częste wietrzenie pokoju nie ma żadnego znaczenia dla zdrowia ciała!”", correct: false },
          { text: "„Żeby wpuścić do ciepłego pokoju dzikie gołębie siedzące na dachu!”", correct: false }
        ]
      },
      {
        question: "„Czy wiesz, czym różni się stan podgorączkowy od wysokiej gorączki?”",
        options: [
          { text: "„Stan podgorączkowy to 37.0–38.0°C, a gorączka zaczyna się powyżej 38.0°C.”", correct: true },
          { text: "„Gorączka to niska temperatura ciała człowieka wynosząca poniżej 35 stopni.”", correct: false },
          { text: "„Pomiędzy stanem podgorączkowym a gorączką nie ma w ogóle żadnej różnicy.”", correct: false },
          { text: "„Stan podgorączkowy u człowieka występuje wyłącznie u malutkich niemowląt.”", correct: false }
        ]
      },
      {
        question: "„Podczas gorączki organizm intensywnie się poci. Co musimy natychmiast uzupełniać?”",
        options: [
          { text: "„Płyny i elektrolity, pijąc regularnie wodę, herbatę lub napary ziołowe.”", correct: true },
          { text: "„Tylko bardzo słodkie batony czekoladowe i gazowane napoje energetyczne.”", correct: false },
          { text: "„Mocno słone przekąski, prażony popcorn i tłuste frytki z restauracji.”", correct: false },
          { text: "„Zupełnie nic nie trzeba pić, woda bardzo szkodzi przy wysokiej gorączce.”", correct: false }
        ]
      },
      {
        question: "„Gdy boli cię brzuch, które potrawy są najbardziej wskazane w diecie lekkostrawnej?”",
        options: [
          { text: "„Klej ryżowy, gotowana marchewka, sucharki i pieczone jabłko.”", correct: true },
          { text: "„Bardzo pikantny barani kebab z ostrym sosem i tłustymi frytkami.”", correct: false },
          { text: "„Gorąca włoska pizza z potrójną warstwą sera i tłustego salami.”", correct: false },
          { text: "„Czekoladowe słodkie batony, cukierki i ostre chipsy paprykowe.”", correct: false }
        ]
      },
      {
        question: "„Dlaczego nie wolno brać leków przeciwbólowych na własną rękę bez wiedzy rodziców i lekarza?”",
        options: [
          { text: "„Ponieważ niewłaściwa dawka lub zły lek mogą wywołać ciężkie zatrucie i uszkodzić żołądek!”", correct: true },
          { text: "„Bo wszystkie leki w aptece są za tanie, żeby dzieci mogły je kupować i brać samemu!”", correct: false },
          { text: "„Bo kolorowe tabletki można połykać wyłącznie w obecności dyrektora szkoły w gabinecie!”", correct: false },
          { text: "„Można bez obaw brać dowolne leki całymi garściami bez pytania kogokolwiek o zgodę!”", correct: false }
        ]
      },
      {
        question: "„Jak prawidłowo ułożyć chorego na kozetce, gdy skarży się na mdłości i zawroty głowy?”",
        options: [
          { text: "„W pozycji leżącej z lekko uniesioną głową i zapewnieniem dostępu świeżego powietrza.”", correct: true },
          { text: "„Zawieszony głową w dół na wysokiej drabince gimnastycznej w sali sportowej!”", correct: false },
          { text: "„Położony twarzą prosto do podłogi pod ciężkim niebieskim materacem na sali!”", correct: false },
          { text: "„Kazać mu natychmiast robić szybkie przysiady, pompki i energiczne pajacyki!”", correct: false }
        ]
      },
      {
        question: "„Dlaczego termometr bezdotykowy należy trzymać w określonej odległości od czoła (3–5 cm)?”",
        options: [
          { text: "„Aby czujnik podczerwieni precyzyjnie zmierzył promieniowanie cieplne skóry.”", correct: true },
          { text: "„Żeby delikatny promień lasera przypadkowo nie podpalił włosów na głowie.”", correct: false },
          { text: "„Odległość nie ma znaczenia, temperaturę mierzy się z drugiego końca sali.”", correct: false },
          { text: "„Żeby bezdotykowy termometr nie rozładował baterii w telefonie pielęgniarki.”", correct: false }
        ]
      },
      {
        question: "„Pielęgniarka pyta: «Czy pamiętasz, kiedy ostatnio piłeś wodę w szkole?»”",
        options: [
          { text: "„«Rano przed pierwszą lekcją, zapomniałem pić na przerwach.»”", correct: true },
          { text: "„«Nigdy nie piję wody, bo woda nie ma smaku.»”", correct: false },
          { text: "„«Wypiłem dziesięć litrów wody na raz przed minutą.»”", correct: false },
          { text: "„«Piję tylko wodę z kałuży przed szkołą.»”", correct: false }
        ]
      },
      {
        question: "„Co oznacza objaw zwany dreszczami w trakcie narastania gorączki?”",
        options: [
          { text: "„Mimowolne skurcze mięśni mające na celu wytworzenie ciepła przez organizm walczący z infekcją.”", correct: true },
          { text: "„To jednoznaczny znak, że chory pacjent panicznie boi się pani pielęgniarki w gabinecie.”", correct: false },
          { text: "„To spontaniczny przejaw tańca nowoczesnego wykonywanego przez pacjenta na kozetce.”", correct: false },
          { text: "„To poważna usterka techniczna elektronicznego termometru bezdotykowego w przychodni.”", correct: false }
        ]
      },
      {
        question: "„W jakich sytuacjach należy bezzwłocznie wezwać pogotowie ratunkowe do szkoły?”",
        options: [
          { text: "„W razie utraty przytomności, drgawek, duszności lub nagłego silnego bólu w klatce piersiowej.”", correct: true },
          { text: "„Zawsze wtedy, gdy uczeń zapomni w domu zeszytu z zadaniem domowym na lekcję polskiego.”", correct: false },
          { text: "„Tylko w sytuacji, gdy na korytarzu szkolnym zadzwoni głośny dzwonek na przerwę obiadową.”", correct: false },
          { text: "„Gdy chory uczeń ma ochotę przejechać się na sygnale dużym żółtym ambulansem po mieście.”", correct: false }
        ]
      },
      {
        question: "„Twoja mama wchodzi do gabinetu i dziękuje za opiekę. Jakie słowa wypowiadasz na pożegnanie?”",
        options: [
          { text: "„Dziękuję pani za pomoc, herbatę i troskę! Do widzenia!”", correct: true },
          { text: "„Wychodzę bez słowa i trzaskam drzwiami.”", correct: false },
          { text: "„Dlaczego mama przyjechała tak szybko, chciałem tu spać.”", correct: false },
          { text: "„Zostawiam papierek po cukierku na kozetce.”", correct: false }
        ]
      },
      {
        question: "„Pielęgniarka macha ci z uśmiechem: «Wracaj szybko do zdrowia! O czym będziesz pamiętać po powrocie?»”",
        options: [
          { text: "„«O ciepłym ubiorze, piciu wody i jedzeniu owoców bogatych w witaminę C!»”", correct: true },
          { text: "«O jedzeniu zimnych lodów na mrozie i chodzeniu w rozpiętej kurtce w zimie!»", correct: false },
          { text: "«O całkowitym unikaniu mycia rąk i niejedzeniu żadnych ciepłych posiłków!»", correct: false },
          { text: "«O siedzeniu w przemoczonych skarpetkach przez cały dzień w szkolnej klasie!»", correct: false }
        ]
      }
    ]
  },
  {
    titlePl: 'Pielęgniarka: Uraz kolana na WF-ie',
    subtitlePl: 'Pierwsza pomoc i opatrunek',
    descriptionPl: 'Zimny okład, dezynfekcja i elastyczny bandaż — ratujemy obolałe kolano!',
    steps: [
      {
        question: "„Cześć! Widzę, że trzymasz się za kolano. Co się wydarzyło na przerwie?”",
        options: [
          { text: "„Dzień dobry! Potknąłem się na schodach i mocno stłukłem kolano.”", correct: true },
          { text: "„Dzień dobry! Zgubiłem trampki i nie chcę iść na lekcję przyrody.”", correct: false },
          { text: "„Dzień dobry! Przyszedłem tylko zapytać o wynik meczu w telewizji.”", correct: false },
          { text: "„Dzień dobry! Chcę odpocząć na leżance, bo nie lubię matematyki.”", correct: false }
        ]
      },
      {
        question: "„Spokojnie, usiądź tutaj. Obejrzę twoją nogę. Czy skóra jest gdzieś przerwana i krwawi?”",
        options: [
          { text: "„Jest lekkie otarcie naskórka i mały siniak, ale krew mocno nie leci.”", correct: true },
          { text: "„Kość wystaje przez spodnie i cała noga natychmiast mi odpada z bólu.”", correct: false },
          { text: "„Nic mi w ogóle nie jest, tylko chciałem zobaczyć gabinet szkolny.”", correct: false },
          { text: "„Złamałem obie ręce i nie mogę pisać żadnego sprawdzianu z polskiego.”", correct: false }
        ]
      },
      {
        question: "„Zdezynfekuję otarcie bezalkoholowym środkiem antyseptycznym. Czy to zaszczypie?”",
        options: [
          { text: "„Ten płyn nie szczypie, delikatnie oczyści ranę z bakterii.”", correct: true },
          { text: "„Będzie piekło tak strasznie, że zemdlejesz na kozetce.”", correct: false },
          { text: "„Płyn rozpuści całą skórę i zostawi wielką czerwoną dziurę.”", correct: false },
          { text: "„Rana po przemyciu natychmiast zaświeci w ciemności na zielono.”", correct: false }
        ]
      },
      {
        question: "„Przyłóżmy na 10 minut chłodny kompres żelowy. Dlaczego zimno pomaga przy stłuczeniach?”",
        options: [
          { text: "„Zimno obkurcza naczynia krwionośne, zmniejsza obrzęk i łagodzi ból.”", correct: true },
          { text: "„Zimny lód zamraża całe kolano w twardy sopel lodu na długie godziny.”", correct: false },
          { text: "„Okład chłodzący służy wyłącznie do zabawy w gabinecie lekarskim.”", correct: false },
          { text: "„Zimno sprawia, że krew zaczyna płynąć dziesięć razy szybciej w nodze.”", correct: false }
        ]
      },
      {
        question: "„Założę ci teraz jałowy opatrunek i elastyczną opaskę. Jak mocno powinna być zaciągnięta?”",
        options: [
          { text: "„Stabilnie podtrzymywać staw, ale nie tamować dopływu krwi do stopy.”", correct: true },
          { text: "„Ścisnąć nogę tak mocno, żeby zsiniała i natychmiast zdrętwiała z bólu.”", correct: false },
          { text: "„Opatrunek powinien sam spaść z kolana przy pierwszym kroku na schodach.”", correct: false },
          { text: "„Bandaż służy tylko do dekoracji nogi i nie powinien dotykać skóry.”", correct: false }
        ]
      },
      {
        question: "„Czy potrafisz zgiąć nogę w kolanie i delikatnie stanąć na stopie?”",
        options: [
          { text: "„Tak, mogę zgiąć kolano, boli tylko lekko przy mocnym nacisku.”", correct: true },
          { text: "„Nie mogę w ogóle ruszyć żadnym palcem u obu rąk i obu nóg z bólu.”", correct: false },
          { text: "„Kolano kręci się dookoła bez żadnego oporu jak wiatrak na wietrze.”", correct: false },
          { text: "„W ogóle nie czuję żadnego dotyku, moja noga zamieniła się w drewno.”", correct: false }
        ]
      },
      {
        question: "„Wypiszę ci zwolnienie z ćwiczeń na dzisiejszej lekcji WF. Co przekażesz panu wuefiście?”",
        options: [
          { text: "„Przekażę zwolnienie i będę obserwować lekcję z ławki rezerwowych.”", correct: true },
          { text: "„Pobiegnę na boisko grać w piłkę nożną pomimo wielkiego bólu kolana.”", correct: false },
          { text: "„Schowam się w szatni pod prysznicem i przeczekam całą lekcję WF-u.”", correct: false },
          { text: "„Wyrzucę zwolnienie lekarskie do kosza i ucieknę ze szkoły do domu.”", correct: false }
        ]
      },
      {
        question: "„Gdy wrócisz do domu, pamiętaj o odpoczynku z uniesioną nogą. O której kończysz dzisiaj lekcje?”",
        options: [
          { text: "„Kończę po piątej lekcji o 13:30 i tata odbierze mnie autem.”", correct: true },
          { text: "„Zostanę w szkole do nocy i pójdę spać na korytarzu pod drzwiami.”", correct: false },
          { text: "„Wracam sam na piechotę przez całe miasto z ciężkim plecakiem.”", correct: false },
          { text: "„Nie wiem o której kończę ani kto po mnie przyjedzie pod szkołę.”", correct: false }
        ]
      },
      {
        question: "„Czym różni się rana cięta od otarcia naskórka?”",
        options: [
          { text: "„Rana cięta ma równe brzegi i głębiej przecina tkanki, a otarcie dotyczy tylko powierzchni skóry.”", correct: true },
          { text: "„Rana cięta to zadrapanie paznokciem, a otarcie to całkowite złamanie kości z przemieszczeniem.”", correct: false },
          { text: "„Między raną ciętą a otarciem naskórka nie ma zupełnie żadnej różnicy w medycynie ratunkowej.”", correct: false },
          { text: "„Otarcie naskórka zawsze wymaga natychmiastowej operacji chirurgicznej w szpitalu miejskim.”", correct: false }
        ]
      },
      {
        question: "„Dlaczego do dezynfekcji otwartych ran nie należy stosować spirytusu salicylowego ani wody utlenionej?”",
        options: [
          { text: "„Ponieważ uszkadzają one zdrowe komórki i opóźniają gojenie, lepsze są nowoczesne płyny z oktenidyną.”", correct: true },
          { text: "„Bo woda utleniona i spirytus są zbyt tanie, a w gabinecie wolno używać tylko drogich specyfików.”", correct: false },
          { text: "„Bo woda utleniona zmienia trwale kolor skóry wokół rany na jaskrawo fioletowy i zielony kolor.”", correct: false },
          { text: "„Spirytus salicylowy natychmiast usypia pacjenta, co uniemożliwia dalsze badanie w przychodni.”", correct: false }
        ]
      },
      {
        question: "„Co oznacza pojawienie się krwiaka (siniaka) pod skórą po uderzeniu?”",
        options: [
          { text: "„Wylew krwi z drobnych uszkodzonych naczyń włosowatych do otaczających tkanek.”", correct: true },
          { text: "„Zabrudzenie skóry czarnym atramentem z nieszczelnego pióra w piórniku.”", correct: false },
          { text: "„Dojrzewanie owoców borówki czarnej pod powierzchnią delikatnego naskórka.”", correct: false },
          { text: "„Całkowity brak przepływu krwi w nodze spowodowany uciskiem twardego buta.”", correct: false }
        ]
      },
      {
        question: "„Kiedy siniak zmienia kolor z fioletowego na zielonkawy i żółty, co to oznacza?”",
        options: [
          { text: "„Rozpad hemoglobiny i stopniowe wchłanianie krwiaka przez układ chłonny.”", correct: true },
          { text: "„Działanie promieni słonecznych wpadających przez okno do sali lekcyjnej.”", correct: false },
          { text: "„Reakcja chemiczna na zjedzoną na przerwie kanapkę z żółtym serem i szynką.”", correct: false },
          { text: "„Złuszczanie się brudnego naskórka pod wpływem ciepłej wody pod prysznicem.”", correct: false }
        ]
      },
      {
        question: "„Jakie są pierwsze objawy tężca – groźnej choroby po skaleczeniu zanieczyszczonym przedmiotem?”",
        options: [
          { text: "„Bolesne skurcze mięśni, zwłaszcza mięśni żuchwy (szczękościsk) i karku.”", correct: true },
          { text: "„Nagła i niekontrolowana ochota na jedzenie słodkich lodów waniliowych.”", correct: false },
          { text: "„Wypadanie wszystkich zębów mlecznych w ciągu zaledwie jednej minuty czasu.”", correct: false },
          { text: "„Zmiana koloru oczu na jaskrawo czerwony przy patrzeniu na tablicę szkolną.”", correct: false }
        ]
      },
      {
        question: "„Czy szczepienie przeciw tężcowi chroni organizm przez całe życie po jednej dawce?”",
        options: [
          { text: "„Nie, wymaga dawek przypominających co 10 lat, by utrzymać przeciwciała.”", correct: true },
          { text: "„Tak, jedna szczepionka z dzieciństwa chroni człowieka przez całe 150 lat.”", correct: false },
          { text: "„Szczepienie przeciw tężcowi trzeba powtarzać codziennie rano przed szkołą.”", correct: false },
          { text: "„Przeciw tężcowi w ogóle nie istnieją żadne skuteczne szczepionki ochronne.”", correct: false }
        ]
      },
      {
        question: "„Co należy zrobić, jeśli w ranie tkwi wbity duży odłamek szkła lub metalu?”",
        options: [
          { text: "„Nie wyciągać go samodzielnie, zabezpieczyć opatrunkiem dookoła i wezwać chirurga!”", correct: true },
          { text: "„Wyrwać ciało obce energicznym szarpnięciem za pomocą starych kombinerek!”", correct: false },
          { text: "„Wepchnąć wbity przedmiot jeszcze głębiej do rany, aby przestał wystawać!”", correct: false },
          { text: "„Zalać ranę z wystającym szkłem wrzącą wodą i posypać obficie kuchenną solą!”", correct: false }
        ]
      },
      {
        question: "„Dlaczego opatrunek na ranie należy zmieniać w warunkach czystości i myć przedtem ręce?”",
        options: [
          { text: "„Aby nie wprowadzić do gojącej się rany groźnych bakterii ropotwórczych.”", correct: true },
          { text: "„Żeby bandaż i kompres nie pobrudziły się od dotyku ciepłych palców dłoni.”", correct: false },
          { text: "„Dotykanie jałowej gazy grozi nagłym porażeniem prądem w gabinecie szkolnym.”", correct: false },
          { text: "„Jałowa gaza dotknięta palcem natychmiast zamienia się w zwykły popiół w dłoni.”", correct: false }
        ]
      },
      {
        question: "„Jakie są objawy zakażenia rany, które wymagają natychmiastowej wizyty u lekarza?”",
        options: [
          { text: "„Narastające zaczerwienienie, obrzęk, pulsowanie, wyciek ropy i gorączka.”", correct: true },
          { text: "„Przyjemne chłodzenie rany, zanik siniaka i całkowity brak jakiegokolwiek bólu.”", correct: false },
          { text: "„Pojawienie się na skórze wokół rany pięknych, symetrycznych piegów i dołków.”", correct: false },
          { text: "„Szybki wzrost mięśni w okolicy skaleczenia bez wykonywania żadnych ćwiczeń.”", correct: false }
        ]
      },
      {
        question: "„Do czego służy w ratownictwie chusta trójkątna?”",
        options: [
          { text: "„Do podwieszenia i unieruchomienia złamanej lub zwichniętej kończyny górnej (temblak).”", correct: true },
          { text: "„Do wycierania potu z czoła zawodnika po wyczerpującym meczu piłkarskim na hali.”", correct: false },
          { text: "„Do przewiązywania oczu podczas wesołej zabawy w ciuciubabkę na szkolnej przerwie.”", correct: false },
          { text: "„Do pakowania kanapek i owoców na drugie śniadanie zamiast plastikowej torebki.”", correct: false }
        ]
      },
      {
        question: "„Założyłaś wzorowy opatrunek. Pielęgniarka wpisuje zdarzenie do księgi gabinetu. Jak dziękujesz?”",
        options: [
          { text: "„Dziękuję bardzo za profesjonalny opatrunek i miłe słowa otuchy!”", correct: true },
          { text: "„Zrywam natychmiast cały ten plaster i wracam biegać po korytarzu!”", correct: false },
          { text: "„Nie lubię pani gabinetu i wolę iść do dyrektora na skargę do szkoły!”", correct: false },
          { text: "„Mogła pani dać mi lizaka zamiast tego nudnego białego bandaża na nodze!”", correct: false }
        ]
      },
      {
        question: "„Pani pielęgniarka podaje ci rękę: «Wracaj ostrożnie do klasy, nie biegaj po schodach!». Co obiecujesz?”",
        options: [
          { text: "„Obiecuję uważać pod nogi i stosować się do pani zaleceń. Do widzenia!”", correct: true },
          { text: "„Zaraz zjadę na tornistrze ze schodów na parter, żeby było weselej!”", correct: false },
          { text: "„Wyrzucę to zwolnienie do kosza na śmieci i pobiegnę na lekcję WF-u!”", correct: false },
          { text: "„Do widzenia, idę sprawdzić czy automat z batonami w holu już działa!”", correct: false }
        ]
      }
    ]
  },
  {
    titlePl: 'Pielęgniarka: Bilans zdrowia i wzrok',
    subtitlePl: 'Wzrost, waga i ostrość widzenia',
    descriptionPl: 'Sprawdzamy tablicę Snellena, postawę ciała i prawidłowy rozwój!',
    steps: [
      {
        question: "„Dzień dobry! Dzisiaj w naszej szkole odbywa się bilans zdrowia i pomiary. Gotowy?”",
        options: [
          { text: "„Dzień dobry! Tak, jestem przygotowany i chętnie wezmę udział w badaniu.”", correct: true },
          { text: "„Dzień dobry! Boję się pani i uciekam z krzykiem do szatni pod schody.”", correct: false },
          { text: "„Nie zgadzam się na żadne badanie, przyszedłem tylko po szklankę wody.”", correct: false },
          { text: "„Zapomniałem jak mam na imię i w której klasie mam dzisiaj swoje lekcje.”", correct: false }
        ]
      },
      {
        question: "„Świetnie! Zdejmij proszę buty i stań prosto na wadze ze wzrostomierzem. Ile mierzysz?”",
        options: [
          { text: "„Mierzę 158 centymetrów i ważę 46 kilogramów, rosnę bardzo prawidłowo.”", correct: true },
          { text: "„Mierzę trzy metry i ważę dziesięć gramów, rosnę jak młody dąb w lesie.”", correct: false },
          { text: "„Nigdy się nie mierzyłem, bo w domu nie mamy żadnej linijki ani miarki.”", correct: false },
          { text: "„Ważę dokładnie tyle samo co szkolny autobus pełen dzieci i plecaków.”", correct: false }
        ]
      },
      {
        question: "„Pomiary są idealne w normie centylowej. Teraz sprawdzimy wzrok na tablicy Snellena. Co widzisz?”",
        options: [
          { text: "„Zasłaniam lewe oko i bez trudu czytam litery z dolnego rzędu tablicy.”", correct: true },
          { text: "„Wszystko mi się rozmywa i nie widzę nawet największej litery na samej górze.”", correct: false },
          { text: "„Zamykam oboje oczu i zgaduję litery na ślepo.”", correct: false },
          { text: "„Ta tablica jest za daleko, muszę podejść na 5 centymetrów.”", correct: false }
        ]
      },
      {
        question: "„Twój wzrok jest sokoli! A teraz stań tyłem i zrób skłon w przód. Co teraz oceniam u ciebie?”",
        options: [
          { text: "„Symetrię pleców, układ łopatek i prawidłowe krzywizny kręgosłupa.”", correct: true },
          { text: "„Czy uczeń ma na plecach ukryty tatuaż zrobiony długopisem w ławce.”", correct: false },
          { text: "„Czystość szkolnej koszulki i jakość materiału, z którego ją uszyto.”", correct: false },
          { text: "„Czy łopatki ruszają się jak skrzydła u ptaka podczas szybkiego lotu.”", correct: false }
        ]
      },
      {
        question: "„Plecy są proste, brak oznak skoliozy! Pamiętasz, jak poprawnie nosić szkolny plecak?”",
        options: [
          { text: "„Zawsze na obu ramionach, dopasowany blisko pleców, nigdy na jednym pasku!”", correct: true },
          { text: "„Zawsze przewieszony na jednym ramieniu z luźno wiszącymi szelkami w tyle!”", correct: false },
          { text: "„Pchając tornister stopą po podłodze szkolnego korytarza na lekcję matmy!”", correct: false },
          { text: "„Trzymając ciężki plecak w zębach podczas schodzenia po wąskich schodach!”", correct: false }
        ]
      },
      {
        question: "„Zmierzę ci jeszcze ciśnienie tętnicze krwi małym aparatem naramiennym. Jaki wynik jest wzorowy?”",
        options: [
          { text: "„Około 115 na 75 milimetrów słupa rtęci – serce bije jak dzwon!”", correct: true },
          { text: "„Tysiąc na pięćset atmosfer – krew płynie jak woda z hydrantu na ulicy!”", correct: false },
          { text: "„Zero na zero – ciśnienie krwi w ogóle nie istnieje u młodych uczniów!”", correct: false },
          { text: "„Około pięćdziesiąt stopni Celsjusza – serce parzy jak gorący czajnik!”", correct: false }
        ]
      },
      {
        question: "„Zbadam też czystość skóry i stan uzębienia. Jak często należy szczotkować zęby pastą z fluorem?”",
        options: [
          { text: "„Co najmniej dwa razy dziennie przez minimum 2–3 minuty po posiłkach!”", correct: true },
          { text: "„Raz w roku przed świętami przez pięć sekund za pomocą starej szmatki!”", correct: false },
          { text: "„Zęby myje się wyłącznie wtedy, gdy bolą po zjedzeniu twardego cukierka!”", correct: false },
          { text: "„W ogóle nie trzeba myć zębów, guma do żucia załatwia całą sprawę w mig!”", correct: false }
        ]
      },
      {
        question: "„Wpisałam wszystkie wyniki do twojej karty zdrowia ucznia. Jesteś okazem zdrowia!”",
        options: [
          { text: "„Bardzo dziękuję za badanie i cenne wskazówki dotyczące dbania o kręgosłup!”", correct: true },
          { text: "„Nie zamierzam słuchać żadnych rad i będę garbić się przy biurku całą noc!”", correct: false },
          { text: "„Zapomniałem już wszystko co pani mówiła i biegnę kupić chipsy w sklepiku!”", correct: false },
          { text: "„Do widzenia, idę powiedzieć kolegom, że to badanie było zupełnie nudne!”", correct: false }
        ]
      },
      {
        question: "„Co to jest siatka centylowa w dokumentacji medycznej dziecka?”",
        options: [
          { text: "„Wykres statystyczny pozwalający ocenić rozwój fizyczny na tle rówieśników tej samej płci i wieku.”", correct: true },
          { text: "„Plan lekcji pokazujący godziny rozpoczęcia przerw obiadowych i zajęć wychowania fizycznego.”", correct: false },
          { text: "„Rysunek przedstawiający budowę mikroskopu optycznego używanego na lekcjach trudnej biologii.”", correct: false },
          { text: "„Specjalny cennik leków i witamin dostępnych bez recepty w pobliskiej aptece całodobowej w mieście.”", correct: false }
        ]
      },
      {
        question: "„Co oznacza pojęcie «skolioza» i jak jej zapobiegać w wieku szkolnym?”",
        options: [
          { text: "„Boczne skrzywienie kręgosłupa – zapobiega się mu pływaniem, ruchem i ergonomiczną pozycją w ławce.”", correct: true },
          { text: "„Złamanie kości udowej podczas skoku w dal – zapobiega się mu leżeniem pod ciepłą kołdrą w łóżku.”", correct: false },
          { text: "„Brak apetytu na szkolny obiad – zapobiega się mu jedzeniem słodkich batoników przed każdą lekcją.”", correct: false },
          { text: "„Wada wymowy polegająca na seplenieniu – zapobiega się jej głośnym czytaniem lektur szkolnych na głos.”", correct: false }
        ]
      },
      {
        question: "„Dlaczego zbyt ciężki plecak (przekraczający 10–15% masy ciała ucznia) szkodzi kręgosłupowi?”",
        options: [
          { text: "„Powoduje przeciążenie krążków międzykręgowych, bolesne napięcia mięśni i wady postawy.”", correct: true },
          { text: "„Sprawia, że tornister staje się lżejszy o połowę dzięki działaniu siły grawitacji Ziemi.”", correct: false },
          { text: "„Wzmacnia mięśnie brzucha i ramion, zastępując codzienny trening na sali gimnastycznej.”", correct: false },
          { text: "„Nie ma żadnego wpływu na zdrowie, to tylko kwestia modnego wyglądu na korytarzu szkolnym.”", correct: false }
        ]
      },
      {
        question: "„Na czym polega wada wzroku zwana krótkowzrocznością (miopią)?”",
        options: [
          { text: "„Obraz powstaje przed siatkówką, przez co przedmioty odległe są zamglone i niewyraźne.”", correct: true },
          { text: "„Oko widzi w nocy jak noktowizor wojskowy, ale w dzień razi je każde słoneczne światło.”", correct: false },
          { text: "„Litery w zeszycie zamieniają się miejscami i uciekają z białej kartki podczas czytania.”", correct: false },
          { text: "„Wszystkie kolory tęczy zlewają się w jeden szary odcień podczas patrzenia na zieloną trawę.”", correct: false }
        ]
      },
      {
        question: "„Jakie szkła korekcyjne stosuje się w okularach dla krótkowidza?”",
        options: [
          { text: "„Szkła rozpraszające (wklęsłe, o ujemnej mocy dioptrii, tzw. minusy).”", correct: true },
          { text: "„Grube szkła powiększające (wypukłe, o dodatniej mocy, tzw. plusy).”", correct: false },
          { text: "„Zwykłe ciemne okulary przeciwsłoneczne z filtrem UV kupione na plaży.”", correct: false },
          { text: "„Płaskie przezroczyste szybki okienne bez żadnej mocy optycznej dioptrii.”", correct: false }
        ]
      },
      {
        question: "„Co to jest próba tuberkulinowa lub szczepienie BCG?”",
        options: [
          { text: "„Szczepienie i diagnostyka chroniące przed niebezpieczną gruźlicą prątkową.”", correct: true },
          { text: "„Badanie sprawdzające czy uczeń potrafi szybko biegać na krótkim dystansie.”", correct: false },
          { text: "„Test sprawdzający pamięć do wierszy i dat z historii na lekcji w szkole.”", correct: false },
          { text: "„Specjalny masaż pleców i kręgosłupa wykonywany drewnianym wałkiem w gabinecie.”", correct: false }
        ]
      },
      {
        question: "„Czym jest próba wysiłkowa serca (np. próba Ruffiera)?”",
        options: [
          { text: "„Oceną wydolności krążeniowej na podstawie tętna przed i po wykonaniu 30 przysiadów.”", correct: true },
          { text: "„Pomiarem długości skoku w dal z miejsca na piaszczystej skoczni przy boisku szkolnym.”", correct: false },
          { text: "„Sprawdzaniem ile kilogramów uczeń potrafi podnieść oburącz nad głowę na pomoście ciężarów.”", correct: false },
          { text: "„Liczeniem ile słów na minutę uczeń potrafi przeczytać z podręcznika bez zająknięcia.”", correct: false }
        ]
      },
      {
        question: "„Dlaczego regularne wizyty kontrolne u stomatologa (co 6 miesięcy) są konieczne nawet gdy ząb nie boli?”",
        options: [
          { text: "„Bo wczesna próchnica rozwija się bezboleśnie w szkliwie i można ją wyleczyć bez bólu!”", correct: true },
          { text: "„Żeby stomatolog mógł pochwalić się nowym fotelem dentystycznym i kolorowymi plombami.”", correct: false },
          { text: "„Bo zęby mleczne i stałe trzeba bezwzględnie wyrywać co roku, by zrobić miejsce na nowe.”", correct: false },
          { text: "„Wizyty kontrolne u dentysty są całkowicie zbędne, jeśli ząb jeszcze nie boli przy gryzieniu.”", correct: false }
        ]
      },
      {
        question: "„Co to jest wskaźnik masy ciała BMI i jak się go oblicza?”",
        options: [
          { text: "„Masa ciała w kilogramach podzielona przez wzrost w metrach podniesiony do kwadratu.”", correct: true },
          { text: "„Liczba zjedzonych kanapek na śniadanie pomnożona przez liczbę wypitych szklanek herbaty.”", correct: false },
          { text: "„Wzrost w centymetrach odjąć sto dwadzieścia i podzielić przez numer buta ucznia w klasie.”", correct: false },
          { text: "„Średnia ocen ze wszystkich przedmiotów w dzienniku pomnożona przez wagę szkolnego plecaka.”", correct: false }
        ]
      },
      {
        question: "„Jakie są zasady higieny pracy przy biurku podczas odrabiania lekcji?”",
        options: [
          { text: "„Odpowiednia wysokość krzesła, stopy oparte na podłodze, oświetlenie z lewej strony (dla praworęcznych) i proste plecy.”", correct: true },
          { text: "„Leżenie na brzuchu na dywanie z podpartym podbródkiem w ciemnym pokoju z migającym telewizorem w tle przed biurkiem.”", correct: false },
          { text: "„Siedzenie po turecku na miękkiej pufie z laptopem trzymanym na kolanach i głową pochyloną nisko nad klawiaturą biurową.”", correct: false },
          { text: "„Wysokość biurka nie ma żadnego znaczenia, najważniejsze by krzesło kręciło się dookoła z dużą prędkością na kółkach.”", correct: false }
        ]
      },
      {
        question: "„Pielęgniarka zamyka twoją kartę zdrowia: «Gratulacje, rośniesz wspaniale i zdrowo!». Co odpowiadasz?”",
        options: [
          { text: "„Dziękuję za poświęcony czas, życzliwość i profesjonalne badanie! Do widzenia!”", correct: true },
          { text: "„Nareszcie koniec tego nudnego badania, uciekam stąd natychmiast na korytarz!”", correct: false },
          { text: "„Mogła pani podać mi lepsze wyniki, bo koledzy z klasy będą się ze mnie śmiać!”", correct: false },
          { text: "„Do widzenia, idę sprawdzić czy w szatni nikt nie pomylił moich butów na WF!”", correct: false }
        ]
      },
      {
        question: "„Pani pielęgniarka uśmiecha się na pożegnanie: «Pamiętaj o witaminach i uśmiechu każdego dnia!»”",
        options: [
          { text: "„Będę pamiętać! Życzę pani spokojnego i miłego dnia w szkolnym gabinecie!”", correct: true },
          { text: "„Zapomnę o wszystkim zaraz po przekroczeniu progu tego szkolnego gabinetu!”", correct: false },
          { text: "„Mam nadzieję, że więcej już nigdy nie będę musiał tutaj do pani przychodzić!”", correct: false },
          { text: "„Idę powiedzieć panu od WF-u, że kazała mi pani siedzieć na ławce do końca dnia!”", correct: false }
        ]
      }
    ]
  }
];

export function getPielegniarkaEncounter(index = null) {
  const idx = (index !== null && index >= 0 && index < PIELEGNIARKA_SETS.length)
    ? index
    : Math.floor(Math.random() * PIELEGNIARKA_SETS.length);
  const data = PIELEGNIARKA_SETS[idx];
  return {
    type: 'pielegniarka_dialog',
    titlePl: data.titlePl,
    subtitlePl: data.subtitlePl,
    icon: './assets/Postacie/pielegniarka.png',
    archetype: 'adaptive',
    enemyName: 'Pielęgniarka',
    enemyMaxHp: 44,
    enemyDamage: 3,
    descriptionPl: data.descriptionPl,
    steps: [...data.steps]
  };
}

export const PIELEGNIARKA_ENCOUNTERS = {
  default: getPielegniarkaEncounter(0),
  1: getPielegniarkaEncounter(0),
  2: getPielegniarkaEncounter(1),
  3: getPielegniarkaEncounter(2)
};

export const PIELEGNIARKA_ENCOUNTER = PIELEGNIARKA_ENCOUNTERS.default;
