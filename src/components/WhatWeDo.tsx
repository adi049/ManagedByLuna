import React from 'react';
import { Reveal } from './Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';

const SERVICES = [
  {
    num: '01',
    title: 'WEBSITE DEVELOPMENT',
    desc: 'Luxury, premium, classic, aesthetic and modern websites designed around the identity of a business.',
    path: '/website-services',
    visual: 'web',
  },
  {
    num: '02',
    title: 'SOCIAL MEDIA MANAGEMENT',
    desc: 'Content planning, reels, posts, carousels, stories, editing, SEO-focused content and community management.',
    path: '/social-media',
    visual: 'social',
  },
  {
    num: '03',
    title: 'CONTENT & CREATIVE',
    desc: 'Creative direction, visual content, editing and digital storytelling.',
    scrollTo: 'content-creative',
    visual: 'content',
  },
  {
    num: '04',
    title: 'DIGITAL GROWTH',
    desc: 'Meta Ads, Instagram Ads, boosted posts, organic strategy and paid distribution.',
    scrollTo: 'digital-growth',
    visual: 'growth',
  },
];

const ServiceVisual: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'web') {
    return (
      <svg viewBox="0 0 120 72" className="w-full h-16 text-white/25" fill="none">
        <rect x="8" y="10" width="104" height="52" rx="4" stroke="currentColor" strokeWidth="1" />
        <path d="M8 22h104" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="16" r="2" fill="rgba(168,85,247,0.7)" />
        <circle cx="26" cy="16" r="2" fill="rgba(244,63,94,0.6)" />
        <rect x="20" y="32" width="36" height="4" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="20" y="42" width="52" height="3" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="78" y="30" width="24" height="22" rx="2" stroke="currentColor" opacity="0.4" />
      </svg>
    );
  }
  if (type === 'social') {
    return (
      <svg viewBox="0 0 120 72" className="w-full h-16 text-white/25" fill="none">
        <rect x="38" y="8" width="44" height="56" rx="8" stroke="currentColor" />
        <circle cx="60" cy="30" r="10" stroke="rgba(244,63,94,0.7)" />
        <rect x="48" y="48" width="24" height="3" rx="1" fill="currentColor" opacity="0.4" />
        <circle cx="22" cy="24" r="3" fill="rgba(168,85,247,0.5)" />
        <circle cx="98" cy="40" r="2.5" fill="rgba(244,63,94,0.5)" />
        <circle cx="18" cy="50" r="2" fill="rgba(56,189,248,0.4)" />
      </svg>
    );
  }
  if (type === 'content') {
    return (
      <svg viewBox="0 0 120 72" className="w-full h-16 text-white/25" fill="none">
        <rect x="18" y="14" width="28" height="40" rx="2" stroke="currentColor" />
        <rect x="46" y="18" width="28" height="40" rx="2" stroke="rgba(202,166,105,0.6)" />
        <rect x="74" y="14" width="28" height="40" rx="2" stroke="currentColor" />
        <path d="M56 34l10 6-10 6v-12z" fill="rgba(244,63,94,0.55)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 72" className="w-full h-16 text-white/25" fill="none">
      <path d="M16 52 L40 36 L58 44 L88 18 L104 28" stroke="rgba(168,85,247,0.7)" strokeWidth="1.4" />
      <circle cx="40" cy="36" r="3" fill="rgba(244,63,94,0.7)" />
      <circle cx="88" cy="18" r="3" fill="rgba(202,166,105,0.8)" />
      <path d="M16 58h88" stroke="currentColor" opacity="0.25" />
    </svg>
  );
};

export const WhatWeDo: React.FC = () => {
  const go = useAppNavigate();

  return (
    <section id="what-we-do" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-14 md:mb-16">
            <span className="block text-neutral-300">FROM IDEA</span>
            <span className="block metallic-silver-text">TO DIGITAL PRESENCE.</span>
          </h2>
        </Reveal>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 70}>
              <button
                onClick={() => go(s.path ?? '/services', s.scrollTo)}
                className="group w-full grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 text-left items-center"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-sm md:text-base font-cinzel tracking-[0.18em] text-neutral-500 group-hover:text-amber-400 transition-colors">
                    {s.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-cinzel font-semibold tracking-[0.08em] text-white group-hover:text-amber-200 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 font-sans leading-relaxed max-w-lg">
                    {s.desc}
                  </p>
                </div>
                <div className="hidden md:block md:col-span-4 opacity-50 group-hover:opacity-90 transition-opacity">
                  <ServiceVisual type={s.visual} />
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <span className="text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10">
            <button
              onClick={() => go('/services')}
              className="group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.28em] text-neutral-300 hover:text-white transition-colors"
            >
              <span>EXPLORE SERVICES</span>
              <span className="w-8 h-px bg-gradient-to-r from-rose-500/80 to-transparent group-hover:w-14 transition-all duration-500" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
