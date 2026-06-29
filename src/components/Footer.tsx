import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, ArrowRight } from "./ui/icons";
import { useContact } from "./contact/ContactContext";

type FooterLink = { label: string; href?: string; modal?: boolean };
type FooterColumn = { heading: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Product", href: "/#product" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Sample Report", href: "/#sample-report" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Use Cases", href: "/#use-cases" },
      { label: "Waitlist", href: "/#waitlist" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", modal: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal#privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/legal#security" },
    ],
  },
];

/**
 * Oversized brand wordmark. Measures the real text bounding box (getBBox),
 * then renders it spanning the full width but at a reduced height — matching
 * the wide, low proportion of the reference footer wordmark.
 */
function BrandWordmark() {
  const textRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = textRef.current;
      if (!el) return;
      const b = el.getBBox();
      setBox({ x: b.x, y: b.y, w: b.width, h: b.height });
    };
    measure();
    // Re-measure once the web font has actually loaded (metrics change).
    void document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Letters render at this fraction of their natural height → wide & low (Discord-like).
  const HEIGHT_RATIO = 0.72;
  const viewBox = box ? `${box.x} ${box.y} ${box.w} ${box.h}` : undefined;
  const aspectRatio = box ? `${box.w} / ${box.h * HEIGHT_RATIO}` : undefined;

  return (
    <svg
      width="100%"
      viewBox={viewBox}
      preserveAspectRatio="none"
      className="block w-full overflow-visible"
      style={{ visibility: box ? "visible" : "hidden", aspectRatio }}
    >
      <defs>
        <linearGradient id="fictora-wm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c2dbff" />
          <stop offset="1" stopColor="#5f9bf5" />
        </linearGradient>
      </defs>
      <text
        ref={textRef}
        x="0"
        y="300"
        fontFamily="Inter, ui-sans-serif, sans-serif"
        fontWeight={900}
        fontSize={300}
        letterSpacing={-6}
        fill="url(#fictora-wm)"
      >
        Fictora
      </text>
    </svg>
  );
}

export function Footer() {
  const { openContact } = useContact();

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-tint">
      <div className="shell pt-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight">
              <Logo />
              <span className="text-[20px]">Fictora</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
              AI users test your app before launch.
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
              >
                Contact us
                <ArrowRight className="h-4 w-4 text-brand" />
              </button>
              <p className="mt-1 text-[14px] text-muted">
                For early access, partnerships, or product demos.
              </p>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.modal ? (
                      <button
                        type="button"
                        onClick={openContact}
                        className="text-[15px] text-ink-soft transition-colors hover:text-brand"
                      >
                        {l.label}
                      </button>
                    ) : (
                      <Link
                        to={l.href ?? "/"}
                        className="text-[15px] text-ink-soft transition-colors hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[14px] text-faint">© {new Date().getFullYear()} Fictora. All rights reserved.</p>
          <p className="text-[14px] text-faint">Made for founders, agencies & product teams.</p>
        </div>
      </div>

      {/* Oversized brand wordmark — wide & low like the reference */}
      <div aria-hidden className="pointer-events-none mt-8 select-none px-3 sm:px-5">
        <BrandWordmark />
      </div>
    </footer>
  );
}
