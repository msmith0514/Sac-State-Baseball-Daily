import Image from "next/image";
import Link from "next/link";
import type { Performance } from "@/lib/data/demo";

export function PerformanceCard({ p }: { p: Performance }) {
  return <article className="card-hover overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card">
    <div className="relative h-56 bg-hornet-950">
      <Image src={p.photo} alt="Demo athlete placeholder" fill className="object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-hornet-950 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 flex gap-2">
        {p.badge && <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-black tracking-widest text-hornet-950">{p.badge}</span>}
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-gold-300">{p.team} · {p.level}</p>
        <h3 className="mt-1 text-2xl font-black">{p.name}</h3>
        <p className="mt-1 text-sm text-white/75">{p.position} · {p.sacYears}</p>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between gap-4 text-sm font-bold">
        <span>{p.opponent}</span>
        <span className={p.won ? "text-hornet-700" : "text-neutral-500"}>{p.result}</span>
      </div>
      <div className="mt-4 rounded-2xl bg-cream p-4">
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-neutral-500">Yesterday</p>
        <p className="stat-tabular mt-1 text-lg font-black text-hornet-950">{p.yesterday}</p>
        <p className="stat-tabular mt-2 text-sm font-semibold text-neutral-600">Season · {p.season}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-neutral-700">{p.summary}</p>
      <Link href={`/players/${p.slug}`} className="mt-4 inline-flex text-sm font-black text-hornet-800">View player profile →</Link>
    </div>
  </article>;
}
