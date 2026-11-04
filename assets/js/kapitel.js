/* JTAC Lernprogramm – Kapitel aus einer privaten Inhaltsdatei.
   Die Inhaltsdatei (JSON, Format „jtac-lp-inhalt“) wird auf dem Gerät importiert und nur im
   localStorage dieses Browsers gespeichert. Sie ist nicht Teil der App und liegt nicht im Repository –
   die App enthält nur das Gerüst: Import, Kapitelansicht und später die Aufgabentypen.

   Aufbau der Datei:
   { format: "jtac-lp-inhalt", v: 1, doc: "…", edition: "…", stand: "JJJJ-MM-TT",
     parts: [ { id, title, chapters: [ { id, nr, title, nodes: [ {n, t} | {sec, t} ] } ] } ] }
   n = Gliederungsnummer („3.8.1.2“, leer bei Zwischenüberschriften ohne Nummer), sec = Section-Kennung. */
(function () {
  'use strict';
  var LP = window.LP;
  var V = LP.views;
  var esc = LP.esc;
  var KEY = 'jtacLP.inhalt.v1';
  var FORMAT = 'jtac-lp-inhalt';

  function load() {
    try { var r = window.localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function store(obj) {
    try { window.localStorage.setItem(KEY, JSON.stringify(obj)); return true; } catch (e) { return false; }
  }
  function drop() {
    try { window.localStorage.removeItem(KEY); } catch (e) { /* nichts */ }
  }
  LP.inhalt = load();

  function check(o) {
    if (!o || o.format !== FORMAT) return 'Das ist keine Inhaltsdatei für dieses Lernprogramm.';
    if (!Array.isArray(o.parts) || !o.parts.length) return 'Die Datei enthält keine Kapitel.';
    var bad = o.parts.some(function (p) {
      return !Array.isArray(p.chapters) || p.chapters.some(function (c) { return !c.id || !c.title || !Array.isArray(c.nodes); });
    });
    return bad ? 'Die Kapitelstruktur in der Datei ist unvollständig.' : '';
  }

  function chapters() {
    var out = [];
    if (!LP.inhalt) return out;
    LP.inhalt.parts.forEach(function (p) { p.chapters.forEach(function (c) { out.push({ p: p, c: c }); }); });
    return out;
  }
  LP.kapitelCount = function () { return chapters().length; };
  function byId(id) {
    var all = chapters();
    for (var i = 0; i < all.length; i++) if (String(all[i].c.id) === String(id)) return { x: all[i], i: i, all: all };
    return null;
  }
  var numbered = function (c) { return c.nodes.filter(function (n) { return n.n; }).length; };
  var depth = function (n) { return n.n ? n.n.split('.').length : 2; };
  var taskCount = function (c) { return c.nodes.reduce(function (s, n) { return s + ((n.tasks && n.tasks.length) || 0); }, 0); };

  /* ---------- Import ---------- */
  function importPanel(has) {
    return '<div class="panel flat kap-import"><h3>' + (has ? 'Inhaltsdatei' : 'Inhaltsdatei laden') + '</h3>' +
      (has
        ? '<p class="small">Geladen: <strong>' + esc(LP.inhalt.doc || 'Inhalt') + '</strong>' +
          (LP.inhalt.edition ? ', ' + esc(LP.inhalt.edition) : '') + (LP.inhalt.stand ? ' · Stand ' + esc(LP.inhalt.stand) : '') + '</p>'
        : '<p class="small">Die Kapitel kommen aus einer Inhaltsdatei, die du getrennt von der App bekommst. ' +
          'Sie bleibt nur auf diesem Gerät gespeichert und wird nirgends hochgeladen.</p>') +
      '<div class="row"><label class="btn' + (has ? ' ghost' : ' accent') + '">' + (has ? 'Neuere Datei laden' : 'Datei auswählen') +
      '<input type="file" accept=".json,application/json" data-kap-import class="kap-file"></label>' +
      (has ? '<button class="btn ghost" type="button" data-kap-remove>Inhalt von diesem Gerät entfernen</button>' : '') +
      '</div><p class="small muted kap-msg" role="status"></p></div>';
  }

  /* ---------- Übersicht ---------- */
  V.kapitel = function () {
    var has = !!LP.inhalt;
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Lernen</div><h1>Kapitel</h1>' +
      '<p class="lead">' + (has
        ? 'Üben statt lesen: Definitionen, Listen und Abläufe selbst wiedergeben – zu den Stellen, die du in der Vorschrift ausgewählt hast.'
        : 'Hier erscheinen die Kapitel, sobald du deine Inhaltsdatei geladen hast.') + '</p></div>';
    if (has) {
      LP.inhalt.parts.forEach(function (p) {
        h += '<section class="stack"><h2>' + esc(p.title) + '</h2><div class="module-list">' + p.chapters.map(function (c) {
          var t = taskCount(c), d = doneCount(c);
          return '<a class="module-row" href="#kap-' + esc(c.id) + '"><span class="nr">' + esc(String(c.nr).padStart(2, '0')) + '</span>' +
            '<span><span class="t">' + esc(c.title) + '</span><br><span class="d">' + (t ? t + ' Aufgaben' : 'noch keine Aufgaben') + '</span></span>' +
            '<span class="p"><span>' + (t ? d + '/' + t + ' sitzen' : '') + '</span>' + (t ? '<span class="progress"><span style="width:' + LP.pct(d, t) + '%"></span></span>' : '') + '</span></a>';
        }).join('') + '</div></section>';
      });
    }
    h += importPanel(has) + '</div>';
    return h;
  };

  /* ---------- Aufgaben: Stand und Prüfung ---------- */
  var TYPE = { def: 'Definition', list: 'Liste', abbr: 'Abkürzung', match: 'Zuordnung', choice: 'Frage', seq: 'Reihenfolge', cloze: 'Lückentext' };
  var RATE = ['Nochmal', 'Teilweise', 'Sitzt'];
  function tasksOf(c) {
    var out = [];
    c.nodes.forEach(function (n) { (n.tasks || []).forEach(function (t) { out.push({ n: n, t: t }); }); });
    return out;
  }
  function st(id) { return (LP.state.kap || {})[id] || null; }
  function rate(id, s) {
    LP.state.kap = LP.state.kap || {};
    var o = LP.state.kap[id] || { n: 0 };
    o.s = s; o.n++; o.d = LP.dayNumber();
    LP.state.kap[id] = o; LP.save();
  }
  var doneCount = function (c) { return tasksOf(c).filter(function (x) { var o = st(x.t.id); return o && o.s === 2; }).length; };

  // Vergleich tolerant gegenüber Groß-/Kleinschreibung, Satzzeichen, britischer/US-Schreibung und Tippfehlern
  var STOP = ' a an the of and or to with in on at for by is are be as its it this that ';
  function words(s) {
    return String(s || '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9äöüß]+/g, ' ').trim().split(' ').filter(Boolean)
      .map(function (w) { return w.replace(/oeuv/, 'euv').replace(/vre$/, 'ver').replace(/our$/, 'or').replace(/isation$/, 'ization').replace(/ise$/, 'ize').replace(/tre$/, 'ter').replace(/ence$/, 'ense'); });
  }
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d[i] = [i]; }
    for (j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function wordIn(w, list) {
    var tol = w.length >= 9 ? 2 : w.length >= 5 ? 1 : 0;
    return list.some(function (u) { return u === w || (tol && Math.abs(u.length - w.length) <= tol && lev(u, w) <= tol); });
  }
  var alts = function (k) { return String(k).split('|'); };
  var first = function (k) { return alts(k)[0]; };
  function hit(kw, list) { return alts(kw).some(function (k) { return hit1(k, list); }); }
  function hit1(kw, list) {
    var ws = words(kw).filter(function (w) { return STOP.indexOf(' ' + w + ' ') < 0; });
    if (!ws.length) ws = words(kw);
    return ws.every(function (w) { return wordIn(w, list); });
  }
  function same(a, b) { return alts(b).some(function (y0) { var x = words(a).join(' '), y = words(y0).join(' '); var tol = y.length >= 9 ? 2 : y.length >= 5 ? 1 : 0; return !!x && (x === y || (tol && lev(x, y) <= tol)); }); }
  function mask(s) { return s.replace(/[A-Za-zÄÖÜäöüß]+/g, function (w) { return w[0] + w.slice(1).replace(/./g, '_'); }); }
  // Wortlaut mit markierten Schlüsselbegriffen (gefunden / fehlt)
  function marked(a, kws, found) {
    var spans = [];
    kws.forEach(function (k, i) {
      var f = first(k), pos = a.toLowerCase().indexOf(f.toLowerCase());
      if (pos >= 0) spans.push({ a: pos, b: pos + f.length, ok: found ? found[i] : null });
    });
    spans.sort(function (x, y) { return x.a - y.a; });
    var out = '', at = 0;
    spans.forEach(function (sp) {
      if (sp.a < at) return;
      out += esc(a.slice(at, sp.a)) + '<mark class="' + (sp.ok === null ? 'kw' : sp.ok ? 'hit' : 'miss') + '">' + esc(a.slice(sp.a, sp.b)) + '</mark>';
      at = sp.b;
    });
    return out + esc(a.slice(at));
  }

  /* ---------- Kapitelansicht ---------- */
  function taskChips(n) {
    return (n.tasks || []).map(function (t) {
      var o = st(t.id), cls = !o ? '' : o.s === 2 ? ' ok' : o.s === 1 ? ' warn' : ' crit';
      return '<button type="button" class="chip' + cls + '" data-kt-one="' + esc(t.id) + '" title="' + (o ? RATE[o.s] : 'neu') + '">' + esc(TYPE[t.type] || t.type) + (t.label ? ': ' + esc(t.label) : '') + '</button>';
    }).join('');
  }
  V.kapitelView = function (id) {
    var m = /^(.+)-ueben$/.exec(id);
    if (m) return practiceView(m[1]);
    var r = byId(id);
    if (!r) return LP.inhalt ? V.notFound() : V.kapitel();
    var c = r.x.c, prev = r.all[r.i - 1], next = r.all[r.i + 1];
    var all = tasksOf(c), done = doneCount(c), open = all.length - done;
    var h = '<div class="view narrow"><header class="module-head"><span class="nr">' + esc(r.x.p.title) + ' · KAPITEL ' + esc(c.nr) + '</span>' +
      '<h1>' + esc(c.title) + '</h1><p class="lead">' + numbered(c) + ' Abschnitte' +
      (all.length ? ' · ' + all.length + ' Aufgaben, ' + done + ' sitzen.' : '.') + '</p>' +
      (all.length ? '<div class="row"><button class="btn accent" type="button" data-kt-start="' + esc(c.id) + '" data-open="1"' + (open ? '' : ' disabled') + '>Offene üben (' + open + ')</button>' +
        '<button class="btn ghost" type="button" data-kt-start="' + esc(c.id) + '">Alle üben (' + all.length + ')</button></div>' : '') +
      '</header>';
    // Standard: nur Abschnitte mit Aufgaben – die App ist kein Ersatz für die Vorschrift, sondern zum Üben.
    // Die ganze Gliederung gibt es auf Wunsch zur Orientierung.
    var nodes = c.nodes;
    if (!showAll) {
      nodes = c.nodes.filter(function (n, i) {
        if (!n.sec) return n.tasks && n.tasks.length;
        for (var j = i + 1; j < c.nodes.length && !c.nodes[j].sec; j++) if (c.nodes[j].tasks && c.nodes[j].tasks.length) return true;
        return false;
      });
    }
    if (!all.length && !showAll) h += '<p class="muted">Zu diesem Kapitel gibt es noch keine Aufgaben.</p>';
    h += '<div class="row"><button class="btn ghost small" type="button" data-kap-all>' + (showAll ? 'Nur Abschnitte mit Aufgaben' : 'Ganze Gliederung zeigen') + '</button></div>';
    if (nodes.length) h += '<ol class="kap-tree">' + nodes.map(function (n) {
      if (n.sec) return '<li class="kap-sec"><span class="kap-sn">Section ' + esc(n.sec) + '</span><span class="kap-t">' + esc(n.t) + '</span></li>';
      return '<li class="kap-node" style="--d:' + Math.max(0, depth(n) - 2) + '">' +
        '<span class="kap-n">' + esc(n.n || '') + '</span><span class="kap-t">' + esc(n.t) +
        (n.tasks && n.tasks.length ? '<span class="kap-tasks">' + taskChips(n) + '</span>' : '') + '</span></li>';
    }).join('') + '</ol>';
    h += '<nav class="row" aria-label="Kapitelnavigation">' +
      (prev ? '<a class="btn ghost" href="#kap-' + esc(prev.c.id) + '">← ' + esc(prev.c.nr) + ' ' + esc(prev.c.title) + '</a>' : '<a class="btn ghost" href="#kapitel">← Alle Kapitel</a>') +
      '<span class="spacer"></span>' +
      (next ? '<a class="btn" href="#kap-' + esc(next.c.id) + '">' + esc(next.c.nr) + ' ' + esc(next.c.title) + ' →</a>' : '<a class="btn" href="#kapitel">Alle Kapitel →</a>') +
      '</nav></div>';
    return h;
  };

  /* ---------- Üben ---------- */
  var S = null; // {cid, queue:[{n,t}], pos, res:[0|1|2], checked}
  var showAll = false;
  function startSession(cid, only, openOnly, noNav) {
    var r = byId(cid); if (!r) return;
    var list = tasksOf(r.x.c);
    if (only) list = list.filter(function (x) { return x.t.id === only; });
    else {
      if (openOnly) list = list.filter(function (x) { var o = st(x.t.id); return !o || o.s < 2; });
      // neu und „Nochmal“ zuerst, dann „Teilweise“, dann „Sitzt“; innerhalb in Kapitelreihenfolge
      list = list.map(function (x, i) { var o = st(x.t.id); return { x: x, k: (o && o.s > 0 ? o.s : 0) * 1000 + i }; })
        .sort(function (a, b) { return a.k - b.k; }).map(function (y) { return y.x; });
    }
    S = { cid: String(cid), queue: list, pos: 0, res: [], checked: false };
    if (noNav) return;
    var target = '#kap-' + cid + '-ueben';
    if (location.hash === target) LP.render(); else location.hash = target;
  }
  function practiceView(cid) {
    var r = byId(cid);
    if (!r) return LP.inhalt ? V.notFound() : V.kapitel();
    if (!S || S.cid !== String(cid)) { S = null; startSession(cid, null, true, true); if (!S) return V.notFound(); }
    var c = r.x.c;
    var head = '<div class="view narrow"><div class="page-head"><div class="eyebrow"><a href="#kap-' + esc(c.id) + '">Kapitel ' + esc(c.nr) + ' · ' + esc(c.title) + '</a></div>';
    if (!S.queue.length) return head + '<h1>Nichts offen</h1><p class="lead">Alle Aufgaben in diesem Kapitel sitzen.</p></div>' +
      '<div class="row"><button class="btn" type="button" data-kt-start="' + esc(c.id) + '">Trotzdem alle üben</button><a class="btn ghost" href="#kap-' + esc(c.id) + '">Zum Kapitel</a></div></div>';
    if (S.pos >= S.queue.length) {
      var cnt = [0, 0, 0]; S.res.forEach(function (x) { cnt[x]++; });
      return head + '<h1>Runde fertig</h1><p class="lead">' + cnt[2] + ' sitzen, ' + cnt[1] + ' teilweise, ' + cnt[0] + ' nochmal.</p></div>' +
        '<div class="row">' + (cnt[0] + cnt[1] ? '<button class="btn accent" type="button" data-kt-start="' + esc(c.id) + '" data-open="1">Offene nochmal üben</button>' : '') +
        '<a class="btn ghost" href="#kap-' + esc(c.id) + '">Zum Kapitel</a></div></div>';
    }
    var x = S.queue[S.pos], t = x.t;
    if (!S.sub || S.sub.id !== t.id) S.sub = initSub(t);
    S.checked = false;
    var h = head + '<div class="kt-meta"><span>' + esc(TYPE[t.type] || t.type) + ' · ' + esc(x.n.n) + ' ' + esc(x.n.t) + '</span><span>' + (S.pos + 1) + ' / ' + S.queue.length + '</span></div>' +
      '<div class="progress"><span style="width:' + LP.pct(S.pos, S.queue.length) + '%"></span></div>' +
      '<h1 class="kt-q">' + esc(t.q) + '</h1>' + (t.hint ? '<p class="muted">' + esc(t.hint) + '</p>' : '') + '</div>';
    var std = true;
    if (t.type === 'def') {
      h += '<label class="kt-lbl" for="kt-in">Deine Definition (englisch, aus dem Kopf)</label>' +
        '<textarea id="kt-in" class="kt-in" rows="6" spellcheck="false" autocapitalize="sentences" placeholder="' + esc(t.ph != null ? t.ph : t.q + ' is …') + '"></textarea>';
    } else if (t.type === 'abbr') {
      h += '<label class="kt-lbl" for="kt-in">Ausgeschrieben (englisch)</label>' +
        '<input id="kt-in" class="kt-in kt-one" type="text" autocomplete="off" spellcheck="false" autocapitalize="words">';
    } else if (t.type === 'list') {
      h += '<div class="kt-list">' + t.items.map(function (_, i) {
        return '<input type="text" class="kt-li" data-i="' + i + '" autocomplete="off" spellcheck="false" aria-label="Eintrag ' + (i + 1) + '" placeholder="' + (i + 1) + '.">';
      }).join('') + '</div>';
    } else if (t.type === 'cloze') {
      h += '<div class="kt-cloze">' + t.a.split(/\[\[(.+?)\]\]/).map(function (part, i) {
        if (i % 2 === 0) return esc(part);
        var g = (i - 1) / 2, w = Math.max(8, first(part).length + 3);
        return '<input type="text" class="kt-gap" data-g="' + g + '" style="width:' + w + 'ch" autocomplete="off" spellcheck="false" aria-label="Lücke ' + (g + 1) + '">';
      }).join('') + '</div>';
    } else if (t.type === 'seq') {
      h += '<div id="kt-box">' + seqHtml(t, false) + '</div>';
    } else if (t.type === 'choice' || t.type === 'match') {
      std = false;
      h += '<div id="kt-box">' + (t.type === 'choice' ? choiceHtml(t) : matchHtml(t)) + '</div>';
    }
    if (std) h += '<div class="row"><button class="btn accent" type="button" data-kt="check">Prüfen</button>' +
      '<button class="btn ghost" type="button" data-kt="hint">Tipp</button>' +
      '<button class="btn ghost" type="button" data-kt="show">Lösung zeigen</button></div>';
    h += '<div id="kt-hint"></div><div id="kt-out" aria-live="polite"></div></div>';
    return h;
  }
  function initSub(t) {
    var o = { id: t.id };
    if (t.type === 'match') { o.order = LP.shuffle(t.pairs.map(function (_, i) { return i; })); o.i = 0; o.ok = 0; o.pick = null; o.opts = null; }
    if (t.type === 'choice') { o.order = LP.shuffle(t.options.map(function (_, i) { return i; })); o.pick = null; }
    if (t.type === 'seq') { o.pool = LP.shuffle(t.items.map(function (_, i) { return i; })); o.ans = []; o.done = false; }
    return o;
  }
  function rateRow(suggest) {
    return '<div class="kt-rate"><span class="small muted">Wie saß es?</span><div class="row">' + RATE.map(function (l, i) {
      return '<button type="button" class="btn' + (i === suggest ? ' accent' : ' ghost') + '" data-kt-rate="' + i + '">' + l + '</button>';
    }).join('') + '</div></div>';
  }
  function box(html) { var b = document.getElementById('kt-box'); if (b) b.innerHTML = html; }
  function focusRate(el) { var b = (el || document).querySelector('.kt-rate .btn.accent'); if (b) b.focus({ preventScroll: true }); }

  /* Zuordnung: Beschreibung mit geschwärztem Begriff, vier Antworten aus demselben Pool */
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function maskText(a, terms, reveal) {
    terms = (terms || []).filter(Boolean);
    if (!terms.length) return esc(a);
    var re = new RegExp('(^|[^A-Za-z])(' + terms.slice().sort(function (x, y) { return y.length - x.length; }).map(reEsc).join('|') + ')(?![A-Za-z])', 'gi');
    var out = '', at = 0, m;
    while ((m = re.exec(a))) {
      var s0 = m.index + m[1].length;
      out += esc(a.slice(at, s0)) + (reveal ? '<mark class="kw">' + esc(m[2]) + '</mark>' : '<span class="kt-blank" aria-label="gesuchter Begriff">▢▢▢</span>');
      at = s0 + m[2].length; re.lastIndex = at;
    }
    return out + esc(a.slice(at));
  }
  function poolPairs(t) {
    if (!t.pool) return t.pairs;
    var out = [];
    chapters().forEach(function (x) { tasksOf(x.c).forEach(function (y) { if (y.t.type === 'match' && y.t.pool === t.pool) out = out.concat(y.t.pairs); }); });
    return out;
  }
  function matchHtml(t) {
    var sb = S.sub, n = t.pairs.length;
    if (sb.i >= n) {
      var sug = sb.ok === n ? 2 : sb.ok >= Math.ceil(n * 0.7) ? 1 : 0;
      return '<p class="kt-score">' + sb.ok + ' von ' + n + ' richtig zugeordnet</p>' + rateRow(sug);
    }
    var p = t.pairs[sb.order[sb.i]];
    if (!sb.opts) {
      var others = LP.shuffle(poolPairs(t).map(function (q) { return q.k; }).filter(function (k, i, arr) { return k !== p.k && arr.indexOf(k) === i; }));
      sb.opts = LP.shuffle([p.k].concat(others.slice(0, 3)));
    }
    var done = sb.pick !== null;
    return '<p class="small muted">' + esc(t.item || 'Beschreibung') + ' ' + (sb.i + 1) + ' von ' + n + (done ? '' : ' – ' + esc(t.ask || 'welches Element ist gemeint?')) + '</p>' +
      '<blockquote class="quote kt-ref">' + maskText(p.a, p.mask || [p.k], done) + '</blockquote>' +
      '<div class="kt-opts">' + sb.opts.map(function (k, i) {
        var cls = !done ? '' : k === p.k ? ' ok' : i === sb.pick ? ' bad' : ' dim';
        return '<button type="button" class="kt-opt' + cls + '" data-km="' + i + '"' + (done ? ' disabled' : '') + '>' + esc(k) + '</button>';
      }).join('') + '</div>' +
      (done ? (p.full ? '<p class="small"><strong>' + esc(p.k) + '</strong> = ' + esc(p.full) + '</p>' : '') +
        '<div class="row"><button class="btn accent" type="button" data-kt="mnext">' + (sb.i + 1 < n ? 'Weiter' : 'Auswertung') + '</button></div>' : '');
  }
  /* Auswahlfrage */
  function choiceHtml(t) {
    var sb = S.sub, done = sb.pick !== null, ok = done && t.options[sb.order[sb.pick]] === t.options[t.correct];
    return '<div class="kt-opts">' + sb.order.map(function (oi, i) {
      var cls = !done ? '' : oi === t.correct ? ' ok' : i === sb.pick ? ' bad' : ' dim';
      return '<button type="button" class="kt-opt' + cls + '" data-kc="' + i + '"' + (done ? ' disabled' : '') + '>' + esc(t.options[oi]) + '</button>';
    }).join('') + '</div>' +
      (done ? '<p class="kt-score">' + (ok ? 'Richtig' : 'Falsch – richtig: ' + esc(t.options[t.correct])) + '</p>' +
        (t.a ? '<blockquote class="quote kt-ref">' + esc(t.a) + '</blockquote>' : '') + rateRow(ok ? 2 : 0) : '');
  }
  /* Reihenfolge: Bausteine antippen */
  function seqHtml(t, checked) {
    var sb = S.sub;
    var ans = '<ol class="kt-seq-ans">' + (sb.ans.length ? sb.ans.map(function (it, j) {
      var cls = checked ? (it === j ? ' ok' : ' bad') : '';
      return '<li><button type="button" class="kt-blk' + cls + '" data-ks-back="' + j + '"' + (checked ? ' disabled' : '') + '>' + esc(t.items[it]) + '</button></li>';
    }).join('') : '<li class="kt-seq-empty">Tippe die Bausteine in der richtigen Reihenfolge an.</li>') + '</ol>';
    var pool = sb.pool.length ? '<div class="kt-seq-pool">' + sb.pool.map(function (it, j) {
      return '<button type="button" class="kt-blk" data-ks="' + j + '">' + esc(t.items[it]) + '</button>';
    }).join('') + '</div>' : '';
    return ans + pool;
  }
  function checkTask(reveal) {
    var x = S.queue[S.pos], t = x.t, out = document.getElementById('kt-out'), h = '', sug = 0, n, ok;
    if (t.type === 'def' || t.type === 'abbr') {
      var inp = document.getElementById('kt-in'), list = words(inp.value), kws = t.kw || [t.a];
      var found = kws.map(function (k) { return !reveal && hit(k, list); });
      n = found.filter(Boolean).length;
      sug = reveal ? 0 : n === kws.length ? 2 : n >= Math.ceil(kws.length * 0.6) ? 1 : 0;
      if (t.type === 'abbr') h += reveal ? '' : '<p class="kt-score">' + (n === kws.length ? 'Richtig' : 'Nicht ganz') + '</p>';
      else h += reveal ? '' : '<p class="kt-score">' + n + ' von ' + kws.length + ' Schlüsselbegriffen</p>';
      h += '<blockquote class="quote kt-ref">' + marked(t.a, kws, reveal ? null : found) + '</blockquote>' +
        (t.type === 'def' && !reveal && n < kws.length ? '<p class="small">Gefehlt: ' + kws.filter(function (_, i) { return !found[i]; }).map(function (k) { return '<mark class="miss">' + esc(first(k)) + '</mark>'; }).join(' · ') + '</p>' : '');
    } else if (t.type === 'list') {
      var fields = [].slice.call(document.querySelectorAll('.kt-li')), left = t.items.slice();
      ok = 0;
      fields.forEach(function (f, i) {
        var v = f.value, k = -1;
        if (!reveal && v.trim()) {
          if (t.ordered) k = same(v, t.items[i]) ? i : -1;
          else left.some(function (it, j) { if (it !== null && same(v, it)) { k = j; return true; } return false; });
        }
        f.classList.toggle('ok', k >= 0); f.classList.toggle('bad', !reveal && k < 0);
        if (k >= 0) { ok++; if (!t.ordered) left[k] = null; }
      });
      sug = reveal ? 0 : ok === t.items.length ? 2 : ok >= Math.ceil(t.items.length / 2) ? 1 : 0;
      h += (reveal ? '' : '<p class="kt-score">' + ok + ' von ' + t.items.length + ' richtig</p>') +
        '<ol class="kt-sol">' + t.items.map(function (it) { return '<li>' + esc(first(it)) + '</li>'; }).join('') + '</ol>' +
        (t.a ? '<blockquote class="quote kt-ref">' + esc(t.a) + '</blockquote>' : '');
    } else if (t.type === 'cloze') {
      var gaps = []; t.a.replace(/\[\[(.+?)\]\]/g, function (_, g) { gaps.push(g); return ''; });
      ok = 0;
      [].slice.call(document.querySelectorAll('.kt-gap')).forEach(function (f, i) {
        var good = !reveal && same(f.value, gaps[i]);
        if (good) ok++;
        f.classList.toggle('ok', good); f.classList.toggle('bad', !reveal && !good);
      });
      sug = reveal ? 0 : ok === gaps.length ? 2 : ok >= Math.ceil(gaps.length * 0.6) ? 1 : 0;
      h += (reveal ? '' : '<p class="kt-score">' + ok + ' von ' + gaps.length + ' Lücken richtig</p>') +
        '<blockquote class="quote kt-ref">' + t.a.split(/\[\[(.+?)\]\]/).map(function (part, i) { return i % 2 ? '<mark class="kw">' + esc(first(part)) + '</mark>' : esc(part); }).join('') + '</blockquote>';
    } else if (t.type === 'seq') {
      var sb = S.sub;
      if (reveal) { sb.ans = t.items.map(function (_, i) { return i; }); sb.pool = []; }
      else { sb.ans = sb.ans.concat(sb.pool); sb.pool = []; }
      ok = sb.ans.filter(function (it, j) { return it === j; }).length;
      sb.done = true; box(seqHtml(t, true));
      sug = reveal ? 0 : ok === t.items.length ? 2 : ok >= Math.ceil(t.items.length * 0.6) ? 1 : 0;
      h += (reveal ? '' : '<p class="kt-score">' + ok + ' von ' + t.items.length + ' an der richtigen Stelle</p>') +
        (reveal || ok === t.items.length ? '' : '<ol class="kt-sol">' + t.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ol>');
    }
    if (t.note) h += '<p class="small muted">' + esc(t.note) + '</p>';
    out.innerHTML = h + rateRow(sug);
    S.checked = true;
    focusRate(out);
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function showHint() {
    var t = S.queue[S.pos].t, el = document.getElementById('kt-hint'), src, lbl = 'Anfangsbuchstaben: ';
    if (t.type === 'def') { src = t.kw || []; lbl = 'Schlüsselbegriffe: '; }
    else if (t.type === 'abbr') src = [t.a];
    else if (t.type === 'list') src = t.items;
    else if (t.type === 'cloze') { src = []; t.a.replace(/\[\[(.+?)\]\]/g, function (_, g) { src.push(g); return ''; }); }
    else if (t.type === 'seq') { el.innerHTML = '<p class="small muted">Der erste Baustein: <strong>' + esc(t.items[0]) + '</strong></p>'; return; }
    else return;
    el.innerHTML = '<p class="small muted">' + lbl + src.map(function (k) { return '<span class="kt-mask">' + esc(mask(first(k))) + '</span>'; }).join(' · ') + '</p>';
  }

  /* ---------- Ereignisse ---------- */
  function msg(t) { var el = document.querySelector('.kap-msg'); if (el) el.textContent = t; }
  document.addEventListener('change', function (e) {
    var inp = e.target.closest && e.target.closest('input[data-kap-import]');
    if (!inp || !inp.files || !inp.files[0]) return;
    var fr = new FileReader();
    fr.onload = function () {
      var o;
      try { o = JSON.parse(fr.result); } catch (err) { msg('Die Datei ist kein gültiges JSON.'); return; }
      var problem = check(o);
      if (problem) { msg(problem); return; }
      if (!store(o)) { msg('Speichern auf diesem Gerät ist fehlgeschlagen (Speicher voll oder privater Modus).'); return; }
      LP.inhalt = o;
      LP.render();
      LP.toast(LP.kapitelCount() + ' Kapitel geladen');
    };
    fr.onerror = function () { msg('Die Datei konnte nicht gelesen werden.'); };
    fr.readAsText(inp.files[0]);
    inp.value = '';
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-kap-remove],[data-kap-all],[data-kt-start],[data-kt-one],[data-kt],[data-kt-rate],[data-km],[data-kc],[data-ks],[data-ks-back]');
    if (!t) return;
    if (t.hasAttribute('data-kap-all')) { showAll = !showAll; LP.render(true); return; }
    if (t.hasAttribute('data-kap-remove')) {
      if (!t.dataset.confirm) { t.dataset.confirm = '1'; t.textContent = 'Wirklich entfernen? Erneut tippen'; return; }
      drop(); LP.inhalt = null; S = null; LP.render(); LP.toast('Inhalt entfernt'); return;
    }
    if (t.hasAttribute('data-kt-start')) { startSession(t.getAttribute('data-kt-start'), null, t.hasAttribute('data-open')); return; }
    if (t.hasAttribute('data-kt-one')) {
      var cid = (/^kap-([^-]+)/.exec(location.hash.slice(1)) || [])[1];
      if (cid) startSession(cid, t.getAttribute('data-kt-one'));
      return;
    }
    if (!S) return;
    var a = t.getAttribute('data-kt');
    var cur = S.queue[S.pos] && S.queue[S.pos].t, sb = S.sub;
    if (t.hasAttribute('data-km') && cur && cur.type === 'match' && sb.pick === null) {
      sb.pick = Number(t.getAttribute('data-km'));
      if (sb.opts[sb.pick] === cur.pairs[sb.order[sb.i]].k) sb.ok++;
      box(matchHtml(cur)); var nx = document.querySelector('[data-kt="mnext"]'); if (nx) nx.focus({ preventScroll: true }); return;
    }
    if (a === 'mnext' && cur && cur.type === 'match') { sb.i++; sb.pick = null; sb.opts = null; box(matchHtml(cur)); focusRate(); return; }
    if (t.hasAttribute('data-kc') && cur && cur.type === 'choice' && sb.pick === null) { sb.pick = Number(t.getAttribute('data-kc')); box(choiceHtml(cur)); focusRate(); return; }
    if (t.hasAttribute('data-ks') && cur && cur.type === 'seq' && !sb.done) { sb.ans.push(sb.pool.splice(Number(t.getAttribute('data-ks')), 1)[0]); box(seqHtml(cur, false)); return; }
    if (t.hasAttribute('data-ks-back') && cur && cur.type === 'seq' && !sb.done) { sb.pool.push(sb.ans.splice(Number(t.getAttribute('data-ks-back')), 1)[0]); box(seqHtml(cur, false)); return; }
    if (a === 'check') checkTask(false);
    else if (a === 'show') checkTask(true);
    else if (a === 'hint') showHint();
    else if (t.hasAttribute('data-kt-rate')) {
      var v = Number(t.getAttribute('data-kt-rate'));
      rate(S.queue[S.pos].t.id, v); S.res.push(v); S.pos++;
      LP.render(); LP.renderNavOnly();
    }
  });
  document.addEventListener('keydown', function (e) {
    // Strg/⌘ + Enter prüft die Eingabe
    if (S && !S.checked && e.key === 'Enter' && (e.ctrlKey || e.metaKey) && document.querySelector('[data-kt="check"]')) { e.preventDefault(); checkTask(false); }
  });
})();
