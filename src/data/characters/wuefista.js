// Pan Wuefista - Postać Gaduła (30 HP, Męski lektor)
// Hala sportowa, rozgrzewka, strój gimnastyczny, zasady gry i fair play (A0/A1)

export const WUEFISTA_ENCOUNTER = {
  type: 'wuefista_dialog',
  titlePl: 'Pan Wuefista (44 HP, 4 dmg)',
  subtitlePl: 'Zbiórka na przerwę i boisko',
  icon: './assets/Postacie/Wuefista.png',
  archetype: 'gadula',
  enemyName: 'wuefista',
  enemyMaxHp: 44,
  enemyDamage: 4,
  descriptionPl: 'Rozmowa z trenerem o dyscyplinie, rozgrzewce i zasadach fair play.',
  steps: [
    {
      question: '„Cześć! Zanim wybiegniemy na halę – co jest absolutnie najważniejsze przed każdym meczem?”',
      options: [
        { text: '„Porządna rozgrzewka całego ciała, żeby uniknąć kontuzji!”', correct: true },
        { text: '„Od razu biec pod bramkę i strzelać z całej siły bez rozgrzewki.”', correct: false },
        { text: '„Zjeść duży i ciężki obiad w szatni tuż przed gwizdkiem.”', correct: false },
        { text: '„Zdjąć ochraniacze i zostawić butelkę z wodą w klasie.”', correct: false }
      ]
    },
    {
      question: '„Świetnie! A jaki strój sportowy obowiązuje każdego ucznia na parkiecie sali gimnastycznej?”',
      options: [
        { text: '„Biała koszulka, spodenki i trampki z jasną podeszwą.”', correct: true },
        { text: '„Czarne trampki z ciemną podeszwą, która brudzi parkiet.”', correct: false },
        { text: '„Dres gimnastyczny, ale bez zmiany butów z korytarza.”', correct: false },
        { text: '„Mogę ćwiczyć w samych skarpetkach bez butów sportowych.”', correct: false }
      ]
    },
    {
      question: '„Brawo! Dzisiaj ćwiczymy podania i strzały. Pamiętasz co robimy, gdy sędzia zagwiżdże w gwizdek?”',
      options: [
        { text: '„Natychmiast przerywamy grę, zatrzymujemy piłkę i słuchamy sędziego!”', correct: true },
        { text: '„Gramy dalej przed siebie i całkowicie ignorujemy gwizdek sędziego na boisku!”', correct: false },
        { text: '„Kłócimy się głośno z sędzią i z całej siły rzucamy piłką w stronę trybun!”', correct: false },
        { text: '„Schodzimy szybko do szatni bez pozwolenia trenera i uciekamy do domu!”', correct: false }
      ]
    },
    {
      question: '„Znakomicie! A jeśli twoja drużyna przegra mecz po zaciętej walce, jak zachowujesz się po końcowym gwizdku?”',
      options: [
        { text: '„Podaję rękę rywalom, dziękuję za mecz i mówię: dzięki za grę!”', correct: true },
        { text: '„Obrażam się na kolegów z drużyny i nie podaję ręki nikomu.”', correct: false },
        { text: '„Mówię rywalom, że oszukiwali i nie uznaję wyniku meczu.”', correct: false },
        { text: '„Płaczę na środku boiska i odmawiam zejścia do szatni.”', correct: false }
      ]
    },
    {
      question: '„Widzę, że masz duszę prawdziwego sportowca i mistrza! Jesteś gotowy na Wielki Finał z Piłkarzem?”',
      options: [
        { text: '„Tak jest, panie trenerze! Znam zasady fair play i dam z siebie wszystko!”', correct: true },
        { text: '„Boję się przegrać za wszelką cenę, więc wolę zostać na ławce rezerwowych!”', correct: false },
        { text: '„Mogę grać, ale zamierzam bez przerwy faulować rywali, żeby wygrać ten mecz!”', correct: false },
        { text: '„Nie lubię w ogóle grać w piłkę nożną na boisku, wolę spokojne gry planszowe!”', correct: false }
      ]
    },
    {
      question: '„Od jakich ćwiczeń najlepiej zacząć bezpieczną rozgrzewkę na sali gimnastycznej?”',
      options: [
        { text: '„Od spokojnego truchtu wokół sali i krążenia ramion oraz nadgarstków!”', correct: true },
        { text: '„Od bezczynnego leżenia na zimnej podłodze sali gimnastycznej bez ruchu!”', correct: false },
        { text: '„Od rzucania z całej siły ciężkimi piłkami lekarskimi prosto w sam sufit!”', correct: false },
        { text: '„Od niebezpiecznego skakania przez wysokiego kozła zupełnie bez materaca!”', correct: false }
      ]
    },
    {
      question: '„Co należy zrobić z zegarkiem, łańcuszkiem lub okularami przed dynamicznym meczem?”',
      options: [
        { text: '„Zdjąć biżuterię i zegarek oraz odłożyć w bezpieczne miejsce, by nikt się nie zranił!”', correct: true },
        { text: '„Założyć jeszcze więcej wiszących bransoletek i łańcuszków na obie ręce przed meczem!”', correct: false },
        { text: '„Trzymać duży telefon komórkowy w dłoni podczas szybkiego biegu na sali gimnastycznej!”', correct: false },
        { text: '„Rzucić swój cenny metalowy zegarek na sam środek boiska tuż przed rozpoczęciem gry!”', correct: false }
      ]
    },
    {
      question: '„Który zawodnik w piłce nożnej jako jedyny może łapać piłkę w ręce we własnym polu karnym?”',
      options: [
        { text: '„Bramkarz w rękawicach bramkarskich!”', correct: true },
        { text: '„Środkowy napastnik na połowie przeciwnika.”', correct: false },
        { text: '„Każdy zawodnik rezerwowy siedzący na ławce.”', correct: false },
        { text: '„Sędzia główny prowadzący zawody.”', correct: false }
      ]
    },
    {
      question: '„A ile punktów zdobywa drużyna w koszykówce za celny rzut zza linii rzutów wolnych z bliska (z gry)?”',
      options: [
        { text: '„Dwa punkty za celny rzut z pola (lub trzy zza dalekiego łuku)!”', correct: true },
        { text: '„Dokładnie sto punktów za każde pojedyncze dotknięcie obręczy kosza!”', correct: false },
        { text: '„Równe zero punktów, w koszykówce w ogóle nie liczy się żadnych punktów!”', correct: false },
        { text: '„Około pięćdziesiąt punktów za każde celne podanie piłki do sędziego!”', correct: false }
      ]
    },
    {
      question: '„W siatkówce drużyna przebija piłkę nad siatką. Ile maksymalnie odbić ma zespół przed przebiciem na drugą stronę?”',
      options: [
        { text: '„Maksymalnie trzy odbicia (przyjęcie, wystawa i atak)!”', correct: true },
        { text: '„Dwadzieścia odbić pod rząd przez jednego gracza.”', correct: false },
        { text: '„Piłkę trzeba złapać w koszulkę i przenieść pod siatką.”', correct: false },
        { text: '„W siatkówce wolno kopać piłkę wyłącznie głową.”', correct: false }
      ]
    },
    {
      question: '„Co robisz, gdy w trakcie biegu na WF-ie rozwiąże ci się sznurówka w trampkach?”',
      options: [
        { text: '„Schodzę bezpiecznie na bok boiska i dokładnie zawiązuję sznurówkę!”', correct: true },
        { text: '„Biegnę z całych sił dalej z rozwiązaną sznurówką, ryzykując upadek!”', correct: false },
        { text: '„Zdejmuję natychmiast jednego buta i rzucam nim z daleka prosto do kosza!”', correct: false },
        { text: '„Kładę się na linii środkowej bez jakiegokolwiek ostrzeżenia innych graczy!”', correct: false }
      ]
    },
    {
      question: '„Po intensywnym meczu organizm traci dużo wody. Czym najlepiej uzupełnić płyny?”',
      options: [
        { text: '„Czystą, niegazowaną wodą mineralną pitą małymi łykami!”', correct: true },
        { text: '„Wypiciem wielu litrów bardzo słodkiego napoju gazowanego!”', correct: false },
        { text: '„Zimnymi słodkimi lodami na patyku jedzonymi w szybkim biegu!”', correct: false },
        { text: '„W ogóle pod żadnym pozorem nie wolno pić przez cały dzień!”', correct: false }
      ]
    },
    {
      question: '„Kolega z drużyny przypadkowo potknął się i przewrócił na parkiet. Jak się zachowasz?”',
      options: [
        { text: '„Podbiegam, podaję mu rękę i pytam, czy nic mu się nie stało!”', correct: true },
        { text: '„Wyśmiewam go głośno i złośliwie na sali przed całą naszą klasą!”', correct: false },
        { text: '„Krzyczę ze złością na niego, że psuje nam całą bramkową akcję!”', correct: false },
        { text: '„Przeskakuję zuchwale nad nim i biegnę szybko do szatni szkolnej!”', correct: false }
      ]
    },
    {
      question: '„Co oznacza komenda nauczyciela WF-u: W szeregu zbiórka?”',
      options: [
        { text: '„Ustawiamy się równo ramię przy ramieniu według wzrostu i czekamy w ciszy!”', correct: true },
        { text: '„Każdy z uczniów ucieka z krzykiem w zupełnie inny kąt sali gimnastycznej!”', correct: false },
        { text: '„Wszyscy siadamy bez pytania na wysokich parapetach okiennych na korytarzu!”', correct: false },
        { text: '„Wychodzimy samowolnie na szkolny korytarz, aby kupić słodką drożdżówkę w sklepiku!”', correct: false }
      ]
    },
    {
      question: '„Dlaczego przed skokami w dal lub przewrotami rozkładamy na podłodze gruby materac?”',
      options: [
        { text: '„Żeby zamortyzować lądowanie i chronić kręgosłup oraz stawy!”', correct: true },
        { text: '„Żeby uczniowie mogli spokojnie uciąć sobie drzemkę w trakcie lekcji!”', correct: false },
        { text: '„Żeby schować głęboko pod nim wszystkie pożyczone od kolegów zeszyty!”', correct: false },
        { text: '„Bo drewniana podłoga w sali gimnastycznej jest za mało śliska do biegu!”', correct: false }
      ]
    },
    {
      question: '„Gdy kapitanowie wybierają składy drużyn, jak traktujemy mniej wysportowanych kolegów?”',
      options: [
        { text: '„Zapraszamy każdego do gry i wspieramy się nawzajem w zespole!”', correct: true },
        { text: '„Mówimy im złośliwie, że nie mają prawa wejść na szkolne boisko!”', correct: false },
        { text: '„Każe się im stać karnie w ciemnym kącie przez całą godzinę lekcji!”', correct: false },
        { text: '„Zabieramy im bez pytania ich czysty strój gimnastyczny z szatni!”', correct: false }
      ]
    },
    {
      question: '„Co należy zrobić ze sprzętem sportowym (piłkami, szarfami, pachołkami) po zakończeniu lekcji WF-u?”',
      options: [
        { text: '„Wspólnie pozbierać cały sprzęt i odnieść go do magazynku sportowego!”', correct: true },
        { text: '„Zostawić porozrzucane piłki na całej podłodze dużej sali gimnastycznej!”', correct: false },
        { text: '„Wykopać ze złości wszystkie pachołki treningowe na szkolny korytarz!”', correct: false },
        { text: '„Schować kolorowe szarfy gimnastyczne do głębokiego kosza na śmieci!”', correct: false }
      ]
    },
    {
      question: '„Dlaczego po zakończonym wysiłku na WF-ie warto wykonać kilka spokojnych ćwiczeń rozciągających i oddechowych?”',
      options: [
        { text: '„Aby uspokoić tętno, wyrównać oddech i rozluźnić zmęczone mięśnie!”', correct: true },
        { text: '„Aby spóźnić się na następną ważną lekcję matematyki w klasie na piętrze!”', correct: false },
        { text: '„Bo bardzo nie lubimy przebierać się w szatni w nasze codzienne ubranie!”', correct: false },
        { text: '„Żeby celowo zgubić metalowy kluczyk do szafki na ubrania w szatni!”', correct: false }
      ]
    },
    {
      question: '„O czym należy pamiętać w szatni po skończonej lekcji wychowania fizycznego?”',
      options: [
        { text: '„Umyć ręce i twarz, przebrać przepoconą koszulkę i zostawić porządek na ławce!”', correct: true },
        { text: '„Iść na lekcję języka polskiego w mokrym, nieprzyjemnym stroju sportowym po WF!”', correct: false },
        { text: '„Porozrzucać ze złości cudze buty i trampki po całym szkolnym korytarzu w szatni!”', correct: false },
        { text: '„Odkręcić na maksa wszystkie krany z wodą w łazience i szybko wyjść ze szkoły!”', correct: false }
      ]
    },
    {
      question: '„Kiedy sędzia dyktuje rzut karny w piłce nożnej?”',
      options: [
        { text: '„Gdy zawodnik drużyny broniącej popełni faul lub zagra ręką we własnym polu karnym!”', correct: true },
        { text: '„Gdy piłka nożna wyleci daleko na aut poza linię boczną na samym środku boiska!”', correct: false },
        { text: '„Zawsze wtedy, kiedy głośno zadzwoni szkolny dzwonek na przerwę obiadową dla klas!”', correct: false },
        { text: '„Zawsze w sytuacji, gdy bramkarz drużyny pewnie złapie lecącą piłkę w rękawice!”', correct: false }
      ]
    },
    {
      question: '„Co jest ważniejsze w szkolnym sporcie: wynik za wszelką cenę czy zdrowie i szacunek dla rywala?”',
      options: [
        { text: '„Zdrowie, bezpieczeństwo i wzajemny szacunek — w duchu Fair Play!”', correct: true },
        { text: '„Wygrana za wszelką cenę, nawet poprzez brutalne oszustwo i faule!”', correct: false },
        { text: '„Głośna i niepotrzebna kłótnia z całą klasą o jeden niesłuszny punkt!”', correct: false },
        { text: '„Całkowite unikanie jakiegokolwiek ruchu fizycznego na świeżym powietrzu!”', correct: false }
      ]
    },
    {
      question: '„Brawo! Zdałeś cały egzamin ze sportowej kultury i zasad gry! Ruszaj śmiało po zwycięstwo!”',
      options: [
        { text: '„Dziękuję panie trenerze! Do zobaczenia na boisku!”', correct: true },
        { text: '„Zgubiłem zeszyt w kratkę i nie pamiętam zadania!”', correct: false },
        { text: '„Poproszę jeden ulgowy bilet na miejski autobus!”', correct: false },
        { text: '„Dobranoc wszystkim kolegom, idę już prosto spać!”', correct: false }
      ]
    }
  ]
};
