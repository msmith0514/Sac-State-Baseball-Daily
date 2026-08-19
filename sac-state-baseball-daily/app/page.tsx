import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PerformanceCard } from "@/components/PerformanceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { demoDate, news, performances, videos } from "@/lib/data/demo";

export default function Home() {
  const top = performances[0];
  return <main>
    <Header />
    <section className="relative overflow-hidden bg-hornet-950 text-white">
      <div className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-20">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[.2em]">Yesterday's Hornets</span>
            <span className="text-sm font-bold text-gold-300">{demoDate}</span>
          </div>
          <h1 className="athletic-title text-balance mt-6 max-w-4xl text-5xl leading-[.92] sm:text-7xl lg:text-8xl">One scoreboard. Every Hornet.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">A daily Sacramento-focused baseball desk built to track current Hornets and alumni across college and professional baseball.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#performances" className="rounded-full bg-gold-500 px-5 py-3 text-sm font-black text-hornet-950">See yesterday's lines</Link>
            <Link href="/players" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-black">Browse all players</Link>
          </div>
          <p className="mt-6 text-xs font-semibold text-white/45">Demo mode: names, teams, stats, articles and videos below are fictional placeholders for design review only.</p>
        </div>
        <div className="rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-7">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold-300">Daily pulse</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[['4','Hornets played'],['3','Teams won'],['1','Home run'],['14','Strikeouts']].map(([n,l]) => <div key={l} className="rounded-2xl bg-white/10 p-4"><div className="athletic-title text-4xl">{n}</div><div className="mt-1 text-xs font-bold text-white/65">{l}</div></div>)}
          </div>
          <div className="mt-5 rounded-2xl bg-gold-500 p-5 text-hornet-950">
            <p className="text-[10px] font-black uppercase tracking-[.2em]">Quick read</p>
            <p className="mt-2 text-lg font-black leading-snug">The top demo performance: {top.name}'s two-hit, two-run-producing night.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading eyebrow="Best of the day" title="Player of the Day" deck="A transparent scoring model ranks verified daily performances. This demo shows how the feature will look." />
      <div className="overflow-hidden rounded-4xl bg-white shadow-card">
        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative min-h-[330px] bg-hornet-950"><Image src={top.photo} alt="Demo player placeholder" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-hornet-950/80 to-transparent" /></div>
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-black tracking-[.18em] text-hornet-950">⭐ TOP PERFORMANCE</span><span className="text-sm font-black text-hornet-700">Score {top.score.toFixed(1)}</span></div>
            <h2 className="athletic-title mt-5 text-5xl text-hornet-950 sm:text-6xl">{top.name}</h2>
            <p className="mt-2 font-bold text-neutral-600">{top.team} · {top.position} · {top.sacYears}</p>
            <p className="stat-tabular mt-7 text-2xl font-black text-hornet-950 sm:text-3xl">{top.yesterday}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">{top.summary}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center"><div className="rounded-2xl bg-cream p-4"><b className="block text-xl">+4.0</b><span className="text-[10px] font-bold uppercase text-neutral-500">Hits</span></div><div className="rounded-2xl bg-cream p-4"><b className="block text-xl">+3.0</b><span className="text-[10px] font-bold uppercase text-neutral-500">HR</span></div><div className="rounded-2xl bg-cream p-4"><b className="block text-xl">+2.6</b><span className="text-[10px] font-bold uppercase text-neutral-500">RBI/BB</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="performances" className="border-y border-black/5 bg-[#ece9e0]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><SectionHeading eyebrow="Full board" title="Yesterday's Player Performances" deck="Everyone who appeared gets a concise game line, season context, result, and data-only recap." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{performances.map(p => <PerformanceCard key={p.slug} p={p} />)}</div></div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <SectionHeading eyebrow="The Daily Hornet Report" title="Former Hornets Deliver Across the Diamond" deck="Production copy will be generated only from stored, source-attributed game data." />
        <article className="rounded-4xl bg-white p-7 shadow-card sm:p-10"><p className="text-sm font-bold uppercase tracking-[.18em] text-hornet-700">Demo recap · {demoDate}</p><p className="mt-5 text-lg leading-8 text-neutral-700">Marcus Reed supplied the day's top fictional line with two hits and a home run, while Eli Carter turned in the strongest pitching performance with six innings and seven strikeouts. Noah Bishop added a three-hit game, and Owen Price reached base three times. In production, every sentence in this section will be assembled from verified game and season records with source timestamps retained for audit.</p><div className="mt-7 flex flex-wrap gap-2">{["1 HR","1 multi-hit game","7 K top pitching line","3 wins by tracked teams"].map(x => <span key={x} className="rounded-full bg-hornet-100 px-3 py-2 text-xs font-black text-hornet-900">{x}</span>)}</div></article>
      </div>
    </section>

    <section id="news" className="bg-hornet-950 text-white"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><SectionHeading eyebrow="Coverage desk" title="Hornets in the News" deck="Links will always point to the original publisher. Full article text is never republished." /><div className="grid gap-6 lg:grid-cols-3">{news.map((n,i) => <article key={i} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"><div className="relative h-48"><Image src={n.image} alt="Demo news image" fill className="object-cover" /></div><div className="p-6"><p className="text-[10px] font-black uppercase tracking-[.18em] text-gold-300">{n.source} · {n.date}</p><h3 className="mt-3 text-xl font-black leading-tight">{n.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{n.summary}</p><p className="mt-4 text-xs font-bold text-white/45">Related: {n.player}</p></div></article>)}</div></div></section>

    <section id="videos" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><SectionHeading eyebrow="Watch" title="Hornet Highlights" deck="Embeds appear only when the source permits embedding and the video can be confidently matched to a player or game." /><div className="grid gap-6 md:grid-cols-2">{videos.map((v,i) => <article key={i} className="group overflow-hidden rounded-4xl bg-white shadow-card"><div className="relative h-72"><Image src={v.image} alt="Demo video thumbnail" fill className="object-cover" /><div className="absolute inset-0 bg-black/25"/><div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-hornet-950 shadow-lg">▶</div></div><div className="p-6"><p className="text-xs font-black uppercase tracking-[.18em] text-hornet-700">{v.player} · {v.date}</p><h3 className="mt-2 text-2xl font-black">{v.title}</h3><p className="mt-2 text-sm text-neutral-500">{v.source}</p></div></article>)}</div></section>

    <section id="current" className="border-y border-black/5 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20"><div><SectionHeading eyebrow="On campus" title="Current Sacramento State" deck="Roster-aware cards can surface current players, latest appearance, and season lines."/><div className="rounded-3xl bg-cream p-6"><p className="font-black text-hornet-950">Current roster module</p><p className="mt-2 text-sm leading-6 text-neutral-600">Connect the official roster source to distinguish current student-athletes from alumni and prevent stale affiliations.</p></div></div><div><SectionHeading eyebrow="Next level" title="Hornets in the Pros" deck="Track alumni across MLB and affiliated minor-league levels when reliable structured data is available."/><div className="rounded-3xl bg-hornet-950 p-6 text-white"><p className="font-black">Pro tracking module</p><p className="mt-2 text-sm leading-6 text-white/65">External player IDs map alumni across providers, so a team change or level promotion does not split a player's history.</p></div></div></div></section>

    <footer className="bg-[#081e18] text-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="athletic-title text-2xl">Sac State Baseball Daily</div><p className="mt-3 max-w-3xl text-sm leading-6 text-white/55">Sac State Baseball Daily is an independent fan/media project and is not affiliated with or endorsed by Sacramento State. Demo content on this prototype is fictional and exists only to evaluate layout and interaction design.</p><div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/35">Built for verified stats, source attribution, daily archives, accessibility, and mobile-first reading.</div></div></footer>
  </main>;
}
