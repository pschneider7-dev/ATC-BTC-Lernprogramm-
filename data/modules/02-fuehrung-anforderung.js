(function () {
  var LP = window.LP;
  LP.modules.push({
    id: 'm02',
    nr: 2,
    title: 'Führung, Luftlagezyklus und Anforderung',
    summary: 'Führungssysteme und -stellen für CAS (TAGS, ASOC, TACP), Funknetze, Air Tasking Cycle mit ATO/ACO/SPINS, vorgeplante und sofortige Anforderungen sowie der JTAR.',
    goals: [
      'Die wichtigsten Führungsstellen für CAS und ihre Aufgaben nennen',
      'JARN und TAD-Netz unterscheiden',
      'Die sechs Phasen des NATO Air Tasking Cycle aufzählen',
      'Vorgeplante und sofortige Anforderungen sowie Precedence und Priority unterscheiden',
      'Aufbau und Inhalt des JTAR (DD Form 1972) kennen'
    ],
    sections: [
      {
        id: 'm02s1',
        title: 'Führungssysteme im Überblick',
        html:
          '<p>CAS braucht eine integrierte, flexible Führungsstruktur und verlässliche Kommunikation. Die meisten CAS-Einsätze werden über den Stab des Luftkomponentenbefehlshabers (JFACC bzw. NATO: CFACC) im Joint Air Operations Center zugeteilt und beauftragt.</p>' +
          '<p>Die Führungssysteme der Teilstreitkräfte bilden zusammen das <strong>Theater Air-Ground System (TAGS)</strong>:</p>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>System</th><th>Träger</th><th>Wichtigste Stelle für direkte Luftunterstützung</th></tr></thead><tbody>' +
          '<tr><td>TACS – Theater Air Control System</td><td>US Air Force</td><td>ASOC (Air Support Operations Center)</td></tr>' +
          '<tr><td>AAGS – Army Air-Ground System</td><td>US Army</td><td>Fires Cell, JAGIC (zusammen mit ASOC)</td></tr>' +
          '<tr><td>MACCS – Marine Air Command and Control System</td><td>US Marine Corps</td><td>DASC (Direct Air Support Center)</td></tr>' +
          '<tr><td>NTACS – Navy Tactical Air Control System</td><td>US Navy</td><td>Navy TACC</td></tr>' +
          '<tr><td>SOAGS – Special Operations Air-Ground System</td><td>Spezialkräfte</td><td>JSOAC</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Weitere Stellen</h3>' +
          '<dl>' +
          '<dt>CRC</dt><dd>Control and Reporting Center: bodengestützte Luftraumkontrolle und Luftverteidigung; sichere Durchführung, Radarkontrolle und Überwachung für CAS-Luftfahrzeuge im Transit.</dd>' +
          '<dt>AWACS</dt><dd>Luftgestützte Führung: sichere Durchführung, Radarkontrolle, Bedrohungswarnung, Staffelung („stacking“) im Einsatzraum.</dd>' +
          '<dt>JSTARS</dt><dd>Bodenlage und Zieldaten (Ground Moving Target Indicator), kann TAC(A)-Funktionen übernehmen.</dd>' +
          '<dt>BCD</dt><dd>Battlefield Coordination Detachment: Verbindungselement des Heeres im Luftoperationszentrum; bearbeitet Luftunterstützungsanforderungen des Heeres.</dd>' +
          '<dt>JAGIC</dt><dd>Joint Air Ground Integration Center: Zusammenwirken von Fires Cell, Luftraumelement, Heeresflieger, TACP und ASOC auf Divisionsebene.</dd>' +
          '</dl>' +
          LP.callout('nato', 'NATO-Begriffe (AJP-3.3)', 'Der CFACC führt die Luftkomponente über ein JFAC HQ. Eine <strong>AOCC</strong> (Air Operations Coordination Centre) wird bei der Land- oder Seekomponente eingerichtet und unterstützt die Planung (3 Tage und mehr), führt aber keine laufende Operation. Für die laufende Führung direkter Luftunterstützung kann eine <strong>ASOC</strong> eingerichtet werden.'),
        src: [['jp3093', 'Kap. II, Abs. 1–5'], ['ajp33', 'Abs. 2.39–2.42']]
      },
      {
        id: 'm02s2',
        title: 'ASOC und TACP',
        html:
          '<h3>Air Support Operations Center (ASOC)</h3>' +
          '<p>Die ASOC ist die zentrale Stelle zur Führung von Luftoperationen, die Bodentruppen direkt unterstützen. Sie ist eine Verlängerung des Luftoperationszentrums und liegt meist beim taktischen Gefechtsstand von Korps oder Division. Ihre Aufgaben nach NATO-Doktrin:</p>' +
          '<ol>' +
          '<li>Zuweisung angreifender Luftfahrzeuge an JTAC</li>' +
          '<li>Bearbeitung von Sofortanforderungen (Immediate Air Support Requests)</li>' +
          '<li>Koordination geplanter (scheduled) und abrufbarer (on-call) CAS-Einsätze sowie des Durchflugs durch ihren Luftraum</li>' +
          '<li>bei Delegation: Umsteuern von Luftfahrzeugen in der Luft (retarget, retask, redirect)</li>' +
          '<li>Aktualisieren von Zielen</li>' +
          '<li>Auslösen von Luftfahrzeugen in Bodenbereitschaft (Ground Alert)</li>' +
          '</ol>' +
          '<p>Die ASOC ist Netzleitstelle (NCS) des <strong>JARN</strong> und des <strong>TAD-Netzes</strong>. Das USMC-Gegenstück ist das <strong>DASC</strong>.</p>' +
          '<h3>Tactical Air Control Party (TACP)</h3>' +
          '<p>Die TACP ist das wichtigste Luft-Verbindungselement bei den Bodentruppen. Ihre zwei Hauptaufgaben:</p>' +
          '<ol><li>den Kommandeur zu Fähigkeiten und Grenzen von Luftoperationen beraten,</li><li>die Terminal Attack Control von CAS ausüben.</li></ol>' +
          '<p>Mitglieder sind der <strong>ALO</strong> (auf Bataillonsebene auch Battalion ALO, Unteroffizier oder Offizier) und die <strong>JTAC</strong>. JTAC werden meist vorne eingesetzt, typischerweise auf Kompanieebene. TACP koordinieren ACMs und entflechten Luftfahrzeuge von anderem Feuer.</p>' +
          LP.callout('tip', 'Positionierung der TACP', 'Drei Gesichtspunkte entscheiden über die Stellung: <strong>Sicherheit</strong> (die TACP kann sich nicht selbst schützen), <strong>Beobachtung</strong> (auffällige Geländepunkte meiden – der Feind bekämpft sie wahrscheinlich) und <strong>Verbindung</strong> zu Kommandeur, übergeordneter TACP und Luftfahrzeugen.'),
        src: [['jp3093', 'Kap. II, Abs. 3b(4)–(5); Kap. IV, Abs. 6'], ['ajp33', 'Abs. 2.40–2.42, C.11']]
      },
      {
        id: 'm02s3',
        title: 'Funknetze für CAS',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th>Netz</th><th>Zweck</th></tr></thead><tbody>' +
          '<tr><td><strong>JARN</strong> – Joint Air Request Net</td><td>Verbindung ASOC ↔ unterstellte TACP für Sofortanforderungen und Koordination. ASOC ist Netzleitstelle. Hauptmittel: digitaler DD 1972; oft SATCOM oder HF.</td></tr>' +
          '<tr><td><strong>TAD</strong> – Tactical Air Direction Net</td><td>Führung der Luftfahrzeuge (UHF-AM, teils VHF). Das dem JTAC/FAC(A) zugewiesene TAD-Netz ist <strong>nur für TAC</strong> reserviert.</td></tr>' +
          '<tr><td>Fire Support Net</td><td>Feueranforderungen; TACP schaltet hier ACAs, koordiniert Markierungs- und Niederhaltefeuer.</td></tr>' +
          '<tr><td>Command Net</td><td>Führung der Kampftruppe; JTAC holt hier die Freigabe des Kommandeurs ein.</td></tr>' +
          '<tr><td>O&amp;I Net</td><td>Operations and Intelligence: Lage- und Aufklärungsmeldungen, Auslöser (Trigger) für CAS.</td></tr>' +
          '<tr><td>INFLTREP Net</td><td>Inflight Reports der Besatzungen an das Führungssystem.</td></tr>' +
          '<tr><td>Guard</td><td>Notfrequenz; alle Luftfahrzeuge hören sie mit.</td></tr>' +
          '<tr><td>TACP Admin / TACP Local</td><td>Administrative und logistische Meldungen bzw. Abstimmung AO ↔ JTAC.</td></tr>' +
          '</tbody></table></div>' +
          '<p>Zugelassene Formate für Luftunterstützungsanforderungen sind der <strong>DD Form 1972 (JTAR)</strong> und die <strong>USMTF-Nachricht D670</strong>. Digitale Übermittlung ist bevorzugt.</p>' +
          LP.callout('tip', 'TAD-Disziplin', 'Das TAD-Netz gehört dem JTAC. Sobald ein Luftfahrzeug „IN“ meldet, halten alle anderen Funksprüche an, bis Freigabe oder Abort erteilt ist. Abort darf jeder jederzeit rufen.'),
        src: [['jp3093', 'Kap. II, Abs. 10; Kap. V, Abs. 2b(9)(e)']]
      },
      {
        id: 'm02s4',
        title: 'Air Tasking Cycle, ATO, ACO und SPINS',
        html:
          '<p>Der Air Tasking Cycle übersetzt die Vorgaben des Befehlshabers in einen ausführbaren Luftoperationsplan. Ein <strong>ATO gilt normalerweise für 24 Stunden</strong>; mehrere ATOs befinden sich gleichzeitig in Arbeit (72-Stunden-Zyklus).</p>' +
          '<ol>' +
          '<li><strong>Strategy &amp; Plan Development</strong> – Vorgaben in Beiträge der Luftmacht übersetzen; Apportionment-Empfehlung.</li>' +
          '<li><strong>Scheme of Manoeuvre &amp; Target Development</strong> – Ziele und Wirkungen abgleichen (JPTL), Air Operations Directive.</li>' +
          '<li><strong>Weaponeering &amp; Air Allocation</strong> – Waffe-Ziel-Zuordnung, Master Air Operations Plan (MAOP).</li>' +
          '<li><strong>ATO Development</strong> – ATO erstellen, freigeben, verteilen.</li>' +
          '<li><strong>Execution</strong> – Durchführung, Umsteuern bei dynamischen Zielen.</li>' +
          '<li><strong>Assessment</strong> – Wirkung bewerten, zurück in die Planung.</li>' +
          '</ol>' +
          '<dl>' +
          '<dt>Apportionment</dt><dd>Prozentuale Aufteilung des erwarteten Gesamtaufwands auf Luftoperationen nach Priorität (Entscheidung des Befehlshabers auf Empfehlung des Luftkomponentenbefehlshabers).</dd>' +
          '<dt>Allocation</dt><dd>Umsetzung in Einsätze (Sorties) je Luftfahrzeugtyp. Ein <em>Sortie</em> ist ein Flug eines Luftfahrzeugs.</dd>' +
          '<dt>ATO</dt><dd>Air Tasking Order: Detailbeauftragung aller Luftmissionen für den Zeitraum.</dd>' +
          '<dt>ACO</dt><dd>Airspace Control Order: aktiviert die Luftraumkoordinierungsmaßnahmen (ACM).</dd>' +
          '<dt>SPINS</dt><dd>Special Instructions: Bestandteil des ATO. Baseline-SPINS gelten länger (wöchentlich/monatlich), ATO-SPINS täglich.</dd>' +
          '</dl>' +
          LP.callout('warn', 'Annahmeschluss', 'Das Luftoperationszentrum setzt Annahmeschlusszeiten für vorgeplante Anforderungen. Was zu spät kommt, wird als <strong>Sofortanforderung</strong> über die ASOC bearbeitet.'),
        src: [['ajp33', 'Abs. 4.14–4.27'], ['jp3093', 'Kap. III, Abs. 10b']]
      },
      {
        id: 'm02s5',
        title: 'Vorgeplante und sofortige Anforderungen',
        html:
          '<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Preplanned (vorgeplant)</th><th>Immediate (sofort)</th></tr></thead><tbody>' +
          '<tr><td>Wann</td><td>Bedarf früh genug erkannt, um ins ATO einzugehen</td><td>Bedarf entsteht außerhalb der Planungsphasen</td></tr>' +
          '<tr><td>Gedeckt durch</td><td><strong>Scheduled</strong> (feste Zeit) oder <strong>On-call</strong> (Bereitschaft im Zeitfenster)</td><td>On-call-Einsätze oder <strong>Umsteuern</strong> geplanter Einsätze aus dem ATO</td></tr>' +
          '<tr><td>Rangfolge</td><td><strong>Precedence</strong> (1, 2, 3 … absteigend nach Wichtigkeit, vom Anforderer vergeben)</td><td><strong>Priority</strong>: #1 Emergency, #2 Priority, #3 Routine</td></tr>' +
          '<tr><td>Weg</td><td>über alle Ebenen ins Luftoperationszentrum</td><td>direkt TACP → ASOC/DASC über JARN; Zwischenebenen hören mit</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Priority bei Sofortanforderungen</h3>' +
          '<dl><dt>#1 Emergency</dt><dd>Ziele, die sofortiges Handeln erfordern und allen anderen Kategorien vorgehen.</dd>' +
          '<dt>#2 Priority</dt><dd>Ziele, die sofortiges Handeln erfordern und Routinezielen vorgehen.</dd>' +
          '<dt>#3 Routine</dt><dd>Gelegenheitsziele ohne besondere Dringlichkeit.</dd></dl>' +
          '<p>Alle Sofortanforderungen haben per Definition Precedence 1; deshalb wird nur die Priority angegeben.</p>' +
          '<h3>Ablauf einer Sofortanforderung über das JARN</h3>' +
          '<ol>' +
          '<li>Die Einheit erkennt ein Ziel.</li><li>Der Kommandeur entscheidet, CAS anzufordern.</li><li>Die Einheit informiert die TACP.</li>' +
          '<li>Die TACP gibt die Anforderung an die ASOC/DASC.</li><li>Zwischengeschaltete TACP hören mit und koordinieren bei Bedarf.</li>' +
          '<li>Die ASOC/DASC stimmt sich mit dem höchsten Gefechtsstand am Boden ab, der genehmigt.</li>' +
          '<li>Gibt es keine On-call-Luftfahrzeuge, lässt die ASOC über AOC bzw. Geschwader Luftfahrzeuge starten.</li>' +
          '<li>Die Luftfahrzeuge werden zu einem Kontroll- oder Kontaktpunkt geführt und an JTAC, FAC(A) oder TAC(A) übergeben.</li>' +
          '<li>JTAC/FAC(A) brieft, die Luftfahrzeuge verlassen den IP, der JTAC führt den Angriff, danach Wirkungsbeurteilung.</li>' +
          '</ol>' +
          LP.callout('warn', 'Schweigen heißt Zustimmung', 'Zwischengeschaltete Gefechtsstände hören Sofortanforderungen mit. Sagen sie nichts, gilt das als Zustimmung („silence implies consent“). Eine Ablehnung wird mit Begründung an den Anforderer zurückgegeben.') +
          LP.callout('crit', 'Lehre aus Eigenbeschuss', 'Früh anfordern – die Koordinate muss dafür noch nicht perfekt sein. Aber <strong>nie die Position eigener Kräfte als Zielort in einen JTAR schreiben</strong>: Es gab Eigenbeschuss, weil eigene Positionen als erste Routing-Punkte für Luftfahrzeuge genutzt wurden.'),
        src: [['jp3093', 'Kap. III, Abs. 27; Abb. III-37 bis III-39; Kap. V, Abs. 2a(2)']]
      },
      {
        id: 'm02s6',
        title: 'Der JTAR (DD Form 1972)',
        html:
          '<p>Der Joint Tactical Air Strike Request hat drei Abschnitte. Section I füllt der Anforderer, Section II die Koordinierungsstellen, Section III enthält die zurückgemeldeten Einsatzdaten.</p>' +
          '<h3>Section I – Mission Request</h3>' +
          '<div class="table-wrap"><table class="data"><thead><tr><th>Line</th><th>Inhalt</th></tr></thead><tbody>' +
          '<tr><td class="n">1</td><td>Unit called, This is, Request number, Sent</td></tr>' +
          '<tr><td class="n">2</td><td>Mission category: Preplanned (Precedence oder Priority) bzw. Immediate (Priority)</td></tr>' +
          '<tr><td class="n">3</td><td>Target is / Number of: Art, Größe, Beweglichkeit (z. B. „10 tanks“, „personnel on a 500 meter front“)</td></tr>' +
          '<tr><td class="n">4</td><td>Target location: Koordinaten A–D (Punkt, Linie, Route, Fläche), E Zielhöhe in Fuß MSL, Kartenblatt</td></tr>' +
          '<tr><td class="n">5</td><td>Target time/date: ASAP, NLT, AT, TO</td></tr>' +
          '<tr><td class="n">6</td><td>Desired ordnance/results: Munition; Destroy, Neutralize, Harass/Interdict</td></tr>' +
          '<tr><td class="n">7</td><td>Final control: Kontrollart, Rufzeichen, empfohlene TAD-Frequenz, Control Point</td></tr>' +
          '<tr><td class="n">8</td><td>Remarks</td></tr>' +
          '</tbody></table></div>' +
          '<h3>Lagemeldung zum JTAR</h3>' +
          '<p>Mit dem JTAR gibt der JTAC eine aktuelle Situation Update an die ASOC/DASC: Nummer der Lagemeldung, Ziel und allgemeine Feindlage, Bedrohung, eigene Lage, eigene Stellungen, Artillerietätigkeit, Freigabestelle (Clearance Authority), angeforderte Munition, Beschränkungen/Bemerkungen, lokale SEAD-Maßnahmen, Gefahren (Wetter, Gelände, Hindernisse).</p>' +
          '<h3>Section II – Coordination</h3>' +
          '<p>Lines 9–19: Abstimmung mit Schiffsartillerie und Artillerie, Nachrichtendienst und G-3, Genehmigung oder Ablehnung (mit Name und Begründung) sowie der Luftraum-Koordinierungsplan (ACA: Gültigkeit, Mittellinie, Breite, Höhe in Fuß MSL).</p>' +
          '<h3>Section III – Mission Data</h3>' +
          '<p>Mindestens zurückgemeldet werden: <strong>Line 20</strong> Mission Number, <strong>21</strong> Call Sign, <strong>22</strong> Anzahl und Typ der Luftfahrzeuge, <strong>23</strong> Munition, <strong>25</strong> geschätzte TOT, <strong>26</strong> Control Point, <strong>27</strong> Initial Contact (wen die Besatzung zuerst ruft), <strong>28</strong> Rufzeichen und Frequenz der abschließenden Kontrollstelle.</p>',
        src: [['jp3093', 'Anhang A; Kap. III, Abs. 27b(5)']]
      }
    ],
    atp: [
      'Welche NATO-Führungsstellen beschreibt deine ATP-3.3.2.1 für CAS (z. B. ASOC, AOCC, TACP)? Wie heißen die Funknetze dort?',
      'Wie beschreibt die ATP den Anforderungsweg für vorgeplante und sofortige Luftunterstützung? Welches Anforderungsformat nutzt sie?',
      'Gibt es in der ATP Unterschiede bei Precedence und Priority?',
      'Welche Rolle spielt die ATP-Lagemeldung bei der Anforderung?'
    ]
  });
})();
