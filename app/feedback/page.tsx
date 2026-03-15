import Link from "next/link";
import { FeedbackComments } from "@/components/FeedbackComments";

export default function FeedbackPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <header className="rounded-2xl border border-charcoal/10 bg-white p-6">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-oxford">Reader&apos;s Feedback and Annotations</p>
        <h1 className="mt-2 font-literary text-4xl text-charcoal">The Reader&apos;s Margin</h1>
        <p className="mt-2 font-ui text-sm leading-7 text-charcoal/80">
          Share your interpretations, report errors, or suggest improvements for the Digital Arranger.
        </p>
      </header>

      <FeedbackComments />

      <div className="flex flex-wrap gap-4">
        <Link href="/" className="font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4">
          Return to Episode Viewer
        </Link>
        <Link href="/library" className="font-ui text-sm font-medium text-oxford underline decoration-1 underline-offset-4">
          Scholar&apos;s Library
        </Link>
      </div>
    </main>
  );
}
