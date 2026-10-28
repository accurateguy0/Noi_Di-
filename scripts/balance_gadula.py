import sys, os, re
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

# We can define tailored replacements for all 59 disparities in gadulaDialogSteps.js
# Each key is the exact text of the correct answer, and values are the balanced wrong answers!

GADULA_BALANCED = {
    # STEP 1
    "„Porządna rozgrzewka całego ciała, żeby uniknąć kontuzji!”": [
        "„Zjedzenie tłustych chipsów i wypicie dużej butelki coli!”",
        "„Zostawienie wszystkich rzeczy w szatni i ucieczka do domu!”"
    ],
    # STEP 2
    "„Biała koszulka, krótkie spodenki i buty z jasną podeszwą.”": [
        "„Gruba zimowa kurtka z kapturem, wełniana czapka i szalik.”",
        "„Eleganckie jeansy z paskiem oraz skórzane buty wyjściowe.”"
    ],
    # STEP 3
    "„W siatkówkę, koszykówkę lub piłkę nożną halową!”": [
        "„W gry na smartfonie pod ławką w szatni szkolnej!”",
        "„W malowanie farbami plakatowymi na korytarzu!”"
    ],
    # STEP 4
    "„Zatrzymuję się, przerywam grę i uważnie słucham polecenia trenera!”": [
        "„Biegnę z całych sił przed siebie z mocno zamkniętymi oczami!”",
        "„Wychodzę natychmiast na korytarz bez pytania o jakąkolwiek zgodę!”"
    ],
    # STEP 5
    "„Bo w trakcie biegu można się niebezpiecznie zakrztusić!”": [
        "„Bo guma do żucia natychmiast zmienia kolor stroju na WF!”",
        "„Bo od żucia gumy psuje się metalowy gwizdek sędziego!”"
    ],
    # STEP 6
    "„Podaje rękę rywalom i gratuluje im dobrej gry zgodnie z zasadą Fair Play!”": [
        "„Kopie ze złością piłkę w okno sali i natychmiast obraża się na wszystkich!”",
        "„Zabiera siatkę z bramki do plecaka i ucieka obrażony prosto do swojego domu!”"
    ],
    # STEP 8
    "„Przerywamy akcję i natychmiast zgłaszamy to nauczycielowi WF-u!”": [
        "„Gramy zawzięcie dalej, zupełnie nie zwracając uwagi na jego ból!”",
        "„Śmiejemy się głośno z jego potknięcia razem z całą naszą drużyną!”"
    ],
    # STEP 10
    "„Uporządkowane na ławkach lub w szafkach w szatni sportowej!”": [
        "„Rozrzucone na samym środku boiska pod zawieszonym koszem!”",
        "„Zostawione w pokoju nauczycielskim na wielkim stole narad!”"
    ],
    # STEP 11
    "„45 minut (a cały mecz 90 minut)!”": [
        "„Około 10 minut (a cały mecz 20)!”",
        "„Około 60 minut (a cały mecz 120)!”"
    ],
    # STEP 12
    "„Oficjalne ostrzeżenie za nieprzepisowe lub niesportowe zachowanie!”": [
        "„Specjalną nagrodę za najładniejszy i najbardziej celny strzał!”",
        "„Darmowe zaproszenie na pyszny obiad do szkolnej stołówki dla gracza!”"
    ],
    # STEP 13
    "„Wykluczenie zawodnika z gry i konieczność opuszczenia boiska!”": [
        "„Dodatkowe dziesięć minut przerwy na słodkie lody waniliowe!”",
        "„Automatyczne zwycięstwo w całym turnieju piłkarskim w szkole!”"
    ],
    # STEP 14
    "„Bo piłka nożna to gra zespołowa i cała drużyna pracuje na wspólny sukces!”": [
        "„Bo podawanie piłki kolegom jest surowo zabronione przez międzynarodowe przepisy!”",
        "„Bo bramkarz drużyny przeciwnej bardzo nie lubi łapać lecącej w stronę bramki piłki!”"
    ],
    # STEP 15
    "„Myjemy ręce i twarz, przebieramy się w czyste ubranie i pijemy wodę!”": [
        "„Idziemy na trudną lekcję matematyki w zupełnie spoconym stroju!”",
        "„Chowamy mokrą od potu koszulkę między czyste szkolne książki w torbie!”"
    ],
    # STEP 16
    "„Dziękuję panie trenerze! Zawsze gram uczciwie i z zaangażowaniem!”": [
        "„Zapomniałem już zupełnie jak się biega po sali gimnastycznej!”",
        "„Idę od razu spać na niebieskim materacu gimnastycznym w kącie!”"
    ],
    # STEP 17
    "„Dzień dobry! Od rana boli mnie brzuch i czuję się bardzo osłabiony.”": [
        "„Dzień dobry! Chcę tylko pograć na telefonie w grę ze znajomymi.”",
        "„Dzień dobry! Kupuję bilet ulgowy za jedną monetę w automacie.”"
    ],
    # STEP 18
    "„Jest mi na zmianę gorąco i zimno, chyba mam lekką gorączkę.”": [
        "„Zapomniałem długiej plastikowej linijki na lekcję plastyki.”",
        "„Bardzo lubię jeść chrupiącą pizzę na wyjątkowo cienkim cieście.”"
    ],
    # STEP 19
    "„Jadłem tylko w pośpiechu małą kanapkę i wypiłem herbatę.”": [
        "„Zjadłem trzy plastikowe linijki i miękką gumkę do ścierania.”",
        "„Nie pamiętam już zupełnie jak się nazywam ani gdzie mieszkam.”"
    ],
    # STEP 20
    "„Tak, trochę drapie mnie w gardle i czuję ucisk w skroniach.”": [
        "„Boli mnie mój stary granatowy plecak zostawiony w szatni.”",
        "„Dostałem wczoraj bardzo dobrą ocenę z trudnej przyrody.”"
    ],
    # STEP 21
    "„Dziękuję bardzo pani pielęgniarce. Odpocznę chwilę na kozetce.”": [
        "„Nie chcę pić wody, wolę głośno biegać i krzyczeć na korytarzu.”",
        "„Nie przygotowałem trudnego zadania domowego z matematyki na dziś.”"
    ],
    # STEP 22
    "„Tak, odpocząłem i czuję się już o wiele lepiej, dziękuję!”": [
        "„Zamawiam dużą porcję frytek z ostrym keczupem na wynos!”",
        "„Wybieram język obcy w dotykowym automacie biletowym w holu!”"
    ],
    # STEP 23
    "„Nie, dreszcze minęły i mam już więcej sił.”": [
        "„Tak, zgubiłem piórnik pod drewnianą tablicą.”",
        "„Poproszę jeden ulgowy bilet na tramwaj miejski.”"
    ],
    # STEP 24
    "„Cieszę się bardzo! Dziękuję pani pielęgniarce za troskliwą pomoc!”": [
        "„Zgubiłem wczoraj swój nowy plecak w ciemnej szatni szkolnej!”",
        "„Czy mogę dostać czerwony długopis do rysowania kwiatów w zeszycie?”"
    ],
    # STEP 25
    "„Dzień dobry! Tak, mam umówioną wizytę u pana doktora.”": [
        "„Dzień dobry! Szukam nowego boiska do piłki nożnej Orlik.”",
        "„Dzień dobry! Nie zamierzam odpowiadać na żadne pytania.”"
    ],
    # STEP 28
    "„Dziękuję pani pielęgniarce! Wchodzę na badanie do pana doktora.”": [
        "„Strasznie się boję badania i natychmiast uciekam na dwór przed szkołę.”",
        "„Czy ma pani zainstalowaną jakąś nową wciągającą grę na smartfonie?”"
    ],
    # STEP 29
    "„Mam komputer na biurku, szybkie Wi-Fi i słuchawki z mikrofonem!”": [
        "„Mam w plecaku tylko zeszyt w kratkę i długą linijkę do geometrii!”",
        "„Kupuję w automacie ulgowy bilet na miejski tramwaj w centrum!”"
    ],
    # STEP 30
    "„Gramy w Brawl Stars i Robloxa, gadając przez Discorda!”": [
        "„Boli mnie brzuch i muszę zmierzyć temperaturę termometrem!”",
        "„Poproszę świeżą bułkę z piekarni i mocną reklamówkę na zakupy!”"
    ],
    # STEP 31
    "„Podłączam szybką ładowarkę albo podpinam pojemny powerbank!”": [
        "„Wyrzucam cały telefon ze złością do wielkiego kosza na śmieci!”",
        "„Idę od razu do gabinetu pielęgniarki po duży plaster z opatrunkiem!”"
    ],
    # STEP 32
    "„Hej, jaki masz nick w grze? Dodam cię do znajomych!”": [
        "„Która to jest strona z zadaniem w podręczniku do historii?”",
        "„Poproszę dodatkowy łagodny sos czosnkowy do mojego kebaba!”"
    ],
    # STEP 35
    "„Najpierw starannie odrabiamy wszystkie zadania domowe i obowiązki!”": [
        "„Chowamy wszystkie zeszyty głęboko pod łóżko i gramy aż do białego rana!”",
        "„Wyłączamy głośny budzik, żeby nie pójść rano do szkoły na lekcje!”"
    ],
    # STEP 36
    "„Nie odpowiadam agresją, zgłaszam lub blokuję hejtera i zachowuję spokój!”": [
        "„Zaczynam natychmiast głośno wyzywać wszystkich graczy na serwerze w grze!”",
        "„Podaję mu od razu swoje prywatne tajne hasło do mojego cennego konta!”"
    ],
    # STEP 37
    "„Nigdy! Swoje hasła i prywatne dane osobowe zawsze chronimy w tajemnicy!”": [
        "„Tak, każdemu nieznajomemu, kto tylko obieca darmowe złote monety w grze!”",
        "„Wypisuję swoje prywatne hasło wielkimi literami na tablicy w naszej klasie!”"
    ],
    # STEP 38
    "„Zrobić przerwę, odejść od ekranu, porozciągać się i spojrzeć w dal przez okno!”": [
        "„Przybliżyć nos na odległość dwóch centymetrów od rozgrzanego monitora w pokoju!”",
        "„Zgasić natychmiast wszystkie lampy w pokoju i zamknąć oczy na resztę nocy!”"
    ],
    # STEP 39
    "„Ta aktualizacja to czysty sztos i mega hit!”": [
        "„Ten nowy dodatek to zupełny przypał i nuda!”",
        "„Kupuję w kasie bilet normalny na przejazd!”"
    ],
    # STEP 40
    "„Ale przypał! Masakra, muszę uważać w kolejnej rundzie!”": [
        "„Dzień dobry, kłaniam się uprzejmie pani pielęgniarce!”",
        "„Życzę wszystkim bardzo smacznego drugiego śniadania!”"
    ],
    # STEP 41
    "„Do komunikacji głosowej z drużyną i ostrzegania kolegów o akcji!”": [
        "„Do mierzenia wysokiej temperatury ciała u chorego pacjenta!”",
        "„Do starannego rysowania okrągłych kółek w zeszycie do plastyki!”"
    ],
    # STEP 42
    "„Lubię oglądać anime, na przykład przygody Doraemona i Dragon Ball!”": [
        "„Oglądam codziennie tylko nudną tabelę ułamków zwykłych w książce!”",
        "„Zupełnie nie mam pojęcia, czym w ogóle jest telewizor w pokoju!”"
    ],
    # STEP 43
    "„Wytłumaczę mu spokojnie sterowanie i pomogę zdobyć pierwsze punkty!”": [
        "„Wyrzucę go natychmiast z naszej grupy i publicznie wyśmieję w czacie!”",
        "„Zabiorę mu z biurka nową ładowarkę do telefonu i ucieknę do szatni!”"
    ],
    # STEP 44
    "„Dzięki! Do zobaczenia na wspólnym serwerze po lekcjach!”": [
        "„Niestety zapomniałem już, jak włączyć komputer w pokoju!”",
        "„Idę natychmiast kupić ulgowy bilet na tramwaj w szatni!”"
    ],
    # STEP 45
    "„Cristiano Ronaldo i Leo Messi – to najlepsi mistrzowie futbolu!”": [
        "„Nie interesuję się sportem, wolę po prostu spać na lekcji matmy!”",
        "„Zamawiam duży pikantny kebab z sosem czosnkowym w centrum miasta!”"
    ],
    # STEP 46
    "„Gdy jest to niezwykle szybki zawodnik z precyzyjnym dryblingiem!”": [
        "„Gdy ma w kieszeni szkolną legitymację i skasowany bilet w tramwaju!”",
        "„Gdy zapomniał ze sobą zeszytu z zadaniem domowym na lekcję języka!”"
    ],
    # STEP 48
    "„Z jedenastu metrów (dlatego nazywamy go jedenastką)!”": [
        "„Z jednego centymetra od samej linii bramkowej w sali!”",
        "„Z wysokiego dachu budynku szkoły podstawowej w mieście!”"
    ],
    # STEP 50
    "„Gdy w momencie podania napastnik jest bliżej bramki rywala niż przedostatni zawodnik broniący!”": [
        "„Gdy piłka nożna przypadkowo wpadnie do wysokiego kosza zawieszonego na sali gimnastycznej!”",
        "„Gdy zmęczony bramkarz napije się chłodnej wody ze swojego sportowego bidonu w czasie meczu!”"
    ],
    # STEP 52
    "„Złoty puchar mistrzowski przy aplauzie kibiców!”": [
        "„Metalowe wiadro z białą kredą do tablicy szkolnej!”",
        "„Zwykły tekturowy karton po starych butach sportowych!”"
    ],
    # STEP 54
    "„Gdy piłka wyjdzie za linię końcową boiska po ostatnim dotknięciu przez gracza drużyny broniącej!”": [
        "„Zawsze i bez wyjątku w pierwszej sekundzie po rozpoczęciu całego spotkania piłkarskiego!”",
        "„Gdy sędzia główny zapomni zabrać ze sobą gwizdka na boisko przed rozpoczęciem meczu ligowego!”"
    ],
    # STEP 56
    "„Kapitan drużyny!”": [
        "„Sędzia liniowy!”",
        "„Trener zespołu!”"
    ],
    # STEP 57
    "„Pozwala dokładnie kontrolować piłkę i szybko budować akcje całej drużyny!”": [
        "„Bo dzięki takiemu treningowi uczniowie wcale nie muszą chodzić do szkoły!”",
        "„Bo piłka podczas częstych i mocnych podań staje się zupełnie kwadratowa!”"
    ],
    # STEP 58
    "„Dziękuję gestem dłoni i skupiam się na dalszej grze!”": [
        "„Schodzę natychmiast z boiska w samym środku ważnej akcji!”",
        "„Rzucam ze złości korkami w stronę bramki rywali na boisku!”"
    ],
    # STEP 59
    "„Robert Lewandowski — kapitan reprezentacji Polski!”": [
        "„Jacek Soplica — tajemniczy bohater Pana Tadeusza!”",
        "„Hrabia Kirkor — postać z dramatu Juliusza Słowackiego!”"
    ],
    # STEP 60
    "„Dzięki! Do zobaczenia na wielkim meczu!”": [
        "„Niestety zgubiłem piłkę w bibliotece!”",
        "„Poproszę jeden ulgowy bilet autobusowy!”"
    ],
    # STEP 63
    "„Zgadza się! Wiem kim jestem, mam swoje pasje i cieszę się życiem!”": [
        "„Wszystko wokół jest dla mnie strasznie nudne, beznadziejne i słabe!”",
        "„Jest mi strasznie zimno, nie lubię sportu i chcę jak najszybciej do domu!”"
    ],
    # STEP 64
    "„Sprawdzam informację w kilku rzetelnych źródłach i nie wierzę ślepo krzykliwym nagłówkom!”": [
        "„Uważam, że każdy przypadkowy obrazek znaleziony w sieci to zawsze stuprocentowa prawda!”",
        "„Rozsyłam natychmiast wszystkie niesprawdzone plotki i sensacje wszystkim moim znajomym!”"
    ],
    # STEP 65
    "„To zabawny obrazek lub krótki filmik z dowcipnym podpisem komentującym codzienność!”": [
        "„To oficjalne urzędowe pismo z pieczątką przesłane prosto od dyrektora naszej szkoły!”",
        "„To jednorazowy bilet papierowy uprawniający do przejazdu miejskim autobusem w dzień!”"
    ],
    # STEP 66
    "„To lajki i pozytywne wsparcie od znajomych!”": [
        "„To surowy mandat karny od kontrolera biletów!”",
        "„To niespodziewana kartkówka z trudnej geometrii!”"
    ],
    # STEP 67
    "„Staję w obronie kolegi, wspieram go dobrym słowem i zgłaszam obraźliwy wpis!”": [
        "„Dołączam natychmiast do publicznego wyśmiewania kolegi dla tanich lajków w sieci!”",
        "„Udaję zupełnie, że go nie znam i kasuję go natychmiast ze wszystkich moich kontaktów!”"
    ],
    # STEP 69
    "„Zapyta: Jaki sos (łagodny, mieszany czy ostry) oraz czy na miejscu, czy na wynos!”": [
        "„Zapyta o dokładną datę chrztu Polski oraz o imiona wszystkich polskich królów!”",
        "„Zapyta o skomplikowany wynik pisemnego dzielenia ułamków zwykłych przez dziesiętne!”"
    ],
    # STEP 70
    "„Dzień dobry! Poproszę świeżą bułkę i butelkę wody niegazowanej.”": [
        "„Dawaj szybko tę bułkę z półki i nie zadawaj mi żadnych pytań!”",
        "„Nie mam przy sobie zeszytu w wąską linię do języka polskiego!”"
    ],
    # STEP 74
    "„Rozprawka!”": [
        "„Ogłoszenie!”",
        "„Zaproszenie!”"
    ],
    # STEP 75
    "„To stuprocentowy fakt, bo wynik można łatwo sprawdzić i udowodnić!”": [
        "„To subiektywna i stronnicza opinia pełna emocjonalnych przymiotników!”",
        "„To podchwytliwe pytanie retoryczne niemające żadnej prostej odpowiedzi!”"
    ],
    # STEP 76
    "„Dzięki! Znam zarówno język ulicy, jak i zasady z lekcji polskiego!”": [
        "„Niestety zapomniałem już zupełnie jak się nazywam i gdzie mieszkam!”",
        "„Idę zaraz płakać ze smutku na przystanek autobusowy przed budynkiem!”"
    ]
}

with open('src/data/gadulaDialogSteps.js', 'r', encoding='utf-8') as f:
    content = f.read()

# For each step, replace wrong options
updated_count = 0
for c_text, w_replacements in GADULA_BALANCED.items():
    # Find block containing c_text
    escaped_c = re.escape(c_text)
    # Search for { text: escaped_c, correct: true } or similar
    # In options: [ ... ]
    # Find options block containing this text
    pattern = re.compile(r'options\s*:\s*\[([^\]]*?' + escaped_c + r'[^\]]*?)\]', re.DOTALL)
    m = pattern.search(content)
    if not m:
        print(f"NOT FOUND: {c_text[:40]}...")
        continue
    
    old_block = m.group(1)
    # extract options in block
    # We want to reconstruct the block: keep the correct option, replace false options with w_replacements
    # Find all { text: '...', correct: ... }
    objs = re.findall(r'\{\s*text:\s*([\'"`])(.*?)\1\s*,\s*correct:\s*(true|false)\s*\}', old_block)
    if not objs:
        print(f"OBJS NOT FOUND: {c_text[:40]}...")
        continue
    
    new_objs = []
    w_idx = 0
    for q, t, corr in objs:
        if corr == 'true':
            new_objs.append(f"{{ text: '{t}', correct: true }}")
        else:
            new_w = w_replacements[w_idx]
            w_idx += 1
            new_objs.append(f"{{ text: '{new_w}', correct: false }}")
    
    new_block = "\n      " + ",\n      ".join(new_objs) + "\n    "
    content = content[:m.start(1)] + new_block + content[m.end(1):]
    updated_count += 1

print(f"Updated {updated_count} steps in gadulaDialogSteps.js")
with open('src/data/gadulaDialogSteps.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved gadulaDialogSteps.js!")
