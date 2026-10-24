"""Reads the CAS mission examples of JP 3-09.3 Appendix E word for word: radio calls and the narrative between them."""
import re

import quote

SPEAKERS = [
    ('JTAC (listening to frequency)', 'JTAC (listening to frequency)'),
    ('Attack Aircraft Dash 2', 'AIR2'), ('Attack Aircraft dash 2', 'AIR2'),
    ('FW Attack Aircraft', 'FW Attack Aircraft'), ('Attack Aircraft', 'AIR'),
    ('RW FAC(A)', 'RW FAC(A)'), ('FW FAC(A)', 'FW FAC(A)'), ('JTAC', 'JTAC'), ('Observer', 'OBS'), ('Air Officer', 'AO'),
]
OPEN, CLOSE = '“"', '”"'


def _strip(t):
    """Text of a radio call without the outer quotation marks."""
    t = t.strip()
    if t[:1] in OPEN:
        t = t[1:]
    if t[-1:] in CLOSE:
        t = t[:-1]
    return t.strip()


def _closed(t):
    return t.rstrip()[-1:] in CLOSE


def examples():
    s = quote.src('jp3093')
    paras = [(t, pg) for t, pg in s.paras if pg.startswith('E-')]
    out, cur, open_who = [], None, None
    for t, pg in paras:
        m = re.match(r'^EXAMPLE (\d+)\s*[–-]\s*(.*)$', t)
        if m:
            cur = {'nr': int(m.group(1)), 'heading': t, 'page': pg, 'intro': [], 'lines': []}
            out.append(cur)
            open_who = None
            continue
        if cur is None or t in ('Intentionally Blank',):
            continue
        cur['last'] = pg
        if open_who:                                   # the previous call is still open (multi-line brief)
            cur['lines'].append([open_who, _strip(t)])
            open_who = None if _closed(t) else open_who
            continue
        for label, who in SPEAKERS:
            m = re.match(r'^(?:%s:\s*)+(\([^)]*\)\s*)?([“"].*)$' % re.escape(label), t)
            if m:
                text = (m.group(1) or '') + _strip(m.group(2))
                cur['lines'].append([who, text])
                open_who = None if _closed(m.group(2)) else who
                break
        else:
            if t[:1] in OPEN and cur['lines']:
                prev = [l for l in cur['lines'] if l[0] != 'note'][-1][0]
                cur['lines'].append([prev, _strip(t)])
                open_who = None if _closed(t) else prev
            elif not cur['lines']:
                cur['intro'].append(t)
            else:
                cur['lines'].append(['note', t])
    return out


if __name__ == '__main__':
    for e in examples():
        print(e['nr'], e['page'], '-', e.get('last'), len(e['lines']), '|', e['heading'][:90])
        for l in e['lines']:
            if l[0] == 'note':
                print('    NOTE', l[1][:150])
