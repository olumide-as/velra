import type { Metadata } from "next";
import Services from "./services";

export const metadata: Metadata = {
  title: "Branding & Web Design Services in Derby & Derbyshire | Velra",
  description:
    "Velra offers expert creative services in Derby and Derbyshire including branding, web design, digital marketing, and content strategy. Tailored solutions for startups and small businesses to grow locally.",
  keywords: [
    "creative services Derby",
    "branding Derby",
    "web design Derbyshire",
    "digital marketing Derby",
    "Derby creative agency",
    "Derbyshire branding services",
    "small business marketing Derby",
    "website design Derby",
    "local SEO Derbyshire",
    "content strategy Derby"
  ],
  alternates: {
    canonical: "https://velra.co.uk/services",
  },
  openGraph: {
    title: "Branding & Web Design Services in Derby & Derbyshire | Velra",
    description:
      "Velra delivers creative branding, web design, and digital marketing services across Derby and Derbyshire, helping businesses build impactful local brands and websites.",
    url: "https://velra.co.uk/services",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Velra Creative Services Derby & Derbyshire",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Web Design Services in Derby & Derbyshire | Velra",
    description:
      "Expert branding, web design, and marketing services for Derby and Derbyshire businesses. Velra helps local startups and small teams grow with creative strategy and design.",
    images: ["/assets/meta-image.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}