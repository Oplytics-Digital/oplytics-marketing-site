/**
 * BATCH-4 TASK-8: Tier Meeting Workflow section ported from platform SQDCPSolution.tsx
 * Shows how SQDCP boards are used in daily, weekly, and monthly tier meetings
 */
import { Users, MessageSquare, Target, Layers, ArrowRight } from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const tiers = [
  {
    level: "Tier 1",
    title: "Shop Floor",
    time: "Daily · 10 min",
    desc: "Operators review yesterday's SQDCP status at the board. Red items generate immediate actions. Green items are acknowledged. New issues are raised and captured.",
    color: "#1DB8CE",
    icon: Users,
  },
  {
    level: "Tier 2",
    title: "Department",
    time: "Daily · 15 min",
    desc: "Supervisors review escalated items from Tier 1 boards. Cross-functional issues are identified. Resource allocation decisions are made. Unresolved items escalate to Tier 3.",
    color: "#8C34E9",
    icon: MessageSquare,
  },
  {
    level: "Tier 3",
    title: "Site Leadership",
    time: "Weekly · 30 min",
    desc: "Site managers review aggregated SQDCP performance. Strategic themes are identified from recurring issues. Capital investment decisions are informed by data trends.",
    color: "#22C55E",
    icon: Target,
  },
  {
    level: "Tier 4",
    title: "Enterprise",
    time: "Monthly · 60 min",
    desc: "Enterprise leadership reviews cross-site SQDCP performance. Best practices are shared between sites. Strategic alignment with Hoshin Kanri objectives is verified.",
    color: "#F59E0B",
    icon: Layers,
  },
];

export default function TierMeetingSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="slide-up">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#8C34E9" }}
          >
            Tiered Visual Management
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-white mt-3 mb-3"
            style={{ fontFamily: "Montserrat" }}
          >
            Structured <span style={{ color: "#8C34E9" }}>Tier Meetings</span>
          </h2>
          <p
            className="text-sm mb-10 max-w-3xl"
            style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
          >
            SQDCP Dashboard supports the full tiered meeting structure — from
            10-minute shop floor stand-ups to monthly enterprise reviews. Each
            tier aggregates data from the level below, creating a clear
            escalation path from operator to boardroom.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variant="slide-up"
          staggerDelay={0.1}
        >
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="rounded-xl p-5 transition-all duration-300 hover:translate-y-[-2px]"
              style={{ background: "#0d1220", border: "1px solid #1e2738" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: tier.color + "15" }}
                >
                  <tier.icon
                    className="w-4 h-4"
                    style={{ color: tier.color }}
                  />
                </div>
                <div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider block"
                    style={{ color: tier.color }}
                  >
                    {tier.level}
                  </span>
                  <span
                    className="text-sm font-black text-white"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {tier.title}
                  </span>
                </div>
              </div>
              <span
                className="text-[9px] font-semibold px-2 py-0.5 rounded inline-block mb-3"
                style={{ background: tier.color + "15", color: tier.color }}
              >
                {tier.time}
              </span>
              <p
                className="text-[11px] leading-relaxed"
                style={{ color: "#8890a0" }}
              >
                {tier.desc}
              </p>
              {i < 3 && (
                <div className="mt-3 flex items-center gap-1">
                  <ArrowRight
                    className="w-3 h-3"
                    style={{ color: "#596475" }}
                  />
                  <span
                    className="text-[8px] font-semibold"
                    style={{ color: "#596475" }}
                  >
                    Escalates to {tiers[i + 1].level}
                  </span>
                </div>
              )}
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
