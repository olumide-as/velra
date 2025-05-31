import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Privacy Policy | Velra',
  description: 'How Velra collects, uses, and protects your personal information when you use our services or website.',
};

const Privacy = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <HeroSection
        background="/assets/servicesherobg.webp"
        eyebrow="Privacy Policy"
        heading="Your Data, Respected"
        subtext="We value transparency. Here's how we handle your personal information."
      />

      <section className="bg-[#040404] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-20 space-y-10 text-sm leading-relaxed text-gray-300">
          <p><strong>Effective Date:</strong> 13 May 2025</p>

          <h3 className="text-white text-xl font-semibold">1. Information We Collect</h3>
          <ul className="list-disc pl-6">
            <li>Full name, email address, phone number</li>
            <li>Company and business information</li>
            <li>Creative briefs, project preferences, brand assets</li>
            <li>Billing/payment details</li>
            <li>Website analytics (via cookies)</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">2. How We Use Your Information</h3>
          <ul className="list-disc pl-6">
            <li>Communication and project management</li>
            <li>Service delivery</li>
            <li>Invoicing and billing</li>
            <li>Website improvement</li>
            <li>Marketing (opt-out anytime)</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">3. Data Sharing</h3>
          <p>We only share data with trusted partners for:</p>
          <ul className="list-disc pl-6">
            <li>Payment and hosting</li>
            <li>Analytics tools</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">4. Cookies & Analytics</h3>
          <p>We use cookies to analyze website traffic and enhance performance. You may control them via browser settings.</p>

          <h3 className="text-white text-xl font-semibold">5. Data Security</h3>
          <ul className="list-disc pl-6">
            <li>SSL encryption</li>
            <li>Secure cloud storage</li>
            <li>Access control protocols</li>
          </ul>

          <h3 className="text-white text-xl font-semibold">6. Your Rights</h3>
          <p>You may request access, updates, deletion, or withdraw consent by emailing: <a href="mailto:hello@velra.co.uk" className="text-[#DC143C]">hello@velra.co.uk</a></p>

          <h3 className="text-white text-xl font-semibold">7. Updates to Policy</h3>
          <p>We may update this policy from time to time. Please check back for the latest version.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Privacy;