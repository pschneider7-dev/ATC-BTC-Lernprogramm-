"""Kneeboard cards: the figures transcribed (and verified) in the modules, plus FIDO and SALTR from the text."""
from lib import KB, push_js
import m04, m05, m06, m07, m08, m09, m10, m11, m12, m13

FIDO = KB('Talk-On (FIDO)', [
    ('F', 'From a point (easily recognizable start point).'),
    ('I', 'In a direction (cardinal/sub-cardinal direction).'),
    ('D', 'Distance to travel (established unit of measure or meters).'),
    ('O', 'Object seen (target or object the JTAC/FAC[A] wants the aircrew to see).'),
], note='para 2b(8), p. V-43', src=['jp3093', 'p. V-43'])

SALTR = KB('BDA (SALTR)', [
    ('S', 'Size—number and type of equipment/personnel observed.'),
    ('A', 'Activity—movement direction, stationary, dug-in.'),
    ('L', 'Location.'),
    ('T', 'Time.'),
    ('R', 'Remarks—munitions expended, observed damage (number of tanks destroyed, number still active, and recommendation), mission number, and mission accomplished.'),
], note='para 2b(11), pp. V-48–V-49', src=['jp3093', 'pp. V-48–V-49'])

CARDS = [m05.TEMPLATE, m05.CHECK_IN, m06.NINE_LINE, m04.FIG_III_7, m04.FIG_III_6, m12.RW_5LINE, m11.JFO_BRIEF,
         m11.GUNSHIP_CFF, m13.INFLTREP, SALTR, FIDO, m09.TLE, m08.LASER_BREVITY, m08.IR_BREVITY, m07.MARK_BREVITY,
         m10.KEYHOLE, m10.SEAD_RULE]


def build():
    return push_js('spick', [k.data() for k in CARDS])
