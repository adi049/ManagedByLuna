import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CONTACT } from '../data/site';
import { Reveal } from './Reveal';
import { soundEngine } from '../utils/audio';

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 scroll-mt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] rounded-full bg-purple-900/15 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 top-1/3 w-[360px] h-[260px] rounded-full bg-rose-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center relative">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            Begin
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.06em] leading-[1.1]">
            <span className="block text-neutral-300">HAVE AN IDEA?</span>
            <span className="block metallic-silver-text mt-1">LET&apos;S BUILD IT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re building, what you&apos;re trying to grow, or what your brand needs next.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playChime()}
              className="group w-full sm:w-auto min-w-[160px] px-6 py-3.5 rounded-full bg-[#07050d]/80 border border-white/10 hover:border-[#25D366]/50 text-white transition-all duration-300 flex items-center justify-center gap-3"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span className="text-[11px] font-cinzel tracking-[0.28em]">WHATSAPP</span>
            </a>

            <a
              href={`tel:${CONTACT.phoneTel}`}
              onClick={() => soundEngine.playChime()}
              className="group w-full sm:w-auto min-w-[160px] px-6 py-3.5 rounded-full bg-[#07050d]/80 border border-white/10 hover:border-amber-400/50 text-white transition-all duration-300 flex items-center justify-center gap-3"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-cinzel tracking-[0.28em]">CALL</span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              onClick={() => soundEngine.playChime()}
              className="group w-full sm:w-auto min-w-[160px] px-6 py-3.5 rounded-full bg-[#07050d]/80 border border-white/10 hover:border-purple-400/50 text-white transition-all duration-300 flex items-center justify-center gap-3"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-purple-300" />
              <span className="text-[11px] font-cinzel tracking-[0.28em]">EMAIL</span>
            </a>
          </div>

          <button
            onClick={() => {
              soundEngine.playChime();
              onOpenSchedule();
            }}
            className="mt-8 text-[11px] font-cinzel tracking-[0.32em] text-neutral-500 hover:text-amber-400 transition-colors"
          >
            OR SCHEDULE A CALL →
          </button>
        </Reveal>
      </div>
    </section>
  );
};
