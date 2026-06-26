import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-medium transition-all duration-300 ease-out select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3.5 text-[16px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-[0_1px_2px_rgba(10,10,20,0.16)] hover:bg-[#1c1c22] hover:shadow-[0_14px_30px_-14px_rgba(10,10,20,0.5)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink border border-[#222] hover:bg-[#f4f6fa] hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:bg-ink/[0.05]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  href = "#",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  );
}
