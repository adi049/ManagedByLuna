import React from 'react';

export interface OfficialBrandLogoProps {
  variant?: 'full' | 'crest-only' | 'text-only' | 'header';
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'massive';
  className?: string;
  showTagline?: boolean;
  activeStage?: 'luna-only' | 'managed-by-luna' | 'full-crest' | 'blurred';
  imageFallback?: boolean;
}

export const OfficialBrandLogo: React.FC<OfficialBrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = true,
  activeStage = 'full-crest',
}) => {
  // Size mapping
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    hero: 'w-56 h-56 md:w-72 md:h-72',
    massive: 'w-72 h-72 md:w-96 md:h-96',
  };

  // If activeStage is luna-only or managed-by-luna, render typography stage
  if (activeStage === 'luna-only') {
    return (
      <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-bold tracking-[0.18em] metallic-champagne-silver drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
          LUNA
        </h1>
      </div>
    );
  }

  if (activeStage === 'managed-by-luna') {
    return (
      <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
        {/* Managed By with flanking horizontal rules */}
        <div className="flex items-center gap-3 sm:gap-6 mb-3 sm:mb-4 animate-fade-in">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-neutral-400/60 to-neutral-400" />
          <span className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase font-cinzel text-neutral-300 font-semibold">
            MANAGED BY
          </span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-neutral-400/60 to-neutral-400" />
        </div>

        {/* Giant LUNA */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-bold tracking-[0.18em] metallic-champagne-silver drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
          LUNA
        </h1>
      </div>
    );
  }

  if (variant === 'crest-only') {
    return (
      <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
        <img
          src="/images/managed_by_luna_logo.png"
          alt="Managed By Luna Official Crest"
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(202,166,105,0.25)] select-none pointer-events-none"
        />
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
        {/* Docked official crest */}
        <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full p-[1px] bg-gradient-to-tr from-amber-400/40 via-white/20 to-sky-400/30 shadow-[0_0_15px_rgba(202,166,105,0.2)]">
          <div className="w-full h-full rounded-full bg-[#030206] flex items-center justify-center overflow-hidden">
            <img
              src="/images/managed_by_luna_logo.png"
              alt="Managed By Luna Logo"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Brand typographic signature */}
        <div className="flex flex-col text-left">
          <span className="text-[8px] md:text-[9px] tracking-[0.32em] uppercase font-cinzel text-neutral-400 font-medium leading-none">
            Managed By
          </span>
          <span className="text-sm md:text-base font-cinzel font-bold tracking-[0.16em] uppercase metallic-champagne-silver leading-tight mt-0.5">
            Luna
          </span>
        </div>
      </div>
    );
  }

  // Full composite for the cinematic reveal
  return (
    <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Official circular emblem */}
      <div className={`relative ${sizeMap[size]} mb-2`}>
        {/* Subtle electric blue rim glow */}
        <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-xl scale-110 pointer-events-none" />

        {/* Ambient warm champagne glow */}
        <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        <img
          src="/images/managed_by_luna_logo.png"
          alt="Managed By Luna Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] relative z-10"
        />
      </div>

      {showTagline && (
        <div className="mt-3 text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-400 font-cinzel opacity-80">
          IDEAS <span className="text-amber-500/60 mx-1.5">•</span> STRATEGY{' '}
          <span className="text-amber-500/60 mx-1.5">•</span> GROWTH
        </div>
      )}
    </div>
  );
};
