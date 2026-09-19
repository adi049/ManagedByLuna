import React from 'react';
import { Calendar } from 'lucide-react';
import { Reveal } from '../Reveal';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { CONTACT } from '../../data/site';
import { soundEngine } from '../../utils/audio';

interface ContactFinalCtaProps {
  onOpenSchedule: () => void;
}

export const ContactFinalCta: React.FC<ContactFinalCtaProps> = ({ onOpenSchedule }) => {
  return (
    <section className="relative z-10 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[380px] rounded-full bg-rose-950/20 blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-cinzel font-bold tracking-[0.04em] leading-[1.05]">
            <span className="block text-neutral-300">YOUR NEXT</span>
            <span className="block metallic-silver-text my-1">PROJECT STARTS</span>
            <span className="block metallic-champagne-silver">WITH A CONVERSATION.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 space-y-2 max-w-md mx-auto">
            <p className="text-base sm:text-lg font-cinzel tracking-[0.06em] text-neutral-300">
              No complicated process.
              <br />
              No unnecessary jargon.
            </p>
            <p className="text-base sm:text-lg font-cormorant italic text-neutral-400">
              Just tell us what you&apos;re trying to build.
            </p>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playChime()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 border border-emerald-500/40 hover:border-[#25D366] text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] text-white shadow-[0_0_25px_rgba(37,211,102,0.25)] hover:shadow-[0_0_35px_rgba(37,211,102,0.35)] transition-all duration-300 flex items-center gap-2.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </a>

            <button
              onClick={() => {
                soundEngine.playChime();
                onOpenSchedule();
              }}
              className="px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-cinzel font-medium tracking-[0.22em] text-neutral-200 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>SCHEDULE A CALL</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
