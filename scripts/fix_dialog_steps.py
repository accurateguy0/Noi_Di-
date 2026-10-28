import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/dialogSteps.js', 'r', encoding='utf-8') as f:
    content = f.read()

REPLACEMENTS = [
    # #1
    ("{ text: 'Dobranoc!', vnText: 'Chúc ngủ ngon!', speakText: 'Dobranoc!', correct: false }",
     "{ text: 'Dobranoc, idę już prosto spać!', vnText: 'Chúc ngủ ngon, tớ đi ngủ luôn đây!', speakText: 'Dobranoc!', correct: false }"),
    ("{ text: 'Która strona?', vnText: 'Trang mấy?', speakText: 'Która strona?', correct: false }",
     "{ text: 'Która to jest strona w książce?', vnText: 'Trang mấy trong sách thế?', speakText: 'Która strona?', correct: false }"),
    ("{ text: 'Nara!', vnText: 'Tạm biệt!', speakText: 'Nara!', correct: false }",
     "{ text: 'Nara, muszę już szybko uciekać!', vnText: 'Tạm biệt, tớ phải chạy ngay đây!', speakText: 'Nara!', correct: false }"),

    # #2
    ("{ text: 'Poproszę bilet ulgowy.', vnText: 'Cho xin vé giảm giá.', speakText: 'Bilet ulgowy', correct: false }",
     "{ text: 'Poproszę jeden bilet ulgowy na tramwaj.', vnText: 'Cho xin một vé giảm giá xe điện.', speakText: 'Bilet ulgowy', correct: false }"),
    ("{ text: 'Boli mnie brzuch.', vnText: 'Tớ bị đau bụng.', speakText: 'Boli mnie brzuch', correct: false }",
     "{ text: 'Boli mnie bardzo mocno brzuch od rana.', vnText: 'Tớ bị đau bụng dữ dội từ sáng.', speakText: 'Boli mnie brzuch', correct: false }"),
    ("{ text: 'Do widzenia jutro!', vnText: 'Hẹn gặp lại ngày mai!', speakText: 'Do widzenia', correct: false }",
     "{ text: 'Do widzenia jutro rano po południu!', vnText: 'Hẹn gặp lại vào chiều mai nhé!', speakText: 'Do widzenia', correct: false }"),

    # #3
    ("{ text: 'Teraz śpimy w domu.', vnText: 'Bây giờ ngủ ở nhà.', speakText: 'Śpimy', correct: false }",
     "{ text: 'Teraz wszyscy odpoczywamy w domu po szkole.', vnText: 'Bây giờ tất cả nghỉ ngơi ở nhà sau giờ học.', speakText: 'Śpimy', correct: false }"),
    ("{ text: 'Poproszę reklamówkę.', vnText: 'Cho xin túi nilon.', speakText: 'Reklamówka', correct: false }",
     "{ text: 'Poproszę jedną reklamówkę na zakupy spożywcze.', vnText: 'Cho xin một túi nilon đựng đồ tạp hóa.', speakText: 'Reklamówka', correct: false }"),
    ("{ text: 'Mam 13 lat.', vnText: 'Tớ 13 tuổi.', speakText: 'Trzynaście', correct: false }",
     "{ text: 'Mam trzynaście lat i chodzę do klasy siódmej.', vnText: 'Tớ 13 tuổi và đang học lớp 7.', speakText: 'Trzynaście', correct: false }"),

    # #4
    ("{ text: 'Dobranoc!', vnText: 'Chúc ngủ ngon!', speakText: 'Dobranoc', correct: false },\n          { text: 'Nie rozumiem.', vnText: 'Tớ không hiểu.', speakText: 'Nie rozumiem', correct: false },\n          { text: 'Przypał!', vnText: 'Ngại quá!', speakText: 'Przypał', correct: false }",
     "{ text: 'Dobranoc wszystkim!', vnText: 'Chúc mọi người ngủ ngon!', speakText: 'Dobranoc', correct: false },\n          { text: 'Nie rozumiem cię!', vnText: 'Tớ không hiểu cậu!', speakText: 'Nie rozumiem', correct: false },\n          { text: 'Ale wielki przypał!', vnText: 'Ngại thật sự luôn!', speakText: 'Przypał', correct: false }"),

    # #5
    ("{ text: 'Mam tylko linijkę i cyrkiel.', vnText: 'Tớ chỉ có thước kẻ và compa.', speakText: 'Linijka', correct: false }",
     "{ text: 'Mam w plecaku tylko linijkę i cyrkiel.', vnText: 'Tớ chỉ có thước kẻ và compa trong cặp.', speakText: 'Linijka', correct: false }"),
    ("{ text: 'Poproszę bilet normalny.', vnText: 'Cho xin vé thường.', speakText: 'Bilet', correct: false }",
     "{ text: 'Poproszę jeden bilet normalny na pociąg.', vnText: 'Cho xin một vé thường đi tàu hỏa.', speakText: 'Bilet', correct: false }"),
    ("{ text: 'Dobranoc!', vnText: 'Chúc ngủ ngon!', speakText: 'Dobranoc', correct: false }\n        ]",
     "{ text: 'Dobranoc, idę już prosto spać do łóżka!', vnText: 'Chúc ngủ ngon, tớ đi thẳng lên giường ngủ đây!', speakText: 'Dobranoc', correct: false }\n        ]"),

    # #6
    ("{ text: 'Elo ziomek!', vnText: 'Chào bạn hiền!', speakText: 'Elo', correct: false }",
     "{ text: 'Siemanko ziomeczku!', vnText: 'Chào cậu bạn hiền!', speakText: 'Elo', correct: false }"),
    ("{ text: 'Nara, wychodzę!', vnText: 'Tạm biệt, tớ ra ngoài!', speakText: 'Nara', correct: false }",
     "{ text: 'Nara, uciekam stąd!', vnText: 'Tạm biệt, tớ chuồn đây!', speakText: 'Nara', correct: false }"),
    ("{ text: 'Smacznego!', vnText: 'Chúc ngon miệng!', speakText: 'Smacznego', correct: false }",
     "{ text: 'Smacznego wszystkim!', vnText: 'Chúc mọi người ngon miệng!', speakText: 'Smacznego', correct: false }"),

    # #7
    ("{ text: 'Idę na przystanek autobusowy.', vnText: 'Tớ ra trạm xe buýt.', speakText: 'Przystanek', correct: false }",
     "{ text: 'Idę szybko na przystanek autobusowy.', vnText: 'Tớ chạy nhanh ra trạm xe buýt đây.', speakText: 'Przystanek', correct: false }"),
    ("{ text: 'Poproszę sos czosnkowy.', vnText: 'Cho xin sốt tỏi.', speakText: 'Sos', correct: false }",
     "{ text: 'Poproszę łagodny sos czosnkowy do dania.', vnText: 'Cho xin sốt tỏi dịu nhẹ cho món ăn.', speakText: 'Sos', correct: false }"),
    ("{ text: 'Nie znam polskiego.', vnText: 'Tớ không biết tiếng Ba Lan.', speakText: 'Nie', correct: false }",
     "{ text: 'Nie znam jeszcze dobrze języka polskiego.', vnText: 'Tớ chưa biết giỏi tiếng Ba Lan lắm.', speakText: 'Nie', correct: false }"),

    # #8
    ("{ text: 'Dobra, nara!', correct: false },\n          { text: 'Grasz w...?', correct: false }",
     "{ text: 'Dobra, nara ziomek!', correct: false },\n          { text: 'Grasz w coś fajnego?', correct: false }"),

    # #9
    ("{ text: 'Nie mam legitymacji szkolnej.', correct: false },\n          { text: 'Boli mnie kolano.', correct: false },\n          { text: 'Do widzenia pani!', correct: false }",
     "{ text: 'Nie mam przy sobie legitymacji szkolnej.', correct: false },\n          { text: 'Boli mnie bardzo mocno lewe kolano.', correct: false },\n          { text: 'Do widzenia pani od języka polskiego!', correct: false }"),

    # #10
    ("{ text: 'Mega sztos, zrób to jeszcze raz!', correct: false },\n          { text: 'Poproszę bilet ulgowy.', correct: false },\n          { text: 'Dzień dobry panie doktorze.', correct: false }",
     "{ text: 'To był mega sztos, zrób to koniecznie jeszcze raz!', correct: false },\n          { text: 'Poproszę jeden bilet ulgowy do kina na popołudnie.', correct: false },\n          { text: 'Dzień dobry panie doktorze, czy mogę wejść do sali?', correct: false }"),

    # #11
    ("{ text: 'Jaki masz nick w Robloxie?', correct: false },\n          { text: 'Smacznego obiadu!', correct: false },\n          { text: 'Na miejscu czy na wynos?', correct: false }",
     "{ text: 'Jaki masz teraz swój nick w grze Roblox?', correct: false },\n          { text: 'Życzę wszystkim bardzo smacznego obiadu!', correct: false },\n          { text: 'Zamawiasz ten obiad na miejscu czy na wynos?', correct: false }"),

    # #12
    ("{ text: 'Masakra, nigdy w życiu!', correct: false },\n          { text: 'Przypał na całego!', correct: false },\n          { text: 'Dobranoc!', correct: false }",
     "{ text: 'Masakra, nigdy w życiu tego nie zrobię!', correct: false },\n          { text: 'To jest po prostu totalny przypał na całego!', correct: false },\n          { text: 'Dobranoc wszystkim, do widzenia jutro rano!', correct: false }"),

    # #13
    ("{ text: '„Która strona?”', correct: false },\n          { text: '„Nara!”', correct: false }",
     "{ text: '„Która to jest strona w książce?”', correct: false },\n          { text: '„Nara, do zobaczenia jutro!”', correct: false }"),

    # #14
    ("{ text: '„Wyrwij cały zeszyt i wyrzuć do kosza.”', correct: false },\n          { text: '„Zamaluj to keczupem.”', correct: false }",
     "{ text: '„Wyrwij całą kartkę z zeszytu i wyrzuć ją do kosza!”', correct: false },\n          { text: '„Zamaluj tę wielką plamę czerwonym keczupem z kanapki!”', correct: false }"),

    # #15
    ("{ text: '„Cicho tam przy tablicy!”', correct: false },\n          { text: '„Poproszę frytki na wynos!”', correct: false }",
     "{ text: '„Proszę o absolutną ciszę pod tablicą w klasie!”', correct: false },\n          { text: '„Poproszę dużą porcję frytek na wynos z sosem!”', correct: false }"),

    # #16
    ("{ text: '„Zgubiłem plecak w autobusie.”', correct: false },\n          { text: '„Dobranoc!”', correct: false }",
     "{ text: '„Zgubiłem wczoraj swój nowy plecak w autobusie miejskim.”', correct: false },\n          { text: '„Dobranoc wszystkim kolegom, idę już prosto do łóżka!”', correct: false }"),

    # #17
    ("{ text: '„Dasz ID?”', correct: false },\n          { text: '„Dobranoc!”', correct: false }",
     "{ text: '„Podasz mi swoje ID w grze?”', correct: false },\n          { text: '„Dobranoc, do widzenia jutro!”', correct: false }"),

    # #18
    ("{ text: '„Mam sneakersy!”', correct: false },\n          { text: '„Nara!”', correct: false }",
     "{ text: '„Mam nowe, modne sneakersy!”', correct: false },\n          { text: '„Nara, biegnę do szatni!”', correct: false }"),

    # #19
    ("{ text: 'Hejty', correct: false },\n          { text: 'Przypał', correct: false },\n          { text: 'Nudne', correct: false }",
     "{ text: 'Ostre hejty', correct: false },\n          { text: 'Mega przypał', correct: false },\n          { text: 'Strasznie nudne', correct: false }"),

    # #20
    ("{ text: 'Mega sztos!', correct: false },\n          { text: 'Fajne lajki!', correct: false },\n          { text: 'Spoko zabawa!', correct: false }",
     "{ text: 'To jest naprawdę mega wielki sztos!', correct: false },\n          { text: 'Zbieram w sieci same fajne lajki!', correct: false },\n          { text: 'Dla mnie to jest całkiem spoko zabawa!', correct: false }"),

    # #21
    ("{ text: 'Strasznie nudne...', correct: false },\n          { text: 'Hejty', correct: false },\n          { text: 'Bilet ulgowy', correct: false }",
     "{ text: 'To było strasznie nudne...', correct: false },\n          { text: 'Same złośliwe hejty!', correct: false },\n          { text: 'Kupiłem tani bilet ulgowy!', correct: false }"),

    # #22
    ("{ text: '„Nara!” — pożegnanie', correct: false },\n          { text: '„Która strona?” — pytanie o stronę w książce', correct: false }",
     "{ text: '„Nara!” — luźne pożegnanie z kolegami po zakończonych lekcjach', correct: false },\n          { text: '„Która strona?” — zapytanie o stronę z zadaniem w podręczniku', correct: false }"),

    # #23
    ("{ text: '„Grasz w...?” — pytanie o gry', correct: false },\n          { text: '„Przypał!” — reakcja na wpadkę', correct: false }",
     "{ text: '„Grasz w...?” — pytanie o ulubione gry komputerowe ze znajomymi', correct: false },\n          { text: '„Przypał!” — spontaniczna reakcja na niespodziewaną szkolną wpadkę', correct: false }"),

    # #24
    ("{ text: '„Siema!” — powitanie', correct: false },\n          { text: '„Masakra!” — wyraz przerażenia', correct: false }",
     "{ text: '„Siema!” — serdeczne powitanie z kolegą', correct: false },\n          { text: '„Masakra!” — wyraz ogromnego przerażenia', correct: false }"),

    # #25
    ("{ text: '„Masz ID?” — pytanie o profil w grze', correct: false },\n          { text: '„Dobranoc!” — pożegnanie', correct: false }",
     "{ text: '„Masz ID?” — pytanie o numer profilu w internetowej grze', correct: false },\n          { text: '„Dobranoc!” — wieczorne pożegnanie przed pójściem do łóżka', correct: false }"),

    # #26
    ("{ text: '„Mam sneakersy!” — pochwała butów', correct: false },\n          { text: '„Nara!” — wyjście z sali', correct: false }",
     "{ text: '„Mam sneakersy!” — pochwalenie się nowymi sportowymi butami', correct: false },\n          { text: '„Nara!” — pożegnanie przed szybkim wyjściem z sali lekcyjnej', correct: false }")
]

for old, new in REPLACEMENTS:
    if old not in content:
        print(f"WARN: not found:\n{old[:40]}...")
    content = content.replace(old, new)

with open('src/data/dialogSteps.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated dialogSteps.js")
