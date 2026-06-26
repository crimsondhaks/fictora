import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Check } from "./ui/icons";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    tagline: "Try Fictora on a single project.",
    features: ["1 test project", "10 AI users", "Basic report"],
    cta: "Start Free Test",
  },
  {
    name: "Founder",
    price: "$29",
    period: "/month",
    tagline: "Everything a founder needs pre-launch.",
    features: [
      "100 AI users per test",
      "Full persona feedback",
      "Copy suggestions",
      "Mobile usability review",
      "Export report (PDF & CSV)",
    ],
    cta: "Start Free Test",
    featured: true,
  },
  {
    name: "Team",
    price: "$89",
    period: "/month",
    tagline: "For agencies and product teams.",
    features: [
      "Multiple projects",
      "Agency / client workspaces",
      "Advanced reports",
      "Priority processing",
      "Team collaboration",
    ],
    cta: "Start Free Test",
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-white">
      <SectionHeader
        eyebrow="Pricing"
        dotColor="var(--color-mint)"
        title={
          <>
            Simple pricing that scales <span className="accent">with you</span>.
          </>
        }
        subtitle="Start free, no credit card required. Upgrade when you're ready to run full 100-user tests."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 90}>
            <article
              className={`relative flex h-full flex-col rounded-[var(--radius-card)] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.featured
                  ? "border-transparent bg-gradient-to-b from-ink to-[#15171c] text-white shadow-card lg:scale-[1.03]"
                  : "border-line bg-surface hover:bg-white hover:shadow-card"
              }`}
            >
              {plan.featured && (
                <>
                  <div aria-hidden className="absolute inset-0 -z-0 mesh opacity-50" />
                  <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
                    Most popular
                  </span>
                </>
              )}
              <div className="relative">
                <h3
                  className={`text-[16px] font-semibold ${
                    plan.featured ? "text-white/80" : "text-muted"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`text-[44px] font-bold leading-none ${plan.featured ? "text-white" : "text-ink"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`pb-1 text-[14px] ${plan.featured ? "text-white/60" : "text-faint"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-[14px] ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.tagline}
                </p>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-[15px] ${
                        plan.featured ? "text-white/90" : "text-ink-soft"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured ? "bg-white/15 text-white" : "bg-brand-soft text-brand"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 pt-2">
                <Button
                  href="#top"
                  variant={plan.featured ? "secondary" : "primary"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-8 text-center text-[14px] text-faint">
          All plans include unlimited re-runs while you iterate. Cancel anytime.
        </p>
      </Reveal>
    </Section>
  );
}
