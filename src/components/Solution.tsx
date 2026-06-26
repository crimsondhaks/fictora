import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Upload, Users, Report, ArrowRight } from "./ui/icons";

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Upload your product",
    body: "Drop in your website, app, prototype, or a single landing page. No setup, no tracking code, no recruiting.",
  },
  {
    n: "02",
    icon: Users,
    title: "AI users explore it",
    body: "100 simulated users with distinct goals and personalities navigate your product just like real visitors would.",
  },
  {
    n: "03",
    icon: Report,
    title: "Get a clear report",
    body: "See stuck points, confusion, drop-off reasons, and ready-to-ship copy fixes — ranked by impact on conversion.",
  },
];

export function Solution() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden section-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mesh opacity-60"
      />
      <SectionHeader
        eyebrow="How it works"
        dotColor="var(--color-brand)"
        title={
          <>
            Fictora finds product friction <br className="hidden sm:block" />
            <span className="accent">before your users do</span>.
          </>
        }
        subtitle="Three simple steps from upload to actionable insight — usually in under a minute."
      />

      <div className="relative mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* connector line */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block"
        />
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.n} delay={i * 110}>
              <article className="group relative h-full rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-sky text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-serif text-[44px] italic leading-none text-brand/15">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand/40 md:block" />
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
