"""Verbatim quotes from the source publications.

Reads the text versions of the public publications (pdftotext -layout output in tools/src/),
removes page headers and footers, joins lines into paragraphs and records the page of every
paragraph. q() returns the exact original wording between a start and an end phrase, so the
learning content never paraphrases the publications.
"""
import html
import os
import re

SRC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src')

SOURCES = {
    'jp3093': ('jp3-09-3_2014.txt', 'JP 3-09.3'),
    'jp309': ('jp3-09_2014.txt', 'JP 3-09'),
    'jp352': ('jp3-52_2014.txt', 'JP 3-52'),
    'ajp33': ('ajp3-3_edC.txt', 'AJP-3.3'),
    'atp30930': ('atp3-09-30_2017.txt', 'ATP 3-09.30'),
    'atp1021': ('atp1-02-1_2025.txt', 'ATP 1-02.1'),
    'fm309': ('fm3-09_2024.txt', 'FM 3-09'),
    'atp3522': ('atp3-52-2_2024.txt', 'ATP 3-52.2'),
}

# Where the main text begins (skips executive summaries that repeat the main text)
HEADER_TOP = {'atp1021'}  # page id printed at the top of the page, not at the bottom

BODY_START = {
    'jp3093': '1. Introduction a. Close air support (CAS) is a critical element',
    'ajp33': '1. Allied Joint Publication (AJP)-3.3, Allied Joint Doctrine for Air and Space Operations sits under',
}

PAGE_ID = r'(?:[IVX]+-\d+|[A-Z]{1,2}-\d+|\d+-\d+|\d+)'
DATE = r'\d{1,2} [A-Z][a-z]+ \d{4}'


def _footer_page(line, short):
    """Page id if the line is a page footer, else None."""
    s = line.strip()
    if not s:
        return None
    doc = re.escape(short)
    pats = [
        rf'^({PAGE_ID})\s+{doc}$',                     # III-42   JP 3-09.3
        rf'^{doc}\s+({PAGE_ID})$',
        rf'^{DATE}\s+{doc}\s+({PAGE_ID})$',             # 28 September 2017  ATP 3-09.30  3-3
        rf'^({PAGE_ID})\s+{doc}\s+{DATE}$',
        r'^(\S+)\s+Edition C Version 1(?:\s+.*)?$',   # AJP-3.3 (also annex pages)
        rf'^\d{{1,2}} [A-Z]+ \d{{4}}\s+{doc}/.+?\s+({PAGE_ID}|[ivx]+)$',   # 25 APRIL 2025  ATP 1-02.1/MCRP …  3
        rf'^({PAGE_ID}|[ivx]+)\s+{doc}/.+?\s+\d{{1,2}} [A-Z]+ \d{{4}}$',
    ]
    for p in pats:
        m = re.match(p, s)
        if m:
            return m.group(1)
    # right-aligned page number alone (odd pages)
    if re.match(rf'^\s{{30,}}({PAGE_ID})\s*$', line) and not re.match(r'^\s*\d+\s*$', line):
        return s
    return None


def _is_running_head(line, short):
    s = line.strip()
    if not s:
        return False
    if s in (short, 'AJP-3.3', 'Edition C Version 1'):
        return True
    if re.match(r'^(Chapter|CHAPTER|Appendix|APPENDIX) [IVX\dA-Z]+$', s):
        return True
    # right-aligned running head (chapter title on odd pages)
    return len(line) - len(line.lstrip()) >= 25 and len(s) < 70


class Source:
    def __init__(self, key):
        fname, short = SOURCES[key]
        self.key, self.short = key, short
        with open(os.path.join(SRC_DIR, fname), encoding='utf-8') as f:
            raw = f.read().split('\n')
        # 1) assign pages: footer comes at the end of each page (or a header at the top)
        pages, cur, top = [], [], ''
        for line in raw:
            pg = _footer_page(line, short)
            if pg is not None:
                pages.append((top if key in HEADER_TOP else pg, cur))
                cur, top = [], pg
            else:
                cur.append(line)
        pages.append((top if key in HEADER_TOP else '', cur))
        # 2) drop running heads at the top of each page, build paragraphs with page ids
        paras = []  # [text, page]
        for pg, lines in pages:
            i = 0
            while i < len(lines) and (not lines[i].strip() or _is_running_head(lines[i], short)) and i < 4:
                i += 1
            block = []
            for line in lines[i:] + ['']:
                if line.strip():
                    block.append(line.strip())
                    continue
                if block:
                    text = block[0]
                    for nxt in block[1:]:
                        if text.endswith('-') and re.match(r'[A-Za-z]', text[-2:-1] or ''):
                            text += nxt
                        else:
                            text += ' ' + nxt
                    paras.append([re.sub(r'\s{2,}', ' ', text), pg])
                    block = []
        # 3) merge paragraphs split by page breaks
        merged = []
        for t, pg in paras:
            if merged and not re.search(r'[.:;?!”"’)]$', merged[-1][0]) and re.match(r'^[a-z(]', t):
                merged[-1][0] += ' ' + t
            else:
                merged.append([t, pg])
        self.paras = merged
        self.text = '\n\n'.join(p[0] for p in merged)
        self.search = self.text.translate(str.maketrans('’‘“”', '\'\'""'))
        self.body = 0
        if key in BODY_START:
            self.body = self.search.find(BODY_START[key])
        self.starts = []
        pos = 0
        for p in merged:
            self.starts.append(pos)
            pos += len(p[0]) + 2

    def page_at(self, idx):
        page = ''
        for start, p in zip(self.starts, self.paras):
            if start > idx:
                break
            page = p[1]
        return page

    def find(self, phrase, after=0):
        ph = re.sub(r'\s+', ' ', phrase).translate(str.maketrans('’‘“”', '\'\'""'))
        i = self.search.find(ph, after)
        if i < 0:
            raise ValueError(f'{self.short}: phrase not found: {phrase!r}')
        j = self.search.find(ph, i + 1)
        return i, len(ph), j >= 0

    def quote(self, start, end=None, after=None, nth=1, maxlen=5000):
        """Exact text from `start` up to and including `end` (or the end of the paragraph).
        `after` or `nth` pick one of several occurrences of `start`."""
        a0 = self.find(after, self.body)[0] if after else self.body
        i, n, amb = self.find(start, a0)
        for _ in range(nth - 1):
            i, n, amb = self.find(start, i + 1)
        if amb and not after and nth == 1:
            raise ValueError(f'{self.short}: ambiguous start phrase: {start!r}')
        if end is None:
            k = self.text.find('\n\n', i)
            j = len(self.text) if k < 0 else k
        else:
            e, en, _ = self.find(end, i)
            j = e + en
        if j - i > maxlen:
            raise ValueError(f'{self.short}: quote too long ({j - i}) from {start!r}')
        return self.text[i:j], self.page_at(i)


_cache = {}


def src(key):
    if key not in _cache:
        _cache[key] = Source(key)
    return _cache[key]


def q_text(key, start, end=None, after=None, nth=1, maxlen=5000):
    return src(key).quote(start, end, after, nth, maxlen)


def paras_html(text):
    return ''.join('<p>' + html.escape(p, quote=False) + '</p>' for p in text.split('\n\n'))
