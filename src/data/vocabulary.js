// Słownictwo, talie kart i scenariusze kół fortuny

export * from './boardNodes.js';
export * from './shopItems.js';
export * from './dialogSteps.js';

// Wyznaczanie siły ataku bohatera (Tan) niezależnie od przeciwnika:
// Bazowy atak (5) + bonus za poziom (+2 za każdy poziom powyżej 1) + bonusy z ekwipunku i perków
export function getPlayerDamage(player) {
  if (!player) return 5;
  if (typeof player === 'number') return player;
  const base = player.baseDamage || 5;
  const levelBonus = Math.max(0, ((player.level || 1) - 1) * 2);
  const itemBonus = player.bonusDamage || 0;
  return base + levelBonus + itemBonus;
}

export const SLANG_WORDS = [
  {
    id: 'siema',
    word: 'Siema!',
    cleanWord: 'Siema',
    vnWord: 'Chào bạn!',
    phonetic: '[Śe-ma] • wymowa: Xê-ma',
    category: 'Powitanie',
    categoryVn: 'Lời chào',
    emoji: '👋',
    color: '#ff6b6b',
    plMeaning: 'Powitanie kolegi lub koleżanki, gdy spotykacie się na szkolnym korytarzu.',
    vnMeaning: 'Chào bạn! — Lời chào tự nhiên nhất khi gặp bạn bè ở hành lang trường.',
    balloonDefPl: 'Powitanie kolegi przy spotkaniu na korytarzu',
    balloonDefVn: 'Chào bạn! — Lời chào khi mới gặp bạn bè ở trường',
    examplePl: '— Siema, Tan! Wchodzisz do szatni?\n— Siema!',
    exampleVn: '— Chào Tan! Cậu vào phòng thay đồ à?\n— Chào cậu!',
    tip: 'Używaj na początku spotkania z rówieśnikami. (Dùng khi bắt đầu gặp gỡ bạn bè cùng trang lứa).'
  },
  {
    id: 'elo',
    word: 'Elo!',
    cleanWord: 'Elo',
    vnWord: 'Chào nhé!',
    phonetic: '[E-lo] • wymowa: Ê-lô',
    category: 'Powitanie',
    categoryVn: 'Lời chào',
    emoji: '🤜🤛',
    color: '#4ecdc4',
    plMeaning: 'Luźne, koleżeńskie powitanie rówieśników na początku rozmowy.',
    vnMeaning: 'Chào nhé! — Cách chào trẻ trung, năng động giữa các bạn thiếu niên.',
    balloonDefPl: 'Luźne, koleżeńskie powitanie rówieśników',
    balloonDefVn: 'Chào nhé! — Cách chào trẻ trung, thân mật giữa bạn bè',
    examplePl: '— Elo! Gramy dzisiaj w piłkę?\n— Elo, pewnie!',
    exampleVn: '— Chào nhé! Hôm nay đá bóng không?\n— Chào, tất nhiên rồi!',
    tip: 'Bardzo częste powitanie wśród nastolatków w szatni i na boisku. (Rất phổ biến ở phòng thay đồ và sân trường).'
  },
  {
    id: 'nara',
    word: 'Nara!',
    cleanWord: 'Nara',
    vnWord: 'Tạm biệt nhé!',
    phonetic: '[Na-ra] • wymowa: Na-ra',
    category: 'Pożegnanie',
    categoryVn: 'Lời tạm biệt',
    emoji: '🚶‍♂️💨',
    color: '#ffbe0b',
    plMeaning: 'Pożegnanie z kolegami, gdy kończycie rozmowę i idziecie na lekcję lub do domu.',
    vnMeaning: 'Tạm biệt nhé! Hẹn gặp lại! — Nói khi kết thúc cuộc trò chuyện hoặc khi tan học ra về.',
    balloonDefPl: 'Pożegnanie z kolegą, gdy odchodzisz lub wracasz do domu',
    balloonDefVn: 'Tạm biệt nhé! — Nói khi chia tay bạn để đi học hoặc về nhà',
    examplePl: '— Idę już na matematykę. Nara!\n— Nara, do jutra!',
    exampleVn: '— Tớ đi học Toán đây. Tạm biệt nhé!\n— Tạm biệt, hẹn mai gặp!',
    tip: 'Mówimy wyłącznie na koniec spotkania, przy rozstaniu. (Chỉ dùng khi tạm biệt, lúc sắp rời đi).'
  },
  {
    id: 'cotam',
    word: 'Co tam?',
    cleanWord: 'Co tam?',
    vnWord: 'Có gì mới không?',
    phonetic: '[Tso tam?] • wymowa: Xô tam?',
    category: 'Pytanie',
    categoryVn: 'Câu hỏi thăm',
    emoji: '🤔💬',
    color: '#8338ec',
    plMeaning: 'Pytanie zadawane koledze po powitaniu, aby dowiedzieć się, co u niego nowego.',
    vnMeaning: 'Có gì mới không? / Dạo này thế nào? — Câu hỏi thăm bạn bè ngay sau khi chào.',
    balloonDefPl: 'Pytanie do kolegi o to, co u niego nowego',
    balloonDefVn: 'Có gì mới không? / Thế nào rồi? — Câu hỏi thăm bạn bè',
    examplePl: '— Siema Tan! Co tam?\n— Spoko!',
    exampleVn: '— Chào Tan! Có gì mới không?\n— Mọi thứ đều ổn!',
    tip: 'Najczęściej łączymy powitanie z pytaniem: „Siema, co tam?” (Chào cậu, có gì mới không?).'
  },
  {
    id: 'spoko',
    word: 'Spoko!',
    cleanWord: 'Spoko',
    vnWord: 'Ổn cả!',
    phonetic: '[Spo-ko] • wymowa: Xpô-kô',
    category: 'Odpowiedź',
    categoryVn: 'Câu trả lời',
    emoji: '😎👍',
    color: '#06d6a0',
    plMeaning: 'Pozytywna odpowiedź oznaczająca, że wszystko jest w porządku i dobrze Ci idzie.',
    vnMeaning: 'Ổn cả! / Rất tốt! — Câu trả lời cho biết mọi việc của bạn đều tốt đẹp.',
    balloonDefPl: 'Odpowiedź oznaczająca, że wszystko jest w porządku',
    balloonDefVn: 'Ổn cả! / Mọi thứ đều tốt! — Câu trả lời khi bạn bè hỏi thăm',
    examplePl: '— Co tam u ciebie?\n— Spoko! Zaraz mamy WF.',
    exampleVn: '— Cậu thế nào rồi?\n— Ổn cả! Sắp tới tiết Thể dục rồi.',
    tip: 'Naturalna, krótka odpowiedź na pytanie „Co tam?”. (Câu trả lời ngắn gọn, tự nhiên nhất cho "Co tam?").'
  },
  {
    id: 'hejka',
    word: 'Hejka!',
    cleanWord: 'Hejka',
    vnWord: 'Chào cậu!',
    phonetic: '[Hej-ka] • wymowa: Hây-ka',
    category: 'Powitanie',
    categoryVn: 'Lời chào',
    emoji: '😊✨',
    color: '#ff006e',
    plMeaning: 'Sympatyczne, radosne powitanie znajomych z klasy.',
    vnMeaning: 'Chào cậu! — Lời chào thân thiện, vui vẻ khi gặp bạn cùng lớp.',
    balloonDefPl: 'Sympatyczne i wesołe powitanie znajomych z klasy',
    balloonDefVn: 'Chào cậu! — Lời chào thân thiện, vui vẻ khi gặp bạn',
    examplePl: '— Hejka! Siadasz z nami na ławce?\n— Hejka! Chętnie!',
    exampleVn: '— Chào cậu! Ngồi ghế dài với tụi tớ không?\n— Chào cậu! Có chứ!',
    tip: 'Brzmi bardzo ciepło i przyjaźnie. (Nghe rất ấm áp và thân thiện).'
  }
];

// Pytania i scenariusze do Koła Fortuny (Spin the Wheel)
export const WHEEL_SCENARIOS = [
  {
    id: 'w_siema',
    sliceLabel: '👋 SIEMA!',
    sliceColor: '#ff595e',
    badge: 'POWITANIE • LỜI CHÀO',
    speakText: 'Siema!',
    options: [
      {
        textPl: '👋 Powitanie kolegi, gdy spotykamy się na szkolnym korytarzu',
        textVn: 'Chào bạn! — Dùng khi mới gặp bạn bè ở hành lang trường',
        correct: true
      },
      {
        textPl: '🚶‍♂️ Pożegnanie, gdy wychodzimy ze szkoły po lekcjach',
        textVn: 'Tạm biệt! — Dùng khi tan học đi về nhà',
        correct: false
      },
      {
        textPl: '🍎 Prośba o pożyczenie zeszytu na lekcji',
        textVn: 'Mượn vở ghi bài trong giờ học',
        correct: false
      }
    ],
    explanationPl: 'Brawo! „Siema!” to naturalne powitanie kolegów przy spotkaniu!',
    explanationVn: 'Tuyệt vời! "Siema!" là lời chào tự nhiên nhất khi gặp bạn bè!'
  },
  {
    id: 'w_nara',
    sliceLabel: '🚶 NARA!',
    sliceColor: '#ffca3a',
    badge: 'POŻEGNANIE • LỜI TẠM BIỆT',
    speakText: 'Nara!',
    options: [
      {
        textPl: '🚶‍♂️💨 Pożegnanie z kolegami, gdy odchodzimy lub idziemy do domu',
        textVn: 'Tạm biệt nhé! Hẹn gặp lại! — Nói khi rời đi hoặc ra về',
        correct: true
      },
      {
        textPl: '👋 Powitanie rano po wejściu do szatni',
        textVn: 'Lời chào buổi sáng khi mới bước vào phòng thay đồ',
        correct: false
      },
      {
        textPl: '❓ Pytanie o drogę do sali gimnastycznej',
        textVn: 'Hỏi đường đến phòng tập thể dục',
        correct: false
      }
    ],
    explanationPl: 'Super! „Nara!” mówimy, gdy żegnamy się z kolegami!',
    explanationVn: 'Chuẩn luôn! "Nara!" dùng để chào tạm biệt bạn bè khi chia tay!'
  },
  {
    id: 'w_cotam',
    sliceLabel: '🤔 CO TAM?',
    sliceColor: '#8ac926',
    badge: 'PYTANIE • CÂU HỎI THĂM',
    speakText: 'Co tam?',
    options: [
      {
        textPl: '🤔💬 Pyta, co u Ciebie nowego i jak Ci mija dzień',
        textVn: 'Hỏi thăm: "Có gì mới không? / Dạo này cậu thế nào?"',
        correct: true
      },
      {
        textPl: '⏰ Pyta, o której godzinie zaczyna się przerwa',
        textVn: 'Hỏi xem mấy giờ thì đến giờ ra chơi',
        correct: false
      },
      {
        textPl: '👟 Pyta, gdzie zostawiłeś buty na zmianę',
        textVn: 'Hỏi xem cậu để giày thay ở đâu',
        correct: false
      }
    ],
    explanationPl: 'Ekstra! „Co tam?” to koleżeńskie pytanie o to, co u Ciebie nowego.',
    explanationVn: 'Chính xác! "Co tam?" nghĩa là "Có gì mới không? / Mọi chuyện thế nào?".'
  },
  {
    id: 'w_elo',
    sliceLabel: '🤜🤛 ELO!',
    sliceColor: '#1982c4',
    badge: 'POWITANIE • LỜI CHÀO',
    speakText: 'Elo!',
    options: [
      {
        textPl: '🤜🤛 „Elo!” lub „Siema!” — powitanie rówieśników',
        textVn: '"Elo!" hoặc "Siema!" — Lời chào bạn bè cùng trang lứa',
        correct: true
      },
      {
        textPl: '🚶‍♂️ „Nara!” — pożegnanie przed wyjściem',
        textVn: '"Nara!" — Lời chào tạm biệt khi ra về',
        correct: false
      },
      {
        textPl: '😴 „Dobranoc!” — pożegnanie przed snem',
        textVn: '"Dobranoc!" — Chúc ngủ ngon',
        correct: false
      }
    ],
    explanationPl: 'Dokładnie! Na powitanie mówimy „Elo!” albo „Siema!”.',
    explanationVn: 'Đúng rồi! Khi mới gặp bạn bè thì nói "Elo!" hoặc "Siema!".'
  },
  {
    id: 'w_spoko',
    sliceLabel: '😎 SPOKO!',
    sliceColor: '#6a4c93',
    badge: 'ODPOWIEDŹ • CÂU TRẢ LỜI',
    speakText: 'Spoko!',
    options: [
      {
        textPl: '😎👍 „Spoko!” — u mnie wszystko w porządku',
        textVn: '"Spoko!" — Mọi thứ đều ổn cả / Rất tốt!',
        correct: true
      },
      {
        textPl: '🚶‍♂️ „Nara!” — już wychodzę do domu',
        textVn: '"Nara!" — Tạm biệt nhé',
        correct: false
      },
      {
        textPl: '❓ „Co tam?” — powtórzę tylko pytanie bez odpowiedzi',
        textVn: 'Chỉ lặp lại câu hỏi mà không trả lời',
        correct: false
      }
    ],
    explanationPl: 'Świetnie! Na pytanie „Co tam?” nastolatkowie najczęściej odpowiadają „Spoko!”.',
    explanationVn: 'Quá chuẩn! Khi bạn bè hỏi "Co tam?", câu trả lời tự nhiên nhất là "Spoko!" (Ổn cả!).'
  }
];

// 3 nowe karty wprowadzane w okienku powitalnym przed startem Planszy 3
export const BOARD_3_WORDS = [
  {
    id: 'grasz_w',
    word: 'Grasz w...?',
    cleanWord: 'Grasz w',
    vnWord: 'Cậu có chơi ... không?',
    phonetic: '[Grasz w...?] • wymowa: Grash v...',
    category: 'Gry i Hobby',
    categoryVn: 'Trò chơi & Sở thích',
    emoji: '🎮',
    color: '#3a86ff',
    plMeaning: 'Pytanie do kolegi, czy gra w konkretną grę (np. „Grasz w Minecraft?”, „Grasz w Roblox?”).',
    vnMeaning: 'Cậu có chơi [tên game] không? — Câu hỏi để rủ bạn chơi chung hoặc tìm game cả hai cùng thích.',
    balloonDefPl: 'Pytanie, czy kolega gra w daną grę',
    balloonDefVn: 'Cậu có chơi ... không?',
    examplePl: '— Grasz w Roblox?\n— Pewnie, codziennie!',
    exampleVn: '— Cậu có chơi Roblox không?\n— Có chứ, ngày nào cũng chơi!',
    tip: 'Po „Grasz w...” wystarczy podać nazwę ulubionej gry!'
  },
  {
    id: 'jaki_masz_nick',
    word: 'Jaki masz nick?',
    cleanWord: 'Jaki masz nick?',
    vnWord: 'Nick trong game của cậu là gì?',
    phonetic: '[Ja-ki masz nik?] • wymowa: Ya-ki mash nik?',
    category: 'Gry i Hobby',
    categoryVn: 'Trò chơi & Sở thích',
    emoji: '🏷️',
    color: '#ff9f1c',
    plMeaning: 'Pytanie o nazwę gracza (nick) w grze, żebyście mogli znaleźć swoje profile.',
    vnMeaning: 'Tên nhân vật / tài khoản (nick) của cậu là gì? — Hỏi tên trong game để tìm nhau.',
    balloonDefPl: 'Pytanie o nazwę gracza w grze',
    balloonDefVn: 'Nick trong game của cậu là gì?',
    examplePl: '— Jaki masz nick?\n— Mój nick to OlekPro!',
    exampleVn: '— Nick của cậu là gì?\n— Nick của tớ là OlekPro!',
    tip: '„Nick” wymawiamy krótko jako [nik].'
  },
  {
    id: 'dasz_id',
    word: 'Dasz ID?',
    cleanWord: 'Dasz ID?',
    vnWord: 'Cho tớ xin ID nhé?',
    phonetic: '[Dasz aj-di?] • wymowa: Dash ai-đi?',
    category: 'Gry i Hobby',
    categoryVn: 'Trò chơi & Sở thích',
    emoji: '🆔',
    color: '#06d6a0',
    plMeaning: 'Prośba o podanie kodu lub numeru gracza (ID), aby zaprosić kolegę do znajomych.',
    vnMeaning: 'Cho tớ xin mã ID được không? — Xin mã số người chơi để kết bạn trong game.',
    balloonDefPl: 'Prośba o kod gracza, aby dodać do znajomych',
    balloonDefVn: 'Cho tớ xin mã ID để kết bạn nhé?',
    examplePl: '— Dodam cię do znajomych. Dasz ID?\n— Jasne, już wysyłam!',
    exampleVn: '— Tớ kết bạn nhé. Cho tớ xin ID?\n— Ok, gửi liền đây!',
    tip: 'Skrót „ID” czytamy po angielsku: [aj-di].'
  }
];

// Scenariusze Spin the Wheel dla Kotka Pomocnika na Planszy 3 (Pole 2)
export const BOARD_3_WHEEL_SCENARIOS = [
  {
    id: 'b3_w_grasz',
    sliceLabel: '🎮 GRASZ W...?',
    sliceColor: '#3a86ff',
    badge: 'GRY I HOBBY',
    speakText: 'Grasz w Roblox?',
    options: [
      {
        textPl: 'bạn đang chơi...?',
        correct: true
      },
      {
        textPl: 'bạn sống ở...?',
        correct: false
      },
      {
        textPl: 'bạn chạy ở...?',
        correct: false
      }
    ],
    explanationPl: 'Brawo! „Grasz w...?” to po wietnamsku: bạn đang chơi...?'
  },
  {
    id: 'b3_w_nick',
    sliceLabel: '🏷️ JAKI MASZ NICK?',
    sliceColor: '#ff9f1c',
    badge: 'PROFIL GRACZA',
    speakText: 'Jaki masz nick?',
    options: [
      {
        textPl: 'tên tài khoản của bạn là gì?',
        correct: true
      },
      {
        textPl: 'bạn bao nhiêu tuổi?',
        correct: false
      },
      {
        textPl: 'bạn sống ở đâu?',
        correct: false
      }
    ],
    explanationPl: 'Super! „Jaki masz nick?” to po wietnamsku: tên tài khoản của bạn là gì?'
  },
  {
    id: 'b3_w_id',
    sliceLabel: '🆔 DASZ ID?',
    sliceColor: '#06d6a0',
    badge: 'ZNAJOMI W GRZE',
    speakText: 'Dasz ID?',
    options: [
      {
        textPl: 'cho mình xin ID của bạn nhé?',
        correct: true
      },
      {
        textPl: 'bạn có bút không?',
        correct: false
      },
      {
        textPl: 'bạn đói bụng chưa?',
        correct: false
      }
    ],
    explanationPl: 'Ekstra! „Dasz ID?” to po wietnamsku: cho mình xin mã ID nhé!'
  }
];

// 4 nowe karty wprowadzane w okienku powitalnym przed startem Planszy 4
export const BOARD_4_WORDS = [
  {
    id: 'masakra',
    word: 'Masakra!',
    cleanWord: 'Masakra',
    vnWord: 'Kinh khủng! / Thảm họa!',
    phonetic: '[Ma-sa-kra] • wymowa: Ma-sa-kra',
    category: 'Slang i Emocje',
    categoryVn: 'Cảm xúc & Tiếng lóng',
    emoji: '😱',
    color: '#ef476f',
    plMeaning: 'Okropność, coś bardzo trudnego, złego lub męczącego (np. trudny sprawdzian).',
    vnMeaning: 'Kinh khủng! / Thảm họa! — Nói khi gặp điều gì đó rất tồi tệ, khó khăn hoặc mệt mỏi.',
    balloonDefPl: 'Coś bardzo złego, trudnego lub okropnego',
    balloonDefVn: 'Kinh khủng! / Thảm họa!',
    examplePl: '— Jak poszedł sprawdzian?\n— Masakra, nic nie umiałem!',
    exampleVn: '— Bài kiểm tra thế nào?\n— Kinh khủng, tớ chẳng biết làm gì cả!',
    tip: 'Używaj, gdy chcesz wyrazić, że coś poszło bardzo źle.'
  },
  {
    id: 'sztos',
    word: 'Sztos!',
    cleanWord: 'Sztos',
    vnWord: 'Đỉnh của chóp! / Tuyệt vời!',
    phonetic: '[Sztos] • wymowa: Shtos',
    category: 'Slang i Emocje',
    categoryVn: 'Cảm xúc & Tiếng lóng',
    emoji: '🔥',
    color: '#ffd166',
    plMeaning: 'Coś niesamowitego, rewelacyjnego, absolutny hit!',
    vnMeaning: 'Đỉnh của chóp! / Tuyệt vời! — Dùng khi một thứ gì đó cực kỳ hay, xuất sắc.',
    balloonDefPl: 'Coś rewelacyjnego i wspaniałego, hit!',
    balloonDefVn: 'Tuyệt phẩm / Đỉnh của chóp!',
    examplePl: '— Widziałeś tę nową grę?\n— Tak, totalny sztos!',
    exampleVn: '— Cậu thấy game mới chưa?\n— Rồi, đỉnh chóp luôn!',
    tip: '„Sztos” to jedno z najpopularniejszych młodzieżowych słów na coś super!'
  },
  {
    id: 'spoko',
    word: 'Spoko!',
    cleanWord: 'Spoko',
    vnWord: 'Ổn mà! / Không sao đâu!',
    phonetic: '[Spo-ko] • wymowa: Xpô-kô',
    category: 'Odpowiedź',
    categoryVn: 'Câu trả lời',
    emoji: '😎',
    color: '#06d6a0',
    plMeaning: 'W porządku, nie ma sprawy, luźna zgoda lub uspokojenie sytuacji.',
    vnMeaning: 'Ổn mà! / Không sao đâu! — Thể hiện sự đồng ý thoải mái hoặc mọi việc đều tốt.',
    balloonDefPl: 'W porządku, nie ma problemu, zgoda',
    balloonDefVn: 'Ổn cả / Không sao đâu!',
    examplePl: '— Dzięki za pomoc z zadaniem!\n— Spoko, nie ma sprawy!',
    exampleVn: '— Cảm ơn cậu đã giúp làm bài tập!\n— Ổn mà, không có gì!',
    tip: 'Krótka, luźna odpowiedź na podziękowanie lub pytanie, czy wszystko gra.'
  },
  {
    id: 'przypal',
    word: 'Przypał!',
    cleanWord: 'Przypał',
    vnWord: 'Quê xệ! / Tình huống khó xử',
    phonetic: '[Pshy-pał] • wymowa: Pshy-pao',
    category: 'Slang i Emocje',
    categoryVn: 'Cảm xúc & Tiếng lóng',
    emoji: '🤦‍♂️',
    color: '#118ab2',
    plMeaning: 'Wstydliwa wpadka, niezręczna lub kłopotliwa sytuacja przed innymi.',
    vnMeaning: 'Quê xệ! / Tình huống xấu hổ, ngại ngùng trước mặt người khác.',
    balloonDefPl: 'Wstydliwa wpadka lub kłopotliwa sytuacja',
    balloonDefVn: 'Tình huống xấu hổ, quê xệ',
    examplePl: '— Nauczyciel usłyszał mój telefon na lekcji!\n— Ale przypał!',
    exampleVn: '— Thầy giáo nghe thấy chuông điện thoại trong lớp!\n— Quê xệ thật!',
    tip: 'Mówimy, gdy ktoś zrobił gafę lub wpadł w tarapaty.'
  }
];

// ==================== SŁOWA NA PLANSZĘ 5 (LEKCJA W KLASIE – PROŚBY I POMOC) ====================
export const BOARD_5_WORDS = [
  {
    id: 'b5_dlugopis',
    word: 'Olek, masz długopis?',
    cleanWord: 'Olek, masz długopis?',
    phonetic: '[o-lek masz dwoo-go-pis]',
    emoji: '🖊️',
    plMeaning: 'Zapytanie kolegi z ławki o pożyczenie długopisu.',
    vnMeaning: 'Hỏi mượn bạn cùng bàn một cây bút bi.',
    category: 'Prośba w klasie',
    categoryVn: 'Nhờ vả trong lớp',
    examplePl: '„Olek, masz długopis? Mój przestał pisać!”',
    exampleVn: '"Olek, cậu có bút bi không? Bút của tớ hết mực rồi!"',
    color: '#3a86ff'
  },
  {
    id: 'b5_strona',
    word: 'Która strona?',
    cleanWord: 'Która strona?',
    phonetic: '[ktoo-ra stro-na]',
    emoji: '📖',
    plMeaning: 'Pytanie do sąsiada z ławki, na której stronie podręcznika teraz jesteśmy.',
    vnMeaning: 'Hỏi bạn xem cả lớp đang học trang nào trong sách.',
    category: 'Pytanie na lekcji',
    categoryVn: 'Hỏi trong giờ học',
    examplePl: '„Nauczyciel kazał otworzyć książki. Która strona?”',
    exampleVn: '"Thầy bảo mở sách ra rồi. Trang nào thế cậu?"',
    color: '#ff006e'
  },
  {
    id: 'b5_pomoz',
    word: 'Olek, pomóż mi, proszę.',
    cleanWord: 'Olek, pomóż mi, proszę.',
    phonetic: '[o-lek po-moozh mi pro-she]',
    emoji: '🤝',
    plMeaning: 'Uprzejma prośba o pomoc w trudnym zadaniu lub poleceniu.',
    vnMeaning: 'Lời nhờ bạn giúp đỡ bài tập một cách lịch sự.',
    category: 'Prośba o pomoc',
    categoryVn: 'Nhờ giúp đỡ',
    examplePl: '„Nie rozumiem tego zadania. Olek, pomóż mi, proszę!”',
    exampleVn: '"Tớ chưa hiểu bài tập này. Olek, giúp tớ với nhé!"',
    color: '#8338ec'
  },
  {
    id: 'b5_zeszyt',
    word: 'Olek, mogę zobaczyć zeszyt?',
    cleanWord: 'Olek, mogę zobaczyć zeszyt?',
    phonetic: '[o-lek mo-ge zo-ba-chych ze-shyt]',
    emoji: '📓',
    plMeaning: 'Pytanie o możliwość podejrzenia notatek lub sprawdzenia rozwiązania.',
    vnMeaning: 'Xin phép bạn cho xem nhờ vở ghi bài hoặc lời giải.',
    category: 'Pożyczenie notatek',
    categoryVn: 'Xem vở ghi chép',
    examplePl: '„Nie zdążyłem przepisać z tablicy. Olek, mogę zobaczyć zeszyt?”',
    exampleVn: '"Tớ chép bảng chưa kịp. Olek, cho tớ xem nhờ vở được không?"',
    color: '#fb5607'
  },
  {
    id: 'b5_dzieki',
    word: 'Dzięki!',
    cleanWord: 'Dzięki!',
    phonetic: '[dzien-kee]',
    emoji: '🙏',
    plMeaning: 'Naturalne, koleżeńskie podziękowanie za pomoc lub pożyczoną rzecz.',
    vnMeaning: 'Lời cảm ơn ngắn gọn, thân thiết giữa bạn bè.',
    category: 'Podziękowanie',
    categoryVn: 'Lời cảm ơn',
    examplePl: '„Oddaję długopis. Dzięki wielkie!”',
    exampleVn: '"Tớ trả lại bút nè. Cảm ơn cậu nhiều nhé!"',
    color: '#06d6a0'
  }
];

export const BOARD_6_WORDS = [
  {
    id: 'b6_mega',
    word: 'Mega',
    cleanWord: 'Mega',
    phonetic: '[me-ga]',
    emoji: '🔥',
    image: './assets/slowka/mega.png',
    plMeaning: 'Coś ekstra, rewelacyjnego, na wyższym poziomie.',
    vnMeaning: 'Cực đỉnh, tuyệt vời, trên cả mong đợi.',
    category: 'Opinie i emocje',
    categoryVn: 'Đánh giá & cảm xúc',
    examplePl: '„Ten nowy mecz był po prostu mega!”',
    exampleVn: '"Trận đấu mới này thực sự cực đỉnh!"',
    color: '#ff006e'
  },
  {
    id: 'b6_fajne',
    word: 'Fajne',
    cleanWord: 'Fajne',
    phonetic: '[fai-neh]',
    emoji: '👍',
    image: './assets/slowka/fajne.jpg',
    plMeaning: 'Po prostu dobre, przyjemne, warte uwagi.',
    vnMeaning: 'Hay, thú vị, đáng xem, dễ chịu.',
    category: 'Opinie i emocje',
    categoryVn: 'Đánh giá & cảm xúc',
    examplePl: '„To całkiem fajne buty na co dzień.”',
    exampleVn: '"Đôi giày này đi hàng ngày khá là ổn đấy."',
    color: '#06d6a0'
  },
  {
    id: 'b6_slabe',
    word: 'Słabe',
    cleanWord: 'Słabe',
    phonetic: '[swa-beh]',
    emoji: '👎',
    image: './assets/slowka/slabe.png',
    plMeaning: 'Kiepskie, poniżej oczekiwań, bez rewelacji.',
    vnMeaning: 'Dở, kém cỏi, không như kỳ vọng.',
    category: 'Opinie i emocje',
    categoryVn: 'Đánh giá & cảm xúc',
    examplePl: '„Ten film był naprawdę słaby, nudziłem się.”',
    exampleVn: '"Phim này dở thật sự, xem chán ngắt."',
    color: '#fb5607'
  },
  {
    id: 'b6_nudne',
    word: 'Nudne',
    cleanWord: 'Nudne',
    phonetic: '[nood-neh]',
    emoji: '🥱',
    image: './assets/slowka/nudne.png',
    plMeaning: 'Przynudzające, bez emocji, nie warte czasu.',
    vnMeaning: 'Nhàm chán, tẻ nhạt, mất thì giờ.',
    category: 'Opinie i emocje',
    categoryVn: 'Đánh giá & cảm xúc',
    examplePl: '„Długie czekanie w kolejce jest strasznie nudne.”',
    exampleVn: '"Ngồi chờ xếp hàng lâu chán chết đi được."',
    color: '#8338ec'
  },
  {
    id: 'b6_lajki',
    word: 'Lajki',
    cleanWord: 'Lajki',
    phonetic: '[lai-kee]',
    emoji: '❤️',
    image: './assets/slowka/fajne.jpg',
    plMeaning: 'Polubienia, akceptacja, poparcie w internecie i życiu.',
    vnMeaning: 'Lượt thích, sự ủng hộ, đồng tình trên mạng.',
    category: 'Internet i relacje',
    categoryVn: 'Mạng xã hội',
    examplePl: '„Zostaw lajka pod tym super filmikiem!”',
    exampleVn: '"Hãy để lại một lượt like dưới video siêu đỉnh này nhé!"',
    color: '#3a86ff'
  },
  {
    id: 'b6_hejty',
    word: 'Hejty',
    cleanWord: 'Hejty',
    phonetic: '[khey-ty]',
    emoji: '💬',
    image: './assets/slowka/hejt_i_przykrosci.jpg',
    plMeaning: 'Złośliwe, negatywne komentarze, nienawiść i docinki.',
    vnMeaning: 'Lời lẽ thù ghét, bình luận tiêu cực, ác ý.',
    category: 'Internet i relacje',
    categoryVn: 'Mạng xã hội',
    examplePl: '„Nie przejmuj się hejtem w komentarzach.”',
    exampleVn: '"Đừng bận tâm đến những bình luận ác ý trên mạng."',
    color: '#e63946'
  }
];

export const CITY_1_WORDS = [
  {
    id: 'c1_reklamowka',
    word: 'reklamówka (torba)',
    cleanWord: 'reklamówka',
    phonetic: '[re-kla-muf-ka]',
    emoji: '🛍️',
    plMeaning: 'Torba foliowa lub papierowa na zakupy przy kasie (biernik: reklamówkę).',
    vnMeaning: 'Túi ni lông / túi mua sắm đựng đồ tại quầy thu ngân.',
    category: 'Zakupy',
    categoryVn: 'Mua sắm',
    examplePl: '„Czy potrzebna będzie reklamówka? — Tak, poproszę reklamówkę.”',
    exampleVn: '"Cháu có cần túi nilon không? — Dạ vâng, cho cháu xin một chiếc túi ạ."',
    color: '#06d6a0'
  },
  {
    id: 'c1_bulka',
    word: 'bułka (bułkę)',
    cleanWord: 'bułkę',
    phonetic: '[boow-ka / boow-keh]',
    emoji: '🥖',
    image: './assets/slowka/bulka.jpg',
    plMeaning: 'Świeże pieczywo śniadaniowe (biernik: poproszę bułkę).',
    vnMeaning: 'Bánh mì nhỏ (thể đối cách: poproszę bułkę - cho cháu xin bánh mì).',
    category: 'Produkty',
    categoryVn: 'Sản phẩm',
    examplePl: '„Poproszę świeżą bułkę pszenną.”',
    exampleVn: '"Cho cháu xin một chiếc bánh mì tươi ạ."',
    color: '#ffd166'
  },
  {
    id: 'c1_woda',
    word: 'woda (wodę)',
    cleanWord: 'wodę',
    phonetic: '[vo-da / vo-deh]',
    emoji: '💧',
    image: './assets/slowka/woda.jpg',
    plMeaning: 'Woda mineralna do picia (biernik: poproszę wodę).',
    vnMeaning: 'Nước khoáng đóng chai (thể đối cách: poproszę wodę - cho cháu xin nước).',
    category: 'Produkty',
    categoryVn: 'Sản phẩm',
    examplePl: '„Poproszę zimną wodę niegazowaną.”',
    exampleVn: '"Cho cháu xin một chai nước lọc không ga mát lạnh ạ."',
    color: '#3a86ff'
  },
  {
    id: 'c1_czipsy',
    word: 'czipsy',
    cleanWord: 'czipsy',
    phonetic: '[cheep-sy]',
    emoji: '🥔',
    image: './assets/slowka/czipsy.jpg',
    plMeaning: 'Chrupiąca przekąska ziemniaczana.',
    vnMeaning: 'Khoai tây chiên giòn, bim bim.',
    category: 'Produkty',
    categoryVn: 'Sản phẩm',
    examplePl: '„Poproszę paczkę czipsów paprykowych.”',
    exampleVn: '"Cho cháu xin một gói bim bim khoai tây vị ớt ạ."',
    color: '#f77f00'
  },
  {
    id: 'c1_karta',
    word: 'karta (kartą)',
    cleanWord: 'kartą',
    phonetic: '[kar-ta / kar-tom]',
    emoji: '💳',
    image: './assets/slowka/karta_kredytowa.jpg',
    plMeaning: 'Karta bankowa do płatności zbliżeniowej (narzędnik: płacę kartą).',
    vnMeaning: 'Thẻ ngân hàng (thanh toán chạm bằng thẻ).',
    category: 'Płatność',
    categoryVn: 'Thanh toán',
    examplePl: '„Będę płacić kartą zbliżeniowo.”',
    exampleVn: '"Cháu thanh toán chạm bằng thẻ ạ."',
    color: '#8338ec'
  },
  {
    id: 'c1_gotowka',
    word: 'gotówka (gotówką)',
    cleanWord: 'gotówką',
    phonetic: '[go-toof-ka / go-toof-kom]',
    emoji: '💵',
    image: './assets/slowka/gotowka.jpg',
    plMeaning: 'Pieniądze papierowe lub bilon (narzędnik: płacę gotówką).',
    vnMeaning: 'Tiền mặt (tiền giấy và tiền xu).',
    category: 'Płatność',
    categoryVn: 'Thanh toán',
    examplePl: '„Zapłacę gotówką, mam odliczone drobne.”',
    exampleVn: '"Cháu trả bằng tiền mặt, cháu có đủ tiền lẻ ạ."',
    color: '#2ec4b6'
  }
];

// Koło Fortuny Kota Bolo w Żabce (Pole 2)
export const CITY_1_WHEEL_SCENARIOS = [
  {
    id: 'c1_w_reklamowka',
    sliceLabel: '🛍️ REKLAMÓWKA',
    sliceColor: '#06d6a0',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'reklamówka',
    options: [
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: true },
      { textPl: '🥖 Bánh mì', correct: false },
      { textPl: '💧 Nước khoáng', correct: false },
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: false },
      { textPl: '💳 Thẻ ngân hàng', correct: false },
      { textPl: '💵 Tiền mặt', correct: false }
    ],
    explanationPl: 'Świetnie! „Reklamówka” to po wietnamsku: Túi ni lông / Túi đựng đồ.',
    explanationVn: 'Tuyệt vời! „Reklamówka” trong tiếng Việt nghĩa là túi ni lông hoặc túi đựng đồ mua sắm.'
  },
  {
    id: 'c1_w_bulka',
    sliceLabel: '🥖 BUŁKA',
    sliceColor: '#ffd166',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'bułka',
    options: [
      { textPl: '🥖 Bánh mì', correct: true },
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: false },
      { textPl: '💧 Nước khoáng', correct: false },
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: false },
      { textPl: '💳 Thẻ ngân hàng', correct: false },
      { textPl: '💵 Tiền mặt', correct: false }
    ],
    explanationPl: 'Doskonale! „Bułka” to po wietnamsku: Bánh mì.',
    explanationVn: 'Xuất sắc! „Bułka” trong tiếng Việt nghĩa là chiếc bánh mì.'
  },
  {
    id: 'c1_w_woda',
    sliceLabel: '💧 WODA',
    sliceColor: '#3a86ff',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'woda',
    options: [
      { textPl: '💧 Nước khoáng', correct: true },
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: false },
      { textPl: '🥖 Bánh mì', correct: false },
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: false },
      { textPl: '💳 Thẻ ngân hàng', correct: false },
      { textPl: '💵 Tiền mặt', correct: false }
    ],
    explanationPl: 'Brawo! „Woda” to po wietnamsku: Nước khoáng.',
    explanationVn: 'Hoan hô! „Woda” trong tiếng Việt là nước khoáng.'
  },
  {
    id: 'c1_w_czipsy',
    sliceLabel: '🥔 CZIPSY',
    sliceColor: '#f77f00',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'czipsy',
    options: [
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: true },
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: false },
      { textPl: '🥖 Bánh mì', correct: false },
      { textPl: '💧 Nước khoáng', correct: false },
      { textPl: '💳 Thẻ ngân hàng', correct: false },
      { textPl: '💵 Tiền mặt', correct: false }
    ],
    explanationPl: 'Super! „Czipsy” to po wietnamsku: Khoai tây chiên (bim bim).',
    explanationVn: 'Tuyệt! „Czipsy” trong tiếng Việt là bim bim hoặc khoai tây chiên.'
  },
  {
    id: 'c1_w_karta',
    sliceLabel: '💳 KARTA',
    sliceColor: '#8338ec',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'karta',
    options: [
      { textPl: '💳 Thẻ ngân hàng', correct: true },
      { textPl: '💵 Tiền mặt', correct: false },
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: false },
      { textPl: '🥖 Bánh mì', correct: false },
      { textPl: '💧 Nước khoáng', correct: false },
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: false }
    ],
    explanationPl: 'Wspaniale! „Karta” to po wietnamsku: Thẻ ngân hàng.',
    explanationVn: 'Tuyệt vời! „Karta” trong tiếng Việt là thẻ ngân hàng.'
  },
  {
    id: 'c1_w_gotowka',
    sliceLabel: '💵 GOTÓWKA',
    sliceColor: '#2ec4b6',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'gotówka',
    options: [
      { textPl: '💵 Tiền mặt', correct: true },
      { textPl: '💳 Thẻ ngân hàng', correct: false },
      { textPl: '🛍️ Túi ni lông (Túi đựng đồ)', correct: false },
      { textPl: '🥖 Bánh mì', correct: false },
      { textPl: '💧 Nước khoáng', correct: false },
      { textPl: '🥔 Khoai tây chiên (Bim bim)', correct: false }
    ],
    explanationPl: 'Prawidłowo! „Gotówka” to po wietnamsku: Tiền mặt.',
    explanationVn: 'Chính xác! „Gotówka” trong tiếng Việt là tiền mặt.'
  }
];

export const CITY_2_WORDS = [
  {
    id: 'city2_kebab',
    word: 'Kebab',
    phonetic: '[ke-bab]',
    plMeaning: 'Pieczone mięso w chlebku pita lub cieście z warzywami i sosem.',
    vnMeaning: 'Thịt nướng cuộn bánh mì Kebab kèm rau và nước xốt.',
    emoji: '🥙',
    cleanWord: 'kebab',
    category: 'JEDZENIE',
    color: '#f77f00',
    examplePl: 'Tan: „Poproszę duży kebab z kurczakiem.”',
    exampleVn: 'Tan: „Cho em một phần Kebab gà lớn.”'
  },
  {
    id: 'city2_burger',
    word: 'Burger',
    phonetic: '[boor-gher]',
    plMeaning: 'Kotlet w puszystej bułce z serem, sałatą i sosem.',
    vnMeaning: 'Bánh mì kẹp thịt bò/gà với phô mai và rau tươi.',
    emoji: '🍔',
    cleanWord: 'burger',
    category: 'JEDZENIE',
    color: '#ffb703',
    examplePl: 'Tan: „Poproszę klasyczny burger wołowy.”',
    exampleVn: 'Tan: „Cho em một chiếc burger bò truyền thống.”'
  },
  {
    id: 'city2_pizza',
    word: 'Pizza',
    phonetic: '[peet-tsa]',
    plMeaning: 'Włoski placek z sosem pomidorowym, serem i dodatkami.',
    vnMeaning: 'Bánh Pizza nướng với xốt cà chua và phô mai.',
    emoji: '🍕',
    cleanWord: 'pizza',
    category: 'JEDZENIE',
    color: '#e63946',
    examplePl: 'Tan: „Poproszę pizzę margherita.”',
    exampleVn: 'Tan: „Cho em một chiếc bánh pizza margherita.”'
  },
  {
    id: 'city2_sos_czosnkowy',
    word: 'Sos czosnkowy',
    phonetic: '[sos chos-nko-vy]',
    plMeaning: 'Kremowy, łagodny sos o aromacie czosnku i ziół.',
    vnMeaning: 'Nước xốt tỏi béo ngậy, vị nhẹ dịu không cay.',
    emoji: '🧄',
    cleanWord: 'sos czosnkowy',
    category: 'SOSY',
    color: '#8ecae6',
    examplePl: 'Tan: „Poproszę sos czosnkowy do kebaba.”',
    exampleVn: 'Tan: „Cho em thêm xốt tỏi vào Kebab nhé.”'
  },
  {
    id: 'city2_sos_ostry',
    word: 'Sos ostry',
    phonetic: '[sos os-try]',
    plMeaning: 'Pikantny sos chili dla miłośników wyrazistego smaku.',
    vnMeaning: 'Nước xốt ớt cay nồng đậm đà.',
    emoji: '🌶️',
    cleanWord: 'sos ostry',
    category: 'SOSY',
    color: '#d90429',
    examplePl: 'Tan: „Poproszę sos ostry, lubię pikantne jedzenie!”',
    exampleVn: 'Tan: „Cho em xốt cay, em thích ăn cay!”'
  },
  {
    id: 'city2_na_miejscu',
    word: 'Na miejscu',
    phonetic: '[na myey-stsoo]',
    plMeaning: 'Zjedzenie posiłku przy stoliku w lokalu gastronomicznym.',
    vnMeaning: 'Ăn tại quán / Dùng tại chỗ.',
    emoji: '🍽️',
    cleanWord: 'na miejscu',
    category: 'SPOSÓB',
    color: '#06d6a0',
    examplePl: 'Sprzedawca: „Na miejscu czy na wynos?” Tan: „Na miejscu!”',
    exampleVn: 'Người bán: „Ăn tại đây hay mang về?” Tan: „Ăn tại quán ạ!”'
  },
  {
    id: 'city2_na_wynos',
    word: 'Na wynos',
    phonetic: '[na vy-nos]',
    plMeaning: 'Zapakowanie posiłku do papierowej torby do zjedzenia w domu.',
    vnMeaning: 'Gói mang về / Mang đi.',
    emoji: '🥡',
    cleanWord: 'na wynos',
    category: 'SPOSÓB',
    color: '#118ab2',
    examplePl: 'Tan: „Poproszę na wynos, zjem w domu.”',
    exampleVn: 'Tan: „Gói mang về giúp em, em ăn ở nhà.”'
  }
];

// Scenariusze koła fortuny dla Kota Pomocnika (Plansza 2 w Mieście)
// Minigra: Tłumaczenie z polskiego na wietnamski
export const CITY_2_WHEEL_SCENARIOS = [
  {
    id: 'c2_w_kebab',
    sliceLabel: '🥙 KEBAB',
    sliceColor: '#f77f00',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Kebab',
    options: [
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: true },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Brawo! „Kebab” to po wietnamsku thịt nướng cuộn bánh mì Kebab.',
    explanationVn: 'Tuyệt vời! „Kebab” trong tiếng Việt là món thịt nướng cuộn bánh mì.'
  },
  {
    id: 'c2_w_burger',
    sliceLabel: '🍔 BURGER',
    sliceColor: '#ffb703',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Burger',
    options: [
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: true },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Świetnie! Burger to bánh mì kẹp thịt bò lub gà.',
    explanationVn: 'Xuất sắc! Burger là bánh mì kẹp thịt bò hoặc gà.'
  },
  {
    id: 'c2_w_pizza',
    sliceLabel: '🍕 PIZZA',
    sliceColor: '#e63946',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Pizza',
    options: [
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: true },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Doskonale! Pizza to włoski wypiek z serem (bánh pizza nướng).',
    explanationVn: 'Chính xác! Pizza là bánh pizza nướng với phô mai và xốt cà chua.'
  },
  {
    id: 'c2_w_czosnkowy',
    sliceLabel: '🧄 SOS CZOSNKOWY',
    sliceColor: '#8ecae6',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Sos czosnkowy',
    options: [
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: true },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Znakomicie! Sos czosnkowy to nước xốt tỏi thơm ngon.',
    explanationVn: 'Rất tốt! Sos czosnkowy là nước xốt tỏi béo nhẹ thơm ngon.'
  },
  {
    id: 'c2_w_ostry',
    sliceLabel: '🌶️ SOS OSTRY',
    sliceColor: '#d90429',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Sos ostry',
    options: [
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: true },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Super! Sos ostry to nước xốt ớt cay nồng đậm đà.',
    explanationVn: 'Tuyệt vời! Sos ostry là nước xốt ớt cay nồng đậm đà.'
  },
  {
    id: 'c2_w_miejscu',
    sliceLabel: '🍽️ NA MIEJSCU',
    sliceColor: '#06d6a0',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Na miejscu',
    options: [
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: true },
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false }
    ],
    explanationPl: 'Wspaniale! „Na miejscu” oznacza zjedzenie posiłku w lokalu (ăn tại quán).',
    explanationVn: 'Tuyệt! „Na miejscu” nghĩa là ăn tại quán hoặc dùng tại chỗ.'
  },
  {
    id: 'c2_w_wynos',
    sliceLabel: '🥡 NA WYNOS',
    sliceColor: '#118ab2',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Na wynos',
    options: [
      { textPl: '🥡 „Na wynos”', textVn: 'Gói mang về / Mang đi', correct: true },
      { textPl: '🍽️ „Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '🌶️ „Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '🧄 „Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '🍕 „Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '🍔 „Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '🥙 „Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false }
    ],
    explanationPl: 'Prawidłowo! „Na wynos” oznacza zapakowanie jedzenia na wynos (gói mang về).',
    explanationVn: 'Chính xác! „Na wynos” có nghĩa là đóng gói đồ ăn mang về.'
  }
];

export const CITY_3_WORDS = [
  {
    id: 'city3_bilet_ulgowy',
    word: 'Bilet ulgowy',
    phonetic: '[bee-let ool-go-vy]',
    plMeaning: 'Tańszy bilet ze zniżką 50% dla uczniów posiadających legitymację.',
    vnMeaning: 'Vé giảm giá 50% dành cho học sinh có thẻ học sinh.',
    emoji: '🎟️',
    cleanWord: 'bilet ulgowy',
    category: 'KOMUNIKACJA',
    color: '#3a86ff',
    examplePl: 'Tan: „W biletomacie kupuję bilet ulgowy 20-minutowy.”',
    exampleVn: 'Tan: „Ở máy bán vé em mua vé giảm giá 20 phút.”'
  },
  {
    id: 'city3_bilet_normalny',
    word: 'Bilet normalny',
    phonetic: '[bee-let nor-mal-ny]',
    plMeaning: 'Bilet w pełnej cenie dla pasażerów bez ulg uczniowskich.',
    vnMeaning: 'Vé tiêu chuẩn giá gốc cho hành khách không có giảm giá.',
    emoji: '🎫',
    cleanWord: 'bilet normalny',
    category: 'KOMUNIKACJA',
    color: '#4361ee',
    examplePl: 'Dorosły pasażer kupuje bilet normalny.',
    exampleVn: 'Hành khách người lớn mua vé tiêu chuẩn.'
  },
  {
    id: 'city3_legitymacja',
    word: 'Legitymacja',
    phonetic: '[le-ghi-ty-ma-tsya]',
    plMeaning: 'Dokument szkolny potwierdzający, że jesteś uczniem i masz prawo do ulgi.',
    vnMeaning: 'Thẻ học sinh dùng để chứng minh quyền mua vé giảm giá.',
    emoji: '🪪',
    cleanWord: 'legitymacja',
    category: 'DOKUMENTY',
    color: '#ff006e',
    examplePl: 'Inspektor: „Legitymację poproszę!” Tan: „Proszę, oto legitymacja!”',
    exampleVn: 'Thanh tra: „Cho xin thẻ học sinh!” Tan: „Dạ đây, thẻ học sinh của em ạ!”'
  },
  {
    id: 'city3_biletomat',
    word: 'Biletomat',
    phonetic: '[bee-le-to-mat]',
    plMeaning: 'Automatyczna maszyna na przystanku do zakupu biletów.',
    vnMeaning: 'Máy bán vé tự động tại các trạm xe buýt hoặc xe điện.',
    emoji: '🤖',
    cleanWord: 'biletomat',
    category: 'MIASTO',
    color: '#06d6a0',
    examplePl: 'Tan podchodzi do biletomatu i wybiera język polski.',
    exampleVn: 'Tan đến máy bán vé tự động và chọn tiếng Ba Lan.'
  },
  {
    id: 'city3_przystanek',
    word: 'Przystanek',
    phonetic: '[pshy-sta-nek]',
    plMeaning: 'Wyznaczone miejsce z wiatą, gdzie zatrzymuje się autobus lub tramwaj.',
    vnMeaning: 'Trạm dừng xe buýt hoặc tàu điện có bảng giờ chạy.',
    emoji: '🚏',
    cleanWord: 'przystanek',
    category: 'KOMUNIKACJA',
    color: '#ffbe0b',
    examplePl: 'Tan: „Czekam na autobus na przystanku.”',
    exampleVn: 'Tan: „Em đang đợi xe buýt tại trạm dừng.”'
  },
  {
    id: 'city3_jak_dojsc',
    word: 'Jak dojść?',
    phonetic: '[yak doyshch]',
    plMeaning: 'Uprzejme pytanie o drogę do wybranego celu w mieście.',
    vnMeaning: 'Làm thế nào để đi đến...? / Đường nào đến...?',
    emoji: '🗺️',
    cleanWord: 'jak dojść',
    category: 'PYTANIE',
    color: '#8338ec',
    examplePl: 'Tan: „Przepraszam, jak dojść na przystanek tramwajowy?”',
    exampleVn: 'Tan: „Xin lỗi, làm thế nào để đi đến trạm xe điện ạ?”'
  }
];

// Scenariusze koła fortuny dla Kota Pomocnika na Planszy 3
export const CITY_3_WHEEL_SCENARIOS = [
  {
    id: 'c3_w_droga',
    sliceLabel: '🗺️ JAK DOJŚĆ?',
    sliceColor: '#8338ec',
    badge: 'PYTANIE O DROGĘ • HỎI ĐƯỜNG',
    speakText: 'Przepraszam jak dojść',
    options: [
      { textPl: '🗺️ „Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: true },
      { textPl: '🚏 „Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt / xe điện.', correct: false },
      { textPl: '🎟️ „Bilet ulgowy ze zniżką 50%.”', textVn: 'Vé giảm giá 50% cho học sinh.', correct: false },
      { textPl: '🪪 „Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '🤖 „W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Brawo! „Przepraszam, jak dojść na...” to najbardziej uprzejme pytanie o drogę.',
    explanationVn: 'Tuyệt vời! „Przepraszam, jak dojść na...” là câu hỏi đường lịch sự nhất.'
  },
  {
    id: 'c3_w_przystanek',
    sliceLabel: '🚏 PRZYSTANEK',
    sliceColor: '#ffbe0b',
    badge: 'KOMUNIKACJA • GIAO THÔNG',
    speakText: 'Przystanek autobusowy',
    options: [
      { textPl: '🚏 „Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: true },
      { textPl: '🗺️ „Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '🎟️ „Bilet ulgowy ze zniżką 50%.”', textVn: 'Vé giảm giá 50% cho học sinh.', correct: false },
      { textPl: '🪪 „Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '🤖 „W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Dokładnie! Pojazdy komunikacji miejskiej zatrzymują się na wyznaczonych przystankach.',
    explanationVn: 'Chính xác! Phương tiện giao thông công cộng dừng ở trạm xe chỉ định.'
  },
  {
    id: 'c3_w_ulgowy',
    sliceLabel: '🎟️ BILET ULGOWY',
    sliceColor: '#3a86ff',
    badge: 'ZNIŻKA • GIẢM GIÁ',
    speakText: 'Bilet ulgowy',
    options: [
      { textPl: '🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá (giảm 50% dành cho học sinh).', correct: true },
      { textPl: '🚏 „Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '🗺️ „Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '🪪 „Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '🤖 „W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Świetnie! Uczniowie mają prawo do biletu ulgowego z legitymacją.',
    explanationVn: 'Xuất sắc! Học sinh có quyền mua vé giảm giá khi có thẻ học sinh.'
  },
  {
    id: 'c3_w_legitymacja',
    sliceLabel: '🪪 LEGITYMACJA',
    sliceColor: '#ff006e',
    badge: 'DOKUMENT • GIẤY TỜ',
    speakText: 'Legitymacja szkolna',
    options: [
      { textPl: '🪪 „Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh có hiệu lực.', correct: true },
      { textPl: '🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá dành cho học sinh.', correct: false },
      { textPl: '🚏 „Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '🗺️ „Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '🤖 „W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Doskonale! Legitymacja szkolna jest dowodem na prawo do zniżki ulgowej.',
    explanationVn: 'Chính xác! Thẻ học sinh là bằng chứng chứng minh quyền hưởng giá vé ưu đãi.'
  },
  {
    id: 'c3_w_biletomat',
    sliceLabel: '🤖 BILETOMAT',
    sliceColor: '#06d6a0',
    badge: 'MIASTO • ĐÔ THỊ',
    speakText: 'Biletomat',
    options: [
      { textPl: '🤖 „W biletomacie na przystanku.”', textVn: 'Tại máy bán vé tự động ở trạm dừng.', correct: true },
      { textPl: '🪪 „Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh có hiệu lực.', correct: false },
      { textPl: '🎟️ „Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá dành cho học sinh.', correct: false },
      { textPl: '🚏 „Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '🗺️ „Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false }
    ],
    explanationPl: 'Znakomicie! Biletomat to urządzenie na przystanku do zakupu biletów.',
    explanationVn: 'Rất tốt! Máy bán vé biletomat là máy tự động để mua vé tại trạm.'
  }
];

// Słownictwo Planszy 3_1: Zwroty ratunkowe
export const MODULE_3_1_WORDS = [
  {
    id: 'm3_w1',
    word: 'Nie rozumiem',
    cleanWord: 'Nie rozumiem',
    phonetic: '[ne ro-zu-mem]',
    plMeaning: 'Gdy nie rozumiesz polecenia nauczyciela',
    vnMeaning: 'Em không hiểu lời thầy cô',
    color: '#3b82f6',
    audioText: 'Nie rozumiem, proszę pani.',
    examplePl: '„Przepraszam, nie rozumiem tego zadania.”',
    exampleVn: '„Xin lỗi, em không hiểu bài tập này ạ.”'
  },
  {
    id: 'm3_w2',
    word: 'Proszę powtórzyć',
    cleanWord: 'Proszę powtórzyć',
    phonetic: '[pro-sze pow-tu-rzyc]',
    plMeaning: 'Grzeczna prośba o ponowne wyjaśnienie',
    vnMeaning: 'Xin thầy/cô nhắc lại một lần nữa ạ',
    color: '#6366f1',
    audioText: 'Proszę powtórzyć polecenie.',
    examplePl: '„Czy może pani powtórzyć pytanie?”',
    exampleVn: '„Cô có thể nhắc lại câu hỏi được không ạ?”'
  },
  {
    id: 'm3_w3',
    word: 'Czy mogę wyjść do toalety?',
    cleanWord: 'Czy mogę wyjść do toalety',
    phonetic: '[czy mo-ge wyjsc do to-a-le-ty]',
    plMeaning: 'Prośba o wyjście za potrzebą podczas lekcji',
    vnMeaning: 'Em xin phép ra ngoài đi vệ sinh ạ',
    color: '#06b6d4',
    audioText: 'Czy mogę wyjść do toalety?',
    examplePl: '„Przepraszam, czy mogę wyjść do toalety?”',
    exampleVn: '„Xin lỗi cô, em xin phép ra ngoài đi vệ sinh ạ.”'
  },
  {
    id: 'm3_w4',
    word: 'Przepraszam',
    cleanWord: 'Przepraszam',
    phonetic: '[pshe-pra-szam]',
    plMeaning: 'Podstawowy zwrot grzecznościowy w klasie',
    vnMeaning: 'Em xin lỗi / Em xin phép ạ',
    color: '#f59e0b',
    audioText: 'Przepraszam za spóźnienie.',
    examplePl: '„Przepraszam, mam pytanie do lekcji.”',
    exampleVn: '„Em xin phép, em có câu hỏi về bài học ạ.”'
  },
  {
    id: 'm3_w5',
    word: 'Wolniej',
    cleanWord: 'Wolniej',
    phonetic: '[wol-nej]',
    plMeaning: 'Prośba o wolniejsze mówienie',
    vnMeaning: 'Xin nói chậm lại một chút ạ',
    color: '#10b981',
    audioText: 'Proszę mówić trochę wolniej.',
    examplePl: '„Czy może pan mówić trochę wolniej?”',
    exampleVn: '„Thầy có thể nói chậm hơn một chút được không ạ?”'
  },
  {
    id: 'm3_w6',
    word: 'Jeszcze raz',
    cleanWord: 'Jeszcze raz',
    phonetic: '[jesz-cze raz]',
    plMeaning: 'Prośba o jeszcze jedno powtórzenie',
    vnMeaning: 'Thêm một lần nữa ạ',
    color: '#ec4899',
    audioText: 'Jeszcze raz, proszę.',
    examplePl: '„Nie usłyszałem, proszę jeszcze raz.”',
    exampleVn: '„Em chưa nghe rõ, xin cô nhắc lại một lần nữa ạ.”'
  }
];

// Słownictwo Planszy 3_2: Przybory i brak zadań
export const MODULE_3_2_WORDS = [
  {
    id: 'm3_w7',
    word: 'Nie mam zeszytu',
    cleanWord: 'Nie mam zeszytu',
    phonetic: '[ne mam ze-szy-tu]',
    plMeaning: 'Komunikowanie braku zeszytu przedmiotowego',
    vnMeaning: 'Em không mang theo vở ạ',
    color: '#ef4444',
    audioText: 'Nie mam zeszytu z zadaniem.',
    examplePl: '„Przepraszam, nie mam dzisiaj zeszytu.”',
    exampleVn: '„Em xin lỗi, hôm nay em quên mang vở ạ.”'
  },
  {
    id: 'm3_w8',
    word: 'Nie mam podręcznika',
    cleanWord: 'Nie mam podręcznika',
    phonetic: '[ne mam pod-recz-ni-ka]',
    plMeaning: 'Komunikowanie braku książki do nauki',
    vnMeaning: 'Em không có sách giáo khoa ạ',
    color: '#f97316',
    audioText: 'Nie mam podręcznika.',
    examplePl: '„Czy mogę patrzeć do podręcznika z kolegą?”',
    exampleVn: '„Em có thể nhìn chung sách với bạn được không ạ?”'
  },
  {
    id: 'm3_w9',
    word: 'Zapomniałem',
    cleanWord: 'Zapomniałem',
    phonetic: '[za-pom-na-lem]',
    plMeaning: 'Uczciwe zgłoszenie zapomnienia pracy lub rzeczy',
    vnMeaning: 'Em quên mất rồi ạ',
    color: '#8b5cf6',
    audioText: 'Zapomniałem zrobić zadanie domowe.',
    examplePl: '„Bardzo przepraszam, zapomniałem zadania domowego.”',
    exampleVn: '„Em rất xin lỗi, em quên làm bài tập về nhà ạ.”'
  },
  {
    id: 'm3_w10',
    word: 'Długopis',
    cleanWord: 'Długopis',
    phonetic: '[dlu-go-pis]',
    plMeaning: 'Narzędzie do pisania w zeszycie',
    vnMeaning: 'Cây bút bi',
    color: '#3b82f6',
    audioText: 'Niebieski długopis do pisania.',
    examplePl: '„Olek, masz pożyczyć zapasowy długopis?”',
    exampleVn: '„Olek, cậu có bút bi thừa cho tớ mượn không?”'
  },
  {
    id: 'm3_w11',
    word: 'Gumka',
    cleanWord: 'Gumka',
    phonetic: '[gum-ka]',
    plMeaning: 'Przybór do ścierania ołówka',
    vnMeaning: 'Cục tẩy',
    color: '#14b8a6',
    audioText: 'Gumka do ścierania.',
    examplePl: '„Zmażę ten błąd gumką.”',
    exampleVn: '„Tớ sẽ dùng tẩy xóa lỗi sai này.”'
  },
  {
    id: 'm3_w12',
    word: 'Linijka',
    cleanWord: 'Linijka',
    phonetic: '[li-nij-ka]',
    plMeaning: 'Przybór do mierzenia i rysowania prostych linii',
    vnMeaning: 'Cây thước kẻ',
    color: '#eab308',
    audioText: 'Plastikowa linijka.',
    examplePl: '„Narysuję prostą linię linijką.”',
    exampleVn: '„Tớ sẽ dùng thước kẻ vẽ đường thẳng.”'
  }
];

// Słownictwo Planszy 3_3: Plan lekcji i czas
export const MODULE_3_3_WORDS = [
  {
    id: 'm3_w13',
    word: 'Poniedziałek',
    cleanWord: 'Poniedziałek',
    phonetic: '[po-ne-dza-lek]',
    plMeaning: 'Pierwszy dzień szkolnego tygodnia',
    vnMeaning: 'Thứ hai đầu tuần',
    color: '#3b82f6',
    audioText: 'W poniedziałek mamy trudną lekcję.',
    examplePl: '„W poniedziałek zaczynamy o 8:00.”',
    exampleVn: '„Thứ hai chúng mình bắt đầu lúc 8 giờ.”'
  },
  {
    id: 'm3_w14',
    word: 'Środa',
    cleanWord: 'Środa',
    phonetic: '[sro-da]',
    plMeaning: 'Środek tygodnia nauki',
    vnMeaning: 'Thứ tư giữa tuần',
    color: '#6366f1',
    audioText: 'W środę mamy basen i WF.',
    examplePl: '„W środę mamy plastykę i angielski.”',
    exampleVn: '„Thứ tư có môn mỹ thuật và tiếng Anh.”'
  },
  {
    id: 'm3_w15',
    word: 'Piątek',
    cleanWord: 'Piątek',
    phonetic: '[pon-tek]',
    plMeaning: 'Ostatni dzień lekcji przed weekendem',
    vnMeaning: 'Thứ sáu cuối tuần',
    color: '#10b981',
    audioText: 'W piątek po szkole gramy w piłkę.',
    examplePl: '„W piątek mamy tylko 4 lekcje!”',
    exampleVn: '„Thứ sáu tụi mình chỉ có 4 tiết thôi!”'
  },
  {
    id: 'm3_w16',
    word: 'Matma',
    cleanWord: 'Matma',
    phonetic: '[mat-ma]',
    plMeaning: 'Matematyka – liczenie, ułamki i zadania',
    vnMeaning: 'Môn Toán học',
    color: '#f59e0b',
    audioText: 'Lekcja matematyki.',
    examplePl: '„Na matmie liczymy zadania z geometrii.”',
    exampleVn: '„Trong giờ toán tụi mình làm bài hình học.”'
  },
  {
    id: 'm3_w17',
    word: 'WF',
    cleanWord: 'WF',
    phonetic: '[wu-ef]',
    plMeaning: 'Wychowanie Fizyczne – sport, bieg i gry zespołowe',
    vnMeaning: 'Môn Thể dục thể thao',
    color: '#ef4444',
    audioText: 'Wychowanie fizyczne na sali gimnastycznej.',
    examplePl: '„Na WF-ie gramy dzisiaj w siatkówkę!”',
    exampleVn: '„Hôm nay giờ thể dục tụi mình chơi bóng chuyền!”'
  },
  {
    id: 'm3_w18',
    word: 'Plastyka',
    cleanWord: 'Plastyka',
    phonetic: '[plas-ty-ka]',
    plMeaning: 'Lekcja rysunku, malowania i twórczości',
    vnMeaning: 'Môn Mỹ thuật vẽ tranh',
    color: '#ec4899',
    audioText: 'Lekcja plastyki i malowania.',
    examplePl: '„Na plastykę potrzebne są farby i pędzel.”',
    exampleVn: '„Giờ mỹ thuật cần màu vẽ và cọ vẽ.”'
  },
  {
    id: 'm3_w19',
    word: 'Dzwonek',
    cleanWord: 'Dzwonek',
    phonetic: '[dzwo-nek]',
    plMeaning: 'Dźwięk oznajmiający początek lub koniec lekcji',
    vnMeaning: 'Tiếng chuông báo hiệu',
    color: '#eab308',
    audioText: 'Zaraz zadzwoni dzwonek na przerwę.',
    examplePl: '„Słychać dzwonek! Koniec lekcji!”',
    exampleVn: '„Có chuông rồi! Hết tiết học rồi!”'
  },
  {
    id: 'm3_w20',
    word: 'Przerwa',
    cleanWord: 'Przerwa',
    phonetic: '[psher-wa]',
    plMeaning: 'Czas odpoczynku i zjedzenia śniadania między lekcjami',
    vnMeaning: 'Giờ ra chơi giải lao',
    color: '#06b6d4',
    audioText: 'Długa przerwa obiadowa.',
    examplePl: '„Na dużej przerwie zjem drożdżówkę.”',
    exampleVn: '„Vào giờ ra chơi lớn tớ sẽ ăn bánh ngọt.”'
  }
];

// Słownictwo Planszy 4_1: Stany fizyczne
export const MODULE_4_1_WORDS = [
  {
    id: 'm4_w1',
    word: 'Jestem głodny',
    cleanWord: 'Jestem głodny',
    phonetic: '[jes-tem glo-dny]',
    plMeaning: 'Gdy Twój żołądek domaga się jedzenia',
    vnMeaning: 'Em đói bụng rồi',
    color: '#f97316',
    audioText: 'Jestem bardzo głodny.',
    examplePl: '„Jestem głodny, zjem drugie śniadanie.”',
    exampleVn: '„Em đói rồi, em sẽ ăn bữa sáng thứ hai.”'
  },
  {
    id: 'm4_w2',
    word: 'Chce mi się pić',
    cleanWord: 'Chce mi się pić',
    phonetic: '[chce mi sie pic]',
    plMeaning: 'Uczucie pragnienia po lekcji lub bieganiu',
    vnMeaning: 'Em muốn uống nước / Em khát nước',
    color: '#06b6d4',
    audioText: 'Chce mi się pić, poproszę wodę.',
    examplePl: '„Po WF-ie strasznie chce mi się pić.”',
    exampleVn: '„Sau giờ thể dục em khát nước khủng khiếp.”'
  },
  {
    id: 'm4_w3',
    word: 'Jest mi zimno',
    cleanWord: 'Jest mi zimno',
    phonetic: '[jest mi zim-no]',
    plMeaning: 'Uczucie chłodu – potrzeba założenia bluzy lub zamknięcia okna',
    vnMeaning: 'Em thấy lạnh quá',
    color: '#3b82f6',
    audioText: 'Jest mi zimno, założę ciepły szalik.',
    examplePl: '„Jest mi zimno, czy mogę zamknąć okno?”',
    exampleVn: '„Em thấy lạnh, em có thể đóng cửa sổ được không ạ?”'
  },
  {
    id: 'm4_w4',
    word: 'Jest mi gorąco',
    cleanWord: 'Jest mi gorąco',
    phonetic: '[jest mi go-ron-co]',
    plMeaning: 'Uczucie przegrzania po wysiłku',
    vnMeaning: 'Em thấy nóng quá',
    color: '#ef4444',
    audioText: 'Jest mi gorąco po bieganiu.',
    examplePl: '„Zdejmij bluzę, jeśli jest ci gorąco.”',
    exampleVn: '„Hãy cởi áo khoác ra nếu em thấy nóng.”'
  },
  {
    id: 'm4_w5',
    word: 'Odpoczynek',
    cleanWord: 'Odpoczynek',
    phonetic: '[od-po-czy-nek]',
    plMeaning: 'Chwila relaksu dla zregenerowania sił',
    vnMeaning: 'Sự nghỉ ngơi hồi phục',
    color: '#10b981',
    audioText: 'Czas na krótki odpoczynek.',
    examplePl: '„Po ciężkim sprawdzianie potrzebuję odpoczynku.”',
    exampleVn: '„Sau bài kiểm tra căng thẳng em cần nghỉ ngơi.”'
  },
  {
    id: 'm4_w6',
    word: 'Świeże powietrze',
    cleanWord: 'Świeże powietrze',
    phonetic: '[swie-ze po-wie-tshe]',
    plMeaning: 'Wyjście na zewnątrz dla dotlenienia mózgu',
    vnMeaning: 'Không khí trong lành',
    color: '#84cc16',
    audioText: 'Wyjdźmy na świeże powietrze.',
    examplePl: '„Wyjdźmy na boisko na świeże powietrze.”',
    exampleVn: '„Tụi mình ra sân hít thở không khí trong lành đi.”'
  }
];

// Słownictwo Planszy 4_2: Zdrowie i ból
export const MODULE_4_2_WORDS = [
  {
    id: 'm4_w7',
    word: 'Boli mnie głowa',
    cleanWord: 'Boli mnie głowa',
    phonetic: '[bo-li mne glo-wa]',
    plMeaning: 'Ból w okolicach skroni lub czoła',
    vnMeaning: 'Em bị đau đầu',
    color: '#f43f5e',
    audioText: 'Bardzo boli mnie głowa.',
    examplePl: '„Proszę pani, bardzo boli mnie głowa.”',
    exampleVn: '„Thưa cô, em bị đau đầu dữ dội ạ.”'
  },
  {
    id: 'm4_w8',
    word: 'Boli mnie brzuch',
    cleanWord: 'Boli mnie brzuch',
    phonetic: '[bo-li mne bzhuch]',
    plMeaning: 'Bolesność żołądka lub brzucha',
    vnMeaning: 'Em bị đau bụng',
    color: '#ea580c',
    audioText: 'Boli mnie brzuch po obiedzie.',
    examplePl: '„Czy mogę pójść do gabinetu pielęgniarki? Boli mnie brzuch.”',
    exampleVn: '„Em có thể xuống phòng y tế được không ạ? Em bị đau bụng.”'
  },
  {
    id: 'm4_w9',
    word: 'Boli mnie gardło',
    cleanWord: 'Boli mnie gardło',
    phonetic: '[bo-li mne gar-dlo]',
    plMeaning: 'Ból przy przełykaniu śliny',
    vnMeaning: 'Em bị đau rát cổ họng',
    color: '#d97706',
    audioText: 'Boli mnie gardło i chrypię.',
    examplePl: '„Boli mnie gardło, napiję się ciepłej herbaty.”',
    exampleVn: '„Cổ họng em bị rát, em sẽ uống trà ấm.”'
  },
  {
    id: 'm4_w10',
    word: 'Źle się czuję',
    cleanWord: 'Źle się czuję',
    phonetic: '[zle sie czu-je]',
    plMeaning: 'Ogólne poczucie osłabienia i choroby',
    vnMeaning: 'Em cảm thấy trong người không được khỏe',
    color: '#8b5cf6',
    audioText: 'Źle się czuję od rana.',
    examplePl: '„Mamo, źle się czuję, chyba mam gorączkę.”',
    exampleVn: '„Mẹ ơi, con thấy trong người mệt mỏi, hình như con bị sốt.”'
  },
  {
    id: 'm4_w11',
    word: 'Gorączka',
    cleanWord: 'Gorączka',
    phonetic: '[go-roncz-ka]',
    plMeaning: 'Wysoka temperatura ciała powyżej 38°C',
    vnMeaning: 'Cơn sốt cao',
    color: '#dc2626',
    audioText: 'Termometr pokazuje gorączkę.',
    examplePl: '„Pielęgniarka zmierzyła mi temperaturę: mam gorączkę.”',
    exampleVn: '„Y tá đo nhiệt độ cho em: em bị sốt rồi.”'
  },
  {
    id: 'm4_w12',
    word: 'Lekarstwo',
    cleanWord: 'Lekarstwo',
    phonetic: '[le-kar-stwo]',
    plMeaning: 'Syrop lub tabletka przepisana przez lekarza',
    vnMeaning: 'Thuốc chữa bệnh',
    color: '#059669',
    audioText: 'Przepisane lekarstwo i witaminy.',
    examplePl: '„Muszę regularnie brać przepisane lekarstwo.”',
    exampleVn: '„Em cần uống thuốc theo đúng chỉ dẫn của bác sĩ.”'
  }
];

// Słownictwo Planszy 4_3: Emocje i energia
export const MODULE_4_3_WORDS = [
  {
    id: 'm4_w13',
    word: 'Jestem zmęczony',
    cleanWord: 'Jestem zmęczony',
    phonetic: '[jes-tem zmen-czo-ny]',
    plMeaning: 'Brak sił i senność po całym dniu nauki',
    vnMeaning: 'Em thấy mệt mỏi kiệt sức',
    color: '#64748b',
    audioText: 'Jestem bardzo zmęczony po lekcjach.',
    examplePl: '„Jestem zmęczony, muszę się zdrzemnąć.”',
    exampleVn: '„Em mệt quá, em cần chợp mắt một lát.”'
  },
  {
    id: 'm4_w14',
    word: 'Nudzę się',
    cleanWord: 'Nudzę się',
    phonetic: '[nu-dze sie]',
    plMeaning: 'Brak ciekawego zajęcia i nuda',
    vnMeaning: 'Em thấy buồn chán, không có gì làm',
    color: '#78716c',
    audioText: 'Nudzę się sam w pokoju.',
    examplePl: '„Nudzę się, chodźmy na dwór pokopać piłkę!”',
    exampleVn: '„Chán quá, tụi mình ra ngoài đá bóng đi!”'
  },
  {
    id: 'm4_w15',
    word: 'Jestem zły',
    cleanWord: 'Jestem zły',
    phonetic: '[jes-tem zly]',
    plMeaning: 'Uczucie złości lub frustracji',
    vnMeaning: 'Em đang rất tức giận / bực mình',
    color: '#ef4444',
    audioText: 'Jestem zły, że przegraliśmy mecz.',
    examplePl: '„Jestem zły, potrzebuję chwili spokoju.”',
    exampleVn: '„Em đang bực, em cần một chút yên tĩnh.”'
  },
  {
    id: 'm4_w16',
    word: 'Wszystko okej',
    cleanWord: 'Wszystko okej',
    phonetic: '[wszyst-ko o-kej]',
    plMeaning: 'Uspokajające zapewnienie, że wszystko w porządku',
    vnMeaning: 'Mọi thứ đều ổn, không sao cả',
    color: '#22c55e',
    audioText: 'Nie martw się, wszystko okej!',
    examplePl: '„Dzięki za troskę, wszystko ze mną okej!”',
    exampleVn: '„Cảm ơn cậu đã hỏi thăm, tớ ổn cả!”'
  },
  {
    id: 'm4_w17',
    word: 'Wesoły',
    cleanWord: 'Wesoły',
    phonetic: '[we-so-ly]',
    plMeaning: 'Radosny stan ducha, uśmiech na twarzy',
    vnMeaning: 'Vui vẻ yêu đời',
    color: '#eab308',
    audioText: 'Jestem dzisiaj bardzo wesoły.',
    examplePl: '„Dostałem dobrą ocenę i jestem wesoły.”',
    exampleVn: '„Em được điểm tốt nên rất vui vẻ.”'
  },
  {
    id: 'm4_w18',
    word: 'Spokojny',
    cleanWord: 'Spokojny',
    phonetic: '[spo-koj-ny]',
    plMeaning: 'Opanowany i zrelaksowany',
    vnMeaning: 'Bình tĩnh và thoải mái',
    color: '#06b6d4',
    audioText: 'Głęboki oddech i jestem spokojny.',
    examplePl: '„Wziąłem głęboki oddech i jestem spokojny.”',
    exampleVn: '„Em hít thở sâu và cảm thấy bình tĩnh.”'
  }
];

// Słownictwo Planszy 5_1: Autoprezentacja i Mój pokój / technologia
export const MODULE_5_1_WORDS = [
  {
    id: 'm5_w1',
    word: 'Pochodzę z Wietnamu',
    cleanWord: 'Pochodzę z Wietnamu',
    phonetic: '[po-cho-dze z wiet-na-mu]',
    plMeaning: 'Mówienie o swoim kraju pochodzenia i korzeniach',
    vnMeaning: 'Tôi đến từ Việt Nam',
    color: '#dc2626',
    audioText: 'Pochodzę z Wietnamu, z pięknego Hanoi.',
    examplePl: '„Pochodzę z Wietnamu, ale mieszkam w Polsce.”',
    exampleVn: '„Tôi đến từ Việt Nam, nhưng hiện đang sống ở Ba Lan.”'
  },
  {
    id: 'm5_w2',
    word: 'Mieszkam w Polsce',
    cleanWord: 'Mieszkam w Polsce',
    phonetic: '[mesz-kam w pol-sce]',
    plMeaning: 'Informacja o obecnym miejscu zamieszkania',
    vnMeaning: 'Tôi đang sinh sống tại Ba Lan',
    color: '#f43f5e',
    audioText: 'Mieszkam w Polsce od kilku lat.',
    examplePl: '„Mieszkam w Polsce i chodzę do polskiej szkoły.”',
    exampleVn: '„Tôi sống ở Ba Lan và theo học tại một trường Ba Lan.”'
  },
  {
    id: 'm5_w3',
    word: 'Mam 13 lat',
    cleanWord: 'Mam 13 lat',
    phonetic: '[mam trzy-nas-cie lat]',
    plMeaning: 'Podawanie swojego wieku rówieśnikom',
    vnMeaning: 'Tôi 13 tuổi',
    color: '#3b82f6',
    audioText: 'Mam 13 lat i lubię sport.',
    examplePl: '„Mam 13 lat, tak samo jak koledzy z klasy.”',
    exampleVn: '„Tôi 13 tuổi, bằng tuổi các bạn trong lớp.”'
  },
  {
    id: 'm5_w4',
    word: 'Komputer',
    cleanWord: 'Komputer',
    phonetic: '[kom-pu-ter]',
    plMeaning: 'Sprzęt do nauki, programowania i gier',
    vnMeaning: 'Máy tính để bàn / Laptop',
    color: '#6366f1',
    audioText: 'Mój komputer stoi na biurku.',
    examplePl: '„Włączam komputer, żeby odrobić projekt.”',
    exampleVn: '„Tôi bật máy tính để làm bài tập dự án.”'
  },
  {
    id: 'm5_w5',
    word: 'Słuchawki',
    cleanWord: 'Słuchawki',
    phonetic: '[slu-chaw-ki]',
    plMeaning: 'Urządzenie do słuchania muzyki i rozmów z mikrofonem',
    vnMeaning: 'Tai nghe chụp tai có micro',
    color: '#8b5cf6',
    audioText: 'Bezprzewodowe słuchawki gamingowe.',
    examplePl: '„Zakładam słuchawki i gadam z kolegami na Discordzie.”',
    exampleVn: '„Tôi đeo tai nghe vào để trò chuyện với bạn bè trên Discord.”'
  },
  {
    id: 'm5_w6',
    word: 'Ładowarka',
    cleanWord: 'Ładowarka',
    phonetic: '[la-do-war-ka]',
    plMeaning: 'Kabel i adapter do ładowania telefonu lub laptopa',
    vnMeaning: 'Cục sạc điện thoại / dây sạc',
    color: '#eab308',
    audioText: 'Gdzie leży moja ładowarka?',
    examplePl: '„Czy ktoś widział moją szybką ładowarkę USB-C?”',
    exampleVn: '„Có ai nhìn thấy củ sạc nhanh USB-C của tôi ở đâu không?”'
  },
  {
    id: 'm5_w7',
    word: 'Szybkie Wi-Fi',
    cleanWord: 'Szybkie Wi-Fi',
    phonetic: '[szyb-ke wi-fi]',
    plMeaning: 'Bezprzewodowe połączenie internetowe o dużej prędkości',
    vnMeaning: 'Mạng Wi-Fi tốc độ cao',
    color: '#06b6d4',
    audioText: 'W moim pokoju jest szybkie Wi-Fi.',
    examplePl: '„Dzięki szybkiemu Wi-Fi gry nie lagują!”',
    exampleVn: '„Nhờ có mạng Wi-Fi nhanh mà chơi game không bị giật lag!”'
  }
];

// Słownictwo Planszy 5_2: Świat piłki nożnej & Social media
export const MODULE_5_2_WORDS = [
  {
    id: 'm5_w8',
    word: 'Mecz',
    cleanWord: 'Mecz',
    phonetic: '[mecz]',
    plMeaning: 'Sportowe starcie dwóch drużyn piłkarskich',
    vnMeaning: 'Trận đấu bóng đá đỉnh cao',
    color: '#16a34a',
    audioText: 'Dzisiaj wieczorem gramy ważny mecz.',
    examplePl: '„Oglądam w telewizji mecz Ligi Mistrzów.”',
    exampleVn: '„Tôi đang theo dõi trận đấu Cúp C1 trên truyền hình.”'
  },
  {
    id: 'm5_w9',
    word: 'Szybki zawodnik',
    cleanWord: 'Szybki zawodnik',
    phonetic: '[szyb-ki za-wod-nik]',
    plMeaning: 'Gracz potrafiący błyskawicznie biegać z piłką',
    vnMeaning: 'Cầu thủ chạy cánh thần tốc',
    color: '#2563eb',
    audioText: 'Niesamowicie szybki zawodnik na skrzydle.',
    examplePl: '„Ten napastnik to niezwykle szybki zawodnik.”',
    exampleVn: '„Tiền đạo đó là một cầu thủ cực kỳ nhanh nhẹn.”'
  },
  {
    id: 'm5_w10',
    word: 'Najlepszy mistrz',
    cleanWord: 'Najlepszy mistrz',
    phonetic: '[naj-lep-szy mistrz]',
    plMeaning: 'Zdobywca złotego pucharu i pierwszego miejsca',
    vnMeaning: 'Nhà vô địch xuất sắc nhất',
    color: '#e11d48',
    audioText: 'Został wybrany na najlepszego mistrza.',
    examplePl: '„Nasza drużyna to najlepszy mistrz turnieju!”',
    exampleVn: '„Đội bóng của chúng tôi là nhà vô địch xuất sắc nhất giải!”'
  },
  {
    id: 'm5_w11',
    word: 'Filmiki i trendy',
    cleanWord: 'Filmiki i trendy',
    phonetic: '[fil-mi-ki i tren-dy]',
    plMeaning: 'Krótkie wideo na TikToku i modne wyzwania',
    vnMeaning: 'Video ngắn và các trào lưu xu hướng',
    color: '#ec4899',
    audioText: 'Oglądam śmieszne filmiki i nowe trendy.',
    examplePl: '„Ten filmik zdobył milion wyświetleń w jeden dzień!”',
    exampleVn: '„Đoạn video ngắn đó đã đạt một triệu lượt xem chỉ sau một ngày!”'
  },
  {
    id: 'm5_w12',
    word: 'Zabawne memy',
    cleanWord: 'Zabawne memy',
    phonetic: '[za-baw-ne me-my]',
    plMeaning: 'Śmieszne obrazki z podpisem krążące w sieci',
    vnMeaning: 'Những hình ảnh meme hài hước trên mạng',
    color: '#f59e0b',
    audioText: 'Wysyłam kolegom zabawne memy.',
    examplePl: '„Przesłałem Olowi przez telefon zabawne memy.”',
    exampleVn: '„Tôi đã gửi cho Olek những hình ảnh meme rất hài hước qua điện thoại.”'
  },
  {
    id: 'm5_w13',
    word: 'Anime',
    cleanWord: 'Anime',
    phonetic: '[a-ni-me]',
    plMeaning: 'Japońskie seriale animowane i manga (np. Doraemon)',
    vnMeaning: 'Phim hoạt hình Anime và truyện tranh',
    color: '#a855f7',
    audioText: 'Lubię oglądać odcinki anime.',
    examplePl: '„Moje ulubione anime to Doraemon i Dragon Ball.”',
    exampleVn: '„Bộ phim anime yêu thích của tôi là Doraemon và Dragon Ball.”'
  }
];
