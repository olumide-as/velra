"use client";

import React from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { AllPortfolios } from "@/data/AllPortfolios";
import ServicesSection from "@/components/ServicesSection";
import RetainerPackages from "@/components/RetainerPackages";
import CTASection from "@/components/CTASection";

import { motion } from "framer-motion";
import Image from "next/image";

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

const isVideoFile = (src: string): boolean => {
  return /\.(mp4|webm|ogg)$/i.test(src);
};

const featuredProjects = AllPortfolios.slice(0, 4).map((project: Project) => {
  const feature = typeof project.images.feature === "string"
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
        <title>Velra – Branding, Web Design & Strategy Studio</title>
        <meta
          name="description"
          content="Build bold brands with Velra — a creative agency offering branding, design, web, and digital marketing services tailored to elevate your business."
        />
      </Head>

      <div>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src="/assets/herobg.png"
            alt="Velra Hero Background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex items-center w-full h-full bg-opacity-50">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-20">
              <div className="max-w-5xl">
                <motion.h1
                  className="text-5xl md:text-6xl font-light text-[#DC143C] mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  We brand. We build. We boost
                </motion.h1>

                <motion.p
                  className="text-white text-lg md:text-xl mb-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  More than a creative partner — we’re your launchpad for
                  branding, growth, and beyond.
                </motion.p>

                <motion.a
                  href="/#about"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <button className="uppercase px-12 py-3 rounded-full text-white text-sm bg-gradient-to-r from-[#DC143C] to-[#570516] hover:opacity-90 transition duration-300">
                    Let&apos;s Get Started
                  </button>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

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
                src="/assets/about4.jpg"
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
              <h2 className="text-sm uppercase text-[#DC143C] mb-3">
                About Velra
              </h2>
              <h3 className="text-2xl md:text-3xl mb-12 text-gray-800 inline-block border-b-2 border-[#DC143C] pb-1">
                Vibes. Vision. Voice.
              </h3>
              <p className="mb-5 text-gray-800">
                From brand identities to immersive experiences, everything we do
                is designed to leave a mark. We believe great work starts with
                listening, grows with collaboration, and ends with something
                unforgettable.
              </p>
              <a
                href="/about"
                className="inline-flex items-center font-semibold text-[#DC143C] hover:text-[#a71022] transition"
              >
                Discover How We Work
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
<section className="bg-[#040404] text-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-20">
    <motion.p
      className="text-sm uppercase text-[#DC143C] mb-3"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Featured Portfolios
    </motion.p>

    <motion.h2
      className="text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Cool stuff we’ve cooked up
    </motion.h2>

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
                  poster={project.image.replace(/\.(mp4|webm|ogg)$/, '.png')}
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
              <h3 className="mt-8 text-sm text-[#DC143C] uppercase font-semibold">
                {project.title}
              </h3>
              <p className="text-md md:text-lg">{project.subtitle}</p>
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
                poster={project.image.replace(/\.(mp4|webm|ogg)$/, '.png')}
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
            <h3 className="mt-8 text-sm text-[#DC143C] uppercase font-semibold">
              {project.title}
            </h3>
            <p className="text-md md:text-lg">{project.subtitle}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </div>
</section>

        {/* Services */}
        <ServicesSection />

        {/* Packages */}
        <RetainerPackages />

        {/* Testimonials */}
        <section className="bg-[#040404] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto md:px-20">
            <motion.p
              className="text-sm uppercase text-[#DC143C] mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.p>

            <motion.h2
              className="text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="border border-[#DC143C] rounded-xl p-6 md:p-8 h-full bg-[#0a0a0a] shadow-lg">
                    <p className="text-md mb-6 italic text-gray-200">
                      “{item.quote}”
                    </p>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </div>
    </>
  );
};

export default Home;
