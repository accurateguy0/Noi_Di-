// Biletomat Miejski ZTM
// Kara: bije 3 HP za niewystarczającą ilość monet!
// Krok 1: Wybór języka (ukraiński, polski, angielski) -> zmiana języka ekranu -> przycisk zatwierdzenia.
// Krok 2: Wybór czasu: 20 min, 75 min, 90 min.
// Cennik:
// - 20 min: ulgowy 1 moneta, normalny 3 monety
// - 75 min: ulgowy 2 monety, normalny 4 monety
// - 90 min: ulgowy 3 monety, normalny 7 monet

export const BILETOMAT_DATA = {
  penaltyDamage: 3,
  icon: './assets/Postacie/Biletomat.png',
  titlePl: 'Biletomat Miejski (3 HP kary)',
  descriptionPl: 'Wybierz język, zatwierdź i kup bilet na odpowiedni czas. Uwaga na brak monet (-3 HP)!',
  languages: [
    { code: 'pl', name: 'Polski', sub: 'Domyślny', flag: '🇵🇱', confirmBtn: 'ZATWIERDŹ JĘZYK ➔', title: 'BILETOMAT MIEJSKI ZTM' },
    { code: 'en', name: 'English', sub: 'International', flag: '🇬🇧', confirmBtn: 'CONFIRM LANGUAGE ➔', title: 'CITY TICKET MACHINE' },
    { code: 'uk', name: 'Українська', sub: 'Для гостей', flag: '🇺🇦', confirmBtn: 'ПІДТВЕРДИТИ МОВУ ➔', title: 'МІСЬКИЙ КВИТКОВИЙ АВТОМАТ' }
  ],
  durations: [
    { id: '20', label: '20 minut', desc: 'Krótki przejazd po dzielnicy', ulgowyPrice: 1, normalnyPrice: 3 },
    { id: '75', label: '75 minut', desc: 'Przejazd przez całe miasto z przesiadkami', ulgowyPrice: 2, normalnyPrice: 4 },
    { id: '90', label: '90 minut', desc: 'Długa trasa podmiejska', ulgowyPrice: 3, normalnyPrice: 7 }
  ]
};
