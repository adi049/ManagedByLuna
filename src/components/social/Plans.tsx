import React from 'react';
import { Check, ArrowRight, Clapperboard, CalendarClock } from 'lucide-react';
import { Reveal } from '../Reveal';
import {
  PLAN_ONE_CORE,
  PLAN_ONE_PLUS,
  PLAN_TWO_RAW,
  PLAN_TWO_EDIT,
} from '../../data/social';
import { soundEngine } from '../../utils/audio';

interface PlansProps {
  onOpenSchedule: () => void;
  onOpenProject: () => void;
}

const CheckRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-sans">
    <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" strokeWidth={2} />
    <span>{children}</span>
  </li>
);

export const Plans: React.FC<PlansProps> = ({ onOpenSchedule, onOpenProject }) => {
  return (
    <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            Service levels
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14">
            <span className="block text-neutral-300">TWO WAYS TO</span>
            <span className="block metallic-silver-text">WORK WITH LUNA.</span>
          </h2>
          <p className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-neutral-600 mb-10">
            Requirements are discussed privately — no fixed packages or prices.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* PLAN 01 */}
          <Reveal>
            <article className="group relative h-full p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-purple-800/15 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-8">
                <CalendarClock className="w-4 h-4 text-purple-300" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.32em] uppercase font-cinzel text-purple-300/80">
                  Plan 01
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-cinzel font-bold tracking-[0.08em] text-white mb-2">
                CONTENT MANAGEMENT
              </h3>
              <p className="text-2xl md:text-3xl font-cinzel font-bold tracking-[0.04em] metallic-silver-text leading-tight">
                CONSISTENCY,
                <br />
                WITHOUT THE CHAOS.
              </p>

              {/* core cadence */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {PLAN_ONE_CORE.map((c) => (
                  <div
                    key={c}
                    className="px-3 py-3 rounded-lg border border-white/[0.08] bg-[#07050d]/60 text-center text-[10px] sm:text-[11px] tracking-[0.14em] font-cinzel text-neutral-200"
                  >
                    {c}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[10px] tracking-[0.3em] uppercase font-cinzel text-neutral-500 mb-4">
                Plus
              </p>
              <ul className="space-y-2.5">
                {PLAN_ONE_PLUS.map((p) => (
                  <CheckRow key={p}>{p}</CheckRow>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.07] space-y-3">
                <p className="text-xs text-neutral-400 font-cormorant italic leading-relaxed">
                  <span className="not-italic font-cinzel text-[10px] tracking-[0.2em] text-neutral-500 block mb-1">
                    YOUR PART
                  </span>
                  Provide the required raw clips, photos or business information.
                </p>
                <p className="text-xs text-neutral-400 font-cormorant italic leading-relaxed">
                  <span className="not-italic font-cinzel text-[10px] tracking-[0.2em] text-neutral-500 block mb-1">
                    LUNA&apos;S PART
                  </span>
                  Managed By Luna handles the digital execution.
                </p>
              </div>

              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenSchedule();
                }}
                className="mt-8 w-full py-3.5 rounded-full border border-white/12 hover:border-amber-400/60 bg-white/[0.03] hover:bg-white/[0.07] text-[11px] font-cinzel tracking-[0.24em] text-neutral-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                DISCUSS YOUR BRAND
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          </Reveal>

          {/* PLAN 02 — visually stronger */}
          <Reveal delay={120}>
            <article className="group relative h-full p-8 md:p-10 rounded-2xl border border-rose-500/25 bg-gradient-to-b from-[#150611]/80 to-[#0a0712]/90 backdrop-blur-sm overflow-hidden subtle-crimson-glow">
              <div className="absolute -top-24 -left-16 w-64 h-64 rounded-full bg-rose-800/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-purple-800/20 blur-3xl pointer-events-none" />

              <div className="relative flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Clapperboard className="w-4 h-4 text-rose-300" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.32em] uppercase font-cinzel text-rose-300/90">
                    Plan 02
                  </span>
                </div>
                <span className="text-[8px] tracking-[0.24em] uppercase font-cinzel text-amber-300/80 border border-amber-400/30 rounded-full px-2.5 py-1">
                  Fully produced
                </span>
              </div>

              <h3 className="relative text-xl md:text-2xl font-cinzel font-bold tracking-[0.08em] text-white mb-2">
                FULL CREATIVE MANAGEMENT
              </h3>
              <p className="relative text-2xl md:text-3xl font-cinzel font-bold tracking-[0.04em] metallic-champagne-silver leading-tight">
                YOU SEND THE RAW.
                <br />
                WE CREATE THE FINISHED.
              </p>

              <p className="relative mt-6 text-xs text-neutral-400 font-sans leading-relaxed">
                Everything included in <span className="text-neutral-200">Plan 01</span>, plus professional
                editing by Managed By Luna.
              </p>

              <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase font-cinzel text-neutral-500 mb-3">
                    You can provide
                  </p>
                  <ul className="space-y-2">
                    {PLAN_TWO_RAW.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] font-cinzel text-neutral-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-rose-400" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase font-cinzel text-neutral-500 mb-3">
                    We handle
                  </p>
                  <ul className="space-y-2">
                    {PLAN_TWO_EDIT.map((e) => (
                      <li
                        key={e}
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] font-cinzel text-neutral-200"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenProject();
                }}
                className="relative mt-8 w-full py-3.5 rounded-full bg-gradient-to-r from-rose-950/80 via-purple-900/70 to-rose-950/80 border border-rose-500/40 hover:border-amber-400/70 text-[11px] font-cinzel font-semibold tracking-[0.24em] text-white hover:shadow-[0_0_30px_rgba(202,166,105,0.35)] transition-all flex items-center justify-center gap-2"
              >
                START FULL CREATIVE
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
