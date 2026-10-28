// Szkieleton - Model anatomiczny z sali biologicznej
// Boss: 50 HP, bije po 3 HP | Zwykły: 24 HP, bije po 2 HP
// Szczegółowa podstawa programowa z biologii i języka polskiego:
// układ szkieletowy, połączenia kości, stawy, narządy wewnętrzne, zmysły,
// składniki krwi, frazeologizmy medyczne oraz fleksja przypadków (narzędnik, biernik, dopełniacz).

export const SZKIELETON_BOSS_CHALLENGES = [
  {
    type: 'matchup',
    title: 'SZKIELET OSIOWY • OCHRONA NARZĄDÓW',
    prompt: 'Połącz elementy szkieletu osiowego z ich funkcją biologiczną:',
    pairs: [
      { left: 'Mózgoczaszka', right: 'Chroni delikatną tkankę mózgową przed urazami mechanicznymi' },
      { left: 'Klatka piersiowa z mostkiem', right: 'Elastycznie osłania serce, płuca i naczynia krwionośne' },
      { left: 'Kręgosłup z dyskami', right: 'Stanowi oś ciała i amortyzuje wstrząsy przy chodzeniu' },
      { left: 'Miednica z kością krzyżową', right: 'Podpiera narządy jamy brzusznej i łączy tułów z kończynami' }
    ]
  },
  {
    type: 'quiz',
    title: 'ANATOMIA KOŃCZYNY DOLNEJ • BIOMECHANIKA',
    prompt: 'Która kość jest najdłuższą, najmasywniejszą i najbardziej wytrzymałą kością w ciele człowieka?',
    options: [
      { text: 'Kość udowa', correct: true },
      { text: 'Kość ramienna', correct: false },
      { text: 'Kość piszczelowa', correct: false },
      { text: 'Kość strzałkowa', correct: false }
    ],
    hint: 'Łączy miednicę ze stawem kolanowym w udzie.'
  },
  {
    type: 'matchup',
    title: 'KOŃCZYNA GÓRNA I DOLNA • ANATOMIA PORÓWNAWCZA',
    prompt: 'Dopasuj kość kończyny do jej położenia w ciele człowieka:',
    pairs: [
      { left: 'Kość ramienna', right: 'Główna kość ramienia łącząca bark z łokciem' },
      { left: 'Kość łokciowa i promieniowa', right: 'Dwie kości tworzące przedramię człowieka' },
      { left: 'Kość piszczelowa i strzałkowa', right: 'Dwie kości tworzące podudzie (goleń)' },
      { left: 'Rzepka', right: 'Kość trzeszczkowa chroniąca od przodu staw kolanowy' }
    ]
  },
  {
    type: 'sorting',
    title: 'POŁĄCZENIA KOŚCI • ŚCISŁE A RUCHOME',
    prompt: 'Przypisz połączenia kości do odpowiedniego typu:',
    categories: ['POŁĄCZENIA ŚCISŁE (NIERUCHOME)', 'POŁĄCZENIA RUCHOME (STAWY)'],
    items: [
      { text: 'Szwy czaszkowe łączące kości czaszki', category: 'POŁĄCZENIA ŚCISŁE (NIERUCHOME)' },
      { text: 'Staw kolanowy z torebką i więzadłami', category: 'POŁĄCZENIA RUCHOME (STAWY)' },
      { text: 'Zrośnięte kręgi kości krzyżowej', category: 'POŁĄCZENIA ŚCISŁE (NIERUCHOME)' },
      { text: 'Staw ramienny o budowie kulistej', category: 'POŁĄCZENIA RUCHOME (STAWY)' }
    ]
  },
  {
    type: 'quiz',
    title: 'NARZĄD SŁUCHU • NAJMNIEJSZA KOŚĆ',
    prompt: 'Który element ucha środkowego zawiera najmniejszą kość w całym ciele człowieka (o długości ok. 3 mm)?',
    options: [
      { text: 'Kosteczki słuchowe: młoteczek, kowadełko i strzemiączko', correct: true },
      { text: 'Błona bębenkowa oddzielająca przewód słuchowy', correct: false },
      { text: 'Kanały półkoliste błędnika odpowiedzialne za równowagę', correct: false },
      { text: 'Trąbka słuchowa Eustachiusza wyrównująca ciśnienie', correct: false }
    ],
    hint: 'Strzemiączko to najmniejsza kość ludzkiego szkieletu.'
  },
  {
    type: 'matchup',
    title: 'UKŁAD KRĄŻENIA • FIZJOLOGIA I KREW',
    prompt: 'Połącz naczynia i składniki układu krążenia z ich rolą biologiczną:',
    pairs: [
      { left: 'Tętnice', right: 'Grube, elastyczne naczynia prowadzące krew z serca pod wysokim ciśnieniem' },
      { left: 'Żyły z zastawkami', right: 'Prowadzą krew do serca, a zastawki zapobiegają jej cofaniu się w dół' },
      { left: 'Erytrocyty (krwinki czerwone)', right: 'Transportują tlen do komórek dzięki barwnikowi hemoglobinie' },
      { left: 'Trombocyty (płytki krwi)', right: 'Odpowiadają za krzepnięcie krwi i zasklepianie ran naczyniowych' }
    ]
  },
  {
    type: 'sorting',
    title: 'KLATKA PIERSIOWA • RODZAJE ŻEBER',
    prompt: 'Rozdziel żebra według sposobu ich połączenia z mostkiem:',
    categories: ['ŻEBRA PRAWDZIWE (PARY I–VII)', 'ŻEBRA RZEKOME I WOLNE (PARY VIII–XII)'],
    items: [
      { text: 'Pierwsze 7 par łączących się bezpośrednio z mostkiem', category: 'ŻEBRA PRAWDZIWE (PARY I–VII)' },
      { text: 'Pary VIII–X połączone z chrząstką żebra wyższego', category: 'ŻEBRA RZEKOME I WOLNE (PARY VIII–XII)' },
      { text: 'Pary XI i XII kończące się swobodnie w mięśniach brzucha', category: 'ŻEBRA RZEKOME I WOLNE (PARY VIII–XII)' },
      { text: 'Żebra tworzące bezpośredni łuk chrzęstny z mostkiem', category: 'ŻEBRA PRAWDZIWE (PARY I–VII)' }
    ]
  },
  {
    type: 'quiz',
    title: 'UKŁAD NERWOWY • OŚRODEK RÓWNOWAGI',
    prompt: 'Która część mózgowia odpowiada bezpośrednio za utrzymanie równowagi ciała, napięcie mięśni i koordynację ruchową?',
    options: [
      { text: 'Móżdżek odpowiadający za koordynację ruchową i równowagę ciała', correct: true },
      { text: 'Płat potyliczny kory mózgu odpowiedzialny za przetwarzanie wzroku', correct: false },
      { text: 'Rdzeń przedłużony sterujący podstawowymi odruchami wegetatywnymi', correct: false },
      { text: 'Przysadka mózgowa wydzielająca hormony dokrewne do całego krwioobiegu', correct: false }
    ],
    hint: 'Znajduje się z tyłu czaszki pod półkulami mózgowymi.'
  },
  {
    type: 'matchup',
    title: 'FRAZEOLOGIZMY ANATOMICZNE • JĘZYK POLSKI',
    prompt: 'Połącz związek frazeologiczny z jego metaforycznym znaczeniem:',
    pairs: [
      { left: 'Kość niezgody', right: 'Główna przyczyna konfliktu, kłótni lub sporu między ludźmi' },
      { left: 'Mieć serce na dłoni', right: 'Być człowiekiem niezwykle szczerym, otwartym i życzliwym' },
      { left: 'Patrzeć przez palce', right: 'Świadomie przymykać oko na czyjeś drobne błędy i przewinienia' },
      { left: 'Trzymać rękę na pulsie', right: 'Nieustannie i czujnie kontrolować bieg ważnych wydarzeń' }
    ]
  },
  {
    type: 'quiz',
    title: 'FLEKSJA I SKŁADNIA • DOLEGLIWOŚCI',
    prompt: 'Wskaż zdanie o w pełni poprawnej składni i fleksji w rozmowie o zdrowiu:',
    options: [
      { text: 'Od wczoraj boli mnie prawe kolano i mam obrzęk w okolicy rzepki.', correct: true },
      { text: 'Od wczoraj bolę prawe kolano i mam wielki obrzęk wokoło rzepki nogi.', correct: false },
      { text: 'Boli mi prawe kolano i czuję kolano bardzo bolące przy zginaniu stopy.', correct: false },
      { text: 'Mam kolano bolane i mocno spuchnięte od wczorajszego meczu na hali.', correct: false }
    ],
    hint: 'Konstrukcja orzeczenia nieosobowego: «Boli mnie + Mianownik».'
  },
  {
    type: 'quiz',
    title: 'UKŁAD ODDECHOWY • WYMIANA GAZOWA',
    prompt: 'W którym elemencie układu oddechowego zachodzi właściwa wymiana gazowa (dyfuzja tlenu i dwutlenku węgla)?',
    options: [
      { text: 'W pęcherzykach płucnych oplecionych gęstą siecią naczyń włosowatych', correct: true },
      { text: 'W krtani wyposażonej w fałdy głosowe, głośnię oraz ruchomą nagłośnię', correct: false },
      { text: 'W tchawicy zbudowanej ze sprężystych, chrzęstnych półpierścieni cewy', correct: false },
      { text: 'W jamie nosowej nawilżającej i oczyszczającej wdychane powietrze z pyłu', correct: false }
    ],
    hint: 'Pęcherzyki płucne tworzą ogromną powierzchnię oddechową płuc.'
  },
  {
    type: 'sorting',
    title: 'ODCINKI KRĘGOSŁUPA • TOPOGRAFIA',
    prompt: 'Przypisz odcinki kręgosłupa do górnej lub dolnej części tułowia:',
    categories: ['GÓRNA CZĘŚĆ (GŁOWA I TUŁÓW)', 'DOLNA CZĘŚĆ (LĘDŹWIE I MIEDNICA)'],
    items: [
      { text: 'Odcinek szyjny (7 kręgów w tym atlas i obrotnik)', category: 'GÓRNA CZĘŚĆ (GŁOWA I TUŁÓW)' },
      { text: 'Odcinek lędźwiowy (5 masywnych kręgów)', category: 'DOLNA CZĘŚĆ (LĘDŹWIE I MIEDNICA)' },
      { text: 'Odcinek piersiowy (12 kręgów połączonych z żebrami)', category: 'GÓRNA CZĘŚĆ (GŁOWA I TUŁÓW)' },
      { text: 'Kość krzyżowa (5 zrośniętych kręgów) i guziczna', category: 'DOLNA CZĘŚĆ (LĘDŹWIE I MIEDNICA)' }
    ]
  },
  {
    type: 'quiz',
    title: 'SZPIK KOSTNY • FUNKCJA KRWIOTWÓRCZA',
    prompt: 'W których kościach u dorosłego człowieka znajduje się aktywny czerwony szpik kostny produkujący krwinki?',
    options: [
      { text: 'W kościach płaskich (mostek, miednica, żebra) oraz nasadach kości długich', correct: true },
      { text: 'Wyłącznie w środkowych trzonach kości przedramienia, obojczyka i podudzia', correct: false },
      { text: 'Jedynie w drobnych kościach palców rąk i stóp oraz w kościach nadgarstka', correct: false },
      { text: 'W elastycznych chrząstkach zewnętrznej małżowiny usznej i czubka nosa twarzy', correct: false }
    ],
    hint: 'Czerwony szpik kostny odpowiada za hematopoezę (wytwarzanie erytrocytów, leukocytów i trombocytów).'
  },
  {
    type: 'matchup',
    title: 'MIĘŚNIE ANTAGONISTYCZNE • MECHANIKA RUCHU',
    prompt: 'Połącz parę mięśni z wykonywanym wspólnie przeciwstawnym ruchem:',
    pairs: [
      { left: 'Dwugłowy ramienia (biceps)', right: 'Kurczy się, powodując zgięcie kończyny w stawie łokciowym' },
      { left: 'Trójgłowy ramienia (triceps)', right: 'Kurczy się jako antagonista, prostując ramię w łokciu' },
      { left: 'Czworogłowy uda', right: 'Mocny prostownik stawu kolanowego podczas biegu i skoku' },
      { left: 'Mięsień brzuchaty łydki', right: 'Zgina stopę podeszwowo i unosi ciało na palcach' }
    ]
  },
  {
    type: 'quiz',
    title: 'SKŁAD CHEMICZNY KOŚCI • TWARDOŚĆ I ELASTYCZNOŚĆ',
    prompt: 'Który składnik nadaje kościom elastyczność i odporność na pękanie przy uderzeniach?',
    options: [
      { text: 'Związki organiczne, w tym białko kolagenowe (osseina)', correct: true },
      { text: 'Sole mineralne fosforanu wapnia i węglanu wapniowego', correct: false },
      { text: 'Silnie stężony kwas solny obecny w szpiku kostnym ciała', correct: false },
      { text: 'Czysty gazowy azot rozpuszczony w całej tkance kostnej', correct: false }
    ],
    hint: 'Związki mineralne (wapń, fosfor) odpowiadają za twardość, a białka (osseina) za giętkość i elastyczność kości.'
  },
  {
    type: 'sorting',
    title: 'KREW I ODPORNOŚĆ • SKŁADNIKI MORFOTYCZNE',
    prompt: 'Przypisz składniki krwi do ich głównego zadania fizjologicznego:',
    categories: ['TRANSPORT I KRZEPNIĘCIE', 'OBRONA IMMUNOLOGICZNA'],
    items: [
      { text: 'Erytrocyty transportujące tlen za pomocą hemoglobiny', category: 'TRANSPORT I KRZEPNIĘCIE' },
      { text: 'Leukocyty fagocytujące patogeny i wytwarzające przeciwciała', category: 'OBRONA IMMUNOLOGICZNA' },
      { text: 'Trombocyty inicjujące powstawanie skrzepu przy zranieniu', category: 'TRANSPORT I KRZEPNIĘCIE' },
      { text: 'Limfocyty T i B rozpoznające obce antygeny wirusów', category: 'OBRONA IMMUNOLOGICZNA' }
    ]
  },
  {
    type: 'quiz',
    title: 'NARZĄD WZROKU • FOTORECEPTORY SIATKÓWKI',
    prompt: 'Które receptory w siatkówce oka ludzkiego odpowiadają za widzenie barwne przy dobrym oświetleniu?',
    options: [
      { text: 'Czopki skoncentrowane głównie w plamce żółtej', correct: true },
      { text: 'Pręciki odpowiedzialne za widzenie o zmierzchu w odcieniach szarości', correct: false },
      { text: 'Komórki rzęskowe rejestrujące drgania cieczy', correct: false },
      { text: 'Ciałka dotykowe Meissnera', correct: false }
    ],
    hint: 'Czopki (trzy rodzaje reagujące na czerwień, zieleń i błękit) dają ostre widzenie barwne w dzień.'
  },
  {
    type: 'matchup',
    title: 'FLEKSJA MEDYCZNA • ARCHAIZMY I LICZBA PODWÓJNA',
    prompt: 'Dopasuj poprawną formę gramatyczną do luki w zdaniu:',
    pairs: [
      { left: 'Chwycił piłkę...', right: 'dwiema rękami (utrwalona dawna liczba podwójna)' },
      { left: 'Wspierał się na...', right: 'obu nogach po intensywnym treningu biegowym' },
      { left: 'Lekarz zbadał...', right: 'dwoje uszu i gardło pacjenta' },
      { left: 'Pacjent porusza...', right: 'obydwoma ramionami bez uczucia bólu' }
    ]
  },
  {
    type: 'sorting',
    title: 'URAZY UKŁADU RUCHU • DIAGNOSTYKA',
    prompt: 'Przypisz rodzaje kontuzji do właściwego opisu medycznego:',
    categories: ['USZKODZENIE KOŚCI', 'USZKODZENIE STAWU I WIĘZADEŁ'],
    items: [
      { text: 'Złamanie otwarte z przerwaniem ciągłości powłok skórnych', category: 'USZKODZENIE KOŚCI' },
      { text: 'Zwichnięcie z przemieszczeniem powierzchni stawowych', category: 'USZKODZENIE STAWU I WIĘZADEŁ' },
      { text: 'Pęknięcie trzonu kości piszczelowej', category: 'USZKODZENIE KOŚCI' },
      { text: 'Skręcenie torebki stawowej ze zerwaniem więzadeł', category: 'USZKODZENIE STAWU I WIĘZADEŁ' }
    ]
  },
  {
    type: 'quiz',
    title: 'UKŁAD NERWOWY • ŁUK ODRUCHOWY',
    prompt: 'Jaka jest poprawna kolejność elementów w łuku odruchowym odruchu bezwarunkowego (np. odruchu kolanowego)?',
    options: [
      { text: 'Receptor -> neuron czuciowy -> ośrodek w rdzeniu kręgowym -> neuron ruchowy -> efektor (mięsień)', correct: true },
      { text: 'Efektor końcowy -> móżdżek -> nerw czaszkowy twarzowy -> receptor czuciowy w tkance skórnej', correct: false },
      { text: 'Ośrodek korowy mózgu -> receptor zmysłowy -> obwodowy neuron ruchowy -> naczynie krwionośne', correct: false },
      { text: 'Neuron ruchowy pnia -> torebka stawu kolanowego -> neuron czuciowy rdzenia -> kora mózgowa', correct: false }
    ],
    hint: 'Bodziec odbiera receptor, impuls biegnie do rdzenia nerwem czuciowym, a do mięśnia (efektora) nerwem ruchowym.'
  }
];

export const SZKIELETON_SETS = [
  {
    titlePl: 'Szkieleton: Układ Kostny i Ochrona',
    subtitlePl: 'Szkielet osiowy i biomechanika',
    descriptionPl: 'Szkieleton grzechocze kośćmi w sali biologicznej! Połącz kości z ich funkcją ochronną i ruchową.',
    items: [
      { id: 'sk1_1', word: 'Mózgoczaszka', defPl: 'Zbudowana ze ściśle połączonych szwami kości, chroni tkankę mózgową', color: '#3b82f6' },
      { id: 'sk1_2', word: 'Kręgosłup (33–34 kręgi)', defPl: 'Oś ciała z krążkami międzykręgowymi (dyskami) amortyzującymi wstrząsy', color: '#10b981' },
      { id: 'sk1_3', word: 'Żebra i mostek', defPl: 'Elastyczna klatka piersiowa chroniąca przed urazem serce i płuca', color: '#f59e0b' },
      { id: 'sk1_4', word: 'Kość udowa', defPl: 'Najdłuższa, najmasywniejsza i najsilniejsza kość szkieletu człowieka', color: '#ec4899' },
      { id: 'sk1_5', word: 'Obręcz barkowa', defPl: 'Obojczyk i łopatka łączące kończynę górną z klatką piersiową', color: '#8b5cf6' },
      { id: 'sk1_6', word: 'Miednica z kością krzyżową', defPl: 'Dźwiga masę tułowia i osłania narządy wewnętrzne podbrzusza', color: '#06b6d4' }
    ]
  },
  {
    titlePl: 'Szkieleton: Narządy Zmysłów i Nerwy',
    subtitlePl: 'Anatomia odbioru bodźców i koordynacja',
    descriptionPl: 'Połącz wyspecjalizowany narząd zmysłu z odpowiednim receptorem i funkcją poznawczą.',
    items: [
      { id: 'sk2_1', word: 'Oko (Siatkówka)', defPl: 'Zawiera światłoczułe czopki (barwy) i pręciki (widzenie o zmierzchu)', color: '#3b82f6' },
      { id: 'sk2_2', word: 'Ucho (Błędnik)', defPl: 'Kanały półkoliste rejestrujące ruchy głowy i utrzymujące równowagę', color: '#10b981' },
      { id: 'sk2_3', word: 'Kosteczki słuchowe', defPl: 'Młoteczek, kowadełko i strzemiączko wzmacniające drgania akustyczne', color: '#f59e0b' },
      { id: 'sk2_4', word: 'Móżdżek', defPl: 'Ośrodek koordynacji ruchowej, precyzji mięśni i pionowej postawy', color: '#ec4899' },
      { id: 'sk2_5', word: 'Skóra (Ciałka dotykowe)', defPl: 'Odbiera bodźce mechaniczne, ból, nacisk oraz temperaturę otoczenia', color: '#8b5cf6' },
      { id: 'sk2_6', word: 'Język (Kubki smakowe)', defPl: 'Receptory chemiczne identyfikujące smak słodki, słony, kwaśny i gorzki', color: '#06b6d4' }
    ]
  },
  {
    titlePl: 'Szkieleton: Układ Krążenia i Oddechowy',
    subtitlePl: 'Fizjologia wysiłku i wymiana gazowa',
    descriptionPl: 'Dopasuj elementy fizjologii do ich funkcji podczas biegu i intensywnego wysiłku.',
    items: [
      { id: 'sk3_1', word: 'Mięsień sercowy', defPl: 'Kurczy się automatycznie, tłocząc utlenowaną krew tętniczą do tkanek', color: '#3b82f6' },
      { id: 'sk3_2', word: 'Pęcherzyki płucne', defPl: 'Miliony mikroskopijnych pęcherzyków, w których zachodzi wymiana tlenu', color: '#10b981' },
      { id: 'sk3_3', word: 'Przepona', defPl: 'Płaski mięsień oddechowy oddzielający klatkę piersiową od jamy brzusznej', color: '#f59e0b' },
      { id: 'sk3_4', word: 'Erytrocyty z hemoglobiną', defPl: 'Czerwone krwinki wiążące i transportujące cząsteczki tlenu do mięśni', color: '#ec4899' },
      { id: 'sk3_5', word: 'Tętnice z pulsem', defPl: 'Grubościenne naczynia, w których wyczuwa się falę tętna po skurczu komory', color: '#8b5cf6' },
      { id: 'sk3_6', word: 'Żyły z zastawkami', defPl: 'Odprowadzają krew odtlenowaną, a zastawki blokują cofanie pod grawitacją', color: '#06b6d4' }
    ]
  },
  {
    titlePl: 'Szkieleton: Stawy, Wiązadła i Pierwsza Pomoc',
    subtitlePl: 'Urazy układu ruchu i ratownictwo',
    descriptionPl: 'Połącz pojęcia dotyczące budowy stawu i pierwszej pomocy przy kontuzjach.',
    items: [
      { id: 'sk4_1', word: 'Torebka stawowa i maź', defPl: 'Nawilża chrząstki stawowe i zapobiega niszczącemu tarciu kości o kość', color: '#3b82f6' },
      { id: 'sk4_2', word: 'Więzadła stawowe', defPl: 'Mocne pasma tkanki łącznej wzmacniające torebkę i stabilizujące staw', color: '#10b981' },
      { id: 'sk4_3', word: 'Chłodny kompres (lód)', defPl: 'Obkurcza naczynia, hamuje powstawanie krwiaka i łagodzi ostry obrzęk', color: '#f59e0b' },
      { id: 'sk4_4', word: 'Unieruchomienie dwóch stawów', defPl: 'Zasada Potta: przy złamaniu kości unieruchamia się dwa sąsiednie stawy', color: '#ec4899' },
      { id: 'sk4_5', word: 'Pozycja boczna ustalona', defPl: 'Układa się w niej osobę nieprzytomną oddychającą, by drogi oddechowe były drożne', color: '#8b5cf6' },
      { id: 'sk4_6', word: 'Resuscytacja (RKO)', defPl: '30 uciśnięć klatki piersiowej na głębokość 5–6 cm na zmianę z 2 wdechami', color: '#06b6d4' }
    ]
  }
];

export function getSzkieletonEncounter(index = null, isBoss = false) {
  const idx = (index !== null && index >= 0 && index < SZKIELETON_SETS.length)
    ? index
    : Math.floor(Math.random() * SZKIELETON_SETS.length);
  const data = SZKIELETON_SETS[idx];
  return {
    type: 'skeleton_anatomy',
    titlePl: isBoss ? 'BOSS: Szkieleton (50 HP, 3 dmg)' : 'Szkieleton (24 HP, 2 dmg)',
    subtitlePl: data.subtitlePl,
    icon: './assets/Postacie/szkieleton.png',
    enemyName: 'Szkieleton',
    enemyMaxHp: isBoss ? 50 : 24,
    enemyDamage: isBoss ? 3 : 2,
    descriptionPl: data.descriptionPl,
    items: [...data.items]
  };
}

export const SZKIELETON_ENCOUNTERS = {
  default: getSzkieletonEncounter(0),
  1: getSzkieletonEncounter(0),
  2: getSzkieletonEncounter(1),
  3: getSzkieletonEncounter(2),
  4: getSzkieletonEncounter(3)
};
