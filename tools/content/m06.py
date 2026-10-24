from lib import Q, H, KB, NOTE

NINE_LINE = KB('Game Plan and CAS 9-Line Briefing', [
    ('GP', 'Type (1, 2, 3) control method of attack (effects desired/ordnance, interval). Advise when ready for 9-line.'),
    ('1', 'IP/BP'),
    ('2', 'Heading', '(degrees magnetic, IP/BP-to-target)'),
    ('', 'Offset', '(left/right, when requested)'),
    ('3', 'Distance', '(IP-to-target in nautical miles, BP-to-target in meters)'),
    ('4', 'Target elevation', '(in feet MSL)', True),
    ('5', 'Target description'),
    ('6', 'Target location', '(latitude/longitude or grid coordinates or offsets or visual)', True),
    ('7', 'Type Mark/Terminal Guidance', '(description of the mark; if laser handoff, call sign of lasing platform and code)'),
    ('8', 'Location of Friendlies', '(from target, cardinal direction and distance in meters)'),
    ('9', 'Egress'),
    ('R', 'LTL/PTL'),
    ('R', 'Desired type/number of ordnance or weapons effects (if not previously coordinated).'),
    ('R', 'Surface-to-air threat, location and type of SEAD.'),
    ('R', 'Additional remarks (gun-target line [GTL], weather, hazards, friendly mark).'),
    ('R', 'Additional calls requested.'),
    ('*', 'Final attack headings (FAHs)/attack directiion.', '', True),
    ('*', 'ACAs', '', True),
    ('*', 'Danger close and initials (if applicable).', '', True),
    ('*', 'TOT/TTT', '', True),
], note='Figure V-9 · Format 16',
    foot='Do not transmit line numbers. Units of measure are standard unless briefed. Lines 4, 6, and any restrictions are mandatory readback.* JTAC may request additional readback.',
    src=['jp3093', 'Fig. V-9, p. V-25'])

MODULE = dict(
    id='m06', nr=6, file='06-nine-line.js',
    title='The 9-Line CAS Brief',
    summary='Figure V-9 and the JP 3-09.3 text for every line, the NATO notes on line titles and the Line 8 readback, remarks, restrictions and readbacks.',
    sections=[
        dict(id='m06s1', title='Format and Delivery', items=[
            Q('jp3093', '(5) CAS Brief (a) JTACs/FAC(A)s will use a standardized briefing', 'out of sequence.'),
            NINE_LINE,
            Q('jp3093', 'However, if lines 1-3 were abbreviated, the elevation transmission should begin with “Elevation.”', 'should begin with “Elevation.”'),
            Q('jp3093', 'Example: “From the overhead. Elevation, four-hundred fifty feet …”'),
            NOTE('nato', 'NATO', Q('jp3093', 'Note: Allied Tactical Publication 3.3.2.1, TTP for Close Air Support and Air Interdiction, directs', n=2)),
            Q('jp3093', '(b) CAS brief can be prefaced by: “Razor 53, advise when ready for 9-line.”', n=2),
        ]),
        dict(id='m06s2', title='Lines 1 to 3: IP/BP, Heading and Offset, Distance', items=[
            Q('jp3093', '(d) Line 1–IP or BP.', n=4),
            Q('jp3093', '(e) Line 2―Heading and Offset. The heading is given in degrees magnetic from the IP to the target or from the center of the BP to the target. JTACs/FAC(A)s give'),
            Q('jp3093', '(f) Line 3―Distance. The distance is given from the IP/BP to the target. For fixed wing'),
        ]),
        dict(id='m06s3', title='Lines 4 to 6: Elevation, Description, Location', items=[
            Q('jp3093', '(g) Line 4―Target Elevation. The target elevation is given in feet MSL. Target elevation is needed', n=4),
            Q('jp3093', '(h) Line 5―Target Description. The target description should be specific enough for the aircrew to recognize the target. The target should be described'),
            Q('jp3093', '(i) Line 6―Target Location. The JTAC/FAC(A) provides the target location in 3 specific manners:', '(e.g., North XX).', maxlen=6000),
            Q('jp3093', '6. The following are considerations to target locations being passed in a method other than coordinates', 'at approximately 30 miles per hour.”', maxlen=7000),
            Q('jp3093', '7. There are rare times when a JTAC is unable to provide a target elevation and coordinate', n=5),
            NOTE('crit', 'WARNING', Q('jp3093', 'These techniques should be used with caution due to the potential for confusion and they do not support the fires approval process')),
            Q('jp3093', '8. Correlation Prior to the CAS Brief.', n=6, maxlen=6000),
        ]),
        dict(id='m06s4', title='Lines 7 to 9: Mark, Friendlies, Egress', items=[
            Q('jp3093', '(j) Line 7-Mark Type/Terminal Guidance', n=3),
            Q('jp3093', '(k) Line 8-Friendlies.'),
            NOTE('nato', 'NATO', Q('jp3093', 'Note: NATO Allied Tactical Publication 3.3.2.1, TTP for Close Air Support and Air Interdiction, requires Line 8')),
            Q('jp3093', '(l) Line 9-Egress.', n=2),
        ]),
        dict(id='m06s5', title='Remarks and Restrictions', items=[
            Q('jp3093', '(6) Remarks/Restrictions (a) Remarks.', n=21, maxlen=6000),
            Q('jp3093', '(b) The following information is always a restriction', n=15, maxlen=7000),
        ]),
        dict(id='m06s6', title='Readbacks', items=[
            Q('jp3093', '(7) Readbacks (a) Required readbacks of lines 4, 6, and restrictions.', n=11, maxlen=6000),
        ]),
    ],
    atp=[
        'Compare the NATO CAS brief format line by line with Figure V-9 (titles, units, order).',
        'Check the ATP rule on passing line titles.',
        'Check whether the ATP makes Line 8 a mandatory readback and what else must be read back.',
        'Compare the order of remarks and the list of restrictions in the ATP.',
    ],
    jfire=[],
)
