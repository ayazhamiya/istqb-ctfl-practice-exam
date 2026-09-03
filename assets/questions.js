/* CTFL v4.0 practice question banks.
   Original material, MIT licensed. Edit this file to add or correct questions.
   Justifications must never refer to an option by letter: the option order is shuffled at run time.
   `i18n` holds translations of the text fields; `ans` and the option order are shared across languages. */

window.CTFL_BANK = {
  chapters: {
    "1": "1 Fundamentals of Testing",
    "2": "2 Testing Throughout the SDLC",
    "3": "3 Static Testing",
    "4": "4 Test Analysis and Design",
    "5": "5 Managing the Test Activities",
    "6": "6 Test Tools"
  },
  sets: [
  {
   id: "m1",
   name: "Set M1",
   blurb: "The full syllabus, 40 questions",
   questions: [
  {
    ch: 1,
    lo: "FL-1.1.1 (K1)",
    stem: "Which of the following is a valid objective of testing?",
    opts: ["To find as many failures as possible so that the test object can be declared free of defects","To take over from the development team the responsibility for the quality of the delivered product","To prevent defects by evaluating work products such as requirements and user stories","To demonstrate to the customer that no defects remain in the system under test"],
    ans: [2],
    just: "Evaluating work products such as requirements, user stories and designs is one of the typical test objectives, and it prevents defects from being built into the code. Testing can never prove that a system is free of defects or that none remain, and responsibility for quality stays with the whole team rather than passing to the testers.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein gültiges Testziel?","opts":["So viele Fehlerwirkungen wie möglich zu finden, damit das Testobjekt als fehlerfrei erklärt werden kann","Die Verantwortung für die Qualität des ausgelieferten Produkts vom Entwicklungsteam zu übernehmen","Fehlerzustände zu vermeiden, indem Arbeitsergebnisse wie Anforderungen und User Storys bewertet werden","Dem Kunden nachzuweisen, dass im Testobjekt keine Fehlerzustände mehr vorhanden sind"],"just":"Das Bewerten von Arbeitsergebnissen wie Anforderungen, User Storys und Entwürfen ist ein typisches Testziel und verhindert, dass Fehlerzustände überhaupt erst in den Code gelangen. Testen kann niemals nachweisen, dass ein System fehlerfrei ist oder keine Fehlerzustände mehr enthält, und die Verantwortung für die Qualität bleibt beim gesamten Team und geht nicht auf die Tester über."}}
  },
  {
    ch: 4,
    lo: "FL-4.1.1 (K2)",
    stem: "Which of the following statements about the categories of test techniques is CORRECT?",
    opts: ["Experience-based test techniques use the knowledge and skill of the testers to derive test cases","Black-box test techniques derive test cases from an analysis of the internal structure of the test object","White-box test techniques are based on an analysis of the specified behaviour of the test object","Coverage can only be measured for test cases derived with black-box test techniques"],
    ans: [0],
    just: "Experience-based techniques draw on the tester's knowledge of the test object, of similar systems and of typical developer errors. Two of the other options simply swap the definitions of black-box and white-box techniques, and coverage can in fact be measured for both black-box and white-box techniques.",
    i18n: {"de":{"stem":"Welche der folgenden Aussagen über die Kategorien von Testverfahren ist RICHTIG?","opts":["Erfahrungsbasierte Testverfahren nutzen das Wissen und die Fähigkeiten der Tester, um Testfälle abzuleiten","Black-Box-Testverfahren leiten Testfälle aus einer Analyse der inneren Struktur des Testobjekts ab","White-Box-Testverfahren beruhen auf einer Analyse des spezifizierten Verhaltens des Testobjekts","Überdeckung lässt sich nur für Testfälle messen, die mit Black-Box-Testverfahren abgeleitet wurden"],"just":"Erfahrungsbasierte Verfahren stützen sich auf das Wissen der Tester über das Testobjekt, über ähnliche Systeme und über typische Fehlhandlungen von Entwicklern. Zwei der übrigen Antworten vertauschen schlicht die Definitionen von Black-Box- und White-Box-Verfahren, und Überdeckung lässt sich für beide Kategorien messen."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.1 (K2)",
    stem: "Which of the following statements about the influence of the software development lifecycle (SDLC) on testing is CORRECT?",
    opts: ["In a sequential SDLC, test design can only start once the code has been written","In an iterative SDLC, regression testing becomes increasingly important as the product grows with every iteration","In an incremental SDLC, static testing in the early increments removes the need for dynamic testing in the later ones","In an agile SDLC, the test levels used in sequential models cannot be applied at all"],
    ans: [1],
    just: "Each iteration adds to an existing product, so the risk of breaking what already works grows and regression testing gains weight. Test design can start as soon as the test basis is available and need not wait for code, static testing never removes the need for dynamic testing, and test levels are used in agile projects as well.",
    i18n: {"de":{"stem":"Welche der folgenden Aussagen über den Einfluss des Softwareentwicklungslebenszyklus (SDLC) auf das Testen ist RICHTIG?","opts":["In einem sequenziellen SDLC kann der Testentwurf erst beginnen, wenn der Code geschrieben ist","In einem iterativen SDLC gewinnt der Regressionstest an Bedeutung, weil das Produkt mit jeder Iteration wächst","In einem inkrementellen SDLC macht der statische Test in den frühen Inkrementen den dynamischen Test in den späteren überflüssig","In einem agilen SDLC lassen sich die Teststufen sequenzieller Modelle überhaupt nicht anwenden"],"just":"Jede Iteration ergänzt ein bestehendes Produkt, damit wächst das Risiko, Funktionierendes zu beschädigen, und der Regressionstest gewinnt an Gewicht. Der Testentwurf kann beginnen, sobald die Testbasis vorliegt, und muss nicht auf den Code warten; statischer Test ersetzt nie den dynamischen Test; und Teststufen werden auch in agilen Projekten verwendet."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.1 (K2)",
    stem: "Which of the following would you expect to find in a test plan?",
    opts: ["The detailed steps and expected results of every test case","The list of anomalies detected during the previous test cycle","The source code of the automated test scripts","The test schedule, the entry and exit criteria and the resources required"],
    ans: [3],
    just: "A test plan describes the objectives, scope, schedule, resources, entry and exit criteria and the approach to testing. Detailed test steps belong in test cases and test procedures, anomalies are held in the defect management system, and test scripts are testware rather than plan content.",
    i18n: {"de":{"stem":"Was würden Sie in einem Testkonzept erwarten?","opts":["Die detaillierten Schritte und erwarteten Ergebnisse jedes einzelnen Testfalls","Die Liste der im letzten Testzyklus gefundenen Anomalien","Den Quellcode der automatisierten Testskripte","Den Terminplan, die Eingangs- und Endekriterien sowie die benötigten Ressourcen"],"just":"Ein Testkonzept beschreibt Ziele, Umfang, Terminplan, Ressourcen, Eingangs- und Endekriterien sowie das Vorgehen beim Testen. Detaillierte Testschritte gehören in Testfälle und Testabläufe, Anomalien werden im Fehlermanagementsystem geführt, und Testskripte sind Testmittel und kein Bestandteil des Konzepts."}}
  },
  {
    ch: 3,
    lo: "FL-3.1.2 (K2)",
    stem: "Which of the following is a benefit that can be achieved by static testing but NOT by dynamic testing?",
    opts: ["Detecting failures caused by the interaction of two components at run time","Measuring the response time of the system under a defined load","Detecting inconsistencies, ambiguities and omissions in the requirements before any code exists","Confirming that a defect reported earlier has been correctly fixed"],
    ans: [2],
    just: "Static testing examines work products without executing them, so it can be applied to requirements long before code exists and can find ambiguities and contradictions that dynamic testing could never reveal. Every other option requires the software to be executed.",
    i18n: {"de":{"stem":"Welcher Nutzen lässt sich durch statischen Test erreichen, NICHT aber durch dynamischen Test?","opts":["Das Aufdecken von Fehlerwirkungen, die durch das Zusammenspiel zweier Komponenten zur Laufzeit entstehen","Das Messen der Antwortzeit des Systems unter einer definierten Last","Das Aufdecken von Widersprüchen, Mehrdeutigkeiten und Lücken in den Anforderungen, bevor überhaupt Code existiert","Die Bestätigung, dass ein zuvor berichteter Fehlerzustand korrekt behoben wurde"],"just":"Der statische Test untersucht Arbeitsergebnisse, ohne sie auszuführen. Er kann daher lange vor der Codierung auf Anforderungen angewendet werden und findet Mehrdeutigkeiten und Widersprüche, die ein dynamischer Test niemals aufdecken könnte. Alle übrigen Antworten setzen voraus, dass die Software ausgeführt wird."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.1 (K3)",
    stem: "You are testing the shipping-cost calculation of an online shop. It has two inputs:",
    extra: "<ul><li><strong>Order value</strong>, with four ranges: below 25.00 EUR; 25.00 to 49.99 EUR; 50.00 to 99.99 EUR; 100.00 EUR and above</li><li><strong>Destination</strong>, with three options: domestic; European Union; rest of the world</li></ul><p>Orders to the rest of the world are accepted only for an order value of 100.00 EUR and above. The shop rejects any other combination with an error message before the shipping cost is calculated.</p><p>Each test uses one order value and one destination. You apply equivalence partitioning (EP) to cover every order value range and every destination.</p>",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% EP coverage of the valid partitions?",
    opts: ["3","4","5","7"],
    ans: [1],
    just: "There are four valid order-value partitions and three valid destination partitions, so at least four test cases are needed. Four are also sufficient, because a valid combination exists for each one, for example: (below 25.00, domestic), (25.00–49.99, EU), (50.00–99.99, domestic), (100.00 and above, rest of the world).",
    i18n: {"de":{"stem":"Sie testen die Versandkostenberechnung eines Onlineshops. Sie hat zwei Eingaben:","extra":"<ul><li><strong>Bestellwert</strong> mit vier Bereichen: unter 25,00 EUR; 25,00 bis 49,99 EUR; 50,00 bis 99,99 EUR; 100,00 EUR und mehr</li><li><strong>Zielgebiet</strong> mit drei Möglichkeiten: Inland; Europäische Union; übrige Welt</li></ul><p>Bestellungen in die übrige Welt werden nur ab einem Bestellwert von 100,00 EUR angenommen. Jede andere Kombination weist der Shop mit einer Fehlermeldung zurück, bevor die Versandkosten berechnet werden.</p><p>Jeder Test verwendet einen Bestellwert und ein Zielgebiet. Sie wenden die Äquivalenzklassenbildung an, um jeden Bestellwertbereich und jedes Zielgebiet abzudecken.</p>","stem2":"Wie viele Testfälle sind MINDESTENS nötig, um 100% Äquivalenzklassenüberdeckung der gültigen Klassen zu erreichen?","opts":["3","4","5","7"],"just":"Es gibt vier gültige Äquivalenzklassen für den Bestellwert und drei für das Zielgebiet, also sind mindestens vier Testfälle nötig. Vier genügen auch, weil für jede Klasse eine gültige Kombination existiert, zum Beispiel: (unter 25,00, Inland), (25,00–49,99, EU), (50,00–99,99, Inland), (100,00 und mehr, übrige Welt)."}}
  },
  {
    ch: 1,
    lo: "FL-1.1.2 (K2)",
    stem: "Which of the following activities is part of debugging rather than part of testing?",
    opts: ["Executing a test procedure that causes the component to display an incorrect total","Designing test cases from the acceptance criteria of a user story","Reporting an anomaly observed during the execution of a test procedure","Reproducing a failure, locating the fault in the code and correcting it"],
    ans: [3],
    just: "Debugging is the development activity of reproducing a failure, diagnosing its cause and fixing the defect. Executing a test, reporting the anomaly it exposes and designing tests from acceptance criteria are all testing activities; the diagnosis and the fix are debugging.",
    i18n: {"de":{"stem":"Welche der folgenden Tätigkeiten gehört zum Debugging und nicht zum Testen?","opts":["Einen Testablauf durchführen, bei dem die Komponente eine falsche Summe anzeigt","Testfälle aus den Abnahmekriterien einer User Story entwerfen","Eine bei der Durchführung eines Testablaufs beobachtete Anomalie berichten","Eine Fehlerwirkung reproduzieren, den Fehlerzustand im Code lokalisieren und beheben"],"just":"Debugging ist die Entwicklungstätigkeit, eine Fehlerwirkung zu reproduzieren, ihre Ursache zu diagnostizieren und den Fehlerzustand zu beheben. Einen Test durchzuführen, die dabei aufgedeckte Anomalie zu berichten und Tests aus Abnahmekriterien zu entwerfen sind Testaktivitäten; die Diagnose und die Behebung sind Debugging."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.3 (K2)",
    stem: "Which TWO of the following are examples of exit criteria for a test level?",
    multi: true,
    opts: ["The test environment is available and stable","The planned test coverage of the identified product risks has been achieved","The required test data has been prepared and loaded","The testers have been trained on the new test management tool","The number of unresolved high-priority defects is below the agreed threshold"],
    ans: [1,4],
    just: "Exit criteria define what must be true before testing can be declared complete: achieved coverage and an acceptable number of unresolved defects are typical examples. An available environment, prepared test data and trained testers are entry criteria, that is, preconditions for starting.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden sind Beispiele für Endekriterien einer Teststufe?","opts":["Die Testumgebung ist verfügbar und stabil","Die geplante Testüberdeckung der identifizierten Produktrisiken ist erreicht","Die benötigten Testdaten sind aufbereitet und eingespielt","Die Tester sind auf dem neuen Testmanagementwerkzeug geschult","Die Anzahl der offenen Fehlerzustände hoher Priorität liegt unter dem vereinbarten Schwellenwert"],"just":"Endekriterien legen fest, was erfüllt sein muss, damit das Testen als abgeschlossen gelten kann: die erreichte Überdeckung und eine akzeptable Anzahl offener Fehlerzustände sind typische Beispiele. Eine verfügbare Umgebung, aufbereitete Testdaten und geschulte Tester sind Eingangskriterien, also Voraussetzungen für den Beginn."}}
  },
  {
    ch: 6,
    lo: "FL-6.1.1 (K2)",
    stem: "A team must generate large volumes of realistic input records so that a new batch interface can be tested. Which type of tool support is MOST appropriate?",
    opts: ["A test data preparation tool","A test management tool","A static analysis tool","A coverage measurement tool"],
    ans: [0],
    just: "Test data preparation tools generate, transform or anonymize data so that realistic volumes are available for test execution. Test management tools organize the test process, static analysis tools examine code without executing it, and coverage tools measure how much of the code the tests exercised.",
    i18n: {"de":{"stem":"Ein Team muss große Mengen realistischer Eingabedatensätze erzeugen, damit eine neue Batch-Schnittstelle getestet werden kann. Welche Art von Werkzeugunterstützung ist am besten geeignet?","opts":["Ein Werkzeug zur Testdatenerzeugung","Ein Testmanagementwerkzeug","Ein Werkzeug für die statische Analyse","Ein Werkzeug zur Überdeckungsmessung"],"just":"Werkzeuge zur Testdatenerzeugung erzeugen, transformieren oder anonymisieren Daten, sodass realistische Mengen für die Testdurchführung bereitstehen. Testmanagementwerkzeuge organisieren den Testprozess, Werkzeuge für die statische Analyse untersuchen Code ohne ihn auszuführen, und Überdeckungswerkzeuge messen, welcher Anteil des Codes durchlaufen wurde."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.2 (K3)",
    stem: "A parcel system assigns a shipping category based on the parcel weight in whole grams:",
    extra: "<ul><li>0 to 500 g: letter</li><li>501 to 2000 g: small parcel</li><li>2001 to 10000 g: parcel</li><li>10001 to 30000 g: freight</li></ul><p>Weights above 30000 g are not accepted. You have prepared the following test cases:</p><div class=\"figure\"><table class=\"dt\"><tr><th></th><th>Weight (g)</th><th>Expected category</th></tr><tr><td class=\"rowhead\">TC1</td><td>0</td><td>letter</td></tr><tr><td class=\"rowhead\">TC2</td><td>500</td><td>letter</td></tr><tr><td class=\"rowhead\">TC3</td><td>750</td><td>small parcel</td></tr><tr><td class=\"rowhead\">TC4</td><td>2000</td><td>small parcel</td></tr><tr><td class=\"rowhead\">TC5</td><td>10001</td><td>freight</td></tr></table></div>",
    stem2: "What 2-value boundary value analysis (BVA) coverage of the parcel weight is achieved by these test cases?",
    opts: ["40%","62.5%","50%","80%"],
    ans: [2],
    just: "The four valid partitions have eight boundary values: 0, 500, 501, 2000, 2001, 10000, 10001 and 30000. The test cases cover 0, 500, 2000 and 10001, that is four of eight, so BVA coverage is 50%. TC3 uses 750, which is not a boundary value.",
    i18n: {"de":{"stem":"Ein Paketsystem ordnet anhand des Paketgewichts in ganzen Gramm eine Versandkategorie zu:","extra":"<ul><li>0 bis 500 g: Brief</li><li>501 bis 2000 g: Päckchen</li><li>2001 bis 10000 g: Paket</li><li>10001 bis 30000 g: Sperrgut</li></ul><p>Gewichte über 30000 g werden nicht angenommen. Sie haben die folgenden Testfälle vorbereitet:</p><div class=\"figure\"><table class=\"dt\"><tr><th></th><th>Gewicht (g)</th><th>Erwartete Kategorie</th></tr><tr><td class=\"rowhead\">TF1</td><td>0</td><td>Brief</td></tr><tr><td class=\"rowhead\">TF2</td><td>500</td><td>Brief</td></tr><tr><td class=\"rowhead\">TF3</td><td>750</td><td>Päckchen</td></tr><tr><td class=\"rowhead\">TF4</td><td>2000</td><td>Päckchen</td></tr><tr><td class=\"rowhead\">TF5</td><td>10001</td><td>Sperrgut</td></tr></table></div>","stem2":"Welche Überdeckung nach der Grenzwertanalyse mit zwei Werten erreichen diese Testfälle für das Paketgewicht?","opts":["40%","62,5%","50%","80%"],"just":"Die vier gültigen Äquivalenzklassen haben acht Grenzwerte: 0, 500, 501, 2000, 2001, 10000, 10001 und 30000. Die Testfälle decken 0, 500, 2000 und 10001 ab, also vier von acht, damit beträgt die Überdeckung 50%. TF3 verwendet 750, was kein Grenzwert ist."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.3 (K1)",
    stem: "Which of the following BEST describes behaviour-driven development (BDD)?",
    opts: ["Component tests are written by the developers immediately after the code has been written and are then automated","The acceptance criteria are derived from the finished code by an independent test team before the release","Test cases are derived from the code structure in order to reach the agreed level of branch coverage","Tests are expressed in a natural, business-readable format describing the desired behaviour, and this guides the development of the code"],
    ans: [3],
    just: "BDD expresses the desired behaviour in a simple, structured natural language, typically given/when/then, that the whole team can read, and these examples then drive the implementation. The other options describe writing tests after the code, deriving acceptance criteria late from the finished product, and white-box test design.",
    i18n: {"de":{"stem":"Was beschreibt Behavior-Driven Development (BDD) am BESTEN?","opts":["Komponententests werden von den Entwicklern unmittelbar nach dem Schreiben des Codes erstellt und anschließend automatisiert","Die Abnahmekriterien werden vor der Freigabe von einem unabhängigen Testteam aus dem fertigen Code abgeleitet","Testfälle werden aus der Codestruktur abgeleitet, um die vereinbarte Zweigüberdeckung zu erreichen","Tests werden in einer natürlichen, fachlich lesbaren Form formuliert, die das gewünschte Verhalten beschreibt, und leiten so die Entwicklung des Codes"],"just":"BDD beschreibt das gewünschte Verhalten in einer einfachen, strukturierten natürlichen Sprache, typischerweise nach dem Muster Gegeben/Wenn/Dann, die das ganze Team lesen kann; diese Beispiele treiben dann die Implementierung. Die übrigen Antworten beschreiben das Testen nach der Codierung, das späte Ableiten von Abnahmekriterien aus dem fertigen Produkt und den White-Box-Testentwurf."}}
  },
  {
    ch: 3,
    lo: "FL-3.1.1 (K1)",
    stem: "Which of the following can be examined by static testing?",
    romans: ["Source code","Test cases","Contracts and project plans","The behaviour of the system observed during an exploratory testing session","User stories with their acceptance criteria"],
    stem2: "",
    opts: ["i, ii and iii only","i, ii, iii and v","i, ii and v only","i, ii, iii, iv and v"],
    ans: [1],
    just: "Static testing can be applied to almost any work product that can be read and reasoned about, including code, testware, contracts, plans and user stories. Item iv is not a work product but behaviour observed while the software is running, which is dynamic testing.",
    i18n: {"de":{"stem":"Was kann mit statischem Test untersucht werden?","romans":["Quellcode","Testfälle","Verträge und Projektpläne","Das Verhalten des Systems, das während einer explorativen Testsitzung beobachtet wird","User Storys mit ihren Abnahmekriterien"],"opts":["nur i, ii und iii","i, ii, iii und v","nur i, ii und v","i, ii, iii, iv und v"],"just":"Statischer Test lässt sich auf nahezu jedes Arbeitsergebnis anwenden, das gelesen und geprüft werden kann, also auch auf Code, Testmittel, Verträge, Pläne und User Storys. Punkt iv ist kein Arbeitsergebnis, sondern ein während der Ausführung beobachtetes Verhalten und damit dynamischer Test."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.4 (K3)",
    stem: "Your team estimates the effort to test a new reporting feature using the three-point estimation technique. The estimates are:",
    extra: "<ul><li>Most optimistic estimate: 6 person-days</li><li>Most likely estimate: 9 person-days</li><li>Most pessimistic estimate: 24 person-days</li></ul>",
    stem2: "What is the resulting estimate?",
    opts: ["11 person-days","9 person-days","13 person-days","15 person-days"],
    ans: [0],
    just: "The three-point estimate is (optimistic + 4 × most likely + pessimistic) / 6 = (6 + 36 + 24) / 6 = 66 / 6 = 11 person-days. The value 13 is the plain arithmetic mean of the three estimates, and 9 is the most likely estimate on its own.",
    i18n: {"de":{"stem":"Ihr Team schätzt den Testaufwand für eine neue Berichtsfunktion mit der Drei-Punkt-Schätzung. Die Schätzwerte lauten:","extra":"<ul><li>Optimistischste Schätzung: 6 Personentage</li><li>Wahrscheinlichste Schätzung: 9 Personentage</li><li>Pessimistischste Schätzung: 24 Personentage</li></ul>","stem2":"Wie hoch ist der resultierende Schätzwert?","opts":["11 Personentage","9 Personentage","13 Personentage","15 Personentage"],"just":"Die Drei-Punkt-Schätzung lautet (optimistisch + 4 × wahrscheinlich + pessimistisch) / 6 = (6 + 36 + 24) / 6 = 66 / 6 = 11 Personentage. Der Wert 13 ist das einfache arithmetische Mittel der drei Schätzungen, und 9 ist allein die wahrscheinlichste Schätzung."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.3 (K2)",
    stem: "A business analyst misunderstood a national tax rule and wrote the corresponding requirement incorrectly. The developer implemented the requirement exactly as written. During system testing, an invoice showed 19% VAT where 7% VAT should have been applied.",
    stem2: "Which of the following classifies this situation CORRECTLY?",
    opts: ["The misunderstanding of the tax rule is a defect, the incorrect requirement is an error, and the wrong VAT rate on the invoice is the root cause","The incorrect requirement is the root cause, the wrong VAT rate on the invoice is a defect, and the developer's implementation is a failure","The wrong VAT rate on the invoice is a defect, the incorrect requirement is a failure, and the developer's implementation is an error","The misunderstanding of the tax rule is the root cause, the incorrect requirement is a defect, and the wrong VAT rate on the invoice is a failure"],
    ans: [3],
    just: "A human error (the misunderstanding) is the root cause; it produced a defect in the requirement, which was propagated into the code; the observable deviation from the expected result during execution is the failure.",
    i18n: {"de":{"stem":"Ein Business-Analyst hat eine nationale Steuerregel missverstanden und die entsprechende Anforderung falsch formuliert. Der Entwickler hat die Anforderung genau wie beschrieben umgesetzt. Im Systemtest zeigte eine Rechnung 19% Mehrwertsteuer, obwohl 7% hätten angewendet werden müssen.","stem2":"Welche Zuordnung beschreibt diese Situation RICHTIG?","opts":["Das Missverständnis der Steuerregel ist ein Fehlerzustand, die falsche Anforderung ist eine Fehlhandlung, und der falsche Steuersatz auf der Rechnung ist die Grundursache","Die falsche Anforderung ist die Grundursache, der falsche Steuersatz auf der Rechnung ist ein Fehlerzustand, und die Umsetzung durch den Entwickler ist eine Fehlerwirkung","Der falsche Steuersatz auf der Rechnung ist ein Fehlerzustand, die falsche Anforderung ist eine Fehlerwirkung, und die Umsetzung durch den Entwickler ist eine Fehlhandlung","Das Missverständnis der Steuerregel ist die Grundursache, die falsche Anforderung ist ein Fehlerzustand, und der falsche Steuersatz auf der Rechnung ist eine Fehlerwirkung"],"just":"Eine menschliche Fehlhandlung (das Missverständnis) ist die Grundursache; sie erzeugte einen Fehlerzustand in der Anforderung, der in den Code übernommen wurde; die bei der Ausführung sichtbare Abweichung vom erwarteten Ergebnis ist die Fehlerwirkung."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.3 (K3)",
    stem: "A car rental system implements the following rules:",
    extra: "<ul><li>A car can be rented only by a customer who holds a valid driving licence</li><li>Customers younger than 25 pay a young-driver surcharge</li><li>Customers holding a loyalty card receive a 10% discount, but this discount is not granted when the young-driver surcharge applies</li></ul><p>The decision table below describes the implemented behaviour:</p><div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Valid driving licence</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Younger than 25</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Holds loyalty card</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Actions</td></tr><tr><td class=\"rowhead\">Rental accepted</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Young-driver surcharge</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">10% discount</td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table></div>",
    stem2: "Based ONLY on the rules above, which column of the decision table contradicts the specified behaviour?",
    opts: ["R3","R5","R1","R7"],
    ans: [2],
    just: "R1 describes a customer younger than 25 who holds a loyalty card. The table grants both the young-driver surcharge and the 10% discount, but the specification says the discount is not granted when the surcharge applies. R3, R5 and R7 are all consistent with the rules.",
    i18n: {"de":{"stem":"Ein Mietwagensystem setzt die folgenden Regeln um:","extra":"<ul><li>Ein Fahrzeug kann nur von Kunden gemietet werden, die einen gültigen Führerschein besitzen</li><li>Kunden unter 25 Jahren zahlen einen Jungfahreraufschlag</li><li>Kunden mit Kundenkarte erhalten 10% Rabatt, dieser Rabatt wird jedoch nicht gewährt, wenn der Jungfahreraufschlag anfällt</li></ul><p>Die folgende Entscheidungstabelle beschreibt das umgesetzte Verhalten:</p><div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Gültiger Führerschein</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Jünger als 25</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Besitzt Kundenkarte</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Aktionen</td></tr><tr><td class=\"rowhead\">Vermietung angenommen</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Jungfahreraufschlag</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">10% Rabatt</td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table></div><p>W steht für wahr, F für falsch.</p>","stem2":"Welche Spalte der Entscheidungstabelle widerspricht AUSSCHLIESSLICH nach den oben genannten Regeln dem spezifizierten Verhalten?","opts":["R3","R5","R1","R7"],"just":"R1 beschreibt einen Kunden unter 25 Jahren, der eine Kundenkarte besitzt. Die Tabelle gewährt sowohl den Jungfahreraufschlag als auch die 10% Rabatt, die Spezifikation schließt den Rabatt jedoch aus, sobald der Aufschlag anfällt. R3, R5 und R7 stimmen mit den Regeln überein."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.5 (K3)",
    stem: "Consider the following test cases for an online shop, with their priorities (a lower number means a higher priority) and their logical dependencies:",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th>Test case</th><th class=\"rowhead\">Test condition covered</th><th>Priority</th><th>Depends on</th></tr><tr><td>TC 001</td><td class=\"rowhead\">Create customer account</td><td>2</td><td>none</td></tr><tr><td>TC 002</td><td class=\"rowhead\">Log in</td><td>1</td><td>TC 001</td></tr><tr><td>TC 003</td><td class=\"rowhead\">Add item to basket</td><td>3</td><td>TC 002</td></tr><tr><td>TC 004</td><td class=\"rowhead\">Change password</td><td>2</td><td>TC 002</td></tr><tr><td>TC 005</td><td class=\"rowhead\">Check out basket</td><td>1</td><td>TC 003</td></tr></table></div>",
    stem2: "Which test case should be executed as the THIRD one?",
    opts: ["TC 004","TC 002","TC 003","TC 005"],
    ans: [0],
    just: "TC 001 must run first because everything depends on it. TC 002 is then the only executable test case and also the highest priority, so it runs second. After that TC 003 (priority 3) and TC 004 (priority 2) are both executable, and the higher priority TC 004 runs third.",
    i18n: {"de":{"stem":"Betrachten Sie die folgenden Testfälle für einen Onlineshop mit ihren Prioritäten (eine kleinere Zahl bedeutet eine höhere Priorität) und ihren logischen Abhängigkeiten:","extra":"<div class=\"figure\"><table class=\"dt\"><tr><th>Testfall</th><th class=\"rowhead\">Abgedeckte Testbedingung</th><th>Priorität</th><th>Hängt ab von</th></tr><tr><td>TF 001</td><td class=\"rowhead\">Kundenkonto anlegen</td><td>2</td><td>keine</td></tr><tr><td>TF 002</td><td class=\"rowhead\">Anmelden</td><td>1</td><td>TF 001</td></tr><tr><td>TF 003</td><td class=\"rowhead\">Artikel in den Warenkorb legen</td><td>3</td><td>TF 002</td></tr><tr><td>TF 004</td><td class=\"rowhead\">Passwort ändern</td><td>2</td><td>TF 002</td></tr><tr><td>TF 005</td><td class=\"rowhead\">Warenkorb bestellen</td><td>1</td><td>TF 003</td></tr></table></div>","stem2":"Welcher Testfall sollte als DRITTER durchgeführt werden?","opts":["TF 004","TF 002","TF 003","TF 005"],"just":"TF 001 muss zuerst laufen, weil alles andere davon abhängt. Danach ist TF 002 der einzige durchführbare Testfall und zugleich der mit der höchsten Priorität, er läuft also als zweiter. Anschließend sind TF 003 (Priorität 3) und TF 004 (Priorität 2) durchführbar, und der höher priorisierte TF 004 läuft als dritter."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.5 (K2)",
    stem: "Which of the following is an example of a shift-left approach?",
    opts: ["Performing beta testing with selected end users after system testing has been completed","Reviewing the acceptance criteria of a user story together with the developers before implementation starts","Running the complete regression suite in a production-like environment shortly before the release","Monitoring the behaviour of the system in production so that defects can be found earlier in the next release"],
    ans: [1],
    just: "Shift left means performing testing activities earlier in the lifecycle, such as reviewing requirements and acceptance criteria before any code is written. The other options all take place late in the lifecycle or after release.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Beispiel für einen Shift-Left-Ansatz?","opts":["Einen Betatest mit ausgewählten Endanwendern durchführen, nachdem der Systemtest abgeschlossen ist","Die Abnahmekriterien einer User Story gemeinsam mit den Entwicklern prüfen, bevor die Umsetzung beginnt","Die vollständige Regressionstestsuite kurz vor der Freigabe in einer produktionsnahen Umgebung ausführen","Das Verhalten des Systems im Produktivbetrieb überwachen, damit Fehlerzustände in der nächsten Freigabe früher gefunden werden"],"just":"Shift Left bedeutet, Testaktivitäten früher im Lebenszyklus durchzuführen, etwa Anforderungen und Abnahmekriterien zu prüfen, bevor Code geschrieben wird. Alle übrigen Antworten finden spät im Lebenszyklus oder nach der Freigabe statt."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.2 (K2)",
    stem: "During which activity of the review process are the findings of the individual reviewers collected and discussed, and decisions taken on each of them?",
    opts: ["Planning","Individual review","Fixing and reporting","Communication and analysis"],
    ans: [3],
    just: "In communication and analysis the anomalies found during individual review are communicated, discussed, and each is given a status such as defect, improvement or no action needed. Planning defines scope and criteria, individual review produces the findings, and fixing and reporting handles the agreed corrections.",
    i18n: {"de":{"stem":"In welcher Aktivität des Reviewprozesses werden die Befunde der einzelnen Reviewer zusammengetragen, besprochen und über jeden Befund entschieden?","opts":["Planung","Individuelles Review","Beheben und Berichten","Kommunikation und Analyse"],"just":"In der Kommunikation und Analyse werden die im individuellen Review gefundenen Anomalien mitgeteilt, diskutiert und jeweils mit einem Status versehen, etwa Fehlerzustand, Verbesserung oder kein Handlungsbedarf. Die Planung legt Umfang und Kriterien fest, das individuelle Review erzeugt die Befunde, und das Beheben und Berichten kümmert sich um die vereinbarten Korrekturen."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.4 (K3)",
    stem: "The lifecycle of a customer contract is modelled by the state transition diagram below. The initial state is NEW; REJECTED and CLOSED are final states.",
    fig: "contract-states",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% valid transitions coverage, if every test case starts in NEW and ends in a final state?",
    opts: ["2","4","3","6"],
    ans: [2],
    just: "There are six valid transitions. The transition NEW &rarr; REJECTED ends the test immediately, so it needs its own test case. The transitions SUSPENDED &rarr; CLOSED and ACTIVE &rarr; CLOSED both end in a final state and therefore cannot appear in the same test case. Three test cases are enough, for example: (1) reject; (2) approve, suspend, reactivate, close; (3) approve, suspend, close.",
    i18n: {"de":{"stem":"Der Lebenszyklus eines Kundenvertrags wird durch das folgende Zustandsübergangsdiagramm beschrieben. Der Anfangszustand ist NEU; ABGELEHNT und GESCHLOSSEN sind Endzustände.","stem2":"Wie viele Testfälle sind MINDESTENS nötig, um 100% Überdeckung der gültigen Zustandsübergänge zu erreichen, wenn jeder Testfall in NEU beginnt und in einem Endzustand endet?","opts":["2","4","3","6"],"just":"Es gibt sechs gültige Zustandsübergänge. Der Übergang NEU &rarr; ABGELEHNT beendet den Test sofort und benötigt daher einen eigenen Testfall. Die Übergänge AUSGESETZT &rarr; GESCHLOSSEN und AKTIV &rarr; GESCHLOSSEN enden beide in einem Endzustand und können deshalb nicht im selben Testfall vorkommen. Drei Testfälle genügen, zum Beispiel: (1) ablehnen; (2) genehmigen, aussetzen, reaktivieren, schließen; (3) genehmigen, aussetzen, schließen."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.2 (K1)",
    stem: "Which of the following statements BEST distinguishes quality assurance (QA) from quality control (QC)?",
    opts: ["QA is performed by an independent team, while QC is always performed by the development team","QA is process-oriented and focuses on the implementation of good processes, while QC is product-oriented and focuses on reaching an appropriate level of quality","QA consists of the corrective actions taken after failures are observed, while QC consists of the preventive actions","QA covers both static and dynamic testing, while QC covers dynamic testing only"],
    ans: [1],
    just: "QA is a process-oriented, preventive approach that aims at building the product right by improving the processes. QC is product-oriented and corrective, and testing is one of its activities. Independence and the static/dynamic split are unrelated to this distinction.",
    i18n: {"de":{"stem":"Welche Aussage unterscheidet Qualitätssicherung (QS) und Qualitätslenkung (QL) am BESTEN?","opts":["QS wird von einem unabhängigen Team durchgeführt, QL immer vom Entwicklungsteam","QS ist prozessorientiert und zielt auf die Umsetzung guter Prozesse, QL ist produktorientiert und zielt auf das Erreichen eines angemessenen Qualitätsniveaus","QS umfasst die korrigierenden Maßnahmen nach beobachteten Fehlerwirkungen, QL die vorbeugenden Maßnahmen","QS umfasst statischen und dynamischen Test, QL nur den dynamischen Test"],"just":"Qualitätssicherung ist ein prozessorientierter, vorbeugender Ansatz, der über die Verbesserung der Prozesse dafür sorgt, dass das Produkt richtig entsteht. Qualitätslenkung ist produktorientiert und korrigierend, und Testen ist eine ihrer Aktivitäten. Unabhängigkeit und die Unterscheidung statisch/dynamisch haben mit dieser Abgrenzung nichts zu tun."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.7 (K2)",
    stem: "Consider the following test categories (1-4) and agile testing quadrants (A-D):",
    match: {"items":["Exploratory testing","Component integration testing","Performance efficiency testing","Business-facing functional tests written with the product owner"],"cats":["Quadrant Q1: technology facing, supporting the team","Quadrant Q2: business facing, supporting the team","Quadrant Q3: business facing, critique the product","Quadrant Q4: technology facing, critique the product"]},
    stem2: "How do these test categories map onto the agile testing quadrants?",
    opts: ["1D, 2A, 3C, 4B","1C, 2B, 3D, 4A","1B, 2A, 3D, 4C","1C, 2A, 3D, 4B"],
    ans: [3],
    just: "Exploratory testing is business facing and critiques the product (Q3). Component integration testing is technology facing and supports the team (Q1). Performance efficiency testing is technology facing and critiques the product (Q4). Business-facing functional tests agreed with the product owner support the team (Q2).",
    i18n: {"de":{"stem":"Betrachten Sie die folgenden Testkategorien (1-4) und die agilen Testquadranten (A-D):","match":{"items":["Exploratives Testen","Komponentenintegrationstest","Test der Performanzeffizienz","Fachlich ausgerichtete Funktionstests, die gemeinsam mit dem Product Owner erstellt wurden"],"cats":["Quadrant Q1: technologisch ausgerichtet, unterstützt das Team","Quadrant Q2: fachlich ausgerichtet, unterstützt das Team","Quadrant Q3: fachlich ausgerichtet, bewertet das Produkt kritisch","Quadrant Q4: technologisch ausgerichtet, bewertet das Produkt kritisch"]},"stem2":"Wie ordnen sich diese Testkategorien den agilen Testquadranten zu?","opts":["1D, 2A, 3C, 4B","1C, 2B, 3D, 4A","1B, 2A, 3D, 4C","1C, 2A, 3D, 4B"],"just":"Exploratives Testen ist fachlich ausgerichtet und bewertet das Produkt kritisch (Q3). Der Komponentenintegrationstest ist technologisch ausgerichtet und unterstützt das Team (Q1). Der Test der Performanzeffizienz ist technologisch ausgerichtet und bewertet das Produkt kritisch (Q4). Fachlich ausgerichtete Funktionstests, die mit dem Product Owner abgestimmt sind, unterstützen das Team (Q2)."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.1 / 4.3.2 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1   READ x\n2   READ y\n3   IF x &gt; 0 THEN\n4       z = x\n5   ELSE\n6       z = 0\n7   END IF\n8   IF y &gt; 10 THEN\n9       z = z + y\n10  END IF\n11  PRINT z",
    stem2: "Two test cases are executed: TC1 with x = 5, y = 20 and TC2 with x = -3, y = 20. What coverage do these two test cases achieve together?",
    opts: ["100% statement coverage and 75% branch coverage","100% statement coverage and 100% branch coverage","75% statement coverage and 100% branch coverage","100% statement coverage and 50% branch coverage"],
    ans: [0],
    just: "Together the two test cases execute every executable statement, so statement coverage is 100%. There are four branches: both outcomes of the first decision are taken, but the second decision (y &gt; 10) is only ever true, so three of four branches are exercised, that is 75% branch coverage.",
    i18n: {"de":{"stem":"Betrachten Sie den folgenden Pseudocode:","stem2":"Es werden zwei Testfälle durchgeführt: TF1 mit x = 5, y = 20 und TF2 mit x = -3, y = 20. Welche Überdeckung erreichen diese beiden Testfälle zusammen?","opts":["100% Anweisungsüberdeckung und 75% Zweigüberdeckung","100% Anweisungsüberdeckung und 100% Zweigüberdeckung","75% Anweisungsüberdeckung und 100% Zweigüberdeckung","100% Anweisungsüberdeckung und 50% Zweigüberdeckung"],"just":"Zusammen führen die beiden Testfälle jede ausführbare Anweisung aus, die Anweisungsüberdeckung beträgt also 100%. Es gibt vier Zweige: bei der ersten Entscheidung werden beide Ausgänge durchlaufen, die zweite Entscheidung (y &gt; 10) ist jedoch stets wahr, sodass drei von vier Zweigen durchlaufen werden, also 75% Zweigüberdeckung."}}
  },
  {
    ch: 2,
    lo: "FL-2.2.2 (K2)",
    stem: "A defect in the payment module has been fixed. The team re-executes the test case that originally exposed the defect and, in addition, executes the test cases covering the invoicing module, which shares a library with the payment module.",
    stem2: "Which of the following describes these two sets of tests CORRECTLY?",
    opts: ["Both sets are confirmation tests","Re-executing the test case that exposed the defect is regression testing, and executing the invoicing tests is confirmation testing","Re-executing the test case that exposed the defect is confirmation testing, and executing the invoicing tests is regression testing","Both sets are maintenance tests, because they are executed after a change"],
    ans: [2],
    just: "Confirmation testing re-executes the failing test to verify that the defect has been fixed. Regression testing executes other tests to detect unintended side effects of the change in parts of the software that were not modified, such as the invoicing module sharing the library.",
    i18n: {"de":{"stem":"Ein Fehlerzustand im Zahlungsmodul wurde behoben. Das Team führt den Testfall erneut aus, der den Fehlerzustand ursprünglich aufgedeckt hat, und führt zusätzlich die Testfälle für das Rechnungsmodul aus, das sich eine Bibliothek mit dem Zahlungsmodul teilt.","stem2":"Welche Aussage beschreibt diese beiden Testmengen RICHTIG?","opts":["Beide Mengen sind Fehlernachtests","Das erneute Ausführen des aufdeckenden Testfalls ist ein Regressionstest, das Ausführen der Rechnungstests ist ein Fehlernachtest","Das erneute Ausführen des aufdeckenden Testfalls ist ein Fehlernachtest, das Ausführen der Rechnungstests ist ein Regressionstest","Beide Mengen sind Wartungstests, weil sie nach einer Änderung ausgeführt werden"],"just":"Beim Fehlernachtest wird der zuvor fehlgeschlagene Test erneut ausgeführt, um zu prüfen, ob der Fehlerzustand behoben ist. Der Regressionstest führt weitere Tests aus, um unbeabsichtigte Seiteneffekte der Änderung in nicht geänderten Teilen der Software aufzudecken, etwa im Rechnungsmodul, das die gemeinsame Bibliothek nutzt."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.4 (K2)",
    stem: "The reviews carried out in your organization have the following characteristics: the main purpose is to detect potential defects and evaluate quality; every participant prepares individually; the meeting is led by a trained moderator and not by the author; metrics are collected and used to improve the software development process; a formal follow-up takes place.",
    stem2: "Which review type is MOST likely being used?",
    opts: ["Informal review","Inspection","Walkthrough","Technical review"],
    ans: [1],
    just: "The combination of a trained moderator who is not the author, defined roles, individual preparation, metrics collection for process improvement and formal follow-up characterizes an inspection, the most formal review type. A walkthrough is led by the author, and a technical review is led by a moderator but focuses on technical decisions and does not require this level of formality.",
    i18n: {"de":{"stem":"Die Reviews in Ihrer Organisation haben die folgenden Merkmale: Hauptzweck ist das Aufdecken möglicher Fehlerzustände und die Bewertung der Qualität; jeder Teilnehmer bereitet sich individuell vor; die Sitzung wird von einem geschulten Moderator geleitet und nicht vom Autor; es werden Metriken erhoben und zur Verbesserung des Entwicklungsprozesses genutzt; es findet eine formale Nachverfolgung statt.","stem2":"Welcher Reviewtyp wird hier am wahrscheinlichsten eingesetzt?","opts":["Informelles Review","Inspektion","Walkthrough","Technisches Review"],"just":"Die Kombination aus einem geschulten Moderator, der nicht der Autor ist, definierten Rollen, individueller Vorbereitung, Metrikerhebung zur Prozessverbesserung und formaler Nachverfolgung kennzeichnet die Inspektion, den formalsten Reviewtyp. Ein Walkthrough wird vom Autor geleitet, und ein technisches Review wird zwar moderiert, konzentriert sich aber auf technische Entscheidungen und verlangt diesen Formalitätsgrad nicht."}}
  },
  {
    ch: 1,
    lo: "FL-1.3.1 (K2)",
    stem: "Your team has executed the same set of 250 automated regression tests every night for the last nine months. All of them still pass, yet users keep reporting production incidents in exactly the areas these tests cover.",
    stem2: "Which testing principle BEST explains this situation?",
    opts: ["Tests wear out","Testing shows the presence, not the absence, of defects","Defects cluster together","Testing is context dependent"],
    ans: [0],
    just: "Repeating the same tests unchanged means they stop finding new defects, because the defects they were able to reveal have already been found. The remedy is to review and revise the tests regularly and add new ones. The other principles are true statements but do not explain why an unchanged test set loses its effectiveness.",
    i18n: {"de":{"stem":"Ihr Team führt seit neun Monaten jede Nacht dieselben 250 automatisierten Regressionstests aus. Alle laufen weiterhin erfolgreich durch, dennoch melden Anwender laufend Störungen im Produktivbetrieb, und zwar genau in den Bereichen, die diese Tests abdecken.","stem2":"Welcher Grundsatz des Testens erklärt diese Situation am BESTEN?","opts":["Tests nutzen sich ab","Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit","Fehlerzustände treten gehäuft auf","Testen ist kontextabhängig"],"just":"Werden dieselben Tests unverändert wiederholt, decken sie keine neuen Fehlerzustände mehr auf, weil die von ihnen erreichbaren Fehlerzustände bereits gefunden wurden. Abhilfe schafft, die Tests regelmäßig zu überprüfen, anzupassen und zu ergänzen. Die anderen Grundsätze sind zutreffend, erklären aber nicht, warum eine unveränderte Testmenge ihre Wirksamkeit verliert."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.3 (K2)",
    stem: "Which of the following is NOT a benefit of white-box test techniques?",
    opts: ["White-box coverage metrics can identify the additional tests needed to increase code coverage","White-box testing can reveal parts of the code that are not exercised by tests derived from the specification","White-box testing provides objective evidence of how thoroughly the code structure has been tested","White-box testing confirms that all specified requirements have been implemented correctly"],
    ans: [3],
    just: "White-box techniques measure and exercise the structure of the code that exists; they cannot show that a requirement was implemented or, in particular, that a requirement was forgotten, since missing code cannot be covered. The other three are genuine benefits.",
    i18n: {"de":{"stem":"Welches der folgenden ist KEIN Nutzen von White-Box-Testverfahren?","opts":["White-Box-Überdeckungsmaße zeigen auf, welche zusätzlichen Tests die Codeüberdeckung erhöhen würden","White-Box-Test kann Codeteile aufdecken, die von spezifikationsbasierten Tests nicht durchlaufen werden","White-Box-Test liefert objektive Nachweise darüber, wie gründlich die Codestruktur getestet wurde","White-Box-Test bestätigt, dass alle spezifizierten Anforderungen korrekt umgesetzt wurden"],"just":"White-Box-Verfahren messen und durchlaufen die Struktur des vorhandenen Codes; sie können nicht zeigen, dass eine Anforderung umgesetzt wurde, und schon gar nicht, dass eine Anforderung vergessen wurde, denn fehlender Code lässt sich nicht überdecken. Die übrigen drei Antworten sind tatsächliche Vorteile."}}
  },
  {
    ch: 5,
    lo: "FL-5.2.4 (K2)",
    stem: "During product risk analysis the following risk was identified: <em>orders may be lost when more than 2000 users are connected at the same time</em>. The likelihood was assessed as high and the impact as high. The team decided that an independent test team will perform performance efficiency testing during system testing, and that a fallback procedure for re-entering lost orders manually will be documented and rehearsed with the support staff.",
    stem2: "Which risk control measures have been chosen?",
    opts: ["Risk mitigation only","Risk acceptance and risk transfer","Risk mitigation and contingency plan","Risk transfer and contingency plan"],
    ans: [2],
    just: "Performing performance efficiency testing reduces the likelihood that the risk materializes, which is mitigation. Preparing and rehearsing a manual fallback procedure reduces the impact if it does materialize anyway, which is a contingency plan. Nothing here transfers the risk to another party or simply accepts it.",
    i18n: {"de":{"stem":"Bei der Produktrisikoanalyse wurde folgendes Risiko identifiziert: <em>Bestellungen können verloren gehen, wenn mehr als 2000 Benutzer gleichzeitig verbunden sind</em>. Die Eintrittswahrscheinlichkeit wurde als hoch und die Auswirkung als hoch bewertet. Das Team hat entschieden, dass ein unabhängiges Testteam während des Systemtests einen Test der Performanzeffizienz durchführt und dass ein Rückfallverfahren zur manuellen Nacherfassung verlorener Bestellungen dokumentiert und mit dem Support geübt wird.","stem2":"Welche Maßnahmen zur Risikosteuerung wurden gewählt?","opts":["Nur Risikominderung","Risikoakzeptanz und Risikoübertragung","Risikominderung und Notfallplan","Risikoübertragung und Notfallplan"],"just":"Der Test der Performanzeffizienz verringert die Wahrscheinlichkeit, dass das Risiko eintritt, das ist Risikominderung. Das dokumentierte und geübte manuelle Rückfallverfahren verringert die Auswirkung, falls es dennoch eintritt, das ist ein Notfallplan. Nichts davon überträgt das Risiko auf Dritte oder akzeptiert es lediglich."}}
  },
  {
    ch: 6,
    lo: "FL-6.2.1 (K1)",
    stem: "Which of the following is a RISK of using test automation?",
    opts: ["The effort required to maintain the automated tests may be underestimated","The automated tests can be executed far more often than manual tests","Automated tests deliver objective and repeatable results","Automation reduces the time needed to execute the regression test suite"],
    ans: [0],
    just: "Testware needs maintaining whenever the test object changes, and underestimating that effort is one of the classic risks of automation. The other options all describe benefits of automation, not risks.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein RISIKO der Testautomatisierung?","opts":["Der Aufwand für die Pflege der automatisierten Tests wird möglicherweise unterschätzt","Die automatisierten Tests können weit häufiger ausgeführt werden als manuelle Tests","Automatisierte Tests liefern objektive und wiederholbare Ergebnisse","Die Automatisierung verkürzt die Zeit für die Durchführung der Regressionstestsuite"],"just":"Testmittel müssen gepflegt werden, sobald sich das Testobjekt ändert, und diesen Aufwand zu unterschätzen ist eines der klassischen Risiken der Automatisierung. Die übrigen Antworten beschreiben Vorteile der Automatisierung, keine Risiken."}}
  },
  {
    ch: 2,
    lo: "FL-2.3.1 (K2)",
    stem: "Which of the following situations would MOST likely trigger maintenance testing?",
    opts: ["A new user story is added to the backlog of the current iteration of a system still under development","A component test suite is created for a newly written component before it is integrated","The test manager decides to increase the level of test independence in the project","The operating system of the servers hosting a system that has been in production for two years is upgraded"],
    ans: [3],
    just: "Maintenance testing is performed on an operational system when it is changed, migrated or retired, and an environment upgrade such as a new operating system version is a typical trigger. The other options describe activities on a system that is still under development, or an organizational decision.",
    i18n: {"de":{"stem":"Welche der folgenden Situationen löst am wahrscheinlichsten einen Wartungstest aus?","opts":["Eine neue User Story wird dem Backlog der laufenden Iteration eines noch in Entwicklung befindlichen Systems hinzugefügt","Für eine neu geschriebene Komponente wird vor der Integration eine Komponententestsuite erstellt","Der Testmanager beschließt, den Grad der Testunabhängigkeit im Projekt zu erhöhen","Das Betriebssystem der Server, auf denen ein seit zwei Jahren produktives System läuft, wird aktualisiert"],"just":"Wartungstest wird an einem im Betrieb befindlichen System durchgeführt, wenn dieses geändert, migriert oder außer Betrieb genommen wird; eine Aktualisierung der Umgebung wie eine neue Betriebssystemversion ist ein typischer Auslöser. Die übrigen Antworten beschreiben Aktivitäten an einem noch in Entwicklung befindlichen System oder eine organisatorische Entscheidung."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.2 (K2)",
    stem: "Which of the following BEST describes exploratory testing?",
    opts: ["Tests are designed in advance from a checklist and then executed exactly as specified","Test design, test execution and learning happen in parallel, usually in time-boxed sessions guided by a test charter","Tests are derived from the code structure by the developer who wrote the component","The tester clicks through the application at random and records nothing"],
    ans: [1],
    just: "In exploratory testing the tester designs, executes and evaluates tests at the same time, learning about the test object as they go, typically within a time-boxed session steered by a test charter and documented in session sheets. It is neither unstructured nor undocumented.",
    i18n: {"de":{"stem":"Was beschreibt exploratives Testen am BESTEN?","opts":["Die Tests werden vorab aus einer Checkliste entworfen und anschließend genau wie spezifiziert durchgeführt","Testentwurf, Testdurchführung und Lernen erfolgen parallel, üblicherweise in zeitlich begrenzten Sitzungen, die von einer Testcharta geleitet werden","Die Tests werden von dem Entwickler, der die Komponente geschrieben hat, aus der Codestruktur abgeleitet","Der Tester klickt zufällig durch die Anwendung und dokumentiert nichts"],"just":"Beim explorativen Testen entwirft, führt und bewertet der Tester die Tests gleichzeitig und lernt dabei das Testobjekt kennen, typischerweise in einer zeitlich begrenzten Sitzung, die von einer Testcharta gesteuert und in Sitzungsprotokollen festgehalten wird. Es ist weder unstrukturiert noch undokumentiert."}}
  },
  {
    ch: 1,
    lo: "FL-1.4.1 (K2)",
    stem: "Which TWO of the following tasks are performed during test implementation?",
    multi: true,
    opts: ["Creating test suites from the available test procedures","Identifying the features to be tested and defining the test conditions","Deriving test cases and test data from the test conditions","Building the test environment and verifying that it has been set up correctly","Comparing actual results with expected results and reporting anomalies"],
    ans: [0,3],
    just: "Test implementation prepares everything needed to run the tests: creating test suites, arranging the testware, and building and verifying the test environment. Identifying the features and test conditions belongs to test analysis, deriving test cases and test data belongs to test design, and comparing actual with expected results belongs to test execution.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden Aufgaben gehören zur Testrealisierung?","opts":["Testsuiten aus den vorhandenen Testabläufen erstellen","Die zu testenden Funktionen bestimmen und die Testbedingungen festlegen","Testfälle und Testdaten aus den Testbedingungen ableiten","Die Testumgebung aufbauen und prüfen, ob sie korrekt eingerichtet ist","Ist-Ergebnisse mit Soll-Ergebnissen vergleichen und Anomalien berichten"],"just":"Die Testrealisierung bereitet alles vor, was für die Durchführung nötig ist: Testsuiten erstellen, die Testmittel bereitstellen und die Testumgebung aufbauen und überprüfen. Das Bestimmen der Funktionen und Testbedingungen gehört zur Testanalyse, das Ableiten von Testfällen und Testdaten zum Testentwurf und der Ergebnisvergleich zur Testdurchführung."}}
  },
  {
    ch: 5,
    lo: "FL-5.3.2 (K2)",
    stem: "Which information is MOST appropriate for a test progress report addressed to project stakeholders during test execution?",
    opts: ["The detailed steps of every test procedure that failed","The complete list of test scripts held in the configuration management system","The status of testing against the agreed exit criteria, including test progress, defect status and product risk status","The technical root cause of every defect found so far"],
    ans: [2],
    just: "A test progress report tells the stakeholders where testing stands against the plan and the exit criteria, and which risks and defects affect the release decision. Test procedure steps, script inventories and root cause analyses are working detail for the team, not stakeholder reporting.",
    i18n: {"de":{"stem":"Welche Information gehört am ehesten in einen Testfortschrittsbericht, der sich während der Testdurchführung an die Projektbeteiligten richtet?","opts":["Die detaillierten Schritte jedes fehlgeschlagenen Testablaufs","Die vollständige Liste der im Konfigurationsmanagement verwalteten Testskripte","Der Stand des Testens gegenüber den vereinbarten Endekriterien, einschließlich Testfortschritt, Fehlerstatus und Status der Produktrisiken","Die technische Grundursache jedes bisher gefundenen Fehlerzustands"],"just":"Ein Testfortschrittsbericht sagt den Beteiligten, wo das Testen gegenüber Plan und Endekriterien steht und welche Risiken und Fehlerzustände die Freigabeentscheidung beeinflussen. Testablaufschritte, Skriptlisten und Ursachenanalysen sind Arbeitsdetails des Teams und keine Berichterstattung an Projektbeteiligte."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.3 (K1)",
    stem: "Which of the following tasks belongs to the review leader (moderator)?",
    opts: ["Scheduling the review activities and mediating between the participants during the meeting","Creating the work product under review and offering to fix the defects that were found","Recording the anomalies found and the decisions taken during the review meeting","Deciding that reviews shall be executed and allocating budget and time for them"],
    ans: [0],
    just: "The review leader plans and schedules the review activities and mediates between the participants so that the review objectives are met. Creating the work product is the author's role, recording the anomalies and decisions is the scribe's, and deciding that reviews shall be executed and funding them is the manager's.",
    i18n: {"de":{"stem":"Welche Aufgabe gehört zur Rolle des Reviewleiters (Moderators)?","opts":["Die Reviewaktivitäten terminieren und während der Sitzung zwischen den Teilnehmern vermitteln","Das zu prüfende Arbeitsergebnis erstellen und anbieten, die gefundenen Fehlerzustände zu beheben","Die gefundenen Anomalien und die in der Reviewsitzung getroffenen Entscheidungen protokollieren","Entscheiden, dass Reviews durchgeführt werden, und Budget und Zeit dafür bereitstellen"],"just":"Der Reviewleiter plant und terminiert die Reviewaktivitäten und vermittelt zwischen den Teilnehmern, damit die Reviewziele erreicht werden. Das Erstellen des Arbeitsergebnisses ist Aufgabe des Autors, das Protokollieren der Anomalien und Entscheidungen Aufgabe des Protokollanten, und die Entscheidung, Reviews durchzuführen und zu finanzieren, Aufgabe des Managements."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.1 (K2)",
    stem: "Which of the following is the BEST example of applying error guessing?",
    opts: ["A tester systematically derives the test cases from a decision table","A tester who knows that division by zero has repeatedly caused defects in similar systems tests the calculation with a divisor of 0","A tester uses a standard checklist of usability heuristics to evaluate the user interface","A tester re-runs an existing test set on a new version of the software to check for regressions"],
    ans: [1],
    just: "Error guessing anticipates the errors, defects and failures that are likely to occur, based on the tester's knowledge of how the application worked in the past, what kind of errors developers tend to make, and failures observed in similar systems. The other options describe a black-box technique, checklist-based testing and regression testing.",
    i18n: {"de":{"stem":"Welches der folgenden ist das BESTE Beispiel für die intuitive Testfallermittlung (Error Guessing)?","opts":["Ein Tester leitet die Testfälle systematisch aus einer Entscheidungstabelle ab","Ein Tester, der weiß, dass die Division durch null in ähnlichen Systemen wiederholt zu Fehlerzuständen geführt hat, prüft die Berechnung mit dem Divisor 0","Ein Tester bewertet die Benutzungsoberfläche anhand einer Standardcheckliste für Gebrauchstauglichkeit","Ein Tester führt eine vorhandene Testmenge auf einer neuen Softwareversion erneut aus, um Regressionen zu erkennen"],"just":"Die intuitive Testfallermittlung nimmt vorweg, welche Fehlhandlungen, Fehlerzustände und Fehlerwirkungen wahrscheinlich auftreten, gestützt auf das Wissen des Testers über das bisherige Verhalten der Anwendung, über typische Fehlhandlungen von Entwicklern und über Fehlerwirkungen in ähnlichen Systemen. Die übrigen Antworten beschreiben ein Black-Box-Verfahren, checklistenbasiertes Testen und Regressionstest."}}
  },
  {
    ch: 1,
    lo: "FL-1.4.4 (K2)",
    stem: "Which of the following is the BEST example of the value of traceability between the test basis and the test work products?",
    opts: ["It allows the test manager to identify which testers wrote the most test cases","It guarantees that 100% of the code has been exercised by the executed tests","It reduces the number of test cases needed to reach the agreed coverage criteria","It makes it possible to determine which requirements are affected when a test case fails, and to report test progress in business terms"],
    ans: [3],
    just: "Traceability supports impact analysis, coverage assessment against the test basis, and reporting test results in terms the stakeholders understand. It says nothing about who wrote which test case, it does not measure code coverage, and it does not reduce the number of test cases needed.",
    i18n: {"de":{"stem":"Welches der folgenden ist das BESTE Beispiel für den Nutzen der Nachverfolgbarkeit zwischen Testbasis und Testarbeitsergebnissen?","opts":["Sie erlaubt dem Testmanager festzustellen, welche Tester die meisten Testfälle geschrieben haben","Sie garantiert, dass 100% des Codes von den durchgeführten Tests durchlaufen wurden","Sie verringert die Anzahl der Testfälle, die für das vereinbarte Überdeckungskriterium nötig sind","Sie ermöglicht festzustellen, welche Anforderungen betroffen sind, wenn ein Testfall fehlschlägt, und den Testfortschritt fachlich verständlich zu berichten"],"just":"Nachverfolgbarkeit unterstützt die Auswirkungsanalyse, die Bewertung der Überdeckung gegenüber der Testbasis und die Berichterstattung in einer Sprache, die die Projektbeteiligten verstehen. Sie sagt nichts darüber aus, wer welchen Testfall geschrieben hat, sie misst keine Codeüberdeckung, und sie verringert die nötige Anzahl der Testfälle nicht."}}
  },
  {
    ch: 5,
    lo: "FL-5.4.1 (K2)",
    stem: "Which of the following is supported by configuration management in testing?",
    opts: ["It guarantees that the test environment behaves identically to the production environment","It defines the entry and exit criteria for each test level","It ensures that the test object and all testware are uniquely identified, version controlled and traceable throughout the test process","It determines which test cases should be automated first"],
    ans: [2],
    just: "Configuration management establishes and maintains the integrity of the test object and the testware by identifying, versioning and controlling them, so that test results can be traced back to a known version. The other options belong to environment management, test planning and automation strategy.",
    i18n: {"de":{"stem":"Was wird durch das Konfigurationsmanagement im Testen unterstützt?","opts":["Es garantiert, dass sich die Testumgebung genau wie die Produktionsumgebung verhält","Es legt die Eingangs- und Endekriterien für jede Teststufe fest","Es stellt sicher, dass das Testobjekt und alle Testmittel eindeutig identifiziert, versioniert und über den gesamten Testprozess nachverfolgbar sind","Es bestimmt, welche Testfälle zuerst automatisiert werden sollten"],"just":"Konfigurationsmanagement stellt die Integrität von Testobjekt und Testmitteln her und erhält sie, indem es diese identifiziert, versioniert und kontrolliert, sodass jedes Testergebnis auf eine bekannte Version zurückgeführt werden kann. Die übrigen Antworten gehören zum Umgebungsmanagement, zur Testplanung und zur Automatisierungsstrategie."}}
  },
  {
    ch: 4,
    lo: "FL-4.5.2 (K2)",
    stem: "Which of the following is the BEST reason for defining acceptance criteria for a user story?",
    opts: ["They define the scope of the user story and give an objective basis for deciding whether it is complete","They allow the team to measure the code coverage achieved by the acceptance tests","They remove the need for a test plan in agile projects","They allow the product owner to estimate the effort needed to implement the user story"],
    ans: [0],
    just: "Acceptance criteria describe the conditions the implementation must satisfy, so they bound the scope of the story, support negotiation between the team and the stakeholders, and provide the basis for acceptance tests and for the definition of done.",
    i18n: {"de":{"stem":"Was ist der BESTE Grund, Abnahmekriterien für eine User Story festzulegen?","opts":["Sie grenzen den Umfang der User Story ab und liefern eine objektive Grundlage für die Entscheidung, ob sie fertig ist","Sie erlauben dem Team, die von den Abnahmetests erreichte Codeüberdeckung zu messen","Sie machen ein Testkonzept in agilen Projekten überflüssig","Sie erlauben dem Product Owner, den Aufwand für die Umsetzung der User Story zu schätzen"],"just":"Abnahmekriterien beschreiben die Bedingungen, die die Umsetzung erfüllen muss. Sie grenzen damit den Umfang der Story ab, unterstützen die Abstimmung zwischen Team und Projektbeteiligten und bilden die Grundlage für Abnahmetests und für die Definition of Done."}}
  },
  {
    ch: 1,
    lo: "FL-1.5.3 (K2)",
    stem: "Which of the following is a DISADVANTAGE of a high level of test independence?",
    opts: ["Testers are less likely to be influenced by the assumptions made by the authors of the work products","Testers may become isolated from the development team, which delays feedback and causes communication problems","Testers may find defects that the developers are blind to because of their familiarity with the code","Testers can verify assumptions that were made during the specification and implementation of the system"],
    ans: [1],
    just: "Independence brings valuable objectivity, but taken too far it isolates the testers, slowing feedback, weakening collaboration and sometimes turning testing into a bottleneck. The other options all describe advantages of independence.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein NACHTEIL eines hohen Grades an Testunabhängigkeit?","opts":["Tester lassen sich weniger von den Annahmen der Autoren der Arbeitsergebnisse beeinflussen","Tester können sich vom Entwicklungsteam isolieren, was das Feedback verzögert und Kommunikationsprobleme verursacht","Tester finden Fehlerzustände, für die Entwickler durch ihre Vertrautheit mit dem Code blind sind","Tester können Annahmen überprüfen, die bei Spezifikation und Umsetzung des Systems getroffen wurden"],"just":"Unabhängigkeit bringt wertvolle Objektivität, doch zu weit getrieben isoliert sie die Tester, verlangsamt das Feedback, schwächt die Zusammenarbeit und macht das Testen bisweilen zum Engpass. Die übrigen Antworten beschreiben Vorteile der Unabhängigkeit."}}
  },
  {
    ch: 5,
    lo: "FL-5.5.1 (K3)",
    stem: "Consider the following defect report:",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><td class=\"rowhead\" style=\"text-align:left\">DEF-0871</td><td class=\"rowhead\" style=\"text-align:left\">2026-03-14 &middot; Anna Weber &middot; status: New</td></tr><tr><td class=\"rowhead\" style=\"text-align:left\">Severity: high</td><td class=\"rowhead\" style=\"text-align:left\">Priority: high</td></tr></table></div><p style=\"font-style:italic\">Search returns no results. When the article number AB-1200 is entered in the search field of the product catalogue, the result list stays empty. The expected result is that the article AB-1200 appears in the result list. The behaviour was reproduced in all three attempts. Related to requirement REQ-0345 and test case TC-2210.</p>",
    stem2: "Which critical information is MISSING from this defect report?",
    opts: ["The unique identifier and the date of the report","The expected result and the actual result","The degree of impact on the stakeholder and the urgency of the fix","The identification of the test item, including its version, and the test environment"],
    ans: [3],
    just: "The report identifies itself, dates itself, gives expected and actual result, severity and priority, and references the test basis and test case. What a developer cannot tell from it is which version of the software was tested and in which environment, so the defect may not be reproducible on their side.",
    i18n: {"de":{"stem":"Betrachten Sie den folgenden Fehlerbericht:","extra":"<div class=\"figure\"><table class=\"dt\"><tr><td class=\"rowhead\" style=\"text-align:left\">DEF-0871</td><td class=\"rowhead\" style=\"text-align:left\">14.03.2026 &middot; Anna Weber &middot; Status: neu</td></tr><tr><td class=\"rowhead\" style=\"text-align:left\">Schweregrad: hoch</td><td class=\"rowhead\" style=\"text-align:left\">Priorität: hoch</td></tr></table></div><p style=\"font-style:italic\">Suche liefert keine Treffer. Wird die Artikelnummer AB-1200 in das Suchfeld des Produktkatalogs eingegeben, bleibt die Trefferliste leer. Erwartet wird, dass der Artikel AB-1200 in der Trefferliste erscheint. Das Verhalten wurde in allen drei Versuchen reproduziert. Bezug zu Anforderung REQ-0345 und Testfall TF-2210.</p>","stem2":"Welche entscheidende Information FEHLT in diesem Fehlerbericht?","opts":["Die eindeutige Kennung und das Datum des Berichts","Das erwartete und das tatsächliche Ergebnis","Das Ausmaß der Auswirkung auf die Projektbeteiligten und die Dringlichkeit der Behebung","Die Identifikation des Testobjekts einschließlich seiner Version sowie die Testumgebung"],"just":"Der Bericht nennt seine Kennung, sein Datum, das erwartete und das tatsächliche Ergebnis, Schweregrad und Priorität sowie den Bezug zu Testbasis und Testfall. Was ein Entwickler daraus nicht erkennen kann, ist die getestete Softwareversion und die verwendete Umgebung, sodass der Fehlerzustand auf seiner Seite möglicherweise nicht reproduzierbar ist."}}
  },
  {
    ch: 4,
    lo: "FL-4.5.3 (K3)",
    stem: "Consider the following user story:",
    extra: "<p style=\"font-style:italic;padding-left:1.2rem\">As a registered customer<br>I want to save my payment card in my profile<br>so that I do not have to enter it again for every order</p><p>and its acceptance criteria:</p><ul><li>The customer can add a payment card to the profile</li><li>Only the last four digits of a saved card are displayed</li><li>A customer can save at most three payment cards</li><li>The customer can delete a saved card</li><li>Saving a card requires the customer to be logged in</li></ul>",
    stem2: "Which of the following is the BEST example of an acceptance test-driven development (ATDD) test for this user story?",
    opts: ["Test that the database table storing the cards is indexed on the customer identifier","Test that the customer can change the delivery address stored in the profile","Test that a logged-in customer who has already saved three cards cannot save a fourth one","Test that the full card number is shown when the customer opens the profile page"],
    ans: [2],
    just: "An ATDD test is derived directly from an acceptance criterion of the story. Checking that a customer who has already saved three cards cannot save a fourth covers the criterion limiting a customer to three cards. Indexing a database table is a design detail outside the story, changing the delivery address belongs to a different story, and showing the full card number contradicts the criterion that only the last four digits are displayed.",
    i18n: {"de":{"stem":"Betrachten Sie die folgende User Story:","extra":"<p style=\"font-style:italic;padding-left:1.2rem\">Als registrierter Kunde<br>möchte ich meine Zahlungskarte in meinem Profil speichern,<br>damit ich sie nicht bei jeder Bestellung erneut eingeben muss</p><p>und ihre Abnahmekriterien:</p><ul><li>Der Kunde kann dem Profil eine Zahlungskarte hinzufügen</li><li>Von einer gespeicherten Karte werden nur die letzten vier Ziffern angezeigt</li><li>Ein Kunde kann höchstens drei Zahlungskarten speichern</li><li>Der Kunde kann eine gespeicherte Karte löschen</li><li>Zum Speichern einer Karte muss der Kunde angemeldet sein</li></ul>","stem2":"Welches der folgenden ist das BESTE Beispiel für einen Test nach Acceptance Test-Driven Development (ATDD) für diese User Story?","opts":["Prüfen, dass die Datenbanktabelle mit den Karten auf die Kundennummer indiziert ist","Prüfen, dass der Kunde die im Profil hinterlegte Lieferadresse ändern kann","Prüfen, dass ein angemeldeter Kunde, der bereits drei Karten gespeichert hat, keine vierte speichern kann","Prüfen, dass beim Öffnen der Profilseite die vollständige Kartennummer angezeigt wird"],"just":"Ein ATDD-Test wird unmittelbar aus einem Abnahmekriterium der Story abgeleitet. Zu prüfen, dass ein Kunde mit bereits drei gespeicherten Karten keine vierte speichern kann, deckt das Kriterium der Begrenzung auf drei Karten ab. Die Indizierung einer Datenbanktabelle ist ein Entwurfsdetail außerhalb der Story, das Ändern der Lieferadresse gehört zu einer anderen Story, und die Anzeige der vollständigen Kartennummer widerspricht dem Kriterium, dass nur die letzten vier Ziffern sichtbar sind."}}
  }
   ]
  },
  {
   id: "m2",
   name: "Set M2",
   blurb: "40 further questions, same blueprint",
   questions: [
  {
    ch: 1,
    lo: "FL-1.1.1 (K1)",
    stem: "Which of the following is NOT a typical objective of testing?",
    opts: ["Building confidence in the level of quality of the test object","Finding defects and failures so that they can be reported and corrected","Correcting the defects that have been found in the test object","Reducing the level of risk of inadequate software quality"],
    ans: [2],
    just: "Testing evaluates the test object and reports what it finds; correcting a defect is a development activity that follows debugging. Building confidence, finding defects and reducing the risk of inadequate quality are all typical test objectives.",
    i18n: {"de":{"stem":"Welches der folgenden ist KEIN typisches Testziel?","opts":["Vertrauen in das Qualitätsniveau des Testobjekts aufbauen","Fehlerzustände und Fehlerwirkungen finden, damit sie berichtet und behoben werden können","Die im Testobjekt gefundenen Fehlerzustände beheben","Das Risiko unzureichender Softwarequalität verringern"],"just":"Testen bewertet das Testobjekt und berichtet die Befunde; das Beheben eines Fehlerzustands ist eine Entwicklungstätigkeit, die auf das Debugging folgt. Vertrauen aufzubauen, Fehlerzustände zu finden und das Risiko unzureichender Qualität zu verringern sind typische Testziele."}}
  },
  {
    ch: 4,
    lo: "FL-4.1.1 (K2)",
    stem: "Which of the following statements about the choice of test techniques is CORRECT?",
    opts: ["The choice depends on factors such as the type of component or system, the identified risks, the available documentation and the skills of the testers","Black-box techniques should always be preferred over white-box techniques","The choice is determined solely by the test level that is being executed","Experience-based techniques should be used only when no requirements are available"],
    ans: [0],
    just: "There is no universally best technique. The selection is driven by the context: the nature of the test object, regulatory requirements, the risks involved, the test objectives, the documentation available, the tester's knowledge and the time and budget at hand.",
    i18n: {"de":{"stem":"Welche Aussage über die Auswahl von Testverfahren ist RICHTIG?","opts":["Die Auswahl hängt von Faktoren ab wie der Art der Komponente oder des Systems, den identifizierten Risiken, der verfügbaren Dokumentation und den Fähigkeiten der Tester","Black-Box-Verfahren sind White-Box-Verfahren stets vorzuziehen","Die Auswahl wird ausschließlich durch die gerade durchgeführte Teststufe bestimmt","Erfahrungsbasierte Verfahren sollten nur eingesetzt werden, wenn keine Anforderungen vorliegen"],"just":"Es gibt kein allgemein bestes Verfahren. Die Auswahl richtet sich nach dem Kontext: Art des Testobjekts, regulatorische Vorgaben, die betrachteten Risiken, die Testziele, die verfügbare Dokumentation, das Wissen der Tester sowie Zeit und Budget."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.2 (K1)",
    stem: "Which TWO of the following are good testing practices that apply to every software development lifecycle?",
    multi: true,
    opts: ["All testing should be fully automated before the first release","Every test level should have specific and appropriate test objectives","Test design should start only once the code is complete","Every test level must be executed by an independent test team","Testers should be involved in reviewing work products as soon as drafts are available"],
    ans: [1,4],
    just: "Defining specific objectives for each test level avoids gaps and redundant testing, and reviewing drafts early gives the fastest feedback. Full automation before the first release is unrealistic, test design can start as soon as the test basis exists, and the appropriate degree of independence varies with the context.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden sind bewährte Testpraktiken, die für jeden Softwareentwicklungslebenszyklus gelten?","opts":["Das gesamte Testen sollte vor der ersten Freigabe vollständig automatisiert sein","Jede Teststufe sollte eigene, angemessene Testziele haben","Der Testentwurf sollte erst beginnen, wenn der Code fertiggestellt ist","Jede Teststufe muss von einem unabhängigen Testteam durchgeführt werden","Tester sollten Arbeitsergebnisse prüfen, sobald erste Entwürfe vorliegen"],"just":"Eigene Ziele je Teststufe vermeiden Lücken und doppelte Tests, und das frühe Prüfen von Entwürfen liefert das schnellste Feedback. Vollständige Automatisierung vor der ersten Freigabe ist unrealistisch, der Testentwurf kann beginnen, sobald die Testbasis vorliegt, und der angemessene Grad an Unabhängigkeit hängt vom Kontext ab."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.1 (K2)",
    stem: "Which of the following BEST describes the purpose of a test plan?",
    opts: ["It records the result of every test case that has been executed","It documents the means and the schedule for achieving the test objectives, and helps to check whether they are being met","It defines the internal structure of the automated test framework","It lists every defect that has to be fixed before the release"],
    ans: [1],
    just: "A test plan describes how the test objectives will be reached within the given constraints, and it serves as the reference against which progress is monitored. Results, framework design and defect lists are recorded elsewhere.",
    i18n: {"de":{"stem":"Was beschreibt den Zweck eines Testkonzepts am BESTEN?","opts":["Es hält das Ergebnis jedes durchgeführten Testfalls fest","Es dokumentiert die Mittel und den Zeitplan zur Erreichung der Testziele und hilft zu prüfen, ob diese erreicht werden","Es legt die innere Struktur des Automatisierungsframeworks fest","Es listet jeden Fehlerzustand auf, der vor der Freigabe behoben werden muss"],"just":"Ein Testkonzept beschreibt, wie die Testziele unter den gegebenen Randbedingungen erreicht werden sollen, und dient als Bezugspunkt für die Überwachung des Fortschritts. Ergebnisse, Frameworkentwurf und Fehlerlisten werden an anderer Stelle festgehalten."}}
  },
  {
    ch: 3,
    lo: "FL-3.1.3 (K2)",
    stem: "Which of the following statements about static and dynamic testing is CORRECT?",
    opts: ["Static testing can only be applied to code, whereas dynamic testing can be applied to any work product","Both static testing and dynamic testing require the software to be executed","Dynamic testing is always cheaper than static testing, because it can be automated","Static testing finds defects directly, whereas dynamic testing causes failures from which the defects then have to be diagnosed"],
    ans: [3],
    just: "Static testing examines the work product itself, so an anomaly found is the defect. Dynamic testing observes a failure, and the defect that caused it still has to be located. Static testing applies to many work products, not only code, and neither approach is inherently cheaper.",
    i18n: {"de":{"stem":"Welche Aussage über statischen und dynamischen Test ist RICHTIG?","opts":["Statischer Test lässt sich nur auf Code anwenden, dynamischer Test dagegen auf jedes Arbeitsergebnis","Sowohl statischer als auch dynamischer Test setzen voraus, dass die Software ausgeführt wird","Dynamischer Test ist immer günstiger als statischer Test, weil er automatisiert werden kann","Statischer Test findet Fehlerzustände unmittelbar, während dynamischer Test Fehlerwirkungen auslöst, aus denen die Fehlerzustände erst diagnostiziert werden müssen"],"just":"Der statische Test untersucht das Arbeitsergebnis selbst, eine gefundene Anomalie ist damit der Fehlerzustand. Der dynamische Test beobachtet eine Fehlerwirkung, und der verursachende Fehlerzustand muss erst lokalisiert werden. Statischer Test gilt für viele Arbeitsergebnisse, nicht nur für Code, und keiner der beiden Ansätze ist grundsätzlich günstiger."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.1 (K3)",
    stem: "A ticketing system prices a ticket according to the age of the visitor, given as a whole number of years:",
    extra: "<ul><li>0 to 5 years: free</li><li>6 to 17 years: youth</li><li>18 to 64 years: adult</li><li>65 years and above: senior</li></ul><p>The highest age the system accepts is 120. Negative ages and ages above 120 are rejected.</p>",
    stem2: "How many equivalence partitions, valid and invalid together, exist for the age input?",
    opts: ["4","5","6","8"],
    ans: [2],
    just: "There are four valid partitions, one for each price category, and two invalid partitions: ages below 0 and ages above 120. That gives six equivalence partitions in total.",
    i18n: {"de":{"stem":"Ein Ticketsystem berechnet den Preis anhand des Alters der Besucher in vollen Jahren:","extra":"<ul><li>0 bis 5 Jahre: frei</li><li>6 bis 17 Jahre: Jugendliche</li><li>18 bis 64 Jahre: Erwachsene</li><li>65 Jahre und älter: Senioren</li></ul><p>Das höchste vom System akzeptierte Alter ist 120. Negative Altersangaben und Werte über 120 werden zurückgewiesen.</p>","stem2":"Wie viele Äquivalenzklassen, gültige und ungültige zusammen, gibt es für die Eingabe Alter?","opts":["4","5","6","8"],"just":"Es gibt vier gültige Klassen, eine je Preiskategorie, und zwei ungültige Klassen: Alter unter 0 und Alter über 120. Zusammen sind das sechs Äquivalenzklassen."}}
  },
  {
    ch: 1,
    lo: "FL-1.1.2 (K2)",
    stem: "A component test fails. Which of the following describes the subsequent activities CORRECTLY?",
    opts: ["Confirmation testing reproduces the failure and diagnoses the defect; debugging then checks that the fix resolved it","Debugging reproduces the failure, diagnoses the defect and fixes it; confirmation testing then checks that the failure no longer occurs","Regression testing diagnoses the defect; debugging then confirms that the fix resolved the failure","Debugging reproduces the failure; regression testing then checks that the fix resolved the failure"],
    ans: [1],
    just: "Debugging is the development activity that reproduces the failure, finds its cause and corrects it. Once the fix is available, testers run the failing test again, which is confirmation testing. Regression testing is a separate activity that looks for unintended side effects of the change.",
    i18n: {"de":{"stem":"Ein Komponententest schlägt fehl. Welche Aussage beschreibt die anschließenden Tätigkeiten RICHTIG?","opts":["Der Fehlernachtest reproduziert die Fehlerwirkung und diagnostiziert den Fehlerzustand; anschließend prüft das Debugging, ob die Behebung gewirkt hat","Das Debugging reproduziert die Fehlerwirkung, diagnostiziert den Fehlerzustand und behebt ihn; anschließend prüft der Fehlernachtest, ob die Fehlerwirkung nicht mehr auftritt","Der Regressionstest diagnostiziert den Fehlerzustand; anschließend bestätigt das Debugging, dass die Behebung gewirkt hat","Das Debugging reproduziert die Fehlerwirkung; anschließend prüft der Regressionstest, ob die Behebung gewirkt hat"],"just":"Debugging ist die Entwicklungstätigkeit, die die Fehlerwirkung reproduziert, ihre Ursache findet und sie behebt. Sobald die Behebung vorliegt, führen die Tester den fehlgeschlagenen Test erneut aus, das ist der Fehlernachtest. Der Regressionstest ist eine eigene Aktivität, die unbeabsichtigte Seiteneffekte der Änderung sucht."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.2 (K1)",
    stem: "How does a tester contribute to release planning?",
    opts: ["By deciding which user stories will be included in the release","By approving the release on behalf of the business","By writing the code for the highest-risk user stories first","By helping to define testable user stories with acceptance criteria, and by taking part in risk identification and effort estimation"],
    ans: [3],
    just: "Testers bring a quality and risk perspective into planning: they help make stories testable, identify product risks, and estimate the test effort. Deciding the content of a release and accepting it on behalf of the business are the product owner's responsibilities.",
    i18n: {"de":{"stem":"Wie trägt ein Tester zur Releaseplanung bei?","opts":["Indem er entscheidet, welche User Storys in das Release aufgenommen werden","Indem er das Release im Namen des Fachbereichs freigibt","Indem er den Code für die risikoreichsten User Storys zuerst schreibt","Indem er hilft, testbare User Storys mit Abnahmekriterien zu formulieren, und sich an Risikoidentifizierung und Aufwandsschätzung beteiligt"],"just":"Tester bringen die Qualitäts- und Risikosicht in die Planung ein: Sie helfen, Storys testbar zu machen, identifizieren Produktrisiken und schätzen den Testaufwand. Über den Inhalt eines Releases zu entscheiden und es fachlich abzunehmen ist Aufgabe des Product Owners."}}
  },
  {
    ch: 6,
    lo: "FL-6.1.1 (K2)",
    stem: "Which category of test tools MOST directly supports test monitoring and control?",
    opts: ["Test management tools","Test data preparation tools","Static analysis tools","Performance testing tools"],
    ans: [0],
    just: "Test management tools hold the test cases, the execution status and the links to requirements and defects, and produce the progress information that monitoring and control depend on. The other categories support test design, static testing and non-functional test execution.",
    i18n: {"de":{"stem":"Welche Kategorie von Testwerkzeugen unterstützt die Testüberwachung und -steuerung am unmittelbarsten?","opts":["Testmanagementwerkzeuge","Werkzeuge zur Testdatenerzeugung","Werkzeuge für die statische Analyse","Werkzeuge für den Performanztest"],"just":"Testmanagementwerkzeuge verwalten die Testfälle, den Durchführungsstatus und die Verknüpfungen zu Anforderungen und Fehlerzuständen und liefern damit die Fortschrittsinformationen, auf die Überwachung und Steuerung angewiesen sind. Die übrigen Kategorien unterstützen den Testentwurf, den statischen Test und die Durchführung nicht funktionaler Tests."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.2 (K3)",
    stem: "The same ticketing system accepts a whole-number age from 0 to 120, and the youth price applies to ages from 6 to 17 inclusive.",
    stem2: "Applying 3-value boundary value analysis to the youth partition, which set of test values should be used?",
    opts: ["6 and 17","5, 6, 17 and 18","5, 6, 7, 16, 17 and 18","0, 5, 6, 17, 18 and 120"],
    ans: [2],
    just: "Three-value boundary value analysis uses each boundary value together with its two neighbours. The youth partition has the boundary values 6 and 17, which gives 5, 6, 7 for the lower boundary and 16, 17, 18 for the upper one.",
    i18n: {"de":{"stem":"Dasselbe Ticketsystem akzeptiert ein ganzzahliges Alter von 0 bis 120, und der Jugendpreis gilt für 6 bis einschließlich 17 Jahre.","stem2":"Welche Testwerte sollten verwendet werden, wenn Sie die Grenzwertanalyse mit drei Werten auf die Äquivalenzklasse der Jugendlichen anwenden?","opts":["6 und 17","5, 6, 17 und 18","5, 6, 7, 16, 17 und 18","0, 5, 6, 17, 18 und 120"],"just":"Die Grenzwertanalyse mit drei Werten verwendet jeden Grenzwert zusammen mit seinen beiden Nachbarwerten. Die Klasse der Jugendlichen hat die Grenzwerte 6 und 17, daraus ergeben sich 5, 6, 7 für die untere und 16, 17, 18 für die obere Grenze."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.4 (K2)",
    stem: "Which of the following is a benefit of DevOps from a testing perspective?",
    opts: ["It removes the need for a test approach, because releases are small and frequent","It makes regression testing unnecessary, because each change is small","It moves responsibility for the quality of the product to the operations team","An automated build, deploy and test pipeline gives fast feedback on the quality of every change"],
    ans: [3],
    just: "Continuous integration and delivery run the automated tests against every change, so defects are found within minutes rather than weeks. Frequent small releases increase rather than remove the need for regression testing, and quality remains a shared responsibility.",
    i18n: {"de":{"stem":"Welches der folgenden ist aus Testsicht ein Nutzen von DevOps?","opts":["Es macht ein Testvorgehen überflüssig, weil die Releases klein und häufig sind","Es macht den Regressionstest überflüssig, weil jede Änderung klein ist","Es verlagert die Verantwortung für die Produktqualität auf das Betriebsteam","Eine automatisierte Build-, Deploy- und Testpipeline liefert schnelles Feedback zur Qualität jeder Änderung"],"just":"Continuous Integration und Continuous Delivery führen die automatisierten Tests gegen jede Änderung aus, sodass Fehlerzustände innerhalb von Minuten statt Wochen gefunden werden. Häufige kleine Releases erhöhen den Bedarf an Regressionstests eher, als dass sie ihn beseitigen, und die Qualität bleibt eine gemeinsame Verantwortung."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.1 (K1)",
    stem: "Which of the following is a benefit of early and frequent stakeholder feedback?",
    opts: ["It removes the need for acceptance testing before the release","Misunderstood stakeholder requirements can be identified and corrected before they are implemented","It guarantees that the project will be delivered within the agreed budget","It transfers responsibility for the quality of the product to the stakeholders"],
    ans: [1],
    just: "Early and frequent feedback communicates what the stakeholders actually need while changing course is still cheap, so effort is not spent building the wrong thing. It neither replaces later test activities nor shifts responsibility for quality.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Nutzen frühen und häufigen Feedbacks der Projektbeteiligten?","opts":["Es macht den Abnahmetest vor der Freigabe überflüssig","Missverstandene Anforderungen der Projektbeteiligten können erkannt und korrigiert werden, bevor sie umgesetzt sind","Es garantiert, dass das Projekt im vereinbarten Budget bleibt","Es überträgt die Verantwortung für die Produktqualität auf die Projektbeteiligten"],"just":"Frühes und häufiges Feedback macht deutlich, was die Beteiligten tatsächlich benötigen, solange eine Kurskorrektur noch günstig ist, sodass kein Aufwand in das Falsche fließt. Es ersetzt weder spätere Testaktivitäten noch verschiebt es die Verantwortung für die Qualität."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.6 (K1)",
    stem: "What does the test pyramid express?",
    opts: ["The lower the test level, the larger the number of tests should be and the faster they run","The higher the test level, the larger the number of tests should be","The order in which the test levels have to be executed","That every layer should contain the same number of tests"],
    ans: [0],
    just: "The pyramid recommends many small, fast, isolated tests at the bottom, typically unit tests, and progressively fewer and slower tests as the scope of each test grows, with end-to-end tests at the top. It says nothing about the order of execution.",
    i18n: {"de":{"stem":"Was drückt die Testpyramide aus?","opts":["Je niedriger die Teststufe, desto größer sollte die Anzahl der Tests sein und desto schneller laufen sie","Je höher die Teststufe, desto größer sollte die Anzahl der Tests sein","Die Reihenfolge, in der die Teststufen durchgeführt werden müssen","Dass jede Ebene dieselbe Anzahl von Tests enthalten sollte"],"just":"Die Pyramide empfiehlt unten viele kleine, schnelle, isolierte Tests, typischerweise Komponententests, und nach oben hin immer weniger und langsamere Tests mit wachsendem Umfang, an der Spitze die durchgängigen Tests. Über die Reihenfolge der Durchführung sagt sie nichts aus."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.1 (K2)",
    stem: "Which of the following is an example of how testing contributes to success?",
    opts: ["Test automation guarantees that the delivered software will contain no defects","Involving testers only at the end of the project keeps them objective and therefore improves the product","Certifying every member of the test team ensures that the product will be of higher quality","Testers involved in reviewing requirements can find ambiguities before they are implemented, which reduces the cost of change"],
    ans: [3],
    just: "Testers who take part in reviews find defects in the requirements before any code is written, and defects removed early are far cheaper to fix. No amount of testing or certification can guarantee an absence of defects, and involving testers late removes exactly the early feedback that creates the benefit.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Beispiel dafür, wie Testen zum Erfolg beiträgt?","opts":["Testautomatisierung garantiert, dass die ausgelieferte Software keine Fehlerzustände enthält","Tester erst am Projektende einzubinden erhält ihre Objektivität und verbessert dadurch das Produkt","Alle Mitglieder des Testteams zu zertifizieren stellt eine höhere Produktqualität sicher","Tester, die an Reviews der Anforderungen mitwirken, finden Mehrdeutigkeiten, bevor sie umgesetzt werden, was die Änderungskosten senkt"],"just":"Tester, die an Reviews teilnehmen, finden Fehlerzustände in den Anforderungen, bevor Code geschrieben wird, und früh beseitigte Fehlerzustände sind erheblich günstiger. Weder Testen noch Zertifizierung können Fehlerfreiheit garantieren, und Tester spät einzubinden beseitigt genau das frühe Feedback, aus dem der Nutzen entsteht."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.3 (K3)",
    stem: "A library lending system implements the following rules: a book cannot be lent to a member whose account has an unpaid fine; an ordinary member may have at most five books on loan; a reading club member may have at most eight. The decision table below describes the implemented behaviour.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Unpaid fine on the account</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Reading club member</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Five or more books already on loan</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Actions</td></tr><tr><td class=\"rowhead\">Loan granted</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td><td>X</td></tr><tr><td class=\"rowhead\">Loan refused</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td>X</td><td></td></tr></table></div>",
    stem2: "A reading club member who has no unpaid fine and already has six books on loan tries to borrow another book. Which rule applies, and what is the outcome?",
    opts: ["Rule R5, and the loan is refused","Rule R3, and the loan is refused","Rule R5, and the loan is granted","Rule R7, and the loan is granted"],
    ans: [2],
    just: "The member has no unpaid fine, is a reading club member and already has five or more books on loan, which is the column with the condition values false, true, true. That is R5, and because a reading club member may hold up to eight books the loan is granted.",
    i18n: {"de":{"stem":"Ein Bibliothekssystem setzt folgende Regeln um: An ein Mitglied mit offener Mahngebühr wird kein Buch ausgeliehen; ein gewöhnliches Mitglied darf höchstens fünf Bücher ausgeliehen haben; ein Mitglied des Lesekreises höchstens acht. Die folgende Entscheidungstabelle beschreibt das umgesetzte Verhalten.","extra":"<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Offene Mahngebühr auf dem Konto</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Mitglied des Lesekreises</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Fünf oder mehr Bücher bereits ausgeliehen</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Aktionen</td></tr><tr><td class=\"rowhead\">Ausleihe gewährt</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td><td>X</td></tr><tr><td class=\"rowhead\">Ausleihe abgelehnt</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td>X</td><td></td></tr></table></div><p>W steht für wahr, F für falsch.</p>","stem2":"Ein Mitglied des Lesekreises ohne offene Mahngebühr, das bereits sechs Bücher ausgeliehen hat, möchte ein weiteres Buch ausleihen. Welche Regel greift, und wie lautet das Ergebnis?","opts":["Regel R5, und die Ausleihe wird abgelehnt","Regel R3, und die Ausleihe wird abgelehnt","Regel R5, und die Ausleihe wird gewährt","Regel R7, und die Ausleihe wird gewährt"],"just":"Das Mitglied hat keine offene Mahngebühr, ist im Lesekreis und hat bereits fünf oder mehr Bücher ausgeliehen, also die Spalte mit den Bedingungswerten falsch, wahr, wahr. Das ist R5, und da ein Mitglied des Lesekreises bis zu acht Bücher halten darf, wird die Ausleihe gewährt."}}
  },
  {
    ch: 5,
    lo: "FL-5.2.2 (K2)",
    stem: "Which of the following is a PROJECT risk rather than a product risk?",
    opts: ["Key testers may leave the team before system testing has been completed","The system may calculate interest incorrectly in a leap year","The system may not respond within three seconds under peak load","The user interface may be unusable for visually impaired users"],
    ans: [0],
    just: "Project risks threaten the management and control of the project itself, such as the availability of skills, the schedule or the supplier. The other three options describe possible weaknesses in the delivered product and are therefore product risks.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein PROJEKTRISIKO und kein Produktrisiko?","opts":["Wichtige Tester könnten das Team verlassen, bevor der Systemtest abgeschlossen ist","Das System könnte die Zinsen in einem Schaltjahr falsch berechnen","Das System könnte unter Spitzenlast nicht innerhalb von drei Sekunden antworten","Die Benutzungsoberfläche könnte für sehbehinderte Anwender unbenutzbar sein"],"just":"Projektrisiken bedrohen die Führung und Steuerung des Projekts selbst, etwa die Verfügbarkeit von Fähigkeiten, den Terminplan oder den Lieferanten. Die übrigen drei Antworten beschreiben mögliche Schwächen im ausgelieferten Produkt und sind damit Produktrisiken."}}
  },
  {
    ch: 2,
    lo: "FL-2.2.1 (K2)",
    stem: "You are evaluating how easily a first-time user can complete a purchase, and you do so on the fully integrated system in a production-like environment.",
    stem2: "Which test level and test type does this describe?",
    opts: ["System testing, and a functional test type","System testing, and a non-functional test type","Acceptance testing, and a functional test type","Component integration testing, and a non-functional test type"],
    ans: [1],
    just: "The test object is the complete integrated system, which places the testing at system test level. Usability is a quality characteristic describing how well the system does what it does, so this is a non-functional test type.",
    i18n: {"de":{"stem":"Sie bewerten, wie leicht ein Erstnutzer einen Kauf abschließen kann, und tun dies am vollständig integrierten System in einer produktionsnahen Umgebung.","stem2":"Welche Teststufe und welche Testart beschreibt das?","opts":["Systemtest und eine funktionale Testart","Systemtest und eine nicht funktionale Testart","Abnahmetest und eine funktionale Testart","Komponentenintegrationstest und eine nicht funktionale Testart"],"just":"Das Testobjekt ist das vollständig integrierte System, was den Test auf die Stufe des Systemtests einordnet. Gebrauchstauglichkeit ist ein Qualitätsmerkmal, das beschreibt, wie gut das System das tut, was es tut, es handelt sich also um eine nicht funktionale Testart."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.5 (K3)",
    stem: "You have been asked to review a requirements specification against a list of typical requirement problems: ambiguous wording, missing acceptance criteria, untestable statements and duplication.",
    stem2: "Which review technique are you applying?",
    opts: ["Ad hoc reviewing","Scenario-based reviewing","Checklist-based reviewing","Role-based reviewing"],
    ans: [2],
    just: "Working through a predefined list of question types or known problem categories is checklist-based reviewing. Ad hoc reviewing gives the reviewer no guidance, scenario-based reviewing walks the work product through expected usage, and role-based reviewing evaluates it from the viewpoint of a particular stakeholder.",
    i18n: {"de":{"stem":"Sie sollen eine Anforderungsspezifikation anhand einer Liste typischer Anforderungsprobleme prüfen: mehrdeutige Formulierungen, fehlende Abnahmekriterien, nicht testbare Aussagen und Dopplungen.","stem2":"Welche Reviewtechnik wenden Sie an?","opts":["Ad-hoc-Review","Szenariobasiertes Review","Checklistenbasiertes Review","Rollenbasiertes Review"],"just":"Eine vorgegebene Liste von Fragestellungen oder bekannten Problemkategorien abzuarbeiten ist ein checklistenbasiertes Review. Beim Ad-hoc-Review erhält der Reviewer keine Anleitung, beim szenariobasierten Review wird das Arbeitsergebnis anhand der erwarteten Nutzung durchgegangen, und beim rollenbasierten Review wird es aus der Sicht einer bestimmten Rolle bewertet."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.4 (K3)",
    stem: "The login behaviour of a system is described by the state table below. A dash means that the event is not accepted in that state.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">State</th><th>correct password</th><th>third wrong password</th><th>logout</th></tr><tr><td class=\"rowhead\">LOGGED OUT</td><td>LOGGED IN</td><td>LOCKED</td><td>&ndash;</td></tr><tr><td class=\"rowhead\">LOGGED IN</td><td>&ndash;</td><td>&ndash;</td><td>LOGGED OUT</td></tr><tr><td class=\"rowhead\">LOCKED</td><td>&ndash;</td><td>&ndash;</td><td>&ndash;</td></tr></table></div>",
    stem2: "How many invalid transitions does this state table contain?",
    opts: ["6","3","5","9"],
    ans: [0],
    just: "The table has three states and three events, so there are nine possible state and event combinations. Three of them lead to a defined transition, so the remaining six are invalid transitions.",
    i18n: {"de":{"stem":"Das Anmeldeverhalten eines Systems wird durch die folgende Zustandstabelle beschrieben. Ein Strich bedeutet, dass das Ereignis in diesem Zustand nicht akzeptiert wird.","extra":"<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Zustand</th><th>richtiges Passwort</th><th>drittes falsches Passwort</th><th>abmelden</th></tr><tr><td class=\"rowhead\">ABGEMELDET</td><td>ANGEMELDET</td><td>GESPERRT</td><td>&ndash;</td></tr><tr><td class=\"rowhead\">ANGEMELDET</td><td>&ndash;</td><td>&ndash;</td><td>ABGEMELDET</td></tr><tr><td class=\"rowhead\">GESPERRT</td><td>&ndash;</td><td>&ndash;</td><td>&ndash;</td></tr></table></div>","stem2":"Wie viele ungültige Zustandsübergänge enthält diese Zustandstabelle?","opts":["6","3","5","9"],"just":"Die Tabelle hat drei Zustände und drei Ereignisse, also gibt es neun mögliche Kombinationen aus Zustand und Ereignis. Drei davon führen zu einem definierten Übergang, die verbleibenden sechs sind ungültige Übergänge."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.4 (K2)",
    stem: "Why is root cause analysis of defects performed?",
    opts: ["To determine which tester should have found the defect earlier","To identify and remove the underlying reason a defect occurred, so that similar defects can be prevented in future","To calculate the residual risk that remains after the defect has been fixed","To decide the order in which the open defects should be fixed"],
    ans: [1],
    just: "Root cause analysis looks past the individual defect to the process weakness that allowed it, so that process improvement can prevent whole classes of defect. It is a process improvement activity, not a way of assigning blame or of prioritizing fixes.",
    i18n: {"de":{"stem":"Warum wird eine Ursachenanalyse von Fehlerzuständen durchgeführt?","opts":["Um festzustellen, welcher Tester den Fehlerzustand früher hätte finden müssen","Um die zugrunde liegende Ursache des Fehlerzustands zu erkennen und zu beseitigen, damit ähnliche Fehlerzustände künftig vermieden werden","Um das Restrisiko zu berechnen, das nach der Behebung des Fehlerzustands verbleibt","Um die Reihenfolge festzulegen, in der die offenen Fehlerzustände behoben werden"],"just":"Die Ursachenanalyse blickt über den einzelnen Fehlerzustand hinaus auf die Prozessschwäche, die ihn ermöglicht hat, sodass die Prozessverbesserung ganze Klassen von Fehlerzuständen verhindern kann. Sie ist eine Maßnahme der Prozessverbesserung und dient weder der Schuldzuweisung noch der Priorisierung von Behebungen."}}
  },
  {
    ch: 5,
    lo: "FL-5.2.3 (K2)",
    stem: "What is the MAIN purpose of product risk analysis in testing?",
    opts: ["To assign responsibility for each defect to a member of the team","To calculate the total cost of the project","To decide which developer should implement which user story","To determine the scope, the depth and the priority of the testing to be performed"],
    ans: [3],
    just: "Product risk analysis identifies what could go wrong in the product and how serious it would be, and this drives what is tested, how thoroughly and in what order. It also supports the choice of test techniques and the reporting of residual risk.",
    i18n: {"de":{"stem":"Was ist der HAUPTZWECK der Produktrisikoanalyse im Testen?","opts":["Jeden Fehlerzustand einem Teammitglied zur Verantwortung zuzuordnen","Die Gesamtkosten des Projekts zu berechnen","Zu entscheiden, welcher Entwickler welche User Story umsetzen soll","Umfang, Tiefe und Priorität des durchzuführenden Testens zu bestimmen"],"just":"Die Produktrisikoanalyse ermittelt, was am Produkt schiefgehen kann und wie schwerwiegend das wäre, und steuert damit, was wie gründlich und in welcher Reihenfolge getestet wird. Sie unterstützt außerdem die Wahl der Testverfahren und die Berichterstattung über das Restrisiko."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.1 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1  READ a\n2  IF a &lt; 0 THEN\n3      a = -a\n4  END IF\n5  IF a &gt; 100 THEN\n6      PRINT \"large\"\n7  ELSE\n8      PRINT \"small\"\n9  END IF",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% statement coverage?",
    opts: ["1","3","2","4"],
    ans: [2],
    just: "One test case with a negative value that becomes greater than 100 after the sign is changed, for example -200, executes the statement inside the first decision and the statement that prints the large result. A second test case with a small positive value, for example 5, executes the remaining statement. No single test case can execute both print statements, so two are needed.",
    i18n: {"de":{"stem":"Betrachten Sie den folgenden Pseudocode:","stem2":"Wie viele Testfälle sind MINDESTENS nötig, um 100% Anweisungsüberdeckung zu erreichen?","opts":["1","3","2","4"],"just":"Ein Testfall mit einem negativen Wert, der nach dem Vorzeichenwechsel größer als 100 ist, zum Beispiel -200, führt die Anweisung innerhalb der ersten Entscheidung und die Ausgabe des großen Ergebnisses aus. Ein zweiter Testfall mit einem kleinen positiven Wert, zum Beispiel 5, führt die verbleibende Anweisung aus. Kein einzelner Testfall kann beide Ausgabeanweisungen ausführen, es werden also zwei benötigt."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.6 (K2)",
    stem: "Which of the following is a typical benefit of retrospectives from a testing perspective?",
    opts: ["A guaranteed reduction in the number of defects that escape to production","Increased test effectiveness and efficiency, for example by improving the test process and the testware","A formal record of which team member introduced each defect","An objective basis for deciding which testers should be promoted"],
    ans: [1],
    just: "Retrospectives identify what worked and what did not, and produce concrete improvement actions such as better test data, faster feedback or clearer acceptance criteria. They are a process improvement mechanism, not a guarantee of results and not a performance appraisal.",
    i18n: {"de":{"stem":"Welches der folgenden ist aus Testsicht ein typischer Nutzen von Retrospektiven?","opts":["Eine garantierte Verringerung der Anzahl von Fehlerzuständen, die in den Produktivbetrieb gelangen","Höhere Effektivität und Effizienz des Testens, etwa durch Verbesserung des Testprozesses und der Testmittel","Eine formale Aufzeichnung darüber, welches Teammitglied welchen Fehlerzustand verursacht hat","Eine objektive Grundlage für die Entscheidung, welche Tester befördert werden"],"just":"Retrospektiven ermitteln, was funktioniert hat und was nicht, und erzeugen konkrete Verbesserungsmaßnahmen wie bessere Testdaten, schnelleres Feedback oder klarere Abnahmekriterien. Sie sind ein Mittel der Prozessverbesserung, keine Ergebnisgarantie und keine Leistungsbeurteilung."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.2 (K2)",
    stem: "Which of the following is performed during the planning activity of a review?",
    opts: ["Distributing the work product and explaining the objectives to the participants","Logging the anomalies that each reviewer has found","Correcting the defects that were found and reporting the corrections","Defining the scope of the review, and the entry and exit criteria for the more formal review types"],
    ans: [3],
    just: "Planning establishes the purpose and scope of the review, selects the participants, allocates roles and, for formal review types, defines entry and exit criteria. Distributing the work product belongs to initiate review, logging anomalies to individual review and communication and analysis, and correcting defects to fixing and reporting.",
    i18n: {"de":{"stem":"Was wird während der Planungsaktivität eines Reviews durchgeführt?","opts":["Das Arbeitsergebnis verteilen und den Teilnehmern die Ziele erläutern","Die von den einzelnen Reviewern gefundenen Anomalien protokollieren","Die gefundenen Fehlerzustände beheben und die Korrekturen berichten","Den Umfang des Reviews festlegen sowie bei den formaleren Reviewtypen die Eingangs- und Endekriterien"],"just":"Die Planung legt Zweck und Umfang des Reviews fest, wählt die Teilnehmer aus, verteilt die Rollen und definiert bei formalen Reviewtypen Eingangs- und Endekriterien. Das Verteilen des Arbeitsergebnisses gehört zum Initiieren des Reviews, das Protokollieren von Anomalien zum individuellen Review sowie zur Kommunikation und Analyse, und das Beheben von Fehlerzuständen zum Beheben und Berichten."}}
  },
  {
    ch: 1,
    lo: "FL-1.3.1 (K2)",
    stem: "A tester observes that 70% of the defects found so far in a large system are located in two of its twelve modules, and proposes to concentrate further testing effort on those two modules.",
    stem2: "Which testing principle supports this proposal?",
    opts: ["Defects cluster together","Testing is context dependent","Testing shows the presence, not the absence, of defects","Early testing saves time and money"],
    ans: [0],
    just: "A small number of modules usually contains most of the defects, so the observed distribution is a useful predictor of where further defects will be found. This is the basis of risk-based and focused testing.",
    i18n: {"de":{"stem":"Ein Tester stellt fest, dass 70% der bisher in einem großen System gefundenen Fehlerzustände in zwei seiner zwölf Module liegen, und schlägt vor, den weiteren Testaufwand auf diese beiden Module zu konzentrieren.","stem2":"Welcher Grundsatz des Testens stützt diesen Vorschlag?","opts":["Fehlerzustände treten gehäuft auf","Testen ist kontextabhängig","Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit","Frühes Testen spart Zeit und Geld"],"just":"Eine kleine Zahl von Modulen enthält üblicherweise die meisten Fehlerzustände, die beobachtete Verteilung ist daher ein brauchbarer Hinweis darauf, wo weitere Fehlerzustände zu erwarten sind. Darauf beruhen risikobasiertes und fokussiertes Testen."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.2 (K2)",
    stem: "Which of the following statements about statement coverage and branch coverage is CORRECT?",
    opts: ["Achieving 100% statement coverage implies 100% branch coverage","The two criteria are equivalent for any structured code","Achieving 100% branch coverage implies 100% statement coverage, but not the other way round","Neither of the two criteria can be measured automatically"],
    ans: [2],
    just: "Every branch that is taken executes the statements on it, so full branch coverage necessarily executes every reachable statement. The reverse does not hold: a decision with an empty alternative can have all its statements executed without both outcomes ever being taken.",
    i18n: {"de":{"stem":"Welche Aussage über Anweisungsüberdeckung und Zweigüberdeckung ist RICHTIG?","opts":["100% Anweisungsüberdeckung bedeutet zugleich 100% Zweigüberdeckung","Die beiden Kriterien sind für jeden strukturierten Code gleichwertig","100% Zweigüberdeckung bedeutet zugleich 100% Anweisungsüberdeckung, aber nicht umgekehrt","Keines der beiden Kriterien lässt sich automatisiert messen"],"just":"Jeder durchlaufene Zweig führt die auf ihm liegenden Anweisungen aus, vollständige Zweigüberdeckung führt daher zwangsläufig jede erreichbare Anweisung aus. Umgekehrt gilt das nicht: Bei einer Entscheidung ohne Anweisungen im Alternativzweig können alle Anweisungen ausgeführt werden, ohne dass beide Ausgänge durchlaufen wurden."}}
  },
  {
    ch: 5,
    lo: "FL-5.3.1 (K1)",
    stem: "Which TWO of the following are examples of metrics used in test monitoring and control?",
    multi: true,
    opts: ["The number of defects found, fixed and still open","The number of hours of training that the testers received","The number of user stories currently in the product backlog","The percentage of the planned test cases that have been executed","The number of developers assigned to the team"],
    ans: [0,3],
    just: "Test monitoring uses metrics about the progress of the testing and about the defects found, such as execution progress against plan and open defect counts by severity. Training hours, backlog size and team size describe the project, not the state of testing.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden sind Beispiele für Metriken der Testüberwachung und -steuerung?","opts":["Die Anzahl der gefundenen, behobenen und noch offenen Fehlerzustände","Die Anzahl der Schulungsstunden, die die Tester erhalten haben","Die Anzahl der User Storys, die sich derzeit im Produkt-Backlog befinden","Der Anteil der geplanten Testfälle, die bereits durchgeführt wurden","Die Anzahl der dem Team zugeordneten Entwickler"],"just":"Die Testüberwachung nutzt Metriken über den Fortschritt des Testens und über die gefundenen Fehlerzustände, etwa den Durchführungsfortschritt gegenüber dem Plan und die Anzahl offener Fehlerzustände nach Schweregrad. Schulungsstunden, Backlog-Umfang und Teamgröße beschreiben das Projekt, nicht den Stand des Testens."}}
  },
  {
    ch: 6,
    lo: "FL-6.2.1 (K1)",
    stem: "Which of the following is a benefit of test automation?",
    opts: ["It removes the need to maintain the testware","It guarantees that all defects will be found before the release","It removes the need for experienced testers","More consistent and repeatable test execution, and an objective assessment of coverage"],
    ans: [3],
    just: "Automated tests run the same way every time and can report coverage objectively, and they free tester time for work that needs human judgement. Automated testware still has to be maintained, automation finds no defects that its tests do not look for, and it needs skilled people to build it.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Nutzen der Testautomatisierung?","opts":["Sie macht die Pflege der Testmittel überflüssig","Sie garantiert, dass alle Fehlerzustände vor der Freigabe gefunden werden","Sie macht erfahrene Tester überflüssig","Eine gleichmäßigere und wiederholbare Testdurchführung sowie eine objektive Bewertung der Überdeckung"],"just":"Automatisierte Tests laufen jedes Mal gleich ab und können die Überdeckung objektiv berichten; sie schaffen Freiraum für Arbeit, die menschliches Urteilsvermögen erfordert. Automatisierte Testmittel müssen dennoch gepflegt werden, die Automatisierung findet keine Fehlerzustände, nach denen ihre Tests nicht suchen, und ihr Aufbau erfordert erfahrene Fachleute."}}
  },
  {
    ch: 2,
    lo: "FL-2.3.1 (K2)",
    stem: "What determines the scope of maintenance testing?",
    opts: ["The number of testers available in the maintenance team","The degree of risk of the change, the size of the existing system and the size of the change","The test techniques that were used during the original development","The number of defects that were found during the original acceptance testing"],
    ans: [1],
    just: "The scope depends on how risky the change is, how large the system that could be affected is, and how large the change itself is. Impact analysis is used to decide how much regression testing the change requires.",
    i18n: {"de":{"stem":"Wovon hängt der Umfang des Wartungstests ab?","opts":["Von der Anzahl der im Wartungsteam verfügbaren Tester","Vom Risikograd der Änderung, von der Größe des bestehenden Systems und vom Umfang der Änderung","Von den Testverfahren, die in der ursprünglichen Entwicklung eingesetzt wurden","Von der Anzahl der Fehlerzustände, die im ursprünglichen Abnahmetest gefunden wurden"],"just":"Der Umfang hängt davon ab, wie risikoreich die Änderung ist, wie groß das möglicherweise betroffene System ist und wie umfangreich die Änderung selbst ausfällt. Mit einer Auswirkungsanalyse wird bestimmt, wie viel Regressionstest die Änderung erfordert."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.3 (K2)",
    stem: "Which of the following is a characteristic of checklist-based testing?",
    opts: ["Tests are designed, implemented and executed to cover the conditions on a list derived from experience, standards or known risks","Tests are derived from the internal structure of the test object to reach a defined level of coverage","Test design and test execution happen at the same time within a time-boxed session","Every possible combination of input values is covered systematically"],
    ans: [0],
    just: "In checklist-based testing the tester works through a list of items to be checked, typically built from experience, from what matters to the user, or from known failure patterns. The other options describe white-box testing, exploratory testing and exhaustive testing.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Merkmal des checklistenbasierten Testens?","opts":["Tests werden entworfen, realisiert und durchgeführt, um die Punkte einer Liste abzudecken, die aus Erfahrung, Standards oder bekannten Risiken abgeleitet wurde","Tests werden aus der inneren Struktur des Testobjekts abgeleitet, um eine festgelegte Überdeckung zu erreichen","Testentwurf und Testdurchführung erfolgen gleichzeitig innerhalb einer zeitlich begrenzten Sitzung","Jede mögliche Kombination von Eingabewerten wird systematisch abgedeckt"],"just":"Beim checklistenbasierten Testen arbeitet der Tester eine Liste zu prüfender Punkte ab, die typischerweise aus Erfahrung, aus dem entsteht, was den Anwendern wichtig ist, oder aus bekannten Fehlermustern. Die übrigen Antworten beschreiben White-Box-Test, exploratives Testen und vollständiges Testen."}}
  },
  {
    ch: 1,
    lo: "FL-1.4.3 (K2)",
    stem: "Which work products are produced by the test design activity?",
    opts: ["Test conditions and the features to be tested","Test suites and the test execution schedule","The test completion report and the lessons learned","Test cases, test data requirements and the coverage items to be exercised"],
    ans: [3],
    just: "Test design turns the test conditions produced by test analysis into test cases and other testware, and identifies the coverage items and the test data needed. Test conditions come from test analysis, test suites and schedules from test implementation, and the completion report from test completion.",
    i18n: {"de":{"stem":"Welche Arbeitsergebnisse entstehen in der Aktivität Testentwurf?","opts":["Testbedingungen und die zu testenden Funktionen","Testsuiten und der Zeitplan für die Testdurchführung","Der Testabschlussbericht und die gewonnenen Erkenntnisse","Testfälle, Anforderungen an die Testdaten und die zu durchlaufenden Überdeckungselemente"],"just":"Der Testentwurf überführt die in der Testanalyse ermittelten Testbedingungen in Testfälle und weitere Testmittel und bestimmt die Überdeckungselemente sowie die benötigten Testdaten. Testbedingungen stammen aus der Testanalyse, Testsuiten und Zeitpläne aus der Testrealisierung und der Abschlussbericht aus dem Testabschluss."}}
  },
  {
    ch: 5,
    lo: "FL-5.3.2 (K2)",
    stem: "When is a test completion report typically produced?",
    opts: ["Every day during test execution","Whenever a defect with high severity is found","When a test level, an iteration or a test project reaches its exit criteria","Before the test plan has been approved"],
    ans: [2],
    just: "The test completion report summarizes what was done and what the results mean once a milestone is reached, such as the end of a test level, an iteration or the whole project. Day-to-day information is communicated through test progress reports.",
    i18n: {"de":{"stem":"Wann wird üblicherweise ein Testabschlussbericht erstellt?","opts":["Täglich während der Testdurchführung","Immer dann, wenn ein Fehlerzustand mit hohem Schweregrad gefunden wird","Wenn eine Teststufe, eine Iteration oder ein Testprojekt seine Endekriterien erreicht","Bevor das Testkonzept genehmigt wurde"],"just":"Der Testabschlussbericht fasst zusammen, was getan wurde und was die Ergebnisse bedeuten, sobald ein Meilenstein erreicht ist, etwa das Ende einer Teststufe, einer Iteration oder des gesamten Projekts. Der laufende Informationsbedarf wird über Testfortschrittsberichte gedeckt."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.3 (K1)",
    stem: "During a formal review, who is responsible for recording the anomalies that are found and the decisions that are taken?",
    opts: ["The scribe","The review leader","The author","The manager"],
    ans: [0],
    just: "The scribe collects the anomalies from the participants and records the information needed during the review meeting, including the decisions taken on each finding. The review leader runs the review, the author owns the work product, and the manager decides that reviews shall be held and allocates the effort.",
    i18n: {"de":{"stem":"Wer ist in einem formalen Review dafür verantwortlich, die gefundenen Anomalien und die getroffenen Entscheidungen zu protokollieren?","opts":["Der Protokollant","Der Reviewleiter","Der Autor","Das Management"],"just":"Der Protokollant sammelt die Anomalien der Teilnehmer und hält die während der Reviewsitzung benötigten Informationen fest, einschließlich der zu jedem Befund getroffenen Entscheidungen. Der Reviewleiter führt durch das Review, der Autor verantwortet das Arbeitsergebnis, und das Management entscheidet, dass Reviews stattfinden, und stellt den Aufwand bereit."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.1 (K2)",
    stem: "Which of the following is a DISADVANTAGE of experience-based test techniques?",
    opts: ["They cannot be used when the specification is incomplete","Coverage is difficult to measure, and the results depend strongly on the experience of the tester","They require the source code of the test object to be available","They can only be applied during acceptance testing"],
    ans: [1],
    just: "Because the tests come from the tester's judgement rather than from a formal model, two testers may produce very different sets of tests and the coverage achieved is hard to quantify. Their strength is precisely that they work with little documentation, at any test level, without access to the code.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein NACHTEIL erfahrungsbasierter Testverfahren?","opts":["Sie lassen sich nicht anwenden, wenn die Spezifikation unvollständig ist","Die Überdeckung ist schwer messbar, und die Ergebnisse hängen stark von der Erfahrung des Testers ab","Sie setzen voraus, dass der Quellcode des Testobjekts verfügbar ist","Sie lassen sich nur im Abnahmetest anwenden"],"just":"Da die Tests aus der Einschätzung des Testers und nicht aus einem formalen Modell stammen, können zwei Tester sehr unterschiedliche Testmengen erzeugen, und die erreichte Überdeckung ist schwer zu beziffern. Ihre Stärke liegt gerade darin, dass sie mit wenig Dokumentation, auf jeder Teststufe und ohne Zugriff auf den Code funktionieren."}}
  },
  {
    ch: 1,
    lo: "FL-1.4.2 (K1)",
    stem: "Which of the following influence how the test process is carried out in a given context?",
    romans: ["The software development lifecycle in use","The identified product risks","The number of testers who hold a certification","Contractual and regulatory requirements","The colour scheme of the user interface"],
    opts: ["i, iii and iv","ii, iii and v","i, ii and iv","i, ii, iii, iv and v"],
    ans: [2],
    just: "The test process must be tailored to the context: the lifecycle in use determines when testing happens, the identified risks determine its depth and focus, and contractual, legal or regulatory requirements can mandate specific techniques and documentation. The number of certified testers and the appearance of the user interface do not shape the process itself.",
    i18n: {"de":{"stem":"Was beeinflusst, wie der Testprozess in einem konkreten Kontext durchgeführt wird?","romans":["Der verwendete Softwareentwicklungslebenszyklus","Die identifizierten Produktrisiken","Die Anzahl der Tester mit einer Zertifizierung","Vertragliche und regulatorische Vorgaben","Das Farbschema der Benutzungsoberfläche"],"opts":["i, iii und iv","ii, iii und v","i, ii und iv","i, ii, iii, iv und v"],"just":"Der Testprozess muss an den Kontext angepasst werden: Der verwendete Lebenszyklus bestimmt, wann getestet wird, die identifizierten Risiken bestimmen Tiefe und Schwerpunkt, und vertragliche, gesetzliche oder regulatorische Vorgaben können bestimmte Verfahren und Dokumente vorschreiben. Die Anzahl zertifizierter Tester und das Aussehen der Oberfläche prägen den Prozess selbst nicht."}}
  },
  {
    ch: 5,
    lo: "FL-5.4.1 (K2)",
    stem: "During test execution a test fails, but the developer cannot reproduce the failure. Which configuration management practice would have prevented this situation?",
    opts: ["Recording the exact version of the test object and of the testware used in the test run","Automating the failing test case","Raising the severity of the defect report","Adding the failing test case to the regression suite"],
    ans: [0],
    just: "Configuration management identifies and versions the test object and all testware, so that any test result can be traced back to the exact items that produced it. Without that information a failure may be reproduced against a different build and appear not to exist.",
    i18n: {"de":{"stem":"Während der Testdurchführung schlägt ein Test fehl, der Entwickler kann die Fehlerwirkung jedoch nicht reproduzieren. Welche Praxis des Konfigurationsmanagements hätte diese Situation verhindert?","opts":["Die genaue Version des Testobjekts und der im Testlauf verwendeten Testmittel festzuhalten","Den fehlgeschlagenen Testfall zu automatisieren","Den Schweregrad des Fehlerberichts zu erhöhen","Den fehlgeschlagenen Testfall in die Regressionstestsuite aufzunehmen"],"just":"Konfigurationsmanagement identifiziert und versioniert das Testobjekt und alle Testmittel, sodass sich jedes Testergebnis auf genau die Elemente zurückführen lässt, die es erzeugt haben. Ohne diese Angabe wird eine Fehlerwirkung womöglich gegen einen anderen Build reproduziert und scheint nicht zu existieren."}}
  },
  {
    ch: 4,
    lo: "FL-4.5.1 (K2)",
    stem: "Which of the following BEST describes a good user story?",
    opts: ["It contains the detailed technical design of the feature to be built","It is independent, negotiable, valuable, estimable, small and testable","It is written by the tester and approved by the developer","It makes separate acceptance criteria unnecessary"],
    ans: [1],
    just: "These six characteristics are the widely used criteria for a well-formed user story. A story is a placeholder for a conversation rather than a design document, it is written collaboratively by business, development and testing, and it still needs acceptance criteria.",
    i18n: {"de":{"stem":"Was beschreibt eine gute User Story am BESTEN?","opts":["Sie enthält den detaillierten technischen Entwurf der zu bauenden Funktion","Sie ist unabhängig, verhandelbar, wertvoll, schätzbar, klein und testbar","Sie wird vom Tester geschrieben und vom Entwickler freigegeben","Sie macht gesonderte Abnahmekriterien überflüssig"],"just":"Diese sechs Merkmale sind die verbreiteten Kriterien für eine gut formulierte User Story. Eine Story ist ein Platzhalter für ein Gespräch und kein Entwurfsdokument, sie entsteht gemeinsam durch Fachbereich, Entwicklung und Test, und sie benötigt weiterhin Abnahmekriterien."}}
  },
  {
    ch: 1,
    lo: "FL-1.5.1 (K2)",
    stem: "Which of the following is MOST likely an example of a tester applying a generic skill rather than domain knowledge?",
    opts: ["Knowing that an insurance premium must be recalculated when the policy holder moves house","Understanding the tax rules that apply to invoices issued in another country","Knowing which regulatory standard applies to software used in medical devices","Explaining a defect report to a developer clearly and constructively, so that it is understood without provoking a defensive reaction"],
    ans: [3],
    just: "Communicating findings clearly, diplomatically and constructively is one of the generic skills every tester needs, independently of the application area. The other options all describe knowledge of a particular business domain.",
    i18n: {"de":{"stem":"Welches der folgenden ist am ehesten ein Beispiel dafür, dass ein Tester eine allgemeine Fähigkeit statt Domänenwissen einsetzt?","opts":["Zu wissen, dass eine Versicherungsprämie neu berechnet werden muss, wenn der Versicherungsnehmer umzieht","Die Steuerregeln zu verstehen, die für Rechnungen in ein anderes Land gelten","Zu wissen, welche regulatorische Norm für Software in Medizinprodukten gilt","Einen Fehlerbericht einem Entwickler klar und konstruktiv zu erläutern, sodass er verstanden wird, ohne eine Abwehrhaltung auszulösen"],"just":"Befunde klar, diplomatisch und konstruktiv zu vermitteln ist eine der allgemeinen Fähigkeiten, die jeder Tester unabhängig vom Anwendungsgebiet braucht. Die übrigen Antworten beschreiben Wissen über eine bestimmte Fachdomäne."}}
  },
  {
    ch: 5,
    lo: "FL-5.5.1 (K3)",
    stem: "Which of the following BEST describes the main purpose of a defect report?",
    opts: ["To document the effort that the tester spent on the test run","To record which requirements have been covered by testing","To give the people who will handle the defect enough information to reproduce, prioritize and correct it","To provide evidence that the exit criteria of the test level have been met"],
    ans: [2],
    just: "A defect report exists so that the anomaly can be understood, reproduced, assessed and fixed, and so that its status can be tracked. Effort, coverage and exit criteria are reported through other means.",
    i18n: {"de":{"stem":"Was beschreibt den Hauptzweck eines Fehlerberichts am BESTEN?","opts":["Den Aufwand zu dokumentieren, den der Tester für den Testlauf aufgewendet hat","Festzuhalten, welche Anforderungen durch das Testen abgedeckt wurden","Denjenigen, die den Fehlerzustand bearbeiten, genügend Informationen zu geben, um ihn zu reproduzieren, zu priorisieren und zu beheben","Nachzuweisen, dass die Endekriterien der Teststufe erfüllt sind"],"just":"Ein Fehlerbericht existiert, damit die Anomalie verstanden, reproduziert, bewertet und behoben werden kann und damit ihr Status verfolgt werden kann. Aufwand, Überdeckung und Endekriterien werden auf anderem Weg berichtet."}}
  },
  {
    ch: 4,
    lo: "FL-4.5.3 (K3)",
    stem: "Consider the following user story and its acceptance criteria:",
    extra: "<p style=\"font-style:italic;padding-left:1.2rem\">As a guest<br>I want to cancel my booking online<br>so that I do not have to telephone the hotel</p><ul><li>A booking can be cancelled free of charge up to 24 hours before check-in</li><li>Cancelling within 24 hours of check-in incurs a fee of one night</li><li>After a cancellation the guest receives a confirmation email</li><li>A booking that has already started cannot be cancelled</li></ul>",
    stem2: "Which of the following is the BEST example of an ATDD test for this user story?",
    opts: ["Test that the booking record is removed from the database table after cancellation","Test that cancelling a booking 12 hours before check-in charges a fee of one night","Test that the guest can change the room type of an existing booking","Test that a booking can still be cancelled after the guest has checked in"],
    ans: [1],
    just: "An acceptance test-driven development test comes directly from an acceptance criterion. Cancelling 12 hours before check-in falls inside the 24-hour window, so the one-night fee applies. Removing the record is an implementation detail, changing the room type belongs to another story, and cancelling a booking that has already started contradicts the last criterion.",
    i18n: {"de":{"stem":"Betrachten Sie die folgende User Story und ihre Abnahmekriterien:","extra":"<p style=\"font-style:italic;padding-left:1.2rem\">Als Gast<br>möchte ich meine Buchung online stornieren,<br>damit ich nicht im Hotel anrufen muss</p><ul><li>Eine Buchung kann bis 24 Stunden vor der Anreise kostenfrei storniert werden</li><li>Bei einer Stornierung innerhalb von 24 Stunden vor der Anreise fällt eine Gebühr in Höhe einer Übernachtung an</li><li>Nach einer Stornierung erhält der Gast eine Bestätigungs-E-Mail</li><li>Eine bereits begonnene Buchung kann nicht storniert werden</li></ul>","stem2":"Welches der folgenden ist das BESTE Beispiel für einen ATDD-Test für diese User Story?","opts":["Prüfen, dass der Buchungsdatensatz nach der Stornierung aus der Datenbanktabelle entfernt wird","Prüfen, dass bei einer Stornierung 12 Stunden vor der Anreise eine Gebühr in Höhe einer Übernachtung berechnet wird","Prüfen, dass der Gast die Zimmerkategorie einer bestehenden Buchung ändern kann","Prüfen, dass eine Buchung auch nach der Anreise des Gastes noch storniert werden kann"],"just":"Ein Test nach Acceptance Test-Driven Development leitet sich unmittelbar aus einem Abnahmekriterium ab. Eine Stornierung 12 Stunden vor der Anreise liegt innerhalb der 24-Stunden-Frist, es fällt also die Gebühr in Höhe einer Übernachtung an. Das Entfernen des Datensatzes ist ein Umsetzungsdetail, das Ändern der Zimmerkategorie gehört zu einer anderen Story, und eine bereits begonnene Buchung zu stornieren widerspricht dem letzten Kriterium."}}
  }
   ]
  },
  {
   id: "m3",
   name: "Set M3",
   blurb: "40 further questions, same blueprint",
   questions: [
  {
    ch: 1,
    lo: "FL-1.1.1 (K1)",
    stem: "Which test objective is served by evaluating requirements and user stories before any code has been written?",
    opts: ["Verifying that the software has been correctly deployed to the production environment","Reducing the effort needed for confirmation testing later in the project","Preventing defects, by finding problems in the work products while they are still cheap to correct","Demonstrating that the delivered system complies with the contractual acceptance criteria"],
    ans: [2],
    just: "Evaluating a work product before it is implemented finds problems while nothing has yet been built on top of them, which prevents defects from ever reaching the code. Deployment checks, confirmation testing and contractual acceptance all happen much later and on a working system.",
    i18n: {"de":{"stem":"Welches Testziel wird verfolgt, wenn Anforderungen und User Storys bewertet werden, bevor überhaupt Code geschrieben wurde?","opts":["Zu prüfen, ob die Software korrekt in die Produktionsumgebung ausgeliefert wurde","Den Aufwand für spätere Fehlernachtests im Projekt zu verringern","Fehlerzustände zu vermeiden, indem Probleme in den Arbeitsergebnissen gefunden werden, solange ihre Korrektur noch günstig ist","Nachzuweisen, dass das gelieferte System die vertraglichen Abnahmekriterien erfüllt"],"just":"Ein Arbeitsergebnis zu bewerten, bevor es umgesetzt ist, findet Probleme, solange noch nichts darauf aufgebaut wurde, und verhindert so, dass Fehlerzustände überhaupt in den Code gelangen. Auslieferungsprüfungen, Fehlernachtests und die vertragliche Abnahme erfolgen sehr viel später und an einem lauffähigen System."}}
  },
  {
    ch: 4,
    lo: "FL-4.1.1 (K2)",
    stem: "For which of the following is a white-box test technique the MOST appropriate choice?",
    opts: ["Measuring how much of a newly written algorithm the existing component tests actually exercise","Deriving test cases from the acceptance criteria of a user story","Checking that the system rejects the invalid input combinations described in the specification","Exploring an undocumented legacy screen in order to learn how it behaves"],
    ans: [0],
    just: "White-box techniques work from the structure of the code, which is what makes them able to say how much of that structure has been exercised. Acceptance criteria and specified input combinations call for black-box techniques, and exploring an undocumented screen calls for an experience-based approach.",
    i18n: {"de":{"stem":"Für welche der folgenden Aufgaben ist ein White-Box-Testverfahren die GEEIGNETSTE Wahl?","opts":["Zu messen, welchen Anteil eines neu geschriebenen Algorithmus die vorhandenen Komponententests tatsächlich durchlaufen","Testfälle aus den Abnahmekriterien einer User Story abzuleiten","Zu prüfen, ob das System die in der Spezifikation beschriebenen ungültigen Eingabekombinationen zurückweist","Eine undokumentierte Altsystemmaske zu erkunden, um ihr Verhalten kennenzulernen"],"just":"White-Box-Verfahren arbeiten mit der Struktur des Codes, und genau deshalb können sie angeben, welcher Anteil dieser Struktur durchlaufen wurde. Abnahmekriterien und spezifizierte Eingabekombinationen verlangen Black-Box-Verfahren, und das Erkunden einer undokumentierten Maske verlangt ein erfahrungsbasiertes Vorgehen."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.1 (K2)",
    stem: "Your organization has moved from a sequential development model to two-week iterations.",
    stem2: "Which change to the testing should you expect?",
    opts: ["The test levels can no longer be distinguished from one another","Testing becomes a continuous activity inside every iteration rather than a phase at the end of the project","Static testing is replaced by automated regression testing","Acceptance testing is performed only once, after the final iteration"],
    ans: [1],
    just: "In an iterative lifecycle each iteration produces something potentially releasable, so testing has to happen within the iteration rather than after all development is finished. Test levels still exist, static testing remains valuable, and acceptance testing can happen for every increment.",
    i18n: {"de":{"stem":"Ihre Organisation ist von einem sequenziellen Entwicklungsmodell auf zweiwöchige Iterationen umgestiegen.","stem2":"Welche Veränderung beim Testen ist zu erwarten?","opts":["Die Teststufen lassen sich nicht mehr voneinander unterscheiden","Das Testen wird zu einer fortlaufenden Aktivität innerhalb jeder Iteration statt zu einer Phase am Projektende","Der statische Test wird durch automatisierte Regressionstests ersetzt","Der Abnahmetest wird nur einmal durchgeführt, nach der letzten Iteration"],"just":"In einem iterativen Lebenszyklus entsteht in jeder Iteration etwas potenziell Auslieferbares, das Testen muss also innerhalb der Iteration stattfinden und nicht erst, wenn die gesamte Entwicklung abgeschlossen ist. Teststufen bestehen weiterhin, der statische Test bleibt wertvoll, und ein Abnahmetest kann für jedes Inkrement erfolgen."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.1 (K2)",
    stem: "Which of the following is a good reason for updating the test plan during a project?",
    opts: ["A test case has failed and a defect has been reported","A tester has finished executing the test procedures assigned to them","The team has agreed on a new naming convention for automated test scripts","The product risk analysis has changed after new information about the system came to light"],
    ans: [3],
    just: "A test plan is not written once and frozen: when the risks change, the scope, priorities and effort in the plan have to change with them. Individual failures, completed work and naming conventions are handled inside the existing plan.",
    i18n: {"de":{"stem":"Was ist ein guter Grund, das Testkonzept während des Projekts zu aktualisieren?","opts":["Ein Testfall ist fehlgeschlagen und ein Fehlerzustand wurde berichtet","Ein Tester hat die ihm zugewiesenen Testabläufe vollständig durchgeführt","Das Team hat sich auf eine neue Namenskonvention für automatisierte Testskripte geeinigt","Die Produktrisikoanalyse hat sich geändert, nachdem neue Erkenntnisse über das System vorlagen"],"just":"Ein Testkonzept wird nicht einmal geschrieben und dann eingefroren: Ändern sich die Risiken, müssen Umfang, Prioritäten und Aufwand im Konzept mitgeführt werden. Einzelne Fehlschläge, abgeschlossene Arbeit und Namenskonventionen werden innerhalb des bestehenden Konzepts abgewickelt."}}
  },
  {
    ch: 3,
    lo: "FL-3.1.2 (K2)",
    stem: "Why does finding a defect during a requirements review usually cost less than finding the same defect during system testing?",
    opts: ["Reviews are always carried out by less expensive staff than system testing","Defects in requirements are always less severe than defects in code","The defect has not yet been propagated into design, code and tests, so far less work has to be redone","Static testing needs no test environment, so no licence costs are incurred"],
    ans: [2],
    just: "A requirements defect that survives into the design and the code has by then been built upon, tested against and documented, so correcting it means reworking all of that. Caught in the review, only the requirement itself changes. Severity and staff costs have nothing to do with it.",
    i18n: {"de":{"stem":"Warum ist es in der Regel günstiger, einen Fehlerzustand im Review der Anforderungen zu finden als denselben Fehlerzustand im Systemtest?","opts":["Reviews werden immer von günstigerem Personal durchgeführt als der Systemtest","Fehlerzustände in Anforderungen haben immer einen geringeren Schweregrad als Fehlerzustände im Code","Der Fehlerzustand hat sich noch nicht in Entwurf, Code und Tests fortgepflanzt, es muss also weit weniger nachgearbeitet werden","Der statische Test benötigt keine Testumgebung, es fallen also keine Lizenzkosten an"],"just":"Ein Fehlerzustand in den Anforderungen, der bis in den Entwurf und den Code überlebt, ist dort bereits Grundlage weiterer Arbeit, getesteter Funktionen und geschriebener Dokumentation; ihn zu korrigieren bedeutet, all das nachzuarbeiten. Im Review geändert, ändert sich nur die Anforderung selbst. Schweregrad und Personalkosten spielen dabei keine Rolle."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.1 (K3)",
    stem: "An insurance quotation form has two inputs:",
    extra: "<ul><li><strong>Driver age</strong>: a whole number from 18 to 99. Values outside this range are rejected.</li><li><strong>Vehicle category</strong>: A, B or C.</li></ul><p>You want 100% equivalence partitioning coverage of both inputs, including the invalid partitions of the age field. Each test case uses at most one invalid value.</p>",
    stem2: "What is the MINIMAL number of test cases needed?",
    opts: ["3","5","4","6"],
    ans: [1],
    just: "The age field has one valid partition and two invalid ones (below 18 and above 99); the vehicle category has three valid partitions. Three test cases with a valid age cover the three categories, and two further test cases are needed for the invalid age partitions, since only one invalid value may appear per test case. That gives five.",
    i18n: {"de":{"stem":"Ein Formular zur Versicherungsberechnung hat zwei Eingaben:","extra":"<ul><li><strong>Alter des Fahrers</strong>: eine ganze Zahl von 18 bis 99. Werte außerhalb dieses Bereichs werden zurückgewiesen.</li><li><strong>Fahrzeugklasse</strong>: A, B oder C.</li></ul><p>Sie möchten 100% Äquivalenzklassenüberdeckung beider Eingaben erreichen, einschließlich der ungültigen Klassen des Altersfelds. Jeder Testfall verwendet höchstens einen ungültigen Wert.</p>","stem2":"Wie viele Testfälle sind MINDESTENS nötig?","opts":["3","5","4","6"],"just":"Das Altersfeld hat eine gültige und zwei ungültige Äquivalenzklassen (unter 18 und über 99); die Fahrzeugklasse hat drei gültige Klassen. Drei Testfälle mit gültigem Alter decken die drei Fahrzeugklassen ab, und für die beiden ungültigen Altersklassen sind zwei weitere Testfälle nötig, da je Testfall nur ein ungültiger Wert vorkommen darf. Das ergibt fünf."}}
  },
  {
    ch: 1,
    lo: "FL-1.1.2 (K2)",
    stem: "Which statement about testing and debugging is CORRECT?",
    opts: ["Debugging can show that failures occur, while testing locates and removes the defects that cause them","Testing and debugging are two names for the same activity, performed by different roles","Debugging is a form of static testing, because the defect is found by reading the code","Dynamic testing can show that failures occur, while debugging locates and removes the defects that cause them"],
    ans: [3],
    just: "Testing makes failures visible; debugging is the development activity that works back from a failure to the defect and corrects it. The two are distinct, and debugging is not static testing even though reading code forms part of it.",
    i18n: {"de":{"stem":"Welche Aussage über Testen und Debugging ist RICHTIG?","opts":["Debugging kann zeigen, dass Fehlerwirkungen auftreten, während das Testen die verursachenden Fehlerzustände lokalisiert und beseitigt","Testen und Debugging sind zwei Bezeichnungen für dieselbe Tätigkeit, ausgeführt von unterschiedlichen Rollen","Debugging ist eine Form des statischen Tests, weil der Fehlerzustand durch Lesen des Codes gefunden wird","Dynamischer Test kann zeigen, dass Fehlerwirkungen auftreten, während das Debugging die verursachenden Fehlerzustände lokalisiert und beseitigt"],"just":"Das Testen macht Fehlerwirkungen sichtbar; das Debugging ist die Entwicklungstätigkeit, die von einer Fehlerwirkung zum Fehlerzustand zurückarbeitet und ihn behebt. Beides ist voneinander getrennt, und Debugging ist kein statischer Test, auch wenn dabei Code gelesen wird."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.3 (K2)",
    stem: "Which TWO of the following are entry criteria for a test level?",
    multi: true,
    opts: ["The agreed level of test coverage has been reached","The test environment has been set up and verified","All planned test cases have been executed","No defects with high severity remain open","The required test data is available and has been loaded"],
    ans: [1,4],
    just: "Entry criteria describe the preconditions for starting testing sensibly: an environment that works and the data the tests need. Achieved coverage, completed execution and an acceptable number of open defects all describe the state at which testing may stop, and are therefore exit criteria.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden sind Eingangskriterien für eine Teststufe?","opts":["Die vereinbarte Testüberdeckung ist erreicht","Die Testumgebung ist eingerichtet und überprüft","Alle geplanten Testfälle sind durchgeführt","Es sind keine Fehlerzustände mit hohem Schweregrad mehr offen","Die benötigten Testdaten sind vorhanden und eingespielt"],"just":"Eingangskriterien beschreiben die Voraussetzungen, um sinnvoll mit dem Testen beginnen zu können: eine funktionierende Umgebung und die Daten, die die Tests benötigen. Erreichte Überdeckung, abgeschlossene Durchführung und eine akzeptable Anzahl offener Fehlerzustände beschreiben den Zustand, in dem das Testen enden darf, und sind damit Endekriterien."}}
  },
  {
    ch: 6,
    lo: "FL-6.1.1 (K2)",
    stem: "Which category of tool supports static testing directly?",
    opts: ["Static analysis tools, which examine code and other work products without executing them","Test execution tools, which run automated test scripts against the software","Test data preparation tools, which generate and anonymize input records","Performance testing tools, which apply a defined load to the system"],
    ans: [0],
    just: "Static analysis tools inspect the work product itself and report problems such as unreachable code, coding standard violations and dependency issues, without ever running it. The other three categories all require the software to be executed.",
    i18n: {"de":{"stem":"Welche Werkzeugkategorie unterstützt den statischen Test unmittelbar?","opts":["Werkzeuge für die statische Analyse, die Code und andere Arbeitsergebnisse untersuchen, ohne sie auszuführen","Testdurchführungswerkzeuge, die automatisierte Testskripte gegen die Software ausführen","Werkzeuge zur Testdatenerzeugung, die Eingabedatensätze erzeugen und anonymisieren","Werkzeuge für den Performanztest, die eine definierte Last auf das System geben"],"just":"Werkzeuge für die statische Analyse untersuchen das Arbeitsergebnis selbst und melden Probleme wie nicht erreichbaren Code, Verstöße gegen Programmierrichtlinien und Abhängigkeitsprobleme, ohne es jemals auszuführen. Die anderen drei Kategorien setzen voraus, dass die Software ausgeführt wird."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.2 (K3)",
    stem: "A booking field accepts a whole number of nights from 1 to 28. Values outside that range are rejected.",
    stem2: "Applying 2-value boundary value analysis to this valid partition, which set of test values should be used?",
    opts: ["1 and 28","1, 2, 27 and 28","0, 1, 28 and 29","0, 1, 2, 27, 28 and 29"],
    ans: [2],
    just: "In 2-value boundary value analysis each boundary contributes two coverage items: the boundary value itself and its nearest neighbour in the adjacent partition. The lower boundary 1 gives 1 and 0, the upper boundary 28 gives 28 and 29.",
    i18n: {"de":{"stem":"Ein Buchungsfeld akzeptiert eine ganzzahlige Anzahl von Nächten von 1 bis 28. Werte außerhalb dieses Bereichs werden zurückgewiesen.","stem2":"Welche Testwerte sollten verwendet werden, wenn Sie die Grenzwertanalyse mit zwei Werten auf diese gültige Äquivalenzklasse anwenden?","opts":["1 und 28","1, 2, 27 und 28","0, 1, 28 und 29","0, 1, 2, 27, 28 und 29"],"just":"Bei der Grenzwertanalyse mit zwei Werten liefert jede Grenze zwei Überdeckungselemente: den Grenzwert selbst und seinen nächsten Nachbarwert in der angrenzenden Äquivalenzklasse. Die untere Grenze 1 ergibt 1 und 0, die obere Grenze 28 ergibt 28 und 29."}}
  },
  {
    ch: 2,
    lo: "FL-2.1.3 (K1)",
    stem: "Which of the following BEST describes test-driven development (TDD)?",
    opts: ["An independent test team writes the tests before the developers begin coding","The acceptance criteria are turned into automated tests once the feature is complete","The tests are derived from the code as soon as it compiles successfully","A test is written first, then just enough code to make it pass, and the code is then refactored"],
    ans: [3],
    just: "TDD works in short cycles of writing a failing test, writing the minimum code that passes it, and then improving the design while the tests keep passing. The tests are written by the developer, before the code, and they drive its design.",
    i18n: {"de":{"stem":"Was beschreibt testgetriebene Entwicklung (Test-Driven Development, TDD) am BESTEN?","opts":["Ein unabhängiges Testteam schreibt die Tests, bevor die Entwickler mit dem Codieren beginnen","Die Abnahmekriterien werden in automatisierte Tests überführt, sobald die Funktion fertiggestellt ist","Die Tests werden aus dem Code abgeleitet, sobald dieser fehlerfrei übersetzt","Zuerst wird ein Test geschrieben, dann gerade so viel Code, dass er erfolgreich durchläuft, anschließend wird der Code überarbeitet"],"just":"TDD arbeitet in kurzen Zyklen: einen fehlschlagenden Test schreiben, den minimalen Code schreiben, der ihn erfolgreich macht, und dann den Entwurf verbessern, während die Tests weiterhin durchlaufen. Die Tests schreibt der Entwickler selbst, vor dem Code, und sie prägen dessen Entwurf."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.2 (K2)",
    stem: "Distributing the work product to the participants and explaining the objectives of the review to them belongs to which review activity?",
    opts: ["Planning","Initiate review","Individual review","Communication and analysis"],
    ans: [1],
    just: "Initiate review makes sure everyone has what they need and understands what is expected of them, including distributing the work product and any supporting material. Planning comes before it and defines scope and criteria; the actual examination happens in individual review.",
    i18n: {"de":{"stem":"Das Verteilen des Arbeitsergebnisses an die Teilnehmer und das Erläutern der Reviewziele gehört zu welcher Reviewaktivität?","opts":["Planung","Initiieren des Reviews","Individuelles Review","Kommunikation und Analyse"],"just":"Das Initiieren des Reviews stellt sicher, dass alle Beteiligten haben, was sie brauchen, und wissen, was von ihnen erwartet wird, einschließlich der Verteilung des Arbeitsergebnisses und der unterstützenden Unterlagen. Die Planung geht voraus und legt Umfang und Kriterien fest; die eigentliche Prüfung erfolgt im individuellen Review."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.4 (K3)",
    stem: "In the last three comparable projects, testing accounted on average for 25% of the total project effort. The new project has been estimated at 400 person-days in total.",
    stem2: "Using metrics-based estimation, what is the estimated test effort?",
    opts: ["100 person-days","80 person-days","125 person-days","300 person-days"],
    ans: [0],
    just: "Metrics-based estimation applies data from comparable past projects to the new one: 25% of 400 person-days is 100 person-days. The figure 300 is the remaining project effort, not the test effort.",
    i18n: {"de":{"stem":"In den letzten drei vergleichbaren Projekten entfielen im Mittel 25% des gesamten Projektaufwands auf das Testen. Das neue Projekt ist auf insgesamt 400 Personentage geschätzt.","stem2":"Wie hoch ist der geschätzte Testaufwand bei metrikbasierter Schätzung?","opts":["100 Personentage","80 Personentage","125 Personentage","300 Personentage"],"just":"Die metrikbasierte Schätzung überträgt Daten aus vergleichbaren früheren Projekten auf das neue: 25% von 400 Personentagen sind 100 Personentage. Der Wert 300 ist der übrige Projektaufwand, nicht der Testaufwand."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.1 (K2)",
    stem: "Which of the following BEST explains why testing is still necessary on a team of highly experienced developers?",
    opts: ["Experienced developers write more code, so a larger number of defects is statistically certain","Contracts for commercial software always require an independent test team","Testing is the only objective way to measure the productivity of a development team","People make mistakes under time pressure and in complex systems, and testing reveals the resulting defects before users meet them"],
    ans: [3],
    just: "Experience reduces mistakes but does not remove them, especially under schedule pressure, in unfamiliar domains or in systems too large to hold in one head. Testing gives the team evidence about what the software actually does. It is not a productivity measurement and no contract makes it necessary.",
    i18n: {"de":{"stem":"Was erklärt am BESTEN, warum Testen auch in einem Team aus sehr erfahrenen Entwicklern notwendig bleibt?","opts":["Erfahrene Entwickler schreiben mehr Code, damit ist eine größere Zahl von Fehlerzuständen statistisch sicher","Verträge über kommerzielle Software verlangen stets ein unabhängiges Testteam","Testen ist die einzige objektive Möglichkeit, die Produktivität eines Entwicklungsteams zu messen","Menschen machen unter Zeitdruck und in komplexen Systemen Fehlhandlungen, und das Testen deckt die daraus entstehenden Fehlerzustände auf, bevor Anwender ihnen begegnen"],"just":"Erfahrung verringert Fehlhandlungen, beseitigt sie aber nicht, besonders nicht unter Termindruck, in unbekannten Fachdomänen oder in Systemen, die zu groß sind, um sie zu überblicken. Testen liefert dem Team Belege darüber, was die Software tatsächlich tut. Es ist keine Produktivitätsmessung, und kein Vertrag macht es notwendig."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.3 (K3)",
    stem: "An online examination booking system is described by the decision table below.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Registered candidate</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Fee paid</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Seat available</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Actions</td></tr><tr><td class=\"rowhead\">Booking confirmed</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Placed on waiting list</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Booking rejected</td><td></td><td></td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr></table></div>",
    stem2: "Which test case covers rule R2?",
    opts: ["A registered candidate who has not paid the fee, at a time when a seat is available","A candidate who is not registered but has paid the fee, at a time when a seat is available","A registered candidate who has paid the fee, at a time when no seat is available","A registered candidate who has paid the fee, at a time when a seat is available"],
    ans: [2],
    just: "R2 is the column with the condition values true, true, false: a registered candidate who has paid but for whom no seat is free, and the resulting action is that the candidate is placed on the waiting list. The remaining options describe R3, R5 and R1.",
    i18n: {"de":{"stem":"Ein Online-System zur Prüfungsanmeldung wird durch die folgende Entscheidungstabelle beschrieben.","extra":"<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Registrierter Kandidat</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Gebühr bezahlt</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Platz verfügbar</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Aktionen</td></tr><tr><td class=\"rowhead\">Anmeldung bestätigt</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Auf die Warteliste gesetzt</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Anmeldung abgelehnt</td><td></td><td></td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr></table></div><p>W steht für wahr, F für falsch.</p>","stem2":"Welcher Testfall deckt die Regel R2 ab?","opts":["Ein registrierter Kandidat, der die Gebühr nicht bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist","Ein nicht registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist","Ein registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem kein Platz verfügbar ist","Ein registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist"],"just":"R2 ist die Spalte mit den Bedingungswerten wahr, wahr, falsch: ein registrierter Kandidat, der bezahlt hat, für den aber kein Platz frei ist; die zugehörige Aktion ist, ihn auf die Warteliste zu setzen. Die übrigen Antworten beschreiben R3, R5 und R1."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.5 (K3)",
    stem: "Four test cases have been assessed for risk. Likelihood and impact are each rated on a scale from 1 to 5, and the risk level is calculated as likelihood multiplied by impact.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th>Test case</th><th>Likelihood</th><th>Impact</th></tr><tr><td class=\"rowhead\">TC 1</td><td>5</td><td>2</td></tr><tr><td class=\"rowhead\">TC 2</td><td>3</td><td>4</td></tr><tr><td class=\"rowhead\">TC 3</td><td>2</td><td>5</td></tr><tr><td class=\"rowhead\">TC 4</td><td>4</td><td>4</td></tr></table></div>",
    stem2: "If the test cases are executed in descending order of risk level, which one is executed SECOND?",
    opts: ["TC 2","TC 4","TC 1","TC 3"],
    ans: [0],
    just: "The risk levels are TC 1 = 10, TC 2 = 12, TC 3 = 10 and TC 4 = 16. TC 4 has the highest risk level and is executed first, TC 2 is next with 12, and TC 1 and TC 3 follow with 10 each.",
    i18n: {"de":{"stem":"Für vier Testfälle wurde das Risiko bewertet. Eintrittswahrscheinlichkeit und Auswirkung werden jeweils auf einer Skala von 1 bis 5 bewertet, und die Risikohöhe ergibt sich als Produkt beider Werte.","extra":"<div class=\"figure\"><table class=\"dt\"><tr><th>Testfall</th><th>Wahrscheinlichkeit</th><th>Auswirkung</th></tr><tr><td class=\"rowhead\">TF 1</td><td>5</td><td>2</td></tr><tr><td class=\"rowhead\">TF 2</td><td>3</td><td>4</td></tr><tr><td class=\"rowhead\">TF 3</td><td>2</td><td>5</td></tr><tr><td class=\"rowhead\">TF 4</td><td>4</td><td>4</td></tr></table></div>","stem2":"Wenn die Testfälle in absteigender Reihenfolge der Risikohöhe durchgeführt werden, welcher wird als ZWEITER durchgeführt?","opts":["TF 2","TF 4","TF 1","TF 3"],"just":"Die Risikohöhen betragen TF 1 = 10, TF 2 = 12, TF 3 = 10 und TF 4 = 16. TF 4 hat die höchste Risikohöhe und wird zuerst durchgeführt, danach folgt TF 2 mit 12, anschließend TF 1 und TF 3 mit jeweils 10."}}
  },
  {
    ch: 2,
    lo: "FL-2.2.1 (K2)",
    stem: "A supplier delivers a new payroll system. Before the company accepts it, a group of payroll clerks uses it to run one month's payroll with real data and confirms that the results match what they expect.",
    stem2: "Which test level does this describe?",
    opts: ["System testing","Acceptance testing","System integration testing","Component integration testing"],
    ans: [1],
    just: "The testing is performed by the users of the system, on the complete system, to establish confidence and readiness for use rather than to find defects. That is acceptance testing, and in this form specifically operational or user acceptance testing.",
    i18n: {"de":{"stem":"Ein Lieferant liefert ein neues Lohnabrechnungssystem. Bevor das Unternehmen es abnimmt, führt eine Gruppe von Sachbearbeitern damit eine Monatsabrechnung mit echten Daten durch und bestätigt, dass die Ergebnisse ihren Erwartungen entsprechen.","stem2":"Welche Teststufe beschreibt das?","opts":["Systemtest","Abnahmetest","Systemintegrationstest","Komponentenintegrationstest"],"just":"Das Testen wird von den Anwendern des Systems am vollständigen System durchgeführt, um Vertrauen und Einsatzbereitschaft festzustellen, und nicht vorrangig, um Fehlerzustände zu finden. Das ist ein Abnahmetest, in dieser Form ein betrieblicher oder Benutzerabnahmetest."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.3 (K1)",
    stem: "Consider the following review roles (1-4) and responsibilities (A-D):",
    match: {"items":["Author","Review leader","Scribe","Manager"],"cats":["Decides that reviews shall be carried out and allocates time and budget for them","Runs the review meeting and mediates between the participants","Creates the work product under review and corrects the defects that are found","Records the anomalies found and the decisions taken during the meeting"]},
    stem2: "How do the roles map onto the responsibilities?",
    opts: ["1C, 2D, 3B, 4A","1A, 2B, 3D, 4C","1C, 2B, 3D, 4A","1D, 2B, 3C, 4A"],
    ans: [2],
    just: "The author owns and repairs the work product, the review leader runs the meeting and mediates, the scribe records anomalies and decisions, and the manager decides that reviews happen and funds them.",
    i18n: {"de":{"stem":"Betrachten Sie die folgenden Reviewrollen (1-4) und Verantwortlichkeiten (A-D):","match":{"items":["Autor","Reviewleiter","Protokollant","Management"],"cats":["Entscheidet, dass Reviews durchgeführt werden, und stellt Zeit und Budget dafür bereit","Leitet die Reviewsitzung und vermittelt zwischen den Teilnehmern","Erstellt das zu prüfende Arbeitsergebnis und behebt die gefundenen Fehlerzustände","Protokolliert die gefundenen Anomalien und die in der Sitzung getroffenen Entscheidungen"]},"stem2":"Wie ordnen sich die Rollen den Verantwortlichkeiten zu?","opts":["1C, 2D, 3B, 4A","1A, 2B, 3D, 4C","1C, 2B, 3D, 4A","1D, 2B, 3C, 4A"],"just":"Der Autor verantwortet das Arbeitsergebnis und behebt die Fehlerzustände, der Reviewleiter leitet die Sitzung und vermittelt, der Protokollant hält Anomalien und Entscheidungen fest, und das Management entscheidet über die Durchführung von Reviews und stellt die Mittel bereit."}}
  },
  {
    ch: 4,
    lo: "FL-4.2.4 (K3)",
    stem: "The lifecycle of a purchase order is modelled by the state transition diagram below. The initial state is DRAFT; SHIPPED and CANCELLED are final states.",
    fig: "order-states",
    stem2: "Which of the following sequences of events is NOT possible?",
    opts: ["submit, approve, reject","submit, reject, submit, approve, cancel","submit, approve, ship","cancel"],
    ans: [0],
    just: "The event reject is only accepted in the state SUBMITTED. After submit and approve the order is in the state APPROVED, where the accepted events are ship and cancel, so reject cannot follow. Every other sequence follows transitions that the diagram allows.",
    i18n: {"de":{"stem":"Der Lebenszyklus einer Bestellung wird durch das folgende Zustandsübergangsdiagramm beschrieben. Der Anfangszustand ist ENTWURF; VERSANDT und STORNIERT sind Endzustände.","stem2":"Welche der folgenden Ereignisfolgen ist NICHT möglich?","opts":["einreichen, genehmigen, ablehnen","einreichen, ablehnen, einreichen, genehmigen, stornieren","einreichen, genehmigen, versenden","stornieren"],"just":"Das Ereignis ablehnen wird nur im Zustand EINGEREICHT angenommen. Nach einreichen und genehmigen befindet sich die Bestellung im Zustand GENEHMIGT, wo nur versenden und stornieren möglich sind, ablehnen kann also nicht folgen. Alle übrigen Folgen verwenden Übergänge, die das Diagramm zulässt."}}
  },
  {
    ch: 1,
    lo: "FL-1.2.2 (K1)",
    stem: "Which of the following activities belongs to quality assurance rather than to quality control?",
    opts: ["Executing the regression suite before a release","Improving the team's definition of done so that future user stories are specified more clearly","Reviewing a requirements document in order to find defects in it","Reporting an anomaly observed during system testing"],
    ans: [1],
    just: "Quality assurance improves the process so that fewer defects are introduced in the first place, and changing the definition of done is exactly that. Executing tests, reviewing a document and reporting anomalies are all quality control: they examine the product that has already been produced.",
    i18n: {"de":{"stem":"Welche der folgenden Tätigkeiten gehört zur Qualitätssicherung und nicht zur Qualitätslenkung?","opts":["Die Regressionstestsuite vor einer Freigabe durchführen","Die Definition of Done des Teams verbessern, damit künftige User Storys klarer spezifiziert werden","Ein Anforderungsdokument prüfen, um Fehlerzustände darin zu finden","Eine im Systemtest beobachtete Anomalie berichten"],"just":"Die Qualitätssicherung verbessert den Prozess, damit von vornherein weniger Fehlerzustände entstehen, und genau das ist eine Änderung der Definition of Done. Tests durchzuführen, ein Dokument zu prüfen und Anomalien zu berichten gehört zur Qualitätslenkung: Dabei wird das bereits erstellte Produkt untersucht."}}
  },
  {
    ch: 5,
    lo: "FL-5.1.7 (K2)",
    stem: "In which agile testing quadrant do automated component tests and component integration tests belong?",
    opts: ["Quadrant Q2: business facing, supporting the team","Quadrant Q3: business facing, critique the product","Quadrant Q4: technology facing, critique the product","Quadrant Q1: technology facing, supporting the team"],
    ans: [3],
    just: "Component and component integration tests are written in technical terms and exist to give the team fast feedback while it builds, which places them in Q1. Q2 holds business-facing tests that also support the team, Q3 covers exploratory and usability testing, and Q4 covers performance and security testing.",
    i18n: {"de":{"stem":"In welchem agilen Testquadranten liegen automatisierte Komponententests und Komponentenintegrationstests?","opts":["Quadrant Q2: fachlich ausgerichtet, unterstützt das Team","Quadrant Q3: fachlich ausgerichtet, bewertet das Produkt kritisch","Quadrant Q4: technologisch ausgerichtet, bewertet das Produkt kritisch","Quadrant Q1: technologisch ausgerichtet, unterstützt das Team"],"just":"Komponenten- und Komponentenintegrationstests sind technisch formuliert und geben dem Team während der Entwicklung schnelles Feedback, was sie in Q1 einordnet. Q2 enthält fachlich ausgerichtete Tests, die das Team ebenfalls unterstützen, Q3 umfasst exploratives Testen und Gebrauchstauglichkeit, und Q4 umfasst Performanz- und Sicherheitstests."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.1 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1   READ n\n2   total = 0\n3   i = 1\n4   WHILE i &lt;= n DO\n5       total = total + i\n6       i = i + 1\n7   END WHILE\n8   IF total &gt; 10 THEN\n9       PRINT \"big\"\n10  END IF\n11  PRINT total",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% statement coverage?",
    opts: ["2","3","1","4"],
    ans: [2],
    just: "A single test case with n = 5 enters the loop, so the statements inside it are executed, and produces a total of 15, so the statement inside the second decision is executed as well. Every executable statement is therefore covered by that one test case.",
    i18n: {"de":{"stem":"Betrachten Sie den folgenden Pseudocode:","stem2":"Wie viele Testfälle sind MINDESTENS nötig, um 100% Anweisungsüberdeckung zu erreichen?","opts":["2","3","1","4"],"just":"Ein einziger Testfall mit n = 5 betritt die Schleife, sodass die Anweisungen darin ausgeführt werden, und ergibt die Summe 15, sodass auch die Anweisung innerhalb der zweiten Entscheidung ausgeführt wird. Damit deckt dieser eine Testfall jede ausführbare Anweisung ab."}}
  },
  {
    ch: 2,
    lo: "FL-2.2.2 (K2)",
    stem: "A small change is made to a shared date-formatting utility that is used by six modules of the system.",
    stem2: "What should determine how much regression testing is performed?",
    opts: ["The number of test cases that were executed for the previous release","An impact analysis of which parts of the system the change could affect","The size of the source file that was modified","The number of testers available in the current iteration"],
    ans: [1],
    just: "Impact analysis identifies what the change could touch, directly and indirectly, and the regression testing is scoped accordingly. A shared utility used by six modules has a wide blast radius even though the change itself is small, which is exactly what impact analysis makes visible.",
    i18n: {"de":{"stem":"An einer gemeinsam genutzten Hilfsfunktion zur Datumsformatierung, die von sechs Modulen des Systems verwendet wird, wird eine kleine Änderung vorgenommen.","stem2":"Wonach sollte sich der Umfang des Regressionstests richten?","opts":["Nach der Anzahl der Testfälle, die für die vorherige Freigabe durchgeführt wurden","Nach einer Auswirkungsanalyse, welche Teile des Systems die Änderung betreffen kann","Nach der Größe der geänderten Quelldatei","Nach der Anzahl der in der aktuellen Iteration verfügbaren Tester"],"just":"Die Auswirkungsanalyse ermittelt, was die Änderung unmittelbar und mittelbar berühren kann, und danach wird der Regressionstest zugeschnitten. Eine gemeinsam genutzte Hilfsfunktion in sechs Modulen hat eine große Reichweite, obwohl die Änderung selbst klein ist, und genau das macht die Auswirkungsanalyse sichtbar."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.4 (K2)",
    stem: "Which review type is characterized by the author leading the participants through the work product, with no formal process and with individual preparation being optional?",
    opts: ["Inspection","Technical review","Informal review","Walkthrough"],
    ans: [3],
    just: "In a walkthrough the author presents the work product and guides the participants through it, which makes it useful for finding defects, evaluating alternatives and educating the audience. An inspection is the most formal type and is led by a moderator, a technical review is led by a moderator and focuses on technical decisions, and an informal review has no defined process at all.",
    i18n: {"de":{"stem":"Welcher Reviewtyp ist dadurch gekennzeichnet, dass der Autor die Teilnehmer durch das Arbeitsergebnis führt, ohne formalen Prozess und mit optionaler individueller Vorbereitung?","opts":["Inspektion","Technisches Review","Informelles Review","Walkthrough"],"just":"In einem Walkthrough stellt der Autor das Arbeitsergebnis vor und führt die Teilnehmer hindurch, was sich zum Finden von Fehlerzuständen, zum Abwägen von Alternativen und zur Schulung der Zuhörer eignet. Die Inspektion ist der formalste Typ und wird von einem Moderator geleitet, das technische Review wird ebenfalls moderiert und behandelt technische Entscheidungen, und das informelle Review hat gar keinen definierten Prozess."}}
  },
  {
    ch: 1,
    lo: "FL-1.3.1 (K2)",
    stem: "A colleague proposes testing every possible combination of values for the twelve input fields of a form, so that the team can be certain the form contains no defects.",
    stem2: "Which testing principle shows that this proposal cannot work?",
    opts: ["Exhaustive testing is impossible","Testing is context dependent","Early testing saves time and money","Defects cluster together"],
    ans: [0],
    just: "Except in trivial cases the number of possible input combinations is far too large to test, so the team must use risk and priorities to decide what to test instead. The other principles are true but say nothing about the feasibility of testing everything.",
    i18n: {"de":{"stem":"Ein Kollege schlägt vor, jede mögliche Wertekombination der zwölf Eingabefelder eines Formulars zu testen, damit das Team sicher sein kann, dass das Formular keine Fehlerzustände enthält.","stem2":"Welcher Grundsatz des Testens zeigt, dass dieser Vorschlag nicht umsetzbar ist?","opts":["Vollständiges Testen ist nicht möglich","Testen ist kontextabhängig","Frühes Testen spart Zeit und Geld","Fehlerzustände treten gehäuft auf"],"just":"Außer in trivialen Fällen ist die Anzahl möglicher Eingabekombinationen viel zu groß, um sie zu testen; das Team muss stattdessen anhand von Risiken und Prioritäten entscheiden, was getestet wird. Die anderen Grundsätze sind zutreffend, sagen aber nichts über die Machbarkeit aus, alles zu testen."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.2 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1   READ age\n2   READ isMember\n3   IF age &lt; 18 THEN\n4       price = 5\n5   ELSE\n6       price = 10\n7   END IF\n8   IF isMember = TRUE THEN\n9       price = price - 2\n10  END IF\n11  PRINT price",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% branch coverage?",
    opts: ["1","3","2","4"],
    ans: [2],
    just: "There are four branches, two from each decision. One test case with age = 10 and isMember true takes the true branch of both decisions, and a second with age = 30 and isMember false takes both false branches. Two test cases therefore cover all four.",
    i18n: {"de":{"stem":"Betrachten Sie den folgenden Pseudocode:","stem2":"Wie viele Testfälle sind MINDESTENS nötig, um 100% Zweigüberdeckung zu erreichen?","opts":["1","3","2","4"],"just":"Es gibt vier Zweige, zwei je Entscheidung. Ein Testfall mit age = 10 und isMember wahr durchläuft den Wahr-Zweig beider Entscheidungen, ein zweiter mit age = 30 und isMember falsch beide Falsch-Zweige. Zwei Testfälle decken damit alle vier ab."}}
  },
  {
    ch: 5,
    lo: "FL-5.2.1 (K1)",
    stem: "Which of the following BEST describes a risk in the context of testing?",
    opts: ["A defect that has been found but has not yet been corrected","A failure that occurred in production after the most recent release","A test case that has failed in more than one test cycle","A potential event with negative consequences, characterized by its likelihood and its impact"],
    ans: [3],
    just: "A risk is something that has not happened yet. It is described by how likely it is and how bad it would be, and those two attributes together give its risk level. Defects, failures and failing tests are things that have already occurred.",
    i18n: {"de":{"stem":"Was beschreibt ein Risiko im Zusammenhang mit dem Testen am BESTEN?","opts":["Ein Fehlerzustand, der gefunden, aber noch nicht behoben wurde","Eine Fehlerwirkung, die nach der letzten Freigabe im Produktivbetrieb aufgetreten ist","Ein Testfall, der in mehr als einem Testzyklus fehlgeschlagen ist","Ein mögliches Ereignis mit negativen Folgen, gekennzeichnet durch seine Eintrittswahrscheinlichkeit und seine Auswirkung"],"just":"Ein Risiko ist etwas, das noch nicht eingetreten ist. Es wird dadurch beschrieben, wie wahrscheinlich es ist und wie schwerwiegend es wäre, und beide Merkmale zusammen ergeben seine Risikohöhe. Fehlerzustände, Fehlerwirkungen und fehlgeschlagene Tests sind bereits eingetreten."}}
  },
  {
    ch: 6,
    lo: "FL-6.2.1 (K1)",
    stem: "Which of the following is a realistic expectation when introducing test automation?",
    opts: ["The whole regression suite can be automated within the first iteration","The initial investment is significant, and the benefit appears only once the tests have been run many times","Manual testing becomes unnecessary once the automation is in place","The automated tests will find the same defects a skilled exploratory tester would find"],
    ans: [1],
    just: "Automation costs effort to build and to maintain, and it repays that effort through repeated execution, so the return arrives over time rather than immediately. Automating everything at once is unrealistic, manual and exploratory testing continue to find defects automation cannot, and automated tests only check what they were told to check.",
    i18n: {"de":{"stem":"Welche Erwartung an die Einführung von Testautomatisierung ist realistisch?","opts":["Die gesamte Regressionstestsuite lässt sich innerhalb der ersten Iteration automatisieren","Die Anfangsinvestition ist erheblich, und der Nutzen stellt sich erst ein, wenn die Tests viele Male gelaufen sind","Manuelles Testen wird überflüssig, sobald die Automatisierung steht","Die automatisierten Tests finden dieselben Fehlerzustände wie ein erfahrener explorativer Tester"],"just":"Automatisierung kostet Aufwand für Aufbau und Pflege und zahlt sich über die wiederholte Durchführung aus, der Nutzen stellt sich also mit der Zeit ein und nicht sofort. Alles auf einmal zu automatisieren ist unrealistisch, manuelles und exploratives Testen finden weiterhin Fehlerzustände, die die Automatisierung nicht findet, und automatisierte Tests prüfen nur, was ihnen vorgegeben wurde."}}
  },
  {
    ch: 2,
    lo: "FL-2.3.1 (K2)",
    stem: "Which of the following are triggers for maintenance testing?",
    romans: ["Migration of the system to a new cloud platform","Retirement of the system, including the archiving of its data","A hotfix for a defect found in production","The first release of a system that has never been in production","An upgrade of a third-party library used by the system"],
    opts: ["i, ii, iii and v","i, iii and v only","i, ii and iii only","i, ii, iii, iv and v"],
    ans: [0],
    just: "Maintenance testing is triggered by modification, migration or retirement of a system that is already in operation, so hotfixes, platform migrations, library upgrades and retirement all qualify. The first release of a system that has never been in production is development testing, not maintenance testing.",
    i18n: {"de":{"stem":"Welche der folgenden sind Auslöser für Wartungstests?","romans":["Migration des Systems auf eine neue Cloud-Plattform","Außerbetriebnahme des Systems einschließlich Archivierung seiner Daten","Ein Hotfix für einen im Produktivbetrieb gefundenen Fehlerzustand","Die erste Freigabe eines Systems, das noch nie im Produktivbetrieb war","Ein Versionswechsel einer vom System genutzten Fremdbibliothek"],"opts":["i, ii, iii und v","nur i, iii und v","nur i, ii und iii","i, ii, iii, iv und v"],"just":"Wartungstests werden durch Änderung, Migration oder Außerbetriebnahme eines bereits im Einsatz befindlichen Systems ausgelöst, also durch Hotfixes, Plattformmigrationen, Bibliotheksaktualisierungen und die Außerbetriebnahme. Die erste Freigabe eines Systems, das noch nie produktiv war, gehört zur Entwicklung und nicht zur Wartung."}}
  },
  {
    ch: 4,
    lo: "FL-4.3.3 (K2)",
    stem: "Why are white-box techniques especially valuable at component testing level?",
    opts: ["They remove the need for specification-based tests at that level","They are the only way to detect performance problems inside a component","They guarantee that the component's interfaces have been correctly integrated","The code is available and small enough for coverage to be measured and the gaps closed cheaply"],
    ans: [3],
    just: "At component level the developer has the code in front of them and the unit is small, so measuring coverage is practical and any uncovered branch can be addressed immediately. White-box techniques complement specification-based tests rather than replacing them, and they say nothing about integration or performance.",
    i18n: {"de":{"stem":"Warum sind White-Box-Verfahren auf der Stufe des Komponententests besonders wertvoll?","opts":["Sie machen spezifikationsbasierte Tests auf dieser Stufe überflüssig","Sie sind die einzige Möglichkeit, Performanzprobleme innerhalb einer Komponente zu erkennen","Sie garantieren, dass die Schnittstellen der Komponente korrekt integriert sind","Der Code liegt vor und ist klein genug, sodass sich die Überdeckung messen und Lücken günstig schließen lassen"],"just":"Auf Komponentenebene hat der Entwickler den Code vor sich und die Einheit ist klein, sodass die Messung der Überdeckung praktikabel ist und jeder nicht durchlaufene Zweig sofort angegangen werden kann. White-Box-Verfahren ergänzen spezifikationsbasierte Tests, ersetzen sie aber nicht, und über Integration oder Performanz sagen sie nichts aus."}}
  },
  {
    ch: 1,
    lo: "FL-1.4.1 (K2)",
    stem: "What is the MAIN outcome of the test analysis activity?",
    opts: ["The test cases and the test data needed to execute them","The test execution schedule and the assembled test suites","The test conditions, derived from an analysis of the test basis","The test completion report and the lessons learned"],
    ans: [2],
    just: "Test analysis asks what to test: it evaluates the test basis and derives the test conditions from it. Turning those conditions into test cases is test design, assembling suites and schedules is test implementation, and the completion report belongs to test completion.",
    i18n: {"de":{"stem":"Was ist das HAUPTERGEBNIS der Aktivität Testanalyse?","opts":["Die Testfälle und die zu ihrer Durchführung nötigen Testdaten","Der Zeitplan für die Testdurchführung und die zusammengestellten Testsuiten","Die Testbedingungen, abgeleitet aus einer Analyse der Testbasis","Der Testabschlussbericht und die gewonnenen Erkenntnisse"],"just":"Die Testanalyse beantwortet die Frage, was getestet werden soll: Sie bewertet die Testbasis und leitet daraus die Testbedingungen ab. Diese Bedingungen in Testfälle zu überführen ist Testentwurf, das Zusammenstellen von Suiten und Zeitplänen ist Testrealisierung, und der Abschlussbericht gehört zum Testabschluss."}}
  },
  {
    ch: 5,
    lo: "FL-5.2.3 (K2)",
    stem: "Who should take part in product risk analysis?",
    opts: ["A range of stakeholders including business representatives, developers and testers, because identifying risks benefits from different perspectives","The test manager alone, so that the assessment stays objective","Only the developers, because they know best where the code is weak","Only the customer, because they carry the business consequences"],
    ans: [0],
    just: "Different people see different risks: business representatives know what would hurt the organization, developers know where the design is fragile, and testers know where defects have clustered before. A single perspective reliably misses whole categories of risk.",
    i18n: {"de":{"stem":"Wer sollte an der Produktrisikoanalyse teilnehmen?","opts":["Verschiedene Projektbeteiligte, darunter Vertreter des Fachbereichs, Entwickler und Tester, weil das Erkennen von Risiken von unterschiedlichen Blickwinkeln profitiert","Der Testmanager allein, damit die Bewertung objektiv bleibt","Nur die Entwickler, weil sie am besten wissen, wo der Code schwach ist","Nur der Kunde, weil er die geschäftlichen Folgen trägt"],"just":"Verschiedene Personen sehen verschiedene Risiken: Vertreter des Fachbereichs wissen, was der Organisation schaden würde, Entwickler wissen, wo der Entwurf brüchig ist, und Tester wissen, wo sich Fehlerzustände bisher gehäuft haben. Eine einzelne Perspektive übersieht zuverlässig ganze Risikokategorien."}}
  },
  {
    ch: 3,
    lo: "FL-3.2.5 (K3)",
    stem: "You have been asked to review a user story twice: once from the point of view of a first-time customer, and once from the point of view of a support agent who will have to answer questions about it.",
    stem2: "Which review technique are you applying?",
    opts: ["Checklist-based reviewing","Role-based reviewing","Ad hoc reviewing","Scenario-based reviewing"],
    ans: [1],
    just: "Role-based reviewing evaluates a work product from the perspective of individual user roles, which surfaces problems that matter to one group and are invisible to another. Checklist-based reviewing works from a list of known problems, ad hoc reviewing gives no guidance, and scenario-based reviewing walks the work product through expected usage.",
    i18n: {"de":{"stem":"Sie sollen eine User Story zweimal prüfen: einmal aus der Sicht eines Erstnutzers und einmal aus der Sicht eines Supportmitarbeiters, der später Fragen dazu beantworten muss.","stem2":"Welche Reviewtechnik wenden Sie an?","opts":["Checklistenbasiertes Review","Rollenbasiertes Review","Ad-hoc-Review","Szenariobasiertes Review"],"just":"Beim rollenbasierten Review wird ein Arbeitsergebnis aus der Sicht einzelner Benutzerrollen bewertet, wodurch Probleme sichtbar werden, die für eine Gruppe wichtig und für eine andere unsichtbar sind. Das checklistenbasierte Review arbeitet mit einer Liste bekannter Probleme, das Ad-hoc-Review gibt keine Anleitung, und das szenariobasierte Review geht das Arbeitsergebnis anhand der erwarteten Nutzung durch."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.2 (K2)",
    stem: "In which of the following situations is exploratory testing MOST useful?",
    opts: ["A regulated project requires full traceability from every test to a numbered requirement","The same tests have to be repeated identically in every nightly build","The specification is sparse, time is short, and the team needs early feedback on a new feature","The team needs to demonstrate that 100% branch coverage has been reached"],
    ans: [2],
    just: "Exploratory testing is at its strongest where documentation is thin and feedback is needed quickly, because the tester learns and tests at the same time. Full traceability, identical repetition and coverage evidence all call for scripted or automated approaches.",
    i18n: {"de":{"stem":"In welcher Situation ist exploratives Testen am NÜTZLICHSTEN?","opts":["In einem regulierten Projekt wird lückenlose Nachverfolgbarkeit von jedem Test zu einer nummerierten Anforderung verlangt","Dieselben Tests müssen in jedem nächtlichen Build unverändert wiederholt werden","Die Spezifikation ist dünn, die Zeit knapp, und das Team braucht frühes Feedback zu einer neuen Funktion","Das Team muss nachweisen, dass 100% Zweigüberdeckung erreicht wurde"],"just":"Exploratives Testen ist dort am stärksten, wo die Dokumentation dünn ist und schnell Rückmeldung gebraucht wird, weil der Tester gleichzeitig lernt und testet. Lückenlose Nachverfolgbarkeit, identische Wiederholung und Überdeckungsnachweise verlangen skriptbasierte oder automatisierte Vorgehensweisen."}}
  },
  {
    ch: 1,
    lo: "FL-1.5.2 (K1)",
    stem: "Which of the following BEST describes the whole team approach?",
    opts: ["Anyone in the team with the necessary knowledge can take on any task, and everyone shares responsibility for quality","Every member of the team attends every test execution session","The test manager distributes the testing tasks across the whole team","One tester is embedded in each development team but reports to a central test manager"],
    ans: [0],
    just: "In the whole team approach any suitably skilled team member may work on any task, testers work alongside developers and business representatives, and quality is a shared responsibility rather than one role's job. It is about how responsibility is held, not about attendance or reporting lines.",
    i18n: {"de":{"stem":"Was beschreibt den Whole-Team-Ansatz am BESTEN?","opts":["Jede Person im Team mit dem nötigen Wissen kann jede Aufgabe übernehmen, und alle tragen gemeinsam Verantwortung für die Qualität","Jedes Teammitglied nimmt an jeder Testdurchführungssitzung teil","Der Testmanager verteilt die Testaufgaben auf das gesamte Team","In jedem Entwicklungsteam arbeitet ein Tester, der jedoch an einen zentralen Testmanager berichtet"],"just":"Im Whole-Team-Ansatz kann jedes ausreichend qualifizierte Teammitglied jede Aufgabe übernehmen, Tester arbeiten Seite an Seite mit Entwicklern und Vertretern des Fachbereichs, und Qualität ist eine gemeinsame Verantwortung statt Aufgabe einer einzelnen Rolle. Es geht darum, wie Verantwortung getragen wird, nicht um Anwesenheit oder Berichtswege."}}
  },
  {
    ch: 5,
    lo: "FL-5.3.3 (K2)",
    stem: "A test progress report is being prepared for the team's daily stand-up rather than for a formal governance board.",
    stem2: "How should it differ?",
    opts: ["It must contain exactly the same formal metrics as the governance report, so that reporting stays consistent","It can be informal and spoken, concentrating on what has changed since yesterday and what is currently blocking progress","It should be omitted, because progress reporting belongs only in formal written reports","It should list every defect found so far, together with its full technical analysis"],
    ans: [1],
    just: "How test status is communicated depends on the audience and the purpose. A stand-up needs the short, current picture and the obstacles; a governance board needs the formal, aggregated view. Matching the report to its audience is the point, not applying one format everywhere.",
    i18n: {"de":{"stem":"Ein Testfortschrittsbericht wird für das tägliche Stand-up des Teams erstellt und nicht für ein formales Steuerungsgremium.","stem2":"Wie sollte er sich unterscheiden?","opts":["Er muss genau dieselben formalen Metriken enthalten wie der Bericht an das Gremium, damit die Berichterstattung einheitlich bleibt","Er darf informell und mündlich sein und sich darauf konzentrieren, was sich seit gestern geändert hat und was den Fortschritt gerade blockiert","Er sollte entfallen, weil Fortschrittsberichte nur in formale schriftliche Berichte gehören","Er sollte alle bisher gefundenen Fehlerzustände samt vollständiger technischer Analyse auflisten"],"just":"Wie der Teststatus kommuniziert wird, hängt vom Adressaten und vom Zweck ab. Ein Stand-up braucht das kurze, aktuelle Bild und die Hindernisse; ein Steuerungsgremium braucht die formale, verdichtete Sicht. Es geht darum, den Bericht an seinen Adressaten anzupassen, und nicht darum, überall dasselbe Format zu verwenden."}}
  },
  {
    ch: 4,
    lo: "FL-4.4.3 (K2)",
    stem: "What is a known limitation of checklist-based testing?",
    opts: ["It cannot be applied without access to the source code of the test object","It requires a complete and fully documented specification","It cannot be combined with any other test technique","Checklists become stale over time, and testers may stop looking beyond the items on the list"],
    ans: [3],
    just: "A checklist captures what was worth checking when it was written, and both the product and the risks move on; it can also narrow a tester's attention to the listed items. Checklists need neither code nor a full specification, and they combine well with other techniques.",
    i18n: {"de":{"stem":"Was ist eine bekannte Grenze des checklistenbasierten Testens?","opts":["Es lässt sich ohne Zugriff auf den Quellcode des Testobjekts nicht anwenden","Es setzt eine vollständige und lückenlos dokumentierte Spezifikation voraus","Es lässt sich nicht mit anderen Testverfahren kombinieren","Checklisten veralten mit der Zeit, und Tester schauen möglicherweise nicht mehr über die aufgeführten Punkte hinaus"],"just":"Eine Checkliste hält fest, was zum Zeitpunkt ihrer Erstellung prüfenswert war, während sich Produkt und Risiken weiterentwickeln; sie kann außerdem die Aufmerksamkeit des Testers auf die aufgeführten Punkte verengen. Checklisten benötigen weder Code noch eine vollständige Spezifikation und lassen sich gut mit anderen Verfahren kombinieren."}}
  },
  {
    ch: 1,
    lo: "FL-1.5.3 (K2)",
    stem: "A safety-critical component is tested by a team from a different organization that had no part in developing it.",
    stem2: "What is the MAIN advantage of this arrangement?",
    opts: ["The testers need less domain knowledge in order to design effective tests","Defects are fixed faster, because the testers report directly to the developers","The testers bring an independent view and are not influenced by the developers' assumptions about the component","The development team is no longer responsible for the quality of the component"],
    ans: [2],
    just: "The value of a high degree of independence is objectivity: an outside team does not share the blind spots created by having written or specified the component. Independence does not reduce the domain knowledge required, does not speed up fixes, and never transfers responsibility for quality away from the developers.",
    i18n: {"de":{"stem":"Eine sicherheitskritische Komponente wird von einem Team aus einer anderen Organisation getestet, das an ihrer Entwicklung nicht beteiligt war.","stem2":"Was ist der HAUPTVORTEIL dieser Regelung?","opts":["Die Tester benötigen weniger Domänenwissen, um wirksame Tests zu entwerfen","Fehlerzustände werden schneller behoben, weil die Tester direkt an die Entwickler berichten","Die Tester bringen eine unabhängige Sicht mit und werden nicht von den Annahmen der Entwickler über die Komponente beeinflusst","Das Entwicklungsteam trägt keine Verantwortung mehr für die Qualität der Komponente"],"just":"Der Wert eines hohen Grades an Unabhängigkeit liegt in der Objektivität: Ein externes Team teilt die blinden Flecken nicht, die dadurch entstehen, dass man die Komponente selbst geschrieben oder spezifiziert hat. Unabhängigkeit senkt den Bedarf an Domänenwissen nicht, beschleunigt Behebungen nicht und verlagert die Verantwortung für die Qualität niemals von den Entwicklern weg."}}
  },
  {
    ch: 5,
    lo: "FL-5.5.1 (K3)",
    stem: "Which TWO of the following belong in a well-written defect report?",
    multi: true,
    opts: ["The steps needed to reproduce the anomaly","The name of the developer believed to have caused the defect","The tester's estimate of how long the correction ought to take","The identification of the test object and of the test environment","A list of all the other defects found during the same test run"],
    ans: [0,3],
    just: "A defect report exists so that someone else can reproduce, assess and correct the anomaly, which needs the reproduction steps and the exact object and environment it appeared in. Attributing blame, estimating someone else's fix and listing unrelated defects all belong elsewhere or nowhere.",
    i18n: {"de":{"stem":"Welche ZWEI der folgenden Angaben gehören in einen gut geschriebenen Fehlerbericht?","opts":["Die Schritte, mit denen sich die Anomalie reproduzieren lässt","Der Name des Entwicklers, der den Fehlerzustand vermutlich verursacht hat","Die Einschätzung des Testers, wie lange die Behebung dauern sollte","Die Identifikation des Testobjekts und der Testumgebung","Eine Liste aller anderen Fehlerzustände, die im selben Testlauf gefunden wurden"],"just":"Ein Fehlerbericht existiert, damit jemand anderes die Anomalie reproduzieren, bewerten und beheben kann; dafür braucht es die Reproduktionsschritte sowie das genaue Testobjekt und die Umgebung, in der sie auftrat. Schuldzuweisungen, fremde Aufwandsschätzungen und Listen unbeteiligter Fehlerzustände gehören woandershin oder nirgendwohin."}}
  },
  {
    ch: 4,
    lo: "FL-4.5.2 (K2)",
    stem: "Which of the following is an acceptance criterion written in the given/when/then format?",
    opts: ["The basket must be fast and easy to use","Given a logged-in customer with an empty basket, when they add an item, then the basket shows one item","As a customer I want a basket so that I can buy several items in one order","The basket module shall be implemented using the existing cache service"],
    ans: [1],
    just: "The given/when/then format states the precondition, the action and the expected outcome, which makes the criterion directly testable. Requiring the basket to be fast and easy to use is not measurable, the user story states a need rather than a condition, and prescribing the existing cache service is an implementation constraint.",
    i18n: {"de":{"stem":"Welches der folgenden ist ein Abnahmekriterium im Format Gegeben/Wenn/Dann?","opts":["Der Warenkorb muss schnell und einfach zu bedienen sein","Gegeben ein angemeldeter Kunde mit leerem Warenkorb, wenn er einen Artikel hinzufügt, dann zeigt der Warenkorb einen Artikel","Als Kunde möchte ich einen Warenkorb, damit ich mehrere Artikel in einer Bestellung kaufen kann","Das Warenkorbmodul ist mit dem bestehenden Cache-Dienst zu implementieren"],"just":"Das Format Gegeben/Wenn/Dann nennt die Vorbedingung, die Aktion und das erwartete Ergebnis und macht das Kriterium damit unmittelbar testbar. Zu fordern, dass der Warenkorb schnell und einfach zu bedienen sei, ist nicht messbar, die User Story beschreibt ein Bedürfnis und keine Bedingung, und die Vorgabe des bestehenden Cache-Dienstes ist eine Umsetzungsvorgabe."}}
  }
   ]
  }
  ]
};
