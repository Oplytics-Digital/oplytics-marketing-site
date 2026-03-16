/**
 * Quality Manager Animated Demo — 20-second looping
 * Phases: Quality Dashboard, Non-Conformance, CAPA Workflow, Audit Schedule
 */
import { CheckCircle2, AlertTriangle, ClipboardList, Calendar } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'dashboard', label: 'Dashboard', duration: 5000 },
  { id: 'ncr', label: 'NCR Log', duration: 5000 },
  { id: 'capa', label: 'CAPA', duration: 5000 },
  { id: 'audit', label: 'Audit Schedule', duration: 5000 },
];

export default function QualityManagerDemo() {
  return (
    <AnimatedDemoShell serviceName="Quality Manager" accentColor="#22C55E" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <QualityDashboard progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <NCRLogDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <CAPADemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <AuditScheduleDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── Quality Dashboard ─── */
function QualityDashboard({ progress }: { progress: number }) {
  const kpis = [
    { label: 'First Pass Yield', value: 96.3, unit: '%', color: '#22C55E', target: 95 },
    { label: 'Scrap Rate', value: 1.5, unit: '%', color: '#f59e0b', target: 2 },
    { label: 'Customer Returns', value: 0, unit: '', color: '#10b981', target: 0 },
    { label: 'Open NCRs', value: 4, unit: '', color: '#ef4444', target: 0 },
  ];
  const defectTypes = [
    { type: 'Dimensional', count: 12, pct: 32 },
    { type: 'Surface Finish', count: 8, pct: 22 },
    { type: 'Material', count: 6, pct: 16 },
    { type: 'Assembly', count: 5, pct: 14 },
    { type: 'Packaging', count: 3, pct: 8 },
    { type: 'Other', count: 3, pct: 8 },
  ];
  const yieldTrend = [94.1, 94.8, 95.2, 94.9, 95.5, 95.8, 96.1, 95.7, 96.0, 96.2, 96.1, 96.3];
  const revealPoints = Math.floor(progress * 12);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #15803d 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Quality Dashboard — Key Metrics</h3>
        <p className="text-[10px] text-white/50">Real-time quality performance and defect analysis</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {kpis.map((k, i) => {
            const animVal = Math.min(k.value, +(progress * 2 * k.value).toFixed(1));
            const met = k.label === 'Scrap Rate' ? animVal <= k.target : k.label === 'Open NCRs' ? animVal <= k.target : animVal >= k.target;
            return (
              <div key={i} className="rounded p-2 text-center transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
                <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{k.label}</span>
                <span className="text-lg font-black block" style={{ fontFamily: 'Montserrat', color: k.color }}>{animVal}{k.unit}</span>
                <span className="text-[7px]" style={{ color: met ? '#22C55E' : '#ef4444' }}>{met ? '✓ On Target' : '✗ Off Target'}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* Defect Pareto */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>Defect Pareto</span>
            <div className="space-y-1">
              {defectTypes.map((d, i) => {
                const show = progress > 0.1 + i * 0.1;
                return (
                  <div key={i} className="flex items-center gap-2 transition-all duration-400" style={{ opacity: show ? 1 : 0.15 }}>
                    <span className="text-[9px] w-20 text-right" style={{ color: '#8890a0' }}>{d.type}</span>
                    <div className="flex-1 h-3 rounded" style={{ background: '#0d1220' }}>
                      <div className="h-full rounded transition-all duration-700" style={{ width: show ? `${d.pct * 2.5}%` : '0%', background: '#22C55E' }} />
                    </div>
                    <span className="text-[9px] font-bold w-8" style={{ color: show ? '#22C55E' : '#1e2738' }}>{d.count}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* FPY Trend */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>First Pass Yield Trend (12-month)</span>
            <div className="relative h-28">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1={((98 - 95) / 6) * 100} x2="100" y2={((98 - 95) / 6) * 100} stroke="#f59e0b" strokeWidth="0.3" strokeDasharray="2 2" />
                <polyline fill="none" stroke="#22C55E" strokeWidth="0.8" points={yieldTrend.slice(0, revealPoints).map((v, i) => `${(i / 11) * 100},${((98 - v) / 6) * 100}`).join(' ')} />
                {revealPoints > 1 && (
                  <polygon fill="rgba(34,197,94,0.1)" points={`0,100 ${yieldTrend.slice(0, revealPoints).map((v, i) => `${(i / 11) * 100},${((98 - v) / 6) * 100}`).join(' ')} ${((revealPoints - 1) / 11) * 100},100`} />
                )}
                {yieldTrend.slice(0, revealPoints).map((v, i) => (
                  <circle key={i} cx={(i / 11) * 100} cy={((98 - v) / 6) * 100} r="1" fill="#22C55E" />
                ))}
              </svg>
              <span className="absolute right-0 text-[7px] font-bold" style={{ color: '#f59e0b', top: `${((98 - 95) / 6) * 100}%`, transform: 'translateY(-50%)' }}>Target 95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── NCR Log ─── */
function NCRLogDemo({ progress }: { progress: number }) {
  const ncrs = [
    { id: 'NCR-0124', date: '3/03', product: 'Mattress Core — King', defect: 'Dimensional — width +4mm', severity: 'Major', status: 'Open', disposition: 'Pending' },
    { id: 'NCR-0123', date: '3/02', product: 'Foam Block — HR45', defect: 'Density below spec (43 kg/m³)', severity: 'Major', status: 'Under Investigation', disposition: 'Pending' },
    { id: 'NCR-0122', date: '3/01', product: 'Quilted Panel — Standard', defect: 'Surface blemish — stitch skip', severity: 'Minor', status: 'CAPA Raised', disposition: 'Use As-Is' },
    { id: 'NCR-0121', date: '2/28', product: 'Edge Band — 40mm', defect: 'Adhesion failure at joint', severity: 'Critical', status: 'CAPA Raised', disposition: 'Scrap' },
    { id: 'NCR-0120', date: '2/27', product: 'Mattress Core — Single', defect: 'Firmness out of spec', severity: 'Major', status: 'Closed', disposition: 'Rework' },
    { id: 'NCR-0119', date: '2/25', product: 'Packaging — Outer Wrap', defect: 'Tear in vacuum seal', severity: 'Minor', status: 'Closed', disposition: 'Rework' },
  ];
  const sevColor: Record<string, string> = { Critical: '#ef4444', Major: '#f59e0b', Minor: '#3b82f6' };
  const statusColor: Record<string, string> = { Open: '#3b82f6', 'Under Investigation': '#f59e0b', 'CAPA Raised': '#8C34E9', Closed: '#596475' };
  const revealCount = Math.floor(progress * ncrs.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Non-Conformance Register</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Open: <span className="text-white font-bold">2</span></span>
          <span className="text-[10px] text-white/60">Under Investigation: <span className="text-yellow-300 font-bold">1</span></span>
          <span className="text-[10px] text-white/60">CAPA Raised: <span className="text-purple-300 font-bold">2</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-7 gap-1 px-3 py-1.5" style={{ borderBottom: '1px solid #1e2738' }}>
          {['NCR #', 'Date', 'Product', 'Defect', 'Severity', 'Status', 'Disposition'].map(h => (
            <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
          ))}
        </div>
        {ncrs.map((n, i) => {
          const show = i < revealCount;
          return (
            <div key={i} className="grid grid-cols-7 gap-1 px-3 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-10px)' }}>
              <span className="text-[9px] font-mono font-bold" style={{ color: '#1DB8CE' }}>{n.id}</span>
              <span className="text-[9px]" style={{ color: '#596475' }}>{n.date}</span>
              <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{n.product}</span>
              <span className="text-[8px]" style={{ color: '#8890a0' }}>{n.defect}</span>
              <span className="text-[8px] px-1 py-0.5 rounded font-bold self-start" style={{ background: `${sevColor[n.severity]}20`, color: sevColor[n.severity] }}>{n.severity}</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[n.status] }} />
                <span className="text-[8px]" style={{ color: statusColor[n.status] }}>{n.status}</span>
              </div>
              <span className="text-[8px]" style={{ color: '#8890a0' }}>{n.disposition}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── CAPA Workflow ─── */
function CAPADemo({ progress }: { progress: number }) {
  const stages = [
    { name: 'Identification', desc: 'NCR-0121 — Adhesion failure at edge band joint', done: true },
    { name: 'Containment', desc: 'Quarantine affected batch (Lot 2026-0228-A). 100% inspection on current stock.', done: true },
    { name: 'Root Cause Analysis', desc: '5-Why: Adhesive temperature drift → thermostat calibration overdue → no PM schedule for adhesive system.', done: true },
    { name: 'Corrective Action', desc: 'Add adhesive system to PM schedule. Recalibrate thermostat. Update SOP-EB-004.', done: progress > 0.4 },
    { name: 'Preventive Action', desc: 'Install continuous temperature monitoring with alert at ±2°C deviation.', done: progress > 0.6 },
    { name: 'Verification', desc: 'Run 3 production batches. Verify zero adhesion failures. Review after 30 days.', done: progress > 0.8 },
    { name: 'Closure', desc: 'CAPA effective. Close NCR-0121 and update risk register.', done: false },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>CAPA Workflow — CAPA-2026-0089</h3>
        <p className="text-[10px] text-white/50">Corrective & Preventive Action for NCR-0121</p>
      </div>
      <div className="flex-1 overflow-auto rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-0">
          {stages.map((s, i) => {
            const show = progress > 0.08 * (i + 1);
            return (
              <div key={i} className="flex gap-3 transition-all duration-400" style={{ opacity: show ? 1 : 0.15 }}>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: s.done ? '#22C55E' : '#1e2738', border: s.done ? 'none' : '1px solid #2e3a4e' }}>
                    {s.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                    {!s.done && <span className="text-[8px] font-bold" style={{ color: '#596475' }}>{i + 1}</span>}
                  </div>
                  {i < stages.length - 1 && <div className="w-px flex-1 min-h-[16px]" style={{ background: s.done ? '#22C55E40' : '#1e2738' }} />}
                </div>
                <div className="pb-3 flex-1">
                  <span className="text-[11px] font-bold block" style={{ color: s.done ? '#c0c6d0' : '#596475' }}>{s.name}</span>
                  <p className="text-[9px] mt-0.5 leading-relaxed" style={{ color: '#8890a0' }}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Audit Schedule ─── */
function AuditScheduleDemo({ progress }: { progress: number }) {
  const audits = [
    { type: 'Internal', standard: 'ISO 9001', area: 'Production', date: '10 Mar 2026', status: 'Scheduled', auditor: 'Lisa Palmer', findings: 0 },
    { type: 'Internal', standard: 'ISO 14001', area: 'Waste Management', date: '17 Mar 2026', status: 'Scheduled', auditor: 'David King', findings: 0 },
    { type: 'External', standard: 'ISO 9001', area: 'Full Scope', date: '24 Mar 2026', status: 'Confirmed', auditor: 'BSI Auditor', findings: 0 },
    { type: 'Internal', standard: 'ISO 9001', area: 'Purchasing', date: '3 Feb 2026', status: 'Complete', auditor: 'Lisa Palmer', findings: 2 },
    { type: 'Internal', standard: 'ISO 14001', area: 'Energy', date: '20 Jan 2026', status: 'Complete', auditor: 'David King', findings: 1 },
    { type: 'External', standard: 'IATF 16949', area: 'Full Scope', date: '10 Dec 2025', status: 'Complete', auditor: 'IATF Auditor', findings: 3 },
  ];
  const statusColor: Record<string, string> = { Scheduled: '#3b82f6', Confirmed: '#f59e0b', Complete: '#22C55E' };
  const revealCount = Math.floor(progress * audits.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Audit Schedule — 2025/2026</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Upcoming: <span className="text-blue-300 font-bold">3</span></span>
          <span className="text-[10px] text-white/60">Complete: <span className="text-green-300 font-bold">3</span></span>
          <span className="text-[10px] text-white/60">Open Findings: <span className="text-yellow-300 font-bold">6</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-7 gap-1 px-3 py-1.5" style={{ borderBottom: '1px solid #1e2738' }}>
          {['Type', 'Standard', 'Area', 'Date', 'Status', 'Auditor', 'Findings'].map(h => (
            <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
          ))}
        </div>
        {audits.map((a, i) => {
          const show = i < revealCount;
          return (
            <div key={i} className="grid grid-cols-7 gap-1 px-3 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-10px)' }}>
              <span className="text-[9px] font-bold" style={{ color: a.type === 'External' ? '#f59e0b' : '#3b82f6' }}>{a.type}</span>
              <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{a.standard}</span>
              <span className="text-[9px]" style={{ color: '#8890a0' }}>{a.area}</span>
              <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{a.date}</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[a.status] }} />
                <span className="text-[8px]" style={{ color: statusColor[a.status] }}>{a.status}</span>
              </div>
              <span className="text-[9px]" style={{ color: '#8890a0' }}>{a.auditor}</span>
              <span className="text-[9px] font-bold" style={{ color: a.findings > 0 ? '#f59e0b' : '#22C55E' }}>{a.findings > 0 ? a.findings : '—'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
