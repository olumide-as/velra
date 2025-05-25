// components/GoogleAnalytics.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtag from '@/lib/gtag';

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    gtag.pageview(pathname);
  }, [pathname]);

  return null; // This component does not render anything visible
};

export default GoogleAnalytics;