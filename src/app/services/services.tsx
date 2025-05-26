
import React from 'react';
import Head from 'next/head';

import Client from '@/components/Client';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import RetainerPackages from '@/components/RetainerPackages';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Our Services | Velra',
  description: 'Explore our creative services — from branding and design to web development and digital marketing. Custom solutions built for your brand’s success.',
};

// Use a string for image paths (since images are now in the public folder)
interface ServicesHeroType {
  background: string;
  eyebrow: string;
  heading: string;
  subtext: string;
}

const servicesHero: ServicesHeroType = {
  background: '/assets/servicesherobg.png', // Updated to a string path
  eyebrow: 'Our Services',
  heading:
    "We don’t do one-size-fits-all. \nWe listen, we create, we obsess over the details — so every project feels custom-made, because it is.",
  subtext:
    'Whether you’re launching something new or leveling up what already exists, we tailor our approach to fit your goals, style, and audience.',
};

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | Velra</title>
        <meta
          name="description"
          content="Explore our creative services — from branding and design to web development and digital marketing. Custom solutions built for your brand’s success."
        />
      </Head>

      <div>
        {/* Hero Section */}
        <HeroSection
          background={servicesHero.background}
          eyebrow={servicesHero.eyebrow}
          heading={servicesHero.heading}
          subtext={servicesHero.subtext}
        />

        {/* Services Section */}
        <ServicesSection />

        {/* Retainer Packages */}
        <RetainerPackages />

        {/* Client Logos or Testimonials */}
        <Client />

        {/* Call To Action */}
        <CTASection />
      </div>
    </>
  );
};

export default Services;