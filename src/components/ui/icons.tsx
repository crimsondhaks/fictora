import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12.5l5 5 11-11" />
  </svg>
);

export const Cross = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Upload = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 16V4m0 0L7 9m5-5l5 5" />
    <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 19v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V19" />
    <circle cx="9" cy="7" r="3.2" />
    <path d="M22 19v-1.5a4 4 0 0 0-3-3.87" />
    <path d="M16 4.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Report = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h9l3 3v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v4h4M8.5 13h7M8.5 17h7M8.5 9h2" />
  </svg>
);

export const Target = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </svg>
);

export const Cursor = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3l6.5 16 2.2-6.3 6.3-2.2L5 3Z" />
  </svg>
);

export const TrendDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 7l6 6 4-4 8 8" />
    <path d="M21 17v-5h-5" />
  </svg>
);

export const Pen = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16.5 3.5l4 4L8 20l-4.5 1L4.5 16.5 16.5 3.5Z" />
    <path d="M14 6l4 4" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const Tag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 12.5l8-8H20a.5.5 0 0 1 .5.5v8.5l-8 8a1 1 0 0 1-1.4 0l-7.6-7.6a1 1 0 0 1 0-1.4Z" />
    <circle cx="16" cy="8" r="1.4" fill="currentColor" />
  </svg>
);

export const Rocket = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c3.5 1 6 4 6 9l-3 3-6 0-3-3c0-5 2.5-8 6-9Z" />
    <circle cx="12" cy="9" r="1.6" />
    <path d="M9 18c-1.5.5-2 2-2 3 1 0 2.5-.5 3-2M15 18c1.5.5 2 2 2 3-1 0-2.5-.5-3-2" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
    <path d="M14 9h5a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2M17 13h.01M17 17h.01" />
    <path d="M3 21h18" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const Code = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
  </svg>
);

export const Layers = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l9 5-9 5-9-5 9-5Z" />
    <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Chat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Logo = (p: IconProps) => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" {...p}>
    <rect width="32" height="32" rx="9" fill="#0a0a0c" />
    <path
      d="M11 9.5h11M11 16h8M11 22.5h5"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="23.5" cy="22" r="2.2" fill="white" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2.5l2.9 6 6.6.6-5 4.3 1.5 6.4L12 16.9 6 19.8l1.5-6.4-5-4.3 6.6-.6L12 2.5Z" />
  </svg>
);
