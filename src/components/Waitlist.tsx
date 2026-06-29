import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Check, Users, Chat, Target, Pen, Rocket, Bolt } from "./ui/icons";

const ROLES = ["Founder", "Agency", "Product Manager", "UX Designer", "Developer", "Other"];
const TEST_TARGETS = [
  "Landing page",
  "SaaS app",
  "Mobile app",
  "Prototype",
  "Client website",
  "Other",
];

const PERKS = [
  { icon: Users, text: "100 AI users per test" },
  { icon: Chat, text: "Persona-based feedback" },
  { icon: Target, text: "Stuck point detection" },
  { icon: Pen, text: "Copy improvement suggestions" },
  { icon: Rocket, text: "Launch-readiness report" },
];

type FormState = {
  fullName: string;
  email: string;
  company: string;
  url: string;
  role: string;
  target: string;
  message: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  company: "",
  url: "",
  role: "",
  target: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-faint outline-none transition-all duration-200 focus:border-brand focus:ring-4 focus:ring-brand/10";

function inputClass(error?: string) {
  return `${fieldBase} ${error ? "border-rose/60" : "border-line-strong"}`;
}

const SELECT_CHEVRON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238a8a95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E";

const selectStyle = {
  backgroundImage: `url("${SELECT_CHEVRON}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
} as const;

const selectClass = `${fieldBase} border-line-strong cursor-pointer appearance-none pr-10`;

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-ink-soft">
        {label}
        {required && <span className="text-rose"> *</span>}
      </span>
      {children}
      {error && <span className="text-[12px] font-medium text-rose">{error}</span>}
    </label>
  );
}

function Spinner() {
  return (
    <span className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-sky/40 border-t-sky" />
  );
}

const ORBIT_ANGLES = [0, 120, 240];
const PARTICLES = [
  { left: "16%", size: 6, delay: "0s", dur: "3.4s" },
  { left: "30%", size: 4, delay: "0.7s", dur: "3.9s" },
  { left: "48%", size: 7, delay: "0.3s", dur: "3.5s" },
  { left: "63%", size: 4, delay: "1s", dur: "4.1s" },
  { left: "78%", size: 5, delay: "0.2s", dur: "3.7s" },
  { left: "40%", size: 3, delay: "1.3s", dur: "4.3s" },
];

/** Premium blue cloud confirmation animation (pure CSS, reduced-motion aware). */
function CloudSuccess() {
  return (
    <div className="cs-stage" role="img" aria-label="Waitlist confirmed">
      <span className="cs-glow" aria-hidden />

      <div className="cs-particles" aria-hidden>
        {PARTICLES.map((p, i) => (
          <i
            key={i}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <span className="cs-ring" aria-hidden />

      <div className="cs-orbit" aria-hidden>
        {ORBIT_ANGLES.map((a) => (
          <i
            key={a}
            style={{ transform: `rotate(${a}deg) translateY(calc(-1 * var(--cs-orbit-r)))` }}
          />
        ))}
      </div>

      <div className="cs-cloud-wrap" aria-hidden>
        <svg className="cs-cloud" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="cs-cloud-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#EAF4FF" />
              <stop offset="1" stopColor="#D9ECFF" />
            </linearGradient>
          </defs>
          <path
            d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
            fill="url(#cs-cloud-fill)"
            stroke="#60A5FA"
            strokeOpacity="0.5"
            strokeWidth="0.5"
          />
          <path
            className="cs-check"
            d="M8.6 13.6 L11 16 L15.6 11.2"
            pathLength={1}
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 py-8 text-center">
      <CloudSuccess />
      <div className="cs-enter space-y-2" style={{ animationDelay: "0.35s" }}>
        <h3 className="text-[24px] font-bold text-ink">You're on the waitlist</h3>
        <p className="mx-auto max-w-sm text-[16px] leading-relaxed text-muted">
          We'll contact you soon with early access to Fictora.
        </p>
      </div>
      <span
        className="cs-enter inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/70 px-3.5 py-1.5 text-[13px] font-medium text-brand"
        style={{ animationDelay: "0.5s" }}
      >
        <Check className="h-3.5 w-3.5" />
        Early access request received
      </span>
    </div>
  );
}

function SideCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-b from-ink to-[#15171c] p-7 text-white shadow-card sm:p-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/40 blur-3xl"
      />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          Limited Early Access
        </span>
        <h3 className="mt-5 text-[20px] font-semibold">Everything early users get</h3>
        <p className="mt-1.5 text-[14px] text-white/60">
          Your full launch-readiness toolkit, free during early access.
        </p>

        <ul className="mt-6 space-y-3.5">
          {PERKS.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[15px] text-white/90">{p.text}</span>
              </li>
            );
          })}
        </ul>

        {/* Demand indicator */}
        <div className="mt-8 rounded-2xl bg-white/[0.06] p-4">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-white/70">Early access spots</span>
            <span className="font-semibold text-white">732 / 1,000 claimed</span>
          </div>
          <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-sky to-brand" />
          </div>
          <p className="mt-2 text-[12px] text-white/50">Spots are limited and filling fast.</p>
        </div>
      </div>
    </div>
  );
}

export function Waitlist() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your work email.";
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.url.trim()) next.url = "Please add your website or app URL.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;

    setStatus("loading");

    // TODO: connect to your backend here (Supabase / Firebase / Airtable / email API).
    // Example:
    //   await fetch("/api/waitlist", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
  };

  return (
    <Section id="waitlist" className="relative overflow-hidden section-tint">
      <SectionHeader
        eyebrow="Limited Early Access"
        dotColor="var(--color-amber)"
        title={
          <>
            Join the Fictora <span className="accent">early access</span> waitlist
          </>
        }
        subtitle="We're opening Fictora to a limited group of founders, agencies, and product teams. Join the waitlist and we'll contact you soon with early access."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Form card */}
        <Reveal className="lg:col-span-3">
          <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card sm:p-8">
            {status === "success" ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required error={errors.fullName}>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={update("fullName")}
                      placeholder="Jane Cooper"
                      autoComplete="name"
                      aria-invalid={!!errors.fullName}
                      className={inputClass(errors.fullName)}
                    />
                  </Field>

                  <Field label="Work Email" required error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={inputClass(errors.email)}
                    />
                  </Field>

                  <Field label="Company / Startup Name">
                    <input
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Acme Inc."
                      autoComplete="organization"
                      className={inputClass()}
                    />
                  </Field>

                  <Field label="Website or App URL" required error={errors.url}>
                    <input
                      type="text"
                      value={form.url}
                      onChange={update("url")}
                      placeholder="https://yourapp.com"
                      inputMode="url"
                      aria-invalid={!!errors.url}
                      className={inputClass(errors.url)}
                    />
                  </Field>

                  <Field label="Your Role">
                    <select
                      value={form.role}
                      onChange={update("role")}
                      className={selectClass}
                      style={selectStyle}
                    >
                      <option value="">Select a role</option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="What do you want to test?">
                    <select
                      value={form.target}
                      onChange={update("target")}
                      className={selectClass}
                      style={selectStyle}
                    >
                      <option value="">Select an option</option>
                      {TEST_TARGETS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Short message">
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="Tell us what you're building"
                    className={`${inputClass()} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-ink px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_1px_2px_rgba(10,10,20,0.16)] transition-all duration-300 hover:bg-[#1c1c22] hover:shadow-[0_14px_30px_-14px_rgba(10,10,20,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Spinner />
                      <span>Joining waitlist…</span>
                    </>
                  ) : (
                    <>
                      <Bolt className="h-[18px] w-[18px]" />
                      <span>Join Waitlist</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[13px] text-faint">
                  No spam. We'll only contact you about Fictora early access.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        {/* Side card */}
        <Reveal delay={120} className="lg:col-span-2">
          <SideCard />
        </Reveal>
      </div>
    </Section>
  );
}
