import { useEffect, useState } from 'react';

/**
 * Cycles through a list of ids on an interval — used to drive the X-Matrix demo's
 * highlight without user interaction (the "guided auto-play tour" on the home cards).
 * Returns the currently-active id, or null when the list is empty.
 */
export function useAutoHighlight(ids: string[], intervalMs = 2000): string | null {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (ids.length === 0) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % ids.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [ids.length, intervalMs]);

  return ids[index % Math.max(ids.length, 1)] ?? null;
}

export default useAutoHighlight;
