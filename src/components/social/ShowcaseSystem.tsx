import React from 'react';
import {
  ImagePlus,
  Clapperboard,
  LayoutGrid,
  Plus,
  Sparkles,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { Reveal, useInView } from '../Reveal';
import { GROWTH_SYSTEM } from '../../data/social';
import { soundEngine } from '../../utils/audio';
import { CONTACT } from '../../data/site';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

/* ===== 13. SOCIAL VISUAL SHOWCASE — clearly replaceable placeholders ===== */

const SLOTS = [
  { icon: Clapperboard, label: 'REEL / VIDEO', ratio: 'aspect-[9/16]', span: 'sm:row-span-2' },
  { icon: LayoutGrid, label: 'CAROUSEL / POST', ratio: 'aspect-square', span: '' },
  { icon: ImagePlus, label: 'CAMPAIGN CREATIVE', ratio: 'aspect-square', span: '' },
];

export const SocialShowcase: React.FC = () => (
  <section className="relative z-10 py-24 md:py-32 border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
              The work, in place
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.1]">
              <span className="block text-neutral-300">CONTENT,</span>
              <span className="block metallic-silver-text">IN CONTEXT.</span>
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 self-start text-[9px] tracking-[0.28em] uppercase font-cinzel text-neutral-600 border border-white/10 rounded-full px-3 py-1.5">
            <Plus className="w-3 h-3 text-amber-400/80" />
            Placeholder slots — real work added later
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4">
        {SLOTS.map((slot, i) => (
          <Reveal key={slot.label} delay={i * 110} className={slot.span}>
            <div
              className={`group relative ${slot.ratio} w-full h-full rounded-xl border border-dashed border-white/[0.14] bg-white/[0.015] flex flex-col items-center justify-center gap-3 overflow-hidden hover:border-rose-400/40 transition-colors duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.08] via-transparent to-rose-950/[0.1] pointer-events-none" />
              <slot.icon
                className="w-6 h-6 text-neutral-600 group-hover:text-amber-300/80 transition-colors duration-500"
                strokeWidth={1.2}
              />
              <span className="text-[9px] tracking-[0.28em] uppercase font-cinzel text-neutral-600 group-hover:text-neutral-400 transition-colors">
                {slot.label}
              </span>
              <span className="absolute bottom-3 right-3 text-[8px] font-mono tracking-[0.25em] text-neutral-700">
                SLOT 0{i + 1}
              </span>
            </div>
          </Reveal>
        ))}

        {/* full-width strip slot */}
        <Reveal delay={200} className="sm:col-span-3">
          <div className="group relative aspect-[16/6] w-full rounded-xl border border-dashed border-white/[0.14] bg-white/[0.015] flex items-center justify-center hover:border-purple-400/40 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/[0.08] via-transparent to-rose-950/[0.1] pointer-events-none" />
            <div className="relative text-center">
              <Clapperboard className="w-6 h-6 text-neutral-600 mx-auto mb-2 group-hover:text-amber-300/80 transition-colors" strokeWidth={1.2} />
              <span className="text-[9px] tracking-[0.28em] uppercase font-cinzel text-neutral-600">
                FUTURE REELS / CAMPAIGN STRIP
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p className="mt-8 text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-600 leading-relaxed max-w-2xl">
          These frames are intentionally empty. Real client screenshots, reel thumbnails and campaign
          creatives will replace them — no fabricated results or engagement numbers are shown.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===== 14. DIGITAL GROWTH SYSTEM — cinematic highlight ===== */
export const GrowthSystem: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section
      ref={ref}
      className="relative z-10 py-28 md:py-44 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(136,19,55,0.18) 45%, transparent 72%)',
          filter: 'blur(90px)',
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-x-8">
          {GROWTH_SYSTEM.map((word, i) => (
            <React.Fragment key={word}>
              <span
                className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.06em] text-neutral-300"
                style={{
                  opacity: inView ? 1 : 0,
                  filter: inView ? 'blur(0)' : 'blur(12px)',
                  transform: inView ? 'translateY(0)' : 'translateY(26px)',
                  transition: `opacity 900ms ease ${i * 180}ms, filter 900ms ease ${i * 180}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 180}ms`,
                }}
              >
                {word}
              </span>
              {i < GROWTH_SYSTEM.length - 1 && (
                <span
                  className="text-rose-500/70 text-2xl md:text-3xl font-cinzel"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: `opacity 700ms ease ${i * 180 + 120}ms`,
                  }}
                >
                  +
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <span
          className="block h-px w-0 mx-auto my-10 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
          style={{
            width: inView ? '16rem' : '0px',
            transition: 'width 1200ms cubic-bezier(0.22,1,0.36,1) 1100ms',
          }}
        />

        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-[0.05em] metallic-champagne-silver"
          style={{
            opacity: inView ? 1 : 0,
            filter: inView ? 'blur(0)' : 'blur(16px)',
            transform: inView ? 'translateY(0)' : 'translateY(34px)',
            transition: 'opacity 1200ms ease 1200ms, filter 1200ms ease 1200ms, transform 1200ms cubic-bezier(0.22,1,0.36,1) 1200ms',
          }}
        >
          DIGITAL PRESENCE.
        </h2>
      </div>
    </section>
  );
};

/* ===== 15. FINAL CTA ===== */
interface FinalProps {
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}

export const SocialFinalCta: React.FC<FinalProps> = ({ onOpenProject, onOpenSchedule }) => (
  <section className="relative z-10 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full bg-rose-950/20 blur-3xl pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
      <Reveal>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-cinzel font-bold tracking-[0.04em] leading-[1.05]">
          <span className="block text-neutral-300">STOP WORRYING</span>
          <span className="block metallic-silver-text my-1">ABOUT WHAT TO POST.</span>
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-lg mx-auto">
          We&apos;ll help build the system behind your digital presence.
        </p>
        <p className="mt-3 text-[11px] tracking-[0.28em] uppercase font-cinzel text-neutral-500">
          You don&apos;t need to become a content creator. You need a system.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenProject();
            }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-950/80 via-purple-900/70 to-rose-950/80 border border-rose-500/40 hover:border-amber-400/80 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_30px_rgba(136,19,55,0.32)] hover:shadow-[0_0_40px_rgba(202,166,105,0.4)] transition-all duration-300 flex items-center gap-2"
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
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundEngine.playChime()}
          className="mt-6 inline-flex items-center gap-2 text-[11px] font-cinzel tracking-[0.28em] text-neutral-400 hover:text-[#25D366] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="flex items-center gap-2">
            <WhatsAppIcon className="w-4 h-4" />
            TALK ON WHATSAPP
          </span>
        </a>
      </Reveal>
    </div>
  </section>
);
