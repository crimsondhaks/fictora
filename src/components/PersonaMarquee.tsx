import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./ui/Reveal";
import {
  Cursor,
  Bolt,
  Users,
  Tag,
  Building,
  Phone,
  Shield,
  Star,
  Clock,
  Target,
  Chat,
  Report,
  TrendDown,
  Layers,
  Sparkle,
  Rocket,
  Pen,
  Code,
} from "./ui/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type Persona = { label: string; icon: IconType };

const PERSONAS: Persona[] = [
  { label: "Confused first-time user", icon: Cursor },
  { label: "Busy buyer", icon: Bolt },
  { label: "Non-technical user", icon: Users },
  { label: "Price-sensitive user", icon: Tag },
  { label: "Enterprise user", icon: Building },
  { label: "Mobile user", icon: Phone },
  { label: "Skeptical founder", icon: Shield },
  { label: "Returning customer", icon: Star },
  { label: "Impatient user", icon: Clock },
  { label: "Accessibility-focused user", icon: Target },
  { label: "Hesitant buyer", icon: Chat },
  { label: "Pricing-page scanner", icon: Report },
  { label: "Signup drop-off user", icon: TrendDown },
  { label: "Landing page skimmer", icon: Layers },
  { label: "Feature-focused user", icon: Sparkle },
  { label: "Ad traffic visitor", icon: Rocket },
  { label: "Client reviewer", icon: Pen },
  { label: "First-time SaaS founder", icon: Code },
];

// Second row starts mid-list so the two rows read differently.
const ROW_ONE = PERSONAS;
const ROW_TWO = [...PERSONAS.slice(9), ...PERSONAS.slice(0, 9)];

function PersonaItem({ p }: { p: Persona }) {
  const Icon = p.icon;
  return (
    <div
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 backdrop-blur-sm transition-colors duration-300 hover:border-brand/25 sm:gap-2 sm:px-3 sm:py-1.5"
      style={{
        background: "rgba(255,255,255,0.65)",
        border: "1px solid rgba(148,163,184,0.16)",
      }}
    >
      <Icon className="h-3 w-3 text-[#3b82f6] sm:h-3.5 sm:w-3.5" />
      <span
        className="whitespace-nowrap text-[12px] font-medium sm:text-[13px]"
        style={{ color: "#374151" }}
      >
        {p.label}
      </span>
    </div>
  );
}

function Row({ items, direction }: { items: Persona[]; direction: "left" | "right" }) {
  // Duplicate the list so translating by -50% loops with no visible jump.
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee-track flex w-max gap-2 sm:gap-2.5 ${
        direction === "left" ? "marquee-left" : "marquee-right"
      }`}

    >
      {doubled.map((p, i) => (
        <PersonaItem key={`${p.label}-${i}`} p={p} />
      ))}
    </div>
  );
}

export function PersonaMarquee() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #eaf3ff 50%, #ffffff 100%)",
      }}
    >
      {/* faint grid pattern, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(120% 80% at 50% 50%, #000 35%, transparent 82%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 50%, #000 35%, transparent 82%)",
          opacity: 0.5,
        }}
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748b] sm:text-[12px]">
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70"
                  style={{ animation: "var(--animate-pulse-ring)" }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Simulated users test every flow
            </p>
            <p className="max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
              100 AI personas explore your product from different goals, doubts, and
              behaviors.
            </p>
          </div>
        </Reveal>
      </div>

      {/* two thin rows, opposite directions, soft edge fade masks */}
      <div className="marquee-viewport relative z-10 mt-7 flex flex-col gap-2 sm:mt-8 sm:gap-2.5">
        <Row items={ROW_ONE} direction="left" />
        <Row items={ROW_TWO} direction="right" />
      </div>
    </section>
  );
}
