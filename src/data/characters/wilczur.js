// Wilczur - Groźny pies podwórkowy i komendy bezpieczeństwa
// 42 HP, bije po 4 HP. Prawda czy Fałsz o zachowaniu wobec psa i komendach (20 pytań w zestawie!).

export const WILCZUR_ENCOUNTERS = {
  default: {
    type: 'wolfhound_tf',
    titlePl: 'Wilczur (42 HP, 4 dmg)',
    subtitlePl: 'Wilczur i zasady bezpieczeństwa',
    icon: './assets/Postacie/wilczur.png',
    enemyName: 'Wilczur',
    enemyMaxHp: 42,
    enemyDamage: 4,
    descriptionPl: 'Wilczur pilnuje podwórka za płotem! Każdy błąd to bolesne kłapnięcie kłami (4 dmg).',
    questions: [
      {
        promptPl: "Gdy widzisz obcego psa bez smyczy, wolno od razu podbiec i zacząć go przytulać.",
        isTrue: false,
        explanation: "FAŁSZ! Nigdy nie dotykaj obcego psa bez zgody właściciela!"
      },
      {
        promptPl: "Komenda «SIAD!» nakazuje psu spokojnie usiąść na ziemi.",
        isTrue: true,
        explanation: "PRAWDA! «Siad» to podstawowa komenda posłuszeństwa."
      },
      {
        promptPl: "Gdy groźny pies biegnie w twoją stronę, najlepszą obroną jest pozycja «żółwia» (zasłonięcie karku i głowy).",
        isTrue: true,
        explanation: "PRAWDA! Pozycja żółwia chroni wrażliwe części ciała i uspokaja sytuację."
      },
      {
        promptPl: "Jeżeli pies głośno warczy i pokazuje zęby, oznacza to, że ma ochotę na wspólną zabawę.",
        isTrue: false,
        explanation: "FAŁSZ! Warczenie to wyraźny sygnał ostrzegawczy – stój spokojnie i nie wykonuj gwałtownych ruchów!"
      },
      {
        promptPl: "Podczas ataku agresywnego psa należy głośno piszczeć i uciekać przed nim sprintem.",
        isTrue: false,
        explanation: "FAŁSZ! Ucieczka uruchamia u psa instynkt łowiecki – należy stanąć nieruchomo jak drzewo."
      },
      {
        promptPl: "Komenda «LEŻEĆ!» oznacza, że pies kładzie się płasko na ziemi z brzuchem przy podłożu.",
        isTrue: true,
        explanation: "PRAWDA! To komenda wyciszająca psa w pozycji leżącej."
      },
      {
        promptPl: "Patrzenie obcemu psu prosto w oczy bez mrugania jest przez niego odbierane jako wyzwanie i groźba.",
        isTrue: true,
        explanation: "PRAWDA! Bezpośredni kontakt wzrokowy u psów to sygnał dominacji lub agresji."
      },
      {
        promptPl: "Wolno przeszkadzać psu, gdy ten je karmę z miski lub gryzie kość.",
        isTrue: false,
        explanation: "FAŁSZ! Pies może instynktownie bronić swojego jedzenia (obrona zasobów)."
      },
      {
        promptPl: "Komenda «DO MNIE!» wzywa psa do natychmiastowego przybiegnięcia do opiekuna.",
        isTrue: true,
        explanation: "PRAWDA! To kluczowa komenda zapewniająca psu bezpieczeństwo."
      },
      {
        promptPl: "Pies machający sztywno uniesionym ogonem zawsze jest wesoły i przyjazny.",
        isTrue: false,
        explanation: "FAŁSZ! Sztywny, wysoko uniesiony ogon i napięte ciało oznaczają pobudzenie i gotowość do ataku."
      },
      {
        promptPl: "Pozycja «drzewa» (ręce wzdłuż ciała, wzrok w bok, bezruch) zniechęca psa do ataku.",
        isTrue: true,
        explanation: "PRAWDA! Nieruchomy człowiek staje się dla psa nieatrakcyjnym obiektem."
      },
      {
        promptPl: "Wolno karmić psa czekoladą, rodzynkami i cebulą ze stołu.",
        isTrue: false,
        explanation: "FAŁSZ! Te produkty zawierają teobrominę i toksyny, które są śmiertelnie trujące dla psów!"
      },
      {
        promptPl: "Komenda «ZOSTAW!» nakazuje psu natychmiastowe wypuszczenie z pyska trzymanego przedmiotu.",
        isTrue: true,
        explanation: "PRAWDA! To komenda chroniąca psa przed połknięciem niebezpiecznych rzeczy."
      },
      {
        promptPl: "Wścieklizna to śmiertelna choroba wirusowa, przed którą psy muszą być obowiązkowo szczepione co roku.",
        isTrue: true,
        explanation: "PRAWDA! W Polsce coroczne szczepienie psów przeciw wściekliźnie jest prawnym obowiązkiem."
      },
      {
        promptPl: "Kaganiec fizjologiczny pozwala psu swobodnie dyszeć, pić wodę i chłodzić organizm.",
        isTrue: true,
        explanation: "PRAWDA! Kaganiec fizjologiczny daje psu komfort termoregulacji w upalne dni."
      },
      {
        promptPl: "Gdy pies ziewa lub oblizuje nos w nowej sytuacji, może to być sygnał stresu i chęci uspokojenia otoczenia.",
        isTrue: true,
        explanation: "PRAWDA! To tzw. sygnały uspokajające (Calming Signals) opisane przez behawiorystów."
      },
      {
        promptPl: "Pies poci się całym ciałem przez skórę tak samo jak człowiek.",
        isTrue: false,
        explanation: "FAŁSZ! Psy chłodzą się głównie przez dyszenie i gruczoły na opuszkach łap."
      },
      {
        promptPl: "Zbliżając się do obcego psa, należy wyciągnąć dłoń od góry prosto nad jego głowę.",
        isTrue: false,
        explanation: "FAŁSZ! Ręka unosząca się nad głową psa budzi lęk – lepiej pozwolić psu obwąchać dłoń z dołu z bezpiecznej odległości."
      },
      {
        promptPl: "Czipowanie psa polega na wszczepieniu miniaturowego mikroczipa z numerem identyfikacyjnym pod skórę.",
        isTrue: true,
        explanation: "PRAWDA! Czip pozwala odnaleźć właściciela w bazie danych w razie zgubienia psa."
      },
      {
        promptPl: "Zwrot frazeologiczny «Zejść na psy» oznacza pogorszenie się czyjejś sytuacji życiowej lub upadek.",
        isTrue: true,
        explanation: "PRAWDA! To popularny polski frazeologizm oznaczający zmarnowanie potencjału."
      }
    ]
  }
};
