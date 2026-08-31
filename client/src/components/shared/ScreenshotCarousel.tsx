/**
 * ScreenshotCarousel — real product screenshots, not animated recreations.
 * Auto-advances on a timer, pauses on hover/focus, crossfades between frames.
 * Each slide carries its own caption identifying what part of the app it shows.
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  src: string;
  caption: string;
}

interface ScreenshotCarouselProps {
  slides: CarouselSlide[];
  serviceName: string;
  intervalMs?: number;
}

export default function ScreenshotCarousel({
  slides,
  serviceName,
  intervalMs = 5000,
}: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

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
      className="relative rounded-lg border border-[#1E2738] bg-[#0D1220] overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${serviceName} product screenshots`}
    >
      {/* Frame matches the screenshots' native 2980:1556 ratio exactly — full image visible, no crop */}
      <div className="relative aspect-[2980/1556] bg-[#080C16]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={`${serviceName} — ${current.caption}`}
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>

        {/* Prev/next arrows — only when more than one slide */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#080C16]/70 border border-[#1E2738] flex items-center justify-center text-[#8890A0] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:text-white hover:border-[#8C34E9]/40 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#080C16]/70 border border-[#1E2738] flex items-center justify-center text-[#8890A0] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:text-white hover:border-[#8C34E9]/40 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption — below the frame, never overlapping the screenshot */}
      <div className="px-4 sm:px-5 py-3 border-t border-[#1E2738]">
        <p className="text-xs sm:text-sm text-white font-medium">
          {current.caption}
        </p>
        <p className="text-[10px] text-[#596475] uppercase tracking-wider mt-0.5">
          Real product · live customer data
        </p>
      </div>

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-3 border-t border-[#1E2738]">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to screenshot ${i + 1}: ${slide.caption}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-[#8C34E9]"
                  : "w-1.5 bg-[#1E2738] hover:bg-[#596475]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
