import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/site';
import { Reveal } from './Reveal';
import { useAppNavigate } from '../hooks/useAppNavigate';

export const WebsiteWork: React.FC = () => {
  const go = useAppNavigate();

  return (
    <section id="website-work" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-5">
            Selected websites
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.05em] leading-[1.12]">
            <span className="block text-neutral-300">WE BUILD WEBSITES</span>
            <span className="block metallic-silver-text">PEOPLE REMEMBER.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg font-cormorant italic text-neutral-400 max-w-lg">
            A selection of websites created by Managed By Luna.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 border-t border-white/[0.07]">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 40}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"

                className="group relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 md:py-6 border-b border-white/[0.07] transition-colors focus-visible:ring-1 focus-visible:ring-amber-400 outline-none"
                aria-label={`${project.cta} — ${project.name} (${project.category})`}
              >
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-400/80 group-hover:w-full transition-all duration-700" />
                <span className="w-10 shrink-0 text-[11px] font-cinzel tracking-[0.2em] text-neutral-500 group-hover:text-amber-400 transition-colors">
                  {project.id}
                </span>
                <span className="flex-1 text-base sm:text-lg md:text-xl font-cinzel tracking-[0.1em] text-white group-hover:translate-x-1 transition-transform duration-500">
                  {project.name}
                </span>
                <span className="sm:w-56 text-[11px] tracking-[0.18em] uppercase font-cinzel text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {project.category}
                </span>
                <span className="sm:w-40 flex items-center justify-start sm:justify-end gap-1.5 text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-400 group-hover:text-amber-300 transition-colors">
                  {project.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10">
            <button
              onClick={() => go('/website-services')}
              className="group inline-flex items-center gap-3 text-[11px] font-cinzel tracking-[0.28em] text-neutral-300 hover:text-white transition-colors"
            >
              <span>EXPLORE WEBSITE SERVICES</span>
              <span className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent group-hover:w-14 transition-all duration-500" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
