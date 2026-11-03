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
  var TYPE = { def: 'Definition', list: 'Liste' };
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
  function hit(kw, list) {
    var ws = words(kw).filter(function (w) { return STOP.indexOf(' ' + w + ' ') < 0; });
    if (!ws.length) ws = words(kw);
    return ws.every(function (w) { return wordIn(w, list); });
  }
  function same(a, b) { var x = words(a).join(' '), y = words(b).join(' '); var tol = y.length >= 9 ? 2 : y.length >= 5 ? 1 : 0; return x === y || (tol && lev(x, y) <= tol); }
  function mask(s) { return s.replace(/[A-Za-zÄÖÜäöüß]+/g, function (w) { return w[0] + w.slice(1).replace(/./g, '_'); }); }
  // Wortlaut mit markierten Schlüsselbegriffen (gefunden / fehlt)
  function marked(a, kws, found) {
    var spans = [];
    kws.forEach(function (k, i) {
      var pos = a.toLowerCase().indexOf(k.toLowerCase());
      if (pos >= 0) spans.push({ a: pos, b: pos + k.length, ok: found ? found[i] : null });
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
    var h = head + '<div class="kt-meta"><span>' + esc(TYPE[t.type] || t.type) + ' · ' + esc(x.n.n) + ' ' + esc(x.n.t) + '</span><span>' + (S.pos + 1) + ' / ' + S.queue.length + '</span></div>' +
      '<div class="progress"><span style="width:' + LP.pct(S.pos, S.queue.length) + '%"></span></div>' +
      '<h1 class="kt-q">' + esc(t.q) + '</h1>' + (t.hint ? '<p class="muted">' + esc(t.hint) + '</p>' : '') + '</div>';
    if (t.type === 'def') {
      h += '<label class="kt-lbl" for="kt-in">Deine Definition (englisch, aus dem Kopf)</label>' +
        '<textarea id="kt-in" class="kt-in" rows="6" spellcheck="false" autocapitalize="sentences" placeholder="' + esc(t.q) + ' is …"></textarea>';
    } else if (t.type === 'list') {
      h += '<div class="kt-list">' + t.items.map(function (_, i) {
        return '<input type="text" class="kt-li" data-i="' + i + '" autocomplete="off" spellcheck="false" aria-label="Eintrag ' + (i + 1) + '" placeholder="' + (i + 1) + '.">';
      }).join('') + '</div>';
    }
    h += '<div class="row"><button class="btn accent" type="button" data-kt="check">Prüfen</button>' +
      '<button class="btn ghost" type="button" data-kt="hint">Tipp</button>' +
      '<button class="btn ghost" type="button" data-kt="show">Lösung zeigen</button></div>' +
      '<div id="kt-hint"></div><div id="kt-out" aria-live="polite"></div></div>';
    S.checked = false;
    return h;
  }
  function rateRow(suggest) {
    return '<div class="kt-rate"><span class="small muted">Wie saß es?</span><div class="row">' + RATE.map(function (l, i) {
      return '<button type="button" class="btn' + (i === suggest ? ' accent' : ' ghost') + '" data-kt-rate="' + i + '">' + l + '</button>';
    }).join('') + '</div></div>';
  }
  function checkTask(reveal) {
    var x = S.queue[S.pos], t = x.t, out = document.getElementById('kt-out'), h = '', sug = 0;
    if (t.type === 'def') {
      var inp = document.getElementById('kt-in'), list = words(inp.value), kws = t.kw || [];
      var found = kws.map(function (k) { return !reveal && hit(k, list); });
      var n = found.filter(Boolean).length;
      sug = reveal ? 0 : n === kws.length ? 2 : n >= Math.ceil(kws.length * 0.6) ? 1 : 0;
      h += (reveal ? '' : '<p class="kt-score">' + n + ' von ' + kws.length + ' Schlüsselbegriffen</p>') +
        '<blockquote class="quote kt-ref">' + marked(t.a, kws, reveal ? null : found) + '</blockquote>' +
        (!reveal && n < kws.length ? '<p class="small">Gefehlt: ' + kws.filter(function (_, i) { return !found[i]; }).map(function (k) { return '<mark class="miss">' + esc(k) + '</mark>'; }).join(' · ') + '</p>' : '');
    } else if (t.type === 'list') {
      var fields = [].slice.call(document.querySelectorAll('.kt-li')), left = t.items.slice(), ok = 0;
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
        '<ol class="kt-sol">' + t.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ol>' +
        (t.a ? '<blockquote class="quote kt-ref">' + esc(t.a) + '</blockquote>' : '');
    }
    if (t.note) h += '<p class="small muted">' + esc(t.note) + '</p>';
    out.innerHTML = h + rateRow(sug);
    S.checked = true;
    var b = out.querySelector('.kt-rate .btn.accent'); if (b) b.focus({ preventScroll: true });
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function showHint() {
    var t = S.queue[S.pos].t, el = document.getElementById('kt-hint');
    var src = t.type === 'def' ? (t.kw || []) : t.items;
    el.innerHTML = '<p class="small muted">' + (t.type === 'def' ? 'Schlüsselbegriffe: ' : 'Anfangsbuchstaben: ') +
      src.map(function (k) { return '<span class="kt-mask">' + esc(mask(k)) + '</span>'; }).join(' · ') + '</p>';
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
    var t = e.target.closest && e.target.closest('[data-kap-remove],[data-kap-all],[data-kt-start],[data-kt-one],[data-kt],[data-kt-rate]');
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
    if (S && !S.checked && e.key === 'Enter' && (e.ctrlKey || e.metaKey) && document.getElementById('kt-out')) { e.preventDefault(); checkTask(false); }
  });
})();
