// src/app/web-design-derby/page.tsx
import type { Metadata } from "next";
import DerbyPage from "./DerbyPage";

export const metadata: Metadata = {
  title: "Web Design in Derby & Derbyshire | Velra Agency",
  description:
    "Affordable, creative web design services for businesses in Derby and Derbyshire. Velra builds modern websites that turn visitors into customers.",
  keywords: [
    "web design derby",
    "web design derbyshire",
    "web design agency derby",
    "Derbyshire website design",
    "affordable web design derby",
    "branding derby",
    "digital marketing derbyshire",
    "small business websites derby",
    "Derby web development",
    "local website designer derby"
  ],
  alternates: {
    canonical: "https://velra.co.uk/web-design-derby",
  },
  openGraph: {
    title: "Web Design in Derby & Derbyshire | Velra",
    description:
      "Affordable, creative web design services for businesses in Derby and Derbyshire. Velra builds modern websites that turn visitors into customers.",
    url: "https://velra.co.uk/web-design-derby",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Velra web design Derby preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Derby & Derbyshire | Velra",
    description:
      "Affordable, creative web design services for businesses in Derby and Derbyshire. Velra builds modern websites that turn visitors into customers.",
    images: ["/assets/meta-image.png"],
  },
};

export default function Page() {
  return <DerbyPage />;
}