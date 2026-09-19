import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { Reveal, useInView } from '../Reveal';
import { soundEngine } from '../../utils/audio';

/* ---------- Cinematic transition after the third member ---------- */

const BRIDGE = ['DESIGN', 'STRATEGY', 'VISUALS', 'TECHNOLOGY'];

export const TeamTransition: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <section
      ref={ref}
      className="relative z-10 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-purple-900/15 blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-cinzel font-bold tracking-[0.05em] leading-[1.05]">
            <span className="block text-neutral-300">THREE PERSPECTIVES.</span>
            <span className="block metallic-silver-text mt-2">ONE DIRECTION.</span>
          </h2>
        </Reveal>

        <div
          className="mt-12 md:mt-16 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
          style={{
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s',
          }}
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-6">
          {BRIDGE.map((word, i) => (
            <React.Fragment key={word}>
              <span
                className="text-lg sm:text-2xl md:text-3xl font-cinzel tracking-[0.16em] text-neutral-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(18px)',
                  transition: `opacity 0.8s ease ${0.5 + i * 0.18}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${
                    0.5 + i * 0.18
                  }s`,
                }}
              >
                {word}
              </span>
              {i < BRIDGE.length - 1 && (
                <span
                  className="text-rose-500/70 text-xl md:text-2xl font-cinzel"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: `opacity 0.6s ease ${0.6 + i * 0.18}s`,
                  }}
                >
                  +
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- HOW WE THINK ---------- */

const PILLARS = [
  { no: '01', title: 'IDEAS', note: 'The starting point' },
  { no: '02', title: 'STRATEGY', note: 'Direction before design' },
  { no: '03', title: 'EXECUTION', note: 'Crafted, not assembled' },
  { no: '04', title: 'GROWTH', note: 'Built to be noticed' },
];

export const Approach: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="approach" ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
              Our approach
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12]">
              <span className="block text-neutral-300">HOW WE</span>
              <span className="block metallic-silver-text">THINK.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed">
              Good digital work is not only about making something look good. It needs clarity, identity,
              strategy and execution. Managed By Luna brings these elements together to create digital
              experiences that feel intentional.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07]">
          {PILLARS.map((p, i) => (
            <div
              key={p.no}
              className="group relative bg-[#07050d] p-7 md:p-8 overflow-hidden hover:bg-[#0b0816] transition-colors duration-500"
            >
              <span className="text-4xl md:text-5xl font-cinzel font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                {p.no}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl font-cinzel font-semibold tracking-[0.12em] text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[11px] tracking-[0.18em] uppercase font-cinzel text-neutral-500">
                {p.note}
              </p>
              <span
                className="absolute left-0 bottom-0 h-px bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400"
                style={{
                  width: inView ? '100%' : '0%',
                  transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- FINAL ABOUT CTA ---------- */

interface AboutCtaProps {
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}

export const AboutCta: React.FC<AboutCtaProps> = ({ onOpenProject, onOpenSchedule }) => {
  return (
    <section className="relative z-10 py-24 md:py-36 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-rose-950/20 blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-cinzel font-bold tracking-[0.05em] leading-[1.05]">
            <span className="block text-neutral-300">THINKING</span>
            <span className="block metallic-silver-text">ABOUT YOUR</span>
            <span className="block metallic-champagne-silver">NEXT MOVE?</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400">
            Let&apos;s turn the idea into something people remember.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundEngine.playChime();
                onOpenProject();
              }}
              className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="relative z-10">START A PROJECT</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playChime();
                onOpenSchedule();
              }}
              className="px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-cinzel font-medium tracking-[0.22em] text-neutral-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>SCHEDULE A CALL</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
