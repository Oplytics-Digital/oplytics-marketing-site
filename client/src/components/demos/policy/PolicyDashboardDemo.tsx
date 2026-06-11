/*
 * PolicyDashboardDemo — self-contained port of the real Policy Deployment Dashboard
 * (oplytics-policy-deployment/client/src/components/Dashboard.tsx). Fed injected
 * fictional sample data instead of PolicyContext.
 */
import { Target, Users, FolderKanban, BarChart3, FileX2 } from 'lucide-react';
import { getStatusColor } from '../xmatrix/xmatrixTokens';
import { testaPolicyPlan, type PolicyPlan, type Kpi } from '../data/testaPolicyPlan';

function KPIGauge({ kpi }: { kpi: Kpi }) {
  const pct = kpi.direction === 'up'
    ? Math.min(100, (kpi.current / kpi.target) * 100)
    : kpi.current === 0 ? 100 : Math.min(100, (kpi.target / kpi.current) * 100);
  const color = pct >= 90 ? '#1DB8CE' : pct >= 70 ? '#f59e0b' : '#ef4444';
  const circumference = 2 * Math.PI * 36;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-3">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="#1e2738" strokeWidth="6" />
          <circle
            cx="40" cy="40" r="36" fill="none"
            stroke={color} strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">{Math.round(pct)}%</span>
        </div>
      </div>
      <span className="text-[11px] font-medium text-gray-300 mt-1.5 text-center leading-tight">{kpi.name}</span>
      <span className="text-[10px] mt-0.5" style={{ color: '#596475' }}>
        {kpi.current} / {kpi.target} {kpi.unit}
      </span>
    </div>
  );
}

export default function PolicyDashboardDemo({ plan = testaPolicyPlan }: { plan?: PolicyPlan }) {
  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <FileX2 className="w-12 h-12 mb-4" style={{ color: '#596475' }} />
        <h2 className="text-lg font-semibold text-[#E2E8F0] mb-2">No Policy Plan</h2>
        <p className="text-sm text-[#596475] max-w-md">No strategic policy plan exists for this enterprise yet.</p>
      </div>
    );
  }

  const { projects, kpis, breakthroughObjectives: bos, teamMembers } = plan;

  const statusCounts = {
    'on-track': projects.filter(p => p.status === 'on-track').length,
    'at-risk': projects.filter(p => p.status === 'at-risk').length,
    'off-track': projects.filter(p => p.status === 'off-track').length,
    'not-started': projects.filter(p => p.status === 'not-started').length,
  };

  const avgProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length);

  const kpisOnTrack = kpis.filter(k => {
    const pct = k.direction === 'up'
      ? (k.current / k.target) * 100
      : k.current === 0 ? 100 : (k.target / k.current) * 100;
    return pct >= 90;
  }).length;

  const cardStyle = { background: '#0e1624', border: '1px solid #1e2738' };
  const cardHeaderStyle = { borderBottom: '1px solid #1e2738' };

  return (
    <div className="w-full space-y-6">
      {/* Hero Section — Oplytics purple gradient */}
      <div className="relative rounded-md overflow-hidden" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 50%, #1a1040 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(29,184,206,0.3) 0%, transparent 60%)' }} />
        <div className="relative px-6 py-8">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            ■ Strategy Deployment
          </p>
          <h2 className="text-lg font-black text-white tracking-wide">{plan.title}</h2>
          <p className="text-white/50 mt-1 text-sm">Strategic deployment overview for {plan.year}</p>
          <div className="flex items-center gap-4 mt-5 flex-wrap">
            {[
              { value: `${avgProgress}%`, label: 'Avg Progress' },
              { value: projects.length, label: 'Projects' },
              { value: `${kpisOnTrack}/${kpis.length}`, label: 'KPIs On Track' },
              { value: bos.length, label: 'Breakthrough Obj.' },
            ].map((stat, i) => (
              <div key={i} className="rounded-md px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Project Status */}
        <div className="rounded-md overflow-hidden" style={cardStyle}>
          <div className="px-4 py-3 flex items-center gap-2" style={cardHeaderStyle}>
            <FolderKanban className="w-4 h-4" style={{ color: '#8C34E9' }} />
            <h3 className="text-sm font-bold text-white">Project Status</h3>
          </div>
          <div className="p-4 space-y-3">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor(status) }} />
                <span className="text-xs capitalize flex-1" style={{ color: '#8890a0' }}>{status.replace('-', ' ')}</span>
                <span className="text-sm font-bold text-white">{count}</span>
                <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2738' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(count / projects.length) * 100}%`,
                      backgroundColor: getStatusColor(status),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Gauges */}
        <div className="lg:col-span-2 rounded-md overflow-hidden" style={cardStyle}>
          <div className="px-4 py-3 flex items-center gap-2" style={cardHeaderStyle}>
            <BarChart3 className="w-4 h-4" style={{ color: '#1DB8CE' }} />
            <h3 className="text-sm font-bold text-white">Key Performance Indicators</h3>
          </div>
          <div className="p-2 flex flex-wrap justify-center">
            {kpis.map(kpi => (
              <KPIGauge key={kpi.id} kpi={kpi} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Breakthrough Objectives */}
        <div className="rounded-md overflow-hidden" style={cardStyle}>
          <div className="px-4 py-3 flex items-center gap-2" style={cardHeaderStyle}>
            <Target className="w-4 h-4" style={{ color: '#8C34E9' }} />
            <h3 className="text-sm font-bold text-white">Breakthrough Objectives (3-5 Year)</h3>
          </div>
          <div className="p-4 space-y-2">
            {bos.map(bo => (
              <div key={bo.id} className="flex items-center gap-3 px-3 py-2 rounded-md" style={{ background: '#131b2e' }}>
                <span className="font-mono text-[10px] font-bold" style={{ color: '#8C34E9' }}>{bo.code}</span>
                <span className="text-xs text-gray-300 flex-1">{bo.description}</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded uppercase" style={{ background: 'rgba(140,52,233,0.12)', color: '#8C34E9' }}>
                  {bo.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="rounded-md overflow-hidden" style={cardStyle}>
          <div className="px-4 py-3 flex items-center gap-2" style={cardHeaderStyle}>
            <Users className="w-4 h-4" style={{ color: '#1DB8CE' }} />
            <h3 className="text-sm font-bold text-white">Team Members</h3>
          </div>
          <div className="p-4 space-y-2">
            {teamMembers.map(member => (
              <div key={member.id} className="flex items-center gap-3 px-3 py-2 rounded-md" style={{ background: '#131b2e' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(140,52,233,0.15)' }}>
                  <span className="text-xs font-bold" style={{ color: '#8C34E9' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">{member.name}</div>
                  <div className="text-[10px]" style={{ color: '#596475' }}>{member.role}</div>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: '#1e2738', color: '#596475' }}>
                  {member.department}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
