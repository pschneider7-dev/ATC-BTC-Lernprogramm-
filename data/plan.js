/* Lernplan: 8 Wochen, etwa 45–60 Minuten pro Tag. IDs nicht ändern – sie speichern den Fortschritt. */
(function () {
  'use strict';
  var P = window.LP.plan;
  function week(nr, title, focus, tasks) {
    P.push({ week: nr, title: title, focus: focus, tasks: tasks.map(function (t, i) { return { id: 'w' + nr + 't' + (i + 1), text: t[0], link: t[1] || '' }; }) });
  }

  week(1, 'Grundlagen und Führung', 'Begriffe sicher beherrschen: CAS, AI, TAC, TGO, Akteure und Netze.', [
    ['Modul 1 lesen und alle Abschnitte abhaken', 'm01'],
    ['Modul 2 lesen und alle Abschnitte abhaken', 'm02'],
    ['Glossar: alle Abkürzungen A–F durchgehen', 'glossar'],
    ['Karteikarten Module 1 und 2 (täglich)', 'karten'],
    ['Quiz zu Modul 1 und 2 (Übung)', 'quiz'],
    ['ATP-Abgleich für Module 1 und 2 im Print erledigen', 'm01']
  ]);
  week(2, 'Planung und Kontrollarten', 'Type 1, 2, 3 und BOT/BOC unterscheiden und begründen können.', [
    ['Modul 3 lesen', 'm03'],
    ['Modul 4 lesen – zweimal', 'm04'],
    ['Kontrollart-Trainer komplett durchlaufen', 'kontrolle'],
    ['Spickzettel „Kontrollart und Methode“ und „Clearance Calls“ auswendig', 'spick'],
    ['Karteikarten Module 3 und 4', 'karten'],
    ['ATP-Abgleich für Module 3 und 4', 'm04']
  ]);
  week(3, 'Der Ablauf', 'Execution Template, Check-in, Situation Update und Game Plan flüssig sprechen.', [
    ['Modul 5 lesen', 'm05'],
    ['Reihenfolge-Trainer: Execution Template, Check-in, Game Plan', 'reihenfolge'],
    ['Funkbeispiel 1 laut lesen, dann mit verdeckten JTAC-Sprüchen', 'funk'],
    ['Eigenen Check-in und Situation Update für eine erfundene Lage laut sprechen', ''],
    ['Karteikarten Modul 5', 'karten'],
    ['ATP-Abgleich Modul 5 (Check-in, Situation Update)', 'm05']
  ]);
  week(4, 'Der 9-Line', 'Jede Zeile ohne Nachdenken: Einheiten, Line 8, Readbacks.', [
    ['Modul 6 lesen', 'm06'],
    ['9-Line-Trainer: alle festen Lagen', 'neunline'],
    ['9-Line-Trainer: fünf Zufallslagen ohne Fehler', 'neunline'],
    ['Rechentrainer: Line 8, Line 2, Meter in Fuß, km in NM', 'rechnen'],
    ['Reihenfolge-Trainer: 9-Line und Remarks', 'reihenfolge'],
    ['ATP-Abgleich Modul 6 – besonders Zeilentitel und Line-8-Readback', 'm06']
  ]);
  week(5, 'Korrelation, Markierung und Laser', 'Talk-on nach FIDO, Laser-Handoff und IR-Brevity sicher anwenden.', [
    ['Modul 7 lesen', 'm07'],
    ['Modul 8 lesen', 'm08'],
    ['Reihenfolge-Trainer: Laser-Handoff und FIDO', 'reihenfolge'],
    ['Rechentrainer: Laser-Geometrie', 'rechnen'],
    ['Brevity-Trainer: 50 Begriffe, davon 20 NATO-abweichende', 'brevitytrainer'],
    ['Funkbeispiele 4, 5 und 8 laut lesen', 'funk'],
    ['ATP-Abgleich Module 7 und 8', 'm08']
  ]);
  week(6, 'Zielortung und Koordinierung', 'TLE, Mil-Formel, FSCM, Staffelung, Keyhole und SEAD-Zeiten.', [
    ['Modul 9 lesen', 'm09'],
    ['Modul 10 lesen', 'm10'],
    ['Rechentrainer: TLE, Stellenzahl, Strich, Mil-Formel', 'rechnen'],
    ['Rechentrainer: Keyhole, FAH, SEAD-Zeiten', 'rechnen'],
    ['Spickzettel FSCM und Faustformeln auswendig', 'spick'],
    ['ATP-Abgleich Module 9 und 10', 'm10']
  ]);
  week(7, 'Steilfeuer und Plattformen', 'CFF, JFO-Brief, 5-Line und die Besonderheiten der Plattformen.', [
    ['Modul 11 lesen', 'm11'],
    ['Modul 12 lesen', 'm12'],
    ['Reihenfolge-Trainer: CFF, JFO Target Brief, 5-Line', 'reihenfolge'],
    ['Rechentrainer: OT-Faktor und Danger Close', 'rechnen'],
    ['Funkbeispiele 7 und 5-Line laut lesen', 'funk'],
    ['JFIRE-Nachschlage-Aufträge der Module 11 und 12 im Print', 'm11'],
    ['ATP-Abgleich Module 11 und 12', 'm12']
  ]);
  week(8, 'Angriff, NATO und Prüfung', 'Alles zusammenführen und unter Zeitdruck abrufen.', [
    ['Modul 13 lesen', 'm13'],
    ['Modul 14 lesen', 'm14'],
    ['Probeprüfung mit 60 Fragen – Ziel: mindestens 80 %', 'quiz'],
    ['Alle Funkbeispiele mit verdeckten JTAC-Sprüchen', 'funk'],
    ['Alle offenen ATP-Abgleiche abschließen', 'module'],
    ['Zweite Probeprüfung nach Nacharbeit der Fehler', 'quiz']
  ]);
})();
