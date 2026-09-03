/* Validates the concept notes. Run: npm run check:theory
   Checks that notes line up with the question bank, that every note has the
   required sections, and that no note quotes the syllabus verbatim. */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const scope = {};
new Function("window", fs.readFileSync(path.join(ROOT, "assets/questions.js"), "utf8"))(scope);
new Function("window", fs.readFileSync(path.join(ROOT, "assets/i18n.js"), "utf8"))(scope);
new Function("window", fs.readFileSync(path.join(ROOT, "assets/theory.js"), "utf8"))(scope);
const BANK = scope.CTFL_BANK, THEORY = scope.CTFL_THEORY, I18N = scope.CTFL_I18N;

const problems = [];
const fail = (m) => problems.push(m);
const REQUIRED = ["title", "oneLine", "tests", "readNext"];

/* the UI labels the notes need */
["concept.label", "concept.tests", "concept.worked", "concept.traps", "concept.confuse", "concept.readNext"]
  .forEach((k) => { if (!(k in I18N.strings.en)) fail("i18n missing " + k); });

/* which objectives the questions actually use */
const used = new Set();
BANK.sets.forEach((s) => s.questions.forEach((q) => used.add(q.lo.split(" ")[0])));

Object.keys(THEORY).forEach((lo) => {
  const entry = THEORY[lo];
  if (!used.has(lo)) fail(lo + ": note exists but no question targets this objective");
  if (!entry.ch) fail(lo + ": no chapter");
  if (!entry.en) return fail(lo + ": no English note");

  Object.keys(entry).forEach((lang) => {
    if (lang === "ch") return;
    const n = entry[lang];
    REQUIRED.forEach((f) => { if (!n[f]) fail(lo + " [" + lang + "]: missing " + f); });
    if (n.traps && !Array.isArray(n.traps)) fail(lo + " [" + lang + "]: traps must be an array");
    if (n.confuse) {
      if (!Array.isArray(n.confuse)) fail(lo + " [" + lang + "]: confuse must be an array");
      else n.confuse.forEach((row, i) => {
        if (!Array.isArray(row) || row.length !== 3) fail(lo + " [" + lang + "]: confuse row " + i + " needs exactly 3 cells");
      });
    }
    /* The notes must explain the syllabus, never reproduce it. Pair the quote marks
       in order — opening, closing, opening, closing — so that the gap between one
       quotation's close and the next one's open is never mistaken for a quotation. */
    const flat = [n.oneLine, n.tests, n.worked].concat(n.traps || []).join(" ");
    const marks = [];
    for (let k = 0; k < flat.length; k++) {
      /* straight ", English curly " ", and German curly \u201e " (opening low, closing high) \u2014
         whichever pair the language uses, they still alternate open/close in order */
      if (flat[k] === '"' || flat[k] === "\u201c" || flat[k] === "\u201d" || flat[k] === "\u201e") marks.push(k);
    }
    for (let k = 0; k + 1 < marks.length; k += 2) {
      if (marks[k + 1] - marks[k] > 60) {
        fail(lo + " [" + lang + "]: quoted passage of " + (marks[k + 1] - marks[k]) +
             " characters — notes must be original prose, not syllabus text");
      }
    }
    const words = flat.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    if (words > 420) fail(lo + " [" + lang + "]: " + words + " words — notes are capped at ~350, point at the syllabus instead");
  });
});

/* report */
const covered = Object.keys(THEORY);
const missing = [...used].filter((lo) => !THEORY[lo]).sort();
const byChapter = {};
covered.forEach((lo) => { const c = THEORY[lo].ch; byChapter[c] = (byChapter[c] || 0) + 1; });
const langs = new Set();
covered.forEach((lo) => Object.keys(THEORY[lo]).forEach((k) => { if (k !== "ch") langs.add(k); }));

console.log("concept notes:     " + covered.length + " of " + used.size + " objectives used by the question bank");
console.log("per chapter:       " + Object.keys(byChapter).sort().map((c) => c + ":" + byChapter[c]).join("  "));
console.log("languages present: " + [...langs].join(", "));
["en", "de"].forEach((l) => {
  const n = covered.filter((lo) => THEORY[lo][l]).length;
  if (n) console.log("  " + l + ": " + n + "/" + covered.length);
});
if (missing.length) {
  console.log("\nstill to write (" + missing.length + "):");
  console.log("  " + missing.join("  "));
}

if (problems.length) {
  console.error("\n" + problems.length + " problem(s):");
  problems.forEach((p) => console.error("  - " + p));
  process.exit(1);
}
console.log("\nAll checks passed.");
