import { useReveal } from "../hooks/useReveal";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { PersonaMarquee } from "../components/PersonaMarquee";
import { Problem } from "../components/Problem";
import { Solution } from "../components/Solution";
import { Features } from "../components/Features";
import { SampleReport } from "../components/SampleReport";
import { UseCases } from "../components/UseCases";
import { Comparison } from "../components/Comparison";
import { Waitlist } from "../components/Waitlist";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <PersonaMarquee />
        <Problem />
        <Solution />
        <Features />
        <SampleReport />
        <UseCases />
        <Comparison />
        <Waitlist />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
