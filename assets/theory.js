/* Concept notes, keyed by learning objective code (the `lo` field on every question,
   with the K-level stripped). Original explanatory material — never a quotation from
   the ISTQB syllabus, which is copyrighted. `readNext` points at the syllabus section
   so a candidate can go and read the authoritative text for themselves.

   Shape:
     ch        syllabus chapter, for grouping in Study mode
     title     short name of the concept
     oneLine   the single sentence to remember
     tests     what the exam actually discriminates on, at this objective's K-level
     worked    optional, K3 objectives only: the calculation done step by step
     traps     the distractor patterns really used against this objective
     confuse   [termA, termB, how they differ]
     readNext  syllabus section number — a pointer, never a quote

   A `de` key may sit alongside `en`; anything missing falls back to English. */

window.CTFL_THEORY = {

/* ============================ Chapter 1 ============================ */

"FL-1.1.1": { ch: 1, en: {
  title: "Typical objectives of testing",
  oneLine: "Testing serves several distinct objectives — finding defects, building confidence, preventing defects, and reducing risk — but it never proves a system is defect-free.",
  tests: "<p>Whether you can pick a genuine objective of testing out of a list of tempting overstatements. Recognized objectives include:</p><ul><li>Finding defects and failures</li><li>Building confidence in the level of quality</li><li>Providing information for decision-making</li><li>Preventing defects, largely by evaluating requirements, user stories and designs before any code exists</li><li>Reducing the risk of inadequate software quality</li><li>Verifying compliance with requirements or regulations</li></ul>",
  traps: [
    "An option claiming testing proves the system is free of defects, or that none remain — testing can only reveal problems, never prove their absence.",
    "An option that hands testers responsibility for product quality — quality stays a whole-team responsibility; testing only supplies information about it.",
    "An option where correcting or fixing a defect is presented as a test objective — that is development or debugging work, done after testing reports the problem."
  ],
  confuse: [
    ["Finding defects", "Preventing defects", "Finding happens during test execution. Preventing happens earlier, mainly by evaluating work products like requirements before code is written."]
  ],
  readNext: "1.1.1"
}, de: {
  title: "Typische Testziele",
  oneLine: "Testen verfolgt mehrere unterschiedliche Ziele – Fehlerzustände finden, Vertrauen aufbauen, Fehlerzuständen vorbeugen und Risiken verringern –, beweist aber nie, dass ein System frei von Fehlerzuständen ist.",
  tests: "<p>Ob Sie ein echtes Testziel aus einer Liste verlockender Übertreibungen herausfinden können. Anerkannte Testziele sind:</p><ul><li>Fehlerzustände und Fehlerwirkungen finden</li><li>Vertrauen in das erreichte Qualitätsniveau aufbauen</li><li>Informationen für Entscheidungen liefern</li><li>Fehlerzuständen vorbeugen, vor allem durch die Bewertung von Anforderungen, User Stories und Entwürfen, bevor Code existiert</li><li>Das Risiko unzureichender Softwarequalität verringern</li><li>Die Einhaltung von Anforderungen oder Vorschriften überprüfen</li></ul>",
  traps: [
    "Eine Option, die behauptet, Testen beweise, dass das System frei von Fehlerzuständen ist oder keine mehr vorhanden sind – Testen kann Probleme nur aufdecken, ihre Abwesenheit aber nie beweisen.",
    "Eine Option, die Testern die Verantwortung für die Produktqualität überträgt – Qualität bleibt eine Aufgabe des gesamten Teams; Testen liefert dazu nur Informationen.",
    "Eine Option, in der das Beheben eines Fehlerzustands als Testziel dargestellt wird – das ist Entwicklungs- bzw. Debugging-Arbeit, die erst nach der Meldung durch das Testen erfolgt."
  ],
  confuse: [
    ["Fehlerzustände finden", "Fehlerzuständen vorbeugen", "Das Finden erfolgt während der Testdurchführung. Das Vorbeugen erfolgt früher, vor allem durch die Bewertung von Arbeitsergebnissen wie Anforderungen, bevor Code geschrieben wird."]
  ],
  readNext: "1.1.1"
}},

"FL-1.1.2": { ch: 1, en: {
  title: "Testing versus debugging",
  oneLine: "Testing shows that a failure happens; debugging finds and removes the defect that caused it.",
  tests: "<p>Whether you can place an activity on the correct side of the line. Testing runs the software (or examines a work product) to reveal deviations from expected behaviour, and reports them. Debugging starts from a reported failure, reproduces it, diagnoses the defect in the code, and corrects it. Debugging is development work, not testing work.</p><p>After a fix, testers run the failing test again to confirm the failure is gone. That re-run is <em>confirmation testing</em> and is a testing activity, even though it is triggered by debugging.</p>",
  traps: [
    "Calling debugging a kind of static testing because it involves reading code. Static testing examines a work product without executing it and is done to find defects, not to fix one you already know about.",
    "Swapping the two halves of the definition: an option that says debugging shows failures while testing removes defects is exactly backwards.",
    "Assuming testers never touch debugging. In a whole team approach they may help, but the activity is still debugging."
  ],
  confuse: [
    ["Testing", "Debugging", "Testing reveals failures. Debugging diagnoses and removes the defect behind one."],
    ["Confirmation testing", "Debugging", "Confirmation testing re-runs the failed test after the fix; debugging produced that fix."]
  ],
  readNext: "1.1.2"
}, de: {
  title: "Testen versus Debugging",
  oneLine: "Testen zeigt, dass eine Fehlerwirkung auftritt; Debugging findet und beseitigt den Fehlerzustand, der sie verursacht hat.",
  tests: "<p>Ob Sie eine Tätigkeit der richtigen Seite zuordnen können. Testen führt die Software aus (oder untersucht ein Arbeitsergebnis), um Abweichungen vom erwarteten Verhalten aufzudecken, und meldet sie. Debugging setzt bei einer gemeldeten Fehlerwirkung an, reproduziert sie, diagnostiziert den Fehlerzustand im Code und behebt ihn. Debugging ist Entwicklungsarbeit, keine Testarbeit.</p><p>Nach einer Korrektur führen Tester den fehlgeschlagenen Test erneut aus, um zu bestätigen, dass die Fehlerwirkung beseitigt ist. Dieser erneute Durchlauf ist der <em>Fehlernachtest</em> und eine Testaktivität, auch wenn er durch Debugging ausgelöst wird.</p>",
  traps: [
    "Debugging als eine Art statischen Test zu bezeichnen, weil dabei Code gelesen wird. Statischer Test untersucht ein Arbeitsergebnis, ohne es auszuführen, und dient dem Finden von Fehlerzuständen, nicht dem Beheben eines bereits bekannten.",
    "Die beiden Definitionshälften zu vertauschen: Eine Option, nach der Debugging Fehlerwirkungen zeigt und Testen Fehlerzustände beseitigt, ist genau verkehrt herum.",
    "Anzunehmen, Tester kämen nie mit Debugging in Berührung. Im Whole-Team-Ansatz können sie mithelfen, die Tätigkeit bleibt aber Debugging."
  ],
  confuse: [
    ["Testen", "Debugging", "Testen deckt Fehlerwirkungen auf. Debugging diagnostiziert und beseitigt den dahinterliegenden Fehlerzustand."],
    ["Fehlernachtest", "Debugging", "Der Fehlernachtest führt den fehlgeschlagenen Test nach der Korrektur erneut aus; Debugging hat diese Korrektur hervorgebracht."]
  ],
  readNext: "1.1.2"
}},

"FL-1.2.1": { ch: 1, en: {
  title: "How testing contributes to success",
  oneLine: "Testing contributes to success by catching problems early — especially through reviews — because even skilled, experienced people still make mistakes.",
  tests: "<p>Whether you can tell a real contribution of testing from a tempting overstatement. Testers who join reviews find ambiguities and gaps in requirements before implementation, and defects removed that early are far cheaper to fix. Testing remains necessary on experienced teams because people make mistakes under time pressure, in complex systems, and in unfamiliar domains — testing supplies evidence about what the software actually does, not a productivity score.</p>",
  traps: [
    "Claiming automation or testing guarantees the software will contain no defects.",
    "Claiming that keeping testers out of the project until the end preserves their objectivity and so improves the product — it removes the early feedback that creates the benefit.",
    "Claiming that certifying testers, by itself, raises product quality.",
    "Presenting testing as a way to measure developer productivity, or as something a contract simply requires."
  ],
  confuse: [
    ["Early test involvement", "Late test involvement", "Early involvement, such as reviewing requirements, catches defects while they are cheap to fix. Late involvement only finds them after they are expensive."]
  ],
  readNext: "1.2.1"
}, de: {
  title: "Wie Testen zum Erfolg beiträgt",
  oneLine: "Testen trägt zum Erfolg bei, indem es Probleme früh abfängt – besonders durch Reviews –, denn auch erfahrene, kompetente Menschen machen weiterhin Fehler.",
  tests: "<p>Ob Sie einen echten Beitrag des Testens von einer verlockenden Übertreibung unterscheiden können. Tester, die an Reviews teilnehmen, finden Unklarheiten und Lücken in Anforderungen vor der Umsetzung, und Fehlerzustände, die so früh beseitigt werden, sind wesentlich günstiger zu beheben. Testen bleibt auch in erfahrenen Teams notwendig, weil Menschen unter Zeitdruck, in komplexen Systemen und in unvertrauten Fachgebieten Fehlhandlungen begehen – Testen liefert Belege darüber, was die Software tatsächlich tut, keine Produktivitätskennzahl.</p>",
  traps: [
    "Die Behauptung, Automatisierung oder Testen garantiere, dass die Software keine Fehlerzustände enthält.",
    "Die Behauptung, Tester bis zum Ende aus dem Projekt herauszuhalten, bewahre ihre Objektivität und verbessere so das Produkt – das entzieht dem Projekt genau das frühe Feedback, das den Nutzen erzeugt.",
    "Die Behauptung, die Zertifizierung von Testern steigere allein schon die Produktqualität.",
    "Testen als Mittel zur Messung der Entwicklerproduktivität darzustellen, oder als etwas, das lediglich ein Vertrag verlangt."
  ],
  confuse: [
    ["Frühe Testbeteiligung", "Späte Testbeteiligung", "Frühe Beteiligung, etwa das Review von Anforderungen, findet Fehlerzustände, solange sie günstig zu beheben sind. Späte Beteiligung findet sie erst, wenn das teuer geworden ist."]
  ],
  readNext: "1.2.1"
}},

"FL-1.2.2": { ch: 1, en: {
  title: "Quality assurance versus quality control",
  oneLine: "QA improves the process so defects are not introduced; QC examines the product to find the ones that were.",
  tests: "<p>Whether you can classify an activity. Quality assurance is process-oriented and preventive: it changes how the team works so that fewer defects are created. Quality control is product-oriented and corrective: it examines what has been produced. Testing is a quality control activity.</p><p>The distinction is about what the activity acts on, not who performs it or how formal it is.</p>",
  traps: [
    "Assuming QA means 'the test team' and QC means 'the developers'. Neither is about roles.",
    "Classifying a review as QA because it happens early. A review examines an existing work product, so it is quality control.",
    "Believing QA covers static testing and QC covers dynamic testing. Both kinds of testing are quality control."
  ],
  confuse: [
    ["Quality assurance", "Quality control", "QA improves the process. QC examines the product."],
    ["Improving the definition of done", "Reviewing a document", "The first changes how work is done (QA). The second inspects work already done (QC)."]
  ],
  readNext: "1.2.2"
}, de: {
  title: "Qualitätssicherung versus Qualitätslenkung",
  oneLine: "Qualitätssicherung verbessert den Prozess, damit keine Fehlerzustände entstehen; Qualitätslenkung untersucht das Produkt, um die entstandenen zu finden.",
  tests: "<p>Ob Sie eine Tätigkeit richtig einordnen können. Qualitätssicherung ist prozessorientiert und vorbeugend: Sie ändert die Arbeitsweise des Teams, damit weniger Fehlerzustände entstehen. Qualitätslenkung ist produktorientiert und korrigierend: Sie untersucht, was bereits erstellt wurde. Testen ist eine Qualitätslenkungstätigkeit.</p><p>Die Unterscheidung betrifft, worauf die Tätigkeit wirkt, nicht wer sie ausführt oder wie formal sie abläuft.</p>",
  traps: [
    "Anzunehmen, Qualitätssicherung bedeute 'das Testteam' und Qualitätslenkung 'die Entwickler'. Keines von beiden ist eine Rollenfrage.",
    "Ein Review als Qualitätssicherung einzustufen, weil es früh stattfindet. Ein Review untersucht ein bestehendes Arbeitsergebnis und ist damit Qualitätslenkung.",
    "Die Annahme, Qualitätssicherung decke den statischen Test ab und Qualitätslenkung den dynamischen Test. Beide Testarten sind Qualitätslenkung."
  ],
  confuse: [
    ["Qualitätssicherung", "Qualitätslenkung", "QS verbessert den Prozess. QL untersucht das Produkt."],
    ["Die Definition of Done verbessern", "Ein Dokument reviewen", "Ersteres ändert, wie Arbeit erledigt wird (QS). Zweiteres prüft bereits erledigte Arbeit (QL)."]
  ],
  readNext: "1.2.2"
}},

"FL-1.2.3": { ch: 1, en: {
  title: "Error, defect, failure and root cause",
  oneLine: "A person makes an error, which puts a defect in a work product, which may cause a failure when the software runs.",
  tests: "<p>Whether you can label each item in a scenario correctly. The chain runs in one direction: a human <strong>error</strong> (a mistake) introduces a <strong>defect</strong> (a flaw in code, a requirement, a test — any work product), and executing that defect may produce a <strong>failure</strong> (an observable deviation from the expected result).</p><p>The <strong>root cause</strong> is the earliest reason in that chain that, if removed, would have prevented the defect. It is usually a human or process reason, not a line of code.</p><p>Two things to hold on to: a defect does not always cause a failure, because the code path may never be executed; and a failure can also be caused by environmental conditions rather than a defect.</p>",
  worked: "<p>An analyst misreads a tax rule (<strong>error</strong>) and writes the wrong VAT rate into the requirement (<strong>defect</strong> in the requirement). A developer implements it exactly as written, so the defect is now in the code too. During system testing an invoice shows 19% instead of 7% (<strong>failure</strong>). The <strong>root cause</strong> is the analyst's misreading, and preventing it might mean a second reviewer for tax rules.</p>",
  traps: [
    "Calling the observable wrong output a defect. What you see at run time is the failure; the defect is the flaw in the artefact.",
    "Putting the root cause at the end of the chain. It sits at the beginning.",
    "Assuming defects only live in code. A defect in a requirement, a design or a test case is still a defect."
  ],
  confuse: [
    ["Error", "Defect", "The error is the human action. The defect is what that action left behind in a work product."],
    ["Defect", "Failure", "The defect is static and sits in the artefact. The failure is dynamic and only appears when the defect is executed."],
    ["Root cause", "Defect", "Removing the root cause prevents a whole class of defects; removing the defect fixes one instance."]
  ],
  readNext: "1.2.3"
}, de: {
  title: "Fehlhandlung, Fehlerzustand, Fehlerwirkung und Grundursache",
  oneLine: "Ein Mensch begeht eine Fehlhandlung, die einen Fehlerzustand in ein Arbeitsergebnis einbringt, der bei der Ausführung der Software eine Fehlerwirkung verursachen kann.",
  tests: "<p>Ob Sie jedes Element eines Szenarios korrekt benennen können. Die Kette verläuft in eine Richtung: Eine menschliche <strong>Fehlhandlung</strong> (ein Irrtum) bringt einen <strong>Fehlerzustand</strong> (eine Unzulänglichkeit im Code, in einer Anforderung, in einem Test – jedem Arbeitsergebnis) ein, und die Ausführung dieses Fehlerzustands kann eine <strong>Fehlerwirkung</strong> (eine beobachtbare Abweichung vom erwarteten Ergebnis) erzeugen.</p><p>Die <strong>Grundursache</strong> ist der früheste Grund in dieser Kette, dessen Beseitigung den Fehlerzustand verhindert hätte. Meist ist sie ein menschlicher oder prozessualer Grund, keine Codezeile.</p><p>Zwei Dinge sind festzuhalten: Ein Fehlerzustand führt nicht immer zu einer Fehlerwirkung, da der betroffene Codepfad möglicherweise nie ausgeführt wird; und eine Fehlerwirkung kann auch durch Umgebungsbedingungen statt durch einen Fehlerzustand verursacht werden.</p>",
  worked: "<p>Ein Analyst liest eine Steuerregel falsch (<strong>Fehlhandlung</strong>) und trägt den falschen Mehrwertsteuersatz in die Anforderung ein (<strong>Fehlerzustand</strong> in der Anforderung). Ein Entwickler setzt sie genau wie beschrieben um, sodass der Fehlerzustand nun auch im Code steckt. Beim Systemtest zeigt eine Rechnung 19% statt 7% (<strong>Fehlerwirkung</strong>). Die <strong>Grundursache</strong> ist die Fehllektüre des Analysten, und ihre Vermeidung könnte einen zweiten Prüfer für Steuerregeln bedeuten.</p>",
  traps: [
    "Die beobachtbare falsche Ausgabe als Fehlerzustand zu bezeichnen. Was zur Laufzeit sichtbar wird, ist die Fehlerwirkung; der Fehlerzustand ist die Unzulänglichkeit im Arbeitsergebnis.",
    "Die Grundursache ans Ende der Kette zu setzen. Sie steht am Anfang.",
    "Anzunehmen, Fehlerzustände existierten nur im Code. Ein Fehlerzustand in einer Anforderung, einem Entwurf oder einem Testfall bleibt ein Fehlerzustand."
  ],
  confuse: [
    ["Fehlhandlung", "Fehlerzustand", "Die Fehlhandlung ist die menschliche Handlung. Der Fehlerzustand ist das, was diese Handlung in einem Arbeitsergebnis hinterlässt."],
    ["Fehlerzustand", "Fehlerwirkung", "Der Fehlerzustand ist statisch und liegt im Arbeitsergebnis. Die Fehlerwirkung ist dynamisch und zeigt sich erst, wenn der Fehlerzustand ausgeführt wird."],
    ["Grundursache", "Fehlerzustand", "Die Beseitigung der Grundursache verhindert eine ganze Klasse von Fehlerzuständen; die Beseitigung des Fehlerzustands behebt einen einzelnen Fall."]
  ],
  readNext: "1.2.3"
}},

"FL-1.2.4": { ch: 1, en: {
  title: "Root cause analysis of defects",
  oneLine: "Root cause analysis looks past one defect to the process weakness that let it happen, so whole classes of similar defect can be prevented.",
  tests: "<p>Whether you can identify root cause analysis as a process-improvement activity rather than something else that also happens after a defect is found. It asks why the defect was able to occur — a missing review, an unclear requirement, a gap in a checklist — and feeds that answer into improving the process, not into blaming an individual.</p>",
  traps: [
    "Framing it as identifying which tester should have caught the defect sooner — that is blame, not root cause analysis.",
    "Confusing it with prioritizing which open defects get fixed first.",
    "Confusing it with calculating the residual risk left after a fix."
  ],
  confuse: [
    ["Root cause analysis", "Fixing a defect", "Fixing removes one defect from the code. Root cause analysis addresses the underlying process weakness that produced it, to prevent similar defects in future."]
  ],
  readNext: "1.2.4"
}, de: {
  title: "Ursachenanalyse von Fehlerzuständen",
  oneLine: "Die Ursachenanalyse blickt über einen einzelnen Fehlerzustand hinaus auf die Prozessschwäche, die ihn ermöglicht hat, damit ganze Klassen ähnlicher Fehlerzustände vermieden werden können.",
  tests: "<p>Ob Sie die Ursachenanalyse als Tätigkeit zur Prozessverbesserung erkennen und nicht mit etwas anderem verwechseln, das ebenfalls nach dem Fund eines Fehlerzustands stattfindet. Sie fragt, warum der Fehlerzustand überhaupt entstehen konnte – ein fehlendes Review, eine unklare Anforderung, eine Lücke in einer Checkliste – und speist diese Antwort in die Prozessverbesserung ein, nicht in die Schuldzuweisung an eine Einzelperson.</p>",
  traps: [
    "Sie als Suche danach darzustellen, welcher Tester den Fehlerzustand früher hätte finden müssen – das ist Schuldzuweisung, keine Ursachenanalyse.",
    "Sie mit der Priorisierung zu verwechseln, welche offenen Fehlerzustände zuerst behoben werden.",
    "Sie mit der Berechnung des nach einer Korrektur verbleibenden Restrisikos zu verwechseln."
  ],
  confuse: [
    ["Ursachenanalyse", "Fehlerzustand beheben", "Das Beheben entfernt einen Fehlerzustand aus dem Code. Die Ursachenanalyse geht der zugrunde liegenden Prozessschwäche nach, die ihn verursacht hat, um künftig ähnliche Fehlerzustände zu vermeiden."]
  ],
  readNext: "1.2.4"
}},

"FL-1.3.1": { ch: 1, en: {
  title: "The seven testing principles",
  oneLine: "Each principle has its own scenario signature — the exam tests whether you can match a described situation to the one principle it actually demonstrates.",
  tests: "<p>The seven principles:</p><ul><li>Testing shows the presence of defects, not their absence</li><li>Exhaustive testing is impossible</li><li>Early testing saves time and money</li><li>Defects cluster together</li><li>Tests wear out (the pesticide paradox)</li><li>Testing is context dependent</li><li>Absence-of-defects is a fallacy</li></ul><p>Scenarios almost always fit exactly one principle, even when several are true statements in general.</p>",
  traps: [
    "A regression suite that keeps passing while production defects appear in the same area — that is tests wearing out (pesticide paradox), not \"presence not absence of defects\".",
    "Most defects found in a couple of modules out of many — that is defect clustering, not context dependence.",
    "Wanting to test every combination of many input fields to guarantee no defects — that is exhaustive testing being impossible, not context dependence or clustering."
  ],
  confuse: [
    ["Pesticide paradox", "Presence, not absence, of defects", "The paradox explains why an unchanged test set stops finding new bugs. Presence-not-absence is about what passing tests can and cannot prove."],
    ["Defect clustering", "Context dependent", "Clustering says defects concentrate in a few modules. Context dependent says the right testing approach depends on the kind of system and its risks."]
  ],
  readNext: "1.3.1"
}, de: {
  title: "Die sieben Testprinzipien",
  oneLine: "Jedes Prinzip hat seine eigene Szenario-Signatur – die Prüfung testet, ob Sie eine beschriebene Situation dem einen Prinzip zuordnen können, das sie tatsächlich zeigt.",
  tests: "<p>Die sieben Prinzipien:</p><ul><li>Testen zeigt das Vorhandensein von Fehlerzuständen, nicht deren Abwesenheit</li><li>Vollständiges Testen ist unmöglich</li><li>Frühzeitiges Testen spart Zeit und Geld</li><li>Fehlerzustände treten gehäuft auf</li><li>Tests nutzen sich ab (Pestizid-Paradoxon)</li><li>Testen ist kontextabhängig</li><li>Trugschluss der Fehlerfreiheit</li></ul><p>Szenarien passen fast immer genau zu einem Prinzip, selbst wenn mehrere davon allgemein zutreffende Aussagen sind.</p>",
  traps: [
    "Eine Regressionssuite, die weiter besteht, während im selben Bereich Fehlerzustände im Produktivbetrieb auftauchen – das ist die Abnutzung von Tests (Pestizid-Paradoxon), nicht \"Vorhandensein statt Abwesenheit von Fehlerzuständen\".",
    "Die meisten Fehlerzustände treten in wenigen von vielen Modulen auf – das ist gehäuftes Auftreten von Fehlerzuständen, nicht Kontextabhängigkeit.",
    "Der Wunsch, jede Kombination vieler Eingabefelder zu testen, um Fehlerfreiheit zu garantieren – das zeigt die Unmöglichkeit vollständigen Testens, nicht Kontextabhängigkeit oder gehäuftes Auftreten."
  ],
  confuse: [
    ["Pestizid-Paradoxon", "Vorhandensein, nicht Abwesenheit, von Fehlerzuständen", "Das Paradoxon erklärt, warum eine unveränderte Testmenge aufhört, neue Fehlerzustände zu finden. Vorhandensein statt Abwesenheit betrifft, was bestandene Tests beweisen können und was nicht."],
    ["Gehäuftes Auftreten von Fehlerzuständen", "Kontextabhängigkeit", "Gehäuftes Auftreten besagt, dass sich Fehlerzustände in wenigen Modulen konzentrieren. Kontextabhängigkeit besagt, dass der richtige Testansatz von der Art des Systems und seinen Risiken abhängt."]
  ],
  readNext: "1.3.1"
}},

"FL-1.4.1": { ch: 1, en: {
  title: "The test activities and what each produces",
  oneLine: "Analysis decides what to test, design decides how, implementation gets everything ready, execution runs it.",
  tests: "<p>Whether you can assign a task or a work product to the right activity. The sequence, though activities overlap and iterate:</p><ul><li><strong>Test planning</strong> — objectives, approach, resources, entry and exit criteria.</li><li><strong>Test monitoring and control</strong> — runs throughout, comparing progress against plan.</li><li><strong>Test analysis</strong> — evaluate the test basis and derive <em>test conditions</em>. This is <em>what</em> to test.</li><li><strong>Test design</strong> — turn conditions into <em>test cases</em>, identify coverage items and test data needs. This is <em>how</em>.</li><li><strong>Test implementation</strong> — build test procedures and suites, arrange testware, build and verify the test environment.</li><li><strong>Test execution</strong> — run the tests, compare actual with expected results, report anomalies.</li><li><strong>Test completion</strong> — the completion report and the lessons learned.</li></ul>",
  traps: [
    "Placing 'build the test environment' in planning. Planning decides it is needed; implementation actually builds and verifies it.",
    "Confusing test conditions (analysis) with test cases (design). The condition is the thing worth testing; the case is a concrete way of testing it.",
    "Putting the test execution schedule in design. Scheduling and assembling suites is implementation."
  ],
  confuse: [
    ["Test condition", "Test case", "A condition is an aspect worth testing. A case has inputs, preconditions and an expected result."],
    ["Test analysis", "Test design", "Analysis produces conditions from the test basis. Design produces cases from conditions."],
    ["Test implementation", "Test execution", "Implementation prepares everything. Execution runs it."]
  ],
  readNext: "1.4.1"
}, de: {
  title: "Die Testaktivitäten und ihre Ergebnisse",
  oneLine: "Die Analyse entscheidet, was getestet wird, der Entwurf entscheidet wie, die Realisierung bereitet alles vor, die Durchführung führt es aus.",
  tests: "<p>Ob Sie eine Aufgabe oder ein Arbeitsergebnis der richtigen Aktivität zuordnen können. Die Abfolge, obwohl sich die Aktivitäten überlappen und iterieren:</p><ul><li><strong>Testplanung</strong> – Ziele, Vorgehen, Ressourcen, Eingangs- und Endekriterien.</li><li><strong>Testüberwachung und Teststeuerung</strong> – läuft durchgehend und vergleicht den Fortschritt mit der Planung.</li><li><strong>Testanalyse</strong> – die Testbasis auswerten und <em>Testbedingungen</em> ableiten. Das ist das <em>Was</em>.</li><li><strong>Testentwurf</strong> – Bedingungen in <em>Testfälle</em> überführen, Überdeckungselemente und Testdatenbedarf ermitteln. Das ist das <em>Wie</em>.</li><li><strong>Testrealisierung</strong> – Testabläufe und Testsuiten erstellen, Testmittel zusammenstellen, die Testumgebung aufbauen und verifizieren.</li><li><strong>Testdurchführung</strong> – die Tests ausführen, Ist- mit Sollergebnissen vergleichen, Anomalien melden.</li><li><strong>Testabschluss</strong> – der Testabschlussbericht und die gewonnenen Erkenntnisse.</li></ul>",
  traps: [
    "Den Aufbau der Testumgebung in die Planung zu legen. Die Planung entscheidet, dass sie gebraucht wird; die Realisierung baut und verifiziert sie tatsächlich.",
    "Testbedingungen (Analyse) mit Testfällen (Entwurf) zu verwechseln. Die Bedingung ist das, was zu testen sich lohnt; der Testfall ist eine konkrete Art, es zu testen.",
    "Den Testdurchführungsplan in den Entwurf zu legen. Terminierung und Zusammenstellung von Suiten gehören zur Realisierung."
  ],
  confuse: [
    ["Testbedingung", "Testfall", "Eine Bedingung ist ein Aspekt, der zu testen sich lohnt. Ein Testfall hat Eingaben, Vorbedingungen und ein erwartetes Ergebnis."],
    ["Testanalyse", "Testentwurf", "Die Analyse erzeugt Bedingungen aus der Testbasis. Der Entwurf erzeugt Testfälle aus Bedingungen."],
    ["Testrealisierung", "Testdurchführung", "Die Realisierung bereitet alles vor. Die Durchführung führt es aus."]
  ],
  readNext: "1.4.1"
}},

"FL-1.4.2": { ch: 1, en: {
  title: "Context factors that shape the test process",
  oneLine: "The test process is shaped by its context — the lifecycle model, the risks identified, and any contractual, legal or regulatory requirements — not by team size or interface style.",
  tests: "<p>Whether you can separate factors that genuinely shape how testing is carried out from plausible-sounding distractors. Real influences: the software development lifecycle in use (it decides when and how testing happens), the risks identified for the product (they decide depth and focus), and contractual, legal or regulatory requirements (they can mandate specific techniques or documentation). The number of certified testers on the team and the look of the user interface do not shape the process itself.</p>",
  traps: [
    "Including the number of certified testers as something that influences the test process.",
    "Including cosmetic details, like how the UI looks, as a process influence.",
    "Leaving risk or lifecycle out of the correct set while keeping a plausible-sounding but irrelevant factor in."
  ],
  readNext: "1.4.2"
}, de: {
  title: "Kontextfaktoren, die den Testprozess prägen",
  oneLine: "Der Testprozess wird von seinem Kontext geprägt – dem Lebenszyklusmodell, den identifizierten Risiken und vertraglichen, rechtlichen oder regulatorischen Vorgaben – nicht von der Teamgröße oder dem Stil der Oberfläche.",
  tests: "<p>Ob Sie Faktoren, die tatsächlich prägen, wie getestet wird, von plausibel klingenden Ablenkern trennen können. Echte Einflüsse: der verwendete Softwareentwicklungslebenszyklus (er bestimmt, wann und wie getestet wird), die für das Produkt identifizierten Risiken (sie bestimmen Tiefe und Schwerpunkt) sowie vertragliche, rechtliche oder regulatorische Vorgaben (sie können bestimmte Testverfahren oder Dokumentation vorschreiben). Die Anzahl zertifizierter Tester im Team und das Aussehen der Benutzeroberfläche prägen den Prozess selbst nicht.</p>",
  traps: [
    "Die Anzahl zertifizierter Tester im Team als Einflussfaktor auf den Testprozess einzubeziehen.",
    "Kosmetische Details, etwa das Aussehen der Oberfläche, als Prozesseinfluss einzubeziehen.",
    "Risiko oder Lebenszyklus aus der richtigen Menge herauszulassen, während ein plausibel klingender, aber irrelevanter Faktor bleibt."
  ],
  readNext: "1.4.2"
}},

"FL-1.4.3": { ch: 1, en: {
  title: "Work products of each test activity",
  oneLine: "Each test activity produces its own work products, in sequence: conditions, then cases, then suites and a schedule, then a completion report.",
  tests: "<p>Whether you can attach a work product to the activity that actually produces it.</p><ul><li><strong>Test analysis</strong> produces test conditions and the features to be tested.</li><li><strong>Test design</strong> turns those conditions into test cases, test data requirements, and the coverage items to be exercised.</li><li><strong>Test implementation</strong> organizes cases into test suites and builds the execution schedule.</li><li><strong>Test completion</strong> produces the completion report and lessons learned.</li></ul>",
  traps: [
    "Attributing test conditions to test design instead of test analysis.",
    "Attributing test suites or the execution schedule to test design instead of test implementation.",
    "Attributing the completion report or lessons learned to test design instead of test completion."
  ],
  confuse: [
    ["Test analysis", "Test design", "Analysis turns the test basis into test conditions — what to test. Design turns conditions into test cases and data — how to test it."],
    ["Test design", "Test implementation", "Design produces test cases and coverage items. Implementation organizes them into runnable test suites and a schedule."]
  ],
  readNext: "1.4.3"
}, de: {
  title: "Arbeitsergebnisse jeder Testaktivität",
  oneLine: "Jede Testaktivität erzeugt eigene Arbeitsergebnisse, der Reihe nach: Bedingungen, dann Testfälle, dann Suiten und ein Zeitplan, dann ein Abschlussbericht.",
  tests: "<p>Ob Sie ein Arbeitsergebnis der Aktivität zuordnen können, die es tatsächlich erzeugt.</p><ul><li><strong>Testanalyse</strong> erzeugt Testbedingungen und die zu testenden Merkmale.</li><li><strong>Testentwurf</strong> überführt diese Bedingungen in Testfälle, Testdatenanforderungen und die auszuführenden Überdeckungselemente.</li><li><strong>Testrealisierung</strong> ordnet Testfälle zu Testsuiten und erstellt den Durchführungsplan.</li><li><strong>Testabschluss</strong> erzeugt den Abschlussbericht und die gewonnenen Erkenntnisse.</li></ul>",
  traps: [
    "Testbedingungen dem Testentwurf statt der Testanalyse zuzuschreiben.",
    "Testsuiten oder den Durchführungsplan dem Testentwurf statt der Testrealisierung zuzuschreiben.",
    "Den Abschlussbericht oder die gewonnenen Erkenntnisse dem Testentwurf statt dem Testabschluss zuzuschreiben."
  ],
  confuse: [
    ["Testanalyse", "Testentwurf", "Die Analyse überführt die Testbasis in Testbedingungen – was zu testen ist. Der Entwurf überführt Bedingungen in Testfälle und Testdaten – wie es zu testen ist."],
    ["Testentwurf", "Testrealisierung", "Der Entwurf erzeugt Testfälle und Überdeckungselemente. Die Realisierung ordnet sie zu ausführbaren Testsuiten mit Zeitplan."]
  ],
  readNext: "1.4.3"
}},

"FL-1.4.4": { ch: 1, en: {
  title: "Traceability between the test basis and test work products",
  oneLine: "Traceability links test work products back to the test basis, so impact analysis and progress reporting can be done in terms stakeholders understand.",
  tests: "<p>Whether you can identify the real payoff of traceability. Good traceability makes it possible to see which requirements are affected when a test case fails (impact analysis), to assess coverage of the test basis, and to report test status and progress in business terms rather than raw test-case counts. It does not track who authored which test case, does not guarantee any particular level of code coverage, and does not reduce the number of test cases needed to reach agreed coverage.</p>",
  traps: [
    "Claiming traceability guarantees 100% code coverage.",
    "Claiming traceability reduces the number of test cases needed to reach a coverage criterion.",
    "Framing traceability as a way to track tester authorship or output."
  ],
  confuse: [
    ["Traceability", "Code coverage", "Traceability connects tests to the requirements or test basis behind them. Code coverage measures how much of the code's structure was exercised — a different, structural measure."]
  ],
  readNext: "1.4.4"
}, de: {
  title: "Nachverfolgbarkeit zwischen Testbasis und Testarbeitsergebnissen",
  oneLine: "Nachverfolgbarkeit verknüpft Testarbeitsergebnisse mit der Testbasis, sodass Auswirkungsanalyse und Fortschrittsberichte in für Stakeholder verständlichen Begriffen erfolgen können.",
  tests: "<p>Ob Sie den eigentlichen Nutzen der Nachverfolgbarkeit erkennen können. Gute Nachverfolgbarkeit macht sichtbar, welche Anforderungen betroffen sind, wenn ein Testfall fehlschlägt (Auswirkungsanalyse), erlaubt die Bewertung der Überdeckung der Testbasis und ermöglicht es, Teststatus und -fortschritt in geschäftlichen Begriffen statt in reinen Testfallzahlen zu berichten. Sie verfolgt nicht, wer welchen Testfall verfasst hat, garantiert kein bestimmtes Maß an Codeüberdeckung und verringert nicht die Anzahl der Testfälle, die für eine vereinbarte Überdeckung nötig sind.</p>",
  traps: [
    "Die Behauptung, Nachverfolgbarkeit garantiere 100 % Codeüberdeckung.",
    "Die Behauptung, Nachverfolgbarkeit verringere die Anzahl der Testfälle, die für ein Überdeckungskriterium nötig sind.",
    "Nachverfolgbarkeit als Mittel darzustellen, um die Autorenschaft oder den Output von Testern zu verfolgen."
  ],
  confuse: [
    ["Nachverfolgbarkeit", "Codeüberdeckung", "Nachverfolgbarkeit verbindet Tests mit den dahinterstehenden Anforderungen oder der Testbasis. Codeüberdeckung misst, wie viel von der Codestruktur ausgeführt wurde – ein anderes, strukturelles Maß."]
  ],
  readNext: "1.4.4"
}},

"FL-1.5.1": { ch: 1, en: {
  title: "Generic skills versus domain knowledge",
  oneLine: "Generic testing skills, like communicating findings clearly and constructively, transfer across any project; domain knowledge is specific to the business area under test.",
  tests: "<p>Whether you can tell a skill every tester needs regardless of project from knowledge that only applies in one business domain. Explaining a defect report clearly and diplomatically, so it is understood without provoking a defensive reaction, is a generic skill. Knowing insurance rules, tax rules for a country, or which regulation applies to medical devices is domain knowledge — valuable, but specific to that application area.</p>",
  traps: [
    "Presenting a piece of business-specific knowledge (insurance premium rules, tax rules, medical device regulation) as if it were a generic skill.",
    "Missing that communication, framed as a soft or non-technical skill, is exactly the kind of skill the exam is asking about here."
  ],
  confuse: [
    ["Generic skill", "Domain knowledge", "A generic skill, such as clear communication, transfers across any application area. Domain knowledge is specific to the business or regulatory context being tested."]
  ],
  readNext: "1.5.1"
}, de: {
  title: "Allgemeine Fähigkeiten versus Fachwissen",
  oneLine: "Allgemeine Testfähigkeiten, etwa Befunde klar und konstruktiv zu kommunizieren, sind projektübergreifend übertragbar; Fachwissen ist spezifisch für das getestete Geschäftsfeld.",
  tests: "<p>Ob Sie eine Fähigkeit, die jeder Tester unabhängig vom Projekt braucht, von Wissen unterscheiden können, das nur in einem Geschäftsfeld gilt. Einen Fehlerbericht klar und diplomatisch zu erläutern, sodass er verstanden wird, ohne eine Abwehrreaktion hervorzurufen, ist eine allgemeine Fähigkeit. Versicherungsregeln, Steuerregeln eines Landes oder die für Medizinprodukte geltenden Vorschriften zu kennen, ist Fachwissen – wertvoll, aber spezifisch für dieses Anwendungsgebiet.</p>",
  traps: [
    "Ein Stück fachspezifisches Wissen (Versicherungsprämienregeln, Steuerregeln, Medizinprodukterecht) so darzustellen, als wäre es eine allgemeine Fähigkeit.",
    "Zu übersehen, dass Kommunikation, als weiche bzw. nichttechnische Fähigkeit dargestellt, genau die Art von Fähigkeit ist, nach der hier gefragt wird."
  ],
  confuse: [
    ["Allgemeine Fähigkeit", "Fachwissen", "Eine allgemeine Fähigkeit, wie klare Kommunikation, ist über jedes Anwendungsgebiet hinweg übertragbar. Fachwissen ist spezifisch für den getesteten Geschäfts- oder Regulierungskontext."]
  ],
  readNext: "1.5.1"
}},

"FL-1.5.2": { ch: 1, en: {
  title: "The whole-team approach",
  oneLine: "In the whole-team approach, anyone with the right skills can take on any task, and quality is a responsibility the whole team shares.",
  tests: "<p>Whether you can pick out shared responsibility and flexible task allocation as the defining trait, rather than surface behaviors that sound like teamwork. Under the whole-team approach, testers, developers and business representatives work together, any suitably skilled person can pick up any task, and quality is not the property of a single role.</p>",
  traps: [
    "Describing it as everyone attending every test execution session — attendance is not the point.",
    "Describing it as a test manager distributing tasks top-down — that keeps testing as a separate, centrally managed function.",
    "Describing it as one tester embedded per team but still reporting to a central test manager — that preserves a separate testing chain of command rather than shared ownership."
  ],
  confuse: [
    ["Whole-team approach", "Independent test team", "The whole team shares responsibility for quality across roles. An independent test team is a separate group whose defining value is objectivity, not shared ownership."]
  ],
  readNext: "1.5.2"
}, de: {
  title: "Der Whole-Team-Ansatz",
  oneLine: "Im Whole-Team-Ansatz kann jede Person mit den passenden Fähigkeiten jede Aufgabe übernehmen, und Qualität ist eine Verantwortung, die das ganze Team teilt.",
  tests: "<p>Ob Sie geteilte Verantwortung und flexible Aufgabenverteilung als das entscheidende Merkmal erkennen, statt oberflächliches Verhalten, das nach Teamarbeit klingt. Im Whole-Team-Ansatz arbeiten Tester, Entwickler und Fachvertreter zusammen, jede ausreichend qualifizierte Person kann jede Aufgabe übernehmen, und Qualität ist nicht das Merkmal einer einzelnen Rolle.</p>",
  traps: [
    "Ihn so zu beschreiben, dass alle an jeder Testdurchführungssitzung teilnehmen – Anwesenheit ist nicht der Punkt.",
    "Ihn als Testmanager zu beschreiben, der Aufgaben top-down verteilt – das erhält das Testen als separate, zentral gesteuerte Funktion.",
    "Ihn als einen pro Team eingebetteten Tester zu beschreiben, der aber weiterhin an einen zentralen Testmanager berichtet – das erhält eine separate Test-Befehlskette statt geteilter Verantwortung."
  ],
  confuse: [
    ["Whole-Team-Ansatz", "Unabhängiges Testteam", "Das ganze Team teilt sich die Verantwortung für Qualität über alle Rollen hinweg. Ein unabhängiges Testteam ist eine separate Gruppe, deren entscheidender Wert Objektivität ist, nicht geteilte Verantwortung."]
  ],
  readNext: "1.5.2"
}},

"FL-1.5.3": { ch: 1, en: {
  title: "Advantages and disadvantages of test independence",
  oneLine: "Independence gives testers objectivity and lets them spot blind spots the authors cannot see, but pushed too far it isolates them and slows feedback.",
  tests: "<p>Whether you can separate an advantage of independence from its one real disadvantage. Advantages: testers are less swayed by the assumptions the authors made, they can verify those assumptions, and they often find defects developers are blind to through familiarity with their own code. The disadvantage: taken too far, independence isolates testers from the development team, delaying feedback and causing communication problems.</p>",
  traps: [
    "Presenting one of the advantages (objectivity, spotting blind spots, verifying assumptions) as if it were the disadvantage being asked for.",
    "Claiming independence reduces the domain knowledge testers need.",
    "Claiming independence removes the development team's responsibility for the component's quality.",
    "Claiming independent testers get defects fixed faster because they report directly to developers."
  ],
  confuse: [
    ["Advantage of independence", "Disadvantage of independence", "Objectivity and spotting blind spots are advantages. Isolation, delayed feedback, and becoming a bottleneck are the disadvantages of taking independence too far."]
  ],
  readNext: "1.5.3"
}, de: {
  title: "Vor- und Nachteile der Unabhängigkeit des Testens",
  oneLine: "Unabhängigkeit verschafft Testern Objektivität und lässt sie blinde Flecken erkennen, die den Autoren selbst entgehen, isoliert sie aber bei Übertreibung und verlangsamt das Feedback.",
  tests: "<p>Ob Sie einen Vorteil der Unabhängigkeit von ihrem einen echten Nachteil unterscheiden können. Vorteile: Tester lassen sich weniger von den Annahmen der Autoren beeinflussen, können diese Annahmen überprüfen und finden durch die Betriebsblindheit der Entwickler gegenüber ihrem eigenen Code oft Fehlerzustände, die diesen entgehen. Der Nachteil: Zu weit getrieben, isoliert Unabhängigkeit die Tester vom Entwicklungsteam, verzögert Feedback und verursacht Kommunikationsprobleme.</p>",
  traps: [
    "Einen der Vorteile (Objektivität, das Erkennen blinder Flecken, das Prüfen von Annahmen) als den gefragten Nachteil darzustellen.",
    "Die Behauptung, Unabhängigkeit verringere das von Testern benötigte Fachwissen.",
    "Die Behauptung, Unabhängigkeit befreie das Entwicklungsteam von der Verantwortung für die Qualität der Komponente.",
    "Die Behauptung, unabhängige Tester bekämen Fehlerzustände schneller behoben, weil sie direkt an Entwickler berichten."
  ],
  confuse: [
    ["Vorteil der Unabhängigkeit", "Nachteil der Unabhängigkeit", "Objektivität und das Erkennen blinder Flecken sind Vorteile. Isolation, verzögertes Feedback und das Entstehen eines Engpasses sind die Nachteile übertriebener Unabhängigkeit."]
  ],
  readNext: "1.5.3"
}},

/* ============================ Chapter 2 ============================ */

"FL-2.1.1": { ch: 2, en: {
  title: "How the SDLC model shapes testing",
  oneLine: "Every lifecycle model needs the same test levels and types; the model changes their timing and how much regression testing you need, not whether they happen.",
  tests: "<p>Whether you can predict how testing behaves under different lifecycle models rather than just recite model names.</p><ul><li>Test design can start as soon as the relevant test basis exists — it does not have to wait for code, even in a sequential model.</li><li>In <strong>iterative</strong> or <strong>incremental</strong> models, each iteration builds on the previous one, so the risk of breaking existing functionality grows and <em>regression testing</em> matters more with every iteration.</li><li>Static testing complements dynamic testing; it never replaces it.</li><li>Agile lifecycles still use the standard test levels — they are just organized differently, often compressed within short iterations.</li></ul>",
  traps: [
    "Claiming test design can only start once code is written — it can start as soon as a test basis (requirements, user stories) is available.",
    "Assuming heavy static testing in early increments removes the need for dynamic testing later.",
    "Assuming agile drops the classic test levels entirely rather than reorganizing them."
  ],
  confuse: [
    ["Iterative/incremental lifecycle", "Sequential lifecycle", "Iterative models run testing inside every iteration and regression testing grows with each one; sequential models run test levels roughly once, in phase order."]
  ],
  readNext: "2.1.1"
}, de: {
  title: "Wie das Lebenszyklusmodell das Testen prägt",
  oneLine: "Jedes Lebenszyklusmodell benötigt dieselben Teststufen und Testarten; das Modell verändert nur deren zeitlichen Ablauf und den Umfang des nötigen Regressionstests, nicht ob sie stattfinden.",
  tests: "<p>Ob Sie vorhersagen können, wie sich das Testen in verschiedenen Lebenszyklusmodellen verhält, statt nur Modellnamen aufzuzählen.</p><ul><li>Der Testentwurf kann beginnen, sobald die passende Testbasis vorliegt — er muss nicht auf Code warten, auch nicht in einem sequenziellen Modell.</li><li>In <strong>iterativen</strong> oder <strong>inkrementellen</strong> Modellen baut jede Iteration auf der vorigen auf, sodass das Risiko wächst, bestehende Funktionalität zu beschädigen, und <em>Regressionstests</em> mit jeder Iteration wichtiger werden.</li><li>Der statische Test ergänzt den dynamischen Test; er ersetzt ihn nie.</li><li>Agile Lebenszyklen verwenden weiterhin die üblichen Teststufen — sie sind nur anders organisiert, oft komprimiert innerhalb kurzer Iterationen.</li></ul>",
  traps: [
    "Zu behaupten, der Testentwurf könne erst beginnen, wenn Code geschrieben ist — er kann beginnen, sobald eine Testbasis (Anforderungen, User Storys) vorliegt.",
    "Anzunehmen, umfangreicher statischer Test in frühen Inkrementen mache späteren dynamischen Test überflüssig.",
    "Anzunehmen, agiles Vorgehen schaffe die klassischen Teststufen komplett ab, statt sie nur neu zu organisieren."
  ],
  confuse: [
    ["Iterativer/inkrementeller Lebenszyklus", "Sequenzieller Lebenszyklus", "Iterative Modelle testen innerhalb jeder Iteration, und der Regressionstest wächst mit jeder weiteren; sequenzielle Modelle durchlaufen die Teststufen etwa einmal, in Phasenreihenfolge."]
  ],
  readNext: "2.1.1"
}},

"FL-2.1.2": { ch: 2, en: {
  title: "Good testing practices across every lifecycle",
  oneLine: "Whatever the lifecycle model, testing works best when every test level has clear objectives and testers review drafts as soon as they exist.",
  tests: "<p>Whether you can pick out practices that are genuinely universal versus ones that are unrealistic or lifecycle-specific.</p><ul><li>Each <strong>test level</strong> should have its own specific objectives, so levels don't overlap uselessly or leave gaps.</li><li>Testers reviewing drafts of requirements, user stories or designs as soon as they exist gives the fastest feedback — a form of shifting left.</li><li>The right degree of tester <strong>independence</strong> depends on context; it is not a fixed universal rule.</li></ul>",
  traps: [
    "Treating 'fully automate everything before the first release' as a realistic universal practice.",
    "Insisting every test level must be run by a fully independent team, when the right independence varies by context.",
    "Pushing test design to only start once code is complete."
  ],
  readNext: "2.1.2"
}, de: {
  title: "Bewährte Testpraktiken in jedem Lebenszyklus",
  oneLine: "Unabhängig vom Lebenszyklusmodell funktioniert Testen am besten, wenn jede Teststufe klare Ziele hat und Testende Entwürfe reviewen, sobald sie vorliegen.",
  tests: "<p>Ob Sie wirklich allgemeingültige Praktiken von unrealistischen oder lebenszyklusspezifischen unterscheiden können.</p><ul><li>Jede <strong>Teststufe</strong> sollte eigene, spezifische Ziele haben, damit sich Stufen nicht nutzlos überschneiden oder Lücken entstehen.</li><li>Wenn Testende Entwürfe von Anforderungen, User Storys oder Designs reviewen, sobald diese vorliegen, entsteht das schnellste Feedback — eine Form des Shift-Left-Ansatzes.</li><li>Der richtige Grad an <strong>Unabhängigkeit des Testens</strong> hängt vom Kontext ab; er ist keine feste, universelle Regel.</li></ul>",
  traps: [
    "‚Vor dem ersten Release alles vollständig automatisieren' als realistische, universelle Praxis zu behandeln.",
    "Darauf zu bestehen, jede Teststufe müsse von einem vollständig unabhängigen Team durchgeführt werden, obwohl die richtige Unabhängigkeit vom Kontext abhängt.",
    "Den Testentwurf erst beginnen zu lassen, wenn der Code fertig ist."
  ],
  readNext: "2.1.2"
}},

"FL-2.1.3": { ch: 2, en: {
  title: "Test-first: TDD, BDD, ATDD",
  oneLine: "TDD writes a failing test then just enough code to pass it and refactors; BDD expresses that behavior first in business-readable given/when/then language.",
  tests: "<p>Whether you can tell TDD, BDD and ATDD apart by who writes what, when, and in what form.</p><ul><li><strong>TDD</strong> — a short red/green/refactor cycle: write a failing test, write minimal code to pass it, then refactor while tests stay green. Tests are written by developers, before the code, and drive its design.</li><li><strong>BDD</strong> — behavior is expressed in natural, business-readable language (typically given/when/then) that the whole team, including non-technical stakeholders, can read; these examples then guide development.</li><li><strong>ATDD</strong> — acceptance criteria, often written with the customer, are turned into tests before development starts.</li></ul><p>All three push test creation <em>before</em> coding, not after.</p>",
  traps: [
    "Describing TDD or BDD as writing tests after the code is finished and automating them afterward — that's the reverse of the real order.",
    "Describing BDD as something only testers do late, rather than a shared natural-language format that drives development.",
    "Confusing 'deriving tests from finished code' (structural, white-box) with these test-first approaches."
  ],
  confuse: [
    ["TDD", "BDD", "TDD's tests are code-level, written by developers to drive design; BDD's tests are natural-language behavior examples the whole team can read."]
  ],
  readNext: "2.1.3"
}, de: {
  title: "Test-First-Ansatz: TDD, BDD, ATDD",
  oneLine: "TDD schreibt zuerst einen fehlschlagenden Test, dann genau so viel Code, dass er besteht, und refaktoriert anschließend; BDD drückt dieses Verhalten zuerst in geschäftsverständlicher Given/When/Then-Sprache aus.",
  tests: "<p>Ob Sie testgetriebene Entwicklung (TDD), verhaltensgetriebene Entwicklung (BDD) und abnahmetestgetriebene Entwicklung (ATDD) danach unterscheiden können, wer was wann und in welcher Form schreibt.</p><ul><li><strong>TDD</strong> — ein kurzer Rot/Grün/Refaktorisieren-Zyklus: einen fehlschlagenden Test schreiben, minimalen Code zum Bestehen schreiben, dann refaktorieren, während die Tests grün bleiben. Die Tests werden von Entwicklern vor dem Code geschrieben und bestimmen dessen Entwurf.</li><li><strong>BDD</strong> — das Verhalten wird in natürlicher, geschäftsverständlicher Sprache ausgedrückt (meist Given/When/Then), die das gesamte Team, auch fachliche Stakeholder, lesen kann; diese Beispiele leiten dann die Entwicklung.</li><li><strong>ATDD</strong> — Abnahmekriterien, oft gemeinsam mit dem Kunden erstellt, werden vor Entwicklungsbeginn in Tests umgesetzt.</li></ul><p>Alle drei verlagern die Testerstellung <em>vor</em> die Codierung, nicht danach.</p>",
  traps: [
    "TDD oder BDD so darzustellen, als würden Tests erst nach fertigem Code geschrieben und danach automatisiert — das ist die umgekehrte Reihenfolge.",
    "BDD so darzustellen, als sei es etwas, das nur Testende spät durchführen, statt ein gemeinsames Sprachformat, das die Entwicklung leitet.",
    "Das ‚Ableiten von Tests aus fertigem Code' (strukturell, White-Box) mit diesen Test-first-Ansätzen zu verwechseln."
  ],
  confuse: [
    ["TDD", "BDD", "Die Tests von TDD liegen auf Code-Ebene und werden von Entwicklern geschrieben, um den Entwurf zu steuern; die Tests von BDD sind Verhaltensbeispiele in natürlicher Sprache, die das ganze Team lesen kann."]
  ],
  readNext: "2.1.3"
}},

"FL-2.1.4": { ch: 2, en: {
  title: "DevOps and testing",
  oneLine: "DevOps' payoff for testing is an automated build-deploy-test pipeline that gives fast feedback on every change, not less need for testing.",
  tests: "<p>Whether you recognize DevOps as an amplifier of testing needs rather than a replacement for testing.</p><ul><li>Continuous integration/delivery pipelines run automated tests against every change, surfacing defects within minutes.</li><li>Quality stays a <strong>shared responsibility</strong> across development and operations — DevOps does not shift it onto operations alone.</li><li>Small, frequent releases <em>increase</em> the need for regression testing and a solid test approach; they don't remove it.</li></ul>",
  traps: [
    "Claiming small, frequent releases make regression testing unnecessary.",
    "Claiming DevOps removes the need for a test approach altogether.",
    "Claiming DevOps moves quality responsibility onto operations instead of keeping it shared."
  ],
  readNext: "2.1.4"
}, de: {
  title: "DevOps und Testen",
  oneLine: "Der Nutzen von DevOps fürs Testen ist eine automatisierte Build-Deploy-Test-Pipeline mit schnellem Feedback zu jeder Änderung — nicht ein geringerer Testbedarf.",
  tests: "<p>Ob Sie erkennen, dass DevOps den Testbedarf verstärkt, statt Testen zu ersetzen.</p><ul><li>Continuous-Integration-/Continuous-Delivery-Pipelines führen bei jeder Änderung automatisierte Tests aus und decken Fehlerzustände innerhalb von Minuten auf.</li><li>Qualität bleibt eine <strong>gemeinsame Verantwortung</strong> von Entwicklung und Betrieb — DevOps verlagert sie nicht allein auf den Betrieb.</li><li>Kleine, häufige Releases <em>erhöhen</em> den Bedarf an Regressionstests und einem soliden Testansatz; sie beseitigen ihn nicht.</li></ul>",
  traps: [
    "Zu behaupten, kleine, häufige Releases machten Regressionstests überflüssig.",
    "Zu behaupten, DevOps mache einen Testansatz insgesamt überflüssig.",
    "Zu behaupten, DevOps verlagere die Verantwortung für Qualität auf den Betrieb, statt sie gemeinsam zu halten."
  ],
  readNext: "2.1.4"
}},

"FL-2.1.5": { ch: 2, en: {
  title: "Shift-left testing",
  oneLine: "Shift-left means moving testing activities earlier in the lifecycle — reviewing requirements and acceptance criteria before code exists, not testing more after release.",
  tests: "<p>Whether you can spot an activity that genuinely happens earlier versus one that just sounds proactive but is actually late-cycle or post-release.</p><p>The canonical example: reviewing a user story's acceptance criteria with developers <em>before implementation starts</em>. Activities that happen after system testing, right before release, or in production are not shift-left — even when they look thorough, they still happen late.</p>",
  traps: [
    "Mistaking beta testing, which happens after system testing, for shift-left.",
    "Mistaking a full regression run shortly before release for shift-left — it still happens late in the cycle.",
    "Mistaking production monitoring for shift-left — it finds issues after release, feeding the next cycle rather than moving testing earlier in this one."
  ],
  readNext: "2.1.5"
}, de: {
  title: "Der Shift-Left-Ansatz beim Testen",
  oneLine: "Der Shift-Left-Ansatz verschiebt Testaktivitäten früher in den Lebenszyklus — etwa das Review von Anforderungen und Abnahmekriterien, bevor Code existiert — und bedeutet nicht mehr Testen nach dem Release.",
  tests: "<p>Ob Sie eine Aktivität erkennen, die wirklich früher stattfindet, statt eine, die nur proaktiv klingt, aber tatsächlich spät im Zyklus oder erst nach dem Release liegt.</p><p>Das klassische Beispiel: die Abnahmekriterien einer User Story gemeinsam mit Entwicklern zu reviewen, <em>bevor die Umsetzung beginnt</em>. Aktivitäten, die nach dem Systemtest, kurz vor dem Release oder im Produktivbetrieb stattfinden, sind kein Shift-Left — auch wenn sie gründlich wirken, geschehen sie trotzdem spät.</p>",
  traps: [
    "Betatests, die nach dem Systemtest stattfinden, für Shift-Left zu halten.",
    "Einen vollständigen Regressionslauf kurz vor dem Release für Shift-Left zu halten — er findet trotzdem spät im Zyklus statt.",
    "Produktivüberwachung für Shift-Left zu halten — sie findet Probleme erst nach dem Release und fließt in den nächsten Zyklus ein, statt das Testen im aktuellen Zyklus vorzuziehen."
  ],
  readNext: "2.1.5"
}},

"FL-2.1.6": { ch: 2, en: {
  title: "Retrospectives and process improvement",
  oneLine: "Retrospectives turn what worked and what didn't into concrete process improvements — they are not a guarantee of fewer defects or a performance review.",
  tests: "<p>Whether you can identify retrospectives as a process-improvement mechanism rather than a measurement or accountability tool.</p><p>A retrospective's typical output is a set of improvement actions — better test data, faster feedback, clearer acceptance criteria — that raise test <strong>effectiveness</strong> and <strong>efficiency</strong> over time.</p>",
  traps: [
    "Treating a retrospective as guaranteeing a measurable drop in escaped defects.",
    "Treating a retrospective as a way to formally record who caused which defect.",
    "Treating a retrospective as an input to individual performance or promotion decisions."
  ],
  readNext: "2.1.6"
}, de: {
  title: "Retrospektiven und Prozessverbesserung",
  oneLine: "Retrospektiven wandeln das, was funktioniert hat und was nicht, in konkrete Prozessverbesserungen um — sie sind keine Garantie für weniger Fehlerzustände und keine Leistungsbeurteilung.",
  tests: "<p>Ob Sie Retrospektiven als Mechanismus zur Prozessverbesserung erkennen und nicht als Mess- oder Rechenschaftsinstrument.</p><p>Das typische Ergebnis einer Retrospektive ist eine Reihe von Verbesserungsmaßnahmen — bessere Testdaten, schnelleres Feedback, klarere Abnahmekriterien —, die die <strong>Effektivität</strong> und <strong>Effizienz</strong> des Testens im Lauf der Zeit steigern.</p>",
  traps: [
    "Eine Retrospektive so zu behandeln, als garantiere sie einen messbaren Rückgang entwichener Fehlerzustände.",
    "Eine Retrospektive als Mittel zu behandeln, um formal festzuhalten, wer welchen Fehlerzustand verursacht hat.",
    "Eine Retrospektive als Grundlage für individuelle Leistungs- oder Beförderungsentscheidungen zu behandeln."
  ],
  readNext: "2.1.6"
}},

"FL-2.2.1": { ch: 2, en: {
  title: "Test levels and test types together",
  oneLine: "Test level answers what scope you're testing at (component, integration, system, acceptance); test type answers what characteristic you're targeting (functional, non-functional, structural, change-related) — one scenario has both.",
  tests: "<p>Whether you can assign the correct level AND type to a scenario, not just one of the two.</p><ul><li><strong>Test level</strong> is set by the test object's scope: one component, integrated components, the whole integrated system in a production-like environment, or the system in its real business context.</li><li><strong>System testing</strong> covers the fully integrated system; <strong>acceptance testing</strong> is distinguished less by scope and more by who runs it and why — users, customers or operators building confidence that the system is ready for use, rather than testers hunting for defects.</li><li><strong>Test type</strong> is a separate axis: usability, performance and reliability describe <em>how well</em> the system behaves and are <strong>non-functional</strong>; whether a feature does the right thing is <strong>functional</strong>.</li></ul>",
  traps: [
    "Calling usability or performance testing a test level — it's a non-functional test type, not a level.",
    "Labeling user-run testing on the finished system as system testing just because it covers the whole system — if users are confirming readiness for use, it's acceptance testing.",
    "Assuming acceptance testing only happens once, at the very end, instead of per release or increment."
  ],
  confuse: [
    ["System testing", "Acceptance testing", "Both can run on the complete integrated system, but system testing is done by testers hunting for defects; acceptance testing is done by users or customers to confirm readiness."],
    ["Functional test type", "Non-functional test type", "Functional asks whether the system does the right thing; non-functional asks how well it does it — usability, performance, reliability."]
  ],
  readNext: "2.2.1"
}, de: {
  title: "Teststufen und Testarten zusammen betrachtet",
  oneLine: "Die Teststufe beantwortet, auf welchem Umfang Sie testen (Komponente, Integration, System, Abnahme); die Testart beantwortet, welche Eigenschaft Sie prüfen (funktional, nicht funktional, strukturell, änderungsbezogen) — jedes Szenario hat beides.",
  tests: "<p>Ob Sie einem Szenario sowohl die richtige Teststufe ALS AUCH die richtige Testart zuordnen können, nicht nur eines von beiden.</p><ul><li>Die <strong>Teststufe</strong> ergibt sich aus dem Umfang des Testobjekts: eine einzelne Komponente, integrierte Komponenten, das gesamte integrierte System in einer produktionsnahen Umgebung, oder das System in seinem realen fachlichen Kontext.</li><li><strong>Systemtest</strong> deckt das vollständig integrierte System ab; der <strong>Abnahmetest</strong> unterscheidet sich weniger im Umfang als vielmehr darin, wer ihn durchführt und warum — Anwender, Kunden oder Betreiber gewinnen Vertrauen, dass das System einsatzbereit ist, statt dass Testende gezielt nach Fehlerzuständen suchen.</li><li>Die <strong>Testart</strong> ist eine eigene Achse: Benutzbarkeit, Leistung und Zuverlässigkeit beschreiben, <em>wie gut</em> sich das System verhält, und sind <strong>nicht funktional</strong>; ob ein Feature das Richtige tut, ist <strong>funktional</strong>.</li></ul>",
  traps: [
    "Benutzbarkeits- oder Leistungstests als Teststufe zu bezeichnen — es handelt sich um eine nicht funktionale Testart, keine Stufe.",
    "Von Anwendern durchgeführte Tests am fertigen System als Systemtest zu bezeichnen, nur weil sie das ganze System abdecken — bestätigen Anwender die Einsatzbereitschaft, handelt es sich um einen Abnahmetest.",
    "Anzunehmen, der Abnahmetest finde nur einmal ganz am Ende statt, statt pro Release oder Inkrement."
  ],
  confuse: [
    ["Systemtest", "Abnahmetest", "Beide können am vollständig integrierten System laufen, aber der Systemtest wird von Testenden auf der Suche nach Fehlerzuständen durchgeführt; der Abnahmetest von Anwendern oder Kunden zur Bestätigung der Einsatzbereitschaft."],
    ["Funktionale Testart", "Nicht funktionale Testart", "Funktional fragt, ob das System das Richtige tut; nicht funktional fragt, wie gut es das tut — Benutzbarkeit, Leistung, Zuverlässigkeit."]
  ],
  readNext: "2.2.1"
}},

"FL-2.2.2": { ch: 2, en: {
  title: "Confirmation testing and regression testing",
  oneLine: "Confirmation testing checks that the fix worked; regression testing checks that the fix broke nothing else.",
  tests: "<p>Whether you can tell which is which in a scenario, and what decides how much of each you need.</p><p><strong>Confirmation testing</strong> re-executes the test that failed, against the fixed software, to verify the defect is gone. <strong>Regression testing</strong> executes other tests, in areas that were <em>not</em> changed, to detect unintended side effects.</p><p>The scope of regression testing comes from <strong>impact analysis</strong>: what could this change have touched, directly or indirectly? A one-line change to a shared utility can have a much wider blast radius than a large change to an isolated module, and impact analysis is what makes that visible.</p><p>Both are prime candidates for automation, because both get repeated on every change.</p>",
  traps: [
    "Sizing regression testing by the size of the change rather than by its reach. A tiny change to shared code needs wide regression testing.",
    "Calling everything run after a change 'regression testing'. Re-running the specific failed test is confirmation testing.",
    "Assuming regression testing only applies to maintenance. It applies whenever anything changes, including within an iteration."
  ],
  confuse: [
    ["Confirmation testing", "Regression testing", "Confirmation re-runs the failed test. Regression runs other tests looking for side effects."],
    ["Regression testing", "Maintenance testing", "Regression testing is a reason for running tests. Maintenance testing is a context: an operational system being changed."]
  ],
  readNext: "2.2.2"
}, de: {
  title: "Fehlernachtest und Regressionstest",
  oneLine: "Der Fehlernachtest prüft, ob die Korrektur funktioniert hat; der Regressionstest prüft, ob die Korrektur nichts anderes beschädigt hat.",
  tests: "<p>Ob Sie in einem Szenario erkennen können, um welchen der beiden es geht, und was den jeweils nötigen Umfang bestimmt.</p><p>Der <strong>Fehlernachtest</strong> führt den fehlgeschlagenen Test erneut gegen die korrigierte Software aus, um zu prüfen, ob der Fehlerzustand behoben ist. Der <strong>Regressionstest</strong> führt andere Tests in Bereichen aus, die <em>nicht</em> geändert wurden, um unbeabsichtigte Nebenwirkungen aufzudecken.</p><p>Der Umfang des Regressionstests ergibt sich aus der <strong>Auswirkungsanalyse</strong>: Was könnte diese Änderung direkt oder indirekt berührt haben? Eine einzeilige Änderung an einer gemeinsam genutzten Hilfsfunktion kann eine viel größere Reichweite haben als eine umfangreiche Änderung an einem isolierten Modul — genau das macht die Auswirkungsanalyse sichtbar.</p><p>Beide eignen sich hervorragend zur Automatisierung, da beide bei jeder Änderung wiederholt werden.</p>",
  traps: [
    "Den Regressionstest nach der Größe der Änderung zu bemessen statt nach ihrer Reichweite. Eine winzige Änderung an gemeinsam genutztem Code erfordert einen breiten Regressionstest.",
    "Alles, was nach einer Änderung ausgeführt wird, als ‚Regressionstest' zu bezeichnen. Das erneute Ausführen des konkret fehlgeschlagenen Tests ist ein Fehlernachtest.",
    "Anzunehmen, Regressionstests gälten nur für die Wartung. Sie gelten bei jeder Änderung, auch innerhalb einer Iteration."
  ],
  confuse: [
    ["Fehlernachtest", "Regressionstest", "Der Fehlernachtest wiederholt den fehlgeschlagenen Test. Der Regressionstest führt andere Tests aus, um Nebenwirkungen zu finden."],
    ["Regressionstest", "Wartungstest", "Der Regressionstest ist ein Grund, Tests auszuführen. Der Wartungstest ist ein Kontext: ein im Betrieb befindliches System, das geändert wird."]
  ],
  readNext: "2.2.2"
}},

"FL-2.3.1": { ch: 2, en: {
  title: "Maintenance testing: triggers and scope",
  oneLine: "Maintenance testing targets an operational system after modification, migration, or retirement; its scope comes from impact analysis, not from team size or the original test technique.",
  tests: "<p>Whether you can recognize a genuine maintenance-testing trigger versus ordinary development activity, and what actually drives its scope.</p><ul><li>Triggers: changes and hotfixes to a live system, <strong>migration</strong> (platform, OS, or data migration), and system <strong>retirement</strong>.</li><li>A first release of a system that has never been in production is <em>development</em> testing, not maintenance testing — the system must already be operational.</li><li>Scope comes from <strong>impact analysis</strong>: the degree of risk in the change, the size of the existing system, and the size of the change itself — not headcount or which techniques the original development used.</li></ul>",
  traps: [
    "Classifying a new backlog item on a system still under development as a maintenance-testing trigger — the system must already be in production.",
    "Sizing maintenance testing by the number of available testers rather than by risk, system size and change size.",
    "Treating an organizational decision, such as changing the level of test independence, as a maintenance-testing trigger.",
    "Missing that platform or library upgrades and retirement are triggers just as much as a functional hotfix is."
  ],
  confuse: [
    ["Development testing", "Maintenance testing", "Development testing happens before a system's first production release; maintenance testing happens on a system already in operation, triggered by change, migration or retirement."]
  ],
  readNext: "2.3.1"
}, de: {
  title: "Wartungstest: Auslöser und Umfang",
  oneLine: "Der Wartungstest betrifft ein im Betrieb befindliches System nach Änderung, Migration oder Außerbetriebnahme; sein Umfang ergibt sich aus der Auswirkungsanalyse, nicht aus der Teamgröße oder dem ursprünglich verwendeten Testverfahren.",
  tests: "<p>Ob Sie einen echten Auslöser für Wartungstests von gewöhnlicher Entwicklungstätigkeit unterscheiden können und wissen, was den Umfang tatsächlich bestimmt.</p><ul><li>Auslöser: Änderungen und Hotfixes an einem produktiven System, <strong>Migration</strong> (Plattform-, Betriebssystem- oder Datenmigration) sowie die <strong>Außerbetriebnahme</strong> eines Systems.</li><li>Das erste Release eines Systems, das noch nie im Produktivbetrieb war, ist <em>Entwicklungstest</em>, kein Wartungstest — das System muss bereits im Betrieb sein.</li><li>Der Umfang ergibt sich aus der <strong>Auswirkungsanalyse</strong>: dem Risikograd der Änderung, der Größe des bestehenden Systems und der Größe der Änderung selbst — nicht aus der Personalstärke oder den in der ursprünglichen Entwicklung verwendeten Verfahren.</li></ul>",
  traps: [
    "Ein neues Backlog-Element an einem noch in Entwicklung befindlichen System als Auslöser für Wartungstests einzustufen — das System muss bereits produktiv sein.",
    "Den Wartungstest nach der Anzahl verfügbarer Testender zu bemessen statt nach Risiko, Systemgröße und Änderungsgröße.",
    "Eine organisatorische Entscheidung, etwa eine Änderung des Grads der Unabhängigkeit des Testens, als Auslöser für Wartungstests zu behandeln.",
    "Zu übersehen, dass Plattform- oder Bibliotheks-Upgrades sowie die Außerbetriebnahme genauso Auslöser sind wie ein funktionaler Hotfix."
  ],
  confuse: [
    ["Entwicklungstest", "Wartungstest", "Der Entwicklungstest findet vor dem ersten Produktivrelease eines Systems statt; der Wartungstest findet an einem bereits im Betrieb befindlichen System statt, ausgelöst durch Änderung, Migration oder Außerbetriebnahme."]
  ],
  readNext: "2.3.1"
}},

/* ============================ Chapter 3 ============================ */

"FL-3.1.1": { ch: 3, en: {
  title: "What static testing can examine",
  oneLine: "Static testing examines a work product directly, without running it, so it applies to almost anything that can be read, not just code.",
  tests: "<p>Recognizing which work products qualify. Static testing can be applied to requirements, user stories, designs, code, test cases, test plans, contracts and project plans — anything that can be inspected and reasoned about on paper or screen.</p><p>What it cannot cover is anything that only exists while the software is running. A description of behaviour <em>observed during execution</em> belongs to dynamic testing, not static testing, even if it sounds like it's about examining something.</p>",
  traps: [
    "Assuming static testing only applies to source code — requirements, user stories, test cases and plans all qualify equally.",
    "Including an item that is really about behaviour seen while the system executes. If it can only be known by running the software, it isn't a static-testing target.",
    "Multi-select lists (i, ii, iii...) are built so one plausible-looking item is the execution-based outlier — check each item individually rather than pattern-matching the option shape."
  ],
  confuse: [
    ["Static testing", "Dynamic testing", "Static testing examines the work product itself without executing it; dynamic testing runs the software and observes its behaviour."]
  ],
  readNext: "3.1.1"
}, de: {
  title: "Was der statische Test untersuchen kann",
  oneLine: "Der statische Test untersucht ein Arbeitsergebnis direkt, ohne es auszuführen, und lässt sich daher auf fast alles anwenden, was gelesen werden kann – nicht nur auf Code.",
  tests: "<p>Es geht darum zu erkennen, welche Arbeitsergebnisse infrage kommen. Der statische Test lässt sich auf Anforderungen, User Stories, Entwürfe, Code, Testfälle, Testkonzepte, Verträge und Projektpläne anwenden – auf alles, was sich auf Papier oder Bildschirm begutachten und durchdenken lässt.</p><p>Was er nicht abdecken kann, ist alles, was nur existiert, während die Software läuft. Eine Beschreibung von Verhalten, das <em>während der Ausführung beobachtet</em> wird, gehört zum dynamischen Test, nicht zum statischen Test – auch wenn es sich anhört, als würde etwas untersucht.</p>",
  traps: [
    "Anzunehmen, der statische Test gelte nur für Quellcode – Anforderungen, User Stories, Testfälle und Pläne zählen genauso dazu.",
    "Ein Element auszuwählen, das eigentlich Verhalten beschreibt, das beim Ausführen des Systems beobachtet wird. Was sich nur durch Ausführen der Software feststellen lässt, ist kein Gegenstand des statischen Tests.",
    "Mehrfachauswahllisten (i, ii, iii …) sind so aufgebaut, dass ein plausibel wirkendes Element der Ausreißer ist, der auf Ausführung beruht – prüfen Sie jedes Element einzeln, statt sich an der Form der Antwortoption zu orientieren."
  ],
  confuse: [
    ["Statischer Test", "Dynamischer Test", "Der statische Test untersucht das Arbeitsergebnis selbst, ohne es auszuführen; der dynamische Test führt die Software aus und beobachtet ihr Verhalten."]
  ],
  readNext: "3.1.1"
}},

"FL-3.1.2": { ch: 3, en: {
  title: "The value of static testing",
  oneLine: "Static testing finds defects earlier and cheaper than dynamic testing because it needs no executable code and stops errors before they get built upon.",
  tests: "<p>What makes static testing valuable, specifically compared to dynamic testing:</p><ul><li>It can start on requirements and designs <strong>before any code exists</strong>.</li><li>It finds issues dynamic testing structurally cannot — ambiguity, contradiction, missing detail in a document, since there is nothing to execute yet.</li><li>Defects caught early are far cheaper to fix, because they haven't been implemented, tested against or documented elsewhere yet.</li></ul>",
  worked: "<p>Why a requirements defect found in review costs less than the same defect found in system testing: if it survives the review, it gets built into the design, then the code, then tests are written against the wrong behaviour, then documentation reflects it too. Fixing it later means reworking every one of those downstream artefacts, not just the requirement. Caught in review, only the requirement itself needs changing.</p>",
  traps: [
    "Picking an option that requires execution (response time, run-time interaction failures, confirming a fix) — those are dynamic testing benefits, not static.",
    "Attributing the cost saving to reviewers being cheaper staff, or to avoiding test-environment/licence costs — the real driver is how much downstream rework a late-caught defect forces.",
    "Assuming defects found in reviews are inherently less severe than those found in code — severity has nothing to do with when a defect is detected."
  ],
  confuse: [
    ["Value of static testing", "Value of dynamic testing", "Static testing catches problems before execution is even possible, such as an ambiguous requirement; dynamic testing catches problems that only appear once the software actually runs."]
  ],
  readNext: "3.1.2"
}, de: {
  title: "Der Nutzen des statischen Tests",
  oneLine: "Der statische Test findet Fehlerzustände früher und kostengünstiger als der dynamische Test, weil er keinen ausführbaren Code benötigt und Fehler stoppt, bevor auf ihnen aufgebaut wird.",
  tests: "<p>Was den statischen Test speziell im Vergleich zum dynamischen Test wertvoll macht:</p><ul><li>Er kann bereits bei Anforderungen und Entwürfen ansetzen, <strong>bevor überhaupt Code existiert</strong>.</li><li>Er findet Probleme, die der dynamische Test grundsätzlich nicht finden kann – Mehrdeutigkeit, Widersprüche, fehlende Details in einem Dokument, da es noch nichts auszuführen gibt.</li><li>Früh gefundene Fehlerzustände sind wesentlich günstiger zu beheben, weil sie noch nicht implementiert, dagegen getestet oder anderswo dokumentiert wurden.</li></ul>",
  worked: "<p>Warum ein im Review gefundener Fehlerzustand in einer Anforderung günstiger ist als derselbe Fehlerzustand, gefunden im Systemtest: Übersteht er das Review, fließt er in den Entwurf ein, dann in den Code, dann werden Tests gegen das falsche Verhalten geschrieben, dann spiegelt sich der Fehler auch in der Dokumentation. Wird er erst später behoben, müssen all diese nachgelagerten Arbeitsergebnisse überarbeitet werden, nicht nur die Anforderung. Wird er im Review erkannt, muss nur die Anforderung selbst geändert werden.</p>",
  traps: [
    "Eine Option zu wählen, die eine Ausführung voraussetzt (Antwortzeit, Interaktionsfehler zur Laufzeit, Bestätigung einer Fehlerbehebung) – das sind Vorteile des dynamischen, nicht des statischen Tests.",
    "Die Kostenersparnis darauf zurückzuführen, dass Reviewer günstigeres Personal seien, oder auf ersparte Kosten für Testumgebungen bzw. Lizenzen – der eigentliche Treiber ist, wie viel nachgelagerte Überarbeitung ein spät gefundener Fehlerzustand erzwingt.",
    "Anzunehmen, im Review gefundene Fehlerzustände seien grundsätzlich weniger schwerwiegend als im Code gefundene – der Schweregrad hat nichts damit zu tun, wann ein Fehlerzustand entdeckt wird."
  ],
  confuse: [
    ["Nutzen des statischen Tests", "Nutzen des dynamischen Tests", "Der statische Test findet Probleme, bevor eine Ausführung überhaupt möglich ist, etwa eine mehrdeutige Anforderung; der dynamische Test findet Probleme, die erst sichtbar werden, wenn die Software tatsächlich läuft."]
  ],
  readNext: "3.1.2"
}},

"FL-3.1.3": { ch: 3, en: {
  title: "Static vs dynamic testing techniques",
  oneLine: "Static testing examines a work product and finds the defect directly; dynamic testing executes the software and only reveals a failure that still has to be traced back to its defect.",
  tests: "<p>The core contrast to hold onto: in static testing, an anomaly you find <em>is</em> the defect. In dynamic testing, you observe a failure — incorrect behaviour — and then have to diagnose which defect caused it. Static testing also applies to a much wider range of work products than dynamic testing, which needs something executable. Neither technique is inherently cheaper or more automatable than the other; that depends on the context, not on which technique it is.</p>",
  traps: [
    "Reversing the scope claim — it's static testing that applies to almost any work product, while dynamic testing needs executable code, not the other way round.",
    "Assuming both techniques require the software to run — only dynamic testing does.",
    "Treating 'dynamic testing is cheaper because it's automated' as a general truth — automation potential doesn't make one technique universally cheaper."
  ],
  confuse: [
    ["Defect", "Failure", "A defect is the underlying flaw in the work product; a failure is the incorrect behaviour it produces when the software runs. Static testing finds defects directly; dynamic testing finds failures that must be traced back to a defect."]
  ],
  readNext: "3.1.3"
}, de: {
  title: "Statischer Test versus dynamischer Test",
  oneLine: "Der statische Test untersucht ein Arbeitsergebnis und findet den Fehlerzustand direkt; der dynamische Test führt die Software aus und deckt nur eine Fehlerwirkung auf, die noch auf ihren Fehlerzustand zurückgeführt werden muss.",
  tests: "<p>Der zentrale Gegensatz, den Sie sich merken sollten: Beim statischen Test <em>ist</em> eine gefundene Anomalie bereits der Fehlerzustand. Beim dynamischen Test beobachten Sie eine Fehlerwirkung – ein fehlerhaftes Verhalten – und müssen anschließend ermitteln, welcher Fehlerzustand sie verursacht hat. Der statische Test lässt sich außerdem auf eine viel breitere Palette von Arbeitsergebnissen anwenden als der dynamische Test, der etwas Ausführbares benötigt. Keines der beiden Verfahren ist von sich aus günstiger oder besser automatisierbar als das andere; das hängt vom Kontext ab, nicht vom Verfahren selbst.</p>",
  traps: [
    "Die Aussage zum Anwendungsbereich zu vertauschen – es ist der statische Test, der sich auf fast jedes Arbeitsergebnis anwenden lässt, während der dynamische Test ausführbaren Code benötigt, nicht umgekehrt.",
    "Anzunehmen, beide Verfahren würden das Ausführen der Software erfordern – das trifft nur auf den dynamischen Test zu.",
    "Die Aussage „dynamischer Test ist günstiger, weil automatisiert“ als allgemeingültig zu behandeln – Automatisierungspotenzial macht kein Verfahren generell günstiger."
  ],
  confuse: [
    ["Fehlerzustand", "Fehlerwirkung", "Ein Fehlerzustand ist der zugrunde liegende Mangel im Arbeitsergebnis; eine Fehlerwirkung ist das fehlerhafte Verhalten, das er beim Ausführen der Software hervorruft. Der statische Test findet Fehlerzustände direkt; der dynamische Test findet Fehlerwirkungen, die auf einen Fehlerzustand zurückgeführt werden müssen."]
  ],
  readNext: "3.1.3"
}},

"FL-3.2.1": { ch: 3, en: {
  title: "Early and frequent stakeholder feedback",
  oneLine: "Getting stakeholder feedback early and often catches misunderstood requirements before they're implemented, while correcting course is still cheap.",
  tests: "<p>The point being tested is what early feedback actually buys you: misunderstandings about what stakeholders need get identified and corrected before effort is spent building the wrong thing. It is a way of reducing risk and rework, not a guarantee, and not a substitute for other testing or review activities later in the lifecycle.</p>",
  traps: [
    "Claiming early feedback removes the need for acceptance testing or other later activities — it complements them, it doesn't replace them.",
    "Treating early feedback as a guarantee of on-time or on-budget delivery — it reduces the risk of building the wrong thing, it doesn't guarantee project outcomes.",
    "Assuming feedback shifts responsibility for product quality onto the stakeholders — the team remains responsible for quality."
  ],
  confuse: [
    ["Early stakeholder feedback", "Formal review", "Early feedback is an ongoing, informal check that development is heading the right direction; a formal review is a structured evaluation of one specific, completed work product."]
  ],
  readNext: "3.2.1"
}, de: {
  title: "Frühes und häufiges Feedback von Stakeholdern",
  oneLine: "Frühes und häufiges Feedback von Stakeholdern deckt missverstandene Anforderungen auf, bevor sie umgesetzt werden – solange eine Kurskorrektur noch günstig ist.",
  tests: "<p>Geprüft wird, was frühes Feedback tatsächlich bringt: Missverständnisse darüber, was Stakeholder benötigen, werden erkannt und korrigiert, bevor Aufwand in die Umsetzung des Falschen fließt. Es ist ein Mittel, um Risiko und Nacharbeit zu verringern – keine Garantie und kein Ersatz für andere Test- oder Reviewaktivitäten später im Lebenszyklus.</p>",
  traps: [
    "Zu behaupten, frühes Feedback mache den Abnahmetest oder andere spätere Aktivitäten überflüssig – es ergänzt sie, ersetzt sie aber nicht.",
    "Frühes Feedback als Garantie für termin- oder budgetgerechte Lieferung zu behandeln – es verringert das Risiko, das Falsche zu bauen, garantiert aber keine Projektergebnisse.",
    "Anzunehmen, Feedback verlagere die Verantwortung für die Produktqualität auf die Stakeholder – die Verantwortung für die Qualität bleibt beim Team."
  ],
  confuse: [
    ["Frühes Feedback von Stakeholdern", "Formales Review", "Frühes Feedback ist eine fortlaufende, informelle Prüfung, ob die Entwicklung in die richtige Richtung geht; ein formales Review ist eine strukturierte Bewertung eines einzelnen, fertiggestellten Arbeitsergebnisses."]
  ],
  readNext: "3.2.1"
}},

"FL-3.2.2": { ch: 3, en: {
  title: "The review process activities",
  oneLine: "A formal review moves through a defined sequence: planning, kick-off, individual review, communication and analysis, then fixing and reporting.",
  tests: "<p>Matching an activity to what happens in it:</p><ul><li><strong>Planning</strong> — define scope, and for formal review types, entry and exit criteria; select participants and allocate roles. Happens before anyone sees the material.</li><li><strong>Kick-off (initiate review)</strong> — distribute the work product and explain the objectives to participants.</li><li><strong>Individual review</strong> — each participant examines the work product alone and logs their own findings.</li><li><strong>Communication and analysis</strong> — findings from all reviewers are discussed together, and each one is given a status: defect, improvement suggestion, or no action needed.</li><li><strong>Fixing and reporting</strong> — the author corrects the agreed defects and reports on what was done.</li></ul>",
  traps: [
    "Confusing planning (defining scope and criteria, before distribution) with kick-off (actually handing out the work product and explaining objectives).",
    "Placing 'logging anomalies found' in communication and analysis instead of individual review — individual review produces the raw findings; communication and analysis is where the group discusses them and assigns a status.",
    "Putting defect correction inside the review meeting itself — fixing happens afterward, as a separate activity."
  ],
  confuse: [
    ["Kick-off (initiate review)", "Individual review", "Kick-off distributes the material to the whole group and explains what's expected; individual review is each participant's own solo examination that generates the findings."],
    ["Communication and analysis", "Fixing and reporting", "Communication and analysis is where each anomaly is discussed and given a status; fixing and reporting is where the author actually corrects the defects that were agreed on."]
  ],
  readNext: "3.2.2"
}, de: {
  title: "Die Aktivitäten des Reviewprozesses",
  oneLine: "Ein formales Review durchläuft eine festgelegte Abfolge: Planung, Kick-off, individuelle Prüfung, Kommunikation und Analyse sowie abschließend Fehlerkorrektur und Bericht.",
  tests: "<p>Ordnen Sie jede Aktivität dem zu, was in ihr geschieht:</p><ul><li><strong>Planung</strong> — Umfang festlegen und, bei formalen Reviewarten, Eingangs- und Endekriterien definieren; Teilnehmer auswählen und Rollen zuweisen. Geschieht, bevor jemand das Material zu sehen bekommt.</li><li><strong>Kick-off (Review einleiten)</strong> — das Arbeitsergebnis verteilen und den Teilnehmern die Ziele erläutern.</li><li><strong>Individuelle Prüfung</strong> — jeder Teilnehmer untersucht das Arbeitsergebnis allein und hält seine eigenen Befunde fest.</li><li><strong>Kommunikation und Analyse</strong> — die Befunde aller Reviewer werden gemeinsam besprochen, und jeder erhält einen Status: Fehlerzustand, Verbesserungsvorschlag oder keine Maßnahme erforderlich.</li><li><strong>Fehlerkorrektur und Bericht</strong> — der Autor behebt die vereinbarten Fehlerzustände und berichtet über die durchgeführten Maßnahmen.</li></ul>",
  traps: [
    "Die Planung (Umfang und Kriterien festlegen, vor der Verteilung) mit dem Kick-off (das Arbeitsergebnis tatsächlich austeilen und die Ziele erläutern) zu verwechseln.",
    "Das „Protokollieren gefundener Anomalien“ der Kommunikation und Analyse statt der individuellen Prüfung zuzuordnen – die individuelle Prüfung liefert die Rohbefunde; in der Kommunikation und Analyse bespricht die Gruppe sie und vergibt einen Status.",
    "Die Fehlerkorrektur in das Reviewmeeting selbst zu verlegen – sie findet danach statt, als eigene Aktivität."
  ],
  confuse: [
    ["Kick-off (Review einleiten)", "Individuelle Prüfung", "Der Kick-off verteilt das Material an die gesamte Gruppe und erläutert, was erwartet wird; die individuelle Prüfung ist die eigenständige Untersuchung jedes Teilnehmers, aus der die Befunde entstehen."],
    ["Kommunikation und Analyse", "Fehlerkorrektur und Bericht", "In der Kommunikation und Analyse wird jede Anomalie besprochen und erhält einen Status; in der Fehlerkorrektur und Bericht behebt der Autor tatsächlich die vereinbarten Fehlerzustände."]
  ],
  readNext: "3.2.2"
}},

"FL-3.2.3": { ch: 3, en: {
  title: "Roles in a formal review",
  oneLine: "Each formal-review role has one job: the author owns the product, the review leader runs the process, the scribe records the findings, and the manager decides reviews happen and funds them.",
  tests: "<p>Matching a responsibility to the role that owns it:</p><ul><li><strong>Author</strong> — creates and owns the work product; fixes the agreed defects.</li><li><strong>Review leader (moderator)</strong> — plans and schedules the review activities, leads and mediates the review meeting.</li><li><strong>Scribe (recorder)</strong> — records the anomalies raised and the decisions taken during the meeting.</li><li><strong>Reviewer</strong> — examines the work product and raises anomalies.</li><li><strong>Manager</strong> — decides that reviews will be carried out and allocates the time and budget for them.</li></ul>",
  traps: [
    "Assigning scheduling and mediating the meeting to the manager instead of the review leader — the manager decides reviews happen and funds them, but doesn't run the meeting itself.",
    "Mixing up the scribe and the review leader — the scribe's job is recording anomalies and decisions; the review leader's job is facilitating and mediating.",
    "Giving the author responsibility for logging findings or leading the meeting — the author's job is producing the work product and fixing the defects that are agreed on."
  ],
  confuse: [
    ["Review leader (moderator)", "Manager", "The review leader plans, schedules and mediates the review itself; the manager makes the higher-level call that reviews will be conducted and allocates time and budget for them."],
    ["Scribe", "Reviewer", "The scribe records the anomalies and decisions during the meeting; reviewers are the ones who actually find and raise those anomalies."]
  ],
  readNext: "3.2.3"
}, de: {
  title: "Rollen in einem formalen Review",
  oneLine: "Jede Rolle im formalen Review hat genau eine Aufgabe: Der Autor verantwortet das Arbeitsergebnis, der Reviewleiter steuert den Prozess, der Protokollant hält die Befunde fest, und der Manager entscheidet über die Durchführung von Reviews und stellt dafür die Mittel bereit.",
  tests: "<p>Ordnen Sie jede Verantwortlichkeit der zuständigen Rolle zu:</p><ul><li><strong>Autor</strong> — erstellt das Arbeitsergebnis und verantwortet es; behebt die vereinbarten Fehlerzustände.</li><li><strong>Reviewleiter (Moderator)</strong> — plant und terminiert die Reviewaktivitäten, leitet und moderiert das Reviewmeeting.</li><li><strong>Protokollant</strong> — hält die aufgeworfenen Anomalien und die im Meeting getroffenen Entscheidungen fest.</li><li><strong>Reviewer</strong> — untersucht das Arbeitsergebnis und wirft Anomalien auf.</li><li><strong>Manager</strong> — entscheidet, dass Reviews durchgeführt werden, und stellt dafür Zeit und Budget bereit.</li></ul>",
  traps: [
    "Die Terminierung und Moderation des Meetings dem Manager statt dem Reviewleiter zuzuschreiben – der Manager entscheidet über die Durchführung von Reviews und finanziert sie, leitet das Meeting aber nicht selbst.",
    "Den Protokollanten mit dem Reviewleiter zu verwechseln – der Protokollant hält Anomalien und Entscheidungen fest; der Reviewleiter moderiert und leitet.",
    "Dem Autor die Verantwortung für das Protokollieren von Befunden oder die Leitung des Meetings zu übertragen – die Aufgabe des Autors ist es, das Arbeitsergebnis zu erstellen und die vereinbarten Fehlerzustände zu beheben."
  ],
  confuse: [
    ["Reviewleiter (Moderator)", "Manager", "Der Reviewleiter plant, terminiert und moderiert das Review selbst; der Manager trifft die übergeordnete Entscheidung, dass Reviews stattfinden, und stellt dafür Zeit und Budget bereit."],
    ["Protokollant", "Reviewer", "Der Protokollant hält die Anomalien und Entscheidungen während des Meetings fest; die Reviewer sind diejenigen, die diese Anomalien tatsächlich finden und aufwerfen."]
  ],
  readNext: "3.2.3"
}},

"FL-3.2.4": { ch: 3, en: {
  title: "Review types and their formality",
  oneLine: "The four types differ by who leads, how much preparation happens, and how formal the process and follow-up are.",
  tests: "<p>Whether you can identify a review type from a description of how it is run. The four in order of increasing formality:</p><ul><li><strong>Informal review</strong> — no defined process, results often undocumented. Cheap and quick.</li><li><strong>Walkthrough</strong> — <em>led by the author</em>, who guides participants through the work product. Used for finding defects, evaluating alternatives and educating the audience. Preparation optional.</li><li><strong>Technical review</strong> — <em>led by a moderator</em>, performed by technical peers. Focuses on technical decisions, reaching consensus, evaluating alternatives. Preparation expected.</li><li><strong>Inspection</strong> — the most formal. Led by a trained moderator, defined roles, individual preparation required, metrics collected and fed into process improvement, formal follow-up.</li></ul><p>The decisive clue in most questions is <strong>who leads the meeting</strong>: the author means walkthrough, a moderator means technical review or inspection. Metrics and formal follow-up then point at inspection.</p>",
  traps: [
    "Choosing 'informal review' whenever preparation is optional. A walkthrough also allows optional preparation but is author-led with a defined purpose.",
    "Choosing 'technical review' because a moderator is mentioned. Look for metrics, defined roles and formal follow-up, which mark an inspection.",
    "Assuming more formal is always better. The right type depends on the risk and the work product."
  ],
  confuse: [
    ["Walkthrough", "Technical review", "The author leads a walkthrough. A moderator leads a technical review."],
    ["Technical review", "Inspection", "An inspection adds defined roles, required preparation, metrics for process improvement and formal follow-up."]
  ],
  readNext: "3.2.4"
}, de: {
  title: "Reviewarten und ihr Formalisierungsgrad",
  oneLine: "Die vier Reviewarten unterscheiden sich danach, wer leitet, wie viel Vorbereitung stattfindet und wie formal Prozess und Nachbereitung sind.",
  tests: "<p>Ob Sie eine Reviewart anhand der Beschreibung ihrer Durchführung erkennen können. Die vier in aufsteigender Reihenfolge der Formalität:</p><ul><li><strong>Informelles Review</strong> — kein festgelegter Prozess, Ergebnisse oft undokumentiert. Günstig und schnell.</li><li><strong>Walkthrough</strong> — <em>geleitet vom Autor</em>, der die Teilnehmer durch das Arbeitsergebnis führt. Dient dem Finden von Fehlerzuständen, dem Bewerten von Alternativen und der Schulung der Teilnehmer. Vorbereitung optional.</li><li><strong>Technisches Review</strong> — <em>geleitet von einem Moderator</em>, durchgeführt von fachlichen Kollegen. Fokus auf technischen Entscheidungen, Konsensfindung, Bewertung von Alternativen. Vorbereitung wird erwartet.</li><li><strong>Inspektion</strong> — die formalste Art. Geleitet von einem geschulten Moderator, mit festgelegten Rollen, verpflichtender individueller Vorbereitung, erhobenen Metriken, die in die Prozessverbesserung einfließen, sowie formaler Nachbereitung.</li></ul><p>Der entscheidende Hinweis in den meisten Fragen ist, <strong>wer das Meeting leitet</strong>: der Autor deutet auf einen Walkthrough hin, ein Moderator auf ein technisches Review oder eine Inspektion. Metriken und formale Nachbereitung weisen dann auf die Inspektion hin.</p>",
  traps: [
    "„Informelles Review“ zu wählen, sobald Vorbereitung optional ist. Auch ein Walkthrough erlaubt optionale Vorbereitung, wird aber vom Autor geleitet und verfolgt einen festgelegten Zweck.",
    "„Technisches Review“ zu wählen, nur weil ein Moderator erwähnt wird. Achten Sie auf Metriken, festgelegte Rollen und formale Nachbereitung – das kennzeichnet eine Inspektion.",
    "Anzunehmen, formaler sei immer besser. Die richtige Reviewart hängt vom Risiko und vom Arbeitsergebnis ab."
  ],
  confuse: [
    ["Walkthrough", "Technisches Review", "Beim Walkthrough leitet der Autor. Beim technischen Review leitet ein Moderator."],
    ["Technisches Review", "Inspektion", "Die Inspektion ergänzt festgelegte Rollen, verpflichtende Vorbereitung, Metriken zur Prozessverbesserung und formale Nachbereitung."]
  ],
  readNext: "3.2.4"
}},

"FL-3.2.5": { ch: 3, en: {
  title: "Applying a review technique",
  oneLine: "The technique decides how a reviewer directs their attention: none, a list, a usage path, or a role.",
  tests: "<p>Whether you can name the technique from a description of how the reviewer is working.</p><ul><li><strong>Ad hoc</strong> — no guidance. The reviewer reads and reacts. Cheap, highly dependent on the individual, prone to overlap between reviewers.</li><li><strong>Checklist-based</strong> — work through a predefined list of question types or known problem categories. Systematic, but blind to anything not on the list.</li><li><strong>Scenarios and dry runs</strong> — walk the work product through expected usage, checking it supports each step.</li><li><strong>Role-based</strong> — evaluate the work product from the perspective of individual stakeholder or user roles, one at a time.</li><li><strong>Perspective-based</strong> — a role-based variant where each reviewer also attempts to <em>use</em> the work product to do their own job, for example a tester deriving test cases from it. Widely regarded as the most effective.</li></ul>",
  worked: "<p>Reviewing a user story once as a first-time customer and once as a support agent is <strong>role-based</strong>: you adopt each role's viewpoint in turn. If you additionally tried to <em>write the test cases</em> from it as the tester, that would be <strong>perspective-based</strong>.</p>",
  traps: [
    "Choosing checklist-based whenever a list appears in the stem. If the list is of user roles rather than of problems to look for, it is role-based.",
    "Confusing scenario-based reviewing with role-based. Scenarios follow a usage path; roles adopt a viewpoint.",
    "Treating ad hoc as 'no review'. It is a real technique, just an unguided one."
  ],
  confuse: [
    ["Checklist-based", "Role-based", "A checklist lists problems to look for. A role tells you whose eyes to look through."],
    ["Role-based", "Perspective-based", "Perspective-based adds actually using the work product to do that role's job."]
  ],
  readNext: "3.2.5"
}, de: {
  title: "Eine Reviewtechnik anwenden",
  oneLine: "Die Technik bestimmt, wie ein Reviewer seine Aufmerksamkeit lenkt: ungeleitet, anhand einer Liste, entlang eines Nutzungspfads oder aus einer Rolle heraus.",
  tests: "<p>Ob Sie die Technik anhand der Beschreibung der Arbeitsweise des Reviewers benennen können.</p><ul><li><strong>Ad hoc</strong> — keine Vorgabe. Der Reviewer liest und reagiert. Günstig, stark von der Person abhängig, anfällig für Überschneidungen zwischen Reviewern.</li><li><strong>Checklistenbasiert</strong> — eine vorgegebene Liste von Fragetypen oder bekannten Problemkategorien wird durchgearbeitet. Systematisch, aber blind für alles, was nicht auf der Liste steht.</li><li><strong>Szenarien und Trockenübungen</strong> — das Arbeitsergebnis wird entlang der erwarteten Nutzung durchgespielt, wobei geprüft wird, ob jeder Schritt unterstützt wird.</li><li><strong>Rollenbasiert</strong> — das Arbeitsergebnis wird nacheinander aus der Perspektive einzelner Stakeholder- oder Nutzerrollen bewertet.</li><li><strong>Perspektivenbasiert</strong> — eine Variante des rollenbasierten Vorgehens, bei der jeder Reviewer zusätzlich versucht, das Arbeitsergebnis für die eigene Aufgabe zu <em>nutzen</em>, zum Beispiel indem ein Tester daraus Testfälle ableitet. Gilt weithin als die wirksamste Technik.</li></ul>",
  worked: "<p>Eine User Story einmal als Erstkunde und einmal als Support-Mitarbeiter zu prüfen, ist <strong>rollenbasiert</strong>: Sie nehmen nacheinander die Sichtweise jeder Rolle ein. Würden Sie zusätzlich als Tester versuchen, daraus <em>Testfälle abzuleiten</em>, wäre das <strong>perspektivenbasiert</strong>.</p>",
  traps: [
    "„Checklistenbasiert“ zu wählen, sobald im Fragetext eine Liste auftaucht. Handelt es sich um eine Liste von Nutzerrollen statt von zu suchenden Problemen, ist es rollenbasiert.",
    "Das szenariobasierte Review mit dem rollenbasierten zu verwechseln. Szenarien folgen einem Nutzungspfad; Rollen nehmen eine Sichtweise ein.",
    "Ad hoc als „kein Review“ zu behandeln. Es ist eine echte Technik, nur eine ungeleitete."
  ],
  confuse: [
    ["Checklistenbasiert", "Rollenbasiert", "Eine Checkliste listet Probleme auf, nach denen gesucht wird. Eine Rolle legt fest, mit wessen Augen Sie schauen."],
    ["Rollenbasiert", "Perspektivenbasiert", "Perspektivenbasiert ergänzt, das Arbeitsergebnis tatsächlich zu nutzen, um die Aufgabe dieser Rolle auszuführen."]
  ],
  readNext: "3.2.5"
}},

/* ============================ Chapter 4 ============================ */

"FL-4.1.1": { ch: 4, en: {
  title: "Categories of test techniques",
  oneLine: "Black-box works from specified behavior, white-box works from code structure, experience-based works from the tester's own knowledge.",
  tests: "<p>Whether you can tell the three categories apart by what each derives tests from, and reject the common definition-swap. <strong>Black-box</strong> techniques work from specified behavior — requirements, specifications, interfaces. <strong>White-box</strong> techniques work from the internal structure — code, architecture. <strong>Experience-based</strong> techniques draw on the tester's own knowledge of the system, similar systems, and typical developer errors.</p><p>Also tested: technique choice is never one-size-fits-all — it depends on the type of system, the risks, the documentation available, tester skills, regulations, and time and budget.</p>",
  traps: [
    "Swapping the black-box and white-box definitions inside an option.",
    "Claiming coverage can only be measured for one category — both black-box and white-box support coverage measurement.",
    "Claiming one category should always be preferred, or that the choice is decided solely by test level.",
    "Restricting experience-based techniques to only when no requirements exist."
  ],
  confuse: [
    ["Black-box", "White-box", "Black-box tests specified behavior; white-box tests the internal code structure."],
    ["White-box", "Experience-based", "White-box needs the code and a structural model; experience-based needs neither, just tester knowledge."]
  ],
  readNext: "4.1.1"
}, de: {
  title: "Kategorien von Testverfahren",
  oneLine: "Black-Box-Verfahren leiten Tests aus dem spezifizierten Verhalten ab, White-Box-Verfahren aus der internen Codestruktur, erfahrungsbasierte Verfahren aus dem Wissen des Testers.",
  tests: "<p>Ob Sie die drei Kategorien anhand dessen unterscheiden können, woraus jede ihre Tests ableitet, und die verbreitete Vertauschung der Definitionen erkennen. <strong>Black-Box-Verfahren</strong> leiten Tests aus dem spezifizierten Verhalten ab — Anforderungen, Spezifikationen, Schnittstellen. <strong>White-Box-Verfahren</strong> leiten Tests aus der internen Struktur ab — Code, Architektur. <strong>Erfahrungsbasierte Verfahren</strong> nutzen das Wissen des Testers über das System, ähnliche Systeme und typische Entwicklerfehler.</p><p>Ebenfalls geprüft: Die Wahl des Verfahrens ist nie pauschal richtig — sie hängt von der Art des Systems, den Risiken, der verfügbaren Dokumentation, den Fähigkeiten der Tester, regulatorischen Vorgaben sowie Zeit und Budget ab.</p>",
  traps: [
    "Die Definitionen von Black-Box und White-Box innerhalb einer Antwortoption vertauschen.",
    "Behaupten, Überdeckung ließe sich nur für eine Kategorie messen — sowohl Black-Box- als auch White-Box-Verfahren unterstützen die Überdeckungsmessung.",
    "Behaupten, eine Kategorie sei grundsätzlich vorzuziehen oder die Wahl werde allein durch die Teststufe bestimmt.",
    "Erfahrungsbasierte Verfahren nur dann zulassen, wenn keine Anforderungen vorliegen."
  ],
  confuse: [
    ["Black-Box", "White-Box", "Black-Box testet spezifiziertes Verhalten; White-Box testet die interne Codestruktur."],
    ["White-Box", "Erfahrungsbasiert", "White-Box benötigt den Code und ein Strukturmodell; erfahrungsbasiert benötigt beides nicht, nur das Wissen des Testers."]
  ],
  readNext: "4.1.1"
}},

"FL-4.2.1": { ch: 4, en: {
  title: "Equivalence partitioning",
  oneLine: "Split each input into groups the system should treat identically, then test one value from each group.",
  tests: "<p>Whether you can identify the partitions and count the test cases needed for a stated coverage goal.</p><p>Divide the data for each parameter into <strong>equivalence partitions</strong> — sets of values the system is expected to handle the same way. Partitions can be <strong>valid</strong> (values the system should accept) or <strong>invalid</strong> (values it should reject). Coverage is measured as the proportion of partitions exercised by at least one test case.</p><p>Two rules decide the arithmetic in almost every exam question:</p><ul><li>With several parameters, the minimum number of test cases for the valid partitions is the <strong>largest number of partitions any single parameter has</strong>, because one test case can cover one partition of every parameter at once — provided a valid combination exists.</li><li><strong>Invalid partitions are tested one at a time</strong>, one invalid value per test case, so that the rejection can be attributed to that value. Each invalid partition therefore needs its own test case.</li></ul>",
  worked: "<p>Driver age 18–99 (one valid partition, two invalid: below 18 and above 99) and vehicle category A, B or C (three valid partitions).</p><p>Valid coverage: the largest count is 3, so three test cases — (valid age, A), (valid age, B), (valid age, C).</p><p>Invalid coverage: two more, one per invalid age partition, each with an otherwise valid category.</p><p>Total: <strong>5</strong>.</p>",
  traps: [
    "Multiplying the partitions together. Three categories × one age partition is not the answer; you need the maximum, not the product.",
    "Combining several invalid values into one test case. That is deliberately excluded, and it changes the count.",
    "Forgetting a constraint in the stem that makes some combination impossible, which can force an extra test case.",
    "Overlooking the invalid partitions entirely when the question says coverage includes them."
  ],
  confuse: [
    ["Equivalence partition", "Boundary value", "The partition is the whole group. The boundary is its edge."],
    ["Valid partition", "Invalid partition", "Valid values should be processed. Invalid values should be rejected, and are tested one per test case."]
  ],
  readNext: "4.2.1"
}, de: {
  title: "Äquivalenzklassenbildung",
  oneLine: "Teilen Sie jeden Eingabewert in Gruppen, die das System gleich behandeln soll, und testen Sie aus jeder Gruppe einen Wert.",
  tests: "<p>Ob Sie die Äquivalenzklassen bestimmen und die Anzahl der Testfälle für ein vorgegebenes Überdeckungsziel berechnen können.</p><p>Teilen Sie die Daten jedes Parameters in <strong>Äquivalenzklassen</strong> ein — Mengen von Werten, die das System voraussichtlich gleich behandelt. Klassen können <strong>gültig</strong> sein (Werte, die das System akzeptieren soll) oder <strong>ungültig</strong> (Werte, die es zurückweisen soll). Die Überdeckung wird als Anteil der Klassen gemessen, die von mindestens einem Testfall abgedeckt werden.</p><p>Zwei Regeln bestimmen die Rechnung in fast jeder Prüfungsfrage:</p><ul><li>Bei mehreren Parametern ist die Mindestanzahl an Testfällen für die gültigen Klassen die <strong>größte Anzahl an Klassen, die ein einzelner Parameter hat</strong>, da ein Testfall jeweils eine Klasse jedes Parameters gleichzeitig abdecken kann — sofern eine gültige Kombination existiert.</li><li><strong>Ungültige Klassen werden einzeln getestet</strong>, ein ungültiger Wert pro Testfall, damit sich die Zurückweisung eindeutig diesem Wert zuordnen lässt. Jede ungültige Klasse benötigt daher einen eigenen Testfall.</li></ul>",
  worked: "<p>Fahreralter 18–99 (eine gültige Klasse, zwei ungültige: unter 18 und über 99) sowie Fahrzeugkategorie A, B oder C (drei gültige Klassen).</p><p>Gültige Überdeckung: Die größte Anzahl ist 3, also drei Testfälle — (gültiges Alter, A), (gültiges Alter, B), (gültiges Alter, C).</p><p>Ungültige Überdeckung: zwei weitere, je einer pro ungültiger Altersklasse, jeweils mit einer ansonsten gültigen Kategorie.</p><p>Gesamt: <strong>5</strong>.</p>",
  traps: [
    "Die Klassen miteinander multiplizieren. Drei Kategorien × eine Altersklasse ist nicht die Antwort; gefragt ist das Maximum, nicht das Produkt.",
    "Mehrere ungültige Werte in einem Testfall zusammenfassen. Das ist bewusst ausgeschlossen und verändert die Anzahl.",
    "Eine Einschränkung im Aufgabentext übersehen, die eine Kombination unmöglich macht und dadurch einen zusätzlichen Testfall erzwingt.",
    "Die ungültigen Klassen ganz übersehen, wenn die Frage verlangt, dass die Überdeckung sie einschließt."
  ],
  confuse: [
    ["Äquivalenzklasse", "Grenzwert", "Die Klasse ist die ganze Gruppe. Der Grenzwert ist ihr Rand."],
    ["Gültige Klasse", "Ungültige Klasse", "Gültige Werte sollen verarbeitet werden. Ungültige Werte sollen zurückgewiesen werden und werden einzeln pro Testfall getestet."]
  ],
  readNext: "4.2.1"
}},

"FL-4.2.2": { ch: 4, en: {
  title: "Boundary value analysis",
  oneLine: "A boundary is where behaviour changes, and BVA tests the values sitting either side of that change.",
  tests: "<p>Whether you can list the coverage items for a partition, or calculate the coverage a given set of test cases achieves. BVA applies only to <strong>ordered</strong> partitions, such as numbers or dates.</p><p>The minimum and maximum of a partition are its <strong>boundary values</strong>. Two variants:</p><ul><li><strong>2-value BVA</strong> — for each boundary, two coverage items: the boundary value itself and its <em>nearest neighbour in the adjacent partition</em>.</li><li><strong>3-value BVA</strong> — for each boundary, three coverage items: the boundary value and <em>both</em> its neighbours.</li></ul><p>Coverage = coverage items exercised ÷ total coverage items. Count items, not test cases.</p>",
  worked: "<p><strong>2-value, partition 1 to 28.</strong> Lower boundary 1 → items 0 and 1. Upper boundary 28 → items 28 and 29. Set = {0, 1, 28, 29}.</p><p><strong>3-value, partition 6 to 17.</strong> Lower boundary 6 → 5, 6, 7. Upper boundary 17 → 16, 17, 18. Set = {5, 6, 7, 16, 17, 18}.</p><p><strong>Coverage.</strong> Partitions 0–500, 501–2000, 2001–10000, 10001–30000 give eight boundary values under 2-value BVA: 0, 500, 501, 2000, 2001, 10000, 10001, 30000. Test cases using 0, 500, 750, 2000 and 10001 hit four of those eight — 750 is not a boundary — so coverage is <strong>50%</strong>, not 80%.</p>",
  traps: [
    "Answering with just the boundaries, {1, 28}, when 2-value BVA also wants the neighbours outside.",
    "Stepping inward instead of outward: {1, 2, 27, 28} rather than {0, 1, 28, 29}.",
    "Calculating coverage over test cases instead of coverage items. Five test cases covering four of eight items is 50%, not 80%.",
    "Applying BVA to unordered data such as a list of countries. It has no boundaries."
  ],
  confuse: [
    ["2-value BVA", "3-value BVA", "Two items per boundary (value plus outside neighbour) versus three (value plus both neighbours)."],
    ["Boundary value", "Coverage item", "In 2-value BVA one boundary produces two coverage items, so the counts differ."]
  ],
  readNext: "4.2.2"
}, de: {
  title: "Grenzwertanalyse",
  oneLine: "Ein Grenzwert ist die Stelle, an der sich das Verhalten ändert, und die Grenzwertanalyse testet die Werte auf beiden Seiten dieser Änderung.",
  tests: "<p>Ob Sie die Überdeckungselemente einer Klasse auflisten oder die Überdeckung eines gegebenen Testfallsatzes berechnen können. Die Grenzwertanalyse gilt nur für <strong>geordnete</strong> Klassen, etwa Zahlen oder Datumswerte.</p><p>Das Minimum und das Maximum einer Klasse sind ihre <strong>Grenzwerte</strong>. Zwei Varianten:</p><ul><li><strong>2-Werte-Grenzwertanalyse</strong> — pro Grenzwert zwei Überdeckungselemente: der Grenzwert selbst und sein <em>nächstgelegener Nachbar in der angrenzenden Klasse</em>.</li><li><strong>3-Werte-Grenzwertanalyse</strong> — pro Grenzwert drei Überdeckungselemente: der Grenzwert und <em>beide</em> Nachbarn.</li></ul><p>Überdeckung = abgedeckte Überdeckungselemente ÷ Gesamtzahl der Überdeckungselemente. Zählen Sie Elemente, nicht Testfälle.</p>",
  worked: "<p><strong>2-Werte-Analyse, Klasse 1 bis 28.</strong> Unterer Grenzwert 1 → Elemente 0 und 1. Oberer Grenzwert 28 → Elemente 28 und 29. Menge = {0, 1, 28, 29}.</p><p><strong>3-Werte-Analyse, Klasse 6 bis 17.</strong> Unterer Grenzwert 6 → 5, 6, 7. Oberer Grenzwert 17 → 16, 17, 18. Menge = {5, 6, 7, 16, 17, 18}.</p><p><strong>Überdeckung.</strong> Die Klassen 0–500, 501–2000, 2001–10000, 10001–30000 ergeben acht Grenzwerte nach der 2-Werte-Analyse: 0, 500, 501, 2000, 2001, 10000, 10001, 30000. Testfälle mit 0, 500, 750, 2000 und 10001 treffen vier dieser acht — 750 ist kein Grenzwert —, die Überdeckung beträgt also <strong>50%</strong>, nicht 80%.</p>",
  traps: [
    "Nur die Grenzwerte selbst nennen, {1, 28}, obwohl die 2-Werte-Analyse auch die äußeren Nachbarn verlangt.",
    "Nach innen statt nach außen zählen: {1, 2, 27, 28} statt {0, 1, 28, 29}.",
    "Die Überdeckung über Testfälle statt über Überdeckungselemente berechnen. Fünf Testfälle, die vier von acht Elementen abdecken, ergeben 50%, nicht 80%.",
    "Die Grenzwertanalyse auf ungeordnete Daten wie eine Länderliste anwenden. Diese hat keine Grenzwerte."
  ],
  confuse: [
    ["2-Werte-Analyse", "3-Werte-Analyse", "Zwei Elemente pro Grenzwert (Wert plus äußerer Nachbar) gegenüber drei (Wert plus beide Nachbarn)."],
    ["Grenzwert", "Überdeckungselement", "Bei der 2-Werte-Analyse erzeugt ein Grenzwert zwei Überdeckungselemente, die Anzahl unterscheidet sich also."]
  ],
  readNext: "4.2.2"
}},

"FL-4.2.3": { ch: 4, en: {
  title: "Decision table testing",
  oneLine: "Tabulate every combination of conditions and the actions it should produce, then test the combinations.",
  tests: "<p>Whether you can read a table, find the column matching a described situation, or spot a column that contradicts the specification.</p><p>Rows above the divider are <strong>conditions</strong>, rows below are <strong>actions</strong>. Each column is a <strong>rule</strong>: one combination of condition values and the actions that follow. A full table with <em>n</em> binary conditions has <strong>2<sup>n</sup></strong> rules — three conditions give eight.</p><p>Minimum coverage is one test case per rule, that is, one per column. Tables can be <em>collapsed</em> where a condition does not affect the outcome, which reduces the number of rules.</p><p>The reliable method for a question: read the described situation into a true/false triple, then find the column with that pattern. Do not scan the action rows first.</p>",
  worked: "<p>Conditions in order: unpaid fine, reading club member, five or more books already out. A member with no fine, in the club, holding six books gives <strong>false, true, true</strong>.</p><p>With the standard layout — the first condition true for the left half, the second alternating in quarters, the third alternating every column — that pattern is <strong>R5</strong>. Read the action rows in that column for the outcome.</p>",
  traps: [
    "Reading the columns in the wrong order. Confirm how the true/false pattern alternates before locating your column.",
    "Answering from the action rows. Two rules can share an action, so match the conditions first.",
    "Forgetting that a full table has 2ⁿ rules, and answering with the number of conditions instead.",
    "In 'which rule is wrong' questions, checking only that the actions look plausible instead of testing them against the stated rules."
  ],
  confuse: [
    ["Condition", "Action", "Conditions are the inputs above the divider. Actions are the outcomes below it."],
    ["Full table", "Collapsed table", "A full table has 2ⁿ rules. A collapsed table merges rules where a condition makes no difference."]
  ],
  readNext: "4.2.3"
}, de: {
  title: "Entscheidungstabellentest",
  oneLine: "Tabellieren Sie jede Kombination von Bedingungen und die daraus folgenden Aktionen, und testen Sie die Kombinationen.",
  tests: "<p>Ob Sie eine Tabelle lesen, die zu einer beschriebenen Situation passende Spalte finden oder eine Spalte erkennen können, die der Spezifikation widerspricht.</p><p>Die Zeilen oberhalb der Trennlinie sind <strong>Bedingungen</strong>, die Zeilen darunter <strong>Aktionen</strong>. Jede Spalte ist eine <strong>Regel</strong>: eine Kombination von Bedingungswerten mit den daraus folgenden Aktionen. Eine vollständige Tabelle mit <em>n</em> binären Bedingungen hat <strong>2<sup>n</sup></strong> Regeln — drei Bedingungen ergeben acht.</p><p>Die Mindestüberdeckung ist ein Testfall pro Regel, also einer pro Spalte. Tabellen können <em>zusammengefasst</em> werden, wenn eine Bedingung das Ergebnis nicht beeinflusst, was die Anzahl der Regeln verringert.</p><p>Die verlässliche Methode für eine Prüfungsfrage: Die beschriebene Situation in ein Wahr/Falsch-Tripel übersetzen und dann die Spalte mit diesem Muster suchen. Nicht zuerst die Aktionszeilen absuchen.</p>",
  worked: "<p>Bedingungen in der Reihenfolge: offene Mahngebühr, Mitglied im Lesezirkel, fünf oder mehr Bücher bereits ausgeliehen. Ein Mitglied ohne Mahngebühr, im Lesezirkel, mit sechs ausgeliehenen Büchern ergibt <strong>falsch, wahr, wahr</strong>.</p><p>Bei der Standardanordnung — die erste Bedingung ist für die linke Hälfte wahr, die zweite wechselt viertelweise, die dritte wechselt bei jeder Spalte — entspricht dieses Muster <strong>R5</strong>. Lesen Sie das Ergebnis aus den Aktionszeilen dieser Spalte ab.</p>",
  traps: [
    "Die Spalten in der falschen Reihenfolge lesen. Prüfen Sie, wie das Wahr/Falsch-Muster wechselt, bevor Sie Ihre Spalte suchen.",
    "Von den Aktionszeilen aus antworten. Zwei Regeln können dieselbe Aktion haben, gleichen Sie deshalb zuerst die Bedingungen ab.",
    "Vergessen, dass eine vollständige Tabelle 2ⁿ Regeln hat, und stattdessen mit der Anzahl der Bedingungen antworten.",
    "Bei Fragen zur 'falschen Regel' nur prüfen, ob die Aktionen plausibel wirken, statt sie gegen die angegebenen Regeln zu testen."
  ],
  confuse: [
    ["Bedingung", "Aktion", "Bedingungen sind die Eingaben oberhalb der Trennlinie. Aktionen sind die Ergebnisse darunter."],
    ["Vollständige Tabelle", "Zusammengefasste Tabelle", "Eine vollständige Tabelle hat 2ⁿ Regeln. Eine zusammengefasste Tabelle fasst Regeln zusammen, bei denen eine Bedingung keinen Unterschied macht."]
  ],
  readNext: "4.2.3"
}},

"FL-4.2.4": { ch: 4, en: {
  title: "State transition testing",
  oneLine: "Model the system as states and the events that move between them, then cover transitions or sequences.",
  tests: "<p>Whether you can count transitions, count test cases, or judge whether an event sequence is possible.</p><p>A state transition diagram or table shows <strong>states</strong>, <strong>events</strong> that trigger a move, and the resulting transitions. Coverage criteria:</p><ul><li><strong>All states</strong> — every state visited at least once. The weakest.</li><li><strong>Valid transitions (0-switch)</strong> — every defined transition taken at least once. The usual exam target.</li><li><strong>All transitions</strong> — every valid transition <em>and</em> every invalid event/state pair.</li></ul><p>In a <strong>state table</strong>, every cell is a state/event pair. Blank cells (often a dash) are <strong>invalid transitions</strong>. With <em>s</em> states and <em>e</em> events there are <em>s × e</em> cells, so invalid transitions = <em>s × e</em> − defined transitions.</p>",
  worked: "<p><strong>Counting invalid transitions.</strong> Three states, three events = 9 cells. Three cells hold a defined transition, so <strong>6</strong> are invalid.</p><p><strong>Minimum test cases for valid transition coverage.</strong> Each test case runs from the start state to a final state, so a transition entering a final state ends its test case. If two different transitions both lead into final states, they cannot share a test case. Six transitions where one goes straight from the start state to a final state, and two others each end in a final state, need <strong>3</strong> test cases — not one long path.</p>",
  traps: [
    "Assuming one clever path can cover everything. Any transition into a final state terminates that test case.",
    "Counting states instead of transitions when the question asks for transition coverage.",
    "Ignoring the dashes in a state table. They are the invalid transitions the question is usually about.",
    "Reading a sequence as valid because every event appears in the diagram somewhere. The event has to be accepted in the state you are actually in."
  ],
  confuse: [
    ["Valid transition", "Invalid transition", "Valid ones are defined in the model. Invalid ones are event/state pairs the model does not define."],
    ["All states coverage", "Valid transitions coverage", "Visiting every state is weaker: you can visit all states without taking all transitions."]
  ],
  readNext: "4.2.4"
}, de: {
  title: "Zustandsübergangstest",
  oneLine: "Modellieren Sie das System als Zustände und die Ereignisse, die zwischen ihnen wechseln, und decken Sie dann Übergänge oder Sequenzen ab.",
  tests: "<p>Ob Sie Übergänge zählen, Testfälle zählen oder beurteilen können, ob eine Ereignisfolge möglich ist.</p><p>Ein Zustandsübergangsdiagramm oder eine Zustandsübergangstabelle zeigt <strong>Zustände</strong>, <strong>Ereignisse</strong>, die einen Wechsel auslösen, und die daraus entstehenden Übergänge. Überdeckungskriterien:</p><ul><li><strong>Alle Zustände</strong> — jeder Zustand wird mindestens einmal erreicht. Das schwächste Kriterium.</li><li><strong>Gültige Übergänge (0-Switch)</strong> — jeder definierte Übergang wird mindestens einmal durchlaufen. Das übliche Prüfungsziel.</li><li><strong>Alle Übergänge</strong> — jeder gültige Übergang <em>und</em> jedes ungültige Ereignis/Zustand-Paar.</li></ul><p>In einer <strong>Zustandsübergangstabelle</strong> ist jede Zelle ein Zustand/Ereignis-Paar. Leere Zellen (oft ein Strich) sind <strong>ungültige Übergänge</strong>. Bei <em>s</em> Zuständen und <em>e</em> Ereignissen gibt es <em>s × e</em> Zellen, also ungültige Übergänge = <em>s × e</em> − definierte Übergänge.</p>",
  worked: "<p><strong>Ungültige Übergänge zählen.</strong> Drei Zustände, drei Ereignisse = 9 Zellen. Drei Zellen enthalten einen definierten Übergang, also sind <strong>6</strong> ungültig.</p><p><strong>Mindestanzahl an Testfällen für die Überdeckung gültiger Übergänge.</strong> Jeder Testfall läuft vom Startzustand zu einem Endzustand, ein Übergang in einen Endzustand beendet also seinen Testfall. Führen zwei verschiedene Übergänge beide in Endzustände, können sie sich keinen Testfall teilen. Sechs Übergänge, von denen einer direkt vom Startzustand in einen Endzustand führt und zwei weitere jeweils in einem Endzustand enden, benötigen <strong>3</strong> Testfälle — nicht einen einzigen langen Pfad.</p>",
  traps: [
    "Annehmen, ein einziger geschickter Pfad könne alles abdecken. Jeder Übergang in einen Endzustand beendet diesen Testfall.",
    "Zustände statt Übergänge zählen, wenn nach der Übergangsüberdeckung gefragt ist.",
    "Die Striche in einer Zustandsübergangstabelle ignorieren. Sie sind die ungültigen Übergänge, um die es in der Frage meist geht.",
    "Eine Sequenz für gültig halten, weil jedes Ereignis irgendwo im Diagramm vorkommt. Das Ereignis muss im tatsächlich aktuellen Zustand akzeptiert werden."
  ],
  confuse: [
    ["Gültiger Übergang", "Ungültiger Übergang", "Gültige Übergänge sind im Modell definiert. Ungültige Übergänge sind Ereignis/Zustand-Paare, die das Modell nicht definiert."],
    ["Überdeckung aller Zustände", "Überdeckung gültiger Übergänge", "Alle Zustände zu besuchen ist schwächer: Man kann alle Zustände besuchen, ohne alle Übergänge zu durchlaufen."]
  ],
  readNext: "4.2.4"
}},

"FL-4.3.1": { ch: 4, en: {
  title: "Statement testing and statement coverage",
  oneLine: "Every executable statement must be run at least once.",
  tests: "<p>Whether you can compute the coverage a set of test cases achieves, or the minimum number of test cases needed for 100%.</p><p>Coverage = executable statements executed ÷ total executable statements. Structural keywords such as <code>ELSE</code>, <code>END IF</code> and <code>END WHILE</code> are not counted as executable statements.</p><p>To find the minimum number of test cases, ask which statements are mutually exclusive. Statements in the two arms of the same <code>IF/ELSE</code> can never run in one execution, so each arm needs its own test case. Statements in <em>separate</em> decisions often can be reached by a single well-chosen input.</p>",
  worked: "<p>A loop that sums 1..n, then <code>IF total &gt; 10 THEN PRINT \"big\"</code>. One test case with n = 5 enters the loop (covering the statements inside it) and produces 15, which is greater than 10 (covering the print). Every executable statement runs, so the answer is <strong>1</strong> test case.</p><p>Contrast an <code>IF/ELSE</code> that prints \"large\" or \"small\": no single input can execute both print statements, so <strong>2</strong> are required.</p>",
  traps: [
    "Counting END IF and ELSE as statements, which inflates the denominator.",
    "Assuming each decision needs its own test case. Independent decisions can often be satisfied together.",
    "Confusing 100% statement coverage with thoroughness. It says nothing about the untaken branches or about missing code."
  ],
  confuse: [
    ["Statement coverage", "Branch coverage", "Statements run at least once, versus every decision outcome taken. Branch coverage is stronger."]
  ],
  readNext: "4.3.1"
}, de: {
  title: "Anweisungstest und Anweisungsüberdeckung",
  oneLine: "Jede ausführbare Anweisung muss mindestens einmal ausgeführt werden.",
  tests: "<p>Ob Sie die Überdeckung eines Testfallsatzes berechnen können, oder die Mindestanzahl an Testfällen für 100%.</p><p>Überdeckung = ausgeführte ausführbare Anweisungen ÷ Gesamtzahl ausführbarer Anweisungen. Strukturelle Schlüsselwörter wie <code>ELSE</code>, <code>END IF</code> und <code>END WHILE</code> zählen nicht als ausführbare Anweisungen.</p><p>Um die Mindestanzahl an Testfällen zu finden, fragen Sie, welche Anweisungen sich gegenseitig ausschließen. Anweisungen in den beiden Zweigen desselben <code>IF/ELSE</code> können nie in einer Ausführung gemeinsam laufen, jeder Zweig braucht also einen eigenen Testfall. Anweisungen in <em>getrennten</em> Entscheidungen lassen sich oft mit einer einzigen, gut gewählten Eingabe erreichen.</p>",
  worked: "<p>Eine Schleife summiert 1..n, danach <code>IF total &gt; 10 THEN PRINT \"big\"</code>. Ein Testfall mit n = 5 durchläuft die Schleife (deckt die darin enthaltenen Anweisungen ab) und ergibt 15, was größer als 10 ist (deckt die Ausgabe ab). Jede ausführbare Anweisung läuft, die Antwort ist also <strong>1</strong> Testfall.</p><p>Demgegenüber steht ein <code>IF/ELSE</code>, das \"large\" oder \"small\" ausgibt: Keine einzelne Eingabe kann beide Ausgabeanweisungen ausführen, es werden also <strong>2</strong> benötigt.</p>",
  traps: [
    "END IF und ELSE als Anweisungen mitzählen, was den Nenner aufbläht.",
    "Annehmen, jede Entscheidung brauche einen eigenen Testfall. Unabhängige Entscheidungen lassen sich oft gemeinsam erfüllen.",
    "100% Anweisungsüberdeckung mit Gründlichkeit verwechseln. Sie sagt nichts über nicht durchlaufene Zweige oder fehlenden Code aus."
  ],
  confuse: [
    ["Anweisungsüberdeckung", "Zweigüberdeckung", "Anweisungen laufen mindestens einmal, gegenüber jedem Entscheidungsausgang, der genommen wird. Die Zweigüberdeckung ist das stärkere Kriterium."]
  ],
  readNext: "4.3.1"
}},

"FL-4.3.2": { ch: 4, en: {
  title: "Branch testing and branch coverage",
  oneLine: "Every decision outcome must be taken at least once — both the true and the false exit of each decision.",
  tests: "<p>Whether you can compute branch coverage, or the minimum test cases for 100%.</p><p>A binary decision contributes <strong>two branches</strong>. Coverage = branches taken ÷ total branches. With <em>d</em> binary decisions there are 2<em>d</em> branches.</p><p>The relationship worth memorising: <strong>100% branch coverage implies 100% statement coverage, but not the reverse.</strong> Taking every branch necessarily runs every reachable statement. The reverse fails whenever a decision has an empty alternative — an <code>IF</code> with no <code>ELSE</code> — because you can execute all its statements without ever taking the false exit.</p>",
  worked: "<p><strong>Computing coverage.</strong> Two decisions = 4 branches. Test cases (x = 5, y = 20) and (x = −3, y = 20) take both outcomes of the first decision, but y &gt; 10 is true in both, so the false exit of the second decision is never taken. Three of four branches → <strong>75%</strong>, with statement coverage at 100%.</p><p><strong>Minimum test cases.</strong> Two decisions, 4 branches: (age = 10, member = true) takes both true exits, (age = 30, member = false) takes both false exits. <strong>2</strong> test cases.</p>",
  traps: [
    "Getting the implication backwards. Statement coverage does not imply branch coverage.",
    "Forgetting the false exit of an IF with no ELSE. It is still a branch and still has to be taken.",
    "Assuming one test case per branch. A single test case usually takes one branch from each of several decisions."
  ],
  confuse: [
    ["Branch coverage", "Statement coverage", "Branch is the stronger criterion and subsumes statement coverage."],
    ["Decision", "Branch", "One binary decision produces two branches."]
  ],
  readNext: "4.3.2"
}, de: {
  title: "Zweigtest und Zweigüberdeckung",
  oneLine: "Jeder Entscheidungsausgang muss mindestens einmal genommen werden — sowohl der Wahr- als auch der Falsch-Ausgang jeder Entscheidung.",
  tests: "<p>Ob Sie die Zweigüberdeckung berechnen können, oder die Mindestanzahl an Testfällen für 100%.</p><p>Eine binäre Entscheidung liefert <strong>zwei Zweige</strong>. Überdeckung = genommene Zweige ÷ Gesamtzahl der Zweige. Bei <em>d</em> binären Entscheidungen gibt es 2<em>d</em> Zweige.</p><p>Der Zusammenhang, den Sie sich merken sollten: <strong>100% Zweigüberdeckung impliziert 100% Anweisungsüberdeckung, aber nicht umgekehrt.</strong> Wer jeden Zweig nimmt, führt zwangsläufig jede erreichbare Anweisung aus. Umgekehrt gilt das nicht, sobald eine Entscheidung keine Alternative hat — ein <code>IF</code> ohne <code>ELSE</code> —, denn dann lassen sich alle seine Anweisungen ausführen, ohne je den Falsch-Ausgang zu nehmen.</p>",
  worked: "<p><strong>Überdeckung berechnen.</strong> Zwei Entscheidungen = 4 Zweige. Die Testfälle (x = 5, y = 20) und (x = −3, y = 20) nehmen beide Ausgänge der ersten Entscheidung, aber y &gt; 10 ist in beiden Fällen wahr, der Falsch-Ausgang der zweiten Entscheidung wird also nie genommen. Drei von vier Zweigen → <strong>75%</strong>, bei 100% Anweisungsüberdeckung.</p><p><strong>Mindestanzahl an Testfällen.</strong> Zwei Entscheidungen, 4 Zweige: (age = 10, member = true) nimmt beide Wahr-Ausgänge, (age = 30, member = false) nimmt beide Falsch-Ausgänge. <strong>2</strong> Testfälle.</p>",
  traps: [
    "Die Implikation umkehren. Anweisungsüberdeckung impliziert nicht die Zweigüberdeckung.",
    "Den Falsch-Ausgang eines IF ohne ELSE vergessen. Er ist trotzdem ein Zweig und muss ebenfalls genommen werden.",
    "Einen Testfall pro Zweig annehmen. Ein einzelner Testfall nimmt meist von mehreren Entscheidungen jeweils einen Zweig."
  ],
  confuse: [
    ["Zweigüberdeckung", "Anweisungsüberdeckung", "Die Zweigüberdeckung ist das stärkere Kriterium und schließt die Anweisungsüberdeckung ein."],
    ["Entscheidung", "Zweig", "Eine binäre Entscheidung erzeugt zwei Zweige."]
  ],
  readNext: "4.3.2"
}},

"FL-4.3.3": { ch: 4, en: {
  title: "Choosing white-box testing",
  oneLine: "Use white-box techniques to see how much of the code has actually run, and close the gaps cheaply while the code is in front of you.",
  tests: "<p>Why white-box techniques get used, and what they can't show. They measure structural coverage and point at the exact lines or branches never exercised, so gaps can be closed cheaply — especially at component level, where the code is available and small enough to act on immediately. What they cannot do: confirm that a requirement was correctly implemented, or catch a requirement that was never coded at all, since code that doesn't exist can't be covered.</p>",
  traps: [
    "Claiming white-box testing confirms specified requirements were implemented correctly — it says nothing about code that's missing entirely.",
    "Treating white-box techniques as a replacement for specification-based testing rather than a complement to it.",
    "Attributing integration or performance guarantees to structural coverage results."
  ],
  confuse: [
    ["White-box coverage", "Requirements coverage", "Structural coverage shows how much existing code ran; it can't show a requirement was implemented, since it can't cover code that was never written."]
  ],
  readNext: "4.3.3"
}, de: {
  title: "White-Box-Test gezielt einsetzen",
  oneLine: "Nutzen Sie White-Box-Verfahren, um zu sehen, wie viel Code tatsächlich gelaufen ist, und schließen Sie Lücken günstig, solange der Code vorliegt.",
  tests: "<p>Warum White-Box-Verfahren eingesetzt werden und was sie nicht leisten können. Sie messen die strukturelle Überdeckung und zeigen genau die Zeilen oder Zweige, die nie ausgeführt wurden, sodass sich Lücken günstig schließen lassen — besonders auf Komponentenebene, wo der Code verfügbar und klein genug ist, um sofort zu handeln. Was sie nicht können: bestätigen, dass eine Anforderung korrekt umgesetzt wurde, oder eine Anforderung erkennen, die überhaupt nicht implementiert wurde, denn Code, der nicht existiert, kann nicht überdeckt werden.</p>",
  traps: [
    "Behaupten, White-Box-Test bestätige, dass spezifizierte Anforderungen korrekt umgesetzt wurden — er sagt nichts über völlig fehlenden Code aus.",
    "White-Box-Verfahren als Ersatz für spezifikationsbasiertes Testen statt als Ergänzung dazu behandeln.",
    "Ergebnissen zur strukturellen Überdeckung Aussagen über Integration oder Performance zuschreiben."
  ],
  confuse: [
    ["White-Box-Überdeckung", "Anforderungsüberdeckung", "Strukturelle Überdeckung zeigt, wie viel vorhandener Code gelaufen ist; sie kann nicht zeigen, dass eine Anforderung umgesetzt wurde, da sie nie geschriebenen Code nicht überdecken kann."]
  ],
  readNext: "4.3.3"
}},

"FL-4.4.1": { ch: 4, en: {
  title: "Error guessing",
  oneLine: "Anticipate the specific mistakes likely here, based on experience of past defects and developer tendencies, then test for them directly.",
  tests: "<p>Spotting error guessing among the other techniques: it's the informal, knowledge-driven anticipation of a likely failure — e.g. testing a divisor of zero because that class of bug has bitten similar systems before — not a systematic derivation from a model, not a fixed list, and not rerunning old tests.</p><p>Also tested: its disadvantage. Because it comes from individual judgement rather than a formal model, coverage is hard to measure and results vary strongly with the tester's own experience.</p>",
  traps: [
    "Picking an option that's actually systematically derived, e.g. from a decision table, and calling it error guessing.",
    "Confusing it with checklist-based testing, which works a pre-built list rather than the tester's own hunch.",
    "Confusing it with regression testing — rerunning an existing test set.",
    "Claiming the disadvantage is needing source code or being limited to one test level — neither is true; the real limitation is unmeasurable coverage."
  ],
  confuse: [
    ["Error guessing", "Checklist-based testing", "Error guessing draws on the tester's judgement in the moment; checklist-based testing works through a predefined list."]
  ],
  readNext: "4.4.1"
}, de: {
  title: "Intuitive Testfallermittlung",
  oneLine: "Antizipieren Sie die hier wahrscheinlichen Fehler anhand der Erfahrung mit früheren Fehlerzuständen und typischen Entwicklertendenzen, und testen Sie gezielt danach.",
  tests: "<p>Die intuitive Testfallermittlung unter den anderen Verfahren erkennen: Sie ist das informelle, wissensgetriebene Antizipieren einer wahrscheinlichen Fehlerwirkung — etwa das Testen eines Divisors von null, weil diese Fehlerklasse ähnliche Systeme schon getroffen hat — nicht die systematische Ableitung aus einem Modell, keine feste Liste und kein erneutes Ausführen alter Tests.</p><p>Ebenfalls geprüft: ihr Nachteil. Da sie auf individuellem Urteilsvermögen statt auf einem formalen Modell beruht, lässt sich die Überdeckung schwer messen, und die Ergebnisse hängen stark von der Erfahrung des jeweiligen Testers ab.</p>",
  traps: [
    "Eine Option wählen, die tatsächlich systematisch abgeleitet ist, z. B. aus einer Entscheidungstabelle, und sie als intuitive Testfallermittlung bezeichnen.",
    "Sie mit dem checklistenbasierten Testen verwechseln, das eine vorgefertigte Liste statt der spontanen Vermutung des Testers verwendet.",
    "Sie mit dem Regressionstest verwechseln — dem erneuten Ausführen eines bestehenden Testsatzes.",
    "Als Nachteil behaupten, sie benötige Quellcode oder sei auf eine Teststufe beschränkt — beides stimmt nicht; die eigentliche Einschränkung ist die nicht messbare Überdeckung."
  ],
  confuse: [
    ["Intuitive Testfallermittlung", "Checklistenbasiertes Testen", "Die intuitive Testfallermittlung nutzt das spontane Urteilsvermögen des Testers; das checklistenbasierte Testen arbeitet eine vordefinierte Liste ab."]
  ],
  readNext: "4.4.1"
}},

"FL-4.4.2": { ch: 4, en: {
  title: "Exploratory testing",
  oneLine: "Design, execution and learning happen together, usually in a time-boxed session steered by a test charter.",
  tests: "<p>Recognizing that exploratory testing is structured, not random: the tester designs and runs tests at the same time, learning about the object as they go, typically inside a time-boxed session guided by a charter and recorded — it is neither scripted-in-advance nor undocumented free clicking.</p><p>Also tested: when it pays off — sparse documentation, tight time, need for fast feedback on something new. It fits poorly where full requirement traceability, identical repeated execution, or measured structural coverage evidence is required.</p>",
  traps: [
    "Describing exploratory testing as tests designed in advance and executed exactly as scripted — that's scripted testing.",
    "Describing it as random clicking with nothing recorded — sessions are charter-guided and documented.",
    "Picking a regulated-traceability or coverage-evidence scenario as its best-fit use case."
  ],
  confuse: [
    ["Exploratory testing", "Checklist-based testing", "Exploratory testing has no predefined list and adapts as it runs; checklist-based testing works a fixed list of items."]
  ],
  readNext: "4.4.2"
}, de: {
  title: "Exploratives Testen",
  oneLine: "Testentwurf, Testdurchführung und Lernen geschehen gleichzeitig, meist in einer zeitlich begrenzten Sitzung, die von einer Testcharta geleitet wird.",
  tests: "<p>Erkennen, dass exploratives Testen strukturiert ist, nicht zufällig: Der Tester entwirft und führt Tests gleichzeitig aus und lernt dabei mehr über das Testobjekt, typischerweise in einer zeitlich begrenzten, durch eine Testcharta geleiteten und dokumentierten Sitzung — weder im Voraus vollständig skriptiert noch undokumentiertes freies Klicken.</p><p>Ebenfalls geprüft: wann es sich lohnt — bei knapper Dokumentation, engem Zeitrahmen, dem Bedarf an schnellem Feedback zu etwas Neuem. Es passt schlecht, wenn vollständige Anforderungsnachverfolgbarkeit, identisch wiederholte Ausführung oder ein Nachweis gemessener struktureller Überdeckung verlangt wird.</p>",
  traps: [
    "Exploratives Testen als im Voraus entworfene und exakt wie skriptiert ausgeführte Tests beschreiben — das ist skriptbasiertes Testen.",
    "Es als zufälliges Klicken ohne jede Aufzeichnung beschreiben — Sitzungen werden durch eine Testcharta geleitet und dokumentiert.",
    "Ein Szenario mit regulierter Nachverfolgbarkeit oder Überdeckungsnachweis als besten Anwendungsfall wählen."
  ],
  confuse: [
    ["Exploratives Testen", "Checklistenbasiertes Testen", "Exploratives Testen hat keine vordefinierte Liste und passt sich während der Durchführung an; das checklistenbasierte Testen arbeitet eine feste Liste von Punkten ab."]
  ],
  readNext: "4.4.2"
}},

"FL-4.4.3": { ch: 4, en: {
  title: "Checklist-based testing",
  oneLine: "Work through a list of items to check, built from experience, standards or known risks — and remember that checklists go stale.",
  tests: "<p>Recognizing checklist-based testing among the other experience-based techniques: tests are designed, implemented and run to cover the conditions on a list drawn from experience, applicable standards, or known risks and failure patterns — not from the code's internal structure, and not from exhaustively combining every input.</p><p>Also tested: its known limitation. A checklist captures what mattered when it was written; as the product and its risks change the list can go stale, and a tester can fixate on the listed items and stop looking beyond them.</p>",
  traps: [
    "Describing checklist items as derived from code structure — that describes white-box testing.",
    "Describing simultaneous design-and-execution in a time-boxed session — that describes exploratory testing.",
    "Describing exhaustive coverage of every input combination — checklists are not exhaustive.",
    "Claiming checklists require source code, a complete specification, or can't be combined with other techniques — none of that is true."
  ],
  confuse: [
    ["Checklist-based testing", "Exploratory testing", "Checklist-based testing works a predefined, reusable list; exploratory testing designs tests live, session by session."]
  ],
  readNext: "4.4.3"
}, de: {
  title: "Checklistenbasiertes Testen",
  oneLine: "Arbeiten Sie eine Liste zu prüfender Punkte ab, die aus Erfahrung, Standards oder bekannten Risiken entstanden ist — und denken Sie daran, dass Checklisten veralten.",
  tests: "<p>Das checklistenbasierte Testen unter den anderen erfahrungsbasierten Verfahren erkennen: Tests werden entworfen, realisiert und durchgeführt, um die Punkte einer Liste abzudecken, die aus Erfahrung, geltenden Standards oder bekannten Risiken und Fehlermustern stammt — nicht aus der internen Struktur des Codes und nicht aus der erschöpfenden Kombination aller Eingaben.</p><p>Ebenfalls geprüft: ihre bekannte Einschränkung. Eine Checkliste hält fest, was zum Zeitpunkt ihrer Erstellung wichtig war; ändern sich Produkt und Risiken, kann die Liste veralten, und ein Tester kann sich auf die gelisteten Punkte fixieren und nicht mehr darüber hinaussehen.</p>",
  traps: [
    "Checklistenpunkte als aus der Codestruktur abgeleitet beschreiben — das beschreibt den White-Box-Test.",
    "Gleichzeitigen Entwurf und Durchführung in einer zeitlich begrenzten Sitzung beschreiben — das beschreibt exploratives Testen.",
    "Erschöpfende Überdeckung aller Eingabekombinationen beschreiben — Checklisten sind nicht erschöpfend.",
    "Behaupten, Checklisten benötigten Quellcode oder eine vollständige Spezifikation oder ließen sich nicht mit anderen Verfahren kombinieren — nichts davon stimmt."
  ],
  confuse: [
    ["Checklistenbasiertes Testen", "Exploratives Testen", "Checklistenbasiertes Testen arbeitet eine vordefinierte, wiederverwendbare Liste ab; exploratives Testen entwirft Tests live, Sitzung für Sitzung."]
  ],
  readNext: "4.4.3"
}},

"FL-4.5.1": { ch: 4, en: {
  title: "Collaborative user story writing",
  oneLine: "A user story is written together by business, development and testing, and a well-formed one is independent, negotiable, valuable, estimable, small and testable.",
  tests: "<p>Whether you know a story is a placeholder for a conversation, not a technical design document, and that writing it is a collaborative act across roles — not the sole job of the tester or any one role. Also whether you know the six characteristics of a well-formed story, and that acceptance criteria are still needed alongside it, not replaced by it.</p>",
  traps: [
    "Describing a story as containing the detailed technical design of the feature — a story captures intent, not design.",
    "Assigning story-writing to a single role, e.g. written by the tester and approved by the developer, rather than collaborative.",
    "Claiming a good story removes the need for separate acceptance criteria."
  ],
  confuse: [
    ["User story", "Acceptance criteria", "The story captures the need in a short collaborative statement; acceptance criteria spell out the conditions that make it done and testable."]
  ],
  readNext: "4.5.1"
}, de: {
  title: "User Storys gemeinsam verfassen",
  oneLine: "Eine User Story wird gemeinsam von Fachseite, Entwicklung und Test geschrieben, und eine gut formulierte Story ist unabhängig, verhandelbar, wertvoll, schätzbar, klein und testbar.",
  tests: "<p>Ob Sie wissen, dass eine Story ein Platzhalter für ein Gespräch ist, kein technisches Entwurfsdokument, und dass ihre Erstellung ein gemeinsamer Akt über Rollen hinweg ist — nicht allein Aufgabe des Testers oder einer bestimmten Rolle. Außerdem, ob Sie die sechs Merkmale einer gut formulierten Story kennen und wissen, dass daneben weiterhin Abnahmekriterien benötigt werden, die durch die Story nicht ersetzt werden.</p>",
  traps: [
    "Eine Story als Trägerin des detaillierten technischen Entwurfs des Features beschreiben — eine Story hält die Absicht fest, nicht den Entwurf.",
    "Das Verfassen der Story einer einzelnen Rolle zuweisen, z. B. vom Tester geschrieben und vom Entwickler abgenommen, statt gemeinsam.",
    "Behaupten, eine gute Story mache separate Abnahmekriterien überflüssig."
  ],
  confuse: [
    ["User Story", "Abnahmekriterien", "Die Story hält den Bedarf in einer kurzen, gemeinsam erarbeiteten Aussage fest; Abnahmekriterien legen die Bedingungen fest, die sie fertig und testbar machen."]
  ],
  readNext: "4.5.1"
}},

"FL-4.5.2": { ch: 4, en: {
  title: "Acceptance criteria",
  oneLine: "Acceptance criteria define a user story's scope and give an objective, testable basis for deciding when it's done, often written as given/when/then.",
  tests: "<p>Why acceptance criteria exist: they bound what the story does and doesn't cover, support negotiation between the team and stakeholders, and give the objective basis for both acceptance tests and the definition of done. Also whether you can recognize the given/when/then shape — precondition, action, expected outcome — against a vague quality statement, a user-story sentence, or an implementation constraint dressed up as a criterion.</p>",
  traps: [
    "Choosing an unmeasurable quality statement, e.g. must be fast and easy to use, as the acceptance criterion.",
    "Confusing the user-story sentence itself with an acceptance criterion.",
    "Picking an implementation detail, e.g. naming a specific service to reuse, as if it were an acceptance criterion.",
    "Claiming acceptance criteria measure code coverage, remove the need for a test plan, or exist so the product owner can estimate effort."
  ],
  confuse: [
    ["Given/when/then criterion", "Implementation constraint", "A given/when/then criterion states an observable, testable outcome; an implementation constraint prescribes how to build it, which isn't itself testable behavior."]
  ],
  readNext: "4.5.2"
}, de: {
  title: "Abnahmekriterien",
  oneLine: "Abnahmekriterien legen den Umfang einer User Story fest und liefern eine objektive, testbare Grundlage für die Entscheidung, wann sie fertig ist — oft formuliert als given/when/then.",
  tests: "<p>Warum es Abnahmekriterien gibt: Sie grenzen ab, was die Story leistet und was nicht, unterstützen die Abstimmung zwischen Team und Stakeholdern und liefern die objektive Grundlage sowohl für die Abnahmetests als auch für die Definition of Done. Außerdem, ob Sie die given/when/then-Form erkennen — Vorbedingung, Aktion, erwartetes Ergebnis — im Unterschied zu einer vagen Qualitätsaussage, einem User-Story-Satz oder einer als Kriterium getarnten Implementierungsvorgabe.</p>",
  traps: [
    "Eine nicht messbare Qualitätsaussage wählen, z. B. muss schnell und einfach zu bedienen sein, als Abnahmekriterium.",
    "Den User-Story-Satz selbst mit einem Abnahmekriterium verwechseln.",
    "Ein Implementierungsdetail wählen, z. B. einen bestimmten wiederzuverwendenden Dienst zu benennen, als wäre es ein Abnahmekriterium.",
    "Behaupten, Abnahmekriterien würden die Codeüberdeckung messen, ein Testkonzept überflüssig machen oder existieren, damit der Product Owner den Aufwand schätzen kann."
  ],
  confuse: [
    ["Given/when/then-Kriterium", "Implementierungsvorgabe", "Ein given/when/then-Kriterium beschreibt ein beobachtbares, testbares Ergebnis; eine Implementierungsvorgabe schreibt vor, wie gebaut wird, was selbst kein testbares Verhalten ist."]
  ],
  readNext: "4.5.2"
}},

"FL-4.5.3": { ch: 4, en: {
  title: "Acceptance test-driven development",
  oneLine: "Turn each acceptance criterion into a test before the code is written, and let those tests drive development.",
  tests: "<p>Whether you can pick the test that genuinely comes from an acceptance criterion of the story in front of you.</p><p>In ATDD the team writes acceptance tests collaboratively — business, development and testing — from the user story and its acceptance criteria, <em>before</em> implementation. The tests are usually expressed in the given/when/then form, and they become both the specification and the regression suite.</p><p>To answer these questions, read the acceptance criteria and check each option against them. Exactly one option will test a stated criterion. The others fail for predictable reasons.</p>",
  worked: "<p>Criteria include 'a customer may save at most three payment cards' and 'only the last four digits are displayed'.</p><ul><li>Testing that a customer with three saved cards cannot save a fourth → <strong>tests the third criterion. Correct.</strong></li><li>Testing that the card table is indexed on customer id → an implementation detail, not in the story.</li><li>Testing that the delivery address can be changed → belongs to a different story.</li><li>Testing that the full card number is shown → <em>contradicts</em> a criterion.</li></ul>",
  traps: [
    "Choosing the technically sophisticated option. Database and performance details are outside the story.",
    "Choosing an option that contradicts a criterion. Read them against the list rather than against intuition.",
    "Choosing something plausible about the same feature area that no criterion actually states."
  ],
  confuse: [
    ["TDD", "ATDD", "TDD is a developer cycle around unit tests. ATDD works from acceptance criteria, written collaboratively."],
    ["BDD", "ATDD", "BDD emphasises expressing behaviour in readable language; ATDD emphasises deriving the tests from acceptance criteria. They overlap heavily."]
  ],
  readNext: "4.5.3"
}, de: {
  title: "Abnahmetestgetriebene Entwicklung",
  oneLine: "Verwandeln Sie jedes Abnahmekriterium in einen Test, bevor der Code geschrieben wird, und lassen Sie diese Tests die Entwicklung steuern.",
  tests: "<p>Ob Sie den Test auswählen können, der tatsächlich aus einem Abnahmekriterium der vorliegenden Story stammt.</p><p>Bei der abnahmetestgetriebenen Entwicklung (ATDD) erstellt das Team gemeinsam — Fachseite, Entwicklung und Test — Abnahmetests aus der User Story und ihren Abnahmekriterien, <em>bevor</em> implementiert wird. Die Tests werden meist in der given/when/then-Form ausgedrückt und werden sowohl zur Spezifikation als auch zur Regressionstestsuite.</p><p>Um diese Fragen zu beantworten, lesen Sie die Abnahmekriterien und prüfen Sie jede Option dagegen. Genau eine Option testet ein angegebenes Kriterium. Die anderen scheitern aus vorhersehbaren Gründen.</p>",
  worked: "<p>Die Kriterien enthalten unter anderem 'ein Kunde darf höchstens drei Zahlungskarten speichern' und 'es werden nur die letzten vier Ziffern angezeigt'.</p><ul><li>Zu testen, dass ein Kunde mit drei gespeicherten Karten keine vierte speichern kann → <strong>testet das dritte Kriterium. Richtig.</strong></li><li>Zu testen, dass die Kartentabelle nach Kunden-ID indiziert ist → ein Implementierungsdetail, nicht Teil der Story.</li><li>Zu testen, dass die Lieferadresse geändert werden kann → gehört zu einer anderen Story.</li><li>Zu testen, dass die vollständige Kartennummer angezeigt wird → <em>widerspricht</em> einem Kriterium.</li></ul>",
  traps: [
    "Die technisch anspruchsvollste Option wählen. Datenbank- und Performance-Details liegen außerhalb der Story.",
    "Eine Option wählen, die einem Kriterium widerspricht. Prüfen Sie sie gegen die Liste, nicht gegen Ihre Intuition.",
    "Etwas Plausibles zum selben Funktionsbereich wählen, das kein Kriterium tatsächlich festlegt."
  ],
  confuse: [
    ["TDD", "ATDD", "TDD ist ein Entwicklerzyklus rund um Unit-Tests. ATDD arbeitet aus gemeinsam erarbeiteten Abnahmekriterien."],
    ["BDD", "ATDD", "BDD betont, Verhalten in verständlicher Sprache auszudrücken; ATDD betont, die Tests aus Abnahmekriterien abzuleiten. Sie überschneiden sich stark."]
  ],
  readNext: "4.5.3"
}},

/* ============================ Chapter 5 ============================ */

"FL-5.1.1": { ch: 5, en: {
  title: "Test plan purpose and content",
  oneLine: "A test plan documents how the test objectives will be reached, and becomes the yardstick you check progress against.",
  tests: "<p>Whether you can tell test-plan content apart from things that live elsewhere. A test plan typically covers <strong>scope, objectives, schedule, resources, and entry/exit criteria</strong> — the approach, not the execution detail.</p><ul><li>Detailed test steps and expected results live in <strong>test cases/procedures</strong>, not the plan.</li><li>Anomalies live in the <strong>defect management system</strong>.</li><li>Script source code is <strong>testware</strong>, not plan content.</li></ul><p>A plan is not frozen at kickoff: it is <strong>updated when the underlying risk picture or scope genuinely changes</strong>, not for every individual test result.</p>",
  traps: [
    "Offering detailed test case steps or expected results as 'test plan content' — that belongs to test cases/procedures.",
    "Offering a defect list or a script's source code as plan content.",
    "Treating a single failed test, a finished assignment, or a naming-convention decision as a reason to revise the plan — only a real change in risk, scope or objectives justifies that."
  ],
  confuse: [
    ["Test plan", "Test policy / test strategy", "A policy states an organization's overall testing principles; a strategy is the generic, reusable approach; a plan is the concrete, project- or level-specific schedule and resourcing built from them."]
  ],
  readNext: "5.1.1"
}, de: {
  title: "Zweck und Inhalt des Testkonzepts",
  oneLine: "Ein Testkonzept dokumentiert, wie die Testziele erreicht werden sollen, und wird zum Maßstab, an dem der Fortschritt gemessen wird.",
  tests: "<p>Ob Sie Inhalte des Testkonzepts von Dingen unterscheiden können, die anderswo dokumentiert werden. Ein Testkonzept umfasst typischerweise <strong>Umfang, Ziele, Zeitplan, Ressourcen sowie Eingangs-/Endekriterien</strong> — das Vorgehen, nicht die Ausführungsdetails.</p><ul><li>Detaillierte Testschritte und erwartete Ergebnisse gehören in <strong>Testfälle/Testabläufe</strong>, nicht ins Testkonzept.</li><li>Anomalien werden im <strong>Fehlermanagementsystem</strong> erfasst.</li><li>Der Quellcode von Skripten ist <strong>Testmittel</strong>, kein Bestandteil des Testkonzepts.</li></ul><p>Ein Testkonzept ist beim Projektstart nicht in Stein gemeißelt: Es wird <strong>angepasst, wenn sich das zugrunde liegende Risikobild oder der Umfang tatsächlich ändert</strong>, nicht bei jedem einzelnen Testergebnis.</p>",
  traps: [
    "Detaillierte Testfallschritte oder erwartete Ergebnisse als 'Inhalt des Testkonzepts' anbieten — das gehört in Testfälle/Testabläufe.",
    "Eine Fehlerliste oder den Quellcode eines Skripts als Inhalt des Testkonzepts anbieten.",
    "Einen einzelnen fehlgeschlagenen Test, eine erledigte Aufgabe oder eine Namenskonventions-Entscheidung als Grund für eine Überarbeitung des Testkonzepts werten — nur eine tatsächliche Änderung von Risiko, Umfang oder Zielen rechtfertigt das."
  ],
  confuse: [
    ["Testkonzept", "Testrichtlinie / Teststrategie", "Eine Testrichtlinie legt die übergeordneten Testgrundsätze einer Organisation fest; eine Teststrategie ist der generische, wiederverwendbare Ansatz; ein Testkonzept ist der konkrete, projekt- oder stufenspezifische Zeit- und Ressourcenplan, der daraus abgeleitet wird."]
  ],
  readNext: "5.1.1"
}},

"FL-5.1.2": { ch: 5, en: {
  title: "The tester's role in iteration and release planning",
  oneLine: "Testers shape release planning by making stories testable and surfacing risk and effort — they don't decide or approve the release.",
  tests: "<p>What a tester actually contributes when a release or iteration is being planned:</p><ul><li>Helping write <strong>testable user stories with clear acceptance criteria</strong>.</li><li>Taking part in <strong>risk identification</strong> for the stories going into the release.</li><li>Contributing to <strong>test effort estimation</strong>.</li></ul><p>Deciding which stories go into a release, and formally accepting the release on behalf of the business, are <strong>product owner / business</strong> responsibilities, not the tester's.</p>",
  traps: [
    "Assigning the tester decision rights over release scope ('deciding which stories are included') — that is the product owner's call.",
    "Assigning the tester sign-off authority ('approving the release') — testers inform the decision, they don't make it.",
    "Assigning the tester a development task (writing code) as their planning contribution."
  ],
  confuse: [
    ["Tester's input", "Product owner's decision", "The tester supplies testability, risk and effort information; the product owner uses it to decide scope and to accept the release."]
  ],
  readNext: "5.1.2"
}, de: {
  title: "Die Rolle des Testers bei der Iterations- und Releaseplanung",
  oneLine: "Tester prägen die Releaseplanung, indem sie Storys testbar machen und Risiko sowie Aufwand sichtbar machen — sie entscheiden über das Release nicht und geben es nicht frei.",
  tests: "<p>Was ein Tester bei der Planung eines Release oder einer Iteration tatsächlich beiträgt:</p><ul><li>Mitwirkung beim Formulieren <strong>testbarer User Storys mit klaren Abnahmekriterien</strong>.</li><li>Teilnahme an der <strong>Risikoidentifikation</strong> für die Storys, die ins Release aufgenommen werden.</li><li>Mitwirkung bei der <strong>Testaufwandsschätzung</strong>.</li></ul><p>Zu entscheiden, welche Storys in ein Release aufgenommen werden, und das Release formell im Namen des Fachbereichs abzunehmen, sind Aufgaben des <strong>Product Owners bzw. des Fachbereichs</strong>, nicht des Testers.</p>",
  traps: [
    "Dem Tester Entscheidungsbefugnis über den Release-Umfang zuschreiben ('entscheidet, welche Storys enthalten sind') — das ist Sache des Product Owners.",
    "Dem Tester die Freigabebefugnis zuschreiben ('gibt das Release frei') — Tester liefern Informationen für die Entscheidung, treffen sie aber nicht selbst.",
    "Dem Tester eine Entwicklungsaufgabe (Code schreiben) als Beitrag zur Planung zuschreiben."
  ],
  confuse: [
    ["Beitrag des Testers", "Entscheidung des Product Owners", "Der Tester liefert Informationen zu Testbarkeit, Risiko und Aufwand; der Product Owner nutzt sie, um über den Umfang zu entscheiden und das Release abzunehmen."]
  ],
  readNext: "5.1.2"
}},

"FL-5.1.3": { ch: 5, en: {
  title: "Entry criteria and exit criteria",
  oneLine: "Entry criteria say when it makes sense to start; exit criteria say when it is reasonable to stop.",
  tests: "<p>Whether you can classify a given criterion. The test is simple: does it describe a <em>precondition</em> or an <em>achieved state</em>?</p><p><strong>Entry criteria</strong> — the environment is available and verified, test data is prepared and loaded, the build is deployed, the test basis is stable enough to design against. Without them, testing starts and immediately stalls.</p><p><strong>Exit criteria</strong> (in agile contexts often folded into the definition of done) — planned coverage achieved, planned tests executed, number of unresolved defects below an agreed threshold, residual risk accepted, estimated remaining defects low enough.</p><p>Note what is <em>not</em> an exit criterion: 'we ran out of time' and 'the budget is gone' are common realities, but they are not criteria.</p>",
  traps: [
    "Classifying 'testers are trained on the tool' as an exit criterion. It is a precondition, so it is an entry criterion.",
    "Classifying 'test data is loaded' as an exit criterion for the same reason.",
    "Treating running out of time as an exit criterion.",
    "In select-TWO questions, picking two criteria from the same side without checking the other options."
  ],
  confuse: [
    ["Entry criteria", "Exit criteria", "Preconditions for starting, versus the state that permits stopping."],
    ["Exit criteria", "Definition of done", "The same idea in different vocabularies; agile teams usually use the definition of done."]
  ],
  readNext: "5.1.3"
}, de: {
  title: "Eingangskriterien und Endekriterien",
  oneLine: "Eingangskriterien legen fest, wann ein sinnvoller Start möglich ist; Endekriterien legen fest, wann ein Abschluss vertretbar ist.",
  tests: "<p>Ob Sie ein gegebenes Kriterium richtig einordnen können. Die Prüfung ist einfach: Beschreibt es eine <em>Voraussetzung</em> oder einen <em>erreichten Zustand</em>?</p><p><strong>Eingangskriterien</strong> — die Testumgebung ist verfügbar und geprüft, Testdaten sind vorbereitet und geladen, der Build ist bereitgestellt, die Testbasis ist stabil genug, um Tests danach zu entwerfen. Ohne sie beginnt der Test und kommt sofort ins Stocken.</p><p><strong>Endekriterien</strong> (in agilen Kontexten oft in die Definition of Done integriert) — geplante Überdeckung erreicht, geplante Tests durchgeführt, Anzahl ungelöster Fehler unter einem vereinbarten Schwellenwert, Restrisiko akzeptiert, geschätzte Anzahl verbleibender Fehler ausreichend niedrig.</p><p>Beachten Sie, was <em>kein</em> Endekriterium ist: 'Die Zeit ist abgelaufen' und 'das Budget ist aufgebraucht' sind häufige Realitäten, aber keine Kriterien.</p>",
  traps: [
    "'Die Tester sind im Werkzeug geschult' als Endekriterium einordnen. Es handelt sich um eine Voraussetzung, also um ein Eingangskriterium.",
    "'Testdaten sind geladen' aus demselben Grund als Endekriterium einordnen.",
    "Zeitmangel als Endekriterium werten.",
    "Bei Aufgaben mit 'Wählen Sie ZWEI' zwei Kriterien von derselben Seite wählen, ohne die übrigen Optionen zu prüfen."
  ],
  confuse: [
    ["Eingangskriterien", "Endekriterien", "Voraussetzungen für den Start gegenüber dem Zustand, der den Abschluss erlaubt."],
    ["Endekriterien", "Definition of Done", "Derselbe Gedanke in anderer Terminologie; agile Teams verwenden meist die Definition of Done."]
  ],
  readNext: "5.1.3"
}},

"FL-5.1.4": { ch: 5, en: {
  title: "Estimating the test effort",
  oneLine: "Estimate from past data, from expert judgement, or from a weighted three-point formula.",
  tests: "<p>Whether you can apply the right technique and do the arithmetic.</p><p><strong>Metrics-based</strong> — apply data from comparable past projects. If testing has historically been 25% of total effort and the project is estimated at 400 person-days, the test effort is 0.25 × 400 = <strong>100</strong> person-days.</p><p><strong>Expert-based</strong> — the owners of the tasks, or experts in them, estimate directly.</p><p><strong>Three-point estimation</strong> — a weighted average of an optimistic (a), most likely (m) and pessimistic (b) estimate:</p><p style=\"text-align:center\"><strong>E = (a + 4m + b) ÷ 6</strong></p><p>The most likely value carries four times the weight of either extreme, which is what makes this different from a plain average.</p>",
  worked: "<p>a = 6, m = 9, b = 24 person-days.</p><p>E = (6 + 4×9 + 24) ÷ 6 = (6 + 36 + 24) ÷ 6 = 66 ÷ 6 = <strong>11</strong> person-days.</p><p>The plain arithmetic mean would be (6 + 9 + 24) ÷ 3 = 13, and it appears as a distractor in almost every question of this type.</p>",
  traps: [
    "Using the simple average instead of the weighted formula. It is always offered as an option.",
    "Dividing by 3 rather than 6 after multiplying the most likely value by 4.",
    "Answering with the most likely value on its own.",
    "In metrics-based questions, giving the remaining project effort (300 above) instead of the test effort."
  ],
  confuse: [
    ["Three-point estimate", "Arithmetic mean", "The three-point estimate weights the most likely value by four and divides by six."],
    ["Metrics-based", "Expert-based", "Metrics-based uses data from past projects. Expert-based uses the judgement of people who know the work."]
  ],
  readNext: "5.1.4"
}, de: {
  title: "Den Testaufwand schätzen",
  oneLine: "Schätzen Sie anhand vergangener Daten, mittels Expertenurteil oder mit einer gewichteten Dreipunktformel.",
  tests: "<p>Ob Sie das richtige Verfahren anwenden und korrekt rechnen können.</p><p><strong>Kennzahlenbasiert</strong> — Nutzung von Daten aus vergleichbaren früheren Projekten. Lag der Testaufwand historisch bei 25 % des Gesamtaufwands und wird das Projekt auf 400 Personentage geschätzt, beträgt der Testaufwand 0,25 × 400 = <strong>100</strong> Personentage.</p><p><strong>Expertenbasiert</strong> — die Verantwortlichen für die Aufgaben oder Experten darin schätzen direkt.</p><p><strong>Dreipunktschätzung</strong> — ein gewichteter Mittelwert aus einer optimistischen (a), einer wahrscheinlichsten (m) und einer pessimistischen (b) Schätzung:</p><p style=\"text-align:center\"><strong>E = (a + 4m + b) ÷ 6</strong></p><p>Der wahrscheinlichste Wert wird vierfach gegenüber jedem der beiden Extremwerte gewichtet — das unterscheidet diese Formel von einem einfachen Mittelwert.</p>",
  worked: "<p>a = 6, m = 9, b = 24 Personentage.</p><p>E = (6 + 4×9 + 24) ÷ 6 = (6 + 36 + 24) ÷ 6 = 66 ÷ 6 = <strong>11</strong> Personentage.</p><p>Das einfache arithmetische Mittel wäre (6 + 9 + 24) ÷ 3 = 13 und taucht in fast jeder Frage dieses Typs als Ablenker auf.</p>",
  traps: [
    "Das einfache Mittel statt der gewichteten Formel verwenden. Es wird immer als Option angeboten.",
    "Nach der Vervierfachung des wahrscheinlichsten Werts durch 3 statt durch 6 teilen.",
    "Allein den wahrscheinlichsten Wert als Antwort angeben.",
    "Bei kennzahlenbasierten Fragen den verbleibenden Projektaufwand (oben 300) statt des Testaufwands angeben."
  ],
  confuse: [
    ["Dreipunktschätzung", "Arithmetisches Mittel", "Die Dreipunktschätzung gewichtet den wahrscheinlichsten Wert vierfach und teilt durch sechs."],
    ["Kennzahlenbasiert", "Expertenbasiert", "Kennzahlenbasiert nutzt Daten aus früheren Projekten. Expertenbasiert nutzt das Urteil von Personen, die die Arbeit kennen."]
  ],
  readNext: "5.1.4"
}},

"FL-5.1.5": { ch: 5, en: {
  title: "Test case prioritization",
  oneLine: "Order tests by risk, coverage or how often something is used — then honour the dependencies.",
  tests: "<p>Whether you can produce an execution order from a table. Three strategies:</p><ul><li><strong>Risk-based</strong> — highest risk level first, where risk level combines likelihood and impact.</li><li><strong>Coverage-based</strong> — the test that adds the most new coverage first.</li><li><strong>Requirements-based</strong> — driven by the priority of the requirement being covered.</li></ul><p>Whatever the strategy, <strong>logical dependencies override priority</strong>. A high-priority test that depends on a lower-priority one cannot run first, so the prerequisite runs earlier than its own priority would suggest.</p><p>The method: at each step, list the test cases whose prerequisites are already satisfied, and from that list pick the highest priority.</p>",
  worked: "<p><strong>Dependencies.</strong> TC001 (priority 2, no dependency), TC002 (1, needs TC001), TC003 (3, needs TC002), TC004 (2, needs TC002).</p><p>Step 1: only TC001 is available → run it. Step 2: only TC002 is available → run it. Step 3: TC003 and TC004 are both available; TC004 has the better priority → <strong>TC004 is third</strong>.</p><p><strong>Risk level.</strong> Likelihood × impact: TC1 = 5×2 = 10, TC2 = 3×4 = 12, TC3 = 2×5 = 10, TC4 = 4×4 = 16. Descending order: TC4, then <strong>TC2 second</strong>, then TC1 and TC3.</p>",
  traps: [
    "Sorting by priority and ignoring dependencies. That is the single most common error.",
    "Assuming a smaller priority number means lower priority. Smaller usually means more important — check the stem.",
    "Reading only the likelihood column when risk level needs both factors.",
    "Miscounting the position when asked for the second or third item rather than the first."
  ],
  confuse: [
    ["Priority", "Dependency", "Priority expresses what you would like to run first. A dependency dictates what you are able to run first."],
    ["Risk level", "Likelihood", "Risk level combines likelihood with impact; likelihood alone is only half of it."]
  ],
  readNext: "5.1.5"
}, de: {
  title: "Priorisierung von Testfällen",
  oneLine: "Ordnen Sie Tests nach Risiko, Überdeckung oder Nutzungshäufigkeit — und beachten Sie dabei die Abhängigkeiten.",
  tests: "<p>Ob Sie aus einer Tabelle eine Ausführungsreihenfolge ableiten können. Drei Strategien:</p><ul><li><strong>Risikobasiert</strong> — höchste Risikohöhe zuerst, wobei sich die Risikohöhe aus Eintrittswahrscheinlichkeit und Schadensausmaß zusammensetzt.</li><li><strong>Überdeckungsbasiert</strong> — der Test mit dem größten Zuwachs an neuer Überdeckung zuerst.</li><li><strong>Anforderungsbasiert</strong> — bestimmt durch die Priorität der abgedeckten Anforderung.</li></ul><p>Unabhängig von der Strategie gilt: <strong>logische Abhängigkeiten stehen über der Priorität</strong>. Ein hochpriorer Test, der von einem niedriger priorisierten abhängt, kann nicht zuerst laufen — die Voraussetzung läuft also früher, als es ihre eigene Priorität nahelegen würde.</p><p>Die Methode: Listen Sie bei jedem Schritt die Testfälle auf, deren Voraussetzungen bereits erfüllt sind, und wählen Sie daraus den mit der höchsten Priorität.</p>",
  worked: "<p><strong>Abhängigkeiten.</strong> TC001 (Priorität 2, keine Abhängigkeit), TC002 (1, benötigt TC001), TC003 (3, benötigt TC002), TC004 (2, benötigt TC002).</p><p>Schritt 1: Nur TC001 ist verfügbar → wird ausgeführt. Schritt 2: Nur TC002 ist verfügbar → wird ausgeführt. Schritt 3: TC003 und TC004 sind beide verfügbar; TC004 hat die bessere Priorität → <strong>TC004 steht an dritter Stelle</strong>.</p><p><strong>Risikohöhe.</strong> Eintrittswahrscheinlichkeit × Schadensausmaß: TC1 = 5×2 = 10, TC2 = 3×4 = 12, TC3 = 2×5 = 10, TC4 = 4×4 = 16. Absteigende Reihenfolge: TC4, dann <strong>TC2 an zweiter Stelle</strong>, dann TC1 und TC3.</p>",
  traps: [
    "Nach Priorität sortieren und dabei Abhängigkeiten ignorieren. Das ist der mit Abstand häufigste Fehler.",
    "Annehmen, eine kleinere Prioritätszahl bedeute niedrigere Priorität. Meist bedeutet kleiner wichtiger — prüfen Sie die Aufgabenstellung.",
    "Nur die Spalte der Eintrittswahrscheinlichkeit lesen, obwohl die Risikohöhe beide Faktoren benötigt.",
    "Sich bei der Position vertun, wenn nach dem zweiten oder dritten statt dem ersten Element gefragt wird."
  ],
  confuse: [
    ["Priorität", "Abhängigkeit", "Priorität drückt aus, was Sie gerne zuerst ausführen würden. Eine Abhängigkeit bestimmt, was Sie zuerst ausführen können."],
    ["Risikohöhe", "Eintrittswahrscheinlichkeit", "Die Risikohöhe verbindet Eintrittswahrscheinlichkeit mit Schadensausmaß; die Eintrittswahrscheinlichkeit allein ist nur die halbe Größe."]
  ],
  readNext: "5.1.5"
}},

"FL-5.1.6": { ch: 5, en: {
  title: "The test pyramid",
  oneLine: "Put many fast, isolated tests at the bottom and progressively fewer, slower tests as scope grows toward the top.",
  tests: "<p>Whether you understand what the pyramid shape actually claims: as you move <strong>up</strong> through the levels (component → integration → system/end-to-end), tests get <strong>fewer in number, broader in scope and slower to run</strong>. Moving <strong>down</strong>, tests get more numerous, narrower and faster — the bulk of automated tests should sit at the component level.</p><p>The pyramid says nothing about the <strong>order</strong> tests are executed in, and it does not prescribe equal numbers at every layer.</p>",
  traps: [
    "Inverting the shape — claiming higher levels should have more tests than lower ones.",
    "Reading the pyramid as an execution sequence ('the order the levels have to run in') rather than a distribution of test volume and speed.",
    "Claiming every layer should hold the same number of tests, which erases the point of the shape."
  ],
  readNext: "5.1.6"
}, de: {
  title: "Die Testpyramide",
  oneLine: "Legen Sie viele schnelle, isolierte Tests an die Basis und zunehmend weniger, langsamere Tests, je größer der Umfang nach oben hin wird.",
  tests: "<p>Ob Sie verstehen, was die Pyramidenform tatsächlich aussagt: Je weiter Sie durch die Teststufen <strong>nach oben</strong> gehen (Komponente → Integration → System/Ende-zu-Ende), desto <strong>weniger, umfassender und langsamer</strong> werden die Tests. <strong>Nach unten</strong> hin werden die Tests zahlreicher, enger gefasst und schneller — der Großteil der automatisierten Tests sollte auf Komponentenebene liegen.</p><p>Die Pyramide sagt nichts über die <strong>Reihenfolge</strong> der Testausführung aus und schreibt keine gleiche Anzahl auf jeder Ebene vor.</p>",
  traps: [
    "Die Form umkehren — behaupten, höhere Stufen sollten mehr Tests enthalten als niedrigere.",
    "Die Pyramide als Ausführungsreihenfolge lesen ('die Reihenfolge, in der die Stufen laufen müssen') statt als Verteilung von Testmenge und -geschwindigkeit.",
    "Behaupten, jede Ebene solle die gleiche Anzahl an Tests enthalten — das hebt den eigentlichen Sinn der Form auf."
  ],
  readNext: "5.1.6"
}},

"FL-5.1.7": { ch: 5, en: {
  title: "Agile testing quadrants",
  oneLine: "Two axes — business-facing vs technology-facing, and supporting the team vs critiquing the product — sort every kind of agile test into one of four quadrants.",
  tests: "<p>Whether you can place a named test type in its quadrant using both axes at once:</p><ul><li><strong>Q1 — technology-facing, supports the team:</strong> component tests, component integration tests (usually automated).</li><li><strong>Q2 — business-facing, supports the team:</strong> functional tests, story tests, prototypes — agreed with the product owner.</li><li><strong>Q3 — business-facing, critiques the product:</strong> exploratory testing, usability testing, user acceptance testing.</li><li><strong>Q4 — technology-facing, critiques the product:</strong> performance efficiency, security, reliability and other quality-attribute tests.</li></ul><p>A test type's quadrant is fixed by <em>both</em> its audience and its purpose, not by one alone.</p>",
  traps: [
    "Placing component/component integration tests in Q2 instead of Q1 — they support the team, but they are technology-facing, not business-facing.",
    "Placing performance or security testing in Q1 or Q3 by focusing only on one axis (technical) and forgetting it critiques the product rather than supporting build activity.",
    "Placing exploratory testing in a technology-facing quadrant — it is business-facing even though testers, not business people, usually perform it."
  ],
  confuse: [
    ["Q1 (technology-facing, supports team)", "Q4 (technology-facing, critiques product)", "Both are technical, but Q1 gives the team fast build-time feedback (component tests); Q4 evaluates a working product against quality attributes (performance, security)."]
  ],
  readNext: "5.1.7"
}, de: {
  title: "Die agilen Testquadranten",
  oneLine: "Zwei Achsen — geschäftsorientiert vs. technologieorientiert sowie unterstützt das Team vs. kritisiert das Produkt — ordnen jede Art von agilem Test einem von vier Quadranten zu.",
  tests: "<p>Ob Sie eine benannte Testart unter Berücksichtigung beider Achsen gleichzeitig ihrem Quadranten zuordnen können:</p><ul><li><strong>Q1 — technologieorientiert, unterstützt das Team:</strong> Komponententests, Komponentenintegrationstests (meist automatisiert).</li><li><strong>Q2 — geschäftsorientiert, unterstützt das Team:</strong> funktionale Tests, Story-Tests, Prototypen — abgestimmt mit dem Product Owner.</li><li><strong>Q3 — geschäftsorientiert, kritisiert das Produkt:</strong> exploratives Testen, Usability-Tests, Abnahmetests durch die Anwender.</li><li><strong>Q4 — technologieorientiert, kritisiert das Produkt:</strong> Tests der Leistungseffizienz, der Sicherheit, der Zuverlässigkeit und anderer Qualitätsmerkmale.</li></ul><p>Der Quadrant einer Testart ergibt sich <em>sowohl</em> aus ihrer Zielgruppe <em>als auch</em> aus ihrem Zweck, nicht aus nur einem von beiden.</p>",
  traps: [
    "Komponenten-/Komponentenintegrationstests in Q2 statt Q1 einordnen — sie unterstützen das Team, sind aber technologieorientiert, nicht geschäftsorientiert.",
    "Leistungs- oder Sicherheitstests in Q1 oder Q3 einordnen, indem man sich nur auf eine Achse (technisch) konzentriert und vergisst, dass sie das Produkt kritisieren statt die Erstellung zu unterstützen.",
    "Exploratives Testen in einen technologieorientierten Quadranten einordnen — es ist geschäftsorientiert, auch wenn es meist von Testern und nicht von Fachbereichsvertretern durchgeführt wird."
  ],
  confuse: [
    ["Q1 (technologieorientiert, unterstützt das Team)", "Q4 (technologieorientiert, kritisiert das Produkt)", "Beide sind technisch, doch Q1 gibt dem Team schnelles Feedback während der Erstellung (Komponententests); Q4 bewertet ein funktionsfähiges Produkt anhand von Qualitätsmerkmalen (Leistung, Sicherheit)."]
  ],
  readNext: "5.1.7"
}},

"FL-5.2.1": { ch: 5, en: {
  title: "What a risk is",
  oneLine: "A risk is something that hasn't happened yet, defined by its likelihood and its impact.",
  tests: "<p>Whether you can separate a risk from things that have already occurred. A risk is a <strong>potential</strong> event with negative consequences; combining how <strong>likely</strong> it is with how <strong>bad</strong> it would be gives its <strong>risk level</strong>.</p><p>An open defect, a production failure, or a test case that has already failed are all things that <em>already happened</em> — evidence a risk materialized, not the risk itself.</p>",
  traps: [
    "Defining risk as an unfixed defect or a past production failure — those are realized outcomes, not potential ones.",
    "Defining risk using only likelihood or only impact, dropping the other half of the definition."
  ],
  confuse: [
    ["Risk", "Defect", "A risk is a potential future event described by likelihood and impact; a defect is an actual flaw that already exists in the work product."]
  ],
  readNext: "5.2.1"
}, de: {
  title: "Was ein Risiko ist",
  oneLine: "Ein Risiko ist etwas, das noch nicht eingetreten ist, definiert durch seine Eintrittswahrscheinlichkeit und sein Schadensausmaß.",
  tests: "<p>Ob Sie ein Risiko von bereits eingetretenen Dingen unterscheiden können. Ein Risiko ist ein <strong>mögliches</strong> Ereignis mit negativen Folgen; die Verbindung von <strong>Eintrittswahrscheinlichkeit</strong> und <strong>Schadensausmaß</strong> ergibt seine <strong>Risikohöhe</strong>.</p><p>Ein offener Fehler, ein Ausfall in der Produktion oder ein bereits fehlgeschlagener Testfall sind alles Dinge, die <em>bereits eingetreten sind</em> — Belege dafür, dass sich ein Risiko realisiert hat, nicht das Risiko selbst.</p>",
  traps: [
    "Ein Risiko als unbehobenen Fehler oder vergangenen Produktionsausfall definieren — das sind bereits eingetretene Ergebnisse, keine möglichen.",
    "Ein Risiko nur über die Eintrittswahrscheinlichkeit oder nur über das Schadensausmaß definieren und dabei die andere Hälfte der Definition weglassen."
  ],
  confuse: [
    ["Risiko", "Fehlerzustand", "Ein Risiko ist ein mögliches künftiges Ereignis, beschrieben durch Eintrittswahrscheinlichkeit und Schadensausmaß; ein Fehlerzustand ist ein tatsächlicher Mangel, der im Arbeitsergebnis bereits vorhanden ist."]
  ],
  readNext: "5.2.1"
}},

"FL-5.2.2": { ch: 5, en: {
  title: "Product risk vs project risk",
  oneLine: "Product risk threatens what you deliver; project risk threatens your ability to deliver it.",
  tests: "<p>Whether you can classify a given risk statement correctly:</p><ul><li><strong>Product risk</strong> — the product could fail to meet needs: a wrong calculation, a missed performance target, poor accessibility. These threaten <strong>quality</strong>.</li><li><strong>Project risk</strong> — the project could fail to deliver on time or at all: staff/skills leaving, schedule slippage, supplier or organizational issues. These threaten <strong>management and control of the project</strong>.</li></ul>",
  traps: [
    "Classifying staffing loss (e.g. testers leaving mid-project) as a product risk instead of a project risk — it threatens the project's execution, not the software's behaviour.",
    "Classifying a functional defect, a performance shortfall or an accessibility gap as a project risk — these are all weaknesses in the product itself."
  ],
  confuse: [
    ["Product risk", "Project risk", "Product risk is about the software behaving wrong; project risk is about the project running wrong (staffing, schedule, suppliers)."]
  ],
  readNext: "5.2.2"
}, de: {
  title: "Produktrisiko und Projektrisiko",
  oneLine: "Ein Produktrisiko gefährdet, was Sie liefern; ein Projektrisiko gefährdet Ihre Fähigkeit, es zu liefern.",
  tests: "<p>Ob Sie eine gegebene Risikobeschreibung korrekt einordnen können:</p><ul><li><strong>Produktrisiko</strong> — das Produkt könnte die Anforderungen verfehlen: eine falsche Berechnung, ein verfehltes Leistungsziel, mangelhafte Barrierefreiheit. Diese gefährden die <strong>Qualität</strong>.</li><li><strong>Projektrisiko</strong> — das Projekt könnte nicht rechtzeitig oder gar nicht liefern: Abgang von Personal/Know-how, Terminverzug, Probleme mit Lieferanten oder der Organisation. Diese gefährden die <strong>Steuerung und Kontrolle des Projekts</strong>.</li></ul>",
  traps: [
    "Personalabgang (z. B. Tester verlassen das Projekt mittendrin) als Produktrisiko statt als Projektrisiko einordnen — er gefährdet die Durchführung des Projekts, nicht das Verhalten der Software.",
    "Einen funktionalen Fehler, ein Leistungsdefizit oder eine Lücke in der Barrierefreiheit als Projektrisiko einordnen — das sind alles Schwächen des Produkts selbst."
  ],
  confuse: [
    ["Produktrisiko", "Projektrisiko", "Beim Produktrisiko verhält sich die Software falsch; beim Projektrisiko läuft das Projekt falsch (Personal, Termine, Lieferanten)."]
  ],
  readNext: "5.2.2"
}},

"FL-5.2.3": { ch: 5, en: {
  title: "Product risk analysis: purpose and participants",
  oneLine: "Risk analysis decides what gets tested, how deeply, and in what order — and it needs more than one perspective to be reliable.",
  tests: "<p>Two things get tested at this objective:</p><ul><li><strong>Purpose:</strong> product risk analysis determines the <strong>scope, depth and priority</strong> of testing — not cost accounting, task assignment or defect ownership.</li><li><strong>Participants:</strong> a <strong>range of stakeholders</strong> — business representatives, developers, testers, and others — should take part, because each sees different risks (business impact, design fragility, defect-prone areas).</li></ul>",
  traps: [
    "Reducing risk analysis to an administrative task — costing the project or assigning developers to stories.",
    "Restricting risk analysis to a single role (only the test manager, only developers, or only the customer) — any single viewpoint misses whole categories of risk."
  ],
  readNext: "5.2.3"
}, de: {
  title: "Produktrisikoanalyse: Zweck und Beteiligte",
  oneLine: "Die Risikoanalyse entscheidet, was getestet wird, wie intensiv und in welcher Reihenfolge — und braucht dafür mehr als eine Perspektive, um verlässlich zu sein.",
  tests: "<p>Bei diesem Lernziel werden zwei Aspekte geprüft:</p><ul><li><strong>Zweck:</strong> Die Produktrisikoanalyse bestimmt <strong>Umfang, Tiefe und Priorität</strong> des Testens — nicht die Kostenrechnung, die Aufgabenzuweisung oder die Zuständigkeit für Fehler.</li><li><strong>Beteiligte:</strong> Ein <strong>breiter Kreis von Stakeholdern</strong> — Vertreter des Fachbereichs, Entwickler, Tester und weitere — sollte teilnehmen, da jeder unterschiedliche Risiken erkennt (geschäftliche Auswirkungen, Anfälligkeit des Designs, fehleranfällige Bereiche).</li></ul>",
  traps: [
    "Die Risikoanalyse auf eine administrative Aufgabe reduzieren — die Projektkosten kalkulieren oder Entwickler Storys zuweisen.",
    "Die Risikoanalyse auf eine einzelne Rolle beschränken (nur der Testmanager, nur Entwickler oder nur der Kunde) — jede Einzelperspektive übersieht ganze Risikokategorien."
  ],
  readNext: "5.2.3"
}},

"FL-5.2.4": { ch: 5, en: {
  title: "Risk responses: mitigation, contingency, transfer, acceptance",
  oneLine: "Mitigation lowers the chance a risk happens; contingency softens the damage if it happens anyway.",
  tests: "<p>Whether you can tell risk responses apart by what they act on:</p><ul><li><strong>Mitigation</strong> — reduces <strong>likelihood</strong> (or catches the problem early), e.g. targeted testing of the risky area.</li><li><strong>Contingency plan</strong> — reduces <strong>impact</strong> if the risk occurs anyway, e.g. a rehearsed fallback/recovery procedure.</li><li><strong>Transfer</strong> — shifts the risk to another party (insurance, outsourcing).</li><li><strong>Acceptance</strong> — a conscious decision to do nothing further and absorb the consequence if it happens.</li></ul>",
  worked: "<p>Risk: orders lost above 2000 concurrent users (likelihood high, impact high). Response: (a) performance efficiency testing during system test — reduces the chance the problem ships, i.e. <strong>mitigation</strong>; (b) a manual re-entry fallback, documented and rehearsed with support staff — reduces the damage if it happens anyway, i.e. <strong>contingency</strong>. Nothing is handed to a third party (no transfer) and nothing is simply left alone (no acceptance).</p>",
  traps: [
    "Labelling a rehearsed fallback procedure as 'mitigation' — it doesn't stop the risk occurring, it limits the damage once it has, which makes it a contingency plan.",
    "Calling targeted testing 'risk transfer' or 'risk acceptance' — testing is action taken by the same team to reduce likelihood, not a handoff or a shrug."
  ],
  confuse: [
    ["Mitigation", "Contingency plan", "Mitigation acts before the fact to reduce likelihood; a contingency plan acts after the fact to reduce impact once the risk has materialized."]
  ],
  readNext: "5.2.4"
}, de: {
  title: "Risikomaßnahmen: Risikominderung, Notfallplan, Risikoüberwälzung, Risikoakzeptanz",
  oneLine: "Risikominderung senkt die Wahrscheinlichkeit, dass ein Risiko eintritt; ein Notfallplan mildert den Schaden, falls es trotzdem eintritt.",
  tests: "<p>Ob Sie Risikomaßnahmen danach unterscheiden können, worauf sie wirken:</p><ul><li><strong>Risikominderung</strong> — senkt die <strong>Eintrittswahrscheinlichkeit</strong> (oder erkennt das Problem frühzeitig), z. B. gezieltes Testen des risikobehafteten Bereichs.</li><li><strong>Notfallplan</strong> — verringert das <strong>Schadensausmaß</strong>, falls das Risiko trotzdem eintritt, z. B. ein eingeübtes Ausweich-/Wiederherstellungsverfahren.</li><li><strong>Risikoüberwälzung</strong> — verlagert das Risiko auf einen Dritten (Versicherung, Outsourcing).</li><li><strong>Risikoakzeptanz</strong> — eine bewusste Entscheidung, nichts weiter zu unternehmen und die Folgen im Eintrittsfall zu tragen.</li></ul>",
  worked: "<p>Risiko: Bestellungen gehen bei über 2000 gleichzeitigen Nutzern verloren (hohe Eintrittswahrscheinlichkeit, hohes Schadensausmaß). Maßnahmen: (a) Test der Leistungseffizienz während des Systemtests — verringert die Wahrscheinlichkeit, dass das Problem ausgeliefert wird, also <strong>Risikominderung</strong>; (b) eine manuelle Nacherfassung als Ausweichlösung, dokumentiert und mit dem Support-Personal eingeübt — verringert den Schaden, falls es trotzdem eintritt, also ein <strong>Notfallplan</strong>. Nichts wird an einen Dritten übergeben (keine Überwälzung), und nichts wird einfach hingenommen (keine Akzeptanz).</p>",
  traps: [
    "Ein eingeübtes Ausweichverfahren als 'Risikominderung' bezeichnen — es verhindert nicht, dass das Risiko eintritt, sondern begrenzt den Schaden danach, was es zu einem Notfallplan macht.",
    "Gezieltes Testen als 'Risikoüberwälzung' oder 'Risikoakzeptanz' bezeichnen — Testen ist eine Maßnahme desselben Teams zur Senkung der Eintrittswahrscheinlichkeit, keine Abgabe an Dritte und kein Achselzucken."
  ],
  confuse: [
    ["Risikominderung", "Notfallplan", "Risikominderung wirkt im Vorfeld und senkt die Eintrittswahrscheinlichkeit; ein Notfallplan wirkt im Nachhinein und verringert das Schadensausmaß, sobald sich das Risiko realisiert hat."]
  ],
  readNext: "5.2.4"
}},

"FL-5.3.1": { ch: 5, en: {
  title: "Metrics for test monitoring",
  oneLine: "Test monitoring metrics describe the state of testing itself — progress against plan and the defects found.",
  tests: "<p>Whether you can pick out genuine <strong>test</strong> metrics from generic project data. Typical test monitoring metrics include: <strong>percentage of planned test cases executed/passed</strong>, <strong>defects found, fixed and still open</strong> (often by severity), test coverage achieved, and risks covered by testing so far.</p><p>Metrics about the wider project — team size, training hours, backlog size — describe the project, not the state of testing, and are not test monitoring metrics.</p>",
  traps: [
    "Including project-management data (training hours delivered, number of developers, backlog size) as a testing metric — none of it reports on test progress or defects.",
    "Picking only a defect count OR only a progress percentage when a question asks for metrics plural — both categories (progress and defects) are core test monitoring data."
  ],
  readNext: "5.3.1"
}, de: {
  title: "Kennzahlen für die Testüberwachung",
  oneLine: "Kennzahlen der Testüberwachung beschreiben den Zustand des Testens selbst — den Fortschritt gegenüber dem Plan und die gefundenen Fehler.",
  tests: "<p>Ob Sie echte <strong>Test</strong>kennzahlen von allgemeinen Projektdaten unterscheiden können. Typische Kennzahlen der Testüberwachung sind: <strong>Anteil der geplanten Testfälle, die durchgeführt/bestanden wurden</strong>, <strong>gefundene, behobene und noch offene Fehler</strong> (oft nach Schweregrad), erreichte Testüberdeckung sowie die bislang durch Tests abgedeckten Risiken.</p><p>Kennzahlen zum Projekt insgesamt — Teamgröße, Schulungsstunden, Umfang des Backlogs — beschreiben das Projekt, nicht den Zustand des Testens, und zählen nicht zu den Kennzahlen der Testüberwachung.</p>",
  traps: [
    "Projektmanagementdaten (geleistete Schulungsstunden, Anzahl der Entwickler, Umfang des Backlogs) als Testkennzahl einbeziehen — keines davon berichtet über Testfortschritt oder Fehler.",
    "Nur eine Fehleranzahl ODER nur einen Fortschrittsprozentsatz wählen, wenn nach Kennzahlen im Plural gefragt wird — beide Kategorien (Fortschritt und Fehler) gehören zu den Kerndaten der Testüberwachung."
  ],
  readNext: "5.3.1"
}},

"FL-5.3.2": { ch: 5, en: {
  title: "Test progress reports vs test completion reports",
  oneLine: "A progress report tells stakeholders where testing stands right now; a completion report summarises what happened once a milestone is reached.",
  tests: "<p>Two report types, distinguished by <strong>when</strong> and <strong>what</strong>:</p><ul><li><strong>Test progress report</strong> — produced periodically <em>during</em> test execution, for stakeholders; status against the <strong>exit criteria</strong>: progress, defect status, product risk status. Not a dump of every failed step or every defect's technical root cause.</li><li><strong>Test completion report</strong> — produced <em>when a test level, iteration or the whole test project reaches its exit criteria</em>, summarising the results and what they mean for the release decision.</li></ul>",
  traps: [
    "Filling a stakeholder progress report with implementation detail — full failed-test steps, a testware inventory, or defect root-cause analysis — that is working-level detail, not stakeholder reporting.",
    "Timing a completion report to a single event (a daily cadence, or a specific severity of defect) instead of to reaching an exit-criteria milestone.",
    "Producing a completion report before the plan is even approved — it belongs at the end of a level/iteration/project, not the start."
  ],
  confuse: [
    ["Test progress report", "Test completion report", "Progress reports are periodic and forward-looking, tracking status against exit criteria while testing is still running; a completion report is a one-time summary issued once exit criteria are actually met."]
  ],
  readNext: "5.3.2"
}, de: {
  title: "Testfortschrittsbericht und Testabschlussbericht",
  oneLine: "Ein Fortschrittsbericht zeigt Stakeholdern, wo das Testen gerade steht; ein Abschlussbericht fasst zusammen, was geschehen ist, sobald ein Meilenstein erreicht ist.",
  tests: "<p>Zwei Berichtsarten, unterschieden nach <strong>wann</strong> und <strong>was</strong>:</p><ul><li><strong>Testfortschrittsbericht</strong> — wird regelmäßig <em>während</em> der Testdurchführung für Stakeholder erstellt; Status gegenüber den <strong>Endekriterien</strong>: Fortschritt, Fehlerstatus, Status der Produktrisiken. Keine Auflistung jedes fehlgeschlagenen Schritts oder der technischen Grundursache jedes Fehlers.</li><li><strong>Testabschlussbericht</strong> — wird erstellt, <em>wenn eine Teststufe, eine Iteration oder das gesamte Testprojekt seine Endekriterien erreicht</em>, und fasst die Ergebnisse sowie deren Bedeutung für die Releaseentscheidung zusammen.</li></ul>",
  traps: [
    "Einen Fortschrittsbericht für Stakeholder mit Umsetzungsdetails füllen — vollständige Schritte fehlgeschlagener Tests, ein Testmittel-Inventar oder eine Grundursachenanalyse der Fehler — das ist Detailebene für die operative Arbeit, keine Berichterstattung für Stakeholder.",
    "Einen Abschlussbericht an ein einzelnes Ereignis koppeln (einen Tagesrhythmus oder einen bestimmten Schweregrad) statt an das Erreichen des Endekriterien-Meilensteins.",
    "Einen Abschlussbericht erstellen, bevor das Testkonzept überhaupt genehmigt ist — er gehört ans Ende einer Stufe/Iteration/eines Projekts, nicht an den Anfang."
  ],
  confuse: [
    ["Testfortschrittsbericht", "Testabschlussbericht", "Fortschrittsberichte sind periodisch und vorausschauend, sie verfolgen den Status gegenüber den Endekriterien, während der Test noch läuft; ein Abschlussbericht ist eine einmalige Zusammenfassung, die erstellt wird, sobald die Endekriterien tatsächlich erfüllt sind."]
  ],
  readNext: "5.3.2"
}},

"FL-5.3.3": { ch: 5, en: {
  title: "Matching status communication to the audience",
  oneLine: "How you report test status depends on who is listening and why — not one fixed format for everyone.",
  tests: "<p>Whether you recognise that reporting must fit its <strong>audience and purpose</strong>. A daily stand-up needs a short, current, spoken picture — what changed since yesterday, and what's blocking progress. A governance board needs a formal, aggregated, written view against exit criteria. Neither format is wrong; using the wrong one for the audience is the problem.</p>",
  traps: [
    "Insisting a stand-up must carry the same formal metrics as a governance report — consistency of format is not the goal; fitness for the audience is.",
    "Concluding that progress reporting only counts if it's formal and written, so an informal spoken update should be skipped entirely.",
    "Loading an informal update with full technical defect analysis that the audience doesn't need at that moment."
  ],
  readNext: "5.3.3"
}, de: {
  title: "Statuskommunikation an die Zielgruppe anpassen",
  oneLine: "Wie Sie den Teststatus berichten, hängt davon ab, wer zuhört und warum — es gibt kein einheitliches Format für alle.",
  tests: "<p>Ob Sie erkennen, dass die Berichterstattung zu <strong>Zielgruppe und Zweck</strong> passen muss. Ein tägliches Stand-up-Meeting braucht ein kurzes, aktuelles, mündliches Bild — was sich seit gestern geändert hat und was den Fortschritt blockiert. Ein Lenkungsausschuss braucht eine formale, verdichtete, schriftliche Sicht gegenüber den Endekriterien. Keines der beiden Formate ist falsch; das Problem ist, das falsche Format für die jeweilige Zielgruppe zu wählen.</p>",
  traps: [
    "Darauf bestehen, ein Stand-up müsse dieselben formalen Kennzahlen enthalten wie ein Bericht an den Lenkungsausschuss — einheitliches Format ist nicht das Ziel, sondern die Passung zur Zielgruppe.",
    "Daraus schließen, Fortschrittsberichterstattung zähle nur, wenn sie formal und schriftlich sei, sodass ein informelles mündliches Update ganz entfallen könne.",
    "Ein informelles Update mit vollständiger technischer Fehleranalyse überladen, die die Zielgruppe in diesem Moment nicht braucht."
  ],
  readNext: "5.3.3"
}},

"FL-5.4.1": { ch: 5, en: {
  title: "Configuration management for testing",
  oneLine: "Configuration management keeps the test object and every piece of testware uniquely identified, versioned and traceable.",
  tests: "<p>What configuration management actually does for testing: it identifies, version-controls and links together the <strong>test object and all testware</strong> (test cases, test data, tools, environments) so any test result can be traced back to the exact version that produced it.</p><p>It does not guarantee environment-vs-production parity, does not set entry/exit criteria, and does not decide automation priorities — those belong to environment management, test planning and automation strategy respectively.</p>",
  worked: "<p>A test fails, but the developer can't reproduce it. If the <strong>exact version of the test object and the testware used in that run</strong> had been recorded, the failure could be traced to a known build and reproduced reliably. Automating the test, raising its severity, or adding it to the regression suite are all reasonable follow-ups, but none of them addresses the missing traceability that caused the confusion.</p>",
  traps: [
    "Attributing environment-parity guarantees to configuration management — that's environment management's job.",
    "Attributing entry/exit criteria definition or automation prioritisation to configuration management — those are test-planning and strategy decisions.",
    "Treating a symptom fix (automate the test, raise severity, add to regression suite) as equivalent to the root cause fix (version-track the test object and testware)."
  ],
  readNext: "5.4.1"
}, de: {
  title: "Konfigurationsmanagement für das Testen",
  oneLine: "Konfigurationsmanagement hält das Testobjekt und jedes Testmittel eindeutig identifiziert, versioniert und nachverfolgbar.",
  tests: "<p>Was Konfigurationsmanagement für das Testen tatsächlich leistet: Es identifiziert, versioniert und verknüpft das <strong>Testobjekt und alle Testmittel</strong> (Testfälle, Testdaten, Werkzeuge, Umgebungen), sodass sich jedes Testergebnis exakt auf die Version zurückführen lässt, die es hervorgebracht hat.</p><p>Es garantiert keine Übereinstimmung zwischen Test- und Produktionsumgebung, legt keine Eingangs-/Endekriterien fest und entscheidet nicht über Automatisierungsprioritäten — das ist jeweils Aufgabe des Umgebungsmanagements, der Testplanung beziehungsweise der Automatisierungsstrategie.</p>",
  worked: "<p>Ein Test schlägt fehl, doch der Entwickler kann ihn nicht reproduzieren. Wäre die <strong>genaue Version des Testobjekts und der bei diesem Lauf verwendeten Testmittel</strong> erfasst worden, ließe sich der Fehlschlag auf einen bekannten Build zurückführen und zuverlässig reproduzieren. Den Test zu automatisieren, seinen Schweregrad anzuheben oder ihn in die Regressionstestsuite aufzunehmen, sind alles sinnvolle Folgemaßnahmen, doch keine davon behebt die fehlende Nachverfolgbarkeit, die die Verwirrung verursacht hat.</p>",
  traps: [
    "Die Garantie der Umgebungsübereinstimmung dem Konfigurationsmanagement zuschreiben — das ist Aufgabe des Umgebungsmanagements.",
    "Die Festlegung von Eingangs-/Endekriterien oder die Priorisierung der Automatisierung dem Konfigurationsmanagement zuschreiben — das sind Entscheidungen der Testplanung und der Teststrategie.",
    "Eine Behandlung des Symptoms (Test automatisieren, Schweregrad anheben, in die Regressionstestsuite aufnehmen) mit der Behebung der Grundursache (Testobjekt und Testmittel versioniert nachverfolgen) gleichsetzen."
  ],
  readNext: "5.4.1"
}},

"FL-5.5.1": { ch: 5, en: {
  title: "Defect reports",
  oneLine: "A defect report exists so someone else can reproduce, assess and fix the problem without asking you.",
  tests: "<p>Whether you can spot what is missing from a report, or identify what belongs in one.</p><p>A useful report typically carries: a unique identifier; a title and a description including the steps to reproduce; the <strong>expected and actual results</strong>; the <strong>identification of the test object and its version</strong>; the <strong>test environment</strong>; the date and the author; the lifecycle status; <strong>severity</strong> (the impact of the failure) and <strong>priority</strong> (the urgency of fixing it); and references to the test case, requirement or risk involved.</p><p>The most frequently omitted items in exam scenarios are the <em>version</em> of the test object and the <em>environment</em>. Without them the developer may reproduce against a different build and conclude the defect does not exist.</p>",
  traps: [
    "Answering 'expected and actual result' when the scenario already gives both. Read the report carefully before choosing.",
    "Confusing severity with priority. They are separate fields and can differ — a cosmetic defect on a launch screen can be low severity and high priority.",
    "Selecting things that do not belong: who caused the defect, how long the fix should take, or a list of unrelated defects."
  ],
  confuse: [
    ["Severity", "Priority", "Severity is how bad the failure is. Priority is how urgently it should be fixed."],
    ["Defect report", "Test progress report", "One anomaly, versus the overall state of testing."]
  ],
  readNext: "5.5.1"
}, de: {
  title: "Fehlerberichte",
  oneLine: "Ein Fehlerbericht existiert, damit jemand anderes das Problem reproduzieren, bewerten und beheben kann, ohne bei Ihnen nachfragen zu müssen.",
  tests: "<p>Ob Sie erkennen können, was in einem Bericht fehlt, oder was hineingehört.</p><p>Ein brauchbarer Fehlerbericht enthält typischerweise: eine eindeutige Kennung; einen Titel und eine Beschreibung mit den Schritten zur Reproduktion; das <strong>erwartete und das tatsächliche Ergebnis</strong>; die <strong>Identifikation des Testobjekts und seiner Version</strong>; die <strong>Testumgebung</strong>; Datum und Verfasser; den Status im Lebenszyklus; <strong>Schweregrad</strong> (die Auswirkung der Fehlerwirkung) und <strong>Priorität</strong> (die Dringlichkeit der Behebung); sowie Verweise auf den betroffenen Testfall, die Anforderung oder das Risiko.</p><p>Die in Prüfungsszenarien am häufigsten fehlenden Angaben sind die <em>Version</em> des Testobjekts und die <em>Umgebung</em>. Ohne sie reproduziert der Entwickler den Fehler womöglich in einem anderen Build und schließt fälschlich, der Fehler bestehe nicht.</p>",
  traps: [
    "'Erwartetes und tatsächliches Ergebnis' antworten, obwohl das Szenario beides bereits angibt. Lesen Sie den Bericht sorgfältig, bevor Sie wählen.",
    "Schweregrad mit Priorität verwechseln. Es sind getrennte Felder, die auseinanderfallen können — ein kosmetischer Fehler auf dem Startbildschirm kann niedrigen Schweregrad und hohe Priorität haben.",
    "Dinge auswählen, die nicht hineingehören: wer den Fehler verursacht hat, wie lange die Behebung dauern soll, oder eine Liste nicht zusammenhängender Fehler."
  ],
  confuse: [
    ["Schweregrad", "Priorität", "Der Schweregrad gibt an, wie schwerwiegend die Fehlerwirkung ist. Die Priorität gibt an, wie dringend sie behoben werden muss."],
    ["Fehlerbericht", "Testfortschrittsbericht", "Eine einzelne Anomalie gegenüber dem Gesamtzustand des Testens."]
  ],
  readNext: "5.5.1"
}},

/* ============================ Chapter 6 ============================ */

"FL-6.1.1": { ch: 6, en: {
  title: "Types of test tools",
  oneLine: "Match the task to the tool category: generating data, managing the process, examining code without running it, and running it are four different jobs.",
  tests: "<p>Whether you can classify a testing task by which tool category actually supports it. Key categories: <strong>test management tools</strong> (test cases, execution status, traceability to requirements/defects — the backbone of monitoring and control), <strong>static analysis tools</strong> (examine code or other work products <em>without executing them</em>), <strong>test data preparation tools</strong> (generate, transform or anonymize realistic input data), <strong>test execution tools</strong> (run automated test scripts), and <strong>performance testing tools</strong> (apply a defined load). Each category maps to one phase or activity — don't let a plausible-sounding tool name pull you to the wrong one.</p>",
  traps: [
    "Picking test management tools for a task that's really about producing data (e.g. generating large volumes of realistic records) — that's test data preparation.",
    "Describing static analysis as running scripts against the software. It never executes the code; that description belongs to test execution tools.",
    "Assuming performance tools handle monitoring and control of the test process — that's test management, which tracks status and produces progress information.",
    "Treating 'requires the software to be executed' as true of static analysis — it's the one category defined by NOT running the code."
  ],
  confuse: [
    ["Test management tools", "Test execution tools", "Management tools track status, traceability and progress; execution tools actually run the automated scripts."],
    ["Static analysis tools", "Test data preparation tools", "Static analysis inspects work products without running them; data preparation generates or anonymizes input for tests that will run."]
  ],
  readNext: "6.1.1"
}, de: {
  title: "Arten von Testwerkzeugen",
  oneLine: "Ordnen Sie die Aufgabe der passenden Werkzeugkategorie zu: Daten erzeugen, den Prozess verwalten, Code prüfen ohne ihn auszuführen, und ihn ausführen sind vier verschiedene Aufgaben.",
  tests: "<p>Ob Sie eine Testaufgabe der Werkzeugkategorie zuordnen können, die sie tatsächlich unterstützt. Wichtige Kategorien: <strong>Testmanagementwerkzeuge</strong> (Testfälle, Durchführungsstatus, Nachverfolgbarkeit zu Anforderungen/Fehlerberichten — das Rückgrat von Testüberwachung und Teststeuerung), <strong>Werkzeuge für statische Analyse</strong> (prüfen Code oder andere Arbeitsergebnisse, <em>ohne sie auszuführen</em>), <strong>Werkzeuge zur Testdatenerzeugung</strong> (erzeugen, transformieren oder anonymisieren realistische Eingabedaten), <strong>Testdurchführungswerkzeuge</strong> (führen automatisierte Testskripte aus) sowie <strong>Werkzeuge für Performance-Tests</strong> (erzeugen eine definierte Last). Jede Kategorie gehört zu einer bestimmten Phase oder Aktivität — lassen Sie sich nicht von einem plausibel klingenden Werkzeugnamen auf die falsche Spur führen.</p>",
  traps: [
    "Ein Testmanagementwerkzeug wählen für eine Aufgabe, bei der es eigentlich um das Erzeugen von Daten geht (z. B. große Mengen realistischer Datensätze) — das ist Testdatenerzeugung.",
    "Statische Analyse so beschreiben, als würde sie Skripte gegen die Software ausführen. Sie führt den Code nie aus; diese Beschreibung gehört zu Testdurchführungswerkzeugen.",
    "Annehmen, Performance-Werkzeuge übernähmen Testüberwachung und Teststeuerung — das ist Testmanagement, das den Status verfolgt und Fortschrittsinformationen liefert.",
    "Bei statischer Analyse annehmen, die Software müsse ausgeführt werden — sie ist genau die Kategorie, die sich dadurch definiert, den Code NICHT auszuführen."
  ],
  confuse: [
    ["Testmanagementwerkzeuge", "Testdurchführungswerkzeuge", "Managementwerkzeuge verfolgen Status, Nachverfolgbarkeit und Fortschritt; Durchführungswerkzeuge führen die automatisierten Skripte tatsächlich aus."],
    ["Werkzeuge für statische Analyse", "Werkzeuge zur Testdatenerzeugung", "Statische Analyse prüft Arbeitsergebnisse, ohne sie auszuführen; Testdatenerzeugung erzeugt oder anonymisiert Eingaben für Tests, die noch laufen sollen."]
  ],
  readNext: "6.1.1"
}},

"FL-6.2.1": { ch: 6, en: {
  title: "Benefits and risks of test automation",
  oneLine: "Automation buys consistent, repeatable execution and objective coverage data, but only after you pay for building and maintaining it.",
  tests: "<p>Whether you can separate a genuine benefit of test automation from a genuine risk, and recognise a realistic expectation from an unrealistic one. Benefits: more consistent and repeatable execution, objective assessment of coverage, freeing testers for work needing human judgement. Risks: the effort to build and especially <strong>maintain</strong> the testware is easy to underestimate, and the return on that investment arrives only after the tests have run many times — not immediately.</p>",
  traps: [
    "Claiming automation removes the need to maintain testware — maintenance effort is one of the classic risks, not something automation eliminates.",
    "Claiming automation guarantees all defects will be found, or removes the need for experienced testers — automated tests only check what they were built to check.",
    "Expecting the whole regression suite can be automated in the first iteration — unrealistic; automation is built up over time.",
    "Assuming automated tests find what a skilled exploratory tester finds — manual and exploratory testing keep finding defects automation can't."
  ],
  confuse: [
    ["Benefit of automation", "Risk of automation", "Benefits are what you gain once it's running: repeatable, objective execution. Risks are what it costs: underestimated maintenance effort and a false sense of complete coverage."]
  ],
  readNext: "6.2.1"
}, de: {
  title: "Nutzen und Risiken der Testautomatisierung",
  oneLine: "Testautomatisierung bringt konsistente, wiederholbare Durchführung und objektive Überdeckungsdaten — aber erst, nachdem Sie in Aufbau und Pflege investiert haben.",
  tests: "<p>Ob Sie einen echten Nutzen der Testautomatisierung von einem echten Risiko unterscheiden können und eine realistische von einer unrealistischen Erwartung erkennen. Nutzen: konsistentere und wiederholbare Durchführung, objektive Bewertung der Überdeckung, Freiraum für Testende, um sich Aufgaben zu widmen, die menschliches Urteilsvermögen erfordern. Risiken: Der Aufwand für den Aufbau und vor allem für die <strong>Pflege</strong> der Testmittel wird leicht unterschätzt, und der Ertrag dieser Investition stellt sich erst ein, nachdem die Tests viele Male gelaufen sind — nicht sofort.</p>",
  traps: [
    "Behaupten, Automatisierung mache die Pflege der Testmittel überflüssig — der Pflegeaufwand ist eines der klassischen Risiken und wird durch Automatisierung nicht beseitigt.",
    "Behaupten, Automatisierung garantiere das Finden aller Fehlerzustände oder mache erfahrene Testende überflüssig — automatisierte Tests prüfen nur das, wofür sie gebaut wurden.",
    "Erwarten, die gesamte Regressionstestsuite lasse sich schon in der ersten Iteration automatisieren — unrealistisch; Automatisierung wird schrittweise aufgebaut.",
    "Annehmen, automatisierte Tests fänden dasselbe wie ein erfahrener explorativer Tester — manuelles und exploratives Testen finden weiterhin Fehlerzustände, die die Automatisierung nicht findet."
  ],
  confuse: [
    ["Nutzen der Automatisierung", "Risiko der Automatisierung", "Der Nutzen zeigt sich, sobald die Automatisierung läuft: wiederholbare, objektive Durchführung. Die Risiken sind die Kosten: unterschätzter Pflegeaufwand und ein trügerisches Gefühl vollständiger Überdeckung."]
  ],
  readNext: "6.2.1"
}}

};
