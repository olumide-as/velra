"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

interface FeaturedPortfoliosProps {
  featuredProjects: Project[];
}

const isVideoFile = (src: string): boolean => {
  return /\.(mp4|webm|ogg)$/i.test(src);
};

const FeaturedPortfolios: React.FC<FeaturedPortfoliosProps> = ({
  featuredProjects,
}) => {
  return (
    <section className="bg-[#040404] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-sm uppercase font-black text-[#DC143C] mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Portfolios
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl mb-12 border-b-2 font-black border-[#DC143C] inline-block pb-1"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Made by Velra
        </motion.h3>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-10 gap-y-16">
          {/* Left Column */}
          <motion.div
            className="flex flex-col justify-between space-y-16 md:space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="space-y-16">
              {featuredProjects.slice(0, 2).map((project, i) => (
                <motion.a
                  key={i}
                  href={project.link}
                  className="block group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7 }}
                >
                  {isVideoFile(project.image) ? (
                    <video
                      src={project.image}
                      poster={project.image.replace(/\.(mp4|webm|ogg)$/, ".webp")}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-2xl w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={1200}
                      height={800}
                    />
                  )}
                  <h3 className="mt-8 text-sm text-[#DC143C] font-black">
                    {project.title}
                  </h3>
                  <p className="text-md md:text-lg font-bold">{project.subtitle}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-16 mt-12 md:mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {featuredProjects.slice(2, 4).map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                className="block group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                {isVideoFile(project.image) ? (
                  <video
                    src={project.image}
                    poster={project.image.replace(/\.(mp4|webm|ogg)$/, ".webp")}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-2xl w-full object-cover"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={1200}
                    height={800}
                  />
                )}
                <h3 className="mt-8 text-sm text-[#DC143C] font-black">
                  {project.title}
                </h3>
                <p className="text-md md:text-lg font-bold">{project.subtitle}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolios;