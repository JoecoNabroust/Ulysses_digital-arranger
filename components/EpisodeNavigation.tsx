import type { UlyssesEpisode } from "@/data/ulysses";

interface EpisodeNavigationProps {
  episodes: UlyssesEpisode[];
  activeEpisodeId: number;
  onSelectEpisode: (episodeId: number) => void;
  mobile?: boolean;
}

export function EpisodeNavigation({ episodes, activeEpisodeId, onSelectEpisode, mobile = false }: EpisodeNavigationProps) {
  if (mobile) {
    return (
      <nav className="rounded-2xl border border-charcoal/10 bg-white p-3">
        <h2 className="mb-3 px-2 font-ui text-xs uppercase tracking-wide text-charcoal/80">Episodes</h2>
        <ul className="flex gap-2 overflow-x-auto pb-1">
          {episodes.map((episode) => {
            const isActive = episode.id === activeEpisodeId;
            return (
              <li key={episode.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectEpisode(episode.id)}
                  className={`min-h-11 rounded-lg px-3 py-2 text-left font-ui text-sm transition ${
                    isActive ? "bg-oxford text-white" : "bg-parchment text-charcoal hover:text-oxford"
                  }`}
                >
                  <span className="mr-2 inline-block min-w-6 text-xs opacity-90">{episode.id.toString().padStart(2, "0")}</span>
                  {episode.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl border border-charcoal/10 bg-white p-3">
      <h2 className="mb-3 px-2 font-ui text-xs uppercase tracking-wide text-charcoal/80">Episodes</h2>
      <ul className="space-y-1">
        {episodes.map((episode) => {
          const isActive = episode.id === activeEpisodeId;

          return (
            <li key={episode.id}>
              <button
                type="button"
                onClick={() => onSelectEpisode(episode.id)}
                className={`min-h-11 w-full rounded-lg px-3 py-2 text-left font-ui text-sm transition ${
                  isActive
                    ? "bg-oxford text-white"
                    : "text-charcoal hover:bg-parchment hover:text-oxford"
                }`}
              >
                <span className="mr-2 inline-block min-w-6 text-xs opacity-80">{episode.id.toString().padStart(2, "0")}</span>
                {episode.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
