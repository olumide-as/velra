"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CTASection: React.FC = () => {
  return (
    <motion.section
      className="bg-[#040404] text-white py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-6 md:px-20">
        <motion.h2
          className="text-5xl md:text-6xl font-normal text-left text-[#DC143C]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Let’s Build <br />
          Together
        </motion.h2>

        <motion.p
          className="text-white text-md md:text-lg mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Contact us for a free website consultation.
        </motion.p>

                <motion.a
                  href="tel:+442034322577"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="inline-flex items-center uppercase px-12 py-3 rounded-full text-white text-sm bg-gradient-to-r from-[#DC143C] to-[#570516] hover:opacity-90 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h2l3.6 7.59-1.35 2.44A11.04 11.04 0 0013.4 21h2.6a2 2 0 002-2v-3.5a2 2 0 00-2-2h-1.2a2 2 0 01-1.8-1.06l-.75-1.5a2 2 0 011.44-2.88l2.43-.48a11.06 11.06 0 00-7.32-7.3L7.6 5z"
                    />
                  </svg>
                  Call Us: +44 203 432 2577
                </motion.a>

        {/* Horizontal line */}
        <motion.div
          className="border-t border-white border-opacity-10 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />
      </div>
    </motion.section>
  );
};

export default CTASection;
