/**
 * BATCH-4 TASK-7: Value Proposals by Role + Supported Protocols
 * Ported from platform ConnectSolution.tsx
 */
import {
  Briefcase,
  Factory,
  Server,
  Shield,
  TrendingUp,
  Wrench,
  Radio,
} from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const roles = [
  {
    label: "CEO / MD",
    icon: Briefcase,
    color: "#8C34E9",
    metric: "£144K+",
    desc: "Full visibility of operational performance across all sites with real-time executive dashboards.",
  },
  {
    label: "Factory Manager",
    icon: Factory,
    color: "#1DB8CE",
    metric: "30% less downtime",
    desc: "Live production data, automated alerts, and cross-departmental visibility from a single screen.",
  },
  {
    label: "IT Director",
    icon: Server,
    color: "#3B82F6",
    metric: "Zero new licences",
    desc: "Secure, standards-based integration with existing infrastructure. No vendor lock-in.",
  },
  {
    label: "H&S Manager",
    icon: Shield,
    color: "#EF4444",
    metric: "Instant alerts",
    desc: "Real-time safety monitoring with automated incident detection and escalation workflows.",
  },
  {
    label: "CI Manager",
    icon: TrendingUp,
    color: "#F59E0B",
    metric: "Auto loss analysis",
    desc: "Automated loss categorisation and improvement tracking tied to strategic objectives.",
  },
  {
    label: "Maintenance",
    icon: Wrench,
    color: "#22C55E",
    metric: "70% fewer breakdowns",
    desc: "Condition-based monitoring with predictive alerts before failures occur.",
  },
];

const protocols = [
  {
    name: "OPC-UA",
    desc: "Universal standard for industrial interoperability",
  },
  { name: "Modbus RTU", desc: "Serial protocol for legacy equipment" },
  { name: "Modbus TCP", desc: "Ethernet-based Modbus communication" },
  { name: "MQTT", desc: "Lightweight IoT messaging protocol" },
  { name: "Ethernet/IP", desc: "Industrial Ethernet standard" },
  { name: "BLE", desc: "Bluetooth Low Energy for wireless sensors" },
];

export default function ConnectRolesProtocolsSection() {
  return (
    <>
      {/* Supported Protocols */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "#0d1220",
          borderTop: "1px solid #1e2738",
          borderBottom: "1px solid #1e2738",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#10B981" }}
            >
              Compatibility
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-white mt-3 mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Works With Your{" "}
              <span style={{ color: "#10B981" }}>Existing Equipment</span>
            </h2>
            <p
              className="text-sm max-w-2xl mx-auto"
              style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
            >
              Our devices support all major industrial communication protocols,
              connecting to both legacy and modern equipment.
            </p>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variant="slide-up"
            staggerDelay={0.06}
          >
            {protocols.map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-xl text-center"
                style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
              >
                <Radio
                  className="w-5 h-5 mx-auto mb-2"
                  style={{ color: "#10B981" }}
                />
                <div
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {p.name}
                </div>
                <div
                  className="text-[10px] mt-0.5"
                  style={{ color: "#596475" }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Value Proposals by Role */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#10B981" }}
            >
              Tailored For Your Role
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-white mt-3 mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              See the Value for{" "}
              <span style={{ color: "#10B981" }}>Your Department</span>
            </h2>
            <p
              className="text-sm max-w-2xl mx-auto"
              style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
            >
              Every stakeholder has different priorities. Here is how
              OplyticsConnect delivers value to each role in your organisation.
            </p>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variant="slide-up"
            staggerDelay={0.08}
          >
            {roles.map((r, i) => (
              <div
                key={i}
                className="p-5 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{ background: "#0d1220", border: "1px solid #1e2738" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: r.color + "15" }}
                  >
                    <r.icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="text-[10px] font-semibold"
                      style={{ color: r.color }}
                    >
                      {r.metric}
                    </div>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
