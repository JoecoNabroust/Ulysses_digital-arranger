import type { EpisodeSchema } from "@/data/ulysses";

export function SchemaTable({ schema }: { schema: EpisodeSchema }) {
  const rows = [
    { label: "Time", value: schema.time },
    { label: "Color", value: schema.color },
    { label: "Organ", value: schema.organ },
    { label: "Displine", value: schema.art },
    { label: "Technique", value: schema.technique },
    { label: "Symbol", value: schema.symbol }
  ];

  return (
    <div className="mb-8 w-full">
      <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-50/60 pb-4 scrollbar-thin md:hidden">
        <div className="mb-2 px-4 pt-3 font-ui text-xs text-charcoal/80">Swipe left/right to view more</div>
        <div className="flex flex-row flex-nowrap gap-4 px-4 pb-3 snap-x snap-mandatory">
          {rows.map((row) => (
            <div
              key={row.label}
              className="min-w-[120px] flex-shrink-0 snap-start rounded-lg border border-slate-100 bg-slate-50/80 p-3"
            >
              <span className="mb-1 block font-ui text-[10px] uppercase tracking-wider text-slate-500">{row.label}</span>
              <p className="font-ui text-sm font-medium leading-tight text-slate-800 whitespace-normal break-normal [word-break:normal] [overflow-wrap:normal]">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden w-full max-w-full rounded-xl border border-slate-200 bg-slate-50/60 p-4 md:block md:w-full md:p-6">
        <div className="md:grid md:w-full md:grid-cols-3 md:gap-6">
          {rows.map((row) => (
            <div
              key={row.label}
              className="min-w-0 rounded-lg border border-slate-100 bg-slate-50/80 p-3"
            >
              <span className="mb-1 block font-ui text-[10px] uppercase tracking-wider text-slate-500">{row.label}</span>
              <p className="font-ui text-sm md:text-base font-medium text-slate-800 leading-tight whitespace-normal break-normal [word-break:normal] [overflow-wrap:normal]">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
