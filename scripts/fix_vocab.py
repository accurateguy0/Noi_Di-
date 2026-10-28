import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/vocabulary.js', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace("textPl: 'bạn bao nhiêu tuổi?'", "textPl: 'bạn bao nhiêu tuổi rồi thế?'")
c = c.replace("textPl: 'bạn sống ở đâu?'", "textPl: 'bạn hiện đang sống ở đâu?'")
c = c.replace("textPl: 'bạn có bút không?'", "textPl: 'bạn có bút viết ở đây không?'")
c = c.replace("textPl: 'bạn đói bụng chưa?'", "textPl: 'bạn đã cảm thấy đói bụng chưa?'")

with open('src/data/vocabulary.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated vocabulary.js!')
