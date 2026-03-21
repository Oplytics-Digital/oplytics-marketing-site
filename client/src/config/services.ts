/**
 * TASK-01 / TASK-16: Service Status Configuration & Standardised Template Data
 *
 * Shared identity fields (slug, name, tagline, description, icon, accentColor,
 * status, category, subdomain) are imported from @pablo2410/shared-ui/services.
 * Marketing-specific fields (heroImage, demoImage, problem, howItWorks, results,
 * aiFeatures, crossSellIds) are extended locally below.
 *
 * CLAIMS POLICY (TASK-16):
 *   - Verified: Real customer data with permission to publish
 *   - Research-backed: Cited from published research with source
 *   - Neutral: No specific numbers — directional language only
 */

import {
  SERVICE_CATALOG,
  type ServiceDefinition,
  type ServiceStatus as SharedServiceStatus,
  type ServiceCategory,
} from '@pablo2410/shared-ui/services';

// Re-export shared types for backward compatibility
export type ServiceStatus = SharedServiceStatus | 'in-development';
export type { ServiceCategory };
export type ClaimTier = 'verified' | 'research-backed' | 'neutral';

export interface AIFeature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface ResultMetric {
  value: string;
  label: string;
  tier: ClaimTier;
  source?: string;
}

export interface ServiceConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ServiceStatus;
  slug: string;
  icon: string;
  accentColor: string;
  category: ServiceCategory;
  subdomain?: string;
  heroImage?: string;
  demoImage?: string;
  aiFeatures: AIFeature[];
  problem: string;
  howItWorks: HowItWorksStep[];
  results: ResultMetric[];
  crossSellIds: string[];
}

// ---------------------------------------------------------------------------
// Marketing-specific extensions per service (keyed by slug)
// ---------------------------------------------------------------------------
interface MarketingExtension {
  /** Legacy ID used for cross-sell references */
  id: string;
  /** Override description with longer marketing copy (optional) */
  descriptionOverride?: string;
  heroImage?: string;
  demoImage?: string;
  problem: string;
  howItWorks: HowItWorksStep[];
  results: ResultMetric[];
  crossSellIds: string[];
  aiFeatures: AIFeature[];
}

const MARKETING_EXTENSIONS: Record<string, MarketingExtension> = {
  'policy-deployment': {
    id: 'policy-deployment',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-policy-YkQnvYo8xjtKQmKoSKVDXW.webp',
    problem: 'Strategic plans fail when they stay in the boardroom. Without a structured deployment process, objectives get lost in translation between management layers. Teams work hard on the wrong things, KPIs disconnect from strategy, and annual plans become shelf-ware within weeks.',
    howItWorks: [
      { step: 1, title: 'Define Strategic Objectives', description: 'Set your 3-5 year breakthrough objectives and annual priorities using the Hoshin Kanri methodology.' },
      { step: 2, title: 'Build the X-Matrix', description: 'Link strategies to tactics, metrics, and owners in a visual X-matrix. See the full picture at a glance.' },
      { step: 3, title: 'Cascade Through Catchball', description: 'Deploy objectives through every level via the catchball process. Align top-down goals with bottom-up feedback.' },
      { step: 4, title: 'Review and Adjust', description: 'Monthly and quarterly reviews with automated bowling charts. Course-correct before targets slip.' },
    ],
    results: [
      { value: 'Improved', label: 'Strategic alignment across all organisational levels', tier: 'neutral' },
      { value: 'Faster', label: 'Objective deployment from boardroom to manufacturing floor', tier: 'neutral' },
      { value: '40%', label: 'Reduction in strategy-execution gap (industry research)', tier: 'research-backed', source: 'Hoshin Kanri effectiveness studies, Lean Enterprise Institute' },
      { value: 'Measurable', label: 'Progress tracking with automated bowling charts', tier: 'neutral' },
    ],
    crossSellIds: ['sqdcp-hub', 'action-manager', 'oee-manager'],
    aiFeatures: [
      { title: 'AI Strategy Alignment', description: 'Machine learning identifies misalignment between strategic objectives and operational KPIs, suggesting corrective cascading adjustments.' },
      { title: 'Predictive Goal Tracking', description: 'AI forecasts whether current trajectories will meet targets and flags at-risk objectives before they slip.' },
    ],
  },
  'sqdcp': {
    id: 'sqdcp-hub',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/sqdcp-dashboard-real_bcc775e0.png',
    problem: 'Physical whiteboards are static, illegible from a distance, and impossible to aggregate across sites. Tier meetings rely on outdated data, actions get lost on sticky notes, and management has no visibility into daily performance without walking the floor.',
    howItWorks: [
      { step: 1, title: 'Configure Your Boards', description: 'Set up digital SQDCP boards for each team, cell, or value stream. Define metrics, targets, and escalation rules.' },
      { step: 2, title: 'Capture Daily Data', description: 'Teams update their boards at the start of each shift. Data flows in from connected systems automatically.' },
      { step: 3, title: 'Run Tier Meetings', description: 'Structured daily stand-ups with real-time data. Raise issues, assign actions, and escalate blockers in seconds.' },
      { step: 4, title: 'Aggregate and Analyse', description: 'Roll up data across teams, sites, and regions. Spot trends and drive continuous improvement at every level.' },
    ],
    results: [
      { value: 'Faster', label: 'Tier meeting preparation with pre-populated boards', tier: 'neutral' },
      { value: 'Better', label: 'Cross-site visibility without physical presence', tier: 'neutral' },
      { value: '25%', label: 'Reduction in meeting duration (industry benchmarks)', tier: 'research-backed', source: 'Digital lean management studies, McKinsey Operations Practice' },
      { value: 'Real-time', label: 'Data aggregation replacing manual spreadsheet consolidation', tier: 'neutral' },
    ],
    crossSellIds: ['action-manager', 'policy-deployment', 'oee-manager'],
    aiFeatures: [
      { title: 'AI Anomaly Detection', description: 'Automatically flags unusual metric patterns across Safety, Quality, Delivery, Cost, and People dimensions before they escalate.' },
      { title: 'Smart Trend Summaries', description: 'AI generates natural-language daily summaries highlighting key changes, emerging risks, and improvement opportunities.' },
    ],
  },
  'oee-manager': {
    id: 'oee-manager',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-oee-Th2ta3q9vx8SDihX3BBphp.webp',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-oee-QnRQ7NMUruu9AHLjseSSx2.webp',
    problem: 'Most manufacturers have a feel for their productivity losses, but few have the systems to capture the breakdown in real time, categorise it and attack those losses through structured improvement activity. OEE Manager gives your teams exactly that \u2014 live visibility of Availability, Performance and Quality losses, with the context and tools to act on them systematically.',
    howItWorks: [
      { step: 1, title: 'Connect Your Machines', description: 'Link PLCs, sensors, and manual inputs via SmartConnect. Data flows automatically with no operator intervention.' },
      { step: 2, title: 'Track in Real Time', description: 'Live OEE dashboards show availability, performance, and quality for every machine and line as it happens.' },
      { step: 3, title: 'Classify Losses', description: 'Downtime and speed losses are automatically categorised. Pareto analysis reveals your biggest opportunities.' },
      { step: 4, title: 'Drive Improvement', description: 'Use trend analysis, shift comparisons, and root cause tools to systematically eliminate losses.' },
    ],
    results: [
      { value: '5-15%', label: 'OEE improvement within first 12 months (industry average)', tier: 'research-backed', source: 'OEE Foundation, Smart Industry benchmarks' },
      { value: 'Eliminated', label: 'Manual data collection errors and delays', tier: 'neutral' },
      { value: 'Immediate', label: 'Visibility into loss reasons as they occur', tier: 'neutral' },
      { value: 'Significant', label: 'Reduction in unplanned downtime through pattern detection', tier: 'neutral' },
    ],
    crossSellIds: ['smartconnect', 'sqdcp-hub', 'action-manager'],
    aiFeatures: [
      { title: 'AI Loss Classification', description: 'Automatically classifies downtime events and speed losses using machine learning, eliminating manual categorisation errors.' },
      { title: 'Predictive Maintenance Alerts', description: 'AI analyses OEE patterns to predict equipment failures before they occur, reducing unplanned downtime.' },
      { title: 'Smart Root Cause Analysis', description: 'AI correlates OEE drops with process variables, operator shifts, and material batches to surface root causes.' },
    ],
  },
  'connect': {
    id: 'smartconnect',
    descriptionOverride: 'OplyticsConnect is your platform integration hub. Connect machines, assets, ERP systems, and third-party data sources into a single unified data layer. Whether you\'re pulling live OEE data from the shop floor or syncing production targets from your ERP, OplyticsConnect manages every data feed in and out of the Oplytics platform. Integrated. Automated. Always live.',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-connect-BLrEbXt4nBnvZdECMPpzLm.webp',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-connect-QpzAp7fYGbnsnuiT3dKihD.webp',
    problem: 'Manufacturing data is trapped in silos \u2014 PLCs speak different protocols, legacy systems have no APIs, and connecting a new machine takes weeks of custom development. Without a unified connectivity layer, digital transformation stalls at the edge.',
    howItWorks: [
      { step: 1, title: 'Discover Devices', description: 'SmartConnect scans your network and identifies available PLCs, sensors, and industrial systems automatically.' },
      { step: 2, title: 'Map Signals', description: 'Visual drag-and-drop interface maps machine signals to Oplytics data points. No coding required.' },
      { step: 3, title: 'Transform Data', description: 'Built-in calculation engine converts raw signals into meaningful metrics \u2014 OEE, cycle times, energy consumption.' },
      { step: 4, title: 'Stream to Platform', description: 'Data flows in real time to OEE Manager, SQDCP Dashboard, and other Oplytics services. Edge buffering ensures zero data loss.' },
    ],
    results: [
      { value: 'Faster', label: 'Machine integration compared to custom development', tier: 'neutral' },
      { value: 'Zero', label: 'Code required for standard PLC connections', tier: 'neutral' },
      { value: 'Unified', label: 'Data layer across all machines regardless of protocol', tier: 'neutral' },
      { value: 'Resilient', label: 'Edge buffering ensures no data loss during connectivity issues', tier: 'neutral' },
    ],
    crossSellIds: ['oee-manager', 'sqdcp-hub', 'quality-manager'],
    aiFeatures: [
      { title: 'AI Signal Mapping', description: 'Machine learning auto-detects and maps machine signals to Oplytics data points, reducing configuration time significantly.' },
      { title: 'Intelligent Edge Processing', description: 'AI at the edge filters noise, detects anomalies, and pre-processes data before it reaches the platform.' },
    ],
  },
  'action-manager': {
    id: 'action-manager',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-action-3Ctr5Ddy2xCm5tqouxWKrn.webp',
    problem: 'Actions from audits, incidents, and meetings are scattered across spreadsheets, emails, and sticky notes. Without a single register, items get duplicated, forgotten, or closed without verification. The same problems recur because root causes are never properly addressed.',
    howItWorks: [
      { step: 1, title: 'Capture from Any Source', description: 'Raise actions from audits, incidents, tier meetings, or any Oplytics service. One unified action register.' },
      { step: 2, title: 'Assign and Prioritise', description: 'Assign to individuals with clear due dates and priority levels. AI scoring helps focus on what matters most.' },
      { step: 3, title: 'Track to Closure', description: 'Visual progress tracking from open through in-progress to verified closure. Automatic escalation for overdue items.' },
      { step: 4, title: 'Analyse and Improve', description: 'Completion rates, ageing analysis, and source breakdown dashboards. Measure and improve your action culture.' },
    ],
    results: [
      { value: 'Improved', label: 'Action completion rates through visibility and escalation', tier: 'neutral' },
      { value: 'Reduced', label: 'Recurring issues through proper root cause tracking', tier: 'neutral' },
      { value: 'Single', label: 'Source of truth replacing scattered spreadsheets and emails', tier: 'neutral' },
      { value: 'Automated', label: 'Escalation and notification for overdue actions', tier: 'neutral' },
    ],
    crossSellIds: ['sqdcp-hub', 'safety-manager', 'quality-manager'],
    aiFeatures: [
      { title: 'AI Priority Scoring', description: 'Machine learning scores and prioritises actions based on impact, urgency, and historical closure patterns.' },
      { title: 'Smart Escalation', description: 'AI monitors action ageing and predicts which items are at risk of missing deadlines, triggering proactive escalation.' },
    ],
  },
  'quality-manager': {
    id: 'quality-manager',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-quality-CPaphZDUvQrJ9oQdRQZPJM.webp',
    problem: 'Quality issues are managed in disconnected systems \u2014 non-conformances in one tool, CAPAs in another, audits in spreadsheets. This fragmentation means patterns are missed, corrective actions are not linked to root causes, and audit preparation consumes days of effort.',
    howItWorks: [
      { step: 1, title: 'Capture Non-Conformances', description: 'Log non-conformances from any source with full traceability. Attach photos, documents, and related records.' },
      { step: 2, title: 'Investigate Root Causes', description: 'Structured root cause analysis tools including 5-Why, Ishikawa, and 8D. Link findings to corrective actions.' },
      { step: 3, title: 'Manage CAPAs', description: 'Corrective and preventive action workflows with verification steps. Track effectiveness over time.' },
      { step: 4, title: 'Audit and Report', description: 'Schedule and execute audits. Track findings, generate reports, and monitor quality KPIs in real time.' },
    ],
    results: [
      { value: 'Streamlined', label: 'Non-conformance to CAPA workflow in a single platform', tier: 'neutral' },
      { value: 'Faster', label: 'Audit preparation through centralised documentation', tier: 'neutral' },
      { value: 'Improved', label: 'Pattern detection across quality events', tier: 'neutral' },
      { value: 'Traceable', label: 'End-to-end quality records for regulatory compliance', tier: 'neutral' },
    ],
    crossSellIds: ['certification-manager', 'action-manager', 'sqdcp-hub'],
    aiFeatures: [
      { title: 'AI Defect Pattern Recognition', description: 'Machine learning identifies recurring defect patterns across products, lines, and suppliers to prevent repeat non-conformances.' },
      { title: 'Smart CAPA Recommendations', description: 'AI suggests corrective actions based on historical effectiveness data and similar past incidents.' },
    ],
  },
  'safety-manager': {
    id: 'safety-manager',
    heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-safety-6GF7P32Rwd5xBFHfEtSxvq.webp',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-safety-ZCTNQ8eJJmtZgD4CEtSFVD.webp',
    problem: 'Safety incidents are under-reported because reporting is cumbersome. Paper forms, complex systems, and fear of blame create barriers. Without easy reporting and data-driven insights, organisations react to incidents instead of preventing them.',
    howItWorks: [
      { step: 1, title: 'Report Incidents Easily', description: 'Mobile-first incident reporting. Capture details, photos, and witness statements in minutes from any device.' },
      { step: 2, title: 'Track Hazards', description: 'Identify, assess, and control hazards systematically. Risk matrices and control hierarchies built in.' },
      { step: 3, title: 'Encourage Observations', description: 'Behavioural safety observation programme. Track positive and at-risk behaviours to build a proactive culture.' },
      { step: 4, title: 'Analyse and Prevent', description: 'AI-powered risk prediction identifies high-risk areas. Compliance dashboards ensure regulatory requirements are met.' },
    ],
    results: [
      { value: 'Increased', label: 'Incident and near-miss reporting through simplified capture', tier: 'neutral' },
      { value: 'Proactive', label: 'Safety culture driven by observations and leading indicators', tier: 'neutral' },
      { value: 'Improved', label: 'Regulatory compliance through centralised tracking', tier: 'neutral' },
      { value: 'Data-driven', label: 'Risk identification replacing reactive incident management', tier: 'neutral' },
    ],
    crossSellIds: ['action-manager', 'sqdcp-hub', 'certification-manager'],
    aiFeatures: [
      { title: 'AI Risk Prediction', description: 'Predictive models analyse incident history, near-miss data, and environmental factors to forecast high-risk areas and times.' },
      { title: 'Smart Observation Analysis', description: 'Natural language processing categorises safety observations and extracts actionable insights from free-text reports.' },
    ],
  },
  'certification-manager': {
    id: 'certification-manager',
    demoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-cert-cm2edFr6JvgfmkowUoXgtL.webp',
    problem: 'Certification audits create panic because documentation is scattered, version control is manual, and compliance gaps are discovered too late. Organisations spend weeks preparing for audits that should be routine, and findings from previous audits are not systematically tracked.',
    howItWorks: [
      { step: 1, title: 'Map Your Standards', description: 'Import ISO, IATF, or other standard requirements. Map your existing processes and documents to each clause.' },
      { step: 2, title: 'Control Documents', description: 'Version-controlled document management with approval workflows. Every change tracked with full audit trail.' },
      { step: 3, title: 'Monitor Compliance', description: 'Real-time compliance dashboard shows status against every clause. AI identifies gaps before auditors do.' },
      { step: 4, title: 'Manage Audits', description: 'Schedule internal and external audits. Track findings, corrective actions, and evidence in one place.' },
    ],
    results: [
      { value: 'Reduced', label: 'Audit preparation time through always-ready documentation', tier: 'neutral' },
      { value: 'Improved', label: 'First-time audit pass rates through proactive gap analysis', tier: 'neutral' },
      { value: 'Complete', label: 'Audit trail for every document, process, and decision', tier: 'neutral' },
      { value: 'Centralised', label: 'Multi-standard management in a single platform', tier: 'neutral' },
    ],
    crossSellIds: ['quality-manager', 'safety-manager', 'action-manager'],
    aiFeatures: [
      { title: 'AI Compliance Gap Analysis', description: 'Automatically scans your documentation and processes against standard requirements to identify gaps before auditors do.' },
      { title: 'Smart Document Classification', description: 'AI categorises and tags documents by standard, clause, and revision status for instant retrieval during audits.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Merge shared catalog with marketing extensions
// ---------------------------------------------------------------------------
export const services: ServiceConfig[] = SERVICE_CATALOG.map((svc) => {
  const ext = MARKETING_EXTENSIONS[svc.slug];
  if (!ext) {
    // Fallback for any new shared catalog entries without marketing extensions yet
    return {
      id: svc.slug,
      name: svc.name,
      tagline: svc.tagline,
      description: svc.description,
      status: svc.status === 'coming-soon' ? 'in-development' : svc.status,
      slug: svc.slug,
      icon: svc.icon,
      accentColor: svc.accentColor,
      category: svc.category,
      subdomain: svc.subdomain ?? undefined,
      problem: '',
      howItWorks: [],
      results: [],
      crossSellIds: [],
      aiFeatures: [],
    };
  }

  return {
    id: ext.id,
    name: svc.name,
    tagline: svc.tagline,
    description: ext.descriptionOverride ?? svc.description,
    status: svc.status === 'coming-soon' ? 'in-development' : svc.status,
    slug: svc.slug,
    icon: svc.icon,
    accentColor: svc.accentColor,
    category: svc.category,
    subdomain: svc.subdomain ?? undefined,
    heroImage: ext.heroImage,
    demoImage: ext.demoImage,
    problem: ext.problem,
    howItWorks: ext.howItWorks,
    results: ext.results,
    crossSellIds: ext.crossSellIds,
    aiFeatures: ext.aiFeatures,
  };
});

// Derived lists
export const coreServices = services.filter(s => s.category === 'core');
export const hubServices = services.filter(s => s.category === 'hub');
export const liveServices = services.filter(s => s.status === 'live');
export const inDevServices = services.filter(s => s.status === 'in-development');

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceStatusLabel(status: ServiceStatus): string {
  return status === 'live' ? 'Live' : 'In Development';
}

export function getServiceStatusColor(status: ServiceStatus): string {
  return status === 'live' ? '#22C55E' : '#8C34E9';
}

export function getCrossSellServices(service: ServiceConfig): ServiceConfig[] {
  return service.crossSellIds
    .map(id => services.find(s => s.id === id))
    .filter((s): s is ServiceConfig => s !== undefined);
}

export function getClaimTierLabel(tier: ClaimTier): string {
  switch (tier) {
    case 'verified': return 'Verified';
    case 'research-backed': return 'Research-Backed';
    case 'neutral': return '';
  }
}
