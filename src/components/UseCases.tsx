import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Rocket, Building, Layers, Code, Users } from "./ui/icons";

const CASES = [
  {
    icon: Rocket,
    role: "SaaS founders",
    body: "Validate landing pages and onboarding flows before launch — and before you spend on ads.",
    tone: "#1f6feb",
  },
  {
    icon: Building,
    role: "Agencies",
    body: "Test client websites before delivery and walk into reviews with evidence-backed recommendations.",
    tone: "#5ea8ff",
  },
  {
    icon: Layers,
    role: "Product teams",
    body: "Find onboarding friction and confusing flows before they reach real customers.",
    tone: "#5ea8ff",
  },
  {
    icon: Code,
    role: "Indie hackers",
    body: "Improve conversion without hiring testers or waiting on a research budget.",
    tone: "#34d6a8",
  },
  {
    icon: Users,
    role: "UX teams",
    body: "Get early signal before formal research so you focus studies on what actually matters.",
    tone: "#ffb020",
  },
];

export function UseCases() {
  return (
    <Section id="use-cases" className="bg-white">
      <SectionHeader
        eyebrow="Use cases"
        dotColor="var(--color-sky)"
        title={
          <>
            Built for everyone shipping <span className="accent">products</span>.
          </>
        }
        subtitle="From solo founders to full product teams, Fictora fits wherever fast, early feedback creates an edge."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => {
          const Icon = c.icon;
          const feature = i === 0;
          return (
            <Reveal
              key={c.role}
              delay={i * 70}
              className={feature ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <article
                className={`group relative h-full overflow-hidden rounded-[var(--radius-card)] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  feature
                    ? "border-transparent bg-gradient-to-br from-ink to-[#15171c] text-white"
                    : "border-line bg-surface hover:bg-white"
                }`}
              >
                {feature && (
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-0 opacity-60 mesh"
                  />
                )}
                <div className="relative">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: feature
                        ? "rgba(255,255,255,0.12)"
                        : `color-mix(in srgb, ${c.tone} 14%, white)`,
                      color: feature ? "#fff" : c.tone,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3
                    className={`mt-5 text-[19px] font-semibold ${
                      feature ? "text-white" : "text-ink"
                    }`}
                  >
                    {c.role}
                  </h3>
                  <p
                    className={`mt-2.5 text-[15px] leading-relaxed ${
                      feature ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {c.body}
                  </p>
                  {feature && (
                    <p className="mt-6 text-[13px] font-medium text-white/55">
                      Most-loved by early-stage teams →
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
