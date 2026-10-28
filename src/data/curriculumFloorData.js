// Dane programowe dla wszystkich 8 Epizodów i 5 Pięter gry Nói Đi!
// Zgodne z podstawą programową języka polskiego dla klas 4–8 oraz podręcznikiem „Zamieńmy słowo”:
// Epizod 1: Start A0/A1 – Powitania, instrukcje szkolne TPR, przybory, samopoczucie, posiłki, czas
// Epizod 2: Klasa 4 („Zamieńmy słowo 4”) – Rzeczownik, czasownik, przymiotnik, fleksja, ortografia ó/u, rz/ż, ch/h, formy użytkowe
// Epizod 3: Klasa 5 („Zamieńmy słowo 5”) – Przysłówek, liczebnik, przyimek, składnia zdania pojedynczego (podmiot, orzeczenie, przydawka)
// Epizod 4: Klasa 6 („Zamieńmy słowo 6”) – Zaimek, spójnik, wykrzyknik, partykuła, słowotwórstwo, rodzina wyrazów, pisownia „nie”
// Epizod 5: Klasa 7 – Imiesłowy przymiotnikowe i przysłówkowe, zdania podrzędnie złożone, środki stylistyczne (metafora, personifikacja)
// Epizod 6: Klasa 8 – Egzamin Ósmoklasisty CKE, składnia wielokrotnie złożona, mowa zależna, normy i błędy językowe, czytanie ze zrozumieniem
// Epizod 7: Lektury CKE I – Kanon lektur (Balladyna, Dziady cz. II, Mały Książę, Kamienie na szaniec, Opowieść wigilijna, Pan Tadeusz)
// Epizod 8: Formy Wypowiedzi II – Rozprawka argumentacyjna, opowiadanie twórcze, przemówienie, dedykacja, zaproszenie, motywy literackie

export const EPISODE_FLOOR_CHEST_CARDS = {
  // EPIZOD 1: Start A0/A1
  1: {
    1: [
      { word: 'Cześć!', cleanWord: 'Cześć', phonetic: '[Cześć] • Xin chào (thân mật)', plMeaning: 'Nieformalne powitanie i pożegnanie z kolegami z klasy.', vnMeaning: 'Xin chào / Tạm biệt thân mật với bạn bè cùng trang lứa.', color: '#3b82f6' },
      { word: 'Dzień dobry!', cleanWord: 'Dzień dobry', phonetic: '[Dzień do-bry] • Chào buổi sáng / Kính chào', plMeaning: 'Oficjalne, pełne szacunku powitanie dorosłych i nauczycieli.', vnMeaning: 'Lời chào trang trọng khi gặp thầy cô giáo và người lớn.', color: '#10b981' },
      { word: 'Dziękuję!', cleanWord: 'Dziękuję', phonetic: '[Dzię-ku-ję] • Cảm ơn bạn', plMeaning: 'Magiczne słowo wdzięczności za pomoc lub pożyczenie przyborów.', vnMeaning: 'Lời cảm ơn chân thành khi nhận được sự giúp đỡ từ bạn bè.', color: '#f59e0b' },
      { word: 'Przepraszam!', cleanWord: 'Przepraszam', phonetic: '[Prze-pra-szam] • Xin lỗi / Làm phiền', plMeaning: 'Słowo używane, gdy chcemy zwrócić uwagę lub gdy kogoś potrącimy.', vnMeaning: 'Lời xin lỗi khi làm phiền hoặc vô tình va phải ai đó.', color: '#ef4444' }
    ],
    2: [
      { word: 'Ołówek', cleanWord: 'Ołówek', phonetic: '[O-wó-wek] • Bút chì', plMeaning: 'Przybór do szkicowania i pisania, który można zetrzeć gumką.', vnMeaning: 'Bút chì để vẽ phác thảo hoặc làm bài nháp có thể tẩy được.', color: '#3b82f6' },
      { word: 'Długopis', cleanWord: 'Długopis', phonetic: '[Dwu-go-pis] • Bút bi', plMeaning: 'Podstawowe narzędzie do robienia notatek w szkolnym zeszycie.', vnMeaning: 'Bút bi để viết bài chính thức vào vở học sinh.', color: '#10b981' },
      { word: 'Zeszyt', cleanWord: 'Zeszyt', phonetic: '[Ze-szyt] • Quyển vở', plMeaning: 'Zszyte kartki w kratkę lub linie do zapisywania lekcji.', vnMeaning: 'Quyển vở ghi bài học hằng ngày trên lớp.', color: '#f59e0b' },
      { word: 'Gumka', cleanWord: 'Gumka', phonetic: '[Gum-ka] • Cục tẩy', plMeaning: 'Służy do wymazywania błędów zrobionych ołówkiem.', vnMeaning: 'Cục gôm tẩy dùng để xoá vết bút chì khi làm sai.', color: '#8b5cf6' }
    ],
    3: [
      { word: 'Głowa', cleanWord: 'Głowa', phonetic: '[Gwo-wa] • Cái đầu', plMeaning: 'Część ciała, która boli po całym dniu myślenia.', vnMeaning: 'Cái đầu — Bộ phận hay bị đau sau ngày học căng thẳng.', color: '#ef4444' },
      { word: 'Brzuch', cleanWord: 'Brzuch', phonetic: '[Bżuch] • Bụng', plMeaning: 'Boli, gdy zapomnimy zjeść drugie śniadanie.', vnMeaning: 'Bụng — Thường bị đau khi đói hoặc ăn phải đồ lạ.', color: '#f59e0b' },
      { word: 'Lekarz', cleanWord: 'Lekarz', phonetic: '[Le-każ] • Bác sĩ', plMeaning: 'Osoba w białym fartuchu, która pomaga wrócić do zdrowia.', vnMeaning: 'Bác sĩ chăm sóc sức khoẻ và kê đơn thuốc.', color: '#10b981' },
      { word: 'Apteczka', cleanWord: 'Apteczka', phonetic: '[Ap-tecz-ka] • Hộp cứu thương', plMeaning: 'Szkolna szafka z plastrami, bandażami i wodą utlenioną.', vnMeaning: 'Hộp sơ cứu chứa bông băng thuốc đỏ trong phòng y tế.', color: '#3b82f6' }
    ],
    4: [
      { word: 'Obiad', cleanWord: 'Obiad', phonetic: '[O-biad] • Bữa trưa', plMeaning: 'Ciepły posiłek na długiej przerwie na stołówce.', vnMeaning: 'Bữa trưa nóng hổi ăn ở căng tin trường học.', color: '#f59e0b' },
      { word: 'Zupa', cleanWord: 'Zupa', phonetic: '[Zu-pa] • Món súp / Canh', plMeaning: 'Ciepłe pierwsze danie, np. pomidorowa lub ogórkowa.', vnMeaning: 'Món canh hoặc súp ăn mở đầu bữa trưa.', color: '#ef4444' },
      { word: 'Woda', cleanWord: 'Woda', phonetic: '[Vo-da] • Nước khoáng', plMeaning: 'Najzdrowszy napój do ugaszenia pragnienia po lekcji WF.', vnMeaning: 'Nước khoáng uống giải khát sau giờ học thể dục.', color: '#06b6d4' },
      { word: 'Jabłko', cleanWord: 'Jabłko', phonetic: '[Jabw-ko] • Quả táo', plMeaning: 'Soczysty i chrupiący owoc na drugie śniadanie (+10 HP).', vnMeaning: 'Quả táo giòn ngọt ăn giờ giải lao giúp hồi máu.', color: '#10b981' }
    ],
    5: [
      { word: 'Dzwonek', cleanWord: 'Dzwonek', phonetic: '[Dzvo-nek] • Tiếng chuông', plMeaning: 'Głośny sygnał oznajmiający początek przerwy lub lekcji.', vnMeaning: 'Tiếng chuông báo hiệu giờ vào lớp hoặc ra chơi.', color: '#f59e0b' },
      { word: 'Godzina', cleanWord: 'Godzina', phonetic: '[Go-dzi-na] • Giờ đồng hồ', plMeaning: 'Szkolna lekcja trwa dokładnie 45 minut.', vnMeaning: 'Giờ học kéo dài đúng 45 phút trên lớp.', color: '#3b82f6' },
      { word: 'Piątek', cleanWord: 'Piątek', phonetic: '[Pion-tek] • Thứ sáu', plMeaning: 'Upragniony dzień przed weekendem.', vnMeaning: 'Thứ sáu — Ngày học cuối cùng trước kỳ nghỉ cuối tuần.', color: '#10b981' },
      { word: 'Boisko', cleanWord: 'Boisko', phonetic: '[Bo-i-sko] • Sân bóng', plMeaning: 'Miejsce na świeżym powietrzu do gry w piłkę nożną.', vnMeaning: 'Sân bóng ngoài trời để thi đấu và rèn luyện thể lực.', color: '#8b5cf6' }
    ]
  },

  // EPIZOD 2: Klasa 4 („Zamieńmy słowo 4”)
  2: {
    1: [
      { word: 'Rzeczownik', cleanWord: 'Rzeczownik', phonetic: '[Żecz-ov-nik] • Danh từ (Kto? Co?)', plMeaning: 'Nazwa osoby, rzeczy, miejsca lub zjawiska. Odpowiada na pytania: Kto? Co?', vnMeaning: 'Danh từ chỉ người, đồ vật, hiện tượng. Trả lời câu hỏi: Ai? Cái gì?', color: '#3b82f6' },
      { word: 'Czasownik', cleanWord: 'Czasownik', phonetic: '[Cza-sov-nik] • Động từ (Co robi?)', plMeaning: 'Wyraża czynność lub stan. Odpowiada na pytania: Co robi? Co się z nim dzieje?', vnMeaning: 'Động từ chỉ hành động hoặc trạng thái. Trả lời: Làm gì? Xảy ra gì?', color: '#ef4444' },
      { word: 'Przymiotnik', cleanWord: 'Przymiotnik', phonetic: '[Pży-miot-nik] • Tính từ (Jaki? Jaka?)', plMeaning: 'Określa cechy rzeczownika. Odpowiada na pytania: Jaki? Jaka? Jakie? Czyj?', vnMeaning: 'Tính từ miêu tả tính chất, đặc điểm của danh từ. Trả lời: Như thế nào?', color: '#10b981' },
      { word: 'Mianownik', cleanWord: 'Mianownik', phonetic: '[Mia-nov-nik] • Cách 1 (Kto? Co?)', plMeaning: 'Pierwszy przypadek. Wskazuje wykonawcę czynności (podmiot zdania).', vnMeaning: 'Cách 1 trong tiếng Ba Lan: Ai? Cái gì? Làm chủ ngữ trong câu.', color: '#f59e0b' }
    ],
    2: [
      { word: 'Ó wymienne', cleanWord: 'Ó wymienne', phonetic: '[Ó vy-mien-ne] • Ó đổi thành O/E/A', plMeaning: '„Ó” piszemy, gdy wymienia się na o, e lub a (np. król – królowie, wóz – wozy).', vnMeaning: 'Viết Ó khi trong các từ cùng gốc đổi thành o, e, a (ví dụ: król - królowie).', color: '#f59e0b' },
      { word: 'Rz po spółgłoskach', cleanWord: 'Rz po spółgłoskach', phonetic: '[Rz po spółgłoskach] • Rz sau p,b,t,d,k,g,ch,j,w', plMeaning: '„Rz” piszemy po spółgłoskach p, b, t, d, k, g, ch, j, w (np. przygoda, drzewo).', vnMeaning: 'Viết RZ sau các phụ âm p, b, t, d, k, g, ch, j, w (ví dụ: przyjaciel, drzewo).', color: '#3b82f6' },
      { word: 'Ch wymienne', cleanWord: 'Ch wymienne', phonetic: '[Ch vy-mien-ne] • Ch đổi thành Sz', plMeaning: '„Ch” piszemy, gdy wymienia się na „sz” (np. mucha – muszka, cicho – cisza).', vnMeaning: 'Viết CH khi đổi thành SZ trong các từ cùng gốc (ví dụ: mucha - muszka).', color: '#10b981' },
      { word: 'Ż z kropką', cleanWord: 'Ż z kropką', phonetic: '[Ż z kropką] • Ż đổi thành G/Z/S/Ź/DŹ', plMeaning: '„Ż” piszemy, gdy wymienia się na g, z, s, ź, dź (np. nóżka – noga, dróżka – droga).', vnMeaning: 'Viết Ż có chấm khi đổi thành g, z, s, ź, dź (ví dụ: nóżka - noga).', color: '#ec4899' }
    ],
    3: [
      { word: 'Biernik', cleanWord: 'Biernik', phonetic: '[Bier-nik] • Cách 4 (Kogo? Co?)', plMeaning: 'Przypadek dopełnienia po czasownikach „widzę, mam, poproszę”.', vnMeaning: 'Cách 4: Nhìn thấy ai/cái gì? Mua cái gì? (ví dụ: poproszę bułkę).', color: '#3b82f6' },
      { word: 'Narzędnik', cleanWord: 'Narzędnik', phonetic: '[Na-żęd-nik] • Cách 5 (Z kim? Czym?)', plMeaning: 'Wskazuje narzędzie lub towarzystwo (końcówki: -em, -ą, np. jadę autobusem).', vnMeaning: 'Cách 5: Bằng phương tiện gì, cùng với ai? (ví dụ: jadę autobusem, z mamą).', color: '#10b981' },
      { word: 'Dopełniacz', cleanWord: 'Dopełniacz', phonetic: '[Do-pew-niacz] • Cách 2 (Kogo? Czego?)', plMeaning: 'Używany przy zaprzeczeniach („nie mam…”) i określaniu własności.', vnMeaning: 'Cách 2: Phủ định "không có gì" hoặc chỉ sở hữu (nie mam czasu).', color: '#f59e0b' },
      { word: 'Celownik', cleanWord: 'Celownik', phonetic: '[Ce-lov-nik] • Cách 3 (Komu? Czemu?)', plMeaning: 'Używany, gdy komuś coś dajemy lub pomagamy („daję koledze”).', vnMeaning: 'Cách 3: Cho ai cái gì, giúp đỡ ai (daję koledze zeszyt).', color: '#8b5cf6' }
    ],
    4: [
      { word: 'Ogłoszenie', cleanWord: 'Ogłoszenie', phonetic: '[O-gwo-sze-nie] • Thông báo công cộng', plMeaning: 'Krótki tekst informacyjny dla wielu osób: Co? Gdzie? Kiedy? Kontakt.', vnMeaning: 'Bản thông báo công khai cho nhiều người biết: Việc gì? Ở đâu? Khi nào?', color: '#f59e0b' },
      { word: 'Zaproszenie', cleanWord: 'Zaproszenie', phonetic: '[Za-pro-sze-nie] • Thiệp mời (5 bước)', plMeaning: 'Forma użytkowa odpowiadająca na 5 pytań: Kto? Kogo? Na co? Kiedy? Gdzie?', vnMeaning: 'Giấy mời trả lời đủ 5 câu hỏi bắt buộc: Ai mời? Mời ai? Đi đâu? Khi nào?', color: '#3b82f6' },
      { word: 'Dedykacja', cleanWord: 'Dedykacja', phonetic: '[De-dy-ka-cja] • Lời đề tặng trong sách', plMeaning: 'Osobisty wpis w darowanej książce: komu, od kogo, z jakiej okazji i kiedy.', vnMeaning: 'Lời đề tặng ghi ở trang đầu cuốn sách làm kỷ niệm cho người bạn.', color: '#10b981' },
      { word: 'Podpis', cleanWord: 'Podpis', phonetic: '[Pod-pis] • Chữ ký người viết', plMeaning: 'Imię i nazwisko autora na końcu listu, ogłoszenia lub dedykacji.', vnMeaning: 'Chữ ký và tên người viết ở cuối bức thư hoặc văn bản.', color: '#ec4899' }
    ],
    5: [
      { word: 'Liczba mnoga', cleanWord: 'Liczba mnoga', phonetic: '[Licz-ba mno-ga] • Số nhiều', plMeaning: 'Oznacza dwa lub więcej przedmiotów (np. zeszyt → zeszyty, uczeń → uczniowie).', vnMeaning: 'Dạng số nhiều chỉ từ 2 cá thể trở lên trong tiếng Ba Lan.', color: '#3b82f6' },
      { word: 'Rodzaj męski', cleanWord: 'Rodzaj męski', phonetic: '[Rod-zaj mę-ski] • Giống đực (Ten)', plMeaning: 'Rzeczowniki łączące się ze słowem „ten” (np. ten stół, ten chłopak).', vnMeaning: 'Danh từ giống đực đi với đại từ "ten" (cái bàn, cậu bé).', color: '#10b981' },
      { word: 'Rodzaj żeński', cleanWord: 'Rodzaj żeński', phonetic: '[Rod-zaj żeń-ski] • Giống cái (Ta)', plMeaning: 'Rzeczowniki kończące się zazwyczaj na -a, łączące się ze słowem „ta” (ta książka).', vnMeaning: 'Danh từ giống cái kết thúc bằng -a, đi với đại từ "ta" (cuốn sách).', color: '#f59e0b' },
      { word: 'Rodzaj nijaki', cleanWord: 'Rodzaj nijaki', phonetic: '[Rod-zaj ni-ja-ki] • Giống trung (To)', plMeaning: 'Rzeczowniki łączące się ze słowem „to” (np. to okno, to jabłko).', vnMeaning: 'Danh từ giống trung kết thúc bằng -o/-e, đi với "to" (cửa sổ, quả táo).', color: '#8b5cf6' }
    ]
  },

  // EPIZOD 3: Klasa 5 („Zamieńmy słowo 5”)
  3: {
    1: [
      { word: 'Przysłówek', cleanWord: 'Przysłówek', phonetic: '[Pży-swo-wek] • Phó từ (Jak? Gdzie? Kiedy?)', plMeaning: 'Nieodmienna część mowy określająca czasownik (np. biec szybko, mieszkać blisko).', vnMeaning: 'Phó từ không biến đổi bổ nghĩa cho động từ: Chạy nhanh, ở gần.', color: '#3b82f6' },
      { word: 'Liczebnik główny', cleanWord: 'Liczebnik główny', phonetic: '[Li-czeb-nik głó-wny] • Số đếm (Ile?)', plMeaning: 'Określa dokładną liczbę osób lub rzeczy (np. jeden, pięć, dziesięć).', vnMeaning: 'Số từ đếm số lượng: Một, hai, năm, mười học sinh.', color: '#10b981' },
      { word: 'Liczebnik porządkowy', cleanWord: 'Liczebnik porządkowy', phonetic: '[Li-czeb-nik po-rząd-ko-wy] • Số thứ tự (Który?)', plMeaning: 'Wskazuje kolejność w szeregu (np. pierwszy, drugi, piąty uczeń).', vnMeaning: 'Số thứ tự chỉ vị trí xếp hàng: Thứ nhất, thứ hai, thứ năm.', color: '#f59e0b' },
      { word: 'Przyimek', cleanWord: 'Przyimek', phonetic: '[Pży-i-mek] • Giới từ (w, na, pod, przed)', plMeaning: 'Nieodmienny wyraz tworzący z rzeczownikiem wyrażenie przyimkowe (w klasie, na stole).', vnMeaning: 'Giới từ chỉ vị trí và thời gian đi kèm danh từ: trong lớp, trên bàn.', color: '#8b5cf6' }
    ],
    2: [
      { word: 'Podmiot', cleanWord: 'Podmiot', phonetic: '[Pod-miot] • Chủ ngữ (Kto? Co?)', plMeaning: 'Główna część zdania oznaczająca wykonawcę czynności w Mianowniku.', vnMeaning: 'Chủ ngữ trong câu chỉ người thực hiện hành động, ở cách 1.', color: '#3b82f6' },
      { word: 'Orzeczenie', cleanWord: 'Orzeczenie', phonetic: '[O-że-cze-nie] • Vị ngữ (Co robi?)', plMeaning: 'Serce zdania – czasownik w formie osobowej wyrażający czynność.', vnMeaning: 'Vị ngữ là trái tim của câu, động từ chia theo ngôi thì.', color: '#ef4444' },
      { word: 'Przydawka', cleanWord: 'Przydawka', phonetic: '[Pży-daw-ka] • Định ngữ (Jaki? Czyj? Ile?)', plMeaning: 'Część zdania określająca rzeczownik (np. „mądry uczeń”, „książka Olka”).', vnMeaning: 'Định ngữ bổ nghĩa cho danh từ: Học sinh thông minh, sách của Olek.', color: '#10b981' },
      { word: 'Okolicznik miejsca', cleanWord: 'Okolicznik miejsca', phonetic: '[O-ko-licz-nik miej-sca] • Trạng ngữ nơi chốn', plMeaning: 'Określa miejsce wykonania czynności (Gdzie? Dokąd? Skąd? np. w szkole).', vnMeaning: 'Trạng từ chỉ nơi chốn: Ở đâu? Đi đâu? Đến từ đâu?', color: '#f59e0b' }
    ],
    3: [
      { word: 'Okolicznik czasu', cleanWord: 'Okolicznik czasu', phonetic: '[O-ko-licz-nik cza-su] • Trạng ngữ thời gian', plMeaning: 'Wskazuje moment czynności (Kiedy? Od kiedy? Do kiedy? np. rano, wczoraj).', vnMeaning: 'Trạng từ chỉ thời gian: Khi nào? Từ bao giờ? (buổi sáng, hôm qua).', color: '#f59e0b' },
      { word: 'Dopełnienie', cleanWord: 'Dopełnienie', phonetic: '[Do-pew-nie-nie] • Bổ ngữ (Cách 2-5)', plMeaning: 'Część zdania uzupełniająca treść czasownika (np. czytam książkę, piszę piórem).', vnMeaning: 'Bổ ngữ đi kèm động từ trả lời các câu hỏi ở các cách gián tiếp.', color: '#3b82f6' },
      { word: 'Związek główny', cleanWord: 'Związek główny', phonetic: '[Zwią-zek głó-wny] • Cặp Chủ - Vị ngữ', plMeaning: 'Połączenie podmiotu z orzeczeniem (np. „Minh pisze”, „ptaki śpiewają”).', vnMeaning: 'Mối liên kết nòng cốt giữa chủ ngữ và vị ngữ trong câu đơn.', color: '#10b981' },
      { word: 'Związek poboczny', cleanWord: 'Związek poboczny', phonetic: '[Zwią-zek po-bocz-ny] • Cặp phụ ngữ', plMeaning: 'Połączenie części nadrzędnej z podrzędną (np. pisze szybko, ciekawa książka).', vnMeaning: 'Mối liên kết giữa từ chính và từ phụ bổ nghĩa trong câu.', color: '#8b5cf6' }
    ],
    4: [
      { word: 'Opis postaci', cleanWord: 'Opis postaci', phonetic: '[O-pis po-sta-ci] • Bài văn tả người', plMeaning: 'Forma wypowiedzi przedstawiająca wygląd zewnętrzny, ubiór i cechy charakteru.', vnMeaning: 'Bài văn miêu tả ngoại hình, trang phục và tính cách của một người.', color: '#3b82f6' },
      { word: 'Plan wydarzeń', cleanWord: 'Plan wydarzeń', phonetic: '[Plan vy-da-żeń] • Dàn ý sự việc theo trình tự', plMeaning: 'Chronologiczny spis kluczowych momentów opowiadania w punktach.', vnMeaning: 'Dàn ý ghi lại các sự việc chính của câu chuyện theo trình tự thời gian.', color: '#10b981' },
      { word: 'Akapit', cleanWord: 'Akapit', phonetic: '[A-ka-pit] • Thụt lề đầu đoạn văn', plMeaning: 'Wcięcie w tekście oznaczające nową myśl lub wątek tematyczny.', vnMeaning: 'Khoảng thụt đầu dòng mở đầu một ý tưởng mới trong đoạn văn.', color: '#f59e0b' },
      { word: 'Chronologia', cleanWord: 'Chronologia', phonetic: '[Chro-no-lo-gia] • Trình tự trước sau theo thời gian', plMeaning: 'Uporządkowanie zdarzeń od najwcześniejszego do najpóźniejszego.', vnMeaning: 'Sắp xếp các sự kiện diễn ra theo đúng tiến trình thời gian từ trước tới sau.', color: '#ec4899' }
    ],
    5: [
      { word: 'Mit grecki', cleanWord: 'Mit grecki', phonetic: '[Mit grec-ki] • Thần thoại Hy Lạp', plMeaning: 'Starożytna opowieść o bogach (Zeus, Dedal i Ikar) tłumacząca powstanie świata.', vnMeaning: 'Câu chuyện cổ về các vị thần giải thích nguồn gốc vũ trụ và con người.', color: '#3b82f6' },
      { word: 'Legenda', cleanWord: 'Legenda', phonetic: '[Le-gen-da] • Truyền thuyết dân gian', plMeaning: 'Opowieść zawierająca ziarno prawdy historycznej wymieszane z fikcją (np. o Lechu).', vnMeaning: 'Truyện truyền thuyết kết hợp sự thật lịch sử với yếu tố huyền ảo.', color: '#10b981' },
      { word: 'Morał', cleanWord: 'Morał', phonetic: '[Mo-raw] • Lời răn dạy / Bài học đạo đức', plMeaning: 'Pouczenie wynikające z bajki lub baśni, uczące dobra i mądrości.', vnMeaning: 'Bài học triết lý đạo đức rút ra ở cuối câu chuyện ngụ ngôn.', color: '#f59e0b' },
      { word: 'Frazeologizm', cleanWord: 'Frazeologizm', phonetic: '[Fra-ze-o-lo-gizm] • Thành ngữ cố định', plMeaning: 'Ustalone połączenie słów o znaczeniu przenośnym (np. „syzyfowa praca”).', vnMeaning: 'Quán ngữ hoặc thành ngữ có nghĩa bóng quen thuộc trong văn hoá.', color: '#8b5cf6' }
    ]
  },

  // EPIZOD 4: Klasa 6 („Zamieńmy słowo 6”)
  4: {
    1: [
      { word: 'Zaimek osobowy', cleanWord: 'Zaimek osobowy', phonetic: '[Za-i-mek o-so-bo-wy] • Đại từ nhân xưng (ja, ty, on)', plMeaning: 'Zastępuje rzeczownik, zapobiegając nudnym powtórzeniom w tekście.', vnMeaning: 'Đại từ nhân xưng xưng hô thay thế cho danh từ để tránh lặp từ.', color: '#3b82f6' },
      { word: 'Spójnik', cleanWord: 'Spójnik', phonetic: '[Spój-nik] • Liên từ nối (i, ale, ponieważ)', plMeaning: 'Łączy wyrazy lub zdania składowe (przed „ale, że, bo” stawiamy przecinek!).', vnMeaning: 'Liên từ dùng để nối các từ hoặc mệnh đề với nhau trong câu ghép.', color: '#10b981' },
      { word: 'Wykrzyknik', cleanWord: 'Wykrzyknik', phonetic: '[Vy-krzyk-nik] • Thán từ cảm thán (Ach! Hej!)', plMeaning: 'Nieodmienny wyraz wyrażający silne emocje lub okrzyk (np. Ojej! Hej!).', vnMeaning: 'Thán từ bộc lộ cảm xúc ngạc nhiên, kêu gọi mạnh mẽ: Ôi! Kìa!', color: '#ef4444' },
      { word: 'Partykuła', cleanWord: 'Partykuła', phonetic: '[Par-ty-ku-wa] • Trợ từ (nie, czy, -li, niech)', plMeaning: 'Cząstka nadająca zdaniu odcień pytania, przeczenia lub życzenia (nie, czy).', vnMeaning: 'Tiểu từ thêm vào câu để nhấn mạnh, hỏi hoặc phủ định.', color: '#f59e0b' }
    ],
    2: [
      { word: 'Podstawa słowotwórcza', cleanWord: 'Podstawa', phonetic: '[Pod-sta-wa] • Từ gốc trước khi thêm phụ tố', plMeaning: 'Część wyrazu, od której tworzymy nowy wyraz (np. dom- w „domek”).', vnMeaning: 'Gốc từ cơ sở để từ đó ghép thêm tiền tố, hậu tố tạo từ mới.', color: '#3b82f6' },
      { word: 'Formant', cleanWord: 'Formant', phonetic: '[For-mant] • Phụ tố (tiền tố / hậu tố)', plMeaning: 'Cząstka dodawana do podstawy, tworząca nowe słowo (przedrostek lub przyrostek).', vnMeaning: 'Bộ phận thêm vào trước hoặc sau từ gốc để biến đổi nghĩa.', color: '#10b981' },
      { word: 'Przedrostek', cleanWord: 'Przedrostek', phonetic: '[Przed-ro-stek] • Tiền tố đứng trước', plMeaning: 'Formant dopisywany na początku wyrazu (np. wy-pisać, za-pisać, pod-pisać).', vnMeaning: 'Tiền tố đứng ở đầu từ thay đổi hướng hành động: viết ra, ghi vào.', color: '#f59e0b' },
      { word: 'Przyrostek', cleanWord: 'Przyrostek', phonetic: '[Pży-ro-stek] • Hậu tố đứng sau', plMeaning: 'Formant dopisywany na końcu wyrazu (np. dom-ek, uczy-ciel, piłk-arz).', vnMeaning: 'Hậu tố đứng ở đuôi từ chỉ nghề nghiệp, tính chất hoặc sự thu nhỏ.', color: '#8b5cf6' }
    ],
    3: [
      { word: 'Rodzina wyrazów', cleanWord: 'Rodzina wyrazów', phonetic: '[Ro-dzi-na vy-ra-zów] • Gia đình từ cùng gốc', plMeaning: 'Grupa słów mających ten sam rdzeń (np. szkoła, szkolny, przedszkole).', vnMeaning: 'Nhóm các từ có chung một gốc nghĩa cốt lõi chia sẻ với nhau.', color: '#3b82f6' },
      { word: 'Rdzeń', cleanWord: 'Rdzeń', phonetic: '[Rdzeń] • Gốc từ chung bất biến', plMeaning: 'Wspólna, niepodzielna część wszystkich wyrazów pokrewnych.', vnMeaning: 'Phần lõi nghĩa chung nhất có mặt trong tất cả các từ trong gia đình từ.', color: '#10b981' },
      { word: 'Oboczność', cleanWord: 'Oboczność', phonetic: '[O-bocz-ność] • Biến âm trong gốc từ (o:ó, r:rz)', plMeaning: 'Wymiana głosek w rdzeniu wyrazu (np. wó-z : wo-zy, ręk-a : ręcz-ny).', vnMeaning: 'Hiện tượng hoán đổi âm vị trong gốc từ khi biến dạng ngữ pháp.', color: '#f59e0b' },
      { word: 'Wyraz pochodny', cleanWord: 'Wyraz pochodny', phonetic: '[Vy-raz po-chod-ny] • Từ phái sinh được tạo ra', plMeaning: 'Nowe słowo utworzone od innego wyrazu za pomocą formantu.', vnMeaning: 'Từ mới được tạo thành từ từ gốc ban đầu nhờ thêm phụ tố.', color: '#ec4899' }
    ],
    4: [
      { word: 'NIE z rzeczownikiem', cleanWord: 'Pisownia NIE', phonetic: '[NIE z rzeczownikiem] • Viết liền với danh từ', plMeaning: 'Partykułę „nie” z rzeczownikami piszemy ZAWSZE ŁĄCZNIE (np. nieprzyjaciel, niepokój).', vnMeaning: 'Từ phủ định NIE viết LIỀN với danh từ: nieprzyjaciel, niepokój.', color: '#3b82f6' },
      { word: 'NIE z przymiotnikiem', cleanWord: 'Pisownia NIE', phonetic: '[NIE z przymiotnikiem] • Viết liền với tính từ', plMeaning: 'Z przymiotnikami w stopniu równym piszemy ŁĄCZNIE (np. niemiły, niedobry).', vnMeaning: 'NIE viết LIỀN với tính từ ở cấp độ thường: niemiły, niegrzeczny.', color: '#10b981' },
      { word: 'NIE z czasownikiem', cleanWord: 'Pisownia NIE', phonetic: '[NIE z czasownikiem] • Viết rời với động từ', plMeaning: 'Partykułę „nie” z czasownikami piszemy ZAWSZE OSOBNO (np. nie wiem, nie mogę).', vnMeaning: 'NIE viết RỜI với động từ: nie wiem, nie idę, nie mogę.', color: '#ef4444' },
      { word: 'Wykrzyknik w zdaniu', cleanWord: 'Wykrzyknik', phonetic: '[Dấu chấm than !]', plMeaning: 'Stawiamy na końcu zdań rozkazujących i wykrzyknikowych (np. Stój! Uważaj!).', vnMeaning: 'Dấu chấm than đặt ở cuối câu mệnh lệnh hoặc câu cảm thán.', color: '#f59e0b' }
    ],
    5: [
      { word: 'Powieść przygodowa', cleanWord: 'Powieść', phonetic: '[Po-wieść pży-go-do-wa] • Tiểu thuyết phiêu lưu', plMeaning: 'Długi utwór epicki z dynamiczną fabułą i odważnymi bohaterami (np. Narnia).', vnMeaning: 'Tác phẩm văn xuôi dài kể về những chuyến phiêu lưu kỳ thú.', color: '#3b82f6' },
      { word: 'Narrator', cleanWord: 'Narrator', phonetic: '[Nar-ra-tor] • Người kể chuyện', plMeaning: 'Osoba opowiadająca o wydarzeniach w utworze epickim (1. lub 3. osoba).', vnMeaning: 'Nhân vật vô hình hoặc hữu hình đứng ra thuật lại toàn bộ câu chuyện.', color: '#10b981' },
      { word: 'Fabuła', cleanWord: 'Fabuła', phonetic: '[Fa-bu-wa] • Cốt truyện sự kiện', plMeaning: 'Układ wszystkich zdarzeń przedstawionych w utworze w powiązaniu przyczynowym.', vnMeaning: 'Toàn bộ chuỗi diễn biến biến cố liên kết theo quan hệ nhân quả.', color: '#f59e0b' },
      { word: 'Dialog', cleanWord: 'Dialog', phonetic: '[Dia-log] • Đối thoại giữa 2 nhân vật', plMeaning: 'Rozmowa co najmniej dwóch postaci w utworze literackim zapisywana od myślników.', vnMeaning: 'Cuộc trò chuyện trực tiếp giữa các nhân vật viết bằng dấu gạch ngang đầu dòng.', color: '#8b5cf6' }
    ]
  },

  // EPIZOD 5: Klasa 7
  5: {
    1: [
      { word: 'Imiesłów czynny', cleanWord: 'Imiesłów czynny', phonetic: '[I-mie-słów czyn-ny] • Phân từ chủ động (-ący)', plMeaning: 'Kończy się na -ący, -ąca, -ące (np. biegnący chłopiec = chłopiec, który biegnie).', vnMeaning: 'Phân từ chủ động đuôi -ący: Cậu bé đang chạy.', color: '#3b82f6' },
      { word: 'Imiesłów bierny', cleanWord: 'Imiesłów bierny', phonetic: '[I-mie-słów bier-ny] • Phân từ bị động (-ny, -ty)', plMeaning: 'Kończy się na -ny, -na, -te, -ty (np. przeczytana książka, umyte okno).', vnMeaning: 'Phân từ bị động đuôi -ny, -ty: Cuốn sách đã được đọc, cửa sổ đã lau.', color: '#10b981' },
      { word: 'Imiesłów współczesny', cleanWord: 'Imiesłów współczesny', phonetic: '[Współczesny] • Phân từ đồng thời (-ąc)', plMeaning: 'Nieodmienny, kończy się na -ąc (np. idąc do szkoły, słuchał muzyki).', vnMeaning: 'Phân từ trạng từ đồng thời đuôi -ąc: Vừa đi đến trường vừa nghe nhạc.', color: '#f59e0b' },
      { word: 'Imiesłów uprzedni', cleanWord: 'Imiesłów uprzedni', phonetic: '[Uprzedni] • Phân từ hoàn thành (-łszy, -wszy)', plMeaning: 'Oznacza czynność wcześniejszą (np. zjadłszy obiad, poszedł na boisko).', vnMeaning: 'Phân từ trạng từ hoàn thành trước: Ăn trưa xong thì đi ra sân bóng.', color: '#8b5cf6' }
    ],
    2: [
      { word: 'Metafora', cleanWord: 'Metafora', phonetic: '[Me-ta-fo-ra] • Phép ẩn dụ tu từ', plMeaning: 'Przenośnia – nietypowe połączenie słów zyskujące nowe, poetyckie znaczenie.', vnMeaning: 'Phép ẩn dụ chuyển đổi nghĩa tạo hình ảnh thơ ca bất ngờ sâu sắc.', color: '#3b82f6' },
      { word: 'Personifikacja', cleanWord: 'Personifikacja', phonetic: '[Per-so-ni-fi-ka-cja] • Phép nhân hoá', plMeaning: 'Uosobienie – nadanie przedmiotom lub zwierzętom cech czysto ludzkich.', vnMeaning: 'Phép nhân hoá gán cho cây cỏ, đồ vật tâm tư hành vi giống con người.', color: '#10b981' },
      { word: 'Animizacja', cleanWord: 'Animizacja', phonetic: '[A-ni-mi-za-cja] • Phép động vật hoá', plMeaning: 'Ożywienie – przypisanie rzeczom martwym cech istot żywych (np. chmura goni).', vnMeaning: 'Phép làm sống động gán cho vật vô tri đặc tính của sinh vật sống.', color: '#f59e0b' },
      { word: 'Epitet', cleanWord: 'Epitet', phonetic: '[E-pi-tet] • Tính từ miêu tả tu từ', plMeaning: 'Artystyczne określenie rzeczownika w poezji (np. „złociste słońce”, „stalowy miecz”).', vnMeaning: 'Thu từ miêu tả làm nổi bật vẻ đẹp thẩm mỹ của danh từ trong thơ.', color: '#ec4899' }
    ],
    3: [
      { word: 'Zdanie podrzędne', cleanWord: 'Zdanie podrzędne', phonetic: '[Zdanie podrzędne] • Mệnh đề phụ', plMeaning: 'Uzupełnia treść zdania nadrzędnego (rozpoczyna się od: że, który, ponieważ, aby).', vnMeaning: 'Mệnh đề phụ bổ nghĩa cho mệnh đề chính, đứng sau liên từ que, który, bo.', color: '#3b82f6' },
      { word: 'Wykres zdania', cleanWord: 'Wykres zdania', phonetic: '[Vy-kres zda-nia] • Sơ đồ cấu trúc câu ghép', plMeaning: 'Graficzne przedstawienie zależności między zdaniami składowymi (schodki).', vnMeaning: 'Sơ đồ hình học phân tích mối quan hệ tầng bậc giữa các mệnh đề.', color: '#10b981' },
      { word: 'Przecinek przed „który”', cleanWord: 'Interpunkcja', phonetic: '[Dấu phẩy trước który/że]', plMeaning: 'Żelazna zasada interpunkcji: przed „że”, „który”, „ponieważ” ZAWSZE stawiamy przecinek!', vnMeaning: 'Quy tắc vàng: Luôn luôn đặt dấu phẩy trước các từ nối który, że, bo!', color: '#ef4444' },
      { word: 'Zdanie współrzędne', cleanWord: 'Współrzędne', phonetic: '[Zdanie współrzędne] • Mệnh đề đẳng lập', plMeaning: 'Zdania składowe są równorzędne (np. Minh czyta, a Olek rysuje).', vnMeaning: 'Câu ghép đẳng lập có hai mệnh đề bình đẳng độc lập về ngữ pháp.', color: '#f59e0b' }
    ],
    4: [
      { word: 'Apostrofa', cleanWord: 'Apostrofa', phonetic: '[A-po-stro-fa] • Lời hô gọi tha thiết', plMeaning: 'Uroczysty, bezpośredni zwrot do bóstwa, osoby lub ojczyzny („Litwo! Ojczyzno moja!”).', vnMeaning: 'Lời tha thiết gọi tên một đối tượng tôn kính mở đầu bài thơ.', color: '#3b82f6' },
      { word: 'Pytanie retoryczne', cleanWord: 'Pytanie retoryczne', phonetic: '[Câu hỏi tu từ không cần đáp]', plMeaning: 'Pytanie zadane nie po to, by uzyskać odpowiedź, lecz by skłonić do refleksji.', vnMeaning: 'Câu hỏi tu từ nhằm nhấn mạnh ý và buộc người nghe tự suy ngẫm.', color: '#10b981' },
      { word: 'Oksymoron', cleanWord: 'Oksymoron', phonetic: '[Ok-sy-mo-ron] • Nghịch lý kết hợp đối lập', plMeaning: 'Zestawienie wyrazów o sprzecznym znaczeniu (np. „gorący lód”, „żywy trup”).', vnMeaning: 'Kết hợp hai từ tương phản mâu thuẫn để tạo ấn tượng mạnh: Lửa băng.', color: '#f59e0b' },
      { word: 'Porównanie homeryckie', cleanWord: 'Porównanie', phonetic: '[So sánh mở rộng Homer]', plMeaning: 'Rozbudowane porównanie, którego drugi człon tworzy odrębny obraz poetycki.', vnMeaning: 'Phép so sánh miêu tả mở rộng chi tiết thường gặp trong trường ca sử thi.', color: '#8b5cf6' }
    ],
    5: [
      { word: 'Przemówienie', cleanWord: 'Przemówienie', phonetic: '[Prze-mó-wie-nie] • Bài diễn văn thuyết phục', plMeaning: 'Wystąpienie ustne przed publicznością, mające przekonać słuchaczy do swoich racji.', vnMeaning: 'Bài diễn thuyết trước đám đông nhằm thuyết phục công chúng.', color: '#3b82f6' },
      { word: 'Teza', cleanWord: 'Teza', phonetic: '[Te-za] • Luận điểm chính khẳng định', plMeaning: 'Twierdzenie, którego słuszności jesteśmy pewni i którego będziemy bronić.', vnMeaning: 'Luận điểm khẳng định chắc chắn sẽ chứng minh bằng các luận cứ.', color: '#10b981' },
      { word: 'Argument', cleanWord: 'Argument', phonetic: '[Ar-gu-ment] • Luận cứ / Bằng chứng', plMeaning: 'Fakt, dowód logiczny lub przykład uzasadniający postawioną tezę.', vnMeaning: 'Lý lẽ, dẫn chứng thực tế xác đáng để bảo vệ quan điểm của mình.', color: '#f59e0b' },
      { word: 'Kontrargument', cleanWord: 'Kontrargument', phonetic: '[Kon-trar-gu-ment] • Luận cứ phản bác', plMeaning: 'Zdanie obalające argument przeciwnika w dyskusji lub rozprawce.', vnMeaning: 'Ý kiến phản biện sắc bén bác bỏ lý lẽ của đối phương.', color: '#ef4444' }
    ]
  },

  // EPIZOD 6: Klasa 8 (Egzamin Ósmoklasisty CKE)
  6: {
    1: [
      { word: 'Mowa zależna', cleanWord: 'Mowa zależna', phonetic: '[Mo-wa za-leż-na] • Lời nói gián tiếp', plMeaning: 'Przekazanie czyichś słów w formie zdania podrzędnego z „że” (np. Powiedział, że przyjdzie).', vnMeaning: 'Thuật lại lời nói của người khác dưới dạng mệnh đề gián tiếp có từ "że".', color: '#3b82f6' },
      { word: 'Mowa niezależna', cleanWord: 'Mowa niezależna', phonetic: '[Mo-wa nie-za-leż-na] • Lời nói trực tiếp có ngoặc kép', plMeaning: 'Dosłowne przytoczenie wypowiedzi w cudzysłowie (np. Olek rzekł: „Pomogę ci!”).', vnMeaning: 'Dẫn nguyên văn câu nói đặt trong dấu ngoặc kép hoặc gạch ngang.', color: '#10b981' },
      { word: 'Zdanie wielokrotnie złożone', cleanWord: 'Wielokrotnie złożone', phonetic: '[Câu phức nhiều tầng mệnh đề]', plMeaning: 'Zdanie zawierające trzy lub więcej orzeczeń połączonych logicznie.', vnMeaning: 'Câu ghép phức tạp gồm từ 3 vị ngữ/mệnh đề trở lên liên kết với nhau.', color: '#f59e0b' },
      { word: 'Interpunkcja cytatu', cleanWord: 'Cytat', phonetic: '[Quy tắc trích dẫn]', plMeaning: 'Cytat wprowadzamy dwukropkiem i bierzemy w cudzysłów („…”).', vnMeaning: 'Trích dẫn câu văn đặt sau dấu hai chấm và nằm trong dấu ngoặc kép.', color: '#8b5cf6' }
    ],
    2: [
      { word: 'Pleonazm', cleanWord: 'Błąd językowy', phonetic: '[Ple-o-nazm] • Lỗi dùng từ thừa thãi lặp nghĩa', plMeaning: 'Błąd logiczny zwany „masłem maślanym” (np. cofać się w tył, w miesiącu maju).', vnMeaning: 'Lỗi lặp từ thừa ý: Lùi về phía sau, khoảng thời gian tháng năm.', color: '#ef4444' },
      { word: 'Zapożyczenie', cleanWord: 'Zapożyczenie', phonetic: '[Za-po-ży-cze-nie] • Từ mượn tiếng nước ngoài', plMeaning: 'Wyraz przejęty z innego języka (np. komputer, smartfon, wideo).', vnMeaning: 'Từ ngữ được du nhập và mượn từ các ngôn ngữ khác trên thế giới.', color: '#3b82f6' },
      { word: 'Norma językowa', cleanWord: 'Norma językowa', phonetic: '[Chuẩn mực ngôn ngữ tiếng Ba Lan]', plMeaning: 'Zbiór reguł gramatycznych i ortograficznych uznawanych za wzorcowe.', vnMeaning: 'Quy chuẩn ngữ pháp chính tả chuẩn mực được xã hội công nhận.', color: '#10b981' },
      { word: 'Peryfraza', cleanWord: 'Peryfraza', phonetic: '[Pe-ry-fra-za] • Lối nói vòng vo thay thế tên', plMeaning: 'Omówienie – zastąpienie nazwy przedmiotu rozbudowanym opisem (np. „złota jesień”).', vnMeaning: 'Nói vòng tránh gọi trực tiếp tên sự vật bằng cách miêu tả đặc trưng.', color: '#f59e0b' }
    ],
    3: [
      { word: 'Styl urzędowy', cleanWord: 'Styl urzędowy', phonetic: '[Styl hành chính công vụ]', plMeaning: 'Używany w podaniach, regulaminach i pismach prawnych – precyzyjny i bezosobowy.', vnMeaning: 'Phong cách hành chính dùng trong văn bản, quy định và đơn từ chính thức.', color: '#3b82f6' },
      { word: 'Styl artystyczny', cleanWord: 'Styl artystyczny', phonetic: '[Styl văn học nghệ thuật]', plMeaning: 'Bogaty w metafory, epitety i symbole – budzi wzruszenie i emocje czytelnika.', vnMeaning: 'Phong cách giàu hình tượng, cảm xúc đặc trưng của tác phẩm văn chương.', color: '#10b981' },
      { word: 'Styl potoczny', cleanWord: 'Styl potoczny', phonetic: '[Styl khẩu ngữ đời sống]', plMeaning: 'Swobodny język codziennych rozmów ze znajomymi (dopuszcza skróty i emocje).', vnMeaning: 'Lời ăn tiếng nói thân mật hằng ngày trong giao tiếp gia đình, bạn bè.', color: '#f59e0b' },
      { word: 'Styl naukowy', cleanWord: 'Styl naukowy', phonetic: '[Styl học thuật khoa học]', plMeaning: 'Zawiera specjalistyczną terminologię, definicje i obiektywne fakty.', vnMeaning: 'Phong cách nghiên cứu khoa học với thuật ngữ chuyên sâu chính xác.', color: '#8b5cf6' }
    ],
    4: [
      { word: 'Parafraza', cleanWord: 'Parafraza', phonetic: '[Pa-ra-fra-za] • Diễn giải lại bằng lời của mình', plMeaning: 'Przekształcenie tekstu własnymi słowami z zachowaniem oryginalnego sensu.', vnMeaning: 'Viết lại một ý kiến bằng câu từ riêng của mình mà không làm sai lệch ý.', color: '#3b82f6' },
      { word: 'Streszczenie', cleanWord: 'Streszczenie', phonetic: '[Stre-szcze-nie] • Bản tóm tắt cô đọng', plMeaning: 'Zwięzłe przedstawienie najważniejszych wątków i faktów utworu bez zbędnych detali.', vnMeaning: 'Tóm lược cô đọng các sự việc chính nhất của văn bản ngắn gọn.', color: '#10b981' },
      { word: 'Słowa kluczowe', cleanWord: 'Słowa kluczowe', phonetic: '[Từ khoá quan trọng nhất]', plMeaning: 'Wyrazy niosące główną treść i myśl przewodnią danego artykułu.', vnMeaning: 'Những từ cốt lõi thể hiện chủ đề then chốt của bài đọc hiểu.', color: '#f59e0b' },
      { word: 'Kontekst', cleanWord: 'Kontekst', phonetic: '[Kon-tekst] • Bối cảnh lịch sử, xã hội', plMeaning: 'Tło historyczne, literackie lub biograficzne pomagające zrozumieć utwór.', vnMeaning: 'Bối cảnh thời đại và hoàn cảnh sáng tác giúp hiểu sâu tác phẩm.', color: '#ec4899' }
    ],
    5: [
      { word: 'Arkusz CKE', cleanWord: 'Arkusz CKE', phonetic: '[Ar-kusz CKE] • Đề thi tốt nghiệp lớp 8', plMeaning: 'Oficjalny zestaw zadań egzaminacyjnych z języka polskiego Centralnej Komisji Egzaminacyjnej.', vnMeaning: 'Bộ đề thi chính thức kỳ thi tốt nghiệp lớp 8 môn tiếng Ba Lan.', color: '#ef4444' },
      { word: 'Karta odpowiedzi', cleanWord: 'Karta odpowiedzi', phonetic: '[Phiếu tô đáp án trắc nghiệm]', plMeaning: 'Strona, na której uczeń zaznacza kółkiem prawidłowe odpowiedzi do zadań zamkniętych.', vnMeaning: 'Phiếu điền câu trả lời chấm bằng máy quét quang học.', color: '#3b82f6' },
      { word: 'Brudnopis', cleanWord: 'Brudnopis', phonetic: '[Bru-dno-pis] • Giấy nháp thi', plMeaning: 'Miejsce w arkuszu na notatki i plan rozprawki, niepodlegające ocenie egzaminatora.', vnMeaning: 'Trang giấy nháp để phác dàn ý, giám khảo không chấm điểm phần này.', color: '#f59e0b' },
      { word: 'Limit słów', cleanWord: 'Limit słów', phonetic: '[Quy định độ dài từ (ít nhất 200 từ)]', plMeaning: 'Egzamin ósmoklasisty wymaga napisania wypracowania na co najmniej 200 słów!', vnMeaning: 'Bài văn thi lớp 8 bắt buộc phải viết dài tối thiểu từ 200 từ trở lên!', color: '#10b981' }
    ]
  },

  // EPIZOD 7: Lektury CKE I
  7: {
    1: [
      { word: 'Balladyna', cleanWord: 'Balladyna', phonetic: '[Bal-la-dy-na] • Bi kịch của Słowacki', plMeaning: 'Tragedia Juliusza Słowackiego o żądzy władzy, zbrodni i nieuchronnej karze.', vnMeaning: 'Vở kịch nổi tiếng kể về lòng tham quyền lực và quả báo sấm sét.', color: '#ef4444' },
      { word: 'Dzban malin', cleanWord: 'Dzban malin', phonetic: '[Dzban ma-lin] • Chiếc bình dâu rừng định mệnh', plMeaning: 'Rekwizyt konkursu sióstr o rękę hrabiego Kirkora – symbol zazdrości i morderstwa.', vnMeaning: 'Vật phẩm thi hái dâu giữa hai chị em khơi mào cho vụ sát hại Alina.', color: '#f59e0b' },
      { word: 'Alina', cleanWord: 'Alina', phonetic: '[A-li-na] • Cô em gái hiền lành trong sáng', plMeaning: 'Dobra, niewinna i pracowita siostra Balladyny, kochająca szczerze matkę i Kirkora.', vnMeaning: 'Cô em gái ngây thơ nhân hậu bị chị ruột hãm hại trong rừng sâu.', color: '#10b981' },
      { word: 'Piorun', cleanWord: 'Piorun sprawiedliwości', phonetic: '[Tia sét công lý giáng tội]', plMeaning: 'Boski wyrok uderzający w Balladynę po tym, jak sama trzykrotnie skazała zbrodniarza.', vnMeaning: 'Tia sét đánh trúng Balladyna sau khi cô tự tuyên án tử hình kẻ thủ ác.', color: '#3b82f6' }
    ],
    2: [
      { word: 'Dziady cz. II', cleanWord: 'Dziady cz. II', phonetic: '[Dzia-dy] • Kịch chiêu hồn của Mickiewicz', plMeaning: 'Dramat Adama Mickiewicza o pogańskim obrzędzie wywoływania duchów w cmentarnej kaplicy.', vnMeaning: 'Tác phẩm kịch huyền bí về lễ cầu siêu gọi hồn người chết trong nhà nguyện.', color: '#8b5cf6' },
      { word: 'Guślarz', cleanWord: 'Guślarz', phonetic: '[Gu-ślarz] • Thầy cúng chủ trì buổi lễ', plMeaning: 'Przewodnik obrzędu Dziadów, który przyzywa duchy zaklęciem: „Ciemno wszędzie, głucho wszędzie…”.', vnMeaning: 'Người chủ tế đọc lời thần chú gọi các linh hồn vất vưởng về giải cứu.', color: '#3b82f6' },
      { word: 'Józio i Rózia', cleanWord: 'Duchy lekkie', phonetic: '[Linh hồn hai đứa trẻ vô lo]', plMeaning: 'Duchy lekkie, które nie zaznały na ziemi goryczy i prosiły o dwa ziarnka gorczycy.', vnMeaning: 'Hồn hai đứa bé sống sung sướng chưa nếm đau khổ xin 2 hạt mù tạt để lên trời.', color: '#10b981' },
      { word: 'Zły Pan', cleanWord: 'Widmo Złego Pana', phonetic: '[Hồn ma gã địa chủ tàn bạo]', plMeaning: 'Duch ciężki – bezlitosny dziedzic wioski, szarpany przez żarłoczne ptactwo za brak miłosierdzia.', vnMeaning: 'Hồn ma địa chủ độc ác bị bầy chim mổ xé vì khi sống không hề biết thương người.', color: '#ef4444' }
    ],
    3: [
      { word: 'Mały Książę', cleanWord: 'Mały Książę', phonetic: '[Ma-wy Ksią-żę] • Hoàng tử bé (Saint-Exupéry)', plMeaning: 'Filozoficzna powiastka o chłopcu podróżującym z asteroidy B-612 w poszukiwaniu przyjaźni.', vnMeaning: 'Cuốn sách triết lý về cậu bé rời tiểu tinh cầu B-612 đi tìm bạn bè đích thực.', color: '#3b82f6' },
      { word: 'Róża', cleanWord: 'Róża', phonetic: '[Ró-ża] • Bông hoa hồng kiêu kỳ', plMeaning: 'Jedyna i wyjątkowa roślina na planecie Małego Księcia, wymagająca troski i przykrycia kloszem.', vnMeaning: 'Bông hoa hồng duy nhất đỏng đảnh nhưng được Hoàng tử bé hết lòng chở che.', color: '#ef4444' },
      { word: 'Lis', cleanWord: 'Lis i oswajanie', phonetic: '[Chú cáo dạy bài học thuần hoá]', plMeaning: 'Uczy chłopca tajemnicy więzi: „Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.”', vnMeaning: 'Chú cáo dạy bài học: "Người ta chỉ nhìn thấy rõ bằng trái tim, điều cốt lõi vô hình trước mắt".', color: '#f59e0b' },
      { word: 'Baobaby', cleanWord: 'Baobaby', phonetic: '[Cây bao-báp biểu tượng mầm mống xấu]', plMeaning: 'Groźne drzewa rozsadzające korzeniami planetę – symbol zła, które trzeba wyrywać zaraz po wzejściu.', vnMeaning: 'Loài cây nguy hiểm cần phải nhổ bỏ ngay từ sớm trước khi chúng phá hủy hành tinh.', color: '#10b981' }
    ],
    4: [
      { word: 'Kamienie na szaniec', cleanWord: 'Kamienie na szaniec', phonetic: '[Ka-mie-nie na sza-niec] • Aleksander Kamiński', plMeaning: 'Książka o harcerzach Szarych Szeregów: Alku, Rudym i Zośce, walczących z niemieckim okupantem.', vnMeaning: 'Tác phẩm ca ngợi tinh thần bất khuất của các hướng đạo sinh trẻ tuổi Warsaw.', color: '#3b82f6' },
      { word: 'Rudy', cleanWord: 'Jan Bytnar „Rudy”', phonetic: '[Rudy - Người anh hùng bất khuất]', plMeaning: 'Niezłomny harcerz aresztowany przez Gestapo, który mimo tortur nie wydał żadnego przyjaciela.', vnMeaning: 'Người chiến sĩ dũng cảm dù bị tra tấn dã man vẫn kiên quyết không khai bạn bè.', color: '#ef4444' },
      { word: 'Akcja pod Arsenałem', cleanWord: 'Akcja pod Arsenałem', phonetic: '[Trận phục kích giải cứu đồng đội]', plMeaning: 'Brawurowa akcja odbicia Rudego z rąk gestapowców 26 marca 1943 roku w Warszawie.', vnMeaning: 'Cuộc đột kích táo bạo giải thoát Rudy khỏi xe tù Gestapo ngày 26/3/1943.', color: '#f59e0b' },
      { word: 'Mały Sabotaż', cleanWord: 'Mały Sabotaż', phonetic: '[Phá hoại ngầm tinh thần giặc]', plMeaning: 'Akcje organizacji Wawer: rysowanie kotwic Polski Walczącej i zrywanie flag hitlerowskich.', vnMeaning: 'Phong trào vẽ mỏ neo hy vọng và xé cờ phát xít làm lung lay ý chí kẻ thù.', color: '#10b981' }
    ],
    5: [
      { word: 'Opowieść wigilijna', cleanWord: 'Opowieść wigilijna', phonetic: '[O-po-wieść wi-gi-lij-na] • Charles Dickens', plMeaning: 'Opowiadanie o chciwym Ebenezerze Scrooge’u, który w noc wigilijną przechodzi wielką przemianę.', vnMeaning: 'Truyện về lão Scrooge keo kiệt thức tỉnh tâm hồn sau đêm Giáng sinh kỳ diệu.', color: '#3b82f6' },
      { word: 'Ebenezer Scrooge', cleanWord: 'Scrooge', phonetic: '[Lão già bủn xỉn Scrooge]', plMeaning: 'Londyński kantorzysta nienawidzący świąt („Brednie!”), który odnajduje radość dzielenia się z ubogimi.', vnMeaning: 'Nhân vật điển hình của sự hà tiện sau đó đã trở thành nhà từ thiện hào phóng.', color: '#f59e0b' },
      { word: 'Jakub Marley', cleanWord: 'Duch Marleya', phonetic: '[Hồn ma Marley mang dây xích sắt]', plMeaning: 'Zmarły wspólnik Scrooge’a dźwigający łańcuch ze skarbonek, kłódek i ksiąg rachunkowych.', vnMeaning: 'Hồn ma người bạn kéo theo sợi xích sắt đúc bằng chính lòng tham khi còn sống.', color: '#8b5cf6' },
      { word: 'Mały Tim', cleanWord: 'Mały Tim', phonetic: '[Cậu bé Tim tật nguyền đáng yêu]', plMeaning: 'Chory synek kancelisty Boba Cratchita, którego dobroć i uśmiech ratują ludzkie serca.', vnMeaning: 'Cậu bé tật nguyền khát khao sự sống khơi dậy lòng trắc ẩn trong trái tim Scrooge.', color: '#10b981' }
    ]
  },

  // EPIZOD 8: Formy Wypowiedzi II
  8: {
    1: [
      { word: 'Teza w rozprawce', cleanWord: 'Teza', phonetic: '[Te-za w roz-praw-ce] • Luận đề mở đầu bài văn', plMeaning: 'Jasne stanowisko autora we wstępie (np. „Uważam, że przyjaźń jest największą wartością”).', vnMeaning: 'Lời tuyên bố khẳng định lập trường rõ ràng ngay ở phần mở bài văn nghị luận.', color: '#3b82f6' },
      { word: 'Wstęp do rozprawki', cleanWord: 'Wstęp', phonetic: '[Phần Mở bài nêu vấn đề]', plMeaning: 'Część wprowadzająca: nawiązanie do tematu, wyjaśnienie pojęć i sformułowanie tezy.', vnMeaning: 'Đoạn văn mở đầu giới thiệu chủ đề, giải thích từ khóa và nêu quan điểm.', color: '#10b981' },
      { word: 'Słownictwo argumentacyjne', cleanWord: 'Łączniki', phonetic: '[Từ ngữ lập luận nối ý]', plMeaning: 'Wyrażenia organizujące wywód: „Po pierwsze…”, „Kolejnym dowodem jest…”, „Warto zauważyć…”.', vnMeaning: 'Các cụm từ liên kết logic: Thứ nhất là..., Đáng chú ý rằng..., Minh chứng rõ nhất là...', color: '#f59e0b' },
      { word: 'Hipoteza', cleanWord: 'Hipoteza', phonetic: '[Hi-po-te-za] • Giả thuyết khi chưa chắc chắn', plMeaning: 'Przypuszczenie wymagające sprawdzenia w toku rozważań (gdy nie mamy gotowej tezy).', vnMeaning: 'Giả thuyết đặt ra để cân nhắc xem xét khi chưa thể khẳng định dứt khoát.', color: '#ec4899' }
    ],
    2: [
      { word: 'Argument z lektury', cleanWord: 'Argument', phonetic: '[Luận cứ lấy từ tác phẩm CKE]', plMeaning: 'Dowód oparty na losach bohatera lektury obowiązkowej (np. postawa Rudego potwierdza tezę).', vnMeaning: 'Lý lẽ và bằng chứng lấy từ cuộc đời các nhân vật trong sách giáo khoa bắt buộc.', color: '#3b82f6' },
      { word: 'Wniosek cząstkowy', cleanWord: 'Wniosek cząstkowy', phonetic: '[Kết luận nhỏ sau mỗi luận cứ]', plMeaning: 'Podsumowanie każdego akapitu argumentacyjnego potwierdzające słuszność myśli.', vnMeaning: 'Câu kết đoạn rút ra bài học sau khi phân tích xong một dẫn chứng cụ thể.', color: '#10b981' },
      { word: 'Zakończenie rozprawki', cleanWord: 'Zakończenie', phonetic: '[Phần Kết luận tổng hợp]', plMeaning: 'Syntetyczne zebranie wniosków, powrót do tezy i końcowa refleksja o świecie.', vnMeaning: 'Đoạn kết tóm tắt toàn bộ lý lẽ, khẳng định lại tính đúng đắn của luận điểm.', color: '#f59e0b' },
      { word: 'Spójność tekstu', cleanWord: 'Spójność', phonetic: '[Tính mạch lạc logic của bài văn]', plMeaning: 'Płynne przechodzenie między myślami i logiczny układ akapitów bez chaosu.', vnMeaning: 'Sự liên kết chặt chẽ nhịp nhàng giữa các câu các đoạn trong toàn bài văn.', color: '#8b5cf6' }
    ],
    3: [
      { word: 'Punkt kulminacyjny', cleanWord: 'Punkt kulminacyjny', phonetic: '[Cao trào kịch tính nhất]', plMeaning: 'Moment największego napięcia w opowiadaniu, po którym następuje rozwiązanie akcji.', vnMeaning: 'Thời khắc gay cấn hồi hộp đỉnh điểm trước khi nút thắt câu chuyện được gỡ.', color: '#ef4444' },
      { word: 'Zawiązanie akcji', cleanWord: 'Zawiązanie akcji', phonetic: '[Sự kiện khơi mào xung đột]', plMeaning: 'Pierwsze wydarzenie burzące spokój bohaterów i rozpoczynające główną przygodę.', vnMeaning: 'Biến cố đầu tiên làm đảo lộn cuộc sống bình yên, mở đầu cho cuộc phiêu lưu.', color: '#3b82f6' },
      { word: 'Zwrot akcji', cleanWord: 'Zwrot akcji', phonetic: '[Bước ngoặt bất ngờ đảo chiều]', plMeaning: 'Niespodziewana zmiana biegu wydarzeń zaskakująca czytelnika.', vnMeaning: 'Tình huống thay đổi bất ngờ làm chuyển hướng toàn bộ diễn biến câu chuyện.', color: '#f59e0b' },
      { word: 'Rozwiązanie akcji', cleanWord: 'Rozwiązanie akcji', phonetic: '[Hồi kết gỡ bỏ mọi mâu thuẫn]', plMeaning: 'Końcowy etap opowiadania wyjaśniający losy bohaterów i zamykający wątki.', vnMeaning: 'Phần kết thúc giải quyết xong xuôi mọi xung đột và khép lại câu chuyện.', color: '#10b981' }
    ],
    4: [
      { word: 'Pauza dialogowa', cleanWord: 'Pauza myślnika', phonetic: '[Dấu gạch ngang đầu lời thoại]', plMeaning: 'Znak interpunkcyjny (—) otwierający każdą nową wypowiedź postaci od nowej linii.', vnMeaning: 'Dấu gạch ngang mở đầu một lượt lời thoại trực tiếp của nhân vật.', color: '#3b82f6' },
      { word: 'Przeżycia wewnętrzne', cleanWord: 'Przeżycia wewnętrzne', phonetic: '[Tâm trạng và cảm xúc nhân vật]', plMeaning: 'Opis emocji bohatera: strachu, nadziei, radości, żalu lub triumfu.', vnMeaning: 'Đoạn văn đi sâu miêu tả cảm xúc lo âu, hy vọng hoặc niềm hân hoan trong lòng.', color: '#10b981' },
      { word: 'Dynamiczne czasowniki', cleanWord: 'Czasowniki akcji', phonetic: '[Động từ hành động dồn dập]', plMeaning: 'Słowa nadające tempo akcji (np. skoczył, runął, błysnął, krzyknął).', vnMeaning: 'Những động từ chỉ hành động nhanh tạo nhịp điệu dồn dập cho cảnh hành động.', color: '#ef4444' },
      { word: 'Puenta', cleanWord: 'Puenta', phonetic: '[Puen-ta] • Câu chốt bất ngờ sâu cay', plMeaning: 'Zaskakujące i błyskotliwe zakończenie utworu podsumowujące całą historię.', vnMeaning: 'Cái kết bất ngờ đầy ý vị đúc kết lại toàn bộ ý nghĩa câu chuyện.', color: '#f59e0b' }
    ],
    5: [
      { word: 'Sukces szkolny', cleanWord: 'Sukces', phonetic: '[Thành công xuất sắc]', plMeaning: 'Zdobycie maksymalnej liczby punktów na egzaminie ósmoklasisty z języka polskiego!', vnMeaning: 'Giành điểm số tối đa trong kỳ thi tốt nghiệp lớp 8 môn tiếng Ba Lan!', color: '#10b981' },
      { word: 'Świadectwo z paskiem', cleanWord: 'Świadectwo', phonetic: '[Bằng khen dải ruy băng đỏ trắng]', plMeaning: 'Wyróżnienie za wspaniałe wyniki w nauce i wzorowe zachowanie w szkole podstawowej.', vnMeaning: 'Bằng khen học sinh giỏi xuất sắc với dải ruy băng đỏ trắng đáng tự hào.', color: '#ef4444' },
      { word: 'Duma', cleanWord: 'Duma', phonetic: '[Niềm tự hào to lớn]', plMeaning: 'Uczucie radości z pokonania wszystkich 8 epizodów i opanowania języka polskiego!', vnMeaning: 'Niềm tự hào vì đã kiên trì chinh phục thành công cả 8 tập thử thách tiếng Ba Lan!', color: '#f59e0b' },
      { word: 'Droga do liceum', cleanWord: 'Liceum', phonetic: '[Bước vào trường cấp 3]', plMeaning: 'Nowy rozdział w życiu i pewność siebie w posługiwaniu się językiem polskim.', vnMeaning: 'Hành trình mới bước vào trường cấp 3 với vốn tiếng Ba Lan vững vàng, tự tin.', color: '#3b82f6' }
    ]
  }
};

export function getFloorChestCards(floorNumber, episodePip = 1) {
  const pip = Math.max(1, Math.min(8, Number(episodePip) || 1));
  const f = Math.max(1, Math.min(5, Number(floorNumber) || 1));
  const epData = EPISODE_FLOOR_CHEST_CARDS[pip] || EPISODE_FLOOR_CHEST_CARDS[1];
  return epData[f] || epData[1];
}
