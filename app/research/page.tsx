import Link from "next/link";

const debates = [
  {
    title: "The 'New' Ulysses Controversy",
    detail:
      "Debate around Gabler's critical edition and textual authority continues to shape editorial ethics, pedagogy, and digital variorum work."
  },
  {
    title: "Odyssey Parallels: Framework or Overdetermination",
    detail:
      "Gilbert/Linati schemas remain heuristic anchors, yet contemporary scholars reassess whether Homeric parallels constrain rather than illuminate reading."
  },
  {
    title: "Arranger and Genetic Criticism",
    detail:
      "Hayman's arranger model intersects with manuscript studies, inviting renewed attention to composition stages and narrative mediation."
  },
  {
    title: "Empire, Nation, and Urban Modernity",
    detail:
      "Post-colonial criticism reframes Dublin as an imperial contact zone where language, commerce, and embodiment become political form."
  }
];

export default function ResearchPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 md:px-8">
      <header className="rounded-2xl border border-charcoal/10 bg-white p-6">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-oxford">Research and Literature Review</p>
        <h1 className="mt-2 font-literary text-2xl text-charcoal md:text-4xl">Key Debates in Ulysses Studies</h1>
        <p className="mt-2 font-ui text-base text-charcoal/90">
          This page collects high-value scholarly conversations for coursework, thesis framing, and digital humanities annotation.
        </p>
      </header>

      <section className="space-y-3">
        {debates.map((debate) => (
          <article key={debate.title} className="rounded-xl border border-charcoal/10 bg-white p-5">
            <h2 className="font-literary text-2xl text-charcoal">{debate.title}</h2>
            <p className="mt-2 font-ui text-base leading-relaxed text-charcoal/95">{debate.detail}</p>
          </article>
        ))}
      </section>

      <Link href="/" className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4">
        Return to Episode Viewer
      </Link>
    </main>
  );
}
