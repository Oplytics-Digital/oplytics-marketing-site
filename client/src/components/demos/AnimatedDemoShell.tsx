/**
 * AnimatedDemoShell — Shared 20-second looping demo wrapper
 * Used by all 8 service animated demos.
 * Provides: phase management, progress bar, play/pause, phase buttons, viewport.
 */
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Play, Pause } from 'lucide-react';

export interface DemoPhase {
  id: string;
  label: string;
  duration: number;
}

interface AnimatedDemoShellProps {
  serviceName: string;
  accentColor: string;
  phases: DemoPhase[];
  children: (currentPhase: number, phaseProgress: number) => ReactNode;
}

export default function AnimatedDemoShell({ serviceName, accentColor, phases, children }: AnimatedDemoShellProps) {
  const totalDuration = phases.reduce((sum, p) => sum + p.duration, 0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const startTimeRef = useRef(Date.now());
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    startTimeRef.current = Date.now() - progress * totalDuration;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const totalProgress = (elapsed % totalDuration) / totalDuration;
      setProgress(totalProgress);

      let accumulated = 0;
      for (let i = 0; i < phases.length; i++) {
        accumulated += phases[i].duration / totalDuration;
        if (totalProgress < accumulated) {
          setCurrentPhase(i);
          break;
        }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying]);

  const phaseProgress = (() => {
    let before = 0;
    for (let i = 0; i < currentPhase; i++) before += phases[i].duration / totalDuration;
    const phaseFraction = phases[currentPhase].duration / totalDuration;
    return Math.min(1, Math.max(0, (progress - before) / phaseFraction));
  })();

  return (
    <div className="relative w-full" style={{ background: '#0a0e1a' }}>
      {/* Demo header bar */}
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#0d1220', borderBottom: '1px solid #1e2738' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: accentColor }}>
            <span className="text-white font-bold text-[10px]" style={{ fontFamily: 'Montserrat' }}>O</span>
          </div>
          <span className="text-xs font-bold text-white" style={{ fontFamily: 'Montserrat' }}>{serviceName}</span>
          <span className="text-[10px] uppercase tracking-widest" style={{ color: '#596475' }}>Live Demo</span>
        </div>
        <div className="flex items-center gap-2">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => {
                let t = 0;
                for (let j = 0; j < i; j++) t += phases[j].duration / totalDuration;
                setProgress(t + 0.001);
                setCurrentPhase(i);
                startTimeRef.current = Date.now() - (t + 0.001) * totalDuration;
              }}
              className="px-2 py-1 rounded text-[10px] font-semibold transition-all"
              style={{
                background: currentPhase === i ? `${accentColor}33` : 'transparent',
                color: currentPhase === i ? accentColor : '#596475',
                border: currentPhase === i ? `1px solid ${accentColor}4D` : '1px solid transparent',
              }}
            >
              {phase.label}
            </button>
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-2 p-1 rounded hover:bg-white/5 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" style={{ color: accentColor }} /> : <Play className="w-3.5 h-3.5" style={{ color: accentColor }} />}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-full" style={{ background: '#1e2738' }}>
        <div className="h-full transition-none" style={{ width: `${progress * 100}%`, background: `linear-gradient(90deg, ${accentColor}, #1DB8CE)` }} />
      </div>

      {/* Demo viewport */}
      <div className="relative" style={{ height: '480px', overflow: 'hidden' }}>
        {children(currentPhase, phaseProgress)}
      </div>

      {/* Phase label overlay */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-md text-xs font-bold text-white" style={{ background: `${accentColor}CC`, backdropFilter: 'blur(8px)' }}>
          {phases[currentPhase].label}
        </div>
        <span className="text-[10px]" style={{ color: '#596475' }}>
          {Math.ceil((1 - progress) * (totalDuration / 1000))}s remaining
        </span>
      </div>
    </div>
  );
}

/** Helper: Render a phase with opacity transition */
export function DemoPhaseView({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <div
      className="absolute inset-0 transition-opacity duration-500"
      style={{ opacity: active ? 1 : 0, pointerEvents: active ? 'auto' : 'none' }}
    >
      {children}
    </div>
  );
}
