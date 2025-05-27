import type { Metadata } from "next";
import Services from "./services";

export const metadata: Metadata = {
  title: "Our Services | Velra",
  description:
    "Explore our creative services — from branding and design to web development and digital marketing. Custom solutions built for your brand’s success.",
  alternates: {
    canonical: "https://velra.co.uk/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}