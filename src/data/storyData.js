// Fabuły i siatka podstawy programowej:
// - Oś pionowa (6 bohaterów): Warrior, Thief, Robot, Inventor, Witch, Jester
// - Oś pozioma (8 epizodów): od przetrwania w klasie (Start A0/A1), przez „Zamieńmy słowo – Klasy 4-6”,
//   aż do Klasy 7, Klasy 8, Kanonu Lektur CKE I oraz Wielkich Form Wypowiedzi II.

export const EPISODE_LEVELS = [
  'Start A0/A1',
  'Klasa 4',
  'Klasa 5',
  'Klasa 6',
  'Klasa 7',
  'Klasa 8',
  'Lektury CKE I',
  'Formy Wypowiedzi II'
];

export const STORY = {
  // ─────────────── WARRIOR (1★): Komunikacja szkolna i Części Mowy ───────────────
  warrior: [
    {
      bossId: 'szkieleton', title: 'Kości Zostały Rzucone',
      curriculum: 'Polecenia na lekcji i podstawowe czasowniki',
      intro: 'Pierwszy dzień w polskiej szkole. Wojownik nie boi się niczego… poza tablicą i kredą. Plotka głosi, że w sali biologicznej coś grzechocze.',
      taunt: 'Grrr-chrup! Myślisz, że rozbijesz mnie mieczem? Najpierw nazwij moje kości po polsku!',
      outro: 'Szkieleton rozsypuje się z uśmiechem. „Nie każdą walkę wygrywa się siłą” – zapisuje Wojownik w zeszycie.'
    },
    {
      bossId: 'pilkarz', title: 'Miejsce w Składzie',
      curriculum: 'Zamieńmy słowo 4: Rzeczownik, czasownik, przymiotnik',
      intro: 'Szkolna drużyna szuka obrońcy. Wojownik chce grać, ale kapitan nie przyjmuje nikogo, kto nie odróżnia rzeczownika od czasownika w komendach na boisku.',
      taunt: 'Ty? W mojej drużynie? Nawet nie wiesz, co znaczy „podaj” i „strzelaj”!',
      outro: 'Kapitan podaje rękę. „Witaj w drużynie, twardzielu.” Wojownik pierwszy raz czuje, że tu pasuje.'
    },
    {
      bossId: 'lekarz', title: 'Rana Wojownika',
      curriculum: 'Klasa 5: Przysłówek, liczebnik i przyimek',
      intro: 'Po meczu boli go kolano, ale prawdziwy wojownik się nie skarży… Pielęgniarka kieruje go jednak prosto do lekarza.',
      taunt: 'Wojownik, który boi się powiedzieć „boli mnie”? Opisz jak, gdzie i od ilu dni boli!',
      outro: 'Diagnoza: stłuczenie. Wojownik uczy się, że przyznanie się do bólu też wymaga odwagi.'
    },
    {
      bossId: 'nauczycielka', title: 'Egzamin Ustny',
      curriculum: 'Klasa 6: Zaimek, spójnik i części mowy w zdaniu',
      intro: 'Największy wróg Wojownika nie ma miecza. Ma dziennik, czerwony długopis i pytania o odmienne i nieodmienne części mowy.',
      taunt: 'Proszę do tablicy. Miecz zostaw za drzwiami – tu walczymy częściami mowy.',
      outro: 'Czwórka z plusem! Wojownik wychodzi z klasy z podniesioną głową, jakby wygrał turniej.'
    },
    {
      bossId: 'silaczka', title: 'Silniejsza ode Mnie',
      curriculum: 'Klasa 7: Imiesłowy i stopniowanie przymiotników/przysłówków',
      intro: 'Na szkolnej siłowni ktoś podnosi dwa razy więcej niż Wojownik. Pierwszy raz w życiu spotyka kogoś silniejszego.',
      taunt: 'Mięśnie masz niezłe, ale głowa też jest mięśniem! Kto tu jest silny, silniejszy, najsilniejszy?!',
      outro: 'Siłaczka klepie go po plecach. „Wygrałeś głową. Szacun.” Od dziś trenują razem.'
    },
    {
      bossId: 'smok', title: 'Legenda Szkoły',
      curriculum: 'Klasa 8: Pełna analiza części mowy i formy nieosobowe (-no, -to)',
      intro: 'Pod szkołą krąży legenda o Smoku, który pilnuje podziemi. Wojownik zna już język, przyjaciół i samego siebie. Czas na ostateczną próbę.',
      taunt: 'Wielu rycerzy tu przyszło. Żaden nie potrafił ze mną porozmawiać. Czym ty się różnisz?',
      outro: 'Smok skłania łeb. „Przyszedłeś walczyć, a umiałeś rozmawiać. Jesteś prawdziwym bohaterem.”'
    },
    {
      bossId: 'dyrektorka', title: 'Kodeks Rycerski Lektur',
      curriculum: 'Lektury CKE I: Braterstwo, honor i walka w „Kamieniach na szaniec” i „Panu Tadeuszu”',
      intro: 'Dyrektorka wzywa Wojownika na sprawdzian z kodeksu honorowego bohaterów lektur: Rudego, Zośki, Alka i Jacka Soplicy.',
      taunt: 'Odwaga bez zasad to zwykła zuchwałość! Udowodnij, że rozumiesz poświęcenie bohaterów Kamieni na szaniec!',
      outro: 'Dyrektorka wręcza Wojownikowi tarczę ze złotym orłem. „Zdałeś egzamin z prawdziwego męstwa”.'
    },
    {
      bossId: 'cwaniak', title: 'Pojedynek na Słowa',
      curriculum: 'Formy Wypowiedzi II: Rozprawka argumentacyjna i porywające przemówienie',
      intro: 'Cwaniak twierdzi, że siła i odwaga są w dzisiejszym świecie bezużyteczne. Wojownik musi go przekonać siłą argumentów i mowy.',
      taunt: 'Chcesz mnie pokonać referatem? Dawaj swoje tezy i dowody, mięśniaku!',
      outro: 'Cwaniak opuszcza ręce: „Nie mam kontrargumentu. Przekonałeś mnie”. KONIEC SĄGII WOJOWNIKA!'
    }
  ],

  // ─────────────── THIEF (2★): Przypadki (Fleksja) i Ortografia ───────────────
  thief: [
    {
      bossId: 'profesor', title: 'Klucz do Biblioteki',
      curriculum: 'Mianownik i Biernik (Kogo? Co?) + podstawy ó/u',
      intro: 'Złodziej słyszał, że w bibliotece leży mapa podziemi szkoły. Klucz nosi przy sobie roztargniony Profesor.',
      taunt: 'Hmm? Ktoś grzebie mi w kieszeni? Odpowiedz na moje pytania, młody człowieku, a może zapomnę o tym incydencie.',
      outro: 'Profesor nawet nie zauważył, że klucz zniknął. Mapa jest w rękach Złodzieja.'
    },
    {
      bossId: 'pilkarz', title: 'Podmiana Piłki',
      curriculum: 'Zamieńmy słowo 4: Zasady rz/ż, ch/h, ó/u i odmiana rzeczownika',
      intro: 'Na mapie jest wskazówka: drugi fragment ukryto w piłce meczowej. Trzeba ją podmienić przed finałem.',
      taunt: 'Hej! To moja piłka! Złap mnie, jeśli nie zrobisz żadnego błędu ortograficznego!',
      outro: 'Piłka podmieniona, nikt nic nie widział. W środku: drugi fragment mapy.'
    },
    {
      bossId: 'nauczycielka', title: 'Odpowiedzi do Sprawdzianu',
      curriculum: 'Klasa 5: Wszystkie 7 przypadków + pisownia „nie” z częściami mowy',
      intro: 'Trzeci fragment jest w szufladzie Nauczycielki, razem z odpowiedziami do sprawdzianu z przypadków. Kusi podwójnie.',
      taunt: 'Ręce przy sobie! Skoro tak lubisz odpowiedzi, to proszę – odmień przez 7 przypadków przy mnie.',
      outro: 'Złodziej oddaje odpowiedzi – zdał sam. Fragment mapy i tak zabrał.'
    },
    {
      bossId: 'smok', title: 'Smoczy Skarbiec',
      curriculum: 'Klasa 6: Trudne końcówki (-ii/-i, -om/-ą, -ę/-em) i wielka litera',
      intro: 'Mapa jest kompletna. Prowadzi do skarbca Smoka pod szkołą. Złodziej idzie tam z jednym wspólnikiem – Cwaniakiem.',
      taunt: 'Złodziej w moim skarbcu? Złoto oddam tylko temu, kto nie myli końcówek przypadków.',
      outro: 'Smok oddaje jedną skrzynię. „Zasłużyłeś.” Ale gdy Złodziej się odwraca – Cwaniaka i skrzyni już nie ma.'
    },
    {
      bossId: 'instagramerka', title: 'Na Żywo',
      curriculum: 'Klasa 7: Pisownia „-by”, cząstki, skróty i skrótowce',
      intro: 'Trop Cwaniaka prowadzi przez transmisję na żywo Instagramerki. Złodziej przypadkiem wpada przed jej kamerę.',
      taunt: 'Oooo, tajemniczy nieznajomy na moim live! Napisz komentarz bez ani jednej literówki!',
      outro: 'Tysiące widzów polubiło Złodzieja. Jeden z nich wysłał wiadomość: „Cwaniak jest na dachu szkoły.”'
    },
    {
      bossId: 'cwaniak', title: 'Zdrada Wspólnika',
      curriculum: 'Klasa 8: Pułapki fleksyjne i ortograficzne z egzaminu',
      intro: 'Dach szkoły, zachód słońca. Cwaniak siedzi na skradzionej skrzyni. Ostatni pojedynek na riposty.',
      taunt: 'Złodziej okradziony przez złodzieja – piękne, co? Chcesz skrzynię? To mnie przegadaj!',
      outro: 'Cwaniak oddaje skrzynię i śmieje się. W środku nie ma złota – jest polski słownik z dedykacją Smoka.'
    },
    {
      bossId: 'dyrektorka', title: 'Wina i Kara',
      curriculum: 'Lektury CKE I: Motyw zbrodni i sprawiedliwości w „Balladynie” i „Dziadach cz. II”',
      intro: 'Dyrektorka przyłapuje Złodzieja przy szafie z arkuszami CKE. Czy zbrodnia Balladyny i Złego Pana może ujść płazem?',
      taunt: 'Żaden zły uczynek nie pozostanie w ukryciu! Odpowiedz duchom z Dziadów, jeśli chcesz uniknąć kary!',
      outro: 'Złodziej odzyskuje honor. „Prawdziwy spryt polega na przestrzeganiu zasad”.'
    },
    {
      bossId: 'silaczka', title: 'Wielka Ucieczka z Lupem',
      curriculum: 'Formy Wypowiedzi II: Dynamiczne opowiadanie twórcze z dialogiem i zwrotem akcji',
      intro: 'Siłaczka blokuje bramę wyjściową szkoły! Złodziej musi zrelacjonować swoją historię w formie porywającego opowiadania.',
      taunt: 'Nigdzie nie przejdziesz, dopóki nie opowiesz mi całej ucieczki ze wszystkimi elementami opowiadania!',
      outro: 'Siłaczka bije brawo: „Co za zwrot akcji! Biegnij, jesteś wolny!”. KONIEC SĄGII ZŁODZIEJA!'
    }
  ],

  // ─────────────── ROBOT (3★): Składnia, Budowa Zdania i Interpunkcja ───────────────
  robot: [
    {
      bossId: 'profesor', title: 'Uruchomienie Systemu',
      curriculum: 'Podmiot i orzeczenie – główny rdzeń zdania',
      intro: 'SYSTEM ONLINE. Twórca, Profesor, zapisał Robota do polskiej szkoły. Najpierw jednak – test składniowego oprogramowania.',
      taunt: 'Witaj, mój mały projekcie. Sprawdźmy, czy potrafisz wskazać podmiot i orzeczenie.',
      outro: 'TEST ZALICZONY. Profesor uśmiecha się dumnie. Robot zapisuje nową emocję: „duma?”.'
    },
    {
      bossId: 'szkieleton', title: 'Anatomia vs Obudowa',
      curriculum: 'Zamieńmy słowo 4: Zdanie pojedyncze rozwinięte i równoważnik zdania',
      intro: 'Lekcja biologii. Robot analizuje szkielet zdania dokładnie tak, jak szkielet człowieka.',
      taunt: 'Ty nie masz kości! Udowodnij, że chociaż odróżniasz zdanie od równoważnika zdania!',
      outro: 'BAZA DANYCH ZAKTUALIZOWANA: 206 kości i 3 typy zdań.'
    },
    {
      bossId: 'lekarz', title: 'Diagnoza Niemożliwa',
      curriculum: 'Klasa 5: Przydawka, dopełnienie i okolicznik',
      intro: 'Szkoła wysyła wszystkich na badania. Robot rozkłada każde pytanie Lekarza na części zdania.',
      taunt: 'Proszę powiedzieć „aaa”. Co cię boli, gdzie i od kiedy? Odpowiadaj pełnymi zdaniami!',
      outro: 'Lekarz wpisuje do karty: „Zdrowy. Składnia wzorowa.” Robot uczy się słowa „samopoczucie”.'
    },
    {
      bossId: 'cwaniak', title: 'Błąd Ironii',
      curriculum: 'Klasa 6: Zdania złożone współrzędnie i przecinki przed spójnikami',
      intro: 'Cwaniak zaczepia Robota na przerwie. Łączy zdania spójnikami „ale”, „więc”, „czyli” i próbuje go zmylić.',
      taunt: 'No jasne, ty to jesteś „mega bystry”, ale czy wiesz, gdzie postawić przecinek, blaszaku?',
      outro: 'IRONIA ROZPOZNANA. Robot odpowiada zdaniem przeciwstawnym. Cwaniak milknie.'
    },
    {
      bossId: 'instagramerka', title: 'Próba Przejęcia',
      curriculum: 'Klasa 7: Zdania złożone podrzędnie i imiesłowowy równoważnik zdania',
      intro: 'Instagramerka chce zrobić z Robota swojego bota do lajków. Rzuca na niego skomplikowane zdania podrzędne.',
      taunt: 'Będziesz pisał komentarze za mnie! Chyba że rozbierzesz moje zdania podrzędne na części!',
      outro: 'ATAK ODPARTY. Robot sam decyduje, co pisze. To chyba nazywa się „wolna wola”.'
    },
    {
      bossId: 'silaczka', title: 'Człowiek kontra Maszyna',
      curriculum: 'Klasa 8: Mowa zależna i niezależna oraz zdania wielokrotnie złożone',
      intro: 'Szkolne zawody: najsilniejszy człowiek kontra maszyna. Profesor patrzy z trybun. To ostatni test – nie siły, ale pełnego rozumienia języka.',
      taunt: 'Maszyna nie wie, co to wysiłek! Zamień moje okrzyki na mowę zależną, jeśli potrafisz!',
      outro: 'Robot przegrywa siłowanie na rękę, ale wygrywa rozmowę. Siłaczka podaje mu rękę: „Jesteś jednym z nas.”'
    },
    {
      bossId: 'dyrektorka', title: 'Algorytm Serca',
      curriculum: 'Lektury CKE I: Motyw przyjaźni i przemiany w „Małym Księciu” i „Opowieści wigilijnej”',
      intro: 'Dyrektorka bada pamięć logiczną Robota: „Czy procesor potrafi zrozumieć oswajanie Lisa i przemianę Ebenezera Scrooge’a?”.',
      taunt: 'Maszyny widzą tylko liczby. Czy wiesz, dlaczego najważniejsze jest niewidoczne dla oczu?',
      outro: 'PROCESOR ZAREJESTROWAŁ EMOCJĘ: Wzruszenie. Dyrektorka wpisuje ocenę celującą.'
    },
    {
      bossId: 'smok', title: 'Synteza Świadomości',
      curriculum: 'Formy Wypowiedzi II: Rozprawka filozoficzna – Czy technologia może zastąpić ludzkie serce?',
      intro: 'Finałowe starcie pod szkołą. Smok żąda od Robota pełnej rozprawki o relacji człowieka i technologii.',
      taunt: 'Blaszany wędrowcze, udowodnij tezę, że masz w sobie prawdziwą iskierkę człowieczeństwa!',
      outro: 'Smok z szacunkiem pochyla skrzydła. SYSTEM UPGRADE COMPLETE: 100% CZŁOWIEK. KONIEC SĄGII ROBOTA!'
    }
  ],

  // ─────────────── INVENTOR (4★): Słowotwórstwo i Formy Wypowiedzi ───────────────
  inventor: [
    {
      bossId: 'profesor', title: 'Pierwszy Patent',
      curriculum: 'Notatka, podpis i krótkie formy użytkowe',
      intro: 'Wynalazczyni chce zgłosić swój pierwszy wynalazek. Profesor musi zatwierdzić kartę katalogową – oczywiście po polsku.',
      taunt: 'Ciekawy projekt! Ale jeśli nie potrafisz go opisać, to tak, jakby nie istniał.',
      outro: 'Wniosek zatwierdzony! Patent nr 1: „Automatyczny tłumacz kanapek”.'
    },
    {
      bossId: 'pilkarz', title: 'Odrzutowe Korki',
      curriculum: 'Zamieńmy słowo 4: Ogłoszenie, zaproszenie, dedykacja, instrukcja i opis',
      intro: 'Test nowych odrzutowych butów na boisku. Wynalazczyni musi przygotować ogłoszenie o meczu, zaproszenie dla klasy oraz dedykację w księdze pamiątkowej.',
      taunt: 'Buty z silnikiem?! Pokaż mi zaproszenie, ogłoszenie i dedykację, zanim wejdziesz na boisko!',
      outro: 'Buty wybuchły, ale mecz wygrany. Piłkarz zamawia dwie pary.'
    },
    {
      bossId: 'szkieleton', title: 'Robo-Szkielet',
      curriculum: 'Klasa 5: Plan wydarzeń, opis postaci, list prywatny i kartka z pamiętnika',
      intro: 'Wynalazczyni podłącza silniczki do szkieletu z sali biologii. Szkielet uciekł – trzeba spisać plan wydarzeń!',
      taunt: 'Wolność! Nikt mnie już nie wyłączy! Chyba że ułożysz chronologiczny plan mojej ucieczki!',
      outro: 'Szkieleton wraca na stojak. Wynalazczyni dopisuje do dziennika: „Nie podłączać baterii do kości”.'
    },
    {
      bossId: 'silaczka', title: 'Egzoszkielet',
      curriculum: 'Klasa 6: Słowotwórstwo (podstawa, formant, rodzina wyrazów) i charakterystyka',
      intro: 'Nowy wynalazek: egzoszkielet. Wynalazczyni tworzy nowe słowa tak samo, jak buduje maszyny – z rdzenia i formantów!',
      taunt: 'Siła, siłacz, siłownia, siłować się! Rozłóż moją rodzinę wyrazów na części pierwsze!',
      outro: 'Remis. Siłaczka przyznaje, że egzoszkielet jest „całkiem sztos”.'
    },
    {
      bossId: 'smok', title: 'Ognioodporny Prototyp',
      curriculum: 'Klasa 7: Wyrazy złożone (zrosty, złożenia, zestawienia), podanie i list oficjalny',
      intro: 'Najodważniejszy test: ognioodporny pancerz („ognioodporny” = złożenie!). Jedyne źródło ognia w okolicy? Smok pod szkołą.',
      taunt: 'Przyniosłaś „ognioodporną” puszkę z blachy? Wiesz chociaż, jak powstało to słowo?!',
      outro: 'Pancerz wytrzymał! Smok jest tak zachwycony, że prosi o własny egzemplarz.'
    },
    {
      bossId: 'dyrektorka', title: 'Zakaz Wynalazków',
      curriculum: 'Klasa 8: Rozprawka i Opowiadanie twórcze (teza, argumenty, dialog, lektury)',
      intro: 'Po eksplozji butów i wizycie u Smoka Dyrektorka wydaje zakaz wynalazków. Wynalazczyni musi obronić swój warsztat – pisząc rozprawkę z argumentami lub opowiadanie twórcze z dialogiem!',
      taunt: 'Proszę usiąść. Rozprawka czy opowiadanie? Proszę udowodnić, że opanowała pani obie formy egzaminacyjne!',
      outro: 'Dyrektorka znosi zakaz i otwiera w szkole Pracownię Wynalazków. Kierowniczka: Wynalazczyni.'
    },
    {
      bossId: 'nauczycielka', title: 'Wehikuł Czasu Lektur',
      curriculum: 'Lektury CKE I: Rekonstrukcja świata przedstawionego i bohaterów w lekturach obowiązkowych',
      intro: 'Wynalazczyni buduje Wehikuł Literacki, by przenieść klasę prosto do Soplicowa i do puszczy Balladyny.',
      taunt: 'Wehikuł nie ruszy bez znajomości faktów! Wskaż rekwizyty i motywy z lektur CKE!',
      outro: 'Silnik zaskakuje! Nauczycielka nie kryje podziwu: „Nigdy lekcja polskiego nie była tak ekscytująca”.'
    },
    {
      bossId: 'instagramerka', title: 'Wielka Premiera Patentu',
      curriculum: 'Formy Wypowiedzi II: Oficjalne przemówienie, zaproszenie i artykuł popularnonaukowy',
      intro: 'Finałowy pokaz wynalazków przed całą szkołą i w mediach społecznościowych! Wynalazczyni wygłasza porywające przemówienie.',
      taunt: 'Miliony widzów patrzą! Zbuduj wypowiedź, która zachwyci krytyków i algorytmy!',
      outro: 'Owacje na stojąco! Wynalazek staje się hitem, a Wynalazczyni mistrzynią słowa. KONIEC SĄGII WYNALAZCZYNI!'
    }
  ],

  // ─────────────── WITCH (5★): Środki Stylistyczne, Frazeologia i Kanon Lektur CKE ───────────────
  witch: [
    {
      bossId: 'szkieleton', title: 'Pierwsze Zaklęcie',
      curriculum: 'Rymy, proste porównania i przysłowia',
      intro: 'Czarownica uczy się zaklęć z polskiej księgi. Pierwsze rymowane zaklęcie ożywia… szkielet z sali biologii.',
      taunt: 'Kto mnie obudził?! Jeśli to ty, czarownico, to dokończ moje przysłowia i porównania!',
      outro: 'Szkieleton zasypia z powrotem. Czarownica poprawia w księdze: „kość”, nie „gość”.'
    },
    {
      bossId: 'lekarz', title: 'Zioła czy Tabletki?',
      curriculum: 'Zamieńmy słowo 4: Baśń, legenda, epitet, porównanie i wyraz dźwiękonaśladowczy',
      intro: 'Czarownica opisuje zioła barwnymi epitetami i porównaniami z baśni. Lekarz żąda konkretów.',
      taunt: '„Złocisty napar szumiący jak las”? Proszę nazwać te środki poetyckie po polsku!',
      outro: 'Lekarz przyznaje, że mięta faktycznie pomaga na brzuch. Ale recepty wypisuje dalej on.'
    },
    {
      bossId: 'cwaniak', title: 'Fałszywe Amulety',
      curriculum: 'Klasa 5: Mit, przenośnia (metafora), uosobienie, ożywienie i frazeologizmy',
      intro: 'Cwaniak „wciska kit” uczniom i sprzedaje „magiczne amulety”. Czarownica zna każdy związek frazeologiczny i demaskuje oszusta.',
      taunt: 'Nie rób z igły widły! Znasz w ogóle polskie powiedzenia i metafory?!',
      outro: 'Cwaniak oddaje pieniądze uczniom. Amulety okazały się nakrętkami od butelek.'
    },
    {
      bossId: 'nauczycielka', title: 'Trzy Księgi Literatury',
      curriculum: 'Klasa 6: Epika, liryka, dramat + gatunki (ballada, fraszka, nowela, tren)',
      intro: 'Czarownica odkrywa trzy wielkie księgi literatury: Epikę, Lirykę i Dramat oraz gatunki literackie. Nauczycielka sprawdza jej wiedzę.',
      taunt: 'Kto mówi w wierszu, a kto opowiada w powieści? Odróżnij balladę od noweli i fraszki!',
      outro: 'Szóstka z teorii literatury – pierwsza w historii klasy.'
    },
    {
      bossId: 'profesor', title: 'Zwoje Starożytnych Mistrzów',
      curriculum: 'Klasa 7: Zaawansowane środki stylistyczne (alegoria, symbol, apostrofa, oksymoron)',
      intro: 'W archiwum szkoły Czarownica odnajduje starożytne zwoje z poezją Kochanowskiego i Mickiewicza. Profesor strzeże ich pieczęci.',
      taunt: 'Alegoria a symbol – czy odróżnisz ich magię, zanim pergamin obróci się w pył?!',
      outro: 'Profesor chyli czoła: „Twoja wiedza o poezji przewyższa wielu uczonych”.'
    },
    {
      bossId: 'smok', title: 'Pieczęć Smoczej Magii',
      curriculum: 'Klasa 8: Egzamin ósmoklasisty CKE – analiza tekstu literackiego i nieliterackiego',
      intro: 'Podziemia kryją najstarszą tajemnicę szkoły. Czarownica staje przed Smokiem uzbrojona w pióro i wiedzę z arkuszy CKE.',
      taunt: 'Płomień prawdy spali każde zmyślenie! Pokaż mi bezbłędną analizę tekstu źródłowego!',
      outro: 'Smok gaśnie w łagodny płomień lampy oliwnej: „Pieczęć należy do ciebie”.'
    },
    {
      bossId: 'dyrektorka', title: 'Kanon Lektur I: Bohaterowie i Cytaty',
      curriculum: 'Lektury CKE I: Bohaterowie, fabuła i cytaty (Balladyna, Dziady cz. II, Mały Książę, Kamienie na szaniec, Opowieść wigilijna, Pan Tadeusz)',
      intro: 'Dyrektorka otwiera Wielką Księgę Lektur Obowiązkowych. Aby przejść dalej, Czarownica musi bezbłędnie rozpoznać bohaterów, wydarzenia i cytaty.',
      taunt: 'Balladyna, Guślarz, Mały Książę, Rudy, Scrooge, Ksiądz Robak… Sprawdźmy, czy naprawdę czytałaś lektury obowiązkowe!',
      outro: 'Dyrektorka z uznaniem zamyka dziennik: „Znasz treść i bohaterów każdej lektury obowiązkowej!”.'
    },
    {
      bossId: 'instagramerka', title: 'Kanon Lektur II: Motywy, Symbole i Plakaty',
      curriculum: 'Formy Wypowiedzi II: Motywy literackie, symbole, plakaty i opowiadanie twórcze z elementami magii',
      intro: 'Finałowy pojedynek czarodziejek! Instagramerka tworzy mylące plakaty i fałszywe interpretacje. Czarownica musi odczytać symbole i dobrać motywy literackie.',
      taunt: 'Same streszczenia ci nie pomogą! Rozszyfruj symbole na moich plakatach i połącz lektury wspólnym motywem!',
      outro: 'Filtry gasną, a prawdziwe znaczenie lektur zostaje w głowie na zawsze. Prawdziwa magia słowa wygrała! KONIEC SĄGII CZAROWNICY.'
    }
  ],

  // ─────────────── JESTER (6★): Czytanie ze Zrozumieniem, Synonimy, Stylistyka i Egzamin ───────────────
  jester: [
    {
      bossId: 'pilkarz', title: 'Cyrk na Boisku',
      curriculum: 'Synonimy (wyrazy bliskoznaczne) i antonimy (przeciwstawne)',
      intro: 'Błazen wchodzi na boisko w czapce z dzwoneczkami i zastępuje każde słowo synonimem albo antonimem. Piłkarz traci cierpliwość.',
      taunt: 'To jest poważny mecz, klaunie! Mów prosto: szybki czy wolny, wygrana czy porażka?!',
      outro: 'Piłkarz próbuje zachować powagę… i parska śmiechem. Pierwsza wygrana Błazna.'
    },
    {
      bossId: 'lekarz', title: 'Śmiechoterapia',
      curriculum: 'Zamieńmy słowo 4: Znaczenie dosłowne i przenośne, wieloznaczność słów',
      intro: 'Błazen bierze każde pytanie Lekarza dosłownie („Czy ma pan język za zębami?”). Lekarz wyczuwa podstęp.',
      taunt: '„Złote serce” i „kamienna twarz” to nie są choroby! Odróżnij znaczenie dosłowne od przenośnego!',
      outro: 'Lekarz wypisuje receptę: „Śmiech trzy razy dziennie”. Na klasówkę jednak trzeba iść.'
    },
    {
      bossId: 'cwaniak', title: 'Król Ripost',
      curriculum: 'Klasa 5: Fakt a opinia, intencja wypowiedzi, humor i ironia',
      intro: 'Cwaniak uważa się za najzabawniejszego w szkole. Błazen wyzywa go na pojedynek: co jest faktem, a co tylko opinią?',
      taunt: 'Ty? Zabawny? Udowodnij, że odróżniasz fakty od moich prześmiewczych opinii!',
      outro: 'Cała przerwa śmieje się z ripost Błazna. Cwaniak oddaje koronę króla żartów.'
    },
    {
      bossId: 'instagramerka', title: 'Bitwa na Virale',
      curriculum: 'Klasa 6: Style językowe (potoczny, oficjalny, naukowy, artystyczny)',
      intro: 'Nagranie z pojedynku ripost robi się viralem. Instagramerka wyzywa Błazna na szybką zmianę stylów wypowiedzi na żywo.',
      taunt: 'Potrafisz mówić tylko slangiem? Powiedz to samo w stylu naukowym i oficjalnym na moim live!',
      outro: 'Wspólny live bije rekord szkoły. Instagramerka niechętnie przyznaje: „Okej, jesteś śmieszny”.'
    },
    {
      bossId: 'silaczka', title: 'Siła Dowcipu',
      curriculum: 'Klasa 7: Etykieta językowa, perswazja i manipulacja językowa',
      intro: 'Błazen rzuca żartami na siłowni, ale Siłaczka uczy go, że żart nie może ranić ani manipulować innymi.',
      taunt: 'Śmiejemy się razem z kimś, a nie z kogoś! Pokaż mi elegancką ripostę z klasą!',
      outro: 'Siłaczka śmieje się do łez. „To się nazywa humor na poziomie!”'
    },
    {
      bossId: 'nauczycielka', title: 'Misja Niemożliwa',
      curriculum: 'Klasa 8: Trening egzaminacyjny – czytanie ze zrozumieniem, streszczenie i parafraza',
      intro: 'Najsurowsza Nauczycielka w szkole nie uśmiechnęła się od dwudziestu lat. Błazen podejmuje wyzwanie: zdać jej egzamin ósmoklasisty na 100% i rozśmieszyć ją błyskotliwą puentą.',
      taunt: 'Żarty to strata czasu. Jeśli chcesz mnie rozśmieszyć, rozwiąż cały test bez ani jednego błędu.',
      outro: 'Nauczycielka… się śmieje. Cała klasa zamiera, a potem bije brawo.'
    },
    {
      bossId: 'profesor', title: 'Błazeńskie Zwierciadło Lektur',
      curriculum: 'Lektury CKE I: Wady bohaterów lektur w krzywym zwierciadle (Scrooge, Balladyna, Pijak)',
      intro: 'Profesor zaprasza Błazna na analizę satyryczną postaci literackich. Czy humor pomoże zrozumieć ich błędy?',
      taunt: 'Pokaż mi przez pryzmat satyry skąpstwo Scrooge’a i próżność Balladyny!',
      outro: 'Profesor bije brawo: „Śmiech to najlepszy nauczyciel mądrości!”.'
    },
    {
      bossId: 'smok', title: 'Królewska Puenta',
      curriculum: 'Formy Wypowiedzi II: Rozprawka i opowiadanie twórcze z błyskotliwą puentą',
      intro: 'Finałowe wyzwanie Błazna! Sam Smok żąda wystąpienia, które udowodni, że język polski potrafi poruszyć serce i wywołać uśmiech.',
      taunt: 'Smoki nie śmieją się od tysiąca lat. Przekonaj mnie swoją tezą i puentą!',
      outro: 'Smok zanosi się gromkim śmiechem, aż drżą mury szkoły! Błazen zostaje Królewskim Mistrzem Słowa. KONIEC SĄGII BŁAZNA!'
    }
  ]
};

export function getStoryEpisode(heroId, pip) {
  const list = STORY[heroId] || STORY.warrior;
  const idx = Math.max(1, Math.min(8, Number(pip) || 1)) - 1;
  return { pip: idx + 1, difficultyTag: EPISODE_LEVELS[idx], ...list[idx] };
}
