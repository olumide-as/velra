

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Testimonial {
  name: string;
  quote: string;
  title: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="bg-[#040404] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto md:px-20">
        <motion.h2
          className="text-sm uppercase font-black text-[#DC143C] mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <motion.h3
          className="font-black text-2xl md:text-3xl mb-12 border-b-2 border-[#DC143C] inline-block pb-1"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Kind Words from Clients
        </motion.h3>

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
                <p className="text-md mb-6 italic text-gray-200">“{item.quote}”</p>
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;