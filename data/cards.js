/* Karteikarten. Jede Karte: Frage, Antwort, Quelle. IDs werden pro Modul fortlaufend vergeben –
   neue Karten bitte am Ende eines Moduls anhängen, damit der Lernstand erhalten bleibt. */
(function () {
  'use strict';
  var C = window.LP.cards;
  // src: Zeichenkette = Fundstelle in JP 3-09.3; Array = [[quelle, fundstelle], …]
  function add(m, list) {
    list.forEach(function (x, i) {
      var src = typeof x[2] === 'string' ? [['jp3093', x[2]]] : (x[2] || null);
      C.push({ id: m + '-c' + (i + 1), m: m, q: x[0], a: x[1], src: src });
    });
  }

  add('m01', [
    ['Wie definiert JP 3-09.3 Close Air Support?', 'Luftangriffe von Starr- und Drehflüglern gegen feindliche Ziele <strong>in unmittelbarer Nähe eigener Kräfte</strong>, die eine <strong>detaillierte Integration</strong> jedes Einsatzes mit Feuer und Bewegung dieser Kräfte erfordern.', 'Kap. I, Abs. 2'],
    ['Ab welcher Entfernung ist ein Ziel „close“?', 'Es gibt keine feste Entfernung. Entscheidend ist, ob eine detaillierte Integration mit Feuer und Bewegung der eigenen Kräfte nötig ist.', 'Kap. I, Abs. 2'],
    ['Wie definiert die NATO (AJP-3.3) Air Interdiction?', 'Operationen, die das militärische Potenzial des Gegners zerschlagen, stören, verzögern, schwächen oder vernichten, bevor es wirksam eingesetzt werden kann – so weit von eigenen Kräften entfernt, dass eine detaillierte Entflechtung mit der Landkomponente nicht nötig ist.', [['ajp33', 'Abs. 2.39–2.42']]],
    ['Was ist Terminal Attack Control (TAC)?', 'Die Befugnis, das Manöver angreifender Luftfahrzeuge zu steuern und ihnen die Waffenfreigabe zu erteilen. Nur zertifizierte bzw. qualifizierte JTAC oder FAC(A) dürfen TAC ausüben.', 'Kap. I, Abs. 2'],
    ['Was sind Terminal Guidance Operations (TGO)?', 'Elektronische, mechanische, sprachliche oder visuelle Kommunikation, die anfliegenden Luftfahrzeugen bzw. Waffen zusätzliche Informationen zur Zielposition gibt. Personal ohne JTAC-Qualifikation darf mit TGO weder Manöver steuern noch freigeben.', 'Kap. I, Abs. 2'],
    ['Wer ist die letztendliche Autorität für Unterstützungsfeuer in seinem Bereich?', 'Der unterstützte Bodenkommandeur. Die niedrigste Ebene ist für den CAS-Einsatz verantwortlich, sofern die höhere Führung das nicht an sich zieht.', 'Kap. I, Abs. 3'],
    ['Nenne die Bedingungen für wirksames CAS.', 'Ausgebildetes Personal · Planung und Integration · Führung (C2) · Luftüberlegenheit, v. a. SEAD · Zielmarkierung und -erfassung · schlanke, flexible Verfahren · geeignete Munition. Günstiges Wetter hilft, ist aber keine Voraussetzung.', 'Kap. I, Abs. 7'],
    ['Was sind typische Ursachen für Eigenbeschuss?', 'Fehlidentifikation von Zielen, ungenaue Zielpositionen oder -beschreibungen, falsch übermittelte oder empfangene Positionen und Verlust des Lagebewusstseins.', 'Kap. I, Abs. 9'],
    ['Ist Close Combat Attack (CCA) der US Army CAS?', 'Nein. CCA ist das Verfahren der Army-Kampfhubschrauber mit eigenen Kräften – es ist ausdrücklich kein CAS.', 'Kap. I, Abs. 4'],
    ['Was ist ein JAAT?', 'Joint Air Attack Team: gemeinsamer Einsatz von Starrflügler-CAS und Kampfhubschraubern.', 'Kap. I, Abs. 4'],
    ['Was ist ein FAC(A)?', 'Ein besonders ausgebildetes und qualifiziertes Besatzungsmitglied, das TAC aus der Luft ausübt – die luftgestützte Verlängerung des TACP bzw. JTAC.', [['jp3093', 'Kap. II'], ['ajp33', 'Abs. 4.14–4.27']]],
    ['Was ist ein JFO?', 'Ein qualifizierter Beobachter, der Boden-Boden-Feuer anfordert, leitet und kontrolliert, Zieldaten für Type 2 und Type 3 liefert und mit JTAC oder FAC(A) TGO durchführt. Er gibt nie die Waffenfreigabe.', 'Kap. II'],
    ['Nenne die vier Grundsätze des Kriegsvölkerrechts aus JP 3-09.3.', 'Militärische Notwendigkeit · Unterscheidung · Verhältnismäßigkeit · Verbot unnötiger Leiden.', 'Kap. III, Abs. 11'],
    ['Wer ist bei Waffeneinsatz durch CAS-Lfz für den Einsatz verantwortlich?', 'Die Verantwortung bleibt beim Bodenkommandeur. Die Besatzung soll den CAS-Brief als Befehl verstehen.', 'Kap. III']
  ]);

  add('m02', [
    ['Was ist die ASOC?', 'Air Support Operations Center: wichtigste Führungsstelle des TACS für Luftoperationen, die Bodenkräfte direkt unterstützen. Verlängerung des JAOC, verarbeitet sofortige Anforderungen und leitet das JARN.', 'Kap. II'],
    ['Was ist das USMC-Gegenstück zur ASOC?', 'Das DASC (Direct Air Support Center).', 'Kap. II'],
    ['Welche zwei Aufgaben hat der TACP?', '1. Bodenkommandeure über Möglichkeiten und Grenzen von Luftoperationen beraten. 2. Die primäre Terminal Attack Control für CAS stellen.', 'Kap. II'],
    ['Was ist ein TAC(A) – und was nicht?', 'Verlängerung von ASOC bzw. DASC in der Luft: Funkrelais, Übergaben, Koordinierung. Ein TAC(A) übt keine Terminal Attack Control aus und soll nie gleichzeitig FAC(A) sein.', 'Kap. II; Kap. III, Abs. 24'],
    ['Wofür ist das JARN?', 'Joint Air Request Net: Netz für sofortige Luftunterstützungsanforderungen; Netzleitstelle ist die ASOC.', 'Kap. II, Abs. 10'],
    ['Wem gehört das TAD-Netz?', 'Dem JTAC. Das Tactical Air Direction Net (meist UHF-AM) dient der Führung der Luftfahrzeuge und ist für TAC reserviert.', 'Kap. II, Abs. 10; Kap. V'],
    ['Nenne die sechs Phasen des NATO Air Tasking Cycle.', '1. Strategie- und Planentwicklung · 2. Operationsführung und Zielentwicklung · 3. Waffenzuordnung und Luftzuteilung · 4. ATO-Erstellung · 5. Durchführung · 6. Auswertung.', [['ajp33', 'Abs. 2.40–2.42, C.11']]],
    ['Wie lange gilt eine ATO normalerweise, und wie lang ist der Planungszyklus?', 'Eine ATO gilt normalerweise 24 Stunden; der Zyklus umfasst etwa 72 Stunden, mehrere ATOs laufen parallel.', [['ajp33', 'Abs. 2.40–2.42']]],
    ['Welche Arten vorgeplanter Anforderungen gibt es?', 'Scheduled (zu fester Zeit) und on-call (Luftfahrzeuge in Bereitschaft für einen Zeitraum).', 'Kap. III, Abs. 27'],
    ['Wie werden sofortige Anforderungen erfüllt?', 'Mit on-call-Missionen oder durch Umleiten bereits eingeplanter Missionen (redirect).', 'Kap. III, Abs. 27'],
    ['Welche Prioritäten gibt es bei sofortigen Anforderungen?', 'Emergency (1) · Priority (2) · Routine (3).', 'Kap. III, Abs. 27'],
    ['Was bedeutet Schweigen eines Zwischenstabs bei einer sofortigen Anforderung?', 'Zustimmung (silence is consent).', 'Kap. III, Abs. 27'],
    ['Welches Formular ist der JTAR?', 'DD Form 1972 (Joint Tactical Air Strike Request); digital auch das USMTF-Format D670.', 'Anhang A'],
    ['Darf man im JTAR die eigene Position als Zielposition eintragen?', 'Nein – eigene Positionen nie als Zielposition verwenden. Die Anforderung so früh wie möglich stellen, nicht erst nach Verfeinerung der Koordinate.', 'Kap. V, Abs. 2a']
  ]);

  add('m03', [
    ['Nenne die fünf Schritte der Planungsphase.', 'Auftragsübernahme · Auftragsanalyse · Entwicklung von Handlungsmöglichkeiten · Analyse/Wargaming · Befehlserstellung.', 'Kap. III, Abs. 4–5'],
    ['Woraus besteht ein Fire Support Task (FST)?', 'Task, Purpose, Method, Effects (Aufgabe, Zweck, Methode, Wirkung).', 'Kap. III'],
    ['Welche Zahlen nennt JP 3-09.3 für Gefechte im Stadtgebiet?', '90 % der Gefechte finden auf unter 50 m zwischen eigenen und feindlichen Kräften statt; Gefechte mit Unterstützungswaffen auf unter 250 m.', 'Kap. III, Abs. 9'],
    ['Welche drei Kategorien von Nacht-CAS gibt es?', 'Visuell (mit künstlicher Beleuchtung), systemgestützt (Sensoren) und mit Nachtsichtgeräten.', 'Kap. III, Abs. 15'],
    ['Wie viel GLINT-Band darf eine Person bzw. ein Fahrzeug tragen?', 'Höchstens ein ½-Zoll-Quadrat pro Person und vier 1-Zoll-Quadrate pro Fahrzeug.', 'Kap. III, Abs. 9'],
    ['Bestimmt „Troops in Contact“ die Kontrollart?', 'Nein. TIC ist eine Meldung mit Hinweischarakter und legt keine Kontrollart fest.', 'Kap. III, Abs. 11'],
    ['Welcher Teil der Vorbereitung ist laut JP 3-09.3 der wichtigste?', 'Die Feuerunterstützungsübung (fire support rehearsal).', 'Kap. IV, Abs. 1–4'],
    ['Welche drei Faktoren bestimmen die Position des TACP?', 'Sicherheit (der TACP kann sich nicht selbst sichern), Beobachtung (auffällige Geländepunkte meiden) und Funkverbindung.', 'Kap. IV, Abs. 6'],
    ['Wann ist keine Kollateralschadensschätzung (CDE) nötig?', 'Bei Direktfeuerwaffen bis 105 mm, z. B. 2,75-Zoll-Raketen, 30-mm-Bordkanone und 105 mm.', 'Kap. III, Abs. 11'],
    ['Nenne Möglichkeiten, Kollateralschäden zu verringern.', 'Kleinere oder präzisere Waffe · Verzögerungszünder (weniger Splitter) bzw. Luftdetonation (weniger Eindringen) · Zielpunkt versetzen · Anflugrichtung weg vom gefährdeten Objekt.', 'Kap. III, Abs. 11'],
    ['Was gehört zu den Pre-Combat Checks des JTAC?', 'Auftragswissen, Ausrüstung und Koordinierung – z. B. NVG, IR-Pointer, Laser-Entfernungsmesser/Beleuchter, IR-Strobe, VS-17, Funkgerät, Pyrotechnik, GPS, Kartenmaterial und Authentisierungsunterlagen, möglichst redundant.', 'Kap. IV, Abs. 3'],
    ['Wer ist der supported commander bei CAS – und kann ein CAS-Lfz OSC sein?', 'Der Bodenkommandeur ist supported commander und On-Scene Commander. Ein CAS-Lfz kann nicht OSC sein.', 'Kap. III'],
    ['Wer darf die taktische Führung (tactical lead) innerhalb von CAS-Lfz übertragen?', 'Nur der JTAC bzw. FAC(A).', 'Kap. III'],
    ['Welche Information gehört vor dem Einsatz vom FAC(A) zum TACP?', 'U. a. Verweildauer, ATO-Auszug, Halteraum, Waffen, Funkempfehlungen, Einschränkungen, Pod-Typ, Video-Fähigkeit sowie Koordinatenerzeugung mit TLE.', 'Kap. IV']
  ]);

  add('m04', [
    ['Wann wird Type 1 verwendet?', 'Wenn der JTAC einzelne Angriffe kontrollieren muss und dafür <strong>angreifendes Lfz und Ziel</strong> bei jedem Angriff sehen und die Geometrie beurteilen muss.', 'Kap. III, Abs. 12a(1)'],
    ['Wann wird Type 2 verwendet?', 'Wenn der JTAC einzelne Angriffe kontrollieren muss, aber das Lfz beim Auslösen oder das Ziel nicht sehen kann. Dann nutzt er Zieldaten eines anderen Mittels mit Echtzeit-Informationen.', 'Kap. III, Abs. 12a(2)'],
    ['Wann wird Type 3 verwendet?', 'Wenn der JTAC mehrere Angriffe innerhalb eines Gefechts freigeben will – unter bestimmten Einschränkungen (Zeit, Raum, FAH, Zielart).', 'Kap. III, Abs. 12a(3)'],
    ['Hängen Kontrollart und Angriffsmethode zusammen?', 'Nein. Sie sind unabhängig: Jede Kontrollart kann mit BOT oder BOC kombiniert werden.', 'Kap. III, Abs. 12b'],
    ['Sollen GPS- oder INS-Waffen unter Type 1 kontrolliert werden?', 'Nein. Die Geometrie des Lfz sagt nichts über die Flugbahn der Waffe – sie fliegt zur eingegebenen Koordinate.', 'Kap. III, Abs. 12a(1)'],
    ['Was verlangt Bomb on Target (BOT) von der Besatzung?', 'Sie muss das Ziel bzw. den Zielpunkt selbst erfassen – TALLY, CAPTURED oder CONTACT (Marke).', 'Kap. III, Abs. 12b'],
    ['Was kennzeichnet Bomb on Coordinate (BOC)?', 'Die Besatzung setzt die Waffe auf die Koordinate aus dem CAS-Brief und muss das Ziel nie erfassen. Nach dem Readback verändert sie die Koordinate nicht mehr.', 'Kap. III, Abs. 12b(2)'],
    ['Wer liest bei BOT und wer bei BOC zurück?', 'BOT: nur die Führungsmaschine (andere auf Anforderung). BOC: jedes Lfz, das Waffen einsetzt, aus System oder Waffe.', 'Kap. III, Abs. 12b(1)'],
    ['Bis wann darf die Kontrollart geändert werden?', 'Vor dem IN-Call (Type 1/2) bzw. vor COMMENCING ENGAGEMENT (Type 3). Danach: Abbruch und neuer Brief.', 'Kap. III, Abs. 12d'],
    ['Wann darf das Wort „CLEARED“ fallen?', 'Nur, wenn tatsächlich Waffen eingesetzt werden sollen. Nicht-standardisierte Freigabeformulierungen vermeiden.', 'Kap. III, Abb. III-6'],
    ['Wie lautet „Trockenanflug“ unter Type 3?', '„Type 3, CONTINUE DRY“.', 'Kap. III, Abb. III-6'],
    ['Können zwei Kontrollarten gleichzeitig gelten?', 'Ja, für verschiedene Flights.', 'Kap. III, Abs. 12d'],
    ['Wer behält immer die Abort-Befugnis?', 'Der JTAC bzw. FAC(A) – in allen Kontrollarten. Auch ein JFO darf abbrechen.', 'Kap. III, Abs. 12'],
    ['Nenne Beispiele, wann Type 2 passen kann.', 'Troops in Contact, Nacht, schlechtes Wetter, Waffeneinsatz aus großer Höhe oder großer Entfernung (Standoff).', 'Kap. III, Abs. 12a(2)'],
    ['Welche Calls muss die Besatzung bei Type 3 machen?', '„COMMENCING ENGAGEMENT“ vor dem ersten Waffeneinsatz und „ENGAGEMENT COMPLETE“ am Ende.', 'Kap. III, Abs. 12a(3)'],
    ['Ist eine Kontrollart an eine Munition gebunden?', 'Nein. Die Kontrollarten sind nicht munitionsabhängig und stehen auch nicht für ein bestimmtes Risikoniveau.', 'Kap. III, Abs. 12']
  ]);

  add('m05', [
    ['Nenne die 12 Schritte des CAS Execution Template.', 'Routing/Safety of Flight · Check-in · Situation Update · Game Plan · CAS Brief · Remarks/Restrictions · Readbacks · Correlation · Attack · Assess · BDA · Routing/Safety of Flight.', 'Kap. V, Abb. V-1'],
    ['Wofür steht MNPOPCA?', 'Mission Number · Number and Type of Aircraft · Position and Altitude · Ordnance · Playtime · Capabilities · Abort Code.', 'Kap. V, Abb. V-4'],
    ['Was gilt, wenn beim Check-in kein Abort Code genannt wird?', 'Standard ist „ABORT, ABORT, ABORT“. Bei unsicherer Verbindung gilt das Verfahren aus SPINS oder SOP.', 'Kap. V, Abs. 2b(2)'],
    ['Was muss ein Game Plan mindestens enthalten?', 'Kontrollart und Angriffsmethode (Type und BOT/BOC).', 'Kap. V, Abs. 2a(3)'],
    ['Welche fünf Zieldaten entwickelt der JTAC zuerst?', 'Zielhöhe · Zielbeschreibung · Zielposition · Position der eigenen Kräfte · gewünschte Wirkung des Kommandeurs.', 'Kap. V, Abs. 2a(1)'],
    ['Welche Reihenfolge nennt JP 3-09.3 beim Entwickeln des Game Plans?', 'Gewünschte Wirkung → Art der TAC → Angriffsmethode → Abstand der Lfz → Sensorplan.', 'Kap. V, Abs. 2a(3)'],
    ['Welche Faustwerte nennt JP 3-09.3 für den Abstand zwischen Lfz?', '30 s bei Type 1 mit ungelenkter Munition, etwa 1 min bei LGB aus mittlerer Höhe, über 2 min bei PGM aus mittlerer bis großer Höhe, wenn über Folgeangriffe entschieden werden soll.', 'Kap. V, Abs. 2a(3)'],
    ['Was sagt der JTAC beim Erstkontakt zuerst?', 'Routing bzw. Halteanweisung, andere Lfz im Raum („you are the only aircraft on station“) und weitere Flugsicherheitsinformationen (Bedrohung, Wetter, Gelände).', 'Kap. V, Abs. 2b(1)'],
    ['Was sagt der JTAC, wenn ein Angriff läuft und ein neues Lfz einchecken will?', '„Hold your check-in, attack in progress“ – erst nach dem Angriff den Check-in aufnehmen.', 'Kap. V, Abs. 2b(2)'],
    ['Welche Elemente hat ein Situation Update?', 'Feindlage, Boden-Luft-Bedrohung, eigene Lage, Hinweise, Wetter, Gefahren – auftragsbezogen und so knapp wie möglich.', 'Kap. V, Abs. 2b(3)'],
    ['Wie gibt man eigene Kräfte im Situation Update an?', 'Möglichst ohne Koordinaten, z. B. „all friendlies are east of the 94 easting“ oder über benannte Geländepunkte.', 'Kap. V, Abs. 2b(3)'],
    ['Was bedeutet „as fragged“ beim Check-in?', 'Die Besatzung ist wie in der ATO geplant (Munition, Zeiten). Abweichungen nennt sie mit „with exception …“.', 'Kap. V, Abs. 2b(2)'],
    ['Wann ist die Situation Update besonders wichtig neben CAS?', 'Ihr Format dient auch der Gefechtsübergabe (Battlefield Handover). Die Besatzung meldet, ob sie die aktuelle Lage hat.', 'Kap. V, Abs. 2b(3)'],
    ['Was fragt der JTAC nach, wenn es im Check-in fehlt?', 'U. a. Lasercodes der LGB, Hellfire-Modell, Zünderoptionen, VDL- und SITREP-Codes, Kartenversion, FAC(A)-Fähigkeit, Sensoren, VMF/Link 16.', 'Kap. V, Abs. 2b(2)']
  ]);

  add('m06', [
    ['Welche Teile des 9-Line sind nach JP 3-09.3 Pflicht-Readback?', 'Line 4, Line 6 und alle Restrictions. Der JTAC kann weitere Readbacks verlangen.', 'Kap. V, Abb. V-9'],
    ['Welche zwei NATO-Abweichungen nennt JP 3-09.3 zum 9-Line?', 'NATO-FACs nennen die Zeilentitel jeder Zeile, und die ATP-3.3.2.1 verlangt Line 8 als Pflicht-Readback.', 'Kap. V, Abs. 2b(5)'],
    ['Was steht in Line 2?', 'Kurs in Grad magnetisch vom IP bzw. Mittelpunkt der BP zum Ziel; dazu der Offset (links/rechts), wenn gefordert.', 'Kap. V, Abb. V-9'],
    ['In welcher Einheit steht Line 3?', 'Jets: Seemeilen vom IP zum Ziel auf eine Nachkommastelle. Hubschrauber: Meter vom Mittelpunkt der BP, auf 100 m.', 'Kap. V, Abb. V-9'],
    ['In welcher Einheit steht Line 4 – und was, wenn das nicht passt?', 'Fuß MSL ist Standard. Ein anderes Bezugssystem (z. B. Höhe über Ellipsoid, HAE) muss ausdrücklich genannt werden.', 'Kap. V, Abs. 2b(5)'],
    ['Was gehört bei einem Laser-Handoff in Line 7?', 'Rufzeichen der beleuchtenden Plattform, das Wort „laser“ und der vierstellige Code (z. B. „Blackjack laser, code 1688“).', 'Kap. V, Abs. 2b(5)'],
    ['Was steht in Line 8?', 'Himmelsrichtung (Haupt- oder Nebenrichtung) und Entfernung in Metern <strong>vom Ziel</strong> zu den nächsten eigenen Kräften, z. B. „South 300“. Der JTAC ist nicht unbedingt der Nächste.', 'Kap. V, Abs. 2b(5)'],
    ['Wie wird der 9-Line übermittelt?', 'In drei Übertragungen à drei Zeilen, mit mäßigem Tempo, ohne Zeilennummern, nicht stückweise und nicht außer der Reihe.', 'Kap. V, Abs. 2b(5)'],
    ['Womit beginnt der Brief, wenn die Lines 1–3 entfallen?', 'Mit „From the overhead“ bzw. „Lines 1-3 N/A“ und dann „Elevation …“.', 'Kap. V, Abs. 2b(5)'],
    ['Welche Angaben sind immer Restrictions?', 'Danger Close mit Initialen · ACAs · FAHs · seitliche bzw. Höhenstaffelung · Freigabe zum Verlassen der BP · TOT/TTT · PLA-Punkt.', 'Kap. V, Abs. 2b(6)'],
    ['Wo steht die TOT im Brief?', 'Als letzte Restriction, damit das Ende des Briefs erkennbar ist. Noch keine TOT: „Standby TOT“ oder „TOT will be issued after correlation“.', 'Kap. V, Abs. 2b(6)'],
    ['Was sagt die Stellenzahl einer Koordinate aus?', 'Die Präzision, nicht die Genauigkeit.', 'Kap. V, Abs. 2b(5)'],
    ['Wie spricht man Lat/Long im 9-Line?', 'Hemisphäre zuerst, z. B. „North …“; Format vorher abstimmen.', 'Kap. V, Abs. 2b(5)'],
    ['Wie beschreibt man ein bewegtes Ziel?', 'Position entlang einer Route bzw. Ausgangspunkt, Richtung und Geschwindigkeit. Vor der Freigabe Lines 4, 6, 8 und Restrictions aktualisieren und zurücklesen lassen.', 'Kap. V, Abs. 2b(5)'],
    ['Wie korrigiert der JTAC einen falschen Readback?', 'Er wiederholt den falschen Teil mit Betonung, z. B. „be advised, final attack headings 1-8-0 through 2-1-0“.', 'Kap. V, Abs. 2b(7)'],
    ['Wie gibt man mehrere Ziele in einem Brief?', 'Nach dem Standard-Brief für jedes weitere Ziel Lines 4, 6 und 8 nennen – vor den Remarks.', 'Kap. V, Abs. 2b(5)']
  ]);

  add('m07', [
    ['Was ist Korrelation?', 'Der Vorgang, mit dem der JTAC sicherstellt, dass die angreifende Besatzung bzw. ein Dritter das richtige Ziel oder die richtige Marke erfasst hat. Sie ist bei jedem CAS-Angriff nötig.', 'Kap. III, Abs. 12b'],
    ['Wann ist die Korrelation bei BOC abgeschlossen?', 'Mit dem korrekten Readback von Line 4 und 6 aus dem System und den Restrictions. Bei einem Beleuchter von außen muss trotzdem mit diesem korreliert werden.', 'Kap. V, Abs. 2b(8)'],
    ['Welche Formulierung vermeidet man bei der Zielbestätigung?', '„That’s your target“. Besser eindeutig: „The third vehicle is your target.“', 'Kap. V, Abs. 2b(8)'],
    ['Wofür steht FIDO?', 'From a point · In a direction · Distance to travel · Object seen.', 'Kap. V, Abs. 2b(8)'],
    ['Wie viele Himmelsrichtungen pro Talk-on-Spruch?', 'Höchstens zwei.', 'Kap. V, Abs. 2b(8)'],
    ['Wie gibt man Richtungen beim VDL-Talk-on – und wie beim Sparkle-Walk-on?', 'VDL: oben, unten, links, rechts im Bild. Sparkle-Walk-on: Himmelsrichtungen, nie links/rechts. Genau umgekehrt!', 'Kap. V, Abs. 2b(8)'],
    ['Wie nah muss eine Steilfeuer-Markierung am Ziel liegen?', 'Am wirksamsten innerhalb von 100 m, innerhalb von 300 m meist ausreichend.', 'Kap. III, Abs. 14d'],
    ['Wann soll die Markierung liegen?', 'Bei Jets im Tiefflug 30–45 s vor TOT/TTT; IR-Markierungen 20–30 s vorher oder auf Anforderung.', 'Kap. III, Abs. 14d; Abb. III-24'],
    ['Welche Markierung ist am wenigsten wünschenswert?', 'Die Markierung der eigenen Kräfte.', 'Kap. III, Abs. 14d'],
    ['Darf Full-Motion-Video alleinige Quelle der Zielidentifizierung sein?', 'Nein. Video-Downlink ergänzt die CAS-Verfahren, ändert sie aber nicht.', 'Kap. III, Abs. 22'],
    ['Ab welcher Schrägentfernung sind Farben mit bloßem Auge kaum erkennbar?', 'Ab etwa 15.000 ft.', 'Kap. V, Abb. V-10'],
    ['Wie kündigt man einen Talk-on an?', 'Art und Version nennen, z. B. „advise when ready for a GRG talk-on using the version 4.8 GRG“.', 'Kap. V, Abs. 2b(8)'],
    ['Muss der JTAC bei BOT eine aktualisierte Koordinate der Besatzung zurücklesen?', 'Nein – kein „Ping-Pong“ mit Koordinaten.', 'Kap. V, Abs. 2b(8)'],
    ['Wie korrigiert man von einer Markierung aus?', 'Himmelsrichtung und Meter, z. B. „Razor 53, from the mark, east 50“. Die Besatzung meldet „CONTACT the mark“.', 'Kap. V, Abs. 2b(8)'],
    ['Was ist die 2:1-Regel beim Talk-on?', 'Auf zwei Anweisungen folgt eine bestätigende Frage.', 'Kap. V, Abs. 2b(8)']
  ]);

  add('m08', [
    ['Wie groß ist die Laser-Sicherheitszone?', 'Ein 20°-Keil (±10°) mit Spitze am Ziel, zentriert auf die Linie Ziel–Beleuchter, vom Boden bis unendlich.', 'Kap. III, Abb. III-9'],
    ['Wie groß ist die optimale Laser-Angriffszone?', 'Ein 120°-Keil (±60°) um die Linie Ziel–Beleuchter; bevorzugt 90° (±45°). Anflug also 10–60° von der Linie, bevorzugt 10–45°.', 'Kap. III, Abb. III-9'],
    ['Wie werden Lasercodes übermittelt?', 'Immer vierstellig. Der JTAC bestätigt den Code vor der Durchführung.', 'Kap. III, Abs. 13a'],
    ['Kann man den Code einer LGB im Flug ändern?', 'Meist nicht – LGB-Codes werden vor dem Flug eingestellt. Maverick und Hellfire lassen sich im Flug umstellen.', 'Kap. III, Abs. 13a'],
    ['Darf ein LST alleinige Quelle der Zielidentifizierung sein?', 'Nein (WARNING in JP 3-09.3).', 'Kap. III, Abs. 13a'],
    ['Nenne die fünf Grundbedingungen für Lasereinsatz.', 'Sichtlinie Beleuchter–Ziel und Ziel–Suchkopf · kompatible Codes · Anflugrichtung erlaubt Empfang der Reflexion · richtig getimtes und ausreichend langes Beleuchten · Auslösen im Wurfbereich.', 'Kap. III, Abs. 13a'],
    ['Was passiert, wenn zu früh beleuchtet wird?', 'Die Waffe steuert zu früh und schlägt zu kurz ein.', 'Kap. III, Abs. 13a'],
    ['Welche Hellfire-Codes geben die höchste Trefferwahrscheinlichkeit, und welcher Abstand gilt bei Schnellfeuer?', 'Codes 1111–1488; mindestens 8 s zwischen den Flugkörpern.', 'Kap. III, Abs. 13a'],
    ['Wie groß ist der Laserfleck bei 1 mrad Strahldivergenz auf 1.000 m?', 'Etwa 1 m.', 'Kap. III, Abs. 13a'],
    ['Wo wird die Laser Target Line (LTL) gegeben?', 'In den Remarks, in Grad magnetisch vom Beleuchter zum Ziel.', 'Kap. V, Abs. 2b(6)'],
    ['Was bedeutet SPOT – und reicht das?', 'Reflektierte Laserenergie ist erfasst. Es ist noch keine Korrelation; danach z. B. fragen „what do you have under your crosshairs?“', 'Kap. V, Abs. 2b(8)'],
    ['Was tun bei NEGATIVE LASER?', 'Laser-Aufbau und Ziel prüfen, Code prüfen, Position des Lfz prüfen, neu beginnen – sonst andere Markierung.', 'Kap. V, Abs. 2b(8)'],
    ['Welche Calls gehören zum Sparkle-Ablauf?', 'SPARKLE (markieren) · SNAKE (Acht) · PULSE (blinken) · STEADY (anhalten) · CEASE SPARKLE (aus) · CONTACT SPARKLE (gesehen) · MATCH SPARKLE (überlagern).', 'Kap. III, Abb. III-22'],
    ['Was muss die Besatzung bei reiner IR-Markierung vom Boden melden?', 'VISUAL (eigene Stellung) und TALLY oder CONTACT SPARKLE – vor der Freigabe.', 'Kap. V, Abs. 2b(8)'],
    ['Warum ist ROPE bei Hubschraubern nicht empfohlen?', 'Das Kreisen mit dem IR-Pointer um das Lfz kann Nachtsichtgeräte schädigen.', 'Kap. III, Abb. III-22'],
    ['Was sagt die Besatzung zehn Sekunden vor dem gewünschten Beleuchten?', '„TEN SECONDS“, dann „LASER ON“. Der Beleuchter antwortet „LASING“ mit Code.', 'Kap. III, Abb. III-21']
  ]);

  add('m09', [
    ['Nenne die TLE-Kategorien.', 'CAT I 0–6 m · II 7–15 m · III 16–30 m · IV 31–91 m · V 92–305 m · VI über 305 m.', 'Kap. III, Abb. III-5'],
    ['Woraus setzt sich der TLE zusammen?', 'Circular Error, Vertical Error und Spherical Error, jeweils mit 90 % Wahrscheinlichkeit.', 'Kap. III, Abs. 11c'],
    ['Welche Methode der Zielortung ist am ungenauesten, welche am genauesten?', 'Am ungenauesten: Geländevergleich mit Karte. Am genauesten: zertifizierte Zielsoftware (Mensuration).', 'Kap. V, Abs. 2a(1)'],
    ['Welches Bezugssystem gilt standardmäßig?', 'WGS-84 – Abweichungen werden beim Check-in bzw. in der Situation Update bestätigt.', 'Kap. V, Abs. 2b(5)'],
    ['Welche Zeile ist am schwersten richtig zu schätzen?', 'Line 4, die Zielhöhe. Steilere Einschlagwinkel verringern die Wirkung eines Höhenfehlers.', 'Kap. V, Abs. 2a(1)'],
    ['Was ist ein Strich (mil)?', '1/6400 des Vollkreises. Ein Strich entspricht etwa 1 m auf 1.000 m Entfernung.', [['atp30930', 'Kap. 3, Abs. 3-20']]],
    ['Wie rechnet man Grad in Strich um?', 'Grad × 17,8 (genau: × 6400 ÷ 360).', [['atp30930', 'Kap. 3, Abs. 3-22']]],
    ['Wie lautet die Mil-Formel?', 'W = R × m: Breite in Metern = Entfernung in Kilometern × Winkel in Strich.', [['atp30930', 'Kap. 3, Abs. 3-21']]],
    ['Welche Auflösung haben 6-, 8- und 10-stellige MGRS-Koordinaten?', '100 m, 10 m, 1 m.', 'Kap. V, Abs. 2b(5)'],
    ['Welchen TLE soll ein FAC(A) im Allgemeinen erreichen?', 'CAT II oder besser.', 'Kap. II'],
    ['Wie gibt man den TLE in der Lage an?', 'Z. B. „Cat II, 10-digit grid to follow, advise when ready for 9-line“. Die TOT wird nicht für mehr Präzision verzögert, wenn die Wirkung auch so erreichbar ist.', 'Kap. III, Abs. 11c'],
    ['Wer zertifiziert Mensuration?', 'Die NGA (National Geospatial-Intelligence Agency) bzw. nach ihren Standards ausgebildetes Personal.', 'Kap. III, Abs. 11c'],
    ['Wie beschreibt man ein Ziel in Line 5?', 'Knapp und konkret, z. B. „five APCs in the open“ – und das Wichtige zuerst: „HVT in 2-story building“ statt „2-story building“.', 'Kap. V, Abs. 2b(5)'],
    ['Was gibt man bei einem Flächenziel bzw. Linienziel an?', 'Fläche: Mittelpunkt bzw. größte Konzentration. Linie: Zielpunkt, Ausrichtung und Entfernung zu beiden Enden oder zwei Koordinaten.', 'Kap. V, Abs. 2b(5)']
  ]);

  add('m10', [
    ['Was ist der Unterschied zwischen permissiven und restriktiven FSCMs?', 'Permissive erleichtern das Bekämpfen von Zielen, restriktive schützen eigene Kräfte bzw. Objekte.', 'Kap. III, Abs. 14a'],
    ['Was ist die CFL?', 'Coordinated Fire Line: jenseits davon dürfen konventionelle Steilfeuer-Unterstützungswaffen jederzeit im Bereich des einrichtenden Stabs ohne weitere Koordinierung wirken. Luftraumkoordinierung bleibt nötig.', 'Kap. III, Abs. 14a'],
    ['Was ist die FSCL – und was ist sie nicht?', 'Sie erleichtert das schnelle Bekämpfen von Gelegenheitszielen jenseits davon; gilt für alle Feuer gegen Bodenziele. Sie ist <strong>keine Grenze</strong> und schafft <strong>kein FFA</strong>.', 'Kap. III, Abs. 14a'],
    ['Wer legt die FSCL fest?', 'Der Befehlshaber der Land- bzw. amphibischen Kräfte, möglichst entlang erkennbarer Geländemerkmale.', 'Kap. III, Abs. 14a'],
    ['Was erlaubt eine Free-Fire Area (FFA)?', 'Jedes Waffensystem darf ohne weitere Koordinierung mit dem einrichtenden Stab feuern (auch Notabwurf). PID, CDE, ROE und SPINS gelten trotzdem.', 'Kap. III, Abs. 14a'],
    ['Welche Ausnahmen gibt es bei einer No-Fire Area (NFA)?', '1. Der einrichtende Stab genehmigt im Einzelfall. 2. Feind in der NFA greift eigene Kräfte an – dann minimale Gewalt zur Verteidigung.', 'Kap. III, Abs. 14a'],
    ['Was ist eine RFL?', 'Restrictive Fire Line zwischen aufeinander zu bewegenden eigenen Kräften: kein Feuer und keine Wirkung über die Linie ohne Koordinierung.', 'Kap. III, Abs. 14a'],
    ['Was ist eine ACA, und welche Arten gibt es?', 'Airspace Coordination Area: Luftraumblock im Zielgebiet, in dem eigene Lfz vor eigenem Bodenfeuer einigermaßen sicher sind. Formal (über ACO/ATO/SPINS) oder informell (kurzfristig durch den unterstützten Kommandeur).', 'Kap. III, Abs. 14a(2)(d)'],
    ['Welche vier Arten der Staffelung von Artillerie und CAS gibt es?', 'Seitlich, nach Höhe, kombiniert seitlich und nach Höhe sowie zeitlich.', 'Kap. III, Abb. III-13 bis III-16'],
    ['Was muss bei Höhenstaffelung immer genannt werden?', 'Die Höhe in Fuß MSL.', 'Kap. III, Abs. 14a(2)(d)'],
    ['Was ist der Unterschied zwischen TOT und TTT?', 'TOT: Uhrzeit, zu der die Waffen einschlagen (GPS-Zeit). TTT: Minuten und Sekunden ab einem Zeitsignal bis zur Wirkung („TIME TO TARGET 5+00, READY, READY, HACK“).', 'Kap. III, Abs. 14a'],
    ['Wofür stehen die Keyhole-Punkte?', 'A = Nord, B = Ost, C = Süd, D = West, E = Echo (meist das Ziel, auch Überkopf). Die Zahl ist die Entfernung in NM, z. B. „Alpha 8“.', 'Kap. III, Abb. III-18'],
    ['Welche Entfernungen sind für IPs und BPs üblich?', 'IPs für Jets 5–15 NM vom Ziel; Battle Positions für Hubschrauber 1–5 km.', 'Kap. III, Abs. 14b'],
    ['Was ist der Offset?', 'Die Seite der Linie IP–Ziel, auf der die Besatzung manövrieren darf – vom Verlassen des IP bis zum Auslösen bzw. Abflug.', 'Kap. III, Abb. III-19'],
    ['Was bedeutet eine FAH als Himmelsrichtung?', '±45° um den Kurs: „from north to south“ = 180 ± 45, also 135–225.', 'Kap. V, Abs. 2a(5)'],
    ['Welche Faustwerte gelten für SEAD-Zeiten?', 'Jets 8 NM/min (A-10 5 NM/min), Hubschrauber 4 km/min. SEAD dauert vom Eintritt des ersten bis zum Austritt des letzten Lfz aus der Wirkreichweite.', 'Kap. V, Abb. V-2'],
    ['Wogegen ist SEAD am wirksamsten, wogegen am wenigsten?', 'Am wirksamsten gegen ortsfeste Bedrohungen, am wenigsten gegen MANPADS und bewegliche Systeme. Zuerst prüfen, ob Flugprofile die Bedrohung umgehen.', 'Kap. III, Abs. 14d']
  ]);

  add('m11', [
    ['Wie ist ein Call for Fire aufgebaut?', 'Sechs Elemente in drei Übertragungen: 1. Beobachterkennung + Warning Order · 2. Zielposition · 3. Zielbeschreibung, Einsatzart, Feuer- und Feuerleitart.', [['atp30930', 'Kap. 4']]],
    ['Was enthält die Warning Order?', 'Art des Auftrags (z. B. ADJUST FIRE, FIRE FOR EFFECT, SUPPRESS, IMMEDIATE SUPPRESSION, IMMEDIATE SMOKE), Größe der wirkenden Einheit und Methode der Zielortung.', [['atp30930', 'Kap. 4']]],
    ['Welche Methoden der Zielortung gibt es im CFF?', 'Grid, Laser Grid, Polar, Laser Polar, Shift from a Known Point.', [['atp30930', 'Kap. 4']]],
    ['Wie gibt man einen Shift from a Known Point?', 'OT-Richtung, seitlich LEFT/RIGHT in Metern, Entfernung ADD/DROP auf 100 m, Höhe UP/DOWN auf 5 m (bedeutsam ab 35 m).', [['atp30930', 'Kap. 4']]],
    ['Ab wann ist Steilfeuer DANGER CLOSE?', 'Ziel bzw. Einschläge innerhalb 600 m eigener Truppen bei Mörsern und Artillerie, innerhalb 750 m bei 5-Zoll-Schiffsgeschützen und TLAM.', [['atp30930', 'Kap. 4, Abs. 4-34']]],
    ['Ist Danger Close im Steilfeuer dasselbe wie die RED?', 'Nein. Risk-Estimate Distances stehen in der JFIRE und sind etwas anderes.', [['atp30930', 'Kap. 4, Abs. 4-34']]],
    ['Wie läuft „AT MY COMMAND“?', 'Die FDC meldet „IS READY“, der Beobachter befiehlt „FIRE“.', [['atp30930', 'Kap. 4']]],
    ['Wann ist SPLASH Pflicht?', 'SPLASH kommt 5 s vor dem Einschlag; Pflicht bei Luftbeobachtern und Steilfeuer in der oberen Winkelgruppe.', [['atp30930', 'Kap. 4']]],
    ['Wie berechnet man die Seitenkorrektur?', 'Abweichung in Strich × OT-Faktor (OT-Entfernung in Tausend Metern), auf 10 m gerundet, entgegen der Beobachtung. Unter 30 m ist eine kleine Korrektur.', [['atp30930', 'Kap. 5, Abs. 5-13 bis 5-16']]],
    ['Wie läuft das schrittweise Eingabeln?', 'Gabeln von 800, 400, 200, 100 m; Wirkungsschießen, wenn die Gabel auf 100 m geteilt ist (innerhalb 50 m).', [['atp30930', 'Kap. 5']]],
    ['Wie schießt man bei Danger Close ein?', 'Kriechendes Feuer: Korrekturen höchstens 100 m, vom Einschlag aus, der den eigenen Truppen am nächsten liegt.', [['atp30930', 'Kap. 5, Abs. 5-27']]],
    ['Was bedeutet CHECK FIRING?', 'Sofortiger Halt des Feuers, z. B. aus Sicherheitsgründen.', [['atp30930', 'Kap. 4']]],
    ['Welche Zeilen hat der JFO Target Brief – und welche dürfen nicht fehlen?', 'Lines 4 bis 8 (Höhe, Beschreibung, Position, Markierung, eigene Kräfte), dann „advise ready for remarks“. Line 4 und Line 8 dürfen nicht fehlen.', 'Kap. V, Abb. V-16'],
    ['Darf ein JFO die Waffenfreigabe geben?', 'Nein. Er darf aber jederzeit abbrechen.', 'Kap. V, Abs. 6'],
    ['Was ist beim CFF an ein SOF-Gunship besonders?', 'Die Übermittlung des Feuerauftrags ist die Freigabe – außer bei Danger Close („Cleared Danger Close“ und Initialen). Mit „At My Command“ meldet das Gunship „Ready to Fire“.', 'Kap. III, Abs. 19']
  ]);

  add('m12', [
    ['Welche Höhenbänder unterscheidet JP 3-09.3 für Starrflügler?', 'Sehr tief unter 500 ft AGL, tief 500–8.000 ft AGL, mittel bis hoch über etwa 8.000 ft AGL; Bombenwurf aus großer Höhe über 15.000 ft AGL.', 'Kap. III, Abs. 15'],
    ['Welche Formen des Geländeflugs gibt es bei Hubschraubern?', 'Low Level, Contour und Nap of the Earth (NOE).', 'Kap. III, Abs. 16'],
    ['Welche Schussarten haben Kampfhubschrauber?', 'Schießen im Schwebeflug, im Vorwärtsflug (running fire) und im Sturzflug (diving fire).', 'Kap. III, Abs. 16'],
    ['Wie ist der RW-CAS-5-Line aufgebaut?', '1. Observer/Warning Order/Game Plan · 2. eigene Position/Markierung · 3. Zielposition · 4. Zielbeschreibung/Markierung · 5. Remarks/Restrictions.', 'Kap. III, Abb. III-27'],
    ['Ist der 5-Line eine Freigabe?', 'Nein. Bei Army- und SOF-Besatzungen wird „At my command“ angehängt. Restrictions sind Readback-Pflicht.', 'Kap. III, Abb. III-27'],
    ['In welcher Form werden Koordinaten Bombern am liebsten gegeben?', 'Grad und Dezimalminuten (DD-MM.MMMM).', 'Kap. III, Abb. III-28'],
    ['Wie groß ist die typische Wheel-Orbit eines UAS?', 'Etwa 5–8 km (2,5–4,5 NM) Radius.', 'Kap. III, Abb. III-29'],
    ['Welche Aufgaben kann ein FAC(A) übernehmen (Brevity)?', 'BRIEF, STACK, MARK, CONTROL – klar zugewiesen und bestätigt.', 'Kap. V, Abs. 5'],
    ['Wann fordert man einen FAC(A) an?', 'Viele Lfz in kurzer Zeit oder engem Luftraum · schwieriges Gelände (Stadt, Wald) · begrenzte Markierung · schwierige Funkverbindung · ein Flieger über dem Ziel wird gebraucht.', 'Kap. III, Abs. 23'],
    ['Wann kann eine Show of Force sinnvoll sein?', 'Z. B. ohne passende Munition, wenn eigene Kräfte zu nah sind oder ROE nicht erfüllt, ohne genaue Feindposition, zur Beruhigung einer Einheit ohne Funk, zum Zerstreuen von Zivilisten oder gegenüber Personen mit möglicher feindlicher Absicht.', 'Kap. III, Abs. 20'],
    ['Ist eine digitale Nachricht eine Freigabe?', 'Nein. Digitale Informationen ersetzen keine Freigabe. Freigaben laufen primär per Sprache, digital nur ergänzend.', 'Kap. III, Abs. 21'],
    ['Welche Haltemuster gibt es?', 'Racetrack, Achterschleife und Wheel (Kreis um einen Punkt).', 'Kap. III, Abs. 15'],
    ['Welche Arten koordinierter Angriffe gibt es?', 'Combined (gleicher Anflugweg) oder sectored; jeweils simultan oder nacheinander.', 'Kap. III, Abb. III-23'],
    ['Wer hat bei koordinierten Angriffen Vorrang?', 'Abfliegende Lfz haben Vorrang. Der JTAC genehmigt alle Wiederholungsangriffe.', 'Kap. III, Abs. 15a'],
    ['Wodurch unterscheidet sich die Video-Talk-on-Sprache?', 'SLEW mit oben/unten/links/rechts, halbe Bildschirmbreite als Maßeinheit, Calls wie SET, CAPTURED, HOLLOW, HANDSHAKE.', 'Kap. III, Abb. III-36']
  ]);

  add('m13', [
    ['Wann muss der JTAC abbrechen?', 'Wenn das Lfz nicht auf das richtige Ziel ausgerichtet ist, wenn eigene Truppen gefährdet sind oder für die Sicherheit der Besatzung.', 'Kap. V, Abs. 2b(9)'],
    ['Wie funktioniert der Challenge-Reply-Abort-Code?', 'Die Führung nennt beim Check-in einen Challenge-Code. Der JTAC sucht die Antwort im Authentisierungsdokument, notiert sie und sendet sie nicht. Im Ernstfall: „ABORT DELTA, ABORT DELTA, ABORT DELTA“.', 'Kap. V, Abb. V-11'],
    ['Was gilt auf dem TAD nach dem IN-Call?', 'Alle anderen Funksprüche warten bis zur Freigabe oder zum Abbruch – nur ABORT darf jeder rufen.', 'Kap. V, Abs. 2b(9)'],
    ['Wer genehmigt Wiederholungsangriffe?', 'Bei Type 1 und 2 muss jeder Reattack angefordert und freigegeben werden. Bei Type 3 darf die Besatzung wiederholen, solange CLEARED TO ENGAGE gilt.', 'Kap. V, Abs. 2b(10)'],
    ['Wie korrigiert man nach Einschlägen?', 'Himmelsrichtung und Meter vom vorherigen Einschlag: „Razor 02, from lead’s hits, north 100“.', 'Kap. V, Abs. 2b(10)'],
    ['Wofür steht SALTR?', 'Size · Activity · Location · Time · Remarks.', 'Kap. V, Abs. 2b(11)'],
    ['Was muss eine BDA mindestens enthalten?', 'SUCCESSFUL, UNSUCCESSFUL oder UNKNOWN – bezogen auf die Absicht des Kommandeurs. Gemeldet wird für die Rotte, nicht je Lfz.', 'Kap. V, Abs. 2b(11)'],
    ['Was enthält der INFLTREP?', 'Rufzeichen, Mission Number, Ort, Zeit über dem Ziel, Ergebnisse, Bemerkungen (z. B. Wetter im Zielgebiet).', 'Kap. V, Abb. V-12'],
    ['Was ist die RED?', 'Risk-Estimate Distance: Entfernung, bei der die Wahrscheinlichkeit eines Ausfalls eigener Kräfte 0,1 % beträgt (1 zu 1.000).', 'Kap. III, Abs. 11d'],
    ['Was bedeutet Danger Close in CAS?', 'Waffeneinsatz innerhalb der 0,1-%-Pi-Entfernung. Der unterstützte Kommandeur übernimmt das Risiko; seine Initialen gehen über den JTAC an die Besatzung.', 'Kap. III, Abs. 11d'],
    ['Welche Anflugrichtung wählt man bei Danger Close?', 'Möglichst parallel zur Achse bzw. Ausrichtung der eigenen Kräfte.', 'Kap. III, Abs. 11d'],
    ['Was gilt bei CAS ohne JTAC?', 'Mehr Verantwortung bei der Besatzung; der Anforderer informiert seine Führung, der Kommandeur trägt das Risiko. Die Besatzung erarbeitet Zieldaten und eigene Einschränkungen im Dialog; Bodenpersonal darf „abort“ rufen.', 'Kap. V, Abs. 4'],
    ['Welche Rolle können CAS-Controller bei Personnel Recovery übernehmen?', 'Sie können On-Scene Commander werden.', 'Kap. I, Abs. 11'],
    ['Was ist ein Post-Launch Abort (PLA)?', 'Abbruch nach dem Start einer Waffe, die das zulässt (z. B. Hellfire). Der unterstützte Kommandeur genehmigt ihn vorab; PLA-Punkt bzw. Richtung und Entfernung stehen in den Restrictions.', 'Kap. III, Abs. 11f']
  ]);

  add('m14', [
    ['Wie ist die NATO-Doktrin für CAS und AI gegliedert?', 'AJP-3 → AJP-3.3 (Air and Space Operations) → AJP-3.3.2 (CAS und AI) → ATP-3.3.2.1 (TTP für CAS und AI).', [['ajp33', 'Abs. 11–13 (Einleitung)']]],
    ['Was bedeuten * und ** in der US-Brevity (ATP 1-02.1)?', '* = Bedeutung weicht von der NATO-Brevity ab. ** = kein NATO-Brevity-Begriff.', [['atp1021', 'Kap. I']]],
    ['Welche CAS-Brevity-Begriffe sind laut ATP 1-02.1 kein NATO-Brevity (**)?', 'U. a. CLEARED TO ENGAGE, ENGAGEMENT COMPLETE, STARE, SQUIRTER, SLEW, SHOT, CHECK FIRE und MARK (Markierungsgeschoss).', [['atp1021', 'Kap. I']]],
    ['Welche CAS-Begriffe haben bei der NATO eine andere Bedeutung (*)?', 'U. a. CAPTURED, NO JOY, MATCH, CEASE, RIFLE, BINGO, JOKER, ROLEX, AS FRAGGED, SPLASH (5-s-Warnung), HOLLOW (Video).', [['atp1021', 'Kap. I']]],
    ['Wie heißt der JTAC in der Bundeswehr auch?', 'Fliegerleitoffizier.', [['bw1', '']]],
    ['Wie ist ein JFST zusammengesetzt (Beispiel Fallschirmjägerregiment 31)?', 'Sechs Soldaten in zwei Trupps: mindestens ein JTAC, ein Luft-/Boden-Feldwebel, Beobachtungsoffizier, Beobachtungsfeldwebel und zwei Beobachtungssoldaten.', [['bw2', '']]],
    ['Was macht das JFSCT?', 'Es berät den Kommandeur in der taktischen Feuerunterstützung, koordiniert die Wirkmittel auf Verbandsebene und die Luftraumordnung im Einsatzraum.', [['bw2', '']]],
    ['Wo erhalten Fliegerleitoffiziere der Bundeswehr ihre Lizenz?', 'U. a. bei der jährlichen Übung Stoneage in Munster.', [['bw1', '']]],
    ['Warum enthält diese App nichts aus ATP-3.3.2.1 und JFIRE?', 'Die ATP ist NATO UNCLASSIFIED und nicht zur Veröffentlichung freigegeben; die JFIRE ist CUI mit eingeschränkter Weitergabe. Werte lernst du am Original.', [['atp3321', ''], ['jfire', '']]],
    ['Auf welche ATP-Edition verweist JP 3-09.3 von 2014?', 'Auf ATP-3.3.2.1 Edition C. Deine Edition D (2019) ist neuer – deshalb der Abgleich in jedem Modul.', 'Kap. III, Abs. 26'],
    ['Wann kann bei multinationalen Besatzungen Type 1 die Wahl sein?', 'Bei Sprachbarrieren oder geringem Vertrauen in eine Plattform bzw. Besatzung.', 'Kap. III, Abs. 12a(1)'],
    ['Welches NATO-Wort entspricht BUZZER (Funkstörung)?', 'CHATTER.', [['atp1021', 'Kap. I']]]
  ]);
})();
