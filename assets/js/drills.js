/* JTAC Lernprogramm – Trainer: 9-Line, Kontrollart, Reihenfolgen, Brevity, Rechnen, Funk, Spickzettel. */
(function () {
  'use strict';
  var LP = window.LP;
  var V = LP.views;
  var esc = LP.esc;

  /* ---------- gemeinsame Helfer ---------- */
  var DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  var DIR_EN = { N: 'North', NE: 'Northeast', E: 'East', SE: 'Southeast', S: 'South', SW: 'Southwest', W: 'West', NW: 'Northwest' };
  var DIR_DE = { N: 'nördlich', NE: 'nordöstlich', E: 'östlich', SE: 'südöstlich', S: 'südlich', SW: 'südwestlich', W: 'westlich', NW: 'nordwestlich' };
  var DIR_WORDS = [
    ['NORTHEAST', 'NE'], ['NORTHWEST', 'NW'], ['SOUTHEAST', 'SE'], ['SOUTHWEST', 'SW'],
    ['NORDOST', 'NE'], ['NORDWEST', 'NW'], ['SUEDOST', 'SE'], ['SUEDWEST', 'SW'],
    ['NORTH', 'N'], ['SOUTH', 'S'], ['EAST', 'E'], ['WEST', 'W'],
    ['NORD', 'N'], ['SUED', 'S'], ['OST', 'E'],
    ['NE', 'NE'], ['NW', 'NW'], ['SE', 'SE'], ['SW', 'SW'], ['NO', 'NE'], ['SO', 'SE'],
    ['N', 'N'], ['S', 'S'], ['E', 'E'], ['W', 'W'], ['O', 'E']
  ];
  function opposite(d) { return DIRS[(DIRS.indexOf(d) + 4) % 8]; }
  // "Southwest 300", "SW300", "südwest 300" → {dir:'SW', dist:300}
  function parseDirDist(s) {
    var n = LP.norm(s);
    var m = /^([A-Z]+?)(\d+)M?$/.exec(n) || /^(\d+)M?([A-Z]+)$/.exec(n);
    if (!m) return null;
    var word = isNaN(m[1]) ? m[1] : m[2];
    var num = isNaN(m[1]) ? m[2] : m[1];
    for (var i = 0; i < DIR_WORDS.length; i++) if (DIR_WORDS[i][0] === word) return { dir: DIR_WORDS[i][1], dist: parseInt(num, 10) };
    return null;
  }
  function num(s) {
    var t = String(s == null ? '' : s).trim().replace(/\s/g, '').replace(',', '.');
    if (!/^[-+]?\d*\.?\d+$/.test(t)) return NaN;
    return parseFloat(t);
  }
  // Ganzzahl mit Tausenderpunkt („3.400“, „1,024“) → Zahl
  function intNum(s) { return num(String(s == null ? '' : s).replace(/(\d)[.,'](\d{3})(?!\d)/g, '$1$2')); }
  function pad3(n) { n = ((Math.round(n) % 360) + 360) % 360; return String(n === 0 ? 360 : n).padStart(3, '0'); }
  function angDiff(a, b) { var d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; }
  function de(n, dec) { return Number(n).toLocaleString('de-DE', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 }); }
  function round(n, dec) { var f = Math.pow(10, dec || 0); return Math.round(n * f) / f; }
  function hasAll(input, groups) {
    var n = LP.norm(input);
    return groups.every(function (g) { return g.some(function (k) { return n.indexOf(LP.norm(k)) >= 0; }); });
  }
  // Enthält die Eingabe ein Richtungswort (englisch/deutsch) für d? „Egress west to Hammer“, „W“, „nach Westen“
  function hasDir(input, d) {
    var words = String(input || '').toUpperCase().replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').split(/[^A-Z]+/);
    var extra = { NORDEN: 'N', OSTEN: 'E', SUEDEN: 'S', WESTEN: 'W', NOERDLICH: 'N', OESTLICH: 'E', SUEDLICH: 'S', WESTLICH: 'W', NORDOSTEN: 'NE', NORDWESTEN: 'NW', SUEDOSTEN: 'SE', SUEDWESTEN: 'SW' };
    return words.some(function (w) {
      if (extra[w]) return extra[w] === d;
      for (var i = 0; i < DIR_WORDS.length; i++) if (DIR_WORDS[i][0] === w) return DIR_WORDS[i][1] === d;
      return false;
    });
  }
  function drillStat(key, ok) {
    var st = LP.state.drills[key] || { done: 0, ok: 0 };
    st.done++;
    if (ok) st.ok++;
    LP.state.drills[key] = st;
    LP.save();
  }
  function statLine(key) {
    var st = LP.state.drills[key];
    if (!st || !st.done) return 'noch nicht geübt';
    return st.ok + ' von ' + st.done + ' richtig (' + LP.pct(st.ok, st.done) + ' %)';
  }
  function head(eyebrow, title, lead) {
    return '<div class="page-head"><div class="eyebrow">' + esc(eyebrow) + '</div><h1>' + esc(title) + '</h1>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + '</div>';
  }
  function backLink() { return '<p class="small"><a href="#training">← Alle Trainer</a></p>'; }

  /* ---------- Übersicht ---------- */
  V.training = function () {
    var t = [
      ['neunline', '9-Line-Trainer', 'Rohdaten aus der Lage in einen korrekten CAS-Brief umsetzen: Kurs umkehren, km in NM, m in ft, Line 8 vom Ziel aus.', 'neunline'],
      ['kontrolle', 'Kontrollart und Angriffsmethode', 'Lagen beurteilen: Type 1, 2 oder 3? Bomb on Target oder Bomb on Coordinate?', 'kontrolle'],
      ['reihenfolge', 'Reihenfolgen', 'Execution Template, Check-in, Situation Update, 9-Line, CFF, SALTR, 5-Line, FIDO, Laser-Handoff, JFO-Brief in die richtige Ordnung bringen.', 'reihenfolge'],
      ['rechnen', 'Rechentrainer', 'Zufallsaufgaben zu Line 8, Fuß, Seemeilen, Strich, Mil-Formel, OT-Faktor, Laser-Geometrie, Keyhole, TLE, Danger Close und SEAD-Zeiten.', 'rechnen'],
      ['brevitytrainer', 'Brevity-Trainer', 'Begriff zur Bedeutung und umgekehrt – mit NATO-Kennzeichnung.', 'brevity'],
      ['funk', 'Funkbeispiele', 'Komplette Funksprüche aus JP 3-09.3. JTAC-Funksprüche verdecken und selbst sprechen.', null]
    ];
    var h = '<div class="view">' + head('Üben', 'Training', 'Die Trainer zielen auf das, was im Lehrgang am Funkgerät sitzen muss: Formate, Reihenfolgen, Umrechnungen und Entscheidungen. Fortschritt wird pro Trainer gezählt.') +
      '<div class="grid-cards">' + t.map(function (x) {
        return '<a class="panel" href="#' + x[0] + '" style="text-decoration:none;color:inherit;display:grid;gap:.4rem"><h3>' + esc(x[1]) + '</h3><p class="small muted">' + esc(x[2]) + '</p>' +
          (x[3] ? '<span class="small">' + esc(statLine(x[3])) + '</span>' : '') + '</a>';
      }).join('') + '</div>' +
      LP.callout('atp', 'Abgleich mit der ATP-3.3.2.1', 'Die Trainer folgen JP 3-09.3 (2014). Prüfe in deiner ATP besonders: Zeilentitel beim Übermitteln, Readback-Pflichten (laut JP 3-09.3 verlangt die ATP zusätzlich Line 8), Formate für Check-in, Situation Update und BDA sowie die NATO-Bedeutung der markierten Brevity-Begriffe.') +
      '</div>';
    return h;
  };

  /* ---------- 9-Line-Trainer ---------- */
  var nl = { idx: -1, sc: null, checked: false, vals: {}, rb: {}, rbChecked: false };
  var NL_IPS = ['HAMMER', 'ANVIL', 'SABER', 'FALCON', 'MAPLE', 'OSPREY', 'KESTREL', 'BISON', 'GRANITE', 'COBALT'];
  var NL_BPS = ['BP ROSE', 'BP TULIP', 'BP IVY', 'BP OAK'];
  var NL_SQ = ['NB', 'NC', 'PB', 'PC', 'MB', 'LB'];
  var NL_TGT = [
    { de: 'Zwei Schützenpanzer, eingegraben am Waldrand', en: 'Two BMPs dug in at the tree line', keys: [['2', 'TWO', 'ZWEI'], ['BMP', 'SCHUETZENPANZER', 'APC', 'IFV']] },
    { de: 'Mörserstellung mit etwa sechs Soldaten im Freien', en: 'Mortar position with six personnel in the open', keys: [['MORTAR', 'MOERSER']] },
    { de: 'Einzelner Kampfpanzer in Deckung hinter einem Gehöft', en: 'Single tank in defilade behind a farmhouse', keys: [['TANK', 'KAMPFPANZER', 'PANZER', 'MBT']] },
    { de: 'Drei Lkw mit abgesessener Infanterie an einer Kreuzung', en: 'Three trucks with dismounted infantry at an intersection', keys: [['3', 'THREE', 'DREI'], ['TRUCK', 'LKW', 'VEHICLE']] },
    { de: 'Flugabwehr-Kanonenstellung (ZSU) am Hang', en: 'ZSU AAA position on the slope', keys: [['ZSU', 'AAA', 'FLAK', 'FLUGABWEHR']] },
    { de: 'Infanterie in Zugstärke in einem Graben', en: 'Platoon-size infantry in a trench line', keys: [['INFANTRY', 'INFANTERIE', 'PERSONNEL', 'TROOPS', 'SOLDATEN']] }
  ];
  var NL_MARK = [
    { de: 'Weißer Phosphor (Mörser), 30–45 s vor TOT', en: 'WP', keys: [['WP', 'WHITEPHOSPHORUS', 'WEISSERPHOSPHOR', 'WILLIEPETE', 'WILLYPETE']] },
    { de: 'keine Markierung (BOC)', en: 'No mark', keys: [['NOMARK', 'NONE', 'KEINE']] },
    { de: 'Laser-Handoff durch den JTAC (Rufzeichen „Hawk 11“), Code 1688', en: 'Hawk 11 laser, code 1688', keys: [['LASER'], ['1688']] },
    { de: 'IR-Pointer des JTAC (Nacht)', en: 'IR pointer', keys: [['IR']] },
    { de: 'Rote Rauchmarkierung (Mörser)', en: 'Red smoke', keys: [['RED', 'ROT'], ['SMOKE', 'RAUCH']] }
  ];

  function genNineLine() {
    var bp = Math.random() < 0.3;
    var ipName = bp ? LP.pick(NL_BPS) : LP.pick(NL_IPS);
    var ipBrg = LP.rand(1, 360);
    var distRaw = bp ? LP.rand(15, 45) * 100 : round(LP.rand(55, 150) / 10 * 1.852, 1); // m bzw. km
    var elevM = LP.rand(40, 900);
    var sq = LP.pick(NL_SQ);
    var e = String(LP.rand(0, 9999)).padStart(4, '0');
    var n = String(LP.rand(0, 9999)).padStart(4, '0');
    var tgt = LP.pick(NL_TGT);
    var mark = LP.pick(NL_MARK);
    var fdir = LP.pick(DIRS);
    var fdist = LP.rand(4, 25) * 100;
    var fromFriendly = Math.random() < 0.5;
    var egDir = LP.pick(['N', 'E', 'S', 'W']);
    var fahC = (ipBrg + 180) % 360;
    var restr = 'Final attack headings ' + pad3(fahC - 20) + ' through ' + pad3(fahC + 20);
    return {
      title: 'Zufallslage', bp: bp,
      text: 'Freie Lage. ' + (bp ? 'Hubschrauber halten in einer Battle Position.' : 'Jets kommen über ein IP.') + ' Setze die Rohdaten in die neun Zeilen um.',
      ip: ipName, ipBrg: ipBrg, dist: distRaw, elevM: elevM, grid: '32U ' + sq + ' ' + e + ' ' + n,
      tgt: tgt, mark: mark, fdir: fdir, fdist: fdist, fromFriendly: fromFriendly,
      egress: { de: 'Abflug nach ' + ({ N: 'Norden', E: 'Osten', S: 'Süden', W: 'Westen' })[egDir] + ' zurück zum ' + (bp ? '' : 'IP ') + ipName, dir: egDir, to: ipName },
      restr: restr
    };
  }

  function nlAnswers(sc) {
    var l2 = pad3((sc.ipBrg + 180) % 360);
    var l3 = sc.bp ? Math.round(sc.dist / 100) * 100 : round(sc.dist / 1.852, 1);
    var l4 = Math.round(sc.elevM * 3.28084);
    var fdir = sc.fromFriendly ? opposite(sc.fdir) : sc.fdir;
    var gp = sc.grid.split(' ');
    return {
      1: { model: sc.ip, check: function (v) { return LP.norm(v) === LP.norm(sc.ip) || LP.norm(v) === LP.norm(sc.ip.replace(/^BP /, '')); } },
      2: { model: l2, check: function (v) { var x = num(v); return !isNaN(x) && angDiff(x, parseInt(l2, 10)) === 0; } },
      3: { model: sc.bp ? l3 + ' m' : de(l3, 1) + ' NM', check: function (v) { var t = String(v).trim().replace(/\s*(nm|m|km)$/i, ''); var x = sc.bp ? intNum(t) : num(t); return !isNaN(x) && (sc.bp ? Math.abs(x - l3) <= 100 : Math.abs(x - l3) <= 0.15); } },
      4: { model: l4 + ' feet', check: function (v) { var x = intNum(String(v).trim().replace(/\s*(ft|feet|fuß|fuss)$/i, '')); return !isNaN(x) && Math.abs(x - l4) <= Math.max(5, l4 * 0.01); } },
      5: { model: sc.tgt.en, check: function (v) { return hasAll(v, sc.tgt.keys); } },
      6: { model: gp[1] + ' ' + gp[2] + ' ' + gp[3], check: function (v) { var x = LP.norm(v); return x === LP.norm(sc.grid) || x === LP.norm(gp[1] + gp[2] + gp[3]); } },
      7: { model: sc.mark.en, check: function (v) { return hasAll(v, sc.mark.keys); } },
      8: { model: DIR_EN[fdir] + ' ' + sc.fdist, check: function (v) { var p = parseDirDist(v); return !!p && p.dir === fdir && p.dist === sc.fdist; } },
      9: { model: 'Egress ' + DIR_EN[sc.egress.dir].toLowerCase() + (sc.egress.to ? ' to ' + sc.egress.to : ''), check: function (v) { return hasDir(v, sc.egress.dir); } }
    };
  }

  function nlFacts(sc) {
    var f = [];
    f.push([sc.bp ? 'Battle Position' : 'Initial Point', sc.ip + ' – liegt vom Ziel aus in Richtung ' + pad3(sc.ipBrg) + '° magnetisch, ' + (sc.bp ? de(sc.dist) + ' m' : de(sc.dist, 1) + ' km') + ' entfernt']);
    f.push(['Zielhöhe', de(sc.elevM) + ' m über NN (MSL)']);
    f.push(['Ziel', sc.tgt.de]);
    f.push(['Zielkoordinate', sc.grid + ' (MGRS, WGS-84)']);
    f.push(['Markierung', sc.mark.de]);
    f.push(['Eigene Truppen', sc.fromFriendly
      ? 'Das Ziel liegt ' + de(sc.fdist) + ' m ' + DIR_DE[sc.fdir] + ' der nächsten eigenen Truppe.'
      : 'Nächste eigene Truppe: ' + de(sc.fdist) + ' m ' + DIR_DE[sc.fdir] + ' des Ziels.']);
    f.push(['Abflug', sc.egress.de]);
    if (sc.restr) f.push(['Einschränkung', sc.restr]);
    return f;
  }

  var NL_LINES = [
    ['1', 'IP / BP'], ['2', 'Heading'], ['3', 'Distance'], ['4', 'Elevation'], ['5', 'Description'],
    ['6', 'Location'], ['7', 'Mark'], ['8', 'Friendlies'], ['9', 'Egress']
  ];
  var NL_HINT = {
    1: 'Name des IP bzw. der BP.',
    2: 'Kurs vom IP/BP zum Ziel – Gegenrichtung der Peilung vom Ziel zum IP (±180°), dreistellig.',
    3: 'Jets: Seemeilen auf eine Nachkommastelle (km ÷ 1,852). Hubschrauber: Meter, auf 100 m gerundet.',
    4: 'Fuß MSL: Meter × 3,281.',
    5: 'Knapp und eindeutig – englisch oder deutsch.',
    6: '100-km-Quadrat und Ziffern (ohne Zonenfeld ist üblich).',
    7: 'Art der Markierung; bei Laser Rufzeichen und Code.',
    8: 'Vom Ziel aus: Himmelsrichtung und Meter zur nächsten eigenen Truppe.',
    9: 'Abflugrichtung bzw. -punkt.'
  };

  function nlNew(i) {
    var list = LP.drills.neunline || [];
    nl.idx = i;
    nl.sc = i >= 0 && list[i] ? list[i] : genNineLine();
    nl.checked = false; nl.vals = {}; nl.rb = {}; nl.rbChecked = false;
  }

  V.neunline = function () {
    if (!nl.sc) nlNew((LP.drills.neunline || []).length ? 0 : -1);
    var sc = nl.sc;
    var ans = nlAnswers(sc);
    var list = LP.drills.neunline || [];
    var h = '<div class="view narrow">' + backLink() + head('Training', '9-Line-Trainer', 'Lies die Lage wie auf deinem Notizblock und übertrage sie in den CAS-Brief. Alles ist so gerechnet, wie JP 3-09.3 die Zeilen definiert. ' + esc(statLine('neunline')) + '.');
    h += '<div class="row"><div class="field" style="min-width:min(100%,320px)"><label for="nl-pick">Lage</label><select id="nl-pick">' +
      list.map(function (s, i) { return '<option value="' + i + '"' + (nl.idx === i ? ' selected' : '') + '>' + esc((i + 1) + '. ' + s.title) + '</option>'; }).join('') +
      '<option value="-1"' + (nl.idx === -1 ? ' selected' : '') + '>Zufallslage erzeugen</option></select></div><span class="spacer"></span>' +
      '<button class="btn ghost small" type="button" data-act="nl-new">' + (nl.idx === -1 ? 'Neue Zufallslage' : 'Zurücksetzen') + '</button></div>';
    h += '<div class="scenario"><h3>' + esc(sc.title) + '</h3>' + (sc.text ? '<p class="small">' + sc.text + '</p>' : '') +
      '<dl class="facts">' + nlFacts(sc).map(function (f) { return '<dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd>'; }).join('') + '</dl></div>';
    h += '<form id="nl-form" class="stack" autocomplete="off"><div class="nl-grid">' + NL_LINES.map(function (l) {
      var k = l[0];
      var v = nl.vals[k] || '';
      var res = nl.checked ? ans[k].check(v) : null;
      return '<div class="nl-row' + (res === true ? ' ok' : res === false ? ' bad' : '') + '"><span class="n">' + k + '</span><label class="l" for="nl-' + k + '">' + esc(l[1]) + '</label>' +
        '<input type="text" id="nl-' + k + '" data-nl="' + k + '" value="' + esc(v) + '" spellcheck="false"' + (nl.checked ? ' readonly' : '') + '>' +
        '<span class="res' + (res === true ? ' ok' : res === false ? ' bad' : '') + '" aria-hidden="true">' + (res === true ? '✓' : res === false ? '✗' : '') + '</span>' +
        '<span class="hint">' + (nl.checked ? 'Muster: <span class="mono">' + esc(ans[k].model) + '</span>' + (res ? '' : ' · ' + esc(NL_HINT[k])) : esc(NL_HINT[k])) + '</span></div>';
    }).join('') + '</div>';
    if (sc.restr) {
      h += '<p class="small"><strong>Remarks/Restrictions:</strong> <span class="mono">' + esc(sc.restr) + '</span></p>';
    }
    if (!nl.checked) {
      h += '<div class="row"><button class="btn accent" type="submit">Prüfen</button></div>';
    } else {
      var okN = NL_LINES.filter(function (l) { return ans[l[0]].check(nl.vals[l[0]] || ''); }).length;
      h += '<div class="feedback ' + (okN === 9 ? 'ok' : 'bad') + '"><span class="ft">' + okN + ' von 9 Zeilen richtig</span><div class="small">Freitext-Zeilen (5, 7, 9) werden nur auf Schlüsselbegriffe geprüft – vergleiche selbst mit dem Muster.</div></div>';
    }
    h += '</form>';
    if (nl.checked) {
      var RB = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'R'];
      var need = { '4': 1, '6': 1, R: 1 };
      h += '<section class="panel stack"><h3>Und jetzt: Was muss die Besatzung zurücklesen?</h3><div class="checks">' + RB.map(function (k) {
        var on = !!nl.rb[k];
        var cls = '';
        if (nl.rbChecked) cls = (!!need[k] === on) ? ' style="color:var(--ok)"' : ' style="color:var(--crit)"';
        return '<label class="check"' + cls + '><input type="checkbox" data-nlrb="' + k + '"' + (on ? ' checked' : '') + (nl.rbChecked ? ' disabled' : '') + '><span>' + (k === 'R' ? 'Restrictions' : 'Line ' + k) + '</span></label>';
      }).join('') + '</div>';
      if (!nl.rbChecked) h += '<div class="row"><button class="btn" type="button" data-act="nl-rb">Readbacks prüfen</button></div>';
      else {
        var rbOk = RB.every(function (k) { return !!need[k] === !!nl.rb[k]; });
        h += '<div class="feedback ' + (rbOk ? 'ok' : 'bad') + '"><span class="ft">' + (rbOk ? 'Richtig' : 'Nicht ganz') + '</span><div>Nach JP 3-09.3 sind <strong>Line 4, Line 6 und alle Restrictions</strong> (hier z. B. FAH, Staffelung, TOT) Pflicht-Readback. Bei BOT liest nur die Führungsmaschine zurück, bei BOC jedes Luftfahrzeug, das Waffen einsetzt – aus dem eigenen System.</div>' +
          LP.callout('nato', 'NATO', 'JP 3-09.3 vermerkt: Die ATP-3.3.2.1 verlangt zusätzlich <strong>Line 8</strong> als Pflicht-Readback, und NATO-JTACs nennen die Zeilentitel. Prüfe das in deiner ATP.') + '</div>';
      }
      h += '</section><div class="row"><button class="btn accent" type="button" data-act="nl-next">' + (nl.idx >= 0 && nl.idx + 1 < list.length ? 'Nächste Lage' : 'Neue Zufallslage') + '</button></div>';
    }
    h += LP.srcChips([['jp3093', 'Kap. V, Abb. V-9'], ['jp3093', 'Kap. III, Methods of Attack']]) + '</div>';
    return h;
  };

  /* ---------- Kontrollart-Trainer ---------- */
  var ko = { order: null, pos: 0, pick: { type: null, moa: null }, checked: false, right: 0, total: 0 };
  function koItems() { return LP.drills.kontrolle || []; }
  V.kontrolle = function () {
    var items = koItems();
    if (!ko.order) ko.order = LP.shuffle(items.map(function (_, i) { return i; }));
    var h = '<div class="view narrow">' + backLink() + head('Training', 'Kontrollart und Angriffsmethode', 'Beurteile jede Lage: Welche Kontrollart (Type 1, 2, 3) und welche Angriffsmethode (BOT, BOC) passt? Grundlage sind die Kriterien aus JP 3-09.3. ' + esc(statLine('kontrolle')) + '.');
    if (ko.pos >= ko.order.length) {
      h += '<div class="panel stack"><h3>Durchgang beendet</h3><p>' + ko.right + ' von ' + ko.total + ' Lagen vollständig richtig.</p><div class="row"><button class="btn accent" type="button" data-act="ko-restart">Neu mischen</button></div></div></div>';
      return h;
    }
    var it = items[ko.order[ko.pos]];
    h += '<div class="row small muted"><span>Lage ' + (ko.pos + 1) + ' von ' + ko.order.length + '</span></div>';
    h += '<div class="scenario"><h3>' + esc(it.title) + '</h3><div class="prose">' + it.sit + '</div></div>';
    h += '<div class="two-col"><fieldset><legend>Kontrollart</legend><div class="row">' + [1, 2, 3].map(function (t) {
      return opt('type', t, 'Type ' + t);
    }).join('') + '</div></fieldset><fieldset><legend>Angriffsmethode</legend><div class="row">' + ['BOT', 'BOC'].map(function (m) {
      return opt('moa', m, m);
    }).join('') + '</div></fieldset></div>';
    if (!ko.checked) {
      h += '<div class="row"><button class="btn accent" type="button" data-act="ko-check"' + (ko.pick.type && ko.pick.moa ? '' : ' disabled') + '>Prüfen</button></div>';
    } else {
      var okT = ko.pick.type === it.type, okM = ko.pick.moa === it.moa;
      h += '<div class="feedback ' + (okT && okM ? 'ok' : 'bad') + '"><span class="ft">Lösung: Type ' + it.type + ', ' + it.moa + (okT && okM ? ' – richtig' : '') + '</span><div>' + it.why + '</div>' + LP.srcChips(it.src) + '</div>' +
        '<div class="row"><button class="btn accent" type="button" data-act="ko-next">Nächste Lage</button></div>';
    }
    h += '</div>';
    return h;
    function opt(name, val, label) {
      var on = ko.pick[name] === val;
      var cls = '';
      if (ko.checked) {
        var right = (name === 'type' ? it.type : it.moa) === val;
        if (right) cls = ' style="border-color:var(--ok);background:var(--ok-soft)"';
        else if (on) cls = ' style="border-color:var(--crit);background:var(--crit-soft)"';
      }
      return '<button type="button" class="btn ghost' + (on ? ' accent' : '') + '" data-ko="' + name + ':' + val + '" aria-pressed="' + on + '"' + cls + (ko.checked ? ' disabled' : '') + '>' + esc(label) + '</button>';
    }
  };

  /* ---------- Reihenfolgen ---------- */
  var sq = { idx: 0, pool: null, built: [], checked: false };
  function sqItems() { return LP.drills.sequences || []; }
  function sqReset(i) {
    var s = sqItems()[i];
    sq.idx = i;
    sq.built = [];
    sq.checked = false;
    var order = s.items.map(function (_, k) { return k; });
    do { order = LP.shuffle(order); } while (order.length > 2 && order.every(function (v, k) { return s.items[v] === s.items[k]; }));
    sq.pool = order;
  }
  V.reihenfolge = function () {
    var list = sqItems();
    if (!sq.pool) sqReset(0);
    var s = list[sq.idx];
    var h = '<div class="view narrow">' + backLink() + head('Training', 'Reihenfolgen', 'Tippe die Bausteine in der richtigen Reihenfolge an. Ein Tipp auf einen gesetzten Baustein legt ihn zurück. ' + esc(statLine('reihenfolge')) + '.');
    h += '<div class="field" style="max-width:420px"><label for="sq-pick">Format</label><select id="sq-pick">' + list.map(function (x, i) {
      var st = LP.state.drills['seq-' + x.id];
      return '<option value="' + i + '"' + (i === sq.idx ? ' selected' : '') + '>' + esc(x.title) + (st && st.ok ? ' ✓' : '') + '</option>';
    }).join('') + '</select></div>';
    if (s.intro) h += '<p class="small muted">' + s.intro + '</p>';
    if (s.mn) h += '<details class="mnemo"><summary>Merkwort anzeigen</summary><div class="callout tip"><div class="ct">Merkwort</div>' +
      '<div class="mn-word">' + s.mn.w.split('').map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' +
      (s.mn.q ? '<div class="small">' + s.mn.q + '</div>' : '') + (s.mn.hint ? '<p class="small">' + esc(s.mn.hint) + '</p>' : '') +
      LP.srcChips(s.mn.src) + '</div></details>';
    h += '<div class="two-col"><div class="stack"><h4>Deine Reihenfolge</h4><div class="seq-built">' +
      (sq.built.length ? sq.built.map(function (k, pos) {
        var cls = sq.checked ? (s.items[k] === s.items[pos] ? ' ok' : ' bad') : '';
        return '<button type="button" class="seq-item' + cls + '" data-sq-out="' + pos + '"' + (sq.checked ? ' disabled' : '') + '><span class="sn">' + (pos + 1) + '</span>' + esc(s.items[k]) + '</button>';
      }).join('') : '<p class="empty small">Noch leer – tippe rechts bzw. unten auf den ersten Baustein.</p>') + '</div></div>' +
      '<div class="stack"><h4>Bausteine</h4><div class="seq-pool">' +
      (sq.pool.length ? sq.pool.map(function (k) {
        return '<button type="button" class="seq-item" data-sq-in="' + k + '">' + esc(s.items[k]) + '</button>';
      }).join('') : '<p class="empty small">Alle Bausteine gesetzt.</p>') + '</div></div></div>';
    if (!sq.checked) {
      h += '<div class="row"><button class="btn accent" type="button" data-act="sq-check"' + (sq.pool.length ? ' disabled' : '') + '>Prüfen</button><button class="btn ghost" type="button" data-act="sq-reset">Neu mischen</button></div>';
    } else {
      var ok = sq.built.every(function (k, pos) { return s.items[k] === s.items[pos]; });
      h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><span class="ft">' + (ok ? 'Richtig' : 'Richtige Reihenfolge') + '</span>' +
        (ok ? '' : '<ol class="small" style="margin:.2rem 0 0;padding-left:1.3rem">' + s.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>') +
        (s.note ? '<div class="small">' + s.note + '</div>' : '') + LP.srcChips(s.src) + '</div>' +
        '<div class="row"><button class="btn ghost" type="button" data-act="sq-reset">Noch einmal</button><button class="btn accent" type="button" data-act="sq-next">Nächstes Format</button></div>';
    }
    h += '</div>';
    return h;
  };

  /* ---------- Brevity-Trainer ---------- */
  var bt = { mode: 'term', onlyDiff: false, q: null, picked: null, right: 0, total: 0 };
  function btPool() { return LP.brevity.filter(function (b) { return !bt.onlyDiff || b.nato; }); }
  function btNew() {
    var pool = btPool();
    if (pool.length < 4) { bt.q = null; return; }
    var item = LP.pick(pool);
    var others = LP.shuffle(LP.brevity.filter(function (b) { return b.t !== item.t && b.en !== item.en; })).slice(0, 3);
    bt.q = { item: item, opts: LP.shuffle([item].concat(others)) };
    bt.picked = null;
  }
  V.brevitytrainer = function () {
    if (!bt.q) btNew();
    var h = '<div class="view narrow">' + backLink() + head('Training', 'Brevity-Trainer', 'Brevity-Begriffe aus ATP 1-02.1 (2025). Achte auf die Kennzeichnung: <span class="chip warn">*</span> NATO-Bedeutung weicht ab, <span class="chip crit">**</span> kein NATO-Brevity-Begriff. ' + esc(statLine('brevity')) + '.');
    h += '<div class="row"><fieldset><legend>Richtung</legend><div class="row">' +
      '<label class="check"><input type="radio" name="bt-mode" value="term"' + (bt.mode === 'term' ? ' checked' : '') + '><span>Begriff → Bedeutung</span></label>' +
      '<label class="check"><input type="radio" name="bt-mode" value="mean"' + (bt.mode === 'mean' ? ' checked' : '') + '><span>Bedeutung → Begriff</span></label></div></fieldset>' +
      '<label class="check"><input type="checkbox" id="bt-diff"' + (bt.onlyDiff ? ' checked' : '') + '><span>nur NATO-abweichende Begriffe</span></label></div>';
    if (!bt.q) { h += '<p class="empty">Zu wenige Begriffe für diese Auswahl.</p></div>'; return h; }
    var it = bt.q.item;
    var answered = bt.picked !== null;
    h += '<div class="row small muted"><span>Runde: ' + bt.right + ' von ' + bt.total + ' richtig</span></div>';
    h += '<div class="quiz-q">' + (bt.mode === 'term' ? '<span class="mono">' + esc(it.t) + '</span>' : '<span class="en-def">' + esc(it.en) + '</span>') + '</div><div class="options">' +
      bt.q.opts.map(function (o, k) {
        var cls = 'option';
        if (answered) { if (o === it) cls += ' right'; else if (k === bt.picked) cls += ' wrong'; }
        return '<button type="button" class="' + cls + '" data-bt="' + k + '"' + (answered ? ' disabled' : '') + '><span class="ol">' + 'ABCD'[k] + '</span><span>' + (bt.mode === 'term' ? '<span class="en-def">' + esc(o.en) + '</span>' : '<span class="mono">' + esc(o.t) + '</span>') + '</span></button>';
      }).join('') + '</div>';
    if (answered) {
      var ok = bt.q.opts[bt.picked] === it;
      h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><span class="ft">' + esc(it.t) + (it.nato ? ' <span class="chip ' + (it.nato === '**' ? 'crit' : 'warn') + '">' + it.nato + '</span>' : '') + '</span>' +
        '<div class="en-def">' + esc(it.en) + '</div><div class="small muted">Kurzhilfe: ' + esc(it.de) + '</div>' +
        (it.nato ? '<div class="small">' + (it.nato === '**' ? 'Kein NATO-Brevity-Begriff – in NATO-Verfahren nicht voraussetzen; in der ATP prüfen, ob ein anderer Begriff verwendet wird.' : 'Die NATO-Bedeutung weicht ab – in der ATP bzw. NATO-Brevity nachsehen.') + '</div>' : '') +
        LP.srcChips(it.src) + '</div><div class="row"><button class="btn accent" type="button" data-act="bt-next">Nächster Begriff</button></div>';
    }
    h += '</div>';
    return h;
  };

  /* ---------- Rechentrainer ----------
     Jede Aufgabe zeigt mit der Lösung die zugrunde liegende Regel im Originalwortlaut (LP.calcRefs, erzeugt von
     tools/build.py). ref: Schlüssel in LP.calcRefs, wenn er von der Aufgaben-ID abweicht. */
  function mksCheck(target, tol) { return function (v) { var x = num(String(v).replace(/\s*(m|km|strich|mil|mils)$/i, '')); return !isNaN(x) && Math.abs(x - target) <= tol; }; }
  var CALC = [
    { id: 'line8', t: 'Line 8 vom Ziel aus', gen: function () {
      var d = LP.pick(DIRS), dist = LP.rand(3, 30) * 100;
      var ans = opposite(d);
      return { q: 'Das Ziel liegt <strong>' + de(dist) + ' m ' + DIR_DE[d] + '</strong> deiner Stellung. Du bist die nächste eigene Truppe. Wie lautet Line 8?',
        ph: 'z. B. Southwest 300', check: function (v) { var p = parseDirDist(v); return !!p && p.dir === ans && p.dist === dist; },
        sol: '<span class="mono">' + DIR_EN[ans] + ' ' + dist + '</span> – vom Ziel aus gesehen liegt deine Stellung ' + DIR_EN[ans].toLowerCase() + '.' };
    } },
    { id: 'reverse', t: 'Line 2: Kurs vom IP', gen: function () {
      var b = LP.rand(1, 360), ans = (b + 180) % 360 || 360;
      return { q: 'Das IP liegt vom Ziel aus in Richtung <strong>' + pad3(b) + '° magnetisch</strong>. Welches Heading gibst du in Line 2?',
        ph: 'dreistellig', check: function (v) { var x = num(v); return !isNaN(x) && angDiff(x, ans) === 0; },
        sol: '<span class="mono">' + pad3(ans) + '</span> = ' + pad3(b) + ' ± 180.' };
    } },
    { id: 'm2ft', t: 'Line 4: Meter in Fuß', gen: function () {
      var m = LP.rand(20, 1800), ans = Math.round(m * 3.28084);
      return { q: 'Zielhöhe laut Karte: <strong>' + de(m) + ' m MSL</strong>. Was sagst du in Line 4 (Fuß MSL)?',
        ph: 'Fuß', check: function (v) { var x = intNum(String(v).replace(/\s*(ft|feet)$/i, '')); return !isNaN(x) && Math.abs(x - ans) <= Math.max(5, ans * 0.01); },
        sol: '<span class="mono">' + ans + ' feet</span> = ' + de(m) + ' × 3,281. Kopfrechnen: Meter × 3 plus 10 %.' };
    } },
    { id: 'km2nm', t: 'Line 3: km in NM', gen: function () {
      var km = LP.rand(80, 300) / 10, ans = round(km / 1.852, 1);
      return { q: 'Entfernung IP–Ziel: <strong>' + de(km, 1) + ' km</strong>. Was sagst du in Line 3 (Seemeilen, eine Nachkommastelle)?',
        ph: 'NM', check: function (v) { var x = num(v); return !isNaN(x) && Math.abs(x - ans) <= 0.15; },
        sol: '<span class="mono">' + de(ans, 1) + '</span> NM = ' + de(km, 1) + ' ÷ 1,852. Kopfrechnen: km ÷ 2 plus 8 %.' };
    } },
    { id: 'deg2mil', t: 'Grad in Strich', gen: function () {
      var d = LP.rand(5, 355), ans = Math.round(d * 6400 / 360);
      return { q: 'Richtung <strong>' + d + '°</strong>. Wie viel Strich sind das (6400 Strich = Vollkreis)?',
        ph: 'Strich', check: function (v) { var x = intNum(v); return !isNaN(x) && Math.abs(x - ans) <= 6; },
        sol: '<span class="mono">' + ans + '</span> Strich = ' + d + ' × 6400 ÷ 360 (≈ ' + d + ' × 17,8).' };
    } },
    { id: 'mks', t: 'MKS: Meter = km × Strich', gen: function () {
      var R = LP.rand(5, 40) / 10, m = LP.rand(2, 60), W = round(R * m, 1);
      var obj = LP.pick(['zwei Fahrzeuge', 'zwei Gebäudeecken', 'die Enden einer Baumreihe', 'zwei Stellungen']);
      return { q: 'Im Fernglas liegen ' + obj + ' <strong>' + m + ' Strich</strong> auseinander. Entfernung <strong>' + de(R, 1) + ' km</strong>. Wie viele Meter sind das?', ph: 'Meter',
        check: mksCheck(W, Math.max(1, W * 0.05)), sol: 'Meter = km × Strich = ' + de(R, 1) + ' × ' + m + ' = <span class="mono">' + de(W, 1) + ' m</span>.' };
    } },
    { id: 'mks-km', t: 'MKS: km = Meter ÷ Strich', ref: 'mks', gen: function () {
      var obj = LP.pick([['ein Kampfpanzer', 7], ['ein Lkw', 8], ['ein Schützenpanzer', 6], ['ein Pkw', 5], ['ein Container', 12]]);
      var m = LP.rand(3, 20), R = round(obj[1] / m, 2);
      return { q: obj[0].charAt(0).toUpperCase() + obj[0].slice(1) + ' (etwa <strong>' + obj[1] + ' m</strong> lang, Breitseite) erscheint <strong>' + m + ' Strich</strong> breit. Wie weit ist er entfernt (km)?', ph: 'km',
        check: mksCheck(R, Math.max(0.05, R * 0.06)), sol: 'km = Meter ÷ Strich = ' + obj[1] + ' ÷ ' + m + ' ≈ <span class="mono">' + de(R, 2) + ' km</span> (' + de(R * 1000) + ' m).' };
    } },
    { id: 'mks-strich', t: 'MKS: Strich = Meter ÷ km', ref: 'mks', gen: function () {
      var W = LP.rand(4, 30) * 5, R = LP.rand(10, 40) / 10, m = W / R;
      return { q: 'Ein Gebäude ist bekannt <strong>' + W + ' m</strong> breit und <strong>' + de(R, 1) + ' km</strong> entfernt. Wie viel Strich misst du im Fernglas?', ph: 'Strich',
        check: mksCheck(m, Math.max(1, m * 0.06)), sol: 'Strich = Meter ÷ km = ' + W + ' ÷ ' + de(R, 1) + ' ≈ <span class="mono">' + Math.round(m) + ' Strich</span>.' };
    } },
    { id: 'mks-shift', t: 'MKS: Seitenverschiebung vom Bezugspunkt', ref: 'mks', gen: function () {
      var otm = LP.rand(10, 50) * 100;
      if (otm % 1000 === 500) otm += 100;
      var f = Math.round(otm / 1000), mils = LP.rand(10, 90), side = LP.pick(['LEFT', 'RIGHT']);
      var W = Math.round(f * mils / 10) * 10;
      return { q: 'Das neue Ziel liegt <strong>' + mils + ' Strich ' + (side === 'LEFT' ? 'links' : 'rechts') + '</strong> eines bekannten Punkts. Entfernung Beobachter–Ziel <strong>' + de(otm) + ' m</strong>. Welche Seitenverschiebung meldest du (auf 10 m)?',
        ph: 'z. B. LEFT 120', check: function (v) {
          var n = LP.norm(v).replace('RECHTS', 'RIGHT').replace('LINKS', 'LEFT');
          var m = /^(RIGHT|LEFT)(\d+)M?$/.exec(n); return !!m && m[1] === side && parseInt(m[2], 10) === W; },
        sol: 'OT-Faktor ' + f + ' × ' + mils + ' Strich = ' + (f * mils) + ' m, auf 10 m: <span class="mono">' + side + ' ' + W + '</span> (Verschiebung in Richtung des Ziels vom bekannten Punkt aus).' };
    } },
    { id: 'mks-hob', t: 'MKS: Sprenghöhe (HOB)', gen: function () {
      var otm = LP.rand(10, 50) * 100;
      if (otm % 1000 === 500) otm += 100;
      var f = Math.round(otm / 1000), mils = LP.rand(2, 15), hob = f * mils, diff = 20 - hob;
      var corr = Math.round(Math.abs(diff) / 5) * 5;
      var ans = corr === 0 ? null : (diff > 0 ? 'UP' : 'DOWN') + ' ' + corr;
      return { q: 'Zeitzünder: Der Sprengpunkt liegt <strong>AIR ' + mils + '</strong> (Strich über dem Einschießpunkt), Entfernung Beobachter–Ziel <strong>' + de(otm) + ' m</strong>. Gewünscht sind 20 m HOB. Welche Höhenkorrektur meldest du (auf 5 m)?',
        ph: 'z. B. DOWN 15', check: function (v) {
          var n = LP.norm(v).replace('HOCH', 'UP').replace('RUNTER', 'DOWN');
          if (!ans) return /^(KEINE|KEINEKORREKTUR|NONE|0|UP0|DOWN0)$/.test(n);
          var m = /^(UP|DOWN)(\d+)M?$/.exec(n); return !!m && (m[1] + ' ' + parseInt(m[2], 10)) === ans; },
        sol: 'HOB = ' + mils + ' Strich × OT-Faktor ' + f + ' = ' + hob + ' m. Bis 20 m fehlen ' + diff + ' m, auf 5 m gerundet: <span class="mono">' + (ans || 'keine Korrektur') + '</span>.' };
    } },
    { id: 'ot', t: 'Seitenkorrektur mit OT-Faktor', gen: function () {
      var otm = LP.rand(5, 50) * 100;
      if (otm >= 1000 && otm % 1000 === 500) otm += 100;
      var f = otm < 1000 ? Math.round(otm / 100) / 10 : Math.round(otm / 1000);
      var mils = LP.rand(10, 80), side = LP.pick(['L', 'R']);
      var corr = Math.round(mils * f / 10) * 10;
      var dir = side === 'L' ? 'RIGHT' : 'LEFT';
      return { q: 'Beobachter–Ziel-Entfernung <strong>' + de(otm) + ' m</strong>. Der Einschlag liegt <strong>' + mils + ' Strich ' + (side === 'L' ? 'links' : 'rechts') + '</strong> der Beobachtungslinie. Welche Seitenkorrektur meldest du?',
        ph: 'z. B. RIGHT 60', check: function (v) {
          var n = LP.norm(v).replace('RECHTS', 'RIGHT').replace('LINKS', 'LEFT');
          var m = /^(RIGHT|LEFT)(\d+)M?$/.exec(n); return !!m && m[1] === dir && parseInt(m[2], 10) === corr; },
        sol: 'OT-Faktor ' + de(f, f < 1 ? 1 : 0) + ' × ' + mils + ' Strich = ' + de(mils * f, 1) + ' m, auf 10 m gerundet: <span class="mono">' + dir + ' ' + corr + '</span>' + (corr < 30 ? ' (unter 30 m: minor deviation correction).' : '.') };
    } },
    { id: 'laser', t: 'Laser-Geometrie', choice: true, gen: function () {
      var ltl = LP.rand(1, 360), off = LP.pick([LP.rand(0, 9), LP.rand(11, 44), LP.rand(46, 59), LP.rand(61, 120)]);
      var fah = (ltl + (Math.random() < 0.5 ? off : -off) + 360) % 360 || 360;
      var d = angDiff(fah, ltl);
      var opts = ['safety zone (±10°)', 'preferred (±45°)', 'optimal attack zone (±60°)', 'outside the optimal attack zone'];
      var a = d < 10 ? 0 : d <= 45 ? 1 : d <= 60 ? 2 : 3;
      return { q: 'Laser Target Line <strong>' + pad3(ltl) + '</strong>, geplante Final Attack Heading <strong>' + pad3(fah) + '</strong>. Wo liegt der Anflug?', opts: opts, a: a,
        sol: 'Abweichung |FAH − LTL| = ' + d + '°.' };
    } },
    { id: 'keyhole', t: 'Keyhole', choice: true, gen: function () {
      var pts = [['A', 'North'], ['B', 'East'], ['C', 'South'], ['D', 'West'], ['E', 'Overhead Target']];
      var p = LP.pick(pts), nm = LP.rand(5, 15);
      var word = { A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo' };
      var figure = 'Figure III-18: A – North · B – East · C – South · D – West · E – Overhead Target.';
      if (Math.random() < 0.5) {
        var opts = pts.map(function (x) { return x[0] === 'E' ? 'Echo' : word[x[0]] + ' ' + nm; });
        return { q: 'Du willst die Jets ' + (p[0] === 'E' ? 'direkt über dem Ziel' : nm + ' NM ' + ({ North: 'nördlich', East: 'östlich', South: 'südlich', West: 'westlich' })[p[1]] + ' des Ziels') + ' halten lassen. Welcher Keyhole-Punkt?', opts: opts, a: pts.indexOf(p), sol: figure };
      }
      var opts2 = pts.map(function (x) { return x[0] === 'E' ? 'Overhead Target' : x[1] + ', ' + nm + ' NM'; });
      return { q: 'Der JTAC weist an: „proceed to <strong>' + (p[0] === 'E' ? 'Echo' : word[p[0]] + ' ' + nm) + '</strong>“. Wo hält das Luftfahrzeug?', opts: opts2, a: pts.indexOf(p), sol: figure };
    } },
    { id: 'tle', t: 'TLE-Kategorie', choice: true, gen: function () {
      var cats = [[0, 6], [7, 15], [16, 30], [31, 91], [92, 305], [306, 600]];
      var k = LP.rand(0, 5), m = LP.rand(cats[k][0], cats[k][1]);
      return { q: 'Geschätzter Zielortungsfehler (CE90): <strong>' + m + ' m</strong>. Welche TLE-Kategorie?', opts: ['CAT I', 'CAT II', 'CAT III', 'CAT IV', 'CAT V', 'CAT VI'], a: k,
        sol: 'Figure III-5: CAT I 0-6 m · CAT II 7-15 m · CAT III 16-30 m · CAT IV 31-91 m · CAT V 92-305 m · CAT VI (>305m).' };
    } },
    { id: 'mgrs', t: 'Stellenzahl und Präzision', choice: true, gen: function () {
      var k = LP.rand(0, 2);
      var digits = [6, 8, 10][k];
      var ex = { 6: 'NB 452 883', 8: 'NB 4521 8834', 10: 'NB 45213 88347' }[digits];
      return { q: 'Eine MGRS-Koordinate mit <strong>' + digits + ' Ziffern</strong> (z. B. <span class="mono">' + ex + '</span>) beschreibt einen Punkt mit welcher Auflösung?', opts: ['100 m', '10 m', '1 m'], a: k,
        sol: '6 Ziffern = 100 m, 8 Ziffern = 10 m, 10 Ziffern = 1 m.' };
    } },
    { id: 'dc', t: 'Danger Close (Steilfeuer)', choice: true, gen: function () {
      var sys = LP.pick([['Mörser', 600], ['Rohrartillerie', 600], ['5-inch naval gun', 750]]);
      var d = LP.pick([LP.rand(2, 5) * 100, LP.rand(7, 12) * 100, sys[1] === 750 ? 650 : 550, sys[1] === 750 ? 800 : 650]);
      if (d === sys[1]) d += 50;
      var dc = d < sys[1];
      return { q: sys[0] + ': Ziel <strong>' + de(d) + ' m</strong> von eigenen Truppen entfernt. Ist der Call for Fire „Danger Close“?', opts: ['ja – DANGER CLOSE', 'nein'], a: dc ? 0 : 1,
        sol: de(d) + ' m ' + (dc ? '<' : '>') + ' ' + sys[1] + ' m. Für CAS gelten stattdessen die Risk-Estimate Distances aus der JFIRE (nur in deinem Print).' };
    } },
    { id: 'sead', t: 'SEAD-Zeiten (Faustformel)', gen: function () {
      var rw = Math.random() < 0.3;
      if (rw) {
        var km = LP.rand(2, 8), s = Math.round(km / 4 * 60);
        return { q: 'Hubschrauber (RW CAS 4km/min) muss <strong>' + km + ' km</strong> im Wirkbereich einer Bedrohung zurücklegen. Wie viele Sekunden dauert das?', ph: 'Sekunden',
          check: function (v) { var x = num(v); return !isNaN(x) && Math.abs(x - s) <= 5; }, sol: km + ' ÷ 4 × 60 = <span class="mono">' + s + ' s</span>.' };
      }
      var a10 = Math.random() < 0.3, sp = a10 ? 5 : 8, nm = LP.rand(3, 8), sec = Math.round(nm / sp * 60);
      return { q: (a10 ? 'A-10 (5nm/min)' : 'FW CAS (8nm/min)') + ', Bedrohung mit <strong>' + nm + ' NM</strong> maximaler Wirkreichweite am Ziel. Wie viele Sekunden vor TOT tritt das Luftfahrzeug in die Reichweite ein?', ph: 'Sekunden',
        check: function (v) { var x = num(v); return !isNaN(x) && Math.abs(x - sec) <= 5; },
        sol: nm + ' ÷ ' + sp + ' × 60 ≈ <span class="mono">' + sec + ' s</span>.' };
    } },
    { id: 'fah', t: 'FAH aus Himmelsrichtung', gen: function () {
      var from = LP.pick(DIRS), hdg = (DIRS.indexOf(opposite(from)) * 45);
      var lo = (hdg - 45 + 360) % 360, hi = (hdg + 45) % 360;
      var fromDe = { N: 'Norden', NE: 'Nordosten', E: 'Osten', SE: 'Südosten', S: 'Süden', SW: 'Südwesten', W: 'Westen', NW: 'Nordwesten' }[from];
      return { q: 'Die Einschränkung lautet „attack from the <strong>' + DIR_EN[from].toLowerCase() + '</strong>“ (Angriff aus ' + fromDe + '). Welcher Bereich von Final Attack Headings ist damit gemeint?', ph: 'z. B. 135-225',
        check: function (v) { var m = String(v).match(/\d+/g); if (!m || m.length < 2) return false; return angDiff(parseInt(m[0], 10), lo) === 0 && angDiff(parseInt(m[1], 10), hi) === 0; },
        sol: '<span class="mono">' + pad3(lo) + '–' + pad3(hi) + '</span> = ' + pad3(hdg) + ' ± 45.' };
    } }
  ];
  var rc = { sel: 'mix', task: null, val: '', picked: null, checked: false, right: 0, total: 0 };
  function rcNew() {
    var g = rc.sel === 'mix' ? LP.pick(CALC) : CALC.filter(function (c) { return c.id === rc.sel; })[0];
    rc.task = g.gen();
    rc.task.gid = g.id;
    rc.task.ref = g.ref || g.id;
    rc.task.choice = !!g.choice;
    rc.val = ''; rc.picked = null; rc.checked = false;
  }
  V.rechnen = function () {
    if (!rc.task) rcNew();
    var t = rc.task;
    var h = '<div class="view narrow">' + backLink() + head('Training', 'Rechentrainer', 'Zufallsaufgaben zu Werten, die du im Kopf parat haben musst. Jede Aufgabe ist neu erzeugt. ' + esc(statLine('rechnen')) + '.');
    h += '<div class="row"><div class="field" style="min-width:min(100%,320px)"><label for="rc-sel">Aufgabentyp</label><select id="rc-sel"><option value="mix">gemischt</option>' +
      CALC.map(function (c) { return '<option value="' + c.id + '"' + (rc.sel === c.id ? ' selected' : '') + '>' + esc(c.t) + '</option>'; }).join('') + '</select></div>' +
      '<span class="spacer"></span><span class="small muted">Runde: ' + rc.right + ' von ' + rc.total + '</span></div>';
    h += '<div class="quiz-q">' + t.q + '</div>';
    if (t.choice) {
      h += '<div class="options">' + t.opts.map(function (o, k) {
        var cls = 'option';
        if (rc.checked) { if (k === t.a) cls += ' right'; else if (k === rc.picked) cls += ' wrong'; }
        return '<button type="button" class="' + cls + '" data-rc="' + k + '"' + (rc.checked ? ' disabled' : '') + '><span class="ol">' + 'ABCDEF'[k] + '</span><span>' + esc(o) + '</span></button>';
      }).join('') + '</div>';
    } else {
      h += '<form id="rc-form" class="row" autocomplete="off"><div class="field" style="flex:1;min-width:200px"><label for="rc-in">Antwort</label><input type="text" id="rc-in" inputmode="text" placeholder="' + esc(t.ph || '') + '" value="' + esc(rc.val) + '"' + (rc.checked ? ' readonly' : '') + '></div>' +
        (rc.checked ? '' : '<button class="btn accent" type="submit" style="align-self:end">Prüfen</button>') + '</form>';
    }
    if (rc.checked) {
      var ok = t.choice ? rc.picked === t.a : t.check(rc.val);
      var ref = (LP.calcRefs || {})[t.ref];
      h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><span class="ft">' + (ok ? 'Richtig' : 'Nicht richtig') + '</span><div>' + t.sol + '</div>' +
        (ref ? '<div class="small">' + ref.q + '</div>' + LP.srcChips(ref.src) : '') + '</div>' +
        '<div class="row"><button class="btn accent" type="button" data-act="rc-next">Nächste Aufgabe</button></div>';
    }
    h += '</div>';
    return h;
  };
  V.calcGenerators = CALC; // für Tests

  /* ---------- Funkbeispiele ---------- */
  var fk = { idx: 0, hide: false, answers: {} };
  V.funk = function () {
    var list = LP.scripts;
    var s = list[fk.idx];
    var h = '<div class="view narrow">' + head('Üben', 'Funkbeispiele', 'Die neun Beispiele aus JP 3-09.3 Anhang E vollständig im Originalwortlaut, mit den Erläuterungen der Vorschrift zwischen den Funksprüchen. Schalte „JTAC verdecken“ ein, sprich die Funksprüche des Controllers laut und decke sie dann auf.');
    h += '<div class="row"><div class="field" style="min-width:min(100%,360px)"><label for="fk-pick">Beispiel</label><select id="fk-pick">' + list.map(function (x, i) {
      return '<option value="' + i + '"' + (i === fk.idx ? ' selected' : '') + '>' + esc(x.title) + '</option>';
    }).join('') + '</select></div><span class="spacer"></span><label class="check"><input type="checkbox" id="fk-hide"' + (fk.hide ? ' checked' : '') + '><span>JTAC verdecken</span></label></div>';
    if (!s) return h + '</div>';
    h += '<div class="scenario"><h3>' + esc(s.title) + '</h3><div class="prose small">' + s.intro + '</div>' +
      (s.tags ? '<div class="row">' + s.tags.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' : '') + '</div>';
    h += LP.radio(s.lines, { hideJtac: fk.hide });
    if (s.points && s.points.length) {
      h += '<section class="stack"><h3>Worauf achten</h3><ul class="small" style="margin:0;padding-left:1.2rem;display:grid;gap:.3rem">' + s.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></section>';
    }
    if (s.qs && s.qs.length) {
      h += '<section class="stack"><h3>Fragen zum Beispiel</h3>' + s.qs.map(function (q, qi) {
        var key = fk.idx + '-' + qi;
        var picked = fk.answers[key];
        return '<div class="panel stack"><div style="font-weight:600">' + q.q + '</div><div class="options">' + q.o.map(function (o, k) {
          var cls = 'option';
          if (picked !== undefined) { if (k === q.a) cls += ' right'; else if (k === picked) cls += ' wrong'; }
          return '<button type="button" class="' + cls + '" data-fk="' + qi + ':' + k + '"' + (picked !== undefined ? ' disabled' : '') + '><span class="ol">' + 'ABCD'[k] + '</span><span>' + o + '</span></button>';
        }).join('') + '</div>' + (picked !== undefined && q.e ? '<p class="small muted">' + q.e + '</p>' : '') + '</div>';
      }).join('') + '</section>';
    }
    h += LP.srcChips(s.src);
    h += '<div class="row">' + (fk.idx > 0 ? '<button class="btn ghost" type="button" data-act="fk-prev">← Vorheriges</button>' : '') + '<span class="spacer"></span>' +
      (fk.idx + 1 < list.length ? '<button class="btn" type="button" data-act="fk-next">Nächstes →</button>' : '') + '</div></div>';
    return h;
  };

  /* ---------- Spickzettel ---------- */
  V.spick = function () {
    var h = '<div class="view">' + head('Lernen', 'Spickzettel', 'Die wichtigsten Formate als Kniebrett-Karten. <span class="mono">*</span> = Pflicht-Readback nach JP 3-09.3. Zum Ausdrucken die Druckfunktion des Browsers nutzen.');
    h += '<div class="spick-grid">' + LP.spick.map(function (k) {
      return '<div class="stack">' + LP.kneeboard(k) + (k.src ? LP.srcChips(k.src) : '') + '</div>';
    }).join('') + '</div></div>';
    return h;
  };

  /* ---------- Ereignisse der Trainer ---------- */
  V.drillClick = function (e) {
    var t = e.target.closest('[data-act], [data-ko], [data-sq-in], [data-sq-out], [data-bt], [data-rc], [data-fk]');
    if (!t) return false;
    if (t.hasAttribute('data-ko')) {
      var kv = t.getAttribute('data-ko').split(':');
      ko.pick[kv[0]] = kv[0] === 'type' ? parseInt(kv[1], 10) : kv[1];
      LP.render(true); return true;
    }
    if (t.hasAttribute('data-sq-in')) {
      var k = parseInt(t.getAttribute('data-sq-in'), 10);
      sq.pool.splice(sq.pool.indexOf(k), 1); sq.built.push(k); LP.render(true); return true;
    }
    if (t.hasAttribute('data-sq-out')) {
      var pos = parseInt(t.getAttribute('data-sq-out'), 10);
      sq.pool.push(sq.built.splice(pos, 1)[0]); LP.render(true); return true;
    }
    if (t.hasAttribute('data-bt')) {
      if (bt.picked !== null) return true;
      bt.picked = parseInt(t.getAttribute('data-bt'), 10);
      var okB = bt.q.opts[bt.picked] === bt.q.item;
      bt.total++; if (okB) bt.right++;
      drillStat('brevity', okB);
      LP.render(true); return true;
    }
    if (t.hasAttribute('data-rc')) {
      if (rc.checked) return true;
      rc.picked = parseInt(t.getAttribute('data-rc'), 10);
      rc.checked = true;
      var okR = rc.picked === rc.task.a;
      rc.total++; if (okR) rc.right++;
      drillStat('rechnen', okR);
      LP.render(true); return true;
    }
    if (t.hasAttribute('data-fk')) {
      var p = t.getAttribute('data-fk').split(':');
      fk.answers[fk.idx + '-' + p[0]] = parseInt(p[1], 10);
      LP.render(true); return true;
    }
    switch (t.getAttribute('data-act')) {
      case 'nl-new': nlNew(nl.idx); LP.render(true); return true;
      case 'nl-next':
        var list = LP.drills.neunline || [];
        nlNew(nl.idx >= 0 && nl.idx + 1 < list.length ? nl.idx + 1 : -1); LP.render(); return true;
      case 'nl-rb':
        nl.rbChecked = true;
        var need = { '4': 1, '6': 1, R: 1 };
        drillStat('neunline-rb', ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'R'].every(function (x) { return !!need[x] === !!nl.rb[x]; }));
        LP.render(true); return true;
      case 'ko-check':
        var it = koItems()[ko.order[ko.pos]];
        ko.checked = true; ko.total++;
        var okK = ko.pick.type === it.type && ko.pick.moa === it.moa;
        if (okK) ko.right++;
        drillStat('kontrolle', okK);
        LP.render(true); return true;
      case 'ko-next': ko.pos++; ko.checked = false; ko.pick = { type: null, moa: null }; LP.render(); return true;
      case 'ko-restart': ko.order = null; ko.pos = 0; ko.right = 0; ko.total = 0; ko.checked = false; ko.pick = { type: null, moa: null }; LP.render(); return true;
      case 'sq-check':
        sq.checked = true;
        var its = sqItems()[sq.idx].items;
        var okS = sq.built.every(function (x, i) { return its[x] === its[i]; });
        drillStat('reihenfolge', okS);
        if (okS) drillStat('seq-' + sqItems()[sq.idx].id, true);
        LP.render(true); return true;
      case 'sq-reset': sqReset(sq.idx); LP.render(true); return true;
      case 'sq-next': sqReset((sq.idx + 1) % sqItems().length); LP.render(); return true;
      case 'bt-next': btNew(); LP.render(true); return true;
      case 'rc-next': rcNew(); LP.render(true); var inp = document.getElementById('rc-in'); if (inp) inp.focus(); return true;
      case 'fk-prev': fk.idx--; LP.render(); return true;
      case 'fk-next': fk.idx++; LP.render(); return true;
    }
    return false;
  };

  V.drillChange = function (e) {
    var t = e.target;
    if (t.id === 'nl-pick') { nlNew(parseInt(t.value, 10)); LP.render(true); return true; }
    if (t.hasAttribute('data-nlrb')) { nl.rb[t.getAttribute('data-nlrb')] = t.checked; return true; }
    if (t.id === 'sq-pick') { sqReset(parseInt(t.value, 10)); LP.render(true); return true; }
    if (t.name === 'bt-mode') { bt.mode = t.value; btNew(); LP.render(true); return true; }
    if (t.id === 'bt-diff') { bt.onlyDiff = t.checked; btNew(); LP.render(true); return true; }
    if (t.id === 'rc-sel') { rc.sel = t.value; rcNew(); LP.render(true); return true; }
    if (t.id === 'fk-pick') { fk.idx = parseInt(t.value, 10); LP.render(true); return true; }
    if (t.id === 'fk-hide') { fk.hide = t.checked; LP.render(true); return true; }
    return false;
  };

  V.drillInput = function (e) {
    var t = e.target;
    if (t.hasAttribute('data-nl')) { nl.vals[t.getAttribute('data-nl')] = t.value; return true; }
    if (t.id === 'rc-in') { rc.val = t.value; return true; }
    return false;
  };

  V.drillSubmit = function (e) {
    if (e.target.id === 'nl-form') {
      e.preventDefault();
      if (nl.checked) return true;
      document.querySelectorAll('[data-nl]').forEach(function (i) { nl.vals[i.getAttribute('data-nl')] = i.value; });
      nl.checked = true;
      var ans = nlAnswers(nl.sc);
      var okN = Object.keys(ans).every(function (k) { return ans[k].check(nl.vals[k] || ''); });
      drillStat('neunline', okN);
      LP.render(true);
      return true;
    }
    if (e.target.id === 'rc-form') {
      e.preventDefault();
      if (rc.checked) return true;
      rc.val = document.getElementById('rc-in').value;
      if (!rc.val.trim()) { LP.toast('Bitte eine Antwort eingeben'); return true; }
      rc.checked = true;
      var okR = rc.task.check(rc.val);
      rc.total++; if (okR) rc.right++;
      drillStat('rechnen', okR);
      LP.render(true);
      return true;
    }
    return false;
  };

  // für Tests und Datenprüfung
  V._drillHelpers = { parseDirDist: parseDirDist, nlAnswers: nlAnswers, genNineLine: genNineLine, opposite: opposite, angDiff: angDiff };
})();
