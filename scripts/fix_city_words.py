import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/cityWordsData.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace Túi ni lông (Túi đựng đồ) -> Túi ni lông
c = c.replace('Túi ni lông (Túi đựng đồ)', 'Túi ni lông')
# Replace Khoai tây chiên (Bim bim) -> Khoai tây chiên
c = c.replace('Khoai tây chiên (Bim bim)', 'Khoai tây chiên')

# In c2 questions if options for Sos czosnkowy has Pizza/Burger, make them all similar
# Let's inspect where Sos czosnkowy is in options:
with open('src/data/cityWordsData.js', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated cityWordsData.js")
