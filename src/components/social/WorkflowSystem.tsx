import React from 'react';
import { ArrowDown, ArrowRight, User, MoonStar } from 'lucide-react';
import { Reveal, useInView } from '../Reveal';
import { CLIENT_PROVIDES, WORKFLOW, CONTENT_PURPOSES } from '../../data/social';

/* ===== 10. THE CLIENT'S ROLE ===== */
export const ClientRole: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <Reveal>
        <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
          Your role
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-10">
          <span className="block text-neutral-300">WHAT DO YOU</span>
          <span className="block metallic-silver-text">ACTUALLY HAVE TO DO?</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.06em] metallic-champagne-silver mb-14">
          RUN YOUR BUSINESS.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        {/* YOU */}
        <Reveal>
          <div className="relative h-full p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
            <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-purple-800/15 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <User className="w-4 h-4 text-purple-300" strokeWidth={1.4} />
              <span className="text-[11px] tracking-[0.3em] uppercase font-cinzel text-purple-300/80">
                You
              </span>
            </div>
            <p className="text-lg font-cinzel tracking-[0.06em] text-white mb-1">
              BUSINESS + RAW CONTENT
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase font-cinzel text-neutral-600 mb-6">
              Depending on your setup, you may provide
            </p>
            <ul className="space-y-2.5">
              {CLIENT_PROVIDES.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 font-sans"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* LUNA */}
        <Reveal delay={120}>
          <div className="relative h-full p-8 md:p-10 rounded-2xl border border-rose-500/25 bg-gradient-to-b from-[#150611]/70 to-[#0a0712]/90 overflow-hidden subtle-crimson-glow">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-rose-800/20 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <MoonStar className="w-4 h-4 text-rose-300" strokeWidth={1.4} />
              <span className="text-[11px] tracking-[0.3em] uppercase font-cinzel text-rose-300/80">
                Luna
              </span>
            </div>
            <p className="text-lg font-cinzel tracking-[0.06em] text-white mb-1">
              STRATEGY + EDITING + CONTENT + DISTRIBUTION
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase font-cinzel text-neutral-600 mb-6">
              Managed By Luna handles the digital side
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {['Strategy', 'Planning', 'Editing', 'Design', 'Captions / SEO', 'Publishing', 'Community', 'Paid support'].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-2.5 rounded-lg border border-white/[0.08] bg-[#07050d]/60 text-[10px] sm:text-[11px] tracking-[0.1em] font-cinzel text-neutral-200"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* mobile arrow / desktop connector */}
      <div className="flex justify-center md:justify-center mt-6">
        <ArrowDown className="md:hidden w-5 h-5 text-rose-400/70" />
        <ArrowRight className="hidden md:block w-5 h-5 text-rose-400/70" />
      </div>
    </div>
  </section>
);

/* ===== 11. WORKFLOW — horizontal desktop / vertical mobile ===== */
export const Workflow: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            The workflow
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14 md:mb-20">
            <span className="block text-neutral-300">ONE SIMPLE</span>
            <span className="block metallic-silver-text">WORKFLOW.</span>
          </h2>
        </Reveal>

        {/* vertical (mobile / tablet) */}
        <div className="md:hidden relative pl-8">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" />
          <span
            className="absolute left-[11px] top-2 w-px bg-gradient-to-b from-purple-500 via-rose-500 to-amber-400/70 origin-top"
            style={{
              height: inView ? 'calc(100% - 16px)' : '0%',
              transition: 'height 2000ms cubic-bezier(0.22,1,0.36,1) 200ms',
            }}
          />
          {WORKFLOW.map((s) => (
            <div key={s.no} className="relative pb-9 last:pb-0">
              <span className="absolute -left-8 top-0 w-[23px] h-[23px] rounded-full border border-white/15 bg-[#07050d] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-600">{s.no}</span>
              <h3 className="mt-1 text-lg font-cinzel font-semibold tracking-[0.12em] text-white">{s.t}</h3>
              <p className="mt-1 text-sm text-neutral-400 font-sans">{s.d}</p>
            </div>
          ))}
        </div>

        {/* horizontal (desktop) */}
        <div className="hidden md:block relative">
          <span className="absolute left-0 right-0 top-[26px] h-px bg-white/[0.08]" />
          <span
            className="absolute left-0 top-[26px] h-px bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400/70 origin-left"
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 2200ms cubic-bezier(0.22,1,0.36,1) 200ms',
            }}
          />
          <div className="grid grid-cols-6 gap-6">
            {WORKFLOW.map((s, i) => (
              <div
                key={s.no}
                className="relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(22px)',
                  transition: `opacity 700ms ease ${300 + i * 220}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${300 + i * 220}ms`,
                }}
              >
                <span className="flex items-center justify-center w-[53px] h-[53px] rounded-full border border-white/15 bg-[#07050d] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-600">{s.no}</span>
                <h3 className="mt-1 text-base font-cinzel font-semibold tracking-[0.1em] text-white">
                  {s.t}
                </h3>
                <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== 12. CONTENT CATEGORIES ===== */
export const ContentCategories: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-purple-900/12 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.1] mb-6">
          <span className="block text-neutral-300">NOT EVERY POST</span>
          <span className="block metallic-silver-text">HAS TO SELL.</span>
        </h2>
        <p className="max-w-lg text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed">
          A strong social presence needs different types of content, each with its own job.
        </p>
      </Reveal>

      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
        {CONTENT_PURPOSES.map((c, i) => (
          <Reveal key={c.word} delay={i * 70}>
            <div className="group relative bg-[#07050d] p-8 md:p-10 h-full hover:bg-[#0b0816] transition-colors duration-500 overflow-hidden">
              <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl font-cinzel font-bold tracking-[0.08em] text-white group-hover:text-amber-200 transition-colors">
                {c.word}
              </h3>
              <p className="mt-2 text-xs text-neutral-500 font-cormorant italic">{c.note}</p>
              <span className="mt-6 block h-px w-8 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-20 transition-all duration-700" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
