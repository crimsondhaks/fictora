import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  dotColor?: string;
  className?: string;
};

/** Pill badge with a live status dot — echoes the reference's section eyebrows. */
export function Badge({
  children,
  dotColor = "var(--color-brand)",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-soft backdrop-blur ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-70"
          style={{ background: dotColor, animation: "var(--animate-pulse-ring)" }}
        />
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ background: dotColor }}
        />
      </span>
      {children}
    </span>
  );
}
