import sys, os
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')
from scripts.build_full_rebalance import rebalance_file

insta_data = {
    # 1 L18 (C=61)
    '«Super filmik! Bardzo fajny montaż i ciekawy, schludny styl!»': {
        'wrongs': [
            '«Nuda, natychmiast usuń to konto ze wszystkich portali!»',
            '«Nie mam telefonu i zupełnie nic ciekawego tutaj nie widzę!»'
        ]
    },
    # 2 L34 (C=42)
    '#DobraEnergia #Przyjaciele #SzkolneSukcesy': {
        'wrongs': [
            '#KoniecŚwiata #BrakNadziei #SzkolnaKlęska',
            '#BrakBiletu #Wagary #UcieczkaPrzedLekcją'
        ]
    },
    # 3 L42 (C=80)
    'Zjawisko, w którym algorytm pokazuje tylko treści zgodne z naszymi upodobaniami.': {
        'wrongs': [
            'Prawdziwa wielka bańka mydlana puszczana na nagraniu wideo w parku miejskim.',
            'Całkowity brak zasięgu internetu w szkole podczas długiej przerwy obiadowej.'
        ]
    },
    # 4 L50 (C=73)
    '«Musisz najpierw zapytać każdego kolegę o zgodę na publikację wizerunku!»': {
        'wrongs': [
            '«Możesz bez wahania wrzucać wszystko bez pytania, internet jest dla nas.»',
            '«Wystarczy tylko, że oznaczysz naszą szkołę w publicznym opisie zdjęcia.»'
        ]
    },
    # 5 L58 (C=74)
    'Fakt jest obiektywny i sprawdzalny, a opinia to czyjeś subiektywne zdanie.': {
        'wrongs': [
            'Fakt to zwykłe kłamstwo, a opinia to zawsze najświętsza prawda o świecie.',
            'Fakt pisze się zawsze wielkimi literami, a subiektywną opinię tylko małymi.'
        ]
    },
    # 6 L66 (C=65)
    'Nie klikam w link, bo to typowy phishing i próba kradzieży konta!': {
        'wrongs': [
            'Klikam natychmiast bez wahania i podaję moje tajne hasło do konta!',
            'Przesyłam ten podejrzany link wszystkim moim znajomym z całej klasy!'
        ]
    },
    # 7 L74 (C=67)
    'Długie, zawierające duże i małe litery, cyfry oraz znaki specjalne.': {
        'wrongs': [
            'Proste hasło «123456» albo imię mojego ulubionego domowego psa.',
            'Moja dokładna data urodzenia zapisana bez żadnych innych znaków.'
        ]
    },
    # 8 L82 (C=68)
    'Zbiór zasad kulturalnego i pełnego szacunku zachowania w internecie.': {
        'wrongs': [
            'Nazwa bardzo drogiego programu do zaawansowanej obróbki zdjęć i wideo.',
            'Miesięczna cena abonamentu za nielimitowany internet w smartfonie.'
        ]
    },
    # 9 L90 (C=73)
    'Wprowadzić cyfrowy detoks i odkładać telefon godzinę przed pójściem spać.': {
        'wrongs': [
            'Grać zawzięcie na telefonie do 4 rano w łóżku z wyłączonym światłem.',
            'Kupić od razu drugi telefon, żeby oglądać dwa różne filmiki naraz w nocy.'
        ]
    },
    # 10 L98 (C=68)
    'Chwytliwy, wyolbrzymiony tytuł mający na celu wymuszenie kliknięcia.': {
        'wrongs': [
            'Serdeczne podziękowanie dla obserwujących za miłe komentarze pod postem.',
            'Rodzaj nowoczesnego i bezpiecznego zabezpieczenia antywirusowego w sieci.'
        ]
    },
    # 11 L106 (C=79)
    'Należy korzystać z utworów dostępnych w legalnej bibliotece dźwięków aplikacji.': {
        'wrongs': [
            'Można bezkarnie kraść każdą muzykę bez ograniczeń i podawać się za jej autora.',
            'Prawo autorskie w ogóle pod żadnym pozorem nie obowiązuje w nowych mediach.'
        ]
    },
    # 12 L114 (C=77)
    '«Pamiętaj, że w sieci ludzie pokazują tylko wyreżyserowane, najlepsze kadry!»': {
        'wrongs': [
            '«Musisz natychmiast kupić droższe ubrania ze sklepu, żeby wreszcie im dorównać!»',
            '«Zacznij od razu pisać złośliwe, obraźliwe komentarze pod wszystkimi zdjęciami!»'
        ]
    },
    # 13 L122 (C=73)
    'Lęk przed odcięciem od informacji i ciągła potrzeba sprawdzania telefonu.': {
        'wrongs': [
            'Dziecięcy strach przed włochatymi pająkami i zupełną ciemnością w pokoju.',
            'Nazwa nowego, niezwykle popularnego tańca publikowanego na TikToku w sieci.'
        ]
    },
    # 14 L138 (C=72)
    'Wszystkie dane, komentarze i zdjęcia, które po sobie zostawiamy w sieci.': {
        'wrongs': [
            'Mocno brudny i zatłuszczony ekran dotykowy po całym dniu używania w domu.',
            'Nowy, bardzo modny model butów sportowych noszony chętnie przez gwiazdy.'
        ]
    },
    # 15 L146 (C=68)
    'Bo chroni konto przed włamaniem, nawet jeśli ktoś pozna nasze hasło.': {
        'wrongs': [
            'Żeby aplikacja społecznościowa działała dwa razy szybciej na telefonie.',
            'Bo wtedy automatycznie dostajemy tysiące darmowych lajków pod postami.'
        ]
    },
    # 16 L170 (C=79)
    '«Traktuj innych w sieci tak, jak sam chciałbyś być traktowany w realnym życiu!»': {
        'wrongs': [
            '«Kto najgłośniej krzyczy i wyzywa innych na forum, ten ma całkowitą rację!»',
            '«Lajki w internecie są zdecydowanie ważniejsze niż jakiekolwiek przyjaźnie!»'
        ]
    },
    # 17 L206 (C=91)
    '«Hejt niszczy i obraża człowieka, a cenna wskazówka życzliwie wskazuje, co można ulepszyć.»': {
        'wrongs': [
            '«Każda kulturalna uwaga to wrogi atak, przed którym trzeba natychmiast w panice uciekać.»',
            '«W internecie w ogóle nie da się niczego odróżnić, bo wszyscy użytkownicy są zawsze wrodzy.»'
        ]
    },
    # 18 L222 (C=93)
    '«Zanim podasz informację dalej, sprawdź jej źródło w co najmniej dwóch rzetelnych portalach!»': {
        'wrongs': [
            '«Wierz bez wahania we wszystko, co zdobyło w sieci więcej niż tysiąc szybkich udostępnień!»',
            '«W ogóle nie czytaj żadnych wiadomości ze świata i natychmiast odłącz domowy internet!»'
        ]
    },
    # 19 L230 (C=91)
    '«To nękanie, zastraszanie, wyśmiewanie i publikowanie kompromitujących materiałów w sieci.»': {
        'wrongs': [
            '«To wesołe granie w popularne gry komputerowe z przyjaciółmi przez mikrofon na Discordzie.»',
            '«To całkowicie legalna, pożyteczna i wesoła forma codziennych żartów wśród rówieśników.»'
        ]
    },
    # 20 L238 (C=88)
    '«Zrobię zrzuty ekranu jako dowód, zablokuję sprawcę i powiadomię rodziców oraz policję.»': {
        'wrongs': [
            '«Skasuję od razu całą wiadomość i będę w samotności płakać ze strachu we własnym pokoju.»',
            '«Zacznę odpisywać najgorszymi wulgaryzmami na wszystkie otrzymywane anonimowe groźby.»'
        ]
    },
    # 21 L246 (C=95)
    '«Ponieważ silne emocje generują najwięcej komentarzy i najdłużej zatrzymują uwagę użytkownika.»': {
        'wrongs': [
            '«Ponieważ algorytmy chcą bez wyjątku, żeby wszyscy użytkownicy byli szczęśliwi i spokojni.»',
            '«To zupełny przypadek losowy, ponieważ nikt na świecie nie kontroluje kodu aplikacji w sieci.»'
        ]
    },
    # 22 L254 (C=92)
    '«Prawo obywatela do żądania usunięcia swoich danych osobowych z wyszukiwarek internetowych.»': {
        'wrongs': [
            '«Prawo każdego ucznia do zapominania prac domowych i zeszytów z trudnego języka polskiego.»',
            '«Całkowity zakaz prowadzenia elektronicznego dziennika lekcyjnego przez dyrekcję szkoły.»'
        ]
    },
    # 23 L262 (C=93)
    '«Ustalać limity czasu ekranowego, dbać o relacje w świecie realnym i rozwijać pasje offline.»': {
        'wrongs': [
            '«Spędzać bez przerwy w aplikacji cały swój wolny czas od wczesnego rana do późnej nocy.»',
            '«Kupić o wiele mocniejsze okulary i bez przerwy czytać wszystkie komentarze pod filmami.»'
        ]
    },
    # 24 L270 (C=105)
    '«Zestaw gotowych wzorów umów pozwalających twórcom dzielić się swoimi dziełami na określonych warunkach.»': {
        'wrongs': [
            '«Płatny i bardzo drogi bilet wstępu na wielki koncert zagranicznej gwiazdy popu na stadionie miejskim.»',
            '«Specjalne tajne hasło administratora odblokowujące bezpłatnie wszystkie gry na telefonie komórkowym.»'
        ]
    },
    # 25 L278 (C=108)
    '«W ramach dozwolonego użytku edukacyjnego w prezentacji szkolnej lub gdy zdjęcie jest w domenie publicznej.»': {
        'wrongs': [
            '«Gdy cudze zdjęcie w sieci bardzo nam się podoba i chcemy je wydrukować na koszulkach na publiczny handel.»',
            '«Zawsze i w każdej sytuacji, o ile tylko podpiszemy pobraną fotografię naszym pseudonimem z gry sieciowej.»'
        ]
    },
    # 26 L286 (C=85)
    '«Rozporządzenie o Ochronie Danych Osobowych gwarantujące bezpieczeństwo prywatności.»': {
        'wrongs': [
            '«Szkolny Rejestr Ocen Dyrekcji Oświatowej regulujący zachowanie i wyniki uczniów.»',
            '«Rządowa Organizacja Dobrej Obsługi zajmująca się kontrolą sklepów internetowych.»'
        ]
    },
    # 27 L294 (C=75)
    '«Bo dowiadujemy się, jakie dane o nas zbiera aplikacja i jakie mamy prawa.»': {
        'wrongs': [
            '«Nie warto czytać regulaminu, nikt rozsądny nigdy nie czyta takich tekstów.»',
            '«Żeby znaleźć w gąszczu prawniczego tekstu ukryte kody rabatowe na zakupy.»'
        ]
    },
    # 28 L302 (C=98)
    '«Świadome prowokowanie innych bezwartościowymi kłótniami w celu zniszczenia merytorycznej debaty.»': {
        'wrongs': [
            '«Kulturalne i spokojne opowiadanie starych bajek o mitycznych trollach ze skandynawskich lasów.»',
            '«Staranne pisanie długich wierszy rymowanych na zadanie domowe z polskiego dla pani nauczycielki.»'
        ]
    },
    # 29 L310 (C=107)
    '«To podszywanie się pod banki lub serwisy w celu wyłudzenia haseł – chronimy się sprawdzając adres strony.»': {
        'wrongs': [
            '«To rekreacyjne łowienie ryb na długiej wędce w pobliskim czystym jeziorze z kolegami ze szkolnej ławki.»',
            '«To w pełni bezpieczna i nowoczesna metoda tworzenia zapasowej kopii wszystkich danych w telefonie.»'
        ]
    },
    # 30 L318 (C=94)
    '«Świadome, kontrolowane i zdrowe korzystanie z technologii cyfrowych chroniące ciało i umysł.»': {
        'wrongs': [
            '«Dokładne mycie całego smartfona mydłem w płynie i szorstką gąbką pod bieżącą wodą w kranie.»',
            '«Częsta wymiana plastikowej obudowy i paska telefonu komórkowego co najmniej co dwa tygodnie.»'
        ]
    },
    # 31 L326 (C=111)
    '«Prawdziwy ekspert posiada udokumentowane wykształcenie, powołuje się na badania i nie obiecuje cudów w 3 dni.»': {
        'wrongs': [
            '«W pełni wiarygodny jest wyłącznie ten, kto ma na sobie najwięcej złotych łańcuchów na dynamicznym wideo.»',
            '«Wystarczy bez wątpienia, że autor napisze w swoim opisie profilu, że wie absolutnie wszystko o całym życiu.»'
        ]
    },
    # 32 L334 (C=110)
    '«Publiczne nawoływanie do nienawiści lub znieważanie grupy ludzi z powodu ich narodowości, rasy czy wyznania.»': {
        'wrongs': [
            '«Zwykłe wyrażenie własnej opinii, że gotowana przez kogoś zupa pomidorowa z ryżem jest zupełnie niesmaczna.»',
            '«Stanowcza odmowa pójścia na wieczorny seans do kina ze znajomymi z powodu braku ochoty na oglądanie filmu.»'
        ]
    },
    # 33 L342 (C=90)
    '«Dziękuję! Wiedza, empatia i szacunek są silniejsze niż jakikolwiek internetowy algorytm!»': {
        'wrongs': [
            '«Wiedziałem od samego początku, że jestem o wiele lepszy i mądrzejszy od wszystkich w sieci!»',
            '«Oddaj mi teraz natychmiast swój telefon, bo muszę koniecznie sprawdzić nowe powiadomienia!»'
        ]
    }
}

rebalance_file('src/data/characters/instagramerka.js', insta_data)
print("instagramerka.js balanced!")
