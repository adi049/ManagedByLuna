import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { Reveal, useInView } from '../Reveal';
import { soundEngine } from '../../utils/audio';

/* ============ 2. SERVICE STATEMENT ============ */

const PILLAR_WORDS = ['DESIGN', 'FUNCTION', 'IDENTITY', 'PERFORMANCE', 'USER EXPERIENCE'];

export const ServiceStatement: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="absolute right-10 top-1/4 w-[380px] h-[380px] rounded-full bg-rose-950/15 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-cinzel font-bold tracking-[0.04em] leading-[1.08] max-w-4xl">
            <span className="block text-neutral-300">YOUR WEBSITE</span>
            <span className="block metallic-silver-text">IS YOUR DIGITAL ADDRESS.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-xl text-base sm:text-lg font-cormorant italic text-neutral-400 leading-relaxed">
            Your website is often the first serious interaction someone has with your business.
          </p>
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase font-cinzel text-neutral-600">
            We create websites that combine
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3 md:gap-x-10">
          {PILLAR_WORDS.map((w, i) => (
            <span
              key={w}
              className="text-xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.08em] text-neutral-300 hover:text-white transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 900ms ease ${i * 130}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 130}ms`,
              }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 4. WHAT WE INCLUDE ============ */

const INCLUSIONS = [
  { t: 'RESPONSIVE DESIGN', d: 'Works across desktop, tablet and mobile.' },
  { t: 'CUSTOM UI', d: 'Layouts designed around the brand instead of forcing the business into a template.' },
  { t: 'INTERACTIVE EXPERIENCE', d: 'Smooth transitions, hover effects and thoughtful interactions.' },
  { t: 'SEO-FRIENDLY STRUCTURE', d: 'Clean structure and content foundations designed to support discoverability.' },
  { t: 'FAST EXPERIENCE', d: 'Optimized assets and efficient implementation for a smoother browsing experience.' },
  { t: 'CLEAR CTA FLOW', d: 'The website is structured to guide visitors towards the next action.' },
];

export const Inclusions: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <Reveal>
        <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
          What we include
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14">
          <span className="block text-neutral-300">BUILT FOR MORE</span>
          <span className="block metallic-champagne-silver">THAN JUST LOOKS.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
        {INCLUSIONS.map((item, i) => (
          <Reveal key={item.t} delay={i * 70}>
            <div className="group relative h-full bg-[#07050d] p-7 md:p-8 hover:bg-[#0b0816] transition-colors duration-500">
              <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-base md:text-lg font-cinzel font-semibold tracking-[0.12em] text-white group-hover:text-amber-200 transition-colors">
                {item.t}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                {item.d}
              </p>
              <span className="mt-6 block h-px w-8 bg-gradient-to-r from-purple-500 to-rose-500 group-hover:w-20 transition-all duration-700" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ 5. DESIGN PHILOSOPHY ============ */

const PHILOSOPHY = [
  { no: '01', t: 'VISUAL IDENTITY', d: 'The website should feel like the brand.' },
  { no: '02', t: 'USER EXPERIENCE', d: 'Visitors should understand what the business offers without fighting through the interface.' },
  { no: '03', t: 'BUSINESS PURPOSE', d: 'The website should support the actual goal: visibility, enquiries, bookings, credibility or showcasing work.' },
];

export const Philosophy: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-purple-900/12 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
      <Reveal>
        <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.05em] leading-[1.08]">
          <span className="block text-neutral-300">LOOK GOOD.</span>
          <span className="block metallic-silver-text my-1">MAKE SENSE.</span>
          <span className="block metallic-champagne-silver">WORK HARD.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {PHILOSOPHY.map((p, i) => (
          <Reveal key={p.no} delay={i * 120}>
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-5xl font-cinzel font-bold text-white/10">{p.no}</span>
              <h3 className="mt-4 text-lg md:text-xl font-cinzel font-semibold tracking-[0.12em] text-white">
                {p.t}
              </h3>
              <span className="mt-4 mx-auto md:mx-0 block h-px w-10 bg-gradient-to-r from-rose-500 to-transparent" />
              <p className="mt-4 text-sm text-neutral-400 font-sans leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ 8. PROCESS ============ */

const STEPS = [
  { no: '01', t: 'DISCOVER', d: 'Understand the business, audience and requirements.' },
  { no: '02', t: 'DIRECTION', d: 'Define visual direction, structure and content flow.' },
  { no: '03', t: 'DESIGN', d: 'Create the interface, visual system and experience.' },
  { no: '04', t: 'BUILD', d: 'Develop the responsive website and interactive elements.' },
  { no: '05', t: 'LAUNCH', d: 'Optimize, test and prepare the website for deployment.' },
];

export const Process: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            The process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14 md:mb-20">
            <span className="block text-neutral-300">FROM IDEA</span>
            <span className="block metallic-silver-text">TO LAUNCH.</span>
          </h2>
        </Reveal>

        <div className="relative max-w-3xl">
          {/* animated vertical spine */}
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" aria-hidden />
          <span
            className="absolute left-[11px] top-2 w-px bg-gradient-to-b from-purple-500 via-rose-500 to-amber-400/70 origin-top"
            style={{
              height: inView ? 'calc(100% - 16px)' : '0%',
              transition: 'height 1800ms cubic-bezier(0.22,1,0.36,1) 200ms',
            }}
            aria-hidden
          />

          {STEPS.map((s, i) => (
            <div key={s.no} className="relative pl-12 pb-12 last:pb-0">
              <span
                className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border border-white/15 bg-[#07050d] flex items-center justify-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'scale(1)' : 'scale(0.6)',
                  transition: `opacity 600ms ease ${300 + i * 260}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${300 + i * 260}ms`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </span>

              <div
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 800ms ease ${380 + i * 260}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${380 + i * 260}ms`,
                }}
              >
                <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-600">{s.no}</span>
                <h3 className="mt-1.5 text-xl md:text-2xl font-cinzel font-semibold tracking-[0.12em] text-white">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 font-sans leading-relaxed max-w-md">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 9. WHAT MAKES IT DIFFERENT ============ */

const DIFF = [
  'CUSTOM VISUAL DIRECTION',
  'RESPONSIVE DESIGN',
  'INTERACTION',
  'BRAND-FOCUSED DESIGN',
  'CLEAR USER EXPERIENCE',
];

export const Different: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[420px] h-[320px] rounded-full bg-rose-950/18 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.04em] leading-[1.08]">
            <span className="block text-neutral-300">NO COPY-PASTE</span>
            <span className="block metallic-silver-text">DIGITAL PRESENCE.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-lg text-base sm:text-lg font-cormorant italic text-neutral-400">
            We don&apos;t want every business to look like the same template.
          </p>
        </Reveal>

        <div className="mt-14 space-y-1 md:space-y-2">
          {DIFF.map((w, i) => (
            <div key={w} className="flex items-center gap-4 md:gap-6">
              <span
                className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-tight text-transparent [-webkit-text-stroke:1px_rgba(212,175,120,0.4)] hover:[-webkit-text-stroke:1px_rgba(212,175,120,0.85)] transition-all duration-500"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-28px)',
                  transition: `opacity 900ms ease ${i * 140}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 140}ms`,
                }}
              >
                {w}
              </span>
              {i < DIFF.length - 1 && (
                <span
                  className="text-rose-500/60 text-xl md:text-2xl font-cinzel shrink-0"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: `opacity 700ms ease ${240 + i * 140}ms`,
                  }}
                >
                  +
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 10. DEMO WEBSITES ============ */

export const DemoRequest: React.FC<{ onRequest: () => void }> = ({ onRequest }) => (
  <section className="relative z-10 py-20 md:py-24 border-t border-white/[0.06]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
      <Reveal>
        <div className="relative py-12 px-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm text-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/10 via-transparent to-rose-950/10 pointer-events-none" />
          <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.08em]">
            <span className="block text-neutral-300">WANT TO SEE</span>
            <span className="block metallic-champagne-silver mt-1">MORE?</span>
          </h2>
          <p className="relative mt-5 text-sm sm:text-base font-cormorant italic text-neutral-400 max-w-md mx-auto">
            We also create concept and demonstration websites to explore different visual directions.
          </p>
          <button
            onClick={() => {
              soundEngine.playChime();
              onRequest();
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

/* ============ 11. CLOSING CTA ============ */

export const WebsiteCta: React.FC<{
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}> = ({ onOpenProject, onOpenSchedule }) => (
  <section className="relative z-10 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] rounded-full bg-purple-900/18 blur-3xl pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
      <Reveal>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.04em] leading-[1.06]">
          <span className="block text-neutral-300">YOUR BUSINESS</span>
          <span className="block metallic-silver-text my-1">DESERVES A WEBSITE</span>
          <span className="block metallic-champagne-silver">THAT FEELS LIKE IT.</span>
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-lg mx-auto">
          Tell us what you&apos;re building. We&apos;ll figure out the digital direction together.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenProject();
            }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>START A PROJECT</span>
          </button>
          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenSchedule();
            }}
            className="px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-cinzel font-medium tracking-[0.22em] text-neutral-200 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span>SCHEDULE A CALL</span>
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);
