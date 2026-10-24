from lib import Q, H, KB, NOTE, RADIO

ABORT_FIG = RADIO([
    ('note', 'Abort Call Illustration (The joint terminal attack controller [JTAC] is “NAIL 11”; the close air support [CAS] attack flight is “SPIKE 41.” SPIKE 41 flight has chosen “BRT” [authenticated “D”] as its abort code.)'),
    ('note', '(During the CAS check-in briefing):'),
    ('AIR', '“NAIL 11, SPIKE 41, abort code BRAVO ROMEO TANGO.”'),
    ('note', 'Action Taken: NAIL 11 notes the correct reply for “BRT” is “D”.'),
    ('note', '(The JTAC calls for an abort):'),
    ('JTAC', '“SPIKE 41, NAIL 11, ABORT DELTA, ABORT DELTA, ABORT DELTA.”'),
    ('note', 'Action Taken: SPIKE 41 aborts the pass.'),
], src=['jp3093', 'Fig. V-11, p. V-47'])

INFLTREP = KB('Inflight Report', [
    ('', 'Aircrew Transmits “ Addressee this is aircraft call sign, INFLTREP, over”'),
    ('', '***Authentication as required***'),
    ('', 'Addressee Responds “This is addressee call sign, INFLTREP.”'),
    ('1', 'Call sign “__________”'),
    ('2', 'Mission Number “________”'),
    ('3', 'Location “ latitude/longitude, grid, place name ”'),
    ('4', 'Time on Target “_________”'),
    ('5', 'Results “__________”'),
    ('R', 'Remarks “ Target area weather, significant sightings, essential information ”'),
], note='Figure V-12', verify=False, src=['jp3093', 'Fig. V-12, p. V-50'])

MIR_EX = RADIO([
    ('AIR', '“Redman 14, this is Faction 31, I have mortar point of origin with personnel firing mortars, advise when ready to copy 8-digit grid.”'),
    ('JTAC', '“Faction 31, Redman ready to copy.”'),
    ('AIR', '“Redman 14, elevation 4486 feet, PA 1234 5678.”'),
    ('note', 'JTAC plots the target location, ensures deconfliction of fires and obtains fires approval.'),
    ('JTAC', '“Faction 31, advise when ready for game plan.”'),
    ('AIR', '“Redman, Faction 31 ready.”'),
    ('JTAC', '“Type 2, bomb on target, 1 by GBU-38 instantaneous fuzing from Faction 31, advise when ready for 9-line.”'),
    ('AIR', '“Faction 31, ready to copy.”'),
    ('JTAC', '“Delta 8” “Elevation, 4486 feet, mortar position, PA 1234 5678” “No mark, S 800, Egress, left pull, back to delta 8, block 15-16”'),
    ('AIR', '“Redman, Faction 31, good readback.”'),
    ('note', '- In this situation, since the aircraft originally provided the elevation and target coordinates, the aircraft will confirm that the JTAC has correctly read back lines 4 and 6 when he reads the 9-line.'),
    ('JTAC', '“Faction 31, advise when ready for remarks/restrictions.”'),
    ('AIR', '“Faction 31, ready to copy.”'),
    ('JTAC', '“Make your attacks west to east, report IP inbound. Push when ready.”'),
    ('AIR', '“Faction 31, west to east. Wilco.”'),
    ('note', '- Even though there is no requirement for the aircraft to again read back lines 4 and 6, the lead aircraft is still required to read back the other restrictions given by the JTAC.'),
    ('JTAC', '“Faction 31, good readback.”'),
    ('AIR', '“Faction 31, IN heading 093”'),
    ('JTAC', '“Faction 31, CLEARED HOT.”'),
    ('AIR', '“Faction 31, off, one away, 27 seconds.”'),
    ('JTAC', '“Good impact, proceed back to Delta 8 block 15-16, standby BDA.”'),
], src=['jp3093', 'Multisensor Imagery Reconnaissance to CAS Example, pp. V-53–V-54'])

MODULE = dict(
    id='m13', nr=13, file='13-attack-bda.js',
    title='Attack, Abort, Assessment and BDA',
    summary='Monitoring the attack timeline, TAD discipline, clearance and abort procedures, assessing effects and reattacks, BDA and SALTR, the inflight report, MIR/ISR to CAS, CAS with non-JTAC personnel, FAC(A) integration and personnel recovery.',
    sections=[
        dict(id='m13s1', title='The Attack', items=[
            Q('jp3093', '(9) Attack (a) Throughout a CAS attack, the JTAC must maintain awareness', n=5),
            Q('jp3093', '1. Once an aircraft calls IN, all other calls should be held', n=2),
            Q('jp3093', '(f) Clearance to Drop/Fire. Once the clearance requirements for a particular type of control are met'),
        ]),
        dict(id='m13s2', title='Abort Procedures', items=[
            Q('jp3093', '(g) Abort Procedures. The JTAC/FAC(A) shall direct CAS aircrews to abort'),
            ABORT_FIG,
            Q('jp3093', 'For PLA procedures, see Chapter III “Planning and Requesting,” paragraph 10g'),
        ]),
        dict(id='m13s3', title='Assess Effects and Reattacks', items=[
            Q('jp3093', '(10) Assess Effectiveness of the Attack. Execute reattacks or issue new game plans/CAS briefs as necessary.', 'the JTAC must assess'),
            Q('jp3093', 'whether the commander‘s desired effects were created. This assessment will determine'),
            Q('jp3093', '(a) Obscuration may preclude effect assessment for several minutes.', n=6),
        ]),
        dict(id='m13s4', title='BDA and SALTR', items=[
            Q('jp3093', '(11) BDA (a) BDA is used to update the enemy order of battle.', n=10),
            Q('jp3093', '1. Whenever possible, the JTAC/FAC(A) provides attack flights with the BDA of their attack as they egress.', n=2),
        ]),
        dict(id='m13s5', title='Inflight Report and Egress', items=[
            Q('jp3093', '(f) Aircrew Responsibilities. Use the abbreviated USMTF INFLTREP'),
            INFLTREP,
            Q('jp3093', '(12) Routing/Safety of Flight. JTACs are responsible for providing routing and safety of flight instructions to aircraft as they egress.'),
        ]),
        dict(id='m13s6', title='MIR/ISR to CAS', items=[
            Q('jp3093', '3. Multisensor Imagery Reconnaissance and Intelligence, Surveillance, and Reconnaissance in Close Air Support a.'),
            Q('jp3093', 'b. JTACs should strive to remain engaged with the aircrew while they conduct MIR/ISR.', n=2),
            MIR_EX,
        ]),
        dict(id='m13s7', title='CAS with Non-JTAC Personnel', items=[
            Q('jp3093', 'a. In certain circumstances, the ground commander might require air support when a JTAC or FAC(A) is not available', n=3),
            Q('jp3093', '(1) Target elevation.', n=9, after='Ground personnel requiring air support will normally'),
            Q('jp3093', '(3) CAS Execution with Non-JTAC Qualified Personnel.'),
        ]),
        dict(id='m13s8', title='FAC(A) Integration', items=[
            Q('jp3093', '5. Forward Air Controller (Airborne) Integration a. Check-In.', n=3),
            Q('jp3093', 'd. FAC(A) Duties and Responsibilities. It is important for the JTAC and FAC(A)'),
            Q('jp3093', '(1) BRIEF. The FAC(A) will automatically pass information', n=3),
            Q('jp3093', '(4) CONTROL. The FAC(A) will provide final release authority'),
            Q('jp3093', 'g. Marks. The requirement for JTAC clearance for FAC(A) marks'),
            Q('jp3093', 'j. Battle Handover. Prior to the FAC(A) checking out with the JTAC'),
        ]),
        dict(id='m13s9', title='Personnel Recovery', items=[
            Q('jp3093', 'The various CAS controllers occupy a unique location in the operational area', n=2),
        ]),
    ],
    atp=[
        'Compare the NATO abort procedure and abort code handling with Figure V-11.',
        'Check the ATP BDA format and whether it uses SALTR or another report.',
        'Check the ATP procedures for CAS without a JTAC and for FAC(A) integration.',
    ],
    jfire=[
        'Find the JFIRE BDA/INFLTREP format reference (no content into this app).',
    ],
)
