/* German translation of Set M1, aligned by index with the English bank.
   Terminology follows the German Testing Board (GTB) glossary. */
module.exports = [
/* 0 */ {
  stem: "Welches der folgenden ist ein gültiges Testziel?",
  opts: [
    "So viele Fehlerwirkungen wie möglich zu finden, damit das Testobjekt als fehlerfrei erklärt werden kann",
    "Die Verantwortung für die Qualität des ausgelieferten Produkts vom Entwicklungsteam zu übernehmen",
    "Fehlerzustände zu vermeiden, indem Arbeitsergebnisse wie Anforderungen und User Storys bewertet werden",
    "Dem Kunden nachzuweisen, dass im Testobjekt keine Fehlerzustände mehr vorhanden sind"
  ],
  just: "Das Bewerten von Arbeitsergebnissen wie Anforderungen, User Storys und Entwürfen ist ein typisches Testziel und verhindert, dass Fehlerzustände überhaupt erst in den Code gelangen. Testen kann niemals nachweisen, dass ein System fehlerfrei ist oder keine Fehlerzustände mehr enthält, und die Verantwortung für die Qualität bleibt beim gesamten Team und geht nicht auf die Tester über."
},
/* 1 */ {
  stem: "Welche der folgenden Aussagen über die Kategorien von Testverfahren ist RICHTIG?",
  opts: [
    "Erfahrungsbasierte Testverfahren nutzen das Wissen und die Fähigkeiten der Tester, um Testfälle abzuleiten",
    "Black-Box-Testverfahren leiten Testfälle aus einer Analyse der inneren Struktur des Testobjekts ab",
    "White-Box-Testverfahren beruhen auf einer Analyse des spezifizierten Verhaltens des Testobjekts",
    "Überdeckung lässt sich nur für Testfälle messen, die mit Black-Box-Testverfahren abgeleitet wurden"
  ],
  just: "Erfahrungsbasierte Verfahren stützen sich auf das Wissen der Tester über das Testobjekt, über ähnliche Systeme und über typische Fehlhandlungen von Entwicklern. Zwei der übrigen Antworten vertauschen schlicht die Definitionen von Black-Box- und White-Box-Verfahren, und Überdeckung lässt sich für beide Kategorien messen."
},
/* 2 */ {
  stem: "Welche der folgenden Aussagen über den Einfluss des Softwareentwicklungslebenszyklus (SDLC) auf das Testen ist RICHTIG?",
  opts: [
    "In einem sequenziellen SDLC kann der Testentwurf erst beginnen, wenn der Code geschrieben ist",
    "In einem iterativen SDLC gewinnt der Regressionstest an Bedeutung, weil das Produkt mit jeder Iteration wächst",
    "In einem inkrementellen SDLC macht der statische Test in den frühen Inkrementen den dynamischen Test in den späteren überflüssig",
    "In einem agilen SDLC lassen sich die Teststufen sequenzieller Modelle überhaupt nicht anwenden"
  ],
  just: "Jede Iteration ergänzt ein bestehendes Produkt, damit wächst das Risiko, Funktionierendes zu beschädigen, und der Regressionstest gewinnt an Gewicht. Der Testentwurf kann beginnen, sobald die Testbasis vorliegt, und muss nicht auf den Code warten; statischer Test ersetzt nie den dynamischen Test; und Teststufen werden auch in agilen Projekten verwendet."
},
/* 3 */ {
  stem: "Was würden Sie in einem Testkonzept erwarten?",
  opts: [
    "Die detaillierten Schritte und erwarteten Ergebnisse jedes einzelnen Testfalls",
    "Die Liste der im letzten Testzyklus gefundenen Anomalien",
    "Den Quellcode der automatisierten Testskripte",
    "Den Terminplan, die Eingangs- und Endekriterien sowie die benötigten Ressourcen"
  ],
  just: "Ein Testkonzept beschreibt Ziele, Umfang, Terminplan, Ressourcen, Eingangs- und Endekriterien sowie das Vorgehen beim Testen. Detaillierte Testschritte gehören in Testfälle und Testabläufe, Anomalien werden im Fehlermanagementsystem geführt, und Testskripte sind Testmittel und kein Bestandteil des Konzepts."
},
/* 4 */ {
  stem: "Welcher Nutzen lässt sich durch statischen Test erreichen, NICHT aber durch dynamischen Test?",
  opts: [
    "Das Aufdecken von Fehlerwirkungen, die durch das Zusammenspiel zweier Komponenten zur Laufzeit entstehen",
    "Das Messen der Antwortzeit des Systems unter einer definierten Last",
    "Das Aufdecken von Widersprüchen, Mehrdeutigkeiten und Lücken in den Anforderungen, bevor überhaupt Code existiert",
    "Die Bestätigung, dass ein zuvor berichteter Fehlerzustand korrekt behoben wurde"
  ],
  just: "Der statische Test untersucht Arbeitsergebnisse, ohne sie auszuführen. Er kann daher lange vor der Codierung auf Anforderungen angewendet werden und findet Mehrdeutigkeiten und Widersprüche, die ein dynamischer Test niemals aufdecken könnte. Alle übrigen Antworten setzen voraus, dass die Software ausgeführt wird."
},
/* 5 */ {
  stem: "Sie testen die Versandkostenberechnung eines Onlineshops. Sie hat zwei Eingaben:",
  extra: '<ul><li><strong>Bestellwert</strong> mit vier Bereichen: unter 25,00 EUR; 25,00 bis 49,99 EUR; 50,00 bis 99,99 EUR; 100,00 EUR und mehr</li><li><strong>Zielgebiet</strong> mit drei Möglichkeiten: Inland; Europäische Union; übrige Welt</li></ul><p>Bestellungen in die übrige Welt werden nur ab einem Bestellwert von 100,00 EUR angenommen. Jede andere Kombination weist der Shop mit einer Fehlermeldung zurück, bevor die Versandkosten berechnet werden.</p><p>Jeder Test verwendet einen Bestellwert und ein Zielgebiet. Sie wenden die Äquivalenzklassenbildung an, um jeden Bestellwertbereich und jedes Zielgebiet abzudecken.</p>',
  stem2: "Wie viele Testfälle sind MINDESTENS nötig, um 100% Äquivalenzklassenüberdeckung der gültigen Klassen zu erreichen?",
  opts: ["3", "4", "5", "7"],
  just: "Es gibt vier gültige Äquivalenzklassen für den Bestellwert und drei für das Zielgebiet, also sind mindestens vier Testfälle nötig. Vier genügen auch, weil für jede Klasse eine gültige Kombination existiert, zum Beispiel: (unter 25,00, Inland), (25,00–49,99, EU), (50,00–99,99, Inland), (100,00 und mehr, übrige Welt)."
},
/* 6 */ {
  stem: "Welche der folgenden Tätigkeiten gehört zum Debugging und nicht zum Testen?",
  opts: [
    "Einen Testablauf durchführen, bei dem die Komponente eine falsche Summe anzeigt",
    "Testfälle aus den Abnahmekriterien einer User Story entwerfen",
    "Eine bei der Durchführung eines Testablaufs beobachtete Anomalie berichten",
    "Eine Fehlerwirkung reproduzieren, den Fehlerzustand im Code lokalisieren und beheben"
  ],
  just: "Debugging ist die Entwicklungstätigkeit, eine Fehlerwirkung zu reproduzieren, ihre Ursache zu diagnostizieren und den Fehlerzustand zu beheben. Einen Test durchzuführen, die dabei aufgedeckte Anomalie zu berichten und Tests aus Abnahmekriterien zu entwerfen sind Testaktivitäten; die Diagnose und die Behebung sind Debugging."
},
/* 7 */ {
  stem: "Welche ZWEI der folgenden sind Beispiele für Endekriterien einer Teststufe?",
  opts: [
    "Die Testumgebung ist verfügbar und stabil",
    "Die geplante Testüberdeckung der identifizierten Produktrisiken ist erreicht",
    "Die benötigten Testdaten sind aufbereitet und eingespielt",
    "Die Tester sind auf dem neuen Testmanagementwerkzeug geschult",
    "Die Anzahl der offenen Fehlerzustände hoher Priorität liegt unter dem vereinbarten Schwellenwert"
  ],
  just: "Endekriterien legen fest, was erfüllt sein muss, damit das Testen als abgeschlossen gelten kann: die erreichte Überdeckung und eine akzeptable Anzahl offener Fehlerzustände sind typische Beispiele. Eine verfügbare Umgebung, aufbereitete Testdaten und geschulte Tester sind Eingangskriterien, also Voraussetzungen für den Beginn."
},
/* 8 */ {
  stem: "Ein Team muss große Mengen realistischer Eingabedatensätze erzeugen, damit eine neue Batch-Schnittstelle getestet werden kann. Welche Art von Werkzeugunterstützung ist am besten geeignet?",
  opts: [
    "Ein Werkzeug zur Testdatenerzeugung",
    "Ein Testmanagementwerkzeug",
    "Ein Werkzeug für die statische Analyse",
    "Ein Werkzeug zur Überdeckungsmessung"
  ],
  just: "Werkzeuge zur Testdatenerzeugung erzeugen, transformieren oder anonymisieren Daten, sodass realistische Mengen für die Testdurchführung bereitstehen. Testmanagementwerkzeuge organisieren den Testprozess, Werkzeuge für die statische Analyse untersuchen Code ohne ihn auszuführen, und Überdeckungswerkzeuge messen, welcher Anteil des Codes durchlaufen wurde."
},
/* 9 */ {
  stem: "Ein Paketsystem ordnet anhand des Paketgewichts in ganzen Gramm eine Versandkategorie zu:",
  extra: '<ul><li>0 bis 500 g: Brief</li><li>501 bis 2000 g: Päckchen</li><li>2001 bis 10000 g: Paket</li><li>10001 bis 30000 g: Sperrgut</li></ul><p>Gewichte über 30000 g werden nicht angenommen. Sie haben die folgenden Testfälle vorbereitet:</p><div class="figure"><table class="dt"><tr><th></th><th>Gewicht (g)</th><th>Erwartete Kategorie</th></tr><tr><td class="rowhead">TF1</td><td>0</td><td>Brief</td></tr><tr><td class="rowhead">TF2</td><td>500</td><td>Brief</td></tr><tr><td class="rowhead">TF3</td><td>750</td><td>Päckchen</td></tr><tr><td class="rowhead">TF4</td><td>2000</td><td>Päckchen</td></tr><tr><td class="rowhead">TF5</td><td>10001</td><td>Sperrgut</td></tr></table></div>',
  stem2: "Welche Überdeckung nach der Grenzwertanalyse mit zwei Werten erreichen diese Testfälle für das Paketgewicht?",
  opts: ["40%", "62,5%", "50%", "80%"],
  just: "Die vier gültigen Äquivalenzklassen haben acht Grenzwerte: 0, 500, 501, 2000, 2001, 10000, 10001 und 30000. Die Testfälle decken 0, 500, 2000 und 10001 ab, also vier von acht, damit beträgt die Überdeckung 50%. TF3 verwendet 750, was kein Grenzwert ist."
},
/* 10 */ {
  stem: "Was beschreibt Behavior-Driven Development (BDD) am BESTEN?",
  opts: [
    "Komponententests werden von den Entwicklern unmittelbar nach dem Schreiben des Codes erstellt und anschließend automatisiert",
    "Die Abnahmekriterien werden vor der Freigabe von einem unabhängigen Testteam aus dem fertigen Code abgeleitet",
    "Testfälle werden aus der Codestruktur abgeleitet, um die vereinbarte Zweigüberdeckung zu erreichen",
    "Tests werden in einer natürlichen, fachlich lesbaren Form formuliert, die das gewünschte Verhalten beschreibt, und leiten so die Entwicklung des Codes"
  ],
  just: "BDD beschreibt das gewünschte Verhalten in einer einfachen, strukturierten natürlichen Sprache, typischerweise nach dem Muster Gegeben/Wenn/Dann, die das ganze Team lesen kann; diese Beispiele treiben dann die Implementierung. Die übrigen Antworten beschreiben das Testen nach der Codierung, das späte Ableiten von Abnahmekriterien aus dem fertigen Produkt und den White-Box-Testentwurf."
},
/* 11 */ {
  stem: "Was kann mit statischem Test untersucht werden?",
  romans: [
    "Quellcode",
    "Testfälle",
    "Verträge und Projektpläne",
    "Das Verhalten des Systems, das während einer explorativen Testsitzung beobachtet wird",
    "User Storys mit ihren Abnahmekriterien"
  ],
  opts: ["nur i, ii und iii", "i, ii, iii und v", "nur i, ii und v", "i, ii, iii, iv und v"],
  just: "Statischer Test lässt sich auf nahezu jedes Arbeitsergebnis anwenden, das gelesen und geprüft werden kann, also auch auf Code, Testmittel, Verträge, Pläne und User Storys. Punkt iv ist kein Arbeitsergebnis, sondern ein während der Ausführung beobachtetes Verhalten und damit dynamischer Test."
},
/* 12 */ {
  stem: "Ihr Team schätzt den Testaufwand für eine neue Berichtsfunktion mit der Drei-Punkt-Schätzung. Die Schätzwerte lauten:",
  extra: '<ul><li>Optimistischste Schätzung: 6 Personentage</li><li>Wahrscheinlichste Schätzung: 9 Personentage</li><li>Pessimistischste Schätzung: 24 Personentage</li></ul>',
  stem2: "Wie hoch ist der resultierende Schätzwert?",
  opts: ["11 Personentage", "9 Personentage", "13 Personentage", "15 Personentage"],
  just: "Die Drei-Punkt-Schätzung lautet (optimistisch + 4 × wahrscheinlich + pessimistisch) / 6 = (6 + 36 + 24) / 6 = 66 / 6 = 11 Personentage. Der Wert 13 ist das einfache arithmetische Mittel der drei Schätzungen, und 9 ist allein die wahrscheinlichste Schätzung."
},
/* 13 */ {
  stem: "Ein Business-Analyst hat eine nationale Steuerregel missverstanden und die entsprechende Anforderung falsch formuliert. Der Entwickler hat die Anforderung genau wie beschrieben umgesetzt. Im Systemtest zeigte eine Rechnung 19% Mehrwertsteuer, obwohl 7% hätten angewendet werden müssen.",
  stem2: "Welche Zuordnung beschreibt diese Situation RICHTIG?",
  opts: [
    "Das Missverständnis der Steuerregel ist ein Fehlerzustand, die falsche Anforderung ist eine Fehlhandlung, und der falsche Steuersatz auf der Rechnung ist die Grundursache",
    "Die falsche Anforderung ist die Grundursache, der falsche Steuersatz auf der Rechnung ist ein Fehlerzustand, und die Umsetzung durch den Entwickler ist eine Fehlerwirkung",
    "Der falsche Steuersatz auf der Rechnung ist ein Fehlerzustand, die falsche Anforderung ist eine Fehlerwirkung, und die Umsetzung durch den Entwickler ist eine Fehlhandlung",
    "Das Missverständnis der Steuerregel ist die Grundursache, die falsche Anforderung ist ein Fehlerzustand, und der falsche Steuersatz auf der Rechnung ist eine Fehlerwirkung"
  ],
  just: "Eine menschliche Fehlhandlung (das Missverständnis) ist die Grundursache; sie erzeugte einen Fehlerzustand in der Anforderung, der in den Code übernommen wurde; die bei der Ausführung sichtbare Abweichung vom erwarteten Ergebnis ist die Fehlerwirkung."
},
/* 14 */ {
  stem: "Ein Mietwagensystem setzt die folgenden Regeln um:",
  extra: '<ul><li>Ein Fahrzeug kann nur von Kunden gemietet werden, die einen gültigen Führerschein besitzen</li><li>Kunden unter 25 Jahren zahlen einen Jungfahreraufschlag</li><li>Kunden mit Kundenkarte erhalten 10% Rabatt, dieser Rabatt wird jedoch nicht gewährt, wenn der Jungfahreraufschlag anfällt</li></ul><p>Die folgende Entscheidungstabelle beschreibt das umgesetzte Verhalten:</p><div class="figure"><table class="dt"><tr><th class="rowhead">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class="rowhead">Gültiger Führerschein</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Jünger als 25</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Besitzt Kundenkarte</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class="sect"><td colspan="9">Aktionen</td></tr><tr><td class="rowhead">Vermietung angenommen</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">Jungfahreraufschlag</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">10% Rabatt</td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table></div><p>W steht für wahr, F für falsch.</p>',
  stem2: "Welche Spalte der Entscheidungstabelle widerspricht AUSSCHLIESSLICH nach den oben genannten Regeln dem spezifizierten Verhalten?",
  opts: ["R3", "R5", "R1", "R7"],
  just: "R1 beschreibt einen Kunden unter 25 Jahren, der eine Kundenkarte besitzt. Die Tabelle gewährt sowohl den Jungfahreraufschlag als auch die 10% Rabatt, die Spezifikation schließt den Rabatt jedoch aus, sobald der Aufschlag anfällt. R3, R5 und R7 stimmen mit den Regeln überein."
},
/* 15 */ {
  stem: "Betrachten Sie die folgenden Testfälle für einen Onlineshop mit ihren Prioritäten (eine kleinere Zahl bedeutet eine höhere Priorität) und ihren logischen Abhängigkeiten:",
  extra: '<div class="figure"><table class="dt"><tr><th>Testfall</th><th class="rowhead">Abgedeckte Testbedingung</th><th>Priorität</th><th>Hängt ab von</th></tr><tr><td>TF 001</td><td class="rowhead">Kundenkonto anlegen</td><td>2</td><td>keine</td></tr><tr><td>TF 002</td><td class="rowhead">Anmelden</td><td>1</td><td>TF 001</td></tr><tr><td>TF 003</td><td class="rowhead">Artikel in den Warenkorb legen</td><td>3</td><td>TF 002</td></tr><tr><td>TF 004</td><td class="rowhead">Passwort ändern</td><td>2</td><td>TF 002</td></tr><tr><td>TF 005</td><td class="rowhead">Warenkorb bestellen</td><td>1</td><td>TF 003</td></tr></table></div>',
  stem2: "Welcher Testfall sollte als DRITTER durchgeführt werden?",
  opts: ["TF 004", "TF 002", "TF 003", "TF 005"],
  just: "TF 001 muss zuerst laufen, weil alles andere davon abhängt. Danach ist TF 002 der einzige durchführbare Testfall und zugleich der mit der höchsten Priorität, er läuft also als zweiter. Anschließend sind TF 003 (Priorität 3) und TF 004 (Priorität 2) durchführbar, und der höher priorisierte TF 004 läuft als dritter."
},
/* 16 */ {
  stem: "Welches der folgenden ist ein Beispiel für einen Shift-Left-Ansatz?",
  opts: [
    "Einen Betatest mit ausgewählten Endanwendern durchführen, nachdem der Systemtest abgeschlossen ist",
    "Die Abnahmekriterien einer User Story gemeinsam mit den Entwicklern prüfen, bevor die Umsetzung beginnt",
    "Die vollständige Regressionstestsuite kurz vor der Freigabe in einer produktionsnahen Umgebung ausführen",
    "Das Verhalten des Systems im Produktivbetrieb überwachen, damit Fehlerzustände in der nächsten Freigabe früher gefunden werden"
  ],
  just: "Shift Left bedeutet, Testaktivitäten früher im Lebenszyklus durchzuführen, etwa Anforderungen und Abnahmekriterien zu prüfen, bevor Code geschrieben wird. Alle übrigen Antworten finden spät im Lebenszyklus oder nach der Freigabe statt."
},
/* 17 */ {
  stem: "In welcher Aktivität des Reviewprozesses werden die Befunde der einzelnen Reviewer zusammengetragen, besprochen und über jeden Befund entschieden?",
  opts: ["Planung", "Individuelles Review", "Beheben und Berichten", "Kommunikation und Analyse"],
  just: "In der Kommunikation und Analyse werden die im individuellen Review gefundenen Anomalien mitgeteilt, diskutiert und jeweils mit einem Status versehen, etwa Fehlerzustand, Verbesserung oder kein Handlungsbedarf. Die Planung legt Umfang und Kriterien fest, das individuelle Review erzeugt die Befunde, und das Beheben und Berichten kümmert sich um die vereinbarten Korrekturen."
},
/* 18 */ {
  stem: "Der Lebenszyklus eines Kundenvertrags wird durch das folgende Zustandsübergangsdiagramm beschrieben. Der Anfangszustand ist NEU; ABGELEHNT und GESCHLOSSEN sind Endzustände.",
  stem2: "Wie viele Testfälle sind MINDESTENS nötig, um 100% Überdeckung der gültigen Zustandsübergänge zu erreichen, wenn jeder Testfall in NEU beginnt und in einem Endzustand endet?",
  opts: ["2", "4", "3", "6"],
  just: "Es gibt sechs gültige Zustandsübergänge. Der Übergang NEU &rarr; ABGELEHNT beendet den Test sofort und benötigt daher einen eigenen Testfall. Die Übergänge AUSGESETZT &rarr; GESCHLOSSEN und AKTIV &rarr; GESCHLOSSEN enden beide in einem Endzustand und können deshalb nicht im selben Testfall vorkommen. Drei Testfälle genügen, zum Beispiel: (1) ablehnen; (2) genehmigen, aussetzen, reaktivieren, schließen; (3) genehmigen, aussetzen, schließen."
},
/* 19 */ {
  stem: "Welche Aussage unterscheidet Qualitätssicherung (QS) und Qualitätslenkung (QL) am BESTEN?",
  opts: [
    "QS wird von einem unabhängigen Team durchgeführt, QL immer vom Entwicklungsteam",
    "QS ist prozessorientiert und zielt auf die Umsetzung guter Prozesse, QL ist produktorientiert und zielt auf das Erreichen eines angemessenen Qualitätsniveaus",
    "QS umfasst die korrigierenden Maßnahmen nach beobachteten Fehlerwirkungen, QL die vorbeugenden Maßnahmen",
    "QS umfasst statischen und dynamischen Test, QL nur den dynamischen Test"
  ],
  just: "Qualitätssicherung ist ein prozessorientierter, vorbeugender Ansatz, der über die Verbesserung der Prozesse dafür sorgt, dass das Produkt richtig entsteht. Qualitätslenkung ist produktorientiert und korrigierend, und Testen ist eine ihrer Aktivitäten. Unabhängigkeit und die Unterscheidung statisch/dynamisch haben mit dieser Abgrenzung nichts zu tun."
},
/* 20 */ {
  stem: "Betrachten Sie die folgenden Testkategorien (1-4) und die agilen Testquadranten (A-D):",
  match: {
    items: [
      "Exploratives Testen",
      "Komponentenintegrationstest",
      "Test der Performanzeffizienz",
      "Fachlich ausgerichtete Funktionstests, die gemeinsam mit dem Product Owner erstellt wurden"
    ],
    cats: [
      "Quadrant Q1: technologisch ausgerichtet, unterstützt das Team",
      "Quadrant Q2: fachlich ausgerichtet, unterstützt das Team",
      "Quadrant Q3: fachlich ausgerichtet, bewertet das Produkt kritisch",
      "Quadrant Q4: technologisch ausgerichtet, bewertet das Produkt kritisch"
    ]
  },
  stem2: "Wie ordnen sich diese Testkategorien den agilen Testquadranten zu?",
  opts: ["1D, 2A, 3C, 4B", "1C, 2B, 3D, 4A", "1B, 2A, 3D, 4C", "1C, 2A, 3D, 4B"],
  just: "Exploratives Testen ist fachlich ausgerichtet und bewertet das Produkt kritisch (Q3). Der Komponentenintegrationstest ist technologisch ausgerichtet und unterstützt das Team (Q1). Der Test der Performanzeffizienz ist technologisch ausgerichtet und bewertet das Produkt kritisch (Q4). Fachlich ausgerichtete Funktionstests, die mit dem Product Owner abgestimmt sind, unterstützen das Team (Q2)."
},
/* 21 */ {
  stem: "Betrachten Sie den folgenden Pseudocode:",
  stem2: "Es werden zwei Testfälle durchgeführt: TF1 mit x = 5, y = 20 und TF2 mit x = -3, y = 20. Welche Überdeckung erreichen diese beiden Testfälle zusammen?",
  opts: [
    "100% Anweisungsüberdeckung und 75% Zweigüberdeckung",
    "100% Anweisungsüberdeckung und 100% Zweigüberdeckung",
    "75% Anweisungsüberdeckung und 100% Zweigüberdeckung",
    "100% Anweisungsüberdeckung und 50% Zweigüberdeckung"
  ],
  just: "Zusammen führen die beiden Testfälle jede ausführbare Anweisung aus, die Anweisungsüberdeckung beträgt also 100%. Es gibt vier Zweige: bei der ersten Entscheidung werden beide Ausgänge durchlaufen, die zweite Entscheidung (y &gt; 10) ist jedoch stets wahr, sodass drei von vier Zweigen durchlaufen werden, also 75% Zweigüberdeckung."
},
/* 22 */ {
  stem: "Ein Fehlerzustand im Zahlungsmodul wurde behoben. Das Team führt den Testfall erneut aus, der den Fehlerzustand ursprünglich aufgedeckt hat, und führt zusätzlich die Testfälle für das Rechnungsmodul aus, das sich eine Bibliothek mit dem Zahlungsmodul teilt.",
  stem2: "Welche Aussage beschreibt diese beiden Testmengen RICHTIG?",
  opts: [
    "Beide Mengen sind Fehlernachtests",
    "Das erneute Ausführen des aufdeckenden Testfalls ist ein Regressionstest, das Ausführen der Rechnungstests ist ein Fehlernachtest",
    "Das erneute Ausführen des aufdeckenden Testfalls ist ein Fehlernachtest, das Ausführen der Rechnungstests ist ein Regressionstest",
    "Beide Mengen sind Wartungstests, weil sie nach einer Änderung ausgeführt werden"
  ],
  just: "Beim Fehlernachtest wird der zuvor fehlgeschlagene Test erneut ausgeführt, um zu prüfen, ob der Fehlerzustand behoben ist. Der Regressionstest führt weitere Tests aus, um unbeabsichtigte Seiteneffekte der Änderung in nicht geänderten Teilen der Software aufzudecken, etwa im Rechnungsmodul, das die gemeinsame Bibliothek nutzt."
},
/* 23 */ {
  stem: "Die Reviews in Ihrer Organisation haben die folgenden Merkmale: Hauptzweck ist das Aufdecken möglicher Fehlerzustände und die Bewertung der Qualität; jeder Teilnehmer bereitet sich individuell vor; die Sitzung wird von einem geschulten Moderator geleitet und nicht vom Autor; es werden Metriken erhoben und zur Verbesserung des Entwicklungsprozesses genutzt; es findet eine formale Nachverfolgung statt.",
  stem2: "Welcher Reviewtyp wird hier am wahrscheinlichsten eingesetzt?",
  opts: ["Informelles Review", "Inspektion", "Walkthrough", "Technisches Review"],
  just: "Die Kombination aus einem geschulten Moderator, der nicht der Autor ist, definierten Rollen, individueller Vorbereitung, Metrikerhebung zur Prozessverbesserung und formaler Nachverfolgung kennzeichnet die Inspektion, den formalsten Reviewtyp. Ein Walkthrough wird vom Autor geleitet, und ein technisches Review wird zwar moderiert, konzentriert sich aber auf technische Entscheidungen und verlangt diesen Formalitätsgrad nicht."
},
/* 24 */ {
  stem: "Ihr Team führt seit neun Monaten jede Nacht dieselben 250 automatisierten Regressionstests aus. Alle laufen weiterhin erfolgreich durch, dennoch melden Anwender laufend Störungen im Produktivbetrieb, und zwar genau in den Bereichen, die diese Tests abdecken.",
  stem2: "Welcher Grundsatz des Testens erklärt diese Situation am BESTEN?",
  opts: [
    "Tests nutzen sich ab",
    "Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit",
    "Fehlerzustände treten gehäuft auf",
    "Testen ist kontextabhängig"
  ],
  just: "Werden dieselben Tests unverändert wiederholt, decken sie keine neuen Fehlerzustände mehr auf, weil die von ihnen erreichbaren Fehlerzustände bereits gefunden wurden. Abhilfe schafft, die Tests regelmäßig zu überprüfen, anzupassen und zu ergänzen. Die anderen Grundsätze sind zutreffend, erklären aber nicht, warum eine unveränderte Testmenge ihre Wirksamkeit verliert."
},
/* 25 */ {
  stem: "Welches der folgenden ist KEIN Nutzen von White-Box-Testverfahren?",
  opts: [
    "White-Box-Überdeckungsmaße zeigen auf, welche zusätzlichen Tests die Codeüberdeckung erhöhen würden",
    "White-Box-Test kann Codeteile aufdecken, die von spezifikationsbasierten Tests nicht durchlaufen werden",
    "White-Box-Test liefert objektive Nachweise darüber, wie gründlich die Codestruktur getestet wurde",
    "White-Box-Test bestätigt, dass alle spezifizierten Anforderungen korrekt umgesetzt wurden"
  ],
  just: "White-Box-Verfahren messen und durchlaufen die Struktur des vorhandenen Codes; sie können nicht zeigen, dass eine Anforderung umgesetzt wurde, und schon gar nicht, dass eine Anforderung vergessen wurde, denn fehlender Code lässt sich nicht überdecken. Die übrigen drei Antworten sind tatsächliche Vorteile."
},
/* 26 */ {
  stem: "Bei der Produktrisikoanalyse wurde folgendes Risiko identifiziert: <em>Bestellungen können verloren gehen, wenn mehr als 2000 Benutzer gleichzeitig verbunden sind</em>. Die Eintrittswahrscheinlichkeit wurde als hoch und die Auswirkung als hoch bewertet. Das Team hat entschieden, dass ein unabhängiges Testteam während des Systemtests einen Test der Performanzeffizienz durchführt und dass ein Rückfallverfahren zur manuellen Nacherfassung verlorener Bestellungen dokumentiert und mit dem Support geübt wird.",
  stem2: "Welche Maßnahmen zur Risikosteuerung wurden gewählt?",
  opts: [
    "Nur Risikominderung",
    "Risikoakzeptanz und Risikoübertragung",
    "Risikominderung und Notfallplan",
    "Risikoübertragung und Notfallplan"
  ],
  just: "Der Test der Performanzeffizienz verringert die Wahrscheinlichkeit, dass das Risiko eintritt, das ist Risikominderung. Das dokumentierte und geübte manuelle Rückfallverfahren verringert die Auswirkung, falls es dennoch eintritt, das ist ein Notfallplan. Nichts davon überträgt das Risiko auf Dritte oder akzeptiert es lediglich."
},
/* 27 */ {
  stem: "Welches der folgenden ist ein RISIKO der Testautomatisierung?",
  opts: [
    "Der Aufwand für die Pflege der automatisierten Tests wird möglicherweise unterschätzt",
    "Die automatisierten Tests können weit häufiger ausgeführt werden als manuelle Tests",
    "Automatisierte Tests liefern objektive und wiederholbare Ergebnisse",
    "Die Automatisierung verkürzt die Zeit für die Durchführung der Regressionstestsuite"
  ],
  just: "Testmittel müssen gepflegt werden, sobald sich das Testobjekt ändert, und diesen Aufwand zu unterschätzen ist eines der klassischen Risiken der Automatisierung. Die übrigen Antworten beschreiben Vorteile der Automatisierung, keine Risiken."
},
/* 28 */ {
  stem: "Welche der folgenden Situationen löst am wahrscheinlichsten einen Wartungstest aus?",
  opts: [
    "Eine neue User Story wird dem Backlog der laufenden Iteration eines noch in Entwicklung befindlichen Systems hinzugefügt",
    "Für eine neu geschriebene Komponente wird vor der Integration eine Komponententestsuite erstellt",
    "Der Testmanager beschließt, den Grad der Testunabhängigkeit im Projekt zu erhöhen",
    "Das Betriebssystem der Server, auf denen ein seit zwei Jahren produktives System läuft, wird aktualisiert"
  ],
  just: "Wartungstest wird an einem im Betrieb befindlichen System durchgeführt, wenn dieses geändert, migriert oder außer Betrieb genommen wird; eine Aktualisierung der Umgebung wie eine neue Betriebssystemversion ist ein typischer Auslöser. Die übrigen Antworten beschreiben Aktivitäten an einem noch in Entwicklung befindlichen System oder eine organisatorische Entscheidung."
},
/* 29 */ {
  stem: "Was beschreibt exploratives Testen am BESTEN?",
  opts: [
    "Die Tests werden vorab aus einer Checkliste entworfen und anschließend genau wie spezifiziert durchgeführt",
    "Testentwurf, Testdurchführung und Lernen erfolgen parallel, üblicherweise in zeitlich begrenzten Sitzungen, die von einer Testcharta geleitet werden",
    "Die Tests werden von dem Entwickler, der die Komponente geschrieben hat, aus der Codestruktur abgeleitet",
    "Der Tester klickt zufällig durch die Anwendung und dokumentiert nichts"
  ],
  just: "Beim explorativen Testen entwirft, führt und bewertet der Tester die Tests gleichzeitig und lernt dabei das Testobjekt kennen, typischerweise in einer zeitlich begrenzten Sitzung, die von einer Testcharta gesteuert und in Sitzungsprotokollen festgehalten wird. Es ist weder unstrukturiert noch undokumentiert."
},
/* 30 */ {
  stem: "Welche ZWEI der folgenden Aufgaben gehören zur Testrealisierung?",
  opts: [
    "Testsuiten aus den vorhandenen Testabläufen erstellen",
    "Die zu testenden Funktionen bestimmen und die Testbedingungen festlegen",
    "Testfälle und Testdaten aus den Testbedingungen ableiten",
    "Die Testumgebung aufbauen und prüfen, ob sie korrekt eingerichtet ist",
    "Ist-Ergebnisse mit Soll-Ergebnissen vergleichen und Anomalien berichten"
  ],
  just: "Die Testrealisierung bereitet alles vor, was für die Durchführung nötig ist: Testsuiten erstellen, die Testmittel bereitstellen und die Testumgebung aufbauen und überprüfen. Das Bestimmen der Funktionen und Testbedingungen gehört zur Testanalyse, das Ableiten von Testfällen und Testdaten zum Testentwurf und der Ergebnisvergleich zur Testdurchführung."
},
/* 31 */ {
  stem: "Welche Information gehört am ehesten in einen Testfortschrittsbericht, der sich während der Testdurchführung an die Projektbeteiligten richtet?",
  opts: [
    "Die detaillierten Schritte jedes fehlgeschlagenen Testablaufs",
    "Die vollständige Liste der im Konfigurationsmanagement verwalteten Testskripte",
    "Der Stand des Testens gegenüber den vereinbarten Endekriterien, einschließlich Testfortschritt, Fehlerstatus und Status der Produktrisiken",
    "Die technische Grundursache jedes bisher gefundenen Fehlerzustands"
  ],
  just: "Ein Testfortschrittsbericht sagt den Beteiligten, wo das Testen gegenüber Plan und Endekriterien steht und welche Risiken und Fehlerzustände die Freigabeentscheidung beeinflussen. Testablaufschritte, Skriptlisten und Ursachenanalysen sind Arbeitsdetails des Teams und keine Berichterstattung an Projektbeteiligte."
},
/* 32 */ {
  stem: "Welche Aufgabe gehört zur Rolle des Reviewleiters (Moderators)?",
  opts: [
    "Die Reviewaktivitäten terminieren und während der Sitzung zwischen den Teilnehmern vermitteln",
    "Das zu prüfende Arbeitsergebnis erstellen und anbieten, die gefundenen Fehlerzustände zu beheben",
    "Die gefundenen Anomalien und die in der Reviewsitzung getroffenen Entscheidungen protokollieren",
    "Entscheiden, dass Reviews durchgeführt werden, und Budget und Zeit dafür bereitstellen"
  ],
  just: "Der Reviewleiter plant und terminiert die Reviewaktivitäten und vermittelt zwischen den Teilnehmern, damit die Reviewziele erreicht werden. Das Erstellen des Arbeitsergebnisses ist Aufgabe des Autors, das Protokollieren der Anomalien und Entscheidungen Aufgabe des Protokollanten, und die Entscheidung, Reviews durchzuführen und zu finanzieren, Aufgabe des Managements."
},
/* 33 */ {
  stem: "Welches der folgenden ist das BESTE Beispiel für die intuitive Testfallermittlung (Error Guessing)?",
  opts: [
    "Ein Tester leitet die Testfälle systematisch aus einer Entscheidungstabelle ab",
    "Ein Tester, der weiß, dass die Division durch null in ähnlichen Systemen wiederholt zu Fehlerzuständen geführt hat, prüft die Berechnung mit dem Divisor 0",
    "Ein Tester bewertet die Benutzungsoberfläche anhand einer Standardcheckliste für Gebrauchstauglichkeit",
    "Ein Tester führt eine vorhandene Testmenge auf einer neuen Softwareversion erneut aus, um Regressionen zu erkennen"
  ],
  just: "Die intuitive Testfallermittlung nimmt vorweg, welche Fehlhandlungen, Fehlerzustände und Fehlerwirkungen wahrscheinlich auftreten, gestützt auf das Wissen des Testers über das bisherige Verhalten der Anwendung, über typische Fehlhandlungen von Entwicklern und über Fehlerwirkungen in ähnlichen Systemen. Die übrigen Antworten beschreiben ein Black-Box-Verfahren, checklistenbasiertes Testen und Regressionstest."
},
/* 34 */ {
  stem: "Welches der folgenden ist das BESTE Beispiel für den Nutzen der Nachverfolgbarkeit zwischen Testbasis und Testarbeitsergebnissen?",
  opts: [
    "Sie erlaubt dem Testmanager festzustellen, welche Tester die meisten Testfälle geschrieben haben",
    "Sie garantiert, dass 100% des Codes von den durchgeführten Tests durchlaufen wurden",
    "Sie verringert die Anzahl der Testfälle, die für das vereinbarte Überdeckungskriterium nötig sind",
    "Sie ermöglicht festzustellen, welche Anforderungen betroffen sind, wenn ein Testfall fehlschlägt, und den Testfortschritt fachlich verständlich zu berichten"
  ],
  just: "Nachverfolgbarkeit unterstützt die Auswirkungsanalyse, die Bewertung der Überdeckung gegenüber der Testbasis und die Berichterstattung in einer Sprache, die die Projektbeteiligten verstehen. Sie sagt nichts darüber aus, wer welchen Testfall geschrieben hat, sie misst keine Codeüberdeckung, und sie verringert die nötige Anzahl der Testfälle nicht."
},
/* 35 */ {
  stem: "Was wird durch das Konfigurationsmanagement im Testen unterstützt?",
  opts: [
    "Es garantiert, dass sich die Testumgebung genau wie die Produktionsumgebung verhält",
    "Es legt die Eingangs- und Endekriterien für jede Teststufe fest",
    "Es stellt sicher, dass das Testobjekt und alle Testmittel eindeutig identifiziert, versioniert und über den gesamten Testprozess nachverfolgbar sind",
    "Es bestimmt, welche Testfälle zuerst automatisiert werden sollten"
  ],
  just: "Konfigurationsmanagement stellt die Integrität von Testobjekt und Testmitteln her und erhält sie, indem es diese identifiziert, versioniert und kontrolliert, sodass jedes Testergebnis auf eine bekannte Version zurückgeführt werden kann. Die übrigen Antworten gehören zum Umgebungsmanagement, zur Testplanung und zur Automatisierungsstrategie."
},
/* 36 */ {
  stem: "Was ist der BESTE Grund, Abnahmekriterien für eine User Story festzulegen?",
  opts: [
    "Sie grenzen den Umfang der User Story ab und liefern eine objektive Grundlage für die Entscheidung, ob sie fertig ist",
    "Sie erlauben dem Team, die von den Abnahmetests erreichte Codeüberdeckung zu messen",
    "Sie machen ein Testkonzept in agilen Projekten überflüssig",
    "Sie erlauben dem Product Owner, den Aufwand für die Umsetzung der User Story zu schätzen"
  ],
  just: "Abnahmekriterien beschreiben die Bedingungen, die die Umsetzung erfüllen muss. Sie grenzen damit den Umfang der Story ab, unterstützen die Abstimmung zwischen Team und Projektbeteiligten und bilden die Grundlage für Abnahmetests und für die Definition of Done."
},
/* 37 */ {
  stem: "Welches der folgenden ist ein NACHTEIL eines hohen Grades an Testunabhängigkeit?",
  opts: [
    "Tester lassen sich weniger von den Annahmen der Autoren der Arbeitsergebnisse beeinflussen",
    "Tester können sich vom Entwicklungsteam isolieren, was das Feedback verzögert und Kommunikationsprobleme verursacht",
    "Tester finden Fehlerzustände, für die Entwickler durch ihre Vertrautheit mit dem Code blind sind",
    "Tester können Annahmen überprüfen, die bei Spezifikation und Umsetzung des Systems getroffen wurden"
  ],
  just: "Unabhängigkeit bringt wertvolle Objektivität, doch zu weit getrieben isoliert sie die Tester, verlangsamt das Feedback, schwächt die Zusammenarbeit und macht das Testen bisweilen zum Engpass. Die übrigen Antworten beschreiben Vorteile der Unabhängigkeit."
},
/* 38 */ {
  stem: "Betrachten Sie den folgenden Fehlerbericht:",
  extra: '<div class="figure"><table class="dt"><tr><td class="rowhead" style="text-align:left">DEF-0871</td><td class="rowhead" style="text-align:left">14.03.2026 &middot; Anna Weber &middot; Status: neu</td></tr><tr><td class="rowhead" style="text-align:left">Schweregrad: hoch</td><td class="rowhead" style="text-align:left">Priorität: hoch</td></tr></table></div><p style="font-style:italic">Suche liefert keine Treffer. Wird die Artikelnummer AB-1200 in das Suchfeld des Produktkatalogs eingegeben, bleibt die Trefferliste leer. Erwartet wird, dass der Artikel AB-1200 in der Trefferliste erscheint. Das Verhalten wurde in allen drei Versuchen reproduziert. Bezug zu Anforderung REQ-0345 und Testfall TF-2210.</p>',
  stem2: "Welche entscheidende Information FEHLT in diesem Fehlerbericht?",
  opts: [
    "Die eindeutige Kennung und das Datum des Berichts",
    "Das erwartete und das tatsächliche Ergebnis",
    "Das Ausmaß der Auswirkung auf die Projektbeteiligten und die Dringlichkeit der Behebung",
    "Die Identifikation des Testobjekts einschließlich seiner Version sowie die Testumgebung"
  ],
  just: "Der Bericht nennt seine Kennung, sein Datum, das erwartete und das tatsächliche Ergebnis, Schweregrad und Priorität sowie den Bezug zu Testbasis und Testfall. Was ein Entwickler daraus nicht erkennen kann, ist die getestete Softwareversion und die verwendete Umgebung, sodass der Fehlerzustand auf seiner Seite möglicherweise nicht reproduzierbar ist."
},
/* 39 */ {
  stem: "Betrachten Sie die folgende User Story:",
  extra: '<p style="font-style:italic;padding-left:1.2rem">Als registrierter Kunde<br>möchte ich meine Zahlungskarte in meinem Profil speichern,<br>damit ich sie nicht bei jeder Bestellung erneut eingeben muss</p><p>und ihre Abnahmekriterien:</p><ul><li>Der Kunde kann dem Profil eine Zahlungskarte hinzufügen</li><li>Von einer gespeicherten Karte werden nur die letzten vier Ziffern angezeigt</li><li>Ein Kunde kann höchstens drei Zahlungskarten speichern</li><li>Der Kunde kann eine gespeicherte Karte löschen</li><li>Zum Speichern einer Karte muss der Kunde angemeldet sein</li></ul>',
  stem2: "Welches der folgenden ist das BESTE Beispiel für einen Test nach Acceptance Test-Driven Development (ATDD) für diese User Story?",
  opts: [
    "Prüfen, dass die Datenbanktabelle mit den Karten auf die Kundennummer indiziert ist",
    "Prüfen, dass der Kunde die im Profil hinterlegte Lieferadresse ändern kann",
    "Prüfen, dass ein angemeldeter Kunde, der bereits drei Karten gespeichert hat, keine vierte speichern kann",
    "Prüfen, dass beim Öffnen der Profilseite die vollständige Kartennummer angezeigt wird"
  ],
  just: "Ein ATDD-Test wird unmittelbar aus einem Abnahmekriterium der Story abgeleitet. Zu prüfen, dass ein Kunde mit bereits drei gespeicherten Karten keine vierte speichern kann, deckt das Kriterium der Begrenzung auf drei Karten ab. Die Indizierung einer Datenbanktabelle ist ein Entwurfsdetail außerhalb der Story, das Ändern der Lieferadresse gehört zu einer anderen Story, und die Anzeige der vollständigen Kartennummer widerspricht dem Kriterium, dass nur die letzten vier Ziffern sichtbar sind."
}
];
