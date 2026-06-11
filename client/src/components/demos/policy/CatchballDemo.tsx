/*
 * CatchballDemo — self-contained port of the real Policy Deployment Catchball /
 * Goal Cascade view (oplytics-policy-deployment/client/src/components/Catchball.tsx).
 * Fed injected fictional sample data instead of PolicyContext.
 */
import { ChevronRight, Target, Crosshair, FolderKanban, BarChart3, ArrowDown, FileX2 } from 'lucide-react';
import { getCategoryColor } from '../xmatrix/xmatrixTokens';
import { testaPolicyPlan, type PolicyPlan } from '../data/testaPolicyPlan';

export default function CatchballDemo({ plan = testaPolicyPlan }: { plan?: PolicyPlan }) {
  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <FileX2 className="w-12 h-12 mb-4" style={{ color: '#596475' }} />
        <h2 className="text-lg font-semibold text-[#E2E8F0] mb-2">No Policy Plan</h2>
        <p className="text-sm text-[#596475] max-w-md">No strategic policy plan exists for this enterprise yet.</p>
      </div>
    );
  }

  const { breakthroughObjectives: bos, annualObjectives: aos, projects, kpis, correlations } = plan;

  const getLinkedAOs = (boId: string) => {
    const aoIds = correlations
      .filter(c => (c.sourceId === boId || c.targetId === boId) && c.quadrant === 'bo-ao')
      .map(c => c.sourceId === boId ? c.targetId : c.sourceId);
    return aos.filter(ao => aoIds.includes(ao.id));
  };

  const getLinkedProjects = (aoId: string) => {
    const projIds = correlations
      .filter(c => (c.sourceId === aoId || c.targetId === aoId) && c.quadrant === 'ao-proj')
      .map(c => c.sourceId === aoId ? c.targetId : c.sourceId);
    return projects.filter(p => projIds.includes(p.id));
  };

  const getLinkedKPIs = (projId: string) => {
    const kpiIds = correlations
      .filter(c => c.sourceId === projId && c.quadrant === 'proj-kpi')
      .map(c => c.targetId);
    return kpis.filter(k => kpiIds.includes(k.id));
  };

  const statusColors: Record<string, string> = {
    'on-track': '#10b981',
    'at-risk': '#f59e0b',
    'off-track': '#ef4444',
    'not-started': '#596475',
    'completed': '#10b981',
  };

  return (
    <div className="w-full">
      {/* Header — Oplytics purple gradient */}
      <div className="px-6 py-3 rounded-t-md" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h2 className="text-lg font-black text-white tracking-wide">Catchball / Goal Cascade</h2>
        <p className="text-sm text-white/60">Strategic alignment from breakthrough objectives to projects and KPIs</p>
      </div>

      <div className="rounded-b-md p-6" style={{ background: '#0e1624', border: '1px solid #1e2738', borderTop: 'none' }}>
        {/* Level indicators */}
        <div className="flex items-center gap-3 mb-6 pb-4 flex-wrap" style={{ borderBottom: '1px solid #1e2738' }}>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md" style={{ background: 'rgba(140,52,233,0.12)' }}>
            <Target className="w-4 h-4" style={{ color: '#8C34E9' }} />
            <span className="text-xs font-bold" style={{ color: '#8C34E9' }}>Breakthrough Objectives</span>
          </div>
          <ChevronRight className="w-4 h-4" style={{ color: '#2e3a4e' }} />
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md" style={{ background: 'rgba(29,184,206,0.1)' }}>
            <Crosshair className="w-4 h-4" style={{ color: '#1DB8CE' }} />
            <span className="text-xs font-bold" style={{ color: '#1DB8CE' }}>Annual Tactics</span>
          </div>
          <ChevronRight className="w-4 h-4" style={{ color: '#2e3a4e' }} />
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md" style={{ background: 'rgba(249,115,22,0.1)' }}>
            <FolderKanban className="w-4 h-4" style={{ color: '#f97316' }} />
            <span className="text-xs font-bold" style={{ color: '#f97316' }}>Projects</span>
          </div>
          <ChevronRight className="w-4 h-4" style={{ color: '#2e3a4e' }} />
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md" style={{ background: 'rgba(59,130,246,0.1)' }}>
            <BarChart3 className="w-4 h-4" style={{ color: '#3b82f6' }} />
            <span className="text-xs font-bold" style={{ color: '#3b82f6' }}>KPIs</span>
          </div>
        </div>

        {/* Cascade tree */}
        <div className="space-y-5">
          {bos.map(bo => {
            const linkedAOs = getLinkedAOs(bo.id);
            return (
              <div key={bo.id} className="rounded-md overflow-hidden" style={{ border: '1px solid #1e2738' }}>
                {/* BO Level */}
                <div className="px-4 py-3" style={{ background: 'rgba(140,52,233,0.06)', borderBottom: '1px solid #1e2738' }}>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5" style={{ color: '#8C34E9' }} />
                    <span className="font-mono text-xs font-bold" style={{ color: '#8C34E9' }}>{bo.code}</span>
                    <span className="text-sm font-semibold text-white">{bo.description}</span>
                    {linkedAOs.length === 0 && (
                      <span className="text-xs text-red-400">Cascade required</span>
                    )}
                    <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded uppercase" style={{ background: 'rgba(140,52,233,0.12)', color: '#8C34E9' }}>
                      {bo.category}
                    </span>
                  </div>
                </div>

                {/* AO Level */}
                {linkedAOs.length > 0 && (
                  <div className="pl-6">
                    {linkedAOs.map((ao, aoIdx) => {
                      const linkedProjects = getLinkedProjects(ao.id);
                      return (
                        <div key={ao.id} style={{ borderBottom: aoIdx < linkedAOs.length - 1 ? '1px solid #1a2233' : 'none' }}>
                          <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(29,184,206,0.04)' }}>
                            <ArrowDown className="w-3 h-3 -ml-3" style={{ color: '#2e3a4e' }} />
                            <Crosshair className="w-4 h-4" style={{ color: '#1DB8CE' }} />
                            <span className="font-mono text-[10px] font-bold" style={{ color: '#1DB8CE' }}>{ao.code}</span>
                            <span className="text-xs font-medium" style={{ color: '#c0c6d0' }}>{ao.description}</span>
                            {linkedProjects.length === 0 && (
                              <span className="text-xs text-red-400">Cascade required</span>
                            )}
                            <div className="w-2 h-2 rounded-full ml-auto" style={{ background: statusColors[ao.status] || '#596475' }} title={ao.status} />
                            <span className="text-[10px]" style={{ color: '#596475' }}>{ao.owner}</span>
                          </div>

                          {/* Project Level */}
                          {linkedProjects.length > 0 && (
                            <div className="pl-8">
                              {linkedProjects.map((proj, pIdx) => {
                                const linkedKPIs = getLinkedKPIs(proj.id);
                                return (
                                  <div key={proj.id} style={{ borderBottom: pIdx < linkedProjects.length - 1 ? '1px solid #151d2e' : 'none' }}>
                                    <div className="flex items-center gap-2 px-4 py-2" style={{ background: 'rgba(249,115,22,0.03)' }}>
                                      <ArrowDown className="w-3 h-3 -ml-3" style={{ color: '#1e2738' }} />
                                      <FolderKanban className="w-3.5 h-3.5" style={{ color: getCategoryColor(proj.category) }} />
                                      <span className="font-mono text-[10px] font-bold" style={{ color: '#596475' }}>{proj.code}</span>
                                      <span className="text-xs" style={{ color: '#c0c6d0' }}>{proj.name}</span>
                                      <div className="flex items-center gap-1 ml-auto">
                                        <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2738' }}>
                                          <div
                                            className="h-full rounded-full"
                                            style={{
                                              width: `${proj.progress}%`,
                                              backgroundColor: getCategoryColor(proj.category),
                                            }}
                                          />
                                        </div>
                                        <span className="text-[10px] font-mono" style={{ color: '#596475' }}>{proj.progress}%</span>
                                        <div className="w-2 h-2 rounded-full" style={{ background: statusColors[proj.status] || '#596475' }} title={proj.status} />
                                      </div>
                                    </div>

                                    {/* KPI Level */}
                                    {linkedKPIs.length > 0 && (
                                      <div className="pl-10" style={{ background: 'rgba(59,130,246,0.03)' }}>
                                        {linkedKPIs.map(kpi => {
                                          const pct = kpi.direction === 'up'
                                            ? Math.min(100, (kpi.current / kpi.target) * 100)
                                            : Math.min(100, (kpi.target / Math.max(kpi.current, 1)) * 100);
                                          return (
                                            <div key={kpi.id} className="flex items-center gap-2 px-4 py-1.5">
                                              <BarChart3 className="w-3 h-3" style={{ color: '#3b82f6' }} />
                                              <span className="font-mono text-[10px]" style={{ color: '#3b82f6' }}>{kpi.code}</span>
                                              <span className="text-[11px]" style={{ color: '#8890a0' }}>{kpi.name}</span>
                                              <div className="flex items-center gap-1 ml-auto">
                                                <span className="text-[10px] font-mono font-medium" style={{ color: '#c0c6d0' }}>
                                                  {kpi.current} / {kpi.target} {kpi.unit}
                                                </span>
                                                <div className="w-2 h-2 rounded-full" style={{ background: pct >= 90 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444' }} />
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
