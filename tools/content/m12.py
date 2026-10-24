from lib import Q, H, KB, NOTE, RADIO

RW_5LINE = KB('Rotary-Wing Close Air Support 5-Line Brief', [
    ('1', 'Observer/Warning Order/Game plan', '“(Aircraft Call Sign) _, (JTAC Call Sign) _____________, 5-line, Type (1, 2, or 3) C, MOA (BOC or BOT), (Ordnance Requested)”'),
    ('2', 'Friendly Location/Mark', '“My position ____, marked by ____“ (TRP, Grid, etc.) (VS-17, Beacon, IR Strobe, etc.)'),
    ('3', 'Target location', '“Target location, _________________________” (Bearing [magnetic] and Range [meters], TRP, Grid, etc.)'),
    ('4', 'Target Description/Mark', '“____, marked by ____“ (Target Description) (IR sparkle, Tracer, etc.)'),
    ('5', 'Remarks/Restrictions'),
    ('*', 'Final Attack Headings (FAHs)', '', True),
    ('', 'LTL/PTL'),
    ('', 'Surface-to-air threat, location and type of SEAD'),
    ('*', 'ACAs', '', True),
    ('*', 'Danger Close and initials', '', True),
    ('', 'Additional calls requested'),
    ('', 'Additional remarks (GTL, weather, hazards, friendly mark)'),
    ('*', 'TOT/TTT', '', True),
], note='Figure III-27', verify=False,
    foot='Do not transmit line numbers. Units of measure are standard unless briefed. Restrictions are mandatory readback (*). JTAC may request additional readback. The RW CAS 5-line should be passed as one transmission. If the restrictions portion is lengthy, it may be a separate transmission.',
    src=['jp3093', 'Fig. III-27, p. III-95'])

RW_5LINE_EX = RADIO([
    ('JTAC', '“Deuce 31, Broadsword 11, 5-line, Type 2 control, BOT, rockets and guns, my position is checkpoint 295 marked by IR strobe, northwest 200, single technical vehicle marked by IR SPARKLE, make all attacks over my right shoulder, left pull, keep all effects of fires west of MSR Clovis.”'),
    ('AIR', '“Deuce 31 copies over your right shoulder, left pull, keep all effects of fires west of MSR Clovis, pushing.”'),
    ('JTAC', '“Deuce 31, CONTINUE.”'),
    ('AIR', '“Deuce 31 and flight, VISUAL, TALLY, IN.”'),
    ('JTAC', '“Deuce 31 and flight, CLEARED HOT.”'),
], src=['jp3093', 'p. III-97'])

MODULE = dict(
    id='m12', nr=12, file='12-platforms.js',
    title='Aircraft Tactics, RW 5-Line, Bombers, UAS and DACAS',
    summary='FW coordinated attacks and altitude tactics, holding patterns, RW altitudes and attack techniques, the RW CAS 5-line, bomber and UAS CAS, FAC(A) and TAC(A) planning, show of force and digitally aided CAS.',
    sections=[
        dict(id='m12s1', title='Fixed-Wing Tactics', items=[
            Q('jp3093', 'This section identifies some basic TTP used by aircrews to conduct CAS.'),
            Q('jp3093', 'a. FW Tactics (1) All-Altitude Tactics (a) Coordinated Attacks.'),
            Q('jp3093', '(b) Type of Attack (Figure III-23). The type of attack is based on the avenue'),
            Q('jp3093', '(c) The following procedural guidelines are considered standard:', n=5),
            Q('jp3093', '(d) Reattacks. The aircrew’s goal is to complete a successful attack on the first pass.'),
            Q('jp3093', '(2) Medium/High Altitude Tactics. Medium/high altitude tactics are flown above approximately 8,000 ft AGL.'),
            Q('jp3093', '(3) Low/Very Low Altitude Tactics. Low/very low altitude tactics are flown below approximately 8,000 ft AGL.'),
        ]),
        dict(id='m12s2', title='Holding Patterns and Ingress', items=[
            Q('jp3093', '(c) Ingress. The higher altitude of the aircraft often makes receiving situation updates'),
            Q('jp3093', '(d) CAS Aircraft Observation and Holding Patterns.', n=4),
        ]),
        dict(id='m12s3', title='Rotary-Wing Tactics', items=[
            Q('jp3093', '(3) Flight Composition. Unlike FW aircraft, RW sections or flights'),
            Q('jp3093', '(4) Operating Altitudes. The following are altitude ranges for RW aircraft:', n=4),
            Q('jp3093', 'a. HAs. HAs may be established throughout the battlefield'),
            Q('jp3093', 'b. BPs. BPs are maneuvering areas containing firing points (FPs) for attack helicopters.'),
            Q('jp3093', '(a) Control. Once the aircrew reaches the BP, the JTAC/FAC(A) or mission commander issues final instructions', n=2),
            Q('jp3093', '1. Hovering Fire. Hovering fire is performed when the aircraft is stationary', 'when standing off in a safe area.'),
            Q('jp3093', '2. Running Fire. Running fire is performed when the aircraft is in level, forward flight.', n=2),
        ]),
        dict(id='m12s4', title='The RW CAS 5-Line', items=[
            Q('jp3093', '16. Rotary-Wing Close Air Support 5-Line a. The RW CAS 5-line brief (Figure III-27)', 'The difference between the RW CAS 5-line and other'),
            RW_5LINE,
            Q('jp3093', '5-line briefs is that the RW CAS 5-line is still considered a CAS brief'),
            Q('jp3093', 'b. By its nature as a friendly-centric brief, the 5-line assumes', n=6),
            Q('jp3093', '(5) Remarks (a) The remarks section should include other information', n=14),
            RW_5LINE_EX,
        ]),
        dict(id='m12s5', title='Bomber CAS', items=[
            Q('jp3093', '17. Planning for Bomber Close Air Support a. En Route.', n=4),
            Q('jp3093', 'c. Attack Phase (1) Target Considerations. Bombers traditionally employ weapons on given coordinates.'),
            Q('jp3093', '(2) Target Marking (a) The preferred technique of target marking is via lasing'),
            Q('jp3093', '(4) Expect level deliveries for all bomber weapon releases.', n=3),
        ]),
        dict(id='m12s6', title='Unmanned Aircraft Systems', items=[
            Q('jp3093', 'a. UAS capabilities vary between different platforms and need to be known'),
            Q('jp3093', '(2) UAS Planning Considerations. UASs, either FW or RW, operate using similar CAS procedures', n=12),
            Q('jp3093', '(3) Armed UAS Tactics. UAS flight crews use either the RW CAS 5-line'),
        ]),
        dict(id='m12s7', title='FAC(A) and TAC(A)', items=[
            Q('jp3093', '23. Forward Air Controller (Airborne) Planning a. FAC(A).'),
            Q('jp3093', 'b. Pre-Mission Planning (1) During mission planning, the TACP/JTAC is responsible', n=6),
            Q('jp3093', 'tactical air coordinator (airborne). An officer who coordinates, from an aircraft'),
            Q('jp3093', '24. Tactical Air Coordinator (Airborne) Planning a. Introduction.'),
            Q('jp3093', '(f) Serve as temporary FAC(A) (if qualified).'),
        ]),
        dict(id='m12s8', title='Show of Force', items=[
            Q('jp3093', '20. Show of Force Considerations a. General.'),
            Q('jp3093', 'b. Reasons for Show of Force. There are several reasons for a JTAC to request a show of force:', n=7),
            NOTE('warn', 'Note', Q('jp3093', 'Note: Show-of-force maneuvers typically require the aircrew to leave sanctuary')),
        ]),
        dict(id='m12s9', title='Digitally Aided CAS (DACAS)', items=[
            Q('jp3093', '21. Digital Information Systems Considerations a. Digitally Aided CAS (DACAS).'),
            Q('jp3093', 'b. DACAS Advantages. Some of the advantages of digital systems include automation'),
            Q('jp3093', 'c. DACAS Limitations. Some disadvantages of digital communications'),
            NOTE('crit', 'WARNING', Q('jp3093', 'Digitally aided close air support (DACAS) has the potential to greatly benefit traditional terminal attack control', n=3)),
            Q('jp3093', 'f. DACAS Terminology (1) DACAS. The machine-to-machine exchange', n=4),
        ]),
    ],
    atp=[
        'Compare the NATO RW CAS brief (5-line) with Figure III-27 and its readbacks.',
        'Check the ATP holding patterns and altitude bands for FW and RW.',
        'Check the ATP procedures for UAS, FAC(A) and TAC(A) and show of force.',
        'Check the ATP DACAS warnings (digital information is not clearance).',
    ],
    jfire=[
        'Find the JFIRE aircraft capability tables (weapons, sensors, data links; no values into this app).',
    ],
)
