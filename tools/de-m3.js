/* German translation of Set M3, aligned by index with the English bank.
   Terminology follows the German Testing Board (GTB) glossary. */
module.exports = [
/* 0 */ {
  stem: "Welches Testziel wird verfolgt, wenn Anforderungen und User Storys bewertet werden, bevor überhaupt Code geschrieben wurde?",
  opts: [
    "Zu prüfen, ob die Software korrekt in die Produktionsumgebung ausgeliefert wurde",
    "Den Aufwand für spätere Fehlernachtests im Projekt zu verringern",
    "Fehlerzustände zu vermeiden, indem Probleme in den Arbeitsergebnissen gefunden werden, solange ihre Korrektur noch günstig ist",
    "Nachzuweisen, dass das gelieferte System die vertraglichen Abnahmekriterien erfüllt"
  ],
  just: "Ein Arbeitsergebnis zu bewerten, bevor es umgesetzt ist, findet Probleme, solange noch nichts darauf aufgebaut wurde, und verhindert so, dass Fehlerzustände überhaupt in den Code gelangen. Auslieferungsprüfungen, Fehlernachtests und die vertragliche Abnahme erfolgen sehr viel später und an einem lauffähigen System."
},
/* 1 */ {
  stem: "Für welche der folgenden Aufgaben ist ein White-Box-Testverfahren die GEEIGNETSTE Wahl?",
  opts: [
    "Zu messen, welchen Anteil eines neu geschriebenen Algorithmus die vorhandenen Komponententests tatsächlich durchlaufen",
    "Testfälle aus den Abnahmekriterien einer User Story abzuleiten",
    "Zu prüfen, ob das System die in der Spezifikation beschriebenen ungültigen Eingabekombinationen zurückweist",
    "Eine undokumentierte Altsystemmaske zu erkunden, um ihr Verhalten kennenzulernen"
  ],
  just: "White-Box-Verfahren arbeiten mit der Struktur des Codes, und genau deshalb können sie angeben, welcher Anteil dieser Struktur durchlaufen wurde. Abnahmekriterien und spezifizierte Eingabekombinationen verlangen Black-Box-Verfahren, und das Erkunden einer undokumentierten Maske verlangt ein erfahrungsbasiertes Vorgehen."
},
/* 2 */ {
  stem: "Ihre Organisation ist von einem sequenziellen Entwicklungsmodell auf zweiwöchige Iterationen umgestiegen.",
  stem2: "Welche Veränderung beim Testen ist zu erwarten?",
  opts: [
    "Die Teststufen lassen sich nicht mehr voneinander unterscheiden",
    "Das Testen wird zu einer fortlaufenden Aktivität innerhalb jeder Iteration statt zu einer Phase am Projektende",
    "Der statische Test wird durch automatisierte Regressionstests ersetzt",
    "Der Abnahmetest wird nur einmal durchgeführt, nach der letzten Iteration"
  ],
  just: "In einem iterativen Lebenszyklus entsteht in jeder Iteration etwas potenziell Auslieferbares, das Testen muss also innerhalb der Iteration stattfinden und nicht erst, wenn die gesamte Entwicklung abgeschlossen ist. Teststufen bestehen weiterhin, der statische Test bleibt wertvoll, und ein Abnahmetest kann für jedes Inkrement erfolgen."
},
/* 3 */ {
  stem: "Was ist ein guter Grund, das Testkonzept während des Projekts zu aktualisieren?",
  opts: [
    "Ein Testfall ist fehlgeschlagen und ein Fehlerzustand wurde berichtet",
    "Ein Tester hat die ihm zugewiesenen Testabläufe vollständig durchgeführt",
    "Das Team hat sich auf eine neue Namenskonvention für automatisierte Testskripte geeinigt",
    "Die Produktrisikoanalyse hat sich geändert, nachdem neue Erkenntnisse über das System vorlagen"
  ],
  just: "Ein Testkonzept wird nicht einmal geschrieben und dann eingefroren: Ändern sich die Risiken, müssen Umfang, Prioritäten und Aufwand im Konzept mitgeführt werden. Einzelne Fehlschläge, abgeschlossene Arbeit und Namenskonventionen werden innerhalb des bestehenden Konzepts abgewickelt."
},
/* 4 */ {
  stem: "Warum ist es in der Regel günstiger, einen Fehlerzustand im Review der Anforderungen zu finden als denselben Fehlerzustand im Systemtest?",
  opts: [
    "Reviews werden immer von günstigerem Personal durchgeführt als der Systemtest",
    "Fehlerzustände in Anforderungen haben immer einen geringeren Schweregrad als Fehlerzustände im Code",
    "Der Fehlerzustand hat sich noch nicht in Entwurf, Code und Tests fortgepflanzt, es muss also weit weniger nachgearbeitet werden",
    "Der statische Test benötigt keine Testumgebung, es fallen also keine Lizenzkosten an"
  ],
  just: "Ein Fehlerzustand in den Anforderungen, der bis in den Entwurf und den Code überlebt, ist dort bereits Grundlage weiterer Arbeit, getesteter Funktionen und geschriebener Dokumentation; ihn zu korrigieren bedeutet, all das nachzuarbeiten. Im Review geändert, ändert sich nur die Anforderung selbst. Schweregrad und Personalkosten spielen dabei keine Rolle."
},
/* 5 */ {
  stem: "Ein Formular zur Versicherungsberechnung hat zwei Eingaben:",
  extra: '<ul><li><strong>Alter des Fahrers</strong>: eine ganze Zahl von 18 bis 99. Werte außerhalb dieses Bereichs werden zurückgewiesen.</li><li><strong>Fahrzeugklasse</strong>: A, B oder C.</li></ul><p>Sie möchten 100% Äquivalenzklassenüberdeckung beider Eingaben erreichen, einschließlich der ungültigen Klassen des Altersfelds. Jeder Testfall verwendet höchstens einen ungültigen Wert.</p>',
  stem2: "Wie viele Testfälle sind MINDESTENS nötig?",
  opts: ["3", "5", "4", "6"],
  just: "Das Altersfeld hat eine gültige und zwei ungültige Äquivalenzklassen (unter 18 und über 99); die Fahrzeugklasse hat drei gültige Klassen. Drei Testfälle mit gültigem Alter decken die drei Fahrzeugklassen ab, und für die beiden ungültigen Altersklassen sind zwei weitere Testfälle nötig, da je Testfall nur ein ungültiger Wert vorkommen darf. Das ergibt fünf."
},
/* 6 */ {
  stem: "Welche Aussage über Testen und Debugging ist RICHTIG?",
  opts: [
    "Debugging kann zeigen, dass Fehlerwirkungen auftreten, während das Testen die verursachenden Fehlerzustände lokalisiert und beseitigt",
    "Testen und Debugging sind zwei Bezeichnungen für dieselbe Tätigkeit, ausgeführt von unterschiedlichen Rollen",
    "Debugging ist eine Form des statischen Tests, weil der Fehlerzustand durch Lesen des Codes gefunden wird",
    "Dynamischer Test kann zeigen, dass Fehlerwirkungen auftreten, während das Debugging die verursachenden Fehlerzustände lokalisiert und beseitigt"
  ],
  just: "Das Testen macht Fehlerwirkungen sichtbar; das Debugging ist die Entwicklungstätigkeit, die von einer Fehlerwirkung zum Fehlerzustand zurückarbeitet und ihn behebt. Beides ist voneinander getrennt, und Debugging ist kein statischer Test, auch wenn dabei Code gelesen wird."
},
/* 7 */ {
  stem: "Welche ZWEI der folgenden sind Eingangskriterien für eine Teststufe?",
  opts: [
    "Die vereinbarte Testüberdeckung ist erreicht",
    "Die Testumgebung ist eingerichtet und überprüft",
    "Alle geplanten Testfälle sind durchgeführt",
    "Es sind keine Fehlerzustände mit hohem Schweregrad mehr offen",
    "Die benötigten Testdaten sind vorhanden und eingespielt"
  ],
  just: "Eingangskriterien beschreiben die Voraussetzungen, um sinnvoll mit dem Testen beginnen zu können: eine funktionierende Umgebung und die Daten, die die Tests benötigen. Erreichte Überdeckung, abgeschlossene Durchführung und eine akzeptable Anzahl offener Fehlerzustände beschreiben den Zustand, in dem das Testen enden darf, und sind damit Endekriterien."
},
/* 8 */ {
  stem: "Welche Werkzeugkategorie unterstützt den statischen Test unmittelbar?",
  opts: [
    "Werkzeuge für die statische Analyse, die Code und andere Arbeitsergebnisse untersuchen, ohne sie auszuführen",
    "Testdurchführungswerkzeuge, die automatisierte Testskripte gegen die Software ausführen",
    "Werkzeuge zur Testdatenerzeugung, die Eingabedatensätze erzeugen und anonymisieren",
    "Werkzeuge für den Performanztest, die eine definierte Last auf das System geben"
  ],
  just: "Werkzeuge für die statische Analyse untersuchen das Arbeitsergebnis selbst und melden Probleme wie nicht erreichbaren Code, Verstöße gegen Programmierrichtlinien und Abhängigkeitsprobleme, ohne es jemals auszuführen. Die anderen drei Kategorien setzen voraus, dass die Software ausgeführt wird."
},
/* 9 */ {
  stem: "Ein Buchungsfeld akzeptiert eine ganzzahlige Anzahl von Nächten von 1 bis 28. Werte außerhalb dieses Bereichs werden zurückgewiesen.",
  stem2: "Welche Testwerte sollten verwendet werden, wenn Sie die Grenzwertanalyse mit zwei Werten auf diese gültige Äquivalenzklasse anwenden?",
  opts: ["1 und 28", "1, 2, 27 und 28", "0, 1, 28 und 29", "0, 1, 2, 27, 28 und 29"],
  just: "Bei der Grenzwertanalyse mit zwei Werten liefert jede Grenze zwei Überdeckungselemente: den Grenzwert selbst und seinen nächsten Nachbarwert in der angrenzenden Äquivalenzklasse. Die untere Grenze 1 ergibt 1 und 0, die obere Grenze 28 ergibt 28 und 29."
},
/* 10 */ {
  stem: "Was beschreibt testgetriebene Entwicklung (Test-Driven Development, TDD) am BESTEN?",
  opts: [
    "Ein unabhängiges Testteam schreibt die Tests, bevor die Entwickler mit dem Codieren beginnen",
    "Die Abnahmekriterien werden in automatisierte Tests überführt, sobald die Funktion fertiggestellt ist",
    "Die Tests werden aus dem Code abgeleitet, sobald dieser fehlerfrei übersetzt",
    "Zuerst wird ein Test geschrieben, dann gerade so viel Code, dass er erfolgreich durchläuft, anschließend wird der Code überarbeitet"
  ],
  just: "TDD arbeitet in kurzen Zyklen: einen fehlschlagenden Test schreiben, den minimalen Code schreiben, der ihn erfolgreich macht, und dann den Entwurf verbessern, während die Tests weiterhin durchlaufen. Die Tests schreibt der Entwickler selbst, vor dem Code, und sie prägen dessen Entwurf."
},
/* 11 */ {
  stem: "Das Verteilen des Arbeitsergebnisses an die Teilnehmer und das Erläutern der Reviewziele gehört zu welcher Reviewaktivität?",
  opts: ["Planung", "Initiieren des Reviews", "Individuelles Review", "Kommunikation und Analyse"],
  just: "Das Initiieren des Reviews stellt sicher, dass alle Beteiligten haben, was sie brauchen, und wissen, was von ihnen erwartet wird, einschließlich der Verteilung des Arbeitsergebnisses und der unterstützenden Unterlagen. Die Planung geht voraus und legt Umfang und Kriterien fest; die eigentliche Prüfung erfolgt im individuellen Review."
},
/* 12 */ {
  stem: "In den letzten drei vergleichbaren Projekten entfielen im Mittel 25% des gesamten Projektaufwands auf das Testen. Das neue Projekt ist auf insgesamt 400 Personentage geschätzt.",
  stem2: "Wie hoch ist der geschätzte Testaufwand bei metrikbasierter Schätzung?",
  opts: ["100 Personentage", "80 Personentage", "125 Personentage", "300 Personentage"],
  just: "Die metrikbasierte Schätzung überträgt Daten aus vergleichbaren früheren Projekten auf das neue: 25% von 400 Personentagen sind 100 Personentage. Der Wert 300 ist der übrige Projektaufwand, nicht der Testaufwand."
},
/* 13 */ {
  stem: "Was erklärt am BESTEN, warum Testen auch in einem Team aus sehr erfahrenen Entwicklern notwendig bleibt?",
  opts: [
    "Erfahrene Entwickler schreiben mehr Code, damit ist eine größere Zahl von Fehlerzuständen statistisch sicher",
    "Verträge über kommerzielle Software verlangen stets ein unabhängiges Testteam",
    "Testen ist die einzige objektive Möglichkeit, die Produktivität eines Entwicklungsteams zu messen",
    "Menschen machen unter Zeitdruck und in komplexen Systemen Fehlhandlungen, und das Testen deckt die daraus entstehenden Fehlerzustände auf, bevor Anwender ihnen begegnen"
  ],
  just: "Erfahrung verringert Fehlhandlungen, beseitigt sie aber nicht, besonders nicht unter Termindruck, in unbekannten Fachdomänen oder in Systemen, die zu groß sind, um sie zu überblicken. Testen liefert dem Team Belege darüber, was die Software tatsächlich tut. Es ist keine Produktivitätsmessung, und kein Vertrag macht es notwendig."
},
/* 14 */ {
  stem: "Ein Online-System zur Prüfungsanmeldung wird durch die folgende Entscheidungstabelle beschrieben.",
  extra: '<div class="figure"><table class="dt"><tr><th class="rowhead">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class="rowhead">Registrierter Kandidat</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Gebühr bezahlt</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Platz verfügbar</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class="sect"><td colspan="9">Aktionen</td></tr><tr><td class="rowhead">Anmeldung bestätigt</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">Auf die Warteliste gesetzt</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">Anmeldung abgelehnt</td><td></td><td></td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr></table></div><p>W steht für wahr, F für falsch.</p>',
  stem2: "Welcher Testfall deckt die Regel R2 ab?",
  opts: [
    "Ein registrierter Kandidat, der die Gebühr nicht bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist",
    "Ein nicht registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist",
    "Ein registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem kein Platz verfügbar ist",
    "Ein registrierter Kandidat, der die Gebühr bezahlt hat, zu einem Zeitpunkt, an dem ein Platz verfügbar ist"
  ],
  just: "R2 ist die Spalte mit den Bedingungswerten wahr, wahr, falsch: ein registrierter Kandidat, der bezahlt hat, für den aber kein Platz frei ist; die zugehörige Aktion ist, ihn auf die Warteliste zu setzen. Die übrigen Antworten beschreiben R3, R5 und R1."
},
/* 15 */ {
  stem: "Für vier Testfälle wurde das Risiko bewertet. Eintrittswahrscheinlichkeit und Auswirkung werden jeweils auf einer Skala von 1 bis 5 bewertet, und die Risikohöhe ergibt sich als Produkt beider Werte.",
  extra: '<div class="figure"><table class="dt"><tr><th>Testfall</th><th>Wahrscheinlichkeit</th><th>Auswirkung</th></tr><tr><td class="rowhead">TF 1</td><td>5</td><td>2</td></tr><tr><td class="rowhead">TF 2</td><td>3</td><td>4</td></tr><tr><td class="rowhead">TF 3</td><td>2</td><td>5</td></tr><tr><td class="rowhead">TF 4</td><td>4</td><td>4</td></tr></table></div>',
  stem2: "Wenn die Testfälle in absteigender Reihenfolge der Risikohöhe durchgeführt werden, welcher wird als ZWEITER durchgeführt?",
  opts: ["TF 2", "TF 4", "TF 1", "TF 3"],
  just: "Die Risikohöhen betragen TF 1 = 10, TF 2 = 12, TF 3 = 10 und TF 4 = 16. TF 4 hat die höchste Risikohöhe und wird zuerst durchgeführt, danach folgt TF 2 mit 12, anschließend TF 1 und TF 3 mit jeweils 10."
},
/* 16 */ {
  stem: "Ein Lieferant liefert ein neues Lohnabrechnungssystem. Bevor das Unternehmen es abnimmt, führt eine Gruppe von Sachbearbeitern damit eine Monatsabrechnung mit echten Daten durch und bestätigt, dass die Ergebnisse ihren Erwartungen entsprechen.",
  stem2: "Welche Teststufe beschreibt das?",
  opts: ["Systemtest", "Abnahmetest", "Systemintegrationstest", "Komponentenintegrationstest"],
  just: "Das Testen wird von den Anwendern des Systems am vollständigen System durchgeführt, um Vertrauen und Einsatzbereitschaft festzustellen, und nicht vorrangig, um Fehlerzustände zu finden. Das ist ein Abnahmetest, in dieser Form ein betrieblicher oder Benutzerabnahmetest."
},
/* 17 */ {
  stem: "Betrachten Sie die folgenden Reviewrollen (1-4) und Verantwortlichkeiten (A-D):",
  match: {
    items: ["Autor", "Reviewleiter", "Protokollant", "Management"],
    cats: [
      "Entscheidet, dass Reviews durchgeführt werden, und stellt Zeit und Budget dafür bereit",
      "Leitet die Reviewsitzung und vermittelt zwischen den Teilnehmern",
      "Erstellt das zu prüfende Arbeitsergebnis und behebt die gefundenen Fehlerzustände",
      "Protokolliert die gefundenen Anomalien und die in der Sitzung getroffenen Entscheidungen"
    ]
  },
  stem2: "Wie ordnen sich die Rollen den Verantwortlichkeiten zu?",
  opts: ["1C, 2D, 3B, 4A", "1A, 2B, 3D, 4C", "1C, 2B, 3D, 4A", "1D, 2B, 3C, 4A"],
  just: "Der Autor verantwortet das Arbeitsergebnis und behebt die Fehlerzustände, der Reviewleiter leitet die Sitzung und vermittelt, der Protokollant hält Anomalien und Entscheidungen fest, und das Management entscheidet über die Durchführung von Reviews und stellt die Mittel bereit."
},
/* 18 */ {
  stem: "Der Lebenszyklus einer Bestellung wird durch das folgende Zustandsübergangsdiagramm beschrieben. Der Anfangszustand ist ENTWURF; VERSANDT und STORNIERT sind Endzustände.",
  stem2: "Welche der folgenden Ereignisfolgen ist NICHT möglich?",
  opts: [
    "einreichen, genehmigen, ablehnen",
    "einreichen, ablehnen, einreichen, genehmigen, stornieren",
    "einreichen, genehmigen, versenden",
    "stornieren"
  ],
  just: "Das Ereignis ablehnen wird nur im Zustand EINGEREICHT angenommen. Nach einreichen und genehmigen befindet sich die Bestellung im Zustand GENEHMIGT, wo nur versenden und stornieren möglich sind, ablehnen kann also nicht folgen. Alle übrigen Folgen verwenden Übergänge, die das Diagramm zulässt."
},
/* 19 */ {
  stem: "Welche der folgenden Tätigkeiten gehört zur Qualitätssicherung und nicht zur Qualitätslenkung?",
  opts: [
    "Die Regressionstestsuite vor einer Freigabe durchführen",
    "Die Definition of Done des Teams verbessern, damit künftige User Storys klarer spezifiziert werden",
    "Ein Anforderungsdokument prüfen, um Fehlerzustände darin zu finden",
    "Eine im Systemtest beobachtete Anomalie berichten"
  ],
  just: "Die Qualitätssicherung verbessert den Prozess, damit von vornherein weniger Fehlerzustände entstehen, und genau das ist eine Änderung der Definition of Done. Tests durchzuführen, ein Dokument zu prüfen und Anomalien zu berichten gehört zur Qualitätslenkung: Dabei wird das bereits erstellte Produkt untersucht."
},
/* 20 */ {
  stem: "In welchem agilen Testquadranten liegen automatisierte Komponententests und Komponentenintegrationstests?",
  opts: [
    "Quadrant Q2: fachlich ausgerichtet, unterstützt das Team",
    "Quadrant Q3: fachlich ausgerichtet, bewertet das Produkt kritisch",
    "Quadrant Q4: technologisch ausgerichtet, bewertet das Produkt kritisch",
    "Quadrant Q1: technologisch ausgerichtet, unterstützt das Team"
  ],
  just: "Komponenten- und Komponentenintegrationstests sind technisch formuliert und geben dem Team während der Entwicklung schnelles Feedback, was sie in Q1 einordnet. Q2 enthält fachlich ausgerichtete Tests, die das Team ebenfalls unterstützen, Q3 umfasst exploratives Testen und Gebrauchstauglichkeit, und Q4 umfasst Performanz- und Sicherheitstests."
},
/* 21 */ {
  stem: "Betrachten Sie den folgenden Pseudocode:",
  stem2: "Wie viele Testfälle sind MINDESTENS nötig, um 100% Anweisungsüberdeckung zu erreichen?",
  opts: ["2", "3", "1", "4"],
  just: "Ein einziger Testfall mit n = 5 betritt die Schleife, sodass die Anweisungen darin ausgeführt werden, und ergibt die Summe 15, sodass auch die Anweisung innerhalb der zweiten Entscheidung ausgeführt wird. Damit deckt dieser eine Testfall jede ausführbare Anweisung ab."
},
/* 22 */ {
  stem: "An einer gemeinsam genutzten Hilfsfunktion zur Datumsformatierung, die von sechs Modulen des Systems verwendet wird, wird eine kleine Änderung vorgenommen.",
  stem2: "Wonach sollte sich der Umfang des Regressionstests richten?",
  opts: [
    "Nach der Anzahl der Testfälle, die für die vorherige Freigabe durchgeführt wurden",
    "Nach einer Auswirkungsanalyse, welche Teile des Systems die Änderung betreffen kann",
    "Nach der Größe der geänderten Quelldatei",
    "Nach der Anzahl der in der aktuellen Iteration verfügbaren Tester"
  ],
  just: "Die Auswirkungsanalyse ermittelt, was die Änderung unmittelbar und mittelbar berühren kann, und danach wird der Regressionstest zugeschnitten. Eine gemeinsam genutzte Hilfsfunktion in sechs Modulen hat eine große Reichweite, obwohl die Änderung selbst klein ist, und genau das macht die Auswirkungsanalyse sichtbar."
},
/* 23 */ {
  stem: "Welcher Reviewtyp ist dadurch gekennzeichnet, dass der Autor die Teilnehmer durch das Arbeitsergebnis führt, ohne formalen Prozess und mit optionaler individueller Vorbereitung?",
  opts: ["Inspektion", "Technisches Review", "Informelles Review", "Walkthrough"],
  just: "In einem Walkthrough stellt der Autor das Arbeitsergebnis vor und führt die Teilnehmer hindurch, was sich zum Finden von Fehlerzuständen, zum Abwägen von Alternativen und zur Schulung der Zuhörer eignet. Die Inspektion ist der formalste Typ und wird von einem Moderator geleitet, das technische Review wird ebenfalls moderiert und behandelt technische Entscheidungen, und das informelle Review hat gar keinen definierten Prozess."
},
/* 24 */ {
  stem: "Ein Kollege schlägt vor, jede mögliche Wertekombination der zwölf Eingabefelder eines Formulars zu testen, damit das Team sicher sein kann, dass das Formular keine Fehlerzustände enthält.",
  stem2: "Welcher Grundsatz des Testens zeigt, dass dieser Vorschlag nicht umsetzbar ist?",
  opts: [
    "Vollständiges Testen ist nicht möglich",
    "Testen ist kontextabhängig",
    "Frühes Testen spart Zeit und Geld",
    "Fehlerzustände treten gehäuft auf"
  ],
  just: "Außer in trivialen Fällen ist die Anzahl möglicher Eingabekombinationen viel zu groß, um sie zu testen; das Team muss stattdessen anhand von Risiken und Prioritäten entscheiden, was getestet wird. Die anderen Grundsätze sind zutreffend, sagen aber nichts über die Machbarkeit aus, alles zu testen."
},
/* 25 */ {
  stem: "Betrachten Sie den folgenden Pseudocode:",
  stem2: "Wie viele Testfälle sind MINDESTENS nötig, um 100% Zweigüberdeckung zu erreichen?",
  opts: ["1", "3", "2", "4"],
  just: "Es gibt vier Zweige, zwei je Entscheidung. Ein Testfall mit age = 10 und isMember wahr durchläuft den Wahr-Zweig beider Entscheidungen, ein zweiter mit age = 30 und isMember falsch beide Falsch-Zweige. Zwei Testfälle decken damit alle vier ab."
},
/* 26 */ {
  stem: "Was beschreibt ein Risiko im Zusammenhang mit dem Testen am BESTEN?",
  opts: [
    "Ein Fehlerzustand, der gefunden, aber noch nicht behoben wurde",
    "Eine Fehlerwirkung, die nach der letzten Freigabe im Produktivbetrieb aufgetreten ist",
    "Ein Testfall, der in mehr als einem Testzyklus fehlgeschlagen ist",
    "Ein mögliches Ereignis mit negativen Folgen, gekennzeichnet durch seine Eintrittswahrscheinlichkeit und seine Auswirkung"
  ],
  just: "Ein Risiko ist etwas, das noch nicht eingetreten ist. Es wird dadurch beschrieben, wie wahrscheinlich es ist und wie schwerwiegend es wäre, und beide Merkmale zusammen ergeben seine Risikohöhe. Fehlerzustände, Fehlerwirkungen und fehlgeschlagene Tests sind bereits eingetreten."
},
/* 27 */ {
  stem: "Welche Erwartung an die Einführung von Testautomatisierung ist realistisch?",
  opts: [
    "Die gesamte Regressionstestsuite lässt sich innerhalb der ersten Iteration automatisieren",
    "Die Anfangsinvestition ist erheblich, und der Nutzen stellt sich erst ein, wenn die Tests viele Male gelaufen sind",
    "Manuelles Testen wird überflüssig, sobald die Automatisierung steht",
    "Die automatisierten Tests finden dieselben Fehlerzustände wie ein erfahrener explorativer Tester"
  ],
  just: "Automatisierung kostet Aufwand für Aufbau und Pflege und zahlt sich über die wiederholte Durchführung aus, der Nutzen stellt sich also mit der Zeit ein und nicht sofort. Alles auf einmal zu automatisieren ist unrealistisch, manuelles und exploratives Testen finden weiterhin Fehlerzustände, die die Automatisierung nicht findet, und automatisierte Tests prüfen nur, was ihnen vorgegeben wurde."
},
/* 28 */ {
  stem: "Welche der folgenden sind Auslöser für Wartungstests?",
  romans: [
    "Migration des Systems auf eine neue Cloud-Plattform",
    "Außerbetriebnahme des Systems einschließlich Archivierung seiner Daten",
    "Ein Hotfix für einen im Produktivbetrieb gefundenen Fehlerzustand",
    "Die erste Freigabe eines Systems, das noch nie im Produktivbetrieb war",
    "Ein Versionswechsel einer vom System genutzten Fremdbibliothek"
  ],
  opts: ["i, ii, iii und v", "nur i, iii und v", "nur i, ii und iii", "i, ii, iii, iv und v"],
  just: "Wartungstests werden durch Änderung, Migration oder Außerbetriebnahme eines bereits im Einsatz befindlichen Systems ausgelöst, also durch Hotfixes, Plattformmigrationen, Bibliotheksaktualisierungen und die Außerbetriebnahme. Die erste Freigabe eines Systems, das noch nie produktiv war, gehört zur Entwicklung und nicht zur Wartung."
},
/* 29 */ {
  stem: "Warum sind White-Box-Verfahren auf der Stufe des Komponententests besonders wertvoll?",
  opts: [
    "Sie machen spezifikationsbasierte Tests auf dieser Stufe überflüssig",
    "Sie sind die einzige Möglichkeit, Performanzprobleme innerhalb einer Komponente zu erkennen",
    "Sie garantieren, dass die Schnittstellen der Komponente korrekt integriert sind",
    "Der Code liegt vor und ist klein genug, sodass sich die Überdeckung messen und Lücken günstig schließen lassen"
  ],
  just: "Auf Komponentenebene hat der Entwickler den Code vor sich und die Einheit ist klein, sodass die Messung der Überdeckung praktikabel ist und jeder nicht durchlaufene Zweig sofort angegangen werden kann. White-Box-Verfahren ergänzen spezifikationsbasierte Tests, ersetzen sie aber nicht, und über Integration oder Performanz sagen sie nichts aus."
},
/* 30 */ {
  stem: "Was ist das HAUPTERGEBNIS der Aktivität Testanalyse?",
  opts: [
    "Die Testfälle und die zu ihrer Durchführung nötigen Testdaten",
    "Der Zeitplan für die Testdurchführung und die zusammengestellten Testsuiten",
    "Die Testbedingungen, abgeleitet aus einer Analyse der Testbasis",
    "Der Testabschlussbericht und die gewonnenen Erkenntnisse"
  ],
  just: "Die Testanalyse beantwortet die Frage, was getestet werden soll: Sie bewertet die Testbasis und leitet daraus die Testbedingungen ab. Diese Bedingungen in Testfälle zu überführen ist Testentwurf, das Zusammenstellen von Suiten und Zeitplänen ist Testrealisierung, und der Abschlussbericht gehört zum Testabschluss."
},
/* 31 */ {
  stem: "Wer sollte an der Produktrisikoanalyse teilnehmen?",
  opts: [
    "Verschiedene Projektbeteiligte, darunter Vertreter des Fachbereichs, Entwickler und Tester, weil das Erkennen von Risiken von unterschiedlichen Blickwinkeln profitiert",
    "Der Testmanager allein, damit die Bewertung objektiv bleibt",
    "Nur die Entwickler, weil sie am besten wissen, wo der Code schwach ist",
    "Nur der Kunde, weil er die geschäftlichen Folgen trägt"
  ],
  just: "Verschiedene Personen sehen verschiedene Risiken: Vertreter des Fachbereichs wissen, was der Organisation schaden würde, Entwickler wissen, wo der Entwurf brüchig ist, und Tester wissen, wo sich Fehlerzustände bisher gehäuft haben. Eine einzelne Perspektive übersieht zuverlässig ganze Risikokategorien."
},
/* 32 */ {
  stem: "Sie sollen eine User Story zweimal prüfen: einmal aus der Sicht eines Erstnutzers und einmal aus der Sicht eines Supportmitarbeiters, der später Fragen dazu beantworten muss.",
  stem2: "Welche Reviewtechnik wenden Sie an?",
  opts: ["Checklistenbasiertes Review", "Rollenbasiertes Review", "Ad-hoc-Review", "Szenariobasiertes Review"],
  just: "Beim rollenbasierten Review wird ein Arbeitsergebnis aus der Sicht einzelner Benutzerrollen bewertet, wodurch Probleme sichtbar werden, die für eine Gruppe wichtig und für eine andere unsichtbar sind. Das checklistenbasierte Review arbeitet mit einer Liste bekannter Probleme, das Ad-hoc-Review gibt keine Anleitung, und das szenariobasierte Review geht das Arbeitsergebnis anhand der erwarteten Nutzung durch."
},
/* 33 */ {
  stem: "In welcher Situation ist exploratives Testen am NÜTZLICHSTEN?",
  opts: [
    "In einem regulierten Projekt wird lückenlose Nachverfolgbarkeit von jedem Test zu einer nummerierten Anforderung verlangt",
    "Dieselben Tests müssen in jedem nächtlichen Build unverändert wiederholt werden",
    "Die Spezifikation ist dünn, die Zeit knapp, und das Team braucht frühes Feedback zu einer neuen Funktion",
    "Das Team muss nachweisen, dass 100% Zweigüberdeckung erreicht wurde"
  ],
  just: "Exploratives Testen ist dort am stärksten, wo die Dokumentation dünn ist und schnell Rückmeldung gebraucht wird, weil der Tester gleichzeitig lernt und testet. Lückenlose Nachverfolgbarkeit, identische Wiederholung und Überdeckungsnachweise verlangen skriptbasierte oder automatisierte Vorgehensweisen."
},
/* 34 */ {
  stem: "Was beschreibt den Whole-Team-Ansatz am BESTEN?",
  opts: [
    "Jede Person im Team mit dem nötigen Wissen kann jede Aufgabe übernehmen, und alle tragen gemeinsam Verantwortung für die Qualität",
    "Jedes Teammitglied nimmt an jeder Testdurchführungssitzung teil",
    "Der Testmanager verteilt die Testaufgaben auf das gesamte Team",
    "In jedem Entwicklungsteam arbeitet ein Tester, der jedoch an einen zentralen Testmanager berichtet"
  ],
  just: "Im Whole-Team-Ansatz kann jedes ausreichend qualifizierte Teammitglied jede Aufgabe übernehmen, Tester arbeiten Seite an Seite mit Entwicklern und Vertretern des Fachbereichs, und Qualität ist eine gemeinsame Verantwortung statt Aufgabe einer einzelnen Rolle. Es geht darum, wie Verantwortung getragen wird, nicht um Anwesenheit oder Berichtswege."
},
/* 35 */ {
  stem: "Ein Testfortschrittsbericht wird für das tägliche Stand-up des Teams erstellt und nicht für ein formales Steuerungsgremium.",
  stem2: "Wie sollte er sich unterscheiden?",
  opts: [
    "Er muss genau dieselben formalen Metriken enthalten wie der Bericht an das Gremium, damit die Berichterstattung einheitlich bleibt",
    "Er darf informell und mündlich sein und sich darauf konzentrieren, was sich seit gestern geändert hat und was den Fortschritt gerade blockiert",
    "Er sollte entfallen, weil Fortschrittsberichte nur in formale schriftliche Berichte gehören",
    "Er sollte alle bisher gefundenen Fehlerzustände samt vollständiger technischer Analyse auflisten"
  ],
  just: "Wie der Teststatus kommuniziert wird, hängt vom Adressaten und vom Zweck ab. Ein Stand-up braucht das kurze, aktuelle Bild und die Hindernisse; ein Steuerungsgremium braucht die formale, verdichtete Sicht. Es geht darum, den Bericht an seinen Adressaten anzupassen, und nicht darum, überall dasselbe Format zu verwenden."
},
/* 36 */ {
  stem: "Was ist eine bekannte Grenze des checklistenbasierten Testens?",
  opts: [
    "Es lässt sich ohne Zugriff auf den Quellcode des Testobjekts nicht anwenden",
    "Es setzt eine vollständige und lückenlos dokumentierte Spezifikation voraus",
    "Es lässt sich nicht mit anderen Testverfahren kombinieren",
    "Checklisten veralten mit der Zeit, und Tester schauen möglicherweise nicht mehr über die aufgeführten Punkte hinaus"
  ],
  just: "Eine Checkliste hält fest, was zum Zeitpunkt ihrer Erstellung prüfenswert war, während sich Produkt und Risiken weiterentwickeln; sie kann außerdem die Aufmerksamkeit des Testers auf die aufgeführten Punkte verengen. Checklisten benötigen weder Code noch eine vollständige Spezifikation und lassen sich gut mit anderen Verfahren kombinieren."
},
/* 37 */ {
  stem: "Eine sicherheitskritische Komponente wird von einem Team aus einer anderen Organisation getestet, das an ihrer Entwicklung nicht beteiligt war.",
  stem2: "Was ist der HAUPTVORTEIL dieser Regelung?",
  opts: [
    "Die Tester benötigen weniger Domänenwissen, um wirksame Tests zu entwerfen",
    "Fehlerzustände werden schneller behoben, weil die Tester direkt an die Entwickler berichten",
    "Die Tester bringen eine unabhängige Sicht mit und werden nicht von den Annahmen der Entwickler über die Komponente beeinflusst",
    "Das Entwicklungsteam trägt keine Verantwortung mehr für die Qualität der Komponente"
  ],
  just: "Der Wert eines hohen Grades an Unabhängigkeit liegt in der Objektivität: Ein externes Team teilt die blinden Flecken nicht, die dadurch entstehen, dass man die Komponente selbst geschrieben oder spezifiziert hat. Unabhängigkeit senkt den Bedarf an Domänenwissen nicht, beschleunigt Behebungen nicht und verlagert die Verantwortung für die Qualität niemals von den Entwicklern weg."
},
/* 38 */ {
  stem: "Welche ZWEI der folgenden Angaben gehören in einen gut geschriebenen Fehlerbericht?",
  opts: [
    "Die Schritte, mit denen sich die Anomalie reproduzieren lässt",
    "Der Name des Entwicklers, der den Fehlerzustand vermutlich verursacht hat",
    "Die Einschätzung des Testers, wie lange die Behebung dauern sollte",
    "Die Identifikation des Testobjekts und der Testumgebung",
    "Eine Liste aller anderen Fehlerzustände, die im selben Testlauf gefunden wurden"
  ],
  just: "Ein Fehlerbericht existiert, damit jemand anderes die Anomalie reproduzieren, bewerten und beheben kann; dafür braucht es die Reproduktionsschritte sowie das genaue Testobjekt und die Umgebung, in der sie auftrat. Schuldzuweisungen, fremde Aufwandsschätzungen und Listen unbeteiligter Fehlerzustände gehören woandershin oder nirgendwohin."
},
/* 39 */ {
  stem: "Welches der folgenden ist ein Abnahmekriterium im Format Gegeben/Wenn/Dann?",
  opts: [
    "Der Warenkorb muss schnell und einfach zu bedienen sein",
    "Gegeben ein angemeldeter Kunde mit leerem Warenkorb, wenn er einen Artikel hinzufügt, dann zeigt der Warenkorb einen Artikel",
    "Als Kunde möchte ich einen Warenkorb, damit ich mehrere Artikel in einer Bestellung kaufen kann",
    "Das Warenkorbmodul ist mit dem bestehenden Cache-Dienst zu implementieren"
  ],
  just: "Das Format Gegeben/Wenn/Dann nennt die Vorbedingung, die Aktion und das erwartete Ergebnis und macht das Kriterium damit unmittelbar testbar. Zu fordern, dass der Warenkorb schnell und einfach zu bedienen sei, ist nicht messbar, die User Story beschreibt ein Bedürfnis und keine Bedingung, und die Vorgabe des bestehenden Cache-Dienstes ist eine Umsetzungsvorgabe."
}
];
