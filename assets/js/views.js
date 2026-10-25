/* JTAC Lernprogramm – Ansichten (Start, Module, Karten, Quiz, Nachschlagen, Plan, Daten). */
(function () {
  'use strict';
  var LP = window.LP;
  var V = LP.views;
  var esc = LP.esc;

  /* ---------- Navigation ---------- */
  var NAV = [
    { label: 'Lernen', items: [
      { tok: 'start', text: 'Start' },
      { tok: 'module', text: 'Module', badge: function () { return LP.modules.length; } },
      { tok: 'spick', text: 'Spickzettel' }
    ] },
    { label: 'Üben', items: [
      { tok: 'karten', text: 'Karteikarten', badge: function () { return dueCount() || ''; } },
      { tok: 'quiz', text: 'Quiz & Prüfung' },
      { tok: 'training', text: 'Training' },
      { tok: 'funk', text: 'Funkbeispiele' }
    ] },
    { label: 'Nachschlagen', items: [
      { tok: 'glossar', text: 'Glossar', badge: function () { return LP.glossary.length; } },
      { tok: 'brevity', text: 'Brevity', badge: function () { return LP.brevity.length; } },
      { tok: 'quellen', text: 'Quellen' }
    ] },
    { label: 'Planen', items: [
      { tok: 'plan', text: 'Lernplan' },
      { tok: 'daten', text: 'Fortschritt & Daten' }
    ] }
  ];
  var TRAINING_TOKENS = ['neunline', 'kontrolle', 'reihenfolge', 'brevitytrainer', 'rechnen'];

  V.renderNav = function (current) {
    var nav = document.getElementById('nav');
    var activeTok = current;
    if (/^m\d\d/.test(current)) activeTok = 'module';
    if (TRAINING_TOKENS.indexOf(current) >= 0) activeTok = 'training';
    nav.innerHTML = NAV.map(function (g) {
      return '<div class="nav-group"><div class="nav-label">' + esc(g.label) + '</div><ul>' +
        g.items.map(function (it) {
          var b = it.badge ? it.badge() : '';
          return '<li><a href="#' + it.tok + '"' + (activeTok === it.tok ? ' aria-current="page"' : '') + '><span>' + esc(it.text) +
            '</span>' + (b !== '' ? '<span class="badge">' + esc(b) + '</span>' : '') + '</a></li>';
        }).join('') + '</ul></div>';
    }).join('');
  };

  /* ---------- Fortschritt ---------- */
  function allSections() {
    var out = [];
    LP.sortedModules().forEach(function (m) { m.sections.forEach(function (s) { out.push({ m: m, s: s }); }); });
    return out;
  }
  function moduleProgress(m) {
    var done = m.sections.filter(function (s) { return LP.state.read[s.id]; }).length;
    return { done: done, total: m.sections.length, pct: LP.pct(done, m.sections.length) };
  }
  function atpTotals() {
    var total = 0, done = 0;
    LP.modules.forEach(function (m) {
      (m.atp || []).forEach(function (_, i) { total++; if (LP.state.atp[m.id + '-a' + i]) done++; });
      (m.jfire || []).forEach(function (_, i) { total++; if (LP.state.atp[m.id + '-j' + i]) done++; });
    });
    return { done: done, total: total };
  }
  function cardState(id) { return LP.state.cards[id]; }
  function dueCount() {
    var today = LP.dayNumber();
    return LP.cards.filter(function (c) { var st = cardState(c.id); return st && st.box > 0 && st.due <= today; }).length;
  }
  V.dueCount = dueCount;

  /* ---------- Start ---------- */
  V.start = function () {
    var secs = allSections();
    var read = secs.filter(function (x) { return LP.state.read[x.s.id]; }).length;
    var next = secs.filter(function (x) { return !LP.state.read[x.s.id]; })[0];
    var learned = LP.cards.filter(function (c) { var st = LP.state.cards[c.id]; return st && st.box >= 3; }).length;
    var quizzes = LP.state.quiz || [];
    var lastQ = quizzes.length ? quizzes[quizzes.length - 1] : null;
    var atp = atpTotals();
    var due = dueCount();

    var h = '<div class="view">' + V.appPanel('start');
    h += '<section class="hero"><div class="stack-lg">' +
      '<div class="eyebrow">Vorbereitung JTAC Basic und Advanced Training Course</div>' +
      '<h1>Close Air Support <span>lernen</span>, bevor der Lehrgang beginnt.</h1>' +
      '<p class="lead">14 Module, ' + LP.cards.length + ' Karteikarten, ' + LP.quiz.length + ' Prüfungsfragen und sechs Trainer. Alle Vorschriftentexte und Definitionen stehen im englischen Originalwortlaut mit Seitenangabe – aus öffentlich freigegebenen Vorschriften, vor allem JP 3-09.3. Jedes Modul sagt dir, was du in deiner ATP-3.3.2.1 abgleichen sollst.</p>' +
      '<div class="row">' +
      (next ? '<a class="btn accent" href="#' + next.m.id + '-' + next.s.id + '">Weiterlernen: ' + esc(next.m.nr + '.' + (next.m.sections.indexOf(next.s) + 1) + ' ' + next.s.title) + '</a>' : '<a class="btn accent" href="#quiz">Probeprüfung starten</a>') +
      '<a class="btn ghost" href="#karten">Karteikarten' + (due ? ' (' + due + ' fällig)' : '') + '</a></div>' +
      '</div>' +
      '<div class="notice"><strong>Quellenlage</strong><p class="small">Inhalte stammen aus öffentlich freigegebenen US- und NATO-Dokumenten. Aus der ATP-3.3.2.1 (NATO UNCLASSIFIED) und der JFIRE (CUI) ist <strong>nichts</strong> übernommen. Wo die NATO abweicht, gilt im Lehrgang deine ATP.</p><a class="small" href="#quellen">Quellen ansehen</a></div>' +
      '</section>';

    h += '<div class="status-strip">' +
      stat('Abschnitte gelesen', read + '/' + secs.length, LP.pct(read, secs.length) + ' %') +
      stat('Karten sicher', learned + '/' + LP.cards.length, 'ab Fach 3') +
      stat('Letztes Quiz', lastQ ? lastQ.score + ' %' : '–', lastQ ? (lastQ.correct + ' von ' + lastQ.total + (lastQ.exam ? ', Prüfung' : '')) : 'noch keins') +
      stat('ATP-Abgleich', atp.done + '/' + atp.total, 'Aufträge erledigt') +
      '</div>';

    h += '<section class="stack"><div class="row"><h2>Module</h2><span class="spacer"></span><a class="small" href="#module">Alle Module</a></div>' + moduleList() + '</section>';

    h += '<section class="stack"><h2>Trainieren</h2><div class="grid-cards">' +
      tile('neunline', '9-Line-Trainer', 'Szenario lesen, Brief aufbauen, Einheiten umrechnen, Readback-Pflichten prüfen.') +
      tile('kontrolle', 'Kontrollart und Methode', 'Lagen beurteilen: Type 1, 2 oder 3? BOT oder BOC?') +
      tile('reihenfolge', 'Reihenfolgen', 'Execution Template, Check-in, 9-Line, CFF, BDA, Laser-Handoff in die richtige Ordnung bringen.') +
      tile('rechnen', 'Rechentrainer', 'Line 8, Fuß, Seemeilen, Strich, MKS-Formel, OT-Faktor, Laser-Geometrie, SEAD-Zeiten.') +
      tile('brevitytrainer', 'Brevity-Trainer', 'Begriff ↔ Bedeutung, mit NATO-Kennzeichnung.') +
      tile('funk', 'Funkbeispiele', 'Komplette Funksprüche aus JP 3-09.3 – JTAC-Funksprüche verdecken und selbst sprechen.') +
      '</div></section>';
    h += '</div>';
    return h;

    function stat(k, v, s) { return '<div><span class="k">' + esc(k) + '</span><span class="v">' + esc(v) + '</span><span class="s">' + esc(s) + '</span></div>'; }
    function tile(tok, t, d) { return '<a class="panel" href="#' + tok + '" style="text-decoration:none;color:inherit;display:grid;gap:.35rem"><h3>' + esc(t) + '</h3><p class="small muted">' + esc(d) + '</p></a>'; }
  };

  function moduleList() {
    return '<div class="module-list">' + LP.sortedModules().map(function (m) {
      var p = moduleProgress(m);
      return '<a class="module-row" href="#' + m.id + '"><span class="nr">' + String(m.nr).padStart(2, '0') + '</span>' +
        '<span><span class="t">' + esc(m.title) + '</span><br><span class="d">' + esc(m.summary) + '</span></span>' +
        '<span class="p"><span>' + p.done + '/' + p.total + '</span><span class="progress"><span style="width:' + p.pct + '%"></span></span></span></a>';
    }).join('') + '</div>';
  }

  V.module = function () {
    return '<div class="view narrow"><div class="page-head"><div class="eyebrow">Lernen</div><h1>Module</h1>' +
      '<p class="lead">Die Module bauen aufeinander auf. Für den Lehrgang besonders wichtig: 4 (Kontrollarten), 5 (Ablauf), 6 (9-Line), 7 (Korrelation) und 8 (Laser).</p></div>' + moduleList() + '</div>';
  };

  /* ---------- Modulansicht ---------- */
  V.moduleView = function (id) {
    var m = LP.moduleById(id);
    if (!m) return V.notFound();
    var mods = LP.sortedModules();
    var idx = mods.indexOf(m);
    var prev = mods[idx - 1], next = mods[idx + 1];
    var p = moduleProgress(m);
    var h = '<div class="view narrow">';
    h += '<header class="module-head"><span class="nr">MODUL ' + String(m.nr).padStart(2, '0') + ' / ' + mods.length + '</span>' +
      '<h1>' + esc(m.title) + '</h1><p class="lead">' + esc(m.summary) + '</p>' +
      '<div class="row small muted"><span>' + p.done + ' von ' + p.total + ' Abschnitten gelesen</span><span class="spacer"></span>' +
      '<a href="#quiz" data-quiz-module="' + m.id + '">Quiz zu diesem Modul</a><a href="#karten" data-cards-module="' + m.id + '">Karten zu diesem Modul</a></div>' +
      '<div class="toc">' + m.sections.map(function (s, i) {
        return '<a class="chip' + (LP.state.read[s.id] ? ' ok' : '') + '" href="#' + m.id + '-' + s.id + '">' + m.nr + '.' + (i + 1) + ' ' + esc(s.title) + '</a>';
      }).join('') + '</div></header>';
    if (m.goals && m.goals.length) {
      h += '<div class="panel flat"><h4>Lernziele</h4><ul class="small" style="margin:.3rem 0 0;padding-left:1.2rem;display:grid;gap:.2rem">' +
        m.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></div>';
    }
    m.sections.forEach(function (s, i) {
      h += '<section class="section" id="' + m.id + '-' + s.id + '"><h2><span class="sn">' + m.nr + '.' + (i + 1) + '</span>' + esc(s.title) + '</h2>' +
        '<div class="prose">' + s.html + '</div>' +
        '<div class="section-foot">' + LP.srcChips(s.src) +
        '<label class="read-toggle"><input type="checkbox" id="read-' + s.id + '" data-read="' + s.id + '"' + (LP.state.read[s.id] ? ' checked' : '') + '> gelesen und verstanden</label></div></section>';
    });
    if ((m.atp && m.atp.length) || (m.jfire && m.jfire.length)) {
      h += '<section class="section"><h2><span class="sn">✓</span>Abgleich mit deinen Print-Vorschriften</h2>';
      if (m.atp && m.atp.length) {
        h += LP.callout('atp', 'ATP-3.3.2.1 Ed. D – Abgleich-Aufträge', '<div class="task-list">' + m.atp.map(function (t, i) {
          var key = m.id + '-a' + i;
          return '<label class="check"><input type="checkbox" id="atp-' + key + '" data-atp="' + key + '"' + (LP.state.atp[key] ? ' checked' : '') + '><span>' + esc(t) + '</span></label>';
        }).join('') + '</div>');
      }
      if (m.jfire && m.jfire.length) {
        h += LP.callout('warn', 'JFIRE – Nachschlage-Aufträge (CUI: keine Werte übertragen)', '<div class="task-list">' + m.jfire.map(function (t, i) {
          var key = m.id + '-j' + i;
          return '<label class="check"><input type="checkbox" id="atp-' + key + '" data-atp="' + key + '"' + (LP.state.atp[key] ? ' checked' : '') + '><span>' + esc(t) + '</span></label>';
        }).join('') + '</div>');
      }
      h += '<p class="small muted">Gespeichert wird nur, dass ein Auftrag erledigt ist – nicht, was in der Vorschrift steht.</p></section>';
    }
    h += '<nav class="row" aria-label="Modulnavigation">' +
      (prev ? '<a class="btn ghost" href="#' + prev.id + '">← ' + prev.nr + ' ' + esc(prev.title) + '</a>' : '') +
      '<span class="spacer"></span>' +
      (next ? '<a class="btn" href="#' + next.id + '">' + next.nr + ' ' + esc(next.title) + ' →</a>' : '<a class="btn" href="#quiz">Zur Probeprüfung →</a>') +
      '</nav></div>';
    return h;
  };

  /* ---------- Karteikarten (Leitner) ---------- */
  var INTERVALS = [0, 1, 2, 4, 8, 16]; // Tage je Fach 1..5
  var cardSession = null;
  V.cardFilter = 'all';

  function buildCardSession() {
    var today = LP.dayNumber();
    var pool = LP.cards.filter(function (c) { return V.cardFilter === 'all' || c.m === V.cardFilter; });
    var due = pool.filter(function (c) { var st = cardState(c.id); return st && st.box > 0 && st.due <= today; });
    var fresh = pool.filter(function (c) { return !cardState(c.id); });
    var queue = LP.shuffle(due).concat(LP.shuffle(fresh).slice(0, 15));
    cardSession = { queue: queue, pos: 0, shown: false, right: 0, wrong: 0 };
  }

  V.karten = function () {
    if (!cardSession) buildCardSession();
    var pool = LP.cards.filter(function (c) { return V.cardFilter === 'all' || c.m === V.cardFilter; });
    var boxes = [0, 0, 0, 0, 0, 0];
    pool.forEach(function (c) { var st = cardState(c.id); boxes[st ? Math.min(st.box, 5) : 0]++; });
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Üben</div><h1>Karteikarten</h1>' +
      '<p class="lead">Leitner-System: Gewusste Karten wandern ein Fach weiter und kommen später wieder (nach 1, 2, 4, 8 und 16 Tagen). Nicht gewusste Karten gehen zurück in Fach 1. Pro Runde kommen alle fälligen Karten und bis zu 15 neue.</p></div>';
    h += '<div class="row"><div class="field" style="min-width:min(100%,320px)"><label for="card-filter">Karten aus</label><select id="card-filter">' +
      '<option value="all">allen Modulen</option>' + LP.sortedModules().map(function (m) {
        return '<option value="' + m.id + '"' + (V.cardFilter === m.id ? ' selected' : '') + '>Modul ' + m.nr + ': ' + esc(m.title) + '</option>';
      }).join('') + '</select></div><span class="spacer"></span><button class="btn ghost small" type="button" data-act="cards-restart">Neue Runde</button></div>';
    h += '<div class="leitner">' + ['Neu', 'Fach 1', 'Fach 2', 'Fach 3', 'Fach 4', 'Fach 5'].map(function (k, i) {
      return '<div><span class="k">' + k + '</span><span class="v">' + boxes[i] + '</span></div>';
    }).join('') + '</div>';
    var s = cardSession;
    if (!s.queue.length || s.pos >= s.queue.length) {
      h += '<div class="panel stack"><h3>' + (s.queue.length ? 'Runde beendet' : 'Gerade nichts fällig') + '</h3>' +
        (s.queue.length ? '<p>' + s.right + ' gewusst, ' + s.wrong + ' noch üben.</p>' : '<p>Alle Karten dieser Auswahl sind für heute erledigt. Wähle andere Module oder komm morgen wieder.</p>') +
        '<div class="row"><button class="btn" type="button" data-act="cards-restart">Neue Runde starten</button><a class="btn ghost" href="#quiz">Zum Quiz</a></div></div>';
    } else {
      var c = s.queue[s.pos];
      var st = cardState(c.id);
      var m = LP.moduleById(c.m);
      h += '<div class="flash-wrap"><article class="flash" aria-live="polite"><div class="fh"><span>Karte ' + (s.pos + 1) + ' von ' + s.queue.length + '</span>' +
        '<span>' + (m ? 'Modul ' + m.nr : '') + ' · ' + (st ? 'Fach ' + st.box : 'neu') + '</span></div>' +
        '<div class="fb"><div class="q">' + c.q + '</div>' +
        (s.shown ? '<div class="a">' + c.a + (c.src ? LP.srcChips(c.src) : '') + '</div>' : '') + '</div>' +
        '<div class="ff">' + (s.shown
          ? '<button class="btn ghost" type="button" data-act="card-wrong">Noch nicht gewusst</button><button class="btn accent" type="button" data-act="card-right">Gewusst</button>'
          : '<button class="btn" type="button" data-act="card-show">Antwort zeigen</button>') + '</div></article></div>';
    }
    h += '</div>';
    return h;
  };

  function answerCard(right) {
    var s = cardSession;
    var c = s.queue[s.pos];
    var st = cardState(c.id) || { box: 0, due: 0 };
    if (right) { st.box = Math.min((st.box || 0) + 1, 5); s.right++; }
    else { st.box = 1; s.wrong++; }
    st.due = LP.dayNumber() + INTERVALS[st.box];
    LP.state.cards[c.id] = st;
    LP.save();
    s.pos++;
    s.shown = false;
  }

  /* ---------- Quiz ---------- */
  var quiz = null;
  V.quizPreselect = null;
  V.quiz = function () {
    if (!quiz) return quizSetup();
    if (quiz.finished) return quizResult();
    return quizQuestion();
  };
  function quizSetup() {
    var sel = V.quizPreselect;
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Üben</div><h1>Quiz &amp; Prüfung</h1>' +
      '<p class="lead">Im Übungsmodus siehst du nach jeder Frage die Lösung mit Begründung und Quelle. Im Prüfungsmodus kommt die Auswertung am Ende; bestanden ist ab 80 %.</p></div>';
    h += '<form class="stack-lg" id="quiz-form"><fieldset><legend>Module</legend><div class="row" style="margin-bottom:.5rem"><button class="btn ghost small" type="button" data-act="quiz-all">alle</button><button class="btn ghost small" type="button" data-act="quiz-none">keine</button></div><div class="checks">' +
      LP.sortedModules().map(function (m) {
        var n = LP.quiz.filter(function (q) { return q.m === m.id; }).length;
        var on = sel ? sel === m.id : true;
        return '<label class="check"><input type="checkbox" name="qm" id="qm-' + m.id + '" value="' + m.id + '"' + (on ? ' checked' : '') + '><span>' + m.nr + ' · ' + esc(m.title) + ' <span class="muted small">(' + n + ')</span></span></label>';
      }).join('') + '</div></fieldset>' +
      '<div class="two-col"><fieldset><legend>Anzahl</legend><div class="row">' + [10, 20, 40, 60].map(function (n, i) {
        return '<label class="check"><input type="radio" name="qn" id="qn-' + n + '" value="' + n + '"' + (i === 1 ? ' checked' : '') + '><span>' + n + '</span></label>';
      }).join('') + '</div></fieldset>' +
      '<fieldset><legend>Modus</legend><div class="row"><label class="check"><input type="radio" name="qmode" id="qmode-p" value="practice" checked><span>Übung</span></label><label class="check"><input type="radio" name="qmode" id="qmode-e" value="exam"><span>Prüfung</span></label></div></fieldset></div>' +
      '<div class="row"><button class="btn accent" type="submit">Quiz starten</button></div></form>';
    var hist = (LP.state.quiz || []).slice(-8).reverse();
    if (hist.length) {
      h += '<section class="stack"><h3>Letzte Ergebnisse</h3><div class="table-wrap"><table class="data"><thead><tr><th>Datum</th><th>Modus</th><th>Fragen</th><th>Ergebnis</th></tr></thead><tbody>' +
        hist.map(function (r) {
          return '<tr><td class="mono">' + esc(r.date) + '</td><td>' + (r.exam ? 'Prüfung' : 'Übung') + '</td><td class="mono">' + r.total + '</td><td><span class="chip ' + (r.score >= 80 ? 'ok' : 'crit') + '">' + r.score + ' %</span></td></tr>';
        }).join('') + '</tbody></table></div></section>';
    }
    h += '</div>';
    return h;
  }
  V.startQuiz = function (mods, n, exam) {
    var pool = LP.quiz.filter(function (q) { return mods.indexOf(q.m) >= 0; });
    var qs = LP.shuffle(pool).slice(0, n).map(function (q) {
      var order = LP.shuffle(q.o.map(function (_, i) { return i; }));
      return { q: q, order: order, picked: null };
    });
    quiz = { items: qs, pos: 0, exam: exam, finished: false };
  };
  function quizQuestion() {
    var it = quiz.items[quiz.pos];
    var q = it.q;
    var m = LP.moduleById(q.m);
    var answered = it.picked !== null;
    var showFb = answered && !quiz.exam;
    var h = '<div class="view narrow"><div class="row small muted"><span>Frage ' + (quiz.pos + 1) + ' von ' + quiz.items.length + ' · ' + (quiz.exam ? 'Prüfung' : 'Übung') + (m ? ' · Modul ' + m.nr : '') + '</span><span class="spacer"></span><button class="btn ghost small" type="button" data-act="quiz-cancel">Abbrechen</button></div>' +
      '<div class="progress"><span style="width:' + LP.pct(quiz.pos, quiz.items.length) + '%"></span></div>' +
      '<div class="quiz-q">' + q.q + '</div><div class="options">' +
      it.order.map(function (oi, k) {
        var cls = 'option';
        if (showFb) { if (oi === q.a) cls += ' right'; else if (oi === it.picked) cls += ' wrong'; }
        else if (it.picked === oi) cls += ' picked';
        return '<button type="button" class="' + cls + '" data-opt="' + oi + '"' + (showFb ? ' disabled' : '') + '><span class="ol">' + 'ABCDEF'[k] + '</span><span>' + q.o[oi] + '</span></button>';
      }).join('') + '</div>';
    if (showFb) {
      var ok = it.picked === q.a;
      h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><span class="ft">' + (ok ? 'Richtig' : 'Nicht richtig') + '</span><div>' + (q.e || '') + '</div>' + LP.srcChips(q.src) + '</div>';
    }
    h += '<div class="row">' + (quiz.pos > 0 && quiz.exam ? '<button class="btn ghost" type="button" data-act="quiz-prev">Zurück</button>' : '') + '<span class="spacer"></span>' +
      '<button class="btn" type="button" data-act="quiz-next"' + (answered ? '' : ' disabled') + '>' + (quiz.pos + 1 < quiz.items.length ? 'Weiter' : 'Auswerten') + '</button></div></div>';
    return h;
  }
  function quizResult() {
    var correct = quiz.items.filter(function (it) { return it.picked === it.q.a; }).length;
    var score = LP.pct(correct, quiz.items.length);
    var passed = score >= 80;
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">' + (quiz.exam ? 'Prüfung' : 'Übung') + ' beendet</div>' +
      '<div class="row"><span class="score-big">' + score + ' %</span><span class="chip ' + (passed ? 'ok' : 'crit') + '">' + (passed ? 'bestanden' : 'unter 80 %') + '</span></div>' +
      '<p class="lead">' + correct + ' von ' + quiz.items.length + ' Fragen richtig.</p></div>' +
      '<div class="row"><button class="btn accent" type="button" data-act="quiz-again">Neues Quiz</button><a class="btn ghost" href="#karten">Karteikarten</a></div>';
    var wrong = quiz.items.filter(function (it) { return it.picked !== it.q.a; });
    if (wrong.length) {
      h += '<section class="stack"><h2>Zum Nacharbeiten</h2>' + wrong.map(function (it) {
        var q = it.q;
        var mm = LP.moduleById(q.m);
        return '<div class="panel stack"><div class="small muted">' + (mm ? '<a href="#' + mm.id + '">Modul ' + mm.nr + ' · ' + esc(mm.title) + '</a>' : '') + '</div>' +
          '<div style="font-weight:600">' + q.q + '</div>' +
          '<div class="small">Deine Antwort: <span class="chip crit">' + (it.picked === null ? '–' : q.o[it.picked]) + '</span></div>' +
          '<div class="small">Richtig: <span class="chip ok">' + q.o[q.a] + '</span></div>' +
          (q.e ? '<p class="small muted">' + q.e + '</p>' : '') + LP.srcChips(q.src) + '</div>';
      }).join('') + '</section>';
    }
    h += '</div>';
    return h;
  }
  function finishQuiz() {
    quiz.finished = true;
    var correct = quiz.items.filter(function (it) { return it.picked === it.q.a; }).length;
    var d = new Date();
    LP.state.quiz.push({
      date: d.toLocaleDateString('de-DE') + ' ' + d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      total: quiz.items.length, correct: correct, score: LP.pct(correct, quiz.items.length), exam: quiz.exam
    });
    if (LP.state.quiz.length > 50) LP.state.quiz = LP.state.quiz.slice(-50);
    LP.save();
  }

  /* ---------- Glossar ---------- */
  V.glossFilter = { q: '', letter: '' };
  V.glossar = function () {
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Nachschlagen</div><h1>Glossar</h1>' +
      '<p class="lead">Abkürzungen und Begriffe aus CAS, Feuerunterstützung und Luftraumkoordinierung. Die Definition steht im Originalwortlaut der Vorschrift, mit Fundstelle.</p></div>' +
      '<div class="field"><label for="gloss-q">Suchen</label><input type="search" id="gloss-q" placeholder="z. B. FSCL, Danger Close, Korrelation" value="' + esc(V.glossFilter.q) + '"></div>' +
      '<div class="letter-nav" role="group" aria-label="Anfangsbuchstabe">' + '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (L) {
        var v = L === '#' ? '' : L;
        return '<button type="button" data-letter="' + v + '" aria-pressed="' + (V.glossFilter.letter === v) + '">' + (L === '#' ? 'Alle' : L) + '</button>';
      }).join('') + '</div><div id="gloss-results">' + glossResults() + '</div></div>';
    return h;
  };
  function glossResults() {
    var q = V.glossFilter.q.trim().toLowerCase();
    var L = V.glossFilter.letter;
    var list = LP.glossary.slice().sort(function (a, b) { return a.t.localeCompare(b.t, 'de'); }).filter(function (g) {
      if (L && g.t.charAt(0).toUpperCase() !== L) return false;
      if (!q) return true;
      return (g.t + ' ' + (g.l || '') + ' ' + g.d).toLowerCase().indexOf(q) >= 0;
    });
    if (!list.length) return '<p class="empty">Kein Eintrag gefunden.</p>';
    return '<p class="small muted">' + list.length + ' Einträge</p><div class="gloss-list">' + list.map(function (g) {
      var m = g.m ? LP.moduleById(g.m) : null;
      return '<div class="gloss-item"><div class="gt">' + esc(g.t) + '</div><div class="gd">' + (g.l ? '<span class="gl">' + esc(g.l) + '</span>' : '') +
        (g.d ? '<span class="en-def">' + g.d + '</span>' + LP.srcChips(g.src) : '') + (m ? '<a class="small" href="#' + m.id + '">Modul ' + m.nr + ': ' + esc(m.title) + '</a>' : '') + '</div></div>';
    }).join('') + '</div>';
  }
  V.glossResults = glossResults;

  /* ---------- Brevity ---------- */
  V.brevFilter = { q: '', cat: '', nato: '' };
  V.brevity = function () {
    var cats = [];
    LP.brevity.forEach(function (b) { if (cats.indexOf(b.cat) < 0) cats.push(b.cat); });
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Nachschlagen</div><h1>Brevity</h1>' +
      '<p class="lead">CAS-relevante Begriffe aus ATP 1-02.1 (April 2025), Definition im Originalwortlaut, darunter eine deutsche Kurzhilfe. <span class="chip warn">*</span> Bedeutung weicht von der NATO-Brevity ab. <span class="chip crit">**</span> kein NATO-Brevity-Begriff. Ohne Zeichen: gleiche Bedeutung wie NATO.</p></div>' +
      '<div class="two-col"><div class="field"><label for="brev-q">Suchen</label><input type="search" id="brev-q" placeholder="Begriff oder Bedeutung" value="' + esc(V.brevFilter.q) + '"></div>' +
      '<div class="two-col"><div class="field"><label for="brev-cat">Bereich</label><select id="brev-cat"><option value="">alle</option>' +
      cats.map(function (c) { return '<option' + (V.brevFilter.cat === c ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="brev-nato">NATO</label><select id="brev-nato"><option value="">alle</option><option value="same"' + (V.brevFilter.nato === 'same' ? ' selected' : '') + '>gleich wie NATO</option><option value="diff"' + (V.brevFilter.nato === 'diff' ? ' selected' : '') + '>abweichend (* oder **)</option></select></div></div></div>' +
      '<div id="brev-results">' + brevResults() + '</div></div>';
    return h;
  };
  function brevResults() {
    var f = V.brevFilter;
    var q = f.q.trim().toLowerCase();
    var bkey = function (t) { return t.replace(/^\[[^\]]*\]\s*/, ''); };
    var list = LP.brevity.slice().sort(function (a, b) { return bkey(a.t).localeCompare(bkey(b.t)); }).filter(function (b) {
      if (f.cat && b.cat !== f.cat) return false;
      if (f.nato === 'same' && b.nato) return false;
      if (f.nato === 'diff' && !b.nato) return false;
      if (!q) return true;
      return (b.t + ' ' + b.en + ' ' + b.de).toLowerCase().indexOf(q) >= 0;
    });
    if (!list.length) return '<p class="empty">Kein Begriff gefunden.</p>';
    return '<p class="small muted">' + list.length + ' Begriffe</p><div class="gloss-list">' + list.map(function (b) {
      return '<div class="gloss-item"><div class="gt">' + esc(b.t) + (b.nato ? ' <span class="chip ' + (b.nato === '**' ? 'crit' : 'warn') + '">' + b.nato + '</span>' : '') + '</div>' +
        '<div class="gd"><span class="en-def">' + esc(b.en) + '</span><span class="gl">' + esc(b.de) + '</span><span class="small muted">' + esc(b.cat) + '</span>' + LP.srcChips(b.src) + '</div></div>';
    }).join('') + '</div>';
  }
  V.brevResults = brevResults;

  /* ---------- Quellen ---------- */
  V.quellen = function () {
    var order = ['jp3093', 'ajp33', 'atp1021', 'atp30930', 'jp309', 'jp352', 'fm309', 'atp3522', 'atp3321', 'jfire'];
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Nachschlagen</div><h1>Quellen</h1>' +
      '<p class="lead">Alle Vorschriftentexte in dieser App sind wörtliche Zitate aus öffentlich freigegebenen Dokumenten, jeweils mit Seitenangabe. Die beiden Lehrgangsvorschriften sind als Print-Abgleich geführt.</p></div><div class="stack">';
    order.forEach(function (id) {
      var s = LP.sources[id];
      if (!s) return;
      var chip = s.status === 'öffentlich' ? 'ok' : (s.status === 'Print' ? 'warn' : 'crit');
      h += '<article class="panel stack" id="src-' + id + '"><div class="row"><h3 style="margin:0">' + esc(s.short) + '</h3><span class="chip ' + chip + '">' + esc(s.status) + '</span><span class="spacer"></span><span class="small muted">' + esc(s.edition) + '</span></div>' +
        '<div>' + esc(s.title) + '<div class="small muted">' + esc(s.publisher) + '</div></div>' +
        (s.statusNote ? '<p class="small">' + esc(s.statusNote) + '</p>' : '') +
        '<p class="small"><strong>Verwendet für:</strong> ' + esc(s.used) + '</p>' +
        (s.note ? '<p class="small muted">' + esc(s.note) + '</p>' : '') +
        (s.url ? '<p class="small"><a href="' + esc(s.url) + '" target="_blank" rel="noopener">Dokument öffnen</a>' + (s.alt ? ' · <a href="' + esc(s.alt) + '" target="_blank" rel="noopener">Alternative Quelle</a>' : '') + '</p>' : '') +
        '</article>';
    });
    h += '</div><div class="notice"><strong>Hinweis</strong><p class="small">Dieses Lernprogramm ist eine private Lernhilfe und ersetzt keine Vorschrift und keine Ausbildung. Maßgeblich sind die für deinen Lehrgang gültigen Vorschriften in der aktuellen Fassung, insbesondere die ATP-3.3.2.1.</p></div></div>';
    return h;
  };

  /* ---------- Lernplan ---------- */
  V.plan = function () {
    var total = 0, done = 0;
    LP.plan.forEach(function (w) { w.tasks.forEach(function (t) { total++; if (LP.state.plan[t.id]) done++; }); });
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Planen</div><h1>Lernplan: 8 Wochen</h1>' +
      '<p class="lead">Ein Vorschlag mit etwa 45 bis 60 Minuten pro Tag. Passe das Tempo an deinen Lehrgangsbeginn an.</p>' +
      '<div class="row small"><span>' + done + ' von ' + total + ' Aufgaben erledigt</span></div><div class="progress"><span style="width:' + LP.pct(done, total) + '%"></span></div></div>';
    LP.plan.forEach(function (w) {
      var wd = w.tasks.filter(function (t) { return LP.state.plan[t.id]; }).length;
      h += '<section class="panel week"><div class="week-head"><h3>Woche ' + w.week + ': ' + esc(w.title) + '</h3><span class="small muted">' + wd + '/' + w.tasks.length + '</span></div>' +
        (w.focus ? '<p class="small muted">' + esc(w.focus) + '</p>' : '') + '<div class="task-list">' +
        w.tasks.map(function (t) {
          return '<label class="check"><input type="checkbox" id="plan-' + t.id + '" data-plan="' + t.id + '"' + (LP.state.plan[t.id] ? ' checked' : '') + '><span>' + esc(t.text) +
            (t.link ? ' <a href="#' + t.link + '">öffnen</a>' : '') + '</span></label>';
        }).join('') + '</div></section>';
    });
    h += '</div>';
    return h;
  };

  /* ---------- Daten ---------- */
  V.daten = function () {
    var json = JSON.stringify(LP.state);
    var h = '<div class="view narrow"><div class="page-head"><div class="eyebrow">Planen</div><h1>Fortschritt &amp; Daten</h1>' +
      '<p class="lead">Dein Fortschritt wird nur in diesem Browser bzw. in der installierten App gespeichert. Mit dem Code unten überträgst du ihn auf ein anderes Gerät oder vom Browser in die App.</p></div>' +
      V.appPanel('daten') +
      '<section class="panel stack"><h3>Darstellung</h3><div class="row">' +
      ['auto', 'light', 'dark'].map(function (t) {
        return '<label class="check"><input type="radio" name="theme" id="theme-' + t + '" value="' + t + '"' + (LP.state.theme === t ? ' checked' : '') + '><span>' + ({ auto: 'wie System', light: 'hell', dark: 'dunkel' })[t] + '</span></label>';
      }).join('') + '</div></section>' +
      '<section class="panel stack"><h3>Fortschritt sichern</h3><p class="small muted">Code kopieren und z. B. in eine Notiz einfügen.</p>' +
      '<textarea id="export-box" readonly>' + esc(json) + '</textarea><div class="row"><button class="btn" type="button" data-act="export-copy">Kopieren</button></div></section>' +
      '<section class="panel stack"><h3>Fortschritt laden</h3><p class="small muted">Gesicherten Code einfügen. Der aktuelle Stand wird überschrieben.</p>' +
      '<textarea id="import-box" placeholder="{&quot;read&quot;: …}"></textarea><div class="row"><button class="btn" type="button" data-act="import-apply">Laden</button><span id="import-msg" class="small"></span></div></section>' +
      '<section class="panel stack"><h3>Zurücksetzen</h3><p class="small muted">Löscht gelesene Abschnitte, Kartenfächer, Quizergebnisse, Lernplan und Abgleich-Häkchen in diesem Browser.</p>' +
      '<div class="row" id="reset-area"><button class="btn ghost" type="button" data-act="reset-ask">Alles zurücksetzen …</button></div></section></div>';
    return h;
  };

  /* ---------- App installieren ---------- */
  function appHintOff() { try { return window.localStorage.getItem('jtacLP.appHint') === 'off'; } catch (e) { return false; } }
  V.appPanel = function (ctx) {
    var A = LP.app || {};
    var wrap = function (inner) { return '<div id="app-panel" data-ctx="' + ctx + '">' + inner + '</div>'; };
    if (A.standalone) {
      return wrap(ctx === 'daten' ? '<section class="panel stack"><h3>App</h3><p class="small">Läuft als App vom Home-Bildschirm' +
        (A.offline ? ' – alle Inhalte liegen auf dem Gerät und funktionieren offline.' : '.') + '</p></section>' : '');
    }
    // nur anbieten, wo Installation wirklich geht (nicht in Vorschauen oder als lokale Datei)
    if (!A.offline && !A.prompt) return wrap('');
    if (ctx === 'start' && appHintOff()) return wrap('');
    var how;
    if (A.prompt) how = '<div class="row"><button class="btn accent" type="button" data-act="app-install">App installieren</button></div>';
    else if (A.ios) how = '<ol class="install-steps small"><li>In <strong>Safari</strong> auf <span class="ico">Teilen</span> tippen (Quadrat mit Pfeil nach oben).</li>' +
      '<li><strong>Zum Home-Bildschirm</strong> wählen (falls nicht sichtbar: in der Liste nach unten scrollen).</li>' +
      '<li><strong>Hinzufügen</strong> tippen und die App danach über das JTAC-Symbol öffnen.</li></ol>';
    else how = '<p class="small">Im Browsermenü <strong>App installieren</strong> bzw. <strong>Zum Startbildschirm hinzufügen</strong> wählen.</p>';
    return wrap('<section class="notice stack"><strong>Als App installieren</strong>' +
      '<p class="small">Mit eigenem Symbol auf dem Home-Bildschirm, im Vollbild und komplett offline.</p>' + how +
      '<p class="small muted">Browser und App speichern den Fortschritt getrennt. Zum Übertragen den Code unter <a href="#daten">Fortschritt &amp; Daten</a> kopieren und in der App laden.</p>' +
      (ctx === 'start' ? '<div class="row"><button class="btn ghost small" type="button" data-act="app-hint-close">Hinweis ausblenden</button></div>' : '') +
      '</section>');
  };
  V.refreshAppPanel = function () {
    var el = document.getElementById('app-panel');
    if (el) el.outerHTML = V.appPanel(el.getAttribute('data-ctx'));
  };

  V.notFound = function () {
    return '<div class="view narrow"><h1>Seite nicht gefunden</h1><p><a href="#start">Zur Startseite</a></p></div>';
  };

  /* ---------- Ereignisse ---------- */
  V.handleClick = function (e) {
    var t = e.target.closest('[data-act], [data-opt], [data-letter], [data-quiz-module], [data-cards-module], [data-reveal]');
    if (!t) return false;
    if (t.hasAttribute('data-quiz-module')) { V.quizPreselect = t.getAttribute('data-quiz-module'); quiz = null; return false; }
    if (t.hasAttribute('data-cards-module')) { V.cardFilter = t.getAttribute('data-cards-module'); cardSession = null; return false; }
    if (t.hasAttribute('data-reveal')) { t.classList.remove('hidden-call'); t.removeAttribute('role'); return true; }
    if (t.hasAttribute('data-letter')) { V.glossFilter.letter = t.getAttribute('data-letter'); LP.render(); return true; }
    if (t.hasAttribute('data-opt')) {
      if (!quiz || quiz.finished) return true;
      var it = quiz.items[quiz.pos];
      if (it.picked !== null && !quiz.exam) return true;
      it.picked = parseInt(t.getAttribute('data-opt'), 10);
      LP.render(true);
      return true;
    }
    var act = t.getAttribute('data-act');
    switch (act) {
      case 'app-install':
        if (LP.app.prompt) {
          LP.app.prompt.prompt();
          LP.app.prompt.userChoice.then(function () { LP.app.prompt = null; V.refreshAppPanel(); }, function () {});
        }
        return true;
      case 'app-hint-close':
        try { window.localStorage.setItem('jtacLP.appHint', 'off'); } catch (err) { /* ohne Speicher bleibt der Hinweis */ }
        document.getElementById('app-panel').innerHTML = '';
        return true;
      case 'card-show': cardSession.shown = true; LP.render(true); return true;
      case 'card-right': answerCard(true); LP.render(true); return true;
      case 'card-wrong': answerCard(false); LP.render(true); return true;
      case 'cards-restart': buildCardSession(); LP.render(true); return true;
      case 'quiz-all': document.querySelectorAll('input[name="qm"]').forEach(function (c) { c.checked = true; }); return true;
      case 'quiz-none': document.querySelectorAll('input[name="qm"]').forEach(function (c) { c.checked = false; }); return true;
      case 'quiz-next':
        if (quiz.pos + 1 < quiz.items.length) quiz.pos++; else finishQuiz();
        LP.render(true); window.scrollTo(0, 0); return true;
      case 'quiz-prev': if (quiz.pos > 0) quiz.pos--; LP.render(true); return true;
      case 'quiz-cancel': quiz = null; LP.render(true); return true;
      case 'quiz-again': quiz = null; V.quizPreselect = null; LP.render(true); return true;
      case 'export-copy': LP.copyText(document.getElementById('export-box').value, document.getElementById('export-box')); return true;
      case 'import-apply':
        var msg = document.getElementById('import-msg');
        try {
          var obj = JSON.parse(document.getElementById('import-box').value);
          if (!obj || typeof obj !== 'object' || !obj.read) throw new Error('format');
          LP.importState(obj);
          LP.applyTheme();
          msg.textContent = 'Fortschritt geladen.';
          LP.toast('Fortschritt geladen');
          LP.renderNavOnly();
        } catch (err) {
          msg.textContent = 'Der Code ist kein gültiger Fortschritt. Bitte den vollständigen gesicherten Text einfügen.';
        }
        return true;
      case 'reset-ask':
        document.getElementById('reset-area').innerHTML = '<span class="inline-confirm"><span class="small">Wirklich alles löschen?</span><button class="btn small" type="button" data-act="reset-yes">Ja, zurücksetzen</button><button class="btn ghost small" type="button" data-act="reset-no">Abbrechen</button></span>';
        return true;
      case 'reset-no': LP.render(true); return true;
      case 'reset-yes': LP.resetState(); cardSession = null; quiz = null; LP.applyTheme(); LP.toast('Fortschritt zurückgesetzt'); LP.render(true); return true;
    }
    return false;
  };

  V.handleChange = function (e) {
    var t = e.target;
    if (t.hasAttribute('data-read')) { LP.state.read[t.getAttribute('data-read')] = t.checked; LP.save(); LP.renderNavOnly(); updateToc(); return true; }
    if (t.hasAttribute('data-atp')) { LP.state.atp[t.getAttribute('data-atp')] = t.checked; LP.save(); return true; }
    if (t.hasAttribute('data-plan')) { LP.state.plan[t.getAttribute('data-plan')] = t.checked; LP.save(); return true; }
    if (t.id === 'card-filter') { V.cardFilter = t.value; buildCardSession(); LP.render(true); return true; }
    if (t.id === 'brev-cat') { V.brevFilter.cat = t.value; document.getElementById('brev-results').innerHTML = brevResults(); return true; }
    if (t.id === 'brev-nato') { V.brevFilter.nato = t.value; document.getElementById('brev-results').innerHTML = brevResults(); return true; }
    if (t.name === 'theme') { LP.state.theme = t.value; LP.save(); LP.applyTheme(); return true; }
    return false;
  };
  function updateToc() {
    document.querySelectorAll('.toc .chip').forEach(function (a) {
      var id = a.getAttribute('href').split('-')[1];
      a.classList.toggle('ok', !!LP.state.read[id]);
    });
  }

  V.handleInput = function (e) {
    var t = e.target;
    if (t.id === 'gloss-q') { V.glossFilter.q = t.value; document.getElementById('gloss-results').innerHTML = glossResults(); return true; }
    if (t.id === 'brev-q') { V.brevFilter.q = t.value; document.getElementById('brev-results').innerHTML = brevResults(); return true; }
    return false;
  };

  V.handleSubmit = function (e) {
    if (e.target.id === 'quiz-form') {
      e.preventDefault();
      var mods = Array.prototype.slice.call(document.querySelectorAll('input[name="qm"]:checked')).map(function (c) { return c.value; });
      var n = parseInt((document.querySelector('input[name="qn"]:checked') || {}).value || '20', 10);
      var exam = (document.querySelector('input[name="qmode"]:checked') || {}).value === 'exam';
      if (!mods.length) { LP.toast('Bitte mindestens ein Modul wählen'); return true; }
      V.startQuiz(mods, n, exam);
      LP.render(true);
      window.scrollTo(0, 0);
      return true;
    }
    return false;
  };
})();
