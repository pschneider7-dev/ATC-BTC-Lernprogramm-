(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm01',
    nr: 1,
    title: 'Grundlagen: CAS, AI und die Akteure',
    summary: 'Definitionen von Close Air Support und Air Interdiction, Terminal Attack Control, die Rollen von JTAC, FAC(A), JFO und TACP sowie die Voraussetzungen für wirksame CAS.',
    goals: [
      'CAS und AI nach US- und NATO-Doktrin definieren und voneinander abgrenzen',
      'Terminal Attack Control (TAC) von Terminal Guidance Operations (TGO) unterscheiden',
      'Die Aufgaben des JTAC aufzählen',
      'Die Voraussetzungen für wirksame CAS nennen'
    ],
    sections: [
      {
        id: 'm01s1',
        title: 'Was ist Close Air Support?',
        html:
          '<div class="def"><span class="term">Definition US (JP 3-09.3)</span>' +
          '<p>CAS ist der Einsatz von Starrflüglern (FW) und Drehflüglern (RW) gegen feindliche Ziele, die sich in unmittelbarer Nähe eigener Kräfte befinden, und erfordert die <strong>detaillierte Integration jedes einzelnen Luftangriffs in Feuer und Bewegung dieser Kräfte</strong>.</p>' +
          '<span class="en">“air action by fixed-wing and rotary-wing aircraft against hostile targets that are in close proximity to friendly forces and requires detailed integration of each air mission with the fire and movement of those forces.”</span></div>' +
          '<div class="def"><span class="term">Definition NATO (AJP-3.3 Ed C)</span>' +
          '<p>CAS-Operationen richten sich gegen gegnerische Kräfte oder militärische Ziele in unmittelbarer Nähe eigener Kräfte und erfordern eine detaillierte Abstimmung von Feuer und Bewegung, die Vermeidung von Eigenbeschuss sowie <strong>Terminal Attack Control durch JTAC oder FAC(A)</strong>.</p></div>' +
          '<p>Wichtig für das Verständnis:</p>' +
          '<ul>' +
          '<li><strong>„Close“ ist keine feste Entfernung.</strong> Entscheidend ist, ob wegen Nähe, Feuer oder Bewegung eine detaillierte Integration nötig ist. Die Lage bestimmt das, nicht ein Meterwert.</li>' +
          '<li>CAS kann <strong>zerstören, stören, niederhalten, binden, belästigen, neutralisieren oder verzögern</strong> (destroy, disrupt, suppress, fix, harass, neutralize, delay).</li>' +
          '<li>CAS wird auf <strong>taktischer Ebene</strong> geplant und ausgeführt. Die Zuteilung von Luftfahrzeugen (Apportionment und Allocation) geschieht auf <strong>operativer Ebene</strong>.</li>' +
          '<li>Der Kommandeur am Boden legt <strong>Zielpriorität, gewünschte Wirkung und Zeitpunkt</strong> der CAS-Feuer in seinem Verantwortungsbereich fest.</li>' +
          '</ul>' +
          LP.callout('tip', 'Merksatz', 'CAS = Nähe zu eigenen Kräften + detaillierte Integration jedes Angriffs + Terminal Attack Control.'),
        src: [['jp3093', 'Kap. I, Abs. 2'], ['ajp33', 'Abs. 3.8']]
      },
      {
        id: 'm01s2',
        title: 'Air Interdiction und die Abgrenzung zu CAS',
        html:
          '<div class="def"><span class="term">Definition NATO (AJP-3.3 Ed C)</span>' +
          '<p>AI-Operationen sollen das militärische Potenzial des Gegners <strong>verlagern, stören, verzögern, schwächen oder zerstören, bevor es wirksam gegen eigene Kräfte eingesetzt werden kann</strong>. Der Abstand zu eigenen Kräften ist so groß, dass eine detaillierte Abstimmung des Wirkraums mit der Landkomponente nicht erforderlich ist.</p></div>' +
          '<p>CAS und AI gehören in der NATO-Doktrin gemeinsam zu den <strong>Counter-Land Operations</strong>, einem Teil der Counter-Surface Force Operations. Für AI können <strong>Strike Coordination and Reconnaissance (SCAR)</strong>-Einsätze Ziele in einem bestimmten Raum aufklären. Einzelheiten regelt die AJP-3.3.2.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Merkmal</th><th>CAS</th><th>AI</th></tr></thead><tbody>' +
          '<tr><td>Nähe zu eigenen Kräften</td><td>unmittelbare Nähe</td><td>so weit entfernt, dass keine detaillierte Abstimmung nötig ist</td></tr>' +
          '<tr><td>Integration in Feuer und Bewegung</td><td>für jeden einzelnen Angriff erforderlich</td><td>nicht erforderlich (Synchronisation bei Deep Operations)</td></tr>' +
          '<tr><td>Terminal Attack Control</td><td>JTAC oder FAC(A)</td><td>keine TAC; Zielaufklärung z. B. durch SCAR</td></tr>' +
          '<tr><td>Ziel</td><td>Kräfte, die eigene Truppen unmittelbar bedrohen</td><td>Potenzial, bevor es wirksam wird</td></tr>' +
          '</tbody></table></div>' +
          LP.callout('nato', 'Lehrgangsbezug', 'Die ATP-3.3.2.1 trägt CAS <em>und</em> AI im Titel. Rechne damit, dass der Lehrgang beide Aufgaben abfragt – AI vor allem in der Abgrenzung zu CAS.'),
        src: [['ajp33', 'Abs. 3.8'], ['jp3093', 'Kap. I, Abs. 4']]
      },
      {
        id: 'm01s3',
        title: 'Terminal Attack Control und Terminal Guidance',
        html:
          '<div class="def"><span class="term">Terminal Attack Control (TAC)</span>' +
          '<p>Die <strong>Befugnis, das Manövrieren angreifender Luftfahrzeuge zu steuern und die Waffenfreigabe zu erteilen</strong>.</p>' +
          '<span class="en">“the authority to control the maneuver of and grant weapons release clearance to attacking aircraft.”</span></div>' +
          '<p>Nur ein <strong>zertifizierter und qualifizierter JTAC oder FAC(A)</strong> darf TAC ausüben. Es gibt drei Kontrollarten: Type 1, 2 und 3 (siehe Modul 4).</p>' +
          '<div class="def"><span class="term">Terminal Guidance Operations (TGO)</span>' +
          '<p>Maßnahmen, die anfliegenden Luftfahrzeugen oder Waffen durch elektronische, mechanische, sprachliche oder visuelle Kommunikation <strong>zusätzliche Informationen über den Zielort</strong> geben – etwa mit GPS, Laserzielbeleuchter, Laserentfernungsmesser oder Zielbehälter.</p></div>' +
          LP.callout('warn', 'Abgrenzung', 'Wer TGO leistet, aber kein JTAC oder FAC(A) ist, darf weder das Manövrieren steuern noch eine Waffenfreigabe erteilen. Ein JFO lasert also ein Ziel (TGO), die Freigabe gibt der JTAC (TAC).'),
        src: [['jp3093', 'Kap. I, Abs. 2e–f']]
      },
      {
        id: 'm01s4',
        title: 'Die Akteure',
        html:
          '<div class="def"><span class="term">Joint Terminal Attack Controller (JTAC)</span>' +
          '<p>Ein qualifizierter und zertifizierter Soldat, der – meist aus einer vorgeschobenen Position – den Einsatz von Kampfflugzeugen in CAS und anderen offensiven Luftoperationen lenkt.</p>' +
          '<span class="en">“A qualified (certified) Service member who, from a forward position, directs the action of combat aircraft engaged in close air support and other offensive air operations.”</span></div>' +
          '<h3>Die neun Aufgaben des JTAC</h3>' +
          '<ol>' +
          '<li>Feindlage sowie Standorte eigener Einheiten und von Zivilisten kennen.</li>' +
          '<li>Zielpriorität, gewünschte Wirkung und Zeitpunkt des Feuers des unterstützten Kommandeurs kennen.</li>' +
          '<li>Absicht des Kommandeurs und gültige ROE kennen.</li>' +
          '<li>Gelegenheitsziele (Targets of Opportunity) validieren.</li>' +
          '<li>Den Kommandeur zum richtigen Einsatz der Luftmittel beraten.</li>' +
          '<li>Sofortanforderungen (Immediate Requests) für CAS stellen.</li>' +
          '<li>TAC mit Zustimmung des unterstützten Kommandeurs ausüben.</li>' +
          '<li>Luftfahrzeuge und Feuer gegenüber CAS-Einsätzen entflechten (deconflict).</li>' +
          '<li>Die erste Wirkungsmeldung (initial BDA report) abgeben.</li>' +
          '</ol>' +
          '<h3>Weitere Rollen</h3>' +
          '<dl>' +
          '<dt>FAC(A)</dt><dd>Forward Air Controller (Airborne): speziell ausgebildeter Luftfahrzeugführer, der TAC aus der Luft ausübt. In der Regel die luftgestützte Verlängerung der TACP. Typische TLE seiner Koordinaten: CAT II oder besser (unter 15 m).</dd>' +
          '<dt>JFO</dt><dd>Joint Fires Observer: kann Steilfeuer anfordern, leiten und korrigieren, liefert Zieldaten für <strong>Type 2 und Type 3</strong> und führt TGO durch. Der JFO erteilt <strong>keine</strong> Waffenfreigabe, darf aber jederzeit „Abort“ rufen.</dd>' +
          '<dt>TACP</dt><dd>Tactical Air Control Party: wichtigstes Luftwaffen-Verbindungselement bei der Bodentruppe. Zwei Hauptaufgaben: den Kommandeur zu Fähigkeiten und Grenzen von Luftoperationen beraten und die TAC von CAS ausüben.</dd>' +
          '<dt>ALO / AO</dt><dd>Air Liaison Officer (USAF) bzw. Air Officer (USMC): ranghöchstes TACP-Mitglied, Hauptberater des Kommandeurs für Luftunterstützung.</dd>' +
          '<dt>FIST</dt><dd>Fire Support Team der Artillerie auf Kompanieebene: plant und koordiniert alle Unterstützungsfeuer (Mörser, Artillerie, Schiffsartillerie, CAS-Integration).</dd>' +
          '<dt>TAC(A)</dt><dd>Tactical Air Coordinator (Airborne): luftgestützte Verlängerung von ASOC/DASC. Koordiniert und vermittelt (Funkrelais, Übergaben, Lagemeldungen), übt aber selbst keine TAC aus.</dd>' +
          '</dl>' +
          LP.callout('tip', 'Unterstützter und Unterstützende', 'Im CAS-Gefecht ist der Kommandeur am Boden der <strong>unterstützte Kommandeur</strong> und der On-Scene Commander. Luftfahrzeuge, TACP, FAC(A), JTAC und JFO sind unterstützende Elemente. Ein Luftfahrzeug kann nie On-Scene Commander sein.'),
        src: [['jp3093', 'Kap. II, Abs. 3b(5), 4b(5); Kap. III, Abs. 11b'], ['jp3093', 'Glossar']]
      },
      {
        id: 'm01s5',
        title: 'Voraussetzungen für wirksame CAS',
        html:
          '<p>JP 3-09.3 nennt sieben Voraussetzungen. Günstige Umweltbedingungen sind <em>keine</em> Voraussetzung, steigern aber die Wirksamkeit.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Voraussetzung</th><th>Kernaussage</th></tr></thead><tbody>' +
          '<tr><td>Gut ausgebildetes Personal</td><td>Gemeinsame Ausbildung aller Elemente, Übung hält die Fähigkeit am Leben.</td></tr>' +
          '<tr><td>Planung und Integration</td><td>Bevorzugt vorgeplant und vorbesprochen; Rehearsals decken Lücken auf.</td></tr>' +
          '<tr><td>Wirksame Führung (C2)</td><td>Verlässliche, interoperable Kommunikation zwischen allen Beteiligten.</td></tr>' +
          '<tr><td>Luftüberlegenheit</td><td>Insbesondere Niederhalten der gegnerischen Luftverteidigung (SEAD).</td></tr>' +
          '<tr><td>Zielmarkierung und -auffassung</td><td>Marken schaffen Lagebewusstsein und verringern Eigenbeschuss.</td></tr>' +
          '<tr><td>Schlanke, flexible Verfahren</td><td>Schnelles Umstellen von Zielen, Taktik oder Waffen.</td></tr>' +
          '<tr><td>Geeignete Munition</td><td>Waffe und Zünder passend zum Ziel und zur Lage der eigenen Kräfte.</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Wie CAS schneller verfügbar wird</h3>' +
          '<ul>' +
          '<li>Luftfahrzeuge auf vorgeschobenen Basen und Warteräume nahe am Einsatzraum</li>' +
          '<li>Bereitschaft am Boden oder in der Luft (Airborne Alert reagiert schneller)</li>' +
          '<li>Startbefugnis und weitere Befugnisse auf die niedrigste mögliche Ebene delegieren</li>' +
          '<li>Luftfahrzeuge umsteuern (retask, redirect) oder Rollen im ATO anpassen</li>' +
          '<li>JTAC und ALO/AO bei den Bodentruppen einsetzen</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. I, Abs. 7']]
      },
      {
        id: 'm01s6',
        title: 'Verantwortung, Eigenbeschuss und Zivilisten',
        html:
          '<p>Der Kommandeur am Boden ist die <strong>letzte Instanz für alle Unterstützungsfeuer</strong> in seinem Bereich. Zuständig ist der Kommandeur auf der niedrigsten Ebene, sofern ein höherer die Befugnis nicht an sich zieht.</p>' +
          '<p>Die Besatzung soll den CAS-Brief <strong>als Befehl verstehen</strong>. Hat sie dem Kommandeur alle relevanten Informationen gegeben und ist sie auf das richtige Ziel korreliert, liegt die Verantwortung für den Waffeneinsatz beim Kommandeur am Boden, nicht bei der Besatzung.</p>' +
          '<h3>Ursachen für Eigenbeschuss (Friendly Fire)</h3>' +
          '<ul>' +
          '<li>falsch identifizierte Ziele</li>' +
          '<li>ungenaue Zielkoordinaten oder Zielbeschreibungen</li>' +
          '<li>falsch übermittelte oder falsch empfangene Zielkoordinaten</li>' +
          '<li>Verlust des Lagebewusstseins bei JTAC, Besatzung, Anforderer, Gefechtsstand oder Kommandeur</li>' +
          '</ul>' +
          '<div class="def"><span class="term">Combat Identification (CID)</span><p>Der Prozess, erfasste Objekte so genau zu charakterisieren, dass eine Entscheidung über den Waffeneinsatz möglich ist (Freund, Feind, neutral, Nichtkombattant, ggf. Typ und Nationalität).</p></div>' +
          '<div class="def"><span class="term">Positive Identification (PID)</span><p>Die hinreichende Gewissheit, dass ein funktional und räumlich bestimmtes Angriffsziel nach Kriegsvölkerrecht und geltenden ROE ein legitimes militärisches Ziel ist.</p></div>' +
          LP.callout('crit', 'Merke', 'Alle Beteiligten tragen Verantwortung. Jeder muss vor Zielauswahl, Feuerfreigabe und Waffeneinsatz eigene Kräfte, Feind und Zivilisten identifizieren. Hauptursache für Kollateralschäden ist eine fehlgeschlagene PID.'),
        src: [['jp3093', 'Kap. I, Abs. 3, 9, 10; Kap. III, Abs. 11b, 11d']]
      }
    ],
    atp: [
      'Wie definiert deine ATP-3.3.2.1 CAS und AI? Vergleiche Wortlaut und Unterschiede zur AJP-3.3 und JP 3-09.3.',
      'Welchen Begriff nutzt die ATP für den Controller am Boden (FAC, JTAC oder beide)? Wie definiert sie FAC(A) und JFO?',
      'Welche Aufgaben und Verantwortlichkeiten weist die ATP dem JTAC/FAC zu? Gleiche mit den neun Aufgaben aus JP 3-09.3 ab.',
      'Welche Voraussetzungen für wirksame CAS nennt die ATP?',
      'Wie beschreibt die ATP SCAR und Kill Box im Zusammenhang mit AI?'
    ]
  });
})();
