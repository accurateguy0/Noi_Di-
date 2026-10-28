// Mistrz Kebaba - Gorący posiłek i szybka obsługa
// 30 HP, bije po 3 HP. Minigra: Quiz zamawiania jedzenia (20 pytań).
// Tło: Miasto / Ulica / Strefa gastronomiczna.

export const MISTRZ_KEBABA_ENCOUNTER = {
  type: 'kebab_quiz',
  titlePl: 'Mistrz Kebaba (30 HP, 3 dmg)',
  subtitlePl: 'Quiz gastronomiczny: Zamawianie ciepłego posiłku',
  icon: './assets/Postacie/Mistrz_Kebaba.png',
  enemyName: 'Mistrz Kebaba',
  enemyMaxHp: 30,
  enemyDamage: 3,
  descriptionPl: 'Mistrz Kebaba przygotowuje zamówienie! Odpowiedz precyzyjnie na pytania o sosy, mięso i napoje.',
  steps: [
    {
        "question": "Mistrz Kebaba pyta: «Dzień dobry przyjacielu! W czym podać kebaba?»",
        "options": [
            {
                "text": "«Poproszę w cienkim cieście (lawasz).»",
                "correct": true
            },
            {
                "text": "«Włóż mi do piórnika.»",
                "correct": false
            },
            {
                "text": "«Poproszę w zeszycie od matematyki.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«A może wolisz w chrupiącej bułce czy w pudełku box z frytkami?»",
        "options": [
            {
                "text": "«Poproszę w tradycyjnej chrupiącej bułce!»",
                "correct": true
            },
            {
                "text": "«W czapce zimowej poproszę.»",
                "correct": false
            },
            {
                "text": "«Prosto do kieszeni.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Jakie mięso sobie życzysz? Mamy pieczonego kurczaka i wołowinę!»",
        "options": [
            {
                "text": "«Poproszę delikatnego kurczaka, dziękuję!»",
                "correct": true
            },
            {
                "text": "«Poproszę kawałek kredy szkolnej.»",
                "correct": false
            },
            {
                "text": "«Nie lubię jedzenia.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«A jaki sosik do tego? Mamy łagodny czosnkowy, mieszany albo piekielnie ostry!»",
        "options": [
            {
                "text": "«Poproszę łagodny czosnkowy, dziękuję!»",
                "correct": true
            },
            {
                "text": "«Poproszę zmywacz do tablicy.»",
                "correct": false
            },
            {
                "text": "«Nie wiem co to jest sos.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Czy dodać świeże warzywa: sałatę lodową, pomidorka, ogórka i czerwoną cebulkę?»",
        "options": [
            {
                "text": "«Tak, poproszę pełen zestaw świeżych warzyw!»",
                "correct": true
            },
            {
                "text": "«Nie cierpię witamin, same frytki!»",
                "correct": false
            },
            {
                "text": "«Wrzuć mi tam kamienie.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Czy życzysz sobie ser feta i prażoną cebulkę na wierzch?»",
        "options": [
            {
                "text": "«Poproszę z serem feta i odrobiną prażonej cebulki!»",
                "correct": true
            },
            {
                "text": "«Posyp piaskiem z boiska.»",
                "correct": false
            },
            {
                "text": "«Nie chcę niczego.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Co do picia na ochłodę po ciepłym posiłku?»",
        "options": [
            {
                "text": "«Zimną wodę niegazowaną z cytryną, proszę.»",
                "correct": true
            },
            {
                "text": "«Wrzątek w szklance.»",
                "correct": false
            },
            {
                "text": "«Klej w sztyfcie.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Tradycyjny jogurtowy napój ayran czy sok pomarańczowy?»",
        "options": [
            {
                "text": "«Poproszę schłodzony ayran, idealnie pasuje!»",
                "correct": true
            },
            {
                "text": "«Płyn do mycia podłóg.»",
                "correct": false
            },
            {
                "text": "«Tylko sól.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Na miejscu czy zapakować starannie na wynos?»",
        "options": [
            {
                "text": "«Zjem tutaj na miejscu przy stoliku, dziękuję!»",
                "correct": true
            },
            {
                "text": "«Wyrzuć przez okno.»",
                "correct": false
            },
            {
                "text": "«Zabieram do szatni na podłogę.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Czy podgrzać tortillę w opiekaczu grillowym, by była chrupiąca?»",
        "options": [
            {
                "text": "«Tak, bardzo proszę dobrze przypiec!»",
                "correct": true
            },
            {
                "text": "«Zamroź na kość.»",
                "correct": false
            },
            {
                "text": "«Zostaw mokre ciasto.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Jak uregulujesz rachunek: kartą zbliżeniową czy gotówką?»",
        "options": [
            {
                "text": "«Zapłacę zbliżeniowo kartą, poproszę terminal!»",
                "correct": true
            },
            {
                "text": "«Zapłacę guzikami od kurtki.»",
                "correct": false
            },
            {
                "text": "«Uciekam bez płacenia.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Czy potrzebujesz paragon fiskalny czy fakturę?»",
        "options": [
            {
                "text": "«Paragon fiskalny w zupełności wystarczy, dziękuję!»",
                "correct": true
            },
            {
                "text": "«Zjedz ten paragon.»",
                "correct": false
            },
            {
                "text": "«Paragony są nielegalne.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Czy podać dodatkowe serwetki papierowe do wytarcia rąk?»",
        "options": [
            {
                "text": "«Tak, poproszę dwie serwetki, bardzo się przydadzą!»",
                "correct": true
            },
            {
                "text": "«Będę wycierać ręce w rękaw.»",
                "correct": false
            },
            {
                "text": "«Nie myję nigdy rąk.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Gdzie uczeń powinien umyć ręce przed zjedzeniem posiłku?»",
        "options": [
            {
                "text": "«W łazience przy umywalce ciepłą wodą z mydłem.»",
                "correct": true
            },
            {
                "text": "«W kałuży przed budynkiem.»",
                "correct": false
            },
            {
                "text": "«Nie trzeba myć rąk przed jedzeniem.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Jak powiesz kucharzowi, że jedzenie było naprawdę pyszne?»",
        "options": [
            {
                "text": "«Kebab był wyśmienity, dziękuję bardzo mistrzu!»",
                "correct": true
            },
            {
                "text": "«Mogło być gorsze.»",
                "correct": false
            },
            {
                "text": "«Oddawaj pieniądze.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Co robisz z papierową owijką i kubkiem po skończonym posiłku?»",
        "options": [
            {
                "text": "«Wyrzucam do odpowiedniego kosza na odpady.»",
                "correct": true
            },
            {
                "text": "«Zostawiam na środku chodnika.»",
                "correct": false
            },
            {
                "text": "«Wciskam pod ławkę w parku.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Które z dań kuchni bliskowschodniej zrobione jest z ciecierzycy dla wegetarian?»",
        "options": [
            {
                "text": "«Falafel (chrupiące kotleciki z ciecierzycy).»",
                "correct": true
            },
            {
                "text": "«Schabowy z kością.»",
                "correct": false
            },
            {
                "text": "«Kiełbasa myśliwska.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Jak poprosisz o porcję bez pikantnych papryczek jalapeño?»",
        "options": [
            {
                "text": "«Poproszę wersję łagodną, bez ostrych papryczek.»",
                "correct": true
            },
            {
                "text": "«Nie dawać mi tego świństwa!»",
                "correct": false
            },
            {
                "text": "«Wszystko jedno, i tak nie zjem.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Kolega z ławki czeka na zamówienie za tobą. Co zrobisz przy ladzie?»",
        "options": [
            {
                "text": "«Odchodzę krok w bok, by zrobić mu miejsce przy kasie.»",
                "correct": true
            },
            {
                "text": "«Stoję na środku i blokuję przejście.»",
                "correct": false
            },
            {
                "text": "«Zabieram jego tacę.»",
                "correct": false
            }
        ]
    },
    {
        "question": "«Mistrz Kebaba macha szczypcami: 'Dziękuję i zapraszam ponownie!' Co odpowiadasz?»",
        "options": [
            {
                "text": "«Dziękuję pięknie, do widzenia i miłego dnia!»",
                "correct": true
            },
            {
                "text": "«Spadaj na drzewo.»",
                "correct": false
            },
            {
                "text": "«Nigdy więcej tu nie przyjdę.»",
                "correct": false
            }
        ]
    }
]
};
