"use client";

import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverables = document.querySelectorAll<HTMLElement>("a, button, .cursor-hover");

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div
        className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-white transition-all duration-200 ease-out ${
          hovered ? "scale-150 bg-white/0 border border-white" : "scale-50"
        }`}
      />
    </div>
  );
};

export default CustomCursor;