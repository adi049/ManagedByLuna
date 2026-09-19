import React from 'react';
import { Sparkles } from 'lucide-react';
import { Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

interface SocialIntroProps {
  onOpenProject: () => void;
}

export const SocialIntro: React.FC<SocialIntroProps> = ({ onOpenProject }) => {
  return (
    <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(136,19,55,0.20) 0%, rgba(76,29,149,0.14) 45%, transparent 72%)',
          filter: 'blur(85px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal duration={1100} y={24}>
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-gradient-to-r from-rose-400/80 to-transparent" />
            <p className="text-[10px] tracking-[0.45em] uppercase font-cinzel text-neutral-500">
              Social Media Management
            </p>
          </div>
        </Reveal>

        <Reveal duration={1300} y={44} blur>
          <h1 className="font-cinzel font-bold tracking-[0.04em] leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-neutral-300">YOU CREATE.</span>
            <span className="block metallic-silver-text my-1 md:my-2">WE HANDLE</span>
            <span className="block metallic-champagne-silver">THE REST.</span>
          </h1>
        </Reveal>

        <Reveal delay={300} duration={1000}>
          <div className="mt-9 space-y-1 max-w-xl">
            <p className="text-base sm:text-lg font-cinzel tracking-[0.06em] text-neutral-200">
              Your business keeps moving.
              <br />
              Your digital presence should too.
            </p>
            <p className="text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed pt-2">
              Managed By Luna handles the planning, creation, editing, publishing and digital
              management behind your social presence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={420} duration={1000}>
          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenProject();
            }}
            className="mt-10 relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-950/80 via-purple-900/70 to-rose-950/80 border border-rose-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(136,19,55,0.32)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="relative z-10">LET&apos;S GROW YOUR BRAND</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};
