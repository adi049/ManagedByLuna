import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { CONTACT } from '../../data/site';
import { soundEngine } from '../../utils/audio';

export const ContactOptions: React.FC<{ className?: string }> = ({ className = '' }) => {
  const options = [
    {
      id: 'whatsapp',
      title: 'WHATSAPP',
      value: CONTACT.phoneDisplay,
      href: CONTACT.whatsapp,
      isExternal: true,
      sub: 'Direct instant messaging & quick briefs',
      icon: <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />,
      accent: 'hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.02]',
    },
    {
      id: 'call',
      title: 'CALL DIRECT',
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneTel}`,
      isExternal: false,
      sub: 'Mon–Sat · Strategic phone consultation',
      icon: <Phone className="w-4 h-4 text-amber-400" />,
      accent: 'hover:border-amber-400/40 hover:bg-amber-400/[0.02]',
    },
    {
      id: 'email',
      title: 'EMAIL INQUIRY',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      isExternal: false,
      sub: 'Formal briefs, assets & detailed requests',
      icon: <Mail className="w-4 h-4 text-purple-300" />,
      accent: 'hover:border-purple-400/40 hover:bg-purple-400/[0.02]',
    },
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((opt) => (
        <a
          key={opt.id}
          href={opt.href}
          target={opt.isExternal ? '_blank' : undefined}
          rel={opt.isExternal ? 'noopener noreferrer' : undefined}
          onClick={() => soundEngine.playChime()}
          className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#07050e]/60 backdrop-blur-md transition-all duration-300 ${opt.accent}`}
          aria-label={`${opt.title} at ${opt.value}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
              {opt.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-cinzel font-semibold tracking-[0.2em] text-white">
                  {opt.title}
                </span>
                <span className="text-neutral-500 text-xs">•</span>
                <span className="text-xs font-mono text-neutral-300">{opt.value}</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans mt-0.5">{opt.sub}</p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/25 transition-colors shrink-0 ml-3">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      ))}
    </div>
  );
};
