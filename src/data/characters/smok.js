// Smok - Potężny Strażnik i Boss Lochów (Boss: 68 HP, 4 DMG | Zwykły: 34 HP, 2 DMG)
// Finałowy sprawdzian wiedzy z języka polskiego i kanonu lektur CKE Klasy 8.
// Składnia zdań wielokrotnie złożonych, formy bezosobowe (-no, -to), mowa zależna,
// analiza arcydzieł literatury narodowej i zaawansowana stylistyka.

export const SMOK_CHALLENGES = [
  {
    type: 'quiz',
    title: 'SKŁADNA KLASA 8 • FORMY BEZOSOBOWE',
    prompt: 'Wskaż zdanie, w którym orzeczenie wyrażono bezosobową formą czasownika zakończoną na -no lub -to:',
    options: [
      { text: 'W pradawnych kronikach zapisano legendę o podziemnym smoku.', correct: true },
      { text: 'Mężny rycerz zapisywał przebieg trudnej wyprawy w notesie.', correct: false },
      { text: 'Kroniki zostały starannie zapisane przez zakonników.', correct: false },
      { text: 'Gdy wejdziesz do jaskini, zapisz swoje spostrzeżenia.', correct: false }
    ],
    hint: 'Formy na -no, -to (np. zrobiono, zdobyto, powiedziano) nie posiadają podmiotu wykonawcy.'
  },
  {
    type: 'matchup',
    title: 'LEKTURY OBOWIĄZKOWE CKE • SENS PRZESŁANIA',
    prompt: 'Dopasuj arcydzieło literackie do jego kluczowego przesłania moralnego:',
    pairs: [
      { left: '«Dziady cz. II» (A. Mickiewicz)', right: 'Kto nie był człowiekiem dla ludzi, temu człowiek nic nie pomoże' },
      { left: '«Balladyna» (J. Słowacki)', right: 'Nie ma zbrodni bez kary, a zło obróci się przeciwko temu, kto je popełnił' },
      { left: '«Mały Książę» (A. de Saint-Exupéry)', right: 'Dobrze widzi się tylko sercem, najważniejsze jest niewidoczne dla oczu' },
      { left: '«Kamienie na szaniec» (A. Kamiński)', right: 'Wierność ideałom braterstwa i wolności Ojczyzny wymaga najwyższego poświęcenia' }
    ]
  },
  {
    type: 'sorting',
    title: 'ŚRODKI STYLISTYCZNE • ALEGORIA A SYMBOL',
    prompt: 'Przypisz pojęcia literackie do kategorii znaku jednoznacznego lub wieloznacznego:',
    categories: ['ALEGORIA (ZNACZENIE JEDNOZNACZNE, UTRWALONE)', 'SYMBOL (ZNACZENIE WIELOZSTRONNE, NIEJEDNOZNACZNE)'],
    items: [
      { text: 'Lis w bajkach Krasickiego jako personifikacja chytrości', category: 'ALEGORIA (ZNACZENIE JEDNOZNACZNE, UTRWALONE)' },
      { text: 'Złoty Róg w «Weselu» (szansa na wolność, uśpienie narodu)', category: 'SYMBOL (ZNACZENIE WIELOZSTRONNE, NIEJEDNOZNACZNE)' },
      { text: 'Waga w dłoniach Temidy jako sprawiedliwość sądowa', category: 'ALEGORIA (ZNACZENIE JEDNOZNACZNE, UTRWALONE)' },
      { text: 'Chocholi taniec w finale dramatu Wyspiańskiego', category: 'SYMBOL (ZNACZENIE WIELOZSTRONNE, NIEJEDNOZNACZNE)' }
    ]
  },
  {
    type: 'quiz',
    title: 'SKŁADNIA • ZDANIA ZŁOŻONE PODRZĘDNIE',
    prompt: 'Wskaż zdanie podrzędne przydawkowe (odpowiadające na pytanie: jaki? jaka? jakie?):',
    options: [
      { text: 'Smok strzegł wrót do zamku, który wznosił się na stromym urwisku skalnym.', correct: true },
      { text: 'Rycerz zatrzymał się w miejscu, ponieważ usłyszał złowrogi pomruk w ciemności.', correct: false },
      { text: 'Wszyscy wędrowcy wiedzieli, że w podziemiach ukryto prastare księgi.', correct: false },
      { text: 'Poszedł prosto przed siebie, gdzie paliło się nikłe światło pochodni.', correct: false }
    ],
    hint: 'Zdanie przydawkowe określa rzeczownik ze zdania nadrzędnego (zamek jaki? -> który wznosił się...).'
  },
  {
    type: 'matchup',
    title: '«PAN TADEUSZ» • KLUCZOWE WĄTKI EPOPEI',
    prompt: 'Połącz bohatera epopei Adama Mickiewicza z jego rolą w utworze:',
    pairs: [
      { left: 'Jacek Soplica (Ksiądz Robak)', right: 'Doznaje głębokiej pokuty i przygotowuje na Litwie powstanie narodowe' },
      { left: 'Gerwazy Rębajło', right: 'Klucznik Horeszków pałający żądzą krwawej zemsty na rodzie Sopliców' },
      { left: 'Jankiel', right: 'Karczmarz i patriota, którego koncert na cymbałach odtworzył historię Polski' },
      { left: 'Tadeusz Soplica', right: 'Młody patriota, który na koniec uwłaszcza chłopów w swoim majątku' }
    ]
  },
  {
    type: 'quiz',
    title: 'INTERPUNKCJA • IMIESŁOWOWY RÓWNOWAŻNIK ZDANIA',
    prompt: 'Wskaż zdanie, w którym poprawnie użyto imiesłowowego równoważnika zdania (z zachowaniem tożsamości podmiotu):',
    options: [
      { text: 'Wchodząc do komnaty smoka, rycerz uważnie obejrzał antyczne inskrypcje.', correct: true },
      { text: 'Wchodząc do komnaty smoka, miecz wypadł rycerzowi z dłoni.', correct: false },
      { text: 'Będąc w szkole, dzwonek głośno zadzwonił na korytarzu.', correct: false },
      { text: 'Czytając Balladynę, książka nagle zamknęła się z trzaskiem.', correct: false }
    ],
    hint: 'Czynność wyrażoną imiesłowem na -ąc i czynność orzeczenia musi wykonywać ten sam podmiot!'
  },
  {
    type: 'sorting',
    title: 'SKŁADNIA • ZDANIA WSPÓŁRZĘDNE',
    prompt: 'Przypisz zdania współrzędnie złożone do odpowiedniego typu relacji logicznej:',
    categories: ['PRZECIWSTAWNE (SPÓJNIKI: ALE, LECZ, JEDNAK)', 'WYNIKOWE (SPÓJNIKI: WIĘC, ZATEM, TOTEŻ)'],
    items: [
      { text: 'Smok zionął ogniem, lecz bohater nie ustąpił ani na krok.', category: 'PRZECIWSTAWNE (SPÓJNIKI: ALE, LECZ, JEDNAK)' },
      { text: 'Wyczerpały się zapasy w jaskini, więc śmiałkowie ruszyli w drogę powrotną.', category: 'WYNIKOWE (SPÓJNIKI: WIĘC, ZATEM, TOTEŻ)' },
      { text: 'Zadanie było niezwykle trudne, jednak wszyscy uczniowie zdali egzamin.', category: 'PRZECIWSTAWNE (SPÓJNIKI: ALE, LECZ, JEDNAK)' },
      { text: 'Rada mędrców uznała rację wędrowca, zatem spór został zażegnany.', category: 'WYNIKOWE (SPÓJNIKI: WIĘC, ZATEM, TOTEŻ)' }
    ]
  },
  {
    type: 'quiz',
    title: 'MOWA ZALEŻNA A NIEZALEŻNA • PRZEKSZTAŁCENIA',
    prompt: 'Przekształć zdanie mowy niezależnej: Smok rzekł: „Nie lękam się twojego miecza!” na poprawną mowę zależną:',
    options: [
      { text: 'Smok rzekł, że nie lęka się jego miecza.', correct: true },
      { text: 'Smok rzekł, że nie lękam się twojego miecza.', correct: false },
      { text: 'Smok rzekł: że nie lękam się mojego miecza.', correct: false },
      { text: 'Smok rzekł, iż nie lęka się twojego miecza.', correct: false }
    ],
    hint: 'W mowie zależnej zaimki osobowe i dzierżawcze muszą zmienić perspektywę na 3. osobę.'
  },
  {
    type: 'quiz',
    title: '«QUO VADIS» • POWIEŚĆ HISTORYCZNA CKE',
    prompt: 'Które wydarzenie w powieści Henryka Sienkiewicza stanowi punkt kulminacyjny duchowej przemiany Marka Winicjusza?',
    options: [
      { text: 'Uratowanie Ligii przez Ursusa na arenie cyrku Nerona i publiczne wybaczenie chrześcijan', correct: true },
      { text: 'Tchórzliwa ucieczka patrycjuszy z płonącego Rzymu przed pożarem do luksusowej willi w Ancjum', correct: false },
      { text: 'Kupienie nowego marmurowego pałacu od wykwintnego Petroniusza w samym centrum Wiecznego Rzymu', correct: false },
      { text: 'Nocny krwawy pojedynek z potężnym gladiatorem Krotonem w wąskim i ciemnym zaułku Zatybrza', correct: false }
    ],
    hint: 'Przemiana z porywczego rzymskiego patrycjusza w miłosiernego chrześcijanina dopełnia się na arenie.'
  },
  {
    type: 'matchup',
    title: '«ZEMSTA» ALEKSANDRA FREDRY • BOHATEROWIE I CECHY',
    prompt: 'Dopasuj postać z komedii Fredry do jej charakterystycznej cechy i powiedzonka:',
    pairs: [
      { left: 'Cześnik Raptusiewicz', right: 'Gwałtowny choleryk powtarzający: «Mocium panie!»' },
      { left: 'Rejent Milczek', right: 'Obłudny intrygant powtarzający z pokorą: «Niech się dzieje wola Nieba...»' },
      { left: 'Józef Papkin', right: 'Tchórzliwy samochwał i mitoman, żądający od Wacława krokodyla' },
      { left: 'Wacław i Klara', right: 'Młodzi zakochani rozdzieleni murem granicznym spornego zamku' }
    ]
  },
  {
    type: 'sorting',
    title: 'SKŁADNIA • RODZAJE PODMIOTU',
    prompt: 'Przypisz zdania do właściwego typu podmiotu gramatycznego lub logicznego:',
    categories: ['PODMIOT GRAMATYCZNY (MIANOWNIK)', 'PODMIOT LOGICZNY / SZEREGOWY / DOMYŚLNY'],
    items: [
      { text: 'Smok zamieszkiwał podziemną jaskinię.', category: 'PODMIOT GRAMATYCZNY (MIANOWNIK)' },
      { text: 'W lochach zabrakło oliwy do pochodni.', category: 'PODMIOT LOGICZNY / SZEREGOWY / DOMYŚLNY' },
      { text: 'Rycerz i giermek wyruszyli na wyprawę.', category: 'PODMIOT LOGICZNY / SZEREGOWY / DOMYŚLNY' },
      { text: 'Przeczytałem wszystkie księgi w bibliotece.', category: 'PODMIOT LOGICZNY / SZEREGOWY / DOMYŚLNY' }
    ]
  },
  {
    type: 'quiz',
    title: '«REDUTA ORDONA» • LIRYKA PATRIOTYCZNA',
    prompt: 'Jaki zabieg konstrukcyjny i przesłanie zastosował Adam Mickiewicz w «Reducie Ordona»?',
    options: [
      { text: 'Zestawił bezduszną machinę carskiego despotyzmu z heroicznym poświęceniem obrońców Warszawy', correct: true },
      { text: 'Przedstawił w krzywym zwierciadle komiczny spór dwóch kłótliwych szlachciców o zamek graniczny', correct: false },
      { text: 'Opisał poetycką i baśniową wędrówkę małego, złotowłosego chłopca po odległych planetach kosmosu', correct: false },
      { text: 'Przedstawił wierny, barwny i w pełni realistyczny obraz polskiej wsi szlacheckiej w czasie żniw', correct: false }
    ],
    hint: 'Porównanie wojsk carskich do lawy błotnej, czarnych sępów i bezdusznego automatu.'
  },
  {
    type: 'matchup',
    title: '«ŚWITEZIANKA» • BALLADA ROMANTYCZNA',
    prompt: 'Połącz motywy ballady Adama Mickiewicza z ich znaczeniem w utworze:',
    pairs: [
      { left: 'Przysięga pod modrzewiem', right: 'Złożenie przez strzelca uroczystej obietnicy wiecznej miłości i wierności' },
      { left: 'Nimfa z wód jeziora Świteź', right: 'Kusząca zjawa wodna wystawiająca charakter młodzieńca na próbę' },
      { left: 'Złamanie przysięgi', right: 'Zdrada dziewczyny dla ułudy i natychmiastowe ujawnienie prawdy' },
      { left: 'Kara pod drzewem', right: 'Pochłonięcie zdrajcy przez wody i wieczne potępienie jego duszy' }
    ]
  },
  {
    type: 'sorting',
    title: 'SKŁADNIA • RODZAJE ORZECZEŃ',
    prompt: 'Przypisz zdania do kategorii orzeczenia czasownikowego lub imiennego:',
    categories: ['ORZECZENIE CZASOWNIKOWE', 'ORZECZENIE IMIENNE (ŁĄCZNIK + ORZECZNIK)'],
    items: [
      { text: 'Smok uważnie strzeże prastarego skarbu.', category: 'ORZECZENIE CZASOWNIKOWE' },
      { text: 'Wyprawa okazała się niezwykle niebezpieczna.', category: 'ORZECZENIE IMIENNE (ŁĄCZNIK + ORZECZNIK)' },
      { text: 'Rycerz dobył ostrego miecza z pochwy.', category: 'ORZECZENIE CZASOWNIKOWE' },
      { text: 'Ten starożytny kodeks jest cennym zabytkiem.', category: 'ORZECZENIE IMIENNE (ŁĄCZNIK + ORZECZNIK)' }
    ]
  },
  {
    type: 'quiz',
    title: '«SYZYFOWE PRACE» • LEKTURA OBOWIĄZKOWA',
    prompt: 'Który moment w powieści Stefana Żeromskiego przełamuje rusyfikację i budzi w Marcinie Borowiczu tożsamość narodową?',
    options: [
      { text: 'Recytacja «Reduty Ordona» Mickiewicza przez Bernarda Zygiera na lekcji polskiego u prof. Sztubera', correct: true },
      { text: 'Ciche i wzruszające odwiedziny zatroskanej matki Marcina w starym klerykowskim gimnazjum męskim', correct: false },
      { text: 'Burzliwa kłótnia młodego Borowicza z wścibskim inspektorem Majewskim o brak regulaminowego munduru', correct: false },
      { text: 'Wspólny jesienny wyjazd na emocjonujące polowanie z doświadczonym myśliwym w borach w Gawronkach', correct: false }
    ],
    hint: 'Zygier deklamuje zakazany wiersz cichym, a potem donośnym głosem, wywołując łzy w oczach profesora i Marcina.'
  },
  {
    type: 'matchup',
    title: 'ŚRODKI STYLISTYCZNE • KLASA 8 CKE',
    prompt: 'Dopasuj środek artystycznego wyrazu do jego definicji i przykładu:',
    pairs: [
      { left: 'Oksymoron', right: 'Zestawienie wyrazów o sprzecznym znaczeniu: «żywy trup», «gorący lód»' },
      { left: 'Peryfraza (omówienie)', right: 'Zastąpienie nazwy opisem: «złota tarcza na niebie» zamiast «słońce»' },
      { left: 'Inwersja', right: 'Nietypowy szyk wyrazów w zdaniu potęgujący patos i napięcie poetyckie' },
      { left: 'Apostrofa', right: 'Uroczysty, bezpośredni zwrot do bóstwa, osoby, idei lub ojczyzny' }
    ]
  },
  {
    type: 'sorting',
    title: 'CZĘŚCI MOWY • ODMIENNOŚĆ',
    prompt: 'Przypisz części mowy do grupy odmiennych lub nieodmiennych:',
    categories: ['CZĘŚCI MOWY ODMIENNE', 'CZĘŚCI MOWY NIEODMIENNE'],
    items: [
      { text: 'Czasownik (odmienia się przez osoby, czasy, tryby)', category: 'CZĘŚCI MOWY ODMIENNE' },
      { text: 'Przysłówek (jak? gdzie? kiedy?)', category: 'CZĘŚCI MOWY NIEODMIENNE' },
      { text: 'Rzeczownik (odmienia się przez przypadki i liczby)', category: 'CZĘŚCI MOWY ODMIENNE' },
      { text: 'Przyimek (w, z, na, pod, przed)', category: 'CZĘŚCI MOWY NIEODMIENNE' }
    ]
  },
  {
    type: 'quiz',
    title: '«ARTYSTA» SŁAWOMIRA MROŻKA • MORAŁ OPOWIADANIA',
    prompt: 'Jakie przesłanie wynika z opowiadania «Artysta» Sławomira Mrożka o Kogucie pragnącym grać lwa w cyrku?',
    options: [
      { text: 'Ostrzega przed zarozumiałością, pychą i odrzucaniem własnej prawdziwej natury na rzecz fałszywych ambicji', correct: true },
      { text: 'Zachęca do kupowania groźnych dzikich drapieżników do objazdowych, prowincjonalnych cyrków w kraju', correct: false },
      { text: 'Wskazuje naiwnie, że na deskach profesjonalnego teatru liczy się wyłącznie potężny i głośny ryk aktora', correct: false },
      { text: 'Podkreśla z przekąsem, że surowy dyrektor cyrku zupełnie nie znał się na wybitnej sztuce scenicznej', correct: false }
    ],
    hint: 'Kogut nie chciał być po prostu świetnym kogutem, chciał udawać lwa, czym ośmieszył się przed Dyrektorem.'
  },
  {
    type: 'matchup',
    title: 'FRAZEOLOGIA MITOLOGICZNA I HISTORYCZNA',
    prompt: 'Dopasuj związek frazeologiczny do jego przenośnego znaczenia:',
    pairs: [
      { left: 'Koń trojański', right: 'Podstępny, zamaskowany podarunek niosący zgubę odbiorcy' },
      { left: 'Puszka Pandory', right: 'Źródło niekończących się nieszczęść, trosk i kłopotów' },
      { left: 'Węzeł gordyjski', right: 'Niezwykle skomplikowany problem, wymagający radykalnego rozwiązania' },
      { left: 'Róg obfitości', right: 'Niewyczerpane źródło wszelkich bogactw, darów i dostatku' }
    ]
  },
  {
    type: 'quiz',
    title: 'INTERPUNKCJA • ZDANIA WIELOKROTNIE ZŁOŻONE',
    prompt: 'Wskaż zdanie, w którym poprawnie postawiono wszystkie przecinki:',
    options: [
      { text: 'Gdy smok wszedł do komnaty, rycerz wiedział, że musi zachować spokój, aby zwyciężyć.', correct: true },
      { text: 'Gdy smok wszedł do komnaty rycerz wiedział że musi zachować spokój aby zwyciężyć.', correct: false },
      { text: 'Gdy smok wszedł, do komnaty rycerz, wiedział że musi zachować spokój aby zwyciężyć.', correct: false },
      { text: 'Gdy smok wszedł do komnaty, rycerz wiedział że, musi zachować spokój, aby zwyciężyć.', correct: false }
    ],
    hint: 'Przecinkami oddzielamy zdania składowe podrzędne (gdy..., że..., aby...).'
  }
];

export const SMOK_ENCOUNTER = {
  type: 'boss_smok',
  titlePl: 'Smok (68 HP)',
  subtitlePl: 'BOSS: SMOK ZE SZKOŁY I PODZIEMI',
  icon: './assets/Postacie/smok.png',
  enemyName: 'smok',
  enemyMaxHp: 68,
  enemyDamage: 4,
  descriptionPl: 'Potężny Strażnik Podziemi testuje Twoją znajomość kanonu CKE i składni języka polskiego! Każdy błąd to 4 obrażenia od płomieni!',
  challenges: SMOK_CHALLENGES
};
