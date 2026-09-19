import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, RotateCcw, Volume2, VolumeX, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { OfficialBrandLogo } from './OfficialBrandLogo';
import { soundEngine } from '../utils/audio';
import { NAV_ITEMS } from '../data/site';
import { useAppNavigate } from '../hooks/useAppNavigate';

interface NavigationProps {
  onReplayIntro: () => void;
  onOpenSchedule: () => void;
  onOpenProject: () => void;
  logoRef?: React.RefObject<HTMLDivElement | null>;
}

export const Navigation: React.FC<NavigationProps> = ({
  onReplayIntro,
  onOpenSchedule,
  onOpenProject,
  logoRef,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(soundEngine.isMuted === false);
  const location = useLocation();
  const go = useAppNavigate();

  const handleAudioToggle = () => {
    const state = soundEngine.toggleMute();
    setIsAudioActive(state);
  };

  // Close mobile menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent the page behind the full-screen mobile menu from scrolling.
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const isActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.label === 'HOME') return location.pathname === '/';
    if (item.label === 'ABOUT') return location.pathname === '/about';
    if (item.label === 'SERVICES') return location.pathname === '/services';
    if (item.label === 'WEBSITE SERVICES') return location.pathname === '/website-services';
    if (item.label === 'SOCIAL MEDIA') return location.pathname === '/social-media';
    if (item.label === 'CONTACT') return location.pathname === '/contact';
    return false;
  };

  const handleNavClick = (item: (typeof NAV_ITEMS)[number]) => {
    setMobileMenuOpen(false);
    go(item.path, item.scrollTo);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 md:px-8 py-3 sm:py-4 transition-all duration-500">
        <div className="max-w-[90rem] mx-auto">
          <nav className="relative flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#07050d]/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] subtle-purple-glow">
            <div ref={logoRef} className="flex items-center shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  go('/');
                }}
                className="group"
                aria-label="Managed By Luna Home"
              >
                <OfficialBrandLogo variant="header" />
              </button>
            </div>

            <div className="hidden xl:flex items-center gap-3 2xl:gap-5 mx-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-[10px] 2xl:text-[11px] font-cinzel font-medium tracking-[0.14em] 2xl:tracking-[0.18em] transition-colors duration-300 py-1 whitespace-nowrap ${
                    isActive(item) ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive(item) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-400/80 via-purple-400 to-amber-400/80 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handleAudioToggle}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.05] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-400/80 outline-none"
                title={isAudioActive ? 'Mute Audio' : 'Enable Ambient Sound'}
                aria-label={isAudioActive ? 'Mute cinematic ambient audio' : 'Enable cinematic ambient audio'}
              >
                {isAudioActive ? (
                  <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => {
                  soundEngine.playChime();
                  onReplayIntro();
                }}
                className="hidden md:flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-[9px] tracking-[0.16em] font-cinzel text-neutral-300 hover:text-white transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-amber-400/80 outline-none"
                title="Replay Cinematic Intro"
                aria-label="Replay Cinematic Intro Animation"
              >
                <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform duration-500 text-amber-400" />
                <span className="hidden lg:inline">Replay</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenSchedule();
                }}
                className="relative group overflow-hidden hidden sm:flex min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-900/70 via-red-950/70 to-purple-950/70 border border-purple-500/40 hover:border-amber-400/60 text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.18em] sm:tracking-[0.22em] text-white shadow-[0_0_20px_rgba(109,40,217,0.25)] hover:shadow-[0_0_25px_rgba(202,166,105,0.35)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-400/80 outline-none"
                aria-label="Schedule a Strategic Call"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>SCHEDULE A CALL</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-amber-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all focus-visible:ring-2 focus-visible:ring-amber-400/80 outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#030206]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 pb-8 overflow-y-auto xl:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 border-b border-white/[0.05] pb-2">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-left text-lg font-cinzel tracking-[0.18em] py-2 transition-colors flex items-center justify-between ${
                  isActive(item) ? 'text-amber-400 font-semibold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-amber-400/60" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProject();
              }}
              className="w-full py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-cinzel tracking-[0.25em] text-white flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>START A PROJECT</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-900 via-rose-950 to-purple-950 border border-purple-500/40 text-xs font-cinzel tracking-[0.25em] text-white flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>SCHEDULE A CALL</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full py-2.5 text-[11px] font-cinzel tracking-[0.25em] text-neutral-400 hover:text-neutral-200 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3 h-3 text-amber-400" />
              <span>Replay Cinematic Opening</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
