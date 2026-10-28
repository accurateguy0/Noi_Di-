// Dialogi, quizy z Olkiem i dane do minigier na planszach 3-6
// Wyzwania bossów oraz rozbudowane dialogi Gadułów wydzielono do osobnych modułów dla czytelności

export * from './bossChallengesData.js';
export * from './gadulaDialogSteps.js';

export const OLEK_QUIZ_ENCOUNTERS = {
  encounter_1: {
    title: 'Mijanka z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 10,
    enemyDamage: 3,
    tanDamage: 2,
    questions: [
      {
        id: 'olek_1_q1',
        olekSpeech: 'Elo!',
        olekSpeakText: 'Elo!',
        promptPl: 'Olek mija Cię na korytarzu i rzuca: „Elo!”. Co mu odpowiesz?',
        promptVn: 'Olek đi ngang qua ở hành lang và chào: "Elo!". Bạn đáp lại thế nào?',
        playBellOnStart: false,
        options: [
          { text: 'Siema!', vnText: 'Chào bạn! (Powitanie)', speakText: 'Siema!', correct: true },
          { text: 'Nara!', vnText: 'Tạm biệt nhé! (Pożegnanie)', speakText: 'Nara!', correct: false },
          { text: 'Co tam?', vnText: 'Có gì mới không? (Pytanie)', speakText: 'Co tam?', correct: false },
          { text: 'Dobranoc!', vnText: 'Chúc ngủ ngon!', speakText: 'Dobranoc!', correct: false }
        ]
      },
      {
        id: 'olek_1_q2',
        olekSpeech: 'Hejka! Co tam u ciebie?',
        olekSpeakText: 'Hejka! Co tam u ciebie?',
        promptPl: 'Olek pyta z uśmiechem: „Co tam u ciebie?”. Jak naturalnie odpowiesz?',
        promptVn: 'Olek hỏi thăm: "Co tam u ciebie?". Bạn trả lời sao cho tự nhiên?',
        playBellOnStart: false,
        options: [
          { text: 'Spoko! Wszystko dobrze!', vnText: 'Ổn cả! Mọi thứ đều tốt!', speakText: 'Spoko!', correct: true },
          { text: 'Dobranoc, idę już prosto spać!', vnText: 'Chúc ngủ ngon, tớ đi ngủ luôn đây!', speakText: 'Dobranoc!', correct: false },
          { text: 'Która to jest strona w książce?', vnText: 'Trang mấy trong sách thế?', speakText: 'Która strona?', correct: false },
          { text: 'Nara, muszę już szybko uciekać!', vnText: 'Tạm biệt, tớ phải chạy ngay đây!', speakText: 'Nara!', correct: false }
        ]
      },
      {
        id: 'olek_1_q3',
        olekSpeech: 'Idziesz teraz do szatni zostawić kurtkę?',
        olekSpeakText: 'Idziesz teraz do szatni zostawić kurtkę?',
        promptPl: 'Odpowiedz koledze na korytarzu:',
        promptVn: 'Trả lời bạn ở hành lang:',
        playBellOnStart: false,
        options: [
          { text: 'Tak, idę zmienić buty w szatni!', vnText: 'Ừ, tớ đi thay giày ở phòng thay đồ!', speakText: 'Tak!', correct: true },
          { text: 'Poproszę jeden ulgowy bilet do autobusu.', vnText: 'Cho xin một vé giảm giá xe buýt.', speakText: 'Bilet', correct: false },
          { text: 'Boli mnie bardzo mocno brzuch od rana.', vnText: 'Tớ bị đau bụng dữ dội từ sáng.', speakText: 'Brzuch', correct: false },
          { text: 'Do widzenia jutro rano po południu!', vnText: 'Tạm biệt hẹn ngày mai nhé!', speakText: 'Do widzenia', correct: false }
        ]
      },
      {
        id: 'olek_1_q4',
        olekSpeech: 'Jaką mamy teraz pierwszą lekcję w planie?',
        olekSpeakText: 'Jaką mamy teraz pierwszą lekcję w planie?',
        promptPl: 'Wskaż pierwszą lekcję dnia:',
        promptVn: 'Cho biết tiết học đầu tiên hôm nay:',
        playBellOnStart: false,
        options: [
          { text: 'Teraz mamy język polski w sali numer 12!', vnText: 'Bây giờ tụi mình học tiếng Ba Lan ở phòng 12!', speakText: 'Język polski!', correct: true },
          { text: 'Teraz wszyscy odpoczywamy w domu po szkole.', vnText: 'Bây giờ tất cả nghỉ ngơi ở nhà sau giờ học.', speakText: 'Śpimy', correct: false },
          { text: 'Poproszę jedną reklamówkę na zakupy spożywcze.', vnText: 'Cho xin một túi nilon đựng đồ tạp hóa.', speakText: 'Reklamówka', correct: false },
          { text: 'Mam trzynaście lat i chodzę do klasy siódmej.', vnText: 'Tớ 13 tuổi và đang học lớp 7.', speakText: 'Trzynaście', correct: false }
        ]
      },
      {
        id: 'olek_1_q5',
        olekSpeech: 'Super, to chodźmy razem pod salę!',
        olekSpeakText: 'Super, to chodźmy razem pod salę!',
        promptPl: 'Zakończ rozmowę i ruszajcie razem:',
        promptVn: 'Kết thúc cuộc trò chuyện và cùng đi:',
        playBellOnStart: false,
        options: [
          { text: 'Jasne, chodźmy!', vnText: 'Tất nhiên rồi, đi thôi!', speakText: 'Jasne!', correct: true },
          { text: 'Dobranoc, idę już prosto spać!', vnText: 'Chúc ngủ ngon, tớ đi ngủ luôn đây!', speakText: 'Dobranoc!', correct: false },
          { text: 'Nie rozumiem.', vnText: 'Tớ không hiểu.', speakText: 'Nie rozumiem', correct: false },
          { text: 'Przypał!', vnText: 'Xấu hổ quá!', speakText: 'Przypał', correct: false }
        ]
      }
    ]
  },
  encounter_2: {
    title: 'Dzwonek szkolny',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 12,
    enemyDamage: 3,
    tanDamage: 2,
    questions: [
      {
        id: 'olek_2_q1',
        olekSpeech: 'Co tam?',
        olekSpeakText: 'Co tam?',
        promptPl: 'Olek zaczepia Cię w biegu i pyta: „Co tam?”. Co oznacza to pytanie?',
        promptVn: 'Olek bắt chuyện khi đang vội và hỏi: "Co tam?". Câu hỏi này có nghĩa là gì?',
        playBellOnStart: false,
        options: [
          { text: 'Co u Ciebie nowego?', vnText: 'Có gì mới không? / Dạo này thế nào?', speakText: 'Co tam?', correct: true },
          { text: 'Pożegnanie przed wyjściem', vnText: 'Tạm biệt nhé! (Chia tay ra về)', speakText: 'Nara!', correct: false },
          { text: 'Powitanie rano przed szkołą', vnText: 'Chào buổi sáng trước giờ học', speakText: 'Siema!', correct: false },
          { text: 'Pytanie, która jest godzina', vnText: 'Hỏi xem bây giờ là mấy giờ', speakText: 'Która godzina?', correct: false }
        ]
      },
      {
        id: 'olek_2_q2',
        olekSpeech: 'Dobra, nara!',
        olekSpeakText: 'Dobra, nara!',
        promptPl: 'Dzwoni dzwonek szkolny! Olek biegnie na lekcję i rzuca: „Dobra, nara!”. Co odpowiesz?',
        promptVn: 'Chuông trường reo vang! Olek vội chạy vào lớp và nói: "Dobra, nara!". Bạn đáp lại thế nào?',
        playBellOnStart: true,
        options: [
          { text: 'Nara!', vnText: 'Tạm biệt nhé! (Pożegnanie)', speakText: 'Nara!', correct: true },
          { text: 'Siema!', vnText: 'Chào bạn! (Powitanie)', speakText: 'Siema!', correct: false },
          { text: 'Elo!', vnText: 'Chào nhé! (Powitanie)', speakText: 'Elo!', correct: false },
          { text: 'Co tam?', vnText: 'Có gì mới không? (Pytanie)', speakText: 'Co tam?', correct: false }
        ]
      },
      {
        id: 'olek_2_q3',
        olekSpeech: 'Widzimy się na dużej przerwie na boisku?',
        olekSpeakText: 'Widzimy się na dużej przerwie na boisku?',
        promptPl: 'Umów się z Olkiem na przerwę:',
        promptVn: 'Hẹn gặp Olek vào giờ ra chơi lớn:',
        playBellOnStart: false,
        options: [
          { text: 'Pewnie! Do zobaczenia na boisku!', vnText: 'Chắc chắn rồi! Hẹn gặp ở sân bóng!', speakText: 'Pewnie!', correct: true },
          { text: 'Dzień dobry pani nauczycielko!', vnText: 'Em chào cô giáo!', speakText: 'Dzień dobry', correct: false },
          { text: 'Nie mam zeszytu w kratkę.', vnText: 'Tớ không có vở ô ly.', speakText: 'Zeszyt', correct: false },
          { text: 'Boli mnie gardło.', vnText: 'Tớ bị đau họng.', speakText: 'Gardło', correct: false }
        ]
      },
      {
        id: 'olek_2_q4',
        olekSpeech: 'A masz dzisiaj ze sobą drugie śniadanie?',
        olekSpeakText: 'A masz dzisiaj ze sobą drugie śniadanie?',
        promptPl: 'Odpowiedz koledze o drugim śniadaniu:',
        promptVn: 'Trả lời bạn về bữa ăn phụ:',
        playBellOnStart: false,
        options: [
          { text: 'Tak, mam kanapkę i soczyste jabłko!', vnText: 'Có, tớ mang bánh mì kẹp và táo!', speakText: 'Tak, mam!', correct: true },
          { text: 'Mam w plecaku tylko linijkę i cyrkiel.', vnText: 'Tớ chỉ có thước kẻ và compa trong cặp.', speakText: 'Linijka', correct: false },
          { text: 'Poproszę jeden bilet normalny na pociąg.', vnText: 'Cho xin một vé thường đi tàu hỏa.', speakText: 'Bilet', correct: false },
          { text: 'Dobranoc, idę już prosto spać do łóżka!', vnText: 'Chúc ngủ ngon, tớ đi thẳng lên giường ngủ đây!', speakText: 'Dobranoc', correct: false }
        ]
      },
      {
        id: 'olek_2_q5',
        olekSpeech: 'Pani już otwiera drzwi do klasy! Wchodzimy!',
        olekSpeakText: 'Pani już otwiera drzwi do klasy! Wchodzimy!',
        promptPl: 'Co mówimy wchodząc do klasy, gdy stoi tam nauczycielka?',
        promptVn: 'Khi bước vào lớp gặp cô giáo, chúng ta chào thế nào?',
        playBellOnStart: false,
        options: [
          { text: 'Dzień dobry pani!', vnText: 'Em chào cô ạ!', speakText: 'Dzień dobry pani!', correct: true },
          { text: 'Siemanko kolego z ławki!', vnText: 'Chào bạn cùng bàn nhé!', speakText: 'Elo!', correct: false },
          { text: 'Nara, uciekam na dwór!', vnText: 'Tạm biệt, tớ chuồn ra sân!', speakText: 'Nara!', correct: false },
          { text: 'Życzę smacznego obiadu!', vnText: 'Chúc bữa trưa ngon miệng!', speakText: 'Smacznego!', correct: false }
        ]
      },
      {
        id: 'olek_2_q6',
        olekSpeech: 'Zajmij miejsce w naszej ławce przy oknie!',
        olekSpeakText: 'Zajmij miejsce w naszej ławce przy oknie!',
        promptPl: 'Jak odpowiesz koledze zajmując miejsce?',
        promptVn: 'Bạn trả lời Olek thế nào khi ngồi vào bàn?',
        playBellOnStart: false,
        options: [
          { text: 'Spoko, już siadam i wyjmuję zeszyt!', vnText: 'Ok, tớ ngồi xuống và lấy vở ra ngay!', speakText: 'Spoko!', correct: true },
          { text: 'Idę szybko na przystanek autobusowy.', vnText: 'Tớ chạy nhanh ra trạm xe buýt đây.', speakText: 'Przystanek', correct: false },
          { text: 'Poproszę łagodny sos czosnkowy do dania.', vnText: 'Cho xin sốt tỏi dịu nhẹ cho món ăn.', speakText: 'Sos', correct: false },
          { text: 'Nie znam jeszcze dobrze języka polskiego.', vnText: 'Tớ chưa biết giỏi tiếng Ba Lan lắm.', speakText: 'Nie', correct: false }
        ]
      }
    ]
  },
  encounter_board4: {
    title: 'Rozmowa o emocjach z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 30,
    enemyDamage: 4,
    tanDamage: 2,
    questions: [
      {
        id: 'olek_b4_q1',
        olekSpeech: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
        olekSpeakText: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
        promptPl: 'Olek chwali się wielkim sukcesem w grze. Jak zareagujesz z entuzjazmem?',
        options: [
          { text: 'Sztos! Gratulacje!', correct: true },
          { text: 'Masakra, strasznie słabo.', correct: false },
          { text: 'Przypał, nie mów nikomu.', correct: false },
          { text: 'Nara, już idę.', correct: false }
        ]
      },
      {
        id: 'olek_b4_q2',
        olekSpeech: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
        olekSpeakText: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
        promptPl: 'Olek opowiada o fatalnej passie porażek. Jak to podsumujesz?',
        options: [
          { text: 'Masakra, współczuję ci!', correct: true },
          { text: 'Sztos, świetna robota!', correct: false },
          { text: 'Dobra, nara ziomek!', correct: false },
          { text: 'Grasz w coś fajnego?', correct: false }
        ]
      },
      {
        id: 'olek_b4_q3',
        olekSpeech: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
        olekSpeakText: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
        promptPl: 'Co to za wstydliwa i niefortunna wpadka?',
        options: [
          { text: 'Ale przypał!', correct: true },
          { text: 'Czysty sztos!', correct: false },
          { text: 'Jaki masz nick?', correct: false },
          { text: 'Siema!', correct: false }
        ]
      },
      {
        id: 'olek_b4_q4',
        olekSpeech: 'Na szczęście odzyskałem konto przez e-mail! Pomożesz mi dzisiaj odrobić pucharki?',
        olekSpeakText: 'Na szczęście odzyskałem konto przez e-mail! Pomożesz mi dzisiaj odrobić pucharki?',
        promptPl: 'Jak po koleżeńsku zgodzisz się pomóc Olkowi?',
        options: [
          { text: 'Spoko, zagramy razem po lekcjach!', correct: true },
          { text: 'Nie mam przy sobie legitymacji szkolnej.', correct: false },
          { text: 'Boli mnie bardzo mocno lewe kolano.', correct: false },
          { text: 'Do widzenia pani od języka polskiego!', correct: false }
        ]
      },
      {
        id: 'olek_b4_q5',
        olekSpeech: 'Wczoraj na WF-ie nasza klasa wygrała turniej międzyklasowy 5:0!',
        olekSpeakText: 'Wczoraj na WF-ie nasza klasa wygrała turniej międzyklasowy pięć do zera!',
        promptPl: 'Jak ocenisz tak spektakularne zwycięstwo klasy?',
        options: [
          { text: 'Mega sztos! Byliśmy najlepsi!', correct: true },
          { text: 'Straszny przypał i porażka.', correct: false },
          { text: 'Poproszę wodę niegazowaną.', correct: false },
          { text: 'Która strona w zeszycie?', correct: false }
        ]
      },
      {
        id: 'olek_b4_q6',
        olekSpeech: 'A kiedy szedłem po korytarzu, rozwiązała mi się sznurówka i wywinąłem orła przed wszystkimi...',
        olekSpeakText: 'A kiedy szedłem po korytarzu, rozwiązała mi się sznurówka i wywinąłem orła przed wszystkimi...',
        promptPl: 'Jak nazwiesz taką niezręczną sytuację na korytarzu?',
        options: [
          { text: 'Oj, lekki przypał, ale najważniejsze, że jesteś cały!', correct: true },
          { text: 'To był mega sztos, zrób to koniecznie jeszcze raz!', correct: false },
          { text: 'Poproszę jeden bilet ulgowy do kina na popołudnie.', correct: false },
          { text: 'Dzień dobry panie doktorze, czy mogę wejść do sali?', correct: false }
        ]
      },
      {
        id: 'olek_b4_q7',
        olekSpeech: 'Dzisiaj mamy aż trzy sprawdziany jednego dnia: z matmy, historii i przyrody!',
        olekSpeakText: 'Dzisiaj mamy aż trzy sprawdziany jednego dnia: z matmy, historii i przyrody!',
        promptPl: 'Jak skomentujesz tak ciężki i męczący dzień w szkole?',
        options: [
          { text: 'Masakra! Ale damy radę, bo się uczyliśmy!', correct: true },
          { text: 'Jaki masz teraz swój nick w grze Roblox?', correct: false },
          { text: 'Życzę wszystkim bardzo smacznego obiadu!', correct: false },
          { text: 'Zamawiasz ten obiad na miejscu czy na wynos?', correct: false }
        ]
      },
      {
        id: 'olek_b4_q8',
        olekSpeech: 'Jeśli pożyczę od ciebie kolorowe flamastry, to oddam ci je zaraz po plastyce, okej?',
        olekSpeakText: 'Jeśli pożyczę od ciebie kolorowe flamastry, to oddam ci je zaraz po plastyce, okej?',
        promptPl: 'Wyraź luźną, koleżeńską zgodę:',
        options: [
          { text: 'Spoko, nie ma żadnego problemu!', correct: true },
          { text: 'Masakra, nigdy w życiu tego nie zrobię!', correct: false },
          { text: 'To jest po prostu totalny przypał na całego!', correct: false },
          { text: 'Dobranoc wszystkim, do widzenia jutro rano!', correct: false }
        ]
      }
    ]
  },
  encounter_board5: {
    title: 'Rozmowa w ławce z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 35,
    enemyDamage: 4,
    tanDamage: 2,
    questions: [
      {
        id: 'olek_b5_q1',
        olekSpeech: 'Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!',
        olekSpeakText: 'Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!',
        promptPl: 'Jak zapytasz Olka, czy ma zapasowy długopis do pożyczenia?',
        options: [
          { text: '„Olek, masz długopis?”', correct: true },
          { text: '„Która to jest strona w książce?”', correct: false },
          { text: '„Nara, do zobaczenia jutro!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q2',
        olekSpeech: 'Nauczyciel podał numer strony z zadaniem do zrobienia!',
        olekSpeakText: 'Nauczyciel podał numer strony z zadaniem do zrobienia!',
        promptPl: 'Nie dosłyszałeś numeru strony. Jak zapytasz o to Olka?',
        options: [
          { text: '„Która strona?”', correct: true },
          { text: '„Grasz w...?”', correct: false },
          { text: '„Przypał!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q3',
        olekSpeech: 'Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!',
        olekSpeakText: 'Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!',
        promptPl: 'Olek podał Ci długopis i pomógł. Jak mu naturalnie podziękujesz?',
        options: [
          { text: '„Dzięki!”', correct: true },
          { text: '„Siema!”', correct: false },
          { text: '„Masakra!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q4',
        olekSpeech: 'Musimy narysować równoległobok w zeszycie. Czego potrzebujemy oprócz ołówka?',
        olekSpeakText: 'Musimy narysować równoległobok w zeszycie. Czego potrzebujemy oprócz ołówka?',
        promptPl: 'Wskaż przybór do rysowania prostych odcinków:',
        options: [
          { text: '„Potrzebujemy prostej linijki i ekierki!”', correct: true },
          { text: '„Potrzebujemy czapki zimowej.”', correct: false },
          { text: '„Potrzebujemy biletu na tramwaj.”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q5',
        olekSpeech: 'Pomyliłem się w obliczeniach ołówkiem! Jak to szybko naprawić?',
        olekSpeakText: 'Pomyliłem się w obliczeniach ołówkiem! Jak to szybko naprawić?',
        promptPl: 'Co podasz koledze z piórnika?',
        options: [
          { text: '„Trzymaj gumkę do ścierania, zmażesz błąd bez śladu!”', correct: true },
          { text: '„Wyrwij całą kartkę z zeszytu i wyrzuć ją do kosza!”', correct: false },
          { text: '„Zamaluj tę wielką plamę czerwonym keczupem z kanapki!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q6',
        olekSpeech: 'Nie rozumiem ostatniego polecenia z ułamkami... Pomożesz mi?',
        olekSpeakText: 'Nie rozumiem ostatniego polecenia z ułamkami... Pomożesz mi?',
        promptPl: 'Jak życzliwie odpowiesz koledze z ławki?',
        options: [
          { text: '„Jasne! Już ci tłumaczę krok po kroku.”', correct: true },
          { text: '„Nie obchodzi mnie to, radź sobie sam.”', correct: false },
          { text: '„Idę do domu, nara!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q7',
        olekSpeech: 'Kiedy pani mówi za szybko i nie nadążamy notować, co możemy grzecznie powiedzieć?',
        olekSpeakText: 'Kiedy pani mówi za szybko i nie nadążamy notować, co możemy grzecznie powiedzieć?',
        promptPl: 'Wybierz szkolny zwrot ratunkowy:',
        options: [
          { text: '„Przepraszam, czy może pani mówić trochę wolniej?”', correct: true },
          { text: '„Proszę o absolutną ciszę pod tablicą w klasie!”', correct: false },
          { text: '„Poproszę dużą porcję frytek na wynos z sosem!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q8',
        olekSpeech: 'Udało się! Rozwiązaliśmy wszystkie zadania przed dzwonkiem!',
        olekSpeakText: 'Udało się! Rozwiązaliśmy wszystkie zadania przed dzwonkiem!',
        promptPl: 'Uciesz się ze wspólnego sukcesu w ławce:',
        options: [
          { text: '„Super! Współpraca w naszej ławce to czysty sztos!”', correct: true },
          { text: '„Zgubiłem wczoraj swój nowy plecak w autobusie miejskim.”', correct: false },
          { text: '„Dobranoc wszystkim kolegom, idę już prosto do łóżka!”', correct: false }
        ]
      }
    ]
  },
  encounter_teacher: {
    title: 'Sprawdzian z Nauczycielką',
    opponentName: 'Nauczycielka',
    opponentAvatar: './assets/Postacie/Nauczycielka.png',
    spriteClass: 'sprite-nauczycielka',
    enemyMaxHp: 40,
    enemyDamage: 4,
    tanDamage: 2,
    questions: [
      {
        id: 'teacher_b5_q1',
        olekSpeech: 'Zadanie na tablicy jest trudne! Poproś kolegę o współpracę.',
        olekSpeakText: 'Zadanie na tablicy jest trudne! Poproś kolegę o współpracę.',
        promptPl: 'Jak uprzejmie poprosisz Olka o pomoc w zadaniu?',
        options: [
          { text: '„Olek, pomóż mi, proszę.”', correct: true },
          { text: '„Podasz mi swoje ID w grze?”', correct: false },
          { text: '„Dobranoc, do widzenia jutro!”', correct: false }
        ]
      },
      {
        id: 'teacher_b5_q2',
        olekSpeech: 'Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.',
        olekSpeakText: 'Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.',
        promptPl: 'Jak zapytasz Olka, czy możesz spojrzeć do jego zeszytu?',
        options: [
          { text: '„Olek, mogę zobaczyć zeszyt?”', correct: true },
          { text: '„Mam nowe, modne sneakersy!”', correct: false },
          { text: '„Nara, biegnę do szatni!”', correct: false }
        ]
      }
    ]
  },
  encounter_board6_olek: {
    title: 'Quiz słowny z Olkiem („Lubię...”)',
    opponentName: 'Gejmer Olek',
    opponentAvatar: './assets/Postacie/Gejmer.png',
    spriteClass: 'sprite-olek',
    enemyMaxHp: 30,
    enemyDamage: 4,
    tanDamage: 2,
    questions: [
      {
        id: 'olek_b6_q1',
        olekSpeech: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!',
        olekSpeakText: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!',
        promptPl: 'Olek mówi z pasją o grach. Jak entuzjastycznie odpowiesz słownie?',
        options: [
          { text: 'Mega!', correct: true },
          { text: 'Nudne...', correct: false },
          { text: 'Słabe', correct: false },
          { text: 'Hejty', correct: false }
        ]
      },
      {
        id: 'olek_b6_q2',
        olekSpeech: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?',
        olekSpeakText: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?',
        promptPl: 'Olek mówi o gotowanych warzywach. Wyraź swoją szczerą opinię:',
        options: [
          { text: 'Mega!', correct: true },
          { text: 'Słabe', correct: true },
          { text: 'Nudne...', correct: true },
          { text: 'Hejty', correct: false }
        ]
      },
      {
        id: 'olek_b6_q3',
        olekSpeech: 'Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.',
        olekSpeakText: 'Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.',
        promptPl: 'Olek chwali swoje buty na korytarzu. Twoja aprobująca reakcja to:',
        options: [
          { text: 'Fajne!', correct: true },
          { text: 'Nudne', correct: false },
          { text: 'Słabe', correct: false },
          { text: 'Hejty', correct: false }
        ]
      },
      {
        id: 'olek_b6_q4',
        olekSpeech: 'Uwielbiam gorącą zupę Pho i japoński Ramen z makaronem!',
        olekSpeakText: 'Uwielbiam gorącą zupę Pho i japoński Ramen z makaronem!',
        promptPl: 'Jak ocenisz pyszny azjatycki bulion z makaronem?',
        options: [
          { text: 'Mega pyszne!', correct: true },
          { text: 'Ostre hejty', correct: false },
          { text: 'Mega przypał', correct: false },
          { text: 'Strasznie nudne', correct: false }
        ]
      },
      {
        id: 'olek_b6_q5',
        olekSpeech: 'Nie znoszę, gdy ktoś pisze w internecie złośliwe komentarze i obraża innych!',
        olekSpeakText: 'Nie znoszę, gdy ktoś pisze w internecie złośliwe komentarze i obraża innych!',
        promptPl: 'Jak ocenisz zjawisko hejtu w internecie?',
        options: [
          { text: 'Słabe! Hejty są nieakceptowalne!', correct: true },
          { text: 'To jest naprawdę mega wielki sztos!', correct: false },
          { text: 'Zbieram w sieci same fajne lajki!', correct: false },
          { text: 'Dla mnie to jest całkiem spoko zabawa!', correct: false }
        ]
      },
      {
        id: 'olek_b6_q6',
        olekSpeech: 'Oglądałeś wczorajszy mecz, w którym Messi i Ronaldo strzelili po dwie bramki?',
        olekSpeakText: 'Oglądałeś wczorajszy mecz, w którym Messi i Ronaldo strzelili po dwie bramki?',
        promptPl: 'Wyraź zachwyt nad wielkim widowiskiem piłkarskim:',
        options: [
          { text: 'Mega mecz! Czysty sztos!', correct: true },
          { text: 'To było strasznie nudne...', correct: false },
          { text: 'Same złośliwe hejty!', correct: false },
          { text: 'Kupiłem tani bilet ulgowy!', correct: false }
        ]
      }
    ]
  }
};

// Zadania do minigry Spell the Word (Olek – Test Nowych Słów na Polu 5 Planszy 3)
export const BOARD_3_SPELL_QUESTIONS = [
  {
    id: 'spell_1',
    olekSpeech: 'Lubię gry na telefonie! A ty?',
    olekSpeakText: 'Lubię gry na telefonie! A ty?',
    contextPl: 'Olek siedzi na ławce i gra na telefonie. Zapytaj go, czy gra w Twoją ulubioną grę.',
    targetPhrase: 'GRASZ W',
    displayTarget: 'Grasz w...?',
    speakOnSolve: 'Grasz w Roblox?',
    baseTimeSec: 10
  },
  {
    id: 'spell_2',
    olekSpeech: 'Tak, gram w to codziennie!',
    olekSpeakText: 'Tak, gram w to codziennie!',
    contextPl: 'Olek też gra w tę grę! Zapytaj go o jego nazwę gracza.',
    targetPhrase: 'JAKI MASZ NICK',
    displayTarget: 'Jaki masz nick?',
    speakOnSolve: 'Jaki masz nick?',
    baseTimeSec: 10
  },
  {
    id: 'spell_3',
    olekSpeech: 'Mój nick to OlekPro! Dodasz mnie?',
    olekSpeakText: 'Mój nick to OlekPro! Dodasz mnie?',
    contextPl: 'Chcesz dodać Olka do znajomych w grze. Poproś go o jego kod gracza.',
    targetPhrase: 'DASZ ID',
    displayTarget: 'Dasz ID?',
    speakOnSolve: 'Dasz ID?',
    baseTimeSec: 10
  }
];

// Dane do minigry Match up (Jeżyk – Pole 2 Planszy 4)
export const MATCH_UP_DATA = [
  { id: 'm_masakra', word: 'Masakra!', defPl: 'Coś okropnego, bardzo trudnego lub złego', color: '#ef476f' },
  { id: 'm_sztos', word: 'Sztos!', defPl: 'Coś niesamowitego, rewelacyjnego, hit!', color: '#ffd166' },
  { id: 'm_spoko', word: 'Spoko!', defPl: 'W porządku, nie ma sprawy, luźna zgoda', color: '#06d6a0' },
  { id: 'm_przypal', word: 'Przypał!', defPl: 'Wstydliwa wpadka, niezręczna sytuacja', color: '#118ab2' }
];

// Dane do minigry Find the Match (Szczeniaczek – Pole 5 Planszy 4)
export const FIND_MATCH_QUESTIONS = [
  {
    id: 'fm_1',
    promptPl: 'Nauczyciel przyłapał cię na ściąganiu na teście przed całą klasą! Co to za sytuacja?',
    correctWord: 'Przypał!',
    options: ['Przypał!', 'Sztos!', 'Spoko!', 'Masakra!']
  },
  {
    id: 'fm_2',
    promptPl: 'Nowa gra okazała się niesamowitym hitem, jest przepiękna i wciągająca!',
    correctWord: 'Sztos!',
    options: ['Sztos!', 'Masakra!', 'Przypał!', 'Spoko!']
  },
  {
    id: 'fm_3',
    promptPl: 'Całą noc uczyłeś się do sprawdzianu, a pytania były potwornie trudne i męczące!',
    correctWord: 'Masakra!',
    options: ['Masakra!', 'Sztos!', 'Spoko!', 'Przypał!']
  },
  {
    id: 'fm_4',
    promptPl: 'Kolega pyta: „Mogę pożyczyć twój długopis na jedną lekcję?”. Odpowiadasz mu ze spokojem:',
    correctWord: 'Spoko!',
    options: ['Spoko!', 'Masakra!', 'Sztos!', 'Przypał!']
  },
  {
    id: 'fm_5',
    promptPl: 'Drużyna wygrała mecz w ostatniej sekundzie po genialnym strzale z połowy boiska!',
    correctWord: 'Sztos!',
    options: ['Sztos!', 'Przypał!', 'Spoko!', 'Masakra!']
  }
];

// Pytania Quizu z Olkiem na Planszy 4
export const OLEK_BOARD_4_QUIZ = OLEK_QUIZ_ENCOUNTERS.encounter_board4;

// Słowa do wykreślanki (Zając – Pole 7 Planszy 4)
export const WORD_SEARCH_WORDS = ['MASAKRA', 'SZTOS', 'SPOKO', 'PRZYPAŁ'];

// Pytania do quizu z Olkiem w klasie (Plansza 5)
export const BOARD_5_OLEK_QUESTIONS = [
  {
    id: 'b5_q1',
    promptPl: 'Twój długopis przestał pisać w trakcie notowania. Jak poprosisz kolegę z ławki o pożyczenie zapasowego?',
    promptVn: 'Bút của bạn hết mực khi đang ghi bài. Bạn mượn bạn cùng bàn cây bút khác như thế nào?',
    options: [
      { textPl: '„Olek, masz długopis?” — prośba o pożyczenie długopisu', correct: true },
      { textPl: '„Nara!” — luźne pożegnanie z kolegami po zakończonych lekcjach', correct: false },
      { textPl: '„Która strona?” — zapytanie o stronę z zadaniem w podręczniku', correct: false }
    ],
    explanationPl: 'Świetnie! „Olek, masz długopis?” to naturalny sposób na zapytanie o przybory.',
    damage: 12
  },
  {
    id: 'b5_q2',
    promptPl: 'Nauczyciel mówi: „Otwórzcie podręczniki na...”, ale nie dosłyszałeś numeru. O co zapytasz Olka?',
    promptVn: 'Thầy giáo bảo mở sách nhưng bạn nghe không rõ số trang. Bạn hỏi bạn cùng bàn câu gì?',
    options: [
      { textPl: '„Która strona?” — zapytanie o właściwą stronę w podręczniku', correct: true },
      { textPl: '„Grasz w...?” — pytanie o ulubione gry komputerowe ze znajomymi', correct: false },
      { textPl: '„Przypał!” — spontaniczna reakcja na niespodziewaną szkolną wpadkę', correct: false }
    ],
    explanationPl: 'Dokładnie! Krótkie pytanie „Która strona?” natychmiast wyjaśnia sprawę.',
    damage: 12
  },
  {
    id: 'b5_q3',
    promptPl: 'Olek podał Ci swój zapasowy niebieski długopis. Jak mu za to po koleżeńsku podziękujesz?',
    promptVn: 'Bạn Olek đưa cho bạn cây bút bi dự phòng. Bạn cảm ơn bạn ấy thế nào cho tự nhiên?',
    options: [
      { textPl: '„Dzięki!” — luźne i miłe podziękowanie', correct: true },
      { textPl: '„Siema!” — serdeczne powitanie z kolegą', correct: false },
      { textPl: '„Masakra!” — wyraz ogromnego przerażenia', correct: false }
    ],
    explanationPl: 'Idealnie! „Dzięki!” to najpopularniejsze podziękowanie wśród uczniów.',
    damage: 12
  }
];

// Pytania do sprawdzianu z Nauczycielką (Plansza 5)
export const BOARD_5_TEACHER_QUESTIONS = [
  {
    id: 'b5_t1',
    promptPl: 'Pracujecie w parach nad trudnym zadaniem i utknąłeś. Jak grzecznie poprosisz Olka o wsparcie?',
    promptVn: 'Hai bạn đang làm bài tập nhóm nhưng bạn bị bí. Bạn nhờ Olek giúp đỡ thế nào?',
    options: [
      { textPl: '„Olek, pomóż mi, proszę.” — uprzejma prośba o pomoc', correct: true },
      { textPl: '„Masz ID?” — pytanie o numer profilu w internetowej grze', correct: false },
      { textPl: '„Dobranoc!” — wieczorne pożegnanie przed pójściem do łóżka', correct: false }
    ],
    explanationPl: 'Wspaniale! „Olek, pomóż mi, proszę.” brzmi uprzejmie i zrozumiale.',
    damage: 20
  },
  {
    id: 'b5_t2',
    promptPl: 'Nie zdążyłeś przepisać tabeli z tablicy przed jej zmazaniem. O co poprosisz sąsiada z ławki?',
    promptVn: 'Bạn chưa kịp chép xong bảng đã bị xóa. Bạn xin phép bạn cùng bàn thế nào?',
    options: [
      { textPl: '„Olek, mogę zobaczyć zeszyt?” — prośba o podejrzenie notatek', correct: true },
      { textPl: '„Mam sneakersy!” — pochwalenie się nowymi sportowymi butami', correct: false },
      { textPl: '„Nara!” — pożegnanie przed szybkim wyjściem z sali lekcyjnej', correct: false }
    ],
    explanationPl: 'Bardzo dobrze! „Olek, mogę zobaczyć zeszyt?” to powszechna prośba w polskiej szkole.',
    damage: 20
  }
];

// 10 tematów do Quizu Myśli (Plansza 6 Pole 3)
export const BOARD_6_TOPICS = [
  { id: 'cristiano_ronaldo', name: 'Cristiano Ronaldo', image: './assets/slowka/cristiano_ronaldo.jpg', desc: 'Legendarny piłkarz, maszyna do zdobywania goli!' },
  { id: 'messi', name: 'Messi', image: './assets/slowka/messi.jpg', desc: 'Mistrz świata, genialny drybling i magia na boisku!' },
  { id: 'brawl_stars', name: 'Brawl Stars', image: './assets/slowka/brawl_stars.jpg', desc: 'Dynamiczne starcia brawlerów i puchary na telefonie!' },
  { id: 'roblox', name: 'Roblox', image: './assets/slowka/roblox.jpg', desc: 'Miliony światów i gier tworzonych przez graczy!' },
  { id: 'ramen', name: 'Ramen', image: './assets/slowka/ramen.jpg', desc: 'Gorący japoński bulion ze sprężystym makaronem!' },
  { id: 'pho', name: 'Pho', image: './assets/slowka/pho.jpg', desc: 'Tradycyjna, aromatyczna zupa wietnamska!' },
  { id: 'modne_buty', name: 'Modne buty', image: './assets/slowka/modne_buty.jpg', desc: 'Świeżutkie, stylowe sneakersy prosto z pudełka!' },
  { id: 'kartkowki', name: 'Kartkówki', image: './assets/slowka/kartkowki.jpg', desc: 'Niezapowiedziane małe sprawdziany na początku lekcji!' },
  { id: 'hejt_i_przykrosci', name: 'Hejt i przykrości', image: './assets/slowka/hejt_i_przykrosci.jpg', desc: 'Złośliwe docinki i niemiłe komentarze w sieci!' },
  { id: 'gotowane_warzywa', name: 'Gotowane warzywa bez przypraw', image: './assets/slowka/gotowane_warzywa.jpg', desc: 'Rozgotowane brokuły i marchewka bez szczypty soli!' }
];

// Dane do Match Up z obrazkami (Plansza 6 Pole 2: Jeżyk)
export const BOARD_6_MATCHUP_DATA = [
  { id: 'b6_mu_mega', word: 'Mega', defPl: 'Coś ekstra, rewelacyjnego, na wyższym poziomie!', image: './assets/slowka/mega.png', color: '#ff006e' },
  { id: 'b6_mu_fajne', word: 'Fajne', defPl: 'Po prostu dobre, przyjemne, warte uwagi.', image: './assets/slowka/fajne.jpg', color: '#06d6a0' },
  { id: 'b6_mu_slabe', word: 'Słabe', defPl: 'Kiepskie, poniżej oczekiwań, bez rewelacji.', image: './assets/slowka/slabe.png', color: '#fb5607' },
  { id: 'b6_mu_nudne', word: 'Nudne', defPl: 'Przynudzające, bez emocji, nie warte czasu.', image: './assets/slowka/nudne.png', color: '#8338ec' },
  { id: 'b6_mu_lajki', word: 'Lajki', defPl: 'Polubienia, akceptacja, poparcie w necie!', image: './assets/slowka/fajne.jpg', color: '#3a86ff' },
  { id: 'b6_mu_hejty', word: 'Hejty', defPl: 'Złośliwe docinki i negatywne komentarze w sieci.', image: './assets/slowka/hejt_i_przykrosci.jpg', color: '#e63946' }
];

// Pytania od Olka (Plansza 6 Pole 4: Quiz słowny "Lubię...")
export const BOARD_6_OLEK_QUESTIONS = [
  {
    id: 'b6_o1',
    olekSpeech: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole! Co o tym powiesz?',
    promptPl: 'Olek mówi z uśmiechem: „Lubię grać w Brawl Stars i Robloxa całymi dniami!”. Co najlepiej pasuje do tej pasji?',
    correctValue: 'mega',
    options: [
      { text: 'Mega!', val: 'mega', correct: true },
      { text: 'Nudne...', val: 'nudne', correct: false },
      { text: 'Słabe', val: 'slabe', correct: false },
      { text: 'Hejty', val: 'hejty', correct: false }
    ],
    damage: 10
  },
  {
    id: 'b6_o2',
    olekSpeech: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... chociaż są trochę mdłe.',
    promptPl: 'Olek wzdycha: „Lubię gotowane warzywa bez żadnych przypraw ani sosu...”. Jaka to opinia?',
    correctValue: 'slabe',
    options: [
      { text: 'Słabe', val: 'slabe', correct: true },
      { text: 'Mega!', val: 'mega', correct: false },
      { text: 'Lajki', val: 'lajki', correct: false },
      { text: 'Fajne', val: 'fajne', correct: false }
    ],
    damage: 10
  },
  {
    id: 'b6_o3',
    olekSpeech: 'Lubię nowe, wygodne sneakersy na wf! Każdy krok to czysta wygoda.',
    promptPl: 'Olek chwali swoje buty: „Lubię nowe, wygodne sneakersy!”. Twoja naturalna reakcja to:',
    correctValue: 'fajne',
    options: [
      { text: 'Fajne!', val: 'fajne', correct: true },
      { text: 'Nudne', val: 'nudne', correct: false },
      { text: 'Słabe', val: 'slabe', correct: false },
      { text: 'Hejty', val: 'hejty', correct: false }
    ],
    damage: 10
  }
];
