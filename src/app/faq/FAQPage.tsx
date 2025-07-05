"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const faqs = [
  {
    question: "How much does a website cost in Derby?",
    answer:
      "Our websites start from £350, depending on the size, features, and goals of your project. We offer fixed-price packages with no hidden fees — perfect for Derby-based startups and small businesses.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "Most websites take 2 to 4 weeks from start to launch. Larger projects or ecommerce builds may take a little longer. We always agree timelines upfront.",
  },
  {
    question: "Can I get a website designed for my small business in Derby?",
    answer:
      "Absolutely. We work with many small businesses across Derby and the East Midlands to create modern, high-converting websites that reflect your brand.",
  },
  {
    question: "Do you offer affordable web design in Derby?",
    answer:
      "Yes — our pricing is designed to be transparent and accessible for local businesses. Whether you’re just starting out or scaling, we can help you grow online without breaking the bank.",
  },
  {
    question: "Do you provide website hosting and maintenance?",
    answer:
      "Yes, we offer hosting setup, domain management, and ongoing website maintenance if needed. We also give you full access to your website after delivery.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we offer full website redesigns to improve visuals, structure, and performance. If your site feels outdated or underperforming, we can help bring it up to standard.",
  },
  {
    question: "Do you work with startups or new businesses?",
    answer:
      "We specialise in working with startups. From your first logo to a full online presence, we help new businesses in Derby make a strong first impression.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. All our websites are fully responsive, meaning they work smoothly on phones, tablets, and desktops.",
  },
  {
    question: "Can you help with branding and logo design too?",
    answer:
      "Yes — we offer branding services, including logo design, colour palette selection, typography, and visual identity systems. It’s all tailored to your business.",
  },
  {
    question: "Are you a local web design agency in Derby?",
    answer:
      "Yes, Velra is based in Derby and works with clients across Derbyshire. We understand the local business landscape and design for impact in your market.",
  },
  {
    question: "Do you build ecommerce websites?",
    answer:
      "Yes, we create online shops using platforms like WooCommerce or Shopify, depending on your needs and budget. All ecommerce sites include mobile optimisation and secure checkout.",
  },
  {
    question: "Can I update the website myself after it’s built?",
    answer:
      "Yes — we use platforms like WordPress that allow you to update content easily. We also provide guidance or training if needed.",
  },
  {
    question: "Do you offer SEO with the website design?",
    answer:
      "Yes — all our websites are SEO-friendly by default. We structure your site to perform well on Google, and we can also help with ongoing SEO services if needed.",
  },
  {
    question: "What platform will my website be built on?",
    answer:
      "We typically build on NextJS, but can also work with custom solutions if needed. We choose the platform based on your goals, budget, and content needs.",
  },
  {
    question: "Can we meet in person in Derby?",
    answer:
      "Yes — we’re happy to arrange in-person meetings in Derby or nearby. We can also work remotely if that’s more convenient for you.",
  },
  {
    question: "Do you offer branding services in Derby?",
    answer:
      "Yes, we offer complete branding solutions including brand strategy, logo design, colour palette selection, typography, and tone of voice — all tailored to your Derby business.",
  },
  {
    question: "Can you help create social media content?",
    answer:
      "Absolutely. We design engaging social media posts, ads, and stories that align with your brand and resonate with your Derby-based audience.",
  },
  {
    question: "Do you offer design retainers or ongoing support?",
    answer:
      "Yes — we provide flexible retainer packages for clients who need regular design work. This can include graphics, social media templates, presentations, and more.",
  },
  {
    question: "Can you refresh our existing brand identity?",
    answer:
      "Yes. We can modernise and strengthen your existing branding while keeping it consistent with your company values and audience. It's a popular option for growing Derby businesses.",
  },
  {
    question: "What makes Velra’s design work stand out?",
    answer:
      "We focus on clarity, purpose, and originality. Every design decision is made with your goals and audience in mind — no fluff, just effective, memorable visuals.",
  },
];

const FAQPage = () => {
  return (
    <div>
      <HeroSection
        background="/assets/servicesherobg.webp"
        eyebrow="FAQs for Derby Web Design and Branding"
        heading="Frequently Asked Questions"
        subtext="Answers to common questions about Velra’s Derby web design and branding services."
      />

      <section className="bg-[#040404] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-white">
          <motion.div
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-[#1f1f1f] rounded-lg p-6 cursor-pointer"
              >
                <summary className="font-semibold text-lg">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default FAQPage;