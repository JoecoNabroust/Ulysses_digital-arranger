export interface EpisodeSchema {
  time: string;
  color: string;
  organ: string;
  art: string;
  technique: string;
  symbol: string;
}

export interface ArrangerNote {
  cue: string;
  commentary: string;
}

export interface Intermediality {
  music: string[];
  visualArts: string[];
}

export interface ScholarlyAnnotations {
  arrangerNotes: string[];
  musicReferences: string[];
  literatureReview: string[];
}

export interface UlyssesEpisode {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  schema: EpisodeSchema;
  plotSummary: [string, string, string];
  stylisticAnalysis: string[];
  arrangerPresence: ArrangerNote[];
  intermediality: Intermediality;
  researchHotspots: string[];
  characters: string[];
  scholarlyAnnotations: ScholarlyAnnotations;
}

const episodeOrder = [
  { id: 1, title: "Telemachus" },
  { id: 2, title: "Nestor" },
  { id: 3, title: "Proteus" },
  { id: 4, title: "Calypso" },
  { id: 5, title: "Lotus Eaters" },
  { id: 6, title: "Hades" },
  { id: 7, title: "Aeolus" },
  { id: 8, title: "Lestrygonians" },
  { id: 9, title: "Scylla and Charybdis" },
  { id: 10, title: "Wandering Rocks" },
  { id: 11, title: "Sirens" },
  { id: 12, title: "Cyclops" },
  { id: 13, title: "Nausicaa" },
  { id: 14, title: "Oxen of the Sun" },
  { id: 15, title: "Circe" },
  { id: 16, title: "Eumaeus" },
  { id: 17, title: "Ithaca" },
  { id: 18, title: "Penelope" }
] as const;

const telemachus: UlyssesEpisode = {
  id: 1,
  title: "Telemachus",
  subtitle: "The Martello Tower and the politics of beginning",
  location: "Sandycove, Martello Tower",
  schema: {
    time: "8:00 a.m.",
    color: "White/Gold",
    organ: "N/A (Opening consciousness)",
    art: "Theology",
    technique: "Initial Style",
    symbol: "Heir"
  },
  plotSummary: [
    "Joyce opens with ceremonial mock-epic force: Buck Mulligan ascends the tower as a parody priest, while Stephen Dedalus is positioned both inside and outside the morning ritual. The breakfast tableau stages intimacy, rivalry, and class-inflected performance in miniature, with Mulligan's wit functioning as social weaponry.",
    "As conversation turns toward Stephen's dead mother, the chapter hardens into an ethics of memory. Stephen's refusal to kneel at her deathbed becomes a public wound; Mulligan and Haines frame it as psychological oddity, but Joyce renders it as a conflict between artistic autonomy, Catholic guilt, and colonial masculinity. The tower itself becomes an acoustical chamber where insult reverberates.",
    "By episode end, Stephen's alienation is formalized materially: he surrenders the key and mentally resigns his place, declaring the tower usurped. The narrative leaves him dispossessed yet mobile, inaugurating the novel's larger movement from exclusion to provisional relation. The first episode therefore performs both a beginning and an expulsion."
  ],
  stylisticAnalysis: [
    "The prose demonstrates what critics often call Joyce's 'initial style': relatively stable syntax, selective lyric intensity, and controlled shifts into Stephen's interiority. Unlike later episodes, deformation is muted; style still mediates rather than overwhelms scene.",
    "Free indirect discourse is already strategic. Stephen's perceptions of Mulligan and Haines modulate the narrator's register, producing tonal drift between irony and elegy. This is crucial for Hayman's arranger model: the text appears transparent while quietly filtering what can be seen.",
    "Liturgical parody structures rhythm and diction. Mulligan's mock-mass language competes with Stephen's sacramental memory, turning style into ideological combat over authority, language, and inheritance."
  ],
  arrangerPresence: [
    {
      cue: "Opening formula: 'Stately, plump Buck Mulligan...'",
      commentary: "The elevated cadence resembles an editor selecting a ceremonious camera angle before allowing Stephen's grievance to emerge; the narrative arrangement foregrounds performance before pain."
    },
    {
      cue: "Mother-memory sequence",
      commentary: "The prose narrows around Stephen's recollection with abrupt tonal cooling, a hallmark of arranger intervention: scene-level banter is interrupted by a curated gravity that reorders reader sympathy."
    },
    {
      cue: "Closing thought on usurpation",
      commentary: "The chapter's final inward turn feels placed as a governing thesis for the Telemachiad, as though an overseeing intelligence inserts an interpretive tag at the edge of exit."
    }
  ],
  intermediality: {
    music: [
      "Liturgical chant and mock-chant rhythms shape Mulligan's speech performance.",
      "Irish song fragments in social banter underscore tensions between cosmopolitan irony and local belonging."
    ],
    visualArts: [
      "The opening is composed like a staged tableau with vertical blocking (stair, parapet, sea horizon).",
      "Stephen's remembered mother evokes icon-like imagery, blending devotional and expressionist modes."
    ]
  },
  researchHotspots: ["Post-colonialism", "Affect Theory", "Narrative Ethics", "Masculinity Studies", "Genetic Criticism"],
  characters: ["Stephen Dedalus", "Buck Mulligan", "Haines"],
  scholarlyAnnotations: {
    arrangerNotes: [
      "Hayman's arranger concept is visible in how mock-epic framing controls entry conditions before subjective fracture.",
      "Gabler's editorial segmentation helps track tonal pivots around the mother motif."
    ],
    musicReferences: [
      "Pseudo-liturgical cadence in Mulligan's opening speech.",
      "Sonic contrast between sea soundscape and interior argument."
    ],
    literatureReview: [
      "Debate persists on whether Stephen is narratively privileged or structurally displaced in episode one.",
      "Recent scholarship links tower spatial politics to colonial occupation and domestic precarity."
    ]
  }
};

const sirens: UlyssesEpisode = {
  id: 11,
  title: "Sirens",
  subtitle: "Ormond Hotel fugue and acoustic montage",
  location: "Ormond Hotel bar and dining room",
  schema: {
    time: "4:00 p.m.",
    color: "Bronze/Gold",
    organ: "Ear",
    art: "Music",
    technique: "Fuga per canonem",
    symbol: "Sirens"
  },
  plotSummary: [
    "Before stable scene-setting, Joyce offers an overture of lexical motifs: metallic flashes, jingles, clipped names, and rhythmic shards. This prelude primes the reader to hear rather than merely follow plot. The Ormond staff and patrons emerge as tonal nodes in an acoustic system where attention moves by echo and recurrence.",
    "Leopold Bloom enters into this sounding field as listener, observer, and unwilling participant. While Boylan's anticipated meeting with Molly haunts Bloom's consciousness, the chapter counterpoints bar chatter, piano performance, flirtation, and commercial Dublin. Plot is dispersed across auditory channels; jealousy appears less as confession than as rhythmic disturbance.",
    "The episode closes not with resolution but with resonance. Fragments recur, tonal motifs return altered, and Bloom exits carrying an afterimage of sound. 'Sirens' thus transforms narrative time into musical duration, making the emotional arc legible as pattern repetition, delay, and syncopated return."
  ],
  stylisticAnalysis: [
    "The episode stages one of Joyce's major stylistic deformations: narrative is reorganized by musical procedure. Repetition, internal rhyme, alliteration clusters, and motif circulation produce a quasi-fugal architecture. Syntax often yields to sonic pressure, requiring readers to process form as event.",
    "Voice boundaries loosen. Dialogue, thought, and acoustic notation overlap so that attribution becomes probabilistic rather than fixed. This instability is central to modernist mediation and aligns with Hayman's argument that an arranging intelligence edits transitions from behind the curtain.",
    "The overture-plus-development design demonstrates compositional self-consciousness. What appears as spontaneous barroom chatter is in fact tightly engineered recurrence, inviting comparison with Wagnerian leitmotif and nineteenth-century operatic structuring."
  ],
  arrangerPresence: [
    {
      cue: "The prelude's atomized lexicon",
      commentary: "An arranger-like hand pre-cuts and sequences motifs before diegesis coheres, effectively editing a soundtrack ahead of visual continuity."
    },
    {
      cue: "Bloom's listening position",
      commentary: "Narrative access repeatedly shifts to Bloom at moments of sonic intensification, suggesting deliberate focal gating rather than neutral omniscience."
    },
    {
      cue: "Motif return at closure",
      commentary: "The chapter's final echoes feel curated as a compositional recap, as if an invisible editor insists on formal memory over plot closure."
    }
  ],
  intermediality: {
    music: [
      "Operatic references and parlour-song culture shape social hierarchy and erotic display.",
      "Street ballad textures and barroom piano convert urban noise into patterned composition.",
      "Motivic recurrence evokes fugue, canon, and leitmotif practices."
    ],
    visualArts: [
      "Metallic color coding (bronze/gold) operates like tonal painting, assigning characters chromatic signatures.",
      "Mirror and reflection imagery parallels acoustic doubling, yielding a synesthetic scene design."
    ]
  },
  researchHotspots: ["Sound Studies", "Media Archaeology", "Affect Theory", "Urban Modernity", "Performance Studies"],
  characters: ["Leopold Bloom", "Blazes Boylan", "Lenehan", "Simon Dedalus", "Miss Douce", "Miss Kennedy"],
  scholarlyAnnotations: {
    arrangerNotes: [
      "Hayman's arranger is especially legible here because montage precedes mimesis.",
      "The chapter behaves like an edited score, with sequencing decisions replacing linear narration."
    ],
    musicReferences: [
      "Operatic allusion clusters around seduction and theatrical self-display.",
      "Popular song snippets index class taste and Dublin commercial culture."
    ],
    literatureReview: [
      "A long-standing debate concerns whether musical form is strict structural law or heuristic metaphor.",
      "Current work in cognitive narratology studies how motif repetition scripts Bloom's jealousy as embodied listening."
    ]
  }
};

const detailedEpisodes: Record<number, UlyssesEpisode> = {
  2: {
    id: 2,
    title: "Nestor",
    subtitle: "Pedagogy, debt, and imperial historiography",
    location: "Dalkey schoolroom and Deasy's office",
    schema: {
      time: "10:00 a.m.",
      color: "Brown",
      organ: "Bone",
      art: "History",
      technique: "Didactic dialogue",
      symbol: "Horseman"
    },
    plotSummary: [
      "Stephen teaches a history lesson to schoolboys, but the classroom quickly becomes a scene of mistranslation and authority-play. His effort to animate Roman and Pyrrhic history is met with mischief and boredom, foregrounding a pedagogy trapped between rote method and intellectual desire.",
      "After class, Stephen meets headmaster Mr. Deasy, who pays him and launches into conservative monologue on money, morality, and national decline. The exchange exposes a colonial middle-class logic that claims practical wisdom while repeating inherited prejudice and Protestant certitude.",
      "Stephen exits carrying Deasy's letter, another burden in the novel's economy of messages and errands. The episode closes with deferred agency: he is intellectually acute yet materially dependent, and his movement through Dublin remains structured by obligations he did not author."
    ],
    stylisticAnalysis: [
      "The prose remains close to the initial style but adds argumentative texture through staged pedagogic voices. Reported speech and free indirect thought interweave, producing a controlled friction between Stephen's irony and Deasy's self-assurance.",
      "Historical discourse is treated as rhetoric rather than transparent truth. Joyce exposes how aphorism, anecdote, and cliché manufacture authority, especially in Deasy's anti-Semitic assertions and deterministic economics.",
      "Compared to later episodes, deformation is minimal, yet patterning around debt, paternal lecture, and textual relay prefigures the novel's larger compositional logic."
    ],
    arrangerPresence: [
      {
        cue: "Shift from schoolroom noise to Deasy's office discourse",
        commentary: "The transition feels cut like a staged two-scene diptych, guiding readers from public instruction to private ideology with editorial precision."
      },
      {
        cue: "Placement of Deasy's letter as narrative object",
        commentary: "The arranger effect appears in how the letter is planted not merely as plot device but as a recurrent textual token linking social networks."
      },
      {
        cue: "Stephen's inward recoil after Deasy's maxims",
        commentary: "Narrative distance tightens at key moments, subtly redirecting interpretive authority away from Deasy and toward Stephen's skeptical interiority."
      }
    ],
    intermediality: {
      music: [
        "School recitation rhythms create a proto-musical call-and-response structure.",
        "Deasy's proverbial speech works like a repetitive refrain, emphasizing ideological fixity."
      ],
      visualArts: [
        "Classroom tableau resembles a history painting in miniature, with Stephen as reluctant instructor.",
        "The office scene uses portrait-like framing to expose Deasy as a type within colonial Dublin."
      ]
    },
    researchHotspots: ["Post-colonial pedagogy", "Economic criticism", "Narrative authority", "Anti-Semitism studies"],
    characters: ["Stephen Dedalus", "Mr. Deasy", "Sargent"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Hayman's arranger is legible in scene sequencing that converts routine school business into ideological theatre.",
        "The episode's document-handling anticipates later relay structures in the novel."
      ],
      musicReferences: [
        "Chant-like classroom cadence functions as acoustic discipline.",
        "Proverbial repetition in Deasy's speech acts as rhythmic coercion."
      ],
      literatureReview: [
        "Critics debate whether Deasy is comic caricature or structural index of colonial liberalism.",
        "Recent readings emphasize how Stephen's teaching labor complicates his self-image as autonomous artist."
      ]
    }
  },
  3: {
    id: 3,
    title: "Proteus",
    subtitle: "Perception at Sandymount Strand",
    location: "Sandymount Strand",
    schema: {
      time: "11:00 a.m.",
      color: "Green",
      organ: "Eye",
      art: "Philology",
      technique: "Interior monologue",
      symbol: "Tide"
    },
    plotSummary: [
      "Walking along the strand, Stephen turns external landscape into a laboratory of perception. Objects become unstable signs; sea, dog, tide, and debris trigger speculative chains rather than linear action.",
      "Memory and imagination interpenetrate the present: family recollections, literary allusions, and erotic flashes arrive as discontinuous thought-currents. The chapter's drama lies less in event than in cognition under pressure.",
      "By the end, Stephen's consciousness has mapped itself across water, text, and bodily sensation. The episode completes the Telemachiad's arc by rendering exile as epistemological condition: to know is to interpret, and interpretation never settles."
    ],
    stylisticAnalysis: [
      "Joyce amplifies free interiority into syntactic experimentation, with abrupt lexical pivots and multilingual references. Narrative mediation thins, forcing readers into Stephen's processing of sensation in real time.",
      "Protean flux is enacted formally: images mutate before stabilizing, and figurative language repeatedly overwrites itself. This marks a decisive movement away from the relative clarity of episode one.",
      "The style performs philological archaeology, layering etymology and quotation so that language appears sedimented, historical, and materially dense."
    ],
    arrangerPresence: [
      {
        cue: "Calibrated alternation of sensory detail and abstraction",
        commentary: "An arranger-like intelligence paces the episode's difficulty, inserting concrete anchors before renewed conceptual drift."
      },
      {
        cue: "Strategic recurrence of footstep and shoreline motifs",
        commentary: "Motif return gives compositional scaffolding to what appears at first as pure improvisation."
      },
      {
        cue: "Late re-entry of social memory",
        commentary: "The chapter quietly rethreads Stephen to family and city, suggesting editorial control beneath monologic freedom."
      }
    ],
    intermediality: {
      music: [
        "Cadenced prose imitates wave rhythm, with phrase-length swelling and retreating.",
        "Echoic repetition resembles thematic development in instrumental modernism."
      ],
      visualArts: [
        "Shifting perspective evokes impressionist seascape technique.",
        "Fragmented imagery anticipates cubist treatment of viewpoint and object."
      ]
    },
    researchHotspots: ["Phenomenology", "Ecocriticism", "Cognitive narratology", "Affect Theory"],
    characters: ["Stephen Dedalus"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Even radical interiority is compositionally bracketed by recurring shoreline cues.",
        "The episode demonstrates arranged spontaneity: apparent stream, hidden architecture."
      ],
      musicReferences: [
        "Wave-like periodicity structures sentence motion.",
        "Motivic returns act as tonal reminders across dense allusive fields."
      ],
      literatureReview: [
        "Debate persists over whether the chapter is primarily epistemological or autobiographical.",
        "Recent digital annotation projects map allusion density to reveal latent structural regularities."
      ]
    }
  },
  4: {
    id: 4,
    title: "Calypso",
    subtitle: "Domestic routine and urban circulation",
    location: "7 Eccles Street and Dublin streets",
    schema: {
      time: "8:00 a.m.",
      color: "Orange",
      organ: "Kidney",
      art: "Economics",
      technique: "Narrative with free indirect shifts",
      symbol: "Nymph"
    },
    plotSummary: [
      "Leopold Bloom is introduced through household gestures: preparing breakfast, caring for Molly, and moving through ordinary material tasks. The chapter establishes his attention to bodily life and practical detail as counterpoint to Stephen's abstraction.",
      "Bloom reads, shops, and schedules his morning while managing the emotional undertow of Molly's appointment with Boylan. Suspicion, tenderness, and avoidance coexist; domestic intimacy is saturated by deferred confrontation.",
      "By episode close Bloom exits into the city as both participant and observer. The narrative frames him as the novel's central mediator, a figure whose ethical range is articulated through appetite, tact, and adaptive thought."
    ],
    stylisticAnalysis: [
      "The prose pivots toward sensuous concreteness: smells, textures, food, and print culture organize cognition. Free indirect discourse remains subtle but now tracks Bloom's pragmatic intelligence and associative drift.",
      "Joyce balances comic detail and latent melancholy, producing tonal duality that will sustain the middle movement of the novel. The style's accessibility masks careful orchestration of motif and foreshadowing.",
      "Compared with Stephen's episodes, syntax relaxes into softer transitions, giving readers a less defensive, more permeable consciousness."
    ],
    arrangerPresence: [
      {
        cue: "Opening with Bloom's appetitive routine",
        commentary: "The arranger reorients the novel's center by staging domestic materiality as epistemic method."
      },
      {
        cue: "Letter and advertisement insertions",
        commentary: "Documentary fragments are edited into interior flow, foregrounding mediation through print and commerce."
      },
      {
        cue: "Managed disclosure of Boylan anxiety",
        commentary: "Jealousy is revealed in controlled increments, suggesting narrative withholding rather than spontaneous confession."
      }
    ],
    intermediality: {
      music: [
        "Popular song memory and Molly's professional musical world hover in Bloom's thought.",
        "Street sound textures begin to braid with private rhythm."
      ],
      visualArts: [
        "Domestic still-life composition (tray, tea, bread, organ meat) shapes scene design.",
        "Urban glimpses are framed like quick sketches, each carrying social-class coding."
      ]
    },
    researchHotspots: ["Everyday life studies", "Gender and domesticity", "Material culture", "Affect Theory"],
    characters: ["Leopold Bloom", "Molly Bloom", "Milly Bloom", "Blazes Boylan"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode four marks a curatorial reset from high modernist density to tactile realism.",
        "Arranger activity is evident in the timing of epistolary and commercial intrusions."
      ],
      musicReferences: [
        "Molly's career context ties household space to Dublin's performance circuits.",
        "Acoustic environment supports Bloom's mood transitions."
      ],
      literatureReview: [
        "Scholarship increasingly reads Bloom's domestic labor as ethical world-building.",
        "Recent work links commodity circulation to narrative form in this episode."
      ]
    }
  },
  5: {
    id: 5,
    title: "Lotus Eaters",
    subtitle: "Narcotic drift through communication networks",
    location: "Post office, church, bath, and Dublin streets",
    schema: {
      time: "10:00 a.m.",
      color: "Violet",
      organ: "Genitals",
      art: "Chemistry",
      technique: "Narcotic episodic flow",
      symbol: "Lotus flower"
    },
    plotSummary: [
      "Bloom traverses Dublin's communicative infrastructure: post office boxes, church interiors, and commercial counters. The chapter's movement is low-pressure and meandering, emphasizing delay, substitution, and private fantasy.",
      "Religious ritual appears as sensory theatre rather than doctrinal conviction. Bloom's reflections on perfume, bathing, and bodily pleasure blur sacred and secular economies of desire.",
      "The episode closes on suspended intention rather than action, presenting urban life as a sequence of minor contacts. Narrative energy diffuses into atmosphere, preparing the tonal glide toward funeral procession in 'Hades.'"
    ],
    stylisticAnalysis: [
      "Sentence rhythm softens into languor, with associative detours and low-stakes transitions. Joyce cultivates a drowsy prose texture matching the lotus motif of stupefaction and postponement.",
      "Interiority is sensual and speculative, often organized by smell, touch, and imagined intimacy. Plot is secondary to mood management and cognitive drift.",
      "The chapter demonstrates how Joyce can produce structural coherence through thematic viscosity rather than dramatic event."
    ],
    arrangerPresence: [
      {
        cue: "Sequence of small errands",
        commentary: "The arranger edits disparate stops into a coherent affective arc of suspension and postponement."
      },
      {
        cue: "Religious scene as sensory montage",
        commentary: "Narrative framing redirects theological content into perception-study, curating reader attention toward embodied ritual."
      },
      {
        cue: "Repeated return to messages and secrecy",
        commentary: "The chapter's communication motifs are planted as connective tissue for later episodes."
      }
    ],
    intermediality: {
      music: [
        "Liturgical cadence and devotional murmur create a low-volume acoustic backdrop.",
        "Street cries and shop sounds punctuate Bloom's drifting tempo."
      ],
      visualArts: [
        "Incense-heavy church space is rendered in quasi-symbolist visual terms.",
        "Commodity displays appear as mini still-lifes in motion."
      ]
    },
    researchHotspots: ["Queer studies", "Religion and secularity", "Sensory history", "Media studies"],
    characters: ["Leopold Bloom", "Martha Clifford", "Bantam Lyons"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Hayman-style arranging is evident in the choreography of errand micro-scenes.",
        "Communication technologies are staged as narrative operators, not background detail."
      ],
      musicReferences: [
        "Church murmur and bell tones structure pacing.",
        "Acoustic quietude supports narcotic prose movement."
      ],
      literatureReview: [
        "Recent criticism foregrounds postal secrecy and mediated intimacy.",
        "Debates continue on whether the episode's drift is comic respite or ethical diagnostic."
      ]
    }
  },
  6: {
    id: 6,
    title: "Hades",
    subtitle: "Funeral procession and civic mortality",
    location: "Carriage route and Glasnevin Cemetery",
    schema: {
      time: "11:00 a.m.",
      color: "Black",
      organ: "Heart",
      art: "Religion",
      technique: "Incubism",
      symbol: "Caretaker"
    },
    plotSummary: [
      "Bloom joins a funeral carriage to Paddy Dignam's burial, moving through Dublin while conversation oscillates between gossip, commerce, and mortality. Death is socialized into routine exchange rather than solemn abstraction.",
      "At the cemetery Bloom's thoughts move between empathy, anatomical curiosity, and economic concern for the bereaved. The chapter juxtaposes public ritual with private memory, especially around his father and son Rudy.",
      "Leaving the graveside, Bloom carries death not as metaphysical certainty but as civic condition. The episode deepens his ethical profile: he remains attentive to vulnerability even as the city normalizes loss."
    ],
    stylisticAnalysis: [
      "Joyce combines realistic dialogue with introspective undertow, generating a layered social acoustics where banality and grief coexist. The prose uses mobility (carriage movement) as formal principle.",
      "Associative memory punctures surface chatter, especially when Bloom confronts paternal suicide and infant death. These intrusions are brief but structurally decisive.",
      "The chapter's tonal management anticipates later episodes where comedy and mourning are no longer separable."
    ],
    arrangerPresence: [
      {
        cue: "Carriage as moving narrative chamber",
        commentary: "The arranger leverages confined social space to stage competing discourses on death and value."
      },
      {
        cue: "Timed insertion of Rudy memory",
        commentary: "Private grief appears at carefully measured intervals, producing emotional depth without halting public scene flow."
      },
      {
        cue: "Exit from cemetery into city continuity",
        commentary: "Narrative editing refuses terminal closure, emphasizing death's integration into everyday circulation."
      }
    ],
    intermediality: {
      music: [
        "Funeral rhythm echoes march structure and muted processional cadence.",
        "Conversational counterpoint resembles ensemble texture with competing thematic lines."
      ],
      visualArts: [
        "Cemetery imagery recalls nineteenth-century memorial sculpture and vanitas iconography.",
        "Carriage windows frame Dublin as sequential urban panels."
      ]
    },
    researchHotspots: ["Death studies", "Urban sociology", "Trauma studies", "Jewish studies"],
    characters: ["Leopold Bloom", "Martin Cunningham", "Simon Dedalus", "Jack Power"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "The episode demonstrates compositional control through mobile scene architecture.",
        "Arranger presence surfaces in how grief is rationed and redistributed through social talk."
      ],
      musicReferences: [
        "Processional pacing underwrites sentence rhythm.",
        "Ensemble dialogue operates as thematic counterpoint."
      ],
      literatureReview: [
        "Scholars read 'Hades' as pivot from episodic errands to existential pressure.",
        "Current work emphasizes Bloom's minority status within funeral sociability."
      ]
    }
  },
  7: {
    id: 7,
    title: "Aeolus",
    subtitle: "Journalistic rhetoric and headline mechanics",
    location: "Freeman's Journal office",
    schema: {
      time: "12:00 p.m.",
      color: "Red",
      organ: "Lungs",
      art: "Rhetoric",
      technique: "Headline interpolation",
      symbol: "Wind"
    },
    plotSummary: [
      "Inside the newspaper office, conversations, anecdotes, and political chatter circulate as rapidly as print copy. Bloom attempts to place an advertisement while navigating a masculine economy of wit and interruption.",
      "Public speech repeatedly outpaces practical action: rhetoric inflates, stalls, and diverts attention. The episode dramatizes modern media space where language produces momentum even when substance is thin.",
      "Bloom exits with limited success yet improved strategic awareness. The chapter maps Dublin's print sphere as both opportunity and exclusionary gatekeeping structure."
    ],
    stylisticAnalysis: [
      "Intrusive headlines fracture narrative continuity, creating typographic montage. These captions act as mini editorial commands, redirecting interpretation in advance of scene detail.",
      "Oratorical excess is mimicked by periodic syntax and rapid tonal shifts; conversation becomes performative competition.",
      "The style satirizes public discourse while demonstrating how mediation technologies reorganize attention."
    ],
    arrangerPresence: [
      {
        cue: "Headline cuts",
        commentary: "The most explicit arranger device so far: editorial insertions visibly splice and frame narrative units."
      },
      {
        cue: "Bloom's near-marginal positioning in talk clusters",
        commentary: "Focal access is curated to reveal both his exclusion and his adaptive observation."
      },
      {
        cue: "Rhetorical crescendo without resolution",
        commentary: "The chapter is edited as wind-machine, prioritizing movement and pressure over closure."
      }
    ],
    intermediality: {
      music: [
        "Speech rhythms mimic brass fanfare and declamatory recitative.",
        "Refrain-like political anecdotes circulate as civic earworms."
      ],
      visualArts: [
        "Typographic play evokes newspaper layout as visual art object.",
        "Office bustle is staged like a crowded genre painting of modern labor."
      ]
    },
    researchHotspots: ["Media archaeology", "Public sphere theory", "Rhetoric studies", "Print culture"],
    characters: ["Leopold Bloom", "Myles Crawford", "J. J. O'Molloy", "Lenehan"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "The chapter externalizes arranger authority through headline montage.",
        "Scene assembly imitates newsroom editing workflows."
      ],
      musicReferences: [
        "Declaiming speech patterns produce a quasi-operatic masculine chorus.",
        "Sound density tracks the economics of attention in print capitalism."
      ],
      literatureReview: [
        "Critics debate whether headlines are satiric ornaments or deep structural operators.",
        "Recent scholarship links 'Aeolus' to platform logics and algorithmic framing."
      ]
    }
  },
  8: {
    id: 8,
    title: "Lestrygonians",
    subtitle: "Hunger, spectacle, and ethical appetite",
    location: "Dublin streets and Burton/Kiernan's area",
    schema: {
      time: "1:00 p.m.",
      color: "Green/Brown",
      organ: "Esophagus",
      art: "Architecture",
      technique: "Peristaltic movement",
      symbol: "Cannibals"
    },
    plotSummary: [
      "Bloom wanders through lunchtime Dublin, observing bodies eating, talking, and consuming space. The city appears as digestive system: shops, pubs, and sidewalks become organs of intake and waste.",
      "He recoils from the Burton restaurant's coarse appetite and seeks a quieter meal, where his own eating is deliberate and self-conscious. Hunger becomes ethical index, distinguishing Bloom's tact from aggressive masculinity around him.",
      "The episode closes on provisional satiation but persistent social estrangement. Bloom remains in motion, nourished yet unsettled, as bodily routine folds into emotional isolation."
    ],
    stylisticAnalysis: [
      "Metaphoric peristalsis organizes both movement and sentence flow. Joyce syncs bodily rhythm with urban choreography, producing a visceral narratology of the street.",
      "The prose alternates comic grotesque and sympathetic attentiveness, making appetite a moral and political category.",
      "Free indirect discourse tracks Bloom's micro-judgments in real time, turning lunch into a study of civic coexistence."
    ],
    arrangerPresence: [
      {
        cue: "Serial vignettes of eaters",
        commentary: "The arranger cuts among public scenes to build an argument about social appetite without explicit authorial statement."
      },
      {
        cue: "Pivot from Burton to quieter dining",
        commentary: "Narrative sequencing stages Bloom's ethical choice as spatial editing: exit one scene, enter another value system."
      },
      {
        cue: "Recurring digestive imagery",
        commentary: "Motif management supplies covert structural glue across seemingly incidental observations."
      }
    ],
    intermediality: {
      music: [
        "Street and dining-room chatter creates layered urban polyphony.",
        "Rhythmic prose imitates chewing and swallowing cadences."
      ],
      visualArts: [
        "Crowded interiors evoke social caricature and satirical illustration.",
        "Public eating scenes resemble moving genre studies of modern consumption."
      ]
    },
    researchHotspots: ["Food studies", "Biopolitics", "Urban affect", "Masculinity studies"],
    characters: ["Leopold Bloom", "Josie Breen", "Mrs. Breen"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode architecture depends on curated contrast between predatory and reflective appetite.",
        "Arranger logic is visible in the controlled pacing of Bloom's disgust and relief."
      ],
      musicReferences: [
        "Ambient crowd noise functions as civic accompaniment to Bloom's interior thought.",
        "Phonic texture mirrors digestive motif."
      ],
      literatureReview: [
        "Recent criticism links alimentary language to imperial commodity circuits.",
        "Affect theorists read Bloom's revulsion as a politics of permeability."
      ]
    }
  },
  9: {
    id: 9,
    title: "Scylla and Charybdis",
    subtitle: "Library disputation and Shakespearean paternity",
    location: "National Library of Ireland",
    schema: {
      time: "2:00 p.m.",
      color: "Brown/Green",
      organ: "Brain",
      art: "Literature",
      technique: "Dialectic",
      symbol: "Tides/straits"
    },
    plotSummary: [
      "Stephen presents his Shakespeare theory before Dublin literati, converting literary criticism into social performance. Argument operates as self-fashioning, with wit and bravado masking material precarity.",
      "Interlocutors challenge, mock, and partially engage Stephen's claims about paternity, authorship, and textual inheritance. The debate exposes institutions of authority while dramatizing the costs of intellectual exhibition.",
      "Bloom's brief crossing of the scene and Stephen's eventual departure maintain the novel's convergence logic. The chapter ends without doctrinal verdict, emphasizing criticism as staged event rather than settled knowledge."
    ],
    stylisticAnalysis: [
      "Dense allusion and argumentative velocity drive the chapter, producing a theatricalized essay form. Dialogue is both epistemic contest and social choreography.",
      "Joyce exploits quotation, parody, and scholastic patterning to interrogate interpretive authority. The style dramatizes criticism as performative labor.",
      "Compared to 'Proteus,' interiority is externalized into debate, but narrative control still modulates access to Stephen's vulnerability."
    ],
    arrangerPresence: [
      {
        cue: "Orchestration of interlocutors around Stephen",
        commentary: "The arranger builds a debate arena that tests argument under social pressure rather than pure logic."
      },
      {
        cue: "Bloom's timed crossing",
        commentary: "A brief convergence is edited in as structural reminder of parallel narratives."
      },
      {
        cue: "No definitive adjudication",
        commentary: "Narrative refuses closure, preserving polyphony as compositional principle."
      }
    ],
    intermediality: {
      music: [
        "Debate rhythms resemble chamber counterpoint, with themes restated and varied.",
        "Voice timbre and interruption function as rhetorical percussion."
      ],
      visualArts: [
        "Library space is staged like a salon painting of intellectual modernity.",
        "Stephen's argument unfolds as conceptual montage."
      ]
    },
    researchHotspots: ["Authorship theory", "Performance studies", "Institutional critique", "Genetic criticism"],
    characters: ["Stephen Dedalus", "John Eglinton", "A. E.", "Lyster", "Leopold Bloom"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "The episode demonstrates how arranger sequencing can make theory legible as drama.",
        "Convergence cues between Stephen and Bloom are editorially sparse but decisive."
      ],
      musicReferences: [
        "Argumentative returns mimic thematic reprise.",
        "Interruptions produce syncopated intellectual rhythm."
      ],
      literatureReview: [
        "Long-standing debates center on sincerity versus irony in Stephen's Shakespeare thesis.",
        "Current scholarship treats the library as media ecology, not merely setting."
      ]
    }
  },
  10: {
    id: 10,
    title: "Wandering Rocks",
    subtitle: "Cinematic Dublin and distributed focalization",
    location: "Multiple Dublin locations",
    schema: {
      time: "3:00 p.m.",
      color: "Variegated",
      organ: "Bloodstream",
      art: "Mechanics",
      technique: "Labyrinthine montage",
      symbol: "Rocks/current"
    },
    plotSummary: [
      "Nineteen short sections track priests, workers, women, children, officials, and passersby across Dublin. The city appears as moving network where trajectories intersect without requiring central consciousness.",
      "Stephen, Bloom, and many minor figures are re-situated within a wider urban field, while political and clerical authority circulate through routine gestures. The viceregal cavalcade provides periodic gravitational center and symbolic hierarchy.",
      "The episode closes by demonstrating that no single character can totalize Dublin's system. Narrative itself becomes traffic management, making modernity visible as distributed relation."
    ],
    stylisticAnalysis: [
      "Joyce adopts montage logic akin to early cinema, cutting rapidly between scenes while preserving thematic resonance. Short sections function as shots in an urban sequence.",
      "Focalization is decentralized; the chapter's intelligence lies in pattern recognition across fragments. Readers perform connective labor usually reserved for narrators.",
      "Stylistic economy and repetition of objects, routes, and names create macro-coherence from micro-scenes."
    ],
    arrangerPresence: [
      {
        cue: "Nineteen-part segmented design",
        commentary: "The arranger role is explicit in the chapter's editorial assembly, where ordering decisions create meaning."
      },
      {
        cue: "Viceregal carriage motif",
        commentary: "Recurring procession shots function as compositional metronome across social strata."
      },
      {
        cue: "Cross-threading of Bloom and Stephen traces",
        commentary: "Narrative placement of partial encounters prepares later convergence while preserving contingency."
      }
    ],
    intermediality: {
      music: [
        "Urban noise accumulates as civic polyphony with no single lead line.",
        "Motif return across sections resembles orchestral reprise."
      ],
      visualArts: [
        "Strong affinity with cinematic montage and tracking shot logic.",
        "City panorama resembles modern map-art assembled from fragments."
      ]
    },
    researchHotspots: ["Network theory", "Spatial humanities", "Cinematic modernism", "Urban studies"],
    characters: ["Leopold Bloom", "Stephen Dedalus", "Father Conmee", "Blazes Boylan", "Simon Dedalus"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "This is the novel's clearest demonstration of arranger as urban editor.",
        "Section order produces implicit argument about power, mobility, and visibility."
      ],
      musicReferences: [
        "Acoustic layering mirrors distributed scene architecture.",
        "Repetitive traffic and speech cues create rhythmic continuity."
      ],
      literatureReview: [
        "Scholars often read the episode through film theory and cartographic methods.",
        "Digital humanities projects use GIS to model the chapter's movement patterns."
      ]
    }
  },
  12: {
    id: 12,
    title: "Cyclops",
    subtitle: "Nationalist parody and violent focalization",
    location: "Barney Kiernan's pub",
    schema: {
      time: "5:00 p.m.",
      color: "Green",
      organ: "Muscle",
      art: "Politics",
      technique: "Gigantism and parodic interpolation",
      symbol: "One-eyed giant"
    },
    plotSummary: [
      "A nameless barroom narrator recounts Bloom's encounter with the Citizen and nationalist drinking culture. Conversation escalates from banter to ideological aggression, with anti-Semitic hostility directed at Bloom.",
      "Parodic interpolations interrupt the pub narrative, inflating episodes into mock-epic, legal, biblical, and journalistic pastiche. These eruptions expose how grand rhetoric distorts everyday conflict.",
      "Bloom departs under threat, and the chapter closes on grotesque pseudo-heroic excess. Violence is represented not as anomaly but as product of exclusionary identity performance."
    ],
    stylisticAnalysis: [
      "The episode's alternating registers create a collision between colloquial realism and hyperbolic parody. Joyce weaponizes style to critique monocular nationalism and masculinist bravado.",
      "Narrative reliability is destabilized by the pub narrator's bias, making mediation itself a political problem.",
      "Pastiche operates as diagnostic instrument: inflated forms reveal ideological fantasy and collective self-mythologization."
    ],
    arrangerPresence: [
      {
        cue: "Insertion of colossal parodic blocks",
        commentary: "The arranger intervenes visibly, splicing genres to expose the narrator's limited perspective."
      },
      {
        cue: "Bloom framed as ethical dissenter",
        commentary: "Focal management ensures Bloom's vulnerability remains legible despite hostile narration."
      },
      {
        cue: "Final mock-apotheosis",
        commentary: "Closing exaggeration is editorially positioned as satiric aftershock rather than triumph."
      }
    ],
    intermediality: {
      music: [
        "Pub singing and chant culture intensify collective mood.",
        "Verbal rhythm in parody blocks resembles bombastic patriotic performance."
      ],
      visualArts: [
        "Caricatural enlargement mirrors political cartoon aesthetics.",
        "Grotesque bodily imagery evokes satirical prints."
      ]
    },
    researchHotspots: ["Post-colonialism", "Nationalism studies", "Anti-Semitism studies", "Satire theory"],
    characters: ["Leopold Bloom", "The Citizen", "Nosey Flynn", "Joe Hynes"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Genre splicing makes arranger authority explicit as anti-monologic counterforce.",
        "Episode 12 is central for studying how narration can enact ideological violence."
      ],
      musicReferences: [
        "Collective vocal performance underwrites mob dynamics.",
        "Rhythmic amplification in pastiche mirrors crowd escalation."
      ],
      literatureReview: [
        "Debates focus on whether parody diffuses or sharpens political critique.",
        "Recent work links the episode's one-eyed motif to media monoculture."
      ]
    }
  },
  13: {
    id: 13,
    title: "Nausicaa",
    subtitle: "Romance style, spectacle, and asymmetrical desire",
    location: "Sandymount Strand at dusk",
    schema: {
      time: "8:00 p.m.",
      color: "Blue/Grey",
      organ: "Eye",
      art: "Painting",
      technique: "Sentimental parody to realist turn",
      symbol: "Virgin/shore maiden"
    },
    plotSummary: [
      "The first movement filters the beach scene through Gerty MacDowell's romance-inflected perspective, full of devotional kitsch, consumer fantasy, and emotional self-dramatization. Fireworks and evening light frame desire as spectacle.",
      "Bloom watches from a distance, and the chapter pivots from stylized sentiment to more direct interior realism. The encounter reveals asymmetry: proximity without reciprocity, fantasy without dialogue.",
      "After Gerty departs, Bloom's reflections linger between shame, tenderness, and self-exoneration. The episode exposes how visual regimes and narrative framing condition gendered power."
    ],
    stylisticAnalysis: [
      "Joyce parodies magazine romance prose through inflated sentiment, ornamental diction, and moralized desire scripts. Style itself becomes social archive of popular femininity.",
      "The tonal break in the second half produces critical shock, forcing reassessment of earlier idealization.",
      "Visuality dominates formal design: sightlines, framing, and spectacle mediate erotic perception and ethical judgment."
    ],
    arrangerPresence: [
      {
        cue: "Abrupt register shift mid-episode",
        commentary: "The arranger reveals the constructedness of Gerty's voice by switching stylistic apparatus at the point of voyeuristic climax."
      },
      {
        cue: "Fireworks timed with desire escalation",
        commentary: "External spectacle is editorially synchronized with interior rhythm."
      },
      {
        cue: "Post-event reflective coda",
        commentary: "Narrative pacing cools affect and invites critical distance from both figures."
      }
    ],
    intermediality: {
      music: [
        "Evening sounds and devotional song ambience frame the beach scene.",
        "Cadenced sentimentality mirrors popular ballad emotional scripting."
      ],
      visualArts: [
        "Composition resembles devotional chromolithographs and seaside postcard imagery.",
        "Fireworks create painterly light effects shaping scene temporality."
      ]
    },
    researchHotspots: ["Gender studies", "Disability studies", "Visual culture", "Affect Theory"],
    characters: ["Leopold Bloom", "Gerty MacDowell", "Cissy Caffrey", "Edy Boardman"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode 13 is a key site for arranger-mediated ventriloquism of genre voice.",
        "The formal pivot demonstrates controlled exposure of narrative artifice."
      ],
      musicReferences: [
        "Popular devotional and sentimental acoustic cues shape affective expectation.",
        "Sound supports the shift from fantasy script to bodily immediacy."
      ],
      literatureReview: [
        "Critics debate consent, voyeurism, and narrative complicity in Bloom's gaze.",
        "Recent scholarship revisits Gerty beyond parody, emphasizing constrained agency."
      ]
    }
  },
  14: {
    id: 14,
    title: "Oxen of the Sun",
    subtitle: "Gestation, stylistic history, and male discourse",
    location: "Holles Street Maternity Hospital",
    schema: {
      time: "10:00 p.m.",
      color: "White",
      organ: "Womb",
      art: "Medicine",
      technique: "Historical prose parodies",
      symbol: "Fertility herd"
    },
    plotSummary: [
      "Bloom arrives at the maternity hospital where Mina Purefoy endures prolonged labor while male companions drink and theorize nearby. Birth, care, and vulnerability are displaced by masculine verbal display.",
      "As conversation proceeds, prose style evolves through a sequence of English historical idioms, from Latinate beginnings to slang-heavy modernity. Linguistic development parallels gestational metaphor but also satirizes literary inheritance.",
      "The chapter concludes in unruly dispersal, with the men spilling toward nighttown. The promised telos of birth remains largely offstage, exposing gendered asymmetry between bodily labor and discursive appropriation."
    ],
    stylisticAnalysis: [
      "This episode is Joyce's most overt historiographic style machine: language mutates across periods, foregrounding literary genealogy as performed construct.",
      "Parody functions both homage and critique, testing canonical prose against reproductive and ethical themes.",
      "Late-stage slang acceleration generates comic excess while revealing exhaustion of male rhetorical posturing."
    ],
    arrangerPresence: [
      {
        cue: "Programmatic sequence of prose epochs",
        commentary: "The arranger acts as conductor, cueing stylistic eras with near-editorial explicitness."
      },
      {
        cue: "Bloom's ethical interjections amid bravado",
        commentary: "Focal realignment periodically restores concern for embodied care."
      },
      {
        cue: "Exit trajectory toward Circe",
        commentary: "Chapter ending is cut as transition mechanism, feeding surplus energy into next episode."
      }
    ],
    intermediality: {
      music: [
        "Styles succeed one another like movements in a historical suite.",
        "Rowdy male chorus near the end mimics tavern ensemble build."
      ],
      visualArts: [
        "Hospital setting contrasts clinical realism with rhetorical pageantry.",
        "Stylistic epochs create a verbal gallery of literary portraiture."
      ]
    },
    researchHotspots: ["Genetic criticism", "History of English prose", "Gender and reproduction", "Medical humanities"],
    characters: ["Leopold Bloom", "Stephen Dedalus", "Mina Purefoy", "Buck Mulligan", "Lynch"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode 14 is central for studying arranger-guided macro-structure.",
        "Form itself becomes argument about transmission, authority, and embodiment."
      ],
      musicReferences: [
        "Stylistic succession parallels compositional variation form.",
        "Final drinking-song energy prefigures nighttown's theatrical acoustics."
      ],
      literatureReview: [
        "Scholars debate whether the gestation schema is coherent design or retrospective scaffold.",
        "Recent feminist criticism highlights maternal labor's marginalization by male discourse."
      ]
    }
  },
  15: {
    id: 15,
    title: "Circe",
    subtitle: "Nighttown hallucination and juridical fantasy",
    location: "Nighttown (Mabbot Street district)",
    schema: {
      time: "Midnight",
      color: "Black",
      organ: "Nerves",
      art: "Magic/Drama",
      technique: "Hallucinatory play script",
      symbol: "Sorceress"
    },
    plotSummary: [
      "In brothel-district nighttown, Bloom and Stephen pass through intoxication, desire, fear, and coercive social scripts. Reality and fantasy merge in rapid theatrical metamorphosis.",
      "Bloom undergoes trials of humiliation, accusation, erotic transformation, and mock-triumph; Stephen confronts maternal revenance and violent self-assertion. The episode externalizes psychic conflict as staged spectacle.",
      "After Stephen's collapse, Bloom assumes a protective role, guiding him away from chaos. The chapter converts hallucination into ethical pivot, preparing the quieter reparative movement of the final episodes."
    ],
    stylisticAnalysis: [
      "Written in dramatic form, 'Circe' destabilizes ontology through stage directions that materialize thought. The style fuses expressionist theatre, legal parody, and dream logic.",
      "Identity is radically performative: gender, class, race, and authority are donned and stripped through rapid scenic transformations.",
      "Narrative control is paradoxical: maximum apparent disorder produced by exacting formal choreography."
    ],
    arrangerPresence: [
      {
        cue: "Script format with impossible stage directions",
        commentary: "The arranger appears as stage manager of the unconscious, cueing entrances for psychic and social phantoms."
      },
      {
        cue: "Bloom's trial-and-coronation sequences",
        commentary: "Transformations are edited as ideological diagnostics, exposing hidden scripts of shame and aspiration."
      },
      {
        cue: "Terminal rescue movement",
        commentary: "Amid spectacle, composition narrows toward ethical action, indicating deliberate narrative reprioritization."
      }
    ],
    intermediality: {
      music: [
        "Cabaret, street song, and distorted refrain generate feverish acoustic collage.",
        "Rhythmic escalation and abrupt silence structure hallucination beats."
      ],
      visualArts: [
        "Expressionist distortion dominates scene imagery.",
        "Grotesque theatrical tableaux resemble avant-garde stage design."
      ]
    },
    researchHotspots: ["Psychoanalysis", "Queer theory", "Performance studies", "Legal humanities", "Trauma studies"],
    characters: ["Leopold Bloom", "Stephen Dedalus", "Bella Cohen", "Zoe Higgins", "Private Carr"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Circe provides maximal evidence for Hayman's claim of hidden compositional governance.",
        "Scene transitions are too exact to be read as merely anarchic dream flow."
      ],
      musicReferences: [
        "Nighttown acoustics function as unstable score for identity performance.",
        "Recurring song fragments tether hallucination to Dublin popular culture."
      ],
      literatureReview: [
        "Debate centers on whether Circe is primarily psychoanalytic theatre or social satire.",
        "Recent work emphasizes policing, surveillance, and juridical fantasy in Bloom's trials."
      ]
    }
  },
  16: {
    id: 16,
    title: "Eumaeus",
    subtitle: "Aftershock prose and exhausted narration",
    location: "Cabman's shelter",
    schema: {
      time: "1:00 a.m.",
      color: "Brown/Grey",
      organ: "Nerves",
      art: "Navigation",
      technique: "Tired, error-prone style",
      symbol: "Shelter"
    },
    plotSummary: [
      "Bloom brings Stephen to the cabman's shelter, where coffee, conversation, and uncertain stories replace nighttown's delirium. The atmosphere is subdued, wary, and fatigued.",
      "A sailor's tales and surrounding talk generate ambiguity around truth, memory, and self-presentation. Bloom remains solicitous, attempting to stabilize Stephen through practical care and conversational tact.",
      "The episode ends without dramatic breakthrough, but with fragile continuity. Its modest hospitality marks the transition from spectacle to difficult ordinary relation."
    ],
    stylisticAnalysis: [
      "The prose becomes deliberately slack, clichéd, and syntactically overburdened, simulating exhaustion after Circe's intensity. Error and circumlocution are formal features, not accidental decline.",
      "Narrative confidence weakens; assertions are hedged, and details feel second-hand. This style encodes epistemic fatigue and post-traumatic disorientation.",
      "Joyce uses anti-climax as method, challenging readers to value minor care over narrative fireworks."
    ],
    arrangerPresence: [
      {
        cue: "Markedly 'bad' prose after Circe",
        commentary: "The arranger recalibrates register to enforce decompression and resist melodramatic continuation."
      },
      {
        cue: "Persistent uncertainty around sailor narrative",
        commentary: "Editorial withholding keeps testimony unstable, emphasizing mediation over fact."
      },
      {
        cue: "Bloom's small acts of care foregrounded",
        commentary: "Scene sequencing turns ethical minutiae into structural center."
      }
    ],
    intermediality: {
      music: [
        "Muted conversational hum replaces earlier orchestral density.",
        "Repetitive cliché patterns create a droning postlude effect."
      ],
      visualArts: [
        "Shelter interior reads like a chiaroscuro late-night study.",
        "Figures are sketched in tired outlines rather than vivid caricature."
      ]
    },
    researchHotspots: ["Narrative unreliability", "Care ethics", "Post-traumatic form", "Ordinary language studies"],
    characters: ["Leopold Bloom", "Stephen Dedalus", "D. B. Murphy", "Skin-the-Goat"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode 16 demonstrates arranger control through intentional anti-style.",
        "Compositional deceleration protects the ethical arc from sensational relapse."
      ],
      musicReferences: [
        "Low-energy speech rhythm acts as nocturnal coda.",
        "Acoustic sparsity highlights interpersonal hesitation."
      ],
      literatureReview: [
        "Critics dispute whether Eumaeus is parody of bad prose or phenomenology of fatigue.",
        "Recent readings focus on hospitality, migration, and maritime storytelling."
      ]
    }
  },
  17: {
    id: 17,
    title: "Ithaca",
    subtitle: "Catechism, domestic return, and epistemic inventory",
    location: "7 Eccles Street kitchen/back garden",
    schema: {
      time: "2:00 a.m.",
      color: "White",
      organ: "Skeleton",
      art: "Science",
      technique: "Catechistic Q&A",
      symbol: "Homecoming"
    },
    plotSummary: [
      "Bloom and Stephen arrive at Eccles Street, sharing cocoa and tentative conversation under a procedural question-and-answer format. The episode reframes intimacy as inquiry rather than confession.",
      "Scientific, astronomical, and domestic details are catalogued with almost bureaucratic precision. The style measures distance and proximity simultaneously, registering both companionship and non-coincidence.",
      "Stephen departs and Bloom returns to bed, where ordinary domestic space absorbs cosmic and emotional scale. Homecoming remains partial yet meaningful, grounded in enacted hospitality."
    ],
    stylisticAnalysis: [
      "Catechistic form converts narrative into epistemological instrument: each answer expands, qualifies, and reframes the question. Knowledge appears cumulative but never complete.",
      "Technical diction coexists with tenderness, generating a unique blend of parody and sincerity.",
      "The episode's restraint produces high emotional impact through precision rather than overt lyricism."
    ],
    arrangerPresence: [
      {
        cue: "Q&A macro-structure",
        commentary: "Arranger control is explicit in the interrogative architecture governing all disclosure."
      },
      {
        cue: "Calibration of shared and divergent trajectories",
        commentary: "The composition repeatedly stages near-connection without collapsing difference."
      },
      {
        cue: "Final re-entry to marital bedspace",
        commentary: "Narrative editing ties cosmic inventory back to domestic vulnerability."
      }
    ],
    intermediality: {
      music: [
        "Formal call-and-response resembles liturgical and pedagogic antiphony.",
        "Measured cadence creates a nocturne-like serenity."
      ],
      visualArts: [
        "Household objects are rendered as diagrammatic still-life.",
        "Astronomical passages evoke scientific illustration."
      ]
    },
    researchHotspots: ["Science and literature", "Narrative form", "Hospitality studies", "Object-oriented criticism"],
    characters: ["Leopold Bloom", "Stephen Dedalus", "Molly Bloom"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Episode 17 exemplifies visible arrangement through procedural form.",
        "The catechism both disciplines and protects affect."
      ],
      musicReferences: [
        "Antiphonal question-answer rhythm shapes reader expectation.",
        "Quiet tonal control contrasts with Circe's acoustic overload."
      ],
      literatureReview: [
        "Scholars debate whether Ithaca is parody of scientific rationality or ethical epistemology.",
        "Recent studies highlight infrastructure, water, and domestic technologies in the episode."
      ]
    }
  },
  18: {
    id: 18,
    title: "Penelope",
    subtitle: "Molly's nocturnal monologue and embodied memory",
    location: "7 Eccles Street bedroom",
    schema: {
      time: "3:00-4:00 a.m.",
      color: "Earth tones",
      organ: "Flesh",
      art: "Music",
      technique: "Unpunctuated interior monologue",
      symbol: "Earth mother"
    },
    plotSummary: [
      "Molly Bloom's monologue unfolds across memory, desire, resentment, domestic accounting, and sensual recall. Without conventional punctuation, thought arrives in surges that resist external regulation.",
      "She revisits lovers, marriage, motherhood, class aspiration, and bodily experience, revising earlier male-centered representations. The chapter re-centers narrative authority in a voice long mediated by others.",
      "The final affirmative movement gathers erotic memory and existential assent into the celebrated 'Yes.' Closure is both personal and formal: a counter-signature that reorients the novel's emotional ledger."
    ],
    stylisticAnalysis: [
      "Extended syntactic flow simulates breathing, rumination, and bodily temporality. Grammar becomes elastic medium for memory's non-linear return.",
      "Lexical shifts between colloquial bluntness and lyrical swell produce dynamic tonal range. The chapter's openness is carefully patterned through recurring motifs and affective loops.",
      "By minimizing overt narratorial punctuation, Joyce stages maximal immediacy while still relying on deep compositional control."
    ],
    arrangerPresence: [
      {
        cue: "Eight-sentence architecture",
        commentary: "Even apparent spontaneity is arranged into large-scale rhythmic units."
      },
      {
        cue: "Motif returns to Gibraltar and early courtship",
        commentary: "Narrative memory is edited through strategic recurrence, culminating in affirmative closure."
      },
      {
        cue: "Terminal 'Yes' placement",
        commentary: "The final word functions as compositional seal, evidencing deliberate endpoint design."
      }
    ],
    intermediality: {
      music: [
        "Molly's singerly consciousness shapes cadence, phrasing, and memory of performance culture.",
        "Aria-like swell toward the ending parallels operatic closure."
      ],
      visualArts: [
        "Body, bed, and room are rendered as intimate interior study.",
        "Memory images move like dissolves between portrait and landscape."
      ]
    },
    researchHotspots: ["Feminist narratology", "Embodiment studies", "Affect Theory", "Voice studies", "Queer temporalities"],
    characters: ["Molly Bloom", "Leopold Bloom", "Blazes Boylan", "Milly Bloom", "Stephen Dedalus"],
    scholarlyAnnotations: {
      arrangerNotes: [
        "Penelope is arranged freedom: formal containment enabling apparent uncontainment.",
        "The ending reframes prior episodes by granting Molly retrospective interpretive power."
      ],
      musicReferences: [
        "Vocal memory and operatic culture are core to Molly's cognitive rhythm.",
        "Cadential swell toward 'Yes' echoes musical resolution."
      ],
      literatureReview: [
        "Debates endure over agency, stereotype, and narrative liberation in Molly's voice.",
        "Recent criticism links Penelope to reproductive labor, colonial modernity, and sonic subjectivity."
      ]
    }
  }
};

export const ulyssesEpisodes: UlyssesEpisode[] = episodeOrder.map((episode) => {
  if (episode.id === 1) {
    return telemachus;
  }
  if (episode.id === 11) {
    return sirens;
  }
  return detailedEpisodes[episode.id];
});

export interface CharacterProfile {
  name: string;
  role: "Major" | "Minor";
  relationships: string[];
  episodes: number[];
}

export const characterProfiles: CharacterProfile[] = [
  {
    name: "Leopold Bloom",
    role: "Major",
    relationships: ["Molly Bloom (spouse)", "Stephen Dedalus (mentee/provisional son)"],
    episodes: [4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 18]
  },
  {
    name: "Molly Bloom",
    role: "Major",
    relationships: ["Leopold Bloom (spouse)", "Blazes Boylan (lover)"],
    episodes: [4, 8, 11, 18]
  },
  {
    name: "Stephen Dedalus",
    role: "Major",
    relationships: ["Buck Mulligan (rival companion)", "Leopold Bloom (host/fatherly figure)"],
    episodes: [1, 2, 3, 7, 9, 10, 14, 15, 16, 17]
  },
  {
    name: "The Citizen",
    role: "Minor",
    relationships: ["Leopold Bloom (ideological adversary)"],
    episodes: [12]
  },
  {
    name: "Bella Cohen",
    role: "Minor",
    relationships: ["Leopold Bloom (nighttown antagonist-host)", "Stephen Dedalus (witness)"],
    episodes: [15]
  }
];
