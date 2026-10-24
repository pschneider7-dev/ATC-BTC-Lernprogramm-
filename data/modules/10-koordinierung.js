(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm10',
    nr: 10,
    title: 'Feuer- und Luftraumkoordinierung',
    summary: 'Erlaubende und einschränkende Feuerkoordinierungsmaßnahmen, ACA und Staffelungstechniken, weitere Luftraummaßnahmen, IP/CP/BP und Keyhole, Offset und Final Attack Headings, TOT/TTT sowie SEAD.',
    goals: [
      'FSCMs als erlaubend oder einschränkend einordnen und definieren',
      'Die vier Staffelungstechniken zwischen Artillerie und CAS anwenden',
      'Einen Keyhole-Haltepunkt anweisen',
      'Offset und Final Attack Heading korrekt vorgeben',
      'Einen SEAD-Zeitplan nach der Faustregel aus JP 3-09.3 berechnen'
    ],
    sections: [
      {
        id: 'm10s1',
        title: 'Feuerkoordinierungsmaßnahmen (FSCM)',
        html:
          '<p>FSCMs beschleunigen die Bekämpfung von Zielen, schützen eigene Kräfte, Bevölkerung, kritische Infrastruktur sowie religiöse und kulturelle Stätten und entflechten Feuer. <strong>Erlaubende</strong> Maßnahmen erleichtern Angriffe, <strong>einschränkende</strong> schützen eigene Kräfte.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Maßnahme</th><th>Art</th><th>Kernaussage</th></tr></thead><tbody>' +
          '<tr><td><strong>CFL</strong> – Coordinated Fire Line</td><td>erlaubend</td><td>Jenseits der Linie dürfen konventionelle Boden-Boden-Feuer (direkt und indirekt) jederzeit im Bereich des einrichtenden Gefechtsstands ohne weitere Abstimmung wirken. Der Luftraum muss trotzdem koordiniert werden.</td></tr>' +
          '<tr><td><strong>FSCL</strong> – Fire Support Coordination Line</td><td>erlaubend</td><td>Erleichtert die schnelle Bekämpfung von Gelegenheitszielen jenseits der Linie; gilt für alle Feuer aus Luft, Land und See auf Bodenziele (Details unten).</td></tr>' +
          '<tr><td><strong>BCL</strong> – Battlefield Coordination Line</td><td>erlaubend (USMC)</td><td>Erleichtert Angriffe zwischen BCL und FSCL; dort liegt immer eine ACA.</td></tr>' +
          '<tr><td><strong>FFA</strong> – Free-Fire Area</td><td>erlaubend</td><td>Jedes Waffensystem darf ohne weitere Abstimmung mit dem einrichtenden Gefechtsstand hineinwirken; auch für Notabwurf. Keine automatische Feuererlaubnis: PID, CDE, ROE und SPINS gelten weiter.</td></tr>' +
          '<tr><td><strong>Kill Box</strong></td><td>erlaubend</td><td>Dreidimensionale FSCM mit zugehöriger ACM. Hauptzweck: Bodenziele ohne weitere Abstimmung und ohne TAC bekämpfen. Kann einschränkende Maßnahmen enthalten; keine automatische Feuererlaubnis.</td></tr>' +
          '<tr><td><strong>NFA</strong> – No-Fire Area</td><td>einschränkend</td><td>Feuer und Feuerwirkung verboten. Zwei Ausnahmen: (1) der einrichtende Gefechtsstand genehmigt einzelne Einsätze; (2) Feind aus der NFA greift eigene Kräfte an und der betroffene Kommandeur wehrt mit dem geringsten nötigen Feuer ab.</td></tr>' +
          '<tr><td><strong>RFA</strong> – Restrictive Fire Area</td><td>einschränkend</td><td>Bestimmte Beschränkungen; Feuer darüber hinaus nur nach Abstimmung mit dem einrichtenden Gefechtsstand.</td></tr>' +
          '<tr><td><strong>RFL</strong> – Restrictive Fire Line</td><td>einschränkend</td><td>Zwischen aufeinander zu bewegenden eigenen Kräften; verbietet Feuer oder Feuerwirkung über die Linie ohne Abstimmung. Verhindert Eigenbeschuss und Doppelbekämpfung.</td></tr>' +
          '<tr><td><strong>ACA</strong> – Airspace Coordination Area</td><td>einschränkend</td><td>Luftraumblock im Zielgebiet, in dem eigene Luftfahrzeuge vor eigenem Bodenfeuer hinreichend sicher sind.</td></tr>' +
          '<tr><td><strong>Grenze</strong> (Boundary)</td><td>einschränkend</td><td>Kein Feuer und keine Feuerwirkung über eine Grenze ohne Abstimmung mit der betroffenen Einheit.</td></tr>' +
          '</tbody></table></div>',
        src: [['jp3093', 'Kap. III, Abs. 14a, 14c(1)'], ['jp309', 'Glossar']]
      },
      {
        id: 'm10s2',
        title: 'Die FSCL im Detail',
        html:
          '<div class="def"><span class="term">Definition (JP 3-09)</span><p>Eine FSCM, die vom Land- oder amphibischen Befehlshaber eingerichtet wird. <strong>Jenseits</strong> der Linie müssen alle Feuer vor dem Einsatz mit den betroffenen Kommandeuren abgestimmt werden; <strong>diesseits</strong> der Linie mit dem einrichtenden Kommandeur.</p></div>' +
          '<ul>' +
          '<li>Eingerichtet und verschoben vom Land- bzw. amphibischen Befehlshaber innerhalb seiner Grenzen, nach Abstimmung mit übergeordneten, unterstellten, unterstützenden und betroffenen Kommandeuren.</li>' +
          '<li>Liegt normalerweise an Land; möglichst entlang gut erkennbarer Geländemerkmale.</li>' +
          '<li>Die Nutzung einer FSCL ist <strong>nicht verpflichtend</strong>.</li>' +
          '<li>Die FSCL ist <strong>keine Grenze</strong>. Sie schafft <strong>keine FFA</strong> jenseits der Linie.</li>' +
          '<li>Diesseits der FSCL steuert der Land- bzw. amphibische Befehlshaber alle Luft-Boden- und Boden-Boden-Einsätze.</li>' +
          '<li>Wirkungen jenseits der FSCL dürfen sich nicht auf oder hinter der Linie auswirken; Prioritäten und Absicht des Einrichtenden gelten weiter.</li>' +
          '<li>Der Divisionsluftraum reicht normalerweise von der rückwärtigen Grenze bis zur FSCL und bis zur Coordinating Altitude.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 14a(1)(b); Kap. II, Abs. 4a'], ['jp309', 'Glossar']]
      },
      {
        id: 'm10s3',
        title: 'ACA und Staffelung von Artillerie und CAS',
        html:
          '<dl>' +
          '<dt>Formelle ACA</dt><dd>Auf Antrag des Kommandeurs von der Airspace Control Authority eingerichtet, im ACO, ATO oder in den SPINS veröffentlicht. Detailplanung nötig; mit der Feuerleitstelle (FDC) prüfen, ob die Flugbahnen die ACA nicht durchstoßen.</dd>' +
          '<dt>Informelle ACA</dt><dd>Von jedem unterstützten Kommandeur kurzfristig über Staffelung eingerichtet; kurzlebig und weniger weit verbreitet. Fires Cell/FSCC muss alle Betroffenen informieren.</dd>' +
          '</dl>' +
          '<p>Grundsatz: die Staffelungstechnik wählen, die <strong>am wenigsten Abstimmung</strong> braucht, ohne den Auftrag zu gefährden.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Technik</th><th>Wann</th><th>Beispiel</th></tr></thead><tbody>' +
          '<tr><td><strong>Lateral</strong></td><td>Ziele weit genug von Flugwegen entfernt; Luftfahrzeuge kreuzen keine GTL. JTAC muss die GTL kennen.</td><td class="mono">“Stay west of the 62 gridline.” / “Remain west of the river.”</td></tr>' +
          '<tr><td><strong>Altitude</strong></td><td>Luftfahrzeuge bleiben über oder unter den Flugbahnen; erlaubt Kreuzen der GTL. Scheitelhöhe (Ordinate) am Kreuzungspunkt aus der Schusstafel + Sicherheitszuschlag.</td><td class="mono">“Stay above 5,000 ft MSL.”</td></tr>' +
          '<tr><td><strong>Altitude und lateral</strong></td><td>Luftfahrzeuge müssen die GTL kreuzen oder greifen entlang der GTL an.</td><td class="mono">“Stay west of 62 gridline and remain below 3,000 ft MSL.”</td></tr>' +
          '<tr><td><strong>Time</strong></td><td>Wenn Höhenbeschränkungen den Waffeneinsatz behindern (z. B. Mörser), bei gleichen oder nahen Zielen, bei SEAD und bei Steilfeuer-Markierung. Braucht die meiste Abstimmung.</td><td class="mono">“TOT 1410, SEAD minus 2 through minus 1 and plus 1 through plus 2.”</td></tr>' +
          '</tbody></table></div>' +
          '<dl>' +
          '<dt>GTL</dt><dd>Gun-Target Line: gedachte Linie vom Geschütz zum Ziel.</dd>' +
          '<dt>Maximum Ordinate</dt><dd>höchster Punkt der Flugbahn über der Waagerechten durch den Abschusspunkt (Scheitelhöhe).</dd>' +
          '</dl>' +
          LP.callout('crit', 'Merke', 'Bei Höhenstaffelung <strong>immer in Fuß MSL</strong> angeben. Bei Zeitstaffelung Splitterwirkung und mögliche Sekundärexplosionen einrechnen; alle Zeiten für Bodenfeuer beziehen sich auf TOT bzw. TTT des Luftfahrzeugs.'),
        src: [['jp3093', 'Kap. III, Abs. 14a(2)(d), Abb. III-12 bis III-16'], ['jp3093', 'Glossar']]
      },
      {
        id: 'm10s4',
        title: 'Luftraummaßnahmen und Anflugsteuerung',
        html:
          '<h3>Weitere ACMs</h3>' +
          '<dl>' +
          '<dt>Coordinating Altitude</dt><dd>Höhe zur Trennung von Luftraumnutzern und als Übergang zwischen Koordinierungsstellen.</dd>' +
          '<dt>HIDACZ</dt><dd>High-Density Airspace Control Zone: Luftraum mit konzentriertem Einsatz vieler Waffen und Nutzer; Zugang meist durch den Truppenführer am Boden.</dd>' +
          '<dt>ROZ</dt><dd>Restricted Operations Zone: Luftraum für bestimmte Nutzungen (15 Nutzungsarten, z. B. UAS, CAS).</dd>' +
          '<dt>MRR</dt><dd>Minimum-Risk Route: vorübergehender Korridor für Starrflügler mit geringster bekannter Gefährdung.</dd>' +
          '<dt>SAAFR</dt><dd>Standard Use Army Aircraft Flight Route: unterhalb der Coordinating Altitude für Heeresflieger.</dd>' +
          '</dl>' +
          '<p><strong>Eigene Flugabwehr</strong>: Der Gefechtsstand meldet „friendly air on station“. TACP und Flugabwehr stimmen CP/IP, Zielort, Art und Anzahl der Luftfahrzeuge, Höhen und Zeiten ab.</p>' +
          '<h3>CP, IP und BP</h3>' +
          '<ul>' +
          '<li>Der JTAC wählt CPs, IPs und BPs nach Feindfähigkeit, Zielausrichtung, eigener Lage, Wetter, Luftfahrzeug und FSCM. Möglichst <strong>visuell markante Geländepunkte</strong> – falls Navigation ausfällt oder GPS gestört ist.</li>' +
          '<li>IPs für Starrflügler: normalerweise <strong>5–15 NM</strong> vom Ziel; Luftfahrzeuge in großer Höhe ggf. mehr als 20 NM. BPs für Drehflügler: <strong>1–5 km</strong>.</li>' +
          '<li>HA (Holding Area) und BP von Hubschraubern wirken während der Nutzung als informelle ACA.</li>' +
          '</ul>' +
          '<h3>Keyhole</h3>' +
          '<p>Schnelle Methode, ohne vorbereitete Punkte einen IP festzulegen. Der JTAC gibt einen <strong>Echo-Punkt</strong> (meist das Ziel) und lässt die Luftfahrzeuge mit Richtung und Entfernung in NM davon halten. Sie halten <strong>außerhalb</strong> der genannten Entfernung.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Buchstabe</th><th>Richtung vom Echo-Punkt</th></tr></thead><tbody>' +
          '<tr><td>A – Alpha</td><td>Nord</td></tr><tr><td>B – Bravo</td><td>Ost</td></tr><tr><td>C – Charlie</td><td>Süd</td></tr><tr><td>D – Delta</td><td>West</td></tr><tr><td>E – Echo</td><td>über dem Ziel</td></tr>' +
          '</tbody></table></div>' +
          LP.radio([
            ['JTAC', 'Stang 11, advise when ready to copy Echo point.'],
            ['AIR', 'Stang 11, ready to copy.'],
            ['JTAC', 'Ten-digit grid to follow. NU 87138 50874.'],
            ['AIR', 'I copy NU 87138 50874.'],
            ['JTAC', 'Stang 11, proceed to Alpha 8, angels 15, report established.'],
            ['AIR', 'Stang 11, established Alpha 8, angels 15.'],
            ['note', 'Alternative mit Radial: „proceed to the 240 at 8, angels 15“.']
          ]) +
          '<p>Ändert sich die Ziellage deutlich, muss der Echo-Punkt mitwandern – sonst drohen Konflikte mit anderen Luftfahrzeugen.</p>' +
          '<h3>Offset und Final Attack Heading</h3>' +
          '<dl>' +
          '<dt>Offset</dt><dd>Legt fest, auf welcher Seite der Linie IP–Ziel die Besatzung manövrieren darf („offset right“: auf oder rechts der Linie). Gilt vom Verlassen des IP bis zur Auslösung bzw. zum Abflug. Dient der Entflechtung von GTLs und der Meidung von Bedrohungen.</dd>' +
          '<dt>Final Attack Heading</dt><dd>Zur Sicherheit eigener Truppen, für die Sicht des JTAC, für die Zielauffassung, gegen Kollateralschäden, für Laserbedingungen und zur Feuerkoordinierung. So wenige Einschränkungen wie möglich. Jede vorgegebene Angriffsgeometrie ist eine Restriction und wird zurückgelesen.</dd>' +
          '</dl>' +
          '<ul class="small"><li>Kurs: „Final attack heading 230“</li><li>Korridor: „Final attack heading 240-300“ oder „270 plus-or-minus 30“</li><li>Himmelsrichtung: „make your attack from northeast to southwest“ (Vorsicht: ±45°)</li><li>Geländebezug: „Make all attacks parallel to the road“</li></ul>' +
          '<p>Weitere Hinweise: FAHs nicht über eigene Stellungen planen, möglichst <strong>parallel zur FLOT</strong> (Kurz- oder Weitschüsse treffen dann keine eigenen Kräfte); lineare Ziele entlang der langen Achse; LGB-FAH bevorzugt mit Rückenwind, dann Gegenwind, dann Seitenwind (Seitenwind über 30 kt kann die Lasererfassung stören); nicht gegen tiefstehende Sonne oder hellen Mond.</p>',
        src: [['jp3093', 'Kap. III, Abs. 14b–c, Abb. III-17 bis III-19; Kap. V, Abs. 2a(5)']]
      },
      {
        id: 'm10s5',
        title: 'Zeitsteuerung: TOT und TTT',
        html:
          '<dl>' +
          '<dt>TOT – Time on Target</dt><dd>Zeitpunkt, zu dem die Munition des Luftfahrzeugs im Ziel einschlägt; um ihn herum werden Bodenfeuer koordiniert. Wenig Funkverkehr nötig. Zeitstandard (Zulu oder lokal) muss allen klar sein. <strong>GPS-Zeit</strong> ist der gemeinsame Standard.</dd>' +
          '<dt>TTT – Time to Target</dt><dd>Minuten und Sekunden von einem Zeitzeichen (Hack) bis zur Wirkung im Ziel. Genau, aber selten genutzt; geeignet bei wenigen Beteiligten.</dd>' +
          '</dl>' +
          LP.radio([
            ['JTAC', 'TIME TO TARGET 5+00, READY, READY, HACK.'],
            ['note', 'Die Besatzung bestätigt den Hack. Den Hack gibt normalerweise der JTAC bzw. FAC(A), der die abschließende Kontrolle hat.']
          ]) +
          '<ul>' +
          '<li>Kann die Besatzung eine TOT nicht einhalten, muss sie das sagen und eine erreichbare TOT vorschlagen.</li>' +
          '<li>Der JTAC vergleicht Entfernung IP–Ziel mit der Flugzeit und verfolgt so den Zeitplan. Kommt SEAD zu spät, verschiebt er die TOT.</li>' +
          '<li>Abstandswaffen wie JDAM lassen sich in Entfernung und Höhe von anderen Feuern trennen.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 14a(2)(d), 14d; Kap. V, Abs. 2b(9)']]
      },
      {
        id: 'm10s6',
        title: 'SEAD',
        html:
          '<p>Ziel der SEAD (Suppression of Enemy Air Defenses) ist es, eigenen Luftfahrzeugen den Einsatz im verteidigten Luftraum zu ermöglichen – im Zielgebiet und auf An- und Abflugwegen. SEAD garantiert <strong>keine Immunität</strong>.</p>' +
          '<ul>' +
          '<li>Zuerst Profile prüfen, die die Bedrohung meiden. Erst wenn das nicht geht, die Gefährdung der Luftfahrzeuge gegen die Gefährdung der SEAD-Mittel abwägen.</li>' +
          '<li>Vorher prüfen, ob Mörser, Artillerie oder Schiffsartillerie das Ziel selbst bekämpfen können.</li>' +
          '<li>SEAD wirkt am besten gegen <strong>ortsfeste</strong> Flugabwehr, am schlechtesten gegen einzelne MANPADS und sehr bewegliche Systeme.</li>' +
          '<li>Moderne Radar-Bedrohungen können zusätzlich EloKa-Unterstützung erfordern.</li>' +
          '</ul>' +
          '<h3>Faustregel für Steilfeuer-SEAD</h3>' +
          '<p>Dauer der Niederhaltung = vom Eintritt des <strong>ersten</strong> Luftfahrzeugs in die maximale Wirkungsreichweite der Bedrohung bis zum Austritt des <strong>letzten</strong>. Annahmen: Starrflügler <strong>8 NM/min</strong> (A-10: 5 NM/min), Drehflügler <strong>4 km/min</strong>.</p>' +
          LP.callout('tip', 'Rechenbeispiel aus JP 3-09.3', 'Rotte Starrflügler, Bordkanonenangriff, 1 min Abstand, Bedrohung mit 5 NM Reichweite am Ziel. Bei 8 NM/min tritt Lead etwa 45 s vor der TOT in die Reichweite ein; das zweite Luftfahrzeug verlässt sie etwa 1:45 nach Leads TOT. Niederhaltung non-standard von <strong>−1:00 bis +2:00</strong>, Einschläge alle 30 s.') +
          '<dl><dt>Continuous</dt><dd>durchgehende Niederhaltung über das ganze Fenster</dd><dt>Interrupted</dt><dd>unterbrochen, wenn die Geometrie keine durchgehende Niederhaltung zulässt</dd><dt>Non-standard</dt><dd>mit Dauer relativ zur CAS-TOT anzugeben, z. B. mit Lücke in der Mitte, wenn Höhenstaffelung nicht möglich ist</dd></dl>' +
          '<p>Rauch und Staub der SEAD-Einschläge dürfen den CAS-Angriff nicht behindern. Weitere Möglichkeiten: seitlich ausweichen (Abstandswaffen), vertikal (Höhe), Geländedeckung (Hellfire LOAL, Pop-up).</p>' +
          '<h3>Gegenseitige Unterstützung durch den JTAC</h3>' +
          '<p>Abschüsse trafen meist Luftfahrzeuge, die die Bedrohung nicht kannten. Der JTAC meldet sofort:</p>' +
          LP.radio([
            ['JTAC', 'Latch 01, SAM launch southwest of the target.'],
            ['JTAC', 'Hawg 61, Triple A north of the target.']
          ]),
        src: [['jp3093', 'Kap. III, Abs. 12d(6), 14d(3)(b); Kap. V, Abs. 2a(6), Abb. V-2']]
      }
    ],
    atp: [
      'Welche FSCMs und ACMs kennt deine ATP-3.3.2.1? Stimmen Definitionen von FSCL, CFL, NFA, RFA, RFL und ACA mit JP 3-09.3 überein?',
      'Welche Staffelungstechniken (lateral, Höhe, kombiniert, Zeit) beschreibt die ATP?',
      'Beschreibt die ATP das Keyhole-Verfahren oder ein anderes Verfahren für Haltepunkte?',
      'Wie regelt die ATP SEAD und die Art der Niederhaltung?'
    ],
    jfire: [
      'Schlage in deiner JFIRE die Reichweiten von Flugabwehrsystemen und die Flugzeiten/Scheitelhöhen nach, die du für SEAD- und Staffelungsrechnungen brauchst. Keine Werte übertragen.'
    ]
  });
})();
