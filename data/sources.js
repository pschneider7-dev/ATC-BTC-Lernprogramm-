/* Quellenverzeichnis. Nur öffentlich freigegebene Dokumente wurden ausgewertet; alle Vorschriftentexte
   der App sind wörtliche Zitate daraus (erzeugt von tools/build.py). ATP-3.3.2.1 und JFIRE sind als
   Print-Abgleich geführt; aus ihnen stammt kein Inhalt. */
(function () {
  var S = window.LP.sources;

  S.jp3093 = {
    short: 'JP 3-09.3',
    title: 'JP 3-09.3 Close Air Support',
    edition: '25. November 2014',
    publisher: 'Joint Chiefs of Staff (USA)',
    status: 'öffentlich',
    statusNote: 'Laut Vorschrift: „access to unclassified publications is unrestricted“.',
    url: 'https://www.bits.de/NRANEU/others/jp-doctrine/jp3_09_3(14).pdf',
    alt: 'https://irp.fas.org/doddir/dod/jp3_09_3.pdf',
    used: 'Hauptquelle, wörtlich zitiert: Definitionen, Kontrollarten, Angriffsmethoden, Execution Template, Check-in, Situation Update, Game Plan, 9-Line, RW 5-Line, Remarks/Restrictions, Readbacks, Korrelation, Laser/IR, FSCM/ACM, JFO, Gunship, Abort, BDA, Funkbeispiele.',
    note: 'Eine neuere Ausgabe vom 10. Juni 2019 existiert; ihr Volltext war für diese App nicht öffentlich abrufbar. Die NATO verwendet JP 3-09.3 laut der Vorschrift selbst als Grundlage für CAS (Kap. III, Abs. 26).'
  };
  S.jp309 = {
    short: 'JP 3-09',
    title: 'JP 3-09 Joint Fire Support',
    edition: '12. Dezember 2014',
    publisher: 'Joint Chiefs of Staff (USA)',
    status: 'öffentlich',
    url: 'https://www.bits.de/NRANEU/others/jp-doctrine/jp3_09(14).pdf',
    used: 'Definitionen der Feuerunterstützung und der Koordinierungsmaßnahmen (Glossar).'
  };
  S.jp352 = {
    short: 'JP 3-52',
    title: 'JP 3-52 Joint Airspace Control',
    edition: '13. November 2014',
    publisher: 'Joint Chiefs of Staff (USA)',
    status: 'öffentlich',
    url: 'https://www.bits.de/NRANEU/others/jp-doctrine/jp3_52(14).pdf',
    used: 'Hintergrund zu Luftraumkoordinierungsmaßnahmen (ACM).'
  };
  S.ajp33 = {
    short: 'AJP-3.3',
    title: 'AJP-3.3 Allied Joint Doctrine for Air and Space Operations',
    edition: 'Edition C Version 1, Februar 2026',
    publisher: 'NATO Standardization Office (veröffentlicht durch UK MOD)',
    status: 'öffentlich',
    url: 'https://assets.publishing.service.gov.uk/media/698ef9fb7da91680ad7f4389/AJP_3_3_EdC_V1.pdf',
    used: 'Wörtlich zitiert: NATO-Definitionen von CAS und AI, Doktrinhierarchie (AJP-3.3.2, ATP-3.3.2.1), ASOC, TACP, FAC(A), Air Tasking Cycle, NATO-Agreed-Begriffe.'
  };
  S.atp30930 = {
    short: 'ATP 3-09.30',
    title: 'ATP 3-09.30 Observed Fires',
    edition: '28. September 2017',
    publisher: 'US Army',
    status: 'öffentlich',
    statusNote: '„Approved for public release; distribution is unlimited.“',
    url: 'https://armypubs.army.mil/epubs/DR_pubs/DR_a/pdf/web/ARN5011_ATP%203-09x30%20FINAL%20WEB.pdf',
    used: 'Wörtlich zitiert: Call for Fire, Danger Close und Creeping Fire, Strich und Mil-Formel, OT-Faktor, Spotting und Korrekturverfahren.'
  };
  S.atp1021 = {
    short: 'ATP 1-02.1',
    title: 'ATP 1-02.1 Multi-Service Brevity Codes',
    edition: '25. April 2025',
    publisher: 'ALSSA / US Army, USMC, USN, USAF, USSF',
    status: 'öffentlich',
    statusNote: '„Approved for public release; distribution is unlimited.“',
    url: 'https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN43565-ATP_1-02.1-000-WEB-2.pdf',
    used: 'Brevity-Definitionen im Originalwortlaut inklusive Kennzeichnung, wo die Bedeutung von NATO abweicht (*) oder kein NATO-Begriff ist (**).'
  };
  S.fm309 = {
    short: 'FM 3-09',
    title: 'FM 3-09 Fire Support and Field Artillery Operations',
    edition: '12. August 2024',
    publisher: 'US Army',
    status: 'öffentlich',
    url: 'https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN41659-FM_3-09-000-WEB-2.pdf',
    used: 'Weiterführende Lektüre zur Feuerunterstützung.'
  };
  S.atp3522 = {
    short: 'ATP 3-52.2',
    title: 'ATP 3-52.2 Multi-Service TTP for the Theater Air-Ground System (TAGS)',
    edition: '22. August 2024',
    publisher: 'ALSSA',
    status: 'öffentlich',
    url: 'https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN41789-ATP_3-52.2-000-WEB-2.pdf',
    used: 'Weiterführende Lektüre zu Führungsstrukturen (TACS, AAGS, ASOC, TACP).'
  };
  S.atp3321 = {
    short: 'ATP-3.3.2.1',
    title: 'ATP-3.3.2.1 Tactics, Techniques and Procedures for Close Air Support and Air Interdiction',
    edition: 'Edition D Version 1, April 2019',
    publisher: 'NATO Standardization Office',
    status: 'Print',
    statusNote: 'NATO UNCLASSIFIED, nicht öffentlich im Netz. Download nur mit dienstlichem NSO-Zugang. Grundlage des Lehrgangs.',
    url: '',
    used: 'Kein Inhalt übernommen. In jedem Modul stehen Abgleich-Aufträge, die du mit deiner Print-Ausgabe abarbeitest.'
  };
  S.jfire = {
    short: 'JFIRE',
    title: 'ATP 3-09.32 JFIRE – Multi-Service TTP for the Joint Application of Firepower',
    edition: 'September 2023',
    publisher: 'ALSSA',
    status: 'Print',
    statusNote: 'CUI (Controlled Unclassified Information). Keine Werte in diese App, ins Repository oder in Chats übertragen.',
    url: '',
    used: 'Kein Inhalt übernommen. Nachschlage-Aufträge verweisen auf Themen (z. B. Risk-Estimate Distances), ohne Werte zu nennen.'
  };
})();
