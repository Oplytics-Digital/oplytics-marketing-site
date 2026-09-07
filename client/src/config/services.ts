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
} from "@pablo2410/shared-ui/services";

// Re-export shared types for backward compatibility
export type ServiceStatus = SharedServiceStatus | "in-development";
export type { ServiceCategory };
export type ClaimTier = "verified" | "research-backed" | "neutral";

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

export interface DemoScreenshot {
  src: string;
  caption: string;
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
  demoScreenshots: DemoScreenshot[];
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
  /** Real product screenshots shown in the "See It In Action" carousel */
  demoScreenshots?: DemoScreenshot[];
  problem: string;
  howItWorks: HowItWorksStep[];
  results: ResultMetric[];
  crossSellIds: string[];
  aiFeatures: AIFeature[];
}

const MARKETING_EXTENSIONS: Record<string, MarketingExtension> = {
  "policy-deployment": {
    id: "policy-deployment",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-policy-YkQnvYo8xjtKQmKoSKVDXW.webp",
    demoScreenshots: [
      {
        src: "/screenshots/policy-deployment/02.png",
        caption:
          "X-Matrix — Hoshin Kanri correlations between tactics, projects, and objectives",
      },
      {
        src: "/screenshots/policy-deployment/01.png",
        caption:
          "Strategic Plan dashboard with Opi Insights — cascade strength scored live at 92",
      },
      {
        src: "/screenshots/policy-deployment/03.png",
        caption:
          "Catchball — goal cascade from breakthrough objectives to KPIs, with named owners",
      },
    ],
    problem:
      "Strategic plans fail when they stay in the boardroom. Without a structured deployment process, objectives get lost in translation between management layers. Teams work hard on the wrong things, KPIs disconnect from strategy, and annual plans become shelf-ware within weeks.",
    howItWorks: [
      {
        step: 1,
        title: "Define Strategic Objectives",
        description:
          "Set your 3-5 year breakthrough objectives and annual priorities using the Hoshin Kanri methodology.",
      },
      {
        step: 2,
        title: "Build the X-Matrix",
        description:
          "Link strategies to tactics, metrics, and owners in a visual X-matrix. See the full picture at a glance.",
      },
      {
        step: 3,
        title: "Cascade Through Catchball",
        description:
          "Deploy objectives through every level via the catchball process. Align top-down goals with bottom-up feedback.",
      },
      {
        step: 4,
        title: "Review and Adjust",
        description:
          "Structured monthly and quarterly reviews against every deployment target. Course-correct before targets slip, with Opi scoring the cascade live.",
      },
    ],
    results: [
      {
        value: "Improved",
        label: "Strategic alignment across all organisational levels",
        tier: "neutral",
      },
      {
        value: "Faster",
        label: "Objective deployment from boardroom to manufacturing floor",
        tier: "neutral",
      },
      {
        value: "40%",
        label: "Reduction in strategy-execution gap (industry research)",
        tier: "research-backed",
        source: "Hoshin Kanri effectiveness studies, Lean Enterprise Institute",
      },
      {
        value: "Measurable",
        label: "Progress tracking with automated bowling charts",
        tier: "neutral",
      },
    ],
    crossSellIds: ["sqdcp-hub", "action-manager", "oee-manager"],
    aiFeatures: [
      {
        title: "Opi Insights — Live Cascade Scoring",
        description:
          "Opi reads your whole strategic cascade and scores its strength out of 100 — which pillars are anchored, how many metrics are actually wired to a deployment target, whether data is coming back from sites. It names the specific gaps and the next move, in plain English.",
      },
      {
        title: "Ask Opi",
        description:
          "Follow up on any finding with a grounded chat — Opi answers from your live plan data, not generic advice.",
      },
    ],
  },
  sqdcp: {
    id: "sqdcp-hub",
    // The SolutionPage demo slot renders the interactive ObeyaWalkthrough
    // (registered in demos/index.ts). These feed the Home service-card hover
    // preview only. TODO: reshoot on the current Obeya UI (they predate #762)
    // and repoint at /screenshots/obeya/ — see SCREENSHOT-MANIFEST.md.
    demoScreenshots: [
      {
        src: "/screenshots/sqdcp/03.png",
        caption:
          "AI Facilitator — hierarchy-aware rooms, from plant review down to area teams",
      },
      {
        src: "/screenshots/sqdcp/04.png",
        caption:
          "Huddle room — check in, see every pillar's status, start the huddle",
      },
      {
        src: "/screenshots/sqdcp/06.png",
        caption:
          "Pillar review — Opi calls it live: “Green streak now 4 days — the longest run in this window”",
      },
    ],
    problem:
      "Physical whiteboards are static, illegible from a distance, and impossible to aggregate across sites. Tier meetings rely on outdated data, actions get lost on sticky notes, and management has no visibility into daily performance without walking the floor.",
    howItWorks: [
      {
        step: 1,
        title: "Configure Your Boards",
        description:
          "Set up digital SQDCP boards for each team, cell, or value stream. Define metrics, targets, and escalation rules.",
      },
      {
        step: 2,
        title: "Capture Daily Data",
        description:
          "Teams update their boards at the start of each shift. Data flows in from connected systems automatically.",
      },
      {
        step: 3,
        title: "Run the Huddle in the Obeya Room",
        description:
          "Every tier runs its daily huddle in the immersive Obeya Room — a readiness gate, a board walk, PDCA on every red, and a close-out. Turn on the AI Facilitator and Opi drafts the prompts as you go.",
      },
      {
        step: 4,
        title: "Aggregate and Analyse",
        description:
          "Roll up data across teams, sites, and regions. Opi Insights watches the whole board and names where performance is slipping.",
      },
    ],
    results: [
      {
        value: "Faster",
        label: "Tier meeting preparation with pre-populated boards",
        tier: "neutral",
      },
      {
        value: "Better",
        label: "Cross-site visibility without physical presence",
        tier: "neutral",
      },
      {
        value: "25%",
        label: "Reduction in meeting duration (industry benchmarks)",
        tier: "research-backed",
        source: "Digital lean management studies, McKinsey Operations Practice",
      },
      {
        value: "Real-time",
        label: "Data aggregation replacing manual spreadsheet consolidation",
        tier: "neutral",
      },
    ],
    crossSellIds: ["action-manager", "policy-deployment", "oee-manager"],
    aiFeatures: [
      {
        title: "AI Facilitator",
        description:
          "Turn it on for the huddle and Opi drafts the facilitation as you go — a spoken-style line at each stage hand-off, a read on every red or amber pillar, the next 5-Why step, a summary of similar past issues from your own action history, an accountability prompt for each overdue action, and a close-out recap. Opi drafts; the facilitator edits and confirms.",
      },
      {
        title: "Opi Insights",
        description:
          "A real LLM reads your live board — stale metrics, reds without an action, metrics heading to red, backlog ageing, how much traces to a strategic objective — and hands back a prioritised, scored findings list with the next move on each. Ask Opi follows up, grounded in that data.",
      },
    ],
  },
  "oee-manager": {
    id: "oee-manager",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-oee-Th2ta3q9vx8SDihX3BBphp.webp",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-oee-QnRQ7NMUruu9AHLjseSSx2.webp",
    demoScreenshots: [
      {
        src: "/screenshots/oee-manager/01.png",
        caption:
          "Loss Insights — attackable loss value with Opi Coaching flags on biggest movers",
      },
      {
        src: "/screenshots/oee-manager/02.png",
        caption:
          "League Table — assets ranked by OEE, availability, performance, and quality",
      },
      {
        src: "/screenshots/oee-manager/03.png",
        caption:
          "Classic Analysis dashboard — OEE trend, output, and loss tree breakdown",
      },
    ],
    problem:
      "Most manufacturers have a feel for their productivity losses, but few have the systems to capture the breakdown in real time, categorise it and attack those losses through structured improvement activity. OEE Manager gives your teams exactly that \u2014 live visibility of Availability, Performance and Quality losses, with the context and tools to act on them systematically.",
    howItWorks: [
      {
        step: 1,
        title: "Connect Your Machines",
        description:
          "Link PLCs, sensors, and manual inputs via OplyticsConnect. Data flows automatically with no operator intervention.",
      },
      {
        step: 2,
        title: "Track in Real Time",
        description:
          "Live OEE dashboards show availability, performance, and quality for every machine and line as it happens.",
      },
      {
        step: 3,
        title: "Classify Losses",
        description:
          "Downtime and speed losses are automatically categorised. Pareto analysis reveals your biggest opportunities.",
      },
      {
        step: 4,
        title: "Drive Improvement",
        description:
          "Use trend analysis, shift comparisons, and root cause tools to systematically eliminate losses.",
      },
    ],
    results: [
      {
        value: "5-15%",
        label: "OEE improvement within first 12 months (industry average)",
        tier: "research-backed",
        source: "OEE Foundation, Smart Industry benchmarks",
      },
      {
        value: "Eliminated",
        label: "Manual data collection errors and delays",
        tier: "neutral",
      },
      {
        value: "Immediate",
        label: "Visibility into loss reasons as they occur",
        tier: "neutral",
      },
      {
        value: "Significant",
        label: "Reduction in unplanned downtime through pattern detection",
        tier: "neutral",
      },
    ],
    crossSellIds: ["smartconnect", "sqdcp-hub", "action-manager"],
    aiFeatures: [
      {
        title: "Opi Loss Coaching",
        description:
          "Opi watches your weekly loss picture and flags the biggest movers — where an attackable loss just grew, which asset slipped, what to look at first — so the improvement conversation starts from the right place.",
      },
      {
        title: "Ask Opi",
        description:
          "Ask a plain-English question about a loss trend or a shift comparison and get a grounded answer from your own OEE data.",
      },
    ],
  },
  connect: {
    id: "smartconnect",
    demoScreenshots: [
      {
        src: "/screenshots/connect/01.png",
        caption:
          "Dashboard — real-time overview of active IoT connections and signal health",
      },
      {
        src: "/screenshots/connect/02.png",
        caption:
          "Demo Mode — simulated live machine data streaming from a CNC lathe, conveyor, and injection moulder",
      },
    ],
    descriptionOverride:
      "OplyticsConnect is your platform integration hub. Connect machines, assets, ERP systems, and third-party data sources into a single unified data layer. Whether you're pulling live OEE data from the shop floor or syncing production targets from your ERP, OplyticsConnect manages every data feed in and out of the Oplytics platform. Integrated. Automated. Always live.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-connect-BLrEbXt4nBnvZdECMPpzLm.webp",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-connect-QpzAp7fYGbnsnuiT3dKihD.webp",
    problem:
      "Manufacturing data is trapped in silos \u2014 PLCs speak different protocols, legacy systems have no APIs, and connecting a new machine takes weeks of custom development. Without a unified connectivity layer, digital transformation stalls at the edge.",
    howItWorks: [
      {
        step: 1,
        title: "Discover Devices",
        description:
          "OplyticsConnect scans your network and identifies available PLCs, sensors, and industrial systems automatically.",
      },
      {
        step: 2,
        title: "Map Signals",
        description:
          "Visual drag-and-drop interface maps machine signals to Oplytics data points. No coding required.",
      },
      {
        step: 3,
        title: "Transform Data",
        description:
          "Built-in calculation engine converts raw signals into meaningful metrics \u2014 OEE, cycle times, energy consumption.",
      },
      {
        step: 4,
        title: "Stream to Platform",
        description:
          "Data flows in real time to OEE Manager, SQDCP Dashboard, and other Oplytics services. Edge buffering ensures zero data loss.",
      },
    ],
    results: [
      {
        value: "Faster",
        label: "Machine integration compared to custom development",
        tier: "neutral",
      },
      {
        value: "Zero",
        label: "Code required for standard PLC connections",
        tier: "neutral",
      },
      {
        value: "Unified",
        label: "Data layer across all machines regardless of protocol",
        tier: "neutral",
      },
      {
        value: "Resilient",
        label: "Edge buffering ensures no data loss during connectivity issues",
        tier: "neutral",
      },
    ],
    crossSellIds: ["oee-manager", "sqdcp-hub", "quality-manager"],
    aiFeatures: [],
  },
  "action-manager": {
    id: "action-manager",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-action-3Ctr5Ddy2xCm5tqouxWKrn.webp",
    demoScreenshots: [
      {
        src: "/screenshots/action-manager/01.png",
        caption:
          "Kanban board — To Do, In Progress, Review, and Done, with owners and due dates",
      },
      {
        src: "/screenshots/action-manager/02.png",
        caption:
          "Analytics — status distribution and priority breakdown at a glance",
      },
      {
        src: "/screenshots/action-manager/03.png",
        caption:
          "Integrations — Outlook, Teams, and calendar reminders wired to every action",
      },
    ],
    problem:
      "Actions from audits, incidents, and meetings are scattered across spreadsheets, emails, and sticky notes. Without a single register, items get duplicated, forgotten, or closed without verification. The same problems recur because root causes are never properly addressed.",
    howItWorks: [
      {
        step: 1,
        title: "Capture from Any Source",
        description:
          "Raise actions from audits, incidents, tier meetings, or any Oplytics service. One unified action register.",
      },
      {
        step: 2,
        title: "Assign and Prioritise",
        description:
          "Assign to individuals with clear due dates and priority levels. A reviewer is derived automatically from your reporting line.",
      },
      {
        step: 3,
        title: "Track to Closure",
        description:
          "Visual progress tracking from open through in-progress to verified closure. Automatic escalation for overdue items.",
      },
      {
        step: 4,
        title: "Analyse and Improve",
        description:
          "Completion rates, ageing analysis, and source breakdown dashboards. Measure and improve your action culture.",
      },
    ],
    results: [
      {
        value: "Improved",
        label: "Action completion rates through visibility and escalation",
        tier: "neutral",
      },
      {
        value: "Reduced",
        label: "Recurring issues through proper root cause tracking",
        tier: "neutral",
      },
      {
        value: "Single",
        label: "Source of truth replacing scattered spreadsheets and emails",
        tier: "neutral",
      },
      {
        value: "Automated",
        label: "Escalation and notification for overdue actions",
        tier: "neutral",
      },
    ],
    crossSellIds: ["sqdcp-hub", "safety-manager", "quality-manager"],
    aiFeatures: [
      {
        title: "Opi Insights",
        description:
          "Opi reads your whole action portfolio — backlog ageing, whether closure is keeping up with inflow, where actions concentrate on one owner or category, what's stalled — and hands back a prioritised, scored findings list. Ask Opi follows up from the same data.",
      },
    ],
  },
  "quality-manager": {
    id: "quality-manager",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-quality-CPaphZDUvQrJ9oQdRQZPJM.webp",
    problem:
      "Quality issues are managed in disconnected systems \u2014 non-conformances in one tool, CAPAs in another, audits in spreadsheets. This fragmentation means patterns are missed, corrective actions are not linked to root causes, and audit preparation consumes days of effort.",
    howItWorks: [
      {
        step: 1,
        title: "Capture Non-Conformances",
        description:
          "Log non-conformances from any source with full traceability. Attach photos, documents, and related records.",
      },
      {
        step: 2,
        title: "Investigate Root Causes",
        description:
          "Structured root cause analysis tools including 5-Why, Ishikawa, and 8D. Link findings to corrective actions.",
      },
      {
        step: 3,
        title: "Manage CAPAs",
        description:
          "Corrective and preventive action workflows with verification steps. Track effectiveness over time.",
      },
      {
        step: 4,
        title: "Audit and Report",
        description:
          "Schedule and execute audits. Track findings, generate reports, and monitor quality KPIs in real time.",
      },
    ],
    results: [
      {
        value: "Streamlined",
        label: "Non-conformance to CAPA workflow in a single platform",
        tier: "neutral",
      },
      {
        value: "Faster",
        label: "Audit preparation through centralised documentation",
        tier: "neutral",
      },
      {
        value: "Improved",
        label: "Pattern detection across quality events",
        tier: "neutral",
      },
      {
        value: "Traceable",
        label: "End-to-end quality records for regulatory compliance",
        tier: "neutral",
      },
    ],
    crossSellIds: ["certification-manager", "action-manager", "sqdcp-hub"],
    aiFeatures: [],
  },
  "safety-manager": {
    id: "safety-manager",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-safety-6GF7P32Rwd5xBFHfEtSxvq.webp",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-safety-ZCTNQ8eJJmtZgD4CEtSFVD.webp",
    problem:
      "Safety incidents are under-reported because reporting is cumbersome. Paper forms, complex systems, and fear of blame create barriers. Without easy reporting and data-driven insights, organisations react to incidents instead of preventing them.",
    howItWorks: [
      {
        step: 1,
        title: "Report Incidents Easily",
        description:
          "Mobile-first incident reporting. Capture details, photos, and witness statements in minutes from any device.",
      },
      {
        step: 2,
        title: "Track Hazards",
        description:
          "Identify, assess, and control hazards systematically. Risk matrices and control hierarchies built in.",
      },
      {
        step: 3,
        title: "Encourage Observations",
        description:
          "Behavioural safety observation programme. Track positive and at-risk behaviours to build a proactive culture.",
      },
      {
        step: 4,
        title: "Analyse and Prevent",
        description:
          "Leading-indicator dashboards surface high-risk areas from your observation and near-miss data. Compliance dashboards ensure regulatory requirements are met.",
      },
    ],
    results: [
      {
        value: "Increased",
        label: "Incident and near-miss reporting through simplified capture",
        tier: "neutral",
      },
      {
        value: "Proactive",
        label: "Safety culture driven by observations and leading indicators",
        tier: "neutral",
      },
      {
        value: "Improved",
        label: "Regulatory compliance through centralised tracking",
        tier: "neutral",
      },
      {
        value: "Data-driven",
        label: "Risk identification replacing reactive incident management",
        tier: "neutral",
      },
    ],
    crossSellIds: ["action-manager", "sqdcp-hub", "certification-manager"],
    aiFeatures: [],
  },
  "certification-manager": {
    id: "certification-manager",
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/demo-cert-cm2edFr6JvgfmkowUoXgtL.webp",
    problem:
      "Certification audits create panic because documentation is scattered, version control is manual, and compliance gaps are discovered too late. Organisations spend weeks preparing for audits that should be routine, and findings from previous audits are not systematically tracked.",
    howItWorks: [
      {
        step: 1,
        title: "Map Your Standards",
        description:
          "Import ISO, IATF, or other standard requirements. Map your existing processes and documents to each clause.",
      },
      {
        step: 2,
        title: "Control Documents",
        description:
          "Version-controlled document management with approval workflows. Every change tracked with full audit trail.",
      },
      {
        step: 3,
        title: "Monitor Compliance",
        description:
          "Real-time compliance dashboard shows status against every clause, flagging where evidence is missing before auditors do.",
      },
      {
        step: 4,
        title: "Manage Audits",
        description:
          "Schedule internal and external audits. Track findings, corrective actions, and evidence in one place.",
      },
    ],
    results: [
      {
        value: "Reduced",
        label: "Audit preparation time through always-ready documentation",
        tier: "neutral",
      },
      {
        value: "Improved",
        label: "First-time audit pass rates through proactive gap analysis",
        tier: "neutral",
      },
      {
        value: "Complete",
        label: "Audit trail for every document, process, and decision",
        tier: "neutral",
      },
      {
        value: "Centralised",
        label: "Multi-standard management in a single platform",
        tier: "neutral",
      },
    ],
    crossSellIds: ["quality-manager", "safety-manager", "action-manager"],
    aiFeatures: [],
  },
};

// ---------------------------------------------------------------------------
// Merge shared catalog with marketing extensions
// ---------------------------------------------------------------------------
export const services: ServiceConfig[] = SERVICE_CATALOG.map(svc => {
  const ext = MARKETING_EXTENSIONS[svc.slug];
  if (!ext) {
    // Fallback for any new shared catalog entries without marketing extensions yet
    return {
      id: svc.slug,
      name: svc.name,
      tagline: svc.tagline,
      description: svc.description,
      status: svc.status === "coming-soon" ? "in-development" : svc.status,
      slug: svc.slug,
      icon: svc.icon,
      accentColor: svc.accentColor,
      category: svc.category,
      subdomain: svc.subdomainLabel ?? undefined,
      demoScreenshots: [],
      problem: "",
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
    status: svc.status === "coming-soon" ? "in-development" : svc.status,
    slug: svc.slug,
    icon: svc.icon,
    accentColor: svc.accentColor,
    category: svc.category,
    subdomain: svc.subdomainLabel ?? undefined,
    heroImage: ext.heroImage,
    demoImage: ext.demoImage,
    demoScreenshots: ext.demoScreenshots ?? [],
    problem: ext.problem,
    howItWorks: ext.howItWorks,
    results: ext.results,
    crossSellIds: ext.crossSellIds,
    aiFeatures: ext.aiFeatures,
  };
});

// Derived lists
export const coreServices = services.filter(s => s.category === "core");
export const hubServices = services.filter(s => s.category === "hub");
export const liveServices = services.filter(s => s.status === "live");
export const inDevServices = services.filter(
  s => s.status === "in-development"
);

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceStatusLabel(status: ServiceStatus): string {
  return status === "live" ? "Live" : "In Development";
}

export function getServiceStatusColor(status: ServiceStatus): string {
  return status === "live" ? "#22C55E" : "#8C34E9";
}

export function getCrossSellServices(service: ServiceConfig): ServiceConfig[] {
  return service.crossSellIds
    .map(id => services.find(s => s.id === id))
    .filter((s): s is ServiceConfig => s !== undefined);
}

export function getClaimTierLabel(tier: ClaimTier): string {
  switch (tier) {
    case "verified":
      return "Verified";
    case "research-backed":
      return "Research-Backed";
    case "neutral":
      return "";
  }
}
