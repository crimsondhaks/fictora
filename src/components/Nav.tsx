import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Logo } from "./ui/icons";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Waitlist", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line/80 bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(16,16,30,0.25)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell relative flex h-[68px] items-center justify-between">
          {/* Left: logo */}
          <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
            <Logo />
            <span className="text-[20px]">Fictora</span>
          </a>

          {/* Center: links (absolutely centered in the nav) */}
          <div className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-brand-soft/70 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href="#sample-report" variant="ghost" size="md">
              View Sample Report
            </Button>
            <Button href="#waitlist" variant="primary" size="md">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-white/80 backdrop-blur lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[16px] font-medium text-ink-soft hover:bg-brand-soft/60 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          {/* Mobile CTAs */}
          <div className="mt-3 flex flex-col gap-2.5">
            <Button href="#sample-report" variant="secondary" size="lg" onClick={() => setOpen(false)}>
              View Sample Report
            </Button>
            <Button href="#waitlist" variant="primary" size="lg" onClick={() => setOpen(false)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
