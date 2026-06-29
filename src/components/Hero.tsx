import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Reveal } from "./ui/Reveal";
import { HeroDashboard } from "./HeroDashboard";
import { HeroBackground } from "./HeroBackground";
import { ArrowRight, Report, Bolt } from "./ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <HeroBackground />

      <div className="shell relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <Badge dotColor="var(--color-brand)">
              100 AI users • instant product feedback
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-7 text-balance text-[40px] text-ink sm:text-[58px] lg:text-[70px]">
              AI users <span className="accent">test your app</span> before launch
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-[20px]">
              Upload your website, app, or prototype. Fictora creates 100 simulated
              users with real personalities, then shows exactly where they get
              stuck, confused, or drop off.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button href="#waitlist" variant="primary" size="lg" icon={<Bolt className="h-[18px] w-[18px]" />}>
                Join Waitlist
              </Button>
              <Button
                href="#sample-report"
                variant="secondary"
                size="lg"
                icon={<Report className="h-[18px] w-[18px]" />}
              >
                View Sample Report
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-5 text-[14px] text-faint">
              No recruiting. No waiting. Instant product feedback before you launch.
            </p>
          </Reveal>
        </div>

        {/* Dashboard */}
        <Reveal delay={120} className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-5xl">
            <HeroDashboard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
