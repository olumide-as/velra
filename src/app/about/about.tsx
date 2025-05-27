'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const About = () => {
  const images = {
    wide: "/assets/about1.jpg",
    details: ["/assets/about2.jpg", "/assets/about3.jpg"],
  };

  return (
    <div>
      <HeroSection
        background="/assets/servicesherobg.png"
        eyebrow="Our Story, In Color"
        heading="Helping small teams make big impressions."
        subtext="Velra is a creative agency partnering with startups and small teams to build brands, websites, and content that truly connect. We combine thoughtful strategy with standout design to turn ideas into impact."
      />

      <section className="bg-[#040404] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={images.wide}
              alt="About wide showcase"
              className="w-full object-cover rounded-xl max-h-[600px]"
              width={1200}
              height={600}
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20 text-white bg-[#040404] space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <hr className="border-t border-[#DC143C] w-20 mx-auto mb-8" />

          <motion.div
            className="md:flex md:space-x-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our North Star</h3>
              <p className="text-gray-300 leading-relaxed">
                To shape creative work that’s meaningful, memorable, and made to
                grow with you. Our focus is on building authentic identities that
                are grounded in purpose and designed for impact.
              </p>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">The Way We Work</h3>
              <p className="text-gray-300 leading-relaxed">
                We lead with curiosity, collaborate openly, and create with
                intention. Every project begins with listening — understanding
                your goals, your audience, and your vision. Our approach balances
                creativity and strategic thinking, ensuring each idea is both
                beautiful and effective. With a culture of transparency and
                adaptability, we treat each project like a true partnership —
                guided by purpose, delivered with precision.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {images.details.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
              >
                <Image
                  src={src}
                  alt={`Detail ${i + 1}`}
                  className="w-full object-cover rounded-xl h-[500px]"
                  width={600}
                  height={500}
                />
              </motion.div>
            ))}
          </motion.div>

          <hr className="border-t border-[#DC143C] w-20 mx-auto my-8" />
        </motion.section>
      </section>

      <Client />
      <CTASection />
    </div>
  );
};

export default About;