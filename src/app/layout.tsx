// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomScroller from "@/components/BottomScroller";
import CustomCursor from "@/components/CustomCursor";
import BackTop from "antd/es/float-button/BackTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://velra.co.uk"),
  title: "Web Design Derby & Derbyshire | Velra Agency",
  description:
    "Creative and affordable web design in Derby and Derbyshire. Velra helps startups and small businesses build standout websites from just £350.",
  keywords: [
    "web design Derby",
    "web design Derbyshire",
    "website designer Derby",
    "website designer Derbyshire",
    "Derby web agency",
    "Derbyshire web agency",
    "affordable web design Derby",
    "affordable web design Derbyshire",
    "creative agency Derby",
    "Derbyshire small business websites",
    "Velra Derby",
    "Velra Derbyshire",
    "startup websites Derby",
    "startup websites Derbyshire"
  ],
  openGraph: {
    title: "Web Design Derby & Derbyshire | Velra Agency",
    description: "Affordable web design in Derby and Derbyshire starting from £350. Velra builds modern websites for startups and small businesses.",
    url: "https://velra.co.uk",
    siteName: "Velra Agency",
    images: [
      {
        url: "/assets/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Velra branding preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Derby & Derbyshire | Velra Agency",
    description: "Affordable web design in Derby and Derbyshire starting from £350. Velra builds modern websites for startups and small businesses.",
    images: ["/assets/meta-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1Z3NM07RG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y1Z3NM07RG');
    `,
          }}
        />
        <meta name="theme-color" content="#DC143C" />
        <Script
        id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Velra Agency",
              "legalName": "Velra Agency Limited",
              "url": "https://velra.co.uk",
              "image": "https://velra.co.uk/assets/meta-image.png",
              "logo": "https://velra.co.uk/assets/meta-image.png",
              "description": "Velra is a creative web design agency in Derby and Derbyshire helping small businesses and startups build standout brands and high-converting websites.",
              "telephone": "+44 1332 890644",
              "email": "hello@velra.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Derby Virtual Address",
                "addressLocality": "Derby",
                "addressRegion": "Derbyshire",
                "postalCode": "DE1 2XX",
                "addressCountry": "GB"
              },
              "areaServed": [
                { "@type": "Place", "name": "Derby" },
                { "@type": "Place", "name": "Chesterfield" },
                { "@type": "Place", "name": "Ilkeston" },
                { "@type": "Place", "name": "Ripley" },
                { "@type": "Place", "name": "Matlock" },
                { "@type": "Place", "name": "Ashbourne" },
                { "@type": "Place", "name": "Swadlincote" },
                { "@type": "Place", "name": "Alfreton" },
                { "@type": "Place", "name": "Belper" },
                { "@type": "Place", "name": "Heanor" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.9225",
                "longitude": "-1.4746"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://uk.trustpilot.com/review/velra.co.uk",
                "https://www.linkedin.com/company/velra",
                "https://www.instagram.com/velra.agency/"
              ],
              "foundingDate": "2020-05-20"
            }),
          }}
        />
      </head>
      <body className="scroll-smooth bg-[#040404]">
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
        <CustomCursor />
        <BottomScroller />
        <BackTop />
        <Toaster position="top-right" reverseOrder={false} />
        <CookieConsent />
      </body>
    </html>
  );
}