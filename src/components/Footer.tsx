import React from 'react';
import { OfficialBrandLogo } from './OfficialBrandLogo';
import { CONTACT, NAV_ITEMS } from '../data/site';
import { useAppNavigate } from '../hooks/useAppNavigate';

interface FooterProps {
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule }) => {
  const go = useAppNavigate();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#030206]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <div className="max-w-sm">
            <OfficialBrandLogo variant="header" />
            <p className="mt-5 text-[10px] tracking-[0.38em] uppercase font-cinzel text-neutral-500">
              IDEAS <span className="text-amber-500/70 mx-1.5">•</span> STRATEGY{' '}
              <span className="text-amber-500/70 mx-1.5">•</span> GROWTH
            </p>
            <p className="mt-4 text-sm text-neutral-400 font-cormorant italic leading-relaxed">
              A creative digital team helping businesses build a stronger presence — through websites, content, strategy and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-neutral-500 mb-4">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => go(item.path, item.scrollTo)}
                      className="text-xs text-neutral-400 hover:text-white font-cinzel tracking-[0.16em] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onOpenSchedule}
                    className="text-xs text-neutral-400 hover:text-amber-300 font-cinzel tracking-[0.16em] transition-colors"
                  >
                    SCHEDULE A CALL
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-neutral-500 mb-4">
                Contact
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-400 font-sans">
                <li>
                  <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-600">
            Managed By Luna
          </p>
          <p className="text-[10px] text-neutral-600 font-sans">
            Creative digital presence. Quietly precise.
          </p>
        </div>
      </div>
    </footer>
  );
};
