import { useState, useEffect } from 'react';
import { deviceSizes } from '~/styles/breakpoints';

export const useDeviceSizeDetect = () => {
  const [isMobileSize, setIsMobileSize] = useState(
    Math.min(window.innerWidth, window.innerHeight) < deviceSizes.md,
  );
  useEffect(() => {
    const detectBrowserSize = () => {
      if (Math.min(window.innerWidth, window.innerHeight) < deviceSizes.md) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    };
    window.addEventListener('resize', detectBrowserSize);
    return () => window.removeEventListener('resize', detectBrowserSize);
  }, []);

  return { isMobileSize };
};
