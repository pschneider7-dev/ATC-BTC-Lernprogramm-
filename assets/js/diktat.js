/* Diktieren statt Tippen bei den Definitionen der Kapitel-Aufgaben.
   LP.diktatHtml(target) liefert den Knopf unter dem Antwortfeld mit der ID target.
   Nutzt die Spracherkennung des Browsers (Web Speech API) auf Englisch. Der gesprochene Text kommt hinter den
   bisherigen Text im Feld. Selbst tippen, Prüfen, ein anderer Knopf oder ein Seitenwechsel beenden das Diktat.
   Ohne Spracherkennung im Browser (oder wenn das Gerät sie ablehnt, z. B. manche iPhones in der App vom
   Home-Bildschirm) erscheint ein Hinweis auf das Mikrofon der Tastatur. */
(function () {
  'use strict';
  var LP = window.LP;
  var esc = LP.esc;
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  var LANG = 'en-US';
  var standalone = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  var cur = null;       // laufendes Diktat: { rec, field, btn, base, live, done, heard, err }
  var blocked = false;  // das Gerät hat die Spracherkennung abgelehnt (gilt bis zum Neuladen)

  var MIC = '<svg class="diktat-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/>' +
    '<path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>';
  var KEYBOARD = 'Nutze stattdessen das Mikrofon auf der Tastatur und stell die Tastatur dafür auf Englisch.';
  var HINT = 'Diktieren geht hier über das Mikrofon auf der Tastatur. Stell die Tastatur dafür auf Englisch.';

  LP.diktatHtml = function (target) {
    if (!Rec || blocked) return '<p class="small muted diktat-hint">' + esc(HINT) + '</p>';
    return '<div class="row diktat"><button type="button" class="btn ghost small diktat-btn" data-diktat="' + esc(target) + '" aria-pressed="false">' +
      MIC + '<span>Diktieren</span></button><span class="small muted diktat-msg" role="status" aria-live="polite"></span></div>';
  };

  /* Text aus allen Ergebnissen dieses Diktats. Chrome auf Android liefert ein Ergebnis oft mitsamt dem
     vorherigen Text noch einmal; das wird erkannt und nicht doppelt übernommen. */
  function heard(results) {
    var out = '', last = '';
    for (var i = 0; i < results.length; i++) {
      var s = String((results[i][0] && results[i][0].transcript) || '').replace(/\s+/g, ' ').trim();
      if (!s || s.toLowerCase() === last) continue;
      if (out && s.toLowerCase().indexOf(out.toLowerCase()) === 0) out = s;
      else out = out ? out + ' ' + s : s;
      last = s.toLowerCase();
    }
    return out;
  }
  function join(base, t) {
    if (!base || /[.!?:]$/.test(base)) t = t.charAt(0).toUpperCase() + t.slice(1);
    return base ? base + ' ' + t : t;
  }

  function msg(c, t) { var m = c.btn.parentNode && c.btn.parentNode.querySelector('.diktat-msg'); if (m) m.textContent = t || ''; }
  function setBtn(btn, on) {
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.querySelector('span').textContent = on ? 'Stopp' : 'Diktieren';
  }

  function start(btn) {
    var field = document.getElementById(btn.getAttribute('data-diktat'));
    if (!field) return;
    var c = { btn: btn, field: field, base: field.value.replace(/\s+$/, ''), live: true, done: false, heard: false, err: '' };
    try {
      c.rec = new Rec();
      c.rec.lang = LANG;
      c.rec.continuous = true;
      c.rec.interimResults = true;
      c.rec.maxAlternatives = 1;
    } catch (e) { c.err = 'service-not-allowed'; finish(c); return; }
    c.rec.onresult = function (e) {
      if (!c.live) return;
      if (!document.body.contains(field)) { stop(true); return; }
      var t = heard(e.results);
      if (!t) return;
      c.heard = true;
      field.value = join(c.base, t);
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.scrollTop = field.scrollHeight;
    };
    c.rec.onerror = function (e) { if (c.live && !c.err) c.err = e.error || 'unbekannt'; };
    c.rec.onend = function () { finish(c); };
    cur = c;
    setBtn(btn, true);
    msg(c, 'Hört zu. Sprich englisch, zum Beenden erneut tippen.');
    try { c.rec.start(); } catch (e) { c.err = c.err || 'service-not-allowed'; finish(c); }
  }

  // hard: sofort aufhören und spätere Ergebnisse verwerfen (beim Prüfen, Tippen, Seitenwechsel)
  function stop(hard) {
    var c = cur;
    if (!c) return;
    if (hard) {
      c.live = false;
      try { c.rec.abort(); } catch (e) { /* schon beendet */ }
      finish(c, true);
    } else {
      msg(c, 'Wird beendet …');
      try { c.rec.stop(); } catch (e) { finish(c); }
    }
  }

  function finish(c, quiet) {
    if (c.done) return;
    c.done = true; c.live = false;
    if (cur === c) cur = null;
    if (!document.body.contains(c.btn)) return;
    setBtn(c.btn, false);
    var e = c.err, t = '';
    if (quiet || e === 'aborted') t = '';
    else if (!e) t = c.heard ? 'Diktat beendet. Text kurz prüfen und bei Bedarf korrigieren.' : '';
    else if (e === 'no-speech') t = 'Nichts gehört. Tippe noch einmal auf „Diktieren“ und sprich.';
    else if (e === 'audio-capture') t = 'Kein Mikrofon gefunden.';
    else if (e === 'network') t = 'Die Spracherkennung braucht eine Internetverbindung.';
    else if (e === 'language-not-supported') t = 'Englische Spracherkennung gibt es auf diesem Gerät nicht. ' + KEYBOARD;
    else if (e === 'not-allowed' && !standalone) t = 'Kein Zugriff aufs Mikrofon. Erlaube ihn in den Einstellungen des Browsers für diese Seite. ' + KEYBOARD;
    else {
      blocked = true;
      c.btn.disabled = true;
      t = (standalone ? 'In der App vom Home-Bildschirm lässt dieses Gerät kein Diktieren zu. ' : 'Die Spracherkennung ist hier nicht verfügbar. ') + KEYBOARD;
    }
    msg(c, t);
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-diktat]');
    if (b) {
      e.preventDefault();
      if (cur && cur.btn === b) stop(false);
      else { stop(true); start(b); }
      return;
    }
    // jeder andere Knopf (Prüfen, Tipp, Lösung, Weiter …) beendet das Diktat, bevor er wirkt
    if (cur && e.target.closest && e.target.closest('a,button,select')) stop(true);
  }, true);
  document.addEventListener('input', function (e) {
    if (cur && e.isTrusted && e.target === cur.field) stop(true); // selbst getippt: Diktat aus, Text bleibt
  }, true);
  document.addEventListener('keydown', function (e) {
    if (cur && e.key === 'Enter' && (e.ctrlKey || e.metaKey)) stop(true); // Strg/⌘ + Enter prüft
  }, true);
  window.addEventListener('hashchange', function () { stop(true); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(true); });

  LP._diktat = { heard: heard, join: join }; // für Tests
})();
