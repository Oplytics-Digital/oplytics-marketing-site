/**
 * SQDCP Dashboard Animated Demo — 20-second looping
 * Phases: Dashboard Overview, Data Entry, Trend Analysis, Action Tracker
 */
import { AlertTriangle, CheckCircle2, TrendingUp, ClipboardList } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'dashboard', label: 'Dashboard', duration: 5000 },
  { id: 'entry', label: 'Data Entry', duration: 5000 },
  { id: 'trends', label: 'Trends', duration: 5000 },
  { id: 'actions', label: 'Action Tracker', duration: 5000 },
];

export default function SQDCPHubDemo() {
  return (
    <AnimatedDemoShell serviceName="SQDCP Dashboard" accentColor="#10b981" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <SQDCPDashboard progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <DataEntryDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <TrendDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <ActionTrackerDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── SQDCP Dashboard ─── */
function SQDCPDashboard({ progress }: { progress: number }) {
  const pillars = [
    { letter: 'S', name: 'Safety', color: '#ef4444', score: 92, metrics: [{ name: 'Lost Time Incidents', value: '0', target: '0' }, { name: 'Near Misses', value: '2', target: '<5' }] },
    { letter: 'Q', name: 'Quality', color: '#8C34E9', score: 96, metrics: [{ name: 'First Pass Yield', value: '96.3%', target: '95%' }, { name: 'Scrap Rate', value: '1.5%', target: '<2%' }, { name: 'Customer Returns', value: '0', target: '0' }] },
    { letter: 'D', name: 'Delivery', color: '#f59e0b', score: 88, metrics: [{ name: 'OTD Rate', value: '96.9%', target: '98%' }, { name: 'Plan Adherence', value: '95.8%', target: '95%' }] },
    { letter: 'C', name: 'Cost', color: '#1DB8CE', score: 78, metrics: [{ name: 'Cost per Unit', value: '£1,831', target: '<£1,800' }, { name: 'Energy per Unit', value: '84 kWh', target: '<80' }] },
    { letter: 'P', name: 'People', color: '#10b981', score: 94, metrics: [{ name: 'Attendance', value: '96.4%', target: '95%' }, { name: 'Training Comp.', value: '93.2%', target: '90%' }] },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>SQDCP Dashboard — Vita Group, Middleton Plant</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[10px] text-white/60">Today's Status:</span>
          <span className="text-[10px] font-bold text-yellow-300 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Warning</span>
          <span className="text-[10px] text-white/60 ml-2">Data: <span className="text-white font-bold">11/11</span> metrics</span>
          <span className="text-[10px] text-white/60 ml-2">Open Actions: <span className="text-white font-bold">1</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-5 gap-2 h-full">
          {pillars.map((p, pi) => {
            const show = progress > pi * 0.15;
            const animScore = show ? Math.min(p.score, Math.floor(progress * 2 * p.score)) : 0;
            const gaugeColor = animScore >= 90 ? '#10b981' : animScore >= 70 ? '#f59e0b' : '#ef4444';
            return (
              <div key={pi} className="rounded-md overflow-hidden transition-all duration-500" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: show ? 1 : 0.15, transform: show ? 'translateY(0)' : 'translateY(12px)' }}>
                <div className="px-2 py-2 flex items-center gap-1.5" style={{ borderBottom: '1px solid #1e2738' }}>
                  <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-black text-white" style={{ background: p.color }}>{p.letter}</div>
                  <span className="text-xs font-bold text-white" style={{ fontFamily: 'Montserrat' }}>{p.name}</span>
                </div>
                <div className="p-2 flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-2">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1e2738" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke={gaugeColor} strokeWidth="3" strokeDasharray={`${animScore} ${100 - animScore}`} strokeLinecap="round" className="transition-all duration-700" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>{animScore}%</span>
                    </div>
                  </div>
                  <div className="w-full space-y-1">
                    {p.metrics.map((m, mi) => (
                      <div key={mi} className="flex items-center justify-between transition-all duration-300" style={{ opacity: progress > 0.3 + mi * 0.15 ? 1 : 0 }}>
                        <span className="text-[8px] truncate" style={{ color: '#8890a0' }}>{m.name}</span>
                        <span className="text-[8px] font-bold" style={{ color: '#c0c6d0' }}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Data Entry Demo ─── */
function DataEntryDemo({ progress }: { progress: number }) {
  const categories = [
    { name: 'Safety', color: '#ef4444', metrics: [{ name: 'Lost Time Incidents', type: 'count', target: '0.0000', value: '' }, { name: 'Near Miss Reports', type: 'count', target: '8.0000', value: '' }] },
    { name: 'Quality', color: '#8C34E9', metrics: [{ name: 'First Pass Yield', type: '%', target: '87.0000', value: '' }, { name: 'Scrap Rate', type: '%', target: '1.5000', value: '' }, { name: 'Customer Returns', type: 'count', target: '0.0000', value: '' }] },
    { name: 'Delivery', color: '#f59e0b', metrics: [{ name: 'On-Time Despatch', type: '%', target: '98.0000', value: '' }] },
  ];
  const revealCats = Math.floor(progress * 4);
  const typingProgress = Math.min(1, progress * 3);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Structured Data Entry — Daily Metrics</h3>
        <p className="text-[10px] text-white/50">Enter today's metric values. Red or amber readings will prompt action card creation.</p>
      </div>
      <div className="flex-1 overflow-auto rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="flex items-center gap-2 mb-3 px-2">
          <span className="text-[10px]" style={{ color: '#596475' }}>Entering data for:</span>
          <span className="text-[10px] font-bold text-white">Tuesday 3 March 2026</span>
          <span className="text-[10px] ml-2" style={{ color: '#596475' }}>Submitted by:</span>
          <div className="px-2 py-0.5 rounded text-[10px]" style={{ background: '#151d2e', border: '1px solid #1e2738', color: '#8890a0' }}>Select your name...</div>
        </div>
        <div className="space-y-3">
          {categories.map((cat, ci) => (
            <div key={ci} className="rounded-md overflow-hidden transition-all duration-500" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: ci < revealCats ? 1 : 0.15, transform: ci < revealCats ? 'translateY(0)' : 'translateY(8px)' }}>
              <div className="px-3 py-2 flex items-center gap-2" style={{ borderBottom: '1px solid #1e2738' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span className="text-xs font-bold text-white">{cat.name}</span>
              </div>
              {cat.metrics.map((m, mi) => (
                <div key={mi} className="px-3 py-2 flex items-center gap-3" style={{ borderBottom: mi < cat.metrics.length - 1 ? '1px solid #1e2738' : 'none' }}>
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold" style={{ color: '#c0c6d0' }}>{m.name}</span>
                    <span className="text-[9px] ml-1" style={{ color: '#596475' }}>({m.type})</span>
                    <p className="text-[9px]" style={{ color: '#596475' }}>Target: {m.target}</p>
                  </div>
                  <div className="w-16 h-7 rounded flex items-center justify-center" style={{ background: '#0d1220', border: '1px solid #1e2738' }}>
                    <span className="text-[10px]" style={{ color: typingProgress > 0.5 ? '#c0c6d0' : '#2e3a4e' }}>—</span>
                  </div>
                  <div className="w-8 h-7 rounded flex items-center justify-center" style={{ background: '#1DB8CE' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Trend Demo ─── */
function TrendDemo({ progress }: { progress: number }) {
  const weeks = ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7','Wk 8'];
  const pillarData = [
    { name: 'Safety', color: '#ef4444', data: [85, 88, 90, 87, 92, 91, 93, 92] },
    { name: 'Quality', color: '#8C34E9', data: [90, 91, 89, 93, 94, 95, 96, 96] },
    { name: 'Delivery', color: '#f59e0b', data: [82, 84, 83, 86, 85, 88, 87, 88] },
    { name: 'Cost', color: '#1DB8CE', data: [70, 72, 71, 74, 73, 76, 77, 78] },
    { name: 'People', color: '#10b981', data: [88, 89, 91, 90, 93, 92, 94, 94] },
  ];
  const revealPoints = Math.floor(progress * 8);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>SQDCP Trend Analysis — 8-Week View</h3>
        <p className="text-[10px] text-white/50">All five pillars tracked over time with target lines</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-4" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="h-full flex flex-col">
          <div className="flex-1 relative">
            <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between">
              {[100, 90, 80, 70, 60].map(v => (
                <span key={v} className="text-[8px] text-right" style={{ color: '#596475' }}>{v}%</span>
              ))}
            </div>
            <div className="ml-10 h-full flex flex-col">
              <div className="flex-1 relative">
                {[100, 90, 80, 70, 60].map((v, i) => (
                  <div key={i} className="absolute w-full h-px" style={{ top: `${((100 - v) / 40) * 100}%`, background: '#1e2738' }} />
                ))}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {pillarData.map((pillar, pi) => (
                    <polyline key={pi} fill="none" stroke={pillar.color} strokeWidth="0.6" opacity={0.8} points={pillar.data.slice(0, revealPoints).map((v, i) => `${(i / 7) * 100},${((100 - v) / 40) * 100}`).join(' ')} />
                  ))}
                  {pillarData.map((pillar, pi) => (
                    pillar.data.slice(0, revealPoints).map((v, i) => (
                      <circle key={`${pi}-${i}`} cx={(i / 7) * 100} cy={((100 - v) / 40) * 100} r="0.8" fill={pillar.color} />
                    ))
                  ))}
                </svg>
              </div>
              <div className="flex justify-between mt-1">
                {weeks.map((w, i) => (
                  <span key={i} className="text-[7px]" style={{ color: i < revealPoints ? '#8890a0' : '#1e2738' }}>{w}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 justify-center">
            {pillarData.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 transition-all duration-300" style={{ opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
                <div className="w-2.5 h-0.5 rounded" style={{ background: p.color }} />
                <span className="text-[9px] font-semibold" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Action Tracker Demo ─── */
function ActionTrackerDemo({ progress }: { progress: number }) {
  const actions = [
    { title: 'Install Vibration Sensors on All Mixing Heads', priority: 'Medium', status: 'In Progress', due: '3/05/2026', owner: 'Paul Cox', source: 'SQDCP' },
    { title: 'Elevated Scrap Rate — Post Mixing Head Incident', priority: 'High', status: 'Closed', due: '2/25/2026', owner: 'Paul Cox', source: 'SQDCP' },
    { title: 'Mixing Head #2 Malfunction — Emergency Repair', priority: 'Critical', status: 'Closed', due: '2/20/2026', owner: 'Paul Cox', source: 'Tier 2' },
    { title: 'CapEx Proposal — Oven Hall Insulation Upgrade', priority: 'Low', status: 'Open', due: '4/01/2026', owner: 'Paul Cox', source: 'SQDCP' },
    { title: 'Customer Returns — Bedding Grade Firmness Complaint', priority: 'Medium', status: 'Closed', due: '2/18/2026', owner: 'Paul Cox', source: 'SQDCP' },
    { title: 'Slip Injury — Wet Floor Near Curing Oven Exit', priority: 'High', status: 'Closed', due: '2/14/2026', owner: 'Paul Cox', source: 'SQDCP' },
  ];
  const statusCounts = { Open: 1, 'In Progress': 2, 'Awaiting Review': 0, Closed: 6 };
  const priorityColor: Record<string, string> = { Critical: '#ef4444', High: '#f97316', Medium: '#f59e0b', Low: '#10b981' };
  const statusColor: Record<string, string> = { Open: '#10b981', 'In Progress': '#f59e0b', 'Awaiting Review': '#8C34E9', Closed: '#596475' };
  const revealCount = Math.floor(progress * actions.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Integrated Action Tracker — Corrective Actions</h3>
        <p className="text-[10px] text-white/50">Manage corrective actions, escalations, and track resolution</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* Status summary bar */}
        <div className="flex gap-2 px-3 py-2" style={{ borderBottom: '1px solid #1e2738' }}>
          {Object.entries(statusCounts).map(([status, count], i) => (
            <div key={i} className="flex-1 rounded px-2 py-1.5 flex items-center gap-2 transition-all duration-300" style={{ background: '#151d2e', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
              <div className="w-2 h-2 rounded-full" style={{ background: statusColor[status] || '#596475' }} />
              <span className="text-[9px]" style={{ color: '#8890a0' }}>{status}</span>
              <span className="text-xs font-black text-white ml-auto" style={{ fontFamily: 'Montserrat' }}>{count}</span>
            </div>
          ))}
        </div>
        {/* Action list */}
        <div className="flex-1 overflow-hidden px-1">
          {actions.map((a, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="flex items-center gap-2 px-2 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-15px)' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[a.status] || '#596475' }} />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-white block truncate">{a.title}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[8px] px-1 py-0.5 rounded font-bold" style={{ background: `${priorityColor[a.priority]}20`, color: priorityColor[a.priority] }}>{a.priority}</span>
                    <span className="text-[8px]" style={{ color: '#596475' }}>{a.status}</span>
                    <span className="text-[8px]" style={{ color: '#596475' }}>Due {a.due}</span>
                    <span className="text-[8px]" style={{ color: '#596475' }}>{a.owner}</span>
                    <span className="text-[8px]" style={{ color: '#1DB8CE' }}>{a.source}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
