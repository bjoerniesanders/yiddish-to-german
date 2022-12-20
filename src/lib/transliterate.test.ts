import { transliterateYiddishToGerman } from './transliterate';

test('transliterateYiddishToGerman', () => {
  expect(transliterateYiddishToGerman('אַ בֿײַט')).toBe('a bayt');
  expect(transliterateYiddishToGerman('דײַט־עַנְד')).toBe('dayt-end');
  expect(transliterateYiddishToGerman('שאָרט')).toBe('short');
  expect(transliterateYiddishToGerman('שטייט')).toBe('shtayt');
  expect(transliterateYiddishToGerman('פֿאַר־טוי')).toBe('far-toy');
});
