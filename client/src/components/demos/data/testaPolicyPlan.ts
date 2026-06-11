/**
 * Testa Group — fictional Policy Deployment sample data for the public marketing demo.
 *
 * IMPORTANT: This is 100% fictional. It must NOT contain any real customer or
 * site names. It mirrors the *structure* of a real Hoshin Kanri X-Matrix so the
 * demo looks dense and believable, with invented company, sites, owners, and figures.
 *
 * Shape matches what the ported Policy Deployment views consume (the context-resolved
 * shape from oplytics-policy-deployment), using plain string ids instead of DB integers.
 */

export type SqdcpCategory = 'safety' | 'quality' | 'delivery' | 'cost' | 'people';
export type ObjectiveStatus = 'on-track' | 'at-risk' | 'off-track' | 'not-started' | 'completed';
export type CorrelationStrength = 'strong' | 'weak';
export type CorrelationQuadrant = 'bo-ao' | 'ao-proj' | 'proj-kpi' | 'kpi-bo';
export type KpiDirection = 'up' | 'down';

export interface BreakthroughObjective {
  id: string;
  code: string;
  description: string;
  category: SqdcpCategory;
}

export interface AnnualObjective {
  id: string;
  code: string;
  description: string;
  owner: string;
  status: ObjectiveStatus;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  description: string;
  owner: string;
  status: ObjectiveStatus;
  progress: number;
  startDate: string;
  endDate: string;
  category: SqdcpCategory;
}

export interface Kpi {
  id: string;
  code: string;
  name: string;
  owner: string;
  current: number;
  target: number;
  unit: string;
  direction: KpiDirection;
}

export interface Correlation {
  sourceId: string;
  targetId: string;
  strength: CorrelationStrength;
  quadrant: CorrelationQuadrant;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
}

export interface BowlingEntry {
  kpiId: string;
  month: number; // 1-12
  plan: number;
  actual: number | null;
}

export interface PolicyPlan {
  title: string;
  owner: string;
  lastUpdated: string;
  year: number;
  breakthroughObjectives: BreakthroughObjective[];
  annualObjectives: AnnualObjective[];
  projects: Project[];
  kpis: Kpi[];
  correlations: Correlation[];
  teamMembers: TeamMember[];
  bowlingChart: BowlingEntry[];
}

/* ── Breakthrough Objectives (3-year strategic) ── */
const breakthroughObjectives: BreakthroughObjective[] = [
  { id: 'bo-c1', code: 'C1', description: 'Reduce group-wide manufacturing waste by 40% across all sites', category: 'cost' },
  { id: 'bo-s1', code: 'S1', description: 'Achieve zero lost-time incidents across the Components division', category: 'safety' },
  { id: 'bo-d1', code: 'D1', description: 'Grow core revenue 25% through new European market penetration', category: 'delivery' },
  { id: 'bo-q1', code: 'Q1', description: 'Achieve OEE >85% on all machining and cutting lines', category: 'quality' },
  { id: 'bo-m1', code: 'M1', description: 'Build a continuous improvement culture with 80%+ engagement across all BUs', category: 'people' },
];

/* ── Annual Objectives (this-year tactics) ── */
const annualObjectives: AnnualObjective[] = [
  { id: 'ao-t1', code: 'T1', description: 'Reduce scrap rate from 8.2% to 5.5% at Hartwell & Brookline sites', owner: 'Helen Marsh', status: 'on-track' },
  { id: 'ao-t2', code: 'T2', description: 'Implement standardised safety audits across all 9 Components sites', owner: 'Priya Nair', status: 'on-track' },
  { id: 'ao-t3', code: 'T3', description: 'Launch production at Testa Valden to full capacity', owner: 'Marcus Cole', status: 'at-risk' },
  { id: 'ao-t4', code: 'T4', description: 'Deploy OEE tracking on all machining cells across Norhaven & Calderport', owner: 'Daniel Roth', status: 'on-track' },
  { id: 'ao-t5', code: 'T5', description: 'Reduce changeover time by 35% on cutting lines at Estmoor & Brookline', owner: 'Sofia Lindqvist', status: 'off-track' },
  { id: 'ao-t6', code: 'T6', description: 'Roll out Testa CI Academy training programme to 200+ operators', owner: 'Owen Pryce', status: 'on-track' },
];

/* ── Improvement Projects ── */
const projects: Project[] = [
  { id: 'p-1-1', code: 'P1.1', name: 'Hartwell scrap reduction', description: 'Root-cause analysis and process parameter optimisation on HW-M1 and HW-M2 machining cells to reduce off-spec parts', owner: 'Helen Marsh', status: 'on-track', progress: 62, startDate: '2026-01-15', endDate: '2026-06-30', category: 'cost' },
  { id: 'p-1-2', code: 'P1.2', name: 'Brookline conversion line waste mapping', description: 'Value-stream mapping of BL-CV1 and BL-CV2 conversion lines to identify and eliminate waste', owner: 'Tom Beckett', status: 'on-track', progress: 45, startDate: '2026-02-01', endDate: '2026-08-31', category: 'cost' },
  { id: 'p-1-3', code: 'P1.3', name: 'Components safety audit programme', description: 'Design and deploy standardised safety audit checklists, near-miss reporting, and monthly review cadence across all 9 Components sites', owner: 'Priya Nair', status: 'at-risk', progress: 35, startDate: '2026-01-01', endDate: '2026-12-31', category: 'safety' },
  { id: 'p-1-4', code: 'P1.4', name: 'Valden line ramp-up', description: 'Commission VA-L1 assembly line in Valden, train local operators, and achieve 80% utilisation within 6 months', owner: 'Marcus Cole', status: 'at-risk', progress: 28, startDate: '2026-03-01', endDate: '2026-09-30', category: 'delivery' },
  { id: 'p-1-5', code: 'P1.5', name: 'OEE digital rollout — Norhaven & Calderport', description: 'Install OEE sensors and dashboards on NH-M1, NH-C1, and CP-M1 cells; integrate with Oplytics OEE Manager', owner: 'Daniel Roth', status: 'on-track', progress: 55, startDate: '2026-02-01', endDate: '2026-07-31', category: 'quality' },
  { id: 'p-1-6', code: 'P1.6', name: 'SMED programme — Estmoor cutting lines', description: 'Apply Single-Minute Exchange of Dies methodology to ES-C1 and BL cutting lines to reduce changeover from 42 to 27 min', owner: 'Sofia Lindqvist', status: 'off-track', progress: 18, startDate: '2026-01-15', endDate: '2026-07-31', category: 'delivery' },
  { id: 'p-1-7', code: 'P1.7', name: 'Testa CI Academy launch', description: 'Develop and deliver continuous improvement training modules (5S, problem solving, standard work) to 200+ operators across all business units', owner: 'Owen Pryce', status: 'on-track', progress: 40, startDate: '2026-02-01', endDate: '2026-11-30', category: 'people' },
];

/* ── KPIs ── */
const kpis: Kpi[] = [
  { id: 'k-1-1', code: 'IP1.1', name: 'Scrap rate (Hartwell)', owner: 'Helen Marsh', current: 7.1, target: 5.5, unit: '%', direction: 'down' },
  { id: 'k-1-2', code: 'IP1.2', name: 'OEE — machining cells', owner: 'Daniel Roth', current: 72.4, target: 85, unit: '%', direction: 'up' },
  { id: 'k-1-3', code: 'IP1.3', name: 'On-time delivery (Valden)', owner: 'Marcus Cole', current: 91.8, target: 97, unit: '%', direction: 'up' },
  { id: 'k-1-4', code: 'IP1.4', name: 'Lost-time incidents (Components)', owner: 'Priya Nair', current: 3, target: 0, unit: 'incidents', direction: 'down' },
  { id: 'k-1-5', code: 'IP1.5', name: 'Changeover time (Estmoor)', owner: 'Sofia Lindqvist', current: 42, target: 27, unit: 'minutes', direction: 'down' },
  { id: 'k-1-6', code: 'IP1.6', name: 'Valden line utilisation', owner: 'Marcus Cole', current: 34, target: 80, unit: '%', direction: 'up' },
  { id: 'k-1-7', code: 'IP1.7', name: 'CI Academy operators trained', owner: 'Owen Pryce', current: 48, target: 200, unit: 'people', direction: 'up' },
];

/* ── Team Members ── */
const teamMembers: TeamMember[] = [
  { id: 'tm-1', name: 'Dieter Falk', role: 'Programme Director', department: 'Strategy' },
  { id: 'tm-2', name: 'Helen Marsh', role: 'Operations Lead', department: 'Components' },
  { id: 'tm-3', name: 'Priya Nair', role: 'Safety Manager', department: 'HSE' },
  { id: 'tm-4', name: 'Daniel Roth', role: 'CI Engineer', department: 'Engineering' },
  { id: 'tm-5', name: 'Marcus Cole', role: 'Plant Manager', department: 'Valden' },
  { id: 'tm-6', name: 'Sofia Lindqvist', role: 'Production Lead', department: 'Estmoor' },
  { id: 'tm-7', name: 'Owen Pryce', role: 'L&D Lead', department: 'People' },
];

/* ── Correlations (X-Matrix links) ── */
const correlations: Correlation[] = [
  // Breakthrough Objective ↔ Annual Objective
  { sourceId: 'bo-c1', targetId: 'ao-t1', strength: 'strong', quadrant: 'bo-ao' },
  { sourceId: 'bo-c1', targetId: 'ao-t5', strength: 'weak', quadrant: 'bo-ao' },
  { sourceId: 'bo-s1', targetId: 'ao-t2', strength: 'strong', quadrant: 'bo-ao' },
  { sourceId: 'bo-d1', targetId: 'ao-t3', strength: 'strong', quadrant: 'bo-ao' },
  { sourceId: 'bo-q1', targetId: 'ao-t4', strength: 'strong', quadrant: 'bo-ao' },
  { sourceId: 'bo-q1', targetId: 'ao-t1', strength: 'weak', quadrant: 'bo-ao' },
  { sourceId: 'bo-m1', targetId: 'ao-t6', strength: 'strong', quadrant: 'bo-ao' },
  { sourceId: 'bo-m1', targetId: 'ao-t2', strength: 'weak', quadrant: 'bo-ao' },
  // Annual Objective ↔ Project
  { sourceId: 'ao-t1', targetId: 'p-1-1', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t1', targetId: 'p-1-2', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t2', targetId: 'p-1-3', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t3', targetId: 'p-1-4', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t4', targetId: 'p-1-5', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t5', targetId: 'p-1-6', strength: 'strong', quadrant: 'ao-proj' },
  { sourceId: 'ao-t6', targetId: 'p-1-7', strength: 'strong', quadrant: 'ao-proj' },
  // Project ↔ KPI
  { sourceId: 'p-1-1', targetId: 'k-1-1', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-2', targetId: 'k-1-1', strength: 'weak', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-3', targetId: 'k-1-4', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-4', targetId: 'k-1-6', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-4', targetId: 'k-1-3', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-5', targetId: 'k-1-2', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-6', targetId: 'k-1-5', strength: 'strong', quadrant: 'proj-kpi' },
  { sourceId: 'p-1-7', targetId: 'k-1-7', strength: 'strong', quadrant: 'proj-kpi' },
  // KPI ↔ Breakthrough Objective
  { sourceId: 'k-1-1', targetId: 'bo-c1', strength: 'strong', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-2', targetId: 'bo-q1', strength: 'strong', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-3', targetId: 'bo-d1', strength: 'strong', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-4', targetId: 'bo-s1', strength: 'strong', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-5', targetId: 'bo-c1', strength: 'weak', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-6', targetId: 'bo-d1', strength: 'strong', quadrant: 'kpi-bo' },
  { sourceId: 'k-1-7', targetId: 'bo-m1', strength: 'strong', quadrant: 'kpi-bo' },
];

/* ── Bowling chart (12-month plan vs actual per KPI) ──
 * Deterministic so the demo renders identically every load. Plan trends linearly
 * from a starting baseline to the target; the first 3 months carry actuals that
 * trend toward each KPI's current value. */
function round(value: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round(value * f) / f;
}

function buildBowlingChart(): BowlingEntry[] {
  const specs = [
    { kpiId: 'k-1-1', start: 8.2, target: 5.5, currentVal: 7.1, dp: 1 },
    { kpiId: 'k-1-2', start: 68, target: 85, currentVal: 72.4, dp: 1 },
    { kpiId: 'k-1-3', start: 89, target: 97, currentVal: 91.8, dp: 1 },
    { kpiId: 'k-1-4', start: 5, target: 0, currentVal: 3, dp: 0 },
    { kpiId: 'k-1-5', start: 42, target: 27, currentVal: 39, dp: 0 },
    { kpiId: 'k-1-6', start: 0, target: 80, currentVal: 34, dp: 0 },
    { kpiId: 'k-1-7', start: 0, target: 200, currentVal: 48, dp: 0 },
  ];
  const ACTUAL_MONTHS = 3;
  const entries: BowlingEntry[] = [];
  for (const s of specs) {
    for (let m = 1; m <= 12; m++) {
      const plan = round(s.start + (s.target - s.start) * (m / 12), s.dp);
      const actual = m <= ACTUAL_MONTHS
        ? round(s.start + (s.currentVal - s.start) * (m / ACTUAL_MONTHS), s.dp)
        : null;
      entries.push({ kpiId: s.kpiId, month: m, plan, actual });
    }
  }
  return entries;
}

const bowlingChart = buildBowlingChart();

export const testaPolicyPlan: PolicyPlan = {
  title: 'Testa Group — 3-Year Strategic Policy Deployment X-Matrix',
  owner: 'Dieter Falk',
  lastUpdated: '2026-03-22',
  year: 2026,
  breakthroughObjectives,
  annualObjectives,
  projects,
  kpis,
  correlations,
  teamMembers,
  bowlingChart,
};

export default testaPolicyPlan;
