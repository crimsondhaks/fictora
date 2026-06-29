import { createContext, useContext, useState, type ReactNode } from "react";
import { ContactModal } from "./ContactModal";

type ContactContextValue = { openContact: () => void };

const ContactContext = createContext<ContactContextValue | null>(null);

/** Open the global Contact modal from anywhere in the app. */
export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within <ContactProvider>");
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactContext.Provider value={{ openContact: () => setOpen(true) }}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  );
}
