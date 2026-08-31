# ISTQB CTFL Practice Exam

A free, offline-capable practice exam for the **ISTQB® Certified Tester Foundation Level, syllabus v4.0**.

80 original questions in two full sets, written to match the structure, question types and difficulty of the real
examination. No accounts, no tracking, no backend — it is a static page that installs to your phone like an app.

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

**Three papers** — Set M1, Set M2, or a mixed paper drawing 40 questions at random from all 80, still on the
blueprint. Question and answer order are shuffled per attempt by default, so a second sitting is not a memory test.

**Marking and review** — a score, a pass/fail stamp, a per-chapter breakdown showing where to revise, and for every
question the correct answer, a justification, and the syllabus chapter and learning objective it targets. You can
review everything or filter to just your mistakes.

**Revision by chapter** — untimed practice on one chapter at a time, with the answer and explanation appearing as
soon as you choose.

**Attempt history** — every mock exam is recorded with its score, percentage, duration and result.

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

No build step and no dependencies. Any static file server will do:

```bash
git clone https://github.com/<your-username>/ctfl-practice-exam.git
cd ctfl-practice-exam
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly from the filesystem also mostly works, but service workers need `http://`, so offline
mode will not register.

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
assets/app.js               exam engine: sessions, timing, shuffling, marking, history
assets/questions.js         the two question banks — edit this file to add or fix questions
sw.js                       service worker: precaches the shell for offline use
manifest.webmanifest        PWA manifest
icons/                      app icons
tools/make-icons.py         regenerates the icons
tools/build-single-file.py  inlines everything into dist/ctfl-practice-exam.html
tools/smoke-test.js         Playwright end-to-end check of every mode
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
  just: "…"                    // why the answer is right and the others are not
}
```

Justifications never refer to answers by letter, because the option order is shuffled at run time.

### Single-file build

`python3 tools/build-single-file.py` inlines the CSS and JS into `dist/ctfl-practice-exam.html`, one self-contained
file you can email or carry on a USB stick.

## Contributing

Corrections to questions and justifications are very welcome — open an issue or a pull request quoting the
question and the syllabus section. Please keep new questions original: do not paste in questions from the official
ISTQB sample exams or from any commercial question bank.

## Licence

[MIT](LICENSE). The question content is original work released under the same licence.
