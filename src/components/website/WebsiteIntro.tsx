import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

interface WebsiteIntroProps {
  onOpenProject: () => void;
}

/**
 * Cinematic page opening.
 * Stage A: "WE DON'T / JUST BUILD / WEBSITES."
 * Stage B (after a short beat): "WE BUILD / DIGITAL EXPERIENCES."
 * The swap is a soft mask + blur cross-dissolve — no bounce, no zoom.
 */
export const WebsiteIntro: React.FC<WebsiteIntroProps> = ({ onOpenProject }) => {
  const [stage, setStage] = useState<0 | 1>(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const t = window.setTimeout(() => setStage(1), reduce ? 400 : 2600);
    return () => window.clearTimeout(t);
  }, []);

  const lineBase =
    'block font-cinzel font-bold tracking-[0.04em] leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl';

  return (
    <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* atmospheric bloom */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.20) 0%, rgba(136,19,55,0.13) 45%, transparent 72%)',
          filter: 'blur(85px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal duration={1100} y={24}>
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-gradient-to-r from-purple-400/80 to-transparent" />
            <p className="text-[10px] tracking-[0.45em] uppercase font-cinzel text-neutral-500">
              Website Services
            </p>
          </div>
        </Reveal>

        {/* Two-stage headline — fixed height so the swap doesn't shift layout */}
        <div className="relative min-h-[172px] sm:min-h-[210px] md:min-h-[260px] lg:min-h-[300px]">
          {/* Stage A */}
          <h1
            className="absolute inset-0"
            style={{
              opacity: stage === 0 ? 1 : 0,
              filter: stage === 0 ? 'blur(0px)' : 'blur(12px)',
              transform: stage === 0 ? 'translateY(0)' : 'translateY(-18px)',
              transition:
                'opacity 1100ms cubic-bezier(0.22,1,0.36,1), filter 1100ms cubic-bezier(0.22,1,0.36,1), transform 1100ms cubic-bezier(0.22,1,0.36,1)',
              pointerEvents: 'none',
            }}
          >
            {["WE DON'T", 'JUST BUILD', 'WEBSITES.'].map((line, i) => (
              <span
                key={line}
                className={`${lineBase} ${i === 2 ? 'text-neutral-500' : 'text-neutral-300'}`}
                style={{
                  opacity: stage === 0 ? 1 : 0,
                  transform: stage === 0 ? 'translateY(0)' : 'translateY(14px)',
                  transition: `opacity 900ms ease ${i * 130}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 130}ms`,
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Stage B */}
          <h1
            className="absolute inset-0"
            style={{
              opacity: stage === 1 ? 1 : 0,
              filter: stage === 1 ? 'blur(0px)' : 'blur(14px)',
              transform: stage === 1 ? 'translateY(0)' : 'translateY(22px)',
              transition:
                'opacity 1200ms cubic-bezier(0.22,1,0.36,1) 120ms, filter 1200ms cubic-bezier(0.22,1,0.36,1) 120ms, transform 1200ms cubic-bezier(0.22,1,0.36,1) 120ms',
            }}
            aria-hidden={stage === 0}
          >
            <span className={`${lineBase} text-neutral-300`}>WE BUILD</span>
            <span className={`${lineBase} metallic-silver-text mt-1`}>DIGITAL</span>
            <span className={`${lineBase} metallic-champagne-silver`}>EXPERIENCES.</span>
          </h1>
        </div>

        <Reveal delay={stage === 1 ? 0 : 600} duration={1000}>
          <p className="mt-8 max-w-xl text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed">
            Websites designed around your business, your identity and the way your audience should
            experience your brand.
          </p>
        </Reveal>

        <Reveal delay={200} duration={1000}>
          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenProject();
            }}
            className="mt-10 relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="relative z-10">START YOUR WEBSITE</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};
