/* Spickzettel als Kniebrett-Karten. rb: true = Pflicht-Readback nach JP 3-09.3. */
(function () {
  'use strict';
  var S = window.LP.spick;

  S.push({
    title: 'CAS Execution Template', note: 'JP 3-09.3',
    lines: [
      { n: '1', t: 'Routing / Safety of Flight', d: 'Halten, andere Lfz, Bedrohung, Wetter' },
      { n: '2', t: 'Check-in', d: 'MNPOPCA' },
      { n: '3', t: 'Situation Update', d: 'knapp, auftragsbezogen' },
      { n: '4', t: 'Game Plan', d: 'Type + BOT/BOC (+ Wirkung, Munition, Abstand)' },
      { n: '5', t: 'CAS Brief', d: '3 × 3 Zeilen' },
      { n: '6', t: 'Remarks / Restrictions' },
      { n: '7', t: 'Readbacks', d: '4, 6, Restrictions' },
      { n: '8', t: 'Correlation', d: 'bei jedem Angriff' },
      { n: '9', t: 'Attack', d: 'IP inbound · IN · Freigabe/Abort' },
      { n: '10', t: 'Assess', d: 'Reattack?' },
      { n: '11', t: 'BDA', d: 'SALTR' },
      { n: '12', t: 'Routing / Safety of Flight', d: 'Abflug: Punkt + Höhenband' }
    ],
    src: [['jp3093', 'Kap. V, Abb. V-1']]
  });

  S.push({
    title: 'Check-in (MNPOPCA)', note: 'Lfz → JTAC',
    lines: [
      { n: 'M', t: 'Mission Number' },
      { n: 'N', t: 'Number / Type of Aircraft', d: '„2 by F/A-18C“' },
      { n: 'P', t: 'Position / Altitude', d: '„20 nm north of Ford, block 20-21“' },
      { n: 'O', t: 'Ordnance', d: 'inkl. Lasercodes, Zünder' },
      { n: 'P', t: 'Playtime', d: '„ONE PLUS THIRTY“' },
      { n: 'C', t: 'Capabilities', d: 'FAC(A), Sensoren, Link 16, VDL, SITREP, Kartenversion' },
      { n: 'A', t: 'Abort Code', d: 'ohne Code: „ABORT, ABORT, ABORT“' }
    ],
    foot: 'Bei laufendem Angriff: „Hold your check-in, attack in progress“.',
    src: [['jp3093', 'Kap. V, Abb. V-4']]
  });

  S.push({
    title: 'Game Plan und 9-Line', note: 'keine Zeilennummern senden (NATO: Titel!)',
    lines: [
      { n: 'GP', t: 'Type 1/2/3 · BOT/BOC · (Wirkung, Munition, Zünder, Abstand)', d: '„… advise when ready for 9-line“' },
      { n: '1', t: 'IP / BP' },
      { n: '2', t: 'Heading (° mag IP→Ziel) / Offset' },
      { n: '3', t: 'Distance', d: 'Jet: NM x,x · RW: m auf 100' },
      { n: '4', t: 'Elevation', d: 'ft MSL (sonst Bezug nennen)', rb: true },
      { n: '5', t: 'Description' },
      { n: '6', t: 'Location', d: 'Grid, Lat/Long, Versatz', rb: true },
      { n: '7', t: 'Mark / Terminal Guidance', d: 'Laser: Rufzeichen + Code' },
      { n: '8', t: 'Friendlies', d: 'VOM ZIEL: Richtung + Meter (NATO: Readback laut JP)' },
      { n: '9', t: 'Egress' },
      { n: 'R', t: 'Remarks / *Restrictions', rb: true }
    ],
    foot: 'Lines 1–3 entfallen: „From the overhead“ bzw. „Lines 1-3 N/A“, dann „Elevation …“.',
    src: [['jp3093', 'Kap. V, Abb. V-9']]
  });

  S.push({
    title: 'Remarks und Restrictions', note: 'Reihenfolge empfohlen',
    lines: [
      { n: 'R1', t: 'LTL (bei Bodenbeleuchter) / PTL' },
      { n: 'R2', t: 'Munition / Wirkung', d: 'falls nicht im Game Plan' },
      { n: 'R3', t: 'Bedrohung', d: 'Typ, Richtung/Entfernung von Line 6, SEAD-Art, GTL' },
      { n: 'R4', t: 'Weitere Feuer' },
      { n: 'R5', t: 'Calls', d: 'IP inbound, IN mit Kurs, Zeit bis Roll-in' },
      { n: 'R6', t: 'Weiteres', d: 'Gefahren, Wetter, TLE CAT, NVG, Eigenmarkierung, ROE' },
      { n: '*', t: 'Danger Close + Initialen', rb: true },
      { n: '*', t: 'ACA (formal/informell)', rb: true },
      { n: '*', t: 'FAH', d: 'so wenig einschränkend wie möglich', rb: true },
      { n: '*', t: 'Seitliche / Höhenstaffelung', d: 'Höhen in ft MSL', rb: true },
      { n: '*', t: 'Freigabe aus der BP (RW)', rb: true },
      { n: '*', t: 'TOT / TTT', d: 'als Letztes', rb: true },
      { n: '*', t: 'PLA-Punkt', rb: true }
    ],
    src: [['jp3093', 'Kap. V, Abs. 2b(6)']]
  });

  S.push({
    title: 'Kontrollart und Methode', note: 'unabhängig voneinander',
    lines: [
      { n: 'T1', t: 'JTAC sieht Ziel UND Lfz, beurteilt Geometrie', d: 'nicht für GPS/INS-Waffen' },
      { n: 'T2', t: 'Lfz beim Auslösen ODER Ziel nicht sichtbar', d: 'Zieldaten von anderem Mittel mit Echtzeit-Info' },
      { n: 'T3', t: 'Mehrere Angriffe, eine Freigabe, Restrictions', d: 'Zeit, Raum, FAH, Zielart' },
      { n: 'BOT', t: 'Besatzung erfasst das Ziel', d: 'TALLY / CAPTURED / CONTACT · Readback: Lead' },
      { n: 'BOC', t: 'Waffe auf die Koordinate', d: 'nie Erfassung nötig · Readback: alle mit Waffe, aus System' }
    ],
    foot: 'Wechsel der Kontrollart nur vor IN (T1/T2) bzw. COMMENCING ENGAGEMENT (T3) – sonst Abort und neuer Brief.',
    src: [['jp3093', 'Kap. III, Abs. 12, Abb. III-7']]
  });

  S.push({
    title: 'Clearance Calls', note: '„CLEARED“ nur bei echtem Waffeneinsatz',
    lines: [
      { n: 'T1/2', t: 'CLEARED HOT', d: 'Freigabe für diesen Anflug' },
      { n: 'T3', t: 'CLEARED TO ENGAGE', d: 'innerhalb der Restrictions' },
      { n: 'alle', t: 'CONTINUE', d: 'weiter, keine Änderung der Freigabe' },
      { n: 'alle', t: 'CONTINUE DRY', d: 'weiter, kein Waffeneinsatz („Type 3, CONTINUE DRY“)' },
      { n: 'alle', t: 'ABORT', d: 'abbrechen (mit Code: „ABORT DELTA ×3“)' }
    ],
    foot: 'Nach IN: TAD frei halten bis Freigabe oder Abort. ABORT darf jeder rufen.',
    src: [['jp3093', 'Kap. III, Abb. III-6'], ['atp1021', 'Kap. I']]
  });

  S.push({
    title: 'RW-CAS-5-Line', note: 'eigenkräftebezogen, keine Freigabe',
    lines: [
      { n: '1', t: 'Observer / Warning Order / Game Plan', d: '„(Lfz), (JTAC), 5-line, Type _, BOT/BOC, Munition“' },
      { n: '2', t: 'Friendly Location / Mark', d: '„My position …, marked by …“' },
      { n: '3', t: 'Target Location', d: 'Richtung + Meter von dir, TRP, Grid' },
      { n: '4', t: 'Target Description / Mark' },
      { n: '5', t: 'Remarks / *Restrictions', d: 'FAH, ACA, Danger Close, TOT …', rb: true }
    ],
    foot: 'Army/SOF: „At my command“ anhängen, sonst fliegt die Besatzung nach dem Readback an.',
    src: [['jp3093', 'Kap. III, Abb. III-27']]
  });

  S.push({
    title: 'JFO Target Brief', note: 'JFO → JTAC',
    lines: [
      { n: '4', t: 'Elevation', d: 'beginnt mit „Line 4: …“ – nie weglassen' },
      { n: '5', t: 'Description' },
      { n: '6', t: 'Location' },
      { n: '7', t: 'Mark', d: 'auch Art der Korrelation' },
      { n: '8', t: 'Friendlies', d: 'nie weglassen' },
      { n: 'R', t: '„Advise ready for remarks“', d: 'FAH, LTL/PTL, Bedrohung, SEAD, GTL, Restrictions, TOT' }
    ],
    foot: 'Fehlende Zeile: Nummer + „None“/„Unknown“. JTAC liest zurück, JFO: „readback correct“. Keine Freigabe durch den JFO.',
    src: [['jp3093', 'Kap. V, Abb. V-16']]
  });

  S.push({
    title: 'Call for Fire', note: '6 Elemente, 3 Übertragungen',
    lines: [
      { n: '1', t: 'Observer ID + Warning Order', d: 'Auftragsart, Größe, Methode der Zielortung' },
      { n: '2', t: 'Target Location', d: 'Grid · Polar · Shift (L/R m, ADD/DROP 100, UP/DOWN 5)' },
      { n: '3', t: 'Description · Method of Engagement · Method of Fire and Control', d: 'DANGER CLOSE: 600 m (Art./Mrs.) · 750 m (5-Zoll, TLAM)' }
    ],
    foot: 'Seitenkorrektur = Strich × OT-Faktor, auf 10 m, entgegen der Beobachtung. SHORT → ADD, OVER → DROP.',
    src: [['atp30930', 'Kap. 4–5']]
  });

  S.push({
    title: 'BDA und INFLTREP',
    lines: [
      { n: 'S', t: 'Size', d: 'Anzahl, Art' },
      { n: 'A', t: 'Activity', d: 'Bewegung, stehend, eingegraben' },
      { n: 'L', t: 'Location' },
      { n: 'T', t: 'Time' },
      { n: 'R', t: 'Remarks', d: 'Munition, Schaden, Empfehlung, Mission Number, Auftrag erfüllt' },
      { n: 'IF', t: 'INFLTREP (Lfz)', d: 'Rufzeichen · Mission No. · Ort · TOT · Ergebnis · Bemerkungen' }
    ],
    foot: 'Mindestens SUCCESSFUL / UNSUCCESSFUL / UNKNOWN. „If you do not see it, do not report it.“',
    src: [['jp3093', 'Kap. V, Abs. 2b(11), Abb. V-12']]
  });

  S.push({
    title: 'TLE-Kategorien', note: 'CE90',
    lines: [
      { n: 'I', t: '0–6 m', d: '0–20 ft' },
      { n: 'II', t: '7–15 m', d: '21–50 ft' },
      { n: 'III', t: '16–30 m', d: '51–100 ft' },
      { n: 'IV', t: '31–91 m', d: '101–300 ft' },
      { n: 'V', t: '92–305 m', d: '301–1.000 ft' },
      { n: 'VI', t: 'über 305 m', d: 'über 1.000 ft' }
    ],
    foot: 'MGRS: 6 Ziffern = 100 m · 8 = 10 m · 10 = 1 m (Präzision, nicht Genauigkeit).',
    src: [['jp3093', 'Kap. III, Abb. III-5']]
  });

  S.push({
    title: 'Laser', note: 'Codes immer 4-stellig',
    lines: [
      { n: '±10°', t: 'Sicherheitszone um Linie Ziel–Beleuchter', d: 'nicht hineinfliegen' },
      { n: '±45°', t: 'bevorzugte Angriffszone' },
      { n: '±60°', t: 'Angriffszone (120°)' },
      { n: '1', t: 'JTAC: Kurs + „STARE (Code), (Punkt)“' },
      { n: '2', t: 'Lfz: „TEN SECONDS“ → „LASER ON“' },
      { n: '3', t: 'Beleuchter: „LASING (Code)“' },
      { n: '4', t: 'Lfz: „SPOT“ → „CEASE LASER“', d: 'SPOT ≠ Korrelation' },
      { n: '5', t: 'Korrelation → „CAPTURED“' }
    ],
    foot: 'LTL in den Remarks (° mag). NEGATIVE LASER: Aufbau, Code, Position prüfen. DEADEYE = Beleuchter ausgefallen.',
    src: [['jp3093', 'Kap. III, Abb. III-9, III-21']]
  });

  S.push({
    title: 'IR und Markierung',
    lines: [
      { n: 'IR', t: 'SPARKLE · SNAKE (Acht) · PULSE (blinken) · STEADY · CEASE SPARKLE' },
      { n: 'IR', t: 'ROPE (um das Lfz – NVG-Schaden möglich)' },
      { n: 'IR', t: 'CONTACT SPARKLE · MATCH SPARKLE' },
      { n: 'Sicht', t: 'VISUAL/BLIND (eigene) · TALLY/NO JOY (Feind)' },
      { n: 'Sicht', t: 'CONTACT/LOOKING (Bezugspunkt) · CAPTURED (Sensor)' },
      { n: 'Mark', t: 'IDF-Marke: ≤100 m ideal, ≤300 m meist ausreichend', d: '30–45 s vor TOT; IR 20–30 s' }
    ],
    foot: 'Nur IR vom Boden: Besatzung meldet VISUAL und TALLY bzw. CONTACT SPARKLE vor der Freigabe.',
    src: [['jp3093', 'Kap. III, Abb. III-20, III-22']]
  });

  S.push({
    title: 'Faustformeln', note: 'Kopfrechnen',
    lines: [
      { n: 'ft', t: 'Meter × 3,281', d: '≈ m × 3 + 10 %' },
      { n: 'NM', t: 'km ÷ 1,852', d: '≈ km ÷ 2 + 8 %' },
      { n: '₥', t: 'Grad × 17,8', d: '6400 Strich = 360°' },
      { n: 'W', t: 'W = R × m', d: 'm · km · Strich' },
      { n: 'L8', t: 'Line 8 = Richtung VOM ZIEL', d: 'Ziel nordöstlich von dir → „Southwest …“' },
      { n: 'FAH', t: 'Himmelsrichtung = ±45°', d: 'N→S = 135–225' },
      { n: 'SEAD', t: 'Jet 8 NM/min · A-10 5 NM/min · RW 4 km/min' },
      { n: 'KH', t: 'Keyhole: A N · B E · C S · D W · E Echo' }
    ],
    src: [['jp3093', 'Kap. V, Abb. V-2'], ['atp30930', 'Kap. 3']]
  });

  S.push({
    title: 'Talk-on (FIDO)',
    lines: [
      { n: 'F', t: 'From a point', d: 'gut erkennbar' },
      { n: 'I', t: 'In a direction', d: 'Himmelsrichtung' },
      { n: 'D', t: 'Distance', d: 'vereinbarte Maßeinheit' },
      { n: 'O', t: 'Object seen' },
      { n: '2:1', t: 'zwei Anweisungen, eine Kontrollfrage' },
      { n: 'max 2', t: 'Himmelsrichtungen pro Spruch' },
      { n: 'VDL', t: 'SLEW oben/unten/links/rechts', d: 'Sparkle-Walk-on: Himmelsrichtungen!' }
    ],
    foot: '„The third vehicle is your target“ – nicht „that’s your target“.',
    src: [['jp3093', 'Kap. V, Abs. 2b(8)']]
  });

  S.push({
    title: 'FSCM', note: 'permissiv / restriktiv',
    lines: [
      { n: 'P', t: 'CFL', d: 'Steilfeuer jenseits frei' },
      { n: 'P', t: 'FSCL', d: 'keine Grenze, keine FFA' },
      { n: 'P', t: 'FFA', d: 'Feuer ohne weitere Koordinierung' },
      { n: 'P', t: 'Kill Box', d: '3D, mit ACM' },
      { n: 'R', t: 'NFA', d: 'kein Feuer (2 Ausnahmen)' },
      { n: 'R', t: 'RFA', d: 'Beschränkungen' },
      { n: 'R', t: 'RFL', d: 'zwischen aufeinander zu bewegenden Kräften' },
      { n: 'ACA', t: 'formal (ACO) / informell', d: 'Staffelung: seitlich, Höhe, beides, Zeit' }
    ],
    src: [['jp3093', 'Kap. III, Abs. 14a']]
  });
})();
