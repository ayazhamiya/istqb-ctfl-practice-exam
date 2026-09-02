/* Appends Set M3 to assets/questions.js: checks the blueprint, interleaves the
   chapters the way a live exam does, and redistributes the answer key. */
const fs = require("fs");
const src = require("./m3-en.js");
const LET = ["a", "b", "c", "d", "e"];
const BLUEPRINT = { 1: 8, 2: 5, 3: 5, 4: 11, 5: 9, 6: 2 };
const PATTERN = [1,4,2,5,3,4,1,5,6,4,2,3,5,1,4,5,2,3,4,1,5,4,2,3,1,4,5,6,2,4,1,5,3,4,1,5,4,1,5,4];

const counts = {};
src.forEach(q => counts[q.ch] = (counts[q.ch] || 0) + 1);
Object.keys(BLUEPRINT).forEach(ch => {
  if (counts[ch] !== BLUEPRINT[ch]) throw new Error("blueprint: chapter " + ch + " has " + (counts[ch] || 0) + ", expected " + BLUEPRINT[ch]);
});
if (src.length !== 40) throw new Error("expected 40 questions, got " + src.length);

const buckets = {};
src.forEach(q => (buckets[q.ch] = buckets[q.ch] || []).push(q));
const ordered = PATTERN.map(ch => {
  if (!buckets[ch].length) throw new Error("pattern exhausted chapter " + ch);
  return buckets[ch].shift();
});

const CYCLE = ["c","a","b","d","c","b","d","a","c","d","b","a","d","c","a","b"];
const PAIRS = [["b","e"], ["a","d"]];
let ci = 0, pi = 0;
ordered.forEach((q, i) => {
  const t = q.ans.length === 2
    ? PAIRS[pi++ % PAIRS.length].map(c => LET.indexOf(c))
    : [LET.indexOf(CYCLE[ci++ % CYCLE.length])];
  const order = new Array(q.opts.length).fill(null);
  q.ans.forEach((orig, k) => { order[t[k]] = orig; });
  const rest = q.opts.map((_, x) => x).filter(x => q.ans.indexOf(x) < 0);
  let r = 0;
  for (let s = 0; s < order.length; s++) if (order[s] === null) order[s] = rest[r++];
  if (new Set(order).size !== q.opts.length) throw new Error("permutation failed at " + (i + 1));
  q.opts = order.map(o => q.opts[o]);
  q.ans = t.slice().sort((a, b) => a - b);
  if (/\bOptions?\s+[a-e]\b|\([a-e]\)/.test(q.just)) throw new Error("justification refers to a letter at " + (i + 1));
  if (/\b(the|The)\s+(first|second|third|fourth|fifth|last)\s+(option|answer|statement|one)\b/.test(q.just)) {
    throw new Error("justification refers to an option by position at " + (i + 1));
  }
  if (q.stem2 === "") delete q.stem2;
});

const g = {};
new Function("window", fs.readFileSync("assets/questions.js", "utf8"))(g);
const bank = g.CTFL_BANK;
if (bank.sets.some(s => s.id === "m3")) throw new Error("m3 already present — nothing to do");
bank.sets.push({ id: "m3", name: "Set M3", blurb: "40 further questions, same blueprint", questions: ordered });

function ser(q) {
  const keys = ["ch","lo","stem","extra","code","fig","romans","match","stem2","multi","opts","ans","just","i18n"];
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

const dist = {};
ordered.forEach(q => q.ans.forEach(a => dist[LET[a]] = (dist[LET[a]] || 0) + 1));
console.log("M3 appended. chapter order:", ordered.map(q => q.ch).join(""));
console.log("M3 answer key distribution:", dist);
console.log("questions.js now", fs.statSync("assets/questions.js").size, "bytes");
