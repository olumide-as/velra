'use client';
import React from 'react';

const BottomScroller: React.FC = () => {
  const content =
    'Branding                         Design                         Web Development                         Digital Marketing                         Strategy                         Content Creation                         Campaigns                         Social Media                         Creative Retainers                         Big Ideas, Always';

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#040404] overflow-hidden z-50">
      <div className="whitespace-nowrap animate-marquee text-white text-sm md:text-sm py-2">
        <span className="mx-8">{content}</span>
        <span className="mx-8">{content}</span>
      </div>
    </div>
  );
};

export default BottomScroller;