import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Our Work | Velra Agency",
  description:
    "Explore Velra’s portfolio of branding, design, and digital experiences. See how we’ve helped businesses grow with strategic creativity.",
  alternates: {
    canonical: "https://velra.co.uk/portfolio",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}