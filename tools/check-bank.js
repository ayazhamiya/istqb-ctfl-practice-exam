/* Structural validation of the question bank. Run: npm run check
   Needs no browser and no dependencies, so it is the fastest way to catch a
   broken question before running the Playwright suites. */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const LET = ["a", "b", "c", "d", "e"];
const BLUEPRINT = { 1: 8, 2: 5, 3: 5, 4: 11, 5: 9, 6: 2 };
const FIGURES = ["contract-states", "order-states"];

const scope = {};
new Function("window", fs.readFileSync(path.join(ROOT, "assets/questions.js"), "utf8"))(scope);
new Function("window", fs.readFileSync(path.join(ROOT, "assets/i18n.js"), "utf8"))(scope);
const BANK = scope.CTFL_BANK;
const I18N = scope.CTFL_I18N;

const problems = [];
const fail = (m) => problems.push(m);

/* interface strings: every language must define every key the fallback defines */
const enKeys = Object.keys(I18N.strings.en);
I18N.languages.forEach((lang) => {
  if (lang.code === "en") return;
  const missing = enKeys.filter((k) => !(k in I18N.strings[lang.code]));
  if (missing.length) fail("i18n [" + lang.code + "] missing keys: " + missing.join(", "));
  Object.keys(I18N.chapters.en).forEach((ch) => {
    if (!I18N.chapters[lang.code] || !I18N.chapters[lang.code][ch]) fail("i18n [" + lang.code + "] missing chapter title " + ch);
  });
});

/* every set needs a name and blurb string for the picker */
BANK.sets.forEach((s) => {
  ["name", "blurb"].forEach((f) => {
    if (!(("set." + s.id + "." + f) in I18N.strings.en)) fail("i18n missing set." + s.id + "." + f);
  });
});

/* the questions themselves */
const POSITIONAL = /\b(the|The)\s+(first|second|third|fourth|fifth|last)\s+(option|answer|statement|one)\b/;
const LETTERED = /\bOptions?\s+[a-e]\b|\([a-e]\)/;

BANK.sets.forEach((set) => {
  const counts = {};
  set.questions.forEach((q) => (counts[q.ch] = (counts[q.ch] || 0) + 1));
  Object.keys(BLUEPRINT).forEach((ch) => {
    if (counts[ch] !== BLUEPRINT[ch]) {
      fail(set.id + ": chapter " + ch + " has " + (counts[ch] || 0) + " questions, blueprint says " + BLUEPRINT[ch]);
    }
  });
  if (set.questions.length !== 40) fail(set.id + ": " + set.questions.length + " questions, expected 40");

  set.questions.forEach((q, i) => {
    const where = set.id + " #" + i;
    if (!q.stem) fail(where + ": no stem");
    if (!q.just) fail(where + ": no justification");
    if (!q.lo) fail(where + ": no learning objective");
    if (!q.opts || q.opts.length < 4) fail(where + ": fewer than 4 options");
    if (q.ans.length !== (q.multi ? 2 : 1)) fail(where + ": " + q.ans.length + " correct answers, expected " + (q.multi ? 2 : 1));
    q.ans.forEach((a) => { if (a < 0 || a >= q.opts.length) fail(where + ": answer index " + a + " out of range"); });
    if (new Set(q.ans).size !== q.ans.length) fail(where + ": duplicate answer index");
    if (q.fig && FIGURES.indexOf(q.fig) < 0) fail(where + ": unknown figure '" + q.fig + "'");

    /* both the question order and the option order are shuffled per attempt,
       so a justification may never point at an option by letter or position */
    const texts = [["en", q.just]];
    if (q.i18n) Object.keys(q.i18n).forEach((l) => texts.push([l, q.i18n[l].just]));
    texts.forEach(([lang, txt]) => {
      if (!txt) return;
      if (POSITIONAL.test(txt)) fail(where + " [" + lang + "]: justification names an option by position");
      if (LETTERED.test(txt)) fail(where + " [" + lang + "]: justification names an option by letter");
    });

    /* translations must line up field for field, or marking could drift */
    if (q.i18n) {
      Object.keys(q.i18n).forEach((lang) => {
        const d = q.i18n[lang];
        if (!d.opts || d.opts.length !== q.opts.length) fail(where + " [" + lang + "]: option count differs");
        ["extra", "stem2", "romans", "match"].forEach((k) => {
          if (!!q[k] !== !!d[k]) fail(where + " [" + lang + "]: " + k + " present in one language only");
        });
        if (q.romans && d.romans && q.romans.length !== d.romans.length) fail(where + " [" + lang + "]: roman list length differs");
        if (q.match && d.match) {
          if (q.match.items.length !== d.match.items.length) fail(where + " [" + lang + "]: match item count differs");
          if (q.match.cats.length !== d.match.cats.length) fail(where + " [" + lang + "]: match category count differs");
        }
      });
    }
  });
});

/* report */
const total = BANK.sets.reduce((n, s) => n + s.questions.length, 0);
const byChapter = {};
const los = new Set();
let translated = 0;
BANK.sets.forEach((s) => s.questions.forEach((q) => {
  byChapter[q.ch] = (byChapter[q.ch] || 0) + 1;
  los.add(q.lo.split(" ")[0]);
  if (q.i18n && q.i18n.de) translated++;
}));

console.log("sets:              " + BANK.sets.map((s) => s.id + " (" + s.questions.length + ")").join(", "));
console.log("total questions:   " + total);
console.log("per chapter:       " + Object.keys(byChapter).map((c) => c + ":" + byChapter[c]).join("  "));
console.log("learning objectives covered: " + los.size);
console.log("German translations: " + translated + "/" + total);
BANK.sets.forEach((s) => {
  const dist = {};
  s.questions.forEach((q) => q.ans.forEach((a) => (dist[LET[a]] = (dist[LET[a]] || 0) + 1)));
  console.log("answer key " + s.id + ":     " + LET.map((l) => l + "=" + (dist[l] || 0)).join("  "));
});

if (problems.length) {
  console.error("\n" + problems.length + " problem(s):");
  problems.forEach((p) => console.error("  - " + p));
  process.exit(1);
}
console.log("\nAll checks passed.");
