import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, FastForward } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export type IntroStep =
  | 'VOID' // 0: Pure black
  | 'PARTICLES_GLOW' // 1: Subtle particles & faint purple/red atmospheric light
  | 'LUNA_SPAWN' // 2: LUNA spawns in center (large, silver/metallic)
  | 'MANAGED_BY_REVEAL' // 3: MANAGED BY rises from below
  | 'LOGO_FORMATION' // 4: Crescent, M, star, gold ring establish official logo
  | 'CINEMATIC_BLUR' // 5: Composition slowly blurs, background blurs
  | 'VIDEO_REVEAL' // 6: Brand video emerges behind/through blur & takes full screen
  | 'VIDEO_TO_BLACK' // 7: Video fades to black, quiet atmospheric anticipation
  | 'LOGO_TO_HEADER' // 8: Logo shrinks and moves to top-left header
  | 'COMPLETE'; // 9: Intro complete, homepage active

interface CinematicIntroProps {
  onComplete: () => void;
  isCompleted: boolean;
  onReplayRequest?: () => void;
  headerLogoTargetRect?: DOMRect | null;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  onComplete,
  isCompleted,
  headerLogoTargetRect,
}) => {
  const [step, setStep] = useState<IntroStep>('VOID');
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);
  const [showSkip, setShowSkip] = useState<boolean>(false);
  const [flightProgress, setFlightProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Clear timers on unmount
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const addTimeout = (fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timeoutsRef.current.push(t);
    return t;
  };

  const toggleSound = () => {
    const newState = soundEngine.toggleMute();
    setIsAudioEnabled(newState);
  };

  // Skip directly to homepage
  const handleSkip = useCallback(() => {
    clearAllTimeouts();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setStep('COMPLETE');
    onComplete();
  }, [onComplete]);

  // Master Intro Sequence Orchestration
  useEffect(() => {
    if (isCompleted) {
      setStep('COMPLETE');
      return;
    }

    clearAllTimeouts();

    // Show skip button after 1.5s
    addTimeout(() => {
      setShowSkip(true);
    }, 1500);

    // Step 0: VOID (0ms - 1000ms)
    setStep('VOID');
    setFlightProgress(0);

    // Step 1: PARTICLES_GLOW (at 1000ms)
    addTimeout(() => {
      setStep('PARTICLES_GLOW');
      soundEngine.playAtmosphereDrone(4);
    }, 1000);

    // Step 2: LUNA_SPAWN (at 2600ms)
    addTimeout(() => {
      setStep('LUNA_SPAWN');
      soundEngine.playMetallicResonance();
    }, 2600);

    // Step 3: MANAGED_BY_REVEAL (at 4400ms)
    addTimeout(() => {
      setStep('MANAGED_BY_REVEAL');
    }, 4400);

    // Step 4: LOGO_FORMATION (at 6000ms)
    addTimeout(() => {
      setStep('LOGO_FORMATION');
      soundEngine.playChime();
    }, 6000);

    // Step 5: CINEMATIC_BLUR (at 8200ms)
    addTimeout(() => {
      setStep('CINEMATIC_BLUR');
      soundEngine.playTransitionSwell(2.5);
    }, 8200);

    // Step 6: VIDEO_REVEAL (at 10000ms)
    addTimeout(() => {
      setStep('VIDEO_REVEAL');
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        });
      }
    }, 10000);

    // Step 7: VIDEO_TO_BLACK (at 14800ms - video duration ~4.8s)
    addTimeout(() => {
      setStep('VIDEO_TO_BLACK');
      soundEngine.playAtmosphereDrone(3);
    }, 14800);

    // Step 8: LOGO_TO_HEADER (at 16400ms)
    addTimeout(() => {
      setStep('LOGO_TO_HEADER');
      soundEngine.playTransitionSwell(1.8);

      // Animate flight interpolation
      const startTime = performance.now();
      const flightDuration = 1400; // ms

      const animateFlight = (now: number) => {
        const elapsed = now - startTime;
        const rawProgress = Math.min(elapsed / flightDuration, 1);
        // Luxury cubic ease-out
        const eased = 1 - Math.pow(1 - rawProgress, 3);
        setFlightProgress(eased);

        if (rawProgress < 1) {
          requestAnimationFrame(animateFlight);
        } else {
          // Step 9: COMPLETE
          setStep('COMPLETE');
          onComplete();
        }
      };

      requestAnimationFrame(animateFlight);
    }, 16400);

    return () => {
      clearAllTimeouts();
    };
  }, [isCompleted, onComplete]);

  if (step === 'COMPLETE') {
    return null;
  }

  // Calculate coordinates for the Logo Flight to Header (Step 8)
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  // Center coordinates
  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;

  // Header target coordinates (fallback to top-left padding if rect not yet measured)
  const targetX = headerLogoTargetRect
    ? headerLogoTargetRect.left + headerLogoTargetRect.width / 2
    : windowWidth < 768
    ? 36
    : 140;
  const targetY = headerLogoTargetRect
    ? headerLogoTargetRect.top + headerLogoTargetRect.height / 2
    : 44;

  const currentX = centerX + (targetX - centerX) * flightProgress;
  const currentY = centerY + (targetY - centerY) * flightProgress;
  const currentScale = 1 - 0.76 * flightProgress; // Scale from 1 down to ~0.24

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#030206] select-none">
      {/* Audio & Skip Controls */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        {/* Audio Toggle */}
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-white/10 text-xs tracking-wider uppercase font-cinzel text-neutral-300 hover:text-white hover:border-purple-500/40 backdrop-blur-md transition-all duration-300"
          title="Toggle Cinematic Audio"
        >
          {isAudioEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">Audio On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Sound</span>
            </>
          )}
        </button>

        {/* Skip Button */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900/60 border border-white/10 text-xs tracking-widest uppercase font-cinzel text-neutral-300 hover:text-white hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 animate-fade-in"
          >
            <span>Skip</span>
            <FastForward className="w-3 h-3 text-neutral-400" />
          </button>
        )}
      </div>

      {/* Atmospheric Glow in Center (Develops during PARTICLES_GLOW and LUNA_SPAWN) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none transition-all duration-1000 ${
          step === 'VOID'
            ? 'opacity-0 scale-50'
            : step === 'VIDEO_REVEAL'
            ? 'opacity-0'
            : step === 'VIDEO_TO_BLACK'
            ? 'opacity-20 scale-75'
            : 'opacity-80 scale-100'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(109, 40, 217, 0.22) 0%, rgba(190, 18, 60, 0.15) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Central Sequence Layers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* 1. LUNA SPAWN (Starts at Step 2) */}
        {(step === 'LUNA_SPAWN' ||
          step === 'MANAGED_BY_REVEAL' ||
          step === 'LOGO_FORMATION' ||
          step === 'CINEMATIC_BLUR') && (
          <div
            className={`relative flex flex-col items-center justify-center text-center transition-all duration-1000 ${
              step === 'CINEMATIC_BLUR'
                ? 'filter blur-xl opacity-20 scale-110'
                : 'filter blur-0 opacity-100 scale-100'
            }`}
          >
            {/* Step 4: Circular Emblem / Crest materializes above text */}
            <div
              className={`relative mb-6 transition-all duration-1000 ${
                step === 'LOGO_FORMATION' || step === 'CINEMATIC_BLUR'
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
              }`}
            >
              {/* Outer soft blue and gold glow */}
              <div className="absolute inset-0 rounded-full bg-sky-500/15 blur-xl scale-110 animate-pulse" />
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-[0_0_50px_rgba(202,166,105,0.25)] border border-amber-400/30">
                <img
                  src="/images/managed_by_luna_logo.png"
                  alt="Managed By Luna Crest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 3: MANAGED BY rises upward */}
            <div
              className={`flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4 transition-all duration-1000 ${
                step === 'MANAGED_BY_REVEAL' ||
                step === 'LOGO_FORMATION' ||
                step === 'CINEMATIC_BLUR'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-neutral-400 to-neutral-200" />
              <span className="text-xs sm:text-sm md:text-base tracking-[0.38em] uppercase font-cinzel text-neutral-300 font-semibold drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                MANAGED BY
              </span>
              <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-neutral-400 to-neutral-200" />
            </div>

            {/* Step 2: Giant LUNA Metallic Letters */}
            <div className="relative">
              {/* Converging light particles effect */}
              {step === 'LUNA_SPAWN' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-96 h-32 bg-gradient-to-r from-purple-500/20 via-white/30 to-amber-400/20 blur-2xl animate-pulse" />
                </div>
              )}

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-bold tracking-[0.18em] metallic-silver-text drop-shadow-[0_4px_35px_rgba(255,255,255,0.3)] transition-all duration-1000 leading-none">
                LUNA
              </h1>
            </div>

            {/* Sub-tagline on full formation */}
            <div
              className={`mt-4 sm:mt-5 transition-all duration-1000 ${
                step === 'LOGO_FORMATION'
                  ? 'opacity-80 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}
            >
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.45em] uppercase font-cinzel text-neutral-400">
                IDEAS <span className="text-amber-400 mx-2">•</span> STRATEGY{' '}
                <span className="text-amber-400 mx-2">•</span> GROWTH
              </p>
            </div>
          </div>
        )}

        {/* Step 6: BRAND VIDEO REVEAL (Emerges behind/through blur and takes over full screen) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${
            step === 'VIDEO_REVEAL'
              ? 'opacity-100 scale-100'
              : step === 'VIDEO_TO_BLACK'
              ? 'opacity-0 scale-105 duration-1000'
              : 'opacity-0 scale-110'
          }`}
        >
          <video
            ref={videoRef}
            src="/videos/brand_intro.mp4"
            muted
            playsInline
            preload="metadata"
            poster="/images/luna_hero_artifact.png"
            onEnded={() => {
              if (step === 'VIDEO_REVEAL') {
                setStep('VIDEO_TO_BLACK');
              }
            }}
            onError={() => {
              // Graceful fallback if video fails to load or play
              if (step === 'VIDEO_REVEAL') {
                setStep('VIDEO_TO_BLACK');
              }
            }}
            className="w-full h-full object-cover"
          />

          {/* Deep cinematic overlay on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-[#030206] opacity-60" />
          <div className="absolute inset-0 bg-radial-vignette opacity-50" />
        </div>

        {/* Step 7: Video to Black anticipation state */}
        {step === 'VIDEO_TO_BLACK' && (
          <div className="absolute inset-0 bg-[#030206] flex items-center justify-center transition-opacity duration-1000">
            <div className="w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-pulse" />
          </div>
        )}

        {/* Step 8: CRITICAL LOGO FLIGHT TO TOP-LEFT HEADER */}
        {step === 'LOGO_TO_HEADER' && (
          <div
            className="fixed pointer-events-none z-50 flex items-center gap-3"
            style={{
              left: `${currentX}px`,
              top: `${currentY}px`,
              transform: `translate(-50%, -50%) scale(${currentScale})`,
              transformOrigin: 'center center',
            }}
          >
            {/* The exact official crest */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_60px_rgba(202,166,105,0.4)] border border-amber-400/40">
              <img
                src="/images/managed_by_luna_logo.png"
                alt="Managed By Luna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Atmospheric sequence stage indicator (Subtle cinematic cue at bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.4em] font-cinzel text-neutral-400/60">
          {step === 'VOID' && 'Initializing Digital Universe'}
          {step === 'PARTICLES_GLOW' && 'Deep Space Atmospheric Resonance'}
          {step === 'LUNA_SPAWN' && 'Forming Luna Identity'}
          {step === 'MANAGED_BY_REVEAL' && 'Managed By Luna'}
          {step === 'LOGO_FORMATION' && 'Official Brand Crest Established'}
          {step === 'CINEMATIC_BLUR' && 'Transitioning Spatial Matrix'}
          {step === 'VIDEO_REVEAL' && 'Cinematic Brand Emergence'}
          {step === 'VIDEO_TO_BLACK' && 'Preparing Homepage Reveal'}
          {step === 'LOGO_TO_HEADER' && 'Docking Brand to Navigation'}
        </span>
      </div>
    </div>
  );
};
