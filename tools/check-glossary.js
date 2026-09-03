/* Validates the glossary. Run: npm run check:glossary
   Checks the shape of every entry, that both languages are present, that no term or
   German equivalent is duplicated, and that the definitions stay short original
   one-liners rather than drifting into copied glossary prose. */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const scope = {};
new Function("window", fs.readFileSync(path.join(ROOT, "assets/i18n.js"), "utf8"))(scope);
new Function("window", fs.readFileSync(path.join(ROOT, "assets/glossary.js"), "utf8"))(scope);
const GLOSS = scope.CTFL_GLOSSARY, I18N = scope.CTFL_I18N;

const problems = [];
const fail = (m) => problems.push(m);

/* the UI strings the glossary screen needs, in every language */
const KEYS = [
  "home.gloss.h", "home.gloss.hint", "home.gloss.open",
  "gloss.eyebrow", "gloss.title", "gloss.sub", "gloss.search", "gloss.searchLabel",
  "gloss.all", "gloss.ch", "gloss.count", "gloss.terms", "gloss.none", "gloss.unavailable"
];
Object.keys(I18N.strings).forEach((lang) => {
  KEYS.forEach((k) => { if (!(k in I18N.strings[lang])) fail("i18n[" + lang + "] missing " + k); });
});

if (!Array.isArray(GLOSS) || !GLOSS.length) {
  fail("CTFL_GLOSSARY is empty");
} else {
  const chapters = Object.keys(I18N.chapters.en).map(Number);
  const seenEn = new Map(), seenDe = new Map();
  let lastCh = 0;

  GLOSS.forEach((item, i) => {
    const at = "#" + (i + 1) + " " + (item.en || "?");

    if (!chapters.includes(item.ch)) fail(at + ": chapter " + item.ch + " is not a syllabus chapter");
    if (item.ch < lastCh) fail(at + ": out of chapter order (chapter " + item.ch + " after " + lastCh + ")");
    lastCh = Math.max(lastCh, item.ch);

    ["en", "de"].forEach((k) => {
      if (typeof item[k] !== "string" || !item[k].trim()) fail(at + ": missing the " + k + " term");
    });
    if (!item.def) return fail(at + ": no definition");
    ["en", "de"].forEach((k) => {
      const d = item.def[k];
      if (typeof d !== "string" || !d.trim()) return fail(at + ": missing the " + k + " definition");
      if (!/[.!?]$/.test(d.trim())) fail(at + ": the " + k + " definition does not end in a full stop");
      const words = d.trim().split(/\s+/).length;
      if (words > 45) fail(at + ": the " + k + " definition is " + words + " words — keep it a one-liner");
      if (/<[a-z/]/i.test(d)) fail(at + ": the " + k + " definition contains markup");
    });

    /* a term defined twice is a merge accident, and the search would show both */
    const en = item.en.toLowerCase(), de = item.de.toLowerCase();
    if (seenEn.has(en)) fail(at + ": duplicate English term (also #" + seenEn.get(en) + ")");
    else seenEn.set(en, i + 1);
    if (seenDe.has(de)) fail(at + ": duplicate German term (also #" + seenDe.get(de) + ")");
    else seenDe.set(de, i + 1);
  });

  /* every chapter should be represented — an empty chip is a dead end for the reader */
  chapters.forEach((ch) => {
    if (!GLOSS.some((item) => item.ch === ch)) fail("chapter " + ch + " has no terms");
  });
}

if (problems.length) {
  console.error("Glossary check failed:\n" + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("Glossary OK: " + GLOSS.length + " terms across " +
  new Set(GLOSS.map((g) => g.ch)).size + " chapters, English and German.");
