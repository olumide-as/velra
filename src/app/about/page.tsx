// src/app/about/page.tsx
import type { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "About Us | Velra Agency – Derby Web Design, Branding & Digital Strategy",
  description:
    "Learn about Velra, a creative agency based in Derby specializing in web design, branding, and digital marketing. We partner with Derby and Derbyshire businesses to build impactful, growth-driven brands and websites.",
  keywords: [
    "about Velra Derby",
    "Derby web design agency",
    "branding agency Derbyshire",
    "digital marketing Derby",
    "creative agency Derby",
    "Derbyshire branding and web design",
    "Velra agency about page"
  ],
  alternates: {
    canonical: "https://velra.co.uk/about",
  },
  openGraph: {
    title: "About Us | Velra Agency – Derby Web Design, Branding & Digital Strategy",
    description:
      "Learn about Velra, a creative agency based in Derby specializing in web design, branding, and digital marketing. We partner with Derby and Derbyshire businesses to build impactful, growth-driven brands and websites.",
    url: "https://velra.co.uk/about",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Velra Agency About Us Derby",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Velra Agency – Derby Web Design, Branding & Digital Strategy",
    description:
      "Learn about Velra, a creative agency based in Derby specializing in web design, branding, and digital marketing. We partner with Derby and Derbyshire businesses to build impactful, growth-driven brands and websites.",
    images: ["/assets/meta-image.png"],
  },
};

export default function AboutPage() {
  return <About />;
}