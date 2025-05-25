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
  title: "Velra — Branding, Web Design & Strategy Studio",
  description: "Creative agency crafting bold branding, standout design, engaging websites, and smart digital marketing for modern startups and growing brands.",
    openGraph: {
    title: "Velra — Branding, Web Design & Strategy Studio",
    description: "Creative branding, design, and digital growth made bold.",
    url: "https://madebyvelra.com",
    siteName: "Velra",
    images: [
      {
        url: "/assets/meta-image.png", // ✅ Put this image in /public/assets/
        width: 1200,
        height: 630,
        alt: "Velra branding preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velra — Branding, Web Design & Strategy Studio",
    description: "Creative branding, design, and digital growth made bold.",
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
      </head>
      <body className="scroll-smooth bg-[#040404]">
        <GoogleAnalytics />
        <Navbar />
        {children} {/* This is where your route content will be rendered */}
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
