import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change, scroll to the top — or, if the URL has a hash, smoothly
 * scroll that section into view (after layout). Keeps cross-page anchor
 * links (e.g. footer → /legal#privacy) working.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0 });
      }, 80);
      return () => window.clearTimeout(id);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}
