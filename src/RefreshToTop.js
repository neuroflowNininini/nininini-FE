import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RefreshToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('scrollbar').scrollTo(0, '100px');
  }, [pathname]);

  return null;
}
