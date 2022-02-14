module.exports = (string) => {

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
        'טש': 'st',
        'איי': 'ei',
        'י': 'j',
        'יִ': 'i',
        'ײַ': 'ai',
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



    for(let i = 0, j = ''; j = string.charAt(i); i++) {
        if (string[i] && transliterate[string[i]]) {

            string = string.replace(string[i], transliterate[string[i]].toUpperCase());
        } else if (transliterate[string[i]]){
            string = string.replace(string[i], transliterate[string[i]]);
        }
    }



    return string;
}