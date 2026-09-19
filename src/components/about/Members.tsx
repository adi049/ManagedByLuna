import React from 'react';
import { Aperture, Camera, Code2, Sparkles } from 'lucide-react';
import { Reveal, MaskReveal } from '../Reveal';

/* ---------- shared portrait media ---------- */

interface PortraitProps {
  src: string;
  alt: string;
  objectPosition: string;
  className?: string;
  delay?: number;
}

const PortraitMedia: React.FC<PortraitProps> = ({
  src,
  alt,
  objectPosition,
  className = '',
  delay = 0,
}) => (
  <MaskReveal className={className} delay={delay} direction="down" threshold={0.25}>
    <div className="relative w-full h-full portrait-grade bg-[#0a0712]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[1.04] transition-transform duration-[1500ms] ease-out hover:scale-[1.02] group-hover:scale-[1.02]"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-white/25 transition-all duration-700 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay pointer-events-none" />
    </div>
  </MaskReveal>
);

const Tag: React.FC<{ children: React.ReactNode; mono?: boolean }> = ({ children, mono }) => (
  <span
    className={`px-2.5 py-1 border border-white/[0.09] bg-white/[0.02] text-[10px] tracking-[0.14em] uppercase text-neutral-400 ${
      mono ? 'font-mono' : 'font-cinzel'
    }`}
  >
    {children}
  </span>
);

/* =================================================================
   MEMBER 01 — AADITYA
   Large portrait, dark cinematic, purple/red ambient light
   ================================================================= */

const AADITYA_FOCUS = [
  'Frontend Development',
  'Website Development',
  'UI Implementation',
  'Creative Web Experiences',
  'AI-assisted workflows',
];

const AADITYA_STACK = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Python',
  'C++',
  'SQL',
  'Git & GitHub',
];

export const MemberAaditya: React.FC = () => {
  return (
    <section id="aaditya" className="relative py-20 md:py-32 border-t border-white/[0.06] scroll-mt-28">
      <div className="absolute left-0 top-1/4 w-[420px] h-[420px] rounded-full bg-purple-800/15 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-10 w-[300px] h-[300px] rounded-full bg-rose-900/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <div className="lg:col-span-7">
            <div className="group relative max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/25 via-transparent to-rose-950/25 blur-2xl opacity-70 pointer-events-none" />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-3 pointer-events-none">
                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-300/80">01 / DIGITAL BUILDER</span>
              </div>
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                <Code2 className="w-5 h-5 text-purple-300/70" strokeWidth={1.25} />
              </div>
              <PortraitMedia
                src={`${import.meta.env.BASE_URL}images/team/aaditya.jpg`}
                alt="Aaditya — Frontend Developer and Website Maker at Managed By Luna"
                objectPosition="50% 35%"
                className="relative aspect-[4/5] w-full border border-white/[0.08] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
              />
              <span className="absolute -left-3 top-10 h-24 w-px bg-gradient-to-b from-purple-500/70 to-transparent pulse-line" />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal delay={150}>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-purple-300/80 mb-4">
                01 — Developer
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-[0.03em] leading-[0.9]">
                <span className="block text-white">AADITYA</span>
                
              </h2>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-purple-500 to-transparent" />
              <p className="mt-5 text-[11px] tracking-[0.28em] uppercase font-cinzel text-neutral-300">
                Frontend Developer
              </p>
              <p className="text-[11px] tracking-[0.28em] uppercase font-cinzel text-amber-300/85">
                Website Maker
              </p>
              <p className="mt-3 text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-600">
                B.Tech Student · Footballer
              </p>
            </Reveal>

            <Reveal delay={420}>
              <p className="mt-7 text-base sm:text-lg font-cormorant text-neutral-300 leading-relaxed">
                A frontend developer focused on turning ideas into modern, responsive and visually strong
                digital experiences. He reads a layout the way he reads the pitch — timing, space, and the
                details most people only feel.
              </p>
            </Reveal>

            <Reveal delay={540}>
              <div className="mt-8">
                <p className="text-[9px] tracking-[0.34em] uppercase font-cinzel text-neutral-500 mb-3">
                  Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {AADITYA_FOCUS.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={640}>
              <div className="mt-6">
                <p className="text-[9px] tracking-[0.34em] uppercase font-cinzel text-neutral-500 mb-3">
                  The Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {AADITYA_STACK.map((s) => (
                    <Tag key={s} mono>
                      {s}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =================================================================
   MEMBER 02 — ANUPAMA
   Portrait one side, oversized typography crossing the composition
   ================================================================= */

const ANUPAMA_FOCUS = [
  'Creative Planning',
  'Content Strategy',
  'Storytelling',
  'Research',
  'Content Direction',
  'Creative Ideas',
  'Planning',
  'Photography',
  'Editorial Thinking',
];

export const MemberAnupama: React.FC = () => {
  return (
    <section id="anupama" className="relative py-20 md:py-32 border-t border-white/[0.06] scroll-mt-28 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[420px] h-[420px] rounded-full bg-rose-900/20 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 bottom-0 w-[300px] h-[300px] rounded-full bg-purple-800/15 blur-3xl pointer-events-none" />

      {/* oversized ghost typography crossing the composition */}
      <div className="pointer-events-none absolute inset-x-0 top-10 hidden lg:flex justify-center overflow-hidden">
        <span className="text-[15vw] leading-none font-cinzel font-bold text-white/[0.025] tracking-tight select-none whitespace-nowrap">
          CREATOR
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait — right on desktop */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-rose-900/25 via-transparent to-purple-900/20 blur-2xl opacity-70 pointer-events-none" />
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <Sparkles className="w-5 h-5 text-rose-300/70" strokeWidth={1.25} />
              </div>
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-300/80">
                  02 / STRATEGY · STORY
                </span>
              </div>
              <PortraitMedia
                src={`${import.meta.env.BASE_URL}images/team/anupama.jpg`}
                alt="Anupama — Creative Strategist and Kathak Teacher at Managed By Luna"
                objectPosition="50% 63%"
                className="relative aspect-[3/4] w-full border border-white/[0.08] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
                delay={80}
              />
              <span className="absolute -right-3 top-10 h-24 w-px bg-gradient-to-b from-rose-500/70 to-transparent pulse-line" />
            </div>
          </div>

          {/* Copy — left on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1 lg:pr-4">
            <Reveal delay={150}>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-rose-300/80 mb-4">
                02 — Creator
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-[0.03em] leading-[0.9]">
                <span className="block text-white">ANUPAMA</span>
                
              </h2>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-rose-500 to-transparent" />
              <p className="mt-5 text-[11px] tracking-[0.28em] uppercase font-cinzel text-neutral-300">
                The Creator
              </p>
              <p className="text-[11px] tracking-[0.28em] uppercase font-cinzel text-amber-300/85">
                Strategy Planner
              </p>
              <p className="mt-3 text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-600">
                Life Science Student · Kathak Dancer · Kathak Teacher
              </p>
            </Reveal>

            <Reveal delay={420}>
              <p className="mt-7 text-base sm:text-lg font-cormorant text-neutral-300 leading-relaxed max-w-lg">
                A creative planner who brings strategy, ideas, storytelling and thoughtful direction into the
                work. Her Kathak practice — as dancer and teacher — is part of the same creative discipline:
                rhythm, research, intention, and shaping a narrative until it holds.
              </p>
            </Reveal>

            <Reveal delay={540}>
              <div className="mt-8 max-w-md border-t border-white/[0.07]">
                {ANUPAMA_FOCUS.map((s) => (
                  <div
                    key={s}
                    className="flex items-center justify-between py-2.5 border-b border-white/[0.07] group/row"
                  >
                    <span className="text-[11px] tracking-[0.18em] uppercase font-cinzel text-neutral-400 group-hover/row:text-neutral-200 transition-colors">
                      {s}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-rose-500/70" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =================================================================
   MEMBER 03 — SANJUKTA
   Image-led, film-frame inspired, photography-oriented
   ================================================================= */

const SANJUKTA_FOCUS = [
  'Photography',
  'Fashion Photography',
  'Photo Editing',
  'Video Editing',
  'Visual Composition',
  'Creative Direction',
  'Fashion Content',
  'Visual Storytelling',
];

export const MemberSanjukta: React.FC = () => {
  return (
    <section id="sanjukta" className="relative py-20 md:py-32 border-t border-white/[0.06] scroll-mt-28 overflow-hidden">
      <div className="absolute left-1/3 top-10 w-[420px] h-[420px] rounded-full bg-rose-900/18 blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-[320px] h-[320px] rounded-full bg-purple-800/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Single, smaller portrait */}
          <div className="lg:col-span-5 lg:order-2 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[390px] md:max-w-[430px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/15 via-transparent to-purple-900/25 blur-2xl opacity-70 pointer-events-none" />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                <Camera className="w-4 h-4 text-amber-300/80" strokeWidth={1.25} />
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-neutral-300/85">
                  03 / VISUAL · EDITORIAL
                </span>
              </div>
              <PortraitMedia
                src={`${import.meta.env.BASE_URL}images/team/sanjukta.jpg`}
                alt="Sanjukta — Photographer and Editor at Managed By Luna"
                objectPosition="50% 45%"
                className="relative aspect-[4/5] w-full border border-white/[0.08] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
                delay={120}
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-300/80">FASHION · EDITING</span>
                <Aperture className="w-4 h-4 text-purple-300/80" strokeWidth={1.25} />
              </div>
              <span className="absolute -right-3 top-10 h-24 w-px bg-gradient-to-b from-amber-400/70 to-transparent pulse-line" />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 lg:order-1">
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-amber-300/80 mb-4">
                03 — Visual
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-[0.03em] leading-[0.9]">
                <span className="block text-white">SANJUKTA</span>
              </h2>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-amber-400 to-transparent" />
              <p className="mt-5 text-[11px] tracking-[0.28em] uppercase font-cinzel text-neutral-300">
                Photographer
              </p>
              <p className="text-[11px] tracking-[0.28em] uppercase font-cinzel text-amber-300/85">
                Editor
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-xl leading-relaxed">
                She frames light, crop and colour as language — fashion, editorial and motion held inside a
                single frame.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 max-w-xl flex flex-wrap gap-2">
                {SANJUKTA_FOCUS.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
