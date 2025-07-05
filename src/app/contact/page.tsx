// src/app/contact/page.tsx
import type { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact Velra — Derby Web Design Agency | Branding & Digital Strategy",
  description:
    "Reach out to Velra, a trusted Derby and Derbyshire web design agency. We help local businesses grow with expert branding, website design, and digital marketing solutions tailored to your needs.",
  keywords: [
    "contact web design Derby",
    "Derby web designer contact",
    "Derbyshire branding agency",
    "digital marketing Derby",
    "web design consultation Derby",
    "branding services Derbyshire",
    "Velra contact",
    "web design agency Derbyshire"
  ],
  alternates: {
    canonical: "https://velra.co.uk/contact",
  },
  openGraph: {
    title: "Contact Velra — Derby Web Design Agency | Branding & Digital Strategy",
    description:
      "Reach out to Velra, a trusted Derby and Derbyshire web design agency. We help local businesses grow with expert branding, website design, and digital marketing solutions tailored to your needs.",
    url: "https://velra.co.uk/contact",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Velra Derby Web Design Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Velra — Derby Web Design Agency | Branding & Digital Strategy",
    description:
      "Reach out to Velra, a trusted Derby and Derbyshire web design agency. We help local businesses grow with expert branding, website design, and digital marketing solutions tailored to your needs.",
    images: ["/assets/meta-image.png"],
  },
};

export default function ContactPage() {
  return <Contact />;
}