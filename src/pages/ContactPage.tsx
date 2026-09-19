import React, { useState } from 'react';
import { ContactIntro } from '../components/contact/ContactIntro';
import { ChoosePath } from '../components/contact/ChoosePath';
import { ContactOptions } from '../components/contact/ContactOptions';
import { ProjectInquiryForm } from '../components/contact/ProjectInquiryForm';
import { ScheduleCallSection } from '../components/contact/ScheduleCallSection';
import { WhatHappensNext } from '../components/contact/WhatHappensNext';
import { ContactFinalCta } from '../components/contact/ContactFinalCta';
import { Reveal } from '../components/Reveal';
import { CONTACT } from '../data/site';

interface ContactPageProps {
  onOpenSchedule: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenSchedule }) => {
  const [selectedRequirement, setSelectedRequirement] = useState<string>('Website');

  const scrollToForm = (req?: string) => {
    if (req) {
      setSelectedRequirement(req);
    }
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative">
      {/* 1. Page Intro */}
      <ContactIntro onScrollToForm={() => scrollToForm()} />

      {/* 9. Choose Your Path */}
      <ChoosePath onSelectPath={(req) => scrollToForm(req)} />

      {/* Main Responsive Two-Column Interaction (Section 4, 2, 10, 15) */}
      <section className="relative z-10 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Desktop Left / Mobile Top Section */}
            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
              <Reveal>
                <div className="space-y-3">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500">
                    Direct Contact
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-[0.04em] text-white leading-tight">
                    <span className="block text-neutral-300">A DIRECT LINE</span>
                    <span className="block metallic-silver-text">TO THE BUILDERS.</span>
                  </h2>
                  <p className="text-sm sm:text-base font-cormorant italic text-neutral-400 pt-2 leading-relaxed">
                    We welcome projects with ambition — whether building from scratch, repositioning an
                    existing identity, or managing ongoing digital growth.
                  </p>
                </div>
              </Reveal>

              {/* Contact Options with Icons (Section 2 & 3) */}
              <Reveal delay={120}>
                <div className="space-y-3">
                  <p className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-neutral-500 mb-2">
                    Connect Directly
                  </p>
                  <ContactOptions />
                </div>
              </Reveal>

              {/* Brand Credo / Identity Block (Section 10) */}
              <Reveal delay={200}>
                <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                  <p className="text-xs font-cinzel font-bold tracking-[0.2em] text-white">
                    MANAGED BY LUNA
                  </p>
                  <p className="text-[9px] tracking-[0.34em] uppercase font-cinzel text-neutral-500 mt-1">
                    IDEAS <span className="text-amber-500/70 mx-1">•</span> STRATEGY{' '}
                    <span className="text-amber-500/70 mx-1">•</span> GROWTH
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/[0.05] text-[11px] space-y-1 text-neutral-400 font-mono">
                    <p>WhatsApp: {CONTACT.phoneDisplay}</p>
                    <p>Call: {CONTACT.phoneDisplay}</p>
                    <p>Email: {CONTACT.email}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Desktop Right / Mobile Middle Section: The Inquiry Form (Section 4, 5, 6) */}
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ProjectInquiryForm initialRequirement={selectedRequirement} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Schedule a Call Section */}
      <ScheduleCallSection onOpenSchedule={onOpenSchedule} />

      {/* 8. What Happens Next (Vertical timeline) */}
      <WhatHappensNext />

      {/* 12. Final CTA */}
      <ContactFinalCta onOpenSchedule={onOpenSchedule} />
    </div>
  );
};
