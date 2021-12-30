// prettier-ignore
const keywords = [
  "مجال", "إرجاع", "نهاية", "صنف", "خاص", "كائن", "دالة",
  "هدم", "بناء", "كلما", "إذا", "أو", "و", "وإلا", "كسر",
  "متغير", "ثابت", "رئيسية", "دالة", "عدد", "منطقي", "نص"
];

const builtins = ["سطر", "رياضيات", "نافذة"];

const keywordsRegex = getRegexOfArray(keywords);
const builtinsRegex = getRegexOfArray(builtins);
const variableRegex = /[_a-z\u0621-\u064A][\w\u0621-\u064A]*/i;

function getRegexOfArray(words) {
  return new RegExp(`(?:${words.join("|")})(?![\\w\\u0621-\\u064A])`);
}

Prism.languages.ألف = Prism.languages.alif = {
  comment: [/--.*|\/\*[\s\S]*?\*\//, /#[\u0621-\u064A_]+/],
  string: {
    pattern: /"(?:[^\\]|\\.)*?(?:"|$)/,
    greedy: true,
  },
  number: [
    /٠س[أبجدهو٠١٢٣٤٥٦٧٨٩]+|[-+]?(?:\.[٠١٢٣٤٥٦٧٨٩]+|[٠١٢٣٤٥٦٧٨٩]+\.?[٠١٢٣٤٥٦٧٨٩]*)(?:e[-+]?[٠١٢٣٤٥٦٧٨٩]+)?/i,
    /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
  ],
  boolean: /(?:خطأ|صحيح)/,
  function: {
    pattern: /((?:^|\s)دالة[ \t]+(?:[_a-z\u0621-\u064A][\w\u0621-\u064A]*)[ \t]+)(?:[_a-z\u0621-\u064A][\w\u0621-\u064A]*)/g,
    lookbehind: true,
  },
  "class-name": {
    pattern: /(صنف|مجال)\s+(?:[_a-z\u0621-\u064A][\w\u0621-\u064A]*)/i,
    lookbehind: true,
  },
  punctuation: /[()\[\]{}:.،؛]/,
  keyword: keywordsRegex,
  builtin: builtinsRegex,
};
