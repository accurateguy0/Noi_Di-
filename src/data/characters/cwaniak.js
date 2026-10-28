// Cwaniak - Spryciarz z podwórka i ulicy
// Boss: 70 HP, bije po 3 HP | Zwykły: 35 HP, bije po 2 HP
// Minigry: Prawda czy Fałsz, Przebij Balon (20 pytań na zestaw!)

export const CWANIAK_ENCOUNTERS = {
  regular: {
    type: 'cwaniak_tf',
    titlePl: 'Cwaniak (35 HP, 2 dmg)',
    subtitlePl: 'Prawda czy Fałsz: Sprytne triki i slang',
    icon: './assets/Postacie/Cwaniak.png',
    enemyName: 'Cwaniak',
    enemyMaxHp: 35,
    enemyDamage: 2,
    descriptionPl: 'Cwaniak testuje twój miejski spryt! Prawda czy fałsz?',
    questions: [
      {
        promptPl: "Gdy kolega rzuca «Elo!», odpowiadasz mu «Dzień dobry panu!».",
        isTrue: false,
        explanation: "FAŁSZ! «Elo» to luźne powitanie rówieśnicze – odpowiadasz «Siemka!» lub «Elo!»."
      },
      {
        promptPl: "Zwrot «Ale przypał!» oznacza wstydliwą lub niezręczną wpadkę.",
        isTrue: true,
        explanation: "PRAWDA! Przypał to w slangu wpadka lub kłopotliwa sytuacja."
      },
      {
        promptPl: "«Sztos» to w slangu coś zupełnie beznadziejnego i nudnego.",
        isTrue: false,
        explanation: "FAŁSZ! Sztos oznacza coś rewelacyjnego i imponującego!"
      },
      {
        promptPl: "Gdy ktoś mówi «Dobra, nara!», oznacza to, że się żegna i idzie.",
        isTrue: true,
        explanation: "PRAWDA! Nara to popularne rówieśnicze pożegnanie («na razie»)."
      },
      {
        promptPl: "Zwrot «Nie ma opcji!» oznacza stanowczą odmowę lub niemożliwość wykonania czegoś.",
        isTrue: true,
        explanation: "PRAWDA! To potoczne wyrażenie kategorycznego sprzeciwu."
      },
      {
        promptPl: "Słowo «dzban» użyte w slangu podwórkowym oznacza pyszny napój z sokiem.",
        isTrue: false,
        explanation: "FAŁSZ! To obraźliwe określenie kogoś niemądrego lub nierozgarniętego."
      },
      {
        promptPl: "Gdy ktoś mówi «Mam fazę na czytanie», oznacza to, że bardzo wkręcił się w lekturę.",
        isTrue: true,
        explanation: "PRAWDA! Mieć fazę to potocznie mieć wielki entuzjazm i pasję."
      },
      {
        promptPl: "Zwrot «Ale ściema!» oznacza, że ktoś mówi najprawdziwszą prawdę.",
        isTrue: false,
        explanation: "FAŁSZ! Ściema oznacza kłamstwo, blagę lub zmyśloną historię."
      },
      {
        promptPl: "Wyrażenie «Złapać doła» to metafora smutku, przygnębienia i spadku nastroju.",
        isTrue: true,
        explanation: "PRAWDA! Oznacza przejściowe załamanie humoru lub smutek."
      },
      {
        promptPl: "«Spinać się» na podwórku oznacza zrelaksować się i leżeć na hamaku.",
        isTrue: false,
        explanation: "FAŁSZ! Spinać się to złościć się, denerwować lub nadmiernie stresować."
      },
      {
        promptPl: "Zwrot «Wbijać na imprezę» oznacza przyjście lub dołączenie do wydarzenia.",
        isTrue: true,
        explanation: "PRAWDA! Wbijać to w slangu przychodzić, zjawiać się."
      },
      {
        promptPl: "Słowo «masakra» w języku młodzieżowym może oznaczać coś skrajnie złego albo szokującego.",
        isTrue: true,
        explanation: "PRAWDA! Używane jest jako uniwersalny wykrzyknik zdziwienia lub przerażenia."
      },
      {
        promptPl: "Gdy kolega mówi «Mam pustkę w głowie na sprawdzianie», oznacza to, że wszystko pamięta.",
        isTrue: false,
        explanation: "FAŁSZ! Oznacza nagły zanik pamięci pod wpływem stresu."
      },
      {
        promptPl: "Określenie «Typiara» i «Typie» to potoczne określenia osoby w slangu.",
        isTrue: true,
        explanation: "PRAWDA! Typ to w mowie młodzieżowej człowiek, chłopak lub dziewczyna."
      },
      {
        promptPl: "Zwrot «Daj spokój!» wyraża zniecierpliwienie, prośbę o zaniechanie zaczepki lub niedowierzanie.",
        isTrue: true,
        explanation: "PRAWDA! To powszechny zwrot apelatywny w języku potocznym."
      },
      {
        promptPl: "Gdy ktoś mówi «Jestem spłukany», oznacza to, że właśnie wyszedł spod prysznica.",
        isTrue: false,
        explanation: "FAŁSZ! W slangu oznacza to brak pieniędzy w portfelu."
      },
      {
        promptPl: "Słowo «Kozak» w znaczeniu potocznym opisuje kogoś odważnego, pewnego siebie lub imponującego.",
        isTrue: true,
        explanation: "PRAWDA! Kozak to ktoś zuchwały i twardy."
      },
      {
        promptPl: "Zwrot «Rzucić okiem» oznacza wyjęcie oka i rzucenie nim o chodnik.",
        isTrue: false,
        explanation: "FAŁSZ! To frazeologizm oznaczający: spojrzeć na coś krótko i uważnie."
      },
      {
        promptPl: "Gdy ktoś mówi «Trzymaj się!», jest to serdeczne i ciepłe pożegnanie.",
        isTrue: true,
        explanation: "PRAWDA! To powszechne życzenie pomyślności i siły na pożegnanie."
      },
      {
        promptPl: "Słowo «Giga» używane przed przymiotnikiem (np. gigadobry) pełni funkcję przedrostka wyolbrzymiającego.",
        isTrue: true,
        explanation: "PRAWDA! Giga- wzmacnia cechę do potęgi, podobnie jak mega- i super-."
      }
    ]
  },
  boss: {
    type: 'boss_cwaniak',
    titlePl: 'BOSS: Cwaniak (70 HP, 3 dmg)',
    subtitlePl: 'Wielki Finał Ulicy: Przebij Balony i Rozszyfruj Blefy',
    icon: './assets/Postacie/Cwaniak.png',
    enemyName: 'Cwaniak',
    enemyMaxHp: 70,
    enemyDamage: 3,
    descriptionPl: 'Cwaniak jako Boss Miasta! 70 HP i 3 obrażenia. Balony i prawda/fałsz!',
    questions: [
      {
        promptPl: "Czy «kasa» i «hajs» to popularne potoczne określenia na pieniądze?",
        isTrue: true,
        explanation: "PRAWDA! W języku potocznym na monety i banknoty mówi się kasa lub hajs."
      },
      {
        promptPl: "Czy w autobusie wolno jechać bez skasowanego biletu, jeśli jedziesz tylko 1 przystanek?",
        isTrue: false,
        explanation: "FAŁSZ! Nawet na 1 przystanek musisz mieć ważny skasowany bilet!"
      },
      {
        promptPl: "Czy zwrot «Dzięki za pomoc!» brzmi naturalnie i grzecznie?",
        isTrue: true,
        explanation: "PRAWDA! To świetne podziękowanie wobec kolegi."
      },
      {
        promptPl: "Czy na egzaminie ósmoklasisty wolno używać korektora i ołówka w karcie odpowiedzi?",
        isTrue: false,
        explanation: "FAŁSZ! Kartę odpowiedzi wypełnia się wyłącznie czarnym długopisem bez korektora."
      },
      {
        promptPl: "Czy zwrot «Wziąć nogi za pas» oznacza szybką ucieczkę przed niebezpieczeństwem?",
        isTrue: true,
        explanation: "PRAWDA! To frazeologizm oznaczający pośpieszne oddalenie się."
      },
      {
        promptPl: "Czy manipulacja reklamowa zawsze podaje obiektywne wady zachwalanego produktu?",
        isTrue: false,
        explanation: "FAŁSZ! Reklama celowo eksponuje wyłącznie pozorne zalety i ukrywa wady."
      },
      {
        promptPl: "Czy w kulturalnej rozmowie wolno przerywać rozmówcy w połowie zdania?",
        isTrue: false,
        explanation: "FAŁSZ! Należy wysłuchać do końca i dopiero wtedy zabrać głos."
      },
      {
        promptPl: "Czy «hejt» w internecie jest bezkarny, bo autor komentarza jest rzekomo anonimowy?",
        isTrue: false,
        explanation: "FAŁSZ! Każde urządzenie w sieci pozostawia adres IP i policja może ustalić sprawcę zniesławienia."
      },
      {
        promptPl: "Czy zasada ograniczonego zaufania obowiązuje pieszego na każdym przejściu przez jezdnię?",
        isTrue: true,
        explanation: "PRAWDA! Zawsze trzeba upewnić się, czy nadjeżdżający kierowca na pewno wyhamował."
      },
      {
        promptPl: "Czy słowo «pleonazm» oznacza logiczny błąd powtórzenia treści (np. «spadać w dół»)?",
        isTrue: true,
        explanation: "PRAWDA! Pleonazm to niepotrzebne nagromadzenie synonimicznych słów."
      },
      {
        promptPl: "Czy pożyczoną książkę ze szkolnej biblioteki wolno oddać z poplamionymi i zagiętymi kartkami?",
        isTrue: false,
        explanation: "FAŁSZ! Książki biblioteczne są wspólnym dobrem i należy o nie dbać ze szczególną troską."
      },
      {
        promptPl: "Czy zwrot «Palić za sobą mosty» oznacza zerwanie kontaktów bez możliwości powrotu?",
        isTrue: true,
        explanation: "PRAWDA! To frazeologizm oznaczający podjęcie nieodwracalnej decyzji."
      },
      {
        promptPl: "Czy słowo «Biernik» odpowiada na pytania: Kogo? Co?",
        isTrue: true,
        explanation: "PRAWDA! Biernik (Accusativus) w deklinacji odpowiada na pytania: kogo? co? widzę."
      },
      {
        promptPl: "Czy na czerwonym świetle pieszy może przejść przez ulicę, jeśli w pobliżu nie widać aut?",
        isTrue: false,
        explanation: "FAŁSZ! Czerwone światło to bezwzględny zakaz wchodzenia na jezdnię!"
      },
      {
        promptPl: "Czy zwrot «Ręce opadają» wyraża bezsilność i rezygnację w obliczu czyjejś głupoty?",
        isTrue: true,
        explanation: "PRAWDA! To frazeologizm oznaczający brak sił i bezradność."
      },
      {
        promptPl: "Czy w oficjalnym liście do Dyrektora szkoły można rozpocząć słowami «Siemanko Ziom!»?",
        isTrue: false,
        explanation: "FAŁSZ! Do dyrekcji zwracamy się oficjalnie: «Szanowna Pani Dyrektor» lub «Szanowny Panie Dyrektorze»."
      },
      {
        promptPl: "Czy zjedzenie pożywnego posiłku przed egzaminem poprawia koncentrację szarych komórek mózgu?",
        isTrue: true,
        explanation: "PRAWDA! Glukoza ze złożonych węglowodanów jest podstawowym paliwem dla mózgu."
      },
      {
        promptPl: "Czy w języku polskim partykułę «nie» z przymiotnikami w stopniu równym piszemy rozdzielnie?",
        isTrue: false,
        explanation: "FAŁSZ! Piszemy łącznie: np. niemiły, niedobry, nieszczęśliwy."
      },
      {
        promptPl: "Czy kulturalny człowiek potrafi powiedzieć «przepraszam», gdy popełni błąd?",
        isTrue: true,
        explanation: "PRAWDA! Przeprosiny to cecha odwagi cywilnej i dojrzałości emocjonalnej."
      },
      {
        promptPl: "Czy cwaniak, który oszukuje w grze towarzyskiej, buduje prawdziwy szacunek wśród kolegów?",
        isTrue: false,
        explanation: "FAŁSZ! Oszukiwanie niszczy zaufanie i sprawia, że nikt nie chce z nim grać."
      }
    ]
  }
};
