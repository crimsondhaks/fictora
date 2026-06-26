import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Star } from "./ui/icons";

const TESTIMONIALS = [
  {
    quote:
      "Fictora showed us why users were missing our main CTA before we spent money on ads. We fixed it in an afternoon.",
    name: "SaaS Founder",
    role: "Seed-stage startup",
    initials: "SF",
    color: "#1f6feb",
  },
  {
    quote:
      "We used it before sending a landing page to a client. The feedback made our pitch noticeably stronger.",
    name: "Agency Lead",
    role: "Product & growth studio",
    initials: "AL",
    color: "#5ea8ff",
  },
  {
    quote:
      "It feels like having a UX research team available instantly. We run it before every onboarding change now.",
    name: "Product Manager",
    role: "B2B SaaS",
    initials: "PM",
    color: "#34d6a8",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Loved by builders"
        dotColor="var(--color-rose)"
        title={
          <>
            Teams ship <span className="accent">with confidence</span>.
          </>
        }
        subtitle="Founders, agencies, and product teams use Fictora to catch friction early and launch with fewer surprises."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card">
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink-soft">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">{t.name}</p>
                  <p className="text-[13px] text-faint">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
