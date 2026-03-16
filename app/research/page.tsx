import Link from "next/link";
import { GitCompare, MessageSquare } from "lucide-react";

const scholarlyWaves = [
  {
    title: "The Formalist/Structuralist Era",
    subtitle: "Schema, correspondences, and macro-architecture",
    detail:
      "Early Joyce criticism often treated Ulysses as a deliberately organized symbolic machine. Work by Stuart Gilbert and Frank Budgen emphasized Homeric correspondences, episode schemata, and compositional patterning, framing the novel as a codified structure that rewards disciplined mapping. This wave established durable scholarly habits: chapter-by-chapter alignment, taxonomy of motifs, and confidence in architectonic design as the primary route to interpretation."
  },
  {
    title: "The Post-Structuralist Turn",
    subtitle: "Textual fluidity, deconstruction, and feminist intervention",
    detail:
      "By the late twentieth century, critics increasingly challenged rigid structural certainty. Derridean readings foregrounded iterability, undecidability, and the machine-like replay of signification, while feminist theorists such as Helene Cixous reframed voice, embodiment, and textual multiplicity. In this wave, Ulysses becomes less a fixed symbolic map than a dynamic field where meaning is produced through difference, repetition, and contested interpretive authority."
  },
  {
    title: "Genetic Criticism (21st Century)",
    subtitle: "Fixed text vs. fluid text",
    detail:
      "Contemporary scholarship has moved deeply into notebooks, drafts, and revision layers, asking whether Ulysses should be read as a stable final artifact or as an evolving textual process. Researchers working in manuscript archives, including Buffalo materials, demonstrate how major stylistic effects emerge through iterative rewriting. This wave reorients criticism from solely interpreting the printed text to reconstructing the making of textual form itself."
  },
  {
    title: "Global Joyce and Decolonization",
    subtitle: "Reception beyond the metropolitan canon",
    detail:
      "Recent debates ask whether Ulysses reproduces imperial modernity or offers resources for anti-colonial reading and resistance. Global Joyce scholarship examines translation, pedagogy, and reception in the Global South, showing how local contexts reactivate the novel's politics. This wave treats Joyce not only as an Irish or European modernist but as a contested world author whose meanings are produced through transnational circulation."
  }
];

const dialectics = [
  {
    topic: "Narrative Mediation",
    icon: GitCompare,
    leftTitle: "Arranger as God-like Intelligence",
    leftView:
      "One position reads the arranger as a quasi-sovereign editor shaping sequence, perspective, and tonal emphasis from above, effectively governing how readers enter and evaluate each episode's formal field.",
    rightTitle: "Arranger as Mechanical Failure or Noise",
    rightView:
      "The opposing view treats mediation as unstable and occasionally self-disruptive: a system of splices, glitches, and overdetermined transitions that exposes the text's machinery rather than mastering it."
  },
  {
    topic: "Textual Ontology",
    icon: MessageSquare,
    leftTitle: "Ulysses as Fixed Canonical Text",
    leftView:
      "This approach prioritizes the published artifact as the decisive object of criticism, preserving close reading around stabilized wording, sequence, and formal closure in received editions.",
    rightTitle: "Ulysses as Fluid Processual Text",
    rightView:
      "Genetic critics counter that drafts and notebooks reveal a continuously reconfigured work, making compositional process essential to interpretation rather than merely supplemental historical context."
  }
];

export default function ResearchPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 md:px-8">
      <header className="rounded-2xl border border-charcoal/10 bg-white p-6">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-oxford">Research and Literature Review</p>
        <h1 className="mt-2 font-literary text-2xl text-charcoal md:text-4xl">A Map of Ideas in Ulysses Scholarship</h1>
        <p className="mt-2 font-ui text-base text-charcoal/90">
          This page tracks the major interpretive waves that shaped Joyce studies, from formal schema mapping to deconstruction,
          genetic criticism, and global decolonial reception.
        </p>
      </header>

      <section className="space-y-4">
        {scholarlyWaves.map((wave) => (
          <article key={wave.title} className="rounded-xl border border-charcoal/10 bg-white p-5">
            <p className="font-ui text-xs uppercase tracking-wide text-oxford">{wave.subtitle}</p>
            <h2 className="mt-1 font-literary text-2xl text-charcoal">{wave.title}</h2>
            <p className="mt-2 font-ui text-base leading-relaxed text-charcoal/95">{wave.detail}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-2xl border border-charcoal/10 bg-white p-5">
        <h2 className="font-literary text-2xl text-charcoal">Dialectic Debates</h2>
        <p className="font-ui text-sm text-charcoal/85">
          Opposed readings are presented side-by-side to foreground the conceptual tensions that continue to animate Joyce scholarship.
        </p>
        <div className="space-y-4">
          {dialectics.map((debate) => {
            const Icon = debate.icon;
            return (
              <article key={debate.topic} className="rounded-xl border border-charcoal/10 bg-parchment p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-oxford" />
                  <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">{debate.topic}</h3>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-charcoal/10 bg-white p-3">
                    <h4 className="font-ui text-sm font-semibold text-charcoal">{debate.leftTitle}</h4>
                    <p className="mt-2 font-ui text-sm leading-relaxed text-charcoal/90">{debate.leftView}</p>
                  </div>
                  <div className="rounded-lg border border-charcoal/10 bg-white p-3">
                    <h4 className="font-ui text-sm font-semibold text-charcoal">{debate.rightTitle}</h4>
                    <p className="mt-2 font-ui text-sm leading-relaxed text-charcoal/90">{debate.rightView}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Link href="/" className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4">
        Return to Episode Viewer
      </Link>
    </main>
  );
}
