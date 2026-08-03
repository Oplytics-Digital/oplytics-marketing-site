/**
 * CardScreenshotCarousel — compact real-screenshot crossfade for grid cards.
 * No captions/arrows/dots (too small for chrome) — just an auto-advancing,
 * uncropped rotation of real product screens at their native aspect ratio.
 */
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { DemoScreenshot } from '@/config/services';

interface CardScreenshotCarouselProps {
  slides: DemoScreenshot[];
  serviceName: string;
  intervalMs?: number;
}

export default function CardScreenshotCarousel({ slides, serviceName, intervalMs = 3500 }: CardScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;
  const current = slides[index];

  return (
    <div
      className="relative aspect-[2980/1556] w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current.src}
          src={current.src}
          alt={`${serviceName} — ${current.caption}`}
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
}
