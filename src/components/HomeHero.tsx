import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Sparkles, Calendar } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HomeHeroProps {
  onOpenSchedule: () => void;
  onOpenProject: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onOpenSchedule,
  onOpenProject,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const visualContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    soundEngine.playChime();
    const exploreEl = document.getElementById('who-is-luna');
    if (exploreEl) {
      exploreEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start subtle-purple-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-cinzel text-neutral-300 uppercase">
                IDEAS &bull; STRATEGY &bull; GROWTH
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-cinzel font-bold tracking-[0.04em] sm:tracking-[0.06em] leading-[1.12] sm:leading-[1.08] text-white">
                <span className="block text-neutral-300">WE BUILD</span>
                <span className="block metallic-silver-text drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
                  DIGITAL PRESENCE
                </span>
                <span className="block metallic-champagne-silver">
                  THAT GETS NOTICED.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-cormorant text-neutral-300/90 leading-relaxed max-w-xl font-light italic tracking-wide">
              Premium websites, creative content and digital growth &mdash;{' '}
              <span className="text-neutral-100 font-normal not-italic">
                managed under one roof.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenProject();
                }}
                className="relative group overflow-hidden min-h-[48px] px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400 outline-none"
                aria-label="Start a Project with Managed By Luna"
              >
                <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">START A PROJECT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-amber-500/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenSchedule();
                }}
                className="min-h-[48px] px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-cinzel font-medium tracking-[0.22em] text-neutral-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400 outline-none"
                aria-label="Schedule a Consultation Call with Managed By Luna"
              >
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>SCHEDULE A CALL</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={handleExploreClick}
                className="group inline-flex items-center gap-2 text-xs font-cinzel tracking-[0.26em] text-neutral-400 hover:text-amber-400 transition-colors duration-300"
              >
                <span>SCROLL TO EXPLORE</span>
                <div className="w-6 h-6 rounded-full border border-white/10 group-hover:border-amber-400/50 flex items-center justify-center transition-colors">
                  <ArrowDown className="w-3 h-3 text-neutral-400 group-hover:text-amber-400 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div
              ref={visualContainerRef}
              className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] aspect-square flex items-center justify-center select-none"
              style={{
                perspective: '1000px',
              }}
            >
              <div
                className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
                style={{
                  transform: `rotateY(${mouseOffset.x * 12}deg) rotateX(${-mouseOffset.y * 12}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />
                <div className="absolute inset-4 rounded-full bg-rose-950/20 blur-2xl pointer-events-none" />
                <div className="absolute -inset-4 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="185"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    className="animate-spin"
                    style={{ animationDuration: '60s' }}
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="195"
                    ry="95"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1.2"
                    transform="rotate(-25 200 200)"
                    strokeDasharray="2 6"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="175"
                    ry="75"
                    stroke="rgba(202, 166, 105, 0.25)"
                    strokeWidth="1"
                    transform="rotate(40 200 200)"
                  />
                  <defs>
                    <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="relative w-[82%] h-[82%] rounded-full p-2 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white/10 backdrop-blur-[2px] shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]" />
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.95)]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/luna_hero_artifact.png`}
                      alt="Managed By Luna digital presence abstract lunar sculpture"
                      width={400}
                      height={400}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover scale-105 filter contrast-110 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none transition-transform duration-700"
                      style={{
                        transform: `translate(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px)`,
                      }}
                    />
                  </div>
                  <div
                    className="absolute top-10 right-10 pointer-events-none"
                    style={{
                      transform: `translate(${mouseOffset.x * -10}px, ${mouseOffset.y * -10}px)`,
                    }}
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                      <div className="h-full w-[1.5px] bg-gradient-to-b from-transparent via-amber-300 to-transparent absolute" />
                      <div className="w-2 h-2 rounded-full bg-white blur-[1px] absolute" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg bg-[#07050d]/80 border border-white/10 backdrop-blur-md shadow-lg pointer-events-none">
                  <div className="text-[8px] font-mono tracking-widest text-neutral-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYS &bull; ARCHITECTURE READY</span>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[#07050d]/80 border border-white/10 backdrop-blur-md shadow-lg pointer-events-none">
                  <div className="text-[8px] font-mono tracking-widest text-neutral-400">
                    PRECISION CREATIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
