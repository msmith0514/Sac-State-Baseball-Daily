import { Header } from "@/components/Header";
import { PerformanceCard } from "@/components/PerformanceCard";
import { performances } from "@/lib/data/demo";

export function generateStaticParams() {
  return [{ date: "2026-08-17" }];
}

export default async function DailyArchivePage({ params }: { params: Promise<{date:string}> }) {
  const {date}=await params;
  return <main><Header/><section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><p className="text-xs font-black uppercase tracking-[.22em] text-hornet-700">Daily archive</p><h1 className="athletic-title mt-2 text-5xl text-hornet-950 sm:text-7xl">Yesterday's Hornets</h1><p className="mt-4 text-lg font-bold text-neutral-600">{date}</p><p className="mt-2 text-sm text-neutral-500">Prototype archive view using the same clearly labeled demo dataset as the homepage.</p><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{performances.map(p=><PerformanceCard key={p.slug} p={p}/>)}</div><article className="mt-10 rounded-4xl bg-white p-8 shadow-card"><p className="text-xs font-black uppercase tracking-[.18em] text-hornet-700">Daily Hornet Report</p><h2 className="mt-3 text-3xl font-black">Archived recap snapshot</h2><p className="mt-4 max-w-3xl leading-7 text-neutral-600">Production daily pages are immutable editorial snapshots. Corrections can be reprocessed from source records while preserving provenance and retrieval timestamps.</p></article></section></main>;
}
