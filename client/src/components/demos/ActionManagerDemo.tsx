/**
 * Action Manager Animated Demo — 20-second looping
 * Phases: Kanban Board, Action Detail, Analytics, Escalation
 */
import { AlertTriangle, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'kanban', label: 'Kanban Board', duration: 5000 },
  { id: 'detail', label: 'Action Detail', duration: 5000 },
  { id: 'analytics', label: 'Analytics', duration: 5000 },
  { id: 'escalation', label: 'Escalation', duration: 5000 },
];

export default function ActionManagerDemo() {
  return (
    <AnimatedDemoShell serviceName="Action Manager" accentColor="#22C55E" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <KanbanDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <ActionDetailDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <AnalyticsDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <EscalationDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── Kanban Board ─── */
function KanbanDemo({ progress }: { progress: number }) {
  const columns = [
    {
      title: 'Open', color: '#3b82f6', count: 4,
      cards: [
        { title: 'Install Vibration Sensors on Mixing Heads', priority: 'Medium', source: 'SQDCP', due: '3/05', owner: 'PC' },
        { title: 'CapEx Proposal — Oven Insulation Upgrade', priority: 'Low', source: 'SQDCP', due: '4/01', owner: 'PC' },
        { title: 'Update Risk Assessment — Chemical Store', priority: 'Medium', source: 'Audit', due: '3/12', owner: 'LP' },
        { title: 'Calibrate Temp Probes — Curing Ovens', priority: 'High', source: 'Quality', due: '3/08', owner: 'JW' },
      ],
    },
    {
      title: 'In Progress', color: '#f59e0b', count: 3,
      cards: [
        { title: 'Root Cause Analysis — Scrap Spike Line 2', priority: 'High', source: 'SQDCP', due: '3/03', owner: 'PC' },
        { title: 'Implement 5S in Assembly Cell B', priority: 'Medium', source: 'Policy', due: '3/15', owner: 'MJ' },
        { title: 'Train Operators on New SPC Charts', priority: 'Medium', source: 'Quality', due: '3/10', owner: 'LP' },
      ],
    },
    {
      title: 'Awaiting Review', color: '#8C34E9', count: 2,
      cards: [
        { title: 'Mixing Head #2 Emergency Repair', priority: 'Critical', source: 'Tier 2', due: '2/20', owner: 'PC' },
        { title: 'New PPE Signage — Foam Press Area', priority: 'Low', source: 'Safety', due: '2/28', owner: 'LP' },
      ],
    },
    {
      title: 'Closed', color: '#596475', count: 6,
      cards: [
        { title: 'Slip Injury — Wet Floor Near Oven Exit', priority: 'High', source: 'SQDCP', due: '2/14', owner: 'PC' },
        { title: 'Customer Returns — Firmness Complaint', priority: 'Medium', source: 'SQDCP', due: '2/18', owner: 'PC' },
      ],
    },
  ];
  const priorityColor: Record<string, string> = { Critical: '#ef4444', High: '#f97316', Medium: '#f59e0b', Low: '#10b981' };
  const revealCols = Math.floor(progress * 5);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #15803d 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Action Board — Kanban View</h3>
        <div className="flex gap-4 mt-1">
          <span className="text-[10px] text-white/60">Total: <span className="text-white font-bold">15</span></span>
          <span className="text-[10px] text-white/60">Overdue: <span className="text-red-300 font-bold">2</span></span>
          <span className="text-[10px] text-white/60">Due This Week: <span className="text-yellow-300 font-bold">4</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-2" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-4 gap-2 h-full">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col rounded-md overflow-hidden transition-all duration-500" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: ci < revealCols ? 1 : 0.15, transform: ci < revealCols ? 'translateY(0)' : 'translateY(12px)' }}>
              <div className="px-2 py-1.5 flex items-center gap-2" style={{ borderBottom: '1px solid #1e2738' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: col.color }} />
                <span className="text-[10px] font-bold text-white">{col.title}</span>
                <span className="text-[9px] ml-auto px-1.5 py-0.5 rounded" style={{ background: `${col.color}20`, color: col.color }}>{col.count}</span>
              </div>
              <div className="flex-1 overflow-auto p-1.5 space-y-1.5">
                {col.cards.map((card, cdi) => {
                  const cardShow = progress > 0.1 + ci * 0.15 + cdi * 0.08;
                  return (
                    <div key={cdi} className="rounded p-2 transition-all duration-300" style={{ background: '#0d1220', border: '1px solid #1e2738', opacity: cardShow ? 1 : 0.1, transform: cardShow ? 'translateY(0)' : 'translateY(6px)' }}>
                      <p className="text-[9px] font-semibold text-white leading-tight mb-1">{card.title}</p>
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[7px] px-1 py-0.5 rounded font-bold" style={{ background: `${priorityColor[card.priority]}20`, color: priorityColor[card.priority] }}>{card.priority}</span>
                        <span className="text-[7px]" style={{ color: '#1DB8CE' }}>{card.source}</span>
                        <span className="text-[7px] ml-auto" style={{ color: '#596475' }}>{card.due}</span>
                        <span className="text-[7px] w-5 h-5 rounded-full flex items-center justify-center font-bold" style={{ background: '#1e2738', color: '#8890a0' }}>{card.owner}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Action Detail ─── */
function ActionDetailDemo({ progress }: { progress: number }) {
  const steps = [
    { label: 'Opened', date: '20 Feb 2026', done: true },
    { label: 'Assigned', date: '20 Feb 2026', done: true },
    { label: 'In Progress', date: '21 Feb 2026', done: true },
    { label: 'Root Cause', date: '22 Feb 2026', done: true },
    { label: 'Corrective Action', date: '24 Feb 2026', done: progress > 0.5 },
    { label: 'Verification', date: '—', done: false },
    { label: 'Closed', date: '—', done: false },
  ];
  const revealSteps = Math.floor(progress * 8);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Action Detail — ACT-2026-0047</h3>
        <p className="text-[10px] text-white/50">Elevated Scrap Rate — Post Mixing Head Incident</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-3 h-full">
          {/* Left: Details */}
          <div className="col-span-2 p-3 flex flex-col gap-3" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Priority', value: 'High', color: '#f97316' },
                { label: 'Source', value: 'SQDCP Dashboard', color: '#1DB8CE' },
                { label: 'Owner', value: 'Paul Cox', color: '#c0c6d0' },
                { label: 'Due Date', value: '25 Feb 2026', color: '#f59e0b' },
              ].map((f, i) => (
                <div key={i} className="rounded p-2 transition-all duration-300" style={{ background: '#151d2e', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
                  <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{f.label}</span>
                  <span className="text-[11px] font-semibold" style={{ color: f.color }}>{f.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded p-2" style={{ background: '#151d2e' }}>
              <span className="text-[8px] uppercase tracking-wider font-bold block mb-1" style={{ color: '#596475' }}>Description</span>
              <p className="text-[10px] leading-relaxed" style={{ color: '#c0c6d0' }}>
                Following the Mixing Head #2 malfunction on 19 Feb, scrap rate on Line 2 increased from 1.5% to 4.2%.
                Root cause investigation required. Corrective action to restore scrap rate to target (&lt;2%).
              </p>
            </div>
            <div className="rounded p-2" style={{ background: '#151d2e' }}>
              <span className="text-[8px] uppercase tracking-wider font-bold block mb-1" style={{ color: '#596475' }}>Root Cause (5-Why)</span>
              <div className="space-y-1">
                {[
                  'Why? Scrap rate elevated post-repair',
                  'Why? Mixing head calibration drift',
                  'Why? No post-repair calibration SOP',
                  'Why? Maintenance procedure gap',
                ].map((w, i) => (
                  <div key={i} className="flex items-center gap-2 transition-all duration-300" style={{ opacity: progress > 0.3 + i * 0.12 ? 1 : 0.15 }}>
                    <span className="text-[9px] font-mono" style={{ color: '#f97316' }}>→</span>
                    <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Progress timeline */}
          <div className="p-3">
            <span className="text-[10px] font-bold block mb-3" style={{ color: '#596475' }}>Progress Timeline</span>
            <div className="space-y-0">
              {steps.map((s, i) => {
                const show = i < revealSteps;
                return (
                  <div key={i} className="flex gap-2 transition-all duration-300" style={{ opacity: show ? 1 : 0.15 }}>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ background: s.done ? '#22C55E' : '#1e2738', border: s.done ? 'none' : '1px solid #2e3a4e' }}>
                        {s.done && <CheckCircle2 className="w-2 h-2 text-white" />}
                      </div>
                      {i < steps.length - 1 && <div className="w-px h-5" style={{ background: s.done ? '#22C55E40' : '#1e2738' }} />}
                    </div>
                    <div className="pb-2">
                      <span className="text-[9px] font-semibold block" style={{ color: s.done ? '#c0c6d0' : '#596475' }}>{s.label}</span>
                      <span className="text-[8px]" style={{ color: '#596475' }}>{s.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Analytics ─── */
function AnalyticsDemo({ progress }: { progress: number }) {
  const sourceData = [
    { source: 'SQDCP Dashboard', count: 42, pct: 35 },
    { source: 'Audits', count: 24, pct: 20 },
    { source: 'Safety', count: 18, pct: 15 },
    { source: 'Quality', count: 15, pct: 13 },
    { source: 'Tier Meetings', count: 12, pct: 10 },
    { source: 'Other', count: 9, pct: 7 },
  ];
  const ageingData = [
    { range: '0-7 days', count: 8, color: '#10b981' },
    { range: '8-14 days', count: 5, color: '#22C55E' },
    { range: '15-30 days', count: 3, color: '#f59e0b' },
    { range: '31-60 days', count: 2, color: '#f97316' },
    { range: '60+ days', count: 1, color: '#ef4444' },
  ];
  const revealBars = Math.floor(progress * 7);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Action Analytics — Performance Dashboard</h3>
        <p className="text-[10px] text-white/50">Completion rates, ageing analysis, and source breakdown</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: 'Total Actions', value: '120', color: '#3b82f6' },
            { label: 'Completion Rate', value: '87%', color: '#22C55E' },
            { label: 'Avg Days to Close', value: '12.4', color: '#f59e0b' },
            { label: 'Overdue', value: '3', color: '#ef4444' },
          ].map((s, i) => (
            <div key={i} className="rounded p-2 text-center transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
              <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{s.label}</span>
              <span className="text-lg font-black block" style={{ fontFamily: 'Montserrat', color: s.color }}>{s.value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {/* Source breakdown */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>Actions by Source</span>
            <div className="space-y-1.5">
              {sourceData.map((s, i) => {
                const show = i < revealBars;
                return (
                  <div key={i} className="flex items-center gap-2 transition-all duration-400" style={{ opacity: show ? 1 : 0.15 }}>
                    <span className="text-[9px] w-20 text-right" style={{ color: '#8890a0' }}>{s.source}</span>
                    <div className="flex-1 h-3 rounded" style={{ background: '#0d1220' }}>
                      <div className="h-full rounded transition-all duration-700" style={{ width: show ? `${s.pct * 2.5}%` : '0%', background: '#22C55E' }} />
                    </div>
                    <span className="text-[9px] font-bold w-8" style={{ color: show ? '#22C55E' : '#1e2738' }}>{s.count}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Ageing analysis */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>Action Ageing</span>
            <div className="flex items-end gap-2 h-32">
              {ageingData.map((a, i) => {
                const show = progress > 0.15 * (i + 1);
                const maxCount = 8;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[8px] font-bold" style={{ color: show ? a.color : '#1e2738' }}>{a.count}</span>
                    <div className="w-full rounded-t transition-all duration-500" style={{ height: show ? `${(a.count / maxCount) * 100}%` : '4px', background: show ? a.color : '#151d2e', minHeight: '4px' }} />
                    <span className="text-[7px] text-center" style={{ color: '#596475' }}>{a.range}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Escalation ─── */
function EscalationDemo({ progress }: { progress: number }) {
  const escalations = [
    { action: 'ACT-0032 — Mixing Head Calibration SOP', from: 'Paul Cox', to: 'Mike Johnson', reason: 'Overdue by 5 days', severity: 'high', time: '14:32' },
    { action: 'ACT-0028 — Chemical Store Risk Assessment', from: 'Lisa Palmer', to: 'David King', reason: 'Blocked — awaiting CapEx approval', severity: 'medium', time: '11:15' },
    { action: 'ACT-0045 — SPC Training Programme', from: 'System', to: 'Lisa Palmer', reason: 'Auto-escalated — 3 days until due, 0% complete', severity: 'high', time: '09:00' },
    { action: 'ACT-0019 — Oven Insulation Assessment', from: 'James Ward', to: 'Paul Cox', reason: 'Budget review required', severity: 'low', time: '08:30' },
  ];
  const sevColor: Record<string, string> = { high: '#ef4444', medium: '#f59e0b', low: '#3b82f6' };
  const revealCount = Math.floor(progress * escalations.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Escalation Management — Active Escalations</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Active: <span className="text-white font-bold">4</span></span>
          <span className="text-[10px] text-white/60">Auto-escalated: <span className="text-red-300 font-bold">1</span></span>
          <span className="text-[10px] text-white/60">Manual: <span className="text-yellow-300 font-bold">3</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-0">
          {escalations.map((e, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="px-3 py-3 transition-all duration-400" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-15px)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: sevColor[e.severity] }} />
                  <span className="text-[10px] font-semibold text-white flex-1">{e.action}</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase" style={{ background: `${sevColor[e.severity]}20`, color: sevColor[e.severity] }}>{e.severity}</span>
                  <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{e.time}</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <span className="text-[9px]" style={{ color: '#8890a0' }}>{e.from}</span>
                  <ArrowUpRight className="w-3 h-3" style={{ color: '#596475' }} />
                  <span className="text-[9px] font-semibold" style={{ color: '#1DB8CE' }}>{e.to}</span>
                  <span className="text-[8px] ml-2" style={{ color: '#596475' }}>{e.reason}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Escalation rules summary */}
        <div className="px-3 py-2 mt-auto" style={{ borderTop: '1px solid #1e2738' }}>
          <span className="text-[9px] font-bold block mb-1.5" style={{ color: '#596475' }}>Active Escalation Rules</span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { rule: 'Auto-escalate overdue >3 days', status: 'Active', color: '#22C55E' },
              { rule: 'Notify manager on critical priority', status: 'Active', color: '#22C55E' },
              { rule: 'Weekly digest to leadership', status: 'Active', color: '#22C55E' },
            ].map((r, i) => (
              <div key={i} className="rounded px-2 py-1.5 transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.4 + i * 0.15 ? 1 : 0.2 }}>
                <span className="text-[8px] block" style={{ color: '#8890a0' }}>{r.rule}</span>
                <span className="text-[7px] font-bold uppercase" style={{ color: r.color }}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
