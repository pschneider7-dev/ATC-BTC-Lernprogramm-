/* Trainer-Daten: 9-Line-Lagen, Kontrollart-Lagen, Reihenfolgen.
   Alle Lagen sind frei erfunden; Regeln und Formate nach JP 3-09.3 (2014) und ATP 3-09.30. */
(function () {
  'use strict';
  var D = window.LP.drills;

  /* ---------- 9-Line-Lagen ----------
     ipBrg = Peilung vom Ziel zum IP/BP (° magnetisch); dist = km (Jets) bzw. m (BP);
     fromFriendly: true = Richtung ist „Ziel von der eigenen Truppe aus“, false = „eigene Truppe vom Ziel aus“. */
  var WP = { de: 'Weißer Phosphor durch Mörser, 30–45 s vor TOT', en: 'White phosphorus', keys: [['WP', 'WHITEPHOSPHORUS', 'WHITEPHOSPHOROUS', 'WEISSERPHOSPHOR', 'WILLIEPETE', 'WILLYPETE']] };
  var NOMARK = { de: 'keine Markierung', en: 'No mark', keys: [['NOMARK', 'NONE', 'KEINE']] };
  D.neunline = [
    {
      title: 'Zug im Gefecht am Waldrand',
      text: 'Dein Zug wird aus Schützenpanzerstellungen am Waldrand beschossen. Zwei F/A-18 halten am IP HAMMER. Geplant: Type 1, BOT, Markierung mit weißem Phosphor durch die Mörser.',
      ip: 'HAMMER', ipBrg: 265, dist: 18.5, elevM: 312, grid: '32U NB 4521 8834',
      tgt: { de: 'Zwei Schützenpanzer BMP, eingegraben am Waldrand', en: 'Two BMPs dug in at the tree line', keys: [['2', 'TWO', 'ZWEI'], ['BMP', 'SCHUETZENPANZER', 'APC', 'IFV']] },
      mark: WP, fdir: 'NE', fdist: 600, fromFriendly: true,
      egress: { de: 'Nach Westen zurück zum IP HAMMER, Block 14–16', dir: 'W', to: 'Hammer' },
      restr: 'Final attack headings 060 through 110 · stay above 4,000 feet MSL (Mörser, GTL 030) · TOT 25'
    },
    {
      title: 'Bunker unter geschlossener Wolkendecke',
      text: 'Ein Führungsbunker mit mensurierter Koordinate (CAT II). Wolkendecke 2.000 ft über Grund, zwei F-16 mit GBU-38 halten darüber. Geplant: Type 2, BOC.',
      ip: 'ANVIL', ipBrg: 140, dist: 22.0, elevM: 487, grid: '32U PB 1180 6243',
      tgt: { de: 'Bunker mit Führungsstelle', en: 'Command bunker', keys: [['BUNKER']] },
      mark: NOMARK, fdir: 'S', fdist: 1100, fromFriendly: false,
      egress: { de: 'Nach Südosten zurück zum IP ANVIL', dir: 'SE', to: 'Anvil' },
      restr: 'Final attack headings 300 through 340 · TOT 42'
    },
    {
      title: 'Kampfhubschrauber aus der Battle Position',
      text: 'Ein Kampfpanzer steht in Deckung hinter einem Gehöft. Zwei Kampfhubschrauber halten in BP ROSE. Geplant: Type 2, BOT, Markierung mit rotem Rauch.',
      bp: true, ip: 'BP ROSE', ipBrg: 320, dist: 3400, elevM: 455, grid: '32U NC 6630 0419',
      tgt: { de: 'Einzelner Kampfpanzer in Deckung hinter einem Gehöft', en: 'Single tank in defilade behind a farmhouse', keys: [['TANK', 'KAMPFPANZER', 'PANZER', 'MBT']] },
      mark: { de: 'Rote Rauchmarkierung durch Mörser', en: 'Red smoke', keys: [['RED', 'ROT'], ['SMOKE', 'RAUCH']] },
      fdir: 'E', fdist: 800, fromFriendly: true,
      egress: { de: 'Links abdrehen nach Norden, zurück in BP ROSE', dir: 'N', to: 'BP Rose' },
      restr: 'Attacks northwest to southeast · approved out of BP ROSE after talk-on'
    },
    {
      title: 'Laser-Handoff an der Kreuzung',
      text: 'Drei Lkw mit abgesessener Infanterie an einer Kreuzung. Du beleuchtest selbst (Rufzeichen HAWK 11) aus Südwesten. Zwei A-10 mit GBU-12 kommen vom IP FALCON. Geplant: Type 2, BOC – die Bomben fallen in den Laserkorb.',
      ip: 'FALCON', ipBrg: 245, dist: 14.8, elevM: 128, grid: '32U MB 9012 7765',
      tgt: { de: 'Drei Lkw mit abgesessener Infanterie an einer Kreuzung', en: 'Three trucks with dismounted infantry at an intersection', keys: [['3', 'THREE', 'DREI'], ['TRUCK', 'LKW', 'VEHICLE']] },
      mark: { de: 'Laser-Handoff durch HAWK 11, Code 1688', en: 'Hawk 11 laser, code 1688', keys: [['LASER'], ['1688']] },
      fdir: 'SW', fdist: 1200, fromFriendly: false,
      egress: { de: 'Nach Westen zurück zum IP FALCON', dir: 'W', to: 'Falcon' },
      restr: 'Laser target line 040 · final attack headings 055 through 085 · TOT 18'
    },
    {
      title: 'Nacht: Infanterie im Graben',
      text: 'Nachts gräbt sich feindliche Infanterie 700 m vor deiner Stellung ein. Zwei Jets mit NVG halten am IP KESTREL. Du markierst mit dem IR-Pointer. Geplant: Type 2, BOT.',
      ip: 'KESTREL', ipBrg: 100, dist: 25.0, elevM: 1240, grid: '32U LB 3377 2196',
      tgt: { de: 'Infanterie in Zugstärke in einem Graben', en: 'Platoon of infantry in a trench line', keys: [['INFANTRY', 'INFANTERIE', 'PERSONNEL', 'TROOPS', 'SOLDATEN']] },
      mark: { de: 'IR-Pointer des JTAC', en: 'IR pointer', keys: [['IR']] },
      fdir: 'N', fdist: 700, fromFriendly: true,
      egress: { de: 'Nach Osten zurück zum IP KESTREL', dir: 'E', to: 'Kestrel' },
      restr: 'Final attack headings 250 through 300 · stay above 8,000 feet MSL'
    },
    {
      title: 'Mörserstellung hinter dem Ort',
      text: 'Eine Mörserstellung beschießt den Nachbarzug. Der JFO hat eine 8-stellige Koordinate erzeugt und vor dem Check-in mit dir korreliert. Zwei Jets mit GBU-38 kommen vom IP GRANITE. Geplant: Type 2, BOC.',
      ip: 'GRANITE', ipBrg: 190, dist: 11.1, elevM: 76, grid: '32U PC 5508 9921',
      tgt: { de: 'Mörserstellung mit etwa sechs Soldaten im Freien', en: 'Mortar position with six personnel in the open', keys: [['MORTAR', 'MOERSER']] },
      mark: NOMARK, fdir: 'NW', fdist: 2300, fromFriendly: false,
      egress: { de: 'Rechts abdrehen nach Süden zurück zum IP GRANITE', dir: 'S', to: 'Granite' },
      restr: 'Final attack headings 350 through 030 · TOT 07'
    }
  ];

  /* ---------- Kontrollart und Angriffsmethode ---------- */
  D.kontrolle = [
    {
      title: 'MG-Nest vor dem eigenen Zug',
      sit: '<p>Tag, klare Sicht. Ein feindliches MG beschießt deinen Zug aus 700 m. Du siehst das Ziel. Zwei A-10 mit Bordkanone und ungelenkten Raketen kommen tief an; du kannst sie während des ganzen Anflugs sehen. Wegen der Nähe zu den eigenen Kräften willst du jede Angriffsgeometrie selbst beurteilen. Die Besatzung soll das Ziel selbst erfassen.</p>',
      type: 1, moa: 'BOT',
      why: 'Type 1: Du musst Ziel <em>und</em> Lfz für jeden Angriff sehen und die Geometrie beurteilen – genau das willst du hier. BOT: Die Besatzung erfasst das Ziel selbst; Bordkanone und Raketen auf ein identifiziertes Ziel sind ein Standardbeispiel für BOT.',
      src: [['jp3093', 'Kap. III, Abs. 12a(1), 12b']]
    },
    {
      title: 'Bunker unter der Wolkendecke',
      sit: '<p>Nacht, geschlossene Wolkendecke. Ein fester Bunker hat eine mensurierte Koordinate (CAT II). Du siehst ihn mit dem Wärmebildgerät. Zwei Jets mit GBU-38 (GPS-gelenkt) halten über den Wolken; du wirst sie beim Auslösen nicht sehen. Die Koordinate reicht für die gewünschte Wirkung.</p>',
      type: 2, moa: 'BOC',
      why: 'Type 2: Du siehst das Lfz beim Auslösen nicht. GPS/INS-Waffen sollen ohnehin nicht unter Type 1 kontrolliert werden – die Geometrie des Lfz sagt nichts über die Flugbahn der Waffe. BOC: Trägheitsgestützte Munition auf eine statische Koordinate ist ein Standardbeispiel; die Besatzung muss das Ziel nie erfassen.',
      src: [['jp3093', 'Kap. III, Abs. 12a(1)–(2), 12b(2)']]
    },
    {
      title: 'Selbstbeleuchtete GBU-12 aus mittlerer Höhe',
      sit: '<p>Tag. Eine F-16 mit GBU-12 greift aus mittlerer Höhe an und beleuchtet selbst. Du siehst die Fahrzeugkolonne, die das Ziel ist, aber die F-16 wirst du beim Auslösen wegen der Höhe nicht sehen. Nach einem Talk-on soll die Besatzung das Ziel mit dem Pod erfassen.</p>',
      type: 2, moa: 'BOT',
      why: 'Type 2: Lfz beim Auslösen nicht sichtbar. BOT: Die Besatzung muss das Ziel erfassen (CAPTURED) – eine selbstbeleuchtete LGB ist ein Standardbeispiel für BOT.',
      src: [['jp3093', 'Kap. III, Abs. 12a(2), 12b(3)']]
    },
    {
      title: 'Bomben in den Laserkorb',
      sit: '<p>Bedeckt, Untergrenze 3.000 ft. Du beleuchtest das Ziel mit deinem Bodenlaser. Zwei Jets werfen GBU-12 von über den Wolken in den Laserkorb; die Besatzungen können das Ziel nicht sehen und sollen es auch nicht erfassen. Du siehst die Jets nicht.</p>',
      type: 2, moa: 'BOC',
      why: 'Type 2: Lfz nicht sichtbar. BOC: Lasergelenkte Waffen, die von einer Quelle außerhalb des angreifenden Lfz bzw. der Rotte gelenkt werden, sind ausdrücklich ein BOC-Beispiel. Die Korrelation mit dem Beleuchter bleibt trotzdem nötig.',
      src: [['jp3093', 'Kap. III, Abs. 12b(2)']]
    },
    {
      title: 'Kolonne im Tal',
      sit: '<p>Eine feindliche Kolonne mit sechs Fahrzeugen steht in einem Tal 4 km vor den eigenen Truppen. Die Gefahr für eigene Kräfte ist gering. Der Kommandeur hat Type 3 genehmigt und will, dass alle Fahrzeuge in einem 10-Minuten-Fenster bekämpft werden. Zwei A-10 sollen die Fahrzeuge selbst finden.</p>',
      type: 3, moa: 'BOT',
      why: 'Type 3: mehrere Angriffe innerhalb eines Gefechts unter Einschränkungen (Zeitfenster, Raum), geringes Risiko für eigene Kräfte. BOT: Die Besatzung erfasst die Ziele selbst.',
      src: [['jp3093', 'Kap. III, Abs. 12a(3); Anhang E, Beispiel 5']]
    },
    {
      title: 'Bombenteppich auf die Baumlinie',
      sit: '<p>Eine starke Feindkraft liegt im dichten Wald jenseits eines Flusses, etwa 100 m breit entlang des Ufers. Absicht des Kommandeurs: 30 Minuten ununterbrochener Beschuss. Ein Bomber kann mit zwei Koordinaten (Anfang und Ende der Linie) arbeiten; die Besatzung wird im Wald keine einzelnen Ziele sehen.</p>',
      type: 3, moa: 'BOC',
      why: 'Type 3: viele Angriffe über einen Zeitraum innerhalb von Restrictions. BOC: Waffen auf festgelegte Koordinaten; die Besatzung muss das Ziel nie erfassen.',
      src: [['jp3093', 'Anhang E, Beispiel 6']]
    },
    {
      title: 'Einzelne F-16 mit wenig Restzeit',
      sit: '<p>Dein Trupp liegt hinter einem Deich fest; ein gut getarntes MG-Nest 800 m nördlich in hohem Gras. Eine einzelne F-16 mit MK-82 hat zehn Minuten Restzeit. Ein Talk-on würde zu lange dauern, deine 8-stellige Koordinate reicht aber zum Niederhalten. Du kannst die F-16 im Anflug sehen und willst die Geometrie selbst prüfen.</p>',
      type: 1, moa: 'BOC',
      why: 'Type 1: Du siehst Lfz und Ziel und willst die Geometrie beurteilen. BOC: Die Besatzung muss das getarnte Ziel nicht erfassen; die Koordinate reicht für die Wirkung. Type und Methode sind unabhängig voneinander.',
      src: [['jp3093', 'Anhang E, Beispiel 2']]
    },
    {
      title: 'Zieldaten vom Spähtrupp',
      sit: '<p>Du siehst das Ziel nicht. Ein Spähtrupp im Gefecht gibt dir laufend genaue Zieldaten zu zwei Schützenpanzern. Die Jets sollen die Fahrzeuge nach einem Sensor-Talk-on selbst mit dem Pod erfassen.</p>',
      type: 2, moa: 'BOT',
      why: 'Type 2: Du siehst das Ziel nicht, nutzt aber Zieldaten eines anderen Mittels mit Echtzeit-Informationen. BOT: Die Besatzungen müssen die Fahrzeuge erfassen (CAPTURED).',
      src: [['jp3093', 'Anhang E, Beispiel 4']]
    },
    {
      title: 'Verbündete Besatzung mit Sprachproblemen',
      sit: '<p>Tag, gute Sicht. Eine verbündete Besatzung, mit der die Verständigung schwierig ist, wirft ungelenkte Bomben. Die eigenen Kräfte sind nah. Die Mörser legen eine Rauchmarkierung, von der aus du korrigierst. Du siehst Ziel und Lfz.</p>',
      type: 1, moa: 'BOT',
      why: 'Type 1: Sprachbarrieren bei mehrnationalen Besatzungen nennt JP 3-09.3 ausdrücklich als Grund für visuelle Kontrolle. BOT: Korrektur von einer Markierung, die Besatzung erfasst das Ziel selbst.',
      src: [['jp3093', 'Kap. III, Abs. 12a(1), 12b(3)']]
    },
    {
      title: 'Kampfhubschrauber in der Nacht',
      sit: '<p>Nacht. Zwei Kampfhubschrauber mit Hellfire stehen 5 km entfernt. Du markierst das Ziel mit dem IR-Pointer und kannst die Hubschrauber nicht sehen. Die Besatzungen sollen das Ziel mit ihren Sensoren erfassen und TALLY bzw. CONTACT SPARKLE melden.</p>',
      type: 2, moa: 'BOT',
      why: 'Type 2: Lfz nicht sichtbar (Nacht, Entfernung). BOT: Die Besatzungen erfassen das Ziel selbst; mit IR-Markierung vom Boden müssen sie VISUAL und TALLY oder CONTACT SPARKLE melden.',
      src: [['jp3093', 'Kap. III, Abs. 12a(2); Kap. V, Abs. 2b(8)']]
    },
    {
      title: 'Hellfire aus der Battle Position',
      sit: '<p>Eine leichte Panzerkompanie (sechs Fahrzeuge) nähert sich 2.000 m östlich deiner Stellung. Zwei Kampfhubschrauber sollen aus einer Battle Position in einem 5-Minuten-Fenster mit Hellfire mehrere Fahrzeuge bekämpfen, danach nach SEAD mit Raketen und Kanone. Die Besatzungen erfassen die Ziele nach einem Talk-on selbst.</p>',
      type: 3, moa: 'BOT',
      why: 'Type 3: mehrere Angriffe im Zeitfenster unter Restrictions. BOT: Die Besatzungen melden TALLY und erfassen die Ziele selbst.',
      src: [['jp3093', 'Anhang E, Beispiel 7']]
    },
    {
      title: 'JFO mit mensurierter Koordinate',
      sit: '<p>Eine Geschützstellung liegt hinter einem Hügel; du siehst sie nicht. Ein JFO beobachtet sie, hat eine mensurierte Koordinate erzeugt und vor dem Check-in mit dir korreliert. Zwei Jets mit JDAM kommen.</p>',
      type: 2, moa: 'BOC',
      why: 'Type 2: Du nutzt Zieldaten des JFO mit Echtzeit-Informationen. BOC: Die vorab abgeschlossene Korrelation zwischen JFO und JTAC ermöglicht BOC; JDAM auf eine statische Koordinate.',
      src: [['jp3093', 'Kap. III, Abs. 12b(2); Kap. V, Abs. 6']]
    }
  ];

  /* ---------- Reihenfolgen ---------- */
  D.sequences = [
    {
      id: 'template', title: 'CAS Execution Template (12 Schritte)',
      intro: 'Der Ablauf vom Erstkontakt bis zum Abflug.',
      items: ['Routing / Safety of Flight', 'CAS Aircraft Check-in', 'Situation Update', 'Game Plan', 'CAS Brief (9-Line)', 'Remarks / Restrictions', 'Readbacks', 'Correlation', 'Attack', 'Assess Effects', 'Battle Damage Assessment', 'Routing / Safety of Flight'],
      note: 'Routing/Safety of Flight steht am Anfang (Halten, andere Lfz, Bedrohung) und am Ende (Abflug).',
      src: [['jp3093', 'Kap. V, Abb. V-1']]
    },
    {
      id: 'checkin', title: 'Check-in (MNPOPCA)',
      items: ['Mission Number', 'Number and Type of Aircraft', 'Position and Altitude', 'Ordnance', 'Playtime / Time on Station', 'Capabilities', 'Abort Code'],
      note: 'Merkhilfe: M-N-P-O-P-C-A.',
      src: [['jp3093', 'Kap. V, Abb. V-4']]
    },
    {
      id: 'nineline', title: '9-Line CAS Brief',
      items: ['IP / BP', 'Heading / Offset', 'Distance', 'Target Elevation', 'Target Description', 'Target Location', 'Type Mark / Terminal Guidance', 'Location of Friendlies', 'Egress', 'Remarks / Restrictions'],
      note: 'Drei Übertragungen à drei Zeilen, dann Remarks/Restrictions. Readback: Line 4, Line 6, Restrictions (NATO laut JP 3-09.3: zusätzlich Line 8).',
      src: [['jp3093', 'Kap. V, Abb. V-9']]
    },
    {
      id: 'remarks', title: 'Reihenfolge der Remarks',
      intro: 'Empfohlene Reihenfolge nach JP 3-09.3 – nur, was zutrifft und noch nicht gesagt wurde.',
      items: ['Laser Target Line (bei Bodenbeleuchtung)', 'Gewünschte Munition / Wirkung', 'Boden-Luft-Bedrohung und Unterdrückung', 'Weitere Feuer', 'Zusätzliche Funksprüche (IP inbound, IN mit Kurs)', 'Weitere Hinweise (Gefahren, Wetter, TLE, NVG, Eigenmarkierung)'],
      note: 'Danach die Restrictions – die TOT steht als letzte, damit das Ende des Briefs erkennbar ist.',
      src: [['jp3093', 'Kap. V, Abs. 2b(6)']]
    },
    {
      id: 'gameplan', title: 'Game Plan entwickeln',
      intro: 'Vom Ziel rückwärts gedacht.',
      items: ['Gewünschte Wirkung bestimmen', 'Art der Terminal Attack Control wählen', 'Angriffsmethode wählen (BOT/BOC)', 'Abstand der Luftfahrzeuge planen', 'Sensorplan entwickeln'],
      src: [['jp3093', 'Kap. V, Abs. 2a(3)']]
    },
    {
      id: 'brief-dev', title: 'CAS-Brief vorbereiten (JTAC-Handlungen)',
      items: ['Zieldaten entwickeln', 'Luftunterstützung anfordern', 'Game Plan entwickeln', 'Markierung bzw. Korrelationshilfe festlegen', 'Angriffsgeometrie entwickeln', 'SEAD-Bedarf bestimmen und planen'],
      src: [['jp3093', 'Kap. V, Abs. 2a']]
    },
    {
      id: 'type1', title: 'Type-1-Ablauf',
      items: ['JTAC erfasst das Ziel visuell', 'Game Plan und CAS-Brief', 'Besatzung prüft die Zielposition', 'Readback Line 4, Line 6, Restrictions', 'Korrelation', 'IP INBOUND (falls gefordert)', 'IN-Call der Besatzung', 'JTAC erfasst das Lfz visuell', 'JTAC prüft die Angriffsgeometrie', 'CLEARED HOT, CONTINUE DRY oder ABORT'],
      src: [['jp3093', 'Kap. III, Abs. 12a(1)(b)']]
    },
    {
      id: 'type3', title: 'Type-3-Ablauf',
      items: ['JTAC erfasst das Ziel oder nutzt Echtzeit-Zieldaten', 'Game Plan und CAS-Brief mit Angriffsraum, Restrictions und Zeitfenster', 'Besatzung prüft die Zielposition', 'Readback Line 4, Line 6, Restrictions', 'Korrelation', 'CLEARED TO ENGAGE oder „Type 3, CONTINUE DRY“', 'COMMENCING ENGAGEMENT', 'JTAC überwacht das Gefecht', 'ENGAGEMENT COMPLETE'],
      src: [['jp3093', 'Kap. III, Abs. 12a(3)(c)']]
    },
    {
      id: 'laser', title: 'Laser-Handoff',
      items: ['JTAC: Anflugkurs und „STARE“ mit Code und Bezugspunkt', 'Besatzung: „TEN SECONDS“', 'Besatzung: „LASER ON“', 'Beleuchter: „LASING“ mit Code', 'Besatzung: „SPOT“', 'Besatzung: „CEASE LASER“', 'Korrelation: „Was siehst du im Pod?“', 'Besatzung: „CAPTURED“'],
      note: 'SPOT ist noch keine Korrelation. Bei NEGATIVE LASER: Aufbau, Code und Position prüfen, neu beginnen oder andere Markierung.',
      src: [['jp3093', 'Kap. V, Abs. 2b(8)(d)1'], ['jp3093', 'Anhang E, Beispiel 5']]
    },
    {
      id: 'fido', title: 'Talk-on (FIDO)',
      items: ['From a point', 'In a direction', 'Distance to travel', 'Object seen'],
      note: 'Bestätigende Fragen mit eindeutiger Antwort; höchstens zwei Himmelsrichtungen pro Spruch.',
      src: [['jp3093', 'Kap. V, Abs. 2b(8)(d)7']]
    },
    {
      id: 'rw5', title: 'Hubschrauber-5-Line',
      items: ['Observer / Warning Order / Game Plan', 'Friendly Location / Mark', 'Target Location', 'Target Description / Mark', 'Remarks / Restrictions'],
      note: 'Eigenkräftebezogen, ohne Zeilennummern, keine Freigabe. Restrictions sind Readback-Pflicht.',
      src: [['jp3093', 'Kap. III, Abb. III-27']]
    },
    {
      id: 'jfo', title: 'JFO Target Brief',
      items: ['Line 4: Target Elevation', 'Line 5: Target Description', 'Line 6: Target Location', 'Line 7: Target Mark', 'Line 8: Friendlies', '„Advise ready for remarks“: FAH, LTL/PTL, Bedrohung, SEAD, GTL, Restrictions, TOT'],
      note: 'Line 4 und Line 8 dürfen nicht weggelassen werden. Der JTAC liest zurück, der JFO bestätigt.',
      src: [['jp3093', 'Kap. V, Abb. V-16']]
    },
    {
      id: 'cff', title: 'Call for Fire (6 Elemente)',
      intro: 'Sechs Elemente in drei Übertragungen.',
      items: ['Observer Identification', 'Warning Order', 'Target Location', 'Target Description', 'Method of Engagement', 'Method of Fire and Control'],
      src: [['atp30930', 'Kap. 4']]
    },
    {
      id: 'saltr', title: 'BDA-Meldung (SALTR)',
      items: ['Size', 'Activity', 'Location', 'Time', 'Remarks'],
      src: [['jp3093', 'Kap. V, Abs. 2b(11)']]
    },
    {
      id: 'inflt', title: 'Inflight Report (INFLTREP)',
      items: ['Call Sign', 'Mission Number', 'Location', 'Time on Target', 'Results', 'Remarks'],
      src: [['jp3093', 'Kap. V, Abb. V-12']]
    },
    {
      id: 'request', title: 'Sofortige Anforderung (vereinfacht)',
      items: ['Einheit erkennt ein Ziel', 'Kommandeur entscheidet über CAS', 'TACP übermittelt die Anforderung an die ASOC', 'Zwischenstäbe hören mit (Schweigen = Zustimmung)', 'Höchste Bodenführung genehmigt über die ASOC', 'Luftfahrzeuge werden zugewiesen und zum Kontrollpunkt geführt', 'JTAC brieft und kontrolliert', 'Wirkung beurteilen'],
      note: 'Die vollständige Darstellung in JP 3-09.3 hat 15 Schritte.',
      src: [['jp3093', 'Kap. III, Abb. III-38']]
    }
  ];
})();
