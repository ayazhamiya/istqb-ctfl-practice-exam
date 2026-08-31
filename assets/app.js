/* CTFL Practice Exam — application logic.
   No framework, no build step, no network calls. State lives in localStorage only. */
(function () {
  "use strict";

  var BANK = window.CTFL_BANK;
  var SETS = BANK.sets;
  var CHAPTERS = BANK.chapters;
  var LET = ["a", "b", "c", "d", "e"];
  var PASS_MARK = 26;
  var EXAM_LENGTH = 40;
  var BLUEPRINT = { 1: 8, 2: 5, 3: 5, 4: 11, 5: 9, 6: 2 };

  var SESSION_KEY = "ctfl.session.v2";
  var HISTORY_KEY = "ctfl.history.v2";
  var THEME_KEY = "ctfl.theme.v1";

  /* ---------- figures shared by questions ---------- */
  var FIGURES = {
    "contract-states":
      '<div class="figure"><svg class="diagram" viewBox="0 0 660 268" role="img" aria-label="State transition diagram. From NEW, the event approve leads to ACTIVE and the event reject leads to REJECTED. From ACTIVE, suspend leads to SUSPENDED and close leads to CLOSED. From SUSPENDED, reactivate leads back to ACTIVE and close leads to CLOSED.">' +
      '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke" stroke="none"/></marker></defs>' +
      '<circle class="start" cx="16" cy="130" r="5"/><path d="M22,130 H48" marker-end="url(#ah)"/>' +
      '<rect x="50" y="108" width="104" height="44" rx="3"/><text x="102" y="135" text-anchor="middle">NEW</text>' +
      '<rect x="286" y="20" width="128" height="44" rx="3"/><rect x="290" y="24" width="120" height="36" rx="2" fill="none"/><text x="350" y="47" text-anchor="middle">REJECTED</text>' +
      '<rect x="286" y="108" width="110" height="44" rx="3"/><text x="341" y="135" text-anchor="middle">ACTIVE</text>' +
      '<rect x="282" y="196" width="140" height="44" rx="3"/><text x="352" y="223" text-anchor="middle">SUSPENDED</text>' +
      '<rect x="520" y="108" width="112" height="44" rx="3"/><rect x="524" y="112" width="104" height="36" rx="2" fill="none"/><text x="576" y="135" text-anchor="middle">CLOSED</text>' +
      '<path d="M154,130 H282" marker-end="url(#ah)"/><text class="ev" x="218" y="123" text-anchor="middle">approve</text>' +
      '<path d="M102,108 V42 H282" marker-end="url(#ah)"/><text class="ev" x="192" y="35" text-anchor="middle">reject</text>' +
      '<path d="M320,152 V192" marker-end="url(#ah)"/><text class="ev" x="272" y="176" text-anchor="middle">suspend</text>' +
      '<path d="M366,196 V156" marker-end="url(#ah)"/><text class="ev" x="424" y="176" text-anchor="middle">reactivate</text>' +
      '<path d="M396,130 H516" marker-end="url(#ah)"/><text class="ev" x="456" y="123" text-anchor="middle">close</text>' +
      '<path d="M422,218 H576 V156" marker-end="url(#ah)"/><text class="ev" x="500" y="211" text-anchor="middle">close</text>' +
      "</svg></div>"
  };

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
      var t = a[i]; a[i] = a[j]; a[j] = t;
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

  /* ---------- session ---------- */
  var session = null;   // see buildExam / buildRevision for the shape
  var ticker = null;
  var chosenSetId = "m1";

  function poolAll() {
    var out = [];
    SETS.forEach(function (s) {
      s.questions.forEach(function (q, i) { out.push({ s: s.id, i: i, ch: q.ch }); });
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

  function buildRevision(chapter) {
    var refs = shuffled(poolAll().filter(function (r) { return r.ch === Number(chapter); }));
    session = {
      v: 2, mode: "revision", setId: "all", chapter: Number(chapter),
      items: withOrder(refs, true),
      answers: {}, flags: {}, graded: false,
      durationMin: 0, startedAt: Date.now(), endsAt: 0
    };
    saveSession();
  }

  function saveSession() { if (session) writeStore(SESSION_KEY, session); }

  /* resolved view of one item: the question with its options in this attempt's order */
  function view(idx) {
    var it = session.items[idx];
    var q = setById(it.s).questions[it.i];
    var opts = it.order.map(function (o) { return q.opts[o]; });
    var ans = q.ans.map(function (o) { return it.order.indexOf(o); }).sort(function (a, b) { return a - b; });
    return { q: q, opts: opts, ans: ans, multi: !!q.multi };
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
      html += '<div class="q-head"><span class="q-num">Question #' + n + "</span>" +
              '<span class="q-pts">1 point</span>' +
              (session.mode === "exam"
                ? '<button class="q-flag" type="button" data-flag="' + idx + '" aria-pressed="false">Flag</button>'
                : "") +
              "</div>";
      html += '<div class="stem"><p>' + q.stem + "</p>";
      if (q.extra) html += q.extra;
      if (q.fig && FIGURES[q.fig]) html += FIGURES[q.fig];
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
      html += '<div class="instr">Select ' + (v.multi ? "TWO options" : "ONE option") + ".</div>";
      html += '<div class="expl" id="e' + n + '" hidden></div>';
      html += "</article>";
    }
    $("sheet").innerHTML = html;

    var cells = "";
    for (var g = 0; g < session.items.length; g++) {
      cells += '<a class="cell" href="#q' + (g + 1) + '" id="c' + g + '">' + (g + 1) + "</a>";
    }
    $("grid").innerHTML = cells;
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
      if (b) { b.setAttribute("aria-pressed", "true"); b.textContent = "Flagged"; }
    });
  }

  function revealAnswer(idx) {
    var v = view(idx), n = idx + 1, ok = isRight(idx);
    var article = $("q" + n);
    article.classList.add(ok ? "graded-ok" : "graded-no");
    if (!article.querySelector(".verdict")) {
      var badge = document.createElement("span");
      badge.className = "verdict " + (ok ? "ok" : "no");
      badge.textContent = ok ? "Correct" : "Incorrect";
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
    var correctLetters = v.ans.map(function (x) { return LET[x] + ")"; }).join(" and ");
    var yourLetters = (session.answers[idx] || []).map(function (x) { return LET[x] + ")"; }).join(" and ") || "no answer";
    var box = $("e" + n);
    box.innerHTML =
      '<p class="key">Correct answer: ' + correctLetters + " &nbsp;&middot;&nbsp; your answer: " + yourLetters + "</p>" +
      "<p>" + v.q.just + "</p>" +
      '<p class="ref">Syllabus chapter ' + CHAPTERS[v.q.ch] + " &middot; learning objective " + v.q.lo + "</p>";
    box.hidden = false;
    var cell = $("c" + idx);
    if (cell) cell.className = "cell " + (ok ? "ok" : "no");
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

    // Revision mode marks each question the moment it is fully answered.
    if (session.mode === "revision" && isAnswered(idx)) revealAnswer(idx);
  }

  function onSheetClick(e) {
    var btn = e.target.closest ? e.target.closest("[data-flag]") : null;
    if (!btn) return;
    var idx = Number(btn.getAttribute("data-flag"));
    session.flags[idx] = !session.flags[idx];
    btn.setAttribute("aria-pressed", session.flags[idx] ? "true" : "false");
    btn.textContent = session.flags[idx] ? "Flagged" : "Flag";
    saveSession();
    refreshMeter();
  }

  function refreshMeter() {
    var answered = 0, flagged = 0;
    for (var idx = 0; idx < session.items.length; idx++) {
      var done = isAnswered(idx);
      if (done) answered++;
      if (session.flags[idx]) flagged++;
      var cell = $("c" + idx);
      if (cell && !session.graded && !(session.mode === "revision" && done)) {
        cell.className = "cell" + (done ? " done" : "") + (session.flags[idx] ? " flagged" : "");
      }
    }
    $("mAns").textContent = answered;
    $("mFlag").textContent = flagged;
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
    $("home").hidden = false;
    $("paper").hidden = true;
    $("result").hidden = true;
    $("rail").hidden = true;
    $("meterWrap").hidden = true;
    $("clock").hidden = true;
    $("btnSubmit").hidden = true;
    renderHistory();
    renderResumeButton();
    window.scrollTo(0, 0);
  }

  function openPaper() {
    $("home").hidden = true;
    $("paper").hidden = false;
    $("result").hidden = true;
    $("rail").hidden = false;
    $("meterWrap").hidden = false;
    $("btnSubmit").hidden = session.mode !== "exam" || session.graded;
    $("confirm").hidden = true;
    $("revisionDone").hidden = session.mode !== "revision" || session.graded;

    if (session.mode === "exam") {
      var s = session.setId === "mix" ? null : setById(session.setId);
      $("paperEyebrow").textContent = "Mock examination";
      $("paperTitle").textContent = s ? s.name : "Mixed paper";
      $("paperSub").textContent = session.items.length + " questions · 1 point each · pass mark " +
        PASS_MARK + "/" + EXAM_LENGTH;
    } else {
      $("paperEyebrow").textContent = "Revision";
      $("paperTitle").textContent = "Chapter " + CHAPTERS[session.chapter];
      $("paperSub").textContent = session.items.length + " questions · untimed · the answer appears as soon as you choose";
    }

    renderPaper();
    restoreSelections();
    refreshMeter();
    if (session.mode === "exam" && !session.graded) startClock(); else $("clock").hidden = true;
    if (session.mode === "revision") {
      for (var idx = 0; idx < session.items.length; idx++) if (isAnswered(idx)) revealAnswer(idx);
    }
    window.scrollTo(0, 0);
  }

  function askSubmit() {
    var answered = refreshMeter(), remaining = session.items.length - answered;
    $("confirmText").textContent = remaining === 0
      ? "All " + session.items.length + " questions are answered. Submitting ends the exam and marks your paper."
      : remaining + (remaining === 1 ? " question is" : " questions are") + " still unanswered. Unanswered questions score zero.";
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
    stamp.textContent = pass ? "Pass" : "Fail";
    stamp.className = "stamp " + (pass ? "pass" : "fail");
    stamp.hidden = session.mode !== "exam";
    $("rMeta").innerHTML = pct + "%" +
      (session.mode === "exam" ? " &middot; pass mark " + PASS_MARK + "/" + EXAM_LENGTH + " (65%)" : "") +
      " &middot; " + minutes + " min" +
      (auto ? " &middot; submitted automatically at time-up" : "");

    var bars = "";
    for (var c = 1; c <= 6; c++) {
      if (!byChapter[c][1]) continue;
      var pctCh = Math.round((byChapter[c][0] / byChapter[c][1]) * 100);
      bars += '<div class="brow"><div><div class="nm">' + CHAPTERS[c] + "</div>" +
              '<div class="track"><div class="fill' + (pctCh < 65 ? " weak" : "") + '" style="width:' + pctCh + '%"></div></div></div>' +
              '<div class="val">' + byChapter[c][0] + "/" + byChapter[c][1] + "</div></div>";
    }
    $("rBars").innerHTML = bars;
    $("result").hidden = false;

    if (session.mode === "exam") {
      var history = readStore(HISTORY_KEY, []);
      history.unshift({
        ts: Date.now(),
        label: session.setId === "mix" ? "Mixed paper" : setById(session.setId).name,
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

  /* ---------- home screen widgets ---------- */
  function renderSetPicks() {
    var picks = SETS.map(function (s) {
      return { id: s.id, name: s.name, blurb: s.blurb };
    });
    picks.push({ id: "mix", name: "Mixed paper", blurb: "40 drawn at random from all 80, on the official blueprint" });
    $("setPicks").innerHTML = picks.map(function (p) {
      return '<button class="pick" type="button" data-set="' + p.id + '" aria-pressed="' +
        (p.id === chosenSetId) + '"><b>' + p.name + "</b><span>" + p.blurb + "</span></button>";
    }).join("");
  }

  function renderChapters() {
    var counts = {};
    poolAll().forEach(function (r) { counts[r.ch] = (counts[r.ch] || 0) + 1; });
    $("chapterList").innerHTML = Object.keys(CHAPTERS).map(function (ch) {
      return '<button class="chap" type="button" data-chapter="' + ch + '">' +
        '<span class="nm">' + CHAPTERS[ch] + "</span>" +
        '<span class="ct">' + (counts[ch] || 0) + " questions</span>" +
        '<span class="arrow" aria-hidden="true">&rarr;</span></button>';
    }).join("");
  }

  function renderHistory() {
    var history = readStore(HISTORY_KEY, []);
    if (!history.length) {
      $("historyCard").innerHTML = '<p class="empty">No attempts yet. Your scores will be listed here.</p>';
      $("bestHint").textContent = "";
      return;
    }
    var best = history.reduce(function (a, b) { return b.score > a.score ? b : a; });
    $("bestHint").textContent = "Best " + best.score + "/" + best.total;
    var rows = history.slice(0, 12).map(function (h) {
      var d = new Date(h.ts);
      var when = d.toLocaleDateString(undefined, { day: "2-digit", month: "short" }) + " " +
        d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
      return "<tr><td>" + when + "</td><td>" + h.label + "</td><td>" + h.score + "/" + h.total +
        "</td><td>" + h.pct + "%</td><td>" + h.minutes + " min</td><td><span class='tag " +
        (h.pass ? "pass'>Pass" : "fail'>Fail") + "</span></td></tr>";
    }).join("");
    $("historyCard").innerHTML =
      '<table class="hist"><thead><tr><th>When</th><th>Paper</th><th>Score</th><th>%</th><th>Time</th><th>Result</th></tr></thead>' +
      "<tbody>" + rows + "</tbody></table>" +
      '<div class="go"><button class="btn ghost" id="btnClearHistory">Clear history</button></div>';
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
    var reviewable = saved.graded;
    if (!live && !revising && !reviewable) { btn.hidden = true; dropStore(SESSION_KEY); return; }
    btn.hidden = false;
    btn.textContent = live
      ? "Resume exam in progress · " + fmtClock(saved.endsAt - Date.now()) + " left"
      : revising ? "Resume revision" : "Review your last paper";
    btn.onclick = function () {
      session = saved;
      openPaper();
      if (session.graded) grade(false);
    };
  }

  /* ---------- theme ---------- */
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
  });

  /* ---------- wiring ---------- */
  $("sheet").addEventListener("change", onSheetChange);
  $("sheet").addEventListener("click", onSheetClick);

  $("setPicks").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set]");
    if (!btn) return;
    chosenSetId = btn.getAttribute("data-set");
    Array.prototype.forEach.call($("setPicks").children, function (c) {
      c.setAttribute("aria-pressed", c.getAttribute("data-set") === chosenSetId);
    });
  });

  $("chapterList").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-chapter]");
    if (!btn) return;
    buildRevision(btn.getAttribute("data-chapter"));
    openPaper();
  });

  $("btnStart").addEventListener("click", function () {
    buildExam(chosenSetId, $("optShuffle").checked, $("optExtra").checked ? 75 : 60);
    openPaper();
  });

  $("btnHome").addEventListener("click", showHome);
  $("btnSubmit").addEventListener("click", askSubmit);
  $("btnConfirmYes").addEventListener("click", function () { grade(false); });
  $("btnConfirmNo").addEventListener("click", function () { $("confirm").hidden = true; });
  $("btnRevDone").addEventListener("click", function () { grade(false); });
  $("btnReview").addEventListener("click", function () { filterReview(false); });
  $("btnWrong").addEventListener("click", function () { filterReview(true); });
  $("btnRetake").addEventListener("click", function () { dropStore(SESSION_KEY); showHome(); });

  window.addEventListener("beforeunload", function () { saveSession(); });

  renderSetPicks();
  renderChapters();
  showHome();
})();
