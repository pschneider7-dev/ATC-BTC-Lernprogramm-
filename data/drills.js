/* Trainer-Daten: 9-Line-Lagen (frei erfunden; Formate nach JP 3-09.3 Fig. V-9).
   Kontrollart-Lagen und Reihenfolgen stehen in data/kontrolle.js und data/sequences.js (erzeugt von tools/build.py). */
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
})();
