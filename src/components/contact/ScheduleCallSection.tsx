import React from 'react';
import { Calendar, PhoneCall, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

interface ScheduleCallSectionProps {
  onOpenSchedule: () => void;
}

export const ScheduleCallSection: React.FC<ScheduleCallSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Subtle crimson and purple back-glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[520px] h-[360px] rounded-full bg-purple-900/15 blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 bottom-0 w-[420px] h-[300px] rounded-full bg-rose-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#0c0818]/90 via-[#07050e]/85 to-[#12050f]/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <p className="text-[10px] tracking-[0.38em] uppercase font-cinzel text-neutral-400">
                    READY TO TALK?
                  </p>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.04em] leading-[1.05] text-white">
                  <span className="block text-neutral-300">SCHEDULE</span>
                  <span className="block metallic-silver-text">A CALL.</span>
                </h2>

                <p className="mt-6 text-base sm:text-lg font-cormorant italic text-neutral-300 max-w-lg leading-relaxed">
                  Sometimes an idea is easier to explain in a conversation.
                </p>

                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
                  Discuss strategic scope, technical viability, or creative direction directly with Luna
                  principals.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      soundEngine.playChime();
                      onOpenSchedule();
                    }}
                    className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/90 via-red-950/80 to-purple-950/90 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span className="relative z-10">SCHEDULE A CALL →</span>
                  </button>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>20–30 MIN SESSION</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="space-y-3 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-cinzel font-semibold tracking-wide text-white">
                        Direct Strategic Alignment
                      </div>
                      <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                        No junior intermediaries. You speak directly with the architects.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-white/[0.05]">
                    <PhoneCall className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-cinzel font-semibold tracking-wide text-white">
                        Zero Sales Pressure
                      </div>
                      <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                        We clarify scope, suitability, and real timelines before any engagement.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
