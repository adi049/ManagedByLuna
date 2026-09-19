import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useAppNavigate } from '../hooks/useAppNavigate';
import { Reveal } from '../components/Reveal';
import { soundEngine } from '../utils/audio';

export const NotFoundPage: React.FC = () => {
  const go = useAppNavigate();

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">
      {/* Background radial atmosphere */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(136,19,55,0.18) 45%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-xl mx-auto text-center relative z-10">
        <Reveal>
          <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-neutral-500 mb-4 block">
            404 &bull; Orbit Lost
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-[0.06em] text-white leading-tight">
            <span className="block text-neutral-300">LOST IN</span>
            <span className="block metallic-silver-text my-1">THE LUNA?</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-md mx-auto leading-relaxed">
            Looks like this page disappeared into space.
          </p>
          <p className="mt-2 text-xs text-neutral-500 font-sans">
            The coordinates you requested are outside the mapped Luna matrix.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundEngine.playChime();
                go('/');
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-amber-400" />
              <span>BACK HOME</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playChime();
                window.history.back();
              }}
              className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-cinzel font-medium tracking-[0.22em] text-neutral-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-400" />
              <span>PREVIOUS PAGE</span>
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
