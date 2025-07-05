"use client";

import React from "react";
import Head from "next/head";
import "swiper/css";

import { AllPortfolios } from "@/data/AllPortfolios";
import ServicesSection from "@/components/ServicesSection";
import RetainerPackages from "@/components/RetainerPackages";
import CTASection from "@/components/CTASection";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import FeaturedPortfolios from "@/components/FeaturedPortfolios";
import Testimonials from "@/components/Testimonials";
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

const testimonials = AllPortfolios.map((project: Project) => ({
  name: project.testimonial.name,
  quote: project.testimonial.quote,
  title: project.title,
}));

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Velra Agency– Web Design Agency in Derby & Derbyshire</title>
        <meta
          name="description"
          content="Creative and affordable web design in Derby. Velra builds websites that help Derby businesses grow."
        />
      </Head>

      <div>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src="/assets/herobg.webp"
            alt="Velra Hero Background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex items-center w-full h-full bg-opacity-50">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-20">
              <div className="max-w-6xl">
                <motion.h1
                  className="text-5xl md:text-7xl font-black text-[#DC143C] mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Your Trusted Web Design Agency in Derby.
                </motion.h1>

                <motion.p
                  className="text-white text-lg md:text-xl mb-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Creative, affordable web design in Derby. Velra builds
                  websites that help Derby businesses grow.
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
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Featured Portfolios */}
        <FeaturedPortfolios featuredProjects={featuredProjects} />

        {/* Services */}
        <ServicesSection />

        {/* Packages */}
        <RetainerPackages />

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA */}
        <CTASection />
      </div>
    </>
  );
};

export default Home;
