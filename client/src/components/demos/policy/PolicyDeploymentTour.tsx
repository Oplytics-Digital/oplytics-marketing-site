/*
 * PolicyDeploymentTour — a self-contained, auto-playing walkthrough of the Policy
 * Deployment app, framed in a faithful (lightweight) copy of the product's own
 * sidebar + header chrome (no fake browser window).
 *
 * Tour: opens on the Dashboard, then an animated cursor "clicks" through the
 * sidebar — X-Matrix → Catchball (Cascade) → Bowling Chart — and finally settles
 * on the X-Matrix, which is left live and clickable. The sidebar stays interactive
 * throughout, and a Replay control restarts the tour.
 *
 * All views are ports of the real components, fed fictional Testa Group sample data.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  PanelLeft, FileStack, ArrowLeft, LayoutGrid, Grid3X3, BarChart3,
  FolderKanban, GitBranchPlus, Target, Play, Pause, RotateCcw,
  ChevronRight, MousePointer2, Settings,
} from 'lucide-react';
import XMatrixDemo from '../xmatrix/XMatrixDemo';
import PolicyDashboardDemo from './PolicyDashboardDemo';
import BowlingChartDemo from './BowlingChartDemo';
import CatchballDemo from './CatchballDemo';

type View = 'dashboard' | 'xmatrix' | 'bowling' | 'actions' | 'catchball' | 'deployments';

const MENU: { view: View; label: string; icon: typeof LayoutGrid }[] = [
  { view: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { view: 'xmatrix', label: 'X-Matrix', icon: Grid3X3 },
  { view: 'bowling', label: 'Bowling Chart', icon: BarChart3 },
  { view: 'actions', label: 'Action Plans', icon: FolderKanban },
  { view: 'catchball', label: 'Catchball', icon: GitBranchPlus },
  { view: 'deployments', label: 'Deployments', icon: Target },
];

/** The auto-play sequence — settles back on the X-Matrix, left interactive. */
const TOUR: View[] = ['dashboard', 'xmatrix', 'catchball', 'bowling', 'xmatrix'];

const labelFor = (view: View) => MENU.find(m => m.view === view)?.label ?? view;

function PlaceholderView({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-md p-10 text-center" style={{ background: '#0e1624', border: '1px solid #1e2738' }}>
      <h2 className="text-lg font-black text-white tracking-wide mb-2">{title}</h2>
      <p className="text-sm max-w-md mx-auto" style={{ color: '#596475' }}>{description}</p>
    </div>
  );
}

export default function PolicyDeploymentTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [activeView, setActiveView] = useState<View>('dashboard');
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [done, setDone] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 24, y: 150 });
  const [clicking, setClicking] = useState(false);

  const moveCursorToView = useCallback((view: View) => {
    const item = itemRefs.current[view];
    const container = containerRef.current;
    if (!item || !container) return;
    const ir = item.getBoundingClientRect();
    const cr = container.getBoundingClientRect();
    setCursor({ x: ir.left - cr.left + 26, y: ir.top - cr.top + ir.height / 2 });
  }, []);

  // Rest the cursor on the starting item once mounted.
  useEffect(() => {
    moveCursorToView('dashboard');
  }, [moveCursorToView]);

  // Auto-play driver: schedule the move to the next tour stop.
  useEffect(() => {
    if (!playing || done) return;
    if (stepIndex >= TOUR.length - 1) {
      setDone(true); // reached the X-Matrix — leave it live
      return;
    }
    const nextView = TOUR[stepIndex + 1];
    const dwell = stepIndex === 0 ? 2800 : 3400; // look at the current view first
    const travel = 850;

    const tMove = setTimeout(() => moveCursorToView(nextView), dwell);
    const tClick = setTimeout(() => setClicking(true), dwell + travel);
    const tSwitch = setTimeout(() => {
      setClicking(false);
      setActiveView(nextView);
      setStepIndex(i => i + 1);
    }, dwell + travel + 360);

    return () => {
      clearTimeout(tMove);
      clearTimeout(tClick);
      clearTimeout(tSwitch);
    };
  }, [stepIndex, playing, done, moveCursorToView]);

  const startTour = () => {
    setDone(false);
    setStepIndex(0);
    setActiveView('dashboard');
    setPlaying(true);
    moveCursorToView('dashboard');
  };

  const selectView = (view: View) => {
    // Manual navigation hands control to the user and ends the tour.
    setPlaying(false);
    setDone(true);
    setClicking(false);
    setActiveView(view);
  };

  const renderView = (view: View) => {
    switch (view) {
      case 'dashboard': return <PolicyDashboardDemo />;
      case 'xmatrix': return <XMatrixDemo interactive={done} />;
      case 'bowling': return <BowlingChartDemo />;
      case 'catchball': return <CatchballDemo />;
      case 'actions': return <PlaceholderView title="Action Plans" description="Track and assign the improvement actions that drive each project. Open the full app to manage the live action register." />;
      case 'deployments': return <PlaceholderView title="Deployments" description="Cascade objectives to individual sites with SQDCP targets. Open the full app to view live site deployments." />;
    }
  };

  const showCursor = playing && !done;

  return (
    <div
      ref={containerRef}
      className="relative flex w-full select-none overflow-hidden"
      style={{ background: '#0a0e1a', minHeight: 620 }}
    >
      {/* ── Sidebar ── */}
      <aside className="shrink-0 w-[210px] flex flex-col" style={{ background: '#0b1018', borderRight: '1px solid #1e2738' }}>
        {/* Sidebar header */}
        <div className="h-14 flex items-center gap-2 px-3" style={{ borderBottom: '1px solid #1e2738' }}>
          <PanelLeft className="h-4 w-4" style={{ color: '#596475' }} />
          <FileStack className="h-4 w-4" style={{ color: '#8C34E9' }} />
          <span className="text-sm font-semibold text-white truncate">Policy Deployment</span>
        </div>

        <div className="flex-1 py-2 overflow-y-auto">
          {/* Service Hub */}
          <div className="px-2">
            <div className="flex items-center gap-2 h-9 px-3 rounded-md text-xs" style={{ color: '#596475' }}>
              <ArrowLeft className="h-4 w-4" />
              <span>Service Hub</span>
            </div>
          </div>

          {/* Analysis section */}
          <div className="px-4 pt-3 pb-1">
            <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#596475' }}>Analysis</span>
          </div>
          <nav className="px-2 space-y-0.5">
            {MENU.map(item => {
              const isActive = activeView === item.view;
              const Icon = item.icon;
              return (
                <button
                  key={item.view}
                  ref={el => { itemRefs.current[item.view] = el; }}
                  onClick={() => selectView(item.view)}
                  className="w-full flex items-center gap-2.5 h-9 px-3 rounded-md text-[13px] transition-colors"
                  style={{
                    background: isActive ? 'rgba(140,52,233,0.12)' : 'transparent',
                    color: isActive ? '#fff' : '#8890a0',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  <Icon className="h-4 w-4" style={{ color: isActive ? '#8C34E9' : '#596475' }} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="p-2" style={{ borderTop: '1px solid #1e2738' }}>
          <div className="flex items-center gap-2.5 h-9 px-3 rounded-md text-[13px]" style={{ color: '#596475' }}>
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </div>
        </div>
      </aside>

      {/* ── Main panel ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header / breadcrumb */}
        <header className="h-14 flex items-center justify-between gap-3 px-4" style={{ borderBottom: '1px solid #1e2738' }}>
          <div className="flex items-center gap-2 min-w-0 text-sm">
            <FileStack className="h-4 w-4 shrink-0" style={{ color: '#8C34E9' }} />
            <span className="font-semibold text-white">Policy Deployment</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" style={{ color: '#2e3a4e' }} />
            <span className="truncate" style={{ color: '#8890a0' }}>{labelFor(activeView)}</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded-md text-[11px] font-medium"
              style={{ background: 'rgba(140,52,233,0.1)', color: '#C084FC', border: '1px solid rgba(140,52,233,0.2)' }}>
              <span className="w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[8px] font-bold" style={{ background: '#8C34E9', color: '#fff' }}>TG</span>
              Testa Group
            </span>
          </div>

          {/* Tour controls */}
          <div className="flex items-center gap-2 shrink-0">
            {!done && (
              <div className="hidden sm:flex items-center gap-1.5 mr-1">
                {TOUR.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ background: i <= stepIndex ? '#8C34E9' : '#1e2738' }} />
                ))}
              </div>
            )}
            {!done ? (
              <button
                onClick={() => setPlaying(p => !p)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-colors"
                style={{ background: 'rgba(140,52,233,0.12)', color: '#C084FC', border: '1px solid rgba(140,52,233,0.25)' }}
              >
                {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                {playing ? 'Pause tour' : 'Resume tour'}
              </button>
            ) : (
              <button
                onClick={startTour}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-colors"
                style={{ background: 'rgba(140,52,233,0.12)', color: '#C084FC', border: '1px solid rgba(140,52,233,0.25)' }}
              >
                <RotateCcw className="w-3 h-3" />
                Replay tour
              </button>
            )}
          </div>
        </header>

        {/* View body */}
        <main className="flex-1 p-4 overflow-auto" style={{ maxHeight: 620 }}>
          {renderView(activeView)}
        </main>
      </div>

      {/* ── Animated tour cursor ── */}
      {showCursor && (
        <div
          className="absolute top-0 left-0 z-30 pointer-events-none"
          style={{
            transform: `translate(${cursor.x}px, ${cursor.y}px)`,
            transition: 'transform 750ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="relative -translate-y-1/2">
            {clicking && (
              <span className="absolute -left-1.5 -top-1.5 w-7 h-7 rounded-full animate-ping" style={{ background: 'rgba(140,52,233,0.4)' }} />
            )}
            <MousePointer2 className="w-5 h-5 drop-shadow-lg" style={{ color: '#fff', fill: '#8C34E9' }} />
          </div>
        </div>
      )}
    </div>
  );
}
