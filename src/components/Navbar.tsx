"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  hoverText: string;
  href: string;
  submenu?: SubmenuItem[];
}

export const menuItems: MenuItem[] = [
  { label: "Home", hoverText: "Get an overview", href: "../" },
  { label: "About", hoverText: "Know us better", href: "../about" },
  {
    label: "Services",
    hoverText: "See what we offer",
    href: "../services",
    submenu: [
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Design", href: "/services/design" },
      { label: "Web Development", href: "/services/web" },
      { label: "Social and Digital Marketing", href: "/services/marketing" },
    ],
  },
  { label: "Portfolio", hoverText: "See our work", href: "../portfolio" },
  { label: "Contact", hoverText: "Let's get started", href: "../contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] =
    useState<boolean>(false); // desktop dropdown toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-8 z-40 text-white transition-all duration-300 ${
          scrolled ? "bg-[#040404]" : "bg-transparent"
        }`}
      >
        <Link href="../">
          <Image
            src="/assets/velra.svg"
            alt="Velra Logo"
            className="h-8 w-auto"
            width={350}
            height={200}
          />
        </Link>

        {/* Desktop Logo */}

        <div className="flex items-center space-x-6">
          {/* Menu Items (Desktop Only) */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium relative ">
            {menuItems.map((item) =>
              item.submenu ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="hover:text-[#DC143C] transition-colors duration-300 flex items-center cursor-pointer"
                  >
                    {item.label}
                    <svg
                      className="ml-1 w-3 h-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548l4.484 4.636 4.484-4.636L15.7 9.2 10 15 4.3 9.2z" />
                    </svg>
                  </a>

                  <ul
                    className={`absolute top-full left-0 mt-0 w-40 bg-[#040404] rounded-md shadow-lg py-2 z-50 ${
                      servicesDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-sm hover:bg-[#DC143C] hover:text-white transition-colors"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#DC143C] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Hamburger Button */}
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="z-50"
              aria-label="Open Menu"
            >
              <Bars3Icon className="h-8 w-8 text-white" />
            </button>
          )}
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#040404] text-white z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 md:top-10 md:right-10 z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>

        <div className="h-full w-full flex flex-col md:flex-row justify-center items-center p-8 md:p-20 overflow-y-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 text-3xl md:text-5xl font-light text-center md:text-left">
            {menuItems.map((item) => {
              const index = menuItems.findIndex((i) => i.label === item.label);
              return item.submenu ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => {
                      setHoveredIndex(index === hoveredIndex ? null : index);
                    }}
                    className="flex justify-center md:justify-start items-center w-full hover:text-[#DC143C] transition-colors duration-300"
                  >
                    <span>
                      {hoveredIndex === index ? item.hoverText : item.label}
                    </span>
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform ${
                        hoveredIndex === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Submenu */}
                  {hoveredIndex === index && (
                    <div className="mt-4 space-y-4 ml-4 text-[1.2rem] font-light">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block hover:text-[#DC143C] transition-colors duration-300"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition-all duration-300 hover:text-[#DC143C] relative"
                >
                  <span className="block transition-opacity duration-300">
                    {hoveredIndex === index ? item.hoverText : item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-0 text-base md:text-lg space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#DC143C] border-b border-[#DC143C] inline-block pb-1">
              Careers
            </h2>
            <p>careers@madebyvelra.com</p>
            <p>+44 203 432 2577</p>

            <div className="flex justify-center md:justify-start space-x-6 mt-4 text-[#DC143C] text-2xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;