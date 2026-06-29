import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ArrowRight, Pen, Cursor, Tag, Target } from "./ui/icons";

const FINDINGS = [
  {
    icon: Cursor,
    label: "missed the signup button",
    value: 34,
    tone: "#ff6b81",
  },
  {
    icon: Tag,
    label: "hesitated on the pricing page",
    value: 21,
    tone: "#ffb020",
  },
  {
    icon: Target,
    label: "missed the main value proposition",
    value: 17,
    tone: "#5ea8ff",
  },
];

export function SampleReport() {
  return (
    <Section id="sample-report" className="relative overflow-hidden section-tint">
      <SectionHeader
        eyebrow="Sample report"
        dotColor="var(--color-amber)"
        title={
          <>
            A report you can <span className="accent">act on</span> in minutes.
          </>
        }
        subtitle="Clear scores, ranked blockers, and specific fixes — not vague dashboards. Here's what a real Fictora run looks like."
      />

      <Reveal delay={80} className="mt-14">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[26px] border border-line bg-white shadow-card">
          {/* Report header */}
          <div className="flex flex-col gap-4 border-b border-line bg-gradient-to-r from-brand-soft/70 to-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">
                UX Test Report
              </p>
              <h3 className="mt-1 text-[22px] font-bold text-ink">your-saas.com</h3>
              <p className="text-[14px] text-muted">100 AI users · 9 personas · completed in 51s</p>
            </div>
            {/* Overall score */}
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft">
              <div className="relative h-20 w-20">
                <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-line)" strokeWidth="3.5" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="url(#reportGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="97.4"
                    strokeDashoffset="27.3"
                  />
                  <defs>
                    <linearGradient id="reportGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#1f6feb" />
                      <stop offset="1" stopColor="#5ea8ff" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="text-[22px] font-bold text-ink">72</span>
                  <span className="text-[10px] font-medium text-faint">/ 100</span>
                </span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink">Overall UX Score</p>
                <p className="text-[13px] text-muted">Good, with fixable blockers</p>
              </div>
            </div>
          </div>

          {/* Report body */}
          <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-5">
            {/* Findings */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-ink">Biggest blockers</p>
                <span className="rounded-full bg-rose/10 px-3 py-1 text-[12px] font-semibold text-rose">
                  Pricing CTA unclear
                </span>
              </div>
              <div className="space-y-4">
                {FINDINGS.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className="rounded-2xl border border-line bg-surface p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              background: `color-mix(in srgb, ${f.tone} 14%, white)`,
                              color: f.tone,
                            }}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <p className="text-[14px] text-ink">
                            <span className="font-bold">{f.value}</span>
                            <span className="text-faint">/100</span> AI users {f.label}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-line">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${f.value}%`,
                            background: `linear-gradient(90deg, ${f.tone}, color-mix(in srgb, ${f.tone} 50%, white))`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommended fix */}
            <div className="lg:col-span-2">
              <p className="mb-4 text-[14px] font-semibold text-ink">Recommended copy change</p>
              <div className="rounded-2xl border border-brand/20 bg-gradient-to-b from-brand-soft/60 to-white p-5">
                <div className="flex items-center gap-2 text-brand">
                  <Pen className="h-4 w-4" />
                  <span className="text-[13px] font-semibold">Primary CTA</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-faint">Before</p>
                    <div className="mt-1 rounded-lg border border-line bg-white px-3 py-2 text-[14px] text-faint line-through">
                      Get Started
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="h-4 w-4 rotate-90 text-brand/50" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">After</p>
                    <div className="mt-1 rounded-lg border border-brand/30 bg-white px-3 py-2 text-[14px] font-semibold text-ink">
                      Run Your First AI User Test
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[12px] text-muted">
                  Clearer intent helps hesitant users understand the next step instantly.
                </p>
              </div>

              <Button href="#waitlist" variant="primary" size="md" className="mt-5 w-full">
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
