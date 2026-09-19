import React from 'react';
import { Reveal } from '../Reveal';

/** Cinematic split-screen: left = the client's world, right = Luna's. */
export const CoreIdea: React.FC = () => {
  return (
    <section className="relative z-10 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — the client focuses on business */}
        <div className="relative min-h-[340px] md:min-h-[460px] flex flex-col justify-end p-8 md:p-14 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.07]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(80% 70% at 20% 90%, rgba(76,29,149,0.18) 0%, transparent 65%)',
            }}
          />
          {/* faint editorial mark */}
          <span className="absolute top-8 left-8 md:top-12 md:left-14 text-[10px] font-mono tracking-[0.3em] text-neutral-600">
            YOU
          </span>
          <Reveal>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.04em] leading-[1.05]">
              <span className="block text-neutral-300">YOU FOCUS</span>
              <span className="block metallic-silver-text">ON YOUR BUSINESS.</span>
            </h2>
          </Reveal>
        </div>

        {/* RIGHT — Luna focuses on presence */}
        <div className="relative min-h-[340px] md:min-h-[460px] flex flex-col justify-end p-8 md:p-14 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(80% 70% at 90% 20%, rgba(136,19,55,0.20) 0%, transparent 65%)',
            }}
          />
          <span className="absolute top-8 right-8 md:top-12 md:right-14 text-[10px] font-mono tracking-[0.3em] text-neutral-600">
            LUNA
          </span>
          <Reveal delay={140}>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.04em] leading-[1.05]">
              <span className="block text-neutral-300">WE FOCUS</span>
              <span className="block metallic-champagne-silver">ON YOUR DIGITAL PRESENCE.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* supporting copy spanning both columns */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <p className="text-base sm:text-lg md:text-xl font-cormorant text-neutral-300 leading-relaxed max-w-2xl">
              You don&apos;t need to spend your day thinking about what to post, how to edit it, what
              caption to write or how to manage every incoming enquiry.
            </p>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-cinzel tracking-[0.05em] text-white">
              Give us the content and direction.
            </p>
            <p className="mt-2 text-base sm:text-lg md:text-xl font-cinzel tracking-[0.05em] metallic-champagne-silver">
              We&apos;ll handle the digital execution.
            </p>
          </Reveal>
          <Reveal delay={160} className="lg:col-span-5 flex lg:justify-end">
            <div className="flex items-center gap-4 self-start lg:self-end">
              <span className="text-5xl md:text-6xl font-cinzel font-bold text-white/10">01</span>
              <span className="h-16 w-px bg-gradient-to-b from-rose-500/70 to-transparent" />
              <p className="text-[11px] tracking-[0.24em] uppercase font-cinzel text-neutral-400 max-w-[10rem] leading-relaxed">
                A system behind your social presence
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
