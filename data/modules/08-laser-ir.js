(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm08',
    nr: 8,
    title: 'Laser und Infrarot',
    summary: 'Laserbegriffe, Codes, Sicherheits- und Angriffszonen, Laser-Handoff, Fremdbeleuchtung, Hellfire-Besonderheiten sowie IR-Pointer-Verfahren und Brevity bei Nacht.',
    goals: [
      'Die fünf Grundbedingungen für Laser-Einsätze nennen',
      'Sicherheitszone und optimale Angriffszone aus der LTL bestimmen',
      'Einen Laser-Handoff mit korrekter Brevity durchführen',
      'IR-Pointer-Verfahren (Match Sparkle, Sparkle Walk-on) anwenden'
    ],
    sections: [
      {
        id: 'm08s1',
        title: 'Begriffe und Grundbedingungen',
        html:
          '<dl>' +
          '<dt>LTD</dt><dd>Laser Target Designator: sendet einen Laserstrahl, um einen Ort oder ein Objekt zu markieren. Am Boden (GLTD, Reichweite ca. 10 m bis 20 km) oder in der Luft (ALTD, meist unter 30.000 ft AGL eingesetzt).</dd>' +
          '<dt>LST</dt><dd>Laser Spot Tracker: rastet auf die reflektierte Laserenergie auf und zeigt die Richtung zum Ziel an – im Head-up-Display als Zielhilfe.</dd>' +
          '<dt>LGW</dt><dd>Laser-Guided Weapon: Suchkopf erfasst reflektierte Laserenergie und lenkt die Waffe dorthin. LGBs: Paveway II, III, Enhanced Paveway III (GPS-gestützt), Laser-JDAM; LGMs: Laser Maverick (AGM-65E/L), Hellfire (AGM-114).</dd>' +
          '<dt>LRF</dt><dd>Laser Rangefinder: misst die Entfernung zum Objekt.</dd>' +
          '<dt>LTL</dt><dd>Laser-Target Line: Linie vom Beleuchter zum Ziel, in Grad magnetisch.</dd>' +
          '</dl>' +
          '<h3>Fünf Grundbedingungen für LST und LGW</h3>' +
          '<ol>' +
          '<li>Sichtlinie zwischen Beleuchter und Ziel <strong>und</strong> zwischen Ziel und LST/LGW.</li>' +
          '<li>Die <strong>PRF-Codes</strong> von Beleuchter und LST/LGW passen zusammen.</li>' +
          '<li>Die Angriffsrichtung erlaubt es dem Suchkopf, genug reflektierte Energie zu empfangen.</li>' +
          '<li>Der Beleuchter lasert zur <strong>richtigen Zeit und lange genug</strong> – sonst verliert der Suchkopf die Erfassung und die Flugbahn wird unvorhersehbar.</li>' +
          '<li>Die Waffe wird innerhalb ihres Auslösebereichs ausgelöst. Werden Waffen hinter eigenen Kräften ausgelöst, steigt die Gefahr; die Entscheidung für Abstands-LGWs hinter eigenen Stellungen trifft der Kommandeur am Boden.</li>' +
          '</ol>' +
          '<p>Laseroperationen dienen der <strong>Zielauffassung</strong> (LST zeigt den Spot an) oder der <strong>Waffenlenkung</strong> (LGW fliegt den Spot an).</p>' +
          LP.callout('crit', 'Warnung aus JP 3-09.3', 'Besatzungen dürfen den LST <strong>nie als einzige Quelle zur Zielidentifizierung</strong> nutzen. Ein „SPOT“ heißt noch nicht, dass das richtige Ziel erfasst ist.'),
        src: [['jp3093', 'Kap. III, Abs. 13a(1)–(6)'], ['jp309', 'Glossar']]
      },
      {
        id: 'm08s2',
        title: 'Lasercodes',
        html:
          '<ul>' +
          '<li>LGWs folgen <strong>PRF-codierter</strong> reflektierter Energie. Beleuchter und Waffe bzw. LST müssen auf <strong>denselben Code</strong> eingestellt sein, sonst lenkt die Waffe nicht.</li>' +
          '<li>Lasercodes werden <strong>immer vierstellig</strong> übermittelt.</li>' +
          '<li>Der Code einer <strong>LGB wird vor dem Start</strong> eingestellt und kann in der Luft nicht geändert werden. Flugkörper wie Maverick und Hellfire lassen sich im Flug vor dem Abschuss umstellen. Beleuchter können ihren Code in der Regel in der Luft ändern.</li>' +
          '<li>Abstimmung über ATO, ASOC/DASC oder den CAS-Brief. Meldet ein Luftfahrzeug beim Check-in einen anderen Code, muss <strong>der JTAC</strong> sich anpassen.</li>' +
          '<li>Bei Fremdbeleuchtung bestätigt der JTAC den Code vor der Ausführung.</li>' +
          '<li>Gleichzeitige Angriffe mit LGWs brauchen <strong>unterschiedliche Codes</strong>.</li>' +
          '<li>Hellfire: höchste Trefferwahrscheinlichkeit mit Codes im Bereich <strong>1111–1488</strong>; unbemannte Luftfahrzeuge können wegen geringeren Zitterns <strong>1111–1788</strong> nutzen.</li>' +
          '</ul>' +
          LP.callout('tip', 'Beispiel Check-in', '„… 1 by GBU-12, 1 by GBU-38 each aircraft, laser codes Rumble 31-1688, Rumble 32-1731 …“'),
        src: [['jp3093', 'Kap. III, Abs. 13a(6)–(8); Abb. V-4']]
      },
      {
        id: 'm08s3',
        title: 'Geometrie: Sicherheitszone und Angriffszone',
        html:
          '<p>Bei Bodenbeleuchtung kann der Suchkopf statt des Ziels den <strong>Beleuchter selbst</strong> oder Streulicht in seiner Nähe erfassen. Deshalb gilt:</p>' +
          '<dl>' +
          '<dt>Safety Zone</dt><dd>Keil von <strong>20°</strong> mit Spitze am Ziel, <strong>±10°</strong> um die Linie Ziel–Beleuchter, vom Boden bis unendlich. Final Attack Headings meiden diese Zone, sofern die Lage nichts anderes erzwingt.</dd>' +
          '<dt>Optimal Attack Zone</dt><dd>Keil von <strong>120°</strong> (±60°) um die Linie Ziel–Beleuchter, außerhalb der Sicherheitszone. Bevorzugt ist ein Keil von <strong>90° (±45°)</strong>.</dd>' +
          '</dl>' +
          LP.kneeboard({
            title: 'Laser-Angriffszonen',
            note: 'Abweichung FAH zu LTL',
            lines: [
              { n: '<10°', t: 'Sicherheitszone', d: 'nicht anfliegen – Gefahr, den Beleuchter zu erfassen' },
              { n: '10–45°', t: 'bevorzugt', d: 'beste Erfassung durch den Suchkopf' },
              { n: '45–60°', t: 'zulässig', d: 'innerhalb der 120°-Angriffszone' },
              { n: '>60°', t: 'außerhalb', d: 'zu wenig reflektierte Energie' }
            ],
            foot: 'Faustregel: Ein Luftfahrzeug mit Angriffskurs H nähert sich aus Richtung H+180. Die Linie Ziel→Beleuchter zeigt in Richtung LTL+180. Die Abweichung ist daher |H − LTL|. Beispiel aus JP 3-09.3: FAH 260–290 bei LTL 310.'
          }) +
          '<ul>' +
          '<li>Bei Bodenbeleuchtung gibt der JTAC <strong>FAHs</strong>, damit das Luftfahrzeug im Erfassungsbereich und außerhalb der Sicherheitszone bleibt, und nennt die <strong>LTL in den Remarks</strong>.</li>' +
          '<li>Hellfire von Drehflüglern: Luftgestützte Beleuchter müssen außerhalb einer Zone von 30° mal 40° bleiben (zusätzlich zur normalen Sicherheitszone).</li>' +
          '<li>Beleuchtet ein Starrflügler für einen Hubschrauber, beleuchtet er innerhalb von ±60° der Weapon-Target Line.</li>' +
          '</ul>' +
          '<h3>Physik des Spots</h3>' +
          '<ul>' +
          '<li><strong>Strahlaufweitung</strong>: Bei 1 mrad ist der Spot in 1.000 m etwa 1 m groß. Wird er zu groß oder liegt er nur teilweise auf dem Ziel, entsteht <strong>Spillover</strong> – Energie dahinter kann die Waffe fehlleiten.</li>' +
          '<li><strong>Atmosphärische Streuung (Backscatter)</strong> und falsche Erfassung: Beleuchter möglichst gegen die Sicht des Suchkopfes abdecken (Gelände, Bewuchs, Plane). Nach einem Handoff immer korrelieren.</li>' +
          '<li>Rauch, Staub und Nebel schwächen den Strahl. Gegenmittel: Beleuchter an der Flanke oder erhöht, Stellungswechsel, Übergabe an einen nicht verdeckten Beleuchter.</li>' +
          '<li>Glas, Wasser und polierte Flächen sind schlechte Ziele – sie reflektieren nur in eine Richtung.</li>' +
          '<li>Zu frühes Lasern lässt die Bombe zu früh einlenken; sie verliert Energie und schlägt zu kurz ein.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 13a(2)–(8), Abb. III-9, III-10; Kap. V, Abs. 2b(4)4']]
      },
      {
        id: 'm08s4',
        title: 'Laser-Handoff und Laser-Brevity',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Brevity</th><th>Bedeutung</th></tr></thead><tbody>' +
          '<tr><td><strong>TEN SECONDS</strong></td><td>Bereithalten für LASER ON in etwa 10 Sekunden</td></tr>' +
          '<tr><td><strong>LASER ON</strong></td><td>Lasern beginnen bzw. bestätigen</td></tr>' +
          '<tr><td><strong>LASING</strong></td><td>Der Sprecher lasert</td></tr>' +
          '<tr><td><strong>SPOT</strong></td><td>Laserspot erfasst</td></tr>' +
          '<tr><td><strong>NEGATIVE LASER</strong></td><td>Laserenergie nicht erfasst</td></tr>' +
          '<tr><td><strong>SHIFT</strong> (Richtung/TN)</td><td>Laser-, IR- oder Radarenergie bzw. Zielpunkt verlegen</td></tr>' +
          '<tr><td><strong>CEASE LASER</strong></td><td>Lasern beenden</td></tr>' +
          '<tr><td><strong>DEADEYE</strong></td><td>Laserbeleuchter ausgefallen</td></tr>' +
          '<tr><td><strong>STARE</strong> (Code, Bezugspunkt)</td><td>LST auf den Code in Bezug auf einen Punkt (Steerpoint, Gelände, Peilung/Entfernung, Datenlinkpunkt) ansetzen</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Ablauf eines Laser-Handoff (Korrelation)</h3>' +
          '<ol>' +
          '<li>Inbound-Kurse für den Handoff vorgeben – sie sind für die Besatzung bindend, damit der LST nicht den Beleuchter erfasst. Sie können von den FAHs abweichen und heißen dann nicht FAH.</li>' +
          '<li>Die Besatzung beginnt die Laserkommunikation, sobald sie in Position ist.</li>' +
          '<li>Der JTAC gibt die Calls an den Laserbediener weiter und meldet dessen „LASING“ zurück.</li>' +
          '<li>Gelasert wird ununterbrochen, bis die Besatzung „SPOT, CEASE LASER“ meldet.</li>' +
          '<li>Der JTAC prüft, was unter dem Fadenkreuz liegt, und schließt die Korrelation ab.</li>' +
          '</ol>' +
          LP.radio([
            ['JTAC', 'Final attack headings 150-170, laser target line 220, after readbacks expect to proceed inbound heading 230-260 for the laser handoff, standby TOT.'],
            ['note', 'nach den Readbacks'],
            ['JTAC', 'Latch 65 proceed inbound heading 230 to 260, stare 1688 Papa Uniform 123 456.'],
            ['AIR', 'TEN SECONDS … Broadsword 11, LASER ON.'],
            ['OBS', 'LASING, 1688.'],
            ['JTAC', 'Broadsword 11, LASING, 1688.'],
            ['AIR', 'Latch 65, SPOT, CEASE LASER.'],
            ['JTAC', 'Latch 65, what do you have under your crosshairs?'],
            ['AIR', 'Latch 65 has a single armored vehicle oriented north-south.'],
            ['JTAC', 'Latch 65, that armored vehicle is your target.'],
            ['AIR', 'Latch 65 CAPTURED.']
          ]) +
          LP.callout('warn', 'SPOT ist nicht CAPTURE', 'Wegen Jitter, Über- und Unterstrahlung und Verdeckung kann der Spot leicht neben dem Ziel liegen. Nicht aufhören zu lasern, bevor die Besatzung es sagt – fehlt das „CEASE LASER“, mit „call sign, status“ nachfragen. Nach einem LST-Handoff nicht wieder ganz groß beginnen, aber so weit zurückgehen, dass das genaue Ziel bestätigt ist.') +
          '<h3>Bei NEGATIVE LASER</h3>' +
          '<ol><li>Laser-Einstellung und Zielpunkt prüfen.</li><li>Code am Luftfahrzeug prüfen.</li><li>Prüfen, ob das Luftfahrzeug reflektierte Energie empfangen kann (Winkel, Reflexion, Leistung, Umwelt).</li><li>Handoff wiederholen; bleibt es erfolglos, andere Markierung wählen.</li></ol>',
        src: [['jp3093', 'Abb. III-21; Kap. V, Abs. 2b(8)(d)1'], ['atp1021', 'Kap. I']]
      },
      {
        id: 'm08s5',
        title: 'Fremdbeleuchtung und Hellfire',
        html:
          '<p><strong>Autonom</strong> heißt: Das Luftfahrzeug beleuchtet selbst. <strong>Assisted</strong> heißt: Ein anderer beleuchtet – Bodentrupp, FAC(A) oder ein anderes Luftfahrzeug („buddy lasing“). Luftfahrzeuge ohne eigenen Beleuchter brauchen immer Fremdbeleuchtung. Auch wenn sich ein Luftfahrzeug selbst beleuchten kann, sollte der JTAC einen Boden-Beleuchter in Reserve haben.</p>' +
          '<p>Bei Fremdbeleuchtung nennt Line 7 das Rufzeichen des Beleuchters und die PRF-Codes. Der JTAC korreliert auch mit der beleuchtenden Plattform. Grundregel: <strong>Die beleuchtende Plattform bestimmt das Tempo, der Schütze führt die Laserkommunikation.</strong></p>' +
          LP.radio([
            ['note', 'Starrflügler beleuchtet für Hubschrauber-Hellfire (Lock-on before launch), JP 3-09.3 Abb. V-7'],
            ['LAS', 'Latch 61 CAPTURED 1112 set.'],
            ['AIR', 'Venom 11, weapon-target-line 270, time of flight 14 seconds.'],
            ['AIR', '1 minute.'],
            ['LAS', 'In position.'],
            ['AIR', 'Venom 11, TEN SECONDS.'],
            ['LAS', 'TEN SECONDS.'],
            ['AIR', 'LASER ON.'],
            ['LAS', 'Latch 61, LASING 1112.'],
            ['AIR', 'Venom 11, SPOT.'],
            ['AIR', 'Venom 11, IN, heading 270.'],
            ['JTAC', 'Venom 11, CLEARED HOT.'],
            ['AIR', 'Rifle, time of flight 14 seconds.'],
            ['LAS', 'Impact.'],
            ['AIR', 'SHIFT/CEASE LASER.']
          ]) +
          '<h3>Hellfire-Startarten</h3>' +
          '<dl><dt>LOBL</dt><dd>Lock-on before launch: Suchkopf erfasst den Spot vor dem Abschuss; Sichtlinie zum Ziel nötig; höhere Trefferwahrscheinlichkeit auf kurze Distanz; bestätigt Code und Ziel.</dd>' +
          '<dt>LOAL</dt><dd>Lock-on after launch: Abschuss aus der Deckung ohne Sichtlinie, verzögerte Beleuchtung erschwert Gegenmaßnahmen, größere Reichweite mit Fremdbeleuchter. Starrflügler setzen Hellfire im LOAL-Modus ein.</dd></dl>' +
          '<p>Mehrere Hellfire: mindestens <strong>8 s</strong> Abstand, damit der Laser auf weitere Ziele wechseln kann (UAS bis 0,3 s). Mehrere Ziele <strong>von Lee nach Luv</strong> bekämpfen, damit Staub und Rauch der ersten Treffer den Strahl nicht verdecken.</p>',
        src: [['jp3093', 'Kap. III, Abs. 13a(7)–(8); Kap. V, Abs. 2b(4)(c)4, Abb. V-7, V-8']]
      },
      {
        id: 'm08s6',
        title: 'IR-Pointer und Nacht-Brevity',
        html:
          '<p>IR-Pointer sind schwache Laser im nahen Infrarot, sichtbar nur mit Nachtsichtgeräten. Sie <strong>können keine Munition lenken</strong>. Sie verraten den Bediener an einen Feind mit Nachtsicht – deshalb kurz und nur auf Anforderung einsetzen. IR-Marken beginnen etwa <strong>20–30 s vor der TOT/TTT</strong> oder auf Anforderung der Besatzung.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Call</th><th>Bedeutung</th><th>Antwort der Besatzung</th></tr></thead><tbody>' +
          '<tr><td><strong>SPARKLE</strong></td><td>Ziel mit IR-Pointer markieren (JTAC oder Besatzung kann auslösen)</td><td>CONTACT SPARKLE oder NO JOY</td></tr>' +
          '<tr><td><strong>SNAKE</strong></td><td>IR-Pointer in einer Acht um das Ziel bewegen – trennt Ziel- und Freundende</td><td>CONTACT SPARKLE, STEADY oder NO JOY</td></tr>' +
          '<tr><td><strong>PULSE</strong></td><td>Position mit blinkender IR-Energie beleuchten</td><td>CONTACT SPARKLE, STEADY oder NO JOY</td></tr>' +
          '<tr><td><strong>STEADY</strong></td><td>Bewegung des Strahls nach SNAKE oder PULSE beenden</td><td>–</td></tr>' +
          '<tr><td><strong>CEASE SPARKLE</strong></td><td>Strahl aus</td><td>–</td></tr>' +
          '<tr><td><strong>ROPE</strong></td><td>IR-Pointer kreisförmig um das Luftfahrzeug, damit es die eigene Stellung findet – kann Nachtsichtgeräte schädigen, nicht für Drehflügler</td><td>–</td></tr>' +
          '<tr><td><strong>CONTACT SPARKLE</strong></td><td>Sparkle gesichtet, Freund- und Zielende unterscheidbar</td><td>–</td></tr>' +
          '<tr><td><strong>MATCH SPARKLE</strong></td><td>eigene IR-Marke auf eine bestehende Marke legen</td><td>–</td></tr>' +
          '</tbody></table></div>' +
          LP.callout('crit', 'Freigabebedingung bei Boden-IR-Pointer (BOT)', 'Markiert ein Bodentrupp mit IR-Pointer, muss die Besatzung <strong>bei jedem Anflug</strong> vor der Freigabe <strong>VISUAL</strong> (eigene Stellung) und <strong>TALLY</strong> oder <strong>CONTACT SPARKLE</strong> melden. Line 7 lautet „IR“ oder „IR pointer“; die Pointer-Target Line (PTL) gehört in die Remarks.') +
          '<h3>Match Sparkle</h3>' +
          '<ol><li>Luftfahrzeug so positionieren, dass es den Sparkle sehen kann (FW ggf. über das Ziel, RW vor die HA/BP).</li><li>„Devil 11, proceed into the overhead and advise when ready to match sparkle.“</li><li>Die Besatzung ruft „SPARKLE“ oder der JTAC ruft „MATCH SPARKLE“.</li><li>Der JTAC beobachtet, wie der Sparkle des Luftfahrzeugs auf den eigenen wandert; ggf. „CEASING SPARKLE“, um den Luft-Sparkle allein zu prüfen.</li><li>Der JTAC bestätigt, was die Besatzung dort sieht. FLIR-Sensoren sehen den IR-Sparkle nicht – die Besatzung vergleicht draußen und Sensorbild.</li></ol>' +
          '<h3>Sparkle Walk-on</h3>' +
          '<p>Der JTAC führt den Sparkle des Luftfahrzeugs mit Himmelsrichtung und Metern auf das Ziel: „Latch 65, SLEW north 150“ oder „Razor 53, SLEW south 50 to the east-west road“. <strong>Nicht „left, right, up, down“ verwenden.</strong> Hin- und Herpendeln vermeiden, ggf. begrenzende Merkmale nutzen. Liegt der Sparkle auf dem Ziel: „STEADY“.</p>',
        src: [['jp3093', 'Kap. III, Abs. 9b(3), 14d(3)(a)5, Abb. III-22; Kap. V, Abs. 2b(8)(d)2–5'], ['atp1021', 'Kap. I']]
      }
    ],
    atp: [
      'Welche Lasercodes, Laser-Sicherheitszonen und Angriffszonen nennt deine ATP-3.3.2.1? Stimmen die Werte mit JP 3-09.3 überein?',
      'Welche Laser- und IR-Brevity verwendet die ATP? Gibt es NATO-spezifische Calls?',
      'Wie beschreibt die ATP den Laser-Handoff und die Fremdbeleuchtung?',
      'Welche Freigabebedingungen nennt die ATP bei Markierung mit Boden-IR-Pointer?'
    ],
    jfire: [
      'Schlage in deiner JFIRE nach, wo Lasercodes, Laserbeleuchter und LST-Fähigkeiten der Luftfahrzeuge aufgeführt sind. Nur die Fundstelle merken, keine Werte übernehmen.'
    ]
  });
})();
