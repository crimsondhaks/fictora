import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Clock, Target, Layers, Bolt, TrendDown } from "./ui/icons";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Recruiting testers takes days",
    body: "Scheduling, screening, and incentives slow you down when you need answers now.",
  },
  {
    icon: Target,
    title: "Founders miss obvious UX issues",
    body: "You're too close to your own product to see the friction new users hit instantly.",
  },
  {
    icon: Layers,
    title: "Agencies need feedback fast",
    body: "Client reviews can't wait for a full research cycle on every landing page.",
  },
  {
    icon: Bolt,
    title: "Teams launch with hidden friction",
    body: "Onboarding gaps and confusing flows ship straight into production undetected.",
  },
  {
    icon: TrendDown,
    title: "Conversion problems found too late",
    body: "By the time analytics reveal the leak, you've already wasted the traffic and spend.",
  },
];

export function Problem() {
  return (
    <Section id="product" className="bg-white">
      <SectionHeader
        eyebrow="The problem"
        dotColor="var(--color-rose)"
        title={
          <>
            Real user testing is slow, expensive,
            <br className="hidden sm:block" /> and usually <span className="accent">too late</span>.
          </>
        }
        subtitle="Most teams discover product friction after launch — when it already costs them users, revenue, and momentum."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon;
          // last card spans to fill on large grids for balance
          const wide = i === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : "";
          return (
            <Reveal key={p.title} delay={i * 70} className={wide}>
              <article className="group h-full rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose/25 hover:bg-white hover:shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose/10 text-rose transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
