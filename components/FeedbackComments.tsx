"use client";

import dynamic from "next/dynamic";
import { LoaderCircle, MessageSquareHeart } from "lucide-react";

const Giscus = dynamic(() => import("@giscus/react"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-charcoal/10 bg-white">
      <div className="flex items-center gap-2 font-ui text-sm text-charcoal/70">
        <LoaderCircle className="h-4 w-4 animate-spin text-oxford" />
        Loading annotations...
      </div>
    </div>
  )
});

const repo = "JoecoNabroust/Ulysses_digital-arranger";
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const category = "General";
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

export function FeedbackComments() {
  if (!repoId || !categoryId) {
    return (
      <div className="rounded-xl border border-charcoal/10 bg-white p-4 font-ui text-sm text-charcoal/80">
        <p className="font-medium text-charcoal">Giscus setup needed.</p>
        <p className="mt-2">
          Add <code>NEXT_PUBLIC_GISCUS_REPO_ID</code> and <code>NEXT_PUBLIC_GISCUS_CATEGORY_ID</code> to your Vercel and
          local environment to enable comments for <code>{repo}</code> in the <code>{category}</code> category.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      <div className="rounded-xl border border-charcoal/10 bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquareHeart className="h-4 w-4 text-oxford" />
          <h2 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/70">Scholar&apos;s Note</h2>
        </div>
        <p className="font-ui text-sm leading-7 text-charcoal/85">
          The Reader&apos;s Margin is a space for constructive Joycean dialogue. Share interpretations, textual corrections, and
          methodological suggestions with collegial rigor; critique ideas, not people.
        </p>
      </div>

      <div className="rounded-xl border border-charcoal/10 bg-white p-3 sm:p-4">
        <Giscus
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  );
}
