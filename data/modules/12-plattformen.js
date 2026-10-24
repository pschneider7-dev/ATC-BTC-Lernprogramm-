(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm12',
    nr: 12,
    title: 'Plattformen, Taktiken und digitale CAS',
    summary: 'Flughöhenbereiche und Angriffsarten von Starrflüglern, Drehflügler-CAS mit dem RW-5-Line, Bomber und UAS, FAC(A) und TAC(A), Gunship, Show of Force und Digitally Aided CAS.',
    goals: [
      'Flughöhenbereiche von Starr- und Drehflüglern mit Vor- und Nachteilen nennen',
      'Den RW-CAS-5-Line aufbauen und von CCA abgrenzen',
      'Die FAC(A)-Aufgaben BRIEF, STACK, MARK, CONTROL zuweisen',
      'Gründe für einen Show of Force nennen',
      'Die Warnungen zu Digitally Aided CAS kennen'
    ],
    sections: [
      {
        id: 'm12s1',
        title: 'Taktiken von Starrflüglern',
        html:
          '<p>Die Besatzung entscheidet über die Taktik, muss aber die Beschränkungen des JTAC einhalten.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Bereich</th><th>Höhe</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>' +
          '<tr><td>Medium/High</td><td>über ca. 8.000 ft AGL; High Altitude Bombing: Auslösung über 15.000 ft AGL</td><td>alle sehen Zielgebiet und Marken; weniger Treibstoff, längere Verweilzeit; einfache Navigation; außer Reichweite von AAA und MANPADS; flexible Angriffsachsen; einfache TOT; Staffelung in der Höhe („stack“); bessere Lenkwaffenleistung durch steileren Einschlag</td><td>frühe Entdeckung; lokale Luftüberlegenheit nötig; ggf. hohe Wolkenuntergrenze nötig; JTAC sieht das Luftfahrzeug schwerer; Zielauffassung schwieriger; ungelenkte Waffen ungenauer</td></tr>' +
          '<tr><td>Low/Very Low</td><td>500–8.000 ft AGL bzw. unter 500 ft AGL</td><td>späte Entdeckung; ohne Luftüberlegenheit möglich; unter tiefen Wolken; kürzere Schrägentfernung; Geometrie für den JTAC leichter zu beurteilen</td><td>anspruchsvolle Navigation; Hindernisvermeidung bindet die Besatzung; wenig Zeit zur Zielauffassung; hoher Verbrauch; Funk durch Gelände gestört; Kleinwaffen, MANPADS, AAA</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Angriffsarten</h3>' +
          '<ul>' +
          '<li>Mittlere/große Höhe: <strong>Level</strong> (Auslösung oft außer Sicht, Nase zeigt nicht auf den Einschlag), <strong>Dive</strong> (5–60°), <strong>Dive Toss</strong>.</li>' +
          '<li>Geringe Höhe: <strong>Level</strong>, <strong>Loft</strong> (Hochziehen, Bombe fliegt ballistisch), <strong>Pop-up</strong> (aus geringer Höhe hochziehen, dann Level oder Dive), <strong>Dive</strong> (5–45°).</li>' +
          '</ul>' +
          '<h3>Warteverfahren</h3>' +
          '<dl><dt>Racetrack</dt><dd>Oval mit geraden Schenkeln von mindestens 10 Meilen (Bomber 10–40 Meilen vom Ziel, Schenkel mindestens 20 NM); quer oder parallel zum Ziel. Beispiel: „Hold 180 radial, 10-20 nautical miles, right-hand turns.“</dd><dt>Figure 8</dt><dd>wie Racetrack, aber mit 230°-Kurven zum Ziel hin, meist quer zum Ziel.</dd><dt>Wheel</dt><dd>Kreis um das Ziel; geeignet für nichtlineare Gefechtsfelder.</dd></dl>' +
          '<h3>Koordinierte Angriffe</h3>' +
          '<p>Mehrere Flights greifen gemeinsam an – <strong>combined</strong> (gleicher Anflugweg) oder <strong>sectored</strong> (eigene Sektoren), jeweils <strong>simultaneous</strong> oder <strong>sequential</strong>, mit Abstand durch Sicht oder Zeit (z. B. „combined/sequential/visual“, „sectored/sequential/1 minute“). Der JTAC muss koordinierte Angriffe genehmigen; ein Tactical Lead hat keine TAC-Befugnis. Standardregeln:</p>' +
          '<ol><li>Abfliegende Luftfahrzeuge haben Vorrang.</li><li>Der JTAC muss Wiederholungsangriffe genehmigen (nach Abstimmung mit dem Kommandeur).</li><li>Wer in einen fremden Sektor gerät, meldet das sofort dem anderen Flight und dem JTAC und verlässt ihn.</li><li>Munition, die in einen anderen Sektor wirken kann, vorher abstimmen.</li></ol>',
        src: [['jp3093', 'Kap. III, Abs. 15a, Abb. III-23, III-24']]
      },
      {
        id: 'm12s2',
        title: 'Drehflügler und der RW-CAS-5-Line',
        html:
          LP.callout('warn', 'CCA ist nicht CAS', 'Die US Army betrachtet ihre Kampfhubschrauber nicht als CAS-System. Sie nutzt <strong>Close Combat Attack (CCA)</strong>: Angriff von Heeresfliegern zur Unterstützung von Truppen im Nahkampf, bei dem die Besatzung genug Lagebewusstsein hat, sodass keine Terminal Control vom Boden nötig ist. USMC-Kampfhubschrauber dagegen sind für CAS ausgebildet.') +
          '<h3>Flughöhen und Bewegung</h3>' +
          '<ul><li>Drehflügler: <strong>High</strong> über 3.000 ft AGL, <strong>Medium</strong> 500–3.000 ft, <strong>Low</strong> unter 500 ft.</li>' +
          '<li>Terrain Flight: <strong>Low Level</strong> (konstant, meist 100–200 ft AGL), <strong>Contour</strong> (meist 50–100 ft AGL), <strong>Nap-of-the-Earth</strong> (so tief, wie Bewuchs und Hindernisse es erlauben).</li>' +
          '<li>Bewegungsarten: <strong>Traveling</strong> (Feindberührung unwahrscheinlich), <strong>Traveling Overwatch</strong> (möglich), <strong>Bounding Overwatch</strong> (unmittelbar bevorstehend).</li>' +
          '<li>HA (Warteraum) und BP (Feuerstellungsraum mit Feuerstellungen) wirken während der Nutzung als informelle ACA.</li>' +
          '<li>Angriff: <strong>Hovering Fire</strong> (am besten für Präzisionsmunition), <strong>Running Fire</strong> (stabiler für ungelenkte Waffen, kleinere Signatur), <strong>Diving Fire</strong> (oft am genauesten mit ungelenkter Munition, über der Bedrohung).</li></ul>' +
          '<h3>RW-CAS-5-Line</h3>' +
          LP.kneeboard({
            title: 'Rotary-Wing CAS 5-Line',
            note: 'JP 3-09.3, Abb. III-27',
            lines: [
              { n: '1', t: 'Observer / Warning Order / Game Plan', d: '„(Aircraft), (JTAC), 5-line, Type (1, 2, 3) control, (BOT/BOC), (ordnance requested)“' },
              { n: '2', t: 'Friendly Location / Mark', d: '„My position (TRP, grid …), marked by (VS-17, beacon, IR strobe …)“' },
              { n: '3', t: 'Target Location', d: 'magnetische Richtung und Entfernung in Metern, TRP oder Koordinate' },
              { n: '4', t: 'Target Description / Mark', d: '„(description), marked by (IR sparkle, tracer …)“' },
              { n: '5', t: 'Remarks / *Restrictions', d: '*FAH, LTL/PTL, Bedrohung und SEAD, *ACAs, *Danger Close + Initialen, geforderte Calls, GTL, Wetter, Gefahren, Eigenmarkierung, *TOT/TTT', rb: true }
            ],
            foot: 'Keine Zeilennummern senden. Restrictions sind Readback-Pflicht. Möglichst in einer Übertragung.'
          }) +
          '<ul>' +
          '<li>„<strong>Friendly-centric</strong>“: Der Brief setzt voraus, dass die Besatzung die eigenen Kräfte findet und von dort das Ziel. Fehlt dieses Lagebewusstsein (z. B. unbekannter Raum, keine klare FLOT), den zielbezogenen 9-Line verwenden.</li>' +
          '<li>Line 2: möglichst benannte Orte oder GEOREFs statt eigener Koordinaten.</li>' +
          '<li>Line 3: besser Versatz von bekanntem Punkt als Koordinate – die Besatzung sucht mit dem Auge.</li>' +
          '<li>Der 5-Line ist ein CAS-Brief, <strong>keine Freigabe</strong>. Bei Army- oder SOF-Besatzungen „At my command“ anhängen.</li>' +
          '<li>Die Besatzung fliegt nach dem Readback sofort an. Soll sie eine TOT einhalten, muss das deutlich in den Restrictions stehen.</li>' +
          '</ul>' +
          LP.radio([
            ['JTAC', 'Deuce 31, Broadsword 11, 5-line, Type 2 control, BOT, rockets and guns, my position is checkpoint 295 marked by IR strobe, northwest 200, single technical vehicle marked by IR SPARKLE, make all attacks over my right shoulder, left pull, keep all effects of fires west of MSR Clovis.'],
            ['AIR', 'Deuce 31 copies over your right shoulder, left pull, keep all effects of fires west of MSR Clovis, pushing.'],
            ['JTAC', 'Deuce 31, CONTINUE.'],
            ['AIR', 'Deuce 31 and flight, VISUAL, TALLY, IN.'],
            ['JTAC', 'Deuce 31 and flight, CLEARED HOT.']
          ]),
        src: [['jp3093', 'Kap. I, Abs. 5c; Kap. III, Abs. 15b, 16']]
      },
      {
        id: 'm12s3',
        title: 'Bomber und unbemannte Luftfahrzeuge',
        html:
          '<h3>Bomber</h3>' +
          '<ul>' +
          '<li>Anflug bis über 12 Stunden – die Lageinformationen können veraltet sein; über SATCOM oder Datenlink (Link 16) aktualisieren.</li>' +
          '<li>Verweilzeit 8 Stunden und mehr. Typische Höhen: B-1 im Bereich Mitte bis Ende 20.000 ft, B-52 und B-2 bis Ende 30.000 bis Anfang 40.000 ft.</li>' +
          '<li>Prüfen das Ziel mit Radar oder Zielbehälter aus 40 bis 5 NM. Waffenauslösung mit IAM typischerweise 6–12 NM vor dem Ziel; Splash-Zeit kann ±10 s abweichen.</li>' +
          '<li>Bevorzugtes Koordinatenformat DD-MM.MMMM; Level Deliveries; Wiederholungsangriffe nach 5–20 min.</li>' +
          '<li>Der JTAC übermittelt gewünschte Wirkung, Größe und Achse des Zielgebiets; die Besatzung legt das Waffenmuster und prüft es gegen die REDs.</li>' +
          '</ul>' +
          '<h3>Unbemannte Luftfahrzeuge (UAS)</h3>' +
          '<ul>' +
          '<li>Sensoren: EO (Farbe), IR (Tag/Nacht), Restlicht, Laserbeleuchter, IR-Pointer, SAR, GMTI; Bewaffnung z. B. Hellfire und GPS-Munition; Funkrelais als „Ersatzsatellit“ in Stadt oder Gebirge.</li>' +
          '<li>Besonderheiten: kein „see and avoid“, Plan für Funkausfall und Link-Verlust (Lost Link), langsame Verlegung über große Strecken, Wetter bei Start und Landung, Lärm und Sicht können eigene Stellungen verraten. UAS halten alle Laserbeschränkungen ein.</li>' +
          '<li>Geschwindigkeit 60–250 kt; Standard-IP-Matrizen liegen meist zu weit weg. Bewaffnete UAS kreisen über dem Ziel: <strong>Wheel</strong> mit 5–8 km (2,5–4,5 NM) Radius; <strong>Figure-8</strong> oder <strong>Racetrack</strong>, wenn FAH-Beschränkungen nötig sind.</li>' +
          '<li>Briefing mit RW-5-Line oder 9-Line.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 17–18, Abb. III-28 bis III-31']]
      },
      {
        id: 'm12s4',
        title: 'FAC(A) und TAC(A)',
        html:
          '<p>Der FAC(A) meldet beim Check-in „FAC(A) capable/qualified“. Er braucht eine ausführlichere Situation Update als ein normales CAS-Luftfahrzeug. Seine drei Ziele: <strong>Absicht des Kommandeurs erreichen</strong>, <strong>Feuer maximieren und integrieren</strong>, <strong>Eigenbeschuss vermeiden</strong>.</p>' +
          '<p>Fähigkeiten: TAC (Type 1–3), Funkrelais, Aufklärung, Call for Fire für Steilfeuer, Koordination und Entflechtung, BDA, Markierung, Zielbeleuchtung, Koordinatenerzeugung, SEAD-Koordination.</p>' +
          '<h3>Aufgabenteilung JTAC – FAC(A)</h3>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Brevity</th><th>Der FAC(A) …</th></tr></thead><tbody>' +
          '<tr><td><strong>BRIEF</strong></td><td>gibt Lageupdates, verfügbare CAS-Briefs und BDA an CAS-Luftfahrzeuge weiter und nimmt deren Check-in auf.</td></tr>' +
          '<tr><td><strong>STACK</strong></td><td>entflechtet alle CAS-Luftfahrzeuge untereinander und von Bodenfeuer (Halteräume, An- und Abflug, Zielräume).</td></tr>' +
          '<tr><td><strong>MARK</strong></td><td>markiert Ziele (auch Talk-ons). Vor einer autonomen Markierung meldet er „IN for the MARK“, damit der JTAC abbrechen kann.</td></tr>' +
          '<tr><td><strong>CONTROL</strong></td><td>erteilt die abschließende Freigabe, wenn der JTAC sie delegiert. Der JTAC behält die Abort-Befugnis. Den Begriff „Joint Control“ nicht verwenden.</td></tr>' +
          '</tbody></table></div>' +
          LP.radio([
            ['JTAC', 'Venom 11 has stack, A3C maintains brief, mark, and control.'],
            ['JTAC', 'Bengal 61 has stack and mark, Titus maintains brief and control.'],
            ['JTAC', 'Hawk 81, Broadsword 02, your brief, stack, mark, and control.']
          ]) +
          '<p>Zuständigkeiten werden immer zurückbestätigt. Kommunikationstechniken bei viel Verkehr: zwei bis drei Frequenzen (alle TAC auf dem primären TAD), „HEADS UP“-Call vor einem Brief für alle, Funksprüche auf 10 s begrenzen, Luftfahrzeuge melden „THIRTY SECONDS“ vor dem IN-Call.</p>' +
          '<p><strong>Battle Handover</strong> vor dem Check-out des FAC(A): Luftfahrzeuge im Raum (Ort, Munition, Restzeit, Entflechtung), Bedrohung, durchgeführte Einsätze (bekämpfte Ziele, laufende Type-3-Freigaben, verbleibende Ziele mit Priorität), Fernmeldeplan, Empfehlungen.</p>' +
          '<h3>TAC(A)</h3>' +
          '<p>Luftgestützte Verlängerung von ASOC bzw. DASC: CAS-Briefs und TOTs weitergeben, Übergaben an Controller, Lage und BDA weiterleiten, JTARs bearbeiten, Funkrelais, ggf. Start, Verzögerung oder Umsteuern. <strong>FAC(A)- und TAC(A)-Rolle nie gleichzeitig.</strong></p>',
        src: [['jp3093', 'Kap. III, Abs. 23–24; Kap. V, Abs. 5']]
      },
      {
        id: 'm12s5',
        title: 'Gunship und Show of Force',
        html:
          '<h3>Spezialkräfte-Gunship</h3>' +
          '<p>Wegen präziser Feuerleitung, Sensoren und Lagebewusstsein braucht das Gunship meist keine Kontrollart, kein „cleared hot“ und keinen JTAC zur Steuerung seines Feuers. Es nutzt den Gunship-Call-for-Fire (gleiches Format wie der 5-Line); für Präzisionswaffen oder nach Absprache nimmt es auch einen CAS-Brief. Pflichtangaben: genaue Bedrohung, Markierung eigener Stellungen, erkennbare Geländemerkmale, Bereitschaft des Kommandeurs zu Danger Close. Die Übermittlung des Feuerauftrags ist die Freigabe – außer bei Danger Close.</p>' +
          '<p>Korrekturen: Entfernung in Metern und Himmelsrichtung; Sparkle verschieben mit „MOVE SPARKLE 300 METERS WEST“, anhalten mit „FREEZE SPARKLE“ („CEASE SPARKLE“ schaltet ihn ab). Mit Radarbake werden alle Richtungen und Entfernungen von der Bake aus angegeben.</p>' +
          '<h3>Show of Force</h3>' +
          '<p>Eine nicht-letale Machtdemonstration durch sichtbare Präsenz, um eine Lage zu entschärfen. Sie braucht ein Ziel und eine gewünschte Wirkung und muss ROE und SPINS entsprechen. Gründe laut JP 3-09.3:</p>' +
          '<ol>' +
          '<li>Luftfahrzeug ohne oder mit ungeeigneter Munition.</li>' +
          '<li>Eigene Kräfte zu nahe am Feind für sicheren Waffeneinsatz bzw. ROE erlauben keinen Waffeneinsatz.</li>' +
          '<li>Eigene Kräfte oder Pilot können die Feindposition nicht genau bestimmen.</li>' +
          '<li>Eine Einheit ohne direkte Verbindung zum JTAC ist in Feindberührung – der Show of Force zeigt, dass Luftunterstützung da ist.</li>' +
          '<li>Zivilisten haben sich versammelt und sollen sich zerstreuen.</li>' +
          '<li>Unbekannte Personen zeigen mögliche feindliche Absichten; der Kommandeur will noch nicht eskalieren.</li>' +
          '</ol>' +
          LP.callout('warn', 'Risiko', 'Für einen Show of Force verlassen Luftfahrzeuge meist ihren geschützten Höhenbereich und fliegen in mögliche Bedrohungen. Freigabe dafür: „CONTINUE DRY“, nie „CLEARED“.'),
        src: [['jp3093', 'Kap. III, Abs. 11f(5), 19, 20, Abb. III-32, III-33']]
      },
      {
        id: 'm12s6',
        title: 'Digitally Aided CAS (DACAS)',
        html:
          '<div class="def"><span class="term">DACAS</span><p>Maschine-zu-Maschine-Austausch der erforderlichen CAS-Daten (z. B. Check-in, CAS-Brief, BDA) zwischen JTAC/FAC(A) und CAS-Plattform oder Führungsstelle, um ein Bodenziel anzugreifen.</p></div>' +
          '<ul>' +
          '<li><strong>BLOS</strong>-Verbindungen: Link 16, SADL – Lagebild für viele Teilnehmer, ggf. schon vor dem Sprechfunkkontakt.</li>' +
          '<li><strong>LOS</strong>-Formate: VMF (Variable Message Format, MIL-STD-6017, K-Series-Nachrichten), AFAPD, MTS. VMF ist der LOS-Standard für die TAC-Phase.</li>' +
          '<li>Vorteile: Automatisierung, Tempo, weniger Übertragungsfehler, besseres Lagebild. Nachteile: Abschneiden von Text und Eingabefehler, Abstimmungsaufwand für Interoperabilität, Mehrarbeit in visuellen Lagen.</li>' +
          '<li>Sprechfunk bleibt das Hauptmittel. Der JTAC muss jederzeit auf Sprache umschalten können.</li>' +
          '<li>Readbacks erfolgen mündlich. Laser-Brevity und Korrekturen von einer Marke nur per Sprache. CLEARED HOT, CLEARED TO ENGAGE und ABORT primär per Sprache, digital nur zusätzlich danach.</li>' +
          '<li>Free-Text-Lagemeldung höchstens etwa 200 Zeichen, Teile mit „//“ trennen; Game Plan z. B. „TYPE 2//BOC“.</li>' +
          '</ul>' +
          LP.callout('crit', 'Zwei Warnungen aus JP 3-09.3', '1. Vorhandene oder fehlende digitale Information <strong>ersetzt keine Freigabe und ist keine Freigabe</strong>.<br>2. Die angezeigte Trackqualität sagt <strong>nichts über den Zielortungsfehler (TLE)</strong> aus.') +
          '<dl>' +
          '<dt>SPI</dt><dd>Sensor Point of Interest: Ort (Koordinate und Höhe), auf den das System seinen Sensor gerichtet berechnet.</dd>' +
          '<dt>DGT</dt><dd>Designated Ground Target: vom Luftfahrzeug für den Waffeneinsatz gewählter Ort. Die Auswahl als DGT bedeutet <em>keine</em> Waffenfreigabe.</dd>' +
          '<dt>Digital Readback</dt><dd>Bestätigung durch das System, dass die gesendeten Elemente angenommen wurden.</dd>' +
          '<dt>TIMBER SWEET / SOUR</dt><dd>Link-16-Netz funktioniert bzw. hat Probleme beim Netzeintritt.</dd>' +
          '</dl>',
        src: [['jp3093', 'Kap. III, Abs. 21, Abb. III-35; Kap. IV, Abs. 5'], ['atp1021', 'Kap. I']]
      }
    ],
    atp: [
      'Welche Flughöhenbereiche und Angriffsprofile nennt deine ATP-3.3.2.1?',
      'Enthält die ATP ein eigenes Briefing-Format für Drehflügler (z. B. 5-Line)?',
      'Wie regelt die ATP die Zusammenarbeit mit FAC(A) und die Übergabe von Aufgaben?',
      'Welche Hinweise gibt die ATP zu Show of Force und zu digitaler CAS?'
    ],
    jfire: [
      'Schlage in deiner JFIRE nach, wo Fähigkeiten, Bewaffnung, Funkgeräte und Markierungsmittel der Luftfahrzeuge (FW, RW, UAS) stehen. Fundstellen merken, keine Werte übertragen.'
    ]
  });
})();
