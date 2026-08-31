/**
 * AIBadge — Sparkle badge indicating AI-powered features.
 * Used on ServiceCards, SolutionPages, and anywhere AI features need highlighting.
 * Design: "Neon Operations" — teal/cyan glow with sparkle icon
 */
import { Sparkles } from "lucide-react";
import type { AIFeature } from "@/config/services";

/** Small inline badge for cards */
export function AIBadgeInline() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#1DB8CE]/10 text-[#1DB8CE] border border-[#1DB8CE]/20">
      <Sparkles className="w-3 h-3" />
      AI-Powered
    </span>
  );
}

/** Feature list for solution pages */
export function AIFeatureList({ features }: { features: AIFeature[] }) {
  if (features.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle teal glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(29,184,206,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-[#1DB8CE]/20 bg-[#1DB8CE]/5">
            <Sparkles className="w-4 h-4 text-[#1DB8CE]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#1DB8CE]">
              Built-In AI
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Montserrat" }}
          >
            Intelligence at Every Layer
          </h2>
          <p className="text-[#8890A0] max-w-xl mx-auto">
            AI is not an add-on. It is woven into the core of every service,
            working behind the scenes to surface insights and automate
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-[#1DB8CE]/15 bg-[#0D1220]/80 hover:border-[#1DB8CE]/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1DB8CE]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1DB8CE]/15 transition-colors">
                  <Sparkles className="w-5 h-5 text-[#1DB8CE]" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white mb-1.5"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#8890A0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIBadgeInline;
