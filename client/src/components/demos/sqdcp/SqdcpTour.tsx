/*
 * SqdcpTour — the SQDCP tier board framed in a lightweight copy of the product's
 * own sidebar/header chrome. On load an auto-highlight tour spotlights each SQDCP
 * pillar (Safety → Quality → Delivery → Cost → People) in turn, then settles with
 * every card live and hoverable. Fed fictional Testa Group sample data.
 */
import { useEffect, useState } from 'react';
import {
  PanelLeft, BarChart3, ArrowLeft, LayoutDashboard, PenLine, ClipboardList,
  FileText, Settings, ChevronRight, Play, Pause, RotateCcw,
} from 'lucide-react';
import SqdcpBoardDemo from './SqdcpBoardDemo';
import { TESTA_SQDCP_BOARD } from '../data/testaSqdcpBoard';

const MENU: { label: string; icon: typeof LayoutDashboard; active?: boolean }[] = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Data Entry', icon: PenLine },
  { label: 'Action Tracker', icon: ClipboardList },
  { label: 'Reports', icon: FileText },
  { label: 'Admin', icon: Settings },
];

const PILLARS = TESTA_SQDCP_BOARD.map(p => p.code);

export default function SqdcpTour() {
  const [idx, setIdx] = useState(0);
  const [highlight, setHighlight] = useState<string | null>(PILLARS[0]);
  const [playing, setPlaying] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!playing || done) return;
    if (idx >= PILLARS.length - 1) {
      // Hold on the final pillar, then settle with all cards live.
      const t = setTimeout(() => { setDone(true); setHighlight(null); }, 1500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      const next = idx + 1;
      setIdx(next);
      setHighlight(PILLARS[next]);
    }, idx === 0 ? 1700 : 1400);
    return () => clearTimeout(t);
  }, [idx, playing, done]);

  const startTour = () => {
    setDone(false);
    setIdx(0);
    setHighlight(PILLARS[0]);
    setPlaying(true);
  };

  return (
    <div className="relative flex w-full select-none overflow-hidden" style={{ background: '#0a0e1a', minHeight: 560 }}>
      {/* ── Sidebar ── */}
      <aside className="shrink-0 w-[210px] flex flex-col" style={{ background: '#0b1018', borderRight: '1px solid #1e2738' }}>
        <div className="h-14 flex items-center gap-2 px-3" style={{ borderBottom: '1px solid #1e2738' }}>
          <PanelLeft className="h-4 w-4" style={{ color: '#596475' }} />
          <BarChart3 className="h-4 w-4" style={{ color: '#8C34E9' }} />
          <span className="text-sm font-semibold text-white truncate">SQDCP</span>
        </div>

        <div className="flex-1 py-2 overflow-y-auto">
          <div className="px-2">
            <div className="flex items-center gap-2 h-9 px-3 rounded-md text-xs" style={{ color: '#596475' }}>
              <ArrowLeft className="h-4 w-4" />
              <span>Service Hub</span>
            </div>
          </div>
          <div className="px-4 pt-3 pb-1">
            <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#596475' }}>Analysis</span>
          </div>
          <nav className="px-2 space-y-0.5">
            {MENU.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="w-full flex items-center gap-2.5 h-9 px-3 rounded-md text-[13px]"
                  style={{
                    background: item.active ? 'rgba(140,52,233,0.12)' : 'transparent',
                    color: item.active ? '#fff' : '#8890a0',
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: item.active ? '#8C34E9' : '#596475' }} />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-2" style={{ borderTop: '1px solid #1e2738' }}>
          <div className="flex items-center gap-2.5 h-9 px-3 rounded-md text-[13px]" style={{ color: '#596475' }}>
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </div>
        </div>
      </aside>

      {/* ── Main panel ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-14 flex items-center justify-between gap-3 px-4" style={{ borderBottom: '1px solid #1e2738' }}>
          <div className="flex items-center gap-2 min-w-0 text-sm">
            <BarChart3 className="h-4 w-4 shrink-0" style={{ color: '#8C34E9' }} />
            <span className="font-semibold text-white">SQDCP</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" style={{ color: '#2e3a4e' }} />
            <span className="truncate" style={{ color: '#8890a0' }}>Dashboard</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded-md text-[11px] font-medium"
              style={{ background: 'rgba(140,52,233,0.1)', color: '#C084FC', border: '1px solid rgba(140,52,233,0.2)' }}>
              <span className="w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[8px] font-bold" style={{ background: '#8C34E9', color: '#fff' }}>TG</span>
              Testa Group
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!done && (
              <div className="hidden sm:flex items-center gap-1.5 mr-1">
                {PILLARS.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ background: i <= idx ? '#8C34E9' : '#1e2738' }} />
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

        <main className="flex-1 p-4 overflow-auto" style={{ maxHeight: 620 }}>
          <SqdcpBoardDemo externalHighlightId={highlight} />
        </main>
      </div>
    </div>
  );
}
