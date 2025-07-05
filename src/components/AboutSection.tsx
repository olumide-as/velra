"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-7xl mx-auto md:px-20 lg:py-24"
    >
      <div className="flex flex-col overflow-hidden bg-white border border-[#DC143C] rounded-2xl shadow-sm lg:flex-row mx-auto">
        {/* Left Image */}
        <motion.div
          className="relative lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/about4.webp"
            alt="Our team working"
            className="object-cover w-full lg:absolute h-80 lg:h-full grayscale"
            width={1200}
            height={800}
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 0 20 0 20 104 0.824555778 104" />
          </svg>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm font-black uppercase text-[#DC143C] mb-3">
            About Velra
          </h2>
          <h3 className="text-2xl md:text-3xl mb-12 font-black text-gray-800 inline-block border-b-2 border-[#DC143C] pb-1">
            What Drives Us
          </h3>
          <p className="mb-5 text-gray-800">
            From brand identities to immersive experiences, everything we do is
            designed to leave a mark. We believe great work starts with
            listening, grows with collaboration, and ends with something
            unforgettable.
          </p>
          <a
            href="/web-design-derby"
            className="inline-flex items-center font-semibold text-[#DC143C] hover:text-[#a71022] transition"
          >
            Discover How We Work in Derby
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
          <a
            href="https://www.designrush.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              src="/assets/designrush.png"
              alt="DesignRush"
              width={140}
              height={30}
              className="mt-6"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;