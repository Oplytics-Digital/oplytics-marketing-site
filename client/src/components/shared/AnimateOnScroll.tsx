/**
 * TASK-22: AnimateOnScroll — Framer Motion scroll entrance animations
 * Design: "Neon Operations" — subtle, performant entrance animations
 *
 * Variants: fade-in, slide-up, slide-left, slide-right, scale-in
 * Respects prefers-reduced-motion automatically (Framer Motion built-in).
 * Max delay 300ms, no layout shift (uses opacity + transform only).
 */
import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';

type AnimationVariant = 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const hiddenVariants: Record<AnimationVariant, TargetAndTransition> = {
  'fade-in': { opacity: 0 },
  'slide-up': { opacity: 0, y: 32 },
  'slide-left': { opacity: 0, x: -32 },
  'slide-right': { opacity: 0, x: 32 },
  'scale-in': { opacity: 0, scale: 0.92 },
};

const visibleVariants: Record<AnimationVariant, TargetAndTransition> = {
  'fade-in': { opacity: 1 },
  'slide-up': { opacity: 1, y: 0 },
  'slide-left': { opacity: 1, x: 0 },
  'slide-right': { opacity: 1, x: 0 },
  'scale-in': { opacity: 1, scale: 1 },
};

export default function AnimateOnScroll({
  children,
  variant = 'fade-in',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  amount = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariants[variant]}
      animate={isInView ? visibleVariants[variant] : hiddenVariants[variant]}
      transition={{
        duration,
        delay: Math.min(delay, 0.3),
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — wraps children with staggered entrance animations.
 * Each direct child gets an incremental delay.
 */
interface StaggerContainerProps {
  children: ReactNode;
  variant?: AnimationVariant;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  variant = 'slide-up',
  staggerDelay = 0.08,
  duration = 0.5,
  className = '',
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: hiddenVariants[variant],
                visible: {
                  ...visibleVariants[variant],
                  transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
