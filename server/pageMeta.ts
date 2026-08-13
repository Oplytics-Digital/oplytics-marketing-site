/**
 * Per-route title/description used for server-side HTML meta injection.
 * Mirrors the <SEOHead title=... description=... /> props each page already
 * declares client-side (see client/src/pages/*.tsx) so crawlers, link-preview
 * unfurlers, and any tool that doesn't execute JS see the real per-page
 * content instead of the static index.html fallback.
 *
 * Static routes are listed by exact path. Solution pages are generated from
 * the same catalog @pablo2410/shared-ui/services provides to the client
 * (kept as a plain literal here so the server bundle doesn't have to pull in
 * client-only tooling).
 */

const SITE_NAME = "Oplytics.digital";

export interface PageMeta {
  title: string;
  description: string;
}

function withSiteName(title: string): string {
  return title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
}

const STATIC_PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Oplytics.digital",
    description:
      "Operational excellence platform for manufacturing. Real-time OEE, digital SQDCP boards, safety management, and continuous improvement — all in one place.",
  },
  "/solutions": {
    title: "Oplytics.digital",
    description:
      "Operational excellence platform for manufacturing. Real-time OEE, digital SQDCP boards, safety management, and continuous improvement — all in one place.",
  },
  "/pricing": {
    title: "Pricing",
    description:
      "Flexible pricing plans for Oplytics.digital. Contact us for a tailored quote for your manufacturing operation.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with the Oplytics team. Request a demo, ask a question, or discuss your manufacturing operations requirements.",
  },
  "/why-us": {
    title: "Why Oplytics",
    description:
      "Why manufacturers choose Oplytics.digital. Purpose-built for manufacturing, unified data model, enterprise-grade security, and rapid deployment.",
  },
  "/about": {
    title: "About",
    description:
      "Learn about Oplytics.digital — the operational excellence platform built by manufacturing professionals for manufacturing professionals.",
  },
  "/resources": {
    title: "Resources",
    description:
      "Articles, case studies, guides, and product updates from Oplytics.digital. Learn how manufacturers achieve operational excellence.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "Oplytics.digital privacy policy. How we collect, use, and protect your data in compliance with GDPR and UK data protection regulations.",
  },
  "/terms": {
    title: "Terms of Service",
    description:
      "Oplytics.digital terms of service. Legal terms and conditions governing the use of our operational excellence platform.",
  },
};

// Mirrors @pablo2410/shared-ui SERVICE_CATALOG (name, description) — see
// client/src/config/services.ts for how the client merges these with its
// own marketing extensions.
const SOLUTION_PAGE_META: Record<string, PageMeta> = {
  "policy-deployment": {
    title: "Policy Deployment",
    description:
      "Hoshin Kanri and X-matrix planning. Cascade strategic objectives through every level of your organisation with live tracking and bowling charts.",
  },
  sqdcp: {
    title: "SQDCP Dashboard",
    description:
      "Digital SQDCP boards that drive daily accountability. Safety, Quality, Delivery, Cost, and People metrics at a glance for every team.",
  },
  "oee-manager": {
    title: "OEE Manager",
    description:
      "Monitor Overall Equipment Effectiveness in real-time. Track availability, performance, and quality metrics across your entire production line.",
  },
  "action-manager": {
    title: "Action Manager",
    description:
      "Capture, assign, and track corrective and preventive actions from any source. Ensure nothing falls through the cracks.",
  },
  connect: {
    title: "OplyticsConnect",
    description:
      "Industrial IoT connectivity layer. Connect PLCs, sensors, and legacy systems to the Oplytics platform with zero-code configuration.",
  },
  "safety-manager": {
    title: "Safety Manager",
    description:
      "Incident reporting, hazard tracking, safety observations, and compliance management in one unified platform.",
  },
  "quality-manager": {
    title: "Quality Manager",
    description:
      "Non-conformance tracking, CAPA management, audit scheduling, and quality metrics dashboards.",
  },
  "certification-manager": {
    title: "Certification Manager",
    description:
      "Manage ISO, IATF, and other certification requirements. Document control, audit trails, and compliance tracking.",
  },
};

// Dedicated, ad-landable persona pages — see client/src/pages/for/*.tsx.
// One page per priority buyer (OpEx/CI, IT, Finance), each with its own URL
// so it can be linked directly from a targeted ad or email, independent of
// any single product module.
const PERSONA_PAGE_META: Record<string, PageMeta> = {
  "ops-ci": {
    title: "Oplytics for Operational Excellence Leaders — Meet Opi",
    description:
      "Opi is Oplytics' AI teammate — live 24/7, taught on every Lean and Six Sigma playbook, in the room for every huddle. Faster root cause, guided facilitation, every action priced in $, and an ISO-aligned playbook that's audit-ready by default.",
  },
};

const DEFAULT_META: PageMeta = STATIC_PAGE_META["/"];

/** Resolves the best-match title/description for a given request path. */
export function resolvePageMeta(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  if (STATIC_PAGE_META[path]) {
    return STATIC_PAGE_META[path];
  }

  const personaMatch = path.match(/^\/for\/([^/]+)$/);
  if (personaMatch) {
    const meta = PERSONA_PAGE_META[personaMatch[1]];
    if (meta) return meta;
  }

  const solutionMatch = path.match(/^\/solutions\/([^/]+)$/);
  if (solutionMatch) {
    const meta = SOLUTION_PAGE_META[solutionMatch[1]];
    if (meta) return meta;
  }

  return DEFAULT_META;
}

/** Injects a resolved <title> and meta description into a raw HTML document. */
export function injectPageMeta(html: string, pathname: string): string {
  const meta = resolvePageMeta(pathname);
  const fullTitle = withSiteName(meta.title);
  const escapedDescription = meta.description.replace(/"/g, "&quot;");

  return html
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapedDescription}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${fullTitle}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escapedDescription}" />`
    );
}
