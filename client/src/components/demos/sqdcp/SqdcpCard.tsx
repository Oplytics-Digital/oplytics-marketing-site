/*
 * SqdcpCard — a faithful-looking SQDCP pillar card for the marketing demo.
 * Rebuilt from scratch (the real SQDCPCard depends on @pablo2410/shared-ui/primitives,
 * which the marketing site doesn't expose). Header letter badge + name + open-action
 * count, then one row per metric: status-dot + short chip + name + trend sparkline + value.
 */
import { ClipboardList } from 'lucide-react';
import TrendSparkline from './TrendSparkline';
import { STATUS_COLORS, type SqdcpPillar } from '../data/testaSqdcpBoard';

function shortLabel(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, '').trim();
  const words = clean.split(/[\s-]+/);
  if (clean.length <= 8) return clean;
  if (words.length >= 2) return words.map(w => w[0]).join('').toUpperCase();
  return clean.slice(0, 6);
}

interface SqdcpCardProps {
  pillar: SqdcpPillar;
  /** Dim the card (when another pillar is spotlighted during the auto tour). */
  dimmed?: boolean;
}

export default function SqdcpCard({ pillar, dimmed = false }: SqdcpCardProps) {
  const { code, name, color, metrics, actionCount } = pillar;

  const worst = metrics.reduce<'green' | 'amber' | 'red' | 'none'>((acc, m) => {
    const rank = { red: 3, amber: 2, green: 1, none: 0 } as const;
    return rank[m.status] > rank[acc] ? m.status : acc;
  }, 'none');
  const glow = worst === 'red'
    ? '0 0 30px rgba(239,68,68,0.10)'
    : worst === 'amber'
    ? '0 0 30px rgba(245,158,11,0.07)'
    : 'none';

  return (
    <div
      className="h-full rounded-xl transition-all duration-300"
      style={{
        background: '#1E2738',
        border: '1px solid #2A2A3E',
        boxShadow: glow,
        opacity: dimmed ? 0.4 : 1,
      }}
    >
      <div className="p-4 flex flex-col h-full gap-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 font-black text-lg"
              style={{ background: `${color}18`, color, border: `1.5px solid ${color}30` }}
            >
              {code}
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white leading-tight tracking-tight">{name}</h3>
              <p className="text-[10px]" style={{ color: '#8890A0' }}>Today</p>
            </div>
          </div>
          {actionCount > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: 'rgba(136,144,160,0.1)' }}>
              <ClipboardList className="h-3.5 w-3.5" style={{ color: '#8890A0' }} />
              <span className="text-[10px] font-semibold" style={{ color: '#8890A0' }}>{actionCount}</span>
            </div>
          )}
        </div>

        {/* Metric rows */}
        <div className="flex-1 flex flex-col gap-1.5">
          {metrics.map(metric => {
            const sc = STATUS_COLORS[metric.status];
            return (
              <div
                key={metric.id}
                className="flex items-center justify-between gap-2 px-1.5 py-1 rounded-md transition-colors hover:bg-[#0D1220]/50"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: sc }} />
                  <span
                    className="h-5 px-1 rounded flex items-center justify-center text-[8px] font-bold shrink-0"
                    style={{ background: `${sc}25`, color: sc }}
                  >
                    {shortLabel(metric.name)}
                  </span>
                  <span className="text-[11px] truncate" style={{ color: '#E2E8F0' }}>{metric.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <TrendSparkline data={metric.trend} color={sc} width={52} height={18} />
                  <span className="text-[11px] font-semibold tabular-nums min-w-[40px] text-right" style={{ color: sc }}>
                    {metric.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}{metric.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
