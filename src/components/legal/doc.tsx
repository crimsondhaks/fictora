import { useState, type ReactNode } from "react";
import { Plus } from "../ui/icons";

/** A top-level documentation section with a serif heading. */
export function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line pt-12 first:border-t-0 first:pt-0">
      <h2 className="display text-[26px] text-ink sm:text-[32px]">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** A bold lead-in line with optional supporting copy. */
export function DocLead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div>
      <p className="text-[18px] font-semibold text-ink sm:text-[19px]">{title}</p>
      {children && (
        <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-muted">{children}</div>
      )}
    </div>
  );
}

/** Label-left / description-right row, matching the reference doc layout. */
export function DocRow({
  label,
  tags,
  children,
}: {
  label: string;
  tags?: string[];
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-line py-6 first:border-t-0 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-8">
      <div>
        <p className="text-[16px] font-semibold text-ink">{label}</p>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-brand/15 bg-brand-soft px-2 py-0.5 text-[12px] font-medium text-brand">
      {children}
    </span>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalFAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col">
      {items.map((it, i) => (
        <div key={it.q} className="border-t border-line last:border-b">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
          >
            <span className="text-[16px] font-medium text-ink">{it.q}</span>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                open === i
                  ? "rotate-45 border-brand bg-brand text-white"
                  : "border-line-strong text-ink"
              }`}
            >
              <Plus className="h-4 w-4" />
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-4 text-[15px] leading-relaxed text-muted">{it.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
