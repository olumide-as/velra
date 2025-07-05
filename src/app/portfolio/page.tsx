import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Web Design Portfolio in Derby | Velra Creative Agency",
  description:
    "Explore Velra’s Derby-based web design and branding portfolio showcasing projects that help local businesses grow through strategic creativity, user-focused design, and innovative digital solutions. See how we transform brands across Derby and Derbyshire with impactful websites and branding.",
  keywords: [
    "web design Derby",
    "Derby web design portfolio",
    "branding Derby",
    "creative agency Derby",
    "digital design Derbyshire",
    "website projects Derby",
    "Derby branding agency"
  ],
  alternates: {
    canonical: "https://velra.co.uk/portfolio",
  },
  openGraph: {
    title: "Web Design Portfolio in Derby | Velra Creative Agency",
    description:
      "Explore Velra’s Derby-based portfolio of web design and branding projects. We help Derby and Derbyshire businesses grow with standout creative solutions and effective digital design.",
    url: "https://velra.co.uk/portfolio",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Velra Web Design Portfolio Derby Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Portfolio in Derby | Velra Creative Agency",
    description:
      "Browse Velra’s portfolio of Derby web design and branding projects. Helping local businesses grow with smart, creative digital solutions.",
    images: ["/assets/meta-image.png"],
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}