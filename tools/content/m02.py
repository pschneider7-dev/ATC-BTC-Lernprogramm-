from lib import Q, H

MODULE = dict(
    id='m02', nr=2, file='02-c2-requests.js',
    title='Command and Control, Air Tasking and Requests',
    summary='TAGS, ASOC and the CAS nets, the NATO air tasking cycle, preplanned and immediate air support requests and the JTAR (DD Form 1972).',
    sections=[
        dict(id='m02s1', title='The Theater Air-Ground System', items=[
            Q('jp3093', '1. Introduction a. CAS requires an integrated, flexible, and responsive C2 structure'),
            Q('jp3093', 'b. The JFC normally exercises operational control (OPCON) through component commanders.'),
            Q('jp3093', 'c. There is no single C2 structure for CAS operations when engaged in multinational operations.'),
        ]),
        dict(id='m02s2', title='The Air Support Operations Center', items=[
            Q('jp3093', '(4) ASOC. The ASOC is the principal air control agency within the TACS'),
            H('NATO: AJP-3.3'),
            Q('ajp33', '2.40 The air support operations centre.'),
            Q('ajp33', '2.41 The ASOC processes include the following:', 'Launching of ground alert aircraft on call in support of the ground forces, as required.'),
        ]),
        dict(id='m02s3', title='CAS Communications Nets', items=[
            Q('jp3093', '(f) Digital Means for JTAR.'),
            Q('jp3093', '(g) JARN. The JARN is the link between the ASOC and subordinate TACPs'),
            Q('jp3093', '(i) TAD Net. The TAD net provides a means for the control of aircraft.'),
            Q('jp3093', '(j) Inflight Report Net (INFLTREPS).'),
            Q('jp3093', '(k) Guard Net. The guard net provides an emergency distress net for aircraft. Guard further serves as a means for air control agencies to advise aircraft of emergency conditions or serious hazards to flight safety. If able,'),
            Q('jp3093', '(l) TAR Net. The TAR net provides a means for ground maneuver units'),
            Q('jp3093', 'g. Alternate Nets. When communications are lost on the primary nets'),
        ]),
        dict(id='m02s4', title='The NATO Air Tasking Cycle', items=[
            Q('ajp33', '4.15 The ATO articulates tasking for air operations for a specific time, normally 24 hours.'),
            Q('ajp33', 'Phase 1 – Strategy & plan development', n=2),
            Q('ajp33', 'Phase 2 – Scheme of manoeuvre & target development', n=2),
            Q('ajp33', 'Phase 3 – Weaponeering and air allocation', n=2),
            Q('ajp33', 'Phase 4 - Air tasking order development', n=2),
            Q('ajp33', 'Phase 5 – Execution', n=2),
            Q('ajp33', 'Phase 6 – Assessment', n=3),
        ]),
        dict(id='m02s5', title='Preplanned and Immediate Requests', items=[
            Q('jp3093', 'Air support requests are used to identify the supported commander’s requirements for CAS'),
            Q('jp3093', 'a. Preplanned Requests. Those CAS requirements foreseen early enough'),
            Q('jp3093', '(1) Precedence. Each preplanned request is assigned precedence by the requestor'),
            Q('jp3093', '(3) Timeliness. A high level of detail is not always available prior to the ATO cutoff time.'),
            Q('jp3093', 'b. Immediate Air Support Requests. Immediate air support requests arise from situations'),
            Q('jp3093', '(1) Conventional Force Submission.', 'they approve or deny the request.'),
            Q('jp3093', 'Silence by intermediate HQ implies consent to the request.', 'Silence by intermediate HQ implies consent to the request.'),
            Q('jp3093', '(3) Priority. For immediate requests, each JTAR is assigned a priority.', n=5),
        ]),
        dict(id='m02s6', title='The JTAR (DD Form 1972)', items=[
            Q('jp3093', '(5) Request Format. The JTAR (DD 1972) is used for requesting CAS'),
            Q('jp3093', '(b) Mission data is passed using the JTAR Section III format', n=9),
            Q('jp3093', 'Line 3. TARGET IS/NUMBER OF'),
            Q('jp3093', 'Line 7. FINAL CONTROL.', n=5),
            Q('jp3093', 'Line 8. REMARKS.', n=3),
        ]),
    ],
    atp=[
        'Compare the NATO description of the ASOC and the air tasking cycle in the ATP with AJP-3.3.',
        'Note the request procedure and the request form the ATP prescribes (ASR/JTAR equivalent).',
        'Check which nets and frequencies the ATP names for CAS (e.g., TAD equivalent).',
    ],
    jfire=[
        'Find the JFIRE table of radios on CAS-capable aircraft and ground units (JP 3-09.3 refers to it).',
    ],
)
