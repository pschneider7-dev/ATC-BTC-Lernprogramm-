"""Reads Table 2 (Multi-Service Brevity Codes) of ATP 1-02.1 from the layout text: term, definition, page.

The table has two columns: the term on the left, the definition on the right. A row continues until the
next line that starts a new term (an upper-case word in the left column outside of brackets)."""
import os
import re

import quote

FOOTER = re.compile(r'^(?:\d{1,2} [A-Z]+ \d{4}\s+ATP 1-02\.1/.+?\s+(\d+)|(\d+)\s+ATP 1-02\.1/.+?\d{1,2} [A-Z]+ \d{4})\s*$')
DEF_START = re.compile(r'(?:\*{1,2} |\[(?:A/A|A/S|S/A|EW|AIR-MAR|MAR|SO|S/S|SPACE|CYBER|MAR/S)\]|\d\. )')


def _split(line):
    """Term and definition of a row whose term runs into the definition column (single space between)."""
    for m in re.finditer(r' (?=\S)', line):
        p = m.end()
        rest = line[p:]
        if DEF_START.match(rest) or (line[p - 2] == ']' and re.match(r'[A-Z][a-z]', rest)):
            return line[:p].strip(), rest.strip()
    return line.strip(), ''


def _new_term(left):
    return bool(re.search(r'[A-Z]{2,}', re.sub(r'\[[^\]]*\]?', '', left)))


def parse():
    path = os.path.join(quote.SRC_DIR, quote.SOURCES['atp1021'][0])
    text = open(path, encoding='utf-8').read()
    start = text.index('Table 2. Multi-Service Brevity Codes\n')
    end = text.index('Chapter II\n', start)
    rows, cur = [], None
    for page in text[start:end].split('\x0c'):
        lines = page.split('\n')
        pg = ''
        for l in lines:
            m = FOOTER.match(l.strip())
            if m:
                pg = m.group(1) or m.group(2)
        for l in lines:
            s = l.strip()
            if not s or FOOTER.match(s) or s.startswith('Table 2. Multi-Service Brevity Codes') or s == 'This page intentionally left blank.':
                continue
            if l.startswith(' ' * 10):          # definition continues
                left, right = '', s
            else:                               # term column (new row or continued term)
                m = re.search(r'\S\s{2,}(?=\S)', l)
                left, right = (l[:m.start() + 1].strip(), l[m.end():].strip()) if m else _split(l.rstrip())
            if left and _new_term(left):
                cur = {'term': left, 'lines': [right] if right else [], 'page': pg}
                rows.append(cur)
            elif cur:
                if left:
                    cur['term'] += ' ' + left
                if right:
                    cur['lines'].append(right)
    for r in rows:
        d = ''
        for ln in r['lines']:
            if d.endswith('-') and re.match(r'[A-Za-z]', d[-2:-1] or ''):
                d += ln
            elif d and re.match(r'\d+\. ', ln):
                d += '\n' + ln
            else:
                d += (' ' if d else '') + ln
        r['def'] = d
        del r['lines']
    return rows


def key(term):
    """Brevity word without parameters in brackets, e.g. '[target or object] CAPTURED' -> 'CAPTURED'."""
    return re.sub(r'\s+', ' ', re.sub(r'\[[^\]]*\]', '', term)).strip(' ,')


if __name__ == '__main__':
    rows = parse()
    src = quote.src('atp1021').search
    norm = lambda t: re.sub(r'\s+', ' ', t).translate(str.maketrans('’‘“”', '\'\'""'))
    bad = [r for r in rows if norm(r['def']) not in norm(src)]
    print(len(rows), 'rows,', len(bad), 'not found verbatim')
    for r in bad[:20]:
        print(' ', r['page'], r['term'], '|', r['def'][:120])
