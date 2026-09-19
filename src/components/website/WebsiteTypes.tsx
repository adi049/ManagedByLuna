import React, { useState } from 'react';
import { Reveal } from '../Reveal';
import { WEBSITE_TYPES } from '../../data/site';
import { TypeGlyph } from './TypeGlyph';
import { soundEngine } from '../../utils/audio';

interface WebsiteTypesProps {
  onOpenProject: () => void;
}

/** Compact editorial rows — expand subtly on hover, reveal a small wireframe preview. */
export const WebsiteTypes: React.FC<WebsiteTypesProps> = ({ onOpenProject }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="website-types" className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            What we build
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-12 md:mb-16">
            <span className="block text-neutral-300">EVERY BRAND NEEDS</span>
            <span className="block metallic-silver-text">A DIFFERENT KIND OF SITE.</span>
          </h2>
        </Reveal>

        <div className="border-t border-white/[0.07]">
          {WEBSITE_TYPES.map((t, i) => {
            const isActive = active === t.id;
            return (
              <Reveal key={t.id} delay={i * 45}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(t.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(t.id)}
                  onBlur={() => setActive(null)}
                  onClick={() => {
                    soundEngine.playChime();
                    onOpenProject();
                  }}
                  className="group relative w-full text-left border-b border-white/[0.07] overflow-hidden"
                >
                  {/* hover background glow */}
                  <span
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      background:
                        'linear-gradient(90deg, rgba(76,29,149,0.16) 0%, rgba(136,19,55,0.10) 45%, transparent 85%)',
                    }}
                  />
                  {/* traveling red/purple line */}
                  <span
                    className="absolute left-0 bottom-0 h-px bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400/70 transition-all duration-700"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />

                  <div
                    className="relative grid grid-cols-12 gap-3 md:gap-6 items-center transition-all duration-500"
                    style={{ paddingTop: isActive ? 30 : 22, paddingBottom: isActive ? 30 : 22 }}
                  >
                    <span className="col-span-2 sm:col-span-1 text-[11px] font-cinzel tracking-[0.2em] text-neutral-500 group-hover:text-amber-400 transition-colors">
                      {t.id}
                    </span>

                    <div className="col-span-10 sm:col-span-5">
                      <h3
                        className="text-base sm:text-lg md:text-xl font-cinzel font-semibold tracking-[0.1em] text-white transition-transform duration-500"
                        style={{ transform: isActive ? 'translateX(6px)' : 'translateX(0)' }}
                      >
                        {t.title}
                      </h3>
                    </div>

                    <p className="col-span-12 sm:col-span-4 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed pl-[calc(16.666%)] sm:pl-0">
                      {t.desc}
                    </p>

                    {/* preview + cta */}
                    <div className="hidden sm:flex col-span-2 items-center justify-end gap-4">
                      <span
                        className="w-16 h-11 shrink-0 transition-all duration-500"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0) scale(1)' : 'translateX(10px) scale(0.96)',
                        }}
                        aria-hidden
                      >
                        <TypeGlyph kind={t.glyph} />
                      </span>
                      <span className="text-[9px] tracking-[0.2em] uppercase font-cinzel text-neutral-500 group-hover:text-amber-300 whitespace-nowrap transition-colors">
                        VIEW DETAILS →
                      </span>
                    </div>

                    <span className="sm:hidden col-span-12 pl-[16.666%] text-[9px] tracking-[0.2em] uppercase font-cinzel text-neutral-500">
                      VIEW DETAILS →
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
