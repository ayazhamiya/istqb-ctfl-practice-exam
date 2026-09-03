/* CTFL Practice Exam — application logic.
   No framework, no build step, no network calls. State lives in localStorage only. */
(function () {
  "use strict";

  var BANK = window.CTFL_BANK;
  var I18N = window.CTFL_I18N;
  var SETS = BANK.sets;
  var LET = ["a", "b", "c", "d", "e"];
  var PASS_MARK = 26;
  var EXAM_LENGTH = 40;
  var BLUEPRINT = { 1: 8, 2: 5, 3: 5, 4: 11, 5: 9, 6: 2 };

  var SESSION_KEY = "ctfl.session.v2";
  var HISTORY_KEY = "ctfl.history.v2";
  var THEME_KEY = "ctfl.theme.v1";
  var LANG_KEY = "ctfl.lang.v1";

  /* ---------- language ---------- */
  var LANG = "en";

  function supported(code) {
    for (var i = 0; i < I18N.languages.length; i++) if (I18N.languages[i].code === code) return true;
    return false;
  }
  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
    if (stored && supported(stored)) return stored;
    var prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < prefs.length; i++) {
      var base = String(prefs[i] || "").toLowerCase().split("-")[0];
      if (supported(base)) return base;
    }
    return "en";
  }
  function t(key, vars) {
    var table = I18N.strings[LANG] || {};
    var text = table[key];
    if (text === undefined) text = I18N.strings.en[key];
    if (text === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split("{" + name + "}").join(vars[name]);
      });
    }
    return text;
  }
  /* the question bank is trusted HTML, but glossary text is rendered inside markup
     we build with a highlight, so escape it before that */
  function esc(v) {
    return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function chapterName(ch) {
    var table = I18N.chapters[LANG] || I18N.chapters.en;
    return table[ch] || I18N.chapters.en[ch];
  }
  /* A question in the current language. Any field missing from the translation
     falls back to English, so a partial translation never blanks the page. */
  function localized(q) {
    if (LANG === "en" || !q.i18n || !q.i18n[LANG]) return q;
    var tr = q.i18n[LANG], out = {};
    Object.keys(q).forEach(function (k) { out[k] = q[k]; });
    Object.keys(tr).forEach(function (k) {
      if (tr[k] !== undefined && tr[k] !== null && tr[k] !== "") out[k] = tr[k];
    });
    return out;
  }
  function setName(id) {
    if (id === "mix") return t("set.mix.name");
    return t("set." + id + ".name");
  }

  /* ---------- concept notes ----------
     theory.js is not needed to sit an exam, so it is fetched on demand rather than
     shipped in the initial bundle. The single-file build inlines it, in which case
     window.CTFL_THEORY already exists and no request is made. */
  var theoryPromise = null;
  function loadTheory() {
    if (window.CTFL_THEORY) return Promise.resolve(window.CTFL_THEORY);
    if (theoryPromise) return theoryPromise;
    theoryPromise = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "assets/theory.js";
      s.onload = function () { resolve(window.CTFL_THEORY || null); };
      s.onerror = function () { resolve(null); };   // offline and not cached: degrade quietly
      document.head.appendChild(s);
    });
    return theoryPromise;
  }
  /* ---------- glossary ----------
     Same on-demand pattern as the notes: nobody needs the glossary to sit an exam,
     so it costs nothing until the reader opens it. The single-file build inlines it. */
  var glossPromise = null;
  function loadGlossary() {
    if (window.CTFL_GLOSSARY) return Promise.resolve(window.CTFL_GLOSSARY);
    if (glossPromise) return glossPromise;
    glossPromise = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "assets/glossary.js";
      s.onload = function () { resolve(window.CTFL_GLOSSARY || null); };
      s.onerror = function () { resolve(null); };   // offline and not cached: degrade quietly
      document.head.appendChild(s);
    });
    return glossPromise;
  }

  function loKey(lo) { return String(lo).split(" ")[0]; }
  function noteFor(lo) {
    var all = window.CTFL_THEORY;
    if (!all) return null;
    var entry = all[loKey(lo)];
    if (!entry) return null;
    return entry[LANG] || entry.en || null;
  }
  function conceptBody(note, withLead) {
    var h = '<div class="concept-body">';
    if (withLead !== false) h += '<p class="c-lead">' + note.oneLine + "</p>";
    if (note.tests) h += '<h4>' + t("concept.tests") + "</h4>" + note.tests;
    if (note.worked) h += '<h4>' + t("concept.worked") + "</h4>" + note.worked;
    if (note.traps && note.traps.length) {
      h += '<h4>' + t("concept.traps") + "</h4><ul>";
      note.traps.forEach(function (x) { h += "<li>" + x + "</li>"; });
      h += "</ul>";
    }
    if (note.confuse && note.confuse.length) {
      h += '<h4>' + t("concept.confuse") + '</h4><div class="figure"><table class="dt confuse">';
      note.confuse.forEach(function (row) {
        h += '<tr><td class="rowhead">' + row[0] + '</td><td class="rowhead">' + row[1] + "</td><td>" + row[2] + "</td></tr>";
      });
      h += "</table></div>";
    }
    if (note.readNext) h += '<p class="c-ref">' + t("concept.readNext", { n: note.readNext }) + "</p>";
    h += "</div>";
    return h;
  }
  function conceptHtml(note) {
    return '<details class="concept"><summary>' + t("concept.label") + ": " + note.title +
           "</summary>" + conceptBody(note) + "</details>";
  }
  /* Populate any concept slots that are on the page but still empty. Safe to call
     repeatedly: after grading, after the theory file arrives, after a language switch. */
  function fillConcepts() {
    var slots = document.querySelectorAll(".concept-slot");
    for (var i = 0; i < slots.length; i++) {
      var note = noteFor(slots[i].getAttribute("data-lo"));
      slots[i].innerHTML = note ? conceptHtml(note) : "";
    }
  }

  /* ---------- small helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function readStore(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch (e) { return fallback; }
  }
  function writeStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
  }
  function dropStore(key) { try { localStorage.removeItem(key); } catch (e) {} }
  function shuffled(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function identity(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function fmtClock(ms) {
    if (ms < 0) ms = 0;
    var total = Math.floor(ms / 1000), m = Math.floor(total / 60), s = total % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function setById(id) {
    for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i];
    return null;
  }

  /* ---------- figures shared by questions ---------- */
  function contractStates() {
    var s = LANG === "de"
      ? { init: "NEU", rejected: "ABGELEHNT", active: "AKTIV", susp: "AUSGESETZT", closed: "GESCHLOSSEN",
          approve: "genehmigen", reject: "ablehnen", suspend: "aussetzen", reactivate: "reaktivieren", close: "schließen",
          alt: "Zustandsübergangsdiagramm. Von NEU führt das Ereignis genehmigen zu AKTIV und ablehnen zu ABGELEHNT. Von AKTIV führt aussetzen zu AUSGESETZT und schließen zu GESCHLOSSEN. Von AUSGESETZT führt reaktivieren zurück zu AKTIV und schließen zu GESCHLOSSEN." }
      : { init: "NEW", rejected: "REJECTED", active: "ACTIVE", susp: "SUSPENDED", closed: "CLOSED",
          approve: "approve", reject: "reject", suspend: "suspend", reactivate: "reactivate", close: "close",
          alt: "State transition diagram. From NEW, the event approve leads to ACTIVE and the event reject leads to REJECTED. From ACTIVE, suspend leads to SUSPENDED and close leads to CLOSED. From SUSPENDED, reactivate leads back to ACTIVE and close leads to CLOSED." };
    return '<div class="figure"><svg class="diagram" viewBox="0 0 660 268" role="img" aria-label="' + s.alt + '">' +
      '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke" stroke="none"/></marker></defs>' +
      '<circle class="start" cx="16" cy="130" r="5"/><path d="M22,130 H48" marker-end="url(#ah)"/>' +
      '<rect x="50" y="108" width="104" height="44" rx="3"/><text x="102" y="135" text-anchor="middle">' + s.init + '</text>' +
      '<rect x="286" y="20" width="140" height="44" rx="3"/><rect x="290" y="24" width="132" height="36" rx="2" fill="none"/><text x="356" y="47" text-anchor="middle">' + s.rejected + '</text>' +
      '<rect x="286" y="108" width="110" height="44" rx="3"/><text x="341" y="135" text-anchor="middle">' + s.active + '</text>' +
      '<rect x="282" y="196" width="148" height="44" rx="3"/><text x="356" y="223" text-anchor="middle">' + s.susp + '</text>' +
      '<rect x="520" y="108" width="132" height="44" rx="3"/><rect x="524" y="112" width="124" height="36" rx="2" fill="none"/><text x="586" y="135" text-anchor="middle">' + s.closed + '</text>' +
      '<path d="M154,130 H282" marker-end="url(#ah)"/><text class="ev" x="218" y="123" text-anchor="middle">' + s.approve + '</text>' +
      '<path d="M102,108 V42 H282" marker-end="url(#ah)"/><text class="ev" x="192" y="35" text-anchor="middle">' + s.reject + '</text>' +
      '<path d="M320,152 V192" marker-end="url(#ah)"/><text class="ev" x="266" y="176" text-anchor="middle">' + s.suspend + '</text>' +
      '<path d="M366,196 V156" marker-end="url(#ah)"/><text class="ev" x="432" y="176" text-anchor="middle">' + s.reactivate + '</text>' +
      '<path d="M396,130 H516" marker-end="url(#ah)"/><text class="ev" x="456" y="123" text-anchor="middle">' + s.close + '</text>' +
      '<path d="M430,218 H586 V156" marker-end="url(#ah)"/><text class="ev" x="505" y="211" text-anchor="middle">' + s.close + '</text>' +
      "</svg></div>";
  }
  function orderStates() {
    var s = LANG === "de"
      ? { draft: "ENTWURF", sub: "EINGEREICHT", appr: "GENEHMIGT", ship: "VERSANDT", canc: "STORNIERT",
          eSubmit: "einreichen", eReject: "ablehnen", eApprove: "genehmigen", eShip: "versenden", eCancel: "stornieren",
          alt: "Zustandsübergangsdiagramm einer Bestellung. Von ENTWURF führt einreichen zu EINGEREICHT und stornieren zu STORNIERT. Von EINGEREICHT führt ablehnen zurück zu ENTWURF und genehmigen zu GENEHMIGT. Von GENEHMIGT führt versenden zu VERSANDT und stornieren zu STORNIERT." }
      : { draft: "DRAFT", sub: "SUBMITTED", appr: "APPROVED", ship: "SHIPPED", canc: "CANCELLED",
          eSubmit: "submit", eReject: "reject", eApprove: "approve", eShip: "ship", eCancel: "cancel",
          alt: "State transition diagram of a purchase order. From DRAFT, submit leads to SUBMITTED and cancel leads to CANCELLED. From SUBMITTED, reject leads back to DRAFT and approve leads to APPROVED. From APPROVED, ship leads to SHIPPED and cancel leads to CANCELLED." };
    return '<div class="figure"><svg class="diagram" viewBox="0 0 700 268" role="img" aria-label="' + s.alt + '">' +
      '<defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke" stroke="none"/></marker></defs>' +
      '<circle class="start" cx="14" cy="80" r="5"/><path d="M20,80 H36" marker-end="url(#ah2)"/>' +
      '<rect x="40" y="58" width="112" height="44" rx="3"/><text x="96" y="85" text-anchor="middle">' + s.draft + '</text>' +
      '<rect x="228" y="58" width="146" height="44" rx="3"/><text x="301" y="85" text-anchor="middle">' + s.sub + '</text>' +
      '<rect x="450" y="58" width="136" height="44" rx="3"/><text x="518" y="85" text-anchor="middle">' + s.appr + '</text>' +
      '<rect x="450" y="194" width="136" height="44" rx="3"/><rect x="454" y="198" width="128" height="36" rx="2" fill="none"/><text x="518" y="221" text-anchor="middle">' + s.ship + '</text>' +
      '<rect x="182" y="194" width="150" height="44" rx="3"/><rect x="186" y="198" width="142" height="36" rx="2" fill="none"/><text x="257" y="221" text-anchor="middle">' + s.canc + '</text>' +
      '<path d="M152,72 H224" marker-end="url(#ah2)"/><text class="ev" x="188" y="65" text-anchor="middle">' + s.eSubmit + '</text>' +
      '<path d="M228,92 H156" marker-end="url(#ah2)"/><text class="ev" x="192" y="110" text-anchor="middle">' + s.eReject + '</text>' +
      '<path d="M374,80 H446" marker-end="url(#ah2)"/><text class="ev" x="410" y="73" text-anchor="middle">' + s.eApprove + '</text>' +
      '<path d="M518,102 V190" marker-end="url(#ah2)"/><text class="ev" x="528" y="150">' + s.eShip + '</text>' +
      '<path d="M450,96 H428 V216 H336" marker-end="url(#ah2)"/><text class="ev" x="400" y="209" text-anchor="middle">' + s.eCancel + '</text>' +
      '<path d="M96,102 V216 H178" marker-end="url(#ah2)"/><text class="ev" x="136" y="209" text-anchor="middle">' + s.eCancel + '</text>' +
      "</svg></div>";
  }
  var FIGURES = { "contract-states": contractStates, "order-states": orderStates };

  /* ---------- session ---------- */
  var session = null;
  var ticker = null;
  var chosenSetId = "m1";

  function poolAll() {
    var out = [];
    SETS.forEach(function (s) {
      s.questions.forEach(function (q, i) { out.push({ s: s.id, i: i, ch: q.ch, lo: loKey(q.lo) }); });
    });
    return out;
  }
  function questionOf(ref) { return setById(ref.s).questions[ref.i]; }

  function withOrder(refs, shuffle) {
    return refs.map(function (ref) {
      var q = questionOf(ref);
      return {
        s: ref.s, i: ref.i,
        order: shuffle ? shuffled(identity(q.opts.length)) : identity(q.opts.length)
      };
    });
  }

  function buildExam(setId, shuffle, minutes) {
    var refs;
    if (setId === "mix") {
      var byChapter = {};
      poolAll().forEach(function (r) { (byChapter[r.ch] = byChapter[r.ch] || []).push(r); });
      refs = [];
      Object.keys(BLUEPRINT).forEach(function (ch) {
        refs = refs.concat(shuffled(byChapter[ch]).slice(0, BLUEPRINT[ch]));
      });
      refs = shuffled(refs);
    } else {
      var s = setById(setId);
      refs = s.questions.map(function (q, i) { return { s: s.id, i: i, ch: q.ch }; });
      if (shuffle) refs = shuffled(refs);
    }
    session = {
      v: 2, mode: "exam", setId: setId, chapter: null,
      items: withOrder(refs, shuffle),
      answers: {}, flags: {}, graded: false,
      durationMin: minutes, startedAt: Date.now(), endsAt: Date.now() + minutes * 60000
    };
    saveSession();
  }

  function buildRevision(chapter, lo) {
    var refs = shuffled(poolAll().filter(function (r) {
      return lo ? r.lo === lo : r.ch === Number(chapter);
    }));
    session = {
      v: 2, mode: "revision", setId: "all", chapter: Number(chapter), lo: lo || null,
      items: withOrder(refs, true),
      answers: {}, flags: {}, graded: false,
      durationMin: 0, startedAt: Date.now(), endsAt: 0
    };
    saveSession();
  }

  function saveSession() { if (session) writeStore(SESSION_KEY, session); }

  /* Resolved view of one item: the question in the current language, with its
     options in this attempt's order. Correct-answer indices are remapped to match,
     so marking is identical whatever the language or the shuffle. */
  function view(idx) {
    var it = session.items[idx];
    var raw = setById(it.s).questions[it.i];
    var q = localized(raw);
    var opts = it.order.map(function (o) { return q.opts[o]; });
    var ans = raw.ans.map(function (o) { return it.order.indexOf(o); }).sort(function (a, b) { return a - b; });
    return { q: q, opts: opts, ans: ans, multi: !!raw.multi };
  }
  function required(idx) { return view(idx).multi ? 2 : 1; }
  function isAnswered(idx) {
    var a = session.answers[idx];
    return !!a && a.length === required(idx);
  }
  function isRight(idx) {
    var got = session.answers[idx] || [], want = view(idx).ans;
    if (got.length !== want.length) return false;
    for (var k = 0; k < want.length; k++) if (got.indexOf(want[k]) < 0) return false;
    return true;
  }

  /* ---------- rendering ---------- */
  function renderPaper() {
    var html = "";
    for (var idx = 0; idx < session.items.length; idx++) {
      var v = view(idx), q = v.q, n = idx + 1;
      html += '<article class="q" id="q' + n + '" data-idx="' + idx + '">';
      html += '<div class="q-head"><span class="q-num">' + t("q.number", { n: n }) + "</span>" +
              '<span class="q-pts">' + t("q.point") + "</span>" +
              (session.mode === "exam"
                ? '<button class="q-flag" type="button" data-flag="' + idx + '" aria-pressed="false">' + t("q.flag") + "</button>"
                : "") +
              "</div>";
      html += '<div class="stem"><p>' + q.stem + "</p>";
      if (q.extra) html += q.extra;
      if (q.fig && FIGURES[q.fig]) html += FIGURES[q.fig]();
      if (q.code) html += '<pre class="code">' + q.code + "</pre>";
      if (q.romans) {
        html += '<ol class="roman">';
        q.romans.forEach(function (r) { html += "<li><span>" + r + "</span></li>"; });
        html += "</ol>";
      }
      if (q.match) {
        html += '<ul class="matchlist">';
        q.match.items.forEach(function (m, k) { html += "<li>" + (k + 1) + ". <span>" + m + "</span></li>"; });
        html += '</ul><ul class="matchlist">';
        q.match.cats.forEach(function (c, k) { html += "<li>" + LET[k].toUpperCase() + ". <span>" + c + "</span></li>"; });
        html += "</ul>";
      }
      if (q.stem2) html += "<p>" + q.stem2 + "</p>";
      html += "</div>";

      html += '<ul class="opts">';
      for (var o = 0; o < v.opts.length; o++) {
        var inputId = "q" + n + "o" + o;
        html += '<li><label class="opt" for="' + inputId + '" data-opt="' + o + '">' +
                '<input type="' + (v.multi ? "checkbox" : "radio") + '" name="q' + n + '" id="' + inputId +
                '" value="' + o + '" data-idx="' + idx + '">' +
                '<span class="lbl">' + LET[o] + ")</span><span>" + v.opts[o] + "</span></label></li>";
      }
      html += "</ul>";
      html += '<div class="instr">' + (v.multi ? t("q.selectTwo") : t("q.selectOne")) + "</div>";
      html += '<div class="expl" id="e' + n + '" hidden></div>';
      html += "</article>";
    }
    $("sheet").innerHTML = html;

    var cells = "", cellsMobile = "";
    for (var g = 0; g < session.items.length; g++) {
      cells += '<a class="cell" href="#q' + (g + 1) + '" id="c' + g + '">' + (g + 1) + "</a>";
      cellsMobile += '<a class="cell" href="#q' + (g + 1) + '" data-cell="' + g + '">' + (g + 1) + "</a>";
    }
    $("grid").innerHTML = cells;
    $("gridMobile").innerHTML = cellsMobile;
    $("mTot").textContent = session.items.length;
  }

  function restoreSelections() {
    Object.keys(session.answers).forEach(function (idx) {
      session.answers[idx].forEach(function (o) {
        var el = $("q" + (Number(idx) + 1) + "o" + o);
        if (el) el.checked = true;
      });
    });
    Object.keys(session.flags).forEach(function (idx) {
      if (!session.flags[idx]) return;
      var b = document.querySelector('[data-flag="' + idx + '"]');
      if (b) { b.setAttribute("aria-pressed", "true"); b.textContent = t("q.flagged"); }
    });
  }

  function revealAnswer(idx) {
    var v = view(idx), n = idx + 1, ok = isRight(idx);
    var article = $("q" + n);
    article.classList.add(ok ? "graded-ok" : "graded-no");
    if (!article.querySelector(".verdict")) {
      var badge = document.createElement("span");
      badge.className = "verdict " + (ok ? "ok" : "no");
      badge.textContent = ok ? t("q.correct") : t("q.incorrect");
      var flagBtn = article.querySelector(".q-flag");
      if (flagBtn) flagBtn.parentNode.replaceChild(badge, flagBtn);
      else article.querySelector(".q-head").appendChild(badge);
    }
    var labels = article.querySelectorAll(".opt");
    for (var i = 0; i < labels.length; i++) {
      var oi = Number(labels[i].getAttribute("data-opt"));
      var chosen = (session.answers[idx] || []).indexOf(oi) >= 0;
      if (v.ans.indexOf(oi) >= 0) labels[i].classList.add("correct");
      else if (chosen) labels[i].classList.add("wrong");
      labels[i].querySelector("input").disabled = true;
    }
    var correctLetters = v.ans.map(function (x) { return LET[x] + ")"; }).join(" + ");
    var yourLetters = (session.answers[idx] || []).map(function (x) { return LET[x] + ")"; }).join(" + ") || t("q.noAnswer");
    var box = $("e" + n);
    box.innerHTML =
      '<p class="key">' + t("q.key", { correct: correctLetters, yours: yourLetters }) + "</p>" +
      "<p>" + v.q.just + "</p>" +
      '<p class="ref">' + t("q.ref", { chapter: chapterName(v.q.ch), lo: v.q.lo }) + "</p>" +
      '<div class="concept-slot" data-lo="' + v.q.lo + '"></div>';
    box.hidden = false;
    var cell = $("c" + idx);
    if (cell) cell.className = "cell " + (ok ? "ok" : "no");
    var cellMobile = document.querySelector('[data-cell="' + idx + '"]');
    if (cellMobile) cellMobile.className = "cell " + (ok ? "ok" : "no");
  }

  /* ---------- interaction ---------- */
  function onSheetChange(e) {
    var input = e.target;
    if (!input || (input.type !== "radio" && input.type !== "checkbox")) return;
    var idx = Number(input.getAttribute("data-idx"));
    if (session.graded || input.disabled) return;
    var value = Number(input.value);

    if (view(idx).multi) {
      var current = (session.answers[idx] || []).slice();
      if (input.checked) {
        if (current.length >= 2) { input.checked = false; return; }
        current.push(value);
      } else {
        current = current.filter(function (x) { return x !== value; });
      }
      current.sort(function (a, b) { return a - b; });
      session.answers[idx] = current;
      if (!current.length) delete session.answers[idx];
    } else {
      session.answers[idx] = [value];
    }
    saveSession();
    refreshMeter();
    if (session.mode === "revision" && isAnswered(idx)) {
      revealAnswer(idx);
      fillConcepts();
      loadTheory().then(fillConcepts);
    }
  }

  function onSheetClick(e) {
    var btn = e.target.closest ? e.target.closest("[data-flag]") : null;
    if (!btn) return;
    var idx = Number(btn.getAttribute("data-flag"));
    session.flags[idx] = !session.flags[idx];
    btn.setAttribute("aria-pressed", session.flags[idx] ? "true" : "false");
    btn.textContent = session.flags[idx] ? t("q.flagged") : t("q.flag");
    saveSession();
    refreshMeter();
  }

  function refreshMeter() {
    var answered = 0, flagged = 0;
    for (var idx = 0; idx < session.items.length; idx++) {
      var done = isAnswered(idx);
      if (done) answered++;
      if (session.flags[idx]) flagged++;
      if (!session.graded && !(session.mode === "revision" && done)) {
        var cls = "cell" + (done ? " done" : "") + (session.flags[idx] ? " flagged" : "");
        var cell = $("c" + idx);
        if (cell) cell.className = cls;
        var cellMobile = document.querySelector('[data-cell="' + idx + '"]');
        if (cellMobile) cellMobile.className = cls;
      }
    }
    $("mAns").textContent = answered;
    var sheetAns = $("sheetAnsLabel");
    if (sheetAns) sheetAns.textContent = t("sheet.answered", { n: answered, total: session.items.length });
    var sheetFlag = $("sheetFlagLabel");
    if (sheetFlag) sheetFlag.textContent = t("sheet.flagged", { n: flagged });
    return answered;
  }

  function startClock() {
    var el = $("clock");
    el.hidden = false;
    function step() {
      var left = session.endsAt - Date.now();
      el.textContent = fmtClock(left);
      el.classList.toggle("warn", left <= 5 * 60 * 1000);
      if (left <= 0) { stopClock(); grade(true); }
    }
    step();
    stopClock();
    ticker = setInterval(step, 1000);
  }
  function stopClock() { if (ticker) { clearInterval(ticker); ticker = null; } }

  /* ---------- screens ---------- */
  function showHome() {
    stopClock();
    studyChapter = null;
    $("study").hidden = true;
    $("glossary").hidden = true;
    $("home").hidden = false;
    $("paper").hidden = true;
    $("result").hidden = true;
    $("rail").hidden = true;
    $("mobileSheet").hidden = true;
    $("meterWrap").hidden = true;
    $("clock").hidden = true;
    $("btnSubmit").hidden = true;
    $("btnBackTop").hidden = true;
    renderStudyChapters();
    renderHistory();
    renderResumeButton();
    window.scrollTo(0, 0);
  }

  function openPaper() {
    studyChapter = null;
    $("study").hidden = true;
    $("glossary").hidden = true;
    $("home").hidden = true;
    $("paper").hidden = false;
    $("result").hidden = true;
    $("rail").hidden = false;
    $("mobileSheet").hidden = false;
    $("sheetGrid").hidden = true;
    $("btnSheetToggle").setAttribute("aria-expanded", "false");
    $("btnBackTop").hidden = false;
    $("meterWrap").hidden = false;
    $("btnSubmit").hidden = session.mode !== "exam" || session.graded;
    $("confirm").hidden = true;
    $("revisionDone").hidden = session.mode !== "revision" || session.graded;

    if (session.mode === "exam") {
      $("paperEyebrow").textContent = t("paper.exam");
      $("paperTitle").textContent = setName(session.setId);
      $("paperSub").textContent = t("paper.sub.exam", { n: session.items.length });
    } else {
      $("paperEyebrow").textContent = t("paper.revision");
      $("paperTitle").textContent = session.lo
        ? t("paper.objective", { lo: session.lo })
        : t("paper.chapter") + " " + chapterName(session.chapter);
      $("paperSub").textContent = t("paper.sub.revision", { n: session.items.length });
    }

    renderPaper();
    restoreSelections();
    refreshMeter();
    loadTheory().then(fillConcepts);
    if (session.mode === "exam" && !session.graded) startClock(); else $("clock").hidden = true;
    if (session.mode === "revision") {
      for (var idx = 0; idx < session.items.length; idx++) if (isAnswered(idx)) revealAnswer(idx);
    }
  }

  function askSubmit() {
    var answered = refreshMeter(), remaining = session.items.length - answered;
    $("confirmText").textContent = remaining === 0
      ? t("confirm.all", { n: session.items.length })
      : t("confirm.some", { n: remaining });
    $("confirm").hidden = false;
    $("confirm").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function grade(auto) {
    session.graded = true;
    stopClock();
    $("confirm").hidden = true;
    $("btnSubmit").hidden = true;
    $("revisionDone").hidden = true;

    var score = 0, byChapter = {};
    for (var ch = 1; ch <= 6; ch++) byChapter[ch] = [0, 0];
    for (var idx = 0; idx < session.items.length; idx++) {
      var v = view(idx), ok = isRight(idx);
      byChapter[v.q.ch][1]++;
      if (ok) { score++; byChapter[v.q.ch][0]++; }
      revealAnswer(idx);
    }

    var total = session.items.length;
    var pct = Math.round((score / total) * 1000) / 10;
    var pass = session.mode === "exam" ? score >= PASS_MARK : pct >= 65;
    var minutes = Math.max(0, Math.round((Date.now() - session.startedAt) / 60000));
    if (session.mode === "exam") minutes = Math.min(minutes, session.durationMin);

    $("rScore").textContent = score + "/" + total;
    var stamp = $("rStamp");
    stamp.textContent = pass ? t("result.pass") : t("result.fail");
    stamp.className = "stamp " + (pass ? "pass" : "fail");
    stamp.hidden = session.mode !== "exam";
    $("rMeta").innerHTML =
      (session.mode === "exam"
        ? t("result.meta", { pct: pct, min: minutes })
        : t("result.meta.revision", { pct: pct, min: minutes })) +
      (auto ? t("result.auto") : "");

    var bars = "";
    for (var c = 1; c <= 6; c++) {
      if (!byChapter[c][1]) continue;
      var pctCh = Math.round((byChapter[c][0] / byChapter[c][1]) * 100);
      var st = chapterNoteStats(c);
      var link = st.withNote
        ? ' <button class="linkish" type="button" data-study="' + c + '">' + t("result.weak") + " &rarr;</button>"
        : "";
      bars += '<div class="brow"><div><div class="nm">' + chapterName(c) + (pctCh < 65 ? link : "") + "</div>" +
              '<div class="track"><div class="fill' + (pctCh < 65 ? " weak" : "") + '" style="width:' + pctCh + '%"></div></div></div>' +
              '<div class="val">' + byChapter[c][0] + "/" + byChapter[c][1] + "</div></div>";
    }
    $("rBars").innerHTML = bars;
    $("result").hidden = false;
    fillConcepts();
    loadTheory().then(fillConcepts);

    if (session.mode === "exam") {
      var history = readStore(HISTORY_KEY, []);
      history.unshift({
        ts: Date.now(), setId: session.setId,
        score: score, total: total, pct: pct, pass: pass, minutes: minutes
      });
      writeStore(HISTORY_KEY, history.slice(0, 50));
    }
    saveSession();
    $("result").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function filterReview(onlyWrong) {
    for (var idx = 0; idx < session.items.length; idx++) {
      $("q" + (idx + 1)).hidden = onlyWrong && isRight(idx);
    }
    var first = document.querySelector("#sheet .q:not([hidden])");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- study screen ---------- */
  var studyChapter = null;

  /* how many objectives a chapter uses, and how many of those have a note */
  function chapterNoteStats(ch) {
    var used = {}, withNote = 0, total = 0;
    poolAll().forEach(function (r) { if (r.ch === Number(ch)) used[r.lo] = true; });
    Object.keys(used).forEach(function (lo) {
      total++;
      if (window.CTFL_THEORY && window.CTFL_THEORY[lo]) withNote++;
    });
    return { total: total, withNote: withNote };
  }

  function openStudy(ch) {
    studyChapter = Number(ch);
    $("home").hidden = true;
    $("paper").hidden = true;
    $("result").hidden = true;
    $("rail").hidden = true;
    $("mobileSheet").hidden = true;
    $("meterWrap").hidden = true;
    $("clock").hidden = true;
    $("btnSubmit").hidden = true;
    $("btnBackTop").hidden = false;
    $("glossary").hidden = true;
    $("study").hidden = false;
    renderStudy();
    window.scrollTo(0, 0);
  }

  function renderStudy() {
    var ch = studyChapter;
    $("studyTitle").textContent = chapterName(ch);
    var stats = chapterNoteStats(ch);
    $("studySub").textContent = t("study.sub", { n: stats.withNote, total: stats.total });

    /* objectives in this chapter that have a note, in syllabus order */
    var counts = {};
    poolAll().forEach(function (r) { if (r.ch === ch) counts[r.lo] = (counts[r.lo] || 0) + 1; });
    var los = Object.keys(counts).filter(function (lo) {
      return window.CTFL_THEORY && window.CTFL_THEORY[lo];
    }).sort();

    if (!los.length) {
      $("studyBody").innerHTML = '<div class="card"><p class="empty">' + t("study.none") + "</p></div>";
      return;
    }
    var html = "";
    los.forEach(function (lo) {
      var note = noteFor(lo);
      html += '<article class="scard">';
      html += '<div class="scard-head"><span class="lo-chip">' + lo + '</span><h3>' + note.title + "</h3></div>";
      html += '<p class="scard-lead">' + note.oneLine + "</p>";
      html += '<details class="concept scard-more"><summary>' + t("study.full") + "</summary>" +
              conceptBody(note, false) + "</details>";
      html += '<div class="go" style="margin-top:1rem"><button class="btn" type="button" data-practise="' + lo + '">' +
              t("study.practise") + " · " + counts[lo] + "</button></div>";
      html += "</article>";
    });
    $("studyBody").innerHTML = html;
  }

  /* ---------- glossary screen ---------- */
  var glossChapter = "all";
  var glossQuery = "";

  function glossTerms() { return window.CTFL_GLOSSARY || []; }

  /* the term as this reader sees it, plus the other language kept alongside:
     someone revising in German still meets the English term in the exam. */
  function glossPrimary(item) { return LANG === "de" && item.de ? item.de : item.en; }
  function glossSecondary(item) { return LANG === "de" && item.de ? item.en : item.de; }
  function glossDef(item) { return item.def[LANG] || item.def.en; }

  function fold(v) {
    v = String(v).toLowerCase();
    return v.normalize ? v.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : v;
  }
  function glossMatches(item, needle) {
    if (!needle) return true;
    return fold(item.en + " " + item.de + " " + item.def.en + " " + item.def.de).indexOf(needle) !== -1;
  }
  function mark(text, needle) {
    var safe = esc(text);
    if (!needle) return safe;
    var i = fold(safe).indexOf(needle);
    if (i === -1) return safe;   // matched on the other language or the definition
    return safe.slice(0, i) + "<mark>" + safe.slice(i, i + needle.length) + "</mark>" + safe.slice(i + needle.length);
  }

  function openGlossary() {
    $("home").hidden = true;
    $("paper").hidden = true;
    $("result").hidden = true;
    $("study").hidden = true;
    $("rail").hidden = true;
    $("mobileSheet").hidden = true;
    $("meterWrap").hidden = true;
    $("clock").hidden = true;
    $("btnSubmit").hidden = true;
    $("btnBackTop").hidden = false;
    $("glossary").hidden = false;
    renderGlossary();
    window.scrollTo(0, 0);
  }

  function renderGlossChips() {
    var chapters = Object.keys(I18N.chapters.en);
    var html = '<button class="chip" type="button" data-gch="all" aria-pressed="' +
      (glossChapter === "all") + '">' + t("gloss.all") + "</button>";
    chapters.forEach(function (ch) {
      html += '<button class="chip" type="button" data-gch="' + ch + '" aria-pressed="' +
        (glossChapter === ch) + '" title="' + esc(chapterName(ch)) + '">' +
        t("gloss.ch", { n: ch }) + "</button>";
    });
    $("glossChips").innerHTML = html;
  }

  function renderGlossary() {
    var all = glossTerms();
    $("glossSub").textContent = all.length
      ? t("gloss.sub", { n: all.length })
      : t("gloss.unavailable");
    $("glossSearch").placeholder = t("gloss.search");
    renderGlossChips();

    var needle = fold(glossQuery.trim());
    var hits = all.filter(function (item) {
      if (glossChapter !== "all" && String(item.ch) !== glossChapter) return false;
      return glossMatches(item, needle);
    });
    $("glossShown").textContent = t("gloss.count", { n: hits.length });

    if (!hits.length) {
      $("glossBody").innerHTML = '<div class="card"><p class="empty">' +
        (all.length ? t("gloss.none") : t("gloss.unavailable")) + "</p></div>";
      return;
    }

    /* group by chapter so the list reads in syllabus order even while filtered */
    var byCh = {};
    hits.forEach(function (item) { (byCh[item.ch] = byCh[item.ch] || []).push(item); });
    var html = "";
    Object.keys(byCh).sort(function (a, b) { return a - b; }).forEach(function (ch) {
      html += '<section class="gsec"><h3>' + esc(chapterName(ch)) + "</h3><dl>";
      byCh[ch].forEach(function (item) {
        var second = glossSecondary(item);
        html += '<div class="gterm"><dt>' + mark(glossPrimary(item), needle) + "</dt>";
        if (second) html += '<p class="de">' + mark(second, needle) + "</p>";
        html += "<dd>" + mark(glossDef(item), needle) + "</dd></div>";
      });
      html += "</dl></section>";
    });
    $("glossBody").innerHTML = html;
  }

  function renderGlossCount() {
    var n = glossTerms().length;
    $("glossCount").textContent = n ? t("gloss.terms", { n: n }) : "";
  }

  /* ---------- home screen widgets ---------- */
  function renderSetPicks() {
    var ids = SETS.map(function (s) { return s.id; }).concat(["mix"]);
    $("setPicks").innerHTML = ids.map(function (id) {
      return '<button class="pick" type="button" data-set="' + id + '" aria-pressed="' +
        (id === chosenSetId) + '"><b>' + t("set." + id + ".name") + "</b><span>" +
        t("set." + id + ".blurb") + "</span></button>";
    }).join("");
  }

  function renderChapters() {
    var counts = {};
    poolAll().forEach(function (r) { counts[r.ch] = (counts[r.ch] || 0) + 1; });
    $("chapterList").innerHTML = Object.keys(I18N.chapters.en).map(function (ch) {
      return '<button class="chap" type="button" data-chapter="' + ch + '">' +
        '<span class="nm">' + chapterName(ch) + "</span>" +
        '<span class="ct">' + (counts[ch] || 0) + " " + t("chap.count") + "</span>" +
        '<span class="arrow" aria-hidden="true">&rarr;</span></button>';
    }).join("");
  }

  function renderStudyChapters() {
    var el = $("studyList");
    if (!el) return;
    el.innerHTML = Object.keys(I18N.chapters.en).map(function (ch) {
      var st = chapterNoteStats(ch);
      var disabled = st.withNote === 0 ? " disabled" : "";
      return '<button class="chap" type="button" data-study="' + ch + '"' + disabled + '>' +
        '<span class="nm">' + chapterName(ch) + "</span>" +
        '<span class="ct">' + t("chap.notes", { n: st.withNote + "/" + st.total }) + "</span>" +
        '<span class="arrow" aria-hidden="true">&rarr;</span></button>';
    }).join("");
  }

  function renderHistory() {
    var history = readStore(HISTORY_KEY, []);
    if (!history.length) {
      $("historyCard").innerHTML = '<p class="empty">' + t("home.history.empty") + "</p>";
      $("bestHint").textContent = "";
      return;
    }
    var best = history.reduce(function (a, b) { return b.score > a.score ? b : a; });
    $("bestHint").textContent = t("home.history.best") + " " + best.score + "/" + best.total;
    var rows = history.slice(0, 12).map(function (h) {
      var d = new Date(h.ts);
      var when = d.toLocaleDateString(LANG, { day: "2-digit", month: "short" }) + " " +
        d.toLocaleTimeString(LANG, { hour: "2-digit", minute: "2-digit" });
      return "<tr><td>" + when + "</td><td>" + setName(h.setId || "mix") + "</td><td>" + h.score + "/" + h.total +
        "</td><td>" + h.pct + "%</td><td>" + h.minutes + " min</td><td><span class='tag " +
        (h.pass ? "pass'>" + t("result.pass") : "fail'>" + t("result.fail")) + "</span></td></tr>";
    }).join("");
    $("historyCard").innerHTML =
      '<table class="hist"><thead><tr><th>' + t("hist.when") + "</th><th>" + t("hist.paper") +
      "</th><th>" + t("hist.score") + "</th><th>" + t("hist.pct") + "</th><th>" + t("hist.time") +
      "</th><th>" + t("hist.result") + "</th></tr></thead><tbody>" + rows + "</tbody></table>" +
      '<div class="go"><button class="btn ghost" id="btnClearHistory">' + t("home.history.clear") + "</button></div>";
    $("btnClearHistory").addEventListener("click", function () {
      dropStore(HISTORY_KEY);
      renderHistory();
    });
  }

  function renderResumeButton() {
    var saved = readStore(SESSION_KEY, null);
    var btn = $("btnResume");
    if (!saved || saved.v !== 2) { btn.hidden = true; return; }
    var live = saved.mode === "exam" && !saved.graded && saved.endsAt > Date.now();
    var revising = saved.mode === "revision" && !saved.graded;
    if (!live && !revising && !saved.graded) { btn.hidden = true; dropStore(SESSION_KEY); return; }
    btn.hidden = false;
    btn.textContent = live
      ? t("home.resume.exam") + " · " + fmtClock(saved.endsAt - Date.now()) + " " + t("home.resume.left")
      : revising ? t("home.resume.revision") : t("home.resume.review");
    btn.onclick = function () {
      session = saved;
      openPaper();
      if (session.graded) grade(false);
    };
  }

  /* ---------- static text ---------- */
  function applyStaticStrings() {
    document.documentElement.lang = t("html.lang");
    document.title = t("doc.title");
    var meta = $("metaDescription");
    if (meta) meta.setAttribute("content", t("doc.description"));

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    var html = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < html.length; j++) html[j].innerHTML = t(html[j].getAttribute("data-i18n-html"));
    var titles = document.querySelectorAll("[data-i18n-title]");
    for (var k = 0; k < titles.length; k++) titles[k].setAttribute("title", t(titles[k].getAttribute("data-i18n-title")));
    var arias = document.querySelectorAll("[data-i18n-aria]");
    for (var m = 0; m < arias.length; m++) arias[m].setAttribute("aria-label", t(arias[m].getAttribute("data-i18n-aria")));

    // the language button offers the language you are not currently in
    var other = I18N.languages.filter(function (l) { return l.code !== LANG; })[0];
    if (other) {
      $("btnLang").textContent = other.label;
      $("btnLang").setAttribute("lang", other.code);
    }
    updateThemeButtonLabel();
  }

  function setLanguage(code) {
    if (!supported(code) || code === LANG) return;
    LANG = code;
    try { localStorage.setItem(LANG_KEY, code); } catch (e) {}
    applyStaticStrings();
    renderSetPicks();
    renderChapters();
    if (!$("glossary").hidden) {
      renderGlossary();
      renderGlossCount();
    } else if (!$("study").hidden && studyChapter) {
      renderStudy();
    } else if (!$("paper").hidden && session) {
      // Re-render the paper in the new language. The session stores set ids, question
      // indices and the option order, so answers and marking are unaffected.
      var wasGraded = session.graded;
      session.graded = false;
      openPaper();
      if (wasGraded) grade(false);
    } else {
      renderStudyChapters();
      renderHistory();
      renderResumeButton();
    }
  }

  /* ---------- theme ---------- */
  function updateThemeButtonLabel() {
    var root = document.documentElement, current = root.getAttribute("data-theme");
    var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = current ? current === "dark" : systemDark;
    // the theme button offers the theme you would switch TO
    $("btnTheme").textContent = isDark ? t("bar.theme.light") : t("bar.theme.dark");
  }

  (function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (stored === "dark" || stored === "light") document.documentElement.setAttribute("data-theme", stored);
  })();

  $("btnTheme").addEventListener("click", function () {
    var root = document.documentElement, current = root.getAttribute("data-theme");
    var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = current ? (current === "dark" ? "light" : "dark") : (systemDark ? "light" : "dark");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    updateThemeButtonLabel();
  });

  $("btnLang").addEventListener("click", function () {
    var other = I18N.languages.filter(function (l) { return l.code !== LANG; })[0];
    if (other) setLanguage(other.code);
  });

  /* ---------- wiring ---------- */
  $("sheet").addEventListener("change", onSheetChange);
  $("sheet").addEventListener("click", onSheetClick);

  /* mobile answer sheet: tap the handle or the toggle row to expand/collapse the cell grid */
  function toggleMobileSheet() {
    var grid = $("sheetGrid"), willShow = grid.hidden;
    grid.hidden = !willShow;
    $("btnSheetToggle").setAttribute("aria-expanded", willShow ? "true" : "false");
  }
  $("btnSheetHandle").addEventListener("click", toggleMobileSheet);
  $("btnSheetToggle").addEventListener("click", toggleMobileSheet);

  $("setPicks").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set]");
    if (!btn) return;
    chosenSetId = btn.getAttribute("data-set");
    Array.prototype.forEach.call($("setPicks").children, function (c) {
      c.setAttribute("aria-pressed", c.getAttribute("data-set") === chosenSetId);
    });
  });

  /* study chapter buttons appear on the home screen and inside the result bars */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-study]") : null;
    if (!btn || btn.disabled) return;
    loadTheory().then(function () { openStudy(btn.getAttribute("data-study")); });
  });

  /* practise one objective, from the study screen */
  $("studyBody").addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-practise]") : null;
    if (!btn) return;
    buildRevision(null, btn.getAttribute("data-practise"));
    openPaper();
    window.scrollTo(0, 0);
  });

  $("btnGlossary").addEventListener("click", function () {
    loadGlossary().then(function () { renderGlossCount(); openGlossary(); });
  });
  $("btnGlossBack").addEventListener("click", showHome);
  $("glossSearch").addEventListener("input", function (e) {
    glossQuery = e.target.value;
    renderGlossary();
  });
  $("glossChips").addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-gch]") : null;
    if (!btn) return;
    glossChapter = btn.getAttribute("data-gch");
    renderGlossary();
  });

  $("btnStudyBack").addEventListener("click", showHome);

  $("chapterList").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-chapter]");
    if (!btn) return;
    buildRevision(btn.getAttribute("data-chapter"));
    openPaper();
    window.scrollTo(0, 0);
  });

  $("btnStart").addEventListener("click", function () {
    buildExam(chosenSetId, $("optShuffle").checked, $("optExtra").checked ? 75 : 60);
    openPaper();
    window.scrollTo(0, 0);
  });

  $("btnHome").addEventListener("click", showHome);
  $("btnBackTop").addEventListener("click", showHome);
  $("btnSubmit").addEventListener("click", askSubmit);
  $("btnConfirmYes").addEventListener("click", function () { grade(false); });
  $("btnConfirmNo").addEventListener("click", function () { $("confirm").hidden = true; });
  $("btnRevDone").addEventListener("click", function () { grade(false); });
  $("btnReview").addEventListener("click", function () { filterReview(false); });
  $("btnWrong").addEventListener("click", function () { filterReview(true); });
  $("btnRetake").addEventListener("click", function () {
    // Drop it from memory as well as storage, otherwise the beforeunload save
    // below would write the finished paper straight back in.
    session = null;
    dropStore(SESSION_KEY);
    showHome();
  });

  window.addEventListener("beforeunload", function () { saveSession(); });

  /* ---------- start ---------- */
  LANG = detectLang();
  applyStaticStrings();
  renderSetPicks();
  renderChapters();
  showHome();
  /* the study section only knows how many notes exist once theory.js has arrived */
  loadTheory().then(function () {
    renderStudyChapters();
    if (studyChapter) renderStudy();
  });
  /* the home button shows how many terms there are, so fetch the glossary in the
     background too — it is small, and by the time anyone taps it, it is there */
  loadGlossary().then(renderGlossCount);

  (function restore() {
    var saved = readStore(SESSION_KEY, null);
    if (!saved || saved.v !== 2) return;
    if (saved.graded) {
      session = saved;
      openPaper();
      grade(false);
    }
  })();
})();
