import { Users } from "lucide-react";
import type { CharacterProfile } from "@/data/ulysses";

export function CharacterHub({ characters }: { characters: CharacterProfile[] }) {
  return (
    <section className="rounded-2xl border border-charcoal/10 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <Users className="h-4 w-4 text-oxford" />
        <h3 className="font-ui text-sm font-semibold uppercase tracking-wide text-charcoal/85">Character Hub</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {characters.map((character) => (
          <article key={character.name} className="rounded-xl border border-charcoal/10 bg-parchment p-4">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-literary text-lg text-charcoal">{character.name}</h4>
              <span className="font-ui text-xs uppercase tracking-wide text-oxford">{character.role}</span>
            </div>
            <p className="mt-2 font-ui text-base text-charcoal/90">{character.relationships.join(" | ")}</p>
            <p className="mt-3 font-ui text-sm text-charcoal/80">Episodes: {character.episodes.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
