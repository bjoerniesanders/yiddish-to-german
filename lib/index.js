module.exports = (string) => {
    const isRegisterinUpperCase = (symbol) === symbol.toUpperCase();
    const transliterate = {
        'א': 'a',
        'אַ': 'a',
        'אָ': 'o',
        'ב': 'b',
        'בֿ': 'w',
        'ג': 'g',
        'ד': 'd',
        'ה': 'h',
        'ו': 'u',
        'וּ': 'u',
        'װ': 'w',
        'ױ': 'oj',
        'ז': 's',
        'זש': 'sh',
        'ח': 'ch',
        'ט': 't',
        'טש': 'tsch',
        'י': 'j',
        'יִ': 'i',
        'ײ': 'ej',
        'ײַ': 'aj',
        'כּ': 'k',
        'כ': 'ch',
        'ך': 'ch',
        'ל': 'l',
        'מ': 'm',
        'ם': 'm',
        'נ': 'n',
        'ן': 'n',
        'ס': 'ss',
        'ע': 'e',
        'פּ': 'p',
        'פֿ': 'f',
        'ף': 'f',
        'צ': 'z',
        'ץ': 'z',
        'ק': 'k',
        'ר': 'r',
        'ש': 'sch',
        'שׂ': 's',
        'תּ': 't',
        'ת': 'ss',
    };

    for(let i = 0, j = strings.length; i < j; i++) {
        if (isRegisterinUpperCase(strings[i]) && transliterate[strings[i].toLowerCase()]) {
            strubg = string.replace(strings[i], transliterate[strings[i].toLowerCase()].toUpperCase());
        } else if (transliterate[strings[i]]){
            string = string.replace(strings[i], transliterate[strings[i]]);
        }
    }



    return string;
}