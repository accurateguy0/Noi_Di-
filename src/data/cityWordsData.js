// Słownictwo i koła fortuny dla Modułu 2: Miasto (Sklep, Kebab, Komunikacja Miejska)

export const CITY_1_WORDS = [
  {
    id: 'c1_reklamowka',
    word: 'reklamówka (torba)',
    cleanWord: 'reklamówka',
    phonetic: '[re-kla-muf-ka]',
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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
    emoji: '',
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

export const CITY_1_WHEEL_SCENARIOS = [
  {
    id: 'c1_w_reklamowka',
    sliceLabel: 'REKLAMÓWKA',
    sliceColor: '#06d6a0',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'reklamówka',
    options: [
      { textPl: 'Túi ni lông', correct: true },
      { textPl: 'Bánh mì', correct: false },
      { textPl: 'Nước khoáng', correct: false },
      { textPl: 'Khoai tây chiên', correct: false },
      { textPl: 'Thẻ ngân hàng', correct: false },
      { textPl: 'Tiền mặt', correct: false }
    ],
    explanationPl: 'Świetnie! „Reklamówka” to po wietnamsku: Túi ni lông / Túi đựng đồ.',
    explanationVn: 'Tuyệt vời! „Reklamówka” trong tiếng Việt nghĩa là túi ni lông hoặc túi đựng đồ mua sắm.'
  },
  {
    id: 'c1_w_bulka',
    sliceLabel: 'BUŁKA',
    sliceColor: '#ffd166',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'bułka',
    options: [
      { textPl: 'Bánh mì', correct: true },
      { textPl: 'Túi ni lông', correct: false },
      { textPl: 'Nước khoáng', correct: false },
      { textPl: 'Khoai tây chiên', correct: false },
      { textPl: 'Thẻ ngân hàng', correct: false },
      { textPl: 'Tiền mặt', correct: false }
    ],
    explanationPl: 'Doskonale! „Bułka” to po wietnamsku: Bánh mì.',
    explanationVn: 'Xuất sắc! „Bułka” trong tiếng Việt nghĩa là chiếc bánh mì.'
  },
  {
    id: 'c1_w_woda',
    sliceLabel: 'WODA',
    sliceColor: '#3a86ff',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'woda',
    options: [
      { textPl: 'Nước khoáng', correct: true },
      { textPl: 'Túi ni lông', correct: false },
      { textPl: 'Bánh mì', correct: false },
      { textPl: 'Khoai tây chiên', correct: false },
      { textPl: 'Thẻ ngân hàng', correct: false },
      { textPl: 'Tiền mặt', correct: false }
    ],
    explanationPl: 'Brawo! „Woda” to po wietnamsku: Nước khoáng.',
    explanationVn: 'Hoan hô! „Woda” trong tiếng Việt là nước khoáng.'
  },
  {
    id: 'c1_w_czipsy',
    sliceLabel: 'CZIPSY',
    sliceColor: '#f77f00',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'czipsy',
    options: [
      { textPl: 'Khoai tây chiên', correct: true },
      { textPl: 'Túi ni lông', correct: false },
      { textPl: 'Bánh mì', correct: false },
      { textPl: 'Nước khoáng', correct: false },
      { textPl: 'Thẻ ngân hàng', correct: false },
      { textPl: 'Tiền mặt', correct: false }
    ],
    explanationPl: 'Super! „Czipsy” to po wietnamsku: Khoai tây chiên (bim bim).',
    explanationVn: 'Tuyệt! „Czipsy” trong tiếng Việt là bim bim hoặc khoai tây chiên.'
  },
  {
    id: 'c1_w_karta',
    sliceLabel: 'KARTA',
    sliceColor: '#8338ec',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'karta',
    options: [
      { textPl: 'Thẻ ngân hàng', correct: true },
      { textPl: 'Tiền mặt', correct: false },
      { textPl: 'Túi ni lông', correct: false },
      { textPl: 'Bánh mì', correct: false },
      { textPl: 'Nước khoáng', correct: false },
      { textPl: 'Khoai tây chiên', correct: false }
    ],
    explanationPl: 'Wspaniale! „Karta” to po wietnamsku: Thẻ ngân hàng.',
    explanationVn: 'Tuyệt vời! „Karta” trong tiếng Việt là thẻ ngân hàng.'
  },
  {
    id: 'c1_w_gotowka',
    sliceLabel: 'GOTÓWKA',
    sliceColor: '#2ec4b6',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'gotówka',
    options: [
      { textPl: 'Tiền mặt', correct: true },
      { textPl: 'Thẻ ngân hàng', correct: false },
      { textPl: 'Túi ni lông', correct: false },
      { textPl: 'Bánh mì', correct: false },
      { textPl: 'Nước khoáng', correct: false },
      { textPl: 'Khoai tây chiên', correct: false }
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
    emoji: '',
    cleanWord: 'kebab',
    category: 'JEDZENIE',
    color: '#f77f00',
    examplePl: 'Klient: „Poproszę duży kebab z kurczakiem.”',
    exampleVn: 'Khách: „Cho em một phần Kebab gà lớn.”'
  },
  {
    id: 'city2_burger',
    word: 'Burger',
    phonetic: '[boor-gher]',
    plMeaning: 'Kotlet w puszystej bułce z serem, sałatą i sosem.',
    vnMeaning: 'Bánh mì kẹp thịt bò/gà với phô mai và rau tươi.',
    emoji: '',
    cleanWord: 'burger',
    category: 'JEDZENIE',
    color: '#ffb703',
    examplePl: 'Klient: „Poproszę klasyczny burger wołowy.”',
    exampleVn: 'Khách: „Cho em một chiếc burger bò truyền thống.”'
  },
  {
    id: 'city2_pizza',
    word: 'Pizza',
    phonetic: '[peet-tsa]',
    plMeaning: 'Włoski placek z sosem pomidorowym, serem i dodatkami.',
    vnMeaning: 'Bánh Pizza nướng với xốt cà chua và phô mai.',
    emoji: '',
    cleanWord: 'pizza',
    category: 'JEDZENIE',
    color: '#e63946',
    examplePl: 'Klient: „Poproszę pizzę margherita.”',
    exampleVn: 'Khách: „Cho em một chiếc bánh pizza margherita.”'
  },
  {
    id: 'city2_sos_czosnkowy',
    word: 'Sos czosnkowy',
    phonetic: '[sos chos-nko-vy]',
    plMeaning: 'Kremowy, łagodny sos o aromacie czosnku i ziół.',
    vnMeaning: 'Nước xốt tỏi béo ngậy, vị nhẹ dịu không cay.',
    emoji: '',
    cleanWord: 'sos czosnkowy',
    category: 'SOSY',
    color: '#8ecae6',
    examplePl: 'Klient: „Poproszę sos czosnkowy do kebaba.”',
    exampleVn: 'Khách: „Cho em thêm xốt tỏi vào Kebab nhé.”'
  },
  {
    id: 'city2_sos_ostry',
    word: 'Sos ostry',
    phonetic: '[sos os-try]',
    plMeaning: 'Pikantny sos chili dla miłośników wyrazistego smaku.',
    vnMeaning: 'Nước xốt ớt cay nồng đậm đà.',
    emoji: '',
    cleanWord: 'sos ostry',
    category: 'SOSY',
    color: '#d90429',
    examplePl: 'Klient: „Poproszę sos ostry, lubię pikantne jedzenie!”',
    exampleVn: 'Khách: „Cho em xốt cay, em thích ăn cay!”'
  },
  {
    id: 'city2_na_miejscu',
    word: 'Na miejscu',
    phonetic: '[na myey-stsoo]',
    plMeaning: 'Zjedzenie posiłku przy stoliku w lokalu gastronomicznym.',
    vnMeaning: 'Ăn tại quán / Dùng tại chỗ.',
    emoji: '',
    cleanWord: 'na miejscu',
    category: 'SPOSÓB',
    color: '#06d6a0',
    examplePl: 'Sprzedawca: „Na miejscu czy na wynos?” Klient: „Na miejscu!”',
    exampleVn: 'Người bán: „Ăn tại đây hay mang về?” Khách: „Ăn tại quán ạ!”'
  },
  {
    id: 'city2_na_wynos',
    word: 'Na wynos',
    phonetic: '[na vy-nos]',
    plMeaning: 'Zapakowanie posiłku do papierowej torby do zjedzenia w domu.',
    vnMeaning: 'Gói mang về / Mang đi.',
    emoji: '',
    cleanWord: 'na wynos',
    category: 'SPOSÓB',
    color: '#118ab2',
    examplePl: 'Klient: „Poproszę na wynos, zjem w domu.”',
    exampleVn: 'Khách: „Gói mang về giúp em, em ăn ở nhà.”'
  }
];

export const CITY_2_WHEEL_SCENARIOS = [
  {
    id: 'c2_w_kebab',
    sliceLabel: 'KEBAB',
    sliceColor: '#f77f00',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Kebab',
    options: [
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: true },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Brawo! „Kebab” to po wietnamsku thịt nướng cuộn bánh mì Kebab.',
    explanationVn: 'Tuyệt vời! „Kebab” trong tiếng Việt là món thịt nướng cuộn bánh mì.'
  },
  {
    id: 'c2_w_burger',
    sliceLabel: 'BURGER',
    sliceColor: '#ffb703',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Burger',
    options: [
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: true },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Świetnie! Burger to bánh mì kẹp thịt bò lub gà.',
    explanationVn: 'Xuất sắc! Burger là bánh mì kẹp thịt bò hoặc gà.'
  },
  {
    id: 'c2_w_pizza',
    sliceLabel: 'PIZZA',
    sliceColor: '#e63946',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Pizza',
    options: [
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: true },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Doskonale! Pizza to włoski wypiek z serem (bánh pizza nướng).',
    explanationVn: 'Chính xác! Pizza là bánh pizza nướng với phô mai và xốt cà chua.'
  },
  {
    id: 'c2_w_czosnkowy',
    sliceLabel: 'SOS CZOSNKOWY',
    sliceColor: '#8ecae6',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Sos czosnkowy',
    options: [
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: true },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Znakomicie! Sos czosnkowy to nước xốt tỏi thơm ngon.',
    explanationVn: 'Rất tốt! Sos czosnkowy là nước xốt tỏi béo nhẹ thơm ngon.'
  },
  {
    id: 'c2_w_ostry',
    sliceLabel: 'SOS OSTRY',
    sliceColor: '#d90429',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Sos ostry',
    options: [
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: true },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false }
    ],
    explanationPl: 'Super! Sos ostry to nước xốt ớt cay nồng đậm đà.',
    explanationVn: 'Tuyệt vời! Sos ostry là nước xốt ớt cay nồng đậm đà.'
  },
  {
    id: 'c2_w_miejscu',
    sliceLabel: 'NA MIEJSCU',
    sliceColor: '#06d6a0',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Na miejscu',
    options: [
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: true },
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: false },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false }
    ],
    explanationPl: 'Wspaniale! „Na miejscu” oznacza zjedzenie posiłku w lokalu (ăn tại quán).',
    explanationVn: 'Tuyệt! „Na miejscu” nghĩa là ăn tại quán hoặc dùng tại chỗ.'
  },
  {
    id: 'c2_w_wynos',
    sliceLabel: 'NA WYNOS',
    sliceColor: '#118ab2',
    badge: 'TŁUMACZENIE • DỊCH NGHĨA',
    speakText: 'Na wynos',
    options: [
      { textPl: '„Na wynos”', textVn: 'Gói mang về / Mang đi', correct: true },
      { textPl: '„Na miejscu”', textVn: 'Ăn tại quán / Dùng tại chỗ', correct: false },
      { textPl: '„Sos ostry”', textVn: 'Nước xốt ớt cay nồng đậm đà', correct: false },
      { textPl: '„Sos czosnkowy”', textVn: 'Nước xốt tỏi béo ngậy dịu', correct: false },
      { textPl: '„Pizza”', textVn: 'Bánh Pizza nướng phô mai', correct: false },
      { textPl: '„Burger”', textVn: 'Bánh mì kẹp thịt bò / gà', correct: false },
      { textPl: '„Kebab”', textVn: 'Thịt nướng cuộn bánh mì Kebab', correct: false }
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
    emoji: '',
    cleanWord: 'bilet ulgowy',
    category: 'KOMUNIKACJA',
    color: '#3a86ff',
    examplePl: 'Pasażer: „W biletomacie kupuję bilet ulgowy 20-minutowy.”',
    exampleVn: 'Hành khách: „Ở máy bán vé em mua vé giảm giá 20 phút.”'
  },
  {
    id: 'city3_bilet_normalny',
    word: 'Bilet normalny',
    phonetic: '[bee-let nor-mal-ny]',
    plMeaning: 'Bilet w pełnej cenie dla pasażerów bez ulg uczniowskich.',
    vnMeaning: 'Vé tiêu chuẩn giá gốc cho hành khách không có giảm giá.',
    emoji: '',
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
    emoji: '',
    cleanWord: 'legitymacja',
    category: 'DOKUMENTY',
    color: '#ff006e',
    examplePl: 'Inspektor: „Legitymację poproszę!” Pasażer: „Proszę, oto legitymacja!”',
    exampleVn: 'Thanh tra: „Cho xin thẻ học sinh!” Hành khách: „Dạ đây, thẻ học sinh của em ạ!”'
  },
  {
    id: 'city3_biletomat',
    word: 'Biletomat',
    phonetic: '[bee-le-to-mat]',
    plMeaning: 'Automatyczna maszyna na przystanku do zakupu biletów.',
    vnMeaning: 'Máy bán vé tự động tại các trạm xe buýt hoặc xe điện.',
    emoji: '',
    cleanWord: 'biletomat',
    category: 'MIASTO',
    color: '#06d6a0',
    examplePl: 'Pasażer podchodzi do biletomatu i wybiera język polski.',
    exampleVn: 'Hành khách đến máy bán vé tự động và chọn tiếng Ba Lan.'
  },
  {
    id: 'city3_przystanek',
    word: 'Przystanek',
    phonetic: '[pshy-sta-nek]',
    plMeaning: 'Wyznaczone miejsce z wiatą, gdzie zatrzymuje się autobus lub tramwaj.',
    vnMeaning: 'Trạm dừng xe buýt hoặc tàu điện có bảng giờ chạy.',
    emoji: '',
    cleanWord: 'przystanek',
    category: 'KOMUNIKACJA',
    color: '#ffbe0b',
    examplePl: 'Pasażer: „Czekam na autobus na przystanku.”',
    exampleVn: 'Hành khách: „Em đang đợi xe buýt tại trạm dừng.”'
  },
  {
    id: 'city3_jak_dojsc',
    word: 'Jak dojść?',
    phonetic: '[yak doyshch]',
    plMeaning: 'Uprzejme pytanie o drogę do wybranego celu w mieście.',
    vnMeaning: 'Làm thế nào để đi đến...? / Đường nào đến...?',
    emoji: '',
    cleanWord: 'jak dojść',
    category: 'PYTANIE',
    color: '#8338ec',
    examplePl: 'Pasażer: „Przepraszam, jak dojść na przystanek tramwajowy?”',
    exampleVn: 'Hành khách: „Xin lỗi, làm thế nào để đi đến trạm xe điện ạ?”'
  }
];

export const CITY_3_WHEEL_SCENARIOS = [
  {
    id: 'c3_w_droga',
    sliceLabel: 'JAK DOJŚĆ?',
    sliceColor: '#8338ec',
    badge: 'PYTANIE O DROGĘ • HỎI ĐƯỜNG',
    speakText: 'Przepraszam jak dojść',
    options: [
      { textPl: '„Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: true },
      { textPl: '„Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt / xe điện.', correct: false },
      { textPl: '„Bilet ulgowy ze zniżką 50%.”', textVn: 'Vé giảm giá 50% cho học sinh.', correct: false },
      { textPl: '„Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '„W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Brawo! „Przepraszam, jak dojść na...” to najbardziej uprzejme pytanie o drogę.',
    explanationVn: 'Tuyệt vời! „Przepraszam, jak dojść na...” là câu hỏi đường lịch sự nhất.'
  },
  {
    id: 'c3_w_przystanek',
    sliceLabel: 'PRZYSTANEK',
    sliceColor: '#ffbe0b',
    badge: 'KOMUNIKACJA • GIAO THÔNG',
    speakText: 'Przystanek autobusowy',
    options: [
      { textPl: '„Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: true },
      { textPl: '„Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '„Bilet ulgowy ze zniżką 50%.”', textVn: 'Vé giảm giá 50% cho học sinh.', correct: false },
      { textPl: '„Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '„W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Dokładnie! Pojazdy komunikacji miejskiej zatrzymują się na wyznaczonych przystankach.',
    explanationVn: 'Chính xác! Phương tiện giao thông công cộng dừng ở trạm xe chỉ định.'
  },
  {
    id: 'c3_w_ulgowy',
    sliceLabel: 'BILET ULGOWY',
    sliceColor: '#3a86ff',
    badge: 'ZNIŻKA • GIẢM GIÁ',
    speakText: 'Bilet ulgowy',
    options: [
      { textPl: '„Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá (giảm 50% dành cho học sinh).', correct: true },
      { textPl: '„Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '„Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '„Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh còn hiệu lực.', correct: false },
      { textPl: '„W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Świetnie! Uczniowie mają prawo do biletu ulgowego z legitymacją.',
    explanationVn: 'Xuất sắc! Học sinh có quyền mua vé giảm giá khi có thẻ học sinh.'
  },
  {
    id: 'c3_w_legitymacja',
    sliceLabel: 'LEGITYMACJA',
    sliceColor: '#ff006e',
    badge: 'DOKUMENT • GIẤY TỜ',
    speakText: 'Legitymacja szkolna',
    options: [
      { textPl: '„Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh có hiệu lực.', correct: true },
      { textPl: '„Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá dành cho học sinh.', correct: false },
      { textPl: '„Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '„Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false },
      { textPl: '„W biletomacie na przystanku.”', textVn: 'Ở máy bán vé tự động.', correct: false }
    ],
    explanationPl: 'Doskonale! Legitymacja szkolna jest dowodem na prawo do zniżki ulgowej.',
    explanationVn: 'Chính xác! Thẻ học sinh là bằng chứng chứng minh quyền hưởng giá vé ưu đãi.'
  },
  {
    id: 'c3_w_biletomat',
    sliceLabel: 'BILETOMAT',
    sliceColor: '#06d6a0',
    badge: 'MIASTO • ĐÔ THỊ',
    speakText: 'Biletomat',
    options: [
      { textPl: '„W biletomacie na przystanku.”', textVn: 'Tại máy bán vé tự động ở trạm dừng.', correct: true },
      { textPl: '„Ważną legitymację szkolną.”', textVn: 'Thẻ học sinh có hiệu lực.', correct: false },
      { textPl: '„Bilet ulgowy (ze zniżką szkolną 50%).”', textVn: 'Vé giảm giá dành cho học sinh.', correct: false },
      { textPl: '„Na przystanku autobusowym / tramwajowym.”', textVn: 'Tại trạm xe buýt hoặc trạm xe điện.', correct: false },
      { textPl: '„Przepraszam, jak dojść na przystanek?”', textVn: 'Xin lỗi, làm thế nào để đi đến trạm dừng ạ?', correct: false }
    ],
    explanationPl: 'Znakomicie! Biletomat to urządzenie na przystanku do zakupu biletów.',
    explanationVn: 'Rất tốt! Máy bán vé biletomat là máy tự động để mua vé tại trạm.'
  }
];
