// Dialogi, quizy i wyzwania przeciwników oraz bossów

export const OLEK_QUIZ_ENCOUNTERS = {
  encounter_1: {
    title: 'Mijanka z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 5,
    enemyDamage: 5,
    tanDamage: 5,
    questions: [
      {
        id: 'olek_1_q1',
        olekSpeech: 'Elo!',
        olekSpeakText: 'Elo!',
        promptPl: 'Olek mija Cię na korytarzu i rzuca: „Elo!”. Co mu odpowiesz?',
        promptVn: 'Olek đi ngang qua ở hành lang và chào: "Elo!". Tan đáp lại thế nào?',
        playBellOnStart: false,
        options: [
          {
            text: 'Siema!',
            vnText: 'Chào bạn! (Powitanie)',
            speakText: 'Siema!',
            correct: true
          },
          {
            text: 'Nara!',
            vnText: 'Tạm biệt nhé! (Pożegnanie)',
            speakText: 'Nara!',
            correct: false
          },
          {
            text: 'Co tam?',
            vnText: 'Có gì mới không? (Pytanie)',
            speakText: 'Co tam?',
            correct: false
          },
          {
            text: 'Dobranoc!',
            vnText: 'Chúc ngủ ngon!',
            speakText: 'Dobranoc!',
            correct: false
          }
        ]
      }
    ]
  },
  encounter_2: {
    title: 'Dzwonek szkolny',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 10,
    enemyDamage: 5,
    tanDamage: 5,
    questions: [
      {
        id: 'olek_2_q1',
        olekSpeech: 'Co tam?',
        olekSpeakText: 'Co tam?',
        promptPl: 'Olek zaczepia Cię w biegu i pyta: „Co tam?”. Co oznacza to pytanie?',
        promptVn: 'Olek bắt chuyện khi đang vội và hỏi: "Co tam?". Câu hỏi này có nghĩa là gì?',
        playBellOnStart: false,
        options: [
          {
            text: 'Co u Ciebie nowego?',
            vnText: 'Có gì mới không? / Dạo này thế nào?',
            speakText: 'Co tam?',
            correct: true
          },
          {
            text: 'Pożegnanie przed wyjściem',
            vnText: 'Tạm biệt nhé! (Chia tay ra về)',
            speakText: 'Nara!',
            correct: false
          },
          {
            text: 'Powitanie rano przed szkołą',
            vnText: 'Chào buổi sáng trước giờ học',
            speakText: 'Siema!',
            correct: false
          },
          {
            text: 'Pytanie, która jest godzina',
            vnText: 'Hỏi xem bây giờ là mấy giờ',
            speakText: 'Która godzina?',
            correct: false
          }
        ]
      },
      {
        id: 'olek_2_q2',
        olekSpeech: '🔔 Dobra, nara!',
        olekSpeakText: 'Dobra, nara!',
        promptPl: '🔔 Dzwoni dzwonek szkolny! Olek biegnie na lekcję i rzuca: „Dobra, nara!”. Co odpowie Tan?',
        promptVn: '🔔 Chuông trường reo vang! Olek vội chạy vào lớp và nói: "Dobra, nara!". Tan đáp lại thế nào?',
        playBellOnStart: true,
        options: [
          {
            text: 'Nara!',
            vnText: 'Tạm biệt nhé! (Pożegnanie)',
            speakText: 'Nara!',
            correct: true
          },
          {
            text: 'Siema!',
            vnText: 'Chào bạn! (Powitanie)',
            speakText: 'Siema!',
            correct: false
          },
          {
            text: 'Elo!',
            vnText: 'Chào nhé! (Powitanie)',
            speakText: 'Elo!',
            correct: false
          },
          {
            text: 'Co tam?',
            vnText: 'Có gì mới không? (Pytanie)',
            speakText: 'Co tam?',
            correct: false
          }
        ]
      }
    ]
  },
  encounter_board4: {
    title: 'Rozmowa o emocjach z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 30,
    enemyDamage: 7,
    tanDamage: 10,
    questions: [
      {
        id: 'olek_b4_q1',
        olekSpeech: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
        olekSpeakText: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
        promptPl: 'Olek chwali się wielkim sukcesem w grze. Jak zareagujesz z entuzjazmem?',
        options: [
          { text: 'Sztos! Gratulacje!', correct: true },
          { text: 'Masakra, strasznie słabo.', correct: false },
          { text: 'Przypał, nie mów nikomu.', correct: false },
          { text: 'Nara, już idę.', correct: false }
        ]
      },
      {
        id: 'olek_b4_q2',
        olekSpeech: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
        olekSpeakText: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
        promptPl: 'Olek opowiada o fatalnej passie porażek. Jak to podsumujesz?',
        options: [
          { text: 'Masakra, współczuję ci!', correct: true },
          { text: 'Sztos, świetna robota!', correct: false },
          { text: 'Dobra, nara!', correct: false },
          { text: 'Grasz w...?', correct: false }
        ]
      },
      {
        id: 'olek_b4_q3',
        olekSpeech: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
        olekSpeakText: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
        promptPl: 'Co to za wstydliwa i niefortunna wpadka?',
        options: [
          { text: 'Ale przypał!', correct: true },
          { text: 'Czysty sztos!', correct: false },
          { text: 'Jaki masz nick?', correct: false },
          { text: 'Siema!', correct: false }
        ]
      }
    ]
  },
  encounter_board5: {
    title: 'Rozmowa w ławce z Olkiem',
    opponentName: 'Gejmer Olek',
    enemyMaxHp: 35,
    enemyDamage: 5,
    tanDamage: 12,
    questions: [
      {
        id: 'olek_b5_q1',
        olekSpeech: 'Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!',
        olekSpeakText: 'Mój długopis pisze, a Twój się wypisał? Sprawdź w piórniku!',
        promptPl: 'Jak zapytasz Olka, czy ma zapasowy długopis do pożyczenia?',
        options: [
          { text: '🖊️ „Olek, masz długopis?”', correct: true },
          { text: '📖 „Która strona?”', correct: false },
          { text: '🚪 „Nara!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q2',
        olekSpeech: 'Nauczyciel podał numer strony z zadaniem do zrobienia!',
        olekSpeakText: 'Nauczyciel podał numer strony z zadaniem do zrobienia!',
        promptPl: 'Nie dosłyszałeś numeru strony. Jak zapytasz o to Olka?',
        options: [
          { text: '📖 „Która strona?”', correct: true },
          { text: '🎮 „Grasz w...?”', correct: false },
          { text: '🤦‍♂️ „Przypał!”', correct: false }
        ]
      },
      {
        id: 'olek_b5_q3',
        olekSpeech: 'Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!',
        olekSpeakText: 'Proszę, pożyczam Ci mój ulubiony długopis i pokazuję stronę!',
        promptPl: 'Olek podał Ci długopis i pomógł. Jak mu naturalnie podziękujesz?',
        options: [
          { text: '🙏 „Dzięki!”', correct: true },
          { text: '🤜🤛 „Siema!”', correct: false },
          { text: '😱 „Masakra!”', correct: false }
        ]
      }
    ]
  },
  encounter_teacher: {
    title: 'Sprawdzian z Nauczycielką',
    opponentName: 'Nauczycielka',
    opponentAvatar: './assets/Postacie/Nauczycielka.png',
    spriteClass: 'sprite-nauczycielka',
    enemyMaxHp: 40,
    enemyDamage: 6,
    tanDamage: 20,
    questions: [
      {
        id: 'teacher_b5_q1',
        olekSpeech: 'Tan, zadanie na tablicy jest trudne! Poproś kolegę o współpracę.',
        olekSpeakText: 'Tan, zadanie na tablicy jest trudne! Poproś kolegę o współpracę.',
        promptPl: 'Jak uprzejmie poprosisz Olka o pomoc w zadaniu?',
        options: [
          { text: '🤝 „Olek, pomóż mi, proszę.”', correct: true },
          { text: '⚡ „Dasz ID?”', correct: false },
          { text: '😴 „Dobranoc!”', correct: false }
        ]
      },
      {
        id: 'teacher_b5_q2',
        olekSpeech: 'Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.',
        olekSpeakText: 'Zmazałam tablicę! Kto nie zdążył, niech spojrzy do zeszytu kolegi.',
        promptPl: 'Jak zapytasz Olka, czy możesz spojrzeć do jego zeszytu?',
        options: [
          { text: '📓 „Olek, mogę zobaczyć zeszyt?”', correct: true },
          { text: '👟 „Mam sneakersy!”', correct: false },
          { text: '🚪 „Nara!”', correct: false }
        ]
      }
    ]
  },
  encounter_board6_olek: {
    title: 'Quiz słowny z Olkiem („Lubię...” )',
    opponentName: 'Gejmer Olek',
    opponentAvatar: './assets/Postacie/Gejmer.png',
    spriteClass: 'sprite-olek',
    enemyMaxHp: 30,
    enemyDamage: 7,
    tanDamage: 10,
    questions: [
      {
        id: 'olek_b6_q1',
        olekSpeech: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!',
        olekSpeakText: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole!',
        promptPl: 'Olek mówi z pasją o grach. Jak entuzjastycznie odpowiesz słownie?',
        options: [
          { text: 'Mega! 🔥', correct: true },
          { text: 'Nudne... 🥱', correct: false },
          { text: 'Słabe 👎', correct: false },
          { text: 'Hejty 💬', correct: false }
        ]
      },
      {
        id: 'olek_b6_q2',
        olekSpeech: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?',
        olekSpeakText: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... A ty?',
        promptPl: 'Olek mówi o gotowanych warzywach. Wyraź swoją szczerą opinię:',
        options: [
          { text: 'Mega! 🔥', correct: true },
          { text: 'Słabe 👎', correct: true },
          { text: 'Nudne... 🥱', correct: true },
          { text: 'Hejty 💬', correct: false }
        ]
      },
      {
        id: 'olek_b6_q3',
        olekSpeech: 'Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.',
        olekSpeakText: 'Lubię nowe, czyste sneakersy prosto z pudełka! Dobrze się w nich biega.',
        promptPl: 'Olek chwali swoje buty na korytarzu. Twoja aprobująca reakcja to:',
        options: [
          { text: 'Fajne! 👍', correct: true },
          { text: 'Nudne 🥱', correct: false },
          { text: 'Słabe 👎', correct: false },
          { text: 'Hejty 💬', correct: false }
        ]
      }
    ]
  }
};

// ==================== PLANSZA 3: ROZMOWA O GRACH I KRAMIK SZKOLNY ====================

// Zadania do minigry Spell the Word (Olek – Test Nowych Słów na Polu 5 Planszy 3)
export const BOARD_3_SPELL_QUESTIONS = [
  {
    id: 'spell_1',
    olekSpeech: 'Lubię gry na telefonie! A ty?',
    olekSpeakText: 'Lubię gry na telefonie! A ty?',
    contextPl: 'Olek siedzi na ławce i gra na telefonie. Zapytaj go, czy gra w Twoją ulubioną grę.',
    targetPhrase: 'GRASZ W',
    displayTarget: 'Grasz w...?',
    speakOnSolve: 'Grasz w Roblox?',
    baseTimeSec: 10
  },
  {
    id: 'spell_2',
    olekSpeech: 'Tak, gram w to codziennie!',
    olekSpeakText: 'Tak, gram w to codziennie!',
    contextPl: 'Olek też gra w tę grę! Zapytaj go o jego nazwę gracza.',
    targetPhrase: 'JAKI MASZ NICK',
    displayTarget: 'Jaki masz nick?',
    speakOnSolve: 'Jaki masz nick?',
    baseTimeSec: 10
  },
  {
    id: 'spell_3',
    olekSpeech: 'Mój nick to OlekPro! Dodasz mnie?',
    olekSpeakText: 'Mój nick to OlekPro! Dodasz mnie?',
    contextPl: 'Chcesz dodać Olka do znajomych w grze. Poproś go o jego kod gracza.',
    targetPhrase: 'DASZ ID',
    displayTarget: 'Dasz ID?',
    speakOnSolve: 'Dasz ID?',
    baseTimeSec: 10
  }
];

// Dane do minigry Match up (Jeżyk – Pole 2 Planszy 4)
export const MATCH_UP_DATA = [
  {
    id: 'm_masakra',
    word: 'Masakra!',
    defPl: 'Coś okropnego, bardzo trudnego lub złego',
    color: '#ef476f'
  },
  {
    id: 'm_sztos',
    word: 'Sztos!',
    defPl: 'Coś niesamowitego, rewelacyjnego, hit!',
    color: '#ffd166'
  },
  {
    id: 'm_spoko',
    word: 'Spoko!',
    defPl: 'W porządku, nie ma sprawy, luźna zgoda',
    color: '#06d6a0'
  },
  {
    id: 'm_przypal',
    word: 'Przypał!',
    defPl: 'Wstydliwa wpadka, niezręczna sytuacja',
    color: '#118ab2'
  }
];

// Dane do minigry Find the Match (Szczeniaczek – Pole 5 Planszy 4, 10s na odpowiedź)
export const FIND_MATCH_QUESTIONS = [
  {
    id: 'fm_1',
    promptPl: 'Nauczyciel przyłapał cię na ściąganiu na teście przed całą klasą! Co to za sytuacja?',
    correctWord: 'Przypał!',
    options: ['Przypał!', 'Sztos!', 'Spoko!', 'Masakra!']
  },
  {
    id: 'fm_2',
    promptPl: 'Nowa gra okazała się niesamowitym hitem, jest przepiękna i wciągająca!',
    correctWord: 'Sztos!',
    options: ['Sztos!', 'Masakra!', 'Przypał!', 'Spoko!']
  },
  {
    id: 'fm_3',
    promptPl: 'Całą noc uczyłeś się do sprawdzianu, a pytania były potwornie trudne i męczące!',
    correctWord: 'Masakra!',
    options: ['Masakra!', 'Sztos!', 'Spoko!', 'Przypał!']
  },
  {
    id: 'fm_4',
    promptPl: 'Kolega pyta: „Mogę pożyczyć twój długopis na jedną lekcję?”. Odpowiadasz mu ze spokojem:',
    correctWord: 'Spoko!',
    options: ['Spoko!', 'Masakra!', 'Sztos!', 'Przypał!']
  },
  {
    id: 'fm_5',
    promptPl: 'Drużyna wygrała mecz w ostatniej sekundzie po genialnym strzale z połowy boiska!',
    correctWord: 'Sztos!',
    options: ['Sztos!', 'Przypał!', 'Spoko!', 'Masakra!']
  }
];

// Pytania Quizu z Olkiem na Planszy 4 (Pole 6: 30 HP, 7 obrażeń)
export const OLEK_BOARD_4_QUIZ = {
  title: 'Rozmowa o emocjach z Olkiem',
  opponentName: 'Gejmer Olek',
  enemyMaxHp: 30,
  enemyDamage: 7,
  tanDamage: 10,
  questions: [
    {
      id: 'olek_b4_q1',
      olekSpeech: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
      olekSpeakText: 'Stary, wbiłem wczoraj najwyższą rangę w grze!',
      promptPl: 'Olek chwali się wielkim sukcesem w grze. Jak zareagujesz z entuzjazmem?',
      options: [
        { text: 'Sztos! Gratulacje!', correct: true },
        { text: 'Masakra, strasznie słabo.', correct: false },
        { text: 'Przypał, nie mów nikomu.', correct: false },
        { text: 'Nara, już idę.', correct: false }
      ]
    },
    {
      id: 'olek_b4_q2',
      olekSpeech: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
      olekSpeakText: 'A dzisiaj przegrałem 10 meczów z rzędu i spadłem na sam dół...',
      promptPl: 'Olek opowiada o fatalnej passie porażek. Jak to podsumujesz?',
      options: [
        { text: 'Masakra, współczuję ci!', correct: true },
        { text: 'Sztos, świetna robota!', correct: false },
        { text: 'Dobra, nara!', correct: false },
        { text: 'Grasz w...?', correct: false }
      ]
    },
    {
      id: 'olek_b4_q3',
      olekSpeech: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
      olekSpeakText: 'Na domiar złego zapomniałem hasła i zablokowałem profil przed turniejem!',
      promptPl: 'Co to za wstydliwa i niefortunna wpadka?',
      options: [
        { text: 'Ale przypał!', correct: true },
        { text: 'Czysty sztos!', correct: false },
        { text: 'Jaki masz nick?', correct: false },
        { text: 'Siema!', correct: false }
      ]
    }
  ]
};

// Słowa do wykreślanki (Zając – Pole 7 Planszy 4: 20 HP, 10 obrażeń, 4 słowa x 5 HP = 20 HP)
export const WORD_SEARCH_WORDS = ['MASAKRA', 'SZTOS', 'SPOKO', 'PRZYPAL'];

// Pytania do quizu z Olkiem w klasie (Plansza 5)
export const BOARD_5_OLEK_QUESTIONS = [
  {
    id: 'b5_q1',
    promptPl: 'Twój długopis przestał pisać w trakcie notowania. Jak poprosisz kolegę z ławki o pożyczenie zapasowego?',
    promptVn: 'Bút của bạn hết mực khi đang ghi bài. Bạn mượn bạn cùng bàn cây bút khác như thế nào?',
    options: [
      { textPl: '🖊️ „Olek, masz długopis?” — prośba o pożyczenie długopisu', correct: true },
      { textPl: '🚶‍♂️ „Nara!” — pożegnanie', correct: false },
      { textPl: '📖 „Która strona?” — pytanie o stronę w książce', correct: false }
    ],
    explanationPl: 'Świetnie! „Olek, masz długopis?” to naturalny sposób na zapytanie o przybory.',
    damage: 12
  },
  {
    id: 'b5_q2',
    promptPl: 'Nauczyciel mówi: „Otwórzcie podręczniki na...”, ale nie dosłyszałeś numeru. O co zapytasz Olka?',
    promptVn: 'Thầy giáo bảo mở sách nhưng bạn nghe không rõ số trang. Bạn hỏi bạn cùng bàn câu gì?',
    options: [
      { textPl: '📖 „Która strona?” — zapytanie o właściwą stronę w podręczniku', correct: true },
      { textPl: '🎮 „Grasz w...?” — pytanie o gry', correct: false },
      { textPl: '🤦‍♂️ „Przypał!” — reakcja na wpadkę', correct: false }
    ],
    explanationPl: 'Dokładnie! Krótkie pytanie „Która strona?” natychmiast wyjaśnia sprawę.',
    damage: 12
  },
  {
    id: 'b5_q3',
    promptPl: 'Olek podał Ci swój zapasowy niebieski długopis. Jak mu za to po koleżeńsku podziękujesz?',
    promptVn: 'Bạn Olek đưa cho bạn cây bút bi dự phòng. Bạn cảm ơn bạn ấy thế nào cho tự nhiên?',
    options: [
      { textPl: '🙏 „Dzięki!” — luźne i miłe podziękowanie', correct: true },
      { textPl: '🤜🤛 „Siema!” — powitanie', correct: false },
      { textPl: '😱 „Masakra!” — wyraz przerażenia', correct: false }
    ],
    explanationPl: 'Idealnie! „Dzięki!” to najpopularniejsze podziękowanie wśród uczniów.',
    damage: 12
  }
];

// Pytania do sprawdzianu z Nauczycielką (Plansza 5)
export const BOARD_5_TEACHER_QUESTIONS = [
  {
    id: 'b5_t1',
    promptPl: 'Pracujecie w parach nad trudnym zadaniem i utknąłeś. Jak grzecznie poprosisz Olka o wsparcie?',
    promptVn: 'Hai bạn đang làm bài tập nhóm nhưng bạn bị bí. Bạn nhờ Olek giúp đỡ thế nào?',
    options: [
      { textPl: '🤝 „Olek, pomóż mi, proszę.” — uprzejma prośba o pomoc', correct: true },
      { textPl: '⚡ „Masz ID?” — pytanie o profil w grze', correct: false },
      { textPl: '😴 „Dobranoc!” — pożegnanie', correct: false }
    ],
    explanationPl: 'Wspaniale! „Olek, pomóż mi, proszę.” brzmi uprzejmie i zrozumiale.',
    damage: 20
  },
  {
    id: 'b5_t2',
    promptPl: 'Nie zdążyłeś przepisać tabeli z tablicy przed jej zmazaniem. O co poprosisz sąsiada z ławki?',
    promptVn: 'Bạn chưa kịp chép xong bảng đã bị xóa. Bạn xin phép bạn cùng bàn thế nào?',
    options: [
      { textPl: '📓 „Olek, mogę zobaczyć zeszyt?” — prośba o podejrzenie notatek', correct: true },
      { textPl: '👟 „Mam sneakersy!” — pochwała butów', correct: false },
      { textPl: '🚪 „Nara!” — wyjście z sali', correct: false }
    ],
    explanationPl: 'Bardzo dobrze! „Olek, mogę zobaczyć zeszyt?” to powszechna prośba w polskiej szkole.',
    damage: 20
  }
];

// ==================== PLANSZA 6: OPINIE, EMOCJE I GUSTA (NOWE SŁOWA) ====================

// 10 tematów do Quizu Myśli (Pole 3)
export const BOARD_6_TOPICS = [
  {
    id: 'cristiano_ronaldo',
    name: 'Cristiano Ronaldo',
    image: './assets/slowka/cristiano_ronaldo.jpg',
    desc: 'Legendarny piłkarz, maszyna do zdobywania goli!'
  },
  {
    id: 'messi',
    name: 'Messi',
    image: './assets/slowka/messi.jpg',
    desc: 'Mistrz świata, genialny drybling i magia na boisku!'
  },
  {
    id: 'brawl_stars',
    name: 'Brawl Stars',
    image: './assets/slowka/brawl_stars.jpg',
    desc: 'Dynamiczne starcia brawlerów i puchary na telefonie!'
  },
  {
    id: 'roblox',
    name: 'Roblox',
    image: './assets/slowka/roblox.jpg',
    desc: 'Miliony światów i gier tworzonych przez graczy!'
  },
  {
    id: 'ramen',
    name: 'Ramen',
    image: './assets/slowka/ramen.jpg',
    desc: 'Gorący japoński bulion ze sprężystym makaronem!'
  },
  {
    id: 'pho',
    name: 'Pho',
    image: './assets/slowka/pho.jpg',
    desc: 'Tradycyjna, aromatyczna zupa wietnamska!'
  },
  {
    id: 'modne_buty',
    name: 'Modne buty',
    image: './assets/slowka/modne_buty.jpg',
    desc: 'Świeżutkie, stylowe sneakersy prosto z pudełka!'
  },
  {
    id: 'kartkowki',
    name: 'Kartkówki',
    image: './assets/slowka/kartkowki.jpg',
    desc: 'Niezapowiedziane małe sprawdziany na początku lekcji!'
  },
  {
    id: 'hejt_i_przykrosci',
    name: 'Hejt i przykrości',
    image: './assets/slowka/hejt_i_przykrosci.jpg',
    desc: 'Złośliwe docinki i niemiłe komentarze w sieci!'
  },
  {
    id: 'gotowane_warzywa',
    name: 'Gotowane warzywa bez przypraw',
    image: './assets/slowka/gotowane_warzywa.jpg',
    desc: 'Rozgotowane brokuły i marchewka bez szczypty soli!'
  }
];

// Dane do Match Up z obrazkami (Pole 2: Jeżyk)
export const BOARD_6_MATCHUP_DATA = [
  {
    id: 'b6_mu_mega',
    word: 'Mega',
    defPl: 'Coś ekstra, rewelacyjnego, na wyższym poziomie!',
    image: './assets/slowka/mega.png',
    color: '#ff006e'
  },
  {
    id: 'b6_mu_fajne',
    word: 'Fajne',
    defPl: 'Po prostu dobre, przyjemne, warte uwagi.',
    image: './assets/slowka/fajne.jpg',
    color: '#06d6a0'
  },
  {
    id: 'b6_mu_slabe',
    word: 'Słabe',
    defPl: 'Kiepskie, poniżej oczekiwań, bez rewelacji.',
    image: './assets/slowka/slabe.png',
    color: '#fb5607'
  },
  {
    id: 'b6_mu_nudne',
    word: 'Nudne',
    defPl: 'Przynudzające, bez emocji, nie warte czasu.',
    image: './assets/slowka/nudne.png',
    color: '#8338ec'
  },
  {
    id: 'b6_mu_lajki',
    word: 'Lajki',
    defPl: 'Polubienia, akceptacja, poparcie w necie!',
    image: './assets/slowka/fajne.jpg',
    color: '#3a86ff'
  },
  {
    id: 'b6_mu_hejty',
    word: 'Hejty',
    defPl: 'Złośliwe docinki i negatywne komentarze w sieci.',
    image: './assets/slowka/hejt_i_przykrosci.jpg',
    color: '#e63946'
  }
];

// Pytania od Olka (Pole 4: Quiz słowny "Lubię...")
export const BOARD_6_OLEK_QUESTIONS = [
  {
    id: 'b6_o1',
    olekSpeech: 'Lubię grać w Brawl Stars i Robloxa całymi dniami po szkole! Co o tym powiesz?',
    promptPl: 'Olek mówi z uśmiechem: „Lubię grać w Brawl Stars i Robloxa całymi dniami!”. Co najlepiej pasuje do tej pasji?',
    correctValue: 'mega',
    options: [
      { text: 'Mega! 🔥', val: 'mega', correct: true },
      { text: 'Nudne... 🥱', val: 'nudne', correct: false },
      { text: 'Słabe 👎', val: 'slabe', correct: false },
      { text: 'Hejty 💬', val: 'hejty', correct: false }
    ],
    damage: 10
  },
  {
    id: 'b6_o2',
    olekSpeech: 'Lubię gotowane warzywa bez żadnych przypraw ani sosu... chociaż są trochę mdłe.',
    promptPl: 'Olek wzdycha: „Lubię gotowane warzywa bez żadnych przypraw ani sosu...”. Jaka to opinia?',
    correctValue: 'slabe',
    options: [
      { text: 'Słabe 👎', val: 'slabe', correct: true },
      { text: 'Mega! 🔥', val: 'mega', correct: false },
      { text: 'Lajki ❤️', val: 'lajki', correct: false },
      { text: 'Fajne 👍', val: 'fajne', correct: false }
    ],
    damage: 10
  },
  {
    id: 'b6_o3',
    olekSpeech: 'Lubię nowe, wygodne sneakersy na wf! Każdy krok to czysta wygoda.',
    promptPl: 'Olek chwali swoje buty: „Lubię nowe, wygodne sneakersy!”. Twoja naturalna reakcja to:',
    correctValue: 'fajne',
    options: [
      { text: 'Fajne! 👍', val: 'fajne', correct: true },
      { text: 'Nudne 🥱', val: 'nudne', correct: false },
      { text: 'Słabe 👎', val: 'slabe', correct: false },
      { text: 'Hejty 💬', val: 'hejty', correct: false }
    ],
    damage: 10
  }
];

// ==================== WĘZŁY I ŚCIEŻKI PLANSZY 6 (OPINIE I MYŚLI) ====================

// Pula pytań dla Bossa Piłkarza z całego materiału
export const BOSS_FOOTBALLER_QUESTIONS = [
  {
    type: 'quiz',
    promptPl: 'Jak po polsku naturalnie i krótko powiesz koledze „cześć” na korytarzu?',
    options: [
      { text: 'Siema!', correct: true },
      { text: 'Dobranoc!', correct: false },
      { text: 'Do widzenia państwu!', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Co oznacza młodzieżowe słowo „sztos”?',
    options: [
      { text: 'Coś niesamowitego, genialnego!', correct: true },
      { text: 'Wstydliwa wpadka', correct: false },
      { text: 'Nudna lekcja', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Chcesz pożyczyć coś do pisania na lekcji od Olka. Co powiesz?',
    options: [
      { text: 'Olek, masz długopis?', correct: true },
      { text: 'Która strona?', correct: false },
      { text: 'Grasz w Robloxa?', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Co powiesz, gdy wydarzy się wielka wpadka lub katastrofa?',
    options: [
      { text: 'Masakra!', correct: true },
      { text: 'Spoko!', correct: false },
      { text: 'Dzięki!', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Jak określisz coś, co jest na najwyższym poziomie, po prostu ekstra?',
    options: [
      { text: 'Mega!', correct: true },
      { text: 'Nudne', correct: false },
      { text: 'Słabe', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Jak zareagujesz, gdy kumpel pożyczy Ci swój zeszyt do przepisania?',
    options: [
      { text: 'Dzięki!', correct: true },
      { text: 'Przypał!', correct: false },
      { text: 'Nara!', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Jak nazywają się złośliwe, negatywne komentarze w sieci?',
    options: [
      { text: 'Hejty', correct: true },
      { text: 'Lajki', correct: false },
      { text: 'Sneakersy', correct: false }
    ],
    damage: 25
  },
  {
    type: 'quiz',
    promptPl: 'Gdy ktoś pyta Cię o profil w grze, jak zapyta o Twój identyfikator?',
    options: [
      { text: 'Dasz ID?', correct: true },
      { text: 'Masz zeszyt?', correct: false },
      { text: 'Która strona?', correct: false }
    ],
    damage: 25
  }
];

// ==================== MIASTO - PLANSZA 1: ZAKUPY W ŻABCE / BIEDRONCE ====================

// Pula wyzwań dla Bossa Cwaniaka (Match Up, Speed Sorting, Gameshow Quiz) ze wszystkich modułów
export const CWANIAK_CHALLENGES = [
  // 1. Gameshow Quiz: Komunikacja miejska
  {
    type: 'quiz',
    prompt: 'Kupujesz bilet ulgowy w biletomacie. Jaki dokument musisz posiadać przy sobie podczas kontroli?',
    options: [
      { text: '🪪 Legitymację szkolną', correct: true },
      { text: '🥙 Ciepłego kebaba z sosem', correct: false },
      { text: '🎮 Nick z gry Roblox', correct: false }
    ],
    hint: 'Legitymacja potwierdza zniżkę 50%!'
  },
  // 2. Gameshow Quiz: Biernik przy kasie
  {
    type: 'quiz',
    prompt: 'Jesteś przy kasie w sklepie spożywczym. Jak poprawnie poprosisz o pieczywo?',
    options: [
      { text: '🥖 „Poproszę świeżą bułkę.”', correct: true },
      { text: '🥖 „Poproszę bułka.”', correct: false },
      { text: '🥖 „Poproszę z bułką.”', correct: false }
    ],
    hint: 'Biernik (kogo? co?): bułkę!'
  },
  // 3. Match Up: Zwroty i ich znaczenie
  {
    type: 'matchup',
    prompt: 'Połącz zwroty miejskie i szkolne z ich właściwym znaczeniem:',
    pairs: [
      { left: '🎟️ Bilet ulgowy', right: 'Zniżka dla ucznia z legitymacją' },
      { left: '🍽️ Na miejscu', right: 'Zjedzenie posiłku przy stoliku' },
      { left: '🔥 Siema / Elo', right: 'Luźne powitanie na korytarzu' },
      { left: '🧄 Sos czosnkowy', right: 'Łagodny, kremowy sos' }
    ]
  },
  // 4. Speed Sorting: Co gdzie pasuje?
  {
    type: 'sorting',
    prompt: 'Szybkie sortowanie: Przypisz wyrażenia do odpowiedniej kategorii!',
    categories: ['🛒 W SKLEPIE / KASIE', '🚏 W KOMUNIKACJI'],
    items: [
      { text: 'Biletomat', category: '🚏 W KOMUNIKACJI' },
      { text: 'Poproszę reklamówkę', category: '🛒 W SKLEPIE / KASIE' },
      { text: 'Legitymacja szkolna', category: '🚏 W KOMUNIKACJI' },
      { text: 'Płatność kartą lub gotówką', category: '🛒 W SKLEPIE / KASIE' }
    ]
  },
  // 5. Gameshow Quiz: Zamawianie kebaba
  {
    type: 'quiz',
    prompt: 'Kucharz pyta: „Będzie jedzone na miejscu czy na wynos?”. Chcesz zjeść w domu. Co odpowiesz?',
    options: [
      { text: '🥡 „Na wynos, poproszę do torby!”', correct: true },
      { text: '🍽️ „Na miejscu, poproszę stolik.”', correct: false },
      { text: '🤖 „Kupuję bilet 20-minutowy.”', correct: false }
    ],
    hint: 'Do domu zamawiamy na wynos!'
  },
  // 6. Match Up: Slang i emocje
  {
    type: 'matchup',
    prompt: 'Dopasuj młodzieżowy slang do jego znaczenia:',
    pairs: [
      { left: '⭐ Sztos / Mega', right: 'Coś niesamowitego i rewelacyjnego' },
      { left: '🥱 Nudne', right: 'Bez emocji, szkoda na to czasu' },
      { left: '👍 Fajne', right: 'Dobre, przyjemne, godne uwagi' },
      { left: '👎 Słabe', right: 'Poniżej oczekiwań, kiepskie' }
    ]
  },
  // 7. Gameshow Quiz: Szkolna prośba
  {
    type: 'quiz',
    prompt: 'Zapomniałeś piórnika na lekcji. Jak grzecznie poprosisz kolegę Olka o pomoc?',
    options: [
      { text: '✏️ „Olek, masz może pożyczyć długopis?”', correct: true },
      { text: '✏️ „Oddaj mi natychmiast swój długopis!”', correct: false },
      { text: '✏️ „Gdzie jest przystanek tramwajowy?”', correct: false }
    ],
    hint: 'Kulturalna koleżeńska prośba!'
  },
  // 8. Speed Sorting: Sposób spożycia posiłku
  {
    type: 'sorting',
    prompt: 'Szybkie sortowanie: Przypisz zdania do sposobu spożycia posiłku!',
    categories: ['🍽️ NA MIEJSCU', '🥡 NA WYNOS'],
    items: [
      { text: 'Zjem przy stoliku z kolegą', category: '🍽️ NA MIEJSCU' },
      { text: 'Zapakuj do papierowej torby', category: '🥡 NA WYNOS' },
      { text: 'Zabiorę do domu na obiad', category: '🥡 NA WYNOS' },
      { text: 'Poproszę na talerzyku tutaj', category: '🍽️ NA MIEJSCU' }
    ]
  }
];






// ==============================================================================
// MODUŁ 3: PRZETRWANIE NA LEKCJACH (KONTAKT Z NAUCZYCIELAMI)
// ==============================================================================

// Wyzwania dla Bossa Nauczycielki (Moduł 3)
export const MODULE_3_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Nauczycielka tłumaczy skomplikowane zadanie i mówi bardzo szybko. Jak kulturalnie poprosisz o wolniejsze tempo?',
    options: [
      { text: '🙋 „Przepraszam, czy może pani mówić trochę wolniej?”', correct: true },
      { text: '🛑 „Cicho bądź, za szybko mówisz!”', correct: false },
      { text: '⚽ „Poproszę kebaba na wynos z ostrym sosem.”', correct: false }
    ],
    hint: 'Zwrot ratunkowy: „Przepraszam, czy może pani mówić trochę wolniej?”'
  },
  {
    type: 'quiz',
    prompt: 'Nagle na lekcji poczułeś pilną potrzebę skorzystania z ubikacji. O co zapytasz nauczycielkę?',
    options: [
      { text: '🚽 „Przepraszam, czy mogę wyjść do toalety?”', correct: true },
      { text: '🚪 „Wychodzę ze szkoły, elo!”', correct: false },
      { text: '📝 „Nie mam dzisiaj piórnika ani gumki.”', correct: false }
    ],
    hint: 'Kulturalne pytanie o wyjście: „Czy mogę wyjść do toalety?”'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj przybory szkolne do ich zastosowania na lekcji:',
    pairs: [
      { left: '🖊️ Długopis', right: 'Zapisywanie notatek w zeszycie' },
      { left: '📏 Linijka', right: 'Rysowanie prostych linii na geometrii' },
      { left: '🧼 Gumka', right: 'Ścieranie ołówka i poprawianie błędów' },
      { left: '📓 Zeszyt w kratkę', right: 'Zapisywanie zadań z matematyki' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Szybkie sortowanie: Przypisz przedmioty do odpowiedniej sali lekcyjnej!',
    categories: ['🏃 SALA GIMNASTYCZNA (WF)', '📐 KLASA MATEMATYCZNA'],
    items: [
      { text: 'Piłka do siatkówki', category: '🏃 SALA GIMNASTYCZNA (WF)' },
      { text: 'Zeszyt w kratkę i linijka', category: '📐 KLASA MATEMATYCZNA' },
      { text: 'Biała koszulka i spodenki', category: '🏃 SALA GIMNASTYCZNA (WF)' },
      { text: 'Kalkulator i cyrkiel', category: '📐 KLASA MATEMATYCZNA' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Zapomniałeś odrobić pracy domowej na dzisiaj. Jak najuczciwiej powiesz o tym nauczycielce?',
    options: [
      { text: '🤝 „Bardzo przepraszam, zapomniałem zadania. Przyniosę je jutro.”', correct: true },
      { text: '🙈 „Pies zjadł mój zeszyt i uciekł do lasu!”', correct: false },
      { text: '🎟️ „Mam bilet ulgowy 20-minutowy!”', correct: false }
    ],
    hint: 'Uczciwość i kultura: „Przepraszam, zapomniałem zadania.”'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj szkolne dni tygodnia do ich kolejności:',
    pairs: [
      { left: '1️⃣ Poniedziałek', right: 'Pierwszy dzień nauki po weekendzie' },
      { left: '3️⃣ Środa', right: 'Środek szkolnego tygodnia' },
      { left: '5️⃣ Piątek', right: 'Ostatni dzień lekcji przed odpoczynkiem' },
      { left: '🔔 Dzwonek', right: 'Sygnał rozpoczęcia przerwy' }
    ]
  }
];

// Dialog Wuefisty (Moduł 3 Plansza 3)
export const WUEFISTA_DIALOG_STEPS = [
  {
    question: '„Cześć Tan! Zanim wyjdziemy na boisko – co jest najważniejsze przed grą w piłkę?” 🏃‍♂️',
    options: [
      { text: '„Porządna rozgrzewka całego ciała, żeby uniknąć kontuzji!”', correct: true },
      { text: '„Jedzenie chipsów i picie zimnej coli.”', correct: false },
      { text: '„Zapomniałem zeszytu z matematyki.”', correct: false }
    ]
  },
  {
    question: '„Świetnie! Jaki strój sportowy obowiązuje na sali gimnastycznej na WF-ie?” 👟',
    options: [
      { text: '„Biała koszulka, krótkie spodenki i buty ze jasną podeszwą.”', correct: true },
      { text: '„Gruba kurtka zimowa, czapka i szalik.”', correct: false },
      { text: '„Jeansy i skórzane buty wyjściowe.”', correct: false }
    ]
  },
  {
    question: '„Brawo! W jaki sport zespołowy gramy dzisiaj na sali?” 🏐',
    options: [
      { text: '„W siatkówkę, koszykówkę lub piłkę nożną halową!”', correct: true },
      { text: '„W gry na smartfonie pod ławką.”', correct: false },
      { text: '„W malowanie farbami plakatowymi.”', correct: false }
    ]
  }
];


// ==============================================================================
// MODUŁ 4: CIAŁO, SAMOPOCZUCIE I POTRZEBY (BEZPIECZEŃSTWO)
// ==============================================================================

// Wyzwania dla Bossa Lekarza (Moduł 4)
export const MODULE_4_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Lekarz pyta: „Dzień dobry Tan! Co ci dolega i od kiedy czujesz się gorzej?”. Jak odpowiesz?',
    options: [
      { text: '🩺 „Dzień dobry panie doktorze, od wczoraj bardzo boli mnie gardło i głowa.”', correct: true },
      { text: '⚽ „Wybiłem piłkę za ogrodzenie orlika.”', correct: false },
      { text: '🍟 „Poproszę dużą porcję frytek i sos ostry.”', correct: false }
    ],
    hint: 'Opisz precyzyjnie swoje objawy: ból gardła i głowy.'
  },
  {
    type: 'matchup',
    prompt: 'Połącz dolegliwości fizyczne z właściwym działaniem zaradczym:',
    pairs: [
      { left: '🔥 Gorączka i osłabienie', right: 'Mierzenie temperatury i wizyta u lekarza' },
      { left: '💧 Chce mi się pić', right: 'Wypicie szklanki świeżej wody' },
      { left: '🧣 Jest mi zimno', right: 'Założenie ciepłego szalika i bluzy' },
      { left: '🥱 Jestem zmęczony', right: 'Krótki odpoczynek i regenerujący sen' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Szybkie sortowanie: Przypisz wyrażenia do kategorii ZDROWIE FIZYCZNE lub EMOCJE!',
    categories: ['🩺 CIAŁO I BÓL', '🧠 EMOCJE I NASTRÓJ'],
    items: [
      { text: 'Boli mnie brzuch', category: '🩺 CIAŁO I BÓL' },
      { text: 'Jestem zły i zdenerwowany', category: '🧠 EMOCJE I NASTRÓJ' },
      { text: 'Wysoka gorączka 38°C', category: '🩺 CIAŁO I BÓL' },
      { text: 'Wesoły i spokojny', category: '🧠 EMOCJE I NASTRÓJ' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Kolega pyta cię na korytarzu: „Hej Tan, czy wszystko w porządku?”. Chcesz go uspokoić, że czujesz się dobrze. Co powiesz?',
    options: [
      { text: '👍 „Dzięki, wszystko ze mną okej! Czułem się zmęczony, ale już odpocząłem.”', correct: true },
      { text: '❌ „Nie rozumiem pytania, proszę powtórzyć na tablicy.”', correct: false },
      { text: '🚌 „Muszę skasować bilet 75-minutowy.”', correct: false }
    ],
    hint: 'Zwrot: „Wszystko ze mną okej!”'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj polskie nazwy stanów do ich wietnamskich odpowiedników:',
    pairs: [
      { left: 'Jestem głodny', right: 'Em đói bụng' },
      { left: 'Boli mnie głowa', right: 'Em bị đau đầu' },
      { left: 'Odpoczynek', right: 'Nghỉ ngơi' },
      { left: 'Gorączka', right: 'Sốt cao' }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Plansza 2: Pierwsza wizyta z dolegliwościami)
export const PIELEGNIARKA_DIALOG_STEPS = [
  {
    question: '„Dzień dobry Tan! Usiądź na fotelu. Z czym dzisiaj do mnie przychodzisz?” 👩‍⚕️',
    options: [
      { text: '„Dzień dobry! Od rana boli mnie brzuch i czuję się bardzo osłabiony.”', correct: true },
      { text: '„Chcę pograć na telefonie w Roblox.”', correct: false },
      { text: '„Kupuję bilet ulgowy za jedną monetę.”', correct: false }
    ]
  },
  {
    question: '„Rozumiem. Zmierzę ci temperaturę termometrem bezdotykowym. Co czujesz – jest ci zimno czy gorąco?” 🌡️',
    options: [
      { text: '„Jest mi na zmianę gorąco i zimno, chyba mam lekką gorączkę.”', correct: true },
      { text: '„Zapomniałem linijki na lekcję plastyki.”', correct: false },
      { text: '„Lubię jeść pizzę na cienkim cieście.”', correct: false }
    ]
  },
  {
    question: '„Termometr wskazuje 37.8°C. Wypij powoli tę szklankę wody. Zadzwonię po twoją mamę, żeby odebrała cię do domu, dobrze?” 🥛',
    options: [
      { text: '„Dziękuję bardzo pani pielęgniarce. Odpocznę chwilę na kozetce.”', correct: true },
      { text: '„Nie chcę pić, wolę biegać po korytarzu.”', correct: false },
      { text: '„Nie mam zadania domowego z matematyki.”', correct: false }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Plansza 2: Kontrola po lekach i odpoczynku)
export const PIELEGNIARKA_KONTROLA_DIALOG_STEPS = [
  {
    question: '„Jak się teraz czujesz, Tan? Czy ból brzucha i głowy trochę ustąpił po szklance wody i odpoczynku?” 👩‍⚕️',
    options: [
      { text: '„Tak, odpocząłem i czuję się już o wiele lepiej, dziękuję!”', correct: true },
      { text: '„Zamawiam frytki z keczupem na wynos.”', correct: false },
      { text: '„Wybieram język angielski w automacie.”', correct: false }
    ]
  },
  {
    question: '„Wspaniale! Zmierzmy jeszcze raz temperaturę termometrem. Wynik to równe 36.6°C – norma!” 🌡️✨',
    options: [
      { text: '„Cieszę się bardzo! Dziękuję pani pielęgniarce za troskliwą pomoc!”', correct: true },
      { text: '„Zgubiłem plecak w szatni szkolnej.”', correct: false },
      { text: '„Czy mogę dostać czerwony długopis do rysowania?”', correct: false }
    ]
  }
];

// Dialog Pielęgniarki (Moduł 4 Boss: Rejestracja w Przychodni Zdrowia przed wizytą u Doktora Lekarza)
export const PIELEGNIARKA_PRZYCHODNIA_DIALOG_STEPS = [
  {
    question: '„Dzień dobry Tan! Witaj w Przychodni Zdrowia. Czy przyszedłeś na badanie kontrolne do Doktora Lekarza?” 🩺👩‍⚕️',
    options: [
      { text: '„Dzień dobry! Tak, mam umówioną wizytę u pana doktora.”', correct: true },
      { text: '„Szukam boiska do piłki nożnej Orlik.”', correct: false },
      { text: '„Nie chcę odpowiadać na żadne pytania.”', correct: false }
    ]
  },
  {
    question: '„Świetnie! Zanim wejdziesz do gabinetu, zmierzę ci tętno i ciśnienie krwi. Podwiń proszę rękaw bluzy.” 💓',
    options: [
      { text: '„Oczywiście, proszę bardzo. Oddycham spokojnie.”', correct: true },
      { text: '„Muszę skasować bilet autobusowy.”', correct: false },
      { text: '„Zapomniałem drugiego śniadania do szkoły.”', correct: false }
    ]
  },
  {
    question: '„Wszystkie parametry masz idealne jak młody sportowiec! Doktor Lekarz już czeka na Ciebie w gabinecie. Śmiało wchodź!” 🩺⭐',
    options: [
      { text: '„Dziękuję pani pielęgniarce! Wchodzę na badanie do pana doktora.”', correct: true },
      { text: '„Boję się i uciekam na dwór.”', correct: false },
      { text: '„Czy ma pani nową grę na telefon?”', correct: false }
    ]
  }
];


// ==============================================================================
// MODUŁ 5: PASJE, TECHNOLOGIA I TOŻSAMOŚĆ
// ==============================================================================

// Wyzwania dla Bossa Instagramerki (Moduł 5)
export const MODULE_5_BOSS_CHALLENGES = [
  {
    type: 'quiz',
    prompt: 'Instagramerka wita cię w transmisji na żywo: „Hej Tan! Przedstaw się milionom naszych widzów – skąd jesteś i ile masz lat?”.',
    options: [
      { text: '⭐ „Siemanko! Nazywam się Tan, mam 13 lat, pochodzę z Wietnamu i mieszkam w Polsce!”', correct: true },
      { text: '😴 „Nudzę się i boli mnie gardło.”', correct: false },
      { text: '🎟️ „Chcę bilet 20-minutowy ulgowy.”', correct: false }
    ],
    hint: 'Autoprezentacja: imię, wiek (13 lat) oraz pochodzenie z Wietnamu i zamieszkanie w Polsce!'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj urządzenia technologiczne do ich roli w Twoim pokoju:',
    pairs: [
      { left: '💻 Komputer gamingowy', right: 'Odrabianie zadań szkolnych i granie w Brawl Stars' },
      { left: '🎧 Słuchawki z mikrofonem', right: 'Czysty dźwięk i rozmowy ze znajomymi na Discordzie' },
      { left: '🔋 Szybki Powerbank', right: 'Zapasowa energia do naładowania telefonu w drodze' },
      { left: '📡 Szybkie Wi-Fi', right: 'Błyskawiczne łącze internetowe bez zacięć' }
    ]
  },
  {
    type: 'sorting',
    prompt: 'Szybkie sortowanie: Przypisz wyrażenia do kategorii ŚWIAT PIŁKI NOŻNEJ lub SOCIAL MEDIA!',
    categories: ['⚽ PIŁKA NOŻNA', '📱 SOCIAL MEDIA & TRENDY'],
    items: [
      { text: 'Mecz i rzuty karne', category: '⚽ PIŁKA NOŻNA' },
      { text: 'Viralowe filmiki na TikToku', category: '📱 SOCIAL MEDIA & TRENDY' },
      { text: 'Najlepszy mistrz turnieju', category: '⚽ PIŁKA NOŻNA' },
      { text: 'Śmieszne memy i lajki', category: '📱 SOCIAL MEDIA & TRENDY' }
    ]
  },
  {
    type: 'quiz',
    prompt: 'Instagramerka pyta: „Jaki jest twój ulubiony japoński serial anime, o którym uwielbiasz rozmawiać z przyjaciółmi?”.',
    options: [
      { text: '🐱 „Uwielbiam anime o niebieskim kocurze Doraemonie i Dragon Ballu!”', correct: true },
      { text: '🥔 „Gotowane warzywa bez żadnych przypraw.”', correct: false },
      { text: '📏 „Plastikowa linijka szkolna 20 cm.”', correct: false }
    ],
    hint: 'Popkultura i anime: Doraemon!'
  },
  {
    type: 'matchup',
    prompt: 'Dopasuj słowa opisujące sport i trendy do ich znaczenia:',
    pairs: [
      { left: '⚡ Szybki zawodnik', right: 'Błyskawiczny piłkarz na skrzydle boiska' },
      { left: '🏆 Najlepszy mistrz', right: 'Zwycięzca i zdobywca złotego trofeum' },
      { left: '🎬 Filmiki i trendy', right: 'Krótkie wideo oglądane w wolnym czasie' },
      { left: '😂 Zabawne memy', right: 'Hity internetu poprawiające humor' }
    ]
  }
];

// Dialog Gejmera (Moduł 5 Plansza 1)
export const GEJMER_DIALOG_STEPS = [
  {
    question: '„Siemanko Tan! Jaki masz sprzęt u siebie w pokoju do grania po lekcjach?” 🎮',
    options: [
      { text: '„Mam komputer na biurku, szybkie Wi-Fi i słuchawki z mikrofonem!”', correct: true },
      { text: '„Mam tylko zeszyt w kratkę i linijkę do geometrii.”', correct: false },
      { text: '„Poproszę bilet ulgowy na tramwaj.”', correct: false }
    ]
  },
  {
    question: '„Klasa! A w co najchętniej grasz ze znajomymi ze szkoły?” 🕹️',
    options: [
      { text: '„Gramy w Brawl Stars i Robloxa, gadając przez Discorda!”', correct: true },
      { text: '„Boli mnie brzuch i muszę zmierzyć temperaturę.”', correct: false },
      { text: '„Poproszę bułkę i reklamówkę.”', correct: false }
    ]
  },
  {
    question: '„Zacnie! Co robisz, gdy bateria w padzie lub smartfonie zaczyna padać?” 🔋',
    options: [
      { text: '„Podłączam szybką ładowarkę albo podpinam pojemny powerbank!”', correct: true },
      { text: '„Wyrzucam telefon do kosza na śmieci.”', correct: false },
      { text: '„Idę do gabinetu pielęgniarki po plaster.”', correct: false }
    ]
  }
];

// Dialog Piłkarza (Moduł 5 Plansza 2)
export const PILKARZ_M5_DIALOG_STEPS = [
  {
    question: '„Siema Tan! Kto według ciebie jest najlepszym piłkarzem na świecie?” ⚽',
    options: [
      { text: '„Cristiano Ronaldo i Leo Messi – to najlepsi mistrzowie futbolu!”', correct: true },
      { text: '„Nie wiem, wolę spać na lekcji matmy.”', correct: false },
      { text: '„Sos czosnkowy i duży kebab.”', correct: false }
    ]
  },
  {
    question: '„Dokładnie! Co najbardziej podziwiasz u nowoczesnego skrzydłowego?” ⚡',
    options: [
      { text: '„Gdy jest to niezwykle szybki zawodnik z precyzyjnym dryblingiem!”', correct: true },
      { text: '„Gdy ma przy sobie legitymację szkolną i biletomat.”', correct: false },
      { text: '„Gdy zapomniał zeszytu domowego.”', correct: false }
    ]
  },
  {
    question: '„Idziemy po południu pokopać na orlik? Poćwiczymy rzuty karne!” 🥅',
    options: [
      { text: '„Jasne, biorę korki i zagramy wspaniały mecz!”', correct: true },
      { text: '„Nie mam ochoty, wolę się nudzić w kącie.”', correct: false },
      { text: '„Boli mnie głowa i chcę spać.”', correct: false }
    ]
  }
];

// Dialog Cwaniaka (Moduł 5 Plansza 2)
export const CWANIAK_M5_DIALOG_STEPS = [
  {
    question: '„Yo Tan! Widziałeś wczorajszy viralowy filmik, który ma już miliony lajków?” 🕶️',
    options: [
      { text: '„Pewnie, ten filmik i te memy są po prostu mega sztos!”', correct: true },
      { text: '„Nie oglądam niczego, nie mam prądu w domu.”', correct: false },
      { text: '„Poproszę o powtórzenie polecenia, proszę pani.”', correct: false }
    ]
  },
  {
    question: '„A kojarzysz kultowe anime z niebieskim kotem z przyszłości – Doraemona?” 🐱',
    options: [
      { text: '„Jasne, uwielbiam Doraemona i jego niezwykłe gadżety!”', correct: true },
      { text: '„Nigdy nie słyszałem o żadnym anime ani filmikach.”', correct: false },
      { text: '„Zapomniałem podręcznika do plastyki.”', correct: false }
    ]
  },
  {
    question: '„Trzeba być na bieżąco z trendami i mieć swój własny styl, co nie młody?” 📱',
    options: [
      { text: '„Zgadza się! Wiem kim jestem, mam swoje pasje i cieszę się życiem!”', correct: true },
      { text: '„Wszystko jest nudne i słabe.”', correct: false },
      { text: '„Jest mi zimno i chcę do domu.”', correct: false }
    ]
  }
];
