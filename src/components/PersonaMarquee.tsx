type Persona = { label: string; emoji: string; color: string };

const PERSONAS: Persona[] = [
  { label: "Confused first-time user", emoji: "🤔", color: "#ff6b81" },
  { label: "Busy buyer", emoji: "⚡", color: "#ffb020" },
  { label: "Non-technical user", emoji: "🙂", color: "#5ea8ff" },
  { label: "Price-sensitive user", emoji: "💸", color: "#34d6a8" },
  { label: "Enterprise user", emoji: "🏢", color: "#1f6feb" },
  { label: "Mobile user", emoji: "📱", color: "#5ea8ff" },
  { label: "Skeptical founder", emoji: "🧐", color: "#ff6b81" },
  { label: "Returning customer", emoji: "🔁", color: "#34d6a8" },
  { label: "Impatient user", emoji: "⏱️", color: "#ffb020" },
  { label: "Accessibility-focused user", emoji: "♿", color: "#5ea8ff" },
];

function PersonaPill({ p }: { p: Persona }) {
  return (
    <div className="group flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full text-[14px]"
        style={{ background: `color-mix(in srgb, ${p.color} 16%, white)` }}
      >
        {p.emoji}
      </span>
      <span className="whitespace-nowrap text-[14px] font-medium text-ink-soft">
        {p.label}
      </span>
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: p.color }}
      />
    </div>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...PERSONAS, ...PERSONAS];
  return (
    <div className="flex w-max gap-3.5">
      <div
        className="marquee-track flex gap-3.5"
        style={{
          animation: reverse
            ? "var(--animate-marquee-rev)"
            : "var(--animate-marquee)",
        }}
      >
        {items.map((p, i) => (
          <PersonaPill key={`${p.label}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}

export function PersonaMarquee() {
  return (
    <section className="section-tint py-16 sm:py-20">
      <div className="shell">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-faint">
          Every test runs a full cast of simulated users
        </p>
      </div>
      <div className="relative mt-8 flex flex-col gap-3.5 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-tint to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-tint to-transparent" />
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
