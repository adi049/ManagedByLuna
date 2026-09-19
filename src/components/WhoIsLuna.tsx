import React from 'react';
import { Reveal } from './Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';

const HIGHLIGHTS = ['DESIGN', 'DEVELOPMENT', 'STRATEGY', 'CONTENT', 'GROWTH'];

export const WhoIsLuna: React.FC = () => {
  const go = useAppNavigate();

  return (
    <section id="who-is-luna" className="relative z-10 py-24 md:py-32 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
                Who is Luna?
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12]">
                <span className="block text-neutral-300">NOT JUST A</span>
                <span className="block metallic-silver-text">DIGITAL AGENCY.</span>
                <span className="block metallic-champagne-silver mt-2">A CREATIVE SYSTEM.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-base sm:text-lg font-cormorant text-neutral-400 leading-relaxed max-w-xl">
                Managed By Luna brings together design, development, strategy, content and digital marketing
                to help businesses create a stronger and more consistent online presence.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <button
                onClick={() => go('/about')}
                className="mt-8 group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.28em] text-neutral-300 hover:text-white transition-colors"
              >
                <span>MEET THE TEAM</span>
                <span className="w-8 h-px bg-gradient-to-r from-amber-400/80 to-transparent group-hover:w-14 transition-all duration-500" />
              </button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <div className="relative p-1">
                <div className="absolute -inset-4 bg-purple-900/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex flex-wrap gap-3">
                  {HIGHLIGHTS.map((word, i) => (
                    <span
                      key={word}
                      className="px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-[11px] font-cinzel tracking-[0.22em] text-neutral-200 hover:border-purple-400/40 hover:text-white transition-all duration-300"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-[10px] tracking-[0.28em] uppercase font-cinzel text-neutral-600">
                  One identity. Multiple strengths.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
