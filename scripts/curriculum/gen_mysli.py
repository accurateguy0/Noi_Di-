# -*- coding: utf-8 -*-
"""
Wewnętrzne Myśli - 6 zestawów na każdego z 6 bohaterów (łącznie 36 zestawów po 20 pytań Prawda/Fałsz = 720 pytań).
Tematyka: radzenie sobie ze stresem, emocje, asertywność, metodyka nauki, CKE i etyka.
"""

def get_mysli_data():
    import json
    return json.loads(r"""{
        "warrior": [
                {
                        "titlePl": "Myśli [Wojownik]: Spokój w Rywalizacji",
                        "subtitlePl": "Opanowanie emocji przed startem",
                        "descriptionPl": "Wycisz wewnętrzny chaos przed zawodami. Wybierz Prawdę lub Fałsz.",
                        "questions": [
                                {
                                        "promptPl": "Stres przed ważnym sprawdzianem lub meczem jest zjawiskiem naturalnym i można go oswoić oddechem.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Kontrolowany głęboki oddech obniża tętno i poprawia koncentrację."
                                },
                                {
                                        "promptPl": "Prawdziwy wojownik nigdy nie przyznaje się do zmęczenia i ignoruje ostry ból w mięśniach.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Ignorowanie bólu prowadzi do poważnych kontuzji – mądry sportowiec dba o regenerację."
                                },
                                {
                                        "promptPl": "Zasada fair play nakazuje podać rękę rywalowi nawet po przegranym meczu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Szacunek dla przeciwnika to fundament sportowego honoru."
                                },
                                {
                                        "promptPl": "Picie dużej ilości wody podczas wysiłku fizycznego osłabia organizm.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Regularne nawadnianie jest kluczowe dla wydolności mózgu i mięśni."
                                },
                                {
                                        "promptPl": "Wizualizacja udanego zagrania przed wyjściem na boisko pomaga w jego realizacji.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Trening mentalny i wyobrażenie sukcesu zwiększają pewność siebie."
                                },
                                {
                                        "promptPl": "Gdy ktoś fauluje cię na boisku, najlepszą reakcją jest natychmiastowy brutalny rewanż.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zemsta prowadzi do czerwonej kartki – sprawę rozstrzyga sędzia."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wojownik]: Odwaga i Lektury CKE",
                        "subtitlePl": "Bohaterowie Szarych Szeregów i wzorce męstwa",
                        "descriptionPl": "Rozpoznaj prawdę o odwadze cywilnej i motywach literackich.",
                        "questions": [
                                {
                                        "promptPl": "Bohaterowie «Kamieni na szaniec» łączyli walkę o wolność z samokształceniem i nauką.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Alek, Rudy i Zośka zdawali maturę na tajnych kompletach i wierzyli w naukę."
                                },
                                {
                                        "promptPl": "Odwaga polega na braku jakiegokolwiek lęku w niebezpiecznych sytuacjach.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Odwaga to działanie mimo odczuwanego strachu w obronie wyższych wartości."
                                },
                                {
                                        "promptPl": "Akcja pod Arsenałem miała na celu odbicie Rudego z rąk gestapo.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Była to legendarna akcja braterstwa i poświęcenia harcerzy."
                                },
                                {
                                        "promptPl": "W «Reducie Ordona» Adam Mickiewicz ukazał tchórzostwo polskich obrońców.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Poemat gloryfikuje heroizm i niezłomność obrońców Warszawy z 1831 r."
                                },
                                {
                                        "promptPl": "Asertywna obrona kolegi przed wyśmiewaniem w klasie wymaga prawdziwej odwagi cywilnej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Sprzeciwienie się grupie w obronie słabszego to dowód siły charakteru."
                                },
                                {
                                        "promptPl": "Siła fizyczna jest w życiu ważniejsza od wiedzy, uczciwości i empatii.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To prawość, inteligencja i szacunek dla innych definiują wartość człowieka."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wojownik]: Regeneracja i Zdrowie",
                        "subtitlePl": "Biologiczne podstawy sukcesu ucznia",
                        "descriptionPl": "Sprawdź fakty o regeneracji mózgu i kondycji organizmu.",
                        "questions": [
                                {
                                        "promptPl": "Mózg podczas 8-godzinnego snu utrwala wiadomości zdobyte w ciągu dnia w szkole.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! W fazie snu głębokiego zachodzi konsolidacja śladów pamięciowych."
                                },
                                {
                                        "promptPl": "Napoje energetyzujące są zdrowym i polecanym zamiennikiem snu przed egzaminem.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Energetyki wywołują kołatanie serca i gwałtowny spadek energii."
                                },
                                {
                                        "promptPl": "Krótka rozgrzewka przed intensywnym biegiem chroni ścięgna przed zerwaniem.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Podniesienie temperatury mięśni drastycznie zmniejsza ryzyko urazu."
                                },
                                {
                                        "promptPl": "Prawidłowa postawa przy ławce nie ma żadnego wpływu na dotlenienie mózgu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyprostowane plecy ułatwiają pełną pracę płuc i dotlenienie komórek."
                                },
                                {
                                        "promptPl": "Zjedzenie pełnowartościowego śniadania poprawia wyniki na porannym sprawdzianie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Glukoza ze złożonych węglowodanów jest podstawowym paliwem dla neuronów."
                                },
                                {
                                        "promptPl": "Ćwiczenia fizyczne nasilają stres i uniemożliwiają relaks po szkole.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Ruch stymuluje wydzielanie endorfin, które redukują napięcie nerwowe."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wojownik]: Mądrość Porażki",
                        "subtitlePl": "Wyciąganie wniosków z niepowodzeń",
                        "descriptionPl": "Przekształć przegraną w fundament przyszłego zwycięstwa.",
                        "questions": [
                                {
                                        "promptPl": "Dobra ocena ze sprawdzianu poprawkowego cieszy podwójnie, bo wynika z ciężkiej pracy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pokonanie trudności buduje autentyczną pewność siebie."
                                },
                                {
                                        "promptPl": "Gdy dostaniesz słabą ocenę, najlepiej podrzeć sprawdzian i obrazić się na nauczyciela.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Dojrzały uczeń analizuje swoje błędy i pyta, co należy poprawić."
                                },
                                {
                                        "promptPl": "Wybitni sportowcy przegrywali setki razy, zanim zdobyli złoty medal olimpijski.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Porażka to cenna informacja zwrotna o elementach wymagających treningu."
                                },
                                {
                                        "promptPl": "Przyznanie się do błędu i chęć poprawy świadczą o słabości człowieka.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To dowód ogromnej odwagi i dojrzałości emocjonalnej."
                                },
                                {
                                        "promptPl": "Systematyczność przynosi w nauce trwalsze efekty niż jednorazowy zryw przed testem.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Regularne powtórki przenoszą wiedzę do pamięci długotrwałej."
                                },
                                {
                                        "promptPl": "Obwinianie kolegów z drużyny za straconą bramkę pomaga w wygraniu meczu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Krytyka niszczy morale zespołu – drużyna wygrywa i przegrywa razem."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wojownik]: Dyscyplina i Cele",
                        "subtitlePl": "Planowanie drogi do mistrzostwa",
                        "descriptionPl": "Odróżnij dyscyplinę od pustych obietnic.",
                        "questions": [
                                {
                                        "promptPl": "Rozbicie dużego materiału do powtórki na małe codzienne porcje ułatwia naukę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Metoda małych kroków zapobiega poczuciu przytłoczenia."
                                },
                                {
                                        "promptPl": "Plan dnia spisany na kartce ogranicza wolność i szkodzi kreatywności.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Harmonogram pozwala zaoszczędzić czas na pasje i odpoczynek."
                                },
                                {
                                        "promptPl": "Punktualne przychodzenie na lekcje i treningi to wyraz szacunku dla innych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Szanując czas nauczyciela i kolegów, okazujemy im kulturę osobistą."
                                },
                                {
                                        "promptPl": "Najlepsze wyniki osiąga się, ucząc się z włączonym telewizorem i telefonem w dłoni.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wielozadaniowość rozprasza uwagę i drastycznie obniża zapamiętywanie."
                                },
                                {
                                        "promptPl": "Nawyk pakowania plecaka wieczorem zmniejsza poranny stres przed wyjściem do szkoły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Spokojny poranek daje doskonałą energię na cały dzień."
                                },
                                {
                                        "promptPl": "Wystarczy mieć talent – praca i wysiłek nie mają żadnego znaczenia.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Sam talent bez ciężkiej pracy rzadko prowadzi do trwałego sukcesu."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wojownik]: Braterstwo i Szacunek",
                        "subtitlePl": "Wspólnota klasy i solidarność",
                        "descriptionPl": "Zrozum zasady budowania silnej grupy.",
                        "questions": [
                                {
                                        "promptPl": "Pomoc koledze, który opuścił lekcje z powodu choroby, to obowiązek dobrego kolegi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pożyczenie notatek lub wytłumaczenie tematu buduje zaufanie."
                                },
                                {
                                        "promptPl": "W zgranej klasie wolno żartować z czyjegoś wyglądu lub akcentu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyśmiewanie cech osobistych to forma przemocy rówieśniczej."
                                },
                                {
                                        "promptPl": "Wspólny cel potrafi zjednoczyć osoby o zupełnie różnych zainteresowaniach.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Praca nad wspólnym projektem uczy kompromisu i dialogu."
                                },
                                {
                                        "promptPl": "Lider grupy to osoba, która krzyczy najgłośniej i rozkazuje innym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Prawdziwy lider słucha innych, wspiera słabszych i daje dobry przykład."
                                },
                                {
                                        "promptPl": "Poczucie bezpieczeństwa w klasie sprzyja lepszym wynikom w nauce każdego ucznia.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! W przyjaznej atmosferze mózg uczy się znacznie szybciej."
                                },
                                {
                                        "promptPl": "Gdy ktoś w klasie jest samotny na przerwie, należy go ignorować.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wystarczy podejść i powiedzieć: «Cześć, chcesz z nami porozmawiać?»."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ],
        "thief": [
                {
                        "titlePl": "Myśli [Spryciarz]: Cyberhigiena",
                        "subtitlePl": "Ochrona danych i haseł w sieci",
                        "descriptionPl": "Wytrop fałsze na temat bezpieczeństwa cyfrowego.",
                        "questions": [
                                {
                                        "promptPl": "Hasło «123456» lub «haslo123» można złamać w ułamku sekundy za pomocą prostego programu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Silne hasło powinno zawierać litery, cyfry, znaki specjalne i mieć min. 12 znaków."
                                },
                                {
                                        "promptPl": "Podawanie loginu i hasła do swojego konta najlepszemu koledze to dowód przyjaźni.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Hasła są poufne – nikt poza właścicielem nie powinien mieć do nich dostępu."
                                },
                                {
                                        "promptPl": "Weryfikacja dwuetapowa (2FA) z kodem SMS znacznie utrudnia włamanie na konto.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Nawet przy wycieku hasła haker nie zaloguje się bez drugiego składnika."
                                },
                                {
                                        "promptPl": "Wszystkie darmowe sieci Wi-Fi w kawiarniach są całkowicie bezpieczne i szyfrowane.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Otwarte sieci publiczne są podatne na podsłuchiwanie przesyłanych danych."
                                },
                                {
                                        "promptPl": "Pobieranie plików i gier ze sprawdzonych, oficjalnych sklepów chroni przed wirusami.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Nieoficjalne strony często dołączają złośliwe oprogramowanie (malware)."
                                },
                                {
                                        "promptPl": "Kamerka w laptopie nigdy nie wymaga zasłaniania, bo nikt nie potrafi jej włączyć zdalnie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zaawansowane trojany potrafią aktywować kamerę bez wiedzy użytkownika."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Spryciarz]: Ochrona Wizerunku",
                        "subtitlePl": "Prawo do prywatności i RODO w szkole",
                        "descriptionPl": "Oceń legalność i etykę publikacji zdjęć w sieci.",
                        "questions": [
                                {
                                        "promptPl": "Publikacja zdjęcia kolegi z klasy w mediach społecznościowych wymaga jego wyraźnej zgody.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Każdy człowiek ma prawne prawo do ochrony swojego wizerunku."
                                },
                                {
                                        "promptPl": "Wrzucenie kompromitującego filmiku z lekcji na TikToka to nieszkodliwy żart.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To cyberbullying (przemoc w sieci), który może rodzić konsekwencje prawne."
                                },
                                {
                                        "promptPl": "Raz opublikowane zdjęcie w internecie może krążyć po sieci nawet po usunięciu z profilu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Ślad cyfrowy w internecie jest niezwykle trwały i trudny do zatarcia."
                                },
                                {
                                        "promptPl": "Podawanie adresu domowego i numeru telefonu na publicznym forum jest bezpieczne.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wrażliwe dane osobowe mogą zostać wykorzystane przez oszustów i złodziei."
                                },
                                {
                                        "promptPl": "Ustawienie prywatnego statusu profilu ogranicza dostęp obcych osób do Twoich postów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Widoczność tylko dla zaufanych znajomych drastycznie zwiększa bezpieczeństwo."
                                },
                                {
                                        "promptPl": "Osoba w internecie zawsze jest tym, za kogo się podaje w wiadomości prywatnej.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Anonimowość w sieci ułatwia podszywanie się pod kogoś innego (catfishing)."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Spryciarz]: Prawa Autorskie i Plagiat",
                        "subtitlePl": "Uczciwość intelektualna w wypracowaniach",
                        "descriptionPl": "Rozpoznaj zasady korzystania z cudzych tekstów.",
                        "questions": [
                                {
                                        "promptPl": "Skopiowanie wypracowania z internetu i podpisanie własnym nazwiskiem to plagiat.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Plagiat to kradzież własności intelektualnej i poważne naruszenie prawa."
                                },
                                {
                                        "promptPl": "Można zacytować fragment cudzej książki, o ile podamy autora i użyjemy cudzysłowu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Prawo cytatu pozwala na przytaczanie fragmentów ze wskazaniem źródła."
                                },
                                {
                                        "promptPl": "Wszystkie obrazy znalezione w Google Grafika można bez ograniczeń sprzedawać.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Większość grafik jest chroniona prawem autorskim twórców."
                                },
                                {
                                        "promptPl": "Podsumowanie przeczytanego artykułu własnymi słowami (parafraza) rozwija umiejętności pisarskie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Parafraza dowodzi zrozumienia tekstu i wzbogaca słownictwo."
                                },
                                {
                                        "promptPl": "Użycie sztucznej inteligencji do napisania całego eseju to uczciwa praca domowa.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Praca domowa ma rozwijać Twój mózg, a nie generować cudzy tekst."
                                },
                                {
                                        "promptPl": "Darmowe zasoby na licencjach Creative Commons można wykorzystywać zgodnie z ich warunkami.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Licencje CC precyzują, na jakich zasadach autor dzieli się dziełem."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Spryciarz]: Tropienie Fake Newsów",
                        "subtitlePl": "Weryfikacja informacji i krytyczne myślenie",
                        "descriptionPl": "Demaskuj kłamstwa i sensacyjne nagłówki.",
                        "questions": [
                                {
                                        "promptPl": "Sensacyjny nagłówek z wykrzyknikami (clickbait) często wyolbrzymia lub przekłamuje fakty.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Clickbaity mają na celu przyciągnięcie kliknięć i wyświetlenie reklam."
                                },
                                {
                                        "promptPl": "Jeśli jakaś informacja ma tysiące udostępnień, to z pewnością jest w 100% prawdziwa.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Fałszywe wiadomości i plotki rozchodzą się w sieci szybciej niż prawda."
                                },
                                {
                                        "promptPl": "Sprawdzenie daty publikacji artykułu pozwala uniknąć powielania nieaktualnych wiadomości.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Stare informacje sprzed lat bywają podawane jako rzekome nowości."
                                },
                                {
                                        "promptPl": "Zdjęcie w artykule internetowym jest niepodważalnym dowodem, bo obrazów nie da się przerobić.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Programy graficzne i generatory AI potrafią stworzyć fotorealistyczne fałszywki."
                                },
                                {
                                        "promptPl": "Poważne portale informacyjne podają nazwisko autora i źródła danych statystycznych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wiarygodne dziennikarstwo opiera się na transparentności i faktach."
                                },
                                {
                                        "promptPl": "Krytyczne myślenie oznacza negowanie wszystkiego i niewiarę w żadną naukę.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Krytyczne myślenie to badanie dowodów, logiki i wiarygodności źródeł."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Spryciarz]: Metodyka Nauki (Spryt Ucznia)",
                        "subtitlePl": "Techniki efektywnego zapamiętywania",
                        "descriptionPl": "Ucz się mądrzej, a nie dłużej.",
                        "questions": [
                                {
                                        "promptPl": "Metoda Pomodoro polega na 25 minutach pełnego skupienia i 5 minutach krótkiej przerwy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Krótkie interwały zapobiegają zmęczeniu i utrzymują wysoką koncentrację."
                                },
                                {
                                        "promptPl": "Kilkukrotne bierne czytanie tego samego rozdziału to najskuteczniejsza metoda nauki.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Bierne czytanie daje złudzenie wiedzy – skuteczniejsze jest aktywne odpytywanie się."
                                },
                                {
                                        "promptPl": "Tworzenie fiszek z trudnymi słówkami przyspiesza naukę języka obcego i pojęć.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Fiszki wymuszają aktywny wysiłek przypominania informacji z pamięci."
                                },
                                {
                                        "promptPl": "Tłumaczenie trudnego zagadnienia komuś innemu pozwala samemu lepiej je zrozumieć.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To tak zwana technika Feynmana – prosty język obnaża luki w wiedzy."
                                },
                                {
                                        "promptPl": "Muzyka z głośnymi polskimi słowami w tle ułatwia zapamiętywanie lektur szkolnych.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Słowa piosenki konkurują w mózgu z tekstem czytanym, utrudniając skupienie."
                                },
                                {
                                        "promptPl": "Rysowanie map myśli (mind maps) angażuje wyobraźnię przestrzenną i ułatwia syntezę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Kolory, strzałki i słowa klucze tworzą trwałe skojarzenia logiczne."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Spryciarz]: Asertywność i Granice",
                        "subtitlePl": "Sztuka mówienia NIE bez poczucia winy",
                        "descriptionPl": "Broń swoich praw i szanuj granice innych.",
                        "questions": [
                                {
                                        "promptPl": "Asertywność to umiejętność odmowy w sposób spokojny, zdecydowany i kulturalny.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Asertywność różni się zarówno od uległości, jak i od agresji."
                                },
                                {
                                        "promptPl": "Gdy ktoś namawia Cię do zrobienia czegoś niebezpiecznego, musisz się zgodzić, by nie stracić kolegów.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Prawdziwy przyjaciel szanuje Twoje bezpieczeństwo i decyzję «nie chcę»."
                                },
                                {
                                        "promptPl": "Masz prawo zmienić zdanie, gdy dowiesz się nowych faktów o sytuacji.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Zmiana decyzji pod wpływem racjonalnych argumentów to cecha dojrzałości."
                                },
                                {
                                        "promptPl": "Wyrażanie własnego zdania w dyskusji klasowej jest niegrzeczne i powinno być zakazane.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Kulturalna wymiana poglądów to podstawa szkolnej debaty i wolności słowa."
                                },
                                {
                                        "promptPl": "Komunikat «JA» (np. «Czuję się przytłoczony, gdy mówisz tym tonem») ogranicza kłótnie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Mówienie o własnych emocjach zamiast oskarżania zapobiega eskalacji złości."
                                },
                                {
                                        "promptPl": "Ustępowanie we wszystkim dla świętego spokoju prowadzi do wewnętrznej satysfakcji.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Tłumienie własnych potrzeb rodzi frustrację i obniża poczucie własnej wartości."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ],
        "robot": [
                {
                        "titlePl": "Myśli [Robot]: Logika Składniowa i Przecinki",
                        "subtitlePl": "Algorytm interpunkcji w zdaniach złożonych",
                        "descriptionPl": "Zweryfikuj reguły składni języka polskiego.",
                        "questions": [
                                {
                                        "promptPl": "Przed spójnikami podrzędnymi: «ponieważ», «że», «który», «gdyż» ZAWSZE stawiamy przecinek.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wprowadzają one zdanie podrzędne i wymagają oddzielenia przecinkiem."
                                },
                                {
                                        "promptPl": "Przed pojedynczym spójnikiem łącznym «i» oraz «oraz» standardowo stawiamy przecinek.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym «i» nie stawiamy przecinka, chyba że spójnik się powtarza."
                                },
                                {
                                        "promptPl": "Przed spójnikami przeciwstawnymi: «ale», «lecz», «jednak», «natomiast» ZAWSZE stawiamy przecinek.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Zdania współrzędne przeciwstawne wymagają przecinka przed spójnikiem."
                                },
                                {
                                        "promptPl": "W zdaniu pojedynczym przecinek stawia się losowo w miejscach, gdzie czytający bierze oddech.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Interpunkcja w polszczyźnie wynika z reguł składniowych, a nie z pojemności płuc."
                                },
                                {
                                        "promptPl": "Wołacz występujący w środku lub na początku wypowiedzi zawsze wydzielamy przecinkami.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np.: «Janku, podaj mi książkę» lub «Chodź tu natychmiast, Piotrze!». "
                                },
                                {
                                        "promptPl": "Kropka na końcu zdania oznajmującego jest znakiem całkowicie opcjonalnym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Kropka zamyka wypowiedzenie i jest bezwzględnie wymagana."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Robot]: Debugowanie Pleonazmów",
                        "subtitlePl": "Precyzja słów i eliminacja masła maślanego",
                        "descriptionPl": "Wykrywaj nadmiarowe i sprzeczne kody językowe.",
                        "questions": [
                                {
                                        "promptPl": "Wyrażenie «fakt autentyczny» jest błędem logicznym (pleonazmem), bo fakt z definicji jest prawdziwy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wystarczy użyć samego słowa «fakt»."
                                },
                                {
                                        "promptPl": "Zwrot «cofać się do tyłu» jest w pełni poprawną i elegancką konstrukcją literacką.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Cofać można się wyłącznie do tyłu – to klasyczne masło maślane."
                                },
                                {
                                        "promptPl": "Sformułowanie «w miesiącu maju» zawiera zbędne powtórzenie informacji.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Maj to nazwa miesiąca – poprawna forma to po prostu «w maju»."
                                },
                                {
                                        "promptPl": "Wyrażenie «spadać w dół» jest niezbędne, bo można spadać również do góry.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Spadanie zawsze odbywa się pod wpływem grawitacji w dół."
                                },
                                {
                                        "promptPl": "Używanie precyzyjnych terminów zmniejsza ryzyko nieporozumień w komunikacji.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Jednoznaczne określenia przekazują intencję nadawcy bez zakłóceń."
                                },
                                {
                                        "promptPl": "Zwrot «darmowy prezent» jest bezbłędny, ponieważ prezenty bywają odpłatne.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Prezent z definicji jest podarunkiem bezpłatnym."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Robot]: Architektura Wypracowania",
                        "subtitlePl": "Trójdzielna struktura tekstu CKE",
                        "descriptionPl": "Sprawdź wymogi formalne arkusza egzaminacyjnego.",
                        "questions": [
                                {
                                        "promptPl": "Prawidłowo skomponowane wypracowanie składa się z trzech części: wstępu, rozwinięcia i zakończenia.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To żelazna zasada kompozycji każdego tekstu argumentacyjnego i narracyjnego."
                                },
                                {
                                        "promptPl": "Każda nowa myśl i kolejny argument w rozprawce powinny zaczynać się od nowego akapitu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Akapity porządkują strukturę wywodu i ułatwiają odbiór tekstu egzaminatorowi."
                                },
                                {
                                        "promptPl": "W zakończeniu rozprawki należy wprowadzać zupełnie nowe, sprzeczne z tezą argumenty.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zakończenie służy podsumowaniu wywodu i syntezie dotychczasowych wniosków."
                                },
                                {
                                        "promptPl": "Teza to zdanie twierdzące, w którym autor jasno wyraża swoje stanowisko w danym temacie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wokół tezy buduje się cały ciąg logiczny argumentów i przykładów."
                                },
                                {
                                        "promptPl": "Długość wypracowania na egzaminie ósmoklasisty nie ma żadnego limitu minimalnego słów.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wymóg CKE to zazwyczaj minimum 200 słów – krótsza praca traci punkty."
                                },
                                {
                                        "promptPl": "Przywołanie przykładu z lektury obowiązkowej wymaga podania tytułu i autora utworu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Precyzyjna identyfikacja dzieła świadczy o rzetelności merytorycznej."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Robot]: Rejestr Fakt a Opinia",
                        "subtitlePl": "Oddzielanie prawdy obiektywnej od emocji",
                        "descriptionPl": "Rozróżniaj dane empiryczne od sądów wartościujących.",
                        "questions": [
                                {
                                        "promptPl": "Zdanie: «Warszawa jest stolicą Polski» to fakt sprawdzalny i obiektywny.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Fakt można jednoznacznie zweryfikować w źródłach geograficznych i prawnych."
                                },
                                {
                                        "promptPl": "Zdanie: «Książka Mały Książę to najnudniejsza lektura na świecie» to niepodważalny fakt.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To subiektywna opinia – każdy czytelnik ma prawo do własnych odczuć."
                                },
                                {
                                        "promptPl": "Fakty stanowią podstawę rzetelnej argumentacji naukowej i dziennikarskiej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Prawdziwe argumenty opierają się na weryfikowalnych faktach."
                                },
                                {
                                        "promptPl": "Opinia staje się faktem, jeśli wypowie ją osoba popularna w internecie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Popularność autora nie zamienia subiektywnego sądu w fakt naukowy."
                                },
                                {
                                        "promptPl": "Zwroty: «moim zdaniem», «uważam, że», «według mnie» sygnalizują wyrażanie opinii.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Są to metatekstowe wskaźniki subiektywności wypowiedzi."
                                },
                                {
                                        "promptPl": "W rozprawce naukowej wolno zmyślać statystyki, byle pasowały do założonej tezy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Fałszowanie danych to manipulacja i kardynalny błąd merytoryczny."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Robot]: Higiena Cyfrowa i Chłodzenie",
                        "subtitlePl": "Zapobieganie przeciążeniu pamięci operacyjnej",
                        "descriptionPl": "Zadbaj o higienę umysłu w świecie algorytmów.",
                        "questions": [
                                {
                                        "promptPl": "Niebieskie światło ekranów smartfonów przed snem blokuje wydzielanie melatoniny.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Ekrany zaburzają zegar biologiczny i utrudniają głęboki, regenerujący sen."
                                },
                                {
                                        "promptPl": "Człowiek potrafi z taką samą uwagą pisać wypracowanie i grać w grę na telefonie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Mózg przeskakuje między zadaniami (task-switching), co drastycznie obniża jakość."
                                },
                                {
                                        "promptPl": "Odkładanie telefonu na czas nauki do innego pokoju realnie poprawia skupienie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Sam widok telefonu leżącego na biurku podświadomie rozprasza uwagę."
                                },
                                {
                                        "promptPl": "Spędzanie 10 godzin dziennie przed monitorem bez przerw jest bezpieczne dla wzroku.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Prowadzi do zespołu suchego oka, krótkowzroczności i chronicznego zmęczenia."
                                },
                                {
                                        "promptPl": "Reguła 20-20-20 (co 20 minut spójrz na 20 sekund na obiekt oddalony o 6 metrów) relaksuje oczy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Rozluźnia to mięśnie gałki ocznej i zapobiega skurczom akomodacji."
                                },
                                {
                                        "promptPl": "Gry wideo mogą całkowicie zastąpić ruch na świeżym powietrzu i kontakty z rówieśnikami.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Żadna symulacja nie zastąpi realnej aktywności fizycznej i bliskości drugiego człowieka."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Robot]: Poprawność Ortograficzna",
                        "subtitlePl": "Determinizm reguł Ó, RZ, CH i H",
                        "descriptionPl": "Zweryfikuj reguły wymiany liter w języku polskim.",
                        "questions": [
                                {
                                        "promptPl": "Piszemy «ó», gdy wymienia się w wyrazach pokrewnych na: o, e lub a (np. lód – lodu, wiózł – wieźć).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To podstawowa reguła wymiany samogłoski w polskiej ortografii."
                                },
                                {
                                        "promptPl": "Piszemy «rz», gdy wymienia się w formach pokrewnych na «r» (np. morze – morski).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Fonetyczna wymiana rz na r jest historycznym dowodem pisowni."
                                },
                                {
                                        "promptPl": "Po spółgłoskach: p, b, t, d, k, g, ch, j, w zawsze piszemy «ż» zamiast «rz».",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Właśnie po tych spółgłoskach tradycyjnie piszemy «rz» (np. brzeg, drzewo, krzak)!"
                                },
                                {
                                        "promptPl": "W zakończeniach rzeczowników «-ów», «-ówka» piszemy zasadniczo «ó» (z wyjątkiem: skuwka, zasuwka).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! «-ówka» pisze się przez ó, z kilkoma utrwalonymi wyjątkami."
                                },
                                {
                                        "promptPl": "Piszemy «ch», gdy wymienia się w formach pokrewnych na «sz» (np. ucho – uszy, cicho – cisza).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana ch:sz to żelazna reguła polskiego słowotwórstwa."
                                },
                                {
                                        "promptPl": "Wyraz «bohater» piszemy przez «ch».",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! «Bohater» piszemy wyłącznie przez samo «h»!"
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ],
        "inventor": [
                {
                        "titlePl": "Myśli [Wynalazca]: Metoda Naukowa",
                        "subtitlePl": "Od obserwacji do weryfikacji hipotezy",
                        "descriptionPl": "Zrozum, jak powstają wielkie odkrycia i wynalazki.",
                        "questions": [
                                {
                                        "promptPl": "Hipoteza naukowa to przypuszczenie, które wymaga weryfikacji za pomocą eksperymentu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dopiero potwierdzone hipotezy stają się fundamentem teorii naukowej."
                                },
                                {
                                        "promptPl": "Wynalazek powstaje zawsze przypadkowo bez żadnej wcześniejszej wiedzy i pracy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Sukces wynalazcy to efekt wiedzy, wnikliwej obserwacji i setek prób."
                                },
                                {
                                        "promptPl": "Prowadzenie rzetelnych notatek laboratoryjnych pozwala odtworzyć przebieg doświadczenia.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Powtarzalność wyników to naczelna zasada rzetelnej nauki."
                                },
                                {
                                        "promptPl": "Gdy eksperyment przeczy hipotezie, naukowiec powinien sfałszować wyniki badania.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Odrzucenie błędnej hipotezy to krok naprzód – nauka szuka prawdy."
                                },
                                {
                                        "promptPl": "Ciekawość świata i zadawanie pytań «jak?» oraz «dlaczego?» napędzają postęp cywilizacji.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dociekliwość to najważniejsza cecha każdego odkrywcy."
                                },
                                {
                                        "promptPl": "Wszystko na świecie zostało już odkryte i nie da się wymyślić nic nowego.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Każde nowe odkrycie otwiera dziesiątki nieznanych dotąd obszarów badań."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wynalazca]: Wartość Pomyłki w Nauce",
                        "subtitlePl": "Thomas Edison i droga przez tysiąc prób",
                        "descriptionPl": "Przekonaj się, dlaczego błędy są nieodłączną częścią innowacji.",
                        "questions": [
                                {
                                        "promptPl": "Thomas Edison mawiał, że nie poniósł porażki, lecz odkrył tysiąc sposobów, które nie działają.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wytrwałość i wyciąganie wniosków doprowadziły go do stworzenia żarówki."
                                },
                                {
                                        "promptPl": "Człowiek, który nigdy nie popełnił błędu, to człowiek, który nigdy nie próbował niczego nowego.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Słowa Alberta Einsteina przypominają, że odwaga wymaga ryzyka potknięcia."
                                },
                                {
                                        "promptPl": "Jeśli pierwsze rozwiązanie zadania z matematyki jest błędne, należy natychmiast się poddać.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba sprawdzić obliczenia krok po kroku i poszukać innej metody."
                                },
                                {
                                        "promptPl": "Aleksander Fleming odkrył penicylinę dzięki uważnej obserwacji zanieczyszczonej szalki Petriego.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przypadek połączony z przygotowanym umysłem uratował miliony ludzkich istnień."
                                },
                                {
                                        "promptPl": "Współpraca w zespole inżynierów spowalnia powstawanie innowacyjnych projektów.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Różne kompetencje i burza mózgów dają znacznie lepsze rezultaty."
                                },
                                {
                                        "promptPl": "Krytyka merytoryczna ze strony kolegi pomaga udoskonalić prototyp wynalazku.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Spojrzenie z zewnątrz pozwala dostrzec wady konstrukcyjne."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wynalazca]: Lektury o Marzycielach i Nauce",
                        "subtitlePl": "Wokulski, Geist i motyw wiedzy w literaturze",
                        "descriptionPl": "Połącz wiedzę literacką z pasją inżynierii.",
                        "questions": [
                                {
                                        "promptPl": "Stanisław Wokulski w «Lalce» Bolesława Prusa w młodości marzył o badaniach naukowych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Fascynował się fizyką, skonstruował model maszyny i finansował badania prof. Geista."
                                },
                                {
                                        "promptPl": "Profesor Geist w Paryżu pracował nad wynalezieniem metalu lżejszego od powietrza.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Geist był genialnym chemikiem marzącym o rewolucji technicznej."
                                },
                                {
                                        "promptPl": "W pozytywizmie kult pracy organicznej i nauki był uważany za szkodliwy dla narodu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Pozytywiści wierzyli, że edukacja i rozwój gospodarczy to jedyna droga ocalenia Polski."
                                },
                                {
                                        "promptPl": "Stanisław Lem w swoich powieściach science fiction przewidział m.in. e-booki i internet.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Genialny polski pisarz opisał «optony» (czytniki) w «Powrocie z gwiazd» w 1961 roku!"
                                },
                                {
                                        "promptPl": "Mały Książę na swojej planecie B-612 zajmował się czyszczeniem wulkanów i pielęgnacją róży.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Codzienna, sumienna praca była dla niego wyrazem odpowiedzialności za swój świat."
                                },
                                {
                                        "promptPl": "W literaturze fantastycznonaukowej technologia jest zawsze przedstawiana wyłącznie jako zło.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Często ukazuje nadzieję na leczenie chorób i odkrywanie tajemnic kosmosu."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wynalazca]: Neologizmy i Słowotwórstwo",
                        "subtitlePl": "Jak język polski tworzy nazwy nowych rzeczy",
                        "descriptionPl": "Zbadaj mechanikę powstawania nowych wyrazów.",
                        "questions": [
                                {
                                        "promptPl": "Neologizm to nowy wyraz utworzony w języku w celu nazwania nieznanego wcześniej zjawiska.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np. «smartfon», «dron», «lajkować» czy literackie słowa Bolesława Leśmiana."
                                },
                                {
                                        "promptPl": "Wyraz podstawowy to słowo, od którego za pomocą formantu tworzymy wyraz pochodny.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np. od słowa «dom» za pomocą formantu «-ek» tworzymy wyraz «domek»."
                                },
                                {
                                        "promptPl": "W wyrazie «nauczycielka» formantem jest cząstka «nauka».",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! «Nauka» to rdzeń/podstawa, a formantem żeńskim jest przyrostek «-ka»."
                                },
                                {
                                        "promptPl": "Złożenia i zrosty to wyrazy utworzone z co najmniej dwóch podstaw słowotwórczych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np. «samolot» (samo + lot), «gazomierz», «Wielkanoc»."
                                },
                                {
                                        "promptPl": "Wszystkie zapożyczenia z języka angielskiego należy natychmiast usunąć ze słowników.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Język żyje i wzbogaca się, choć warto dbać o rodzime polskie odpowiedniki."
                                },
                                {
                                        "promptPl": "Rodzina wyrazów to grupa słów posiadających ten sam wspólny rdzeń znaczeniowy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np. mur, murarz, murować, podmurówka mają wspólny rdzeń «mur»."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wynalazca]: Ekologia i Ochrona Planety",
                        "subtitlePl": "Odpowiedzialność technologii za biosferę",
                        "descriptionPl": "Rozpoznaj zasady zrównoważonego rozwoju.",
                        "questions": [
                                {
                                        "promptPl": "Recykling jednej tony makulatury pozwala ocalić przed wycinką kilkanaście drzew.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odzysk włókien celulozowych realnie chroni ekosystemy leśne."
                                },
                                {
                                        "promptPl": "Plastikowe butelki rozkładają się w glebie w ciągu zaledwie dwóch tygodni.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Tworzywa sztuczne PET rozkładają się w środowisku od 400 do 1000 lat!"
                                },
                                {
                                        "promptPl": "Gaszenie zbędnego oświetlenia i odłączanie ładowarek zmniejsza emisję gazów cieplarnianych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Oszczędność prądu zmniejsza spalanie paliw kopalnych w elektrowniach."
                                },
                                {
                                        "promptPl": "Wyrzucanie zużytych baterii do zwykłego kosza na śmieci jest całkowicie bezpieczne.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Metale ciężkie (ołów, kadm, rtęć) skażają wody gruntowe – baterie oddajemy do pojemników eko."
                                },
                                {
                                        "promptPl": "Odnawialne źródła energii (słońce, wiatr, woda) są kluczem do czystej przyszłości Ziemi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! OZE nie emitują smogu i są niewyczerpywalne w skali ludzkiej."
                                },
                                {
                                        "promptPl": "Woda słodka zdatna do picia stanowi ponad 90% wszystkich zasobów wody na Ziemi.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Woda słodka to zaledwie ok. 2,5% zasobów, dlatego należy ją bezwzględnie oszczędzać!"
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wynalazca]: Bezpieczeństwo w Pracowni",
                        "subtitlePl": "Zasady BHP podczas eksperymentów chemicznych i fizycznych",
                        "descriptionPl": "Zadbaj o bezpieczeństwo podczas odkryć.",
                        "questions": [
                                {
                                        "promptPl": "Okulary ochronne i rękawice to obowiązkowe wyposażenie przy pracy z odczynnikami chemicznymi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Chronią wzrok i skórę przed przypadkowym pryśnięciem kwasu lub zasady."
                                },
                                {
                                        "promptPl": "W pracowni chemicznej wolno pić napoje i jeść kanapki przy stole laboratoryjnym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Spożywanie posiłków grozi śmiertelnym zatruciem toksycznymi substancjami."
                                },
                                {
                                        "promptPl": "Zasada mówi: «Pamiętaj chemiku młody, wlewaj zawsze kwas do wody!».",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wlanie wody do stężonego kwasu powoduje gwałtowne wrzenie i groźne pryskanie cieczy."
                                },
                                {
                                        "promptPl": "Zapach nieznanej substancji sprawdza się przez głębokie wciągnięcie powietrza nosem prosto z probówki.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Opary należy ostrożnie nawiewać dłonią w stronę nosa z bezpiecznej odległości."
                                },
                                {
                                        "promptPl": "Przed włączeniem obwodu elektrycznego należy upewnić się, że nie ma w nim zwarcia.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Zwarcie może doprowadzić do stopienia izolacji, pożaru lub porażenia prądem."
                                },
                                {
                                        "promptPl": "Rozbitą szklaną zlewkę zbiera się gołymi dłońmi bez zmiotki i szufelki.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Szkło laboratoryjne kaleczy głęboko – używa się szczotki i zabezpieczonego pojemnika."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ],
        "witch": [
                {
                        "titlePl": "Myśli [Wiedźma]: Moralność w «Dziadach»",
                        "subtitlePl": "Prawa moralne i przesłania Adama Mickiewicza",
                        "descriptionPl": "Zgłąb tajemnice kaplicy cmentarnej i kodeks etyczny.",
                        "questions": [
                                {
                                        "promptPl": "Duchy Józia i Rózi nie mogły wejść do nieba, ponieważ ich życie na ziemi było wolne od wszelkiej goryczy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Mickiewicz naucza: «Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie»."
                                },
                                {
                                        "promptPl": "Widmo Złego Pana było dręczone przez ptaki nocne za swoje dawne bezduszne okrucieństwo wobec poddanych.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Kruk i Sowa to dawni głodujący poddani, którym dziedzic odmówił litości."
                                },
                                {
                                        "promptPl": "Pasterka Zosia po śmierci natychmiast doznała szczęścia, bo nigdy nikogo nie kochała.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zosia została ukarana za igranie z uczuciami innych i życie z dala od realnego świata."
                                },
                                {
                                        "promptPl": "Obrzęd Dziadów wywodzi się z dawnych pogańskich wierzeń ludowych Białorusi i Litwy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Mickiewicz oparł dramat na autentycznym ludowym zwyczaju wywoływania dusz zmarłych."
                                },
                                {
                                        "promptPl": "Guślarz w dramacie przepędza duchy za pomocą broni palnej i krzyku.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Używa zaklęć («A kysz!»), ziół (gorczyca, kądziel) i ofiar z jedzenia."
                                },
                                {
                                        "promptPl": "Przesłanie moralne «Dziadów» mówi, że każdy czyn człowieka pociąga za sobą odpowiedzialność.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Sprawiedliwość moralna jest nieubłagana – dobro zostaje nagrodzone, a zło ukarane."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wiedźma]: Środki Stylistyczne i Metafory",
                        "subtitlePl": "Magia poetyckiego języka obrazów",
                        "descriptionPl": "Rozpoznaj narzędzia wyobraźni i poezji.",
                        "questions": [
                                {
                                        "promptPl": "Metafora (przenośnia) nadaje wyrazom nowe, niedosłowne znaczenie (np. «morze gwiazd»).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Łączy odległe pojęcia, tworząc świeży, poetycki obraz świata."
                                },
                                {
                                        "promptPl": "Personifikacja (uosobienie) polega na przypisywaniu cech ludzkich roślinom, zwierzętom lub przedmiotom.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Np. «wiatr płacze w gałęziach», «drzewa szepczą tajemnice»."
                                },
                                {
                                        "promptPl": "Epitet to wyraz określający czasownik i odpowiadający na pytanie: jak? kiedy?",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Epitet to poetyckie określenie rzeczownika (najczęściej przymiotnik, np. «złote słońce»)."
                                },
                                {
                                        "promptPl": "Onomatopeja to wyraz naśladujący dźwięki naturalne (np. «szumieć», «kukać», «chrzęścić»).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wyrazy dźwiękonaśladowcze budują akustykę i nastrój utworu."
                                },
                                {
                                        "promptPl": "Porównanie zawsze musi zawierać spójnik: «jak», «jakby», «na kształt» lub «niby».",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Zestawia dwa zjawiska na podstawie cechy wspólnej za pomocą spójnika."
                                },
                                {
                                        "promptPl": "Apostrofa to bezpośredni, uroczysty zwrot do osoby, bóstwa lub uosobionego pojęcia.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Klasyczny przykład: «Litwo! Ojczyzno moja!» w Panu Tadeuszu."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wiedźma]: Tragedia «Balladyny»",
                        "subtitlePl": "Motyw władzy, winy i kary w dramacie Słowackiego",
                        "descriptionPl": "Oceń postępowanie bohaterów lektury CKE.",
                        "questions": [
                                {
                                        "promptPl": "Alina i Balladyna zbierały maliny w lesie, aby zdobyć rękę hrabiego Kirkora.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Kto pierwszy przyniósł pełen dzban owoców, miał zostać panią na zamku."
                                },
                                {
                                        "promptPl": "Balladyna kochała swoją matkę i z dumą wprowadziła ją na salony królewskie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wstydziła się prostego pochodzenia, wyparła się matki i wygnała ją w czasie burzy."
                                },
                                {
                                        "promptPl": "Krwawa plama na czole Balladyny zniknęła po przemyciu jej czystą wodą z jeziora.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Plama była niezmywalnym znamieniem zbrodni, którego bohaterka nie mogła ukryć."
                                },
                                {
                                        "promptPl": "Goplana, nimfa z Gopła, przez swoją miłość do Grabca nieświadomie uruchomiła łańcuch tragicznych zdarzeń.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Ingerencja świata baśniowego w ludzkie losy doprowadziła do tragedii."
                                },
                                {
                                        "promptPl": "Finałowy wyrok sądu królewskiego na Balladynie został wykonany przez uderzenie pioruna.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Balladyna sama wydała na siebie trzykrotny wyrok śmierci, a natura wymierzyła karę."
                                },
                                {
                                        "promptPl": "Balladyna czuła się szczęśliwa i bezpieczna po objęciu tronu w Gnieźnie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Żyła w ciągłym strachu, paranoi i mordowała kolejnych świadków swoich zbrodni."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wiedźma]: Empatia i Czytanie Ludzi",
                        "subtitlePl": "Uważność na niewypowiedziane słowa i gesty",
                        "descriptionPl": "Zrozum emocje swoje i drugiego człowieka.",
                        "questions": [
                                {
                                        "promptPl": "Empatia to zdolność do współodczuwania i zrozumienia perspektywy innej osoby.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pozwala zrozumieć, dlaczego ktoś czuje smutek, lęk lub radość."
                                },
                                {
                                        "promptPl": "Gdy ktoś płacze z bezsilności, najlepszym tekstem jest powiedzenie: «Weź nie przesadzaj!».",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Unieważnianie emocji pogłębia cierpienie – lepiej zapytać: «Czy mogę ci jakoś pomóc?»."
                                },
                                {
                                        "promptPl": "Mowa ciała (skulone ramiona, unikanie wzroku) może zdradzać smutek lub lęk mimo słów «wszystko ok».",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Komunikacja niewerbalna często przekazuje więcej prawdy niż słowa."
                                },
                                {
                                        "promptPl": "Człowiek wrażliwy jest słaby i nie poradzi sobie w dorosłym życiu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wysoka wrażliwość sprzyja empatii, kreatywności i głębokim relacjom."
                                },
                                {
                                        "promptPl": "Uważne słuchanie bez przerywania i dawania natychmiastowych rad jest wspaniałym darem dla przyjaciela.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Czasami człowiek potrzebuje po prostu zostać wysłuchany i zrozumiany."
                                },
                                {
                                        "promptPl": "Wszystkie trudne emocje (złość, smutek, zazdrość) należy za wszelką cenę udawać, że nie istnieją.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Emocje należy nazwać, zaakceptować i nauczyć się bezpiecznie je rozładowywać."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wiedźma]: Magia «Małego Księcia»",
                        "subtitlePl": "Niewidoczne dla oczu prawdy Antoine’a de Saint-Exupéry’ego",
                        "descriptionPl": "Odkryj najpiękniejsze prawdy o przyjaźni i miłości.",
                        "questions": [
                                {
                                        "promptPl": "Lis nauczył Małego Księcia, że «dobrze widzi się tylko sercem, najważniejsze jest niewidoczne dla oczu».",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To kluczowa prawda filozoficzna tego ponadczasowego utworu."
                                },
                                {
                                        "promptPl": "«Oswoić» w języku lisa oznaczało stworzyć więzy przyjaźni i stać się dla siebie kimś jedynym na świecie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Prawdziwe relacje wymagają czasu, cierpliwości i wzajemnej troski."
                                },
                                {
                                        "promptPl": "Mały Książę uważał dorosłych z odwiedzanych planet (Bankiera, Króla, Pijaka) za wzory mądrości.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Dostrzegał ich absurdalną pogoń za władzą, pieniędzmi i pozorami."
                                },
                                {
                                        "promptPl": "Róża na planecie B-612 była dla Małego Księcia wyjątkowa, ponieważ poświęcił jej swój czas i troskę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! «Stajesz się na zawsze odpowiedzialny za to, co oswoiłeś»."
                                },
                                {
                                        "promptPl": "Rysunek węża boa trawiącego słonia dorośli brali za zwykły kapelusz.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pokazuje to zanik wyobraźni i schematyczne myślenie dorosłych."
                                },
                                {
                                        "promptPl": "Przyjaźń według utworu jest czymś, co można łatwo kupić w każdym sklepie z zabawkami.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! «Ludzie kupują gotowe rzeczy w sklepach, ale ponieważ nie ma sklepów z przyjaciółmi, nie mają przyjaciół»."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Wiedźma]: Symbolika w «Weselu»",
                        "subtitlePl": "Kluczowe symbole dramatu Stanisława Wyspiańskiego",
                        "descriptionPl": "Zinterpretuj narodowe symbole i przestrogi dramaturga.",
                        "questions": [
                                {
                                        "promptPl": "Złoty Róg podarowany przez Wernyhorę symbolizował hasło do narodowego powstania i walki o wolność.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dźwięk rogu miał obudzić uśpione serca Polaków i zjednoczyć naród."
                                },
                                {
                                        "promptPl": "Czapka z pawich piór symbolizowała próżność, przywiązanie do bogactwa i egoizm.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Jasiek zgubił Złoty Róg, schylając się po błahostkę: «Miałeś, chamie, złoty róg...»."
                                },
                                {
                                        "promptPl": "Chocholi taniec na koniec dramatu symbolizuje uśpienie narodu i niemożność czynu niepodległościowego.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Weselnicy poruszają się jak w letargu pod dyktando słomianego Chochoła."
                                },
                                {
                                        "promptPl": "Stańczyk w dramacie wręcza Dziennikarzowi Kaduceusz – symbol usypiania sumienia narodu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Kpi z bierności konserwatywnej inteligencji krakowskiej."
                                },
                                {
                                        "promptPl": "Akcja «Wesela» rozgrywa się w autentycznej podkrakowskiej wsi Bronowice w chacie Włodzimierza Tetmajera.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dramat powstał po prawdziwym ślubie poety Lucjana Rydla z wieśniaczką Jadwigą Mikołajczykówną."
                                },
                                {
                                        "promptPl": "Wyspiański w dramacie wychwalał polską szlachtę i chłopów za idealną, bezkonfliktową współpracę.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Obnażył głębokie podziały, wzajemną nieufność i pustą fascynację chłopomanią."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ],
        "jester": [
                {
                        "titlePl": "Myśli [Błazen]: Etyka Śmiechu i Żartu",
                        "subtitlePl": "Humor łączący rówieśników a złośliwy hejt",
                        "descriptionPl": "Zrozum granicę między dobrym żartem a przemocą psychiczną.",
                        "questions": [
                                {
                                        "promptPl": "Prawdziwy humor bawi wszystkich uczestników sytuacji, łącznie z osobą, o której jest dowcip.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Jeśli ktoś czuje się upokorzony i płacze, to nie jest żart, lecz znęcanie się."
                                },
                                {
                                        "promptPl": "Gdy ktoś mówi po chamskim wyzwisku: «Ej, no co ty, to był tylko żart!», zachowuje się w porządku.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To manipulacja mająca na celu uniknięcie odpowiedzialności za raniące słowa."
                                },
                                {
                                        "promptPl": "Śmiech obniża poziom kortyzolu (hormonu stresu) i wzmacnia odporność organizmu.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Śmiech ma udowodnione naukowo właściwości prozdrowotne i rozluźniające."
                                },
                                {
                                        "promptPl": "Wyśmiewanie czyjejś biedy, niepełnosprawności lub pochodzenia to przejaw błyskotliwego dowcipu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To podłość i dyskryminacja świadcząca o braku kultury i empatii."
                                },
                                {
                                        "promptPl": "Dystans do samego siebie i umiejętność obśmiania własnej drobnej wpadki rozbraja napięcie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Osoba potrafiąca śmiać się z siebie zyskuje ogromną sympatię otoczenia."
                                },
                                {
                                        "promptPl": "W dobrej komedii najważniejsze jest rzucanie wulgaryzmami co drugie słowo.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Prawdziwa sztuka humoru opiera się na błyskotliwym dowcipie językowym i sytuacyjnym."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Błazen]: Komizm w «Zemście» Fredry",
                        "subtitlePl": "Komizm słowny, postaci i sytuacji w komedii wszech czasów",
                        "descriptionPl": "Zweryfikuj wiedzę o arcydziele Aleksandra Fredry.",
                        "questions": [
                                {
                                        "promptPl": "Cześnik Raptusiewicz i Rejent Milczek są skłóceni o mur graniczny dzielący ich zamek.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Spór o naprawę muru to główna oś intrygi komediowej."
                                },
                                {
                                        "promptPl": "Józef Papkin to postać komiczna, która łączy tchórzostwo z kreowaniem się na wielkiego rycerza.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Samochwalstwo i strach Papkina to klasyczny przykład komizmu postaci."
                                },
                                {
                                        "promptPl": "Cześnik słynie z powtarzania ulubionego powiedzonka: «Niech się dzieje wola Nieba, z nią się zawsze zgadzać trzeba!».",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To powiedzonko hipokryty Rejenta! Ulubionym powiedzeniem Cześnika jest: «Mocium panie»."
                                },
                                {
                                        "promptPl": "Scena dyktowania listu Dyndalskiemu przez Cześnika («Mocium panie, me wezwanie...») to szczyt komizmu słownego.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dyndalski wpisuje natrętne powiedzonko Cześnika do oficjalnego listu."
                                },
                                {
                                        "promptPl": "Klara zażądała od Papkina, by w dowód miłości upolował dla niej żywego krokodyla.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! «Jeśli nie chcesz mojej zguby, krokodyla daj mi, luby!» – to ironiczny test odwagi."
                                },
                                {
                                        "promptPl": "Komediodroga kończy się śmiercią wszystkich bohaterów w krwawym pojedynku na szable.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zgodnie z regułami komedii następuje zgoda i ślub zakochanych Wacława i Klary!"
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Błazen]: Fraszki i Bajki Krasickiego",
                        "subtitlePl": "Morał, ironia i oświeceniowa mądrość",
                        "descriptionPl": "Poznaj mistrzów polskiej satyry i dowcipu z morałem.",
                        "questions": [
                                {
                                        "promptPl": "Bajka zwierzęca posługuje się alegorią – zwierzęta uosabiają ludzkie wady i cechy charakteru.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Lis uosabia chytrość, wilk bezwzględną siłę, a owca naiwność."
                                },
                                {
                                        "promptPl": "Bajka Ignacego Krasickiego «Kruk i lis» uczy, że bezkrytyczna wiara w pochlebstwa prowadzi do straty sera.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pycha i łasność na komplementy zostały ukarane utratą zdobyczy."
                                },
                                {
                                        "promptPl": "Fraszka to wielotomowa powieść historyczna opisująca bitwy rycerskie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Fraszka to krótki, wierszowany utwór o żartobliwej lub refleksyjnej treści z puentą."
                                },
                                {
                                        "promptPl": "Jan Kochanowski w fraszce «Na zdrowie» podkreśla, że doceniamy zdrowie dopiero wtedy, gdy je stracimy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! «Szlachetne zdrowie, nikt się nie dowie, jako smakujesz, aż się zepsujesz»."
                                },
                                {
                                        "promptPl": "Morał w bajce zawsze musi być ukryty tak głęboko, by nikt go nigdy nie odgadł.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Morał to jasne pouczenie moralne umieszczone na początku lub na końcu utworu."
                                },
                                {
                                        "promptPl": "Satyra «Żona modna» Krasickiego ośmiesza bezmyślne naśladowanie francuskiej mody i marnotrawstwo.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pisarz krytykował puste trendy cudzoziemskie niszczące tradycyjny polski dom."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Błazen]: Wystąpienia Publiczne bez Tremy",
                        "subtitlePl": "Sztuka autoprezentacji i panowania nad audytorium",
                        "descriptionPl": "Opanuj stres przed wystąpieniem na forum klasy.",
                        "questions": [
                                {
                                        "promptPl": "Uśmiech przed rozpoczęciem referatu wysyła do mózgu sygnał bezpieczeństwa i zjednuje słuchaczy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Mimika twarzy wpływa na układ nerwowy i natychmiast ociepla atmosferę na sali."
                                },
                                {
                                        "promptPl": "Podczas wygłaszania przemówienia najlepiej patrzeć w podłogę i recytować tekst monotonnym głosem.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Kontakt wzrokowy i modulacja głosu przykuwają uwagę publiczności."
                                },
                                {
                                        "promptPl": "Krótka pauza (cisza) przed ważną puentą wzmaga ciekawość i skupienie słuchaczy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Świadoma pauza jest jednym z najpotężniejszych narzędzi retorycznych."
                                },
                                {
                                        "promptPl": "Jeśli zapomnisz słowa na scenie, ucieczka z sali z krzykiem to najbardziej profesjonalne wyjście.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Weź spokojny oddech, spójrz w notatki lub powiedz z uśmiechem: «Dajmy chwilę na przemyślenie»."
                                },
                                {
                                        "promptPl": "Wcześniejsze przećwiczenie przemówienia przed lustrem lub przed rodzicami redukuje tremę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Pamięć mięśniowa i oswojenie się z głosem dają pewność na scenie."
                                },
                                {
                                        "promptPl": "Gestykulacja otwarta (otwarte dłonie, brak skrzyżowanych rąk) buduje zaufanie odbiorców.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Ciało otwarte sygnalizuje szczerość i gotowość do dialogu."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Błazen]: Przysłowia i Gry Słowne",
                        "subtitlePl": "Skarbnica frazeologizmów języka polskiego",
                        "descriptionPl": "Rozszyfruj metaforyczny sens powiedzeń.",
                        "questions": [
                                {
                                        "promptPl": "Związek frazeologiczny «porywać się z motyką na słońce» oznacza podejmowanie niemożliwego wyzwania.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Oznacza przecenianie własnych sił w stosunku do potęgi zadania."
                                },
                                {
                                        "promptPl": "«Rzucać grochem o ścianę» oznacza gotowanie pysznej zupy na szkolnym obiedzie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To frazeologizm oznaczający daremne mówienie do kogoś, kto zupełnie nie słucha."
                                },
                                {
                                        "promptPl": "«Mieć muchy w nosie» oznacza, że ktoś jest w złym humorze i bez powodu się dąsa.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To popularne określenie kapryśnego, niezadowolonego nastroju."
                                },
                                {
                                        "promptPl": "«Kupić kota w worku» oznacza zrobienie doskonałego, dokładnie sprawdzonego interesu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Oznacza nabycie czegoś bez uprzedniego sprawdzenia jakości, w ciemno."
                                },
                                {
                                        "promptPl": "«Siedzieć jak na szpilkach» oznacza stan ogromnej niecierpliwości i niepokoju.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Oddaje fizyczne odczucie napięcia w oczekiwaniu na ważną wiadomość."
                                },
                                {
                                        "promptPl": "«Niedźwiedzia przysługa» to pomoc tak wspaniała i wielka, że przynosi człowiekowi szczęście.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! To przysługa wyświadczona w dobrej intencji, która w rzeczywistości przyniosła szkodę!"
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                },
                {
                        "titlePl": "Myśli [Błazen]: Zgoda w Klasie i Mediacja",
                        "subtitlePl": "Rozbrajanie konfliktów humorem i dialogiem",
                        "descriptionPl": "Buduj zgraną społeczność wolną od zawiści.",
                        "questions": [
                                {
                                        "promptPl": "Wzajemne przebaczenie i uściśnięcie dłoni kończy konflikt trwalej niż pielęgnowanie urazy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Trzymanie żalu niszczy przede wszystkim tego, kto go w sobie nosi."
                                },
                                {
                                        "promptPl": "Gdy dwaj koledzy kłócą się o błahostkę, najlepszym rozwiązaniem jest podpuszczanie ich do bójki.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Dobry kolega staje się mediatorem: studzi emocje i pomaga znaleźć kompromis."
                                },
                                {
                                        "promptPl": "Wspólny śmiech po zażegnaniu kryzysu łączy ludzi silniej niż formalne umowy.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Poczucie humoru pozwala spojrzeć na problem z dystansu."
                                },
                                {
                                        "promptPl": "Zgoda buduje, a niezgoda rujnuje – to jedno z najmądrzejszych polskich przysłów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Współpraca tworzy wielkie dzieła, a wewnętrzne kłótnie niszczą wszystko."
                                },
                                {
                                        "promptPl": "Przeproszenie kogoś w obecności klasy jest upokorzeniem, którego nigdy nie wolno robić.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Szczęśliwe przeprosiny świadczą o wielkości serca i zdobywają szacunek otoczenia."
                                },
                                {
                                        "promptPl": "Życzliwość okazana koledze wraca do człowieka w najmniej spodziewanym momencie.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dobroć tworzy spiralę pozytywnych relacji w całej szkole."
                                },
                                {
                                        "promptPl": "Gdy nie rozumiesz trudnego polecenia nauczyciela, najlepiej milczeć i udawać, że wszystko wiesz.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Zawsze warto uprzejmie zapytać: «Przepraszam, czy może Pani powtórzyć?»."
                                },
                                {
                                        "promptPl": "Każdy ma prawo popełnić błąd językowy – nauka nowego języka i doskonalenie polszczyzny wymaga cierpliwości i odwagi.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Błędy to naturalny i najważniejszy etap nauki polskiego."
                                },
                                {
                                        "promptPl": "Gdy czujesz ogromne zmęczenie po szkole, szklanka wody i krótki odpoczynek pomagają zregenerować siły.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Odpoczynek i nawodnienie to podstawa zdrowia i koncentracji."
                                },
                                {
                                        "promptPl": "Jeśli ktoś na korytarzu popycha cię złośliwie, nie wolno nikomu o tym powiedzieć.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Trzeba jasno powiedzieć: «Nie rób tak!» i powiadomić nauczyciela dyżurnego."
                                },
                                {
                                        "promptPl": "Współpraca w parze nad projektem pozwala osiągnąć lepszy rezultat niż praca w pojedynkę.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwa punkty widzenia i podział zadań przynoszą wspaniałe efekty."
                                },
                                {
                                        "promptPl": "Przed trudnym sprawdzianem najskuteczniejszą metodą jest zarywanie całej nocy bez snu.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Wyspany mózg pamięta znacznie więcej niż zmęczony po bezsennej nocy."
                                },
                                {
                                        "promptPl": "W rozprawce z języka polskiego teza to twierdzenie, którego będziesz bronić za pomocą logicznych argumentów.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Teza jest osią całej argumentacji w rozprawce."
                                },
                                {
                                        "promptPl": "Każdy argument w wypracowaniu musi być poparty trafnym przykładem z lektury obowiązkowej.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Przykład z lektury dowodzi słuszności argumentu."
                                },
                                {
                                        "promptPl": "Przecinek stawiamy zawsze przed spójnikiem «oraz», nawet gdy łączy pojedyncze wyrazy.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Przed pojedynczym spójnikiem «oraz» nie stawiamy przecinka."
                                },
                                {
                                        "promptPl": "Imiesłów przymiotnikowy bierny kończy się na -ny, -ty (np. zrobiony, zamknięty).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! To wzorzec słowotwórczy imiesłowów biernych."
                                },
                                {
                                        "promptPl": "W zdaniu: «Książka leży na biurku», wyraz «biurku» jest podmiotem gramatycznym.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Podmiotem jest «książka» (kto? co?), a biurku to okolicznik miejsca."
                                },
                                {
                                        "promptPl": "Głoska «sz» jest pojedynczym dźwiękiem mowy, mimo że zapisujemy ją dwoma literami s-z.",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Dwuznak oznacza jedną głoskę."
                                },
                                {
                                        "promptPl": "W wyrazie «rzeka» piszemy «rz», ponieważ wymienia się na «r» (rzeczny).",
                                        "isTrue": true,
                                        "explanation": "PRAWDA! Wymiana na «r» to kluczowa reguła ortograficzna."
                                },
                                {
                                        "promptPl": "«Nie» z czasownikami w formach osobowych piszemy zawsze łącznie.",
                                        "isTrue": false,
                                        "explanation": "FAŁSZ! Piszemy rozdzielnie (np. nie wiem, nie piszę)."
                                }
                        ]
                }
        ]
}""")