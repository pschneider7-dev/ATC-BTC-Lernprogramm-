from lib import Q, H, KB, NOTE

MODULE = dict(
    id='m01', nr=1, file='01-fundamentals.js',
    title='Fundamentals: CAS, AI and the Players',
    summary='Definitions of CAS and AI, terminal attack control, terminal guidance operations, the JTAC, FAC(A), TAC(A) and JFO, and the conditions for effective CAS.',
    sections=[
        dict(id='m01s1', title='Close Air Support', items=[
            Q('jp3093', '2. Close Air Support Overview a. CAS is air action'),
            Q('jp3093', 'b. CAS is planned and executed to support ground tactical units.'),
            Q('jp3093', 'c. CAS can be conducted at any place and time'),
            Q('jp3093', 'CAS is used to attack the enemy in support of the commander’s CONOPS'),
        ]),
        dict(id='m01s2', title='Air Interdiction and CAS in NATO Doctrine', items=[
            Q('ajp33', 'Operations generally fall under two mission types: air interdiction (AI) and close air support (CAS).'),
            Q('ajp33', '(1) Air interdiction. AI operations are those conducted', 'fix or delay adversary forces.'),
            Q('jp3093', 'For joint air operations, the integration of CAS starts at the operational level'),
        ]),
        dict(id='m01s3', title='Terminal Attack Control and Terminal Guidance', items=[
            Q('jp3093', 'e. TAC. TAC is the authority to control the maneuver of', n=4),
            Q('jp3093', 'f. Terminal Guidance Operations (TGO).'),
        ]),
        dict(id='m01s4', title='TACP, JTAC, FAC(A), TAC(A) and JFO', items=[
            Q('jp3093', '(5) Tactical Air Control Party (TACP). The TACP is the principal air liaison unit'),
            Q('jp3093', '(a) ALO. The ALO is the senior TACP member'),
            Q('jp3093', '(b) JTAC. The JTAC is a qualified and certified Service member', n=10),
            Q('jp3093', '(c) FAC(A). A FAC(A) is authorized to perform TAC'),
            Q('jp3093', '(d) TAC(A). The TAC(A) is an extension of air support control agencies.'),
            Q('jp3093', '(5) JFO. A JFO is a qualified and certified Service member'),
        ]),
        dict(id='m01s5', title='Conditions for Effective CAS', items=[
            Q('jp3093', 'The conditions for effective CAS are:'),
            Q('jp3093', 'd. Air Superiority. Air superiority permits CAS'),
            Q('jp3093', 'e. Target Marking. Providing timely and accurate target marks'),
            Q('jp3093', 'f. Streamlined and Flexible Procedures.', n=9),
            Q('jp3093', 'g. Appropriate Ordnance. To create the desired effects'),
        ]),
        dict(id='m01s6', title='Usage Criteria, Targeting, Friendly Fire and Civilian Casualties', items=[
            Q('jp3093', 'b. Usage Criteria. Commanders consider the following criteria in planning for CAS:', n=11),
            Q('jp3093', 'c. Targeting. Targeting is the process of selecting and prioritizing targets'),
            Q('jp3093', 'b. Causes. Although occasionally the result of malfunctioning weapons'),
            Q('jp3093', 'c. Responsibility. All participants in CAS are responsible'),
            Q('jp3093', '10. Minimizing Civilian Casualties a. General.'),
            Q('jp3093', 'The various CAS controllers occupy a unique location'),
        ]),
    ],
    atp=[
        'Compare the ATP-3.3.2.1 definitions of CAS, AI and terminal attack control with the JP 3-09.3 and AJP-3.3 wording.',
        'Note how the ATP describes JTAC, FAC(A) and JFO and their authority.',
        'Check whether the ATP uses the term “TGO” and how it limits non-JTAC personnel.',
    ],
    jfire=[
        'Locate the JFIRE chapter with CAS aircraft and weapons data and note how it is organized.',
    ],
)
