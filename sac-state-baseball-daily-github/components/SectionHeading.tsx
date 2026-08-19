export function SectionHeading({ eyebrow, title, deck }: { eyebrow: string; title: string; deck?: string }) {
  return <div className="mb-7 max-w-3xl">
    <p className="text-xs font-black uppercase tracking-[.22em] text-hornet-700">{eyebrow}</p>
    <h2 className="athletic-title mt-2 text-4xl leading-none text-hornet-950 sm:text-5xl">{title}</h2>
    {deck && <p className="mt-3 text-base leading-7 text-neutral-600">{deck}</p>}
  </div>;
}
