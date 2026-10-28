import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/floor0EpisodesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's write a generator that replaces each catScenario's options
# Let's inspect the exact pattern of catScenarios
pattern = re.compile(r"(\{\s*id:\s*'([a-z0-9_]+)'.*?options:\s*\[)(.*?)(\]\s*\})", re.DOTALL)

matches = list(pattern.finditer(content))
print(f"Total catScenarios found in content: {len(matches)}")
