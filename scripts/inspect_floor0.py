import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Let's inspect floor0EpisodesData.js
with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how scenarios/options are structured in floor0EpisodesData.js
print('Sample from floor0EpisodesData.js:')
print(text[:1500])
