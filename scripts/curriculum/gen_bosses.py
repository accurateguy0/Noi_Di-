# -*- coding: utf-8 -*-
"""
Regularne (nieelitarne) warianty postaci bossowych na planszach 1–5.
Statystyki ustalone przez użytkownika:
- Szkieleton: zwykła 24 HP, bije 2 (boss 50 HP, 3 dmg)
- Smok: zwykła 34 HP, bije 2 (boss 68 HP, 4 dmg)
- Instagramerka: zwykła 34 HP, bije 2 (boss 77 HP, 5 dmg)
- Piłkarz: zwykła 30 HP, bije 2 (boss 61 HP, 5 dmg)
- Nauczycielka: zwykła 35 HP, bije 2 (boss 70 HP, 2 dmg)
- Cwaniak: zwykła 35 HP, bije 2 (boss 70 HP, 3 dmg)
- Siłaczka: zwykła 36 HP, bije 2 (boss 74 HP, 4 dmg)
- Dyrektorka: zwykła 35 HP, bije 3 (boss 70 HP, 5 dmg)
- Lekarz: zwykła 31 HP, bije 2 (boss 62 HP, 4 dmg)
- Profesor: zwykła 28 HP, bije 2 (boss 56 HP, 2 dmg)
"""

def get_regular_boss_encounters():
    return {
        'szkieleton': {
            'bossId': 'szkieleton',
            'enemyName': 'Szkieleton',
            'titlePl': 'Szkieleton (24 HP, 2 dmg)',
            'subtitlePl': 'Model anatomiczny z sali biologicznej',
            'icon': './assets/Postacie/szkieleton.png',
            'enemyMaxHp': 24,
            'enemyDamage': 2,
            'type': 'skeleton_anatomy',
            'descriptionPl': 'Szkieleton grzechocze kośćmi na korytarzu! Połącz części szkieletu i narządy z ich funkcjami.',
            'items': [
                {'id': 'sk_1', 'word': 'Mózgoczaszka', 'defPl': 'Chroni mózgowie przed urazami mechanicznymi', 'color': '#3b82f6'},
                {'id': 'sk_2', 'word': 'Klatka piersiowa', 'defPl': 'Elastycznie osłania serce, płuca i naczynia krwionośne', 'color': '#10b981'},
                {'id': 'sk_3', 'word': 'Kręgosłup z dyskami', 'defPl': 'Główna oś ciała amortyzująca wstrząsy przy chodzeniu', 'color': '#f59e0b'},
                {'id': 'sk_4', 'word': 'Kość udowa', 'defPl': 'Najdłuższa i najmasywniejsza kość w ciele człowieka', 'color': '#ec4899'},
                {'id': 'sk_5', 'word': 'Rzepka', 'defPl': 'Kość trzeszczkowa chroniąca od przodu staw kolanowy', 'color': '#8b5cf6'},
                {'id': 'sk_6', 'word': 'Miednica', 'defPl': 'Łączy kręgosłup z kończynami i podpiera narządy', 'color': '#06b6d4'}
            ]
        },
        'smok': {
            'bossId': 'smok',
            'enemyName': 'Smok',
            'titlePl': 'Smok (34 HP, 2 dmg)',
            'subtitlePl': 'Młody Strażnik Podziemi',
            'icon': './assets/Postacie/smok.png',
            'enemyMaxHp': 34,
            'enemyDamage': 2,
            'type': 'boss_smok',
            'descriptionPl': 'Smok testuje Twoją znajomość języka polskiego i lektur! Odpowiedz bezbłędnie, by nie obudzić żaru.'
        },
        'instagramerka': {
            'bossId': 'instagramerka',
            'enemyName': 'Instagramerka',
            'titlePl': 'Instagramerka (34 HP, 2 dmg)',
            'subtitlePl': 'Królowa trendów i estetyki',
            'icon': './assets/Postacie/Instagramerka.png',
            'enemyMaxHp': 34,
            'enemyDamage': 2,
            'type': 'instagramerka_trends',
            'descriptionPl': 'Instagramerka sprawdza, czy odróżniasz fakty od opinii i czy znasz kulturę wypowiedzi w social mediach.'
        },
        'pilkarz': {
            'bossId': 'pilkarz',
            'enemyName': 'Piłkarz',
            'titlePl': 'Piłkarz (30 HP, 2 dmg)',
            'subtitlePl': 'Trening techniczny na orliku',
            'icon': './assets/Postacie/Pilkarz.png',
            'enemyMaxHp': 30,
            'enemyDamage': 2,
            'baseTime': 10,
            'bonusPerCorrect': 5,
            'type': 'footballer_regular',
            'descriptionPl': 'Piłkarz testuje Twoją szybkość i refleks! Czas 10s, każda celna odpowiedź daje +5 sekund!'
        },
        'nauczycielka': {
            'bossId': 'nauczycielka',
            'enemyName': 'Pani Nauczycielka',
            'titlePl': 'Pani Nauczycielka (35 HP, 2 dmg)',
            'subtitlePl': 'Kartkówka ze słownictwa i poleceń',
            'icon': './assets/Postacie/Nauczycielka.png',
            'enemyMaxHp': 35,
            'enemyDamage': 2,
            'type': 'teacher_quiz_5',
            'descriptionPl': 'Pani Nauczycielka sprawdza skupienie na lekcji i znajomość podstawy programowej języka polskiego.'
        },
        'cwaniak': {
            'bossId': 'cwaniak',
            'enemyName': 'Cwaniak',
            'titlePl': 'Cwaniak (35 HP, 2 dmg)',
            'subtitlePl': 'Miejski spryt i slang młodzieżowy',
            'icon': './assets/Postacie/Cwaniak.png',
            'enemyMaxHp': 35,
            'enemyDamage': 2,
            'type': 'cwaniak_tf',
            'descriptionPl': 'Cwaniak sprawdza Twój miejski spryt! Prawda czy fałsz o slangu, zwrotach i kulturze rówieśniczej?'
        },
        'silaczka': {
            'bossId': 'silaczka',
            'enemyName': 'Siłaczka',
            'titlePl': 'Siłaczka (36 HP, 2 dmg)',
            'subtitlePl': 'Instruktor szkolnej siłowni',
            'icon': './assets/Postacie/Silaczka.png',
            'enemyMaxHp': 36,
            'enemyDamage': 2,
            'type': 'silaczka_workout',
            'descriptionPl': 'Siłaczka sprawdza Twoją wiedzę o zdrowiu, anatomii, stopniowaniu przymiotników i dyscyplinie sportowej.'
        },
        'dyrektorka': {
            'bossId': 'dyrektorka',
            'enemyName': 'Pani Dyrektor',
            'titlePl': 'Pani Dyrektor (35 HP, 3 dmg)',
            'subtitlePl': 'Kultura formalna i regulamin szkoły',
            'icon': './assets/Postacie/dyrektorka.png',
            'fallbackAvatar': './assets/Postacie/Nauczycielka.png',
            'enemyMaxHp': 35,
            'enemyDamage': 3,
            'type': 'dyrektorka_office',
            'descriptionPl': 'Pani Dyrektor wymaga szacunku i form grzecznościowych Pan/Pani. Rozpoznaj język oficjalny i formalny!'
        },
        'lekarz': {
            'bossId': 'lekarz',
            'enemyName': 'Doktor Jan',
            'titlePl': 'Doktor Jan (31 HP, 2 dmg)',
            'subtitlePl': 'Konsultacja w gabinecie medycznym',
            'icon': './assets/Postacie/Lekarz.png',
            'enemyMaxHp': 31,
            'enemyDamage': 2,
            'type': 'doctor_visit',
            'descriptionPl': 'Doktor bada Twoje samopoczucie. Odpowiadaj precyzyjnie na pytania o zdrowie, higienę i pierwszą pomoc!'
        },
        'profesor': {
            'bossId': 'profesor',
            'enemyName': 'Profesor',
            'titlePl': 'Profesor (28 HP, 2 dmg)',
            'subtitlePl': 'Słowniki, definicje i logika',
            'icon': './assets/Postacie/Profesor.png',
            'enemyMaxHp': 28,
            'enemyDamage': 2,
            'type': 'profesor_quiz',
            'descriptionPl': 'Uczony profesor zadaje pytania o definicje słownikowe, przeciwieństwa, części mowy i etymologię wyrazów.'
        }
    }
