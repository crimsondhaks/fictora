import { Link } from "react-router-dom";
import { Logo } from "../ui/icons";
import { Button } from "../ui/Button";

/** Minimal sticky glass nav for the legal/doc pages. */
export function LegalNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/75 backdrop-blur-xl">
      <nav className="shell flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <Logo />
          <span className="text-[20px]">Fictora</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-brand-soft/60 hover:text-brand sm:inline-flex"
          >
            Back to home
          </Link>
          <Button href="/#waitlist" variant="primary" size="md">
            Join Waitlist
          </Button>
        </div>
      </nav>
    </header>
  );
}
