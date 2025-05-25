'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  number: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Branding & Identity',
    description:
      "A brand isn’t just a logo — it’s your vibe, your voice, and your first impression. It’s the feeling people get when they hear your name or see your work. We help you shape that feeling into something unforgettable — bold, clear, and so you.",
    link: '/services/branding',
  },
  {
    number: '02',
    title: 'Design',
    description:
      "Good design doesn’t just look good — it makes people feel something. Whether it’s a post, a poster, or a full-on campaign, our design magic turns ideas into visuals that click, connect, and stick around.",
    link: '/services/design',
  },
  {
    number: '03',
    title: 'Web Development',
    description:
      "Your website is your digital handshake — make it count. We build sleek, strategic, and scroll-stopping sites that not only look good, but work hard to turn visits into real results. Your digital first impression = everything.",
    link: '/services/web',
  },
  {
    number: '04',
    title: 'Social & Digital Marketing',
    description:
      "You’ve got the story — we help you tell it where it matters. From scroll-worthy posts to data-backed campaigns, we create content and strategies that spark conversation, grow your audience, and get your brand out there (loud and proud).",
    link: '/services/marketing',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      className="bg-white text-white py-20"
      style={{
        backgroundImage: `url('/assets/servicesbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase text-[#DC143C] mb-3">What we do</p>
          <h2 className="text-2xl md:text-3xl mb-12 text-gray-800 inline-block border-b-2 border-[#DC143C] pb-1">
            The Velra Vibe, Explained
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <span className="text-sm text-gray-400 font-mono block mb-2">
                {service.number}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#DC143C] transition duration-200 mb-2">
                {service.title}
              </h3>
              <div className="w-20 h-[2px] bg-[#DC143C] mb-3" />
              <p className="text-base text-gray-600 mt-2 mb-3">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-sm text-[#DC143C] font-bold underline hover:opacity-80 transition"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;