// prettier-ignore
const keywords = [
	"مجال", "إرجاع", "نهاية", "صنف", "خاص", "كائن", "دالة",
	"هدم", "بناء", "كلما", "إذا", "أو", "و", "وإلا", "كسر",
	"متغير", "ثابت", "رئيسية", "دالة"
];

const builtins = ["سطر", "رياضيات", "نافذة"];

const keywordsRegex = getRegexOfArray(keywords);
const builtinsRegex = getRegexOfArray(builtins);
const variableRegex = /[_a-z\u0621-\u064A][\w\u0621-\u064A]*/i;

function getRegexOfArray(words) {
  return new RegExp(`\\b(?:${words.join("|")})\\b`);
}

Prism.languages.ألف = Prism.languages.alif = {
  comment: [/--.*|\/\*[\s\S]*?\*\//, /#[\u0621-\u064A_]+/],
  keyword: keywordsRegex,
  builtin: builtinsRegex,
  string: {
    pattern: /"(?:[^\\]|\\.)*?(?:"|$)/,
    greedy: true,
  },
  number: [
    /٠س[أبجدهو٠١٢٣٤٥٦٧٨٩]+|[-+]?(?:\.[٠١٢٣٤٥٦٧٨٩]+|[٠١٢٣٤٥٦٧٨٩]+\.?[٠١٢٣٤٥٦٧٨٩]*)(?:e[-+]?[٠١٢٣٤٥٦٧٨٩]+)?/i,
    /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  ],
  boolean: /\b(?:خطأ|صحيح)\b/,
  function: {
    pattern: /((?:^|\s)دالة[ \t]+)(?:[_a-z\u0621-\u064A][\w\u0621-\u064A]*)/g,
    lookbehind: true,
  },
	'class-name': {
		pattern: /(\bصنف\s+)(?:[_a-z\u0621-\u064A][\w\u0621-\u064A]*)/i,
		lookbehind: true
	},
  punctuation: /[()\[\]{}:.،؛]/,
};
