import { useState, useEffect } from 'react';
import { deviceSizes } from '~/styles/breakpoints';

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(
    Math.min(window.innerWidth, window.innerHeight) < deviceSizes.md ||
      navigator.userAgent.indexOf('Mobi') > -1,
  );
  useEffect(() => {
    const detectBrowserSize = () => {
      if (
        Math.min(window.innerWidth, window.innerHeight) < deviceSizes.md ||
        navigator.userAgent.indexOf('Mobi') > -1
      ) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', detectBrowserSize);
    return () => window.removeEventListener('resize', detectBrowserSize);
  }, []);

  return { isMobile };
};
