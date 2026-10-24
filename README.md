# JTAC Lernprogramm

Ein Lernprogramm zur Vorbereitung auf den JTAC Basic Training Course (BTC) und den Advanced Training Course (ATC). Es ist aus **öffentlich freigegebenen** US- und NATO-Vorschriften aufgebaut.

## Starten

Öffne `index.html` in einem aktuellen Browser (Chrome, Edge, Firefox, Safari). Du brauchst weder Server noch Installation, und offline funktioniert alles. Nur die Schriftarten kommen aus dem Internet; ohne Netz nutzt der Browser Ersatzschriften.

Dein Fortschritt bleibt im `localStorage` dieses Browsers: gelesene Abschnitte, Kartenfächer, Quizergebnisse, Lernplan und Abgleich-Häkchen. Unter **Fortschritt & Daten** kopierst du ihn als Text und lädst ihn auf einem anderen Gerät wieder.

## Inhalt

| Bereich | Umfang |
|---|---|
| Module | 14 Module mit 84 Abschnitten, je mit Quellenangabe auf Kapitel- bzw. Absatzebene |
| Spickzettel | 16 Kniebrett-Karten (Execution Template, MNPOPCA, 9-Line, Remarks/Restrictions, 5-Line, JFO-Brief, CFF, SALTR, TLE, Laser, IR, Faustformeln, FIDO, FSCM …) |
| Karteikarten | 206 Karten mit Leitner-System (5 Fächer) |
| Quiz & Prüfung | 187 Fragen, Übungs- und Prüfungsmodus (bestanden ab 80 %) |
| 9-Line-Trainer | 6 feste Lagen und beliebig viele Zufallslagen mit Prüfung jeder Zeile und der Readback-Pflichten |
| Kontrollart-Trainer | 12 Lagen: Type 1/2/3 und BOT/BOC mit Begründung |
| Reihenfolge-Trainer | 16 Formate und Abläufe |
| Rechentrainer | 14 Aufgabentypen mit Zufallswerten (Line 8, Line 2, m→ft, km→NM, Strich, Mil-Formel, OT-Faktor, Laser-Geometrie, Keyhole, TLE, MGRS, Danger Close, SEAD, FAH) |
| Brevity | 119 CAS-relevante Begriffe aus ATP 1-02.1 (2025) mit NATO-Kennzeichnung, plus Trainer |
| Funkbeispiele | 9 Abläufe nach JP 3-09.3 Anhang E, JTAC-Funksprüche verdeckbar, mit Fragen |
| Glossar | 168 Abkürzungen und Begriffe |
| Lernplan | 8 Wochen mit Aufgaben zum Abhaken |

## Quellen

Die Inhalte stammen aus diesen öffentlich zugänglichen Dokumenten. Die genauen Fundstellen stehen in der App unter **Quellen**.

- JP 3-09.3 *Close Air Support* (25. November 2014)
- JP 3-09 *Joint Fire Support* (2014)
- JP 3-52 *Joint Airspace Control* (2014)
- AJP-3.3 *Allied Joint Doctrine for Air and Space Operations*, Edition C (2026)
- ATP 3-09.30 *Observed Fires* (2017)
- ATP 1-02.1 *Multi-Service Brevity Codes* (2025)
- FM 3-09 *Fire Support and Field Artillery Operations* (2024)
- ATP 3-52.2 *TAGS* (2024)
- Veröffentlichungen der Bundeswehr (bundeswehr.de) zu Fliegerleitoffizieren, JFST/JFSCT und der Übung Stoneage

## Was bewusst fehlt

- **ATP-3.3.2.1 Edition D** (NATO UNCLASSIFIED, nicht zur Veröffentlichung freigegeben) und **ATP 3-09.32 JFIRE** (CUI) sind nicht öffentlich. Aus beiden ist **nichts** übernommen.
- Stattdessen nennt jedes Modul **Abgleich-Aufträge** für die ATP und **Nachschlage-Aufträge** für die JFIRE. Die Häkchen speichern nur, dass ein Auftrag erledigt ist, nicht, was in der Vorschrift steht.
- Bitte trage auch selbst keine Inhalte aus diesen Dokumenten in das Repository ein.

## Grenzen

- Die öffentlich verfügbare JP 3-09.3 ist die Ausgabe von **2014**. Die neuere Ausgabe war nicht öffentlich abrufbar.
- Wo die NATO von den US-Verfahren abweicht, gilt im Lehrgang die **ATP-3.3.2.1**. JP 3-09.3 nennt selbst zwei Abweichungen: NATO-Controller sprechen die Zeilentitel, und Line 8 ist Pflicht-Readback.
- Das Programm ist eine private Lernhilfe. Es ersetzt weder Vorschrift noch Ausbildung.

## Aufbau

```
index.html            Einstieg
assets/css/app.css    Gestaltung (hell/dunkel, Telefon bis Desktop)
assets/js/core.js     Namensraum, Speicher, Bausteine (Kniebrett, Funk, Hinweise)
assets/js/views.js    Start, Module, Karten, Quiz, Glossar, Brevity, Quellen, Plan, Daten
assets/js/drills.js   Trainer, Funkbeispiele, Spickzettel
assets/js/main.js     Router (#start, #m05, #m05-m05s3, #quiz …), Ereignisse
data/                 Inhalte als JavaScript-Dateien (laufen auch ohne Server)
```

Neue Karteikarten und Quizfragen gehören jeweils **ans Ende** eines Moduls. Die IDs werden fortlaufend vergeben, und der Lernstand hängt an ihnen.
