import sys, os, re
sys.path.insert(0, os.path.abspath('.'))
sys.stdout.reconfigure(encoding='utf-8')

def rebalance_file(file_path, mappings):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    updated = 0
    for key, spec in mappings.items():
        # find options block containing key
        # key might contain regex chars like brackets, quotes
        escaped_key = re.escape(key)
        # Search for options: [ ... escaped_key ... ]
        pattern = re.compile(r'(options\s*:\s*\[)([^\]]*?' + escaped_key + r'[^\]]*?)(\])', re.DOTALL)
        m = pattern.search(content)
        if not m:
            print(f"[{file_path}] NOT FOUND: {key[:40]}...")
            continue
        
        prefix = m.group(1)
        old_block = m.group(2)
        suffix = m.group(3)

        # parse objects in block
        # Find { ... }
        obj_matches = list(re.finditer(r'\{([^{}]+)\}', old_block))
        if not obj_matches:
            print(f"[{file_path}] NO OBJS: {key[:40]}...")
            continue
        
        new_obj_strs = []
        w_idx = 0
        new_wrongs = spec.get('wrongs', [])
        new_c = spec.get('correct', None)

        for om in obj_matches:
            obj_str = om.group(1)
            t_m = re.search(r'(text|textPl)\s*:\s*([\'"`])((?:\\.|(?!\2).)*)\2', obj_str)
            c_m = re.search(r'\bcorrect\s*:\s*(true|false)', obj_str)
            if not t_m or not c_m:
                new_obj_strs.append("{" + obj_str + "}")
                continue
            
            field = t_m.group(1)
            quote = t_m.group(2)
            orig_text = t_m.group(3)
            is_corr = c_m.group(1) == 'true'

            if is_corr:
                target_text = new_c if new_c is not None else orig_text
            else:
                if w_idx < len(new_wrongs):
                    target_text = new_wrongs[w_idx]
                    w_idx += 1
                else:
                    target_text = orig_text
            
            # replace in obj_str
            # replace field: quote...quote
            new_prop = f"{field}: {quote}{target_text}{quote}"
            new_obj = obj_str[:t_m.start()] + new_prop + obj_str[t_m.end():]
            new_obj_strs.append("{" + new_obj + "}")

        # format block nicely
        # find indentation
        indent_match = re.search(r'\n([ \t]+)\{', old_block)
        indent = indent_match.group(1) if indent_match else '        '
        closing_indent = indent[:-2] if len(indent) > 2 else ''
        new_block = "\n" + indent + (",\n" + indent).join(new_obj_strs) + "\n" + closing_indent
        
        content = content[:m.start(1)] + prefix + new_block + suffix + content[m.end(3):]
        updated += 1

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[{file_path}] Successfully updated {updated} / {len(mappings)} items")

# Test on szkieleton.js
szkieleton_data = {
    'Móżdżek': {
        'correct': 'Móżdżek odpowiadający za koordynację ruchową i równowagę ciała',
        'wrongs': [
            'Płat potyliczny kory mózgu odpowiedzialny za przetwarzanie wzroku',
            'Rdzeń przedłużony sterujący podstawowymi odruchami wegetatywnymi',
            'Przysadka mózgowa wydzielająca hormony dokrewne do całego krwioobiegu'
        ]
    },
    'Od wczoraj boli mnie prawe kolano i mam obrzęk w okolicy rzepki.': {
        'wrongs': [
            'Od wczoraj bolę prawe kolano i mam wielki obrzęk wokoło rzepki nogi.',
            'Boli mi prawe kolano i czuję kolano bardzo bolące przy zginaniu stopy.',
            'Mam kolano bolane i mocno spuchnięte od wczorajszego meczu na hali.'
        ]
    },
    'W pęcherzykach płucnych oplecionych gęstą siecią naczyń włosowatych': {
        'wrongs': [
            'W krtani wyposażonej w fałdy głosowe, głośnię oraz ruchomą nagłośnię',
            'W tchawicy zbudowanej ze sprężystych, chrzęstnych półpierścieni cewy',
            'W jamie nosowej nawilżającej i oczyszczającej wdychane powietrze z pyłu'
        ]
    },
    'W kościach płaskich (mostek, miednica, żebra) oraz nasadach kości długich': {
        'wrongs': [
            'Wyłącznie w środkowych trzonach kości przedramienia, obojczyka i podudzia',
            'Jedynie w drobnych kościach palców rąk i stóp oraz w kościach nadgarstka',
            'W elastycznych chrząstkach zewnętrznej małżowiny usznej i czubka nosa twarzy'
        ]
    },
    'Związki organiczne, w tym białko kolagenowe (osseina)': {
        'wrongs': [
            'Sole mineralne fosforanu wapnia i węglanu wapniowego',
            'Silnie stężony kwas solny obecny w szpiku kostnym ciała',
            'Czysty gazowy azot rozpuszczony w całej tkance kostnej'
        ]
    },
    'Receptor -> neuron czuciowy -> ośrodek w rdzeniu kręgowym -> neuron ruchowy -> efektor (mięsień)': {
        'wrongs': [
            'Efektor końcowy -> móżdżek -> nerw czaszkowy twarzowy -> receptor czuciowy w tkance skórnej',
            'Ośrodek korowy mózgu -> receptor zmysłowy -> obwodowy neuron ruchowy -> naczynie krwionośne',
            'Neuron ruchowy pnia -> torebka stawu kolanowego -> neuron czuciowy rdzenia -> kora mózgowa'
        ]
    }
}

rebalance_file('src/data/characters/szkieleton.js', szkieleton_data)
