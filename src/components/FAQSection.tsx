

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much does a website cost in Derby?",
    answer:
      "Our websites start from £350, depending on the size, features, and goals of your project. We offer fixed-price packages with no hidden fees — perfect for Derby-based startups and small businesses.",
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
    question: "Can you help with branding and logo design too?",
    answer:
      "Yes — we offer branding services, including logo design, colour palette selection, typography, and visual identity systems. It’s all tailored to your business.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#040404] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto md:px-20">
        <motion.h2
          className="text-sm uppercase font-black text-[#DC143C] mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>

        <motion.h3
          className="font-black text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h3>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                type="button"
              >
                <h4 className="text-lg md:text-xl font-bold text-white">
                  {faq.question}
                </h4>
                <span className="text-[#DC143C] text-xl transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/faq"
            className="inline-block text-white text-sm font-semibold border border-[#DC143C] px-6 py-3 rounded-full hover:bg-[#DC143C] transition duration-300"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;