'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.footer
      className="bg-[#040404] text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Tagline */}
        <motion.div variants={fadeUp} custom={0} className="space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
            Made with love, <br />
            good vibes & pixels <br />
            at Velra
          </h3>
        </motion.div>

        {/* Column 2: Contact + Socials */}
        <motion.div variants={fadeUp} custom={1} className="space-y-4 order-last lg:order-none">
          <h3 className="text-lg md:text-xl">Say Hey, Don&apos;t be Shy</h3>
          <div className="text-sm">
            <p>hello@velra.co.uk</p>
            <p>+44 203 432 2577</p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/madebyvelra/" target="_blank" rel="noreferrer">
                <FaInstagram className="w-5 h-5 hover:text-[#DC143C] transition" />
              </a>
              <a href="https://www.tiktok.com/@madebyvelra" target="_blank" rel="noreferrer">
                <FaTiktok className="w-5 h-5 hover:text-[#DC143C] transition" />
              </a>
              <a href="https://x.com/madebyvelra" target="_blank" rel="noreferrer">
                <FaXTwitter className="w-5 h-5 hover:text-[#DC143C] transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Column 3: Addresses */}
        <motion.div variants={fadeUp} custom={2} className="space-y-4 text-sm">
          <h3 className="text-lg md:text-xl">Creativity Lives Here</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-gray-400">
              <p className="font-semibold text-white">United Kingdom</p>
              <p>
                Suite 6114 <br />
                Unit 3A <br />
                34–35 Hatton Garden <br />
                Holborn <br />
                London <br />
                EC1N 8DX
              </p>
            </div>
            {/* Nigeria Address (commented out for now) 
            <div className="text-gray-400">
              <p className="font-semibold text-white">Nigeria</p>
              <p>
                Surulere <br />
                Lagos
              </p>
            </div>
            */}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="border-t border-white border-opacity-10 my-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        custom={3}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-3 md:space-y-0"
      >
        <span>© {year} Velra</span>
        <div className="flex gap-6">
          <a href="/terms" className="hover:text-white transition">
            T&Cs
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;