// Siłaczka – Boss: 74 HP, bije 4 | Zwykła: 36 HP, bije 2
// Egzamin z gramatyki Klasy 7 i fizjologii sportu:
// imiesłowy przymiotnikowe i przysłówkowe, równoważniki zdań (tożsamość podmiotu),
// stopniowanie nieregularne, biochemia wysiłku mięśniowego i frazeologia sportowa.

export const SILACZKA_CHALLENGES = [
  {
    type: 'quiz',
    title: 'GRAMATYKA KLASY 7 • IMIESŁÓW PRZYSŁÓWKOWY',
    prompt: 'Wskaż zdanie zawierające poprawnie utworzony imiesłów przysłówkowy współczesny (-ąc):',
    options: [
      { text: 'Dźwigając sztangę na pomoście, zawodnik wykonał głęboki wydech przeponowy.', correct: true },
      { text: 'Dźwigający ciężką sztangę zawodnik odłożył cały gryf na stalowe stojaki.', correct: false },
      { text: 'Podniósłszy wielką sztangę, zmęczony podszedł powoli do trenera po napój.', correct: false },
      { text: 'Stalowa sztanga została dźwignięta z olbrzymim wysiłkiem przez atletę na sali.', correct: false }
    ],
    hint: 'Imiesłów przysłówkowy współczesny kończy się na -ąc i odpowiada na pytanie: jak? kiedy?'
  },
  {
    type: 'matchup',
    title: 'IMIESŁOWY • CZTERY KATEGORIE GRAMATYCZNE',
    prompt: 'Dopasuj formę imiesłowu do jego kategorii gramatycznej:',
    pairs: [
      { left: 'Biegnący, trenujący', right: 'Imiesłów przymiotnikowy czynny (końcówka -ący)' },
      { left: 'Podniesiony, zrobiony, zgięty', right: 'Imiesłów przymiotnikowy bierny (-ny, -ty, -ony)' },
      { left: 'Skacząc, wiosłując, ćwicząc', right: 'Imiesłów przysłówkowy współczesny (końcówka -ąc)' },
      { left: 'Wyskoczywszy, podbiegłszy', right: 'Imiesłów przysłówkowy uprzedni (-wszy, -łszy)' }
    ]
  },
  {
    type: 'sorting',
    title: 'STOPNIOWANIE PRZYMIOTNIKÓW • SYNTETYCZNE A OPISOWE',
    prompt: 'Przypisz przymiotniki do sposobu ich stopniowania w języku polskim:',
    categories: ['STOPNIOWANIE SYNTETYCZNE (PRZYROSTKI -SZY, NAJ-)', 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)'],
    items: [
      { text: 'Silny – silniejszy – najsilniejszy', category: 'STOPNIOWANIE SYNTETYCZNE (PRZYROSTKI -SZY, NAJ-)' },
      { text: 'Skomplikowany – bardziej skomplikowany', category: 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)' },
      { text: 'Giętki – giętszy – najgiętszy', category: 'STOPNIOWANIE SYNTETYCZNE (PRZYROSTKI -SZY, NAJ-)' },
      { text: 'Wytrenowany – najbardziej wytrenowany', category: 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)' }
    ]
  },
  {
    type: 'quiz',
    title: 'SKŁADNIA • BŁĄD W RÓWNOWAŻNIKU ZDANIA',
    prompt: 'Wskaż zdanie, w którym popełniono KARDYNALNY BŁĄD składniowy (naruszenie zasady tożsamości podmiotu):',
    options: [
      { text: 'Robiąc pompki na macie, nagle zabolał go nadgarstek.', correct: true },
      { text: 'Robiąc pompki na macie, zawodnik kontrolował napięcie mięśni brzucha.', correct: false },
      { text: 'Biegnąc do bloków startowych, sprinter skupił się na sygnale pistoletu.', correct: false },
      { text: 'Wykonawszy rozgrzewkę, gimnastyczka podeszła do równoważni.', correct: false }
    ],
    hint: 'W zdaniu błędnym nadgarstek robił pompki! Podmiot «nadgarstek» nie wykonuje czynności «robiąc».'
  },
  {
    type: 'matchup',
    title: 'FIZJOLOGIA SPORTU • POJĘCIA TRENINGOWE',
    prompt: 'Połącz termin biologiczny z jego znaczeniem dla kondycji sportowca:',
    pairs: [
      { left: 'Aktyna i miozyna', right: 'Białka kurczliwe odpowiedzialne za mechaniczny skurcz włókien mięśniowych' },
      { left: 'Kwas mlekowy', right: 'Produkt beztlenowego rozpadu glukozy podczas maksymalnego zrywu' },
      { left: 'Regeneracja powysiłkowa', right: 'Czas odbudowy mikrourazów mięśniowych i uzupełnienia glikogenu' },
      { left: 'Pojemność płuc (VC)', right: 'Maksymalna objętość powietrza wydmuchana po najgłębszym wdechu' }
    ]
  },
  {
    type: 'sorting',
    title: 'FRAZEOLOGIA SPORTOWA • ŹRÓDŁA I SYNONIMY',
    prompt: 'Rozdziel frazeologizmy na oznaczające determinację i walkę oraz oznaczające poddanie się:',
    categories: ['DETERMINACJA, WALKA I SIŁA DUCHA', 'REZYGNACJA I ODPUSZCZENIE WALKI'],
    items: [
      { text: 'Stanąć w szranki (podjąć otwartą rywalizację)', category: 'DETERMINACJA, WALKA I SIŁA DUCHA' },
      { text: 'Rzucić ręcznik na ring (poddać pojedynek)', category: 'REZYGNACJA I ODPUSZCZENIE WALKI' },
      { text: 'Dać z siebie wszystko do ostatniego tchu', category: 'DETERMINACJA, WALKA I SIŁA DUCHA' },
      { text: 'Złożyć broń i spasować przed metą', category: 'REZYGNACJA I ODPUSZCZENIE WALKI' }
    ]
  },
  {
    type: 'quiz',
    title: 'STOPNIOWANIE NIEREGULARNE • WYJĄTKI',
    prompt: 'Wskaż bezbłędny szereg stopniowania przymiotnika «lekki»:',
    options: [
      { text: 'Lekki – lżejszy – najlżejszy', correct: true },
      { text: 'Lekki – lekszy – najlekszy', correct: false },
      { text: 'Lekki – bardziej lekki – najbardziej lekki', correct: false },
      { text: 'Lekki – leżejszy – najleżejszy', correct: false }
    ],
    hint: 'W stopniu wyższym zachodzi historyczna wymiana k:ż: lekki -> lżejszy.'
  },
  {
    type: 'quiz',
    title: 'TRYB ROZKAZUJĄCY • KOMENDY TRENERSKIE',
    prompt: 'Wskaż formę czasownika w 2. osobie liczby mnogiej trybu rozkazującego od czasownika «biec»:',
    options: [
      { text: 'Biegnijcie!', correct: true },
      { text: 'Biegniecie!', correct: false },
      { text: 'Bieglibyście!', correct: false },
      { text: 'Będziemy biec!', correct: false }
    ],
    hint: 'Forma z końcówką rozkazującą -ijcie: Biegnijcie!'
  },
  {
    type: 'sorting',
    title: 'TRYBY CZASOWNIKA • GRAMATYKA TRENINGU',
    prompt: 'Przypisz zdania do właściwego trybu gramatycznego:',
    categories: ['TRYB ROZKAZUJĄCY', 'TRYB PRZYPUSZCZAJĄCY (WARUNKOWY)'],
    items: [
      { text: 'Podnieście sztangę do poziomu klatki piersiowej!', category: 'TRYB ROZKAZUJĄCY' },
      { text: 'Gdybyśmy mieli więcej siły, wygralibyśmy te zawody.', category: 'TRYB PRZYPUSZCZAJĄCY (WARUNKOWY)' },
      { text: 'Zróbcie dwadzieścia pompek na rozgrzewkę!', category: 'TRYB ROZKAZUJĄCY' },
      { text: 'Chętnie potrenowałabym dziś technikę rzutu oszczepem.', category: 'TRYB PRZYPUSZCZAJĄCY (WARUNKOWY)' }
    ]
  },
  {
    type: 'quiz',
    title: 'ORTOGRAFIA • PISOWNIA «NIE» Z IMIESŁOWAMI',
    prompt: 'Wskaż zdanie, w którym poprawnie zapisano partykułę «nie» z imiesłowem przymiotnikowym:',
    options: [
      { text: 'Na macie stanął niepokonany dotąd zapaśnik o żelaznym uścisku.', correct: true },
      { text: 'Na macie stanął nie pokonany dotąd zapaśnik o żelaznym uścisku.', correct: false },
      { text: 'Zawodnik był nie przygotowany do dzisiejszego wieloboju.', correct: false },
      { text: 'To był zupełnie nie udany skok o tyczce na stadionie.', correct: false }
    ],
    hint: 'Zgodnie z regułą ortograficzną «nie» z imiesłowami przymiotnikowymi piszemy łącznie: niepokonany.'
  },
  {
    type: 'matchup',
    title: 'FIZJOLOGIA SPORTU • POJĘCIA NAUKOWE',
    prompt: 'Połącz pojęcie z dziedziny treningu sportowego z jego biologiczną definicją:',
    pairs: [
      { left: 'Pułap tlenowy (VO2max)', right: 'Maksymalna objętość tlenu, jaką organizm sportowca może pochłonąć w minutę' },
      { left: 'Kwas mlekowy (mleczan)', right: 'Produkt beztlenowego rozpadu glukozy podczas maksymalnego zrywu siłowego' },
      { left: 'Hipertrofia mięśniowa', right: 'Zwiększenie objętości i przekroju poprzecznego włókien mięśniowych pod wpływem ciężaru' },
      { left: 'Tętno spoczynkowe', right: 'Liczba uderzeń serca na minutę w stanie pełnego odpoczynku i relaksu' }
    ]
  },
  {
    type: 'sorting',
    title: 'STOPNIOWANIE PRZYMIOTNIKÓW • TYPY',
    prompt: 'Przypisz przymiotniki do stopniowania syntetycznego (prostego) lub opisowego:',
    categories: ['STOPNIOWANIE SYNTETYCZNE (-SZY, NAJ-)', 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)'],
    items: [
      { text: 'silny – silniejszy – najsilniejszy', category: 'STOPNIOWANIE SYNTETYCZNE (-SZY, NAJ-)' },
      { text: 'kolorowy – bardziej kolorowy – najbardziej kolorowy', category: 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)' },
      { text: 'szybki – szybszy – najszybszy', category: 'STOPNIOWANIE SYNTETYCZNE (-SZY, NAJ-)' },
      { text: 'skomplikowany – bardziej skomplikowany', category: 'STOPNIOWANIE OPISOWE (BARDZIEJ, NAJBARDZIEJ)' }
    ]
  },
  {
    type: 'quiz',
    title: 'ETYKA SPORTOWA • ZASADA FAIR PLAY',
    prompt: 'Co oznacza postawa «Fair Play» w sporcie i w codziennym życiu szkolnym?',
    options: [
      { text: 'Czystą, szlachetną rywalizację z poszanowaniem przeciwnika, sędziów i zasad, bez oszustwa i dopingu', correct: true },
      { text: 'Bezwzględne dążenie do triumfu za wszelką cenę, nawet poprzez brutalną przemoc i symulowanie fauli', correct: false },
      { text: 'Wulgarne obrażanie kolegów i rywali po przegranym meczu na korytarzu szkolnym przed całą widownią', correct: false },
      { text: 'Tchórzliwą ucieczkę z boiska sportowego w trakcie gry, gdy przeciwnik prowadzi wysoko w punktacji', correct: false }
    ],
    hint: 'Fair Play to szacunek, uczciwość i godność w zwycięstwie oraz pokora w porażce.'
  },
  {
    type: 'matchup',
    title: 'FRAZEOLOGIA OLIMPIJSKA • HISTORIA I MIT',
    prompt: 'Dopasuj frazeologizm olimpijski do jego metaforycznego znaczenia:',
    pairs: [
      { left: 'Laur olimpijski', right: 'Najwyższy zaszczyt, wieczna sława i triumf w mistrzowskiej rywalizacji' },
      { left: 'Przekazać pałeczkę', right: 'Przekazać odpowiedzialność, tradycję lub kierownictwo swojemu następcy' },
      { left: 'Być na finiszu', right: 'Zbliżać się do ostatecznego zakończenia długiego, wyczerpującego zadania' },
      { left: 'Przekroczyć Rubikon', right: 'Podjąć nieodwracalną, odważną decyzję, od której nie ma już odwrotu' }
    ]
  },
  {
    type: 'sorting',
    title: 'TRENING AEROBOWY A ANAEROBOWY',
    prompt: 'Przypisz dyscypliny sportowe do wysiłku tlenowego (wytrzymałościowego) lub beztlenowego (siłowego):',
    categories: ['TRENING TLENOWY (AEROBOWY)', 'TRENING BEZTLENOWY (ANAEROBOWY)'],
    items: [
      { text: 'Bieg maratoński i długodystansowy trucht', category: 'TRENING TLENOWY (AEROBOWY)' },
      { text: 'Rwanie ciężaru na pomoście (podnoszenie ciężarów)', category: 'TRENING BEZTLENOWY (ANAEROBOWY)' },
      { text: 'Pływanie rekreacyjne na dystansie 1500 m', category: 'TRENING TLENOWY (AEROBOWY)' },
      { text: 'Sprint na 60 metrów na pełnej prędkości', category: 'TRENING BEZTLENOWY (ANAEROBOWY)' }
    ]
  },
  {
    type: 'quiz',
    title: 'ZDROWIE I HIGIENA • PIRAMIDA AKTYWNOŚCI',
    prompt: 'Co stanowi absolutną podstawę nowoczesnej piramidy zdrowego żywienia i stylu życia?',
    options: [
      { text: 'Codzienna aktywność fizyczna (minimum 60 minut ruchu), sen oraz picie wody', correct: true },
      { text: 'Codzienne bezmyślne jedzenie tłustych chipsów i słodyczy przed telewizorem', correct: false },
      { text: 'Picie wyłącznie przesłodzonych, kolorowych napojów gazowanych i energetyków', correct: false },
      { text: 'Nieprzerwane siedzenie bez ruchu przed monitorem przez 12 godzin na dobę', correct: false }
    ],
    hint: 'U podstawy piramidy zdrowia znajduje się regularny ruch, regenerujący sen i odpowiednie nawodnienie.'
  },
  {
    type: 'matchup',
    title: 'SKŁADNIA SPORTOWA • REKCJA CZASOWNIKÓW',
    prompt: 'Połącz czasownik z poprawną formą dopełnienia w zdaniu sportowym:',
    pairs: [
      { left: 'Obronić (kogo? co?)', right: 'groźny rzut karny rywala w doliczonym czasie gry' },
      { left: 'Przestrzegać (kogo? czego?)', right: 'regulaminu sali gimnastycznej i poleceń trenera' },
      { left: 'Cieszyć się z (kogo? czego?)', right: 'zdobytego medalu i rekordu życiowego na bieżni' },
      { left: 'Wskoczyć na (kogo? co?)', right: 'najwyższy stopień podium mistrzostw szkoły' }
    ]
  },
  {
    type: 'sorting',
    title: 'REGENERACJA POTRENINGOWA • ZWYCZAJE',
    prompt: 'Przypisz nawyki do wspierających regenerację mięśni lub niszczących formę:',
    categories: ['NAWYKI WSPIERAJĄCE REGENERACJĘ', 'BŁĘDY NISZCZĄCE FORMĘ SPORTOWĄ'],
    items: [
      { text: 'Rozciąganie powysiłkowe (stretching) i chłodny prysznic', category: 'NAWYKI WSPIERAJĄCE REGENERACJĘ' },
      { text: 'Zarywanie nocy i spanie mniej niż 5 godzin na dobę', category: 'BŁĘDY NISZCZĄCE FORMĘ SPORTOWĄ' },
      { text: 'Spożycie pełnowartościowego posiłku bogatego w białko i węglowodany', category: 'NAWYKI WSPIERAJĄCE REGENERACJĘ' },
      { text: 'Picie napojów energetycznych zamiast wody po ciężkim wysiłku', category: 'BŁĘDY NISZCZĄCE FORMĘ SPORTOWĄ' }
    ]
  },
  {
    type: 'quiz',
    title: 'BIOMECHANIKA • SKURCZ IZOMETRYCZNY',
    prompt: 'Na czym polega skurcz izometryczny mięśnia (np. podczas ćwiczenia «deska» / plank)?',
    options: [
      { text: 'Wzrasta napięcie mięśniowe, lecz długość mięśnia nie ulega zmianie (brak ruchu w stawie)', correct: true },
      { text: 'Włókno mięśniowe gwałtownie skraca się i prostuje zgiętą kończynę z bardzo dużą prędkością', correct: false },
      { text: 'Cały mięsień natychmiastowo i całkowicie wiotczeje, tracąc jakąkolwiek zdolność kurczenia', correct: false },
      { text: 'Mięsień szkieletowy pod wpływem ciężaru zamienia się trwale w twardą tkankę chrzęstną ciała', correct: false }
    ],
    hint: 'W skurczu izometrycznym mięsień napina się statycznie, utrzymując pozycję ciała bez przemieszczania stawu.'
  },
  {
    type: 'matchup',
    title: 'SPORTY WALKI I ZAPASY • FRAZEOLOGIA SIŁY',
    prompt: 'Dopasuj zwrot zapaśniczy do jego metaforycznego znaczenia:',
    pairs: [
      { left: 'Rozłożyć na łopatki', right: 'Całkowicie pokonać rywala argumentami lub działaniem' },
      { left: 'Rzucić na deski (nokaut)', right: 'Doprowadzić przeciwnika do stanu bezsilności mocnym ciosem' },
      { left: 'Mieć żelazne nerwy', right: 'Wykazywać niezłomny spokój i opanowanie w najtrudniejszej chwili' },
      { left: 'Być na fali wznoszącej', right: 'Osiągać serię sukcesów i dynamiczny rozwój swoich umiejętności' }
    ]
  }
];

export const SILACZKA_ENCOUNTER = {
  type: 'silaczka_workout',
  titlePl: 'Siłaczka (74 HP)',
  subtitlePl: 'BOSS: SZKOLNA SIŁOWNIA I ARENA MISTRZÓW',
  icon: './assets/Postacie/Silaczka.png',
  enemyName: 'silaczka',
  enemyMaxHp: 74,
  enemyDamage: 4,
  descriptionPl: 'Mistrzyni Szkolnej Siłowni testuje Twoją znajomość imiesłowów, stopniowania, tożsamości podmiotu i fizjologii sportu! Każdy błąd kosztuje 4 HP!',
  challenges: SILACZKA_CHALLENGES
};
