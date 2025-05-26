import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Terms & Conditions | Velra',
  description: 'Read our Terms and Conditions to understand our working process, service rules, and legal obligations.',
};

const Terms = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <HeroSection
        background="/assets/servicesherobg.png"
        eyebrow="Terms & Conditions"
        heading="The Ground Rules"
        subtext="Everything you need to know about working with Velra."
      />

      <section className="bg-[#040404] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-20 space-y-10 text-sm leading-relaxed text-gray-300">
          <p><strong>Effective Date:</strong> 13 May 2025</p>

          <h3 className="text-white text-xl font-semibold">1. Who We Are</h3>
          <p>Velra is a creative agency specializing in branding, web design, and digital campaigns for modern businesses.</p>

          <h3 className="text-white text-xl font-semibold">2. Scope of Services</h3>
          <ul className="list-disc pl-6">
            <li>Brand identity & strategy</li>
            <li>Visual/graphic design</li>
            <li>Web design & development</li>
            <li>Digital campaigns & retainers</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">3. Projects & Process</h3>
          <ul className="list-disc pl-6">
            <li>Work begins with signed agreement</li>
            <li>Scope, pricing, and revisions are defined</li>
            <li>Finals are delivered post-payment</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">4. Payments</h3>
          <ul className="list-disc pl-6">
            <li>Due within 7–14 days</li>
            <li>Late fees may apply</li>
            <li>Prices quoted in GBP</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">5. Intellectual Property</h3>
          <ul className="list-disc pl-6">
            <li>Unused concepts remain with Velra</li>
            <li>You get usage rights upon payment</li>
            <li>Unauthorized use is prohibited</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">6. Confidentiality</h3>
          <p>Your private information is confidential and won’t be shared without consent.</p>

          <h3 className="text-white text-xl font-semibold">7. Limitation of Liability</h3>
          <ul className="list-disc pl-6">
            <li>No liability for third-party issues</li>
            <li>Not liable for misuse or indirect loss</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">8. Termination</h3>
          <p>Either party may terminate with notice. Completed work will be invoiced.</p>

          <h3 className="text-white text-xl font-semibold">9. Website Use</h3>
          <ul className="list-disc pl-6">
            <li>No scraping or unauthorized access</li>
            <li>All content is protected and licensed</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">10. Legal Jurisdiction</h3>
          <p>Governed by UK. Disputes will be handled locally.</p>

          <p>Questions? Email: <a href="mailto:hello@madebyvelra.com" className="text-[#DC143C]">hello@madebyvelra.com</a></p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Terms;