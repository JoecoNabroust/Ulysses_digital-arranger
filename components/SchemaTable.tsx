import type { EpisodeSchema } from "@/data/ulysses";

export function SchemaTable({ schema }: { schema: EpisodeSchema }) {
  const rows = [
    { label: "Time", value: schema.time },
    { label: "Color", value: schema.color },
    { label: "Organ", value: schema.organ },
    { label: "Art", value: schema.art },
    { label: "Technique", value: schema.technique },
    { label: "Symbol", value: schema.symbol }
  ];

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-charcoal/10 bg-parchment/50 pb-4 scrollbar-thin md:overflow-visible">
      <div className="mb-2 px-4 pt-3 font-ui text-xs text-charcoal/80 md:hidden">Swipe left/right to view more</div>
      <div className="flex min-w-max flex-row flex-nowrap gap-6 px-4 pb-3 md:min-w-0 md:justify-between">
        {rows.map((row) => (
          <div key={row.label} className="flex-shrink-0 whitespace-nowrap rounded-lg border border-charcoal/10 bg-white px-3 py-2">
            <p className="font-ui text-xs uppercase tracking-wide text-charcoal/80">{row.label}</p>
            <p className="font-ui text-sm text-charcoal md:text-base">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
