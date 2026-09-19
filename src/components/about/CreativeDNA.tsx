import React, { useEffect, useRef } from 'react';
import { Reveal, useInView } from '../Reveal';

interface Word {
  text: string;
  size: string;
  tone: 'plain' | 'silver' | 'gold' | 'outline';
  x: string; // horizontal nudge (translateX %)
  speed: number; // parallax factor
}

const WORDS: Word[] = [
  { text: 'WEB', size: 'text-4xl md:text-7xl', tone: 'silver', x: '0%', speed: 0.5 },
  { text: 'CONTENT', size: 'text-2xl md:text-4xl', tone: 'plain', x: '14%', speed: -0.35 },
  { text: 'DESIGN', size: 'text-3xl md:text-6xl', tone: 'outline', x: '-8%', speed: 0.28 },
  { text: 'PHOTOGRAPHY', size: 'text-3xl md:text-6xl', tone: 'gold', x: '6%', speed: -0.5 },
  { text: 'EDITING', size: 'text-2xl md:text-5xl', tone: 'plain', x: '-16%', speed: 0.4 },
  { text: 'SOCIAL', size: 'text-2xl md:text-4xl', tone: 'outline', x: '18%', speed: -0.25 },
  { text: 'STRATEGY', size: 'text-3xl md:text-6xl', tone: 'silver', x: '-4%', speed: 0.32 },
  { text: 'GROWTH', size: 'text-4xl md:text-7xl', tone: 'gold', x: '8%', speed: -0.45 },
];

const toneClass: Record<Word['tone'], string> = {
  plain: 'text-neutral-500',
  silver: 'metallic-silver-text',
  gold: 'metallic-champagne-silver',
  outline:
    'text-transparent [-webkit-text-stroke:1px_rgba(212,175,120,0.45)]',
};

export const CreativeDNA: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { ref: inViewRef, inView } = useInView<HTMLElement>(0.1);

  useEffect(() => {
    let raf = 0;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      const section = sectionRef.current;
      if (section && !reduce) {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // -1 (below) → 0 (centered) → 1 (above)
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        wordRefs.current.forEach((el, i) => {
          if (!el) return;
          const w = WORDS[i];
          el.style.transform = `translate3d(${w.x}, ${progress * w.speed * 60}px, 0)`;
        });
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="creative-dna"
      ref={(node) => {
        sectionRef.current = node;
        inViewRef.current = node;
      }}
      className="relative z-10 py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-10 md:mb-16 text-center">
            Our Creative DNA
          </p>
        </Reveal>

        <div
          className="relative max-w-4xl mx-auto select-none"
          style={{ opacity: inView ? 1 : 0.25, transition: 'opacity 1.1s ease' }}
        >
          {WORDS.map((w, i) => (
            <div
              key={w.text}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className={`font-cinzel font-bold tracking-[0.08em] leading-[1.05] py-2 md:py-3 text-center ${w.size} ${toneClass[w.tone]}`}
              style={{ willChange: 'transform' }}
            >
              {w.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
