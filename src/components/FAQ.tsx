import { useState } from "react";
import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Plus } from "./ui/icons";

const FAQS = [
  {
    q: "Is this a replacement for real user testing?",
    a: "No. Fictora helps you catch obvious friction early, before spending time and money on human testing. Think of it as the fast first pass that makes your real research sharper.",
  },
  {
    q: "What can I upload?",
    a: "Landing pages, SaaS apps, prototypes, mobile flows, pricing pages, onboarding screens, and product demos. If users can interact with it, Fictora can test it.",
  },
  {
    q: "How many AI users are created?",
    a: "Fictora can simulate up to 100 users per test, depending on your plan. Each one carries a distinct personality, goal, and level of patience.",
  },
  {
    q: "What feedback do I get?",
    a: "Stuck points, confusing buttons, drop-off reasons, copy suggestions, persona reactions, and concrete conversion improvement ideas — all ranked by impact.",
  },
  {
    q: "Who is this for?",
    a: "SaaS founders, agencies, product teams, indie hackers, and UX teams — anyone who wants fast, structured feedback before putting a product in front of real users.",
  },
];

function Item({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-brand/25 bg-brand-soft/30" : "border-line bg-surface hover:border-line-strong"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-[16px] font-semibold text-ink sm:text-[17px]">{faq.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 border-brand bg-brand text-white" : "border-line-strong bg-white text-ink"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:px-6">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Common <span className="accent">questions</span>.
          </>
        }
        subtitle="Everything you need to know about how Fictora tests your product."
      />

      <Reveal delay={80} className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
