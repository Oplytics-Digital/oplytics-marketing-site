/**
 * Dedicated persona landing page — Operational Excellence Leader
 * Route: /for/ops-ci
 * Ad-landable, standalone from any single product module (unlike the old
 * Connect-scoped role pages this replaces). Own hero, own proof points.
 * AI-led messaging: Opi Insights, the AI Facilitator in the Obeya Room, and
 * governed AI (kill switches, plan-tier gating, spend budgets).
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
      "In the Obeya Room, Opi drafts a line at each moment of the huddle — stage hand-offs, a read on every red pillar, an accountability prompt for each overdue action. It standardises how every tier meeting runs, so a first-week supervisor facilitates as sharply as a ten-year veteran.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Root Cause, One Step at a Time",
    description:
      "During the huddle Opi drafts the next single step of a 5-Why for you to edit, and summarises similar past issues pulled from your own action history — so the analysis starts from what you already know.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: "Opi Insights, in the Sidebar of Every Service",
    description:
      "Open the panel on your Policy Deployment, SQDCP or Action Manager screen and a real language model hands back a scored, prioritised findings list — the specific gap and the next move on each.",
  },
  {
    icon: <Radar className="w-5 h-5" />,
    title: "Opi Names Where Performance Is Slipping",
    description:
      "On the SQDCP board, Opi flags the reds without an action, the metrics heading to red, and the stale data — the things a busy shift would walk past.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Actions Routed by Your Reporting Line",
    description:
      "A red metric raises an action automatically and routes it to the right owner through your org structure — manager chain, then pillar leader, then enterprise admin. Deterministic, auditable, no guesswork.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "AI Under Real Governance",
    description:
      "AI is off outside production by default, has platform and per-enterprise kill switches that need no deploy, is gated to your plan tier, and every call is metered against a spend budget that cuts off automatically.",
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
      "Your daily huddle runs in the immersive Obeya Room — a readiness gate, a board walk with PDCA on every red, a close-out that carries forward. Turn the AI Facilitator on and Opi drafts the prompts as you go.",
  },
];

export default function OpsCI() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Oplytics for Operational Excellence Leaders — Meet Opi"
        description="Opi is Oplytics' AI CI Engineer — it reads your live data for the findings you'd miss, runs your daily huddle in the Obeya Room, and answers questions in the sidebar of every service. Under real governance: kill switches, plan-tier gating, and spend budgets that cut off automatically."
      />

      <HeroSection
        headline="Recruit Opi, Your Always-Available CI Employee"
        subheadline="For Operational Excellence Leaders"
        subtext="Opi is Oplytics' AI CI Engineer. It reads a live snapshot of your Policy Deployment, SQDCP and Action Manager data for the findings a busy operator would miss, and drafts the facilitation for your daily huddle in the Obeya Room. Opi drafts and surfaces — your team makes every decision."
        status="live"
        customCtas={[
          { label: "Try It Free", href: "/contact", variant: "primary" },
          { label: "See the Obeya Room", href: "/obeya", variant: "secondary" },
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

      {/* AI governance — the question IT and procurement ask */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-10">
            <span className="section-label text-[#22C55E] mb-3 block">
              Governed AI
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              You Can Answer “What Is the AI Doing?”
            </h2>
            <p className="text-base sm:text-lg text-[#A0A8B8] leading-relaxed max-w-2xl mx-auto">
              Every AI call in the platform runs through one gate. When your IT
              or procurement team asks, you have a straight answer — and a
              switch you can flip yourself.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Off by Default
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                Live, billed AI calls only run in production. Every other
                environment has to opt in explicitly.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Your Kill Switch
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                A per-enterprise switch turns all AI off from an admin screen,
                with no deploy and no downtime. Nothing runs until a user opens
                the panel.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] text-center">
              <div
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Metered to a Budget
              </div>
              <p className="text-sm text-[#8890A0] leading-relaxed">
                Every call is recorded with its token count and estimated cost,
                against a spend budget that cuts off automatically.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/ai"
              data-umami-event="cta_click"
              data-umami-event-button="how_the_ai_works"
              data-umami-event-location="for_ops_ci_governance"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
            >
              How the AI works, end to end
              <ArrowRight className="w-4 h-4" />
            </Link>
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
