"""Building blocks for the content specs. Everything quoted from a publication goes through Q(),
which returns the original wording with its source and page."""
import html
import re

import quote

SHORT = {k: v[1] for k, v in quote.SOURCES.items()}


def esc(s):
    return html.escape(str(s), quote=False)


BULLET = '\uf06c'  # list bullet glyph (Wingdings) in the ATP/FM text layer


def _para_html(p):
    """Paragraph; an in-line bulleted list becomes a list again."""
    head, *items = [x.strip() for x in p.split(BULLET)]
    out = ('<p>' + esc(head) + '</p>') if head else ''
    if items:
        out += '<ul>' + ''.join('<li>' + esc(i) + '</li>' for i in items) + '</ul>'
    return out


class Quote:
    """Verbatim extract: from `start` to `end` (inclusive), or `n` whole paragraphs, or the rest of the paragraph."""

    def __init__(self, key, start, end=None, n=None, after=None, nth=1, maxlen=5000, page_override=None):
        s = quote.src(key)
        if n:
            text, page = s.quote(start, None, after, nth, maxlen)
            i = s.text.find(text)
            j = i
            for _ in range(n):
                k = s.text.find('\n\n', j + 1)
                j = len(s.text) if k < 0 else k
            text = s.text[i:j]
            if len(text) > maxlen:
                raise ValueError(f'{SHORT[key]}: quote too long from {start!r}')
        else:
            text, page = s.quote(start, end, after, nth, maxlen)
        self.key, self.text, self.page = key, text.strip(), page_override or page

    @property
    def ref(self):
        return [self.key, ('p. ' + self.page) if self.page else '']

    def cite(self):
        return SHORT[self.key] + (', p. ' + self.page if self.page else '')

    def paras(self):
        """Paragraphs; a sentence broken across a page or figure is joined again."""
        out = []
        for p in self.text.split('\n\n'):
            if out and not re.search(r'[.:;?!”")]$', out[-1]) and not re.match(
                    r'(\(?[0-9a-z]{1,3}[.)]\s|\d+\.\d+\s|Phase |Figure |Note|Example|WARNING|CAUTION|-\s)', p):
                out[-1] += ' ' + p
            else:
                out.append(p)
        return out

    def html(self, cite=True):
        body = ''.join(_para_html(p) for p in self.paras())
        return '<blockquote class="quote">' + body + ('<cite>' + esc(self.cite()) + '</cite>' if cite else '') + '</blockquote>'

    def inline(self):
        """Quote without block markup (for card answers, explanations)."""
        return '<span class="qt">' + '<br><br>'.join(esc(p).replace(BULLET, '<br>•') for p in self.paras()) + '</span>'


def Q(*a, **k):
    return Quote(*a, **k)


class H:
    def __init__(self, text):
        self.text = text


def _in_table(sent, text):
    """Sentence present with at most a few column-label words interleaved (tables in layout text)."""
    words = sent.split(' ')
    pat = r'\s+(?:\S+\s+){0,4}?'.join(re.escape(w) for w in words)
    return re.search(pat, text) is not None


class KB:
    """Kneeboard card with a figure transcribed word for word. src = [key, 'figure/page']."""

    def __init__(self, title, lines, note='', foot='', src=None, verify=True):
        self.title, self.lines, self.note, self.foot, self.src = title, lines, note, foot, src
        if verify and src:
            # every transcribed sentence must occur word for word in the publication
            text = quote.src(src[0]).search
            norm = lambda t: re.sub(r'\s+', ' ', t).translate(str.maketrans('’‘“”', '\'\'""')).strip()
            parts = [t for l in lines for t in l[1:3] if isinstance(t, str) and t] + ([foot] if foot else [])
            missing = []
            for t in parts:
                for sent in re.split(r'(?<=[.;:?!)])\s+(?=[A-Z(“"])', norm(t)):
                    if sent and sent not in text and not _in_table(sent, text):
                        missing.append(sent)
            if missing:
                raise ValueError('KB %r: not verbatim in %s: %r' % (title, src[0], missing))

    def html(self):
        maxn = max([len(str(l[0])) for l in self.lines] + [0])
        style = ' style="--kbn:%.2frem"' % (maxn * 0.66 + 1.1) if maxn > 3 else ''
        out = ['<div class="kneeboard"%s><div class="kb-head"><span>%s</span>%s</div>' % (
            style, esc(self.title), ('<small>%s</small>' % esc(self.note)) if self.note else '')]
        for l in self.lines:
            n, t = l[0], l[1]
            d = l[2] if len(l) > 2 else ''
            rb = len(l) > 3 and l[3]
            out.append('<div class="kb-line%s"><div class="kb-n">%s</div><div class="kb-b"><div class="kb-t">%s</div>%s</div></div>' % (
                ' rb' if rb else '', esc(n), esc(t), ('<div class="kb-d">%s</div>' % esc(d)) if d else ''))
        if self.foot:
            out.append('<div class="kb-foot">%s</div>' % esc(self.foot))
        out.append('</div>')
        return ''.join(out)

    def data(self):
        return {'title': self.title, 'note': self.note, 'foot': self.foot,
                'lines': [{'n': str(l[0]), 't': esc(l[1]), 'd': esc(l[2]) if len(l) > 2 and l[2] else '', 'rb': bool(len(l) > 3 and l[3])} for l in self.lines],
                'src': [self.src] if self.src else []}


class TABLE:
    """Table copied cell for cell from a publication. src = [key, 'table/page']."""

    def __init__(self, title, head, rows, foot='', src=None):
        self.title, self.head, self.rows, self.foot, self.src = title, head, rows, foot, src
        if src:
            text = quote.src(src[0]).search
            missing = [c for r in rows for c in r if c and str(c) not in text]
            if missing:
                raise ValueError('TABLE %r: not in %s: %r' % (title, src[0], missing))

    def html(self):
        cite = (SHORT[self.src[0]] + ', ' + self.src[1]) if self.src else ''
        out = ['<figure class="doc-table"><figcaption>%s</figcaption><div class="table-wrap"><table class="data"><thead><tr>' % esc(self.title)]
        out += ['<th>%s</th>' % esc(h) for h in self.head]
        out.append('</tr></thead><tbody>')
        for r in self.rows:
            out.append('<tr>' + ''.join('<td class="mono">%s</td>' % esc(c) for c in r) + '</tr>')
        out.append('</tbody></table></div>')
        if self.foot:
            out.append('<p class="table-foot">%s</p>' % esc(self.foot))
        if cite:
            out.append('<cite>%s</cite>' % esc(cite))
        out.append('</figure>')
        return ''.join(out)


RADIO_LABELS = {'JTAC': 'JTAC', 'AIR': 'Attack aircraft', 'AIR2': 'Dash 2', 'OBS': 'Observer', 'FAC': 'FAC(A)',
                'JFO': 'JFO', 'LAS': 'Lasing platform', 'FDC': 'FDC', 'FO': 'Observer'}
JTAC_SIDE = ('JTAC', 'FAC', 'JFO', 'FO', 'OBS')


class RADIO:
    """Radio transcript copied from a publication. lines: [(who, text)], who='note' for a narrative line."""

    def __init__(self, lines, src=None):
        self.lines, self.src = lines, src

    def html(self):
        out = ['<div class="radio">']
        for who, text in self.lines:
            if who == 'note':
                out.append('<div class="tx note"><span class="who">–</span><div class="msg">%s</div></div>' % esc(text))
            else:
                out.append('<div class="tx%s"><span class="who">%s</span><div class="msg">%s</div></div>' % (
                    ' jtac' if who in JTAC_SIDE else '', esc(RADIO_LABELS.get(who, who)), esc(text)))
        out.append('</div>')
        return ''.join(out)


class NOTE:
    """Highlighted quote, e.g. a NATO note. kind: nato, warn, crit, tip."""

    def __init__(self, kind, title, q):
        self.kind, self.title, self.q = kind, title, q


class TASKS:
    """Own-words box (not doctrine): cross-check tasks for the print publications."""

    def __init__(self, kind, title, items):
        self.kind, self.title, self.items = kind, title, items


def render(items):
    """HTML and source refs for a list of items."""
    out, refs = [], []

    def addref(r):
        if r and r not in refs:
            refs.append(r)

    for it in items:
        if isinstance(it, Quote):
            out.append(it.html())
            addref(it.ref)
        elif isinstance(it, H):
            out.append('<h3>%s</h3>' % esc(it.text))
        elif isinstance(it, KB):
            out.append(it.html())
            addref(it.src)
        elif isinstance(it, (RADIO, TABLE)):
            out.append(it.html())
            addref(it.src)
        elif isinstance(it, NOTE):
            out.append('<div class="callout %s"><div class="ct">%s</div><div>%s</div></div>' % (it.kind, esc(it.title), it.q.html()))
            addref(it.q.ref)
        elif isinstance(it, str):
            out.append(it)
        else:
            raise TypeError(it)
    return ''.join(out), refs
