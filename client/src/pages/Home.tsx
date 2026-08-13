/**
 * Home Page — TASK-10/22/25/26/27 + BATCH-4 (Tasks 1-4)
 * Design: "Neon Operations"
 * Sections: Hero, Stats, Problem, Core Services (animated), Hub Services (animated),
 *           Value Case, Scalability, AI Callout, Why Oplytics, Personas, CTA
 */
import MarketingLayout from '@/components/shared/MarketingLayout';
import HeroSection from '@/components/shared/HeroSection';
import AnimatedServiceCard from '@/components/shared/AnimatedServiceCard';
import ProblemSection from '@/components/shared/ProblemSection';
import ValueCaseSection from '@/components/shared/ValueCaseSection';
import ScalabilitySection from '@/components/shared/ScalabilitySection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import PersonaSection from '@/components/shared/PersonaSection';
import SEOHead from '@/components/shared/SEOHead';
import AnimateOnScroll, { StaggerContainer } from '@/components/shared/AnimateOnScroll';
import { coreServices, hubServices, liveServices } from '@/config/services';
import { sizePresets, calculateROI } from '@/lib/roiCalculator';
import { Link } from 'wouter';
import {
  ArrowRight, TrendingUp, Shield, BarChart3,
  Target, Zap, Users, Sparkles, Calculator
} from 'lucide-react';

const roiTeaserResults = calculateROI({ size: 'medium', ...sizePresets.medium });

const whyFeatures = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Real-Time Visibility',
    description: 'See your entire operation in real time. No more spreadsheets, no more guesswork. Data-driven decisions at every level.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Rapid Deployment',
    description: 'Go live in days, not months. Cloud-native architecture means zero infrastructure overhead and instant updates.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Built for Manufacturing',
    description: 'Designed by operations professionals for operations professionals. Every feature solves a real manufacturing floor problem.',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Continuous Improvement',
    description: 'Embed CI/Lean/Six Sigma methodologies directly into your daily workflows. Track improvement actions to closure.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Team Accountability',
    description: 'Digital tier boards, daily management routines, and action tracking that drive ownership at every level.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Scalable Platform',
    description: 'Start with one module and scale across your entire organisation. Unified data model connects every service.',
  },
];


export default function Home() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Oplytics.digital"
        description="Operational excellence platform for manufacturing. Real-time OEE, digital SQDCP boards, safety management, and continuous improvement — all in one place."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Oplytics.digital',
          url: 'https://oplytics.digital',
          description: 'Operational excellence platform for manufacturing.',
        }}
      />

      {/* Hero */}
      <HeroSection
        headline="Operational Excellence. One Digital Platform."
        subheadline="Fully Integrated. Powered by AI."
        subtext="We build OpEx and CI into each connecting step of your deployment process. From Enterprise strategy through Business Units, Sites, Areas, down to your manufacturing assets. Live Policy Deployment, SQDCP Dashboards, real-time OEE and integrated Action Management. When an OEE loss triggers an action, that action flows into the SQDCP board, links to the relevant Hoshin objective, and tracks through to verified closure — every improvement effort traceable to its result. All supported by AI for better decision making and process compliance. All in one platform."
        status="live"
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663031899852/TqfjMS5mXpLDBG5ze8gzfz/hero-main-8i2QPeXPF5Zif5HP36QHAA.webp"
        backgroundVideo="/video/hero-microchip.mp4"
        customCtas={[
          { label: 'Try It Free', href: '/contact', variant: 'primary' },
          { label: 'Explore Solutions', href: '/solutions', variant: 'secondary' },
        ]}
      />

      {/* Founder credibility strap */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 text-center" role="region" aria-label="Founder background">
        <p className="text-xs sm:text-sm text-[#596475] max-w-2xl mx-auto">
          Built by an operations excellence specialist with over 20 years driving continuous improvement across aerospace &amp; defence, HVAC, and chemical manufacturing.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40" role="region" aria-label="Platform statistics">
        <StaggerContainer className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center" variant="scale-in" staggerDelay={0.1}>
          {[
            { value: '8', label: 'Platform Services' },
            { value: String(liveServices.length), label: 'Live & Deployed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[#596475] font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* BATCH-4 TASK-1: The Problem */}
      <ProblemSection />

      {/* Solutions Grid — BATCH-4 TASK-4: Animated Service Cards */}
      <section id="solutions" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" role="region" aria-label="Platform solutions">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll variant="slide-up" className="text-center mb-12 sm:mb-14">
            <span className="section-label text-[#8C34E9] mb-3 block">Platform Services</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
              One Platform, Eight Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#8890A0] mt-4 max-w-2xl mx-auto">
              Each service is purpose-built for manufacturing operations. Start with what you need, scale when you are ready.
            </p>
          </AnimateOnScroll>

          {/* Core Platform */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C34E9] whitespace-nowrap">
              Core Platform
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#8C34E9]/20 to-transparent" />
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.08}>
            {coreServices.map(service => (
              <AnimatedServiceCard
                key={service.id}
                slug={service.id}
                name={service.name}
                tagline={service.tagline}
                color={service.accentColor}
                route={`/solutions/${service.slug}`}
                status={service.status}
                iconName={service.icon}
                demoScreenshots={service.demoScreenshots}
              />
            ))}
          </StaggerContainer>

          {/* Delineation Line */}
          <div className="flex items-center gap-4 my-8 sm:my-10">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#596475] whitespace-nowrap">
              Specialist Hubs
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1E2738]/40 to-transparent" />
          </div>

          {/* Hub Services */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" variant="slide-up" staggerDelay={0.08}>
            {hubServices.map(service => (
              <AnimatedServiceCard
                key={service.id}
                slug={service.id}
                name={service.name}
                tagline={service.tagline}
                color={service.accentColor}
                route={`/solutions/${service.slug}`}
                status={service.status}
                iconName={service.icon}
                demoScreenshots={service.demoScreenshots}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BATCH-4 TASK-2: Value Case */}
      <ValueCaseSection />

      {/* BATCH-4 TASK-3: Scalability Roadmap */}
      <ScalabilitySection />

      {/* AI Callout Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-[#1E2738]/40" role="region" aria-label="AI capabilities">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, rgba(29,184,206,0.05) 0%, transparent 70%)',
        }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-[#1DB8CE]/20 bg-[#1DB8CE]/5">
              <Sparkles className="w-4 h-4 text-[#1DB8CE]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#1DB8CE]">
                AI-Powered Platform
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Intelligence Built Into Every Service
            </h2>
            <p className="text-sm sm:text-lg text-[#8890A0] max-w-2xl mx-auto mb-10">
              Every Oplytics service is supported by our AI Support Engineer — a smart guided coaching layer built into the platform. It doesn't just show you data, it helps your teams understand it, act on it, and improve continuously. From suggesting corrective actions to guiding users through standard processes, AI is woven into every step.
            </p>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left" variant="slide-up" staggerDelay={0.1}>
            {[
              { title: 'Smart Guided CI Coaching', desc: 'Our AI Support Engineer coaches your teams through standard CI processes — from 5 Whys to corrective action planning — in real time.' },
              { title: 'Smart Automation', desc: 'Automatic loss classification, action prioritisation, and compliance gap detection.' },
              { title: 'Natural Language Insights', desc: 'AI generates plain-English summaries of trends, anomalies, and recommended actions.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border border-[#1DB8CE]/15 bg-[#0D1220]/80">
                <div className="w-8 h-8 rounded-md bg-[#1DB8CE]/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-[#1DB8CE]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>{item.title}</h3>
                <p className="text-xs text-[#8890A0] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ROI Teaser — precomputed medium-org estimate, full calculator lives on /pricing */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#1E2738]/40" role="region" aria-label="Estimated benefit">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-[#22C55E]/20 bg-[#22C55E]/5">
              <Calculator className="w-4 h-4 text-[#22C55E]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#22C55E]">
                Benefit Estimator
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              See the £ Before You Sign
            </h2>
            <p className="text-sm sm:text-lg text-[#8890A0] max-w-2xl mx-auto mb-10">
              A mid-sized manufacturer ({sizePresets.medium.headcount} employees, {sizePresets.medium.lines} lines, {sizePresets.medium.sites} sites) digitising with Oplytics has an estimated annual benefit of:
            </p>
            <div className="text-5xl sm:text-6xl font-black text-[#22C55E] mb-3" style={{ fontFamily: 'Montserrat' }}>
              £{roiTeaserResults.totalAnnualBenefit.toLocaleString()}
            </div>
            <p className="text-xs text-[#596475] max-w-xl mx-auto mb-8">
              Estimate based on time savings, OEE-driven throughput gain, and meeting efficiency. Based on conservative industry benchmarks — actual results vary by operation.
            </p>
            <Link
              href="/pricing"
              data-umami-event="cta_click"
              data-umami-event-button="calculate_your_savings"
              data-umami-event-location="home_roi_teaser"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              Calculate Your Savings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Oplytics */}
      <FeatureGrid
        items={whyFeatures}
        columns={3}
        sectionLabel="Why Oplytics"
        sectionTitle="Built Different. Built Better."
      />

      {/* Who Is Oplytics For? */}
      <PersonaSection />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" role="region" aria-label="Call to action">
        <AnimateOnScroll variant="scale-in" className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Ready to Transform Your Operations?
          </h2>
          <p className="text-sm sm:text-base text-[#8890A0] mb-8 max-w-xl mx-auto">
            Start your operational excellence journey with a platform built for manufacturing, not adapted for it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              data-umami-event="cta_click"
              data-umami-event-button="try_it_free"
              data-umami-event-location="home_bottom"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-white tracking-wider hover:opacity-90 glow-purple w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
            >
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              data-umami-event="cta_click"
              data-umami-event-button="view_plans"
              data-umami-event-location="home_bottom"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-bold text-[#8890A0] border border-[#1E2738] hover:border-[#8C34E9]/40 hover:text-white bg-[#0D1220]/60 w-full sm:w-auto justify-center"
            >
              View Plans
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </MarketingLayout>
  );
}
