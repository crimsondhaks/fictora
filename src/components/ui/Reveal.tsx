import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Wraps content in a scroll-reveal container. Works together with
 * the `useReveal` hook mounted at the app root.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}
