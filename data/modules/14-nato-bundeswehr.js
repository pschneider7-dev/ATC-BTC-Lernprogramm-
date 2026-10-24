(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm14',
    nr: 14,
    title: 'NATO, Bundeswehr und Lehrgangsvorbereitung',
    summary: 'Einordnung der ATP-3.3.2.1 in die NATO-Doktrin, bekannte Unterschiede zwischen US- und NATO-Verfahren, US- und NATO-Brevity, JTAC in der Bundeswehr sowie der Umgang mit den Print-Vorschriften.',
    goals: [
      'Die NATO-Doktrinhierarchie bis zur ATP-3.3.2.1 darstellen',
      'Die in JP 3-09.3 genannten NATO-Abweichungen kennen',
      'Brevity-Begriffe erkennen, deren Bedeutung bei der NATO abweicht',
      'Aufbau von JFST und JFSCT in der Bundeswehr beschreiben',
      'Die eigenen Print-Vorschriften richtig handhaben'
    ],
    sections: [
      {
        id: 'm14s1',
        title: 'Wo die ATP-3.3.2.1 steht',
        html:
          '<p>Die NATO-Doktrin ist hierarchisch aufgebaut. AJP-3.3 (Edition C, 2026) nennt selbst die nachgeordneten Dokumente:</p>' +
          LP.kneeboard({
            title: 'NATO-Doktrin für CAS und AI',
            lines: [
              { n: 'L1', t: 'AJP-3 Allied Joint Doctrine for the Conduct of Operations', d: 'Schlüsseldokument (keystone)' },
              { n: 'L2', t: 'AJP-3.3 Allied Joint Doctrine for Air and Space Operations', d: 'Ed. C V1, Februar 2026; Zustimmung der Nationen in STANAG 3700' },
              { n: 'L3', t: 'AJP-3.3.2 Allied Joint Doctrine for Close Air Support and Air Interdiction', d: 'CAS- und AI-Doktrin, u. a. SCAR' },
              { n: 'TTP', t: 'ATP-3.3.2.1 Tactics, Techniques and Procedures for CAS and AI', d: 'deine Ed. D V1, April 2019 – Grundlage des Lehrgangs' }
            ],
            foot: 'Weitere ATPs unter AJP-3.3: ATP-3.3.3.1 (Air-Maritime Coordination Procedures) und ATP-3.3.5.1 (Joint Airspace Control TTP).'
          }) +
          '<p>Die US-Gegenstücke: JP 3-09.3 (CAS), JP 3-09 (Joint Fire Support) und JP 3-52 (Joint Airspace Control), ergänzt durch die Multi-Service-TTPs der ALSSA wie JFIRE und Brevity.</p>' +
          LP.callout('nato', 'Was JP 3-09.3 selbst über NATO sagt', 'Die NATO und Partnernationen verwenden JP 3-09.3 als Grundlage für CAS. Zwischen US-Doktrin und ratifizierter Bündnisdoktrin bestehen noch Unterschiede, die laufend bearbeitet werden. Die JP 3-09.3 von 2014 verweist dabei auf ATP-3.3.2.1 <strong>Edition C</strong>. Deine Edition D von 2019 ist neuer – genau deshalb lohnt sich der Abgleich in jedem Modul.'),
        src: [['ajp33', 'Abs. 11–13 (Einleitung)'], ['jp3093', 'Kap. III, Abs. 26']]
      },
      {
        id: 'm14s2',
        title: 'Bekannte Unterschiede US – NATO',
        html:
          '<p>JP 3-09.3 (2014) nennt ausdrücklich zwei Abweichungen der ATP-3.3.2.1:</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Thema</th><th>US (JP 3-09.3)</th><th>NATO (ATP-3.3.2.1 laut JP 3-09.3)</th></tr></thead><tbody>' +
          '<tr><td>Zeilentitel im 9-Line</td><td>Zeilennummern werden nicht gesendet; Titel nur bei Bedarf (Sprachbarrieren, Störung)</td><td>NATO-FACs nennen vor jeder Zeile den <strong>Zeilentitel</strong></td></tr>' +
          '<tr><td>Readback-Pflicht</td><td>Line 4, Line 6, Restrictions</td><td>zusätzlich <strong>Line 8</strong></td></tr>' +
          '</tbody></table></div>' +
          '<p>Weitere Punkte aus JP 3-09.3 zum multinationalen Einsatz:</p>' +
          '<ul>' +
          '<li>In der NATO-Terminologie heißen Controller am Boden auch <strong>„forward air controllers“</strong>.</li>' +
          '<li>Das <strong>Joint Fire Support Executive Steering Committee</strong> (JFS ESC) akkreditiert Partnernationen; diese verpflichten sich in Memoranda of Agreement auf standardisierte JFO/JTAC/FAC(A)-Ausbildung. Die Einhaltung des NATO-Standards stärkt das Vertrauen des Befehlshabers, bevor er TAC erlaubt.</li>' +
          '<li>Wo die USA eine Bündnisdoktrin ratifiziert haben, folgen US-Kommandeure im multinationalen Einsatz dieser Doktrin.</li>' +
          '<li>Bei Sprachbarrieren mit multinationalen Besatzungen kann Type 1 die Kontrollart der Wahl sein.</li>' +
          '</ul>' +
          LP.callout('atp', 'Dein Auftrag', 'Prüfe beide Abweichungen in deiner Ed. D und notiere dir weitere Unterschiede, die dir beim Durcharbeiten der Module auffallen – etwa bei Check-in, Situation Update, Remarks oder BDA. Notizen mit Inhalten aus der ATP gehören auf Papier, nicht in diese App.'),
        src: [['jp3093', 'Kap. II, Abs. 2c; Kap. III, Abs. 12a(1), 26; Kap. V, Abs. 2b(5)']]
      },
      {
        id: 'm14s3',
        title: 'Brevity: US-Bedeutung und NATO',
        html:
          '<p>Die ATP 1-02.1 (2025) kennzeichnet, wo ihre Bedeutung von der NATO-Brevity abweicht (<strong>*</strong>) oder wo ein Begriff gar kein NATO-Brevity-Wort ist (<strong>**</strong>). Für den NATO-Lehrgang sind das die Stellen, an denen du besonders genau hinschauen solltest.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Begriff</th><th>Kennz.</th><th>US-Bedeutung (Kurzform)</th></tr></thead><tbody>' +
          '<tr><td>CAPTURED</td><td>*</td><td>Objekt mit Sensor erfasst und verfolgt</td></tr>' +
          '<tr><td>NO JOY</td><td>*</td><td>keine Sicht auf Ziel; auch: keine Funkverbindung</td></tr>' +
          '<tr><td>CLEARED TO ENGAGE</td><td>** (CAS-Bedeutung)</td><td>Type-3-Freigabe</td></tr>' +
          '<tr><td>ENGAGEMENT COMPLETE</td><td>**</td><td>Pflichtmeldung am Ende eines Type-3-Einsatzes</td></tr>' +
          '<tr><td>STARE</td><td>**</td><td>LST auf Code und Bezugspunkt ansetzen</td></tr>' +
          '<tr><td>MATCH (SPARKLE/LASER)</td><td>*</td><td>eigene Marke auf bestehende legen</td></tr>' +
          '<tr><td>CEASE (LASER/SPARKLE)</td><td>*</td><td>Tätigkeit beenden</td></tr>' +
          '<tr><td>MARK (Markierungsgeschoss)</td><td>** (diese Bedeutung)</td><td>WP- oder Leuchtgeschoss zur Zielmarkierung</td></tr>' +
          '<tr><td>SPLASH (5 s vor Einschlag)</td><td>* (diese Bedeutung)</td><td>Hinweis an Beobachter 5 s vor Einschlag</td></tr>' +
          '<tr><td>SHOT</td><td>**</td><td>Schuss abgefeuert (Boden-Boden)</td></tr>' +
          '<tr><td>RIFLE</td><td>*</td><td>Einsatz einer Luft-Boden-Waffe kurzer Reichweite</td></tr>' +
          '<tr><td>SQUIRTER</td><td>**</td><td>bewegtes Objekt verlässt das Zielgebiet</td></tr>' +
          '<tr><td>SLEW</td><td>**</td><td>Sensor in Richtung bewegen</td></tr>' +
          '<tr><td>HOLLOW (Video)</td><td>* (diese Bedeutung)</td><td>Video-Datenlink verloren</td></tr>' +
          '<tr><td>CHECK FIRE</td><td>**</td><td>sofortige Feuerpause</td></tr>' +
          '<tr><td>BINGO, JOKER</td><td>*</td><td>Treibstoffstände</td></tr>' +
          '<tr><td>AS FRAGGED, ROLEX</td><td>*</td><td>wie geplant; Zeitverschiebung nach hinten</td></tr>' +
          '</tbody></table></div>' +
          '<p>Ohne Kennzeichnung – also gleich wie NATO – sind u. a. ABORT, CLEARED HOT, CONTINUE, CONTINUE DRY, TALLY, VISUAL, BLIND, CONTACT, LOOKING, SPARKLE, SNAKE, PULSE, STEADY, ROPE, LASER ON, LASING, SPOT, NEGATIVE LASER, TEN SECONDS, DEADEYE, WINCHESTER, PLAYTIME, IN, OFF und WILCO.</p>' +
          LP.callout('tip', 'Tipp', 'Im Bereich „Brevity“ dieser App sind alle Begriffe mit ihrer Kennzeichnung durchsuchbar und im Trainer abfragbar.'),
        src: [['atp1021', 'Kap. I, Tab. 1–2']]
      },
      {
        id: 'm14s4',
        title: 'JTAC in der Bundeswehr',
        html:
          '<ul>' +
          '<li>In der Bundeswehr heißen JTAC auch <strong>Fliegerleitoffiziere</strong>. Sie führen die Waffen der Luftfahrzeuge sicher ins Ziel, weisen Ziele zu und steuern im Gefecht den Waffeneinsatz.</li>' +
          '<li>Das Zusammenwirken der Feuerunterstützung über die Teilstreitkräfte hinweg heißt <strong>Streitkräftegemeinsame Taktische Feuerunterstützung</strong>. Die Integration der Elektronischen Kampfführung steht dabei laut Bundeswehr noch am Anfang.</li>' +
          '<li>Fliegerleitoffiziere gibt es in Heer und Luftwaffe; Luftwaffenangehörige arbeiten z. B. in Verbindungskommandos der Luftwaffe bei Brigaden des Heeres.</li>' +
          '</ul>' +
          '<h3>Gliederung am Beispiel Fallschirmjägerregiment 31</h3>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Element</th><th>Zusammensetzung</th><th>Aufgabe</th></tr></thead><tbody>' +
          '<tr><td><strong>Feuerunterstützungszug</strong></td><td>1 JFSCT und 4 JFST</td><td>Feuerunterstützung des Verbands</td></tr>' +
          '<tr><td><strong>JFSCT</strong> – Joint Fire Support Coordination Team</td><td>Feuerunterstützungsoffizier, Feuerunterstützungsfeldwebel, Funkgerätebediener, Kraftfahrer</td><td>berät den Kommandeur in allen Fragen der taktischen Feuerunterstützung, koordiniert die Wirkmittel auf Verbandsebene und die Luftraumordnung im Einsatzraum</td></tr>' +
          '<tr><td><strong>JFST</strong> – Joint Fire Support Team</td><td>sechs Soldaten in zwei Trupps: mindestens ein JTAC, ein Luft-/Boden-Feldwebel, Beobachtungsoffizier, Beobachtungsfeldwebel, zwei Beobachtungssoldaten</td><td>unterstützt die Kampftruppe direkt am Boden; verantwortlich für zugewiesene Wirkmittel und luftgestützte Aufklärungsmittel</td></tr>' +
          '</tbody></table></div>' +
          '<p>Verfügbare Wirkmittel der Luftlandetruppe sind laut Bundeswehr in der Regel eigene Mörser, Kampfhubschrauber und Kampfflugzeuge, in Ausnahmefällen Rohr- und Raketenartillerie sowie seegestützte Waffensysteme.</p>' +
          '<h3>Übung und Lizenz</h3>' +
          '<p>Die jährliche Übung <strong>Stoneage</strong> in Munster dient der Weiterbildung der Fliegerleitoffiziere aus der gesamten Bundeswehr und aus Partnernationen; dort erhalten sie ihre Lizenz. Weitere Beispiele aus Veröffentlichungen der Bundeswehr: Arctic Challenge Exercise in Finnland und Übungen der eFP-Battlegroup in Litauen.</p>' +
          '<h3>Anforderungen laut Bundeswehr</h3>' +
          '<ul><li>sehr gute Englischkenntnisse</li><li>dreidimensionales Vorstellungsvermögen</li><li>schnelle, flexible Entschlussfassung</li><li>Stressresistenz und körperliche Fitness</li><li>festgelegte Verfahren und Formate auch unter Druck exakt einhalten</li></ul>',
        src: [['bw1', ''], ['bw2', ''], ['bw3', ''], ['bw4', '']]
      },
      {
        id: 'm14s5',
        title: 'Umgang mit deinen Print-Vorschriften',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Dokument</th><th>Einstufung</th><th>Was das für dich heißt</th></tr></thead><tbody>' +
          '<tr><td>ATP-3.3.2.1 Ed. D</td><td>NATO UNCLASSIFIED</td><td>Nicht zur Veröffentlichung freigegeben. Nur über dienstliche Kanäle (NSO-Zugang) beziehen; nicht in Cloud-Dienste, Chats oder öffentliche Repositories übertragen, ohne dass der Sicherheitsbeauftragte zugestimmt hat.</td></tr>' +
          '<tr><td>JFIRE (ATP 3-09.32, 2023)</td><td>CUI, FEDCON, eingeschränkte Weitergabe</td><td>Darf nur unter den Bedingungen auf dem Deckblatt genutzt werden (militärische Zwecke, gleichwertiger Schutz, keine Weitergabe an Dritte). Keine Werte, Tabellen oder Fotos in Apps, Chats oder Repositories.</td></tr>' +
          '</tbody></table></div>' +
          '<p>Diese App enthält deshalb <strong>keinen Inhalt</strong> aus beiden Dokumenten. Stattdessen findest du in jedem Modul <strong>Abgleich-Aufträge</strong> für die ATP und <strong>Nachschlage-Aufträge</strong> für die JFIRE. Die Häkchen speichern nur, dass du einen Auftrag erledigt hast – nicht, was du gefunden hast.</p>' +
          LP.callout('crit', 'Merke', 'Lehrgangsrelevante Werte (z. B. REDs) lernst du am Original. Wenn du eigene Notizen mit diesen Werten machst, gelten für die Notizen dieselben Regeln wie für die Vorschrift.'),
        src: [['atp3321', ''], ['jfire', '']]
      },
      {
        id: 'm14s6',
        title: 'Lernstrategie für den Lehrgang',
        html:
          '<ol>' +
          '<li><strong>Formate auswendig</strong>: Check-in (MNPOPCA), Game Plan, 9-Line mit Remarks/Restrictions, Readback-Pflichten, Clearance Calls, 5-Line, JFO Target Brief, Call for Fire, BDA (SALTR). Dafür sind Spickzettel, Karteikarten und der Reihenfolge-Trainer da.</li>' +
          '<li><strong>Verstehen statt nur merken</strong>: Warum Type 2 statt Type 1? Warum BOC? Der Kontrollart-Trainer fragt Begründungen ab.</li>' +
          '<li><strong>Laut funken</strong>: Lies die Funkbeispiele laut, verdecke die JTAC-Funksprüche und sprich sie selbst. Tempo: drei Zeilen pro Übertragung.</li>' +
          '<li><strong>Rechnen ohne Nachdenken</strong>: Line 8 vom Ziel aus, Meter in Fuß, km in NM, Laser-Geometrie, Mil-Formel, SEAD-Zeiten – im Rechentrainer bis es automatisch geht.</li>' +
          '<li><strong>Mit dem Print abgleichen</strong>: Arbeite pro Modul die ATP-Aufträge ab. Wo die NATO abweicht, gilt für den Lehrgang die ATP.</li>' +
          '<li><strong>Wiederholen</strong>: Karteikarten nach dem Leitner-System täglich, eine Probeprüfung pro Woche.</li>' +
          '</ol>' +
          '<p>Der Lernplan dieser App setzt das in acht Wochen um.</p>',
        src: []
      }
    ],
    atp: [
      'Prüfe in deiner Ed. D, ob NATO-FACs Zeilentitel im CAS-Brief nennen müssen.',
      'Prüfe, ob Line 8 Readback-Pflicht ist.',
      'Suche in der ATP nach Hinweisen zu Akkreditierung, Qualifikation und Inübunghaltung von JTAC/FAC (ggf. Verweis auf ATP-3.3.2.2).',
      'Notiere dir alle weiteren Unterschiede zu JP 3-09.3, die dir beim Abgleich der Module auffallen (auf Papier).'
    ]
  });
})();
