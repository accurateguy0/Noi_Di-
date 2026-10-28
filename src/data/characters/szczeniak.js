// Szczeniak - Postać Sytuacyjna (Find Match)
// Zaawansowane sytuacje szkolne, kultura komunikacji i szybkie decyzje językowe (CKE Klasy 4-8, 20 pytań na zestaw)
// Wszystkie opcje odpowiedzi są zrównoważone pod kątem długości i realizmu wypowiedzi.

import { HERO_SZCZENIAK_SETS } from '../heroCurriculumEncounters.js';

export const SZCZENIAK_FLOOR_ENCOUNTERS = {
  "1": [
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 1)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f1_s1_q1",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci."
          ]
        },
        {
          "id": "sz_f1_s1_q2",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”."
          ]
        },
        {
          "id": "sz_f1_s1_q3",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta."
          ]
        },
        {
          "id": "sz_f1_s1_q4",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f1_s1_q5",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”"
          ]
        },
        {
          "id": "sz_f1_s1_q6",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”."
          ]
        },
        {
          "id": "sz_f1_s1_q7",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu."
          ]
        },
        {
          "id": "sz_f1_s1_q8",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f1_s1_q9",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju."
          ]
        },
        {
          "id": "sz_f1_s1_q10",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie."
          ]
        },
        {
          "id": "sz_f1_s1_q11",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”"
          ]
        },
        {
          "id": "sz_f1_s1_q12",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”."
          ]
        },
        {
          "id": "sz_f1_s1_q13",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego."
          ]
        },
        {
          "id": "sz_f1_s1_q14",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci."
          ]
        },
        {
          "id": "sz_f1_s1_q15",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia."
          ]
        },
        {
          "id": "sz_f1_s1_q16",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”."
          ]
        },
        {
          "id": "sz_f1_s1_q17",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników."
          ]
        },
        {
          "id": "sz_f1_s1_q18",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby."
          ]
        },
        {
          "id": "sz_f1_s1_q19",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”."
          ]
        },
        {
          "id": "sz_f1_s1_q20",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 2)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f1_s2_q1",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”"
          ]
        },
        {
          "id": "sz_f1_s2_q2",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f1_s2_q3",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”."
          ]
        },
        {
          "id": "sz_f1_s2_q4",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy."
          ]
        },
        {
          "id": "sz_f1_s2_q5",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją."
          ]
        },
        {
          "id": "sz_f1_s2_q6",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem."
          ]
        },
        {
          "id": "sz_f1_s2_q7",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie."
          ]
        },
        {
          "id": "sz_f1_s2_q8",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”."
          ]
        },
        {
          "id": "sz_f1_s2_q9",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”"
          ]
        },
        {
          "id": "sz_f1_s2_q10",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f1_s2_q11",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f1_s2_q12",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f1_s2_q13",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku."
          ]
        },
        {
          "id": "sz_f1_s2_q14",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu."
          ]
        },
        {
          "id": "sz_f1_s2_q15",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”."
          ]
        },
        {
          "id": "sz_f1_s2_q16",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze."
          ]
        },
        {
          "id": "sz_f1_s2_q17",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby."
          ]
        },
        {
          "id": "sz_f1_s2_q18",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f1_s2_q19",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu."
          ]
        },
        {
          "id": "sz_f1_s2_q20",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”"
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 3)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f1_s3_q1",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy."
          ]
        },
        {
          "id": "sz_f1_s3_q2",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju."
          ]
        },
        {
          "id": "sz_f1_s3_q3",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”."
          ]
        },
        {
          "id": "sz_f1_s3_q4",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”"
          ]
        },
        {
          "id": "sz_f1_s3_q5",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f1_s3_q6",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu."
          ]
        },
        {
          "id": "sz_f1_s3_q7",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
          ]
        },
        {
          "id": "sz_f1_s3_q8",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f1_s3_q9",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”"
          ]
        },
        {
          "id": "sz_f1_s3_q10",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom."
          ]
        },
        {
          "id": "sz_f1_s3_q11",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom."
          ]
        },
        {
          "id": "sz_f1_s3_q12",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie."
          ]
        },
        {
          "id": "sz_f1_s3_q13",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku."
          ]
        },
        {
          "id": "sz_f1_s3_q14",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”"
          ]
        },
        {
          "id": "sz_f1_s3_q15",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f1_s3_q16",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”."
          ]
        },
        {
          "id": "sz_f1_s3_q17",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”."
          ]
        },
        {
          "id": "sz_f1_s3_q18",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f1_s3_q19",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”."
          ]
        },
        {
          "id": "sz_f1_s3_q20",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią."
          ]
        }
      ]
    }
  ],
  "2": [
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 1)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f2_s1_q1",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”"
          ]
        },
        {
          "id": "sz_f2_s1_q2",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni."
          ]
        },
        {
          "id": "sz_f2_s1_q3",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze."
          ]
        },
        {
          "id": "sz_f2_s1_q4",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy."
          ]
        },
        {
          "id": "sz_f2_s1_q5",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”"
          ]
        },
        {
          "id": "sz_f2_s1_q6",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci."
          ]
        },
        {
          "id": "sz_f2_s1_q7",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
          ]
        },
        {
          "id": "sz_f2_s1_q8",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f2_s1_q9",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy."
          ]
        },
        {
          "id": "sz_f2_s1_q10",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f2_s1_q11",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby."
          ]
        },
        {
          "id": "sz_f2_s1_q12",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników."
          ]
        },
        {
          "id": "sz_f2_s1_q13",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”."
          ]
        },
        {
          "id": "sz_f2_s1_q14",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”."
          ]
        },
        {
          "id": "sz_f2_s1_q15",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta."
          ]
        },
        {
          "id": "sz_f2_s1_q16",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie."
          ]
        },
        {
          "id": "sz_f2_s1_q17",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją."
          ]
        },
        {
          "id": "sz_f2_s1_q18",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy."
          ]
        },
        {
          "id": "sz_f2_s1_q19",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”."
          ]
        },
        {
          "id": "sz_f2_s1_q20",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 2)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f2_s2_q1",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”."
          ]
        },
        {
          "id": "sz_f2_s2_q2",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy."
          ]
        },
        {
          "id": "sz_f2_s2_q3",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki."
          ]
        },
        {
          "id": "sz_f2_s2_q4",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”."
          ]
        },
        {
          "id": "sz_f2_s2_q5",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”."
          ]
        },
        {
          "id": "sz_f2_s2_q6",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f2_s2_q7",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f2_s2_q8",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy."
          ]
        },
        {
          "id": "sz_f2_s2_q9",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f2_s2_q10",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f2_s2_q11",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia."
          ]
        },
        {
          "id": "sz_f2_s2_q12",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu."
          ]
        },
        {
          "id": "sz_f2_s2_q13",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”"
          ]
        },
        {
          "id": "sz_f2_s2_q14",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
          ]
        },
        {
          "id": "sz_f2_s2_q15",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
          ]
        },
        {
          "id": "sz_f2_s2_q16",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy."
          ]
        },
        {
          "id": "sz_f2_s2_q17",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f2_s2_q18",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”"
          ]
        },
        {
          "id": "sz_f2_s2_q19",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników."
          ]
        },
        {
          "id": "sz_f2_s2_q20",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 3)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f2_s3_q1",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów."
          ]
        },
        {
          "id": "sz_f2_s3_q2",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”"
          ]
        },
        {
          "id": "sz_f2_s3_q3",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f2_s3_q4",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę."
          ]
        },
        {
          "id": "sz_f2_s3_q5",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        },
        {
          "id": "sz_f2_s3_q6",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci."
          ]
        },
        {
          "id": "sz_f2_s3_q7",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”"
          ]
        },
        {
          "id": "sz_f2_s3_q8",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy."
          ]
        },
        {
          "id": "sz_f2_s3_q9",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”."
          ]
        },
        {
          "id": "sz_f2_s3_q10",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy."
          ]
        },
        {
          "id": "sz_f2_s3_q11",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”."
          ]
        },
        {
          "id": "sz_f2_s3_q12",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f2_s3_q13",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f2_s3_q14",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
          ]
        },
        {
          "id": "sz_f2_s3_q15",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia."
          ]
        },
        {
          "id": "sz_f2_s3_q16",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu."
          ]
        },
        {
          "id": "sz_f2_s3_q17",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f2_s3_q18",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju."
          ]
        },
        {
          "id": "sz_f2_s3_q19",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
          ]
        },
        {
          "id": "sz_f2_s3_q20",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”."
          ]
        }
      ]
    }
  ],
  "3": [
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 1)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f3_s1_q1",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”."
          ]
        },
        {
          "id": "sz_f3_s1_q2",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f3_s1_q3",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f3_s1_q4",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”"
          ]
        },
        {
          "id": "sz_f3_s1_q5",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
          ]
        },
        {
          "id": "sz_f3_s1_q6",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni."
          ]
        },
        {
          "id": "sz_f3_s1_q7",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom."
          ]
        },
        {
          "id": "sz_f3_s1_q8",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią."
          ]
        },
        {
          "id": "sz_f3_s1_q9",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f3_s1_q10",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f3_s1_q11",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f3_s1_q12",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia."
          ]
        },
        {
          "id": "sz_f3_s1_q13",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f3_s1_q14",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu."
          ]
        },
        {
          "id": "sz_f3_s1_q15",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f3_s1_q16",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”"
          ]
        },
        {
          "id": "sz_f3_s1_q17",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników."
          ]
        },
        {
          "id": "sz_f3_s1_q18",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”."
          ]
        },
        {
          "id": "sz_f3_s1_q19",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu."
          ]
        },
        {
          "id": "sz_f3_s1_q20",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 2)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f3_s2_q1",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju."
          ]
        },
        {
          "id": "sz_f3_s2_q2",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki."
          ]
        },
        {
          "id": "sz_f3_s2_q3",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f3_s2_q4",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich."
          ]
        },
        {
          "id": "sz_f3_s2_q5",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby."
          ]
        },
        {
          "id": "sz_f3_s2_q6",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia."
          ]
        },
        {
          "id": "sz_f3_s2_q7",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej."
          ]
        },
        {
          "id": "sz_f3_s2_q8",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”"
          ]
        },
        {
          "id": "sz_f3_s2_q9",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”"
          ]
        },
        {
          "id": "sz_f3_s2_q10",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f3_s2_q11",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f3_s2_q12",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
          ]
        },
        {
          "id": "sz_f3_s2_q13",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f3_s2_q14",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”"
          ]
        },
        {
          "id": "sz_f3_s2_q15",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem."
          ]
        },
        {
          "id": "sz_f3_s2_q16",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku."
          ]
        },
        {
          "id": "sz_f3_s2_q17",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze."
          ]
        },
        {
          "id": "sz_f3_s2_q18",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f3_s2_q19",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f3_s2_q20",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 3)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f3_s3_q1",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f3_s3_q2",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela."
          ]
        },
        {
          "id": "sz_f3_s3_q3",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce."
          ]
        },
        {
          "id": "sz_f3_s3_q4",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów."
          ]
        },
        {
          "id": "sz_f3_s3_q5",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
          ]
        },
        {
          "id": "sz_f3_s3_q6",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy."
          ]
        },
        {
          "id": "sz_f3_s3_q7",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”."
          ]
        },
        {
          "id": "sz_f3_s3_q8",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f3_s3_q9",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”"
          ]
        },
        {
          "id": "sz_f3_s3_q10",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia."
          ]
        },
        {
          "id": "sz_f3_s3_q11",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”."
          ]
        },
        {
          "id": "sz_f3_s3_q12",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        },
        {
          "id": "sz_f3_s3_q13",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju."
          ]
        },
        {
          "id": "sz_f3_s3_q14",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę."
          ]
        },
        {
          "id": "sz_f3_s3_q15",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy."
          ]
        },
        {
          "id": "sz_f3_s3_q16",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
          ]
        },
        {
          "id": "sz_f3_s3_q17",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom."
          ]
        },
        {
          "id": "sz_f3_s3_q18",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”."
          ]
        },
        {
          "id": "sz_f3_s3_q19",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f3_s3_q20",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”"
          ]
        }
      ]
    }
  ],
  "4": [
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 1)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f4_s1_q1",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f4_s1_q2",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”"
          ]
        },
        {
          "id": "sz_f4_s1_q3",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów."
          ]
        },
        {
          "id": "sz_f4_s1_q4",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki."
          ]
        },
        {
          "id": "sz_f4_s1_q5",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej."
          ]
        },
        {
          "id": "sz_f4_s1_q6",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”."
          ]
        },
        {
          "id": "sz_f4_s1_q7",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f4_s1_q8",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”."
          ]
        },
        {
          "id": "sz_f4_s1_q9",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
          ]
        },
        {
          "id": "sz_f4_s1_q10",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
          ]
        },
        {
          "id": "sz_f4_s1_q11",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią."
          ]
        },
        {
          "id": "sz_f4_s1_q12",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela."
          ]
        },
        {
          "id": "sz_f4_s1_q13",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
          ]
        },
        {
          "id": "sz_f4_s1_q14",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona."
          ]
        },
        {
          "id": "sz_f4_s1_q15",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni."
          ]
        },
        {
          "id": "sz_f4_s1_q16",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”."
          ]
        },
        {
          "id": "sz_f4_s1_q17",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”."
          ]
        },
        {
          "id": "sz_f4_s1_q18",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją."
          ]
        },
        {
          "id": "sz_f4_s1_q19",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu."
          ]
        },
        {
          "id": "sz_f4_s1_q20",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 2)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f4_s2_q1",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni."
          ]
        },
        {
          "id": "sz_f4_s2_q2",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f4_s2_q3",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”."
          ]
        },
        {
          "id": "sz_f4_s2_q4",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f4_s2_q5",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        },
        {
          "id": "sz_f4_s2_q6",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę."
          ]
        },
        {
          "id": "sz_f4_s2_q7",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f4_s2_q8",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
          ]
        },
        {
          "id": "sz_f4_s2_q9",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f4_s2_q10",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy."
          ]
        },
        {
          "id": "sz_f4_s2_q11",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f4_s2_q12",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia."
          ]
        },
        {
          "id": "sz_f4_s2_q13",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”"
          ]
        },
        {
          "id": "sz_f4_s2_q14",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać."
          ]
        },
        {
          "id": "sz_f4_s2_q15",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”."
          ]
        },
        {
          "id": "sz_f4_s2_q16",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom."
          ]
        },
        {
          "id": "sz_f4_s2_q17",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”."
          ]
        },
        {
          "id": "sz_f4_s2_q18",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”."
          ]
        },
        {
          "id": "sz_f4_s2_q19",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego."
          ]
        },
        {
          "id": "sz_f4_s2_q20",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 3)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f4_s3_q1",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f4_s3_q2",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”."
          ]
        },
        {
          "id": "sz_f4_s3_q3",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci."
          ]
        },
        {
          "id": "sz_f4_s3_q4",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy."
          ]
        },
        {
          "id": "sz_f4_s3_q5",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
          ]
        },
        {
          "id": "sz_f4_s3_q6",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f4_s3_q7",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci."
          ]
        },
        {
          "id": "sz_f4_s3_q8",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać."
          ]
        },
        {
          "id": "sz_f4_s3_q9",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”"
          ]
        },
        {
          "id": "sz_f4_s3_q10",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”"
          ]
        },
        {
          "id": "sz_f4_s3_q11",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce."
          ]
        },
        {
          "id": "sz_f4_s3_q12",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f4_s3_q13",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku."
          ]
        },
        {
          "id": "sz_f4_s3_q14",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy."
          ]
        },
        {
          "id": "sz_f4_s3_q15",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki."
          ]
        },
        {
          "id": "sz_f4_s3_q16",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”"
          ]
        },
        {
          "id": "sz_f4_s3_q17",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”."
          ]
        },
        {
          "id": "sz_f4_s3_q18",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy."
          ]
        },
        {
          "id": "sz_f4_s3_q19",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia."
          ]
        },
        {
          "id": "sz_f4_s3_q20",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”"
          ]
        }
      ]
    }
  ],
  "5": [
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 1)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f5_s1_q1",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
          ]
        },
        {
          "id": "sz_f5_s1_q2",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f5_s1_q3",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy."
          ]
        },
        {
          "id": "sz_f5_s1_q4",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”."
          ]
        },
        {
          "id": "sz_f5_s1_q5",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza."
          ]
        },
        {
          "id": "sz_f5_s1_q6",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy."
          ]
        },
        {
          "id": "sz_f5_s1_q7",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”."
          ]
        },
        {
          "id": "sz_f5_s1_q8",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”"
          ]
        },
        {
          "id": "sz_f5_s1_q9",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”."
          ]
        },
        {
          "id": "sz_f5_s1_q10",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f5_s1_q11",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f5_s1_q12",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni."
          ]
        },
        {
          "id": "sz_f5_s1_q13",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        },
        {
          "id": "sz_f5_s1_q14",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc."
          ]
        },
        {
          "id": "sz_f5_s1_q15",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem."
          ]
        },
        {
          "id": "sz_f5_s1_q16",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka."
          ]
        },
        {
          "id": "sz_f5_s1_q17",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego."
          ]
        },
        {
          "id": "sz_f5_s1_q18",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”"
          ]
        },
        {
          "id": "sz_f5_s1_q19",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”."
          ]
        },
        {
          "id": "sz_f5_s1_q20",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”"
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 2)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f5_s2_q1",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia.",
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy."
          ]
        },
        {
          "id": "sz_f5_s2_q2",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat."
          ]
        },
        {
          "id": "sz_f5_s2_q3",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce.",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”"
          ]
        },
        {
          "id": "sz_f5_s2_q4",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
          ]
        },
        {
          "id": "sz_f5_s2_q5",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”.",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”."
          ]
        },
        {
          "id": "sz_f5_s2_q6",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom.",
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku."
          ]
        },
        {
          "id": "sz_f5_s2_q7",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f5_s2_q8",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją."
          ]
        },
        {
          "id": "sz_f5_s2_q9",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f5_s2_q10",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom.",
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby."
          ]
        },
        {
          "id": "sz_f5_s2_q11",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”.",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”"
          ]
        },
        {
          "id": "sz_f5_s2_q12",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”"
          ]
        },
        {
          "id": "sz_f5_s2_q13",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum."
          ]
        },
        {
          "id": "sz_f5_s2_q14",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy.",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”"
          ]
        },
        {
          "id": "sz_f5_s2_q15",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f5_s2_q16",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki."
          ]
        },
        {
          "id": "sz_f5_s2_q17",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”."
          ]
        },
        {
          "id": "sz_f5_s2_q18",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią."
          ]
        },
        {
          "id": "sz_f5_s2_q19",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”.",
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”"
          ]
        },
        {
          "id": "sz_f5_s2_q20",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela."
          ]
        }
      ]
    },
    {
      "type": "puppy_find_match",
      "titlePl": "Szczeniak: Sytuacje i Etykieta (Zestaw 3)",
      "enemyName": "Szczeniak",
      "enemyMaxHp": 13,
      "enemyDamage": 2,
      "subtitlePl": "Szczeniak",
      "icon": "./assets/Postacie/Szczeniak.png",
      "descriptionPl": "Zwroty grzecznościowe, kultura osobista i odpowiedzialne decyzje szkolne.",
      "questions": [
        {
          "id": "sz_f5_s3_q1",
          "promptPl": "Koleżanka zmieniła fryzurę i wygląda inaczej niż zwykle. Co jej powiesz na powitanie?",
          "correctWord": "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
          "options": [
            "„Cześć! Masz nową fryzurę, bardzo korzystnie i elegancko w niej wyglądasz!”",
            "„Siema, ledwo cię poznałem w tym nowym wydaniu, skąd w ogóle taki nietypowy pomysł?”",
            "„Cześć, dlaczego postanowiłaś tak drastycznie zmienić swój dotychczasowy wygląd?”",
            "„Dzień dobry, w poprzednim uczesaniu chyba było ci nieco bardziej do twarzy niż teraz”."
          ]
        },
        {
          "id": "sz_f5_s3_q2",
          "promptPl": "Nauczyciel prosi o wyciszenie telefonów przed sprawdzianem. Co robisz ze swoim smartfonem?",
          "correctWord": "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
          "options": [
            "Kładę smartfon na kolanach pod ławką, by w razie potrzeby sprawdzić godzinę testu.",
            "Wyłączam dźwięki oraz wibracje i chowam urządzenie głęboko do zamkniętego plecaka.",
            "Przełączam telefon na ciche wibracje i trzymam go pod piórnikiem na blacie ławki.",
            "Zostawiam włączony głośnik, licząc, że nikt nie zadzwoni podczas pisania pracy."
          ]
        },
        {
          "id": "sz_f5_s3_q3",
          "promptPl": "Widzisz starszą panią niosącą ciężkie zakupy przed szkolnymi drzwiami. Co robisz?",
          "correctWord": "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
          "options": [
            "Podbiegam uprzejmie, przytrzymuję ciężkie drzwi i pytam, czy mogę pomóc zanieść torby.",
            "Głośno komentuję jej wolny krok, sugerując, by następnym razem wybrała mniejsze zakupy.",
            "Czekam, aż sama otworzy sobie drzwi łokciem, aby nie przeszkadzać jej w codziennym ruchu.",
            "Wchodzę szybko do budynku przed nią, aby nie blokować wąskiego przejścia innym uczniom."
          ]
        },
        {
          "id": "sz_f5_s3_q4",
          "promptPl": "Pani w bibliotece zwraca ci uwagę, że termin zwrotu lektury minął tydzień temu. Co odpowiadasz?",
          "correctWord": "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
          "options": [
            "„Przecież nikt inny nie czekał w kolejce na ten tytuł, więc tydzień zwłoki nie robi różnicy”.",
            "„Bardzo przepraszam za opóźnienie, przyniosłem książkę w całości i od razu ją oddaję”.",
            "„Książka była tak obszerna i zawiła, że potrzebowałem znacznie dłuższego czasu na czytanie”.",
            "„Myślałem, że termin zwrotu lektury szkolnej mija dopiero przed samą radą pedagogiczną”."
          ]
        },
        {
          "id": "sz_f5_s3_q5",
          "promptPl": "Kolega pyta cię szeptem o gotową odpowiedź w trakcie trwania sprawdzianu. Jak reagujesz?",
          "correctWord": "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie.",
          "options": [
            "Zaczynam szeptać z nim o trudności zadania, ryzykując odebranie pracy przez nauczyciela.",
            "Podnoszę rękę i głośno informuję całą klasę, że kolega z ławki próbuje ode mnie ściągać.",
            "Podsuwam mu swój otwarty arkusz odpowiedzi, aby mógł bez przeszkód przepisać całe zadanie.",
            "Skupiam się na własnym arkuszu i dyskretnie pokazuję gestem, że piszemy pracę samodzielnie."
          ]
        },
        {
          "id": "sz_f5_s3_q6",
          "promptPl": "Znajdujesz w szatni telefon komórkowy bez blokady ekranu. Co z nim robisz?",
          "correctWord": "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu.",
          "options": [
            "Przeglądam listę kontaktów, aby osobiście napisać do rodziców właściciela smartfona.",
            "Zostawiam aparat na ławce w szatni, wychodząc z założenia, że właściciel sam po niego wróci.",
            "Włączam powiadomienia w telefonie i czekam, aż ktoś ze znajomych zadzwoni z pytaniem o aparat.",
            "Nie sprawdzam cudzych wiadomości, lecz od razu zanoszę zgubę do szkolnego sekretariatu."
          ]
        },
        {
          "id": "sz_f5_s3_q7",
          "promptPl": "Po skończonym pikniku klasowym na trawniku leżą plastikowe butelki i papierki. Co robisz?",
          "correctWord": "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
          "options": [
            "Wychodzimy z założenia, że sprzątanie terenu rekreacyjnego należy do obowiązków służb miejskich.",
            "Zabieram wyłącznie własną butelkę, pozostawiając resztę odpadów osobom dyżurującym w parku.",
            "Wspólnie z całą klasą zbieramy pozostawione śmieci i segregujemy je do właściwych pojemników.",
            "Przesuwamy wszystkie śmieci pod pobliskie krzaki, by nie rzucały się w oczy spacerowiczom."
          ]
        },
        {
          "id": "sz_f5_s3_q8",
          "promptPl": "Kolega pożyczył od ciebie zeszyt do przepisania lekcji i oddał z poplamioną okładką. Co mu mówisz?",
          "correctWord": "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
          "options": [
            "„Jesteś nieodpowiedzialny, niszczysz cudze rzeczy, już nigdy w życiu niczego ci nie pożyczę!”",
            "„Szkoda, że okładka się pobrudziła, proszę, zmień folię ochronną i uważaj następnym razem”.",
            "„Teraz ty musisz oddać mi swój podręcznik, dopóki sam nie kupię sobie nowego zeszytu”.",
            "„Nic nie szkodzi, ten zeszyt i tak był stary, wcale nie musisz przejmować się tą plamą”."
          ]
        },
        {
          "id": "sz_f5_s3_q9",
          "promptPl": "Podczas pracy w grupie jeden z członków zespołu nic nie robi. Jak rozwiązujecie ten problem?",
          "correctWord": "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
          "options": [
            "Rozmawiamy spokojnie: „Podzielmy zadania po równo – za który fragment chciałbyś odpowiadać?”",
            "Mówimy z pretensją: „Przez twoją bezczynność cała nasza grupa dostanie ocenę niedostateczną!”",
            "Przerywamy całą pracę zespołową i czekamy z założonymi rękami na interwencję nauczyciela.",
            "Kończymy projekt w milczeniu bez niego, a na końcu wykreślamy jego nazwisko z karty pracy."
          ]
        },
        {
          "id": "sz_f5_s3_q10",
          "promptPl": "Zgubiłeś bilet miesięczny w drodze do szkoły. Jak zgłaszasz to rodzicom?",
          "correctWord": "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”.",
          "options": [
            "„Zgubiłem dokument, ale nic się nie stało, pożyczę legitymację od kolegi z sąsiedniej klatki”.",
            "„Będę jeździł bez biletu do końca miesiąca, kontrolerzy rzadko sprawdzają poranne autobusy”.",
            "„Ktoś musiał wyciągnąć mi bilet z plecaka na przystanku, to nie moja wina, kupcie mi nowy!”",
            "„Mamo, tato, zgubiłem bilet miesięczny, przepraszam, sprawdzę trasę i złożę wniosek o duplikat”."
          ]
        },
        {
          "id": "sz_f5_s3_q11",
          "promptPl": "Ktoś w internecie na grupie klasowej napisał złośliwy komentarz pod twoim zdjęciem. Jak postępujesz?",
          "correctWord": "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
          "options": [
            "Natychmiast odpowiadam równie ostrym, obraźliwym wpisem pod jego najnowszym zdjęciem.",
            "Zachowuję spokój, wykonuję zrzut ekranu i pokazuję sprawę wychowawcy oraz rodzicom.",
            "Usuwam całe konto w mediach społecznościowych i zamykam się w pokoju bez żadnej rozmowy.",
            "Wysyłam prywatną wiadomość z ostrzeżeniem, że załatwimy sprawę siłowo po lekcjach w szkole."
          ]
        },
        {
          "id": "sz_f5_s3_q12",
          "promptPl": "Nowa osoba w klasie nie ma z kim usiąść w ławce na początku roku szkolnego. Co robisz?",
          "correctWord": "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
          "options": [
            "Uśmiecham się życzliwie i mówię: „Cześć! Mam wolne miejsce obok siebie, usiądź ze mną!”",
            "Kładę plecak na sąsiednim krześle, aby nikt nieznajomy nie naruszał mojej wolnej przestrzeni.",
            "Pytam go z dystansem, z jakiego powodu musiał przenieść się do naszej placówki w tym roku.",
            "Czekam w milczeniu na decyzję nauczyciela, który sam wskaże nowemu uczniowi stałe miejsce."
          ]
        },
        {
          "id": "sz_f5_s3_q13",
          "promptPl": "Podczas meczu sędzia niesłusznie odgwizdał faul przeciwko twojej drużynie. Jak reagujesz?",
          "correctWord": "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
          "options": [
            "Demonstracyjnie siadam na murawie i odmawiam kontynuowania meczu przed zgromadzoną widownią.",
            "Przy najbliższym starciu fauluję rywala w rewanżu za niesprawiedliwy gwizdek sędziego.",
            "Przyjmuję decyzję sędziego z szacunkiem i skupiam się na dalszej, zdyscyplinowanej grze.",
            "Podbiegam do arbitra z pretensjami, domagając się natychmiastowej zmiany orzeczenia."
          ]
        },
        {
          "id": "sz_f5_s3_q14",
          "promptPl": "Zauważyłeś, że koleżanka z klasy płacze cicho w kącie szatni. Jak reagujesz?",
          "correctWord": "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
          "options": [
            "Czekam z daleka, aż ktoś inny podejdzie i zainteresuje się jej skomplikowaną sytuacją.",
            "Podchodzę spokojnie i pytam życzliwie, czy coś się stało i czy mogę jej jakoś pomóc.",
            "Przechodzę obok w pośpiechu, udając, że wcale nie zauważyłem jej łez i smutnego nastroju.",
            "Wychodzę na korytarz i głośno opowiadam wszystkim kolegom o jej problemach osobistych."
          ]
        },
        {
          "id": "sz_f5_s3_q15",
          "promptPl": "W stołówce szkolnej przypadkowo wylałeś kompot na wspólny stół. Co robisz?",
          "correctWord": "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
          "options": [
            "Przepraszam obecnych przy stole, biorę ręcznik papierowy i starannie wycieram powstałą plamę.",
            "Szybko odsuwam swoją tacę na bok i udaję przed innymi, że plama była rozlana wcześniej.",
            "Zostawiam rozlany płyn na ceracie, licząc na to, że personel stołówki sam go posprząta.",
            "Zwracam głośno uwagę koledze, że szturchnął mój łokieć podczas sięgania po ciepły posiłek."
          ]
        },
        {
          "id": "sz_f5_s3_q16",
          "promptPl": "Przed ważnym egzaminem kolega z ławki bardzo się denerwuje i drżą mu ręce. Jak go uspokajasz?",
          "correctWord": "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
          "options": [
            "„Lepiej nie myśl o pytaniach otwartych, bo stres tylko pogorszy twoje szanse na dobry wynik”.",
            "„Ja też niczego nie pamiętam z lektur, ten test na pewno będzie najtrudniejszy w całym roku!”",
            "„Spokojnie, rzetelnie powtarzaliśmy materiał, weź głęboki oddech – świetnie sobie poradzisz!”",
            "„Spróbuj ściągać od koleżanki z pierwszego rzędu, ona zawsze ma wszystkie zadania bez błędu”."
          ]
        },
        {
          "id": "sz_f5_s3_q17",
          "promptPl": "Dostałeś gorszą ocenę ze sprawdzianu, niż się spodziewałeś. Jak podchodzisz do sytuacji?",
          "correctWord": "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
          "options": [
            "Pytam nauczyciela o popełnione błędy, analizuję uwagi i rzetelnie uczę się do poprawy.",
            "Uznaję, że kryteria oceniania były zbyt surowe i rezygnuję z dalszych starań z przedmiotu.",
            "Obwiniam trudne warunki w sali oraz zbyt krótki czas przeznaczony na rozwiązanie arkusza.",
            "Tłumaczę sobie, że pytania były podchwytliwe, a wysiłek włożony w naukę nie ma znaczenia."
          ]
        },
        {
          "id": "sz_f5_s3_q18",
          "promptPl": "Kolega proponuje ci, byście uciekli z ostatniej lekcji na wagary. Jaka jest asertywna odpowiedź?",
          "correctWord": "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
          "options": [
            "„Może pójdziemy innym razem, bo dzisiaj zapomniałem cieplejszej kurtki na spacer po parku”.",
            "„Nie, dziękuję, zostaję w klasie – zależy mi na obecności i powtórce przed trudnym testem”.",
            "„Zgadzam się bez wahania, przecież na tej lekcji nauczyciel i tak nie sprawdzi frekwencji”.",
            "„Chętnie bym uciekł, ale boję się, że wychowawca zauważy brak mojego plecaka na krześle”."
          ]
        },
        {
          "id": "sz_f5_s3_q19",
          "promptPl": "Podczas wycieczki szkolnej zgubiłeś z oczu swoją grupę w muzeum. Jak bezpiecznie postępujesz?",
          "correctWord": "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
          "options": [
            "Zostaję w oznaczonym punkcie zbiórki i zgłaszam sytuację pracownikowi ochrony muzeum.",
            "Biegnę na własną rękę przez wszystkie sale wystawowe, szukając znajomych kurtek kolegów.",
            "Czekam w muzealnej kawiarni przy wejściu, licząc, że przewodnik sam po mnie wróci.",
            "Opuszczam gmach muzeum i próbuję dotrzeć pieszo na dworzec kolejowy do autokaru grupy."
          ]
        },
        {
          "id": "sz_f5_s3_q20",
          "promptPl": "Nauczyciel pomylił się i wpisał ci nieobecność zamiast spóźnienia. Co mówisz po lekcji?",
          "correctWord": "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
          "options": [
            "„Wychodziłem do toalety na początku zajęć, więc proszę natychmiast skasować ten wpis!”",
            "„Przepraszam pana, byłem obecny, lecz spóźniony – czy mogę prosić o korektę w dzienniku?”",
            "„To wina kolegi z ławki, który na czas nie zgłosił mojego wejścia do sali lekcyjnej!”",
            "„Panie profesorze, dlaczego znowu niesprawiedliwie i pochopnie ocenił pan moją obecność?”"
          ]
        }
      ]
    }
  ]
};

export function getSzczeniakEncounter(floor = 1, variant = null, heroId = null) {
  const hid = heroId ? String(heroId).toLowerCase() : null;
  if (hid && HERO_SZCZENIAK_SETS[hid]) {
    const sets = Array.isArray(HERO_SZCZENIAK_SETS[hid]) ? HERO_SZCZENIAK_SETS[hid] : [HERO_SZCZENIAK_SETS[hid]];
    const selectedIdx = (variant !== null && variant >= 0 && variant < sets.length)
      ? variant
      : Math.floor(Math.random() * sets.length);
    const data = sets[selectedIdx];
    return {
      type: 'puppy_find_match',
      titlePl: data.titlePl,
      enemyName: 'Szczeniak',
      enemyMaxHp: 13,
      enemyDamage: 2,
      subtitlePl: data.subtitlePl,
      icon: './assets/Postacie/Szczeniak.png',
      descriptionPl: data.descriptionPl,
      questions: [...data.questions]
    };
  }
  const f = Math.max(1, Math.min(5, Number(floor) || 1));
  const pool = SZCZENIAK_FLOOR_ENCOUNTERS[f] || SZCZENIAK_FLOOR_ENCOUNTERS[1];
  const idx = (variant !== null && variant >= 0 && variant < pool.length)
    ? variant
    : Math.floor(Math.random() * pool.length);
  const data = pool[idx] || pool[0];
  return {
    ...data,
    enemyMaxHp: 13,
    questions: [...data.questions]
  };
}
