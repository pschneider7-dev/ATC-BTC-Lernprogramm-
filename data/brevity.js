/* Brevity-Begriffe nach ATP 1-02.1 „Multi-Service Brevity Codes“ (25. April 2025), Kap. I – CAS-relevante Auswahl.
   nato: '' = gleiche Bedeutung wie NATO-Brevity, '*' = NATO-Bedeutung weicht ab, '**' = kein NATO-Brevity-Begriff.
   Hat ein Begriff mehrere Bedeutungen mit unterschiedlicher Kennzeichnung, gilt das Zeichen für die CAS-Bedeutung (siehe note). */
(function () {
  'use strict';
  var B = window.LP.brevity;
  function add(cat, list) { list.forEach(function (x) { B.push({ t: x[0], nato: x[1], de: x[2], en: x[3], note: x[4] || '', cat: cat }); }); }

  add('Freigabe und Angriff', [
    ['ABORT', '', 'Handlung abbrechen bzw. Angriff vor dem Waffeneinsatz, Ereignis oder Auftrag beenden.', 'Cease action or terminate the attack prior to weapons release or event or mission.', 'Ohne gebrieften Code: „ABORT, ABORT, ABORT“.'],
    ['CLEARED HOT', '', 'Waffenfreigabe durch JTAC/FAC(A) bei Type 1 und Type 2 für den Angriff auf ein bestimmtes Ziel.', 'Used by a JTAC/FAC(A) during Type 1 and 2 control when granting weapons release clearance to an aircraft attacking a specific target.'],
    ['CLEARED TO ENGAGE', '**', 'Waffenfreigabe bei Type 3 für ein oder mehrere Ziele innerhalb der vom JTAC/FAC(A) gesetzten Parameter.', 'Used by a JTAC/FAC(A) during Type 3 control, granting weapons release clearance within the parameters prescribed.'],
    ['CONTINUE', '', 'Laufendes Manöver fortsetzen – keine Änderung der Freigabe zum Waffeneinsatz.', 'Continue present maneuver, does not imply a change in clearance to engage or expend ordnance.'],
    ['CONTINUE DRY', '', 'Manöver fortsetzen, Waffeneinsatz nicht erlaubt (Type 1, 2 oder 3; bei Type 3 „Type 3, CONTINUE DRY“).', 'Continue present maneuver, ordnance release not authorized. Simulated deliveries may be performed.'],
    ['ENGAGEMENT COMPLETE', '**', 'Pflicht-Call der Besatzung bei Type 3: Waffeneinsatz abgeschlossen.', 'Mandatory call from the attack aircraft to the JTAC/FAC(A) during Type 3 control indicating completion of ordnance release.'],
    ['IN [direction]', '', 'Beginn der Endanflugphase eines Luft-Boden-Angriffs. Gegenteil: OFF.', 'Entering terminal phase of an air-to-ground attack. Opposite of OFF.', 'Mit FAH-Restriction wird die Richtung bzw. der Kurs mitgemeldet („IN heading 360“).'],
    ['OFF [direction]', '', 'Angriff beendet, Abflug in die angegebene Richtung.', 'Attack is terminated, and maneuvering to the indicated direction.'],
    ['SMACK', '', 'Freigabe für Waffeneinsatz auf Bodenziel-Koordinaten außerhalb von CAS.', 'Clearance to employ ordnance or fires on surface target coordinates.', 'Darf in einem CAS-Einsatz nicht verwendet werden.'],
    ['ENGAGE', '', 'Feuerleitbefehl: Einheiten auf ein bezeichnetes Ziel feuern lassen.', 'A fire control order used to direct or authorize units to fire on a designated target.', 'Nicht bei Type 1 oder 2 verwenden – dort CLEARED HOT, bei Type 3 CLEARED TO ENGAGE.'],
    ['HOT', '', 'Gebiet erwartet Feuer (eigenes oder feindliches); Waffeneinsatz beabsichtigt oder erfolgt.', 'Defined area is expected to receive fire. Ordnance employment intended or completed.'],
    ['COLD', '*', 'Gebiet erwartet kein Feuer (eigenes oder feindliches).', 'Defined area is not expected to receive fire (enemy or friendly).', 'A/S-Bedeutung 2 ist mit * gekennzeichnet.'],
    ['RIPPLE', '*', 'Zwei oder mehr Waffen werden kurz nacheinander ausgelöst.', 'Two or more munitions will be released or fired in close succession.'],
    ['BRACKET [direction]', '', 'Manöver auf entgegengesetzte Seiten des Ziels (seitlich oder vertikal).', 'Maneuver to a position on opposite sides, either laterally or vertically from the target.'],
    ['POP', '', 'Beginn des Steigflugs für einen Luft-Boden-Angriff.', 'Starting climb for A/S attack.'],
    ['BUGOUT [direction]', '', 'Absetzen von einem Gefecht oder Angriff ohne Absicht zurückzukehren.', 'Separation from a particular engagement, attack, or operation with no intent to reengage or return.'],
    ['KNOCK-IT-OFF', '', 'Alle Manöver, Angriffe und Übungstätigkeiten einstellen (nur Ausbildung).', 'Cease all air combat maneuvers, attacks, activities, or exercises (training use only).']
  ]);

  add('Sicht und Erfassung', [
    ['VISUAL', '', 'Eigenes Luftfahrzeug, eigene Bodenstellung oder eigenes Schiff in Sicht. Gegenteil: BLIND.', 'Sighting of a FRIENDLY aircraft or ground position or ship. Opposite of BLIND.'],
    ['BLIND', '', 'Kein Sichtkontakt zu eigenem Luftfahrzeug, Schiff oder eigener Bodenstellung.', 'No visual contact with FRIENDLY aircraft, ship, or ground position.'],
    ['TALLY', '', 'Ziel, nicht eigenes Luftfahrzeug oder feindliche Stellung in Sicht. Gegenteil: NO JOY.', 'Sighting of a target, non-friendly aircraft, or enemy position.'],
    ['NO JOY', '*', 'Kein Sichtkontakt zum Ziel bzw. BANDIT; auch: Funkverbindung kam nicht zustande.', 'Aircrew does not have visual contact with the TARGET or BANDIT; also: radio communications could not be established.'],
    ['CONTACT', '', 'Sichtung eines bestimmten Bezugspunkts bestätigt (visuell oder per Sensor); Sensorinformation an der genannten Position.', 'Acknowledges sighting of a specified reference point (either visually or via sensor).'],
    ['LOOKING', '', 'Besatzung hat Bodenobjekt, Bezugspunkt oder Ziel nicht in Sicht. Gegenteil: CONTACT.', 'Aircrew does not have the ground or surface object, reference point, or target in sight.'],
    ['CAPTURED', '*', 'Objekt ist mit dem Sensor erfasst und wird verfolgt.', '[target or object] CAPTURED: object has been acquired and is being tracked.'],
    ['HIT(S)', '*', 'Waffen haben die gewünschte Wirkung am beabsichtigten Ziel erzielt.', 'Weapons created the desired effects on the intended target.', 'Bedeutung 3; die Radar-Bedeutungen sind ohne Kennzeichnung.'],
    ['SPLASH (Treffer)', '', 'Treffer mit gültiger Waffenwirkung gegen ein Ziel beobachtet.', 'Hit observed with valid DWE against a target.'],
    ['CLEAN', '', 'Keine sichtbaren Gefechtsschäden (u. a.).', 'No visible battle damage.', 'Weitere Bedeutungen: keine Sensorinformation; keine Außenlasten.'],
    ['TIMEOUT', '**', 'Einschlag verdeckt und nicht bestätigt, obwohl die Flugzeit abgelaufen ist.', 'Munition impact is obscured and impact cannot be confirmed and time of flight has elapsed.'],
    ['WHAT LUCK', '', 'Frage nach den Ergebnissen eines Auftrags.', 'Request for results of missions or tasks.']
  ]);

  add('Laser und IR', [
    ['LASER ON', '', 'Aufforderung, mit dem Beleuchten zu beginnen.', 'Directive call to start lasing.'],
    ['LASING', '', 'Der Sprecher beleuchtet als Antwort auf LASER ON.', 'The speaker is firing the laser in response to LASER ON.'],
    ['SPOT', '', 'Reflektierte Laserenergie erfasst; auch: Plattform hat einen Laser Spot Tracker.', 'Acquisition of the reflected laser energy. Platform is laser spot tracker capable.', 'SPOT ist noch keine Korrelation.'],
    ['NEGATIVE LASER', '', 'Laserenergie nicht erfasst.', 'Laser energy has not been acquired.'],
    ['TEN SECONDS', '', 'In etwa zehn Sekunden kommt der ON-Call (z. B. LASER ON).', 'Standby for (weapon) ON call in approximately 10 seconds.'],
    ['SHIFT [direction]', '', 'Laser-, IR- oder Radarenergie bzw. Zielpunkt verlegen.', 'Shift laser, IR, radar, device energy, or aim point.'],
    ['CEASE [activity]', '*', 'Genannte Tätigkeit einstellen (z. B. CEASE LASER, CEASE SPARKLE).', 'Discontinue stated activity (e.g., CEASE BUZZER, LASER, SPARKLE, TORCH).'],
    ['DEADEYE', '', 'Laserbeleuchter ausgefallen.', 'Laser designator system inoperative.'],
    ['STARE [code, point]', '**', 'Laser-Spot-Suche bzw. -Tracker auf den Code in Bezug auf einen Bezugspunkt ansetzen.', 'Cue the laser spot search or tracker function on the specified laser code in relation to the specified reference point.'],
    ['BUDDY [LASE]', '*', 'Anfrage bzw. Meldung: Waffe wird von einer anderen Quelle als dem auslösenden Lfz gelenkt.', 'Request or informative call to have weapon guidance from a source other than delivering aircraft.'],
    ['SPARKLE', '', 'Ziel mit IR-Pointer markieren; auch: Plattform hat IR-Pointer.', 'Mark or marking target by IR pointer. Platform is IR pointer capable.'],
    ['SNAKE', '', 'IR-Pointer in einer Acht um das Ziel bewegen.', 'Oscillate an IR pointer in a figure eight about a target.'],
    ['PULSE', '', 'Position mit blinkender IR-Energie beleuchten.', 'Illuminate(ing) a position with flashing IR energy.'],
    ['STEADY', '', 'Bewegung des IR-Pointers anhalten.', 'Stop oscillation of IR pointer.'],
    ['ROPE', '', 'IR-Pointer kreisend um ein Lfz führen, damit es die eigene Bodenstellung findet.', 'Circling an IR pointer around an aircraft to help the aircraft identify the FRIENDLY ground position.', 'Vorsicht: kann Nachtsichtgeräte schädigen.'],
    ['MATCH [type]', '*', 'Angeforderte Markierungsart überlagern (z. B. MATCH SPARKLE, MATCH LASER).', 'Overlay requested target designator type.'],
    ['SUNSHINE', '', 'Ziel wird mit künstlicher Beleuchtung erhellt.', 'Illuminating target with artificial illumination.'],
    ['GOGGLES [on/off]', '**', 'Meldung: Nachtsichtbrillen auf bzw. ab.', 'An informative call that night-vision goggles are on/off.']
  ]);

  add('Sensor und Video', [
    ['SLEW', '**', 'Sensor in die angegebene Richtung bewegen, meist mit Maßeinheit („SLEW left one half screen“).', 'Move sensor in direction indicated (usually accompanied with a unit of measure).', 'VDL: links/rechts/oben/unten; Sparkle-Walk-on: Himmelsrichtungen.'],
    ['SET', '', 'Sensor wird nicht mehr bewegt, Besatzung wartet auf weitere Angaben.', 'No longer slewing sensor and awaiting further updates.', 'Bedeutung 3 („Overwatch-Lfz in Position“) ist **.'],
    ['HANDSHAKE', '', 'Video-Datenlink hergestellt.', 'Video data link established.'],
    ['HOLLOW', '*', 'Video-Datenlink verloren; allgemein: Datenlink-Nachricht nicht empfangen.', 'Lost video data link.', 'Die A/S-Bedeutung (Video) ist mit * gekennzeichnet.'],
    ['EXPECT HOLLOW [time]', '*', 'Videoempfang wird voraussichtlich eingeschränkt (Manöver, Gelände); Dauer in Minuten.', 'A condition will likely exist that limits video data link reception.'],
    ['DECLUTTER', '', 'Zielsymbolik ausblenden, damit das Bild besser zu sehen ist.', 'Request to remove targeting symbology to allow the user to see a better picture of the target area.'],
    ['SHADOW', '', 'Angegebenem Ziel folgen.', 'Follow indicated TARGET.'],
    ['STAKE', '*', 'Bezugspunkt für Luft-Boden-Zielarbeit; im Video gesetzte Marke als Bezugsrahmen.', 'Reference point for A/S targeting operations; a full-motion video system mark has been set.'],
    ['TRACK', '**', 'Auftrag, ein Objekt oder Gebiet mit Sensor oder Auge zu überwachen; auch Bewegungsrichtung.', 'Directive call assigning responsibility to an asset for maintaining sensor or visual observation of a defined object or area.'],
    ['SORT', '*', 'Zuweisung bestimmter Zielverantwortung.', 'Assignment of specific targeting responsibilities.'],
    ['MELD', '', 'Anderes Lfz soll seinen Sensor auf dieselbe Stelle richten.', 'Directive call to another aircraft to match sensor location.'],
    ['STATUS', '*', 'Frage nach Lage oder Stand der Aufgabe (Antwort z. B. CONTACT, CAPTURE, ENGAGED).', 'Request for amplifying information on current task or aircraft state.'],
    ['CHECK CAPTURE', '', 'Ziel wird anscheinend nicht mehr vom Sensor verfolgt.', 'Target appears to be no longer tracked by sensor.'],
    ['CHECK FOCUS', '', 'Sensorbild ist unscharf.', 'Sensor image appears to be out of focus.'],
    ['SQUIRTER', '**', 'Bodenobjekt von Interesse verlässt das Zielgebiet.', 'A ground-borne object of interest departing the objective area.'],
    ['DROP', '', 'Überwachung eines Ziels einstellen und Suche wieder aufnehmen.', 'Stop monitoring of specified emitter or target or GROUP and resume search responsibilities.'],
    ['POPEYE', '', 'In Wolken bzw. schlechter Sicht; auch: eingeschränkte EO/IR-Sicht durch die Atmosphäre.', 'Flying in clouds or an area of reduced visibility.', 'Bedeutung 2 (eingeschränkte EO/IR-Sicht) ist *.']
  ]);

  add('Munition und Treibstoff', [
    ['WINCHESTER', '', 'Keine Munition mehr.', 'No ordnance remaining.'],
    ['REMINGTON', '**', 'Keine Munition mehr außer Bordkanone bzw. Selbstschutz.', 'No ordnance remaining except gun or self-protection ammunition.'],
    ['RIFLE [number, time]', '*', 'Einsatz einer Luft-Boden-Waffe kurzer Reichweite (unter etwa 100 NM), optional Anzahl und Flugzeit.', 'Employment of short range air-to-surface munition.'],
    ['LONG RIFLE', '**', 'Einsatz einer Luft-Boden-Waffe großer Reichweite (ab etwa 100 NM) mit Antrieb.', 'Employment of long range air-to-surface munition with sustained propulsion.'],
    ['AWAY', '', 'Auslösen bzw. Start der genannten Waffe („1 AWAY“); mindestens Anzahl oder Waffentyp.', 'Release or launch of specified weapon.'],
    ['GUNS', '', 'Bordkanone wird eingesetzt.', 'Aircraft gun is being employed.'],
    ['MAGNUM', '', 'Start eines eigenen Anti-Radar-Flugkörpers.', 'Launch of FRIENDLY antiradiation missile.'],
    ['BINGO', '*', 'Vorgebriefter Treibstoffstand für die Rückkehr.', 'Prebriefed fuel state needed for recovery.'],
    ['JOKER', '*', 'Treibstoffstand oberhalb BINGO, bei dem Absetzen oder Beenden beginnen soll.', 'Fuel state above BINGO at which separation, BUGOUT, or event termination should begin.'],
    ['PLAYTIME', '', 'Verweildauer im Einsatzraum in Stunden plus Minuten („ONE PLUS THIRTY“).', 'Amount of time aircraft can remain on station, given in hours plus minutes.'],
    ['RED', '**', 'Waffen- oder Treibstoffstand reicht nicht mehr für den Auftrag.', 'Aircraft is at weapon and/or fuel state that is insufficient to continue execution of the mission.'],
    ['YELLOW', '**', 'Waffen- oder Treibstoffstand nähert sich dem, was für den Auftrag nicht mehr reicht.', 'Aircraft is at a weapon and/or fuel status that is approaching a level insufficient to continue the mission.']
  ]);

  add('Funk und Ablauf', [
    ['WILCO', '', 'Wird ausgeführt.', 'Will comply with received instructions.'],
    ['ROGER', '', 'Empfangen – sagt nichts über Ausführung.', 'Radio transmission received; does not indicate compliance or reaction.'],
    ['UNABLE', '', 'Kann wie angewiesen nicht ausgeführt werden.', 'Cannot comply as requested or directed.'],
    ['PUSH [channel]', '', 'Auf die genannte Frequenz wechseln; keine Bestätigung nötig.', 'Switch to designated frequency; no acknowledgment required.'],
    ['HEADS UP', '', 'Hinweis auf eine Aktivität von Interesse.', 'Alert of an activity of interest.'],
    ['AS FRAGGED', '*', 'Einheit handelt genau wie gebrieft bzw. geplant.', 'Unit or element will be performing exactly as briefed or scheduled.'],
    ['ROLEX', '*', 'Zeitplan-Verschiebung in Minuten für den ganzen Auftrag, immer später, immer bezogen auf die ursprüngliche Zeit.', 'Timeline adjustment in minutes for entire mission; always means later.'],
    ['STACK', '*', 'Anfrage nach allen Luftfahrzeugen und ihren zugewiesenen Höhenbändern im Gebiet.', 'Request all airborne players and their assigned altitude block in the specified area.', 'Bei FAC(A) zusätzlich als Aufgabe (BRIEF, STACK, MARK, CONTROL) – siehe JP 3-09.3.'],
    ['BEAD WINDOW', '*', 'Letzte Übertragung hat möglicherweise schutzbedürftige Informationen preisgegeben.', 'Last transmission potentially disclosed unauthorized information.'],
    ['IN THE BLIND', '**', 'Sendung ohne bestätigte Zweiwege-Verbindung, z. B. bei Störung.', 'Transmitting without having established two way communications with desired participants.'],
    ['BUZZER', '**', 'Elektronische Funkstörung.', 'Electromagnetic communications jamming.', 'Entspricht dem NATO-Begriff CHATTER.'],
    ['TIMBER', '', 'Link-16-Netz.', 'Link 16 Network.', 'TIMBER SWEET = Netz in Ordnung, TIMBER SOUR = Probleme beim Netzeintritt.'],
    ['TUMBLEWEED', '', 'Bitte um Information wegen eingeschränkten oder verlorenen Lagebewusstseins.', 'Request for information due to limited or loss of situational awareness.'],
    ['FENCE [IN/OUT]', '', 'Cockpitschalter vor Einflug in bzw. Ausflug aus dem Gefechtsgebiet setzen.', 'Set cockpit switches as appropriate before entering or exiting the combat area.']
  ]);

  add('Flug und Navigation', [
    ['ANGELS', '', 'Höhe eines eigenen Lfz in tausend Fuß über NN (MSL).', 'Height of FRIENDLY aircraft in thousands of feet from MSL.'],
    ['CHERUBS', '', 'Höhe eines eigenen Lfz in hundert Fuß über Grund (AGL).', 'Height of a FRIENDLY aircraft in hundreds of feet above ground level.'],
    ['ANCHOR [location]', '', 'Um einen bestimmten Punkt kreisen.', 'Orbit about a specific point.'],
    ['PUSHING', '', 'Verlässt den festgelegten Punkt.', 'Departing designated point.'],
    ['BUSTER', '', 'Mit höchster Dauerleistung fliegen.', 'Fly at maximum continuous speed.'],
    ['GATE', '', 'So schnell wie möglich fliegen (Nachbrenner bzw. maximale Leistung).', 'Fly as quickly as possible, using after-burner or maximum power.'],
    ['SAUNTER', '', 'Mit bester Reichweite bzw. Verweildauer fliegen.', 'Fly at best endurance.'],
    ['BULLSEYE', '', 'Festgelegter Bezugspunkt; Positionen als magnetische Peilung und Entfernung in NM davon.', 'An established reference point from which the position of an object can be referenced by bearing (magnetic) and range (NM).'],
    ['PIGEONS [bearing, range]', '', 'Magnetische Peilung und Entfernung in NM zum Heimatplatz.', 'Bearing in magnetic and range in nautical miles to HOME PLATE.'],
    ['VECTOR [heading]', '', 'Auf den angegebenen Kurs gehen.', 'Alter heading to indicated.'],
    ['JINK', '', 'Unvorhersehbares Manöver, um eine Zielerfassung zu stören.', 'Perform an unpredictable maneuver to negate a tracking solution.'],
    ['DEFENDING [direction]', '', 'Lfz ist in der Verteidigung und manövriert gegen eine Radarbedrohung.', 'Aircraft is in a defensive position and maneuvering with reference to a radar threat.']
  ]);

  add('Bedrohung und Kennung', [
    ['SAM [direction]', '', 'Boden-Luft-Flugkörper im Flug oder Start gesichtet; möglichst mit Position.', 'Visual acquisition of a SAM in flight or a SAM launch; should include position.'],
    ['SINGER [type, direction]', '', 'Radarwarnempfänger zeigt einen SAM-Start an.', 'Radar warning receiver indication of SAM launch.'],
    ['SPIKE [direction]', '*', 'Radarwarnempfänger zeigt einen Abfangjäger in Verfolgung oder Start an.', 'Radar warning receiver indication of an air interceptor threat in track or launch.'],
    ['MUSIC', '*', 'Radar-Täuschstörung (elektronisch).', 'Radar electromagnetic deceptive jamming.'],
    ['NAKED', '', 'Keine Anzeige des Radarwarnempfängers.', 'No radar warning receiver indications.'],
    ['LIGHTS [ON/OFF]', '**', 'Eigenes aktives Radar strahlt bzw. stellt die Abstrahlung ein.', 'Active radar system intentionally emitting/ceasing emissions.'],
    ['FRIENDLY', '**', 'Positiv als eigen identifiziertes Lfz, Schiff oder Bodenstellung.', 'A positively identified FRIENDLY aircraft, ship, spacecraft, or ground position.'],
    ['HOSTILE', '**', 'Als feindlich identifizierter Kontakt, auf den nach ROE gefeuert werden darf.', 'A contact identified as enemy upon which clearance to fire is authorized IAW theater ROE.'],
    ['BANDIT', '', 'Nach Theater-Kriterien als feindlich identifiziert – ohne Richtungs- oder Feuerbefugnis.', 'Positively identified as an enemy IAW theater ID criteria; does not imply direction or authority to engage.'],
    ['BOGEY', '', 'Kontakt mit unbekannter Identität.', 'A CONTACT whose identity is unknown.']
  ]);

  add('Feuerunterstützung', [
    ['CHECK FIRE', '**', 'Sofortige Pause des Direkt- oder Steilfeuers; Fortsetzen kann Koordinierung erfordern.', 'Immediate pause of direct or indirect fires. May require coordination to continue.'],
    ['SHOT', '**', 'Schuss bzw. Schüsse abgefeuert (Boden-Boden).', 'Round(s) has/have been fired.'],
    ['SPLASH (Einschlagwarnung)', '*', 'Hinweis an Beobachter: fünf Sekunden bis zum erwarteten Einschlag.', 'Informative call to observer or spotter 5 seconds prior to estimated time of impact.'],
    ['MARK (Markierungsschuss)', '**', 'Markierungsgeschoss, meist weißer Phosphor oder Leuchtmittel am Boden, zeigt Ziele an.', 'Spotting round, normally white phosphorus or illumination on the deck to indicate targets.', 'Bedeutung 1 („Position eines Punkts festhalten“) ist ohne Kennzeichnung.'],
    ['SMOKE', '', 'Rauchmarkierung zur Kennzeichnung einer Position.', 'Smoke marker used to mark a position.'],
    ['HOLD FIRE', '*', 'Not-Feuerleitbefehl: Feuer auf ein Ziel einstellen und Flugkörper im Flug zerstören.', 'An emergency fire control order to stop firing on a designated target and destroy missiles in flight.'],
    ['CEASE FIRE', '', 'Feuer einstellen bzw. nicht eröffnen; Flugkörper im Flug fliegen weiter.', 'Stop firing, do not open fire. Missiles in flight will continue to intercept.']
  ]);
})();
