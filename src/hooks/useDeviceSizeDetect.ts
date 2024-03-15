import { useState, useEffect } from 'react';
import { deviceSizes } from '~/styles/breakpoints';

export const useDeviceSizeDetect = (size: keyof typeof deviceSizes = 'md') => {
  const [withinTargetSize, setWithinTargetSize] = useState(window.innerWidth < deviceSizes[size]);

  useEffect(() => {
    const detectBrowserSize = () => {
      if (window.innerWidth < deviceSizes[size]) {
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
