/**
 * /ai — the AI platform landing page.
 *
 * The honest AI story: Opi is one AI CI Engineer that shows up in three places —
 * Opi Insights (reads your live data for the findings you'd miss), the AI
 * Facilitator (runs your daily huddle in the Obeya Room), and Ask Opi in the
 * sidebar of every service — all under real enterprise governance.
 *
 * Every claim on this page maps to a shipped surface. No predictive-ML claims.
 */
import MarketingLayout from "@/components/shared/MarketingLayout";
import HeroSection from "@/components/shared/HeroSection";
import SEOHead from "@/components/shared/SEOHead";
import ProductShot from "@/components/shared/ProductShot";
import AnimateOnScroll, {
  StaggerContainer,
} from "@/components/shared/AnimateOnScroll";
import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  MessagesSquare,
  ListChecks,
  ShieldCheck,
  Gauge,
  Power,
  Building2,
  FlaskConical,
} from "lucide-react";

const insightExamples = [
  {
    service: "Policy Deployment",
    finding:
      "“Cost pillar has no anchored breakthrough objective — 3 of 5 pillars are carrying the plan. Anchor a Cost objective before the next review.”",
  },
  {
    service: "SQDCP board",
    finding:
      "“Delivery has been red for 4 days with no open action. Raise one and name an owner — this is the governance rule the board is built on.”",
  },
  {
    service: "Action Manager",
    finding:
      "“Closure rate is running behind inflow 2 weeks straight and 60% of open actions sit with one owner. The backlog is concentrating.”",
  },
];

const facilitatorMoments = [
  "A spoken-style hand-off at each stage of the agenda",
  "A read on every red or amber pillar, naming the metric that's driving it",
  "The next single step of a 5-Why, for you to edit",
  "A summary of similar past issues, pulled from your own action history",
  "An accountability prompt for each overdue action",
  "A close-out recap — win of the day, the issues, tomorrow's priorities",
];

const governance = [
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Off outside production by default",
    desc: "Live, billed AI calls only run in production. Every other environment has to opt in explicitly.",
  },
  {
    icon: <Power className="w-5 h-5" />,
    title: "Kill switches, no deploy",
    desc: "A platform-wide switch and a per-enterprise switch both take effect immediately from an admin screen — no release, no downtime.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Gated to your plan",
    desc: "AI is a Professional and Enterprise entitlement. Below that tier, the panels explain what's included rather than calling the model.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Metered against a budget",
    desc: "Every call is recorded with its token count and estimated cost, broken down by app, surface and enterprise, against spend budgets that cut off automatically.",
  },
];

export default function AiPlatform() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Platform AI — Meet Opi"
        description="Opi is Oplytics' AI CI Engineer. It reads your live Policy Deployment, SQDCP and Action Manager data for the findings you'd miss, runs your daily huddle in the Obeya Room, and answers questions in the sidebar of every service — all under real enterprise governance: kill switches, plan-tier gating, and spend budgets that cut off automatically."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Opi — Oplytics AI CI Engineer",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "AI oversight, huddle facilitation and grounded Q&A across the Oplytics operational excellence platform.",
        }}
      />

      <HeroSection
        headline="Meet Opi, Your AI CI Engineer"
        subheadline="One AI. Three Places It Shows Up."
        subtext="Opi reads your live data for the findings a busy operator would miss, runs your daily huddle in the Obeya Room, and answers questions in the sidebar of every service. Opi drafts and surfaces — your team makes every decision."
        status="live"
        customCtas={[
          { label: "Book a Demo", href: "/contact", variant: "primary" },
          { label: "See the Obeya Room", href: "/obeya", variant: "secondary" },
        ]}
      />

      {/* Three surfaces */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="What Opi does"
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12">
            <span className="section-label text-[#1DB8CE] mb-3 block">
              What Opi Does
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              Not a Chatbot Bolted On. A CI Engineer on Shift.
            </h2>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variant="slide-up"
            staggerDelay={0.1}
          >
            {[
              {
                icon: <ListChecks className="w-5 h-5" />,
                title: "Opi Insights",
                desc: "Reads a structured snapshot of your Policy Deployment, SQDCP or Action Manager screen and hands back a prioritised, scored findings list — the specific gap and the next move on each.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "AI Facilitator",
                desc: "Turn it on for the huddle in the Obeya Room and Opi drafts the facilitation as you go — stage by stage, pillar by pillar. You edit and confirm.",
              },
              {
                icon: <MessagesSquare className="w-5 h-5" />,
                title: "Ask Opi",
                desc: "A grounded follow-up chat in the sidebar of every service — answers come from your live data, not generic advice.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#1DB8CE]/15 bg-[#0D1220]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1DB8CE]/10 flex items-center justify-center mb-4 text-[#1DB8CE]">
                  {s.icon}
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Opi Insights — deep dive with screenshot */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40"
        style={{
          background: "linear-gradient(180deg, #080C16 0%, #0D1220 100%)",
        }}
        role="region"
        aria-label="Opi Insights"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimateOnScroll variant="slide-right">
            <span className="section-label text-[#1DB8CE] mb-3 block">
              Opi Insights
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              A Real Language Model, Reading Your Real Data
            </h2>
            <p className="text-sm sm:text-base text-[#A0A8B8] leading-relaxed mb-5">
              When you open the panel, Opi is handed a structured snapshot of
              that screen — stale metrics, reds without an action, metrics
              heading to red, backlog ageing, how much traces to a strategic
              objective. It returns a headline, a score out of 100, and a ranked
              list of findings, each tagged good, watch or gap, each with a
              concrete next step. Nothing runs until you open the panel — no
              data leaves until you ask for the analysis.
            </p>
            <ul className="space-y-2">
              {insightExamples.map((ex, i) => (
                <li
                  key={i}
                  className="text-sm text-[#8890A0] border-l-2 border-[#1DB8CE]/30 pl-3"
                >
                  <span className="text-[#C7CCD6] font-medium">
                    {ex.service}:{" "}
                  </span>
                  {ex.finding}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-left">
            <ProductShot
              src="/screenshots/ai/opi-insights-pd.png"
              alt="Opi Insights sidebar on Policy Deployment — a scored findings list with execution-gap score"
              label="Opi Insights — Policy Deployment"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* AI Facilitator + Obeya link */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="AI Facilitator"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimateOnScroll variant="slide-right" className="lg:order-2">
            <span className="section-label text-[#8C34E9] mb-3 block">
              AI Facilitator
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Opi Runs the Huddle With You
            </h2>
            <p className="text-sm sm:text-base text-[#A0A8B8] leading-relaxed mb-5">
              In the Obeya Room, turn the AI Facilitator on and Opi drafts a
              line at each moment of the meeting — so a first-week supervisor
              facilitates as sharply as a ten-year veteran. It drafts; the
              facilitator edits and confirms. Everything else — the running
              order, the RAG status, which action gets raised, who it escalates
              to — is deterministic rules, not the model.
            </p>
            <ul className="space-y-2 mb-6">
              {facilitatorMoments.map((m, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#8890A0]"
                >
                  <Sparkles className="w-4 h-4 text-[#8C34E9] mt-0.5 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
            <Link
              href="/obeya"
              data-umami-event="cta_click"
              data-umami-event-button="see_the_obeya_room"
              data-umami-event-location="ai_facilitator"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C084FC] hover:text-[#D8B4FE] transition-colors"
            >
              See the Obeya Room
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-left" className="lg:order-1">
            <ProductShot
              src="/screenshots/obeya/05-opi-line.png"
              alt="A red pillar in focus in the Obeya Room with an Opi facilitator line"
              label="AI Facilitator — pillar narration"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Governance */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40"
        role="region"
        aria-label="AI governance"
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-[#22C55E]/20 bg-[#22C55E]/5">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#22C55E]">
                Enterprise Governance
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              The Answer to “What Is the AI Actually Doing?”
            </h2>
            <p className="text-sm sm:text-base text-[#8890A0] max-w-2xl mx-auto mt-4">
              Every AI call in the platform runs through one gate, cheapest
              check first. Your IT and procurement teams get a straight answer.
            </p>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variant="slide-up"
            staggerDelay={0.08}
          >
            {governance.map((g, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#1E2738] bg-[#0D1220]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center mb-4 text-[#22C55E]">
                  {g.icon}
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {g.title}
                </h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          variant="scale-in"
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            See Opi on Your Own Data
          </h2>
          <p className="text-sm sm:text-base text-[#8890A0] mb-8 max-w-xl mx-auto">
            We'll walk you through Opi Insights and the AI Facilitator in a live
            environment, then talk about your sites and your huddle routine.
          </p>
          <Link
            href="/contact"
            data-umami-event="cta_click"
            data-umami-event-button="book_a_demo"
            data-umami-event-location="ai_bottom"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
            style={{
              background: "linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)",
            }}
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </section>
    </MarketingLayout>
  );
}
