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
    <div className="overflow-x-auto rounded-xl border border-charcoal/10 bg-white">
      <table className="min-w-[560px] w-full text-left text-sm sm:text-base">
        <thead className="bg-parchment">
          <tr>
            {rows.map((row) => (
              <th key={row.label} className="px-4 py-3 font-semibold text-charcoal">
                {row.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map((row) => (
              <td key={row.label} className="px-4 py-3 text-charcoal/90">
                {row.value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
