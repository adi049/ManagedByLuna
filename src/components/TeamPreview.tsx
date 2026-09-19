import React from 'react';
import { Reveal } from './Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';

const MEMBERS = [
  {
    name: 'AADITYA',
    last: '',
    role: 'Frontend Developer · Website Maker',
    image: '/images/team/aaditya.jpg',
    position: '50% 35%',
    accent: 'from-purple-500/40',
  },
  {
    name: 'ANUPAMA',
    last: '',
    role: 'The Creator · Strategy Planner',
    image: '/images/team/anupama.jpg',
    position: '50% 63%',
    accent: 'from-rose-500/40',
  },
  {
    name: 'SANJUKTA',
    last: '',
    role: 'Photographer · Editor',
    image: '/images/team/sanjukta.jpg',
    position: '50% 45%',
    accent: 'from-amber-400/30',
  },
];

export const TeamPreview: React.FC = () => {
  const go = useAppNavigate();

  return (
    <section id="team-preview" className="relative z-10 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-4">
                Core members
              </p>
              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold tracking-[0.06em]">
                <span className="text-neutral-300">THREE MINDS.</span>
                <span className="block metallic-silver-text">ONE DIRECTION.</span>
              </h2>
            </div>
            <button
              onClick={() => go('/about')}
              className="group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.28em] text-neutral-300 hover:text-white transition-colors"
            >
              <span>MEET THE TEAM</span>
              <span className="w-8 h-px bg-gradient-to-r from-amber-400/80 to-transparent group-hover:w-14 transition-all duration-500" />
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <button
                onClick={() => go('/about')}
                className="group relative w-full text-left overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0712]">
                    <img
                      src={m.image}
                      alt={`${m.name} ${m.last}`.trim()}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[12%] contrast-[1.03] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                      style={{ objectPosition: m.position }}
                    />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.accent} via-transparent to-transparent opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-[#030206]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] tracking-[0.28em] uppercase font-cinzel text-neutral-400 mb-1">
                      {m.role}
                    </p>
                    <h3 className="text-xl font-cinzel font-bold tracking-[0.12em] text-white">
                      {m.name} {m.last}
                    </h3>
                    <span className="mt-3 block h-px w-8 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
