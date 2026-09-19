import React from 'react';
import { ArrowDown, Search, Leaf, Megaphone, Inbox } from 'lucide-react';
import { Reveal, useInView } from '../Reveal';
import {
  RAW_TO_READY,
  SEO_ELEMENTS,
  ORGANIC_PILLARS,
  ORGANIC_HIGHLIGHTS,
  PAID_SERVICES,
  LEAD_SERVICES,
} from '../../data/social';

/* ===== 5. FROM RAW TO READY — vertical cinematic pipeline ===== */
export const RawToReady: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute left-10 top-1/3 w-[360px] h-[360px] rounded-full bg-purple-800/12 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            Content creation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14 md:mb-20">
            <span className="block text-neutral-300">FROM RAW</span>
            <span className="block metallic-silver-text">TO READY.</span>
          </h2>
        </Reveal>

        {/* horizontal on desktop, vertical on mobile */}
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">
          {/* connecting line */}
          <span className="hidden md:block absolute left-0 right-0 top-[34px] h-px bg-white/[0.08]" aria-hidden />
          <span
            className="hidden md:block absolute left-0 top-[34px] h-px bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400/80 origin-left"
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 2200ms cubic-bezier(0.22,1,0.36,1) 300ms',
            }}
            aria-hidden
          />

          {RAW_TO_READY.map((step, i) => {
            const isRaw = i === 0;
            const isFinal = i === RAW_TO_READY.length - 1;
            return (
              <React.Fragment key={step}>
                <div className="relative flex md:flex-col items-center md:items-start md:w-1/5 gap-4 md:gap-0">
                  <span
                    className="relative z-10 w-[68px] h-[68px] shrink-0 rounded-full border flex items-center justify-center"
                    style={{
                      borderColor: isFinal ? 'rgba(212,175,120,0.5)' : isRaw ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.14)',
                      background: '#07050d',
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'scale(1)' : 'scale(0.7)',
                      transition: `opacity 600ms ease ${i * 240}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${i * 240}ms`,
                    }}
                  >
                    <span
                      className={`text-[9px] font-mono tracking-[0.2em] ${
                        isFinal ? 'text-amber-300' : 'text-neutral-400'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <div
                    className="md:mt-5"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(14px)',
                      transition: `opacity 700ms ease ${i * 240 + 120}ms, transform 700ms ease ${i * 240 + 120}ms`,
                    }}
                  >
                    <h3
                      className={`text-sm md:text-base font-cinzel tracking-[0.14em] ${
                        isFinal ? 'metallic-champagne-silver font-semibold' : 'text-neutral-200'
                      }`}
                    >
                      {step}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-neutral-500 font-sans max-w-[9rem]">
                      {isRaw
                        ? 'Your clips, photos and footage.'
                        : isFinal
                        ? 'Platform-ready, scheduled content.'
                        : 'Shaped by Managed By Luna.'}
                    </p>
                  </div>
                </div>
                {i < RAW_TO_READY.length - 1 && (
                  <ArrowDown className="md:hidden w-4 h-4 text-neutral-600 mx-4 -my-1" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===== 6. SEO-FOCUSED CONTENT ===== */
export const SeoContent: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
    <div className="absolute right-10 top-1/4 w-[360px] h-[360px] rounded-full bg-rose-950/15 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-5 h-5 text-purple-300" strokeWidth={1.4} />
            <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500">
              Discoverability
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.1]">
            <span className="block text-neutral-300">POSTING IS EASY.</span>
            <span className="block metallic-silver-text mt-1">GETTING DISCOVERED</span>
            <span className="block text-neutral-300 mt-1">IS THE WORK.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed max-w-lg">
            Every piece of content can be structured with discoverability in mind. These elements are
            designed to improve discoverability and support organic reach.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={120}>
          <div className="border-t border-white/[0.07]">
            {SEO_ELEMENTS.map((el, i) => (
              <div
                key={el}
                className="group flex items-center justify-between py-4 border-b border-white/[0.07]"
              >
                <span className="text-xs sm:text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
                  {el}
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-600 group-hover:text-purple-300 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[10px] tracking-[0.2em] uppercase font-cinzel text-neutral-600 leading-relaxed">
            No guaranteed rankings, reach or leads — only content built to be found.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ===== 7. ORGANIC GROWTH ===== */
export const OrganicGrowth: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="w-5 h-5 text-emerald-300/80" strokeWidth={1.4} />
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500">
            Organic
          </p>
        </div>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12]">
            <span className="block text-neutral-300">BUILD THE</span>
            <span className="block metallic-silver-text">ORGANIC SIDE.</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-8">
          {ORGANIC_PILLARS.map((w, i) => (
            <React.Fragment key={w}>
              <span
                className="text-xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.08em] text-neutral-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 800ms ease ${i * 130}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${i * 130}ms`,
                }}
              >
                {w}
              </span>
              {i < ORGANIC_PILLARS.length - 1 && (
                <span className="text-rose-500/60 text-xl md:text-2xl font-cinzel">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <p className="text-base sm:text-lg font-cormorant text-neutral-300 leading-relaxed max-w-xl">
              Organic growth comes from consistent, useful and relevant content combined with ongoing
              audience interaction.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {ORGANIC_HIGHLIGHTS.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 border border-white/[0.09] bg-white/[0.02] text-[10px] tracking-[0.14em] uppercase font-cinzel text-neutral-400"
                >
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ===== 8. PAID DISTRIBUTION ===== */
export const PaidDistribution: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
    <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-purple-900/18 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="flex items-center gap-3 mb-6">
        <Megaphone className="w-5 h-5 text-rose-300" strokeWidth={1.4} />
        <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500">
          Paid
        </p>
      </div>
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] max-w-3xl">
          <span className="block text-neutral-300">WHEN ORGANIC</span>
          <span className="block metallic-silver-text">ISN&apos;T THE ONLY MOVE.</span>
        </h2>
        <p className="mt-7 max-w-xl text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed">
          We can also manage paid distribution through Meta&apos;s advertising ecosystem.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <Reveal delay={100} className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
            {PAID_SERVICES.map((s) => (
              <div
                key={s}
                className="bg-[#07050d] px-5 py-4 text-[11px] tracking-[0.14em] uppercase font-cinzel text-neutral-300 hover:text-white hover:bg-purple-950/30 transition-colors"
              >
                {s}
              </div>
            ))}
          </div>
        </Reveal>

        {/* ORGANIC + PAID = AMPLIFIED */}
        <Reveal delay={200} className="lg:col-span-5">
          <div className="border border-white/[0.09] rounded-2xl p-8 bg-white/[0.02] text-center">
            <p className="text-sm font-cinzel tracking-[0.2em] text-neutral-300">ORGANIC</p>
            <span className="my-4 block text-2xl font-cinzel text-rose-500/70">+</span>
            <p className="text-sm font-cinzel tracking-[0.2em] text-neutral-300">PAID</p>
            <span className="my-4 block h-px w-12 mx-auto bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
            <p className="text-base sm:text-lg font-cinzel font-semibold tracking-[0.1em] metallic-champagne-silver">
              AMPLIFIED
              <br />
              DISTRIBUTION
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p className="mt-8 text-[10px] tracking-[0.2em] uppercase font-cinzel text-neutral-600 leading-relaxed max-w-xl">
          Paid activity is managed carefully around a brand&apos;s goals — no promised numbers for leads,
          reach, followers or sales.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===== 9. LEAD & INQUIRY MANAGEMENT ===== */
export const LeadManagement: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-6">
        <div className="flex items-center gap-3 mb-6">
          <Inbox className="w-5 h-5 text-amber-300/90" strokeWidth={1.4} />
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500">
            Inquiries
          </p>
        </div>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.1]">
            <span className="block text-neutral-300">CONTENT GETS ATTENTION.</span>
            <span className="block metallic-silver-text mt-1">WE HELP TURN THAT</span>
            <span className="block text-neutral-300 mt-1">ATTENTION INTO INQUIRIES.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed max-w-lg">
            We can help manage incoming social media inquiries and leads so potential customers don&apos;t
            get ignored. Luna does not guarantee conversion.
          </p>
          <p className="mt-5 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-lg border-l border-amber-400/40 pl-4">
            Once a qualified lead is ready for the business conversation, the client takes over the
            sales / customer interaction.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={120}>
          <div className="border-t border-white/[0.07]">
            {LEAD_SERVICES.map((s, i) => (
              <div
                key={s}
                className="group flex items-start gap-4 py-4 border-b border-white/[0.07]"
              >
                <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-600 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
