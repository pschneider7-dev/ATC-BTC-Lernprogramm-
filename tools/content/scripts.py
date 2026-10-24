"""Radio examples: the CAS mission examples of JP 3-09.3 Appendix E, read word for word (tools/appendix_e.py),
plus the RW CAS 5-line example. Titles, tags and questions are ours; answer options are in the English wording
of the radio calls or of the publication, the explanation quotes the publication."""
import appendix_e
from lib import Q, S, esc, push_js

META = {
    1: ('Beispiel 1 – Type 1, BOT mit Markierung und SEAD', ['Type 1', 'BOT', 'WP mark', 'SEAD', 'F/A-18'], [
        ('Welche Angaben der Remarks sind Restrictions und damit Readback-Pflicht?',
         ['Final attack heading 285-330, stay above 3000, TOT 50', 'SA-8 north 1000 meters, continuous suppression', 'gun-target line 040', 'Egress left pull, back to Mazda'],
         S('jp3093', '(b) If issued, FAHs, ACAs, danger close, and TOTs shall always be considered restrictions', 1)),
        ('Wann gibt der JTAC bei Type 1 „CLEARED HOT“?',
         ['after he visually acquires the attack aircraft and assesses attack geometry', 'as soon as the readback is correct', 'after the IP inbound call', 'as soon as the mark is on deck'],
         S('jp3093', '(1) Type 1 Control. Type 1 control is used when', 1)),
        ('Was bedeutet „Mazda, 270 Left, 12.1“?',
         ['IP Mazda, heading 270 degrees magnetic IP-to-target, offset left, 12.1 nautical miles', 'holding area Mazda, 27,000 feet, 12 minutes', 'target 270 meters left of Mazda', 'egress heading 270 from Mazda'],
         Q('jp3093', '(2) Line 2―Heading and Offset. The heading is given in degrees magnetic from the IP to the target', 'on which aircrews can maneuver for the attack.')),
    ]),
    2: ('Beispiel 2 – Type 1, BOC mit Reattack und Wechsel auf BOT', ['Type 1', 'BOC → BOT', 'Keyhole', 'F-16'], [
        ('Warum wählt der JTAC zuerst BOC?',
         ['the aircraft’s short on-station time combined with the concealed nature of the enemy location', 'Type 1 control always requires BOC', 'the F-16 cannot drop unguided bombs BOT', 'the JTAC cannot see the aircraft'],
         S('jp3093', 'JTAC elects to utilize a BOC mission due to the aircraft’s short on-station time', 1)),
        ('Wie korrigiert der JTAC nach dem ersten Angriff?',
         ['From your last impacts, adjust east 25 meters.', 'Left 25, from the pilot’s view.', 'New 10-digit grid, no readback.', '3 o’clock, 25 meters.'],
         Q('jp3093', 'Request reattack. Change to game plan, bomb on target.', 'adjust east 25 meters.')),
    ]),
    3: ('Beispiel 3 – Type 2, BOC unter der Wolkendecke', ['Type 2', 'BOC', 'GBU-32 airburst', 'readback from the weapon'], [
        ('Wer liest bei BOC Line 4 und 6 zurück?',
         ['all aircraft delivering ordnance, from their system or weapon', 'only the lead aircraft', 'only when the JTAC requests it', 'the wingman for the flight'],
         S('jp3093', '(b) For BOC missions, all aircraft delivering ordnance must read back Line 4 and Line 6', 1)),
        ('Warum ist diese Mission Type 2 und nicht Type 1?',
         ['Weather is 500 feet above ground level, overcast', 'two aircraft attack', 'no mark is used', 'the target is in a trench line'],
         Q('jp3093', '(2) Type 2 Control. Type 2 control is used when', 'unable to visually acquire the target.')),
    ]),
    4: ('Beispiel 4 – Type 2, BOT mit Sensor-Talk-on', ['Type 2', 'BOT', 'talk-on', 'scout data'], [
        ('Woran erkennt man, dass die Korrelation abgeschlossen ist?',
         ['both aircraft call CAPTURED on their target', 'the correct readback of lines 4 and 6', 'the IP inbound call', 'the SPOT call'],
         Q('jp3093', 'Note that the JTAC completed correlation with both aircraft since the game plan included both aircraft attacking.', 'both aircraft attacking.')),
        ('Warum ist das Type 2?',
         ['The JTAC is unable to acquire the target but receives real-time targeting information from a scout', 'GBU-12s are used', 'the aircrew uses a targeting pod', 'two targets are attacked'],
         S('jp3093', 'The JTAC (Spartan 03) is unable to acquire the target but receives real-time targeting information', 1)),
    ]),
    5: ('Beispiel 5 – Type 3, BOT mit Laser-Handoff', ['Type 3', 'BOT', 'laser hand-off', 'A-10', 'time window'], [
        ('Ersetzt „SPOT“ die Korrelation?',
         ['no, the JTAC and observer still need to conduct correlation', 'yes, SPOT completes correlation', 'yes, for Type 3 control', 'only for BOC'],
         S('jp3093', 'Even though the attack aircraft has reported “SPOT”, the JTAC and observer still need to conduct correlation', 1)),
        ('Welche Freigabe nutzt der JTAC unter Type 3?',
         ['CLEARED TO ENGAGE', 'CLEARED HOT', 'CONTINUE', 'SMACK'],
         S('jp3093', '(3) Type 3 Control. Type 3 control is used when', 1)),
    ]),
    6: ('Beispiel 6 – Type 3, BOC mit Bomber auf ein Linienziel', ['Type 3', 'BOC', 'B-52', 'linear target'], [
        ('Was ist an Line 6 in diesem Beispiel besonders?',
         ['a set of 2, six-digit grids to define a linear target', 'Line 6 is omitted', 'an offset from a reference point', 'Line 6 follows the remarks'],
         Q('jp3093', 'Type 3, bomb on coordinate, MK-84s and MK-82s, instantaneous fuzing', 'to define a linear target')),
        ('Welchen Call macht die Besatzung nach Abschluss unter Type 3?',
         ['ENGAGEMENT COMPLETE', 'WINCHESTER', 'OFF', 'RIFLE'],
         Q('jp3093', 'Doom 45, ENGAGEMENT COMPLETE. Proceeding back to Mazda.', 'Proceeding back to Mazda.')),
    ]),
    7: ('Beispiel 7 – Type 3, BOT mit Kampfhubschraubern und SEAD', ['Type 3', 'BOT', 'AH-1', 'battle position', 'non-standard SEAD'], [
        ('In welcher Einheit steht Line 3 für Hubschrauber aus einer BP?',
         ['meters', 'nautical miles', 'feet', 'kilometers'],
         S('jp3093', '(f) Line 3―Distance. The distance is given from the IP/BP to the target.', 3)),
        ('Welche Restriction steuert hier die Annäherung an das Ziel?',
         ['Once approved forward of BP', 'gun target line 130', 'non-standard suppression from +2 to +5', 'ZU-23, 1500 meters south'],
         Q('jp3093', 'Make your attacks northwest to southeast. ZU-23, 1500 meters south', 'Once approved forward of BP')),
    ]),
    8: ('Beispiel 8 – Visueller Versatz von einem Bezugspunkt', ['Type 2', 'BOT', 'urban', 'correlation before the brief'], [
        ('Warum liest Wake 71 zusätzlich eine Koordinate zurück?',
         ['no grid was provided in the CAS brief; a rough grid serves as a double check', 'BOT always requires a grid readback', 'the JTAC forgot the grid', 'the GBU-12 needs a grid'],
         S('jp3093', 'In this case, since no grid was provided in the CAS brief, the aircraft should read back lines 4 and 6', 1)),
        ('Wie bewegt der JTAC den Sensor beim Talk-on?',
         ['SLEW east on Baseline approximately 200 yards', 'egress east', 'shift laser east', 'stack the flight east'],
         Q('jp3093', 'Wake 71, from intersection of Gas Station and Baseline, SLEW east on Baseline approximately 200 yards.', 'approximately 200 yards.')),
    ]),
    9: ('Beispiel 9 – RW FAC(A) mit zwei F-16 (Type 2 BOC, dann Type 1 BOT)', ['FAC(A)', 'Type 2 BOC', 'Type 1 BOT', 'third-party lase'], [
        ('Welche Aufgaben übergibt der AO an den RW FAC(A)?',
         ['STACK, brief, MARK, and control', 'only the radio relay', 'only BDA', 'only the mark'],
         S('jp3093', 'The AO (Siege 31) received notification that a patrol without a JTAC is in contact', 2)),
    ]),
}

RW5 = ('Hubschrauber-5-Line (Type 2, BOT)', ['RW', '5-line', 'Type 2', 'IR mark'], [
    ['JTAC', 'Deuce 31, Broadsword 11, 5-line, Type 2 control, BOT, rockets and guns, my position is checkpoint 295 marked by IR strobe, northwest 200, single technical vehicle marked by IR SPARKLE, make all attacks over my right shoulder, left pull, keep all effects of fires west of MSR Clovis.'],
    ['AIR', 'Deuce 31 copies over your right shoulder, left pull, keep all effects of fires west of MSR Clovis, pushing.'],
    ['JTAC', 'Deuce 31, CONTINUE.'],
    ['AIR', 'Deuce 31 and flight, VISUAL, TALLY, IN.'],
    ['JTAC', 'Deuce 31 and flight, CLEARED HOT.'],
], [
    ('Was liest die Besatzung beim 5-Line zurück?', ['all restrictions', 'all five lines', 'only the target description', 'nothing'],
     S('jp3093', '(6) Readbacks for a RW CAS 5-line should include all restrictions.', 1)),
    ('Ist die Übermittlung des 5-Line eine Feuerfreigabe?', ['no, it does not constitute clearance to fire', 'yes', 'yes, in Type 2', 'only with a mark'],
     S('jp3093', '5-line briefs is that the RW CAS 5-line is still considered a CAS brief', 1)),
])


def _qs(items):
    return [{'q': esc(q), 'o': [esc(o) for o in opts], 'a': 0, 'e': ex.inline() + ' <small class="muted">(' + esc(ex.cite()) + ')</small>'}
            for q, opts, ex in items]


def build():
    out = []
    for e in appendix_e.examples():
        title, tags, qs = META[e['nr']]
        intro = '<p class="mono small">' + esc(e['heading']) + '</p>' + Q('jp3093', e['intro'][0][:60], n=len(e['intro']), after=e['heading']).html()
        out.append({'id': 'e%d' % e['nr'], 'title': title, 'tags': tags, 'intro': intro,
                    'lines': [[w, esc(t)] for w, t in e['lines']], 'points': [], 'qs': _qs(qs),
                    'src': [['jp3093', 'pp. %s–%s' % (e['page'], e['last'])]]})
    title, tags, lines, qs = RW5
    out.append({'id': 'rw5', 'title': title, 'tags': tags,
                'intro': Q('jp3093', '16. Rotary-Wing Close Air Support 5-Line a. The RW CAS 5-line brief (Figure III-27)', 'The difference between the RW CAS 5-line and other').html(),
                'lines': [[w, esc(t)] for w, t in lines], 'points': [], 'qs': _qs(qs), 'src': [['jp3093', 'pp. III-94–III-97']]})
    return push_js('scripts', out)
