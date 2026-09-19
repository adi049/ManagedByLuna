import React from 'react';
import { Reveal } from './Reveal';
import { soundEngine } from '../utils/audio';

interface DemoWorkProps {
  onRequestDemos: () => void;
}

export const DemoWork: React.FC<DemoWorkProps> = ({ onRequestDemos }) => {
  return (
    <section id="more-work" className="relative z-10 py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <Reveal>
          <div className="relative py-12 px-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/10 via-transparent to-rose-950/10 pointer-events-none" />
            <p className="relative text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-4">
              Archive
            </p>
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.08em]">
              <span className="block text-neutral-300">MORE WORK?</span>
              <span className="block metallic-champagne-silver mt-1">MORE TO EXPLORE.</span>
            </h2>
            <p className="relative mt-5 text-sm sm:text-base font-cormorant italic text-neutral-400 max-w-md mx-auto">
              Some projects are created as concepts, experiments and demonstrations.
              <br />
              Want to see more?
            </p>
            <button
              onClick={() => {
                soundEngine.playChime();
                onRequestDemos();
              }}
              className="relative mt-8 px-7 py-3 rounded-full border border-white/15 hover:border-amber-400/50 text-[11px] font-cinzel tracking-[0.26em] text-neutral-200 hover:text-white transition-all"
            >
              REQUEST MORE DEMOS
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
