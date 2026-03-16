export type LibraryCategory = "Foundational" | "Narratological" | "Genetic Criticism" | "Historical Context";

export interface ScholarWork {
  id: string;
  title: string;
  author: string;
  year: number;
  category: LibraryCategory;
  tags: string[];
  scholarsTake: [string, string];
  connection: {
    note: string;
    episodes: number[];
  };
}

export const scholarsLibrary: ScholarWork[] = [
  {
    id: "ellmann-1959-1982",
    title: "James Joyce",
    author: "Richard Ellmann",
    year: 1959,
    category: "Foundational",
    tags: ["Biography", "History", "Bloom"],
    scholarsTake: [
      "Ellmann's biography remains the definitive life-study of Joyce, combining archival depth, correspondence, and anecdotal reconstruction to track the writer's movement from Dublin to Trieste, Zurich, and Paris with extraordinary narrative precision.",
      "For Ulysses research, the book is indispensable because it links lived experience, social networks, and linguistic environments to compositional decisions, including the shaping of Leopold Bloom as a figure grounded in urban realism, exile, and intimate domestic memory."
    ],
    connection: {
      note: "Most useful for contextualizing biographical and compositional pressures across all episodes, especially 4, 8, 11, and 18.",
      episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }
  },
  {
    id: "gilbert-1930",
    title: "James Joyce's Ulysses",
    author: "Stuart Gilbert",
    year: 1930,
    category: "Foundational",
    tags: ["Narrative", "Schema", "Odyssey"],
    scholarsTake: [
      "Gilbert's study codifies early schema-thinking and provides one of the most influential maps of episode correspondences.",
      "Even when contemporary criticism challenges strict one-to-one parallels, this text remains indispensable for understanding how Ulysses was first academically systematized."
    ],
    connection: {
      note: "Most helpful for establishing macro-structure across all episodes, especially schematic episodes like 9 and 14.",
      episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }
  },
  {
    id: "kenner-1978",
    title: "Joyce's Voices",
    author: "Hugh Kenner",
    year: 1978,
    category: "Narratological",
    tags: ["Narrative", "Arranger", "Style"],
    scholarsTake: [
      "Kenner's account of narrative ventriloquism, including the famous 'Uncle Charles Principle,' reorients readers to Joyce's unstable voice management.",
      "For Arranger-focused reading, this work is foundational because it shows how apparently neutral narration is often strategically tilted."
    ],
    connection: {
      note: "Especially useful for style-shift episodes and mediated focalization, including 1, 7, 12, and 13.",
      episodes: [1, 7, 12, 13]
    }
  },
  {
    id: "gifford-1988",
    title: "Ulysses Annotated",
    author: "Don Gifford with Robert J. Seidman",
    year: 1988,
    category: "Foundational",
    tags: ["Reference", "History", "Annotation"],
    scholarsTake: [
      "Gifford remains the everyday working companion for decoding local references, historical allusions, and Dublin minutiae.",
      "Its indispensability lies in practical scholarly infrastructure: it saves time, sharpens close reading, and keeps interpretation text-grounded."
    ],
    connection: {
      note: "Essential across all episodes; particularly strong for dense allusive zones such as 3, 9, 11, and 15.",
      episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }
  },
  {
    id: "hayman-1970",
    title: "Ulysses: The Mechanics of Meaning",
    author: "David Hayman",
    year: 1970,
    category: "Narratological",
    tags: ["Arranger", "Narrative", "Form"],
    scholarsTake: [
      "Hayman articulates the Arranger as the hidden editorial intelligence coordinating sequence, tone, and transition.",
      "The book is indispensable for understanding how Joyce can stage apparent spontaneity while retaining tight compositional control."
    ],
    connection: {
      note: "Most useful for episodes with overt compositional intervention, especially 10, 11, 14, and 15.",
      episodes: [10, 11, 14, 15]
    }
  },
  {
    id: "eco-chaosmos",
    title: "The Aesthetics of Chaosmos",
    author: "Umberto Eco",
    year: 1989,
    category: "Narratological",
    tags: ["Thomism", "Modernism", "Form"],
    scholarsTake: [
      "Eco foregrounds Joyce's negotiation between medieval taxonomic order and modernist fragmentation, arguing that Ulysses composes a controlled chaosmos where structure and disjunction are mutually constitutive rather than contradictory.",
      "His framework is especially productive for reading how scholastic habits of classification survive within stylistic rupture, helping scholars map Thomist residues, symbolic architecture, and epistemic instability across episodes that appear formally anarchic on first encounter."
    ],
    connection: {
      note: "Particularly useful for formal-theoretical readings of episodes 3, 9, 14, and 17.",
      episodes: [3, 9, 14, 17]
    }
  },
  {
    id: "bowen-music",
    title: "Musical Allusions in the Works of James Joyce",
    author: "Zack Bowen",
    year: 1974,
    category: "Historical Context",
    tags: ["Musicology", "Intermediality", "Sirens"],
    scholarsTake: [
      "Bowen's study systematically catalogs musical references across Joyce's corpus, demonstrating how tune recognition, lyric fragments, and performance culture function as interpretive engines rather than decorative allusion.",
      "For Ulysses, his work is indispensable in episode 11 because it clarifies how sonic citation, operatic memory, and rhythmic patterning organize narrative perception, social coding, and affective tempo in ways inseparable from prose form."
    ],
    connection: {
      note: "Best for intermedial and acoustic readings, especially episodes 11, 13, and 18.",
      episodes: [11, 13, 18]
    }
  },
  {
    id: "budgen-1934",
    title: "James Joyce and the Making of Ulysses",
    author: "Frank Budgen",
    year: 1934,
    category: "Historical Context",
    tags: ["Composition", "History", "Process"],
    scholarsTake: [
      "Budgen preserves invaluable anecdotal evidence about Joyce's compositional priorities and working methods.",
      "Though memoir evidence must be handled critically, it offers unmatched proximity to the novel's making and revision culture."
    ],
    connection: {
      note: "Particularly strong for process-heavy episodes and stylistic experiments, including 11, 14, and 15.",
      episodes: [11, 14, 15]
    }
  },
  {
    id: "senn-1995",
    title: "Inductive Scrutinies: Focus on Joyce",
    author: "Fritz Senn",
    year: 1995,
    category: "Narratological",
    tags: ["Close Reading", "Narrative", "Language"],
    scholarsTake: [
      "Senn models patient, micro-level reading that resists over-systematization while still tracking Joyce's formal exactitude.",
      "The work is indispensable for training scholarly attention to lexical nuance, ambiguity, and local textual effects."
    ],
    connection: {
      note: "Best for episodes requiring granular linguistic scrutiny, notably 3, 9, 16, and 17.",
      episodes: [3, 9, 16, 17]
    }
  },
  {
    id: "groden-2001",
    title: "Ulysses in Progress",
    author: "Michael Groden",
    year: 2001,
    category: "Genetic Criticism",
    tags: ["Genetic", "Manuscripts", "Revision"],
    scholarsTake: [
      "Groden's manuscript-based analysis demonstrates how Ulysses evolved through staged revision and expansion.",
      "It is indispensable for scholars who want to connect final textual effects with compositional history rather than treating the printed text as a static endpoint."
    ],
    connection: {
      note: "Most useful where revision pressure and formal experimentation are intense, including 10, 14, and 15.",
      episodes: [10, 14, 15]
    }
  },
  {
    id: "crispi-creative-process",
    title: "Joyce's Creative Process and the Construction of Ulysses",
    author: "Luca Crispi",
    year: 2019,
    category: "Genetic Criticism",
    tags: ["Genetic", "Buffalo Notebooks", "Fluid Text"],
    scholarsTake: [
      "Crispi represents the twenty-first-century genetic turn by tracing compositional layering through notebooks, drafts, and revision strata, including material associated with the Buffalo Joyce archive and related manuscript ecologies.",
      "His work reframes Ulysses as a processual object, not a single terminal artifact, and equips scholars to analyze how thematic density, stylistic deformation, and episode architecture emerge through serial rewriting rather than static authorial design."
    ],
    connection: {
      note: "Crucial for manuscript-based study of formal evolution in episodes 10, 14, 15, and 18.",
      episodes: [10, 14, 15, 18]
    }
  },
  {
    id: "dettmar-2006",
    title: "A Companion to James Joyce",
    author: "Kevin J. H. Dettmar (ed.)",
    year: 2006,
    category: "Historical Context",
    tags: ["History", "Theory", "Companion"],
    scholarsTake: [
      "This companion collects major critical approaches and situates Joyce studies within changing methodological debates.",
      "Its strength is synthetic range: ideal for orienting new research questions before deep episode-level specialization."
    ],
    connection: {
      note: "Helpful as a framing volume for all episodes, with strong entry points for 6, 12, and 18.",
      episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }
  },
  {
    id: "attridge-2004",
    title: "James Joyce's Ulysses: A Casebook",
    author: "Derek Attridge (ed.)",
    year: 2004,
    category: "Historical Context",
    tags: ["Critical History", "Reception", "Teaching"],
    scholarsTake: [
      "Attridge's casebook curates landmark critical essays, making visible the changing reception history of Ulysses.",
      "It is indispensable for scholars who need to teach debates historically and position their own interventions in relation to prior criticism."
    ],
    connection: {
      note: "Excellent for historically framing interpretive controversies around episodes 9, 12, and 18.",
      episodes: [9, 12, 18]
    }
  },
  {
    id: "campbell-1991",
    title: "Mythic Worlds, Modern Words: On the Art of James Joyce",
    author: "Joseph Campbell",
    year: 1991,
    category: "Historical Context",
    tags: ["Mythic", "Archetypal", "Odyssey"],
    scholarsTake: [
      "Campbell reads Joyce through comparative mythology, emphasizing recurrent archetypal patterns and ritual structures beneath modern Dublin life.",
      "For Ulysses, he highlights how Homeric scaffolding and symbolic recurrence organize the narrative's apparent everyday sprawl into a coherent mythic architecture."
    ],
    connection: {
      note: "Especially useful for Odyssey correspondences and archetypal framing in episodes 1, 9, 10, and 18.",
      episodes: [1, 9, 10, 18]
    }
  },
  {
    id: "gould-global-joyce",
    title: "Global Joyce",
    author: "Warwick Gould (ed.)",
    year: 2004,
    category: "Historical Context",
    tags: ["Global Joyce", "Post-colonial", "Reception"],
    scholarsTake: [
      "This edited volume extends Joyce studies beyond Euro-American canons by charting translation, circulation, and institutional uptake across multiple linguistic and geopolitical contexts.",
      "Its key contribution is methodological: Ulysses becomes a world-text whose meanings shift through local receptions, colonial histories, and pedagogical infrastructures, making comparative and post-colonial analysis central rather than supplementary."
    ],
    connection: {
      note: "Most useful for reception and decolonial frameworks in episodes 1, 10, 12, and 18.",
      episodes: [1, 10, 12, 18]
    }
  },
  {
    id: "derrida-gramophone",
    title: "Ulysses Gramophone: Hear Say Yes in Joyce",
    author: "Jacques Derrida",
    year: 1984,
    category: "Narratological",
    tags: ["Deconstruction", "Yes", "Post-Structuralism"],
    scholarsTake: [
      "Derrida reads Joyce through iterability, citation, and machine-like textual repetition, arguing that the famous Joycean 'yes' exceeds stable intention and becomes an event of differential reinscription.",
      "The essay is pivotal for post-structuralist scholarship because it treats Ulysses as a textual apparatus that records, replays, and dislocates voice, destabilizing closure while opening new accounts of affirmation, technology, and reading practice."
    ],
    connection: {
      note: "Essential for deconstructive approaches to episodes 11, 15, 17, and especially 18.",
      episodes: [11, 15, 17, 18]
    }
  },
  {
    id: "moseley-2022",
    title: "The Oxford Handbook of James Joyce",
    author: "Brian L. Price, John Whittier-Ferguson, and Maud Ellmann (eds.)",
    year: 2022,
    category: "Historical Context",
    tags: ["21st Century", "Theory", "Global Joyce"],
    scholarsTake: [
      "This handbook captures contemporary Joyce studies across race, gender, transnational modernism, media history, and new formalism.",
      "It is indispensable for twenty-first-century research because it connects canonical close reading to current critical vocabularies and global contexts."
    ],
    connection: {
      note: "Useful across the board, with strong contemporary frameworks for 10, 12, 15, and 18.",
      episodes: [10, 12, 15, 18]
    }
  }
];

export const libraryTags = [
  "All",
  "Narrative",
  "Schema",
  "Odyssey",
  "Arranger",
  "Style",
  "Reference",
  "History",
  "Annotation",
  "Composition",
  "Close Reading",
  "Language",
  "Genetic",
  "Manuscripts",
  "Revision",
  "Theory",
  "Critical History",
  "Reception",
  "Teaching",
  "21st Century",
  "Global Joyce",
  "Biography",
  "Bloom",
  "Thomism",
  "Modernism",
  "Musicology",
  "Intermediality",
  "Sirens",
  "Buffalo Notebooks",
  "Fluid Text",
  "Post-colonial",
  "Deconstruction",
  "Yes",
  "Post-Structuralism",
  "Mythic",
  "Archetypal"
] as const;

export type LibraryTag = (typeof libraryTags)[number];

export function getRecommendedWorkForEpisode(episodeId: number): ScholarWork {
  const priority = scholarsLibrary.find((work) => work.id === "gifford-1988");
  const match = scholarsLibrary.find((work) => work.connection.episodes.includes(episodeId));
  return match ?? priority ?? scholarsLibrary[0];
}
