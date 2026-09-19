import React, { useEffect, useRef, useState } from 'react';

interface CosmicBackgroundProps {
  isBlurred?: boolean;
  intensity?: number; // 0 to 1
  showCenterGlow?: boolean;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  color: string;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({
  isBlurred = false,
  intensity = 1,
  showCenterGlow = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    targetX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    targetY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const isMobile = width < 768;
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate stars (lightweight on mobile for 60fps performance)
    const starCount = isMobile
      ? Math.min(Math.floor((width * height) / 22000), 40)
      : Math.min(Math.floor((width * height) / 10000), 110);
    const stars: Star[] = [];

    const starColors = [
      'rgba(255, 255, 255, ',
      'rgba(240, 240, 255, ',
      'rgba(230, 220, 255, ', // faint purple-tinted star
      'rgba(215, 230, 255, ', // faint electric-blue tinted star
      'rgba(255, 235, 240, ', // faint red-tinted star
    ];

    for (let i = 0; i < starCount; i++) {
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.3 + 0.4, // tiny and elegant, strictly sub-2px
        speed: Math.random() * 0.25 + 0.08, // slow, gentle downward drift
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.04,
        color,
      });
    }

    let tick = 0;

    const render = () => {
      tick++;

      // Smooth mouse interpolation for subtle parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const parallaxX = (mouseRef.current.x - width / 2) * 0.0003;
      const parallaxY = (mouseRef.current.y - height / 2) * 0.0003;

      ctx.clearRect(0, 0, width, height);

      // Render Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Downward motion + tiny parallax (dampened if reduced motion preferred)
        s.y += prefersReducedMotion ? s.speed * 0.2 : s.speed;
        if (!prefersReducedMotion) {
          s.x += s.driftX + parallaxX * (s.size * 1.5);
          s.y += parallaxY * (s.size * 0.5);
        }

        // Wrap around smoothly
        if (s.y > height) {
          s.y = 0;
          s.x = Math.random() * width;
        } else if (s.y < 0) {
          s.y = height;
        }
        if (s.x > width) s.x = 0;
        else if (s.x < 0) s.x = width;

        // Twinkle calculation
        s.twinklePhase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha * (0.65 + 0.35 * Math.sin(s.twinklePhase)) * intensity;

        ctx.fillStyle = `${s.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional tiny specular flare on a few bright stars
        if (s.size > 1.2 && Math.sin(s.twinklePhase) > 0.8) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2, s.y);
          ctx.lineTo(s.x + s.size * 2, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2);
          ctx.lineTo(s.x, s.y + s.size * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden select-none z-0 transition-all duration-1000 ${
        isBlurred ? 'filter blur-md brightness-75 scale-105' : 'filter blur-0 brightness-100 scale-100'
      } ${className}`}
      style={{
        backgroundColor: '#030206',
      }}
    >
      {/* Canvas for fine stars and cosmic dust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Atmospheric purple haze layer */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.18) 0%, rgba(35, 11, 66, 0.08) 45%, transparent 75%)',
          filter: 'blur(80px)',
          opacity: showCenterGlow ? intensity : 0,
        }}
      />

      {/* Atmospheric crimson red haze layer */}
      <div
        className="absolute bottom-1/4 right-1/3 w-[700px] h-[550px] rounded-full pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(136, 19, 55, 0.14) 0%, rgba(80, 7, 24, 0.06) 50%, transparent 75%)',
          filter: 'blur(90px)',
          opacity: showCenterGlow ? intensity * 0.9 : 0,
        }}
      />

      {/* Subtle electric blue rim depth light */}
      <div
        className="absolute top-10 right-10 w-[450px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, rgba(3, 105, 161, 0.015) 50%, transparent 75%)',
          filter: 'blur(100px)',
          opacity: intensity * 0.7,
        }}
      />

      {/* Interactive cursor-following ambient luxury light */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-300 ease-out"
        style={{
          left: mousePos.x ? mousePos.x - 250 : '50%',
          top: mousePos.y ? mousePos.y - 250 : '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.045) 0%, rgba(225, 29, 72, 0.02) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Film grain overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay" />
    </div>
  );
};
