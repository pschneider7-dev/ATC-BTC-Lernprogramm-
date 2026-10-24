from lib import Q, H, KB, NOTE

MODULE = dict(
    id='m14', nr=14, file='14-nato-multinational.js',
    title='NATO Doctrine and Multinational CAS',
    summary='Where ATP-3.3.2.1 sits in the NATO doctrine hierarchy, JP 3-09.3 on multinational operations and JTAC accreditation, the NATO notes in JP 3-09.3, TACP and FAC(A) in NATO doctrine, NATO-agreed terms and US versus NATO brevity.',
    sections=[
        dict(id='m14s1', title='The NATO Doctrine Hierarchy', items=[
            Q('ajp33', '1. Allied Joint Publication (AJP)-3.3, Allied Joint Doctrine for Air and Space Operations sits under'),
            Q('ajp33', '12. AJP-3.3 is subordinate to the keystone publication AJP-3.', n=3),
            Q('ajp33', 'Refer to AJP-3.3.2(A), Allied Joint Doctrine for Close Air Support and Air Interdiction'),
        ]),
        dict(id='m14s2', title='JP 3-09.3 and Multinational Operations', items=[
            Q('jp3093', '26. Planning for Multinational Operations a. NATO and partner nations', n=3),
            Q('jp3093', 'c. There is no single C2 structure for CAS operations when engaged in multinational operations.'),
        ]),
        dict(id='m14s3', title='NATO Differences Named in JP 3-09.3', items=[
            NOTE('nato', 'NATO · Line titles', Q('jp3093', 'Note: Allied Tactical Publication 3.3.2.1, TTP for Close Air Support and Air Interdiction, directs', n=2)),
            NOTE('nato', 'NATO · Line 8', Q('jp3093', 'Note: NATO Allied Tactical Publication 3.3.2.1, TTP for Close Air Support and Air Interdiction, requires Line 8')),
        ]),
        dict(id='m14s4', title='TACP and FAC(A) in NATO Doctrine', items=[
            Q('ajp33', 'C.11 Tactical air control parties (TACP) are designed to provide air liaison'),
            Q('ajp33', 'C.12 A FAC(A) is a specifically certified and qualified aircrew member'),
        ]),
        dict(id='m14s5', title='NATO Agreed Terms (AJP-3.3 Lexicon)', items=[
            Q('ajp33', 'air support operations centre An agency of a theatre air control system'),
            Q('ajp33', 'battle damage assessment The timely and accurate assessment of damage'),
            Q('ajp33', 'friendly fire The employment of friendly weapons or munitions'),
            Q('ajp33', 'combined Adjective used to describe activities, operations and organizations, in which elements of more than one nation participate.'),
            Q('ajp33', 'joint Adjective used to describe activities, operations and organizations in which elements of at least two services participate.'),
        ]),
        dict(id='m14s6', title='US Multi-Service Brevity and NATO', items=[
            Q('atp1021', 'This publication establishes tactics, techniques, and procedures for multi-Service brevity codes.', 'The sole purpose of a brevity code is to shorten messages rather than to conceal content.'),
            Q('atp1021', '* Meaning differs from the North Atlantic Treaty Organization (NATO) brevity word.', 'Denotes a general brevity code.'),
            Q('atp1021', 'Note: All brevity codes pertain to general air operations unless indicated otherwise.'),
            Q('jp3093', '2. Brevity. A brevity code is a single word or phrase that does not provide security'),
        ]),
    ],
    atp=[
        'Read the ATP-3.3.2.1 preface: scope, relationship to AJP-3.3.2 and national caveats.',
        'Collect all places where the ATP differs from JP 3-09.3 (line titles, Line 8 readback, formats, brevity).',
        'Check which brevity words the course expects in their NATO meaning (APP-7) where ATP 1-02.1 marks * or **.',
    ],
    jfire=[],
)
