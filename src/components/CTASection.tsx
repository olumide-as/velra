'use client';
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
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
          className="text-5xl md:text-7xl font-light text-left text-[#DC143C]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Let’s Build <br />
          Together
        </motion.h2>

        <motion.p
          className="text-white text-md md:text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          No fluff. Just smart, standout branding. <br />
          If you’re ready to be unforgettable <br /> we’re ready to make it happen
        </motion.p>

        <motion.a
          href="../contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <button className="uppercase px-12 py-3 rounded-full text-white text-sm md:text-sm bg-gradient-to-r from-[#DC143C] to-[#570516] hover:opacity-90 transition duration-300">
            Start Your Project
          </button>
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