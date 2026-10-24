(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm06',
    nr: 6,
    title: 'Der 9-Line CAS Brief',
    summary: 'Format, Übermittlung und jede Zeile des CAS-Briefs im Detail, Remarks und Restrictions, Readbacks – mit den NATO-Abweichungen, die JP 3-09.3 selbst nennt.',
    goals: [
      'Den 9-Line-Brief fehlerfrei und in korrekten Einheiten aufbauen',
      'Line 8 richtig bilden (Richtung vom Ziel zu den nächsten eigenen Kräften)',
      'Remarks und Restrictions in sinnvoller Reihenfolge übermitteln',
      'Readback-Pflichten für BOT und BOC sowie die NATO-Besonderheiten kennen'
    ],
    sections: [
      {
        id: 'm06s1',
        title: 'Format und Übermittlung',
        html:
          LP.kneeboard({
            title: 'Game Plan und 9-Line CAS Brief',
            note: 'JP 3-09.3, Abb. V-9',
            lines: [
              { n: 'GP', t: '„Type (1, 2, 3), method of attack (BOT/BOC), (effects/ordnance, interval). Advise when ready for 9-line.“' },
              { n: '1', t: 'IP / BP', d: 'Name des IP bzw. der Battle Position' },
              { n: '2', t: 'Heading / Offset', d: 'Grad magnetisch IP/BP → Ziel; Offset links/rechts, wenn gefordert' },
              { n: '3', t: 'Distance', d: 'IP → Ziel in NM (auf 0,1); BP → Ziel in Metern' },
              { n: '4', t: 'Target Elevation', d: 'in Fuß MSL', rb: true },
              { n: '5', t: 'Target Description', d: 'konkret und knapp' },
              { n: '6', t: 'Target Location', d: 'Lat/Long, Gitterkoordinate, Versatz oder visuell', rb: true },
              { n: '7', t: 'Type Mark / Terminal Guidance', d: 'Markierungsart; bei Laser-Handoff Rufzeichen des Beleuchters und Code' },
              { n: '8', t: 'Location of Friendlies', d: 'vom Ziel aus: Himmelsrichtung und Entfernung in Metern' },
              { n: '9', t: 'Egress', d: 'Abfluganweisung' },
              { n: 'R', t: 'Remarks / *Restrictions', d: 'LTL/PTL, Munition/Wirkung, Bedrohung und SEAD, weitere Hinweise (GTL, Wetter, Gefahren, Eigenmarkierung), geforderte Calls; *FAH, *ACA, *Danger Close + Initialen, *TOT/TTT', rb: true }
            ],
            foot: '* Readback-Pflicht: Line 4, Line 6 und alle Restrictions. Der JTAC kann weitere Readbacks verlangen. NATO (ATP-3.3.2.1 laut JP 3-09.3): zusätzlich Line 8.'
          }) +
          '<h3>Regeln für die Übermittlung</h3>' +
          '<ul>' +
          '<li>Der Brief ist der Standard für <strong>Starr- und Drehflügler</strong> und gilt in jeder Bedrohungslage. Er schreibt der Besatzung keine Taktik vor.</li>' +
          '<li>Einleitung: „Razor 53, advise when ready for 9-line.“ Vorher selbst bereit sein.</li>' +
          '<li><strong>In drei Übertragungen zu je drei Zeilen</strong>, in moderatem Tempo. Zu schnelles Lesen kostet Zeit, weil wiederholt werden muss.</li>' +
          '<li>Die Zeilen folgen der Reihenfolge 1–9. Nie stückweise über mehrere Minuten oder außer der Reihe.</li>' +
          '<li>US-Verfahren: <strong>keine Zeilennummern</strong> senden; Maßeinheiten sind Standard, sofern nicht anders gebrieft.</li>' +
          '</ul>' +
          LP.callout('nato', 'NATO-Abweichung laut JP 3-09.3', 'Die ATP-3.3.2.1 schreibt vor, dass NATO-FACs vor jeder Zeile den <strong>Zeilentitel</strong> nennen. Das verringert Missverständnisse, wenn nicht alle Beteiligten Englisch als Muttersprache sprechen. Auch bei Sprachbarrieren oder Störungen ist das sinnvoll. → Prüfe die Vorgabe in deiner Ed. D.'),
        src: [['jp3093', 'Kap. V, Abs. 2b(5), Abb. V-9']]
      },
      {
        id: 'm06s2',
        title: 'Lines 1 bis 3: IP, Heading und Distance',
        html:
          '<dl>' +
          '<dt>Line 1 – IP/BP</dt><dd>Der IP ist der Startpunkt für den Anflug auf das Ziel. Für Drehflügler ist die BP der Ort, von dem aus angegriffen wird. Möglich ist auch eine Hasty BP: „Hasty BP, center grid Papa Uniform One-two-three-four, 2x2“.</dd>' +
          '<dt>Line 2 – Heading/Offset</dt><dd>Kurs in Grad <strong>magnetisch</strong> vom IP bzw. von der Mitte der BP zum Ziel, dreistellig gesprochen: „One eight zero“. Ein Offset (links/rechts) wird nur bei Bedarf gegeben: Er legt fest, auf welcher Seite der Linie IP–Ziel die Besatzung manövrieren darf.</dd>' +
          '<dt>Line 3 – Distance</dt><dd>Starrflügler: Entfernung IP → Ziel in <strong>Seemeilen auf eine Zehntel genau</strong> (z. B. „12.1“). Kampfhubschrauber: Entfernung von der Mitte der BP in <strong>Metern auf 100 m genau</strong>.</dd>' +
          '</dl>' +
          '<h3>Kein IP-Anflug</h3>' +
          '<p>Greift das Luftfahrzeug aus einer Kreisbahn über dem Ziel an, heißt es „From the overhead“ oder „Lines 1-3 N/A“. Die nächste Übertragung beginnt dann mit dem Wort <strong>„Elevation“</strong>:</p>' +
          LP.radio([['JTAC', 'From the overhead. Elevation, four-hundred fifty feet …']]) +
          '<p>Für Level-Laydown sowie Ramp- und Bunt-Deliveries von Starrflüglern passt „from the overhead“ nicht – die nötige Anflugstrecke gehört in Line 1–3. Ein PGM-Anflug beginnt typischerweise etwa 8–10 NM vor dem Ziel.</p>',
        src: [['jp3093', 'Kap. V, Abs. 2b(5)(d)–(f); Kap. III, Abs. 14c(3)(b)']]
      },
      {
        id: 'm06s3',
        title: 'Lines 4 bis 6: Elevation, Description, Location',
        html:
          '<h3>Line 4 – Target Elevation</h3>' +
          '<ul>' +
          '<li>In <strong>Fuß MSL</strong>; Ziffern einzeln sprechen und „feet“ anhängen, um sie von Line 5 zu trennen.</li>' +
          '<li>Anderes Bezugssystem muss genannt werden: „Three six five feet height above ellipsoid“.</li>' +
          '<li>Die Höhe ist am schwersten genau zu schätzen. Zielsoftware ist am genauesten; Geländeassoziation reicht meist, außer in sehr steilem Gelände oder in der Stadt. Steilere Einschlagwinkel verringern den Einfluss von Höhenfehlern.</li>' +
          '</ul>' +
          '<h3>Line 5 – Target Description</h3>' +
          '<p>So konkret, dass die Besatzung das Ziel erkennt, in einfacher Sprache: „Five APCs in the open“. Das <strong>Ziel benennen, nicht den Ort</strong>: „HVT in 2-story building“ statt „2-story building“. Ziel-Sortierung gehört später in die Zusatzinformationen.</p>' +
          '<h3>Line 6 – Target Location</h3>' +
          '<ul>' +
          '<li><strong>Gitterkoordinate</strong> immer mit Kennung des 100-km-Quadrats; zwischen Rechts- und Hochwert deutlich pausieren.</li>' +
          '<li><strong>Lat/Long</strong>: Format eindeutig machen, Hemisphäre zuerst sagen („North …“). Vertauschte Ziffern erzeugen große Fehler.</li>' +
          '<li><strong>Versatz von einem bekannten Punkt</strong> (Richtung und Entfernung von Gelände, Bauwerk, Navigationshilfe oder Markierung). Den Bezugspunkt vor dem Brief festlegen; die Besatzung muss ihn erfasst haben.</li>' +
          '<li>Bezugssystem: <strong>WGS-84</strong> ist Standard, sofern SPINS nichts anderes regeln. Ein anderes Datum wird bei Check-in oder Situation Update bestätigt.</li>' +
          '<li>Flächenziel: Mitte oder Ort der größten Konzentration. Linienziel: Treffpunkt, Ausrichtung und Abstand zu den Enden.</li>' +
          '<li>Mehrere Ziele: einen normalen Brief lesen, dann für weitere Ziele nur Lines 4, 6 und 8, jeweils vor den Remarks.</li>' +
          '<li>Wird mehr als 6-stellig übermittelt, die Stellenzahl ankündigen (Game Plan, vor Line 6 oder in der Lagemeldung). <strong>Die Stellenzahl ist Präzision, nicht Genauigkeit.</strong></li>' +
          '</ul>' +
          '<h3>Bewegliche Ziele</h3>' +
          LP.radio([['JTAC', 'Heartless 21, Punisher 99, the target is a single tactical vehicle in the vicinity of Papa Uniform 123 … 456, traveling northeast along route Michigan at approximately 30 miles per hour.']]) +
          '<p>Vor der Freigabe beurteilen JTAC und Besatzung den aktuellen Zielort neu (eigene Kräfte, Zivilisten, FSCM). Bei Bedarf aktualisiert der JTAC Lines 4, 6, 8 und Restrictions und lässt sie zurücklesen.</p>' +
          '<h3>Korrelation vor dem Brief</h3>' +
          '<p>Hat die Besatzung das Ziel bereits, kann Line 6 „from your TALLY“ lauten. Line 5 muss das Ziel dann eindeutig von anderen unterscheiden. Die Besatzung liest Höhe und TALLY/CAPTURED zurück und nennt, wenn möglich, Koordinate und Höhe aus ihrem Sensor.</p>' +
          LP.radio([
            ['JTAC', 'Elevation, 450 feet, enemy personnel in defilade, north of road intersection from your TALLY.'],
            ['AIR', '450 feet, I am CAPTURED personnel in defilade north of a road intersection. I have them at grid LS 1234 5678.']
          ]) +
          LP.callout('warn', 'Nicht zusammenfassen', 'Lines 4 bis 6 nicht zu einem Satz wie „Lines 4 through 6, from your system“ zusammenziehen.'),
        src: [['jp3093', 'Kap. V, Abs. 2a(1), 2b(5)(g)–(i)']]
      },
      {
        id: 'm06s4',
        title: 'Lines 7 bis 9: Mark, Friendlies, Egress',
        html:
          '<h3>Line 7 – Type Mark / Terminal Guidance</h3>' +
          '<ul>' +
          '<li>Markierungsart nennen, z. B. smoke, white phosphorous, laser, IR. Bei Laser den Code dazu.</li>' +
          '<li>Bei Fremdbeleuchtung für LGWs: Rufzeichen des Beleuchters + „laser“ + vierstelliger Code: „Blackjack laser, code 1688“.</li>' +
          '<li>BOC ohne Markierung: „no mark“. Bei IR-Pointer: „IR“ bzw. „IR pointer“.</li>' +
          '</ul>' +
          '<h3>Line 8 – Location of Friendlies</h3>' +
          '<p>Himmelsrichtung bzw. Nebenhimmelsrichtung <strong>vom Ziel aus</strong> (N, NE, E, SE, S, SW, W, NW) und Entfernung der <strong>nächstgelegenen eigenen Kräfte</strong> in Metern: „South 300“.</p>' +
          LP.callout('crit', 'Typischer Fehler', 'Line 8 wird vom <em>Ziel</em> aus gerechnet, nicht vom Beobachter. Liegt das Ziel nordöstlich der eigenen Stellung, lautet Line 8 „Southwest …“. Und: Der Beobachter oder JTAC ist nicht unbedingt die nächstgelegene eigene Kraft.') +
          LP.callout('nato', 'NATO-Abweichung laut JP 3-09.3', 'Die ATP-3.3.2.1 macht <strong>Line 8 zur Readback-Pflicht</strong>. Besatzungen sollen sich bei NATO-FACs/JTACs darauf einstellen. → Prüfe die Vorgabe in deiner Ed. D.') +
          '<h3>Line 9 – Egress</h3>' +
          '<p>Anweisungen zum Verlassen des Zielgebiets – mit Himmelsrichtung, über Kontrollpunkte oder, wenn möglich, „Egress at pilot’s discretion“. Vor der Anweisung steht das Wort <strong>„Egress“</strong>. Höhen besser als Zahlen statt „in your block“: „Egress North to Moon, block 15-17“.</p>',
        src: [['jp3093', 'Kap. V, Abs. 2b(5)(j)–(l); Kap. III, Abs. 14d(3)(a)3']]
      },
      {
        id: 'm06s5',
        title: 'Remarks und Restrictions',
        html:
          '<p>Nur zutreffende und noch nicht gebriefte Elemente aufnehmen. Empfohlene Reihenfolge der <strong>Remarks</strong>:</p>' +
          '<ol>' +
          '<li><strong>LTL</strong> (Laser-Target Line) in Grad magnetisch, wenn ein Bodenbeleuchter eingesetzt wird</li>' +
          '<li>gewünschte Munition/Anzahl bzw. Wirkung, falls nicht schon im Game Plan</li>' +
          '<li><strong>Flugabwehrbedrohung</strong>: Typ, Richtung und Entfernung von Line 6, Art der Niederhaltung (continuous, interrupted, non-standard mit Dauer relativ zur TOT), GTL der Niederhaltung</li>' +
          '<li>weitere Feuer im Raum</li>' +
          '<li>geforderte Funksprüche: IP inbound, IN mit Kurs oder Himmelsrichtung, Zeit bis Roll-in/Auslösung</li>' +
          '<li>weitere Hinweise: Luftfahrthindernisse, Wetter, TLE-Kategorie, Nachtsichtfähigkeit, Zeitfaktoren, Eigenmarkierung, Zeitstempel bewegter Ziele, ggf. ROE</li>' +
          '</ol>' +
          '<p><strong>Restrictions</strong> (immer Readback-Pflicht):</p>' +
          '<ol>' +
          '<li><strong>Danger Close</strong> mit Initialen des Kommandeurs</li>' +
          '<li><strong>ACAs</strong> (formell und informell)</li>' +
          '<li><strong>Final Attack Headings</strong> – so wenig einschränkend wie möglich</li>' +
          '<li>seitliche und/oder Höhenstaffelung</li>' +
          '<li>Freigabe zum Verlassen der BP (Drehflügler)</li>' +
          '<li><strong>TOT/TTT</strong> – als letztes Element, es zeigt das Ende der Remarks/Restrictions an</li>' +
          '<li>PLA-Punkt und Bedingungen, falls genehmigt</li>' +
          '</ol>' +
          '<h3>Wann die TOT vergeben wird</h3>' +
          '<ul>' +
          '<li><strong>BOC</strong>: TOT kann in den Restrictions stehen, weil die Korrelation mit dem Readback abgeschlossen ist. Zeit für Systemeingabe, Readback und Anflug lassen.</li>' +
          '<li><strong>BOT</strong> mit längerer Korrelation: TOT erst danach vergeben („Standby TOT“ oder „TOT will be issued after correlation“).</li>' +
          '<li><strong>BOT mit Versatz von einer Markierung</strong>: TOT kann vorher vergeben werden, weil die Markierung dafür liegen muss.</li>' +
          '<li>„Push when ready“, wenn keine TOT nötig ist. „Immediate“ nur bei echter Dringlichkeit.</li>' +
          '<li>Schafft die Besatzung die TOT nicht, nennt sie selbst die erreichbare TOT.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. V, Abs. 2b(6)']]
      },
      {
        id: 'm06s6',
        title: 'Readbacks',
        html:
          '<ul>' +
          '<li>Pflicht: <strong>Line 4, Line 6 und alle Restrictions</strong>. FAH, ACA, Danger Close und TOT sind immer Restrictions. Verlangt der JTAC mehr, liest die Besatzung es zurück.</li>' +
          '<li>Richtiger Readback: „Call sign, readback correct“ oder „Call sign, good readback“.</li>' +
          '<li>Falscher Readback: den betreffenden Teil richtig wiederholen und den Fehler mit der Stimme betonen: „Deuce 21, be advised, final attack headings 1-8-0 through 2-1-0.“</li>' +
          '<li><strong>BOT</strong>: das führende Luftfahrzeug liest zurück. <strong>BOC</strong>: alle waffeneinsetzenden Luftfahrzeuge, und zwar aus Waffe oder Bordsystem.</li>' +
          '<li>Bei BOT ohne Koordinate in Line 6 nennt die Besatzung, wenn möglich, den Zielort aus ihrem System – für das Lagebild, die Freigabe und die BDA.</li>' +
          '<li>Ein Offset ist eine Restriction, muss aber nur auf Anforderung zurückgelesen werden.</li>' +
          '</ul>' +
          LP.radio([
            ['AIR', 'Rumble 41, 1650 feet, NB 234 876, final attack heading 280 through 320.'],
            ['JTAC', 'Rumble 41, good readback. Rumble 42, go with readbacks.'],
            ['AIR2', 'Rumble 42, 1650 feet, NB 234 876, final attack heading 280 through 320.'],
            ['JTAC', 'Rumble 42, good readback; Rumble flight, report IP inbound, TOT 35, expect clearance as a flight.']
          ]) +
          LP.callout('tip', 'Daten kamen von der Besatzung', 'Hat die Besatzung selbst Höhe und Koordinate geliefert (z. B. bei Aufklärung), gilt die Übermittlung durch den JTAC im 9-Line als Readback. Die Besatzung bestätigt dann „good readback“, liest aber die Restrictions zurück.'),
        src: [['jp3093', 'Kap. V, Abs. 2b(7), 3a(8); Anhang E, Beispiel 3']]
      }
    ],
    atp: [
      'Prüfe in deiner ATP-3.3.2.1: Müssen NATO-FACs Zeilentitel nennen? (JP 3-09.3 von 2014 sagt ja – für Ed. C.)',
      'Prüfe: Ist Line 8 Readback-Pflicht? Welche weiteren Readback-Pflichten nennt die ATP?',
      'Welche Inhalte und Reihenfolge nennt die ATP für Remarks und Restrictions?',
      'Wie definiert die ATP die Maßeinheiten in Line 2, 3 und 4 (magnetisch, NM, Fuß MSL)?',
      'Wie gibt die ATP Line 8 an – vom Ziel oder vom FAC aus?'
    ]
  });
})();
