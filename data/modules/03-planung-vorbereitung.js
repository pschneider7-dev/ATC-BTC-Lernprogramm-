(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm03',
    nr: 3,
    title: 'Planung und Vorbereitung',
    summary: 'Der CAS-Entscheidungsprozess, Planungsfaktoren, Gelände und Nacht, taktische Risikobeurteilung, Rehearsals, Pre-Combat Checks und die Ausrüstung des JTAC.',
    goals: [
      'Die Phasen und Schritte der CAS-Planung wiedergeben',
      'Eine Feuerunterstützungsaufgabe (Task, Purpose, Method, Effect) formulieren',
      'Besonderheiten von Gebirge, Wüste, Dschungel, Stadt und Nacht nennen',
      'Die Faktoren der taktischen Risikobeurteilung kennen',
      'Rehearsals und Pre-Combat Checks planen'
    ],
    sections: [
      {
        id: 'm03s1',
        title: 'CAS im Entscheidungsprozess',
        html:
          '<p>Der CAS-Entscheidungsprozess ist ein fortlaufender Zyklus aus drei Phasen: <strong>Planung</strong>, <strong>Vorbereitung</strong> und <strong>Durchführung</strong>. Kern des Planungsteams auf Brigade- und Bataillonsebene sind TACP und Fires Cell bzw. FSCC.</p>' +
          '<h3>Fünf Schritte der Planungsphase</h3>' +
          '<ol>' +
          '<li><strong>Receipt of Mission</strong> – Auftrag erhalten. AO/ALO bringen Air Order of Battle, ATO, ACO, SPINS, OPORD und SOP ein.</li>' +
          '<li><strong>Mission Analysis</strong> – Produkte aktualisieren, Luftunterstützungsfähigkeit schätzen, eigene JTAC und Ausrüstung bewerten, Aufgaben ableiten, METT-T betrachten; erste vorgeplante Anforderungen absenden.</li>' +
          '<li><strong>COA Development</strong> – Handlungsmöglichkeiten entwickeln: CAS-Bedarf, Feuerunterstützungs- und Luftraumplan, Einsatz der TACP, Skizzen, Priorität der CAS-Feuer.</li>' +
          '<li><strong>COA Analysis / War Game</strong> – Stärken und Schwächen je COA, erste Risikobeurteilung, empfohlene Kontrollarten, Stellungen für JTAC und Beobachter.</li>' +
          '<li><strong>Orders Production</strong> – Befehl mit Feuerunterstützungsanlage bzw. Fire Support Execution Matrix (FSEM) und ACM-Anlage.</li>' +
          '</ol>' +
          '<h3>Feuerunterstützungsaufgabe (Fire Support Task)</h3>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Element</th><th>Inhalt</th><th>Beispiel aus JP 3-09.3</th></tr></thead><tbody>' +
          '<tr><td>Task</td><td>Welche Wirkung gegen welche Fähigkeit des Feindes</td><td>„Delay Advanced Guard Main Body movement by 2 hours.“</td></tr>' +
          '<tr><td>Purpose</td><td>Wozu – Zweck für die Operation</td><td>„To allow 2nd BN to advance to phase line Smith.“</td></tr>' +
          '<tr><td>Method</td><td>Wie, wann, womit</td><td>„CAS engages armored targets vicinity of Brown’s Pass, not later than 1400L.“</td></tr>' +
          '<tr><td>Effect</td><td>Messbarer Erfolg</td><td>„CAS destroys 8-10 vehicles vicinity Brown’s Pass; 2-69 Armor secured Brown’s Pass.“</td></tr>' +
          '</tbody></table></div>' +
          '<p>Die Feuerunterstützungsanlage regelt <strong>Purpose</strong> (wichtigster Teil), <strong>Priority</strong> (Priority of Fires je Phase, inklusive CAS), <strong>Allocation</strong> (Ziele, CAS-Einsätze, Nebel, Laserteams) und <strong>Restrictions</strong> (FSCM und Munitionsbeschränkungen).</p>',
        src: [['jp3093', 'Kap. III, Abs. 4–5; Abb. III-1, III-2']]
      },
      {
        id: 'm03s2',
        title: 'Planungsfaktoren nach METT-T',
        html:
          '<h3>Mission</h3>' +
          '<ul>' +
          '<li><strong>Shaping Operations</strong>: CAS tief im Einsatzraum, z. B. für Spezialkräfte; Abstimmung mit AI über das ATO nötig.</li>' +
          '<li><strong>Close Combat</strong>: Der Schwerpunkt erhält in der Regel den Großteil der CAS.</li>' +
          '<li><strong>Joint Security Area</strong>: wirksam gegen Durchbrüche, aber hohes Eigenbeschussrisiko wegen vieler eigener Unterstützungskräfte.</li>' +
          '<li>Im Angriff (Movement to Contact, Attack, Exploitation, Pursuit), in der Verteidigung (Maneuver, Movement, Durchbrüche bekämpfen) und in Stabilisierungsoperationen (oft restriktive ROE, Präzisionsmunition bevorzugt, auch Show of Force und Konvoischutz).</li>' +
          '</ul>' +
          '<h3>Enemy</h3>' +
          '<p>Fähigkeiten zu Angriff und Verteidigung, Flugabwehr (SAM, AAA, MANPADS), Täuschung und Tarnung, elektronische Kampfführung. Je höher die Bedrohung, desto wichtiger sind Vorbesprechung und Detailplanung. Hochwertige Ziele sind meist durch Flugabwehr geschützt.</p>' +
          '<h3>Terrain and Weather</h3>' +
          '<p>Gelände wirkt auf Funk und Sichtlinie (LOS). Drehflügler sind besonders LOS-abhängig. Wolkenuntergrenze und Sicht bestimmen Flughöhenbereich, FW oder RW und Angriffsprofil. Dunst und Rauch stören Tiefangriffe stärker als steile Sturzangriffe. Sonne hinter dem Luftfahrzeug erleichtert die Zielauffassung.</p>' +
          '<h3>Troops and Support</h3>' +
          '<p>Verfügbare Führungsmittel (AWACS, JSTARS, TAC(A)), Aufklärung (UAS, Zielbehälter, Spähtrupps), Luftfahrzeuge und Bewaffnung. Sofortanforderungen werden oft mit nicht optimaler Munition bedient.</p>' +
          '<h3>Time</h3>' +
          '<p>Planungszeit, Annahmeschluss für das ATO und Synchronisation. Wo möglich wird <strong>GPS-Zeit</strong> zur Synchronisation genutzt.</p>',
        src: [['jp3093', 'Kap. III, Abs. 6–10']]
      },
      {
        id: 'm03s3',
        title: 'Gelände, Stadt und Nacht',
        html:
          '<h3>Besondere Geländeformen</h3>' +
          '<dl>' +
          '<dt>Gebirge</dt><dd>Feind konzentriert sich an Straßen und Tälern – dort ist CAS sehr wirksam, aber Angriffsrichtungen sind eingeschränkt; Flugabwehr an den wahrscheinlichen Anflugwegen erwarten.</dd>' +
          '<dt>Wüste</dt><dd>Wenig Deckung, große Sicht- und Funkreichweiten, aber kaum Referenzpunkte für Talk-ons und für die Wahl von IP und CP. Bewegliche Kräfte: Was eben noch Feind war, kann kurz darauf eigene Truppe sein.</dd>' +
          '<dt>Dschungel und Wald</dt><dd>Beobachtung oft nur 25–50 m; Rauch verteilt sich im Kronendach und erscheint verzögert; Markieren mit allen Mitteln; Funk über Relais (FAC(A), TAC(A)).</dd>' +
          '</dl>' +
          '<h3>CAS im urbanen Raum</h3>' +
          '<ul>' +
          '<li>90 % der städtischen Gefechte finden auf unter 50 m statt; Einsätze mit Unterstützungswaffen auf unter 250 m. Der JTAC wird oft innerhalb von 100 m markieren und bekämpfen, also im Danger-Close-Bereich.</li>' +
          '<li>80 % der Verwundungen im Häuserkampf entstehen durch Glassplitter aus Druckwellen – Munition und Zünder entsprechend wählen.</li>' +
          '<li><strong>GRG</strong> (Gridded Reference Graphic): Bild genordet, Rechtswerte oben, Hochwerte links beschriftet; Gebäude von Nordwest nach Südost oder im Uhrzeigersinn vom Zielgebäude nummerieren. Die zuständige Einheit erstellt und verteilt sie und hält die Version aktuell.</li>' +
          '<li><strong>TRP</strong> (Target Reference Points): markante Gebäude oder Strukturen als Bezugspunkte, z. B. „Target reference point #3, 030 degrees magnetic, 325 meters, the water tower.“</li>' +
          '<li>Talk-on vom Großen zum Kleinen; Farbe, Dachform und Fenster beschreiben – nachts zeigen NVD und IR nur Formen, keine Farben.</li>' +
          '</ul>' +
          '<h3>Nacht und eingeschränkte Sicht</h3>' +
          '<p>Drei Einsatzkategorien: <strong>visuell</strong> (ohne NVD, mit Beleuchtung), <strong>systemgestützt</strong> (Laser, EO/IR, Radar, GPS-Munition, Helmvisier) und <strong>mit NVD</strong>.</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Leuchtmittel</th><th>Eigenschaft laut JP 3-09.3</th></tr></thead><tbody>' +
          '<tr><td>LUU-2</td><td>sichtbare Leuchtfackel, ca. 5 min in der Luft</td></tr>' +
          '<tr><td>LUU-19</td><td>IR-Leuchtfackel, ca. 7–12 min</td></tr>' +
          '<tr><td>LUU-1/-5/-6 („Logs“)</td><td>brennen ca. 30 min am Boden; zur Richtungs- und Entfernungsreferenz</td></tr>' +
          '<tr><td>M-257 Rakete</td><td>sichtbar, ca. ein Drittel der Helligkeit einer LUU-2, ca. 2 min</td></tr>' +
          '<tr><td>M-278 Rakete</td><td>IR-Beleuchtung, ca. 3 min</td></tr>' +
          '<tr><td>WP/RP-Rakete oder -Granate</td><td>deutlicher Blitz, 1–5 s Nachglühen</td></tr>' +
          '</tbody></table></div>' +
          LP.callout('warn', 'Eigene Stellung nicht beleuchten', 'Jede Beleuchtung im Gefechtsfeld wird vorher mit dem Kommandeur abgestimmt. GLINT-Tape: höchstens ein 1/2-Zoll-Quadrat pro Person oder vier 1-Zoll-Quadrate pro Fahrzeug.'),
        src: [['jp3093', 'Kap. III, Abs. 9']]
      },
      {
        id: 'm03s4',
        title: 'Planungskonzepte und taktische Risikobeurteilung',
        html:
          '<h3>Battle Tracking</h3>' +
          '<p>JTAC, FAC(A) und Gefechtsstand arbeiten mit dem aktuellen Lagebild:</p>' +
          '<ul>' +
          '<li>FSCM und ACM: IPs, CPs, BPs, An- und Abflugwege, MRRs, ACAs, NFAs, ROZs, CFLs, RFLs, FSCLs</li>' +
          '<li>Eigene Lage: Grenzen, Phase Lines, Stellungen, Spähtrupps, Ziele, Sperren</li>' +
          '<li>Artillerie: Stellungen und Gun-Target Lines (GTL)</li>' +
          '<li>Feindlage einschließlich Flugabwehr</li>' +
          '<li>Zielplanung: geplante Ziele, Auslöser, Anforderungen, Beobachtungsplan, Zielkoordinaten mit TLE</li>' +
          '<li>FRAGOs, Spot Reports, ATO-Änderungen, Fernmelde- und Datenlinkplan</li>' +
          '</ul>' +
          '<h3>Faktoren der taktischen Risikobeurteilung</h3>' +
          '<ol>' +
          '<li>Vertrauen in Ausbildung von Einheit, Stab und Schlüsselpersonal</li>' +
          '<li>Aktualität der Informationen</li><li>fehlende Informationen</li><li>Informationsfluss und Verbindung</li>' +
          '<li>Vertrauen ins Lagebild: eigene Kräfte, Zivilisten, Feind</li>' +
          '<li>Bedrohung für Bodentruppen und für Luftfahrzeuge</li>' +
          '<li>Vertrauen in die Zielinformation: Quelle und Genauigkeit, stehend oder beweglich, Markierbarkeit, Schwierigkeit für die Besatzung</li>' +
          '<li>verfügbare Munition: Fähigkeiten, Grenzen, Beschränkungen, Nähe eigener Kräfte, Kollateralschaden</li>' +
          '<li>Troops in Contact</li><li>Risk-Estimate Distance (siehe Modul 13)</li>' +
          '</ol>' +
          LP.callout('warn', 'Keine feste Risikostufe je Kontrollart', 'JP 3-09.3 betont: Kontrollarten und Angriffsmethoden haben <strong>kein festes Risikoniveau</strong>. Die Lage bestimmt das Risiko. GPS-gestützte Type-2-Einsätze können z. B. sicherer sein als Type 1.') +
          '<div class="def"><span class="term">Troops in Contact (TIC)</span><p>Eigene Bodentruppen unter wirksamem Feuer. TIC ist ein <strong>Hinweis zur Dringlichkeit</strong>, legt aber keine Kontrollart fest und entbindet weder JTAC noch Besatzung von der Pflicht, Verluste bei eigenen Truppen und Zivilisten zu vermeiden.</p></div>' +
          '<h3>Weapons Release Authority</h3>' +
          '<p>Die Befugnis zum Waffeneinsatz liegt beim unterstützten Kommandeur. Er delegiert sie für konkrete Einsätze an JTAC/FAC(A) – möglichst auf die niedrigste Ebene im Rahmen der Risikobeurteilung.</p>',
        src: [['jp3093', 'Kap. III, Abs. 11a–f']]
      },
      {
        id: 'm03s5',
        title: 'Rehearsals und Pre-Combat Checks',
        html:
          '<p>Rehearsals werden häufig vernachlässigt, sind aber der Ort, an dem Missverständnisse auffallen. JP 3-09.3 nennt zwei Arten:</p>' +
          '<dl>' +
          '<dt>Combined Arms Rehearsal</dt><dd>Durch den Gefechtsstand der Kampftruppe nach Befehlsausgabe. AO/ALO bzw. FSO behandeln: Absicht für CAS, erwartete Einsätze, Luftfahrzeugtypen, Bewaffnung, On-Station-Zeiten, CPs und IPs, ACM/FSCM, SEAD-Plan, Markierungs- und Laserplan, Kennzeichnung eigener Kräfte, Einsatz und Bergung der TACP, Fernmeldeplan, genehmigte Anforderungen, Kontrollarten.</dd>' +
          '<dt>Fire Support Rehearsal</dt><dd>Der <strong>wichtigste Teil der Vorbereitungsphase</strong>. Zielliste, Koordinaten im richtigen Kartenbezugssystem, Auslöser, ROE/PID, Beobachter, nächstgelegene eigene Kräfte, Funkverbindungen, Angriffsmethoden, SEAD mit der Feuerleitstelle, Markierungsverfahren, GTL und Scheitelhöhen, TOT/TTT, Kontrollarten.</dd>' +
          '</dl>' +
          '<h3>Pre-Combat Checks</h3>' +
          '<p>Drei Bereiche: <strong>Mission Essential Knowledge</strong>, <strong>Mission Essential Equipment</strong> und <strong>Mission Essential Coordination</strong> (Lagekarten mit Manöver, FSCM, ACM, NAIs/TAIs, Auslösern, CPs/IPs, HAs/BPs, Kennzeichnung eigener Kräfte bei Tag und Nacht, Zielliste und Lasercodes).</p>' +
          '<h3>Empfohlene Ausrüstung des JTAC</h3>' +
          '<p>Nachtsichtgerät, IR-Laserpointer, Laserentfernungsmesser/-zielbeleuchter, IR-Strobe, Knicklichter, GLINT-Tape, VS-17-Signaltuch, Beobachtungsfernrohr, Mehrbandfunkgerät, Radarbake, Pyrotechnik (Rauch, Leuchtmittel), Zugang zu Granatwerfer mit Leucht- und Nebelmunition, Kompass, Signalspiegel, Tablet, gemeinsame Lagegrafiken, Authentisierungs- und Kryptomaterial, GPS. <strong>Redundanz bei Funk und Markierung einplanen.</strong></p>' +
          '<h3>Fernmeldeprüfung</h3>' +
          '<p>Primäre und Ausweichverbindungen (Sprache und digital) prüfen, Krypto aktuell, Zeit synchronisiert, Codewörter, Brevity, Authentisierung, Passwörter und Rufzeichen verfügbar. Für Laser mindestens planen: Standort des Zielbeleuchters, Lasercodes und Laser-Target Line.</p>',
        src: [['jp3093', 'Kap. IV, Abs. 1–4']]
      },
      {
        id: 'm03s6',
        title: 'Austausch mit FAC(A) und JFO vor dem Einsatz',
        html:
          '<p>Kann der FAC(A) nicht an der Planung teilnehmen, tauschen TACP und FAC(A) vor dem Einsatz Informationen aus – am besten persönlich, sonst elektronisch.</p>' +
          '<div class="two-col">' +
          '<div class="panel flat"><h4>TACP → FAC(A)</h4><ul class="small"><li>Absicht des Kommandeurs</li><li>Operationsplan, eigene Positionen und Kennzeichnung, GRG</li><li>Feindliche Absicht (wahrscheinlich, gefährlichste), Bedrohung</li><li>Zielprioritäten, FSCM, erwartete Ziele</li><li>Fernmeldeplan und Codewörter</li><li>Artilleriestellungen, beauftragte Luftmittel</li><li>Luftraumplan (Routing, CP/IP/HA/BP/ROZ)</li><li>Kontrollplan: Zuständigkeiten JTAC und FAC(A), Freigabeprozess, Markierungsplan, SEAD-SOP, Laserplan</li></ul></div>' +
          '<div class="panel flat"><h4>FAC(A) → TACP</h4><ul class="small"><li>Time on Station und Verweilzeit</li><li>Weitere Luftmittel aus dem ATO</li><li>Gewünschter erster Haltepunkt</li><li>Bewaffnung</li><li>Empfehlungen zum Fernmeldeplan</li><li>Einschränkungen für den Game Plan</li><li>Zielbehälter, FMV-Fähigkeit</li><li>Koordinatenerzeugung mit erreichbarer TLE</li></ul></div>' +
          '</div>' +
          '<h3>Vorbereitung des JFO (Auszug)</h3>' +
          '<ul>' +
          '<li>Absicht für das Feuer kennen, JTARs vorbereiten, Ziele und FSCM aktualisieren</li>' +
          '<li>IPs, CPs, ACMs und FSCMs eintragen, SEAD-Verfahren abstimmen</li>' +
          '<li>Ziel- und Eigenmarkierung prüfen, ATO und SPINS lesen</li>' +
          '<li>Type-1/2/3-Vorgaben kennen, Netze, Frequenzen, SATCOM, Authentisierung bestätigen</li>' +
          '<li>Gleiche GRGs bei allen unterstützten und unterstützenden Einheiten sicherstellen</li>' +
          '</ul>',
        src: [['jp3093', 'Kap. IV, Abs. 3b(5)–(7)']]
      }
    ],
    atp: [
      'Wie beschreibt deine ATP-3.3.2.1 den Planungsprozess für CAS und die Beiträge der TACP?',
      'Welche Inhalte für Rehearsals und Pre-Combat Checks nennt die ATP?',
      'Welche Ausrüstung empfiehlt die ATP für den JTAC/FAC?',
      'Welche Hinweise gibt die ATP zu Nacht-CAS und CAS im urbanen Raum (GRG)?'
    ]
  });
})();
