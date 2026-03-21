/**
 * BATCH-4 TASK-4: Animated service preview cards ported from platform Portal.tsx
 * Each card shows a mini animated graphic — X-Matrix for Policy Deployment,
 * OEE gauge for OEE Manager, SQDCP board for SQDCP Dashboard, etc.
 */
import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Target, LayoutGrid, Gauge, Plug, ClipboardCheck, Shield, CheckCircle, Award } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Target, LayoutGrid, Gauge, Plug, ClipboardCheck, Shield, CheckCircle, Award,
};

/* ─── Mini Animated Graphics ─── */

function PolicyDeploymentGraphic() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 4), 2000);
    return () => clearInterval(id);
  }, []);
  const cells = [
    ['Strategy', 'KPIs', 'Targets', 'Actions'],
    ['Growth', '↑12%', '£2.4M', '●●●○'],
    ['Quality', '98.2%', '99%', '●●○○'],
    ['Safety', '0 LTI', '0', '●●●●'],
  ];
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="w-full">
        <div className="text-[8px] font-bold mb-1.5 text-center" style={{ color: '#8C34E9' }}>X-Matrix</div>
        <div className="grid grid-cols-4 gap-[2px]">
          {cells.map((row, ri) =>
            row.map((cell, ci) => (
              <div
                key={`${ri}-${ci}`}
                className="text-[6px] text-center py-1 px-0.5 rounded-sm transition-all duration-500"
                style={{
                  background: ri === 0 ? '#8C34E920' : phase === ri - 1 ? '#8C34E930' : '#0d122080',
                  color: ri === 0 ? '#8C34E9' : phase === ri - 1 ? '#fff' : '#596475',
                  fontWeight: ri === 0 ? 700 : 400,
                  fontFamily: 'Montserrat',
                }}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function OEEGaugeGraphic() {
  const [oee, setOee] = useState(82);
  useEffect(() => {
    const id = setInterval(() => setOee(prev => {
      const delta = (Math.random() - 0.4) * 4;
      return Math.min(95, Math.max(70, prev + delta));
    }), 1500);
    return () => clearInterval(id);
  }, []);
  const pct = ((oee - 60) / 40) * 100;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-2" style={{ color: '#1DB8CE' }}>Live OEE</div>
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1a2235" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="14" fill="none" stroke="#1DB8CE" strokeWidth="3"
            strokeDasharray={`${pct * 0.88} 88`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>{oee.toFixed(1)}%</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {[{ l: 'A', v: '91%' }, { l: 'P', v: '88%' }, { l: 'Q', v: '99%' }].map(m => (
          <div key={m.l} className="text-center">
            <div className="text-[6px] font-bold" style={{ color: '#596475' }}>{m.l}</div>
            <div className="text-[8px] font-bold text-white">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SQDCPBoardGraphic() {
  return (
    <div className="w-full h-full">
      <img
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031899852/KrztKyLzJbeuhpNg.webp"
        alt="SQDCP Dashboard — real data"
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}

function ConnectGraphic() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse(p => (p + 1) % 3), 1200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-2" style={{ color: '#10B981' }}>Data Flow</div>
      <div className="flex items-center gap-1">
        {['PLC', 'Edge', 'Cloud'].map((n, i) => (
          <div key={n} className="flex items-center gap-1">
            <div
              className="px-2 py-1 rounded text-[7px] font-bold transition-all duration-500"
              style={{
                background: pulse === i ? '#10B98130' : '#0d1220',
                color: pulse === i ? '#10B981' : '#596475',
                border: `1px solid ${pulse === i ? '#10B98150' : '#1e2738'}`,
              }}
            >
              {n}
            </div>
            {i < 2 && <span className="text-[8px]" style={{ color: pulse > i ? '#10B981' : '#1e2738' }}>→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionKanbanGraphic() {
  const [moving, setMoving] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMoving(p => (p + 1) % 3), 2000);
    return () => clearInterval(id);
  }, []);
  const cols = ['To Do', 'In Progress', 'Done'];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-2" style={{ color: '#F59E0B' }}>Kanban</div>
      <div className="flex gap-1 w-full">
        {cols.map((col, ci) => (
          <div key={col} className="flex-1 rounded p-1" style={{ background: '#0d122080' }}>
            <div className="text-[5px] font-bold text-center mb-1" style={{ color: '#596475' }}>{col}</div>
            {[0, 1].map(ri => (
              <div
                key={ri}
                className="h-2 rounded-sm mb-0.5 transition-all duration-700"
                style={{
                  background: moving === ci && ri === 0 ? '#F59E0B40' : '#1a2235',
                  border: moving === ci && ri === 0 ? '1px solid #F59E0B50' : '1px solid transparent',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SafetyGraphic() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const id = setInterval(() => setCount(p => p + 1), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-1" style={{ color: '#EF4444' }}>Safety</div>
      <div className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>{count}</div>
      <div className="text-[6px]" style={{ color: '#596475' }}>Days Since Last Incident</div>
    </div>
  );
}

function QualityGraphic() {
  const [fpy, setFpy] = useState(98.2);
  useEffect(() => {
    const id = setInterval(() => setFpy(p => {
      const d = (Math.random() - 0.3) * 0.5;
      return Math.min(99.9, Math.max(95, p + d));
    }), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-1" style={{ color: '#8C34E9' }}>Quality</div>
      <div className="text-xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>{fpy.toFixed(1)}%</div>
      <div className="text-[6px]" style={{ color: '#596475' }}>First Pass Yield</div>
    </div>
  );
}

function CertificationGraphic() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setProgress(p => (p + 1) % 4), 2000);
    return () => clearInterval(id);
  }, []);
  const items = ['ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949'];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3">
      <div className="text-[8px] font-bold mb-2" style={{ color: '#3B82F6' }}>Compliance</div>
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-1 mb-0.5 w-full px-2">
          <div
            className="w-2 h-2 rounded-full transition-all duration-500"
            style={{ background: i <= progress ? '#22C55E' : '#1a2235' }}
          />
          <span className="text-[6px]" style={{ color: i <= progress ? '#fff' : '#596475' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Graphic Map ─── */
const graphicMap: Record<string, React.FC> = {
  'policy-deployment': PolicyDeploymentGraphic,
  'oee-manager': OEEGaugeGraphic,
  'sqdcp': SQDCPBoardGraphic,
  'connect': ConnectGraphic,
  'action-manager': ActionKanbanGraphic,
  'safety-manager': SafetyGraphic,
  'quality-manager': QualityGraphic,
  'certification-manager': CertificationGraphic,
};

/* ─── Animated Service Card ─── */
interface AnimatedServiceCardProps {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  route: string;
  status: 'live' | 'in-development' | 'coming-soon';
  iconName?: string;
}

export default function AnimatedServiceCard({ slug, name, tagline, color, route, status, iconName }: AnimatedServiceCardProps) {
  const Icon = (iconName && iconMap[iconName]) || Target;
  const Graphic = graphicMap[slug];

  return (
    <Link href={route}>
      <div
        className="group rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] cursor-pointer h-full"
        style={{ background: '#0d1220', border: '1px solid #1e2738' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color + '40'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1e2738'; }}
      >
        {/* Animated graphic area */}
        <div className="h-28 relative overflow-hidden" style={{ background: '#0a0e1a' }}>
          {Graphic ? <Graphic /> : (
            <div className="w-full h-full flex items-center justify-center">
              <Icon className="w-8 h-8" style={{ color, opacity: 0.3 }} />
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: color + '15' }}>
              <Icon className="w-3.5 h-3.5" style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-white truncate" style={{ fontFamily: 'Montserrat' }}>{name}</h3>
            </div>
            {status === 'live' ? (
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: '#22C55E20', color: '#22C55E' }}>Live</span>
            ) : (
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: '#F59E0B20', color: '#F59E0B' }}>In Dev</span>
            )}
          </div>
          <p className="text-[11px] leading-relaxed mb-3" style={{ color: '#8890a0' }}>{tagline}</p>
          <span className="text-[11px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color }}>
            Learn More <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
