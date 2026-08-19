import { Header } from "@/components/Header";
import { PerformanceCard } from "@/components/PerformanceCard";
import { performances } from "@/lib/data/demo";

export const metadata = { title: "Hornets in Baseball" };

export default function PlayersPage() {
  return <main><Header /><section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><p className="text-xs font-black uppercase tracking-[.22em] text-hornet-700">Player directory</p><h1 className="athletic-title mt-2 text-5xl text-hornet-950 sm:text-7xl">Hornets in Baseball</h1><p className="mt-4 max-w-2xl text-neutral-600">Search and filter current Sacramento State players and alumni. This prototype uses demo records only.</p><div className="mt-8 flex flex-wrap gap-2">{["All","Current Sac State","MLB","Minor League Baseball","Alumni","Pitchers","Position Players"].map((x,i)=><button key={x} className={i===0?"rounded-full bg-hornet-900 px-4 py-2 text-sm font-black text-white":"rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-hornet-950"}>{x}</button>)}</div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{performances.map(p=><PerformanceCard key={p.slug} p={p}/>)}</div></section></main>;
}
