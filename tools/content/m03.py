from lib import Q, H

MODULE = dict(
    id='m03', nr=3, file='03-planning-preparation.js',
    title='Planning and Preparation',
    summary='The CAS decision-making process, fire support tasks, terrain, urban and night considerations, battle tracking, tactical risk assessment, collateral damage, rehearsals, pre-combat checks and TACP positioning.',
    sections=[
        dict(id='m03s1', title='CAS in the Decision-Making Process', items=[
            Q('jp3093', 'The CAS decision-making process, as indicated in Figure III-1, is a continuous three-phase cycle'),
            Q('jp3093', 'The CAS decision-making process assists the commander and staff in developing the CAS portion'),
            Q('jp3093', '(2) Step 2: Mission Analysis.', 'Consider mission, enemy, terrain and weather, troops and support available-time available (METT-T).'),
            Q('jp3093', '1. Task. Describes the targeting objectives fires must achieve', n=1),
            Q('jp3093', '2. Purpose. Describes the maneuver or operational purpose for the task.', n=1),
            Q('jp3093', '3. Method. Describe how the task and purpose will be achieved.', n=1),
            Q('jp3093', '4. Effects of Fires. Attempts to quantify the successful accomplishment of the task.', n=2),
            Q('jp3093', '1. Purpose. Addresses exactly what is to be accomplished by fire support', n=4),
        ]),
        dict(id='m03s2', title='Terrain, Urban Environments and Night', items=[
            Q('jp3093', '(6) Jungle/Forested Environment.', n=1),
            Q('jp3093', '(c) Observation/Terminal Attack Control. The dense vegetation of most jungles'),
            Q('jp3093', '(7) CAS in Urban Environments.'),
            Q('jp3093', 'It’s likely that a JTAC/FAC will be marking and engaging targets within 100 meters', 'occur with less than 250 meters between the same.'),
            Q('jp3093', '(d) JTAC Considerations. Tall buildings make it difficult for pilots'),
            Q('jp3093', '3. GRG/Urban Grid System.', n=4),
            Q('jp3093', 'b. Limited Visibility, Night, and Adverse Weather.'),
            Q('jp3093', '(6) Friendly Force Location and CID.'),
        ]),
        dict(id='m03s3', title='Battle Tracking and the Supported/Supporting Relationship', items=[
            Q('jp3093', 'a. Battle Tracking. Battle tracking is the process of building and maintaining', n=7),
            Q('jp3093', 'b. Supported/Supporting Relationship. In a CAS engagement'),
        ]),
        dict(id='m03s4', title='Tactical Risk Assessment', items=[
            Q('jp3093', 'd. Tactical Risk Assessment. In addition to proper battle tracking'),
            Q('jp3093', '(9) Troops in Contact. JTACs/FAC(A)s and aircrews should regard'),
            Q('jp3093', '(10) Risk Estimate Distance (a) Risk estimate distances allow'),
            Q('jp3093', '(b) Danger Close. Ordnance delivery inside the 0.1 percent Pi distance'),
        ]),
        dict(id='m03s5', title='Collateral Damage', items=[
            Q('jp3093', '(b) Methodology. Per CJCSI 3160.01', 'must still be considered for employment of these direct-fire weapons systems.'),
            Q('jp3093', '1. Can I make a PID of the object I want to affect?', n=5),
            Q('jp3093', '(c) JTAC/FAC(A) Responsibilities. All CAS planners employ available resources'),
            Q('jp3093', 'b. JTACs/FAC(A)s can select ordnance with lower explosive yield'),
            Q('jp3093', 'c. JTACs/FAC(A)s must take not only friendly locations but collateral concerns into account'),
        ]),
        dict(id='m03s6', title='Rehearsals, Pre-Combat Checks and TACP Positioning', items=[
            Q('jp3093', 'd. Preparation includes COE briefs, COE mission rehearsals'),
            Q('jp3093', '2. Rehearsals a. The rehearsal is one of the most overlooked aspects'),
            Q('jp3093', 'd. Fire Support Rehearsal. Fire support rehearsals focus on the execution', 'The fire support rehearsal is the most critical part of the preparation phase of an operation.'),
            Q('jp3093', '(2) Mission Essential Equipment. Ensure all required equipment is full mission-capable', 'authentication/crypto materials, and GPS.'),
            Q('jp3093', 'b. Positioning. The AO/ALO recommends initial observation positions of TACPs', n=4),
        ]),
    ],
    atp=[
        'Compare the planning steps and the fire support task (task, purpose, method, effects) with the ATP.',
        'Check how the ATP describes the tactical risk assessment and troops in contact.',
        'Note the ATP wording on danger close and who accepts the risk.',
        'Compare the JTAC equipment and pre-combat checks listed in the ATP.',
    ],
    jfire=[
        'Look up how the JFIRE presents risk-estimate distances and under which conditions they were computed (no values into this app).',
        'Find the JFIRE information on illumination flares and night marking devices.',
    ],
)
