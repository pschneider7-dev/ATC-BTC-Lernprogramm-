from lib import Q, H, KB, NOTE

KEYHOLE = KB('Keyhole Template', [
    ('A', 'North'), ('B', 'East'), ('C', 'South'), ('D', 'West'), ('E', 'Overhead Target'),
], note='Figure III-18', verify=False,
    src=['jp3093', 'Fig. III-18, p. III-74'])

SEAD_RULE = KB('IDF SEAD Timing Equation Rule of Thumb', [
    ('', 'IDF SEAD duration = time first aircraft enters threat‘s max effective range until time last aircraft departs threat’s max effective range.'),
    ('FW', 'FW CAS 8nm/min (A-10 5nm/min)'),
    ('RW', 'RW CAS 4km/min'),
    ('Ex', 'Example: Fixed wing section strafing attack, 1 min separation, Threat has 5nm max effective range, threat collocated with CAS target.'),
    ('', '- Assuming 8nm/minute, the lead aircraft will enter the threat range approximately 45 seconds prior to TOT.'),
    ('', 'The second aircraft will exit the threat range approximately 1+45 after lead‘s TOT'),
    ('', '- Suppression should be planned as nonstandard, -1+00 until +2+00, impacting every 30 seconds.'),
], note='Figure V-2', foot='Assumptions: IDF SEAD planned for the portion of the attack that terrain masking and altitude sanctuary are not available.',
    src=['jp3093', 'Fig. V-2, p. V-13'])

MODULE = dict(
    id='m10', nr=10, file='10-coordination.js',
    title='Fire Support and Airspace Coordination',
    summary='Permissive and restrictive FSCMs, the FSCL, ACAs and lateral, altitude and time separation, TOT and TTT, ACMs, IP/BP selection, the keyhole, offset, final attack headings and SEAD.',
    sections=[
        dict(id='m10s1', title='Fire Support Coordination Measures', items=[
            Q('jp3093', 'a. Fire Support Coordination Measures. Within their operational areas'),
            Q('jp3093', '(1) Permissive Measures. Permissive measures facilitate target attacks.', n=2),
            Q('jp3093', '(c) Battlefield Coordination Line (BCL).', n=3),
            Q('jp3093', '(2) Restrictive Measures. Restrictive measures restrict the use of supporting arms', n=6),
        ]),
        dict(id='m10s2', title='The Fire Support Coordination Line', items=[
            Q('jp3093', '(b) FSCL. FSCLs facilitate the expeditious engagement of targets of opportunity'),
            Q('jp3093', 'Current technology and collaboration tools between the elements of the joint force determine the times required for changing the FSCL.', 'must not produce adverse effects on or to the rear of the line.'),
            Q('jp3093', 'Engagements beyond the FSCL must be consistent with the establishing commander’s priorities'),
        ]),
        dict(id='m10s3', title='Airspace Coordination Areas and Separation', items=[
            Q('jp3093', '(d) ACA. A three-dimensional block of airspace in a target area', n=3),
            Q('jp3093', 'a. Lateral Separation. (See Figure III-13.)', '“Remain west of the river.”'),
            Q('jp3093', 'b. Altitude Separation. Altitude separation is effective for coordinating fires', 'referencing the firing tables.'),
            Q('jp3093', 'c. Altitude and Lateral Separation. (See Figure III-15)', 'add or subtract the'),
            Q('jp3093', 'margin of safety. For example, “Stay west of 62 gridline and remain below 3,000 ft MSL.”', 'always specify in ft MSL.'),
            Q('jp3093', 'd. Time Separation. Time separation requires the most detailed coordination'),
        ]),
        dict(id='m10s4', title='Timing: TOT and TTT', items=[
            Q('jp3093', '(1) TOT. TOT is a time at which the aircraft bombs are to impact the target', 'Strict adherence to timing by participants is required for aircraft safety.'),
            Q('jp3093', '(2) TTT. TTT establishes a precise number of minutes and seconds'),
            Q('jp3093', '“TOT 1410, SEAD minus 2 through minus 1 and plus 1 through plus 2.”'),
            Q('jp3093', '(2) A common time reference is essential to accomplish the high degree of coordination'),
        ]),
        dict(id='m10s5', title='ACMs, IPs, Keyhole, Offset and Final Attack Headings', items=[
            Q('jp3093', '(1) Coordinating Altitude. An airspace coordinating measure that uses altitude', n=4),
            Q('jp3093', '(3) Procedural Control Measures. Procedural control measures provide target orientation', n=2),
            Q('jp3093', '1. Keyhole template is an efficient method for establishing an IP'),
            KEYHOLE,
            Q('jp3093', 'a. If the tactical situation dictates that an IP north of the target is necessary', n=4),
            Q('jp3093', '2. This template allows for unlimited flexibility in IP selection', n=4),
            Q('jp3093', '(c) Offset Direction. The offset direction tells the aircrew'),
            Q('jp3093', 'Plot an IP and a target and connect them with a straight line.'),
            Q('jp3093', '(d) Final Attack Headings. JTACs/FAC(A)s assign attack headings', maxlen=6000),
            Q('jp3093', '1. Magnetic heading: “Final attack heading 230.”', n=4),
            Q('jp3093', '(a) Final Attack Heading (FAH). See Chapter III, “Planning and Requesting,” paragraph 14c(3)(d)', n=4),
            Q('jp3093', '2. JTACs/FAC(A)s must be aware of the effects of short or long hits'),
            Q('jp3093', '1. Winds. Crosswinds >30-knots may affect probability of laser acquisition for LGBs.'),
        ]),
        dict(id='m10s6', title='SEAD', items=[
            Q('jp3093', '(6) Determine SEAD Requirements/SEAD Plan (a) Plan for SEAD', n=3),
            SEAD_RULE,
            Q('jp3093', '(e) Threats may also be mitigated:', n=5),
        ]),
    ],
    atp=[
        'Compare the NATO definitions of CFL, FSCL, FFA, NFA, RFA, RFL and ACA.',
        'Check the keyhole letters and holding instructions in the ATP.',
        'Compare how the ATP passes FAHs and what it counts as a restriction.',
        'Check the SEAD planning guidance in the ATP.',
    ],
    jfire=[
        'Look up maximum effective ranges of surface-to-air threats in the JFIRE (JP 3-09.3 refers to it for SEAD timing; no values into this app).',
    ],
)
