import { useState, useEffect } from 'react';
import { deviceSizes } from '~/styles/breakpoints';

export const useDeviceSizeDetect = (size: keyof typeof deviceSizes = 'md') => {
  const [withinTargetSize, setWithinTargetSize] = useState(
    Math.min(window.innerWidth, window.innerHeight) < deviceSizes[size],
  );

  useEffect(() => {
    const detectBrowserSize = () => {
      if (Math.min(window.innerWidth, window.innerHeight) < deviceSizes[size]) {
        setWithinTargetSize(true);
      } else {
        setWithinTargetSize(false);
      }
    };
    window.addEventListener('resize', detectBrowserSize);
    return () => window.removeEventListener('resize', detectBrowserSize);
  }, []);

  return [withinTargetSize];
};
