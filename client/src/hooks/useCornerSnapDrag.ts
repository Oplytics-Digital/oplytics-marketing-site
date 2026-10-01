import { useCallback, useEffect, useRef, useState } from "react";

export type SnapCorner =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-center";

const DRAG_THRESHOLD = 6; // px of movement before a pointerdown becomes a drag

type Point = { x: number; y: number };

/**
 * Corner-snapping drag-to-reposition for a fixed-position floating widget.
 *
 * Drag is free-form while the pointer is down (so the widget visually tracks
 * the cursor), then on release it snaps to whichever of the 4 corners + 2
 * mid-edges of the viewport is nearest. Position persists to localStorage
 * (per `storageKey`) so it survives reload/navigation, and degrades silently
 * if storage is unavailable (private browsing, etc).
 */
export function useCornerSnapDrag(
  storageKey: string,
  defaultCorner: SnapCorner = "bottom-right"
) {
  const [corner, setCorner] = useState<SnapCorner>(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored && isSnapCorner(stored)) return stored;
    } catch {
      // storage blocked/unavailable — fall back to default
    }
    return defaultCorner;
  });

  const [isDragging, setIsDragging] = useState(false);
  // Live free-form offset applied via transform while dragging.
  const [dragOffset, setDragOffset] = useState<Point>({ x: 0, y: 0 });

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const startPointRef = useRef<Point | null>(null);
  const originRectRef = useRef<DOMRect | null>(null);
  const draggedRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);

  const persist = useCallback(
    (value: SnapCorner) => {
      try {
        window.localStorage.setItem(storageKey, value);
      } catch {
        // ignore — storage blocked/unavailable
      }
    },
    [storageKey]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only primary button / primary touch contact.
    if (e.button !== undefined && e.button !== 0) return;

    const el = wrapperRef.current;
    if (!el) return;

    startPointRef.current = { x: e.clientX, y: e.clientY };
    originRectRef.current = el.getBoundingClientRect();
    draggedRef.current = false;
    pointerIdRef.current = e.pointerId;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!startPointRef.current) return;

    const dx = e.clientX - startPointRef.current.x;
    const dy = e.clientY - startPointRef.current.y;

    if (!draggedRef.current) {
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) {
        return;
      }
      draggedRef.current = true;
      setIsDragging(true);
      // Capture the pointer once we've committed to a drag so pointerup/move
      // keep firing on this element even if the cursor leaves it.
      const el = wrapperRef.current;
      if (el && pointerIdRef.current !== null) {
        try {
          el.setPointerCapture(pointerIdRef.current);
        } catch {
          // ignore — capture is best-effort
        }
      }
    }

    setDragOffset({ x: dx, y: dy });
  }, []);

  const finishDrag = useCallback(
    (e: React.PointerEvent) => {
      const wasDragging = draggedRef.current;

      const el = wrapperRef.current;
      if (el && pointerIdRef.current !== null) {
        try {
          el.releasePointerCapture(pointerIdRef.current);
        } catch {
          // ignore
        }
      }

      startPointRef.current = null;
      pointerIdRef.current = null;

      if (wasDragging && originRectRef.current) {
        const rect = originRectRef.current;

        // Compute the widget's final on-screen center using the live drag offset.
        const finalCenterX = rect.left + rect.width / 2 + dragOffset.x;
        const finalCenterY = rect.top + rect.height / 2 + dragOffset.y;

        const nearest = nearestCorner(
          finalCenterX,
          finalCenterY,
          window.innerWidth,
          window.innerHeight
        );
        setCorner(nearest);
        persist(nearest);
      }

      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
      draggedRef.current = false;
      originRectRef.current = null;
      void e;
    },
    [dragOffset, persist]
  );

  // Guard against a stuck drag state if the pointer capture is lost
  // unexpectedly (e.g. OS-level gesture interrupts).
  useEffect(() => {
    if (!isDragging) return;
    const cancel = () => {
      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
      draggedRef.current = false;
      startPointRef.current = null;
      originRectRef.current = null;
    };
    window.addEventListener("pointercancel", cancel);
    return () => window.removeEventListener("pointercancel", cancel);
  }, [isDragging]);

  /** True only once a pointerdown has moved past the drag threshold. */
  const wasDragged = useCallback(() => draggedRef.current, []);

  return {
    corner,
    isDragging,
    dragOffset,
    wrapperRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp: finishDrag,
    /** Call from a click handler to distinguish a real click from a drag-release. */
    wasDragged,
  };
}

function isSnapCorner(value: string): value is SnapCorner {
  return [
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
    "top-center",
    "bottom-center",
  ].includes(value);
}

function nearestCorner(
  centerX: number,
  centerY: number,
  viewportWidth: number,
  viewportHeight: number
): SnapCorner {
  const candidates: { corner: SnapCorner; x: number; y: number }[] = [
    { corner: "top-left", x: 0, y: 0 },
    { corner: "top-center", x: viewportWidth / 2, y: 0 },
    { corner: "top-right", x: viewportWidth, y: 0 },
    { corner: "bottom-left", x: 0, y: viewportHeight },
    { corner: "bottom-center", x: viewportWidth / 2, y: viewportHeight },
    { corner: "bottom-right", x: viewportWidth, y: viewportHeight },
  ];

  let best = candidates[0];
  let bestDist = Infinity;
  for (const c of candidates) {
    const dist = Math.hypot(c.x - centerX, c.y - centerY);
    if (dist < bestDist) {
      bestDist = dist;
      best = c;
    }
  }
  return best.corner;
}

/** Tailwind fixed-position classes for a given corner, offset by the standard edge margin. */
export function cornerPositionClasses(corner: SnapCorner): string {
  switch (corner) {
    case "top-left":
      return "top-6 left-6";
    case "top-center":
      return "top-6 left-1/2 -translate-x-1/2";
    case "top-right":
      return "top-6 right-6";
    case "bottom-left":
      return "bottom-6 left-6";
    case "bottom-center":
      return "bottom-6 left-1/2 -translate-x-1/2";
    case "bottom-right":
    default:
      return "bottom-6 right-6";
  }
}

/** Whether a corner sits on the top or bottom edge (for panel anchoring). */
export function cornerVerticalEdge(corner: SnapCorner): "top" | "bottom" {
  return corner.startsWith("top") ? "top" : "bottom";
}

/** Whether a corner sits on the left, right, or horizontal-center of the viewport. */
export function cornerHorizontalEdge(
  corner: SnapCorner
): "left" | "right" | "center" {
  if (corner.endsWith("left")) return "left";
  if (corner.endsWith("right")) return "right";
  return "center";
}
