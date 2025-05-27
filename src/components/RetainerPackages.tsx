'use client';

import React from "react";
import { motion } from "framer-motion";

interface Package {
  title: string;
  subtitle: string;
  features: string[];
  note: string;
  recommended?: boolean;
}

const packages: Package[] = [
  {
    title: "🌱 Starter Spark",
    subtitle:
      "Perfect for startups, solopreneurs, or anyone who needs just enough creative firepower each month.",
    features: [
      "🔸 5 hours/week (20 hours/month)",
      "🔸 Branding, social, or design support",
      "🔸 Monthly strategy check-in",
      "🔸 Priority response times",
      "🔸 Access to Velra’s creative toolkit",
    ],
    note: "💸 Budget-friendly, big on impact.",
  },
  {
    title: "🔥 Growth Glow-Up",
    subtitle:
      "Perfect for small to mid-size teams who want to scale their brand game without hiring a full creative department.",
    features: [
      "🔸 10–15 hours/week (40–60 hours/month)",
      "🔸 Full-service creative access: design, web, content, digital",
      "🔸 Bi-weekly planning calls",
      "🔸 Real-time dashboard + status updates",
      "🔸 Creative concepting & campaign support",
    ],
    note: "🚀 Your brand’s personal glow-up team.",
    recommended: true,
  },
  {
    title: "💼 The Whole Vibe",
    subtitle:
      "Perfect for brands in growth mode who want full-scale, plug-in creative support across the board.",
    features: [
      "🔸 20+ hours/week (80+ hours/month)",
      "🔸 Everything Velra offers: branding, web, strategy, content, ads & more",
      "🔸 Weekly creative syncs + ongoing campaign planning",
      "🔸 Priority scheduling, early previews, dedicated PM",
      "🔸 24/7 Slack-style comms (yes, really)",
    ],
    note: "👑 It’s like having a full creative squad without building one.",
  },
];

const RetainerPackages: React.FC = () => {
  return (
    <section
      className="bg-white text-black py-20"
      style={{
        backgroundImage: `url('/assets/retainersbg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase text-[#DC143C] mb-3">Retainer Packages</h2>
          <h3 className="text-2xl md:text-3xl mb-12 text-[#040404] inline-block border-b-2 border-[#DC143C] pb-1">
            Your Creative Dream Team
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {packages.map(({ title, subtitle, features, note, recommended }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-[#0a0a0a] border-b-4 border-[#DC143C] rounded-xl p-6 md:p-12 shadow-xl flex flex-col justify-between transition ${
                recommended ? "lg:scale-105 z-10" : "lg:scale-100"
              } flex-1`}
            >
              {recommended && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DC143C] to-[#570516] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  Popular Choice
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-2 md:pb-6">{title}</h3>
                <p className="text-sm text-gray-300 mb-4">{subtitle}</p>
                <ul className="text-sm space-y-2 mb-4 text-gray-300">
                  {features.map((feature, i) => (
                    <li key={i} className="pb-2 border-b border-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[#DC143C] font-medium text-sm">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetainerPackages;