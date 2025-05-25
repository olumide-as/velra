'use client';

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AllPortfolios } from "../data/AllPortfolios";
import CTASection from "./CTASection";
import Image from "next/image";

type Portfolio = (typeof AllPortfolios)[number];

interface Props {
  project: Portfolio;
}

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const isVideo = (src: string) =>
  src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

const getMediaSrc = (input: string | { src: string }) =>
  typeof input === "string" ? input : input.src;

const PortfolioTemplate: React.FC<Props> = ({ project }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    slug,
    heroVideo,
    title,
    partner,
    sector,
    services,
    brief,
    whippedUp,
    images,
    testimonial,
  } = project;

  const relatedProjects = AllPortfolios.filter((p) => p.slug !== slug);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-center justify-start px-6 pt-48 md:px-12 lg:px-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* Overview */}
      <motion.section
        className="text-white py-20 bg-[#040404]"
        {...fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <p className="text-sm uppercase text-[#DC143C] mb-3">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 border-b-2 border-[#DC143C] pb-1">
            {title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Brief</h3>
              <p className="text-gray-300 leading-relaxed">{brief}</p>
            </div>
            <div className="space-y-6 text-sm text-gray-300 border-l border-gray-600 pl-6">
              <div>
                <p className="text-white font-semibold mb-1">Partner</p>
                <p>{partner}</p>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <p className="text-white font-semibold mb-1">Niche</p>
                <p>{sector}</p>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <p className="text-white font-semibold mb-1">Scope of Work</p>
                <p>{services}</p>
              </div>
            </div>
          </div>

          {images?.cover && (
            <motion.div className="mt-16" {...fadeIn} viewport={{ once: true }}>
              <Image
                src={getMediaSrc(images.cover)}
                alt={`${title} cover`}
                className="w-full object-cover max-h-[600px] rounded-xl"
                width={1200}
                height={600}
              />
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Whipped Up */}
      <motion.section
        className="bg-[#040404] text-white py-20"
        {...fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h3 className="text-xl font-semibold mb-6">What We Whipped Up</h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl">{whippedUp}</p>
        </div>
      </motion.section>

      {/* Wide Image */}
      {images?.wide && (
        <motion.section
          className="bg-[#040404] py-16"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-20">
            <Image
              src={getMediaSrc(images.wide)}
              alt={`${title} wide`}
              className="w-full object-cover rounded-xl max-h-[600px]"
              width={1200}
              height={600}
            />
          </div>
        </motion.section>
      )}

      {/* Details */}
      {images?.details && (
        <motion.section
          className="bg-[#040404] py-16"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.details.map((src, i) => (
              <Image
                key={i}
                src={getMediaSrc(src)}
                alt={`Detail ${i + 1}`}
                className="w-full object-cover rounded-xl"
                width={800}
                height={600}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <motion.section
          className="bg-[#040404] text-white py-20"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-20 text-center">
            <blockquote className="italic text-lg md:text-xl text-gray-300 leading-relaxed">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-4 text-[#DC143C] font-semibold">— {testimonial.name}</p>
          </div>
        </motion.section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.section
          className="bg-[#040404] py-16 px-6 md:px-20 max-w-7xl mx-auto relative"
          {...fadeIn}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-2xl md:text-3xl mb-8">More Projects</h3>

          <button
            onClick={() => scroll("left")}
            className="md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#DC143C] hover:bg-[#a71022] p-2 rounded-full text-white z-20"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#DC143C] hover:bg-[#a71022] p-2 rounded-full text-white z-20"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar py-4 scroll-smooth"
          >
            {relatedProjects.map((p) => {
              const featureSrc = getMediaSrc(p.images.feature);
              const video = isVideo(featureSrc);

              return (
                <motion.a
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="min-w-[300px] flex-shrink-0 group"
                  whileHover={{ scale: 1.03 }}
                >
                  {video ? (
                    <video
                      src={featureSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-2xl w-[350px] h-[200px] object-cover"
                    />
                  ) : (
                    <Image
                      src={featureSrc}
                      alt={p.title}
                      className="rounded-2xl w-[350px] object-cover"
                      width={350}
                      height={200}
                    />
                  )}
                  <h3 className="mt-8 text-sm text-[#DC143C] uppercase font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white">{p.subtitle}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.section>
      )}

      <CTASection />
    </div>
  );
};

export default PortfolioTemplate;