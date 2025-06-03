'use client';

import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  background: string;
  eyebrow: string;
  heading: string;
  subtext: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  background,
  eyebrow,
  heading,
  subtext,
}) => {
  return (
    <section
      className="relative bg-[#0a0a0a] text-white py-32 px-6 pt-48 md:px-12 lg:px-20 flex items-center justify-start text-left min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-sm font-bold uppercase text-[#DC143C] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {eyebrow}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="mt-6 text-md md:text-md lg:text-lg font-light leading-snug max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {subtext}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;