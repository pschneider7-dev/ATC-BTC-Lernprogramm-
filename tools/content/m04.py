from lib import Q, H, KB, NOTE

FIG_III_6 = KB('Terminal Attack Controller Clearance Calls', [
    ('ABORT', 'Cease action/attack/event/mission.'),
    ('CLEARED HOT', 'Type 1 and 2 close air support terminal attack control clearance to release ordnance on this pass.'),
    ('CONTINUE', 'Continue present maneuver, does not imply a change in clearance to engage or expend ordnance.'),
    ('CONTINUE DRY', 'Continue present maneuver, ordnance release not authorized. Used to provide approval to aircraft to continue the pass without expending ordnance during Type 1, 2, or 3 control.',
     '(Joint terminal attack controller must use “Type 3, CONTINUE DRY” for dry Type 3 control.)'),
    ('CLEARED TO ENGAGE', 'Type 3 close air support terminal attack control clearance. Attack aircraft or flight may initiate attacks within the parameters imposed by the joint terminal attack controller.'),
], note='Figure III-6',
    foot='WARNING The word CLEARED will only be used when ordnance is actually to be delivered. This will minimize the chances of dropping ordnance on dry passes, further reducing the risk of friendly fire incidents. Nonstandard calls must be avoided at all times.',
    src=['jp3093', 'Fig. III-6, p. III-40'])

FIG_III_7 = KB('Summary of Types of Control and Methods of Attack', [
    ('Type 1', 'JTAC/FAC(A) will visually acquire the target and the attacking aircraft during the terminal phase of an attack, prior to weapons release, and assess attack aircraft geometry while maintaining control of individual attacks.'),
    ('Type 2', 'JTAC/FAC(A) will utilize other measures to mitigate risk while maintaining control of individual attacks.'),
    ('Type 3', 'JTAC/FAC(A) will utilize other measures to mitigate risk and assesses that the measures in place will allow multiple attacks within the same engagement.'),
    ('BOT', 'Aircraft/aircrew will acquire the target or intended aimpoint using the best method available.'),
    ('BOC', 'Aircraft/aircrew will employ weapons on the specified coordinates given in the CAS brief.'),
], note='Figure III-7', src=['jp3093', 'Fig. III-7, p. III-47'])

MODULE = dict(
    id='m04', nr=4, file='04-types-of-control.js',
    title='Types of Control and Methods of Attack',
    summary='Type 1, 2 and 3 control with their procedures, bomb on target and bomb on coordinate, clearance calls, weapons release authority and post launch abort.',
    sections=[
        dict(id='m04s1', title='Types of Control', items=[
            Q('jp3093', '12. Types of Control and Methods of Attack a. Types of Control.', maxlen=6000),
            NOTE('warn', 'Note', Q('jp3093', 'Note: Any change to the type of TAC should be coordinated')),
            Q('jp3093', '(2) JTACs/FAC(A)s will provide the type of control and method of attack as part of the game plan.'),
        ]),
        dict(id='m04s2', title='Type 1 Control', items=[
            Q('jp3093', '(1) Type 1 Control (a) Type 1 control is used when'),
            NOTE('warn', 'Note', Q('jp3093', 'Note: Due to the guidance of GPS or inertial navigation systems (INS) weapons')),
            Q('jp3093', '(b) Type 1 control procedures are as follows:', n=12),
        ]),
        dict(id='m04s3', title='Type 2 Control', items=[
            Q('jp3093', 'Type 2 control is used when the joint terminal attack controller (JTAC)/forward air controller (airborne) (FAC[A]) requires control', n=3),
            Q('jp3093', '(2) Type 2 Control (a) The JTAC/FAC(A) must visually acquire the target'),
            Q('jp3093', '(b) Type 2 control procedures are as follows:', n=9),
        ]),
        dict(id='m04s4', title='Type 3 Control', items=[
            Q('jp3093', '(3) Type 3 Control (a) Type 3 control is used when'),
            Q('jp3093', '(b) The JTAC/FAC(A) must visually acquire the target or utilize another asset with accurate real-time targeting information. While not required'),
            Q('jp3093', '(c) Type 3 control procedures are as follows:', n=10),
        ]),
        dict(id='m04s5', title='Methods of Attack: BOT and BOC', items=[
            Q('jp3093', 'b. Methods of Attack. The method of attack and type of control are separate'),
            FIG_III_7,
            Q('jp3093', '(1) BOT and BOC. JTACs/FAC(A)s will state the method of attack', 'potentially cause friendly fire or collateral damage.'),
            Q('jp3093', '(a) For BOT missions, only the lead aircraft is required to read back', n=2),
            Q('jp3093', '(2) A BOC attack is used when the JTAC/FAC(A) determines', 'time is not wasted conducting targeting confirmation.'),
            Q('jp3093', 'BOMB ON COORDINATE ATTACK EXAMPLES INCLUDE:', n=5),
            Q('jp3093', 'Aircrew will not modify coordinates once read back.', 'aircrew readback will be from the weapon or aircraft system.'),
            Q('jp3093', '(3) A BOT attack requires that the JTAC/FAC(A)’s intended target or mark', 'or when TALLY/CONTACT/CAPTURED by the aircrew.'),
            Q('jp3093', 'BOMB ON TARGET EXAMPLES INCLUDE:', n=6),
        ]),
        dict(id='m04s6', title='Weapons Release Authority and Clearance Calls', items=[
            Q('jp3093', 'f. Weapons Release Authority. The intent is to offer the lowest level supported commander', 'the authority to provide the following clearance calls to attacking aircraft:'),
            FIG_III_6,
            Q('jp3093', '(1) ABORT. Term used by a JTAC/FAC(A) during all types of control', 'prior to weapons release.'),
            Q('jp3093', '(2) CLEARED HOT. Term used by a JTAC/FAC(A) during Type 1 and 2 control', n=4),
        ]),
        dict(id='m04s7', title='Post Launch Abort', items=[
            Q('jp3093', 'g. Post Launch Abort (PLA) Considerations (1)'),
            NOTE('crit', 'Warning', Q('jp3093', 'Warning: Moving desired point of impact location away from intended target')),
            Q('jp3093', '(2) The supported commander must authorize the use of PLA', maxlen=6000),
            Q('jp3093', '(3) Procedures for PLA are as follows:', n=8),
            NOTE('warn', 'Note', Q('jp3093', 'Note: Any delay by the launch platform prior to PLA execution')),
        ]),
    ],
    atp=[
        'Compare the ATP definitions of Type 1, 2 and 3 control word for word with JP 3-09.3.',
        'Check the ATP wording for BOT and BOC and who reads back what.',
        'Compare the clearance calls table in the ATP (ABORT, CLEARED HOT, CONTINUE, CONTINUE DRY, CLEARED TO ENGAGE).',
        'Check whether the ATP contains post launch abort procedures.',
    ],
    jfire=[
        'Find which weapons the JFIRE lists as capable of post launch abort.',
    ],
)
