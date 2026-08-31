/**
 * Dedicated persona landing page — Operational Excellence Leader
 * Route: /for/ops-ci
 * Ad-landable, standalone from any single product module (unlike the old
 * Connect-scoped role pages this replaces). Own hero, own proof points.
 * AI-led messaging: root-cause speed, guided facilitation, $ impact,
 * ISO-aligned compliance automation.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import HeroSection from "@/components/shared/HeroSection";
import FeatureGrid from "@/components/shared/FeatureGrid";
import SEOHead from "@/components/shared/SEOHead";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import SystemFlowDiagram from "@/components/shared/SystemFlowDiagram";
import OpiTeamCard from "@/components/shared/OpiTeamCard";
import { sizePresets, calculateROI } from "@/lib/roiCalculator";
import { Link } from "wouter";
import {
  ArrowRight,
  Target,
  Layers,
  GitBranch,
  CheckCircle2,
  ClipboardList,
  Sparkles,
  Users,
  ShieldCheck,
  Gauge,
  Zap,
  LayoutGrid,
  Radar,
} from "lucide-react";

const roiResults = calculateROI({ size: "medium", ...sizePresets.medium });

const painPoints = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Operational Excellence runs on spreadsheets and memory",
    description:
      "Actions from tier meetings live in someone's notebook. Hoshin plans get reviewed once a quarter and forgotten in between. Nothing connects to anything else.",
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "Strategy stays in the boardroom",
    description:
      "Objectives get set at the top and lost in translation by the time they reach the floor. Teams work hard on the wrong things because the cascade breaks down.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "No one can prove the $ impact",
    description:
      "You know the improvement programme is working. You can't easily show finance which action, on which line, produced which saving — so the programme competes for budget every year.",
  },
];

const aiFeatures = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "AI Facilitation — Enhance, Not Replace",
    description:
      "Opi structures the noise, focuses the attention, and supports the analysis — standardising how every tier meeting runs, so a first-week supervisor can facilitate as sharply as a ten-year veteran.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Effective Root Cause, Strong Bias for Action",
    description:
      "Opi coaches and drives effective root cause analysis — it scores the analysis and suggests improvements to the actions, so you get to fixes, and the future state, faster.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: "Opi Insights, Everywhere You Work",
    description:
      "Always-on suggestions in the sidebar of every service, driving the improvement process faster — never a dashboard you have to go hunting through separately.",
  },
  {
    icon: <Radar className="w-5 h-5" />,
    title: "Opi Watches the Whole Suite for Gaps",
    description:
      "Across Plant Management and the shop floor, Opi spots where performance is slipping and tells you exactly where to focus resource and attention next.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Every Action Priced in $, Not Just Ranked",
    description:
      "AI scores and prioritises the action backlog by real impact and urgency — so the improvement programme has a number finance can put in a budget line, not just a status.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "ISO-Aligned Playbook, Audit-Ready by Default",
    description:
      "Certification Manager maps your processes to ISO and IATF clauses automatically, tracks compliance in real time, and lets you walk a regulator through the evidence without weeks of prep.",
  },
];

const whatYouGet = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "One Connected Platform",
    description:
      "Policy Deployment, SQDCP Dashboards, OEE tracking, and Action Manager all share one data model. An action raised in a huddle links back to the Hoshin objective it serves.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Every Action Traceable to Closure",
    description:
      "No action lives outside the platform. Raise it from an audit, a tier meeting, or an OEE loss — it gets an owner, a due date, and tracks through to verified closure.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Opi Runs the Huddle With You",
    description:
      "Guided digital tier meeting facilitation that structures the discussion and tracks who owns what by when — so tier meetings run on data, not on who remembered to update the board.",
  },
];

export default function OpsCI() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Oplytics for Operational Excellence Leaders — Meet Opi"
        description="Opi is Oplytics' AI CI Engineer — live 24/7, taught on every Lean and Six Sigma playbook, in the room for every huddle and in the sidebar of every service. Faster root cause, guided facilitation, every action priced in $, and an ISO-aligned playbook that's audit-ready by default."
      />

      <HeroSection
        headline="Recruit Opi, Your Always-Available CI Employee"
        subheadline="For Operational Excellence Leaders"
        subtext="Opi is Oplytics' AI CI Engineer — live, taught on every Lean and Six Sigma playbook there is, in the room for every huddle and in the sidebar of every service. Opi helps your team get to root cause faster, provides guided digital tier meeting facilitation, and turns every improvement into a number finance believes in."
        status="live"
        customCtas={[
          { label: "Try It Free", href: "/contact", variant: "primary" },
          { label: "See the Platform", href: "/why-us", variant: "secondary" },
        ]}
      />

      {/* Opi — the AI teammate, sold up front */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <OpiTeamCard />
      </section>

      {/* Pain points */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12">
            <span className="section-label text-[#EF4444] mb-3 block">
              The Problem
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              You Know Operational Excellence Works. Proving It Is the Hard
              Part.
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220]"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4 bg-[#EF4444]/10 text-[#EF4444]">
                  {p.icon}
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-led feature grid — the primary sell */}
      <FeatureGrid
        items={aiFeatures}
        columns={3}
        sectionLabel="Driven by AI"
        sectionTitle="AI Isn't a Feature Here — It's How the Platform Works"
      />

      {/* What you get */}
      <FeatureGrid
        items={whatYouGet}
        columns={3}
        sectionLabel="Built for Operational Excellence"
        sectionTitle="One Platform, Not Another Tool to Maintain"
      />

      {/* Traceability mechanism — the actual differentiator */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40"
        style={{
          background: "linear-gradient(180deg, #080C16 0%, #0D1220 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <span className="section-label text-[#1DB8CE] mb-4 block">
              How It Connects
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-10"
              style={{ fontFamily: "Montserrat" }}
            >
              One Cascade, From Strategy to the Shop Floor
            </h2>
          </AnimateOnScroll>
          <SystemFlowDiagram />
        </div>
      </section>

      {/* ISO / compliance */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-10">
            <span className="section-label text-[#F97316] mb-3 block">
              Audit-Ready by Default
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              An ISO-Aligned Playbook, Not a Panic Every Audit Season
            </h2>
            <p className="text-base sm:text-lg text-[#A0A8B8] leading-relaxed max-w-2xl mx-auto">
              Certification Manager maps your existing processes to ISO and IATF
              clauses, keeps a live compliance dashboard against every
              requirement, and gives you the evidence trail to walk a regulator
              through your infrastructure — instead of losing weeks to audit
              prep every time.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Map Your Standards
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                Import ISO, IATF, or other standard requirements and map them to
                your existing processes and documents, clause by clause.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                AI Gap Analysis
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                AI scans your documentation and processes against every clause
                and flags gaps before an auditor finds them.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Walk the Auditor Through It
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                Every finding, corrective action, and piece of evidence in one
                place — regulators see a live system, not a scramble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI teaser */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll variant="scale-in">
            <span className="section-label text-[#22C55E] mb-4 block">
              The $ Impact
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Make the Business Case in One Number
            </h2>
            <p className="text-sm sm:text-base text-[#8890A0] mb-8">
              A mid-sized manufacturer ({sizePresets.medium.headcount}{" "}
              employees, {sizePresets.medium.lines} lines,{" "}
              {sizePresets.medium.sites} sites) has an estimated annual benefit
              of:
            </p>
            <div
              className="text-5xl sm:text-6xl font-black text-[#22C55E] mb-3"
              style={{ fontFamily: "Montserrat" }}
            >
              £{roiResults.totalAnnualBenefit.toLocaleString()}
            </div>
            <p className="text-xs text-[#596475] max-w-lg mx-auto mb-8">
              Based on conservative industry benchmarks — actual results vary by
              operation. Get a personalised estimate for your sites and lines.
            </p>
            <Link
              href="/pricing"
              data-umami-event="cta_click"
              data-umami-event-button="calculate_your_savings"
              data-umami-event-location="for_ops_ci_roi"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
              style={{
                background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
              }}
            >
              Calculate Your Savings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2738]/40"
        style={{ background: "#080C16" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            See It Running on Your Own Data
          </h2>
          <p className="text-[#8890A0] mb-8">
            Try it free and walk through Policy Deployment, SQDCP, and Action
            Manager connected the way your Operational Excellence programme
            needs them to be.
          </p>
          <Link
            href="/contact"
            data-umami-event="cta_click"
            data-umami-event-button="try_it_free"
            data-umami-event-location="for_ops_ci_bottom"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
            style={{
              background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
            }}
          >
            Try It Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </MarketingLayout>
  );
}
