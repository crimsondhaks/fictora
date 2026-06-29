import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Cross, Check, Chat } from "../ui/icons";

const INQUIRY_TYPES = [
  "Early access question",
  "Book a demo",
  "Agency / partnership",
  "Product feedback",
  "Support",
  "Other",
];

type FormState = {
  fullName: string;
  email: string;
  company: string;
  url: string;
  inquiry: string;
  message: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  company: "",
  url: "",
  inquiry: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-[15px] text-ink placeholder:text-faint outline-none transition-all duration-200 focus:border-brand focus:ring-4 focus:ring-brand/10";

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

const darkButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(10,10,20,0.16)] transition-all duration-300 hover:bg-[#1c1c22] hover:shadow-[0_14px_30px_-14px_rgba(10,10,20,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

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

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <span
        className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand"
        style={{ animation: "cs-pop 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <Check className="h-8 w-8" />
      </span>
      <h2 id="contact-title" className="display text-[24px] text-ink">
        Message received
      </h2>
      <p className="max-w-sm text-[15px] leading-relaxed text-muted">
        Thanks for reaching out. We'll get back to you soon.
      </p>
      <button type="button" onClick={onClose} className={`${darkButton} mt-2 sm:w-auto sm:px-8`}>
        Back to website
      </button>
    </div>
  );
}

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(open);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const cardRef = useRef<HTMLDivElement>(null);

  // Mount + enter/exit transition
  useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(id);
    }
    setShow(false);
    const id = window.setTimeout(() => {
      setMounted(false);
      // reset so the next open starts fresh
      setStatus("idle");
      setForm(INITIAL);
      setErrors({});
    }, 250);
    return () => window.clearTimeout(id);
  }, [open]);

  // Body scroll lock + initial focus + focus restore
  useEffect(() => {
    if (!mounted) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      const el = cardRef.current?.querySelector<HTMLElement>("input, select, textarea, button");
      el?.focus();
    }, 60);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [mounted]);

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
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.inquiry) next.inquiry = "Please choose an inquiry type.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;
    setStatus("loading");

    // TODO: connect to your backend here (Supabase / Firebase / Airtable / Resend / email API).
    // Example:
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    await new Promise((resolve) => setTimeout(resolve, 1300));

    setStatus("success");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key === "Tab") {
      const focusables = cardRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const list = Array.from(focusables);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onKeyDown={onKeyDown}
    >
      {/* dimmed, blurred backdrop */}
      <div
        className={`absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* soft blue glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "radial-gradient(circle, rgba(96,165,250,0.22), transparent 70%)" }}
      />

      {/* card */}
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className={`relative z-10 flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_30px_80px_-24px_rgba(31,111,235,0.35)] transition-all duration-300 ${
          show ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <Cross className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <SuccessState onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-6 sm:px-8 sm:pt-8">
              <header className="pr-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/15 bg-brand-soft px-3 py-1 text-[12px] font-semibold text-brand">
                  <Chat className="h-3.5 w-3.5" />
                  Contact Fictora
                </span>
                <h2 id="contact-title" className="display mt-4 text-[22px] text-ink sm:text-[28px]">
                  Talk to us about early access
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Have a question, demo request, or partnership idea? Send us a message and we'll
                  get back to you soon.
                </p>
              </header>

              <div className="mt-6 flex flex-col gap-4 pb-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                <Field label="Website or App URL">
                  <input
                    type="text"
                    value={form.url}
                    onChange={update("url")}
                    placeholder="https://yourapp.com"
                    inputMode="url"
                    className={inputClass()}
                  />
                </Field>
              </div>

              <Field label="Inquiry Type" required error={errors.inquiry}>
                <select
                  value={form.inquiry}
                  onChange={update("inquiry")}
                  aria-invalid={!!errors.inquiry}
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="">Select an option</option>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" required error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  placeholder="Tell us a bit about what you need"
                  aria-invalid={!!errors.message}
                  className={`${inputClass(errors.message)} resize-none`}
                />
              </Field>
              </div>
            </div>

            {/* Pinned footer — submit stays visible while fields scroll */}
            <div className="shrink-0 border-t border-line bg-white px-6 py-4 sm:px-8">
              <button type="submit" disabled={status === "loading"} className={darkButton}>
                {status === "loading" ? (
                  <>
                    <Spinner />
                    <span>Sending message…</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              <p className="mt-3 text-center text-[13px] text-faint">
                We usually reply within 1–2 business days.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
