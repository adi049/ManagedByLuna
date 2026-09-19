import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

interface ContactIntroProps {
  onScrollToForm: () => void;
}

export const ContactIntro: React.FC<ContactIntroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Central deep purple and crimson atmospheric glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[440px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(136,19,55,0.16) 45%, transparent 72%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal duration={1100} y={24}>
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-gradient-to-r from-purple-400/80 to-transparent" />
            <p className="text-[10px] tracking-[0.45em] uppercase font-cinzel text-neutral-500">
              Direct Channel · Managed By Luna
            </p>
          </div>
        </Reveal>

        <Reveal duration={1300} y={44} blur>
          <h1 className="font-cinzel font-bold tracking-[0.04em] leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-neutral-300">LET&apos;S BUILD</span>
            <span className="block metallic-silver-text my-1 md:my-2">SOMETHING</span>
            <span className="block metallic-champagne-silver">WORTH REMEMBERING.</span>
          </h1>
        </Reveal>

        <Reveal delay={300} duration={1000}>
          <div className="mt-8 md:mt-10 max-w-xl space-y-3">
            <p className="text-base sm:text-lg font-cinzel tracking-[0.06em] text-neutral-300 leading-snug">
              Have a website idea?
              <br />
              Need your social media handled?
              <br />
              Launching something new?
            </p>
            <p className="text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed pt-1">
              Tell us what you&apos;re working on. We&apos;ll take it from there.
            </p>
          </div>
        </Reveal>

        <Reveal delay={440} duration={1000}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                soundEngine.playChime();
                onScrollToForm();
              }}
              className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="relative z-10">START A CONVERSATION</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playChime();
                onScrollToForm();
              }}
              className="p-3 rounded-full border border-white/10 hover:border-white/25 text-neutral-400 hover:text-white transition-colors"
              aria-label="Scroll to form"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
