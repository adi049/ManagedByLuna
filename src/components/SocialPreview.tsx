import React from 'react';
import { Reveal } from './Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';

const ITEMS = [
  'Content Planning',
  'Reels · Posts · Carousels',
  'Daily Stories',
  'Community & Inquiries',
];

export const SocialPreview: React.FC = () => {
  const go = useAppNavigate();

  return (
    <section id="social-preview" className="relative z-10 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
                Social media
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.06em] leading-[1.12]">
                <span className="block text-neutral-300">YOU CREATE.</span>
                <span className="block metallic-silver-text">WE HANDLE THE REST.</span>
              </h2>
              <p className="mt-6 text-base font-cormorant italic text-neutral-400 max-w-lg leading-relaxed">
                Clients can provide their clips and raw content. Managed By Luna handles the digital execution — planning, editing, publishing and conversation.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <button
                onClick={() => go('/social-media')}
                className="mt-8 group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.28em] text-neutral-300 hover:text-white transition-colors"
              >
                <span>EXPLORE SOCIAL MEDIA</span>
                <span className="w-8 h-px bg-gradient-to-r from-rose-500/80 to-transparent group-hover:w-14 transition-all duration-500" />
              </button>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <ul className="space-y-0 border-t border-white/[0.07]">
                {ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-4 border-b border-white/[0.07] text-sm font-cinzel tracking-[0.14em] text-neutral-300"
                  >
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
