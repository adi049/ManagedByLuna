import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CONTACT } from '../data/site';

interface StickyContactProps {
  visible?: boolean;
}

const actions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: CONTACT.whatsapp,
    color: 'hover:text-[#25D366] hover:border-[#25D366]/40',
    icon: <WhatsAppIcon className="w-[18px] h-[18px]" />,
  },
  {
    id: 'call',
    label: 'Call',
    href: `tel:${CONTACT.phoneTel}`,
    color: 'hover:text-amber-300 hover:border-amber-400/40',
    icon: <Phone className="w-4 h-4" />,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${CONTACT.email}`,
    color: 'hover:text-purple-300 hover:border-purple-400/40',
    icon: <Mail className="w-4 h-4" />,
  },
];

export const StickyContact: React.FC<StickyContactProps> = ({ visible = true }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  if (!visible) return null;

  return (
    <div className="fixed z-40 right-3 sm:right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] flex flex-col items-end gap-2.5 pointer-events-auto">
      {actions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          target={action.id === 'whatsapp' ? '_blank' : undefined}
          rel={action.id === 'whatsapp' ? 'noopener noreferrer' : undefined}

          onMouseEnter={() => setHovered(action.id)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(action.id)}
          onBlur={() => setHovered(null)}
          className={`relative group flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#07050d]/90 backdrop-blur-xl border border-white/10 text-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.55)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${action.color}`}
          aria-label={`${action.label} Managed By Luna`}
        >
          {action.icon}
          <span
            className={`pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#0c0914] border border-white/10 text-[10px] tracking-[0.22em] uppercase font-cinzel text-neutral-200 whitespace-nowrap transition-all duration-300 ${
              hovered === action.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};
