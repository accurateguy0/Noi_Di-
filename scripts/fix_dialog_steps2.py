import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/dialogSteps.js', 'r', encoding='utf-8') as f:
    content = f.read()

REPLACEMENTS = [
    # olek_1_q3 (around line 50)
    ("{ text: 'Poproszę bilet ulgowy.', vnText: 'Cho xin vé giảm giá.', speakText: 'Bilet', correct: false },\n          { text: 'Boli mnie brzuch.', vnText: 'Tớ đau bụng.', speakText: 'Brzuch', correct: false },\n          { text: 'Do widzenia jutro!', vnText: 'Tạm biệt hẹn ngày mai!', speakText: 'Do widzenia', correct: false }",
     "{ text: 'Poproszę jeden ulgowy bilet do autobusu.', vnText: 'Cho xin một vé giảm giá xe buýt.', speakText: 'Bilet', correct: false },\n          { text: 'Boli mnie bardzo mocno brzuch od rana.', vnText: 'Tớ bị đau bụng dữ dội từ sáng.', speakText: 'Brzuch', correct: false },\n          { text: 'Do widzenia jutro rano po południu!', vnText: 'Tạm biệt hẹn ngày mai nhé!', speakText: 'Do widzenia', correct: false }"),

    # olek_2_q5 (around line 157)
    ("{ text: 'Elo ziomek!', vnText: 'Chào ông bạn!', speakText: 'Elo!', correct: false },\n          { text: 'Nara, wychodzę!', vnText: 'Tạm biệt, tớ đi đây!', speakText: 'Nara!', correct: false },\n          { text: 'Smacznego!', vnText: 'Chúc ngon miệng!', speakText: 'Smacznego!', correct: false }",
     "{ text: 'Siemanko kolego z ławki!', vnText: 'Chào bạn cùng bàn nhé!', speakText: 'Elo!', correct: false },\n          { text: 'Nara, uciekam na dwór!', vnText: 'Tạm biệt, tớ chuồn ra sân!', speakText: 'Nara!', correct: false },\n          { text: 'Życzę smacznego obiadu!', vnText: 'Chúc bữa trưa ngon miệng!', speakText: 'Smacznego!', correct: false }"),

    # b5_q1
    ("{ textPl: '„Nara!” — pożegnanie', correct: false },\n      { textPl: '„Która strona?” — pytanie o stronę w książce', correct: false }",
     "{ textPl: '„Nara!” — luźne pożegnanie z kolegami po zakończonych lekcjach', correct: false },\n      { textPl: '„Która strona?” — zapytanie o stronę z zadaniem w podręczniku', correct: false }"),

    # b5_q2
    ("{ textPl: '„Grasz w...?” — pytanie o gry', correct: false },\n      { textPl: '„Przypał!” — reakcja na wpadkę', correct: false }",
     "{ textPl: '„Grasz w...?” — pytanie o ulubione gry komputerowe ze znajomymi', correct: false },\n      { textPl: '„Przypał!” — spontaniczna reakcja na niespodziewaną szkolną wpadkę', correct: false }"),

    # b5_q3
    ("{ textPl: '„Siema!” — powitanie', correct: false },\n      { textPl: '„Masakra!” — wyraz przerażenia', correct: false }",
     "{ textPl: '„Siema!” — serdeczne powitanie z kolegą', correct: false },\n      { textPl: '„Masakra!” — wyraz ogromnego przerażenia', correct: false }"),

    # b5_t1
    ("{ textPl: '„Masz ID?” — pytanie o profil w grze', correct: false },\n      { textPl: '„Dobranoc!” — pożegnanie', correct: false }",
     "{ textPl: '„Masz ID?” — pytanie o numer profilu w internetowej grze', correct: false },\n      { textPl: '„Dobranoc!” — wieczorne pożegnanie przed pójściem do łóżka', correct: false }"),

    # b5_t2
    ("{ textPl: '„Mam sneakersy!” — pochwała butów', correct: false },\n      { textPl: '„Nara!” — wyjście z sali', correct: false }",
     "{ textPl: '„Mam sneakersy!” — pochwalenie się nowymi sportowymi butami', correct: false },\n      { textPl: '„Nara!” — pożegnanie przed szybkim wyjściem z sali lekcyjnej', correct: false }")
]

for old, new in REPLACEMENTS:
    if old not in content:
        print(f"WARN: not found:\n{old[:50]}...")
    content = content.replace(old, new)

with open('src/data/dialogSteps.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated dialogSteps.js successfully!")
