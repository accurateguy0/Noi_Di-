// Olek Gejmer - Postać Gaduła (30 HP)
// Męski lektor, bogate dialogi rówieśnicze i naturalny język szkolny (A0/A1)

export const OLEK_FLOOR_ENCOUNTERS = {
  "1": {
    "type": "olek_quiz_1",
    "titlePl": "Olek Gejmer [Gaduła] (30 HP)",
    "subtitlePl": "Olek Gejmer",
    "icon": "./assets/Postacie/Gejmer.png",
    "archetype": "gadula",
    "enemyName": "gejmer",
    "enemyMaxHp": 30,
    "enemyDamage": 2,
    "descriptionPl": "Poznaj Olka — korytarzowa rozmowa o szkole, pasjach i drużynie bohaterów.",
    "questions": [
      {
        "id": "h1_ol_extra_1",
        "speech": "Pamiętasz do czego służy legitymacja szkolna?",
        "promptPl": "Jaką funkcję pełni legitymacja szkolna?",
        "options": [
          {
            "text": "„Potwierdza tożsamość ucznia i uprawnia do ustawowych ulg komunikacyjnych!”",
            "correct": true
          },
          {
            "text": "„Służy wyłącznie do zapisywania bieżących ocen cząstkowych ze sprawdzianów!”",
            "correct": false
          },
          {
            "text": "„Stanowi jedyną przepustkę upoważniającą do opuszczenia szkoły na przerwie!”",
            "correct": false
          },
          {
            "text": "„Zastępuje obowiązkowy zeszyt przedmiotowy do ćwiczeń z języka polskiego!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_2",
        "speech": "Jak kulturalnie poprosisz panią w bibliotece o wypożyczenie lektury?",
        "promptPl": "Wybierz poprawny zwrot w bibliotece:",
        "options": [
          {
            "text": "„Dzień dobry, chciałbym wypożyczyć książkę Mały Książę, czy jest dostępna?”",
            "correct": true
          },
          {
            "text": "„Dzień dobry, poproszę natychmiast o wydanie nowego egzemplarza lektury!”",
            "correct": false
          },
          {
            "text": "„Dzień dobry, czy w tej bibliotece można zostawić kurtkę na czas lekcji?”",
            "correct": false
          },
          {
            "text": "„Dzień dobry, przyszedłem oddać podręcznik do matematyki po całym semestrze!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_3",
        "speech": "W szatni panuje tłok. Jak poprosisz kolegę o zrobienie miejsca przy szafce?",
        "promptPl": "Wybierz grzeczny zwrot w szatni:",
        "options": [
          {
            "text": "„Przepraszam, czy mógłbyś na chwilę przesunąć swój worek ze sportowymi butami?”",
            "correct": true
          },
          {
            "text": "„Przepraszam, czy widziałeś może gdzieś mój zgubiony szalik z czerwonej wełny?”",
            "correct": false
          },
          {
            "text": "„Przepraszam, czy w tej szafce zostało jeszcze wolne miejsce na moją kurtkę?”",
            "correct": false
          },
          {
            "text": "„Przepraszam, czy mógłbyś pomóc mi zdjąć ten ciężki plecak z górnego wieszaka?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_4",
        "speech": "Dzwonek zadzwonił na przerwę! Czego kategorycznie NIE wolno robić na korytarzu?",
        "promptPl": "Wskaż zachowanie zabronione w regulaminie szkoły:",
        "options": [
          {
            "text": "„Biegać z impetem po korytarzu i zjeżdżać po poręczach schodów.”",
            "correct": true
          },
          {
            "text": "„Spokojnie rozmawiać z kolegami pod salą lekcyjną w czasie przerwy.”",
            "correct": false
          },
          {
            "text": "„Zjeść drugie śniadanie przy stoliku w wyznaczonej strefie relaksu.”",
            "correct": false
          },
          {
            "text": "„Powtórzyć cicho słówka z języka obcego przed trudnym sprawdzianem.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_5",
        "speech": "Jak zwracamy się do dyrektora szkoły spotkanego rano w holu?",
        "promptPl": "Wybierz właściwe powitanie dyrektora:",
        "options": [
          {
            "text": "„Dzień dobry panu dyrektorowi!”",
            "correct": true
          },
          {
            "text": "„Siema zią, co tam słychać dzisiaj?”",
            "correct": false
          },
          {
            "text": "„Do widzenia rano panu dyrektorowi!”",
            "correct": false
          },
          {
            "text": "„Cześć kumpel, jak mija ci ta przerwa?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_6",
        "speech": "W planie lekcji masz skrót „WF”. Co on oznacza?",
        "promptPl": "Rozwiń skrót przedmiotu WF:",
        "options": [
          {
            "text": "„Wychowanie Fizyczne – zajęcia sportowe na sali lub boisku!”",
            "correct": true
          },
          {
            "text": "„Wielki Finał – finałowy mecz w corocznym turnieju szkolnym!”",
            "correct": false
          },
          {
            "text": "„Wspólne Fotografowanie – kółko pasjonatów przyrody i zdjęć!”",
            "correct": false
          },
          {
            "text": "„Wiosenny Festiwal – uroczysty przegląd talentów plastycznych!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_7",
        "speech": "Podczas obiadu na stołówce chcesz pożyczyć sól lub pieprz z sąsiedniego stolika. Co powiesz?",
        "promptPl": "Wybierz uprzejmą prośbę przy stole:",
        "options": [
          {
            "text": "„Przepraszam, czy moglibyście podać solniczkę, jeśli jej nie używacie?”",
            "correct": true
          },
          {
            "text": "„Przepraszam, czy ten dzbanek z kompotem owocowym jest już całkowicie pusty?”",
            "correct": false
          },
          {
            "text": "„Przepraszam, czy mógłbym prosić o podanie czystego widelca ze stolika obok?”",
            "correct": false
          },
          {
            "text": "„Przepraszam, czy ktoś z was zajął już to wolne krzesło przy naszym stole?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_extra_8",
        "speech": "Kończy się lekcja i nauczyciel żegna klasę. Jak odpowiada cała klasa?",
        "promptPl": "Wybierz zgodne pożegnanie z nauczycielem:",
        "options": [
          {
            "text": "„Dziękujemy, do widzenia!”",
            "correct": true
          },
          {
            "text": "„Dzień dobry, zaczynamy!”",
            "correct": false
          },
          {
            "text": "„Smacznego posiłku!”",
            "correct": false
          },
          {
            "text": "„Na zdrowie!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_1",
        "speech": "Siemanko nowicjuszu! Widzę cię tu pierwszy raz. Jak przywitasz się z kolegami z klasy?",
        "promptPl": "Przywitaj się naturalnie z nowym kolegą z klasy:",
        "promptVn": "Chào hỏi tự nhiên với người bạn mới cùng lớp:",
        "options": [
          {
            "text": "„Cześć! Miło cię poznać, zaczynam dziś naukę w tej nowej klasie!”",
            "correct": true
          },
          {
            "text": "„Cześć! Właśnie skończyłem lekcje i biegnę na obiad do stołówki!”",
            "correct": false
          },
          {
            "text": "„Cześć! Wracam z biblioteki i niosę lekturę na jutrzejszy polski!”",
            "correct": false
          },
          {
            "text": "„Cześć! Szukam szatni, bo muszę zmienić buty na trampki sportowe!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_2",
        "speech": "Super! A jaka jest twoja specjalność w naszej drużynie Szkolnych Lochów?",
        "promptPl": "Opowiedz Olkowi o swoim treningu w szkole:",
        "promptVn": "Kể cho Olek về việc rèn luyện trong trường:",
        "options": [
          {
            "text": "„Trenuję język polski, gramatykę i szybkie riposty w pojedynkach!”",
            "correct": true
          },
          {
            "text": "„Ćwiczę biegi sprinterskie, skoki w dal oraz rzuty piłką palantową!”",
            "correct": false
          },
          {
            "text": "„Uczę się programowania robotów oraz tworzenia gier komputerowych!”",
            "correct": false
          },
          {
            "text": "„Rysuję komiksy historyczne oraz projektuję postacie do opowiadań!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_3",
        "speech": "Ekstra! W naszej szkole czekają Wojownik, Złodziej, Robot, Wynalazczyni, Czarownica i Błazen! Kto pierwszy rusza do akcji?",
        "promptPl": "Wskaż pierwszego bohatera naszej drużyny:",
        "promptVn": "Cho biết nhân vật đầu tiên xuất trận:",
        "options": [
          {
            "text": "„Jako pierwszy rusza nieustraszony Wojownik, a potem pozostali bohaterowie!”",
            "correct": true
          },
          {
            "text": "„Na samym początku idzie zwinny Złodziej, badając pułapki na korytarzach!”",
            "correct": false
          },
          {
            "text": "„Pierwszy wchodzi mądry Robot, analizując zagadki i zadania logiczne w sali!”",
            "correct": false
          },
          {
            "text": "„Na czele staje bystry Wynalazca, niosąc niezwykłe narzędzia do walki z bossem!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_4",
        "speech": "Brzmi niesamowicie! Witaj w naszej klasie, razem pokonamy każdy sprawdzian i każdego bossa!",
        "promptPl": "Odwzajemnij życzliwe powitanie Olka:",
        "promptVn": "Đáp lại lời chào mừng nồng nhiệt của Olek:",
        "options": [
          {
            "text": "„Dzięki Olek! Cieszę się bardzo, że jesteśmy w jednej drużynie!”",
            "correct": true
          },
          {
            "text": "„Dzięki Olek! Do zobaczenia na popołudniowym treningu piłkarskim!”",
            "correct": false
          },
          {
            "text": "„Dzięki Olek! Przypomnij mi proszę, do której sali idziemy na lekcję!”",
            "correct": false
          },
          {
            "text": "„Dzięki Olek! Mam nadzieję, że nasza wspólna prezentacja wypadnie super!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_5",
        "speech": "Grasz w jakieś gry na telefonie albo komputerze po lekcjach?",
        "promptPl": "Opowiedz o swoich zainteresowaniach:",
        "promptVn": "Kể về sở thích chơi game của bạn:",
        "options": [
          {
            "text": "„Tak, lubię grać w gry przygodowe na telefonie!”",
            "correct": true
          },
          {
            "text": "„Nie mam przy sobie telefonu na lekcji.”",
            "correct": false
          },
          {
            "text": "„Dzwoni mój telefon w plecaku!”",
            "correct": false
          },
          {
            "text": "„Kto wygrał wczorajszy mecz w telewizji?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_6",
        "speech": "Ja uwielbiam Robloxa i Brawl Stars! Będziemy mogli zagrać razem w weekend!",
        "promptPl": "Zaakceptuj propozycję wspólnej zabawy:",
        "promptVn": "Đồng ý với lời rủ chơi game cùng nhau:",
        "options": [
          {
            "text": "„Super pomysł! Wymienimy się nickami po skończonych lekcjach.”",
            "correct": true
          },
          {
            "text": "„Chętnie zagram! Spotkajmy się na serwerze tuż po ciepłym obiedzie.”",
            "correct": false
          },
          {
            "text": "„Świetna myśl! Dołączę do waszego klanu jeszcze dzisiaj wieczorem.”",
            "correct": false
          },
          {
            "text": "„Brzmi ekstra! Przygotuję odpowiedni sprzęt do grania po powrocie.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_7",
        "speech": "O, słyszysz? Dzwonek wzywa na pierwszą lekcję do sali numer 12. Idziemy razem?",
        "promptPl": "Ruszajcie razem do sali lekcyjnej:",
        "promptVn": "Cùng nhau đi vào phòng học khi có chuông:",
        "options": [
          {
            "text": "„Jasne, chodźmy szybko, żeby się nie spóźnić!”",
            "correct": true
          },
          {
            "text": "„Dzwonek dzwoni na przerwę, idziemy na dwór!”",
            "correct": false
          },
          {
            "text": "„Która to była sala? Sala gimnastyczna?”",
            "correct": false
          },
          {
            "text": "„Do widzenia, wracam po kurtkę do szatni!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_8",
        "speech": "Fajnie, że jesteś z nami w klasie! Będziesz moim kompanem z ławki!",
        "promptPl": "Zgódź się na wspólne siedzenie w ławce:",
        "promptVn": "Đồng ý ngồi chung bàn học với Olek:",
        "options": [
          {
            "text": "„Ekstra! Usiądziemy razem w drugim rzędzie!”",
            "correct": true
          },
          {
            "text": "„Wolę usiąść sam przy biurku nauczyciela.”",
            "correct": false
          },
          {
            "text": "„Gdzie położyłeś mój piórnik, Olek?”",
            "correct": false
          },
          {
            "text": "„Do widzenia, idę do innej klasy.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_9",
        "speech": "A jaki jest twój ulubiony przedmiot szkolny? Ja najbardziej lubię informatykę i WF!",
        "promptPl": "Opowiedz o swoich ulubionych lekcjach:",
        "promptVn": "Kể về môn học yêu thích của bạn:",
        "options": [
          {
            "text": "„Ja też bardzo lubię WF, a do tego matematykę i plastykę!”",
            "correct": true
          },
          {
            "text": "„Moje ulubione lekcje to historia, geografia oraz przyroda!”",
            "correct": false
          },
          {
            "text": "„Najchętniej uczę się języka polskiego oraz informatyki w sali!”",
            "correct": false
          },
          {
            "text": "„Bardzo cenię zajęcia muzyczne, technikę oraz język angielski!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_10",
        "speech": "Co zazwyczaj jesz na drugie śniadanie w czasie długiej przerwy?",
        "promptPl": "Powiedz, co przynosisz w śniadaniówce:",
        "promptVn": "Cho biết bạn thường ăn gì vào bữa phụ:",
        "options": [
          {
            "text": "„Najczęściej mam świeżą kanapkę z serem i soczyste czerwone jabłko.”",
            "correct": true
          },
          {
            "text": "„Zazwyczaj biorę pożywną bułkę z twarogiem i słodkiego dojrzałego banana.”",
            "correct": false
          },
          {
            "text": "„Często pakuję domowe tosty z chudą szynką i mały kartonik soku owocowego.”",
            "correct": false
          },
          {
            "text": "„Najchętniej zabieram chrupiące naleśniki z dżemem oraz garść orzechów włoskich.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_11",
        "speech": "Masz w domu jakieś zwierzątko? Ja mam małego chomika, który kręci się w kołowrotku!",
        "promptPl": "Odpowiedz na pytanie o zwierzęta domowe:",
        "promptVn": "Trả lời câu hỏi về thú cưng ở nhà:",
        "options": [
          {
            "text": "„Ale fajnie! Ja bardzo lubię psy i koty!”",
            "correct": true
          },
          {
            "text": "„Mój chomik prowadzi autobus miejski.”",
            "correct": false
          },
          {
            "text": "„Poproszę bilet ulgowy na tramwaj.”",
            "correct": false
          },
          {
            "text": "„Zapomniałem pracy domowej z przyrody.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_12",
        "speech": "Gdy wchodzimy rano do klasy i widzimy panią wychowawczynię, to co mówimy?",
        "promptPl": "Wybierz poprawne, kulturalne powitanie nauczyciela:",
        "promptVn": "Chọn lời chào lịch sự khi gặp cô giáo chủ nhiệm:",
        "options": [
          {
            "text": "„Mówimy głośno i wyraźnie: Dzień dobry pani!”",
            "correct": true
          },
          {
            "text": "„Wołamy: Siemanko, co tam słychać?”",
            "correct": false
          },
          {
            "text": "„Mówimy: Nara, idę do szatni!”",
            "correct": false
          },
          {
            "text": "„Nic nie mówimy i chowamy się pod ławką.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_13",
        "speech": "A kiedy kończymy lekcje i żegnamy się z kolegami przed szkołą, co najchętniej mówimy?",
        "promptPl": "Wybierz naturalne pożegnanie rówieśnicze:",
        "promptVn": "Chọn lời tạm biệt tự nhiên với bạn bè:",
        "options": [
          {
            "text": "„Mówimy: Nara! Do zobaczenia jutro!”",
            "correct": true
          },
          {
            "text": "„Mówimy: Dzień dobry, poproszę zeszyt!”",
            "correct": false
          },
          {
            "text": "„Mówimy: Smacznego obiadu na lekcji!”",
            "correct": false
          },
          {
            "text": "„Mówimy: Która strona w podręczniku?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_14",
        "speech": "Słyszałem, że na szkolnej stołówce dzisiaj serwują pyszną zupę pomidorową z ryżem! Lubisz ciepłe zupy?",
        "promptPl": "Odpowiedz Olkowi o szkolnym obiedzie:",
        "promptVn": "Trả lời Olek về món súp ở căng tin trường:",
        "options": [
          {
            "text": "„Tak! Ciepła zupa na stołówce dodaje mnóstwo energii na dalsze lekcje!”",
            "correct": true
          },
          {
            "text": "„Tak! Domowy posiłek w gronie kolegów to świetna chwila na regenerację!”",
            "correct": false
          },
          {
            "text": "„Tak! Obiad w szkole pozwala odbudować siły przed trudnym treningiem WF-u!”",
            "correct": false
          },
          {
            "text": "„Tak! Zawsze chętnie jem drugie danie i piję owocowy kompot ze stołówki!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_15",
        "speech": "A jak po polsku zapytasz kolegę, czy wszystko u niego w porządku?",
        "promptPl": "Wskaż popularne koleżeńskie pytanie:",
        "promptVn": "Chọn câu hỏi thăm bạn bè tự nhiên nhất:",
        "options": [
          {
            "text": "„Pytam krótko: Co tam? albo Jak leci?”",
            "correct": true
          },
          {
            "text": "„Pytam: Gdzie jest dziennik lekcyjny?”",
            "correct": false
          },
          {
            "text": "„Pytam: Ile kosztuje bilet miesięczny?”",
            "correct": false
          },
          {
            "text": "„Pytam: Kiedy będzie dzwonek do domu?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h1_ol_16",
        "speech": "Super się z tobą gada! Przybij piątkę na dobry początek dnia w naszej szkole!",
        "promptPl": "Przybij piątkę z nowym przyjacielem:",
        "promptVn": "Đập tay (high-five) với người bạn mới:",
        "options": [
          {
            "text": "„Piątka, Olek! To będzie świetny dzień w szkole!”",
            "correct": true
          },
          {
            "text": "„Nie chcę z nikim rozmawiać na przerwie.”",
            "correct": false
          },
          {
            "text": "„Zgubiłem buty na zmianę w autobusie.”",
            "correct": false
          },
          {
            "text": "„Proszę o wpisanie uwagi do dziennika.”",
            "correct": false
          }
        ]
      }
    ]
  },
  "2": {
    "type": "olek_quiz_2",
    "titlePl": "Olek w ławce [Gaduła] (30 HP)",
    "subtitlePl": "Olek w ławce",
    "icon": "./assets/Postacie/Gejmer.png",
    "archetype": "gadula",
    "enemyName": "gejmer",
    "enemyMaxHp": 30,
    "enemyDamage": 2,
    "descriptionPl": "Olek zapomniał piórnika — pomóż koledze przetrwać lekcję!",
    "questions": [
      {
        "id": "h2_ol_extra_1",
        "speech": "Olek pyta: „Który przypadek odpowiada na pytania: O kim? O czym?”",
        "promptPl": "Wskaż nazwę szóstego przypadku:",
        "options": [
          {
            "text": "„Miejscownik (Ms) – np. o szkole, o koledze, o podręczniku.”",
            "correct": true
          },
          {
            "text": "„Dopełniacz (D) – np. nie ma szkoły, kolegi, podręcznika.”",
            "correct": false
          },
          {
            "text": "„Celownik (C) – np. przyglądam się szkole, koledze, książce.”",
            "correct": false
          },
          {
            "text": "„Biernik (B) – np. widzę nową szkołę, dobrego kolegę z klasy.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_2",
        "speech": "Jaki przypadek służy do bezpośredniego, uroczystego zwracania się do kogoś (np. „Mamo!”, „Minhu!”)?",
        "promptPl": "Podaj nazwę siódmego przypadku:",
        "options": [
          {
            "text": "„Wołacz (W) – nie ma pytań, wyraża bezpośrednie wołanie i apel!”",
            "correct": true
          },
          {
            "text": "„Mianownik (M) – odpowiada na pytania: kto? co?, nazywa podmiot!”",
            "correct": false
          },
          {
            "text": "„Narzędnik (N) – odpowiada na pytania: z kim? z czym?, narzędzie!”",
            "correct": false
          },
          {
            "text": "„Celownik (C) – odpowiada na pytania: komu? czemu?, odbiorca!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_3",
        "speech": "Wskaż formę przymiotnika w stopniu najwyższym od słowa „dobry”:",
        "promptPl": "Wybierz stopień najwyższy (nieregularny):",
        "options": [
          {
            "text": "„Najlepszy (dobry – lepszy – najlepszy, stopień nieregularny)”",
            "correct": true
          },
          {
            "text": "„Najbardziej dobry (błędna forma opisowa w języku polskim)”",
            "correct": false
          },
          {
            "text": "„Dobrzejszy (forma niepoprawna ze sztucznym przyrostkiem)”",
            "correct": false
          },
          {
            "text": "„Leprzejszy (błędna pisownia z rażącym błędem ortograficznym)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_4",
        "speech": "Dlaczego w wyrazie „król” piszemy „ó” z kreską?",
        "promptPl": "Wyjaśnij zasadę ortograficzną:",
        "options": [
          {
            "text": "„Bo wymienia się na literę o w wyrazie królowie!”",
            "correct": true
          },
          {
            "text": "„Bo słowo to kończy się na miękką spółgłoskę l!”",
            "correct": false
          },
          {
            "text": "„Bo w języku polskim zawsze po literze k piszemy ó!”",
            "correct": false
          },
          {
            "text": "„Bo wyraz ten nie podlega żadnym regułom wymiany!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_5",
        "speech": "Wskaż słowo będące wyjątkiem od reguły pisania „rz” po spółgłosce p:",
        "promptPl": "Wybierz słynny wyjątek ortograficzny:",
        "options": [
          {
            "text": "„Pszczoła (piszemy sz po p, tradycyjny wyjątek)”",
            "correct": true
          },
          {
            "text": "„Przygoda (piszemy rz po p zgodnie z ogólną regułą)”",
            "correct": false
          },
          {
            "text": "„Przepraszam (regularna pisownia rz po spółgłosce p)”",
            "correct": false
          },
          {
            "text": "„Przyjaciel (tradycyjna pisownia rz po spółgłosce p)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_6",
        "speech": "Jaka część mowy łączy się z rzeczownikiem i wskazuje relacje przestrzenne (np. w, na, pod, za)?",
        "promptPl": "Podaj nazwę nieodmiennej części mowy:",
        "options": [
          {
            "text": "„Przyimek (nieodmienny, tworzy wyrażenie przyimkowe z rzeczownikiem)”",
            "correct": true
          },
          {
            "text": "„Przysłówek (nieodmienny, lecz odpowiada na pytania: jak? gdzie? kiedy?)”",
            "correct": false
          },
          {
            "text": "„Czasownik (odmienna część mowy, odmienia się przez osoby, czasy i tryby)”",
            "correct": false
          },
          {
            "text": "„Liczebnik (odmienna część mowy, odmienia się przez przypadki i rodzaje)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_7",
        "speech": "Jak poprawnie brzmi forma Dopełniacza (kogo? czego?) przy zaprzeczeniu: „Nie mam...”",
        "promptPl": "Dokończ zdanie: „Nie mam dzisiaj w piórniku...”",
        "options": [
          {
            "text": "„...czerwonego długopisu i linijki.”",
            "correct": true
          },
          {
            "text": "„...czerwony długopis i linijkę.”",
            "correct": false
          },
          {
            "text": "„...czerwonym długopisem i linijką.”",
            "correct": false
          },
          {
            "text": "„...czerwonemu długopisowi i linijce.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_extra_8",
        "speech": "Który element jest OBOWIĄZKOWY w oficjalnym zaproszeniu CKE?",
        "promptPl": "Wskaż niezbędny element zaproszenia:",
        "options": [
          {
            "text": "„Dokładna data, godzina oraz miejsce wydarzenia wraz z podpisem!”",
            "correct": true
          },
          {
            "text": "„Rymowany wiersz okolicznościowy wpisany na samym początku tekstu!”",
            "correct": false
          },
          {
            "text": "„Kolorowy rysunek tortu ze świeczkami lub pęku balonów na marginesie!”",
            "correct": false
          },
          {
            "text": "„Numer telefonu komórkowego do kierowcy autobusu wycieczkowego!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_1",
        "speech": "Ratunku! Złamał mi się jedyny ołówek tuż przed rysowaniem figury! Masz temperówkę?",
        "promptPl": "Pomóż koledze z ławki:",
        "options": [
          {
            "text": "„Tak, proszę, weź moją temperówkę z pojemniczkiem.”",
            "correct": true
          },
          {
            "text": "„Jestem bardzo głodny i chcę kanapkę.”",
            "correct": false
          },
          {
            "text": "„Która jest teraz dokładnie godzina?”",
            "correct": false
          },
          {
            "text": "„Do widzenia, życzę miłego popołudnia!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_2",
        "speech": "Uff, dzięki wielkie! A dasz radę pożyczyć mi też linijkę na dwie minuty?",
        "promptPl": "Zgadzasz się na pożyczenie linijki:",
        "options": [
          {
            "text": "„Jasne, trzymaj linijkę, tylko oddaj mi po skończonym zadaniu.”",
            "correct": true
          },
          {
            "text": "„Pewnie, weź linijkę z mojego piórnika, leży obok długopisu.”",
            "correct": false
          },
          {
            "text": "„Śmiało, pożycz moją linijkę, ja skorzystam z ekierki kolegi.”",
            "correct": false
          },
          {
            "text": "„Oczywiście, oto linijka, narysuj prostą linię pod tematem.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_3",
        "speech": "Zrobiłem krzywą kreskę! Masz białą gumkę do ścierania?",
        "promptPl": "Podaj Olkowi gumkę:",
        "options": [
          {
            "text": "„Tak, mam zapasową gumkę na brzegu piórnika, częstuj się śmiało.”",
            "correct": true
          },
          {
            "text": "„Pewnie, weź gumkę do ścierania, świetnie usuwa ślady ołówka.”",
            "correct": false
          },
          {
            "text": "„Jasne, trzymaj gumkę, zetrzyj błąd i oddaj mi przed dzwonkiem.”",
            "correct": false
          },
          {
            "text": "„Oczywiście, mam dwie gumki w piórniku, możesz zatrzymać jedną.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_4",
        "speech": "Dzięki, uratowałeś mi lekcję! Oddaję wszystkie pożyczone przybory w całości.",
        "promptPl": "Odpowiedz na podziękowanie kolegi:",
        "options": [
          {
            "text": "„Nie ma za co, po to właśnie jesteśmy kumplami z jednej ławki!”",
            "correct": true
          },
          {
            "text": "„Drobiazg, zawsze możesz na mnie liczyć podczas trudnej lekcji!”",
            "correct": false
          },
          {
            "text": "„Cała przyjemność po mojej stronie, chętnie pożyczam przybory!”",
            "correct": false
          },
          {
            "text": "„Nie ma problemu, cieszę się, że mogłem ci pomóc w ćwiczeniu!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_5",
        "speech": "A wiesz jakie kolory kredek są potrzebne do zadania drugiego z podręcznika?",
        "promptPl": "Wskaż kolory z zadania:",
        "options": [
          {
            "text": "„Potrzebujemy czerwonej, zielonej i niebieskiej kredki.”",
            "correct": true
          },
          {
            "text": "„Potrzebujemy nożyczek i taśmy klejącej.”",
            "correct": false
          },
          {
            "text": "„Potrzebujemy zimowej kurtki i czapki.”",
            "correct": false
          },
          {
            "text": "„Potrzebujemy piłki do koszykówki.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_6",
        "speech": "Mój piórnik został dzisiaj w domu na biurku... Masz może zapasowy długopis?",
        "promptPl": "Pożycz zapasowy długopis:",
        "options": [
          {
            "text": "„Mam w piórniku niebieski długopis, możesz nim spokojnie pisać.”",
            "correct": true
          },
          {
            "text": "„Trzymaj mój zapasowy długopis, ma miękki wkład i nie przerywa.”",
            "correct": false
          },
          {
            "text": "„Pewnie, weź długopis z piórnika, ja mam jeszcze pióro wieczne.”",
            "correct": false
          },
          {
            "text": "„Oto niebieski długopis, oddasz mi go po zakończeniu notatki.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_7",
        "speech": "Jesteś najlepiej wyposażonym uczniem w całej klasie! Masz tam wszystko!",
        "promptPl": "Wyjaśnij jak dbasz o przybory:",
        "options": [
          {
            "text": "„Pakuję plecak codziennie wieczorem według szkolnego planu zajęć!”",
            "correct": true
          },
          {
            "text": "„Układam książki na biurku i sprawdzam, czy piórnik jest kompletny!”",
            "correct": false
          },
          {
            "text": "„Noszę zeszyty w teczkach ochronnych, aby nie zagiąć rogów kartek!”",
            "correct": false
          },
          {
            "text": "„Dbam o czystość przyborów i regularnie temperuję wszystkie ołówki!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_8",
        "speech": "Dzięki twojej pomocy dostałem plusa za ładny rysunek w zeszycie!",
        "promptPl": "Pogratuluj koledze sukcesu:",
        "options": [
          {
            "text": "„Brawo Olek! Cieszę się, że ci się udało!”",
            "correct": true
          },
          {
            "text": "„Oddaj natychmiast tego plusa.”",
            "correct": false
          },
          {
            "text": "„Nienawidzę matematyki i geometrii.”",
            "correct": false
          },
          {
            "text": "„Idziemy spać do biblioteki.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_9",
        "speech": "Teraz wycinamy figury z kolorowego papieru! Masz może bezpieczne nożyczki i klej w sztyfcie?",
        "promptPl": "Podziel się przyborami plastycznymi:",
        "options": [
          {
            "text": "„Tak, mam nożyczki i klej, możemy korzystać z nich na zmianę w ławce.”",
            "correct": true
          },
          {
            "text": "„Chętnie pożyczę ci klej w sztyfcie, gdy tylko skończę wyklejać plakat.”",
            "correct": false
          },
          {
            "text": "„Pewnie, podzielmy się przyborami: ja wezmę kredki, a ty użyj flamastrów.”",
            "correct": false
          },
          {
            "text": "„Oczywiście, trzymaj nożyczki, wycinaj ostrożnie wzdłuż narysowanej linii.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_10",
        "speech": "Ojej, nie dosłyszałem, którą stronę w podręczniku kazała otworzyć pani! Pamiętasz numer?",
        "promptPl": "Podpowiedz koledze właściwą stronę:",
        "options": [
          {
            "text": "„Pani prosiła, żebyśmy otworzyli podręcznik na stronie dwudziestej czwartej.”",
            "correct": true
          },
          {
            "text": "„Nauczycielka kazała przeczytać opowiadanie ze strony trzydziestej szóstej.”",
            "correct": false
          },
          {
            "text": "„Zadanie domowe znajduje się w ćwiczeniach na stronie czterdziestej ósmej.”",
            "correct": false
          },
          {
            "text": "„Rozwiązujemy teraz ćwiczenie numer trzy ze strony pięćdziesiątej drugiej.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_11",
        "speech": "W jakim zeszycie piszemy na lekcji języka polskiego, a w jakim na matematyce?",
        "promptPl": "Wskaż właściwe rodzaje zeszytów:",
        "options": [
          {
            "text": "„Na polskim piszemy w zeszycie w szeroką linię, a na matematyce w kratkę!”",
            "correct": true
          },
          {
            "text": "„Na geometrii kreślimy w gładkim bloku, a na historii w zeszycie w kratkę!”",
            "correct": false
          },
          {
            "text": "„Do nut mamy specjalny zeszyt w pięciolinię, a do plastyki duży szkicownik!”",
            "correct": false
          },
          {
            "text": "„Na lekcjach językowych używamy zeszytów w linie z czytelnym marginesem!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_12",
        "speech": "Chcę podkreślić ważny temat lekcji. Jaki przybór z piórnika najlepiej się do tego przyda?",
        "promptPl": "Doradź koledze, czym podkreślić temat:",
        "options": [
          {
            "text": "„Użyj kolorowego zakreślacza albo ołówka i linijki!”",
            "correct": true
          },
          {
            "text": "„Użyj kanapki z masłem i pomidorem.”",
            "correct": false
          },
          {
            "text": "„Zamaluj całą stronę czarną farbą.”",
            "correct": false
          },
          {
            "text": "„Wyrwij kartkę z zeszytu i zrób samolot.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_13",
        "speech": "Jak myślisz, w której części zdania „Mój nowy piórnik leży na drewnianej ławce” są przymiotniki?",
        "promptPl": "Pomóż Olkowi wskazać przymiotniki (jaki? jaka? jakie?):",
        "options": [
          {
            "text": "„Przymiotniki to słowa: nowy oraz drewnianej!”",
            "correct": true
          },
          {
            "text": "„Przymiotniki to słowa: leży oraz na.”",
            "correct": false
          },
          {
            "text": "„W tym zdaniu są same czasowniki.”",
            "correct": false
          },
          {
            "text": "„Nie ma tu ani jednego słowa po polsku.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_14",
        "speech": "A kiedy nie rozumiemy trudnego słowa w czytanym tekście, co możemy zrobić na lekcji?",
        "promptPl": "Wybierz najlepsze rozwiązanie uczniowskie:",
        "options": [
          {
            "text": "„Podnosimy rękę i grzecznie pytamy nauczyciela lub sprawdzamy w słowniku.”",
            "correct": true
          },
          {
            "text": "„Prosimy kolegę z ławki o wyjaśnienie lub szukamy zasady w podręczniku.”",
            "correct": false
          },
          {
            "text": "„Zapisujemy pytanie na marginesie i czekamy na przerwę po lekcji języka.”",
            "correct": false
          },
          {
            "text": "„Analizujemy przykład z tablicy i spokojnie poprawiamy popełniony błąd.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_15",
        "speech": "Pani pochwaliła naszą parę za cichą i zgodną współpracę w ławce!",
        "promptPl": "Uciesz się ze wspólnej pochwały:",
        "options": [
          {
            "text": "„Super! Kiedy sobie pomagamy, nauka idzie o wiele sprawniej i szybciej!”",
            "correct": true
          },
          {
            "text": "„Wspaniale! Wspólna praca w zespole zawsze przynosi najlepsze rezultaty!”",
            "correct": false
          },
          {
            "text": "„Ekstra! Cieszę się, że pani nauczycielka doceniła nasze zaangażowanie!”",
            "correct": false
          },
          {
            "text": "„Świetnie! Dzięki wzajemnej pomocy udało nam się skończyć zadanie na czas!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h2_ol_16",
        "speech": "Jutro na pewno spakuję własny piórnik i przyniosę ci coś słodkiego w podziękowaniu!",
        "promptPl": "Odpowiedz z uśmiechem koledze:",
        "options": [
          {
            "text": "„Spoko Olek! Trzymam cię za słowo, do zobaczenia na następnej przerwie!”",
            "correct": true
          },
          {
            "text": "„Jasna sprawa! Porozmawiamy o turnieju, jak tylko zadzwoni dzwonek z sali!”",
            "correct": false
          },
          {
            "text": "„Świetnie Olek! Zjemy drugie śniadanie i omówimy naszą wspólną taktykę gry!”",
            "correct": false
          },
          {
            "text": "„Do zobaczenia! Przygotuj pytania z lektury, to powtórzymy je przed testem!”",
            "correct": false
          }
        ]
      }
    ]
  },
  "3": {
    "type": "olek_quiz_3",
    "titlePl": "Olek na korytarzu [Gaduła] (30 HP)",
    "subtitlePl": "Olek na korytarzu",
    "icon": "./assets/Postacie/Gejmer.png",
    "archetype": "gadula",
    "enemyName": "gejmer",
    "enemyMaxHp": 30,
    "enemyDamage": 2,
    "descriptionPl": "Olek oprowadza po zakamarkach budynku szkolnego.",
    "questions": [
      {
        "id": "h3_ol_extra_1",
        "speech": "Olek pyta: „Jaki to typ orzeczenia w zdaniu: Janek został przewodniczącym klasy?”",
        "promptPl": "Określ rodzaj orzeczenia:",
        "options": [
          {
            "text": "„Orzeczenie imienne (łącznik został + orzecznik przewodniczącym)”",
            "correct": true
          },
          {
            "text": "„Orzeczenie czasownikowe proste (wyrażone pojedynczym czasownikiem)”",
            "correct": false
          },
          {
            "text": "„Orzeczenie przydawkowe (określające cechę lub właściwość podmiotu)”",
            "correct": false
          },
          {
            "text": "„Równoważnik zdania (wypowiedzenie pozbawione formy czasownikowej)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_2",
        "speech": "Czym różni się równoważnik zdania od zdania właściwego?",
        "promptPl": "Wskaż cechę równoważnika zdania:",
        "options": [
          {
            "text": "„Równoważnik zdania NIE zawiera osobowej formy czasownika (orzeczenia)!”",
            "correct": true
          },
          {
            "text": "„Równoważnik zdania musi posiadać dwa podmioty połączone spójnikiem!”",
            "correct": false
          },
          {
            "text": "„Równoważnik zdania kończy się wyłącznie wykrzyknikiem lub pytajnikiem!”",
            "correct": false
          },
          {
            "text": "„Równoważnik zdania występuje tylko w staropolskich pieśniach ludowych!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_3",
        "speech": "Wskaż zdanie, w którym występuje PRZYDAWKA określająca cechę rzeczownika:",
        "promptPl": "Znajdź zdanie z przydawką przymiotną:",
        "options": [
          {
            "text": "„Ciekawa książka leży na biurku nauczyciela.”",
            "correct": true
          },
          {
            "text": "„Uważny uczeń czyta lekturę bardzo szybko.”",
            "correct": false
          },
          {
            "text": "„Głośny dzwonek szkolny zadzwonił wczoraj.”",
            "correct": false
          },
          {
            "text": "„Wszyscy koledzy poszliśmy razem do kina.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_4",
        "speech": "Jaki to okolicznik w zdaniu: „Z powodu ulewnego deszczu mecz odwołano”?",
        "promptPl": "Określ typ okolicznika (z powodu deszczu):",
        "options": [
          {
            "text": "„Okolicznik przyczyny (odpowiada na pytanie: dlaczego? z jakiego powodu?)”",
            "correct": true
          },
          {
            "text": "„Okolicznik miejsca (odpowiada na pytanie: gdzie? dokąd? którędy?)”",
            "correct": false
          },
          {
            "text": "„Okolicznik czasu (odpowiada na pytanie: kiedy? od kiedy? do kiedy?)”",
            "correct": false
          },
          {
            "text": "„Okolicznik celu (odpowiada na pytanie: po co? w jakim celu wykonano?)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_5",
        "speech": "Jak poprawnie połączyć liczebnik zbiorowy z istotami młodymi?",
        "promptPl": "Wskaż poprawne połączenie:",
        "options": [
          {
            "text": "„Czworo szczeniąt bawi się na podwórku.”",
            "correct": true
          },
          {
            "text": "„Cztery szczenięta bawi się na podwórku.”",
            "correct": false
          },
          {
            "text": "„Czworo psy biega po trawie.”",
            "correct": false
          },
          {
            "text": "„Czwarty szczenię biega szybko.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_6",
        "speech": "Przed którymi spójnikami ZAWSZE stawiamy przecinek?",
        "promptPl": "Wybierz grupę spójników wymagających przecinka:",
        "options": [
          {
            "text": "„ale, lecz, jednak, ponieważ, że, który, więc, zatem, dlatego”",
            "correct": true
          },
          {
            "text": "„i, oraz, ani, ni, lub, albo, czy w zdaniu pojedynczym prostym”",
            "correct": false
          },
          {
            "text": "„w, na, pod, z, do, nad, przed, za w wyrażeniach przyimkowych”",
            "correct": false
          },
          {
            "text": "„żadne spójniki w polszczyźnie nie wymagają stawiania przecinka”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_7",
        "speech": "Wskaż zdanie pojedyncze ROZWINIĘTE:",
        "promptPl": "Znajdź zdanie z określeniami podmiotu lub orzeczenia:",
        "options": [
          {
            "text": "„Uważny uczeń pisze trudne dyktando z ortografii.”",
            "correct": true
          },
          {
            "text": "„Pilny uczeń uważnie pisze zadane wypracowanie.”",
            "correct": false
          },
          {
            "text": "„Każdy uczeń szybko rozwiązuje skomplikowany test.”",
            "correct": false
          },
          {
            "text": "„Młody uczeń głośno czyta interesujący fragment.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_extra_8",
        "speech": "Jaką funkcję pełni przysłówek w zdaniu: „Minh pięknie wyrecytował wiersz”?",
        "promptPl": "Określ część zdania odpowiadającą na pytanie: jak?:",
        "options": [
          {
            "text": "„Okolicznik sposobu (odpowiada na pytania: jak? w jaki sposób?)”",
            "correct": true
          },
          {
            "text": "„Przydawka przymiotna (odpowiada na pytania: jaki? jaka? jakie?)”",
            "correct": false
          },
          {
            "text": "„Podmiot gramatyczny (odpowiada na pytania: kto wykonuje? co?)”",
            "correct": false
          },
          {
            "text": "„Dopełnienie bliższe (odpowiada na pytania: kogo? co czyta?)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_1",
        "speech": "Muszę szybko umyć ręce przed plastyką! Gdzie jest najbliższa toaleta?",
        "promptPl": "Wskaż drogę koledze:",
        "options": [
          {
            "text": "„Toaleta jest prosto korytarzem, tuż za schodami po prawej stronie.”",
            "correct": true
          },
          {
            "text": "„Sekretariat mieści się na piętrze, na samym końcu lewego korytarza.”",
            "correct": false
          },
          {
            "text": "„Biblioteka znajduje się naprzeciwko auli, tuż obok gabinetu dyrektora.”",
            "correct": false
          },
          {
            "text": "„Szatnia leży w podziemiach szkoły, schodzi się do niej szerokimi schodami.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_2",
        "speech": "A gdzie mamy zbiórkę na świetlicę po skończonych lekcjach, gdy czekamy na rodziców?",
        "promptPl": "Wskaż lokalizację świetlicy:",
        "options": [
          {
            "text": "„Świetlica jest na parterze, tuż obok szatni i głównego wejścia.”",
            "correct": true
          },
          {
            "text": "„Stołówka mieści się w lewym skrzydle, obok wyjścia na boisko szkolne.”",
            "correct": false
          },
          {
            "text": "„Gabinet pielęgniarki jest naprzeciwko portierni, tuż przy dyżurce woźnego.”",
            "correct": false
          },
          {
            "text": "„Sala gimnastyczna znajduje się na końcu korytarza za przeszklonymi drzwiami.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_3",
        "speech": "Pani od polskiego prosiła o oddanie lektur. Gdzie mieści się biblioteka?",
        "promptPl": "Podaj drogę do biblioteki:",
        "options": [
          {
            "text": "„Po schodach na pierwsze piętro, na samym końcu korytarza po prawej.”",
            "correct": true
          },
          {
            "text": "„W lewym skrzydle budynku, tuż obok pracowni biologicznej i chemicznej.”",
            "correct": false
          },
          {
            "text": "„Na parterze obok sklepiku szkolnego, w jasnym korytarzu naprzeciwko schodów.”",
            "correct": false
          },
          {
            "text": "„Na drugim piętrze w strefie językowej, zaraz za gablotami z pucharami sportowymi.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_4",
        "speech": "Super, dzięki za wskazówki! Znasz już całą szkołę lepiej niż ja!",
        "promptPl": "Podsumuj znajomość szkoły:",
        "options": [
          {
            "text": "„Tak, plan całej szkoły nie ma już przede mną żadnych tajemnic!”",
            "correct": true
          },
          {
            "text": "„Tak, doskonale wiem, gdzie mieszczą się wszystkie sale lekcyjne!”",
            "correct": false
          },
          {
            "text": "„Tak, bez trudu trafię do każdego gabinetu i do biblioteki na piętrze!”",
            "correct": false
          },
          {
            "text": "„Tak, zapamiętałem układ korytarzy oraz wyjścia ewakuacyjne ze szkoły!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_5",
        "speech": "A wiesz dokąd pójść, jeśli ktoś na przerwie przewróci się i mocno stłucze kolano?",
        "promptPl": "Wskaż gabinet pierwszej pomocy:",
        "options": [
          {
            "text": "„Trzeba zaprowadzić go do gabinetu pielęgniarki na parterze szkoły.”",
            "correct": true
          },
          {
            "text": "„Należy natychmiast powiadomić nauczyciela dyżurującego na korytarzu.”",
            "correct": false
          },
          {
            "text": "„Warto zgłosić to wychowawcy klasy, który udzieli pierwszej pomocy w sali.”",
            "correct": false
          },
          {
            "text": "„Powinniśmy poprosić pracownika sekretariatu o wezwanie szkolnego lekarza.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_6",
        "speech": "Gdzie w tej szkole zostawia się ciężkie kurtki zimowe i zmienia buty?",
        "promptPl": "Wskaż szatnię:",
        "options": [
          {
            "text": "„Na samym dole w szatni, każdy ma swój własny numerowany wieszak.”",
            "correct": true
          },
          {
            "text": "„W szafkach ubraniowych w podziemiu, zamykanych na indywidualny klucz.”",
            "correct": false
          },
          {
            "text": "„W wyznaczonej strefie szatniowej, gdzie przebieramy obuwie na zmienne.”",
            "correct": false
          },
          {
            "text": "„W boksie klasowym na parterze, przypisanym do naszej grupy rocznikowej.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_7",
        "speech": "A w którym pokoju siedzą nauczyciele podczas dużej przerwy obiedniej?",
        "promptPl": "Podaj nazwę pokoju nauczycielskiego:",
        "options": [
          {
            "text": "„W pokoju nauczycielskim na pierwszym piętrze obok gabinetu dyrekcji.”",
            "correct": true
          },
          {
            "text": "„W sekretariacie szkoły, gdzie przyjmuje pani kierownik administracji.”",
            "correct": false
          },
          {
            "text": "„W gabinecie wicedyrektora na parterze, tuż przy wejściu do biblioteki.”",
            "correct": false
          },
          {
            "text": "„W czytelni szkolnej, w której nauczyciele sprawdzają klasówki po lekcjach.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_8",
        "speech": "Dzięki! Teraz czuję się pewnie w każdym zakątku tego budynku!",
        "promptPl": "Zaproponuj wspólne wyjście:",
        "options": [
          {
            "text": "„Chodźmy razem na przerwę na korytarz, zanim zadzwoni kolejny dzwonek!”",
            "correct": true
          },
          {
            "text": "„Wyjdźmy spokojnie na świeże powietrze na dziedziniec przed budynkiem szkoły!”",
            "correct": false
          },
          {
            "text": "„Zajrzyjmy do sklepiku po wodę mineralną, dopóki nie ma tam długiej kolejki!”",
            "correct": false
          },
          {
            "text": "„Przejdźmy się pod salę historyczną, aby sprawdzić numery kolejnych zadań!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_9",
        "speech": "A gdzie w naszej szkole jemy ciepłą zupę i drugie danie w czasie przerwy obiadowej?",
        "promptPl": "Wskaż miejsce spożywania obiadów:",
        "options": [
          {
            "text": "„Na stołówce szkolnej na parterze, w wyznaczonych godzinach obiadowych!”",
            "correct": true
          },
          {
            "text": "„W świetlicy szkolnej przy stolikach, podczas długiej przerwy rekreacyjnej!”",
            "correct": false
          },
          {
            "text": "„W strefie wypoczynku na korytarzu, jedząc drugie śniadanie z pojemnika!”",
            "correct": false
          },
          {
            "text": "„Na ławkach na dziedzińcu szkolnym, korzystając z ciepłej słonecznej pogody!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_10",
        "speech": "Muszę załatwić podbicie legitymacji szkolnej na nowy rok! Gdzie przybijają pieczątki?",
        "promptPl": "Wskaż pomieszczenie administracyjne szkoły:",
        "options": [
          {
            "text": "„W sekretariacie szkoły na pierwszym piętrze, obok gabinetu dyrektora!”",
            "correct": true
          },
          {
            "text": "„W pokoju intendenta na parterze, gdzie opłaca się obiady i ubezpieczenie!”",
            "correct": false
          },
          {
            "text": "„W gabinecie pedagoga szkolnego, znajdującym się na drugim piętrze budynku!”",
            "correct": false
          },
          {
            "text": "„Na portierni przy wejściu głównym, u dyżurującego pracownika obsługi szkoły!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_11",
        "speech": "Jak należy poruszać się po szkolnych schodach i korytarzu podczas tłumnej przerwy?",
        "promptPl": "Przypomnij zasady bezpieczeństwa na korytarzu:",
        "options": [
          {
            "text": "„Idziemy spokojnie prawą stroną korytarza, nie biegamy i nie popychamy innych.”",
            "correct": true
          },
          {
            "text": "„Poruszamy się bez pośpiechu, zachowujemy bezpieczny dystans i nie krzyczymy głośno.”",
            "correct": false
          },
          {
            "text": "„Ustępujemy pierwszeństwa młodszym kolegom i nauczycielom niosącym dzienniki zajęć.”",
            "correct": false
          },
          {
            "text": "„Pilnujemy swoich rzeczy osobistych i nie zostawiamy plecaków na przejściu schodowym.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_12",
        "speech": "W bibliotece szkolnej obowiązuje ważna zasada zachowania. Pamiętasz jaka?",
        "promptPl": "Jak zachowujemy się w bibliotece i czytelni?",
        "options": [
          {
            "text": "„Zachowujemy ciszę, aby nie przeszkadzać innym w czytaniu, i szanujemy książki.”",
            "correct": true
          },
          {
            "text": "„Rozmawiamy wyłącznie szeptem, odkładamy tomy na wyznaczone półki regałów w sali.”",
            "correct": false
          },
          {
            "text": "„Dbamy o czystość wypożyczonych lektur i nie spożywamy posiłków przy stolikach czytelni.”",
            "correct": false
          },
          {
            "text": "„Przestrzegamy regulaminu biblioteki i terminowo oddajemy wszystkie przeczytane tomy.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_13",
        "speech": "A co robimy, gdy na korytarzu znajdziemy czyjś zgubiony telefon albo worek z butami?",
        "promptPl": "Wybierz uczciwe zachowanie ucznia:",
        "options": [
          {
            "text": "„Odnosimy zgubę do sekretariatu lub przekazujemy nauczycielowi dyżurującemu.”",
            "correct": true
          },
          {
            "text": "„Zostawiamy znaleziony przedmiot na portierni u woźnego pilnującego wejścia.”",
            "correct": false
          },
          {
            "text": "„Pytamy gospodarza klasy, czy ktoś z uczniów nie zgłaszał braku swoich przyborów.”",
            "correct": false
          },
          {
            "text": "„Zanosimy znaleziony piórnik do biblioteki szkolnej, gdzie gromadzone są zguby.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_14",
        "speech": "Gdzie odbywają się uroczyste apele szkolne i przedstawienia teatralne dla wszystkich klas?",
        "promptPl": "Wskaż największą salę na uroczystości:",
        "options": [
          {
            "text": "„W szkolnej auli widowiskowej lub na dużej sali gimnastycznej!”",
            "correct": true
          },
          {
            "text": "„Na przestronnym dziedzińcu wewnętrznym przed głównym gmachem!”",
            "correct": false
          },
          {
            "text": "„W wielofunkcyjnej sali audiowizualnej na drugim piętrze szkoły!”",
            "correct": false
          },
          {
            "text": "„W reprezentacyjnym holu wejściowym przy tablicy pamiątkowej!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_15",
        "speech": "Jeśli na lekcji poczujesz, że bardzo boli cię głowa lub brzuch, komu zgłaszasz to w pierwszej kolejności?",
        "promptPl": "Kogo należy poinformować o złym samopoczuciu?",
        "options": [
          {
            "text": "„Nauczycielowi prowadzącemu lekcję, który skieruje mnie do pielęgniarki.”",
            "correct": true
          },
          {
            "text": "„Wychowawcy klasy lub pedagogowi szkolnemu dyżurującemu w gabinecie.”",
            "correct": false
          },
          {
            "text": "„Nauczycielowi dyżurującemu na korytarzu podczas trwającej przerwy.”",
            "correct": false
          },
          {
            "text": "„Pani w sekretariacie, która natychmiast skontaktuje się z moimi rodzicami.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h3_ol_16",
        "speech": "Ale z ciebie świetny przewodnik po szkole! Z tobą nikt się tutaj nie zgubi!",
        "promptPl": "Podziękuj za komplement:",
        "options": [
          {
            "text": "„Dzięki Olek! Zawsze chętnie pomogę każdemu nowemu koledze w szkole!”",
            "correct": true
          },
          {
            "text": "„Miło mi to słyszeć! Wzajemna pomoc na korytarzu ułatwia każdy dzień!”",
            "correct": false
          },
          {
            "text": "„Dziękuję za miłe słowa! Cieszę się, że mogłem ci pokazać naszą szkołę!”",
            "correct": false
          },
          {
            "text": "„Nie ma sprawy! Wspólnie poradzimy sobie z każdym wyzwaniem w klasie!”",
            "correct": false
          }
        ]
      }
    ]
  },
  "4": {
    "type": "olek_quiz_3",
    "titlePl": "Olek na boisku [Gaduła] (30 HP)",
    "subtitlePl": "Olek na boisku",
    "icon": "./assets/Postacie/Gejmer.png",
    "archetype": "gadula",
    "enemyName": "gejmer",
    "enemyMaxHp": 30,
    "enemyDamage": 2,
    "descriptionPl": "Olek podaje piłkę! Zastosuj właściwe zwroty w ferworze meczu.",
    "questions": [
      {
        "id": "h4_ol_extra_1",
        "speech": "Olek pyta: „Co to jest wyraz podstawowy w słowotwórstwie?”",
        "promptPl": "Podaj definicję wyrazu podstawowego:",
        "options": [
          {
            "text": "„Wyraz, od którego tworzy się wyraz pochodny za pomocą formantu.”",
            "correct": true
          },
          {
            "text": "„Pierwszy wyraz w słowniku języka polskiego.”",
            "correct": false
          },
          {
            "text": "„Wyraz napisany wielką literą na początku akapitu.”",
            "correct": false
          },
          {
            "text": "„Wyraz składający się tylko z samogłosek.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_2",
        "speech": "Wskaż parę wyrazów, która tworzy RODZINĘ WYRAZÓW (ma wspólny rdzeń):",
        "promptPl": "Wybierz wyrazy pokrewne:",
        "options": [
          {
            "text": "„książka – księgarnia – księgarz – książkowy”",
            "correct": true
          },
          {
            "text": "„nos – nosorożec – nosić – znośny”",
            "correct": false
          },
          {
            "text": "„koło – kolor – kolacja – kolega”",
            "correct": false
          },
          {
            "text": "„kot – kotlet – kotwica – kotara”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_3",
        "speech": "Jaki formant dodano w wyrazie „domek” do podstawy słowotwórczej „dom-”? ",
        "promptPl": "Nazwij typ formantu:",
        "options": [
          {
            "text": "„Przyrostek (sufiks) -ek tworzący zdrobnienie od słowa bazowego”",
            "correct": true
          },
          {
            "text": "„Przedrostek (prefiks) pod- modyfikujący znaczenie czasownika”",
            "correct": false
          },
          {
            "text": "„Wrostek (interfiks) -o- łączący dwa rdzenie w wyrazie złożonym”",
            "correct": false
          },
          {
            "text": "„Formant zerowy (brak cząstki słowotwórczej w wyrazie pochodnym)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_4",
        "speech": "Jak poprawnie zapiszesz: „nie” z przymiotnikiem „łatwy”?",
        "promptPl": "Wybierz poprawny zapis:",
        "options": [
          {
            "text": "„Niełatwy (łącznie, bo to przymiotnik w stopniu równym w polszczyźnie)”",
            "correct": true
          },
          {
            "text": "„Nie łatwy (rozdzielnie, pisownia błędna dla stopnia równego przymiotnika)”",
            "correct": false
          },
          {
            "text": "„Nie-łatwy (z łącznikiem dywizem, zapis niezgodny z zasadami ortografii)”",
            "correct": false
          },
          {
            "text": "„Nie, łatwy (z przecinkiem rozdzielającym, konstrukcja składniowo błędna)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_5",
        "speech": "Jak poprawnie zapiszesz: „nie” z czasownikiem „wiedzieć”?",
        "promptPl": "Wybierz poprawną pisownię:",
        "options": [
          {
            "text": "„Nie wiem (rozdzielnie, bo z czasownikami cząstkę nie piszemy osobno)”",
            "correct": true
          },
          {
            "text": "„Niewiem (łącznie, pisownia błędna z naruszeniem podstawowej reguły)”",
            "correct": false
          },
          {
            "text": "„Nie-wiem (z myślnikiem, forma nienotowana w słownikach ortograficznych)”",
            "correct": false
          },
          {
            "text": "„Niewiém (ze staropolskim znakiem akcentowym, zapis archaiczny i błędny)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_6",
        "speech": "Czym charakteryzuje się MIT w literaturze?",
        "promptPl": "Wskaż cechę mitu (np. o Dedalu i Ikarze):",
        "options": [
          {
            "text": "„Opowieść o bogach, herosach i początkach świata i zjawisk natury.”",
            "correct": true
          },
          {
            "text": "„Krótki wierszowany utwór o zwierzętach zakończony wyraźnym morałem.”",
            "correct": false
          },
          {
            "text": "„Oficjalny tekst urzędowy składany w sekretariacie z podpisem autora.”",
            "correct": false
          },
          {
            "text": "„Szczegółowy zapis partii szachowej z diagramami ruchów na planszy.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_7",
        "speech": "Co symbolizuje mitologiczna postać Ikara?",
        "promptPl": "Podaj znaczenie motywu ikaryjskiego:",
        "options": [
          {
            "text": "„Młodzieńczy entuzjazm, dążenie do marzeń wbrew rozsądkowi i przestrogom.”",
            "correct": true
          },
          {
            "text": "„Skrajna chciwość i egoizm bogatego kupca gromadzącego złote monety.”",
            "correct": false
          },
          {
            "text": "„Przebiegłość i spryt rycerza unikającego bezpośredniego starcia w boju.”",
            "correct": false
          },
          {
            "text": "„Troska o piękno przyrody i zamiłowanie do pielęgnowania roślin w ogrodzie.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_extra_8",
        "speech": "Wskaż wyraz złożony ze spójką -o- (złożenie):",
        "promptPl": "Znajdź wyraz złożony:",
        "options": [
          {
            "text": "„Żywopłot (dwa rdzenie żywy + płot połączone spójką -o-)”",
            "correct": true
          },
          {
            "text": "„Podmiejski (wyraz przedrostkowy utworzony od miasta)”",
            "correct": false
          },
          {
            "text": "„Czytanie (rzeczownik odczasownikowy z przyrostkiem -nie)”",
            "correct": false
          },
          {
            "text": "„Domeczek (wyraz zdrobniały z dwoma przyrostkami w rdzeniu)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_1",
        "speech": "Stoisz na czystej pozycji przed samą bramką! Co do mnie krzyczysz?",
        "promptPl": "Zawołaj o podanie w trakcie meczu:",
        "options": [
          {
            "text": "„Olek, podaj mi piłkę, jestem zupełnie wolny!”",
            "correct": true
          },
          {
            "text": "„Idę do szatni zdrzemnąć się na ławce.”",
            "correct": false
          },
          {
            "text": "„Która strona w zeszycie ćwiczeń?”",
            "correct": false
          },
          {
            "text": "„Poproszę szklankę ciepłego mleka.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_2",
        "speech": "Podaję ci idealnie po ziemi! Strzelaj natychmiast z woleja!",
        "promptPl": "Jak reagujesz na podanie?",
        "options": [
          {
            "text": "Kopię mocno w róg bramki i cieszę się z gola!",
            "correct": true
          },
          {
            "text": "Łapię piłkę w ręce i uciekam poza boisko.",
            "correct": false
          },
          {
            "text": "Siadam na trawie i wyjmuję kanapkę z plecaka.",
            "correct": false
          },
          {
            "text": "Oddaję piłkę bramkarzowi przeciwnika do rąk.",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_3",
        "speech": "Piękna bramka prosto w okienko! A jak zachowujemy się wobec drużyny przeciwnej po meczu?",
        "promptPl": "Jaka jest złota zasada Fair Play?",
        "options": [
          {
            "text": "„Dziękujemy za uczciwy mecz i podajemy sobie dłonie.”",
            "correct": true
          },
          {
            "text": "„Śmiejemy się z nich i uciekamy do szatni.”",
            "correct": false
          },
          {
            "text": "„Zabieramy ich piłkę ze sobą do domu.”",
            "correct": false
          },
          {
            "text": "„Kłócimy się z sędzią o każdą sporną sytuację.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_4",
        "speech": "Właśnie zadzwonił dzwonek kończący długą przerwę! Co teraz natychmiast robimy?",
        "promptPl": "Dzwonek wzywa na lekcję:",
        "options": [
          {
            "text": "Zbieramy piłki i wracamy spokojnie do budynku szkoły.",
            "correct": true
          },
          {
            "text": "Gramy dogrywkę przez kolejne pół godziny w ukryciu.",
            "correct": false
          },
          {
            "text": "Zostawiamy sprzęt w błocie i biegniemy do bramy.",
            "correct": false
          },
          {
            "text": "Wspinamy się na siatkę ogrodzenia orlika.",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_5",
        "speech": "A co jeśli na boisku ktoś gra zbyt ostro i celowo podstawia nogi?",
        "promptPl": "Jak reagujesz na faule?",
        "options": [
          {
            "text": "„Zwracam uwagę: gramy bezpiecznie i bez fauli, to tylko sportowa zabawa!”",
            "correct": true
          },
          {
            "text": "„Przypominam o zasadach fair play: szanujemy przeciwnika i gramy czysto!”",
            "correct": false
          },
          {
            "text": "„Proszę sędziego o przerwę w meczu, aby wyjaśnić sporne zagranie na boisku!”",
            "correct": false
          },
          {
            "text": "„Podaję rękę rywalowi i proponuję spokojne wznowienie gry od rzutu wolnego!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_6",
        "speech": "Masz niesamowitą celność strzału! Gdzie nauczyłeś się tak świetnie grać w piłkę?",
        "promptPl": "Opowiedz o swoich treningach:",
        "options": [
          {
            "text": "„Trenuję z kolegami na boisku i na każdej lekcji WF-u!”",
            "correct": true
          },
          {
            "text": "„Nigdy w życiu nie widziałem piłki na oczy.”",
            "correct": false
          },
          {
            "text": "„Zgubiłem zeszyt z języka polskiego.”",
            "correct": false
          },
          {
            "text": "„Proszę pani, czy mogę otworzyć okno?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_7",
        "speech": "Z taką formą na boisku bez problemu stawisz czoła każdemu przeciwnikowi!",
        "promptPl": "Podziękuj za motywujące słowa:",
        "options": [
          {
            "text": "„Dzięki Olek! Razem tworzymy zgrany zespół!”",
            "correct": true
          },
          {
            "text": "„Nie lubię z tobą rozmawiać.”",
            "correct": false
          },
          {
            "text": "„Kiedy jest sprawdzian z przyrody?”",
            "correct": false
          },
          {
            "text": "„Zostawiam kurtkę na podłodze.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_8",
        "speech": "Po lekcjach idziemy na stołówkę na ciepłą zupę i drugie danie?",
        "promptPl": "Zgódź się na wspólny obiad:",
        "options": [
          {
            "text": "„Chętnie, po tak intensywnym bieganiu na WF-ie jestem bardzo głodny!”",
            "correct": true
          },
          {
            "text": "„Z wielką ochotą! Ciepła zupa pomidorowa na stołówce brzmi znakomicie!”",
            "correct": false
          },
          {
            "text": "„Pewnie, zjedzmy wspólny obiad i porozmawiajmy o taktyce na finałowy mecz!”",
            "correct": false
          },
          {
            "text": "„Z przyjemnością dołączę, potrzebuję pożywnego posiłku przed powrotem!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_9",
        "speech": "Wiesz, że nasza drużyna przypomina bohaterów z lektury „Kamienie na szaniec”? Oni też zawsze mogli na siebie liczyć!",
        "promptPl": "Którzy trzej przyjaciele są głównymi bohaterami „Kamieni na szaniec”?",
        "options": [
          {
            "text": "„To Rudy, Zośka i Alek — wzór harcerskiej przyjaźni, wierności i braterstwa!”",
            "correct": true
          },
          {
            "text": "„To Balladyna, Alina i Kirkor — bohaterowie romantycznego dramatu o władzy!”",
            "correct": false
          },
          {
            "text": "„To Ebenezer Scrooge, Bob Cratchit i Tiny Tim — postacie z wiktoriańskiej opowieści!”",
            "correct": false
          },
          {
            "text": "„To Gerwazy, Protazy i Robak — barwni uczestnicy szlacheckich sporów na Litwie!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_10",
        "speech": "A pamiętasz z „Małego Księcia”, co Lis powiedział o budowaniu prawdziwej przyjaźni?",
        "promptPl": "Wybierz słynną myśl Lisa z „Małego Księcia”:",
        "options": [
          {
            "text": "„Dobrze widzi się tylko sercem i jesteśmy odpowiedzialni za to, co oswoiliśmy!”",
            "correct": true
          },
          {
            "text": "„Najważniejszy w życiu jest majątek, złote monety oraz wysoka pozycja w banku!”",
            "correct": false
          },
          {
            "text": "„Nie warto rozmawiać z nikim na żadnej planecie, bo samotność daje spokój ducha!”",
            "correct": false
          },
          {
            "text": "„Kto zbierze najwięcej malin do dzbanka, ten ma prawo rządzić całym królestwem!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_11",
        "speech": "Co powiesz koledze z drużyny, któremu nie wyszedł rzut karny i jest mu bardzo przykro?",
        "promptPl": "Pociesz kolegę z zespołu:",
        "options": [
          {
            "text": "„Głowa do góry! Każdemu może się zdarzyć, następnym razem strzelisz gola!”",
            "correct": true
          },
          {
            "text": "„Nie przejmuj się! To była trudna piłka, w kolejnej akcji pójdzie nam lepiej!”",
            "correct": false
          },
          {
            "text": "„Spokojnie, to dopiero początek spotkania, gramy dalej jako jedna drużyna!”",
            "correct": false
          },
          {
            "text": "„Świetnie walczyłeś! Ważne jest zaangażowanie, wynik jeszcze odrobimy na boisku!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_12",
        "speech": "Gdybyśmy pisali ogłoszenie o naborze do naszej szkolnej drużyny piłkarskiej, jakie informacje musimy w nim podać?",
        "promptPl": "Wskaż niezbędne elementy ogłoszenia:",
        "options": [
          {
            "text": "„Kto ogłasza, dla kogo, co się odbędzie oraz dokładną datę, godzinę i miejsce!”",
            "correct": true
          },
          {
            "text": "„Tytuł utworu literackiego, streszczenie fabuły oraz szczegółowy spis postaci!”",
            "correct": false
          },
          {
            "text": "„Imię autora plakatu, wykaz nagród w konkursie oraz jadłospis obiadowy na stołówce!”",
            "correct": false
          },
          {
            "text": "„Krótka notatka z kroniki szkolnej z wykazem nieobecnych uczniów na sprawdzianie!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_13",
        "speech": "A gdybyśmy chcieli zaprosić panią wychowawczynię na nasz mecz finałowy, o jakich słowach w zaproszeniu trzeba pamiętać?",
        "promptPl": "Wskaż kluczowe elementy zaproszenia:",
        "options": [
          {
            "text": "„Kto zaprasza, kogo, na jaką uroczystość, kiedy i gdzie oraz zwrot zachęcający!”",
            "correct": true
          },
          {
            "text": "„Tylko krótka notka towarzyska ze wskazaniem numeru telefonu i listy obecnych gości!”",
            "correct": false
          },
          {
            "text": "„Streszczenie lektury obowiązkowej z cytatem motta i podpisem wychowawcy klasy!”",
            "correct": false
          },
          {
            "text": "„Spis zasad bezpiecznego poruszania się po boisku szkolnym w czasie turnieju gier!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_14",
        "speech": "Jakiego słowa w młodzieżowym slangu użyjesz, gdy ktoś strzeli naprawdę niesamowitą bramkę z przewrotki?",
        "promptPl": "Wybierz pozytywny okrzyk zachwytu:",
        "options": [
          {
            "text": "„Ale sztos! Mega bramka!”",
            "correct": true
          },
          {
            "text": "„Ale nudne i słabe!”",
            "correct": false
          },
          {
            "text": "„Dobranoc państwu!”",
            "correct": false
          },
          {
            "text": "„Poproszę reklamówkę przy kasie!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_15",
        "speech": "Co warto zawsze mieć w bidonie obok ławki rezerwowych podczas intensywnego meczu?",
        "promptPl": "Zadbaj o nawodnienie organizmu:",
        "options": [
          {
            "text": "„Niegazowaną wodę mineralną, żeby skutecznie ugasić pragnienie po meczu!”",
            "correct": true
          },
          {
            "text": "„Ciepłą herbatę z cytryną i miodem, aby rozgrzać gardło po chłodnym poranku!”",
            "correct": false
          },
          {
            "text": "„Świeżo wyciskany sok owocowy, bogaty w witaminy i minerały dla sportowców!”",
            "correct": false
          },
          {
            "text": "„Napój izotoniczny z bidonu, pomagający utrzymać odpowiedni poziom nawodnienia!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h4_ol_16",
        "speech": "Dzięki za świetny trening na boisku! Z tobą w ataku jesteśmy nie do zatrzymania!",
        "promptPl": "Podziękuj za wspólną grę:",
        "options": [
          {
            "text": "„Dzięki Olek! Do zobaczenia na kolejnym emocjonującym meczu piłkarskim!”",
            "correct": true
          },
          {
            "text": "„Świetna gra! Cieszę się, że mogliśmy razem potrenować podania na boisku!”",
            "correct": false
          },
          {
            "text": "„Dziękuję za wspólny czas! Twoje podania w ataku były dzisiaj naprawdę celne!”",
            "correct": false
          },
          {
            "text": "„Do zobaczenia jutro! Powtórzymy ten zacięty pojedynek po skończonych lekcjach!”",
            "correct": false
          }
        ]
      }
    ]
  },
  "5": {
    "type": "olek_quiz_5",
    "titlePl": "Olek Gejmer [Gaduła] (30 HP)",
    "subtitlePl": "Olek Gejmer",
    "icon": "./assets/Postacie/Gejmer.png",
    "archetype": "gadula",
    "enemyName": "gejmer",
    "enemyMaxHp": 30,
    "enemyDamage": 2,
    "descriptionPl": "Olek zagrzewa do walki przed wejściem na halę Bossa Piłkarza!",
    "questions": [
      {
        "id": "h5_ol_extra_1",
        "speech": "Olek pyta o imiesłowy: „Wskaż zdanie z imiesłowem przysłówkowym współczesnym na -ąc”:",
        "promptPl": "Znajdź imiesłów na -ąc:",
        "options": [
          {
            "text": "„Słuchając muzyki, Olek powtarzał reguły gramatyczne.”",
            "correct": true
          },
          {
            "text": "„Zrobiwszy zakupy, wrócił do domu.”",
            "correct": false
          },
          {
            "text": "„Przeczytana książka leży na stole.”",
            "correct": false
          },
          {
            "text": "„Biegnący chłopiec potknął się na schodach.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_2",
        "speech": "Kiedy wolno użyć imiesłowowego równoważnika zdania (np. idąc do szkoły...)?",
        "promptPl": "Podaj żelazną zasadę składniową CKE:",
        "options": [
          {
            "text": "„Tylko wtedy, gdy podmiot w obu częściach zdania złożonego jest IDENTYCZNY!”",
            "correct": true
          },
          {
            "text": "„Można go używać zawsze i w każdej sytuacji, bez względu na podmioty zdań!”",
            "correct": false
          },
          {
            "text": "„Wyłącznie w utworach poetyckich pisanych wierszem rymowanym ze stałą cezurą!”",
            "correct": false
          },
          {
            "text": "„Tylko wtedy, gdy orzeczenie występuje w czasie przeszłym dokonanym orzekającym!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_3",
        "speech": "Jak poprawnie przekształcić mowę niezależną: Olek powiedział: „Pomogę ci” na mowę zależną?",
        "promptPl": "Wybierz poprawną mowę zależną:",
        "options": [
          {
            "text": "„Olek powiedział, że mi pomoże.”",
            "correct": true
          },
          {
            "text": "„Olek powiedział, że: Pomogę ci.”",
            "correct": false
          },
          {
            "text": "„Olek mówi: pomoże ci.”",
            "correct": false
          },
          {
            "text": "„Olek, pomożesz mi, powiedział.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_4",
        "speech": "Jaki środek stylistyczny reprezentuje zdanie: „Czas ucieka jak rzeka”?",
        "promptPl": "Rozpoznaj środek stylistyczny:",
        "options": [
          {
            "text": "„Porównanie (zestawienie cech dwóch zjawisk za pomocą spójnika jak)”",
            "correct": true
          },
          {
            "text": "„Oksymoron (zestawienie pojęć o sprzecznym znaczeniu np. żywy trup)”",
            "correct": false
          },
          {
            "text": "„Onomatopeja (wyraz naśladujący naturalne dźwięki otoczenia w tekście)”",
            "correct": false
          },
          {
            "text": "„Apostrofa (uroczysty, bezpośredni zwrot do bóstwa lub osoby w liryce)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_5",
        "speech": "W której lekturze CKE spotykamy postać Guślarza przywołującego duchy zmarłych?",
        "promptPl": "Podaj tytuł lektury Adama Mickiewicza:",
        "options": [
          {
            "text": "„Dziady część II”",
            "correct": true
          },
          {
            "text": "„Pan Tadeusz”",
            "correct": false
          },
          {
            "text": "„Balladyna”",
            "correct": false
          },
          {
            "text": "„Zemsta”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_6",
        "speech": "Czym kończy się dramat „Balladyna” Juliusza Słowackiego?",
        "promptPl": "Podaj finałowe wydarzenie dramatu:",
        "options": [
          {
            "text": "„Balladyna wydaje trzy wyroki śmierci na nieznanego zbrodniarza i ginie od pioruna.”",
            "correct": true
          },
          {
            "text": "„Balladyna bierze ślub z księciem Kirkorem i wspólnie rządzą królestwem w pokoju.”",
            "correct": false
          },
          {
            "text": "„Alina niespodziewanie powraca z pełnym dzbanem malin i wybacza siostrze zazdrość.”",
            "correct": false
          },
          {
            "text": "„Pustelnik odzyskuje królewską koronę Popielów i ucieka z nią w głąb ciemnego lasu.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_7",
        "speech": "Jaki pseudonim w Szarych Szeregach nosił Tadeusz Zawadzki, autor planu Akcji pod Arsenałem?",
        "promptPl": "Wskaż pseudonim bohatera:",
        "options": [
          {
            "text": "„Zośka (pseudonim nadany z powodu delikatnej, niemal dziewczęcej urody)”",
            "correct": true
          },
          {
            "text": "„Rudy (pseudonim pochodzący od koloru włosów i piegowatej karnacji twarzy)”",
            "correct": false
          },
          {
            "text": "„Alek (pseudonim wywodzący się od imienia Aleksy, charakteryzujący sportowca)”",
            "correct": false
          },
          {
            "text": "„Orsza (pseudonim dowódcy harcerskiego kierującego całą akcją pod Arsenałem)”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_extra_8",
        "speech": "Co jest kluczem do sukcesu na Egzaminie Ósmoklasisty CKE z języka polskiego?",
        "promptPl": "Podsumuj złote zasady egzaminacyjne:",
        "options": [
          {
            "text": "„Uważne czytanie poleceń, odwoływanie się do lektur z wnioskami i sprawdzenie interpunkcji!”",
            "correct": true
          },
          {
            "text": "„Szybkie zaznaczanie losowych odpowiedzi na chybił trafił bez czytania treści zadań!”",
            "correct": false
          },
          {
            "text": "„Pisanie obszernego wypracowania jednym ciągiem bez stosowania podziału na akapity!”",
            "correct": false
          },
          {
            "text": "„Pozostawienie pustego arkusza egzaminacyjnego i opuszczenie sali po kilku minutach!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_1",
        "speech": "Boss już czeka w Wielkim Finale na końcu piętra! Masz przygotowany ekwipunek?",
        "promptPl": "Potwierdź gotowość do finałowego starcia:",
        "options": [
          {
            "text": "„Tak, założyłem trampki turniejowe, jestem w 100% gotowy!”",
            "correct": true
          },
          {
            "text": "„Zapomniałem butów i idę grać boso po parkiecie.”",
            "correct": false
          },
          {
            "text": "„Boję się wielkiego meczu i uciekam do szatni.”",
            "correct": false
          },
          {
            "text": "„Który dzisiaj mamy poniedziałek w miesiącu?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_2",
        "speech": "Piłkarz ma potężny strzał! Jaka jest twoja taktyka na ten mecz?",
        "promptPl": "Jak zamierzasz pokonać Bossa Piłkarza?",
        "options": [
          {
            "text": "„Będę odpowiadać bezbłędnie po polsku i wykorzystam spryt!”",
            "correct": true
          },
          {
            "text": "„Rzucę w sędziego ciężkim podręcznikiem.”",
            "correct": false
          },
          {
            "text": "„Poproszę dyrektora o natychmiastowe odwołanie meczu.”",
            "correct": false
          },
          {
            "text": "„Zamknę oczy i usiądę na środku boiska.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_3",
        "speech": "Pamiętasz najważniejszą zasadę finałowego starcia?",
        "promptPl": "O jakiej zasadzie sportowej nie wolno zapomnieć?",
        "options": [
          {
            "text": "„Zasada Fair Play — gramy uczciwie z pełnym szacunkiem!”",
            "correct": true
          },
          {
            "text": "„Faulujemy rywali przy każdej możliwej okazji.”",
            "correct": false
          },
          {
            "text": "„Zabieramy sędziemu gwizdek i uciekamy z sali.”",
            "correct": false
          },
          {
            "text": "„Krzyczymy na wszystkich dookoła bez powodu.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_4",
        "speech": "Cała szkoła ci kibicuje! Idź po Tytuł Mistrza Języka Polskiego!",
        "promptPl": "Ruszaj do Wielkiego Finału:",
        "options": [
          {
            "text": "„Dzięki Olek! Idę po zwycięstwo na Salę Gimnastyczną!”",
            "correct": true
          },
          {
            "text": "„Nie mam ochoty na żaden turniej i wracam do ławki.”",
            "correct": false
          },
          {
            "text": "„Idę do sklepiku kupić chipsy paprykowe.”",
            "correct": false
          },
          {
            "text": "„Gdzie zostawiłem swój zimowy szalik?”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_5",
        "speech": "Widziałeś widownię? Pani nauczycielka i pan wuefista siedzą w pierwszym rzędzie!",
        "promptPl": "Poczuj dumę ze wsparcia nauczycieli:",
        "options": [
          {
            "text": "„Świetnie! Pokażę im, jak wiele się nauczyłem w tej szkole!”",
            "correct": true
          },
          {
            "text": "„Boję się nauczycieli i uciekam przez okno.”",
            "correct": false
          },
          {
            "text": "„Nie obchodzi mnie zdanie nauczycieli.”",
            "correct": false
          },
          {
            "text": "„Zapomniałem zjeść obiad na stołówce.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_6",
        "speech": "Pamiętaj: gdy sędzia zagwiżdże, skup się na piłce i słuchaj uważnie pytań!",
        "promptPl": "Potwierdź koncentrację:",
        "options": [
          {
            "text": "„Będę maksymalnie skoncentrowany na każdym kolejnym pytaniu egzaminacyjnym!”",
            "correct": true
          },
          {
            "text": "„Dokładnie przeczytam każdy tekst źródłowy i sprawdzę wszystkie odpowiedzi!”",
            "correct": false
          },
          {
            "text": "„Zachowam spokój i opanowanie, korzystając z całej zdobytej wiedzy z polskiego!”",
            "correct": false
          },
          {
            "text": "„Postaram się precyzyjnie sformułować argumenty i poprzeć je trafnymi cytatami!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_7",
        "speech": "Jesteś już prawdziwym Mistrzem języka! Udowodnij to w finałowym pojedynku!",
        "promptPl": "Wyraź gotowość do zwycięstwa:",
        "options": [
          {
            "text": "„Jestem w pełni gotowy! Zdobędziemy ten puchar dla całej naszej wspaniałej klasy!”",
            "correct": true
          },
          {
            "text": "„Trenowaliśmy rzetelnie przez cały rok, więc wierzę w nasz wspólny wielki sukces!”",
            "correct": false
          },
          {
            "text": "„Nie zabraknie nam odwagi ani determinacji w walce o najwyższy stopień podium!”",
            "correct": false
          },
          {
            "text": "„Zrobimy wszystko, co w naszej mocy, by pokazać wysoki poziom wiedzy na finale!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_8",
        "speech": "Drzwi do Sali Gimnastycznej właśnie się otwierają! Trzymam kciuki, do boju!",
        "promptPl": "Wkrocz na finałową arenę:",
        "options": [
          {
            "text": "„Dziękuję za wszystko, Olek! Wchodzę na arenę!”",
            "correct": true
          },
          {
            "text": "„Zamykam drzwi i uciekam do lasu.”",
            "correct": false
          },
          {
            "text": "„Zgubiłem trampki pod schodami.”",
            "correct": false
          },
          {
            "text": "„Do widzenia w przyszłym stuleciu.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_9",
        "speech": "Zanim wejdziesz, szybka rozgrzewka językowa: w jaki dzień tygodnia zaczynamy szkolny tydzień nauki?",
        "promptPl": "Wskaż pierwszy dzień tygodnia szkolnego:",
        "options": [
          {
            "text": "„W poniedziałek rano!”",
            "correct": true
          },
          {
            "text": "„W sobotę wieczorem.”",
            "correct": false
          },
          {
            "text": "„W niedzielę w południe.”",
            "correct": false
          },
          {
            "text": "„W wakacje.”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_10",
        "speech": "A kiedy wygrałeś z nami turniej, postanowiliśmy wpisać ci dedykację do pamiątkowej książki! Komu wpisuje się dedykację?",
        "promptPl": "Czym jest dedykacja?",
        "options": [
          {
            "text": "„To krótki, uroczysty wpis dla obdarowywanej osoby z wyrazami sympatii i podpisem!”",
            "correct": true
          },
          {
            "text": "„To oficjalny dokument urzędowy potwierdzający zdanie państwowego egzaminu z języka!”",
            "correct": false
          },
          {
            "text": "„To szczegółowy spis książek wykorzystanych przez autora podczas pisania rozprawki!”",
            "correct": false
          },
          {
            "text": "„To formularz zgłoszeniowy upoważniający do udziału w ogólnopolskim konkursie wiedzy!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_11",
        "speech": "Gdybyś pisał opowiadanie o naszym dzisiejszym meczu, co sprawia, że opowiadanie czyta się z zapartym tchem?",
        "promptPl": "Wskaż cechy dobrego opowiadania twórczego:",
        "options": [
          {
            "text": "„Zwroty akcji, żywe dialogi bohaterów, opisy przeżyć i wyraźny punkt kulminacyjny!”",
            "correct": true
          },
          {
            "text": "„Monotonna narracja bez dialogów, suchy opis faktów i brak jakichkolwiek bohaterów!”",
            "correct": false
          },
          {
            "text": "„Wyliczenie reguł ortograficznych z podręcznika bez żadnej spójnej fabuły utworu!”",
            "correct": false
          },
          {
            "text": "„Streszczenie danych statystycznych ujętych w tabeli bez zachowania formy literackiej!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_12",
        "speech": "A w rozprawce, kiedy bronisz tezy, że „Sport uczy charakteru”, co musisz podać w rozwinięciu?",
        "promptPl": "Czego wymaga rozwinięcie rozprawki?",
        "options": [
          {
            "text": "„Trafnych argumentów popartych przykładami z lektur szkolnych lub doświadczeń!”",
            "correct": true
          },
          {
            "text": "„Samych ilustracji i rysunków ołówkiem bez zachowania gramatycznego tekstu zdań!”",
            "correct": false
          },
          {
            "text": "„Spisu wyposażenia piórnika uczniowskiego oraz planu lekcji na bieżący semestr!”",
            "correct": false
          },
          {
            "text": "„Podania jedynie daty urodzenia autora lektury bez odniesienia do tematu pracy!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_13",
        "speech": "Który bohater lektury przeszedł niezwykłą przemianę w noc Bożego Narodzenia dzięki wizycie duchów?",
        "promptPl": "Wskaż bohatera „Opowieści wigilijnej” Charlesa Dickensa:",
        "options": [
          {
            "text": "„Ebenezer Scrooge, który ze skąpca stał się człowiekiem głęboko dobrym i hojnym!”",
            "correct": true
          },
          {
            "text": "„Sędzia Soplica, gospodarz dworu szlacheckiego dbający o staropolskie obyczaje!”",
            "correct": false
          },
          {
            "text": "„Grabiec z dramatu Juliusza Słowackiego, przemieniony w płaczącą wierzbę nad wodą!”",
            "correct": false
          },
          {
            "text": "„Guślarz przewodniczący pogańskiemu obrzędowi wywoływania duchów w cmentarnej kaplicy!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_14",
        "speech": "A jak nazywa się nasza narodowa epopeja Adama Mickiewicza, która zaczyna się słowami „Litwo! Ojczyzno moja!”?",
        "promptPl": "Wskaż tytuł epopei Adama Mickiewicza:",
        "options": [
          {
            "text": "„Pan Tadeusz, czyli ostatni zajazd na Litwie – dwunastoksiągowa narodowa epopeja!”",
            "correct": true
          },
          {
            "text": "„Mały Książę – poetycka powiastka filozoficzna o przyjaźni, miłości i dorastaniu!”",
            "correct": false
          },
          {
            "text": "„Kamienie na szaniec – reporterska opowieść o bohaterstwie harcerzy Szarych Szeregów!”",
            "correct": false
          },
          {
            "text": "„Opowieść wigilijna – wzruszające opowiadanie o duchowej przemianie skąpego kupca!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_15",
        "speech": "Jak odróżnisz fakt od opinii podczas komentowania meczu sportowego?",
        "promptPl": "Wskaż różnicę między faktem a opinią:",
        "options": [
          {
            "text": "„Fakt jest sprawdzalny (np. wynik 2:1), a opinia wyraża subiektywną ocenę (mecz był piękny)!”",
            "correct": true
          },
          {
            "text": "„Fakt zawiera wyłącznie przymiotniki oceniające, a opinia składa się z samych liczb!”",
            "correct": false
          },
          {
            "text": "„Opinia to oficjalna data historyczna, natomiast fakt to osobiste odczucie widza na trybunie!”",
            "correct": false
          },
          {
            "text": "„Fakt i opinia to pojęcia tożsame w języku polskim, stosowane wymiennie bez różnicy znaczeń!”",
            "correct": false
          }
        ]
      },
      {
        "id": "h5_ol_16",
        "speech": "Brawo! Zdałeś całą odprawę śpiewająco! Pokaż na arenie, kto tu rządzi!",
        "promptPl": "Przyjmij doping przyjaciela:",
        "options": [
          {
            "text": "„Dzięki Olek! Czas na wielki, zwycięski finał całego szkolnego turnieju wiedzy!”",
            "correct": true
          },
          {
            "text": "„Dziękuję za wsparcie! Pokażemy wszystkim, jak zgrana jest nasza cała drużyna!”",
            "correct": false
          },
          {
            "text": "„Świetnie Olek! Z taką energią i przygotowaniem żaden przeciwnik nas nie pokona!”",
            "correct": false
          },
          {
            "text": "„Do boju! Wykorzystajmy każdą minutę, by zdobyć upragnione mistrzostwo szkoły!”",
            "correct": false
          }
        ]
      }
    ]
  }
};
