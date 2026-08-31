/**
 * BATCH-4 TASK-6: IoT Device Showcase section ported from platform OEEManagerSolution.tsx
 * Shows physical hardware — edge devices, sensors, gateways — with specs
 */
import { Cpu, Wifi, Shield, Thermometer, Zap, Radio } from "lucide-react";
import AnimateOnScroll, { StaggerContainer } from "./AnimateOnScroll";

const devices = [
  {
    name: "Edge Gateway",
    desc: "Industrial-grade edge computing gateway. Collects, processes, and transmits machine data in real-time.",
    specs: ["ARM Cortex-A72", "4GB RAM", "IP67 Rated", "DIN-Rail Mount"],
    icon: Cpu,
    color: "#1DB8CE",
  },
  {
    name: "Vibration Sensor",
    desc: "Tri-axis vibration and temperature sensor for predictive maintenance on rotating equipment.",
    specs: [
      "0–20kHz Range",
      "±16g Acceleration",
      "Wireless BLE",
      "Battery: 5 Years",
    ],
    icon: Radio,
    color: "#8C34E9",
  },
  {
    name: "Current Transformer",
    desc: "Non-invasive current sensor for monitoring machine power consumption and detecting anomalies.",
    specs: [
      "Split-Core Design",
      "0–200A Range",
      "±1% Accuracy",
      "Retrofit Install",
    ],
    icon: Zap,
    color: "#F59E0B",
  },
  {
    name: "Temperature Probe",
    desc: "Industrial thermocouple probe for process temperature monitoring with wireless transmission.",
    specs: [
      "-200°C to +1350°C",
      "Type K/J/T",
      "IP68 Rated",
      "Wireless Gateway",
    ],
    icon: Thermometer,
    color: "#EF4444",
  },
  {
    name: "Connectivity Module",
    desc: "Protocol translation module supporting OPC-UA, Modbus, MQTT, and legacy serial connections.",
    specs: ["Multi-Protocol", "OPC-UA Server", "Modbus RTU/TCP", "MQTT Broker"],
    icon: Wifi,
    color: "#22C55E",
  },
  {
    name: "Security Gateway",
    desc: "Network security appliance providing encrypted tunnels between shop floor devices and the cloud.",
    specs: [
      "AES-256 Encryption",
      "VPN Tunnel",
      "Firewall Rules",
      "Audit Logging",
    ],
    icon: Shield,
    color: "#3B82F6",
  },
];

export default function IoTShowcaseSection() {
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
        <AnimateOnScroll variant="slide-up" className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1DB8CE" }}
          >
            Hardware
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-white mt-3 mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            IoT Smart Device <span style={{ color: "#1DB8CE" }}>Showcase</span>
          </h2>
          <p
            className="text-base max-w-3xl mx-auto"
            style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
          >
            Purpose-built industrial hardware designed for harsh manufacturing
            environments. Plug-and-play deployment with zero disruption to your
            production schedule.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variant="slide-up"
          staggerDelay={0.08}
        >
          {devices.map((device, i) => (
            <div
              key={i}
              className="rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
              style={{ background: "#0a0e1a", border: "1px solid #1e2738" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: device.color + "15" }}
                >
                  <device.icon
                    className="w-6 h-6"
                    style={{ color: device.color }}
                  />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {device.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8890a0", fontFamily: "Space Grotesk" }}
                  >
                    {device.desc}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {device.specs.map((spec, si) => (
                  <span
                    key={si}
                    className="text-[10px] font-semibold px-2 py-1 rounded"
                    style={{
                      background: device.color + "10",
                      color: device.color,
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
