/**
 * OEE Manager Animated Demo — 20-second looping
 * Ported from oplytics-platform OEEManagerSolution.tsx
 * Phases: OEE Dashboard, Loss Analysis, Trend Analysis, Live Integration
 */
import { Activity, Cpu, Zap, Thermometer, Server } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'dashboard', label: 'OEE Dashboard', duration: 5000 },
  { id: 'losses', label: 'Loss Analysis', duration: 5000 },
  { id: 'trends', label: 'Trend Analysis', duration: 5000 },
  { id: 'integration', label: 'Live Integration', duration: 5000 },
];

export default function OEEManagerDemo() {
  return (
    <AnimatedDemoShell serviceName="OEE Manager" accentColor="#1DB8CE" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <OEEDashboardDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <LossAnalysisDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <TrendAnalysisDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <IntegrationDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── OEE Dashboard Demo Panel ─── */
function OEEDashboardDemo({ progress }: { progress: number }) {
  const oeeValue = Math.min(72, Math.floor(progress * 72));
  const availability = Math.min(88, Math.floor(progress * 88));
  const performance = Math.min(82, Math.floor(progress * 82));
  const quality = Math.min(99, Math.floor(progress * 99));
  const weeklyData = [62, 65, 58, 71, 68, 73, 72];
  const revealBars = Math.floor(progress * 7);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2 mb-0" style={{ background: 'linear-gradient(135deg, #1DB8CE 0%, #0e8a9e 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>OEE Dashboard — Real-Time Performance</h3>
        <p className="text-[10px] text-white/50">Availability × Performance × Quality = OEE</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-4" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-4 gap-4 h-full">
          {/* OEE Gauge */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#1e2738" strokeWidth="3" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#1DB8CE" strokeWidth="3" strokeDasharray={`${oeeValue} 100`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>{oeeValue}%</span>
                <span className="text-[9px] font-bold" style={{ color: '#1DB8CE' }}>OEE</span>
              </div>
            </div>
            <span className="text-[10px] mt-2 font-semibold" style={{ color: '#8890a0' }}>Overall Equipment Effectiveness</span>
          </div>
          {/* A/P/Q Breakdown */}
          <div className="flex flex-col justify-center gap-4">
            {[
              { label: 'Availability', value: availability, color: '#10b981', target: 90 },
              { label: 'Performance', value: performance, color: '#f59e0b', target: 85 },
              { label: 'Quality', value: quality, color: '#8C34E9', target: 98 },
            ].map((m, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-semibold" style={{ color: '#c0c6d0' }}>{m.label}</span>
                  <span className="text-[10px] font-bold" style={{ color: m.color }}>{m.value}%</span>
                </div>
                <div className="relative h-2 rounded-full" style={{ background: '#1e2738' }}>
                  <div className="h-full rounded-full transition-all duration-300" style={{ width: `${m.value}%`, background: m.color }} />
                  <div className="absolute top-0 h-full w-0.5" style={{ left: `${m.target}%`, background: '#596475' }} />
                </div>
                <div className="flex justify-end mt-0.5">
                  <span className="text-[8px]" style={{ color: '#596475' }}>Target: {m.target}%</span>
                </div>
              </div>
            ))}
          </div>
          {/* Weekly Trend */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold mb-2" style={{ color: '#596475' }}>Weekly OEE Trend</span>
            <div className="flex-1 flex items-end gap-1.5">
              {weeklyData.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[8px] font-bold" style={{ color: i < revealBars ? '#1DB8CE' : '#1e2738' }}>{v}%</span>
                  <div className="w-full rounded-t transition-all duration-500" style={{ height: i < revealBars ? `${v * 2.5}px` : '4px', background: i < revealBars ? (i === weeklyData.length - 1 ? '#1DB8CE' : '#1e2738') : '#151d2e' }} />
                  <span className="text-[7px]" style={{ color: '#596475' }}>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Live Machine Status */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold mb-2" style={{ color: '#596475' }}>Live Machine Status</span>
            <div className="flex-1 flex flex-col gap-1.5">
              {[
                { name: 'Line 1 — Foam Press', status: 'running', oee: 78 },
                { name: 'Line 2 — Quilter', status: 'running', oee: 71 },
                { name: 'Line 3 — Edge Bander', status: 'idle', oee: 0 },
                { name: 'Line 4 — Packing', status: 'running', oee: 82 },
                { name: 'Line 5 — CNC Router', status: 'changeover', oee: 0 },
                { name: 'Line 6 — Assembly', status: 'running', oee: 65 },
              ].map((m, i) => {
                const statusColor = m.status === 'running' ? '#10b981' : m.status === 'idle' ? '#596475' : '#f59e0b';
                const show = progress > i * 0.15;
                return (
                  <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded transition-all duration-300" style={{ background: '#151d2e', opacity: show ? 1 : 0.2, transform: show ? 'translateX(0)' : 'translateX(10px)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor }} />
                    <span className="text-[9px] flex-1" style={{ color: '#c0c6d0' }}>{m.name}</span>
                    {m.status === 'running' && <span className="text-[8px] font-bold" style={{ color: '#1DB8CE' }}>{m.oee}%</span>}
                    {m.status !== 'running' && <span className="text-[7px] uppercase" style={{ color: statusColor }}>{m.status}</span>}
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

/* ─── Loss Analysis Demo Panel ─── */
function LossAnalysisDemo({ progress }: { progress: number }) {
  const losses = [
    { category: 'Planned Downtime', minutes: 120, color: '#596475', type: 'availability' },
    { category: 'Breakdowns', minutes: 45, color: '#ef4444', type: 'availability' },
    { category: 'Changeovers', minutes: 35, color: '#f59e0b', type: 'availability' },
    { category: 'Minor Stops', minutes: 28, color: '#f97316', type: 'performance' },
    { category: 'Speed Loss', minutes: 52, color: '#8C34E9', type: 'performance' },
    { category: 'Startup Rejects', minutes: 8, color: '#1DB8CE', type: 'quality' },
    { category: 'Production Rejects', minutes: 4, color: '#3b82f6', type: 'quality' },
  ];
  const totalMinutes = losses.reduce((s, l) => s + l.minutes, 0);
  const revealCount = Math.floor(progress * losses.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2 mb-0" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Loss Tree Analysis — Six Big Losses</h3>
        <p className="text-[10px] text-white/50">Identifying where production time is lost</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-4" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* Pareto Chart */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold mb-3" style={{ color: '#596475' }}>Loss Pareto (minutes)</span>
            <div className="flex-1 flex flex-col gap-2">
              {losses.map((l, i) => {
                const show = i < revealCount;
                const widthPct = (l.minutes / losses[0].minutes) * 100;
                return (
                  <div key={i} className="flex items-center gap-2 transition-all duration-500" style={{ opacity: show ? 1 : 0.15, transform: show ? 'translateX(0)' : 'translateX(-20px)' }}>
                    <span className="text-[9px] w-28 text-right" style={{ color: '#8890a0' }}>{l.category}</span>
                    <div className="flex-1 h-4 rounded" style={{ background: '#151d2e' }}>
                      <div className="h-full rounded transition-all duration-700" style={{ width: show ? `${widthPct}%` : '0%', background: l.color }} />
                    </div>
                    <span className="text-[9px] font-bold w-10" style={{ color: show ? l.color : '#1e2738' }}>{l.minutes}m</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Loss Breakdown Pie + Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#1e2738" strokeWidth="4" />
                  {losses.slice(0, revealCount).reduce((acc: { offset: number; elements: React.ReactNode[] }, l, i) => {
                    const pct = (l.minutes / totalMinutes) * 100;
                    acc.elements.push(
                      <circle key={i} cx="18" cy="18" r="14" fill="none" stroke={l.color} strokeWidth="4" strokeDasharray={`${pct} ${100 - pct}`} strokeDashoffset={`${-acc.offset}`} />
                    );
                    acc.offset += pct;
                    return acc;
                  }, { offset: 0, elements: [] }).elements}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-black text-white" style={{ fontFamily: 'Montserrat' }}>{totalMinutes}</span>
                  <span className="text-[8px]" style={{ color: '#596475' }}>total min lost</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {losses.slice(0, revealCount).map((l, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                    <span className="text-[8px]" style={{ color: '#8890a0' }}>{l.category}</span>
                    <span className="text-[8px] font-bold ml-auto" style={{ color: l.color }}>{Math.round((l.minutes / totalMinutes) * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { type: 'Availability', color: '#ef4444', mins: 200 },
                { type: 'Performance', color: '#f97316', mins: 80 },
                { type: 'Quality', color: '#1DB8CE', mins: 12 },
              ].map((t, i) => (
                <div key={i} className="rounded p-2 text-center" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
                  <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: t.color }}>{t.type}</span>
                  <span className="text-sm font-black text-white block mt-0.5" style={{ fontFamily: 'Montserrat' }}>{t.mins}m</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Trend Analysis Demo Panel ─── */
function TrendAnalysisDemo({ progress }: { progress: number }) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const oeeData = [58, 61, 60, 64, 63, 66, 65, 68, 70, 69, 71, 72];
  const targetLine = 75;
  const revealPoints = Math.floor(progress * 12);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2 mb-0" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>OEE Trend Analysis — 12-Month View</h3>
        <p className="text-[10px] text-white/50">Tracking continuous improvement over time</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-4" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="h-full flex flex-col">
          <div className="flex-1 relative">
            <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between">
              {[80, 70, 60, 50].map(v => (
                <span key={v} className="text-[8px] text-right" style={{ color: '#596475' }}>{v}%</span>
              ))}
            </div>
            <div className="ml-10 h-full flex flex-col">
              <div className="flex-1 relative">
                {[80, 70, 60, 50].map((v, i) => (
                  <div key={i} className="absolute w-full h-px" style={{ top: `${((80 - v) / 30) * 100}%`, background: '#1e2738' }} />
                ))}
                <div className="absolute w-full h-px" style={{ top: `${((80 - targetLine) / 30) * 100}%`, background: '#f59e0b', opacity: 0.5 }}>
                  <span className="absolute right-0 -top-3 text-[8px] font-bold" style={{ color: '#f59e0b' }}>Target {targetLine}%</span>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline fill="none" stroke="#1DB8CE" strokeWidth="0.8" points={oeeData.slice(0, revealPoints).map((v, i) => `${(i / 11) * 100},${((80 - v) / 30) * 100}`).join(' ')} />
                  {revealPoints > 1 && (
                    <polygon fill="rgba(29,184,206,0.1)" points={`${0},100 ${oeeData.slice(0, revealPoints).map((v, i) => `${(i / 11) * 100},${((80 - v) / 30) * 100}`).join(' ')} ${((revealPoints - 1) / 11) * 100},100`} />
                  )}
                  {oeeData.slice(0, revealPoints).map((v, i) => (
                    <circle key={i} cx={(i / 11) * 100} cy={((80 - v) / 30) * 100} r="1.2" fill="#1DB8CE" stroke="#0d1220" strokeWidth="0.5" />
                  ))}
                </svg>
              </div>
              <div className="flex justify-between mt-1">
                {months.map((m, i) => (
                  <span key={i} className="text-[7px]" style={{ color: i < revealPoints ? '#8890a0' : '#1e2738' }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { label: 'Current OEE', value: `${oeeData[Math.min(revealPoints - 1, 11)] || 0}%`, color: '#1DB8CE' },
              { label: 'Best Month', value: '72%', color: '#10b981' },
              { label: 'Improvement', value: '+14pts', color: '#8C34E9' },
              { label: 'Target Gap', value: `${targetLine - (oeeData[Math.min(revealPoints - 1, 11)] || 0)}pts`, color: '#f59e0b' },
            ].map((s, i) => (
              <div key={i} className="rounded p-2.5 text-center" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
                <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{s.label}</span>
                <span className="text-lg font-black text-white block" style={{ fontFamily: 'Montserrat', color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Integration Demo Panel ─── */
function IntegrationDemo({ progress }: { progress: number }) {
  const dataPoints = [
    { time: '14:32:01', source: 'SCADA PLC', metric: 'Cycle Time', value: '12.4s', status: 'ok' },
    { time: '14:32:02', source: 'IoT Sensor', metric: 'Temperature', value: '72.1°C', status: 'ok' },
    { time: '14:32:03', source: 'Current Sensor', metric: 'Power Draw', value: '4.2kW', status: 'ok' },
    { time: '14:32:04', source: 'Vibration', metric: 'RMS Velocity', value: '2.8mm/s', status: 'warning' },
    { time: '14:32:05', source: 'SCADA PLC', metric: 'Part Count', value: '+1', status: 'ok' },
    { time: '14:32:06', source: 'Edge Gateway', metric: 'Batch Upload', value: '24 records', status: 'ok' },
    { time: '14:32:07', source: 'IoT Sensor', metric: 'Humidity', value: '45%', status: 'ok' },
    { time: '14:32:08', source: 'SCADA PLC', metric: 'Machine State', value: 'RUNNING', status: 'ok' },
  ];
  const revealCount = Math.floor(progress * dataPoints.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2 mb-0" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Live Data Integration — Machine Connectivity</h3>
        <p className="text-[10px] text-white/50">Real-time data flowing from SCADA, IoT sensors, and edge gateways</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2 p-3 flex flex-col" style={{ borderRight: '1px solid #1e2738' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              <span className="text-[10px] font-bold" style={{ color: '#10b981' }}>LIVE DATA STREAM</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 overflow-hidden">
              <div className="grid grid-cols-5 gap-2 px-2 py-1" style={{ borderBottom: '1px solid #1e2738' }}>
                {['Time', 'Source', 'Metric', 'Value', 'Status'].map(h => (
                  <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
                ))}
              </div>
              {dataPoints.map((d, i) => {
                const show = i < revealCount;
                return (
                  <div key={i} className="grid grid-cols-5 gap-2 px-2 py-1.5 rounded transition-all duration-300" style={{ background: show ? (i % 2 === 0 ? '#151d2e' : 'transparent') : 'transparent', opacity: show ? 1 : 0.1, transform: show ? 'translateY(0)' : 'translateY(5px)' }}>
                    <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{d.time}</span>
                    <span className="text-[9px]" style={{ color: '#1DB8CE' }}>{d.source}</span>
                    <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{d.metric}</span>
                    <span className="text-[9px] font-bold" style={{ color: '#fff' }}>{d.value}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: d.status === 'ok' ? '#10b981' : '#f59e0b' }} />
                      <span className="text-[8px] uppercase" style={{ color: d.status === 'ok' ? '#10b981' : '#f59e0b' }}>{d.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3 flex flex-col gap-3">
            <span className="text-[10px] font-bold" style={{ color: '#596475' }}>Connected Sources</span>
            {[
              { name: 'SCADA / PLC', Icon: Server, dataRate: '1Hz' },
              { name: 'Edge Gateway', Icon: Cpu, dataRate: '5Hz' },
              { name: 'Current Sensors', Icon: Zap, dataRate: '10Hz' },
              { name: 'Vibration Sensors', Icon: Activity, dataRate: '100Hz' },
              { name: 'Temp Probes', Icon: Thermometer, dataRate: '0.5Hz' },
            ].map((s, i) => {
              const show = progress > i * 0.18;
              return (
                <div key={i} className="flex items-center gap-2 p-2 rounded transition-all duration-300" style={{ background: '#151d2e', opacity: show ? 1 : 0.2 }}>
                  <s.Icon className="w-4 h-4" style={{ color: '#1DB8CE' }} />
                  <div className="flex-1">
                    <span className="text-[9px] font-semibold block" style={{ color: '#c0c6d0' }}>{s.name}</span>
                    <span className="text-[7px]" style={{ color: '#596475' }}>{s.dataRate} sample rate</span>
                  </div>
                  <div className="w-2 h-2 rounded-full" style={{ background: show ? '#10b981' : '#596475' }} />
                </div>
              );
            })}
            <div className="mt-auto rounded p-2" style={{ background: '#151d2e', border: '1px solid #1e2738' }}>
              <span className="text-[8px] font-bold block mb-1" style={{ color: '#596475' }}>API ENDPOINT</span>
              <code className="text-[8px] block" style={{ color: '#1DB8CE' }}>POST /api/integration/ingest</code>
              <span className="text-[7px] block mt-1" style={{ color: '#596475' }}>REST • MQTT • OPC-UA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
