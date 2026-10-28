import sys, os, re
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

def rebalance_file(file_path, mappings):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    updated = 0
    for key, spec in mappings.items():
        escaped_key = re.escape(key)
        pattern = re.compile(r'(options\s*:\s*\[)([^\]]*?' + escaped_key + r'[^\]]*?)(\])', re.DOTALL)
        pos = 0
        found_any = False
        while True:
            m = pattern.search(content, pos)
            if not m:
                break
            found_any = True
            prefix = m.group(1)
            old_block = m.group(2)
            suffix = m.group(3)

            obj_matches = list(re.finditer(r'\{([^{}]+)\}', old_block))
            if not obj_matches:
                pos = m.end(3)
                continue
            
            new_obj_strs = []
            w_idx = 0
            new_wrongs = spec.get('wrongs', [])
            new_c = spec.get('correct', None)

            for om in obj_matches:
                obj_str = om.group(1)
                t_m = re.search(r'(text|textPl)\s*:\s*([\'"`])((?:\\.|(?!\2).)*)\2', obj_str)
                c_m = re.search(r'\bcorrect\s*:\s*(true|false)', obj_str)
                if not t_m or not c_m:
                    new_obj_strs.append("{" + obj_str + "}")
                    continue
                
                field = t_m.group(1)
                quote = t_m.group(2)
                orig_text = t_m.group(3)
                is_corr = c_m.group(1) == 'true'

                if is_corr:
                    target_text = new_c if new_c is not None else orig_text
                else:
                    if w_idx < len(new_wrongs):
                        target_text = new_wrongs[w_idx]
                        w_idx += 1
                    else:
                        target_text = orig_text
                
                new_prop = f"{field}: {quote}{target_text}{quote}"
                new_obj = obj_str[:t_m.start()] + new_prop + obj_str[t_m.end():]
                new_obj_strs.append("{" + new_obj + "}")

            indent_match = re.search(r'\n([ \t]+)\{', old_block)
            indent = indent_match.group(1) if indent_match else '        '
            closing_indent = indent[:-2] if len(indent) > 2 else ''
            new_block = "\n" + indent + (",\n" + indent).join(new_obj_strs) + "\n" + closing_indent
            
            content = content[:m.start(1)] + prefix + new_block + suffix + content[m.end(3):]
            pos = m.start(1) + len(prefix) + len(new_block) + len(suffix)
            updated += 1
        if not found_any:
            print(f"[{file_path}] NOT FOUND: {key[:40]}...")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[{file_path}] Successfully updated {updated} / {len(mappings)} items")

# 1. dyrektorka.js
dyrektorka_data = {
    'Słowo «Witam» stawia nadawcę w pozycji gospodarza przyjmującego gości i narusza hierarchię urzędową.': {
        'wrongs': [
            'Słowo «Witam» jest ordynarnym wulgaryzmem całkowicie zakazanym we wszystkich słownikach języka polskiego.',
            'Ponieważ w oficjalnej korespondencji wolno stosować wyłącznie formuły powitalne w języku angielskim.',
            'Bo słowo «Witam» według zasad ortografii wolno zapisać wyłącznie małą literą bez żadnego wykrzyknika.'
        ]
    },
    'W załączeniu przedkładam wymagane zaświadczenie lekarskie potwierdzające powrót do zdrowia.': {
        'wrongs': [
            'Dorzucam do papierów szkolnych kwit od lekarza, że choroba już mi minęła i mogę normalnie biegać.',
            'Załączam podarty papierek od doktora, bo pani w sekretariacie szkoły koniecznie kazała przynieść.',
            'Mam tu zwolnienie z lekcji, proszę natychmiast wpisać w dziennik i nie stawiać mi nieobecności.'
        ]
    },
    'Ująć dosłowny cytat w cudzysłów i podać pełne źródło (autora, tytuł dzieła, stronę lub link)': {
        'wrongs': [
            'Zmienić w skopiowanym zdaniu dwa wyrazy na synonimy i podpisać cały tekst własnym imieniem',
            'Skopiować cały akapit z internetowej Wikipedii zupełnie bez podawania jakiegokolwiek adresu',
            'Poprosić kolegę z ławki o szybkie przepisanie cudzego tekstu odręcznie do swojego zeszytu'
        ]
    },
    '«Prośbę naszą motywujemy faktem, iż w tym samym dniu wyznaczono już dwa inne sprawdziany pisemne»': {
        'wrongs': [
            '«Nie zamierzamy pisać tego sprawdzianu, ponieważ nikomu z naszej klasy nie chciało się wczoraj uczyć»',
            '«Nauczyciel ewidentnie się na nas uwziął, więc kategorycznie żądamy anulowania dzisiejszej kartkówki»',
            '«Uprzejmie proszę przełożyć sprawdzian z chemii, bo w piątek mamy wspólne plany na wyjście na pizzę»'
        ]
    },
    'Odnoszenie się do argumentów merytorycznych rozmówcy bez atakowania jego osoby (argumentum ad rem)': {
        'wrongs': [
            'Głośne przekrzykiwanie innych mówców i złośliwe atakowanie ich cech (argumentum ad personam)',
            'Bezczelne przerywanie oficjalnej wypowiedzi dyrekcji szkoły w połowie ważnego zdania na apelu',
            'Wychodzenie ze szkolnej auli demonstracyjnie trzaskając drzwiami, gdy ktoś ma odmienne zdanie'
        ]
    },
    'Pieczątkę wpływu z datą dzienną i podpisem sekretarza na kopii pisma (potwierdzenie odbioru)': {
        'wrongs': [
            'Niejasną słowną obietnicę, że pan dyrektor przeczyta pismo w wolnej chwili w gabinecie',
            'Zapisany na skrawku kartki prywatny numer telefonu komórkowego do woźnego szkolnego szkoły',
            'Żadnego urzędowego dowodu, gdyż sekretariat w ogóle nie ewidencjonuje pism wpływających'
        ]
    }
}
rebalance_file('src/data/characters/dyrektorka.js', dyrektorka_data)

# 2. profesor.js
profesor_data = {
    'Dźwig (od czasownika «dźwigać»)': {
        'correct': 'Dźwig (od «dźwigać» formantem zerowym)',
        'wrongs': [
            'Pisarz (od «pisać» przyrostkiem -arz)',
            'Przeczytać (od «czytać» afiksem prze-)',
            'Złotnik (od «złoto» sufiksem -nik)'
        ]
    },
    'Wysłuchałem w skupieniu rad moich serdecznych przyjaciół i rozmawiałem z nimi dwiema rękami.': {
        'wrongs': [
            'Wysłuchałem w skupieniu pouczających rad moich przyjaciółów podczas przerwy na korytarzu.',
            'Rozmawiałem swobodnie z dwoma rękami wciśniętymi głęboko w kieszenie nowej marynarki.',
            'Nie widziałem tam na placu zupełnie żadnych obcych ludzisków ani ich szczekających psów.'
        ]
    },
    '14 wersów: dwie strofy czterowersowe (opisowe) i dwie strofy trzywersowe (refleksyjne)': {
        'wrongs': [
            '10 wersów: dwie symetryczne strofy pięciowersowe pisane nieregularnym wierszem wolnym',
            'Dwanaście rozbudowanych ksiąg epickich pisanych trzynastozgłoskowcem z rymami parzystymi',
            'Dowolna liczba krótkich zwrotek poetyckich zakończona dosadnym morałem ze świata fauny'
        ]
    },
    'Zamek (budowla warowna ze średniowiecza) oraz zamek (suwak błyskawiczny w kurtce)': {
        'wrongs': [
            'Ręka (górna kończyna człowieka) oraz ręka (boczne oparcie zabytkowego mebla w salonie)',
            'Głowa (górna część ciała ludzkiego) oraz głowa (szanowany przywódca całej rodziny)',
            'Noga (dolna kończyna biegacza) oraz noga (drewniana podpora okrągłego stołu w pokoju)'
        ]
    },
    'Ubezdźwięcznienie wsteczne (bezdźwięczne «k» ubezdźwięcznia poprzedzające dźwięczne «w»)': {
        'wrongs': [
            'Udźwięcznienie postępowe (dźwięczne fonetycznie «ł» udźwięcznia następujące głoski słowa)',
            'Całkowita utrata dźwięczności wymawianej głoski w absolutnym wygłosie końcowym słowa',
            'Fonetyczne uproszczenie trudnej grupy spółgłoskowej występującej wewnątrz wyrazu'
        ]
    }
}
rebalance_file('src/data/characters/profesor.js', profesor_data)

# 3. silaczka.js
silaczka_data = {
    'Dźwigając sztangę na pomoście, zawodnik wykonał głęboki wydech przeponowy.': {
        'wrongs': [
            'Dźwigający ciężką sztangę zawodnik odłożył cały gryf na stalowe stojaki.',
            'Podniósłszy wielką sztangę, zmęczony podszedł powoli do trenera po napój.',
            'Stalowa sztanga została dźwignięta z olbrzymim wysiłkiem przez atletę na sali.'
        ]
    },
    'Czystą, szlachetną rywalizację z poszanowaniem przeciwnika, sędziów i zasad, bez oszustwa i dopingu': {
        'wrongs': [
            'Bezwzględne dążenie do triumfu za wszelką cenę, nawet poprzez brutalną przemoc i symulowanie fauli',
            'Wulgarne obrażanie kolegów i rywali po przegranym meczu na korytarzu szkolnym przed całą widownią',
            'Tchórzliwą ucieczkę z boiska sportowego w trakcie gry, gdy przeciwnik prowadzi wysoko w punktacji'
        ]
    },
    'Codzienna aktywność fizyczna (minimum 60 minut ruchu), sen oraz picie wody': {
        'wrongs': [
            'Codzienne bezmyślne jedzenie tłustych chipsów i słodyczy przed telewizorem',
            'Picie wyłącznie przesłodzonych, kolorowych napojów gazowanych i energetyków',
            'Nieprzerwane siedzenie bez ruchu przed monitorem przez 12 godzin na dobę'
        ]
    },
    'Wzrasta napięcie mięśniowe, lecz długość mięśnia nie ulega zmianie (brak ruchu w stawie)': {
        'wrongs': [
            'Włókno mięśniowe gwałtownie skraca się i prostuje zgiętą kończynę z bardzo dużą prędkością',
            'Cały mięsień natychmiastowo i całkowicie wiotczeje, tracąc jakąkolwiek zdolność kurczenia',
            'Mięsień szkieletowy pod wpływem ciężaru zamienia się trwale w twardą tkankę chrzęstną ciała'
        ]
    }
}
rebalance_file('src/data/characters/silaczka.js', silaczka_data)

# 4. smok.js
smok_data = {
    'Uratowanie Ligii przez Ursusa na arenie cyrku Nerona i publiczne wybaczenie chrześcijan': {
        'wrongs': [
            'Tchórzliwa ucieczka patrycjuszy z płonącego Rzymu przed pożarem do luksusowej willi w Ancjum',
            'Kupienie nowego marmurowego pałacu od wykwintnego Petroniusza w samym centrum Wiecznego Rzymu',
            'Nocny krwawy pojedynek z potężnym gladiatorem Krotonem w wąskim i ciemnym zaułku Zatybrza'
        ]
    },
    'Zestawił bezduszną machinę carskiego despotyzmu z heroicznym poświęceniem obrońców Warszawy': {
        'wrongs': [
            'Przedstawił w krzywym zwierciadle komiczny spór dwóch kłótliwych szlachciców o zamek graniczny',
            'Opisał poetycką i baśniową wędrówkę małego, złotowłosego chłopca po odległych planetach kosmosu',
            'Przedstawił wierny, barwny i w pełni realistyczny obraz polskiej wsi szlacheckiej w czasie żniw'
        ]
    },
    'Recytacja «Reduty Ordona» Mickiewicza przez Bernarda Zygiera na lekcji polskiego u prof. Sztubera': {
        'wrongs': [
            'Ciche i wzruszające odwiedziny zatroskanej matki Marcina w starym klerykowskim gimnazjum męskim',
            'Burzliwa kłótnia młodego Borowicza z wścibskim inspektorem Majewskim o brak regulaminowego munduru',
            'Wspólny jesienny wyjazd na emocjonujące polowanie z doświadczonym myśliwym w borach w Gawronkach'
        ]
    },
    'Ostrzega przed zarozumiałością, pychą i odrzucaniem własnej prawdziwej natury na rzecz fałszywych ambicji': {
        'wrongs': [
            'Zachęca do kupowania groźnych dzikich drapieżników do objazdowych, prowincjonalnych cyrków w kraju',
            'Wskazuje naiwnie, że na deskach profesjonalnego teatru liczy się wyłącznie potężny i głośny ryk aktora',
            'Podkreśla z przekąsem, że surowy dyrektor cyrku zupełnie nie znał się na wybitnej sztuce scenicznej'
        ]
    }
}
rebalance_file('src/data/characters/smok.js', smok_data)

# 5. curriculumChallenges.js
curriculum_data = {
    'Duch jego zmarłego wspólnika, Jakuba Marleya, skuty łańcuchem z kasetek': {
        'wrongs': [
            'Jego skromny kancelista Bob Cratchit z chorym synkiem Małym Timem u boku',
            'Uśmiechnięty siostrzeniec Fred serdecznie zapraszający go na obiad w święta',
            'Mroczny Duch Przyszłych Wigilii milcząco wskazujący zarośnięty nagrobek'
        ]
    },
    'To Jacek Soplica, ojciec Tadeusza, który odkupuje dawne winy służbą dla ojczyzny': {
        'wrongs': [
            'To wierny i mściwy dawny klucznik rodu Horeszków, szlachcic Gerwazy Rębajło',
            'To podstępny rosyjski oficer major Płut ukrywający się w przebraniu mnicha',
            'To rodzony brat pięknej Telimeny przybyły niedawno wprost z Petersburga'
        ]
    },
    'Do „Balladyny” Juliusza Słowackiego – korona oznacza żądzę władzy, maliny zbrodnię na Alinie, a błyskawica sprawiedliwą karę': {
        'wrongs': [
            'Do „Pana Tadeusza” Adama Mickiewicza – złota korona królewska, gwałtowna burza w Soplicowie i leśne grzybobranie szlachty',
            'Do „Małego Księcia” Antoine de Saint-Exupéry’ego – pyszna korona Króla na małej asteroidzie oraz zerwane róże na pustyni',
            'Do „Dziadów cz. II” Adama Mickiewicza – lekki wianek pasterki Zosi, uciekający baranek oraz chleb i ziarna dla ptaków nocy'
        ]
    },
    '„Balladyna” Juliusza Słowackiego oraz „Dziady cz. II” Adama Mickiewicza (Widmo Złego Pana)': {
        'wrongs': [
            '„Mały Książę” Antoine de Saint-Exupéry’ego oraz „Akademia Pana Kleksa” Jana Brzechwy',
            '„Kamienie na szaniec” Aleksandra Kamińskiego oraz nowela „Latarnik” Henryka Sienkiewicza',
            'Komiks „Kajko i Kokosz” Janusza Christy oraz powieść „Chłopcy z Placu Broni” Ferenca Molnára'
        ]
    }
}
rebalance_file('src/data/curriculumChallenges.js', curriculum_data)

# 6. bossChallengesData.js
boss_data = {
    'Czerwoną kartkę oznaczającą natychmiastowe wykluczenie z gry i osłabienie drużyny.': {
        'wrongs': [
            'Żółtą kartkę będącą jedynie wstępnym ostrzeżeniem gracza bez osłabienia składu.',
            'Dwie minuty kary na ławce rezerwowych poza boiskiem niczym w meczu hokejowym.',
            'Zwykły rzut wolny pośredni na połowie rywali bez prawa ukarania żadną kartką.'
        ]
    },
    'Lepiej zadowolić się pewną, choć mniejszą korzyścią, niż ryzykować utratę wszystkiego dla niepewnych zysków.': {
        'wrongs': [
            'Wszystkie małe wróble siedzące na dachach potrafią latać znacznie szybciej i zwinniej niż gołębie miejskie.',
            'Należy zawsze i za wszelką cenę bez wahania ryzykować cały posiadany majątek w każdej życiowej sytuacji.',
            'Każde dzikie ptaki żyjące w mieście wymagają obfitego dokarmiania świeżym ziarnem w czasie mroźnej zimy.'
        ]
    },
    'Kto zaprasza, kogo zaprasza, na jakie wydarzenie, kiedy (data i godzina) oraz gdzie (dokładne miejsce).': {
        'wrongs': [
            'Kto zaprasza gości, dokładny koszt biletu wstępu, wybrane menu obiadowe oraz podpis obojga rodziców.',
            'Data wydarzenia szkolnego, pełna lista nieobecnych na apelu uczniów i aktualny spis lektur szkolnych.',
            'Tylko ogólna nazwa szkoły oraz okrągła pieczątka sekretariatu zupełnie bez podania daty ani godziny.'
        ]
    },
    'W szkolnej bibliotece zabrakło egzemplarzy lektury dla całej klasy.': {
        'wrongs': [
            'Uczniowie wypożyczyli wszystkie dostępne tomy wierszy z biblioteki.',
            'Wszystkie nowe podręczniki leżały ułożone na biurku nauczycielki.',
            'Wypożyczona gruba książka została przeczytana od deski do deski.'
        ]
    },
    '„Od trzech dni boli mnie gardło, mam wysoką gorączkę i męczy mnie suchy kaszel.”': {
        'wrongs': [
            '„Od trzech dni bolę gardło, mam wysoką gorączkę i męczę bardzo suchy kaszel.”',
            '„Boli mi gardło, mam wysoką gorączkę i czuję gardło bolejące przy przełykaniu.”',
            '„Gardło mnie mocno boli od trzech dniach z gorączkami i z wielkimi kaszlami.”'
        ]
    },
    'Antybiotyki niszczą wyłącznie bakterie i są całkowicie nieskuteczne w walce z wirusami (np. grypą).': {
        'wrongs': [
            'Antybiotyki leczą bez wyjątku każdą chorobę przeziębieniową oraz katar w ciągu dwunastu godzin.',
            'Antybiotyki można brać zupełnie dowolnie bez konsultacji i przerywać całą kurację po jednym dniu.',
            'Antybiotyki działają wyłącznie przeciwbólowo na organizm pacjenta i zastępują witaminę C w diecie.'
        ]
    },
    '„Od rana pacjent nie przyjmował żadnego leku przeciwgorączkowego.”': {
        'wrongs': [
            '„Od rana pacjent nie przyjmował wcale żaden lek przeciwgorączkowy.”',
            '„Nie czułem zupełnie żaden ból w klatce podczas badania stetoskopem.”',
            '„Lekarz na wizycie nie przepisał ten bardzo silny syrop wykrztuśny.”'
        ]
    },
    'Egzamin ósmoklasisty z języka polskiego trwa 120 minut i zawiera zadania zamknięte oraz otwarte.': {
        'wrongs': [
            'Wypracowanie o «Kamieniach na szaniec» to bez wątpienia najciekawsza forma wypowiedzi na teście.',
            'Instagramerzy w sieci prowadzą znacznie bardziej ekscytujące życie niż dawni autorzy lektur.',
            'Żółte jaskrawe tło na profilu społecznościowym każdego ucznia wygląda zdecydowanie najlepiej.'
        ]
    },
    'Publikacja wymaga zgody autora lub skorzystania z otwartej licencji (np. Creative Commons) z podaniem źródła.': {
        'wrongs': [
            'Wszystkie obrazy widoczne w wyszukiwarkach można zupełnie bez ograniczeń pobierać i podpisywać jako własne.',
            'Wystarczy jedynie dopisać pod kradzionym zdjęciem «znalezione w sieci», by uniknąć naruszenia praw majątku.',
            'Autorskie prawa majątkowe do fotografii wygasają automatycznie już po 24 godzinach od publikacji posta.'
        ]
    },
    'Podczas prezentacji omówiłem zalety netykiety, a także przedstawiłem zasady ochrony haseł.': {
        'wrongs': [
            'Podczas prezentacji omówiłem zalety netykiety, a tak że przedstawiłem zasady ochrony haseł.',
            'Prelegent mówił tak że nikt z obecnych na dużej sali nie zrozumiał jego prawdziwych intencji.',
            'Zrobiłem to zadanie także, jak kazał mi doświadczony administrator szkolnej sieci cyfrowej.'
        ]
    }
}
rebalance_file('src/data/bossChallengesData.js', boss_data)

# 7. vocabulary.js
vocab_data = {
    'Pożegnanie z kolegami, gdy odchodzimy lub idziemy do domu': {
        'wrongs': [
            'Pytanie o aktualną godzinę lub właściwy numer strony w książce',
            'Oficjalne powitanie pani nauczycielki w sali lekcyjnej w szkole'
        ]
    }
}
rebalance_file('src/data/vocabulary.js', vocab_data)

# 8. MinigameLauncher.js
launcher_data = {
    '„Tak, proszę! Mam niebieski długopis w piórniku.”': {
        'wrongs': [
            '„Nie mam zupełnie nic do pisania w moim plecaku.”',
            '„Idę natychmiast na przerwę i nie pożyczę ci nic!”'
        ]
    }
}
rebalance_file('src/encounters/MinigameLauncher.js', launcher_data)

# 9. kebabMasterGame.js
kebab_data = {
    '„Dziękuję bardzo! Miłego dnia i do widzenia!”': {
        'wrongs': [
            '„Dawaj ten gorący kebab i zaraz uciekam stąd!”',
            '„Zapomniałem zapłacić za ten zamówiony kebab.”'
        ]
    }
}
rebalance_file('src/games/kebabMasterGame.js', kebab_data)

print("Batch script finished!")
