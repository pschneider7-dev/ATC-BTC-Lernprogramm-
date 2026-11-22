/* Taschenrechner unter den Rechenaufgaben (Rechentrainer, 9-Line-Trainer).
   LP.calcHtml(target) liefert das Feld; target ist die ID des Antwortfelds (oder 'nl' für das zuletzt benutzte Feld im 9-Line-Trainer).
   Rechnet ohne eval: + − × ÷, Klammern, Potenz, √, x², Prozent wie am Taschenrechner (300 + 10 % = 330), Ans = letztes Ergebnis.
   Dezimalkomma oder -punkt. Der Zustand bleibt beim Neuaufbau der Seite erhalten. */
(function () {
  'use strict';
  var LP = window.LP;
  var st = { expr: '', ans: null, last: null, lastField: null };
  var KEY = 'jtac-lp-calc-open';
  function isOpen() { try { return localStorage.getItem(KEY) !== '0'; } catch (e) { return true; } }
  function setOpen(v) { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} }

  /* ---------- Rechnen ---------- */
  function tokenize(s) {
    var out = [], i = 0, m;
    s = s.replace(/\s+/g, '').replace(/\*/g, '×').replace(/\//g, '÷').replace(/[−–]/g, '-').replace(/sqrt/gi, '√');
    while (i < s.length) {
      var r = s.slice(i);
      if ((m = r.match(/^(\d+[.,]?\d*|[.,]\d+)/))) { out.push({ t: 'n', v: parseFloat(m[1].replace(',', '.')) }); i += m[1].length; continue; }
      if ((m = r.match(/^ans/i))) { out.push({ t: 'ans' }); i += 3; continue; }
      if ('+-×÷^()%√²'.indexOf(r[0]) >= 0) { out.push({ t: r[0] }); i++; continue; }
      throw new Error('Zeichen „' + r[0] + '“');
    }
    return out;
  }
  function evaluate(src) {
    var tk = tokenize(src), p = 0;
    function peek() { return tk[p] && tk[p].t; }
    function primary() {
      var t = tk[p++];
      if (!t) throw new Error('unvollständig');
      if (t.t === 'n') return t.v;
      if (t.t === 'ans') { if (st.ans === null) throw new Error('noch kein Ergebnis'); return st.ans; }
      if (t.t === '(') { var v = expr().v; if (peek() === ')') p++; return v; }
      throw new Error('unerwartet „' + t.t + '“');
    }
    function postfix() {
      var v = primary(), pct = false;
      for (;;) {
        if (peek() === '²') { p++; v = v * v; }
        else if (peek() === '%') { p++; v = v / 100; pct = true; }
        else break;
      }
      return { v: v, pct: pct };
    }
    function unary() {
      if (peek() === '-') { p++; var a = unary(); return { v: -a.v, pct: a.pct }; }
      if (peek() === '+') { p++; return unary(); }
      if (peek() === '√') { p++; var b = unary(); if (b.v < 0) throw new Error('Wurzel aus negativer Zahl'); return { v: Math.sqrt(b.v), pct: false }; }
      var base = postfix();
      if (peek() === '^') { p++; var e = unary(); return { v: Math.pow(base.v, e.v), pct: false }; }
      return base;
    }
    function term() {
      var a = unary();
      while (peek() === '×' || peek() === '÷' || peek() === '(' || peek() === 'n' || peek() === '√' || peek() === 'ans') {
        var op = peek();
        if (op === '×' || op === '÷') p++; else op = '×'; // 2(3+4) = 2 × 7
        var b = unary();
        if (op === '÷' && b.v === 0) throw new Error('Division durch 0');
        a = { v: op === '×' ? a.v * b.v : a.v / b.v, pct: false };
      }
      return a;
    }
    function expr() {
      var a = term();
      while (peek() === '+' || peek() === '-') {
        var op = tk[p++].t, b = term();
        // Prozent wie am Taschenrechner: 300 + 10 % = 330, 300 − 10 % = 270
        var bv = b.pct ? a.v * b.v : b.v;
        a = { v: op === '+' ? a.v + bv : a.v - bv, pct: false };
      }
      return a;
    }
    if (!tk.length) throw new Error('leer');
    var r = expr();
    if (p < tk.length) throw new Error('unerwartet „' + tk[p].t + '“');
    if (!isFinite(r.v)) throw new Error('kein Ergebnis');
    return r.v;
  }
  function fmt(v) {
    if (v === null || v === undefined) return '';
    var r = Math.round(v * 1e8) / 1e8;
    return r.toLocaleString('de-DE', { maximumFractionDigits: 8, useGrouping: false });
  }
  function preview() {
    if (!st.expr.trim()) return { txt: st.last !== null ? '= ' + fmt(st.last) : '', ok: true };
    try { return { txt: '= ' + fmt(evaluate(st.expr)), ok: true }; } catch (e) { return { txt: '', ok: false, err: e.message }; }
  }

  /* ---------- Anzeige ---------- */
  var KEYS = [
    ['C', 'clear', 'fn'], ['⌫', 'back', 'fn'], ['(', '(', 'op'], [')', ')', 'op'], ['÷', '÷', 'op'],
    ['7', '7'], ['8', '8'], ['9', '9'], ['√', '√', 'op'], ['×', '×', 'op'],
    ['4', '4'], ['5', '5'], ['6', '6'], ['x²', '²', 'op'], ['−', '-', 'op'],
    ['1', '1'], ['2', '2'], ['3', '3'], ['%', '%', 'op'], ['+', '+', 'op'],
    ['±', 'neg', 'fn'], ['0', '0'], [',', ','], ['Ans', 'Ans', 'fn'], ['=', 'eq', 'eq']
  ];
  LP.calcHtml = function (target) {
    var open = isOpen(), pv = preview();
    var h = '<section class="calc" data-calc-target="' + (target || '') + '" aria-label="Taschenrechner">' +
      '<div class="calc-head"><span class="calc-title">Taschenrechner</span><button type="button" class="btn ghost small" data-calc="toggle" aria-expanded="' + open + '">' + (open ? 'Ausblenden' : 'Einblenden') + '</button></div>';
    if (open) {
      h += '<div class="calc-display"><input type="text" class="calc-expr" id="calc-expr" inputmode="none" autocomplete="off" spellcheck="false" aria-label="Rechnung" placeholder="Rechnung eingeben" value="' + String(st.expr).replace(/"/g, '&quot;') + '">' +
        '<output class="calc-res' + (pv.ok ? '' : ' err') + '" id="calc-res" aria-live="polite">' + pv.txt + '</output></div>' +
        '<div class="calc-keys">' + KEYS.map(function (k) {
          return '<button type="button" class="calc-key ' + (k[2] || 'num') + '" data-calc="' + k[1] + '">' + k[0] + '</button>';
        }).join('') + '</div>' +
        (target ? '<button type="button" class="btn small calc-use" data-calc="use">Ergebnis ins Antwortfeld</button>' : '');
    }
    return h + '</section>';
  };
  function refresh(box) {
    var inp = box.querySelector('#calc-expr'), out = box.querySelector('#calc-res');
    if (!inp) return;
    if (inp.value !== st.expr) inp.value = st.expr;
    var pv = preview();
    out.textContent = pv.txt; out.classList.toggle('err', !pv.ok);
  }
  function insert(box, s) {
    var inp = box.querySelector('#calc-expr');
    var a = inp && document.activeElement === inp ? inp.selectionStart : st.expr.length;
    var b = inp && document.activeElement === inp ? inp.selectionEnd : st.expr.length;
    if (st.last !== null && !st.expr) {
      // nach „=“: mit Rechenzeichen weiterrechnen, mit Ziffer neu beginnen
      if ('+-×÷^%²'.indexOf(s) >= 0) { st.expr = 'Ans'; a = b = 3; }
    }
    st.expr = st.expr.slice(0, a) + s + st.expr.slice(b);
    refresh(box);
    if (inp && document.activeElement === inp) inp.setSelectionRange(a + s.length, a + s.length);
  }
  function equals(box) {
    if (!st.expr.trim()) return;
    try {
      var v = evaluate(st.expr);
      st.ans = v; st.last = v; st.expr = '';
      refresh(box);
    } catch (e) {
      var out = box.querySelector('#calc-res');
      out.textContent = 'Fehler: ' + e.message; out.classList.add('err');
    }
  }
  function targetField(box) {
    var t = box.getAttribute('data-calc-target');
    if (t === 'nl') return st.lastField && document.body.contains(st.lastField) ? st.lastField : document.querySelector('[data-nl]:not([readonly])');
    return t ? document.getElementById(t) : null;
  }
  function useResult(box) {
    var v = null;
    if (st.expr.trim()) { try { v = evaluate(st.expr); st.ans = v; st.last = v; st.expr = ''; } catch (e) { v = null; } }
    else v = st.last;
    if (v === null) { if (LP.toast) LP.toast('Noch kein Ergebnis'); return; }
    var f = targetField(box);
    if (!f || f.readOnly) { if (LP.toast) LP.toast('Kein Antwortfeld frei'); return; }
    // höchstens 2 Nachkommastellen: „5899,238“ würde sonst als Tausenderpunkt (5 899 238) gelesen
    f.value = (Math.round(v * 100) / 100).toLocaleString('de-DE', { maximumFractionDigits: 2, useGrouping: false });
    f.dispatchEvent(new Event('input', { bubbles: true }));
    refresh(box);
    f.focus();
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-calc]');
    if (!b) return;
    var box = b.closest('.calc');
    if (!box) return;
    e.preventDefault(); e.stopPropagation();
    var k = b.getAttribute('data-calc');
    if (k === 'toggle') { setOpen(!isOpen()); var t = box.getAttribute('data-calc-target'); box.outerHTML = LP.calcHtml(t); return; }
    if (k === 'clear') { st.expr = ''; st.last = null; refresh(box); return; }
    if (k === 'back') { st.expr = st.expr.slice(0, -1); refresh(box); return; }
    if (k === 'eq') { equals(box); return; }
    if (k === 'use') { useResult(box); return; }
    if (k === 'neg') {
      if (!st.expr && st.last !== null) { st.expr = '-(Ans)'; }
      else st.expr = /^-\(.*\)$/.test(st.expr) ? st.expr.slice(2, -1) : (st.expr ? '-(' + st.expr + ')' : '-');
      refresh(box); return;
    }
    if (k === 'Ans') { insert(box, 'Ans'); return; }
    if (st.last !== null && !st.expr && /^[\d,(√]$/.test(k)) st.last = null; // neue Rechnung
    insert(box, k);
  }, true);
  document.addEventListener('input', function (e) {
    if (e.target.id === 'calc-expr') { st.expr = e.target.value; var box = e.target.closest('.calc'); if (box) refresh(box); e.stopPropagation(); }
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.target.id === 'calc-expr' && e.key === 'Enter') { e.preventDefault(); equals(e.target.closest('.calc')); }
  });
  document.addEventListener('focusin', function (e) {
    if (e.target.matches && e.target.matches('[data-nl]')) st.lastField = e.target;
  });
  LP._calc = { evaluate: evaluate, fmt: fmt, state: st }; // für Tests
})();
