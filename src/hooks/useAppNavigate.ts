import { useNavigate, useLocation } from 'react-router-dom';
import { soundEngine } from '../utils/audio';

export function useAppNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  return (path: string, scrollTo?: string) => {
    soundEngine.playChime();
    if (location.pathname === path && !scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname === path && scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate(path, { state: scrollTo ? { scrollTo } : undefined });
  };
}
