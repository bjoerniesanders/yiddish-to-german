"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transliterate_1 = require("./transliterate");
test('transliterateYiddishToGerman', function () {
    expect((0, transliterate_1.transliterateYiddishToGerman)('אַ בֿײַט')).toBe('a bayt');
    expect((0, transliterate_1.transliterateYiddishToGerman)('דײַט־עַנְד')).toBe('dayt-end');
    expect((0, transliterate_1.transliterateYiddishToGerman)('שאָרט')).toBe('short');
    expect((0, transliterate_1.transliterateYiddishToGerman)('שטייט')).toBe('shtayt');
    expect((0, transliterate_1.transliterateYiddishToGerman)('פֿאַר־טוי')).toBe('far-toy');
});
