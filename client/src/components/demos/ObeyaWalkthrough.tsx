/**
 * ObeyaWalkthrough — a self-contained, auto-playing screenshot walkthrough of the
 * real SQDCP Obeya Room, captured in the Testa demo environment. No backend, no
 * auth — it steps through real product screens with a caption on each, the way
 * the Policy Deployment tour walks the real app.
 *
 * Screenshots live in /public/screenshots/obeya/ — see SCREENSHOT-MANIFEST.md for
 * exactly what each frame should show. Until they are dropped in, each frame
 * renders a labelled placeholder so the layout and copy can be reviewed.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

interface Frame {
  /** Path under /public — e.g. /screenshots/obeya/01-room.png */
  src: string;
  /** Short stage label shown in the stepper */
  label: string;
  /** One-line caption under the frame */
  caption: string;
}

const FRAMES: Frame[] = [
  {
    src: "/screenshots/obeya/01-room.png",
    label: "The room",
    caption:
      "Walk into the Obeya Room — a 3D war room with every SQDCP pillar on the wall, live. A readiness check confirms every pillar has data before the huddle can start.",
  },
  {
    src: "/screenshots/obeya/03-rooms.png",
    label: "Tier on tier",
    caption:
      "One room per team, feeding the one above. The plant review is fed by the area huddles below it.",
  },
  {
    src: "/screenshots/obeya/02-seats.png",
    label: "Check in",
    caption:
      "Assign a representative to each pillar for today's huddle, then check in — a quick ceremony, not an identity check.",
  },
  {
    src: "/screenshots/obeya/04-board-walk.png",
    label: "Board walk",
    caption:
      "The camera focuses each pillar in turn. Green pillars are acknowledged; reds get a PDCA panel and a 5-Why stepper docked alongside.",
  },
  {
    src: "/screenshots/obeya/05-opi-line.png",
    label: "AI Facilitator",
    caption:
      "With the AI Facilitator on, Opi drafts a line for each red pillar — “Safety is red today due to Lost Time Injuries, and we have an action drafted waiting on Sarah Chen to confirm.” You edit and confirm.",
  },
  {
    src: "/screenshots/obeya/06-actions.png",
    label: "Actions",
    caption:
      "Opi opens the overdue-action review by name — “sixteen overdue today, let's get firm commitment dates” — with owners and due dates on every one.",
  },
  {
    src: "/screenshots/obeya/07-ci.png",
    label: "CI deep-dive",
    caption:
      "One improvement project from Policy Deployment is deep-dived each day, tied to its pillar's live status and the open countermeasures on its A3.",
  },
  {
    src: "/screenshots/obeya/08-closeout.png",
    label: "Close-out",
    caption:
      "Finish on a close-out recap — win of the day, the issues that matter, tomorrow's priorities. It carries forward into the next huddle.",
  },
];

const ACCENT = "#8C34E9";
const DWELL_MS = 4200;

export default function ObeyaWalkthrough() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + FRAMES.length) % FRAMES.length);
  }, []);

  // Auto-advance while playing.
  useEffect(() => {
    if (!playing) return;
    timerRef.current = setTimeout(() => {
      setIndex(i => (i + 1) % FRAMES.length);
    }, DWELL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [playing, index]);

  const frame = FRAMES[index];

  return (
    <div
      className="rounded-lg border border-[#1E2738] bg-[#0D1220] overflow-hidden"
      role="group"
      aria-roledescription="carousel"
      aria-label="SQDCP Obeya Room walkthrough"
    >
      {/* Header bar — stage stepper + play/pause */}
      <div
        className="flex items-center justify-between gap-2 px-3 py-2.5 flex-wrap"
        style={{ background: "#0D1220", borderBottom: "1px solid #1E2738" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
            style={{ background: ACCENT }}
          >
            <span
              className="text-white font-bold text-[10px]"
              style={{ fontFamily: "Montserrat" }}
            >
              O
            </span>
          </span>
          <span
            className="text-xs font-bold text-white"
            style={{ fontFamily: "Montserrat" }}
          >
            Obeya Room
          </span>
          <span
            className="text-[10px] uppercase tracking-widest"
            style={{ color: "#596475" }}
          >
            Walkthrough
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {FRAMES.map((f, i) => (
            <button
              key={f.src}
              onClick={() => {
                setPlaying(false);
                setIndex(i);
              }}
              className="px-2 py-1 rounded text-[10px] font-semibold transition-all"
              style={{
                background: index === i ? `${ACCENT}33` : "transparent",
                color: index === i ? "#C084FC" : "#596475",
                border:
                  index === i
                    ? `1px solid ${ACCENT}4D`
                    : "1px solid transparent",
              }}
            >
              {f.label}
            </button>
          ))}
          <button
            onClick={() => setPlaying(p => !p)}
            className="ml-1 p-1 rounded hover:bg-white/5 transition-colors"
            aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
          >
            {playing ? (
              <Pause className="w-3.5 h-3.5" style={{ color: "#C084FC" }} />
            ) : (
              <Play className="w-3.5 h-3.5" style={{ color: "#C084FC" }} />
            )}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-full" style={{ background: "#1E2738" }}>
        <div
          key={`${index}-${playing}`}
          className="h-full"
          style={{
            background: `linear-gradient(90deg, ${ACCENT}, #1DB8CE)`,
            width: playing ? "100%" : `${((index + 1) / FRAMES.length) * 100}%`,
            transition: playing ? `width ${DWELL_MS}ms linear` : "none",
          }}
        />
      </div>

      {/* Frame */}
      <div className="relative bg-[#080C16] aspect-[1490/778]">
        {missing[frame.src] ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
            style={{
              backgroundImage:
                "linear-gradient(#1E2738 1px, transparent 1px), linear-gradient(90deg, #1E2738 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#4A5668" }}
            >
              {frame.label}
            </span>
            <span className="text-[11px] max-w-sm" style={{ color: "#3A4658" }}>
              {frame.src.split("/").pop()} — see SCREENSHOT-MANIFEST.md
            </span>
          </div>
        ) : (
          <img
            src={frame.src}
            alt={frame.caption}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setMissing(m => ({ ...m, [frame.src]: true }))}
          />
        )}

        {/* Prev / Next */}
        <button
          onClick={() => {
            setPlaying(false);
            go(index - 1);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0D1220]/80 border border-[#1E2738] flex items-center justify-center hover:bg-[#1E2738] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => {
            setPlaying(false);
            go(index + 1);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0D1220]/80 border border-[#1E2738] flex items-center justify-center hover:bg-[#1E2738] transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Caption + CTA */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-[#1E2738] flex-wrap">
        <p className="text-xs sm:text-sm text-white font-medium max-w-xl">
          {frame.caption}
        </p>
        <Link
          href="/contact"
          data-umami-event="cta_click"
          data-umami-event-button="request_live_demo"
          data-umami-event-location="obeya_walkthrough"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-semibold text-xs transition-all hover:scale-105 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
          }}
        >
          See it on your data
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
