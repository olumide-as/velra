'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent');
    if (stored) setConsent(stored === 'true');
    setHasMounted(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setConsent(true);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setConsent(false);
  };

  // Wait until after first mount to avoid flash
  if (!hasMounted || consent !== null) return null;

  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center">
      <div className="bg-[#040404] border border-[#DC143C] rounded-xl p-8 max-w-lg w-full text-center shadow-lg space-y-6">
        <p className="text-white text-sm md:text-base leading-relaxed">
          We use cookies to enhance your experience, analyze site usage, and offer tailored content. Click “Accept” to allow cookies or “Decline” to opt out of non-essential ones.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={decline}
            className="px-6 py-2 rounded-full border border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#DC143C] to-[#570516] text-white hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}