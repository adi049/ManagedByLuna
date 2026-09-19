import React from 'react';
import { Reveal, useInView } from '../Reveal';

const STEPS = [
  {
    no: '01',
    title: 'YOU REACH OUT',
    desc: 'Tell us what you need through inquiry, WhatsApp or call.',
  },
  {
    no: '02',
    title: 'WE UNDERSTAND',
    desc: 'We discuss the business, requirements and creative direction.',
  },
  {
    no: '03',
    title: 'WE PLAN',
    desc: 'We define the appropriate creative and digital approach.',
  },
  {
    no: '04',
    title: 'WE BUILD',
    desc: 'The project moves into execution with continuous precision.',
  },
];

export const WhatHappensNext: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-4">
                The Progression
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12]">
                <span className="block text-neutral-300">WHAT HAPPENS</span>
                <span className="block metallic-silver-text">NEXT.</span>
              </h2>
              <p className="mt-6 text-base font-cormorant italic text-neutral-400 max-w-sm leading-relaxed">
                Clear milestones from initial contact to live execution. No ambiguity, no prolonged waiting
                cycles.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-10 sm:pl-12">
              {/* Vertical timeline spine */}
              <span className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" aria-hidden />
              <span
                className="absolute left-[11px] top-2 w-px bg-gradient-to-b from-purple-500 via-rose-500 to-amber-400/80 origin-top"
                style={{
                  height: inView ? 'calc(100% - 16px)' : '0%',
                  transition: 'height 1800ms cubic-bezier(0.22,1,0.36,1) 200ms',
                }}
                aria-hidden
              />

              <div className="space-y-10 sm:space-y-12">
                {STEPS.map((s, i) => (
                  <div key={s.no} className="relative">
                    <span
                      className="absolute -left-10 sm:-left-12 top-1 w-[23px] h-[23px] rounded-full border border-white/15 bg-[#07050d] flex items-center justify-center"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'scale(1)' : 'scale(0.6)',
                        transition: `opacity 600ms ease ${300 + i * 240}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${300 + i * 240}ms`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </span>

                    <div
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(16px)',
                        transition: `opacity 800ms ease ${360 + i * 240}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${360 + i * 240}ms`,
                      }}
                    >
                      <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                        {s.no}
                      </span>
                      <h3 className="mt-1 text-xl sm:text-2xl font-cinzel font-semibold tracking-[0.1em] text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-md">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
