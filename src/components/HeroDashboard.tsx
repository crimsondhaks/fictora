import { Users, Cursor, TrendDown, Pen, Sparkle } from "./ui/icons";

/** Small reusable status pill */
function Pill({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "rose" | "amber" | "mint" | "muted";
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-soft text-brand",
    rose: "bg-rose/12 text-rose",
    amber: "bg-amber/15 text-[#b9740a]",
    mint: "bg-mint/15 text-[#0f9b73]",
    muted: "bg-line text-muted",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

const PERSONAS = [
  { name: "Confused first-timer", status: "Stuck", tone: "rose", initials: "CF", color: "#ff6b81" },
  { name: "Busy buyer", status: "Dropped off", tone: "amber", initials: "BB", color: "#ffb020" },
  { name: "Price-sensitive", status: "Hesitated", tone: "amber", initials: "PS", color: "#5ea8ff" },
  { name: "Returning user", status: "Converted", tone: "mint", initials: "RU", color: "#14b88a" },
] as const;

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Glow behind the dashboard */}
      <div
        aria-hidden
        className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[40px] blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(31,111,235,0.26), transparent 70%)",
        }}
      />

      <div className="rounded-[26px] border border-line bg-white/80 p-2.5 shadow-card backdrop-blur-xl ring-1 ring-black/[0.02]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff6058]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbe2f]" />
          <span className="h-3 w-3 rounded-full bg-[#2aca44]" />
          <div className="ml-3 hidden flex-1 items-center gap-2 rounded-lg bg-surface px-3 py-1.5 text-[12px] text-faint sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            app.fictora.ai/report/your-product
          </div>
          <Pill tone="brand">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            Live test
          </Pill>
        </div>

        {/* Body */}
        <div className="rounded-[18px] bg-surface p-3.5 sm:p-4">
          {/* Top row: app preview + running users */}
          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-5">
            {/* App preview */}
            <div className="lg:col-span-3 rounded-2xl border border-line bg-white p-4 shadow-soft">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-ink">Uploaded preview</p>
                <Pill tone="muted">your-saas.com</Pill>
              </div>
              {/* fake landing page */}
              <div className="relative space-y-3 rounded-xl bg-gradient-to-b from-brand-soft/60 to-white p-4">
                <div className="h-2.5 w-24 rounded-full bg-brand/30" />
                <div className="h-4 w-3/4 rounded-full bg-ink/80" />
                <div className="h-4 w-2/3 rounded-full bg-ink/15" />
                <div className="flex items-center gap-2 pt-1">
                  {/* the "confusing" CTA being flagged */}
                  <div className="relative">
                    <div className="h-8 w-28 rounded-lg bg-ink" />
                    <span
                      className="absolute -inset-1 rounded-xl border-2 border-rose"
                      style={{ animation: "var(--animate-pulse-ring)" }}
                    />
                  </div>
                  <div className="h-8 w-20 rounded-lg border border-line-strong" />
                </div>
                {/* flag callout */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1">
                  <Cursor className="h-4 w-4 text-rose" />
                  <Pill tone="rose">Confusing CTA</Pill>
                </div>
              </div>
            </div>

            {/* Running users */}
            <div className="lg:col-span-2 rounded-2xl border border-line bg-white p-4 shadow-soft">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-ink">AI users running</p>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand">
                  <Users className="h-4 w-4" />
                  100
                </span>
              </div>
              {/* avatar grid */}
              <div className="grid grid-cols-10 gap-1.5">
                {Array.from({ length: 50 }).map((_, i) => {
                  const done = i < 36;
                  return (
                    <span
                      key={i}
                      className="aspect-square rounded-[5px]"
                      style={{
                        background: done
                          ? `color-mix(in srgb, var(--color-brand) ${
                              45 + (i % 5) * 11
                            }%, white)`
                          : "var(--color-line)",
                        animation: done ? "var(--animate-float)" : undefined,
                        animationDelay: `${(i % 10) * 0.12}s`,
                      }}
                    />
                  );
                })}
              </div>
              <div className="mt-3 flex items-center justify-between text-[12px]">
                <span className="text-muted">36 of 100 finished</span>
                <span className="font-semibold text-mint">in 47s</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-brand to-sky" />
              </div>
            </div>
          </div>

          {/* Middle row: friction score + insights */}
          <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {/* Friction score gauge */}
            <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
              <p className="text-[13px] font-semibold text-ink">Friction score</p>
              <div className="mt-3 flex items-end gap-3">
                <div className="relative h-16 w-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-line)" strokeWidth="4" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="url(#scoreGrad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="97.4"
                      strokeDashoffset="27.3"
                    />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#1f6feb" />
                        <stop offset="1" stopColor="#5ea8ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[18px] font-bold text-ink">
                    72
                  </span>
                </div>
                <div className="text-[12px] leading-tight text-muted">
                  <p className="font-semibold text-ink">Medium friction</p>
                  <p>3 blockers found before conversion.</p>
                </div>
              </div>
            </div>

            {/* Drop-off reason */}
            <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2 text-amber">
                <TrendDown className="h-4 w-4 text-[#b9740a]" />
                <p className="text-[13px] font-semibold text-ink">Top drop-off</p>
              </div>
              <p className="mt-2 text-[13px] font-medium text-ink">Pricing page hesitation</p>
              <p className="mt-1 text-[12px] text-muted">
                21 AI users paused — plan value felt unclear.
              </p>
              <div className="mt-2">
                <Pill tone="amber">21 / 100 users</Pill>
              </div>
            </div>

            {/* Copy suggestion */}
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-b from-brand-soft/70 to-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <Pen className="h-4 w-4 text-brand" />
                <p className="text-[13px] font-semibold text-ink">Copy fix</p>
              </div>
              <p className="mt-2 text-[12px] text-faint line-through">"Get Started"</p>
              <p className="text-[13px] font-semibold text-brand">
                "Run Your First AI User Test"
              </p>
              <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-mint">
                <Sparkle className="h-3.5 w-3.5" />
                +18% projected clarity
              </div>
            </div>
          </div>

          {/* Persona cards row */}
          <div className="mt-3.5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {PERSONAS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-2.5 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: p.color }}
                >
                  {p.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-semibold text-ink">{p.name}</p>
                  <Pill tone={p.tone}>{p.status}</Pill>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating mini cards */}
      <div
        className="absolute -left-4 top-24 hidden rounded-2xl border border-line bg-white/90 p-3 shadow-card backdrop-blur md:block"
        style={{ animation: "var(--animate-float)" }}
      >
        <p className="text-[11px] font-medium text-muted">Signup button missed by</p>
        <p className="text-[20px] font-bold text-ink">
          34<span className="text-[13px] font-semibold text-faint">/100</span>
        </p>
      </div>
      <div
        className="absolute -right-4 bottom-16 hidden rounded-2xl border border-line bg-white/90 p-3 shadow-card backdrop-blur md:block"
        style={{ animation: "var(--animate-float)", animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint/15 text-mint">
            <Sparkle className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] font-medium text-muted">Value prop clarity</p>
            <p className="text-[14px] font-bold text-ink">Needs a rewrite</p>
          </div>
        </div>
      </div>
    </div>
  );
}
