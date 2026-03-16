/**
 * Certification Manager Animated Demo — 20-second looping
 * Phases: Compliance Dashboard, Document Control, Gap Analysis, Audit Trail
 */
import { CheckCircle2, FileText, AlertTriangle, Search } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'compliance', label: 'Compliance', duration: 5000 },
  { id: 'documents', label: 'Documents', duration: 5000 },
  { id: 'gaps', label: 'Gap Analysis', duration: 5000 },
  { id: 'trail', label: 'Audit Trail', duration: 5000 },
];

export default function CertificationManagerDemo() {
  return (
    <AnimatedDemoShell serviceName="Certification Manager" accentColor="#F97316" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <ComplianceDashboard progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <DocumentControlDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <GapAnalysisDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <AuditTrailDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── Compliance Dashboard ─── */
function ComplianceDashboard({ progress }: { progress: number }) {
  const standards = [
    { name: 'ISO 9001:2015', status: 'Certified', expiry: '15 Sep 2027', compliance: 94, clauses: 52, compliant: 49, gaps: 3, color: '#22C55E' },
    { name: 'ISO 14001:2015', status: 'Certified', expiry: '22 Nov 2026', compliance: 88, clauses: 38, compliant: 33, gaps: 5, color: '#f59e0b' },
    { name: 'IATF 16949:2016', status: 'In Progress', expiry: '—', compliance: 62, clauses: 68, compliant: 42, gaps: 26, color: '#3b82f6' },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #F97316 0%, #c2410c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Compliance Dashboard — Standards Overview</h3>
        <p className="text-[10px] text-white/50">Real-time compliance status across all managed standards</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* Summary row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: 'Standards Managed', value: '3', color: '#F97316' },
            { label: 'Total Clauses', value: '158', color: '#3b82f6' },
            { label: 'Compliant', value: '124', color: '#22C55E' },
            { label: 'Gaps Identified', value: '34', color: '#ef4444' },
          ].map((s, i) => (
            <div key={i} className="rounded p-2 text-center transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.1 * (i + 1) ? 1 : 0.2 }}>
              <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{s.label}</span>
              <span className="text-lg font-black block" style={{ fontFamily: 'Montserrat', color: s.color }}>{s.value}</span>
            </div>
          ))}
        </div>
        {/* Standard cards */}
        <div className="space-y-2">
          {standards.map((std, i) => {
            const show = progress > 0.15 * (i + 1);
            const animCompliance = show ? Math.min(std.compliance, Math.floor(progress * 2 * std.compliance)) : 0;
            return (
              <div key={i} className="rounded-md p-3 transition-all duration-400" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: show ? 1 : 0.15, transform: show ? 'translateY(0)' : 'translateY(8px)' }}>
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1e2738" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke={std.color} strokeWidth="3" strokeDasharray={`${animCompliance} ${100 - animCompliance}`} strokeLinecap="round" className="transition-all duration-700" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] font-black text-white" style={{ fontFamily: 'Montserrat' }}>{animCompliance}%</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white" style={{ fontFamily: 'Montserrat' }}>{std.name}</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded font-bold" style={{ background: std.status === 'Certified' ? '#22C55E20' : '#3b82f620', color: std.status === 'Certified' ? '#22C55E' : '#3b82f6' }}>{std.status}</span>
                    </div>
                    <div className="flex gap-4 mt-1">
                      <span className="text-[9px]" style={{ color: '#596475' }}>Expiry: <span className="text-[#c0c6d0]">{std.expiry}</span></span>
                      <span className="text-[9px]" style={{ color: '#596475' }}>Clauses: <span className="text-[#c0c6d0]">{std.compliant}/{std.clauses}</span></span>
                      <span className="text-[9px]" style={{ color: '#596475' }}>Gaps: <span style={{ color: std.gaps > 10 ? '#ef4444' : '#f59e0b' }}>{std.gaps}</span></span>
                    </div>
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

/* ─── Document Control ─── */
function DocumentControlDemo({ progress }: { progress: number }) {
  const documents = [
    { id: 'QMS-001', title: 'Quality Manual', rev: 'Rev 8', status: 'Current', owner: 'Lisa P.', reviewDate: '15 Sep 2026', standard: 'ISO 9001' },
    { id: 'SOP-PR-001', title: 'Production Control Procedure', rev: 'Rev 5', status: 'Current', owner: 'Mike J.', reviewDate: '20 Jun 2026', standard: 'ISO 9001' },
    { id: 'SOP-EB-004', title: 'Edge Banding Process', rev: 'Rev 3', status: 'Under Review', owner: 'James W.', reviewDate: '10 Mar 2026', standard: 'ISO 9001' },
    { id: 'EMS-001', title: 'Environmental Manual', rev: 'Rev 4', status: 'Current', owner: 'David K.', reviewDate: '22 Nov 2026', standard: 'ISO 14001' },
    { id: 'WI-FP-012', title: 'Foam Press Operation', rev: 'Rev 6', status: 'Current', owner: 'Paul C.', reviewDate: '1 Aug 2026', standard: 'IATF 16949' },
    { id: 'FORM-NC-001', title: 'Non-Conformance Report Form', rev: 'Rev 2', status: 'Expired', owner: 'Lisa P.', reviewDate: '1 Feb 2026', standard: 'ISO 9001' },
  ];
  const statusColor: Record<string, string> = { Current: '#22C55E', 'Under Review': '#f59e0b', Expired: '#ef4444', Draft: '#3b82f6' };
  const revealCount = Math.floor(progress * documents.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Document Control — Managed Documents</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Current: <span className="text-green-300 font-bold">4</span></span>
          <span className="text-[10px] text-white/60">Under Review: <span className="text-yellow-300 font-bold">1</span></span>
          <span className="text-[10px] text-white/60">Expired: <span className="text-red-300 font-bold">1</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-7 gap-1 px-3 py-1.5" style={{ borderBottom: '1px solid #1e2738' }}>
          {['Doc ID', 'Title', 'Rev', 'Status', 'Owner', 'Review Date', 'Standard'].map(h => (
            <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
          ))}
        </div>
        {documents.map((d, i) => {
          const show = i < revealCount;
          return (
            <div key={i} className="grid grid-cols-7 gap-1 px-3 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-10px)' }}>
              <span className="text-[9px] font-mono font-bold" style={{ color: '#F97316' }}>{d.id}</span>
              <span className="text-[9px] font-semibold" style={{ color: '#c0c6d0' }}>{d.title}</span>
              <span className="text-[9px]" style={{ color: '#596475' }}>{d.rev}</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[d.status] }} />
                <span className="text-[8px]" style={{ color: statusColor[d.status] }}>{d.status}</span>
              </div>
              <span className="text-[9px]" style={{ color: '#8890a0' }}>{d.owner}</span>
              <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{d.reviewDate}</span>
              <span className="text-[8px]" style={{ color: '#1DB8CE' }}>{d.standard}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Gap Analysis ─── */
function GapAnalysisDemo({ progress }: { progress: number }) {
  const gaps = [
    { clause: '8.5.1', standard: 'ISO 9001', requirement: 'Control of production and service provision', status: 'Partial', priority: 'High', action: 'Update production control procedures' },
    { clause: '8.5.6', standard: 'ISO 9001', requirement: 'Control of changes', status: 'Gap', priority: 'High', action: 'Implement change management process' },
    { clause: '9.1.3', standard: 'ISO 9001', requirement: 'Analysis and evaluation', status: 'Partial', priority: 'Medium', action: 'Enhance data analysis reporting' },
    { clause: '6.1.2', standard: 'ISO 14001', requirement: 'Environmental aspects', status: 'Gap', priority: 'High', action: 'Complete aspect/impact register' },
    { clause: '8.1', standard: 'ISO 14001', requirement: 'Operational planning and control', status: 'Partial', priority: 'Medium', action: 'Document operational controls' },
    { clause: '8.5.1.1', standard: 'IATF 16949', requirement: 'Control plan', status: 'Gap', priority: 'Critical', action: 'Develop control plans for all processes' },
    { clause: '8.5.6.1', standard: 'IATF 16949', requirement: 'Process control — temporary', status: 'Gap', priority: 'High', action: 'Define temporary change procedures' },
  ];
  const statusColor: Record<string, string> = { Gap: '#ef4444', Partial: '#f59e0b', Compliant: '#22C55E' };
  const priorityColor: Record<string, string> = { Critical: '#ef4444', High: '#f97316', Medium: '#f59e0b', Low: '#22C55E' };
  const revealCount = Math.floor(progress * gaps.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Gap Analysis — Compliance Gaps</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Gaps: <span className="text-red-300 font-bold">4</span></span>
          <span className="text-[10px] text-white/60">Partial: <span className="text-yellow-300 font-bold">3</span></span>
          <span className="text-[10px] text-white/60">Critical: <span className="text-red-300 font-bold">1</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-0">
          {gaps.map((g, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="px-3 py-2 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-12px)' }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[9px] font-mono font-bold" style={{ color: '#F97316' }}>{g.clause}</span>
                  <span className="text-[8px]" style={{ color: '#1DB8CE' }}>{g.standard}</span>
                  <span className="text-[8px] px-1 py-0.5 rounded font-bold" style={{ background: `${statusColor[g.status]}20`, color: statusColor[g.status] }}>{g.status}</span>
                  <span className="text-[8px] px-1 py-0.5 rounded font-bold ml-auto" style={{ background: `${priorityColor[g.priority]}20`, color: priorityColor[g.priority] }}>{g.priority}</span>
                </div>
                <p className="text-[9px]" style={{ color: '#c0c6d0' }}>{g.requirement}</p>
                <p className="text-[8px] mt-0.5" style={{ color: '#596475' }}>Action: {g.action}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Audit Trail ─── */
function AuditTrailDemo({ progress }: { progress: number }) {
  const events = [
    { time: '14:32', user: 'Lisa Palmer', action: 'Approved', target: 'SOP-EB-004 Rev 3', detail: 'Edge Banding Process update approved', type: 'approval' },
    { time: '14:15', user: 'James Ward', action: 'Submitted for Review', target: 'SOP-EB-004 Rev 3', detail: 'Updated to include adhesive temperature monitoring', type: 'submit' },
    { time: '13:45', user: 'Paul Cox', action: 'Created', target: 'CAPA-2026-0089', detail: 'Linked to NCR-0121 — adhesion failure', type: 'create' },
    { time: '11:20', user: 'David King', action: 'Completed Audit', target: 'Internal Audit — ISO 14001 Energy', detail: '1 minor finding raised', type: 'audit' },
    { time: '10:05', user: 'System', action: 'Auto-reminder', target: 'FORM-NC-001', detail: 'Document review overdue by 30 days', type: 'alert' },
    { time: '09:30', user: 'Mike Johnson', action: 'Updated', target: 'Risk Register', detail: 'Added adhesive system failure risk', type: 'update' },
    { time: '09:00', user: 'System', action: 'Compliance Check', target: 'ISO 9001', detail: 'Daily compliance scan — 3 gaps identified', type: 'scan' },
  ];
  const typeColor: Record<string, string> = { approval: '#22C55E', submit: '#3b82f6', create: '#8C34E9', audit: '#F97316', alert: '#ef4444', update: '#1DB8CE', scan: '#596475' };
  const revealCount = Math.floor(progress * events.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #1DB8CE 0%, #0e8a9e 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Audit Trail — Complete Activity Log</h3>
        <p className="text-[10px] text-white/50">Every action tracked with full traceability</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-0">
          {events.map((e, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="flex items-start gap-3 px-3 py-2.5 transition-all duration-300" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateY(0)' : 'translateY(6px)' }}>
                <div className="flex flex-col items-center mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: typeColor[e.type] }} />
                  {i < events.length - 1 && <div className="w-px h-6" style={{ background: '#1e2738' }} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono" style={{ color: '#596475' }}>{e.time}</span>
                    <span className="text-[10px] font-semibold" style={{ color: '#c0c6d0' }}>{e.user}</span>
                    <span className="text-[9px] px-1 py-0.5 rounded font-bold" style={{ background: `${typeColor[e.type]}20`, color: typeColor[e.type] }}>{e.action}</span>
                  </div>
                  <div className="mt-0.5">
                    <span className="text-[9px] font-mono font-bold" style={{ color: '#F97316' }}>{e.target}</span>
                    <span className="text-[8px] ml-2" style={{ color: '#8890a0' }}>{e.detail}</span>
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
