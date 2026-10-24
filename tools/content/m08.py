from lib import Q, H, KB, NOTE

LASER_BREVITY = KB('Standard Laser Brevity Terms', [
    ('TEN SECONDS', 'Standby for LASER ON call in approximately 10 seconds.'),
    ('LASER ON', 'Start/ acknowledge laser designation.'),
    ('SHIFT (direction/TN)', 'Shift laser/infrared/radar/device energy/aimpoint.', 'Note: Can be used to shift from the offset position onto the target. Also used during multi-aircraft attack to shift laser energy or target assignments.'),
    ('SPOT', 'Acquisition of laser designation'),
    ('CEASE LASER', 'Discontinue lasing.'),
    ('DEAD EYE', 'Laser designator system inoperative.'),
    ('NEGATIVE LASER', 'Laser energy has not been acquired.'),
    ('LASING', 'The speaker is firing the laser.'),
    ('STARE (w/ laser code and reference point)', 'Cue the laser spot search/tracker function on the specified laser code in relation to the specified reference point.', 'Reference point may include the following: steerpoint, geographic reference, bearing and range, or data link point.'),
], note='Figure III-21', src=['jp3093', 'Fig. III-21, p. III-79'])

IR_BREVITY = KB('Night Infrared Close Air Support Brevity Terms', [
    ('SPARKLE', 'Mark/marking target by infrared (IR) pointer.', '(Joint terminal attack controller [JTAC] marks the target with an IR pointer. Can be initiated by JTAC or aircrew. Proper aircrew response is CONTACT SPARKLE or NO JOY.)'),
    ('SNAKE', 'Oscillate an IR pointer in a figure eight about a target.', 'Proper aircrew response is CONTACT SPARKLE, STEADY, or NO JOY.)'),
    ('PULSE', 'Illuminate/illuminating a position with flashing IR energy.'),
    ('STEADY', 'Stop oscillation of IR pointer.', '(JTAC steadies the beam after a SNAKE or PULSE call. This can aid in verifying that the aircrew is looking at the proper IR pointer.)'),
    ('CEASE SPARKLE', 'Discontinue sparkle activity.', '(JTAC turns the beam off. This can aid in verifying that the aircrew is looking at the proper IR pointer, especially if followed with a SPARKLE call.)'),
    ('ROPE', 'Circling an IR pointer around an aircraft to help the aircraft identify the friendly ground position.', 'Caution: This technique may damage night vision devices.'),
    ('CONTACT SPARKLE', 'Acknowledges sighting of sparkle.', 'Once the aircrew sees the IR energy and is able to discern between the friendly and target end of the pointer, a CONTACT SPARKLE call may be made.'),
    ('MATCH SPARKLE', 'Overlay requested target designator type.', '(Directive term for a second party to overlay an IR mark on an existing mark.)'),
], note='Figure III-22', foot='Note: ROPE is not recommended for rotary wing aircraft.', src=['jp3093', 'Fig. III-22, p. III-80'])

MODULE = dict(
    id='m08', nr=8, file='08-laser.js',
    title='Laser, IR and Inertially Aided Munitions',
    summary='The five laser considerations, environmental effects, codes, designators and LSTs, safety zone and optimal attack zone, Hellfire, IAMs, laser and IR brevity, third-party lasing and IR pointers.',
    sections=[
        dict(id='m08s1', title='Laser-Guided Systems: Basic Considerations', items=[
            Q('jp3093', 'a. Laser-Guided Systems. Laser-guided systems provide the joint force'),
            Q('jp3093', '(1) Basic Considerations. There are five basic considerations', n=6),
            Q('jp3093', '(b) False Seeker Lock-On. Laser seekers may occasionally lock onto'),
            Q('jp3093', '(3) Beam Divergence, Target Size, and Spillover.'),
            Q('jp3093', '(4) Target Reflection. Most surfaces have a mixture', 'reflect laser energy in only one direction.'),
        ]),
        dict(id='m08s2', title='Designators, LSTs and Laser Codes', items=[
            Q('jp3093', '(5) Laser designation operations are divided into two primary categories', n=2),
            NOTE('crit', 'WARNING', Q('jp3093', 'WARNING Aircrews shall not use LSTs as the sole source for target identification.')),
            Q('jp3093', '(b) Laser Target Designators. GLTDs are employed by ground forces', 'normally employed below 30,000 ft above ground level (AGL).'),
            NOTE('warn', 'Note', Q('jp3093', 'Note: The PRF of LGBs is normally only adjustable prior to flight')),
            Q('jp3093', '(c) LST. LSTs must be set to the same code as the coded LTD', 'the aircrew can select PRF codes for the LST while in flight.'),
            Q('jp3093', 'The JTAC/FAC(A) will use the laser code passed by aircrew set in any LGWs'),
        ]),
        dict(id='m08s3', title='Safety Zone and Optimal Attack Zone', items=[
            Q('jp3093', '(7) Laser Procedures (a) Final Attack Headings.'),
            NOTE('warn', 'Note', Q('jp3093', 'Note: The optimal attack zone must be used when a ground LTD is used')),
            Q('jp3093', 'The maximum allowable attack angle (laser-to-target/seeker-to-target) depends upon', 'the seeker will not receive enough reflected energy to sense the laser spot.'),
            Q('jp3093', '(e) Laser Designation Time. To avoid missing the target', 'will cause impacts short of the target.'),
        ]),
        dict(id='m08s4', title='Laser and IR Brevity', items=[
            LASER_BREVITY,
            Q('jp3093', '5. IR Pointers. JTACs/FAC(A)s may use IR pointers and other IR devices'),
            IR_BREVITY,
        ]),
        dict(id='m08s5', title='Hellfire and Third-Party Lasing', items=[
            Q('jp3093', '(b) Laser Characteristics. The Hellfire homes in on targets', 'or two designation codes simultaneously.'),
            Q('jp3093', '(e) Target Designator Options. Autonomous and remote', n=3),
            Q('jp3093', '1. LOBL is when the missile seeker locks onto properly coded laser energy', n=2),
            Q('jp3093', '(g) Attacks on Multiple Targets.', 'the aircrew uses a minimum of eight seconds between missiles.'),
            Q('jp3093', '4. Third -Party Lasing. When using an off-board element to host an LGW'),
            Q('jp3093', 'NOTES: (1) Correlation with lasing platform may occur before or after'),
        ]),
        dict(id='m08s6', title='Inertially Aided Munitions', items=[
            Q('jp3093', 'b. IAMs. These weapons rely on a self-contained GPS-aided INS'),
            Q('jp3093', '(1) Advantages (a) Accuracy. When provided three-dimensional target locations', n=5),
            Q('jp3093', '(2) Limitations (a) Moving Targets.', n=3),
            Q('jp3093', '(3) TTP. IAMs have multiple modes of employment', 'Aircrew will not adjust coordinates that are passed and put into the system for any reason.'),
            Q('jp3093', '(b) BOT. Some aircraft can deliver IAMs via self-derived targeting'),
        ]),
    ],
    atp=[
        'Compare the NATO laser safety zone and attack zone (angles) with Figure III-9.',
        'Compare the laser and IR brevity in the ATP with Figures III-21 and III-22.',
        'Check the ATP laser hand-off sequence and who sets the tempo.',
    ],
    jfire=[
        'Find the JFIRE listing of aircraft with LSTs and laser designators.',
        'Find the JFIRE laser code and LGW employment data (no values into this app).',
    ],
)
