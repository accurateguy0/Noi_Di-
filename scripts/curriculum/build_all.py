# -*- coding: utf-8 -*-
"""
Kompilator całej bazy wyzwań dla 6 bohaterów i nieelitarnych bossów do pliku:
src/data/heroCurriculumEncounters.js
"""
import json
import os
import sys

# Dodaj bieżący katalog do ścieżki
curr_dir = os.path.dirname(os.path.abspath(__file__))
if curr_dir not in sys.path:
    sys.path.append(curr_dir)

import gen_kolezanka
import gen_mysli
import gen_ptak
import gen_szczeniak
import gen_jez
import gen_zaba
import gen_zajac
import gen_kalamarnica
import gen_bosses

kolezanka = gen_kolezanka.get_kolezanka_data()
mysli = gen_mysli.get_mysli_data()
ptak = gen_ptak.get_ptak_data()
szczeniak = gen_szczeniak.get_szczeniak_data()
jez = gen_jez.get_jez_data()
zaba = gen_zaba.get_zaba_data()
zajac = gen_zajac.get_zajac_data()
kalamarnica = gen_kalamarnica.get_kalamarnica_data()
bosses = gen_bosses.get_regular_boss_encounters()

out_path = os.path.join(curr_dir, '..', '..', 'src', 'data', 'heroCurriculumEncounters.js')
out_path = os.path.abspath(out_path)

js_helpers = """
/**
 * Zwraca nieelitarny wariant bossa (do dołączenia do zwykłych przeciwników na planszach 1–5).
 * Zasada: Nie może się pojawić, jeśli dana postać jest bossem obecnego epizodu!
 */
export function getRegularBossEncounter(bossId) {
  if (!bossId) return null;
  const key = String(bossId).toLowerCase();
  return REGULAR_BOSS_ENCOUNTERS[key] || null;
}

/**
 * Zwraca listę dozwolonych nieelitarnych bossów na planszach 1–5,
 * wykluczając bossa obecnego epizodu (currentBossId).
 */
export function getCandidateBossEncounters(currentBossId = null) {
  const cur = currentBossId ? String(currentBossId).toLowerCase() : '';
  const allowed = [];
  for (const [id, enc] of Object.entries(REGULAR_BOSS_ENCOUNTERS)) {
    if (id !== cur) {
      allowed.push(enc);
    }
  }
  return allowed;
}
"""

js_content = (
    "// AUTO-GENERATED CURRICULUM DATABASE FOR ALL 6 HEROES & REGULAR BOSSES\n"
    "// Generated with complete curriculum alignment (klasy 4–8 CKE, egzamin ósmoklasisty)\n\n"
    f"export const HERO_KOLEZANKA_SETS = {json.dumps(kolezanka, ensure_ascii=False, indent=2)};\n\n"
    f"export const HERO_MYSLI_SETS = {json.dumps(mysli, ensure_ascii=False, indent=2)};\n\n"
    f"export const HERO_GLOSNY_PTAK_SETS = {json.dumps(ptak, ensure_ascii=False, indent=2)};\n"
    "export const HERO_PTAK_SETS = HERO_GLOSNY_PTAK_SETS;\n\n"
    f"export const HERO_SZCZENIAK_SETS = {json.dumps(szczeniak, ensure_ascii=False, indent=2)};\n\n"
    f"export const HERO_JEZ_SETS = {json.dumps(jez, ensure_ascii=False, indent=2)};\n\n"
    f"export const HERO_ZABA_SETS = {json.dumps(zaba, ensure_ascii=False, indent=2)};\n\n"
    f"export const HERO_ZAJAC_SETS = {json.dumps(zajac, ensure_ascii=False, indent=2)};\n"
    "export const HERO_ZAJAC_WORDS = HERO_ZAJAC_SETS;\n\n"
    f"export const HERO_KALAMARNICA_SETS = {json.dumps(kalamarnica, ensure_ascii=False, indent=2)};\n"
    "export const HERO_KALAMARNICA_ANAGRAMS = HERO_KALAMARNICA_SETS;\n\n"
    f"export const REGULAR_BOSS_ENCOUNTERS = {json.dumps(bosses, ensure_ascii=False, indent=2)};\n\n"
    + js_helpers
)

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated hero curriculum encounters at: {out_path}")
print(f"Total size: {os.path.getsize(out_path):,} bytes")
