import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match catScenario block
# We match:
# id: '...', ... options: [ { textPl: '...', correct: ... }, ... ]
pattern = re.compile(
    r"(\{\s*id:\s*'([a-z0-9_]+)'.*?options:\s*\[\s*)"
    r"(\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*,\s*"
    r"\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*,\s*"
    r"\{\s*textPl:\s*'((?:\\.|[^'\\])*)',\s*correct:\s*(true|false)\s*\}\s*)"
    r"(\]\s*\})",
    re.DOTALL
)

matches = list(pattern.finditer(content))
print(f"Total catScenarios matched with 3 options: {len(matches)}")
