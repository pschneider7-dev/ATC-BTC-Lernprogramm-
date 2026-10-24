(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm05',
    nr: 5,
    title: 'Der CAS-Ablauf: Execution Template',
    summary: 'Vom Ziel rückwärts planen, die zwölf Schritte des Execution Template, Routing, Check-in (MNPOPCA), Situation Update und Game Plan – mit einem vollständigen Funkbeispiel.',
    goals: [
      'Die zwölf Schritte des CAS Execution Template in der richtigen Reihenfolge nennen',
      'Den Check-in nach MNPOPCA aufnehmen und fehlende Angaben gezielt abfragen',
      'Eine knappe, auftragsbezogene Situation Update geben',
      'Einen Game Plan mit allen Mindestinhalten formulieren'
    ],
    sections: [
      {
        id: 'm05s1',
        title: 'Vom Ziel rückwärts: Vorbereitung des CAS-Briefs',
        html:
          '<p>Hat der Kommandeur ein CAS-Ziel benannt, arbeitet der JTAC <strong>vom Ziel aus rückwärts</strong>. Die Schritte beeinflussen sich gegenseitig; SEAD kann z. B. den ganzen Plan verändern.</p>' +
          '<ol>' +
          '<li><strong>Zieldaten entwickeln</strong> – fünf Kerninformationen: Zielhöhe (Line 4), Zielbeschreibung (Line 5), Zielort (Line 6), Ort der eigenen Kräfte (Line 8) und gewünschte Wirkung des Kommandeurs.</li>' +
          '<li><strong>Luftunterstützung anfordern</strong> – sobald grober Zielort und gewünschte Wirkung feststehen. Wegen der Anflugzeit nicht warten, bis die Koordinate verfeinert ist.</li>' +
          '<li><strong>Game Plan entwickeln</strong> – mindestens Kontrollart und Angriffsmethode.</li>' +
          '<li><strong>Markierung bzw. Korrelationshilfe festlegen</strong> – BOC: Line 7 „no mark“ oder Fremdbeleuchtung; BOT: Markierung für das angreifende Luftfahrzeug.</li>' +
          '<li><strong>Angriffsgeometrie entwickeln</strong> – FAH, Entflechtung, Lasergeometrie, Ziel, Wetter, IP/BP und Abflug.</li>' +
          '<li><strong>SEAD-Bedarf und SEAD-Plan festlegen</strong>.</li>' +
          '</ol>' +
          LP.callout('tip', 'Merkhilfe', 'Zuerst wissen, <em>was</em> bekämpft wird und <em>wo</em> die eigenen Kräfte sind – erst danach, <em>wie</em> und <em>womit</em>.'),
        src: [['jp3093', 'Kap. V, Abs. 2a']]
      },
      {
        id: 'm05s2',
        title: 'Die zwölf Schritte des Execution Template',
        html:
          '<p>Das Execution Template ordnet den Ablauf vom ersten Check-in bis zum Check-out. Es gibt JTAC und Besatzung ein wiederholbares Schema für eine dynamische Umgebung.</p>' +
          LP.kneeboard({
            title: 'CAS Execution Template',
            note: 'JP 3-09.3, Kap. V, Abs. 2b',
            lines: [
              { n: '1', t: 'Routing / Safety of Flight', d: 'Halteanweisung, andere Luftfahrzeuge, Bedrohungen, Wetter' },
              { n: '2', t: 'CAS Aircraft Check-in', d: 'MNPOPCA' },
              { n: '3', t: 'Situation Update', d: 'auftragsbezogen, so knapp wie möglich' },
              { n: '4', t: 'Game Plan', d: 'mindestens Type of Control + Method of Attack' },
              { n: '5', t: 'CAS Brief (9-Line)', d: 'drei Übertragungen à drei Zeilen' },
              { n: '6', t: 'Remarks / Restrictions', d: 'Restrictions sind Readback-Pflicht' },
              { n: '7', t: 'Readbacks', d: 'Line 4, Line 6, Restrictions' },
              { n: '8', t: 'Correlation', d: 'bei jedem Angriff' },
              { n: '9', t: 'Attack', d: 'IP inbound, IN, Freigabe oder Abort' },
              { n: '10', t: 'Assess Effects', d: 'Wirkung beurteilen, ggf. Reattack' },
              { n: '11', t: 'Battle Damage Assessment', d: 'SALTR' },
              { n: '12', t: 'Routing / Safety of Flight', d: 'Abflug: Punkt und Höhenband' }
            ]
          }) +
          '<p>Werden Luftfahrzeuge nur zur Aufklärung (Multisensor Imagery Reconnaissance oder ISR) eingesetzt, gilt zunächst eine verkürzte Form: Routing/Safety of Flight, Check-in, Situation Update mit Aufklärungsauftrag und Sensorzuteilung. Entdeckt die Besatzung ein Ziel, geht es mit Game Plan, CAS-Brief usw. weiter.</p>',
        src: [['jp3093', 'Kap. V, Abs. 2b und 3']]
      },
      {
        id: 'm05s3',
        title: 'Routing, Safety of Flight und Check-in',
        html:
          '<h3>Routing und Safety of Flight</h3>' +
          '<p>Beim ersten Kontakt antwortet der AO/JTAC <strong>in dieser Reihenfolge</strong>:</p>' +
          '<ol><li>Routing- bzw. Halteanweisung – mindestens ein „maintain“, um das Luftfahrzeug unter Kontrolle zu nehmen,</li><li>andere Luftfahrzeuge im Raum (oder: „you are the only aircraft on station“),</li><li>sonstige Flugsicherheitsinformationen: unmittelbare Bedrohungen, Wetter, Gelände.</li></ol>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Call</th><th>Bedeutung</th></tr></thead><tbody>' +
          '<tr><td class="mono">Proceed xxxx and report established</td><td>Zu Ort/Höhe fliegen und Erreichen melden</td></tr>' +
          '<tr><td class="mono">Maintain xxxx</td><td>Anweisung, an Ort/Höhe zu halten</td></tr>' +
          '<tr><td class="mono">Report passing xxxx</td><td>Durchfliegen einer Höhe melden</td></tr>' +
          '</tbody></table></div>' +
          LP.radio([
            ['JTAC', 'Razor 53, maintain Chevy-Dodge 14-15.'],
            ['JTAC', 'Latch 65, keyhole in effect, Echo point is November Uniform nine one eight three five seven, proceed Alpha ten, angels 14-16.'],
            ['JTAC', 'Deuce 21, proceed Emily to Adder maintain below 1500 ft AGL, there is a ZSU-23-4 vicinity of compound 34, you are the only aircraft on station.']
          ]) +
          '<p>Ist die aktuelle Position unbekannt, fragt der JTAC zuerst: „Hawg 23, say current position and altitude.“ Ein ungebriefter Keyhole braucht zuerst den Echo-Punkt.</p>' +
          '<h3>Check-in nach MNPOPCA</h3>' +
          LP.kneeboard({
            title: 'CAS Check-in Briefing',
            note: 'Luftfahrzeug → Controller',
            lines: [
              { n: 'M', t: 'Mission Number', d: '„Mission number 1541“ (aus dem ATO)' },
              { n: 'N', t: 'Number and Type of Aircraft', d: '„2 by F/A-18C“' },
              { n: 'P', t: 'Position and Altitude', d: '„Currently 20 nm north of Ford, block 20-21“' },
              { n: 'O', t: 'Ordnance', d: 'Munition, Lasercodes, Zünderoptionen' },
              { n: 'P', t: 'Playtime / Time on Station', d: '„25 minutes time on station“' },
              { n: 'C', t: 'Capabilities', d: 'FAC(A), Sensoren, Link 16 (Timber), VDL-Code, SITREPs an Bord, Karten-/GRG-Version, UAS-Lost-Link' },
              { n: 'A', t: 'Abort Code', d: 'gemäß SPINS/SOP oder „none“' }
            ],
            foot: 'Der Check-in kann verkürzt werden: „as fragged“ oder „with exception“. Authentisieren, wenn die Verbindung nicht gesichert ist.'
          }) +
          '<p>Fehlt etwas, fragt der JTAC nach – insbesondere nach <strong>Lasercodes der LGBs</strong>, dem <strong>Hellfire-Modell</strong> und den <strong>Zünderoptionen</strong> (instantaneous, airburst, delay), außerdem nach VDL-Codes, Lagecode, Kartenversion, FAC(A)-Fähigkeit, Sensoren und VMF/Link 16. Unbekannte Fähigkeiten in Klartext klären, bevor unausführbare Anweisungen entstehen.</p>' +
          '<h3>Abort Code</h3>' +
          '<ul>' +
          '<li>Bei gesicherter Verbindung ist kein Abort Code nötig. Ohne Code gilt <strong>„ABORT, ABORT, ABORT“</strong> als Standard.</li>' +
          '<li>Bei ungesicherter Verbindung: Code nach SPINS/SOP (z. B. Authentisierungsmatrix).</li>' +
          '<li>Wird ein Code übermittelt, liest der JTAC ihn zurück.</li>' +
          '</ul>' +
          '<p>Der JTAC sagt klar, wann er den Check-in will („Latch 65, send your check-in“) oder verschiebt ihn („hold your check-in, attack in progress“). Er kann auch nur Teile anfordern: „say ordnance and play-time“.</p>',
        src: [['jp3093', 'Kap. V, Abs. 2b(1)–(2), Abb. V-3, V-4']]
      },
      {
        id: 'm05s4',
        title: 'Situation Update',
        html:
          '<p>Die Situation Update bringt das Lagebewusstsein der Besatzung auf das Niveau, das der erwartete Auftrag braucht. Sie wird <strong>auftragsbezogen</strong> zugeschnitten; es werden nur die zutreffenden Elemente übermittelt.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Element</th><th>Hinweise aus JP 3-09.3</th></tr></thead><tbody>' +
          '<tr><td>Threat</td><td>Lage der Flugabwehr, soweit noch nicht genannt; Zeit des letzten Beschusses</td></tr>' +
          '<tr><td>Targets / Enemy Situation</td><td>allgemeine Feindlage – keine Liste von Koordinaten; konkrete Ziele kommen im CAS-Brief</td></tr>' +
          '<tr><td>Friendly</td><td>allgemeine Lage mit Geländebezug, Phase Lines; z. B. „all friendlies are east of the 94 easting“. Keine eigenen Koordinaten, wenn vermeidbar – sonst höchstens 6 Stellen. Alle eigenen Kräfte, die eine Rolle spielen, nicht nur der JTAC.</td></tr>' +
          '<tr><td>Artillery</td><td>Steilfeuermittel, die während der TOS eine Rolle spielen: Stellung, Rufzeichen, Frequenz, Status, Schussrichtung</td></tr>' +
          '<tr><td>Clearance Authority</td><td>kann entfallen, wenn der Sprecher selbst die Kontrolle hat; bei mehreren Stimmen auf TAD die Rollen klären</td></tr>' +
          '<tr><td>Ordnance / Hazards</td><td>erwartete Munition und Beschränkungen (z. B. keine Streumunition); Hindernisse, Mindesthöhen, Wetter, Bodenwind</td></tr>' +
          '<tr><td>Remarks / Restrictions</td><td>Calls, die für die ganze TOS gelten; Fähigkeiten des JTAC (Laser, IR, VDL); Absicht für das Luftfahrzeug</td></tr>' +
          '</tbody></table></div>' +
          LP.radio([
            ['JTAC', 'Current surface-to-air threat is a SA-6 at KJ 123 456, just west of MSR Tampa; target is light armored company attempting to flank us to the north and two companies dug in three klicks to our west, break.'],
            ['JTAC', 'Friendlies are two companies in the vicinity of OP 2, one on the high ground and the other in a blocking position to the east. I am with the company on the high ground. There is also a Recon team at the northwest tip of Black Mountain, arty is firecapped at Firebase 5E, firing generally west, break.'],
            ['JTAC', 'Savage 13 has control. Plan on using your GP bombs to disrupt the light armor. Winds on the deck are 10-knots out of the west. Savage is laser and IR capable, advise when ready for game plan.']
          ]) +
          LP.callout('tip', 'Gute Praxis', 'In handliche Übertragungen aufteilen („break“). Zu schnell, zu lang oder mit unnötigen Details verliert die Besatzung den Überblick. Lagemeldungen können über ASOC/DASC vorab verteilt werden (Situation Update Codes); die Besatzung meldet beim Check-in, ob sie die aktuelle Lage hat. Das Format dient auch für die Übergabe zwischen Controllern (Battlefield Handover).'),
        src: [['jp3093', 'Kap. V, Abs. 2b(3), Abb. V-5, V-6']]
      },
      {
        id: 'm05s5',
        title: 'Game Plan',
        html:
          '<p>Der Game Plan informiert alle Beteiligten kurz über den Ablauf des folgenden Angriffs. <strong>Mindestinhalt: Kontrollart und Angriffsmethode.</strong> Wiederholungen aus CAS-Brief und Remarks vermeiden.</p>' +
          '<p>Optional: Absicht des Kommandeurs, Kollateralschadensbedenken, gewünschte Munition und Wirkung, Zünder, Intervall, Anzahl der Stellen in Line 6.</p>' +
          LP.radio([
            ['JTAC', 'Deuce 21, Type 1, bomb on target; advise when ready for 9-line.'],
            ['JTAC', 'Latch 65, Type 2, bomb on coordinate, one GBU-38 instantaneous fusing each aircraft, simultaneous impact, 8-digit grid to follow; advise when ready for 9-line.'],
            ['JTAC', 'Venom 15, Type 3, bomb on target, I need all BRDMs and enemy personnel in the vicinity destroyed; advise when ready for 9-line.']
          ]) +
          '<h3>Reihenfolge beim Entwickeln</h3>' +
          '<ol><li>Gewünschte Wirkung bestimmen (Zielart, Zielanordnung, Deckung, Kollateralschaden, Abstand zu eigenen Kräften; REDs aus der JFIRE beachten).</li><li>Kontrollart wählen.</li><li>Angriffsmethode wählen – die schnellste, die zur Lage passt.</li><li>Intervall der Luftfahrzeuge planen.</li><li>Sensorplan entwickeln.</li></ol>' +
          '<h3>Intervall</h3>' +
          '<dl><dt>Simultaneous</dt><dd>Alle Wirkungen gleichzeitig: minimale Gefährdung, gut gegen mehrere oder bewegliche Ziele. Nachteil: keine Korrektur und kein Abbruch zwischen den Einschlägen. LGWs brauchen dafür unterschiedliche Lasercodes.</dd>' +
          '<dt>Sequential</dt><dd>Nacheinander mit Abstand. Faustwerte: <strong>30 s</strong> bei Type 1 mit ungelenkter Munition, <strong>etwa 1 min</strong> bei LGBs aus mittlerer Höhe, <strong>mehr als 2 min</strong> bei PGMs aus mittlerer bis großer Höhe, um über Folgeangriffe zu entscheiden.</dd></dl>' +
          '<h3>Mehrere Elemente</h3>' +
          '<p>Mit „in order“ legt der JTAC die Reihenfolge der Antworten fest. Dazu nennt er die Art des koordinierten Angriffs (combined oder sectored; simultaneous, sequential oder random) und den Ablauf.</p>' +
          LP.radio([
            ['JTAC', 'Latch 65 and Venom 11, this will be a sectored simultaneous attack, Latch 65 to the east, Venom 11 to the west. Latch 65, advise when ready for game plan.']
          ]) +
          '<p>Bei koordinierten Angriffen kann der JTAC in den Remarks „hold all readbacks“ sagen, zuerst alle Briefs übermitteln und dann die Readbacks anfordern. Kennt der JTAC die TLE, kann er sie hier ankündigen: „Cat II, 10-digit grid to follow, advise when ready for 9-line.“</p>',
        src: [['jp3093', 'Kap. V, Abs. 2a(3), 2b(4); Kap. III, Abs. 11c']]
      },
      {
        id: 'm05s6',
        title: 'Komplettes Beispiel: Type 1, BOT mit Markierung und SEAD',
        html:
          '<p>Aus JP 3-09.3, Anhang E, Beispiel 1. JTAC „Texas 17“ hat Troops in Contact gemeldet und zwei F/A-18C („Winder 61“) erhalten. Markierung und SEAD sind mit der Feuerunterstützung abgestimmt.</p>' +
          LP.radio([
            ['AIR', 'Texas 17, Winder 61.'],
            ['JTAC', 'Winder 61, proceed to Mazda block 13 to 14, be advised SA-8 active in target area, you are only aircraft on station, check in when able.'],
            ['AIR', 'Winder 61, copy, mission number AB2061, 2 by F/A-18 Hornet. 10 miles north of Mazda inbound from 200 to block 13 to 14, 4 by MK82 instantaneous and delay fuzing, and 450 rounds of 20 mm each. 35 minutes of PLAYTIME. AT FLIR, Cat II coordinate capable, VDL codes 4797 and 4457 respectively, TIMBER SWEET. ABORT code none.'],
            ['JTAC', 'Texas 17, copy, advise when ready for SITREP.'],
            ['AIR', 'Winder 61, ready.'],
            ['JTAC', 'Threat SA-8 active in target area and small arms. Enemy personnel are dug into fighting positions to the north. Friendlies are a company size infantry element collocated with Texas 17. We have gun position 3 active and in support, gun target line 040. Clearance will come from Texas 17. Weather is clear in the target area. Stay east of Mazda till IP inbound. Advise when ready for game plan.'],
            ['AIR', 'Winder 61, ready for game plan.'],
            ['JTAC', 'Winder 61, this will be a Type 1 control, BOT, 2 by MK-82 each, instantaneous fuzing, 30-second separation, advise when ready for 9-line.'],
            ['AIR', 'Texas 17, Winder 61, ready.'],
            ['JTAC', 'Mazda, 270 Left, 12.1.'],
            ['JTAC', 'Elevation, 350 feet, Platoon of infantry dug in, CM 367 971.'],
            ['JTAC', 'White phosphorous, South 900, Egress left pull, back to Mazda, block 13-14. Advise when ready for remarks.'],
            ['AIR', 'Ready.'],
            ['JTAC', 'Final attack heading 285-330. SA-8 north 1000 meters, continuous suppression, gun-target line 040, stay above 3000. Request IP inbound TOT 50.'],
            ['AIR', 'Winder 61, 350 feet, CM 367 971, final attack heading 285-330, stay above 3000, TOT 50.'],
            ['JTAC', 'Good readback, Winder 62 go with readback.'],
            ['AIR2', 'Winder 62, 350 feet, CM 367 971, final attack heading 285-330, stay above 3000, TOT 50.'],
            ['JTAC', 'Good readback.'],
            ['AIR', 'Winder 61, IP inbound.'],
            ['JTAC', 'Winder 61, CONTINUE.'],
            ['JTAC', 'MARK on deck. Suppression effective.'],
            ['AIR', 'Winder 61, CONTACT.'],
            ['JTAC', 'From the MARK, south 100.'],
            ['AIR', 'Winder 61, IN.'],
            ['note', 'Der JTAC sieht das Luftfahrzeug und prüft die Angriffsgeometrie.'],
            ['JTAC', 'Winder 61, CLEARED HOT.'],
            ['AIR', 'Winder 61, two AWAY.'],
            ['AIR2', 'Winder 62, contact lead’s hits IN.'],
            ['JTAC', 'Winder 62, from lead’s hits, west 50, CLEARED HOT.'],
            ['AIR2', 'Winder 62, two AWAY.']
          ]) +
          LP.callout('tip', 'Achte auf', 'Die 30 s Abstand geben dem JTAC Zeit, freizugeben, die Wirkung zu beurteilen und das zweite Luftfahrzeug zu finden. Beide Luftfahrzeuge lesen zurück, weil der JTAC es verlangt (bei BOT Pflicht nur für Lead). Die Korrektur kommt als Himmelsrichtung und Meter von der Markierung bzw. von den Einschlägen des Leads.'),
        src: [['jp3093', 'Anhang E, Beispiel 1']]
      }
    ],
    atp: [
      'Enthält deine ATP-3.3.2.1 ein Execution Template oder einen vergleichbaren Ablauf? Gleiche Reihenfolge und Begriffe ab.',
      'Welches Check-in-Format schreibt die ATP vor? Gibt es Abweichungen zu MNPOPCA?',
      'Welche Elemente nennt die ATP für die Situation Update (NATO-Format)?',
      'Wie regelt die ATP den Abort Code und die Authentisierung?',
      'Verlangt die ATP einen Game Plan vor dem CAS-Brief, und welche Mindestinhalte nennt sie?'
    ],
    jfire: [
      'Schlage in deiner JFIRE nach, wo die Risk-Estimate Distances stehen und unter welchen Bedingungen sie gelten. Werte nicht abschreiben – nur den Aufbau der Tabellen verstehen.'
    ]
  });
})();
