"""Type of control / method of attack drill. The situations are invented (German); the solution is explained
with the definitions of the type of control and method of attack, word for word from JP 3-09.3."""
from lib import S, assign_js

TYPE = {
    1: S('jp3093', '(1) Type 1 Control. Type 1 control is used when', 1),
    2: S('jp3093', '(2) Type 2 Control. Type 2 control is used when', 1),
    3: S('jp3093', '(3) Type 3 Control. Type 3 control is used when', 1),
}
MOA = {
    'BOT': S('jp3093', '(3) A BOT attack requires that the JTAC/FAC(A)’s intended target or mark is TALLY/CONTACT/CAPTURED', 2),
    'BOC': S('jp3093', '(2) A BOC attack is used when the JTAC/FAC(A) determines', 2),
}

SITUATIONS = [
    ('MG-Nest vor dem eigenen Zug', '<p>Tag, klare Sicht. Ein feindliches MG beschießt deinen Zug aus 700 m. Du siehst das Ziel. Zwei A-10 mit Bordkanone und ungelenkten Raketen kommen tief an; du kannst sie während des ganzen Anflugs sehen. Wegen der Nähe zu den eigenen Kräften willst du jede Angriffsgeometrie selbst beurteilen. Die Besatzung soll das Ziel selbst erfassen.</p>', 1, 'BOT'),
    ('Bunker unter der Wolkendecke', '<p>Nacht, geschlossene Wolkendecke. Ein fester Bunker hat eine mensurierte Koordinate (CAT II). Du siehst ihn mit dem Wärmebildgerät. Zwei Jets mit GBU-38 (GPS-gelenkt) halten über den Wolken; du wirst sie beim Auslösen nicht sehen. Die Koordinate reicht für die gewünschte Wirkung.</p>', 2, 'BOC'),
    ('Selbstbeleuchtete GBU-12 aus mittlerer Höhe', '<p>Tag. Eine F-16 mit GBU-12 greift aus mittlerer Höhe an und beleuchtet selbst. Du siehst die Fahrzeugkolonne, die das Ziel ist, aber die F-16 wirst du beim Auslösen wegen der Höhe nicht sehen. Nach einem Talk-on soll die Besatzung das Ziel mit dem Pod erfassen.</p>', 2, 'BOT'),
    ('Bomben in den Laserkorb', '<p>Bedeckt, Untergrenze 3.000 ft. Du beleuchtest das Ziel mit deinem Bodenlaser. Zwei Jets werfen GBU-12 von über den Wolken in den Laserkorb; die Besatzungen können das Ziel nicht sehen und sollen es auch nicht erfassen. Du siehst die Jets nicht.</p>', 2, 'BOC'),
    ('Kolonne im Tal', '<p>Eine feindliche Kolonne mit sechs Fahrzeugen steht in einem Tal 4 km vor den eigenen Truppen. Die Gefahr für eigene Kräfte ist gering. Der Kommandeur hat Type 3 genehmigt und will, dass alle Fahrzeuge in einem 10-Minuten-Fenster bekämpft werden. Zwei A-10 sollen die Fahrzeuge selbst finden.</p>', 3, 'BOT'),
    ('Bombenteppich auf die Baumlinie', '<p>Eine starke Feindkraft liegt im dichten Wald jenseits eines Flusses, etwa 100 m breit entlang des Ufers. Absicht des Kommandeurs: 30 Minuten ununterbrochener Beschuss. Ein Bomber kann mit zwei Koordinaten (Anfang und Ende der Linie) arbeiten; die Besatzung wird im Wald keine einzelnen Ziele sehen.</p>', 3, 'BOC'),
    ('Einzelne F-16 mit wenig Restzeit', '<p>Dein Trupp liegt hinter einem Deich fest; ein gut getarntes MG-Nest 800 m nördlich in hohem Gras. Eine einzelne F-16 mit MK-82 hat zehn Minuten Restzeit. Ein Talk-on würde zu lange dauern, deine 8-stellige Koordinate reicht aber zum Niederhalten. Du kannst die F-16 im Anflug sehen und willst die Geometrie selbst prüfen.</p>', 1, 'BOC'),
    ('Zieldaten vom Spähtrupp', '<p>Du siehst das Ziel nicht. Ein Spähtrupp im Gefecht gibt dir laufend genaue Zieldaten zu zwei Schützenpanzern. Die Jets sollen die Fahrzeuge nach einem Sensor-Talk-on selbst mit dem Pod erfassen.</p>', 2, 'BOT'),
    ('Verbündete Besatzung mit Sprachproblemen', '<p>Tag, gute Sicht. Eine verbündete Besatzung, mit der die Verständigung schwierig ist, wirft ungelenkte Bomben. Die eigenen Kräfte sind nah. Die Mörser legen eine Rauchmarkierung, von der aus du korrigierst. Du siehst Ziel und Lfz.</p>', 1, 'BOT'),
    ('Kampfhubschrauber in der Nacht', '<p>Nacht. Zwei Kampfhubschrauber mit Hellfire stehen 5 km entfernt. Du markierst das Ziel mit dem IR-Pointer und kannst die Hubschrauber nicht sehen. Die Besatzungen sollen das Ziel mit ihren Sensoren erfassen und TALLY bzw. CONTACT SPARKLE melden.</p>', 2, 'BOT'),
    ('Hellfire aus der Battle Position', '<p>Eine leichte Panzerkompanie (sechs Fahrzeuge) nähert sich 2.000 m östlich deiner Stellung. Zwei Kampfhubschrauber sollen aus einer Battle Position in einem 5-Minuten-Fenster mit Hellfire mehrere Fahrzeuge bekämpfen, danach nach SEAD mit Raketen und Kanone. Die Besatzungen erfassen die Ziele nach einem Talk-on selbst.</p>', 3, 'BOT'),
    ('JFO mit mensurierter Koordinate', '<p>Eine Geschützstellung liegt hinter einem Hügel; du siehst sie nicht. Ein JFO beobachtet sie, hat eine mensurierte Koordinate erzeugt und vor dem Check-in mit dir korreliert. Zwei Jets mit JDAM kommen.</p>', 2, 'BOC'),
]


def build():
    out = []
    for title, sit, typ, moa in SITUATIONS:
        t, m = TYPE[typ], MOA[moa]
        out.append({'title': title, 'sit': sit, 'type': typ, 'moa': moa, 'why': t.inline() + '<br><br>' + m.inline(), 'src': [t.ref, m.ref]})
    return assign_js('drills.kontrolle', out)
