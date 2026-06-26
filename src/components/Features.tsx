import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import {
  Target,
  Cursor,
  TrendDown,
  Pen,
  Users,
  Phone,
  Tag,
  Rocket,
} from "./ui/icons";

const FEATURES = [
  {
    icon: Target,
    title: "Stuck point detection",
    body: "Pinpoint the exact screens and steps where users lose the thread.",
    tone: "#1f6feb",
  },
  {
    icon: Cursor,
    title: "Confusing CTA analysis",
    body: "Spot buttons users hesitate on, misread, or scroll right past.",
    tone: "#ff6b81",
  },
  {
    icon: TrendDown,
    title: "Conversion drop-off reasons",
    body: "Understand why users leave before signing up or buying.",
    tone: "#ffb020",
  },
  {
    icon: Pen,
    title: "Copy rewrite suggestions",
    body: "Get sharper headlines and CTAs written for clarity and intent.",
    tone: "#34d6a8",
  },
  {
    icon: Users,
    title: "Persona-based feedback",
    body: "See how each user type reacts — from skeptics to power users.",
    tone: "#5ea8ff",
  },
  {
    icon: Phone,
    title: "Mobile usability review",
    body: "Catch tap targets, layout breaks, and friction on small screens.",
    tone: "#5ea8ff",
  },
  {
    icon: Tag,
    title: "Pricing page objections",
    body: "Surface the doubts that stall users on your pricing page.",
    tone: "#1f6feb",
  },
  {
    icon: Rocket,
    title: "Onboarding friction report",
    body: "Find where new users stall before reaching their first win.",
    tone: "#ff6b81",
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-white">
      <SectionHeader
        eyebrow="What you get"
        title={
          <>
            See what <span className="accent">every AI user</span> experienced.
          </>
        }
        subtitle="A complete, structured breakdown of how simulated users moved through your product — and where they got tripped up."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <article className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <span
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: f.tone }}
                />
                <span
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${f.tone} 14%, white)`,
                    color: f.tone,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 text-[16px] font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-[14px] leading-relaxed text-muted">
                  {f.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
