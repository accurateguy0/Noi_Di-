// Kot w Butach - Szarmancki fechtmistrz riposty
// 42 HP, bije po 3 HP. Pojedynek na kulturalne riposty w 5 sekund! (20 wyzwań)

export const KOT_W_BUTACH_ENCOUNTERS = {
  default: {
    type: 'puss_quiz',
    titlePl: 'Kot w Butach (42 HP, 3 dmg)',
    subtitlePl: 'Pojedynek ripost: Szarmanckie zwroty i ukłony',
    icon: './assets/Postacie/kot_w_butach.png',
    enemyName: 'kot w butach',
    enemyMaxHp: 42,
    enemyDamage: 3,
    descriptionPl: 'Kot w Butach wyzywa cię na słowny pojedynek! Odpowiedz z honorem i kulturą w 5 sekund.',
    steps: [
      {
            "question": "Kot kłania się z kapeluszem: «Moje uszanowanie, młody podróżniku! Zechcesz ustąpić mi przejścia?»",
            "options": [
                  {
                        "text": "«Z przyjemnością, proszę przejść przodem!»",
                        "correct": true
                  },
                  {
                        "text": "«Zejdź mi z drogi, kocie!»",
                        "correct": false
                  },
                  {
                        "text": "«Gdzie masz swoje buty?»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot macha szpadą: «Powiadają, że język polski bywa ostry niczym stal. Czym odpowiesz na zaczepkę?»",
            "options": [
                  {
                        "text": "«Uprzejmym słowem i uśmiechem, panie Kocie!»",
                        "correct": true
                  },
                  {
                        "text": "«Rzucę w ciebie plecakiem!»",
                        "correct": false
                  },
                  {
                        "text": "«Nic nie powiem, uciekam.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot odkłada szpadę: «Zaimponowałeś mi! Jak żegna się prawdziwy szlachetny uczeń?»",
            "options": [
                  {
                        "text": "«Do widzenia panu, życzę miłego dnia!»",
                        "correct": true
                  },
                  {
                        "text": "«Nara zią, spadaj!»",
                        "correct": false
                  },
                  {
                        "text": "«Oddaj mi kapelusz!»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot poprawia pióro przy kapeluszu: «Mój drogi, jak brzmi forma wołacza od słowa 'przyjaciel'?»",
            "options": [
                  {
                        "text": "«O mój zacny przyjacielu!»",
                        "correct": true
                  },
                  {
                        "text": "«Hej przyjaciel!»",
                        "correct": false
                  },
                  {
                        "text": "«Widzę przyjaciela!»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot kłania się damie: «Jaki zwrot zastosujesz, przedstawiając swoją towarzyszkę podróży?»",
            "options": [
                  {
                        "text": "«Pozwólcie, że przedstawię wam moją szanowną koleżankę.»",
                        "correct": true
                  },
                  {
                        "text": "«To jest jakaś dziewczyna z korytarza.»",
                        "correct": false
                  },
                  {
                        "text": "«Patrzcie na nią!»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot unosi brwi: «Ktoś w tłumie nadepnął ci na ogon... to znaczy na trzewik! Co rzekniesz?»",
            "options": [
                  {
                        "text": "«Przepraszam pana, ale stanął pan na moim bucie.»",
                        "correct": true
                  },
                  {
                        "text": "«Zaraz ci oddam!»",
                        "correct": false
                  },
                  {
                        "text": "«Patrz pod nogi, ślepcze!»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot uśmiecha się dumnie: «Wskaż przysłowie mówiące o sile szlachetnego słowa:»",
            "options": [
                  {
                        "text": "«Dobre słowo nic nie kosztuje, a wiele zjednuje.»",
                        "correct": true
                  },
                  {
                        "text": "«Kto mieczem wojuje, ten od miecza ginie.»",
                        "correct": false
                  },
                  {
                        "text": "«Gdzie drwa rąbią, tam wióry lecą.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot podaje ci list z pieczęcią laku: «Jak rozpoczynamy list oficjalny do wielmożnego pana dyrektora?»",
            "options": [
                  {
                        "text": "«Szanowny Panie Dyrektorze!»",
                        "correct": true
                  },
                  {
                        "text": "«Siemanko Dyro!»",
                        "correct": false
                  },
                  {
                        "text": "«Co tam słychać w gabinecie?»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot czyści wąsy: «A jak kulturalnie kończymy takie wytworne pismo?»",
            "options": [
                  {
                        "text": "«Z wyrazami szacunku i poważania.»",
                        "correct": true
                  },
                  {
                        "text": "«Nara, trzymaj się ciepło!»",
                        "correct": false
                  },
                  {
                        "text": "«Koniec wiadomości.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot bada ostrość pazura: «Jak nazwać kogoś, kto dotrzymuje każdego danego słowa?»",
            "options": [
                  {
                        "text": "«Człowiek honoru i prawdomówności.»",
                        "correct": true
                  },
                  {
                        "text": "«Człowiek naiwny i prosty.»",
                        "correct": false
                  },
                  {
                        "text": "«Wojownik bez oręża.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot wskazuje na stół biesiadny: «Gospodarz zaprasza do uczty. Jak podziękujesz za poczęstunek?»",
            "options": [
                  {
                        "text": "«Dziękuję serdecznie za tak wyśmienite danie!»",
                        "correct": true
                  },
                  {
                        "text": "«Mogło być lepiej doprawione.»",
                        "correct": false
                  },
                  {
                        "text": "«Zjadłem, bo musiałem.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot przymyka oko: «Gdy spotkasz damę w progu zamku, czyja dłoń pierwsza wyciąga się na powitanie?»",
            "options": [
                  {
                        "text": "«To dama decyduje, czy poda dłoń na powitanie.»",
                        "correct": true
                  },
                  {
                        "text": "«Mężczyzna zawsze chwyta natychmiast za rękę.»",
                        "correct": false
                  },
                  {
                        "text": "«Nikt nikomu nie podaje rąk.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot prezentuje swoje buty z ostrogami: «Jaki wyraz najlepiej określa moją nienaganną postawę?»",
            "options": [
                  {
                        "text": "«Szarmancki i dworny.»",
                        "correct": true
                  },
                  {
                        "text": "«Arogancki i głośny.»",
                        "correct": false
                  },
                  {
                        "text": "«Płochliwy i dziki.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot wykonuje zwód szpadą: «Wskaż frazeologizm oznaczający sprytne wybrnięcie z trudnej sytuacji:»",
            "options": [
                  {
                        "text": "«Spadać jak kot na cztery łapy.»",
                        "correct": true
                  },
                  {
                        "text": "«Kupować kota w worku.»",
                        "correct": false
                  },
                  {
                        "text": "«Drzeć z kimś koty.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot chichocze: «A co oznacza zwrot: 'drzeć z kimś koty'?»",
            "options": [
                  {
                        "text": "«Kłócić się bezustannie i prowadzić spory.»",
                        "correct": true
                  },
                  {
                        "text": "«Robić na drutach sweter z wełny.»",
                        "correct": false
                  },
                  {
                        "text": "«Karmić bezpańskie zwierzęta.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot macha kapeluszem w stronę widowni: «W teatrze kurtyna opada po spektaklu. Co czyni szlachetny widz?»",
            "options": [
                  {
                        "text": "«Bije gromkie brawa na stojąco dla aktorów.»",
                        "correct": true
                  },
                  {
                        "text": "«Biegnie natychmiast do szatni przed zakończeniem ukłonów.»",
                        "correct": false
                  },
                  {
                        "text": "«Gwiżdże i rzuca papierkami.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot wyciąga starą księgę baśni: «Kto jest autorem klasycznej baśni o Kocie w Butach?»",
            "options": [
                  {
                        "text": "«Charles Perrault.»",
                        "correct": true
                  },
                  {
                        "text": "«Hans Christian Andersen.»",
                        "correct": false
                  },
                  {
                        "text": "«Bracia Grimm.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot unosi szablę w geście salute: «W szermierce słownej riposta to:»",
            "options": [
                  {
                        "text": "«Błyskawiczna, celna i błyskotliwa odpowiedź na zaczepkę.»",
                        "correct": true
                  },
                  {
                        "text": "«Przekleństwo rzucone w gniewie.»",
                        "correct": false
                  },
                  {
                        "text": "«Ucieczka przed dyskusją.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot kłania się w pas: «Czym różni się pochlebstwo od szczerego komplementu?»",
            "options": [
                  {
                        "text": "«Pochlebstwo jest nieszczere i ma ukryty interes, komplement płynie z serca.»",
                        "correct": true
                  },
                  {
                        "text": "«Pochlebstwo jest zawsze prawdziwe.»",
                        "correct": false
                  },
                  {
                        "text": "«To synonimy o identycznym znaczeniu.»",
                        "correct": false
                  }
            ]
      },
      {
            "question": "Kot chowa oręż do pochwy: «Pojedynek skończony, młodzieńcze! Jesteś godzien miana mistrza etykiety!»",
            "options": [
                  {
                        "text": "«Dziękuję za lekcję fechtunku i kultury, szlachetny kocie!»",
                        "correct": true
                  },
                  {
                        "text": "«I tak byłem od ciebie lepszy!»",
                        "correct": false
                  },
                  {
                        "text": "«Daj mi swoje buty!»",
                        "correct": false
                  }
            ]
      }
]
  }
};
