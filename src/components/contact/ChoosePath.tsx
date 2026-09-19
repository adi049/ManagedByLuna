import React from 'react';
import { ArrowDownRight, Globe, Share2, Layers } from 'lucide-react';
import { Reveal } from '../Reveal';
import { soundEngine } from '../../utils/audio';

interface ChoosePathProps {
  onSelectPath: (requirement: string) => void;
}

const PATHS = [
  {
    id: 'website',
    tag: 'Path 01',
    title: 'I NEED A WEBSITE',
    desc: 'For businesses that need a premium digital presence.',
    requirementValue: 'Website',
    icon: Globe,
    accent: 'hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(109,40,217,0.22)]',
    badge: 'Digital Architecture',
  },
  {
    id: 'social',
    tag: 'Path 02',
    title: 'I NEED SOCIAL MEDIA HELP',
    desc: 'For businesses that want their content and social presence managed.',
    requirementValue: 'Social Media Management',
    icon: Share2,
    accent: 'hover:border-rose-500/50 hover:shadow-[0_0_35px_rgba(136,19,55,0.22)]',
    badge: 'Growth & Curation',
  },
  {
    id: 'both',
    tag: 'Path 03',
    title: 'I NEED BOTH',
    desc: 'For businesses looking for a complete digital presence.',
    requirementValue: 'Website + Social Media',
    icon: Layers,
    accent: 'hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(202,166,105,0.22)]',
    badge: 'Full System',
  },
];

export const ChoosePath: React.FC<ChoosePathProps> = ({ onSelectPath }) => {
  return (
    <section className="relative z-10 py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-3">
                Starting Point
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em]">
                <span className="text-neutral-300">WHAT BRINGS</span>{' '}
                <span className="metallic-silver-text">YOU HERE?</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
              Select your primary objective to pre-fill your inquiry scope.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATHS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.id} delay={i * 90}>
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playChime();
                    onSelectPath(p.requirementValue);
                  }}
                  className={`group relative w-full h-full text-left p-7 sm:p-8 rounded-2xl bg-[#07050e]/75 border border-white/[0.08] backdrop-blur-md transition-all duration-500 overflow-hidden ${p.accent}`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-mono tracking-[0.28em] text-neutral-500 uppercase">
                      {p.tag}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase font-cinzel text-amber-300/80 px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]">
                      {p.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-neutral-300 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.4} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold tracking-[0.08em] text-white group-hover:text-amber-200 transition-colors mb-3">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-8">
                    {p.desc}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-500 group-hover:text-white transition-colors">
                    <span>SELECT OBJECTIVE</span>
                    <ArrowDownRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
