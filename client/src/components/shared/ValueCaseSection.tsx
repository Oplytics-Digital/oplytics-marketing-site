/**
 * BATCH-4 TASK-2: Value Case section ported from platform Portal.tsx
 * Four cards: Integrated AI Insights, Automated Connections, Standard Workflows, Automated Manager Modules
 */
import { Brain, Link2, Workflow, Cog } from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const valueCards = [
  {
    icon: Brain,
    title: "Integrated AI Insights",
    desc: "AI analyses data across all modules — surfacing patterns, predicting issues, and recommending actions that no single tool could identify alone.",
    color: "#1DB8CE",
  },
  {
    icon: Link2,
    title: "Automated Connections",
    desc: "Actions from SQDCP boards flow into Action Manager. OEE losses trigger improvement workflows. Safety incidents update risk matrices. Automatically.",
    color: "#8C34E9",
  },
  {
    icon: Workflow,
    title: "Standard Workflows",
    desc: "Best-practice processes built in — PDCA cycles, 8D problem solving, A3 thinking, Kaizen events. Your teams follow proven methods from day one.",
    color: "#22C55E",
  },
  {
    icon: Cog,
    title: "Automated Manager Modules",
    desc: "Each manager module handles its domain intelligently — escalating overdue actions, flagging quality trends, scheduling audits, and notifying the right people.",
    color: "#F59E0B",
  },
];

export default function ValueCaseSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "#0d1220", border: "1px solid #1e2738" }}
        >
          <AnimateOnScroll variant="slide-up" className="text-center mb-8">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#22C55E" }}
            >
              The Value We Deliver
            </span>
            <h2
              className="text-2xl md:text-3xl font-black text-white mt-3 mb-3"
              style={{ fontFamily: "Montserrat" }}
            >
              How Integrated Intelligence Drives{" "}
              <span style={{ color: "#22C55E" }}>Real Results</span>
            </h2>
            <p
              className="text-sm max-w-2xl mx-auto"
              style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
            >
              Every module shares data, context, and AI insights. This
              integration is what turns individual tools into a compounding
              advantage.
            </p>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
            variant="slide-up"
            staggerDelay={0.1}
          >
            {valueCards.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: item.color + "15" }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: item.color }}
                  />
                </div>
                <h4
                  className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[12px] leading-relaxed"
                  style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
