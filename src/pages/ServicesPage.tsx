import React from 'react';
import { Reveal } from '../components/Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';
import { soundEngine } from '../utils/audio';

interface ServicesPageProps {
  onOpenProject: () => void;
}

const WEBSITE_LIST = [
  'Luxury Websites',
  'Premium Websites',
  'Business Websites',
  'Portfolio Websites',
  'Landing Pages',
  'Classic Websites',
  'Aesthetic Websites',
  'Modern Websites',
  'Responsive Websites',
  'SEO-friendly Structure',
  'Custom UI',
  'Interactive Experiences',
];

const SOCIAL_LIST = [
  'Content Planning',
  '3 Reels / Week',
  '3 Posts / Week',
  '3 Carousels / Week',
  'Daily Stories',
  'SEO-focused captions',
  'Keyword strategy',
  'Hashtag strategy',
  'Community management',
  'Inquiry handling',
  'Lead handling',
  'Content scheduling',
  'Performance monitoring',
];

const EDITING_LIST = [
  'Reel editing',
  'Transitions',
  'Hooks',
  'Captions',
  'Subtitles',
  'Music synchronization',
  'Color correction',
  'Creative cuts',
  'Platform formatting',
  'Visual enhancement',
];

const ADS_LIST = [
  'Meta Ads',
  'Instagram Ads',
  'Boosted Posts',
  'Campaign Setup',
  'Creative Testing',
  'Audience Targeting',
  'Campaign Monitoring',
  'Lead-focused Campaigns',
  'Performance Tracking',
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenProject }) => {
  const go = useAppNavigate();

  return (
    <div className="relative z-10 pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold tracking-[0.05em] leading-[1.08]">
              <span className="block text-neutral-300">WHAT WE</span>
              <span className="block metallic-silver-text">ACTUALLY DO.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg font-cormorant italic text-neutral-400">
              Four disciplines. One system. Built around the identity of a business — not a template.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 Website Development */}
      <section id="website-development" className="relative py-16 md:py-24 border-t border-white/[0.06] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-5xl md:text-7xl font-cinzel font-bold text-white/10 leading-none">
                  01
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold tracking-[0.08em] text-white">
                  WEBSITE
                  <br />
                  DEVELOPMENT
                </h2>
                <p className="mt-6 text-base font-cormorant italic text-neutral-400 leading-relaxed max-w-md">
                  We don&apos;t build websites just to fill a screen.
                  <br />
                  We build digital experiences around the identity of a business.
                </p>
                <button
                  onClick={() => go('/website-services')}
                  className="mt-8 group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.26em] text-neutral-300 hover:text-white transition-colors"
                >
                  <span>VIEW WEBSITE SERVICES</span>
                  <span className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent group-hover:w-14 transition-all duration-500" />
                </button>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {WEBSITE_LIST.map((item) => (
                    <div
                      key={item}
                      className="bg-[#07050d] px-4 py-5 text-[11px] font-cinzel tracking-[0.12em] text-neutral-300 hover:bg-purple-950/30 hover:text-white transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Social Media */}
      <section id="social-media" className="relative py-16 md:py-24 border-t border-white/[0.06] scroll-mt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/20 via-transparent to-purple-950/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
          <Reveal>
            <span className="text-5xl md:text-7xl font-cinzel font-bold text-white/10 leading-none">
              02
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.06em] leading-[1.12]">
              <span className="block text-neutral-300">YOU CREATE.</span>
              <span className="block metallic-silver-text">WE HANDLE THE REST.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base font-cormorant italic text-neutral-400 leading-relaxed">
              Clients can provide their clips and raw content. Managed By Luna handles the digital execution —
              from planning and editing to publishing, community and inquiries.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {SOCIAL_LIST.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between py-3.5 border-b border-white/[0.07] text-sm text-neutral-300 font-sans"
                >
                  <span>{item}</span>
                  <span className="w-1 h-1 rounded-full bg-rose-500/80" />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <button
              onClick={() => go('/social-media')}
              className="mt-9 group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.26em] text-neutral-300 hover:text-white transition-colors"
            >
              <span>EXPLORE SOCIAL MEDIA MANAGEMENT</span>
              <span className="w-8 h-px bg-gradient-to-r from-rose-500 to-transparent group-hover:w-14 transition-all duration-500" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Content editing highlight */}
      <section id="content-creative" className="relative py-16 md:py-24 border-t border-white/[0.06] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-4">
                  Content editing
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.06em] leading-[1.12]">
                  <span className="block text-neutral-300">YOUR RAW CONTENT.</span>
                  <span className="block metallic-champagne-silver">OUR CREATIVE HAND.</span>
                </h2>
                <p className="mt-6 text-base font-cormorant italic text-neutral-400 leading-relaxed max-w-md">
                  For the higher social media service tier, the client can send raw photos, videos, clips and
                  footage. Managed By Luna handles the rest.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={80}>
                <div className="grid grid-cols-2 gap-3">
                  {EDITING_LIST.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 rounded-lg border border-white/[0.07] bg-white/[0.02] text-[11px] font-cinzel tracking-[0.14em] text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Content & Creative - short category block */}
      <section className="relative py-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
              <div>
                <span className="text-5xl md:text-6xl font-cinzel font-bold text-white/10 leading-none">
                  03
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-cinzel font-bold tracking-[0.1em] text-white">
                  CONTENT & CREATIVE
                </h2>
              </div>
              <p className="max-w-md text-sm font-cormorant italic text-neutral-400">
                Creative direction, visual content, editing and digital storytelling — so every frame serves
                the brand, not the algorithm alone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 Digital Advertising */}
      <section id="digital-growth" className="relative py-16 md:py-24 border-t border-white/[0.06] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <span className="text-5xl md:text-7xl font-cinzel font-bold text-white/10 leading-none">
              04
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.06em] leading-[1.12]">
              <span className="block text-neutral-300">PUT THE RIGHT CONTENT</span>
              <span className="block metallic-silver-text">IN FRONT OF THE RIGHT PEOPLE.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base font-cormorant italic text-neutral-400 leading-relaxed">
              Campaigns designed to support reach, engagement and lead generation — without promising what
              no one can honestly guarantee.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {ADS_LIST.map((item) => (
                <div
                  key={item}
                  className="bg-[#07050d] px-5 py-6 text-sm font-cinzel tracking-[0.12em] text-neutral-300 hover:text-white hover:bg-rose-950/20 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Organic + Paid */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
              <div className="border border-white/[0.08] p-8 bg-white/[0.02]">
                <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-purple-300/80 mb-5">
                  Organic
                </p>
                <ul className="space-y-3 text-sm font-cinzel tracking-[0.14em] text-neutral-300">
                  {['Content', 'SEO', 'Consistency', 'Engagement', 'Community'].map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center py-6">
                <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-600 mb-3">
                  Together
                </p>
                <p className="text-xl sm:text-2xl font-cinzel font-bold tracking-[0.12em] metallic-silver-text">
                  ONE DIGITAL
                  <br />
                  STRATEGY.
                </p>
                <span className="mt-4 mx-auto block w-8 h-px bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400" />
              </div>

              <div className="border border-white/[0.08] p-8 bg-white/[0.02]">
                <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-rose-300/80 mb-5">
                  Paid
                </p>
                <ul className="space-y-3 text-sm font-cinzel tracking-[0.14em] text-neutral-300">
                  {['Meta Ads', 'Instagram Ads', 'Boosted Posts', 'Campaign Distribution'].map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 text-center">
              <button
                onClick={() => {
                  soundEngine.playChime();
                  onOpenProject();
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/80 via-red-950/70 to-purple-950/80 border border-purple-500/40 hover:border-amber-400/70 text-[11px] font-cinzel tracking-[0.26em] text-white transition-all"
              >
                START A PROJECT
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
