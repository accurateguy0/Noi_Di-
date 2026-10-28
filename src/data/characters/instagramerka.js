// Instagramerka - Królowa trendów, estetyki i social mediów
// Boss: 77 HP, bije po 5 HP | Zwykła: 34 HP, bije po 2 HP
// Tematyka: Rozmawianie o trendach, hasztagi, kultura w sieci, lajki (20 pytań na zestaw!)

export const INSTAGRAMERKA_ENCOUNTERS = {
  regular: {
    type: 'instagramerka_trends',
    titlePl: 'Instagramerka (34 HP, 2 dmg)',
    subtitlePl: 'Rozmowa o trendach: Memy, virale i style',
    icon: './assets/Postacie/Instagramerka.png',
    enemyName: 'Instagramerka',
    enemyMaxHp: 34,
    enemyDamage: 2,
    descriptionPl: 'Instagramerka sprawdza, czy znasz najnowsze trendy i potrafisz kulturalnie pisać w internecie.',
    steps: [
      {
        question: "Instagramerka pyta: «Hej! Wrzuciłam nową rolkę o modzie szkolnej! Co o tym sądzisz?»",
        options: [
          { text: "«Super filmik! Bardzo fajny montaż i ciekawy, schludny styl!»", correct: true },
          { text: "«Nuda, natychmiast usuń to konto ze wszystkich portali!»", correct: false },
          { text: "«Nie mam telefonu i zupełnie nic ciekawego tutaj nie widzę!»", correct: false }
        ]
      },
      {
        question: "Ktoś zostawił niemiły komentarz pod postem kolegi z klasy. Co robisz?",
        options: [
          { text: "Zgłaszam hejt moderatorom i piszę miłe słowa wsparcia dla kolegi.", correct: true },
          { text: "Dopisuję jeszcze gorsze wyzwiska, żeby było śmieszniej.", correct: false },
          { text: "Śmieję się ze wszystkiego na forum publicznym.", correct: false }
        ]
      },
      {
        question: "Który hasztag najlepiej opisuje udany, pełen nauki dzień w szkole?",
        options: [
          { text: "#DobraEnergia #Przyjaciele #SzkolneSukcesy", correct: true },
          { text: "#KoniecŚwiata #BrakNadziei #SzkolnaKlęska", correct: false },
          { text: "#BrakBiletu #Wagary #UcieczkaPrzedLekcją", correct: false }
        ]
      },
      {
        question: "Co to jest «bańka informacyjna» w mediach społecznościowych?",
        options: [
          { text: "Zjawisko, w którym algorytm pokazuje tylko treści zgodne z naszymi upodobaniami.", correct: true },
          { text: "Prawdziwa wielka bańka mydlana puszczana na nagraniu wideo w parku miejskim.", correct: false },
          { text: "Całkowity brak zasięgu internetu w szkole podczas długiej przerwy obiadowej.", correct: false }
        ]
      },
      {
        question: "Instagramerka pyta: «Chcę wrzucić zdjęcie z naszej klasy. O czym muszę pamiętać?»",
        options: [
          { text: "«Musisz najpierw zapytać każdego kolegę o zgodę na publikację wizerunku!»", correct: true },
          { text: "«Możesz bez wahania wrzucać wszystko bez pytania, internet jest dla nas.»", correct: false },
          { text: "«Wystarczy tylko, że oznaczysz naszą szkołę w publicznym opisie zdjęcia.»", correct: false }
        ]
      },
      {
        question: "Czym różni się fakt od opinii w poście internetowym?",
        options: [
          { text: "Fakt jest obiektywny i sprawdzalny, a opinia to czyjeś subiektywne zdanie.", correct: true },
          { text: "Fakt to zwykłe kłamstwo, a opinia to zawsze najświętsza prawda o świecie.", correct: false },
          { text: "Fakt pisze się zawsze wielkimi literami, a subiektywną opinię tylko małymi.", correct: false }
        ]
      },
      {
        question: "Ktoś na czacie pisze: «Wygrałeś darmowy telefon! Kliknij w ten dziwny link». Co robisz?",
        options: [
          { text: "Nie klikam w link, bo to typowy phishing i próba kradzieży konta!", correct: true },
          { text: "Klikam natychmiast bez wahania i podaję moje tajne hasło do konta!", correct: false },
          { text: "Przesyłam ten podejrzany link wszystkim moim znajomym z całej klasy!", correct: false }
        ]
      },
      {
        question: "Jakie hasło do konta społecznościowego jest najbezpieczniejsze?",
        options: [
          { text: "Długie, zawierające duże i małe litery, cyfry oraz znaki specjalne.", correct: true },
          { text: "Proste hasło «123456» albo imię mojego ulubionego domowego psa.", correct: false },
          { text: "Moja dokładna data urodzenia zapisana bez żadnych innych znaków.", correct: false }
        ]
      },
      {
        question: "Co oznacza pojęcie «netykieta»?",
        options: [
          { text: "Zbiór zasad kulturalnego i pełnego szacunku zachowania w internecie.", correct: true },
          { text: "Nazwa bardzo drogiego programu do zaawansowanej obróbki zdjęć i wideo.", correct: false },
          { text: "Miesięczna cena abonamentu za nielimitowany internet w smartfonie.", correct: false }
        ]
      },
      {
        question: "Co powinieneś zrobić, gdy internet zaczyna zabierać ci za dużo czasu kosztem snu?",
        options: [
          { text: "Wprowadzić cyfrowy detoks i odkładać telefon godzinę przed pójściem spać.", correct: true },
          { text: "Grać zawzięcie na telefonie do 4 rano w łóżku z wyłączonym światłem.", correct: false },
          { text: "Kupić od razu drugi telefon, żeby oglądać dwa różne filmiki naraz w nocy.", correct: false }
        ]
      },
      {
        question: "Co to jest «clickbait» w tytule posta?",
        options: [
          { text: "Chwytliwy, wyolbrzymiony tytuł mający na celu wymuszenie kliknięcia.", correct: true },
          { text: "Serdeczne podziękowanie dla obserwujących za miłe komentarze pod postem.", correct: false },
          { text: "Rodzaj nowoczesnego i bezpiecznego zabezpieczenia antywirusowego w sieci.", correct: false }
        ]
      },
      {
        question: "Czy wolno wykorzystać w swojej rolce cudzą piosenkę bez licencji?",
        options: [
          { text: "Należy korzystać z utworów dostępnych w legalnej bibliotece dźwięków aplikacji.", correct: true },
          { text: "Można bezkarnie kraść każdą muzykę bez ograniczeń i podawać się za jej autora.", correct: false },
          { text: "Prawo autorskie w ogóle pod żadnym pozorem nie obowiązuje w nowych mediach.", correct: false }
        ]
      },
      {
        question: "Instagramerka pyta: «Jak radzić sobie z zazdrością o idealne zdjęcia innych ludzi?»",
        options: [
          { text: "«Pamiętaj, że w sieci ludzie pokazują tylko wyreżyserowane, najlepsze kadry!»", correct: true },
          { text: "«Musisz natychmiast kupić droższe ubrania ze sklepu, żeby wreszcie im dorównać!»", correct: false },
          { text: "«Zacznij od razu pisać złośliwe, obraźliwe komentarze pod wszystkimi zdjęciami!»", correct: false }
        ]
      },
      {
        question: "Co to jest «FOMO» (Fear of Missing Out)?",
        options: [
          { text: "Lęk przed odcięciem od informacji i ciągła potrzeba sprawdzania telefonu.", correct: true },
          { text: "Dziecięcy strach przed włochatymi pająkami i zupełną ciemnością w pokoju.", correct: false },
          { text: "Nazwa nowego, niezwykle popularnego tańca publikowanego na TikToku w sieci.", correct: false }
        ]
      },
      {
        question: "Jak zareagować na konstruktywną uwagę nauczyciela pod wpisem na blogu szkolnym?",
        options: [
          { text: "Podziękować za cenną radę i poprawić błąd językowy w tekście.", correct: true },
          { text: "Zablokować nauczyciela i usunąć cały artykuł.", correct: false },
          { text: "Zacząć kłócić się w komentarzach z użyciem wykrzykników.", correct: false }
        ]
      },
      {
        question: "Co to jest «cyfrowy ślad»?",
        options: [
          { text: "Wszystkie dane, komentarze i zdjęcia, które po sobie zostawiamy w sieci.", correct: true },
          { text: "Mocno brudny i zatłuszczony ekran dotykowy po całym dniu używania w domu.", correct: false },
          { text: "Nowy, bardzo modny model butów sportowych noszony chętnie przez gwiazdy.", correct: false }
        ]
      },
      {
        question: "Dlaczego warto włączyć weryfikację dwuetapową (2FA)?",
        options: [
          { text: "Bo chroni konto przed włamaniem, nawet jeśli ktoś pozna nasze hasło.", correct: true },
          { text: "Żeby aplikacja społecznościowa działała dwa razy szybciej na telefonie.", correct: false },
          { text: "Bo wtedy automatycznie dostajemy tysiące darmowych lajków pod postami.", correct: false }
        ]
      },
      {
        question: "Co zrobić, gdy zauważysz, że ktoś podszywa się pod twojego kolegę z klasy?",
        options: [
          { text: "Zgłosić fałszywy profil administracji portalu i ostrzec znajomych.", correct: true },
          { text: "Cieszyć się, że kolega jest taki popularny w sieci.", correct: false },
          { text: "Wysłać fałszywemu profilowi swoje prywatne sekrety.", correct: false }
        ]
      },
      {
        question: "Jakie treści są najbardziej wartościowe w mediach społecznościowych?",
        options: [
          { text: "Edukacyjne, inspirujące, prawdziwe i budujące życzliwą społeczność.", correct: true },
          { text: "Pełne plotek, kłótni, sensacji i ośmieszania słabszych.", correct: false },
          { text: "Wyłącznie reklamy drogich produktów kosmetycznych.", correct: false }
        ]
      },
      {
        question: "Instagramerka uśmiecha się: «Świetnie znasz kulturę sieci! Jaka jest złota zasada internetu?»",
        options: [
          { text: "«Traktuj innych w sieci tak, jak sam chciałbyś być traktowany w realnym życiu!»", correct: true },
          { text: "«Kto najgłośniej krzyczy i wyzywa innych na forum, ten ma całkowitą rację!»", correct: false },
          { text: "«Lajki w internecie są zdecydowanie ważniejsze niż jakiekolwiek przyjaźnie!»", correct: false }
        ]
      }
    ]
  },
  boss: {
    type: 'boss_instagramerka',
    titlePl: 'BOSS: Instagramerka (77 HP, 5 dmg)',
    subtitlePl: 'Wielki Finał Trendów i Pewności Siebie',
    icon: './assets/Postacie/Instagramerka.png',
    enemyName: 'Instagramerka',
    enemyMaxHp: 77,
    enemyDamage: 5,
    descriptionPl: 'Ostateczny Boss Popkultury i Trendów! 77 HP i 5 obrażeń. Udowodnij swoją tożsamość i pewność siebie!',
    steps: [
      {
        question: "Światła fleszy gasną na chwilę. Instagramerka pyta: «Skąd czerpiesz swoją siłę w szkolnych pojedynkach?»",
        options: [
          { text: "«Z wiedzy, odwagi, treningu i wsparcia przyjaciół z klasy!»", correct: true },
          { text: "«Tylko z ilości lajków pod zdjęciem profilowym.»", correct: false },
          { text: "«Z drogich markowych ciuchów kupionych w galerii.»", correct: false }
        ]
      },
      {
        question: "Instagramerka robi piruet przed kamerą: «Czy wiesz, czym jest prawdziwa autentyczność w sieci?»",
        options: [
          { text: "«To odwaga bycia sobą, bez udawania kogoś innego dla poklasku i wyświetleń!»", correct: true },
          { text: "«To nakładanie pięciu filtrów upiększających na każde zdjęcie.»", correct: false },
          { text: "«To powtarzanie wszystkiego, co robią najpopularniejsi influencerzy.»", correct: false }
        ]
      },
      {
        question: "«Czasami spotykamy się z ogromną krytyką. Jak odróżnić hejt od cennej wskazówki?»",
        options: [
          { text: "«Hejt niszczy i obraża człowieka, a cenna wskazówka życzliwie wskazuje, co można ulepszyć.»", correct: true },
          { text: "«Każda kulturalna uwaga to wrogi atak, przed którym trzeba natychmiast w panice uciekać.»", correct: false },
          { text: "«W internecie w ogóle nie da się niczego odróżnić, bo wszyscy użytkownicy są zawsze wrodzy.»", correct: false }
        ]
      },
      {
        question: "«Mój profil obserwują tysiące osób. Jaka odpowiedzialność spoczywa na twórcy internetowym?»",
        options: [
          { text: "«Musi weryfikować fakty, mówić prawdę i nie promować szkodliwych zachowań.»", correct: true },
          { text: "«Żadna, liczą się tylko pieniądze ze sponsoringu i liczba kliknięć.»", correct: false },
          { text: "«Powinien mówić cokolwiek, byle tylko wzbudzić skandal.»", correct: false }
        ]
      },
      {
        question: "«Co oznacza zasada ograniczonego zaufania do sensacyjnych wiadomości w sieci?»",
        options: [
          { text: "«Zanim podasz informację dalej, sprawdź jej źródło w co najmniej dwóch rzetelnych portalach!»", correct: true },
          { text: "«Wierz bez wahania we wszystko, co zdobyło w sieci więcej niż tysiąc szybkich udostępnień!»", correct: false },
          { text: "«W ogóle nie czytaj żadnych wiadomości ze świata i natychmiast odłącz domowy internet!»", correct: false }
        ]
      },
      {
        question: "«Czym jest zjawisko cyberprzemocy (cyberbullying)?»",
        options: [
          { text: "«To nękanie, zastraszanie, wyśmiewanie i publikowanie kompromitujących materiałów w sieci.»", correct: true },
          { text: "«To wesołe granie w popularne gry komputerowe z przyjaciółmi przez mikrofon na Discordzie.»", correct: false },
          { text: "«To całkowicie legalna, pożyteczna i wesoła forma codziennych żartów wśród rówieśników.»", correct: false }
        ]
      },
      {
        question: "«Co zrobisz, jeśli ktoś grozi ci na prywatnym czacie?»",
        options: [
          { text: "«Zrobię zrzuty ekranu jako dowód, zablokuję sprawcę i powiadomię rodziców oraz policję.»", correct: true },
          { text: "«Skasuję od razu całą wiadomość i będę w samotności płakać ze strachu we własnym pokoju.»", correct: false },
          { text: "«Zacznę odpisywać najgorszymi wulgaryzmami na wszystkie otrzymywane anonimowe groźby.»", correct: false }
        ]
      },
      {
        question: "«Dlaczego algorytmy promują posty budzące złość i skrajne emocje?»",
        options: [
          { text: "«Ponieważ silne emocje generują najwięcej komentarzy i najdłużej zatrzymują uwagę użytkownika.»", correct: true },
          { text: "«Ponieważ algorytmy chcą bez wyjątku, żeby wszyscy użytkownicy byli szczęśliwi i spokojni.»", correct: false },
          { text: "«To zupełny przypadek losowy, ponieważ nikt na świecie nie kontroluje kodu aplikacji w sieci.»", correct: false }
        ]
      },
      {
        question: "«Co to jest prawo do bycia zapomnianym (Right to be forgotten)?»",
        options: [
          { text: "«Prawo obywatela do żądania usunięcia swoich danych osobowych z wyszukiwarek internetowych.»", correct: true },
          { text: "«Prawo każdego ucznia do zapominania prac domowych i zeszytów z trudnego języka polskiego.»", correct: false },
          { text: "«Całkowity zakaz prowadzenia elektronicznego dziennika lekcyjnego przez dyrekcję szkoły.»", correct: false }
        ]
      },
      {
        question: "«Jak chronić swoje zdrowie psychiczne przed negatywnymi skutkami social mediów?»",
        options: [
          { text: "«Ustalać limity czasu ekranowego, dbać o relacje w świecie realnym i rozwijać pasje offline.»", correct: true },
          { text: "«Spędzać bez przerwy w aplikacji cały swój wolny czas od wczesnego rana do późnej nocy.»", correct: false },
          { text: "«Kupić o wiele mocniejsze okulary i bez przerwy czytać wszystkie komentarze pod filmami.»", correct: false }
        ]
      },
      {
        question: "«Co to jest licencja Creative Commons (CC)?»",
        options: [
          { text: "«Zestaw gotowych wzorów umów pozwalających twórcom dzielić się swoimi dziełami na określonych warunkach.»", correct: true },
          { text: "«Płatny i bardzo drogi bilet wstępu na wielki koncert zagranicznej gwiazdy popu na stadionie miejskim.»", correct: false },
          { text: "«Specjalne tajne hasło administratora odblokowujące bezpłatnie wszystkie gry na telefonie komórkowym.»", correct: false }
        ]
      },
      {
        question: "«Kiedy wolno wykorzystać cudze zdjęcie bez płacenia i zgody autora?»",
        options: [
          { text: "«W ramach dozwolonego użytku edukacyjnego w prezentacji szkolnej lub gdy zdjęcie jest w domenie publicznej.»", correct: true },
          { text: "«Gdy cudze zdjęcie w sieci bardzo nam się podoba i chcemy je wydrukować na koszulkach na publiczny handel.»", correct: false },
          { text: "«Zawsze i w każdej sytuacji, o ile tylko podpiszemy pobraną fotografię naszym pseudonimem z gry sieciowej.»", correct: false }
        ]
      },
      {
        question: "«Co oznacza skrót RODO w polskim i europejskim prawie?»",
        options: [
          { text: "«Rozporządzenie o Ochronie Danych Osobowych gwarantujące bezpieczeństwo prywatności.»", correct: true },
          { text: "«Szkolny Rejestr Ocen Dyrekcji Oświatowej regulujący zachowanie i wyniki uczniów.»", correct: false },
          { text: "«Rządowa Organizacja Dobrej Obsługi zajmująca się kontrolą sklepów internetowych.»", correct: false }
        ]
      },
      {
        question: "«Dlaczego warto czytać regulaminy serwisów społecznościowych przed założeniem konta?»",
        options: [
          { text: "«Bo dowiadujemy się, jakie dane o nas zbiera aplikacja i jakie mamy prawa.»", correct: true },
          { text: "«Nie warto czytać regulaminu, nikt rozsądny nigdy nie czyta takich tekstów.»", correct: false },
          { text: "«Żeby znaleźć w gąszczu prawniczego tekstu ukryte kody rabatowe na zakupy.»", correct: false }
        ]
      },
      {
        question: "«Co to jest trolling w dyskusjach publicznych?»",
        options: [
          { text: "«Świadome prowokowanie innych bezwartościowymi kłótniami w celu zniszczenia merytorycznej debaty.»", correct: true },
          { text: "«Kulturalne i spokojne opowiadanie starych bajek o mitycznych trollach ze skandynawskich lasów.»", correct: false },
          { text: "«Staranne pisanie długich wierszy rymowanych na zadanie domowe z polskiego dla pani nauczycielki.»", correct: false }
        ]
      },
      {
        question: "«Czym jest phishing i jak się przed nim chronić?»",
        options: [
          { text: "«To podszywanie się pod banki lub serwisy w celu wyłudzenia haseł – chronimy się sprawdzając adres strony.»", correct: true },
          { text: "«To rekreacyjne łowienie ryb na długiej wędce w pobliskim czystym jeziorze z kolegami ze szkolnej ławki.»", correct: false },
          { text: "«To w pełni bezpieczna i nowoczesna metoda tworzenia zapasowej kopii wszystkich danych w telefonie.»", correct: false }
        ]
      },
      {
        question: "«Co to jest higiena cyfrowa?»",
        options: [
          { text: "«Świadome, kontrolowane i zdrowe korzystanie z technologii cyfrowych chroniące ciało i umysł.»", correct: true },
          { text: "«Dokładne mycie całego smartfona mydłem w płynie i szorstką gąbką pod bieżącą wodą w kranie.»", correct: false },
          { text: "«Częsta wymiana plastikowej obudowy i paska telefonu komórkowego co najmniej co dwa tygodnie.»", correct: false }
        ]
      },
      {
        question: "«Jak odróżnić wiarygodnego eksperta od fałszywego guru w sieci?»",
        options: [
          { text: "«Prawdziwy ekspert posiada udokumentowane wykształcenie, powołuje się na badania i nie obiecuje cudów w 3 dni.»", correct: true },
          { text: "«W pełni wiarygodny jest wyłącznie ten, kto ma na sobie najwięcej złotych łańcuchów na dynamicznym wideo.»", correct: false },
          { text: "«Wystarczy bez wątpienia, że autor napisze w swoim opisie profilu, że wie absolutnie wszystko o całym życiu.»", correct: false }
        ]
      },
      {
        question: "«Co oznacza pojęcie mowy nienawiści (hate speech)?»",
        options: [
          { text: "«Publiczne nawoływanie do nienawiści lub znieważanie grupy ludzi z powodu ich narodowości, rasy czy wyznania.»", correct: true },
          { text: "«Zwykłe wyrażenie własnej opinii, że gotowana przez kogoś zupa pomidorowa z ryżem jest zupełnie niesmaczna.»", correct: false },
          { text: "«Stanowcza odmowa pójścia na wieczorny seans do kina ze znajomymi z powodu braku ochoty na oglądanie filmu.»", correct: false }
        ]
      },
      {
        question: "Instagramerka opuszcza smartfon: «Wspaniale! Pokazałeś prawdziwą klasę i mądrość cyfrową. Jesteś mistrzem!»",
        options: [
          { text: "«Dziękuję! Wiedza, empatia i szacunek są silniejsze niż jakikolwiek internetowy algorytm!»", correct: true },
          { text: "«Wiedziałem od samego początku, że jestem o wiele lepszy i mądrzejszy od wszystkich w sieci!»", correct: false },
          { text: "«Oddaj mi teraz natychmiast swój telefon, bo muszę koniecznie sprawdzić nowe powiadomienia!»", correct: false }
        ]
      }
    ]
  }
};
