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
  "Mythic",
  "Archetypal"
] as const;

export type LibraryTag = (typeof libraryTags)[number];

export function getRecommendedWorkForEpisode(episodeId: number): ScholarWork {
  const priority = scholarsLibrary.find((work) => work.id === "gifford-1988");
  const match = scholarsLibrary.find((work) => work.connection.episodes.includes(episodeId));
  return match ?? priority ?? scholarsLibrary[0];
}
