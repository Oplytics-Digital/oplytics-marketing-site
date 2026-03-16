/**
 * Safety Manager Animated Demo — 20-second looping
 * Phases: Incident Dashboard, Report Form, Risk Matrix, Observations
 */
import { Shield, AlertTriangle, FileText, Eye } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'dashboard', label: 'Dashboard', duration: 5000 },
  { id: 'report', label: 'Report', duration: 5000 },
  { id: 'risk', label: 'Risk Matrix', duration: 5000 },
  { id: 'observations', label: 'Observations', duration: 5000 },
];

export default function SafetyManagerDemo() {
  return (
    <AnimatedDemoShell serviceName="Safety Manager" accentColor="#EF4444" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <SafetyDashboard progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <IncidentReportDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <RiskMatrixDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <ObservationsDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── Safety Dashboard ─── */
function SafetyDashboard({ progress }: { progress: number }) {
  const kpis = [
    { label: 'Days Since LTI', value: 47, color: '#10b981', suffix: '' },
    { label: 'Near Misses (MTD)', value: 3, color: '#f59e0b', suffix: '' },
    { label: 'Observations (MTD)', value: 28, color: '#3b82f6', suffix: '' },
    { label: 'Open Actions', value: 5, color: '#ef4444', suffix: '' },
  ];
  const incidents = [
    { date: '2/19', type: 'Near Miss', desc: 'Forklift near-miss at loading bay', severity: 'medium', status: 'Closed' },
    { date: '2/14', type: 'First Aid', desc: 'Minor cut — packaging area', severity: 'low', status: 'Closed' },
    { date: '2/10', type: 'Near Miss', desc: 'Spill near curing oven exit', severity: 'medium', status: 'Closed' },
    { date: '2/03', type: 'Near Miss', desc: 'Loose guard on conveyor belt', severity: 'high', status: 'Closed' },
    { date: '1/28', type: 'LTI', desc: 'Slip injury — wet floor', severity: 'high', status: 'Closed' },
  ];
  const sevColor: Record<string, string> = { high: '#ef4444', medium: '#f59e0b', low: '#10b981' };
  const monthlyData = [2, 1, 3, 0, 2, 1, 3, 1, 2, 0, 1, 3];
  const revealBars = Math.floor(progress * 12);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Safety Dashboard — Middleton Plant</h3>
        <p className="text-[10px] text-white/50">Real-time safety performance and incident tracking</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {kpis.map((k, i) => {
            const animVal = Math.floor(progress * 2 * k.value);
            return (
              <div key={i} className="rounded p-2 text-center transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
                <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{k.label}</span>
                <span className="text-xl font-black block" style={{ fontFamily: 'Montserrat', color: k.color }}>{Math.min(animVal, k.value)}{k.suffix}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {/* Recent incidents */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>Recent Incidents</span>
            <div className="space-y-1">
              {incidents.map((inc, i) => {
                const show = progress > 0.1 + i * 0.12;
                return (
                  <div key={i} className="flex items-center gap-2 px-1.5 py-1 rounded transition-all duration-300" style={{ background: '#0d1220', opacity: show ? 1 : 0.1 }}>
                    <span className="text-[8px] font-mono w-8" style={{ color: '#596475' }}>{inc.date}</span>
                    <span className="text-[8px] px-1 py-0.5 rounded font-bold" style={{ background: `${sevColor[inc.severity]}20`, color: sevColor[inc.severity] }}>{inc.type}</span>
                    <span className="text-[8px] flex-1 truncate" style={{ color: '#c0c6d0' }}>{inc.desc}</span>
                    <span className="text-[7px]" style={{ color: '#596475' }}>{inc.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Monthly trend */}
          <div className="rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold block mb-2" style={{ color: '#596475' }}>Incidents per Month (12-month)</span>
            <div className="flex items-end gap-1 h-28">
              {monthlyData.map((v, i) => {
                const show = i < revealBars;
                const maxVal = 3;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <span className="text-[7px] font-bold" style={{ color: show ? '#ef4444' : '#1e2738' }}>{v}</span>
                    <div className="w-full rounded-t transition-all duration-500" style={{ height: show ? `${Math.max((v / maxVal) * 100, 8)}%` : '4px', background: show ? (v === 0 ? '#10b981' : v <= 1 ? '#f59e0b' : '#ef4444') : '#1e2738', minHeight: '4px' }} />
                    <span className="text-[6px]" style={{ color: '#596475' }}>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
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

/* ─── Incident Report Form ─── */
function IncidentReportDemo({ progress }: { progress: number }) {
  const fields = [
    { label: 'Incident Type', value: 'Near Miss', filled: progress > 0.1 },
    { label: 'Date & Time', value: '3 Mar 2026, 14:32', filled: progress > 0.2 },
    { label: 'Location', value: 'Foam Press Area — Bay 3', filled: progress > 0.3 },
    { label: 'Description', value: 'Forklift reversed without horn near pedestrian walkway. No contact made.', filled: progress > 0.4 },
    { label: 'Immediate Action Taken', value: 'Area cordoned, driver briefed, supervisor notified', filled: progress > 0.55 },
    { label: 'Witnesses', value: 'James Ward, Lisa Palmer', filled: progress > 0.65 },
    { label: 'Severity Assessment', value: 'Medium — potential for serious injury', filled: progress > 0.75 },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Incident Report — Quick Capture</h3>
        <p className="text-[10px] text-white/50">Mobile-first reporting in under 2 minutes</p>
      </div>
      <div className="flex-1 overflow-auto rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-2">
          {fields.map((f, i) => (
            <div key={i} className="rounded p-2.5 transition-all duration-400" style={{ background: '#151d2e', border: f.filled ? '1px solid #22C55E30' : '1px solid #1e2738', opacity: f.filled ? 1 : 0.3 }}>
              <span className="text-[9px] uppercase tracking-wider font-bold block mb-1" style={{ color: f.filled ? '#22C55E' : '#596475' }}>{f.label}</span>
              <span className="text-[11px]" style={{ color: f.filled ? '#c0c6d0' : '#2e3a4e' }}>{f.filled ? f.value : '—'}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex-1 rounded p-2 text-center transition-all duration-300" style={{ background: progress > 0.85 ? '#22C55E' : '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.85 ? 1 : 0.3 }}>
            <span className="text-[10px] font-bold" style={{ color: progress > 0.85 ? '#fff' : '#596475' }}>Submit Report</span>
          </div>
          <div className="rounded p-2 text-center" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
            <span className="text-[10px] font-bold" style={{ color: '#596475' }}>Save Draft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Risk Matrix ─── */
function RiskMatrixDemo({ progress }: { progress: number }) {
  const severities = ['Catastrophic', 'Major', 'Moderate', 'Minor', 'Negligible'];
  const likelihoods = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'];
  const riskColors = [
    ['#f59e0b','#ef4444','#ef4444','#ef4444','#ef4444'],
    ['#22C55E','#f59e0b','#ef4444','#ef4444','#ef4444'],
    ['#22C55E','#f59e0b','#f59e0b','#ef4444','#ef4444'],
    ['#22C55E','#22C55E','#f59e0b','#f59e0b','#ef4444'],
    ['#22C55E','#22C55E','#22C55E','#f59e0b','#f59e0b'],
  ];
  const hazards = [
    { name: 'Forklift collision', sev: 1, lik: 2, residual: { sev: 1, lik: 1 } },
    { name: 'Chemical spill', sev: 2, lik: 1, residual: { sev: 2, lik: 0 } },
    { name: 'Slip/trip/fall', sev: 3, lik: 3, residual: { sev: 3, lik: 1 } },
    { name: 'Noise exposure', sev: 3, lik: 4, residual: { sev: 3, lik: 2 } },
    { name: 'Manual handling', sev: 2, lik: 3, residual: { sev: 2, lik: 1 } },
  ];
  const revealCells = Math.floor(progress * 30);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Risk Matrix — Hazard Assessment</h3>
        <p className="text-[10px] text-white/50">5×5 risk matrix with inherent and residual risk plotting</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-2 gap-3 h-full">
          {/* Risk matrix grid */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold mb-2" style={{ color: '#596475' }}>Risk Matrix</span>
            <div className="flex-1">
              <div className="flex">
                <div className="w-16" />
                {likelihoods.map((l, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className="text-[7px] font-bold" style={{ color: '#596475' }}>{l}</span>
                  </div>
                ))}
              </div>
              {severities.map((sev, si) => (
                <div key={si} className="flex items-center">
                  <div className="w-16 text-right pr-1">
                    <span className="text-[7px] font-bold" style={{ color: '#596475' }}>{sev}</span>
                  </div>
                  {likelihoods.map((_, li) => {
                    const cellIdx = si * 5 + li;
                    const show = cellIdx < revealCells;
                    const hasHazard = hazards.some(h => h.sev === si && h.lik === li);
                    const hasResidual = hazards.some(h => h.residual.sev === si && h.residual.lik === li);
                    return (
                      <div key={li} className="flex-1 aspect-square m-0.5 rounded-sm flex items-center justify-center transition-all duration-300" style={{ background: show ? `${riskColors[si][li]}30` : '#151d2e', border: `1px solid ${show ? riskColors[si][li] + '40' : '#1e2738'}` }}>
                        {hasHazard && show && <div className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} />}
                        {hasResidual && show && !hasHazard && <div className="w-2 h-2 rounded-full" style={{ background: '#22C55E', border: '1px solid #fff' }} />}
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="flex gap-3 mt-2 justify-center">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} /><span className="text-[8px]" style={{ color: '#596475' }}>Inherent</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ background: '#22C55E' }} /><span className="text-[8px]" style={{ color: '#596475' }}>Residual</span></div>
              </div>
            </div>
          </div>
          {/* Hazard register */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold mb-2" style={{ color: '#596475' }}>Top Hazards</span>
            <div className="space-y-1.5">
              {hazards.map((h, i) => {
                const show = progress > 0.15 * (i + 1);
                const inherentRisk = (5 - h.sev) * (h.lik + 1);
                const residualRisk = (5 - h.residual.sev) * (h.residual.lik + 1);
                return (
                  <div key={i} className="rounded p-2 transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: show ? 1 : 0.15 }}>
                    <span className="text-[10px] font-semibold text-white block">{h.name}</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[8px]" style={{ color: '#596475' }}>Inherent:</span>
                        <span className="text-[9px] font-bold" style={{ color: '#ef4444' }}>{inherentRisk}</span>
                      </div>
                      <span className="text-[8px]" style={{ color: '#596475' }}>→</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px]" style={{ color: '#596475' }}>Residual:</span>
                        <span className="text-[9px] font-bold" style={{ color: '#22C55E' }}>{residualRisk}</span>
                      </div>
                      <span className="text-[8px] ml-auto" style={{ color: '#596475' }}>-{Math.round((1 - residualRisk / inherentRisk) * 100)}%</span>
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

/* ─── Safety Observations ─── */
function ObservationsDemo({ progress }: { progress: number }) {
  const observations = [
    { date: '3/03', observer: 'Mike J.', area: 'Assembly', type: 'positive', desc: 'Correct PPE worn in designated area', category: 'PPE' },
    { date: '3/03', observer: 'Lisa P.', area: 'Foam Press', type: 'at-risk', desc: 'Operator bypassed guard interlock', category: 'Guarding' },
    { date: '3/02', observer: 'David K.', area: 'Warehouse', type: 'positive', desc: 'Good housekeeping in aisle 4', category: 'Housekeeping' },
    { date: '3/02', observer: 'James W.', area: 'Quilting', type: 'positive', desc: 'Correct lifting technique observed', category: 'Ergonomics' },
    { date: '3/01', observer: 'Paul C.', area: 'Packing', type: 'at-risk', desc: 'Fire exit partially blocked by pallets', category: 'Fire Safety' },
    { date: '3/01', observer: 'Lisa P.', area: 'Chemical Store', type: 'positive', desc: 'COSHH sheets up to date and visible', category: 'COSHH' },
    { date: '2/28', observer: 'Mike J.', area: 'CNC Area', type: 'at-risk', desc: 'No hearing protection worn', category: 'PPE' },
  ];
  const typeColor: Record<string, string> = { positive: '#22C55E', 'at-risk': '#ef4444' };
  const revealCount = Math.floor(progress * observations.length);
  const positiveCount = observations.filter(o => o.type === 'positive').length;
  const atRiskCount = observations.filter(o => o.type === 'at-risk').length;

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #15803d 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Safety Observations — Behavioural Safety</h3>
        <div className="flex gap-4 mt-1">
          <span className="text-[10px] text-white/60">Positive: <span className="text-green-300 font-bold">{positiveCount}</span></span>
          <span className="text-[10px] text-white/60">At-Risk: <span className="text-red-300 font-bold">{atRiskCount}</span></span>
          <span className="text-[10px] text-white/60">Ratio: <span className="text-white font-bold">{(positiveCount / atRiskCount).toFixed(1)}:1</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-7 gap-2 px-3 py-1.5" style={{ borderBottom: '1px solid #1e2738' }}>
          {['Date', 'Observer', 'Area', 'Type', 'Category', 'Description', ''].map(h => (
            <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
          ))}
        </div>
        <div className="space-y-0">
          {observations.map((o, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="grid grid-cols-7 gap-2 px-3 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateY(0)' : 'translateY(5px)' }}>
                <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{o.date}</span>
                <span className="text-[9px]" style={{ color: '#8890a0' }}>{o.observer}</span>
                <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{o.area}</span>
                <span className="text-[8px] px-1 py-0.5 rounded font-bold self-start" style={{ background: `${typeColor[o.type]}20`, color: typeColor[o.type] }}>{o.type === 'positive' ? 'Safe' : 'At-Risk'}</span>
                <span className="text-[9px]" style={{ color: '#1DB8CE' }}>{o.category}</span>
                <span className="text-[8px] col-span-2" style={{ color: '#8890a0' }}>{o.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
