/*
 * BowlingChartDemo — self-contained port of the real Policy Deployment Bowling Chart
 * (oplytics-policy-deployment/client/src/components/BowlingChart.tsx). Fed injected
 * fictional sample data instead of PolicyContext.
 */
import React from 'react';
import { FileX2 } from 'lucide-react';
import { testaPolicyPlan, type PolicyPlan, type KpiDirection } from '../data/testaPolicyPlan';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const cellBorder = '1px solid #1e2738';
const cellBg = '#0e1624';
const headerBg = '#131b2e';

function getCellStyle(plan: number, actual: number | null, direction: KpiDirection): { background: string; color: string } {
  if (actual === null) return { background: cellBg, color: '#596475' };
  if (direction === 'up') {
    if (actual >= plan) return { background: 'rgba(16,185,129,0.15)', color: '#10b981' };
    if (actual >= plan * 0.95) return { background: 'rgba(245,158,11,0.15)', color: '#f59e0b' };
    return { background: 'rgba(239,68,68,0.15)', color: '#ef4444' };
  } else {
    if (actual <= plan) return { background: 'rgba(16,185,129,0.15)', color: '#10b981' };
    if (actual <= plan * 1.05) return { background: 'rgba(245,158,11,0.15)', color: '#f59e0b' };
    return { background: 'rgba(239,68,68,0.15)', color: '#ef4444' };
  }
}

export default function BowlingChartDemo({ plan = testaPolicyPlan }: { plan?: PolicyPlan }) {
  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <FileX2 className="w-12 h-12 mb-4" style={{ color: '#596475' }} />
        <h2 className="text-lg font-semibold text-[#E2E8F0] mb-2">No Policy Plan</h2>
        <p className="text-sm text-[#596475] max-w-md">No strategic policy plan exists for this enterprise yet.</p>
      </div>
    );
  }

  const { kpis, bowlingChart } = plan;

  return (
    <div className="w-full overflow-auto">
      {/* Header — Oplytics purple gradient */}
      <div className="px-6 py-3 rounded-t-md" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-white tracking-wide">Bowling Chart</h2>
            <p className="text-sm text-white/60">Monthly target vs actual tracking</p>
          </div>
          <div className="text-right text-sm">
            <div><span className="text-white/40">Owner:</span> <span className="font-medium text-white">{plan.owner}</span></div>
            <div><span className="text-white/40">Last Update:</span> <span className="font-medium text-white">{plan.lastUpdated}</span></div>
          </div>
        </div>
      </div>

      <div className="rounded-b-md overflow-auto" style={{ background: cellBg, border: cellBorder, borderTop: 'none' }}>
        <table className="border-collapse w-full" style={{ minWidth: '1000px' }}>
          <thead>
            <tr>
              <th className="px-2 py-2 text-left text-[11px] font-semibold w-8" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>#</th>
              <th className="px-2 py-2 text-left text-[11px] font-semibold min-w-[180px]" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>Project/Deliverable</th>
              <th className="px-2 py-2 text-left text-[11px] font-semibold w-24" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>Owner</th>
              <th className="px-2 py-2 text-center text-[11px] font-semibold w-16" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>Initial</th>
              <th className="px-2 py-2 text-center text-[11px] font-semibold w-14" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>Unit</th>
              <th className="px-2 py-2 text-center text-[11px] font-semibold w-14" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>Plan/Act</th>
              {MONTHS.map(m => (
                <th key={m} className="px-1 py-2 text-center text-[11px] font-semibold w-12" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {kpis.map((kpi, idx) => {
              const entries = bowlingChart.filter(e => e.kpiId === kpi.id);

              return (
                <React.Fragment key={kpi.id}>
                  {/* Plan row */}
                  <tr>
                    <td rowSpan={2} className="px-2 py-1 text-center text-xs font-bold" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>
                      {idx + 1}
                    </td>
                    <td rowSpan={2} className="px-2 py-1 text-xs font-medium" style={{ background: headerBg, border: cellBorder, color: '#c0c6d0' }}>
                      {kpi.name}
                    </td>
                    <td rowSpan={2} className="px-2 py-1 text-xs" style={{ background: headerBg, border: cellBorder, color: '#8890a0' }}>
                      {kpi.owner}
                    </td>
                    <td rowSpan={2} className="px-2 py-1 text-center text-xs font-mono font-medium" style={{ background: headerBg, border: cellBorder, color: '#8890a0' }}>
                      {kpi.current}
                    </td>
                    <td rowSpan={2} className="px-2 py-1 text-center text-xs" style={{ background: headerBg, border: cellBorder, color: '#596475' }}>
                      {kpi.unit}
                    </td>
                    <td className="px-1 py-1 text-center text-[10px] font-semibold" style={{ background: 'rgba(140,52,233,0.08)', border: cellBorder, color: '#8C34E9' }}>
                      Plan
                    </td>
                    {MONTHS.map((_, mIdx) => {
                      const entry = entries.find(e => e.month === mIdx + 1);
                      return (
                        <td key={mIdx} className="px-1 py-1 text-center text-[11px] font-mono" style={{ background: 'rgba(140,52,233,0.04)', border: cellBorder, color: '#8890a0' }}>
                          {entry ? (typeof entry.plan === 'number' ? entry.plan : '') : ''}
                        </td>
                      );
                    })}
                  </tr>
                  {/* Actual row */}
                  <tr>
                    <td className="px-1 py-1 text-center text-[10px] font-semibold" style={{ background: cellBg, border: cellBorder, color: '#596475' }}>
                      Act
                    </td>
                    {MONTHS.map((_, mIdx) => {
                      const entry = entries.find(e => e.month === mIdx + 1);
                      const style = entry ? getCellStyle(entry.plan, entry.actual, kpi.direction) : { background: cellBg, color: '#596475' };
                      return (
                        <td key={mIdx} className="px-1 py-1 text-center text-[11px] font-mono font-medium" style={{ ...style, border: cellBorder }}>
                          {entry?.actual !== null && entry?.actual !== undefined ? entry.actual : ''}
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3 px-2 pb-1 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 rounded-sm" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }} />
          <span className="text-xs" style={{ color: '#596475' }}>On/above target</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 rounded-sm" style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }} />
          <span className="text-xs" style={{ color: '#596475' }}>Near target</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 rounded-sm" style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }} />
          <span className="text-xs" style={{ color: '#596475' }}>Below target</span>
        </div>
      </div>
    </div>
  );
}
