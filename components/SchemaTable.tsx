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
    <div className="mb-8 w-full">
      <div className="w-full overflow-x-auto rounded-xl border border-charcoal/10 bg-parchment/50 pb-4 scrollbar-thin md:hidden">
        <div className="mb-2 px-4 pt-3 font-ui text-xs text-charcoal/80">Swipe left/right to view more</div>
        <div className="flex flex-row flex-nowrap gap-4 px-4 pb-3 snap-x snap-mandatory">
          {rows.map((row) => (
            <div
              key={row.label}
              className="min-w-[120px] flex-shrink-0 snap-start rounded-lg border border-charcoal/10 bg-white px-3 py-3 whitespace-normal break-normal [overflow-wrap:break-word] [word-break:normal]"
            >
              <p className="font-ui text-xs font-semibold uppercase tracking-wide text-charcoal/70">{row.label}</p>
              <p className="mt-1 font-ui text-base text-charcoal">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden w-full rounded-xl border border-gray-200 bg-gray-100/50 p-4 md:block md:p-6">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {rows.map((row) => (
            <div
              key={row.label}
              className="min-w-0 rounded-lg border border-charcoal/10 bg-white p-3 whitespace-normal break-normal [overflow-wrap:break-word] [word-break:normal]"
            >
              <p className="font-ui text-xs font-semibold uppercase tracking-wide text-charcoal/70">{row.label}</p>
              <p className="mt-1 font-ui text-base md:text-lg text-charcoal">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
