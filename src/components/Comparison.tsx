import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Check, Cross, Logo } from "./ui/icons";

const TRADITIONAL = [
  "Expensive per study",
  "Slow recruitment cycles",
  "Limited number of testers",
  "Hard to repeat consistently",
  "Often done too late",
];

const FICTORA = [
  "100 AI users, instantly",
  "Multiple personas every run",
  "Clear, ranked action items",
  "Repeat anytime, free or cheap",
  "Built for early-stage feedback",
];

export function Comparison() {
  return (
    <Section className="relative overflow-hidden section-tint">
      <SectionHeader
        title={
          <>
            Instant AI testing before <br className="hidden sm:block" />
            <span className="accent">expensive human testing</span>.
          </>
        }
        subtitle="Fictora isn't a replacement for human research — it's the fast first pass that catches the obvious problems before you spend a cent."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Traditional */}
        <Reveal>
          <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-line text-muted">
                <Cross className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-ink">Traditional user testing</h3>
                <p className="text-[13px] text-faint">The old, slow way</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {TRADITIONAL.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose">
                    <Cross className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Fictora */}
        <Reveal delay={120}>
          <div className="relative h-full overflow-hidden rounded-[var(--radius-card)] border border-brand/25 bg-gradient-to-br from-white to-brand-soft/50 p-7 shadow-card sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl"
            />
            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-soft">
                <Logo className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-ink">Fictora</h3>
                <p className="text-[13px] font-medium text-brand">The fast first pass</p>
              </div>
            </div>
            <ul className="relative mt-6 space-y-3">
              {FICTORA.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
