import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  dotColor?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  dotColor,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <Badge dotColor={dotColor}>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="display text-balance text-[34px] text-ink sm:text-[44px] lg:text-[50px]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <p
            className={`text-[17px] leading-relaxed text-muted sm:text-[18px] ${
              isCenter ? "max-w-2xl" : "max-w-xl"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}
