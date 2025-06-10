'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { AllPortfolios } from '@/data/AllPortfolios';
import Image from 'next/image';

interface ImageType {
  src: string;
  [key: string]: unknown;
}

interface PortfolioType {
  title: string;
  subtitle: string;
  slug: string;
  images: {
    feature: string | ImageType;
    cover: string;
    wide?: string;
    details?: string[];
  };
  [key: string]: unknown;
}

const isVideo = (src: string) => {
  return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
};

// Get poster image path for a video by replacing extension with .png
const getPosterSrc = (videoSrc: string) => {
  if (!isVideo(videoSrc)) return '';
  return videoSrc.replace(/\.(mp4|webm|ogg)$/, '.webp');
};

const Portfolio = () => {
  const allPortfolio = (AllPortfolios as PortfolioType[]).map((project) => {
    const feature = project.images.feature;
    const featureSrc = typeof feature === 'string' ? feature : feature?.src || '';

    return {
      title: project.title,
      subtitle: project.subtitle,
      media: featureSrc,
      link: `/portfolio/${project.slug}`,
    };
  });

  return (
    <motion.div
      className="bg-[#040404] text-white pt-40 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <motion.h1
          className="text-sm uppercase font-black text-[#DC143C] mb-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h1>

        <motion.h2
          className="font-black text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cool stuff we’ve cooked up
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {allPortfolio.map((project, i) => (
            <motion.a
              href={project.link}
              key={i}
              className={`block group ${i % 2 !== 0 ? 'md:mt-20' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isVideo(project.media) ? (
                <video
                  className="rounded-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={project.media}
                  poster={getPosterSrc(project.media)}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={project.media}
                  alt={project.title}
                  className="rounded-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={800}
                  height={600}
                />
              )}
              <h3 className="font-bold mt-8 text-sm md:text-sm text-[#DC143C] uppercase">
                {project.title}
              </h3>
              <p className="font-bold text-md md:text-lg">{project.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;