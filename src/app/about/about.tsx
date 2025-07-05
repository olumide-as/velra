"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const About = () => {
  const images = {
    wide: "/assets/about1.webp",
    details: ["/assets/about2.webp", "/assets/about3.webp"],
  };

  return (
    <div>
      <HeroSection
        background="/assets/servicesherobg.webp"
        eyebrow="Derby-Based Creative Agency"
        heading="Helping Derby Small Teams Make Big Impressions"
        subtext="Velra partners with Derby startups and small businesses to build brands, websites, and content that truly connect locally. We combine thoughtful strategy with standout design to turn ideas into impact."
      />

      <section className="bg-[#040404] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full max-h-[600px] rounded-xl overflow-hidden"
            style={{ aspectRatio: "1200 / 600" }} // 2:1 ratio
          >
            <Image
              src={images.wide}
              alt="About wide showcase"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 1200px"
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
              <h3 className="text-2xl font-black mb-4">Our North Star</h3>
              <p className="text-gray-300 leading-relaxed">
                To craft creative work that’s meaningful, memorable, and made to
                grow with Derby businesses. Our focus is on building authentic
                local identities grounded in purpose and designed for impact.
              </p>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-black mb-4">The Way We Work</h3>
              <p className="text-gray-300 leading-relaxed">
                We lead with curiosity, collaborate openly, and create with
                intention. Every project begins by listening — understanding
                your goals, your audience, and your vision. Our approach
                balances creativity and strategic thinking, ensuring each idea
                is both beautiful and effective. With a culture of transparency
                and adaptability, we treat each project as a true partnership —
                guided by purpose, delivered with precision for Derby
                businesses.
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
                className="relative w-full rounded-xl h-[500px]"
              >
                <Image
                  src={src}
                  alt={`Detail ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.75rem" }} // rounded-xl = 12px ~ 0.75rem
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={i === 0} // optional: prioritize first image
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
