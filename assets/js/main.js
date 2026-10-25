/* JTAC Lernprogramm – Router, Darstellung, Ereignisverteilung.
   Adressen sind einfache Hash-Wörter (#start, #m05, #m05-m05s3, #quiz …),
   damit Links auch als Lesezeichen funktionieren. */
(function () {
  'use strict';
  var LP = window.LP;
  var V = LP.views;

  var PAGES = ['start', 'module', 'spick', 'karten', 'quiz', 'training', 'funk', 'glossar', 'brevity', 'quellen', 'plan', 'daten',
    'neunline', 'kontrolle', 'reihenfolge', 'brevitytrainer', 'rechnen'];

  function parseHash() {
    var h = (location.hash || '').replace(/^#/, '');
    if (!h) return { tok: 'start' };
    var m = /^(m\d\d)(?:-(m\d\ds\d+))?$/.exec(h);
    if (m) return { tok: m[1], module: m[1], anchor: m[2] ? h : null };
    return { tok: h };
  }

  var current = 'start';
  LP.currentRoute = function () { return current; };

  LP.render = function (keepScroll) {
    var r = parseHash();
    current = r.tok;
    var main = document.getElementById('main');
    var html;
    if (r.module) html = V.moduleView(r.module);
    else if (PAGES.indexOf(r.tok) >= 0 && typeof V[r.tok] === 'function') html = V[r.tok]();
    else html = V.notFound();
    var y = window.scrollY;
    main.innerHTML = html;
    V.renderNav(current);
    if (keepScroll) {
      window.scrollTo(0, y);
    } else if (r.anchor) {
      var el = document.getElementById(r.anchor);
      if (el) el.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    var t = main.querySelector('h1');
    document.title = (t ? t.textContent + ' · ' : '') + 'JTAC Lernprogramm';
  };

  LP.renderNavOnly = function () { V.renderNav(current); };

  var THEME_LABEL = { auto: 'Auto', light: 'Hell', dark: 'Dunkel' };
  LP.applyTheme = function () {
    var t = LP.state.theme || 'auto';
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    var b = document.getElementById('theme-toggle');
    if (b) {
      b.textContent = THEME_LABEL[t] || 'Auto';
      b.setAttribute('aria-label', 'Darstellung: ' + (THEME_LABEL[t] || 'Auto') + ' – wechseln');
    }
  };

  function setNav(open) {
    var nav = document.getElementById('nav');
    var btn = document.getElementById('nav-toggle');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener('click', function (e) {
    if (e.target.closest('#nav-toggle')) {
      setNav(!document.getElementById('nav').classList.contains('open'));
      return;
    }
    if (e.target.closest('#theme-toggle')) {
      var order = ['auto', 'light', 'dark'];
      LP.state.theme = order[(order.indexOf(LP.state.theme) + 1) % order.length];
      LP.save();
      LP.applyTheme();
      document.querySelectorAll('input[name="theme"]').forEach(function (r) { r.checked = r.value === LP.state.theme; });
      return;
    }
    if (e.target.closest('#nav a')) setNav(false);
    // Link auf die bereits offene Seite: trotzdem neu aufbauen (z. B. Quiz aus Modul vorbelegt)
    var a = e.target.closest('a[href^="#"]');
    if (V.handleClick(e) || (V.drillClick && V.drillClick(e))) { e.preventDefault(); return; }
    if (a && a.getAttribute('href') === location.hash && !/^#m\d\d-/.test(location.hash)) LP.render();
  });
  document.addEventListener('change', function (e) {
    if (V.handleChange(e)) return;
    if (V.drillChange) V.drillChange(e);
  });
  document.addEventListener('input', function (e) {
    if (V.handleInput(e)) return;
    if (V.drillInput) V.drillInput(e);
  });
  document.addEventListener('submit', function (e) {
    if (V.handleSubmit(e)) return;
    if (V.drillSubmit && V.drillSubmit(e)) return;
    e.preventDefault();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
    var t = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && t.getAttribute && t.getAttribute('role') === 'button' && t.tagName !== 'BUTTON') {
      e.preventDefault();
      t.click();
    }
  });
  window.addEventListener('hashchange', function () {
    setNav(false);
    LP.render();
    var main = document.getElementById('main');
    if (main && !/^#m\d\d-/.test(location.hash)) main.focus({ preventScroll: true });
  });

  LP.applyTheme();
  LP.render();

  /* ---------- App: Offline-Speicher (Service Worker) und Installation ----------
     Nur über https (bzw. localhost). In eingebetteten Vorschauen schlägt die Registrierung fehl;
     dann läuft alles wie bisher, nur ohne Offline-Speicher und ohne Installationshinweis. */
  var local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || local)) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').then(function () {
      return navigator.serviceWorker.ready;
    }).then(function () {
      LP.app.offline = true;
      V.refreshAppPanel();
    }).catch(function () { /* ohne Offline-Speicher weiter */ });
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (hadController) LP.toast('Neue Version geladen – sie gilt ab dem nächsten Start.', 5000);
      hadController = true;
    });
  }
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    LP.app.prompt = e;
    V.refreshAppPanel();
  });
  window.addEventListener('appinstalled', function () {
    LP.app.prompt = null;
    V.refreshAppPanel();
    LP.toast('App installiert');
  });
})();
