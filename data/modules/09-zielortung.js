(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm09',
    nr: 9,
    title: 'Zielortung, Koordinaten und Genauigkeit',
    summary: 'Methoden der Zielortung, Target Location Error mit den sechs Kategorien, Vermessung (Mensuration), Koordinatenformate, Bezugssysteme, Höhen, Richtungen, Strich und Mil-Formel.',
    goals: [
      'Methoden der Zielortung nach Genauigkeit ordnen',
      'TLE-Kategorien I bis VI mit Werten nennen',
      'Präzision und Genauigkeit einer Koordinate unterscheiden',
      'MSL und HAE sowie magnetisch, Gitter- und geografisch Nord unterscheiden',
      'Mit der Mil-Formel W = R × m rechnen'
    ],
    sections: [
      {
        id: 'm09s1',
        title: 'Methoden der Zielortung',
        html:
          '<p>Wie genau Line 6 sein muss, hängt von der Absicht des Kommandeurs ab – gegen die Zeit, die eine genauere Koordinate kostet. Einflussgrößen: Fähigkeiten der Plattform, Nähe eigener Kräfte, verfügbare Munition, erwartete Schwierigkeit der Zielauffassung, Kollateralschaden und Angriffsmethode. Ein Type-2-BOC mit bodenbeleuchteter LGB braucht eine viel weniger genaue Koordinate als ein Type-2-BOC mit JDAM, bei dem ein Volltreffer nötig ist.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Methode</th><th>Bewertung laut JP 3-09.3</th></tr></thead><tbody>' +
          '<tr><td>Geländeassoziation mit der Karte</td><td>am wenigsten genau, aber schnell und je nach Lage ausreichend</td></tr>' +
          '<tr><td>Laserentfernungsmesser mit GPS und/oder Kompass</td><td>genauer, aber durch die magnetische Richtung begrenzt; Vorsicht bei GPS-Störung</td></tr>' +
          '<tr><td>Zielsoftware (Targeting Software)</td><td>am genauesten, wenn Software und Daten aktuell sind</td></tr>' +
          '<tr><td>Koordinaten aus Luftfahrzeug, MIR oder ISR</td><td>abhängig von Plattform und Sensor; FAC(A) meist CAT II oder besser</td></tr>' +
          '</tbody></table></div>' +
          '<p>Zum Vergleich aus ATP 3-09.30: Ein Beobachter nur mit Karte, Kompass und Fernglas hat typischerweise einen mittleren Zielortungsfehler von etwa <strong>250 m</strong>.</p>' +
          '<p><strong>Target Locating Devices</strong> verbinden Laserentfernungsmesser, Kompass oder Kreisel, Neigungsmesser und GPS und berechnen daraus die Zielposition.</p>' +
          LP.callout('warn', 'Keine Zeit verschenken', 'TOT bzw. TTT sollen nicht verzögert werden, um eine genauere Koordinate zu erzeugen, wenn die vorhandene Koordinate, TLE, Plattform, Munition und Markierung die gewünschte Wirkung schon erreichen.'),
        src: [['jp3093', 'Kap. III, Abs. 11c; Kap. V, Abs. 2a(1)(c)'], ['atp30930', 'Kap. 1, Abs. 1-19']]
      },
      {
        id: 'm09s2',
        title: 'Target Location Error (TLE)',
        html:
          '<div class="def"><span class="term">Definition</span><p>TLE ist die <strong>Differenz zwischen den für ein Ziel erzeugten Koordinaten und dem tatsächlichen Zielort</strong>.</p></div>' +
          '<dl>' +
          '<dt>CE (Circular Error)</dt><dd>Fehler in der horizontalen Ebene</dd>' +
          '<dt>VE (Vertical Error)</dt><dd>Fehler in der Höhe</dd>' +
          '<dt>SE (Spherical Error)</dt><dd>kombinierter dreidimensionaler Fehler</dd>' +
          '</dl>' +
          '<p>Angegeben als CE90, VE90 und SE90: Mit 90 % Wahrscheinlichkeit liegt das Ziel innerhalb dieses Abstands.</p>' +
          LP.kneeboard({
            title: 'TLE-Kategorien (CE90)',
            note: 'JP 3-09.3, Abb. III-5',
            lines: [
              { n: 'I', t: '0–6 m', d: '0–20 ft' },
              { n: 'II', t: '7–15 m', d: '21–50 ft' },
              { n: 'III', t: '16–30 m', d: '51–100 ft' },
              { n: 'IV', t: '31–91 m', d: '101–300 ft' },
              { n: 'V', t: '92–305 m', d: '301–1.000 ft' },
              { n: 'VI', t: 'über 305 m', d: 'über 1.000 ft oder großer elliptischer Fehler' }
            ]
          }) +
          '<ul>' +
          '<li>Die TLE wird übermittelt, wenn sie den Erfolg wesentlich beeinflusst. Für die Genehmigung eines Einsatzes oder einen CAS-Angriff ist die TLE-Kategorie in der Regel <strong>nicht erforderlich</strong>.</li>' +
          '<li>Ankündigen im Game Plan: „Cat II, 10-digit grid to follow, advise when ready for 9-line.“ In den Remarks kann die TLE-Kategorie stehen.</li>' +
          '<li>Ein System, das CAT I <em>kann</em>, liefert nicht automatisch CAT I: Der Zielpunkt zählt. Ein Fahrzeug, das auf den Bilddaten fehlt, oder ein für den Sensor unauffälliges Ziel (Bunker, Graben) verschlechtert die Kategorie.</li>' +
          '<li>Weitere Einflüsse: Fehler der Bilddatenbank (DPPDB), Schrägentfernung, Höhe, Strahlaufweitung des Lasers.</li>' +
          '</ul>' +
          LP.callout('tip', 'Präzision ist nicht Genauigkeit', 'Die Anzahl der Stellen einer Gitterkoordinate beschreibt ihre <strong>Präzision</strong>, nicht ihre <strong>Genauigkeit</strong>. Eine 10-stellige Koordinate aus einer Geländeassoziation ist präzise geschrieben, aber nicht genau.'),
        src: [['jp3093', 'Kap. III, Abs. 11c(3)–(4), Abb. III-5; Kap. V, Abs. 2b(5)(i)4']]
      },
      {
        id: 'm09s3',
        title: 'Mensuration, Bezugssystem und Formate',
        html:
          '<div class="def"><span class="term">Target Coordinate Mensuration</span><p>Vermessung eines Merkmals oder Ortes, um <strong>Breite, Länge und Höhe absolut</strong> zu bestimmen – z. B. aus DPPDB-Stereobildpaaren. Wer Punkte für koordinatensuchende Waffen vermisst, braucht eine Zertifizierung (NGA oder ein von ihr akkreditiertes Programm).</p></div>' +
          '<h3>Bezugssystem (Datum)</h3>' +
          '<ul>' +
          '<li><strong>WGS-84</strong> ist der angenommene Standard, sofern die SPINS nichts anderes festlegen.</li>' +
          '<li>Alle Beteiligten müssen dieselben Karten, Datenbanken und Zielunterlagen mit demselben Datum und Gittersystem verwenden.</li>' +
          '<li>Das Datum steht im vorgeplanten JTAR. Ist es bei einer Sofortanforderung nicht WGS-84, wird es beim Check-in oder in der Situation Update bestätigt.</li>' +
          '<li>Unterschiedliche Datums erzeugen erhebliche Fehler – das Eigenbeschussrisiko steigt, je näher die eigenen Kräfte am TLE-Bereich liegen.</li>' +
          '</ul>' +
          '<h3>Koordinatenformate</h3>' +
          '<dl>' +
          '<dt>MGRS</dt><dd>Gitterzone, Kennung des 100-km-Quadrats (zwei Buchstaben), Rechtswert und Hochwert – in Line 6 immer mit 100-km-Quadrat. Laut ATP 3-09.30: 6-stellig = 100 m; Steilfeuer auf einen Kartenpunkt mindestens 6-stellig, für genauere Zwecke 8 oder 10 Stellen.</dd>' +
          '<dt>Lat/Long</dt><dd>Standardformat für geografische Koordinaten nach CJCSI 3900.01C: <span class="mono">DDMM.mmmmH DDMM.mmmmH</span>. Vor allem bei ungewohnten Luftfahrzeugen das Format abstimmen, wenn der Readback grob abweicht.</dd>' +
          '<dt>Bomber</dt><dd>bevorzugen laut JP 3-09.3 <span class="mono">DD-MM.MMMM</span>; MGRS geht, kostet aber Umrechnungszeit (B-1 nimmt beides gleichwertig).</dd>' +
          '</dl>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Stellen (MGRS)</th><th>Präzision</th><th>Beispiel</th></tr></thead><tbody>' +
          '<tr><td>4</td><td>1 km</td><td class="mono">NB 23 87</td></tr>' +
          '<tr><td>6</td><td>100 m</td><td class="mono">NB 234 876</td></tr>' +
          '<tr><td>8</td><td>10 m</td><td class="mono">NB 2345 8761</td></tr>' +
          '<tr><td>10</td><td>1 m</td><td class="mono">NB 23456 87612</td></tr>' +
          '</tbody></table></div>',
        src: [['jp3093', 'Kap. III, Abs. 9b(2)(d), 11c(1)(c), 13b(2)(b), 17c(1)(d); Kap. V, Abs. 2b(5)(i), 9'], ['atp30930', 'Kap. 3–4']]
      },
      {
        id: 'm09s4',
        title: 'Höhen',
        html:
          '<ul>' +
          '<li><strong>Line 4</strong> wird standardmäßig in <strong>Fuß MSL</strong> (Mean Sea Level) gegeben. Andere Bezüge, etwa <strong>HAE</strong> (Height Above Ellipsoid), müssen ausdrücklich genannt werden.</li>' +
          '<li>Im Call for Fire der Artillerie folgt die Höhe direkt auf die Gitterkoordinate; Beispiel aus ATP 3-09.30: „GRID ND1234567890, ALTITUDE 390 M HAE, TLE 2.9“.</li>' +
          '<li>Koordinatensuchende Waffen brauchen eine genaue Position <strong>horizontal und vertikal</strong>. Ein steilerer Einschlagwinkel verringert die Wirkung eines Höhenfehlers.</li>' +
          '<li>Höhen bei der Staffelung immer in Fuß MSL angeben („stay above 5,000 ft MSL“).</li>' +
          '</ul>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Begriff</th><th>Bedeutung</th></tr></thead><tbody>' +
          '<tr><td><strong>ANGELS</strong></td><td>Höhe eines eigenen Luftfahrzeugs in Tausend Fuß MSL („angels 15“ = 15.000 ft MSL)</td></tr>' +
          '<tr><td><strong>CHERUBS</strong></td><td>Höhe eines eigenen Luftfahrzeugs in Hundert Fuß AGL („cherubs 8“ = 800 ft über Grund)</td></tr>' +
          '<tr><td><strong>Block</strong></td><td>Höhenband, z. B. „block 15-17“ = 15.000 bis 17.000 ft</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Umrechnung</h3>' +
          '<p>1 ft = 0,3048 m, also 1 m ≈ 3,28 ft. 1 NM = 1.852 m. Faustregel: Meter × 3,3 ≈ Fuß; Kilometer ÷ 1,85 ≈ NM.</p>',
        src: [['jp3093', 'Kap. III, Abs. 13b, 14a(2)(c); Kap. V, Abs. 2a(1)(a)'], ['atp30930', 'Kap. 4'], ['atp1021', 'Kap. I']]
      },
      {
        id: 'm09s5',
        title: 'Richtungen, Strich und Mil-Formel',
        html:
          '<h3>Nordrichtungen</h3>' +
          '<p>Ein Azimut wird im Uhrzeigersinn von einer Nordrichtung gemessen – <strong>geografisch Nord</strong>, <strong>magnetisch Nord</strong> oder <strong>Gitternord</strong>.</p>' +
          '<ul>' +
          '<li>Im CAS-Brief: Line 2, FAHs und LTL in <strong>Grad magnetisch</strong>.</li>' +
          '<li>An die Feuerleitstelle der Artillerie sendet der Beobachter eine <strong>Gitterrichtung</strong>. Eine Kompassrichtung muss vorher in Gitterazimut umgerechnet werden.</li>' +
          '</ul>' +
          '<h3>Strich (mil)</h3>' +
          '<ul>' +
          '<li>Ein Strich ist <strong>1/6400</strong> des Vollkreises.</li>' +
          '<li>Grad in Strich: Grad × 6400 ÷ 360, also etwa <strong>× 17,8</strong>.</li>' +
          '<li>Grundannahme der Mil-Formel: Ein Strich deckt in 1.000 m Entfernung etwa 1 m.</li>' +
          '</ul>' +
          LP.kneeboard({
            title: 'Mil-Formel (WORM)',
            lines: [
              { n: 'W', t: 'Breite (width) in Metern' },
              { n: 'R', t: 'Entfernung (range) in Kilometern' },
              { n: 'm', t: 'Winkel in Strich' }
            ],
            foot: '<strong>W = R × m</strong> · Beispiel: Zwei Häuser liegen 40 Strich auseinander, Entfernung 2,5 km → W = 2,5 × 40 = 100 m. Umgestellt: R = W ÷ m und m = W ÷ R.'
          }) +
          '<h3>Himmelsrichtungen</h3>' +
          '<p>N, NE, E, SE, S, SW, W, NW. Line 8 nutzt diese acht Richtungen <strong>vom Ziel aus</strong>. Bei FAHs mit Himmelsrichtungen gilt ±45°: „von Nord nach Süd“ bedeutet FAH 180 ± 45, also 135–225.</p>',
        src: [['atp30930', 'Kap. 3, Abs. 3-17 bis 3-23'], ['jp3093', 'Kap. V, Abs. 2a(5)(a)']]
      },
      {
        id: 'm09s6',
        title: 'Ziele beschreiben',
        html:
          '<p>Je nach Format unterscheidet sich die Zielbeschreibung, das Prinzip bleibt: so genau wie nötig, so knapp wie möglich, in einfacher Sprache.</p>' +
          '<dl>' +
          '<dt>CAS-Brief Line 5</dt><dd>„Five APCs in the open“; das Ziel benennen („HVT in 2-story building“). Sortierung später.</dd>' +
          '<dt>RW-5-Line</dt><dd>Gute Reihenfolge: <strong>Typ, Anzahl, Ausrichtung, Schutzgrad</strong>.</dd>' +
          '<dt>Call for Fire</dt><dd><strong>Was</strong> das Ziel ist, <strong>was es tut</strong>, <strong>Anzahl</strong>, <strong>Schutzgrad</strong> (offen, in Schützenlöchern, Bunker mit Überdeckung) sowie <strong>Größe und Form</strong>, falls wichtig: Rechteck „400 BY 300, ATTITUDE 2800“, Kreis „RADIUS 200“, Linie mit Länge und Ausrichtung.</dd>' +
          '</dl>' +
          '<h3>Linien- und Flächenziele im CAS-Brief</h3>' +
          '<ul><li>Flächenziel: Mitte bzw. größte Konzentration als Line 6.</li><li>Linienziel: gewünschter Treffpunkt, Ausrichtung und Abstand zu beiden Enden (Line 5 oder Remarks). Beispiel mit Bomber: zwei 6-stellige Koordinaten für eine Baumreihe.</li></ul>',
        src: [['jp3093', 'Kap. III, Abs. 16b(4); Kap. V, Abs. 2a(1)(b), 2b(5)(i)3; Anhang E, Beispiel 6'], ['atp30930', 'Kap. 4, Abs. 4-29']]
      }
    ],
    atp: [
      'Welche TLE-Kategorien und Genauigkeitsanforderungen nennt deine ATP-3.3.2.1?',
      'Welches Koordinatenformat und Bezugssystem schreibt die ATP vor? Welches Lat/Long-Format?',
      'In welcher Einheit und mit welchem Bezug wird Line 4 laut ATP angegeben?',
      'Nutzt die ATP magnetische oder geografische Kurse für Line 2 und FAH?'
    ]
  });
})();
