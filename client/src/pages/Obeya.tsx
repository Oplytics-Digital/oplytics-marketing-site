/**
 * /obeya — the Obeya Room landing page.
 *
 * Leads with the immersive 3D huddle room (SQDCP's "AI Facilitator" feature),
 * walks the meeting flow with the ObeyaWalkthrough component, then the AI
 * Facilitator and a link across to the wider AI story.
 *
 * Deterministic vs AI is kept explicit throughout — the room, the readiness
 * gate, RAG bands, escalation and action creation are rules; Opi only drafts
 * the facilitation lines.
 */
import { Suspense, lazy } from "react";
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
  DoorOpen,
  ClipboardCheck,
  Footprints,
  Sparkles,
  FileCheck2,
  Cpu,
  Hand,
} from "lucide-react";

const ObeyaWalkthrough = lazy(
  () => import("@/components/demos/ObeyaWalkthrough")
);

const flow = [
  {
    icon: <DoorOpen className="w-5 h-5" />,
    title: "Walk into the room",
    desc: "A 3D war room with every SQDCP pillar on the wall, live from the current review period. The point is to be in the room together, not staring at a spreadsheet.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: "Readiness gate",
    desc: "Before the huddle can start, a gate checks every pillar has metrics, thresholds and an entry for the period — and names the ones that don't. No huddle on missing data.",
  },
  {
    icon: <Hand className="w-5 h-5" />,
    title: "Check in",
    desc: "Assign a representative to each pillar for today, then check in. A quick ceremony that says who's accountable for what in this huddle — not an identity check.",
  },
  {
    icon: <Footprints className="w-5 h-5" />,
    title: "Board walk",
    desc: "The camera focuses each pillar in turn. Green pillars get acknowledged and you move on. Reds get a PDCA panel and a 5-Why stepper, docked right beside the card.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Action on every red",
    desc: "A red metric raises an action automatically, routed to the right owner through your reporting line. The facilitator confirms the owner and the date.",
  },
  {
    icon: <FileCheck2 className="w-5 h-5" />,
    title: "Close out",
    desc: "Finish on a recap — the win of the day, the issues that matter, tomorrow's priorities. It carries forward into the next huddle.",
  },
];

export default function Obeya() {
  return (
    <MarketingLayout>
      <SEOHead
        title="The Obeya Room"
        description="Run your daily SQDCP huddle in an immersive 3D Obeya Room — a readiness gate, a board walk with PDCA on every red, and a close-out recap. Turn on the AI Facilitator and Opi drafts the facilitation as you go. Hierarchy-aware rooms, from plant review down to area teams."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Oplytics Obeya Room",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Immersive 3D daily-management huddle room for SQDCP, with an optional AI Facilitator.",
        }}
      />

      <HeroSection
        headline="Your Daily Huddle, in a Room Built for It"
        subheadline="The Obeya Room"
        subtext="Every tier runs its SQDCP huddle in an immersive 3D room — a readiness gate that won't let you start on missing data, a board walk with PDCA on every red, and a close-out that carries forward. Turn on the AI Facilitator and Opi drafts the prompts as you go."
        status="live"
        customCtas={[
          { label: "Book a Demo", href: "/contact", variant: "primary" },
          { label: "How the AI works", href: "/ai", variant: "secondary" },
        ]}
      />

      {/* Hero shot of the room */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll variant="scale-in">
            <ProductShot
              src="/screenshots/obeya/01-room.png"
              alt="The Obeya Room — a 3D war room with every SQDCP pillar on the wall"
              label="The Obeya Room — 3D huddle wall"
              aspect="aspect-[16/9]"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Walkthrough */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="Obeya Room walkthrough"
      >
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-10">
            <span className="section-label text-[#8C34E9] mb-3 block">
              Walk Into the Room
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              A Huddle, Start to Finish
            </h2>
            <p className="text-sm sm:text-base text-[#8890A0] max-w-2xl mx-auto mt-4">
              Real screens from the Testa demo environment. Step through it, or
              let it play.
            </p>
          </AnimateOnScroll>
          <Suspense
            fallback={
              <div className="aspect-[1490/778] rounded-lg border border-[#1E2738] bg-[#0D1220] flex items-center justify-center">
                <span className="text-xs text-[#596475] animate-pulse">
                  Loading walkthrough…
                </span>
              </div>
            }
          >
            <ObeyaWalkthrough />
          </Suspense>
        </div>
      </section>

      {/* The flow */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40"
        style={{
          background: "linear-gradient(180deg, #080C16 0%, #0D1220 100%)",
        }}
        role="region"
        aria-label="How the huddle runs"
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12">
            <span className="section-label text-[#1DB8CE] mb-3 block">
              How It Runs
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              Six Steps, Same Every Day
            </h2>
          </AnimateOnScroll>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variant="slide-up"
            staggerDelay={0.08}
          >
            {flow.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#1E2738] bg-[#0D1220]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#8C34E9]/10 flex items-center justify-center text-[#C084FC]">
                    {f.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: "#596475" }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[#8890A0] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hierarchy-aware */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="Hierarchy-aware rooms"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimateOnScroll variant="slide-right">
            <span className="section-label text-[#1DB8CE] mb-3 block">
              Tier on Tier
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              One Room per Team, Feeding the One Above
            </h2>
            <p className="text-sm sm:text-base text-[#A0A8B8] leading-relaxed mb-4">
              Area teams huddle in their room; the plant review is its own room,
              fed by the area huddles below it. An issue that can't be resolved
              at one level escalates to the room one hierarchy level up — the
              target resolved live from your org structure, not hard-wired.
            </p>
            <p className="text-sm sm:text-base text-[#A0A8B8] leading-relaxed">
              The board walk, the RAG bands, the readiness gate, the escalation
              routing — all deterministic rules. Predictable, auditable, the
              same every day.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-left">
            <ProductShot
              src="/screenshots/obeya/02-lobby.png"
              alt="The Obeya Room lobby — readiness gate and pillar status"
              label="Lobby — readiness gate"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* AI Facilitator */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40"
        role="region"
        aria-label="AI Facilitator"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-[#1DB8CE]/20 bg-[#1DB8CE]/5">
              <Cpu className="w-4 h-4 text-[#1DB8CE]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#1DB8CE]">
                Optional — Professional &amp; Enterprise
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Turn On the AI Facilitator
            </h2>
            <p className="text-sm sm:text-lg text-[#8890A0] max-w-2xl mx-auto mb-8">
              With it on, Opi drafts a spoken-style line at each stage hand-off,
              a read on every red or amber pillar, the next 5-Why step, an
              accountability prompt for each overdue action, and the close-out
              recap. Opi drafts; the facilitator edits and confirms. Run the
              huddle in manual mode and no AI is involved at all.
            </p>
            <Link
              href="/ai"
              data-umami-event="cta_click"
              data-umami-event-button="how_the_ai_works"
              data-umami-event-location="obeya_facilitator"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1DB8CE] hover:text-[#5FD3E4] transition-colors"
            >
              How the AI works, end to end
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
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
            See the Obeya Room on Your Boards
          </h2>
          <p className="text-sm sm:text-base text-[#8890A0] mb-8 max-w-xl mx-auto">
            Bring your SQDCP pillars and your huddle routine — we'll show you
            the room running on data that looks like yours.
          </p>
          <Link
            href="/contact"
            data-umami-event="cta_click"
            data-umami-event-button="book_a_demo"
            data-umami-event-location="obeya_bottom"
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
