import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Terms & Conditions | Velra Agency",
  description:
    "Read our Terms and Conditions to understand our working process, service rules, and legal obligations.",
};

const Terms = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <HeroSection
        background="/assets/servicesherobg.webp"
        eyebrow="Terms & Conditions"
        heading="The Ground Rules"
        subtext="Everything you need to know about working with Velra."
      />

      <section className="bg-[#040404] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-20 space-y-10 text-sm leading-relaxed text-gray-300">
          <p>
            <strong>Effective Date:</strong> 30 May 2025
          </p>

          <h3 className="text-white text-xl font-semibold">
            1. Quotations & Validity
          </h3>
          <ul className="list-disc pl-6">
            <li>All costs provided exclude VAT, where applicable.</li>
            <li>
              Quotations are valid for thirty (30) days from the quotation date.
            </li>
            <li>
              Quoted costs are guide estimates based on anticipated creative
              direction, timelines, and production requirements, subject to
              client co-operation and timely provision of materials. Significant
              changes may result in additional charges, with prior notice given.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            2. Payments & Invoicing
          </h3>
          <ul className="list-disc pl-6">
            <li>
              A minimum deposit of 40% of the total quoted cost is required
              before project commencement.
            </li>
            <li>
              No creative or development work begins without written/verbal
              approval and deposit.
            </li>
            <li>
              Remaining 60% is due upon final delivery or project completion, or
              as staged payments.
            </li>
            <li>
              Invoices are due within fourteen (14) days. Late fees (10%) may
              apply.
            </li>
            <li>
              Staged projects require payment at the end of each phase before
              proceeding.
            </li>
            <li>
              If a project exceeds 12 weeks, 25% of remaining balance may be
              invoiced.
            </li>
            <li>Third-party services may require 100% upfront payment.</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            3. Project Scope & Timeline
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Timeline starts after deposit and all materials are received.
            </li>
            <li>
              Delays due to client or external causes may extend timelines.
            </li>
            <li>
              Velra is not liable for delays due to force majeure or third
              parties.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            4. Revisions & Creative Work
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Includes up to 2 creative options and 3 rounds of revisions.
            </li>
            <li>Further revisions may be charged.</li>
            <li>
              No refund of deposit if no approved direction after 3 rounds.
            </li>
            <li>All stages require written sign-off before proceeding.</li>
            <li>
              Final creative direction remains with Velra unless agreed
              otherwise.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            5. Ownership & Copyright
          </h3>
          <ul className="list-disc pl-6">
            <li>All work remains Velra’s property until final payment.</li>
            <li>
              Client gains rights to final deliverables upon full payment.
            </li>
            <li>Rejected concepts and source files are not included.</li>
            <li>
              Web design ownership does not include proprietary code or CMS.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            6. Content & Assets
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Client provides all necessary content unless agreed otherwise.
            </li>
            <li>
              Additional services like copywriting or stock imagery are charged
              extra.
            </li>
            <li>Stock images range £25–£45. Bespoke assets are cost + 15%.</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            7. Meetings & Communication
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Key-stage meetings are included. Additional time may be charged.
            </li>
            <li>All approvals and decisions must be provided in writing.</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            8. Hosting, Domain & Third-Party Services
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Velra requires all websites to be hosted on a server managed or
              approved by the agency to ensure performance and security.
            </li>
            <li>
              If the client insists on using their own hosting provider, Velra
              may accommodate this but may charge additional fees for support or
              troubleshooting.
            </li>
            <li>
              Domain registration and renewals can be handled by Velra or the
              client. Velra is not liable for issues when the client manages
              their own domain.
            </li>
            <li>
              Velra is not responsible for issues arising from third-party
              services including email, analytics, or plugins unless directly
              managed by the agency.
            </li>
            <li>
              No liability is accepted for hosting outages, DNS errors, data
              loss, malware, or service disruptions outside of Velra’s control.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            9. Colour Matching & Printing
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Exact colour matching is not guaranteed due to technical
              variances.
            </li>
            <li>Proofs may be requested at an additional cost.</li>
            <li>
              Velra recommends using in-house print suppliers for full quality
              control. No responsibility is taken for third-party print issues
              post-handoff.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            10. Confidentiality
          </h3>
          <p>
            Velra will not disclose or use your information beyond contract
            purposes. Both parties agree to mutual confidentiality.
          </p>

          <h3 className="text-white text-xl font-semibold">
            11. Promotion & Credit
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Velra may display work in portfolios, awards, or case studies.
            </li>
            <li>
              Proper credit should be provided on final works when applicable.
            </li>
            <li>
              Velra will include its registered name in the footer of the client&apos;s website by default, unless a different arrangement is agreed upon in writing.
            </li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            12. Defects & Warranty
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Clients must report defects within 30 days of final invoice.
            </li>
            <li>No liability after this period.</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">
            13. Legal & Jurisdiction
          </h3>
          <p>Governed by UK law. Disputes will be handled in UK courts.</p>

          <h3 className="text-white text-xl font-semibold">14. General</h3>
          <ul className="list-disc pl-6">
            <li>
              Velra may revise these terms at any time with immediate effect.
            </li>
            <li>These terms override all previous agreements.</li>
            <li>
              Acceptance of quotation or deposit confirms acceptance of terms.
            </li>
          </ul>

          <p>
            Questions? Email:{" "}
            <a href="mailto:hello@velra.co.uk" className="text-[#DC143C]">
              hello@velra.co.uk
            </a>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Terms;
