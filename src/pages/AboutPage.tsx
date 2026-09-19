import React from 'react';
import { Reveal } from '../components/Reveal';
import { PortraitTriptych } from '../components/about/PortraitTriptych';
import {
  MemberAaditya,
  MemberAnupama,
  MemberSanjukta,
} from '../components/about/Members';
import {
  TeamTransition,
  Approach,
  AboutCta,
} from '../components/about/AboutSections';
import { CreativeDNA } from '../components/about/CreativeDNA';

interface AboutPageProps {
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}

const AboutHero: React.FC = () => {
  return (
    <section className="relative z-10 pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden">
      {/* faint central atmospheric glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(136,19,55,0.12) 45%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <Reveal duration={1200} y={40} blur>
          <p className="text-[10px] tracking-[0.45em] uppercase font-cinzel text-neutral-500 mb-6">
            Managed By Luna · About
          </p>
        </Reveal>

        <Reveal duration={1400} y={48} blur delay={120}>
          <h1 className="font-cinzel font-bold tracking-[0.05em] leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-neutral-300">THE PEOPLE</span>
            <span className="block metallic-silver-text my-1 md:my-2">BEHIND</span>
            <span className="block metallic-champagne-silver">THE LUNA.</span>
          </h1>
        </Reveal>

        <Reveal duration={1100} y={28} delay={420}>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-14 bg-gradient-to-r from-rose-500/80 to-transparent" />
            <p className="text-base sm:text-lg font-cormorant italic text-neutral-400">
              Different strengths.
              <span className="mx-2 text-neutral-600">/</span>
              One creative direction.
            </p>
          </div>
        </Reveal>

        <Reveal duration={1000} y={20} delay={560}>
          <p className="mt-8 max-w-2xl text-sm sm:text-base text-neutral-500 font-sans leading-relaxed">
            Managed By Luna brings together different creative strengths under one digital identity —
            development, strategy, photography, editing, content and creative direction. These are the core
            members behind the work.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenProject,
  onOpenSchedule,
}) => {
  return (
    <div className="relative">
      <AboutHero />
      <PortraitTriptych />
      <MemberAaditya />
      <MemberAnupama />
      <MemberSanjukta />
      <TeamTransition />
      <Approach />
      <CreativeDNA />
      <AboutCta onOpenProject={onOpenProject} onOpenSchedule={onOpenSchedule} />
    </div>
  );
};
