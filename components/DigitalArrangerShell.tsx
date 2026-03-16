"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Book, BookOpen, Music, X, Zap } from "lucide-react";
import Link from "next/link";
import { ArrangerToggle } from "@/components/ArrangerToggle";
import { CharacterHub } from "@/components/CharacterHub";
import { EpisodeNavigation } from "@/components/EpisodeNavigation";
import { SchemaTable } from "@/components/SchemaTable";
import { useArrangerMode } from "@/context/ArrangerModeContext";
import { getRecommendedWorkForEpisode } from "@/data/library";
import { characterProfiles, ulyssesEpisodes } from "@/data/ulysses";

const transition = {
  type: "spring",
  stiffness: 130,
  damping: 20
};

export function DigitalArrangerShell() {
  const [activeEpisodeId, setActiveEpisodeId] = useState(1);
  const [notesOpen, setNotesOpen] = useState(false);
  const { arrangerMode } = useArrangerMode();

  const activeEpisode = useMemo(
    () => ulyssesEpisodes.find((episode) => episode.id === activeEpisodeId) ?? ulyssesEpisodes[0],
    [activeEpisodeId]
  );

  return (
    <div className="w-full max-w-full">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-6 md:flex-row md:px-8">
        <aside className="hidden w-full md:block md:w-64 md:shrink-0">
          <EpisodeNavigation
            episodes={ulyssesEpisodes}
            activeEpisodeId={activeEpisode.id}
            onSelectEpisode={setActiveEpisodeId}
          />
        </aside>

        <main className="w-full max-w-4xl space-y-6 break-words whitespace-normal md:mx-auto">
          <header className="rounded-2xl border border-charcoal/10 bg-white p-4 md:p-10">
            <p className="font-ui text-xs uppercase tracking-[0.18em] text-oxford">Modernist Archive</p>
            <h1 className="font-literary text-2xl text-charcoal md:text-4xl">Ulysses: The Digital Arranger</h1>
            <p className="mt-2 max-w-3xl font-ui text-base md:text-lg text-charcoal/90">
              A mobile-responsive scholarly environment combining episode structure, stylistic analysis, and Hayman-inspired
              arranger cues for teaching and research.
            </p>
            <div className="mt-4">
              <ArrangerToggle />
              <div className="mt-3 hidden flex-wrap items-center gap-4 md:flex">
                <Link
                  href="/research"
                  className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4"
                >
                  Literature Review and Debates
                </Link>
                <Link
                  href="/library"
                  className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4"
                >
                  Scholar&apos;s Library
                </Link>
                <Link
                  href="/feedback"
                  className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4"
                >
                  Feedback
                </Link>
              </div>
              <div className="mt-3 grid gap-2 md:hidden">
                <Link href="/research" className="inline-flex min-h-11 items-center rounded-lg bg-parchment px-3 font-ui text-sm text-oxford">
                  Literature Review and Debates
                </Link>
                <Link href="/library" className="inline-flex min-h-11 items-center rounded-lg bg-parchment px-3 font-ui text-sm text-oxford">
                  Scholar&apos;s Library
                </Link>
                <Link href="/feedback" className="inline-flex min-h-11 items-center rounded-lg bg-parchment px-3 font-ui text-sm text-oxford">
                  Feedback
                </Link>
              </div>
            </div>
          </header>

        <div className="block lg:hidden">
          <EpisodeNavigation
            episodes={ulyssesEpisodes}
            activeEpisodeId={activeEpisode.id}
            onSelectEpisode={setActiveEpisodeId}
            mobile
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeEpisode.id}
            initial={{ opacity: 0, x: 16, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -16, rotateY: 10 }}
            transition={transition}
            className="flex w-full flex-col gap-6 md:flex-row"
          >
            <article className="relative box-border w-full min-w-0 overflow-hidden space-y-5 break-words whitespace-normal rounded-2xl border border-charcoal/10 bg-white p-4 md:w-[62%] md:p-10">
              <div>
                <p className="font-ui text-xs uppercase tracking-wider text-charcoal/80">Episode {activeEpisode.id}</p>
                <h2 className="font-literary text-2xl text-charcoal md:text-3xl">{activeEpisode.title}</h2>
                <p className="font-ui text-base md:text-lg text-charcoal/85">{activeEpisode.subtitle}</p>
                <p className="mt-1 font-ui text-sm text-charcoal/80">{activeEpisode.location}</p>
              </div>

              <SchemaTable schema={activeEpisode.schema} />

              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-oxford" />
                  <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Plot Arc</h3>
                </div>
                {activeEpisode.plotSummary.map((paragraph, index) => (
                  <p key={`${activeEpisode.id}-plot-${index}`} className="font-literary text-base md:text-lg leading-relaxed text-charcoal">
                    {paragraph}
                  </p>
                ))}
              </section>

              <section className="space-y-3">
                <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Stylistic Analysis</h3>
                {activeEpisode.stylisticAnalysis.map((note, index) => (
                  <p
                    key={`${activeEpisode.id}-style-${index}`}
                    className={`rounded-lg p-3 font-ui text-base md:text-lg leading-relaxed ${
                      arrangerMode ? "border border-oxford/30 bg-oxford/5" : "bg-parchment"
                    }`}
                  >
                    {note}
                  </p>
                ))}
              </section>
            </article>

            <article className="hidden box-border w-full min-w-0 break-words whitespace-normal space-y-5 rounded-2xl border border-charcoal/10 bg-white p-4 md:block md:w-[38%] md:p-10">
              <NotesPanel episodeId={activeEpisode.id} arrangerMode={arrangerMode} />
            </article>
          </motion.section>
        </AnimatePresence>

        <CharacterHub characters={characterProfiles} />
        </main>
      </div>

      <button
        type="button"
        onClick={() => setNotesOpen(true)}
        className="fixed bottom-6 right-6 z-20 inline-flex min-h-11 items-center gap-2 rounded-full bg-oxford px-4 py-3 font-ui text-sm text-white shadow-lg lg:hidden"
      >
        <Zap className="h-4 w-4" />
        Notes
      </button>

      <AnimatePresence>
        {notesOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNotesOpen(false)}
              className="fixed inset-0 z-30 bg-charcoal/30 lg:hidden"
            />
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={transition}
              className="fixed inset-x-0 bottom-0 z-40 max-h-[78vh] overflow-y-auto rounded-t-2xl border-t border-charcoal/10 bg-white p-5 lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Scholarly Notes</h3>
                <button
                  type="button"
                  className="min-h-11 min-w-11 rounded-full p-2.5 text-charcoal/80 hover:bg-parchment"
                  onClick={() => setNotesOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <NotesPanel episodeId={activeEpisode.id} arrangerMode={arrangerMode} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function NotesPanel({ episodeId, arrangerMode }: { episodeId: number; arrangerMode: boolean }) {
  const episode = useMemo(
    () => ulyssesEpisodes.find((entry) => entry.id === episodeId) ?? ulyssesEpisodes[0],
    [episodeId]
  );
  const recommendedWork = useMemo(() => getRecommendedWorkForEpisode(episode.id), [episode.id]);

  return (
    <>
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-oxford" />
          <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Arranger Notes</h3>
        </div>
        {episode.arrangerPresence.map((note, index) => (
          <div
            key={`${episode.id}-arranger-${index}`}
            className={`rounded-lg border p-3 ${
              arrangerMode ? "border-oxford/40 bg-oxford/5" : "border-charcoal/10 bg-parchment"
            }`}
          >
            <p className="font-ui text-xs uppercase tracking-wide text-charcoal/80">{note.cue}</p>
            <p className="mt-1 font-ui text-base leading-relaxed text-charcoal/95">{note.commentary}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Music className="h-4 w-4 text-oxford" />
          <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Intermediality</h3>
        </div>
        <ul className="space-y-2">
          {episode.intermediality.music.map((item, index) => (
            <li key={`${episode.id}-music-${index}`} className="rounded-lg bg-parchment p-3 font-ui text-base text-charcoal/95">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Literature Review</h3>
        <ul className="space-y-2">
          {episode.scholarlyAnnotations.literatureReview.map((item, index) => (
            <li key={`${episode.id}-lit-${index}`} className="rounded-lg bg-parchment p-3 font-ui text-base text-charcoal/95">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-xl border border-charcoal/10 bg-white p-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-oxford" />
          <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Further Reading</h3>
        </div>
        <p className="font-literary text-lg text-charcoal">
          {recommendedWork.title} ({recommendedWork.year})
        </p>
        <p className="font-ui text-base text-charcoal/90">{recommendedWork.author}</p>
        <p className="font-ui text-base leading-relaxed text-charcoal/95">{recommendedWork.connection.note}</p>
        <Link
          href="/library"
          className="inline-flex min-h-11 items-center font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4"
        >
          Open full Scholar&apos;s Library
        </Link>
      </section>
    </>
  );
}
