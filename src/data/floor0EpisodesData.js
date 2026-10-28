// Kompletna baza danych Poziomu 0 (Szatnia & Prolog) dla 6 bohaterów × 8 epizodów = 48 unikalnych scenariuszy!
// Każdy bohater i każdy epizod uczy unikalnych słów (4 karty ze słowniczkiem audio i tłumaczeniem)
// oraz posiada unikalne Koło Fortuny Kotka Pomocnika (5 pytań/sytuacji powiązanych z podstawą programową).

export const FLOOR_0_EPISODES = {
  // ──────────────────────────── WARRIOR (Wojownik) ────────────────────────────
  warrior: {
    1: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 1 (Rozgrzewka i Powitania)',
      chestWords: [
        { word: 'Trening!', cleanWord: 'Trening', phonetic: '[Tre-ning] • Khởi động thể lực', plMeaning: 'Ranna rozgrzewka i przygotowanie formy przed rozpoczęciem lekcji w szkole.', vnMeaning: 'Luyện tập / Khởi động — Chuẩn bị thể lực và tinh thần trước khi vào học.', color: '#ef4444' },
        { word: 'Drużyna!', cleanWord: 'Drużyna', phonetic: '[Droo-ży-na] • Đội ngũ đồng đội', plMeaning: 'Cała klasa gra do jednej bramki i pomaga sobie wzajemnie w trudnych zadaniach.', vnMeaning: 'Đội ngũ / Nhóm bạn — Tinh thần đồng đội cùng nhau vượt qua thử thách học tập.', color: '#3b82f6' },
        { word: 'Odwaga!', cleanWord: 'Odwaga', phonetic: '[Od-va-ga] • Lòng dũng cảm', plMeaning: 'Śmiałość, by podnieść rękę do odpowiedzi i nie bać się popełnić błędu.', vnMeaning: 'Lòng dũng cảm — Tự tin giơ tay phát biểu và không sợ sai lầm.', color: '#f59e0b' },
        { word: 'Zwycięstwo!', cleanWord: 'Zwycięstwo', phonetic: '[Zvy-cię-stwo] • Chiến thắng', plMeaning: 'Udało się! Pokonanie trudnego tematu i zdobycie świetnej oceny.', vnMeaning: 'Chiến thắng! — Thành công chinh phục bài học khó và đạt điểm tốt.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep1_1', sliceLabel: 'GOTOWY!', color: '#ef4444', badge: 'TRENING', speakText: 'Jestem gotowy!',
          options: [
            { textPl: 'Meldujesz nauczycielowi gotowość przed rozpoczęciem ćwiczeń', correct: true },
            { textPl: 'Gdy kładziesz się spać wieczorem i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Kiedy prosisz o dokładkę zupy na stołówce i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep1_2', sliceLabel: 'NAPRZÓD!', color: '#3b82f6', badge: 'DRUŻYNA', speakText: 'Naprzód drużyno!',
          options: [
            { textPl: 'Okrzyk zagrzewający kolegów z zespołu do wspólnego działania', correct: true },
            { textPl: 'Mówisz szeptem do bibliotekarki i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Gdy przepraszasz za spóźnienie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep1_3', sliceLabel: 'UWAGA!', color: '#f59e0b', badge: 'DYSCYPLINA', speakText: 'Uwaga wszyscy!',
          options: [
            { textPl: 'Pełna koncentracja przed nowym poleceniem nauczyciela', correct: true },
            { textPl: 'Żegnasz się serdecznie z kolegami przed wyjściem ze szkoły', correct: false },
            { textPl: 'Rozmawiasz cicho ze znajomymi pod kołdrą późnym wieczorem', correct: false }
          ]
        },
        {
          id: 'w_ep1_4', sliceLabel: 'FAIR PLAY!', color: '#10b981', badge: 'SZACUNEK', speakText: 'Grajmy fair play!',
          options: [
            { textPl: 'Zasada czystej gry i szacunku dla każdego kolegi i rywala', correct: true },
            { textPl: 'Ściąganie odpowiedzi z zeszytu sąsiada i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Ucieczka z lekcji bez słowa i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep1_5', sliceLabel: 'SPARING!', color: '#8b5cf6', badge: 'PRÓBA SIŁ', speakText: 'Czas na sparing słowny!',
          options: [
            { textPl: 'Ćwiczeniowy pojedynek na szybkie odpowiadanie ze słówek', correct: true },
            { textPl: 'Rzucanie kredą w tablicę na przerwie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Płacenie za bilet w autobusie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 2 (Klasa 4: Części Mowy)',
      chestWords: [
        { word: 'Miecz', cleanWord: 'Miecz', phonetic: '[Miecz] • Danh từ chỉ vũ khí (Kto? Co?)', plMeaning: 'Rzeczownik (kto? co?) oznaczający broń bojową wojownika.', vnMeaning: 'Danh từ chỉ thanh kiếm, vũ khí biểu tượng của chiến binh.', color: '#ef4444' },
        { word: 'Atakować', cleanWord: 'Atakować', phonetic: '[A-ta-ko-wać] • Động từ hành động (Co robi?)', plMeaning: 'Czasownik wyrażający czynność natarcia w walce i nauce.', vnMeaning: 'Động từ chỉ hành động tấn công và nỗ lực vượt qua bài học.', color: '#3b82f6' },
        { word: 'Waleczny', cleanWord: 'Waleczny', phonetic: '[Va-lecz-ny] • Tính từ quả cảm (Jaki?)', plMeaning: 'Przymiotnik określający cechę dzielnego i nieugiętego rycerza.', vnMeaning: 'Tính từ miêu tả phẩm chất dũng cảm kiên cường của hiệp sĩ.', color: '#f59e0b' },
        { word: 'Wojownicy', cleanWord: 'Wojownicy', phonetic: '[Vo-jov-ni-cy] • Danh từ số nhiều', plMeaning: 'Rzeczownik w liczbie mnogiej – wielu zjednoczonych wojowników.', vnMeaning: 'Danh từ số nhiều chỉ các chiến binh cùng kề vai chiến đấu.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep2_1', sliceLabel: 'RZECZOWNIK', color: '#ef4444', badge: 'CZĘŚCI MOWY', speakText: 'Rzeczownik: Kto? Co? (np. tarcza, rycerz)',
          options: [
            { textPl: 'Odpowiada na pytania Kto? Co? (np. tarcza, rycerz)', correct: true },
            { textPl: 'Wskazuje cechę Jaki? Jaka? (np. szybki, odważny wojak)', correct: false },
            { textPl: 'Określa czynność Co robi? (np. dzielnie biega, walczy)', correct: false }
          ]
        },
        {
          id: 'w_ep2_2', sliceLabel: 'CZASOWNIK', color: '#3b82f6', badge: 'AKCJA', speakText: 'Czasownik: Co robi? (np. broni, atakuje)',
          options: [
            { textPl: 'Wyraża czynność bojową: broni, atakuje, zwycięża', correct: true },
            { textPl: 'Nazwa przedmiotu w skrzyni i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Kolor proporca na zamku i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep2_3', sliceLabel: 'PRZYMIOTNIK', color: '#f59e0b', badge: 'CECHA', speakText: 'Przymiotnik: Jaki? (np. waleczny, dzielny)',
          options: [
            { textPl: 'Określa cechę: nieustraszony, żelazny, honorowy', correct: true },
            { textPl: 'Mówi dokładnie, ile jest mieczy w całej zbrojowni', correct: false },
            { textPl: 'To dokładnie to samo co czasownik w bezokoliczniku', correct: false }
          ]
        },
        {
          id: 'w_ep2_4', sliceLabel: 'LICZBA MNOGA', color: '#10b981', badge: 'FLEKSJA', speakText: 'Liczba mnoga: jeden miecz – dwa miecze',
          options: [
            { textPl: 'Zmienia formę z pojedynczej na mnogą (np. tarcza → tarcze)', correct: true },
            { textPl: 'Zawsze kończy się na spółgłoskę (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Oznacza brak przedmiotów (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'w_ep2_5', sliceLabel: 'Ó WYMIENNE', color: '#8b5cf6', badge: 'ORTOGRAFIA', speakText: 'Ó wymienne: bój, bo boje',
          options: [
            { textPl: 'Piszemy „ó”, bo wymienia się na „o” w wyrazie boje', correct: true },
            { textPl: 'Bo po spółgłosce b zawsze jest ó i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Bo to wyjątek bez reguły i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 3 (Klasa 5: Przysłówek i Liczebnik)',
      chestWords: [
        { word: 'Dzielnie', cleanWord: 'Dzielnie', phonetic: '[Dziel-nie] • Phó từ (Jak? Gdzie? Kiedy?)', plMeaning: 'Przysłówek określający sposób walki (odpowiada na pytanie: Jak?).', vnMeaning: 'Phó từ chỉ cách thức chiến đấu kiên cường dũng cảm.', color: '#3b82f6' },
        { word: 'Trzech', cleanWord: 'Trzech', phonetic: '[Trzech] • Số từ đếm (Ilu?)', plMeaning: 'Liczebnik główny męskoosobowy (np. trzech obrońców zamku).', vnMeaning: 'Số từ đếm chỉ ba chiến binh nam bảo vệ cổng thành.', color: '#10b981' },
        { word: 'Pierwszy', cleanWord: 'Pierwszy', phonetic: '[Pierw-szy] • Số thứ tự (Który z kolei?)', plMeaning: 'Liczebnik porządkowy wskazujący pierwsze miejsce w szeregu.', vnMeaning: 'Số thứ tự chỉ vị trí dẫn đầu hàng ngũ quân tiên phong.', color: '#f59e0b' },
        { word: 'Przed bramą', cleanWord: 'Przed bramą', phonetic: '[Przed bra-mą] • Giới từ đi kèm danh từ', plMeaning: 'Wyrażenie przyimkowe określające miejsce zbiórki rycerzy.', vnMeaning: 'Cụm giới từ chỉ địa điểm tập hợp trước cổng thành.', color: '#ef4444' }
      ],
      catScenarios: [
        {
          id: 'w_ep3_1', sliceLabel: 'PRZYSŁÓWEK', color: '#3b82f6', badge: 'JAK? GDZIE?', speakText: 'Przysłówek: jak walczy? Dzielnie!',
          options: [
            { textPl: 'Walczy odważnie, szybko i honorowo (pytanie: jak?)', correct: true },
            { textPl: 'Nosi zbroję i tarczę i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Ma dwóch pomocników i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep3_2', sliceLabel: 'LICZEBNIK', color: '#10b981', badge: 'ILE? KTÓRY?', speakText: 'Liczebnik główny: ilu rycerzy? Trzech!',
          options: [
            { textPl: 'Liczebnik główny odpowiada na pytanie ile? (np. pięciu)', correct: true },
            { textPl: 'Wskazuje cechę przedmiotu (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Zastępuje imię wojownika (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'w_ep3_3', sliceLabel: 'PRZYIMEK', color: '#f59e0b', badge: 'MIEJSCE', speakText: 'Przyimek: przed bramą, na murze',
          options: [
            { textPl: 'Pod zamkiem, na murze, przed bramą (przyimek + rzeczownik)', correct: true },
            { textPl: 'Bardzo szybko i zwinnie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Walczyć dzielnie do końca i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep3_4', sliceLabel: 'PORZĄDKOWY', color: '#ef4444', badge: 'KOLEJNOŚĆ', speakText: 'Liczebnik porządkowy: który z kolei? Pierwszy!',
          options: [
            { textPl: 'Pierwszy, drugi, setny (wskazuje miejsce w szyku)', correct: true },
            { textPl: 'Jeden, dwa, sto (wskazuje dokładną liczbę sztuk)', correct: false },
            { textPl: 'Dzielny, waleczny, twardy (wskazuje stałą cechę)', correct: false }
          ]
        },
        {
          id: 'w_ep3_5', sliceLabel: 'STOPNIOWANIE', color: '#8b5cf6', badge: 'STOPNIE', speakText: 'Stopniowanie: szybki, szybszy, najszybszy',
          options: [
            { textPl: 'Stopień równy, wyższy i najwyższy przysłówka', correct: true },
            { textPl: 'Odmiana wyrazów przez przypadki i liczby', correct: false },
            { textPl: 'Dopisywanie końcówki bezosobowej -no i -to', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 4 (Klasa 6: Zaimki i Spójniki)',
      chestWords: [
        { word: 'My', cleanWord: 'My', phonetic: '[My] • Đại từ nhân xưng chúng tôi', plMeaning: 'Zaimek osobowy 1. osoby liczby mnogiej – symbol jedności oddziału.', vnMeaning: 'Đại từ nhân xưng chỉ tập thể chúng tôi kề vai sát cánh.', color: '#3b82f6' },
        { word: 'Lecz', cleanWord: 'Lecz', phonetic: '[Lecz] • Liên từ nối nhưng / mà', plMeaning: 'Spójnik przeciwstawny łączący myśli (przed „lecz” stawiamy przecinek!).', vnMeaning: 'Liên từ tương phản nhưng/mà, luôn đặt dấu phẩy ở phía trước.', color: '#10b981' },
        { word: 'Rodzina słów', cleanWord: 'Rodzina słów', phonetic: '[Ro-dzi-na słów] • Gia đình từ cùng gốc', plMeaning: 'Wyrazy pokrewne mające wspólny rdzeń (np. wojna, wojownik, wojować).', vnMeaning: 'Gia đình từ cùng gốc nghĩa — Các từ có chung gốc từ cơ bản.', color: '#f59e0b' },
        { word: 'Obywatel', cleanWord: 'Obywatel', phonetic: '[O-by-wa-tel] • Công dân bảo vệ tổ quốc', plMeaning: 'Wojownik walczy w obronie każdego obywatela i swojej szkoły.', vnMeaning: 'Công dân — Người bảo vệ bình yên cho trường lớp và xã hội.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'w_ep4_1', sliceLabel: 'ZAIMEK', color: '#3b82f6', badge: 'ZASTĘPUJE', speakText: 'Zaimek: on szedł, zamiast powtarzać wojownik',
          options: [
            { textPl: 'Zamiast „Wojownik wziął miecz, bo wojownik szedł” mówimy: „on szedł”', correct: true },
            { textPl: 'Zaimek oznacza tylko liczby (np. tarcza, zbroja, hełm, miecz bojowy)', correct: false },
            { textPl: 'Zaimki zawsze piszemy wielką literą (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'w_ep4_2', sliceLabel: 'SPÓJNIK', color: '#10b981', badge: 'ŁĄCZY', speakText: 'Spójnik: przecinek przed ale, lecz, jednak',
          options: [
            { textPl: 'Przed spójnikami: ale, lecz, jednak, a zawsze stawiamy przecinek', correct: true },
            { textPl: 'Nigdy i w żadnym wypadku nie stawiamy przecinka przed spójnikami', correct: false },
            { textPl: 'Przecinek stawiamy wyłącznie i tylko na samym końcu całego zdania', correct: false }
          ]
        },
        {
          id: 'w_ep4_3', sliceLabel: 'RODZINA SŁÓW', color: '#f59e0b', badge: 'RDZEŃ', speakText: 'Rodzina słów: wojna, wojownik, wojować',
          options: [
            { textPl: 'To wyrazy pokrewne mające wspólny rdzeń i pochodzenie', correct: true },
            { textPl: 'To słowa rymujące się ze sobą i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'To synonimy oznaczające to samo (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'w_ep4_4', sliceLabel: 'PRZEDROSTEK', color: '#ef4444', badge: 'FORMANT', speakText: 'Przedrostek: wy-grać, po-konać',
          options: [
            { textPl: 'Cząstka dodawana z przodu podstawy tworząca nowe słowo', correct: true },
            { textPl: 'Kropka na końcu zdania i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Końcówka fleksyjna i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep4_5', sliceLabel: 'NIE Z CZĘŚCIAMI', color: '#8b5cf6', badge: 'PISOWNIA', speakText: 'Pisownia NIE: nie walczę osobno, nieprzyjaciel razem',
          options: [
            { textPl: 'Z czasownikami osobno (nie walczę), z rzeczownikami łącznie (nieprzyjaciel)', correct: true },
            { textPl: 'Zawsze piszemy osobno z każdym słowem (np. szybki, zwinny, waleczny rycerz)', correct: false },
            { textPl: 'Zawsze piszemy łącznie na początku i na końcu wypowiedzi pisemnej na lekcji', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 5 (Klasa 7: Imiesłowy i Stylistyka)',
      chestWords: [
        { word: 'Walczący', cleanWord: 'Walczący', phonetic: '[Wal-czą-cy] • Phân từ đang chiến đấu (-ący)', plMeaning: 'Imiesłów przymiotnikowy czynny (odpowiada: jaki rycerz? – walczący).', vnMeaning: 'Phân từ chủ động miêu tả người chiến sĩ đang cầm vũ khí chiến đấu.', color: '#ef4444' },
        { word: 'Uzbrojony', cleanWord: 'Uzbrojony', phonetic: '[Uz-bro-jo-ny] • Phân từ được trang bị (-ny)', plMeaning: 'Imiesłów przymiotnikowy bierny (odpowiada: jaki? – wyposażony w zbroję).', vnMeaning: 'Phân từ bị động miêu tả chiến binh đã được trang bị đầy đủ giáp trụ.', color: '#3b82f6' },
        { word: 'Biegnąc', cleanWord: 'Biegnąc', phonetic: '[Bieg-nąc] • Phân từ đồng thời (-ąc)', plMeaning: 'Imiesłów przysłówkowy współczesny (np. biegnąc, wzniósł okrzyk bojowy).', vnMeaning: 'Phân từ đồng thời diễn tả hành động vừa chạy vừa hô vang quyết chiến.', color: '#f59e0b' },
        { word: 'Wytrwałość', cleanWord: 'Wytrwałość', phonetic: '[Wy-trwa-łość] • Sự kiên trì bền bỉ', plMeaning: 'Cechy wojownika: niepoddawanie się mimo trudności i systematyczna praca.', vnMeaning: 'Sự kiên trì bền bỉ — Phẩm chất không bỏ cuộc trước mọi khó khăn học tập.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep5_1', sliceLabel: 'IMIESŁÓW -ĄCY', color: '#ef4444', badge: 'CZYNNY', speakText: 'Imiesłów czynny: walczący żołnierz',
          options: [
            { textPl: 'Walczący żołnierz to żołnierz, który w tej chwili walczy', correct: true },
            { textPl: 'To żołnierz, który dawno złożył broń i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'To nazwa zamku w górach i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep5_2', sliceLabel: 'IMIESŁÓW -NY', color: '#3b82f6', badge: 'BIERNY', speakText: 'Imiesłów bierny: zdobyty zamek',
          options: [
            { textPl: 'Zdobyty zamek = zamek, który został przez nas zdobyty', correct: true },
            { textPl: 'Zamek warowny, który samodzielnie zdobywa inne twierdze', correct: false },
            { textPl: 'Czasownik oznaczający przyszłe działania obronne załogi', correct: false }
          ]
        },
        {
          id: 'w_ep5_3', sliceLabel: 'IMIESŁÓW -ĄC', color: '#f59e0b', badge: 'WSPÓŁCZESNY', speakText: 'Imiesłów współczesny: atakując wroga, zachował spokój',
          options: [
            { textPl: 'Atakując wroga, zachował pełny spokój (ten sam podmiot!)', correct: true },
            { textPl: 'Każda z wymienionych czynności ma zupełnie innego sprawcę', correct: false },
            { textPl: 'Wypowiedź dotyczy wyłącznie legend sprzed tysiąca lat', correct: false }
          ]
        },
        {
          id: 'w_ep5_4', sliceLabel: 'METAFORA', color: '#10b981', badge: 'PRZENOSNIA', speakText: 'Metafora: morze ognia, stalowe nerwy',
          options: [
            { textPl: '„Morze ognia” i „stalowe nerwy” to poetyckie przenośnie', correct: true },
            { textPl: 'To dosłowna prawda naukowa i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Błąd gramatyczny w zdaniu i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep5_5', sliceLabel: 'ZDANIE ZŁOŻONE', color: '#8b5cf6', badge: 'PODRZĘDNE', speakText: 'Zdanie podrzędne: rycerz, który zwyciężył',
          options: [
            { textPl: 'Zdanie podrzędne przydawkowe po przecinku określa rycerza', correct: true },
            { textPl: 'Pod żadnym pozorem nie wolno stawiać przecinka przed który', correct: false },
            { textPl: 'To pojedynczy wyraz występujący zupełnie bez orzeczenia', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 6 (Klasa 8: Egzamin CKE i Formy Bezosobowe)',
      chestWords: [
        { word: 'Zdobyto', cleanWord: 'Zdobyto', phonetic: '[Zdo-by-to] • Thể vô nhân xưng kết thúc -to', plMeaning: 'Forma bezosobowa czasownika zakończona na -to (oznacza: ktoś zdobył twierdzę).', vnMeaning: 'Thể động từ vô nhân xưng chỉ hành động đã hoàn thành: Đã chiếm lĩnh được.', color: '#ef4444' },
        { word: 'Rozkazano', cleanWord: 'Rozkazano', phonetic: '[Roz-ka-za-no] • Thể vô nhân xưng kết thúc -no', plMeaning: 'Forma bezosobowa zakończona na -no (oznacza: wydano oficjalny rozkaz).', vnMeaning: 'Hình thức vô nhân xưng kết thúc bằng -no: Đã có quân lệnh ban hành.', color: '#3b82f6' },
        { word: 'Mowa zależna', cleanWord: 'Mowa zależna', phonetic: '[Lời thuật gián tiếp]', plMeaning: 'Przekazanie rozkazu dowódcy bez cytowania: Dowódca rzekł, że ruszamy.', vnMeaning: 'Thuật lại lời tướng lĩnh bằng câu gián tiếp không dùng ngoặc kép.', color: '#f59e0b' },
        { word: 'Teza', cleanWord: 'Teza', phonetic: '[Te-za] • Luận điểm chính', plMeaning: 'Główne twierdzenie w wypracowaniu, którego bronimy trafnymi argumentami.', vnMeaning: 'Luận điểm chính — Phán đoán cốt lõi cần dùng lý lẽ để chứng minh trong bài.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep6_1', sliceLabel: 'FORMY -NO / -TO', color: '#ef4444', badge: 'BEZOSOBOWE', speakText: 'Formy bezosobowe: zdobyto puchar, wygrano mecz',
          options: [
            { textPl: 'Zdobyto puchar, wygrano mecz (czynność w przeszłości bez podmiotu)', correct: true },
            { textPl: 'Czas przyszły trybu rozkazującego i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Błąd językowy w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false }
          ]
        },
        {
          id: 'w_ep6_2', sliceLabel: 'MOWA ZALEŻNA', color: '#3b82f6', badge: 'SKŁADNIA', speakText: 'Mowa zależna: kapitan powiedział, że musimy walczyć',
          options: [
            { textPl: 'Kapitan powiedział, że musimy walczyć do ostatniej minuty', correct: true },
            { textPl: 'Kapitan krzyknął: „Walczcie do końca!” i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Mówić szeptem do siebie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep6_3', sliceLabel: 'PLEONAZM', color: '#f59e0b', badge: 'BŁĄD', speakText: 'Pleonazm: cofać się w tył – to błąd językowy',
          options: [
            { textPl: '„Cofać się” już oznacza ruch w tył, więc dodanie „w tył” to błąd masła maślanego', correct: true },
            { textPl: 'To poprawny poetycki zwrot podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false },
            { textPl: 'Zasada ortograficzna podczas porannej zbiórki przed rozpoczęciem lekcji w klasie', correct: false }
          ]
        },
        {
          id: 'w_ep6_4', sliceLabel: 'ARKUSZ CKE', color: '#10b981', badge: 'TRENING', speakText: 'Arkusz CKE: czytaj polecenia uważnie i do końca',
          options: [
            { textPl: 'Czytaj polecenia do końca i pilnuj limitu słów (min. 200 w wypracowaniu)', correct: true },
            { textPl: 'Pisz jak najkrócej, byle szybko skończyć (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Zostawiaj puste kratki w karcie podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'w_ep6_5', sliceLabel: 'SYNTEZA', color: '#8b5cf6', badge: 'PUNKTACJA', speakText: 'Synteza: w zakończeniu zbierz ostateczne wnioski',
          options: [
            { textPl: 'W zakończeniu rozprawki zbierz wnioski i potwierdź słuszność tezy', correct: true },
            { textPl: 'Dodaj zupełnie nowy, nieomówiony problem i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przepisz polecenie słowo w słowo (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 7 (Lektury CKE I: Kodeks Rycerski)',
      chestWords: [
        { word: 'Braterstwo', cleanWord: 'Braterstwo', phonetic: '[Tình huynh đệ vào sinh ra tử]', plMeaning: 'Więź łącząca Alka, Rudego i Zośkę w książce „Kamienie na szaniec”.', vnMeaning: 'Tình đồng đội keo sơn gắn bó giữa các chàng trai quả cảm Szare Szeregi.', color: '#3b82f6' },
        { word: 'Poświęcenie', cleanWord: 'Poświęcenie', phonetic: '[Sự hy sinh quên mình vì nghĩa lớn]', plMeaning: 'Gotowość oddania własnego dobra w imię wolności ojczyzny i przyjaciół.', vnMeaning: 'Sẵn sàng hy sinh bản thân vì độc lập tự do và danh dự bạn bè.', color: '#ef4444' },
        { word: 'Ksiądz Robak', cleanWord: 'Ksiądz Robak', phonetic: '[Jacek Soplica - Người hùng chuộc tội]', plMeaning: 'Bohater „Pana Tadeusza”, który z dumnego szlachcica stał się cichym emisariuszem.', vnMeaning: 'Nhân vật cải trang thành tu sĩ để âm thầm chuộc lại lỗi lầm thời trẻ.', color: '#f59e0b' },
        { word: 'Honor', cleanWord: 'Honor', phonetic: '[Danh dự và lòng tự trọng]', plMeaning: 'Kodeks rycerski: obrona słabszych, prawdomówność i wierność zasadom.', vnMeaning: 'Danh dự hiệp sĩ: Bảo vệ kẻ yếu, trung thực và kiên trung với lý tưởng.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep7_1', sliceLabel: 'RUDY', color: '#ef4444', badge: 'KAMIENIE', speakText: 'Rudy: Jan Bytnar – niezłomny harcerz Szarych Szeregów',
          options: [
            { textPl: 'Mimo brutalnych tortur na Pawiaku nie zdradził kolegów z organizacji', correct: true },
            { textPl: 'Poddał się po pierwszym pytaniu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Uciekł za granicę przed wojną i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep7_2', sliceLabel: 'ARSENAŁ', color: '#3b82f6', badge: 'AKCJA', speakText: 'Akcja pod Arsenałem: odbicie Rudego 26 marca 1943',
          options: [
            { textPl: 'Harcerze odbili przewożonych więźniów, w tym skatowanego Rudego', correct: true },
            { textPl: 'Podpisano traktat pokojowy i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Turniej piłkarski na stadionie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep7_3', sliceLabel: 'SOPLICA', color: '#f59e0b', badge: 'PRZEMIANA', speakText: 'Jacek Soplica: przemiana z grzesznika w cichego bohatera',
          options: [
            { textPl: 'Jacek Soplica zmył winę zabójstwa Stolnika wieloletnią służbą ojczyźnie', correct: true },
            { textPl: 'Został królem Polski podczas porannej zbiórki przed rozpoczęciem lekcji', correct: false },
            { textPl: 'Nigdy nie żałował swoich czynów podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'w_ep7_4', sliceLabel: 'CYTAT', color: '#10b981', badge: 'MĄDROŚĆ', speakText: 'Cytat: Jak kamienie przez Boga rzucane na szaniec...',
          options: [
            { textPl: 'Młodzi ludzie poświęcili swoje talenty i życie w obronie wolności', correct: true },
            { textPl: 'Chodzi o budowanie kamiennych murów i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Dosłowne rzucanie kamyków do rzeki i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep7_5', sliceLabel: 'PATRIOTYZM', color: '#8b5cf6', badge: 'WARTOŚĆ', speakText: 'Patriotyzm: czynna miłość i wierność ojczyźnie',
          options: [
            { textPl: 'Czynna miłość do ojczyzny połączona z szacunkiem dla innych narodów', correct: true },
            { textPl: 'Pusta przechwałka w internecie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Ucieczka przed odpowiedzialnością i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Wojownika – Epizod 8 (Formy Wypowiedzi II: Rozprawka i Przemówienie)',
      chestWords: [
        { word: 'Teza o odwadze', cleanWord: 'Teza', phonetic: '[Luận điểm về lòng dũng cảm]', plMeaning: 'Prawdziwa odwaga to nie brak strachu, lecz panowanie nad nim w słusznej sprawie.', vnMeaning: 'Lòng dũng cảm thực sự không phải là không sợ hãi mà là chiến thắng nỗi sợ.', color: '#ef4444' },
        { word: 'Argument merytoryczny', cleanWord: 'Argument', phonetic: '[Lập luận thực tế vững chắc]', plMeaning: 'Twardy dowód z faktów i lektur potwierdzający słuszność tezy.', vnMeaning: 'Chứng cứ xác thực từ tác phẩm văn học chứng minh luận điểm.', color: '#3b82f6' },
        { word: 'Przemówienie', cleanWord: 'Przemówienie', phonetic: '[Bài diễn văn hiệu triệu]', plMeaning: 'Wystąpienie zagrzewające słuchaczy do działania i podjęcia trudu nauki.', vnMeaning: 'Bài diễn văn truyền cảm hứng kêu gọi mọi người cùng nỗ lực học tập.', color: '#f59e0b' },
        { word: 'Zwycięska puenta', cleanWord: 'Puenta', phonetic: '[Kết bài đúc kết thắng lợi]', plMeaning: 'Podsumowanie wywodu mocnym przesłaniem zostającym w pamięci na zawsze.', vnMeaning: 'Câu kết bài ấn tượng đúc kết bài học chiến thắng cho tương lai.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'w_ep8_1', sliceLabel: 'WSTĘP', color: '#ef4444', badge: 'ROZPRAWKA', speakText: 'W mojej pracy pragnę rozważyć problem...',
          options: [
            { textPl: 'Wprowadź czytelnika w temat, wyjaśnij pojęcie i jasno sformułuj tezę', correct: true },
            { textPl: 'Od razu napisz zakończenie i podpisz się i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przepisz losowy fragment książki i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep8_2', sliceLabel: 'ROZWINIĘCIE', color: '#3b82f6', badge: 'ARGUMENTY', speakText: 'Kolejnym argumentem potwierdzającym tezę jest...',
          options: [
            { textPl: 'Każdy argument poprzyj trafnym przykładem z lektury obowiązkowej CKE', correct: true },
            { textPl: 'Wypisz same pytania bez odpowiedzi i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zmieniaj temat w każdym zdaniu (np. szybki, zwinny, waleczny rycerz)', correct: false }
          ]
        },
        {
          id: 'w_ep8_3', sliceLabel: 'PRZEMÓWIENIE', color: '#f59e0b', badge: 'RETORYKA', speakText: 'Drodzy Nauczyciele, Koleżanki i Koledzy!',
          options: [
            { textPl: 'Użyj bezpośrednich zwrotów do odbiorców, pytań retorycznych i apelu', correct: true },
            { textPl: 'Mów monotonnie i cicho do ściany i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zastosuj wyłącznie styl urzędowy i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'w_ep8_4', sliceLabel: 'SPÓJNOŚĆ', color: '#10b981', badge: 'KOMPOZYCJA', speakText: 'Po pierwsze, warto zwrócić uwagę na...',
          options: [
            { textPl: 'Używaj zwrotów: po pierwsze, przechodząc do kolejnej kwestii, reasumując', correct: true },
            { textPl: 'Pisz jednym ciągiem bez żadnych akapitów i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Powtarzaj słowo „fajnie” na początku każdego zdania (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'w_ep8_5', sliceLabel: 'ZAKOŃCZENIE', color: '#8b5cf6', badge: 'FINAŁ', speakText: 'Podsumowując powyższe rozważania...',
          options: [
            { textPl: 'Opanowałeś podstawę programową języka polskiego od klasy 4 do 8!', correct: true },
            { textPl: 'Dopiero zaczynasz alfabet i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zapomniałeś wszystkich zasad i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    }
  },

  // ──────────────────────────── THIEF (Złodziej) ────────────────────────────
  thief: {
    1: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 1 (Spryt i Pierwsze Kroki)',
      chestWords: [
        { word: 'Zwinność', cleanWord: 'Zwinność', phonetic: '[Zvin-ność] • Sự nhanh nhẹn khéo léo', plMeaning: 'Umiejętność szybkiego poruszania się między szkolnymi ławkami.', vnMeaning: 'Sự nhanh nhẹn luồn lách khéo léo giữa các dãy bàn học.', color: '#3b82f6' },
        { word: 'Spryt', cleanWord: 'Spryt', phonetic: '[Spryt] • Trí thông minh lanh lợi', plMeaning: 'Bystrość umysłu pozwalająca znaleźć proste rozwiązanie trudnego zadania.', vnMeaning: 'Sự khôn ngoan nhanh trí tìm ra cách giải bài tập hóc búa.', color: '#10b981' },
        { word: 'Skrytka', cleanWord: 'Skrytka', phonetic: '[Skryt-ka] • Ngăn kéo bí mật', plMeaning: 'Tajny schowek na ściągawki i słowniki ortograficzne w szafce.', vnMeaning: 'Ngăn bí mật cất giữ từ điển và tài liệu quan trọng.', color: '#f59e0b' },
        { word: 'Klucz', cleanWord: 'Klucz', phonetic: '[Klucz] • Chìa khoá giải mã', plMeaning: 'Otwiera drzwi do wiedzy i biblioteki szkoły.', vnMeaning: 'Chiếc chìa khoá mở ra cánh cửa tri thức phòng đọc.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 't_ep1_1', sliceLabel: 'CICHO SZA!', color: '#3b82f6', badge: 'DYSKRECJA', speakText: 'Cicho sza, nikt nie widzi!',
          options: [
            { textPl: 'Gdy nie chcesz przeszkadzać innym podczas cichego czytania', correct: true },
            { textPl: 'Gdy krzyczysz na całe gardło na boisku i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Kiedy zamawiasz obiad na stołówce i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 't_ep1_2', sliceLabel: 'KLUCZ!', color: '#10b981', badge: 'SKARB', speakText: 'Mam właściwy klucz!',
          options: [
            { textPl: 'Znalazłeś klucz do rozwiązania trudnej zagadki językowej', correct: true },
            { textPl: 'Zgubiłeś plecak w tramwaju i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zapomniałeś jak się nazywasz (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep1_3', sliceLabel: 'SEKRET!', color: '#f59e0b', badge: 'TAJEMNICA', speakText: 'Znam tajemnicę!',
          options: [
            { textPl: 'Dyskretna wiedza o trudnych zasadach gramatycznych', correct: true },
            { textPl: 'Głośne plotkowanie na lekcji o ocenach ze sprawdzianu', correct: false },
            { textPl: 'Śpiewanie piosenek na korytarzu podczas krótkiej pauzy', correct: false }
          ]
        },
        {
          id: 't_ep1_4', sliceLabel: 'SPRYT!', color: '#ef4444', badge: 'LOGIKA', speakText: 'Sprytny ruch!',
          options: [
            { textPl: 'Zamiast uczyć się na pamięć, rozumiesz zasadę wymiany liter', correct: true },
            { textPl: 'Zgadywanie odpowiedzi na chybił trafił i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Podglądanie do cudzego zeszytu i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 't_ep1_5', sliceLabel: 'SKARBIEC!', color: '#8b5cf6', badge: 'SUKCES', speakText: 'Skarbiec wiedzy otwarty!',
          options: [
            { textPl: 'Zdobycie maksymalnej liczby punktów z testu', correct: true },
            { textPl: 'Dostanie nieprzyjemnej uwagi w dzienniczku', correct: false },
            { textPl: 'Ucieczka przed nauczycielem podczas przerwy', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 2 (Klasa 4: Mianownik, Biernik i Ortografia)',
      chestWords: [
        { word: 'Biernik', cleanWord: 'Biernik', phonetic: '[Bier-nik] • Cách 4 (Kogo? Co?)', plMeaning: 'Biernik rzeczowników żeńskich: widzę skrzyni-Ę, otwieram kłódk-Ę.', vnMeaning: 'Cách 4: Đuôi -ę cho danh từ giống cái số ít (skrzynię, kłódkę).', color: '#3b82f6' },
        { word: 'Wytrychem', cleanWord: 'Narzędnik', phonetic: '[Na-żęd-nik] • Cách 5 (Czym?)', plMeaning: 'Narzędnik (czym?): otwieram zamek sprytnym wytrych-EM.', vnMeaning: 'Cách 5: Bằng công cụ gì (đuôi -em cho giống đực).', color: '#10b981' },
        { word: 'Skrót', cleanWord: 'Skrót', phonetic: '[Skrót] • Ó đổi thành O (skróty)', plMeaning: 'Ó wymienne: skrót, bo skrOcić drogę przez korytarz.', vnMeaning: 'Viết Ó vì đổi thành O trong từ cùng gốc (skrót - skrócić).', color: '#f59e0b' },
        { word: 'Przyjaciel', cleanWord: 'Przyjaciel', phonetic: '[Pży-ja-ciel] • Rz sau phụ âm P', plMeaning: 'Rz piszemy po spółgłoskach p, b, t, d, k, g, ch, j, w (np. PRZYjaciel).', vnMeaning: 'Viết RZ sau phụ âm P: Przyjaciel đồng hành đáng tin cậy.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 't_ep2_1', sliceLabel: 'BIERNIK -Ę', color: '#3b82f6', badge: 'FLEKSJA', speakText: 'Widzę kogo? co?',
          options: [
            { textPl: 'Poproszę jedną bułkę i wodę (końcówka -ę w bierniku lp r. żeńskiego)', correct: true },
            { textPl: 'Poproszę jedną bułką i wodą podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Poproszę jedna bułka i woda podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 't_ep2_2', sliceLabel: 'NARZĘDNIK -Ą/-EM', color: '#10b981', badge: 'NARZĘDZIE', speakText: 'Z kim? z czym?',
          options: [
            { textPl: 'Piszę długopisem, idę z koleżanką (narzędnik z kim? czym?)', correct: true },
            { textPl: 'Piszę długopis, idę z koleżanka i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Piszę długopisu, idę z koleżanki i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 't_ep2_3', sliceLabel: 'RZ PO SPÓŁGŁOSCE', color: '#f59e0b', badge: 'ORTOGRAFIA', speakText: 'P, B, T, D, K, G!',
          options: [
            { textPl: 'Rz piszemy po p, b, t, d, k, g, ch, j, w (np. brzeg, drzewo, krzak)', correct: true },
            { textPl: 'Ż z kropką piszemy po wszystkich spółgłoskach (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Piszemy zawsze rz na początku każdego słowa (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep2_4', sliceLabel: 'Ó WYMIENNE', color: '#ef4444', badge: 'ZASADA', speakText: 'Ó na O, E, A!',
          options: [
            { textPl: 'Piórnik – pióro – pierze (ó wymienia się na e)', correct: true },
            { textPl: 'Piórnik piszemy przez u zwykłe w każdym tekście', correct: false },
            { textPl: 'Litera ó w wyrazie wymienia się na spółgłoskę k', correct: false }
          ]
        },
        {
          id: 't_ep2_5', sliceLabel: 'CH WYMIENNE', color: '#8b5cf6', badge: 'CH : SZ', speakText: 'Mucha – muszka!',
          options: [
            { textPl: 'Piszemy ch, bo wymienia się na sz (mucha – muszka, cicho – cisza)', correct: true },
            { textPl: 'Bo po m zawsze piszemy samo h (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'To słowo z języka angielskiego (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 3 (Klasa 5: 7 Przypadków i Pisownia NIE)',
      chestWords: [
        { word: 'Klucza', cleanWord: 'Dopełniacz', phonetic: '[Do-pew-niacz] • Không có chìa khoá (kogo? czego?)', plMeaning: 'Dopełniacz po przeczeniu: nie mam klucz-A, nie ma czas-U.', vnMeaning: 'Cách 2 sau phủ định "không có gì": nie mam klucza.', color: '#ef4444' },
        { word: 'Koledze', cleanWord: 'Celownik', phonetic: '[Ce-lov-nik] • Cho ai cái gì (komu? czemu?)', plMeaning: 'Celownik: pomagam zaufanemu koledz-E, ufam wspólnik-OWI.', vnMeaning: 'Cách 3: Giúp đỡ người bạn thân (koledze, bratu).', color: '#3b82f6' },
        { word: 'W szafce', cleanWord: 'Miejscownik', phonetic: '[Miej-sco-vnik] • Trong tủ (o kim? o czym?)', plMeaning: 'Miejscownik z przyimkiem: schowany w szafc-E, na półc-E.', vnMeaning: 'Cách 6 chỉ vị trí: Nằm trong tủ khoá, trên kệ sách.', color: '#f59e0b' },
        { word: 'Niebezpieczeństwo', cleanWord: 'NIE łącznie', phonetic: '[Niebezpieczeństwo] • Viết liền với danh từ', plMeaning: 'Partykułę NIE z rzeczownikami piszemy ZAWSZE ŁĄCZNIE!', vnMeaning: 'Viết LIỀN từ phủ định NIE với danh từ: Niebezpieczeństwo.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 't_ep3_1', sliceLabel: '7 PRZYPADKÓW', color: '#ef4444', badge: 'KOMPLET', speakText: 'M, D, C, B, N, Ms, W!',
          options: [
            { textPl: 'Mianownik, Dopełniacz, Celownik, Biernik, Narzędnik, Miejscownik, Wołacz', correct: true },
            { textPl: 'Tylko 3 przypadki występują w języku polskim i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przypadki dotyczą tylko czasowników (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep3_2', sliceLabel: 'DOPEŁNIACZ', color: '#3b82f6', badge: 'PRZECZENIE', speakText: 'Nie mam czego?',
          options: [
            { textPl: 'Mam klucz (Biernik), ale NIE MAM klucza (Dopełniacz po przeczeniu!)', correct: true },
            { textPl: 'Po przeczeniu zostaje Biernik i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Używamy Wołacza podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        },
        {
          id: 't_ep3_3', sliceLabel: 'NIE Z RZECZOWNIKIEM', color: '#f59e0b', badge: 'ŁĄCZNIE', speakText: 'Zawsze razem!',
          options: [
            { textPl: 'Niewiedza, niepokój, nieprzyjaciel piszemy ZAWSZE łącznie', correct: true },
            { textPl: 'Piszemy zawsze z myślnikiem (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Piszemy osobno na początku i na końcu wypowiedzi pisemnej', correct: false }
          ]
        },
        {
          id: 't_ep3_4', sliceLabel: 'NIE Z PRZYMIOTNIKIEM', color: '#10b981', badge: 'STOPIEŃ', speakText: 'Niedobry ale nie najlepszy!',
          options: [
            { textPl: 'W stopniu równym łącznie (nieduży), w wyższym i najwyższym osobno (nie większy)', correct: true },
            { textPl: 'Zawsze piszemy osobno z każdym przymiotnikiem (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Nigdy nie używamy słowa nie podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        },
        {
          id: 't_ep3_5', sliceLabel: 'WOŁACZ', color: '#8b5cf6', badge: 'O KRÓLU!', speakText: 'Bezpośredni zwrot!',
          options: [
            { textPl: 'Używany do wołania i bezpośrednich zwrotów: Panie Profesorze! Przyjacielu!', correct: true },
            { textPl: 'Odpowiada na pytanie o kim? o czym? (np. czytać, pisać, rysować, trenować)', correct: false },
            { textPl: 'Zastępuje kropkę na końcu zdania podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 4 (Klasa 6: Trudne Końcówki i Wielka Litera)',
      chestWords: [
        { word: 'Historii', cleanWord: 'Końcówka -ii', phonetic: '[Hi-sto-rii] • Hai chữ ii sau từ mượn', plMeaning: 'W wyrazach obcego pochodzenia zakończonych na -ia piszemy podwójne -ii (np. historii, biologii).', vnMeaning: 'Viết hai chữ ii ở cách 2 đối với từ mượn gốc nước ngoài.', color: '#3b82f6' },
        { word: 'Drogom', cleanWord: 'Końcówka -om', phonetic: '[Dro-gom] • Đuôi -om danh từ số nhiều', plMeaning: 'Końcówka celownika liczby mnogiej to zawsze -om (np. ludzi-om, drog-om, a nie idą!).', vnMeaning: 'Đuôi -om cách 3 số nhiều luôn viết bằng -om (ludziom), tránh nhầm với -ą.', color: '#10b981' },
        { word: 'Polak', cleanWord: 'Wielka litera', phonetic: '[Po-lak] • Viết hoa tên cư dân quốc gia', plMeaning: 'Nazwy mieszkańców krajów piszemy WIELKĄ literą (Polak, Francuz), ale przymiotniki małą (polski).', vnMeaning: 'Tên người dân các nước viết HOA, nhưng tính từ viết THƯỜNG (język polski).', color: '#ef4444' },
        { word: 'Tajemniczy', cleanWord: 'Przymiotnik', phonetic: '[Ta-jem-ni-czy] • Tính từ bí ẩn', plMeaning: 'Złodziej pozostaje tajemniczy i nikt nie zna jego tożsamości.', vnMeaning: 'Tính từ miêu tả hành tung bí ẩn không ai đoán biết.', color: '#f59e0b' }
      ],
      catScenarios: [
        {
          id: 't_ep4_1', sliceLabel: '-II CZY -I?', color: '#3b82f6', badge: 'PUŁAPKA', speakText: 'Jedno czy dwa i?',
          options: [
            { textPl: 'Ziemia → ziemi (rodzime, jedno i), ale poezja → poezji (jedno i), historia → historii (-ii po t, d, r, l)', correct: true },
            { textPl: 'We wszystkich wyrazach zapożyczonych i rodzimych zawsze i bez wyjątku piszemy trzy litery iii na końcu wyrazu', correct: false },
            { textPl: 'W zakończeniach dopełniacza rzeczowników miękkotematycznych zawsze piszemy samo pojedyncze y w każdym wyrazie', correct: false }
          ]
        },
        {
          id: 't_ep4_2', sliceLabel: '-OM CZY -Ą?', color: '#10b981', badge: 'ROZRÓŻNIENIE', speakText: 'Uczniom czy idą?',
          options: [
            { textPl: 'Rzeczownik komu? czemu? = -om (chłopcom), czasownik oni robią = -ą (idą, piszą)', correct: true },
            { textPl: 'Zawsze piszemy ą na końcu każdego słowa (np. jeden, dwa, dziesięć, sto punktów)', correct: false },
            { textPl: 'Końcówka -om nie istnieje w języku polskim i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 't_ep4_3', sliceLabel: 'WIELKA LITERA', color: '#ef4444', badge: 'ORTOGRAFIA', speakText: 'Warszawiak czy warszawski?',
          options: [
            { textPl: 'Mieszkańcy miast piszemy małą literą (warszawiak), mieszkańcy państw wielką (Polak)', correct: true },
            { textPl: 'Wszystkie słowa w zdaniu piszemy wielką literą (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Zawsze piszemy małą literą nazwy państw w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        },
        {
          id: 't_ep4_4', sliceLabel: 'PRZYMIOTNIK OD KRAJU', color: '#f59e0b', badge: 'MAŁA LITERA', speakText: 'Język polski!',
          options: [
            { textPl: 'Przymiotniki od nazw państw piszemy MAŁĄ literą: polski, wietnamski, francuski', correct: true },
            { textPl: 'Zawsze piszemy wielką literą: Polski język (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Piszemy z myślnikiem w czytelni biblioteki po skończonych lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 't_ep4_5', sliceLabel: 'INTERPUNKCJA', color: '#8b5cf6', badge: 'PRZECINEK', speakText: 'Złodziej, który wie!',
          options: [
            { textPl: 'Zawsze stawiamy przecinek przed zaimkiem „który” otwierającym zdanie podrzędne', correct: true },
            { textPl: 'Przecinek jest zakazany przed który podczas długiej przerwy obiadowej w szkole', correct: false },
            { textPl: 'Stawiamy kropkę zamiast przecinka na korytarzu w trakcie trwania dużej przerwy', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 5 (Klasa 7: Pisownia -by i Skrótowce)',
      chestWords: [
        { word: 'Ukradłbym', cleanWord: 'Cząstka -bym', phonetic: '[U-kradw-bym] • Viết liền đuôi -bym với động từ', plMeaning: 'Cząstkę „-bym, -byś, -by” z osobowymi formami czasownika piszemy ZAWSZE ŁĄCZNIE!', vnMeaning: 'Viết LIỀN hậu tố giả định -bym với động từ ngôi thứ nhất.', color: '#ef4444' },
        { word: 'Gdyby', cleanWord: 'Gdyby', phonetic: '[Gdy-by] • Viết liền với liên từ', plMeaning: 'Ze spójnikami piszemy łącznie: gdyby, żeby, jakby, chociażby.', vnMeaning: 'Viết LIỀN với liên từ điều kiện: nếu như, để mà.', color: '#3b82f6' },
        { word: 'CKE', cleanWord: 'Skrótowiec', phonetic: '[C-K-E] • Từ viết tắt cơ quan khảo thí', plMeaning: 'Skrótowiec głoskowy/literowy od Centralna Komisja Egzaminacyjna (pisany wielkimi literami bez kropek).', vnMeaning: 'Từ viết tắt cơ quan tổ chức thi viết hoa toàn bộ không có dấu chấm.', color: '#f59e0b' },
        { word: 'Np.', cleanWord: 'Skrót', phonetic: '[Na przykład] • Viết tắt có dấu chấm np.', plMeaning: 'Skrót od „na przykład” – kończy się kropką, bo nie zawiera ostatniej litery skracanego słowa.', vnMeaning: 'Viết tắt từ "ví dụ" có dấu chấm ở đuôi (np.).', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 't_ep5_1', sliceLabel: '-BY Z CZASOWNIKIEM', color: '#ef4444', badge: 'TRYB', speakText: 'Zrobiłbym to!',
          options: [
            { textPl: 'Z formami osobowymi czasownika ZAWSZE łącznie: poszedłbym, wziąłbyś, otworzyłby', correct: true },
            { textPl: 'Zawsze piszemy osobno z myślnikiem w wypowiedziach pisemnych i ustnych w szkole', correct: false },
            { textPl: 'Tylko w liczbie mnogiej piszemy łącznie (np. jeden, dwa, dziesięć, sto punktów)', correct: false }
          ]
        },
        {
          id: 't_ep5_2', sliceLabel: '-BY PO INNYCH CZĘŚCIACH', color: '#3b82f6', badge: 'OSOBNO', speakText: 'Szybko by uciekł!',
          options: [
            { textPl: 'Po przysłówkach, rzeczownikach i zaimkach piszemy OSOBNO: szybko by, złodziej by, on by', correct: true },
            { textPl: 'Zawsze łącznie ze wszystkim podczas porannej zbiórki przed rozpoczęciem lekcji w klasie', correct: false },
            { textPl: 'Nigdy nie używamy cząstki by w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false }
          ]
        },
        {
          id: 't_ep5_3', sliceLabel: 'SKRÓTY Z KROPKĄ', color: '#f59e0b', badge: 'KROPKA', speakText: 'Np., m.in., prof. czy dr?',
          options: [
            { textPl: 'Kropkę stawiamy, gdy skrót NIE kończy się ostatnią literą słowa (np., prof.), brak kropki gdy się kończy (dr - doktor)', correct: true },
            { textPl: 'Zawsze i bezwzględnie stawiamy kropkę po każdym skrócie wyrazu, niezależnie od tego, jaką literą się kończy', correct: false },
            { textPl: 'Nigdy i w żadnym wypadku nie stawiamy kropki po skrótach wyrazów w oficjalnych pismach i podręcznikach szkolnych', correct: false }
          ]
        },
        {
          id: 't_ep5_4', sliceLabel: 'SKRÓTOWCE', color: '#10b981', badge: 'BEZ KROPEK', speakText: 'MEN, CKE, NBP!',
          options: [
            { textPl: 'Wielkie litery bez żadnych kropek w środku (np. CKE, a nie C.K.E.)', correct: true },
            { textPl: 'Kropka po każdej literze podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Piszemy zawsze małymi literami (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep5_5', sliceLabel: 'NIE Z IMIESŁOWEM', color: '#8b5cf6', badge: 'REGUŁA', speakText: 'Nieprzeczytana książka!',
          options: [
            { textPl: 'Od reformy 1997 r. z imiesłowami przymiotnikowymi piszemy ŁĄCZNIE: nieznany, nieotwarty', correct: true },
            { textPl: 'Zawsze osobno podczas przygotowań do trudnego sprawdzianu z polskiego przed lekcją', correct: false },
            { textPl: 'Tylko z dużej litery podczas przygotowań do trudnego sprawdzianu z polskiego po dzwonku', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 6 (Klasa 8: Pułapki Egzaminacyjne CKE)',
      chestWords: [
        { word: 'Wziąć', cleanWord: 'Wziąć', phonetic: '[Wziąć - nie „wziąść”!] • Lỗi phát âm phổ biến', plMeaning: 'Poprawna forma to WZIĄĆ (forma „wziąść” to rażący błąd językowy!).', vnMeaning: 'Hình thức đúng là WZIĄĆ, tuyệt đối không thêm đuôi -ść sai chính tả.', color: '#ef4444' },
        { word: 'Włączać', cleanWord: 'Włączać', phonetic: '[Włą-czać - nie „włanczać”!] • Lỗi chính tả', plMeaning: 'Piszemy i wymawiamy WŁĄCZAĆ przez ą, nigdy przez „an”.', vnMeaning: 'Viết và phát âm WŁĄCZAĆ có chữ ą, không nói ngọng thành an.', color: '#3b82f6' },
        { word: 'Odmiana nazwisk', cleanWord: 'Nazwiska', phonetic: '[Quy tắc biến cách họ tên]', plMeaning: 'W języku polskim nazwiska męskie odmieniamy przez przypadki (np. rozmawiam z panem Nowakiem).', vnMeaning: 'Trong tiếng Ba Lan, họ nam giới bắt buộc phải chia đuôi theo các cách.', color: '#f59e0b' },
        { word: 'Bynajmniej', cleanWord: 'Bynajmniej', phonetic: '[By-naj-mniej = Wcale nie!]', plMeaning: '„Bynajmniej” to zaprzeczenie (wcale nie!), nie myl z „przynajmniej” (chociaż)!', vnMeaning: 'Bynajmniej có nghĩa là "hoàn toàn không", không nhầm với przynajmniej.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 't_ep6_1', sliceLabel: 'WZIĄĆ CZY WZIĄŚĆ?', color: '#ef4444', badge: 'PUŁAPKA CKE', speakText: 'Nigdy wziąść!',
          options: [
            { textPl: 'Poprawna forma to wyłącznie WZIĄĆ (jak począć, spiąć)', correct: true },
            { textPl: 'Obie formy są w 100% poprawne i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Piszemy wziąść w stylu oficjalnym (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep6_2', sliceLabel: 'BYNAJMNIEJ', color: '#3b82f6', badge: 'ZNACZENIE', speakText: 'Wcale nie!',
          options: [
            { textPl: '„Bynajmniej nie miałem racji” = Wcale nie miałem racji (to wzmocnienie przeczenia)', correct: true },
            { textPl: 'To dokładnie to samo co przynajmniej i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Oznacza zgodę i potwierdzenie na początku i na końcu wypowiedzi pisemnej na lekcji', correct: false }
          ]
        },
        {
          id: 't_ep6_3', sliceLabel: 'ROK DWA TYSIĄCE...', color: '#f59e0b', badge: 'LICZEBNIKI', speakText: 'W roku dwa tysiące dwudziestym!',
          options: [
            { textPl: 'Odmieniamy tylko dwa ostatnie człony: w roku dwa tysiące dwudziestym szóstym', correct: true },
            { textPl: 'Mówimy: w dwutysięcznym dwudziestym szóstym roku i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Liczebników w dacie się nie odmienia (np. jeden, dwa, dziesięć, sto punktów)', correct: false }
          ]
        },
        {
          id: 't_ep6_4', sliceLabel: 'PO LEWEJ STRONIE', color: '#10b981', badge: 'BŁĄD', speakText: 'Po lewej stronie, nie po lewo!',
          options: [
            { textPl: 'Poprawne wyrażenie: po lewej stronie lub z lewej strony (nie: „po lewo”)', correct: true },
            { textPl: 'Mówi się „na lewo i na prawo” w pismach oficjalnych i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Każda forma ze słowem lewo jest zakazana (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 't_ep6_5', sliceLabel: 'AKAPIT NA EGZAMINIE', color: '#8b5cf6', badge: 'PUNKTY', speakText: 'Trójdzielna kompozycja!',
          options: [
            { textPl: 'Wstęp, rozwinięcie (min. 2 akapity) i zakończenie muszą mieć widoczne wcięcia akapitowe', correct: true },
            { textPl: 'Wystarczy jeden długi blok tekstu bez spacji podczas długiej przerwy obiadowej w szkole', correct: false },
            { textPl: 'Akapity są zakazane na egzaminie podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 7 (Lektury CKE I: Wina, Kara i Chciwość)',
      chestWords: [
        { word: 'Krwawa plama', cleanWord: 'Plama', phonetic: '[Dấu vết máu không thể rửa sạch]', plMeaning: 'Niezmywalne znamię na czole Balladyny po zamordowaniu siostry Aliny o dzban malin.', vnMeaning: 'Vết máu đỏ thắm trên trán Balladyna không thể gột rửa sau tội ác sát hại em.', color: '#ef4444' },
        { word: 'Kruki i wrony', cleanWord: 'Kruki i wrony', phonetic: '[Đàn quạ trừng phạt kẻ bạo tàn]', plMeaning: 'Żarłoczne ptactwo w „Dziadach cz. II” szarpiące Złego Pana za to, że odmówił chleba głodnym.', vnMeaning: 'Bầy chim quạ mổ xé hồn ma địa chủ tàn ác từng xua chó cắn người ăn xin.', color: '#3b82f6' },
        { word: 'Łańcuch Marleya', cleanWord: 'Łańcuch', phonetic: '[Sợi xích đúc bằng lòng tham lam]', plMeaning: 'Ciężki łańcuch ze skarbonek i kłódek wykuty z chciwości za życia w „Opowieści wigilijnej”.', vnMeaning: 'Sợi xích sắt nặng trĩu đúc bằng những két sắt và khoá tiền của lòng tham.', color: '#f59e0b' },
        { word: 'Sprawiedliwość', cleanWord: 'Sprawiedliwość', phonetic: '[Công lý và luật nhân quả]', plMeaning: 'Motyw uniwersalny: zło zawsze spotyka zasłużona kara, a dobro zostaje nagrodzone.', vnMeaning: 'Chủ đề công lý: Ác giả ác báo, không tội ác nào có thể che giấu mãi mãi.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 't_ep7_1', sliceLabel: 'BALLADYNA', color: '#ef4444', badge: 'ZBRODNIA', speakText: 'Zabiła siostrę o maliny!',
          options: [
            { textPl: 'Balladyna zamordowała Alinę w lesie, aby poślubić hrabiego Kirkora i zdobyć koronę', correct: true },
            { textPl: 'Oddała maliny siostrze i wróciła do chaty podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Zgubiła dzbanek w strumieniu podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false }
          ]
        },
        {
          id: 't_ep7_2', sliceLabel: 'ZŁY PAN', color: '#3b82f6', badge: 'DZIADY', speakText: 'Kto nie był człowiekiem...',
          options: [
            { textPl: '„Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże” – brak litości za życia', correct: true },
            { textPl: 'Zły Pan został uniewinniony przez Guślarza i wracasz prosto do domu po lekcjach po dzwonku', correct: false },
            { textPl: 'Prosił o złoto i klejnoty podczas przygotowań do trudnego sprawdzianu z polskiego w klasie', correct: false }
          ]
        },
        {
          id: 't_ep7_3', sliceLabel: 'SCROOGE', color: '#f59e0b', badge: 'CHCIWOŚĆ', speakText: 'Brednie! Świąt nie ma!',
          options: [
            { textPl: 'Dla złota zapomniał o miłości i samotnie spędzał wigilijne wieczory w chłodnym kantorze', correct: true },
            { textPl: 'Rozdawał prezenty wszystkim mieszkańcom Londynu podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Był wesołym gospodarzem wielkiego balu i wracasz prosto do domu po lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 't_ep7_4', sliceLabel: 'PRZEMIANA', color: '#10b981', badge: 'METAMORFOZA', speakText: 'Nigdy nie jest za późno!',
          options: [
            { textPl: 'Po wizycie Trzech Duchów Scrooge staje się drugim ojcem dla Małego Tima i dobrym pracodawcą', correct: true },
            { textPl: 'Uciekł z Londynu ze swoim złotem w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false },
            { textPl: 'Zamknął kantor i nikogo nie wpuszczał podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false }
          ]
        },
        {
          id: 't_ep7_5', sliceLabel: 'PIORUN', color: '#8b5cf6', badge: 'KARA', speakText: 'Sąd nad samą sobą!',
          options: [
            { textPl: 'Gdy Balladyna trzykrotnie wydała wyrok śmierci na zbrodniarza, uderzył w nią piorun niebios', correct: true },
            { textPl: 'Uciekła do innego kraju i rządziła dalej podczas porannej zbiórki przed rozpoczęciem lekcji', correct: false },
            { textPl: 'Wszystko okazało się tylko snem Aliny podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Złodzieja – Epizod 8 (Formy Wypowiedzi II: Dynamiczne Opowiadanie Twórcze)',
      chestWords: [
        { word: 'Zawiązanie akcji', cleanWord: 'Początek', phonetic: '[Mở đầu câu chuyện]', plMeaning: 'Złodziej odkrywa starożytną mapę ukrytą za portretem Dyrektora w gabinecie.', vnMeaning: 'Sự việc mở đầu: Phát hiện tấm bản đồ cổ giấu sau bức tranh.', color: '#3b82f6' },
        { word: 'Zwrot akcji', cleanWord: 'Zwrot', phonetic: '[Bước ngoặt bất ngờ đảo lộn]', plMeaning: 'Niespodziewany obrót spraw – w skarbcu zamiast złota leży polski słownik!', vnMeaning: 'Bước ngoặt bất ngờ: Trong rương kho báu không có vàng mà là cuốn từ điển.', color: '#ef4444' },
        { word: 'Dialog z myślnikiem', cleanWord: 'Dialog', phonetic: '[Hội thoại dùng dấu gạch ngang]', plMeaning: 'Każda kwestia dialogowa zaczyna się od nowej linii z pauzą myślnika (— Stój! — zawołał).', vnMeaning: 'Mỗi lời thoại bắt đầu bằng một dòng mới có dấu gạch ngang chuẩn mực.', color: '#10b981' },
        { word: 'Błyskotliwa puenta', cleanWord: 'Puenta', phonetic: '[Cái kết sâu sắc đầy ý nghĩa]', plMeaning: 'Złodziej oddaje skradzione słowa i sam zostaje mistrzem ortografii!', vnMeaning: 'Kết thúc bất ngờ: Trả lại mọi thứ và trở thành thủ khoa tiếng Ba Lan.', color: '#f59e0b' }
      ],
      catScenarios: [
        {
          id: 't_ep8_1', sliceLabel: 'ELEMENTY OPOWIADANIA', color: '#3b82f6', badge: 'STRUKTURA', speakText: 'Fabuła krok po kroku!',
          options: [
            { textPl: 'Wstęp (miejsce i czas), zawiązanie akcji, rozwinięcie z punktem kulminacyjnym i puenta', correct: true },
            { textPl: 'Tylko definicje słownikowe bez żadnych postaci podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Wyliczenie samych dat w tabelce podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        },
        {
          id: 't_ep8_2', sliceLabel: 'ZAPIS DIALOGU', color: '#10b981', badge: 'INTERPUNKCJA', speakText: '— Stój! — rzekł strażnik.',
          options: [
            { textPl: 'Pauza myślnika na początku linii, spacja, wypowiedź i myślnik przed słowami narratora', correct: true },
            { textPl: 'Wszystkie dialogi piszemy w nawiasach kwadratowych (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Nie używamy żadnych znaków przestankowych w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        },
        {
          id: 't_ep8_3', sliceLabel: 'CZASOWNIKI DYNAMICZNE', color: '#ef4444', badge: 'TEMPO', speakText: 'Skoczył, przemknął, zniknął!',
          options: [
            { textPl: 'Używaj czasowników akcji w czasie przeszłym, by nadać scenie ucieczki szybkie tempo', correct: true },
            { textPl: 'Używaj wyłącznie słów „być” i „mieć” i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Pisz same przymiotniki bez orzeczeń (np. szybki, zwinny, waleczny rycerz) na lekcji', correct: false }
          ]
        },
        {
          id: 't_ep8_4', sliceLabel: 'PRZEŻYCIA WEWNĘTRZNE', color: '#f59e0b', badge: 'EMOCJE', speakText: 'Serce biło mu jak młot!',
          options: [
            { textPl: 'Opisuj emocje bohaterów: lęk, ulgę, zaskoczenie, dumę i determinację', correct: true },
            { textPl: 'Zabronione jest wspominanie o uczuciach i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Pisz tylko o kolorze podłogi w korytarzu i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 't_ep8_5', sliceLabel: 'MORAŁ ZŁODZIEJA', color: '#8b5cf6', badge: 'MĄDROŚĆ', speakText: 'Wiedza to jedyny skarb!',
          options: [
            { textPl: 'Prawdziwego bogactwa języka nikt ci nie ukradnie – raz zdobyte zostaje na zawsze', correct: true },
            { textPl: 'Złoto jest ważniejsze niż szkoła i wracasz prosto do domu po lekcjach po dzwonku', correct: false },
            { textPl: 'Nie warto czytać książek podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false }
          ]
        }
      ]
    }
  },

  // ──────────────────────────── JESTER (Błazen) ────────────────────────────
  // Praktyczny język polski w szkole i w życiu codziennym + fundament pod egzamin ósmoklasisty
  jester: {
    1: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 1 (Szkolne Rozmowy i Zwroty z Życia)',
      chestWords: [
        { word: 'Jasne!', cleanWord: 'Jasne', phonetic: '[Jas-ne] • Rõ ràng / Dĩ nhiên rồi', plMeaning: 'Naturalne potwierdzenie koleżeńskie: „Jasne, pomogę ci!”, „Jasne, idziemy razem!”.', vnMeaning: 'Dĩ nhiên / Chắc chắn rồi — Cách đồng ý tự nhiên nhất giữa bạn bè ở trường.', color: '#3b82f6' },
        { word: 'Spoko!', cleanWord: 'Spoko', phonetic: '[Spo-ko] • Không sao / Ổn cả', plMeaning: 'Uspokojenie i luz w rozmowie: „Spoko, nie ma problemu!”, „Wszystko spoko!”.', vnMeaning: 'Không sao cả / Ổn mà — Dùng khi làm dịu tình huống hoặc đồng ý thân mật.', color: '#10b981' },
        { word: 'Świetnie!', cleanWord: 'Świetnie', phonetic: '[Świet-nie] • Tuyệt vời / Rất tốt', plMeaning: 'Entuzjastyczna pochwała i aprobata: „Świetnie ci poszło!”, „Świetny pomysł!”.', vnMeaning: 'Tuyệt vời / Rất tốt — Khen ngợi bạn bè hoặc phản hồi tích cực.', color: '#f59e0b' },
        { word: 'Przerwa!', cleanWord: 'Przerwa', phonetic: '[Przer-wa] • Giờ ra chơi / Nghỉ giải lao', plMeaning: 'Czas odpoczynku po 45 minutach lekcji: „Chodź na korytarz, zaczęła się przerwa!”.', vnMeaning: 'Giờ ra chơi — Thời gian giải lao quý báu sau tiết học căng thẳng.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep1_1', sliceLabel: 'JASNE!', color: '#3b82f6', badge: 'ZGODA', speakText: 'Jasne, pomogę ci!',
          options: [
            { textPl: 'Kolega pyta: „Pożyczysz mi długopis?”. Odpowiadasz: „Jasne, trzymaj!”', correct: true },
            { textPl: 'Mówisz tak, gdy kładziesz się spać w nocy i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Gdy prosisz lekarza o zwolnienie z wuefu i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep1_2', sliceLabel: 'SPOKO!', color: '#10b981', badge: 'LIZ / SPOKÓJ', speakText: 'Spoko, nic się nie stało!',
          options: [
            { textPl: 'Ktoś potrącił cię na korytarzu i przeprasza. Odpowiadasz: „Spoko, nic się nie stało!”', correct: true },
            { textPl: 'Krzyczysz tak do dyrektora na apelu i wracasz prosto do domu po lekcjach przed lekcją', correct: false },
            { textPl: 'Wpisujesz to słowo jako wzór matematyczny w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        },
        {
          id: 'j_ep1_3', sliceLabel: 'ŚWIETNIE!', color: '#f59e0b', badge: 'POCHWAŁA', speakText: 'Świetnie ci poszło!',
          options: [
            { textPl: 'Koleżanka dostała piątkę ze sprawdzianu. Mówisz: „Świetnie, gratulacje!”', correct: true },
            { textPl: 'Gdy ktoś zgubił klucze do szatni podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Gdy skończył ci się tusz w długopisie (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'j_ep1_4', sliceLabel: 'PRZERWA!', color: '#ec4899', badge: 'SZKOŁA', speakText: 'Wreszcie długa przerwa!',
          options: [
            { textPl: 'Zadzwonił dzwonek. Mówisz do znajomych: „Wreszcie przerwa, chodźmy coś zjeść!”', correct: true },
            { textPl: 'Zaczynasz pisać egzamin z polskiego podczas długiej przerwy obiadowej w szkole', correct: false },
            { textPl: 'Mówisz tak, gdy odpowiadasz przy tablicy (np. szybki, zwinny, waleczny rycerz)', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 2 (Klasa 4: Życie Lekcyjne i Pytania)',
      chestWords: [
        { word: 'Zadanie', cleanWord: 'Zadanie', phonetic: '[Za-da-nie] • Bài tập / Nhiệm vụ', plMeaning: 'Ćwiczenie do zrobienia na lekcji lub w domu: „Na której stronie mamy zadanie?”.', vnMeaning: 'Bài tập / Nhiệm vụ học tập — Việc cần hoàn thành trong tiết học.', color: '#3b82f6' },
        { word: 'Odpowiedź', cleanWord: 'Odpowiedź', phonetic: '[Od-po-wiedź] • Câu trả lời', plMeaning: 'Rozwiązanie zagadnienia: „Znam poprawną odpowiedź na to pytanie!”.', vnMeaning: 'Câu trả lời — Lời giải đáp chính xác cho câu hỏi của thầy cô.', color: '#10b981' },
        { word: 'Rozumieć', cleanWord: 'Rozumieć', phonetic: '[Ro-zu-mieć] • Hiểu bài', plMeaning: 'Pojmować sens reguły lub polecenia: „Czy wszyscy rozumieją to ćwiczenie?”.', vnMeaning: 'Hiểu rõ — Nắm bắt được ý nghĩa bài giảng hoặc hướng dẫn của đề.', color: '#f59e0b' },
        { word: 'Uważny', cleanWord: 'Uważny', phonetic: '[U-waż-ny] • Tập trung / Chú ý', plMeaning: 'Skupiony na lekcji: „Bądź uważny, gdy nauczyciel podaje terminy klasówek!”.', vnMeaning: 'Chăm chú / Cẩn thận — Tập trung lắng nghe để không bỏ lỡ kiến thức.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep2_1', sliceLabel: 'ZADANIE', color: '#3b82f6', badge: 'ĆWICZENIE', speakText: 'Zróbmy to zadanie!',
          options: [
            { textPl: 'Nauczyciel podaje numer strony. Pytasz kolegę: „Które zadanie teraz robimy w zeszycie?”', correct: true },
            { textPl: 'Płacisz za bilet u kierowcy autobusu podczas porannej zbiórki przed rozpoczęciem lekcji', correct: false },
            { textPl: 'Wybierasz buty na w-f w skupieniu, ciszy i pełnym zaangażowaniu na zajęciach po dzwonku', correct: false }
          ]
        },
        {
          id: 'j_ep2_2', sliceLabel: 'ODPOWIEDŹ', color: '#10b981', badge: 'ROZWIĄZANIE', speakText: 'Znam poprawną odpowiedź!',
          options: [
            { textPl: 'Pani pyta o definicję czasownika. Podnosisz rękę: „Znam odpowiedź!”', correct: true },
            { textPl: 'Wychodzisz ze szkoły bez słowa i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Szukasz zgubionego worka na buty i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep2_3', sliceLabel: 'ROZUMIEĆ', color: '#f59e0b', badge: 'ZROZUMIENIE', speakText: 'Czy wszystko rozumiesz?',
          options: [
            { textPl: 'Gdy zasada jest trudna, mówisz: „Przepraszam, czy może pani powtórzyć? Nie do końca rozumiem”', correct: true },
            { textPl: 'Ignorujesz nauczyciela i udajesz, że nic nie słyszysz podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Krzyczysz, że lekcja jest skończona w czytelni biblioteki po skończonych lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 'j_ep2_4', sliceLabel: 'UWAŻNY', color: '#ec4899', badge: 'SKUPIENIE', speakText: 'Uważnie słuchaj wskazówek!',
          options: [
            { textPl: 'Uważny uczeń słucha wskazówek do sprawdzianu i dzięki temu dostaje dobrą ocenę', correct: true },
            { textPl: 'Uważny uczeń gra w gry pod ławką i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Uważny uczeń zapomina zeszytu na każdą lekcję i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 3 (Klasa 5: Fakty, Opinie i Własne Zdanie)',
      chestWords: [
        { word: 'Prawda', cleanWord: 'Prawda', phonetic: '[Praw-da] • Sự thật khách quan', plMeaning: 'Fakt potwierdzony i obiektywny: „To prawda, że Ziemia krąży wokół Słońca”.', vnMeaning: 'Sự thật — Điều có thật và chứng minh được một cách rõ ràng.', color: '#3b82f6' },
        { word: 'Moim zdaniem', cleanWord: 'Moim zdaniem', phonetic: '[Mo-im zda-niem] • Theo tôi', plMeaning: 'Kulturalne rozpoczęcie własnej oceny: „Moim zdaniem ta lektura jest bardzo ciekawa”.', vnMeaning: 'Theo ý kiến tôi — Mở đầu lịch sự khi nêu quan điểm cá nhân.', color: '#10b981' },
        { word: 'Na pewno', cleanWord: 'Na pewno', phonetic: '[Na pew-no] • Chắc chắn', plMeaning: 'Wyrażenie 100% pewności: „Na pewno zdążymy powtórzyć słówka przed dzwonkiem”.', vnMeaning: 'Chắc chắn — Khẳng định sự tin tưởng vững chắc vào điều gì.', color: '#f59e0b' },
        { word: 'Chyba', cleanWord: 'Chyba', phonetic: '[Chy-ba] • Có lẽ / Hình như', plMeaning: 'Przypuszczenie i domysł w mowie: „Chyba zostawiłem linijkę w klasie”.', vnMeaning: 'Có lẽ / Hình như — Dự đoán nhẹ nhàng khi chưa biết chắc 100%.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep3_1', sliceLabel: 'FAKT CZY OPINIA', color: '#3b82f6', badge: 'PRAWDA', speakText: 'Fakt to sprawdzalna prawda!',
          options: [
            { textPl: 'Zdanie: „Lekcja w polskiej szkole trwa 45 minut” to bezsporny FAKT', correct: true },
            { textPl: 'Zdanie: „Język polski to najłatwiejszy język świata” to fakt', correct: false },
            { textPl: 'Fakt i opinia to dokładnie to samo pojęcie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep3_2', sliceLabel: 'MOIM ZDANIEM', color: '#10b981', badge: 'OPINIA', speakText: 'Moim zdaniem warto czytać!',
          options: [
            { textPl: 'Gdy oceniasz film lub książkę, zaczynasz kulturalnie: „Moim zdaniem ta część była lepsza”', correct: true },
            { textPl: 'Mówisz: „Moim zdaniem 2 + 2 = 4” w czytelni biblioteki po skończonych lekcjach po dzwonku', correct: false },
            { textPl: 'Krzyczysz: „Moje zdanie to jedyna prawda, a wy się mylicie!” i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep3_3', sliceLabel: 'NA PEWNO', color: '#f59e0b', badge: 'PEWNOŚĆ', speakText: 'Na pewno to wiem!',
          options: [
            { textPl: 'Sprawdziłeś plan w dzienniku. Mówisz koledze: „Na pewno mamy jutro sprawdzian z historii”', correct: true },
            { textPl: 'Zgadujesz wynik meczu z zamkniętymi oczami i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Mówisz tak, gdy w ogóle nic nie wiesz podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        },
        {
          id: 'j_ep3_4', sliceLabel: 'CHYBA', color: '#ec4899', badge: 'DOMYSŁ', speakText: 'Chyba mam rację!',
          options: [
            { textPl: 'Szukasz piórnika w plecaku: „Chyba zostawiłem go na ławce w sali numer 12”', correct: true },
            { textPl: 'Podpisujesz oficjalny dokument u dyrektora i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wymieniasz datę swoich urodzin w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 4 (Klasa 6: Zwroty Grzecznościowe i Etykieta)',
      chestWords: [
        { word: 'Dzień dobry!', cleanWord: 'Dzień dobry', phonetic: '[Dzień do-bry] • Chào thầy cô / Chào buổi sáng', plMeaning: 'Podstawowe powitanie dorosłych w szkole: „Dzień dobry pani profesor!”.', vnMeaning: 'Lời chào trang trọng — Dành cho thầy cô, người lớn tuổi và nơi công cộng.', color: '#3b82f6' },
        { word: 'Przepraszam!', cleanWord: 'Przepraszam', phonetic: '[Prze-pra-szam] • Xin lỗi / Xin phép', plMeaning: 'Gdy chcesz o coś zapytać lub gdy popełnisz błąd: „Przepraszam, która godzina?”.', vnMeaning: 'Xin lỗi / Xin phép — Mở lời hỏi thăm lịch sự hoặc khi lỡ làm phiền ai.', color: '#10b981' },
        { word: 'Poproszę', cleanWord: 'Poproszę', phonetic: '[Po-pro-szę] • Làm ơn cho em xin', plMeaning: 'Kulturalna prośba w sklepiku lub bibliotece: „Dzień dobry, poproszę tę książkę”.', vnMeaning: 'Làm ơn cho tôi xin — Cụm từ lịch thiệp khi mua đồ hoặc mượn sách.', color: '#f59e0b' },
        { word: 'Dziękuję', cleanWord: 'Dziękuję', phonetic: '[Dzię-ku-ję] • Cảm ơn', plMeaning: 'Magiczne słowo wdzięczności: „Dziękuję za pomoc w rozwiązaniu zadania!”.', vnMeaning: 'Cảm ơn — Thể hiện lòng biết ơn chân thành khi nhận được sự giúp đỡ.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep4_1', sliceLabel: 'POWITANIE', color: '#3b82f6', badge: 'KULTURA', speakText: 'Dzień dobry pani profesor!',
          options: [
            { textPl: 'Wchodzisz rano do sali i widzisz nauczyciela. Mówisz głośno i wyraźnie: „Dzień dobry!”', correct: true },
            { textPl: 'Mówisz do nauczyciela: „Siema ziom, co tam nowego?” i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przechodzisz obok w milczeniu ze wzrokiem w podłogę i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep4_2', sliceLabel: 'PRZEPRASZAM', color: '#10b981', badge: 'UPRZEJMOŚĆ', speakText: 'Przepraszam, czy mogę zapytać?',
          options: [
            { textPl: 'Szukasz biblioteki i pytasz na korytarzu: „Przepraszam, czy może mi pan wskazać drogę?”', correct: true },
            { textPl: 'Krzyczysz przez korytarz: „Hej ty, gdzie ta biblioteka!” i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Mówisz tak tylko wtedy, gdy ktoś cię o to poprosi i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep4_3', sliceLabel: 'POPROSZĘ', color: '#f59e0b', badge: 'ZAMÓWIENIE', speakText: 'Poproszę bułkę i sok!',
          options: [
            { textPl: 'Kupujesz drugie śniadanie w sklepiku: „Dzień dobry, poproszę bułkę i wodę”', correct: true },
            { textPl: 'Rzucasz monetami o blat i mówisz: „Dawaj jedzenie!” i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Czekasz w milczeniu aż pani sama zgadnie, co chcesz i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep4_4', sliceLabel: 'DZIĘKUJĘ', color: '#ec4899', badge: 'WDZIĘCZNOŚĆ', speakText: 'Dziękuję za pomoc!',
          options: [
            { textPl: 'Kolega wytłumaczył ci trudny temat przed kartkówką. Mówisz szczerze: „Dziękuję bardzo!”', correct: true },
            { textPl: 'Mówisz: „No wreszcie, ile można czekać?” i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Zabierasz notatki i uciekasz bez słowa i wracasz prosto do domu po lekcjach na przerwie', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 5 (Klasa 7: Rozmowa, Dyskusja i Argumentacja)',
      chestWords: [
        { word: 'Ponieważ', cleanWord: 'Ponieważ', phonetic: '[Po-nie-waż] • Bởi vì / Do đó', plMeaning: 'Spójnik przyczyny – wyjaśnia powód: „Uważam tak, ponieważ przeczytałem badania”.', vnMeaning: 'Bởi vì — Từ nối quan trọng nhất để giải thích nguyên nhân và đưa ra lý lẽ.', color: '#3b82f6' },
        { word: 'Zgadzam się', cleanWord: 'Zgadzam się', phonetic: '[Zga-dzam się] • Tôi đồng ý', plMeaning: 'Potwierdzenie zdania rozmówcy: „Zgadzam się z tobą, to najlepsze rozwiązanie”.', vnMeaning: 'Tôi đồng ý — Bày tỏ sự nhất trí văn minh trong thảo luận nhóm.', color: '#10b981' },
        { word: 'Masz rację', cleanWord: 'Masz rację', phonetic: '[Masz ra-cję] • Bạn nói đúng', plMeaning: 'Uznanie trafności czyichś słów: „Masz rację, ten sposób jest szybszy i bezpieczniejszy”.', vnMeaning: 'Bạn có lý / Bạn đúng — Công nhận lý lẽ đúng đắn của người đối thoại.', color: '#f59e0b' },
        { word: 'Dlaczego?', cleanWord: 'Dlaczego', phonetic: '[Dla-cze-go] • Tại sao?', plMeaning: 'Pytanie o przyczynę i sens: „Dlaczego bohater podjął taką decyzję?”.', vnMeaning: 'Tại sao? — Câu hỏi gợi mở tư duy phản biện và tìm hiểu gốc rễ vấn đề.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep5_1', sliceLabel: 'PONIEWAŻ', color: '#3b82f6', badge: 'ARGUMENT', speakText: 'Uzasadnij swoje zdanie!',
          options: [
            { textPl: 'Wypowiedź z argumentem: „Warto uprawiać sport, ponieważ poprawia on zdrowie i samopoczucie”', correct: true },
            { textPl: 'Mówisz: „Warto uprawiać sport, bo tak i już!” i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Przed słowem «ponieważ» nigdy nie stawia się przecinka i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep5_2', sliceLabel: 'ZGADZAM SIĘ', color: '#10b981', badge: 'POROZUMIENIE', speakText: 'Zgadzam się z tobą!',
          options: [
            { textPl: 'W pracy grupowej kolega proponuje dobry podział zadań. Mówisz: „Świetnie, zgadzam się z tobą”', correct: true },
            { textPl: 'Obrażasz się i odmawiasz współpracy z grupą i wracasz prosto do domu po lekcjach przed lekcją', correct: false },
            { textPl: 'Mówisz, że tylko twoje pomysły mają sens w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false }
          ]
        },
        {
          id: 'j_ep5_3', sliceLabel: 'MASZ RACJĘ', color: '#f59e0b', badge: 'SZACUNEK', speakText: 'Masz pełną rację!',
          options: [
            { textPl: 'Ktoś zauważył błąd w twoich obliczeniach. Reagujesz z klasą: „Faktycznie, masz rację, poprawiam!”', correct: true },
            { textPl: 'Krzyczysz, że to niemożliwe i chowasz kartkę w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false },
            { textPl: 'Mówisz, że błąd zrobił ktoś inny podczas przygotowań do trudnego sprawdzianu z polskiego w klasie', correct: false }
          ]
        },
        {
          id: 'j_ep5_4', sliceLabel: 'DLACZEGO', color: '#ec4899', badge: 'PYTANIE', speakText: 'Dlaczego tak uważasz?',
          options: [
            { textPl: 'Dociekliwe pytanie na lekcji: „Dlaczego Jacek Soplica postanowił ukrywać swoje nazwisko?”', correct: true },
            { textPl: 'Pytasz kolegę: „Dlaczego masz buty na nogach?” podczas długiej przerwy obiadowej w szkole', correct: false },
            { textPl: 'Pytasz: „Dlaczego lekcja trwa tak krótko?” i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 6 (Klasa 8: Polecenia Egzaminacyjne CKE)',
      chestWords: [
        { word: 'Polecenie', cleanWord: 'Polecenie', phonetic: '[Po-le-ce-nie] • Yêu cầu đề bài', plMeaning: 'Zadanie w teście: „Przeczytaj uważnie polecenie przed udzieleniem odpowiedzi!”.', vnMeaning: 'Yêu cầu đề bài — Hướng dẫn quan trọng nhất cần đọc kỹ trước khi làm bài.', color: '#3b82f6' },
        { word: 'Wyjaśnij', cleanWord: 'Wyjaśnij', phonetic: '[Wy-jaś-nij] • Hãy giải thích', plMeaning: 'Czasownik z arkusza CKE: „Wyjaśnij, dlaczego autor użył takiego sformułowania”.', vnMeaning: 'Hãy giải thích — Yêu cầu dùng từ ngữ của mình để làm sáng tỏ ý nghĩa.', color: '#10b981' },
        { word: 'Przykład', cleanWord: 'Przykład', phonetic: '[Przy-kład] • Ví dụ minh hoạ', plMeaning: 'Dowód popierający tezę: „Podaj przykład zachowania bohatera z lektury obowiązkowej”.', vnMeaning: 'Ví dụ chứng minh — Dẫn chứng thực tế hoặc từ tác phẩm để bảo vệ luận điểm.', color: '#f59e0b' },
        { word: 'Podsumowanie', cleanWord: 'Podsumowanie', phonetic: '[Pod-su-mo-wa-nie] • Tổng kết / Tóm tắt', plMeaning: 'Krótki wniosek na koniec tekstu: „W podsumowaniu zbierz najważniejsze myśli”.', vnMeaning: 'Tổng kết / Kết luận — Phần chốt lại ý nghĩa toàn bộ bài viết ở đoạn cuối.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep6_1', sliceLabel: 'POLECENIE CKE', color: '#3b82f6', badge: 'CZYTANIE', speakText: 'Przeczytaj dokładnie polecenie!',
          options: [
            { textPl: 'Przed napisaniem odpowiedzi sprawdzasz, czy pytają o formę, przyczynę czy cechę bohatera', correct: true },
            { textPl: 'Zaznaczasz losową odpowiedź bez czytania tekstu podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Liczysz ile kropek jest na stronie testu i wracasz prosto do domu po lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'j_ep6_2', sliceLabel: 'WYJAŚNIJ', color: '#10b981', badge: 'UZASADNIENIE', speakText: 'Wyjaśnij swoimi słowami!',
          options: [
            { textPl: 'Wytłumacz własnymi słowami sens wydarzenia i powiąż je z postępowaniem bohatera', correct: true },
            { textPl: 'Przepisz całą stronę lektury bez żadnego komentarza i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Napisz jedno słowo: «tak» albo «nie» na początku i na końcu wypowiedzi pisemnej', correct: false }
          ]
        },
        {
          id: 'j_ep6_3', sliceLabel: 'PRZYKŁAD', color: '#f59e0b', badge: 'DOWÓD', speakText: 'Podaj konkretny przykład!',
          options: [
            { textPl: 'Powołaj się na konkretną scenę, np. na to, jak Rudy nie wydał przyjaciół podczas przesłuchania', correct: true },
            { textPl: 'Napisz ogólnie: „wszyscy w książce byli mili” i wracasz prosto do domu po lekcjach na przerwie', correct: false },
            { textPl: 'Podaj przykład z gry komputerowej zamiast z lektury podczas długiej przerwy obiadowej w szkole', correct: false }
          ]
        },
        {
          id: 'j_ep6_4', sliceLabel: 'PODSUMOWANIE', color: '#ec4899', badge: 'WNIOSKI', speakText: 'Zbierz ostateczne wnioski!',
          options: [
            { textPl: 'W ostatnim akapicie potwierdź słuszność tezy i krótko zbierz omówione argumenty', correct: true },
            { textPl: 'W podsumowaniu zacznij opowiadać zupełnie nową historię i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zostaw puste miejsce na końcu wypracowania i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 7 (Lektury CKE i Wartości Życiowe)',
      chestWords: [
        { word: 'Przyjaźń', cleanWord: 'Przyjaźń', phonetic: '[Przy-jaźń] • Tình bạn chân thành', plMeaning: 'Więź oparta na zaufaniu i lojalności (np. Mały Książę i Lis, Alek, Rudy i Zośka).', vnMeaning: 'Tình bạn chân chính — Sự thấu hiểu, gắn bó và cùng nhau vượt qua khó khăn.', color: '#3b82f6' },
        { word: 'Szacunek', cleanWord: 'Szacunek', phonetic: '[Sza-cu-nek] • Sự tôn trọng', plMeaning: 'Uznanie godności każdego człowieka: „Szacunek należy się kolegom i nauczycielom”.', vnMeaning: 'Sự tôn trọng — Phẩm chất cốt lõi đối với thầy cô, bạn bè và mọi người.', color: '#10b981' },
        { word: 'Wybór', cleanWord: 'Wybór', phonetic: '[Wy-bór] • Sự lựa chọn', plMeaning: 'Decyzja moralna i jej skutki: „Każdy bohater lektur staje przed trudnym wyborem”.', vnMeaning: 'Sự lựa chọn — Quyết định mang tính đạo đức và tinh thần trách nhiệm.', color: '#f59e0b' },
        { word: 'Pomoc', cleanWord: 'Pomoc', phonetic: '[Po-moc] • Giúp đỡ / Tương trợ', plMeaning: 'Wsparcie drugiego człowieka w kłopocie: „Nawet mały gest pomocy ma ogromne znaczenie”.', vnMeaning: 'Giúp đỡ — Hành động sẻ chia, hỗ trợ những người xung quanh khi cần.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep7_1', sliceLabel: 'PRZYJAŹŃ', color: '#3b82f6', badge: 'MAŁY KSIĄŻĘ', speakText: 'Najważniejsze jest niewidoczne dla oczu!',
          options: [
            { textPl: 'Lis tłumaczy Małemu Księciu, że prawdziwa przyjaźń wymaga czasu, troski i odpowiedzialności', correct: true },
            { textPl: 'Lis mówi, że najlepiej jest żyć samemu i nie ufać nikomu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Mały Książę kupuje przyjaźń za złote monety i wracasz prosto do domu po lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'j_ep7_2', sliceLabel: 'SZACUNEK', color: '#10b981', badge: 'RELACJE', speakText: 'Szanuj każdego człowieka!',
          options: [
            { textPl: 'W codziennym życiu szkolnym szanujemy innych: słuchamy ich zdania i nie wyśmiewamy błędów', correct: true },
            { textPl: 'Szanujemy tylko tych, którzy dają nam spisać pracę domową i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Szacunek oznacza, że nie wolno zadawać pytań na lekcji (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'j_ep7_3', sliceLabel: 'WYBÓR', color: '#f59e0b', badge: 'BALLADYNA', speakText: 'Zły wybór niesie konsekwencje!',
          options: [
            { textPl: 'Balladyna wybrała zbrodnię i kłamstwo dla korony, co doprowadziło ją do sprawiedliwej kary', correct: true },
            { textPl: 'Balladyna wybrała uczciwą pracę i została nagrodzona przez los i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wybór Balladyny nie miał żadnego wpływu na jej losy i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'j_ep7_4', sliceLabel: 'POMOC', color: '#ec4899', badge: 'SCROOGE', speakText: 'Nigdy nie jest za późno na dobro!',
          options: [
            { textPl: 'Scrooge po wizycie duchów zrozumiał swój błąd, pomógł rodzinie Cratchitów i zmienił życie', correct: true },
            { textPl: 'Scrooge zamknął kantor na kłódkę i uciekł z Londynu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Scrooge uznał, że pomoc innym to strata czasu i pieniędzy i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Błazna – Epizod 8 (Finał: Płynna Wypowiedź i Sukces Egzaminacyjny)',
      chestWords: [
        { word: 'Warto pamiętać', cleanWord: 'Warto pamiętać', phonetic: '[War-to pa-mię-tać] • Cần ghi nhớ rằng', plMeaning: 'Elegancki zwrot łączący myśli: „Warto pamiętać o motywacji bohaterów lektur”.', vnMeaning: 'Cần ghi nhớ rằng — Cụm từ chuyển ý mượt mà và sâu sắc trong văn nghị luận.', color: '#3b82f6' },
        { word: 'Po pierwsze', cleanWord: 'Po pierwsze', phonetic: '[Po pierw-sze] • Trước hết / Thứ nhất là', plMeaning: 'Porządkowanie wywodu: „Po pierwsze, przyjaźń daje człowiekowi siłę w trudnych chwilach”.', vnMeaning: 'Trước hết / Thứ nhất là — Cách sắp xếp các luận điểm theo trật tự logic chặt chẽ.', color: '#10b981' },
        { word: 'W rezultacie', cleanWord: 'W rezultacie', phonetic: '[W re-zul-ta-cie] • Kết quả là / Do đó', plMeaning: 'Wskazanie logicznego skutku: „W rezultacie bohater zrozumiał wagę swoich czynów”.', vnMeaning: 'Kết quả là / Do đó — Diễn tả mối quan hệ nhân quả và kết quả của sự việc.', color: '#f59e0b' },
        { word: 'Sukces!', cleanWord: 'Sukces', phonetic: '[Suk-ces] • Thành công!', plMeaning: 'Osiągnięcie celu i nagroda za naukę: „Udało się! Zdałeś egzamin i płynnie mówisz po polsku!”.', vnMeaning: 'Thành công! — Niềm vui chinh phục kỳ thi và tự tin làm chủ tiếng Ba Lan.', color: '#ec4899' }
      ],
      catScenarios: [
        {
          id: 'j_ep8_1', sliceLabel: 'STRUKTURA', color: '#3b82f6', badge: 'PO PIERWSZE', speakText: 'Uporządkuj swoje myśli!',
          options: [
            { textPl: 'W rozprawce wprowadzasz argumenty logicznie: «Po pierwsze...», «Kolejnym dowodem jest...»', correct: true },
            { textPl: 'Wrzucasz wszystkie myśli naraz w jednym zdaniu bez żadnych znaków przestankowych i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zaczynasz wypracowanie od słowa «Koniec» i wracasz prosto do domu po lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 'j_ep8_2', sliceLabel: 'REZULTAT', color: '#10b981', badge: 'SKUTEK', speakText: 'W rezultacie osiągasz cel!',
          options: [
            { textPl: 'Zwrotu «W rezultacie» używamy, aby pokazać logiczny skutek wcześniejszych działań bohatera', correct: true },
            { textPl: 'Używamy go zamiast «Dzień dobry» przy powitaniu podczas długiej przerwy obiadowej w szkole', correct: false },
            { textPl: 'To zwrot oznaczający brak jakichkolwiek skutków na początku i na końcu wypowiedzi pisemnej', correct: false }
          ]
        },
        {
          id: 'j_ep8_3', sliceLabel: 'PAMIĘĆ', color: '#f59e0b', badge: 'WNIOSEK', speakText: 'Warto pamiętać o zasadach!',
          options: [
            { textPl: '«Warto pamiętać, że literatura uczy nas empatii i odpowiedzialności za innych ludzi»', correct: true },
            { textPl: '«Warto pamiętać, żeby nigdy nie czytać żadnych lektur, bo bardzo mi na tym zależy!»', correct: false },
            { textPl: '«Warto pamiętać, że na egzaminie najlepiej jest nic nie pisać, bo bardzo mi na tym zależy!»', correct: false }
          ]
        },
        {
          id: 'j_ep8_4', sliceLabel: 'SUKCES!', color: '#ec4899', badge: 'FINAŁ', speakText: 'Gratulacje, osiągnąłeś sukces!',
          options: [
            { textPl: 'Połączenie systematycznej nauki, logicznego myślenia i uważnego czytania daje wspaniały sukces!', correct: true },
            { textPl: 'Sukces zależy wyłącznie od losowania odpowiedzi na chybił-trafił i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Żeby odnieść sukces, nie trzeba znać ani jednego słowa podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        }
      ]
    }
  },

  // ──────────────────────────── ROBOT ────────────────────────────
  // Składnia zdania, logika analityczna, interpunkcja i precyzyjna argumentacja
  robot: {
    1: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 1 (Klasa 4: Budowa Zdania i Logika Myślenia)',
      chestWords: [
        { word: 'Zdanie', cleanWord: 'Zdanie', phonetic: '[Zda-nie] • Câu văn hoàn chỉnh', plMeaning: 'Wypowiedzenie zawierające orzeczenie (czasownik) wyrażające pełną, zamkniętą myśl.', vnMeaning: 'Câu văn hoàn chỉnh — Đơn vị diễn đạt trọn vẹn một ý, bắt buộc có vị ngữ động từ.', color: '#3b82f6' },
        { word: 'Słowo', cleanWord: 'Słowo', phonetic: '[Sło-wo] • Từ ngữ / Đơn vị từ', plMeaning: 'Podstawowa jednostka języka; w tekście oddzielamy słowa wyraźnymi spacjami.', vnMeaning: 'Từ ngữ — Đơn vị cơ bản của ngôn ngữ; các từ trong câu được viết cách rời bằng dấu cách.', color: '#10b981' },
        { word: 'Prawda', cleanWord: 'Prawda', phonetic: '[Praw-da] • Sự thật logic', plMeaning: 'Fakt sprawdzalny i zgodny z rzeczywistością; fundament logicznego wnioskowania.', vnMeaning: 'Sự thật — Thông tin chính xác, khách quan phù hợp với thực tế và suy luận logic.', color: '#f59e0b' },
        { word: 'Uwaga', cleanWord: 'Uwaga', phonetic: '[U-wa-ga] • Sự chú ý tập trung', plMeaning: 'Pełna koncentracja: dokładne czytanie polecenia od początku do końca przed podaniem odpowiedzi.', vnMeaning: 'Sự chú ý tập trung — Đọc kỹ toàn bộ yêu cầu đề bài trước khi lựa chọn phương án.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep1_1', sliceLabel: 'CO TO JEST ZDANIE?', color: '#3b82f6', badge: 'SKŁADNIA', speakText: 'Rozpoznaj zdanie!',
          options: [
            { textPl: 'Wypowiedzenie zawierające orzeczenie (np. «Robot czyta podręcznik»)', correct: true },
            { textPl: 'Pojedynczy wyraz bez żadnego czasownika (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Ciąg przypadkowych liter bez spacji i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep1_2', sliceLabel: 'SPACJE MIĘDZY SŁOWAMI', color: '#10b981', badge: 'PISOWNIA', speakText: 'Oddzielaj wyrazy!',
          options: [
            { textPl: 'Każde słowo w zdaniu zapisujemy oddzielnie z odstępem (spacją)', correct: true },
            { textPl: 'Piszemy wszystkie słowa w jednej długiej linii zupełnie razem', correct: false },
            { textPl: 'Stawiamy znak kropki po każdej pojedynczej zapisanej literze', correct: false }
          ]
        },
        {
          id: 'r_ep1_3', sliceLabel: 'POCZĄTEK I KONIEC', color: '#f59e0b', badge: 'ZASADA', speakText: 'Wielka litera i kropka!',
          options: [
            { textPl: 'Zdanie zaczynamy wielką literą, a kończymy kropką, znakiem zapytania lub wykrzyknikiem', correct: true },
            { textPl: 'Zdanie zawsze kończymy przecinkiem na początku i na końcu wypowiedzi pisemnej w klasie', correct: false },
            { textPl: 'Wszystkie litery w zdaniu muszą być małe i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        },
        {
          id: 'r_ep1_4', sliceLabel: 'FAKT CZY OPINIA?', color: '#ef4444', badge: 'LOGIKA', speakText: 'Oceń prawdę logiczną!',
          options: [
            { textPl: 'Fakt to sprawdzalna prawda: «Warszawa jest stolicą Polski»', correct: true },
            { textPl: 'Fakt to zmyślona bajka o smokach i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Fakt to tylko to, co nam się podoba i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep1_5', sliceLabel: 'DOKŁADNOŚĆ', color: '#8b5cf6', badge: 'PRECYZJA', speakText: 'Czytaj polecenia!',
          options: [
            { textPl: 'Uważne przeczytanie całego polecenia chroni przed niepotrzebnym błędem', correct: true },
            { textPl: 'Wystarczy przeczytać pierwsze słowo i zgadywać resztę (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Najlepiej od razu oddać pustą kartkę i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 2 (Klasa 4: Podmiot i Orzeczenie – Rdzeń Zdania)',
      chestWords: [
        { word: 'Podmiot', cleanWord: 'Podmiot', phonetic: '[Pod-miot] • Chủ ngữ (Kto? Co?)', plMeaning: 'Główna część zdania odpowiadająca na pytania Kto? Co?, wskazuje wykonawcę czynności.', vnMeaning: 'Chủ ngữ — Thành phần chính trả lời cho câu hỏi Ai? Cái gì? (Kto? Co?), chỉ chủ thể hành động.', color: '#3b82f6' },
        { word: 'Orzeczenie', cleanWord: 'Orzeczenie', phonetic: '[O-rze-cze-nie] • Vị ngữ (Co robi?)', plMeaning: 'Serce zdania wyrażone osobową formą czasownika, informuje co robi podmiot.', vnMeaning: 'Vị ngữ — Trọng tâm của câu do động từ đảm nhận, nêu hành động hoặc trạng thái.', color: '#10b981' },
        { word: 'Zdanie pojedyncze', cleanWord: 'Zdanie pojedyncze', phonetic: '[Câu đơn một vị ngữ]', plMeaning: 'Zdanie zawierające dokładnie jedno orzeczenie (np. «Uczeń pisze sprawdzian»).', vnMeaning: 'Câu đơn — Câu chỉ chứa duy nhất một vị ngữ động từ biểu đạt ý trọn vẹn.', color: '#f59e0b' },
        { word: 'Równoważnik', cleanWord: 'Równoważnik', phonetic: '[Cụm từ tương đương câu]', plMeaning: 'Wypowiedzenie niemające orzeczenia, ale niosące zrozumiałą treść (np. «Cisza w bibliotece!»).', vnMeaning: 'Cụm từ tương đương câu — Diễn đạt thông tin nhưng không chứa vị ngữ động từ.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep2_1', sliceLabel: 'PYTANIE O PODMIOT', color: '#3b82f6', badge: 'KTO? CO?', speakText: 'Kto wykonuje czynność?',
          options: [
            { textPl: 'Podmiot odpowiada na pytania Kto? Co? (np. «Uczeń pisze» – podmiot: uczeń)', correct: true },
            { textPl: 'Odpowiada na pytanie Gdzie? Kiedy? (np. jeden, dwa, dziesięć, sto punktów)', correct: false },
            { textPl: 'Odpowiada na pytanie Jaki? Jaka? podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'r_ep2_2', sliceLabel: 'ROLA ORZECZENIA', color: '#10b981', badge: 'CO ROBI?', speakText: 'Serce zdania!',
          options: [
            { textPl: 'Wskazuje czynność lub stan (np. «Uczeń ROZWIĄZUJE zadanie»)', correct: true },
            { textPl: 'Wskazuje tylko kolor przedmiotu (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Zastępuje kropkę na końcu (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'r_ep2_3', sliceLabel: 'RÓWNOWAŻNIK ZDANIA', color: '#f59e0b', badge: 'BEZ CZASOWNIKA', speakText: 'Dzwonek na przerwę!',
          options: [
            { textPl: '«Dzwonek na przerwę!» to równoważnik zdania, bo nie ma tu orzeczenia czasownikowego', correct: true },
            { textPl: 'To pełne zdanie złożone z trzech orzeczeń podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'To błąd gramatyczny zakazany w szkole i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        },
        {
          id: 'r_ep2_4', sliceLabel: 'PODMIOT DOMYŚLNY', color: '#ef4444', badge: 'UKRYTY', speakText: 'Kto to zrobił?',
          options: [
            { textPl: 'W zdaniu «Zdałem egzamin» podmiotem domyślnym jest zaimek (ja)', correct: true },
            { textPl: 'W tym zdaniu nie da się ustalić wykonawcy i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Podmiotem jest słowo egzamin (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'r_ep2_5', sliceLabel: 'ZWIĄZEK GŁÓWNY', color: '#8b5cf6', badge: 'STRUKTURA', speakText: 'Oś konstrukcyjna!',
          options: [
            { textPl: 'Podmiot i orzeczenie tworzą najważniejszy związek główny każdego zdania', correct: true },
            { textPl: 'Podmiot i orzeczenie nigdy pod żadnym pozorem nie występują w zdaniu', correct: false },
            { textPl: 'Związek główny w zdaniu to wyłącznie połączenie dwóch przymiotników', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 3 (Klasa 5: Określenia Części Zdania)',
      chestWords: [
        { word: 'Przydawka', cleanWord: 'Przydawka', phonetic: '[Pży-daw-ka] • Định ngữ (Jaki? Czyj? Ile?)', plMeaning: 'Część zdania określająca rzeczownik; odpowiada na pytania: jaki? który? czyj? ile?.', vnMeaning: 'Định ngữ — Thành phần bổ nghĩa cho danh từ, trả lời câu hỏi Như thế nào? Của ai? Bao nhiêu?', color: '#3b82f6' },
        { word: 'Dopełnienie', cleanWord: 'Dopełnienie', phonetic: '[Do-peł-nie-nie] • Bổ ngữ trực tiếp/gián tiếp', plMeaning: 'Uzupełnia czasownik, odpowiada na pytania przypadków zależnych (kogo? czego? czym?).', vnMeaning: 'Bổ ngữ — Bổ sung ý nghĩa cho động từ, trả lời câu hỏi các cách ngữ pháp từ 2 đến 6.', color: '#10b981' },
        { word: 'Okolicznik', cleanWord: 'Okolicznik', phonetic: '[O-ko-licz-nik] • Trạng ngữ (Gdzie? Kiedy? Jak?)', plMeaning: 'Wskazuje okoliczności czynności: czas, miejsce, sposób, cel i przyczynę.', vnMeaning: 'Trạng ngữ — Nêu hoàn cảnh diễn ra hành động: thời gian, nơi chốn, cách thức, nguyên nhân.', color: '#f59e0b' },
        { word: 'Wykres zdania', cleanWord: 'Wykres zdania', phonetic: '[Sơ đồ phân tích cấu trúc câu]', plMeaning: 'Graficzny rozkład zdania na grupę podmiotu i grupę orzeczenia ze strzałkami zależności.', vnMeaning: 'Sơ đồ câu — Phân tích trực quan mối quan hệ phụ thuộc giữa nhóm chủ ngữ và nhóm vị ngữ.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep3_1', sliceLabel: 'PRZYDAWKA', color: '#3b82f6', badge: 'OKREŚLA', speakText: 'Jaka książka?',
          options: [
            { textPl: '«Ciekawa książka» – wyraz «ciekawa» to przydawka określająca rzeczownik', correct: true },
            { textPl: '«Ciekawa» to orzeczenie informujące co robi książka i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: '«Ciekawa» to zaimek liczebny na początku i na końcu wypowiedzi pisemnej', correct: false }
          ]
        },
        {
          id: 'r_ep3_2', sliceLabel: 'DOPEŁNIENIE', color: '#10b981', badge: 'PRZYPADKI', speakText: 'Kogo? Co? Czym?',
          options: [
            { textPl: '«Czytam (kogo? co?) lekturę» – wyraz «lekturę» to dopełnienie w bierniku', correct: true },
            { textPl: '«Lekturę» to podmiot wykonujący czynność czytania i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'To przysłówek sposobu (np. tarcza, zbroja, hełm, miecz bojowy) na lekcji', correct: false }
          ]
        },
        {
          id: 'r_ep3_3', sliceLabel: 'OKOLICZNIK CZASU', color: '#f59e0b', badge: 'KIEDY?', speakText: 'Kiedy to zrobisz?',
          options: [
            { textPl: '«Jutro napiszę sprawdzian» – wyraz «jutro» to okolicznik czasu (kiedy?)', correct: true },
            { textPl: '«Jutro» to rzeczownik w mianowniku (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: '«Jutro» to orzeczenie zdania podczas długiej przerwy obiadowej w szkole', correct: false }
          ]
        },
        {
          id: 'r_ep3_4', sliceLabel: 'GRUPA PODMIOTU', color: '#ef4444', badge: 'PODZIAŁ', speakText: 'Dwie grupy w zdaniu!',
          options: [
            { textPl: 'Podmiot wraz z określającymi go przydawkami tworzy grupę podmiotu', correct: true },
            { textPl: 'Grupa podmiotu w zdaniu składa się tylko z pojedynczych spójników', correct: false },
            { textPl: 'Grupa podmiotu występuje zawsze na samym końcu zdania po kropce', correct: false }
          ]
        },
        {
          id: 'r_ep3_5', sliceLabel: 'WYKRES ZALEŻNOŚCI', color: '#8b5cf6', badge: 'LOGIKA', speakText: 'Strzałki zależności!',
          options: [
            { textPl: 'Strzałka w wykresie prowadzi od wyrazu nadrzędnego do podrzędnego z pytaniem', correct: true },
            { textPl: 'Wszystkie wyrazy w wykresie rysujemy w jednym pionowym kółku (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Wykres zdania pojedynczego nie zawiera pytań i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 4 (Klasa 6: Zdania Złożone i Interpunkcja)',
      chestWords: [
        { word: 'Spójnik', cleanWord: 'Spójnik', phonetic: '[Spój-nik] • Liên từ liên kết', plMeaning: 'Nieodmienna część mowy łącząca zdania lub wyrazy (i, ale, lecz, ponieważ, że).', vnMeaning: 'Liên từ — Từ không biến đổi dùng để nối các câu hoặc các thành phần đẳng lập.', color: '#3b82f6' },
        { word: 'Przecinek', cleanWord: 'Przecinek', phonetic: '[Prze-ci-nek] • Dấu phẩy ngăn cách', plMeaning: 'Znak interpunkcyjny oddzielający zdania składowe w zdaniu złożonym i elementy wyliczenia.', vnMeaning: 'Dấu phẩy — Dấu câu ngăn cách các mệnh đề trong câu ghép và các từ trong phép liệt kê.', color: '#10b981' },
        { word: 'Współrzędne', cleanWord: 'Współrzędne', phonetic: '[Câu ghép đẳng lập]', plMeaning: 'Zdania jednakowo ważne, połączone bez podrzędności (np. «Czytam i notuję»).', vnMeaning: 'Đẳng lập — Các mệnh đề có vai trò ngữ pháp độc lập ngang hàng với nhau.', color: '#f59e0b' },
        { word: 'Podrzędne', cleanWord: 'Podrzędne', phonetic: '[Câu ghép chính phụ]', plMeaning: 'Jedno zdanie wynika z drugiego i odpowiada na pytanie o jego treść (np. «Wiem, że zdam»).', vnMeaning: 'Chính phụ — Mệnh đề phụ bổ sung và làm rõ ý nghĩa cho mệnh đề chính đứng trước.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep4_1', sliceLabel: 'PRZECINEK PRZED „ALE”', color: '#3b82f6', badge: 'ZASADA', speakText: 'Zawsze przed „ale”!',
          options: [
            { textPl: 'Przed spójnikami przeciwstawnymi (ale, lecz, jednak, a) ZAWSZE stawiamy przecinek', correct: true },
            { textPl: 'Przed spójnikiem „ale” nigdy nie stawiamy przecinka (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Stawiamy przecinek tylko wtedy, gdy zdanie jest bardzo długie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep4_2', sliceLabel: 'BRAK PRZECINKA PRZED „I”', color: '#10b981', badge: 'SPÓJNIK „I”', speakText: 'Kiedy NIE stawiamy?',
          options: [
            { textPl: 'Przed pojedynczymi spójnikami łącznymi (i, oraz, lub, czy) NIE stawiamy przecinka', correct: true },
            { textPl: 'Przed „i” zawsze stawiamy dwa przecinki podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Przed „oraz” stawiamy wykrzyknik i wracasz prosto do domu po lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 'r_ep4_3', sliceLabel: 'LICZBA ORZECZEŃ', color: '#f59e0b', badge: 'ILE ZDAŃ?', speakText: 'Policz orzeczenia!',
          options: [
            { textPl: 'Liczba orzeczeń czasownikowych wskazuje dokładnie liczbę zdań składowych', correct: true },
            { textPl: 'Liczba zdań zależy od liczby przymiotników (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'W zdaniu złożonym może być tylko jedno orzeczenie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep4_4', sliceLabel: 'ZDANIE ŁĄCZNE', color: '#ef4444', badge: 'WYKRES', speakText: '1 ... 2',
          options: [
            { textPl: '«Zadzwonił dzwonek i uczniowie weszli do klasy» – to zdanie złożone współrzędnie łączne', correct: true },
            { textPl: 'To zdanie pojedyncze nierozwinięte w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false },
            { textPl: 'To równoważnik zdania w skupieniu, ciszy i pełnym zaangażowaniu na zajęciach po dzwonku', correct: false }
          ]
        },
        {
          id: 'r_ep4_5', sliceLabel: 'LOGIKA INTERPUNKCJI', color: '#8b5cf6', badge: 'SENS', speakText: 'Przecinek ratuje sens!',
          options: [
            { textPl: 'Pominięcie lub złe postawienie przecinka może całkowicie zmienić sens zdania!', correct: true },
            { textPl: 'Interpunkcja nie ma żadnego wpływu na znaczenie tekstu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przecinki stawia się losowo w co trzecim słowie i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 5 (Klasa 7: Zdania Podrzędne i Imiesłowy)',
      chestWords: [
        { word: 'Że', cleanWord: 'Że', phonetic: '[Że] • Liên từ phụ rằng', plMeaning: 'Spójnik wprowadzający zdanie podrzędne dopełnieniowe po przecinku: «Wiem, że jutro jest test».', vnMeaning: 'Liên từ phụ rằng — Đứng đầu mệnh đề phụ bổ ngữ sau dấu phẩy làm rõ nhận thức.', color: '#3b82f6' },
        { word: 'Który', cleanWord: 'Który', phonetic: '[Któ-ry] • Đại từ quan hệ người mà/cái mà', plMeaning: 'Zaimek wprowadzający zdanie przydawkowe: «Książka, którą czytam, uczy logiki».', vnMeaning: 'Đại từ quan hệ — Bắt đầu mệnh đề phụ định ngữ ngăn cách bởi dấu phẩy.', color: '#10b981' },
        { word: 'Ponieważ', cleanWord: 'Ponieważ', phonetic: '[Po-nie-waż] • Liên từ nguyên nhân bởi vì', plMeaning: 'Spójnik przyczynowy wyjaśniający powód: «Uczę się pilnie, ponieważ chcę osiągnąć sukces».', vnMeaning: 'Liên từ bởi vì — Nêu rõ lý do và nguyên nhân của hành động sau dấu phẩy.', color: '#f59e0b' },
        { word: 'Imiesłów -ąc', cleanWord: 'Imiesłów', phonetic: '[Phân từ trạng từ đồng thời -ąc]', plMeaning: 'Imiesłów przysłówkowy współczesny; tworzy poprawny równoważnik tylko przy tym samym podmiocie!', vnMeaning: 'Phân từ đồng thời đuôi -ąc — Chỉ dùng thay mệnh đề khi cả hai hành động cùng một chủ ngữ!', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep5_1', sliceLabel: 'PRZECINEK PRZED „ŻE”', color: '#3b82f6', badge: 'PODRZĘDNE', speakText: 'Wiem, że...',
          options: [
            { textPl: 'Przed spójnikami: że, żeby, ponieważ, gdy, chociaż zawsze stawiamy przecinek', correct: true },
            { textPl: 'Przed „że” przecinek jest błędem w drodze powrotnej ze szkoły prosto do domu', correct: false },
            { textPl: 'Przecinek stawiamy dopiero po słowie „że” i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep5_2', sliceLabel: 'ZDANIE WTRĄCONE', color: '#10b981', badge: 'DWUSTRONNY', speakText: 'Wytnij i wstaw!',
          options: [
            { textPl: '«Książka, którą pożyczyłem z biblioteki, jest ciekawa» – przecinki z obu stron zdania wtrąconego', correct: true },
            { textPl: 'Stawiamy przecinek tylko na początku całego zdania i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Nie wolno rozdzielać zdania przecinkami w środku i wracasz prosto do domu po lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'r_ep5_3', sliceLabel: 'TEN SAM PODMIOT', color: '#f59e0b', badge: 'ZASADA -ĄC', speakText: 'Kto wykonuje obie czynności?',
          options: [
            { textPl: '«Idąc do szkoły, spotkałem kolegę» – poprawnie, bo to JA szedłem i to JA spotkałem', correct: true },
            { textPl: 'Obie czynności mogą mieć zupełnie różnych wykonawców i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Imiesłów zastępuje kropkę w zdaniu (np. szybki, zwinny, waleczny rycerz) na lekcji', correct: false }
          ]
        },
        {
          id: 'r_ep5_4', sliceLabel: 'KLASYCZNY BŁĄD Z -ĄC', color: '#ef4444', badge: 'PUŁAPKA', speakText: 'Czy deszcz szedł do szkoły?',
          options: [
            { textPl: '«Idąc do szkoły, spadł deszcz» to BŁĄD, bo deszcz nie ma nóg i nie szedł do szkoły!', correct: true },
            { textPl: 'To wspaniałe i poprawne zdanie w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false },
            { textPl: 'To przysłowie z XVII wieku w czytelni biblioteki po skończonych lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'r_ep5_5', sliceLabel: 'SCHODKI WYKRESU', color: '#8b5cf6', badge: 'STRUKTURA', speakText: 'Wykres podrzędny!',
          options: [
            { textPl: 'Zdanie nadrzędne rysujemy wyżej (poziom 1), a zdanie podrzędne o stopień niżej (poziom 2)', correct: true },
            { textPl: 'Wykres podrzędny rysuje się w kółku ze strzałkami w prawo i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zdania podrzędne nie mają wykresów podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 6 (Klasa 8: Cytat, Cudzysłów i Mowa Zależna)',
      chestWords: [
        { word: 'Cytat', cleanWord: 'Cytat', phonetic: '[Cy-tat] • Trích dẫn nguyên văn', plMeaning: 'Dosłowne przytoczenie cudzych słów; niezbędny dowód w wypracowaniu egzaminacyjnym.', vnMeaning: 'Trích dẫn — Dẫn lại chính xác từng từ lời nói của nhân vật hoặc tác giả trong bài viết.', color: '#3b82f6' },
        { word: 'Cudzysłów', cleanWord: 'Cudzysłów', phonetic: '[Cu-dzy-słów] • Dấu ngoặc kép', plMeaning: 'Znak interpunkcyjny („...”), w którym zamykamy dosłowne cytaty oraz tytuły utworów.', vnMeaning: 'Dấu ngoặc kép — Ký hiệu đóng mở phần trích dẫn trực tiếp hoặc tựa đề cuốn sách.', color: '#10b981' },
        { word: 'Mowa zależna', cleanWord: 'Mowa zależna', phonetic: '[Lời thuật gián tiếp]', plMeaning: 'Przekazanie cudzej wypowiedzi własnymi słowami w zdaniu złożonym ze spójnikiem «że».', vnMeaning: 'Lời gián tiếp — Thuật lại ý kiến của người khác bằng từ ngữ của mình qua liên từ rằng.', color: '#f59e0b' },
        { word: 'Dwukropek', cleanWord: 'Dwukropek', phonetic: '[Dwu-kro-pek] • Dấu hai chấm', plMeaning: 'Znak zapowiadający nadejście cytatu, logicznego wyjaśnienia lub wyliczenia.', vnMeaning: 'Dấu hai chấm — Dấu hiệu thông báo phía sau là lời trích dẫn, giải thích hoặc liệt kê.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep6_1', sliceLabel: 'PRAWIDŁOWY CYTAT', color: '#3b82f6', badge: 'ZAPIS', speakText: 'Jak cytować?',
          options: [
            { textPl: 'Nauczyciel powiedział: „Otwórzcie podręczniki na stronie dziesiątej”.', correct: true },
            { textPl: 'Nauczyciel powiedział «otwórzcie podręczniki szkolne bez cudzysłowu»', correct: false },
            { textPl: 'Nauczyciel powiedział że: Otwórzcie podręczniki w okrągłym nawiasie', correct: false }
          ]
        },
        {
          id: 'r_ep6_2', sliceLabel: 'PRZEKSZTAŁCENIE W MOWĘ ZALEŻNĄ', color: '#10b981', badge: 'SPÓJNIK „ŻE”', speakText: 'Zamień na mowę zależną!',
          options: [
            { textPl: 'Nauczyciel powiedział, że mamy otworzyć podręczniki na stronie dziesiątej', correct: true },
            { textPl: 'Nauczyciel powiedział: że otwórzcie podręczniki w cudzysłowie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Nauczyciel nic nie mówił do nikogo i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep6_3', sliceLabel: 'CUDZYSŁÓW W TYTULE', color: '#f59e0b', badge: 'TYTUŁY LEKTUR', speakText: 'Tytuł w cudzysłowie!',
          options: [
            { textPl: 'Tytuły lektur zapisujemy w cudzysłowie, np. „Dziady”, „Balladyna”, „Mały Książę”', correct: true },
            { textPl: 'Tytuły lektur zapisujemy wielkimi drukowanymi literami bez spacji (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Tytułów lektur w ogóle się nie wyróżnia podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'r_ep6_4', sliceLabel: 'PRECYZJA BEZ PLEONAZMÓW', color: '#ef4444', badge: 'BŁĄD LOGICZNY', speakText: 'Nie mów masła maślanego!',
          options: [
            { textPl: 'Poprawnie: «w maju» (nie: w miesiącu maju), «cofnąć się» (nie: cofnąć się w tył)', correct: true },
            { textPl: 'Pleonazmy są ozdobą każdego oficjalnego listu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Warto powtarzać to samo słowo trzykrotnie w jednym zdaniu (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'r_ep6_5', sliceLabel: 'KRYTERIA CKE', color: '#8b5cf6', badge: 'PUNKTACJA', speakText: 'Precyzja i rzeczowość!',
          options: [
            { textPl: 'Trafne przytoczenie faktów z lektury i bezbłędna interpunkcja zapewniają komplet punktów', correct: true },
            { textPl: 'Wystarczy napisać cokolwiek na pół strony i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Za błędy logiczne egzaminator dodaje punkty bonusowe i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 7 (Lektury CKE I: Logika Wyborów i Moralność)',
      chestWords: [
        { word: 'Odpowiedzialność', cleanWord: 'Odpowiedzialność', phonetic: '[Tinh thần trách nhiệm]', plMeaning: 'Kluczowa nauka z „Małego Księcia”: stajesz się na zawsze odpowiedzialny za to, co oswoiłeś.', vnMeaning: 'Tinh thần trách nhiệm — Bài học lớn từ Hoàng tử bé: Ta có trách nhiệm với những gì ta đã gắn bó.', color: '#3b82f6' },
        { word: 'Rozsądek', cleanWord: 'Rozsądek', phonetic: '[Roz-są-dek] • Lý trí sáng suốt', plMeaning: 'Kierowanie się logiczną mądrością i etyką w ocenie postępowania postaci literackich.', vnMeaning: 'Lý trí sáng suốt — Suy xét thấu đáo và đúng đắn trước mỗi quyết định quan trọng của đời người.', color: '#10b981' },
        { word: 'Przyczyna i skutek', cleanWord: 'Skutek', phonetic: '[Mối quan hệ nhân quả]', plMeaning: 'Każdy czyn bohatera rodzi bezpośrednie konsekwencje (np. chciwość Balladyny doprowadziła do zbrodni).', vnMeaning: 'Mối quan hệ nhân quả — Mọi hành động của nhân vật đều dẫn tới hệ quả tất yếu không thể tránh.', color: '#f59e0b' },
        { word: 'Sumienie', cleanWord: 'Sumienie', phonetic: '[Su-mie-nie] • Tiếng nói lương tri', plMeaning: 'Wewnętrzny głos dobra obudzony w Scrooge\\\'u po odwiedzinach trzech duchów w wigilijną noc.', vnMeaning: 'Tiếng nói lương tri — Sự thức tỉnh của lương tâm giúp Scrooge chuộc lại lỗi lầm và sống vị tha.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep7_1', sliceLabel: 'LOGIKA MAŁEGO KSIĘCIA', color: '#3b82f6', badge: 'OSWAJANIE', speakText: 'Czas poświęcony róży!',
          options: [
            { textPl: 'Lis tłumaczy, że to czas poświęcony róży czyni ją tak ważną i jedyną na świecie', correct: true },
            { textPl: 'Lis twierdzi stanowczo, że róże są bezużyteczne i należy je natychmiast zerwać', correct: false },
            { textPl: 'Mały Książę kupuje nową piękną różę w miejskim sklepie z zabawkami dla dzieci', correct: false }
          ]
        },
        {
          id: 'r_ep7_2', sliceLabel: 'KALKULACJA SCROOGE’A', color: '#10b981', badge: 'BŁĄD ŻYCIOWY', speakText: 'Pieniądze to nie wszystko!',
          options: [
            { textPl: 'Scrooge zrozumiał, że samotne gromadzenie monet kosztem relacji z ludźmi było nielogicznym błędem', correct: true },
            { textPl: 'Scrooge uznał, że musi zarabiać jeszcze więcej kosztem zdrowia pracowników i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Scrooge wyrzucił wszystkie pieniądze do rzeki Tamizy na korytarzu w trakcie trwania dużej przerwy', correct: false }
          ]
        },
        {
          id: 'r_ep7_3', sliceLabel: 'ŁAŃCUCH ZBRODNI', color: '#f59e0b', badge: 'BALLADYNA', speakText: 'Zbrodnia rodzi zbrodnię!',
          options: [
            { textPl: 'Jedno kłamstwo o malinach wymusiło kolejne morderstwa aż po sprawiedliwy wyrok pioruna', correct: true },
            { textPl: 'Balladyna żyła długo i szczęśliwie u boku Aliny i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Kirkor dowiedział się o wszystkim i podarował Balladynie drugi zamek i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep7_4', sliceLabel: 'LOGIKA DZIADÓW CZ. II', color: '#ef4444', badge: 'ZASADA MORALNA', speakText: 'Kto nie był człowiekiem...',
          options: [
            { textPl: 'Sprawiedliwość moralna: kto za życia nie okazał miłosierdzia głodnym, nie zazna spokoju po śmierci', correct: true },
            { textPl: 'Duchy przybywają na cmentarz, żeby tańczyć i śpiewać wesołe piosenki i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Guślarz rozdaje złote monety wszystkim zjawom w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false }
          ]
        },
        {
          id: 'r_ep7_5', sliceLabel: 'WNIOSEK EGZAMINACYJNY', color: '#8b5cf6', badge: 'ARGUMENTACJA', speakText: 'Uzasadnij twierdzenie!',
          options: [
            { textPl: 'Każdy argument poprzyj konkretnym działaniem bohatera i nazwij jego motywację', correct: true },
            { textPl: 'Wystarczy napisać jedno zdanie: «Bohater postąpił bardzo źle» i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Nie trzeba podawać żadnych tytułów ani nazwisk i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Robota – Epizod 8 (Formy Wypowiedzi II: Logiczna Rozprawka)',
      chestWords: [
        { word: 'Teza', cleanWord: 'Teza', phonetic: '[Te-za] • Luận điểm chính khẳng định', plMeaning: 'Jasno i jednoznacznie sformułowane twierdzenie we wstępie rozprawki, którego bronimy.', vnMeaning: 'Luận điểm chính — Mệnh đề khẳng định rõ ràng ở mở bài cần chứng minh qua các dẫn chứng.', color: '#3b82f6' },
        { word: 'Argument', cleanWord: 'Argument', phonetic: '[Ar-gu-ment] • Luận cứ thuyết phục', plMeaning: 'Dowód logiczny oparty na lekturze obowiązkowej potwierdzający słuszność postawionej tezy.', vnMeaning: 'Luận cứ — Lý lẽ và bằng chứng xác thực từ tác phẩm củng cố cho luận điểm.', color: '#10b981' },
        { word: 'Kontrargument', cleanWord: 'Kontrargument', phonetic: '[Phản biện đối lập]', plMeaning: 'Pogląd przeciwny tezie, który przytaczamy i obalamy siłą logicznego rozumowania.', vnMeaning: 'Ý kiến phản biện — Góc nhìn đối lập được nêu ra rồi bác bỏ bằng lập luận chặt chẽ.', color: '#f59e0b' },
        { word: 'Podsumowanie', cleanWord: 'Podsumowanie', phonetic: '[Tổng kết luận điểm]', plMeaning: 'Końcowy wniosek w zakończeniu rozprawki wynikający bezpośrednio z przeprowadzonych dowodów.', vnMeaning: 'Tổng kết luận điểm — Đoạn kết bài đúc kết toàn bộ tiến trình lập luận một cách logic.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'r_ep8_1', sliceLabel: 'STRUKTURA ARGUMENTU', color: '#3b82f6', badge: 'TRÓJPODZIAŁ', speakText: 'Twierdzenie – Przykład – Wniosek!',
          options: [
            { textPl: 'Sformułuj myśl → Podaj przykład z lektury → Wyjaśnij, w jaki sposób popiera on Twoją tezę', correct: true },
            { textPl: 'Przepisz całą książkę od deski do deski bez żadnego komentarza i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wypisz same pytania bez odpowiedzi i zakończ kropką i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep8_2', sliceLabel: 'FORMUŁOWANIE TEZY', color: '#10b981', badge: 'WSTĘP', speakText: 'Jasne stanowisko!',
          options: [
            { textPl: '«Uważam, że prawdziwa przyjaźń pomaga przezwyciężyć największe trudności w życiu»', correct: true },
            { textPl: '«Może tak, może nie, sam do końca nie wiem, dziękuję serdecznie za pomoc i radę!»', correct: false },
            { textPl: '«Temat jest nudny i nie chce mi się o nim pisać, zrobimy to wspólnie po lekcjach!»', correct: false }
          ]
        },
        {
          id: 'r_ep8_3', sliceLabel: 'ŁĄCZNIKI LOGICZNE', color: '#f59e0b', badge: 'SPÓJNOŚĆ', speakText: 'Płynne przejścia!',
          options: [
            { textPl: 'Używaj zwrotów: «Świadczy o tym...», «Kolejnym dowodem jest...», «Z powyższego wynika, że...»', correct: true },
            { textPl: 'Powtarzaj słowo «no i» na początku każdego zdania w rozprawce (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Pisz jednym ciągiem bez spacji i bez znaków przestankowych i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'r_ep8_4', sliceLabel: 'KONTROLA DŁUGOŚCI', color: '#ef4444', badge: 'LIMIT CKE', speakText: 'Minimum 200 słów!',
          options: [
            { textPl: 'Wypracowanie na egzaminie ósmoklasisty musi liczyć co najmniej 200 słów i mieć min. 3 akapity', correct: true },
            { textPl: 'Wystarczy napisać 20 słów na całą stronę w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false },
            { textPl: 'Liczba słów nie ma żadnego znaczenia na egzaminie w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        },
        {
          id: 'r_ep8_5', sliceLabel: 'TRIUMF LOGIKI', color: '#8b5cf6', badge: 'SUKCES', speakText: 'Mistrzowska argumentacja!',
          options: [
            { textPl: 'Połączenie logicznego myślenia, trafnych argumentów i czystego języka gwarantuje najwyższy wynik!', correct: true },
            { textPl: 'Najlepiej zdać się na losowanie i zgadywanie odpowiedzi podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Sukces zależy tylko od szczęśliwego długopisu podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        }
      ]
    }
  },

  // ──────────────────────────── INVENTOR (Wynalazczyni) ────────────────────────────
  // Tworzenie form użytkowych, budowa słów (słowotwórstwo), opowiadanie i przemówienie
  inventor: {
    1: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 1 (Klasa 4: Plan Pracy i Pierwsze Zapiski)',
      chestWords: [
        { word: 'Pomysł', cleanWord: 'Pomysł', phonetic: '[Po-mysł] • Ý tưởng sáng tạo', plMeaning: 'Pierwsza twórcza myśl przed przystąpieniem do pisania tekstu lub opowiadania.', vnMeaning: 'Ý tưởng — Điểm khởi đầu sáng tạo trước khi bắt tay viết một bài tập làm văn.', color: '#3b82f6' },
        { word: 'Projekt', cleanWord: 'Projekt', phonetic: '[Pro-jekt] • Bản phác thảo / Kế hoạch', plMeaning: 'Szkic kompozycji wypracowania lub plan konstrukcji dłuższej wypowiedzi.', vnMeaning: 'Bản thiết kế — Dàn ý tổng thể cấu trúc bài viết và sự liên kết giữa các phần.', color: '#10b981' },
        { word: 'Plan pracy', cleanWord: 'Plan pracy', phonetic: '[Kế hoạch làm việc cụ thể]', plMeaning: 'Uporządkowana lista kolejnych kroków i tematów do zrealizowania w zadaniu pisemnym.', vnMeaning: 'Kế hoạch làm việc — Trình tự các bước thực hiện bài viết mạch lạc theo thời gian.', color: '#f59e0b' },
        { word: 'Czystopis', cleanWord: 'Czystopis', phonetic: '[Bản viết sạch sẽ chính thức]', plMeaning: 'Ostateczna, estetyczna wersja pracy przepisana starannie po naniesieniu poprawek w brudnopisie.', vnMeaning: 'Bản nộp chính thức — Bài viết sạch đẹp cẩn thận sau khi đã rà soát lỗi ở bản nháp.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep1_1', sliceLabel: 'PLAN PRZED PISANIEM', color: '#3b82f6', badge: 'ORGANIZACJA', speakText: 'Najpierw zaplanuj!',
          options: [
            { textPl: 'Zanim zaczniesz pisać wypracowanie, ułóż plan w punktach, by myśl była uporządkowana', correct: true },
            { textPl: 'Pisz od razu bez żadnego zastanowienia i skreślaj co drugie słowo (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Zacznij od podpisania pustej kartki na środku i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep1_2', sliceLabel: 'BRUDNOPIS A CZYSTOPIS', color: '#10b981', badge: 'STARANNOŚĆ', speakText: 'Dwie wersje tekstu!',
          options: [
            { textPl: 'W brudnopisie skreślamy i poprawiamy błędy, a czystopis przepisujemy czysto i czytelnie', correct: true },
            { textPl: 'Czystopis służy do rysowania komiksów na marginesie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Brudnopis oddajemy nauczycielowi zamiast pracy domowej i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep1_3', sliceLabel: 'ESTETYKA I MARGINES', color: '#f59e0b', badge: 'CZYTELNOŚĆ', speakText: 'Dbaj o wygląd zeszytu!',
          options: [
            { textPl: 'Zachowanie marginesów i czytelne pismo ułatwiają czytanie i dają wyższą ocenę', correct: true },
            { textPl: 'Pisz po samych brzegach kartki i zamazuj błędy grubą warstwą białego korektora', correct: false },
            { textPl: 'Zeszyt powinien być pomięty i brudny, bo to świadczy o intensywnej nauce ucznia', correct: false }
          ]
        },
        {
          id: 'inv_ep1_4', sliceLabel: 'POMYSŁ NA BOHATERA', color: '#ef4444', badge: 'KREATYWNOŚĆ', speakText: 'Kto jest bohaterem?',
          options: [
            { textPl: 'Wymyśl postać, jej imię, cechy i cel, do którego dąży w opowiadaniu', correct: true },
            { textPl: 'Bohater nie powinien mieć żadnego celu ani nic nie robić i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wszystkie postacie w opowiadaniu muszą zachowywać się identycznie', correct: false }
          ]
        },
        {
          id: 'inv_ep1_5', sliceLabel: 'KONTROLA TEKSTU', color: '#8b5cf6', badge: 'AUTOKOREKTA', speakText: 'Sprawdź przed oddaniem!',
          options: [
            { textPl: 'Zawsze przeczytaj swój tekst przed oddaniem, by poprawić literówki i brakujące kropki', correct: true },
            { textPl: 'Oddaj sprawdzian w pierwszej minucie bez czytania i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Zamknij oczy i nie patrz na swój tekst i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 2 (Klasa 4: Formy Użytkowe I – Ogłoszenie i Zaproszenie)',
      chestWords: [
        { word: 'Ogłoszenie', cleanWord: 'Ogłoszenie', phonetic: '[O-gło-sze-nie] • Bản thông báo công khai', plMeaning: 'Krótka informacja na tablicy szkolnej o zgubie, znalezisku lub planowanym wydarzeniu.', vnMeaning: 'Bản thông báo — Tin vắn công khai dán ở trường về việc tìm đồ thất lạc hoặc sự kiện.', color: '#3b82f6' },
        { word: 'Zaproszenie', cleanWord: 'Zaproszenie', phonetic: '[Za-pro-sze-nie] • Giấy mời trang trọng', plMeaning: 'Oficjalny tekst wzywający gościa na uroczystość; zawiera 5 obowiązkowych elementów CKE.', vnMeaning: 'Giấy mời — Văn bản trang trọng mời dự buổi lễ; có đủ 5 yếu tố quy định của CKE.', color: '#10b981' },
        { word: 'Wiadomość', cleanWord: 'Wiadomość', phonetic: '[Wia-do-mość] • Lời nhắn ngắn gọn', plMeaning: 'Zwięzła informacja pozostawiona koledze, nauczycielowi lub rodzicom na kartce.', vnMeaning: 'Lời nhắn — Thông tin ngắn gọn súc tích để lại cho bạn bè hoặc người thân.', color: '#f59e0b' },
        { word: 'Podpis', cleanWord: 'Podpis', phonetic: '[Pod-pis] • Chữ ký xác nhận', plMeaning: 'Imię i nazwisko autora na dole każdej formy użytkowej po prawej stronie.', vnMeaning: 'Chữ ký — Họ tên người viết đặt ở góc dưới văn bản xác nhận trách nhiệm.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep2_1', sliceLabel: '5 ELEMENTÓW ZAPROSZENIA', color: '#3b82f6', badge: 'STANDARD CKE', speakText: 'Kto, kogo, kiedy, gdzie, z jakiej okazji!',
          options: [
            { textPl: 'Kto zaprasza, kogo, kiedy (data i godzina), gdzie (miejsce) i z jakiej okazji', correct: true },
            { textPl: 'Tylko podpis i data bez podawania miejsca i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przepis na ciasto czekoladowe i wracasz prosto do domu po lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'inv_ep2_2', sliceLabel: 'ZACHĘTA W ZAPROSZENIU', color: '#10b981', badge: 'ARGUMENT', speakText: 'Dlaczego warto przyjść?',
          options: [
            { textPl: '«Serdecznie zapraszamy! Gwarantujemy ciekawy pokaz wynalazków i słodki poczęstunek!»', correct: true },
            { textPl: '«Lepiej nie przychodźcie, bo będzie bardzo nudno, zrobimy to wspólnie po lekcjach!»', correct: false },
            { textPl: '«Wstęp surowo wzbroniony dla wszystkich, sprawdźmy to razem w podręczniku szkolnym!»', correct: false }
          ]
        },
        {
          id: 'inv_ep2_3', sliceLabel: 'OGŁOSZENIE NA TABLICY', color: '#f59e0b', badge: 'KONTAKT', speakText: 'Zguba lub znalezisko!',
          options: [
            { textPl: 'Należy dokładnie opisać przedmiot, podać miejsce zguby oraz numer telefonu do kontaktu', correct: true },
            { textPl: 'Wystarczy napisać słowo «Zgubiłem» i nic więcej (np. czytać, pisać, rysować, trenować)', correct: false },
            { textPl: 'Należy ukryć swoje dane, by nikt nie mógł oddać zguby i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep2_4', sliceLabel: 'DEDYKACJA W KSIĄŻCE', color: '#ef4444', badge: 'UPOMINEK', speakText: 'Komu i od kogo?',
          options: [
            { textPl: 'Podajemy dla kogo, z jakiej okazji, życzenia, podpis ofiarodawcy, miejscowość i datę', correct: true },
            { textPl: 'Dedykację piszemy ołówkiem na okładce i zamazujemy gumką (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Dedykacja nie powinna zawierać żadnych imion podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'inv_ep2_5', sliceLabel: 'SZACUNEK DO ADRESATA', color: '#8b5cf6', badge: 'ETYKIETA', speakText: 'Cię, Was, Ciebie!',
          options: [
            { textPl: 'Zaimki odnoszące się do zapraszanej osoby piszemy wielką literą (np. «Zapraszam Cię»)', correct: true },
            { textPl: 'Zaimki zawsze piszemy małymi literami w zaproszeniach (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Nie wolno używać słowa zapraszam w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 3 (Klasa 5: Struktura Tekstu – Plan Wydarzeń i Opis)',
      chestWords: [
        { word: 'Plan wydarzeń', cleanWord: 'Plan wydarzeń', phonetic: '[Dàn ý các sự việc theo thời gian]', plMeaning: 'Chronologiczny spis najważniejszych punktów akcji w lekturze lub opowiadaniu.', vnMeaning: 'Dàn ý sự việc — Trình tự các sự việc then chốt trong tác phẩm sắp xếp theo thời gian.', color: '#3b82f6' },
        { word: 'Opis', cleanWord: 'Opis', phonetic: '[O-pis] • Bài văn miêu tả', plMeaning: 'Przedstawienie wyglądu postaci, przedmiotu, krajobrazu lub dzieła sztuki z dbałością o detale.', vnMeaning: 'Bài văn miêu tả — Khắc hoạ chi tiết diện mạo của con người, đồ vật hay cảnh sắc thiên nhiên.', color: '#10b981' },
        { word: 'Akapit', cleanWord: 'Akapit', phonetic: '[A-ka-pit] • Đoạn văn thụt đầu dòng', plMeaning: 'Część tekstu rozpoczynająca się od wcięcia; zawiera jedną spójną i rozwiniętą myśl.', vnMeaning: 'Đoạn văn — Khối văn bản bắt đầu bằng thụt đầu dòng thể hiện trọn vẹn một ý.', color: '#f59e0b' },
        { word: 'Kolejność', cleanWord: 'Kolejność', phonetic: '[Ko-lej-ność] • Thứ tự thời gian logic', plMeaning: 'Zachowanie logicznej chronologii zdarzeń: od przyczyny przez rozwój do zakończenia.', vnMeaning: 'Thứ tự trước sau — Sắp xếp các tình tiết hợp lý mạch lạc theo trình tự thời gian.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep3_1', sliceLabel: 'JEDNOLITOŚĆ FORM W PLANIE', color: '#3b82f6', badge: 'ZASADA', speakText: 'Zdania albo równoważniki!',
          options: [
            { textPl: 'Wszystkie punkty planu zapisujemy w tej samej formie: albo same równoważniki, albo pełne zdania', correct: true },
            { textPl: 'Można mieszać dowolnie bez żadnego porządku podczas długiej przerwy obiadowej w szkole w klasie', correct: false },
            { textPl: 'Plan wydarzeń musi być napisany wierszem podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        },
        {
          id: 'inv_ep3_2', sliceLabel: 'PLAN SZCZEGÓŁOWY', color: '#10b981', badge: 'PODPUNKTY', speakText: 'Rozwiń główne punkty!',
          options: [
            { textPl: 'Podpunkty (a, b, c) dokładnie uszczegóławiają wydarzenia zawarte w punktach głównych (1, 2, 3)', correct: true },
            { textPl: 'Podpunkty służą do wpisywania numerów telefonów i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'W planie szczegółowym nie wolno używać liter i wracasz prosto do domu po lekcjach przed lekcją', correct: false }
          ]
        },
        {
          id: 'inv_ep3_3', sliceLabel: 'OPIS PRZEDMIOTU', color: '#f59e0b', badge: 'KOMPOZYCJA', speakText: 'Od ogółu do szczegółu!',
          options: [
            { textPl: 'Zacznij od nazwy i przeznaczenia, opisz kształt, materiał, kolor, a na końcu cechy szczególne', correct: true },
            { textPl: 'Zacznij od najmniejszej śrubki i nie podawaj nazwy przedmiotu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wypisz same liczby bez żadnych przymiotników (np. jeden, dwa, dziesięć, sto punktów) w klasie', correct: false }
          ]
        },
        {
          id: 'inv_ep3_4', sliceLabel: 'ROLA AKAPITU', color: '#ef4444', badge: 'WCIĘCIE', speakText: 'Nowa myśl – nowy akapit!',
          options: [
            { textPl: 'Każdą nową część wypowiedzi (wstęp, kolejne wątki, zakończenie) zaczynamy od wcięcia akapitowego', correct: true },
            { textPl: 'Akapit robi się tylko na samym końcu pracy podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false },
            { textPl: 'Wcięcia akapitowe są zakazane na egzaminie podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false }
          ]
        },
        {
          id: 'inv_ep3_5', sliceLabel: 'SŁOWNICTWO PRZESTRZENNE', color: '#8b5cf6', badge: 'PLASTYKA', speakText: 'W głębi, na pierwszym planie...',
          options: [
            { textPl: 'Określenia: «na pierwszym planie», «w tle», «po prawej stronie» porządkują przestrzeń opisu', correct: true },
            { textPl: 'Wystarczy powtarzać słowo «tutaj» i «tam» (np. tarcza, zbroja, hełm, miecz bojowy) w klasie', correct: false },
            { textPl: 'Opis krajobrazu nie powinien zawierać żadnych słów o położeniu i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 4 (Klasa 6: Budowa Słowa – Słowotwórstwo)',
      chestWords: [
        { word: 'Podstawa', cleanWord: 'Podstawa', phonetic: '[Pod-sta-wa] • Gốc từ ngữ pháp', plMeaning: 'Podstawa słowotwórcza – wyraz, od którego tworzymy nowe słowo po dodaniu formantu.', vnMeaning: 'Từ gốc — Cơ sở ngữ pháp để gắn thêm phụ tố tạo thành từ phái sinh mới.', color: '#3b82f6' },
        { word: 'Przedrostek', cleanWord: 'Przedrostek', phonetic: '[Przed-ro-stek] • Tiền tố ở đầu từ', plMeaning: 'Formant dodawany na początku wyrazu zmieniający jego znaczenie (np. wy-naleźć, z-budować).', vnMeaning: 'Tiền tố — Phụ tố thêm vào đầu từ làm biến đổi sắc thái ý nghĩa của từ gốc.', color: '#10b981' },
        { word: 'Przyrostek', cleanWord: 'Przyrostek', phonetic: '[Przy-ro-stek] • Hậu tố ở đuôi từ', plMeaning: 'Formant dodawany na końcu wyrazu tworzący np. nazwę wykonawcy (np. pis-arz, badacz).', vnMeaning: 'Hậu tố — Phụ tố thêm vào đuôi từ tạo từ chỉ nghề nghiệp, công cụ hay tính chất.', color: '#f59e0b' },
        { word: 'Rdzeń', cleanWord: 'Rdzeń', phonetic: '[Rdzeń] • Căn tố chung', plMeaning: 'Wspólna, niepodzielna cząstka znaczeniowa łącząca wszystkie wyrazy w danej rodzinie.', vnMeaning: 'Căn tố — Phần cốt lõi chung mang ý nghĩa gốc của cả gia đình từ ngữ.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep4_1', sliceLabel: 'PRZEDROSTEK ZMIENIA SENS', color: '#3b82f6', badge: 'FORMANT', speakText: 'Pisać, na-pisać, prze-pisać!',
          options: [
            { textPl: 'Przedrostki (na-, prze-, wy-, o-) dodajemy na początku podstawy, by utworzyć nowe słowo', correct: true },
            { textPl: 'Przedrostek dodaje się po kropce na końcu zdania i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przedrostek to to samo co wielka litera (np. szybki, zwinny, waleczny rycerz) na lekcji', correct: false }
          ]
        },
        {
          id: 'inv_ep4_2', sliceLabel: 'PRZYROSTEK TWORZY ZAWÓD', color: '#10b981', badge: 'WYKONAWCA', speakText: 'Malarz, murarz, pisarz!',
          options: [
            { textPl: 'Przyrostek -arz tworzy nazwy wykonawców czynności (np. mur → murarz, druk → drukarz)', correct: true },
            { textPl: 'Przyrostek służy wyłącznie do zmiękczania spółgłosek i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przyrostek to błąd ortograficzny podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        },
        {
          id: 'inv_ep4_3', sliceLabel: 'RODZINA WYRAZÓW', color: '#f59e0b', badge: 'POKREWIEŃSTWO', speakText: 'Wspólny rdzeń!',
          options: [
            { textPl: 'Dom, domek, domowy, domator, zadomowić się to wyrazy pokrewne mające wspólny rdzeń «dom»', correct: true },
            { textPl: 'To słowa, które przypadkowo zaczynają się na tę samą literę i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'To wyrazy z obcego języka podczas porannej zbiórki przed rozpoczęciem lekcji na przerwie', correct: false }
          ]
        },
        {
          id: 'inv_ep4_4', sliceLabel: 'WYRAZY POKREWNE A SYNONIMY', color: '#ef4444', badge: 'ROZRÓŻNIENIE', speakText: 'Nie myl pojęć!',
          options: [
            { textPl: 'Wyrazy pokrewne mają wspólny rdzeń (szkoła – szkolny); synonimy znaczą to samo, ale mają inne rdzenie (szkoła – uczelnia)', correct: true },
            { textPl: 'Wyrazy pokrewne i synonimy to dokładnie to samo pojęcie językowe (np. szkoła – szkolny to identyczne wyrazy bliskoznaczne)', correct: false },
            { textPl: 'Synonimy to wyrazy, które koniecznie muszą rymować się ze sobą na końcu kolejnych wersów w wierszu (np. szkoła – koła)', correct: false }
          ]
        },
        {
          id: 'inv_ep4_5', sliceLabel: 'OBOCZNOŚCI GŁOSKOWE', color: '#8b5cf6', badge: 'WYMIANA', speakText: 'Ręka – rączka, k : cz!',
          options: [
            { textPl: 'Wymiana głosek w rdzeniu podczas tworzenia słów i odmiany (np. rĘka : rĄczka, k : cz)', correct: true },
            { textPl: 'Oboczność to dopisanie losowej litery na końcu wyrazu (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Oboczności występują tylko w językach obcych podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 5 (Klasa 7: Pisma Oficjalne – Podanie i List Oficjalny)',
      chestWords: [
        { word: 'Złożenie', cleanWord: 'Złożenie', phonetic: '[Zło-że-nie] • Từ ghép có nối -o-', plMeaning: 'Wyraz utworzony z dwóch podstaw połączonych cząstką -o- lub -i- (np. par-o-wóz, żyw-o-płot).', vnMeaning: 'Từ ghép nối — Từ cấu tạo bởi hai gốc từ liên kết với nhau bằng âm chèn -o- hoặc -i-.', color: '#3b82f6' },
        { word: 'Podanie', cleanWord: 'Podanie', phonetic: '[Po-da-nie] • Đơn kiến nghị hành chính', plMeaning: 'Oficjalne pismo skierowane do dyrektora szkoły lub instytucji z formalną prośbą.', vnMeaning: 'Đơn xin / Đơn kiến nghị — Văn bản hành chính trang trọng gửi ban giám hiệu hoặc cơ quan.', color: '#10b981' },
        { word: 'List oficjalny', cleanWord: 'List oficjalny', phonetic: '[Thư tín hành chính trang trọng]', plMeaning: 'Korespondencja urzędowa zachowująca powagę, jasny cel i oficjalną etykietę językową.', vnMeaning: 'Thư tín chính thức — Thư trao đổi công vụ tuân thủ các quy tắc nghi thức và phong cách trang trọng.', color: '#f59e0b' },
        { word: 'Zwrot grzecznościowy', cleanWord: 'Zwrot', phonetic: '[Kính ngữ xưng hô]', plMeaning: 'Formuły szacunku pisane wielką literą: «Szanowny Panie Dyrektorze», «Z poważaniem».', vnMeaning: 'Kính ngữ — Các cụm từ xưng hô tôn trọng viết hoa: Kính gửi Thầy Hiệu trưởng, Trân trọng.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep5_1', sliceLabel: 'ZROST A ZŁOŻENIE', color: '#3b82f6', badge: 'WYRAZY ZŁOŻONE', speakText: 'Wielkanoc vs Parowóz!',
          options: [
            { textPl: 'Zrost łączy słowa bez spójki (Wielkanoc), a złożenie łączy dwie podstawy spójką -o- (parowóz)', correct: true },
            { textPl: 'Zrost to złamana ręka, a złożenie to składanie klocków i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wszystkie wyrazy złożone piszemy z myślnikiem (np. szybki, zwinny, waleczny rycerz) na lekcji', correct: false }
          ]
        },
        {
          id: 'inv_ep5_2', sliceLabel: 'STRUKTURA PODANIA', color: '#10b981', badge: 'UKŁAD', speakText: 'Gdzie data, gdzie podpis?',
          options: [
            { textPl: 'Miejscowość i data w prawym górnym rogu, dane nadawcy po lewej, adresat po prawej, nagłówek, treść, podpis', correct: true },
            { textPl: 'Datę piszemy na samym dole, a podpis na środku kartki wielkimi literami (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'W podaniu nie podaje się żadnych danych adresata w czytelni biblioteki po skończonych lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 'inv_ep5_3', sliceLabel: 'RZECZOWE UZASADNIENIE', color: '#f59e0b', badge: 'ARGUMENTACJA', speakText: 'Dlaczego prosisz?',
          options: [
            { textPl: 'W podaniu precyzyjnie wyjaśniamy motywy prośby, powołując się na fakty i regulaminy', correct: true },
            { textPl: 'Piszemy, że chcemy to dostać, bo tak nam się podoba (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Uzasadnienie powinno być napisane wierszem rymowanym i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep5_4', sliceLabel: 'WIELKA LITERA Z SZACUNKU', color: '#ef4444', badge: 'ETYKIETA', speakText: 'Pana, Pani, Państwa!',
          options: [
            { textPl: 'W listach oficjalnych zaimki do odbiorcy («Zwracam się do Pana...») piszemy ZAWSZE wielką literą', correct: true },
            { textPl: 'Piszemy małą literą, by zaoszczędzić miejsce na początku i na końcu wypowiedzi pisemnej w klasie', correct: false },
            { textPl: 'Zaimki w liście zastępuje się rysunkami uśmiechniętych buziek (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'inv_ep5_5', sliceLabel: 'ZAŁĄCZNIKI W PISMACH', color: '#8b5cf6', badge: 'DOKUMENTY', speakText: 'Co dołączasz?',
          options: [
            { textPl: 'Pod treścią podania po lewej stronie wymieniamy dołączone dokumenty pod hasłem «Załączniki:»', correct: true },
            { textPl: 'Załączniki wrzucamy luzem bez żadnego spisu i wracasz prosto do domu po lekcjach na przerwie', correct: false },
            { textPl: 'W pismach urzędowych nie wolno dołączać żadnych załączników i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 6 (Klasa 8: Warsztat Opowiadania – Akcja i Dialog)',
      chestWords: [
        { word: 'Wstęp', cleanWord: 'Wstęp', phonetic: '[Wstęp] • Mở đầu câu chuyện', plMeaning: 'Zarysowanie czasu, miejsca akcji i przedstawienie głównych postaci na początku opowiadania.', vnMeaning: 'Mở bài — Giới thiệu bối cảnh thời gian, không gian và các nhân vật xuất hiện đầu truyện.', color: '#3b82f6' },
        { word: 'Rozwinięcie', cleanWord: 'Rozwinięcie', phonetic: '[Roz-wi-nię-cie] • Thân bài diễn biến', plMeaning: 'Ciąg dynamicznych wydarzeń prowadzący przez narastające napięcie prosto do punktu kulminacyjnego.', vnMeaning: 'Thân bài — Diễn biến chuỗi sự việc kịch tính dẫn tới đỉnh điểm cao trào của câu chuyện.', color: '#10b981' },
        { word: 'Zwrot akcji', cleanWord: 'Zwrot akcji', phonetic: '[Bước ngoặt bất ngờ đảo lộn]', plMeaning: 'Nieoczekiwana zmiana sytuacji bohatera ożywiająca fabułę wypracowania egzaminacyjnego.', vnMeaning: 'Bước ngoặt — Biến cố bất ngờ làm xoay chuyển toàn bộ tình thế của nhân vật.', color: '#f59e0b' },
        { word: 'Puenta', cleanWord: 'Puenta', phonetic: '[Puen-ta] • Điểm sáng kết bài', plMeaning: 'Zaskakujące lub głębokie zakończenie opowiadania zostawiające czytelnika z życiową refleksją.', vnMeaning: 'Điểm nhấn kết bài — Lời đúc kết sâu sắc bất ngờ để lại dư âm suy ngẫm cho người đọc.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep6_1', sliceLabel: 'PUNKT KULMINACYJNY', color: '#3b82f6', badge: 'NAPIĘCIE', speakText: 'Szczyt emocji!',
          options: [
            { textPl: 'Moment największego napięcia i próby, po którym następuje rozwiązanie akcji opowiadania', correct: true },
            { textPl: 'To pierwsze słowo we wstępie wypracowania (np. biega, walczy, trenuje na sali) w klasie', correct: false },
            { textPl: 'To spis treści na końcu zeszytu podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false }
          ]
        },
        {
          id: 'inv_ep6_2', sliceLabel: 'ZAPIS DIALOGU Z MYŚLNIKIEM', color: '#10b981', badge: 'INTERPUNKCJA', speakText: 'Nowa linijka i pauza!',
          options: [
            { textPl: 'Każdą wypowiedź postaci rozpoczynamy od nowej linii z myślnikiem (pauzą dialogową)', correct: true },
            { textPl: 'Dialog zapisujemy w nawiasach okrągłych w jednym ciągłym zdaniu i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'W dialogu nie wolno używać znaków zapytania i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep6_3', sliceLabel: 'OPIS PRZEŻYĆ WEWNĘTRZNYCH', color: '#f59e0b', badge: 'EMOCJE', speakText: 'Co czuje bohater?',
          options: [
            { textPl: 'Opisuj stany emocjonalne: «Serce biło mu jak młotem», «Poczuł ulgę i dumę z osiągniętego celu»', correct: true },
            { textPl: 'Zabronione jest wspominanie o jakichkolwiek uczuciach bohatera i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wystarczy napisać: «Był zły i koniec» w czytelni biblioteki po skończonych lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'inv_ep6_4', sliceLabel: 'RETROSPEKCJA', color: '#ef4444', badge: 'KOMPOZYCJA', speakText: 'Wspomnienie z przeszłości!',
          options: [
            { textPl: 'Przywołanie wcześniejszych wspomnień bohatera rzucające nowe światło na obecne wydarzenia', correct: true },
            { textPl: 'To wykreślenie ostatniego akapitu podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false },
            { textPl: 'To błąd polegający na powtarzaniu tego samego wyrazu (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'inv_ep6_5', sliceLabel: 'LIMIT SŁÓW NA EGZAMINIE', color: '#8b5cf6', badge: 'WYMÓG CKE', speakText: 'Minimum 200 słów!',
          options: [
            { textPl: 'Wypracowanie twórcze musi mieć co najmniej 200 słów, zachowaną kompozycję i logiczne akapity', correct: true },
            { textPl: 'Wystarczy 50 słów, byle były bardzo trudne i wracasz prosto do domu po lekcjach przed lekcją', correct: false },
            { textPl: 'Opowiadanie nie powinno mieć żadnego zakończenia w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 7 (Lektury CKE I: Pomysłowość, Działanie i Współpraca)',
      chestWords: [
        { word: 'Wiedza', cleanWord: 'Wiedza', phonetic: '[Wie-dza] • Tri thức thực tiễn', plMeaning: 'Praktyczna znajomość świata i nauki pomagająca bohaterom rozwiązywać z pozoru nierozwiązywalne problemy.', vnMeaning: 'Tri thức — Sự hiểu biết sâu rộng giúp các nhân vật vượt qua thử thách cam go trong cuộc sống.', color: '#3b82f6' },
        { word: 'Działanie', cleanWord: 'Działanie', phonetic: '[Dzia-ła-nie] • Hành động quyết đoán', plMeaning: 'Przekuwanie pomysłów w konkretne czyny: odwaga i spryt młodych harcerzy w „Kamieniach na szaniec”.', vnMeaning: 'Hành động — Biến ý chí thành hành động dũng cảm của các thanh niên Szare Szeregi.', color: '#10b981' },
        { word: 'Współpraca', cleanWord: 'Współpraca', phonetic: '[Współ-pra-ca] • Tinh thần hợp tác đồng lòng', plMeaning: 'Zaufanie i wzajemna pomoc całego zespołu w trudnych chwilach; nikt nie zostaje sam.', vnMeaning: 'Hợp tác đồng lòng — Sức mạnh đoàn kết của tập thể cùng hướng tới mục tiêu cao cả.', color: '#f59e0b' },
        { word: 'Odwaga', cleanWord: 'Odwaga', phonetic: '[Od-wa-ga] • Bản lĩnh kiên cường', plMeaning: 'Męstwo w obliczu przeciwności losu i wierność wyznawanym ideałom dobra i wolności.', vnMeaning: 'Bản lĩnh — Lòng quả cảm trước hiểm nguy và sự trung thành với lý tưởng cao đẹp.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep7_1', sliceLabel: 'MAŁY SABOTAŻ', color: '#3b82f6', badge: 'POMYSŁOWOŚĆ', speakText: 'Kotwica Polski Walczącej!',
          options: [
            { textPl: 'Rudy opracował specjalny wieczny piórnik do malowania kotwic wysoko na Pomniku Lotnika', correct: true },
            { textPl: 'Harcerze malowali losowe napisy kredą na własnych biurkach i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Alek zrezygnował z jakiejkolwiek działalności konspiracyjnej i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep7_2', sliceLabel: 'PILOT NA PUSTYNI', color: '#10b981', badge: 'MAŁY KSIĄŻĘ', speakText: 'Naprawa silnika samolotu!',
          options: [
            { textPl: 'Pilot na Saharze naprawia silnik i jednocześnie uczy się od Małego Księcia patrzeć na świat sercem', correct: true },
            { textPl: 'Pilot zostawił samolot i uciekł na piechotę bez wody i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Mały Książę sam naprawił silnik za pomocą czarodziejskiej różdżki i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep7_3', sliceLabel: 'DZIAŁANIE SCROOGE’A', color: '#f59e0b', badge: 'CZYNY, NIE SŁOWA', speakText: 'Konkretna pomoc!',
          options: [
            { textPl: 'Scrooge nie tylko obiecał poprawę, ale natychmiast kupił wielkiego indyka i podniósł pensję Bobowi', correct: true },
            { textPl: 'Scrooge zapisał swoje obietnice na kartce i natychmiast o nich zapomniał i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Scrooge zwolnił wszystkich pracowników w Boże Narodzenie podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'inv_ep7_4', sliceLabel: 'AKCJA POD ARSENAŁEM', color: '#ef4444', badge: 'ORGANIZACJA', speakText: 'Precyzja i braterstwo!',
          options: [
            { textPl: 'Perfekcyjnie zaplanowana i przeprowadzona akcja zbrojna mająca na celu odbicie skatowanego przyjaciela', correct: true },
            { textPl: 'Przypadkowe spotkanie kolegów pod sklepem przed samym wejściem do sali lekcyjnej w szkole przed lekcją', correct: false },
            { textPl: 'Zawody sportowe na warszawskich ulicach podczas porannej zbiórki przed rozpoczęciem lekcji na przerwie', correct: false }
          ]
        },
        {
          id: 'inv_ep7_5', sliceLabel: 'MĄDROŚĆ Z DZIAŁANIA', color: '#8b5cf6', badge: 'WARTOŚĆ', speakText: 'Praca zespołowa!',
          options: [
            { textPl: 'Wiedza, pomysłowość i zgrany zespół pozwalają pokonać największe przeszkody w nauce i w życiu', correct: true },
            { textPl: 'Najlepiej pracować samemu i nie dzielić się wiedzą z nikim i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Działanie bez planu zawsze przynosi najlepsze efekty podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Wynalazczyni – Epizod 8 (Formy Wypowiedzi II: Przemówienie i Retoryka)',
      chestWords: [
        { word: 'Przemówienie', cleanWord: 'Przemówienie', phonetic: '[Prze-mó-wie-nie] • Diễn văn thuyết phục', plMeaning: 'Publiczne wystąpienie mające na celu przekonać słuchaczy do określonej racji lub projektu.', vnMeaning: 'Bài diễn văn — Lời phát biểu trước công chúng nhằm thuyết phục người nghe về một ý tưởng.', color: '#3b82f6' },
        { word: 'Pytanie retoryczne', cleanWord: 'Pytanie retoryczne', phonetic: '[Câu hỏi tu từ gợi mở]', plMeaning: 'Pytanie zadane nie po to, by uzyskać odpowiedź, lecz by skłonić odbiorców do głębokiego namysłu.', vnMeaning: 'Câu hỏi tu từ — Câu hỏi không cần giải đáp trực tiếp mà nhằm kích thích tư duy người nghe.', color: '#10b981' },
        { word: 'Słuchacze', cleanWord: 'Słuchacze', phonetic: '[Słu-cha-cze] • Khán thính giả / Độc giả', plMeaning: 'Odbiorcy wystąpienia, do których zwracamy się bezpośrednio i z pełnym szacunkiem.', vnMeaning: 'Khán thính giả — Người nghe mà diễn giả hướng lời tới với sự trân trọng chân thành.', color: '#f59e0b' },
        { word: 'Apel', cleanWord: 'Apel', phonetic: '[A-pel] • Lời kêu gọi hành động', plMeaning: 'Gorące wezwanie odbiorców do podjęcia konkretnego działania na zakończenie mowy.', vnMeaning: 'Lời kêu gọi — Lời hiệu triệu mạnh mẽ thúc giục mọi người cùng chung tay thực hiện mục tiêu.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'inv_ep8_1', sliceLabel: 'NAGŁÓWEK PRZEMÓWIENIA', color: '#3b82f6', badge: 'ZWROT DO ODBIORCÓW', speakText: 'Drodzy Przyjaciele!',
          options: [
            { textPl: '«Drodzy Nauczyciele, Koleżanki i Koledzy!» – bezpośredni i kulturalny zwrot na początku', correct: true },
            { textPl: '«Hej wy tam na dole, posłuchajcie mnie!» i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'Zacznij mówić bez żadnego powitania i patrz w podłogę i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep8_2', sliceLabel: 'PYTANIE RETORYCZNE W PRZEMÓWIENIU', color: '#10b981', badge: 'RETORYKA', speakText: 'Skłoń do myślenia!',
          options: [
            { textPl: '«Czyż nie zależy nam wszystkim na tym, by nasza szkoła była miejscem nowoczesnym i przyjaznym?»', correct: true },
            { textPl: '«Która jest godzina na zegarku w sali?» podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false },
            { textPl: '«Kto z was zjadł moje śniadanie?» podczas porannej zbiórki przed rozpoczęciem lekcji po dzwonku', correct: false }
          ]
        },
        {
          id: 'inv_ep8_3', sliceLabel: 'SIŁA ARGUMENTÓW W WYSTĄPIENIU', color: '#f59e0b', badge: 'PERSWAZJA', speakText: 'Przekonuj faktami!',
          options: [
            { textPl: 'Podawaj konkretne korzyści, przykłady sukcesów i logiczne uzasadnienia swojego projektu', correct: true },
            { textPl: 'Groź słuchaczom konsekwencjami, jeśli się z tobą nie zgodzą i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Mów bardzo cicho i szybko, by nikt niczego nie zrozumiał i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'inv_ep8_4', sliceLabel: 'APEL KOŃCOWY', color: '#ef4444', badge: 'WEZWANIE', speakText: 'Zacznijmy działać!',
          options: [
            { textPl: '«Dlatego apeluję do każdego z Was: połączmy siły i zrealizujmy ten pomysł już od dzisiaj!»', correct: true },
            { textPl: '«Dziękuję, właściwie to nic ważnego, idźcie już do domu, zrobimy to wspólnie po lekcjach!»', correct: false },
            { textPl: '«Nie warto się starać, bo i tak nic się nie uda» podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'inv_ep8_5', sliceLabel: 'SUKCES WYSTĄPIENIA', color: '#8b5cf6', badge: 'FINAŁ', speakText: 'Oklaski słuchaczy!',
          options: [
            { textPl: 'Pewność siebie, logiczna struktura i szacunek dla słuchaczy gwarantują sukces każdego wystąpienia', correct: true },
            { textPl: 'Przemówienie udaje się tylko wtedy, gdy trwa co najmniej trzy godziny i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Najlepiej czytać z pogniecionej kartki bez kontaktu wzrokowego i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    }
  },

  // ──────────────────────────── WITCH (Czarownica) ────────────────────────────
  // Środki stylistyczne, piękno poezji, motywy literackie lektur CKE i dojrzała interpretacja
  witch: {
    1: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 1 (Klasa 4: Piękno Słowa – Wiersz, Rym i Dźwięk)',
      chestWords: [
        { word: 'Wiersz', cleanWord: 'Wiersz', phonetic: '[Wiersz] • Bài thơ trữ tình', plMeaning: 'Utwór o szczególnej budowie podzielony na wersy i zwrotki, pełen melodii, rymów i uczuć.', vnMeaning: 'Bài thơ — Tác phẩm phân dòng và khổ rõ ràng, giàu nhạc điệu, vần điệu và cảm xúc.', color: '#3b82f6' },
        { word: 'Rym', cleanWord: 'Rym', phonetic: '[Rym] • Vần điệu câu thơ', plMeaning: 'Podobne lub jednakowe brzmienie końcówek wyrazów w wersach (np. chmury – góry, woda – uroda).', vnMeaning: 'Vần điệu — Sự hòa âm ở phần đuôi các từ cuối dòng thơ tạo nên nhạc tính êm dịu.', color: '#10b981' },
        { word: 'Zwrotka', cleanWord: 'Zwrotka', phonetic: '[Zwrot-ka] • Khổ thơ hoàn chỉnh', plMeaning: 'Strofa – wyodrębniona graficznie grupa kilku wersów tworząca całość kompozycyjną wiersza.', vnMeaning: 'Khổ thơ — Nhóm các dòng thơ được phân cách rõ ràng thành một chỉnh thể nghệ thuật.', color: '#f59e0b' },
        { word: 'Dźwięk', cleanWord: 'Dźwięk', phonetic: '[Dźwięk] • Âm thanh từ ngữ', plMeaning: 'Onomatopeja (dźwiękonaśladownictwo) – słowa naśladujące dźwięki przyrody (np. szum, świst, plusk).', vnMeaning: 'Từ tượng thanh — Từ ngữ mô phỏng trực tiếp âm thanh tự nhiên (rì rào, vút qua, tí tách).', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep1_1', sliceLabel: 'CO TO JEST RYM?', color: '#3b82f6', badge: 'HARMONIA', speakText: 'Posłuchaj brzmienia!',
          options: [
            { textPl: 'Jednakowe lub podobne brzmienie końcówek słów na końcu linijek wiersza', correct: true },
            { textPl: 'Wyraz mający dokładnie sześć liter (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Znak zapytania na końcu zdania podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'wi_ep1_2', sliceLabel: 'WERS A ZWROTKA', color: '#10b981', badge: 'BUDOWA WIERSZA', speakText: 'Linijka i strofa!',
          options: [
            { textPl: 'Wers to pojedyncza linijka tekstu, a zwrotka (strofa) to wydzielona grupa kilku wersów', correct: true },
            { textPl: 'Wers to tytuł książki, a zwrotka to nazwisko autora i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Wiersz nie posiada żadnych wersów w drodze powrotnej ze szkoły prosto do domu w klasie', correct: false }
          ]
        },
        {
          id: 'wi_ep1_3', sliceLabel: 'ONOMATOPEJA', color: '#f59e0b', badge: 'DŹWIĘKONAŚLADOWCZOŚĆ', speakText: 'Szum, świst, plusk!',
          options: [
            { textPl: 'Wyrazy naśladujące dźwięki otoczenia (np. «szumiał wicher», «kapała woda»)', correct: true },
            { textPl: 'Słowa pochodzące z języka matematyki i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Znaki interpunkcyjne stawiane w środku zdania i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'wi_ep1_4', sliceLabel: 'RYMY DOKŁADNE', color: '#ef4444', badge: 'DŹWIĘCZNOŚĆ', speakText: 'Las – czas!',
          options: [
            { textPl: 'Rymy dokładne mają identyczne brzmienie końcowych głosek (np. las – czas, biała – śmiała)', correct: true },
            { textPl: 'Rymy dokładne to słowa oznaczające dokładnie to samo (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'To słowa zapisane wielkimi literami w wypowiedziach pisemnych i ustnych w szkole w klasie', correct: false }
          ]
        },
        {
          id: 'wi_ep1_5', sliceLabel: 'RECYTACJA Z INTONACJĄ', color: '#8b5cf6', badge: 'INTERPRETACJA', speakText: 'Czytaj z uczuciem!',
          options: [
            { textPl: 'Recytowanie wiersza wymaga właściwego tempa, głosu, modulacji i pauz na znakach przestankowych', correct: true },
            { textPl: 'Wiersz należy czytać jak najszybciej na jednym oddechu podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Należy czytać monotonnym, cichym szeptem bez żadnych emocji i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    2: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 2 (Klasa 4: Malowanie Obrazów Słowem – Epitet i Porównanie)',
      chestWords: [
        { word: 'Epitet', cleanWord: 'Epitet', phonetic: '[E-pi-tet] • Tính từ tu từ miêu tả', plMeaning: 'Określenie rzeczownika (zazwyczaj przymiotnik) pobudzające wyobraźnię (np. złociste słońce, mroźny wiatr).', vnMeaning: 'Tính từ tu từ — Từ đi kèm danh từ tô đậm sắc thái hình ảnh, cảm xúc và màu sắc.', color: '#3b82f6' },
        { word: 'Porównanie', cleanWord: 'Porównanie', phonetic: '[Po-rów-na-nie] • Phép so sánh tu từ', plMeaning: 'Zestawienie dwóch zjawisk za pomocą słów: jak, jakby, niby (np. szybki jak wicher, blady jak księżyc).', vnMeaning: 'Phép so sánh — Đối chiếu hai sự vật hiện tượng qua các từ nối: như, như thể, tựa như.', color: '#10b981' },
        { word: 'Baśń', cleanWord: 'Baśń', phonetic: '[Baśń] • Truyện cổ tích thần kỳ', plMeaning: 'Utwór literacki z motywami magii, walki dobra ze złem i triumfem sprawiedliwości.', vnMeaning: 'Truyện cổ tích — Tác phẩm kỳ ảo dân gian với sự chiến thắng tất yếu của cái thiện.', color: '#f59e0b' },
        { word: 'Morał', cleanWord: 'Morał', phonetic: '[Mo-rał] • Bài học luân lý đạo đức', plMeaning: 'Pouczenie wynikające z bajki lub baśni zawierające ponadczasową mądrość życiową dla czytelnika.', vnMeaning: 'Bài học luân lý — Lời đúc kết giáo dục đạo đức sâu sắc rút ra ở phần cuối truyện.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep2_1', sliceLabel: 'ROZPOZNAWANIE EPITETU', color: '#3b82f6', badge: 'BARWA', speakText: 'Srebrzysty potok!',
          options: [
            { textPl: 'W wyrażeniu «srebrzysty potok» słowo «srebrzysty» to epitet poetycki', correct: true },
            { textPl: '«Srebrzysty» to czasownik w czasie przeszłym (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: '«Potok» to epitet określający wodę (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'wi_ep2_2', sliceLabel: 'JAK DZIAŁA PORÓWNANIE?', color: '#10b981', badge: 'JAK? NIBY?', speakText: 'Dzielny jak lew!',
          options: [
            { textPl: '«Dzielny jak lew» – zestawia męstwo bohatera z powszechnie znaną odwagą lwa', correct: true },
            { textPl: 'Oznacza, że człowiek dosłownie zamienił się w prawdziwe dzikie zwierzę w lesie', correct: false },
            { textPl: 'To rażący błąd językowy, którego pod żadnym pozorem nie wolno w tekście używać', correct: false }
          ]
        },
        {
          id: 'wi_ep2_3', sliceLabel: 'ELEMENTY BAŚNI', color: '#f59e0b', badge: 'FANTASTYKA', speakText: 'Cudowny świat!',
          options: [
            { textPl: 'Magiczne przedmioty, gadające zwierzęta, nieokreślony czas («dawno, dawno temu») i zwycięstwo dobra', correct: true },
            { textPl: 'Prawdziwe daty historyczne i wykresy statystyczne i wracasz prosto do domu po lekcjach przed lekcją', correct: false },
            { textPl: 'Brak jakichkolwiek postaci fantastycznych w czytelni biblioteki po skończonych lekcjach na przerwie', correct: false }
          ]
        },
        {
          id: 'wi_ep2_4', sliceLabel: 'MORAŁ BAŚNI', color: '#ef4444', badge: 'MĄDROŚĆ', speakText: 'Czego uczy opowieść?',
          options: [
            { textPl: 'Wskazuje, że uczciwość, dobroć i odwaga zawsze zostają nagrodzone, a zło ukarane', correct: true },
            { textPl: 'Uczy jak oszukiwać innych i zdobywać złoto i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Morał mówi, że nie warto nikomu ufać ani pomagać i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'wi_ep2_5', sliceLabel: 'PLASTYKA JĘZYKA', color: '#8b5cf6', badge: 'WYOBRAŹNIA', speakText: 'Maluj słowami!',
          options: [
            { textPl: 'Dzięki epitetom i porównaniom czytelnik potrafi wyobrazić sobie opisywany świat jak na obrazie', correct: true },
            { textPl: 'Środki stylistyczne służą tylko do tego, by wydłużyć wypracowanie i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'W wypracowaniu należy unikać wszelkich przymiotników podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        }
      ]
    },
    3: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 3 (Klasa 5: Wyobraźnia i Przenośnia – Metafora i Uosobienie)',
      chestWords: [
        { word: 'Metafora', cleanWord: 'Metafora', phonetic: '[Me-ta-fo-ra] • Phép ẩn dụ tu từ', plMeaning: 'Przenośnia – nietypowe zestawienie słów zyskujące nowe, niedosłowne znaczenie (np. złote serce).', vnMeaning: 'Phép ẩn dụ — Cách kết hợp từ ngữ độc đáo tạo nên tầng nghĩa mới không hiểu theo nghĩa đen.', color: '#3b82f6' },
        { word: 'Uosobienie', cleanWord: 'Uosobienie', phonetic: '[U-o-so-bie-nie] • Phép nhân hoá', plMeaning: 'Personifikacja – nadanie cech ludzkich zwierzętom, roślinom lub siłom przyrody (np. las zapłakał).', vnMeaning: 'Nhân hoá — Gán cho thiên nhiên hoặc đồ vật những đặc điểm, hành động và cảm xúc của con người.', color: '#10b981' },
        { word: 'Przenośnia', cleanWord: 'Przenośnia', phonetic: '[Prze-noś-nia] • Nghĩa bóng chuyển đổi', plMeaning: 'Polska nazwa metafory; przeniesienie cech jednego zjawiska na inne w celu wzbogacenia wyrazu.', vnMeaning: 'Nghĩa bóng — Sự chuyển đổi ngữ nghĩa từ cụ thể sang trừu tượng nhằm tăng sức biểu cảm.', color: '#f59e0b' },
        { word: 'Nastrój', cleanWord: 'Nastrój', phonetic: '[Na-strój] • Âm hưởng tâm trạng', plMeaning: 'Emocjonalny klimat utworu: tajemniczy, radosny, melancholijny, groźny lub podniosły.', vnMeaning: 'Tâm trạng tác phẩm — Bầu không khí cảm xúc bao trùm chi phối toàn bộ mạch cảm xúc bài thơ.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep3_1', sliceLabel: 'PRZYKŁAD METAFORY', color: '#3b82f6', badge: 'PRZENOSNIA', speakText: 'Morze myśli!',
          options: [
            { textPl: '«Morze myśli» i «promień nadziei» – to metafory, bo nie oznaczają dosłownej słonej wody ani światła', correct: true },
            { textPl: '«Morze myśli» to prawdziwe morze leżące obok Bałtyku i wracasz prosto do domu po lekcjach w klasie', correct: false },
            { textPl: 'To błąd rzeczowy w tekście podczas przygotowań do trudnego sprawdzianu z polskiego przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep3_2', sliceLabel: 'UOSOBIENIE W PRZYRODZIE', color: '#10b981', badge: 'PERSONIFIKACJA', speakText: 'Wiatr szepcze tajemnice!',
          options: [
            { textPl: '«Wiatr szepcze w gałęziach drzew» – wiatr otrzymał ludzką cechę mówienia szeptem', correct: true },
            { textPl: 'Wiatr poszedł do szkoły i zdał egzamin podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'To zwykłe zdanie oznajmujące bez żadnych środków stylistycznych i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'wi_ep3_3', sliceLabel: 'ANIMIZACJA (OŻYWIENIE)', color: '#f59e0b', badge: 'RUCH', speakText: 'Chmura goni chmurę!',
          options: [
            { textPl: 'Przypisanie przedmiotom nieożywionym cech istot żywych (np. «góra zaryczała», «kamień ucieka»)', correct: true },
            { textPl: 'Ożywienie to zamiana człowieka w posąg z kamienia na korytarzu w trakcie trwania dużej przerwy', correct: false },
            { textPl: 'To to samo co odmiana przez przypadki w czytelni biblioteki po skończonych lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'wi_ep3_4', sliceLabel: 'BUDOWANIE NASTROJU', color: '#ef4444', badge: 'KLIMAT', speakText: 'Mgła, cienie i blask księżyca!',
          options: [
            { textPl: 'Dobór słów o zmierzchu, tajemnicy i chłodzie tworzy nastrojowy klimat niepokoju i grozy', correct: true },
            { textPl: 'Nastrój w utworze zależy wyłącznie od koloru papieru w książce i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'W literaturze każdy wiersz ma dokładnie taki sam nastrój (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        },
        {
          id: 'wi_ep3_5', sliceLabel: 'MIEĆ ZŁOTE SERCE', color: '#8b5cf6', badge: 'FRAZEOLOGIZM', speakText: 'Związek frazeologiczny!',
          options: [
            { textPl: 'Oznacza, że ktoś jest niezwykle dobry, szlachetny i pomocny dla innych ludzi', correct: true },
            { textPl: 'Oznacza, że ktoś posiada serce zrobione z prawdziwego szczerego złota w klatce', correct: false },
            { textPl: 'To dosadne określenie człowieka bardzo chciwego, złośliwego oraz podstępnego', correct: false }
          ]
        }
      ]
    },
    4: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 4 (Klasa 6: Trzy Rodzaje Literackie – Epika, Liryka i Dramat)',
      chestWords: [
        { word: 'Epika', cleanWord: 'Epika', phonetic: '[E-pi-ka] • Thể loại tự sự / Văn xuôi', plMeaning: 'Rodzaj literacki pisany prozą; występuje narrator opowiadający o losach bohaterów i fabuła.', vnMeaning: 'Thể loại tự sự — Tác phẩm văn xuôi có người kể chuyện dẫn dắt chuỗi tình tiết và số phận nhân vật.', color: '#3b82f6' },
        { word: 'Liryka', cleanWord: 'Liryka', phonetic: '[Li-ry-ka] • Thể loại trữ tình / Thơ ca', plMeaning: 'Rodzaj literacki wyrażający przeżycia i emocje podmiotu lirycznego wierszem.', vnMeaning: 'Thể loại trữ tình — Tác phẩm thơ ca bộc lộ thế giới nội tâm và cảm xúc của nhân vật trữ tình.', color: '#10b981' },
        { word: 'Dramat', cleanWord: 'Dramat', phonetic: '[Dra-mat] • Kịch bản sân khấu', plMeaning: 'Rodzaj literacki przeznaczony na scenę; składa się z dialogów postaci oraz didaskaliów (wskazówek).', vnMeaning: 'Kịch bản sân khấu — Tác phẩm gồm lời thoại trực tiếp và chỉ dẫn sân khấu dành cho diễn viên.', color: '#f59e0b' },
        { word: 'Ballada', cleanWord: 'Ballada', phonetic: '[Bal-la-da] • Khúc ballad lãng mạn', plMeaning: 'Gatunek romantyczny łączący epikę, lirykę i dramat, pełen tajemniczości i ludowych wierzeń.', vnMeaning: 'Khúc ca ballad — Thể loại giao thoa thơ, truyện và kịch mang đậm màu sắc kỳ bí dân gian.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep4_1', sliceLabel: 'NARRATOR W EPICE', color: '#3b82f6', badge: 'OPOWIADACZ', speakText: 'Kto opowiada historię?',
          options: [
            { textPl: 'W epice występuje narrator przedstawiający świat i wydarzenia (np. w powieści, opowiadaniu)', correct: true },
            { textPl: 'W epice nie ma żadnych bohaterów ani fabuły i wracasz prosto do domu po lekcjach po dzwonku', correct: false },
            { textPl: 'Epika zawsze musi być podzielona na zwrotki i wracasz prosto do domu po lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'wi_ep4_2', sliceLabel: 'PODMIOT LIRYCZNY', color: '#10b981', badge: 'GŁOS WIERSZA', speakText: 'Kto mówi w wierszu?',
          options: [
            { textPl: 'W liryce swoje uczucia, zachwyt i myśli wyraża podmiot liryczny (nie mylić z autorem!)', correct: true },
            { textPl: 'Podmiot liryczny to zawsze król lub generał armii i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'W liryce w ogóle nikt się nie wypowiada i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        },
        {
          id: 'wi_ep4_3', sliceLabel: 'DIDASKALIA W DRAMACIE', color: '#f59e0b', badge: 'TEKST POBOCZNY', speakText: 'Wskazówki dla reżysera!',
          options: [
            { textPl: 'Didaskalia to tekst w nawiasach informujący o zachowaniu, gestach i wyglądzie sceny', correct: true },
            { textPl: 'Didaskalia to kwestie, które aktorzy krzyczą najgłośniej do widowni i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'To podpisy pod ilustracjami w podręczniku podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'wi_ep4_4', sliceLabel: 'ŚWITEZIANKA MICKIEWICZA', color: '#ef4444', badge: 'BALLADA', speakText: 'Tajemnica jeziora Świteź!',
          options: [
            { textPl: 'Łączy fabułę o strzelcu i dziewczynie, formę wiersza i dialogi z motywem kary za złamaną przysięgę', correct: true },
            { textPl: 'To artykuł naukowy o głębokości jeziora na Litwie i wracasz prosto do domu po lekcjach na przerwie', correct: false },
            { textPl: 'To krótki komiks z gazetki szkolnej podczas porannej zbiórki przed rozpoczęciem lekcji na przerwie', correct: false }
          ]
        },
        {
          id: 'wi_ep4_5', sliceLabel: 'TRZY FILARY LITERATURY', color: '#8b5cf6', badge: 'PODSUMOWANIE', speakText: 'Epika, liryka, dramat!',
          options: [
            { textPl: 'Wszystkie utwory literackie na świecie należą do jednego z trzech głównych rodzajów', correct: true },
            { textPl: 'Istnieje sto różnych rodzajów literackich podczas uroczystego apelu w auli szkolnej', correct: false },
            { textPl: 'Rodzaj literacki to to samo co rozmiar czcionki w druku (np. biega, walczy, trenuje na sali)', correct: false }
          ]
        }
      ]
    },
    5: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 5 (Klasa 7: Kunszt Słowa – Apostrofa, Symbol i Oksymoron)',
      chestWords: [
        { word: 'Apostrofa', cleanWord: 'Apostrofa', phonetic: '[A-po-stro-fa] • Lời hô gọi tha thiết', plMeaning: 'Bezpośredni, uroczysty zwrot do bóstwa, osoby, idei lub ojczyzny (np. «Litwo! Ojczyzno moja!»).', vnMeaning: 'Lời hô gọi tha thiết — Lời nói trực tiếp trang trọng hướng tới lý tưởng, người thân hay quê hương.', color: '#3b82f6' },
        { word: 'Symbol', cleanWord: 'Symbol', phonetic: '[Sym-bol] • Biểu tượng nghệ thuật đa nghĩa', plMeaning: 'Motyw mający sens dosłowny oraz ukryty, który można interpretować na wiele różnych sposobów.', vnMeaning: 'Biểu tượng — Hình tượng nghệ thuật đa tầng nghĩa gợi mở nhiều cách giải mã sâu sắc.', color: '#10b981' },
        { word: 'Oksymoron', cleanWord: 'Oksymoron', phonetic: '[Ok-sy-mo-ron] • Nghịch lý kết hợp đối lập', plMeaning: 'Zestawienie wyrazów o przeciwstawnych znaczeniach tworzące zaskakujący paradoks (np. «gorący lód»).', vnMeaning: 'Phép nghịch hợp — Sự kết hợp hai khái niệm trái ngược tạo nên nghịch lý giàu ý nghĩa.', color: '#f59e0b' },
        { word: 'Alegoria', cleanWord: 'Alegoria', phonetic: '[A-le-go-ria] • Hình tượng ngụ ngôn chuẩn mực', plMeaning: 'Motyw o jednym, ściśle określonym i stałym znaczeniu symbolicznym (np. lis = chytrość, waga = sprawiedliwość).', vnMeaning: 'Hình tượng ngụ ngôn — Hình ảnh mang một ý nghĩa quy ước cố định không thay đổi theo thời gian.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep5_1', sliceLabel: 'APOSTROFA W INWOKACJI', color: '#3b82f6', badge: 'UROROCZYSTY ZWROT', speakText: 'Litwo! Ojczyzno moja!',
          options: [
            { textPl: '«Litwo! Ojczyzno moja! ty jesteś jak zdrowie» – Adam Mickiewicz zwraca się bezpośrednio do ojczyzny', correct: true },
            { textPl: 'To zwykła rozmowa przez telefon z kolegą w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false },
            { textPl: 'To podpis pod listem oficjalnym podczas przygotowań do trudnego sprawdzianu z polskiego na przerwie', correct: false }
          ]
        },
        {
          id: 'wi_ep5_2', sliceLabel: 'SYMBOL A ALEGORIA', color: '#10b981', badge: 'ROZRÓŻNIENIE CKE', speakText: 'Jedno znaczenie czy wiele?',
          options: [
            { textPl: 'Alegoria ma jedno ustalone znaczenie (lis = chytrość), a symbol ma wiele możliwych odczytań i interpretacji', correct: true },
            { textPl: 'Alegoria to symbol, który został przekreślony w zeszycie podczas porannej zbiórki przed rozpoczęciem lekcji', correct: false },
            { textPl: 'Nie ma żadnej różnicy między symbolem a alegorią w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep5_3', sliceLabel: 'RÓŻA JAKO SYMBOL', color: '#f59e0b', badge: 'MAŁY KSIĄŻĘ', speakText: 'Róża pod kloszem!',
          options: [
            { textPl: 'Róża w utworze Exupéry\\\'ego jest symbolem miłości, piękna, kobiecości, ale też kapryśności i bezbronności', correct: true },
            { textPl: 'Róża w powieści oznacza po prostu zwykłą roślinę z kolcami przeznaczoną do szybkiego sprzedania w kwiaciarni', correct: false },
            { textPl: 'Róża to symbol nowoczesnej rakiety kosmicznej służącej bohaterowi do podróży między odległymi asteroidami', correct: false }
          ]
        },
        {
          id: 'wi_ep5_4', sliceLabel: 'PRZYKŁAD OKSYMORONU', color: '#ef4444', badge: 'ZESTAWIENIE PRZECIWIEŃSTW', speakText: 'Żywy trup, gorący lód!',
          options: [
            { textPl: 'Połączenie pojęć wykluczających się wzajemnie tworzące głęboki sens poetycki (np. «blask ciemności»)', correct: true },
            { textPl: 'Dwa synonimy stojące obok siebie w zdaniu w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false },
            { textPl: 'Rym na końcu wiersza podczas przygotowań do trudnego sprawdzianu z polskiego przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep5_5', sliceLabel: 'NAZYWANIE FUNKCJI ŚRODKA', color: '#8b5cf6', badge: 'EGZAMIN CKE', speakText: 'Po co autor go użył?',
          options: [
            { textPl: 'Na egzaminie nie wystarczy nazwać środek – trzeba wyjaśnić, jakie emocje lub obraz buduje w tekście!', correct: true },
            { textPl: 'Wystarczy wypisać losowe nazwy z pamięci bez wyjaśnienia w drodze powrotnej ze szkoły prosto do domu', correct: false },
            { textPl: 'Egzaminator nie wymaga wyjaśniania funkcji środków i wracasz prosto do domu po lekcjach przed lekcją', correct: false }
          ]
        }
      ]
    },
    6: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 6 (Klasa 8: Głębia Tekstu – Motyw i Przesłanie Autora)',
      chestWords: [
        { word: 'Przesłanie', cleanWord: 'Przesłanie', phonetic: '[Prze-sła-nie] • Thông điệp cốt lõi của tác giả', plMeaning: 'Główna myśl moralna i życiowa refleksja, którą twórca kieruje do odbiorcy swojego dzieła.', vnMeaning: 'Thông điệp tác phẩm — Bài học nhân sinh sâu sắc mà tác giả muốn gửi gắm tới bạn đọc.', color: '#3b82f6' },
        { word: 'Motyw', cleanWord: 'Motyw', phonetic: '[Mo-tyw] • Chủ đề / Mô-típ văn học', plMeaning: 'Wątek przewijający się w literaturze różnych epok (np. motyw wędrowca, samotności, walki, miłości).', vnMeaning: 'Mô-típ văn học — Đề tài lặp lại qua các thời kỳ: người lữ hành, sự cô đơn, lòng yêu nước.', color: '#10b981' },
        { word: 'Refleksja', cleanWord: 'Refleksja', phonetic: '[Re-flek-sja] • Sự suy ngẫm sâu sắc', plMeaning: 'Dojrzałe przemyślenie nad sensem ludzkiego życia i wyborami bohaterów lektur obowiązkowych.', vnMeaning: 'Sự suy ngẫm — Quá trình chiêm nghiệm về ý nghĩa cuộc đời và các giá trị nhân văn.', color: '#f59e0b' },
        { word: 'Wrażliwość', cleanWord: 'Wrażliwość', phonetic: '[Wraż-li-wość] • Độ nhạy cảm thẩm mỹ', plMeaning: 'Otwartość na piękno języka, empatię wobec cierpienia drugiego człowieka i subtelne prawdy świata.', vnMeaning: 'Độ nhạy cảm thẩm mỹ — Khả năng thấu cảm trước nỗi đau của nhân vật và vẻ đẹp ngôn từ.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep6_1', sliceLabel: 'MOTYW WĘDROWCA W LITERATURZE', color: '#3b82f6', badge: 'DROGA ŻYCIA', speakText: 'Podróż jako nauka!',
          options: [
            { textPl: 'Mały Książę podróżujący po asteroidach odkrywa prawdę o dorosłych, odpowiedzialności i miłości', correct: true },
            { textPl: 'Wędrówka oznacza pójście po zakupy do osiedlowego sklepu (np. szybki, zwinny, waleczny rycerz)', correct: false },
            { textPl: 'Bohater lektury nigdy nie opuszcza swojego pokoju na korytarzu w trakcie trwania dużej przerwy', correct: false }
          ]
        },
        {
          id: 'wi_ep6_2', sliceLabel: 'ODPOWIEDŹ Z UZASADNIENIEM', color: '#10b981', badge: 'ZADANIE OTWARTE', speakText: 'Twierdzenie i dowód!',
          options: [
            { textPl: 'Sformułuj jasną odpowiedź i poprzyj ją konkretnym zdarzeniem lub cytatem z podanego tekstu', correct: true },
            { textPl: 'Napisz samo «tak» lub «nie» bez żadnego słowa wyjaśnienia i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Przepisz całe polecenie trzykrotnie w kratkach w drodze powrotnej ze szkoły prosto do domu', correct: false }
          ]
        },
        {
          id: 'wi_ep6_3', sliceLabel: 'PRZESŁANIE BALLADYNY', color: '#f59e0b', badge: 'SPRAWIEDLIWOŚĆ', speakText: 'Nie ma zbrodni bez kary!',
          options: [
            { textPl: 'Nawet najwyższa władza zdobyta krzywdą drugiego człowieka obraca się w ruinę i ściąga sprawiedliwy wyrok', correct: true },
            { textPl: 'Balladyna uczy, jak bezkarnie kraść maliny w lesie podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false },
            { textPl: 'Utwór pokazuje, że warto krzywdzić własną rodzinę podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        },
        {
          id: 'wi_ep6_4', sliceLabel: 'METAMORFOZA BOHATERA', color: '#ef4444', badge: 'PRZEMIANA', speakText: 'Z egoisty w dobroczyńcę!',
          options: [
            { textPl: 'Głęboka wewnętrzna zmiana pod wpływem wstrząsu moralnego (np. Scrooge w «Opowieści wigilijnej»)', correct: true },
            { textPl: 'Zmiana ubrania przed wyjściem na spacer podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false },
            { textPl: 'Przepisanie pracy domowej od kolegi z ławki podczas długiej przerwy obiadowej w szkole w klasie', correct: false }
          ]
        },
        {
          id: 'wi_ep6_5', sliceLabel: 'KULTURA JĘZYKA', color: '#8b5cf6', badge: 'BOGACTWO SŁÓW', speakText: 'Unikaj banałów!',
          options: [
            { textPl: 'Stosowanie bogatych określeń i synonimów zamiast powtarzania słów «fajny», «super» i «rzecz»', correct: true },
            { textPl: 'Używanie wyłącznie skrótów z internetu w wypracowaniu (np. czytać, pisać, rysować, trenować)', correct: false },
            { textPl: 'Pisanie wszystkiego jednym tchem bez znaków przestankowych i wracasz prosto do domu po lekcjach', correct: false }
          ]
        }
      ]
    },
    7: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 7 (Lektury CKE I: Wina, Kara i Tajemnica Moralna)',
      chestWords: [
        { word: 'Wina', cleanWord: 'Wina', phonetic: '[Wi-na] • Tội lỗi và sai lầm', plMeaning: 'Świadome przekroczenie norm moralnych ciążące na sumieniu człowieka (np. zabójstwo Aliny przez Balladynę).', vnMeaning: 'Tội lỗi — Hành vi sai trái đi ngược lại đạo lý đè nặng lên lương tâm nhân vật.', color: '#ef4444' },
        { word: 'Kara', cleanWord: 'Kara', phonetic: '[Ka-ra] • Hình phạt công lý tất yếu', plMeaning: 'Nieuchronny wyrok sprawiedliwości dosięgający każdego, kto wyrządził zło i odmówił skruchy.', vnMeaning: 'Hình phạt — Sự trừng phạt công minh không thể tránh khỏi đối với kẻ gieo rắc điều ác.', color: '#3b82f6' },
        { word: 'Sumienie', cleanWord: 'Sumienie', phonetic: '[Su-mie-nie] • Tiếng nói lương tâm', plMeaning: 'Krwawa plama na czole Balladyny – wieczny, niezmywalny symbol wyrzutów sumienia i piętna winy.', vnMeaning: 'Lương tâm — Vết máu đỏ trên trán Balladyna tượng trưng cho sự dằn vặt của lương tri.', color: '#f59e0b' },
        { word: 'Przebaczenie', cleanWord: 'Przebaczenie', phonetic: '[Sự tha thứ và cứu rỗi]', plMeaning: 'Dar miłosierdzia przynoszący spokój cierpiącym duszom i pojednanie z bliźnimi w „Dziadach”.', vnMeaning: 'Sự tha thứ — Lòng nhân ái mang lại sự giải thoát và thanh thản cho tâm hồn con người.', color: '#10b981' }
      ],
      catScenarios: [
        {
          id: 'wi_ep7_1', sliceLabel: 'OBRZĘD DZIADÓW CZ. II', color: '#3b82f6', badge: 'MICKIEWICZ', speakText: 'Ciemno wszędzie, głucho wszędzie...',
          options: [
            { textPl: 'Guślarz w kaplicy przywołuje duchy czyśćcowe, by zaoferować im pomoc i wysłuchać ich moralnych przestróg', correct: true },
            { textPl: 'To wesoła zabawa karnawałowa w sali gimnastycznej podczas długiej przerwy obiadowej w szkole na przerwie', correct: false },
            { textPl: 'Obrzęd polega na czytaniu gazet przy świecach w czytelni biblioteki po skończonych lekcjach przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep7_2', sliceLabel: 'PRZESTROGA DUCHÓW LEKKICH', color: '#10b981', badge: 'JÓZIO I RÓZIA', speakText: 'Kto nie doznał goryczy...',
          options: [
            { textPl: '«Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie» – człowiek musi poznać trud i troski życia', correct: true },
            { textPl: 'Dzieci proszą o najdroższe zabawki ze sklepu podczas porannej zbiórki przed rozpoczęciem lekcji przed lekcją', correct: false },
            { textPl: 'Duchy lekkie nie mają żadnego przesłania dla żyjących podczas długiej przerwy obiadowej w szkole na przerwie', correct: false }
          ]
        },
        {
          id: 'wi_ep7_3', sliceLabel: 'WIDMO ZŁEGO PANA', color: '#f59e0b', badge: 'DUCH CIĘŻKI', speakText: 'Brak litości!',
          options: [
            { textPl: '«Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże» – kara za okrucieństwo wobec poddanych', correct: true },
            { textPl: 'Zły Pan dostaje nagrodę za dobre zarządzanie majątkiem podczas porannej zbiórki przed rozpoczęciem lekcji', correct: false },
            { textPl: 'Widmo zostaje od razu wpuszczone do nieba podczas porannej zbiórki przed rozpoczęciem lekcji przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep7_4', sliceLabel: 'PRZESTROGA ZOSI', color: '#ef4444', badge: 'DUCH POŚREDNI', speakText: 'Dotknąć ziemi!',
          options: [
            { textPl: 'Dziewczyna, która żyła marzeniami i igrała z uczuciami innych, musi dotknąć stopami ziemi i nauczyć się empatii', correct: true },
            { textPl: 'Zosia uczy tańca wszystkich mieszkańców wioski podczas przygotowań do trudnego sprawdzianu z polskiego w klasie', correct: false },
            { textPl: 'Zosia żąda od Guślarza złotej korony podczas przygotowań do trudnego sprawdzianu z polskiego przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep7_5', sliceLabel: 'WIECZNA SPRAWIEDLIWOŚĆ', color: '#8b5cf6', badge: 'UNIWERSALIZM', speakText: 'Prawdy moralne!',
          options: [
            { textPl: 'Literatura romantyczna uczy, że człowieczeństwo mierzy się zdolnością do współczucia i miłości do innych', correct: true },
            { textPl: 'Wszystkie czyny bohaterów uchodzą im na sucho bez żadnych skutków i wracasz prosto do domu po lekcjach', correct: false },
            { textPl: 'Najważniejsze w życiu jest zdobycie korony za wszelką cenę i wracasz prosto do domu po lekcjach w klasie', correct: false }
          ]
        }
      ]
    },
    8: {
      badgeText: 'Poziom 0: Szatnia Czarownicy – Epizod 8 (Formy Wypowiedzi II: Bogate Wypracowanie Egzaminacyjne)',
      chestWords: [
        { word: 'Interpretacja', cleanWord: 'Interpretacja', phonetic: '[Cảm thụ và phân tích tác phẩm]', plMeaning: 'Odkrywanie głębszego, ukrytego sensu utworu literackiego i wyjaśnianie intencji twórcy.', vnMeaning: 'Cảm thụ tác phẩm — Khám phá tầng nghĩa sâu sắc và lý giải thông điệp nghệ thuật của tác giả.', color: '#3b82f6' },
        { word: 'Wniosek', cleanWord: 'Wniosek', phonetic: '[Wnio-sek] • Kết luận đúc kết', plMeaning: 'Dojrzała konkluzja zamykająca wywód w rozprawce lub opowiadaniu egzaminacyjnym.', vnMeaning: 'Kết luận — Lời nhận định tổng quát khép lại toàn bộ bài thi văn một cách sâu sắc.', color: '#10b981' },
        { word: 'Wyobraźnia', cleanWord: 'Wyobraźnia', phonetic: '[Trí tưởng tượng phong phú]', plMeaning: 'Zdolność kreowania niezwykłych obrazów i żywych scen w opowiadaniu twórczym.', vnMeaning: 'Trí tưởng tượng — Năng lực sáng tạo nên những khung cảnh và tình tiết sống động trong bài viết.', color: '#f59e0b' },
        { word: 'Mądrość', cleanWord: 'Mądrość', phonetic: '[Mą-drość] • Trí tuệ và nhân sinh quan', plMeaning: 'Zrozumienie prawd o człowieku i świecie zdobyte dzięki czytaniu lektur i rzetelnej nauce.', vnMeaning: 'Trí tuệ — Sự thấu suốt bản chất con người tích lũy qua các trang sách và bài học cuộc sống.', color: '#8b5cf6' }
      ],
      catScenarios: [
        {
          id: 'wi_ep8_1', sliceLabel: 'DOJRZAŁA INTERPRETACJA', color: '#3b82f6', badge: 'GŁĘBIA', speakText: 'Patrz głębiej niż tekst!',
          options: [
            { textPl: 'Wyjaśnij motywacje bohaterów, powiąż je ze środkami artystycznymi i uniwersalnymi wartościami ludzkimi', correct: true },
            { textPl: 'Opisz tylko to, jaki kolor miała okładka lektury podczas długiej przerwy obiadowej w szkole po dzwonku', correct: false },
            { textPl: 'Przepisz losowy wiersz z pamięci zamiast odpowiedzi na pytanie podczas uroczystego apelu w auli szkolnej', correct: false }
          ]
        },
        {
          id: 'wi_ep8_2', sliceLabel: 'KONTEKSTY W WYPRACOWANIU', color: '#10b981', badge: 'ERUDYCJA', speakText: 'Połącz wątki!',
          options: [
            { textPl: 'Odwołaj się do epoki, losów autora lub innego znanego Ci dzieła o podobnej tematyce (np. motyw winy)', correct: true },
            { textPl: 'Opisz co wczoraj jadłeś na obiad w domu przed samym wejściem do sali lekcyjnej w szkole przed lekcją', correct: false },
            { textPl: 'Podaj wyniki meczu piłki nożnej podczas przygotowań do trudnego sprawdzianu z polskiego przed lekcją', correct: false }
          ]
        },
        {
          id: 'wi_ep8_3', sliceLabel: 'BOGACTWO STYLISTYCZNE', color: '#f59e0b', badge: 'JĘZYK', speakText: 'Epitety, metafory, porównania!',
          options: [
            { textPl: 'Wykorzystuj środki artystyczne, by nadać własnemu wypracowaniu niepowtarzalny, dojrzały styl', correct: true },
            { textPl: 'Pisz wyłącznie pojedynczymi wyrazami z kropką po każdym słowie (np. biega, walczy, trenuje na sali)', correct: false },
            { textPl: 'Używaj tylko słów potocznych znanych z gier komputerowych i wracasz prosto do domu po lekcjach', correct: false }
          ]
        },
        {
          id: 'wi_ep8_4', sliceLabel: 'ZŁOTA PUENTA KOŃCOWA', color: '#ef4444', badge: 'ZWIECZENIE', speakText: 'Mocny akcent na koniec!',
          options: [
            { textPl: 'Zakończ pracę trafną puentą lub złotą myślą, która podsumuje Twoje rozważania i zachwyci egzaminatora', correct: true },
            { textPl: 'Napisz na końcu «Koniec i kropka, więcej nie piszę» i wracasz prosto do domu po lekcjach przed lekcją', correct: false },
            { textPl: 'Zostaw zdanie niedokończone w połowie wyrazu w czytelni biblioteki po skończonych lekcjach po dzwonku', correct: false }
          ]
        },
        {
          id: 'wi_ep8_5', sliceLabel: 'MISTRZ JĘZYKA POLSKIEGO', color: '#8b5cf6', badge: 'TRIUMF', speakText: 'Gratulacje, osiągnąłeś szczyt!',
          options: [
            { textPl: 'Opanowałeś gramatykę, ortografię, lektury i sztukę pięknego pisania – egzamin ósmoklasisty zdasz celująco!', correct: true },
            { textPl: 'Zapomniałeś wszystkiego, czego się nauczyłeś podczas porannej zbiórki przed rozpoczęciem lekcji po dzwonku', correct: false },
            { textPl: 'Język polski to tylko losowanie odpowiedzi A, B, C podczas długiej przerwy obiadowej w szkole przed lekcją', correct: false }
          ]
        }
      ]
    }
  }
};

// Funkcja pobierająca konfigurację Poziomu 0 dopasowaną do bohatera i epizodu:
export function getHeroFloor0Config(heroId = 'warrior', pip = 1) {
  const hid = String(heroId || 'warrior').toLowerCase();
  const episodeNum = Math.max(1, Math.min(8, Number(pip) || 1));

  if (FLOOR_0_EPISODES[hid] && FLOOR_0_EPISODES[hid][episodeNum]) {
    return FLOOR_0_EPISODES[hid][episodeNum];
  }

  return FLOOR_0_EPISODES.warrior[1];
}
