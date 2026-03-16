/**
 * Policy Deployment Animated Demo — 20-second looping
 * Ported from oplytics-platform PolicyDeploymentSolution.tsx
 * Phases: X-Matrix, Dashboard, Bowling Chart, Catchball
 */
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';
import { Target, BarChart3, GitBranchPlus, Grid3X3, ChevronRight } from 'lucide-react';

const PHASES = [
  { id: 'xmatrix', label: 'X-Matrix', duration: 5000 },
  { id: 'dashboard', label: 'Dashboard', duration: 5000 },
  { id: 'bowling', label: 'Bowling Chart', duration: 5000 },
  { id: 'catchball', label: 'Catchball', duration: 5000 },
];

export default function PolicyDeploymentDemo() {
  return (
    <AnimatedDemoShell serviceName="Policy Deployment" accentColor="#8C34E9" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <XMatrixDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <DashboardDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <BowlingDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <CatchballDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── X-Matrix Demo Panel ─── */
function XMatrixDemo({ progress }: { progress: number }) {
  const tactics = ['Reduce part numbers', 'Implement 5S', 'Launch connected products', 'Deploy IoT sensors', 'Reduce changeover time', 'CI program'];
  const projects = [
    { name: 'Complexity reduction', status: 'on-track', pct: 65 },
    { name: 'Pricing model rollout', status: 'on-track', pct: 40 },
    { name: 'Safety plan execution', status: 'at-risk', pct: 30 },
    { name: 'Connected products dev', status: 'on-track', pct: 55 },
    { name: 'Industry 4.0 assessment', status: 'not-started', pct: 0 },
    { name: 'SMED implementation', status: 'off-track', pct: 20 },
    { name: 'Employee engagement', status: 'on-track', pct: 45 },
  ];
  const kpis = ['Part count', 'OQD rate', 'OTD rate', 'Safety', 'Changeover', 'Products', 'Engagement'];
  const bos = [
    { code: 'BO1', desc: 'Reduce complexity 50%', cat: 'COST' },
    { code: 'BO2', desc: 'Zero incidents', cat: 'SAFETY' },
    { code: 'BO3', desc: 'Product-service model', cat: 'DELIVERY' },
    { code: 'BO4', desc: 'Industry 4.0 level 3', cat: 'QUALITY' },
    { code: 'BO5', desc: 'Engagement >85%', cat: 'MORALE' },
  ];
  const tacticProjCorr = [[0,0],[0,1],[1,2],[2,3],[2,1],[3,4],[3,3],[4,5],[5,6]];
  const projKpiCorr = [[0,0],[1,2],[2,3],[2,1],[3,5],[4,1],[5,4],[6,6]];
  const statusColor: Record<string, string> = { 'on-track': '#10b981', 'at-risk': '#f59e0b', 'off-track': '#ef4444', 'not-started': '#596475' };
  const revealCount = Math.floor(progress * 25);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2 mb-0" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>X-Matrix — Strategy Deployment</h3>
        <p className="text-[10px] text-white/50">Linking objectives, tactics, projects, and KPIs in one view</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="flex h-full">
          {/* Tactics column */}
          <div className="w-[140px] flex-shrink-0" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#1DB8CE', borderBottom: '1px solid #1e2738' }}>Tactics</div>
            {tactics.map((t, i) => (
              <div key={i} className="px-2 py-1.5 text-[10px] transition-all duration-300" style={{ color: '#c0c6d0', borderBottom: '1px solid #151d2e', opacity: revealCount > i ? 1 : 0.2, transform: revealCount > i ? 'translateX(0)' : 'translateX(-10px)' }}>
                <span className="font-mono text-[9px] mr-1" style={{ color: '#1DB8CE' }}>T{i+1}</span>{t}
              </div>
            ))}
          </div>
          {/* Tactic-Project correlation grid */}
          <div className="w-[80px] flex-shrink-0" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="px-1 py-1.5 text-[8px] font-bold uppercase tracking-wider text-center" style={{ color: '#596475', borderBottom: '1px solid #1e2738' }}>T↔P</div>
            <div className="grid" style={{ gridTemplateRows: `repeat(${tactics.length}, 1fr)` }}>
              {tactics.map((_, ti) => (
                <div key={ti} className="flex" style={{ borderBottom: '1px solid #151d2e' }}>
                  {projects.map((_, pi) => {
                    const hasCorr = tacticProjCorr.some(([t, p]) => t === ti && p === pi);
                    const dotIdx = tacticProjCorr.findIndex(([t, p]) => t === ti && p === pi);
                    return (
                      <div key={pi} className="w-[11px] h-[22px] flex items-center justify-center">
                        {hasCorr && (
                          <div className="rounded-full transition-all duration-500" style={{ width: 6, height: 6, background: revealCount > 6 + dotIdx ? '#fff' : 'transparent', border: revealCount > 6 + dotIdx ? 'none' : '1px solid #2e3a4e', transform: revealCount > 6 + dotIdx ? 'scale(1)' : 'scale(0)' }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* Projects column */}
          <div className="flex-1" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#f97316', borderBottom: '1px solid #1e2738' }}>Projects</div>
            {projects.map((p, i) => (
              <div key={i} className="px-2 py-1 flex items-center gap-1 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: revealCount > 2 + i ? 1 : 0.15 }}>
                <span className="font-mono text-[9px]" style={{ color: '#596475' }}>P{i+1}</span>
                <span className="text-[10px] truncate" style={{ color: '#c0c6d0' }}>{p.name}</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-10 h-1 rounded-full overflow-hidden" style={{ background: '#1e2738' }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${revealCount > 10 ? p.pct : 0}%`, background: statusColor[p.status] || '#596475' }} />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[p.status] || '#596475' }} />
                </div>
              </div>
            ))}
          </div>
          {/* Project-KPI correlation grid */}
          <div className="w-[80px] flex-shrink-0" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="px-1 py-1.5 text-[8px] font-bold uppercase tracking-wider text-center" style={{ color: '#596475', borderBottom: '1px solid #1e2738' }}>P↔K</div>
            <div className="grid" style={{ gridTemplateRows: `repeat(${projects.length}, 1fr)` }}>
              {projects.map((_, pi) => (
                <div key={pi} className="flex" style={{ borderBottom: '1px solid #151d2e' }}>
                  {kpis.map((_, ki) => {
                    const hasCorr = projKpiCorr.some(([p, k]) => p === pi && k === ki);
                    const dotIdx = projKpiCorr.findIndex(([p, k]) => p === pi && k === ki);
                    return (
                      <div key={ki} className="w-[11px] h-[22px] flex items-center justify-center">
                        {hasCorr && (
                          <div className="rounded-full transition-all duration-500" style={{ width: 6, height: 6, background: revealCount > 10 + dotIdx ? '#1DB8CE' : 'transparent', border: revealCount > 10 + dotIdx ? 'none' : '1px solid #2e3a4e', transform: revealCount > 10 + dotIdx ? 'scale(1)' : 'scale(0)' }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* KPIs column */}
          <div className="w-[120px] flex-shrink-0">
            <div className="px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#3b82f6', borderBottom: '1px solid #1e2738' }}>KPIs</div>
            {kpis.map((k, i) => (
              <div key={i} className="px-2 py-1.5 text-[10px] transition-all duration-300" style={{ color: '#c0c6d0', borderBottom: '1px solid #151d2e', opacity: revealCount > 4 + i ? 1 : 0.15, transform: revealCount > 4 + i ? 'translateX(0)' : 'translateX(10px)' }}>
                <span className="font-mono text-[9px] mr-1" style={{ color: '#3b82f6' }}>K{i+1}</span>{k}
              </div>
            ))}
          </div>
        </div>
        {/* Bottom: BOs */}
        <div className="flex gap-1 px-3 py-2" style={{ borderTop: '1px solid #1e2738' }}>
          {bos.map((bo, i) => {
            const catColor: Record<string, string> = { COST: '#ef4444', SAFETY: '#f59e0b', DELIVERY: '#10b981', QUALITY: '#8C34E9', MORALE: '#1DB8CE' };
            return (
              <div key={i} className="flex-1 px-2 py-1.5 rounded text-center transition-all duration-500" style={{ background: revealCount > 14 + i ? 'rgba(140,52,233,0.06)' : 'transparent', border: '1px solid #1e2738', opacity: revealCount > 14 + i ? 1 : 0.15, transform: revealCount > 14 + i ? 'translateY(0)' : 'translateY(8px)' }}>
                <span className="text-[8px] font-bold" style={{ color: catColor[bo.cat] || '#596475' }}>{bo.cat}</span>
                <p className="text-[9px] mt-0.5" style={{ color: '#8890a0' }}>{bo.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Demo Panel ─── */
function DashboardDemo({ progress }: { progress: number }) {
  const kpis = [
    { name: 'Part Count', pct: 83 },
    { name: 'OQD Rate', pct: 97 },
    { name: 'OTD Rate', pct: 98 },
    { name: 'Safety', pct: 0 },
    { name: 'Changeover', pct: 64 },
    { name: 'Products', pct: 33 },
    { name: 'Engagement', pct: 92 },
  ];
  const animatedPct = (pct: number) => Math.round(pct * Math.min(1, progress * 2));

  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="rounded-md px-5 py-3" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Strategy Deployment Overview</p>
        <h3 className="text-lg font-black text-white" style={{ fontFamily: 'Montserrat' }}>Operations — Pilot Plant #1</h3>
        <div className="flex gap-6 mt-2">
          {[{ label: 'Avg Progress', value: '36%' }, { label: 'Projects', value: '7' }, { label: 'KPIs On Track', value: '3/7' }, { label: 'Breakthrough Obj.', value: '5' }].map((s, i) => (
            <div key={i} className="transition-all duration-500" style={{ opacity: progress > 0.1 * (i + 1) ? 1 : 0, transform: progress > 0.1 * (i + 1) ? 'translateY(0)' : 'translateY(8px)' }}>
              <span className="text-xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>{s.value}</span>
              <p className="text-[9px] uppercase tracking-wider text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 flex-1">
        <div className="w-1/3 rounded-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738' }}>
          <h4 className="text-xs font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>Project Status</h4>
          {[{ label: 'On Track', count: 4, color: '#10b981' }, { label: 'At Risk', count: 1, color: '#f59e0b' }, { label: 'Off Track', count: 1, color: '#ef4444' }, { label: 'Not Started', count: 1, color: '#596475' }].map((s, i) => (
            <div key={i} className="flex items-center gap-2 mb-2 transition-all duration-300" style={{ opacity: progress > 0.15 * (i + 1) ? 1 : 0 }}>
              <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
              <span className="text-[11px]" style={{ color: '#8890a0' }}>{s.label}</span>
              <span className="ml-auto text-xs font-bold text-white">{s.count}</span>
              <div className="w-12 h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2738' }}>
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${animatedPct(s.count / 7 * 100)}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738' }}>
          <h4 className="text-xs font-bold text-white mb-3" style={{ fontFamily: 'Montserrat' }}>Key Performance Indicators</h4>
          <div className="grid grid-cols-4 gap-3">
            {kpis.slice(0, 4).map((kpi, i) => {
              const animPct = animatedPct(kpi.pct);
              const gaugeColor = animPct >= 80 ? '#10b981' : animPct >= 60 ? '#f59e0b' : '#ef4444';
              return (
                <div key={i} className="flex flex-col items-center transition-all duration-500" style={{ opacity: progress > 0.2 * (i + 1) ? 1 : 0 }}>
                  <div className="relative w-14 h-14">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e2738" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke={gaugeColor} strokeWidth="3" strokeDasharray={`${animPct} ${100 - animPct}`} strokeLinecap="round" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-white">{animPct}%</span>
                    </div>
                  </div>
                  <span className="text-[9px] mt-1 text-center" style={{ color: '#8890a0' }}>{kpi.name}</span>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {kpis.slice(4).map((kpi, i) => {
              const animPct = animatedPct(kpi.pct);
              const gaugeColor = animPct >= 80 ? '#10b981' : animPct >= 60 ? '#f59e0b' : '#ef4444';
              return (
                <div key={i} className="flex flex-col items-center transition-all duration-500" style={{ opacity: progress > 0.4 + 0.15 * i ? 1 : 0 }}>
                  <div className="relative w-12 h-12">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e2738" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke={gaugeColor} strokeWidth="3" strokeDasharray={`${animPct} ${100 - animPct}`} strokeLinecap="round" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">{animPct}%</span>
                    </div>
                  </div>
                  <span className="text-[9px] mt-1 text-center" style={{ color: '#8890a0' }}>{kpi.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Bowling Chart Demo Panel ─── */
function BowlingDemo({ progress }: { progress: number }) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const rows = [
    { name: 'Part number count', owner: 'Mike J.', plan: [5058,4917,4775,4633,4492,4350,4208,4067,3925,3783,3642,3500], actual: [5116,5033,null,null,null,null,null,null,null,null,null,null] },
    { name: 'OQD rate', owner: 'Lisa P.', plan: [92.3,92.5,92.8,93,93.3,93.5,93.8,94,94.3,94.5,94.8,95], actual: [92.5,93.2,null,null,null,null,null,null,null,null,null,null] },
    { name: 'OTD rate', owner: 'David K.', plan: [95.3,95.5,95.8,96,96.3,96.5,96.8,97,97.3,97.5,97.8,98], actual: [95.4,95.6,null,null,null,null,null,null,null,null,null,null] },
    { name: 'Safety incidents', owner: 'Lisa P.', plan: [3,3,2,2,2,2,1,1,1,1,0,0], actual: [1,1,null,null,null,null,null,null,null,null,null,null] },
    { name: 'Changeover time', owner: 'James W.', plan: [29,28,27,26,25,24,23,22,21,20,19,18], actual: [32,30,null,null,null,null,null,null,null,null,null,null] },
  ];
  const revealCols = Math.floor(progress * 16);
  const getCellColor = (plan: number, actual: number | null, ri: number) => {
    if (actual === null) return 'transparent';
    const down = ri === 0 || ri === 3 || ri === 4;
    if (down) return actual <= plan ? '#10b981' : actual <= plan * 1.1 ? '#f59e0b' : '#ef4444';
    return actual >= plan ? '#10b981' : actual >= plan * 0.9 ? '#f59e0b' : '#ef4444';
  };

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Bowling Chart — Plan vs Actual</h3>
        <p className="text-[10px] text-white/50">Monthly target tracking with color-coded performance</p>
      </div>
      <div className="flex-1 overflow-auto rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <table className="w-full text-[10px]" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1e2738' }}>
              <th className="px-2 py-2 text-left font-semibold" style={{ color: '#596475', width: '30px' }}>#</th>
              <th className="px-1 py-2 text-left font-semibold" style={{ color: '#596475' }}>KPI</th>
              <th className="px-1 py-2 text-left font-semibold" style={{ color: '#596475' }}>Owner</th>
              <th className="px-1 py-2 text-center font-semibold" style={{ color: '#596475' }}>P/A</th>
              {months.map((m, i) => (
                <th key={i} className="px-1 py-2 text-center font-semibold transition-all duration-300" style={{ color: revealCols > i ? '#c0c6d0' : '#2e3a4e' }}>{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: '1px solid #151d2e' }}>
                <td className="px-2 py-1.5 font-mono" style={{ color: '#596475' }}>{ri + 1}</td>
                <td className="px-1 py-1.5 font-semibold" style={{ color: '#c0c6d0' }}>{row.name}</td>
                <td className="px-1 py-1.5" style={{ color: '#8890a0' }}>{row.owner}</td>
                <td className="px-1 py-1.5 text-center">
                  <div className="text-[9px]" style={{ color: '#8C34E9' }}>Plan</div>
                  <div className="text-[9px]" style={{ color: '#1DB8CE' }}>Actual</div>
                </td>
                {months.map((_, mi) => {
                  const plan = row.plan[mi];
                  const actual = row.actual[mi];
                  return (
                    <td key={mi} className="px-0.5 py-0.5 text-center">
                      <div className="transition-all duration-300" style={{ opacity: revealCols > mi ? 1 : 0.1 }}>
                        <div className="text-[9px] py-0.5" style={{ color: '#8890a0' }}>{plan}</div>
                        {actual !== null && (
                          <div className="text-[9px] py-0.5 rounded font-bold" style={{ background: getCellColor(plan, actual, ri), color: '#fff' }}>{actual}</div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 px-4 py-2" style={{ borderTop: '1px solid #1e2738' }}>
          {[{ label: 'On/above target', color: '#10b981' }, { label: 'Near target', color: '#f59e0b' }, { label: 'Below target', color: '#ef4444' }].map((l, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ background: l.color }} />
              <span className="text-[9px]" style={{ color: '#596475' }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Catchball Demo Panel ─── */
function CatchballDemo({ progress }: { progress: number }) {
  const cascade = [
    {
      bo: { code: 'BO1', desc: 'Reduce manufacturing complexity by 50%', cat: 'COST' },
      tactics: [
        { code: 'T1', desc: 'Reduce part numbers from 5200 to 3500', owner: 'Mike J.', projects: [{ code: 'P1.1', name: 'Complexity reduction analysis', pct: 65, kpis: ['Part number count: 4200/3500'] }, { code: 'P1.2', name: 'New pricing model rollout', pct: 40, kpis: ['OTD rate: 96.2/98%'] }] },
        { code: 'T5', desc: 'Reduce changeover time by 40%', owner: 'James W.', projects: [{ code: 'P1.6', name: 'SMED implementation', pct: 20, kpis: ['Changeover: 28/18 min'] }] },
      ],
    },
    {
      bo: { code: 'BO2', desc: 'Achieve zero workplace incidents', cat: 'SAFETY' },
      tactics: [
        { code: 'T2', desc: 'Implement 5S across all production cells', owner: 'Lisa P.', projects: [{ code: 'P1.3', name: 'Safety plan execution', pct: 30, kpis: ['Safety incidents: 2/0', 'OQD rate: 92.5/95%'] }] },
      ],
    },
  ];
  const catColor: Record<string, string> = { COST: '#ef4444', SAFETY: '#f59e0b', DELIVERY: '#10b981', QUALITY: '#8C34E9', MORALE: '#1DB8CE' };
  const revealDepth = Math.floor(progress * 8);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Catchball — Goal Cascade</h3>
        <p className="text-[10px] text-white/50">Strategic alignment from breakthrough objectives to KPIs</p>
      </div>
      <div className="flex-1 overflow-auto rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="flex items-center gap-2 mb-3 pb-2" style={{ borderBottom: '1px solid #1e2738' }}>
          {[{ icon: Target, label: 'Breakthrough Objectives', color: '#8C34E9' }, { icon: GitBranchPlus, label: 'Tactics', color: '#1DB8CE' }, { icon: Grid3X3, label: 'Projects', color: '#f97316' }, { icon: BarChart3, label: 'KPIs', color: '#3b82f6' }].map((l, i) => (
            <div key={i} className="flex items-center gap-1">
              <l.icon className="w-3 h-3" style={{ color: l.color }} />
              <span className="text-[9px] font-semibold" style={{ color: l.color }}>{l.label}</span>
              {i < 3 && <ChevronRight className="w-3 h-3" style={{ color: '#2e3a4e' }} />}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {cascade.map((item, boIdx) => (
            <div key={boIdx} className="rounded-md overflow-hidden transition-all duration-500" style={{ border: '1px solid #1e2738', opacity: revealDepth > 0 ? 1 : 0.15, transform: revealDepth > 0 ? 'translateY(0)' : 'translateY(12px)' }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: 'rgba(140,52,233,0.06)', borderBottom: '1px solid #1e2738' }}>
                <Target className="w-4 h-4" style={{ color: '#8C34E9' }} />
                <span className="text-[10px] font-mono font-bold" style={{ color: '#8C34E9' }}>{item.bo.code}</span>
                <span className="text-xs font-semibold text-white">{item.bo.desc}</span>
                <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${catColor[item.bo.cat]}20`, color: catColor[item.bo.cat] }}>{item.bo.cat}</span>
              </div>
              {item.tactics.map((tactic, ti) => (
                <div key={ti} className="pl-5 transition-all duration-500" style={{ opacity: revealDepth > 1 ? 1 : 0.15, borderBottom: ti < item.tactics.length - 1 ? '1px solid #151d2e' : 'none' }}>
                  <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: 'rgba(29,184,206,0.04)' }}>
                    <GitBranchPlus className="w-3.5 h-3.5" style={{ color: '#1DB8CE' }} />
                    <span className="text-[9px] font-mono font-bold" style={{ color: '#1DB8CE' }}>{tactic.code}</span>
                    <span className="text-[11px]" style={{ color: '#c0c6d0' }}>{tactic.desc}</span>
                    <span className="ml-auto text-[9px]" style={{ color: '#596475' }}>{tactic.owner}</span>
                  </div>
                  {tactic.projects.map((proj, pi) => (
                    <div key={pi} className="pl-6 transition-all duration-500" style={{ opacity: revealDepth > 2 ? 1 : 0.15 }}>
                      <div className="flex items-center gap-2 px-3 py-1" style={{ background: 'rgba(249,115,22,0.03)' }}>
                        <Grid3X3 className="w-3 h-3" style={{ color: '#f97316' }} />
                        <span className="text-[9px] font-mono font-bold" style={{ color: '#596475' }}>{proj.code}</span>
                        <span className="text-[10px]" style={{ color: '#c0c6d0' }}>{proj.name}</span>
                        <div className="ml-auto flex items-center gap-1">
                          <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: '#1e2738' }}>
                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${revealDepth > 2 ? proj.pct : 0}%`, background: '#f97316' }} />
                          </div>
                          <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{proj.pct}%</span>
                        </div>
                      </div>
                      <div className="pl-6 transition-all duration-500" style={{ opacity: revealDepth > 3 ? 1 : 0.15 }}>
                        {proj.kpis.map((kpi, ki) => (
                          <div key={ki} className="flex items-center gap-2 px-3 py-0.5">
                            <BarChart3 className="w-2.5 h-2.5" style={{ color: '#3b82f6' }} />
                            <span className="text-[9px]" style={{ color: '#8890a0' }}>{kpi}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
