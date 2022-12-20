"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterateYiddishToGerman = void 0;
// Define a mapping from Yiddish characters to German characters
var transliterationMap = {
    א: 'a',
    ב: 'b',
    ג: 'g',
    ד: 'd',
    ה: 'h',
    ו: 'v',
    ז: 'z',
    ח: 'kh',
    ט: 't',
    י: 'i',
    כ: 'k',
    ך: 'kh',
    ל: 'l',
    מ: 'm',
    ם: 'm',
    נ: 'n',
    ן: 'n',
    ס: 's',
    ע: 'e',
    פ: 'f',
    ף: 'f',
    צ: 'ts',
    ץ: 'ts',
    ק: 'k',
    ר: 'r',
    ש: 'sh',
    ת: 't',
    װ: 'w',
    ױ: 'oy',
    ײ: 'ei',
    '׳': ''
};
// Define a function to transliterate a string of Yiddish text to German
function transliterateYiddishToGerman(yiddish) {
    var german = '';
    for (var _i = 0, yiddish_1 = yiddish; _i < yiddish_1.length; _i++) {
        var ch = yiddish_1[_i];
        german += transliterationMap[ch] || ch;
    }
    return german;
}
exports.transliterateYiddishToGerman = transliterateYiddishToGerman;
// Test the function
