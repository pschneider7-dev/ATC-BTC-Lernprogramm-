(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm13',
    nr: 13,
    title: 'Angriff, Abort, BDA und Risiko',
    summary: 'Führung der Angriffsphase, Abort-Verfahren mit Challenge-Reply, Wirkungsbeurteilung und Wiederholungsangriff, BDA nach SALTR, Risk-Estimate Distance, Danger Close bei CAS, Kollateralschaden und CAS ohne JTAC.',
    goals: [
      'Ein Abort mit und ohne Abort Code korrekt durchführen',
      'Eine Korrektur für einen Wiederholungsangriff geben',
      'Eine BDA nach SALTR melden',
      'Danger Close bei CAS über die 0,1-%-Pi-Distanz erklären',
      'Die fünf Fragen der Kollateralschadensabwägung kennen'
    ],
    sections: [
      {
        id: 'm13s1',
        title: 'Die Angriffsphase',
        html:
          '<ul>' +
          '<li>Der JTAC behält während des gesamten Angriffs <strong>Position des Luftfahrzeugs, eigene Lage und Zielgebiet</strong> im Blick.</li>' +
          '<li>Er vergleicht die Entfernung IP–Ziel mit der Flugzeit und verfolgt mit den Calls der Besatzung den Zeitplan. Verspätet sich SEAD, verschiebt er die TOT – je früher, desto besser.</li>' +
          '<li>Ändert sich die eigene Lage, entscheidet er: fortsetzen, verlagern oder abbrechen. Er achtet auf Zielbewegung und auf Zivilisten, die das Zielgebiet betreten.</li>' +
          '<li>Sind die Bedingungen der Kontrollart erfüllt, gibt er die Freigabe <strong>rechtzeitig</strong>, bevor das Auslösefenster endet. Angriffe aus mittlerer Höhe können über 4 NM vor dem Ziel auslösen.</li>' +
          '</ul>' +
          '<h3>TAD-Disziplin</h3>' +
          '<p>Das TAD-Netz gehört dem JTAC; er führt es mit der Stimme. Alle Teilnehmer hören aktiv mit. <strong>Nach einem „IN“-Call werden alle anderen Funksprüche zurückgehalten</strong>, bis Freigabe oder Abort erteilt ist – mit einer Ausnahme: Ein Abort darf jederzeit von jedem gerufen werden.</p>' +
          '<div class="def"><span class="term">Brevity Code</span><p>Ein Codewort, das <strong>keine Geheimhaltung</strong> bietet und nur dazu dient, Nachrichten zu verkürzen. Jeder Brevity-Begriff hat nur eine Bedeutung – das erleichtert die Koordination, besonders unter Störung.</p></div>',
        src: [['jp3093', 'Kap. V, Abs. 2b(9)(a)–(f); Glossar']]
      },
      {
        id: 'm13s2',
        title: 'Abort-Verfahren',
        html:
          '<p>Der JTAC <strong>soll</strong> abbrechen lassen, wenn die Besatzung nicht auf das richtige Ziel ausgerichtet ist. Er <strong>muss</strong> abbrechen, wenn eigene Truppen gefährdet erscheinen oder die Sicherheit der Besatzung es erfordert. Der JTAC behält die Abort-Befugnis in allen Fällen; auch der JFO kann jederzeit abbrechen.</p>' +
          '<h3>Challenge-Reply</h3>' +
          '<ol>' +
          '<li>Beim Check-in nennt der Flight Lead einen Challenge-Code für diesen Flight.</li>' +
          '<li>Der JTAC sucht in der Authentisierungsunterlage die Antwort, <strong>notiert sie, sendet sie aber nicht</strong>.</li>' +
          '<li>Der Antwortbuchstabe ist der Abort Code.</li>' +
          '</ol>' +
          LP.radio([
            ['AIR', 'NAIL 11, SPIKE 41, abort code BRAVO ROMEO TANGO.'],
            ['note', 'NAIL 11 notiert die korrekte Antwort auf „BRT“: „D“.'],
            ['JTAC', 'SPIKE 41, NAIL 11, ABORT DELTA, ABORT DELTA, ABORT DELTA.'],
            ['note', 'SPIKE 41 bricht den Anflug ab.']
          ]) +
          '<ul>' +
          '<li>Ohne gebrieften Abort Code: <strong>„ABORT, ABORT, ABORT“</strong>.</li>' +
          '<li>Bei vielen Flights kann der JTAC einen einheitlichen Code für alle festlegen – das muss er in der Situation Update ankündigen.</li>' +
          '<li>Wurde ein Abort über eine vermutlich kompromittierte Verbindung gesendet, wird ein neuer Code per Challenge-Reply vereinbart.</li>' +
          '<li>Muss die Kontrollart nach dem „IN“-Call (bzw. nach „COMMENCING ENGAGEMENT“) geändert werden, bricht der JTAC ab und brieft neu.</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. V, Abs. 2b(2)(e)7, 2b(9)(g), Abb. V-11; Kap. III, Abs. 12d(5)']]
      },
      {
        id: 'm13s3',
        title: 'Wirkung beurteilen und Wiederholungsangriff',
        html:
          '<p>Nach dem Einschlag beurteilt der JTAC, ob die gewünschte Wirkung erreicht ist: <strong>Angriff fortsetzen, weitere Angriffe abbrechen oder Wiederholungsangriff (Reattack)</strong>. Rauch und Staub können die Beurteilung minutenlang verhindern – Folgeangriffe gegen die Schonung von Munition abwägen.</p>' +
          '<ul>' +
          '<li>Gründe für einen Reattack: mehrere Ziele im Raum, Wirkung nicht erreicht, Aufklärung/BDA.</li>' +
          '<li>Unter <strong>Type 1 und 2</strong> muss der Reattack angefordert und vom JTAC neu freigegeben werden. Unter <strong>Type 3</strong> dürfen Luftfahrzeuge erneut angreifen, solange „cleared to engage“ gilt.</li>' +
          '<li>Der JTAC genehmigt alle Reattacks; vorher beurteilt er Bedarf, Gefährdung und Erfolgsaussicht.</li>' +
          '<li>Korrekturen in <strong>Himmelsrichtung und Metern vom vorherigen Einschlag</strong>: „Razor 02, from lead’s hits, north 100.“</li>' +
          '<li>Gleiches Ziel: „Call sign, CONTINUE for a reattack, restrictions remain the same.“</li>' +
          '<li>Neues Ziel in der Nähe: Korrelation auf das neue Ziel, aber kein neuer CAS-Brief nötig.</li>' +
          '<li>Prüfen, ob ein neuer Game Plan oder CAS-Brief nötig ist und ob alle Restrictions noch passen. Bei neuer Munition oder anderen Zündern die sicheren Abstände zu eigenen Kräften neu bewerten.</li>' +
          '</ul>' +
          LP.radio([
            ['JTAC', 'Fang 24, good impacts. Are you CONTACT your last impact?'],
            ['AIR', 'Fang 24, affirm.'],
            ['JTAC', 'Request reattack. Change to game plan, bomb on target. Same ordnance, same 9-line, same restrictions. From your last impacts, adjust east 25 meters.'],
            ['note', 'JP 3-09.3, Anhang E, Beispiel 2: Wechsel von BOC zu BOT, weil nun eine brauchbare Marke liegt.']
          ]),
        src: [['jp3093', 'Kap. V, Abs. 2b(10); Kap. III, Abs. 15a(1)(d); Anhang E, Beispiel 2']]
      },
      {
        id: 'm13s4',
        title: 'Battle Damage Assessment',
        html:
          '<p>BDA aktualisiert die Feindlage und entscheidet über Wiederholungsangriffe. Wer die BDA erhebt, hängt von Auftrag, Fähigkeiten, Erfahrung, Wetter, Gelände, Waffeneinsatz und Feindverhalten ab – manchmal sehen Besatzungen mit Sensoren mehr als der JTAC.</p>' +
          LP.kneeboard({
            title: 'BDA-Meldung (SALTR)',
            note: 'JP 3-09.3, Kap. V',
            lines: [
              { n: 'S', t: 'Size', d: 'Anzahl und Art beobachteter Fahrzeuge und Personen' },
              { n: 'A', t: 'Activity', d: 'Bewegungsrichtung, stehend, eingegraben' },
              { n: 'L', t: 'Location' },
              { n: 'T', t: 'Time' },
              { n: 'R', t: 'Remarks', d: 'verschossene Munition, beobachteter Schaden, Empfehlung, Mission Number, Auftrag erfüllt' }
            ]
          }) +
          '<ul>' +
          '<li>BDA nicht überschätzen und nichts melden, was nicht beobachtet wurde: <strong>„if you do not see it, do not report it“</strong>. Nicht von vollständiger Zerstörung ausgehen – der Feind kann täuschen.</li>' +
          '<li>BDA wird für den <strong>Flight</strong> gegeben, nicht für einzelne Luftfahrzeuge – möglichst noch beim Abflug.</li>' +
          '<li>Erlaubt die Lage keine BDA, mindestens <strong>SUCCESSFUL, UNSUCCESSFUL oder UNKNOWN</strong> an Besatzung und Führungsstelle – bezogen darauf, ob die Absicht des Kommandeurs erreicht wurde.</li>' +
          '<li>Die SALTR-Meldung geht auch an die Führungsstelle. Der JTAC führt ein BDA-Protokoll: Mission Number, Rufzeichen, Zielkoordinaten, TOT, Ergebnisse, Erfolg, verbleibende Ziele, Empfehlungen.</li>' +
          '</ul>' +
          '<h3>Inflight Report (Besatzung)</h3>' +
          '<p>Mit dem verkürzten USMTF-INFLTREP melden Besatzungen Ergebnisse oder dringende taktische Informationen (SAM, AAA, verbleibende Ziele) direkt an eine Führungsstelle oder die unterstützte Einheit:</p>' +
          '<ol><li>Call Sign</li><li>Mission Number</li><li>Location (Lat/Long, Koordinate oder Ortsname)</li><li>Time on Target</li><li>Results</li><li>Remarks (Wetter im Zielgebiet, wichtige Beobachtungen)</li></ol>' +
          '<p>Nach der Landung folgt ein MISREP. Zum Schluss gibt der JTAC Routing und Flugsicherheitsanweisungen für den Abflug: Punkt und Höhenband zur Entflechtung.</p>',
        src: [['jp3093', 'Kap. V, Abs. 2b(11)–(12), Abb. V-12']]
      },
      {
        id: 'm13s5',
        title: 'Risk-Estimate Distance und Danger Close',
        html:
          '<div class="def"><span class="term">Risk-Estimate Distance (RED)</span><p>Mit REDs schätzt der Kommandeur die Gefahr eines CAS-Angriffs für eigene Truppen. Sie werden als <strong>0,1 % Wahrscheinlichkeit der Kampfunfähigkeit (Pi)</strong> angegeben – also 1 zu 1.000. Anflugprofil, Zielhöhe, Gelände, Gebäude und Bäume können die tatsächliche Pi deutlich verringern oder erhöhen. Werte und Berechnungsgrundlagen stehen in der JFIRE.</p></div>' +
          '<div class="def"><span class="term">Danger Close bei CAS</span><p>Ein Waffeneinsatz <strong>innerhalb der 0,1-%-Pi-Distanz</strong> gilt als Danger Close. Der unterstützte Kommandeur übernimmt die Verantwortung für das Risiko und bestätigt das, indem er seine <strong>Initialen</strong> über den JTAC an das Luftfahrzeug übermittelt.</p></div>' +
          '<ul>' +
          '<li>Danger Close mit Initialen ist eine <strong>Restriction</strong> und wird zurückgelesen.</li>' +
          '<li>Ist die Munition ein Sicherheitsfaktor für eigene Truppen, soll die Angriffsachse <strong>parallel zur Achse bzw. Ausrichtung der eigenen Kräfte</strong> liegen – Kurz- oder Weitschüsse treffen dann nicht in eigene Stellungen.</li>' +
          '<li>Die Definition aus dem Glossar gilt für CAS, Artillerie, Mörser und Schiffsartillerie: der Begriff in der Einsatzart, der anzeigt, dass eigene Kräfte nahe am Ziel sind. Der Abstand hängt von Waffe und Munition ab.</li>' +
          '</ul>' +
          LP.callout('crit', 'Nicht verwechseln', 'Danger Close bei Steilfeuer (600 m bzw. 750 m laut ATP 3-09.30) ist ein fester Warnabstand im Call for Fire. Danger Close bei CAS richtet sich nach der RED der eingesetzten Waffe. In beiden Fällen gilt: Der Kommandeur trägt das Risiko.') +
          '<h3>Troops in Contact</h3>' +
          '<p>Eigene Bodentruppen unter wirksamem Feuer. Der Call erhöht die Aufmerksamkeit und zeigt Dringlichkeit, schreibt aber keine Kontrollart vor und hebt keine Pflicht zur Vermeidung von Verlusten auf.</p>',
        src: [['jp3093', 'Kap. III, Abs. 11d(9)–(10); Glossar'], ['atp30930', 'Kap. 4, Abs. 4-34']]
      },
      {
        id: 'm13s6',
        title: 'Kollateralschaden, CAS ohne JTAC, Personnel Recovery',
        html:
          '<div class="def"><span class="term">Kollateralschaden</span><p>Unbeabsichtigte oder beiläufige Verletzung oder Beschädigung von Personen oder Objekten, die unter den gegebenen Umständen keine legitimen militärischen Ziele wären. Zivile Verluste sind eine Form davon.</p></div>' +
          '<p>Eine formelle Collateral Damage Estimate (CDE) darf nur ein zertifizierter Analyst erstellen; genehmigt wird sie durch den in den ROE bestimmten Kommandeur. Für Luft-Boden-Direktfeuer bis einschließlich 105 mm (z. B. 2,75-Zoll-Raketen, 30-mm-GAU-8, 105 mm) ist keine CDE nötig – die Grundsätze Notwendigkeit, Unterscheidung, Verhältnismäßigkeit und Vermeidung unnötiger Leiden gelten trotzdem.</p>' +
          '<h3>Fünf Fragen zur Abwägung</h3>' +
          '<ol>' +
          '<li>Kann ich das Objekt positiv identifizieren (PID)?</li>' +
          '<li>Gibt es geschützte Objekte, Zivilisten, menschliche Schutzschilde oder erhebliche Umweltbelange im Wirkbereich der Waffe?</li>' +
          '<li>Kann ich den Schaden mit einer anderen Waffe oder Einsatzart mindern und den Auftrag trotzdem erfüllen?</li>' +
          '<li>Wenn nicht: Wie viele Zivilisten werden voraussichtlich verletzt oder getötet?</li>' +
          '<li>Ist die Wirkung im Verhältnis zum militärischen Vorteil übermäßig, und muss ich die Entscheidung nach den ROE nach oben geben?</li>' +
          '</ol>' +
          '<h3>Möglichkeiten zur Minderung</h3>' +
          '<ul><li>Pattern of Life beachten; besondere Vorsicht bei Fernzielortung (Spähtrupp, JFO, VDL).</li><li>Waffe mit geringerer Sprengladung, höherer Präzision oder weniger Splitterwirkung.</li><li>Zünder: <strong>Verzögerung</strong> mindert Splitter, <strong>Luftdetonation</strong> mindert Durchschlag und Druckwirkung auf Gebäude (Risiko: Blindgänger, geringere Wirkung).</li><li>Zielpunkt versetzen, weg vom nächsten Kollateralobjekt.</li><li>Angriffsachse so legen, dass sich die Waffe beim Einschlag vom nächsten Kollateralobjekt wegbewegt.</li></ul>' +
          '<h3>CAS ohne JTAC</h3>' +
          '<p>Braucht der Kommandeur Luftunterstützung, aber kein JTAC oder FAC(A) ist verfügbar, trägt die Besatzung erhöhte Verantwortung für die Integration. Der Anforderer meldet das seiner Führung; akzeptiert der Kommandeur das Risiko, geht die Anforderung mit diesem Hinweis an ASOC, DASC bzw. JAOC. Die Besatzung erfragt: Zielhöhe, Zielort, Zielbeschreibung (für PID), Markierungen, nächste eigene Kräfte, Beschränkungen. Sie legt bei Bedarf selbst Restrictions fest (z. B. FAH), korreliert im Dialog und weist die Bodenkräfte an, bei Gefahr „abort“ zu rufen. Sie bemüht sich, einen JTAC oder FAC(A) hinzuzuziehen.</p>' +
          '<h3>Personnel Recovery</h3>' +
          '<p>CAS-Controller bemerken einen Personalverlust oft als Erste. Sie sollten bereit sein, als On-Scene Commander das Ereignis zu melden, die isolierten Personen zu orten und zu unterstützen, bis sie abgelöst werden.</p>',
        src: [['jp3093', 'Kap. III, Abs. 11d(11); Kap. V, Abs. 4; Kap. I, Abs. 11']]
      }
    ],
    atp: [
      'Wie regelt deine ATP-3.3.2.1 das Abort-Verfahren und die Abort Codes?',
      'Welches BDA-Format nennt die ATP? Entspricht es SALTR?',
      'Wie definiert die ATP Danger Close bei CAS, und wie wird die Risikoübernahme des Kommandeurs übermittelt?',
      'Welche Vorgaben macht die ATP zu Wiederholungsangriffen und Korrekturen?'
    ],
    jfire: [
      'Lies in deiner JFIRE die Einleitung zu den Risk-Estimate Distances: Für welche Annahmen gelten die Werte, und was unterscheidet sie von Mindestsicherheitsabständen für die Ausbildung? Keine Werte in diese App oder ins Repository übertragen.'
    ]
  });
})();
