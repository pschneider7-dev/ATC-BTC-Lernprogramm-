from lib import Q, H, KB, NOTE

MARK_BREVITY = KB('Standard Marking Brevity Terms', [
    ('BLIND', 'No visual contact with FRIENDLY aircraft/ground position. Opposite of VISUAL.'),
    ('VISUAL', 'Sighting of a FRIENDLY aircraft or ground position. Opposite of BLIND.'),
    ('CONTACT', 'Acknowledges sighting of a specified reference point (either visually or via sensor).'),
    ('(target/object) CAPTURED', 'Specified surface target or object has been acquired and is being tracked with an onboard sensor.'),
    ('LOOKING', 'Aircrew does not have the ground object, reference point, or target in sight. Opposite of CONTACT.'),
    ('TALLY', 'Sighting of a target, nonfriendly aircraft, or enemy position. Opposite of NO JOY.'),
    ('NO JOY', 'Aircrew does not have visual contact with the TARGET/BANDIT. Opposite of TALLY.'),
], note='Figure III-20', src=['jp3093', 'Fig. III-20, p. III-78'])

VDL_BREVITY = KB('Video Downlink Brevity Terms (extract)', [
    ('CHECK FOCUS', 'Sensor image appears to be out of focus.'),
    ('DECLUTTER', 'Authoritative request for the pilot/operator to remove targeting symbology to allow the user to see a better picture of the target area'),
    ('HANDSHAKE', 'Video data link established. Opposite of HOLLOW.'),
    ('HOLLOW', '1. Any data link message not received. 2. Lost video data link. Opposite of HANDSHAKE.'),
    ('SHADOW', 'Follow indicated target.'),
    ('SLEW', 'Move sensor in direction indicated (usually accompanied with a unit of measure). For example, “SLEW left one-half screen.”'),
    ('STAKE', 'A full-motion video system mark has been set and is used as a frame of reference'),
], note='Figure III-36', src=['jp3093', 'Fig. III-36, p. III-119'])

MODULE = dict(
    id='m07', nr=7, file='07-correlation.js',
    title='Correlation, Marks and Talk-On',
    summary='Correlation for BOC and BOT, marks and their advantages, IDF and direct fire marks, marking brevity, laser hand-off and IR correlation procedures, talk-on (FIDO) and VDL talk-on.',
    sections=[
        dict(id='m07s1', title='Correlation', items=[
            Q('jp3093', '(8) Correlation. The process by which the JTAC/FAC(A) coordinates and confirms', n=4),
            Q('jp3093', '(4) Determine/Coordinate Mark/Aid to Correlation (a) BOC', n=5),
            Q('jp3093', '1. After correlation is complete, and before the attack, any questions that remain must be answered.', n=8),
        ]),
        dict(id='m07s2', title='Types of Marks and TGO', items=[
            Q('jp3093', '3. Types of Marks and TGO a. Laser Handoff.', n=7),
            Q('jp3093', 'b. Match Sparkle. Directing the aircrew to overlay their IR sparkle', n=7),
            Q('jp3093', 'd. Ground IR Sparkle. When marking with ground-based IR pointer', n=6),
            Q('jp3093', 'g. IDF Mark (1) Advantage (a) Day or night.', n=6),
            Q('jp3093', '(a) Marks. A target mark should be provided for CAS aircraft whenever needed.'),
            MARK_BREVITY,
        ]),
        dict(id='m07s3', title='Marks by Indirect Fire, Direct Fire and Laser', items=[
            Q('jp3093', '1. Marking by IDF. Artillery, NSFS, or mortar fires are an effective means'),
            Q('jp3093', '2. Marking by Direct Fire. Direct fire weapons can be used to mark targets.'),
            Q('jp3093', '3. Laser Designators. For LST-equipped aircraft, designating/marking targets by laser is very effective.'),
            Q('jp3093', '6. Visually-Significant Mark a. IDF, direct fire, or aviation fires may be employed', n=7),
        ]),
        dict(id='m07s4', title='Correlation with Laser Hand-Off and IR Sparkle', items=[
            Q('jp3093', '1. Laser Hand-Off. JTACs must be directive in order to ensure proper laser safety geometry', n=26, maxlen=8000),
            Q('jp3093', '3. Sparkle Walk-On. When the tactical situation prevents the JTAC from using a ground-based IR sparkle', n=14, maxlen=7000),
        ]),
        dict(id='m07s5', title='Talk-On (FIDO)', items=[
            Q('jp3093', '7. Talk-On a. The JTAC/FAC(A) who effectively executes talk on techniques'),
            Q('jp3093', '* Aircraft greater than 15,000 feet slant range from the target'),
            Q('jp3093', 'g. When coordinating a talk-on, the JTAC should be specific about which type of talk-on', n=27, maxlen=8000),
        ]),
        dict(id='m07s6', title='VDL Talk-On, APTD and Link-16 Hand-Off', items=[
            Q('jp3093', '8. VDL Talk-On a. When the JTAC and aircrew are both properly equipped', n=8),
            Q('jp3093', 'a. VDL Systems. VDL systems provide FMV downlink to the ground units for CAS', 'FMV feeds should not be used as a single-source target identification method.'),
            Q('jp3093', '(5) The operator or aircrew will establish a unit of measure for the talk-on.'),
            VDL_BREVITY,
        ]),
    ],
    atp=[
        'Compare the ATP definition of correlation and when it is complete for BOT and BOC.',
        'Compare the NATO marking brevity (TALLY, CONTACT, CAPTURED, VISUAL, BLIND, NO JOY) with Figure III-20.',
        'Check the ATP talk-on technique and whether it uses FIDO.',
        'Check the ATP laser hand-off and IR sparkle procedures.',
    ],
    jfire=[
        'Find the JFIRE listing of aircraft target marking capabilities (JP 3-09.3 refers to it).',
    ],
)
