// src/app/about/page.tsx
import type { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "About Us | Velra",
  description:
    "Discover Velra: where strategy meets style. We help businesses grow through intentional branding, digital creativity, and collaborative partnerships.",
};

export default function AboutPage() {
  return <About />;
}