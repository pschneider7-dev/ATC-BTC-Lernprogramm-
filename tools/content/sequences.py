"""Sequence drill: put the elements of a format or procedure in order. Every element is word for word from the
publication (checked against the source text); title and intro are ours, the note quotes the publication."""
import quote
from lib import Q, S, assign_js
import m05, m06, m11, m12, m13, spick

SEQ = [
    ('template', 'CAS Execution Template (12 Schritte)', 'Vom Erstkontakt bis zum Abflug.',
     [l[1] for l in m05.TEMPLATE.lines], S('jp3093', 'b. CAS Execution Template. By its very nature, the execution of CAS differs', 2), 'jp3093'),
    ('checkin', 'Check-in Briefing', 'Die Reihenfolge, in der das Luftfahrzeug eincheckt.',
     [l[1].split(':')[0] for l in m05.CHECK_IN.lines], S('jp3093', '(2) CAS Aircraft Check-In. Aircraft check-in procedures are essential', 1), 'jp3093'),
    ('nineline', 'CAS Brief (9-Line)', 'Die neun Lines in der richtigen Reihenfolge.',
     [l[1] for l in m06.NINE_LINE.lines if l[0] in '123456789' and l[0]], S('jp3093', '(7) Readbacks (a) Required readbacks of lines 4, 6, and restrictions.', 1), 'jp3093'),
    ('remarks', 'Reihenfolge der Remarks', 'Die empfohlene Reihenfolge der Remarks im CAS Brief.',
     ['LTL shall be passed if using ground-based laser designators (in degrees magnetic).',
      'Desired type/number of ordnance and/or weapons effects can be passed here when not passed in the game plan prior to the CAS brief.',
      'Surface-to-air threat.', 'Additional fires.', 'Additional radio calls as requested.', 'Additional remarks.'],
     S('jp3093', '(6) Remarks/Restrictions (a) Remarks.', 2), 'jp3093'),
    ('gameplan', 'Game Plan entwickeln', 'Die Schritte, mit denen der JTAC den Game Plan vom Ziel her aufbaut.',
     ['Determine Desired Effects.', 'Select Type of TAC.', 'Select Method of Attack (BOT or BOC).', 'Plan Aircraft Interval.', 'Develop Sensor Plan.'],
     Q('jp3093', 'Developing the game plan in the following order provides a logical flow working backwards from the target:', 'working backwards from the target:'), 'jp3093'),
    ('brief-dev', 'JTAC Actions for Developing a CAS Brief', 'Die Handlungen des JTAC, bevor er den CAS Brief übermittelt.',
     ['Develop Targeting Data.', 'Request Air Support', 'Develop Game Plan.', 'Determine/Coordinate Mark/Aid to Correlation', 'Develop Attack Geometry.', 'Determine SEAD Requirements/SEAD Plan'],
     S('jp3093', 'a. JTAC Actions for Developing a CAS Brief.', 2), 'jp3093'),
    ('type1', 'Type 1 Control Procedures', 'Die Schritte von Type 1 in der Reihenfolge der Vorschrift.',
     ['The JTAC/FAC(A) visually acquires the target.',
      'The JTAC/FAC(A) passes the game plan and CAS brief to the attacking aircrew.',
      'The attack aircrew validates target location by cross-checking that the position is coincident with the expected target area, using all appropriate means.',
      'The aircrew will read back Line 4, Line 6, and any restrictions provided by the JTAC/FAC(A).',
      'The JTAC/FAC(A) will conduct correlation as required.',
      'Aircrew will provide an “IP INBOUND” call if requested.',
      'Attack aircrew will provide “IN” call, indicating entering terminal phase of air-to-ground attack prior to weapons release.',
      'The JTAC/FAC(A) will visually acquire the attacking aircraft.',
      'The JTAC/FAC(A) will analyze attacking aircraft geometry to ensure mission success and reduce the risk of the attack affecting friendly forces and/or collateral concerns.',
      'The JTAC/FAC(A) will provide a “CLEARED HOT,” “CONTINUE DRY,” or “ABORT,” based on the above procedures being met.'],
     S('jp3093', '(1) Type 1 Control. Type 1 control is used when', 1), 'jp3093'),
    ('type3', 'Type 3 Control Procedures', 'Die Schritte von Type 3 in der Reihenfolge der Vorschrift.',
     ['The JTAC/FAC(A) visually acquires the target or acquires targeting data from another asset with accurate real-time targeting information.',
      'The JTAC/FAC(A) passes the game plan and CAS brief to the attacking aircrew.',
      'The attacking aircrew validates target location by cross-checking that the position is coincident with the expected target area, using all appropriate means.',
      'The aircrew will read Line 4, Line 6, and any restrictions provided by the JTAC/FAC(A).',
      'The JTAC/FAC(A) will conduct correlation as required.',
      'Once satisfied the attacking aircraft are correlated on the appropriate target(s), the JTAC/FAC(A) will provide attacking aircraft “CLEARED TO ENGAGE” or “Type 3, CONTINUE DRY.”',
      'Prior to initial weapons release, the attack aircrew will report “COMMENCING ENGAGEMENT” to the JTAC/FAC(A).',
      'JTAC/FAC(A) will continue to monitor the engagement by all means available (visual, voice, digital, etc.).',
      'The attack aircrew will report “ENGAGEMENT COMPLETE” to the JTAC/FAC(A).'],
     S('jp3093', '(3) Type 3 Control. Type 3 control is used when', 1), 'jp3093'),
    ('laser', 'Laser Hand-Off', 'Die Funksprüche eines Laser-Handoffs in der Reihenfolge von JP 3-09.3.',
     ['“Latch 65 proceed inbound heading 230 to 260, stare 1688 Papa Uniform 123 456”',
      '“TEN SECONDS…Broadsword 11, LASER ON.”', '“LASING, 1688.”', '“Broadsword 11, LASING, 1688.”',
      '“Aircraft call sign, SPOT, CEASE LASER.”', '“Latch 65, what do you have under your crosshairs?”', '“Latch 65 CAPTURED.”'],
     Q('jp3093', 'Note: The terms “spot” and “capture” are not synonymous.', 'Correlation is still required to confirm the correct designation.'), 'jp3093'),
    ('fido', 'Talk-On (FIDO)', 'Das Format für Talk-on-Beschreibungen.',
     [l[1] for l in spick.FIDO.lines], S('jp3093', 'o. A two-to-one ratio should be used when conducting talk-ons.', 2), 'jp3093'),
    ('rw5', 'RW CAS 5-Line', 'Die fünf Elemente des Hubschrauber-CAS-Briefs.',
     [l[1] for l in m12.RW_5LINE.lines if l[0] in '12345' and l[0]], S('jp3093', '5-line briefs is that the RW CAS 5-line is still considered a CAS brief', 1), 'jp3093'),
    ('jfo', 'JFO Target Brief', 'Die Zeilen des JFO Target Brief.',
     [l[1] for l in m11.JFO_BRIEF.lines if l[0].startswith('Line')] + ['"Advise ready for remarks"'],
     S('jp3093', '1. If any lines between 4 and 8 are omitted from the brief', 2), 'jp3093'),
    ('cff', 'Call for Fire (6 Elemente)', 'Die sechs Elemente des Call for Fire.',
     ['observer identification', 'warning order', 'target location', 'target description', 'method of engagement', 'method of fire and control'],
     S('atp30930', '4-8. The six elements of a call for fire include:', 2), 'atp30930'),
    ('saltr', 'BDA (SALTR)', 'Die Elemente der BDA-Meldung.',
     [l[1] for l in spick.SALTR.lines], S('jp3093', '(c) JTACs must ensure that BDA is accurate', 1), 'jp3093'),
    ('inflt', 'Inflight Report (INFLTREP)', 'Die Zeilen des Inflight Report.',
     [l[1] for l in m13.INFLTREP.lines if l[0]], S('jp3093', '(f) Aircrew Responsibilities. Use the abbreviated USMTF INFLTREP', 1), 'jp3093'),
]


def build():
    out = []
    for sid, title, intro, items, note, key in SEQ:
        text = quote.src(key).search
        for it in items:
            if it.replace('’', "'").replace('“', '"').replace('”', '"') not in text:
                raise ValueError('sequence %s: %r not in %s' % (sid, it, key))
        out.append({'id': sid, 'title': title, 'intro': intro, 'items': items, 'note': note.inline(), 'src': [note.ref]})
    return assign_js('drills.sequences', out)
