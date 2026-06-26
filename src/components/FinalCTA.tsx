import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Bolt, Report, ArrowRight } from "./ui/icons";

export function FinalCTA() {
  return (
    <section className="px-4 pb-8 pt-10 sm:px-6">
      <div className="shell !px-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* glow background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 mesh opacity-80" />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/40 blur-[100px]"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="display text-balance text-[34px] text-white sm:text-[46px]">
                Find the problems <span className="accent">before real users leave</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70 sm:text-[19px]">
                Run 100 AI user tests on your app, website, or prototype before launch — and ship with confidence.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="#pricing"
                  variant="secondary"
                  size="lg"
                  icon={<Bolt className="h-[18px] w-[18px]" />}
                >
                  Start Free Test
                </Button>
                <Button
                  href="#sample-report"
                  variant="ghost"
                  size="lg"
                  className="!text-white hover:!bg-white/10"
                  icon={<Report className="h-[18px] w-[18px]" />}
                >
                  View Sample Report
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </div>

              <p className="mt-6 text-[14px] text-white/50">
                Free to start · No credit card · Results in under a minute
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
