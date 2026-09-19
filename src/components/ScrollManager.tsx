import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const id = state?.scrollTo;
    const timer = window.setTimeout(() => {
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state]);

  return null;
}
