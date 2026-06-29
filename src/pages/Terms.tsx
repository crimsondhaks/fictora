import { LegalLayout } from "../components/legal/LegalLayout";
import { DocSection, DocRow, Bullets } from "../components/legal/doc";

export function Terms() {
  return (
    <LegalLayout
      title={
        <>
          Terms <span className="accent">of</span> Service
        </>
      }
      subtitle="The basics of using Fictora during early access. Plain-language summary up top, details below."
      updated="June 2026"
      toc={[
        { id: "overview", label: "Overview" },
        { id: "using", label: "Using Fictora" },
        { id: "acceptable-use", label: "Acceptable use" },
        { id: "your-content", label: "Your content" },
        { id: "access", label: "Plans & access" },
        { id: "disclaimers", label: "Disclaimers" },
        { id: "changes", label: "Changes" },
      ]}
      tldr={[
        "Use Fictora only for products you own or are authorized to test",
        "You keep ownership of everything you upload",
        "Don't abuse, resell, or reverse-engineer the service",
        "Early access is provided as-is while we're in beta",
      ]}
    >
      <DocSection id="overview" title="Overview">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            These terms cover your use of Fictora, an AI product-testing platform that simulates
            user behavior to surface friction before you launch. By using Fictora you agree to these
            terms.
          </p>
          <p>
            This is a plain-language summary for an early-access product and isn't legal advice.
            We'll publish a full agreement before general availability.
          </p>
        </div>
      </DocSection>

      <DocSection id="using" title="Using Fictora">
        <DocRow label="Eligibility">
          <p>
            You must be able to form a binding agreement and use Fictora in compliance with
            applicable laws.
          </p>
        </DocRow>
        <DocRow label="Your workspace">
          <p>
            You're responsible for activity in your workspace and for keeping your access
            credentials secure.
          </p>
        </DocRow>
        <DocRow label="What you can test">
          <p>
            Upload only products, websites, prototypes, or flows that you own or are authorized to
            test on behalf of a client.
          </p>
        </DocRow>
      </DocSection>

      <DocSection id="acceptable-use" title="Acceptable use">
        <p className="mb-4 text-[15px] leading-relaxed text-muted">
          To keep Fictora safe and reliable, you agree not to:
        </p>
        <Bullets
          items={[
            "Upload content you don't have the rights to test",
            "Test products designed for illegal or harmful purposes",
            "Attempt to reverse-engineer, resell, or rebrand the service",
            "Overload, probe, or disrupt our infrastructure",
            "Use Fictora to violate someone's privacy or rights",
          ]}
        />
      </DocSection>

      <DocSection id="your-content" title="Your content">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            You keep all ownership of the files, URLs, and prototypes you upload. You grant us a
            limited license to process that content solely to run your tests and generate your
            reports.
          </p>
          <p>
            We don't sell your content or use it to train public models. See{" "}
            <a href="/legal#privacy" className="font-medium text-brand hover:underline">
              Privacy &amp; Security
            </a>{" "}
            for details.
          </p>
        </div>
      </DocSection>

      <DocSection id="access" title="Plans & access">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            Fictora is currently in early access via the waitlist. Features, limits, and
            availability may change as we develop the product.
          </p>
          <p>If we introduce paid plans, we'll tell you before any charges apply.</p>
        </div>
      </DocSection>

      <DocSection id="disclaimers" title="Disclaimers & liability">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            Fictora simulates user behavior to help you catch issues early. It's a fast first pass —
            not a replacement for real user research or professional advice. Results are provided
            for guidance.
          </p>
          <p>
            During early access the service is provided "as is," without warranties. To the extent
            permitted by law, our liability is limited.
          </p>
        </div>
      </DocSection>

      <DocSection id="changes" title="Changes to these terms">
        <div className="space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            We may update these terms as Fictora evolves. We'll post the updated date here and, for
            material changes, give notice in the app.
          </p>
          <p>
            Questions?{" "}
            <a href="/#contact" className="font-medium text-brand hover:underline">
              Contact us
            </a>
            .
          </p>
        </div>
      </DocSection>
    </LegalLayout>
  );
}
