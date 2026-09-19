import React, { useEffect, useRef, useState } from 'react';

type Threshold = number;

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold: Threshold = 0.18,
  rootMargin = '0px 0px -8% 0px'
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 900,
  y = 28,
  blur = false,
  as = 'div',
  threshold = 0.15,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0,0,0)' : `translate3d(0, ${y}px, 0)`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : undefined,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms, filter ${duration}ms ${EASE} ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </Tag>
  );
};

type WipeDirection = 'down' | 'up' | 'right' | 'left';

interface MaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: WipeDirection;
  threshold?: number;
}

const INITIAL_INSET: Record<WipeDirection, string> = {
  down: 'inset(100% 0 0% 0)', // reveals top → bottom
  up: 'inset(0% 0 100% 0)', // reveals bottom → top
  right: 'inset(0 0 0% 100%)', // reveals left → right
  left: 'inset(0 100% 0% 0)', // reveals right → left
};

/**
 * Cinematic masked image wipe. The media is revealed through an animated
 * clip-path, with a slow scale settle. No aggressive motion.
 */
export const MaskReveal: React.FC<MaskRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1200,
  direction = 'down',
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="w-full h-full"
        style={{
          clipPath: inView ? 'inset(0% 0 0% 0)' : INITIAL_INSET[direction],
          transform: inView ? 'scale(1)' : 'scale(1.06)',
          transition: `clip-path ${duration}ms ${EASE} ${delay}ms, transform ${duration + 400}ms ${EASE} ${delay}ms`,
          willChange: 'clip-path, transform',
        }}
      >
        {children}
      </div>
      {/* Thin traveling reveal line */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(212,175,120,0.28) 50%, transparent 100%)',
          height: '30%',
          top: inView ? '70%' : '-30%',
          opacity: inView ? 0 : 1,
          transition: `top ${duration}ms ${EASE} ${delay}ms, opacity ${duration * 0.6}ms ease ${delay + duration * 0.5}ms`,
        }}
      />
    </div>
  );
};
