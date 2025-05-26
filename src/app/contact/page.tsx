// src/app/contact/page.tsx
import type { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact Us | Velra",
  description:
    "Let’s talk ideas! Reach out to Velra for branding, design, web, or digital marketing support. Start your creative journey with us today.",
  alternates: {
    canonical: "https://madebyvelra.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}