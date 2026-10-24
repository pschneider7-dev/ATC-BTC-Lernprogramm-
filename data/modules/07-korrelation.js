(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm07',
    nr: 7,
    title: 'Korrelation, Markierung und Talk-on',
    summary: 'Was Korrelation ist und wann sie abgeschlossen ist, alle Markierungsarten mit Vor- und Nachteilen, Steilfeuer-Markierung, die Talk-on-Technik FIDO, VDL-Talk-on und die Marking-Brevity.',
    goals: [
      'Korrelation definieren und den Abschluss bei BOT und BOC bestimmen',
      'Markierungsarten mit Vor- und Nachteilen vergleichen',
      'Eine Korrektur von der Markierung korrekt geben',
      'Einen Talk-on nach FIDO durchführen',
      'Die Marking-Brevity sicher verwenden'
    ],
    sections: [
      {
        id: 'm07s1',
        title: 'Korrelation',
        html:
          '<div class="def"><span class="term">Definition</span><p>Korrelation ist der Prozess, mit dem der JTAC/FAC(A) abstimmt und bestätigt, dass die angreifende Besatzung und/oder ein dritter Beteiligter <strong>das richtige Ziel oder die richtige Markierung erfasst</strong> hat. Sie ist bei <strong>jedem einzelnen CAS-Angriff</strong> erforderlich.</p></div>' +
          '<dl>' +
          '<dt>BOC</dt><dd>Abgeschlossen, wenn das angreifende Luftfahrzeug Line 4 und 6 (aus System oder Waffe) und die Restrictions korrekt zurückgelesen hat. Leitet ein Dritter die Waffe ins Ziel (z. B. Laser), ist auch mit ihm zu korrelieren.</dd>' +
          '<dt>BOT</dt><dd>Mit dem angreifenden Luftfahrzeug bzw. dem dritten Beteiligten zwingend. Der JTAC lässt markieren und bringt das Luftfahrzeug in Position. Er prüft mit <strong>Fragen, die eindeutige und unterscheidbare Antworten haben</strong>, ob die Besatzung dieselben Bezugspunkte sieht.</dd>' +
          '</dl>' +
          '<p><strong>Third Party Contributor</strong> ist jeder, der für den Angriff Zielort, Markierung, Endphasenlenkung oder BDA liefert – z. B. JFO, Scharfschütze, FIST, lasertragendes UAS oder ein anderes Luftfahrzeug. Auch mit ihnen wird korreliert.</p>' +
          '<h3>Abschluss der Korrelation</h3>' +
          '<p>Ist der JTAC sicher, sagt er: „The xxxx is your target.“ – mit Nennung des Ziels, z. B. „The third vehicle is your target.“ oder „The individual north of the road is your target.“ Die Besatzung antwortet <strong>TALLY</strong>, <strong>(target/object) CAPTURED</strong> oder <strong>CONTACT</strong>.</p>' +
          LP.callout('warn', 'Mehrdeutig', '„That’s your target“ ist zu vage und zu vermeiden. Lässt sich der JTAC nach unsicherer Korrelation eine aktualisierte Koordinate geben, liest er sie nicht zurück (kein „Ping-Pong“), sondern plottet sie und prüft die Geometrie.'),
        src: [['jp3093', 'Kap. V, Abs. 2a(4)(c), 2b(8)']]
      },
      {
        id: 'm07s2',
        title: 'Markierungsarten im Vergleich',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Art</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>' +
          '<tr><td><strong>Laser-Handoff</strong> (LTD → LST des Luftfahrzeugs)</td><td>hohe Sicherheit bei richtiger Geometrie; Tag und Nacht</td><td>braucht LTD und LST; Geometrie muss stimmen, damit der LST nicht den Beleuchter erfasst; Bodenlaser schwer ruhig zu halten (Skipping, Spillover, Jitter)</td></tr>' +
          '<tr><td><strong>Match Sparkle</strong></td><td>schnell; JTAC sieht, worauf die Besatzung korreliert ist</td><td>nur nachts; richtiges Ende des Strahls; mehrere Sparkles und Überstrahlung; NVG-fähiger Feind</td></tr>' +
          '<tr><td><strong>Sparkle Walk-on</strong></td><td>JTAC muss sich nicht verraten; JTAC sieht das Ergebnis</td><td>nur nachts; Feind merkt, dass er beleuchtet wird; unterschiedliche Perspektive erschwert das Führen</td></tr>' +
          '<tr><td><strong>Ground IR Sparkle</strong></td><td>orientiert NVG-Besatzungen schnell</td><td>nur nachts; Verrat der eigenen Stellung; Skipping; richtiges Ende des Strahls</td></tr>' +
          '<tr><td><strong>VDL-Talk-on</strong></td><td>JTAC sieht das Sensorbild</td><td>VDL-Empfänger nötig</td></tr>' +
          '<tr><td><strong>TRP/GEOREF-Versatz</strong></td><td>verfügbar, Tag und Nacht, gemeinsamer Startpunkt</td><td>Besatzung muss TRP/GEOREF kennen</td></tr>' +
          '<tr><td><strong>Steilfeuermarkierung</strong></td><td>Tag und Nacht; JTAC bleibt verdeckt; Startpunkt für Talk-on</td><td>Abstimmung kostet Zeit; meist Korrektur nötig; Entflechtung von CAS; Sichtfeld der Sensoren; Rauch stört LGWs; Leuchten blendet NVGs; kein Überraschungseffekt</td></tr>' +
          '<tr><td><strong>Direktes Feuer</strong> (Leuchtspur, Granatwerfer-Nebel)</td><td>sofort verfügbar</td><td>Geschosse können durchschlagen und hinter dem Ziel einschlagen; für RW am Tag und für FW schwer zu sehen</td></tr>' +
          '<tr><td><strong>Link-16/SADL-Handoff</strong></td><td>Lagebild schon vor dem Check-in</td><td>nicht alle Luftfahrzeuge; meist Gateway nötig; Talk-on bleibt nötig</td></tr>' +
          '<tr><td><strong>Radarbaken-Versatz</strong></td><td>Tag und Nacht, allwetterfähig</td><td>Baken selten vorhanden; wenig Ausbildung</td></tr>' +
          '</tbody></table></div>' +
          '<ul>' +
          '<li><strong>Redundante Marken</strong> planen, falls die erste ausfällt, zu spät kommt oder ungenau ist: Laser/Rauch, IR-Pointer/Leuchtspur, Rauch/Talk-on.</li>' +
          '<li><strong>Marks of Opportunity</strong> nutzen: Brände, brennende Gebäude, Fahrzeugverkehr.</li>' +
          '<li><strong>Eigene Kräfte markieren</strong> ist die am wenigsten erwünschte Methode, um ein TALLY zu erreichen – verwirrend und nur, wenn nichts anderes geht.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. V, Abs. 2a(4)(c)3; Kap. III, Abs. 14d(3)(a)']]
      },
      {
        id: 'm07s3',
        title: 'Markierung durch Steil- und Direktfeuer',
        html:
          '<ul>' +
          '<li>Markierungsgeschosse wirken am besten <strong>innerhalb von 100 m</strong> um das CAS-Ziel. Bis <strong>300 m</strong> gelten sie in der Regel noch als ausreichend, um Luftfahrzeuge einzuweisen.</li>' +
          '<li>Eine Markierung kann so abgestimmt werden, dass sie <strong>30–45 s vor der TOT</strong> liegt. Eine frühere Markierung gibt Zeit, schwer erkennbare Ziele aus dem Halteraum zu finden, kostet aber die Überraschung.</li>' +
          '<li>Laufzeiten berechnen und die Taktik der Besatzung kennen, damit die Marke rechtzeitig liegt und lange genug sichtbar ist.</li>' +
          '<li>Vorsicht mit WP/RP auf belebtem Gefechtsfeld – Verwechslungsgefahr mit anderen Feuern.</li>' +
          '<li>Vor einer Markierung durch Artillerie, Mörser oder Schiffsartillerie bedenken, dass diese dadurch für die gegnerische Ortung sichtbar werden.</li>' +
          '</ul>' +
          '<h3>Korrektur von der Markierung</h3>' +
          '<p>Bei synchronisierten BOT-Angriffen mit 30–45 s Vorlauf bleibt kaum Zeit. Die Korrelation erfolgt dann durch eine <strong>genaue Korrektur von der sichtbaren Marke</strong> in Himmelsrichtung und Metern. Die Besatzung meldet „CONTACT the mark“. „Mark is on the deck“ muss der JTAC nicht sagen.</p>' +
          LP.radio([
            ['JTAC', 'MARK on deck. Suppression effective.'],
            ['AIR', 'Winder 61, CONTACT.'],
            ['JTAC', 'From the MARK, south 100.'],
            ['AIR', 'Winder 61, IN.']
          ]) +
          LP.callout('warn', 'Plan für den Ausfall', 'Fällt die Marke aus oder ist sie unbrauchbar, muss der JTAC das Risiko neu bewerten: Ausweichmarke, Mark of Opportunity oder Abbruch. Was nicht die Marke aus Line 7 ist, heißt nicht „the mark“, sondern bekommt eine eigene Bezeichnung: „lead’s hits“, „the black smoke“.'),
        src: [['jp3093', 'Kap. III, Abs. 14d(3)(a)1; Kap. V, Abs. 2b(8)(d)6; Abb. III-24']]
      },
      {
        id: 'm07s4',
        title: 'Talk-on',
        html:
          '<p>Ziel eines Talk-on ist es, ein bestimmtes Ziel zwischen JTAC und Besatzung so genau abzustimmen, dass der JTAC weiß: Die Besatzung hat das Ziel. Wirksamkeit hängt ab von <strong>Perspektive der Besatzung, Perspektive des Controllers, Umweltbedingungen, Relief, Auflösung und Aktualität der Grafiken</strong> und davon, ob es eine gemeinsame <strong>Maßeinheit</strong> gibt.</p>' +
          '<h3>FIDO</h3>' +
          LP.kneeboard({
            title: 'Talk-on nach FIDO',
            lines: [
              { n: 'F', t: 'From a point', d: 'leicht erkennbarer Startpunkt' },
              { n: 'I', t: 'In a direction', d: 'Himmels- bzw. Nebenhimmelsrichtung' },
              { n: 'D', t: 'Distance to travel', d: 'vereinbarte Maßeinheit oder Meter' },
              { n: 'O', t: 'Object seen', d: 'Objekt, das die Besatzung sehen soll' }
            ],
            foot: 'Bestätiger (Confirmers) rund um das Ziel nutzen.'
          }) +
          LP.radio([
            ['JTAC', 'Razor 53, from the cubby-hole, proceed south across MSR Michigan to the first building and call CONTACT.'],
            ['AIR', 'Razor 53 CONTACT.'],
            ['JTAC', 'Razor 53, that building will be called the bank; from the bank go two buildings east and call CONTACT on a building with a courtyard in the middle.'],
            ['AIR', 'Razor 53 is CONTACT the building with the courtyard.'],
            ['JTAC', 'Which side of the courtyard opens to the street?']
          ]) +
          '<h3>Techniken</h3>' +
          '<ul>' +
          '<li>Art des Talk-on und Version der Unterlage nennen: „Latch 65, advise when ready for a GRG talk-on using the version 4.8 GRG.“ Den Wechsel der Art ansagen.</li>' +
          '<li>Visuell grundsätzlich vom Großen zum Kleinen; in der Stadt mit Sensor kann man an einer markanten Kreuzung beginnen.</li>' +
          '<li>Kurze, direktive Sätze mit „call CONTACT“.</li>' +
          '<li>Höchstens <strong>zwei Himmelsrichtungen</strong> pro Übertragung.</li>' +
          '<li>Gebäude, Straßen und Kreuzungen benennen („the bank“), statt „diese Straße, das Gebäude“.</li>' +
          '<li>Maßeinheiten aus Merkmalen entlang des Weges bilden; lineare Geländemerkmale als „Nord-Süd“ bzw. „Ost-West“ festlegen.</li>' +
          '<li><strong>Verhältnis 2:1</strong> – zwei Anweisungen, dann eine Kontrollfrage.</li>' +
          '<li>Die Besatzung über die eigene Blickrichtung informieren. Nichts abfragen, was der JTAC selbst nicht sieht.</li>' +
          '<li>Abschluss mit eindeutigen Fragen: „Which direction is the lead vehicle facing?“ „How many individuals are on the north side of the lead vehicle?“</li>' +
          '</ul>' +
          '<h3>Unterschiedliche Perspektiven</h3>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Boden</th><th>Starrflügler</th><th>Drehflügler</th><th>UAS</th></tr></thead><tbody>' +
          '<tr><td>Vertikales Relief</td><td>gut</td><td>schlecht</td><td>gut</td><td>schlecht</td></tr>' +
          '<tr><td>Horizontales Relief</td><td>schlecht</td><td>gut</td><td>schlecht</td><td>gut</td></tr>' +
          '<tr><td>Farbunterscheidung</td><td>gut</td><td>schlecht (über ~15.000 ft Schrägentfernung mit bloßem Auge nicht)</td><td>gut</td><td>gut (sensorabhängig)</td></tr>' +
          '<tr><td>Verzögerung</td><td>gering</td><td>gering</td><td>gering</td><td>deutlich</td></tr>' +
          '</tbody></table></div>' +
          '<div class="def"><span class="term">Enhanced Target Description</span><p>Für feindliche Tiefflug-Lagen, in denen die Besatzung nur Sekunden hat: Der JTAC beschreibt, wie das Zielgebiet aus der Anflugrichtung aussehen wird und wo das Ziel liegt – oft beginnend mit Karte oder GRG. Weil er beschreibt, was die Besatzung <em>sehen wird</em>, muss diese währenddessen nicht CONTACT rufen.</p></div>',
        src: [['jp3093', 'Kap. V, Abs. 2b(8)(d)7, Abb. V-10']]
      },
      {
        id: 'm07s5',
        title: 'Video Downlink und Sensoren',
        html:
          '<p>VDL-Systeme übertragen das Sensorbild (Full Motion Video, FMV) des Luftfahrzeugs zum Boden. Sie verbessern Lagebild, Zielbestätigung, Kollateralschadensvermeidung und BDA, ändern aber die CAS-Verfahren nicht. <strong>FMV ist keine alleinige Quelle für die Zielidentifizierung.</strong></p>' +
          '<ul>' +
          '<li>Beim Check-in meldet die Besatzung VDL-Fähigkeit und Frequenz/Code. Innerhalb einer Rotte möglichst mindestens 30 MHz Frequenzabstand.</li>' +
          '<li>Talk-on beginnt mit dem Schwenken des Sensors auf die Koordinate; erst weites, dann enges Sichtfeld, am Ende zur Bestätigung wieder weiter.</li>' +
          '<li>Maßeinheit: <strong>halbe Bildschirmbreite</strong> statt ganzer.</li>' +
          '<li>Beim VDL-Talk-on mit <strong>SLEW</strong> die Richtungen <strong>up, down, left, right</strong> nutzen, nicht Himmelsrichtungen – das Gegenteil zum Sparkle Walk-on.</li>' +
          '<li>Nach dem Schwenken antwortet die Besatzung <strong>SET</strong>; liegt das Ziel unter dem Fadenkreuz: „SET, CAPTURED“.</li>' +
          '<li>Bildverlust melden mit <strong>HOLLOW</strong>; die Besatzung kündigt mit <strong>EXPECT HOLLOW</strong> Manöver an, die den Empfang stören.</li>' +
          '</ul>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>VDL-Brevity</th><th>Bedeutung</th></tr></thead><tbody>' +
          '<tr><td>HANDSHAKE / HOLLOW</td><td>Video-Datenlink steht / Datenlink oder Video verloren</td></tr>' +
          '<tr><td>SLEW</td><td>Sensor in die genannte Richtung bewegen („SLEW left one-half screen“)</td></tr>' +
          '<tr><td>SET</td><td>Sensor wird nicht mehr bewegt, wartet auf weitere Anweisung</td></tr>' +
          '<tr><td>STAKE</td><td>FMV-Marke gesetzt, dient als Bezugspunkt</td></tr>' +
          '<tr><td>SHADOW</td><td>dem bezeichneten Ziel folgen</td></tr>' +
          '<tr><td>DECLUTTER</td><td>Symbolik ausblenden, um das Bild besser zu sehen</td></tr>' +
          '<tr><td>SWITCH CAMERA / SWITCH POLARITY</td><td>EO ↔ IR wechseln / white hot ↔ black hot</td></tr>' +
          '<tr><td>ZOOM IN/OUT 1–4</td><td>Sichtfeld um 1–4 Stufen ändern (empfohlen: immer nur eine)</td></tr>' +
          '<tr><td>CHECK CAPTURE / CHECK FOCUS</td><td>Ziel scheint nicht mehr verfolgt / Bild unscharf</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Sensorhaltungen bei Überwachung</h3>' +
          '<dl><dt>Neutral</dt><dd>Lead: eigene Kräfte; Wingman: Objekt bzw. Checkpoint und zurück zu den eigenen Kräften.</dd><dt>Offensive</dt><dd>Beide konzentrieren sich auf das Objekt.</dd><dt>Defensive</dt><dd>Lead: eigene Kräfte; Wingman: Route unmittelbar vor den eigenen Kräften.</dd></dl>',
        src: [['jp3093', 'Kap. III, Abs. 22, Abb. III-36; Kap. V, Abs. 2b(8)(d)8, Abb. V-13'], ['atp1021', 'Kap. I']]
      },
      {
        id: 'm07s6',
        title: 'Marking-Brevity',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Brevity</th><th>Bedeutung</th><th>Gegenteil</th></tr></thead><tbody>' +
          '<tr><td><strong>VISUAL</strong></td><td>Sicht auf ein <em>eigenes</em> Luftfahrzeug oder eine eigene Bodenstellung</td><td>BLIND</td></tr>' +
          '<tr><td><strong>BLIND</strong></td><td>keine Sicht auf eigenes Luftfahrzeug bzw. eigene Stellung</td><td>VISUAL</td></tr>' +
          '<tr><td><strong>TALLY</strong></td><td>Sicht auf ein Ziel, ein nicht eigenes Luftfahrzeug oder eine Feindstellung</td><td>NO JOY</td></tr>' +
          '<tr><td><strong>NO JOY</strong></td><td>keine Sicht auf das Ziel</td><td>TALLY</td></tr>' +
          '<tr><td><strong>CONTACT</strong></td><td>Bezugspunkt gesichtet (visuell oder mit Sensor)</td><td>LOOKING</td></tr>' +
          '<tr><td><strong>LOOKING</strong></td><td>Besatzung hat Bodenobjekt, Bezugspunkt oder Ziel nicht</td><td>CONTACT</td></tr>' +
          '<tr><td><strong>(object) CAPTURED</strong></td><td>Ziel bzw. Objekt mit einem Bordsensor erfasst und verfolgt</td><td>–</td></tr>' +
          '</tbody></table></div>' +
          LP.callout('tip', 'Eselsbrücke', '<strong>VISUAL</strong> = Freund, <strong>TALLY</strong> = Feind/Ziel, <strong>CONTACT</strong> = Bezugspunkt oder Marke, <strong>CAPTURED</strong> = im Sensor.') +
          LP.callout('nato', 'NATO-Hinweis aus ATP 1-02.1', 'Bei <strong>CAPTURED</strong> weicht die US-Bedeutung von der NATO-Brevity ab (Kennzeichnung *). Prüfe die NATO-Bedeutung in deinen Lehrgangsunterlagen.'),
        src: [['jp3093', 'Abb. III-20'], ['atp1021', 'Kap. I']]
      }
    ],
    atp: [
      'Wie definiert deine ATP-3.3.2.1 Korrelation, und wann gilt sie als abgeschlossen?',
      'Welche Markierungsarten und Zeitvorgaben für Markierungen nennt die ATP?',
      'Beschreibt die ATP eine Talk-on-Technik (z. B. FIDO) oder Regeln zur Zielbeschreibung?',
      'Welche Marking-Brevity verwendet die ATP bzw. die NATO-Brevity (APP-7)? Wo gibt es Unterschiede zur US-Brevity?'
    ]
  });
})();
