/* Prüfungsfragen (Single Choice). Die richtige Antwort steht beim Schreiben immer an erster Stelle;
   die Reihenfolge wird im Quiz gemischt. */
(function () {
  'use strict';
  var Q = window.LP.quiz;
  function add(m, list) {
    list.forEach(function (x, i) {
      var src = typeof x[3] === 'string' ? [['jp3093', x[3]]] : (x[3] || null);
      Q.push({ id: m + '-q' + (i + 1), m: m, q: x[0], o: x[1], a: 0, e: x[2], src: src });
    });
  }

  add('m01', [
    ['Was ist für die Einstufung eines Angriffs als CAS entscheidend?', ['Die Notwendigkeit detaillierter Integration mit Feuer und Bewegung eigener Kräfte', 'Eine Entfernung von weniger als 1.000 m zu eigenen Truppen', 'Der Einsatz von Kampfhubschraubern', 'Eine sofortige Anforderung über das JARN'], '„Close“ ist keine feste Entfernung; entscheidend ist die Integration.', 'Kap. I, Abs. 2'],
    ['Wer darf Terminal Attack Control ausüben?', ['Zertifizierte bzw. qualifizierte JTAC oder FAC(A)', 'Jeder Offizier der Kampftruppe', 'Der JFO', 'Der TAC(A)'], 'TAC ist an Zertifizierung bzw. Qualifikation gebunden. JFO und TAC(A) üben keine TAC aus.', 'Kap. I, Abs. 2'],
    ['Was darf Personal ohne JTAC-Qualifikation bei TGO nicht?', ['Manöver steuern oder Waffen freigeben', 'Ziele mit Laser beleuchten', 'Zielinformationen übermitteln', 'Markierungen setzen'], 'TGO liefert Zielinformationen, ersetzt aber keine TAC.', 'Kap. I, Abs. 2'],
    ['Wie unterscheidet sich Air Interdiction laut NATO von CAS?', ['Bei AI ist keine detaillierte Entflechtung mit der Landkomponente nötig', 'AI wird nur von Bombern geflogen', 'AI braucht immer einen FAC(A)', 'AI richtet sich nur gegen Luftziele'], 'AI wirkt so weit von eigenen Kräften entfernt, dass eine detaillierte Entflechtung nicht wesentlich ist.', [['ajp33', 'Abs. 2.39–2.42']]],
    ['Ist Close Combat Attack (CCA) der US Army ein CAS-Verfahren?', ['Nein, CCA ist nicht gleichbedeutend mit CAS', 'Ja, es ist der Army-Begriff für CAS', 'Nur nachts', 'Nur bei Type 3'], 'JP 3-09.3 stellt klar: CCA ist nicht CAS.', 'Kap. I, Abs. 4'],
    ['Was ist ein JAAT?', ['Gemeinsamer Einsatz von Starrflügler-CAS und Kampfhubschraubern', 'Ein gemeinsames Angriffsteam aus JTAC und JFO', 'Ein Artillerie-Feuerplan', 'Ein Verfahren der Luftbetankung'], 'Joint Air Attack Team.', 'Kap. I, Abs. 4'],
    ['Was ist keine Bedingung für wirksames CAS laut JP 3-09.3?', ['Günstiges Wetter', 'Luftüberlegenheit, v. a. SEAD', 'Zielmarkierung und -erfassung', 'Geeignete Munition'], 'Günstige Umweltbedingungen helfen, sind aber ausdrücklich keine Voraussetzung.', 'Kap. I, Abs. 7'],
    ['Wer ist die letztendliche Autorität für Unterstützungsfeuer in seinem Bereich?', ['Der unterstützte Bodenkommandeur', 'Der JTAC', 'Der Flight Lead', 'Die ASOC'], 'Der Bodenkommandeur legt Zielpriorität, Wirkung und Zeitpunkt fest.', 'Kap. I, Abs. 3'],
    ['Welcher Grundsatz gehört nicht zu den genannten Grundsätzen des Kriegsvölkerrechts?', ['Überraschung', 'Unterscheidung', 'Verhältnismäßigkeit', 'Militärische Notwendigkeit'], 'Genannt werden Notwendigkeit, Unterscheidung, Verhältnismäßigkeit und Verbot unnötiger Leiden.', 'Kap. III, Abs. 11'],
    ['Was liefert der JFO bei Type 2 und Type 3?', ['Zieldaten', 'Die Waffenfreigabe', 'Den Abort Code', 'Die Luftraumkoordinierung'], 'Der JFO liefert Zieldaten und führt TGO durch; er gibt keine Freigabe.', 'Kap. II'],
    ['Was ist eine Sortie?', ['Ein Flug eines Luftfahrzeugs', 'Eine Rotte aus zwei Lfz', 'Ein vollständiger CAS-Auftrag', 'Ein Angriff auf ein Ziel'], 'Ein Flug durch ein Luftfahrzeug.', 'Kap. I, Abs. 4'],
    ['Welche Ursache für Eigenbeschuss nennt JP 3-09.3?', ['Falsch übermittelte oder empfangene Positionen', 'Zu viele Luftfahrzeuge im Stack', 'Der Einsatz von Type 3', 'Die Verwendung von MGRS'], 'Weitere Ursachen: Fehlidentifikation, ungenaue Zielpositionen, Verlust des Lagebewusstseins.', 'Kap. I, Abs. 9'],
    ['Welche Rolle kann ein CAS-Controller bei Personnel Recovery übernehmen?', ['On-Scene Commander', 'Rescue Mission Commander in der JPRC', 'Flight Lead der Rettungshubschrauber', 'Keine'], 'CAS-Controller können OSC-Aufgaben übernehmen.', 'Kap. I, Abs. 11']
  ]);

  add('m02', [
    ['Welche Stelle verarbeitet sofortige CAS-Anforderungen im TACS?', ['Die ASOC', 'Der TACP auf Bataillonsebene', 'Das JAOC direkt', 'Der FAC(A)'], 'Die ASOC ist die zentrale Stelle für unmittelbare Luftunterstützung.', 'Kap. II'],
    ['Welche zwei Aufgaben hat der TACP?', ['Beraten und primäre TAC stellen', 'Aufklären und Markieren', 'ATO erstellen und verteilen', 'Luftraum sperren und freigeben'], 'Beratung des Bodenkommandeurs und primäre Terminal Attack Control.', 'Kap. II'],
    ['Was macht ein TAC(A) nicht?', ['Terminal Attack Control', 'Funkrelais', 'Übergaben koordinieren', 'Lfz zum JTAC führen'], 'TAC(A) ist eine Verlängerung von ASOC/DASC, kein Controller.', 'Kap. II'],
    ['Wer leitet das JARN?', ['Die ASOC', 'Der JTAC', 'Die FDC', 'Der Flight Lead'], 'Das JARN dient sofortigen Anforderungen; Netzleitstelle ist die ASOC.', 'Kap. II, Abs. 10'],
    ['Wem gehört das TAD-Netz während eines CAS-Einsatzes?', ['Dem JTAC', 'Der ASOC', 'Dem Flight Lead', 'Dem Artilleriebeobachter'], 'Das TAD ist für die Kontrolle der Lfz reserviert.', 'Kap. V'],
    ['Welche Phase gehört nicht zum NATO Air Tasking Cycle?', ['Battle Handover', 'ATO-Erstellung', 'Waffenzuordnung und Luftzuteilung', 'Auswertung'], 'Die sechs Phasen: Strategie, Zielentwicklung, Waffenzuordnung, ATO, Durchführung, Auswertung.', [['ajp33', 'Abs. 2.40–2.42']]],
    ['Wie lange gilt eine ATO normalerweise?', ['24 Stunden', '12 Stunden', '72 Stunden', 'eine Woche'], 'Der Zyklus umfasst etwa 72 Stunden; eine ATO gilt meist 24 Stunden.', [['ajp33', 'Abs. 2.40–2.42']]],
    ['Was bedeutet Schweigen eines Zwischenstabs bei einer sofortigen Anforderung?', ['Zustimmung', 'Ablehnung', 'Rückfrage folgt', 'Weitergabe an die nächste Ebene'], 'Silence is consent.', 'Kap. III, Abs. 27'],
    ['Welche Priorität hat bei sofortigen Anforderungen den höchsten Rang?', ['Emergency', 'Priority', 'Routine', 'Immediate'], 'Emergency #1, Priority #2, Routine #3.', 'Kap. III, Abs. 27'],
    ['Wie werden sofortige Anforderungen typischerweise bedient?', ['Mit On-call-Lfz oder durch Umleiten eingeplanter Lfz', 'Nur mit der nächsten ATO', 'Nur durch Bomber', 'Nur durch Kampfhubschrauber der eigenen Brigade'], 'Immediate requests: on-call oder redirect.', 'Kap. III, Abs. 27'],
    ['Welches Formular ist der JTAR?', ['DD Form 1972', 'DA Form 4655', 'DD Form 1351', 'USMTF A670'], 'Digital entspricht ihm das USMTF-Format D670.', 'Anhang A'],
    ['Was darf nie als Zielposition in einer Anforderung stehen?', ['Die eigene Position', 'Eine 6-stellige Koordinate', 'Ein TRP', 'Eine Lat/Long-Angabe'], 'Eigene Positionen nie als Zielposition verwenden.', 'Kap. V, Abs. 2a'],
    ['Was ist das USMC-Gegenstück zur ASOC?', ['DASC', 'TACC', 'FSCC', 'TAOC'], 'Direct Air Support Center.', 'Kap. II']
  ]);

  add('m03', [
    ['Was ist laut JP 3-09.3 der wichtigste Teil der Vorbereitungsphase?', ['Die Feuerunterstützungsübung (fire support rehearsal)', 'Der Funkcheck', 'Die Ausrüstungskontrolle', 'Das Lesen der SPINS'], 'Die FS-Rehearsal gilt als kritischster Teil der Vorbereitung.', 'Kap. IV, Abs. 2'],
    ['Woraus besteht ein Fire Support Task?', ['Task, Purpose, Method, Effects', 'Target, Priority, Mark, Egress', 'Time, Place, Means', 'Threat, Enemy, Friendly, Remarks'], 'Aufgabe, Zweck, Methode, Wirkung.', 'Kap. III'],
    ['Auf welche Entfernung finden laut JP 3-09.3 90 % der Gefechte im Stadtgebiet statt?', ['Unter 50 m', 'Unter 250 m', 'Unter 500 m', 'Unter 1.000 m'], 'Gefechte mit Unterstützungswaffen finden auf unter 250 m statt.', 'Kap. III, Abs. 9'],
    ['Legt „Troops in Contact“ die Kontrollart fest?', ['Nein, TIC ist ein Hinweis und bestimmt keine Kontrollart', 'Ja, TIC bedeutet immer Type 1', 'Ja, TIC bedeutet immer Type 2', 'Ja, TIC bedeutet Danger Close'], 'TIC ist eine Meldung mit Hinweischarakter.', 'Kap. III, Abs. 11'],
    ['Wann ist keine CDE nötig?', ['Bei Direktfeuerwaffen bis 105 mm', 'Bei allen gelenkten Waffen', 'Bei Type 1', 'Bei Danger Close'], 'Beispiele: 2,75-Zoll-Raketen, 30 mm, 105 mm.', 'Kap. III, Abs. 11'],
    ['Welcher Zünder verringert Splitterwirkung zur Seite?', ['Verzögerungszünder', 'Luftdetonation', 'Annäherungszünder', 'Aufschlag sofort'], 'Delay mindert Splitter, Airburst mindert das Eindringen.', 'Kap. III, Abs. 11'],
    ['Wie viel GLINT-Band darf eine Person tragen?', ['Höchstens ein ½-Zoll-Quadrat', 'Vier 1-Zoll-Quadrate', 'Beliebig viel', 'Nur auf dem Helm 5 cm'], 'Fahrzeuge: vier 1-Zoll-Quadrate.', 'Kap. III, Abs. 9'],
    ['Welche drei Faktoren bestimmen die Position des TACP?', ['Sicherheit, Beobachtung, Funkverbindung', 'Deckung, Tarnung, Bewegung', 'Höhe, Sonne, Wind', 'Nähe zum Gefechtsstand, Logistik, Sanität'], 'Der TACP kann sich nicht selbst sichern und sollte auffällige Geländepunkte meiden.', 'Kap. IV, Abs. 6'],
    ['Kann ein CAS-Luftfahrzeug On-Scene Commander sein?', ['Nein, OSC ist der Bodenkommandeur', 'Ja, der Flight Lead', 'Ja, wenn FAC(A)-qualifiziert', 'Nur bei Type 3'], 'Der Bodenkommandeur ist supported commander und OSC.', 'Kap. III'],
    ['Wer kann die taktische Führung innerhalb der CAS-Lfz übertragen?', ['Nur der JTAC bzw. FAC(A)', 'Der Flight Lead', 'Die ASOC', 'Der Bodenkommandeur direkt'], 'Tactical lead wird nur vom JTAC/FAC(A) delegiert.', 'Kap. III'],
    ['Wie soll die Besatzung den CAS-Brief verstehen?', ['Als Befehl', 'Als Vorschlag', 'Als Information ohne Bindung', 'Als Anfrage zur Zustimmung'], 'Die Verantwortung für den Waffeneinsatz bleibt beim Bodenkommandeur.', 'Kap. III'],
    ['Was gehört nicht zu den drei Kategorien von Nacht-CAS?', ['Radar-only', 'Visuell mit künstlicher Beleuchtung', 'Systemgestützt', 'Mit Nachtsichtgeräten'], 'Visuell, systemgestützt, NVD.', 'Kap. III, Abs. 15'],
    ['Wer akzeptiert das Risiko bei Danger Close?', ['Der unterstützte Kommandeur', 'Der JTAC', 'Die Besatzung', 'Die ASOC'], 'Seine Initialen werden über den JTAC übermittelt.', 'Kap. III, Abs. 11d']
  ]);

  add('m04', [
    ['Was verlangt Type 1 vom JTAC?', ['Ziel und angreifendes Lfz bei jedem Angriff sehen und die Geometrie beurteilen', 'Nur das Ziel sehen', 'Nur das Lfz sehen', 'Mehrere Angriffe mit einer Freigabe erlauben'], 'Type 1 = visuelle Kontrolle von Lfz und Ziel.', 'Kap. III, Abs. 12a(1)'],
    ['Ein JTAC sieht das Ziel, aber das Lfz beim Auslösen nicht. Welche Kontrollart?', ['Type 2', 'Type 1', 'Type 3', 'Keine – kein Angriff möglich'], 'Type 2: Lfz beim Auslösen oder Ziel nicht sichtbar, Kontrolle einzelner Angriffe.', 'Kap. III, Abs. 12a(2)'],
    ['Wann ist Type 3 die richtige Wahl?', ['Wenn mehrere Angriffe innerhalb eines Gefechts unter Einschränkungen freigegeben werden sollen', 'Immer bei Nacht', 'Immer bei GPS-Waffen', 'Wenn der JTAC das Ziel nicht sieht'], 'Type 3 = eine Freigabe für mehrere Angriffe innerhalb der Restrictions.', 'Kap. III, Abs. 12a(3)'],
    ['Kann Type 1 mit BOC kombiniert werden?', ['Ja, Kontrollart und Methode sind unabhängig', 'Nein, Type 1 verlangt BOT', 'Nur bei Hubschraubern', 'Nur mit JDAM'], 'Jede Kontrollart funktioniert mit beiden Methoden.', 'Kap. III, Abs. 12b'],
    ['Warum sollen GPS-Waffen nicht unter Type 1 kontrolliert werden?', ['Die Geometrie des Lfz sagt nichts über die Flugbahn der Waffe', 'Weil GPS-Waffen immer Danger Close sind', 'Weil der JTAC sie nicht sehen kann', 'Weil sie nur nachts eingesetzt werden'], 'Die Waffe fliegt zur Koordinate, egal wo das Lfz ist.', 'Kap. III, Abs. 12a(1)'],
    ['Wer liest bei BOT zurück?', ['Die Führungsmaschine – weitere nur auf Anforderung', 'Jedes Lfz mit Waffeneinsatz', 'Niemand', 'Nur der letzte Angreifer'], 'BOC: alle Lfz mit Waffeneinsatz aus dem System.', 'Kap. III, Abs. 12b(1)'],
    ['Was darf die Besatzung bei BOC nach dem Readback nicht?', ['Die Koordinaten verändern', 'Den IN-Call geben', 'Die Munition melden', 'Abbrechen'], 'Bei BOC bleibt die gebriefte Koordinate maßgeblich.', 'Kap. III, Abs. 12b(2)'],
    ['Woran erkennt man laut JP 3-09.3 einen BOC-Angriff?', ['Die Besatzung muss nie TALLY, CAPTURED oder CONTACT melden', 'Es wird ein Laser eingesetzt', 'Es ist Nacht', 'Der JTAC sieht das Ziel nicht'], 'Wenn die Besatzung das Ziel nie erfassen muss, ist es BOC.', 'Kap. III, Abs. 12b(2)'],
    ['Eine LGB wird von einem Bodenbeleuchter gelenkt, die Besatzung erfasst das Ziel nicht. Welche Methode?', ['BOC', 'BOT', 'Type 3', 'Keine – unzulässig'], 'LGW mit Fremdbeleuchtung in den Laserkorb sind ein BOC-Beispiel.', 'Kap. III, Abs. 12b(2)'],
    ['Bis wann darf die Kontrollart bei Type 1/2 geändert werden?', ['Bis vor dem IN-Call', 'Bis vor dem IP-inbound-Call', 'Bis vor dem Readback', 'Jederzeit bis zum Auslösen'], 'Danach Abbruch und neuer Brief; bei Type 3 bis vor COMMENCING ENGAGEMENT.', 'Kap. III, Abs. 12d'],
    ['Welche Freigabe gilt unter Type 3?', ['CLEARED TO ENGAGE', 'CLEARED HOT', 'SMACK', 'CONTINUE'], 'CLEARED HOT ist für Type 1 und 2.', 'Kap. III, Abb. III-6'],
    ['Was bedeutet CONTINUE?', ['Manöver fortsetzen, keine Änderung der Freigabe', 'Waffeneinsatz freigegeben', 'Angriff abbrechen', 'Wiederholungsangriff genehmigt'], 'CONTINUE bedeutet keine Freigabe.', 'Kap. III, Abb. III-6'],
    ['Wann darf „CLEARED“ gesagt werden?', ['Nur wenn tatsächlich Waffen eingesetzt werden sollen', 'Bei jedem Trockenanflug', 'Für die Freigabe zum IP', 'Für die Höhenfreigabe im Halteraum'], 'WARNING in JP 3-09.3: CLEARED nur bei tatsächlichem Waffeneinsatz.', 'Kap. III, Abb. III-6'],
    ['Welche Calls sind bei Type 3 Pflicht für die Besatzung?', ['COMMENCING ENGAGEMENT und ENGAGEMENT COMPLETE', 'IP INBOUND und IN', 'TALLY und VISUAL', 'RIFLE und WINCHESTER'], 'Pflicht-Calls vor dem ersten Auslösen und am Ende.', 'Kap. III, Abs. 12a(3)'],
    ['Wer behält bei Type 3 die Abort-Befugnis?', ['Der JTAC bzw. FAC(A)', 'Niemand mehr', 'Nur der Flight Lead', 'Die ASOC'], 'Der JTAC behält in allen Kontrollarten die Abort-Befugnis.', 'Kap. III, Abs. 12a(3)']
  ]);

  add('m05', [
    ['Welcher Schritt folgt im Execution Template auf den Game Plan?', ['CAS Brief', 'Situation Update', 'Correlation', 'Readbacks'], 'Check-in → Situation Update → Game Plan → CAS Brief → Remarks/Restrictions → Readbacks → Correlation …', 'Kap. V, Abb. V-1'],
    ['Wofür steht das „A“ in MNPOPCA?', ['Abort Code', 'Altitude', 'Armament', 'Authentication'], 'Mission Number, Number/Type, Position/Altitude, Ordnance, Playtime, Capabilities, Abort Code.', 'Kap. V, Abb. V-4'],
    ['Was gilt ohne gebrieften Abort Code?', ['„ABORT, ABORT, ABORT“', 'Kein Abbruch möglich', '„KNOCK-IT-OFF“', '„CEASE FIRE“'], 'Standard-Abbruch ohne Code.', 'Kap. V, Abs. 2b(2)'],
    ['Was muss der Game Plan mindestens enthalten?', ['Kontrollart und Angriffsmethode', 'Munition und Zünder', 'TOT und FAH', 'Wirkung und Abstand'], 'Weiteres ist optional.', 'Kap. V, Abs. 2a(3)'],
    ['Womit beginnt der JTAC beim Entwickeln des Game Plans?', ['Mit der gewünschten Wirkung', 'Mit der Kontrollart', 'Mit der TOT', 'Mit dem Sensorplan'], 'Wirkung → TAC-Art → Methode → Abstand → Sensorplan.', 'Kap. V, Abs. 2a(3)'],
    ['Welcher Abstand ist laut Faustwert bei Type 1 mit ungelenkter Munition angemessen?', ['30 Sekunden', '2 Minuten', '10 Sekunden', '5 Minuten'], 'Etwa 1 min bei LGB aus mittlerer Höhe, über 2 min bei PGM für Folgeentscheidungen.', 'Kap. V, Abs. 2a(3)'],
    ['Was gibt der JTAC beim Erstkontakt zuerst?', ['Routing bzw. Halteanweisung und Flugsicherheitsinformationen', 'Den 9-Line', 'Den Game Plan', 'Die BDA'], 'Danach folgen Check-in und Situation Update.', 'Kap. V, Abs. 2b(1)'],
    ['Ein Angriff läuft und ein weiterer Flight meldet sich. Was sagt der JTAC?', ['„Hold your check-in, attack in progress“', '„Send your check-in“', '„Push when ready“', '„Knock-it-off“'], 'Check-in erst nach dem Angriff aufnehmen.', 'Kap. V, Abs. 2b(2)'],
    ['Welche Information gehört nicht zu den fünf Zieldaten, die der JTAC zuerst entwickelt?', ['Abflugrichtung', 'Zielhöhe', 'Position der eigenen Kräfte', 'Gewünschte Wirkung'], 'Zielhöhe, -beschreibung, -position, eigene Position, gewünschte Wirkung.', 'Kap. V, Abs. 2a(1)'],
    ['Wie sollen eigene Kräfte im Situation Update beschrieben werden?', ['Möglichst ohne Koordinaten, z. B. relativ zu einer Gitterlinie oder einem Geländepunkt', 'Immer mit 10-stelliger Koordinate', 'Gar nicht', 'Nur in Lat/Long'], 'Beispiel: „all friendlies are east of the 94 easting“.', 'Kap. V, Abs. 2b(3)'],
    ['Was bedeutet „as fragged“ beim Check-in?', ['Ausstattung und Zeiten wie in der ATO geplant', 'Die Besatzung hat keine Munition', 'Der Abort Code ist kompromittiert', 'Die Lage ist bekannt'], 'Abweichungen mit „with exception“.', 'Kap. V, Abs. 2b(2)'],
    ['Welches Format dient auch der Gefechtsübergabe?', ['Das Situation Update', 'Der 9-Line', 'Der INFLTREP', 'Der JTAR'], 'Das Situation-Update-Format wird auch für den Battlefield Handover genutzt.', 'Kap. V, Abs. 2b(3)'],
    ['Wonach fragt der JTAC, wenn der Check-in unvollständig ist?', ['Z. B. Lasercodes der LGB und Zünderoptionen', 'Den Namen des Piloten', 'Den Startflugplatz', 'Die Tankmenge in Pfund'], 'Auch: Hellfire-Modell, VDL- und SITREP-Codes, Kartenversion, FAC(A)-Fähigkeit.', 'Kap. V, Abs. 2b(2)']
  ]);

  add('m06', [
    ['Welche Teile des 9-Line sind nach JP 3-09.3 Pflicht-Readback?', ['Line 4, Line 6 und Restrictions', 'Line 6 und Line 8', 'Lines 1–9', 'Line 4 und Line 7'], 'Der JTAC kann zusätzliche Readbacks verlangen.', 'Kap. V, Abb. V-9'],
    ['Welche zusätzliche Readback-Pflicht nennt JP 3-09.3 für die ATP-3.3.2.1?', ['Line 8', 'Line 1', 'Line 5', 'Line 9'], 'Prüfe das in deiner ATP Ed. D.', 'Kap. V, Abs. 2b(5)'],
    ['Was machen NATO-FACs laut JP 3-09.3 anders beim Übermitteln des 9-Line?', ['Sie nennen die Zeilentitel', 'Sie senden alles in einer Übertragung', 'Sie lassen Line 8 weg', 'Sie senden Line 6 zuerst'], 'Besatzungen sollen bei NATO-JTACs Zeilentitel erwarten.', 'Kap. V, Abs. 2b(5)'],
    ['Line 2 gibt …', ['den magnetischen Kurs vom IP bzw. der BP zum Ziel', 'den Kurs vom Ziel zum IP', 'die FAH', 'die Laser Target Line'], 'Dazu ggf. der Offset.', 'Kap. V, Abb. V-9'],
    ['In welcher Einheit gibt man Line 3 für Hubschrauber?', ['Meter, auf 100 m', 'Seemeilen auf eine Nachkommastelle', 'Kilometer', 'Fuß'], 'Jets: NM auf eine Nachkommastelle.', 'Kap. V, Abs. 2b(5)'],
    ['Line 4 ist standardmäßig in …', ['Fuß MSL', 'Meter MSL', 'Fuß AGL', 'Fuß HAE'], 'Ein anderes Bezugssystem muss genannt werden.', 'Kap. V, Abs. 2b(5)'],
    ['Was gehört bei einem Laser-Handoff in Line 7?', ['Rufzeichen der beleuchtenden Plattform, „laser“ und Code', 'Nur „laser“', 'Die Laser Target Line', 'Die Position des Beleuchters'], 'Die LTL steht in den Remarks.', 'Kap. V, Abs. 2b(5)'],
    ['Die nächste eigene Truppe liegt 400 m südlich des Ziels. Line 8?', ['„South 400“', '„North 400“', '„400 meters short“', '„Friendlies 400“'], 'Richtung vom Ziel zu den eigenen Kräften.', 'Kap. V, Abs. 2b(5)'],
    ['Wie wird der 9-Line übertragen?', ['Drei Übertragungen à drei Zeilen', 'In einer Übertragung', 'Zeile für Zeile mit Readback', 'Nur digital'], 'Ohne Zeilennummern, mäßiges Tempo.', 'Kap. V, Abs. 2b(5)'],
    ['Welche Angabe ist keine Restriction?', ['Laser Target Line', 'Final Attack Heading', 'Danger Close mit Initialen', 'TOT'], 'Die LTL ist ein Remark.', 'Kap. V, Abs. 2b(6)'],
    ['Wo steht die TOT im Brief?', ['Als letzte Restriction', 'In Line 9', 'Im Game Plan', 'Vor den Remarks'], 'Damit das Ende des Briefs erkennbar ist.', 'Kap. V, Abs. 2b(6)'],
    ['Was sagt die Stellenzahl einer Koordinate aus?', ['Die Präzision, nicht die Genauigkeit', 'Die Genauigkeit', 'Den TLE', 'Das Bezugssystem'], 'Entscheidend für die Genauigkeit ist der TLE.', 'Kap. V, Abs. 2b(5)'],
    ['Wie korrigiert der JTAC einen falschen Readback?', ['Er wiederholt den falschen Teil mit Betonung', 'Er wiederholt den ganzen Brief', 'Er sagt nur „negative“', 'Er bricht die Mission ab'], 'Beispiel: „be advised, final attack headings 1-8-0 through 2-1-0“.', 'Kap. V, Abs. 2b(7)'],
    ['Womit beginnt der Brief, wenn Lines 1–3 entfallen?', ['„From the overhead“ bzw. „Lines 1-3 N/A“, dann „Elevation“', 'Mit Line 6', 'Mit dem Game Plan', 'Mit „Ready to copy“'], 'Typisch beim Keyhole über dem Echo-Punkt.', 'Kap. V, Abs. 2b(5)'],
    ['Wie gibt man mehrere Ziele in einem Brief?', ['Für jedes weitere Ziel Lines 4, 6 und 8 vor den Remarks', 'Für jedes Ziel einen eigenen kompletten 9-Line in einer Übertragung', 'Nur das wichtigste Ziel', 'Alle Ziele in Line 5'], 'So bleibt der Brief kompakt.', 'Kap. V, Abs. 2b(5)']
  ]);

  add('m07', [
    ['Wann ist Korrelation nötig?', ['Bei jedem CAS-Angriff', 'Nur bei BOT', 'Nur bei Type 1', 'Nur nachts'], 'Correlation is required on each and every CAS attack.', 'Kap. III, Abs. 12b'],
    ['Wann ist die Korrelation bei BOC abgeschlossen?', ['Mit dem korrekten Readback von Line 4, 6 und Restrictions', 'Mit TALLY', 'Mit dem IN-Call', 'Mit SPOT'], 'Bei einem externen Beleuchter muss trotzdem mit diesem korreliert werden.', 'Kap. V, Abs. 2b(8)'],
    ['Welche Bestätigung ist am besten?', ['„The third vehicle is your target.“', '„That’s your target.“', '„Affirm.“', '„Good.“'], 'Eindeutige Formulierungen verwenden.', 'Kap. V, Abs. 2b(8)'],
    ['Wofür steht das „O“ in FIDO?', ['Object seen', 'Offset', 'Orientation', 'Overhead'], 'From a point, In a direction, Distance to travel, Object seen.', 'Kap. V, Abs. 2b(8)'],
    ['Wie viele Himmelsrichtungen soll ein Talk-on-Spruch höchstens enthalten?', ['Zwei', 'Eine', 'Drei', 'Vier'], 'Kurze, einfache Anweisungen.', 'Kap. V, Abs. 2b(8)'],
    ['Welche Richtungsangaben nutzt man beim VDL-Talk-on?', ['Oben, unten, links, rechts', 'Nur Himmelsrichtungen', 'Uhrzeit-Methode', 'Grad magnetisch'], 'Beim Sparkle-Walk-on dagegen Himmelsrichtungen.', 'Kap. V, Abs. 2b(8)'],
    ['Wie weit darf eine Steilfeuer-Markierung höchstens vom Ziel liegen, um meist noch zu reichen?', ['300 m', '50 m', '600 m', '1.000 m'], 'Am wirksamsten innerhalb 100 m.', 'Kap. III, Abs. 14d'],
    ['Wann soll eine Markierung für Jets im Tiefflug liegen?', ['30–45 s vor TOT/TTT', '2 Minuten vor TOT', 'Genau zur TOT', '10 s nach TOT'], 'IR-Markierungen 20–30 s vorher.', 'Kap. III, Abb. III-24'],
    ['Was ist die am wenigsten wünschenswerte Markierung?', ['Markierung der eigenen Kräfte', 'Weißer Phosphor', 'IR-Pointer', 'Laser'], 'Lieber das Ziel markieren.', 'Kap. III, Abs. 14d'],
    ['Was ist die 2:1-Regel beim Talk-on?', ['Zwei Anweisungen, dann eine bestätigende Frage', 'Zwei Fragen, dann eine Anweisung', 'Zwei Talk-ons je Ziel', 'Doppelte Maßeinheit'], 'Two-to-one ratio.', 'Kap. V, Abs. 2b(8)'],
    ['Muss der JTAC bei BOT eine aktualisierte Koordinate der Besatzung zurücklesen?', ['Nein', 'Ja, immer', 'Nur bei Type 1', 'Nur bei Danger Close'], 'Keine Koordinaten-„Ping-Pong“.', 'Kap. V, Abs. 2b(8)'],
    ['Darf Full-Motion-Video alleinige Quelle der Zielidentifizierung sein?', ['Nein', 'Ja', 'Nur bei Type 3', 'Nur tagsüber'], 'VDL ergänzt die Verfahren, ändert sie aber nicht.', 'Kap. III, Abs. 22'],
    ['Ab welcher Schrägentfernung sind Farben mit bloßem Auge kaum noch zu erkennen?', ['Etwa 15.000 ft', 'Etwa 5.000 ft', 'Etwa 30.000 ft', 'Etwa 1.000 ft'], 'Wichtig für Zielbeschreibungen.', 'Kap. V, Abb. V-10']
  ]);

  add('m08', [
    ['Wie groß ist die Laser-Sicherheitszone?', ['20° (±10°) um die Linie Ziel–Beleuchter', '60° (±30°)', '120° (±60°)', '10° (±5°)'], 'Vom Boden bis unendlich.', 'Kap. III, Abb. III-9'],
    ['In welchem Bereich soll das Lfz bevorzugt anfliegen?', ['10–45° von der Linie Ziel–Beleuchter', '0–10°', '60–90°', '90–180°'], 'Zulässig 10–60°, bevorzugt 10–45°.', 'Kap. III, Abb. III-9'],
    ['LTL 270, FAH 265. Was ist das Problem?', ['Der Anflug liegt in der Sicherheitszone', 'Der Anflug liegt außerhalb der Angriffszone', 'Kein Problem – optimal', 'Die FAH muss 090 sein'], '|265 − 270| = 5° < 10°.', 'Kap. III, Abb. III-9'],
    ['Wie werden Lasercodes übermittelt?', ['Immer vierstellig', 'Zweistellig', 'Als Frequenz in MHz', 'Nur digital'], 'Z. B. „code 1688“.', 'Kap. III, Abs. 13a'],
    ['Bei welchen Waffen kann der Code meist im Flug geändert werden?', ['Maverick und Hellfire', 'GBU-12', 'Alle LGB', 'Keine'], 'LGB-Codes werden vor dem Flug eingestellt.', 'Kap. III, Abs. 13a'],
    ['Was passiert bei zu frühem Beleuchten?', ['Die Waffe steuert zu früh und schlägt zu kurz ein', 'Die Waffe fliegt über das Ziel', 'Nichts', 'Der Laser fällt aus'], 'Richtiges Timing ist eine der fünf Grundbedingungen.', 'Kap. III, Abs. 13a'],
    ['Welcher Abstand gilt bei Hellfire-Schnellfeuer?', ['Mindestens 8 Sekunden', 'Mindestens 1 Sekunde', 'Mindestens 30 Sekunden', 'Mindestens 2 Minuten'], 'Mehrere Ziele von Lee nach Luv bekämpfen.', 'Kap. III, Abs. 13a'],
    ['Was bedeutet SPOT?', ['Reflektierte Laserenergie ist erfasst', 'Das Ziel ist korreliert', 'Der Beleuchter ist an', 'Die Waffe ist ausgelöst'], 'SPOT ist noch keine Korrelation.', 'Kap. III, Abb. III-21'],
    ['Was antwortet der Beleuchter auf „LASER ON“?', ['„LASING“ mit Code', '„SPOT“', '„TEN SECONDS“', '„CONTACT“'], 'Danach meldet die Besatzung SPOT.', 'Kap. III, Abb. III-21'],
    ['Darf ein LST alleinige Quelle der Zielidentifizierung sein?', ['Nein', 'Ja', 'Nur bei Type 3', 'Nur bei BOC'], 'WARNING in JP 3-09.3.', 'Kap. III, Abs. 13a'],
    ['Was muss die Besatzung bei reiner IR-Markierung vom Boden vor der Freigabe melden?', ['VISUAL und TALLY oder CONTACT SPARKLE', 'Nur SPOT', 'Nur VISUAL', 'CAPTURED und RIFLE'], 'Bis „CEASE SPARKLE“.', 'Kap. V, Abs. 2b(8)'],
    ['Was bedeutet SNAKE?', ['IR-Pointer in einer Acht um das Ziel bewegen', 'IR-Pointer blinken lassen', 'IR-Pointer anhalten', 'IR-Pointer um das Lfz kreisen'], 'PULSE = blinken, STEADY = anhalten, ROPE = um das Lfz.', 'Kap. III, Abb. III-22'],
    ['Wie gibt man beim Sparkle-Walk-on Richtungen?', ['Himmelsrichtung und Entfernung, z. B. „SLEW north 150“', 'Links, rechts, oben, unten', 'Uhrzeit-Methode', 'Gar nicht – nur STEADY'], 'Links/rechts/oben/unten nicht verwenden; Eingabeln vermeiden.', 'Kap. V, Abs. 2b(8)'],
    ['Wo wird die LTL übermittelt?', ['In den Remarks, in Grad magnetisch', 'In Line 7', 'Im Game Plan', 'In Line 2'], 'Line 7 nennt Rufzeichen und Code.', 'Kap. V, Abs. 2b(6)']
  ]);

  add('m09', [
    ['Ein TLE von 25 m entspricht welcher Kategorie?', ['CAT III', 'CAT II', 'CAT IV', 'CAT I'], 'CAT III = 16–30 m.', 'Kap. III, Abb. III-5'],
    ['Welche Kategorie hat ein TLE von 150 m?', ['CAT V', 'CAT IV', 'CAT VI', 'CAT III'], 'CAT V = 92–305 m.', 'Kap. III, Abb. III-5'],
    ['Wie groß ist CAT I?', ['0–6 m', '0–15 m', '0–1 m', '0–30 m'], 'CAT II = 7–15 m.', 'Kap. III, Abb. III-5'],
    ['Mit welcher Wahrscheinlichkeit gelten die TLE-Angaben?', ['90 %', '50 %', '95 %', '99,9 %'], 'CE90, VE90, SE90.', 'Kap. III, Abs. 11c'],
    ['Welche Methode der Zielortung ist am ungenauesten?', ['Geländevergleich mit der Karte', 'Laser-Entfernungsmesser mit GPS', 'Zertifizierte Zielsoftware', 'Koordinate aus dem Pod eines Lfz'], 'Am genauesten ist zertifizierte Zielsoftware.', 'Kap. V, Abs. 2a(1)'],
    ['Welche Zeile ist am schwersten zu schätzen?', ['Line 4 (Höhe)', 'Line 5', 'Line 2', 'Line 9'], 'Steilere Einschlagwinkel mindern Höhenfehler.', 'Kap. V, Abs. 2a(1)'],
    ['Welches Bezugssystem gilt standardmäßig?', ['WGS-84', 'ED50', 'NAD27', 'Potsdam'], 'Abweichungen werden vorher abgestimmt.', 'Kap. V, Abs. 2b(5)'],
    ['Wie viel Strich hat ein Vollkreis?', ['6400', '6000', '6300', '3600'], '1 Strich ≈ 1 m auf 1.000 m.', [['atp30930', 'Kap. 3, Abs. 3-20']]],
    ['Ein Objekt misst 5 Strich auf 2 km Entfernung. Wie breit ist es?', ['10 m', '2,5 m', '25 m', '40 m'], 'W = R × m = 2 × 5.', [['atp30930', 'Kap. 3, Abs. 3-21']]],
    ['Wie rechnet man Grad in Strich um?', ['× 17,8', '× 10', '÷ 17,8', '× 6,4'], 'Genau × 6400 ÷ 360.', [['atp30930', 'Kap. 3, Abs. 3-22']]],
    ['Welche Auflösung hat eine 8-stellige MGRS-Koordinate?', ['10 m', '1 m', '100 m', '1.000 m'], '6 Ziffern = 100 m, 10 Ziffern = 1 m.', 'Kap. V, Abs. 2b(5)'],
    ['Welchen TLE soll ein FAC(A) im Allgemeinen erreichen?', ['CAT II oder besser', 'CAT IV oder besser', 'CAT I', 'beliebig'], 'Unter etwa 15 m.', 'Kap. II'],
    ['Welche Beschreibung ist für Line 5 am besten?', ['„HVT in 2-story building“', '„2-story building“', '„Building“', '„Target as briefed“'], 'Das Wichtige zuerst, knapp und eindeutig.', 'Kap. V, Abs. 2b(5)']
  ]);

  add('m10', [
    ['Was gilt für die FSCL?', ['Sie ist keine Grenze und schafft keine FFA', 'Sie ist eine Grenze zwischen Verbänden', 'Jenseits gilt automatisch FFA', 'Sie gilt nur für Artillerie'], 'Sie erleichtert das Bekämpfen von Gelegenheitszielen jenseits davon.', 'Kap. III, Abs. 14a'],
    ['Was ist eine CFL?', ['Linie, jenseits der konventionelles Steilfeuer ohne weitere Koordinierung wirken darf', 'Linie, jenseits der kein Feuer erlaubt ist', 'Grenze für CAS-Lfz', 'Linie zwischen aufeinander zu bewegenden Kräften'], 'Luftraumkoordinierung bleibt nötig.', 'Kap. III, Abs. 14a'],
    ['Welche FSCM ist restriktiv?', ['NFA', 'FFA', 'CFL', 'Kill Box'], 'NFA, RFA und RFL sind restriktiv.', 'Kap. III, Abs. 14a'],
    ['Wofür dient eine RFL?', ['Feuer zwischen aufeinander zu bewegenden eigenen Kräften verhindern', 'Feuer jenseits der FSCL erlauben', 'Hubschrauber-Routen festlegen', 'Den Halteraum begrenzen'], 'Sie verhindert Eigenbeschuss und doppelte Bekämpfung.', 'Kap. III, Abs. 14a'],
    ['Was ist eine informelle ACA?', ['Kurzfristig vom unterstützten Kommandeur festgelegt', 'Im ACO veröffentlicht', 'Dauerhaft im Luftraum', 'Nur für Bomber'], 'Formale ACAs laufen über die Airspace Control Authority (ACO/ATO/SPINS).', 'Kap. III, Abs. 14a(2)(d)'],
    ['Welche Staffelung erfordert die genaueste Koordinierung?', ['Zeitliche Staffelung', 'Seitliche Staffelung', 'Höhenstaffelung', 'Kombinierte Staffelung'], 'Zeitstaffelung braucht exakte TOT/TTT.', 'Kap. III, Abs. 14a(2)(d)'],
    ['Was muss bei Höhenstaffelung immer genannt werden?', ['Fuß MSL', 'Fuß AGL', 'Flugfläche', 'Meter über Grund'], 'Z. B. „stay above 5,000 feet MSL“.', 'Kap. III, Abs. 14a(2)(d)'],
    ['Was bedeutet „Hold Charlie 10“?', ['10 NM südlich des Echo-Punkts halten', '10 NM nördlich', '10 NM östlich', 'Über dem Ziel in 10.000 ft'], 'A = Nord, B = Ost, C = Süd, D = West.', 'Kap. III, Abb. III-18'],
    ['Welche Entfernung haben IPs für Jets üblicherweise?', ['5–15 NM vom Ziel', '1–5 km', '20–40 NM', 'unter 2 NM'], 'BPs für Hubschrauber: 1–5 km.', 'Kap. III, Abs. 14b'],
    ['„Attack from the north“ entspricht welchen FAHs?', ['135–225', '315–045', '090–270', '000–090'], 'Nord nach Süd = 180 ± 45.', 'Kap. V, Abs. 2a(5)'],
    ['Wie schnell legen Jets laut SEAD-Faustformel Strecke zurück?', ['8 NM/min', '4 NM/min', '12 NM/min', '2 NM/min'], 'A-10 5 NM/min, Hubschrauber 4 km/min.', 'Kap. V, Abb. V-2'],
    ['Wie lange muss SEAD laut Faustformel dauern?', ['Vom Eintritt des ersten bis zum Austritt des letzten Lfz aus der Wirkreichweite', 'Genau eine Minute um die TOT', 'Bis zum IP-inbound-Call', 'Bis zur BDA'], 'Beispiel: nicht-standardisiert −1+00 bis +2+00.', 'Kap. V, Abb. V-2'],
    ['Was ist der Offset?', ['Die Seite der Linie IP–Ziel, auf der die Besatzung manövrieren darf', 'Der Versatz der Markierung', 'Der Abstand zwischen zwei Lfz', 'Die Abweichung der Bombe'], 'Gilt vom Verlassen des IP bis zum Auslösen bzw. Abflug.', 'Kap. III, Abb. III-19'],
    ['Wogegen ist SEAD am wenigsten wirksam?', ['MANPADS und bewegliche Systeme', 'Ortsfeste Radarstellungen', 'Feste Flakstellungen', 'Gefechtsstände'], 'Zuerst Flugprofile prüfen, die die Bedrohung umgehen.', 'Kap. III, Abs. 14d']
  ]);

  add('m11', [
    ['Wie viele Elemente hat ein CFF, in wie vielen Übertragungen?', ['Sechs Elemente in drei Übertragungen', 'Neun Elemente in drei Übertragungen', 'Fünf Elemente in einer Übertragung', 'Vier Elemente in zwei Übertragungen'], 'Bei sofortigen Aufträgen eine Übertragung.', [['atp30930', 'Kap. 4']]],
    ['Ab welcher Entfernung ist Mörser- oder Artilleriefeuer DANGER CLOSE?', ['Innerhalb 600 m', 'Innerhalb 750 m', 'Innerhalb 300 m', 'Innerhalb 1.000 m'], 'Bei 5-Zoll-Schiffsgeschützen und TLAM 750 m.', [['atp30930', 'Kap. 4, Abs. 4-34']]],
    ['Ist Danger Close im Steilfeuer dasselbe wie die RED?', ['Nein', 'Ja', 'Nur bei Mörsern', 'Nur bei Nacht'], 'REDs stehen in der JFIRE.', [['atp30930', 'Kap. 4, Abs. 4-34']]],
    ['Was gehört nicht zur Warning Order?', ['Zielbeschreibung', 'Art des Auftrags', 'Größe der wirkenden Einheit', 'Methode der Zielortung'], 'Die Zielbeschreibung kommt in der dritten Übertragung.', [['atp30930', 'Kap. 4']]],
    ['Auf welche Genauigkeit gibt man ADD/DROP beim Shift?', ['100 m', '10 m', '50 m', '5 m'], 'Seitlich in Metern, Höhe UP/DOWN auf 5 m.', [['atp30930', 'Kap. 4']]],
    ['OT-Entfernung 3.000 m, Einschlag 20 Strich links. Korrektur?', ['RIGHT 60', 'LEFT 60', 'RIGHT 20', 'LEFT 600'], 'OT-Faktor 3 × 20 = 60 m, entgegen der Beobachtung.', [['atp30930', 'Kap. 5, Abs. 5-13 bis 5-16']]],
    ['Ab welcher Größe ist eine Seitenkorrektur keine „kleine Korrektur“ mehr?', ['30 m', '10 m', '50 m', '100 m'], 'Kleine Korrekturen werden normalerweise nicht gesendet.', [['atp30930', 'Kap. 5, Abs. 5-13']]],
    ['Wann geht man beim schrittweisen Eingabeln zum Wirkungsschießen über?', ['Wenn eine 100-m-Gabel geteilt ist', 'Nach dem ersten Treffer', 'Nach 800 m', 'Nach drei Schüssen'], 'Gabeln 800, 400, 200, 100 m.', [['atp30930', 'Kap. 5']]],
    ['Wie korrigiert man bei Danger Close?', ['Kriechend, höchstens 100 m, vom eigenen Kräften nächsten Einschlag aus', 'Gabeln mit 400 m', 'Nur mit DROP', 'Gar nicht – nur Wirkungsschießen'], 'Creeping fire.', [['atp30930', 'Kap. 5, Abs. 5-27']]],
    ['Wann ist SPLASH Pflicht?', ['Bei Luftbeobachtern und Steilfeuer obere Winkelgruppe', 'Immer', 'Nie', 'Nur bei Danger Close'], 'SPLASH kommt 5 s vor dem Einschlag.', [['atp30930', 'Kap. 4']]],
    ['Welche Zeilen dürfen im JFO Target Brief nicht fehlen?', ['Line 4 und Line 8', 'Line 5 und Line 7', 'Line 6 und Line 7', 'Line 4 und Line 6'], 'Fehlende Zeilen: Zeilennummer + „None“ bzw. „Unknown“.', 'Kap. V, Abb. V-16'],
    ['Was darf ein JFO nicht?', ['Die Waffenfreigabe geben', 'Abbrechen', 'Zieldaten liefern', 'Auf dem TAD mithören'], 'Er darf jederzeit abbrechen.', 'Kap. V, Abs. 6'],
    ['Was ist beim CFF an ein SOF-Gunship die Freigabe?', ['Die Übermittlung des Feuerauftrags (außer Danger Close)', 'CLEARED HOT', 'CLEARED TO ENGAGE', 'SMACK'], 'Bei Danger Close: „Cleared Danger Close“ mit Initialen.', 'Kap. III, Abs. 19'],
    ['Was bedeutet CHECK FIRING?', ['Sofortiger Halt des Feuers', 'Feuer nach Plan fortsetzen', 'Schussfolge prüfen', 'Munition prüfen'], 'Meist aus Sicherheitsgründen.', [['atp30930', 'Kap. 4']]]
  ]);

  add('m12', [
    ['Ab welcher Höhe spricht JP 3-09.3 bei Jets von mittlerer bis großer Höhe?', ['Über etwa 8.000 ft AGL', 'Über 3.000 ft AGL', 'Über 15.000 ft MSL', 'Über 20.000 ft AGL'], 'Tief 500–8.000 ft AGL, sehr tief unter 500 ft.', 'Kap. III, Abs. 15'],
    ['Was ist der RW-CAS-5-Line?', ['Ein knapper, eigenkräftebezogener CAS-Brief für Hubschrauber', 'Eine Freigabe für Hubschrauber', 'Ein Check-in-Format', 'Ein BDA-Format'], 'Er ist keine Freigabe.', 'Kap. III, Abb. III-27'],
    ['Was liest die Besatzung beim 5-Line zurück?', ['Die Restrictions', 'Alle Zeilen', 'Nichts', 'Nur Line 3'], 'Restrictions sind Readback-Pflicht.', 'Kap. III, Abb. III-27'],
    ['Was hängt man bei Army- oder SOF-Besatzungen an den 5-Line an, wenn man selbst den Zeitpunkt bestimmen will?', ['„At my command“', '„Cleared hot“', '„Push when ready“', '„Continue dry“'], 'Ohne Zusatz fliegt die Besatzung nach dem Readback an.', 'Kap. III, Abb. III-27'],
    ['In welchem Format wollen Bomber Koordinaten bevorzugt?', ['DD-MM.MMMM', 'MGRS 6-stellig', 'DD.DDDD', 'Bullseye'], 'Grad und Dezimalminuten.', 'Kap. III, Abb. III-28'],
    ['Welche Brevity-Aufgaben kann ein FAC(A) übernehmen?', ['BRIEF, STACK, MARK, CONTROL', 'TALLY, VISUAL, BLIND', 'RIFLE, AWAY, SPLASH', 'PUSH, SET, SLEW'], 'Klar zuweisen und bestätigen; kein „Joint Control“.', 'Kap. V, Abs. 5'],
    ['Wann ist eine Show of Force kein sinnvolles Mittel?', ['Wenn Wirkung gegen ein identifiziertes Ziel gebraucht wird und Munition passt', 'Wenn eigene Kräfte zu nah sind', 'Wenn Zivilisten zerstreut werden sollen', 'Wenn eine Einheit ohne Funk beruhigt werden soll'], 'Show of Force ist nicht-letal und verlässt den Schutz der Höhe.', 'Kap. III, Abs. 20'],
    ['Ersetzt eine digitale Nachricht die Freigabe?', ['Nein, Freigaben laufen primär per Sprache', 'Ja, bei VMF', 'Ja, bei Link 16', 'Nur bei Type 3'], 'Digital nur ergänzend.', 'Kap. III, Abs. 21'],
    ['Welche Link-Adressen sind für JTAC reserviert?', ['Nummern, die auf 5 enden', 'Nummern, die auf 0 enden', 'Gerade Nummern', 'Vierstellige Nummern ab 1000'], 'Vorgabe aus JP 3-09.3 zu DACAS.', 'Kap. III, Abs. 21'],
    ['Wer hat bei koordinierten Angriffen Vorrang?', ['Abfliegende Lfz', 'Anfliegende Lfz', 'Das höher fliegende Lfz', 'Das Lfz mit mehr Munition'], 'Egressing aircraft have the right-of-way.', 'Kap. III, Abs. 15a'],
    ['Was ist der Unterschied zwischen combined und sectored attack?', ['Gleicher Anflugweg bzw. getrennte Sektoren', 'Gleichzeitig bzw. nacheinander', 'Mit bzw. ohne Markierung', 'Type 1 bzw. Type 3'], 'Jeweils simultan oder sequenziell möglich.', 'Kap. III, Abb. III-23'],
    ['Wie groß ist eine typische UAS-Wheel-Orbit?', ['5–8 km Radius', '500 m', '20 NM', '50 km'], '2,5–4,5 NM.', 'Kap. III, Abb. III-29'],
    ['Wann ist ein FAC(A) besonders hilfreich?', ['Bei vielen Lfz in engem Luftraum oder schwierigen Talk-ons', 'Nur bei Nacht', 'Wenn kein JTAC ausgebildet ist', 'Nur bei Bombern'], 'Weitere Gründe: begrenzte Markierung, schwierige Funkverbindung.', 'Kap. III, Abs. 23']
  ]);

  add('m13', [
    ['Wann muss der JTAC einen Angriff abbrechen?', ['Wenn eigene Truppen gefährdet sind', 'Wenn die Besatzung die Munition ändert', 'Wenn die TOT 10 s abweicht', 'Wenn der Wind dreht'], 'Auch bei falscher Ausrichtung und zur Sicherheit der Besatzung.', 'Kap. V, Abs. 2b(9)'],
    ['Wie wird der Challenge-Reply-Abort-Code genutzt?', ['Der JTAC notiert die Antwort und sendet sie nur im Ernstfall', 'Der JTAC liest die Antwort sofort zurück', 'Die Besatzung sendet die Antwort', 'Der Code wird im 9-Line gesendet'], 'Beispiel: „ABORT DELTA, ABORT DELTA, ABORT DELTA“.', 'Kap. V, Abb. V-11'],
    ['Was gilt auf dem TAD nach dem IN-Call?', ['Andere Funksprüche warten bis zur Freigabe oder zum Abbruch – ABORT darf jeder', 'Freier Funkverkehr', 'Nur die Besatzung spricht', 'Nur die ASOC spricht'], 'TAD-Disziplin.', 'Kap. V, Abs. 2b(9)'],
    ['Darf die Besatzung bei Type 3 ohne neue Freigabe erneut angreifen?', ['Ja, solange CLEARED TO ENGAGE gilt', 'Nein, nie', 'Nur mit neuem 9-Line', 'Nur bei BOC'], 'Bei Type 1 und 2 muss jeder Reattack angefordert und freigegeben werden.', 'Kap. V, Abs. 2b(10)'],
    ['Wie korrigiert der JTAC nach den Einschlägen der Führung?', ['„From lead’s hits, north 100“', '„Two o’clock, 100“', '„Left 100“', '„Drop 100“'], 'Himmelsrichtung und Meter.', 'Kap. V, Abs. 2b(10)'],
    ['Wofür steht das „A“ in SALTR?', ['Activity', 'Assessment', 'Altitude', 'Aimpoint'], 'Size, Activity, Location, Time, Remarks.', 'Kap. V, Abs. 2b(11)'],
    ['Was muss eine BDA mindestens enthalten?', ['SUCCESSFUL, UNSUCCESSFUL oder UNKNOWN', 'Die Zahl der Toten', 'Die Munitionsmenge', 'Die Koordinate'], 'Bezogen auf die Absicht des Kommandeurs, für die ganze Rotte.', 'Kap. V, Abs. 2b(11)'],
    ['Was ist die RED?', ['Entfernung mit 0,1 % Ausfallwahrscheinlichkeit für eigene Kräfte', 'Die kleinste Abwurfhöhe', 'Die Reichweite der Bedrohung', 'Die Entfernung für Danger Close bei Artillerie'], '1 zu 1.000. Werte stehen in der JFIRE.', 'Kap. III, Abs. 11d'],
    ['Was bedeutet Danger Close in CAS?', ['Waffeneinsatz innerhalb der 0,1-%-Pi-Entfernung', 'Waffeneinsatz innerhalb 600 m', 'Waffeneinsatz innerhalb 1 km', 'Jeder Einsatz bei TIC'], 'Der unterstützte Kommandeur übernimmt das Risiko.', 'Kap. III, Abs. 11d'],
    ['Welche Anflugrichtung wählt man bei Danger Close bevorzugt?', ['Parallel zur Achse der eigenen Kräfte', 'Über die eigenen Kräfte hinweg', 'Senkrecht auf die eigenen Kräfte zu', 'Beliebig'], 'So landen Weit- und Kurzschüsse nicht bei den eigenen Kräften.', 'Kap. III, Abs. 11d'],
    ['Was gilt bei CAS ohne qualifizierten JTAC?', ['Die Besatzung übernimmt mehr Verantwortung; Bodenpersonal darf abbrechen', 'CAS ist verboten', 'Nur Type 3 ist erlaubt', 'Die ASOC gibt die Freigabe'], 'Der Kommandeur trägt das Risiko.', 'Kap. V, Abs. 4'],
    ['Was ist ein PLA?', ['Abbruch nach dem Start einer Waffe, die das zulässt', 'Ein Haltepunkt', 'Eine Luftraumkoordinierungsmaßnahme', 'Ein Laserverfahren'], 'Vorab vom unterstützten Kommandeur genehmigt; PLA-Punkt in den Restrictions.', 'Kap. III, Abs. 11f'],
    ['Was enthält der INFLTREP?', ['Rufzeichen, Mission Number, Ort, Zeit über dem Ziel, Ergebnisse, Bemerkungen', 'Nur die BDA des JTAC', 'Den 9-Line', 'Den Check-in'], 'Die Besatzung meldet ihn an die Führungsstelle.', 'Kap. V, Abb. V-12']
  ]);

  add('m14', [
    ['Welches Dokument steht direkt über der ATP-3.3.2.1?', ['AJP-3.3.2', 'AJP-3.3', 'AJP-3', 'JP 3-09.3'], 'AJP-3 → AJP-3.3 → AJP-3.3.2 → ATP-3.3.2.1.', [['ajp33', 'Abs. 11–13 (Einleitung)']]],
    ['Was bedeutet ** bei einem Begriff in ATP 1-02.1?', ['Kein NATO-Brevity-Begriff', 'NATO-Bedeutung weicht ab', 'Nur für Ausbildung', 'Nur digital'], '* = Bedeutung weicht ab.', [['atp1021', 'Kap. I']]],
    ['Welcher Begriff ist laut ATP 1-02.1 kein NATO-Brevity-Begriff?', ['CLEARED TO ENGAGE', 'CLEARED HOT', 'ABORT', 'TALLY'], 'Auch ENGAGEMENT COMPLETE, STARE, SQUIRTER, SLEW.', [['atp1021', 'Kap. I']]],
    ['Welcher Begriff hat bei der NATO eine abweichende Bedeutung (*)?', ['CAPTURED', 'VISUAL', 'CONTINUE', 'WINCHESTER'], 'Auch NO JOY, MATCH, CEASE, RIFLE, BINGO, JOKER.', [['atp1021', 'Kap. I']]],
    ['Auf welche Edition der ATP-3.3.2.1 verweist JP 3-09.3 (2014)?', ['Edition C', 'Edition D', 'Edition A', 'Edition B'], 'Deine Edition D (2019) ist neuer.', 'Kap. III, Abs. 26'],
    ['Wie heißt der JTAC in der Bundeswehr auch?', ['Fliegerleitoffizier', 'Feuerleitoffizier', 'Fliegerverbindungsoffizier', 'Luftraumkoordinator'], 'Laut Veröffentlichungen der Bundeswehr.', [['bw1', '']]],
    ['Wie viele Soldaten hat ein JFST (Beispiel FschJgRgt 31)?', ['Sechs in zwei Trupps', 'Vier in einem Trupp', 'Zwölf in drei Trupps', 'Zwei'], 'Mindestens ein JTAC, Luft-/Boden-Feldwebel, Beobachter.', [['bw2', '']]],
    ['Wo erhalten Fliegerleitoffiziere u. a. ihre Lizenz?', ['Bei der Übung Stoneage in Munster', 'Bei Red Flag in Nevada', 'An der Offizierschule des Heeres', 'Bei Trident Juncture'], 'Jährliche Übung mit Partnernationen.', [['bw1', '']]],
    ['Warum enthält diese App keine Werte aus der JFIRE?', ['Die JFIRE ist CUI mit eingeschränkter Weitergabe', 'Die JFIRE ist veraltet', 'Die JFIRE enthält keine Werte', 'Die JFIRE gilt nicht für die NATO'], 'Werte lernst du am Original.', [['jfire', '']]],
    ['Welches NATO-Wort entspricht der US-Brevity BUZZER?', ['CHATTER', 'MUSIC', 'NOISE', 'STATIC'], 'Laut Hinweis in ATP 1-02.1.', [['atp1021', 'Kap. I']]],
    ['Was macht das JFSCT?', ['Berät den Kommandeur und koordiniert Wirkmittel und Luftraumordnung', 'Führt CAS selbst aus', 'Fliegt FAC(A)-Einsätze', 'Erstellt die ATO'], 'Auf Verbandsebene.', [['bw2', '']]]
  ]);
})();
