import React from 'react';
import { MaskReveal, Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

const scrollToMember = (id: string) => {
  soundEngine.playChime();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

interface Member {
  id: string;
  index: string;
  first: string;
  last?: string;
  role: string;
  image: string;
  position: string;
  accent: string;
}

const MEMBERS: Member[] = [
  {
    id: 'aaditya',
    index: '01',
    first: 'AADITYA',
    last: '',
    role: 'FRONTEND DEVELOPER · WEBSITE MAKER',
    image: '/images/team/aaditya.jpg',
    position: '50% 35%',
    accent: 'from-purple-600/30',
  },
  {
    id: 'anupama',
    index: '02',
    first: 'ANUPAMA',
    last: '',
    role: 'THE CREATOR · STRATEGY PLANNER',
    image: '/images/team/anupama.jpg',
    position: '50% 63%',
    accent: 'from-rose-600/30',
  },
  {
    id: 'sanjukta',
    index: '03',
    first: 'SANJUKTA',
    role: 'PHOTOGRAPHER · EDITOR',
    image: '/images/team/sanjukta.jpg',
    position: '50% 45%',
    accent: 'from-amber-500/25',
  },
];

export const PortraitTriptych: React.FC = () => {
  return (
    <section className="relative z-10 pt-6 pb-10 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {MEMBERS.map((m, i) => (
            <MaskReveal
              key={m.id}
              delay={i * 420}
              direction="down"
              className={`group relative ${i === 1 ? 'md:translate-y-6' : ''} ${
                i === 2 ? 'md:translate-y-3' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => scrollToMember(m.id)}
                className="block w-full text-left relative aspect-[3/4] overflow-hidden bg-[#0a0712] portrait-grade"
                aria-label={`Meet ${m.first}`}
              >
                <img
                  src={m.image}
                  alt={`${m.first} ${m.last ?? ''}`.trim()}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[12%] contrast-[1.04] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
                  style={{ objectPosition: m.position }}
                />
                {/* thin border appears on hover */}
                <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-white/25 transition-all duration-500 pointer-events-none" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${m.accent} via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206]/85 via-transparent to-transparent pointer-events-none" />

                {/* editorial index */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-cinzel tracking-[0.35em] text-neutral-300/80">
                    {m.index}
                  </span>
                  <span className="h-px w-6 bg-white/30" />
                </div>

                {/* name + role */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-cinzel font-bold tracking-[0.1em] text-white/90 group-hover:text-white transition-colors duration-500 leading-none">
                    {m.first}
                  </h3>
                  {m.last && (
                    <h3 className="text-2xl md:text-3xl font-cinzel font-bold tracking-[0.1em] metallic-champagne-silver leading-none mt-1">
                      {m.last}
                    </h3>
                  )}
                  <p className="mt-3 max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-500 text-[9px] md:text-[10px] tracking-[0.24em] uppercase font-cinzel text-neutral-300">
                    {m.role}
                  </p>
                  <span className="mt-3 block h-px w-0 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-16 transition-all duration-700" />
                </div>
              </button>
            </MaskReveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-10 md:mt-14 flex justify-center">
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-600">
            One identity — revealed in sequence
          </p>
        </Reveal>
      </div>
    </section>
  );
};
