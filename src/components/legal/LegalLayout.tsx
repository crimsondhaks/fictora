import type { ReactNode } from "react";
import { LegalNav } from "./LegalNav";
import { Footer } from "../Footer";

type TocItem = { id: string; label: string };

type LegalLayoutProps = {
  title: ReactNode;
  subtitle: string;
  tldr: ReactNode[];
  toc: TocItem[];
  updated?: string;
  children: ReactNode;
};

export function LegalLayout({ title, subtitle, tldr, toc, updated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <LegalNav />

      {/* Hero — soft blue sky with clouds, title, and a TL;DR card */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #dbeafe 0%, #e9f1ff 44%, #ffffff 100%)",
          }}
        />
        <img
          aria-hidden
          src="/clouds/cloud-1.png"
          alt=""
          className="pointer-events-none absolute -left-16 top-10 z-0 w-[260px] opacity-80 sm:w-[400px]"
        />
        <img
          aria-hidden
          src="/clouds/cloud-2.png"
          alt=""
          className="pointer-events-none absolute -right-12 top-24 z-0 hidden w-[340px] opacity-70 sm:block"
        />

        <div className="shell relative z-10 pb-12 pt-16 text-center sm:pb-14 sm:pt-20">
          <h1 className="display text-balance text-[38px] text-ink sm:text-[52px]">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[18px]">
            {subtitle}
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-[var(--radius-card)] border border-line bg-white/90 p-6 text-left shadow-card backdrop-blur">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-faint">
              TL;DR
            </p>
            <ul className="mt-3 space-y-2.5">
              {tldr.map((t, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Body — sticky TOC + content */}
      <div className="shell pb-16 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="px-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                On this page
              </p>
              <nav className="mt-3 flex flex-col">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="rounded-xl px-3 py-2 text-[15px] text-ink-soft transition-colors hover:bg-brand-soft/60 hover:text-brand"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
              {updated && <p className="mt-6 px-3 text-[13px] text-faint">Last updated {updated}</p>}
            </div>
          </aside>

          <div className="max-w-3xl">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
