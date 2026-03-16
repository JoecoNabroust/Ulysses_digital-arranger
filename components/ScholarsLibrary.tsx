"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { libraryTags, scholarsLibrary, type LibraryTag } from "@/data/library";

export function ScholarsLibrary() {
  const [activeTag, setActiveTag] = useState<LibraryTag>("All");

  const visibleWorks = useMemo(() => {
    if (activeTag === "All") {
      return scholarsLibrary;
    }

    return scholarsLibrary.filter((work) => work.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="rounded-2xl border border-charcoal/10 bg-white p-6">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-oxford">Scholar&apos;s Library</p>
        <h1 className="mt-2 font-literary text-2xl text-charcoal md:text-4xl">Foundational Works and Critical Pathways</h1>
        <p className="mt-2 max-w-3xl font-ui text-base text-charcoal/90">
          A curated bibliography of indispensable monographs and reference works for episode-level interpretation and
          long-form Joyce research.
        </p>
      </header>

      <section className="rounded-2xl border border-charcoal/10 bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {libraryTags.map((tag) => {
            const selected = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`min-h-11 rounded-full px-3 py-1.5 font-ui text-xs transition ${
                  selected
                    ? "bg-oxford text-white"
                    : "border border-charcoal/15 bg-parchment text-charcoal hover:border-oxford/40 hover:text-oxford"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {visibleWorks.map((work) => (
          <article key={work.id} className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
            <p className="font-ui text-xs uppercase tracking-wide text-oxford">{work.category}</p>
            <h2 className="mt-1 font-literary text-2xl leading-tight text-charcoal">{work.title}</h2>
            <p className="mt-1 font-ui text-base text-charcoal/85">
              {work.author} ({work.year})
            </p>

            <div className="mt-3 space-y-2 rounded-xl border border-charcoal/10 bg-parchment p-3">
              <p className="font-ui text-xs uppercase tracking-wide text-charcoal/80">The Scholar&apos;s Take</p>
              <p className="font-ui text-base leading-relaxed text-charcoal/95">{work.scholarsTake[0]}</p>
              <p className="font-ui text-base leading-relaxed text-charcoal/95">{work.scholarsTake[1]}</p>
            </div>

            <div className="mt-3">
              <p className="font-ui text-xs uppercase tracking-wide text-charcoal/80">Connection</p>
              <p className="mt-1 font-ui text-base text-charcoal/90">{work.connection.note}</p>
              <p className="mt-1 font-ui text-sm text-charcoal/80">Episodes: {work.connection.episodes.join(", ")}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {work.tags.map((tag) => (
                <button
                  key={`${work.id}-${tag}`}
                  type="button"
                  onClick={() => setActiveTag(tag as LibraryTag)}
                  className="min-h-11 rounded-full border border-charcoal/15 px-2.5 py-1 font-ui text-xs text-charcoal/90 hover:border-oxford/40 hover:text-oxford"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </article>
        ))}
      </section>

      {visibleWorks.length === 0 ? (
        <p className="rounded-xl border border-charcoal/10 bg-white p-4 font-ui text-base text-charcoal/85">
          No titles match this tag yet. Try another keyword.
        </p>
      ) : null}

      <Link href="/" className="inline-flex min-h-11 items-center gap-2 font-ui text-sm font-medium text-oxford underline underline-offset-4">
        <BookOpen className="h-4 w-4" />
        Return to Episode Viewer
      </Link>
    </main>
  );
}
