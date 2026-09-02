/* German translation of Set M2, aligned by index with the English bank.
   Terminology follows the German Testing Board (GTB) glossary. */
module.exports = [
/* 0 */ {
  stem: "Welches der folgenden ist KEIN typisches Testziel?",
  opts: [
    "Vertrauen in das Qualitätsniveau des Testobjekts aufbauen",
    "Fehlerzustände und Fehlerwirkungen finden, damit sie berichtet und behoben werden können",
    "Die im Testobjekt gefundenen Fehlerzustände beheben",
    "Das Risiko unzureichender Softwarequalität verringern"
  ],
  just: "Testen bewertet das Testobjekt und berichtet die Befunde; das Beheben eines Fehlerzustands ist eine Entwicklungstätigkeit, die auf das Debugging folgt. Vertrauen aufzubauen, Fehlerzustände zu finden und das Risiko unzureichender Qualität zu verringern sind typische Testziele."
},
/* 1 */ {
  stem: "Welche Aussage über die Auswahl von Testverfahren ist RICHTIG?",
  opts: [
    "Die Auswahl hängt von Faktoren ab wie der Art der Komponente oder des Systems, den identifizierten Risiken, der verfügbaren Dokumentation und den Fähigkeiten der Tester",
    "Black-Box-Verfahren sind White-Box-Verfahren stets vorzuziehen",
    "Die Auswahl wird ausschließlich durch die gerade durchgeführte Teststufe bestimmt",
    "Erfahrungsbasierte Verfahren sollten nur eingesetzt werden, wenn keine Anforderungen vorliegen"
  ],
  just: "Es gibt kein allgemein bestes Verfahren. Die Auswahl richtet sich nach dem Kontext: Art des Testobjekts, regulatorische Vorgaben, die betrachteten Risiken, die Testziele, die verfügbare Dokumentation, das Wissen der Tester sowie Zeit und Budget."
},
/* 2 */ {
  stem: "Welche ZWEI der folgenden sind bewährte Testpraktiken, die für jeden Softwareentwicklungslebenszyklus gelten?",
  opts: [
    "Das gesamte Testen sollte vor der ersten Freigabe vollständig automatisiert sein",
    "Jede Teststufe sollte eigene, angemessene Testziele haben",
    "Der Testentwurf sollte erst beginnen, wenn der Code fertiggestellt ist",
    "Jede Teststufe muss von einem unabhängigen Testteam durchgeführt werden",
    "Tester sollten Arbeitsergebnisse prüfen, sobald erste Entwürfe vorliegen"
  ],
  just: "Eigene Ziele je Teststufe vermeiden Lücken und doppelte Tests, und das frühe Prüfen von Entwürfen liefert das schnellste Feedback. Vollständige Automatisierung vor der ersten Freigabe ist unrealistisch, der Testentwurf kann beginnen, sobald die Testbasis vorliegt, und der angemessene Grad an Unabhängigkeit hängt vom Kontext ab."
},
/* 3 */ {
  stem: "Was beschreibt den Zweck eines Testkonzepts am BESTEN?",
  opts: [
    "Es hält das Ergebnis jedes durchgeführten Testfalls fest",
    "Es dokumentiert die Mittel und den Zeitplan zur Erreichung der Testziele und hilft zu prüfen, ob diese erreicht werden",
    "Es legt die innere Struktur des Automatisierungsframeworks fest",
    "Es listet jeden Fehlerzustand auf, der vor der Freigabe behoben werden muss"
  ],
  just: "Ein Testkonzept beschreibt, wie die Testziele unter den gegebenen Randbedingungen erreicht werden sollen, und dient als Bezugspunkt für die Überwachung des Fortschritts. Ergebnisse, Frameworkentwurf und Fehlerlisten werden an anderer Stelle festgehalten."
},
/* 4 */ {
  stem: "Welche Aussage über statischen und dynamischen Test ist RICHTIG?",
  opts: [
    "Statischer Test lässt sich nur auf Code anwenden, dynamischer Test dagegen auf jedes Arbeitsergebnis",
    "Sowohl statischer als auch dynamischer Test setzen voraus, dass die Software ausgeführt wird",
    "Dynamischer Test ist immer günstiger als statischer Test, weil er automatisiert werden kann",
    "Statischer Test findet Fehlerzustände unmittelbar, während dynamischer Test Fehlerwirkungen auslöst, aus denen die Fehlerzustände erst diagnostiziert werden müssen"
  ],
  just: "Der statische Test untersucht das Arbeitsergebnis selbst, eine gefundene Anomalie ist damit der Fehlerzustand. Der dynamische Test beobachtet eine Fehlerwirkung, und der verursachende Fehlerzustand muss erst lokalisiert werden. Statischer Test gilt für viele Arbeitsergebnisse, nicht nur für Code, und keiner der beiden Ansätze ist grundsätzlich günstiger."
},
/* 5 */ {
  stem: "Ein Ticketsystem berechnet den Preis anhand des Alters der Besucher in vollen Jahren:",
  extra: '<ul><li>0 bis 5 Jahre: frei</li><li>6 bis 17 Jahre: Jugendliche</li><li>18 bis 64 Jahre: Erwachsene</li><li>65 Jahre und älter: Senioren</li></ul><p>Das höchste vom System akzeptierte Alter ist 120. Negative Altersangaben und Werte über 120 werden zurückgewiesen.</p>',
  stem2: "Wie viele Äquivalenzklassen, gültige und ungültige zusammen, gibt es für die Eingabe Alter?",
  opts: ["4", "5", "6", "8"],
  just: "Es gibt vier gültige Klassen, eine je Preiskategorie, und zwei ungültige Klassen: Alter unter 0 und Alter über 120. Zusammen sind das sechs Äquivalenzklassen."
},
/* 6 */ {
  stem: "Ein Komponententest schlägt fehl. Welche Aussage beschreibt die anschließenden Tätigkeiten RICHTIG?",
  opts: [
    "Der Fehlernachtest reproduziert die Fehlerwirkung und diagnostiziert den Fehlerzustand; anschließend prüft das Debugging, ob die Behebung gewirkt hat",
    "Das Debugging reproduziert die Fehlerwirkung, diagnostiziert den Fehlerzustand und behebt ihn; anschließend prüft der Fehlernachtest, ob die Fehlerwirkung nicht mehr auftritt",
    "Der Regressionstest diagnostiziert den Fehlerzustand; anschließend bestätigt das Debugging, dass die Behebung gewirkt hat",
    "Das Debugging reproduziert die Fehlerwirkung; anschließend prüft der Regressionstest, ob die Behebung gewirkt hat"
  ],
  just: "Debugging ist die Entwicklungstätigkeit, die die Fehlerwirkung reproduziert, ihre Ursache findet und sie behebt. Sobald die Behebung vorliegt, führen die Tester den fehlgeschlagenen Test erneut aus, das ist der Fehlernachtest. Der Regressionstest ist eine eigene Aktivität, die unbeabsichtigte Seiteneffekte der Änderung sucht."
},
/* 7 */ {
  stem: "Wie trägt ein Tester zur Releaseplanung bei?",
  opts: [
    "Indem er entscheidet, welche User Storys in das Release aufgenommen werden",
    "Indem er das Release im Namen des Fachbereichs freigibt",
    "Indem er den Code für die risikoreichsten User Storys zuerst schreibt",
    "Indem er hilft, testbare User Storys mit Abnahmekriterien zu formulieren, und sich an Risikoidentifizierung und Aufwandsschätzung beteiligt"
  ],
  just: "Tester bringen die Qualitäts- und Risikosicht in die Planung ein: Sie helfen, Storys testbar zu machen, identifizieren Produktrisiken und schätzen den Testaufwand. Über den Inhalt eines Releases zu entscheiden und es fachlich abzunehmen ist Aufgabe des Product Owners."
},
/* 8 */ {
  stem: "Welche Kategorie von Testwerkzeugen unterstützt die Testüberwachung und -steuerung am unmittelbarsten?",
  opts: [
    "Testmanagementwerkzeuge",
    "Werkzeuge zur Testdatenerzeugung",
    "Werkzeuge für die statische Analyse",
    "Werkzeuge für den Performanztest"
  ],
  just: "Testmanagementwerkzeuge verwalten die Testfälle, den Durchführungsstatus und die Verknüpfungen zu Anforderungen und Fehlerzuständen und liefern damit die Fortschrittsinformationen, auf die Überwachung und Steuerung angewiesen sind. Die übrigen Kategorien unterstützen den Testentwurf, den statischen Test und die Durchführung nicht funktionaler Tests."
},
/* 9 */ {
  stem: "Dasselbe Ticketsystem akzeptiert ein ganzzahliges Alter von 0 bis 120, und der Jugendpreis gilt für 6 bis einschließlich 17 Jahre.",
  stem2: "Welche Testwerte sollten verwendet werden, wenn Sie die Grenzwertanalyse mit drei Werten auf die Äquivalenzklasse der Jugendlichen anwenden?",
  opts: [
    "6 und 17",
    "5, 6, 17 und 18",
    "5, 6, 7, 16, 17 und 18",
    "0, 5, 6, 17, 18 und 120"
  ],
  just: "Die Grenzwertanalyse mit drei Werten verwendet jeden Grenzwert zusammen mit seinen beiden Nachbarwerten. Die Klasse der Jugendlichen hat die Grenzwerte 6 und 17, daraus ergeben sich 5, 6, 7 für die untere und 16, 17, 18 für die obere Grenze."
},
/* 10 */ {
  stem: "Welches der folgenden ist aus Testsicht ein Nutzen von DevOps?",
  opts: [
    "Es macht ein Testvorgehen überflüssig, weil die Releases klein und häufig sind",
    "Es macht den Regressionstest überflüssig, weil jede Änderung klein ist",
    "Es verlagert die Verantwortung für die Produktqualität auf das Betriebsteam",
    "Eine automatisierte Build-, Deploy- und Testpipeline liefert schnelles Feedback zur Qualität jeder Änderung"
  ],
  just: "Continuous Integration und Continuous Delivery führen die automatisierten Tests gegen jede Änderung aus, sodass Fehlerzustände innerhalb von Minuten statt Wochen gefunden werden. Häufige kleine Releases erhöhen den Bedarf an Regressionstests eher, als dass sie ihn beseitigen, und die Qualität bleibt eine gemeinsame Verantwortung."
},
/* 11 */ {
  stem: "Welches der folgenden ist ein Nutzen frühen und häufigen Feedbacks der Projektbeteiligten?",
  opts: [
    "Es macht den Abnahmetest vor der Freigabe überflüssig",
    "Missverstandene Anforderungen der Projektbeteiligten können erkannt und korrigiert werden, bevor sie umgesetzt sind",
    "Es garantiert, dass das Projekt im vereinbarten Budget bleibt",
    "Es überträgt die Verantwortung für die Produktqualität auf die Projektbeteiligten"
  ],
  just: "Frühes und häufiges Feedback macht deutlich, was die Beteiligten tatsächlich benötigen, solange eine Kurskorrektur noch günstig ist, sodass kein Aufwand in das Falsche fließt. Es ersetzt weder spätere Testaktivitäten noch verschiebt es die Verantwortung für die Qualität."
},
/* 12 */ {
  stem: "Was drückt die Testpyramide aus?",
  opts: [
    "Je niedriger die Teststufe, desto größer sollte die Anzahl der Tests sein und desto schneller laufen sie",
    "Je höher die Teststufe, desto größer sollte die Anzahl der Tests sein",
    "Die Reihenfolge, in der die Teststufen durchgeführt werden müssen",
    "Dass jede Ebene dieselbe Anzahl von Tests enthalten sollte"
  ],
  just: "Die Pyramide empfiehlt unten viele kleine, schnelle, isolierte Tests, typischerweise Komponententests, und nach oben hin immer weniger und langsamere Tests mit wachsendem Umfang, an der Spitze die durchgängigen Tests. Über die Reihenfolge der Durchführung sagt sie nichts aus."
},
/* 13 */ {
  stem: "Welches der folgenden ist ein Beispiel dafür, wie Testen zum Erfolg beiträgt?",
  opts: [
    "Testautomatisierung garantiert, dass die ausgelieferte Software keine Fehlerzustände enthält",
    "Tester erst am Projektende einzubinden erhält ihre Objektivität und verbessert dadurch das Produkt",
    "Alle Mitglieder des Testteams zu zertifizieren stellt eine höhere Produktqualität sicher",
    "Tester, die an Reviews der Anforderungen mitwirken, finden Mehrdeutigkeiten, bevor sie umgesetzt werden, was die Änderungskosten senkt"
  ],
  just: "Tester, die an Reviews teilnehmen, finden Fehlerzustände in den Anforderungen, bevor Code geschrieben wird, und früh beseitigte Fehlerzustände sind erheblich günstiger. Weder Testen noch Zertifizierung können Fehlerfreiheit garantieren, und Tester spät einzubinden beseitigt genau das frühe Feedback, aus dem der Nutzen entsteht."
},
/* 14 */ {
  stem: "Ein Bibliothekssystem setzt folgende Regeln um: An ein Mitglied mit offener Mahngebühr wird kein Buch ausgeliehen; ein gewöhnliches Mitglied darf höchstens fünf Bücher ausgeliehen haben; ein Mitglied des Lesekreises höchstens acht. Die folgende Entscheidungstabelle beschreibt das umgesetzte Verhalten.",
  extra: '<div class="figure"><table class="dt"><tr><th class="rowhead">Bedingungen</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class="rowhead">Offene Mahngebühr auf dem Konto</td><td>W</td><td>W</td><td>W</td><td>W</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Mitglied des Lesekreises</td><td>W</td><td>W</td><td>F</td><td>F</td><td>W</td><td>W</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Fünf oder mehr Bücher bereits ausgeliehen</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td><td>W</td><td>F</td></tr><tr class="sect"><td colspan="9">Aktionen</td></tr><tr><td class="rowhead">Ausleihe gewährt</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td><td>X</td></tr><tr><td class="rowhead">Ausleihe abgelehnt</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td>X</td><td></td></tr></table></div><p>W steht für wahr, F für falsch.</p>',
  stem2: "Ein Mitglied des Lesekreises ohne offene Mahngebühr, das bereits sechs Bücher ausgeliehen hat, möchte ein weiteres Buch ausleihen. Welche Regel greift, und wie lautet das Ergebnis?",
  opts: [
    "Regel R5, und die Ausleihe wird abgelehnt",
    "Regel R3, und die Ausleihe wird abgelehnt",
    "Regel R5, und die Ausleihe wird gewährt",
    "Regel R7, und die Ausleihe wird gewährt"
  ],
  just: "Das Mitglied hat keine offene Mahngebühr, ist im Lesekreis und hat bereits fünf oder mehr Bücher ausgeliehen, also die Spalte mit den Bedingungswerten falsch, wahr, wahr. Das ist R5, und da ein Mitglied des Lesekreises bis zu acht Bücher halten darf, wird die Ausleihe gewährt."
},
/* 15 */ {
  stem: "Welches der folgenden ist ein PROJEKTRISIKO und kein Produktrisiko?",
  opts: [
    "Wichtige Tester könnten das Team verlassen, bevor der Systemtest abgeschlossen ist",
    "Das System könnte die Zinsen in einem Schaltjahr falsch berechnen",
    "Das System könnte unter Spitzenlast nicht innerhalb von drei Sekunden antworten",
    "Die Benutzungsoberfläche könnte für sehbehinderte Anwender unbenutzbar sein"
  ],
  just: "Projektrisiken bedrohen die Führung und Steuerung des Projekts selbst, etwa die Verfügbarkeit von Fähigkeiten, den Terminplan oder den Lieferanten. Die übrigen drei Antworten beschreiben mögliche Schwächen im ausgelieferten Produkt und sind damit Produktrisiken."
},
/* 16 */ {
  stem: "Sie bewerten, wie leicht ein Erstnutzer einen Kauf abschließen kann, und tun dies am vollständig integrierten System in einer produktionsnahen Umgebung.",
  stem2: "Welche Teststufe und welche Testart beschreibt das?",
  opts: [
    "Systemtest und eine funktionale Testart",
    "Systemtest und eine nicht funktionale Testart",
    "Abnahmetest und eine funktionale Testart",
    "Komponentenintegrationstest und eine nicht funktionale Testart"
  ],
  just: "Das Testobjekt ist das vollständig integrierte System, was den Test auf die Stufe des Systemtests einordnet. Gebrauchstauglichkeit ist ein Qualitätsmerkmal, das beschreibt, wie gut das System das tut, was es tut, es handelt sich also um eine nicht funktionale Testart."
},
/* 17 */ {
  stem: "Sie sollen eine Anforderungsspezifikation anhand einer Liste typischer Anforderungsprobleme prüfen: mehrdeutige Formulierungen, fehlende Abnahmekriterien, nicht testbare Aussagen und Dopplungen.",
  stem2: "Welche Reviewtechnik wenden Sie an?",
  opts: [
    "Ad-hoc-Review",
    "Szenariobasiertes Review",
    "Checklistenbasiertes Review",
    "Rollenbasiertes Review"
  ],
  just: "Eine vorgegebene Liste von Fragestellungen oder bekannten Problemkategorien abzuarbeiten ist ein checklistenbasiertes Review. Beim Ad-hoc-Review erhält der Reviewer keine Anleitung, beim szenariobasierten Review wird das Arbeitsergebnis anhand der erwarteten Nutzung durchgegangen, und beim rollenbasierten Review wird es aus der Sicht einer bestimmten Rolle bewertet."
},
/* 18 */ {
  stem: "Das Anmeldeverhalten eines Systems wird durch die folgende Zustandstabelle beschrieben. Ein Strich bedeutet, dass das Ereignis in diesem Zustand nicht akzeptiert wird.",
  extra: '<div class="figure"><table class="dt"><tr><th class="rowhead">Zustand</th><th>richtiges Passwort</th><th>drittes falsches Passwort</th><th>abmelden</th></tr><tr><td class="rowhead">ABGEMELDET</td><td>ANGEMELDET</td><td>GESPERRT</td><td>&ndash;</td></tr><tr><td class="rowhead">ANGEMELDET</td><td>&ndash;</td><td>&ndash;</td><td>ABGEMELDET</td></tr><tr><td class="rowhead">GESPERRT</td><td>&ndash;</td><td>&ndash;</td><td>&ndash;</td></tr></table></div>',
  stem2: "Wie viele ungültige Zustandsübergänge enthält diese Zustandstabelle?",
  opts: ["6", "3", "5", "9"],
  just: "Die Tabelle hat drei Zustände und drei Ereignisse, also gibt es neun mögliche Kombinationen aus Zustand und Ereignis. Drei davon führen zu einem definierten Übergang, die verbleibenden sechs sind ungültige Übergänge."
},
/* 19 */ {
  stem: "Warum wird eine Ursachenanalyse von Fehlerzuständen durchgeführt?",
  opts: [
    "Um festzustellen, welcher Tester den Fehlerzustand früher hätte finden müssen",
    "Um die zugrunde liegende Ursache des Fehlerzustands zu erkennen und zu beseitigen, damit ähnliche Fehlerzustände künftig vermieden werden",
    "Um das Restrisiko zu berechnen, das nach der Behebung des Fehlerzustands verbleibt",
    "Um die Reihenfolge festzulegen, in der die offenen Fehlerzustände behoben werden"
  ],
  just: "Die Ursachenanalyse blickt über den einzelnen Fehlerzustand hinaus auf die Prozessschwäche, die ihn ermöglicht hat, sodass die Prozessverbesserung ganze Klassen von Fehlerzuständen verhindern kann. Sie ist eine Maßnahme der Prozessverbesserung und dient weder der Schuldzuweisung noch der Priorisierung von Behebungen."
},
/* 20 */ {
  stem: "Was ist der HAUPTZWECK der Produktrisikoanalyse im Testen?",
  opts: [
    "Jeden Fehlerzustand einem Teammitglied zur Verantwortung zuzuordnen",
    "Die Gesamtkosten des Projekts zu berechnen",
    "Zu entscheiden, welcher Entwickler welche User Story umsetzen soll",
    "Umfang, Tiefe und Priorität des durchzuführenden Testens zu bestimmen"
  ],
  just: "Die Produktrisikoanalyse ermittelt, was am Produkt schiefgehen kann und wie schwerwiegend das wäre, und steuert damit, was wie gründlich und in welcher Reihenfolge getestet wird. Sie unterstützt außerdem die Wahl der Testverfahren und die Berichterstattung über das Restrisiko."
},
/* 21 */ {
  stem: "Betrachten Sie den folgenden Pseudocode:",
  stem2: "Wie viele Testfälle sind MINDESTENS nötig, um 100% Anweisungsüberdeckung zu erreichen?",
  opts: ["1", "3", "2", "4"],
  just: "Ein Testfall mit einem negativen Wert, der nach dem Vorzeichenwechsel größer als 100 ist, zum Beispiel -200, führt die Anweisung innerhalb der ersten Entscheidung und die Ausgabe des großen Ergebnisses aus. Ein zweiter Testfall mit einem kleinen positiven Wert, zum Beispiel 5, führt die verbleibende Anweisung aus. Kein einzelner Testfall kann beide Ausgabeanweisungen ausführen, es werden also zwei benötigt."
},
/* 22 */ {
  stem: "Welches der folgenden ist aus Testsicht ein typischer Nutzen von Retrospektiven?",
  opts: [
    "Eine garantierte Verringerung der Anzahl von Fehlerzuständen, die in den Produktivbetrieb gelangen",
    "Höhere Effektivität und Effizienz des Testens, etwa durch Verbesserung des Testprozesses und der Testmittel",
    "Eine formale Aufzeichnung darüber, welches Teammitglied welchen Fehlerzustand verursacht hat",
    "Eine objektive Grundlage für die Entscheidung, welche Tester befördert werden"
  ],
  just: "Retrospektiven ermitteln, was funktioniert hat und was nicht, und erzeugen konkrete Verbesserungsmaßnahmen wie bessere Testdaten, schnelleres Feedback oder klarere Abnahmekriterien. Sie sind ein Mittel der Prozessverbesserung, keine Ergebnisgarantie und keine Leistungsbeurteilung."
},
/* 23 */ {
  stem: "Was wird während der Planungsaktivität eines Reviews durchgeführt?",
  opts: [
    "Das Arbeitsergebnis verteilen und den Teilnehmern die Ziele erläutern",
    "Die von den einzelnen Reviewern gefundenen Anomalien protokollieren",
    "Die gefundenen Fehlerzustände beheben und die Korrekturen berichten",
    "Den Umfang des Reviews festlegen sowie bei den formaleren Reviewtypen die Eingangs- und Endekriterien"
  ],
  just: "Die Planung legt Zweck und Umfang des Reviews fest, wählt die Teilnehmer aus, verteilt die Rollen und definiert bei formalen Reviewtypen Eingangs- und Endekriterien. Das Verteilen des Arbeitsergebnisses gehört zum Initiieren des Reviews, das Protokollieren von Anomalien zum individuellen Review sowie zur Kommunikation und Analyse, und das Beheben von Fehlerzuständen zum Beheben und Berichten."
},
/* 24 */ {
  stem: "Ein Tester stellt fest, dass 70% der bisher in einem großen System gefundenen Fehlerzustände in zwei seiner zwölf Module liegen, und schlägt vor, den weiteren Testaufwand auf diese beiden Module zu konzentrieren.",
  stem2: "Welcher Grundsatz des Testens stützt diesen Vorschlag?",
  opts: [
    "Fehlerzustände treten gehäuft auf",
    "Testen ist kontextabhängig",
    "Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit",
    "Frühes Testen spart Zeit und Geld"
  ],
  just: "Eine kleine Zahl von Modulen enthält üblicherweise die meisten Fehlerzustände, die beobachtete Verteilung ist daher ein brauchbarer Hinweis darauf, wo weitere Fehlerzustände zu erwarten sind. Darauf beruhen risikobasiertes und fokussiertes Testen."
},
/* 25 */ {
  stem: "Welche Aussage über Anweisungsüberdeckung und Zweigüberdeckung ist RICHTIG?",
  opts: [
    "100% Anweisungsüberdeckung bedeutet zugleich 100% Zweigüberdeckung",
    "Die beiden Kriterien sind für jeden strukturierten Code gleichwertig",
    "100% Zweigüberdeckung bedeutet zugleich 100% Anweisungsüberdeckung, aber nicht umgekehrt",
    "Keines der beiden Kriterien lässt sich automatisiert messen"
  ],
  just: "Jeder durchlaufene Zweig führt die auf ihm liegenden Anweisungen aus, vollständige Zweigüberdeckung führt daher zwangsläufig jede erreichbare Anweisung aus. Umgekehrt gilt das nicht: Bei einer Entscheidung ohne Anweisungen im Alternativzweig können alle Anweisungen ausgeführt werden, ohne dass beide Ausgänge durchlaufen wurden."
},
/* 26 */ {
  stem: "Welche ZWEI der folgenden sind Beispiele für Metriken der Testüberwachung und -steuerung?",
  opts: [
    "Die Anzahl der gefundenen, behobenen und noch offenen Fehlerzustände",
    "Die Anzahl der Schulungsstunden, die die Tester erhalten haben",
    "Die Anzahl der User Storys, die sich derzeit im Produkt-Backlog befinden",
    "Der Anteil der geplanten Testfälle, die bereits durchgeführt wurden",
    "Die Anzahl der dem Team zugeordneten Entwickler"
  ],
  just: "Die Testüberwachung nutzt Metriken über den Fortschritt des Testens und über die gefundenen Fehlerzustände, etwa den Durchführungsfortschritt gegenüber dem Plan und die Anzahl offener Fehlerzustände nach Schweregrad. Schulungsstunden, Backlog-Umfang und Teamgröße beschreiben das Projekt, nicht den Stand des Testens."
},
/* 27 */ {
  stem: "Welches der folgenden ist ein Nutzen der Testautomatisierung?",
  opts: [
    "Sie macht die Pflege der Testmittel überflüssig",
    "Sie garantiert, dass alle Fehlerzustände vor der Freigabe gefunden werden",
    "Sie macht erfahrene Tester überflüssig",
    "Eine gleichmäßigere und wiederholbare Testdurchführung sowie eine objektive Bewertung der Überdeckung"
  ],
  just: "Automatisierte Tests laufen jedes Mal gleich ab und können die Überdeckung objektiv berichten; sie schaffen Freiraum für Arbeit, die menschliches Urteilsvermögen erfordert. Automatisierte Testmittel müssen dennoch gepflegt werden, die Automatisierung findet keine Fehlerzustände, nach denen ihre Tests nicht suchen, und ihr Aufbau erfordert erfahrene Fachleute."
},
/* 28 */ {
  stem: "Wovon hängt der Umfang des Wartungstests ab?",
  opts: [
    "Von der Anzahl der im Wartungsteam verfügbaren Tester",
    "Vom Risikograd der Änderung, von der Größe des bestehenden Systems und vom Umfang der Änderung",
    "Von den Testverfahren, die in der ursprünglichen Entwicklung eingesetzt wurden",
    "Von der Anzahl der Fehlerzustände, die im ursprünglichen Abnahmetest gefunden wurden"
  ],
  just: "Der Umfang hängt davon ab, wie risikoreich die Änderung ist, wie groß das möglicherweise betroffene System ist und wie umfangreich die Änderung selbst ausfällt. Mit einer Auswirkungsanalyse wird bestimmt, wie viel Regressionstest die Änderung erfordert."
},
/* 29 */ {
  stem: "Welches der folgenden ist ein Merkmal des checklistenbasierten Testens?",
  opts: [
    "Tests werden entworfen, realisiert und durchgeführt, um die Punkte einer Liste abzudecken, die aus Erfahrung, Standards oder bekannten Risiken abgeleitet wurde",
    "Tests werden aus der inneren Struktur des Testobjekts abgeleitet, um eine festgelegte Überdeckung zu erreichen",
    "Testentwurf und Testdurchführung erfolgen gleichzeitig innerhalb einer zeitlich begrenzten Sitzung",
    "Jede mögliche Kombination von Eingabewerten wird systematisch abgedeckt"
  ],
  just: "Beim checklistenbasierten Testen arbeitet der Tester eine Liste zu prüfender Punkte ab, die typischerweise aus Erfahrung, aus dem entsteht, was den Anwendern wichtig ist, oder aus bekannten Fehlermustern. Die übrigen Antworten beschreiben White-Box-Test, exploratives Testen und vollständiges Testen."
},
/* 30 */ {
  stem: "Welche Arbeitsergebnisse entstehen in der Aktivität Testentwurf?",
  opts: [
    "Testbedingungen und die zu testenden Funktionen",
    "Testsuiten und der Zeitplan für die Testdurchführung",
    "Der Testabschlussbericht und die gewonnenen Erkenntnisse",
    "Testfälle, Anforderungen an die Testdaten und die zu durchlaufenden Überdeckungselemente"
  ],
  just: "Der Testentwurf überführt die in der Testanalyse ermittelten Testbedingungen in Testfälle und weitere Testmittel und bestimmt die Überdeckungselemente sowie die benötigten Testdaten. Testbedingungen stammen aus der Testanalyse, Testsuiten und Zeitpläne aus der Testrealisierung und der Abschlussbericht aus dem Testabschluss."
},
/* 31 */ {
  stem: "Wann wird üblicherweise ein Testabschlussbericht erstellt?",
  opts: [
    "Täglich während der Testdurchführung",
    "Immer dann, wenn ein Fehlerzustand mit hohem Schweregrad gefunden wird",
    "Wenn eine Teststufe, eine Iteration oder ein Testprojekt seine Endekriterien erreicht",
    "Bevor das Testkonzept genehmigt wurde"
  ],
  just: "Der Testabschlussbericht fasst zusammen, was getan wurde und was die Ergebnisse bedeuten, sobald ein Meilenstein erreicht ist, etwa das Ende einer Teststufe, einer Iteration oder des gesamten Projekts. Der laufende Informationsbedarf wird über Testfortschrittsberichte gedeckt."
},
/* 32 */ {
  stem: "Wer ist in einem formalen Review dafür verantwortlich, die gefundenen Anomalien und die getroffenen Entscheidungen zu protokollieren?",
  opts: ["Der Protokollant", "Der Reviewleiter", "Der Autor", "Das Management"],
  just: "Der Protokollant sammelt die Anomalien der Teilnehmer und hält die während der Reviewsitzung benötigten Informationen fest, einschließlich der zu jedem Befund getroffenen Entscheidungen. Der Reviewleiter führt durch das Review, der Autor verantwortet das Arbeitsergebnis, und das Management entscheidet, dass Reviews stattfinden, und stellt den Aufwand bereit."
},
/* 33 */ {
  stem: "Welches der folgenden ist ein NACHTEIL erfahrungsbasierter Testverfahren?",
  opts: [
    "Sie lassen sich nicht anwenden, wenn die Spezifikation unvollständig ist",
    "Die Überdeckung ist schwer messbar, und die Ergebnisse hängen stark von der Erfahrung des Testers ab",
    "Sie setzen voraus, dass der Quellcode des Testobjekts verfügbar ist",
    "Sie lassen sich nur im Abnahmetest anwenden"
  ],
  just: "Da die Tests aus der Einschätzung des Testers und nicht aus einem formalen Modell stammen, können zwei Tester sehr unterschiedliche Testmengen erzeugen, und die erreichte Überdeckung ist schwer zu beziffern. Ihre Stärke liegt gerade darin, dass sie mit wenig Dokumentation, auf jeder Teststufe und ohne Zugriff auf den Code funktionieren."
},
/* 34 */ {
  stem: "Was beeinflusst, wie der Testprozess in einem konkreten Kontext durchgeführt wird?",
  romans: [
    "Der verwendete Softwareentwicklungslebenszyklus",
    "Die identifizierten Produktrisiken",
    "Die Anzahl der Tester mit einer Zertifizierung",
    "Vertragliche und regulatorische Vorgaben",
    "Das Farbschema der Benutzungsoberfläche"
  ],
  opts: ["i, iii und iv", "ii, iii und v", "i, ii und iv", "i, ii, iii, iv und v"],
  just: "Der Testprozess muss an den Kontext angepasst werden: Der verwendete Lebenszyklus bestimmt, wann getestet wird, die identifizierten Risiken bestimmen Tiefe und Schwerpunkt, und vertragliche, gesetzliche oder regulatorische Vorgaben können bestimmte Verfahren und Dokumente vorschreiben. Die Anzahl zertifizierter Tester und das Aussehen der Oberfläche prägen den Prozess selbst nicht."
},
/* 35 */ {
  stem: "Während der Testdurchführung schlägt ein Test fehl, der Entwickler kann die Fehlerwirkung jedoch nicht reproduzieren. Welche Praxis des Konfigurationsmanagements hätte diese Situation verhindert?",
  opts: [
    "Die genaue Version des Testobjekts und der im Testlauf verwendeten Testmittel festzuhalten",
    "Den fehlgeschlagenen Testfall zu automatisieren",
    "Den Schweregrad des Fehlerberichts zu erhöhen",
    "Den fehlgeschlagenen Testfall in die Regressionstestsuite aufzunehmen"
  ],
  just: "Konfigurationsmanagement identifiziert und versioniert das Testobjekt und alle Testmittel, sodass sich jedes Testergebnis auf genau die Elemente zurückführen lässt, die es erzeugt haben. Ohne diese Angabe wird eine Fehlerwirkung womöglich gegen einen anderen Build reproduziert und scheint nicht zu existieren."
},
/* 36 */ {
  stem: "Was beschreibt eine gute User Story am BESTEN?",
  opts: [
    "Sie enthält den detaillierten technischen Entwurf der zu bauenden Funktion",
    "Sie ist unabhängig, verhandelbar, wertvoll, schätzbar, klein und testbar",
    "Sie wird vom Tester geschrieben und vom Entwickler freigegeben",
    "Sie macht gesonderte Abnahmekriterien überflüssig"
  ],
  just: "Diese sechs Merkmale sind die verbreiteten Kriterien für eine gut formulierte User Story. Eine Story ist ein Platzhalter für ein Gespräch und kein Entwurfsdokument, sie entsteht gemeinsam durch Fachbereich, Entwicklung und Test, und sie benötigt weiterhin Abnahmekriterien."
},
/* 37 */ {
  stem: "Welches der folgenden ist am ehesten ein Beispiel dafür, dass ein Tester eine allgemeine Fähigkeit statt Domänenwissen einsetzt?",
  opts: [
    "Zu wissen, dass eine Versicherungsprämie neu berechnet werden muss, wenn der Versicherungsnehmer umzieht",
    "Die Steuerregeln zu verstehen, die für Rechnungen in ein anderes Land gelten",
    "Zu wissen, welche regulatorische Norm für Software in Medizinprodukten gilt",
    "Einen Fehlerbericht einem Entwickler klar und konstruktiv zu erläutern, sodass er verstanden wird, ohne eine Abwehrhaltung auszulösen"
  ],
  just: "Befunde klar, diplomatisch und konstruktiv zu vermitteln ist eine der allgemeinen Fähigkeiten, die jeder Tester unabhängig vom Anwendungsgebiet braucht. Die übrigen Antworten beschreiben Wissen über eine bestimmte Fachdomäne."
},
/* 38 */ {
  stem: "Was beschreibt den Hauptzweck eines Fehlerberichts am BESTEN?",
  opts: [
    "Den Aufwand zu dokumentieren, den der Tester für den Testlauf aufgewendet hat",
    "Festzuhalten, welche Anforderungen durch das Testen abgedeckt wurden",
    "Denjenigen, die den Fehlerzustand bearbeiten, genügend Informationen zu geben, um ihn zu reproduzieren, zu priorisieren und zu beheben",
    "Nachzuweisen, dass die Endekriterien der Teststufe erfüllt sind"
  ],
  just: "Ein Fehlerbericht existiert, damit die Anomalie verstanden, reproduziert, bewertet und behoben werden kann und damit ihr Status verfolgt werden kann. Aufwand, Überdeckung und Endekriterien werden auf anderem Weg berichtet."
},
/* 39 */ {
  stem: "Betrachten Sie die folgende User Story und ihre Abnahmekriterien:",
  extra: '<p style="font-style:italic;padding-left:1.2rem">Als Gast<br>möchte ich meine Buchung online stornieren,<br>damit ich nicht im Hotel anrufen muss</p><ul><li>Eine Buchung kann bis 24 Stunden vor der Anreise kostenfrei storniert werden</li><li>Bei einer Stornierung innerhalb von 24 Stunden vor der Anreise fällt eine Gebühr in Höhe einer Übernachtung an</li><li>Nach einer Stornierung erhält der Gast eine Bestätigungs-E-Mail</li><li>Eine bereits begonnene Buchung kann nicht storniert werden</li></ul>',
  stem2: "Welches der folgenden ist das BESTE Beispiel für einen ATDD-Test für diese User Story?",
  opts: [
    "Prüfen, dass der Buchungsdatensatz nach der Stornierung aus der Datenbanktabelle entfernt wird",
    "Prüfen, dass bei einer Stornierung 12 Stunden vor der Anreise eine Gebühr in Höhe einer Übernachtung berechnet wird",
    "Prüfen, dass der Gast die Zimmerkategorie einer bestehenden Buchung ändern kann",
    "Prüfen, dass eine Buchung auch nach der Anreise des Gastes noch storniert werden kann"
  ],
  just: "Ein Test nach Acceptance Test-Driven Development leitet sich unmittelbar aus einem Abnahmekriterium ab. Eine Stornierung 12 Stunden vor der Anreise liegt innerhalb der 24-Stunden-Frist, es fällt also die Gebühr in Höhe einer Übernachtung an. Das Entfernen des Datensatzes ist ein Umsetzungsdetail, das Ändern der Zimmerkategorie gehört zu einer anderen Story, und eine bereits begonnene Buchung zu stornieren widerspricht dem letzten Kriterium."
}
];
