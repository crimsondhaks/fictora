import { LegalLayout } from "../components/legal/LegalLayout";
import { DocSection, DocLead, DocRow, Bullets, LegalFAQ } from "../components/legal/doc";

export function Legal() {
  return (
    <LegalLayout
      title={
        <>
          Privacy <span className="accent">&</span> Security
        </>
      }
      subtitle="Fictora tests your product before launch — so we treat every upload as confidential. Here's exactly how we handle your data."
      updated="June 2026"
      toc={[
        { id: "security", label: "Security" },
        { id: "privacy", label: "Privacy" },
        { id: "gdpr", label: "GDPR" },
        { id: "faq", label: "FAQ" },
      ]}
      tldr={[
        "Your uploads and reports stay private to your workspace",
        "Export or permanently delete your projects anytime",
        "Optional analytics — off by default for Team workspaces",
        "Your product data is never used to train public models",
      ]}
    >
      <DocSection id="security" title="Security">
        <DocLead title="Security that fits pre-launch work">
          <p>
            Most products you test with Fictora aren't public yet. We treat every upload as
            confidential and keep what we store to the minimum needed to generate your report.
          </p>
        </DocLead>
        <div className="mt-5">
          <Bullets
            items={[
              "Uploads are scoped to your workspace",
              "Simulated AI users run in isolated sessions",
              "No third party receives your unreleased product",
            ]}
          />
        </div>
        <div className="mt-8">
          <DocRow label="Where processing happens">
            <p>
              AI user simulations run on our infrastructure. Your uploaded files and URLs are
              processed only to generate your report, then retained according to your plan's
              settings.
            </p>
          </DocRow>
          <DocRow label="Data isolation">
            <p>
              Each project is isolated to your workspace. Other customers — and the simulated AI
              users themselves — never see another team's product.
            </p>
          </DocRow>
          <DocRow label="Encryption" tags={["In transit", "At rest"]}>
            <p>
              All data is encrypted in transit with TLS and encrypted at rest. Reports and uploads
              are stored encrypted.
            </p>
          </DocRow>
          <DocRow label="Access control" tags={["Workspace-scoped"]}>
            <p>
              Access is limited to members you invite. Team workspaces support role-based access so
              you control who can see each project.
            </p>
          </DocRow>
          <DocRow label="Updates & patching">
            <p>
              We patch dependencies and infrastructure continuously and run automated checks on
              every deploy.
            </p>
          </DocRow>
        </div>
      </DocSection>

      <DocSection id="privacy" title="Privacy">
        <DocRow label="Analytics" tags={["Individuals: opt-in", "Team: off"]}>
          <p>
            We collect basic product analytics — which features you use — to improve Fictora. It's
            opt-in for individuals and off by default for Team workspaces.
          </p>
        </DocRow>
        <DocRow label="Your uploaded content">
          <p>
            Files, URLs, and prototypes you upload are used only to run your tests and generate
            reports. We don't sell or share them, and they're never shown to other customers.
          </p>
        </DocRow>
        <DocRow label="Export your data">
          <p>Export your projects, reports, and results from Settings at any time.</p>
        </DocRow>
        <DocRow label="Delete forever">
          <p>
            Deleting a project removes its uploads and reports from active storage and purges them
            from backups on the next cycle.
          </p>
          <p>
            You can also disable report retention entirely so nothing is stored after a test
            completes.
          </p>
        </DocRow>
        <div className="border-t border-line pt-6">
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand hover:underline"
          >
            Contact our team about privacy →
          </a>
        </div>
      </DocSection>

      <DocSection id="gdpr" title="GDPR">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            Fictora is operated from the United States. For account and analytics data we act as the
            data controller; for the content you upload to test, we act as a processor on your
            behalf.
          </p>
          <p>
            EU and UK users can request access, correction, export, or deletion of their data at any
            time.
          </p>
          <p>Contact us to request a Data Processing Agreement (DPA).</p>
        </div>
      </DocSection>

      <DocSection id="faq" title="Frequent questions">
        <LegalFAQ
          items={[
            {
              q: "Does my uploaded product stay private?",
              a: "Yes. Uploads are scoped to your workspace and used only to generate your report. They're never shown to other customers.",
            },
            {
              q: "Do you sell any data?",
              a: "No. We never sell your data or your uploaded content.",
            },
            {
              q: "Do you train models on my data?",
              a: "We don't use your uploaded content to train public or third-party models.",
            },
            {
              q: "Who can see my reports?",
              a: "Only members of your workspace. Team plans let you control access by role.",
            },
            {
              q: "How long do you keep my data?",
              a: "According to your plan's retention settings. You can export or delete your projects anytime.",
            },
            {
              q: "Are you GDPR-ready?",
              a: "Yes — you can request access, export, or deletion, and we offer a DPA on request.",
            },
          ]}
        />
      </DocSection>
    </LegalLayout>
  );
}
