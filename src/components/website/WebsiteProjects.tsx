import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../Reveal';
import { WEBSITE_PROJECTS } from '../../data/site';
import { TypeGlyph } from './TypeGlyph';

const GLYPHS = ['custom', 'aesthetic', 'business', 'luxury', 'business', 'classic', 'creative', 'portfolio'] as const;

/** Compact horizontal editorial rows + a soft preview panel that follows the cursor (desktop only). */
export const WebsiteProjects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="website-work"
      className="relative z-10 py-24 md:py-32 border-t border-white/[0.06] scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12] mb-12 md:mb-16">
            <span className="block text-neutral-300">BUILT BY</span>
            <span className="block metallic-silver-text">MANAGED BY LUNA.</span>
          </h2>
        </Reveal>

        <div ref={wrapRef} onMouseMove={handleMove} className="relative border-t border-white/[0.07]">
          {/* cursor-following preview (desktop) */}
          <div
            className="hidden lg:block absolute z-20 pointer-events-none"
            style={{
              left: pos.x,
              top: pos.y,
              transform: 'translate(-115%, -50%)',
              opacity: hovered !== null ? 1 : 0,
              transition: 'opacity 420ms ease',
            }}
            aria-hidden
          >
            <div
              className="w-44 h-28 rounded-lg border border-white/12 bg-[#08060f]/92 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.95)] p-3 flex items-center justify-center"
              style={{
                transform: hovered !== null ? 'scale(1)' : 'scale(0.94)',
                transition: 'transform 420ms cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              {hovered !== null && <TypeGlyph kind={GLYPHS[hovered]} className="w-full h-full opacity-80" />}
            </div>
          </div>

          {WEBSITE_PROJECTS.map((p, i) => (
            <Reveal key={`${p.id}-${p.name}`} delay={i * 40}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"

                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 py-5 md:py-6 border-b border-white/[0.07] focus-visible:ring-1 focus-visible:ring-amber-400 outline-none"
                aria-label={`${p.cta} — ${p.name} (${p.category})`}
              >
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400/80 group-hover:w-full transition-all duration-700" />

                <span className="w-10 shrink-0 text-[11px] font-cinzel tracking-[0.2em] text-neutral-500 group-hover:text-amber-400 transition-colors">
                  {p.id}
                </span>

                <span className="flex-1 text-base sm:text-lg md:text-xl font-cinzel tracking-[0.1em] text-white group-hover:translate-x-1.5 transition-transform duration-500">
                  {p.name}
                </span>

                <span className="sm:w-52 text-[10px] tracking-[0.2em] uppercase font-cinzel text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {p.category}
                </span>

                <span className="sm:w-36 flex items-center sm:justify-end gap-1.5 text-[10px] tracking-[0.2em] uppercase font-cinzel text-neutral-400 group-hover:text-amber-300 transition-colors">
                  {p.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
