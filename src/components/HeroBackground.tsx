/**
 * Hero ambient background — a saturated soft-blue wash that fades to white,
 * with soft drifting clouds (sourced from the Figma reference).
 *
 * NOTE: layers sit at z-0 (NOT negative z-index) so they paint above the
 * white app-root background. Hero content sits at z-10 above these layers.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Saturated blue wash → white */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #c2dcff 0%, #cce3ff 16%, #d9ebff 36%, #e7f1fc 58%, #f3f7fc 78%, #ffffff 100%)",
        }}
      />

      {/* Soft radial blue glow near the top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 56% at 50% 6%, rgba(110,170,255,0.5), transparent 64%)",
        }}
      />

      {/* Drifting clouds */}
      <img
        src="/clouds/cloud-1.png"
        alt=""
        className="absolute -left-16 top-[88px] w-[360px] opacity-85 sm:w-[440px] lg:-left-20 lg:top-[110px] lg:w-[560px]"
        style={{ animation: "var(--animate-float)" }}
      />
      <img
        src="/clouds/cloud-2.png"
        alt=""
        className="absolute -right-16 top-[210px] hidden w-[360px] opacity-75 sm:block sm:w-[420px] lg:-right-12 lg:top-[250px] lg:w-[520px]"
        style={{ animation: "var(--animate-float)", animationDelay: "2s" }}
      />

      {/* Fade the clouds into the page bottom for a clean transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(180deg, transparent, #ffffff)",
        }}
      />
    </div>
  );
}
