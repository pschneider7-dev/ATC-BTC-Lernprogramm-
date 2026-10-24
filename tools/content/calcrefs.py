"""The rule behind each calculator task, word for word from the publication (shown with the solution)."""
import json

from lib import S, Q, FIG

REFS = {
    'line8': [S('jp3093', '(k) Line 8-Friendlies.', 1)],
    'reverse': [S('jp3093', '(e) Line 2―Heading and Offset. The heading is given in degrees magnetic', 1)],
    'm2ft': [S('jp3093', '(g) Line 4―Target Elevation. The target elevation is given in feet MSL.', 1),
             S('jp3093', '2. MSL is understood; if using any other datum, it must be stated', 1)],
    'km2nm': [S('jp3093', '(f) Line 3―Distance. The distance is given from the IP/BP to the target.', 3)],
    'deg2mil': [S('atp30930', '3-22. A degree is a unit of horizontal clockwise angular measurement', 2)],
    'mks': [S('atp30930', '3-20. A mil is a unit of measure for angles', 2),
            S('atp30930', '3-21. The mil relation formula (see figure 3-1 on page 3-4) has several applications', 3)],
    'mks-hob': [S('atp30930', '5-22. If the spotting of the initial round is GRAZE', 3)],
    'ot': [S('atp30930', '5-13. The distance, in meters, the burst is to be moved', 2),
           S('atp30930', '5-16. Announce the computed deviation correction to the FDC', 2)],
    'laser': [Q('jp3093', 'The safety zone is a 20-degree wedge whose apex is at the target', 'extends from the surface to infinity.'),
              Q('jp3093', 'The optimal attack zone is a 120 degree wedge whose apex is at the target', '(see Figure III-9).')],
    'keyhole': [S('jp3093', '1. Keyhole template is an efficient method for establishing an IP', 1),
                Q('jp3093', 'JTAC: “Stang 11, proceed to Alpha 8, angels 15, report established.”', 'report established.”')],
    'tle': [S('jp3093', '(3) TLE is the difference between the coordinates generated for a target', 1)],
    'mgrs': [S('jp3093', '4. The number of digits in a grid coordinate is the level of precision of the grid', 1)],
    'dc': [S('atp30930', '4-34. DANGER CLOSE is included in the method of engagement', 2)],
    'sead': [FIG('jp3093', 'Fig. V-2, p. V-13', 'IDF SEAD duration = time first aircraft enters threat‘s max effective range until time last aircraft departs threat’s max effective range.'),
             FIG('jp3093', 'Fig. V-2, p. V-13', 'FW CAS 8nm/min (A-10 5nm/min)'), FIG('jp3093', 'Fig. V-2, p. V-13', 'RW CAS 4km/min')],
    'fah': [Q('jp3093', 'When using cardinal directions for the attack heading, aircraft FAH should be +/- 45-degrees', 'or 135-225).')],
}


def build():
    out = {}
    for k, qs in REFS.items():
        refs = []
        for q in qs:
            if q.ref not in refs:
                refs.append(q.ref)
        out[k] = {'q': '<br><br>'.join(q.inline() for q in qs), 'src': refs}
    return '(function () {\n  window.LP.calcRefs = %s;\n})();\n' % json.dumps(out, ensure_ascii=False, indent=1).replace('\n', '\n  ')
