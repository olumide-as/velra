'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ClientLogo = {
  src: string;
  alt: string;
};

const clientLogos: ClientLogo[] = [
  { src: "/assets/client1.svg", alt: "Client 1" },
  { src: "/assets/client2.webp", alt: "Client 2" },
  { src: "/assets/client3.webp", alt: "Client 3" },
  { src: "/assets/client4.svg", alt: "Client 4" },
  { src: "/assets/client5.webp", alt: "Client 5" },
  { src: "/assets/client6.webp", alt: "Client 6" },
  { src: "/assets/client7.webp", alt: "Client 7" },
  { src: "/assets/client8.webp", alt: "Client 8" },
];

// Container animation controls staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Each item fades in and scales up
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Client: React.FC = () => {
  return (
    <motion.section
      className="bg-[#040404] text-white py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto md:px-20">
        <h2 className="text-sm uppercase text-[#DC143C] mb-3">Clients</h2>
        <h3 className="text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1">
          Made with, Made for
        </h3>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-12"
          variants={containerVariants}
        >
          {clientLogos.map((logo, index) => (
<motion.div
  key={index}
  className="bg-[#0a0a0a] p-6 rounded-xl flex items-center justify-center"
  variants={itemVariants}
>
  <Image
    src={logo.src}
    alt={logo.alt}
    className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
    width={200}
    height={200}
    style={{ width: 'auto' }}
  />
</motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Client;