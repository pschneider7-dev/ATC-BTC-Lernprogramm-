from lib import Q, H, KB, NOTE

TEMPLATE = KB('CAS Execution Template', [
    ('1', 'Routing/Safety of Flight'),
    ('2', 'CAS Aircraft Check-In'),
    ('3', 'Situation Update'),
    ('4', 'Game Plan'),
    ('5', 'CAS Brief'),
    ('6', 'Remarks/Restrictions'),
    ('7', 'Readbacks'),
    ('8', 'Correlation'),
    ('9', 'Attack'),
    ('10', 'Assess Effectiveness of the Attack'),
    ('11', 'BDA'),
    ('12', 'Routing/Safety of Flight'),
], note='Chapter V, para 2b(1)–(12)', src=['jp3093', 'Ch V, para 2b, pp. V-14–V-50'])

CHECK_IN = KB('Close Air Support Check-In Briefing', [
    ('1', 'Mission Number', '(e.g., “Mission number 1541”)'),
    ('2', 'Number and type of aircraft', '(e.g., “2 by F/A-18C”)'),
    ('3', 'Position and altitude', '(e.g., “Currently 20 nm north of Ford, block 20-21”)'),
    ('4', 'Ordnance', '(e.g., “500 rds of 20mm, 1 by GBU-12, 1 by GBU-38 each aircraft, laser codes Rumble 31-1688, Rumble 32-1731, instantaneous and delayed fuzing for GBU-12s and GBU-38s”)'),
    ('5', 'Playtime or Time on Station', '(e.g., “We have 25 minutes time on station”)'),
    ('6', 'Capabilities: FAC(A), Type of Sensors, Link-16, VDL code, SITREPs on board, map version or GRGs, UAS Lost Link Procedures/Route',
     '(e.g., “Rumble 31 is FAC(A) capable. Both aircraft are ATFLIR, and CAT II coordinate generation capable. Timber Sweet, Rumble 31 VDL code 4927. Rumble 32, VDL code 4977. We have SITREP C and micro-GRG 15-17 onboard.”)'),
    ('7', 'Abort code', '(e.g., “Abort code none, Ready to copy your updated SITREP.”)'),
], note='Figure V-4 · aircraft transmits to controller', src=['jp3093', 'Fig. V-4, p. V-16'])

MODULE = dict(
    id='m05', nr=5, file='05-execution.js',
    title='CAS Execution: From Target to Game Plan',
    summary='JTAC actions for developing a CAS brief, the CAS execution template, routing and safety of flight, the check-in (MNPOPCA), the situation update and the game plan.',
    sections=[
        dict(id='m05s1', title='JTAC Actions for Developing a CAS Brief', items=[
            Q('jp3093', 'a. JTAC Actions for Developing a CAS Brief.'),
            Q('jp3093', '(1) Develop Targeting Data. Planning for a CAS attack should begin with the target'),
            Q('jp3093', '(a) Target Elevation (Line 4). The default target elevation is in ft MSL.'),
            Q('jp3093', '(b) Target Description (Line 5). Line 5 should be a concise'),
            Q('jp3093', '(c) Target Location (Line 6). JTACs/FAC(A)s must consider the accuracy of Line 6', n=5),
            Q('jp3093', '(d) Friendly Location (Line 8). The location is given in a cardinal/sub-cardinal direction', n=2),
            Q('jp3093', '(2) Request Air Support (a) Once a rough location for the target has been determined'),
        ]),
        dict(id='m05s2', title='The CAS Execution Template', items=[
            Q('jp3093', 'b. CAS Execution Template. By its very nature, the execution of CAS differs'),
            TEMPLATE,
        ]),
        dict(id='m05s3', title='Routing and Safety of Flight', items=[
            Q('jp3093', '(1) Routing/Safety of Flight. JTAC/FAC(A) should immediately advise newly checked-in aircraft', n=17, maxlen=6000),
        ]),
        dict(id='m05s4', title='CAS Aircraft Check-In (MNPOPCA)', items=[
            Q('jp3093', '(2) CAS Aircraft Check-In. Aircraft check-in procedures are essential', n=8, maxlen=6000),
            CHECK_IN,
            Q('jp3093', 'Example: “Latch 65, hold your full check-in, say ordnance and play-time.”', n=23, maxlen=6000),
        ]),
        dict(id='m05s5', title='Situation Update', items=[
            Q('jp3093', '(3) Situation Update (a) The situation update brief is a tool'),
            Q('jp3093', 'Friendly - General friendly situation and scheme of maneuver.', 'If necessary, use no more than 6 digits.', after='Situation Update Example 1'),
            Q('jp3093', 'CAS: “Current surface-to-air threat is a SA-6 at KJ 123 456', 'Savage is laser and IR capable, advise when ready for game plan.”'),
            Q('jp3093', '1. The length and depth of the situation update must be balanced', n=3),
            Q('jp3093', '(b) Only those lines that apply should be passed. The situation update is also a format recognized for battlefield handover'),
        ]),
        dict(id='m05s6', title='Game Plan', items=[
            Q('jp3093', '(4) Game Plan. A concise means to inform all players', n=12, maxlen=6000),
            Q('jp3093', '2. The JTAC/FAC(A) should read the first element’s entire plan', n=3),
            Q('jp3093', '(3) Develop Game Plan. The game plan, at a minimum, will contain the type of control and method of attack.'),
            Q('jp3093', '2. Sequential Timing. Aircraft will attack one at a time', n=2),
        ]),
    ],
    atp=[
        'Compare the NATO check-in format with MNPOPCA (order and items).',
        'Compare the NATO situation update format with JP 3-09.3 Figures V-5 and V-6.',
        'Check how the ATP defines the game plan and what it must contain.',
        'Note whether the ATP uses an execution template and in which order.',
    ],
    jfire=[],
)
