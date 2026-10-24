from lib import Q, H, KB, NOTE

TLE = KB('Target Location Error Categories', [
    ('CAT I', 'CE 0-20 ft', '0-6 m'),
    ('CAT II', 'CE 21-50 ft', '7-15 m'),
    ('CAT III', 'CE 51-100 ft', '16-30 m'),
    ('CAT IV', 'CE 101-300 ft', '31-91 m'),
    ('CAT V', 'CE 301-1000 ft', '92-305 m'),
    ('CAT VI', 'CE >1000 ft', '(>305m)'),
], note='Figure III-5 · CE90/VE90/SE90', src=['jp3093', 'Fig. III-5, p. III-35'])

MODULE = dict(
    id='m09', nr=9, file='09-target-location.js',
    title='Target Location, TLE and Mils',
    summary='Required coordinate fidelity, mensuration, laser range finders, target location error and its categories, target location methods, elevation, datum, and the mil relation formula.',
    sections=[
        dict(id='m09s1', title='How Accurate Must Line 6 Be?', items=[
            Q('jp3093', 'c. Targeting and TLE (1) Target coordinates (preplanned and immediate) and associated TLE', n=3),
            Q('jp3093', '(c) Target Location (Line 6). JTACs/FAC(A)s must consider the accuracy of Line 6', n=5),
        ]),
        dict(id='m09s2', title='Mensuration and Target Locating Devices', items=[
            Q('jp3093', '(c) Target coordinate mensuration is the process of measurement'),
            Q('jp3093', '(2) Laser Range Finders and Target Locating Devices.'),
            Q('atp30930', '1-19. Observers equipped with nothing more than a map, binoculars, and compass', 'not good enough for first round fire for effect or target suppression.'),
        ]),
        dict(id='m09s3', title='Target Location Error (TLE)', items=[
            Q('jp3093', '(3) TLE is the difference between the coordinates generated for a target', n=9),
            TLE,
            NOTE('tip', 'Note', Q('jp3093', 'Note: If the JTAC/FAC(A) desires to pass the TLE of a coordinate')),
        ]),
        dict(id='m09s4', title='Elevation, Datum and Coordinate Formats', items=[
            Q('jp3093', '(a) Target Elevation (Line 4). The default target elevation is in ft MSL.'),
            Q('jp3093', '2. MSL is understood; if using any other datum, it must be stated'),
            Q('jp3093', '2. Because of multiple coordinate systems available for use, the datum'),
            Q('jp3093', '(b) Location Error. These weapons require extremely accurate target location'),
            Q('jp3093', '4. The number of digits in a grid coordinate is the level of precision of the grid', n=2),
        ]),
        dict(id='m09s5', title='Mils and the Mil Relation Formula', items=[
            Q('atp30930', '3-17. Azimuth is a horizontal angle measured clockwise', 'the observer should state that the direction is given in degrees.'),
            Q('atp30930', '3-20. A mil is a unit of measure for angles', 'the observer target distance factor (OT factor).'),
            Q('atp30930', '3-22. A degree is a unit of horizontal clockwise angular measurement'),
            Q('atp30930', '3-46. Distances can be estimated by using known dimensions of vehicles', 'This data, when compared with map data, will help an observer estimate distance.'),
        ]),
        dict(id='m09s6', title='Describing the Target', items=[
            Q('jp3093', '(b) Target Description (Line 5). Line 5 should be a concise'),
            Q('jp3093', '3. The following target location considerations should be used in line-6:', n=4),
        ]),
    ],
    atp=[
        'Compare the NATO TLE categories and how the ATP wants TLE passed.',
        'Check which datum and coordinate formats the ATP prescribes for Line 6.',
    ],
    jfire=[
        'Find how the JFIRE relates TLE to weapon effectiveness (no values into this app).',
    ],
)
