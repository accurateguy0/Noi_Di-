// Profesor – Boss: 56 HP, bije 2 | Zwykły: 28 HP, bije 2
// Zaawansowana wiedza językowa i literaturoznawcza (Klasy 6–8 CKE):
// słowotwórstwo (rdzeń, formanty, oboczności), archaizmy, zapożyczenia,
// gatunki i rodzaje literackie, frazeologia mitologiczna i biblijna oraz fleksja.

export const PROFESOR_CHALLENGES = [
  {
    type: 'quiz',
    title: 'SŁOWOTWÓRSTWO • OBOCZNOŚCI W RDZENIU',
    prompt: 'Wskaż parę wyrazów pokrewnych, w której w rdzeniu zachodzi oboczność samogłoskowa «o : e» oraz spółgłoskowa «s : sz»:',
    options: [
      { text: 'Niosę – niesiesz', correct: true },
      { text: 'Ręka – rączka', correct: false },
      { text: 'Koło – kółko', correct: false },
      { text: 'Mówić – mowa', correct: false }
    ],
    hint: 'W formach nios-ę : nies-iesz samogłoska o wymienia się na e, a s na sz.'
  },
  {
    type: 'matchup',
    title: 'RODZAJE I GATUNKI LITERACKIE • PODZIAŁ',
    prompt: 'Dopasuj gatunek literacki do odpowiadającego mu rodzaju literackiego:',
    pairs: [
      { left: 'Nowela i powieść historyczna', right: 'EPIKA (obecność narratora, fabuła i świat przedstawiony)' },
      { left: 'Sonet i tren żałobny', right: 'LIRYKA (podmiot liryczny, ekspresja uczuć, wierszowana forma)' },
      { left: 'Tragedia i komedia obyczajowa', right: 'DRAMAT (dialogi postaci, tekst główny i didaskalia dla sceny)' },
      { left: 'Ballada romantyczna', right: 'GATUNEK SYNKRETYCZNY (łączy cechy epiki, liryki i dramatu)' }
    ]
  },
  {
    type: 'sorting',
    title: 'FRAZEOLOGIA • MITOLOGIA A BIBLIA',
    prompt: 'Przypisz związki frazeologiczne do źródła ich pochodzenia:',
    categories: ['ŹRÓDŁO MITOLOGICZNE (STAROŻYTNA GRECJA)', 'ŹRÓDŁO BIBLIJNE (STARY I NOWY TESTAMENT)'],
    items: [
      { text: 'Pięta Achillesa (słaby punkt)', category: 'ŹRÓDŁO MITOLOGICZNE (STAROŻYTNA GRECJA)' },
      { text: 'Salomonowy wyrok (mądra, sprawiedliwa decyzja)', category: 'ŹRÓDŁO BIBLIJNE (STARY I NOWY TESTAMENT)' },
      { text: 'Stajnia Augiasza (ogromny, zaniedbany bałagan)', category: 'ŹRÓDŁO MITOLOGICZNE (STAROŻYTNA GRECJA)' },
      { text: 'Hiobowe wieści (katastrofalne, tragiczne wiadomości)', category: 'ŹRÓDŁO BIBLIJNE (STARY I NOWY TESTAMENT)' }
    ]
  },
  {
    type: 'quiz',
    title: 'SŁOWOTWÓRSTWO • FORMANT ZEROWY',
    prompt: 'Wskaż wyraz pochodny, który utworzono od czasownika za pomocą formantu zerowego (odrzucenia końcówki):',
    options: [
      { text: 'Dźwig (od «dźwigać» formantem zerowym)', correct: true },
      { text: 'Pisarz (od «pisać» przyrostkiem -arz)', correct: false },
      { text: 'Przeczytać (od «czytać» afiksem prze-)', correct: false },
      { text: 'Złotnik (od «złoto» sufiksem -nik)', correct: false }
    ],
    hint: 'Formant zerowy polega na odrzuceniu cząstki wyrazu podstawowego bez dodawania nowych głosek.'
  },
  {
    type: 'matchup',
    title: 'ETYMOLOGIA • ZAPOŻYCZENIA W JĘZYKU POLSKIM',
    prompt: 'Dopasuj słowo używane w polszczyźnie do języka, z którego zostało zapożyczone:',
    pairs: [
      { left: 'Akwarium, edukacja, prefiks', right: 'Łacina klasyczna (lingua Latina)' },
      { left: 'Teatr, dramat, metafora, dialog', right: 'Język grecki (starożytna Hellada)' },
      { left: 'Makaron, pizza, sonet, fresk', right: 'Język włoski (okres renesansu i królowej Bony)' },
      { left: 'Komputer, interfejs, e-mail', right: 'Współczesny język angielski (anglicyzmy)' }
    ]
  },
  {
    type: 'sorting',
    title: 'ARCHAIZMY W LEKTURACH • POJĘCIA I ZNACZENIA',
    prompt: 'Rozdziel dawne wyrazy na nazwy ubiorów/przedmiotów oraz dawne spójniki/partykuły:',
    categories: ['DAWNE ELEMENTY STROJU I UZBROJENIA', 'DAWNE SPÓJNIKI I WYRAŻENIA W TEKŚCIE'],
    items: [
      { text: 'Karabela (szlachecka szabla bojowa)', category: 'DAWNE ELEMENTY STROJU I UZBROJENIA' },
      { text: 'Jeno (w znaczeniu: tylko, ledwie)', category: 'DAWNE SPÓJNIKI I WYRAŻENIA W TEKŚCIE' },
      { text: 'Żupan (staropolska długa szata męska)', category: 'DAWNE ELEMENTY STROJU I UZBROJENIA' },
      { text: 'Aliści (w znaczeniu: tymczasem, ale oto)', category: 'DAWNE SPÓJNIKI I WYRAŻENIA W TEKŚCIE' }
    ]
  },
  {
    type: 'quiz',
    title: 'FLEKSJA TRUDNA • KOŃCÓWKI PRZYPADKÓW',
    prompt: 'Wskaż zdanie o nienagannej poprawności fleksyjnej w dopełniaczu i narzędniku liczby mnogiej:',
    options: [
      { text: 'Wysłuchałem w skupieniu rad moich serdecznych przyjaciół i rozmawiałem z nimi dwiema rękami.', correct: true },
      { text: 'Wysłuchałem w skupieniu pouczających rad moich przyjaciółów podczas przerwy na korytarzu.', correct: false },
      { text: 'Rozmawiałem swobodnie z dwoma rękami wciśniętymi głęboko w kieszenie nowej marynarki.', correct: false },
      { text: 'Nie widziałem tam na placu zupełnie żadnych obcych ludzisków ani ich szczekających psów.', correct: false }
    ],
    hint: 'Dopełniacz od przyjaciele to: przyjaciół; narzędnik: z przyjaciółmi / dwiema rękami.'
  },
  {
    type: 'quiz',
    title: 'GATUNKI LIRYKI • BUDOWA SONETU',
    prompt: 'Jaka jest kanoniczna budowa klasycznego sonetu (np. w «Sonetach krymskich» Adama Mickiewicza)?',
    options: [
      { text: '14 wersów: dwie strofy czterowersowe (opisowe) i dwie strofy trzywersowe (refleksyjne)', correct: true },
      { text: '10 wersów: dwie symetryczne strofy pięciowersowe pisane nieregularnym wierszem wolnym', correct: false },
      { text: 'Dwanaście rozbudowanych ksiąg epickich pisanych trzynastozgłoskowcem z rymami parzystymi', correct: false },
      { text: 'Dowolna liczba krótkich zwrotek poetyckich zakończona dosadnym morałem ze świata fauny', correct: false }
    ],
    hint: 'Struktura 4 + 4 + 3 + 3 = 14 wersów.'
  },
  {
    type: 'sorting',
    title: 'SŁOWOTWÓRSTWO • FORMANTY',
    prompt: 'Przypisz wyróżnione cząstki wyrazów do właściwego typu formantu:',
    categories: ['PRZEDROSTEK (PREFIKS)', 'PRZYROSTEK (SUFIKS)'],
    items: [
      { text: 'POD-pisać (cząstka dodana na początku wyrazu)', category: 'PRZEDROSTEK (PREFIKS)' },
      { text: 'nauczyciel-KA (cząstka żeńska na końcu wyrazu)', category: 'PRZYROSTEK (SUFIKS)' },
      { text: 'PRZE-czytać (cząstka aspektowa na początku)', category: 'PRZEDROSTEK (PREFIKS)' },
      { text: 'kot-EK (cząstka zdrabniająca na końcu)', category: 'PRZYROSTEK (SUFIKS)' }
    ]
  },
  {
    type: 'quiz',
    title: 'ZNACZENIE WYRAZÓW • POLISEMIA A HOMONIMIA',
    prompt: 'Która para wyrazów stanowi przykład homonimów (słów o identycznym brzmieniu i pisowni, lecz całkowicie odrębnym pochodzeniu i znaczeniu)?',
    options: [
      { text: 'Zamek (budowla warowna ze średniowiecza) oraz zamek (suwak błyskawiczny w kurtce)', correct: true },
      { text: 'Ręka (górna kończyna człowieka) oraz ręka (boczne oparcie zabytkowego mebla w salonie)', correct: false },
      { text: 'Głowa (górna część ciała ludzkiego) oraz głowa (szanowany przywódca całej rodziny)', correct: false },
      { text: 'Noga (dolna kończyna biegacza) oraz noga (drewniana podpora okrągłego stołu w pokoju)', correct: false }
    ],
    hint: 'Homonimy to słowa przypadkowo brzmiące tak samo, niebędące metaforami wspólnego rdzenia.'
  },
  {
    type: 'matchup',
    title: 'RELACJE ZNACZENIOWE WYRAZÓW',
    prompt: 'Połącz pojęcie semantyczne z jego precyzyjną definicją naukową:',
    pairs: [
      { left: 'Synonimy', right: 'Wyrazy bliskoznaczne o tożsamym polu znaczeniowym: auto – samochód' },
      { left: 'Antonimy', right: 'Wyrazy o przeciwstawnym znaczeniu logicznym: odwaga – tchórzostwo' },
      { left: 'Hiperonimy', right: 'Wyrazy nadrzędne kategorialnie: mebel (dla stołu, krzesła, szafy)' },
      { left: 'Paronimy', right: 'Wyrazy łudząco podobne brzmieniowo, lecz o różnym sensie: adaptować – adoptować' }
    ]
  },
  {
    type: 'sorting',
    title: 'FONETYKA • DŹWIĘCZNOŚĆ GŁOSEK',
    prompt: 'Przypisz spółgłoski języka polskiego do klasy dźwięcznych lub bezdźwięcznych:',
    categories: ['SPÓŁGŁOSKI DŹWIĘCZNE', 'SPÓŁGŁOSKI BEZDŹWIĘCZNE'],
    items: [
      { text: 'B, D, G, Z, W, Ż (drgają więzadła głosowe)', category: 'SPÓŁGŁOSKI DŹWIĘCZNE' },
      { text: 'P, T, K, S, F, SZ (wiązadła głosowe spoczywają)', category: 'SPÓŁGŁOSKI BEZDŹWIĘCZNE' },
      { text: 'DZ, DŻ, DŹ (zwarto-szczelinowe dźwięczne)', category: 'SPÓŁGŁOSKI DŹWIĘCZNE' },
      { text: 'C, CZ, Ć, CH (zwarto-szczelinowe i szczelinowe bezdźwięczne)', category: 'SPÓŁGŁOSKI BEZDŹWIĘCZNE' }
    ]
  },
  {
    type: 'quiz',
    title: 'FONETYKA • UPODOBNIENIA FONETYCZNE',
    prompt: 'Jakie zjawisko fonetyczne zachodzi w wymowie wyrazu «ławka» [łafka]?',
    options: [
      { text: 'Ubezdźwięcznienie wsteczne (bezdźwięczne «k» ubezdźwięcznia poprzedzające dźwięczne «w»)', correct: true },
      { text: 'Udźwięcznienie postępowe (dźwięczne fonetycznie «ł» udźwięcznia następujące głoski słowa)', correct: false },
      { text: 'Całkowita utrata dźwięczności wymawianej głoski w absolutnym wygłosie końcowym słowa', correct: false },
      { text: 'Fonetyczne uproszczenie trudnej grupy spółgłoskowej występującej wewnątrz wyrazu', correct: false }
    ],
    hint: 'Kolejna litera (k) oddziałuje wstecz na literę wcześniejszą (w), zamieniając jej wymowę w [f].'
  },
  {
    type: 'matchup',
    title: 'STYLITYKA • ODMIANY STYLOWE JĘZYKA',
    prompt: 'Dopasuj fragment wypowiedzi do reprezentowanego stylu językowego:',
    pairs: [
      { left: 'Styl naukowy', right: '«Zjawisko dysocjacji elektrolitycznej zachodzi pod wpływem cząsteczek wody»' },
      { left: 'Styl urzędowy', right: '«Wzywa się wnioskodawcę do uzupełnienia braków formalnych w terminie 7 dni»' },
      { left: 'Styl artystyczny', right: '«Ciemność snuła się szeptem wzdłuż szmaragdowych fal milczącej rzeki»' },
      { left: 'Styl potoczny', right: '«No siemka, zgadamy się jakoś po obiedzie na boisku, elo!»' }
    ]
  },
  {
    type: 'sorting',
    title: 'FRAZEOLOGIA • STOPNIE ZWIĄZANIA',
    prompt: 'Przypisz związki frazeologiczne do kategorii związków stałych lub łączliwych:',
    categories: ['ZWIĄZKI STAŁE (IDIOMY - NIEWYMIENNE)', 'ZWIĄZKI ŁĄCZLIWE (MOŻLIWY SYNONIM)'],
    items: [
      { text: 'Flaki z olejem (coś nudnego - nie można zastąpić słowa)', category: 'ZWIĄZKI STAŁE (IDIOMY - NIEWYMIENNE)' },
      { text: 'Zrobić / wywołać / sprawić awanturę', category: 'ZWIĄZKI ŁĄCZLIWE (MOŻLIWY SYNONIM)' },
      { text: 'Ciemna masa (o kimś tępym - konstrukcja nienaruszalna)', category: 'ZWIĄZKI STAŁE (IDIOMY - NIEWYMIENNE)' },
      { text: 'Płakać / szlochać gorzkimi łzami', category: 'ZWIĄZKI ŁĄCZLIWE (MOŻLIWY SYNONIM)' }
    ]
  },
  {
    type: 'quiz',
    title: 'KULTURA JĘZYKA • AKCENT PROPAROKSYTONICZNY',
    prompt: 'W którym z poniższych wyrazów akcent pada nietypowo na trzecią sylabę od końca (akcent proparoksytoniczny)?',
    options: [
      { text: 'Matematyka, fizyka, zrobiliśmy, nauczyliście się', correct: true },
      { text: 'Szkoła, książka, zeszyt, długopis', correct: false },
      { text: 'Komputer, telefon, dyrektor, sekretarka', correct: false },
      { text: 'Samochód, rower, tramwaj, hulajnoga', correct: false }
    ],
    hint: 'Zapożyczenia grecko-łacińskie na -yka/-ika oraz 1. i 2. os. l. mn. czasu przeszłego akcentujemy na 3. sylabę od końca.'
  },
  {
    type: 'matchup',
    title: 'PRZYSŁOWIA POLSKIE • MĄDROŚĆ NARODOWA',
    prompt: 'Dokończ znane polskie przysłowie ludowe:',
    pairs: [
      { left: 'Kto pod kim dołki kopie...', right: 'ten sam w nie wpada' },
      { left: 'Gdzie kucharek sześć...', right: 'tam nie ma co jeść' },
      { left: 'Lepszy wróbel w garści...', right: 'niż gołąb na dachu' },
      { left: 'Nie chwal dnia...', right: 'przed zachodem słońca' }
    ]
  },
  {
    type: 'sorting',
    title: 'ORTOGRAFIA • WIELKA I MAŁA LITERA',
    prompt: 'Przypisz nazwy do pisowni wielką lub małą literą:',
    categories: ['WIELKA LITERA (MAJUSKUŁA)', 'MAŁA LITERA (MINUSKUŁA)'],
    items: [
      { text: 'Polak, Francuz, Anglik (mieszkańcy państw)', category: 'WIELKA LITERA (MAJUSKUŁA)' },
      { text: 'warszawiak, krakowianin (mieszkańcy miast)', category: 'MAŁA LITERA (MINUSKUŁA)' },
      { text: 'Boże Narodzenie, Wielkanoc (nazwy świąt)', category: 'WIELKA LITERA (MAJUSKUŁA)' },
      { text: 'język polski, literatura polska (przymiotniki od państw)', category: 'MAŁA LITERA (MINUSKUŁA)' }
    ]
  },
  {
    type: 'quiz',
    title: 'BŁĘDY JĘZYKOWE • PLEONAZMY I TAUTOLOGIE',
    prompt: 'Wskaż zdanie, w którym występuje błąd logiczno-językowy typu pleonazm («masło maślane»):',
    options: [
      { text: 'Profesor nakazał studentom cofnąć się do tyłu i kontynuować dalej wykład.', correct: true },
      { text: 'Profesor nakazał studentom cofnąć się o dwa kroki i kontynuować wykład.', correct: false },
      { text: 'Wszyscy uczniowie z uwagą wysłuchali wykładu w auli uniwersyteckiej.', correct: false },
      { text: 'W bibliotece zebrano cenne starodruki i rękopisy naukowe.', correct: false }
    ],
    hint: 'Cofać można się wyłącznie w tył, a kontynuować można tylko dalej – to powtórzenie tej samej treści.'
  },
  {
    type: 'matchup',
    title: 'TEORIA LITERATURY • ŚRODKI POETYCKIE',
    prompt: 'Dopasuj zaawansowany środek poetycki do jego przykładu z literatury klasycznej:',
    pairs: [
      { left: 'Elipsa (wyrzutnia)', right: 'Opuszczenie elementu zdania domyślnego w kontekście: «Ja do lasu, a on w pole»' },
      { left: 'Synekdoha (ogarnienie)', right: 'Użycie części zamiast całości: «dach nad głową» (zamiast: cały dom)' },
      { left: 'Onomatopeja (dźwiękonaśladownictwo)', right: 'Naśladowanie dźwięków natury mową: «szumią, brzęczą, szeleszczą»' },
      { left: 'Polisyndeton', right: 'Połączenie kolejnych zdań tym samym powtarzanym spójnikiem: «I dzień, i noc, i wiatr»' }
    ]
  }
];

export const PROFESOR_ENCOUNTER = {
  type: 'profesor_quiz',
  titlePl: 'Profesor (56 HP)',
  subtitlePl: 'BOSS: PROFESOR (WIEDZA TAJEMNA I NAUKOWA)',
  icon: './assets/Postacie/Profesor.png',
  enemyName: 'profesor',
  enemyMaxHp: 56,
  enemyDamage: 2,
  descriptionPl: 'Dostojny Profesor egzaminuje Cię ze słowotwórstwa, archaizmów, gatunków literackich i frazeologii! Udowodnij swoją erudycję!',
  challenges: PROFESOR_CHALLENGES
};
