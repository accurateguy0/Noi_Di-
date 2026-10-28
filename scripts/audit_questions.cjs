const fs = require('fs');

function auditQuestionList(name, questions) {
  let disparities = 0;
  let total = 0;
  if (!questions || !Array.isArray(questions)) return { total, disparities };
  for (const q of questions) {
    if (!q || !q.options || !Array.isArray(q.options)) continue;
    total++;
    const texts = q.options.map(opt => {
      if (typeof opt === 'string') return opt;
      if (opt && typeof opt === 'object' && opt.text) return opt.text;
      return '';
    }).filter(Boolean);

    if (texts.length >= 2) {
      const lengths = texts.map(t => t.length);
      const minL = Math.min(...lengths);
      const maxL = Math.max(...lengths);
      if (minL > 0 && ((maxL / minL > 1.6 && (maxL - minL) > 15) || (maxL - minL) > 28)) {
        disparities++;
      }
    }
  }
  return { total, disparities };
}

async function checkCurriculum() {
  console.log("=== Checking heroCurriculumEncounters.js ===");
  const mod = await import('../src/data/heroCurriculumEncounters.js');
  let grandTotal = 0;
  let grandDisparities = 0;

  for (const [key, val] of Object.entries(mod)) {
    if (typeof val !== 'object' || !val) continue;
    let setTotal = 0;
    let setDisparities = 0;
    
    // Can be object of heroes: { olek: [ { questions: [...] } ] }
    for (const [subKey, subVal] of Object.entries(val)) {
      if (Array.isArray(subVal)) {
        for (const item of subVal) {
          if (item && Array.isArray(item.questions)) {
            const res = auditQuestionList(`${key}->${subKey}`, item.questions);
            setTotal += res.total;
            setDisparities += res.disparities;
          }
        }
      } else if (subVal && typeof subVal === 'object' && Array.isArray(subVal.questions)) {
        const res = auditQuestionList(`${key}->${subKey}`, subVal.questions);
        setTotal += res.total;
        setDisparities += res.disparities;
      }
    }
    if (setTotal > 0) {
      console.log(`  ${key}: ${setTotal} questions, ${setDisparities} severe disparities`);
      grandTotal += setTotal;
      grandDisparities += setDisparities;
    }
  }
  console.log(`Curriculum Grand Total: ${grandTotal} questions, ${grandDisparities} severe disparities\n`);
}

async function checkCharacters() {
  console.log("=== Checking Characters ===");
  const files = [
    ['zaba.js', '../src/data/characters/zaba.js', 'ZABA_FLOOR_ENCOUNTERS'],
    ['nauczycielka.js', '../src/data/characters/nauczycielka.js', 'NAUCZYCIELKA_FLOOR_ENCOUNTERS'],
    ['szczeniak.js', '../src/data/characters/szczeniak.js', 'SZCZENIAK_FLOOR_ENCOUNTERS'],
    ['olek.js', '../src/data/characters/olek.js', 'OLEK_FLOOR_ENCOUNTERS'],
    ['glosny_ptak.js', '../src/data/characters/glosny_ptak.js', 'GLOSNY_PTAK_SETS'],
  ];

  for (const [name, relPath, expName] of files) {
    try {
      const mod = await import(relPath);
      const data = mod[expName];
      let total = 0;
      let disparities = 0;
      if (Array.isArray(data)) {
        for (const item of data) {
          if (item && item.questions) {
            const res = auditQuestionList(name, item.questions);
            total += res.total;
            disparities += res.disparities;
          }
        }
      } else if (data && typeof data === 'object') {
        for (const [k, item] of Object.entries(data)) {
          if (item && item.questions) {
            const res = auditQuestionList(`${name} Floor ${k}`, item.questions);
            total += res.total;
            disparities += res.disparities;
          }
        }
      }
      console.log(`  ${name}: ${total} questions, ${disparities} severe disparities`);
    } catch (e) {
      console.error(`Error loading ${name}:`, e.message);
    }
  }
}

async function main() {
  await checkCurriculum();
  await checkCharacters();
}

main().catch(console.error);
