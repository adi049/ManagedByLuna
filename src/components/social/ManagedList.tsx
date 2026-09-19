import React, { useState } from 'react';
import { Reveal } from '../Reveal';
import { MANAGED_SERVICES } from '../../data/social';

/** Typography-based editorial list — no square cards. */
export const ManagedList: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            What we manage
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-12 md:mb-16">
            <span className="block text-neutral-300">YOUR SOCIAL MEDIA.</span>
            <span className="block metallic-silver-text">FULLY MANAGED.</span>
          </h2>
        </Reveal>

        <div className="border-t border-white/[0.07]">
          {MANAGED_SERVICES.map((item, i) => {
            const isActive = active === i;
            return (
              <Reveal key={item} delay={(i % 9) * 35}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group relative w-full text-left border-b border-white/[0.07] overflow-hidden"
                >
                  <span
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      background:
                        'linear-gradient(90deg, rgba(136,19,55,0.14) 0%, rgba(76,29,149,0.10) 50%, transparent 90%)',
                    }}
                  />
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-500 to-purple-500 transition-all duration-500"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'scaleY(1)' : 'scaleY(0.2)' }}
                  />
                  <div className="relative flex items-center gap-4 sm:gap-6 px-2 sm:px-4 py-4 md:py-5">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-600 w-7 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="flex-1 text-sm sm:text-lg md:text-xl font-cinzel tracking-[0.12em] transition-all duration-500"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(220,220,230,0.7)',
                        transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                      }}
                    >
                      {item}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.22em] uppercase font-cinzel transition-all duration-500 shrink-0"
                      style={{
                        color: isActive ? 'rgba(212,175,120,0.9)' : 'rgba(120,120,130,0)',
                        transform: isActive ? 'translateX(0)' : 'translateX(10px)',
                      }}
                    >
                      managed
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
