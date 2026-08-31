/**
 * BATCH-4 TASK-1: "The Problem" section ported from platform Portal.tsx
 * Adapted to marketing site design system (AnimateOnScroll, StaggerContainer)
 */
import { DollarSign, Lock, AlertTriangle, Clock } from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const painPoints = [
  {
    icon: DollarSign,
    title: "Enterprise Tools That Cost More Than the Problem",
    desc: "Six-figure licensing fees and 12-month implementations drain resources before you see any return. The software costs more than the inefficiency it was supposed to fix.",
    color: "#EF4444",
  },
  {
    icon: Lock,
    title: "Rigid Systems That Fight Your Processes",
    desc: '"One-size-fits-all" platforms force you to abandon proven workflows. Your teams resist, adoption stalls, and the investment sits unused.',
    color: "#F59E0B",
  },
  {
    icon: AlertTriangle,
    title: "Fragmented Data, Delayed Decisions",
    desc: "Disconnected tools mean manual data re-entry, conflicting reports, and decisions made on yesterday's numbers. Quality escapes. Safety risks go unnoticed.",
    color: "#F97316",
  },
  {
    icon: Clock,
    title: "Months to Value, Years to ROI",
    desc: "Traditional enterprise deployments take 6–18 months before teams see any benefit. By then, the operational landscape has already changed.",
    color: "#8B5CF6",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "#0d1220",
        borderTop: "1px solid #1e2738",
        borderBottom: "1px solid #1e2738",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — narrative + stats */}
          <AnimateOnScroll variant="slide-up">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#EF4444" }}
            >
              The Problem
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-white mt-3 mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Your Prize Is{" "}
              <span style={{ color: "#22C55E" }}>Operational Excellence</span>
              <br />
              <span
                className="text-2xl md:text-3xl"
                style={{ color: "#EF4444" }}
              >
                But Your Systems Hold You Back
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
            >
              The average manufacturing operation loses{" "}
              <strong className="text-white">
                20–30% of its productive capacity
              </strong>{" "}
              to inefficiencies that existing tools either cannot see or cannot
              fix. Fragmented systems, manual data collection, and enterprise
              software that costs more than the problems it solves — these are
              the barriers between you and the performance your operation is
              capable of.
            </p>

            {/* Cost card */}
            <div
              className="rounded-xl p-5 mb-6"
              style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
            >
              <div
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: "#596475" }}
              >
                Avg. Operational Efficiency Loss
              </div>
              <div className="flex items-end gap-3 mb-3">
                <div
                  className="text-5xl font-black"
                  style={{ color: "#EF4444", fontFamily: "Montserrat" }}
                >
                  28%
                </div>
                <div className="text-sm pb-1" style={{ color: "#8890a0" }}>
                  of productive capacity lost annually
                </div>
              </div>
              <div
                className="h-3 rounded-full"
                style={{ background: "#1a2235" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #EF4444, #F97316)",
                    width: "28%",
                  }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px]" style={{ color: "#596475" }}>
                  Unplanned downtime, quality losses, process waste
                </span>
                <span
                  className="text-[10px] font-bold"
                  style={{ color: "#EF4444" }}
                >
                  Your hidden cost
                </span>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "#596475", fontFamily: "Space Grotesk" }}
            >
              This is the gap between where you are and where you could be.
              Oplytics exists to close it — affordably, intelligently, and fast.
            </p>
          </AnimateOnScroll>

          {/* Right — pain point cards */}
          <StaggerContainer
            className="space-y-4"
            variant="slide-up"
            staggerDelay={0.1}
          >
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl"
                style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: item.color + "18" }}
                >
                  <item.icon
                    className="w-5 h-5"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
