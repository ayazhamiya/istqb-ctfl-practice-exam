# CTFL Practice Exam

A free, offline-capable practice exam for the **ISTQB® Certified Tester Foundation Level, syllabus v4.0**.

120 original questions in three full sets, written to match the structure, question types and difficulty of the real
examination, **in English and German**. No accounts, no tracking, no backend — it is a static page that installs to
your phone like an app.

> **Not affiliated with, endorsed by, or a substitute for the official ISTQB® materials.**
> ISTQB® is a registered trademark of the International Software Testing Qualifications Board.
> Study the official syllabus; use this to practise.

---

## What it does

**Mock exams** — 40 questions, 1 point each, 60 minutes (75 with the extra-time option), pass mark 26/40 (65%),
exactly as in the real exam. A countdown clock, a flag-for-review button, an answer-sheet grid to jump between
questions, and automatic submission when the time runs out.

**The official blueprint** — every paper is built to the real distribution of questions across the syllabus:

| Chapter | Questions |
| --- | --- |
| 1 Fundamentals of Testing | 8 |
| 2 Testing Throughout the SDLC | 5 |
| 3 Static Testing | 5 |
| 4 Test Analysis and Design | 11 |
| 5 Managing the Test Activities | 9 |
| 6 Test Tools | 2 |

**The real question types** — single choice, *Select TWO options*, roman-numeral lists, 1–4/A–D matching, and the
calculation questions the exam is built around: equivalence partitioning, boundary value analysis coverage,
decision tables, state transition diagrams and tables, statement and branch coverage over pseudocode, three-point
estimation and dependency-constrained test prioritization.

**Four papers** — Set M1, M2 or M3, or a mixed paper drawing 40 questions at random from all 120, still on the
blueprint. Question and answer order are shuffled per attempt by default, so a second sitting is not a memory test.

**Marking and review** — a score, a pass/fail stamp, a per-chapter breakdown showing where to revise, and for every
question the correct answer, a justification, and the syllabus chapter and learning objective it targets. You can
review everything or filter to just your mistakes.

**Revision by chapter** — untimed practice on one chapter at a time, with the answer and explanation appearing as
soon as you choose.

**Attempt history** — every mock exam is recorded with its score, percentage, duration and result.

**English and German** — the whole app, including all 120 questions, their scenarios and their justifications. German
terminology follows the German Testing Board (GTB) glossary, because that is the vocabulary the German-language exam
uses: *Fehlhandlung / Fehlerzustand / Fehlerwirkung*, *Äquivalenzklassenbildung*, *Grenzwertanalyse*,
*Anweisungsüberdeckung*, *Fehlernachtest* and so on. The language follows your browser on first visit and there is a
DE/EN switch in the header; switching mid-exam keeps your answers and the clock.

## Official practice material

This project is **not** a copy of anyone's exam. The questions here are original, which is what lets them be MIT
licensed. The official sample exams are published free by the boards themselves, and they are worth working through
alongside this app — get them from the source rather than from a third party:

- **ISTQB® CTFL v4.0 sample exams A–D**, with separate answer and justification documents: <https://istqb.org/certifications/certified-tester-foundation-level/>
- **ASTQB sample exams**: <https://astqb.org/resources/>
- **The syllabus itself**, which is the only thing the exam is actually written from: <https://istqb.org/certifications/certified-tester-foundation-level/>
- **German-language exams and syllabus** are available through the German Testing Board: <https://www.gtb.de/>

Please do not open a pull request that adds questions copied from those documents, from a commercial question bank,
or from an exam dump. They are not ours to relicense, and it would put the whole repository at risk.

## Install it on your phone

1. Open the site in your phone's browser.
2. **iOS (Safari):** Share → *Add to Home Screen*. **Android (Chrome):** menu → *Install app*.
3. It gets its own icon, opens full screen without browser chrome, and works with no connection.

A mock exam in progress survives closing the app: reopen it and pick up where you left off, with the clock still
counting down from where it should be.

## Privacy

Everything — answers, attempt history, theme — is stored in your browser's `localStorage` on your own device.
Nothing is uploaded anywhere and there is no analytics of any kind. Clearing your browser data clears your history.

The only external request is to Google Fonts for the typefaces. If it fails, or you are offline, the page falls back
to system fonts and works exactly the same.

## Run it locally

The app itself has **no dependencies and no build step** — it is plain HTML, CSS and JavaScript. The only tooling is
for tests and for regenerating assets.

```bash
git clone https://github.com/<your-username>/istqb-ctfl-practice-exam.git
cd istqb-ctfl-practice-exam
npm run dev             # http://localhost:8000, no install needed
```

`npm run dev` uses a small dependency-free Node server in `tools/serve.js`, so it works straight after cloning. If you
would rather not use Node at all, any static file server does the job:

```bash
python3 -m http.server 8000
```

Opening `index.html` straight from the filesystem mostly works, but service workers require `http://`, so offline mode
will not register that way.

> **If an edit does not appear, it is the service worker.** It caches the app for offline use. Hard-reload with
> Cmd/Ctrl+Shift+R, or tick *Update on reload* under DevTools → Application → Service Workers. `npm run dev` sends
> `Cache-Control: no-store`, which handles everything except the service worker itself.

### Checks and tests

```bash
npm run check           # validates the question bank — no browser, instant
npm install             # only needed for the browser tests (installs Playwright)
npx playwright install chromium
npm test                # full end-to-end run, both languages
```

`npm run check` verifies the blueprint for every set, the answer indices, that translations line up field for field,
and that no justification refers to an option by letter or position. `npm test` drives a real browser: it sits a
complete exam in each language and asserts 40/40, checks the mixed paper hits the blueprint, switches language
mid-exam and confirms answers and the clock survive, and reloads offline to confirm the service worker.

## Deploy your own copy

The repository ships with a GitHub Actions workflow that publishes the site to GitHub Pages on every push to `main`.

1. Fork or push this repository to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main`. The site appears at `https://<your-username>.github.io/<repo-name>/`.

Everything uses relative paths, so it works from a subdirectory without configuration.

## Project layout

```
index.html                  app shell and all the markup
assets/app.css              styles, including both colour themes
assets/i18n.js              interface strings and chapter titles per language
assets/app.js               exam engine: sessions, timing, shuffling, marking, history
assets/questions.js         the two question banks — edit this file to add or fix questions
sw.js                       service worker: precaches the shell for offline use
manifest.webmanifest        PWA manifest
icons/                      app icons
tools/de-m1.js              German translation of set M1 (merged into questions.js)
tools/de-m2.js              German translation of set M2 (merged into questions.js)
tools/m3-en.js              source of set M3 before interleaving and key balancing
tools/de-m3.js              German translation of set M3 (merged into questions.js)
tools/build-m3.js           checks the blueprint, interleaves the chapters, balances the answer key
tools/merge-de.js           merges the translations in and checks they line up
tools/make-icons.py         regenerates the icons
tools/build-single-file.py  inlines everything into dist/ctfl-practice-exam.html
tools/serve.js              dependency-free static server behind npm run dev
tools/check-bank.js         structural validation of the question bank
tools/smoke-test.js         Playwright end-to-end check of every mode
tools/i18n-test.js          Playwright check that German is complete and marking is language-independent
```

### Question format

Each question in `assets/questions.js` looks like this:

```js
{
  ch: 4,                       // syllabus chapter, 1-6
  lo: "FL-4.2.1 (K3)",         // learning objective and K-level
  stem: "…",                   // the question stem (HTML allowed)
  extra: "<div class=…>",      // optional table, list or scenario block
  code: "1  READ x…",          // optional pseudocode block
  fig: "contract-states",      // optional named SVG figure
  romans: ["…"],               // optional i-v list
  match: { items: [], cats: [] }, // optional 1-4 / A-D matching lists
  stem2: "…",                  // optional question line after the scenario
  multi: true,                 // optional: "Select TWO options"
  opts: ["…", "…", "…", "…"],
  ans: [2],                    // indices into opts
  just: "…",                   // why the answer is right and the others are not
  i18n: { de: { … } }          // translated text fields; ans and option order are shared
}
```

`i18n` carries only the text: `ans` and the order of `opts` are shared across every language, so marking cannot drift
between translations. Any field missing from a translation falls back to English, so a partial translation degrades
gracefully rather than blanking the page.

**Adding a language.** Add it to `languages` and `strings` in `assets/i18n.js`, add the chapter titles, then add your
code as another key inside each question's `i18n`. `node tools/merge-de.js` shows the pattern and the alignment checks
worth copying.

Justifications never refer to an answer by letter **or by position** — no "option b", no "the second option" —
because both the question order and the option order are shuffled at run time. `tools/merge-de.js` and
`tools/build-m3.js` both refuse to build if a justification breaks that rule.

### Single-file build

`python3 tools/build-single-file.py` inlines the CSS and JS into `dist/ctfl-practice-exam.html`, one self-contained
file you can email or carry on a USB stick.

## Contributing

Corrections to questions, justifications and especially the German terminology are very welcome — open an issue or a
pull request quoting the question and the syllabus section. Please keep new questions original: do not paste in questions from the official
ISTQB sample exams or from any commercial question bank.

## Licence

[MIT](LICENSE). The question content is original work released under the same licence.
