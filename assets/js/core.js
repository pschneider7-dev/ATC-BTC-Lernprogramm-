/* JTAC Lernprogramm – Kern: Namensraum, Speicher, Hilfsfunktionen, Bausteine.
   Alle Daten-Dateien (data/*.js) hängen sich an window.LP an. */
(function () {
  'use strict';

  var LP = (window.LP = window.LP || {});
  LP.modules = LP.modules || [];
  LP.cards = LP.cards || [];
  LP.quiz = LP.quiz || [];
  LP.glossary = LP.glossary || [];
  LP.brevity = LP.brevity || [];
  LP.sources = LP.sources || {};
  LP.drills = LP.drills || {};
  LP.scripts = LP.scripts || [];
  LP.spick = LP.spick || [];
  LP.plan = LP.plan || [];
  LP.views = LP.views || {};

  /* ---------- Speicher (localStorage, ausfallsicher) ---------- */
  var KEY = 'jtacLP.v1';
  var defaults = function () {
    return {
      read: {},      // Abschnitt-ID -> true
      atp: {},       // Abgleich-Aufgabe -> true
      cards: {},     // Karten-ID -> {box, due}
      quiz: [],      // Ergebnisse
      drills: {},    // Drill -> {done, ok}
      plan: {},      // Lernplan-Aufgabe -> true
      theme: 'auto'
    };
  };
  function loadState() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return defaults();
      var parsed = JSON.parse(raw);
      var d = defaults();
      Object.keys(d).forEach(function (k) {
        if (parsed[k] !== undefined) d[k] = parsed[k];
      });
      return d;
    } catch (e) {
      return defaults();
    }
  }
  LP.state = loadState();
  LP.save = function () {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(LP.state));
      return true;
    } catch (e) {
      return false;
    }
  };
  LP.resetState = function () {
    LP.state = defaults();
    LP.save();
  };
  LP.importState = function (obj) {
    var d = defaults();
    Object.keys(d).forEach(function (k) {
      if (obj && obj[k] !== undefined) d[k] = obj[k];
    });
    LP.state = d;
    LP.save();
  };

  /* ---------- Hilfsfunktionen ---------- */
  LP.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  LP.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  LP.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  LP.rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
  LP.today = function () {
    var d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  };
  LP.dayNumber = function () { return Math.floor(Date.now() / 86400000); };
  LP.pct = function (a, b) { return b ? Math.round((a / b) * 100) : 0; };
  LP.norm = function (s) {
    return String(s || '')
      .toUpperCase()
      .replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').replace(/ß/g, 'SS')
      .replace(/[^A-Z0-9]/g, '');
  };
  LP.moduleById = function (id) {
    for (var i = 0; i < LP.modules.length; i++) if (LP.modules[i].id === id) return LP.modules[i];
    return null;
  };
  LP.sortedModules = function () {
    return LP.modules.slice().sort(function (a, b) { return a.nr - b.nr; });
  };

  var toastTimer = null;
  LP.toast = function (msg) {
    var el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2400);
  };

  LP.copyText = function (text, fallbackEl) {
    var done = function () { LP.toast('In die Zwischenablage kopiert'); };
    var fallback = function () {
      if (fallbackEl) {
        fallbackEl.focus();
        fallbackEl.select();
        LP.toast('Text markiert – bitte manuell kopieren');
      }
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
    } catch (e) {
      fallback();
    }
  };

  /* ---------- Bausteine für Inhalte ---------- */
  // Quellen-Chips: refs = [["jp3093","Kap. V"], ...]
  LP.srcChips = function (refs) {
    if (!refs || !refs.length) return '';
    var out = refs.map(function (r) {
      var s = LP.sources[r[0]];
      var label = s ? s.short : r[0];
      var where = r[1] ? ' · ' + r[1] : '';
      return '<a class="chip" href="#quellen" title="' + LP.esc(s ? s.title : '') + '">' + LP.esc(label + where) + '</a>';
    });
    return '<div class="src-row"><span class="lbl">Quelle</span>' + out.join('') + '</div>';
  };

  // Kniebrett-Karte: {title, note, lines:[{n, t, d, rb}], foot}
  LP.kneeboard = function (kb) {
    var lines = kb.lines.map(function (l) {
      return '<div class="kb-line' + (l.rb ? ' rb' : '') + '"><div class="kb-n">' + LP.esc(l.n) +
        '</div><div class="kb-b"><div class="kb-t">' + l.t + '</div>' +
        (l.d ? '<div class="kb-d">' + l.d + '</div>' : '') + '</div></div>';
    }).join('');
    // Nummernspalte so breit wie die längste Kennung (z. B. „10–45°“), mindestens 2,6rem
    var maxN = kb.lines.reduce(function (m, l) { return Math.max(m, String(l.n).length); }, 0);
    var style = maxN > 3 ? ' style="--kbn:' + (maxN * 0.66 + 1.1).toFixed(2) + 'rem"' : '';
    return '<div class="kneeboard"' + style + '><div class="kb-head"><span>' + LP.esc(kb.title) + '</span>' +
      (kb.note ? '<small>' + LP.esc(kb.note) + '</small>' : '') + '</div>' + lines +
      (kb.foot ? '<div class="kb-foot">' + kb.foot + '</div>' : '') + '</div>';
  };

  // Funkverkehr: [["JTAC","…"],["AIR","…"],["note","…"]]
  LP.radio = function (lines, opts) {
    opts = opts || {};
    var labels = { JTAC: 'JTAC', AIR: 'Luftfahrzeug', AIR2: 'Lfz Nr. 2', JFO: 'JFO', FAC: 'FAC(A)', AO: 'AO / ALO', OBS: 'Beobachter', FDC: 'FDC', FO: 'Beobachter', LAS: 'Beleuchter', RW: 'Hubschrauber', FW: 'Jet' };
    return '<div class="radio">' + lines.map(function (l, i) {
      var who = l[0];
      if (who === 'note') {
        return '<div class="tx note"><span class="who">–</span><div class="msg">' + l[1] + '</div></div>';
      }
      var isJ = who === 'JTAC' || who === 'FAC' || who === 'JFO' || who === 'AO';
      var hide = opts.hideJtac && isJ;
      return '<div class="tx' + (isJ ? ' jtac' : '') + '"><span class="who">' + LP.esc(labels[who] || who) +
        '</span><div class="msg' + (hide ? ' hidden-call' : '') + '"' + (hide ? ' data-reveal="' + i + '" tabindex="0" role="button" aria-label="Funkspruch aufdecken"' : '') + '>' + l[1] + '</div></div>';
    }).join('') + '</div>';
  };

  // Hinweis-Kästen in Modultexten
  LP.callout = function (kind, title, html) {
    return '<div class="callout ' + kind + '"><div class="ct">' + LP.esc(title) + '</div><div>' + html + '</div></div>';
  };
})();
