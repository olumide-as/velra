"use client";

// src/app/web-design-derby/page.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

import Image from "next/image";

import { AllPortfolios } from "@/data/AllPortfolios";
import FeaturedPortfolios from "@/components/FeaturedPortfolios";
import FAQSection from "@/components/FAQSection";
interface Project {
  title: string;
  subtitle: string;
  slug: string;
  images: {
    feature: string | { src: string };
  };
  testimonial: {
    name: string;
    quote: string;
  };
}

export const metadata = {
  title: "Web Design in Derby & Derbyshire | Velra",
  description:
    "Helping Derby & Derbyshire businesses build beautiful, effective websites. We work with entrepreneurs, startups, and small businesses across Derby and Derbyshire to design websites that convert visitors into customers.",
  keywords: ["Web Design", "Derby", "Derbyshire", "Small Business Websites", "Startup Websites", "Velra"],
  authors: [{ name: "Velra" }],
  openGraph: {
    title: "Web Design in Derby & Derbyshire | Velra",
    description:
      "Helping Derby & Derbyshire businesses build beautiful, effective websites. We work with entrepreneurs, startups, and small businesses across Derby and Derbyshire to design websites that convert visitors into customers.",
    url: "https://www.velra.co.uk/web-design-derby",
    siteName: "Velra",
    locale: "en_GB",
    type: "website",
  },
};

const featuredProjects = AllPortfolios.slice(0, 4).map((project: Project) => {
  const feature =
    typeof project.images.feature === "string"
      ? project.images.feature
      : project.images.feature.src;

  return {
    title: project.title,
    subtitle: project.subtitle,
    image: feature,
    link: `/portfolio/${project.slug}`,
  };
});

const DerbyPage = () => {
  return (
    <main>
      <HeroSection
        background="/assets/servicesherobg.webp"
        eyebrow="Web Design in Derby & Derbyshire"
        heading="Helping Derby & Derbyshire Businesses Build Beautiful, Effective Websites"
        subtext="We work with entrepreneurs, startups, and small businesses across Derby and Derbyshire to design websites that convert visitors into customers."
      />
      {/* Services */}
      <ServicesSection />

              {/* About Section */}
              <div
                className="px-6 py-20 max-w-7xl mx-auto md:px-20 lg:py-24"
                id="about"
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
                      src="/assets/derby-city.webp"
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
                      Support to Derby Heros
                    </h2>
                    <h3 className="text-2xl md:text-3xl mb-12 font-black text-gray-800 inline-block border-b-2 border-[#DC143C] pb-1">
                      What Drives Us
                    </h3>
                    <p className="mb-5 text-gray-800">
                      We know the local landscape. From Derby city centre to towns across Derbyshire like Chesterfield, Ilkeston, and Ripley — we help businesses connect with the people who matter most through thoughtful digital design.
                    </p>
                    <a
                      href="/about"
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
                    
                  </motion.div>
                </div>
              </div>

        {/* Featured Portfolios */}
        <FeaturedPortfolios featuredProjects={featuredProjects} />

        {/* FAQ Section */}
        <FAQSection />

      <CTASection />
    </main>
  );
};

export default DerbyPage;
