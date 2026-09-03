/* Merge the German translations into assets/questions.js as q.i18n.de.
   Validates that every translation lines up with its English question before writing. */
const fs = require("fs");
const g = {};
new Function("window", fs.readFileSync("assets/questions.js", "utf8"))(g);
const bank = g.CTFL_BANK;
const de = { m1: require("./de-m1.js"), m2: require("./de-m2.js"), m3: require("./de-m3.js") };

let problems = [];
bank.sets.forEach(set => {
  const tr = de[set.id];
  if (!tr) return problems.push("no translation file for set " + set.id);
  if (tr.length !== set.questions.length) {
    return problems.push(set.id + ": " + tr.length + " translations for " + set.questions.length + " questions");
  }
  set.questions.forEach((q, i) => {
    const d = tr[i], where = set.id + " #" + i;
    if (!d.stem) problems.push(where + ": missing stem");
    if (!d.just) problems.push(where + ": missing justification");
    // option order is shuffled at run time, so a justification may never point at a position
    [["en", q.just], ["de", d.just]].forEach(([lang, txt]) => {
      if (txt && /\b(the|The)\s+(first|second|third|fourth|fifth|last)\s+(option|answer|statement|one)\b/.test(txt)) {
        problems.push(where + " (" + lang + "): justification refers to an option by position");
      }
    });
    if (!d.opts || d.opts.length !== q.opts.length) {
      problems.push(where + ": " + (d.opts ? d.opts.length : 0) + " options, expected " + q.opts.length);
    }
    // structural fields must be translated wherever the English question has them
    ["extra", "stem2", "romans", "match"].forEach(k => {
      if (q[k] && d[k] === undefined) problems.push(where + ": missing translated " + k);
      if (!q[k] && d[k] !== undefined) problems.push(where + ": unexpected " + k + " in translation");
    });
    if (q.romans && d.romans && q.romans.length !== d.romans.length) problems.push(where + ": roman list length differs");
    if (q.match && d.match) {
      if (q.match.items.length !== d.match.items.length) problems.push(where + ": match items length differs");
      if (q.match.cats.length !== d.match.cats.length) problems.push(where + ": match cats length differs");
    }
    // a German option must never be identical to the English one (a sign of an untranslated line)
    // Options identical to English are usually an untranslated line. The few genuine
    // cases (answer codes like "1C, 2A, 3D, 4B", and loanwords German uses unchanged)
    // are listed explicitly so the check keeps its value.
    const SAME_OK = { "m1#20": [0, 1, 2, 3], "m1#23": [2], "m3#17": [0, 1, 2, 3], "m3#23": [3] };
    d.opts && d.opts.forEach((o, k) => {
      const allowed = (SAME_OK[set.id + "#" + i] || []).indexOf(k) >= 0;
      if (o === q.opts[k] && !allowed && !/^(R\d+|T[CF] ?\d+|[\dA-E,.%\s]+)$/.test(o)) {
        problems.push(where + " option " + "abcde"[k] + ": identical to English");
      }
    });
    if (!problems.length || true) q.i18n = { de: d };
  });
});

if (problems.length) {
  console.error("ALIGNMENT PROBLEMS:\n" + problems.join("\n"));
  process.exit(1);
}

function ser(q) {
  const keys = ["ch", "lo", "stem", "extra", "code", "fig", "romans", "match", "stem2", "multi", "opts", "ans", "just", "i18n"];
  return "  {\n" + keys.filter(k => q[k] !== undefined).map(k => "    " + k + ": " + JSON.stringify(q[k])).join(",\n") + "\n  }";
}
let out = "/* CTFL v4.0 practice question banks.\n";
out += "   Original material, MIT licensed. Edit this file to add or correct questions.\n";
out += "   Justifications must never refer to an option by letter: the option order is shuffled at run time.\n";
out += "   `i18n` holds translations of the text fields; `ans` and the option order are shared across languages. */\n\n";
out += "window.CTFL_BANK = {\n  chapters: " + JSON.stringify(bank.chapters, null, 2).replace(/\n/g, "\n  ") + ",\n  sets: [\n";
out += bank.sets.map(s => "  {\n   id: " + JSON.stringify(s.id) + ",\n   name: " + JSON.stringify(s.name) +
  ",\n   blurb: " + JSON.stringify(s.blurb) + ",\n   questions: [\n" + s.questions.map(ser).join(",\n") + "\n   ]\n  }").join(",\n");
out += "\n  ]\n};\n";
fs.writeFileSync("assets/questions.js", out);
console.log("merged OK —", fs.statSync("assets/questions.js").size, "bytes");
