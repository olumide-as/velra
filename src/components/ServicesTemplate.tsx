'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RetainerPackages from './RetainerPackages';
import HeroSection from './HeroSection';

interface Service {
  slug: string;
  eyebrow: string;
  heading: string;
  subtext: string;
  category: string;
  background: string;
  bgImage: string;
  services: string[];
}

interface Props {
  service: Service;
}

const ServicesTemplate: React.FC<Props> = ({ service }) => {
  const { eyebrow, heading, subtext, background, bgImage, category, services } = service;

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        background={background}
        eyebrow={eyebrow}
        heading={heading}
        subtext={subtext}
      />

      {/* Services List */}
      <section
        className="bg-white text-white py-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase font-black text-[#DC143C] mb-3">{category}</p>
            <h2 className="font-black text-2xl md:text-3xl mb-12 text-gray-800 inline-block border-b-2 border-[#DC143C] pb-1">
              What’s Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 bg-white">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-300 rounded-md p-4 flex items-center"
              >
                <span className="mr-2 text-[#DC143C] text-xl">•</span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Packages */}
      <RetainerPackages />
    </div>
  );
};

export default ServicesTemplate;