/* Funkbeispiele nach JP 3-09.3 (2014), Anhang E „Examples of Close Air Support Missions“.
   Funksprüche im Original (englisch), Erläuterungen deutsch. Teilweise gekürzt. */
(function () {
  'use strict';
  var S = window.LP.scripts;

  S.push({
    id: 'e1',
    title: 'Beispiel 1 – Type 1, BOT mit Markierung und SEAD',
    tags: ['Type 1', 'BOT', 'WP-Markierung', 'SEAD', 'Rotte F/A-18'],
    intro: '<p>JTAC <strong>Texas 17</strong> sieht das Ziel und hat die Zielposition geprüft. Auf Weisung des Kommandeurs stellt er eine sofortige Anforderung (JTAR), meldet Troops in Contact und erhält zwei F/A-18C (<strong>Winder 61</strong>). Mit dem Feuerunterstützungsoffizier koordiniert er Markierung und SEAD.</p>',
    lines: [
      ['AIR', 'Texas 17, Winder 61.'],
      ['JTAC', 'Winder 61, proceed to Mazda block 13 to 14, be advised SA-8 active in target area, you are only aircraft on station, check in when able.'],
      ['AIR', 'Winder 61, copy, mission number AB2061, 2 by F/A-18 Hornet. 10 miles north of Mazda inbound from 200 to block 13 to 14, 4 by MK-82 instantaneous and delay fuzing, and 450 rounds of 20 mm each. 35 minutes of PLAYTIME. AT FLIR, Cat II coordinate capable, VDL codes 4797 and 4457 respectively, TIMBER SWEET. ABORT code none.'],
      ['JTAC', 'Texas 17, copy, advise when ready for SITREP.'],
      ['AIR', 'Winder 61, ready.'],
      ['JTAC', 'Threat SA-8 active in target area and small arms. Enemy personnel are dug into fighting positions to the north. Friendlies are a company size infantry element collocated with Texas 17. We have gun position 3 active and in support, gun target line 040. Clearance will come from Texas 17. Weather is clear in the target area. Stay east of Mazda till IP inbound. Advise when ready for game plan.'],
      ['AIR', 'Winder 61, ready for game plan.'],
      ['JTAC', 'Winder 61, this will be a Type 1 control, BOT, 2 by MK-82 each, instantaneous fuzing, 30-second separation, advise when ready for 9-line.'],
      ['note', 'Die 30 Sekunden Abstand sind die Zeit, die der JTAC zwischen zwei Luftfahrzeugen für Freigabe, Wirkungsbeurteilung und Erfassen des zweiten Lfz braucht.'],
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
      ['note', 'Der JTAC vergleicht den Zeitpunkt des IP-inbound-Calls mit dem SEAD-Zeitplan und prüft die Trennung von der Markierung.'],
      ['JTAC', 'MARK on deck. Suppression effective.'],
      ['AIR', 'Winder 61, CONTACT.'],
      ['JTAC', 'From the MARK, south 100.'],
      ['AIR', 'Winder 61, IN.'],
      ['note', 'Type 1: Der JTAC sieht das Luftfahrzeug, prüft die Angriffsgeometrie und ob es auf das freigegebene Ziel ausgerichtet ist.'],
      ['JTAC', 'Winder 61, CLEARED HOT.'],
      ['AIR', 'Winder 61, two AWAY.'],
      ['AIR2', 'Winder 62, contact lead’s hits IN.'],
      ['JTAC', 'Winder 62, from lead’s hits, west 50, CLEARED HOT.'],
      ['AIR2', 'Winder 62, two AWAY.']
    ],
    points: [
      'Check-in vollständig nach MNPOPCA – inklusive Abort Code „none“.',
      'Game Plan nennt Type und Method of Attack, dazu Munition, Zünder und Abstand.',
      'Readback: Line 4, Line 6 und alle Restrictions (FAH, Höhenstaffelung, TOT). Bei BOT reicht die Führung – hier fordert der JTAC zusätzlich Winder 62 an.',
      'Korrelation über die Markierung: „From the MARK, south 100“ – Korrektur mit Himmelsrichtung und Metern.',
      'Zweites Lfz wird von den Treffern der Führung aus korrigiert („from lead’s hits, west 50“).'
    ],
    qs: [
      { q: 'Welche Angaben der Remarks sind Restrictions und damit Readback-Pflicht?', o: ['FAH 285-330, stay above 3000, TOT 50', 'SA-8 north 1000 und continuous suppression', 'Gun-target line 040', 'Egress left pull'], a: 0, e: 'FAH, Höhenstaffelung und TOT sind Restrictions. Bedrohung, SEAD-Art und GTL sind Remarks.' },
      { q: 'Wann darf der JTAC bei Type 1 „CLEARED HOT“ geben?', o: ['Erst wenn er das angreifende Lfz und das Ziel sieht und die Geometrie passt', 'Sobald der Readback korrekt ist', 'Nach dem IP-inbound-Call', 'Sobald die Markierung liegt'], a: 0, e: 'Type 1 verlangt, dass der JTAC Ziel und Luftfahrzeug für jeden Angriff sieht und die Geometrie beurteilt.' },
      { q: 'Was bedeutet „Mazda, 270 Left, 12.1“?', o: ['IP Mazda, Kurs 270° magnetisch IP→Ziel, Offset links, 12,1 NM', 'Halteraum Mazda, Höhe 27.000 ft, 12 Minuten', 'Ziel 270 m links von Mazda, 12 Uhr', 'Mazda ist das Ziel, Abflug 270'], a: 0, e: 'Lines 1 bis 3: IP, Heading mit Offset-Richtung, Distanz in NM auf eine Nachkommastelle.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 1']]
  });

  S.push({
    id: 'e2',
    title: 'Beispiel 2 – Type 1, BOC mit Reattack und Wechsel auf BOT',
    tags: ['Type 1', 'BOC → BOT', 'Keyhole', 'Einzel-F-16'],
    intro: '<p>JTAC <strong>Spartan 03</strong> liegt mit einem Spähtrupp hinter einem Deich fest. Ein gut getarntes MG-Nest 800 m nördlich hält sie nieder. Statt Hubschraubern kommt eine einzelne F-16 (<strong>Fang 24</strong>) mit wenig Restzeit. Ein Talk-on würde zu lange dauern, aber der JTAC hat eine 8-stellige Koordinate, die für die Wirkung reicht.</p>',
    lines: [
      ['AIR', 'Spartan 03, Fang 24.'],
      ['JTAC', 'Fang 24, Spartan 03, I am currently receiving heavy effective machine gun fire from a well-concealed spider-hole approximately 800 meters north of my position. Hold your full check-in, Keyhole template in effect, advise when ready for 8-digit echo point.'],
      ['note', 'Wegen der Dringlichkeit verzichtet der JTAC zunächst auf den vollständigen Check-in – er braucht nur Munition und Restzeit.'],
      ['AIR', 'Fang 24, ready.'],
      ['JTAC', 'Echo point ME 1234 5678, proceed immediately overhead echo at 15 block 16 thousand, you are the only aircraft on station, say ordnance and PLAYTIME.'],
      ['AIR', 'Fang 24, copy, 3 minutes out in the descent. Fang 24 single F-16, with 4-by MK-82, and gun. Ten minutes of PLAYTIME.'],
      ['JTAC', 'Fang 24, advise when ready for game plan.'],
      ['AIR', 'Fang 24, ready.'],
      ['JTAC', 'Fang 24, Type 1, bomb on coordinate, advise when ready for 9-line.'],
      ['AIR', 'Fang 24, ready.'],
      ['JTAC', 'From the overhead. Elevation, 416 feet, Enemy machine gun nest, ME 1234 5678.'],
      ['JTAC', 'No mark, South 800, Egress, back to the overhead block 15-16. Advise when ready for remarks.'],
      ['AIR', 'Fang 24, ready.'],
      ['JTAC', 'Final attack heading 270 degrees plus-or-minus 15. Request TEN SECONDS to roll-in call. Push when ready. Go with readbacks when able.'],
      ['AIR', 'Fang 24, 416 feet, ME 1234 5678, final attack heading 270 plus or minus 15. Be advised, Fang 24 will employ 2 x MK-82s against that target.'],
      ['JTAC', 'Fang 24, good readback.'],
      ['AIR', 'Fang 24, 10-seconds to roll-in.'],
      ['JTAC', 'VISUAL, CONTINUE.'],
      ['AIR', 'Fang 24, IN from the east.'],
      ['JTAC', 'Fang 24, CLEARED HOT.'],
      ['note', 'Die Bomben liegen etwa 25 m westlich des Ziels. Jetzt gibt es eine brauchbare Marke am Boden – der JTAC wechselt auf BOT.'],
      ['JTAC', 'Fang 24, good impacts. Are you CONTACT your last impact?'],
      ['AIR', 'Fang 24, affirm.'],
      ['JTAC', 'Request reattack. Change to game plan, bomb on target. Same ordnance, same 9-line, same restrictions. From your last impacts, adjust east 25 meters.'],
      ['AIR', 'Fang 24, CONTACT, 10-seconds to roll-in.'],
      ['JTAC', 'VISUAL, CONTINUE.'],
      ['AIR', 'Fang 24, IN from the east.'],
      ['JTAC', 'Fang 24, CLEARED HOT.'],
      ['JTAC', 'Fang 24, mission successful, enemy fire ceased, say remaining PLAYTIME.'],
      ['AIR', 'Fang 24, copy, BINGO, Fang 23 inbound to support.'],
      ['JTAC', 'Spartan 03, copy. Proceed to A-8 at 16,000, contact Blacklist.']
    ],
    points: [
      '„From the overhead“ bzw. „Lines 1-3 N/A“ ersetzt IP, Heading und Distance, wenn das Lfz über dem Echo-Punkt hält.',
      'BOC mit Type 1 ist zulässig: Art der Kontrolle und Angriffsmethode sind unabhängig voneinander.',
      'Der „TEN SECONDS to roll-in“-Call gibt dem JTAC Zeit, das Lfz zu finden – Voraussetzung für Type 1.',
      'Wechsel des Game Plans für den Reattack: neue Methode ausdrücklich ansagen, Rest bleibt („same 9-line, same restrictions“).'
    ],
    qs: [
      { q: 'Warum wählt der JTAC zuerst BOC?', o: ['Kurze Restzeit, getarntes Ziel, ein Talk-on würde zu lange dauern, die 8-stellige Koordinate reicht für die Wirkung', 'Weil Type 1 immer BOC verlangt', 'Weil die F-16 keine Ungelenkten werfen darf', 'Weil der JTAC das Lfz nicht sehen kann'], a: 0, e: 'Bei BOC muss die Besatzung das Ziel nicht erfassen – die Koordinate muss aber gut genug für die gewünschte Wirkung sein.' },
      { q: 'Wie korrigiert der JTAC nach dem ersten Angriff?', o: ['Von den letzten Einschlägen: Himmelsrichtung und Meter („adjust east 25 meters“)', 'Mit links/rechts aus Sicht des Piloten', 'Mit einer neuen 10-stelligen Koordinate ohne Readback', 'Mit der Uhrzeit-Methode („3 o’clock, 25“)'], a: 0, e: 'Korrekturen von einer Marke oder von Einschlägen: Himmelsrichtung und Entfernung in Metern.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 2']]
  });

  S.push({
    id: 'e3',
    title: 'Beispiel 3 – Type 2, BOC unter der Wolkendecke',
    tags: ['Type 2', 'BOC', 'GBU-32 Airburst', 'Readback aus der Waffe'],
    intro: '<p>Wolkenuntergrenze 500 ft über Grund. JTAC <strong>Redman 01</strong> sieht eine feindliche Kompanie in einem getarnten Graben. Das Ziel ist nicht im Bildmaterial, aber mit Karte 1:50.000 bestimmt er eine 6-stellige Koordinate mit hohem Vertrauen. Zwei F/A-18C (<strong>Rumble 41</strong>) mit GBU-32 (Airburst) kommen. Der JTAC entscheidet: Type 2, BOC.</p>',
    lines: [
      ['JTAC', 'Keyhole in effect, Echo point NB 234 876. Proceed to Bravo 8, block 17-19, you are the only aircraft on station, advise when ready for game plan.'],
      ['AIR', 'Redman 01, Rumble 41, proceeding to Bravo 8, block 17-19, ready.'],
      ['JTAC', 'Rumble 41, this is Redman 01, Type 2 control, bomb on coordinate, 1 by GBU-32 each, airburst fuzing, simultaneous impacts, advise when ready to copy 9-line.'],
      ['AIR', 'Redman 01, Rumble 41, ready.'],
      ['JTAC', 'Bravo 8, Elevation, 1650 feet, Company of infantry in trench line, NB 234 876.'],
      ['JTAC', 'No mark, South 1100, Egress right pull, back to Bravo 8, block 17-19. Advise when ready for remarks.'],
      ['AIR', 'Ready.'],
      ['JTAC', 'Final attack headings 280 through 320. Request IP inbound and IN with heading calls.'],
      ['note', 'Die Besatzungen prüfen, ob die Position zum erwarteten Zielgebiet passt (Karte, digitale Karte, Radar durch das Wetter), geben Line 4 und 6 in die Waffen ein und prüfen den Zünder.'],
      ['AIR', 'Rumble 41, 1650 feet, NB 234 876, final attack heading 280 through 320.'],
      ['JTAC', 'Rumble 41, good readback. Rumble 42, go with readbacks.'],
      ['AIR2', 'Rumble 42, 1650 feet, NB 234 876, final attack heading 280 through 320.'],
      ['JTAC', 'Rumble 42, good readback; Rumble flight, report IP inbound, TOT 35, expect clearance as a flight.'],
      ['AIR', 'Rumble flight, TOT 35.'],
      ['AIR', 'Rumble 41 flight, IP inbound.'],
      ['JTAC', 'CONTINUE.'],
      ['AIR', 'Rumble 41 flight, IN heading 300.'],
      ['note', 'Der JTAC vergleicht den IN-Kurs mit den Restrictions und prüft, ob die eigenen Truppen sicher sind.'],
      ['JTAC', 'Rumble 41 flight, CLEARED HOT.'],
      ['AIR', 'Rumble 41 flight, 2 AWAY, 33 seconds to impact, proceeding to Bravo 8.'],
      ['JTAC', 'Good impacts, standby BDA.'],
      ['JTAC', 'Ground commander’s intent met, enemy neutralized. Switch Blacklist for routing and further tasking, you are still the only aircraft on station.']
    ],
    points: [
      'Bei BOC lesen <strong>alle</strong> Lfz, die Waffen einsetzen, Line 4 und 6 zurück – möglichst direkt aus der Waffe.',
      'Mit dem korrekten Readback ist die Korrelation bei BOC abgeschlossen. Die TOT hätte schon vorher in den Restrictions stehen können; weil das Eingeben in die Waffen dauert, wird sie oft erst danach vergeben.',
      'Type 2: Der JTAC muss das Lfz nicht sehen; er prüft den IN-Kurs gegen die FAH.',
      'Freigabe für die ganze Rotte: „Rumble 41 flight, CLEARED HOT“.'
    ],
    qs: [
      { q: 'Wer liest bei BOC Line 4 und 6 zurück?', o: ['Jedes Lfz, das Waffen einsetzt – aus System oder Waffe', 'Nur die Führungsmaschine', 'Nur auf Anforderung des JTAC', 'Der Rottenflieger für die ganze Rotte'], a: 0, e: 'BOC: alle Lfz mit Waffeneinsatz, aus dem System oder der Waffe. BOT: nur die Führung, außer der JTAC fordert mehr.' },
      { q: 'Warum ist diese Mission Type 2 und nicht Type 1?', o: ['Wolkendecke 500 ft: Der JTAC kann die Lfz beim Auslösen nicht sehen', 'Weil JDAM nie Type 1 sein darf und nichts anderes zählt', 'Weil zwei Lfz angreifen', 'Weil keine Markierung liegt'], a: 0, e: 'Type 2 gilt, wenn der JTAC das Lfz beim Auslösen oder das Ziel nicht sehen kann. Zusätzlich: GPS/INS-Waffen sollen nicht unter Type 1 kontrolliert werden.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 3']]
  });

  S.push({
    id: 'e4',
    title: 'Beispiel 4 – Type 2, BOT mit Sensor-Talk-on',
    tags: ['Type 2', 'BOT', 'Talk-on', 'Daten vom Spähtrupp'],
    intro: '<p>JTAC <strong>Spartan 03</strong> sieht das Ziel nicht, bekommt aber Echtzeit-Zieldaten von einem Spähtrupp im Gefecht. Die Zielposition lässt er über das Lfz bestätigen. Gehalten wird an den IPs Moon und Charger. Angreifer: <strong>Ragin’ 11</strong> (Rotte).</p>',
    lines: [
      ['JTAC', 'Ragin’ 11, this is Spartan 03, proceed to Moon-Charger, block 18-20, advise when ready for game plan.'],
      ['AIR', 'Ragin’ 11, WILCO, go with game plan.'],
      ['JTAC', 'Ragin’ 11, Spartan 03, Type 2 control, bomb on target, expect 8-digit grid, advise when ready for 9-line.'],
      ['AIR', 'Spartan 03, Ragin’ 11, ready.'],
      ['JTAC', 'Moon, 030, 9.2.'],
      ['JTAC', 'Elevation, 450 feet, 2 BTR 90s, NB 8652 4274.'],
      ['JTAC', 'No mark, South 900, Egress, back to Moon-Charger, block 18-20. Advise when ready for remarks.'],
      ['AIR', 'Ragin’ 11, ready.'],
      ['JTAC', 'Final attack heading 300 through 325. Request IP inbound and IN with heading calls.'],
      ['AIR', 'Ragin’ 11, 450 feet, NB 8652 4274, final attack heading 300 through 325.'],
      ['JTAC', 'Ragin’ 11, good readbacks, advise when ready for sensor talk-on.'],
      ['AIR', 'Ready.'],
      ['JTAC', 'Ragin’ flight, SLEW to lines 4 and 6. Describe what you see.'],
      ['AIR', 'A large 4-way intersection. On the northeast corner of the intersection, a large L-shaped building.'],
      ['JTAC', 'Ragin’ 11, which direction is the short leg of the L pointing?'],
      ['AIR', 'East.'],
      ['JTAC', 'Do you show any vehicles parked on the east side of the short leg of the L shaped building?'],
      ['AIR', 'Two vehicles appear to be in revetments.'],
      ['JTAC', 'Roger the east vehicle is your target.'],
      ['AIR', 'Ragin 11, CAPTURED.'],
      ['JTAC', 'Ragin 12, the west vehicle is your target.'],
      ['AIR2', 'Ragin 12, CAPTURED.'],
      ['JTAC', 'Ragin 11, say best ordnance and interval.'],
      ['AIR', 'Ragin 11 will employ 2 x GBU-12s with 2-minutes separation.'],
      ['JTAC', 'Ragin’ 11, copy. Push when ready, report IP inbound.'],
      ['AIR', 'Ragin’ 11, IP inbound.'],
      ['JTAC', 'Ragin’ 11, CONTINUE.'],
      ['AIR', 'Ragin’ 11, IN heading 325.'],
      ['JTAC', 'Ragin’ 11, CLEARED HOT.'],
      ['AIR', 'Ragin’ 11, 1 AWAY, 30 seconds.'],
      ['AIR2', 'Ragin’ 12, IP inbound.'],
      ['JTAC', 'Ragin’ 12, CONTINUE.'],
      ['JTAC', 'Ragin’ 11, good impacts.'],
      ['AIR2', 'Ragin’ 12, IN heading 317.'],
      ['JTAC', 'Ragin’ 12, CLEARED HOT.'],
      ['AIR2', 'Ragin 12, 1 AWAY, 30 seconds.'],
      ['JTAC', 'Both vehicles destroyed. Ragin’ flight egress, back to Moon-Charger, block 18-20. Report established.']
    ],
    points: [
      'Korrelationsfragen mit eindeutiger Antwort: „Which direction is the short leg of the L pointing?“',
      'Bei BOT braucht jedes angreifende Lfz die Korrelation – hier beide.',
      'Aktualisiert die Besatzung bei BOT die Koordinate mit dem Pod, ist kein erneuter Readback nötig.',
      'Der Talk-on „von groß nach klein“: Kreuzung → L-förmiges Gebäude → Fahrzeuge.'
    ],
    qs: [
      { q: 'Woran erkennt man, dass die Korrelation abgeschlossen ist?', o: ['Beide Besatzungen melden CAPTURED auf ihr jeweiliges Ziel', 'Am korrekten Readback von Line 4 und 6', 'Am IP-inbound-Call', 'Am Call „SPOT“'], a: 0, e: 'Bei BOT ist die Korrelation abgeschlossen, wenn die Besatzung das richtige Ziel erfasst hat (TALLY, CAPTURED oder CONTACT).' },
      { q: 'Warum ist das Type 2?', o: ['Der JTAC sieht das Ziel nicht und nutzt Echtzeit-Zieldaten eines anderen Beobachters', 'Weil GBU-12 eingesetzt werden', 'Weil die Besatzung den Pod benutzt', 'Weil zwei Ziele bekämpft werden'], a: 0, e: 'Type 2: Der JTAC sieht das Lfz beim Auslösen oder das Ziel nicht – er darf Zieldaten eines anderen Mittels mit Echtzeit-Informationen nutzen.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 4']]
  });

  S.push({
    id: 'e5',
    title: 'Beispiel 5 – Type 3, BOT mit Laser-Handoff',
    tags: ['Type 3', 'BOT', 'Laser-Handoff', 'A-10', 'Zeitfenster'],
    intro: '<p>Der Kommandeur steht im Gefecht mit einer mechanisierten Kompanie 1,1 km nördlich. Er überlässt dem JTAC <strong>Heartless 31</strong> die Wahl der Kontrollart. Zwei A-10 (<strong>Razor 11</strong>) sind im Stack. Ein Spähtrupp (<strong>Lonewolf</strong>) 1.100 m südlich kann beleuchten.</p>',
    lines: [
      ['JTAC', 'Razor 11, Heartless 31, Type 3 control, bomb on target, advise when ready for 9-line.'],
      ['AIR', 'Heartless 31, Razor 11, ready.'],
      ['JTAC', 'From the overhead. Elevation, 450 feet, Mechanized company in the open, NB 922 556. Lonewolf laser handoff, 1511, South 1100, egress south to Mazda block 10 to 11. Advise when ready for remarks.'],
      ['AIR', 'Razor 11, ready.'],
      ['JTAC', 'Razor 11, laser target line 360. No attack run-ins from north to south. Recon team, call sign Lonewolf, is currently 1100 m south in position to lase, as required, contact on this TAD.'],
      ['AIR', 'Razor 11, 450 feet, NB 922 556.'],
      ['JTAC', 'Razor 11, good readback.'],
      ['AIR', 'Lonewolf, Razor 11, overhead, ready for SPOT.'],
      ['OBS', 'Razor 11, Lonewolf, proceed to the south, run IN heading 320 to 040, STARE line 6, laser 1511, laser-to-target line is 360.'],
      ['AIR', 'Lonewolf, Razor 11, IN heading 320 for laser handoff, TEN SECONDS.'],
      ['OBS', 'Lonewolf, TEN SECONDS.'],
      ['AIR', 'Razor 11, LASER ON.'],
      ['OBS', 'LASING 1511.'],
      ['AIR', 'Razor 11, SPOT … CEASE LASER.'],
      ['note', 'SPOT heißt nicht, dass das richtige Ziel erfasst ist – die Korrelation folgt noch.'],
      ['OBS', 'Razor 11, what do you see in your pod?'],
      ['AIR', 'Razor 11, CONTACT tactical vehicle in a large field.'],
      ['OBS', 'Your pod is on the center vehicle in a formation of tactical vehicles. How many vehicles are in the field?'],
      ['AIR', 'Razor 11, five.'],
      ['OBS', 'Razor 12, describe the orientation of the vehicles.'],
      ['AIR2', '2 vehicles to the south and 3 vehicles to the north. The vehicles to the south are oriented east-west, facing south. The northern vehicles are also oriented east-west, facing east in a line.'],
      ['OBS', 'Razor 11, Lonewolf, correct, those five vehicles in the field northwest of the bridge are your target.'],
      ['JTAC', 'Razor 11, CLEARED TO ENGAGE from time 45-55.'],
      ['AIR', 'Razor 11, COMMENCING ENGAGEMENT.'],
      ['note', 'Die A-10 greifen im Zeitfenster mehrfach an und halten die übrigen Restrictions ein. Der JTAC hört mit.'],
      ['AIR', 'Heartless 31, Razor 11 ENGAGEMENT COMPLETE. Advise when ready to copy BDA.']
    ],
    points: [
      'Type 3: eine Freigabe („CLEARED TO ENGAGE“) für mehrere Angriffe innerhalb von Restrictions – hier ein Zeitfenster.',
      'Pflicht-Calls der Besatzung: „COMMENCING ENGAGEMENT“ vor dem ersten Auslösen, „ENGAGEMENT COMPLETE“ am Ende.',
      'Laser-Handoff: STARE mit Code und Bezugspunkt, TEN SECONDS, LASER ON, LASING, SPOT, CEASE LASER – danach trotzdem korrelieren.',
      'Die LTL steht in den Remarks; „No attack run-ins from north to south“ hält die Angreifer aus dem Bereich, in dem sie den Beleuchter statt des Ziels erfassen könnten.'
    ],
    qs: [
      { q: 'Was bedeutet „SPOT“?', o: ['Der Laser-Spot-Tracker hat reflektierte Laserenergie erfasst', 'Das richtige Ziel ist erfasst und verfolgt', 'Die Waffe ist ausgelöst', 'Der Beleuchter ist bereit'], a: 0, e: 'SPOT = Laserenergie erfasst. Ob das der richtige Punkt ist, klärt erst die Korrelation.' },
      { q: 'Welche Freigabe nutzt der JTAC unter Type 3?', o: ['CLEARED TO ENGAGE', 'CLEARED HOT', 'CONTINUE', 'SMACK'], a: 0, e: 'CLEARED HOT gilt für Type 1 und 2. SMACK darf in CAS nicht verwendet werden.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 5']]
  });

  S.push({
    id: 'e6',
    title: 'Beispiel 6 – Type 3, BOC mit Bomber auf ein Linienziel',
    tags: ['Type 3', 'BOC', 'B-52', 'Linienziel'],
    intro: '<p>JTAC <strong>Jaguar 11</strong> erhält Störfeuer von einer starken Feindkraft im dichten Dschungel nordwestlich eines Flusses. Absicht des Kommandeurs: 30 Minuten ununterbrochener Bombenteppich, danach Übersetzen. Es kommt eine B-52H (<strong>Doom 45</strong>).</p>',
    lines: [
      ['JTAC', 'Doom 45, this is Jaguar 11, I am part of a company-sized element approximately 1700 meters southeast of a large river. Currently receiving fire from a large enemy force located in dense jungle tree line northwest of river. Enemy oriented southwest-to-northeast line along river approximately 100-meters wide. Ground commander’s intent to disrupt the enemy with continuous bombardment for next 30 minutes. After bombardment, commander intends to assault across river. Advise when ready for game plan.'],
      ['AIR', 'Doom 45, ready.'],
      ['JTAC', 'Type 3, bomb on coordinate, MK-84s and MK-82s, instantaneous fuzing, be advised line 6 will be a set of 2, six-digit grids to define a linear target, advise when ready for 9-line.'],
      ['AIR', 'Doom 45, ready.'],
      ['JTAC', 'Mazda, 045, 15.1.'],
      ['JTAC', 'Elevation, 250 feet, Enemy troops in tree line, 19P HM 267 169 to 19P HM 272 173.'],
      ['JTAC', 'No mark, Southeast 1700, Egress back to Mazda, block 24 to 25, advise when ready for remarks.'],
      ['AIR', 'Doom 45, ready for remarks.'],
      ['JTAC', 'Final attack heading 020 through 070.'],
      ['AIR', 'Doom 45, elevation 250 feet, Line 6, from 19P HM 267 169 to 19P HM 272 173. Final attack headings 020 through 070.'],
      ['JTAC', 'Doom 45, good readback, CLEARED TO ENGAGE time 15-45.'],
      ['AIR', 'Doom 45, COMMENCING ENGAGEMENT.'],
      ['JTAC', 'Jaguar 11.'],
      ['note', 'Doom 45 bombardiert die Baumlinie 30 Minuten lang mit mehreren Anflügen und passt Munition und Abstand an die Absicht des Kommandeurs an.'],
      ['AIR', 'Doom 45, ENGAGEMENT COMPLETE. Proceeding back to Mazda.'],
      ['JTAC', 'Jaguar 11, copy all, proceed to Mazda block 24-25, standby BDA.']
    ],
    points: [
      'Linienziel: Line 6 als zwei Koordinaten (Anfang und Ende) – im Game Plan angekündigt.',
      'Die FAH 020–070 liegt parallel zur Ausrichtung des Ziels (Südwest–Nordost) und damit parallel zu den eigenen Kräften.',
      'Bei BOC ist die Korrelation mit dem Readback abgeschlossen; die Freigabe folgt direkt danach.'
    ],
    qs: [
      { q: 'Was ist an Line 6 in diesem Beispiel besonders?', o: ['Zwei 6-stellige Koordinaten beschreiben ein Linienziel', 'Line 6 wird weggelassen', 'Line 6 ist ein Versatz von einem Bezugspunkt', 'Line 6 kommt erst nach den Remarks'], a: 0, e: 'Für Linienziele: Anfangs- und Endpunkt bzw. Mittelpunkt, Ausrichtung und Länge.' },
      { q: 'Welcher Call ist bei Type 3 nach Abschluss Pflicht?', o: ['ENGAGEMENT COMPLETE', 'WINCHESTER', 'OFF', 'RIFLE'], a: 0, e: 'ENGAGEMENT COMPLETE ist der Pflicht-Call der Besatzung am Ende des Type-3-Einsatzes.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 6']]
  });

  S.push({
    id: 'e7',
    title: 'Beispiel 7 – Type 3, BOT mit Kampfhubschraubern und SEAD',
    tags: ['Type 3', 'BOT', 'AH-1', 'Battle Position', 'Non-standard SEAD'],
    intro: '<p>JTAC <strong>Dealer 22</strong> ist bei einer Infanteriekompanie in Verteidigung am Südostrand des Flugplatzes Trident. Eine leichte Panzerkompanie (6 BRDM und abgesessene Infanterie) nähert sich 2.000 m östlich, eine ZU-23 steht etwa 1.500 m südlich davon. Eine Batterie unterstützt. Wolkendecke 2.000 ft. Zwei AH-1 (<strong>Venom 41</strong>) kommen.</p>',
    lines: [
      ['AIR', 'Dealer 22, Venom 41, 12 km SW at Cherubs 8.'],
      ['JTAC', 'Venom 41, Dealer 22, proceed to HA Nancy ANGELS 2 and below, you are the only aircraft on station. ZU-23 located approximately 2500 meters southeast of Trident airfield. Advise established, check-in.'],
      ['AIR', 'Venom 41 established HA Nancy ANGELS 2 and below, mission number AX 2041, two AH-1s, each aircraft has three AGM-114K2A, fourteen 2.75” HE rockets, and 250 rounds of 20mm. VDL capable, codes 1780 for Venom 41 and 1810 for Venom 42. 1+00 PLAYTIME, ABORT code none.'],
      ['JTAC', 'Dealer 22, copy. SITREP A to follow. Only known threat is the previously described ZU-23. Enemy mechanized light armored company approaching our position from east consisting of 6 BRDMs and dismounted troops. Friendlies in static position in southeast portion of Trident airfield. Gun Position 3, in support, gun target line 130. High-tension power lines west of target running north to south and rapidly rising terrain east of targets. Advise when ready for game plan.'],
      ['AIR', 'Venom 41, ready.'],
      ['JTAC', 'Venom 41, Type 3 control, bomb on target, Employ 6 x K2A Hellfires from BP Viper on 6 x BRDMs. Expect approval forward of BP for Rockets and Guns on dismounted troops once SEAD deemed effective. Simultaneous attacks. Advise when ready for 9-line.'],
      ['AIR', 'Venom 41, ready.'],
      ['JTAC', 'Viper, 150, 3200. Elevation, 4759 feet, BRDMs and dismounted troops, LD 947 539. No mark. West 2000, egress, left, pull to the north, back to Viper ANGELS 2 and below when complete with rockets and guns. Advise when ready for remarks.'],
      ['AIR', 'Venom 41, ready to copy.'],
      ['JTAC', 'Make your attacks northwest to southeast. ZU-23, 1500 meters south, non-standard suppression from +2 to +5, gun target line 130. Once approved forward of BP, stay north of the 53 Northing. You will have two minutes to engage the 6 BRDMs with Hellfire from the BP prior to the first suppression impact. Standby for engagement window. Readback when able.'],
      ['AIR', 'Venom 41, elevation 4759 feet, LD 947 539, attacks northwest to southeast, stay north of the 53.'],
      ['JTAC', 'Venom 41, good readback.'],
      ['AIR2', 'Venom 42, elevation 4759 feet, LD 947 539, attacks northwest to southeast, stay north of the 53.'],
      ['JTAC', 'Venom 42, good readback. Venom flight proceed to BP Viper for talk on.'],
      ['AIR', 'Venom 41, WILCO ready for talk-on.'],
      ['JTAC', 'Venom flight, call CONTACT on Trident airfield.'],
      ['AIR', 'Venom 41, CONTACT Trident airfield.'],
      ['JTAC', 'From the southernmost tip of the runways, you should see a large, light-colored wash with vehicle tracks leading southeast from the airfield.'],
      ['AIR', 'Venom 41, CONTACT several vehicle tracks and a wash leading southeast from the south portion of runways.'],
      ['JTAC', 'Using shortest runway length as one unit of measure. The target area is approximately two units of measure southeast of airfield along that light-colored wash. The BRDMs are oriented north-to-south in line and slowly traveling west. Northern vehicle is in the wash.'],
      ['AIR', 'Venom 41, TALLY.'],
      ['AIR2', 'Venom 42, TALLY.'],
      ['JTAC', 'Venom 41 flight, sort north-to-south due to winds.'],
      ['JTAC', 'Venom 41 flight, CLEARED TO ENGAGE time 40 through 45.'],
      ['AIR', 'Venom 41, engagement window 40 through 45.'],
      ['AIR', 'Venom 41 and 42, COMMENCING ENGAGEMENT.'],
      ['JTAC', 'Suppression in the air.'],
      ['note', 'Bis Minute 42 bekämpfen die AH-1 die BRDM mit Hellfire aus der BP.'],
      ['JTAC', 'Suppression effective. Venom 41 flight, approved forward of BP for Rockets and Guns.'],
      ['AIR', 'Venom 41, flight PUSHING.'],
      ['AIR', 'Venom 41 flight, ENGAGEMENT COMPLETE.'],
      ['JTAC', 'Venom 41 flight, left pull back to Viper ANGELS 2 and below. Standby BDA.'],
      ['JTAC', 'Venom 41, Mission successful, 6 BRDMs destroyed, unknown enemy KIA. You are the only aircraft on station. Proceed HA Nancy ANGELS 2 and below, stay north of Viper en route Nancy, contact Blacklist.']
    ],
    points: [
      'Hubschrauber: Line 1 ist die BP, Line 3 in Metern (3200).',
      'Non-standard SEAD: Unterdrückung von +2 bis +5, damit die Hellfire-Schüsse vorher ungestört laufen.',
      'Die Freigabe, die BP zu verlassen („approved forward of BP“), ist eine Restriction.',
      'Talk-on mit selbst definierter Maßeinheit („shortest runway length as one unit of measure“).'
    ],
    qs: [
      { q: 'In welcher Einheit steht Line 3 für Hubschrauber aus einer BP?', o: ['Meter', 'Seemeilen auf eine Nachkommastelle', 'Fuß', 'Kilometer auf eine Nachkommastelle'], a: 0, e: 'Line 3 für Hubschrauber: Meter vom Mittelpunkt der BP zum Ziel, auf 100 m.' },
      { q: 'Warum ist „approved forward of BP“ wichtig?', o: ['Die Genehmigung, die BP zu verlassen, ist eine Restriction und steuert die Annäherung an das Ziel', 'Es ist die Freigabe zum Waffeneinsatz', 'Es ersetzt den Readback', 'Es beendet den Type-3-Einsatz'], a: 0, e: 'Die Genehmigung zum Verlassen der BP gehört zu den Restrictions im CAS-Brief.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 7']]
  });

  S.push({
    id: 'e8',
    title: 'Beispiel 8 – Visueller Versatz von einem Bezugspunkt',
    tags: ['Type 2', 'BOT', 'Stadtgebiet', 'Korrelation vor dem Brief'],
    intro: '<p>JTAC <strong>Spartan 03</strong> ist mit einem Spezialkräfte-Trupp (<strong>Red Bull</strong>) zu Fuß auf dem Weg zu einer vermuteten Sprengfallen-Werkstatt in einer Stadt. <strong>Wake 71</strong> gibt Überwachung, neutraler Sensor-Posture. Plötzlich starkes Feuer von einem Technical im Osten.</p>',
    lines: [
      ['JTAC', 'Wake 71, Spartan 03, currently receiving heavy enemy fire from technical vehicle to east. All friendlies on Gas Station and north of Baseline, call CONTACT on intersection.'],
      ['AIR', 'Wake 71, CONTACT.'],
      ['JTAC', 'Wake 71, from intersection of Gas Station and Baseline, SLEW east on Baseline approximately 200 yards. Single technical vehicle on south side of Baseline parked in alleyway. Call CONTACT.'],
      ['AIR', 'Wake 71, from friendly position moving east on Baseline, 5 vehicles on road within 300 meters. Three parked on north side and two on south. Both vehicles on south side of road in alleyways and have personnel moving around them.'],
      ['JTAC', 'Call CONTACT on the westernmost of two vehicles parked on south side of Baseline road.'],
      ['AIR', 'Wake 71, CONTACT.'],
      ['JTAC', 'Confirm this vehicle is first vehicle parked in alleyway on south side of road from friendly position.'],
      ['AIR', 'Affirm.'],
      ['JTAC', 'Which direction is vehicle facing?'],
      ['AIR', 'Vehicle is facing north. It is either a pick-up or flatbed truck with two personnel in back. Three more personnel moving just south of truck in alleyway.'],
      ['JTAC', 'Pick-up truck in alleyway with personnel in back is target. Label target pick-up truck Technical 1. Advise when ready for game plan.'],
      ['AIR', 'Wake 71, CAPTURED technical 1, ready.'],
      ['JTAC', 'Type 2, bomb on target, best weapons and fuzing from Wake 71, advise when ready for 9-line.'],
      ['AIR', 'Wake 71, ready.'],
      ['JTAC', 'Alpha 8. Elevation, 257 feet, Enemy personnel and Technical 1, 200 meters east of intersection of Gas Station and Baseline roads.'],
      ['JTAC', 'No mark, West 300, Egress back to ALPHA 8, block 15 to 16. Advise when ready for remarks.'],
      ['AIR', 'Wake 71, ready.'],
      ['JTAC', 'Final attack heading 180 plus-or-minus 20. Request IP inbound and IN with heading. Push when able. Readback when able.'],
      ['AIR', 'Wake 71, 257 feet, 200 meters east of intersection of Gas Station and Baseline roads, located at LB 4261 9864. Final attack heading 180 plus-or-minus 20. Wake 71 will be delivering 1 x GBU 12.'],
      ['note', 'Weil Line 6 keine Koordinate enthielt, liest die Besatzung zusätzlich eine grobe Koordinate zurück – als Gegenprobe für den JTAC und für die Feuerfreigabe.'],
      ['JTAC', 'Wake 71, good readback. Push when able, we are still receiving effective fire.'],
      ['AIR', 'Wake 71, IP inbound.'],
      ['JTAC', 'Wake 71, CONTINUE.'],
      ['AIR', 'Wake 71, IN heading 180.'],
      ['JTAC', 'Wake 71, CLEARED HOT.'],
      ['AIR', 'Wake 71, one AWAY 27 seconds.'],
      ['note', 'Der JTAC warnt Red Bull: 27 Sekunden bis zum Einschlag, in Deckung gehen.'],
      ['AIR', 'Good impact.'],
      ['JTAC', 'Wake 71, good hits, target destroyed. We are no longer receiving effective fire.']
    ],
    points: [
      'Korrelation schon vor dem Brief, dann im Brief „Alpha 8“ – Lines 2 und 3 entfallen wegen des Keyhole.',
      'Line 6 als Versatz von einem Bezugspunkt („200 meters east of intersection …“).',
      'Eigene Kräfte ohne Koordinate über das Funknetz: „All friendlies on Gas Station and north of Baseline“.',
      'Markierte Ziele bekommen Namen („Technical 1“) – das vereinfacht alle weiteren Calls.'
    ],
    qs: [
      { q: 'Warum liest Wake 71 zusätzlich eine Koordinate zurück?', o: ['Line 6 war ein Versatz ohne Koordinate – die grobe Koordinate dient der Gegenprobe und Feuerfreigabe', 'Weil bei BOT immer eine Koordinate zurückgelesen wird', 'Weil der JTAC sie vergessen hat', 'Weil die GBU-12 eine Koordinate braucht'], a: 0, e: 'So kann der JTAC die erwartete Zielposition vergleichen und die letzte Entflechtung vornehmen.' },
      { q: 'Was bedeutet „SLEW east on Baseline approximately 200 yards“?', o: ['Den Sensor auf der Straße Baseline nach Osten schwenken', 'Nach Osten abfliegen', 'Die Rotte nach Osten staffeln', 'Den Laser nach Osten verschieben'], a: 0, e: 'SLEW: Sensor in die angegebene Richtung bewegen, meist mit Maßeinheit.' }
    ],
    src: [['jp3093', 'Anhang E, Beispiel 8']]
  });

  S.push({
    id: 'rw5',
    title: 'Hubschrauber-5-Line (Type 2, BOT)',
    tags: ['RW', '5-Line', 'Type 2', 'IR-Markierung'],
    intro: '<p>Der 5-Line ist der knappe CAS-Brief für Hubschrauber, die die eigene Truppe bereits kennen. Er ist eigenkräftebezogen, ohne Zeilennummern, und <strong>keine Freigabe</strong>. Restrictions sind Readback-Pflicht.</p>',
    lines: [
      ['JTAC', 'Deuce 31, Broadsword 11, 5-line, Type 2 control, BOT, rockets and guns, my position is checkpoint 295 marked by IR strobe, northwest 200, single technical vehicle marked by IR SPARKLE, make all attacks over my right shoulder, left pull, keep all effects of fires west of MSR Clovis.'],
      ['AIR', 'Deuce 31 copies over your right shoulder, left pull, keep all effects of fires west of MSR Clovis, pushing.'],
      ['JTAC', 'Deuce 31, CONTINUE.'],
      ['AIR', 'Deuce 31 and flight, VISUAL, TALLY, IN.'],
      ['JTAC', 'Deuce 31 and flight, CLEARED HOT.']
    ],
    points: [
      'Reihenfolge: Observer/Warning Order/Game Plan – Friendly Location/Mark – Target Location – Target Description/Mark – Remarks/Restrictions.',
      'Line 3 vom JTAC aus: „northwest 200“ (Richtung und Meter), nicht vom Ziel aus wie Line 8 im 9-Line.',
      'Die Besatzung liest die Restrictions zurück und fliegt sofort an („pushing“).',
      'Bei einer Bodenmarkierung mit IR muss die Besatzung VISUAL (eigene Truppe) und TALLY bzw. CONTACT SPARKLE melden.'
    ],
    qs: [
      { q: 'Was liest die Besatzung beim 5-Line zurück?', o: ['Die Restrictions', 'Alle fünf Zeilen', 'Nur die Zielbeschreibung', 'Nichts – der 5-Line ist die Freigabe'], a: 0, e: 'Restrictions (z. B. FAH, ACAs, Danger Close, TOT) sind Readback-Pflicht; der 5-Line ist keine Freigabe.' },
      { q: '„northwest 200“ in Line 3 bedeutet …', o: ['Das Ziel liegt 200 m nordwestlich der Position des JTAC', 'Die eigenen Truppen liegen 200 m nordwestlich des Ziels', 'Anflug aus Nordwest, 200 ft', 'Halten 200 m nordwestlich'], a: 0, e: 'Der 5-Line ist eigenkräftebezogen: Line 3 gibt die Zielposition von der eigenen Position aus an.' }
    ],
    src: [['jp3093', 'Kap. III, Abb. III-27']]
  });
})();
