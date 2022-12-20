export function transliterateYiddishToGerman(yiddish: string): string {
  // Define a mapping from Yiddish characters to German characters
  const transliterationMap = new Map([
    ['א', 'a'],
    ['ב', 'b'],
    ['ג', 'g'],
    ['ד', 'd'],
    ['ה', 'h'],
    ['ו', 'v'],
    ['ז', 'z'],
    ['ח', 'kh'],
    ['ט', 't'],
    ['י', 'i'],
    ['כ', 'k'],
    ['ך', 'kh'],
    ['ל', 'l'],
    ['מ', 'm'],
    ['נ', 'n'],
    ['ס', 's'],
    ['ע', 'e'],
    ['פ', 'f'],
    ['צ', 'ts'],
    ['ק', 'k'],
    ['ר', 'r'],
    ['ש', 'sh'],
    ['ת', 't'],
    ['װ', 'w'],
    ['ױ', 'oy'],
    ['ײ', 'ay'],
    ['־', '-'],
    ['אָ', 'o']
  ]);

  const transliterationRegex = /[\u05B0-\u05FF]/gu;
  return yiddish.replace(
    transliterationRegex,
    (match) => transliterationMap.get(match) || ''
  );
}
