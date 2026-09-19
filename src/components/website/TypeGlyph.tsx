import React from 'react';
import type { WebsiteType } from '../../data/site';

/** Tiny abstract wireframe previews — no stock imagery, no screenshots. */
export const TypeGlyph: React.FC<{ kind: WebsiteType['glyph']; className?: string }> = ({
  kind,
  className = 'w-full h-full',
}) => {
  const stroke = 'rgba(255,255,255,0.28)';
  const accent = 'rgba(244,63,94,0.55)';
  const violet = 'rgba(168,85,247,0.55)';
  const gold = 'rgba(212,175,120,0.6)';

  const common = { fill: 'none', strokeWidth: 1 } as const;

  return (
    <svg viewBox="0 0 120 78" className={className} {...common}>
      {kind === 'business' && (
        <>
          <rect x="10" y="12" width="100" height="54" rx="3" stroke={stroke} />
          <path d="M10 24h100" stroke={stroke} />
          <rect x="18" y="32" width="34" height="4" rx="1" fill={violet} />
          <rect x="18" y="42" width="48" height="3" rx="1" fill={stroke} />
          <rect x="18" y="50" width="26" height="6" rx="3" stroke={gold} />
          <rect x="76" y="32" width="26" height="24" rx="2" stroke={stroke} />
        </>
      )}
      {kind === 'luxury' && (
        <>
          <rect x="10" y="12" width="100" height="54" rx="3" stroke={gold} />
          <path d="M34 66V30a26 26 0 0152 0v36" stroke={stroke} />
          <circle cx="60" cy="30" r="9" stroke={gold} />
          <path d="M44 58h32" stroke={accent} />
        </>
      )}
      {kind === 'classic' && (
        <>
          <rect x="10" y="12" width="100" height="54" rx="2" stroke={stroke} />
          <path d="M28 28h64M28 38h64M28 48h44" stroke={stroke} />
          <path d="M28 20h20" stroke={gold} />
        </>
      )}
      {kind === 'aesthetic' && (
        <>
          <rect x="12" y="16" width="44" height="46" rx="2" stroke={violet} />
          <rect x="62" y="16" width="46" height="21" rx="2" stroke={stroke} />
          <rect x="62" y="41" width="46" height="21" rx="2" stroke={accent} />
          <circle cx="34" cy="34" r="8" stroke={gold} />
        </>
      )}
      {kind === 'portfolio' && (
        <>
          <rect x="10" y="14" width="30" height="24" rx="2" stroke={stroke} />
          <rect x="45" y="14" width="30" height="24" rx="2" stroke={violet} />
          <rect x="80" y="14" width="30" height="24" rx="2" stroke={stroke} />
          <rect x="10" y="44" width="30" height="20" rx="2" stroke={accent} />
          <rect x="45" y="44" width="65" height="20" rx="2" stroke={stroke} />
        </>
      )}
      {kind === 'landing' && (
        <>
          <rect x="10" y="12" width="100" height="54" rx="3" stroke={stroke} />
          <rect x="30" y="24" width="60" height="5" rx="2" fill={stroke} />
          <rect x="38" y="35" width="44" height="3" rx="1" fill={stroke} opacity="0.6" />
          <rect x="46" y="46" width="28" height="9" rx="4.5" stroke={accent} />
          <path d="M60 60v6" stroke={gold} />
        </>
      )}
      {kind === 'creative' && (
        <>
          <path d="M14 62C30 20 48 66 62 34s28 18 44-16" stroke={violet} />
          <circle cx="62" cy="34" r="3.2" fill={accent} />
          <circle cx="24" cy="44" r="2.4" fill={gold} />
          <rect x="10" y="12" width="100" height="54" rx="3" stroke={stroke} opacity="0.5" />
        </>
      )}
      {kind === 'custom' && (
        <>
          <rect x="10" y="12" width="100" height="54" rx="3" stroke={stroke} />
          <path d="M40 12v54M10 39h30" stroke={stroke} opacity="0.7" />
          <rect x="48" y="20" width="24" height="14" rx="2" stroke={violet} />
          <rect x="78" y="20" width="24" height="14" rx="2" stroke={gold} />
          <rect x="48" y="42" width="54" height="16" rx="2" stroke={accent} />
        </>
      )}
    </svg>
  );
};
