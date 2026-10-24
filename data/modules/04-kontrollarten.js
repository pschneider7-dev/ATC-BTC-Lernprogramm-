(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm04',
    nr: 4,
    title: 'Kontrollarten und Angriffsmethoden',
    summary: 'Type 1, 2 und 3 mit ihren Abläufen, Bomb on Target und Bomb on Coordinate, die Freigabebefehle (Clearance Calls) und der Post-Launch Abort.',
    goals: [
      'Type 1, 2 und 3 definieren und ihre Abläufe Schritt für Schritt wiedergeben',
      'BOT und BOC unterscheiden und Beispiele zuordnen',
      'Die fünf Freigabebefehle korrekt anwenden',
      'Wissen, wann die Kontrollart spätestens geändert werden darf'
    ],
    sections: [
      {
        id: 'm04s1',
        title: 'Grundsätze',
        html:
          '<p>Die Kontrollarten sind Werkzeuge, mit denen der Kommandeur seinen Auftrag erfüllt und zugleich Eigenbeschuss und Kollateralschäden begrenzt. Die Kontrollart drückt aus, <strong>wie der JTAC das Risiko mindern will und ob er einzelne Angriffe kontrollieren muss</strong>:</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Type</th><th>Wie wird das Risiko gemindert?</th></tr></thead><tbody>' +
          '<tr><td class="n">1</td><td>JTAC sieht das angreifende Luftfahrzeug, beurteilt die Angriffsgeometrie und kontrolliert jeden einzelnen Angriff.</td></tr>' +
          '<tr><td class="n">2</td><td>JTAC stützt sich besonders auf andere Maßnahmen und kontrolliert jeden einzelnen Angriff.</td></tr>' +
          '<tr><td class="n">3</td><td>JTAC stützt sich besonders auf andere Maßnahmen, die mehrere Angriffe in einem Einsatz zulassen.</td></tr>' +
          '</tbody></table></div>' +
          '<ul>' +
          '<li>Die <strong>taktische Risikobeurteilung</strong> bestimmt die Kontrollart. Ihre Wahl kann unter Bedingungen an den JTAC delegiert werden.</li>' +
          '<li>Die Kontrollart wird im <strong>Game Plan vor dem CAS-Brief</strong> übermittelt. Sie dient dem Lagebewusstsein der Besatzung, stellt aber keine Anforderung an die Besatzung.</li>' +
          '<li>Keine Kontrollart ist an eine Munition gebunden, und keiner ist ein festes Risikoniveau zugeordnet.</li>' +
          '<li>Für verschiedene Flights können gleichzeitig verschiedene Kontrollarten gelten (z. B. Hubschrauber in Type 2 aus einer BP, Jets in Type 1).</li>' +
          '<li>Höhere Kommandeure können bestimmte Kontrollarten untersagen.</li>' +
          '</ul>' +
          LP.callout('crit', 'Wechsel der Kontrollart', 'Ein Wechsel ist mit der Freigabestelle abzustimmen, weil die Kontrollart Teil des genehmigten Einsatzes ist. Er muss <strong>vor dem „IN“-Call</strong> (Type 1 und 2) bzw. <strong>vor „COMMENCING ENGAGEMENT“</strong> (Type 3) erfolgen. Danach gilt: Angriff abbrechen (Abort) und neu briefen.'),
        src: [['jp3093', 'Kap. III, Abs. 12a']]
      },
      {
        id: 'm04s2',
        title: 'Type 1',
        html:
          '<div class="def"><span class="term">Definition</span><p>Type 1 wird angewendet, wenn der JTAC/FAC(A) einzelne Angriffe kontrollieren muss und die Lage erfordert, dass er <strong>das angreifende Luftfahrzeug und das Ziel bei jedem Angriff selbst sieht</strong>.</p></div>' +
          '<p>Zweck: Aus der Angriffsgeometrie die Flugbahn der Waffe von der Auslösung bis zum Einschlag vorhersagen und so eigene Kräfte und Kollateralbereiche schützen. Der JTAC hält die Freigabe zurück, bis das Luftfahrzeug sein Manöver auf das Ziel abgeschlossen hat, und kann Waffen mit großem Off-Boresight-Winkel ausschließen.</p>' +
          '<p>Sinnvoll z. B. bei Sprachbarrieren mit multinationalen Besatzungen, geringem Vertrauen in eine Plattform, schlechtem Wetter oder unsicherer Besatzungsleistung.</p>' +
          LP.callout('warn', 'Nicht für GPS/INS-Waffen', 'GPS- oder INS-gelenkte Waffen sollen nicht unter Type 1 kontrolliert werden. Die Waffe fliegt unabhängig von Position und Flugbahn des Luftfahrzeugs zu den eingegebenen Koordinaten – aus der Geometrie des Luftfahrzeugs lässt sich ihre Flugbahn nicht vorhersagen.') +
          '<h3>Ablauf Type 1</h3>' +
          '<ol>' +
          '<li>JTAC sieht das Ziel.</li>' +
          '<li>JTAC übermittelt Game Plan und CAS-Brief.</li>' +
          '<li>Besatzung prüft, ob der Zielort zum erwarteten Zielgebiet passt.</li>' +
          '<li>Besatzung liest Line 4, Line 6 und alle Restrictions zurück.</li>' +
          '<li>JTAC führt die Korrelation durch.</li>' +
          '<li>Besatzung meldet „IP INBOUND“, falls gefordert.</li>' +
          '<li>Besatzung meldet „IN“ (Beginn der Endphase vor der Waffenauslösung), ggf. mit Richtung.</li>' +
          '<li>JTAC sieht das angreifende Luftfahrzeug.</li>' +
          '<li>JTAC beurteilt die Angriffsgeometrie.</li>' +
          '<li>JTAC gibt „CLEARED HOT“, „CONTINUE DRY“ oder „ABORT“.</li>' +
          '</ol>',
        src: [['jp3093', 'Kap. III, Abs. 12a(1)']]
      },
      {
        id: 'm04s3',
        title: 'Type 2',
        html:
          '<div class="def"><span class="term">Definition</span><p>Type 2 wird angewendet, wenn der JTAC/FAC(A) einzelne Angriffe kontrollieren muss und <strong>das Luftfahrzeug bei der Waffenauslösung nicht sehen kann</strong> oder <strong>das Ziel nicht sehen kann</strong>.</p></div>' +
          '<p>Der JTAC muss das Ziel selbst sehen <em>oder</em> Zieldaten eines anderen Mittels mit genauer Echtzeitinformation nutzen (z. B. JFO, Spähtrupp, UAS, Besatzung). Wenn möglich soll er das Luftfahrzeug trotzdem beobachten – als zusätzliche Sicherheit und um abbrechen zu können.</p>' +
          '<p>Typische Lagen: Troops in Contact, Nacht, schlechtes Wetter, Einsatz aus großer Höhe oder mit Abstandswaffen.</p>' +
          '<h3>Ablauf Type 2</h3>' +
          '<ol>' +
          '<li>JTAC sieht das Ziel oder erhält Zieldaten in Echtzeit von einem anderen Mittel.</li>' +
          '<li>JTAC übermittelt Game Plan und CAS-Brief.</li>' +
          '<li>Besatzung prüft den Zielort auf Plausibilität.</li>' +
          '<li>Readback von Line 4, Line 6 und Restrictions.</li>' +
          '<li>Korrelation durch den JTAC.</li>' +
          '<li>„IP INBOUND“, falls gefordert.</li>' +
          '<li>„IN“-Call vor der Auslösung, rechtzeitig vor dem Auslösefenster. Wurde eine Richtung oder ein FAH vorgegeben, gehört sie dazu: „IN from the South“ oder „IN heading 360“.</li>' +
          '<li>JTAC gibt „CLEARED HOT“, „CONTINUE DRY“ oder „ABORT“ – für einzelne Luftfahrzeuge oder für den ganzen Flight.</li>' +
          '</ol>' +
          LP.callout('tip', 'Merke', 'Alle angreifenden Luftfahrzeuge melden „IN“, sofern nichts anderes abgesprochen ist.'),
        src: [['jp3093', 'Kap. III, Abs. 12a(2)']]
      },
      {
        id: 'm04s4',
        title: 'Type 3',
        html:
          '<div class="def"><span class="term">Definition</span><p>Type 3 wird angewendet, wenn der JTAC/FAC(A) <strong>mehrere Angriffe innerhalb eines Einsatzes freigeben</strong> muss, gebunden an bestimmte Beschränkungen.</p></div>' +
          '<p>Der JTAC sieht das Ziel oder nutzt Echtzeitdaten eines anderen Mittels. Er gibt Beschränkungen vor – <strong>Zeit, geografische Grenzen, Angriffsrichtungen (FAH), Zielart</strong>. Alle Zieldaten werden über den Gefechtsstand der unterstützten Einheit genehmigt. Der JTAC überwacht Funk und digitale Informationen und behält jederzeit die <strong>Abort-Befugnis</strong>.</p>' +
          '<h3>Ablauf Type 3</h3>' +
          '<ol>' +
          '<li>JTAC sieht das Ziel oder erhält Echtzeit-Zieldaten.</li>' +
          '<li>JTAC übermittelt Game Plan und CAS-Brief; in Remarks/Restrictions stehen Angriffsraum, Beschränkungen und Zeitfenster.</li>' +
          '<li>Besatzung prüft den Zielort.</li>' +
          '<li>Readback von Line 4, Line 6 und Restrictions (Pflicht).</li>' +
          '<li>Korrelation durch den JTAC.</li>' +
          '<li>Ist die Korrelation abgeschlossen: „CLEARED TO ENGAGE“ oder „Type 3, CONTINUE DRY“.</li>' +
          '<li>Vor der ersten Waffenauslösung meldet die Besatzung „COMMENCING ENGAGEMENT“.</li>' +
          '<li>JTAC überwacht den Einsatz mit allen Mitteln; weitere Funksprüche nur auf Anweisung.</li>' +
          '<li>Besatzung meldet „ENGAGEMENT COMPLETE“.</li>' +
          '</ol>' +
          '<p>Solange „Cleared to Engage“ gilt, dürfen Luftfahrzeuge unter Type 3 erneut angreifen; unter Type 1 und 2 muss jeder Wiederholungsangriff neu freigegeben werden.</p>' +
          LP.radio([
            ['JTAC', 'Razor 11, CLEARED TO ENGAGE from time 45-55.'],
            ['AIR', 'Razor 11, COMMENCING ENGAGEMENT.'],
            ['note', 'Mehrere Angriffe im Zeitfenster unter Einhaltung der Restrictions.'],
            ['AIR', 'Heartless 31, Razor 11, ENGAGEMENT COMPLETE. Advise when ready to copy BDA.']
          ]),
        src: [['jp3093', 'Kap. III, Abs. 12a(3); Kap. V, Abs. 2b(10); Anhang E, Beispiel 5']]
      },
      {
        id: 'm04s5',
        title: 'Angriffsmethoden: Bomb on Target und Bomb on Coordinate',
        html:
          '<p>Die Angriffsmethode (Method of Attack) ist eine Vereinbarung zwischen Kommandeur, JTAC und Besatzung über die <strong>Korrelationsanforderung an die Besatzung</strong>. Sie ist <strong>völlig unabhängig von der Kontrollart</strong>: Jede Kontrollart lässt sich mit jeder Methode kombinieren. Der JTAC nennt die Methode im Game Plan vor dem CAS-Brief.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th></th><th>BOT – Bomb on Target</th><th>BOC – Bomb on Coordinate</th></tr></thead><tbody>' +
          '<tr><td>Anforderung an die Besatzung</td><td>Ziel oder Markierung muss <strong>TALLY / CONTACT / CAPTURED</strong> sein</td><td>Waffe auf die im Brief genannten Koordinaten; Besatzung muss das Ziel <strong>nie</strong> auffassen</td></tr>' +
          '<tr><td>Bedeutung der Koordinate</td><td>genügt für erste Einweisung und Feuerfreigabe; TLE weniger wichtig</td><td>muss genau genug (ggf. vermessen) für die gewünschte Wirkung und die Freigabe sein</td></tr>' +
          '<tr><td>Readback</td><td>nur das führende Luftfahrzeug (Lead) liest Line 4, 6 und Restrictions zurück, weitere auf Anforderung</td><td><strong>alle</strong> waffeneinsetzenden Luftfahrzeuge lesen Line 4 und 6 <strong>aus dem System oder der Waffe</strong> zurück</td></tr>' +
          '<tr><td>Line 7</td><td>Markierung für das angreifende Luftfahrzeug</td><td>„no mark“ oder Rufzeichen + „laser“ + Code bei Fremdbeleuchtung</td></tr>' +
          '<tr><td>Korrelation abgeschlossen</td><td>wenn der JTAC bestätigt hat, dass die Besatzung das richtige Ziel hat</td><td>mit dem korrekten Readback von Line 4, 6 und Restrictions</td></tr>' +
          '</tbody></table></div>' +
          '<div class="two-col">' +
          '<div class="panel flat"><h4>BOT-Beispiele</h4><ul class="small">' +
          '<li>LGB, von der eigenen Besatzung selbst beleuchtet</li><li>ungelenkte Munition unter der Wolkendecke, Besatzung TALLY oder CONTACT</li><li>Korrektur von einer Markierung oder einem Bezugspunkt</li><li>GPS-Koordinate, dann vom CAS-Luftfahrzeug selbst gelasert</li><li>Raketen und Bordkanone auf positiv identifizierte Ziele</li></ul></div>' +
          '<div class="panel flat"><h4>BOC-Beispiele</h4><ul class="small">' +
          '<li>LGW, das von außerhalb des Flights (JTAC, FAC(A), anderer Flight) beleuchtet wird</li><li>ungelenkte Munition aus mittlerer/großer Höhe über geschlossener Wolkendecke</li><li>IAM auf eine feste Koordinate</li><li>GPS-Koordinate, dann von fremder Quelle gelasert</li></ul></div>' +
          '</div>' +
          LP.callout('crit', 'Koordinaten nicht verändern', 'Bei BOC verändert die Besatzung die zurückgelesenen Koordinaten nicht mehr. Ist das Navigationssystem eines Luftfahrzeugs bekannt fehlerhaft, meldet die Besatzung das dem JTAC – ein Readback aus diesem System würde Fehler erzeugen.'),
        src: [['jp3093', 'Kap. III, Abs. 12b, Abb. III-7; Kap. V, Abs. 2b(7)']]
      },
      {
        id: 'm04s6',
        title: 'Freigabebefehle (Clearance Calls)',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Call</th><th>Bedeutung</th><th>Kontrollart</th></tr></thead><tbody>' +
          '<tr><td><strong>ABORT</strong></td><td>Handlung, Angriff, Ereignis oder Auftrag abbrechen – vor der Waffenauslösung.</td><td>alle</td></tr>' +
          '<tr><td><strong>CLEARED HOT</strong></td><td>Freigabe zur Waffenauslösung bei diesem Anflug auf ein bestimmtes Ziel.</td><td>Type 1 und 2</td></tr>' +
          '<tr><td><strong>CONTINUE</strong></td><td>Aktuelles Manöver fortsetzen; bedeutet <em>keine</em> Änderung der Freigabe.</td><td>alle</td></tr>' +
          '<tr><td><strong>CONTINUE DRY</strong></td><td>Manöver fortsetzen, Waffenauslösung nicht erlaubt (Ausbildung, Show of Force). Für Type 3: „Type 3, CONTINUE DRY“.</td><td>alle</td></tr>' +
          '<tr><td><strong>CLEARED TO ENGAGE</strong></td><td>Freigabe für Luftfahrzeug oder Flight, Ziele innerhalb der vom JTAC gesetzten Parameter anzugreifen.</td><td>Type 3</td></tr>' +
          '</tbody></table></div>' +
          LP.callout('crit', 'Warnung aus JP 3-09.3', 'Das Wort <strong>CLEARED</strong> wird nur verwendet, wenn tatsächlich Munition ausgelöst werden soll. Nicht-standardisierte Befehle sind immer zu vermeiden.') +
          '<p>Freigabe für einen ganzen Flight: das Wort „flight“ nach dem Rufzeichen, z. B. „Ragin’ 41, flight, CLEARED HOT.“</p>' +
          '<h3>Post-Launch Abort (PLA)</h3>' +
          '<p>Manche gelenkte Munition kann nach dem Start noch leicht umgelenkt werden. PLA ist ein <strong>Verfahren letzter Wahl</strong>:</p>' +
          '<ul>' +
          '<li>Der Kommandeur muss PLA vorher genehmigen und Anforderungen an den PLA-Punkt festlegen (CDE, Pattern of Life).</li>' +
          '<li>Der PLA-Punkt wird als Restriction übermittelt (Punkt oder Richtung/Entfernung vom Ziel) und zurückgelesen.</li>' +
          '<li>Genehmigung: „post launch abort approved as briefed“. Auslösung: „Aircraft call sign, Abort!“.</li>' +
          '<li>Ohne ausdrückliche Genehmigung kein PLA – <strong>„silence is not consent“</strong>.</li>' +
          '<li>Laut JP 3-09.3 ist z. B. Hellfire PLA-fähig, Paveway II und GBU-54 werden nicht empfohlen.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. III, Abs. 11f–g, Abb. III-6'], ['atp1021', 'Kap. I']]
      }
    ],
    atp: [
      'Wie definiert deine ATP-3.3.2.1 Type 1, 2 und 3? Gibt es Abweichungen im Wortlaut oder in den Abläufen?',
      'Kennt die ATP die Methoden BOT und BOC? Wie werden sie im Game Plan genannt?',
      'Welche Freigabebefehle nennt die ATP? Gibt es dort zusätzliche oder abweichende Calls?',
      'Bis wann darf laut ATP die Kontrollart geändert werden?',
      'Regelt die ATP einen Post-Launch Abort?'
    ]
  });
})();
