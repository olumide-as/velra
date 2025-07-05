import type { Metadata } from "next";
import FAQPage from "./FAQPage";

export const metadata: Metadata = {
  title: "Web Design FAQ for Derby & Derbyshire | Velra",
  description:
    "Explore frequently asked questions about affordable web design in Derby and Derbyshire. Learn about pricing, platforms, SEO, branding, and support for small businesses.",
  keywords: [
    "web design Derby",
    "website cost Derby",
    "Derbyshire web designer",
    "responsive websites Derby",
    "affordable web design Derbyshire",
    "ecommerce design Derby",
    "SEO Derbyshire",
    "WordPress Derby",
    "branding Derby",
    "logo design Derby"
  ],
  alternates: {
    canonical: "https://velra.co.uk/faq",
  },
};



import React from "react";
import Head from "next/head";

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Derby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our websites start from £350, depending on the size, features, and goals of your project. We offer fixed-price packages with no hidden fees — perfect for Derby-based startups and small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to design a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most websites take 2 to 4 weeks from start to launch. Larger projects may take longer. We always agree timelines upfront."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a website designed for my small business in Derby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We work with small businesses across Derby to create modern, high-converting websites."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer affordable web design in Derby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — our pricing is designed to be accessible for local businesses. We help you grow online without breaking the bank."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website hosting and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer hosting setup, domain management, and website maintenance. You'll also have full access after delivery."
        }
      }
    ]
  };
  return (
    <>
      <Head>
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <FAQPage />
    </>
  );
}