import Link from "next/link";

const nav = [["Home","/"],["Yesterday","/daily/2026-08-17"],["Players","/players"],["News","/#news"],["Videos","/#videos"],["Schedule","/#schedule"],["Sac State","/#current"]];

export function Header() {
  return <>
    <div className="bg-hornet-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-[.22em] sm:px-6 lg:px-8">
        <span>Independent Sacramento Baseball Coverage</span>
        <span className="hidden text-gold-300 sm:inline">Updated daily · Pacific Time</span>
      </div>
    </div>
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="athletic-title text-xl leading-none text-hornet-950 sm:text-2xl">Sac State Baseball Daily</div>
          <div className="mt-1 hidden text-[10px] font-bold uppercase tracking-[.18em] text-hornet-700 sm:block">Following the Hornets from Sacramento to the Pros</div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-hornet-950 lg:flex">
          {nav.map(([label,href]) => <Link key={label} className="hover:text-hornet-700" href={href}>{label}</Link>)}
        </nav>
        <Link href="/players" className="rounded-full bg-hornet-900 px-4 py-2 text-sm font-extrabold text-white shadow-sm">Find a Hornet</Link>
      </div>
      <nav className="flex gap-5 overflow-x-auto px-4 pb-3 text-xs font-extrabold uppercase tracking-wide text-hornet-900 lg:hidden">
        {nav.map(([label,href]) => <Link className="shrink-0" key={label} href={href}>{label}</Link>)}
      </nav>
    </header>
  </>;
}
