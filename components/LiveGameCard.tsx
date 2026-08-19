import Link from "next/link";
import type { LiveGame } from "@/lib/data/demo";

export function LiveGameCard({ game }: { game: LiveGame }) {
  return <article className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white shadow-card backdrop-blur">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[.2em] text-red-200">Live now</span>
        </div>
        <h3 className="mt-2 text-xl font-black">{game.playerName}</h3>
        <p className="mt-1 text-sm font-semibold text-white/65">{game.team} · {game.position}</p>
      </div>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-gold-300">{game.liveDetail}</span>
    </div>

    <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-black/15 p-4 text-center">
      <div className="text-left"><p className="text-[10px] font-bold uppercase tracking-wide text-white/45">{game.team}</p><p className="stat-tabular mt-1 text-2xl font-black">{game.teamScore ?? "—"}</p></div>
      <span className="text-xs font-black text-white/35">VS</span>
      <div className="text-right"><p className="text-[10px] font-bold uppercase tracking-wide text-white/45">{game.opponent}</p><p className="stat-tabular mt-1 text-2xl font-black">{game.opponentScore ?? "—"}</p></div>
    </div>

    <div className="mt-4 rounded-2xl border border-gold-300/20 bg-gold-300/10 p-4">
      <p className="text-[10px] font-black uppercase tracking-[.18em] text-gold-300">Where to watch</p>
      <p className="mt-1 text-sm font-bold">{game.watchLabel ?? "Broadcast info unavailable"}</p>
      {game.watchUrl ? <a href={game.watchUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-gold-500 px-4 py-2 text-xs font-black text-hornet-950">Watch live ↗</a> : <p className="mt-2 text-xs text-white/45">No verified watch link is available for this demo record.</p>}
    </div>

    <Link href={`/players/${game.playerSlug}`} className="mt-4 inline-flex text-sm font-black text-gold-300">Open player profile →</Link>
  </article>;
}
