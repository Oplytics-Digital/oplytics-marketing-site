/**
 * BATCH-4 TASK-3: Scalability roadmap section ported from platform Portal.tsx
 * Machine to C-Suite phased rollout timeline + partnership hooks
 */
import {
  Rocket,
  Factory,
  Globe,
  BarChart3,
  Link2,
  RefreshCw,
  Handshake,
  Workflow,
} from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const phases = [
  {
    phase: "01",
    title: "Pilot & Prove",
    desc: "Deploy on a single line or cell. Prove the value with real data and measurable results before expanding.",
    icon: Rocket,
  },
  {
    phase: "02",
    title: "Site Rollout",
    desc: "Extend across your facility. Connect departments, standardise workflows, and build cross-functional visibility.",
    icon: Factory,
  },
  {
    phase: "03",
    title: "Multi-Site",
    desc: "Roll out across multiple locations with centralised dashboards, benchmarking, and best-practice sharing between sites.",
    icon: Globe,
  },
  {
    phase: "04",
    title: "Enterprise Scale",
    desc: "Full organisational deployment with executive analytics, global governance, and strategic alignment from machine to C-Suite.",
    icon: BarChart3,
  },
];

const partnerCards = [
  {
    icon: Link2,
    title: "Deep System Connections",
    desc: "We integrate with your ERP, MES, SCADA, and IoT infrastructure. Your data flows where it needs to — automatically and securely.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "We continuously build and refine automated workflows that eliminate manual tasks, reduce errors, and free your teams to focus on improvement.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Integration Development",
    desc: "We are always working on new integrations and connections to drive more value from your existing technology investments.",
  },
  {
    icon: Handshake,
    title: "Implementation Partnership",
    desc: "Our team works with yours through every phase — from pilot scoping to enterprise rollout. We share the accountability for your success.",
  },
];

export default function ScalabilitySection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="slide-up" className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#8C34E9" }}
          >
            Scalability
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-white mt-3 mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            From Machine to <span style={{ color: "#8C34E9" }}>C-Suite</span>
          </h2>
          <p
            className="text-base max-w-3xl mx-auto"
            style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
          >
            Enterprise data flows from the shop floor to the boardroom. We grow
            with you — not just as a tool, but as a partner deeply connected to
            your systems and committed to driving continuous value.
          </p>
        </AnimateOnScroll>

        {/* Implementation Roadmap */}
        <StaggerContainer
          className="grid md:grid-cols-4 gap-6 mb-16"
          variant="slide-up"
          staggerDelay={0.12}
        >
          {phases.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl relative"
              style={{
                background: "#0d1220",
                border: "1px solid #1e2738",
                borderTop: "3px solid #8C34E9",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: "#8C34E915", color: "#8C34E9" }}
                >
                  Phase {item.phase}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "#8C34E915" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "#8C34E9" }} />
              </div>
              <h3
                className="text-sm font-bold text-white mb-2"
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
          ))}
        </StaggerContainer>

        {/* Partnership hooks */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "#0d1220", border: "1px solid #1e2738" }}
        >
          <AnimateOnScroll variant="slide-up" className="text-center mb-8">
            <h3
              className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: "Montserrat" }}
            >
              More Than a Tool —{" "}
              <span style={{ color: "#8C34E9" }}>A Partnership</span>
            </h3>
            <p
              className="text-sm max-w-2xl mx-auto"
              style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
            >
              We do not just sell software and walk away. We work alongside your
              teams to ensure the platform delivers continuous, compounding
              value.
            </p>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
            variant="slide-up"
            staggerDelay={0.1}
          >
            {partnerCards.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "#8C34E915" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "#8C34E9" }} />
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
