# JTAC Lernprogramm

Ein Lernprogramm zur Vorbereitung auf den JTAC Basic Training Course (BTC) und den Advanced Training Course (ATC). Es ist aus **öffentlich freigegebenen** US- und NATO-Vorschriften aufgebaut.

**Alles, was aus einer Vorschrift stammt, steht im englischen Originalwortlaut** – Modultexte, Definitionen, Formate, Brevity, Funksprüche und die Begründungen zu Quiz, Karten und Trainern, jeweils mit Seitenangabe. Deutsch sind nur Bedienung, Fragen, Lagebeschreibungen der Trainer und Rechenwege.

## Als App auf dem iPhone

Die App liegt auf GitHub Pages: **https://pschneider7-dev.github.io/ATC-BTC-Lernprogramm-/**

1. Die Adresse in **Safari** öffnen.
2. Auf **Teilen** tippen (Quadrat mit Pfeil nach oben) und **Zum Home-Bildschirm** wählen.
3. **Hinzufügen** tippen. Ab jetzt startet die App über das JTAC-Symbol im Vollbild und funktioniert **komplett offline**.

Neue Versionen lädt die App im Hintergrund, sobald sie mit Netz geöffnet wird; sie gelten ab dem nächsten Start. Browser und installierte App speichern den Fortschritt getrennt; übertragen lässt er sich unter **Fortschritt & Daten** (Code kopieren, in der App laden). Auf Android und am Rechner bietet Chrome bzw. Edge „App installieren“ an.

**Einmalige Einrichtung im Repository:** Settings → Pages → Build and deployment → Source: **GitHub Actions**. Danach veröffentlicht `.github/workflows/pages.yml` jeden Push automatisch (Actions → „App veröffentlichen“).

## Lokal starten

Öffne `index.html` in einem aktuellen Browser (Chrome, Edge, Firefox, Safari). Du brauchst weder Server noch Installation. Als lokale Datei läuft alles, nur der Offline-Speicher und die Installation als App brauchen eine https-Adresse (oder `python3 -m http.server` und `http://localhost:8000`).

Dein Fortschritt bleibt im `localStorage` dieses Browsers: gelesene Abschnitte, Kartenfächer, Quizergebnisse, Lernplan und Abgleich-Häkchen. Unter **Fortschritt & Daten** kopierst du ihn als Text und lädst ihn auf einem anderen Gerät wieder.

## Inhalt

| Bereich | Umfang |
|---|---|
| Module | 14 Module mit 93 Abschnitten aus wörtlichen Zitaten, Abbildungen als Kniebrett-Karten und Tabellen |
| Spickzettel | 17 Kniebrett-Karten aus den Abbildungen (Execution Template, Check-in, 9-Line, Kontrollarten, Clearance Calls, RW 5-Line, JFO-Brief, Gunship-CFF, INFLTREP, SALTR, FIDO, TLE, Laser-, IR- und Marking-Brevity, Keyhole, SEAD-Faustformel) |
| Karteikarten | 140 Karten mit Leitner-System (5 Fächer); Antwort = Originalzitat |
| Quiz & Prüfung | 96 Fragen, Übungs- und Prüfungsmodus (bestanden ab 80 %); Antwortoptionen im Wortlaut der Vorschrift, Begründung als Zitat |
| 9-Line-Trainer | 6 feste Lagen und beliebig viele Zufallslagen mit Prüfung jeder Zeile und der Readback-Pflichten |
| Kontrollart-Trainer | 12 Lagen: Type 1/2/3 und BOT/BOC, aufgelöst mit den Definitionen aus JP 3-09.3 |
| Reihenfolge-Trainer | 16 Formate und Abläufe, alle Bausteine im Originalwortlaut; Merkwörter MNPOPCA, FIDO und SALTR (offiziell, JP 3-09.3) und TEFACHR (Lehrgang, folgt Fig. V-6) |
| Rechentrainer | 18 Aufgabentypen mit Zufallswerten, darunter die **MKS-Formel** (Meter = Kilometer × Strich) in fünf Varianten: Meter, Kilometer, Strich, Seitenverschiebung vom Bezugspunkt und Sprenghöhe (HOB). Zu jeder Lösung die Regel aus der Vorschrift |
| Brevity | 119 CAS-relevante Begriffe, Definition wörtlich aus ATP 1-02.1 (2025) Tabelle 2 mit NATO-Kennzeichnung und deutscher Kurzhilfe, plus Trainer |
| Funkbeispiele | Die 9 Beispiele aus JP 3-09.3 Anhang E vollständig im Wortlaut plus RW 5-Line, Controller-Funksprüche verdeckbar, mit Fragen |
| Glossar | 140 Abkürzungen, davon 82 mit Definition im Wortlaut (Glossare von JP 3-09.3, JP 3-09, JP 3-52, AJP-3.3 oder definierende Textstelle) |
| Lernplan | 8 Wochen mit Aufgaben zum Abhaken |

## Quellen

Alle Inhalte stammen aus diesen öffentlich zugänglichen Dokumenten. Die Fundstellen stehen in der App an jedem Zitat und unter **Quellen**.

- JP 3-09.3 *Close Air Support* (25. November 2014)
- JP 3-09 *Joint Fire Support* (2014)
- JP 3-52 *Joint Airspace Control* (2014)
- AJP-3.3 *Allied Joint Doctrine for Air and Space Operations*, Edition C (2026)
- ATP 3-09.30 *Observed Fires* (2017)
- ATP 1-02.1 *Multi-Service Brevity Codes* (2025)
- FM 3-09 *Fire Support and Field Artillery Operations* (2024)
- ATP 3-52.2 *TAGS* (2024)

## Was bewusst fehlt

- **ATP-3.3.2.1 Edition D** (NATO UNCLASSIFIED, nicht zur Veröffentlichung freigegeben) und **ATP 3-09.32 JFIRE** (CUI) sind nicht öffentlich. Aus beiden ist **nichts** übernommen.
- Stattdessen nennt jedes Modul **Abgleich-Aufträge** für die ATP und **Nachschlage-Aufträge** für die JFIRE. Die Häkchen speichern nur, dass ein Auftrag erledigt ist, nicht, was in der Vorschrift steht.
- Bitte trage auch selbst keine Inhalte aus diesen Dokumenten in das Repository ein.

## Grenzen

- Die öffentlich verfügbare JP 3-09.3 ist die Ausgabe von **2014**. Die neuere Ausgabe war nicht öffentlich abrufbar.
- Wo die NATO von den US-Verfahren abweicht, gilt im Lehrgang die **ATP-3.3.2.1**. JP 3-09.3 nennt selbst zwei Abweichungen: NATO-Controller sprechen die Zeilentitel, und Line 8 ist Pflicht-Readback.
- Zitate geben die Vorschrift wörtlich wieder, auch ihre Tippfehler (z. B. „directiion“ in Fig. V-9).
- Das Programm ist eine private Lernhilfe. Es ersetzt weder Vorschrift noch Ausbildung.

## Aufbau

```
index.html             Einstieg
manifest.webmanifest   App-Beschreibung (Name, Symbol, Vollbild)
sw.js                  Offline-Speicher (Service Worker), erzeugt von tools/pwa.py
assets/fonts/          Schriften lokal (SIL Open Font License, siehe OFL.txt)
assets/icons/          App-Symbol (SVG und PNG)
assets/css/app.css     Gestaltung (hell/dunkel, Telefon bis Desktop)
assets/js/core.js      Namensraum, Speicher, Bausteine (Kniebrett, Funk, Hinweise)
assets/js/views.js     Start, Module, Karten, Quiz, Glossar, Brevity, Quellen, Plan, Daten
assets/js/drills.js    Trainer, Funkbeispiele, Spickzettel
assets/js/main.js      Router (#start, #m05, #m05-m05s3, #quiz …), Ereignisse
data/                  Inhalte als JavaScript-Dateien (laufen auch ohne Server)
tools/                 Erzeugt die Inhalte aus den Vorschriften (siehe unten)
```

### Inhalte erzeugen

Fast alle Dateien in `data/` werden von `tools/build.py` erzeugt und tragen den Hinweis „Generated by tools/build.py“. Von Hand gepflegt sind nur `data/drills.js` (9-Line-Lagen), `data/plan.js` und `data/sources.js`.

1. Die öffentlichen PDFs mit `pdftotext -layout` nach `tools/src/` umwandeln (Dateinamen siehe `tools/quote.py`, `SOURCES`). Der Ordner ist nicht im Repository.
2. `python3 tools/build.py` ausführen. Am Ende schreibt `tools/pwa.py` die Dateiliste für den Offline-Speicher neu (`sw.js`); nach Änderungen an HTML, CSS oder JS ohne Build reicht `python3 tools/pwa.py`.

`tools/content/*.py` legt nur fest, **welche** Stelle zitiert wird (Anfangs- und Endphrase, Absatzzahl oder Satzzahl). Den Text selbst liest `tools/quote.py` aus der Vorschrift; findet er eine Phrase nicht oder nicht eindeutig, bricht der Build ab. Abbildungen werden Satz für Satz gegen den Vorschriftentext geprüft. So kann kein umformulierter Text in die App gelangen.

Neue Karteikarten und Quizfragen gehören jeweils **ans Ende** eines Moduls. Die IDs werden fortlaufend vergeben, und der Lernstand hängt an ihnen.
