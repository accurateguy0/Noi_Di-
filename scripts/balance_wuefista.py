import sys, os
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.build_full_rebalance import rebalance_file

wuefista_data = {
    '„Natychmiast przerywamy grę, zatrzymujemy piłkę i słuchamy sędziego!”': {
        'wrongs': [
            '„Gramy dalej przed siebie i całkowicie ignorujemy gwizdek sędziego na boisku!”',
            '„Kłócimy się głośno z sędzią i z całej siły rzucamy piłką w stronę trybun!”',
            '„Schodzimy szybko do szatni bez pozwolenia trenera i uciekamy do domu!”'
        ]
    },
    '„Tak jest, panie trenerze! Znam zasady fair play i dam z siebie wszystko!”': {
        'wrongs': [
            '„Boję się przegrać za wszelką cenę, więc wolę zostać na ławce rezerwowych!”',
            '„Mogę grać, ale zamierzam bez przerwy faulować rywali, żeby wygrać ten mecz!”',
            '„Nie lubię w ogóle grać w piłkę nożną na boisku, wolę spokojne gry planszowe!”'
        ]
    },
    '„Od spokojnego truchtu wokół sali i krążenia ramion oraz nadgarstków!”': {
        'wrongs': [
            '„Od bezczynnego leżenia na zimnej podłodze sali gimnastycznej bez ruchu!”',
            '„Od rzucania z całej siły ciężkimi piłkami lekarskimi prosto w sam sufit!”',
            '„Od niebezpiecznego skakania przez wysokiego kozła zupełnie bez materaca!”'
        ]
    },
    '„Zdjąć biżuterię i zegarek oraz odłożyć w bezpieczne miejsce, by nikt się nie zranił!”': {
        'wrongs': [
            '„Założyć jeszcze więcej wiszących bransoletek i łańcuszków na obie ręce przed meczem!”',
            '„Trzymać duży telefon komórkowy w dłoni podczas szybkiego biegu na sali gimnastycznej!”',
            '„Rzucić swój cenny metalowy zegarek na sam środek boiska tuż przed rozpoczęciem gry!”'
        ]
    },
    '„Dwa punkty za celny rzut z pola (lub trzy zza dalekiego łuku)!”': {
        'wrongs': [
            '„Dokładnie sto punktów za każde pojedyncze dotknięcie obręczy kosza!”',
            '„Równe zero punktów, w koszykówce w ogóle nie liczy się żadnych punktów!”',
            '„Około pięćdziesiąt punktów za każde celne podanie piłki do sędziego!”'
        ]
    },
    '„Schodzę bezpiecznie na bok boiska i dokładnie zawiązuję sznurówkę!”': {
        'wrongs': [
            '„Biegnę z całych sił dalej z rozwiązaną sznurówką, ryzykując upadek!”',
            '„Zdejmuję natychmiast jednego buta i rzucam nim z daleka prosto do kosza!”',
            '„Kładę się na linii środkowej bez jakiegokolwiek ostrzeżenia innych graczy!”'
        ]
    },
    '„Czystą, niegazowaną wodą mineralną pitą małymi łykami!”': {
        'wrongs': [
            '„Wypiciem wielu litrów bardzo słodkiego napoju gazowanego!”',
            '„Zimnymi słodkimi lodami na patyku jedzonymi w szybkim biegu!”',
            '„W ogóle pod żadnym pozorem nie wolno pić przez cały dzień!”'
        ]
    },
    '„Podbiegam, podaję mu rękę i pytam, czy nic mu się nie stało!”': {
        'wrongs': [
            '„Wyśmiewam go głośno i złośliwie na sali przed całą naszą klasą!”',
            '„Krzyczę ze złością na niego, że psuje nam całą bramkową akcję!”',
            '„Przeskakuję zuchwale nad nim i biegnę szybko do szatni szkolnej!”'
        ]
    },
    '„Ustawiamy się równo ramię przy ramieniu według wzrostu i czekamy w ciszy!”': {
        'wrongs': [
            '„Każdy z uczniów ucieka z krzykiem w zupełnie inny kąt sali gimnastycznej!”',
            '„Wszyscy siadamy bez pytania na wysokich parapetach okiennych na korytarzu!”',
            '„Wychodzimy samowolnie na szkolny korytarz, aby kupić słodką drożdżówkę w sklepiku!”'
        ]
    },
    '„Żeby zamortyzować lądowanie i chronić kręgosłup oraz stawy!”': {
        'wrongs': [
            '„Żeby uczniowie mogli spokojnie uciąć sobie drzemkę w trakcie lekcji!”',
            '„Żeby schować głęboko pod nim wszystkie pożyczone od kolegów zeszyty!”',
            '„Bo drewniana podłoga w sali gimnastycznej jest za mało śliska do biegu!”'
        ]
    },
    '„Zapraszamy każdego do gry i wspieramy się nawzajem w zespole!”': {
        'wrongs': [
            '„Mówimy im złośliwie, że nie mają prawa wejść na szkolne boisko!”',
            '„Każe się im stać karnie w ciemnym kącie przez całą godzinę lekcji!”',
            '„Zabieramy im bez pytania ich czysty strój gimnastyczny z szatni!”'
        ]
    },
    '„Wspólnie pozbierać cały sprzęt i odnieść go do magazynku sportowego!”': {
        'wrongs': [
            '„Zostawić porozrzucane piłki na całej podłodze dużej sali gimnastycznej!”',
            '„Wykopać ze złości wszystkie pachołki treningowe na szkolny korytarz!”',
            '„Schować kolorowe szarfy gimnastyczne do głębokiego kosza na śmieci!”'
        ]
    },
    '„Aby uspokoić tętno, wyrównać oddech i rozluźnić zmęczone mięśnie!”': {
        'wrongs': [
            '„Aby spóźnić się na następną ważną lekcję matematyki w klasie na piętrze!”',
            '„Bo bardzo nie lubimy przebierać się w szatni w nasze codzienne ubranie!”',
            '„Żeby celowo zgubić metalowy kluczyk do szafki na ubrania w szatni!”'
        ]
    },
    '„Umyć ręce i twarz, przebrać przepoconą koszulkę i zostawić porządek na ławce!”': {
        'wrongs': [
            '„Iść na lekcję języka polskiego w mokrym, nieprzyjemnym stroju sportowym po WF!”',
            '„Porozrzucać ze złości cudze buty i trampki po całym szkolnym korytarzu w szatni!”',
            '„Odkręcić na maksa wszystkie krany z wodą w łazience i szybko wyjść ze szkoły!”'
        ]
    },
    '„Gdy zawodnik drużyny broniącej popełni faul lub zagra ręką we własnym polu karnym!”': {
        'wrongs': [
            '„Gdy piłka nożna wyleci daleko na aut poza linię boczną na samym środku boiska!”',
            '„Zawsze wtedy, kiedy głośno zadzwoni szkolny dzwonek na przerwę obiadową dla klas!”',
            '„Zawsze w sytuacji, gdy bramkarz drużyny pewnie złapie lecącą piłkę w rękawice!”'
        ]
    },
    '„Zdrowie, bezpieczeństwo i wzajemny szacunek — w duchu Fair Play!”': {
        'wrongs': [
            '„Wygrana za wszelką cenę, nawet poprzez brutalne oszustwo i faule!”',
            '„Głośna i niepotrzebna kłótnia z całą klasą o jeden niesłuszny punkt!”',
            '„Całkowite unikanie jakiegokolwiek ruchu fizycznego na świeżym powietrzu!”'
        ]
    },
    '„Dziękuję panie trenerze! Do zobaczenia na boisku!”': {
        'wrongs': [
            '„Zgubiłem zeszyt w kratkę i nie pamiętam zadania!”',
            '„Poproszę jeden ulgowy bilet na miejski autobus!”',
            '„Dobranoc wszystkim kolegom, idę już prosto spać!”'
        ]
    }
}

rebalance_file('src/data/characters/wuefista.js', wuefista_data)
print("wuefista.js balanced!")
