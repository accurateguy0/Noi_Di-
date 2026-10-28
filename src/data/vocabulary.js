// Słownictwo, talie kart i scenariusze kół fortuny

export * from './boardNodes.js';
export * from './shopItems.js';
export * from './dialogSteps.js';
export * from './cityWordsData.js';
export * from './moduleWordsData.js';
import { getHeroLevelStats } from './characterProgression.js';

// Wyznaczanie siły ataku bohatera (zgodnie z tabelą poziomów 1–6 dla danej klasy):
// - Warrior, Thief, Inventor, Jester (oraz Robot): DMG 2 → 3 → 3 → 4 → 4 → 5
// - Witch: DMG 3 → 3 → 3 → 3 → 4 → 5
// + ewentualne bonusy z ekwipunku sklepowego (player.bonusDamage)
export function getPlayerDamage(player) {
  if (!player) return 2;
  if (typeof player === 'number') return player;
  const stats = getHeroLevelStats(player.characterClass || player.heroId || 'Warrior', player.level || 1);
  const base = typeof player.baseDamage === 'number' ? player.baseDamage : stats.baseDamage;
  const itemBonus = player.bonusDamage || 0;
  return base + itemBonus;
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
    emoji: '',
    color: '#ff6b6b',
    plMeaning: 'Powitanie kolegi lub koleżanki, gdy spotykacie się na szkolnym korytarzu.',
    vnMeaning: 'Chào bạn! — Lời chào tự nhiên nhất khi gặp bạn bè ở hành lang trường.',
    balloonDefPl: 'Powitanie kolegi przy spotkaniu na korytarzu',
    balloonDefVn: 'Chào bạn! — Lời chào khi mới gặp bạn bè ở trường',
    examplePl: '— Siema! Wchodzisz do szatni?\n— Siema!',
    exampleVn: '— Chào bạn! Cậu vào phòng thay đồ à?\n— Chào cậu!',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
    color: '#8338ec',
    plMeaning: 'Pytanie zadawane koledze po powitaniu, aby dowiedzieć się, co u niego nowego.',
    vnMeaning: 'Có gì mới không? / Dạo này thế nào? — Câu hỏi thăm bạn bè ngay sau khi chào.',
    balloonDefPl: 'Pytanie do kolegi o to, co u niego nowego',
    balloonDefVn: 'Có gì mới không? / Thế nào rồi? — Câu hỏi thăm bạn bè',
    examplePl: '— Siema! Co tam?\n— Spoko!',
    exampleVn: '— Chào bạn! Có gì mới không?\n— Mọi thứ đều ổn!',
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
    emoji: '',
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
    emoji: '',
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
    sliceLabel: 'SIEMA!',
    sliceColor: '#ff595e',
    badge: 'POWITANIE • LỜI CHÀO',
    speakText: 'Siema!',
    options: [
      {
        textPl: 'Powitanie kolegi, gdy spotykamy się na szkolnym korytarzu',
        textVn: 'Chào bạn! — Dùng khi mới gặp bạn bè ở hành lang trường',
        correct: true
      },
      {
        textPl: 'Pożegnanie, gdy wychodzimy ze szkoły po lekcjach',
        textVn: 'Tạm biệt! — Dùng khi tan học đi về nhà',
        correct: false
      },
      {
        textPl: 'Prośba o pożyczenie zeszytu na lekcji',
        textVn: 'Mượn vở ghi bài trong giờ học',
        correct: false
      }
    ],
    explanationPl: 'Brawo! „Siema!” to naturalne powitanie kolegów przy spotkaniu!',
    explanationVn: 'Tuyệt vời! "Siema!" là lời chào tự nhiên nhất khi gặp bạn bè!'
  },
  {
    id: 'w_nara',
    sliceLabel: 'NARA!',
    sliceColor: '#ffca3a',
    badge: 'POŻEGNANIE • LỜI TẠM BIỆT',
    speakText: 'Nara!',
    options: [
      {
        textPl: 'Pożegnanie z kolegami, gdy odchodzimy lub idziemy do domu',
        textVn: 'Tạm biệt nhé! Hẹn gặp lại! — Nói khi rời đi hoặc ra về',
        correct: true
      },
      {
        textPl: 'Pytanie o aktualną godzinę lub właściwy numer strony w książce',
        textVn: 'Lời chào buổi sáng khi mới bước vào phòng thay đồ',
        correct: false
      },
      {
        textPl: 'Oficjalne powitanie pani nauczycielki w sali lekcyjnej w szkole',
        textVn: 'Hỏi đường đến phòng tập thể dục',
        correct: false
      }
    ],
    explanationPl: 'Super! „Nara!” mówimy, gdy żegnamy się z kolegami!',
    explanationVn: 'Chuẩn luôn! "Nara!" dùng để chào tạm biệt bạn bè khi chia tay!'
  },
  {
    id: 'w_cotam',
    sliceLabel: 'CO TAM?',
    sliceColor: '#8ac926',
    badge: 'PYTANIE • CÂU HỎI THĂM',
    speakText: 'Co tam?',
    options: [
      {
        textPl: 'Pyta, co u Ciebie nowego i jak Ci mija dzień',
        textVn: 'Hỏi thăm: "Có gì mới không? / Dạo này cậu thế nào?"',
        correct: true
      },
      {
        textPl: 'Pyta, o której godzinie zaczyna się przerwa',
        textVn: 'Hỏi xem mấy giờ thì đến giờ ra chơi',
        correct: false
      },
      {
        textPl: 'Pyta, gdzie zostawiłeś buty na zmianę',
        textVn: 'Hỏi xem cậu để giày thay ở đâu',
        correct: false
      }
    ],
    explanationPl: 'Ekstra! „Co tam?” to koleżeńskie pytanie o to, co u Ciebie nowego.',
    explanationVn: 'Chính xác! "Co tam?" nghĩa là "Có gì mới không? / Mọi chuyện thế nào?".'
  },
  {
    id: 'w_elo',
    sliceLabel: 'ELO!',
    sliceColor: '#1982c4',
    badge: 'POWITANIE • LỜI CHÀO',
    speakText: 'Elo!',
    options: [
      {
        textPl: '„Elo!” lub „Siema!” — powitanie rówieśników',
        textVn: '"Elo!" hoặc "Siema!" — Lời chào bạn bè cùng trang lứa',
        correct: true
      },
      {
        textPl: '„Nara!” — pożegnanie przed wyjściem',
        textVn: '"Nara!" — Lời chào tạm biệt khi ra về',
        correct: false
      },
      {
        textPl: '„Dobranoc!” — pożegnanie przed snem',
        textVn: '"Dobranoc!" — Chúc ngủ ngon',
        correct: false
      }
    ],
    explanationPl: 'Dokładnie! Na powitanie mówimy „Elo!” albo „Siema!”.',
    explanationVn: 'Đúng rồi! Khi mới gặp bạn bè thì nói "Elo!" hoặc "Siema!".'
  },
  {
    id: 'w_spoko',
    sliceLabel: 'SPOKO!',
    sliceColor: '#6a4c93',
    badge: 'ODPOWIEDŹ • CÂU TRẢ LỜI',
    speakText: 'Spoko!',
    options: [
      {
        textPl: '„Spoko!” — u mnie wszystko w porządku',
        textVn: '"Spoko!" — Mọi thứ đều ổn cả / Rất tốt!',
        correct: true
      },
      {
        textPl: '„Nara!” — już wychodzę do domu',
        textVn: '"Nara!" — Tạm biệt nhé',
        correct: false
      },
      {
        textPl: '„Co tam?” — powtórzę tylko pytanie bez odpowiedzi',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    sliceLabel: 'GRASZ W...?',
    sliceColor: '#3a86ff',
    badge: 'GRY I HOBBY',
    speakText: 'Grasz w Roblox?',
    options: [
      { textPl: 'bạn đang chơi...?', correct: true },
      { textPl: 'bạn sống ở...?', correct: false },
      { textPl: 'bạn chạy ở...?', correct: false }
    ],
    explanationPl: 'Brawo! „Grasz w...?” to po wietnamsku: bạn đang chơi...?'
  },
  {
    id: 'b3_w_nick',
    sliceLabel: 'JAKI MASZ NICK?',
    sliceColor: '#ff9f1c',
    badge: 'PROFIL GRACZA',
    speakText: 'Jaki masz nick?',
    options: [
      { textPl: 'tên tài khoản của bạn là gì?', correct: true },
      { textPl: 'bạn bao nhiêu tuổi rồi thế?', correct: false },
      { textPl: 'bạn hiện đang sống ở đâu?', correct: false }
    ],
    explanationPl: 'Super! „Jaki masz nick?” to po wietnamsku: tên tài khoản của bạn là gì?'
  },
  {
    id: 'b3_w_id',
    sliceLabel: 'DASZ ID?',
    sliceColor: '#06d6a0',
    badge: 'ZNAJOMI W GRZE',
    speakText: 'Dasz ID?',
    options: [
      { textPl: 'cho mình xin ID của bạn nhé?', correct: true },
      { textPl: 'bạn có bút viết ở đây không?', correct: false },
      { textPl: 'bạn đã cảm thấy đói bụng chưa?', correct: false }
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
