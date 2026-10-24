(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm11',
    nr: 11,
    title: 'Steilfeuer, Call for Fire und JFO',
    summary: 'Die sechs Elemente des Call for Fire, Zielortungsmethoden, Danger Close bei Artillerie und Mörsern, Feuerleitung, Korrekturverfahren und die Zusammenarbeit von JTAC und JFO.',
    goals: [
      'Einen Call for Fire in drei Übertragungen aufbauen',
      'Danger-Close-Abstände für Steilfeuer nennen und vom RED abgrenzen',
      'Abweichungskorrekturen mit dem OT-Faktor berechnen',
      'Gabel- und Kriechfeuerverfahren unterscheiden',
      'Observer Lineup und JFO Target Brief anwenden'
    ],
    sections: [
      {
        id: 'm11s1',
        title: 'Aufbau des Call for Fire',
        html:
          '<p>Der Call for Fire (CFF) besteht aus <strong>sechs Elementen in drei Übertragungen</strong>, jeweils mit Pause und Readback durch die Feuerleitstelle (FDC). Jede Übertragung wird gesendet, sobald sie feststeht.</p>' +
          LP.kneeboard({
            title: 'Call for Fire',
            note: 'ATP 3-09.30, Kap. 4',
            lines: [
              { n: '1', t: 'Observer Identification + Warning Order', d: 'Wer ruft; Art des Auftrags, Größe der wirkenden Einheit, Methode der Zielortung' },
              { n: '2', t: 'Target Location', d: 'Grid (Standard), Laser Grid, Polar, Laser Polar, Shift from a Known Point' },
              { n: '3', t: 'Target Description · Method of Engagement · Method of Fire and Control', d: 'Was, Tätigkeit, Anzahl, Schutz, Größe; Einschießart, Danger Close, Mark, Flugbahn, Munition, Verteilung; Feuerart und Feuerleitung' }
            ],
            foot: 'Immediate Suppression und Immediate Smoke werden in <strong>einer</strong> Übertragung gesendet.'
          }) +
          '<h3>Warning Order: Art des Auftrags</h3>' +
          '<dl>' +
          '<dt>ADJUST FIRE</dt><dd>Einschießen nötig, weil Zielort unsicher oder keine Registrierkorrekturen vorliegen.</dd>' +
          '<dt>FIRE FOR EFFECT</dt><dd>Der Beobachter ist sicher, dass die erste Salve wirkt. Ziel ist immer „first round fire for effect“.</dd>' +
          '<dt>SUPPRESS</dt><dd>schnelles Feuer auf ein geplantes, nicht aktives Ziel, meist mit Dauer.</dd>' +
          '<dt>IMMEDIATE SUPPRESSION / IMMEDIATE SMOKE</dt><dd>gegen ein Ziel, das eigene Kräfte beschießt – gefolgt vom Zielort.</dd>' +
          '</dl>' +
          '<p>Die Feuerleitstelle entscheidet am Ende selbst über die wirkende Einheit und Munition (Angriffsrichtlinien, Waffenwirkungsberechnung, ROE) und teilt dies in der <strong>Message to Observer (MTO)</strong> mit: wirkende Einheit(en), Änderungen gegenüber dem CFF, Anzahl der Schuss, Zielnummer. Der Beobachter liest die MTO vollständig zurück.</p>',
        src: [['atp30930', 'Kap. 4, Abs. 4-8 bis 4-17, 4-68 ff.']]
      },
      {
        id: 'm11s2',
        title: 'Methoden der Zielortung im CFF',
        html:
          '<dl>' +
          '<dt>Grid</dt><dd>Standard, wird in der Warning Order nicht angesagt. Mindestens <strong>6-stellig</strong> für einen Kartenpunkt; <strong>8- oder 10-stellig</strong> für Registrierpunkte und wenn mehr Genauigkeit nötig ist. Die Höhe folgt direkt auf die Koordinate; die Richtung Beobachter–Ziel wird nach dem CFF nachgereicht.</dd>' +
          '<dt>Laser Grid</dt><dd>wie Grid, aber 8- oder 10-stellig, und Korrekturen werden als Koordinate des Einschlags gesendet („FIRE FOR EFFECT, LASER GRID“). Mit Präzisionsgerät wird die <strong>TLE</strong> mitgesendet: „GRID ND1234567890, ALTITUDE 390 M HAE, TLE 2.9“.</dd>' +
          '<dt>Polar</dt><dd>Zielort bezogen auf die Beobachterposition (die FDC muss sie kennen): Richtung, Entfernung, Höhenunterschied („ADJUST FIRE POLAR“).</dd>' +
          '<dt>Laser Polar</dt><dd>Richtung auf 1 Strich (statt 10), Entfernung auf 10 m.</dd>' +
          '<dt>Shift from a Known Point</dt><dd>Bezug auf einen bekannten Punkt oder ein erfasstes Ziel („ADJUST FIRE, SHIFT KNOWN POINT 1“). Dann: Richtung Beobachter–Ziel; seitliche Verschiebung links/rechts in Metern; ADD/DROP auf 100 m; UP/DOWN auf 5 m (bedeutsam ab 35 m).</dd>' +
          '</dl>' +
          LP.callout('tip', 'Richtung an die FDC', 'Die FDC braucht eine <strong>Gitterrichtung</strong>, normalerweise auf 10 Strich genau. Eine Magnetkompassrichtung wird vorher umgerechnet. Ändert sich die Richtung um mehr als 100 Strich, wird sie neu gesendet.'),
        src: [['atp30930', 'Kap. 4, Abs. 4-18 bis 4-28; Kap. 5, Abs. 5-26']]
      },
      {
        id: 'm11s3',
        title: 'Beschreibung, Einsatzart, Feuerleitung – und Danger Close',
        html:
          '<h3>Method of Engagement</h3>' +
          '<ul>' +
          '<li><strong>Art des Einschießens</strong>: Area (Standard) oder Precision (Registrierung, Zerstörung – „DESTRUCTION“).</li>' +
          '<li><strong>DANGER CLOSE</strong> und <strong>MARK</strong> werden bei Bedarf aufgenommen.</li>' +
          '<li><strong>Flugbahn</strong>: Low Angle ist Standard; High Angle z. B. hinter Deckungen. Mörser schießen nur steil.</li>' +
          '<li><strong>Munition</strong>: HE mit Aufschlagzünder ist Standard beim Einschießen; weitere u. a. WP, Smoke, Illum, ICM, Excalibur, GMLRS. Zünder: PD, VT, MT, ET, MTSQ, Delay.</li>' +
          '<li><strong>Volumen</strong> in Schuss pro Rohr („3 ROUNDS“) und <strong>Verteilung</strong> (Standard: Kreis mit 100 m Radius; converged, open, linear oder Sondergarbe).</li>' +
          '</ul>' +
          '<div class="def"><span class="term">Danger Close bei Steilfeuer (ATP 3-09.30)</span><p>DANGER CLOSE wird in die Einsatzart aufgenommen, wenn das Ziel bzw. die Einschläge <strong>innerhalb von 600 m</strong> von eigenen Truppen liegen bei <strong>Mörsern und Artillerie</strong> und <strong>innerhalb von 750 m</strong> bei <strong>5-Zoll-Schiffsgeschützen und TLAM</strong>.</p></div>' +
          LP.callout('crit', 'Danger Close ist nicht RED', 'Danger Close im Call for Fire und die Risk-Estimate Distances (REDs) sind laut ATP 3-09.30 unterschiedliche Dinge. REDs stehen in der JFIRE. Bei CAS gilt als Danger Close jeder Einsatz innerhalb der 0,1-%-Pi-Distanz (siehe Modul 13).') +
          '<h3>Method of Fire and Control</h3>' +
          '<dl>' +
          '<dt>Fire when ready</dt><dd>Standard ohne Ansage.</dd>' +
          '<dt>AT MY COMMAND</dt><dd>Die FDC meldet „… IS READY“, der Beobachter befiehlt „FIRE“; gilt bis „CANCEL AT MY COMMAND“.</dd>' +
          '<dt>TIME ON TARGET</dt><dd>„TIME ON TARGET 0859“ – Uhren vorher synchronisieren.</dd>' +
          '<dt>TIME TO TARGET</dt><dd>„TIME TO TARGET (minutes and seconds), STANDBY, HACK“.</dd>' +
          '<dt>CANNOT OBSERVE</dt><dd>Beobachter kann das Ziel nicht sehen.</dd>' +
          '<dt>CHECK FIRING</dt><dd>sofortiger Feuerstopp, nur wenn wirklich nötig (Sicherheit).</dd>' +
          '<dt>CEASE LOADING</dt><dd>nicht weiter laden; geladene Schüsse dürfen gefeuert werden.</dd>' +
          '<dt>SPLASH</dt><dd>Die FDC meldet SPLASH 5 s vor dem Einschlag – Pflicht bei Luftbeobachtern und Steilfeuer.</dd>' +
          '<dt>REPEAT, DURATION, Illumination</dt><dd>Wiederholen, Dauer bei Niederhalten/Nebel, koordinierte bzw. durchgehende Beleuchtung.</dd>' +
          '</dl>',
        src: [['atp30930', 'Kap. 4, Abs. 4-29 bis 4-65']]
      },
      {
        id: 'm11s4',
        title: 'Einschießen und Korrigieren',
        html:
          '<h3>Beobachtungen (Spottings)</h3>' +
          '<ul>' +
          '<li><strong>Entfernung</strong>: OVER, SHORT, TARGET, RANGE CORRECT, DOUBTFUL, LOST, UNOBSERVED.</li>' +
          '<li><strong>Seite</strong>: LINE, LEFT, RIGHT – in Strich vom Zielpunkt.</li>' +
          '</ul>' +
          '<p>Korrekturen werden in Metern und in umgekehrter Reihenfolge gesendet: <strong>Seite, Entfernung, Sprenghöhe</strong>.</p>' +
          '<h3>Seitenkorrektur mit dem OT-Faktor</h3>' +
          '<p>Korrektur (m) = Abweichung (Strich) × <strong>OT-Faktor</strong> (Entfernung Beobachter–Ziel in Kilometern, ab 1.000 m auf ganze Tausend gerundet; unter 1.000 m in Zehnteln). Auf 10 m runden. Die Korrektur ist der Beobachtung <strong>entgegengesetzt</strong>. Unter 30 m ist eine Korrektur gering und wird nur bei Feinkorrektur oder Zerstörung gesendet.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>OT-Entfernung</th><th>OT-Faktor</th><th>Beobachtung</th><th>Korrektur</th></tr></thead><tbody>' +
          '<tr><td class="mono">4.000 m</td><td class="mono">4</td><td class="mono">45 R</td><td class="mono">LEFT 180</td></tr>' +
          '<tr><td class="mono">2.500 m</td><td class="mono">2</td><td class="mono">100 L</td><td class="mono">RIGHT 200</td></tr>' +
          '<tr><td class="mono">3.400 m</td><td class="mono">3</td><td class="mono">55 L</td><td class="mono">RIGHT 160</td></tr>' +
          '<tr><td class="mono">700 m</td><td class="mono">0,7</td><td class="mono">45 L</td><td class="mono">RIGHT 30</td></tr>' +
          '</tbody></table></div>' +
          '<p class="small muted">Bei genau halber Tausend (1.500, 2.500, 3.500 m) wird laut ATP 3-09.30 auf die gerade Zahl gerundet.</p>' +
          '<h3>Entfernung: ADD oder DROP</h3>' +
          '<p>SHORT → <strong>ADD</strong>, OVER → <strong>DROP</strong>, entlang der Linie Beobachter–Ziel.</p>' +
          '<dl>' +
          '<dt>Successive Bracketing</dt><dd>Gabel bilden (einer drüber, einer kurz), dann halbieren mit 800, 400, 200, 100 m. Fire for Effect, wenn der Einschlag mathematisch innerhalb 50 m liegt – also beim Halbieren der 100-m-Gabel.</dd>' +
          '<dt>Hasty Bracketing</dt><dd>Die erste Gabel dient als Maßstab; danach direkt die Korrektur ins Ziel und FIRE FOR EFFECT. Schneller, braucht einen genauen ersten Zielort.</dd>' +
          '<dt>One Round Adjustment</dt><dd>Ohne Gabel: Korrektur vom ersten Einschlag direkt ins Ziel und Fire for Effect – für erfahrene Beobachter oder mit Laserentfernungsmesser.</dd>' +
          '<dt>Creeping Fire</dt><dd><strong>Bei Danger Close</strong>: Einschläge mit Korrekturen von <strong>100 m oder weniger</strong> an das Ziel heranführen, ausgehend vom Einschlag, der den eigenen Kräften am nächsten liegt. Auch bei hohem Kollateralschadensrisiko.</dd>' +
          '</dl>' +
          '<p><strong>Sprenghöhe</strong> (Zeitzünder): Ziel sind 20 m. Erster Schuss als Bodendetonation (GRAZE) → automatisch UP 40. Nicht aus einer Bodendetonation in Fire for Effect gehen.</p>' +
          '<p><strong>Abschluss</strong>: z. B. „END OF MISSION, BMP NEUTRALIZED“ oder „RECORD AS TARGET, END OF MISSION …“; bei ungenauer oder unzureichender Wirkung Korrektur und „REPEAT“.</p>',
        src: [['atp30930', 'Kap. 5, Abs. 5-1 bis 5-62, Tab. 5-1, Tab. 5-2']]
      },
      {
        id: 'm11s5',
        title: 'JFO: Observer Lineup und Target Brief',
        html:
          '<p>JTAC und JFO arbeiten als Team; der JFO ist die verlängerte Hand des JTAC. Der JFO liefert Zieldaten für Type 2 und Type 3, die <strong>TAC-Befugnis bleibt beim JTAC</strong>. JFO und JTAC dürfen jederzeit abbrechen.</p>' +
          '<h3>Observer Lineup (JFO → JTAC)</h3>' +
          LP.radio([
            ['JFO', '(JTAC call sign), this is (JFO call sign) with observer lineup. Over.'],
            ['JFO', 'My position is (grid and/or reference point). I am in (overwatch/convoy/defensive …), located (direction and distance) from target area, marked by (friendly mark). I have (number) targets for CAS. My specialized equipment is (PSS-SOF, LTD with JFO PRF code, LRF, GPS, IR pointer …). Over.']
          ]) +
          '<p>Der JFO muss erklären können, <strong>wie die Koordinaten entstanden sind</strong> (LRF mit GPS, PSS-SOF, Karte und Kompass). Eigene Koordinaten nicht über ungesicherte Netze senden.</p>' +
          '<h3>JFO Target Brief</h3>' +
          LP.kneeboard({
            title: 'JFO Target Brief',
            note: 'JP 3-09.3, Abb. V-16',
            lines: [
              { n: '4', t: 'Target Elevation (ft MSL)', d: 'beginnt mit „Line 4: …“' },
              { n: '5', t: 'Target Description' },
              { n: '6', t: 'Target Location' },
              { n: '7', t: 'Target Mark', d: 'auch Art der Korrelation: Karte, GRG, visueller Talk-on' },
              { n: '8', t: 'Friendlies', d: 'nächste eigene Kräfte – nicht unbedingt der JFO' },
              { n: 'R', t: '„Advise ready for remarks“', d: 'FAH, LTL/PTL, Bedrohung Richtung/Entfernung, SEAD (interrupted/continuous/non-standard), GTL bzw. Schussrichtung, Max Ord, Restrictions, TOT' }
            ],
            foot: 'Eingeleitet mit „advise when ready for JFO target brief“. Fehlt eine Zeile, Zeilennummer + „None“ oder „Unknown“. <strong>Lines 4 und 8 dürfen nie fehlen.</strong> Mindestens empfiehlt der JFO Angriffsbeschränkungen. Der JTAC liest zurück; der JFO antwortet „readback correct“ oder korrigiert.'
          }) +
          '<h3>JTAC an JFO</h3>' +
          '<p>Nach dem Target Brief übermittelt der JTAC seine Absicht und Aufträge: Zielverfeinerung, angeforderte Munition und Wirkung, Angriffsrichtung, Abort Code, TOT, Markierungsaufgaben des JFO (Ziel markieren, Korrekturen von der Marke, Laser-PRF). Der JFO bestätigt, dass er die Aufgaben erfüllen kann, und brieft den Kommandeur vor Ort.</p>' +
          '<ul>' +
          '<li>Der JFO hört auf dem TAD-Netz mit und kann bei Bedarf „ABORT“ rufen.</li>' +
          '<li>Laserkommunikation läuft direkt zwischen JFO und Luftfahrzeug auf TAD.</li>' +
          '<li>Gibt der JFO Zieldaten als einzige Quelle für BOC, prüft der JTAC die Herkunft der Koordinate.</li>' +
          '<li>Erfolgt die Korrelation JFO–JTAC schon vor dem Check-in, ist oft ein schneller BOC-Angriff möglich.</li>' +
          '<li>Der JTAC informiert den JFO über die Auslösung, damit er eigene Kräfte in Deckung gehen lassen kann.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 25; Kap. V, Abs. 6, Abb. V-15 bis V-17']]
      },
      {
        id: 'm11s6',
        title: 'Spezialkräfte-Gunship und CFF-ähnliche Formate',
        html:
          '<p>Das Format des <strong>RW-CAS-5-Line</strong>, des <strong>Army-CCA-Briefs</strong> und des <strong>Call for Fire für Spezialkräfte-Gunships</strong> ist gleich (Details in Modul 12):</p>' +
          '<ol><li>Observer / Warning Order</li><li>Friendly Location / Mark</li><li>Target Location (magnetische Richtung und Entfernung in Metern, TRP, Koordinate)</li><li>Target Description / Mark</li><li>Remarks (Bedrohung, Danger-Close-Freigabe, Beschränkungen, At My Command)</li></ol>' +
          LP.callout('warn', 'Besonderheit Gunship', 'Beim Gunship-CFF ist die Übermittlung des Feuerauftrags bereits die Feuerfreigabe – außer bei Danger Close. Dann „Cleared Danger Close“ mit Initialen des Kommandeurs in Zeile 5. Mit „At My Command“ meldet das Gunship „Ready to Fire“. Korrekturen nur mit Entfernung in Metern und Himmelsrichtung – <strong>nicht</strong> links/rechts, kurz/weit, keine Uhrzeitangaben, keine Farben bei Nacht.'),
        src: [['jp3093', 'Kap. III, Abs. 16, 19, Abb. III-27, III-32, III-33']]
      }
    ],
    atp: [
      'Wie beschreibt deine ATP-3.3.2.1 die Integration von Steilfeuer (Markierung, SEAD) in CAS?',
      'Kennt die ATP den JFO bzw. ein entsprechendes NATO-Gegenstück und dessen Briefing-Formate?',
      'Welche Danger-Close-Regeln nennt die ATP für CAS? Gibt es Hinweise zu Steilfeuer?'
    ],
    jfire: [
      'Schlage in deiner JFIRE nach, wo das Call-for-Fire-Format und die Steilfeuer-REDs bzw. Mindestsicherheitsabstände stehen. Nur Fundstellen merken.'
    ]
  });
})();
