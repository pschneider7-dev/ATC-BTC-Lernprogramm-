from lib import Q, H, KB, NOTE, RADIO, TABLE

CFF_GRID = RADIO([
    ('FO', 'Z57 THIS IS Z71, ADJUST FIRE, OVER.'),
    ('FDC', 'Z71 THIS IS Z57, ADJUST FIRE OUT.'),
    ('FO', 'GRID NK180513 ALTITUDE 345, OVER.'),
    ('FDC', 'GRID NK180513 ALTITUDE 345, OUT.'),
    ('FO', 'INFANTRY PLATOON IN THE OPEN, ICM (improved conventional munitions) IN EFFECT, OVER.'),
    ('FDC', 'INFANTRY PLATOON IN THE OPEN, ICM IN EFFECT, AUTHENTICATE (if required) PAPA BRAVO, OVER.'),
    ('FO', 'I AUTHENTICATE (if required) CHARLIE, OUT.'),
    ('note', 'Message to Observer (MTO)'),
    ('FDC', 'MTO, ZEBRA, 2 ROUNDS, TARGET AF1027, OVER.'),
    ('FO', 'MTO, ZEBRA, 2 ROUNDS, TARGET AF1027, BREAK, DIRECTION 1680, OVER.'),
    ('note', 'Note. Send direction before or with the first subsequent correction.'),
], src=['atp30930', 'Table 4-1, p. 4-18'])

DEV_TABLE = TABLE('Table 5-1. Determination of deviation corrections',
                  ['OT RANGE (METERS)', 'OT FACTOR', 'SPOTTING', 'DEVIATION CORRECTION'], [
                      ('4,000', '4', '45R', 'LEFT 180'),
                      ('2,500', '2', '100L', 'RIGHT 200'),
                      ('3,400', '3', '55L', 'RIGHT 160'),
                      ('1,500', '2', '20R', 'LEFT 40'),
                      ('700', '0.7', '45L', 'RIGHT 30'),
                  ], foot='Legend. L—left OT—observer-target R—right',
                  src=['atp30930', 'Table 5-1, p. 5-6'])

OBS_LINEUP = KB('Observer Lineup', [
    ('', '“__________, this is _____________with observer lineup. Over”', '(JTAC C/S) (JFO C/S)'),
    ('', 'Only to JTAC: “My position is _____________________”', '(i.e., grid and/ or reference point)'),
    ('', '“I am in ________________________, located ___________________from target area,', '(Overwatch, Convoy, Defensive, etc.) (direction and distance m/km)'),
    ('', 'marked by ______. I have ______ targets for CAS.', '(Friendly mark type) (Number of)'),
    ('', 'My specialized equipment is ______. Over.”', '(PSS-SOF, LTD w/JFO PRF code, LRF, GPS, IR Pointer, etc.)'),
], note='Figure V-15', verify=False, src=['jp3093', 'Fig. V-15, p. V-63'])

JFO_BRIEF = KB('Joint Fires Observer Target Brief', [
    ('Line 4', 'Target Elevation (ft MSL)'),
    ('Line 5', 'Target Description'),
    ('Line 6', 'Target Location'),
    ('Line 7', 'Target Mark'),
    ('Line 8', 'Friendlies'),
    ('', '"Advise ready for remarks"'),
    ('', 'FAH'), ('', 'LTL/PTL'), ('', 'Threat Direction/Distance'), ('', 'SEAD Int/Cont/Non-Stan'),
    ('', 'GTL/LOF Max Ord'), ('', 'Restrictions'), ('', 'TOT'),
], note='Figure V-16', src=['jp3093', 'Fig. V-16, p. V-64'])

GUNSHIP_CFF = KB('Special Operations Forces Gunship Call for Fire', [
    ('1', 'Observer/Warning Order: “_________ , this is _________, Fire Mission, Over."', '(aircraft C/S) (observer C/S)'),
    ('2', 'Friendly Location/Mark: “My position _______________ Marked by __________________________________, Over.”', '(TRP, grid, etc.) (strobe, beacon, IR Strobe, etc.)'),
    ('3', 'Target Location: “___________________________________.”', '(magnetic bearing and range [meters], TRP, grid, etc.)'),
    ('4', 'Target Description/Mark: “Marked by_______________, Over.”', '(target description) (IR pointer, tracer, etc.)'),
    ('5', 'Remarks: “___________________________________________.”', '(threats, danger close clearance, restrictions, at my command, etc.)'),
    ('AR 1', 'Clearance: Transmission of the fire mission is clearance to fire (unless Danger Close). For closer fire, the ground force commander must accept responsibility for increased risk. State “Cleared Danger Close” (with commander\'s initials) on line 5. This clearance may be preplanned.'),
    ('AR 2', 'At my command: For positive control of a gunship, state “At My Command” on line 5. The gunship will call “Ready to Fire” when ready.'),
], note='Figure III-32 · AR = As Required', verify=False, src=['jp3093', 'Fig. III-32, p. III-105'])

GUNSHIP_ADJ = KB('Adjusting Special Operations Forces Gunship Fire', [
    ('•', 'If significant miss distance or wrong target, adjust round impact by giving range (meters) and cardinal direction (north, south, east, west).'),
    ('•', 'Marking/confirming targets can also be accomplished using the laser pointer (Sparkle).'),
    ('•', 'To move Sparkle, say “MOVE SPARKLE 300 METERS WEST” or “ROLL SPARKLE 100 METERS EAST”.'),
    ('•', 'Once Sparkle is over target, say “FREEZE SPARKLE” (if you say “CEASE SPARKLE,” the gunship will turn it off).'),
    ('', 'Don’ts'),
    ('1', 'Do not ask the gunship to identify colors at night.'),
    ('2', 'Do not reference clock positions.'),
    ('3', 'Do not pass run-in headings/no-fire headings (give no-fire areas and friendly troop positions only).'),
    ('4', 'Do not correct left/right or short/long.'),
], note='Figure III-33', src=['jp3093', 'Fig. III-33, p. III-107'])

MODULE = dict(
    id='m11', nr=11, file='11-indirect-fire.js',
    title='Indirect Fire, Call for Fire and the JFO',
    summary='The call for fire and its six elements, methods of target location, method of engagement and control, adjustment of fire with the OT factor, danger close and creeping fire, JFO integration and the SOF gunship call for fire.',
    sections=[
        dict(id='m11s1', title='Call for Fire: Six Elements and Warning Order', items=[
            Q('atp30930', '4-1. A call for fire is a request for fire', 'It is a request for fire, not an order.'),
            Q('atp30930', '4-8. The six elements of a call for fire include:'),
            Q('atp30930', '4-9. This element tells the FDC who is calling for fire.'),
            Q('atp30930', '4-10. The warning order clears the net for the fire mission.'),
            Q('atp30930', '4-11. The warning order begins with one of the following mission types'),
            Q('atp30930', '4-12. When the observer believes the situation requires an adjusting round'),
            Q('atp30930', '4-13. The observer should always strive for first round fire for effect.'),
            Q('atp30930', '4-14. To quickly bring fire on a target that is not active'),
            Q('atp30930', '4-15. When engaging a planned target or target of opportunity'),
        ]),
        dict(id='m11s2', title='Target Location and Target Description', items=[
            Q('atp30930', '4-18. Methods of target location include grid, laser grid, polar plot'),
            Q('atp30930', '4-19. The observer sends the most accurate target location possible.', 'since the FDC does not need the direction to locate the target.'),
            Q('atp30930', '4-20. Grid is the standard method of target location'),
            NOTE('tip', 'Note', Q('atp30930', 'Note. A mission is not a laser grid mission just because the observer used a laser')),
            Q('atp30930', '4-23. In a polar plot mission, the word polar in the warning order', 'relative to the observer\'s location.'),
            Q('atp30930', '4-27. In a shift from a known point mission'),
            Q('atp30930', '4-29. The observer must describe the target in enough detail'),
        ]),
        dict(id='m11s3', title='Method of Engagement, Fire and Control', items=[
            Q('atp30930', '4-30. The observer may indicate how to attack the target.'),
            Q('atp30930', '4-34. DANGER CLOSE is included in the method of engagement'),
            Q('atp30930', '4-35. MARK is included in the method of engagement'),
            Q('atp30930', '4-46. The method of fire and control element indicates'),
            Q('atp30930', '4-50. If the observer wishes to control the time of delivery of fire', 'until the observer announces CANCEL AT MY COMMAND, OVER.'),
            Q('atp30930', '4-53. The observer may tell the FDC when the rounds are to impact by requesting TIME ON TARGET'),
            Q('atp30930', '4-54. The observer may tell the FDC when the rounds are to impact by requesting TIME TO TARGET'),
            Q('atp30930', '4-59. Use CHECK FIRING to cause an immediate halt in firing.'),
            Q('atp30930', '4-63. Send SPLASH at the observer\'s request.'),
            Q('atp30930', '4-66. Observers or FDC personnel sometimes make errors'),
            Q('atp30930', '4-68. After the FDC receives the call for fire'),
            CFF_GRID,
        ]),
        dict(id='m11s4', title='Adjustment of Fire and the OT Factor', items=[
            Q('atp30930', '5-2. Spotting is the observer\'s determination of the location of the burst'),
            Q('atp30930', '5-12. After making a spotting, the observer must send corrections'),
            Q('atp30930', '5-13. The distance, in meters, the burst is to be moved'),
            Q('atp30930', 'Example Observer-target range = 4,500 meters.'),
            Q('atp30930', '5-15. For an observer-target range less than 1,000 meters'),
            Q('atp30930', 'Example Observer-target range =800 meter.'),
            Q('atp30930', '5-16. Announce the computed deviation correction to the FDC', 'The correction is opposite the spotting.'),
            DEV_TABLE,
            NOTE('tip', 'Note', Q('atp30930', 'Note. Table 5-1 expresses 1,500 and 2,500 meters to the nearest even OT factor')),
            Q('atp30930', '5-19. When making a range correction, the observer attempts to "add" or "drop"'),
        ]),
        dict(id='m11s5', title='Adjustment Techniques, Danger Close and Creeping Fire', items=[
            Q('atp30930', '5-44. Four techniques can be used to conduct area adjustment fires:', 'minimize collateral damage.'),
            Q('atp30930', '5-46. After the first definite range spotting is determined'),
            Q('atp30930', 'Example The first round (1) impacts approximately 35 mils right and 100 meters short', n=2),
            Q('atp30930', '5-50. Unlike the preceding two adjustment techniques'),
            Q('atp30930', '5-27. If the adjustment of fires brings impacting rounds within danger close distance'),
            Q('atp30930', '5-51. Use the creeping fire method of adjustment during danger close missions.'),
            Q('jp3093', 'danger close. In close air support, artillery, mortar, and naval gunfire support fires'),
        ]),
        dict(id='m11s6', title='JFO: Role and Observer Lineup', items=[
            Q('jp3093', 'joint fires observer. A trained Service member who can request, adjust, and control surface-to-surface fires'),
            Q('jp3093', '(5) JFO. A JFO is a qualified and certified Service member'),
            Q('jp3093', '6. Joint Fires Observer Integration a. JFO Action (1) Once established'),
            OBS_LINEUP,
            Q('jp3093', '1. The JFO should be prepared to describe how the target coordinates were derived', 'Friendly grid coordinates should not be passed on an unsecure net.'),
            Q('jp3093', '(2) Depending on the tactical situation, the JFO situation update brief', n=2),
        ]),
        dict(id='m11s7', title='JFO Target Brief, Correlation and Execution', items=[
            Q('jp3093', '(a) JFO Target Brief. When the decision has been made to attack the target using CAS'),
            JFO_BRIEF,
            Q('jp3093', '1. If any lines between 4 and 8 are omitted from the brief', n=5),
            Q('jp3093', '(4) After the JFO target brief, the JTAC will pass instructions'),
            Q('jp3093', '(5) The JTAC will direct the JFO to switch to the TAD frequency'),
            Q('jp3093', 'b. Target Correlation. Target correlation can occur either between the JFO and the JTAC'),
            Q('jp3093', '(1) JFO to JTAC Correlation (a) While not required', n=5),
            Q('jp3093', '(2) JFO to Aircrew Correlation (a) JFO must be on TAD frequency.', n=6),
            Q('jp3093', '(3) While the JFO will not issue weapons release authority'),
            Q('jp3093', '(k) BDA. JTACs working with a JFO in a Type 2 control scenario'),
        ]),
        dict(id='m11s8', title='SOF Gunship Call for Fire', items=[
            Q('jp3093', 'The SOF gunship is a uniquely capable CAS platform.', 'or when pre-coordinated for gun engagements.'),
            GUNSHIP_CFF,
            Q('jp3093', '(5) SOF Gunship Call for Fire. SOF gunship aircrews use the SOF gunship call for fire'),
            GUNSHIP_ADJ,
            Q('jp3093', '(3) Considerations for Close-In Fires. Due to the accuracy of the gunship fire control system'),
            Q('jp3093', '(c) Due to the combination of precision and low-yield munitions employed by this platform'),
            Q('jp3093', '(5) Procedures. One factor that distinguishes AC-130H/U SOF gunships'),
        ]),
    ],
    atp=[
        'Check how the ATP integrates surface fires and JFOs with CAS (Type 2/3, JFO target brief).',
        'Compare the NATO observer lineup and JFO brief with Figures V-15 and V-16.',
        'Check the ATP danger close definition for surface fires and CAS.',
    ],
    jfire=[
        'Find the JFIRE call for fire format and adjustment procedures (no content into this app).',
        'Find the JFIRE risk-estimate distances for surface fires (ATP 3-09.30 para 4-34 refers to ATP 3-09.32).',
    ],
)
